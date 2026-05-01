
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Building, TrendingUp, GraduationCap, AlertTriangle, ChevronRight } from 'lucide-react';

export default function CareerInsightsSection({ career }) {
  if (!career) return null;

  const topCompanies = [
    "Google", "Microsoft", "Amazon", "Apple", "Meta", "Netflix"
  ].sort(() => 0.5 - Math.random()).slice(0, 5);

  const educationText = "Most employers require a Bachelor's degree in a related field, though equivalent experience, bootcamps, and robust portfolios are increasingly accepted in lieu of formal degrees.";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Education & Requirements */}
      <Card className="bg-card border-none shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
        <div className="h-2 bg-primary w-full" />
        <CardContent className="p-8">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
            <GraduationCap className="w-6 h-6 text-primary" /> Education & Training
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {educationText}
          </p>
          
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Learning Resources</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                <ChevronRight className="w-4 h-4 text-primary" /> Online specialized courses (Coursera, Udemy)
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                <ChevronRight className="w-4 h-4 text-primary" /> Industry standard certifications
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                <ChevronRight className="w-4 h-4 text-primary" /> Open source contribution / Portfolios
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Industry Insights */}
      <div className="space-y-6">
        <Card className="bg-card border-none shadow-md rounded-2xl">
          <CardContent className="p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 shrink-0">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-1">Top Companies Hiring</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {topCompanies.join(', ')} and rapid-growth startups.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-none shadow-md rounded-2xl">
          <CardContent className="p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-1">Market Projections</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Demand is projected to outpace average job growth over the next 5-10 years, driven by digital transformation.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-none shadow-md rounded-2xl border-l-4 border-l-amber-500">
          <CardContent className="p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-1">Industry Challenges</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Rapid technological changes require continuous upskilling. High competition for entry-level positions.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
