import React from 'react';
import { Helmet } from 'react-helmet';
import { Activity, Bookmark, CreditCard, Database, Eye, FileText, RefreshCw, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAdminDashboardData } from '@/hooks/useAdminDashboardData.js';

export default function AdminDashboardPage() {
  const { data, loading, error, refresh } = useAdminDashboardData();

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
          <Button onClick={refresh} variant="outline" size="sm" className="gap-2">
            <RefreshCw className="w-4 h-4" />
            Refresh
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <StatCard title="Users" value={data.totalUsers} icon={Users} hint={`${data.freeUsers} free / ${data.paidUsers} paid`} />
          <StatCard title="Subscriptions" value={data.paidUsers} icon={CreditCard} hint={`${data.paidUsers} active members`} />
          <StatCard title="Page Views" value={data.pageViews} icon={Eye} hint="Tracked visits" />
          <StatCard title="User Activity" value={data.userActivity} icon={Activity} hint="Logged actions" />
          <StatCard title="Saved CVs" value={data.totalCVs} icon={FileText} />
          <StatCard title="Downloads" value={data.totalDownloads} icon={FileText} />
          <StatCard title="Bookmarks" value={data.totalBookmarks} icon={Bookmark} />
          <StatCard title="Careers" value={data.totalCareers} icon={Database} />
        </div>

        {error && (
          <Card className="border-destructive/30 bg-destructive/5">
            <CardContent className="pt-6 text-sm text-destructive">{error}</CardContent>
          </Card>
        )}

        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="bg-card border border-border shadow-sm">
            <CardHeader>
              <CardTitle>Recent Members</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {loading ? (
                <p className="text-sm text-muted-foreground">Loading members...</p>
              ) : data.recentUsers.length === 0 ? (
                <p className="text-sm text-muted-foreground">No members found.</p>
              ) : data.recentUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between gap-3 rounded-md border border-border px-3 py-2">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">{user.name || 'No name provided'}</p>
                    <p className="truncate text-xs text-muted-foreground">{user.email || 'No email'}</p>
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground">{user.created ? new Date(user.created).toLocaleDateString() : '-'}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card border border-border shadow-sm">
            <CardHeader>
              <CardTitle>Most Viewed Pages</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {loading ? (
                <p className="text-sm text-muted-foreground">Loading views...</p>
              ) : data.topPages.length === 0 ? (
                <p className="text-sm text-muted-foreground">No page views tracked yet.</p>
              ) : data.topPages.map((page) => (
                <div key={page.page} className="flex items-center justify-between gap-3 rounded-md border border-border px-3 py-2">
                  <p className="min-w-0 truncate text-sm font-semibold">{page.page}</p>
                  <Badge variant="secondary">{page.views}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
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
              <Badge className={data.adminStatus?.summaryOk ? 'bg-green-500/20 text-green-700' : 'bg-red-500/20 text-red-700'}>
                {data.adminStatus?.summaryOk ? 'Online' : `Admin API ${data.adminStatus?.summaryError || 'unavailable'}`}
              </Badge>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm">Admin User Reads</span>
              <Badge className={data.adminStatus?.usersOk ? 'bg-green-500/20 text-green-700' : 'bg-red-500/20 text-red-700'}>
                {data.adminStatus?.usersOk ? 'Online' : `Users API ${data.adminStatus?.usersError || 'unavailable'}`}
              </Badge>
            </div>
            {data.adminStatus?.diagnostics && (
              <div className="rounded-md border border-border bg-muted/40 p-3 text-xs text-muted-foreground">
                users: {data.adminStatus.diagnostics.collectionCounts?.users ?? '-'} | admin_users: {data.adminStatus.diagnostics.collectionCounts?.admin_users ?? '-'} | admins: {data.adminStatus.diagnostics.collectionCounts?.admins ?? '-'} | auth: {data.adminStatus.diagnostics.authCollection || '-'}
              </div>
            )}
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
