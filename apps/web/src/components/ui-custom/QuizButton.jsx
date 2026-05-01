
import React from 'react';
import { PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function QuizButton({ level, onClick, disabled }) {
  const colorMap = {
    Beginner: 'bg-[hsl(var(--level-beginner))] hover:bg-[hsl(var(--level-beginner))]/90 text-white',
    Intermediate: 'bg-[hsl(var(--level-intermediate))] hover:bg-[hsl(var(--level-intermediate))]/90 text-white',
    Advanced: 'bg-[hsl(var(--level-advanced))] hover:bg-[hsl(var(--level-advanced))]/90 text-white',
  };

  const btnClass = colorMap[level] || 'bg-primary hover:bg-primary/90 text-primary-foreground';

  return (
    <Button 
      onClick={onClick} 
      disabled={disabled}
      className={`shadow-md transition-all ${btnClass}`}
    >
      <PlayCircle className="w-4 h-4 mr-2" />
      Start {level} Quiz
    </Button>
  );
}

export default QuizButton;
