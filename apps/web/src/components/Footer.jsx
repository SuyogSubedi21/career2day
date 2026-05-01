
import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Twitter, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8 mt-auto shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center text-primary-foreground">
                <Briefcase className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">Career2Day</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Empowering the next generation of tech leaders with premium roadmaps, tools, and resources.
            </p>
            <div className="flex items-center gap-4 text-muted-foreground">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="mailto:contact@career2day.com" aria-label="Email" className="hover:text-primary transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Platform</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/practice" className="hover:text-primary transition-colors">Interview Practice</Link></li>
              <li><Link to="/cv-builder" className="hover:text-primary transition-colors">CV Builder</Link></li>
              <li><Link to="/my-cvs" className="hover:text-primary transition-colors">My CVs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Career2Day. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built by <span className="font-medium text-foreground">Suyog Subedi</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
