
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Clock, Twitter, Linkedin, Facebook, Link as LinkIcon, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import SEOHead from '@/components/SEOHead.jsx';
import pb from '@/lib/pocketbaseClient.js';

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

export default function BlogArticlePage() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        setLoading(true);
        setError(false);
        window.scrollTo(0, 0);

        // Fetch main article from blogArticles collection
        const record = await pb.collection('blogArticles').getFirstListItem(`slug="${slug}"`, {
          $autoCancel: false
        });
        
        setArticle(record);

        // Fetch related articles
        let relatedItems = [];
        if (record.relatedArticles && Array.isArray(record.relatedArticles) && record.relatedArticles.length > 0) {
          // If relatedArticles JSON array is populated, fetch those specific IDs
          const idFilter = record.relatedArticles.map(id => `id="${id}"`).join(' || ');
          const relatedRes = await pb.collection('blogArticles').getList(1, 3, {
            filter: idFilter,
            $autoCancel: false
          });
          relatedItems = relatedRes.items;
        } else {
          // Fallback: fetch articles in the same category
          const relatedRes = await pb.collection('blogArticles').getList(1, 3, {
            filter: `id != "${record.id}" && category = "${record.category}"`,
            sort: '-publishedAt,-created',
            $autoCancel: false
          });
          relatedItems = relatedRes.items;
        }
        
        setRelatedArticles(relatedItems);
      } catch (err) {
        console.error('Error fetching article:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchArticleData();
    }
  }, [slug]);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const getImageUrl = (item) => {
    if (item?.featuredImage) {
      return pb.files.getUrl(item, item.featuredImage);
    }
    // Deterministic fallback based on ID character code to ensure consistent image across renders
    const index = item?.id ? item.id.charCodeAt(0) % fallbackImages.length : 0;
    return fallbackImages[index];
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success('Link copied to clipboard');
  };

  // Parse tags string into array
  const displayTags = typeof article?.tags === 'string' 
    ? article.tags.split(',').map(t => t.trim()).filter(Boolean)
    : Array.isArray(article?.tags) ? article.tags : [];

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <Skeleton className="h-6 w-32 mb-8" />
          <Skeleton className="h-8 w-24 mb-6 rounded-full" />
          <Skeleton className="h-16 w-full md:w-3/4 mb-6" />
          <div className="flex gap-4 mb-8 items-center">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div>
              <Skeleton className="h-5 w-32 mb-2" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
          <Skeleton className="w-full aspect-[21/9] rounded-2xl mb-12" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-full mt-8" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-background pt-32 pb-20 flex flex-col items-center text-center px-4">
        <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6">
          <AlertCircle className="w-10 h-10 text-muted-foreground" />
        </div>
        <h1 className="text-4xl font-extrabold text-foreground mb-4">Oops! We couldn't find that article.</h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-md">It seems this article has been moved, deleted, or the URL is incorrect. Let's get you back to our latest insights.</p>
        <Button asChild size="lg" className="rounded-xl">
          <Link to="/blog"><ArrowLeft className="w-4 h-4 mr-2" /> Return to Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title={`${article.title} | Career2Day Blog`}
        description={article.excerpt || `Read about ${article.title} on Career2Day.`}
      />

      {/* Hero Header */}
      <header className="pt-24 pb-12 px-4 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to all articles
          </Link>
          
          <div className="mb-6 flex items-center gap-4 flex-wrap">
            {article.category && (
              <Badge className="bg-primary text-primary-foreground hover:bg-primary px-3 py-1 font-bold text-sm">
                {article.category}
              </Badge>
            )}
            {article.readingTime && (
              <span className="text-sm font-medium text-muted-foreground flex items-center">
                <Clock className="w-4 h-4 mr-1.5" /> {article.readingTime} min read
              </span>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-8 leading-tight text-balance tracking-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-between gap-6 border-t border-border/50 pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg shadow-sm border border-primary/20">
                {article.author ? article.author.charAt(0).toUpperCase() : 'A'}
              </div>
              <div>
                <div className="font-bold text-foreground">{article.author || 'Author'}</div>
                <div className="text-sm text-muted-foreground flex items-center">
                  <Calendar className="w-3.5 h-3.5 mr-1.5" />
                  {formatDate(article.publishedAt || article.created)}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground mr-2 hidden sm:inline-block">Share:</span>
              <Button variant="outline" size="icon" className="rounded-full w-10 h-10 text-muted-foreground hover:text-foreground hover:bg-muted" onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`, '_blank')}>
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full w-10 h-10 text-muted-foreground hover:text-foreground hover:bg-muted" onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(article.title)}`, '_blank')}>
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full w-10 h-10 text-muted-foreground hover:text-foreground hover:bg-muted" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')}>
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full w-10 h-10 text-muted-foreground hover:text-foreground hover:bg-muted" onClick={copyToClipboard}>
                <LinkIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>
          <div className="rounded-2xl overflow-hidden mb-12 shadow-lg border border-border">
            <img 
              src={getImageUrl(article)} 
              alt={article.title} 
              className="w-full aspect-[16/9] object-cover"
            />
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-foreground leading-relaxed">
            {article.content?.includes('<') ? (
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            ) : (
              <div className="whitespace-pre-wrap">{article.content}</div>
            )}
          </div>
          
          {/* Tags */}
          {displayTags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-2">
              <span className="text-sm font-bold text-foreground mr-2 flex items-center">Tags:</span>
              {displayTags.map((tag, i) => (
                <Badge key={i} variant="secondary" className="bg-muted text-muted-foreground hover:bg-muted/80">
                  #{tag}
                </Badge>
              ))}
            </div>
          )}
          
          {/* Author Bio Box */}
          <div className="mt-16 p-8 bg-muted/50 rounded-2xl border border-border flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-20 h-20 shrink-0 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-3xl shadow-md">
              {article.author ? article.author.charAt(0).toUpperCase() : 'A'}
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-foreground mb-2">Written by {article.author || 'Author'}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {article.authorBio || 'Passionate about helping professionals navigate the tech industry, improve their skills, and land their dream jobs. We provide actionable insights for every stage of your career journey.'}
              </p>
            </div>
          </div>
        </article>
      </main>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-muted/30 border-t border-border py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-10 tracking-tight">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relArticle) => (
                <Card key={relArticle.id} className="group overflow-hidden rounded-2xl border-border bg-card hover:shadow-xl transition-all duration-300 flex flex-col">
                  <Link to={`/blog/${relArticle.slug}`} className="flex flex-col h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={getImageUrl(relArticle)} 
                        alt={relArticle.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="font-bold px-3 py-1 border shadow-sm bg-background/90 backdrop-blur-sm text-foreground">
                          {relArticle.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {relArticle.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                        {relArticle.excerpt}
                      </p>
                      <div className="mt-auto text-sm font-bold text-primary flex items-center">
                        Read Article <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
