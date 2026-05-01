
import React, { useState, useMemo } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout.jsx';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { stateData } from '@/lib/calculatorUtils.js';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StateWiseSalaryComparison = () => {
  const [baseSalary, setBaseSalary] = useState(100000);
  const [selectedStates, setSelectedStates] = useState(['CA', 'TX', 'NY', 'FL']);

  const toggleState = (code) => {
    setSelectedStates(prev => 
      prev.includes(code) ? prev.filter(s => s !== code) : [...prev, code]
    );
  };

  const chartData = useMemo(() => {
    return selectedStates.map(code => {
      const state = stateData[code];
      // Adjusted salary = Base Salary * (100 / COL Index)
      const adjustedSalary = baseSalary * (100 / state.colIndex);
      return {
        name: code,
        'Base Salary': baseSalary,
        'Adjusted Salary (Purchasing Power)': Math.round(adjustedSalary),
        colIndex: state.colIndex
      };
    }).sort((a, b) => b['Adjusted Salary (Purchasing Power)'] - a['Adjusted Salary (Purchasing Power)']);
  }, [baseSalary, selectedStates]);

  return (
    <CalculatorLayout
      title="State-wise Salary Comparison"
      category="Salary Tools"
      description="Compare how far your salary goes in different states based on cost of living."
      tips={[
        "A higher salary in a high cost-of-living state might mean less actual purchasing power.",
        "States like Texas and Florida have no state income tax, which further increases take-home pay.",
        "Consider housing costs specifically, as they vary wildly even within the same state."
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="glass-card p-6 rounded-2xl space-y-6 lg:col-span-1">
          <div className="space-y-2">
            <Label>Base Annual Salary ($)</Label>
            <Input 
              type="number" 
              value={baseSalary} 
              onChange={(e) => setBaseSalary(Number(e.target.value))}
              className="text-lg"
            />
          </div>
          
          <div className="space-y-3">
            <Label>Select States to Compare</Label>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(stateData).map(([code, data]) => (
                <label key={code} className="flex items-center gap-2 text-sm cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={selectedStates.includes(code)}
                    onChange={() => toggleState(code)}
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  {code} - {data.name}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="glass-card p-6 rounded-2xl lg:col-span-2 space-y-8">
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                <Legend />
                <Bar dataKey="Base Salary" fill="hsl(var(--muted-foreground))" opacity={0.5} radius={[4, 4, 0, 0]} />
                <Bar dataKey="Adjusted Salary (Purchasing Power)" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                <tr>
                  <th className="px-4 py-3 rounded-tl-lg">State</th>
                  <th className="px-4 py-3">COL Index</th>
                  <th className="px-4 py-3">Base Salary</th>
                  <th className="px-4 py-3 rounded-tr-lg">Adjusted Value</th>
                </tr>
              </thead>
              <tbody>
                {chartData.map((row, i) => (
                  <tr key={row.name} className="border-b border-border/50 last:border-0">
                    <td className="px-4 py-3 font-medium">{stateData[row.name].name}</td>
                    <td className="px-4 py-3">{row.colIndex} (National Avg = 100)</td>
                    <td className="px-4 py-3">${row['Base Salary'].toLocaleString()}</td>
                    <td className="px-4 py-3 font-bold text-primary">${row['Adjusted Salary (Purchasing Power)'].toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default StateWiseSalaryComparison;
