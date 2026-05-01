
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import pb from '@/lib/pocketbaseClient';
import { Search, Compass } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import CareerCard from '@/components/interview/CareerCard';
import SearchableQuestionList from '@/components/interview/SearchableQuestionList';
import FilterPanel from '@/components/interview/FilterPanel';
import { useQuestionSearch } from '@/hooks/useQuestionSearch';

export default function InterviewPrepCenter() {
  const [careers, setCareers] = useState([]);
  const [loadingCareers, setLoadingCareers] = useState(true);

  const searchState = useQuestionSearch();

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const res = await pb.collection('careers').getFullList({
          sort: 'name',
          $autoCancel: false
        });
        setCareers(res);
      } catch (err) {
        console.error("Failed to load careers:", err);
      } finally {
        setLoadingCareers(false);
      }
    };
    fetchCareers();
  }, []);

  return (
    <div className="min-h-screen bg-background pb-24">
      <Helmet>
        <title>Interview Preparation Center | CareerFlow</title>
        <meta name="description" content="Access 5000+ role-specific interview questions across 50 career paths." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1700909589732-1660349b32f5?q=80&w=2940&auto=format&fit=crop" 
            alt="Modern office architecture" 
            className="w-full h-full object-cover opacity-10 dark:opacity-[0.03] mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="secondary" className="mb-6 py-1.5 px-4 bg-primary/10 text-primary border-primary/20 text-sm">
            <Compass className="w-4 h-4 mr-2" /> Master Your Next Interview
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6 text-balance mx-auto max-w-4xl" style={{ letterSpacing: '-0.02em' }}>
            The Ultimate Interview Preparation Center
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Practice with 5,000+ real-world questions across 50 careers, complete with expert answers and difficulty tracking.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <Tabs defaultValue="careers" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-md grid-cols-2 p-1 bg-card border shadow-sm rounded-xl">
              <TabsTrigger value="careers" className="rounded-lg text-base py-2.5">Browse Careers</TabsTrigger>
              <TabsTrigger value="search" className="rounded-lg text-base py-2.5">Search Questions</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="careers" className="mt-0 outline-none">
            {loadingCareers ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-[300px] bg-card rounded-2xl border shadow-sm animate-pulse" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {careers.map(career => (
                  <CareerCard key={career.id} career={career} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="search" className="mt-0 outline-none">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-3">
                <FilterPanel 
                  careersList={careers}
                  careerSlug={searchState.careerSlug}
                  setCareerSlug={searchState.setCareerSlug}
                  difficulty={searchState.difficulty}
                  setDifficulty={searchState.setDifficulty}
                  level={searchState.level}
                  setLevel={searchState.setLevel}
                  clearAllFilters={searchState.clearAllFilters}
                  totalResults={searchState.totalItems}
                />
              </div>
              <div className="lg:col-span-9">
                <SearchableQuestionList {...searchState} />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

// Temporary Badge Component since it might not be imported top level here properly if not handled, doing standard import
import { Badge } from '@/components/ui/badge';
