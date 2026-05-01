
import React from 'react';
import { Helmet } from 'react-helmet';
import { BarChart3 } from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <Helmet>
        <title>Analytics | Admin Portal</title>
      </Helmet>

      <div>
        <h1 className="text-2xl font-bold tracking-tight">Platform Analytics</h1>
        <p className="text-muted-foreground">Deep dive into user behavior and feature usage.</p>
      </div>

      <div className="admin-card p-12 text-center min-h-[400px] flex flex-col items-center justify-center">
        <BarChart3 className="w-16 h-16 text-primary/50 mx-auto mb-6" />
        <h3 className="text-xl font-bold mb-2">Advanced Analytics Engine</h3>
        <p className="text-muted-foreground max-w-lg mx-auto">
          The comprehensive analytics dashboard is currently gathering baseline data. Full funnel visualization, retention cohorts, and feature heatmaps will be available shortly.
        </p>
      </div>
    </div>
  );
}
