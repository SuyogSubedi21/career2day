import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead.jsx';

const freeFeatures = [
  'Career roadmaps',
  'CV builder with templates',
  'Interview questions',
  'Role quizzes',
  'Readiness tracking',
  'Dashboard charts'
];

export default function PricingPageRedesign() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-28 text-slate-950 dark:bg-[#080b12] dark:text-white sm:px-6 lg:px-8">
      <SEOHead title="Pricing | Career2Day" description="Career2Day is currently free. Use roadmaps, CV builder, interview questions, quizzes, and readiness tracking without payment." />
      <section className="mx-auto max-w-4xl text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-slate-300">
          <ShieldCheck className="h-4 w-4 text-slate-700 dark:text-slate-200" /> Free access
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">Everything is free right now</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Career2Day is focused on growth, usefulness, and trust. There is no checkout, subscription, or locked core feature in this version.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-4xl rounded-lg border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold">Free Platform</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">$0. No payment required.</p>
          </div>
          <Button asChild className="rounded-md">
            <Link to="/careers/ai-engineer">Start learning</Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {freeFeatures.map((feature) => (
            <div key={feature} className="flex items-center gap-3 rounded-md bg-slate-50 p-3 font-semibold dark:bg-white/5">
              <CheckCircle2 className="h-5 w-5 text-slate-700 dark:text-slate-200" />
              {feature}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
