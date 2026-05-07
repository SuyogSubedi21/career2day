import React from 'react';
import { Helmet } from 'react-helmet';

export default function InterviewQuestionsPage() {
  return (
    <div className="min-h-[100dvh] bg-background py-16 flex flex-col items-center justify-center">
      <Helmet>
        <title>Interview Questions | Career2Day</title>
      </Helmet>
      <div className="max-w-xl mx-auto text-center py-24">
        <h1 className="text-4xl font-bold mb-4">Interview Questions</h1>
        <p className="text-muted-foreground mb-8 text-lg">Coming Soon</p>
      </div>
    </div>
  );
}
