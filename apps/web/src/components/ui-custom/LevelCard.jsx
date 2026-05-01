
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export function LevelCard({ level, children, className = '' }) {
  const levelClass = {
    Beginner: 'border-[hsl(var(--level-beginner))]',
    Intermediate: 'border-[hsl(var(--level-intermediate))]',
    Advanced: 'border-[hsl(var(--level-advanced))]'
  }[level] || 'border-primary';

  return (
    <Card className={`border-l-4 shadow-sm hover:shadow-md transition-shadow ${levelClass} ${className}`}>
      <CardContent className="p-6">
        {children}
      </CardContent>
    </Card>
  );
}

export default LevelCard;
