import fs from 'node:fs';
import path from 'node:path';
import JSZip from 'jszip';

const repoRoot = path.resolve(import.meta.dirname, '../../..');
const inputFile = path.join(repoRoot, 'Salary data.docx');
const outputFile = path.join(repoRoot, 'apps/web/src/data/salaryMarketsByCareer.js');

function slugify(value = '') {
  return String(value)
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
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

function cellText(cellXml) {
  return [...cellXml.matchAll(/<w:t(?:\s[^>]*)?>([\s\S]*?)<\/w:t>/g)]
    .map(([, text]) => decodeXmlText(text))
    .join('')
    .trim();
}

function tableRows(tableXml) {
  return [...tableXml.matchAll(/<w:tr\b[\s\S]*?<\/w:tr>/g)]
    .map(([row]) => [...row.matchAll(/<w:tc\b[\s\S]*?<\/w:tc>/g)].map(([cell]) => cellText(cell)))
    .filter((row) => row.length);
}

function paragraphTexts(xml) {
  return [...xml.matchAll(/<w:p\b[\s\S]*?<\/w:p>/g)]
    .map(([paragraph]) =>
      [...paragraph.matchAll(/<w:t(?:\s[^>]*)?>([\s\S]*?)<\/w:t>/g)]
        .map(([, text]) => decodeXmlText(text))
        .join('')
        .trim()
    )
    .filter(Boolean);
}

function normaliseHeading(text) {
  return text.replace(/^\d+\.\s*/, '').trim();
}

function inferCurrency(country, sample) {
  if (/usa/i.test(country) || /^\$/.test(sample)) return { currency: 'USD', locale: 'en-US' };
  if (/nepal/i.test(country) || /^NPR/i.test(sample)) return { currency: 'NPR', locale: 'en-NP' };
  if (/india/i.test(country) || /₹/.test(sample)) return { currency: 'INR', locale: 'en-IN' };
  if (/australia/i.test(country) || /^AUD/i.test(sample)) return { currency: 'AUD', locale: 'en-AU' };
  if (/uk/i.test(country) || /£/.test(sample)) return { currency: 'GBP', locale: 'en-GB' };
  if (/china/i.test(country) || /¥/.test(sample)) return { currency: 'CNY', locale: 'zh-CN' };
  return { currency: 'USD', locale: 'en-US' };
}

async function main() {
  if (!fs.existsSync(inputFile)) throw new Error(`Missing ${inputFile}`);
  const zip = await JSZip.loadAsync(fs.readFileSync(inputFile));
  const xml = await zip.file('word/document.xml')?.async('string');
  if (!xml) throw new Error('Could not read word/document.xml from salary docx.');

  const headings = paragraphTexts(xml).filter((line) => /^\d+\.\s+/.test(line));
  const tables = [...xml.matchAll(/<w:tbl\b[\s\S]*?<\/w:tbl>/g)].map(([table]) => tableRows(table));
  const salaries = {};

  headings.forEach((heading, index) => {
    const careerName = normaliseHeading(heading);
    const rows = tables[index] || [];
    const markets = rows
      .slice(1)
      .filter((row) => row.length >= 5)
      .map(([country, entry, mid, senior, lead]) => ({
        country,
        ...inferCurrency(country, entry),
        entry,
        mid,
        senior,
        lead
      }));

    salaries[slugify(careerName)] = {
      name: careerName,
      markets
    };
  });

  const content = `// Generated from Salary data.docx.\n// Run \`node apps/web/tools/extract-salary-data.mjs\` after editing the source docx.\n\nexport const salaryMarketsByCareer = ${JSON.stringify(salaries, null, 2)};\n\nexport function getSalaryMarketsForCareer(slug) {\n  return salaryMarketsByCareer[slug]?.markets || [];\n}\n`;
  fs.writeFileSync(outputFile, content);
  console.log(`Wrote salary data for ${Object.keys(salaries).length} careers to ${path.relative(repoRoot, outputFile)}`);
}

main();
