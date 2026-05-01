
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Zap, Users, Heart, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VALUES = [
  {
    title: 'Empowerment',
    description: 'We provide the tools and knowledge necessary for individuals to take control of their career trajectories.',
    icon: Zap,
  },
  {
    title: 'Integrity',
    description: 'We believe in transparent, honest guidance that puts our users\' best interests first.',
    icon: Shield,
  },
  {
    title: 'Innovation',
    description: 'We continuously evolve our platform to reflect the latest industry trends and hiring practices.',
    icon: LightbulbIcon,
  },
  {
    title: 'Community',
    description: 'We foster a supportive environment where professionals can learn, share, and grow together.',
    icon: Heart,
  }
];

function LightbulbIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

const TEAM = [
  { name: 'Maya Chen', role: 'Founder & CEO', initials: 'MC', color: 'bg-blue-100 text-blue-700' },
  { name: 'Raj Patel', role: 'Head of Product', initials: 'RP', color: 'bg-emerald-100 text-emerald-700' },
  { name: 'Lucia Torres', role: 'Lead Career Coach', initials: 'LT', color: 'bg-purple-100 text-purple-700' },
  { name: 'Kwame Asante', role: 'Engineering Lead', initials: 'KA', color: 'bg-amber-100 text-amber-700' },
  { name: 'Anika Bergström', role: 'UX Director', initials: 'AB', color: 'bg-rose-100 text-rose-700' },
  { name: 'David Kim', role: 'Content Strategist', initials: 'DK', color: 'bg-indigo-100 text-indigo-700' },
];

const BENEFITS = [
  'Data-driven career roadmaps tailored to your goals',
  'Industry-vetted resume templates that pass ATS systems',
  'Real-world interview questions with expert explanations',
  'Continuous updates reflecting current market demands'
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <Helmet>
        <title>{`About Us | CareerFlow`}</title>
        <meta name="description" content="Learn about CareerFlow's mission to empower professionals with the tools and knowledge to build standout careers." />
      </Helmet>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
          style={{ letterSpacing: '-0.02em' }}
        >
          About CareerFlow
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          We are on a mission to demystify the job search process and equip every professional with the tools they need to succeed.
        </motion.p>
      </section>

      {/* Mission & Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                CareerFlow began with a simple observation: talented individuals were missing out on great opportunities simply because they didn't know how to navigate the modern hiring landscape.
              </p>
              <p>
                Founded by a team of former recruiters, hiring managers, and engineers, we realized that the gap between a candidate's actual skills and their ability to showcase them was widening. Applicant Tracking Systems (ATS), complex interview rounds, and vague job descriptions made the process overwhelming.
              </p>
              <p>
                We built CareerFlow to bridge that gap. By combining data-driven insights with expert career coaching principles, we've created a platform that guides you from building your first resume to negotiating your final offer.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-muted relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop" 
                alt="Team collaborating in a modern office" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary rounded-2xl -z-10" />
          </div>
        </div>
      </section>

      {/* Values (Bento Grid) */}
      <section className="bg-secondary py-20 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-secondary-foreground">Our Core Values</h2>
            <p className="text-secondary-foreground/80 max-w-2xl mx-auto text-lg">
              The principles that guide our product development and how we support our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="bg-card text-card-foreground p-8 rounded-2xl shadow-sm border border-border/50 flex flex-col h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mt-auto">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-8">Why Choose CareerFlow?</h2>
            <div className="space-y-6">
              {BENEFITS.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-lg text-foreground/90">{benefit}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/careers">
                  Start Building Your Career <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 mt-8">
              <div className="bg-muted rounded-2xl p-6 aspect-square flex flex-col justify-center items-center text-center">
                <span className="text-4xl font-bold text-primary mb-2">50k+</span>
                <span className="text-sm font-medium text-muted-foreground">Resumes Created</span>
              </div>
              <div className="bg-card border border-border shadow-sm rounded-2xl p-6 aspect-square flex flex-col justify-center items-center text-center">
                <span className="text-4xl font-bold text-foreground mb-2">92%</span>
                <span className="text-sm font-medium text-muted-foreground">Interview Success Rate</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-card border border-border shadow-sm rounded-2xl p-6 aspect-square flex flex-col justify-center items-center text-center">
                <span className="text-4xl font-bold text-foreground mb-2">200+</span>
                <span className="text-sm font-medium text-muted-foreground">Career Roadmaps</span>
              </div>
              <div className="bg-primary rounded-2xl p-6 aspect-square flex flex-col justify-center items-center text-center text-primary-foreground">
                <span className="text-4xl font-bold mb-2">24/7</span>
                <span className="text-sm font-medium opacity-90">Platform Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-muted/30 py-24 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Meet the Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              The industry experts and technologists building the future of career development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map((member, idx) => (
              <div key={idx} className="bg-card p-6 rounded-2xl border border-border shadow-sm flex items-center gap-4">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-xl font-bold shrink-0 ${member.color}`}>
                  {member.initials}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
