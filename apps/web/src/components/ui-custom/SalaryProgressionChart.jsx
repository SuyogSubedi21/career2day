
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import SalaryByCountry from './SalaryByCountry.jsx';
import { useCurrency } from '@/contexts/CurrencyContext.jsx';

export default function SalaryProgressionChart({ data }) {
  const { currency, convertSalary, getCurrencySymbol } = useCurrency();
  const symbol = getCurrencySymbol();

  if (!data || data.length === 0) return null;

  const chartData = data.map(item => ({
    ...item,
    convertedSalary: convertSalary(item.salary)
  }));

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-card p-3 rounded-lg border border-border/50 shadow-lg text-sm">
          <p className="font-semibold mb-1">{payload[0].payload.level}</p>
          <p className="text-primary font-medium">{formatCurrency(payload[0].value)} ({currency} Avg)</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="glass-card rounded-2xl p-6 border border-border/50">
      <h3 className="text-2xl font-bold mb-6">Global Salary Progression</h3>
      
      <div className="h-[300px] w-full mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.5} />
            <XAxis dataKey="level" stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} />
            <YAxis 
              tickFormatter={(value) => `${symbol}${value / 1000}k`}
              stroke="hsl(var(--muted-foreground))"
              tickLine={false}
              axisLine={false}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(var(--muted)/0.4)' }} />
            <Bar dataKey="convertedSalary" radius={[4, 4, 0, 0]} barSize={40}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={`hsl(var(--level-${entry.level.toLowerCase()}))`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((levelData, idx) => (
          <SalaryByCountry key={idx} levelData={levelData} />
        ))}
      </div>
    </div>
  );
}
