
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Calendar, Clock, User, ArrowLeft, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getArticleBySlug } from '@/lib/blogArticlesData.js';
import TableOfContents from '@/components/ui-custom/TableOfContents.jsx';

export default function BlogDetailPage() {
  const { blogSlug } = useParams();
  const article = getArticleBySlug(blogSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogSlug]);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-8">The article you're looking for does not exist or has been removed.</p>
        <Button asChild><Link to="/blog">Back to Blog</Link></Button>
      </div>
    );
  }

  const formattedDate = new Date(article.publishedDate).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <Helmet>
        <title>{article.title} | CareerMastery Blog</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.featuredImage} />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to all articles
        </Link>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 uppercase tracking-wider">
            {article.category}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-balance">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
              <span className="text-foreground">{article.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> {formattedDate}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> {article.readingTime} min read
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl mb-16 aspect-[21/9]">
          <img 
            src={article.featuredImage} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="glass-card rounded-3xl p-8 md:p-12 border-border/50">
              <div 
                className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-6 prose-p:leading-relaxed prose-p:text-foreground/80 prose-li:text-foreground/80 prose-a:text-primary hover:prose-a:text-primary/80"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>

            {/* Share & Tags */}
            <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-6 py-6 border-t border-b border-border/50">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-bold text-foreground mr-2 self-center">Tags:</span>
                {article.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-foreground">Share:</span>
                <Button variant="outline" size="icon" className="rounded-full" onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${article.title}`, '_blank')}>
                  <Twitter className="w-4 h-4 text-blue-400" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, '_blank')}>
                  <Linkedin className="w-4 h-4 text-blue-700" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank')}>
                  <Facebook className="w-4 h-4 text-blue-600" />
                </Button>
              </div>
            </div>

            {/* Author Footer */}
            <div className="mt-12 glass-card rounded-3xl p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <User className="w-10 h-10 text-muted-foreground" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold mb-2">About {article.author}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Career expert and technical recruiter with over a decade of experience helping professionals land their dream roles in the tech industry.
                </p>
                <div className="flex justify-center sm:justify-start gap-3">
                  <a href="#" className="text-primary hover:underline text-sm font-medium">View all posts</a>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8 hidden lg:block">
            <TableOfContents headings={article.tableOfContents} />
          </div>
        </div>
      </div>
    </div>
  );
}
