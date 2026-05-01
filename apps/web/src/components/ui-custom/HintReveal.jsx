
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HintReveal = ({ hints }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  if (!hints) return null;

  return (
    <div className="mt-6 border-t border-border/50 pt-6">
      {!isRevealed ? (
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setIsRevealed(true)}
          className="text-muted-foreground hover:text-foreground"
        >
          <Lightbulb className="w-4 h-4 mr-2" />
          Need a hint?
        </Button>
      ) : (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="bg-accent/10 border border-accent/20 rounded-xl p-4"
        >
          <div className="flex items-center gap-2 text-accent-foreground font-medium mb-2">
            <Lightbulb className="w-4 h-4" />
            <span>Interview Hint</span>
          </div>
          <p className="text-sm text-foreground/80 leading-relaxed">
            {hints}
          </p>
        </motion.div>
      )}
    </div>
  );
};
