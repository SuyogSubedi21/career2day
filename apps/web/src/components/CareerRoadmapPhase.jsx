
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, CheckCircle2 } from 'lucide-react';

export default function CareerRoadmapPhase({ phase, isLast }) {
  return (
    <div className="relative flex gap-6">
      {/* Timeline Connector */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-primary font-bold z-10 shrink-0">
          {phase.phase}
        </div>
        {!isLast && (
          <div className="w-0.5 h-full bg-border my-2" />
        )}
      </div>

      {/* Content Card */}
      <div className="flex-1 pb-10">
        <Card className="shadow-sm border-border hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-card-foreground mb-1">
                  {phase.title}
                </h3>
                <p className="text-muted-foreground text-sm flex items-center">
                  <Clock className="w-4 h-4 mr-1.5" />
                  {phase.duration} weeks
                </p>
              </div>
            </div>

            <p className="text-card-foreground/80 mb-6 leading-relaxed">
              {phase.description}
            </p>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Key Skills Learned
              </h4>
              <div className="flex flex-wrap gap-2">
                {phase.skills.map((skill, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-secondary text-secondary-foreground font-medium">
                    <CheckCircle2 className="w-3 h-3 mr-1.5 text-primary" />
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
