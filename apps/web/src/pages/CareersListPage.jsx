
import React, { useState, useEffect } from 'react';
import { Search, AlertCircle, RefreshCcw, Briefcase, TrendingUp, Map as MapIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import SEOHead from '@/components/SEOHead.jsx';
import { getAllCareers } from '@/data/careersData.js';
import { useCurrency } from '@/contexts/CurrencyContext.jsx';

export default function CareersListPage() {
  const [careers, setCareers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getCurrencySymbol, convertSalary } = useCurrency();

  const loadCareers = () => {
    try {
      setIsLoading(true);
      setError(null);
      const records = getAllCareers();
      setCareers(records);
    } catch (err) {
      console.error("[CareersListPage] Failed to load careers:", err);
      setError("We couldn't load the career data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadCareers();
  }, []);

  const filteredCareers = careers.filter(career => {
    if (!career || !career.name) return false;
    const searchLower = searchTerm.toLowerCase();
    return (
      career.name.toLowerCase().includes(searchLower) ||
      (career.description && career.description.toLowerCase().includes(searchLower)) ||
      (career.slug && career.slug.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="min-h-[100dvh] bg-background py-16">
      <SEOHead 
        title="Explore Tech Careers | Career2Day"
        description="Discover top IT career paths, view salary expectations, and find the perfect roadmap for your next role."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            Explore Tech Careers
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-[65ch] mx-auto leading-relaxed">
            Find your perfect role in tech. Compare salaries, demand, and required skills to make an informed decision about your future.
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              type="text"
              placeholder="Search careers by name or description..."
              className="pl-12 h-14 text-base rounded-xl bg-card border-border focus-visible:ring-primary text-foreground placeholder:text-muted-foreground shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              disabled={isLoading || !!error}
            />
          </div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="overflow-hidden border-border shadow-sm bg-card">
                <CardContent className="p-6">
                  <Skeleton className="h-8 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6 mb-6" />
                  <div className="flex gap-4 mb-6">
                    <Skeleton className="h-6 w-24 rounded-full" />
                    <Skeleton className="h-6 w-24 rounded-full" />
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Skeleton className="h-10 w-full rounded-lg" />
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-20 bg-destructive/5 rounded-2xl border border-destructive/20 max-w-2xl mx-auto">
            <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Unable to load careers</h3>
            <p className="text-muted-foreground mb-6">{error}</p>
            <Button onClick={loadCareers} variant="outline" className="gap-2">
              <RefreshCcw className="w-4 h-4" /> Try Again
            </Button>
          </div>
        ) : filteredCareers.length === 0 ? (
          <div className="text-center py-20 bg-card rounded-2xl border border-border max-w-2xl mx-auto shadow-sm">
            <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-bold text-foreground mb-2">No careers found</h3>
            <p className="text-muted-foreground">We couldn't find any careers matching your search criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCareers.map((career) => (
              <Card key={career.id} className="flex flex-col h-full overflow-hidden border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-card">
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    {career.jobDemand && (
                      <Badge variant="secondary" className="bg-secondary text-secondary-foreground font-medium">
                        {career.jobDemand} Demand
                      </Badge>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-3 line-clamp-1">
                    {career.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow">
                    {career.description || career.overview || 'No description available.'}
                  </p>
                  
                  <div className="space-y-3 mt-auto pt-4 border-t border-border/50">
                    <div className="flex items-center text-sm">
                      <TrendingUp className="w-4 h-4 mr-3 text-emerald-500" />
                      <span className="text-muted-foreground mr-2">Avg. Salary:</span>
                      <span className="font-semibold text-foreground">
                        {getCurrencySymbol()}{convertSalary(career.averageSalary || career.midSalary || 0).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 mt-auto flex flex-col gap-3">
                  <Button asChild className="w-full font-semibold" variant="default">
                    <Link to={`/careers/${career.slug}`}>
                      View Career Path
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
