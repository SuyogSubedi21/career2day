
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ToolsPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-8 text-center pt-24">
      <Helmet>
        <title>{`Career Tools - Salary Calculator, Job Market Analyzer | CareerFlow`}</title>
        <meta name="description" content="Use our free career tools: salary calculator, job market analyzer, skills gap analyzer, and career comparison tool." />
        <meta name="keywords" content="salary calculator, job market, career tools, skills analyzer, career comparison" />
        
        <meta property="og:title" content="Career Tools - Salary Calculator, Job Market Analyzer | CareerFlow" />
        <meta property="og:description" content="Use our free career tools: salary calculator, job market analyzer, skills gap analyzer, and career comparison tool." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://careerflow.example.com/tools" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Career Tools - Salary Calculator, Job Market Analyzer | CareerFlow" />
        <meta name="twitter:description" content="Use our free career tools: salary calculator, job market analyzer, skills gap analyzer, and career comparison tool." />
      </Helmet>
      
      <h1 className="text-4xl font-bold mb-4">Tools Hub</h1>
      <h2 className="text-xl font-medium text-muted-foreground mb-8 max-w-md">
        Access our suite of financial calculators and career planning tools. Coming soon.
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 w-full max-w-4xl text-left">
        <section className="glass-card p-6 rounded-2xl border border-border/50">
          <h2 className="text-xl font-bold mb-2">Salary Calculator</h2>
          <p className="text-muted-foreground">Calculate your actual take-home pay across different global locations and estimate tax obligations.</p>
        </section>
        <section className="glass-card p-6 rounded-2xl border border-border/50">
          <h2 className="text-xl font-bold mb-2">Job Market Analyzer</h2>
          <p className="text-muted-foreground">Analyze trends, hiring patterns, and demand for specific tech roles globally.</p>
        </section>
      </div>

      <Button asChild>
        <Link to="/"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Home</Link>
      </Button>
    </div>
  );
}
