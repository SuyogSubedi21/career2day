
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Briefcase, Award, BrainCircuit, Target, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PracticeQuizSection from './PracticeQuizSection.jsx';

export default function CareerRoadmapSection({ levels, careerSlug, careerName }) {
  if (!levels || levels.length === 0) return null;

  const getLevelColorClass = (level) => {
    switch (level?.toLowerCase()) {
      case 'beginner': return 'border-l-[hsl(var(--level-beginner))]';
      case 'intermediate': return 'border-l-[hsl(var(--level-intermediate))]';
      case 'advanced': return 'border-l-[hsl(var(--level-advanced))]';
      default: return 'border-l-primary';
    }
  };

  const safeParse = (data) => {
    if (!data) return [];
    if (typeof data === 'string') {
      try { return JSON.parse(data); } catch (e) { return []; }
    }
    return Array.isArray(data) ? data : [];
  };

  return (
    <div className="space-y-12">
      {/* Prominent Interview Preparation Section */}
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-10 shadow-sm relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
          <div className="flex-1 max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3 text-foreground tracking-tight">
              <div className="p-2.5 bg-primary/10 rounded-xl">
                <BrainCircuit className="w-7 h-7 text-primary" />
              </div>
              {careerName ? `${careerName} Interview Prep` : 'Interview Preparation'}
            </h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Ready to test your knowledge and prepare for the real thing? 
              <strong className="text-foreground font-semibold"> Practice Mode</strong> provides questions with detailed expert explanations to help you learn, while 
              <strong className="text-foreground font-semibold"> Quiz Mode</strong> simulates a timed interview environment with scoring and performance results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto text-base h-14 px-8 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                <Link to="/interview-prep">
                  Practice Interview Questions <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base h-14 px-8 bg-background hover:bg-muted border-primary/20 hover:border-primary/50 transition-all hover:-translate-y-0.5">
                <Link to="/interview-prep?mode=quiz">
                  Take Interview Quiz <Target className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap Levels */}
      {levels.map((levelData, index) => {
        const skills = safeParse(levelData.skills);
        const projects = safeParse(levelData.projects);
        const certs = safeParse(levelData.certifications);

        return (
          <div key={index} className={`glass-card rounded-2xl p-8 border-l-4 ${getLevelColorClass(levelData.level)}`}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h3 className="text-3xl font-bold mb-2">{levelData.level} Level</h3>
                <p className="text-muted-foreground font-medium">Timeline: {levelData.timeline || '6-12 months'}</p>
              </div>
              <div className="bg-muted px-4 py-2 rounded-lg font-bold text-lg">
                {levelData.salary || '$60k - $80k'}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Skills */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" /> What to Learn
                </h4>
                <div className="space-y-3">
                  {skills.map((skill, i) => (
                    <div key={i} className="bg-card p-4 rounded-xl border border-border/50 shadow-sm">
                      <h5 className="font-bold">{skill.name || skill.skill || skill}</h5>
                      {skill.description && <p className="text-sm text-muted-foreground mt-1">{skill.description}</p>}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                {/* Projects */}
                <div className="space-y-4">
                  <h4 className="text-lg font-bold flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" /> Projects to Build
                  </h4>
                  <div className="space-y-3">
                    {projects.map((proj, i) => (
                      <div key={i} className="bg-card p-4 rounded-xl border border-border/50 shadow-sm">
                        <h5 className="font-bold">{proj.name || proj.title || proj}</h5>
                        {proj.description && <p className="text-sm text-muted-foreground mt-1">{proj.description}</p>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="space-y-4">
                  <h4 className="text-lg font-bold flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" /> Certifications
                  </h4>
                  <div className="space-y-3">
                    {certs.map((cert, i) => (
                      <div key={i} className="bg-card p-4 rounded-xl border border-border/50 shadow-sm">
                        <h5 className="font-bold">{cert.name || cert}</h5>
                        {cert.issuer && <p className="text-sm text-muted-foreground mt-1">Issuer: {cert.issuer}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <PracticeQuizSection 
              level={levelData.level} 
              careerSlug={careerSlug} 
              bestScore={0} 
              attempts={0} 
            />
          </div>
        );
      })}
    </div>
  );
}
