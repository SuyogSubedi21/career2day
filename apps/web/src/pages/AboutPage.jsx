
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Heart, Lightbulb, MapPin, GraduationCap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SEOHead from '@/components/SEOHead.jsx';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="About Career2Day | Built by Students for Professionals"
        description="Learn about the story behind Career2Day, founded by Suyog Subedi to make CV building accessible to everyone."
      />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-foreground" style={{ letterSpacing: '-0.02em' }}>
              About Career2Day
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              A platform built out of necessity, designed to strip away the complexity of job applications and help people present their true value.
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
                    Career2Day started not in a corporate boardroom, but in a university classroom. As a second-year Artificial Intelligence student, our founder noticed a recurring problem among classmates and graduating seniors: talented, hardworking students were struggling to pass the initial screening round for jobs and internships.
                  </p>
                  <p>
                    The issue wasn't their lack of skills—it was how they presented them. Complex, unformatted documents, generic objective statements, and messy layouts were hiding their actual capabilities. Existing CV builders were either too expensive, completely covered in paywalls, or forced users into rigid formats that didn't work for modern tech roles.
                  </p>
                  <p>
                    That frustration led to the creation of Career2Day. What began as a simple side project to help peers generate clean, professional resumes quickly evolved into a dedicated platform. By combining a straightforward interface with industry-standard templates, Career2Day ensures that your skills are the focal point of your application, not the formatting of your document.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-border">
                <Card className="bg-muted border-none shadow-none">
                  <CardContent className="p-8">
                    <Heart className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Help professionals build better CVs. We want to remove the friction from the job application process so you can focus on preparing for your interviews.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-muted border-none shadow-none">
                  <CardContent className="p-8">
                    <Lightbulb className="w-8 h-8 text-amber-500 mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Make CV building accessible to everyone. Financial constraints shouldn't prevent you from presenting yourself professionally to the world.
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
