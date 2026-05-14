import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead.jsx';
import { getFeaturedPlatformCareers } from '@/data/careerPlatformData.js';
import { Button } from '@/components/ui/button';

export default function QuizSelectionPage() {
  const careers = getFeaturedPlatformCareers().slice(0, 24);

  return (
    <div className="min-h-[100dvh] bg-background px-4 py-16">
      <SEOHead title="Technical Skill Quizzes | Career2Day" />
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">Timed practice</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-foreground">Skill Quizzes</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">Choose a role, select difficulty, then start a timed quiz. Answers are shown only after submission.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {careers.map((career) => (
            <article key={career.slug} className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <h2 className="text-lg font-extrabold text-foreground">{career.name}</h2>
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">{career.tagline || career.summary}</p>
              <Button asChild className="mt-5 w-full rounded-md">
                <Link to={`/quiz/${career.slug}/difficulty`}>Choose Difficulty</Link>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
