
import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function PracticeQuizSection({ level, careerSlug, bestScore, attempts }) {
  const levelLower = level?.toLowerCase() || 'beginner';
  
  const getLevelColorClass = () => {
    switch (levelLower) {
      case 'beginner': return 'text-[hsl(var(--level-beginner))] bg-[hsl(var(--level-beginner))]/10 border-[hsl(var(--level-beginner))]/20';
      case 'intermediate': return 'text-[hsl(var(--level-intermediate))] bg-[hsl(var(--level-intermediate))]/10 border-[hsl(var(--level-intermediate))]/20';
      case 'advanced': return 'text-[hsl(var(--level-advanced))] bg-[hsl(var(--level-advanced))]/10 border-[hsl(var(--level-advanced))]/20';
      default: return 'text-primary bg-primary/10 border-primary/20';
    }
  };

  return (
    <div className={`rounded-2xl p-6 border ${getLevelColorClass()} transition-all`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-6 h-6" />
            <h4 className="text-xl font-bold">Practice Questions for {level}</h4>
          </div>
          <p className="text-sm opacity-80 mb-4 max-w-xl">
            Test your knowledge with 25 curated questions covering technical concepts, behavioral scenarios, and case studies specific to this level.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline" className="bg-background/50">Technical (40%)</Badge>
            <Badge variant="outline" className="bg-background/50">Behavioral (35%)</Badge>
            <Badge variant="outline" className="bg-background/50">Case Study (25%)</Badge>
          </div>
          
          {attempts > 0 && (
            <div className="flex items-center gap-2 text-sm font-medium">
              <Award className="w-4 h-4" />
              <span>Best Score: {bestScore}/25</span>
              <span className="opacity-60">({attempts} attempts)</span>
            </div>
          )}
        </div>
        <div className="shrink-0">
          <Button asChild size="lg" className="w-full md:w-auto shadow-md">
            <Link to={`/interview-prep/${careerSlug}?level=${levelLower}`}>
              <PlayCircle className="w-5 h-5 mr-2" />
              Start Practice Quiz
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
