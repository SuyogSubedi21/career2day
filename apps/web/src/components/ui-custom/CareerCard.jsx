
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, DollarSign, TrendingUp } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export const CareerCard = ({ career, index = 0 }) => {
  if (!career) {
    return (
      <div className="bg-card rounded-2xl p-6 flex flex-col h-full border border-border shadow-sm">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2 mb-6" />
        <Skeleton className="h-12 w-full mb-4" />
        <Skeleton className="h-10 w-full" />
      </div>
    );
  }

  const getDemandBadgeClass = (demand) => {
    if (!demand) return 'bg-muted text-muted-foreground';
    switch (demand.toLowerCase()) {
      case 'high': 
      case 'very high':
        return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20';
      case 'medium': 
        return 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20';
      case 'low': 
        return 'bg-destructive/10 text-destructive border-destructive/20';
      default: 
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  const formatSalary = (amount) => {
    if (!amount || amount === 0) return 'N/A';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const careerName = career.name || 'Career Path';
  const careerCategory = career.category || 'Tech';
  const careerDescription = career.description || career.overview || 'Explore this career path';
  
  // Safely extract salary data from various possible structures
  const avgSalary = career.averageSalary || career.salary?.avg || 0;
  const jobDemand = career.jobDemand || career.jobDemandOutlook || 'Medium';
  const careerSlug = career.slug || '';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group bg-card border border-border rounded-2xl p-6 flex flex-col h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors line-clamp-2 text-balance">
            {careerName}
          </h3>
          
          {/* Prominent Average Salary Display */}
          <div className="mt-2 mb-3 flex items-center">
            <span className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 tracking-tight">
              {formatSalary(avgSalary)}
            </span>
            <span className="text-sm font-medium text-muted-foreground ml-2">/ avg</span>
          </div>
          
        </div>
        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0 ml-2 shadow-sm">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <span className={`font-semibold px-2.5 py-0.5 rounded-md text-xs border flex items-center ${getDemandBadgeClass(jobDemand)}`}>
          <TrendingUp className="w-3 h-3 mr-1.5" />
          {jobDemand} Demand
        </span>
        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-secondary/50 text-secondary-foreground inline-block">
          {careerCategory}
        </span>
      </div>

      <p className="text-sm text-muted-foreground mb-6 line-clamp-3 flex-grow leading-relaxed">
        {careerDescription}
      </p>
      
      {careerSlug ? (
        <Link 
          to={`/careers/${careerSlug}`} 
          className="pt-4 border-t border-border/50 text-sm font-bold text-primary hover:text-primary/80 inline-flex items-center transition-colors w-full justify-center"
        >
          View Career Details
        </Link>
      ) : (
        <div className="pt-4 border-t border-border/50 text-sm font-semibold text-muted-foreground text-center">
          Career data unavailable
        </div>
      )}
    </motion.div>
  );
};
