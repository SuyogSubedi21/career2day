
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, FileText, ShieldCheck } from 'lucide-react';
import apiServerClient from '@/lib/apiServerClient.js';
import { toast } from 'sonner';

export default function OneTimeDownloadCheckout({ cvId, cvName }) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    if (!cvId) {
      toast.error('Invalid CV ID. Please try saving your CV again.');
      return;
    }

    setIsProcessing(true);
    try {
      const response = await apiServerClient.fetch('/stripe/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: 3.00, // Backend multiplies by 100 to get cents
          productName: `CV Download - ${cvName || 'Resume'}`,
          cvId,
          paymentType: 'one-time',
          successUrl: `${window.location.origin}/download-success?session_id={CHECKOUT_SESSION_ID}&cvId=${cvId}&cvName=${encodeURIComponent(cvName || 'Resume')}`,
          cancelUrl: `${window.location.origin}/checkout?type=one-time&cvId=${cvId}&cvName=${encodeURIComponent(cvName || 'Resume')}&cancelled=true`
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create checkout session');
      }
      
      const data = await response.json();
      if (data.url) {
        window.open(data.url, '_self');
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast.error(error.message || 'Payment setup failed. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 sm:p-8 shadow-sm max-w-md mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-extrabold text-foreground mb-2">One-Time Download</h2>
        <p className="text-muted-foreground">Get your professional CV instantly.</p>
      </div>

      <div className="flex items-center gap-4 mb-8 p-4 bg-muted/50 rounded-lg border border-border">
        <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
          <FileText className="w-6 h-6" />
        </div>
        <div className="overflow-hidden">
          <p className="font-bold text-foreground truncate">{cvName || 'My Resume'}</p>
          <p className="text-sm text-muted-foreground">High-Quality PDF Format</p>
        </div>
      </div>

      <div className="space-y-3 mb-8">
        <div className="flex justify-between items-center text-sm text-foreground">
          <span>CV Download</span>
          <span>$3.00</span>
        </div>
        <div className="flex justify-between items-center text-sm text-foreground">
          <span>Subscription</span>
          <span>None</span>
        </div>
        <div className="border-t border-border pt-3 flex justify-between items-center font-bold text-lg text-foreground">
          <span>Total Due</span>
          <span>$3.00</span>
        </div>
      </div>

      <div className="bg-success/10 text-success p-3 rounded-lg flex items-start gap-2 mb-8 text-sm">
        <ShieldCheck className="w-5 h-5 shrink-0" />
        <p><strong>No recurring charges.</strong> This is a secure, one-time payment processed by Stripe.</p>
      </div>

      <Button 
        onClick={handlePayment} 
        disabled={isProcessing} 
        className="w-full h-12 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90"
      >
        {isProcessing ? <Loader2 className="w-5 h-5 mr-2 animate-spin" /> : null}
        Pay $3.00 & Download
      </Button>
    </div>
  );
}
