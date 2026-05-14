import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Heart, Lightbulb, MapPin, GraduationCap, ArrowRight, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SEOHead from '@/components/SEOHead.jsx';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="About Career2Day | Roadmaps, Interview Prep, Quizzes & CV Builder"
        description="Learn about Career2Day, a free career readiness platform with roadmaps, interview preparation, quizzes and a role-aware CV builder."
      />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-foreground" style={{ letterSpacing: '-0.02em' }}>
              About Career2Day
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              A free career readiness platform that connects roadmaps, interview preparation, quizzes and a role-aware CV builder in one practical learning path.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">The Story Behind the Platform</h2>
                <div className="prose prose-lg dark:prose-invert text-muted-foreground leading-relaxed max-w-none space-y-6">
                  <p>
                    Career2Day started from a simple student problem: learning for a tech career was scattered across too many tabs. Roadmaps lived in one place, interview questions in another, quizzes somewhere else, and CV building often came last when it should support the whole journey.
                  </p>
                  <p>
                    As an Artificial Intelligence student, Suyog Subedi saw how quickly beginners can get stuck between tutorials, project ideas, interview preparation and application materials. Capable learners were not missing ambition; they were missing a clear structure that connected preparation with proof.
                  </p>
                  <p>
                    That frustration became Career2Day: a full career readiness platform with structured roadmaps, interview question banks, role quizzes, progress guidance and a browser-based CV builder. The goal is to help learners move from choosing a path to showing real readiness for the role they want.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-border">
                <Card className="bg-muted border-none shadow-none">
                  <CardContent className="p-8">
                    <Heart className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Help learners follow a clear path from choosing a career to building projects, practising interviews, checking readiness and creating a role-aware CV.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-muted border-none shadow-none">
                  <CardContent className="p-8">
                    <Lightbulb className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Make practical career preparation accessible to everyone, especially students and beginners who need guidance, structure and confidence.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Card className="border border-border shadow-lg rounded-2xl overflow-hidden sticky top-24">
                <div className="h-32 bg-primary/10 border-b border-border flex items-center justify-center">
                  <GraduationCap className="w-12 h-12 text-primary opacity-50" />
                </div>
                <CardContent className="p-8 -mt-10 relative">
                  <div className="w-20 h-20 bg-background border-4 border-card rounded-2xl flex items-center justify-center shadow-sm mb-6">
                    <span className="text-2xl font-bold text-primary">SS</span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-1">Suyog Subedi</h3>
                  <p className="text-muted-foreground font-medium mb-6">Founder & Developer</p>

                  <div className="space-y-4">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-5 h-5 mr-3 text-foreground/60" />
                      <span>Based in Nepal</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <GraduationCap className="w-5 h-5 mr-3 text-foreground/60" />
                      <span>Artificial Intelligence Student (2nd Year)</span>
                    </div>
                  </div>

                  <Button asChild variant="outline" className="mt-6 w-full rounded-xl">
                    <a href="https://www.linkedin.com/in/suyog-subedi-724510316" target="_blank" rel="noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground text-center px-4">
        <div className="max-w-3xl mx-auto">
          <FileText className="w-12 h-12 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your next career move starts here</h2>
          <p className="text-lg opacity-90 mb-10 max-w-xl mx-auto">
            Stop fighting with document margins and start applying. Build a clean, professional CV in minutes.
          </p>
          <Button asChild size="lg" variant="secondary" className="h-14 px-8 text-lg font-bold rounded-xl">
            <Link to="/cv-builder">
              Start building your CV today <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
