
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Download, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export function ResumeDownloadModal({ isOpen, onClose, targetId = 'resume-preview-content' }) {
  const [fileName, setFileName] = useState('My_Professional_Resume');
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!fileName.trim()) {
      toast.error('Please enter a file name');
      return;
    }

    try {
      setIsDownloading(true);
      const element = document.getElementById(targetId);
      
      if (!element) {
        throw new Error('Resume preview not found');
      }

      // Temporarily remove scaling for accurate capture
      const originalTransform = element.parentElement.style.transform;
      element.parentElement.style.transform = 'none';

      const canvas = await html2canvas(element, { 
        scale: 2, 
        useCORS: true,
        logging: false,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight
      });

      // Restore scaling
      element.parentElement.style.transform = originalTransform;

      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${fileName.replace(/\s+/g, '_')}.pdf`);
      
      toast.success('Resume downloaded successfully!');
      onClose();
    } catch (error) {
      console.error(error);
      toast.error('Failed to generate PDF. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Download Resume</DialogTitle>
          <DialogDescription>
            Export your resume as an ATS-friendly PDF document.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="filename">File Name</Label>
            <Input 
              id="filename" 
              value={fileName} 
              onChange={(e) => setFileName(e.target.value)} 
              placeholder="e.g. John_Doe_Resume"
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={isDownloading}>Cancel</Button>
          <Button onClick={handleDownload} disabled={isDownloading} className="min-w-[120px]">
            {isDownloading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Download className="w-4 h-4 mr-2" />}
            Download PDF
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
