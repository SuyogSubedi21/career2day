
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getQuizQuestions } from '@/data/quizData.js';
import { useQuiz } from '@/hooks/useQuiz.js';
import SEOHead from '@/components/SEOHead.jsx';

export default function QuizPage() {
  const { careerSlug, difficulty } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const data = getQuizQuestions(careerSlug, difficulty);
    if (!data || data.length === 0) {
      setError("No questions found for this configuration.");
    } else {
      setQuestions(data);
    }
  }, [careerSlug, difficulty]);

  const {
    currentQuestion,
    currentIndex,
    totalQuestions,
    selectedOption,
    answers,
    score,
    isFinished,
    selectAnswer,
    nextQuestion
  } = useQuiz(questions);

  // Navigate to results when finished
  useEffect(() => {
    if (isFinished && selectedOption) {
      // Small delay before auto-navigation, or rely on Next button
      // To give user control, we'll wait for them to click "View Results"
    }
  }, [isFinished, selectedOption]);

  if (error) {
    return (
      <div className="min-h-[100dvh] flex flex-col items-center justify-center p-4">
        <AlertCircle className="w-12 h-12 text-destructive mb-4" />
        <h2 className="text-2xl font-bold mb-4">Quiz Not Found</h2>
        <p className="text-muted-foreground mb-6">{error}</p>
        <Button asChild><Link to="/quiz">Back to Quizzes</Link></Button>
      </div>
    );
  }

  if (questions.length === 0 || !currentQuestion) {
    return <div className="min-h-[100dvh] flex items-center justify-center bg-background text-muted-foreground">Loading quiz data...</div>;
  }

  const progressPercentage = ((currentIndex) / totalQuestions) * 100;
  const isAnswered = selectedOption !== null;
  const isCurrentlyCorrect = isAnswered && selectedOption === currentQuestion.correctAnswer;

  const handleNext = () => {
    if (currentIndex === totalQuestions - 1) {
      navigate(`/quiz/${careerSlug}/${difficulty}/results`, {
        state: { answers, score, totalQuestions, careerSlug, difficulty }
      });
    } else {
      nextQuestion();
    }
  };

  return (
    <div className="min-h-[100dvh] bg-background py-8 sm:py-16">
      <SEOHead title="Technical Assessment in Progress" />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 w-full">
        {/* Header & Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Button variant="ghost" size="sm" asChild className="text-muted-foreground pl-0 hover:bg-transparent">
              <Link to={`/quiz/${careerSlug}/difficulty`}><ArrowLeft className="w-4 h-4 mr-2" /> Exit Quiz</Link>
            </Button>
            <span className="text-sm font-bold tracking-wider text-muted-foreground uppercase">
              Question {currentIndex + 1} / {totalQuestions}
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
            <motion.div 
              className="bg-primary h-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-card border-border shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-6 sm:p-10 flex flex-col gap-8">
                <h2 className="text-2xl sm:text-3xl font-semibold text-foreground leading-snug">
                  {currentQuestion.questionText}
                </h2>

                <div className="flex flex-col gap-3">
                  {currentQuestion.options.map((option) => {
                    const isSelected = selectedOption === option.id;
                    const isCorrect = option.id === currentQuestion.correctAnswer;
                    
                    let buttonClass = "justify-start h-auto py-4 px-6 text-left whitespace-normal border-2 hover:bg-muted";
                    
                    if (isAnswered) {
                      if (isCorrect) {
                        buttonClass = "justify-start h-auto py-4 px-6 text-left whitespace-normal border-2 bg-quiz-correct border-quiz-correct text-quiz-correct-foreground hover:bg-quiz-correct hover:text-quiz-correct-foreground opacity-100";
                      } else if (isSelected) {
                        buttonClass = "justify-start h-auto py-4 px-6 text-left whitespace-normal border-2 bg-quiz-incorrect border-quiz-incorrect text-quiz-incorrect-foreground hover:bg-quiz-incorrect hover:text-quiz-incorrect-foreground opacity-100";
                      } else {
                        buttonClass = "justify-start h-auto py-4 px-6 text-left whitespace-normal border-2 opacity-40 cursor-not-allowed";
                      }
                    }

                    return (
                      <Button
                        key={option.id}
                        variant="outline"
                        className={buttonClass}
                        onClick={() => selectAnswer(option.id)}
                        disabled={isAnswered}
                      >
                        <div className="flex items-start w-full">
                          <span className="font-bold mr-4 uppercase">{option.id}.</span>
                          <span className="flex-1">{option.text}</span>
                          {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 ml-2 flex-shrink-0" />}
                          {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 ml-2 flex-shrink-0" />}
                        </div>
                      </Button>
                    );
                  })}
                </div>

                <AnimatePresence>
                  {isAnswered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                      className="overflow-hidden"
                    >
                      <div className={`p-5 rounded-xl border ${isCurrentlyCorrect ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-900 dark:text-emerald-300' : 'bg-destructive/10 border-destructive/20 text-destructive'}`}>
                        <h4 className="font-bold flex items-center mb-2">
                          {isCurrentlyCorrect ? (
                            <><CheckCircle2 className="w-5 h-5 mr-2" /> Correct!</>
                          ) : (
                            <><XCircle className="w-5 h-5 mr-2" /> Incorrect</>
                          )}
                        </h4>
                        <p className="text-sm opacity-90 leading-relaxed">
                          {currentQuestion.explanation}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="pt-4 border-t border-border flex justify-end">
                  <Button 
                    size="lg" 
                    onClick={handleNext}
                    disabled={!isAnswered}
                    className="min-w-[140px]"
                  >
                    {currentIndex === totalQuestions - 1 ? 'View Results' : 'Next Question'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
