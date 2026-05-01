
import React from 'react';
import { Helmet } from 'react-helmet';
import { CreditCard, DollarSign, RefreshCw, AlertTriangle } from 'lucide-react';

export default function SubscriptionsManagementPage() {
  return (
    <div className="space-y-6">
      <Helmet>
        <title>Subscriptions | Admin Portal</title>
      </Helmet>

      <div>
        <h1 className="text-2xl font-bold tracking-tight">Subscriptions Management</h1>
        <p className="text-muted-foreground">Monitor revenue and manage user plans.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="admin-card">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-muted-foreground">MRR</h3>
            <DollarSign className="w-4 h-4 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">$12,450</h2>
          <p className="text-xs text-green-600 mt-1">+8.2% from last month</p>
        </div>
        <div className="admin-card">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-muted-foreground">Active Subs</h3>
            <CreditCard className="w-4 h-4 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">842</h2>
          <p className="text-xs text-green-600 mt-1">+12 new this week</p>
        </div>
        <div className="admin-card">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-muted-foreground">Churn Rate</h3>
            <AlertTriangle className="w-4 h-4 text-destructive" />
          </div>
          <h2 className="text-3xl font-bold">2.4%</h2>
          <p className="text-xs text-muted-foreground mt-1">Target: &lt; 3%</p>
        </div>
        <div className="admin-card">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-muted-foreground">Avg LTV</h3>
            <RefreshCw className="w-4 h-4 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">$145</h2>
          <p className="text-xs text-green-600 mt-1">+5.1% year over year</p>
        </div>
      </div>

      <div className="admin-card p-8 text-center">
        <CreditCard className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
        <h3 className="text-lg font-medium mb-2">Subscription Data Table</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Detailed subscription management interface is under construction. This will include full CRUD operations for user billing plans.
        </p>
      </div>
    </div>
  );
}
