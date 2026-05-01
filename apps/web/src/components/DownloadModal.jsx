
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FileText, CreditCard, Star, Download, AlertCircle, Loader2 } from 'lucide-react';
import { useDownloadLimit } from '@/hooks/useDownloadLimit.js';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export default function DownloadModal({ isOpen, onClose, cvId, cvName, onDownloadClick, onSubscribeClick }) {
  const { canDownload, downloadCount, isPaidPlan, remainingDownloads, recordDownload, loading: limitLoading } = useDownloadLimit();
  const [isDownloadingFree, setIsDownloadingFree] = useState(false);
  const navigate = useNavigate();

  const handleFreeDownload = async () => {
    if (!canDownload) {
      onClose();
      navigate('/pricing');
      return;
    }
    setIsDownloadingFree(true);
    try {
      // Trigger the actual download logic passed from parent, but mark it as free
      await onDownloadClick(cvId, cvName, true);
      await recordDownload(cvId);
    } catch (error) {
      console.error('Free download failed:', error);
    } finally {
      setIsDownloadingFree(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">Download CV</DialogTitle>
          <DialogDescription>
            Choose how you want to download your professional CV.
          </DialogDescription>
        </DialogHeader>
        
        <div className="bg-muted/50 border border-border rounded-lg p-4 my-4 flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
            <FileText className="w-6 h-6" />
          </div>
          <div className="overflow-hidden">
            <h4 className="font-bold text-foreground truncate">{cvName || 'My Resume'}</h4>
            <p className="text-sm text-muted-foreground">PDF Document • High Quality</p>
          </div>
        </div>

        {!limitLoading && (
          <div className="mb-4">
            {isPaidPlan ? (
              <div className="text-sm font-medium text-primary bg-primary/10 px-3 py-2 rounded-md flex items-center">
                Unlimited downloads (Premium)
              </div>
            ) : (
              <div className={`text-sm font-medium px-3 py-2 rounded-md flex items-center justify-between ${canDownload ? 'bg-muted text-foreground' : 'bg-destructive/10 text-destructive'}`}>
                <span>Downloads: {downloadCount}/1 (Free Plan)</span>
                {!canDownload && <span className="text-xs font-bold uppercase tracking-wider">Limit Reached</span>}
              </div>
            )}
          </div>
        )}

        <div className="space-y-4">
          {!isPaidPlan && (
            <div className={`bg-card border rounded-xl p-4 transition-colors ${canDownload ? 'border-border hover:border-primary/50' : 'border-destructive/30 opacity-75'}`}>
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-foreground">Free Download</h4>
                <span className="font-extrabold text-lg text-muted-foreground">Free</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {canDownload ? 'Use your 1 free download for this CV.' : 'Free plan limited to 1 download. Upgrade to download more.'}
              </p>
              <Button 
                onClick={handleFreeDownload} 
                className="w-full font-bold" 
                variant={canDownload ? "default" : "secondary"}
                disabled={isDownloadingFree || limitLoading}
              >
                {isDownloadingFree ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Download className="w-4 h-4 mr-2" />}
                {canDownload ? 'Download Free' : 'Limit Reached'}
              </Button>
            </div>
          )}

          {!isPaidPlan && (
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground font-medium">Or get unlimited</span>
              </div>
            </div>
          )}

          <div className="bg-[hsl(var(--pricing-highlight-bg))] border border-primary/30 rounded-xl p-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full -z-10" />
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-bold text-primary-foreground flex items-center gap-1">
                <Star className="w-4 h-4 fill-primary text-primary" /> Premium
              </h4>
              <span className="font-extrabold text-lg text-primary-foreground">$9.99<span className="text-sm font-normal text-primary-foreground/70">/mo</span></span>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">Unlimited downloads, all premium templates, and full interview prep access.</p>
            <Button onClick={onSubscribeClick} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
              Subscribe to Premium
            </Button>
          </div>
          
          {!isPaidPlan && (
            <div className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-colors mt-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-foreground">One-Time Download</h4>
                <span className="font-extrabold text-lg">$3.00</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Download this specific CV once. No subscription, no recurring charges.</p>
              <Button onClick={() => onDownloadClick(cvId, cvName, false)} className="w-full font-bold" variant="outline">
                <CreditCard className="w-4 h-4 mr-2" /> Pay $3 & Download
              </Button>
            </div>
          )}
        </div>

        <DialogFooter className="sm:justify-center mt-2">
          <Button variant="ghost" onClick={onClose} className="text-muted-foreground">
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
