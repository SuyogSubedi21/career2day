
import React, { useEffect, useState } from 'react';
import { Users, FileText, BrainCircuit, CreditCard, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import pb from '@/lib/pocketbaseClient.js';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

export default function AdminStatsPage() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    premiumUsers: 0,
    totalCVs: 0,
    quizzesCompleted: 0,
    totalRevenue: 0
  });
  const [loading, setLoading] = useState(true);

  // Mocking historical data for charts since we don't have time-series endpoint setup for standard tables without complex aggregation
  const mockChartData = [
    { name: 'Jan', users: 400, revenue: 2400 },
    { name: 'Feb', users: 600, revenue: 4130 },
    { name: 'Mar', users: 800, revenue: 5800 },
    { name: 'Apr', users: 1200, revenue: 8900 },
    { name: 'May', users: 1500, revenue: 11000 },
    { name: 'Jun', users: 2100, revenue: 14500 }
  ];

  useEffect(() => {
    const fetchRealData = async () => {
      try {
        const [usersReq, premiumReq, cvReq, quizReq, stripeReq, oneTimeReq] = await Promise.all([
          pb.collection('users').getList(1, 1, { $autoCancel: false }),
          pb.collection('users').getList(1, 1, { filter: 'premium = true', $autoCancel: false }),
          pb.collection('userCVs').getList(1, 1, { $autoCancel: false }),
          pb.collection('quizResults').getList(1, 1, { $autoCancel: false }),
          pb.collection('subscriptions_stripe').getFullList({ $autoCancel: false }).catch(() => []),
          pb.collection('one_time_downloads').getFullList({ $autoCancel: false }).catch(() => [])
        ]);

        let revenue = 0;
        stripeReq.forEach(r => { if(r.amount_paid) revenue += r.amount_paid; });
        oneTimeReq.forEach(r => { if(r.amount) revenue += r.amount; });

        setStats({
          totalUsers: usersReq.totalItems,
          premiumUsers: premiumReq.totalItems,
          totalCVs: cvReq.totalItems,
          quizzesCompleted: quizReq.totalItems,
          totalRevenue: revenue
        });
      } catch (error) {
        console.error('Error fetching admin stats:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRealData();
  }, []);

  const statCards = [
    { title: 'Total Registered Users', value: stats.totalUsers, icon: Users, color: 'text-blue-500' },
    { title: 'Premium Subscribers', value: stats.premiumUsers, icon: TrendingUp, color: 'text-emerald-500' },
    { title: 'CVs Generated', value: stats.totalCVs, icon: FileText, color: 'text-purple-500' },
    { title: 'Quizzes Completed', value: stats.quizzesCompleted, icon: BrainCircuit, color: 'text-rose-500' },
    { title: 'Estimated Revenue', value: `$${stats.totalRevenue.toLocaleString()}`, icon: CreditCard, color: 'text-amber-500' }
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-100 mb-2">Platform Analytics</h1>
        <p className="text-slate-400">Live statistics and revenue tracking.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
        {statCards.map((card, idx) => (
          <Card key={idx} className="bg-slate-900 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{card.title}</CardTitle>
              <card.icon className={`w-4 h-4 ${card.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-extrabold text-slate-100 font-mono">
                {loading ? '-' : card.value}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-slate-900 border-slate-800 p-6">
          <h3 className="text-lg font-bold text-slate-100 mb-6">User Growth (YTD)</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f1f5f9' }} />
                <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4, fill: '#3b82f6' }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-6">
          <h3 className="text-lg font-bold text-slate-100 mb-6">Revenue Growth (YTD)</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip cursor={{ fill: '#1e293b' }} contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f1f5f9' }} />
                <Bar dataKey="revenue" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}
