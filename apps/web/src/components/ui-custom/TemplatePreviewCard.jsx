
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

export const TemplatePreviewCard = ({ title, description, badge, index = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-2xl overflow-hidden glass-effect border border-border/50 hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-[1/1.2] bg-muted/50 p-6 relative flex flex-col">
        {badge && (
          <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {badge}
          </span>
        )}
        <div className="flex-1 bg-card rounded-lg shadow-sm border p-4 flex flex-col gap-2">
          <div className="w-1/3 h-4 bg-muted rounded"></div>
          <div className="w-1/4 h-2 bg-muted rounded mb-4"></div>
          <div className="w-full h-2 bg-muted rounded"></div>
          <div className="w-full h-2 bg-muted rounded"></div>
          <div className="w-5/6 h-2 bg-muted rounded mb-4"></div>
          <div className="w-full h-12 bg-muted/50 rounded mt-auto"></div>
        </div>
      </div>
      
      <div className="p-6 border-t border-border/50 bg-background/50">
        <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
          <FileText className="w-4 h-4 text-primary" />
          {title}
        </h3>
        <p className="text-sm text-foreground/70 mb-4">{description}</p>
        <Link to="/resume-builder" className="text-sm font-medium text-primary hover:underline">
          Use Template &rarr;
        </Link>
      </div>
    </motion.div>
  );
};
