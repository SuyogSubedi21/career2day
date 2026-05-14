import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ArrowRight, BookOpenCheck, CheckCircle2, ChevronRight, ExternalLink, FileCheck2, FileText, FolderKanban, Target, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import SEOHead from '@/components/SEOHead.jsx';
import { allCareerSummaries, calculateReadinessScore, getCareerPlatformBySlug } from '@/data/careerPlatformData.js';
import { getSalaryMarketsForCareer } from '@/data/salaryMarketsByCareer.js';
import { useRetention } from '@/hooks/useRetention.js';
import { getLocalizedSalaryMarkets } from '@/lib/utils/localSalaryMarkets.js';

const progressKey = (slug) => `career2day-progress-${slug}`;
const quizKey = (slug) => `career2day-quiz-${slug}`;
const interviewKey = (slug) => `career2day-interview-${slug}`;
const projectKey = (slug) => `career2day-project-${slug}`;

export default function CareerDetailPage() {
  const { careerSlug } = useParams();
  const career = getCareerPlatformBySlug(careerSlug);
  const [checkedItems, setCheckedItems] = useLocalState(progressKey(careerSlug), {});
  const [answers, setAnswers] = useLocalState(quizKey(careerSlug), {});
  const [practiced, setPracticed] = useLocalState(interviewKey(careerSlug), {});
  const [projectSubmission, setProjectSubmission] = useLocalState(projectKey(careerSlug), {
    title: '',
    url: '',
    notes: '',
    fileName: '',
    selfReview: ''
  });
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizDone, setQuizDone] = useState(false);
  const [activeQuizLevel, setActiveQuizLevel] = useState('beginner');
  const [activePanel, setActivePanel] = useState('overview');
  const [selectedCountry, setSelectedCountry] = useState('USA');
  const { retention, badges, completeAction } = useRetention(career);

  if (!career) {
    return (
      <main className="min-h-screen bg-[#f8fafc] px-4 py-32 dark:bg-[#080b12]">
        <div className="mx-auto max-w-4xl rounded-lg border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-white/10 dark:bg-white/10">
          <h1 className="text-3xl font-extrabold">This career is queued for expansion</h1>
          <p className="mx-auto mt-3 text-slate-600 dark:text-slate-300">AI Engineer and Frontend Engineer are fully complete. The full 50-career catalog is already in the data model.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {allCareerSummaries.slice(0, 12).map((item) => (
              <span key={item.slug} className="rounded-md bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 dark:bg-white/10 dark:text-slate-300">{item.name}</span>
            ))}
          </div>
          <Button asChild className="mt-8 rounded-md"><Link to="/careers/ai-engineer">Open AI Engineer</Link></Button>
        </div>
      </main>
    );
  }

  const totalChecklist = career.roadmap.reduce((sum, phase) => sum + phase.checklist.length, 0);
  const completedChecklist = Object.values(checkedItems).filter(Boolean).length;
  const roadmapCompletion = Math.round((completedChecklist / totalChecklist) * 100);
  const answeredQuiz = career.quizzes.filter((item) => answers[item.id]);
  const correctQuiz = answeredQuiz.filter((item) => answers[item.id] === item.correctAnswer);
  const quizScore = answeredQuiz.length ? Math.round((correctQuiz.length / answeredQuiz.length) * 100) : 0;
  const interviewCompletion = Math.round((Object.values(practiced).filter(Boolean).length / career.interviewQuestions.length) * 100);
  const readiness = calculateReadinessScore({ roadmapCompletion, quizScore, interviewCompletion });
  const totalWeeks = career.roadmap.reduce((sum, phase) => sum + phase.timelineWeeks, 0);

  const salaryData = career.analytics.salary.map(([level, salary]) => ({ level, salary }));
  const uploadedSalaryMarkets = getSalaryMarketsForCareer(career.slug);
  const localizedSalaryMarkets = getLocalizedSalaryMarkets({
    entryUsd: (salaryData[0]?.salary || salaryData[1]?.salary || 0) * 1000,
    midUsd: (salaryData[1]?.salary || salaryData[0]?.salary || 0) * 1000,
    seniorUsd: (salaryData[2]?.salary || salaryData[1]?.salary || 0) * 1000
  });
  const salaryMarkets = uploadedSalaryMarkets.length ? uploadedSalaryMarkets : localizedSalaryMarkets;
  const selectedSalaryMarket = salaryMarkets.find((market) => market.country === selectedCountry) || salaryMarkets[0];
  const quizQuestions = career.quizzes.filter((item) => item.difficulty === activeQuizLevel);
  const currentQuiz = quizQuestions[quizIndex] || quizQuestions[0];
  const activeAnswered = quizQuestions.filter((item) => answers[item.id]);
  const activeCorrect = activeAnswered.filter((item) => answers[item.id] === item.correctAnswer);
  const activeScore = activeAnswered.length ? Math.round((activeCorrect.length / activeAnswered.length) * 100) : 0;

  const faqs = [
    ['How long does it take to become job-ready?', `This ${career.name} roadmap is structured for about ${totalWeeks} focused weeks.`],
    ['What tools should I learn?', career.tools.join(', ')],
    ['What should I build?', career.roadmap.map((phase) => phase.miniProject).join(' ')]
  ];
  const capstoneBrief = getCapstoneBrief(career);
  const capstoneScore = scoreProject(projectSubmission, career, capstoneBrief);

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#eef2f7_45%,#f8fafc_100%)] pb-20 text-slate-950 dark:bg-[linear-gradient(180deg,#070b13_0%,#0b1220_45%,#070b13_100%)] dark:text-white">
      <SEOHead
        title={career.seo?.title || `${career.name} Roadmap, Salary, Interview Questions and CV | Career2Day`}
        description={career.seo?.description || career.description}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: `${career.name} Career Roadmap`,
          description: career.description,
          mainEntity: (career.faqs || faqs.map(([question, answer]) => ({ question, answer }))).map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer }
          }))
        }}
      />

      <nav className="border-b border-slate-200 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-[#080b12]/90">
        <div className="mx-auto flex max-w-7xl items-center px-4 py-3 text-sm text-slate-500 sm:px-6 lg:px-8">
          <Link to="/" className="hover:text-slate-950 dark:hover:text-white">Home</Link>
          <ChevronRight className="mx-2 h-4 w-4" />
          <Link to="/careers" className="hover:text-slate-950 dark:hover:text-white">Careers</Link>
          <ChevronRight className="mx-2 h-4 w-4" />
          <span className="font-bold text-slate-950 dark:text-white">{career.name}</span>
        </div>
      </nav>

      <section className="border-b border-slate-200/70 bg-white px-4 py-12 shadow-[0_20px_80px_rgba(15,23,42,0.06)] sm:px-6 lg:px-8 dark:border-white/10 dark:bg-[#080b12]" id="overview">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_340px]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-500">{career.category}</p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-6xl">{career.name}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">{career.description}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              <InfoCard label="Demand" value={career.demandLevel} />
              <InfoCard label="Difficulty" value={career.beginnerFriendliness === 'High' ? 'Moderate' : 'Advanced'} />
              <InfoCard label="Time to job-ready" value={`${totalWeeks} weeks`} />
              <InfoCard label="Beginner fit" value={career.beginnerFriendliness} />
              <InfoCard label="Key tools" value={career.tools.slice(0, 3).join(', ')} />
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {[
                ['overview', 'Overview', CheckCircle2],
                ['roadmap', 'Roadmap', BookOpenCheck],
                ['projects', 'Projects', FolderKanban],
                ['quiz', 'Quiz', FileCheck2]
              ].map(([panel, label, Icon]) => {
                const active = activePanel === panel;
                return (
                  <button
                    key={panel}
                    type="button"
                    onClick={() => setActivePanel(panel)}
                    className={`flex min-h-14 items-center justify-between rounded-lg border px-5 py-3 text-left text-base font-bold shadow-sm transition ${
                      active
                        ? 'border-blue-600 bg-blue-600 text-white shadow-blue-600/20'
                        : 'border-slate-300 bg-white text-slate-950 hover:border-slate-500 hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10'
                    }`}
                  >
                    <span className="flex items-center gap-3"><Icon className="h-5 w-5" />{label}</span>
                    <ArrowRight className={`h-4 w-4 transition ${active ? 'translate-x-0.5' : ''}`} />
                  </button>
                );
              })}
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button asChild variant="outline" className="rounded-md">
                <Link to={`/interview-questions/${career.slug}`}><Target className="mr-2 h-4 w-4" />Interview Questions</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-md">
                <Link to={`/cv-builder?role=${career.slug}`}><FileText className="mr-2 h-4 w-4" />Build CV</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-md">
                <Link to="/careers">All Careers</Link>
              </Button>
            </div>
          </div>
          <aside className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-white/10">
            <p className="text-sm font-bold text-slate-500">Readiness score</p>
            <div className="mt-2 text-5xl font-extrabold">{readiness.score}%</div>
            <p className="mt-2 font-semibold">{readiness.level}</p>
            <div className="mt-5 h-2 rounded-full bg-slate-100 dark:bg-white/10"><div className="h-2 rounded-full bg-slate-900 dark:bg-white" style={{ width: `${readiness.score}%` }} /></div>
            <div className="mt-5 grid grid-cols-3 gap-2 text-center">
              <MiniMetric label="Roadmap" value={`${roadmapCompletion}%`} />
              <MiniMetric label="Quiz" value={`${quizScore}%`} />
              <MiniMetric label="Interview" value={`${interviewCompletion}%`} />
            </div>
          </aside>
        </div>
      </section>

      {activePanel === 'overview' && (
        <Section id="overview-panel" eyebrow="Overview" title={`${career.name} role snapshot`}>
          <div className="grid gap-5">
            <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
              <div className="grid gap-4 lg:grid-cols-2">
                {career.responsibilities && <PlainPanel title="Typical responsibilities" items={career.responsibilities} />}
                {career.industries && <PlainPanel title="Industries hiring this role" items={career.industries} />}
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/10">
                <h3 className="font-extrabold">Next best actions</h3>
                <div className="mt-4 grid gap-2">
                  <Button asChild className="rounded-md"><Link to={`/cv-builder?role=${career.slug}`}><FileText className="mr-2 h-4 w-4" />Build CV</Link></Button>
                  <Button asChild variant="outline" className="rounded-md"><Link to={`/interview-questions/${career.slug}`}><Target className="mr-2 h-4 w-4" />Interview Questions</Link></Button>
                  <Button variant="outline" className="rounded-md" onClick={() => setActivePanel('roadmap')}><BookOpenCheck className="mr-2 h-4 w-4" />Open Roadmap</Button>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/10">
              <div className="mb-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Salary</p>
                <h3 className="mt-1 text-2xl font-extrabold">Salary progression</h3>
              </div>
              <div className="grid gap-5 lg:grid-cols-[1fr_380px]">
                <div className="min-h-[300px]">
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={salaryData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="level" tickLine={false} axisLine={false} />
                      <YAxis tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}k`} />
                      <Tooltip formatter={(value) => `$${value}k`} />
                      <Bar dataKey="salary" fill="#0f172a" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid gap-3">
                  {salaryData.slice(0, 3).map((item, index) => <InfoCard key={item.level} label={`${item.level} level`} value={formatSalaryRange(item.salary, index)} />)}
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="text-sm font-extrabold">Salary by country</h4>
                      <select
                        value={selectedSalaryMarket?.country || selectedCountry}
                        onChange={(event) => setSelectedCountry(event.target.value)}
                        className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm font-bold outline-none transition focus:border-slate-900 dark:border-white/10 dark:bg-slate-950"
                      >
                        {salaryMarkets.map((market) => (
                          <option key={market.country} value={market.country}>{market.country}</option>
                        ))}
                      </select>
                    </div>
                    <div className="mt-4 rounded-md bg-white p-4 shadow-sm dark:bg-white/10">
                      <div className="text-xs font-bold uppercase tracking-wide text-slate-500">{selectedSalaryMarket?.country || 'Selected market'}</div>
                      <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                        <SalaryCell label="Entry" value={selectedSalaryMarket?.entryLabel || selectedSalaryMarket?.entry} />
                        <SalaryCell label="Mid" value={selectedSalaryMarket?.midLabel || selectedSalaryMarket?.mid} />
                        <SalaryCell label="Senior" value={selectedSalaryMarket?.seniorLabel || selectedSalaryMarket?.senior} />
                        <SalaryCell label="Lead" value={selectedSalaryMarket?.lead || selectedSalaryMarket?.leadLabel || selectedSalaryMarket?.rangeLabel} />
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                    {career.salaryNote || 'Salaries vary by country, company, experience and market conditions. Country rows are local market estimates shown in local currency.'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      )}

      {activePanel === 'roadmap' && (
        <Section id="roadmap" eyebrow="Roadmap" title="Follow this path in order">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
            <div className="grid gap-5">
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/10">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="font-extrabold">Progress: {roadmapCompletion}%</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Start at Beginner, finish each checklist, then build the project for that step.</p>
                  </div>
                  <Button asChild variant="outline" className="rounded-md"><Link to={`/quiz/${career.slug}/difficulty`}>Take Quiz</Link></Button>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {badges.length ? badges.map((badge) => <span key={badge} className="rounded-md bg-slate-100 px-3 py-1 text-xs font-bold dark:bg-white/10">{badge}</span>) : <span className="rounded-md bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500 dark:bg-white/10">No badges yet</span>}
                </div>
              </div>
              {career.roadmap.map((phase, phaseIndex) => {
                const phaseComplete = phase.checklist.filter((_, itemIndex) => checkedItems[`${phaseIndex}-${itemIndex}`]).length;
                const percent = Math.round((phaseComplete / phase.checklist.length) * 100);
                return (
                  <article key={phase.phase} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/10">
                    <div className="grid gap-0 md:grid-cols-[260px_minmax(0,1fr)]">
                      <div className="border-b border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5 md:border-b-0 md:border-r">
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-slate-900 text-sm font-extrabold text-white dark:bg-white dark:text-slate-950">{phaseIndex + 1}</div>
                        <h3 className="text-xl font-extrabold">Step {phaseIndex + 1}</h3>
                        <p className="mt-1 font-bold">{phase.phase}</p>
                        <p className="mt-1 text-sm font-bold text-slate-500">{phase.timelineWeeks} weeks</p>
                        <div className="mt-4 h-2 rounded-full bg-slate-100 dark:bg-white/10"><div className="h-2 rounded-full bg-slate-900 dark:bg-white" style={{ width: `${percent}%` }} /></div>
                        <p className="mt-2 text-xs font-bold text-slate-500">{percent}% complete</p>
                        <PhaseResources resources={phase.resources} />
                      </div>
                      <div className="p-5">
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Learn this first</p>
                        <div className="mt-3 grid gap-3 lg:grid-cols-2">
                          <div className="rounded-md border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/5">
                            <h4 className="text-sm font-extrabold">Main topics</h4>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {phase.topics.map((topic) => (
                                <span key={topic} className="rounded-md bg-white px-2 py-1 text-xs font-bold text-slate-600 dark:bg-white/10 dark:text-slate-300">{topic}</span>
                              ))}
                            </div>
                          </div>
                          <div className="rounded-md border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/5">
                            <h4 className="text-sm font-extrabold">Tools to practise</h4>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {phase.tools.map((tool) => (
                                <span key={tool} className="rounded-md bg-white px-2 py-1 text-xs font-bold text-slate-600 dark:bg-white/10 dark:text-slate-300">{tool}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 grid gap-2">
                          {phase.checklist.map((item, itemIndex) => {
                            const id = `${phaseIndex}-${itemIndex}`;
                            return (
                              <button key={item} type="button" onClick={() => {
                                setCheckedItems((current) => ({ ...current, [id]: !current[id] }));
                                if (!checkedItems[id]) completeAction(`Completed ${phase.phase}: ${item}`);
                              }} className="flex items-center gap-3 rounded-md border border-slate-200 bg-white p-3 text-left text-sm font-semibold transition hover:border-slate-500 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
                                <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border ${checkedItems[id] ? 'border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-950' : 'border-slate-300'}`}>{checkedItems[id] && <CheckCircle2 className="h-4 w-4" />}</span>
                                {item}
                              </button>
                            );
                          })}
                        </div>
                        <div className="mt-5 grid gap-4 md:grid-cols-2">
                          <Callout title="Build this" text={phase.miniProject} className="border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5" />
                          <Callout title="You should be able to" text={phase.outcome || phase.expectedOutcome} className="border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5" />
                        </div>
                        {phase.nextAction && (
                          <div className="mt-4 rounded-md border border-slate-200 bg-white p-4 text-sm shadow-sm dark:border-white/10 dark:bg-white/5">
                            <h4 className="font-extrabold">Next small step</h4>
                            <p className="mt-2 leading-6 text-slate-600 dark:text-slate-300">{phase.nextAction}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
            <RoadmapSkillsSidebar career={career} />
          </div>
        </Section>
      )}

      {activePanel === 'projects' && career.projects && (
        <Section id="projects" eyebrow="Portfolio projects" title="Build proof employers can inspect">
          <div className="grid gap-4 lg:grid-cols-2">
            {career.projects.map((project) => (
              <article key={project.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/5 dark:border-white/10 dark:bg-white/10">
                <div className="mb-4 inline-flex rounded-md bg-slate-100 px-2.5 py-1 text-xs font-extrabold uppercase tracking-wide text-slate-500 dark:bg-white/10 dark:text-slate-300">Portfolio proof</div>
                <h3 className="text-xl font-extrabold">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <ListBlock title="Skills used" items={project.skillsUsed || career.requiredSkills?.slice(0, 4) || []} />
                  <ListBlock title="Tools used" items={project.toolsUsed || career.tools?.slice(0, 4) || []} />
                </div>
                <Callout title="Why it helps applications" text={project.applicationValue || `Shows employers you can apply ${career.name} skills to a scoped, reviewable project with evidence.`} className="mt-4 bg-slate-50 dark:bg-white/5" />
              </article>
            ))}
          </div>
        </Section>
      )}

      {activePanel === 'projects' && (
        <Section id="final-project" eyebrow="Final project" title="Build and submit a job-ready capstone">
        <div className="grid gap-5 lg:grid-cols-[1fr_380px]">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-white/10">
            <h3 className="text-2xl font-extrabold">{career.name} capstone brief</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Build one complete project that combines the roadmap skills, tools, documentation, and interview story. This stays in your browser for now; you can share the URL or exported file with a mentor for manual review.
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <Callout title="Project scope" text={capstoneBrief.scope} />
              <Callout title="Required evidence" text={capstoneBrief.evidence} />
            </div>
            <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
              <h4 className="text-sm font-extrabold">Accuracy checklist</h4>
              <div className="mt-3 grid gap-2 md:grid-cols-2">
                {capstoneBrief.checks.map((check) => (
                  <div key={check} className="flex items-start gap-2 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    {check}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5 grid gap-4">
              <label className="grid gap-2 text-sm font-bold">Project title<Input className="rounded-md" value={projectSubmission.title} onChange={(event) => setProjectSubmission((current) => ({ ...current, title: event.target.value }))} /></label>
              <label className="grid gap-2 text-sm font-bold">Project URL or portfolio link<Input className="rounded-md" value={projectSubmission.url} onChange={(event) => setProjectSubmission((current) => ({ ...current, url: event.target.value }))} /></label>
              <label className="grid gap-2 text-sm font-bold">Project notes, tools, decisions, and result<textarea className="min-h-32 rounded-md border border-slate-200 bg-white p-3 text-sm dark:border-white/10 dark:bg-white/10" value={projectSubmission.notes} onChange={(event) => setProjectSubmission((current) => ({ ...current, notes: event.target.value }))} /></label>
              <label className="grid gap-2 text-sm font-bold">Self-review: what would you improve?<textarea className="min-h-24 rounded-md border border-slate-200 bg-white p-3 text-sm dark:border-white/10 dark:bg-white/10" value={projectSubmission.selfReview} onChange={(event) => setProjectSubmission((current) => ({ ...current, selfReview: event.target.value }))} /></label>
              <label className="flex cursor-pointer items-center justify-center gap-3 rounded-md border border-dashed border-slate-300 bg-slate-50 p-5 text-sm font-bold text-slate-600 dark:border-white/20 dark:bg-white/5 dark:text-slate-300">
                <Upload className="h-5 w-5" />
                {projectSubmission.fileName || 'Attach project brief, screenshot, or PDF locally'}
                <input type="file" className="hidden" onChange={(event) => setProjectSubmission((current) => ({ ...current, fileName: event.target.files?.[0]?.name || '' }))} />
              </label>
            </div>
          </div>
          <aside className="rounded-lg border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-white/10">
            <div className="flex items-center gap-3">
              <FileCheck2 className="h-8 w-8 text-slate-700 dark:text-slate-200" />
              <div>
                <p className="text-sm font-bold text-slate-500">Autonomous project rating</p>
                <div className="text-4xl font-extrabold">{capstoneScore.score}%</div>
              </div>
            </div>
            <div className="mt-5 h-2 rounded-full bg-slate-100 dark:bg-white/10"><div className="h-2 rounded-full bg-slate-900 dark:bg-white" style={{ width: `${capstoneScore.score}%` }} /></div>
            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{capstoneScore.feedback}</p>
            <div className="mt-5 grid gap-2">
              {capstoneScore.rubric.map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-2 text-sm dark:bg-white/5">
                  <span>{item.label}</span>
                  <span className="font-extrabold">{item.points}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 rounded-md bg-slate-50 p-3 text-xs font-semibold leading-5 text-slate-500 dark:bg-white/5">
              Rating is based on the submitted text, link, and attachment metadata. It checks role fit and evidence quality, but it does not inspect the external project itself.
            </p>
          </aside>
        </div>
        </Section>
      )}

      {activePanel === 'quiz' && (
        <Section id="quiz" eyebrow="Quiz" title="Test your readiness">
          <div className="rounded-lg border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-white/10 dark:bg-white/10">
            <h3 className="text-3xl font-extrabold">Start a timed quiz</h3>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">Choose Easy, Medium, or Hard, then start a 20-question timed quiz. Answers stay hidden until you submit.</p>
            <Button asChild className="mt-6 rounded-md"><Link to={`/quiz/${career.slug}/difficulty`}>Choose Difficulty</Link></Button>
          </div>
        </Section>
      )}

      {false && activePanel === 'quiz' && (
        <Section id="quiz-disabled" eyebrow="Quiz" title="Test your readiness">
        <div className="mb-5 flex flex-wrap gap-2">
          {['beginner', 'intermediate', 'advanced'].map((level) => (
            <Button key={level} variant={activeQuizLevel === level ? 'default' : 'outline'} className="rounded-md capitalize" onClick={() => {
              setActiveQuizLevel(level);
              setQuizIndex(0);
              setQuizDone(false);
            }}>{level}</Button>
          ))}
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/10">
          {quizDone ? (
            <div className="py-8 text-center">
              <h3 className="text-3xl font-extrabold">Quiz complete</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">Score: {activeScore}% ({activeCorrect.length}/{quizQuestions.length})</p>
              <div className="mx-auto mt-6 grid max-w-3xl gap-3 text-left">
                {quizQuestions.map((question, index) => {
                  const userAnswer = answers[question.id];
                  const isCorrect = userAnswer === question.correctAnswer;
                  return (
                    <article key={question.id} className="rounded-md border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
                      <div className="flex items-start justify-between gap-4">
                        <h4 className="font-extrabold">{index + 1}. {question.question}</h4>
                        <span className={`rounded-md px-2 py-1 text-xs font-bold ${isCorrect ? 'bg-emerald-500/10 text-emerald-700' : 'bg-rose-500/10 text-rose-700'}`}>
                          {isCorrect ? 'Correct' : 'Review'}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Your answer: <span className="font-bold">{userAnswer || 'Not answered'}</span></p>
                      {!isCorrect && <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Correct answer: <span className="font-bold">{question.correctAnswer}</span></p>}
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{question.explanation}</p>
                    </article>
                  );
                })}
              </div>
              <Button className="mt-6 rounded-md" onClick={() => {
                setQuizDone(false);
                setQuizIndex(0);
              }}>Retry</Button>
            </div>
          ) : currentQuiz && (
            <>
              <div className="mb-5 flex justify-between text-sm font-bold text-slate-500">
                <span>Question {quizIndex + 1} of {quizQuestions.length}</span>
                <span className="capitalize">{activeQuizLevel}</span>
              </div>
              <div className="mb-6 h-2 rounded-full bg-slate-100 dark:bg-white/10"><div className="h-2 rounded-full bg-slate-900 dark:bg-white" style={{ width: `${((quizIndex + 1) / quizQuestions.length) * 100}%` }} /></div>
              <h3 className="text-2xl font-extrabold">{currentQuiz.question}</h3>
              <div className="mt-6 grid gap-3">
                {currentQuiz.options.map((option) => {
                  const selected = answers[currentQuiz.id] === option;
                  return (
                    <button key={option} type="button" className={`rounded-md border p-4 text-left text-sm font-semibold transition ${selected ? 'border-slate-900 bg-slate-50 dark:border-white dark:bg-white/10' : 'border-slate-200 bg-white hover:border-slate-500 dark:border-white/10 dark:bg-white/5'}`} onClick={() => setAnswers((current) => ({ ...current, [currentQuiz.id]: option }))}>{option}</button>
                  );
                })}
              </div>
              <div className="mt-6 flex justify-between">
                <Button variant="outline" className="rounded-md" disabled={quizIndex === 0} onClick={() => setQuizIndex((value) => Math.max(0, value - 1))}>Previous</Button>
                {quizIndex === quizQuestions.length - 1 ? <Button className="rounded-md" onClick={() => setQuizDone(true)}>Finish quiz</Button> : <Button className="rounded-md" onClick={() => setQuizIndex((value) => Math.min(quizQuestions.length - 1, value + 1))}>Next</Button>}
              </div>
            </>
          )}
        </div>
        </Section>
      )}

      {activePanel === 'overview' && (career.faqs || faqs.length > 0) && (
        <Section id="faqs" eyebrow="FAQs" title={`${career.name} career questions`}>
          <div className="grid gap-3">
            {(career.faqs || faqs.map(([question, answer]) => ({ question, answer }))).map((faq) => (
              <article key={faq.question} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/10">
                <h3 className="font-extrabold">{faq.question}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
              </article>
            ))}
          </div>
        </Section>
      )}
    </main>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-500">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:border-slate-300 hover:shadow-md dark:border-white/10 dark:bg-white/10 dark:hover:border-white/20">
      <div className="text-xs font-bold uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-2 text-sm font-extrabold leading-5">{value}</div>
    </div>
  );
}

function MiniMetric({ label, value }) {
  return (
    <div className="rounded-md bg-slate-50 p-3 dark:bg-white/5">
      <div className="font-extrabold">{value}</div>
      <div className="text-[11px] font-bold uppercase text-slate-500">{label}</div>
    </div>
  );
}

function PhaseResources({ resources }) {
  if (!resources || (!resources.free?.length && !resources.paid?.length && !resources.specific?.length)) return null;

  const groups = [
    ['Free', resources.free || []],
    ['Paid', resources.paid || []],
    ['Role-specific', resources.specific || []]
  ].filter(([, items]) => items.length);

  return (
    <div className="mt-5 rounded-md border border-slate-200 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/5">
      <h4 className="text-sm font-extrabold">Resources</h4>
      <div className="mt-3 grid gap-3">
        {groups.map(([title, items]) => (
          <div key={title}>
            <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500">{title}</p>
            <div className="mt-1 grid gap-1.5">
              {items.slice(0, 4).map((item) => (
                <a
                  key={`${title}-${item.name}`}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start justify-between gap-2 rounded-md px-2 py-1.5 text-xs font-bold leading-5 text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  <span>{item.name}</span>
                  <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400 transition group-hover:text-slate-700 dark:group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SalaryCell({ label, value }) {
  return (
    <div className="rounded-md border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/5">
      <div className="text-[11px] font-bold uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-1 font-extrabold text-slate-950 dark:text-white">{value || 'N/A'}</div>
    </div>
  );
}

function ListBlock({ title, items, className = '' }) {
  return (
    <div className={`rounded-lg border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/5 ${className}`}>
      <h4 className="font-extrabold">{title}</h4>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => <span key={item} className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-200">{item}</span>)}
      </div>
    </div>
  );
}

function RoadmapSkillsSidebar({ career }) {
  const fallbackCore = career.requiredSkills.map((name) => ({
    name,
    explanation: `Core ${career.name} capability.`
  }));
  const groups = [
    ['Core skills', career.skillsDetailed?.core || fallbackCore],
    ['Technical skills', career.skillsDetailed?.technical || []],
    ['Tools', career.skillsDetailed?.tools || career.tools.map((name) => ({ name, explanation: 'Tool used in this role.' }))],
    ['Soft skills', career.skillsDetailed?.soft || []]
  ].filter(([, items]) => items.length);

  return (
    <aside className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/10">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Skills</p>
      <h3 className="mt-1 text-xl font-extrabold">Skills you will learn</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Use this list as a quick guide. The roadmap shows when to practise each skill.</p>
      <div className="mt-5 grid gap-5">
        {groups.map(([title, items]) => (
          <div key={title}>
            <h4 className="text-sm font-extrabold">{title}</h4>
            <div className="mt-3 grid gap-2">
              {items.slice(0, 6).map((item) => (
                <div key={item.name} className="rounded-md border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/5">
                  <p className="text-sm font-bold">{item.name}</p>
                  {item.explanation && <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">{item.explanation}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

function PlainPanel({ title, items }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/10">
      <h2 className="font-extrabold">{title}</h2>
      <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {items.map((item) => <li key={item}>- {item}</li>)}
      </ul>
    </div>
  );
}

function formatSalaryRange(value, index) {
  const spreads = [
    [0, 15],
    [-10, 15],
    [-15, 20]
  ];
  const [low, high] = spreads[index] || [-10, 15];
  return `$${Math.max(25, value + low)}k-$${value + high}k`;
}

function Callout({ title, text, className = '' }) {
  return (
    <div className={`rounded-md bg-white p-4 text-sm shadow-sm dark:bg-white/10 ${className}`}>
      <h4 className="mb-2 flex items-center gap-2 font-extrabold"><Target className="h-4 w-4" /> {title}</h4>
      <p className="leading-6 text-slate-600 dark:text-slate-300">{text}</p>
    </div>
  );
}

function getCapstoneBrief(career) {
  const finalRoadmapProject = career.roadmap?.[career.roadmap.length - 1]?.miniProject;
  const strongestProject = career.projects?.[0];
  const coreSkills = (career.requiredSkills || career.skills || []).slice(0, 5);
  const tools = (career.tools || []).slice(0, 5);

  return {
    scope:
      strongestProject?.description ||
      finalRoadmapProject ||
      `Build a complete ${career.name} project that solves a realistic problem, documents decisions, and proves the main skills from this roadmap.`,
    evidence: `Include a public link or attachment, README, setup notes, screenshots or demo, ${tools.slice(0, 3).join(', ') || 'role tools'}, validation evidence, tradeoffs, and one measurable outcome.`,
    checks: [
      `Uses at least two relevant ${career.name} skills`,
      'Includes setup or reproduction notes',
      'Shows validation, tests, evaluation, or review evidence',
      'Documents tradeoffs, risks, and next improvements',
      'Connects the project to a measurable user, business, or technical outcome',
      'Can be explained in an interview without relying on buzzwords'
    ],
    coreSkills,
    tools
  };
}

function scoreProject(submission, career, brief = getCapstoneBrief(career)) {
  const notes = `${submission.notes} ${submission.selfReview}`.toLowerCase();
  const hasTitle = submission.title.trim().length > 4;
  const hasUrl = /^https?:\/\//.test(submission.url.trim()) || submission.url.includes('.');
  const hasFile = Boolean(submission.fileName);
  const hasProjectEvidence = hasUrl || hasFile;
  const hasDepth = submission.notes.trim().length >= 220;
  const hasReflection = submission.selfReview.trim().length >= 90;
  const roleTerms = [career.name, ...(brief.coreSkills || []), ...(career.requiredSkills || [])]
    .map((term) => String(term).toLowerCase().split(/[ /,()-]/)[0])
    .filter((term) => term.length > 2);
  const toolTerms = (brief.tools || career.tools || [])
    .map((tool) => String(tool).toLowerCase().split(/[ /,()-]/)[0])
    .filter((tool) => tool.length > 2);
  const mentionsRoleSkills = roleTerms.some((term) => notes.includes(term));
  const mentionsTools = toolTerms.some((tool) => notes.includes(tool));
  const mentionsValidation = ['test', 'tested', 'evaluation', 'evaluate', 'validated', 'metric', 'benchmark', 'review', 'accessibility', 'security', 'quality'].some((word) => notes.includes(word));
  const mentionsOutcome = ['result', 'improved', 'reduced', 'increased', 'measured', 'metric', 'outcome', 'impact', 'latency', 'accuracy', 'conversion', 'cost'].some((word) => notes.includes(word));
  const mentionsTradeoff = ['tradeoff', 'trade-off', 'limitation', 'challenge', 'risk', 'constraint', 'fallback', 'alternative', 'compromise'].some((word) => notes.includes(word));
  const mentionsDocumentation = ['readme', 'setup', 'install', 'architecture', 'diagram', 'docs', 'documentation', 'runbook'].some((word) => notes.includes(word));
  const mentionsDeployment = ['deploy', 'deployed', 'live', 'production', 'hosted', 'docker', 'ci', 'github'].some((word) => notes.includes(word) || submission.url.toLowerCase().includes(word));

  const rubric = [
    { label: 'Clear project title', points: hasTitle ? 8 : 0 },
    { label: 'Reviewable evidence', points: hasProjectEvidence ? 14 : 0 },
    { label: 'Role skill fit', points: mentionsRoleSkills ? 14 : 0 },
    { label: 'Relevant tools used', points: mentionsTools ? 12 : 0 },
    { label: 'Detailed implementation notes', points: hasDepth ? 14 : 0 },
    { label: 'Validation or testing', points: mentionsValidation ? 12 : 0 },
    { label: 'Measurable outcome', points: mentionsOutcome ? 10 : 0 },
    { label: 'Documentation and setup', points: mentionsDocumentation ? 8 : 0 },
    { label: 'Deployment or reproducibility', points: mentionsDeployment ? 4 : 0 },
    { label: 'Reflection and tradeoffs', points: hasReflection && mentionsTradeoff ? 4 : hasReflection ? 2 : 0 }
  ];
  const score = rubric.reduce((sum, item) => sum + item.points, 0);

  let feedback = 'Add a title, reviewable link or attachment, implementation notes, role tools, validation evidence, and reflection to receive a meaningful rating.';
  if (score >= 85) feedback = 'Portfolio-ready direction. The submission connects role skills, tooling, validation, measurable impact, documentation, and tradeoffs.';
  else if (score >= 65) feedback = 'Good project foundation. Add stronger validation, measurable impact, setup notes, or tradeoff detail to make it interview-ready.';
  else if (score >= 40) feedback = 'Useful early draft. The project idea is visible, but it needs clearer role fit, evidence, validation, and outcome detail.';

  return { score, feedback, rubric };
}

function useLocalState(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setPersistedValue = (nextValue) => {
    setValue((currentValue) => {
      const resolved = typeof nextValue === 'function' ? nextValue(currentValue) : nextValue;
      window.localStorage.setItem(key, JSON.stringify(resolved));
      return resolved;
    });
  };

  return [value, setPersistedValue];
}
