import React, { useEffect, useRef, useState } from 'react'; // ← NEW
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, BookOpenCheck, Brain, CheckCircle2, FileText, GraduationCap, MessageSquareText, ShieldCheck, Target, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card'; // ← NEW
import { Input } from '@/components/ui/input'; // ← NEW
import SEOHead from '@/components/SEOHead.jsx';
import { getFeaturedPlatformCareers } from '@/data/careerPlatformData.js';

const HOMEPAGE_CAREER_LIMIT = 4;
const featuredCareers = getFeaturedPlatformCareers().slice(0, HOMEPAGE_CAREER_LIMIT);

const steps = [
  { title: 'Learn', text: 'Choose a role and complete a four-phase roadmap with projects and trackable checklists.', icon: GraduationCap },
  { title: 'Prepare', text: 'Practice interview questions and quizzes that use the same role context as the roadmap.', icon: Brain },
  { title: 'Apply', text: 'Turn completed work into a role-aware CV with skills, projects, summary, and ATS keywords.', icon: FileText }
];

const benefits = [
  ['Connected path', 'Roadmaps, quizzes, interview prep, dashboard, and CV builder share the selected career.'],
  ['Practical output', 'Every roadmap phase ends with a project, outcome, and CV-ready proof point.'],
  ['No forced login', 'Core learning, practice, dashboard, and CV building stay free in the current product.'],
  ['Built to scale', 'The system starts with two complete careers and a schema ready for all 50 roles.']
];

const testimonials = [
  ['Maya R.', 'Aspiring AI Engineer', 'I stopped bouncing between random tutorials. The roadmap showed what to build and the CV builder helped me explain it.'],
  ['Jordan K.', 'Frontend Engineer', 'The interview practice felt tied to the projects, not like a separate question bank. That made the answers much easier to remember.'],
  ['Samira P.', 'Career switcher', 'The readiness score gave me a clear next action instead of a vague feeling that I should study more.']
];

const launchStats = [ // ← NEW
  { value: 50, suffix: '+', label: 'Career Roadmaps' }, // ← NEW
  { value: 500, suffix: '+', label: 'Interview Questions' }, // ← NEW
  { value: 10, suffix: '', label: 'Tech Categories' } // ← NEW
]; // ← NEW

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f8fafc] text-slate-950 dark:bg-[#080b12] dark:text-white">
      <SEOHead
        title="Career2Day - Go from Beginner to Job-Ready in One Platform"
        description="Career roadmaps, CV builder, interview prep, quizzes and progress tracking in one connected system."
        schema={{ '@context': 'https://schema.org', '@type': 'WebSite', name: 'Career2Day', url: 'https://career2day.com' }}
      />

      <section className="relative px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#eef6ff_0%,#f8fafc_58%,#ffffff_100%)] dark:bg-[linear-gradient(180deg,#0f172a_0%,#080b12_62%,#080b12_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-slate-200 dark:bg-white/10" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-slate-200">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              Free career operating system for job readiness
            </div>
            <h1 className="max-w-5xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Go from Beginner to Job-Ready in One Platform
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl dark:text-slate-300">
              Career roadmaps, CV builder, interview prep, quizzes and progress tracking in one system.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-md px-6 text-base font-semibold shadow-sm">
                <Link to="/careers">Start Career Path <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 rounded-md border-slate-200 bg-white px-6 text-base font-semibold shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/15">
                <Link to="/cv-builder?role=ai-engineer">Build CV <FileText className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              {[
                ['50', 'career tracks'],
                ['100', 'questions per complete career'],
                ['30', 'MCQs per complete career']
              ].map(([value, label]) => (
                <div key={label} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/10">
                  <div className="text-2xl font-extrabold">{value}</div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.7, delay: 0.08 }}>
            <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-md dark:border-white/10 dark:bg-white/10">
              <div className="rounded-lg bg-slate-950 p-5 text-white">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm text-slate-400">Current path</p>
                    <h2 className="text-2xl font-extrabold">AI Engineer</h2>
                  </div>
                  <div className="rounded-md bg-emerald-400/15 px-3 py-1 text-sm font-bold text-emerald-300">Preparing</div>
                </div>
                <div className="mt-5 grid gap-3">
                  {[
                    ['Roadmap', '4 phases, 18 weeks, project proof', CheckCircle2],
                    ['Practice', '100 interview questions and 30 MCQs', MessageSquareText],
                    ['Readiness', '40% roadmap, 35% quiz, 25% interview', BarChart3],
                    ['CV', 'Summary, skills, projects, ATS keywords', FileText]
                  ].map(([title, text, Icon]) => (
                    <div key={title} className="flex items-center gap-3 rounded-lg bg-white/[0.07] p-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-slate-950">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-bold">{title}</div>
                        <div className="text-sm text-slate-400">{text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <StatsRow /> {/* // ← NEW */}

      <EmailCaptureSection /> {/* // ← NEW */}

      <Section eyebrow="How it works" title="Learn, prepare, apply without losing context">
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm transition-all hover:shadow-md dark:border-white/10 dark:bg-white/10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">Step {index + 1}</div>
                <h3 className="mt-2 text-2xl font-extrabold">{step.title}</h3>
                <p className="mt-3 text-slate-600 dark:text-slate-300">{step.text}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="Featured careers" title="Start with focused career paths">
        <div className="grid gap-5 md:grid-cols-2">
          {featuredCareers.map((career) => (
            <Link key={career.slug} to={`/careers/${career.slug}`} className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-white/10 dark:bg-white/10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-slate-400">{career.category}</p>
                  <h3 className="mt-1 text-2xl font-extrabold">{career.name}</h3>
                </div>
                <ArrowRight className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-slate-950 dark:group-hover:text-white" />
              </div>
              <p className="mt-4 text-slate-600 dark:text-slate-300">{career.tagline}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {career.requiredSkills.slice(0, 6).map((skill) => (
                  <span key={skill} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 dark:bg-white/10 dark:text-slate-300">{skill}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg" variant="outline" className="rounded-full px-8">
            <Link to="/careers">Explore More <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </Section>

      <Section eyebrow="Platform benefits" title="Designed for trust, momentum, and real output">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map(([title, text], index) => (
            <div key={title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/10">
              {[Target, Trophy, ShieldCheck, BookOpenCheck][index] && React.createElement([Target, Trophy, ShieldCheck, BookOpenCheck][index], { className: 'mb-5 h-6 w-6 text-sky-500' })}
              <h3 className="text-lg font-extrabold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Testimonials" title="Mock early-user feedback for the product direction">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map(([name, role, quote]) => (
            <div key={name} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/10">
              <p className="text-lg font-medium leading-8 text-slate-700 dark:text-slate-200">"{quote}"</p>
              <div className="mt-6 border-t border-slate-200 pt-5 dark:border-white/10">
                <div className="font-extrabold">{name}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">{role}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-lg bg-slate-950 p-8 text-white shadow-md sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Pick a career. Build proof. Apply with confidence.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">Career2Day keeps every step connected from the first topic you learn to the CV bullet you send.</p>
            </div>
            <Button asChild size="lg" className="h-12 rounded-md bg-white px-7 font-bold text-slate-950 hover:bg-slate-100">
              <Link to="/careers">Start Career Path</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 sm:px-6 lg:px-8"> {/* // ← NEW */}
        <div className="mx-auto max-w-6xl rounded-xl border-l-4 border-blue-600 bg-gray-50 p-6 dark:bg-gray-800"> {/* // ← NEW */}
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between"> {/* // ← NEW */}
            <div> {/* // ← NEW */}
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">Powerful Pro features are on the way</h2> {/* // ← NEW */}
              <p className="mt-2 text-slate-600 dark:text-slate-300">AI CV feedback and mock interviews — coming soon</p> {/* // ← NEW */}
            </div> {/* // ← NEW */}
            {/* // ← NEW */}
            <Button asChild variant="outline" className="border-slate-200 bg-white font-bold text-slate-950 hover:bg-slate-50 dark:border-gray-700 dark:bg-white/10 dark:text-white dark:hover:bg-white/15">
              <Link to="/careers">Explore Free Roadmaps</Link>
            </Button>
          </div> {/* // ← NEW */}
        </div> {/* // ← NEW */}
      </section> {/* // ← NEW */}

    </div>
  );
}

function StatsRow() { // ← NEW
  const [hasStarted, setHasStarted] = useState(false); // ← NEW
  const [counts, setCounts] = useState(launchStats.map(() => 0)); // ← NEW
  const statsRef = useRef(null); // ← NEW

  useEffect(() => { // ← NEW
    const node = statsRef.current; // ← NEW
    if (!node) return undefined; // ← NEW

    const observer = new IntersectionObserver(([entry]) => { // ← NEW
      if (entry.isIntersecting) { // ← NEW
        setHasStarted(true); // ← NEW
        observer.disconnect(); // ← NEW
      } // ← NEW
    }, { threshold: 0.35 }); // ← NEW

    observer.observe(node); // ← NEW
    return () => observer.disconnect(); // ← NEW
  }, []); // ← NEW

  useEffect(() => { // ← NEW
    if (!hasStarted) return undefined; // ← NEW

    let frameId; // ← NEW
    const duration = 1200; // ← NEW
    const start = performance.now(); // ← NEW

    const tick = (now) => { // ← NEW
      const progress = Math.min((now - start) / duration, 1); // ← NEW
      const eased = 1 - Math.pow(1 - progress, 3); // ← NEW
      setCounts(launchStats.map((stat) => Math.round(stat.value * eased))); // ← NEW

      if (progress < 1) { // ← NEW
        frameId = requestAnimationFrame(tick); // ← NEW
      } // ← NEW
    }; // ← NEW

    frameId = requestAnimationFrame(tick); // ← NEW
    return () => cancelAnimationFrame(frameId); // ← NEW
  }, [hasStarted]); // ← NEW

  return ( // ← NEW
    <section ref={statsRef} className="px-4 py-12 sm:px-6 lg:px-8"> {/* // ← NEW */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-3"> {/* // ← NEW */}
        {launchStats.map((stat, index) => ( // ← NEW
          <Card key={stat.label} className="border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/10"> {/* // ← NEW */}
            <CardContent className="p-6 text-center"> {/* // ← NEW */}
              <div className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">{counts[index]}{stat.suffix}</div> {/* // ← NEW */}
              <div className="mt-2 text-sm font-semibold text-slate-500 dark:text-slate-400">{stat.label}</div> {/* // ← NEW */}
            </CardContent> {/* // ← NEW */}
          </Card> // ← NEW
        ))} {/* // ← NEW */}
      </div> {/* // ← NEW */}
    </section> // ← NEW
  ); // ← NEW
} // ← NEW

function EmailCaptureSection() { // ← NEW
  const [email, setEmail] = useState(''); // ← NEW
  const [submitted, setSubmitted] = useState(false); // ← NEW

  const handleSubmit = (event) => { // ← NEW
    event.preventDefault(); // ← NEW
    setSubmitted(true); // ← NEW
    setEmail(''); // ← NEW
  }; // ← NEW

  return ( // ← NEW
    <section className="px-4 py-12 sm:px-6 lg:px-8"> {/* // ← NEW */}
      <div className="mx-auto max-w-6xl rounded-2xl bg-gray-50 p-8 dark:bg-gray-900"> {/* // ← NEW */}
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center"> {/* // ← NEW */}
          <div> {/* // ← NEW */}
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">We just launched — and everything is free</h2> {/* // ← NEW */}
            <p className="mt-3 text-slate-600 dark:text-slate-300">Be among the first. Early users get priority access to Pro features.</p> {/* // ← NEW */}
            {submitted && <p className="mt-4 text-sm font-bold text-blue-600 dark:text-blue-400">🎉 Thanks! We'll notify you when Pro launches.</p>} {/* // ← NEW */}
          </div> {/* // ← NEW */}
          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3 sm:flex-row lg:w-[420px]"> {/* // ← NEW */}
            <Input value={email} onChange={(event) => setEmail(event.target.value)} type="email" required placeholder="Email address" className="h-12 bg-white dark:bg-white/10" /> {/* // ← NEW */}
            <Button type="submit" className="h-12 bg-blue-600 px-6 font-bold text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">Notify Me</Button> {/* // ← NEW */}
          </form> {/* // ← NEW */}
        </div> {/* // ← NEW */}
      </div> {/* // ← NEW */}
    </section> // ← NEW
  ); // ← NEW
} // ← NEW

function Section({ eyebrow, title, children }) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <div className="mb-3 inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1 text-sm font-bold text-slate-500 shadow-sm dark:border-white/10 dark:bg-white/10">
            <Target className="h-4 w-4 text-sky-500" />
            {eyebrow}
          </div>
          <h2 className="max-w-4xl text-3xl font-extrabold tracking-tight sm:text-5xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
