
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PricingCard({ planName, price, description, features, ctaText, ctaLink, badge, isPopular }) {
  const cardClasses = isPopular 
    ? "bg-primary text-primary-foreground rounded-3xl p-8 border border-primary shadow-2xl relative flex flex-col transform md:-translate-y-4"
    : "glass-card rounded-3xl p-8 border shadow-sm flex flex-col";

  const textMutedClasses = isPopular ? "text-primary-foreground/80" : "text-muted-foreground";
  const checkClasses = isPopular ? "text-emerald-300" : "text-emerald-500";
  const xClasses = isPopular ? "text-primary-foreground/50" : "text-muted-foreground/50";
  const buttonClasses = isPopular 
    ? "w-full rounded-full h-12 bg-background text-foreground hover:bg-background/90 font-bold"
    : "w-full rounded-full h-12 font-bold shadow-md shadow-primary/10";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cardClasses}
    >
      {badge && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-md">
          {badge}
        </div>
      )}
      
      <h3 className="text-2xl font-bold mb-2">{planName}</h3>
      <p className={`${textMutedClasses} mb-6 min-h-[48px]`}>{description}</p>
      
      <div className="text-5xl font-extrabold mb-8 flex items-baseline">
        {price}
        {price !== 'Custom' && price !== 'Free' && <span className={`text-lg font-normal ml-1 ${textMutedClasses}`}>/mo</span>}
      </div>
      
      <ul className="space-y-4 mb-8 flex-1">
        {features.map((feature, i) => (
          <li key={i} className={`flex items-start gap-3 ${!feature.included ? 'opacity-70' : ''}`}>
            {feature.included ? (
              <Check className={`w-5 h-5 shrink-0 mt-0.5 ${checkClasses}`} />
            ) : (
              <X className={`w-5 h-5 shrink-0 mt-0.5 ${xClasses}`} />
            )}
            <span className="text-sm leading-tight">{feature.text}</span>
          </li>
        ))}
      </ul>
      
      <Button asChild size="lg" variant={isPopular ? 'secondary' : 'default'} className={buttonClasses}>
        <Link to={ctaLink}>{ctaText}</Link>
      </Button>
    </motion.div>
  );
}
