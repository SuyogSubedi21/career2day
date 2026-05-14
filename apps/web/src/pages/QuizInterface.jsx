import React, { useMemo, useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Clock, Timer, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import SEOHead from '@/components/SEOHead.jsx';
import { getQuizQuestions } from '@/data/quizData.js';
import { getCareerPlatformBySlug } from '@/data/careerPlatformData.js';

const difficultyMinutes = {
  simple: 5,
  medium: 10,
  hard: 15
};

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${String(secs).padStart(2, '0')}`;
};

export default function QuizInterface() {
  const { careerSlug, difficulty } = useParams();
  const navigate = useNavigate();
  const career = getCareerPlatformBySlug(careerSlug);
  const careerName = career?.name || careerSlug.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const questions = useMemo(() => getQuizQuestions(careerSlug, difficulty), [careerSlug, difficulty]);
  const totalTime = (difficultyMinutes[difficulty] || 10) * 60;

  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const currentQuestion = questions[currentIndex];
  const selectedAnswer = currentQuestion ? answers[currentQuestion.id] : null;
  const answeredCount = Object.keys(answers).length;

  const submitQuiz = () => {
    const breakdown = questions.map((question) => {
      const selectedOption = answers[question.id] || null;
      return {
        question,
        selectedOption,
        isCorrect: selectedOption === question.correctAnswer
      };
    });
    const score = breakdown.filter((item) => item.isCorrect).length;

    navigate(`/quiz/${careerSlug}/${difficulty}/results`, {
      state: {
        answers: breakdown,
        score,
        totalQuestions: questions.length,
        careerSlug,
        difficulty
      }
    });
  };

  useEffect(() => {
    if (!started) return undefined;
    if (timeLeft <= 0) {
      submitQuiz();
      return undefined;
    }
    const timer = window.setTimeout(() => setTimeLeft((value) => value - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [started, timeLeft]);

  if (!questions.length) {
    return (
      <div className="min-h-[100dvh] bg-background px-4 py-20 text-center">
        <SEOHead title="Quiz Not Found | Career2Day" />
        <h1 className="text-3xl font-extrabold">Quiz not found</h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">We could not find questions for this career and difficulty.</p>
        <Button asChild className="mt-8"><Link to="/quiz">Back to quizzes</Link></Button>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="min-h-[100dvh] bg-background px-4 py-16">
        <SEOHead title={`${careerName} ${difficulty} Quiz | Career2Day`} />
        <div className="mx-auto max-w-3xl">
          <Button asChild variant="ghost" className="mb-8 -ml-3">
            <Link to={`/quiz/${careerSlug}/difficulty`}><ArrowLeft className="mr-2 h-4 w-4" /> Back</Link>
          </Button>
          <Card className="overflow-hidden rounded-2xl border-border bg-card shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="mb-8 inline-flex rounded-md bg-primary/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-primary">
                {difficulty} assessment
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground">{careerName} Quiz</h1>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Start a timed quiz. Answers and explanations are hidden during the attempt and only shown after you submit.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <InfoTile icon={CheckCircle2} label="Questions" value={questions.length} />
                <InfoTile icon={Timer} label="Timer" value={`${difficultyMinutes[difficulty] || 10} min`} />
                <InfoTile icon={Trophy} label="Results" value="After submit" />
              </div>
              <Button size="lg" className="mt-10 w-full rounded-md font-extrabold sm:w-auto" onClick={() => setStarted(true)}>
                Start Quiz
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] bg-background px-4 py-10">
      <SEOHead title={`${careerName} Quiz In Progress | Career2Day`} />
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Button asChild variant="ghost" className="-ml-3">
            <Link to={`/quiz/${careerSlug}/difficulty`}><ArrowLeft className="mr-2 h-4 w-4" /> Exit</Link>
          </Button>
          <div className={`inline-flex items-center rounded-md px-4 py-2 text-sm font-extrabold ${timeLeft < 60 ? 'bg-destructive/10 text-destructive' : 'bg-muted text-foreground'}`}>
            <Clock className="mr-2 h-4 w-4" /> {formatTime(timeLeft)}
          </div>
        </div>

        <Card className="rounded-2xl border-border bg-card shadow-lg">
          <CardContent className="p-6 md:p-10">
            <div className="mb-6 flex justify-between text-sm font-bold text-muted-foreground">
              <span>Question {currentIndex + 1} of {questions.length}</span>
              <span>{answeredCount}/{questions.length} answered</span>
            </div>
            <Progress value={((currentIndex + 1) / questions.length) * 100} className="mb-8 h-2" />
            <h1 className="text-2xl font-extrabold leading-snug text-foreground">{currentQuestion.questionText}</h1>
            <div className="mt-8 grid gap-3">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={`rounded-lg border p-4 text-left text-sm font-semibold transition ${selectedAnswer === option.id ? 'border-primary bg-primary/10 text-foreground' : 'border-border bg-background hover:border-primary/50'}`}
                  onClick={() => setAnswers((current) => ({ ...current, [currentQuestion.id]: option.id }))}
                >
                  <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full border border-current text-xs font-extrabold uppercase">{option.id}</span>
                  {option.text}
                </button>
              ))}
            </div>
            <div className="mt-8 flex items-center justify-between">
              <Button variant="outline" disabled={currentIndex === 0} onClick={() => setCurrentIndex((value) => Math.max(0, value - 1))}>Previous</Button>
              {currentIndex === questions.length - 1 ? (
                <Button onClick={submitQuiz}>Submit Quiz</Button>
              ) : (
                <Button onClick={() => setCurrentIndex((value) => Math.min(questions.length - 1, value + 1))}>Next</Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function InfoTile({ icon: Icon, label, value }) {
  return (
    <div className="rounded-xl border border-border bg-background p-4">
      <Icon className="mb-3 h-5 w-5 text-primary" />
      <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-1 text-xl font-extrabold text-foreground">{value}</p>
    </div>
  );
}
