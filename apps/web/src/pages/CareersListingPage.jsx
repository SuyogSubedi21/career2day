
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, Loader2, ArrowRight, AlertCircle, RefreshCw, Sparkles, Compass, ChartNoAxesCombined } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { getCareerSalaryInfo } from '@/lib/utils/careerSalary.js';
import { careers as fallbackCareers } from '@/data/careerData.js';

const CATEGORIES = [
  'All', 'Frontend', 'Backend', 'Full Stack', 'Data', 
  'DevOps', 'Cloud', 'Security', 'Management', 'Design'
];

export default function CareersListingPage() {
  const navigate = useNavigate();
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usingFallbackData, setUsingFallbackData] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const fetchCareers = async () => {
    setLoading(true);
    setError(null);
    try {
      let filterStr = '';
      const filters = [];
      
      if (searchQuery) {
        filters.push(`name ~ "${searchQuery}"`);
      }
      
      if (selectedCategory !== 'All') {
        filters.push(`category = "${selectedCategory}"`);
      }
      
      if (filters.length > 0) {
        filterStr = filters.join(' && ');
      }

      const records = await pb.collection('careers').getList(1, 50, {
        filter: filterStr,
        sort: 'name',
        $autoCancel: false
      });
      
      setCareers(records.items);
      setUsingFallbackData(false);
    } catch (err) {
      console.error("Error fetching careers:", err);
      const q = searchQuery.toLowerCase();
      const fallbackFiltered = fallbackCareers.filter((career) => {
        const matchesSearch = (career.name || '').toLowerCase().includes(q);
        if (selectedCategory === 'All') return matchesSearch;
        return matchesSearch && (career.category || '').toLowerCase().includes(selectedCategory.toLowerCase());
      });
      setCareers(fallbackFiltered);
      setUsingFallbackData(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchCareers();
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [searchQuery, selectedCategory]);

  const getDemandBadge = (demand) => {
    const d = demand?.toLowerCase() || 'medium';
    if (d === 'high') return <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20 border-green-500/20">High Demand</Badge>;
    if (d === 'low') return <Badge className="bg-red-500/10 text-red-600 hover:bg-red-500/20 border-red-500/20">Low Demand</Badge>;
    return <Badge className="bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20 border-yellow-500/20">Medium Demand</Badge>;
  };

  const formatSalary = (career) => {
    const salaryInfo = getCareerSalaryInfo(career);
    if (!salaryInfo.hasAverage || salaryInfo.avg === null) {
      return 'Salary data unavailable';
    }

    return `Avg $${(salaryInfo.avg / 1000).toFixed(0)}k`;
  };

  const featuredCount = careers.filter((c) => {
    const demand = (c.jobDemandOutlook || c.jobDemand || c.demand || '').toLowerCase();
    return demand === 'high';
  }).length;

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 relative overflow-hidden">
      <Helmet>
        <title>{`50+ Career Roadmaps - Find Your Perfect Career Path | CareerFlow`}</title>
        <meta name="description" content="Explore 50+ detailed career roadmaps with skills, projects, certifications, and salary data. Find your ideal career path today." />
        <meta name="keywords" content="career paths, career roadmaps, job careers, career exploration, career change" />
        
        <meta property="og:title" content="50+ Career Roadmaps - Find Your Perfect Career Path | CareerFlow" />
        <meta property="og:description" content="Explore 50+ detailed career roadmaps with skills, projects, certifications, and salary data." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://careerflow.example.com/careers" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="50+ Career Roadmaps - Find Your Perfect Career Path | CareerFlow" />
        <meta name="twitter:description" content="Explore 50+ detailed career roadmaps with skills, projects, certifications, and salary data." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop" />
      </Helmet>

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute top-96 -left-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute bottom-32 -right-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-6"
          >
            Explore 50+ Career Paths in Tech
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground"
          >
            Find your perfect role with structured roadmaps, realistic salary benchmarks, and a clear next-step plan.
          </motion.p>

          {!loading && !error && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              <Badge className="px-4 py-2 text-sm rounded-full bg-primary/15 text-primary border-primary/20">
                <Compass className="w-4 h-4 mr-2" /> {careers.length} active paths
              </Badge>
              <Badge className="px-4 py-2 text-sm rounded-full bg-emerald-500/15 text-emerald-400 border-emerald-500/20">
                <ChartNoAxesCombined className="w-4 h-4 mr-2" /> {featuredCount} high-demand tracks
              </Badge>
              <Badge className="px-4 py-2 text-sm rounded-full bg-sky-500/15 text-sky-400 border-sky-500/20">
                <Sparkles className="w-4 h-4 mr-2" /> Updated with salary insights
              </Badge>
            </motion.div>
          )}
        </div>

        <div className="glass-card rounded-3xl p-4 md:p-5 mb-12 sticky top-24 z-30 shadow-lg border border-border/50 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:w-96 shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                type="text" 
                placeholder="Search careers (e.g., Data Analyst)..." 
                className="pl-10 h-11 bg-background/70 border-border/60 text-foreground placeholder:text-muted-foreground rounded-xl"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex-1 overflow-x-auto pb-2 md:pb-0 hide-scrollbar w-full">
              <div className="flex gap-2 min-w-max">
                {CATEGORIES.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full transition-all duration-200 ${selectedCategory === category ? 'shadow-md ring-2 ring-primary/30' : 'bg-background/60 hover:bg-muted'}`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {error ? (
          <div className="glass-card rounded-3xl p-12 text-center max-w-lg mx-auto border-destructive/20">
            <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">Something went wrong</h2>
            <p className="text-muted-foreground mb-6">{error}</p>
            <Button onClick={fetchCareers} variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" /> Try Again
            </Button>
          </div>
        ) : loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="glass-card rounded-3xl p-6 flex flex-col h-full">
                <Skeleton className="w-3/4 h-8 mb-4" />
                <Skeleton className="w-1/3 h-5 mb-6" />
                <Skeleton className="w-full h-4 mb-2" />
                <Skeleton className="w-5/6 h-4 mb-6" />
                <div className="mt-auto pt-6 flex justify-between items-center">
                  <Skeleton className="w-24 h-6 rounded-full" />
                  <Skeleton className="w-32 h-10 rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        ) : careers.length > 0 ? (
          <>
          {usingFallbackData && (
            <div className="mb-6 flex justify-center">
              <Badge className="bg-amber-500/15 text-amber-300 border-amber-500/30 px-4 py-2 rounded-full">
                Live server data unavailable - showing local fallback data
              </Badge>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careers.map((career, index) => (
              <motion.div 
                key={career.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="relative overflow-hidden glass-card rounded-3xl p-6 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group border border-border/50"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {career.name}
                  </h2>
                  <p className="text-sm font-medium text-muted-foreground">
                    {formatSalary(career)}
                  </p>
                </div>
                
                <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-1">
                  {career.description || career.overview || 'Detailed career roadmap and salary insights available.'}
                </p>
                
                <div className="mt-auto pt-6 border-t border-border/50 flex items-center justify-between">
                  {getDemandBadge(career.jobDemandOutlook || career.jobDemand || career.demand)}
                  <Button 
                    asChild
                    variant="ghost" 
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors rounded-full"
                  >
                    <Link to={`/careers/${career.slug}`}>
                      View Roadmap <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          </>
        ) : (
          <div className="text-center py-20 glass-card rounded-2xl max-w-2xl mx-auto">
            <Filter className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h2 className="text-xl font-bold mb-2">No careers found</h2>
            <p className="text-muted-foreground mb-6">We couldn't find any careers matching your current filters.</p>
            <Button onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
