
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Check, Search, Sparkles } from 'lucide-react';
import { getSuggestions } from '@/lib/careerSkillsSuggestions.js';

const SkillsSuggestions = ({ careerPath, currentSkills, onAddSkill }) => {
  const [suggestions, setSuggestions] = useState([]);
  
  useEffect(() => {
    // Determine context based on careerPath string if provided, or default generic
    let context = 'Software Engineer';
    if (careerPath && careerPath.toLowerCase().includes('data')) context = 'Data Analyst';
    if (careerPath && careerPath.toLowerCase().includes('devops')) context = 'DevOps Engineer';
    
    setSuggestions(getSuggestions(context));
  }, [careerPath]);

  const unusedSuggestions = suggestions.filter(s => !currentSkills.includes(s)).slice(0, 10);

  if (unusedSuggestions.length === 0) return null;

  return (
    <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl space-y-3 mt-4">
      <div className="flex items-center gap-2 text-sm font-semibold text-primary">
        <Sparkles className="w-4 h-4" /> Recommended Skills
      </div>
      <div className="flex flex-wrap gap-2">
        {unusedSuggestions.map(skill => (
          <button
            key={skill}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onAddSkill(skill);
            }}
            className="inline-flex items-center gap-1 text-xs px-3 py-1.5 bg-background border hover:bg-primary/10 hover:border-primary/30 transition-colors rounded-full text-foreground"
          >
            <Plus className="w-3 h-3 text-muted-foreground" /> {skill}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SkillsSuggestions;
