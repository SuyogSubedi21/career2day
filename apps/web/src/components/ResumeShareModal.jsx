
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, Copy, Check, Linkedin, Twitter } from 'lucide-react';
import { toast } from 'sonner';

export function ResumeShareModal({ isOpen, onClose, resumeId }) {
  const [copied, setCopied] = useState(false);
  const shareUrl = `${window.location.origin}/share/resume/${resumeId || 'demo'}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success('Link copied to clipboard');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy link');
    }
  };

  const handleSocialShare = (platform) => {
    toast.info(`Sharing to ${platform} is coming soon`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-card sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share Your Resume</DialogTitle>
          <DialogDescription>
            Anyone with this link will be able to view your resume.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="flex space-x-2">
            <Input readOnly value={shareUrl} className="glass-input bg-muted/30" />
            <Button variant="secondary" onClick={handleCopy} className="shrink-0">
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </Button>
          </div>
          
          <div className="space-y-3">
            <p className="text-sm font-medium">Share via social media</p>
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1" onClick={() => handleSocialShare('LinkedIn')}>
                <Linkedin className="w-4 h-4 mr-2 text-blue-600" /> LinkedIn
              </Button>
              <Button variant="outline" className="flex-1" onClick={() => handleSocialShare('Twitter')}>
                <Twitter className="w-4 h-4 mr-2 text-sky-500" /> Twitter
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
