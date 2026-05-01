
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Clock, Bookmark, ChevronLeft, ChevronRight, 
  SkipForward, AlertCircle, Loader2, Save, Lock
} from 'lucide-react';
import pb from '@/lib/pocketbaseClient';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useProgressTracker } from '@/hooks/useProgressTracker.js';
import { HintReveal } from '@/components/ui-custom/HintReveal.jsx';
import { AnswerReveal } from '@/components/ui-custom/AnswerReveal.jsx';
import FeatureLockWrapper from '@/components/FeatureLockWrapper.jsx';
import { useSubscription } from '@/hooks/useSubscription.js';

export default function QuizInterface() {
  const { role } = useParams();
  const decodedRole = decodeURIComponent(role);
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { isPremium } = useSubscription();
  
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const tracker = useProgressTracker(decodedRole, questions.length, currentUser);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const records = await pb.collection('interviewQuestions').getList(1, 100, {
          filter: `careerPath="${decodedRole}"`,
          $autoCancel: false
        });
        setQuestions(records.items);
      } catch (err) {
        console.error("Error fetching questions:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [decodedRole]);

  const handleSaveAndExit = async () => {
    setSaving(true);
    await tracker.saveProgress();
    setSaving(false);
    navigate('/interview-prep');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
        <p className="text-muted-foreground">Loading questions for {decodedRole}...</p>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <AlertCircle className="w-12 h-12 text-destructive mb-4" />
        <h2 className="text-2xl font-bold mb-2">No Questions Found</h2>
        <p className="text-muted-foreground mb-6">We couldn't find any practice questions for this role.</p>
        <Button asChild><Link to="/interview-prep">Back to Roles</Link></Button>
      </div>
    );
  }

  const currentQ = questions[tracker.currentIndex];
  const isReview = tracker.reviewList.has(currentQ.id);
  const currentStatus = tracker.answers[currentQ.id];
  const progressPercent = ((tracker.currentIndex + 1) / questions.length) * 100;

  const getDifficultyClass = (diff) => {
    switch(diff?.toLowerCase()) {
      case 'simple': return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400';
      case 'medium': return 'bg-primary/10 text-primary';
      case 'hard': return 'bg-destructive/10 text-destructive';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <Helmet>
        <title>{`Practice: ${decodedRole} | CareerFlow`}</title>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Nav */}
        <div className="flex items-center justify-between mb-8">
          <Button variant="ghost" asChild className="-ml-4 text-muted-foreground">
            <Link to="/interview-prep"><ArrowLeft className="w-4 h-4 mr-2" /> Back</Link>
          </Button>
          <div className="flex gap-3">
            <Button variant="outline" onClick={handleSaveAndExit} disabled={saving}>
              {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
              Save & Exit
            </Button>
          </div>
        </div>

        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex justify-between items-end mb-2">
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-3">
                {decodedRole} Practice
                {!isPremium && <Lock className="w-5 h-5 text-amber-500" />}
              </h1>
              <p className="text-sm text-muted-foreground mt-1">Question {tracker.currentIndex + 1} of {questions.length}</p>
            </div>
            <div className="text-right">
              <span className="text-sm font-medium">{Math.round(progressPercent)}%</span>
            </div>
          </div>
          <Progress value={progressPercent} className="h-2" />
        </div>

        {/* Main Quiz Card */}
        <FeatureLockWrapper>
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentQ.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-3xl p-6 md:p-10 shadow-lg border border-border/50 relative overflow-hidden"
            >
              {/* Badges Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-border/50 pb-6">
                <div className="flex gap-3">
                  <span className={`px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide ${getDifficultyClass(currentQ.difficulty)}`}>
                    {currentQ.difficulty}
                  </span>
                  {currentQ.questionType && (
                    <span className="px-3 py-1 rounded-md text-xs font-bold bg-secondary/10 text-secondary uppercase tracking-wide">
                      {currentQ.questionType}
                    </span>
                  )}
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={isReview ? "text-accent-foreground bg-accent/10" : "text-muted-foreground"}
                  onClick={() => tracker.markForReview(currentQ.id)}
                >
                  <Bookmark className={`w-4 h-4 mr-2 ${isReview ? "fill-current" : ""}`} />
                  {isReview ? "Marked for Review" : "Mark for Review"}
                </Button>
              </div>

              {/* Question Content */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-medium leading-relaxed text-foreground">
                  {currentQ.question}
                </h2>
              </div>

              <HintReveal hints={currentQ.tips} />

              <AnswerReveal 
                expectedAnswer={currentQ.expectedAnswer}
                currentAnswerStatus={currentStatus}
                onMarkCorrect={() => tracker.markCorrect(currentQ.id)}
                onMarkIncorrect={() => tracker.markIncorrect(currentQ.id)}
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="mt-8 flex items-center justify-between">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => tracker.previousQuestion(currentQ.id)}
              disabled={tracker.currentIndex === 0}
              className="rounded-xl px-6"
            >
              <ChevronLeft className="w-5 h-5 mr-1" /> Prev
            </Button>

            <Button 
              variant="ghost" 
              className="text-muted-foreground hover:text-foreground"
              onClick={() => tracker.skipQuestion(currentQ.id)}
            >
              Skip <SkipForward className="w-4 h-4 ml-2" />
            </Button>

            <Button 
              size="lg"
              className="rounded-xl px-6"
              onClick={() => {
                if (tracker.currentIndex === questions.length - 1) {
                  handleSaveAndExit();
                } else {
                  tracker.nextQuestion(currentQ.id);
                }
              }}
            >
              {tracker.currentIndex === questions.length - 1 ? "Finish" : "Next"} <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
          </div>
        </FeatureLockWrapper>

      </div>
    </div>
  );
}
