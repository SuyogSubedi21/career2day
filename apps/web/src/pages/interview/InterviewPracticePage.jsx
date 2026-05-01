
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useAuth } from '@/contexts/AuthContext.jsx';
import pb from '@/lib/pocketbaseClient';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Clock, CheckCircle, XCircle, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';

const InterviewPracticePage = () => {
  const { currentUser } = useAuth();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [answer, setAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [sessionStats, setSessionStats] = useState({ attempted: 0, correct: 0 });

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await pb.collection('interviewQuestions').getList(1, 10, {
          sort: '@random',
          $autoCancel: false
        });
        setQuestions(res.items);
        if (res.items.length > 0) {
          setTimeLeft((res.items[0].timeLimit || 5) * 60);
        }
      } catch (error) {
        toast.error('Failed to load questions');
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && !showFeedback) {
      const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, showFeedback]);

  const currentQuestion = questions[currentIndex];

  const handleSubmit = async (isCorrect) => {
    setShowFeedback(true);
    const newStats = {
      attempted: sessionStats.attempted + 1,
      correct: sessionStats.correct + (isCorrect ? 1 : 0)
    };
    setSessionStats(newStats);

    try {
      await pb.collection('interviewProgress').create({
        userId: currentUser.id,
        careerPath: currentQuestion.careerPath || 'general',
        questionsAttempted: 1,
        correctAnswers: isCorrect ? 1 : 0,
        timeSpent: ((currentQuestion.timeLimit || 5) * 60) - timeLeft,
        accuracy: isCorrect ? 100 : 0
      }, { $autoCancel: false });
    } catch (error) {
      console.error("Failed to save progress", error);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1);
      setAnswer('');
      setShowFeedback(false);
      setTimeLeft((questions[currentIndex + 1].timeLimit || 5) * 60);
    } else {
      toast.success('Practice session complete!');
    }
  };

  if (loading) return <div className="flex justify-center p-12"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>;
  if (!currentQuestion) return <div className="text-center p-12">No questions available.</div>;

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12">
      <Helmet><title>Practice Session - CareerFlow</title></Helmet>
      
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Practice Session</h1>
        <div className="flex items-center gap-2 text-lg font-mono bg-muted px-4 py-2 rounded-lg">
          <Clock className="w-5 h-5 text-primary" />
          <span className={timeLeft < 60 ? 'text-destructive' : ''}>{formatTime(timeLeft)}</span>
        </div>
      </div>

      <div className="glass-card p-8 rounded-3xl space-y-6">
        <div className="flex gap-2 mb-4">
          <span className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary">{currentQuestion.difficulty}</span>
          <span className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground">{currentQuestion.questionType}</span>
        </div>
        
        <h2 className="text-xl font-medium">{currentQuestion.question}</h2>
        
        {!showFeedback ? (
          <div className="space-y-4">
            <Textarea 
              placeholder="Type your answer here..." 
              className="min-h-[200px] text-base"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => handleSubmit(false)}>Skip / Don't Know</Button>
              <Button onClick={() => handleSubmit(true)} disabled={!answer.trim()}>Submit Answer</Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <div className="p-4 rounded-xl bg-muted/50 border">
              <h3 className="font-semibold mb-2 text-sm text-muted-foreground">Your Answer:</h3>
              <p className="whitespace-pre-wrap">{answer || "Skipped"}</p>
            </div>
            
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
              <h3 className="font-semibold mb-2 text-primary flex items-center gap-2">
                <CheckCircle className="w-4 h-4" /> Expected Answer / Key Points:
              </h3>
              <p className="whitespace-pre-wrap text-sm">{currentQuestion.expectedAnswer || "No expected answer provided."}</p>
            </div>

            {currentQuestion.tips && (
              <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                <h3 className="font-semibold mb-1 text-yellow-700 dark:text-yellow-500 text-sm">Pro Tip:</h3>
                <p className="text-sm text-yellow-800 dark:text-yellow-400">{currentQuestion.tips}</p>
              </div>
            )}

            <div className="flex justify-between items-center pt-4">
              <p className="text-sm text-muted-foreground">
                Session: {sessionStats.correct}/{sessionStats.attempted} correct
              </p>
              <Button onClick={handleNext}>
                {currentIndex < questions.length - 1 ? 'Next Question' : 'Finish Session'} <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InterviewPracticePage;
