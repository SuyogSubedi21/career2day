
import React, { useState, useEffect } from 'react';
import { Target, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import pb from '@/lib/pocketbaseClient.js';
import { toast } from 'sonner';
import SEOHead from '@/components/SEOHead.jsx';

export default function PracticePage() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [answer, setAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const records = await pb.collection('interviewQuestions').getList(1, 10, { $autoCancel: false });
        setQuestions(records.items);
      } catch (error) {
        console.error('Error fetching questions:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  const handleStart = (q) => {
    setActiveQuestion(q);
    setAnswer('');
    setShowFeedback(false);
  };

  const handleSubmit = () => {
    if (!answer.trim()) {
      toast.error('Please provide an answer first.');
      return;
    }
    setShowFeedback(true);
    toast.success('Answer submitted! Review the feedback.');
  };

  if (activeQuestion) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24">
        <SEOHead title="Interview Practice | Career2Day" />
        <Button variant="ghost" onClick={() => setActiveQuestion(null)} className="mb-6 text-muted-foreground">← Back to Questions</Button>
        <Card className="bg-card border-border">
          <CardHeader>
            <div className="flex gap-2 mb-4">
              <Badge variant="outline" className="border-primary text-primary">{activeQuestion.difficulty}</Badge>
              <Badge variant="secondary" className="bg-secondary text-secondary-foreground">{activeQuestion.category}</Badge>
            </div>
            <CardTitle className="text-2xl text-foreground">{activeQuestion.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Your Answer</label>
              <Textarea 
                className="min-h-[150px] bg-background border-border text-foreground placeholder:text-muted-foreground" 
                placeholder="Type your answer here..."
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                disabled={showFeedback}
              />
            </div>
            
            {showFeedback && (
              <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl space-y-4">
                <h3 className="font-bold text-primary flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> Suggested Answer / Key Points</h3>
                <p className="text-foreground leading-relaxed">{activeQuestion.explanation}</p>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-end gap-4">
            {!showFeedback ? (
              <Button onClick={handleSubmit} className="bg-primary text-primary-foreground">Submit Answer</Button>
            ) : (
              <Button onClick={() => setActiveQuestion(null)} variant="outline" className="border-border text-foreground">Next Question</Button>
            )}
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <SEOHead title="Interview Practice | Career2Day" />
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-2">Interview Practice</h1>
        <p className="text-muted-foreground">Master your interview skills with real-world questions.</p>
      </div>

      {loading ? (
        <div className="text-foreground">Loading questions...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {questions.map((q) => (
            <Card key={q.id} className="bg-card border-border flex flex-col">
              <CardHeader>
                <div className="flex gap-2 mb-3">
                  <Badge variant="outline" className="border-primary text-primary">{q.difficulty}</Badge>
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">{q.category}</Badge>
                </div>
                <CardTitle className="text-lg text-foreground line-clamp-2">{q.question}</CardTitle>
              </CardHeader>
              <CardFooter className="mt-auto pt-6">
                <Button onClick={() => handleStart(q)} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Target className="w-4 h-4 mr-2" /> Start Practice
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
