
import React, { useEffect, useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Search, Shield, Star, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import pb from '@/lib/pocketbaseClient.js';

export default function AdminUserManagementPage() {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const records = await pb.collection('users').getList(1, 50, {
        sort: '-created',
        $autoCancel: false
      });
      
      setUsers(records.items);
      setTotalUsers(records.totalItems);
    } catch (err) {
      console.error('Error fetching users:', err);
      setError(err.message || 'Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = useMemo(() => {
    if (!searchTerm) return users;
    const lowerQuery = searchTerm.toLowerCase();
    return users.filter(u => 
      u.email.toLowerCase().includes(lowerQuery) || 
      (u.name && u.name.toLowerCase().includes(lowerQuery))
    );
  }, [users, searchTerm]);

  if (error) {
    return (
      <div className="p-8 flex flex-col items-center justify-center min-h-[60vh] bg-card rounded-2xl border border-border shadow-sm">
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
        <title>User Management | Admin Panel</title>
      </Helmet>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground">User Management</h1>
          <p className="text-muted-foreground mt-1">View and manage all registered users across the platform.</p>
        </div>
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

      <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground uppercase bg-muted/50 border-b border-border">
              <tr>
                <th className="px-6 py-4 font-medium">User</th>
                <th className="px-6 py-4 font-medium">Plan</th>
                <th className="px-6 py-4 font-medium">Join Date</th>
                <th className="px-6 py-4 font-medium">Status</th>
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
                    No users found matching your search criteria.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => {
                  const isActive = !!user.last_login;

                  return (
                    <tr key={user.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-medium text-foreground">{user.name || 'No Name Provided'}</div>
                        <div className="text-muted-foreground">{user.email}</div>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant={user.premium ? 'default' : 'secondary'} className={user.premium ? 'bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 shadow-none border-none' : ''}>
                          {user.premium ? <Star className="w-3 h-3 mr-1 fill-current" /> : null}
                          {user.premium ? 'Premium' : 'Free'}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        {new Date(user.created).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-2">
                          {isActive ? (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                              Active
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-500/10 text-slate-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                              Inactive
                            </span>
                          )}
                          {user.role === 'admin' && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-500/10 text-rose-600">
                              <Shield className="w-3 h-3" />
                              Admin
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
