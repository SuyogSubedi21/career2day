
import React, { useState } from 'react';
import { Calendar, Download, RefreshCw, FileText, FileSpreadsheet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export default function AdminDashboardFilters({ 
  dateRange, 
  setDateRange, 
  onRefresh, 
  onExportCSV, 
  onExportPDF,
  isRefreshing 
}) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-card p-4 rounded-md border border-border shadow-sm mb-8">
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span className="text-sm font-medium">Date Range:</span>
        </div>
        <Select value={dateRange} onValueChange={setDateRange}>
          <SelectTrigger className="w-[180px] bg-background border-border">
            <SelectValue placeholder="Select range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7days">Last 7 days</SelectItem>
            <SelectItem value="30days">Last 30 days</SelectItem>
            <SelectItem value="90days">Last 90 days</SelectItem>
            <SelectItem value="1year">Last year</SelectItem>
            <SelectItem value="all">All time</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-3 w-full sm:w-auto">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onRefresh} 
          disabled={isRefreshing}
          className="bg-background border-border hover:bg-muted"
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
          Refresh
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem onClick={onExportCSV} className="cursor-pointer">
              <FileSpreadsheet className="w-4 h-4 mr-2 text-green-500" />
              Export as CSV
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onExportPDF} className="cursor-pointer">
              <FileText className="w-4 h-4 mr-2 text-red-500" />
              Export as PDF
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
