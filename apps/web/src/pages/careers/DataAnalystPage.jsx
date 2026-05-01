
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Bookmark, ArrowRight, DollarSign, TrendingUp, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import pb from '@/lib/pocketbaseClient';
import { toast } from 'sonner';

const DataAnalystPage = () => {
  const handleBookmark = async () => {
    try {
      await pb.collection('savedCareers').create({
        userId: pb.authStore.model.id,
        careerPath: 'data-analyst'
      }, { $autoCancel: false });
      toast.success('Career bookmarked successfully!');
    } catch (error) {
      toast.error('Failed to bookmark career or already bookmarked.');
    }
  };

  return (
    <div className="space-y-12 pb-12">
      <Helmet><title>Data Analyst Roadmap - CareerFlow</title></Helmet>
      
      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden h-[400px] flex items-end p-8">
        <img 
          src="https://images.unsplash.com/photo-1681583721761-5b42c7881164" 
          alt="Data Analyst working with charts" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative z-10 text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Data Analyst</h1>
          <p className="text-lg md:text-xl text-white/80 mb-6">
            Transform raw data into actionable insights. Master SQL, Python, and data visualization to drive business decisions.
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

      {/* Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
          <div className="p-3 bg-green-500/10 text-green-500 rounded-xl"><DollarSign className="w-6 h-6" /></div>
          <div>
            <p className="text-sm text-muted-foreground font-medium">Average Salary</p>
            <p className="text-2xl font-bold">$75k - $130k</p>
            <p className="text-xs text-muted-foreground mt-1">Entry: $50k | Senior: $120k+</p>
          </div>
        </div>
        <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
          <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl"><TrendingUp className="w-6 h-6" /></div>
          <div>
            <p className="text-sm text-muted-foreground font-medium">Job Demand</p>
            <p className="text-2xl font-bold">+15% Growth</p>
            <p className="text-xs text-muted-foreground mt-1">Much faster than average</p>
          </div>
        </div>
        <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
          <div className="p-3 bg-purple-500/10 text-purple-500 rounded-xl"><MapPin className="w-6 h-6" /></div>
          <div>
            <p className="text-sm text-muted-foreground font-medium">Top Paying States</p>
            <p className="text-2xl font-bold">CA, NY, MA</p>
            <p className="text-xs text-muted-foreground mt-1">Highest concentration of roles</p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Step-by-Step Roadmap</h2>
        <div className="space-y-12">
          {/* Phase 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-primary">Phase 1: Beginner</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Excel & Spreadsheets (Advanced formulas, Pivot Tables)</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Basic SQL (SELECT, JOINs, GROUP BY)</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Basic Statistics & Math</li>
              </ul>
              <div className="p-4 bg-muted rounded-xl">
                <p className="font-medium mb-2">Resources:</p>
                <a href="#" className="text-sm text-primary hover:underline block">Google Data Analytics Certificate (Coursera)</a>
                <a href="#" className="text-sm text-primary hover:underline block">SQL for Data Science (Udemy)</a>
              </div>
            </div>
            <div className="order-1 md:order-2 text-center md:text-left">
              <div className="text-8xl font-extrabold text-primary/10">01</div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-right">
              <div className="text-8xl font-extrabold text-primary/10">02</div>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-primary">Phase 2: Intermediate</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Data Visualization (Tableau or PowerBI)</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Python for Data Analysis (Pandas, NumPy)</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Advanced SQL (Window functions, CTEs)</li>
              </ul>
              <div className="p-4 bg-muted rounded-xl">
                <p className="font-medium mb-2">Resources:</p>
                <a href="#" className="text-sm text-primary hover:underline block">Python for Everybody (Coursera)</a>
                <a href="#" className="text-sm text-primary hover:underline block">Tableau A-Z (Udemy)</a>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-primary">Phase 3: Advanced</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Machine Learning Basics (Scikit-learn)</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> A/B Testing & Experimentation</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Data Storytelling & Presentation</li>
              </ul>
              <div className="p-4 bg-muted rounded-xl">
                <p className="font-medium mb-2">Resources:</p>
                <a href="#" className="text-sm text-primary hover:underline block">Machine Learning by Andrew Ng (Coursera)</a>
                <a href="#" className="text-sm text-primary hover:underline block">Storytelling with Data (Book)</a>
              </div>
            </div>
            <div className="order-1 md:order-2 text-center md:text-left">
              <div className="text-8xl font-extrabold text-primary/10">03</div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center pt-8">
        <Button asChild size="lg" className="rounded-full px-8">
          <Link to="/tools/salary-tax">Calculate Your Potential Salary</Link>
        </Button>
      </div>
    </div>
  );
};

export default DataAnalystPage;
