
import React from 'react';
import { formatSalary } from '@/lib/utils/formatSalary.js';

export function CountryRow({ name, min, max, currency }) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-border/50 last:border-0">
      <span className="font-medium text-sm">{name}</span>
      <span className="text-sm text-muted-foreground font-mono">
        {formatSalary(min, currency)} - {formatSalary(max, currency)}
      </span>
    </div>
  );
}

export default CountryRow;
