
import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Calendar, Clock, ChevronLeft } from 'lucide-react';
import { blogArticles } from '@/lib/blogData.js';
import RelatedArticles from '@/components/ui-custom/RelatedArticles.jsx';

export default function BlogPostPage() {
  const { slug } = useParams();
  const article = blogArticles.find(a => a.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-background pt-24">
      <Helmet>
        <title>{`${article.title} | CareerFlow Blog`}</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>

      <article>
        {/* Header Section */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 mb-12 text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Blog
          </Link>
          
          <div className="mb-6">
            <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8 text-balance leading-tight" style={{ letterSpacing: '-0.02em' }}>
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground font-medium">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground font-bold text-lg border border-border">
                {article.author.charAt(0)}
              </div>
              <div className="text-left">
                <p className="text-foreground">{article.author}</p>
                <p className="text-xs font-normal">{article.authorRole}</p>
              </div>
            </div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {article.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {article.readingTime}
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
          <div className="aspect-[21/9] rounded-2xl overflow-hidden shadow-lg border border-border bg-muted">
            <img 
              src={article.headerImage || article.image} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
          <div 
            className="blog-prose"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </article>

      {/* Related Articles */}
      <RelatedArticles currentSlug={article.slug} category={article.category} />
    </div>
  );
}
