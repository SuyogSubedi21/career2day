import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, BookOpenCheck, CheckCircle2, ChevronDown, Eye, Filter, Lightbulb, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import SEOHead from '@/components/SEOHead.jsx';
import { getCareerPlatformBySlug } from '@/data/careerPlatformData.js';

const levels = ['all', 'beginner', 'intermediate', 'advanced'];
const levelLabels = {
  all: 'All',
  beginner: 'Easy',
  intermediate: 'Medium',
  advanced: 'Hard'
};

export default function PlatformInterviewQuestionsPage() {
  const { careerSlug } = useParams();
  const career = getCareerPlatformBySlug(careerSlug);
  const [level, setLevel] = useState('all');
  const [topic, setTopic] = useState('all');
  const [query, setQuery] = useState('');
  const [openId, setOpenId] = useState(null);
  const [revealedHints, setRevealedHints] = useState({});
  const [revealedAnswers, setRevealedAnswers] = useState({});
  const [completed, setCompleted] = useLocalState(`career2day-interview-${careerSlug}`, {});

  const questions = useMemo(() => {
    if (!career) return [];
    return career.interviewQuestions.filter((item) => {
      const matchesLevel = level === 'all' || item.difficulty === level;
      const matchesTopic = topic === 'all' || item.topic === topic;
      const searchable = `${item.question} ${item.topic} ${item.relatedSkill}`.toLowerCase();
      return matchesLevel && matchesTopic && searchable.includes(query.toLowerCase());
    });
  }, [career, level, topic, query]);

  const topics = useMemo(() => {
    if (!career) return [];
    return Array.from(new Set(career.interviewQuestions.map((item) => item.topic))).sort();
  }, [career]);

  if (!career) {
    return (
      <div className="min-h-screen bg-[#f8fafc] px-4 py-28 text-center dark:bg-[#080b12]">
        <h1 className="text-3xl font-extrabold">Interview set not available yet</h1>
        <Button asChild className="mt-6 rounded-xl"><Link to="/careers">Browse careers</Link></Button>
      </div>
    );
  }

  const counts = {
    beginner: career.interviewQuestions.filter((item) => item.difficulty === 'beginner').length,
    intermediate: career.interviewQuestions.filter((item) => item.difficulty === 'intermediate').length,
    advanced: career.interviewQuestions.filter((item) => item.difficulty === 'advanced').length
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#eef2f7_42%,#f8fafc_100%)] text-slate-950 dark:bg-[linear-gradient(180deg,#070b13_0%,#0b1220_42%,#070b13_100%)] dark:text-white">
      <SEOHead title={`${career.name} Interview Questions | Career2Day`} description={`Practice 100 structured ${career.name} interview questions with short answers, detailed explanations, mistakes, and examples.`} />
      <section className="px-4 pb-10 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Button asChild variant="ghost" className="mb-6 rounded-xl">
            <Link to={`/careers/${career.slug}`}><ArrowLeft className="mr-2 h-4 w-4" /> Back to career path</Link>
          </Button>
          <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-bold text-slate-500 shadow-sm dark:border-white/10 dark:bg-white/10">
                <BookOpenCheck className="h-4 w-4 text-sky-500" /> Structured interview practice
              </div>
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">{career.name} interview questions</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Cleanly grouped questions with one focus at a time: question, short answer, detailed answer, common mistake, and practical example.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 rounded-lg border border-slate-200 bg-white p-4 text-center shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-white/10">
              <Stat value={counts.beginner} label="Easy" />
              <Stat value={counts.intermediate} label="Medium" />
              <Stat value={counts.advanced} label="Hard" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 rounded-lg border border-slate-200 bg-white/90 p-4 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-[#080b12]/90">
            <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search question, topic, or skill..." className="h-12 rounded-md bg-white pl-10 dark:bg-white/10" />
              </div>
              <div className="flex flex-wrap gap-2">
                {levels.map((item) => (
                  <Button key={item} type="button" variant={level === item ? 'default' : 'outline'} className="rounded-md capitalize" onClick={() => setLevel(item)}>
                    {item === 'all' && <Filter className="mr-2 h-4 w-4" />}
                    {levelLabels[item]}
                  </Button>
                ))}
              </div>
            </div>
            <div className="mt-3 flex gap-2 overflow-x-auto">
              <Button type="button" variant={topic === 'all' ? 'default' : 'outline'} className="rounded-md whitespace-nowrap" onClick={() => setTopic('all')}>All topics</Button>
              {topics.map((item) => (
                <Button key={item} type="button" variant={topic === item ? 'default' : 'outline'} className="rounded-md whitespace-nowrap" onClick={() => setTopic(item)}>
                  {item}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {questions.map((item, index) => {
              const isOpen = openId === item.id;
              return (
                <article key={item.id} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/10">
                  <button type="button" onClick={() => setOpenId(isOpen ? null : item.id)} className="grid w-full gap-4 p-5 text-left md:grid-cols-[110px_1fr_auto] md:items-center">
                    <div>
                      <div className="text-xs font-extrabold uppercase tracking-wide text-slate-400">Question</div>
                      <div className="mt-1 text-2xl font-extrabold">{index + 1}</div>
                    </div>
                    <div>
                      <div className="mb-2 flex flex-wrap gap-2">
                        <Badge>{levelLabels[item.difficulty] || item.difficulty}</Badge>
                        <Badge muted>{item.topic}</Badge>
                        <Badge muted>{item.relatedSkill}</Badge>
                        {completed[item.id] && <Badge>completed</Badge>}
                      </div>
                      <h2 className="text-lg font-extrabold leading-7">{item.question}</h2>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="border-t border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5">
                      <div className="mb-4 flex justify-end">
                        <Button type="button" className="rounded-lg" variant={completed[item.id] ? 'outline' : 'default'} onClick={() => setCompleted((current) => ({ ...current, [item.id]: !current[item.id] }))}>
                          {completed[item.id] ? 'Marked completed' : 'Mark as completed'}
                        </Button>
                      </div>
                      <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
                        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/10">
                          <h3 className="text-sm font-extrabold uppercase tracking-wide text-slate-500 dark:text-slate-300">Practice flow</h3>
                          <div className="mt-4 grid gap-3">
                            <Button
                              type="button"
                              variant={revealedHints[item.id] ? 'secondary' : 'outline'}
                              className="justify-start rounded-md"
                              onClick={() => setRevealedHints((current) => ({ ...current, [item.id]: true }))}
                            >
                              <Lightbulb className="mr-2 h-4 w-4" /> Reveal hint
                            </Button>
                            <Button
                              type="button"
                              variant={revealedAnswers[item.id] ? 'secondary' : 'default'}
                              className="justify-start rounded-md"
                              onClick={() => {
                                setRevealedHints((current) => ({ ...current, [item.id]: true }));
                                setRevealedAnswers((current) => ({ ...current, [item.id]: true }));
                              }}
                            >
                              <Eye className="mr-2 h-4 w-4" /> Reveal final answer
                            </Button>
                          </div>
                          {revealedHints[item.id] ? (
                            <Panel title="Hint" className="mt-4 border border-amber-200 bg-amber-50 shadow-none dark:border-amber-400/20 dark:bg-amber-400/10">
                              {item.hint || 'Start with the decision you would make, then name the evidence, risk, and tradeoff.'}
                            </Panel>
                          ) : (
                            <LockedPanel title="Hint" text="Try answering out loud before opening the hint." />
                          )}
                        </div>
                        <div className="grid gap-4">
                          {revealedAnswers[item.id] ? (
                            <>
                              <Panel title="Final answer">
                                {item.detailedAnswer}
                              </Panel>
                              <div className="grid gap-4 md:grid-cols-2">
                                <Panel title="Common mistake">
                                  {item.commonMistake}
                                </Panel>
                                <Panel title="Real-world example">
                                  {item.realWorldExample}
                                </Panel>
                              </div>
                            </>
                          ) : (
                            <LockedPanel title="Final answer" text="Reveal the final answer after you have tried your own response." />
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

function useLocalState(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      return JSON.parse(window.localStorage.getItem(key) || 'null') || initialValue;
    } catch {
      return initialValue;
    }
  });

  const setPersisted = (nextValue) => {
    setValue((current) => {
      const resolved = typeof nextValue === 'function' ? nextValue(current) : nextValue;
      window.localStorage.setItem(key, JSON.stringify(resolved));
      return resolved;
    });
  };

  return [value, setPersisted];
}

function Stat({ value, label }) {
  return (
    <div className="rounded-xl bg-slate-50 p-3 dark:bg-white/5">
      <div className="text-2xl font-extrabold">{value}</div>
      <div className="text-xs font-bold uppercase tracking-wide text-slate-400">{label}</div>
    </div>
  );
}

function Badge({ children, muted = false }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-bold capitalize ${muted ? 'bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300' : 'bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300'}`}>{children}</span>;
}

function Panel({ title, children, className = '' }) {
  return (
    <div className={`rounded-lg bg-white p-4 shadow-sm dark:bg-white/10 ${className}`}>
      <h3 className="mb-2 flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-slate-500 dark:text-slate-300">
        <CheckCircle2 className="h-4 w-4 text-emerald-500" /> {title}
      </h3>
      <p className="text-sm leading-7 text-slate-700 dark:text-slate-200">{children}</p>
    </div>
  );
}

function LockedPanel({ title, text }) {
  return (
    <div className="mt-4 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 text-sm font-semibold text-slate-500 dark:border-white/15 dark:bg-white/5 dark:text-slate-400">
      <div className="text-xs font-extrabold uppercase tracking-wide">{title}</div>
      <p className="mt-2 leading-6">{text}</p>
    </div>
  );
}
