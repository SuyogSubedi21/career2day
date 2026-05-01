
import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle2, Download, Loader2, AlertCircle, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import apiServerClient from '@/lib/apiServerClient.js';
import pb from '@/lib/pocketbaseClient';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { useDownloadLimit } from '@/hooks/useDownloadLimit.js';
import SEOHead from '@/components/SEOHead.jsx';
import CVTemplateRenderer from '@/components/CVTemplateRenderer.jsx';
import { getTemplateById } from '@/data/cvTemplatesData.js';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { toast } from 'sonner';

export default function DownloadSuccessPage() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const cvId = searchParams.get('cvId');
  const cvName = searchParams.get('cvName') || 'Resume';
  
  const { currentUser } = useAuth();
  const { incrementDownloadCount, refreshLimit, isPaid, downloadCount, loading: limitLoading } = useDownloadLimit();
  const [status, setStatus] = useState('verifying'); 
  const [errorMessage, setErrorMessage] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  const [cvData, setCvData] = useState(null);
  
  const previewRef = useRef(null);

  useEffect(() => {
    if (!sessionId || !cvId) {
      setStatus('error');
      setErrorMessage('Missing required payment information.');
      return;
    }

    const verifyPaymentAndFetchCV = async () => {
      try {
        const response = await apiServerClient.fetch('/stripe/one-time-download-complete', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            sessionId,
            userEmail: currentUser?.email || null,
            cvId,
            cvName
          })
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Payment verification failed');
        }

        const record = await pb.collection('userCVs').getOne(cvId, { $autoCancel: false });
        setCvData(record);
        
        await incrementDownloadCount(cvId);
        await refreshLimit();
        
        setStatus('success');
      } catch (error) {
        console.error('Verification error:', error);
        setStatus('error');
        setErrorMessage(error.message || 'We could not verify your payment. Please contact support.');
      }
    };

    verifyPaymentAndFetchCV();
  }, [sessionId, cvId, cvName, currentUser]);

  const handleDownloadPDF = async () => {
    if (!previewRef.current || !cvData) {
      toast.error('CV data is not ready yet. Please wait a moment.');
      return;
    }
    
    setIsDownloading(true);
    try {
      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });
      
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width, canvas.height]
      });
      
      pdf.addImage(imgData, 'JPEG', 0, 0, canvas.width, canvas.height);
      const fileName = `${cvName.replace(/\s+/g, '_')}.pdf`;
      pdf.save(fileName);
      
      toast.success('CV downloaded successfully!');
    } catch (error) {
      console.error('Download error:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <SEOHead title="Payment Successful | Career2Day" />
      
      <div className="overflow-hidden h-0 w-0 absolute invisible pointer-events-none">
        {cvData && (
          <div className="cv-a4-wrapper" ref={previewRef}>
            <CVTemplateRenderer data={cvData} template={getTemplateById(cvData.templateId)} />
          </div>
        )}
      </div>

      <div className="max-w-md w-full bg-card border border-border rounded-2xl p-8 shadow-lg text-center">
        {status === 'verifying' && (
          <div className="py-12">
            <Loader2 className="w-16 h-16 text-primary animate-spin mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-2">Verifying Payment...</h2>
            <p className="text-muted-foreground">Please wait while we confirm your transaction.</p>
          </div>
        )}

        {status === 'error' && (
          <div className="py-8">
            <div className="w-16 h-16 bg-destructive/10 text-destructive rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Verification Failed</h2>
            <p className="text-muted-foreground mb-8">{errorMessage}</p>
            <Button asChild className="w-full">
              <Link to="/my-cvs">Return to My CVs</Link>
            </Button>
          </div>
        )}

        {status === 'success' && (
          <div>
            <div className="w-20 h-20 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-extrabold mb-2 text-foreground">Payment Successful!</h2>
            <p className="text-muted-foreground mb-8">Your CV is ready to download.</p>

            <div className="bg-muted/50 rounded-xl p-4 mb-8 text-left border border-border">
              <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3">Receipt</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Item</span>
                  <span className="font-medium text-foreground truncate max-w-[150px]">{cvName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount</span>
                  <span className="font-medium text-foreground">$3.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date</span>
                  <span className="font-medium text-foreground">{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Transaction ID</span>
                  <span className="font-medium text-foreground truncate max-w-[120px]">{sessionId.substring(0, 15)}...</span>
                </div>
              </div>
            </div>

            <Button 
              onClick={handleDownloadPDF} 
              disabled={isDownloading || !cvData} 
              className="w-full h-14 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 mb-6 shadow-md"
            >
              {isDownloading ? <Loader2 className="w-5 h-5 mr-2 animate-spin" /> : <Download className="w-5 h-5 mr-2" />}
              Download PDF Now
            </Button>

            {!limitLoading && !isPaid && downloadCount >= 1 && (
              <div className="mt-6 pt-6 border-t border-border text-left">
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mb-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-bold text-amber-800 dark:text-amber-500 text-sm">Free Plan Limit Reached</h4>
                      <p className="text-sm text-amber-700/80 dark:text-amber-400/80 mt-1">
                        You've reached your free plan limit. Upgrade to download more CVs without paying per download.
                      </p>
                    </div>
                  </div>
                </div>
                <Button asChild className="w-full bg-primary text-primary-foreground font-bold">
                  <Link to="/pricing"><Star className="w-4 h-4 mr-2 fill-current" /> Upgrade to Premium</Link>
                </Button>
              </div>
            )}
            
            {(!limitLoading && isPaid) && (
              <div className="mt-6 pt-6 border-t border-border">
                <Button asChild variant="outline" className="w-full">
                  <Link to="/my-cvs">Return to My CVs</Link>
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
