
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { 
  Users, Star, FileText, Download, Bookmark, RefreshCw, 
  TrendingUp, AlertCircle, Database, BarChart3, Settings, ArrowRight
} from 'lucide-react';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { useAdminDashboardData } from '@/hooks/useAdminDashboardData.js';
import { toast } from 'sonner';

const COLORS = ['hsl(var(--primary))', '#10B981', '#8B5CF6', '#F59E0B', '#EF4444', '#64748B'];

export default function AdminDashboardPage() {
  const { data, loading, error, refresh } = useAdminDashboardData();
  const [lastRefreshed, setLastRefreshed] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleRefresh();
    }, 5 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, [refresh]);

  const handleRefresh = async () => {
    await refresh();
    setLastRefreshed(new Date());
    toast.success('Dashboard data refreshed');
  };

  if (error) {
    return (
      <div className="p-8 flex flex-col items-center justify-center min-h-[60vh] bg-card rounded-2xl border border-border shadow-sm">
        <AlertCircle className="w-16 h-16 text-destructive mb-4" />
        <h2 className="text-2xl font-bold mb-2">Error Loading Dashboard</h2>
        <p className="text-muted-foreground mb-6">{error}</p>
        <Button onClick={handleRefresh}>Try Again</Button>
      </div>
    );
  }

  const StatCard = ({ title, value, icon: Icon, colorClass }) => (
    <div className="bg-card rounded-2xl p-6 border border-border shadow-sm flex flex-col transition-all duration-300 hover:shadow-md">
      <div className="flex justify-between items-start mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClass}`}>
          <Icon className="w-6 h-6" />
        </div>
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-none">
          <TrendingUp className="w-3 h-3 mr-1" />
          Up
        </Badge>
      </div>
      <h3 className="text-muted-foreground text-sm font-medium mb-1">{title}</h3>
      {loading ? (
        <Skeleton className="h-8 w-24" />
      ) : (
        <div className="text-3xl font-extrabold text-foreground">{value?.toLocaleString() || 0}</div>
      )}
    </div>
  );

  const planDistributionData = [
    { name: 'Free', value: data?.freeUsers || 0 },
    { name: 'Premium', value: data?.paidUsers || 0 }
  ];

  return (
    <div className="space-y-8 pb-12 relative">
      <Helmet>
        <title>Admin Dashboard | CareerMastery</title>
      </Helmet>

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Platform metrics and user activity summary.</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-muted-foreground hidden sm:inline-block">
            Last updated: {lastRefreshed.toLocaleTimeString()}
          </span>
          <Button variant="outline" onClick={handleRefresh} disabled={loading} className="gap-2">
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="/admin/users" className="group bg-card border border-border rounded-xl p-4 flex items-center justify-between hover:border-primary hover:shadow-md transition-all">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">User Management</h3>
              <p className="text-xs text-muted-foreground">Manage accounts & roles</p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </Link>
        
        <Link to="/admin/subscriptions" className="group bg-card border border-border rounded-xl p-4 flex items-center justify-between hover:border-primary hover:shadow-md transition-all">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">
              <Star className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Subscriptions</h3>
              <p className="text-xs text-muted-foreground">View active plans & revenue</p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </Link>

        <Link to="/admin/data" className="group bg-card border border-border rounded-xl p-4 flex items-center justify-between hover:border-primary hover:shadow-md transition-all">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Data Management</h3>
              <p className="text-xs text-muted-foreground">Careers, Quizzes & Content</p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </Link>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard title="Total Users" value={data?.totalUsers} icon={Users} colorClass="bg-primary/10 text-primary" />
        <StatCard title="Premium Users" value={data?.paidUsers} icon={Star} colorClass="bg-amber-500/10 text-amber-500" />
        <StatCard title="Free Users" value={data?.freeUsers} icon={Users} colorClass="bg-slate-500/10 text-slate-500" />
        <StatCard title="CVs Created" value={data?.totalCVs} icon={FileText} colorClass="bg-emerald-500/10 text-emerald-500" />
        <StatCard title="Downloads" value={data?.totalDownloads} icon={Download} colorClass="bg-indigo-500/10 text-indigo-500" />
        <StatCard title="Bookmarks" value={data?.totalBookmarks} icon={Bookmark} colorClass="bg-rose-500/10 text-rose-500" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Growth Chart */}
        <div className="bg-card rounded-2xl border border-border shadow-sm p-6">
          <h3 className="text-lg font-bold mb-6 text-foreground">User Growth (30 Days)</h3>
          {loading ? (
            <Skeleton className="w-full h-72 rounded-xl" />
          ) : !data?.userGrowth || data.userGrowth.length === 0 ? (
            <div className="h-72 flex items-center justify-center text-muted-foreground">No data available</div>
          ) : (
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data.userGrowth}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.4} vertical={false} />
                  <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                    itemStyle={{ color: 'hsl(var(--foreground))' }}
                  />
                  <Line type="monotone" dataKey="count" name="Total Users" stroke={COLORS[0]} strokeWidth={3} dot={false} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        {/* Activity Chart */}
        <div className="bg-card rounded-2xl border border-border shadow-sm p-6">
          <h3 className="text-lg font-bold mb-6 text-foreground">Platform Activity (30 Days)</h3>
          {loading ? (
            <Skeleton className="w-full h-72 rounded-xl" />
          ) : !data?.activityData || data.activityData.length === 0 ? (
            <div className="h-72 flex items-center justify-center text-muted-foreground">No data available</div>
          ) : (
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data.activityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.4} vertical={false} />
                  <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                  <Line type="monotone" dataKey="cvCount" name="CVs Created" stroke={COLORS[1]} strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="downloadCount" name="Downloads" stroke={COLORS[2]} strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        {/* Revenue Chart */}
        <div className="bg-card rounded-2xl border border-border shadow-sm p-6">
          <h3 className="text-lg font-bold mb-6 text-foreground">Monthly Revenue (6 Months)</h3>
          {loading ? (
            <Skeleton className="w-full h-72 rounded-xl" />
          ) : !data?.monthlyRevenue || data.monthlyRevenue.length === 0 ? (
            <div className="h-72 flex items-center justify-center text-muted-foreground">No data available</div>
          ) : (
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data.monthlyRevenue}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.4} vertical={false} />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `$${val}`} />
                  <Tooltip 
                    cursor={{ fill: 'hsl(var(--muted))' }}
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                    formatter={(value) => [`$${value}`, 'Revenue']}
                  />
                  <Bar dataKey="revenue" fill={COLORS[0]} radius={[4, 4, 0, 0]} maxBarSize={50} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        {/* Plan Distribution */}
        <div className="bg-card rounded-2xl border border-border shadow-sm p-6 flex flex-col">
          <h3 className="text-lg font-bold mb-2 text-foreground">Plan Distribution</h3>
          {loading ? (
            <Skeleton className="w-full h-72 rounded-xl mt-4" />
          ) : !data?.totalUsers || data.totalUsers === 0 ? (
            <div className="h-72 flex items-center justify-center text-muted-foreground">No data available</div>
          ) : (
            <div className="h-72 w-full flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie 
                    data={planDistributionData} 
                    cx="50%" 
                    cy="50%" 
                    innerRadius={70} 
                    outerRadius={100} 
                    paddingAngle={5} 
                    dataKey="value"
                  >
                    <Cell fill={COLORS[4]} /> {/* Free */}
                    <Cell fill={COLORS[1]} /> {/* Premium */}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                    formatter={(value, name) => [`${value} Users (${((value / data.totalUsers) * 100).toFixed(1)}%)`, name]}
                  />
                  <Legend iconType="circle" verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
