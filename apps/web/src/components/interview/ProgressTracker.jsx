
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Flame, Clock, Award } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export default function ProgressTracker({ careerSlug, totalQuestions = 100 }) {
  const [stats, setStats] = useState({
    answered: 0,
    accuracy: 0,
    timeSpent: 0,
    streak: 0,
    byDifficulty: { Simple: 0, Medium: 0, Hard: 0 }
  });

  // Simulate loading progress from local storage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(`interview-progress-${careerSlug}`);
      if (stored) {
        setStats(JSON.parse(stored));
      } else {
        // Initial mock data if none exists
        setStats({
          answered: Math.floor(Math.random() * 20) + 5,
          accuracy: 85,
          timeSpent: 120, // minutes
          streak: 3,
          byDifficulty: { Simple: 10, Medium: 8, Hard: 2 }
        });
      }
    } catch (e) {
      console.error(e);
    }
  }, [careerSlug]);

  const percentage = Math.min(100, Math.round((stats.answered / totalQuestions) * 100));

  const formatTime = (mins) => {
    if (mins < 60) return `${mins}m`;
    return `${Math.floor(mins / 60)}h ${mins % 60}m`;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-2xl border shadow-sm overflow-hidden"
    >
      <div className="p-6 border-b bg-muted/20">
        <h3 className="font-bold text-lg flex items-center gap-2">
          <Target className="w-5 h-5 text-primary" />
          Your Progress
        </h3>
      </div>
      
      <div className="p-6 space-y-6">
        <div>
          <div className="flex justify-between items-end mb-2">
            <span className="text-sm font-medium text-muted-foreground">Completion</span>
            <span className="text-2xl font-bold text-foreground">{percentage}%</span>
          </div>
          <Progress value={percentage} className="h-3" />
          <p className="text-sm text-muted-foreground mt-2">
            {stats.answered} of {totalQuestions} questions completed
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 flex flex-col items-center justify-center text-center">
            <Award className="w-6 h-6 text-emerald-600 mb-2" />
            <div className="text-xl font-bold text-emerald-700 dark:text-emerald-400">{stats.accuracy}%</div>
            <div className="text-xs font-medium text-emerald-600/80 uppercase tracking-wider mt-1">Accuracy</div>
          </div>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 flex flex-col items-center justify-center text-center">
            <Flame className="w-6 h-6 text-amber-600 mb-2" />
            <div className="text-xl font-bold text-amber-700 dark:text-amber-400">{stats.streak} Days</div>
            <div className="text-xs font-medium text-amber-600/80 uppercase tracking-wider mt-1">Streak</div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">By Difficulty</h4>
          <div className="space-y-3">
            {[
              { label: 'Simple', count: stats.byDifficulty.Simple, total: 30, color: 'bg-emerald-500' },
              { label: 'Medium', count: stats.byDifficulty.Medium, total: 35, color: 'bg-amber-500' },
              { label: 'Hard', count: stats.byDifficulty.Hard, total: 35, color: 'bg-rose-500' }
            ].map(diff => (
              <div key={diff.label} className="flex items-center gap-3 text-sm">
                <span className="w-16 font-medium">{diff.label}</span>
                <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                  <div className={`h-full ${diff.color}`} style={{ width: `${(diff.count / diff.total) * 100}%` }} />
                </div>
                <span className="w-10 text-right text-muted-foreground font-mono">{diff.count}/{diff.total}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
