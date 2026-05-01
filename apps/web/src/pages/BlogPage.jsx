
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Calendar, ArrowRight, Newspaper, AlertCircle, RefreshCw } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import SEOHead from '@/components/SEOHead.jsx';
import pb from '@/lib/pocketbaseClient.js';

// Pre-defined Unsplash URLs from instructions
const fallbackImages = [
  'https://images.unsplash.com/photo-1661366051086-f2d182076556?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1673234759103-4bc13ee175d0?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1657373615623-64a12081af40?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1675270690434-aa99f4871e8a?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1580894736036-7a68513983ec?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1676277757211-ebd7fdeb3d5b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1598870784088-35e7058da12c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1698047681432-006d2449c631?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1613186267015-46dc938f2b8f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1696960190591-60d693f4d50d?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1644311529675-8da508c62285?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1695370992939-be4eb6fddf35?auto=format&fit=crop&w=800&q=80'
];

const categories = ['All', 'Career', 'Finance', 'Interview', 'Resume'];

export default function BlogPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const fetchArticles = async () => {
    try {
      setLoading(true);
      setError(null);
      // Fetching up to 100 articles
      const records = await pb.collection('blogArticles').getList(1, 100, {
        sort: '-publishedAt,-created',
        $autoCancel: false
      });
      setArticles(records.items);
    } catch (err) {
      console.error('Error fetching blog articles:', err);
      setError('Failed to load articles. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const filteredArticles = articles.filter(article => {
    const matchesSearch = 
      (article.title?.toLowerCase() || '').includes(searchQuery.toLowerCase()) || 
      (article.excerpt?.toLowerCase() || '').includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const getImageUrl = (article, index) => {
    if (article.featuredImage) {
      return pb.files.getUrl(article, article.featuredImage);
    }
    // Use the explicit fallback images mapped by index to ensure all provided images are used
    return fallbackImages[index % fallbackImages.length];
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Career': return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
      case 'Interview': return 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20';
      case 'Resume': return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
      case 'Finance': return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20';
      default: return 'bg-primary/10 text-primary border-primary/20';
    }
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <SEOHead 
        title="Career Insights & Blog | Career2Day"
        description="Expert advice on interviews, resume building, career growth, and financial planning for your professional journey."
      />

      {/* Hero Section */}
      <section className="bg-muted/30 border-b border-border pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary mb-6 shadow-sm">
              <Newspaper className="w-6 h-6" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6 text-balance">
              Latest Insights & Resources
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance leading-relaxed">
              Stay ahead of the curve. Actionable advice and deep dives into the professional world to help you land and thrive in your dream role.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input 
                  type="text"
                  placeholder="Search articles by title or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 w-full rounded-xl bg-background border-border shadow-sm text-base text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Categories Filter */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground border-primary shadow-md'
                  : 'bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Error State */}
        {error && (
          <div className="text-center py-24 bg-destructive/5 rounded-2xl border border-destructive/20 max-w-2xl mx-auto">
            <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Something went wrong</h3>
            <p className="text-muted-foreground mb-6">{error}</p>
            <Button onClick={fetchArticles} variant="outline" className="gap-2 rounded-xl">
              <RefreshCw className="w-4 h-4" /> Try Again
            </Button>
          </div>
        )}

        {/* Content Grid */}
        {!error && loading ? (
          <div className="blog-grid">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="flex flex-col h-full rounded-2xl border border-border overflow-hidden bg-card">
                <Skeleton className="blog-card-image-wrapper rounded-none" />
                <div className="p-6 flex flex-col flex-grow">
                  <Skeleton className="h-6 w-24 mb-4 rounded-full" />
                  <Skeleton className="h-7 w-full mb-3" />
                  <Skeleton className="h-7 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-6" />
                  <div className="mt-auto flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-8 w-8 rounded-full" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                    <Skeleton className="h-4 w-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : !error && filteredArticles.length > 0 ? (
          <div className="blog-grid">
            {filteredArticles.map((article, index) => {
              // BENTO PATTERN: Make the first article large if no specific filters are applied
              const isFeatured = index === 0 && selectedCategory === 'All' && !searchQuery;
              
              return (
                <Link 
                  to={`/blog/${article.slug}`}
                  key={article.id} 
                  className={`blog-card group ${isFeatured ? 'md:col-span-2 lg:col-span-2 md:flex-row' : ''}`}
                >
                  <div className={`blog-card-image-wrapper ${isFeatured ? 'md:w-1/2 md:aspect-auto' : ''}`}>
                    <img 
                      src={getImageUrl(article, index)} 
                      alt={article.title} 
                      className="blog-card-image"
                    />
                    <div className="blog-card-image-overlay" />
                    {article.category && (
                      <div className="absolute top-4 left-4 z-10">
                        <Badge className={`font-bold px-3 py-1 border shadow-sm ${getCategoryColor(article.category)} backdrop-blur-md bg-background/90`}>
                          {article.category}
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <div className={`p-6 flex flex-col flex-grow ${isFeatured ? 'md:w-1/2 justify-center p-8 lg:p-10' : ''}`}>
                    <h2 className={`${isFeatured ? 'text-2xl md:text-3xl lg:text-4xl' : 'text-xl'} font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors text-balance leading-tight`}>
                      {article.title}
                    </h2>
                    
                    <p className={`text-muted-foreground mb-6 leading-relaxed ${isFeatured ? 'line-clamp-4 text-lg' : 'line-clamp-3 text-sm'}`}>
                      {article.excerpt}
                    </p>
                    
                    <div className="mt-auto pt-5 border-t border-border/50">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                            {article.author ? article.author.charAt(0).toUpperCase() : 'A'}
                          </div>
                          <div className="text-sm font-medium text-foreground">
                            {article.author || 'Author'}
                          </div>
                        </div>
                        <div className="flex items-center text-xs font-medium text-muted-foreground">
                          <Calendar className="w-3.5 h-3.5 mr-1.5" />
                          {formatDate(article.publishedAt || article.created)}
                        </div>
                      </div>
                      <Button variant="outline" className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : !error ? (
          <div className="text-center py-24 bg-card rounded-2xl border border-border shadow-sm max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">No articles found</h3>
            <p className="text-muted-foreground">We couldn't find any articles matching your search criteria.</p>
            <Button 
              variant="outline" 
              className="mt-6 rounded-xl"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
            >
              Clear Filters
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
