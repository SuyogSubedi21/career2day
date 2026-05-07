import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers3, Search } from 'lucide-react';
import SEOHead from '@/components/SEOHead.jsx';
import { allCareerSummaries, getFeaturedPlatformCareers } from '@/data/careerPlatformData.js';
import { getLocalizedSalaryMarkets } from '@/lib/utils/localSalaryMarkets.js';

export default function CareersListingPage() {
  const [search, setSearch] = useState('');
  const complete = getFeaturedPlatformCareers();
  const queued = allCareerSummaries.filter((career) => career.status !== 'complete');
  const query = search.trim().toLowerCase();
  const completeWithSalaries = useMemo(() => complete.map((career) => ({
    ...career,
    salaryMarkets: getCareerSalaryMarkets(career)
  })), [complete]);
  const visibleComplete = completeWithSalaries.filter((career) => matchesCareerSearch(career, query));
  const visibleQueued = queued.filter((career) => matchesCareerSearch(career, query));

  return (
    <div className="min-h-screen bg-[#f8fafc] px-4 py-28 text-slate-950 dark:bg-[#080b12] dark:text-white sm:px-6 lg:px-8">
      <SEOHead title="Career Roadmaps | Career2Day" description="Browse the 50-career Career2Day catalog with complete roadmaps, interview prep, quiz practice, projects, and CV guidance added in reviewed batches." />
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-bold text-slate-500 dark:border-white/10 dark:bg-white/10">
              <Layers3 className="h-4 w-4 text-sky-500" /> Career catalog
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">Choose your career path</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">Browse the exact 50-career catalog. Complete tracks are fully connected to roadmap progress, interview practice, quiz scoring, project review, and CV suggestions.</p>
          </div>
          <label className="relative w-full max-w-md">
            <Search className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search careers, skills, countries, currency..."
              className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-10 pr-3 text-sm font-semibold outline-none transition focus:border-slate-400 dark:border-white/10 dark:bg-white/10"
            />
          </label>
        </div>

        <div className="mb-10 grid gap-5 md:grid-cols-2">
          {visibleComplete.map((career) => (
            <Link key={career.slug} to={`/careers/${career.slug}`} className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/10">
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
              <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {career.salaryMarkets.map((market) => (
                  <div key={market.country} className="rounded-md bg-slate-50 px-3 py-2 dark:bg-white/5">
                    <div className="text-[11px] font-bold uppercase text-slate-500">{market.country}</div>
                    <div className="mt-1 text-xs font-extrabold text-slate-700 dark:text-slate-200">{market.midLabel}</div>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/10">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-extrabold"><Search className="h-5 w-5 text-sky-500" /> Expansion queue: {visibleQueued.length} additional careers</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {visibleQueued.map((career) => (
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

function matchesCareerSearch(career, query) {
  if (!query) return true;
  const fields = [
    career.name,
    career.category,
    career.tagline,
    ...(career.requiredSkills || []),
    ...(career.salaryMarkets || []).flatMap((market) => [market.country, market.currency, market.midLabel, market.rangeLabel])
  ];

  return fields.some((field) => String(field || '').toLowerCase().includes(query));
}

function getCareerSalaryMarkets(career) {
  const salary = career.analytics?.salary || [];
  return getLocalizedSalaryMarkets({
    entryUsd: (salary[0]?.[1] || salary[1]?.[1] || 0) * 1000,
    midUsd: (salary[1]?.[1] || salary[0]?.[1] || 0) * 1000,
    seniorUsd: (salary[2]?.[1] || salary[1]?.[1] || 0) * 1000
  });
}
