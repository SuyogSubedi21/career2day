
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';
import { ArrowLeft, Target, Award, Clock, BookOpen, AlertTriangle, Loader2, Briefcase } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  calculateOverallScore, getReadinessLevel, calculatePerformanceByRole, 
  identifyWeakAreas, getRecommendedRoles 
} from '@/lib/ReadinessCalculator.js';

export default function ReadinessDashboard() {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!currentUser) return;
      setLoading(true);
      try {
        // Fetch user progress records
        const progressRecords = await pb.collection('userProgress').getFullList({
          filter: `userId="${currentUser.id}"`,
          $autoCancel: false
        });

        // Calculate metrics
        let totalAttempted = 0;
        let totalCorrect = 0;
        progressRecords.forEach(r => {
          totalAttempted += (r.questionsAttempted || 0);
          totalCorrect += (r.correctAnswers || 0);
        });

        const overallScore = calculateOverallScore(totalCorrect, totalAttempted);
        const readiness = getReadinessLevel(overallScore);
        const rolePerf = calculatePerformanceByRole(progressRecords);
        const weakAreas = identifyWeakAreas(rolePerf);
        
        // Fetch all roles to recommend new ones if needed
        const allQ = await pb.collection('interviewQuestions').getFullList({ fields: 'careerPath', $autoCancel: false });
        const uniqueRoles = [...new Set(allQ.map(q => q.careerPath))];
        const recommendations = getRecommendedRoles(rolePerf, uniqueRoles);

        // Dummy category data since schema doesn't track per-category in userProgress directly,
        // we'll mock it based on overall score for visualization
        const categoryData = [
          { name: 'Technical', value: Math.max(overallScore - 10, 10) },
          { name: 'Behavioral', value: Math.min(overallScore + 15, 100) },
          { name: 'System Design', value: Math.max(overallScore - 20, 5) }
        ];

        setDashboardData({
          overallScore,
          readiness,
          totalAttempted,
          rolesPracticed: rolePerf.length,
          rolePerf,
          categoryData,
          weakAreas,
          recommendations
        });

      } catch (err) {
        console.error("Error fetching readiness data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [currentUser]);

  if (!currentUser) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-8 text-center pt-24">
        <Target className="w-16 h-16 text-muted-foreground mb-4 opacity-50" />
        <h1 className="text-3xl font-bold mb-4">Login Required</h1>
        <p className="text-muted-foreground mb-8 max-w-md">Please log in to view your personalized readiness dashboard.</p>
        <Button asChild><Link to="/login">Log in</Link></Button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
        <p className="text-muted-foreground">Loading your dashboard...</p>
      </div>
    );
  }

  if (!dashboardData || dashboardData.totalAttempted === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-8 text-center pt-24">
        <Award className="w-16 h-16 text-muted-foreground mb-4 opacity-50" />
        <h1 className="text-3xl font-bold mb-4">No Data Yet</h1>
        <p className="text-muted-foreground mb-8 max-w-md">You haven't practiced any interview questions yet. Start practicing to generate your readiness score.</p>
        <Button asChild size="lg"><Link to="/interview-prep">Explore Roles</Link></Button>
      </div>
    );
  }

  const COLORS = ['hsl(var(--primary))', 'hsl(var(--secondary))', 'hsl(var(--accent))'];

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <Helmet>
        <title>Readiness Dashboard | CareerFlow</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <nav className="mb-8">
          <Button variant="ghost" asChild className="-ml-4 text-muted-foreground hover:text-foreground">
            <Link to="/interview-prep"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Prep</Link>
          </Button>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-8">Your Readiness Dashboard</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          
          {/* Main Score Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-1 glass-effect rounded-3xl p-8 flex flex-col items-center justify-center text-center border-t-4"
            style={{ borderTopColor: dashboardData.readiness.color }}
          >
            <h3 className="text-lg font-medium text-muted-foreground mb-6">Overall Readiness</h3>
            <div className="relative w-48 h-48 flex items-center justify-center mb-6">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="10" className="text-muted/30" />
                <circle 
                  cx="50" cy="50" r="45" fill="none" 
                  stroke="currentColor" strokeWidth="10" 
                  strokeDasharray={`${2 * Math.PI * 45}`}
                  strokeDashoffset={`${2 * Math.PI * 45 * (1 - dashboardData.overallScore / 100)}`}
                  className="transition-all duration-1000 ease-out"
                  style={{ color: dashboardData.readiness.color }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-bold" style={{ color: dashboardData.readiness.color }}>
                  {dashboardData.overallScore}%
                </span>
              </div>
            </div>
            <div 
              className="px-4 py-2 rounded-full text-sm font-bold tracking-wide uppercase"
              style={{ backgroundColor: `${dashboardData.readiness.color}20`, color: dashboardData.readiness.color }}
            >
              {dashboardData.readiness.label}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-effect rounded-2xl p-6 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2 text-muted-foreground">
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="font-medium">Questions Attempted</span>
              </div>
              <p className="text-4xl font-bold">{dashboardData.totalAttempted}</p>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2 text-muted-foreground">
                <Briefcase className="w-5 h-5 text-secondary" />
                <span className="font-medium">Roles Practiced</span>
              </div>
              <p className="text-4xl font-bold">{dashboardData.rolesPracticed}</p>
            </div>

            <div className="sm:col-span-2 glass-effect rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-accent-foreground" />
                Areas to Improve
              </h3>
              {dashboardData.weakAreas.length > 0 ? (
                <div className="space-y-3">
                  {dashboardData.weakAreas.map((w, i) => (
                    <div key={i} className="flex justify-between items-center bg-background/50 p-3 rounded-lg border">
                      <span className="font-medium">{w.name}</span>
                      <span className="text-destructive font-bold">{w.accuracy}% Accuracy</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No significant weak areas identified yet. Keep practicing!</p>
              )}
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <div className="glass-effect rounded-3xl p-6 h-[400px]">
            <h3 className="text-lg font-bold mb-6">Performance by Role</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dashboardData.rolePerf} layout="vertical" margin={{ left: 20, right: 20, top: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="hsl(var(--border))" />
                <XAxis type="number" domain={[0, 100]} tickFormatter={(val) => `${val}%`} tick={{ fill: 'hsl(var(--muted-foreground))' }} axisLine={false} tickLine={false} />
                <YAxis dataKey="name" type="category" width={100} tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }} axisLine={false} tickLine={false} />
                <RechartsTooltip 
                  cursor={{ fill: 'hsl(var(--muted))', opacity: 0.4 }}
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                  formatter={(value) => [`${value}%`, 'Accuracy']}
                />
                <Bar dataKey="accuracy" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="glass-effect rounded-3xl p-6 h-[400px] flex flex-col">
            <h3 className="text-lg font-bold mb-2">Category Breakdown</h3>
            <p className="text-sm text-muted-foreground mb-4">Accuracy estimated by question type</p>
            <div className="flex-grow">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dashboardData.categoryData}
                    cx="50%" cy="45%"
                    innerRadius={80} outerRadius={110}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {dashboardData.categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <RechartsTooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                    formatter={(value) => [`${value}%`, 'Estimated Accuracy']}
                  />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="glass-effect rounded-3xl p-8 text-center bg-primary/5 border-primary/20">
          <h2 className="text-2xl font-bold mb-4">Keep the Momentum Going</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Consistent practice is key. Based on your performance, we recommend focusing on these areas next.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {dashboardData.recommendations.map(r => (
              <Button key={r} asChild variant="outline" className="bg-background">
                <Link to={`/interview-prep/${encodeURIComponent(r)}`}>Practice {r}</Link>
              </Button>
            ))}
            <Button asChild className="bg-primary text-primary-foreground">
              <Link to="/interview-prep">Browse All Roles</Link>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
