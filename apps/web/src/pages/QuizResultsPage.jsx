
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, Navigate, Link, useParams } from 'react-router-dom';
import { Award, RefreshCcw, LayoutList, ArrowLeft, CheckCircle2, XCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import SEOHead from '@/components/SEOHead.jsx';
import { useAuth } from '@/contexts/AuthContext.jsx';
import pb from '@/lib/pocketbaseClient.js';

export default function QuizResultsPage() {
  const location = useLocation();
  const params = useParams();
  const { currentUser } = useAuth();
  const [saveStatus, setSaveStatus] = useState('');
  const hasSavedRef = useRef(false);

  const hasResults = Boolean(location.state?.answers);
  const answers = location.state?.answers || [];
  const score = Number(location.state?.score || 0);
  const totalQuestions = Number(location.state?.totalQuestions || 0);
  const careerSlug = location.state?.careerSlug || params.careerSlug || '';
  const difficulty = location.state?.difficulty || '';
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
  
  let feedback = { text: '', color: '' };
  if (percentage >= 90) {
    feedback = { text: 'Excellent', color: 'text-emerald-500' };
  } else if (percentage >= 80) {
    feedback = { text: 'Good', color: 'text-primary' };
  } else if (percentage >= 70) {
    feedback = { text: 'Average', color: 'text-amber-500' };
  } else {
    feedback = { text: 'Needs Practice', color: 'text-destructive' };
  }

  useEffect(() => {
    if (!hasResults || !currentUser || hasSavedRef.current) return;
    hasSavedRef.current = true;

    const saveResults = async () => {
      setSaveStatus('Saving progress...');
      const completedAt = new Date().toISOString();
      const correctAnswers = score;
      const questionsAttempted = totalQuestions;

      try {
        await pb.collection('quizResults').create({
          userId: currentUser.id,
          careerSlug,
          difficulty,
          score,
          totalQuestions,
          percentage,
          answers,
          readinessLevel: feedback.text,
          completedAt
        }, { $autoCancel: false });
      } catch (error) {
        try {
          await pb.collection('quizResults').create({
            userId: currentUser.id,
            scores: { [careerSlug]: percentage },
            topCareers: [careerSlug]
          }, { $autoCancel: false });
        } catch (fallbackError) {
          console.warn('[QuizResultsPage] quizResults save skipped:', error, fallbackError);
        }
      }

      try {
        const existing = await pb.collection('userProgress').getList(1, 1, {
          filter: `userId="${currentUser.id}" && courseId="${careerSlug}"`,
          $autoCancel: false
        });

        if (existing.items.length > 0) {
          const record = existing.items[0];
          const newAttempted = Number(record.questionsAttempted || 0) + questionsAttempted;
          const newCorrect = Number(record.correctAnswers || 0) + correctAnswers;
          await pb.collection('userProgress').update(record.id, {
            questionsAttempted: newAttempted,
            correctAnswers: newCorrect,
            accuracy: newAttempted === 0 ? 0 : Math.round((newCorrect / newAttempted) * 100),
            lastUpdated: completedAt
          }, { $autoCancel: false });
        } else {
          await pb.collection('userProgress').create({
            userId: currentUser.id,
            courseId: careerSlug,
            questionsAttempted,
            correctAnswers,
            accuracy: percentage,
            lastUpdated: completedAt
          }, { $autoCancel: false });
        }
      } catch (error) {
        console.warn('[QuizResultsPage] userProgress save skipped:', error);
      }

      try {
        const existingReadiness = await pb.collection('userReadiness').getList(1, 1, {
          filter: `userId="${currentUser.id}"`,
          $autoCancel: false
        });

        if (existingReadiness.items.length > 0) {
          await pb.collection('userReadiness').update(existingReadiness.items[0].id, {
            overallScore: percentage,
            totalAccuracy: percentage,
            readinessLevel: feedback.text,
            lastUpdated: completedAt
          }, { $autoCancel: false });
        } else {
          await pb.collection('userReadiness').create({
            userId: currentUser.id,
            overallScore: percentage,
            totalAccuracy: percentage,
            totalQuestionsAttempted: questionsAttempted,
            readinessLevel: feedback.text,
            lastUpdated: completedAt
          }, { $autoCancel: false });
        }
      } catch (error) {
        console.warn('[QuizResultsPage] userReadiness save skipped:', error);
      }

      setSaveStatus('Saved to your account');
    };

    saveResults();
  }, [answers, careerSlug, currentUser, difficulty, feedback.text, hasResults, percentage, score, totalQuestions]);
  
  if (!hasResults) {
    return <Navigate to={`/careers/${params.careerSlug || ''}`} replace />;
  }

  return (
    <div className="min-h-[100dvh] bg-[linear-gradient(180deg,#f8fafc_0%,#eef2f7_100%)] py-12 dark:bg-[linear-gradient(180deg,#070b13_0%,#0b1220_100%)] md:py-20">
      <SEOHead title={`Quiz Results - ${score}/${totalQuestions}`} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <Card className="bg-card border-border shadow-xl rounded-2xl mb-12 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-emerald-500 opacity-50"></div>
          <CardContent className="p-8 md:p-12 text-center">
            <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Award className="w-12 h-12 text-primary" />
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              Quiz Completed!
            </h1>
            <p className="mb-6 text-sm font-bold text-muted-foreground">
              {currentUser ? saveStatus : 'Log in to save quiz progress across devices.'}
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
              <div className="text-center">
                <p className="text-muted-foreground text-sm uppercase tracking-wider font-bold mb-1">Final Score</p>
                <p className="text-4xl md:text-5xl font-black text-foreground">{score}<span className="text-2xl text-muted-foreground">/{totalQuestions}</span></p>
              </div>
              <div className="hidden md:block w-px h-16 bg-border"></div>
              <div className="text-center">
                <p className="text-muted-foreground text-sm uppercase tracking-wider font-bold mb-1">Performance</p>
                <p className={`text-4xl md:text-5xl font-black ${feedback.color}`}>{percentage}%</p>
                <p className={`text-sm font-bold ${feedback.color}`}>{feedback.text}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="min-w-[160px]">
                <Link to={`/quiz/${careerSlug}/${difficulty}`}>
                  <RefreshCcw className="w-4 h-4 mr-2" /> Retake Quiz
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="min-w-[160px]">
                <Link to={`/quiz/${careerSlug}/difficulty`}>
                  <LayoutList className="w-4 h-4 mr-2" /> Change Difficulty
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-w-[160px]">
                <Link to={`/careers/${careerSlug}`}>
                  <ArrowLeft className="w-4 h-4 mr-2" /> Career Path
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mb-6 text-foreground">Answer Breakdown</h2>
        <Card className="bg-card border-border rounded-xl">
          <CardContent className="p-2 sm:p-6">
            <Accordion type="single" collapsible className="w-full">
              {answers.map((ans, index) => (
                <AccordionItem key={ans.question.id} value={ans.question.id} className="border-border">
                  <AccordionTrigger className="hover:no-underline text-left py-4 px-2 hover:bg-muted/50 rounded-lg transition-colors">
                    <div className="flex items-start gap-3">
                      {ans.isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-quiz-correct mt-0.5 flex-shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-quiz-incorrect mt-0.5 flex-shrink-0" />
                      )}
                      <span className="font-medium text-foreground leading-snug">
                        <span className="text-muted-foreground mr-2">{index + 1}.</span>
                        {ans.question.questionText}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-10 pb-6 pt-2">
                    <div className="bg-muted rounded-lg p-4 space-y-3">
                      <p className="text-sm font-medium text-muted-foreground">
                        Your Answer: <span className={`font-bold ${ans.isCorrect ? 'text-quiz-correct' : 'text-quiz-incorrect'}`}>
                          {ans.question.options.find(o => o.id === ans.selectedOption)?.text || ans.selectedOption}
                        </span>
                      </p>
                      {!ans.isCorrect && (
                        <p className="text-sm font-medium text-muted-foreground">
                          Correct Answer: <span className="font-bold text-quiz-correct">
                            {ans.question.options.find(o => o.id === ans.question.correctAnswer)?.text || ans.question.correctAnswer}
                          </span>
                        </p>
                      )}
                      <div className="mt-4 pt-4 border-t border-border/50">
                        <p className="text-sm leading-relaxed text-foreground">
                          <span className="font-bold block mb-1">Explanation:</span>
                          {ans.question.explanation}
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
