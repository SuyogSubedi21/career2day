
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useCurrency } from '@/contexts/CurrencyContext.jsx';

export const SalaryByState = ({ statesData }) => {
  const { currency, convertSalary, getCurrencySymbol } = useCurrency();
  const symbol = getCurrencySymbol();

  if (!statesData || statesData.length === 0) return null;

  // Format data for recharts with currency conversion
  const data = statesData.map(state => {
    const avg = (state.minSalary + state.maxSalary) / 2;
    return {
      name: state.state,
      Average: convertSalary(avg),
      min: convertSalary(state.minSalary),
      max: convertSalary(state.maxSalary)
    };
  }).sort((a, b) => b.Average - a.Average);

  const formatXAxis = (tickItem) => {
    return `${symbol}${(tickItem / 1000).toFixed(0)}k`;
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const formatCurrency = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: currency, maximumFractionDigits: 0 }).format(val);
      
      return (
        <div className="bg-card border border-border p-3 rounded-lg shadow-lg">
          <p className="font-bold text-foreground mb-1">{label}</p>
          <p className="text-sm text-muted-foreground">
            Range: <span className="font-medium text-foreground">{formatCurrency(data.min)} - {formatCurrency(data.max)}</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Average: <span className="font-medium text-primary">{formatCurrency(data.Average)}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(var(--border))" />
          <XAxis 
            type="number" 
            tickFormatter={formatXAxis} 
            axisLine={false} 
            tickLine={false}
            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
          />
          <YAxis 
            dataKey="name" 
            type="category" 
            axisLine={false} 
            tickLine={false}
            tick={{ fill: 'hsl(var(--foreground))', fontSize: 12, fontWeight: 500 }}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(var(--muted))', opacity: 0.4 }} />
          <Bar dataKey="Average" radius={[0, 4, 4, 0]} barSize={24}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index === 0 ? 'hsl(var(--primary))' : 'hsl(var(--primary) / 0.6)'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
