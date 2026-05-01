
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, BrainCircuit, RefreshCcw } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import SEOHead from '@/components/SEOHead.jsx';

export default function QuizSelectionPage() {
  const [careers, setCareers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCareers = async () => {
      try {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 400));
        const { getAllCareers } = await import('@/data/careersData.js');
        setCareers(getAllCareers() || []);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    loadCareers();
  }, []);

  const filteredCareers = careers.filter(career => 
    career?.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
    career?.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-[100dvh] bg-background py-16">
      <SEOHead 
        title="Technical Skill Quizzes | Career2Day"
        description="Test your knowledge with targeted multiple-choice quizzes across 50 different technology careers."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
            Skill Assessments
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-[65ch] mx-auto leading-relaxed">
            Validate your technical knowledge before your next interview. Choose your career path below to begin a practice quiz.
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              type="text"
              placeholder="Search by career or skill..."
              className="pl-12 h-14 text-base rounded-xl bg-card border-border focus-visible:ring-primary text-foreground placeholder:text-muted-foreground"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              disabled={isLoading}
            />
          </div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="flex flex-col h-full bg-card border-border">
                <CardContent className="p-6">
                  <Skeleton className="h-8 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3 mb-6" />
                  <Skeleton className="h-10 w-full mt-auto" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : filteredCareers.length === 0 ? (
          <div className="text-center py-20 bg-card rounded-2xl border border-border max-w-2xl mx-auto">
            <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-bold text-foreground mb-2">No quizzes found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCareers.map(career => (
              <Card key={career.slug} className="flex flex-col h-full bg-card border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-2xl group">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform">
                    <BrainCircuit className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-card-foreground mb-3 text-balance">
                    {career.name}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {career.description?.length > 120 ? `${career.description.substring(0, 120)}...` : career.description}
                  </p>
                  
                  <div className="mt-auto pt-4">
                    <Button asChild className="w-full">
                      <Link to={`/quiz/${career.slug}/difficulty`}>
                        Select Difficulty
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
