
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, Check, Loader2, CreditCard, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext.jsx';
import apiServerClient from '@/lib/apiServerClient.js';
import SEOHead from '@/components/SEOHead.jsx';
import { toast } from 'sonner';
import OneTimeDownloadCheckout from '@/components/OneTimeDownloadCheckout.jsx';

export default function CheckoutPage() {
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get('type');
  const planParam = searchParams.get('plan') || 'premium_monthly';
  const cvIdParam = searchParams.get('cvId');
  const cvNameParam = searchParams.get('cvName');
  
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [billingEmail, setBillingEmail] = useState(currentUser?.email || '');

  const planDetails = {
    premium_monthly: {
      name: 'Premium Monthly',
      price: '$9.99',
      period: 'per month',
      features: ['Access to 15 Premium CV Templates', 'Unlimited CV Downloads', 'Full Interview Practice Database', 'Priority Email Support']
    },
    premium_annual: {
      name: 'Premium Annual',
      price: '$99.00',
      period: 'per year',
      features: ['Access to 15 Premium CV Templates', 'Unlimited CV Downloads', 'Full Interview Practice Database', 'Priority Email Support', 'Exclusive Webinars']
    }
  };

  const plan = planDetails[planParam];

  const handleSubscriptionCheckout = async (e) => {
    e.preventDefault();
    
    if (!billingEmail) {
      toast.error('Billing email is required.');
      return;
    }

    setIsProcessing(true);
    
    try {
      const response = await apiServerClient.fetch('/stripe/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planType: planParam,
          email: billingEmail,
          paymentType: 'subscription'
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
      toast.error(error.message || 'An error occurred during checkout setup.');
      setIsProcessing(false);
    }
  };

  if (typeParam === 'one-time') {
    return (
      <div className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <SEOHead title="Checkout - One-Time Download | Career2Day" />
        <OneTimeDownloadCheckout cvId={cvIdParam} cvName={cvNameParam} />
      </div>
    );
  }

  if (typeParam === 'subscription' || searchParams.has('plan')) {
    if (!plan) return null;

    return (
      <div className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <SEOHead title={`Checkout - ${plan.name} | Career2Day`} />
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-extrabold mb-8 text-foreground">Secure Checkout</h1>
          
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            <div className="w-full lg:w-3/5 bg-card border border-border rounded-xl p-6 shadow-sm">
              <form onSubmit={handleSubscriptionCheckout}>
                <h2 className="text-xl font-bold mb-6 border-b border-border pb-2">Billing Details</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={billingEmail}
                      onChange={(e) => setBillingEmail(e.target.value)}
                      required
                      className="bg-background text-foreground border-border rounded-lg"
                    />
                    <p className="text-xs text-muted-foreground">Receipts will be sent to this email.</p>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg flex items-start gap-3 mb-8">
                  <ShieldCheck className="w-5 h-5 text-success shrink-0" />
                  <div className="text-sm text-foreground">
                    <p className="font-semibold mb-1">Guaranteed Safe & Secure Checkout</p>
                    <p className="text-muted-foreground">Your payment is processed securely by Stripe. We do not store your credit card information.</p>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg font-bold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Processing...</>
                  ) : (
                    'Proceed to Payment'
                  )}
                </Button>
              </form>
            </div>

            <div className="w-full lg:w-2/5 bg-muted/50 border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-6 border-b border-border pb-2">Order Summary</h2>
              
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-bold text-lg text-foreground">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">Billed {plan.period}</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-extrabold text-foreground">{plan.price}</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start text-sm text-foreground">
                    <Check className="w-4 h-4 text-success mr-2 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4">
                <div className="flex justify-between items-center font-bold text-lg">
                  <span>Total Due Today</span>
                  <span>{plan.price}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <SEOHead title="Choose Payment Type | Career2Day" />
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-3xl font-extrabold mb-4 text-foreground">Choose Payment Type</h1>
        <p className="text-muted-foreground mb-10">Select how you would like to proceed with your purchase.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors flex flex-col">
            <CreditCard className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">One-Time Download</h3>
            <p className="text-muted-foreground text-sm mb-6 flex-grow">Pay $3.00 once to download a single CV. No recurring charges.</p>
            <Button asChild variant="outline" className="w-full border-border">
              <Link to={`/checkout?type=one-time${cvIdParam ? `&cvId=${cvIdParam}` : ''}${cvNameParam ? `&cvName=${encodeURIComponent(cvNameParam)}` : ''}`}>
                Select One-Time
              </Link>
            </Button>
          </div>
          
          <div className="bg-[hsl(var(--pricing-highlight-bg))] border border-primary/30 rounded-xl p-6 flex flex-col">
            <Star className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-primary-foreground">Premium Subscription</h3>
            <p className="text-primary-foreground/80 text-sm mb-6 flex-grow">Get unlimited downloads and full access starting at $9.99/mo.</p>
            <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
              <Link to="/pricing">
                View Premium Plans
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
