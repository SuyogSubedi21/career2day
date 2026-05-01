
import React, { useState } from 'react';
import { Lock, Sparkles, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PricingPopup from '@/components/PricingPopup.jsx';
import { useSubscription } from '@/hooks/useSubscription.js';

export default function FeatureLockWrapper({ children }) {
  const { isPremium, loading } = useSubscription();
  const [showPricing, setShowPricing] = useState(false);

  if (loading) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center w-full">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  if (isPremium) {
    return <>{children}</>;
  }

  return (
    <div className="relative min-h-[50vh] flex flex-col items-center justify-center p-6 bg-background rounded-[2rem] border border-border w-full overflow-hidden mt-6 shadow-sm">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center text-center max-w-xl w-full p-8 md:p-12 glass-card rounded-[2.5rem] shadow-xl border border-border/50">
        <div className="w-24 h-24 bg-amber-500/10 rounded-full flex items-center justify-center mb-8 shadow-inner ring-4 ring-amber-500/20">
          <Lock className="w-12 h-12 text-amber-500" />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-foreground tracking-tight">Premium Feature</h2>
        <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
          Unlock this feature and accelerate your career. Get full access to interview questions, quizzes, and unlimited CV downloads for just <strong className="text-foreground">$5/month</strong>.
        </p>
        <Button 
          size="lg" 
          className="w-full h-14 text-lg font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform" 
          onClick={() => setShowPricing(true)}
        >
          <Sparkles className="w-5 h-5 mr-2" /> Upgrade to Premium
        </Button>
      </div>
      <PricingPopup isOpen={showPricing} onClose={() => setShowPricing(false)} />
    </div>
  );
}
