
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import pb from '@/lib/pocketbaseClient';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Trash2, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const MyCareerPage = () => {
  const [savedCareers, setSavedCareers] = useState([]);
  const [loading, setLoading] = useState(true);

  const careerDetails = {
    'data-analyst': { name: 'Data Analyst', salary: '$75k - $130k' },
    'software-engineer': { name: 'Software Engineer', salary: '$120k - $200k+' },
    'devops-engineer': { name: 'DevOps Engineer', salary: '$130k - $180k' }
  };

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      const records = await pb.collection('savedCareers').getFullList({
        sort: '-created',
        $autoCancel: false
      });
      setSavedCareers(records);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const removeCareer = async (id) => {
    try {
      await pb.collection('savedCareers').delete(id, { $autoCancel: false });
      setSavedCareers(savedCareers.filter(c => c.id !== id));
      toast.success('Career removed');
    } catch (error) {
      toast.error('Failed to remove career');
    }
  };

  return (
    <div className="space-y-8">
      <Helmet><title>My Careers - CareerFlow</title></Helmet>
      <div>
        <h1 className="text-3xl font-bold mb-2">My Saved Careers</h1>
        <p className="text-muted-foreground">Track your bookmarked career paths and roadmaps.</p>
      </div>

      {loading ? (
        <div className="animate-pulse space-y-4">
          <div className="h-32 bg-muted rounded-2xl w-full max-w-md"></div>
        </div>
      ) : savedCareers.length === 0 ? (
        <div className="text-center py-12 glass-card rounded-3xl">
          <h3 className="text-xl font-semibold mb-2">No careers saved yet</h3>
          <p className="text-muted-foreground mb-6">Take the career quiz or explore roadmaps to find your path.</p>
          <Button asChild><Link to="/career-quiz">Take Career Quiz</Link></Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedCareers.map((record) => {
            const details = careerDetails[record.careerPath];
            if (!details) return null;
            return (
              <div key={record.id} className="glass-card p-6 rounded-2xl flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{details.name}</h3>
                  <button onClick={() => removeCareer(record.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-muted-foreground mb-6">Avg. Salary: {details.salary}</p>
                <div className="mt-auto pt-4 border-t flex justify-between items-center">
                  <Link to={`/careers/${record.careerPath}`} className="text-sm text-primary font-medium flex items-center hover:underline">
                    View Roadmap <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyCareerPage;
