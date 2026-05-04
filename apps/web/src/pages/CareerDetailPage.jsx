
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  ArrowLeft, Target, Map as MapIcon, Zap, TrendingUp, 
  Share2, BookmarkPlus, BookmarkCheck, ChevronRight,
  Briefcase, BrainCircuit, CheckCircle2, XCircle, RotateCcw, ArrowRight, AlertCircle, RefreshCcw, Lightbulb, UserCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SEOHead from '@/components/SEOHead.jsx';
import pb from '@/lib/pocketbaseClient.js';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import { useCurrency } from '@/contexts/CurrencyContext.jsx';
import CareerSkillsSection from '@/components/career/CareerSkillsSection.jsx';
import CareerRoadmapTimeline from '@/components/career/CareerRoadmapTimeline.jsx';
import CareerSalaryChart from '@/components/career/CareerSalaryChart.jsx';
import CareerInsightsSection from '@/components/career/CareerInsightsSection.jsx';
import { getCareerSalaryInfo } from '@/lib/utils/careerSalary.js';

const QUIZ_LEVELS = {
  Basic: { minutes: 10, labels: ['basic', 'simple'] },
  Intermediate: { minutes: 12, labels: ['intermediate', 'medium'] },
  Advanced: { minutes: 15, labels: ['advanced', 'hard'] }
};

const normalizeDifficulty = (value = '') => {
  const key = String(value).toLowerCase();
  if (QUIZ_LEVELS.Basic.labels.includes(key)) return 'Basic';
  if (QUIZ_LEVELS.Intermediate.labels.includes(key)) return 'Intermediate';
  if (QUIZ_LEVELS.Advanced.labels.includes(key)) return 'Advanced';
  return value;
};

const parseOptions = (options) => {
  if (Array.isArray(options)) return options;
  if (typeof options === 'string') {
    try {
      const parsed = JSON.parse(options);
      if (Array.isArray(parsed)) return parsed;
    } catch {
      return options.split('|').map(opt => opt.trim()).filter(Boolean);
    }
  }
  return [];
};

const formatTimer = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

export default function CareerDetailPage() {
  const { careerSlug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { convertSalary, getCurrencySymbol } = useCurrency();
  
  const [career, setCareer] = useState(null);
  const [skills, setSkills] = useState([]);
  const [roadmaps, setRoadmaps] = useState([]);
  const [interviewQuestions, setInterviewQuestions] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  
  const [loading, setLoading] = useState({
    career: true,
    skills: true,
    roadmaps: true,
    interviewQuestions: true,
    quizzes: true
  });
  
  const [errors, setErrors] = useState({
    career: null,
    skills: null,
    roadmaps: null,
    interviewQuestions: null,
    quizzes: null
  });

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [activeExamLevel, setActiveExamLevel] = useState(null);
  const [examQuestions, setExamQuestions] = useState([]);
  const [examAnswers, setExamAnswers] = useState({});
  const [examCurrentIndex, setExamCurrentIndex] = useState(0);
  const [examTimeLeft, setExamTimeLeft] = useState(0);
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [autoSubmitted, setAutoSubmitted] = useState(false);

  const queryParams = new URLSearchParams(location.search);
  const defaultTab = queryParams.get('tab') || 'overview';

  const fetchCareer = async () => {
    console.log(`[CareerDetailPage] Fetching career info for slug: ${careerSlug}`);
    setLoading(prev => ({ ...prev, career: true }));
    setErrors(prev => ({ ...prev, career: null }));
    try {
      const record = await pb.collection('careers').getFirstListItem(`slug="${careerSlug}"`, { $autoCancel: false });
      console.log(`[CareerDetailPage] Successfully fetched career: ${record.name}`);
      setCareer(record);
      
      if (pb.authStore.isValid && record.id) {
        try {
          await pb.collection('savedCareers').getFirstListItem(`careerPath="${record.id}" && userId="${pb.authStore.model.id}"`, { $autoCancel: false });
          setIsBookmarked(true);
        } catch (e) {
          setIsBookmarked(false);
        }
      }
    } catch (err) {
      console.error("[CareerDetailPage] Failed to fetch career:", err);
      setErrors(prev => ({ ...prev, career: "Career profile not found or unavailable." }));
    } finally {
      setLoading(prev => ({ ...prev, career: false }));
    }
  };

  const fetchSkills = async () => {
    console.log(`[CareerDetailPage] Fetching skills for career slug: ${careerSlug}`);
    setLoading(prev => ({ ...prev, skills: true }));
    setErrors(prev => ({ ...prev, skills: null }));
    try {
      const records = await pb.collection('careerSkills').getFullList({
        filter: `relatedCareers~"${careerSlug}"`,
        $autoCancel: false
      });
      console.log(`[CareerDetailPage] Fetched ${records.length} skills for ${careerSlug}`);
      const seenSkills = new Map();
      records.forEach(s => {
        const key = (s.skillName || '').toLowerCase();
        if (!seenSkills.has(key)) seenSkills.set(key, s);
      });
      setSkills(Array.from(seenSkills.values()));
    } catch (err) {
      console.error("[CareerDetailPage] Failed to fetch skills:", err?.message || err?.status || err);
      setErrors(prev => ({ ...prev, skills: `Failed to load skills: ${err?.message || err?.status || 'unknown error'}` }));
    } finally {
      setLoading(prev => ({ ...prev, skills: false }));
    }
  };

  const fetchRoadmaps = async () => {
    console.log(`[CareerDetailPage] Fetching roadmaps for career slug: ${careerSlug}`);
    setLoading(prev => ({ ...prev, roadmaps: true }));
    setErrors(prev => ({ ...prev, roadmaps: null }));
    try {
      const records = await pb.collection('careerRoadmaps').getList(1, 100, {
        filter: `careerSlug="${careerSlug}"`,
        sort: 'phase',
        $autoCancel: false
      });
      console.log(`[CareerDetailPage] Fetched ${records.items.length} roadmap phases`);
      const seenPhases = new Map();
      (records.items || []).forEach(r => {
        const key = r.phase ?? r.phaseTitle;
        if (!seenPhases.has(key)) seenPhases.set(key, r);
      });
      setRoadmaps(Array.from(seenPhases.values()));
    } catch (err) {
      console.error("[CareerDetailPage] Failed to fetch roadmaps:", err);
      setErrors(prev => ({ ...prev, roadmaps: "Failed to load roadmap." }));
    } finally {
      setLoading(prev => ({ ...prev, roadmaps: false }));
    }
  };

  const fetchInterviewQuestions = async () => {
    console.log(`[CareerDetailPage] Fetching interview questions from careerInterviewQuestions for slug: ${careerSlug}`);
    setLoading(prev => ({ ...prev, interviewQuestions: true }));
    setErrors(prev => ({ ...prev, interviewQuestions: null }));
    try {
      const records = await pb.collection('careerInterviewQuestions').getList(1, 100, {
        filter: `careerSlug="${careerSlug}"`,
        sort: 'questionNumber',
        $autoCancel: false
      });
      console.log(`[CareerDetailPage] Fetched ${records.items.length} interview questions`);
      setInterviewQuestions(records.items || []);
    } catch (err) {
      console.error("[CareerDetailPage] Failed to fetch interview questions:", err);
      setErrors(prev => ({ ...prev, interviewQuestions: "Failed to load interview questions." }));
    } finally {
      setLoading(prev => ({ ...prev, interviewQuestions: false }));
    }
  };

  const fetchQuizzes = async () => {
    console.log(`[CareerDetailPage] Fetching quizzes for career slug: ${careerSlug}`);
    setLoading(prev => ({ ...prev, quizzes: true }));
    setErrors(prev => ({ ...prev, quizzes: null }));
    try {
      const records = await pb.collection('careerQuizzes').getList(1, 100, {
        filter: `careerSlug="${careerSlug}"`,
        sort: 'difficulty,questionNumber',
        $autoCancel: false
      });
      console.log(`[CareerDetailPage] Fetched ${records.items.length} quizzes`);
      setQuizzes(records.items || []);
    } catch (err) {
      console.error("[CareerDetailPage] Failed to fetch quizzes:", err);
      setErrors(prev => ({ ...prev, quizzes: "Failed to load quizzes." }));
    } finally {
      setLoading(prev => ({ ...prev, quizzes: false }));
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    fetchCareer();
    fetchSkills();
    fetchRoadmaps();
    fetchInterviewQuestions();
    fetchQuizzes();
  }, [careerSlug]);

  useEffect(() => {
    if (!activeExamLevel || examSubmitted) return;
    const timer = setInterval(() => {
      setExamTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setAutoSubmitted(true);
          setExamSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [activeExamLevel, examSubmitted]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${career?.name || 'Career'} Profile`,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  const toggleBookmark = async () => {
    if (!pb.authStore.isValid) {
      toast.error("Please log in to save careers");
      navigate('/login');
      return;
    }
    
    if (!career?.id) return;
    
    try {
      if (isBookmarked) {
        const record = await pb.collection('savedCareers').getFirstListItem(`careerPath="${career.id}" && userId="${pb.authStore.model.id}"`, { $autoCancel: false });
        await pb.collection('savedCareers').delete(record.id, { $autoCancel: false });
        setIsBookmarked(false);
        toast.success("Career removed from saved list");
      } else {
        await pb.collection('savedCareers').create({
          userId: pb.authStore.model.id,
          careerPath: career.id
        }, { $autoCancel: false });
        setIsBookmarked(true);
        toast.success("Career saved successfully!");
      }
    } catch (err) {
      toast.error("Action failed. Please try again.");
    }
  };

  const getQuestionsForLevel = (level) => {
    return quizzes
      .filter(q => normalizeDifficulty(q.difficulty) === level)
      .sort((a, b) => (a.questionNumber || 0) - (b.questionNumber || 0))
      .slice(0, 10);
  };

  const startExam = (level) => {
    const levelQuestions = getQuestionsForLevel(level);
    if (levelQuestions.length < 10) {
      toast.error(`${level} level needs at least 10 questions. Currently found ${levelQuestions.length}.`);
      return;
    }

    setActiveExamLevel(level);
    setExamQuestions(levelQuestions);
    setExamAnswers({});
    setExamCurrentIndex(0);
    setExamTimeLeft(QUIZ_LEVELS[level].minutes * 60);
    setExamSubmitted(false);
    setAutoSubmitted(false);
  };

  const resetExam = () => {
    setActiveExamLevel(null);
    setExamQuestions([]);
    setExamAnswers({});
    setExamCurrentIndex(0);
    setExamTimeLeft(0);
    setExamSubmitted(false);
    setAutoSubmitted(false);
  };

  const submitExam = (isAuto = false) => {
    setAutoSubmitted(isAuto);
    setExamSubmitted(true);
  };

  const currentQuestion = examQuestions[examCurrentIndex];
  const answeredCount = Object.keys(examAnswers).length;
  const correctCount = examQuestions.reduce((acc, q) => {
    return acc + (examAnswers[q.id] === q.correctAnswer ? 1 : 0);
  }, 0);
  const scorePercent = examQuestions.length ? Math.round((correctCount / examQuestions.length) * 100) : 0;

  if (loading.career) {
    return (
      <div className="min-h-[100dvh] bg-background pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        <Skeleton className="h-4 w-64 mb-8" />
        <Skeleton className="h-64 w-full rounded-2xl" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Skeleton className="h-72 w-full rounded-2xl" />
          <Skeleton className="h-72 w-full rounded-2xl" />
        </div>
      </div>
    );
  }

  if (errors.career || !career) {
    return (
      <div className="min-h-[100dvh] bg-background flex flex-col items-center justify-center p-4 text-center">
        <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6">
          <MapIcon className="w-10 h-10 text-muted-foreground" />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-foreground">Career Not Found</h1>
        <p className="text-muted-foreground mb-8 max-w-md">{errors.career}</p>
        <div className="flex gap-4">
          <Button onClick={fetchCareer} variant="outline">Try Again</Button>
          <Button onClick={() => navigate('/careers')}>Browse Careers</Button>
        </div>
      </div>
    );
  }

  const salaryInfo = getCareerSalaryInfo(career);
  const avgSalaryConverted = salaryInfo.avg !== null ? convertSalary(salaryInfo.avg) : null;
  const entrySalaryConverted = salaryInfo.entry !== null ? convertSalary(salaryInfo.entry) : null;
  const seniorSalaryConverted = salaryInfo.senior !== null ? convertSalary(salaryInfo.senior) : null;

  const formatConvertedSalary = (amount) => {
    if (amount === null || amount === undefined || Number.isNaN(amount)) {
      return 'N/A';
    }
    return `${getCurrencySymbol()}${amount.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  };

  return (
    <div className="min-h-[100dvh] bg-background pb-24">
      <SEOHead 
        title={`${career.name} Career Path, Salary & Roadmap | Career2Day`}
        description={career.description || `Comprehensive guide to becoming a ${career.name}. Explore salary ranges, required skills, daily responsibilities, and a complete learning roadmap.`}
      />

      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link to="/careers" className="hover:text-foreground transition-colors">Careers</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-foreground font-medium">{career.name}</span>
        </div>
      </div>

      <div className="bg-card border-b border-border pt-10 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" onClick={() => navigate('/careers')} className="mb-6 -ml-4 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Careers
          </Button>
          
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight text-balance mb-4">
                {career.name}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-balance mb-8">
                {career.description || "In-depth career profile, compensation analytics, and professional roadmap."}
              </p>
              
              <div className="flex flex-wrap gap-4 mt-4 pb-4">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                  <TrendingUp className="w-4 h-4 mr-2 text-emerald-500" />
                  Avg: {formatConvertedSalary(avgSalaryConverted)}
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                  <Briefcase className="w-4 h-4 mr-2 text-blue-500" />
                  {career.jobDemand || 'Medium'} Demand
                </Badge>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 shrink-0 pt-2">
              <div className="flex items-center gap-3">
                <Button onClick={toggleBookmark} variant={isBookmarked ? "secondary" : "outline"} size="icon" className="rounded-full w-12 h-12" aria-label="Save Career">
                  {isBookmarked ? <BookmarkCheck className="w-5 h-5 text-primary" /> : <BookmarkPlus className="w-5 h-5" />}
                </Button>
                <Button onClick={handleShare} variant="outline" size="icon" className="rounded-full w-12 h-12" aria-label="Share Career">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
              <Button asChild className="gap-2 rounded-full w-full sm:w-auto" variant="default">
                <Link to={`/interview-questions/${career.slug}`}>
                  <UserCheck className="w-4 h-4" /> Practice Interview
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent h-auto p-0 mb-10 overflow-x-auto hide-scrollbar flex-nowrap">
            <TabsTrigger value="overview" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-4 font-semibold text-base whitespace-nowrap">
              <Target className="w-4 h-4 mr-2" /> Overview
            </TabsTrigger>
            <TabsTrigger value="skills" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-4 font-semibold text-base whitespace-nowrap">
              <Zap className="w-4 h-4 mr-2" /> Skills
            </TabsTrigger>
            <TabsTrigger value="roadmap" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-4 font-semibold text-base whitespace-nowrap">
              <MapIcon className="w-4 h-4 mr-2" /> Roadmap
            </TabsTrigger>
            <TabsTrigger value="interview" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-4 font-semibold text-base whitespace-nowrap text-amber-600 data-[state=active]:text-amber-600 data-[state=active]:border-amber-500">
              <BrainCircuit className="w-4 h-4 mr-2" /> Interview Prep
            </TabsTrigger>
            <TabsTrigger value="quiz" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-4 font-semibold text-base whitespace-nowrap text-violet-600 data-[state=active]:text-violet-600 data-[state=active]:border-violet-500">
              <CheckCircle2 className="w-4 h-4 mr-2" /> Career Quiz
            </TabsTrigger>
          </TabsList>

          <AnimatePresence mode="wait">
            <div className="min-h-[50vh]">
              
              {/* OVERVIEW TAB */}
              <TabsContent value="overview" className="animate-in fade-in-50 duration-500 m-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-8">
                    <Card className="border-border shadow-sm bg-card">
                      <CardHeader>
                        <CardTitle className="text-2xl">About this Role</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                          {career.overview || career.description || "No detailed overview available for this career."}
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-border shadow-sm bg-primary/5">
                      <CardHeader>
                        <CardTitle className="text-xl flex items-center text-primary">
                          <UserCheck className="w-5 h-5 mr-2" /> Prepare for the Interview
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-6">
                          Ready to test your knowledge? We have curated a list of specific interview questions designed for {career.name} roles.
                        </p>
                        <Button asChild>
                          <Link to={`/interview-questions/${career.slug}`}>
                            View Interview Questions <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="space-y-6">
                    <Card className="border-border shadow-sm bg-card">
                      <CardHeader>
                        <CardTitle className="text-xl">Salary Expectations</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex justify-between items-center pb-4 border-b border-border">
                          <span className="text-muted-foreground">Entry Level</span>
                          <span className="font-semibold">{formatConvertedSalary(entrySalaryConverted)}</span>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-border">
                          <span className="text-muted-foreground">Mid Level</span>
                          <span className="font-semibold text-primary">{formatConvertedSalary(avgSalaryConverted)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Senior Level</span>
                          <span className="font-semibold">{formatConvertedSalary(seniorSalaryConverted)}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                {/* Salary Chart — full width below the two-column layout */}
                <div className="mt-8">
                  <CareerSalaryChart career={career} />
                </div>
                {/* Market Insights — full width */}
                <div className="mt-8">
                  <CareerInsightsSection career={career} />
                </div>
              </TabsContent>

              {/* SKILLS TAB */}
              <TabsContent value="skills" className="animate-in fade-in-50 duration-500 m-0">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-3">Required Proficiencies</h2>
                  <p className="text-lg text-muted-foreground">Technical abilities, soft skills, and credentials employers look for.</p>
                </div>
                <CareerSkillsSection skills={skills} loading={loading.skills} error={errors.skills} />
              </TabsContent>

              {/* ROADMAP TAB */}
              <TabsContent value="roadmap" className="animate-in fade-in-50 duration-500 m-0">
                <div className="mb-8 max-w-3xl">
                  <h2 className="text-3xl font-bold text-foreground mb-3">Career Progression Roadmap</h2>
                  <p className="text-lg text-muted-foreground">Your step-by-step guide to advancing from foundational learning to professional mastery.</p>
                </div>
                <CareerRoadmapTimeline roadmaps={roadmaps} loading={loading.roadmaps} error={errors.roadmaps} />
              </TabsContent>

              {/* INTERVIEW QUESTIONS TAB */}
              <TabsContent value="interview" className="animate-in fade-in-50 duration-500 m-0">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-3">Interview Questions</h2>
                  <p className="text-lg text-muted-foreground">Practice with {interviewQuestions.length} specific questions curated for {career.name}.</p>
                </div>
                
                {loading.interviewQuestions ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map(i => <Skeleton key={i} className="h-32 w-full rounded-xl" />)}
                  </div>
                ) : errors.interviewQuestions ? (
                  <ErrorState message={errors.interviewQuestions} onRetry={fetchInterviewQuestions} />
                ) : interviewQuestions.length === 0 ? (
                  <EmptyState icon={BrainCircuit} title="No interview questions available" message="We are currently building the interview question database for this career." />
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {interviewQuestions.slice(0, 6).map((q, idx) => (
                        <Card key={q.id} className="bg-card border border-border shadow-sm hover:shadow-md transition-shadow hover:border-primary/50 cursor-pointer">
                          <CardContent className="p-5">
                            <div className="flex items-start justify-between gap-3 mb-3">
                              <Badge variant="outline" className="text-xs font-semibold bg-amber-500/10 text-amber-700 border-amber-200">Q{idx + 1}</Badge>
                              {q.difficulty && (
                                <Badge variant="secondary" className="text-xs font-medium">
                                  {q.difficulty}
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm font-semibold text-foreground line-clamp-3">{q.question}</p>
                            {q.category && (
                              <p className="text-xs text-muted-foreground mt-3">📂 {q.category}</p>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    <Button asChild className="w-full mt-6 h-12 text-base font-semibold rounded-xl bg-amber-600 hover:bg-amber-700 text-white gap-2">
                      <Link to={`/interview-questions/${careerSlug}`}>
                        <BrainCircuit className="w-4 h-4" />
                        Start Full Practice Session ({interviewQuestions.length} questions)
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                )}
              </TabsContent>

              {/* QUIZ TAB */}
              <TabsContent value="quiz" className="animate-in fade-in-50 duration-500 m-0">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-3">Career Knowledge Quiz</h2>
                  <p className="text-lg text-muted-foreground">Exam mode: 3 levels, 10 questions each, timed sessions, and instant scoring.</p>
                </div>
                
                {loading.quizzes ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map(i => <Skeleton key={i} className="h-40 w-full rounded-xl" />)}
                  </div>
                ) : errors.quizzes ? (
                  <ErrorState message={errors.quizzes} onRetry={fetchQuizzes} />
                ) : quizzes.length === 0 ? (
                  <EmptyState icon={CheckCircle2} title="No quizzes available yet" message="Quiz questions for this career are coming soon." />
                ) : activeExamLevel && !examSubmitted ? (
                  <div className="space-y-6">
                    <Card className="border border-border/50 bg-card">
                      <CardContent className="p-5">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                          <div>
                            <p className="text-sm text-muted-foreground">{activeExamLevel} Exam</p>
                            <h3 className="text-xl font-bold">Question {examCurrentIndex + 1} of {examQuestions.length}</h3>
                          </div>
                          <div className={`text-lg font-bold ${examTimeLeft <= 60 ? 'text-red-600' : 'text-primary'}`}>
                            Time Left: {formatTimer(examTimeLeft)}
                          </div>
                        </div>
                        <div className="w-full h-2 rounded-full bg-muted mt-4">
                          <div
                            className="h-2 rounded-full bg-primary transition-all"
                            style={{ width: `${((examCurrentIndex + 1) / examQuestions.length) * 100}%` }}
                          />
                        </div>
                      </CardContent>
                    </Card>

                    {currentQuestion && (
                      <Card className="border border-border/50 bg-card">
                        <CardContent className="p-6">
                          <Badge variant="outline" className="mb-4">Q{currentQuestion.questionNumber || examCurrentIndex + 1}</Badge>
                          <h4 className="text-xl font-semibold mb-6">{currentQuestion.question}</h4>
                          <div className="space-y-3">
                            {parseOptions(currentQuestion.options).map((opt, idx) => {
                              const isSelected = examAnswers[currentQuestion.id] === opt;
                              return (
                                <button
                                  key={`${currentQuestion.id}-${idx}`}
                                  type="button"
                                  onClick={() => setExamAnswers(prev => ({ ...prev, [currentQuestion.id]: opt }))}
                                  className={`w-full text-left p-4 rounded-xl border transition-all ${isSelected ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/40'}`}
                                >
                                  <span className="font-semibold mr-2">{String.fromCharCode(65 + idx)}.</span> {opt}
                                </button>
                              );
                            })}
                          </div>

                          <div className="flex flex-col sm:flex-row gap-3 mt-6">
                            <Button
                              variant="outline"
                              disabled={examCurrentIndex === 0}
                              onClick={() => setExamCurrentIndex(prev => Math.max(0, prev - 1))}
                            >
                              Previous
                            </Button>
                            {examCurrentIndex < examQuestions.length - 1 ? (
                              <Button onClick={() => setExamCurrentIndex(prev => Math.min(examQuestions.length - 1, prev + 1))}>
                                Next Question
                              </Button>
                            ) : (
                              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white" onClick={() => submitExam(false)}>
                                Submit Exam
                              </Button>
                            )}
                            <Button variant="ghost" className="sm:ml-auto" onClick={resetExam}>
                              Exit Exam
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                ) : activeExamLevel && examSubmitted ? (
                  <Card className="border border-border/50 bg-card">
                    <CardContent className="p-8 space-y-6">
                      <div className="text-center">
                        <h3 className="text-3xl font-bold mb-2">{activeExamLevel} Exam Result</h3>
                        <p className="text-muted-foreground">{autoSubmitted ? 'Time is up. Your exam was auto-submitted.' : 'Exam submitted successfully.'}</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="rounded-xl border border-border p-4 text-center">
                          <p className="text-sm text-muted-foreground">Score</p>
                          <p className="text-2xl font-bold">{scorePercent}%</p>
                        </div>
                        <div className="rounded-xl border border-border p-4 text-center">
                          <p className="text-sm text-muted-foreground">Correct</p>
                          <p className="text-2xl font-bold text-emerald-600">{correctCount}/10</p>
                        </div>
                        <div className="rounded-xl border border-border p-4 text-center">
                          <p className="text-sm text-muted-foreground">Answered</p>
                          <p className="text-2xl font-bold">{answeredCount}/10</p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button onClick={() => startExam(activeExamLevel)} className="bg-primary">
                          <RotateCcw className="w-4 h-4 mr-2" /> Retake {activeExamLevel}
                        </Button>
                        <Button variant="outline" onClick={resetExam}>Choose Another Level</Button>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="space-y-6">
                    {['Basic', 'Intermediate', 'Advanced'].map(difficulty => {
                      const diffQuizzes = getQuestionsForLevel(difficulty);
                      if (diffQuizzes.length === 0) return null;
                      
                      const difficultyColor = difficulty === 'Basic' ? 'text-green-600' : difficulty === 'Intermediate' ? 'text-amber-600' : 'text-red-600';
                      const difficultyBg = difficulty === 'Basic' ? 'bg-green-50 dark:bg-green-950' : difficulty === 'Intermediate' ? 'bg-amber-50 dark:bg-amber-950' : 'bg-red-50 dark:bg-red-950';
                      
                      return (
                        <div key={difficulty} className={`${difficultyBg} rounded-2xl p-6 border border-border/50`}>
                          <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${difficultyColor}`}>
                            {difficulty === 'Basic' ? '🟢' : difficulty === 'Intermediate' ? '🟡' : '🔴'} {difficulty} Level Exam
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4">10 questions • {QUIZ_LEVELS[difficulty].minutes} minutes • auto-submit on timeout</p>
                          
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                            {diffQuizzes.slice(0, 2).map((q, idx) => (
                              <Card key={q.id} className="bg-card border border-border/50 shadow-sm">
                                <CardContent className="p-4">
                                  <div className="flex items-start justify-between gap-3 mb-2">
                                    <Badge variant="outline" className="text-xs font-semibold">Q{q.questionNumber}</Badge>
                                  </div>
                                  <p className="text-sm font-semibold text-foreground line-clamp-2 mb-2">{q.question}</p>
                                  <div className="space-y-1">
                                    {parseOptions(q.options).slice(0, 2).map((opt, idx) => (
                                      <p key={idx} className="text-xs text-muted-foreground">• {opt}</p>
                                    ))}
                                    {parseOptions(q.options).length > 2 && <p className="text-xs text-muted-foreground">• +{parseOptions(q.options).length - 2} more</p>}
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                          
                          <Button onClick={() => startExam(difficulty)} className={`w-full font-semibold gap-2 ${difficulty === 'Basic' ? 'bg-green-600 hover:bg-green-700' : difficulty === 'Intermediate' ? 'bg-amber-600 hover:bg-amber-700' : 'bg-red-600 hover:bg-red-700'} text-white`}>
                            <CheckCircle2 className="w-4 h-4" />
                            Start {difficulty} Exam (10 Questions)
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </TabsContent>
            </div>
          </AnimatePresence>
        </Tabs>
      </div>
    </div>
  );
}

function ErrorState({ message, onRetry }) {
  return (
    <div className="text-center py-12 bg-destructive/5 rounded-2xl border border-destructive/20">
      <AlertCircle className="w-10 h-10 text-destructive mx-auto mb-4" />
      <h3 className="text-lg font-bold text-foreground mb-2">Failed to load content</h3>
      <p className="text-muted-foreground mb-6">{message}</p>
      <Button onClick={onRetry} variant="outline" className="gap-2">
        <RefreshCcw className="w-4 h-4" /> Try Again
      </Button>
    </div>
  );
}

function EmptyState({ icon: Icon, title, message }) {
  return (
    <div className="text-center py-16 bg-card rounded-2xl border border-border shadow-sm">
      <Icon className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground">{message}</p>
    </div>
  );
}
