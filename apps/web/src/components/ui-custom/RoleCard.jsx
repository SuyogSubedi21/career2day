
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Target, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const RoleCard = ({ roleName, counts, progress, index = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="glass-effect rounded-2xl p-6 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-bold mb-1 line-clamp-1">{roleName}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BookOpen className="w-4 h-4" />
            <span>{counts.total} Questions</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-4 mb-6 flex-grow">
        <div>
          <p className="text-sm font-medium mb-2 text-foreground/80">Difficulty Distribution</p>
          <div className="flex gap-2">
            <span className="badge-simple text-xs px-2 py-1 rounded-md flex-1 text-center">
              Simple: {counts.simple}
            </span>
            <span className="badge-med text-xs px-2 py-1 rounded-md flex-1 text-center">
              Medium: {counts.medium}
            </span>
            <span className="badge-hard text-xs px-2 py-1 rounded-md flex-1 text-center">
              Hard: {counts.hard}
            </span>
          </div>
        </div>

        {progress !== undefined && (
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground flex items-center gap-1"><Target className="w-3 h-3"/> Accuracy</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>
      
      <Button asChild className="w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground group">
        <Link to={`/interview-prep/${encodeURIComponent(roleName)}`}>
          Start Practicing
          <Play className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </motion.div>
  );
};
