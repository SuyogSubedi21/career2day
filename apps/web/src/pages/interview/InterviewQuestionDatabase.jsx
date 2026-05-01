
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import pb from '@/lib/pocketbaseClient';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2, Search, Filter } from 'lucide-react';

const InterviewQuestionDatabase = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterDiff, setFilterDiff] = useState('All');

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await pb.collection('interviewQuestions').getList(1, 100, { $autoCancel: false });
        setQuestions(res.items);
      } catch (error) {
        console.error("Failed to fetch questions", error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  const filtered = questions.filter(q => {
    const matchesSearch = q.question.toLowerCase().includes(search.toLowerCase()) || q.careerPath.toLowerCase().includes(search.toLowerCase());
    const matchesDiff = filterDiff === 'All' || q.difficulty === filterDiff;
    return matchesSearch && matchesDiff;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      <Helmet><title>Question Database - CareerFlow</title></Helmet>
      
      <div className="glass-card p-8 rounded-3xl">
        <h1 className="text-3xl font-bold mb-4">Interview Question Database</h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              placeholder="Search questions or careers..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 bg-background/50"
            />
          </div>
          <select 
            value={filterDiff} 
            onChange={(e) => setFilterDiff(e.target.value)}
            className="h-10 px-3 rounded-md border bg-background"
          >
            <option value="All">All Difficulties</option>
            <option value="Simple">Simple</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center p-12"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
      ) : (
        <div className="grid gap-4">
          {filtered.map(q => (
            <div key={q.id} className="glass-card p-6 rounded-xl space-y-3">
              <div className="flex gap-2">
                <span className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary">{q.careerPath}</span>
                <span className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground">{q.difficulty}</span>
              </div>
              <h3 className="text-lg font-medium">{q.question}</h3>
              <details className="group">
                <summary className="text-sm text-primary cursor-pointer font-medium">View Expected Answer</summary>
                <div className="mt-3 p-4 bg-muted/50 rounded-lg text-sm text-muted-foreground whitespace-pre-wrap">
                  {q.expectedAnswer || "No answer provided."}
                </div>
              </details>
            </div>
          ))}
          {filtered.length === 0 && <div className="text-center p-8 text-muted-foreground">No questions found.</div>}
        </div>
      )}
    </div>
  );
};

export default InterviewQuestionDatabase;
