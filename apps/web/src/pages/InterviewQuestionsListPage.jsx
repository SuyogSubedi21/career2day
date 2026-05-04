
import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Search, ChevronRight, BookOpen, Loader2, Sparkles, Target, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import pb from '@/lib/pocketbaseClient.js';
import { getAllCareersWithQuestions } from '@/lib/interviewQuestionsData.js';

export default function InterviewQuestionsListPage() {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [usingFallbackData, setUsingFallbackData] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchCareers = async () => {
      try {
        setLoading(true);
        const careersResult = await pb.collection('careers').getList(1, 500, {
          sort: 'name',
          fields: 'id,name,slug',
          $autoCancel: false,
        });

        if (!isMounted) return;

        const mapped = (careersResult.items || [])
          .filter((career) => Boolean(career.slug))
          .map((career) => ({
            id: career.id,
            name: career.name,
            slug: career.slug,
          }));

        setCareers(mapped);
        setUsingFallbackData(false);
      } catch (err) {
        console.error('[InterviewQuestionsListPage] Failed to load careers:', err);
        if (isMounted) {
          const fallback = getAllCareersWithQuestions().map((career) => ({
            id: career.slug,
            name: career.name,
            slug: career.slug,
          }));
          setCareers(fallback);
          setUsingFallbackData(true);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchCareers();

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredCareers = useMemo(() => {
    return careers.filter((career) =>
      career.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [careers, searchTerm]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Helmet>
        <title>{`Interview Questions Library | Prepare for your next role`}</title>
        <meta name="description" content="Browse 5000+ technical interview questions across 50 different tech careers to prepare for your next job interview." />
      </Helmet>

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-36 left-1/2 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute top-64 -left-32 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      {/* Hero Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border bg-gradient-to-b from-background via-background to-background/80">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-foreground">
            Technical Interview Questions
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Master your next interview with role-specific question sets, practical framing, and deep technical prompts.
          </p>

          {!loading && careers.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-primary/15 text-primary border border-primary/20">
                <Target className="w-4 h-4 mr-2" /> {careers.length} career tracks
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                <BadgeCheck className="w-4 h-4 mr-2" /> Structured question flow
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-sky-500/15 text-sky-400 border border-sky-500/20">
                <Sparkles className="w-4 h-4 mr-2" /> Interview-ready practice
              </span>
            </div>
          )}
          
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search careers (e.g. Frontend, Data Scientist)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-6 text-lg rounded-2xl bg-card/90 text-card-foreground border-border shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {!loading && usingFallbackData && (
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-amber-500/15 text-amber-300 border border-amber-500/30">
              Live server data unavailable - showing local fallback data
            </span>
          </div>
        )}
        {loading ? (
          <div className="text-center py-24">
            <Loader2 className="mx-auto h-12 w-12 animate-spin text-muted-foreground/60 mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Loading careers</h3>
            <p className="text-muted-foreground">Fetching interview question categories.</p>
          </div>
        ) : filteredCareers.length === 0 ? (
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
                  <div className="relative overflow-hidden flex flex-col h-full p-6 rounded-3xl bg-card border border-border transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 opacity-60 group-hover:opacity-100 transition-opacity" />
                    <h3 className="text-xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                      {career.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                      Practice targeted questions and strengthen your response quality before interviews.
                    </p>
                    
                    <div className="mt-auto pt-6 flex items-center justify-between">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                        View Questions
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
