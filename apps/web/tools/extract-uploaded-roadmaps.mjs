import fs from 'node:fs';
import path from 'node:path';
import JSZip from 'jszip';

const repoRoot = path.resolve(import.meta.dirname, '../../..');
const inputDir = path.join(repoRoot, 'Roadmap_extracted', 'Roadmap');
const outputFile = path.join(repoRoot, 'apps/web/src/data/uploadedCareerRoadmaps.js');

function slugify(value = '') {
  return String(value)
    .replace(/\s*\([^)]*\)\s*/g, ' ')
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function decodeRtf(input) {
  let i = 0;
  let output = '';
  const stack = [];
  let ignorable = false;

  while (i < input.length) {
    const char = input[i];

    if (char === '{') {
      stack.push(ignorable);
      if (input[i + 1] === '\\' && input[i + 2] === '*') ignorable = true;
      i += 1;
      continue;
    }

    if (char === '}') {
      ignorable = stack.pop() || false;
      i += 1;
      continue;
    }

    if (ignorable) {
      i += 1;
      continue;
    }

    if (char !== '\\') {
      output += char;
      i += 1;
      continue;
    }

    const next = input[i + 1];
    if (next === '\\' || next === '{' || next === '}') {
      output += next;
      i += 2;
      continue;
    }

    if (next === "'") {
      const hex = input.slice(i + 2, i + 4);
      output += Buffer.from(hex, 'hex').toString('latin1');
      i += 4;
      continue;
    }

    const match = input.slice(i + 1).match(/^([a-zA-Z]+)(-?\d+)? ?/);
    if (!match) {
      i += 2;
      continue;
    }

    const [, word, param] = match;
    if (word === 'par' || word === 'line') output += '\n';
    if (word === 'tab') output += '\t';
    if (word === 'u' && param) {
      let code = Number(param);
      if (code < 0) code += 65536;
      output += String.fromCharCode(code);
    }

    i += 1 + match[0].length;
  }

  return output
    .replace(/\u2013|\u2014|/g, '-')
    .replace(/\u2022/g, '')
    .replace(/â¸»|⸻/g, '')
    .replace(/;{2,}/g, '')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function decodeXmlText(value = '') {
  return String(value)
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/\u00e2\u201a\u00b9/g, 'INR ')
    .replace(/\u00c2\u00a3/g, 'GBP ')
    .replace(/\u00c2\u00a5/g, 'CNY ')
    .replace(/\s+/g, ' ')
    .trim();
}

async function decodeDocx(filePath) {
  const zip = await JSZip.loadAsync(fs.readFileSync(filePath));
  const documentXml = await zip.file('word/document.xml')?.async('string');
  if (!documentXml) return '';

  return [...documentXml.matchAll(/<w:p\b[\s\S]*?<\/w:p>/g)]
    .map(([paragraph]) =>
      [...paragraph.matchAll(/<w:t(?:\s[^>]*)?>([\s\S]*?)<\/w:t>/g)]
        .map(([, text]) => decodeXmlText(text))
        .join('')
        .trim()
    )
    .filter(Boolean)
    .join('\n');
}

function unique(items) {
  return [...new Set(items.map((item) => item.trim()).filter(Boolean))];
}

function listBetween(lines, startIndex, stopLabels) {
  const items = [];
  for (let i = startIndex + 1; i < lines.length; i += 1) {
    const line = lines[i];
    if (stopLabels.some((label) => line.toLowerCase().startsWith(label.toLowerCase()))) break;
    if (line && !/^phase\s+\d+:/i.test(line)) items.push(line);
  }
  return unique(items);
}

function paragraphBetween(lines, startIndex, stopLabels) {
  const items = listBetween(lines, startIndex, stopLabels);
  return items.join(' ').replace(/\s+/g, ' ').trim();
}

function parseTimeline(value) {
  const numbers = [...value.matchAll(/\d+/g)].map((match) => Number(match[0]));
  if (!numbers.length) return 4;
  if (numbers.length === 1) return numbers[0];
  return Math.max(1, Math.round((numbers[0] + numbers[1]) / 2));
}

async function parseCareer(filePath) {
  const extension = path.extname(filePath).toLowerCase();
  const raw = extension === '.rtf' ? fs.readFileSync(filePath, 'utf8') : '';
  const text = extension === '.docx' ? await decodeDocx(filePath) : decodeRtf(raw);
  const lines = text
    .split('\n')
    .map((line) => line.replace(/^\s*[•\-\d.)]+\s*/, '').trim())
    .filter((line) => line && !/^;+$/.test(line));

  const title = lines.find((line) => /roadmap$/i.test(line)) || path.basename(filePath, extension);
  const name = title.replace(/\s+Roadmap$/i, '').trim();
  const slug = slugify(name);
  const firstPhaseIndex = lines.findIndex((line) => /^phase\s+\d+:/i.test(line));
  const intro = lines.slice(1, firstPhaseIndex > 0 ? firstPhaseIndex : 3).join(' ');
  const phaseIndexes = lines
    .map((line, index) => (/^phase\s+\d+:/i.test(line) ? index : -1))
    .filter((index) => index >= 0);

  const roadmap = phaseIndexes.map((start, index) => {
    const end = phaseIndexes[index + 1] ?? lines.length;
    const chunk = lines.slice(start, end);
    const originalPhase = chunk[0].replace(/^phase\s+\d+:\s*/i, '').trim();
    const timelineLine = chunk.find((line) => /^timeline:/i.test(line)) || '';
    const toolsIndex = chunk.findIndex((line) => /^(languages \/ tools|tools|languages and tools|tools \/ platforms|platforms \/ tools)$/i.test(line));
    const skillsIndex = chunk.findIndex((line) => /^(skills to learn|what to learn|concepts to learn|topics to learn|core concepts)$/i.test(line));
    const buildIndex = chunk.findIndex((line) => /^(what to build|mini project|project|practice projects|portfolio projects|practice)$/i.test(line));
    const outcomeIndex = chunk.findIndex((line) => /^(career outcome|outcome|expected outcome|what you should be able to do)$/i.test(line));
    const nextIndex = chunk.findIndex((line) => /^(next action|what to do next)$/i.test(line));
    const checklistIndex = chunk.findIndex((line) => /^checklist$/i.test(line));
    const stopLabels = [
      'Timeline:',
      'Languages / Tools',
      'Tools',
      'Languages and Tools',
      'Tools / Platforms',
      'Platforms / Tools',
      'Skills to Learn',
      'What to Learn',
      'Concepts to Learn',
      'Topics to Learn',
      'Core Concepts',
      'What You Should Be Able To Do',
      'What to Build',
      'Mini Project',
      'Project',
      'Practice Projects',
      'Portfolio Projects',
      'Practice',
      'Career Outcome',
      'Outcome',
      'Expected Outcome',
      'Checklist',
      'Next Action',
      'What to Do Next'
    ];
    const topics = skillsIndex >= 0 ? listBetween(chunk, skillsIndex, stopLabels) : [];
    const tools = toolsIndex >= 0 ? listBetween(chunk, toolsIndex, stopLabels) : [];
    const projectItems = buildIndex >= 0 ? listBetween(chunk, buildIndex, stopLabels) : [];
    const checklist = checklistIndex >= 0 ? listBetween(chunk, checklistIndex, stopLabels) : [];
    const phaseTopics = topics.length ? topics : projectItems.length ? projectItems : [originalPhase];
    const article = /^[aeiou]/i.test(name) ? 'an' : 'a';
    const miniProject = projectItems.length
      ? projectItems.slice(0, 3).join('; ')
      : `Build ${article} ${name} portfolio project focused on ${originalPhase}: ${phaseTopics.slice(0, 4).join(', ')}.`;
    const expectedOutcome = outcomeIndex >= 0 ? paragraphBetween(chunk, outcomeIndex, stopLabels) : `You can apply ${originalPhase.toLowerCase()} in practical ${name} work.`;

    return {
      phase: originalPhase || `Phase ${index + 1}`,
      originalPhase,
      timelineWeeks: parseTimeline(timelineLine),
      topics: phaseTopics,
      tools,
      miniProject,
      expectedOutcome,
      outcome: expectedOutcome,
      nextAction: nextIndex >= 0 ? paragraphBetween(chunk, nextIndex, stopLabels) : 'Document what you built, what you learned, and what you will improve next.',
      checklist: (checklist.length ? checklist : phaseTopics.slice(0, 6).map((topic) => `Build evidence for: ${topic}`))
    };
  });

  return {
    slug,
    name,
    intro: intro.replace(/\s+/g, ' ').trim(),
    roadmap
  };
}

if (!fs.existsSync(inputDir)) {
  throw new Error(`Missing extracted roadmap directory: ${inputDir}`);
}

const careers = await Promise.all(fs
  .readdirSync(inputDir)
  .filter((file) => /\.(rtf|docx)$/i.test(file))
  .sort((a, b) => a.localeCompare(b))
  .map((file) => parseCareer(path.join(inputDir, file))));

const content = `// Generated from the uploaded Roadmap.zip file.\n// Run \`node apps/web/tools/extract-uploaded-roadmaps.mjs\` after replacing the uploaded RTF files.\n\nexport const uploadedCareerRoadmaps = ${JSON.stringify(careers, null, 2)};\n\nexport const uploadedCareerRoadmapsBySlug = Object.fromEntries(\n  uploadedCareerRoadmaps.map((career) => [career.slug, career])\n);\n`;

fs.writeFileSync(outputFile, content);
console.log(`Wrote ${careers.length} uploaded career roadmaps to ${path.relative(repoRoot, outputFile)}`);
