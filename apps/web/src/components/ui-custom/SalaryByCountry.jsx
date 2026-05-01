
import React from 'react';
import { Globe } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext.jsx';

const ALLOWED_COUNTRIES = ['India', 'USA', 'Australia', 'UK', 'Canada'];

export default function SalaryByCountry({ levelData }) {
  const { currency, convertSalary, getCurrencySymbol } = useCurrency();
  
  if (!levelData || !levelData.topCountries) return null;

  // Filter to only allowed countries
  const filteredCountries = levelData.topCountries.filter(c => 
    ALLOWED_COUNTRIES.includes(c.name)
  );

  if (filteredCountries.length === 0) return null;

  const formatVal = (val) => {
    if (!val || isNaN(val)) return '';
    const converted = convertSalary(val);
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: currency,
      maximumFractionDigits: 0 
    }).format(converted);
  };

  // Helper to parse string ranges like "$50,000 - $70,000" or use raw numbers if available
  const displayRange = (country) => {
    if (country.minSalary && country.maxSalary) {
      return `${formatVal(country.minSalary)} - ${formatVal(country.maxSalary)}`;
    }
    
    // Fallback parsing if it's a string
    if (typeof country.salaryRange === 'string') {
      const numbers = country.salaryRange.replace(/[^0-9-]/g, '').split('-');
      if (numbers.length === 2) {
        return `${formatVal(Number(numbers[0]))} - ${formatVal(Number(numbers[1]))}`;
      }
    }
    return country.salaryRange || 'N/A';
  };

  const globalAvgUsd = getGlobalAvgUsd(levelData.level);
  const convertedGlobalAvg = formatVal(globalAvgUsd);

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
          Global Average ({currency}): <span className="text-foreground">{convertedGlobalAvg}</span>
        </p>
      </div>
    </div>
  );
}

function getGlobalAvgUsd(level) {
  switch (level?.toLowerCase()) {
    case 'beginner': return 55000;
    case 'intermediate': return 80000;
    case 'advanced': return 120000;
    default: return 0;
  }
}
