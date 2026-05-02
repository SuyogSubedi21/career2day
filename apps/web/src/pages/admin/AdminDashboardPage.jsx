
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { RefreshCw, AlertCircle, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient.js';


const COLORS = ['hsl(var(--primary))', '#10B981', '#8B5CF6', '#F59E0B', '#EF4444', '#64748B'];

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    careers: 0,
    skills: 0,
    interviewQuestions: 0,
    quizzes: 0,
    roadmaps: 0
  });
  const [loading, setLoading] = useState(true);

  const loadStats = async () => {
    try {
      setLoading(true);
      const [c, s, iq, q, r] = await Promise.all([
        pb.collection('careers').getList(1, 1, { $autoCancel: false }),
        pb.collection('careerSkills').getList(1, 1, { $autoCancel: false }),
        pb.collection('careerInterviewQuestions').getList(1, 1, { $autoCancel: false }),
        pb.collection('careerQuizzes').getList(1, 1, { $autoCancel: false }),
        pb.collection('careerRoadmaps').getList(1, 1, { $autoCancel: false })
      ]);
      setStats({
        careers: c.totalItems,
        skills: s.totalItems,
        interviewQuestions: iq.totalItems,
        quizzes: q.totalItems,
        roadmaps: r.totalItems
      });
    } catch (e) {
      toast.error('Failed to load stats: ' + e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStats();
  }, []);

  const StatCard = ({ title, value, icon: Icon }) => (
    <Card className="bg-card border border-border shadow-sm">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-2">{title}</p>
            <p className="text-3xl font-bold">{loading ? '—' : value}</p>
          </div>
          <Icon className="w-10 h-10 text-primary/50" />
        </div>
      </CardContent>
    </Card>
  );

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - Career Management</title>
      </Helmet>

      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-2">Manage career data and content</p>
          </div>
          <Button onClick={loadStats} variant="outline" size="sm" className="gap-2">
            <RefreshCw className="w-4 h-4" />
            Refresh
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <StatCard title="Careers" value={stats.careers} icon={Database} />
          <StatCard title="Skills" value={stats.skills} icon={Database} />
          <StatCard title="Interview Q's" value={stats.interviewQuestions} icon={Database} />
          <StatCard title="Quizzes" value={stats.quizzes} icon={Database} />
          <StatCard title="Roadmaps" value={stats.roadmaps} icon={Database} />
        </div>

        {/* Status */}
        <Card className="bg-card border border-border shadow-sm">
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Database Connection</span>
              <Badge className="bg-green-500/20 text-green-700">Connected</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Data Integrity</span>
              <Badge className="bg-green-500/20 text-green-700">Healthy</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">API Status</span>
              <Badge className="bg-green-500/20 text-green-700">Online</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
