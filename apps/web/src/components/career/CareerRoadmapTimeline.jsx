
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { BookOpen, CheckCircle2, Rocket, Target, GraduationCap, MapPin, Wrench, AlertCircle, Map } from 'lucide-react';

export default function CareerRoadmapTimeline({ roadmaps = [], loading = false, error = null }) {
  const phaseColors = [
    { border: 'border-blue-500', bg: 'bg-blue-500', text: 'text-blue-600', lightBg: 'bg-blue-500/10', icon: BookOpen },
    { border: 'border-emerald-500', bg: 'bg-emerald-500', text: 'text-emerald-600', lightBg: 'bg-emerald-500/10', icon: Wrench },
    { border: 'border-amber-500', bg: 'bg-amber-500', text: 'text-amber-600', lightBg: 'bg-amber-500/10', icon: Rocket },
    { border: 'border-purple-500', bg: 'bg-purple-500', text: 'text-purple-600', lightBg: 'bg-purple-500/10', icon: GraduationCap },
  ];

  const parseJSON = (data) => {
    if (!data) return [];
    if (Array.isArray(data)) return data;
    if (typeof data === 'string') {
      try {
        const parsed = JSON.parse(data);
        return Array.isArray(parsed) ? parsed : [parsed];
      } catch (e) {
        return [data];
      }
    }
    return [];
  };

  if (loading) {
    return (
      <div className="py-8 space-y-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex gap-6">
            <Skeleton className="w-12 h-12 rounded-full shrink-0" />
            <div className="space-y-3 w-full">
              <Skeleton className="h-6 w-1/3" />
              <Skeleton className="h-32 w-full rounded-xl" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 bg-destructive/5 rounded-2xl border border-destructive/20">
        <AlertCircle className="w-10 h-10 text-destructive mx-auto mb-4" />
        <h3 className="text-lg font-bold text-foreground mb-2">Failed to load roadmap</h3>
        <p className="text-muted-foreground">{error}</p>
      </div>
    );
  }

  if (!roadmaps || roadmaps.length === 0) {
    return (
      <div className="text-center py-16 bg-card rounded-2xl border border-border shadow-sm">
        <Map className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
        <h3 className="text-xl font-bold text-foreground mb-2">No roadmap found</h3>
        <p className="text-muted-foreground">We are still building the progression roadmap for this career.</p>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="relative ml-6 md:ml-8 border-l-2 border-border pb-8">
        {roadmaps.map((stage, idx) => {
          const colorSet = phaseColors[idx % phaseColors.length];
          const PhaseIcon = colorSet.icon;
          const skillsList = parseJSON(stage.skills);
          const resourcesList = parseJSON(stage.resources);

          return (
            <motion.div
              key={stage.id || idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="mb-12 relative pl-8 md:pl-12 last:mb-0 group"
            >
              {/* Timeline Node */}
              <div className={`absolute -left-[25px] top-0 w-12 h-12 rounded-full border-4 border-background ${colorSet.bg} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 z-10`}>
                <PhaseIcon className="w-5 h-5 text-white" />
              </div>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-card overflow-hidden">
                <div className={`h-2 w-full ${colorSet.bg}`} />
                <CardContent className="p-6 md:p-8">
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <Badge variant="outline" className={`mb-3 ${colorSet.text} ${colorSet.border} ${colorSet.lightBg} border-opacity-50 font-semibold px-3 py-1 uppercase tracking-wider`}>
                        {stage.duration || `Phase ${stage.phase || idx + 1}`}
                      </Badge>
                      <h3 className="text-2xl font-extrabold text-foreground">
                        {stage.phaseTitle || `Phase ${stage.phase || idx + 1}`}
                      </h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Skills & Concepts */}
                    {skillsList.length > 0 && (
                      <div>
                        <h4 className="flex items-center gap-2 font-bold text-foreground mb-4">
                          <Target className={`w-5 h-5 ${colorSet.text}`} /> What to Learn
                        </h4>
                        <ul className="space-y-3">
                          {skillsList.map((skill, sIdx) => {
                            const skillText = typeof skill === 'string' ? skill : (skill.name || skill.title || JSON.stringify(skill));
                            return (
                              <li key={sIdx} className="flex items-start gap-3">
                                <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${colorSet.text}`} />
                                <span className="text-sm text-muted-foreground leading-relaxed">{skillText}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}

                    {/* Resources & Milestones */}
                    {resourcesList.length > 0 && (
                      <div>
                        <h4 className="flex items-center gap-2 font-bold text-foreground mb-4">
                          <MapPin className={`w-5 h-5 ${colorSet.text}`} /> Key Resources
                        </h4>
                        <ul className="space-y-3">
                          {resourcesList.map((resource, rIdx) => {
                            const resText = typeof resource === 'string' ? resource : (resource.name || resource.title || JSON.stringify(resource));
                            return (
                              <li key={rIdx} className="flex items-start gap-3 bg-muted/50 p-3 rounded-lg border border-border/50">
                                <span className="text-sm text-foreground font-medium leading-relaxed">{resText}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
