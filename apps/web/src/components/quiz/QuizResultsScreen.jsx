
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, ArrowRight, RefreshCcw, FileText, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function QuizResultsScreen({ score, totalQuestions, careerName, careerSlug, onRetake }) {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  let level = 'Beginner';
  let levelColor = 'text-destructive bg-destructive/10 border-destructive/20';
  let feedback = "You're just starting! Review the roadmap and keep learning.";
  
  if (percentage >= 70) {
    level = 'Job-Ready';
    levelColor = 'text-emerald-600 bg-emerald-500/10 border-emerald-500/20 dark:text-emerald-400';
    feedback = "Excellent! You have a strong foundation for this career.";
  } else if (percentage >= 40) {
    level = 'Intermediate';
    levelColor = 'text-amber-600 bg-amber-500/10 border-amber-500/20 dark:text-amber-400';
    feedback = "Good foundation! Focus on advanced topics to reach job readiness.";
  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-4 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-3xl w-full glass-card rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 relative z-10">
          <Trophy className="w-12 h-12 text-primary" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 relative z-10">Quiz Completed!</h1>
        <p className="text-xl text-muted-foreground mb-10 relative z-10">
          Here's how you performed on the {careerName} assessment.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12 relative z-10">
          <div className="text-center">
            <div className="text-7xl font-extrabold text-foreground mb-2">{percentage}%</div>
            <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Final Score</div>
          </div>
          
          <div className="hidden md:block w-px h-24 bg-border" />
          
          <div className="text-center">
            <div className={`inline-flex items-center justify-center px-6 py-3 rounded-2xl border-2 text-2xl font-bold mb-2 ${levelColor}`}>
              {level}
            </div>
            <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Readiness Level</div>
          </div>
        </div>

        <p className="text-lg font-medium text-foreground/80 mb-12 max-w-lg mx-auto relative z-10">
          {feedback}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
          <Button asChild size="lg" className="rounded-full h-14 text-lg shadow-lg shadow-primary/20">
            <Link to="/cv-builder"><FileText className="w-5 h-5 mr-2" /> Build Your CV</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full h-14 text-lg glass-panel">
            <Link to={`/interview-questions/${careerSlug}`}><Briefcase className="w-5 h-5 mr-2" /> Practice Interviews</Link>
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-6 mt-8 relative z-10">
          <button onClick={onRetake} className="text-sm font-bold text-muted-foreground hover:text-primary flex items-center transition-colors">
            <RefreshCcw className="w-4 h-4 mr-2" /> Retake Quiz
          </button>
          <div className="w-1 h-1 rounded-full bg-border" />
          <Link to={`/career-roadmaps/${careerSlug}`} className="text-sm font-bold text-muted-foreground hover:text-primary flex items-center transition-colors">
            View Roadmap <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
