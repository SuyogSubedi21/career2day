
import React from 'react';
import { Helmet } from 'react-helmet';
import { Bookmark, ArrowRight, DollarSign, TrendingUp, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import pb from '@/lib/pocketbaseClient';
import { toast } from 'sonner';

const DevOpsEngineerPage = () => {
  const handleBookmark = async () => {
    try {
      await pb.collection('savedCareers').create({
        userId: pb.authStore.model.id,
        careerPath: 'devops-engineer'
      }, { $autoCancel: false });
      toast.success('Career bookmarked successfully!');
    } catch (error) {
      toast.error('Failed to bookmark career or already bookmarked.');
    }
  };

  return (
    <div className="space-y-12 pb-12">
      <Helmet><title>DevOps Engineer Roadmap - CareerFlow</title></Helmet>
      
      <section className="relative rounded-3xl overflow-hidden h-[400px] flex items-end p-8">
        <img 
          src="https://images.unsplash.com/photo-1651044406530-3599eb67b3e9" 
          alt="DevOps infrastructure" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative z-10 text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">DevOps Engineer</h1>
          <p className="text-lg md:text-xl text-white/80 mb-6">
            Bridge the gap between development and operations. Master cloud platforms, CI/CD pipelines, and infrastructure as code.
          </p>
          <div className="flex gap-4">
            <Button onClick={handleBookmark} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Bookmark className="w-5 h-5 mr-2" /> Bookmark Career
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
              <Link to="/resume-builder">Build Resume</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
          <div className="p-3 bg-green-500/10 text-green-500 rounded-xl"><DollarSign className="w-6 h-6" /></div>
          <div>
            <p className="text-sm text-muted-foreground font-medium">Average Salary</p>
            <p className="text-2xl font-bold">$130k - $180k</p>
            <p className="text-xs text-muted-foreground mt-1">Entry: $85k | Senior: $180k+</p>
          </div>
        </div>
        <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
          <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl"><TrendingUp className="w-6 h-6" /></div>
          <div>
            <p className="text-sm text-muted-foreground font-medium">Job Demand</p>
            <p className="text-2xl font-bold">+25% Growth</p>
            <p className="text-xs text-muted-foreground mt-1">Extremely high demand</p>
          </div>
        </div>
        <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
          <div className="p-3 bg-purple-500/10 text-purple-500 rounded-xl"><MapPin className="w-6 h-6" /></div>
          <div>
            <p className="text-sm text-muted-foreground font-medium">Top Paying States</p>
            <p className="text-2xl font-bold">CA, VA, TX</p>
            <p className="text-xs text-muted-foreground mt-1">Tech & Defense hubs</p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Step-by-Step Roadmap</h2>
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-primary">Phase 1: Beginner</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Linux Fundamentals & Shell Scripting</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Networking Basics (TCP/IP, DNS, HTTP)</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Programming Language (Python or Go)</li>
              </ul>
              <div className="p-4 bg-muted rounded-xl">
                <p className="font-medium mb-2">Resources:</p>
                <a href="#" className="text-sm text-primary hover:underline block">Linux Journey</a>
                <a href="#" className="text-sm text-primary hover:underline block">Automate the Boring Stuff with Python</a>
              </div>
            </div>
            <div className="order-1 md:order-2 text-center md:text-left">
              <div className="text-8xl font-extrabold text-primary/10">01</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-right">
              <div className="text-8xl font-extrabold text-primary/10">02</div>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-primary">Phase 2: Intermediate</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Cloud Providers (AWS, Azure, or GCP)</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Containerization (Docker)</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> CI/CD Pipelines (GitHub Actions, Jenkins)</li>
              </ul>
              <div className="p-4 bg-muted rounded-xl">
                <p className="font-medium mb-2">Resources:</p>
                <a href="#" className="text-sm text-primary hover:underline block">AWS Certified Cloud Practitioner</a>
                <a href="#" className="text-sm text-primary hover:underline block">Docker Mastery (Udemy)</a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-primary">Phase 3: Advanced</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Container Orchestration (Kubernetes)</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Infrastructure as Code (Terraform, Ansible)</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Monitoring & Observability (Prometheus, Grafana)</li>
              </ul>
              <div className="p-4 bg-muted rounded-xl">
                <p className="font-medium mb-2">Resources:</p>
                <a href="#" className="text-sm text-primary hover:underline block">Kubernetes for the Absolute Beginners</a>
                <a href="#" className="text-sm text-primary hover:underline block">Terraform Up & Running (Book)</a>
              </div>
            </div>
            <div className="order-1 md:order-2 text-center md:text-left">
              <div className="text-8xl font-extrabold text-primary/10">03</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevOpsEngineerPage;
