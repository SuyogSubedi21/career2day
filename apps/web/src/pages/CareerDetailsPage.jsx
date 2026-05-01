
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import pb from '@/lib/pocketbaseClient';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Target, Briefcase, TrendingUp, Code, DollarSign, Users, Award, BookOpen, Loader2, BookMarked } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function CareerDetailsPage() {
  const { careerSlug } = useParams();
  const [career, setCareer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCareerDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const record = await pb.collection('careers').getFirstListItem(`slug="${careerSlug}"`, {
          $autoCancel: false
        });
        setCareer(record);
      } catch (err) {
        console.error('Failed to fetch career details:', err);
        setError('Could not find the requested career path.');
      } finally {
        setLoading(false);
      }
    };

    fetchCareerDetails();
  }, [careerSlug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !career) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
        <h2 className="text-2xl font-bold mb-4">Career Not Found</h2>
        <p className="text-muted-foreground mb-8 text-center">{error}</p>
        <Button asChild>
          <Link to="/career-roadmap"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Roadmaps</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-background pb-24">
      <Helmet>
        <title>{`${career.name} | CareerFlow`}</title>
      </Helmet>

      {/* Hero Section */}
      <div className="bg-muted/30 border-b border-border py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/career-roadmap" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to all careers
          </Link>
          
          <div className="flex flex-wrap gap-3 mb-6">
            {career.jobDemandOutlook && (
              <Badge className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/20 border-0 text-sm px-3 py-1">
                {career.jobDemandOutlook} Demand
              </Badge>
            )}
            <Badge variant="secondary" className="text-sm px-3 py-1 border-0">
              Technology
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            {career.name}
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl">
            {career.description || career.overview}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="h-14 px-8 text-base">
              <Link to={`/interview-prep/${career.slug}`}>
                <Target className="w-5 h-5 mr-2" /> Start Interview Prep
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-background" onClick={() => window.alert('Save to profile functionality coming soon')}>
              <BookMarked className="w-5 h-5 mr-2 text-muted-foreground" /> Save to Profile
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        
        {/* At a glance stats */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-2xl border shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="text-muted-foreground font-medium mb-1">Average Salary</h3>
            <p className="text-2xl font-bold text-foreground">
              ${career.averageSalary ? (career.averageSalary / 1000).toFixed(0) + 'k' : 'N/A'}
            </p>
          </div>

          <div className="bg-card p-6 rounded-2xl border shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary-foreground mb-4">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-muted-foreground font-medium mb-1">Growth Outlook</h3>
            <p className="text-2xl font-bold text-foreground capitalize">
              {career.jobDemandOutlook || 'Positive'}
            </p>
          </div>

          <div className="bg-card p-6 rounded-2xl border shadow-sm flex flex-col items-center text-center sm:col-span-2 md:col-span-1">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent-foreground mb-4">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-muted-foreground font-medium mb-1">Experience Needed</h3>
            <p className="text-2xl font-bold text-foreground">
              Entry to Senior
            </p>
          </div>
        </section>

        {/* Skills Required */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Code className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Required Skills</h2>
          </div>
          <div className="bg-card border rounded-2xl p-8 shadow-sm">
            {career.skillsRequired ? (
              <div className="space-y-8">
                {Object.entries(career.skillsRequired).map(([category, skills]) => (
                  <div key={category}>
                    <h3 className="text-lg font-semibold capitalize mb-4 text-foreground border-b pb-2">{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, i) => (
                        <span key={i} className="bg-muted text-foreground px-3 py-1.5 rounded-lg text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">Skill breakdown coming soon for this role.</p>
            )}
          </div>
        </section>

        {/* Salary Ranges */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Salary Progression</h2>
          </div>
          <div className="bg-card border rounded-2xl p-8 shadow-sm">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-muted/50 rounded-xl">
                <div>
                  <h4 className="font-bold text-lg">Entry Level</h4>
                  <p className="text-sm text-muted-foreground">0-2 years experience</p>
                </div>
                <div className="text-xl font-bold mt-2 sm:mt-0 text-foreground">
                  ${career.entrySalary ? (career.entrySalary / 1000).toFixed(0) + 'k' : '65k'}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-primary/5 rounded-xl border border-primary/20">
                <div>
                  <h4 className="font-bold text-lg text-primary">Mid Level</h4>
                  <p className="text-sm text-primary/70">3-5 years experience</p>
                </div>
                <div className="text-xl font-bold mt-2 sm:mt-0 text-primary">
                  ${career.averageSalary ? (career.averageSalary / 1000).toFixed(0) + 'k' : '95k'}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-muted/50 rounded-xl">
                <div>
                  <h4 className="font-bold text-lg">Senior Level</h4>
                  <p className="text-sm text-muted-foreground">5+ years experience</p>
                </div>
                <div className="text-xl font-bold mt-2 sm:mt-0 text-foreground">
                  ${career.seniorSalary ? (career.seniorSalary / 1000).toFixed(0) + 'k' : '140k+'}
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-6 text-center italic">
              * Salaries vary significantly by location, company size, and specific skill set.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary rounded-3xl p-10 text-center relative overflow-hidden text-primary-foreground shadow-lg">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to master the interview?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              We've compiled the 100 most common technical and behavioral questions specifically for {career.name} roles.
            </p>
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 text-lg px-8">
              <Link to={`/interview-prep/${career.slug}`}>
                Start Practice Mode <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

      </div>
    </div>
  );
}
