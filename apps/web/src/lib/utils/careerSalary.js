const toNumber = (value) => {
  if (value === null || value === undefined || value === '') return null;

  if (typeof value === 'number') {
    return Number.isFinite(value) ? value : null;
  }

  if (typeof value !== 'string') return null;

  const trimmed = value.trim();
  if (!trimmed) return null;

  const numeric = Number(trimmed);
  if (Number.isFinite(numeric)) return numeric;

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
  return Number.isFinite(first) ? first : null;
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
    toNumber(career.midSalary) ??
    range.avg;

  if (avg === null && entry !== null && senior !== null) {
    avg = Math.round((entry + senior) / 2);
  }

  return {
    entry,
    avg,
    senior,
    hasAverage: avg !== null,
  };
};
