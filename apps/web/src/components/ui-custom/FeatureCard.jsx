
import React from 'react';

export const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors">
      <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="font-bold text-base mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
