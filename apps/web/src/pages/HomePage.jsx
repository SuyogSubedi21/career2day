
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, FileText, CheckCircle2, Star, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext.jsx';
import SEOHead from '@/components/SEOHead.jsx';

export default function HomePage() {
  const { isAuthenticated } = useAuth();

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Career2Day",
    "url": "https://career2day.com"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Career2Day - Master Your IT Career | Interview Prep & CV Builder"
        description="The ultimate all-in-one platform for IT professionals. Discover career roadmaps, practice interviews, and build ATS-friendly CVs."
        schema={schema}
      />

      <section 
        className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden min-h-[90dvh] flex items-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1630514969818-94aefc42ec47")', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        <div className="absolute inset-0 bg-background/90 backdrop-blur-[2px] z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-secondary/80 backdrop-blur-sm text-secondary-foreground font-semibold text-sm mb-8 border border-border/50 shadow-sm">
              <Star className="w-4 h-4 mr-2 text-amber-500 fill-current" /> Over 10,000 professionals hired
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-balance text-foreground leading-[1.1]">
              Master Your IT Career <br className="hidden md:block" />
              <span className="text-primary">End to End</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 text-balance leading-relaxed">
              From choosing a roadmap to building your CV and passing the technical interview. All the tools you need to secure your next high-paying role.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
              {isAuthenticated ? (
                <Button asChild size="lg" className="rounded-xl px-10 h-16 text-lg shadow-xl shadow-primary/20 font-bold transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30 active:scale-[0.98] w-full sm:w-auto">
                  <Link to="/dashboard">Go to Dashboard <ArrowRight className="w-5 h-5 ml-2" /></Link>
                </Button>
              ) : (
                <Button asChild size="lg" className="rounded-xl px-10 h-16 text-lg shadow-xl shadow-primary/20 font-bold transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30 active:scale-[0.98] w-full sm:w-auto">
                  <Link to="/signup">Get Started Free <ArrowRight className="w-5 h-5 ml-2" /></Link>
                </Button>
              )}
              <Button asChild size="lg" variant="outline" className="rounded-xl px-10 h-16 text-lg font-bold border-2 border-border hover:bg-muted text-foreground transition-all hover:-translate-y-1 active:scale-[0.98] w-full sm:w-auto bg-background/50 backdrop-blur-sm">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background border-t border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 shadow-inner">
                <FileText className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight text-balance">ATS-Friendly CV Builder</h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Create a stunning, professional resume in minutes. Our templates are designed to pass Applicant Tracking Systems and catch recruiters' attention.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center text-foreground font-medium text-lg"><CheckCircle2 className="w-6 h-6 text-primary mr-4 shrink-0" /> Live preview editor</li>
                <li className="flex items-center text-foreground font-medium text-lg"><CheckCircle2 className="w-6 h-6 text-primary mr-4 shrink-0" /> Premium layouts</li>
                <li className="flex items-center text-foreground font-medium text-lg"><CheckCircle2 className="w-6 h-6 text-primary mr-4 shrink-0" /> PDF export</li>
              </ul>
              <Button asChild variant="outline" size="lg" className="font-bold border-2 border-border shadow-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all h-14 px-8 rounded-xl">
                <Link to="/cv-builder">Build CV Now</Link>
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <Card className="bg-muted/50 rounded-3xl aspect-square md:aspect-video lg:aspect-square xl:aspect-video border-2 border-border flex items-center justify-center relative overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1586314265219-192da32be7eb" 
                  alt="Professional person working on resume at desk with laptop" 
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </Card>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-muted/50 rounded-3xl aspect-square md:aspect-video lg:aspect-square xl:aspect-video border-2 border-border flex items-center justify-center relative overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1459499362902-55a20553e082" 
                  alt="Professional interview and hiring process" 
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </Card>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8 shadow-inner">
                <BrainCircuit className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight text-balance">Interview Practice</h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Don't freeze when it matters. Practice real technical and behavioral questions curated by hiring managers at top tech firms.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center text-foreground font-medium text-lg"><CheckCircle2 className="w-6 h-6 text-accent mr-4 shrink-0" /> Categorized by difficulty</li>
                <li className="flex items-center text-foreground font-medium text-lg"><CheckCircle2 className="w-6 h-6 text-accent mr-4 shrink-0" /> Suggested answers & key points</li>
                <li className="flex items-center text-foreground font-medium text-lg"><CheckCircle2 className="w-6 h-6 text-accent mr-4 shrink-0" /> Track your progress</li>
              </ul>
              <Button asChild variant="outline" size="lg" className="font-bold border-2 border-border shadow-sm hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all h-14 px-8 rounded-xl">
                <Link to="/practice">Start Practicing</Link>
              </Button>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Blog Highlight Section */}
      <section className="py-24 bg-muted/30 border-t border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 text-primary mb-6 shadow-inner">
                <BookOpen className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground text-balance">Career Insights & Resources</h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Stay ahead of the curve. Read our latest articles on industry trends, interview strategies, and salary negotiations.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Button asChild size="lg" className="rounded-xl px-8 h-14 text-lg font-bold shadow-md transition-all hover:-translate-y-1">
                <Link to="/blog">Visit the Blog <ArrowRight className="w-5 h-5 ml-2" /></Link>
              </Button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Featured Blog Card Static Preview */}
            <Card className="col-span-1 md:col-span-2 group overflow-hidden rounded-2xl border-border bg-card shadow-md hover:shadow-xl transition-all duration-300">
              <Link to="/blog" className="flex flex-col sm:flex-row h-full">
                <div className="sm:w-1/2 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1590658362485-c917555916a9" 
                    alt="Career success and growth in modern workplace" 
                    className="w-full h-full object-cover min-h-[250px] transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    Career Growth
                  </div>
                </div>
                <div className="sm:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                    The Ultimate Guide to Negotiating Your Tech Salary in 2026
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                    Learn the exact frameworks and psychological triggers top executives use to maximize their compensation packages during the offer stage.
                  </p>
                  <div className="mt-auto flex items-center text-sm font-medium text-primary">
                    Read Article <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </Card>

            {/* Secondary Blog Card Static Preview */}
            <Card className="col-span-1 group overflow-hidden rounded-2xl border-border bg-card shadow-md hover:shadow-xl transition-all duration-300">
              <Link to="/blog" className="flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" 
                    alt="Job search and career planning" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    Interview
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    5 System Design Patterns Every Engineer Must Know
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm line-clamp-2 leading-relaxed">
                    Mastering these scalable architecture patterns will dramatically improve your technical interview performance.
                  </p>
                  <div className="mt-auto flex items-center text-sm font-medium text-primary">
                    Read Article <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-card border-t border-border text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold text-card-foreground mb-8 tracking-tight text-balance">Ready to elevate your career?</h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-balance">Join today and get access to the best tools in the industry to land your dream job.</p>
          <Button asChild size="lg" className="h-16 px-12 text-xl font-bold shadow-xl shadow-primary/20 rounded-xl transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30 active:scale-[0.98]">
            <Link to="/signup">Create Your Free Account</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
