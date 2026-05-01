
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Target, Clock, Trophy, CheckCircle } from 'lucide-react';

export default function QuestionStats({ stats, careerName }) {
  const percentage = stats.total > 0 ? Math.round((stats.reviewed / stats.total) * 100) : 0;
  const remaining = stats.total - stats.reviewed;
  const estimatedMins = remaining * 2; // 2 mins per question
  
  const formatTime = (mins) => {
    if (mins < 60) return `${mins}m`;
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${h}h ${m}m`;
  };

  return (
    <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden mb-8">
      <div className="p-6 border-b border-border bg-muted/20">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Target className="w-5 h-5 text-primary" />
          {careerName} Progress
        </h2>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Progress */}
        <div className="col-span-1 lg:col-span-2 space-y-6">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="font-semibold text-foreground">Overall Completion</span>
              <span className="font-bold text-primary">{percentage}%</span>
            </div>
            <Progress value={percentage} className="h-3" />
            <p className="text-sm text-muted-foreground mt-2">
              {stats.reviewed} out of {stats.total} questions reviewed
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {['Simple', 'Medium', 'Hard'].map((diff) => {
              const dStats = stats.byDifficulty[diff];
              const pct = dStats.total > 0 ? Math.round((dStats.reviewed / dStats.total) * 100) : 0;
              let color = 'bg-emerald-500';
              if (diff === 'Medium') color = 'bg-amber-500';
              if (diff === 'Hard') color = 'bg-rose-500';

              return (
                <div key={diff} className="bg-background rounded-xl border border-border p-4">
                  <div className="text-sm font-medium text-muted-foreground mb-1">{diff}</div>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-2xl font-bold text-foreground">{dStats.reviewed}</span>
                    <span className="text-sm text-muted-foreground mb-1">/ {dStats.total}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                    <div className={`h-full ${color}`} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Side Stats */}
        <div className="space-y-4">
          <div className="bg-primary/5 rounded-xl border border-primary/10 p-5 flex items-start gap-4">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Est. Time Remaining</div>
              <div className="text-xl font-bold text-foreground">{formatTime(estimatedMins)}</div>
            </div>
          </div>

          <div className="bg-emerald-500/5 rounded-xl border border-emerald-500/10 p-5 flex items-start gap-4">
            <div className="bg-emerald-500/10 p-2 rounded-lg">
              <Trophy className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Practice Streak</div>
              <div className="text-xl font-bold text-emerald-700 dark:text-emerald-500">3 Days</div>
            </div>
          </div>
          
          <div className="bg-secondary/50 rounded-xl border border-border p-5 flex items-start gap-4">
            <div className="bg-background p-2 rounded-lg border border-border">
              <CheckCircle className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Last Reviewed</div>
              <div className="text-lg font-bold text-foreground">Today</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
