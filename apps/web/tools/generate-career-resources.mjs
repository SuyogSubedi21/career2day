import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { uploadedCareerRoadmaps } from '../src/data/uploadedCareerRoadmaps.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(__dirname, '..');
const repoRoot = path.resolve(appRoot, '..', '..');
const docPath = path.join(repoRoot, 'Career2Day_Specific_Free_Paid_Resources.docx');
const outputPath = path.join(appRoot, 'src', 'data', 'careerResourceData.js');

const slugifyCareer = (value = '') =>
  String(value)
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const extraAliasesBySlug = {
  'ar-vr-engineer': ['ar-vr-developer'],
  ciso: ['chief-information-security-officer'],
  'chief-information-security-officer': ['ciso'],
  'cyber-security-engineer': ['cybersecurity-engineer'],
  'embedded-systems-engineer': ['mbedded-systems-engineer'],
  'ui-ux-designer': ['ux-ui-designer']
};

const validSlugs = new Set(uploadedCareerRoadmaps.map((career) => career.slug));

const extractDocxText = () => {
  const command = `
Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip=[System.IO.Compression.ZipFile]::OpenRead('${docPath.replace(/'/g, "''")}')
$entry=$zip.GetEntry('word/document.xml')
$reader=New-Object System.IO.StreamReader($entry.Open())
$xml=$reader.ReadToEnd()
$reader.Close()
$zip.Dispose()
$text=($xml -replace '<w:tab[^>]*/>',' ' -replace '</w:p>',"\`n" -replace '<[^>]+>','' -replace '&amp;','&' -replace '&lt;','<' -replace '&gt;','>')
Write-Output $text
`;

  return execFileSync('powershell', ['-NoProfile', '-Command', command], {
    encoding: 'utf8',
    maxBuffer: 1024 * 1024 * 10
  });
};

const parseResourceList = (value = '') =>
  value
    .split('•')
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => {
      const match = item.match(/^(.*?):\s*(https?:\/\/\S+)/i);
      if (!match) return null;
      return {
        name: match[1].trim(),
        url: match[2].trim()
      };
    })
    .filter(Boolean);

const parsePhaseLine = (line) => {
  const match = line.match(/^Phase\s+(\d+)\s+[–-]\s*([^•]+)(.*)$/i);
  if (!match) return null;
  return {
    index: Number(match[1]) - 1,
    title: match[2].trim(),
    resources: parseResourceList(match[3])
  };
};

const lines = extractDocxText()
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter(Boolean);

const resourcesBySlug = {};

for (let index = 0; index < lines.length; index += 1) {
  if (lines[index + 1] !== 'FREE RESOURCES') continue;

  const name = lines[index];
  const slug = slugifyCareer(name);
  const career = {
    name,
    phases: Array.from({ length: 5 }, () => ({ free: [], paid: [], specific: [] }))
  };

  index += 2;
  let section = 'free';

  for (; index < lines.length; index += 1) {
    const line = lines[index];

    if (lines[index + 1] === 'FREE RESOURCES') {
      index -= 1;
      break;
    }

    if (line === 'FREE RESOURCES') {
      section = 'free';
      continue;
    }

    if (line === 'PAID RESOURCES') {
      section = 'paid';
      continue;
    }

    if (line.startsWith('CAREER SPECIFIC RESOURCES')) {
      career.phases[career.phases.length - 1].specific = parseResourceList(line);
      continue;
    }

    const phase = parsePhaseLine(line);
    if (phase && career.phases[phase.index]) {
      career.phases[phase.index][section] = phase.resources;
    }
  }

  for (const resourceSlug of [slug, ...(extraAliasesBySlug[slug] || [])]) {
    resourcesBySlug[resourceSlug] = career;
  }
}

const missing = uploadedCareerRoadmaps
  .map((career) => career.slug)
  .filter((slug) => !resourcesBySlug[slug]);

const file = `// Generated from Career2Day_Specific_Free_Paid_Resources.docx.
// Run \`node apps/web/tools/generate-career-resources.mjs\` after updating the document.

export const careerResourcesBySlug = ${JSON.stringify(resourcesBySlug, null, 2)};

export const getCareerPhaseResources = (slug, phaseIndex) => {
  const phases = careerResourcesBySlug[slug]?.phases;
  if (!phases?.length) return null;
  return phases[phaseIndex] || phases[Math.min(phaseIndex, phases.length - 1)] || null;
};
`;

fs.writeFileSync(outputPath, file);

console.log(`Generated ${Object.keys(resourcesBySlug).length} career resource sets.`);
if (missing.length) {
  console.warn(`Missing resource sets for: ${missing.join(', ')}`);
}
