
import React from 'react';
import { useCurrency } from '@/contexts/CurrencyContext.jsx';

export function SalaryCard({ min, max, average, level }) {
  const { currency, convertSalary, getCurrencySymbol } = useCurrency();
  const symbol = getCurrencySymbol();

  const levelColor = {
    Beginner: 'hsl(var(--level-beginner))',
    Intermediate: 'hsl(var(--level-intermediate))',
    Advanced: 'hsl(var(--level-advanced))'
  }[level] || 'hsl(var(--primary))';

  const formatVal = (val) => {
    if (!val || isNaN(val)) return 'N/A';
    const converted = convertSalary(val);
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: currency,
      maximumFractionDigits: 0 
    }).format(converted);
  };

  return (
    <div className="bg-card border rounded-2xl p-6 text-center shadow-sm">
      <p className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: levelColor }}>
        {level} Level
      </p>
      <h4 className="text-3xl font-extrabold mb-1">
        Avg: {formatVal(average)}
      </h4>
      <p className="text-sm text-muted-foreground">
        Min: {formatVal(min)} - Max: {formatVal(max)}
      </p>
    </div>
  );
}

export default SalaryCard;
