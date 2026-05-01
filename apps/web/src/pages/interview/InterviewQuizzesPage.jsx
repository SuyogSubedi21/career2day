
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FileText, Clock, Award } from 'lucide-react';

const InterviewQuizzesPage = () => {
  // Placeholder for quizzes page to satisfy routing requirements
  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      <Helmet><title>Mock Quizzes - CareerFlow</title></Helmet>
      
      <div className="glass-card p-8 rounded-3xl text-center space-y-4">
        <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Award className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold">Mock Quizzes</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Test your knowledge under pressure with timed mock quizzes. This feature is currently being updated with new question sets.
        </p>
        <div className="pt-4">
          <Link to="/interview-practice" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            Try Practice Sessions Instead
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InterviewQuizzesPage;
