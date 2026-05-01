
import React, { useEffect, useRef, useState } from 'react';
import { TemplatesConfig } from '@/components/cv-templates/CVTemplates.jsx';
import { Badge } from '@/components/ui/badge';
import { Crown } from 'lucide-react';

const sampleCVData = {
  personalInfo: {
    fullName: 'John Doe',
    jobTitle: 'Senior Software Engineer',
    email: 'john@example.com',
    phone: '+1-234-567-8900',
    location: 'San Francisco, CA'
  },
  professionalSummary: 'Results-driven Senior Software Engineer with 8+ years of experience designing and implementing scalable web applications. Proven track record of leading cross-functional teams to deliver high-impact solutions that drive business growth. Passionate about clean code, performance optimization, and mentoring junior developers.',
  experience: [
    {
      company: 'TechNova Solutions',
      position: 'Lead Developer',
      duration: 'Jan 2021 - Present',
      description: '• Architected and deployed a microservices-based platform serving 2M+ daily active users.\n• Reduced system latency by 40% through aggressive caching and database query optimization.\n• Mentored a team of 6 engineers, establishing best practices for code reviews and CI/CD pipelines.'
    },
    {
      company: 'Global Systems Inc.',
      position: 'Software Engineer',
      duration: 'Mar 2018 - Dec 2020',
      description: '• Developed responsive frontend interfaces using React and Redux, improving user retention by 25%.\n• Integrated third-party payment gateways (Stripe, PayPal) handling $5M+ in monthly transactions.\n• Collaborated with UX designers to implement accessible and intuitive user experiences.'
    },
    {
      company: 'Startup Hub',
      position: 'Junior Web Developer',
      duration: 'Jun 2016 - Feb 2018',
      description: '• Built and maintained RESTful APIs using Node.js and Express.\n• Automated testing processes, increasing test coverage from 40% to 85%.\n• Participated in daily stand-ups and agile sprint planning sessions.'
    }
  ],
  education: [
    {
      school: 'University of California, Berkeley',
      degree: 'Master of Science',
      field: 'Computer Science',
      year: '2014 - 2016'
    },
    {
      school: 'State University',
      degree: 'Bachelor of Science',
      field: 'Software Engineering',
      year: '2010 - 2014'
    }
  ],
  skills: [
    { name: 'JavaScript (ES6+)', level: 'Expert' },
    { name: 'React.js', level: 'Expert' },
    { name: 'Node.js', level: 'Advanced' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'GraphQL', level: 'Advanced' },
    { name: 'Docker', level: 'Intermediate' },
    { name: 'AWS', level: 'Intermediate' },
    { name: 'PostgreSQL', level: 'Advanced' },
    { name: 'MongoDB', level: 'Advanced' },
    { name: 'Redis', level: 'Intermediate' },
    { name: 'CI/CD', level: 'Advanced' },
    { name: 'Agile/Scrum', level: 'Expert' },
    { name: 'System Design', level: 'Advanced' }
  ],
  certifications: [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2022'
    },
    {
      name: 'Professional Scrum Master I',
      issuer: 'Scrum.org',
      year: '2020'
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      year: '2019'
    }
  ],
  languages: [
    { name: 'English', proficiency: 'Native' },
    { name: 'Spanish', proficiency: 'Conversational' }
  ]
};

export default function CVTemplatePreviewRenderer({ templateId, templateName, category, isPremium }) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(0.5);

  const templateConfig = TemplatesConfig.find(t => t.id === templateId) || TemplatesConfig[0];
  const TemplateComponent = templateConfig.component;

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        // A4 width is 210mm, which is roughly 794px at 96dpi
        const a4WidthPx = 794;
        // Leave a little padding
        const targetScale = (containerWidth - 32) / a4WidthPx;
        setScale(Math.min(targetScale, 1)); // Don't scale up beyond 100%
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div className="w-full flex flex-col h-full">
      <div className="flex justify-between items-center mb-4 px-2">
        <div>
          <h3 className="text-xl font-bold text-foreground">{templateName}</h3>
          <p className="text-sm text-muted-foreground">{category} Template</p>
        </div>
        {isPremium ? (
          <Badge className="bg-amber-500 hover:bg-amber-600 text-white font-bold flex items-center gap-1">
            <Crown className="w-3 h-3" /> Premium
          </Badge>
        ) : (
          <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold">
            Free
          </Badge>
        )}
      </div>
      
      <div 
        ref={containerRef}
        className="cv-preview-wrapper flex-1 py-8"
        style={{ height: `${(1123 * scale) + 64}px` }} // A4 height is ~1123px
      >
        <div 
          className="cv-preview-container pointer-events-none select-none shadow-2xl"
          style={{ transform: `scale(${scale})` }}
        >
          <TemplateComponent cvData={sampleCVData} />
        </div>
      </div>
    </div>
  );
}
