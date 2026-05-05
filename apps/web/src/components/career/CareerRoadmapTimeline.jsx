import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertCircle, ArrowRight, BriefcaseBusiness, CheckCircle2, Clock, FileText, FolderKanban, Map, Target, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { getRoleKit } from '@/data/connectedCareerData.js';

const defaultPhaseNames = ['Basics', 'Intermediate', 'Advanced', 'Job-ready'];

const parseList = (data) => {
  if (!data) return [];
  if (Array.isArray(data)) return data.map((item) => (typeof item === 'string' ? item : item.name || item.title || item.skillName || String(item))).filter(Boolean);
  if (typeof data === 'string') {
    try {
      const parsed = JSON.parse(data);
      return parseList(parsed);
    } catch {
      return data.split(/\n|,/).map((item) => item.trim()).filter(Boolean);
    }
  }
  return [];
};

const buildFallbackPhase = (stage, index) => {
  const skills = parseList(stage.skills || stage.topics);
  const tools = parseList(stage.tools || stage.resources).slice(0, 4);
  const phaseName = stage.phaseTitle || defaultPhaseNames[index] || `Phase ${index + 1}`;

  return {
    title: phaseName.replace(/^Phase\s*\d+:\s*/i, ''),
    weeks: stage.duration || `${index * 4 + 1}-${(index + 1) * 4} weeks`,
    skills,
    tools: tools.length ? tools : ['Guided lessons', 'Portfolio workspace', 'Career2Day tracker'],
    project: stage.project || stage.miniProject || `Complete a portfolio task using ${skills.slice(0, 2).join(' and ') || 'the phase skills'}.`,
    outcome: stage.outcome || 'You can show a concrete result from this phase in your portfolio.',
  };
};

export default function CareerRoadmapTimeline({
  roadmaps = [],
  loading = false,
  error = null,
  careerSlug,
  careerName
}) {
  const roleKit = getRoleKit(careerSlug || careerName);
  const storageKey = `career2day-roadmap-${careerSlug || roleKit?.slug || 'general'}`;

  const phases = useMemo(() => {
    if (roleKit?.phases?.length) return roleKit.phases;
    const mapped = (roadmaps || []).map(buildFallbackPhase);
    if (mapped.length >= 4) return mapped.slice(0, 4);
    return mapped;
  }, [roadmaps, roleKit]);

  const allTaskIds = useMemo(() => phases.flatMap((phase, phaseIndex) => [
    `${phaseIndex}-skills`,
    `${phaseIndex}-tools`,
    `${phaseIndex}-project`,
    `${phaseIndex}-outcome`
  ]), [phases]);

  const [checked, setChecked] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(storageKey) || '{}');
    } catch {
      return {};
    }
  });

  const completedCount = allTaskIds.filter((id) => checked[id]).length;
  const progress = allTaskIds.length ? Math.round((completedCount / allTaskIds.length) * 100) : 0;
  const timelineWeeks = roleKit?.timelineWeeks || Math.max(phases.length * 4, 12);
  const cvRole = roleKit?.slug || careerSlug || '';

  const toggleTask = (id) => {
    setChecked((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      localStorage.setItem(storageKey, JSON.stringify(next));
      return next;
    });
  };

  if (loading) {
    return (
      <div className="py-8 space-y-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex gap-6">
            <Skeleton className="h-12 w-12 shrink-0 rounded-full" />
            <div className="w-full space-y-3">
              <Skeleton className="h-6 w-1/3" />
              <Skeleton className="h-40 w-full rounded-2xl" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-destructive/20 bg-destructive/5 py-12 text-center">
        <AlertCircle className="mx-auto mb-4 h-10 w-10 text-destructive" />
        <h3 className="mb-2 text-lg font-bold text-foreground">Failed to load roadmap</h3>
        <p className="text-muted-foreground">{error}</p>
      </div>
    );
  }

  if (!phases.length) {
    return (
      <div className="rounded-2xl border border-border bg-card py-16 text-center shadow-sm">
        <Map className="mx-auto mb-4 h-12 w-12 text-muted-foreground opacity-50" />
        <h3 className="mb-2 text-xl font-bold text-foreground">No roadmap found</h3>
        <p className="text-muted-foreground">We are still building the progression roadmap for this career.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-sm backdrop-blur-2xl dark:border-white/10 dark:bg-white/10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">Your path progress</p>
            <h3 className="mt-1 text-2xl font-extrabold text-foreground">{careerName || roleKit?.name || 'Career'} roadmap</h3>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="rounded-2xl bg-muted px-4 py-3">
              <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                <Clock className="h-4 w-4 text-sky-500" />
                {timelineWeeks} weeks estimated
              </div>
            </div>
            <Button asChild className="h-12 rounded-2xl font-bold">
              <Link to={`/cv-builder?template=ModernClean&role=${cvRole}&careerSlug=${cvRole}`}>
                Build CV for this Role <FileText className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between text-sm font-bold">
            <span>{progress}% complete</span>
            <span className="text-muted-foreground">{completedCount}/{allTaskIds.length} checkpoints</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-muted">
            <div className="h-full rounded-full bg-gradient-to-r from-sky-500 via-emerald-500 to-amber-500 transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      <div className="relative ml-5 border-l border-slate-200 pb-8 dark:border-white/10 md:ml-7">
        {phases.map((phase, index) => {
          const taskIds = {
            skills: `${index}-skills`,
            tools: `${index}-tools`,
            project: `${index}-project`,
            outcome: `${index}-outcome`
          };
          const phaseComplete = Object.values(taskIds).every((id) => checked[id]);

          return (
            <motion.div
              key={`${phase.title}-${index}`}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative mb-7 pl-8 md:pl-12"
            >
              <button
                type="button"
                onClick={() => Object.values(taskIds).forEach((id) => {
                  if (!phaseComplete && !checked[id]) toggleTask(id);
                })}
                className={`absolute -left-[22px] top-1 flex h-11 w-11 items-center justify-center rounded-full border-4 border-background shadow-sm transition-all ${phaseComplete ? 'bg-emerald-500 text-white' : 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'}`}
                aria-label={`Mark ${phase.title} phase`}
              >
                {phaseComplete ? <CheckCircle2 className="h-5 w-5" /> : index + 1}
              </button>

              <Card className="overflow-hidden rounded-3xl border-white/70 bg-white/85 shadow-sm backdrop-blur-2xl transition-all hover:-translate-y-0.5 hover:shadow-xl dark:border-white/10 dark:bg-white/10">
                <CardContent className="p-6 md:p-8">
                  <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="mb-2 inline-flex rounded-full bg-muted px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                        Phase {index + 1}: {defaultPhaseNames[index] || phase.title}
                      </div>
                      <h3 className="text-2xl font-extrabold text-foreground">{phase.title}</h3>
                    </div>
                    <div className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-sm font-bold text-muted-foreground">
                      <Clock className="mr-2 h-4 w-4" /> {phase.weeks}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <ChecklistBlock
                      id={taskIds.skills}
                      checked={checked[taskIds.skills]}
                      onToggle={toggleTask}
                      icon={Target}
                      title="Skills to learn"
                      items={phase.skills}
                    />
                    <ChecklistBlock
                      id={taskIds.tools}
                      checked={checked[taskIds.tools]}
                      onToggle={toggleTask}
                      icon={Wrench}
                      title="Tools to use"
                      items={phase.tools}
                    />
                    <ChecklistBlock
                      id={taskIds.project}
                      checked={checked[taskIds.project]}
                      onToggle={toggleTask}
                      icon={FolderKanban}
                      title="Mini project"
                      items={[phase.project]}
                    />
                    <ChecklistBlock
                      id={taskIds.outcome}
                      checked={checked[taskIds.outcome]}
                      onToggle={toggleTask}
                      icon={BriefcaseBusiness}
                      title="Outcome"
                      items={[phase.outcome]}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="rounded-3xl border border-slate-900 bg-slate-950 p-6 text-white shadow-xl dark:border-white/10">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-extrabold">Turn roadmap progress into a targeted CV</h3>
            <p className="mt-2 text-slate-300">Your selected role will prefill skills, projects, summary, and ATS keywords in the builder.</p>
          </div>
          <Button asChild className="h-12 rounded-2xl bg-white font-bold text-slate-950 hover:bg-slate-100">
            <Link to={`/cv-builder?template=ModernClean&role=${cvRole}&careerSlug=${cvRole}`}>
              Build CV for this Role <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function ChecklistBlock({ id, checked, onToggle, icon: Icon, title, items }) {
  return (
    <div className={`rounded-2xl border p-4 transition-all ${checked ? 'border-emerald-300 bg-emerald-50 dark:border-emerald-500/30 dark:bg-emerald-500/10' : 'border-border bg-background/70'}`}>
      <div className="mb-3 flex items-center gap-3">
        <button
          type="button"
          onClick={() => onToggle(id)}
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors ${checked ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-border bg-card text-transparent'}`}
          aria-label={`Toggle ${title}`}
        >
          <CheckCircle2 className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2 font-extrabold text-foreground">
          <Icon className="h-4 w-4 text-sky-500" />
          {title}
        </div>
      </div>
      <div className="space-y-2 pl-10">
        {(items || []).map((item) => (
          <p key={item} className="text-sm leading-6 text-muted-foreground">{item}</p>
        ))}
      </div>
    </div>
  );
}
