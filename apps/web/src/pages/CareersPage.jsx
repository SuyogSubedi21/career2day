
import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bookmark, Briefcase, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext.jsx';
import pb from '@/lib/pocketbaseClient.js';
import { toast } from 'sonner';
import { careerPlatformData } from '@/data/careerPlatformData.js';

const catalogCareers = careerPlatformData.map((career) => ({
  id: career.slug,
  pbId: null,
  name: career.name,
  slug: career.slug,
  category: career.category,
  description: career.description,
  averageSalary: (career.analytics?.salary?.[1]?.[1] || career.analytics?.salary?.[0]?.[1] || 0) * 1000,
  demandLevel: career.demandLevel,
  tools: career.tools || []
}));

export default function CareersPage() {
  const [pocketBaseCareersBySlug, setPocketBaseCareersBySlug] = useState({});
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const allRecords = await pb.collection('careers').getFullList({ sort: 'name', $autoCancel: false });
        const seenSlugs = new globalThis.Map();
        allRecords.forEach(r => { if (!seenSlugs.has(r.slug)) seenSlugs.set(r.slug, r); });
        setPocketBaseCareersBySlug(Object.fromEntries(seenSlugs));
      } catch (error) {
        console.warn('PocketBase careers unavailable; using complete local career catalog:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCareers();
  }, []);

  const careers = useMemo(() => catalogCareers.map((career) => {
    const pocketBaseCareer = pocketBaseCareersBySlug[career.slug];
    return {
      ...career,
      pbId: pocketBaseCareer?.id || null
    };
  }), [pocketBaseCareersBySlug]);

  const handleBookmark = async (career) => {
    if (!currentUser) {
      toast.error('Please login to bookmark careers');
      return;
    }

    if (!career.pbId) {
      toast.error('Bookmarking for this career will be available after the database syncs');
      return;
    }

    try {
      await pb.collection('savedCareers').create({
        userId: currentUser.id,
        careerPath: career.pbId
      }, { $autoCancel: false });
      toast.success('Career bookmarked!');
    } catch (error) {
      toast.error('Failed to bookmark career');
    }
  };

  const filteredCareers = careers.filter(c => {
    const query = search.toLowerCase();
    return (
      c.name.toLowerCase().includes(query) ||
      c.category.toLowerCase().includes(query) ||
      c.tools.some((tool) => tool.toLowerCase().includes(query))
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Explore IT Careers</h1>
          <p className="text-muted-foreground">Discover roadmaps, salaries, and skills for top tech roles.</p>
        </div>
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search careers..." 
            className="pl-9 bg-card border-border text-foreground"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map(i => (
            <Card key={i} className="h-64 animate-pulse bg-muted border-border"></Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCareers.map((career) => (
            <Card key={career.id} className="border-border bg-card flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => handleBookmark(career)}>
                    <Bookmark className="w-4 h-4 text-muted-foreground hover:text-primary" />
                  </Button>
                </div>
                <CardTitle className="text-xl text-foreground">{career.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{career.description || 'No description available.'}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">Avg: ${career.averageSalary?.toLocaleString() || 'N/A'}</Badge>
                  <Badge variant="outline">{career.category}</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link to={`/careers/${career.slug}`}>View Details <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
