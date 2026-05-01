
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Search, Filter, MoreHorizontal, Mail, Trash2, Edit, Shield } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

export default function UsersManagementPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const records = await pb.collection('users').getList(1, 50, {
        sort: '-created',
        $autoCancel: false
      });
      setUsers(records.items);
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = users.filter(u => 
    u.email.toLowerCase().includes(searchTerm.toLowerCase()) || 
    (u.name && u.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <Helmet>
        <title>Users Management | Admin Portal</title>
      </Helmet>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Users Management</h1>
          <p className="text-muted-foreground">View and manage user accounts.</p>
        </div>
        <Button>Export Users</Button>
      </div>

      <div className="admin-card p-0 overflow-hidden">
        <div className="p-4 border-b border-border flex flex-col sm:flex-row gap-4 justify-between bg-muted/20">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search users..." 
              className="pl-9 bg-background"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm"><Filter className="w-4 h-4 mr-2" /> Filter</Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground uppercase bg-muted/50 border-b border-border">
              <tr>
                <th className="px-6 py-4 font-medium">User</th>
                <th className="px-6 py-4 font-medium">Role</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Joined</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan="5" className="px-6 py-8 text-center text-muted-foreground">Loading users...</td></tr>
              ) : filteredUsers.length === 0 ? (
                <tr><td colSpan="5" className="px-6 py-8 text-center text-muted-foreground">No users found.</td></tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="border-b border-border hover:bg-muted/20 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                          {user.name ? user.name.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{user.name || 'No Name'}</div>
                          <div className="text-muted-foreground text-xs">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="outline" className="capitalize">{user.role || 'user'}</Badge>
                    </td>
                    <td className="px-6 py-4">
                      {user.verified ? (
                        <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20 border-0">Verified</Badge>
                      ) : (
                        <Badge variant="secondary" className="text-muted-foreground border-0">Unverified</Badge>
                      )}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {new Date(user.created).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary"><Mail className="w-4 h-4" /></Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary"><Edit className="w-4 h-4" /></Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive"><Trash2 className="w-4 h-4" /></Button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-border flex items-center justify-between text-sm text-muted-foreground bg-muted/20">
          <span>Showing {filteredUsers.length} users</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm" disabled>Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
