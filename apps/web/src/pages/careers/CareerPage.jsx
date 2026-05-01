
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Bookmark, Briefcase, DollarSign, TrendingUp, BookOpen, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/AuthContext.jsx';
import pb from '@/lib/pocketbaseClient';
import { getCareerBySlug } from '@/data/careerData.js';

const CareerPage = () => {
  const { careerPath } = useParams();
  const { currentUser } = useAuth();
  const [isSaving, setIsSaving] = useState(false);
  
  const career = getCareerBySlug(careerPath);

  const handleSaveCareer = async () => {
    if (!currentUser) {
      toast.error('Please log in to save careers.');
      return;
    }
    setIsSaving(true);
    try {
      await pb.collection('savedCareers').create({
        userId: currentUser.id,
        careerPath: career.id
      }, { $autoCancel: false });
      toast.success(`${career.title} saved to My Careers!`);
    } catch (error) {
      toast.error('Failed to save career. You might have already saved it.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto space-y-8 pb-12"
    >
      <Helmet><title>{career.title} Career Path - CareerFlow</title></Helmet>

      {/* Hero Section */}
      <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{career.title}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">{career.overview}</p>
          </div>
          <div className="flex flex-col gap-3 min-w-[200px]">
            <Button onClick={handleSaveCareer} disabled={isSaving} className="w-full">
              <Bookmark className="w-4 h-4 mr-2" /> {isSaving ? 'Saving...' : 'Save Career'}
            </Button>
            <Button variant="outline" asChild className="w-full">
              <Link to="/resume-builder">Build Resume</Link>
            </Button>
            <Button variant="secondary" asChild className="w-full">
              <Link to="/interview-practice">Practice Interview</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stats Cards */}
        <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
          <div className="p-3 bg-green-500/10 text-green-500 rounded-xl"><DollarSign className="w-6 h-6" /></div>
          <div>
            <p className="text-sm text-muted-foreground">Average Salary</p>
            <p className="text-2xl font-bold">${career.salary.average.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground mt-1">${career.salary.entry / 1000}k - ${career.salary.senior / 1000}k range</p>
          </div>
        </div>
        <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
          <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl"><TrendingUp className="w-6 h-6" /></div>
          <div>
            <p className="text-sm text-muted-foreground">Job Demand</p>
            <p className="text-2xl font-bold">{career.demand.growth}</p>
            <p className="text-xs text-muted-foreground mt-1">{career.demand.outlook}</p>
          </div>
        </div>
        <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
          <div className="p-3 bg-purple-500/10 text-purple-500 rounded-xl"><Briefcase className="w-6 h-6" /></div>
          <div>
            <p className="text-sm text-muted-foreground">Top States</p>
            <p className="text-lg font-semibold truncate">{career.salary.topStates[0]}</p>
            <p className="text-xs text-muted-foreground mt-1">+{career.salary.topStates.length - 1} more</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Roadmap */}
          <section className="glass-card p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><TrendingUp className="w-6 h-6 text-primary" /> Career Roadmap</h2>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {career.roadmap.map((step, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    {index + 1}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-4 rounded-xl">
                    <h3 className="font-bold text-lg mb-1">{step.phase}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-8">
          {/* Skills */}
          <section className="glass-card p-6 rounded-3xl">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Required Skills</h2>
            <div className="space-y-3">
              {career.skills.map((skill, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <span className="font-medium text-sm">{skill.name}</span>
                  <span className="text-xs px-2 py-1 bg-background rounded-md text-muted-foreground">{skill.level}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Resources */}
          <section className="glass-card p-6 rounded-3xl">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-primary" /> Learning Resources</h2>
            <div className="space-y-2">
              {career.resources.map((res, i) => (
                <a key={i} href={res.url} className="block p-3 text-sm hover:bg-muted rounded-lg transition-colors border border-transparent hover:border-border">
                  {res.title}
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default CareerPage;
