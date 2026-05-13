import React from 'react';
import { Mail, MapPin, MessageSquare, ShieldCheck } from 'lucide-react';
import SEOHead from '@/components/SEOHead.jsx';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <SEOHead
        title="Contact Career2Day | Support, Privacy and Business Inquiries"
        description="Contact Career2Day for support, account questions, privacy requests, partnership inquiries, and feedback about career roadmaps or the CV builder."
        ogUrl="https://career2day.com/contact"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Career2Day',
          url: 'https://career2day.com/contact'
        }}
      />

      <main className="mx-auto max-w-5xl">
        <div className="mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Contact</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Contact Career2Day</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
            We help learners and early professionals use career roadmaps, interview preparation, and CV building tools with more confidence. Use the contact options below for support, privacy requests, content corrections, and partnership questions.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {[
            ['General support', 'admin@career2day.com', Mail],
            ['Privacy requests', 'admin@career2day.com', ShieldCheck],
            ['Content feedback', 'admin@career2day.com', MessageSquare],
            ['Location', 'Kathmandu, Nepal', MapPin]
          ].map(([title, value, Icon]) => (
            <section key={title} className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <Icon className="mb-4 h-6 w-6 text-primary" />
              <h2 className="text-xl font-bold text-foreground">{title}</h2>
              <p className="mt-2 text-muted-foreground">{value}</p>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-lg border border-border bg-card p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-foreground">Before you contact us</h2>
          <p className="mt-4 text-muted-foreground leading-7">
            If you are asking about account access, include the email address connected to your Career2Day account. If you are reporting a content issue, include the page URL and the section that needs review. Please do not send passwords, payment card details, or private API keys by email.
          </p>
          <p className="mt-4 text-muted-foreground leading-7">
            We aim to keep public career guidance accurate, practical, and beginner-friendly. Feedback from learners, students, hiring teams, and working professionals helps us improve the roadmaps, interview questions, and CV guidance over time.
          </p>
        </section>
      </main>
    </div>
  );
}
