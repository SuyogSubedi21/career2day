
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useCurrency } from '@/contexts/CurrencyContext.jsx';

export const SalaryComparison = ({ currentCareer, relatedCareers }) => {
  const { currency, convertSalary, getCurrencySymbol } = useCurrency();
  const symbol = getCurrencySymbol();

  if (!currentCareer || !relatedCareers || relatedCareers.length === 0) return null;

  const data = [
    {
      name: currentCareer.name,
      Entry: convertSalary(currentCareer.entrySalary || 0),
      Mid: convertSalary(currentCareer.midSalary || 0),
      Senior: convertSalary(currentCareer.seniorSalary || 0),
    },
    ...relatedCareers.map(rc => ({
      name: rc.name,
      Entry: convertSalary(rc.entrySalary || 0),
      Mid: convertSalary(rc.midSalary || 0),
      Senior: convertSalary(rc.seniorSalary || 0),
    }))
  ];

  const formatYAxis = (tickItem) => {
    return `${symbol}${(tickItem / 1000).toFixed(0)}k`;
  };

  const formatTooltip = (value) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: currency, maximumFractionDigits: 0 }).format(value);
  };

  return (
    <div className="h-[400px] w-full mt-8">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }} 
            dy={10}
          />
          <YAxis 
            tickFormatter={formatYAxis} 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
          />
          <Tooltip 
            formatter={formatTooltip}
            cursor={{ fill: 'hsl(var(--muted))', opacity: 0.4 }}
            contentStyle={{ 
              backgroundColor: 'hsl(var(--card))', 
              borderColor: 'hsl(var(--border))',
              borderRadius: '8px',
              color: 'hsl(var(--foreground))'
            }}
          />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          <Bar dataKey="Entry" fill="hsl(var(--muted-foreground))" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Mid" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Senior" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
