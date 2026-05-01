
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useAuth } from '@/contexts/AuthContext.jsx';
import pb from '@/lib/pocketbaseClient';
import { Loader2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const ProgressTrackingPage = () => {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!currentUser) return;
      try {
        const res = await pb.collection('interviewProgress').getList(1, 100, {
          filter: `userId="${currentUser.id}"`,
          sort: '-created',
          $autoCancel: false
        });
        
        // Aggregate by career path
        const aggregated = res.items.reduce((acc, curr) => {
          const path = curr.careerPath || 'General';
          if (!acc[path]) acc[path] = { name: path, attempted: 0, correct: 0 };
          acc[path].attempted += curr.questionsAttempted || 0;
          acc[path].correct += curr.correctAnswers || 0;
          return acc;
        }, {});

        setData(Object.values(aggregated));
      } catch (error) {
        console.error("Failed to fetch progress", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentUser]);

  if (loading) return <div className="flex justify-center p-12"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>;

  const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))'];

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      <Helmet><title>Progress Tracking - CareerFlow</title></Helmet>
      
      <div>
        <h1 className="text-3xl font-bold mb-2">Progress Tracking</h1>
        <p className="text-muted-foreground">Analyze your interview preparation performance.</p>
      </div>

      {data.length === 0 ? (
        <div className="glass-card p-12 text-center rounded-3xl text-muted-foreground">
          No practice data available yet. Start a practice session to see your stats!
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-card p-6 rounded-3xl space-y-4">
            <h3 className="text-xl font-bold">Questions by Career Path</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                  <Bar dataKey="attempted" name="Attempted" fill="hsl(var(--muted-foreground))" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="correct" name="Correct" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass-card p-6 rounded-3xl space-y-4">
            <h3 className="text-xl font-bold">Accuracy Overview</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="correct"
                    nameKey="name"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressTrackingPage;
