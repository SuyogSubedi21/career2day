import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers3, Search } from 'lucide-react';
import SEOHead from '@/components/SEOHead.jsx';
import { allCareerSummaries, getFeaturedPlatformCareers } from '@/data/careerPlatformData.js';

export default function CareersListingPage() {
  const complete = getFeaturedPlatformCareers();
  const queued = allCareerSummaries.filter((career) => career.status !== 'complete');

  return (
    <div className="min-h-screen bg-[#f8fafc] px-4 py-28 text-slate-950 dark:bg-[#080b12] dark:text-white sm:px-6 lg:px-8">
      <SEOHead title="Career Roadmaps | Career2Day" description="Browse the 50-career Career2Day catalog with complete roadmaps, interview prep, quiz practice, projects, and CV guidance added in reviewed batches." />
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-bold text-slate-500 dark:border-white/10 dark:bg-white/10">
            <Layers3 className="h-4 w-4 text-sky-500" /> Career catalog
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">Choose your career path</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">Browse the exact 50-career catalog. Complete tracks are fully connected to roadmap progress, interview practice, quiz scoring, project review, and CV suggestions.</p>
        </div>

        <div className="mb-10 grid gap-5 md:grid-cols-2">
          {complete.map((career) => (
            <Link key={career.slug} to={`/careers/${career.slug}`} className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/10">
              <div className={`mb-6 h-2 w-24 rounded-full bg-gradient-to-r ${career.accent}`} />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-emerald-500">Complete track</p>
                  <h2 className="mt-1 text-2xl font-extrabold">{career.name}</h2>
                </div>
                <ArrowRight className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-slate-950 dark:group-hover:text-white" />
              </div>
              <p className="mt-4 text-slate-600 dark:text-slate-300">{career.tagline}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {career.requiredSkills.slice(0, 6).map((skill) => <span key={skill} className="rounded-md bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 dark:bg-white/10 dark:text-slate-300">{skill}</span>)}
              </div>
            </Link>
          ))}
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/10">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-extrabold"><Search className="h-5 w-5 text-sky-500" /> Expansion queue: {queued.length} additional careers</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {queued.map((career) => (
              <div key={career.slug} className="rounded-lg bg-slate-50 p-4 dark:bg-white/5">
                <div className="font-extrabold">{career.name}</div>
                <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">{career.category}</div>
                <div className="mt-3 inline-flex rounded-md bg-white px-3 py-1 text-xs font-bold text-slate-500 dark:bg-white/10">Unlocked data slot</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
