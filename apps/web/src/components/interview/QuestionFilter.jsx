
import React from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

export default function QuestionFilter({
  careers,
  selectedCareerSlug,
  setSelectedCareerSlug,
  difficultyFilter,
  setDifficultyFilter,
  levelFilter,
  setLevelFilter,
  searchQuery,
  setSearchQuery,
  totalFilteredCount,
  totalQuestions
}) {
  
  const difficulties = ['All', 'Simple', 'Medium', 'Hard'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const clearFilters = () => {
    setDifficultyFilter('All');
    setLevelFilter('All');
    setSearchQuery('');
  };

  let activeFiltersCount = 0;
  if (difficultyFilter !== 'All') activeFiltersCount++;
  if (levelFilter !== 'All') activeFiltersCount++;
  if (searchQuery.trim() !== '') activeFiltersCount++;

  return (
    <div className="bg-card rounded-2xl border border-border shadow-sm p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Main Select & Search */}
        <div className="flex-1 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Select Career Path</label>
              <Select value={selectedCareerSlug} onValueChange={setSelectedCareerSlug}>
                <SelectTrigger className="w-full bg-background">
                  <SelectValue placeholder="Select career..." />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  {careers.map(career => (
                    <SelectItem key={career.slug} value={career.slug}>
                      {career.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Search Questions</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Keywords, topics, technologies..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 bg-background"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-3">
              <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Difficulty</label>
              <div className="flex flex-wrap gap-2">
                {difficulties.map(diff => (
                  <button
                    key={diff}
                    onClick={() => setDifficultyFilter(diff)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      difficultyFilter === diff 
                        ? 'bg-primary text-primary-foreground shadow-sm ring-2 ring-primary ring-offset-2 ring-offset-background' 
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Experience Level</label>
              <div className="flex flex-wrap gap-2">
                {levels.map(lvl => (
                  <button
                    key={lvl}
                    onClick={() => setLevelFilter(lvl)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      levelFilter === lvl 
                        ? 'bg-primary text-primary-foreground shadow-sm ring-2 ring-primary ring-offset-2 ring-offset-background' 
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Filter Footer */}
      <div className="mt-6 pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="px-3 py-1.5 text-sm font-medium bg-muted">
            <Filter className="w-4 h-4 mr-2 text-primary" />
            Showing {totalFilteredCount} of {totalQuestions}
          </Badge>
          {activeFiltersCount > 0 && (
            <span className="text-sm text-muted-foreground">
              ({activeFiltersCount} active filter{activeFiltersCount !== 1 ? 's' : ''})
            </span>
          )}
        </div>
        
        {activeFiltersCount > 0 && (
          <Button variant="ghost" size="sm" onClick={clearFilters} className="text-muted-foreground hover:text-foreground">
            <X className="w-4 h-4 mr-2" />
            Clear Filters
          </Button>
        )}
      </div>
    </div>
  );
}
