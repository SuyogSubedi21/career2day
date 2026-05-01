
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function QuizQuestionCard({ 
  question, 
  selectedAnswer, 
  onSelectAnswer, 
  showFeedback, 
  isCorrect 
}) {
  return (
    <div className="glass-card rounded-3xl overflow-hidden border border-border/50 shadow-lg">
      <div className="p-6 md:p-10 border-b border-border/50 bg-background/50">
        <span className="text-sm font-bold text-primary tracking-wider uppercase mb-4 block">
          Question {question.questionNumber}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold leading-tight text-foreground">
          {question.question}
        </h2>
      </div>

      <div className="p-6 md:p-10 bg-muted/10">
        <div className="space-y-4">
          {question.options.map((optionText, index) => {
            const isSelected = selectedAnswer === index;
            const isActuallyCorrect = index === question.correctAnswer;
            
            let btnClass = "w-full justify-start h-auto py-5 px-6 text-left whitespace-normal border-2 rounded-2xl transition-all duration-300 ";
            
            if (!showFeedback) {
              btnClass += isSelected 
                ? "bg-primary/5 border-primary text-foreground shadow-md" 
                : "bg-background hover:bg-secondary border-border text-foreground hover:border-primary/30";
            } else {
              if (isActuallyCorrect) {
                btnClass += "bg-emerald-500/10 border-emerald-500 text-emerald-700 dark:text-emerald-400 shadow-md";
              } else if (isSelected && !isActuallyCorrect) {
                btnClass += "bg-destructive/10 border-destructive text-destructive shadow-md";
              } else {
                btnClass += "bg-background border-border opacity-40";
              }
            }

            const letter = String.fromCharCode(65 + index); // A, B, C, D

            return (
              <Button 
                key={index}
                variant="outline" 
                className={btnClass}
                onClick={() => !showFeedback && onSelectAnswer(index)}
                disabled={showFeedback}
              >
                <div className="flex items-center w-full">
                  <span className={`w-10 h-10 rounded-full flex items-center justify-center mr-5 shrink-0 font-bold text-lg transition-colors ${
                    isSelected && !showFeedback ? 'bg-primary text-primary-foreground' : 
                    showFeedback && isActuallyCorrect ? 'bg-emerald-500 text-white' :
                    showFeedback && isSelected && !isActuallyCorrect ? 'bg-destructive text-white' :
                    'bg-secondary text-secondary-foreground'
                  }`}>
                    {letter}
                  </span>
                  <span className="flex-1 text-lg font-medium">{optionText}</span>
                  
                  {showFeedback && isActuallyCorrect && (
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 ml-4" />
                  )}
                  {showFeedback && isSelected && !isActuallyCorrect && (
                    <XCircle className="w-6 h-6 text-destructive shrink-0 ml-4" />
                  )}
                </div>
              </Button>
            );
          })}
        </div>

        {showFeedback && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-8 p-6 rounded-2xl border ${isCorrect ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-destructive/10 border-destructive/20'}`}
          >
            <h3 className={`font-bold text-lg mb-2 flex items-center gap-2 ${isCorrect ? 'text-emerald-600 dark:text-emerald-400' : 'text-destructive'}`}>
              {isCorrect ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
              {isCorrect ? 'Correct!' : 'Incorrect'}
            </h3>
            <p className="text-foreground/80 leading-relaxed">{question.explanation}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
