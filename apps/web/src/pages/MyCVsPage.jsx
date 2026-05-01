
import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, Link } from 'react-router-dom';
import { FileText, Edit2, Download, Trash2, Copy, Plus, Loader2, Star, Filter, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import DownloadModal from '@/components/DownloadModal.jsx';
import BookmarkButton from '@/components/BookmarkButton.jsx';
import pb from '@/lib/pocketbaseClient';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { useBookmarks } from '@/hooks/useBookmarks.js';
import { useDownloadLimit } from '@/hooks/useDownloadLimit.js';
import { toast } from 'sonner';
import { getTemplateById } from '@/data/cvTemplatesData.js';

export default function MyCVsPage() {
  const [cvs, setCvs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('all'); 
  const { currentUser } = useAuth();
  const { isBookmarked, bookmarkCount } = useBookmarks();
  const { canDownload, isPaidPlan, downloadCount, loading: limitLoading } = useDownloadLimit();
  const navigate = useNavigate();

  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [selectedCv, setSelectedCv] = useState(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const fetchCVs = async () => {
    try {
      setIsLoading(true);
      const records = await pb.collection('userCVs').getFullList({
        filter: `userId = "${currentUser.id}"`,
        sort: '-updated',
        $autoCancel: false
      });
      setCvs(records);
    } catch (error) {
      console.error('Error fetching CVs:', error);
      toast.error('Failed to load your CVs.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (currentUser) {
      fetchCVs();
    }
  }, [currentUser]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this CV? This action cannot be undone.')) {
      try {
        await pb.collection('userCVs').delete(id, { $autoCancel: false });
        toast.success('CV deleted successfully.');
        fetchCVs();
      } catch (error) {
        console.error('Delete error:', error);
        toast.error('Failed to delete CV.');
      }
    }
  };

  const handleDuplicate = async (cv) => {
    try {
      const duplicateData = { ...cv };
      delete duplicateData.id;
      delete duplicateData.created;
      delete duplicateData.updated;
      duplicateData.name = `${cv.name} (Copy)`;
      
      await pb.collection('userCVs').create(duplicateData, { $autoCancel: false });
      toast.success('CV duplicated successfully!');
      fetchCVs();
    } catch (error) {
      console.error('Duplicate error:', error);
      toast.error('Failed to duplicate CV.');
    }
  };

  const handleDownloadClick = (cv) => {
    setSelectedCv(cv);
    if (isPaidPlan) {
      generatePDF(cv);
    } else {
      setShowDownloadModal(true);
    }
  };

  const generatePDF = async (cv) => {
    setIsGeneratingPDF(true);
    try {
      toast.info('Preparing your download...');
      navigate(`/cv-builder?cvId=${cv.id}`);
    } catch (error) {
      console.error('Download error:', error);
      toast.error('Failed to generate PDF.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const handleModalDownload = async (id, name, isFree) => {
    setShowDownloadModal(false);
    if (isFree) {
      const cv = cvs.find(c => c.id === id);
      if (cv) generatePDF(cv);
    } else {
      navigate(`/checkout?type=one-time&cvId=${id}&cvName=${encodeURIComponent(name)}`);
    }
  };

  const handleSubscribeClick = () => {
    setShowDownloadModal(false);
    navigate('/pricing');
  };

  const filteredCVs = useMemo(() => {
    if (filter === 'bookmarked') {
      return cvs.filter(cv => isBookmarked(cv.id));
    }
    return cvs;
  }, [cvs, filter, isBookmarked]);

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <Helmet>
        <title>My CVs | Career2Day</title>
      </Helmet>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">My Saved CVs</h1>
            <p className="text-muted-foreground mt-1">Manage, edit, and download your tailored resumes.</p>
          </div>
          <div className="flex gap-3">
            <Button onClick={() => navigate('/cv-builder')} className="rounded-lg shadow-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" /> Create New CV
            </Button>
          </div>
        </div>

        {!limitLoading && (
          <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between bg-card border border-border rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3 mb-3 sm:mb-0">
              <div className={`p-2 rounded-lg ${isPaidPlan ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                {isPaidPlan ? <Star className="w-5 h-5 fill-current" /> : <FileText className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="font-bold text-foreground">Download Status</h3>
                <p className="text-sm text-muted-foreground">
                  {isPaidPlan ? 'Premium: Unlimited downloads' : `Free plan: ${downloadCount}/1 download used`}
                </p>
              </div>
            </div>
            {!isPaidPlan && !canDownload && (
              <Button asChild variant="default" size="sm" className="bg-primary text-primary-foreground">
                <Link to="/pricing">Upgrade to Premium</Link>
              </Button>
            )}
          </div>
        )}

        {!isLoading && cvs.length > 0 && (
          <div className="flex items-center gap-2 mb-8 bg-muted p-1 rounded-xl w-fit border border-border">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${filter === 'all' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
            >
              All CVs ({cvs.length})
            </button>
            <button
              onClick={() => setFilter('bookmarked')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${filter === 'bookmarked' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
            >
              My Bookmarks ({bookmarkCount})
            </button>
          </div>
        )}

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-12 h-12 text-primary animate-spin" />
          </div>
        ) : filteredCVs.length === 0 ? (
          <div className="text-center py-24 bg-card rounded-2xl border border-border border-dashed">
            <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-40" />
            <h3 className="text-2xl font-bold mb-2">No CVs found</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              {filter === 'bookmarked' 
                ? "You haven't bookmarked any CVs yet. Click the heart icon on a CV to bookmark it."
                : "You haven't created any CVs yet. Start building your professional resume."}
            </p>
            {filter === 'bookmarked' ? (
              <Button onClick={() => setFilter('all')} variant="outline">View All CVs</Button>
            ) : (
              <Button onClick={() => navigate('/cv-builder')} size="lg" className="rounded-lg font-bold">Build CV</Button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCVs.map((cv) => {
              const templateDef = getTemplateById(cv.templateId);

              return (
                <Card key={cv.id} className="overflow-hidden border border-border hover:shadow-md bg-card transition-all duration-200">
                  <div className="h-32 bg-muted border-b border-border p-6 flex flex-col justify-end relative overflow-hidden">
                    <FileText className="absolute -right-4 -top-4 w-32 h-32 text-foreground/5" />
                    
                    <div className="absolute top-3 left-3 z-20">
                      <BookmarkButton cvId={cv.id} variant="ghost" showText={false} className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-sm" />
                    </div>

                    <span className="text-xs font-bold uppercase tracking-wider text-primary mb-1 relative z-10 drop-shadow-sm">
                      {cv.template || 'Default'}
                    </span>
                    <CardTitle className="text-xl relative z-10 truncate text-foreground">{cv.name}</CardTitle>
                  </div>
                  <CardContent className="p-5">
                    <div className="text-sm text-muted-foreground flex flex-col gap-2">
                      <div className="flex justify-between border-b border-border pb-2">
                        <span>Updated:</span>
                        <span className="font-medium text-foreground">{new Date(cv.updated).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Profile:</span>
                        <span className="font-medium text-foreground truncate max-w-[150px]">{cv.fullName || 'N/A'}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-muted/50 p-4 border-t border-border flex flex-col gap-2">
                    <div className="flex gap-2 w-full">
                      <Button 
                        variant="default" 
                        size="sm" 
                        className="flex-1 rounded-md font-medium bg-primary text-primary-foreground hover:bg-primary/90"
                        onClick={() => navigate(`/cv-builder?cvId=${cv.id}`)}
                      >
                        <Edit2 className="w-4 h-4 mr-2" /> Edit
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 rounded-md font-medium border-border bg-card hover:bg-muted"
                        onClick={() => handleDownloadClick(cv)}
                        disabled={isGeneratingPDF && selectedCv?.id === cv.id}
                      >
                        {isGeneratingPDF && selectedCv?.id === cv.id ? (
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                          <Download className="w-4 h-4 mr-2" />
                        )}
                        {isPaidPlan ? 'Download' : 'Get PDF'}
                      </Button>
                    </div>
                    <div className="flex gap-2 w-full mt-1">
                      <Button variant="ghost" size="sm" className="flex-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted" onClick={() => handleDuplicate(cv)}>
                        <Copy className="w-4 h-4 mr-2" /> Duplicate
                      </Button>
                      <Button variant="ghost" size="sm" className="flex-1 rounded-md text-destructive hover:text-destructive hover:bg-destructive/10" onClick={() => handleDelete(cv.id)}>
                        <Trash2 className="w-4 h-4 mr-2" /> Delete
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        )}
      </div>

      <DownloadModal 
        isOpen={showDownloadModal} 
        onClose={() => setShowDownloadModal(false)}
        cvId={selectedCv?.id}
        cvName={selectedCv?.name}
        onDownloadClick={handleModalDownload}
        onSubscribeClick={handleSubscribeClick}
      />
    </div>
  );
}
