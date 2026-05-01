
import React, { useState } from 'react';
import { Heart, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useBookmarks } from '@/hooks/useBookmarks.js';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function BookmarkButton({ cvId, className = "", variant = "outline", showText = true }) {
  const { isBookmarked, toggleBookmark, loading: globalLoading } = useBookmarks();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const bookmarked = isBookmarked(cvId);

  const handleClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!cvId || isProcessing) return;
    
    setIsProcessing(true);
    await toggleBookmark(cvId);
    setIsProcessing(false);
  };

  if (!cvId) return null;

  const isDisabled = globalLoading || isProcessing;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={variant}
            size={showText ? "default" : "icon"}
            onClick={handleClick}
            disabled={isDisabled}
            className={`relative overflow-hidden transition-all duration-200 ${
              bookmarked 
                ? 'border-rose-200 bg-rose-50 text-rose-600 hover:bg-rose-100 hover:text-rose-700 dark:bg-rose-950/30 dark:border-rose-900 dark:text-rose-400' 
                : 'text-muted-foreground hover:text-foreground'
            } ${className}`}
          >
            <motion.div
              initial={false}
              animate={{ scale: bookmarked && !isProcessing ? [1, 1.15, 1] : 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2"
            >
              {isProcessing ? (
                <Loader2 className="w-4 h-4 animate-spin text-current" />
              ) : (
                <Heart 
                  className={`w-4 h-4 transition-colors duration-200 ${bookmarked ? 'fill-current text-rose-600 dark:text-rose-400' : ''}`} 
                />
              )}
              {showText && (
                <span className="font-medium text-sm">
                  {bookmarked ? 'Bookmarked ✓' : 'Bookmark'}
                </span>
              )}
            </motion.div>
          </Button>
        </TooltipTrigger>
        <TooltipContent className="font-medium">
          <p>{bookmarked ? 'Bookmarked' : 'Add to bookmarks'}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
