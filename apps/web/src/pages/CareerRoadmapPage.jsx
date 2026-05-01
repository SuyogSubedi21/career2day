
import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Clock, Code2, Briefcase, Award, AlertCircle, BookOpen, ChevronRight, Layers, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import SEOHead from '@/components/SEOHead.jsx';
import pb from '@/lib/pocketbaseClient.js';

const formatSalary = (num) => {
  if (!num) return 'N/A';
  return new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: 'USD', 
    maximumFractionDigits: 0 
  }).format(num);
};

const getDemandBadgeVariant = (demand) => {
  if (!demand) return { bg: 'bg-muted', text: 'text-muted-foreground', label: 'Unknown' };
  const lower = demand.toLowerCase();
  if (lower === 'high') return { bg: 'bg-emerald-500/20', text: 'text-emerald-700 dark:text-emerald-400', label: 'High Demand' };
  if (lower === 'medium') return { bg: 'bg-amber-500/20', text: 'text-amber-700 dark:text-amber-400', label: 'Medium Demand' };
  if (lower === 'low') return { bg: 'bg-muted', text: 'text-muted-foreground', label: 'Low Demand' };
  return { bg: 'bg-muted', text: 'text-muted-foreground', label: demand };
};

export default function CareerRoadmapPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [career, setCareer] = useState(null);
  const [roadmaps, setRoadmaps] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCareerData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Fetch career by slug using getFirstListItem
      const careerData = await pb.collection('careers').getFirstListItem(`slug="${slug}"`, {
        $autoCancel: false
      });
      setCareer(careerData);

      // Fetch roadmap phases for this career
      const roadmapRecords = await pb.collection('careerRoadmaps').getFullList({
        filter: `careerSlug="${slug}"`,
        sort: 'phase',
        $autoCancel: false
      });
      // Deduplicate by phase number, keeping the latest record for each phase
      const seenPhases = new Map();
      roadmapRecords.forEach(r => {
        const key = r.phase ?? r.phaseTitle;
        if (!seenPhases.has(key)) seenPhases.set(key, r);
      });
      setRoadmaps(Array.from(seenPhases.values()));

      // Fetch projects for this career
      const projectRecords = await pb.collection('careerProjects').getFullList({
        filter: `careerSlug="${slug}"`,
        sort: 'difficulty',
        $autoCancel: false
      });
      // Deduplicate projects by title
      const seenProjects = new Map();
      projectRecords.forEach(r => {
        const key = r.projectTitle;
        if (!seenProjects.has(key)) seenProjects.set(key, r);
      });
      setProjects(Array.from(seenProjects.values()));

      // Fetch skills related to this career
      const skillRecords = await pb.collection('careerSkills').getFullList({
        $autoCancel: false
      });
      
      // Filter skills that include this career slug in relatedCareers
      const relatedSkills = skillRecords.filter(skill => {
        if (!skill.relatedCareers) return false;
        // Handle both array and string representations of relatedCareers
        if (Array.isArray(skill.relatedCareers)) {
          return skill.relatedCareers.includes(slug);
        }
        if (typeof skill.relatedCareers === 'string') {
          return skill.relatedCareers.includes(slug);
        }
        return false;
      });
      // Deduplicate skills by name
      const seenSkills = new Map();
      relatedSkills.forEach(s => {
        const key = (s.skillName || '').toLowerCase();
        if (!seenSkills.has(key)) seenSkills.set(key, s);
      });
      setSkills(Array.from(seenSkills.values()));

    } catch (err) {
      console.error('Error fetching career data:', err);
      // Determine if it's a 404 (not found) vs a network error
      if (err.status === 404) {
        setError('Career not found. The path may be invalid or has been removed.');
      } else {
        setError('Failed to load career details. Please check your connection and try again.');
      }
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchCareerData();
  }, [fetchCareerData]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Skeleton className="h-10 w-32 mb-8" />
          <Skeleton className="h-14 w-3/4 mb-4" />
          <Skeleton className="h-6 w-1/2 mb-8" />
          <div className="flex gap-4 mb-12">
            <Skeleton className="h-8 w-24 rounded-full" />
            <Skeleton className="h-8 w-32 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <Skeleton className="h-[400px] w-full rounded-2xl" />
              <Skeleton className="h-[300px] w-full rounded-2xl" />
            </div>
            <div className="space-y-8">
              <Skeleton className="h-[250px] w-full rounded-2xl" />
              <Skeleton className="h-[400px] w-full rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !career) {
    return (
      <div className="min-h-screen bg-background py-12 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive/10 text-destructive mb-6">
            <AlertCircle className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Oops! Something went wrong</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            {error || 'The career you are looking for could not be found.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={fetchCareerData} variant="default" className="w-full sm:w-auto font-bold h-12 px-8">
              Try Again
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto font-bold h-12 px-8 border-border">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const demandBadge = getDemandBadgeVariant(career.jobDemand);
  
  // Calculate total duration from roadmap phases if available
  let totalMonths = 0;
  if (roadmaps.length > 0) {
    roadmaps.forEach(phase => {
      if (phase.duration) {
        const match = phase.duration.match(/(\d+)/);
        if (match) totalMonths += parseInt(match[1]);
      }
    });
  }
  const timeToReady = totalMonths > 0 ? `~${totalMonths} months` : 'Timeline varies';

  return (
    <div className="min-h-screen bg-background py-12">
      <SEOHead 
        title={`${career.name} Career Roadmap & Salary | CareerMastery`}
        description={career.overview || career.description || `Explore the complete roadmap, required skills, and salary expectations for a ${career.name}.`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')} 
          className="mb-8 text-muted-foreground hover:text-foreground hover:bg-muted -ml-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Careers
        </Button>

        {/* Hero Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 tracking-tight text-balance">
            {career.name}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl text-balance">
            {career.overview || career.description || 'Explore this career path to learn more about responsibilities, skills, and earning potential.'}
          </p>
          
          <div className="flex flex-wrap items-center gap-3">
            <Badge className={`${demandBadge.bg} ${demandBadge.text} border-0 font-bold px-4 py-2 text-sm rounded-lg`}>
              <TrendingUp className="w-4 h-4 mr-2" />
              {demandBadge.label}
            </Badge>
            <Badge variant="secondary" className="bg-secondary text-secondary-foreground font-bold px-4 py-2 text-sm rounded-lg border-0">
              <Clock className="w-4 h-4 mr-2" />
              {timeToReady} to prepare
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Roadmap Section */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Layers className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Step-by-Step Roadmap</h2>
              </div>
              
              <div className="space-y-6">
                {roadmaps.length === 0 ? (
                  <Card className="bg-muted border-dashed border-2 border-border shadow-none">
                    <CardContent className="p-12 text-center">
                      <p className="text-muted-foreground font-medium">Detailed roadmap phases are currently being developed for this career.</p>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="relative pl-4 sm:pl-8 border-l-2 border-primary/20 space-y-10">
                    {roadmaps.map((phase, index) => (
                      <div key={phase.id || index} className="relative">
                        {/* Timeline Node */}
                        <div className="absolute -left-[21px] sm:-left-[41px] w-10 h-10 rounded-full bg-background border-4 border-primary flex items-center justify-center text-primary font-bold text-sm shadow-sm">
                          {phase.phase || index + 1}
                        </div>
                        
                        <Card className="bg-card border-border shadow-sm hover:shadow-md transition-shadow ml-6 sm:ml-8">
                          <CardContent className="p-6 sm:p-8">
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                              <div>
                                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                                  {phase.phaseTitle}
                                </h3>
                                {phase.duration && (
                                  <p className="text-muted-foreground flex items-center text-sm font-medium">
                                    <Clock className="w-4 h-4 mr-1" /> Estimated duration: {phase.duration}
                                  </p>
                                )}
                              </div>
                            </div>

                            {phase.skills && phase.skills.length > 0 && (
                              <div className="mb-6">
                                <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">Core Skills</p>
                                <div className="flex flex-wrap gap-2">
                                  {phase.skills.map((skill, i) => (
                                    <span key={i} className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-semibold">
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {phase.resources && phase.resources.length > 0 && (
                              <div className="pt-6 border-t border-border">
                                <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center">
                                  <BookOpen className="w-4 h-4 mr-2" /> Suggested Resources
                                </p>
                                <ul className="space-y-2">
                                  {phase.resources.map((resource, i) => (
                                    <li key={i} className="flex items-start text-sm text-card-foreground">
                                      <ChevronRight className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                                      <span className="leading-relaxed">{resource}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>

            {/* Projects Section */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Portfolio Projects</h2>
              </div>
              
              {projects.length === 0 ? (
                <Card className="bg-muted border-dashed border-2 border-border shadow-none">
                  <CardContent className="p-12 text-center">
                    <p className="text-muted-foreground font-medium">Project recommendations are coming soon.</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.map((project) => (
                    <Card key={project.id} className="bg-card border-border shadow-sm flex flex-col">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <h4 className="text-xl font-bold text-card-foreground leading-snug">{project.projectTitle}</h4>
                        </div>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                          {project.description}
                        </p>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                          {project.difficulty && (
                            <Badge variant="outline" className="border-border text-foreground font-medium">
                              {project.difficulty}
                            </Badge>
                          )}
                          {project.estimatedTime && (
                            <span className="text-xs text-muted-foreground font-medium flex items-center">
                              <Clock className="w-3 h-3 mr-1" /> {project.estimatedTime}
                            </span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </section>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Salary Card */}
            <Card className="bg-card border-border shadow-lg rounded-2xl overflow-hidden">
              <div className="bg-primary p-6 text-primary-foreground">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="w-6 h-6 opacity-80" />
                  <h3 className="text-xl font-bold">Salary Expectations</h3>
                </div>
                <p className="text-primary-foreground/80 text-sm">Average compensation based on experience level</p>
              </div>
              <CardContent className="p-0">
                <div className="divide-y divide-border">
                  <div className="p-6 flex flex-col gap-1">
                    <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Entry Level</span>
                    <span className="text-3xl font-extrabold text-foreground tabular-nums">
                      {formatSalary(career.entrySalary)}
                    </span>
                    <span className="text-sm text-muted-foreground">0-2 years experience</span>
                  </div>
                  <div className="p-6 flex flex-col gap-1 bg-muted/30">
                    <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Mid Level</span>
                    <span className="text-3xl font-extrabold text-foreground tabular-nums">
                      {formatSalary(career.midSalary)}
                    </span>
                    <span className="text-sm text-muted-foreground">3-5 years experience</span>
                  </div>
                  <div className="p-6 flex flex-col gap-1">
                    <span className="text-sm font-bold uppercase tracking-wider text-primary">Senior Level</span>
                    <span className="text-3xl font-extrabold text-primary tabular-nums">
                      {formatSalary(career.seniorSalary)}
                    </span>
                    <span className="text-sm text-muted-foreground">5+ years experience</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills Catalog */}
            <Card className="bg-card border-border shadow-sm rounded-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-card-foreground text-xl">
                  <Code2 className="w-5 h-5 mr-3 text-accent" />
                  Skill Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                {skills.length === 0 ? (
                  <p className="text-muted-foreground text-sm">No specific skills listed yet.</p>
                ) : (
                  <div className="space-y-6">
                    {/* Group skills by category if possible, otherwise list them */}
                    {Object.entries(
                      skills.reduce((acc, skill) => {
                        const cat = skill.category || 'General';
                        if (!acc[cat]) acc[cat] = [];
                        acc[cat].push(skill);
                        return acc;
                      }, {})
                    ).map(([category, catSkills]) => (
                      <div key={category}>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3 border-b border-border pb-2">
                          {category}
                        </h4>
                        <div className="flex flex-col gap-3">
                          {catSkills.map((skill) => (
                            <div key={skill.id} className="flex flex-col">
                              <div className="flex items-center justify-between">
                                <span className="font-semibold text-card-foreground text-sm">{skill.skillName}</span>
                                {skill.difficulty && (
                                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-muted text-muted-foreground uppercase tracking-wider">
                                    {skill.difficulty}
                                  </span>
                                )}
                              </div>
                              {skill.description && (
                                <span className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                  {skill.description}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}
