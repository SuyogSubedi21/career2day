
import React from 'react';
import { Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

export default function FilterPanel({
  careersList = [],
  careerSlug,
  setCareerSlug,
  difficulty,
  setDifficulty,
  level,
  setLevel,
  clearAllFilters,
  totalResults
}) {
  
  const handleDifficultyToggle = (diff) => {
    setDifficulty(prev => 
      prev.includes(diff) ? prev.filter(d => d !== diff) : [...prev, diff]
    );
  };

  const handleLevelToggle = (lvl) => {
    setLevel(prev => 
      prev.includes(lvl) ? prev.filter(l => l !== lvl) : [...prev, lvl]
    );
  };

  const activeCount = (careerSlug && careerSlug !== 'all' ? 1 : 0) + difficulty.length + level.length;

  return (
    <div className="bg-card rounded-2xl border shadow-sm p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-foreground font-bold text-lg">
          <Filter className="w-5 h-5 text-primary" />
          Filters
          {activeCount > 0 && (
            <Badge variant="secondary" className="ml-2 bg-primary/10 text-primary hover:bg-primary/20">
              {activeCount}
            </Badge>
          )}
        </div>
        {activeCount > 0 && (
          <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-muted-foreground hover:text-foreground -mr-2">
            <X className="w-4 h-4 mr-1" /> Clear
          </Button>
        )}
      </div>

      <div className="space-y-6">
        {careersList.length > 0 && (
          <div className="space-y-3">
            <Label className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Career Path</Label>
            <Select value={careerSlug || 'all'} onValueChange={val => setCareerSlug(val === 'all' ? '' : val)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Careers" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Careers</SelectItem>
                {careersList.map(c => (
                  <SelectItem key={c.slug} value={c.slug}>{c.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <div className="space-y-3">
          <Label className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Difficulty</Label>
          <div className="space-y-2.5">
            {['Simple', 'Medium', 'Hard'].map(diff => (
              <div key={diff} className="flex items-center space-x-3">
                <Checkbox 
                  id={`diff-${diff}`} 
                  checked={difficulty.includes(diff)}
                  onCheckedChange={() => handleDifficultyToggle(diff)}
                />
                <Label htmlFor={`diff-${diff}`} className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                  {diff}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <Label className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Experience Level</Label>
          <div className="space-y-2.5">
            {['Beginner', 'Intermediate', 'Advanced'].map(lvl => (
              <div key={lvl} className="flex items-center space-x-3">
                <Checkbox 
                  id={`lvl-${lvl}`} 
                  checked={level.includes(lvl)}
                  onCheckedChange={() => handleLevelToggle(lvl)}
                />
                <Label htmlFor={`lvl-${lvl}`} className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                  {lvl}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {totalResults !== undefined && (
        <div className="mt-8 pt-4 border-t border-border">
          <p className="text-sm text-center text-muted-foreground">
            Showing <strong className="text-foreground">{totalResults}</strong> questions
          </p>
        </div>
      )}
    </div>
  );
}
