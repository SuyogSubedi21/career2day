
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import BlogCard from './BlogCard.jsx';
import { blogArticles } from '@/lib/blogData.js';

export default function RelatedArticles({ currentSlug, category }) {
  // Get 3 articles: prioritize same category, then just latest ones
  const related = blogArticles
    .filter(a => a.slug !== currentSlug)
    .sort((a, b) => (a.category === category ? -1 : 1))
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="py-16 bg-muted/30 border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Keep Reading</h2>
          <Link 
            to="/blog" 
            className="hidden sm:inline-flex items-center text-sm font-semibold text-primary hover:underline"
          >
            View All Articles
            <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {related.map(article => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
          >
            View All Articles
            <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
