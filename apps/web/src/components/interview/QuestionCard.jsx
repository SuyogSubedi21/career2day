
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function QuestionCard({ 
  question, 
  onMarkKnown, 
  onMarkNeedsPractice, 
  isAnswerVisible, 
  onToggleAnswer,
  currentStatus 
}) {
  const getCategoryColor = (category) => {
    switch(category) {
      case 'Beginner': return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400';
      case 'Intermediate': return 'bg-blue-500/10 text-blue-600 dark:text-blue-400';
      case 'Advanced': return 'bg-purple-500/10 text-purple-600 dark:text-purple-400';
      case 'Technical': return 'bg-orange-500/10 text-orange-600 dark:text-orange-400';
      case 'Behavioural': return 'bg-pink-500/10 text-pink-600 dark:text-pink-400';
      default: return 'bg-primary/10 text-primary';
    }
  };

  return (
    <div className="glass-card rounded-3xl overflow-hidden border border-border/50 shadow-lg">
      <div className="p-6 md:p-8 border-b border-border/50 bg-background/50">
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm font-bold text-muted-foreground tracking-wider uppercase">
            Question {question.questionNumber}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide ${getCategoryColor(question.category)}`}>
            {question.category}
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold leading-tight text-foreground">
          {question.question}
        </h2>
      </div>

      <div className="p-6 md:p-8 bg-muted/20 min-h-[250px] flex flex-col">
        <AnimatePresence mode="wait">
          {!isAnswerVisible ? (
            <motion.div 
              key="hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex items-center justify-center py-12"
            >
              <Button 
                onClick={onToggleAnswer} 
                size="lg" 
                className="rounded-full px-8 shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
              >
                <Eye className="w-5 h-5 mr-2" /> Show Answer
              </Button>
            </motion.div>
          ) : (
            <motion.div 
              key="visible"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 flex flex-col"
            >
              <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                  Suggested Answer
                </h3>
                <p className="text-foreground/90 leading-relaxed">{question.answer}</p>
                
                <div className="mt-6 p-5 bg-secondary/50 rounded-2xl border border-border/50">
                  <h4 className="text-sm font-bold text-foreground mb-2 uppercase tracking-wider">Why they ask this</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{question.explanation}</p>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-border/50 flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={onMarkNeedsPractice}
                  variant={currentStatus === 'needsPractice' ? 'default' : 'outline'}
                  className={`rounded-full px-8 h-12 ${currentStatus === 'needsPractice' ? 'bg-amber-500 hover:bg-amber-600 text-white border-transparent' : 'hover:bg-amber-500/10 hover:text-amber-600 hover:border-amber-500/50'}`}
                >
                  <AlertCircle className="w-5 h-5 mr-2" /> Needs Practice
                </Button>
                <Button 
                  onClick={onMarkKnown}
                  variant={currentStatus === 'known' ? 'default' : 'outline'}
                  className={`rounded-full px-8 h-12 ${currentStatus === 'known' ? 'bg-emerald-500 hover:bg-emerald-600 text-white border-transparent' : 'hover:bg-emerald-500/10 hover:text-emerald-600 hover:border-emerald-500/50'}`}
                >
                  <CheckCircle2 className="w-5 h-5 mr-2" /> I Know This
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
