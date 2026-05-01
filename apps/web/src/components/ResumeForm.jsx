
import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Plus, Trash2, AlertCircle, GripVertical } from 'lucide-react';

export function ResumeForm({ data, onChange }) {
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    if (!email) return true;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    if (!phone) return true;
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone);
  };

  const handleFieldChange = (field, value) => {
    let newErrors = { ...errors };
    
    if (field === 'email' && !validateEmail(value)) {
      newErrors.email = 'Invalid email format';
    } else if (field === 'email') {
      delete newErrors.email;
    }

    if (field === 'phone' && !validatePhone(value)) {
      newErrors.phone = 'Invalid phone format';
    } else if (field === 'phone') {
      delete newErrors.phone;
    }

    setErrors(newErrors);
    onChange({ ...data, [field]: value });
  };

  const handleArrayAdd = (field, defaultObj) => {
    const newArray = [...(data[field] || []), { id: crypto.randomUUID(), ...defaultObj }];
    onChange({ ...data, [field]: newArray });
  };

  const handleArrayRemove = (field, id) => {
    const newArray = (data[field] || []).filter(item => item.id !== id);
    onChange({ ...data, [field]: newArray });
  };

  const handleArrayChange = (field, id, key, value) => {
    const newArray = (data[field] || []).map(item => 
      item.id === id ? { ...item, [key]: value } : item
    );
    onChange({ ...data, [field]: newArray });
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight mb-1">Resume Details</h2>
        <p className="text-sm text-muted-foreground">Fill in your information to generate the preview.</p>
      </div>

      <Accordion type="multiple" defaultValue={['personal', 'summary', 'experience', 'education', 'skills', 'certifications']} className="space-y-4">
        
        {/* Personal Info */}
        <AccordionItem value="personal" className="bg-card rounded-xl px-5 border shadow-sm">
          <AccordionTrigger className="hover:no-underline text-base font-semibold py-4">
            Personal Information
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pb-6 pt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" value={data.fullName || ''} onChange={(e) => handleFieldChange('fullName', e.target.value)} placeholder="e.g. Maya Chen" className="bg-background" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Professional Title</Label>
                <Input id="jobTitle" value={data.jobTitle || ''} onChange={(e) => handleFieldChange('jobTitle', e.target.value)} placeholder="e.g. Senior Frontend Engineer" className="bg-background" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={data.email || ''} onChange={(e) => handleFieldChange('email', e.target.value)} placeholder="e.g. maya@example.com" className={`bg-background ${errors.email ? 'border-destructive focus-visible:ring-destructive' : ''}`} />
                {errors.email && <p className="text-xs text-destructive flex items-center mt-1"><AlertCircle className="w-3 h-3 mr-1"/>{errors.email}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" value={data.phone || ''} onChange={(e) => handleFieldChange('phone', e.target.value)} placeholder="e.g. (555) 123-4567" className={`bg-background ${errors.phone ? 'border-destructive focus-visible:ring-destructive' : ''}`} />
                {errors.phone && <p className="text-xs text-destructive flex items-center mt-1"><AlertCircle className="w-3 h-3 mr-1"/>{errors.phone}</p>}
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" value={data.location || ''} onChange={(e) => handleFieldChange('location', e.target.value)} placeholder="e.g. San Francisco, CA" className="bg-background" />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Summary */}
        <AccordionItem value="summary" className="bg-card rounded-xl px-5 border shadow-sm">
          <AccordionTrigger className="hover:no-underline text-base font-semibold py-4">
            Professional Summary
          </AccordionTrigger>
          <AccordionContent className="pb-6 pt-2">
            <div className="space-y-2">
              <Label htmlFor="summary" className="sr-only">Summary</Label>
              <Textarea 
                id="summary" 
                className="min-h-[140px] bg-background resize-y" 
                value={data.summary || ''} 
                onChange={(e) => handleFieldChange('summary', e.target.value)} 
                placeholder="Results-driven engineer with 5+ years of experience building scalable web applications. Proven track record of improving performance and leading cross-functional teams..."
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Work Experience */}
        <AccordionItem value="experience" className="bg-card rounded-xl px-5 border shadow-sm">
          <AccordionTrigger className="hover:no-underline text-base font-semibold py-4">
            Work Experience
          </AccordionTrigger>
          <AccordionContent className="space-y-6 pb-6 pt-2">
            {(data.workExperience || []).map((exp, index) => (
              <div key={exp.id} className="p-5 rounded-xl border bg-muted/30 space-y-5 relative group transition-all hover:border-primary/30">
                <div className="absolute top-3 right-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:bg-destructive/10" onClick={() => handleArrayRemove('workExperience', exp.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pr-8">
                  <div className="space-y-2">
                    <Label>Job Title</Label>
                    <Input value={exp.title || ''} onChange={(e) => handleArrayChange('workExperience', exp.id, 'title', e.target.value)} placeholder="e.g. Software Engineer" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label>Company</Label>
                    <Input value={exp.company || ''} onChange={(e) => handleArrayChange('workExperience', exp.id, 'company', e.target.value)} placeholder="e.g. TechCorp" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label>Start Date</Label>
                    <Input value={exp.startDate || ''} onChange={(e) => handleArrayChange('workExperience', exp.id, 'startDate', e.target.value)} placeholder="e.g. Jan 2020" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label>End Date</Label>
                    <Input value={exp.endDate || ''} onChange={(e) => handleArrayChange('workExperience', exp.id, 'endDate', e.target.value)} placeholder="e.g. Present" className="bg-background" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label>Description</Label>
                    <Textarea className="min-h-[120px] bg-background" value={exp.description || ''} onChange={(e) => handleArrayChange('workExperience', exp.id, 'description', e.target.value)} placeholder="• Developed core features using React...&#10;• Improved load time by 40%..." />
                  </div>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full border-dashed py-6 text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-colors" onClick={() => handleArrayAdd('workExperience', { title: '', company: '', startDate: '', endDate: '', description: '' })}>
              <Plus className="w-5 h-5 mr-2" /> Add Experience
            </Button>
          </AccordionContent>
        </AccordionItem>

        {/* Education */}
        <AccordionItem value="education" className="bg-card rounded-xl px-5 border shadow-sm">
          <AccordionTrigger className="hover:no-underline text-base font-semibold py-4">
            Education
          </AccordionTrigger>
          <AccordionContent className="space-y-6 pb-6 pt-2">
            {(data.education || []).map((edu) => (
              <div key={edu.id} className="p-5 rounded-xl border bg-muted/30 space-y-5 relative group transition-all hover:border-primary/30">
                <div className="absolute top-3 right-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:bg-destructive/10" onClick={() => handleArrayRemove('education', edu.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pr-8">
                  <div className="space-y-2 md:col-span-2">
                    <Label>Degree / Field of Study</Label>
                    <Input value={edu.degree || ''} onChange={(e) => handleArrayChange('education', edu.id, 'degree', e.target.value)} placeholder="e.g. B.S. Computer Science" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label>School / University</Label>
                    <Input value={edu.school || ''} onChange={(e) => handleArrayChange('education', edu.id, 'school', e.target.value)} placeholder="e.g. University of Technology" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label>Graduation Date</Label>
                    <Input value={edu.year || ''} onChange={(e) => handleArrayChange('education', edu.id, 'year', e.target.value)} placeholder="e.g. May 2020" className="bg-background" />
                  </div>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full border-dashed py-6 text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-colors" onClick={() => handleArrayAdd('education', { degree: '', school: '', year: '' })}>
              <Plus className="w-5 h-5 mr-2" /> Add Education
            </Button>
          </AccordionContent>
        </AccordionItem>

        {/* Skills */}
        <AccordionItem value="skills" className="bg-card rounded-xl px-5 border shadow-sm">
          <AccordionTrigger className="hover:no-underline text-base font-semibold py-4">
            Skills
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pb-6 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(data.skills || []).map((skill) => (
                <div key={skill.id} className="flex gap-2 items-center bg-muted/30 p-2 rounded-lg border group hover:border-primary/30 transition-colors">
                  <GripVertical className="w-4 h-4 text-muted-foreground/50 cursor-grab" />
                  <Input className="flex-1 h-8 bg-background border-none shadow-none focus-visible:ring-1 px-2" value={skill.name || ''} onChange={(e) => handleArrayChange('skills', skill.id, 'name', e.target.value)} placeholder="e.g. React.js" />
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 shrink-0" onClick={() => handleArrayRemove('skills', skill.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full border-dashed py-6 mt-2 text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-colors" onClick={() => handleArrayAdd('skills', { name: '' })}>
              <Plus className="w-5 h-5 mr-2" /> Add Skill
            </Button>
          </AccordionContent>
        </AccordionItem>

        {/* Certifications */}
        <AccordionItem value="certifications" className="bg-card rounded-xl px-5 border shadow-sm">
          <AccordionTrigger className="hover:no-underline text-base font-semibold py-4">
            Certifications
          </AccordionTrigger>
          <AccordionContent className="space-y-6 pb-6 pt-2">
            {(data.certifications || []).map((cert) => (
              <div key={cert.id} className="p-5 rounded-xl border bg-muted/30 space-y-5 relative group transition-all hover:border-primary/30">
                <div className="absolute top-3 right-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:bg-destructive/10" onClick={() => handleArrayRemove('certifications', cert.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pr-8">
                  <div className="space-y-2 md:col-span-2">
                    <Label>Certification Name</Label>
                    <Input value={cert.name || ''} onChange={(e) => handleArrayChange('certifications', cert.id, 'name', e.target.value)} placeholder="e.g. AWS Solutions Architect" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label>Issuer</Label>
                    <Input value={cert.issuer || ''} onChange={(e) => handleArrayChange('certifications', cert.id, 'issuer', e.target.value)} placeholder="e.g. Amazon Web Services" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label>Date</Label>
                    <Input value={cert.date || ''} onChange={(e) => handleArrayChange('certifications', cert.id, 'date', e.target.value)} placeholder="e.g. Aug 2023" className="bg-background" />
                  </div>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full border-dashed py-6 text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-colors" onClick={() => handleArrayAdd('certifications', { name: '', issuer: '', date: '' })}>
              <Plus className="w-5 h-5 mr-2" /> Add Certification
            </Button>
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </div>
  );
}
