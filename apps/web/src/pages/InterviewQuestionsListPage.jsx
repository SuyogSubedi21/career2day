import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight, BrainCircuit, Database, Layers3, Search, Sparkles, Target } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { getInterviewRoles } from '@/data/interview-prep/index.js';

export default function InterviewQuestionsListPage() {
  const [search, setSearch] = useState('');
  const roles = getInterviewRoles();
  const filteredRoles = useMemo(() => roles.filter((role) => (
    role.role.toLowerCase().includes(search.toLowerCase()) ||
    role.slug.toLowerCase().includes(search.toLowerCase())
  )), [roles, search]);

  return (
    <div className="min-h-[100dvh] bg-[#f7f8fb] text-slate-950 dark:bg-[#07090f] dark:text-white">
      <Helmet>
        <title>Interview Prep Content System | Career2Day</title>
        <meta name="description" content="Practice role-specific interview questions, answers, quizzes, and readiness scoring." />
      </Helmet>

      <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(16,185,129,0.12),transparent_26%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/75 px-4 py-2 text-sm font-bold text-slate-600 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:text-slate-300">
              <Sparkles className="h-4 w-4 text-sky-500" />
              100 questions per role, structured for database storage
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">Interview preparation content system</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Browse role-specific questions, reveal short and detailed answers, filter by difficulty, and run quizzes that feed a readiness percentage.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ['500', 'total questions', Database],
              ['30/40/30', 'difficulty split', Layers3],
              ['0-100%', 'readiness score', Target]
            ].map(([value, label, Icon]) => (
              <div key={label} className="rounded-3xl border border-white/70 bg-white/75 p-6 shadow-sm backdrop-blur-2xl dark:border-white/10 dark:bg-white/10">
                <Icon className="mb-4 h-6 w-6 text-sky-500" />
                <div className="text-3xl font-extrabold">{value}</div>
                <div className="mt-1 text-sm font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">Choose a role</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300">Each role file follows the same JSON schema and can be moved into PocketBase later.</p>
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search roles..." className="h-12 rounded-2xl bg-white/80 pl-10 dark:bg-white/10" />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredRoles.map((role) => (
              <Link
                key={role.slug}
                to={`/interview-questions/${role.slug}`}
                className="group rounded-3xl border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur-2xl transition-all hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/10"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                  <BrainCircuit className="h-6 w-6" />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-extrabold">{role.role}</h3>
                    <p className="mt-2 text-sm font-semibold text-slate-500 dark:text-slate-400">{role.totalQuestions} structured questions</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-slate-950 dark:group-hover:text-white" />
                </div>
                <div className="mt-6 grid grid-cols-3 gap-2 text-center text-xs font-bold">
                  <span className="rounded-full bg-emerald-50 px-3 py-2 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">30 beginner</span>
                  <span className="rounded-full bg-sky-50 px-3 py-2 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">40 mid</span>
                  <span className="rounded-full bg-rose-50 px-3 py-2 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300">30 advanced</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
