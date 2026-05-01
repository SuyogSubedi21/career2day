
import React, { useState } from 'react';
import { Search, Code2, Users, Wrench, AlertCircle, Zap } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { motion, AnimatePresence } from 'framer-motion';

export default function CareerSkillsSection({ skills = [], loading = false, error = null }) {
  const [searchQuery, setSearchQuery] = useState('');

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map(i => <Skeleton key={i} className="h-40 w-full rounded-2xl" />)}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 bg-destructive/5 rounded-2xl border border-destructive/20">
        <AlertCircle className="w-10 h-10 text-destructive mx-auto mb-4" />
        <h3 className="text-lg font-bold text-foreground mb-2">Failed to load skills</h3>
        <p className="text-muted-foreground">{error}</p>
      </div>
    );
  }

  if (!skills || skills.length === 0) {
    return (
      <div className="text-center py-16 bg-card rounded-2xl border border-border shadow-sm">
        <Zap className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
        <h3 className="text-xl font-bold text-foreground mb-2">No skills found</h3>
        <p className="text-muted-foreground">We don't have specific skills listed for this career yet.</p>
      </div>
    );
  }

  const filteredSkills = skills.filter(skill => {
    if (!searchQuery) return true;
    const text = skill.skillName || '';
    const desc = skill.description || '';
    const cat = skill.category || '';
    const query = searchQuery.toLowerCase();
    return text.toLowerCase().includes(query) || desc.toLowerCase().includes(query) || cat.toLowerCase().includes(query);
  });

  const getCategoryIcon = (category) => {
    const cat = (category || '').toLowerCase();
    if (cat.includes('soft') || cat.includes('people') || cat.includes('leadership')) return Users;
    if (cat.includes('tool') || cat.includes('software') || cat.includes('platform')) return Wrench;
    return Code2;
  };

  const getDifficultyColor = (difficulty) => {
    const diff = (difficulty || '').toLowerCase();
    if (diff === 'advanced' || diff === 'hard') return 'border-rose-500/30 text-rose-600 bg-rose-500/10';
    if (diff === 'intermediate' || diff === 'medium') return 'border-amber-500/30 text-amber-600 bg-amber-500/10';
    return 'border-emerald-500/30 text-emerald-600 bg-emerald-500/10';
  };

  return (
    <div className="space-y-8">
      <div className="max-w-md relative group">
        <div className="absolute inset-0 bg-primary/10 rounded-xl blur-lg transition-all group-hover:bg-primary/20 opacity-50" />
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input 
            type="text" 
            placeholder="Search skills by name or category..." 
            className="pl-12 h-14 rounded-xl bg-card border-border focus-visible:ring-2 focus-visible:ring-primary shadow-sm text-base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {filteredSkills.length === 0 ? (
        <div className="text-center py-12 bg-card rounded-2xl border border-border">
          <p className="text-muted-foreground">No skills match your search query.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const Icon = getCategoryIcon(skill.category);
              return (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="border-border shadow-sm bg-card hover:shadow-md transition-shadow h-full flex flex-col">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <CardTitle className="text-xl font-bold text-foreground leading-tight">
                            {skill.skillName}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                      {skill.description && (
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                        {skill.description}
                      </p>
                      )}
                      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                        <Badge variant="outline" className="bg-muted/50 text-foreground">
                          {skill.category || 'General'}
                        </Badge>
                        <Badge variant="outline" className={`uppercase tracking-wider text-[10px] font-bold ${getDifficultyColor(skill.difficulty)}`}>
                          {skill.difficulty || 'Beginner'}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
