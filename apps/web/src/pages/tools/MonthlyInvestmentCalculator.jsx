
import React, { useState, useMemo } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout.jsx';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { calculateCompoundInterest } from '@/lib/calculatorUtils.js';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MonthlyInvestmentCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [annualReturn, setAnnualReturn] = useState(7);
  const [years, setYears] = useState(20);

  const { finalBalance, data } = useMemo(() => 
    calculateCompoundInterest(initialInvestment, monthlyContribution, annualReturn, years),
  [initialInvestment, monthlyContribution, annualReturn, years]);

  const totalContributions = initialInvestment + (monthlyContribution * 12 * years);
  const totalInterest = finalBalance - totalContributions;

  return (
    <CalculatorLayout
      title="Monthly Investment Calculator"
      category="Retirement & Investment"
      description="See how your money grows over time with compound interest."
      tips={[
        "Start early: Time is the most important factor in compound interest.",
        "A 7-8% annual return is a common conservative estimate for a diversified stock portfolio over the long term.",
        "Consistency matters more than timing the market."
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="glass-card p-6 rounded-2xl space-y-6 lg:col-span-1">
          <div className="space-y-2">
            <Label>Initial Investment ($)</Label>
            <Input type="number" value={initialInvestment} onChange={(e) => setInitialInvestment(Number(e.target.value))} />
          </div>
          <div className="space-y-2">
            <Label>Monthly Contribution ($)</Label>
            <Input type="number" value={monthlyContribution} onChange={(e) => setMonthlyContribution(Number(e.target.value))} />
          </div>
          <div className="space-y-2">
            <Label>Expected Annual Return (%)</Label>
            <Input type="number" step="0.1" value={annualReturn} onChange={(e) => setAnnualReturn(Number(e.target.value))} />
          </div>
          <div className="space-y-2">
            <Label>Investment Period (Years)</Label>
            <Input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} />
          </div>
        </div>

        <div className="glass-card p-6 rounded-2xl lg:col-span-2 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-muted rounded-xl">
              <p className="text-sm text-muted-foreground">Total Contributions</p>
              <p className="text-2xl font-bold">${totalContributions.toLocaleString()}</p>
            </div>
            <div className="p-4 bg-muted rounded-xl">
              <p className="text-sm text-muted-foreground">Total Interest Earned</p>
              <p className="text-2xl font-bold text-green-600">${totalInterest.toLocaleString()}</p>
            </div>
            <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
              <p className="text-sm text-primary font-medium">Future Value</p>
              <p className="text-3xl font-bold text-primary">${Math.round(finalBalance).toLocaleString()}</p>
            </div>
          </div>

          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="year" tickFormatter={(val) => `Yr ${val}`} />
                <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} labelFormatter={(val) => `Year ${val}`} />
                <Legend />
                <Area type="monotone" dataKey="contributions" name="Total Contributions" stroke="hsl(var(--muted-foreground))" fill="transparent" />
                <Area type="monotone" dataKey="balance" name="Total Balance" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorBalance)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default MonthlyInvestmentCalculator;
