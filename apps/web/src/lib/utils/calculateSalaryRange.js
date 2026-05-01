
import { DEFAULT_SALARY_RANGES } from '@/lib/constants/salaryRanges.js';

export function calculateSalaryRange(level, countryMultiplier = 1) {
  const base = DEFAULT_SALARY_RANGES[level] || DEFAULT_SALARY_RANGES.Beginner;
  return {
    min: Math.round(base.min * countryMultiplier),
    max: Math.round(base.max * countryMultiplier),
    average: Math.round(base.average * countryMultiplier)
  };
}
