
import React from 'react';
import { Helmet } from 'react-helmet';
import { FileText, Download, Clock, CheckCircle2 } from 'lucide-react';

export default function CVBuilderStatsPage() {
  return (
    <div className="space-y-6">
      <Helmet>
        <title>CV Builder Stats | Admin Portal</title>
      </Helmet>

      <div>
        <h1 className="text-2xl font-bold tracking-tight">CV Builder Statistics</h1>
        <p className="text-muted-foreground">Usage metrics for the resume generation tool.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="admin-card">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-muted-foreground">Total CVs</h3>
            <FileText className="w-4 h-4 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">4,281</h2>
        </div>
        <div className="admin-card">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-muted-foreground">Downloads</h3>
            <Download className="w-4 h-4 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">12,593</h2>
        </div>
        <div className="admin-card">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-muted-foreground">Completion Rate</h3>
            <CheckCircle2 className="w-4 h-4 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold">78%</h2>
        </div>
        <div className="admin-card">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-muted-foreground">Avg Time</h3>
            <Clock className="w-4 h-4 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">14m</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="admin-card min-h-[300px] flex items-center justify-center text-muted-foreground">
          Template Popularity Chart Placeholder
        </div>
        <div className="admin-card min-h-[300px] flex items-center justify-center text-muted-foreground">
          CVs Created Over Time Placeholder
        </div>
      </div>
    </div>
  );
}
