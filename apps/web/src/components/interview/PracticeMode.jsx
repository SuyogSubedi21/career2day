
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { X, Clock, BrainCircuit, RefreshCw, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function PracticeMode({ 
  questions, 
  reviewedIds, 
  onToggleReview, 
  onExit,
  sessionTime,
  sessionAttempted
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  // Initialize with a random question if possible
  useEffect(() => {
    if (questions.length > 0) {
      setCurrentIndex(Math.floor(Math.random() * questions.length));
    }
  }, [questions.length]);

  const currentQuestion = questions[currentIndex];
  const isReviewed = currentQuestion ? reviewedIds.has(currentQuestion.id) : false;

  const nextQuestion = () => {
    setIsRevealed(false);
    // Get random question not just the same one
    let nextIdx;
    if (questions.length > 1) {
      do {
        nextIdx = Math.floor(Math.random() * questions.length);
      } while (nextIdx === currentIndex);
      setCurrentIndex(nextIdx);
    }
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (!currentQuestion) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-card rounded-2xl border border-border">
        <BrainCircuit className="w-12 h-12 text-muted-foreground mb-4" />
        <h3 className="text-xl font-bold mb-2">No questions available</h3>
        <p className="text-muted-foreground mb-6">Change your filters to find practice questions.</p>
        <Button onClick={onExit}>Exit Practice Mode</Button>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden flex flex-col max-w-4xl mx-auto w-full">
      {/* Header */}
      <div className="bg-slate-950 dark:bg-black text-white p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-sm font-medium">
            <Clock className="w-4 h-4 text-emerald-400" />
            {formatTime(sessionTime)}
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-sm font-medium">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            {sessionAttempted} Reviewed this session
          </div>
        </div>
        <Button variant="ghost" size="sm" onClick={onExit} className="text-slate-300 hover:text-white hover:bg-white/10">
          <X className="w-4 h-4 mr-2" /> End Session
        </Button>
      </div>

      {/* Main Content */}
      <div className="p-8 md:p-12 flex-1 flex flex-col">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Badge variant="outline" className="px-3 py-1 bg-muted">{currentQuestion.difficulty}</Badge>
          <Badge variant="outline" className="px-3 py-1 bg-muted">{currentQuestion.level}</Badge>
          <Badge variant="secondary" className="px-3 py-1">{currentQuestion.category}</Badge>
        </div>

        <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground leading-tight text-balance mb-12">
          {currentQuestion.question}
        </h2>

        <div className="flex-1 flex flex-col justify-center max-w-3xl mx-auto w-full">
          <AnimatePresence mode="wait">
            {!isRevealed ? (
              <motion.div 
                key="hidden"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex justify-center"
              >
                <Button size="lg" className="w-full md:w-auto text-lg h-14 px-8" onClick={() => setIsRevealed(true)}>
                  Show Explanation
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="revealed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-lg leading-relaxed text-foreground">
                  {currentQuestion.explanation}
                </div>
                
                {currentQuestion.practicalExample && (
                  <div className="bg-muted border border-border rounded-xl p-6 text-muted-foreground italic">
                    <strong>Example:</strong> {currentQuestion.practicalExample}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-border">
                  <div className="flex items-center space-x-3 bg-secondary/50 px-4 py-2 rounded-lg border border-border">
                    <Checkbox 
                      id={`practice-review-${currentQuestion.id}`} 
                      checked={isReviewed}
                      onCheckedChange={() => onToggleReview(currentQuestion.id)}
                      className="w-5 h-5"
                    />
                    <Label htmlFor={`practice-review-${currentQuestion.id}`} className="text-base font-medium cursor-pointer">
                      Mark as Reviewed
                    </Label>
                  </div>
                  
                  <div className="flex gap-4 w-full sm:w-auto">
                    <Button variant="outline" className="flex-1 sm:flex-none" onClick={nextQuestion}>
                      <RefreshCw className="w-4 h-4 mr-2" /> Skip
                    </Button>
                    <Button className="flex-1 sm:flex-none" onClick={nextQuestion}>
                      Next Question <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
