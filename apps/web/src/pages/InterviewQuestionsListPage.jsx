
import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Search, ChevronRight, BookOpen, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import pb from '@/lib/pocketbaseClient.js';

export default function InterviewQuestionsListPage() {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

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
      } catch (err) {
        console.error('[InterviewQuestionsListPage] Failed to load careers:', err);
        if (isMounted) {
          setCareers([]);
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
                  <div className="flex flex-col h-full p-6 rounded-2xl bg-card border border-border transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    <h3 className="text-xl font-semibold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                      {career.name}
                    </h3>
                    
                    <div className="mt-auto pt-6 flex items-center justify-between">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
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
