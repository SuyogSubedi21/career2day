
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Code2 } from 'lucide-react';

const getDifficultyColor = (difficulty) => {
  switch (difficulty.toLowerCase()) {
    case 'beginner':
      return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20';
    case 'intermediate':
      return 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20';
    case 'advanced':
      return 'bg-destructive/10 text-destructive border-destructive/20';
    default:
      return 'bg-muted text-muted-foreground border-border';
  }
};

export default function CareerProjectCard({ project }) {
  return (
    <Card className="h-full flex flex-col shadow-sm border-border hover:shadow-md transition-all duration-300">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start gap-4 mb-4">
          <h3 className="font-bold text-lg text-card-foreground leading-tight">
            {project.title}
          </h3>
          <Badge variant="outline" className={`shrink-0 ${getDifficultyColor(project.difficulty)}`}>
            {project.difficulty}
          </Badge>
        </div>
        
        <p className="text-muted-foreground text-sm mb-6 flex-grow">
          {project.description}
        </p>
        
        <div className="space-y-4 mt-auto pt-4 border-t border-border">
          <div className="flex items-center text-sm text-muted-foreground font-medium">
            <Clock className="w-4 h-4 mr-2 text-primary" />
            Est. Time: {project.estimatedTime}
          </div>
          
          <div>
            <div className="flex items-center text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              <Code2 className="w-3.5 h-3.5 mr-1.5" /> Technologies
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs bg-secondary text-secondary-foreground">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
