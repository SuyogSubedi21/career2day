
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function CareerCard({ career }) {
  // We use the 100 question standard layout
  const diffStats = [
    { label: 'Simple', count: 30, color: 'text-emerald-600 bg-emerald-500/10 border-emerald-500/20' },
    { label: 'Medium', count: 35, color: 'text-amber-600 bg-amber-500/10 border-amber-500/20' },
    { label: 'Hard', count: 35, color: 'text-rose-600 bg-rose-500/10 border-rose-500/20' }
  ];

  return (
    <Link 
      to={`/interview-prep/${career.slug}`}
      className="group flex flex-col bg-card rounded-2xl border shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 overflow-hidden"
    >
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
            {career.name.charAt(0)}
          </div>
          <Badge variant="secondary" className="font-mono">100 Qs</Badge>
        </div>
        
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {career.name}
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-2 mb-6 flex-1">
          {career.description || `Comprehensive interview preparation guide and questions for ${career.name} roles.`}
        </p>

        <div className="space-y-3 mb-6">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Difficulty Breakdown</div>
          <div className="flex flex-wrap gap-2">
            {diffStats.map(stat => (
              <Badge key={stat.label} variant="outline" className={`font-mono text-xs ${stat.color}`}>
                {stat.count} {stat.label}
              </Badge>
            ))}
          </div>
        </div>

      </div>
      
      <div className="p-4 border-t bg-muted/20 flex items-center justify-between text-sm font-medium text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors mt-auto">
        <span className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 opacity-70" />
          Start Practicing
        </span>
        <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </div>
    </Link>
  );
}
