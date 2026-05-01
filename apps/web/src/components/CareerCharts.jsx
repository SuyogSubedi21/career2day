
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Clock } from 'lucide-react';

const COLORS = ['hsl(var(--primary))', 'hsl(var(--accent))', 'hsl(var(--destructive))', '#10b981', '#f59e0b'];

export function SalaryRangeChart({ salary }) {
  if (!salary) return null;

  const data = [
    { name: 'Entry Level', value: salary.min || 0 },
    { name: 'Average', value: salary.avg || 0 },
    { name: 'Senior Level', value: salary.max || 0 },
  ];

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <Card className="shadow-sm border-border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Salary Expectations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
              <YAxis 
                tickFormatter={(val) => `$${val / 1000}k`} 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
              />
              <Tooltip 
                formatter={(val) => [formatCurrency(val), 'Salary']}
                cursor={{ fill: 'hsl(var(--muted))' }}
                contentStyle={{ borderRadius: '8px', border: '1px solid hsl(var(--border))' }}
              />
              <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} maxBarSize={60} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export function DemandIndicator({ demandLevel = '', timeToReady = '' }) {
  const isHigh = demandLevel?.toLowerCase().includes('high');
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Card className="shadow-sm border-border bg-card">
        <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${isHigh ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400' : 'bg-primary/20 text-primary'}`}>
            <TrendingUp className="w-6 h-6" />
          </div>
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-1">Market Demand</p>
          <h3 className="text-2xl font-bold text-foreground">{demandLevel || 'Unknown'}</h3>
        </CardContent>
      </Card>
      
      <Card className="shadow-sm border-border bg-card">
        <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
          <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center mb-4">
            <Clock className="w-6 h-6" />
          </div>
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-1">Time to Ready</p>
          <h3 className="text-2xl font-bold text-foreground">{timeToReady || 'Unknown'}</h3>
        </CardContent>
      </Card>
    </div>
  );
}

export function SkillsDistributionChart({ skills }) {
  if (!skills || !Array.isArray(skills) || skills.length === 0) return null;

  // Group skills by category
  const categoryCount = skills.reduce((acc, skill) => {
    const cat = skill.category || 'Other';
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});

  const data = Object.keys(categoryCount).map(key => ({
    name: key,
    value: categoryCount[key]
  }));

  return (
    <Card className="shadow-sm border-border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Skills Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: '1px solid hsl(var(--border))' }}
              />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export function LearningTimeline({ roadmap }) {
  if (!roadmap || !Array.isArray(roadmap) || roadmap.length === 0) return null;

  // Custom Gantt-style visualization using HTML/CSS for better responsiveness
  const totalDuration = roadmap.reduce((sum, phase) => sum + (phase.duration || 0), 0);

  return (
    <Card className="shadow-sm border-border overflow-hidden">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Learning Timeline (Weeks)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {roadmap.map((phase, index) => {
            const widthPercentage = totalDuration > 0 ? ((phase.duration || 0) / totalDuration) * 100 : 0;
            return (
              <div key={phase.phase || index} className="relative">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-foreground">Phase {phase.phase || index + 1}: {phase.title}</span>
                  <span className="text-muted-foreground">{phase.duration || 0} weeks</span>
                </div>
                <div className="w-full bg-muted rounded-full h-4 overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${Math.max(widthPercentage, 5)}%`,
                      backgroundColor: COLORS[index % COLORS.length]
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
