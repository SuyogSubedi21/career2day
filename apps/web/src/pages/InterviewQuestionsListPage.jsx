
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Search, ChevronRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { getAllCareersWithQuestions } from '@/lib/interviewQuestionsData.js';

export default function InterviewQuestionsListPage() {
  const careers = getAllCareersWithQuestions();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCareers = careers.filter(career => 
    career.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{`Interview Questions Library | Prepare for your next role`}</title>
        <meta name="description" content="Browse 5000+ technical interview questions across 50 different tech careers to prepare for your next job interview." />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-secondary text-secondary-foreground py-20 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Technical Interview Questions
          </h1>
          <p className="text-xl text-secondary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Master your next interview. We've compiled 100 deep technical and behavioral questions for 50 of the top technology careers.
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search careers (e.g. Frontend, Data Scientist)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-6 text-lg rounded-2xl bg-card text-card-foreground border-border shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filteredCareers.length === 0 ? (
          <div className="text-center py-24">
            <BookOpen className="mx-auto h-12 w-12 text-muted-foreground/50 mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No careers found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCareers.map((career, index) => (
              <motion.div
                key={career.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link to={`/interview-questions/${career.slug}`} className="block h-full group">
                  <div className="flex flex-col h-full p-6 rounded-2xl bg-card border border-border transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    <h3 className="text-xl font-semibold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                      {career.name}
                    </h3>
                    
                    <div className="mt-auto pt-6 flex items-center justify-between">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        100 Questions
                      </span>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
