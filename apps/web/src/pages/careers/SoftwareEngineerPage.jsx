
import React from 'react';
import { Helmet } from 'react-helmet';
import { Bookmark, ArrowRight, DollarSign, TrendingUp, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import pb from '@/lib/pocketbaseClient';
import { toast } from 'sonner';

const SoftwareEngineerPage = () => {
  const handleBookmark = async () => {
    try {
      await pb.collection('savedCareers').create({
        userId: pb.authStore.model.id,
        careerPath: 'software-engineer'
      }, { $autoCancel: false });
      toast.success('Career bookmarked successfully!');
    } catch (error) {
      toast.error('Failed to bookmark career or already bookmarked.');
    }
  };

  return (
    <div className="space-y-12 pb-12">
      <Helmet><title>Software Engineer Roadmap - CareerFlow</title></Helmet>
      
      <section className="relative rounded-3xl overflow-hidden h-[400px] flex items-end p-8">
        <img 
          src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b" 
          alt="Software Engineer coding" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative z-10 text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Software Engineer</h1>
          <p className="text-lg md:text-xl text-white/80 mb-6">
            Build the future of technology. Master algorithms, system design, and modern frameworks to create scalable applications.
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
            <p className="text-2xl font-bold">$120k - $200k+</p>
            <p className="text-xs text-muted-foreground mt-1">Entry: $80k | Senior: $200k+</p>
          </div>
        </div>
        <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
          <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl"><TrendingUp className="w-6 h-6" /></div>
          <div>
            <p className="text-sm text-muted-foreground font-medium">Job Demand</p>
            <p className="text-2xl font-bold">+22% Growth</p>
            <p className="text-xs text-muted-foreground mt-1">Much faster than average</p>
          </div>
        </div>
        <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
          <div className="p-3 bg-purple-500/10 text-purple-500 rounded-xl"><MapPin className="w-6 h-6" /></div>
          <div>
            <p className="text-sm text-muted-foreground font-medium">Top Paying States</p>
            <p className="text-2xl font-bold">CA, WA, NY</p>
            <p className="text-xs text-muted-foreground mt-1">Tech hubs & remote</p>
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
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Internet Fundamentals & Command Line</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> HTML, CSS, and Basic JavaScript</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Version Control (Git & GitHub)</li>
              </ul>
              <div className="p-4 bg-muted rounded-xl">
                <p className="font-medium mb-2">Resources:</p>
                <a href="#" className="text-sm text-primary hover:underline block">freeCodeCamp Responsive Web Design</a>
                <a href="#" className="text-sm text-primary hover:underline block">The Odin Project</a>
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
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Frontend Frameworks (React, Vue)</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Backend Basics (Node.js, Express, APIs)</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Databases (PostgreSQL, MongoDB)</li>
              </ul>
              <div className="p-4 bg-muted rounded-xl">
                <p className="font-medium mb-2">Resources:</p>
                <a href="#" className="text-sm text-primary hover:underline block">Full Stack Open</a>
                <a href="#" className="text-sm text-primary hover:underline block">React Documentation</a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-primary">Phase 3: Advanced</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Data Structures & Algorithms</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> System Design & Architecture</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> CI/CD, Testing, and Cloud Deployment</li>
              </ul>
              <div className="p-4 bg-muted rounded-xl">
                <p className="font-medium mb-2">Resources:</p>
                <a href="#" className="text-sm text-primary hover:underline block">LeetCode / HackerRank</a>
                <a href="#" className="text-sm text-primary hover:underline block">Grokking the System Design Interview</a>
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

export default SoftwareEngineerPage;
