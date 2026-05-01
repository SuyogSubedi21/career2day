
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, MessageSquare, Briefcase, Search, Loader2, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import pb from '@/lib/pocketbaseClient';
import { toast } from 'sonner';
import SEOHead from '@/components/SEOHead.jsx';
import AdPlaceholder from '@/components/AdPlaceholder.jsx';
import FeatureLockWrapper from '@/components/FeatureLockWrapper.jsx';
import { useSubscription } from '@/hooks/useSubscription.js';

export default function InterviewPracticePage() {
  const { isPremium } = useSubscription();
  const [careers, setCareers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      setIsLoading(true);
      const records = await pb.collection('interviewQuestionsDatabase').getFullList({
        fields: 'careerName,careerSlug',
        $autoCancel: false
      });
      
      const uniqueCareersMap = new Map();
      records.forEach(r => {
        if (!uniqueCareersMap.has(r.careerSlug)) {
          uniqueCareersMap.set(r.careerSlug, r.careerName);
        }
      });
      
      const uniqueCareers = Array.from(uniqueCareersMap, ([slug, name]) => ({ slug, name }));
      setCareers(uniqueCareers);
    } catch (error) {
      console.error('Error fetching careers:', error);
      toast.error('Failed to load careers.');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchQuestions = async (career) => {
    try {
      setIsLoading(true);
      setSelectedCareer(career);
      setAnswers({});
      
      const records = await pb.collection('interviewQuestionsDatabase').getFullList({
        filter: `careerSlug = "${career.slug}"`,
        $autoCancel: false
      });
      
      setQuestions(records);
    } catch (error) {
      console.error('Error fetching questions:', error);
      toast.error('Failed to load questions.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnswerSubmit = (qId) => {
    if (!answers[qId] || answers[qId].trim() === '') {
      toast.error('Please write an answer before submitting.');
      return;
    }
    toast.success('Answer submitted! Keep up the good practice.');
  };

  const filteredCareers = careers.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://careermastery.com" },
      { "@type": "ListItem", "position": 2, "name": "Interview Practice", "item": "https://careermastery.com/interview-practice" }
    ]
  };

  return (
    <div className="min-h-screen bg-muted/20 py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <SEOHead 
        title="Interview Practice - 50+ IT Careers | CareerMastery"
        description="Practice interviews for 50+ IT careers. Get sample questions and prepare for your dream job with CareerMastery."
        keywords="interview practice, IT interviews, interview questions, career preparation"
        ogUrl="https://careermastery.com/interview-practice"
        type="website"
        schema={breadcrumbSchema}
      />

      <div className="max-w-7xl mx-auto">
        <FeatureLockWrapper>
          <AnimatePresence mode="wait">
            {!selectedCareer ? (
              <motion.div
                key="career-list"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h1 className="text-3xl font-extrabold tracking-tight flex items-center gap-3">
                      Interview Practice
                      {!isPremium && <Lock className="w-6 h-6 text-amber-500" />}
                    </h1>
                    <p className="text-muted-foreground mt-2">Select a career path to practice real interview questions.</p>
                  </div>
                  <div className="relative w-full md:w-72">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input 
                      placeholder="Search careers..." 
                      className="pl-10 h-12 rounded-sm bg-card"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                <AdPlaceholder width="728px" height="90px" slotId="interview-top" className="mb-8" />

                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    {isLoading ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="h-32 bg-card rounded-md animate-pulse border border-border/50" />
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {filteredCareers.map((career) => (
                          <div 
                            key={career.slug}
                            onClick={() => fetchQuestions(career)}
                            className="group bg-card hover:bg-primary/5 border border-border hover:border-primary/30 rounded-md p-6 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md relative"
                          >
                            {!isPremium && <Lock className="absolute top-4 right-4 w-4 h-4 text-amber-500/50" />}
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                              <Briefcase className="w-6 h-6" />
                            </div>
                            <h3 className="font-semibold text-lg line-clamp-2">{career.name}</h3>
                          </div>
                        ))}
                        {filteredCareers.length === 0 && (
                          <div className="col-span-full py-12 text-center text-muted-foreground">
                            No careers found matching "{searchTerm}"
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <aside className="w-full lg:w-[300px] shrink-0">
                    <AdPlaceholder width="300px" height="250px" slotId="interview-sidebar" />
                  </aside>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="questions-view"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4 border-b border-border pb-6">
                  <Button variant="outline" size="icon" onClick={() => setSelectedCareer(null)} className="rounded-sm">
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <div>
                    <h1 className="text-3xl font-extrabold tracking-tight flex items-center gap-3">
                      {selectedCareer.name} Questions
                      {!isPremium && <Lock className="w-6 h-6 text-amber-500" />}
                    </h1>
                    <p className="text-muted-foreground mt-1">Practice your answers and boost your confidence.</p>
                  </div>
                </div>

                {isLoading ? (
                  <div className="flex justify-center py-20">
                    <Loader2 className="w-10 h-10 text-primary animate-spin" />
                  </div>
                ) : questions.length === 0 ? (
                  <div className="text-center py-20 bg-card rounded-md border border-border border-dashed">
                    <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">No Questions Found</h3>
                    <p className="text-muted-foreground mb-6">We're currently adding questions for this career path.</p>
                    <Button onClick={() => setSelectedCareer(null)}>Go Back</Button>
                  </div>
                ) : (
                  <div className="space-y-8 max-w-4xl mx-auto">
                    {questions.map((q, index) => (
                      <div key={q.id} className="bg-card border border-border rounded-md p-6 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider rounded-sm">
                            Question {index + 1}
                          </span>
                          <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-sm ${
                            q.difficulty === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900/30' :
                            q.difficulty === 'Intermediate' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30' :
                            'bg-red-100 text-red-700 dark:bg-red-900/30'
                          }`}>
                            {q.difficulty}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-6 leading-relaxed">{q.question}</h3>
                        
                        <div className="space-y-4">
                          <Textarea 
                            placeholder="Type your answer here to practice..."
                            className="min-h-[120px] resize-y bg-background focus-visible:ring-primary/50 text-foreground rounded-sm"
                            value={answers[q.id] || ''}
                            onChange={(e) => setAnswers({...answers, [q.id]: e.target.value})}
                          />
                          <div className="flex justify-between items-center">
                            <p className="text-xs text-muted-foreground">Your answer is private and not saved permanently.</p>
                            <Button onClick={() => handleAnswerSubmit(q.id)} className="rounded-sm">Submit Answer</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </FeatureLockWrapper>
      </div>
    </div>
  );
}
