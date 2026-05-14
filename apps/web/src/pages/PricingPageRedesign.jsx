import React, { useState } from 'react'; // ← NEW
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge'; // ← NEW
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // ← NEW
import { Switch } from '@/components/ui/switch'; // ← NEW
import SEOHead from '@/components/SEOHead.jsx';

const freeFeatures = [
  'Career roadmaps',
  'CV builder with templates',
  'Interview questions',
  'Role quizzes',
  'Readiness tracking',
  'Dashboard charts'
];

const proFeatures = [ // ← NEW
  'AI CV feedback', // ← NEW
  'Mock interview scoring', // ← NEW
  'ATS checker' // ← NEW
]; // ← NEW

const faqs = [ // ← NEW
  ['Is Career2Day really free?', 'Yes. Everything is completely free right now.'], // ← NEW
  ['What is the Pro plan?', 'A future plan with advanced AI-powered features.'], // ← NEW
  ['What will Pro include?', 'AI CV feedback, mock interview scoring, ATS checker.'], // ← NEW
  ['How will I know when Pro launches?', 'We will announce it on the site.'] // ← NEW
]; // ← NEW

export default function PricingPageRedesign() {
  const [yearly, setYearly] = useState(false); // ← NEW

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-950 dark:bg-[#080b12] dark:text-white"> {/* // ← NEW */}
      <SEOHead title="Pricing | Career2Day" description="Career2Day is currently free. Use roadmaps, CV builder, interview questions, quizzes, and readiness tracking." /> {/* // ← NEW */}
      <div className="bg-blue-600 py-3 text-center text-sm font-medium text-white">🎉 Everything on Career2Day is completely free right now — enjoy!</div> {/* // ← NEW */}

      <div className="px-4 py-28 sm:px-6 lg:px-8"> {/* // ← NEW */}
      <section className="mx-auto max-w-4xl text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-slate-300">
          <ShieldCheck className="h-4 w-4 text-blue-600 dark:text-blue-400" /> Free access {/* // ← NEW */}
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">Everything is free right now</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Career2Day is focused on growth, usefulness, and trust. Core features stay open in this version. {/* // ← NEW */}
        </p>
        <div className="mt-8 flex items-center justify-center gap-3"> {/* // ← NEW */}
          <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">Monthly</span> {/* // ← NEW */}
          <Switch checked={yearly} onCheckedChange={setYearly} aria-label="Toggle yearly pricing" /> {/* // ← NEW */}
          <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">Yearly</span> {/* // ← NEW */}
          {yearly && <Badge className="border-transparent bg-blue-600 text-white hover:bg-blue-600">Save 2 months</Badge>} {/* // ← NEW */}
        </div> {/* // ← NEW */}
      </section>

      <section className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2"> {/* // ← NEW */}
        <Card className="flex h-full flex-col border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-white/10"> {/* // ← NEW */}
          <CardHeader> {/* // ← NEW */}
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between"> {/* // ← NEW */}
              <div> {/* // ← NEW */}
                <CardTitle className="text-2xl font-extrabold">Free Platform</CardTitle> {/* // ← NEW */}
                <p className="mt-2 text-slate-600 dark:text-slate-300">$0 / month</p> {/* // ← NEW */}
              </div> {/* // ← NEW */}
              {/* // ← NEW */}
              <Button asChild className="rounded-md">
                <Link to="/careers/ai-engineer">Start learning</Link>
              </Button>
            </div>
          </CardHeader> {/* // ← NEW */}
          <CardContent> {/* // ← NEW */}
            <div className="grid gap-3 sm:grid-cols-2"> {/* // ← NEW */}
              {freeFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3 rounded-md bg-slate-50 p-3 font-semibold dark:bg-white/5">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400" /> {/* // ← NEW */}
                  {feature}
                </div>
              ))}
            </div>
          </CardContent> {/* // ← NEW */}
        </Card> {/* // ← NEW */}

        <Card className="flex h-full flex-col border-blue-600 bg-white shadow-lg shadow-blue-500/20 ring-2 ring-blue-600 dark:bg-white/10 md:scale-[1.02]"> {/* // ← NEW */}
          <CardHeader> {/* // ← NEW */}
            <CardTitle className="text-2xl font-extrabold">Pro</CardTitle> {/* // ← NEW */}
            <p className="text-sm text-slate-600 dark:text-slate-300">A future plan with advanced AI-powered features.</p> {/* // ← NEW */}
          </CardHeader> {/* // ← NEW */}
          <CardContent className="flex flex-1 flex-col"> {/* // ← NEW */}
            <div className="mb-6 flex flex-wrap items-baseline gap-2"> {/* // ← NEW */}
              <span className="text-4xl font-extrabold">{yearly ? '$99.99' : '$9.99'}</span> {/* // ← NEW */}
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{yearly ? '/ year' : '/ month'}</span> {/* // ← NEW */}
            </div> {/* // ← NEW */}
            <ul className="mb-8 flex-1 space-y-3"> {/* // ← NEW */}
              {proFeatures.map((feature) => ( // ← NEW
                <li key={feature} className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-200"> {/* // ← NEW */}
                  <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400" /> {/* // ← NEW */}
                  {feature} {/* // ← NEW */}
                </li> // ← NEW
              ))} {/* // ← NEW */}
            </ul> {/* // ← NEW */}
            <Button disabled className="h-12 w-full cursor-not-allowed bg-blue-600 font-bold text-white opacity-60 hover:bg-blue-600">Coming Soon</Button> {/* // ← NEW */}
          </CardContent> {/* // ← NEW */}
        </Card> {/* // ← NEW */}
      </section>

      <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">Pro features are not available yet.</p> {/* // ← NEW */}

      <section className="mx-auto mt-16 max-w-3xl"> {/* // ← NEW */}
        <h2 className="text-center text-3xl font-extrabold tracking-tight">Frequently Asked Questions</h2> {/* // ← NEW */}
        <div className="mt-8 grid gap-4"> {/* // ← NEW */}
          {faqs.map(([question, answer]) => ( // ← NEW
            <Card key={question} className="border-slate-200 bg-white shadow-sm dark:border-gray-700 dark:bg-white/10"> {/* // ← NEW */}
              <CardContent className="p-6"> {/* // ← NEW */}
                <h3 className="font-extrabold text-slate-950 dark:text-white">{question}</h3> {/* // ← NEW */}
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{answer}</p> {/* // ← NEW */}
              </CardContent> {/* // ← NEW */}
            </Card> // ← NEW
          ))} {/* // ← NEW */}
        </div> {/* // ← NEW */}
      </section> {/* // ← NEW */}
      </div> {/* // ← NEW */}
    </main>
  );
}
