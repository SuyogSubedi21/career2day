import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AlertCircle, CreditCard, RefreshCw, Search } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { getAdminSubscriptions } from '@/lib/adminApi.js';

const money = (value) => {
  const amount = Number(value || 0);
  if (!amount) return '-';
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
};

const getStatusVariant = (status) => {
  if (status === 'active') return 'default';
  if (status === 'canceled' || status === 'cancelled') return 'destructive';
  return 'secondary';
};

export default function AdminSubscriptionsPage() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const loadSubscriptions = async () => {
    try {
      setLoading(true);
      setError('');
      const records = await getAdminSubscriptions().catch(() => ({ items: [], totalItems: 0 }));
      setSubscriptions(records.items || []);
    } catch (err) {
      setError(err.message || 'Failed to load subscriptions');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSubscriptions();
  }, []);

  const filteredSubscriptions = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return subscriptions;
    return subscriptions.filter((item) => {
      return [item.user_email, item.plan_type, item.status, item.stripe_subscription_id]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(query));
    });
  }, [subscriptions, searchTerm]);

  const activeCount = subscriptions.filter((item) => item.status === 'active').length;
  const totalRevenue = subscriptions.reduce((sum, item) => sum + Number(item.amount_paid || 0), 0);

  if (error) {
    return (
      <div className="p-8 flex flex-col items-center justify-center min-h-[60vh] bg-card rounded-lg border border-border shadow-sm">
        <AlertCircle className="w-16 h-16 text-destructive mb-4" />
        <h2 className="text-2xl font-bold mb-2">Error Loading Subscriptions</h2>
        <p className="text-muted-foreground mb-6">{error}</p>
        <Button onClick={loadSubscriptions}>Try Again</Button>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-12">
      <Helmet>
        <title>Subscriptions | Admin Panel</title>
      </Helmet>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Subscriptions</h1>
          <p className="text-muted-foreground mt-1">Review Stripe subscription records and payment status.</p>
        </div>
        <Button variant="outline" onClick={loadSubscriptions} className="gap-2">
          <RefreshCw className="h-4 w-4" />
          Refresh
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card><CardContent className="p-5"><p className="text-sm text-muted-foreground">Total subscriptions</p><p className="mt-2 text-3xl font-bold">{loading ? '-' : subscriptions.length}</p></CardContent></Card>
        <Card><CardContent className="p-5"><p className="text-sm text-muted-foreground">Active subscriptions</p><p className="mt-2 text-3xl font-bold">{loading ? '-' : activeCount}</p></CardContent></Card>
        <Card><CardContent className="p-5"><p className="text-sm text-muted-foreground">Recorded revenue</p><p className="mt-2 text-3xl font-bold">{loading ? '-' : money(totalRevenue)}</p></CardContent></Card>
      </div>

      <Card className="bg-card border-border shadow-sm">
        <CardContent className="p-4 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search email, plan, status..." className="pl-9 bg-background h-10" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          <div className="text-sm font-medium text-muted-foreground">Showing <strong className="text-foreground">{filteredSubscriptions.length}</strong></div>
        </CardContent>
      </Card>

      <div className="bg-card rounded-lg border border-border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground uppercase bg-muted/50 border-b border-border">
              <tr>
                <th className="px-6 py-4 font-medium">User Email</th>
                <th className="px-6 py-4 font-medium">Plan</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Amount</th>
                <th className="px-6 py-4 font-medium">Created</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={5} className="p-6"><div className="space-y-4">{[...Array(5)].map((_, i) => <Skeleton key={i} className="w-full h-12 rounded-lg" />)}</div></td></tr>
              ) : filteredSubscriptions.length === 0 ? (
                <tr><td colSpan={5} className="p-12 text-center text-muted-foreground"><CreditCard className="mx-auto mb-3 h-8 w-8 opacity-50" />No subscriptions found.</td></tr>
              ) : (
                filteredSubscriptions.map((item) => (
                  <tr key={item.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 font-medium">{item.user_email || '-'}</td>
                    <td className="px-6 py-4 text-muted-foreground">{item.plan_type || '-'}</td>
                    <td className="px-6 py-4"><Badge variant={getStatusVariant(item.status)}>{item.status || 'unknown'}</Badge></td>
                    <td className="px-6 py-4 text-muted-foreground">{money(item.amount_paid)}</td>
                    <td className="px-6 py-4 text-muted-foreground">{item.created ? new Date(item.created).toLocaleDateString() : '-'}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
