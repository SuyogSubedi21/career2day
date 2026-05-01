
import React from 'react';
import { Crown, ArrowRight, Lock } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function CVTemplatePreviewCard({ template, isPremiumUser }) {
  const isPremiumTemplate = template.category === 'Premium';
  const isLocked = isPremiumTemplate && !isPremiumUser;

  const CardBody = (
    <Card className={`flex flex-col h-full overflow-hidden border-border bg-card transition-all duration-300 rounded-2xl ${isLocked ? 'hover:border-border shadow-sm' : 'hover:border-primary/40 hover:shadow-xl group'}`}>
      <div className="aspect-[1/1.414] bg-muted relative overflow-hidden border-b border-border/50">
        
        <img 
          src={template.previewImage} 
          alt={`Preview of ${template.name} template`} 
          className={`w-full h-full object-cover object-top transition-transform duration-500 ${isLocked ? 'opacity-70 blur-[1px]' : 'group-hover:scale-[1.03]'}`}
          loading="lazy"
        />
        
        {/* Overlay for unlocked templates */}
        {!isLocked && (
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
            <span className="flex items-center text-sm font-bold text-primary tracking-wide">
              Use Template <ArrowRight className="w-4 h-4 ml-2" />
            </span>
          </div>
        )}

        {/* Overlay for locked templates */}
        {isLocked && (
          <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] flex flex-col items-center justify-center p-4 text-center">
            <div className="bg-background/90 p-4 rounded-full shadow-lg mb-4">
              <Lock className="w-8 h-8 text-amber-500" />
            </div>
            <Button variant="default" className="bg-amber-500 hover:bg-amber-600 text-white font-bold w-full max-w-[200px] shadow-lg">
              Unlock Premium
            </Button>
          </div>
        )}
        
        {isPremiumTemplate && (
          <div className="absolute top-3 right-3 z-10">
            <Badge className="bg-amber-500/90 hover:bg-amber-500 backdrop-blur-sm text-white border-none shadow-sm font-bold tracking-wide">
              <Crown className="w-3.5 h-3.5 mr-1.5" /> Premium
            </Badge>
          </div>
        )}
        {!isPremiumTemplate && (
          <div className="absolute top-3 right-3 z-10">
            <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm border-none shadow-sm font-semibold text-foreground">
              Free
            </Badge>
          </div>
        )}
      </div>
      
      <CardHeader className="p-5 pb-3">
        <CardTitle className={`text-lg font-bold transition-colors ${isLocked ? 'text-muted-foreground' : 'text-foreground group-hover:text-primary'}`}>
          {template.name}
        </CardTitle>
        <CardDescription className="text-sm line-clamp-2 text-muted-foreground mt-1.5 leading-relaxed">
          {template.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-5 pt-0 mt-auto">
        <div className="flex flex-wrap gap-2">
          <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground bg-muted px-2 py-1 rounded-md">
            {template.typography?.fontFamily.split(',')[0]}
          </span>
          <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground bg-muted px-2 py-1 rounded-md">
            {template.layout?.type === 'single' ? 'Single Column' : 'Two Column'}
          </span>
        </div>
      </CardContent>
    </Card>
  );

  if (isLocked) {
    return (
      <Link to="/pricing" className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-2xl">
        {CardBody}
      </Link>
    );
  }

  return (
    <Link to={`/cv-builder?template=${template.id}`} className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl">
      {CardBody}
    </Link>
  );
}
