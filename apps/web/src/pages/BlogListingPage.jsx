
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { getAllArticles } from '@/lib/blogArticlesData.js';
import BlogCard from '@/components/ui-custom/BlogCard.jsx';

export default function BlogListingPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [page, setPage] = useState(1);
  const itemsPerPage = 9;

  const categories = ['All', 'Career Guides', 'Interview Tips', 'Skill Development', 'Industry Trends', 'Salary Insights'];
  const allArticles = getAllArticles();

  const filteredArticles = useMemo(() => {
    return allArticles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [allArticles, searchTerm, selectedCategory]);

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const displayedArticles = filteredArticles.slice(0, page * itemsPerPage);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <Helmet>
        <title>Blog & Insights | CareerMastery</title>
        <meta name="description" content="Expert insights on IT careers, skills, and industry trends." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">CareerMastery Blog</h1>
          <p className="text-xl text-muted-foreground">
            Expert insights on IT careers, technical skills, interview preparation, and industry trends.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="flex flex-wrap gap-2 justify-center md:justify-start flex-1 w-full md:w-auto">
            {categories.map(cat => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? 'default' : 'outline'}
                onClick={() => handleCategoryChange(cat)}
                className={`rounded-full ${selectedCategory === cat ? 'shadow-md shadow-primary/20' : 'glass-panel hover:bg-primary/5 border-border/50'}`}
              >
                {cat}
              </Button>
            ))}
          </div>
          
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 rounded-full glass-panel border-border/50 focus-visible:ring-primary/50"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AnimatePresence mode="popLayout">
            {displayedArticles.map((article, i) => (
              <motion.div
                key={article.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <BlogCard article={article} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-20 glass-card rounded-3xl">
            <h3 className="text-2xl font-bold mb-2">No articles found</h3>
            <p className="text-muted-foreground">Try adjusting your search or category filters.</p>
          </div>
        )}

        {page < totalPages && (
          <div className="text-center">
            <Button 
              onClick={() => setPage(p => p + 1)}
              size="lg"
              variant="outline"
              className="rounded-full px-10 h-12 glass-panel"
            >
              Load More Articles
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
