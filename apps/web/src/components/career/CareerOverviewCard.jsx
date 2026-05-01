
import React from 'react';
import { Briefcase, TrendingUp, Activity, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

export default function CareerOverviewCard({ career }) {
  if (!career) return null;

  const demandLevel = career.jobDemand || career.jobDemandOutlook || 'High';
  
  // Determine color based on demand
  let demandColor = 'text-emerald-600 bg-emerald-500/10 border-emerald-500/20';
  let gaugeWidth = 'w-[85%] bg-emerald-500';
  if (demandLevel.toLowerCase().includes('medium') || demandLevel.toLowerCase() === 'average') {
    demandColor = 'text-amber-600 bg-amber-500/10 border-amber-500/20';
    gaugeWidth = 'w-[60%] bg-amber-500';
  } else if (demandLevel.toLowerCase().includes('low')) {
    demandColor = 'text-rose-600 bg-rose-500/10 border-rose-500/20';
    gaugeWidth = 'w-[30%] bg-rose-500';
  }

  // Extract growth projection
  const growthPercent = career.salaryInsights?.growthProjection || career.salaryInsights?.projectedGrowth || '15%';
  const numGrowth = parseInt(growthPercent.replace(/[^0-9]/g, '')) || 15;

  const avgSalary = career.averageSalary || career.salaryRange?.avg || 95000;
  const formatCurrency = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  // Fallback highlights
  const highlights = career.overview 
    ? career.overview.split('. ').filter(s => s.length > 15).slice(0, 4).map(s => s + (s.endsWith('.') ? '' : '.'))
    : [
      'High growth potential in the coming decade with increasing remote opportunities.',
      'Cross-functional collaboration across multiple business units.',
      'Strong focus on continuous learning and technological adaptation.',
      'Competitive compensation packages and comprehensive benefits.'
    ];

  return (
    <Card className="shadow-lg border-none overflow-hidden rounded-2xl bg-card">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          
          {/* Main Info */}
          <div className="lg:col-span-2 p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="secondary" className="text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 hover:bg-primary/20 transition-colors">
                {career.category || 'Career Profile'}
              </Badge>
              <Badge variant="outline" className={`text-xs font-semibold tracking-wider uppercase border ${demandColor}`}>
                {demandLevel} Demand
              </Badge>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-balance leading-tight text-foreground">
              {career.name}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl">
              {career.description || `Explore the comprehensive profile, responsibilities, and trajectory of a ${career.name}. Master the skills needed to excel in this role.`}
            </p>
            
            <div className="space-y-5">
              <h3 className="font-semibold text-foreground flex items-center gap-2 text-xl">
                <Briefcase className="w-5 h-5 text-primary" /> Key Highlights
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlights.map((highlight, idx) => (
                  <motion.li 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx, duration: 0.4 }}
                    key={idx} 
                    className="flex items-start gap-3 text-muted-foreground bg-muted/50 p-4 rounded-xl"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats Sidebar */}
          <div className="bg-career-section p-8 lg:p-10 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-border relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="mb-10 relative z-10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Average Salary</h3>
              <div className="text-4xl font-extrabold text-foreground mb-2">
                {formatCurrency(avgSalary)}
              </div>
              <p className="text-sm text-muted-foreground">National average base pay</p>
            </div>

            <div className="mb-10 relative z-10">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Market Demand</h3>
              </div>
              <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden mb-2">
                <motion.div 
                  initial={{ width: 0 }} 
                  animate={{ width: gaugeWidth.split(' ')[0].replace('w-[', '').replace(']', '') }} 
                  transition={{ duration: 1, delay: 0.2 }}
                  className={`h-full rounded-full ${gaugeWidth.split(' ')[1]}`} 
                />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground font-medium">
                <span>Low</span>
                <span>Medium</span>
                <span>High</span>
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">10-Year Growth</h3>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-3xl font-bold text-foreground">
                    {numGrowth}%
                  </span>
                  <p className="text-xs text-muted-foreground font-medium mt-1">Projected industry expansion</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </CardContent>
    </Card>
  );
}
