
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Loader2, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext.jsx';
import pb from '@/lib/pocketbaseClient.js';
import SEOHead from '@/components/SEOHead.jsx';
import { toast } from 'sonner';

export default function CVTemplateGalleryPage() {
  const { currentUser, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, free, premium

  const isPremiumUser = currentUser?.premium || false;

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const records = await pb.collection('cv_templates').getFullList({
          sort: '-popularity',
          $autoCancel: false
        });
        setTemplates(records);
      } catch (err) {
        console.error('Error fetching templates:', err);
        toast.error('Failed to load templates');
      } finally {
        setLoading(false);
      }
    };
    fetchTemplates();
  }, []);

  const filteredTemplates = templates.filter(t => {
    if (filter === 'free') return t.is_free;
    if (filter === 'premium') return !t.is_free;
    return true;
  });

  const handleSelectTemplate = (template) => {
    if (!isAuthenticated) {
      toast.error('Please log in to use the CV Builder');
      navigate('/login');
      return;
    }
    if (!template.is_free && !isPremiumUser) {
      toast.error('This is a premium template. Please upgrade your plan.');
      navigate('/pricing');
      return;
    }
    navigate(`/cv-builder/${template.template_id}`);
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <SEOHead 
        title="CV Templates Gallery | CareerMastery"
        description="Choose from our collection of 20 professional, ATS-friendly CV templates."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-extrabold text-foreground tracking-tight mb-4">Professional CV Templates</h1>
          <p className="text-xl text-muted-foreground mb-8">Select a starting point for your new professional resume. All templates are ATS-optimized.</p>
          
          <div className="flex justify-center gap-2">
            <Button variant={filter === 'all' ? 'default' : 'outline'} onClick={() => setFilter('all')}>All Templates</Button>
            <Button variant={filter === 'free' ? 'default' : 'outline'} onClick={() => setFilter('free')}>Free</Button>
            <Button variant={filter === 'premium' ? 'default' : 'outline'} onClick={() => setFilter('premium')}>Premium</Button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20"><Loader2 className="w-10 h-10 animate-spin text-primary" /></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredTemplates.map((tpl) => {
              const isLocked = !tpl.is_free && !isPremiumUser;
              
              return (
                <Card key={tpl.id} className="overflow-hidden border-border bg-card group hover:shadow-xl transition-all flex flex-col">
                  <div className="aspect-[1/1.4] w-full relative bg-secondary/30 border-b border-border overflow-hidden">
                    {tpl.preview_image ? (
                      <img 
                        src={pb.files.getUrl(tpl, tpl.preview_image)} 
                        alt={`${tpl.name} template preview`}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">No Preview</div>
                    )}
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {tpl.is_free ? (
                        <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold">FREE</Badge>
                      ) : (
                        <Badge className="bg-amber-500 hover:bg-amber-600 text-white font-bold">PREMIUM</Badge>
                      )}
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center backdrop-blur-sm p-6 text-center">
                      {isLocked ? (
                        <>
                          <Lock className="w-10 h-10 text-amber-500 mb-4" />
                          <p className="text-sm font-bold text-foreground mb-4">Premium Template</p>
                          <Button onClick={() => navigate('/pricing')} className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold">
                            Upgrade to Unlock
                          </Button>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
                          <Button onClick={() => handleSelectTemplate(tpl)} className="w-full font-bold">
                            Use Template
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-5 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-foreground">{tpl.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">{tpl.description || 'Professional ATS-friendly template.'}</p>
                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                      <span className="bg-muted px-2 py-1 rounded">{tpl.category}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
