
import React from 'react';
import { Check, Minus } from 'lucide-react';

export default function FeatureComparison({ features }) {
  return (
    <div className="mt-24 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Compare Plans</h2>
      
      <div className="glass-card rounded-3xl overflow-hidden border">
        <div className="grid grid-cols-3 bg-secondary/50 p-4 sm:p-6 border-b font-bold text-sm sm:text-base">
          <div className="col-span-1">Features</div>
          <div className="col-span-1 text-center">Free</div>
          <div className="col-span-1 text-center text-primary">Premium</div>
        </div>
        
        <div className="divide-y divide-border/50">
          {features.map((feature, idx) => (
            <div key={idx} className="grid grid-cols-3 p-4 sm:p-6 items-center text-sm sm:text-base hover:bg-muted/30 transition-colors">
              <div className="col-span-1 font-medium text-foreground/90">{feature.name}</div>
              <div className="col-span-1 flex justify-center">
                {feature.free ? <Check className="w-5 h-5 text-emerald-500" /> : <Minus className="w-5 h-5 text-muted-foreground/30" />}
              </div>
              <div className="col-span-1 flex justify-center">
                {feature.premium ? <Check className="w-5 h-5 text-primary" /> : <Minus className="w-5 h-5 text-muted-foreground/30" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
