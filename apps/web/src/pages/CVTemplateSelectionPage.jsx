
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText, Crown, Sparkles, AlertCircle } from 'lucide-react';
import { getAllTemplates } from '@/data/cvTemplatesData.js';
import CVTemplatePreviewCard from '@/components/cv-builder/CVTemplatePreviewCard.jsx';
import { Button } from '@/components/ui/button';
import { useSubscription } from '@/hooks/useSubscription.js';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Link } from 'react-router-dom';

export default function CVTemplateSelectionPage() {
  const [filter, setFilter] = useState('All');
  const templates = getAllTemplates();
  const { isPremium, loading: subLoading } = useSubscription();

  const filteredTemplates = useMemo(() => {
    if (filter === 'All') return templates;
    return templates.filter(t => t.category === filter);
  }, [filter, templates]);

  return (
    <div className="min-h-[100dvh] bg-background pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Select CV Template | Career2Day</title>
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-6">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-balance text-foreground">
            Stand Out With <span className="text-primary">Stunning Templates</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Choose from our collection of 24 meticulously crafted layouts. Optimized for ATS and designed by industry professionals to get you hired.
          </p>
        </motion.div>

        {!subLoading && !isPremium && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <Alert className="bg-amber-500/10 border-amber-500/50 text-amber-800 dark:text-amber-200">
              <Crown className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <AlertDescription className="ml-2 font-medium flex items-center justify-between flex-wrap gap-4">
                <span>Unlock all 20 Premium templates and advanced download formats.</span>
                <Button asChild size="sm" className="bg-amber-500 hover:bg-amber-600 text-white border-none shrink-0">
                  <Link to="/pricing">Upgrade Now</Link>
                </Button>
              </AlertDescription>
            </Alert>
          </motion.div>
        )}

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center flex-wrap gap-3 mb-12"
        >
          <Button 
            variant={filter === 'All' ? 'default' : 'secondary'} 
            onClick={() => setFilter('All')} 
            className="rounded-full px-6 font-semibold"
          >
            All Templates
          </Button>
          <Button 
            variant={filter === 'Free' ? 'default' : 'secondary'} 
            onClick={() => setFilter('Free')} 
            className="rounded-full px-6 font-semibold"
          >
            <Sparkles className="w-4 h-4 mr-2" /> Free Only
          </Button>
          <Button 
            variant={filter === 'Premium' ? 'default' : 'secondary'} 
            onClick={() => setFilter('Premium')} 
            className={`rounded-full px-6 font-semibold ${filter === 'Premium' ? 'bg-amber-500 text-white hover:bg-amber-600' : 'bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300'}`}
          >
            <Crown className="w-4 h-4 mr-2" /> Premium
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.5) }}
            >
              <CVTemplatePreviewCard template={template} isPremiumUser={isPremium} />
            </motion.div>
          ))}
        </div>
        
        {filteredTemplates.length === 0 && (
          <div className="text-center py-20 flex flex-col items-center">
            <AlertCircle className="w-12 h-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground font-medium text-lg">No templates found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
