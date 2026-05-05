import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ArrowRight, CheckCircle2, ChevronRight, FileCheck2, Target, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import SEOHead from '@/components/SEOHead.jsx';
import { allCareerSummaries, calculateReadinessScore, getCareerPlatformBySlug } from '@/data/careerPlatformData.js';
import { useRetention } from '@/hooks/useRetention.js';

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
  const capstoneScore = scoreProject(projectSubmission, career);

  return (
    <main className="min-h-screen bg-[#f8fafc] pb-20 text-slate-950 dark:bg-[#080b12] dark:text-white">
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

      <div className="sticky top-16 z-30 border-b border-slate-200 bg-white/95 backdrop-blur dark:border-white/10 dark:bg-[#080b12]/95">
        <div className="mx-auto flex max-w-7xl gap-5 overflow-x-auto px-4 py-2 text-sm font-bold sm:px-6 lg:px-8">
          {[
            ['Overview', '#overview'],
            ['Roadmap', '#roadmap'],
            ['Skills', '#skills'],
            ['Interview', '#interview'],
            ['Quiz', '#quiz'],
            ['Project upload', '#final-project']
          ].map(([label, href]) => (
            <a key={href} href={href} className="whitespace-nowrap border-b-2 border-transparent py-2 text-slate-500 transition hover:border-slate-900 hover:text-slate-950 dark:text-slate-300 dark:hover:border-white dark:hover:text-white">
              {label}
            </a>
          ))}
        </div>
      </div>

      <section className="px-4 py-12 sm:px-6 lg:px-8" id="overview">
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
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-md"><Link to="#roadmap">View Roadmap <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              <Button asChild variant="outline" className="rounded-md"><Link to="#skills">Skills to Learn</Link></Button>
              <Button asChild variant="outline" className="rounded-md"><Link to={`/interview-questions/${career.slug}`}>Interview Questions</Link></Button>
              <Button asChild variant="outline" className="rounded-md"><Link to={`/cv-builder?role=${career.slug}`}>Build CV</Link></Button>
            </div>
            {(career.responsibilities || career.industries) && (
              <div className="mt-8 grid gap-4 lg:grid-cols-2">
                {career.responsibilities && <PlainPanel title="Typical responsibilities" items={career.responsibilities} />}
                {career.industries && <PlainPanel title="Industries hiring this role" items={career.industries} />}
              </div>
            )}
          </div>
          <aside className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/10">
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

      <Section id="salary" eyebrow="Salary" title="Salary progression">
        <div className="grid gap-5 lg:grid-cols-[1fr_380px]">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/10">
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
            <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-slate-300">
              {career.salaryNote || 'Salaries vary by country, company, experience and market conditions. These are estimated global USD ranges.'}
            </div>
          </div>
        </div>
      </Section>

      <Section id="skills" eyebrow="Skills and tools" title="Learn these skills in order">
        <div className="grid gap-5 lg:grid-cols-4">
          <SkillCategory title="Core skills" items={career.skillsDetailed?.core || career.requiredSkills.map((name) => ({ name, explanation: `Core ${career.name} capability.`, whyItMatters: 'This skill appears repeatedly in job descriptions and interview tasks.' }))} />
          <SkillCategory title="Technical skills" items={career.skillsDetailed?.technical || []} />
          <SkillCategory title="Tools" items={career.skillsDetailed?.tools || career.tools.map((name) => ({ name, explanation: `Practical tool used by ${career.name}s.`, whyItMatters: 'Employers expect candidates to show hands-on practice, not only theory.' }))} />
          <SkillCategory title="Soft skills" items={career.skillsDetailed?.soft || []} />
        </div>
      </Section>

      <Section id="roadmap" eyebrow="Roadmap" title="Follow this path in order">
        <div className="sticky top-20 z-20 mb-5 rounded-lg border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-[#080b12]/95">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-extrabold">Progress: {roadmapCompletion}%</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">Weekly goal: {retention.completedActions}/{retention.weeklyGoal}. Continue with the next unchecked roadmap item.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button asChild className="rounded-md"><Link to={`/cv-builder?role=${career.slug}`}>Build CV</Link></Button>
              <Button asChild variant="outline" className="rounded-md"><Link to={`/interview-questions/${career.slug}`}>Practice Interview</Link></Button>
              <Button asChild variant="outline" className="rounded-md"><Link to="#quiz">Take Quiz</Link></Button>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {badges.length ? badges.map((badge) => <span key={badge} className="rounded-md bg-slate-100 px-3 py-1 text-xs font-bold dark:bg-white/10">{badge}</span>) : <span className="rounded-md bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500 dark:bg-white/10">No badges yet</span>}
          </div>
        </div>
        <div className="grid gap-4">
          {career.roadmap.map((phase, phaseIndex) => {
            const phaseComplete = phase.checklist.filter((_, itemIndex) => checkedItems[`${phaseIndex}-${itemIndex}`]).length;
            const percent = Math.round((phaseComplete / phase.checklist.length) * 100);
            return (
              <article key={phase.phase} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/10">
                <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
                  <div>
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-sm font-extrabold text-white dark:bg-white dark:text-slate-950">{phaseIndex + 1}</div>
                    <h3 className="text-2xl font-extrabold">{phase.phase}</h3>
                    <p className="mt-1 text-sm font-bold text-slate-500">{phase.timelineWeeks} weeks</p>
                    <div className="mt-4 h-2 rounded-full bg-slate-100 dark:bg-white/10"><div className="h-2 rounded-full bg-slate-900 dark:bg-white" style={{ width: `${percent}%` }} /></div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <DetailedSkillBlock phase={phase} phaseIndex={phaseIndex} career={career} />
                    <ListBlock title="Tools to practise" items={phase.tools} />
                    <div className="rounded-lg bg-slate-50 p-4 dark:bg-white/5 md:col-span-2">
                      <h4 className="font-extrabold">Mini project</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{phase.miniProject}</p>
                      <h4 className="mt-4 font-extrabold">Outcome</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{phase.outcome}</p>
                      {phase.nextAction && (
                        <>
                          <h4 className="mt-4 font-extrabold">Next action</h4>
                          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{phase.nextAction}</p>
                        </>
                      )}
                    </div>
                    <div className="grid gap-2 md:col-span-2">
                      {phase.checklist.map((item, itemIndex) => {
                        const id = `${phaseIndex}-${itemIndex}`;
                        return (
                          <button key={item} type="button" onClick={() => {
                            setCheckedItems((current) => ({ ...current, [id]: !current[id] }));
                            if (!checkedItems[id]) completeAction(`Completed ${phase.phase}: ${item}`);
                          }} className="flex items-center gap-3 rounded-md border border-slate-200 bg-white p-3 text-left text-sm font-semibold transition hover:border-slate-500 dark:border-white/10 dark:bg-white/5">
                            <span className={`flex h-5 w-5 items-center justify-center rounded border ${checkedItems[id] ? 'border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-950' : 'border-slate-300'}`}>{checkedItems[id] && <CheckCircle2 className="h-4 w-4" />}</span>
                            {item}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      {career.projects && (
        <Section id="projects" eyebrow="Portfolio projects" title="Build proof employers can inspect">
          <div className="grid gap-4 lg:grid-cols-2">
            {career.projects.map((project) => (
              <article key={project.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/10">
                <h3 className="text-xl font-extrabold">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <ListBlock title="Skills used" items={project.skillsUsed} />
                  <ListBlock title="Tools used" items={project.toolsUsed} />
                </div>
                <Callout title="Why it helps applications" text={project.applicationValue} className="mt-4 bg-slate-50 dark:bg-white/5" />
              </article>
            ))}
          </div>
        </Section>
      )}

      <Section id="final-project" eyebrow="Final project" title="Build and submit a job-ready capstone">
        <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/10">
            <h3 className="text-2xl font-extrabold">{career.name} capstone brief</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Build one complete project that combines the roadmap skills, tools, documentation, and interview story. This stays in your browser for now; you can share the URL or exported file with a mentor for manual review.
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <Callout title="Project scope" text={career.roadmap[career.roadmap.length - 1].miniProject} />
              <Callout title="Required evidence" text="README, screenshots or demo, tools used, tradeoffs, known limitations, and one measurable result or learning." />
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
          <aside className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/10">
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
            <p className="mt-5 rounded-md bg-slate-50 p-3 text-xs font-semibold text-slate-500 dark:bg-white/5">
              Manual mentor rating can be added later with a backend review queue. This version gives private local feedback only.
            </p>
          </aside>
        </div>
      </Section>

      <Section id="interview" eyebrow="Interview practice" title={`Open all 100 ${career.name} interview questions`}>
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                Interview practice opens on a dedicated page so the career roadmap stays clean. The interview page includes search, difficulty and topic filters, collapsible answers, common mistakes, practical examples, and local progress tracking.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <MiniMetric label="Beginner" value={career.interviewQuestions.filter((item) => item.difficulty === 'beginner').length} />
                <MiniMetric label="Intermediate" value={career.interviewQuestions.filter((item) => item.difficulty === 'intermediate').length} />
                <MiniMetric label="Advanced" value={career.interviewQuestions.filter((item) => item.difficulty === 'advanced').length} />
              </div>
            </div>
            <Button asChild className="rounded-md">
              <Link to={`/interview-questions/${career.slug}`}>Open interview questions <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section id="quiz" eyebrow="Quiz" title="Test your readiness">
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
                  const correct = option === currentQuiz.correctAnswer;
                  return (
                    <button key={option} type="button" className={`rounded-md border p-4 text-left text-sm font-semibold transition ${selected ? 'border-slate-900 bg-slate-50 dark:border-white dark:bg-white/10' : 'border-slate-200 bg-white hover:border-slate-500 dark:border-white/10 dark:bg-white/5'} ${selected && correct ? 'border-emerald-700' : ''}`} onClick={() => setAnswers((current) => ({ ...current, [currentQuiz.id]: option }))}>{option}</button>
                  );
                })}
              </div>
              {answers[currentQuiz.id] && <Callout title={answers[currentQuiz.id] === currentQuiz.correctAnswer ? 'Correct' : `Correct answer: ${currentQuiz.correctAnswer}`} text={currentQuiz.explanation} className="mt-5" />}
              <div className="mt-6 flex justify-between">
                <Button variant="outline" className="rounded-md" disabled={quizIndex === 0} onClick={() => setQuizIndex((value) => Math.max(0, value - 1))}>Previous</Button>
                {quizIndex === quizQuestions.length - 1 ? <Button className="rounded-md" onClick={() => setQuizDone(true)}>Finish quiz</Button> : <Button className="rounded-md" onClick={() => setQuizIndex((value) => Math.min(quizQuestions.length - 1, value + 1))}>Next</Button>}
              </div>
            </>
          )}
        </div>
      </Section>

      {(career.faqs || faqs.length > 0) && (
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
    <section id={id} className="px-4 py-10 sm:px-6 lg:px-8">
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
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/10">
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

function ListBlock({ title, items }) {
  return (
    <div className="rounded-lg bg-slate-50 p-4 dark:bg-white/5">
      <h4 className="font-extrabold">{title}</h4>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => <span key={item} className="rounded-md bg-white px-2 py-1 text-xs font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200">{item}</span>)}
      </div>
    </div>
  );
}

function SkillCategory({ title, items }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/10">
      <h3 className="text-xl font-extrabold">{title}</h3>
      <div className="mt-4 grid gap-3">
        {items.map((item) => (
          <div key={item.name} className="rounded-md bg-slate-50 p-3 dark:bg-white/5">
            <p className="font-extrabold">{item.name}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.explanation}</p>
            <p className="mt-2 text-xs font-semibold leading-5 text-slate-500 dark:text-slate-400">{item.whyItMatters}</p>
          </div>
        ))}
      </div>
    </div>
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

function DetailedSkillBlock({ phase, phaseIndex, career }) {
  const levelCopy = [
    'Foundation skills you must understand before moving into tools and workflows.',
    'Working skills that connect concepts into usable professional output.',
    'Production skills that improve quality, reliability, scale, and decision making.',
    'Job-ready skills that turn your work into portfolio proof, interview stories, and applications.'
  ];

  return (
    <div className="rounded-lg bg-slate-50 p-4 dark:bg-white/5">
      <h4 className="font-extrabold">Skills to master</h4>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{levelCopy[phaseIndex]}</p>
      <div className="mt-4 grid gap-3">
        {phase.topics.map((skill, index) => (
          <div key={skill} className="rounded-md border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-extrabold">{skill}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  Learn the concept, practise it with {phase.tools[index % phase.tools.length]}, then explain how it affects real {career.name} work.
                </p>
              </div>
              <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-bold text-slate-600 dark:bg-white/10 dark:text-slate-300">Level {phaseIndex + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Callout({ title, text, className = '' }) {
  return (
    <div className={`rounded-md bg-white p-4 text-sm shadow-sm dark:bg-white/10 ${className}`}>
      <h4 className="mb-2 flex items-center gap-2 font-extrabold"><Target className="h-4 w-4" /> {title}</h4>
      <p className="leading-6 text-slate-600 dark:text-slate-300">{text}</p>
    </div>
  );
}

function scoreProject(submission, career) {
  const notes = `${submission.notes} ${submission.selfReview}`.toLowerCase();
  const hasTitle = submission.title.trim().length > 4;
  const hasUrl = /^https?:\/\//.test(submission.url.trim()) || submission.url.includes('.');
  const hasFile = Boolean(submission.fileName);
  const hasDepth = submission.notes.trim().length > 180;
  const hasReflection = submission.selfReview.trim().length > 80;
  const mentionsTools = career.tools.some((tool) => notes.includes(tool.toLowerCase().split(' ')[0]));
  const mentionsOutcome = ['result', 'improved', 'measured', 'metric', 'outcome', 'learned'].some((word) => notes.includes(word));
  const mentionsTradeoff = ['tradeoff', 'limitation', 'challenge', 'improve', 'risk'].some((word) => notes.includes(word));

  const rubric = [
    { label: 'Clear title', points: hasTitle ? 10 : 0 },
    { label: 'Project link', points: hasUrl ? 15 : 0 },
    { label: 'Attachment', points: hasFile ? 10 : 0 },
    { label: 'Detailed notes', points: hasDepth ? 20 : 0 },
    { label: 'Tools mentioned', points: mentionsTools ? 15 : 0 },
    { label: 'Outcome evidence', points: mentionsOutcome ? 15 : 0 },
    { label: 'Reflection', points: hasReflection && mentionsTradeoff ? 15 : hasReflection ? 8 : 0 }
  ];
  const score = rubric.reduce((sum, item) => sum + item.points, 0);

  let feedback = 'Add a title, link, detailed notes, and reflection to receive a meaningful project rating.';
  if (score >= 85) feedback = 'Strong capstone. It includes proof, tools, outcome evidence, and reflection. This is close to portfolio-ready.';
  else if (score >= 65) feedback = 'Good progress. Add more measurable outcomes, tradeoffs, or documentation to make it recruiter-ready.';
  else if (score >= 40) feedback = 'Early draft. The idea is visible, but the submission needs clearer evidence, tools, and reflection.';

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
