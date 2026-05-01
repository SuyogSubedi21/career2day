
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const SalaryAfterTaxCalculator = () => {
  const [salary, setSalary] = useState(75000);
  const [stateRate, setStateRate] = useState(0.05);

  const federalTax = salary * 0.20; // Simplified
  const stateTax = salary * stateRate;
  const fica = salary * 0.0765;
  const netIncome = salary - federalTax - stateTax - fica;

  const data = [
    { name: 'Net Income', value: netIncome, color: 'hsl(var(--primary))' },
    { name: 'Federal Tax', value: federalTax, color: '#ef4444' },
    { name: 'State Tax', value: stateTax, color: '#f97316' },
    { name: 'FICA', value: fica, color: '#eab308' },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Helmet><title>Salary After Tax Calculator - CareerFlow</title></Helmet>
      <div>
        <h1 className="text-3xl font-bold mb-2">Salary After Tax Calculator</h1>
        <p className="text-muted-foreground">Estimate your take-home pay after federal, state, and local taxes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card p-6 rounded-2xl space-y-6">
          <div className="space-y-2">
            <Label>Annual Salary ($)</Label>
            <Input 
              type="number" 
              value={salary} 
              onChange={(e) => setSalary(Number(e.target.value))}
              className="text-lg"
            />
          </div>
          <div className="space-y-2">
            <Label>State Tax Rate (%)</Label>
            <Input 
              type="number" 
              step="0.1"
              value={stateRate * 100} 
              onChange={(e) => setStateRate(Number(e.target.value) / 100)}
            />
          </div>
          
          <div className="pt-6 border-t space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Gross Pay</span>
              <span className="font-medium">${salary.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm text-red-500">
              <span>Federal Tax (est. 20%)</span>
              <span>-${federalTax.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm text-orange-500">
              <span>State Tax</span>
              <span>-${stateTax.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm text-yellow-500">
              <span>FICA (7.65%)</span>
              <span>-${fica.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-lg font-bold pt-3 border-t text-primary">
              <span>Net Income</span>
              <span>${netIncome.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center min-h-[300px]">
          <h3 className="font-semibold mb-4">Income Breakdown</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SalaryAfterTaxCalculator;
