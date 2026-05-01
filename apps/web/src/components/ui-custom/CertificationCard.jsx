
import React from 'react';
import { Award, Clock, DollarSign } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export function CertificationCard({ name, issuer, cost, duration }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-start gap-2">
          <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <span className="leading-tight">{name}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm font-medium text-muted-foreground mb-3">{issuer}</p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          {cost && (
            <div className="flex items-center gap-1">
              <DollarSign className="w-3.5 h-3.5" /> {cost}
            </div>
          )}
          {duration && (
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {duration}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default CertificationCard;
