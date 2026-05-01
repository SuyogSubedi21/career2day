
import React, { useMemo } from 'react';
import { TemplatesConfig } from '@/components/cv-builder/CVTemplates.jsx';
import { Skeleton } from '@/components/ui/skeleton';

const demoData = {
  personalInfo: {
    fullName: 'John Doe',
    jobTitle: 'Senior Software Engineer',
    email: 'john@example.com',
    phone: '+1-234-567-8900',
    location: 'San Francisco, CA'
  },
  professionalSummary: 'Experienced software engineer with 5+ years in full-stack development. Skilled in React, Node.js, and cloud technologies. Passionate about building scalable applications.',
  experience: [
    {
      company: 'Tech Corp',
      position: 'Senior Software Engineer',
      duration: '2021 - Present',
      description: '• Led development of microservices architecture.\n• Mentored junior developers.\n• Improved system performance by 40%.'
    }
  ],
  education: [
    {
      school: 'University of California',
      degree: 'BS Computer Science',
      field: '',
      year: '2018'
    }
  ],
  skills: [
    { name: 'JavaScript', level: 'Expert' }, { name: 'React', level: 'Advanced' }, { name: 'Node.js', level: 'Advanced' }
  ],
  projects: [
    { name: 'E-commerce Platform', duration: '2022', description: 'Built a scalable e-commerce platform using React and Node.js.' }
  ],
  certifications: [
    { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '2021' }
  ],
  languages: [
    { name: 'English', proficiency: 'Native' }, { name: 'Spanish', proficiency: 'Intermediate' }
  ],
  volunteer: [
    { role: 'Mentor', organization: 'Code for Good', duration: '2020 - 2021', description: 'Mentored aspiring developers in web technologies.' }
  ]
};

const renderField = (userValue, demoValue) => {
  if (userValue && userValue.trim() !== '') return userValue;
  return <span style={{ color: '#9ca3af', opacity: 0.8 }}>{demoValue}</span>;
};

export default function CVPreviewRenderer({ cvData, templateId, zoom = 100 }) {
  const templateConfig = useMemo(() => {
    return TemplatesConfig.find(t => t.id === templateId) || TemplatesConfig[0];
  }, [templateId]);
  
  const TemplateComponent = templateConfig.component;
  const scale = zoom / 100;

  // Memoize the safe data transformation to prevent heavy recalculations on every render
  const safeData = useMemo(() => {
    if (!cvData) return demoData;

    return {
      photo_preview: cvData.photo_preview,
      personalInfo: {
        fullName: renderField(cvData?.personalInfo?.fullName, demoData.personalInfo.fullName),
        jobTitle: renderField(cvData?.personalInfo?.jobTitle, demoData.personalInfo.jobTitle),
        email: renderField(cvData?.personalInfo?.email, demoData.personalInfo.email),
        phone: renderField(cvData?.personalInfo?.phone, demoData.personalInfo.phone),
        location: renderField(cvData?.personalInfo?.location, demoData.personalInfo.location),
      },
      professionalSummary: renderField(cvData?.professionalSummary, demoData.professionalSummary),
      
      experience: cvData?.experience?.length > 0 
        ? cvData.experience.map(exp => ({
            company: renderField(exp.company, 'Company Name'),
            position: renderField(exp.position, 'Position'),
            duration: renderField(exp.duration, 'Duration'),
            description: renderField(exp.description, 'Description of responsibilities and achievements...')
          }))
        : demoData.experience.map(exp => ({
            company: renderField('', exp.company),
            position: renderField('', exp.position),
            duration: renderField('', exp.duration),
            description: renderField('', exp.description)
          })),
          
      education: cvData?.education?.length > 0
        ? cvData.education.map(edu => ({
            school: renderField(edu.school, 'School Name'),
            degree: renderField(edu.degree, 'Degree'),
            field: renderField(edu.field, 'Field of Study'),
            year: renderField(edu.year, 'Year')
          }))
        : demoData.education.map(edu => ({
            school: renderField('', edu.school),
            degree: renderField('', edu.degree),
            field: renderField('', edu.field),
            year: renderField('', edu.year)
          })),
          
      skills: cvData?.skills?.length > 0
        ? cvData.skills.map(skill => ({
            name: renderField(skill.name, 'Skill'),
            level: renderField(skill.level, '')
          }))
        : demoData.skills.map(skill => ({
            name: renderField('', skill.name),
            level: renderField('', skill.level)
          })),
          
      projects: cvData?.projects?.length > 0
        ? cvData.projects.map(proj => ({
            name: renderField(proj.name, 'Project Name'),
            duration: renderField(proj.duration, 'Duration'),
            description: renderField(proj.description, 'Project description...')
          }))
        : demoData.projects.map(proj => ({
            name: renderField('', proj.name),
            duration: renderField('', proj.duration),
            description: renderField('', proj.description)
          })),

      certifications: cvData?.certifications?.length > 0
        ? cvData.certifications.map(cert => ({
            name: renderField(cert.name, 'Certification Name'),
            issuer: renderField(cert.issuer, 'Issuing Organization'),
            year: renderField(cert.year, 'Year')
          }))
        : demoData.certifications.map(cert => ({
            name: renderField('', cert.name),
            issuer: renderField('', cert.issuer),
            year: renderField('', cert.year)
          })),

      languages: cvData?.languages?.length > 0
        ? cvData.languages.map(lang => ({
            name: renderField(lang.name, 'Language'),
            proficiency: renderField(lang.proficiency, 'Proficiency')
          }))
        : demoData.languages.map(lang => ({
            name: renderField('', lang.name),
            proficiency: renderField('', lang.proficiency)
          })),

      volunteer: cvData?.volunteer?.length > 0
        ? cvData.volunteer.map(vol => ({
            role: renderField(vol.role, 'Role'),
            organization: renderField(vol.organization, 'Organization'),
            duration: renderField(vol.duration, 'Duration'),
            description: renderField(vol.description, 'Description...')
          }))
        : demoData.volunteer.map(vol => ({
            role: renderField('', vol.role),
            organization: renderField('', vol.organization),
            duration: renderField('', vol.duration),
            description: renderField('', vol.description)
          }))
    };
  }, [cvData]);

  if (!TemplateComponent) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-4 bg-secondary/20">
        <Skeleton className="w-[210mm] h-[297mm] shadow-xl" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-[50vh] p-4 bg-secondary/20 overflow-hidden">
      <div 
        style={{ 
          width: `${210 * scale}mm`, 
          height: `${297 * scale}mm`,
          transition: 'width 0.2s ease-out, height 0.2s ease-out'
        }}
      >
        <div 
          className="cv-preview-container pointer-events-none select-none bg-white shadow-2xl"
          style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }}
        >
          <TemplateComponent cvData={safeData} />
        </div>
      </div>
    </div>
  );
}
