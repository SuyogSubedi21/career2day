
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const HeroSection = ({ headline, subheadline, primaryCta, secondaryCta, bgImage }) => {
  return (
    <section className="relative min-h-[90dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Career professionals collaborating" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/80 dark:bg-background/90 backdrop-blur-[2px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl glass-effect p-8 md:p-12 rounded-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
          >
            {headline}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-foreground/80 mb-8 max-w-[60ch] leading-relaxed"
          >
            {subheadline}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" className="text-base rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to={primaryCta.link}>{primaryCta.text}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base rounded-full px-8 bg-background/50 hover:bg-background/80 border-2">
              <Link to={secondaryCta.link}>{secondaryCta.text}</Link>
            </Button>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-soft-light" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
    </section>
  );
};
