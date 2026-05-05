import React from 'react';
import { Helmet } from 'react-helmet';
import { Clock } from 'lucide-react';

export default function ComingSoonPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-24">
      <Helmet>
        <title>Coming Soon | Career2Day</title>
      </Helmet>
      <Clock className="w-16 h-16 text-primary mb-6 animate-pulse" />
      <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
      <p className="text-lg text-muted-foreground mb-6 max-w-xl">
        This feature is under development and will be available soon. Stay tuned!
      </p>
    </div>
  );
}
