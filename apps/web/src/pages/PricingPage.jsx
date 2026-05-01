
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X, Shield, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import SEOHead from '@/components/SEOHead.jsx';

export default function PricingPage() {
  const tiers = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Basic tools to get started.',
      features: [
        '1 CV download per month',
        '3 Basic templates',
        '5 Practice questions',
        'Community support'
      ],
      missing: ['Unlimited downloads', 'Premium templates', 'Full question bank', 'Quizzes & Roadmaps', 'Career coaching'],
      cta: 'Get Started',
      link: '/signup',
      highlight: false
    },
    {
      name: 'One-Time',
      price: '$3.00',
      period: ' one-time',
      description: 'Single premium download.',
      features: [
        '1 Premium CV download',
        'All Premium templates',
        'No subscription required',
        'Email support'
      ],
      missing: ['Unlimited downloads', 'Full question bank', 'Quizzes & Roadmaps', 'Career coaching'],
      cta: 'Buy Now',
      link: '/checkout',
      highlight: false
    },
    {
      name: 'Premium Monthly',
      price: '$9.99',
      period: '/month',
      description: 'Full access to all features.',
      features: [
        'Unlimited CV downloads',
        'All Premium templates',
        'All practice questions',
        'Quizzes & Career Roadmaps',
        'Priority email support'
      ],
      missing: ['Career coaching session'],
      cta: 'Subscribe Monthly',
      link: '/signup?plan=monthly',
      highlight: true
    },
    {
      name: 'Premium Yearly',
      price: '$99',
      period: '/year',
      description: 'Best value for serious growth.',
      features: [
        'Everything in Monthly',
        '2 months free (save 17%)',
        '1 career coaching session/mo',
        'Exclusive premium resources',
        'Ad-free experience'
      ],
      missing: [],
      cta: 'Subscribe Yearly',
      link: '/signup?plan=yearly',
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <SEOHead 
        title="Pricing | CareerMastery"
        description="Choose the right plan to accelerate your IT career. Affordable pricing for CV builder, interview prep, and career roadmaps."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground">Invest in your career with tools designed to help you land your dream tech job faster.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {tiers.map((tier) => (
            <div 
              key={tier.name} 
              className={`flex flex-col h-full rounded-2xl p-8 transition-all duration-300 ${
                tier.highlight 
                  ? 'bg-primary text-primary-foreground shadow-xl scale-105 ring-2 ring-primary ring-offset-2 ring-offset-background' 
                  : 'bg-card border border-border text-card-foreground shadow-sm hover:shadow-md'
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center shadow-lg">
                  <Star className="w-3 h-3 mr-1 fill-current" /> Recommended
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <p className={`text-sm ${tier.highlight ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>{tier.description}</p>
              </div>
              
              <div className="mb-6 pb-6 border-b border-border/20">
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold">{tier.price}</span>
                  <span className={`text-sm font-medium ml-1 ${tier.highlight ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>{tier.period}</span>
                </div>
              </div>
              
              <ul className="flex-1 space-y-4 mb-8 text-sm">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 font-medium">
                    <Check className={`w-5 h-5 shrink-0 ${tier.highlight ? 'text-primary-foreground' : 'text-primary'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
                {tier.missing.map((feature, i) => (
                  <li key={`missing-${i}`} className={`flex items-start gap-3 font-medium ${tier.highlight ? 'text-primary-foreground/40' : 'text-muted-foreground/50'}`}>
                    <X className="w-5 h-5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                asChild 
                className={`w-full h-12 font-bold ${
                  tier.highlight 
                    ? 'bg-background text-primary hover:bg-background/90' 
                    : 'bg-primary text-primary-foreground hover:bg-primary/90'
                }`}
              >
                <Link to={tier.link}>{tier.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Trust Elements */}
        <div className="flex flex-wrap justify-center gap-8 mb-24 py-8 border-y border-border bg-secondary/20 rounded-2xl">
          <div className="flex items-center gap-3 text-foreground">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Shield className="w-6 h-6" /></div>
            <div>
              <p className="font-bold text-sm">Secure Payments</p>
              <p className="text-xs text-muted-foreground">256-bit encryption</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-foreground">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Clock className="w-6 h-6" /></div>
            <div>
              <p className="font-bold text-sm">Cancel Anytime</p>
              <p className="text-xs text-muted-foreground">No long-term contracts</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full text-foreground">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-semibold">Can I switch plans later?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, you can upgrade, downgrade, or cancel your subscription at any time from your account settings. Prorated charges will be applied automatically.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-semibold">How does the one-time download work?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                You pay a single $3.00 fee to download one finalized PDF of your CV using any of our premium templates. This does not start a subscription.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-semibold">What's included in the career coaching session?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yearly premium members get a 30-minute 1-on-1 session per month with an industry expert to review your CV, practice mock interviews, or discuss career strategy.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
