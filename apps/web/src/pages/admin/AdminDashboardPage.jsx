import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Activity, CreditCard, Database, Eye, FileText, RefreshCw, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient.js';

const countCollection = async (name, options = {}) => {
  try {
    const result = await pb.collection(name).getList(1, 1, { ...options, $autoCancel: false });
    return result.totalItems || 0;
  } catch {
    return 0;
  }
};

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    users: 0,
    subscriptions: 0,
    activeSubscriptions: 0,
    pageViews: 0,
    userActivity: 0,
    cvs: 0,
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
      const [
        users,
        subscriptions,
        activeSubscriptions,
        pageViews,
        userActivity,
        cvs,
        careers,
        skills,
        interviewQuestions,
        quizzes,
        roadmaps
      ] = await Promise.all([
        countCollection('users'),
        countCollection('subscriptions_stripe'),
        countCollection('subscriptions_stripe', { filter: 'status = "active"' }),
        countCollection('page_views'),
        countCollection('user_activity'),
        countCollection('userCVs'),
        countCollection('careers'),
        countCollection('careerSkills'),
        countCollection('careerInterviewQuestions'),
        countCollection('careerQuizzes'),
        countCollection('careerRoadmaps')
      ]);

      setStats({
        users,
        subscriptions,
        activeSubscriptions,
        pageViews,
        userActivity,
        cvs,
        careers,
        skills,
        interviewQuestions,
        quizzes,
        roadmaps
      });
    } catch (e) {
      toast.error('Failed to load admin dashboard: ' + e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStats();
  }, []);

  const StatCard = ({ title, value, icon: Icon, hint }) => (
    <Card className="bg-card border border-border shadow-sm">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">{title}</p>
            <p className="text-3xl font-bold">{loading ? '-' : value}</p>
            {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
          </div>
          <Icon className="w-10 h-10 text-primary/50" />
        </div>
      </CardContent>
    </Card>
  );

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Career2Day</title>
      </Helmet>

      <div className="space-y-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-2">Users, subscriptions, views, activity, and career content.</p>
          </div>
          <Button onClick={loadStats} variant="outline" size="sm" className="gap-2">
            <RefreshCw className="w-4 h-4" />
            Refresh
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <StatCard title="Users" value={stats.users} icon={Users} hint="Registered accounts" />
          <StatCard title="Subscriptions" value={stats.subscriptions} icon={CreditCard} hint={`${stats.activeSubscriptions} active`} />
          <StatCard title="Page Views" value={stats.pageViews} icon={Eye} hint="Tracked visits" />
          <StatCard title="User Activity" value={stats.userActivity} icon={Activity} hint="Logged actions" />
          <StatCard title="Saved CVs" value={stats.cvs} icon={FileText} />
          <StatCard title="Careers" value={stats.careers} icon={Database} />
          <StatCard title="Skills" value={stats.skills} icon={Database} />
          <StatCard title="Interview Q's" value={stats.interviewQuestions} icon={Database} />
          <StatCard title="Quizzes" value={stats.quizzes} icon={Database} />
          <StatCard title="Roadmaps" value={stats.roadmaps} icon={Database} />
        </div>

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
              <span className="text-sm">API Status</span>
              <Badge className="bg-green-500/20 text-green-700">Online</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">User Privacy</span>
              <Badge variant="secondary">Users page shows name and email only</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
