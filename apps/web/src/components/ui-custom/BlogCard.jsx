
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BlogCard({ article }) {
  const formattedDate = new Date(article.publishedDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <motion.article 
      whileHover={{ y: -5 }}
      className="glass-card rounded-2xl overflow-hidden flex flex-col h-full group"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img 
          src={article.featuredImage} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
          {article.category}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" /> {formattedDate}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {article.readingTime} min read
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3 text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          <Link to={`/blog/${article.slug}`}>{article.title}</Link>
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <User className="w-3.5 h-3.5" />
            </div>
            {article.author}
          </div>
          <Button asChild variant="ghost" size="sm" className="p-0 hover:bg-transparent text-primary font-bold">
            <Link to={`/blog/${article.slug}`}>
              Read More <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
