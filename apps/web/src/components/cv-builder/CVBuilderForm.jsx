
import React, { useCallback, useMemo } from 'react';
import { Plus, Trash2, ChevronUp, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PhotoUploadSection from './PhotoUploadSection.jsx';
import { getTemplateById } from '@/data/cvTemplatesData.js';

export default function CVBuilderForm({ cvData, setCvData, templateId }) {
  
  const templateConfig = useMemo(() => getTemplateById(templateId || 'ModernClean'), [templateId]);
  const hasPhotoSupport = templateConfig?.features?.hasPhotoPlaceholder;

  const handlePersonalInfoChange = useCallback((e) => {
    const { name, value } = e.target;
    setCvData(prev => ({
      ...prev,
      personalInfo: {
        ...(prev.personalInfo || {}),
        [name]: value
      }
    }));
  }, [setCvData]);

  const handleSummaryChange = useCallback((e) => {
    const { value } = e.target;
    setCvData(prev => ({ ...prev, professionalSummary: value }));
  }, [setCvData]);

  const handleArrayChange = useCallback((section, index, field, value) => {
    setCvData(prev => {
      const newArray = [...(prev[section] || [])];
      newArray[index] = { ...newArray[index], [field]: value };
      return { ...prev, [section]: newArray };
    });
  }, [setCvData]);

  const addArrayItem = useCallback((section, emptyItem) => {
    setCvData(prev => ({
      ...prev,
      [section]: [...(prev[section] || []), emptyItem]
    }));
  }, [setCvData]);

  const removeArrayItem = useCallback((section, index) => {
    setCvData(prev => ({
      ...prev,
      [section]: (prev[section] || []).filter((_, i) => i !== index)
    }));
  }, [setCvData]);

  const moveItem = useCallback((section, index, direction) => {
    setCvData(prev => {
      const newArray = [...(prev[section] || [])];
      if (direction === 'up' && index > 0) {
        [newArray[index], newArray[index - 1]] = [newArray[index - 1], newArray[index]];
      } else if (direction === 'down' && index < newArray.length - 1) {
        [newArray[index], newArray[index + 1]] = [newArray[index + 1], newArray[index]];
      }
      return { ...prev, [section]: newArray };
    });
  }, [setCvData]);

  const personalInfo = cvData?.personalInfo || {};

  return (
    <Tabs defaultValue="personal" className="w-full">
      <TabsList className="w-full flex overflow-x-auto hide-scrollbar bg-muted border border-border p-1 mb-6">
        <TabsTrigger value="personal" className="flex-1 min-w-fit text-xs">Personal</TabsTrigger>
        {hasPhotoSupport && <TabsTrigger value="photo" className="flex-1 min-w-fit text-xs">Photo</TabsTrigger>}
        <TabsTrigger value="summary" className="flex-1 min-w-fit text-xs">Summary</TabsTrigger>
        <TabsTrigger value="experience" className="flex-1 min-w-fit text-xs">Experience</TabsTrigger>
        <TabsTrigger value="education" className="flex-1 min-w-fit text-xs">Education</TabsTrigger>
        <TabsTrigger value="skills" className="flex-1 min-w-fit text-xs">Skills</TabsTrigger>
        <TabsTrigger value="projects" className="flex-1 min-w-fit text-xs">Projects</TabsTrigger>
        <TabsTrigger value="more" className="flex-1 min-w-fit text-xs">More</TabsTrigger>
      </TabsList>

      <TabsContent value="personal" className="space-y-4">
        <div className="space-y-1.5">
          <Label className="text-muted-foreground text-xs uppercase font-bold">Full Name</Label>
          <Input name="fullName" value={personalInfo.fullName || ''} onChange={handlePersonalInfoChange} placeholder="John Doe" className="bg-background text-foreground placeholder:text-muted-foreground/50" />
        </div>
        <div className="space-y-1.5">
          <Label className="text-muted-foreground text-xs uppercase font-bold">Job Title</Label>
          <Input name="jobTitle" value={personalInfo.jobTitle || ''} onChange={handlePersonalInfoChange} placeholder="Senior Software Engineer" className="bg-background text-foreground placeholder:text-muted-foreground/50" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label className="text-muted-foreground text-xs uppercase font-bold">Email</Label>
            <Input name="email" type="email" value={personalInfo.email || ''} onChange={handlePersonalInfoChange} placeholder="john@example.com" className="bg-background text-foreground placeholder:text-muted-foreground/50" />
          </div>
          <div className="space-y-1.5">
            <Label className="text-muted-foreground text-xs uppercase font-bold">Phone</Label>
            <Input name="phone" value={personalInfo.phone || ''} onChange={handlePersonalInfoChange} placeholder="+1-234-567-8900" className="bg-background text-foreground placeholder:text-muted-foreground/50" />
          </div>
        </div>
        <div className="space-y-1.5">
          <Label className="text-muted-foreground text-xs uppercase font-bold">Location</Label>
          <Input name="location" value={personalInfo.location || ''} onChange={handlePersonalInfoChange} placeholder="San Francisco, CA" className="bg-background text-foreground placeholder:text-muted-foreground/50" />
        </div>
      </TabsContent>

      {hasPhotoSupport && (
        <TabsContent value="photo" className="space-y-4">
          <PhotoUploadSection cvData={cvData} setCvData={setCvData} />
        </TabsContent>
      )}

      <TabsContent value="summary" className="space-y-4">
        <div className="space-y-1.5">
          <Label className="text-muted-foreground text-xs uppercase font-bold">Professional Summary</Label>
          <Textarea 
            name="professionalSummary" 
            value={cvData?.professionalSummary || ''} 
            onChange={handleSummaryChange} 
            placeholder="Experienced software engineer with 5+ years in full-stack development. Skilled in React, Node.js, and cloud technologies. Passionate about building scalable applications." 
            className="min-h-[200px] resize-none bg-background text-foreground placeholder:text-muted-foreground/50"
            maxLength={600}
          />
          <div className="text-xs text-right text-muted-foreground mt-1">
            {(cvData?.professionalSummary || '').length}/600
          </div>
        </div>
      </TabsContent>

      <TabsContent value="experience" className="space-y-6">
        {(cvData?.experience || []).map((exp, idx) => (
          <div key={`exp-${idx}`} className="p-4 bg-muted/50 rounded-xl border border-border space-y-4 relative group">
            <div className="absolute right-2 top-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button size="icon" variant="ghost" className="h-6 w-6 text-muted-foreground hover:text-foreground" onClick={() => moveItem('experience', idx, 'up')} disabled={idx === 0}>
                <ChevronUp className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="h-6 w-6 text-muted-foreground hover:text-foreground" onClick={() => moveItem('experience', idx, 'down')} disabled={idx === (cvData.experience?.length || 0) - 1}>
                <ChevronDown className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="h-6 w-6 text-muted-foreground hover:text-destructive" onClick={() => removeArrayItem('experience', idx)}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 pr-8">
              <div className="space-y-1.5">
                <Label className="text-muted-foreground text-xs">Company</Label>
                <Input value={exp.company || ''} onChange={(e) => handleArrayChange('experience', idx, 'company', e.target.value)} className="h-9 bg-background placeholder:text-muted-foreground/50" placeholder="Tech Corp" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-muted-foreground text-xs">Position</Label>
                <Input value={exp.position || ''} onChange={(e) => handleArrayChange('experience', idx, 'position', e.target.value)} className="h-9 bg-background placeholder:text-muted-foreground/50" placeholder="Senior Software Engineer" />
              </div>
            </div>
            <div className="space-y-1.5 pr-8">
              <Label className="text-muted-foreground text-xs">Duration</Label>
              <Input value={exp.duration || ''} onChange={(e) => handleArrayChange('experience', idx, 'duration', e.target.value)} className="h-9 bg-background placeholder:text-muted-foreground/50" placeholder="2021 - Present" />
            </div>
            <div className="space-y-1.5 pr-8">
              <Label className="text-muted-foreground text-xs">Description / Achievements</Label>
              <Textarea 
                value={exp.description || ''} 
                onChange={(e) => handleArrayChange('experience', idx, 'description', e.target.value)} 
                className="h-24 resize-none bg-background placeholder:text-muted-foreground/50" 
                placeholder="Led development of microservices architecture. Mentored junior developers. Improved system performance by 40%."
              />
            </div>
          </div>
        ))}
        <Button 
          variant="outline" 
          onClick={() => addArrayItem('experience', { company: '', position: '', duration: '', description: '' })}
          className="w-full border-dashed border-2 bg-background hover:bg-muted"
        >
          <Plus className="w-4 h-4 mr-2" /> Add Experience
        </Button>
      </TabsContent>

      <TabsContent value="education" className="space-y-6">
        {(cvData?.education || []).map((edu, idx) => (
          <div key={`edu-${idx}`} className="p-4 bg-muted/50 rounded-xl border border-border space-y-4 relative group">
            <div className="absolute right-2 top-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button size="icon" variant="ghost" className="h-6 w-6 text-muted-foreground hover:text-foreground" onClick={() => moveItem('education', idx, 'up')} disabled={idx === 0}><ChevronUp className="w-4 h-4" /></Button>
              <Button size="icon" variant="ghost" className="h-6 w-6 text-muted-foreground hover:text-foreground" onClick={() => moveItem('education', idx, 'down')} disabled={idx === (cvData.education?.length || 0) - 1}><ChevronDown className="w-4 h-4" /></Button>
              <Button size="icon" variant="ghost" className="h-6 w-6 text-muted-foreground hover:text-destructive" onClick={() => removeArrayItem('education', idx)}><Trash2 className="w-4 h-4" /></Button>
            </div>

            <div className="grid grid-cols-2 gap-4 pr-8">
              <div className="space-y-1.5">
                <Label className="text-muted-foreground text-xs">School / Institution</Label>
                <Input value={edu.school || ''} onChange={(e) => handleArrayChange('education', idx, 'school', e.target.value)} className="h-9 bg-background placeholder:text-muted-foreground/50" placeholder="University of California" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-muted-foreground text-xs">Degree</Label>
                <Input value={edu.degree || ''} onChange={(e) => handleArrayChange('education', idx, 'degree', e.target.value)} className="h-9 bg-background placeholder:text-muted-foreground/50" placeholder="BS Computer Science" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pr-8">
              <div className="space-y-1.5">
                <Label className="text-muted-foreground text-xs">Field of Study</Label>
                <Input value={edu.field || ''} onChange={(e) => handleArrayChange('education', idx, 'field', e.target.value)} className="h-9 bg-background placeholder:text-muted-foreground/50" placeholder="Computer Science" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-muted-foreground text-xs">Year</Label>
                <Input value={edu.year || ''} onChange={(e) => handleArrayChange('education', idx, 'year', e.target.value)} className="h-9 bg-background placeholder:text-muted-foreground/50" placeholder="2018" />
              </div>
            </div>
          </div>
        ))}
        <Button 
          variant="outline" 
          onClick={() => addArrayItem('education', { school: '', degree: '', field: '', year: '' })}
          className="w-full border-dashed border-2 bg-background hover:bg-muted"
        >
          <Plus className="w-4 h-4 mr-2" /> Add Education
        </Button>
      </TabsContent>

      <TabsContent value="skills" className="space-y-6">
        {(cvData?.skills || []).map((skill, idx) => {
          const placeholders = ['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'REST APIs'];
          const placeholderText = placeholders[idx % placeholders.length];
          
          return (
            <div key={`skill-${idx}`} className="flex items-center gap-4 p-2 bg-muted/50 rounded-lg border border-border">
              <div className="flex-1 space-y-1.5">
                <Input value={skill.name || ''} onChange={(e) => handleArrayChange('skills', idx, 'name', e.target.value)} className="h-9 bg-background placeholder:text-muted-foreground/50" placeholder={placeholderText} />
              </div>
              <div className="flex-1 space-y-1.5">
                <Input value={skill.level || ''} onChange={(e) => handleArrayChange('skills', idx, 'level', e.target.value)} className="h-9 bg-background placeholder:text-muted-foreground/50" placeholder="Expert" />
              </div>
              <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-destructive shrink-0" onClick={() => removeArrayItem('skills', idx)}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          );
        })}
        <Button 
          variant="outline" 
          onClick={() => addArrayItem('skills', { name: '', level: '' })}
          className="w-full border-dashed border-2 bg-background hover:bg-muted"
        >
          <Plus className="w-4 h-4 mr-2" /> Add Skill
        </Button>
      </TabsContent>

      <TabsContent value="projects" className="space-y-6">
        {(cvData?.projects || []).map((proj, idx) => (
          <div key={`proj-${idx}`} className="p-4 bg-muted/50 rounded-xl border border-border space-y-4 relative group">
            <div className="absolute right-2 top-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button size="icon" variant="ghost" className="h-6 w-6 text-muted-foreground hover:text-foreground" onClick={() => moveItem('projects', idx, 'up')} disabled={idx === 0}><ChevronUp className="w-4 h-4" /></Button>
              <Button size="icon" variant="ghost" className="h-6 w-6 text-muted-foreground hover:text-foreground" onClick={() => moveItem('projects', idx, 'down')} disabled={idx === (cvData.projects?.length || 0) - 1}><ChevronDown className="w-4 h-4" /></Button>
              <Button size="icon" variant="ghost" className="h-6 w-6 text-muted-foreground hover:text-destructive" onClick={() => removeArrayItem('projects', idx)}><Trash2 className="w-4 h-4" /></Button>
            </div>

            <div className="grid grid-cols-2 gap-4 pr-8">
              <div className="space-y-1.5">
                <Label className="text-muted-foreground text-xs">Project Name</Label>
                <Input value={proj.name || ''} onChange={(e) => handleArrayChange('projects', idx, 'name', e.target.value)} className="h-9 bg-background placeholder:text-muted-foreground/50" placeholder="E-commerce Platform" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-muted-foreground text-xs">Duration</Label>
                <Input value={proj.duration || ''} onChange={(e) => handleArrayChange('projects', idx, 'duration', e.target.value)} className="h-9 bg-background placeholder:text-muted-foreground/50" placeholder="Jan 2022 - Mar 2022" />
              </div>
            </div>
            <div className="space-y-1.5 pr-8">
              <Label className="text-muted-foreground text-xs">Description</Label>
              <Textarea 
                value={proj.description || ''} 
                onChange={(e) => handleArrayChange('projects', idx, 'description', e.target.value)} 
                className="h-24 resize-none bg-background placeholder:text-muted-foreground/50" 
                placeholder="Built a scalable e-commerce platform using React and Node.js."
              />
            </div>
          </div>
        ))}
        <Button 
          variant="outline" 
          onClick={() => addArrayItem('projects', { name: '', duration: '', description: '' })}
          className="w-full border-dashed border-2 bg-background hover:bg-muted"
        >
          <Plus className="w-4 h-4 mr-2" /> Add Project
        </Button>
      </TabsContent>

      <TabsContent value="more" className="space-y-8">
        <div className="space-y-4">
          <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Certifications</h3>
          {(cvData?.certifications || []).map((cert, idx) => (
            <div key={`cert-${idx}`} className="flex items-center gap-4 p-2 bg-muted/50 rounded-lg border border-border">
              <Input value={cert.name || ''} onChange={(e) => handleArrayChange('certifications', idx, 'name', e.target.value)} className="h-9 bg-background placeholder:text-muted-foreground/50" placeholder="AWS Certified" />
              <Input value={cert.issuer || ''} onChange={(e) => handleArrayChange('certifications', idx, 'issuer', e.target.value)} className="h-9 bg-background placeholder:text-muted-foreground/50" placeholder="Amazon" />
              <Input value={cert.year || ''} onChange={(e) => handleArrayChange('certifications', idx, 'year', e.target.value)} className="h-9 bg-background placeholder:text-muted-foreground/50 w-24" placeholder="2021" />
              <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-destructive shrink-0" onClick={() => removeArrayItem('certifications', idx)}><Trash2 className="w-4 h-4" /></Button>
            </div>
          ))}
          <Button variant="outline" onClick={() => addArrayItem('certifications', { name: '', issuer: '', year: '' })} className="w-full border-dashed border-2 bg-background hover:bg-muted">
            <Plus className="w-4 h-4 mr-2" /> Add Certification
          </Button>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Languages</h3>
          {(cvData?.languages || []).map((lang, idx) => (
            <div key={`lang-${idx}`} className="flex items-center gap-4 p-2 bg-muted/50 rounded-lg border border-border">
              <Input value={lang.name || ''} onChange={(e) => handleArrayChange('languages', idx, 'name', e.target.value)} className="h-9 bg-background placeholder:text-muted-foreground/50" placeholder="English" />
              <Input value={lang.proficiency || ''} onChange={(e) => handleArrayChange('languages', idx, 'proficiency', e.target.value)} className="h-9 bg-background placeholder:text-muted-foreground/50" placeholder="Native" />
              <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-destructive shrink-0" onClick={() => removeArrayItem('languages', idx)}><Trash2 className="w-4 h-4" /></Button>
            </div>
          ))}
          <Button variant="outline" onClick={() => addArrayItem('languages', { name: '', proficiency: '' })} className="w-full border-dashed border-2 bg-background hover:bg-muted">
            <Plus className="w-4 h-4 mr-2" /> Add Language
          </Button>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Volunteer Experience</h3>
          {(cvData?.volunteer || []).map((vol, idx) => (
            <div key={`vol-${idx}`} className="p-4 bg-muted/50 rounded-xl border border-border space-y-4 relative group">
              <div className="absolute right-2 top-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button size="icon" variant="ghost" className="h-6 w-6 text-muted-foreground hover:text-destructive" onClick={() => removeArrayItem('volunteer', idx)}><Trash2 className="w-4 h-4" /></Button>
              </div>
              <div className="grid grid-cols-2 gap-4 pr-8">
                <div className="space-y-1.5">
                  <Label className="text-muted-foreground text-xs">Role</Label>
                  <Input value={vol.role || ''} onChange={(e) => handleArrayChange('volunteer', idx, 'role', e.target.value)} className="h-9 bg-background placeholder:text-muted-foreground/50" placeholder="Mentor" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-muted-foreground text-xs">Organization</Label>
                  <Input value={vol.organization || ''} onChange={(e) => handleArrayChange('volunteer', idx, 'organization', e.target.value)} className="h-9 bg-background placeholder:text-muted-foreground/50" placeholder="Code for Good" />
                </div>
              </div>
              <div className="space-y-1.5 pr-8">
                <Label className="text-muted-foreground text-xs">Duration</Label>
                <Input value={vol.duration || ''} onChange={(e) => handleArrayChange('volunteer', idx, 'duration', e.target.value)} className="h-9 bg-background placeholder:text-muted-foreground/50" placeholder="2020 - 2021" />
              </div>
              <div className="space-y-1.5 pr-8">
                <Label className="text-muted-foreground text-xs">Description</Label>
                <Textarea value={vol.description || ''} onChange={(e) => handleArrayChange('volunteer', idx, 'description', e.target.value)} className="h-24 resize-none bg-background placeholder:text-muted-foreground/50" placeholder="Mentored aspiring developers." />
              </div>
            </div>
          ))}
          <Button variant="outline" onClick={() => addArrayItem('volunteer', { role: '', organization: '', duration: '', description: '' })} className="w-full border-dashed border-2 bg-background hover:bg-muted">
            <Plus className="w-4 h-4 mr-2" /> Add Volunteer Experience
          </Button>
        </div>
      </TabsContent>
    </Tabs>
  );
}
