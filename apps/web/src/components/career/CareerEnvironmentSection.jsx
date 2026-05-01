
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Clock, Globe, Briefcase, BrainCircuit, Users } from 'lucide-react';

export default function CareerEnvironmentSection({ career }) {
  if (!career) return null;

  // Mock data based on career name length for deterministic but varied realistic data
  const hash = career.name ? career.name.length : 10;
  
  const stressLevel = (hash % 4) + 5; // 5 to 8
  const satisfactionLevel = (hash % 3) + 7; // 7 to 9
  const remotePcnt = (hash % 5) * 15 + 20; // 20% to 80%

  const dailyTasks = [
    "Collaborate with cross-functional teams to define project requirements.",
    "Execute core technical or strategic tasks specific to the domain.",
    "Participate in daily stand-ups, syncs, or status meetings.",
    "Review work, conduct testing, and ensure quality standards.",
    "Document processes, code, or strategies for internal knowledge base."
  ];

  const workEnvironment = [
    "Fast-paced and collaborative.",
    "Mix of independent focus time and team meetings.",
    "Continuous learning culture."
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Column: Responsibilities */}
      <div className="lg:col-span-2 space-y-8">
        <div>
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-foreground">
            <Briefcase className="w-6 h-6 text-primary" /> Daily Responsibilities
          </h3>
          <Card className="bg-card border-none shadow-md">
            <CardContent className="p-6">
              <ul className="space-y-4">
                {dailyTasks.map((task, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">{task}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-foreground">
            <Users className="w-6 h-6 text-primary" /> Team Structure & Environment
          </h3>
          <Card className="bg-card border-none shadow-md">
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Professionals in this role typically work within structured, cross-functional squads. You'll interact closely with product managers, designers, and other specialists to deliver end-to-end solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                {workEnvironment.map((env, idx) => (
                  <span key={idx} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {env}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right Column: Work-Life Balance Metrics */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-foreground">
          <BrainCircuit className="w-6 h-6 text-primary" /> Work-Life Balance
        </h3>
        
        <Card className="bg-card border-none shadow-md">
          <CardContent className="p-6 space-y-6">
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold flex items-center gap-2 text-foreground"><Clock className="w-4 h-4 text-muted-foreground"/> Typical Hours</span>
                <span className="text-sm text-muted-foreground">40-45 hrs/week</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div className="w-[60%] h-full bg-primary rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold flex items-center gap-2 text-foreground"><Globe className="w-4 h-4 text-muted-foreground"/> Remote Availability</span>
                <span className="text-sm font-medium text-emerald-600">{remotePcnt}%</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${remotePcnt}%` }} />
              </div>
              <p className="text-xs text-muted-foreground mt-1 text-right">Industry average</p>
            </div>

            <div className="pt-4 border-t border-border">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">Stress Level</p>
                  <p className="text-xs text-muted-foreground">Scale 1-10</p>
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-amber-500 flex items-center justify-center text-lg font-bold text-amber-600">
                  {stressLevel}
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-semibold text-foreground">Job Satisfaction</p>
                  <p className="text-xs text-muted-foreground">Scale 1-10</p>
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-emerald-500 flex items-center justify-center text-lg font-bold text-emerald-600">
                  {satisfactionLevel}
                </div>
              </div>
            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}
