
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext.jsx';
import pb from '@/lib/pocketbaseClient';
import { Progress } from '@/components/ui/progress';
import { Loader2, Target, TrendingUp, AlertCircle } from 'lucide-react';

const InterviewReadinessScore = () => {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [stats, setStats] = useState({ attempted: 0, accuracy: 0, quizzes: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      if (!currentUser) return;
      try {
        const [progressRes, quizzesRes] = await Promise.all([
          pb.collection('interviewProgress').getList(1, 50, { filter: `userId="${currentUser.id}"`, $autoCancel: false }),
          pb.collection('quizResults').getList(1, 50, { filter: `userId="${currentUser.id}"`, $autoCancel: false })
        ]);

        let totalAttempted = 0;
        let totalCorrect = 0;
        progressRes.items.forEach(p => {
          totalAttempted += p.questionsAttempted || 0;
          totalCorrect += p.correctAnswers || 0;
        });

        const accuracy = totalAttempted > 0 ? (totalCorrect / totalAttempted) * 100 : 0;
        const quizCount = quizzesRes.items.length;
        
        // Simple readiness formula
        const calculatedScore = Math.min(100, Math.round((accuracy * 0.6) + (Math.min(totalAttempted, 50) * 0.4) + (quizCount * 2)));
        
        setStats({ attempted: totalAttempted, accuracy: Math.round(accuracy), quizzes: quizCount });
        setScore(calculatedScore);
      } catch (error) {
        console.error("Error fetching readiness stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [currentUser]);

  if (loading) return <div className="flex justify-center p-8"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>;

  const getLevel = (s) => {
    if (s < 20) return { label: 'Not Ready', color: 'text-destructive' };
    if (s < 40) return { label: 'Beginner', color: 'text-orange-500' };
    if (s < 60) return { label: 'Intermediate', color: 'text-yellow-500' };
    if (s < 80) return { label: 'Advanced', color: 'text-blue-500' };
    return { label: 'Expert', color: 'text-green-500' };
  };

  const level = getLevel(score);

  return (
    <div className="glass-card p-6 rounded-2xl space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Overall Readiness</h3>
        <span className={`px-3 py-1 rounded-full bg-muted text-sm font-medium ${level.color}`}>
          {level.label}
        </span>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Score</span>
          <span className="font-bold">{score}%</span>
        </div>
        <Progress value={score} className="h-3" />
      </div>

      <div className="grid grid-cols-3 gap-4 pt-4 border-t">
        <div className="text-center">
          <p className="text-2xl font-bold text-primary">{stats.attempted}</p>
          <p className="text-xs text-muted-foreground">Questions</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-primary">{stats.accuracy}%</p>
          <p className="text-xs text-muted-foreground">Accuracy</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-primary">{stats.quizzes}</p>
          <p className="text-xs text-muted-foreground">Quizzes</p>
        </div>
      </div>
    </div>
  );
};

export default InterviewReadinessScore;
