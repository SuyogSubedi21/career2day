
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Check, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PricingPopup({ isOpen, onClose }) {
  const navigate = useNavigate();

  const handleUpgrade = (planType) => {
    onClose();
    navigate(`/pricing?plan=${planType}`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl bg-card border-border shadow-2xl p-0 overflow-hidden">
        <div className="p-8 md:p-10 max-h-[90vh] overflow-y-auto scroll-smooth">
          <DialogHeader className="text-center mb-8">
            <DialogTitle className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight flex items-center justify-center gap-3">
              <Crown className="w-10 h-10 text-amber-500" /> Unlock Premium
            </DialogTitle>
            <DialogDescription className="text-lg text-muted-foreground mt-4">
              Choose a plan to access all premium features and supercharge your career.
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Free Tier */}
            <div className="rounded-3xl border border-border bg-background p-6 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Free</h3>
              <div className="text-3xl font-extrabold mb-6">$0<span className="text-lg text-muted-foreground font-medium">/mo</span></div>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-center text-sm"><Check className="w-4 h-4 text-primary mr-2" /> 1 CV Download</li>
                <li className="flex items-center text-sm"><Check className="w-4 h-4 text-primary mr-2" /> Free Roadmaps</li>
              </ul>
              <Button variant="outline" className="w-full rounded-xl font-bold" onClick={onClose}>Current Plan</Button>
            </div>

            {/* Premium Tier */}
            <div className="rounded-3xl border-2 border-primary bg-primary/5 p-6 flex flex-col relative transform md:-translate-y-4 shadow-xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Most Popular
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Premium</h3>
              <div className="text-4xl font-extrabold mb-6 text-primary">$5<span className="text-lg text-muted-foreground font-medium">/mo</span></div>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-center text-sm font-medium"><Check className="w-4 h-4 text-primary mr-2" /> Unlimited CVs</li>
                <li className="flex items-center text-sm font-medium"><Check className="w-4 h-4 text-primary mr-2" /> All Interview Prep</li>
                <li className="flex items-center text-sm font-medium"><Check className="w-4 h-4 text-primary mr-2" /> All Quizzes</li>
              </ul>
              
              {/* Payment Buttons specific to this tier */}
              <div className="space-y-2 mt-auto pt-4 border-t border-primary/20">
                <Button onClick={() => handleUpgrade('monthly')} className="w-full rounded-xl font-bold bg-[#5E338D] hover:bg-[#4A2870] text-white transition-colors">
                  Pay with Khalti
                </Button>
                <Button onClick={() => handleUpgrade('monthly')} className="w-full rounded-xl font-bold bg-[#60B246] hover:bg-[#4C9036] text-white transition-colors">
                  Pay with eSewa
                </Button>
              </div>
            </div>

            {/* Premium+ Tier */}
            <div className="rounded-3xl border border-border bg-background p-6 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Premium+</h3>
              <div className="text-3xl font-extrabold mb-6">$50<span className="text-lg text-muted-foreground font-medium">/yr</span></div>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-center text-sm"><Check className="w-4 h-4 text-primary mr-2" /> 2 Months Free</li>
                <li className="flex items-center text-sm"><Check className="w-4 h-4 text-primary mr-2" /> Priority Support</li>
                <li className="flex items-center text-sm"><Check className="w-4 h-4 text-primary mr-2" /> Early Access</li>
              </ul>
              <Button variant="outline" className="w-full rounded-xl font-bold border-primary text-primary hover:bg-primary/10" onClick={() => handleUpgrade('yearly')}>
                Get Yearly
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
