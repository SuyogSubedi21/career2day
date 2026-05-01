
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import pb from '@/lib/pocketbaseClient';
import { Search, ChevronDown, CheckCircle2, Circle, AlertCircle, ArrowLeft, Loader2, Target, BookOpen, Lock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import FeatureLockWrapper from '@/components/FeatureLockWrapper.jsx';
import { useSubscription } from '@/hooks/useSubscription.js';

export default function InterviewPrepPage() {
  const { careerName } = useParams(); // Using the slug as ID
  const { isPremium } = useSubscription();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('Simple');
  const [expandedId, setExpandedId] = useState(null);
  const [completed, setCompleted] = useState({}); // Tracking completed questions

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      setError(null);
      try {
        // Find questions matching the career slug
        const records = await pb.collection('interviewQuestionsDatabase').getFullList({
          filter: careerName === 'general' ? '' : `careerSlug="${careerName}"`,
          sort: 'questionNumber',
          $autoCancel: false
        });
        
        // Load local progress if available
        const localProgress = localStorage.getItem(`progress_${careerName}`);
        if (localProgress) setCompleted(JSON.parse(localProgress));

        setQuestions(records);
      } catch (err) {
        console.error('Failed to fetch questions:', err);
        setError('Could not load interview questions. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [careerName]);

  const toggleComplete = (id) => {
    const newCompleted = { ...completed, [id]: !completed[id] };
    setCompleted(newCompleted);
    localStorage.setItem(`progress_${careerName}`, JSON.stringify(newCompleted));
  };

  const filteredQuestions = questions.filter(q => 
    q.difficulty === activeTab &&
    (q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
     q.explanation.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const totalQuestions = questions.length;
  const completedCount = Object.values(completed).filter(Boolean).length;
  const progressPercent = totalQuestions > 0 ? Math.round((completedCount / totalQuestions) * 100) : 0;

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background">
        <Loader2 className="w-12 h-12 animate-spin text-primary mb-4" />
        <p className="text-muted-foreground">Loading interview questions...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <Helmet>
        <title>Interview Prep | CareerFlow</title>
      </Helmet>

      {/* Header */}
      <div className="bg-muted/30 border-b border-border pt-12 pb-8 sticky top-16 z-30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/career-roadmaps" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to roadmaps
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
                <Target className="w-8 h-8 text-primary" />
                <span className="capitalize">{careerName === 'general' ? 'General' : careerName.replace('-', ' ')}</span> Interview Prep
                {!isPremium && <Lock className="w-6 h-6 text-amber-500" />}
              </h1>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Master your interview with hand-picked questions, detailed explanations, and progress tracking.
              </p>
            </div>
            
            <div className="bg-card border rounded-xl p-4 shadow-sm w-full md:w-64 shrink-0">
              <div className="flex justify-between text-sm mb-2 font-medium">
                <span>Progress</span>
                <span className="text-primary">{progressPercent}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                <div 
                  className="bg-primary h-2.5 rounded-full transition-all duration-500 ease-out" 
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-right">{completedCount} of {totalQuestions} answered</p>
            </div>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              type="text"
              placeholder="Search questions or answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 bg-background border-border text-foreground text-base shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <FeatureLockWrapper>
          {error ? (
            <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-8 text-center text-destructive">
              <AlertCircle className="w-8 h-8 mx-auto mb-3" />
              <p>{error}</p>
            </div>
          ) : totalQuestions === 0 ? (
            <div className="bg-muted/30 border border-dashed rounded-2xl p-16 text-center">
              <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">No questions available yet</h3>
              <p className="text-muted-foreground">We are actively building the database for this role.</p>
            </div>
          ) : (
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8 p-1 bg-card border rounded-xl h-auto">
                <TabsTrigger value="Simple" className="py-3 text-base rounded-lg data-[state=active]:bg-emerald-500/10 data-[state=active]:text-emerald-700 dark:data-[state=active]:text-emerald-400">Simple</TabsTrigger>
                <TabsTrigger value="Medium" className="py-3 text-base rounded-lg data-[state=active]:bg-primary/10 data-[state=active]:text-primary">Medium</TabsTrigger>
                <TabsTrigger value="Hard" className="py-3 text-base rounded-lg data-[state=active]:bg-destructive/10 data-[state=active]:text-destructive">Hard</TabsTrigger>
              </TabsList>

              <TabsContent value={activeTab} className="space-y-4 focus-visible:outline-none">
                {filteredQuestions.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground bg-card border border-dashed rounded-2xl">
                    No {activeTab.toLowerCase()} questions found matching your search.
                  </div>
                ) : (
                  filteredQuestions.map((q) => (
                    <div 
                      key={q.id} 
                      className={`bg-card border rounded-2xl overflow-hidden transition-all duration-200 ${
                        completed[q.id] ? 'border-emerald-500/30 bg-emerald-500/5' : 'hover:border-primary/30 hover:shadow-md'
                      }`}
                    >
                      <div 
                        className="p-6 cursor-pointer flex gap-4 items-start"
                        onClick={() => setExpandedId(expandedId === q.id ? null : q.id)}
                      >
                        <button 
                          className="mt-1 shrink-0 text-muted-foreground hover:text-emerald-600 transition-colors focus:outline-none"
                          onClick={(e) => { e.stopPropagation(); toggleComplete(q.id); }}
                          aria-label="Mark as complete"
                        >
                          {completed[q.id] ? (
                            <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                          ) : (
                            <Circle className="w-6 h-6" />
                          )}
                        </button>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                              Q {q.questionNumber}
                            </span>
                            <span className={`text-xs px-2 py-0.5 rounded-md font-medium ${
                              q.difficulty === 'Simple' ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400' :
                              q.difficulty === 'Medium' ? 'bg-primary/10 text-primary' :
                              'bg-destructive/10 text-destructive'
                            }`}>
                              {q.difficulty}
                            </span>
                            {q.category && (
                              <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-md">
                                {q.category}
                              </span>
                            )}
                          </div>
                          <h3 className="text-lg font-semibold text-foreground leading-snug pr-8">
                            {q.question}
                          </h3>
                        </div>

                        <div className="shrink-0 mt-1">
                          <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${expandedId === q.id ? 'rotate-180' : ''}`} />
                        </div>
                      </div>

                      {expandedId === q.id && (
                        <div className="px-6 pb-6 pt-2 border-t border-border/50 bg-muted/10">
                          <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-foreground/90 mt-4">
                            <h4 className="font-semibold text-primary mb-2">Explanation:</h4>
                            <p className="whitespace-pre-wrap">{q.explanation}</p>
                            
                            {q.practicalExample && (
                              <div className="mt-6 p-4 bg-background border rounded-xl">
                                <h4 className="font-semibold mb-2">Practical Example:</h4>
                                <p className="whitespace-pre-wrap text-muted-foreground italic">{q.practicalExample}</p>
                              </div>
                            )}
                          </div>
                          
                          <div className="mt-6 flex justify-end">
                            <Button 
                              variant={completed[q.id] ? "outline" : "default"} 
                              onClick={() => {
                                toggleComplete(q.id);
                                if (!completed[q.id]) setExpandedId(null);
                              }}
                            >
                              {completed[q.id] ? 'Mark as Unread' : 'Got it! Mark Complete'}
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </TabsContent>
            </Tabs>
          )}
        </FeatureLockWrapper>
      </div>
    </div>
  );
}
