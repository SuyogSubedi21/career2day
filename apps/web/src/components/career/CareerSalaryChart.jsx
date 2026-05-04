
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, DollarSign, Gift } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext.jsx';
import { getCareerSalaryInfo } from '@/lib/utils/careerSalary.js';

export default function CareerSalaryChart({ career }) {
  const { currency, convertSalary, getCurrencySymbol } = useCurrency();
  const symbol = getCurrencySymbol();

  if (!career) return null;

  // Use the same salary resolution logic as the header/sidebar
  const salaryInfo = getCareerSalaryInfo(career);
  const rawMinSalary = salaryInfo.entry ?? 65000;
  const rawAvgSalary = salaryInfo.avg ?? 95000;
  const rawMaxSalary = salaryInfo.senior ?? 145000;

  const minSalary = convertSalary(rawMinSalary);
  const avgSalary = convertSalary(rawAvgSalary);
  const maxSalary = convertSalary(rawMaxSalary);

  const progressionData = [
    { experience: '0-2 Yrs', salary: isNaN(minSalary) ? 0 : minSalary },
    { experience: '3-5 Yrs', salary: isNaN(minSalary) || isNaN(avgSalary) ? 0 : Math.round((minSalary + avgSalary) / 2) },
    { experience: '6-9 Yrs', salary: isNaN(avgSalary) ? 0 : avgSalary },
    { experience: '10+ Yrs', salary: isNaN(maxSalary) ? 0 : maxSalary }
  ];

  // Derive comparison data from related careers if available, else mock
  const comparisonData = career.relatedCareers?.slice(0, 3).map(slug => ({
    role: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    salary: isNaN(avgSalary) ? 0 : Math.round(avgSalary * (0.85 + Math.random() * 0.3)),
    isTarget: false
  })) || [
    { role: 'Data Analyst', salary: isNaN(avgSalary) ? 0 : Math.round(avgSalary * 0.85), isTarget: false },
    { role: 'Product Manager', salary: isNaN(avgSalary) ? 0 : Math.round(avgSalary * 1.1), isTarget: false },
    { role: 'UX Designer', salary: isNaN(avgSalary) ? 0 : Math.round(avgSalary * 0.9), isTarget: false }
  ];
  
  comparisonData.push({ role: career.name || 'Current Role', salary: isNaN(avgSalary) ? 0 : avgSalary, isTarget: true });
  comparisonData.sort((a, b) => b.salary - a.salary);

  // Benefits breakdown
  const benefitsData = [
    { name: 'Base Salary', value: 75, color: 'hsl(var(--chart-color-primary))' },
    { name: 'Annual Bonus', value: 10, color: 'hsl(var(--chart-color-secondary))' },
    { name: 'Stock / Equity', value: 8, color: 'hsl(var(--amber-500))' },
    { name: 'Benefits & Perks', value: 7, color: 'hsl(var(--emerald-500))' }
  ];

  // Safe formatting for display strings
  const formatMainCurrency = (val) => {
    if (val === null || val === undefined || isNaN(val)) return 'N/A';
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: currency, 
      maximumFractionDigits: 0 
    }).format(val);
  };

  // Safe formatting for charts (e.g., $95k)
  const formatChartCurrency = (val) => {
    if (val === null || val === undefined || isNaN(val)) return `${symbol}0k`;
    return `${symbol}${(val / 1000).toFixed(0)}k`;
  };

  return (
    <div className="space-y-8">
      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-card border-none shadow-md">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Entry Level</p>
              <p className="text-2xl font-bold">{formatMainCurrency(minSalary)}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-none shadow-md ring-2 ring-primary ring-offset-2 ring-offset-background">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-primary">Average / Mid</p>
              <p className="text-2xl font-bold">{formatMainCurrency(avgSalary)}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-none shadow-md">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Senior Level</p>
              <p className="text-2xl font-bold">{formatMainCurrency(maxSalary)}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Progression Line Chart */}
        <Card className="shadow-lg border-none bg-card rounded-2xl overflow-hidden flex flex-col h-full">
          <CardHeader className="bg-career-section border-b border-border pb-6">
            <CardTitle className="text-xl">10-Year Salary Progression</CardTitle>
            <CardDescription>Expected growth trajectory based on experience</CardDescription>
          </CardHeader>
          <CardContent className="p-6 flex-grow flex flex-col">
            <div className="h-72 w-full mt-auto">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={progressionData} margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                  <XAxis dataKey="experience" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                  <YAxis tickFormatter={formatChartCurrency} stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    formatter={(value) => [formatMainCurrency(value), 'Estimated Salary']}
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '0.75rem', color: 'hsl(var(--foreground))', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ fontWeight: 600 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="salary" 
                    stroke="hsl(var(--chart-color-primary))" 
                    strokeWidth={4} 
                    dot={{ r: 6, fill: 'hsl(var(--card))', strokeWidth: 3 }} 
                    activeDot={{ r: 8, stroke: 'hsl(var(--chart-color-primary))', strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Comparison Bar Chart */}
        <Card className="shadow-lg border-none bg-card rounded-2xl overflow-hidden flex flex-col h-full">
          <CardHeader className="bg-career-section border-b border-border pb-6">
            <CardTitle className="text-xl">Similar Careers Comparison</CardTitle>
            <CardDescription>Average salary relative to adjacent roles</CardDescription>
          </CardHeader>
          <CardContent className="p-6 flex-grow flex flex-col">
            <div className="h-72 w-full mt-auto">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={comparisonData} layout="vertical" margin={{ top: 10, right: 30, left: 40, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={true} vertical={false} />
                  <XAxis type="number" tickFormatter={formatChartCurrency} stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis dataKey="role" type="category" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} width={100} />
                  <Tooltip 
                    formatter={(value) => [formatMainCurrency(value), 'Average Salary']}
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '0.75rem', color: 'hsl(var(--foreground))', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    cursor={{ fill: 'hsl(var(--muted))' }}
                  />
                  <Bar dataKey="salary" radius={[0, 4, 4, 0]} barSize={24}>
                    {comparisonData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.isTarget ? 'hsl(var(--chart-color-primary))' : 'hsl(var(--muted-foreground) / 0.3)'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Benefits Breakdown */}
      <Card className="shadow-lg border-none bg-card rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/3 p-8 border-b md:border-b-0 md:border-r border-border bg-career-section">
            <h3 className="text-xl font-bold mb-2">Total Compensation</h3>
            <p className="text-sm text-muted-foreground mb-6">Typical compensation package breakdown for senior roles in this field.</p>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={benefitsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {benefitsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Share']}
                    contentStyle={{ borderRadius: '0.5rem', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="w-full md:w-2/3 p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefitsData.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: item.color }} />
                  <div>
                    <h4 className="font-semibold text-foreground">{item.name}</h4>
                    <p className="text-2xl font-bold mt-1">{item.value}%</p>
                    <p className="text-xs text-muted-foreground mt-1">Of total comp package</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
