
import React from 'react';
import { Globe } from 'lucide-react';
import { formatLocalSalary, getMarketByCountry, localizeAnnualSalary } from '@/lib/utils/localSalaryMarkets.js';

const ALLOWED_COUNTRIES = ['USA', 'Nepal', 'India', 'Australia', 'UK', 'China'];

export default function SalaryByCountry({ levelData }) {
  if (!levelData || !levelData.topCountries) return null;

  const filteredCountries = levelData.topCountries.filter(c => 
    ALLOWED_COUNTRIES.includes(c.name)
  );

  if (filteredCountries.length === 0) return null;

  const formatVal = (val, country) => {
    if (!val || isNaN(val)) return '';
    return formatCountrySalary(val, country);
  };

  const displayRange = (country) => {
    if (country.minSalary && country.maxSalary) {
      return `${formatVal(country.minSalary, country)} - ${formatVal(country.maxSalary, country)}`;
    }
    
    // Fallback parsing if it's a string
    if (typeof country.salaryRange === 'string') {
      const numbers = country.salaryRange.replace(/[^0-9-]/g, '').split('-');
      if (numbers.length === 2) {
        return `${formatVal(Number(numbers[0]), country)} - ${formatVal(Number(numbers[1]), country)}`;
      }
    }
    return country.salaryRange || 'N/A';
  };

  return (
    <div className="bg-muted/30 rounded-xl p-4 border border-border/50">
      <h4 className="font-bold text-lg mb-3 flex items-center gap-2" style={{ color: `hsl(var(--level-${levelData.level.toLowerCase()}))` }}>
        <Globe className="w-5 h-5" />
        {levelData.level} Global Salaries
      </h4>
      <ul className="space-y-3 text-sm">
        {filteredCountries.map((country, i) => (
          <li key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 border-b border-border/30 pb-2 last:border-0 last:pb-0">
            <span className="font-medium text-foreground">{country.name}</span>
            <span className="text-muted-foreground bg-background px-2 py-1 rounded-md text-xs font-mono">
              {displayRange(country)}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-4 pt-3 border-t border-border/50">
        <p className="text-xs text-muted-foreground font-medium">
          Market averages shown in each country's local currency.
        </p>
      </div>
    </div>
  );
}

function formatCountrySalary(usdValue, country) {
  const market = getMarketByCountry(country?.name);
  if (!market) return formatLocalSalary(usdValue, 'USD', 'en-US');

  const value = country.currency === market.currency
    ? usdValue
    : localizeAnnualSalary(usdValue, market);

  return formatLocalSalary(value, market.currency, market.locale);
}
