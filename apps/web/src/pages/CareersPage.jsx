
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bookmark, Briefcase, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext.jsx';
import pb from '@/lib/pocketbaseClient.js';
import { toast } from 'sonner';

export default function CareersPage() {
  const [careers, setCareers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const allRecords = await pb.collection('careers').getFullList({ sort: 'name', $autoCancel: false });
        const seenSlugs = new globalThis.Map();
        allRecords.forEach(r => { if (!seenSlugs.has(r.slug)) seenSlugs.set(r.slug, r); });
        const records = Array.from(seenSlugs.values());
        setCareers(records);
      } catch (error) {
        console.error('Error fetching careers:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCareers();
  }, []);

  const handleBookmark = async (careerId) => {
    if (!currentUser) {
      toast.error('Please login to bookmark careers');
      return;
    }
    try {
      await pb.collection('savedCareers').create({
        userId: currentUser.id,
        careerPath: careerId
      }, { $autoCancel: false });
      toast.success('Career bookmarked!');
    } catch (error) {
      toast.error('Failed to bookmark career');
    }
  };

  const filteredCareers = careers.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

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
                  <Button variant="ghost" size="icon" onClick={() => handleBookmark(career.id)}>
                    <Bookmark className="w-4 h-4 text-muted-foreground hover:text-primary" />
                  </Button>
                </div>
                <CardTitle className="text-xl text-foreground">{career.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{career.description || 'No description available.'}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">Avg: ${career.averageSalary?.toLocaleString() || 'N/A'}</Badge>
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
