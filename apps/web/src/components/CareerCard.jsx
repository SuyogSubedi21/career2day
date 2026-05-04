
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, HelpCircle, LayoutList } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getCareerSalaryInfo } from '@/lib/utils/careerSalary';

const formatCurrency = (num) => {
  if (!num) return 'N/A';
  return new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: 'USD', 
    maximumFractionDigits: 0 
  }).format(num);
};

const getDemandBadgeVariant = (demand) => {
  if (!demand) return { bg: 'bg-muted', text: 'text-muted-foreground', label: 'Unknown' };
  const lower = demand.toLowerCase();
  if (lower === 'high') return { bg: 'bg-emerald-500/20', text: 'text-emerald-700 dark:text-emerald-400', label: 'High Demand' };
  if (lower === 'medium') return { bg: 'bg-amber-500/20', text: 'text-amber-700 dark:text-amber-400', label: 'Medium Demand' };
  if (lower === 'low') return { bg: 'bg-muted', text: 'text-muted-foreground', label: 'Low Demand' };
  return { bg: 'bg-muted', text: 'text-muted-foreground', label: demand };
};

export default function CareerCard({ career }) {
  const { name, slug, description } = career;

  const salaryInfo = getCareerSalaryInfo(career);
  const salaryDisplay = salaryInfo.hasAverage ? formatCurrency(salaryInfo.avg) : 'N/A';
  const demandBadge = getDemandBadgeVariant(career.jobDemand || career.jobDemandOutlook || career.demand);
  
  const truncatedDesc = description && description.length > 130 
    ? description.substring(0, 130) + '...' 
    : description || 'Explore this career path to learn more about the responsibilities and required skills.';

  return (
    <Card className="h-full bg-card border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group overflow-hidden">
      <CardContent className="p-6 flex flex-col h-full relative">
        <Link to={`/careers/${slug}`} className="block flex-1 mb-4 z-10">
          <div className="flex items-start justify-between mb-4 gap-4">
            <div>
              <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors text-balance leading-tight">
                {name}
              </h3>
              <p className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-2 flex items-center">
                {salaryDisplay} <span className="text-sm font-medium text-muted-foreground ml-1.5 font-normal">/ avg</span>
              </p>
            </div>
            <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-5">
            <Badge className={`${demandBadge.bg} ${demandBadge.text} border-0 font-semibold px-2.5 py-0.5`}>
              <TrendingUp className="w-3.5 h-3.5 mr-1.5" />
              {demandBadge.label}
            </Badge>
          </div>
          
          <p className="text-muted-foreground text-sm leading-relaxed mb-2">
            {truncatedDesc}
          </p>
        </Link>
        
        <div className="pt-5 mt-auto flex flex-col gap-2.5 border-t border-border/50 relative z-10">
          <Button variant="secondary" className="w-full justify-start text-secondary-foreground font-medium" asChild>
            <Link to={`/interview-questions/${slug}`}>
              <HelpCircle className="w-4 h-4 mr-2.5 opacity-70" />
              100 Interview Questions
            </Link>
          </Button>
          <Button variant="outline" className="w-full justify-start font-medium bg-background hover:bg-muted" asChild>
            <Link to={`/careers/${slug}?tab=quiz`}>
              <LayoutList className="w-4 h-4 mr-2.5 opacity-70 text-amber-500" />
              Take Career Quiz
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
