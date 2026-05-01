
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function QuestionNavigation({ 
  currentQuestion, 
  totalQuestions, 
  onPrevious, 
  onNext, 
  onJumpToQuestion 
}) {
  const [jumpInput, setJumpInput] = useState('');

  useEffect(() => {
    setJumpInput(currentQuestion.toString());
  }, [currentQuestion]);

  const handleJumpSubmit = (e) => {
    e.preventDefault();
    const success = onJumpToQuestion(jumpInput);
    if (!success) {
      setJumpInput(currentQuestion.toString());
    }
  };

  const progressPercentage = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="w-full flex flex-col space-y-4">
      <div className="w-full bg-muted rounded-full h-2 mb-4 overflow-hidden">
        <div 
          className="bg-primary h-2 transition-all duration-300 ease-in-out" 
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
          <Button 
            variant="outline" 
            onClick={onPrevious} 
            disabled={currentQuestion <= 1}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>
          
          <span className="text-sm font-medium text-muted-foreground whitespace-nowrap px-4">
            {currentQuestion} of {totalQuestions}
          </span>
          
          <Button 
            variant="outline" 
            onClick={onNext} 
            disabled={currentQuestion >= totalQuestions}
            className="flex items-center gap-2"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        <form onSubmit={handleJumpSubmit} className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-grow sm:flex-grow-0 sm:w-32">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="number"
              min="1"
              max={totalQuestions}
              value={jumpInput}
              onChange={(e) => setJumpInput(e.target.value)}
              className="pl-8 text-foreground"
              placeholder="Jump to..."
            />
          </div>
          <Button type="submit" variant="secondary" className="whitespace-nowrap">
            Go
          </Button>
        </form>
      </div>
    </div>
  );
}
