
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import QuestionNavigation from './QuestionNavigation.jsx';

export default function QuestionCard({
  careerSlug,
  questionNumber,
  totalQuestions,
  question,
  answer,
  userAnswer,
  showAnswer,
  onSetAnswer,
  onToggleAnswer,
  onClearAnswer,
  onPrevious,
  onNext,
  onJumpToQuestion
}) {
  return (
    <div className="max-w-4xl mx-auto w-full space-y-6">
      <QuestionNavigation 
        currentQuestion={questionNumber}
        totalQuestions={totalQuestions}
        onPrevious={onPrevious}
        onNext={onNext}
        onJumpToQuestion={onJumpToQuestion}
      />

      <div className="bg-card rounded-2xl shadow-lg border border-border p-6 md:p-8 flex flex-col space-y-6 transition-all">
        <div className="space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            Question {questionNumber}
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-card-foreground leading-snug">
            {question}
          </h2>
        </div>

        <div className="space-y-3">
          <label htmlFor="user-answer" className="text-sm font-medium text-muted-foreground">
            Your Answer (Optional)
          </label>
          <Textarea 
            id="user-answer"
            value={userAnswer}
            onChange={(e) => onSetAnswer(e.target.value)}
            placeholder="Type your practice answer here to test your knowledge..."
            className="min-h-[150px] resize-y text-foreground bg-background"
          />
          <div className="flex justify-end">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onClearAnswer}
              disabled={!userAnswer}
              className="text-muted-foreground hover:text-destructive transition-colors"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear Answer
            </Button>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <Button 
            onClick={onToggleAnswer} 
            variant={showAnswer ? "secondary" : "default"}
            className="w-full sm:w-auto flex items-center gap-2"
          >
            {showAnswer ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {showAnswer ? 'Hide Expert Answer' : 'Show Expert Answer'}
          </Button>

          <AnimatePresence>
            {showAnswer && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="p-6 bg-muted rounded-xl border border-border/50">
                  <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">
                    Expert Answer
                  </h4>
                  <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-foreground">
                    {answer.split('\n').map((paragraph, i) => (
                      <p key={i} className="mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
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
