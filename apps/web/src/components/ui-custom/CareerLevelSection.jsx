
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, ChevronUp, BookOpen, Target, DollarSign, 
  CheckCircle2, Briefcase, Award, ExternalLink, PlayCircle 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SalaryChart } from '@/components/ui-custom/SalaryChart.jsx';

export function CareerLevelSection({ levelData, careerSlug, careerName }) {
  const [isExpanded, setIsExpanded] = useState(levelData.level === 'Beginner');

  const levelLower = levelData.level?.toLowerCase() || 'beginner';
  
  const getLevelColorClass = () => {
    switch (levelLower) {
      case 'beginner': return 'border-l-[hsl(var(--level-beginner))] text-[hsl(var(--level-beginner))]';
      case 'intermediate': return 'border-l-[hsl(var(--level-intermediate))] text-[hsl(var(--level-intermediate))]';
      case 'advanced': return 'border-l-[hsl(var(--level-advanced))] text-[hsl(var(--level-advanced))]';
      default: return 'border-l-primary text-primary';
    }
  };

  const getLevelBgClass = () => {
    switch (levelLower) {
      case 'beginner': return 'bg-[hsl(var(--level-beginner))]/10';
      case 'intermediate': return 'bg-[hsl(var(--level-intermediate))]/10';
      case 'advanced': return 'bg-[hsl(var(--level-advanced))]/10';
      default: return 'bg-primary/10';
    }
  };

  // Parse JSON fields safely
  const safeParse = (data) => {
    if (!data) return [];
    if (typeof data === 'string') {
      try { return JSON.parse(data); } catch (e) { return []; }
    }
    return Array.isArray(data) ? data : [];
  };

  const skills = safeParse(levelData.skills);
  const projects = safeParse(levelData.projects);
  const certifications = safeParse(levelData.certifications);
  const resources = safeParse(levelData.resources);

  // Mock state salary data if not provided directly in levelData
  const mockStateData = [
    { state: 'California', salary: levelLower === 'beginner' ? 85000 : levelLower === 'intermediate' ? 125000 : 165000 },
    { state: 'New York', salary: levelLower === 'beginner' ? 82000 : levelLower === 'intermediate' ? 120000 : 158000 },
    { state: 'Texas', salary: levelLower === 'beginner' ? 75000 : levelLower === 'intermediate' ? 110000 : 145000 },
    { state: 'Washington', salary: levelLower === 'beginner' ? 80000 : levelLower === 'intermediate' ? 118000 : 155000 },
    { state: 'Massachusetts', salary: levelLower === 'beginner' ? 78000 : levelLower === 'intermediate' ? 115000 : 150000 },
  ];

  return (
    <div className={`glass-card rounded-2xl overflow-hidden border-l-4 transition-all duration-300 ${isExpanded ? 'shadow-lg' : 'shadow-sm hover:shadow-md'} ${getLevelColorClass().split(' ')[0]}`}>
      {/* Header (Clickable) */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-5 flex items-center justify-between bg-card/50 hover:bg-muted/30 transition-colors text-left"
      >
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getLevelBgClass()}`}>
            <span className={`font-bold text-lg ${getLevelColorClass().split(' ')[1]}`}>
              {levelData.level?.charAt(0)}
            </span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">{levelData.level} Level</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Timeline: <span className="font-medium text-foreground">{levelData.timeline || '6-12 months'}</span> • 
              Expected Salary: <span className="font-medium text-foreground">{levelData.salary || '$60k - $80k'}</span>
            </p>
          </div>
        </div>
        <div className="shrink-0 ml-4 text-muted-foreground">
          {isExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
        </div>
      </button>

      {/* Expandable Content */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-2 border-t border-border/50 space-y-10">
              
              {/* LEARN SECTION */}
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <h4 className="text-lg font-bold">What You'll Learn</h4>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Skills */}
                  <div className="space-y-4">
                    <h5 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" /> Core Skills
                    </h5>
                    <ul className="space-y-3">
                      {skills.length > 0 ? skills.map((skill, idx) => (
                        <li key={idx} className="bg-muted/30 p-3 rounded-lg border border-border/50">
                          <span className="font-medium block text-foreground">{skill.skill || skill.name || skill}</span>
                          {skill.description && <span className="text-sm text-muted-foreground mt-1 block">{skill.description}</span>}
                        </li>
                      )) : (
                        <li className="text-sm text-muted-foreground">Skills data unavailable.</li>
                      )}
                    </ul>
                  </div>

                  <div className="space-y-8">
                    {/* Projects */}
                    <div className="space-y-4">
                      <h5 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                        <Briefcase className="w-4 h-4" /> Portfolio Projects
                      </h5>
                      <div className="space-y-3">
                        {projects.length > 0 ? projects.map((proj, idx) => (
                          <div key={idx} className="bg-card p-4 rounded-xl border border-border shadow-sm">
                            <h6 className="font-semibold text-foreground">{proj.name || proj.title || proj}</h6>
                            {proj.description && <p className="text-sm text-muted-foreground mt-1">{proj.description}</p>}
                          </div>
                        )) : (
                          <p className="text-sm text-muted-foreground">Project data unavailable.</p>
                        )}
                      </div>
                    </div>

                    {/* Certifications & Resources */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h5 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                          <Award className="w-4 h-4" /> Certifications
                        </h5>
                        <ul className="space-y-2">
                          {certifications.length > 0 ? certifications.map((cert, idx) => (
                            <li key={idx} className="text-sm flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                              <span className="text-foreground">{cert.name || cert}</span>
                            </li>
                          )) : (
                            <li className="text-sm text-muted-foreground">None required</li>
                          )}
                        </ul>
                      </div>
                      
                      <div className="space-y-3">
                        <h5 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" /> Resources
                        </h5>
                        <ul className="space-y-2">
                          {resources.length > 0 ? resources.map((res, idx) => (
                            <li key={idx}>
                              <a href={res.link || '#'} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
                                {res.name || res.title || res}
                              </a>
                            </li>
                          )) : (
                            <li className="text-sm text-muted-foreground">Resources unavailable</li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* PRACTICE SECTION */}
              <section className="bg-secondary/5 rounded-2xl p-6 border border-secondary/10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-5 h-5 text-secondary-foreground" />
                      <h4 className="text-lg font-bold text-secondary-foreground">Practice Questions for {levelData.level}</h4>
                    </div>
                    <p className="text-sm text-secondary-foreground/80 mb-4 max-w-xl">
                      Test your knowledge with 25 curated questions covering technical concepts, behavioral scenarios, and case studies specific to this level.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-background/50">Technical</Badge>
                      <Badge variant="outline" className="bg-background/50">Behavioral</Badge>
                      <Badge variant="outline" className="bg-background/50">Case Study</Badge>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <Button asChild size="lg" className="w-full md:w-auto shadow-md">
                      <Link to={`/interview-prep/${careerSlug}?level=${levelLower}`}>
                        <PlayCircle className="w-5 h-5 mr-2" />
                        Start Practice Quiz
                      </Link>
                    </Button>
                  </div>
                </div>
              </section>

              {/* SALARY SECTION */}
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <DollarSign className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h4 className="text-lg font-bold">Salary Insights at {levelData.level} Level</h4>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1 space-y-6">
                    <div className="bg-card p-5 rounded-xl border border-border shadow-sm">
                      <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-1">Expected Range</p>
                      <p className="text-3xl font-bold text-foreground">{levelData.salary || '$60k - $80k'}</p>
                      <p className="text-sm text-muted-foreground mt-2">Based on national averages for {careerName} roles requiring {levelData.timeline || '0-1 years'} experience.</p>
                    </div>
                    
                    <div className="space-y-3">
                      <h5 className="text-sm font-semibold text-foreground">Top Paying States</h5>
                      <div className="space-y-2">
                        {mockStateData.slice(0, 3).map((state, idx) => (
                          <div key={idx} className="flex justify-between items-center text-sm p-2 rounded-md hover:bg-muted/50 transition-colors">
                            <span className="font-medium">{state.state}</span>
                            <span className="text-muted-foreground">${(state.salary / 1000).toFixed(0)}k</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 bg-card p-5 rounded-xl border border-border shadow-sm flex flex-col">
                    <h5 className="text-sm font-semibold text-foreground mb-2">Salary by State Comparison</h5>
                    <div className="flex-1 min-h-[250px]">
                      <SalaryChart data={mockStateData} level={levelData.level} />
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
