
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const AnswerReveal = ({ expectedAnswer, currentAnswerStatus, onMarkCorrect, onMarkIncorrect }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="mt-8 border-t border-border pt-8">
      {!isRevealed ? (
        <div className="flex justify-center">
          <Button 
            size="lg" 
            onClick={() => setIsRevealed(true)}
            className="rounded-full px-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
          >
            <Eye className="w-4 h-4 mr-2" />
            Reveal Expected Answer
          </Button>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="bg-card rounded-2xl p-6 border shadow-sm">
            <h4 className="font-bold text-lg mb-3">Expected Answer:</h4>
            <p className="text-foreground/80 leading-relaxed whitespace-pre-wrap">
              {expectedAnswer || "No specific answer provided. Use your best judgment based on industry standards."}
            </p>
          </div>

          <div className="bg-muted/50 rounded-2xl p-6 text-center">
            <h4 className="font-medium mb-4">How did you do?</h4>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                variant={currentAnswerStatus === 'correct' ? 'default' : 'outline'}
                className={`rounded-xl h-12 ${currentAnswerStatus === 'correct' ? 'bg-green-600 hover:bg-green-700 text-white' : 'border-green-600/30 hover:bg-green-600/10 text-green-600 dark:text-green-400'}`}
                onClick={onMarkCorrect}
              >
                <Check className="w-5 h-5 mr-2" />
                I nailed it
              </Button>
              <Button 
                variant={currentAnswerStatus === 'incorrect' ? 'default' : 'outline'}
                className={`rounded-xl h-12 ${currentAnswerStatus === 'incorrect' ? 'bg-destructive hover:bg-destructive/90 text-destructive-foreground' : 'border-destructive/30 hover:bg-destructive/10 text-destructive dark:text-red-400'}`}
                onClick={onMarkIncorrect}
              >
                <X className="w-5 h-5 mr-2" />
                Needs practice
              </Button>
            </div>
            
            <AnimatePresence>
              {currentAnswerStatus === 'correct' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 dark:text-green-400 font-medium mt-4">
                  Great job! Keep up the momentum.
                </motion.p>
              )}
              {currentAnswerStatus === 'incorrect' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-destructive font-medium mt-4">
                  Keep practicing! You'll get it next time.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </div>
  );
};
