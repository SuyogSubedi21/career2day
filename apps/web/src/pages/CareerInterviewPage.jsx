
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import pb from '@/lib/pocketbaseClient';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import { BookOpen, TrendingUp, Target, Code, Loader2 } from 'lucide-react';

import Breadcrumbs from '@/components/Breadcrumbs';
import ProgressTracker from '@/components/interview/ProgressTracker';
import QuestionCard from '@/components/interview/QuestionCard';

export default function CareerInterviewPage() {
  const { careerName } = useParams();
  const [career, setCareer] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeDifficulty, setActiveDifficulty] = useState('Simple');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // 1. Fetch Career Data
        const careerRes = await pb.collection('careers').getFirstListItem(`slug="${careerName}"`, {
          $autoCancel: false
        });
        setCareer(careerRes);

        // 2. Fetch Questions for this career
        const questionsRes = await pb.collection('interviewQuestionsDatabase').getFullList({
          filter: `careerSlug="${careerName}"`,
          sort: 'questionNumber',
          $autoCancel: false
        });
        setQuestions(questionsRes);
      } catch (err) {
        console.error("Error loading career data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [careerName]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-primary mb-4" />
        <p className="text-muted-foreground font-medium">Loading career profile...</p>
      </div>
    );
  }

  if (!career) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-bold mb-4">Career Not Found</h1>
        <p className="text-muted-foreground mb-8">We couldn't find the interview guide for this career path.</p>
        <Link to="/interview-prep" className="text-primary hover:underline font-medium">Browse All Careers</Link>
      </div>
    );
  }

  const filteredQuestions = questions.filter(q => q.difficulty === activeDifficulty);

  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      <Helmet>
        <title>{career.name} Interview Questions | CareerFlow</title>
        <meta name="description" content={`Prepare for your ${career.name} interview with 100 role-specific questions and answers.`} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[
          { label: 'Interview Prep', path: '/interview-prep' },
          { label: career.name }
        ]} />

        {/* Career Header */}
        <div className="bg-card rounded-3xl border shadow-sm overflow-hidden mb-12">
          <div className="p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 items-start justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            
            <div className="max-w-3xl relative z-10">
              <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 text-sm py-1.5 px-4">
                Interview Guide
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight text-balance">
                {career.name}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {career.description || `Master the technical, behavioral, and situational concepts required to succeed in ${career.name} interviews.`}
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm font-medium">
                {career.averageSalary && (
                  <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-lg border">
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                    Avg. Salary: ${career.averageSalary.toLocaleString()}
                  </div>
                )}
                {career.jobDemandOutlook && (
                  <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-lg border">
                    <Target className="w-4 h-4 text-blue-500" />
                    Demand: {career.jobDemandOutlook}
                  </div>
                )}
              </div>
            </div>

            <div className="w-full lg:w-80 shrink-0 relative z-10">
              <ProgressTracker careerSlug={careerName} totalQuestions={questions.length || 100} />
            </div>
          </div>
        </div>

        {/* Two Column Layout for Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-12">
            
            <section id="questions">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                <h2 className="text-3xl font-bold">100 Interview Questions</h2>
              </div>

              <Tabs value={activeDifficulty} onValueChange={setActiveDifficulty} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8 p-1 bg-card border shadow-sm rounded-xl">
                  <TabsTrigger value="Simple" className="rounded-lg text-base">Simple (30)</TabsTrigger>
                  <TabsTrigger value="Medium" className="rounded-lg text-base">Medium (35)</TabsTrigger>
                  <TabsTrigger value="Hard" className="rounded-lg text-base">Hard (35)</TabsTrigger>
                </TabsList>
                
                <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 mb-8 text-sm text-foreground/80 flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p>
                    Showing <strong>{filteredQuestions.length} {activeDifficulty}</strong> questions. 
                    {activeDifficulty === 'Simple' && " Focus on core concepts and foundational knowledge."}
                    {activeDifficulty === 'Medium' && " Expect scenario-based and behavioral challenges."}
                    {activeDifficulty === 'Hard' && " Prepare for complex architectural, leadership, or deep technical problems."}
                  </p>
                </div>

                <div className="space-y-6">
                  {filteredQuestions.map((q) => (
                    <QuestionCard key={q.id} question={q} />
                  ))}
                  {filteredQuestions.length === 0 && (
                    <div className="text-center py-12 text-muted-foreground bg-card border border-dashed rounded-2xl">
                      No questions found for this difficulty level yet.
                    </div>
                  )}
                </div>
              </Tabs>
            </section>

          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4 space-y-8">
            {career.skillsRequired && Object.keys(career.skillsRequired).length > 0 && (
              <div className="bg-card rounded-2xl border p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" /> Core Skills Required
                </h3>
                <div className="flex flex-wrap gap-2">
                  {Object.values(career.skillsRequired).flat().slice(0, 15).map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-muted hover:bg-muted/80">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-muted/30 rounded-2xl border p-6">
              <h3 className="font-bold text-lg mb-4">Pro Interview Tips</h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">1.</span>
                  Use the STAR method (Situation, Task, Action, Result) for behavioral questions.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">2.</span>
                  Always clarify the requirements before answering technical scenarios.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">3.</span>
                  Highlight cross-functional collaboration and business impact, not just execution.
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
