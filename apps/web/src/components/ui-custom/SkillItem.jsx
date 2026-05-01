
import React from 'react';
import { Badge } from '@/components/ui/badge';

export function SkillItem({ name, category, difficulty }) {
  return (
    <div className="flex items-center justify-between p-3 bg-card border border-border/50 rounded-xl hover:border-primary/30 transition-colors">
      <div className="flex flex-col gap-1">
        <span className="font-bold text-sm">{name}</span>
        <span className="text-xs text-muted-foreground">{category}</span>
      </div>
      {difficulty && (
        <Badge variant="outline" className="text-xs">
          {difficulty}
        </Badge>
      )}
    </div>
  );
}

export default SkillItem;
