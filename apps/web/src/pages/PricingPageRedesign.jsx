
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Check, Shield, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import SEOHead from '@/components/SEOHead.jsx';
import { KhaltiPaymentButton, ESewaPaymentButton, BankTransferOption } from '@/components/payment/PaymentMethods.jsx';
import { useAuth } from '@/contexts/AuthContext.jsx';
import pb from '@/lib/pocketbaseClient.js';

export default function PricingPageRedesign() {
  const { currentUser } = useAuth();
  const [searchParams] = useSearchParams();
  const [activePlan, setActivePlan] = useState('monthly');
  const [currentSubscription, setCurrentSubscription] = useState(null);

  useEffect(() => {
    const plan = searchParams.get('plan');
    if (plan && ['free', 'monthly', 'yearly'].includes(plan)) {
      setActivePlan(plan);
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchSubscription = async () => {
      if (!currentUser) return;
      try {
        const subs = await pb.collection('subscriptions_stripe').getList(1, 1, {
          filter: `user_email="${currentUser.email}" && status="active"`,
          sort: '-created',
          $autoCancel: false
        });
        if (subs.items.length > 0) {
          setCurrentSubscription(subs.items[0]);
        }
      } catch (error) {
        console.error('Error fetching subscription:', error);
      }
    };
    fetchSubscription();
  }, [currentUser]);

  const getPlanTypeKey = (key) => {
    if (key === 'monthly') return 'premium_monthly';
    if (key === 'yearly') return 'premium_annual';
    return 'free';
  };

  const tiers = {
    'free': {
      name: 'Free Plan',
      price: '$0',
      period: '/month',
      description: 'Basic access to get started.',
      features: [
        '1 CV download',
        'Basic templates',
        'Free career roadmaps'
      ]
    },
    'monthly': {
      name: 'Premium Monthly',
      price: '$5',
      period: '/month',
      description: 'Full access to all platform features.',
      features: [
        'Unlimited CV downloads',
        'All Premium templates',
        'All practice questions',
        'Quizzes & Career Roadmaps',
        'Priority email support'
      ]
    },
    'yearly': {
      name: 'Premium Yearly',
      price: '$50',
      period: '/year',
      description: 'Best value for serious growth (Save 17%).',
      features: [
        'Everything in Monthly',
        '2 months free',
        '1 career coaching session/mo',
        'Exclusive premium resources',
        'Ad-free experience'
      ]
    }
  };

  const isPlanPurchased = (key) => {
    if (!currentSubscription && key === 'free') return true;
    if (currentSubscription && currentSubscription.plan_type === getPlanTypeKey(key)) return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <SEOHead 
        title="Pricing | Career2Day"
        description="Choose the right plan to accelerate your IT career. We support Khalti, eSewa, and local bank transfers."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">Invest in Your Career</h1>
          <p className="text-xl text-muted-foreground">Unlock premium templates, interview prep, and career roadmaps with local payment options.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            {Object.entries(tiers).map(([key, tier]) => {
              const purchased = isPlanPurchased(key);
              const isActive = activePlan === key;
              
              return (
                <div 
                  key={key} 
                  onClick={() => setActivePlan(key)}
                  className={`cursor-pointer rounded-2xl border-2 p-6 transition-all duration-200 relative overflow-hidden ${
                    isActive 
                      ? 'border-primary bg-primary/5 ring-4 ring-primary/10 shadow-md' 
                      : 'border-border bg-card hover:border-primary/50 shadow-sm'
                  }`}
                >
                  {purchased && (
                    <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl flex items-center gap-1 shadow-sm">
                      <CheckCircle2 className="w-3 h-3" /> Current Plan
                    </div>
                  )}
                  
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1 flex items-center gap-2">
                        {tier.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{tier.description}</p>
                    </div>
                    <div className="text-right mt-1">
                      <span className="text-2xl font-extrabold text-foreground">{tier.price}</span>
                      <span className="text-sm font-medium text-muted-foreground ml-1">{tier.period}</span>
                    </div>
                  </div>
                  
                  {isActive && (
                    <div className="mt-6 pt-6 border-t border-border/50 animate-in fade-in slide-in-from-top-2">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mb-6">
                        {tier.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-foreground font-medium">
                            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {purchased ? (
                        <Button disabled className="w-full bg-emerald-500 hover:bg-emerald-600 text-white opacity-100 font-bold">
                          <CheckCircle2 className="w-4 h-4 mr-2" /> Purchased
                        </Button>
                      ) : (
                        <Button className="w-full font-bold" variant={key === 'free' ? 'outline' : 'default'}>
                          {key === 'free' ? 'Select Free Plan' : 'Select ' + tier.name}
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-5 bg-card border border-border rounded-2xl p-6 shadow-xl sticky top-24">
            <h3 className="text-xl font-bold text-foreground mb-2">Checkout Details</h3>
            <div className="flex justify-between text-sm text-muted-foreground mb-6 pb-6 border-b border-border">
              <span>Selected Plan:</span>
              <span className="font-bold text-foreground">{tiers[activePlan].name} ({tiers[activePlan].price})</span>
            </div>

            {isPlanPurchased(activePlan) ? (
              <div className="p-8 text-center bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2">Active Subscription</h4>
                <p className="text-sm text-emerald-600/80 dark:text-emerald-400/80 mb-4">You are currently subscribed to this plan.</p>
                <Button variant="outline" className="w-full border-emerald-500/30 text-emerald-600 hover:bg-emerald-500/10" onClick={() => window.location.href = '/settings'}>
                  Manage Subscription
                </Button>
              </div>
            ) : activePlan === 'free' ? (
              <div className="p-8 text-center bg-muted rounded-xl">
                <h4 className="font-bold mb-2">You selected the Free plan</h4>
                <p className="text-sm text-muted-foreground mb-4">Upgrade to Premium to unlock all features.</p>
                <Button className="w-full" onClick={() => setActivePlan('monthly')}>View Premium Plans</Button>
              </div>
            ) : (
              <Tabs defaultValue="khalti" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6 bg-muted">
                  <TabsTrigger value="khalti" className="text-xs sm:text-sm font-bold">Khalti</TabsTrigger>
                  <TabsTrigger value="esewa" className="text-xs sm:text-sm font-bold">eSewa</TabsTrigger>
                  <TabsTrigger value="bank" className="text-xs sm:text-sm font-bold">Bank</TabsTrigger>
                </TabsList>
                
                <TabsContent value="khalti" className="space-y-4">
                  <div className="p-4 bg-[hsl(var(--khalti))]/10 rounded-xl border border-[hsl(var(--khalti))]/20 mb-4 text-sm text-[hsl(var(--khalti))] font-medium">
                    Pay securely using your Khalti wallet or linked bank accounts.
                  </div>
                  <KhaltiPaymentButton 
                    planType={activePlan} 
                    amount={parseInt(tiers[activePlan].price.replace(/\D/g, ''))} 
                    userId={currentUser?.id} 
                    email={currentUser?.email}
                  />
                </TabsContent>
                
                <TabsContent value="esewa" className="space-y-4">
                   <div className="p-4 bg-[hsl(var(--esewa))]/10 rounded-xl border border-[hsl(var(--esewa))]/20 mb-4 text-sm text-[hsl(var(--esewa))] font-medium">
                    Pay seamlessly using your eSewa mobile wallet.
                  </div>
                  <ESewaPaymentButton 
                    planType={activePlan} 
                    amount={parseInt(tiers[activePlan].price.replace(/\D/g, ''))} 
                    userId={currentUser?.id} 
                    email={currentUser?.email}
                  />
                </TabsContent>
                
                <TabsContent value="bank">
                  <BankTransferOption 
                    planType={activePlan} 
                    amount={parseInt(tiers[activePlan].price.replace(/\D/g, ''))} 
                    userId={currentUser?.id} 
                    email={currentUser?.email}
                  />
                </TabsContent>
              </Tabs>
            )}

            <div className="mt-8 pt-6 border-t border-border flex items-center justify-center gap-2 text-xs text-muted-foreground font-medium">
              <Shield className="w-4 h-4" /> Secure, 256-bit encrypted checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
