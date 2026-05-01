
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Target, BookOpen } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export default function ProgressStats({ totalQuestions, answered, known, needsPractice, readinessScore }) {
  const progressPercent = (answered / totalQuestions) * 100;

  return (
    <div className="glass-card rounded-3xl p-6 sticky top-24">
      <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
        <Target className="w-5 h-5 text-primary" /> Your Progress
      </h3>

      <div className="mb-8 text-center">
        <div className="inline-flex items-center justify-center w-32 h-32 rounded-full border-8 border-primary/20 relative mb-4">
          <div className="absolute inset-0 rounded-full border-8 border-primary" style={{ clipPath: `polygon(0 0, 100% 0, 100% ${readinessScore}%, 0 ${readinessScore}%)` }} />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-extrabold text-foreground">{readinessScore}%</span>
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Readiness</span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between text-sm font-medium mb-2">
            <span className="text-muted-foreground flex items-center gap-2"><BookOpen className="w-4 h-4" /> Answered</span>
            <span className="text-foreground">{answered} / {totalQuestions}</span>
          </div>
          <Progress value={progressPercent} className="h-2 bg-secondary" />
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
          <div className="bg-emerald-500/10 rounded-2xl p-4 text-center">
            <CheckCircle2 className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{known}</div>
            <div className="text-xs font-medium text-emerald-600/80 dark:text-emerald-400/80 uppercase tracking-wider mt-1">Known</div>
          </div>
          <div className="bg-amber-500/10 rounded-2xl p-4 text-center">
            <AlertCircle className="w-6 h-6 text-amber-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">{needsPractice}</div>
            <div className="text-xs font-medium text-amber-600/80 dark:text-amber-400/80 uppercase tracking-wider mt-1">Review</div>
          </div>
        </div>
      </div>
    </div>
  );
}
