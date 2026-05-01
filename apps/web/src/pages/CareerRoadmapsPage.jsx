
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CareerCard from '@/components/CareerCard.jsx';
import { careers } from '@/data/careerData.js';

export default function CareerRoadmapsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const categories = ['All', ...new Set(careers.map(c => c.category))];

  const filteredCareers = careers.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          c.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || c.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <Helmet>
        <title>50 High-Paying IT Careers | CareerMastery</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">50 High-Paying IT Careers</h1>
          <p className="text-xl text-muted-foreground">
            Choose your path and master the skills. Comprehensive roadmaps, salary insights, and required technologies for every major tech role.
          </p>
        </motion.div>

        {/* Search & Filter */}
        <div className="glass-card p-4 rounded-2xl mb-12 flex flex-col md:flex-row gap-4 relative z-20">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              placeholder="Search careers, skills, or roles..." 
              className="pl-12 h-14 text-lg rounded-xl bg-transparent border-none shadow-none focus-visible:ring-0 px-0"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="hidden md:block w-px h-8 bg-border self-center" />
          <div className="flex items-center gap-4 md:w-auto">
            <Filter className="w-5 h-5 text-muted-foreground hidden md:block" />
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="h-14 rounded-xl border-none shadow-none bg-transparent w-full md:w-[200px] focus:ring-0">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(cat => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCareers.map((career, i) => (
            <motion.div 
              key={career.id || career.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (i % 10) * 0.05 }}
            >
              <CareerCard career={career} />
            </motion.div>
          ))}
          {filteredCareers.length === 0 && (
            <div className="col-span-full text-center py-24 text-muted-foreground text-lg glass-card rounded-3xl">
              No careers found matching your criteria. Try adjusting your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
