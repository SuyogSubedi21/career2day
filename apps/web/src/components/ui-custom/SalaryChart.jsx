
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export function SalaryChart({ data, level }) {
  if (!data || data.length === 0) return null;

  // Format data for Recharts
  const chartData = data.map(item => ({
    name: item.state || item.name,
    salary: typeof item.salary === 'string' 
      ? parseInt(item.salary.replace(/[^0-9]/g, ''), 10) 
      : item.salary
  })).sort((a, b) => b.salary - a.salary);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-card p-3 rounded-lg border border-border/50 shadow-lg text-sm">
          <p className="font-semibold mb-1">{payload[0].payload.name}</p>
          <p className="text-primary font-medium">{formatCurrency(payload[0].value)}</p>
        </div>
      );
    }
    return null;
  };

  const getColorByLevel = () => {
    switch (level?.toLowerCase()) {
      case 'beginner': return 'hsl(var(--level-beginner))';
      case 'intermediate': return 'hsl(var(--level-intermediate))';
      case 'advanced': return 'hsl(var(--level-advanced))';
      default: return 'hsl(var(--primary))';
    }
  };

  const barColor = getColorByLevel();

  return (
    <div className="w-full h-[300px] mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="hsl(var(--border))" opacity={0.5} />
          <XAxis 
            type="number" 
            tickFormatter={(value) => `$${value / 1000}k`}
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            dataKey="name" 
            type="category" 
            stroke="hsl(var(--foreground))"
            fontSize={13}
            fontWeight={500}
            tickLine={false}
            axisLine={false}
            width={100}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(var(--muted)/0.4)' }} />
          <Bar dataKey="salary" radius={[0, 4, 4, 0]} barSize={24}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={barColor} fillOpacity={0.8 + (index * 0.05)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
