
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, CheckCircle2, BookOpen, Award, Briefcase } from 'lucide-react';

export const RoadmapLevel = ({ title, timeline, data, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  if (!data) return null;

  return (
    <div className="glass-effect rounded-2xl overflow-hidden mb-4 border border-border/50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between bg-background/50 hover:bg-muted/50 transition-colors text-left"
      >
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{timeline}</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground/70">
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 border-t border-border/50 mt-4 space-y-6">
              
              {/* Skills */}
              {data.skills && data.skills.length > 0 && (
                <div>
                  <h4 className="font-semibold flex items-center gap-2 mb-3 text-foreground/90">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> Key Skills to Master
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {data.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Projects */}
              {data.projects && data.projects.length > 0 && (
                <div>
                  <h4 className="font-semibold flex items-center gap-2 mb-3 text-foreground/90">
                    <Briefcase className="w-4 h-4 text-secondary" /> Recommended Projects
                  </h4>
                  <ul className="space-y-2">
                    {data.projects.map((project, i) => (
                      <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                        <span className="text-secondary mt-0.5">•</span> {project}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Certifications */}
              {data.certifications && data.certifications.length > 0 && (
                <div>
                  <h4 className="font-semibold flex items-center gap-2 mb-3 text-foreground/90">
                    <Award className="w-4 h-4 text-accent-foreground" /> Relevant Certifications
                  </h4>
                  <ul className="space-y-2">
                    {data.certifications.map((cert, i) => (
                      <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                        <span className="text-accent-foreground mt-0.5">•</span> {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Resources */}
              {data.resources && data.resources.length > 0 && (
                <div>
                  <h4 className="font-semibold flex items-center gap-2 mb-3 text-foreground/90">
                    <BookOpen className="w-4 h-4 text-muted-foreground" /> Learning Resources
                  </h4>
                  <ul className="space-y-2">
                    {data.resources.map((resource, i) => (
                      <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                        <span className="text-muted-foreground mt-0.5">•</span> {resource}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Salary Range */}
              {data.salaryRange && (
                <div className="p-4 bg-muted/50 rounded-xl flex justify-between items-center">
                  <span className="font-medium text-sm">Expected Salary Range</span>
                  <span className="font-bold text-primary">{data.salaryRange}</span>
                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
