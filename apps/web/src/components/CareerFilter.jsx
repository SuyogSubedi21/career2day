
import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

export default function CareerFilter({ careers, onFilterChange }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [demandFilter, setDemandFilter] = useState('all');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Apply filters whenever debounced search or demand filter changes
  useEffect(() => {
    if (!careers) return;
    
    let filtered = [...careers];
    
    // Filter by search term (case-insensitive)
    if (debouncedSearch.trim()) {
      const search = debouncedSearch.toLowerCase();
      filtered = filtered.filter(career => 
        career.name?.toLowerCase().includes(search) ||
        career.description?.toLowerCase().includes(search)
      );
    }
    
    // Filter by job demand
    if (demandFilter !== 'all') {
      filtered = filtered.filter(career => 
        career.jobDemand?.toLowerCase() === demandFilter.toLowerCase()
      );
    }
    
    onFilterChange(filtered);
  }, [debouncedSearch, demandFilter, careers, onFilterChange]);

  const handleClearFilters = () => {
    setSearchTerm('');
    setDemandFilter('all');
  };

  const hasActiveFilters = searchTerm.trim() !== '' || demandFilter !== 'all';

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
        <Input
          type="text"
          placeholder="Search careers by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 h-12 bg-background border-border text-foreground placeholder:text-muted-foreground"
        />
      </div>
      
      <Select value={demandFilter} onValueChange={setDemandFilter}>
        <SelectTrigger className="w-full sm:w-[200px] h-12 bg-background border-border text-foreground">
          <SelectValue placeholder="Job Demand" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Demand Levels</SelectItem>
          <SelectItem value="high">High Demand</SelectItem>
          <SelectItem value="medium">Medium Demand</SelectItem>
          <SelectItem value="low">Low Demand</SelectItem>
        </SelectContent>
      </Select>
      
      {hasActiveFilters && (
        <Button
          variant="outline"
          onClick={handleClearFilters}
          className="h-12 px-6 border-border text-foreground hover:bg-muted"
        >
          <X className="w-4 h-4 mr-2" />
          Clear Filters
        </Button>
      )}
    </div>
  );
}
