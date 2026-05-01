
import React, { useState, useEffect, Suspense, useRef } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { Save, Download, ArrowLeft, ZoomIn, ZoomOut, RotateCcw, Loader2, AlertCircle, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { useSubscription } from '@/hooks/useSubscription.js';
import pb from '@/lib/pocketbaseClient.js';
import { toast } from 'sonner';

import CVBuilderForm from '@/components/cv-builder/CVBuilderForm.jsx';
import CVPreviewRenderer from '@/components/cv-builder/CVPreviewRenderer.jsx';
import CVDownloadModal from '@/components/cv-builder/CVDownloadModal.jsx';
import BookmarkButton from '@/components/BookmarkButton.jsx';
import { getTemplateById } from '@/data/cvTemplatesData.js';

class BuilderErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Builder Error:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 text-center text-destructive">
          <AlertCircle className="w-12 h-12 mb-4 opacity-80" />
          <h2 className="text-2xl font-bold mb-2 text-foreground">Render Error</h2>
          <p className="text-muted-foreground max-w-md">We encountered an issue displaying this template. Please refresh the page.</p>
          <Button onClick={() => window.location.reload()} className="mt-6" variant="outline">Reload Page</Button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function CVBuilderPage() {
  const [searchParams] = useSearchParams();
  const cvId = searchParams.get('cvId');
  const templateIdParam = searchParams.get('template') || searchParams.get('templateId');
  const navigate = useNavigate();
  const { currentUser, isAuthenticated } = useAuth();
  const { isPremium, loading: subLoading } = useSubscription();
  
  const [cvData, setCvData] = useState({
    personalInfo: { fullName: '', jobTitle: '', email: '', phone: '', location: '' },
    professionalSummary: '',
    experience: [],
    education: [],
    skills: [],
    certifications: [],
    languages: [],
    projects: [],
    volunteer: [],
    templateId: templateIdParam || 'ModernClean'
  });
  
  const activeTemplateId = templateIdParam || cvData.templateId || 'ModernClean';
  const activeTemplate = getTemplateById(activeTemplateId);
  
  const [currentCVId, setCurrentCVId] = useState(cvId);
  const [isSaving, setIsSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [zoom, setZoom] = useState(100);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  
  const initialLoadDone = useRef(false);

  useEffect(() => {
    // If no cvId and no template, redirect to templates page
    if (!cvId && !templateIdParam) {
      navigate('/cv-templates', { replace: true });
      return;
    }

    if (initialLoadDone.current) return;

    let isMounted = true;
    let timeoutId;

    if (cvId && isAuthenticated) {
      timeoutId = setTimeout(() => {
        if (isMounted) {
          setLoading(false);
          toast.error('Loading took too long. Starting with new data.');
        }
      }, 5000);

      const loadCV = async () => {
        try {
          const record = await pb.collection('userCVs').getOne(cvId, { $autoCancel: false });
          
          if (isMounted) {
            if (record.userId !== currentUser?.id) {
              throw new Error('Unauthorized');
            }
            
            setCvData({
              personalInfo: record.personalInfo || {},
              professionalSummary: record.summary || '',
              experience: record.workExperience || [],
              education: record.education || [],
              skills: record.skills || [],
              certifications: record.certifications || [],
              languages: record.languages || [],
              projects: record.projects || [],
              volunteer: record.volunteerExperience || [],
              templateId: templateIdParam || record.templateId || record.template || 'ModernClean'
            });
          }
        } catch (err) {
          console.error('[CVBuilderPage] Failed to load CV:', err);
          if (isMounted) {
            toast.error('Failed to load CV draft');
            navigate('/cv-templates');
          }
        } finally {
          if (isMounted) {
            clearTimeout(timeoutId);
            setLoading(false);
            initialLoadDone.current = true;
          }
        }
      };
      
      loadCV();
    } else {
      initialLoadDone.current = true;
      setLoading(false);
    }

    return () => {
      isMounted = false;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [cvId, templateIdParam, isAuthenticated, navigate, currentUser]);

  // Auto-save logic
  useEffect(() => {
    if (!isAuthenticated || loading || !initialLoadDone.current) return;
    if (activeTemplate?.category === 'Premium' && !isPremium) return; // don't auto-save if locked out
    
    const saveToDB = async () => {
      setIsSaving(true);
      try {
        const payload = {
          userId: currentUser.id,
          name: cvData.personalInfo?.fullName ? `${cvData.personalInfo.fullName}'s CV` : 'My CV',
          templateId: activeTemplateId,
          template: activeTemplateId,
          personalInfo: cvData.personalInfo,
          summary: cvData.professionalSummary,
          workExperience: cvData.experience,
          education: cvData.education,
          skills: cvData.skills,
          certifications: cvData.certifications,
          languages: cvData.languages,
          projects: cvData.projects,
          volunteerExperience: cvData.volunteer
        };

        if (currentCVId) {
          await pb.collection('userCVs').update(currentCVId, payload, { $autoCancel: false });
        } else {
          const record = await pb.collection('userCVs').create(payload, { $autoCancel: false });
          setCurrentCVId(record.id);
          window.history.replaceState(null, '', `/cv-builder?cvId=${record.id}&template=${activeTemplateId}`);
        }
      } catch (err) {
        console.error('[CVBuilderPage] Auto-save failed:', err);
      } finally {
        setIsSaving(false);
      }
    };

    const timer = setTimeout(() => {
      if (cvData.personalInfo?.fullName || cvData.personalInfo?.email || cvData.experience?.length > 0) {
        saveToDB();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [cvData, isAuthenticated, activeTemplateId, currentCVId, loading, currentUser, isPremium, activeTemplate]);

  const handleZoom = (direction) => {
    if (direction === 'in') setZoom(z => Math.min(150, z + 10));
    else if (direction === 'out') setZoom(z => Math.max(50, z - 10));
    else setZoom(100);
  };

  const handleDownloadClick = () => {
    setDownloadModalOpen(true);
  };

  const handleBack = () => {
    navigate('/cv-templates');
  };

  if (loading || subLoading) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <Loader2 className="w-10 h-10 animate-spin text-primary mb-4" />
        <p className="text-muted-foreground font-medium animate-pulse">Initializing Builder...</p>
      </div>
    );
  }

  if (!activeTemplate) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 text-center">
        <AlertCircle className="w-12 h-12 text-destructive mb-4" />
        <h2 className="text-2xl font-bold mb-2">Template Not Found</h2>
        <p className="text-muted-foreground mb-6">The layout configuration could not be loaded.</p>
        <Button onClick={() => navigate('/cv-templates')}>Return to Templates</Button>
      </div>
    );
  }

  // Premium Access Control Block
  if (activeTemplate.category === 'Premium' && !isPremium) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        <div className="w-full max-w-md bg-card border border-border shadow-2xl rounded-2xl p-8 flex flex-col items-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500"></div>
          <div className="w-16 h-16 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center mb-6">
            <Crown className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-extrabold mb-3 text-foreground">Premium Template</h2>
          <p className="text-muted-foreground mb-8 text-balance">
            The <span className="font-semibold text-foreground">"{activeTemplate.name}"</span> template is exclusively available to Premium members. Upgrade your plan to unlock this design and premium download formats.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <Button variant="outline" onClick={() => navigate('/cv-templates')} className="flex-1 rounded-xl">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </Button>
            <Button asChild className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl shadow-lg shadow-amber-500/20">
              <Link to="/pricing">Upgrade to Premium</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[100dvh] bg-background flex flex-col overflow-hidden">
      <header className="h-16 shrink-0 border-b border-border bg-card px-4 sm:px-6 flex items-center justify-between z-10 shadow-sm">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={handleBack} className="text-muted-foreground hover:text-foreground hover:bg-muted">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="font-bold text-foreground text-lg hidden sm:flex items-center">
              CV Editor 
              <span className={`ml-2 px-2 py-0.5 text-xs rounded-md font-semibold ${activeTemplate.category === 'Premium' ? 'bg-amber-500/10 text-amber-600' : 'bg-secondary text-secondary-foreground'}`}>
                {activeTemplate.category === 'Premium' && <Crown className="w-3 h-3 inline-block mr-1 mb-0.5" />}
                {activeTemplate.name}
              </span>
            </h1>
            <div className="text-xs text-muted-foreground flex items-center mt-0.5">
              {isSaving ? (
                <span className="flex items-center"><Loader2 className="w-3 h-3 mr-1 animate-spin" /> Saving...</span>
              ) : (
                <span className="flex items-center"><Save className="w-3 h-3 mr-1" /> Saved to cloud</span>
              )}
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center bg-muted/50 rounded-lg p-1 border border-border">
          <Button variant="ghost" size="icon" onClick={() => handleZoom('out')} className="h-8 w-8 text-foreground"><ZoomOut className="w-4 h-4" /></Button>
          <span className="text-xs font-bold text-foreground w-12 text-center">{zoom}%</span>
          <Button variant="ghost" size="icon" onClick={() => handleZoom('in')} className="h-8 w-8 text-foreground"><ZoomIn className="w-4 h-4" /></Button>
          <Button variant="ghost" size="icon" onClick={() => handleZoom('reset')} className="h-8 w-8 text-foreground ml-1 border-l border-border rounded-none"><RotateCcw className="w-4 h-4" /></Button>
        </div>

        <div className="flex items-center gap-3">
          {currentCVId && isAuthenticated && (
            <BookmarkButton cvId={currentCVId} />
          )}
          <Button onClick={handleDownloadClick} className="font-bold shadow-md bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
            <Download className="w-4 h-4 mr-2" /> Download
          </Button>
        </div>
      </header>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden relative">
        {/* Preview Panel */}
        <div className="hidden lg:flex lg:col-span-7 bg-[#e2e8f0] dark:bg-[#0f172a] overflow-auto hide-scrollbar relative p-8 justify-center items-start">
          <BuilderErrorBoundary>
            <Suspense fallback={<div className="flex h-full items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-muted-foreground"/></div>}>
              <div 
                id="cv-print-area" 
                className="origin-top transition-transform duration-200 bg-white shadow-2xl" 
                style={{ transform: `scale(${zoom / 100})` }}
              >
                <CVPreviewRenderer cvData={cvData} templateId={activeTemplateId} />
              </div>
            </Suspense>
          </BuilderErrorBoundary>
        </div>

        {/* Editor Panel */}
        <div className="col-span-1 lg:col-span-5 bg-card overflow-y-auto hide-scrollbar border-l border-border z-10 shadow-[-10px_0_15px_-3px_rgba(0,0,0,0.1)]">
          <BuilderErrorBoundary>
            <CVBuilderForm cvData={cvData} setCvData={setCvData} templateId={activeTemplateId} />
          </BuilderErrorBoundary>
        </div>
      </div>

      {downloadModalOpen && (
        <CVDownloadModal 
          isOpen={downloadModalOpen} 
          onClose={() => setDownloadModalOpen(false)} 
          cvData={cvData} 
          cvId={currentCVId}
        />
      )}
    </div>
  );
}
