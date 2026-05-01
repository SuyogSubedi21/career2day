
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { 
  Users, Star, FileText, Download, Bookmark, RefreshCw, 
  TrendingUp, AlertCircle, ChevronLeft, ChevronRight,
  Eye, Edit2, Trash2
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

const COLORS = ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B', '#EF4444', '#64748B'];

export default function AdminAnalyticsDashboard() {
  const { data, loading, error, refresh } = useAdminDashboardData();
  const [lastRefreshed, setLastRefreshed] = useState(new Date());
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  // Auto-refresh every 5 minutes
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

  const handleUserAction = (action, user) => {
    toast.info(`${action} user: ${user.email} (Coming soon)`);
  };

  if (error) {
    return (
      <div className="p-8 flex flex-col items-center justify-center min-h-[60vh] bg-card rounded-2xl border border-border">
        <AlertCircle className="w-16 h-16 text-destructive mb-4" />
        <h2 className="text-2xl font-bold mb-2">Error Loading Dashboard</h2>
        <p className="text-muted-foreground mb-6">{error}</p>
        <Button onClick={handleRefresh}>Try Again</Button>
      </div>
    );
  }

  // Pagination logic
  const totalPages = Math.ceil(data.users.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = data.users.slice(indexOfFirstUser, indexOfLastUser);

  const StatCard = ({ title, value, icon: Icon, colorClass, delay }) => (
    <div className={`bg-card rounded-2xl p-6 border border-border shadow-sm flex flex-col transition-all duration-300 animate-in fade-in slide-in-from-bottom-4`} style={{ animationDelay: `${delay}ms` }}>
      <div className="flex justify-between items-start mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClass}`}>
          <Icon className="w-6 h-6" />
        </div>
        <Badge variant="secondary" className="bg-success/10 text-success border-none">
          <TrendingUp className="w-3 h-3 mr-1" />
          Up
        </Badge>
      </div>
      <h3 className="text-muted-foreground text-sm font-medium mb-1">{title}</h3>
      {loading ? (
        <Skeleton className="h-8 w-24" />
      ) : (
        <div className="text-3xl font-extrabold text-foreground">{value.toLocaleString()}</div>
      )}
    </div>
  );

  return (
    <div className="space-y-8 pb-12">
      <Helmet>
        <title>Admin Dashboard | CareerMastery</title>
      </Helmet>

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1">Overview of platform metrics and user activity.</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-muted-foreground">
            Last updated: {lastRefreshed.toLocaleTimeString()}
          </span>
          <Button variant="outline" onClick={handleRefresh} disabled={loading} className="gap-2">
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard title="Total Users" value={data.stats.totalUsers} icon={Users} colorClass="bg-blue-500/10 text-blue-500" delay={0} />
        <StatCard title="Premium Users" value={data.stats.paidUsers} icon={Star} colorClass="bg-amber-500/10 text-amber-500" delay={50} />
        <StatCard title="Free Users" value={data.stats.freeUsers} icon={Users} colorClass="bg-slate-500/10 text-slate-500" delay={100} />
        <StatCard title="Total CVs Created" value={data.stats.totalCVs} icon={FileText} colorClass="bg-emerald-500/10 text-emerald-500" delay={150} />
        <StatCard title="Total Downloads" value={data.stats.totalDownloads} icon={Download} colorClass="bg-indigo-500/10 text-indigo-500" delay={200} />
        <StatCard title="Total Bookmarks" value={data.stats.totalBookmarks} icon={Bookmark} colorClass="bg-rose-500/10 text-rose-500" delay={250} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Growth Chart */}
        <div className="bg-card rounded-2xl border border-border shadow-sm p-6">
          <h3 className="text-lg font-bold mb-6 text-foreground">User Growth (30 Days)</h3>
          {loading ? (
            <Skeleton className="w-full h-72 rounded-xl" />
          ) : (
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data.chartData.userGrowth}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.4} vertical={false} />
                  <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                    itemStyle={{ color: 'hsl(var(--foreground))' }}
                  />
                  <Line type="monotone" dataKey="users" name="Total Users" stroke={COLORS[0]} strokeWidth={3} dot={false} activeDot={{ r: 6 }} />
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
          ) : (
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data.chartData.activity}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.4} vertical={false} />
                  <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                  <Line type="monotone" dataKey="cvs" name="CVs Created" stroke={COLORS[1]} strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="downloads" name="Downloads" stroke={COLORS[2]} strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="bookmarks" name="Bookmarks" stroke={COLORS[3]} strokeWidth={2} dot={false} />
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
          ) : (
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data.chartData.revenue}>
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
          ) : (
            <div className="h-72 w-full flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie 
                    data={data.chartData.planDistribution} 
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
                  />
                  <Legend iconType="circle" verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
        <div className="p-6 border-b border-border flex justify-between items-center bg-muted/30">
          <h3 className="text-lg font-bold text-foreground">User Management</h3>
          <Badge variant="secondary">{data.users.length} Total</Badge>
        </div>
        
        <div className="overflow-x-auto">
          {loading ? (
            <div className="p-6 space-y-4">
              {[...Array(5)].map((_, i) => <Skeleton key={i} className="w-full h-12 rounded-lg" />)}
            </div>
          ) : data.users.length === 0 ? (
            <div className="p-12 text-center text-muted-foreground">
              No users found.
            </div>
          ) : (
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-muted/50 border-b border-border">
                <tr>
                  <th className="px-6 py-4 font-medium">User</th>
                  <th className="px-6 py-4 font-medium">Plan</th>
                  <th className="px-6 py-4 font-medium">Join Date</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((user) => (
                  <tr key={user.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-foreground">{user.name}</div>
                      <div className="text-muted-foreground">{user.email}</div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant={user.plan === 'Premium' ? 'default' : 'secondary'} className={user.plan === 'Premium' ? 'bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 shadow-none border-none' : ''}>
                        {user.plan === 'Premium' ? <Star className="w-3 h-3 mr-1 fill-current" /> : null}
                        {user.plan}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {new Date(user.joinDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user.status === 'Active' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-slate-500/10 text-slate-600'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' : 'bg-slate-500'}`}></span>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground" onClick={() => handleUserAction('View', user)}>
                          <Eye className="w-4 h-4" />
                          <span className="sr-only">View</span>
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary" onClick={() => handleUserAction('Edit', user)}>
                          <Edit2 className="w-4 h-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10" onClick={() => handleUserAction('Delete', user)}>
                          <Trash2 className="w-4 h-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        
        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <div className="p-4 border-t border-border flex items-center justify-between bg-muted/10">
            <span className="text-sm text-muted-foreground">
              Showing <span className="font-medium text-foreground">{indexOfFirstUser + 1}</span> to <span className="font-medium text-foreground">{Math.min(indexOfLastUser, data.users.length)}</span> of <span className="font-medium text-foreground">{data.users.length}</span> users
            </span>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4 mr-1" /> Prev
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                Next <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
