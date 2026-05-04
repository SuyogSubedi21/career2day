
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Loader2, AlertCircle, RefreshCcw, Lightbulb, CheckCircle2, ChevronLeft, ChevronRight, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import pb from '@/lib/pocketbaseClient.js';
import { getQuestionsByCareer } from '@/lib/interviewQuestionsData.js';

export default function InterviewQuestionsPage() {
  const { careerSlug } = useParams();
  const navigate = useNavigate();
  
  const [career, setCareer] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const fetchData = async () => {
    console.log(`[InterviewQuestionsPage] Fetching data for career slug: ${careerSlug}`);
    setLoading(true);
    setError(null);
    try {
      let careerRecord = null;
      try {
        careerRecord = await pb.collection('careers').getFirstListItem(`slug="${careerSlug}"`, { $autoCancel: false });
        console.log(`[InterviewQuestionsPage] Fetched career: ${careerRecord.name}`);
      } catch (careerErr) {
        console.warn('[InterviewQuestionsPage] Could not fetch career from PocketBase, using slug fallback:', careerErr?.message || careerErr);
        const fallbackName = String(careerSlug || '')
          .split('-')
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join(' ');
        careerRecord = { name: fallbackName || 'Career', slug: careerSlug };
      }
      setCareer(careerRecord);

      let resolvedQuestions = [];

      // Primary source: per-career generated questions.
      try {
        const questionsRecords = await pb.collection('careerInterviewQuestions').getList(1, 100, {
          filter: `careerSlug="${careerSlug}"`,
          sort: 'questionNumber',
          $autoCancel: false,
        });
        resolvedQuestions = questionsRecords.items || [];
      } catch (primaryErr) {
        console.warn('[InterviewQuestionsPage] careerInterviewQuestions unavailable:', primaryErr?.message || primaryErr);
      }

      // Fallback: legacy interviewQuestions records keyed by career display name.
      if (!resolvedQuestions.length && careerRecord?.name) {
        try {
          const legacyQuestions = await pb.collection('interviewQuestions').getList(1, 100, {
            filter: `careerPath="${careerRecord.name}"`,
            sort: 'question',
            $autoCancel: false,
          });

          resolvedQuestions = (legacyQuestions.items || []).map((item, index) => ({
            id: item.id,
            questionNumber: index + 1,
            question: item.question,
            category: item.questionType || 'General',
            difficulty: item.difficulty || 'Intermediate',
            explanation: item.expectedAnswer || item.tips || '',
          }));
        } catch (legacyErr) {
          console.warn('[InterviewQuestionsPage] interviewQuestions fallback unavailable:', legacyErr?.message || legacyErr);
        }
      }

      // Final fallback: bundled static dataset to ensure every career has content.
      if (!resolvedQuestions.length) {
        resolvedQuestions = getQuestionsByCareer(careerSlug).map((item) => ({
          id: item.id,
          questionNumber: item.questionNumber,
          question: item.question,
          category: 'General',
          difficulty: 'Intermediate',
          explanation: item.answer,
        }));
      }

      console.log(`[InterviewQuestionsPage] Resolved ${resolvedQuestions.length} interview questions for ${careerSlug}.`);
      setQuestions(resolvedQuestions);
      setCurrentIndex(0);
      setShowAnswer(false);
    } catch (err) {
      console.error("[InterviewQuestionsPage] Failed to fetch interview questions:", err);
      setError("Failed to load interview questions. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (careerSlug) {
      fetchData();
    }
  }, [careerSlug]);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowAnswer(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setShowAnswer(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[100dvh] bg-background flex flex-col items-center justify-center p-4">
        <Loader2 className="w-10 h-10 animate-spin text-primary mb-4" />
        <p className="text-muted-foreground font-medium">Loading interview questions...</p>
      </div>
    );
  }

  if (error || !career) {
    return (
      <div className="min-h-[100dvh] bg-background flex flex-col items-center justify-center p-4 text-center">
        <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
          <AlertCircle className="w-10 h-10 text-destructive" />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-foreground">Content Unavailable</h1>
        <p className="text-muted-foreground mb-8 max-w-md">{error || "Career not found."}</p>
        <div className="flex gap-4">
          <Button onClick={fetchData} variant="outline" className="gap-2">
            <RefreshCcw className="w-4 h-4" /> Try Again
          </Button>
          <Button onClick={() => navigate('/careers')}>Browse Careers</Button>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-[100dvh] bg-background flex flex-col items-center justify-center p-4 text-center">
        <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6">
          <HelpCircle className="w-10 h-10 text-muted-foreground opacity-50" />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-foreground">No Questions Found</h1>
        <p className="text-muted-foreground mb-8 max-w-md">We don't have specific interview questions for {career.name} yet.</p>
        <Button onClick={() => navigate(`/careers/${careerSlug}`)}>Back to Career Profile</Button>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const getDifficultyColor = (diff) => {
    const d = (diff || '').toLowerCase();
    if (d === 'advanced' || d === 'hard') return 'destructive';
    if (d === 'intermediate' || d === 'medium') return 'default';
    return 'secondary';
  };

  return (
    <div className="min-h-[100dvh] bg-background pb-24">
      <Helmet>
        <title>{`${career.name} Interview Questions | Q${currentIndex + 1}`}</title>
        <meta name="description" content={`Practice interview questions for ${career.name}. Question ${currentIndex + 1} of ${questions.length}.`} />
      </Helmet>

      {/* Header */}
      <div className="bg-card border-b border-border py-8 px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <Button variant="ghost" onClick={() => navigate(`/careers/${careerSlug}`)} className="w-fit -ml-4 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Career Profile
          </Button>
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-2">
              {career.name} Interview Prep
            </h1>
            <p className="text-lg text-muted-foreground">
              Master these {questions.length} questions to ace your next interview.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <Badge variant="outline" className="px-3 py-1 text-sm font-semibold uppercase tracking-wider text-primary border-primary/30 bg-primary/10">
            Question {currentIndex + 1} of {questions.length}
          </Badge>
          <div className="flex gap-2">
            <Badge variant="outline" className="bg-muted/50">{currentQuestion.category || 'General'}</Badge>
            <Badge variant={getDifficultyColor(currentQuestion.difficulty)}>{currentQuestion.difficulty || 'Intermediate'}</Badge>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-border shadow-lg bg-card rounded-2xl overflow-hidden mb-8">
              <CardHeader className="bg-muted/30 border-b border-border/50 p-6 md:p-8">
                <CardTitle className="text-2xl md:text-3xl font-bold text-foreground leading-snug text-balance">
                  {currentQuestion.question}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                {!showAnswer ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                      <Lightbulb className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Think about your answer</h3>
                    <p className="text-muted-foreground text-center max-w-md mb-8">
                      Take a moment to formulate your response before revealing the recommended answer guide.
                    </p>
                    <Button size="lg" onClick={() => setShowAnswer(true)} className="font-bold px-8 h-12 rounded-xl">
                      Reveal Answer Guide
                    </Button>
                  </div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-primary/5 p-6 md:p-8 rounded-xl border border-primary/20"
                  >
                    <h4 className="font-bold text-foreground mb-4 flex items-center text-lg">
                      <CheckCircle2 className="w-6 h-6 mr-2 text-primary" /> Recommended Answer
                    </h4>
                    <div className="text-base text-muted-foreground leading-relaxed whitespace-pre-wrap">
                      {currentQuestion.explanation || "No detailed explanation provided for this question."}
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center pt-4 border-t border-border">
          <Button 
            variant="outline" 
            size="lg" 
            onClick={handlePrevious} 
            disabled={currentIndex === 0}
            className="font-semibold"
          >
            <ChevronLeft className="w-5 h-5 mr-2" /> Previous
          </Button>
          
          <Button 
            size="lg" 
            onClick={handleNext} 
            disabled={currentIndex === questions.length - 1}
            className="font-semibold"
          >
            Next <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
