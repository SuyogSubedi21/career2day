
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { FileText, File, AlignLeft, Loader2, Lock, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { useDownloadLimit } from '@/hooks/useDownloadLimit.js';
import { Link } from 'react-router-dom';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function CVDownloadModal({ isOpen, onClose, cvData, cvId }) {
  const { 
    canDownloadPDF, 
    canDownloadDOC, 
    canDownloadTXT, 
    isPremium, 
    loading: limitLoading,
    incrementDownloadCount
  } = useDownloadLimit();
  
  const [downloading, setDownloading] = useState(null);
  
  const targetCvId = cvData?.id || cvId;
  const userName = cvData?.personalInfo?.fullName || cvData?.personalInfo?.name || 'User';
  const fileNameBase = `${userName.replace(/\s+/g, '-')}-CV`;

  const handleDownloadPDF = async () => {
    if (!canDownloadPDF) return;
    setDownloading('pdf');
    try {
      const element = document.querySelector('.cv-preview-container') || document.getElementById('cv-print-area');
      if (!element) throw new Error('CV preview not found');
      
      const originalTransform = element.style.transform;
      element.style.transform = 'scale(1)';
      
      const canvas = await html2canvas(element, { 
        scale: 2, 
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });
      
      element.style.transform = originalTransform;

      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${fileNameBase}.pdf`);
      
      await incrementDownloadCount(targetCvId, 'pdf');
      toast.success('PDF downloaded successfully');
      onClose();
    } catch (err) {
      console.error(err);
      toast.error('Failed to generate PDF. Please try again.');
    } finally {
      setDownloading(null);
    }
  };

  const handleDownloadDOCX = async () => {
    if (!canDownloadDOC) return;
    setDownloading('docx');
    try {
      const doc = new Document({
        sections: [{
          properties: {},
          children: [
            new Paragraph({
              children: [new TextRun({ text: userName, bold: true, size: 48 })],
            }),
            new Paragraph({
              children: [
                new TextRun({ text: cvData?.personalInfo?.email || '' }),
                new TextRun({ text: " | " }),
                new TextRun({ text: cvData?.personalInfo?.phone || '' }),
                new TextRun({ text: " | " }),
                new TextRun({ text: cvData?.personalInfo?.location || '' }),
              ],
            }),
            new Paragraph({ text: "" }),
            new Paragraph({
              children: [new TextRun({ text: "Professional Summary", bold: true, size: 28 })],
            }),
            new Paragraph({ text: cvData?.professionalSummary || cvData?.personalInfo?.summary || '' }),
          ],
        }],
      });

      const blob = await Packer.toBlob(doc);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style = 'display: none';
      a.href = url;
      a.download = `${fileNameBase}.docx`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      
      await incrementDownloadCount(targetCvId, 'docx');
      toast.success('DOCX downloaded successfully');
      onClose();
    } catch (err) {
      console.error(err);
      toast.error('Failed to generate DOCX');
    } finally {
      setDownloading(null);
    }
  };

  const handleDownloadTXT = async () => {
    if (!canDownloadTXT) return;
    setDownloading('txt');
    try {
      let text = `${userName}\n`;
      text += `${cvData?.personalInfo?.jobTitle || cvData?.personalInfo?.title || ''}\n`;
      text += `${cvData?.personalInfo?.email || ''} | ${cvData?.personalInfo?.phone || ''} | ${cvData?.personalInfo?.location || ''}\n\n`;
      text += `SUMMARY\n${cvData?.professionalSummary || cvData?.personalInfo?.summary || ''}\n\n`;
      
      const blob = new Blob([text], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${fileNameBase}.txt`;
      a.click();
      window.URL.revokeObjectURL(url);
      
      await incrementDownloadCount(targetCvId, 'txt');
      toast.success('TXT downloaded successfully');
      onClose();
    } catch (err) {
      console.error(err);
      toast.error('Failed to generate TXT');
    } finally {
      setDownloading(null);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !downloading && onClose()}>
      <DialogContent className="sm:max-w-md bg-card border-border shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Download CV</DialogTitle>
          <DialogDescription>
            Choose your preferred format.
          </DialogDescription>
        </DialogHeader>
        
        {!limitLoading && !canDownloadPDF && !isPremium && (
          <Alert variant="destructive" className="bg-destructive/10 border-destructive/20 text-destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="ml-2 font-medium">
              Download limit reached. You have used your 1 free download.
              <Button asChild variant="link" className="p-0 h-auto ml-1 text-destructive font-bold underline">
                <Link to="/pricing">Upgrade to Premium</Link>
              </Button>
              {' '}for unlimited downloads.
            </AlertDescription>
          </Alert>
        )}

        <div className="grid gap-4 py-4">
          <TooltipProvider delayDuration={200}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="w-full relative">
                  {!canDownloadPDF && <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-destructive z-10" />}
                  <Button 
                    variant="outline" 
                    className={`w-full h-16 justify-start px-6 bg-background transition-all ${!canDownloadPDF ? 'opacity-70 grayscale bg-muted hover:bg-muted border-border' : 'hover:border-primary/50 hover:bg-primary/5'}`}
                    onClick={handleDownloadPDF}
                    disabled={!canDownloadPDF || !!downloading}
                  >
                    {downloading === 'pdf' ? <Loader2 className="w-6 h-6 mr-4 text-red-500 animate-spin" /> : <FileText className="w-6 h-6 mr-4 text-red-500" />}
                    <div className="text-left flex-1">
                      <div className="font-bold text-foreground">PDF Document</div>
                      <div className="text-xs text-muted-foreground">Best for emailing and printing</div>
                    </div>
                  </Button>
                </div>
              </TooltipTrigger>
              {!canDownloadPDF && (
                <TooltipContent side="right" className="bg-destructive text-destructive-foreground border-destructive">
                  <p className="font-bold">Limit Reached</p>
                </TooltipContent>
              )}
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div className="w-full relative">
                  {!canDownloadDOC && <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-500 z-10" />}
                  <Button 
                    variant="outline" 
                    className={`w-full h-16 justify-start px-6 bg-background transition-all ${!canDownloadDOC ? 'opacity-70 grayscale bg-muted hover:bg-muted border-border' : 'hover:border-primary/50 hover:bg-primary/5'}`}
                    onClick={handleDownloadDOCX}
                    disabled={!canDownloadDOC || !!downloading}
                  >
                    {downloading === 'docx' ? <Loader2 className="w-6 h-6 mr-4 text-blue-500 animate-spin" /> : <File className="w-6 h-6 mr-4 text-blue-500" />}
                    <div className="text-left flex-1">
                      <div className="font-bold text-foreground">Word Document (.docx)</div>
                      <div className="text-xs text-muted-foreground">Best for editing later</div>
                    </div>
                  </Button>
                </div>
              </TooltipTrigger>
              {!canDownloadDOC && (
                <TooltipContent side="right" className="bg-amber-500 text-white border-amber-600">
                  <p className="font-bold">Premium feature</p>
                </TooltipContent>
              )}
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div className="w-full relative">
                  {!canDownloadTXT && <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-500 z-10" />}
                  <Button 
                    variant="outline" 
                    className={`w-full h-16 justify-start px-6 bg-background transition-all ${!canDownloadTXT ? 'opacity-70 grayscale bg-muted hover:bg-muted border-border' : 'hover:border-primary/50 hover:bg-primary/5'}`}
                    onClick={handleDownloadTXT}
                    disabled={!canDownloadTXT || !!downloading}
                  >
                    {downloading === 'txt' ? <Loader2 className="w-6 h-6 mr-4 text-gray-500 animate-spin" /> : <AlignLeft className="w-6 h-6 mr-4 text-gray-500" />}
                    <div className="text-left flex-1">
                      <div className="font-bold text-foreground">Plain Text (.txt)</div>
                      <div className="text-xs text-muted-foreground">Best for ATS systems</div>
                    </div>
                  </Button>
                </div>
              </TooltipTrigger>
              {!canDownloadTXT && (
                <TooltipContent side="right" className="bg-amber-500 text-white border-amber-600">
                  <p className="font-bold">Premium feature</p>
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        </div>
      </DialogContent>
    </Dialog>
  );
}
