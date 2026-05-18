import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AlertCircle, RefreshCw, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { getAdminSummary, getAdminUsers } from '@/lib/adminApi.js';
import pb from '@/lib/pocketbaseClient.js';

const currentAdminFallback = () => {
  const model = pb.authStore.model;
  if (!model) return [];

  return [{
    id: model.id || model.email || 'current-admin',
    name: model.name || 'Admin',
    email: model.email || '',
    created: model.created || '',
    authProvider: 'email'
  }];
};

const normalizeUser = (user, collection = user.collection || 'users') => ({
  ...user,
  id: user.id,
  name: user.name || user.username || user.fullName || 'No name provided',
  email: user.email || 'No email',
  authProvider: user.authProvider || user.provider || 'email',
  created: user.created || '',
  collection
});

const fetchCollectionUsers = async (collection) => {
  try {
    const items = await pb.collection(collection).getFullList({ sort: '-created', $autoCancel: false });
    return items.map((item) => normalizeUser(item, collection));
  } catch {
    return [];
  }
};

export default function AdminUserManagementPage() {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const records = await getAdminUsers()
        .catch(async () => {
          const summary = await getAdminSummary();
          return summary.users || { items: [], totalItems: 0 };
        })
        .catch(async () => {
          const items = [
            ...(await fetchCollectionUsers('users')),
            ...(await fetchCollectionUsers('admin_users'))
          ].sort((a, b) => String(b.created || '').localeCompare(String(a.created || '')));
          return { items, totalItems: items.length };
        })
        .catch(() => ({ items: currentAdminFallback(), totalItems: currentAdminFallback().length }));

      const items = records.items?.length ? records.items.map((item) => normalizeUser(item)) : currentAdminFallback();
      setUsers(items);
      setTotalUsers(records.totalItems || items.length);
    } catch (err) {
      const fallbackUsers = currentAdminFallback();
      if (fallbackUsers.length) {
        setUsers(fallbackUsers);
        setTotalUsers(fallbackUsers.length);
        return;
      }
      setError(err.message || 'Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return users;
    return users.filter((user) => {
      return [user.name, user.email].filter(Boolean).some((value) => String(value).toLowerCase().includes(query));
    });
  }, [users, searchTerm]);

  if (error) {
    return (
      <div className="p-8 flex flex-col items-center justify-center min-h-[60vh] bg-card rounded-lg border border-border shadow-sm">
        <AlertCircle className="w-16 h-16 text-destructive mb-4" />
        <h2 className="text-2xl font-bold mb-2">Error Loading Users</h2>
        <p className="text-muted-foreground mb-6">{error}</p>
        <Button onClick={fetchUsers}>Try Again</Button>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-12">
      <Helmet>
        <title>Users | Admin Panel</title>
      </Helmet>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Users</h1>
          <p className="text-muted-foreground mt-1">Privacy-safe list of registered users, including Google signups.</p>
        </div>
        <Button variant="outline" onClick={fetchUsers} className="gap-2">
          <RefreshCw className="h-4 w-4" />
          Refresh
        </Button>
      </div>

      <Card className="bg-card border-border shadow-sm">
        <CardContent className="p-4 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by email or name..."
              className="pl-9 bg-background h-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-4 text-sm font-medium text-muted-foreground">
            <span>Total Users: <strong className="text-foreground">{totalUsers}</strong></span>
            <span>Showing: <strong className="text-foreground">{filteredUsers.length}</strong></span>
          </div>
        </CardContent>
      </Card>

      <div className="bg-card rounded-lg border border-border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground uppercase bg-muted/50 border-b border-border">
              <tr>
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Email / Gmail</th>
                <th className="px-6 py-4 font-medium">Signup Method</th>
                <th className="px-6 py-4 font-medium">Join Date</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={4} className="p-6">
                    <div className="space-y-4">
                      {[...Array(5)].map((_, i) => <Skeleton key={i} className="w-full h-12 rounded-lg" />)}
                    </div>
                  </td>
                </tr>
              ) : filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-12 text-center text-muted-foreground">
                    No users found.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-foreground">{user.name || 'No name provided'}</div>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{user.email || 'No email'}</td>
                    <td className="px-6 py-4 text-muted-foreground capitalize">{user.authProvider || 'email'}</td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {user.created ? new Date(user.created).toLocaleDateString() : '-'}
                    </td>
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
