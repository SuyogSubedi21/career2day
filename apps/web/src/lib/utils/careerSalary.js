const toNumber = (value) => {
  if (value === null || value === undefined || value === '') return null;

  if (typeof value === 'number') {
    if (!Number.isFinite(value) || value <= 0) return null;
    return value;
  }

  if (typeof value !== 'string') return null;

  const trimmed = value.trim();
  if (!trimmed) return null;

  const numeric = Number(trimmed);
  if (Number.isFinite(numeric)) {
    return numeric > 0 ? numeric : null;
  }

  const matches = trimmed.replace(/,/g, '').match(/\d+(?:\.\d+)?/g);
  if (!matches || !matches.length) return null;

  if (matches.length >= 2) {
    const min = Number(matches[0]);
    const max = Number(matches[1]);
    if (Number.isFinite(min) && Number.isFinite(max)) {
      return Math.round((min + max) / 2);
    }
  }

  const first = Number(matches[0]);
  return Number.isFinite(first) && first > 0 ? first : null;
};

import { getCareerBySlug as getLocalCareer } from '@/data/careerData.js';

const SLUG_SALARY_FALLBACKS = {
  'ai-llm-engineer': { entry: 160000, avg: 220000, senior: 280000 },
  'api-developer': { entry: 70000, avg: 120000, senior: 170000 },
  'ar-vr-engineer': { entry: 120000, avg: 160000, senior: 200000 },
};

const parseSalaryRange = (salaryRange) => {
  if (!salaryRange) {
    return { min: null, avg: null, max: null };
  }

  if (typeof salaryRange === 'string') {
    try {
      const parsed = JSON.parse(salaryRange);
      return parseSalaryRange(parsed);
    } catch {
      const matches = salaryRange.replace(/,/g, '').match(/\d+(?:\.\d+)?/g);
      if (!matches || !matches.length) {
        return { min: null, avg: null, max: null };
      }

      if (matches.length >= 2) {
        const min = Number(matches[0]);
        const max = Number(matches[1]);
        const avg = Number.isFinite(min) && Number.isFinite(max) ? Math.round((min + max) / 2) : null;
        return { min, avg, max };
      }

      const avg = Number(matches[0]);
      return { min: null, avg: Number.isFinite(avg) ? avg : null, max: null };
    }
  }

  if (typeof salaryRange === 'object') {
    const min = toNumber(salaryRange.min ?? salaryRange.entry ?? salaryRange.entryLevel ?? salaryRange.low);
    const max = toNumber(salaryRange.max ?? salaryRange.senior ?? salaryRange.seniorLevel ?? salaryRange.high);
    const avg = toNumber(salaryRange.avg ?? salaryRange.average ?? salaryRange.mid ?? salaryRange.midLevel);
    return { min, avg, max };
  }

  return { min: null, avg: null, max: null };
};

export const getCareerSalaryInfo = (career) => {
  if (!career) {
    return { entry: null, avg: null, senior: null, hasAverage: false };
  }

  const range = parseSalaryRange(career.salaryRange ?? career.avg_salary);

  const entry = toNumber(career.entrySalary) ?? range.min;
  const senior = toNumber(career.seniorSalary) ?? range.max;

  let avg =
    toNumber(career.averageSalary) ??
    toNumber(career.avg_salary) ??
    toNumber(career.midSalary) ??
    range.avg;

  if (avg === null && entry !== null && senior !== null) {
    avg = Math.round((entry + senior) / 2);
  }

  let resolvedEntry = entry;
  let resolvedAvg = avg;
  let resolvedSenior = senior;

  // Apply slug-specific fallbacks for any missing values
  if (career.slug && SLUG_SALARY_FALLBACKS[career.slug]) {
    const fallback = SLUG_SALARY_FALLBACKS[career.slug];
    resolvedEntry = resolvedEntry ?? fallback.entry;
    resolvedAvg = resolvedAvg ?? fallback.avg;
    resolvedSenior = resolvedSenior ?? fallback.senior;
  }

  // Final fallback: fill any remaining nulls from local career data
  if ((resolvedAvg === null || resolvedEntry === null || resolvedSenior === null) && career.slug) {
    try {
      const localCareer = getLocalCareer(career.slug);
      if (localCareer) {
        const localEntry = localCareer.salaryProgression?.entry ?? localCareer.salaryRange?.min ?? null;
        const localAvg = localCareer.averageSalary ?? localCareer.salaryProgression?.mid ?? null;
        const localSenior = localCareer.salaryProgression?.senior ?? localCareer.salaryRange?.max ?? null;
        resolvedEntry = resolvedEntry ?? localEntry;
        resolvedAvg = resolvedAvg ?? localAvg;
        resolvedSenior = resolvedSenior ?? localSenior;
      }
    } catch {
      // ignore
    }
  }

  // Derive any still-missing values from what we have
  if (resolvedAvg === null && resolvedEntry !== null && resolvedSenior !== null) {
    resolvedAvg = Math.round((resolvedEntry + resolvedSenior) / 2);
  }
  if (resolvedEntry === null && resolvedAvg !== null) {
    resolvedEntry = Math.round(resolvedAvg * 0.7);
  }
  if (resolvedSenior === null && resolvedAvg !== null) {
    resolvedSenior = Math.round(resolvedAvg * 1.4);
  }

  return {
    entry: resolvedEntry,
    avg: resolvedAvg,
    senior: resolvedSenior,
    hasAverage: resolvedAvg !== null,
  };
};
