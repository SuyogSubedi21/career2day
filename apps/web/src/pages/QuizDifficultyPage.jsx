
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Zap, Target, Flame } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead.jsx';
import { getCareerPlatformBySlug } from '@/data/careerPlatformData.js';

export default function QuizDifficultyPage() {
  const { careerSlug } = useParams();
  const career = getCareerPlatformBySlug(careerSlug);
  
  const careerName = career?.name || careerSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const difficulties = [
    {
      id: 'easy',
      title: 'Easy',
      icon: Zap,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
      questions: 20,
      time: '10 mins',
      description: 'Fundamental concepts and definitions. Perfect for entry-level verification.'
    },
    {
      id: 'medium',
      title: 'Medium',
      icon: Target,
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
      questions: 20,
      time: '15 mins',
      description: 'Applied knowledge and architectural understanding. Great for mid-level practice.'
    },
    {
      id: 'hard',
      title: 'Hard',
      icon: Flame,
      color: 'text-destructive',
      bgColor: 'bg-destructive/10',
      questions: 20,
      time: '20 mins',
      description: 'Deep technical constraints, anti-patterns, and complex scenarios. Challenge yourself.'
    }
  ];

  return (
    <div className="min-h-[100dvh] bg-[linear-gradient(180deg,#f8fafc_0%,#eef2f7_100%)] py-16 flex flex-col items-center dark:bg-[linear-gradient(180deg,#070b13_0%,#0b1220_100%)]">
      <SEOHead 
        title={`Select Difficulty - ${careerName} Quiz`}
        description={`Choose a difficulty level to begin your ${careerName} technical assessment.`}
      />
      
      <div className="max-w-4xl w-full px-4 sm:px-6">
        <Button variant="ghost" asChild className="mb-8 pl-0 hover:bg-transparent hover:text-primary transition-colors">
          <Link to={`/careers/${careerSlug}`} className="flex items-center text-muted-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Career Path
          </Link>
        </Button>

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            {careerName} Quiz
          </h1>
          <p className="text-lg text-muted-foreground">
            Select a difficulty level to begin your assessment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {difficulties.map(level => {
            const Icon = level.icon;
            return (
              <Card key={level.id} className="bg-card/95 border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6 flex flex-col h-full items-center text-center">
                  <div className={`w-16 h-16 rounded-2xl ${level.bgColor} flex items-center justify-center mb-6`}>
                    <Icon className={`w-8 h-8 ${level.color}`} />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-card-foreground mb-2">{level.title}</h2>
                  
                  <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground mb-4">
                    <span>{level.questions} Questions</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/50"></span>
                    <span>{level.time}</span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                    {level.description}
                  </p>
                  
                  <Button
                    asChild
                    className={`w-full mt-auto ${level.id === 'medium' ? 'bg-amber-400 text-amber-950 hover:bg-amber-500' : ''}`}
                    variant={level.id === 'hard' ? 'destructive' : 'default'}
                  >
                    <Link to={`/quiz/${careerSlug}/${level.id}`}>
                      Start {level.title} Quiz
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
