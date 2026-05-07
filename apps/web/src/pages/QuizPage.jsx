import React from 'react';
import SEOHead from '@/components/SEOHead.jsx';

export default function QuizPage() {
  return (
    <div className="min-h-[100dvh] bg-background py-16 flex flex-col items-center justify-center">
      <SEOHead title="Skill Quiz | Career2Day" />
      <div className="max-w-xl mx-auto text-center py-24">
        <h1 className="text-4xl font-bold mb-4">Skill Quiz</h1>
        <p className="text-muted-foreground mb-8 text-lg">Coming Soon</p>
      </div>
    </div>
  );
}
