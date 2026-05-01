
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { PlayCircle, FileText, BarChart2, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import InterviewReadinessScore from '@/components/InterviewReadinessScore.jsx';

const InterviewDashboard = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      <Helmet><title>Interview Dashboard - CareerFlow</title></Helmet>
      
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Interview Prep Hub</h1>
        <p className="text-muted-foreground text-lg">Track your readiness and practice for your next big role.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <InterviewReadinessScore />
        </div>
        
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link to="/interview-practice" className="glass-card p-6 rounded-2xl hover:-translate-y-1 transition-transform group">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <PlayCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Practice Sessions</h3>
            <p className="text-sm text-muted-foreground">Answer questions one-by-one with a timer and get instant feedback.</p>
          </Link>
          
          <Link to="/interview-quizzes" className="glass-card p-6 rounded-2xl hover:-translate-y-1 transition-transform group">
            <div className="w-12 h-12 bg-purple-500/10 text-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Mock Quizzes</h3>
            <p className="text-sm text-muted-foreground">Take timed quizzes to simulate real interview pressure.</p>
          </Link>

          <Link to="/interview-progress" className="glass-card p-6 rounded-2xl hover:-translate-y-1 transition-transform group">
            <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BarChart2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
            <p className="text-sm text-muted-foreground">View detailed analytics on your performance over time.</p>
          </Link>

          <Link to="/interview-database" className="glass-card p-6 rounded-2xl hover:-translate-y-1 transition-transform group">
            <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Question Database</h3>
            <p className="text-sm text-muted-foreground">Browse our collection of 100+ interview questions by career path.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InterviewDashboard;
