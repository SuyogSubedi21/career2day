
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Bookmark, BrainCircuit, Target, ArrowRight, ShieldCheck, CreditCard } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext.jsx';
import pb from '@/lib/pocketbaseClient.js';

export default function DashboardPage() {
  const { currentUser } = useAuth();
  const [stats, setStats] = useState({ cvs: 0, bookmarks: 0, quizzes: 0, practice: 0 });
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!currentUser) return;
      try {
        const [cvs, bookmarks, quizzes, practice, subs] = await Promise.all([
          pb.collection('userCVs').getList(1, 1, { filter: `userId="${currentUser.id}"`, $autoCancel: false }),
          pb.collection('savedCareers').getList(1, 1, { filter: `userId="${currentUser.id}"`, $autoCancel: false }),
          pb.collection('quizResults').getList(1, 1, { filter: `userId="${currentUser.id}"`, $autoCancel: false }),
          pb.collection('interviewProgress').getList(1, 1, { filter: `userId="${currentUser.id}"`, $autoCancel: false }),
          pb.collection('subscriptions_stripe').getList(1, 1, { 
            filter: `user_email="${currentUser.email}" && status="active"`, 
            sort: '-created',
            $autoCancel: false 
          })
        ]);
        
        setStats({
          cvs: cvs.totalItems,
          bookmarks: bookmarks.totalItems,
          quizzes: quizzes.totalItems,
          practice: practice.totalItems
        });

        if (subs.items.length > 0) {
          setSubscription(subs.items[0]);
        }
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentUser]);

  const cards = [
    { title: 'Saved CVs', count: stats.cvs, icon: FileText, link: '/cv-builder', color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { title: 'Bookmarked Careers', count: stats.bookmarks, icon: Bookmark, link: '/careers', color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { title: 'Completed Quizzes', count: stats.quizzes, icon: BrainCircuit, link: '/quiz', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { title: 'Practice Progress', count: stats.practice, icon: Target, link: '/practice', color: 'text-orange-500', bg: 'bg-orange-500/10' },
  ];

  const isPremium = subscription && (subscription.plan_type === 'premium_monthly' || subscription.plan_type === 'premium_annual');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-foreground tracking-tight mb-2">Dashboard</h1>
        <p className="text-lg text-muted-foreground">Welcome back, {currentUser?.name || 'User'}. Here's your progress.</p>
      </div>

      {/* Account Status Section */}
      <Card className={`mb-12 border-2 shadow-md ${isPremium ? 'border-primary/50 bg-primary/5' : 'border-border bg-card'}`}>
        <CardContent className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${isPremium ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' : 'bg-muted text-muted-foreground'}`}>
              {isPremium ? <ShieldCheck className="w-7 h-7" /> : <CreditCard className="w-7 h-7" />}
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground flex items-center gap-3">
                Account Status
                {isPremium ? (
                  <Badge className="bg-primary hover:bg-primary text-primary-foreground font-bold px-3 py-0.5">Premium</Badge>
                ) : (
                  <Badge variant="secondary" className="font-bold px-3 py-0.5">Free Plan</Badge>
                )}
              </h2>
              <p className="text-muted-foreground mt-1">
                {isPremium 
                  ? `You are currently on the ${subscription.plan_type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}.` 
                  : 'Upgrade to Premium to unlock unlimited CV downloads and all practice questions.'}
              </p>
            </div>
          </div>
          <div className="shrink-0 w-full sm:w-auto">
            {!isPremium && (
              <Button asChild size="lg" className="w-full sm:w-auto font-bold shadow-md">
                <Link to="/pricing">Upgrade Now</Link>
              </Button>
            )}
            {isPremium && (
              <Button asChild variant="outline" className="w-full sm:w-auto font-bold bg-background">
                <Link to="/settings">Manage Subscription</Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {cards.map((card, i) => (
          <Card key={i} className="border-border bg-card shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-200">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{card.title}</CardTitle>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${card.bg} ${card.color}`}>
                <card.icon className="w-5 h-5" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-extrabold text-foreground mb-4">{loading ? '-' : card.count}</div>
              <Button asChild variant="ghost" className="w-full justify-between text-sm text-muted-foreground hover:text-primary hover:bg-primary/5">
                <Link to={card.link}>View Details <ArrowRight className="w-4 h-4" /></Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-border bg-card shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl">Recent Activity</CardTitle>
            <CardDescription>Your latest actions on the platform.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="py-8 text-center border-2 border-dashed border-border rounded-xl bg-muted/30">
              <p className="text-muted-foreground text-sm">No recent activity found. Start exploring careers or practicing interviews!</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-border bg-card shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl">Quick Links</CardTitle>
            <CardDescription>Jump right back into your preparation.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Button asChild variant="outline" className="justify-start h-14 text-base font-medium hover:bg-primary/5 hover:text-primary hover:border-primary/30 transition-colors">
              <Link to="/cv-builder"><FileText className="w-5 h-5 mr-3 text-blue-500" /> Create New CV</Link>
            </Button>
            <Button asChild variant="outline" className="justify-start h-14 text-base font-medium hover:bg-primary/5 hover:text-primary hover:border-primary/30 transition-colors">
              <Link to="/practice"><Target className="w-5 h-5 mr-3 text-orange-500" /> Start Interview Practice</Link>
            </Button>
            <Button asChild variant="outline" className="justify-start h-14 text-base font-medium hover:bg-primary/5 hover:text-primary hover:border-primary/30 transition-colors">
              <Link to="/careers"><Bookmark className="w-5 h-5 mr-3 text-purple-500" /> Explore Careers</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
