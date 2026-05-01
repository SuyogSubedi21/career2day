
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const getDifficultyColor = (difficulty) => {
  switch (difficulty.toLowerCase()) {
    case 'beginner':
      return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20';
    case 'intermediate':
      return 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20';
    case 'advanced':
      return 'bg-destructive/10 text-destructive border-destructive/20';
    default:
      return 'bg-muted text-muted-foreground border-border';
  }
};

export default function CareerSkillsGrid({ skills }) {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', ...new Set(skills.map(s => s.category))];
  
  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <Button
            key={category}
            variant={activeCategory === category ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveCategory(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill, idx) => (
          <Card key={idx} className="shadow-sm border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-bold text-card-foreground">{skill.name}</h4>
                <Badge variant="outline" className={getDifficultyColor(skill.difficulty)}>
                  {skill.difficulty}
                </Badge>
              </div>
              <Badge variant="secondary" className="mb-3 text-xs font-medium">
                {skill.category}
              </Badge>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
