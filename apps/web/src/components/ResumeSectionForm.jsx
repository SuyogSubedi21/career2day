
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Plus, Trash2, GripVertical } from 'lucide-react';

export default function ResumeSectionForm({ 
  data, updateField, addArrayItem, updateArrayItem, removeArrayItem 
}) {
  return (
    <div className="space-y-6">
      
      {/* Personal Info */}
      <div className="bg-card rounded-xl border p-5 shadow-sm">
        <h3 className="text-lg font-bold mb-4 border-b pb-2">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Full Name</Label>
            <Input value={data.fullName || ''} onChange={(e) => updateField('fullName', e.target.value)} placeholder="Jane Doe" />
          </div>
          <div className="space-y-2">
            <Label>Professional Title</Label>
            <Input value={data.jobTitle || ''} onChange={(e) => updateField('jobTitle', e.target.value)} placeholder="Software Engineer" />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input type="email" value={data.email || ''} onChange={(e) => updateField('email', e.target.value)} placeholder="jane@example.com" />
          </div>
          <div className="space-y-2">
            <Label>Phone</Label>
            <Input value={data.phone || ''} onChange={(e) => updateField('phone', e.target.value)} placeholder="+1 234 567 890" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label>Location</Label>
            <Input value={data.location || ''} onChange={(e) => updateField('location', e.target.value)} placeholder="New York, NY" />
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-card rounded-xl border p-5 shadow-sm">
        <h3 className="text-lg font-bold mb-4 border-b pb-2">Professional Summary</h3>
        <div className="space-y-2">
          <Label>Summary</Label>
          <Textarea 
            value={data.summary || ''} 
            onChange={(e) => updateField('summary', e.target.value)} 
            placeholder="A brief overview of your professional background and goals..."
            className="min-h-[100px]"
          />
        </div>
      </div>

      {/* Array Sections Accordion */}
      <Accordion type="single" collapsible className="w-full space-y-4">
        
        {/* Work Experience */}
        <AccordionItem value="work" className="bg-card rounded-xl border px-5 shadow-sm data-[state=open]:pb-5">
          <AccordionTrigger className="hover:no-underline font-bold text-lg">Work Experience</AccordionTrigger>
          <AccordionContent className="pt-4 space-y-6">
            {data.workExperience?.map((item, index) => (
              <div key={item.id} className="relative p-4 border rounded-lg bg-muted/30">
                <Button variant="ghost" size="icon" className="absolute top-2 right-2 text-destructive" onClick={() => removeArrayItem('workExperience', item.id)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mr-8">
                  <div className="space-y-2">
                    <Label>Job Title</Label>
                    <Input value={item.position || ''} onChange={(e) => updateArrayItem('workExperience', item.id, 'position', e.target.value)} placeholder="e.g. Senior Developer" />
                  </div>
                  <div className="space-y-2">
                    <Label>Company</Label>
                    <Input value={item.company || ''} onChange={(e) => updateArrayItem('workExperience', item.id, 'company', e.target.value)} placeholder="e.g. Tech Corp" />
                  </div>
                  <div className="space-y-2">
                    <Label>Start Date</Label>
                    <Input value={item.startDate || ''} onChange={(e) => updateArrayItem('workExperience', item.id, 'startDate', e.target.value)} placeholder="e.g. Jan 2020" />
                  </div>
                  <div className="space-y-2">
                    <Label>End Date</Label>
                    <Input value={item.endDate || ''} onChange={(e) => updateArrayItem('workExperience', item.id, 'endDate', e.target.value)} placeholder="e.g. Present" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label>Description (Bullets)</Label>
                    <Textarea 
                      value={item.description || ''} 
                      onChange={(e) => updateArrayItem('workExperience', item.id, 'description', e.target.value)} 
                      placeholder="- Achieved X by doing Y..."
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full" onClick={() => addArrayItem('workExperience', { position: '', company: '', startDate: '', endDate: '', description: '' })}>
              <Plus className="w-4 h-4 mr-2" /> Add Experience
            </Button>
          </AccordionContent>
        </AccordionItem>

        {/* Education */}
        <AccordionItem value="education" className="bg-card rounded-xl border px-5 shadow-sm data-[state=open]:pb-5">
          <AccordionTrigger className="hover:no-underline font-bold text-lg">Education</AccordionTrigger>
          <AccordionContent className="pt-4 space-y-6">
            {data.education?.map((item) => (
              <div key={item.id} className="relative p-4 border rounded-lg bg-muted/30">
                <Button variant="ghost" size="icon" className="absolute top-2 right-2 text-destructive" onClick={() => removeArrayItem('education', item.id)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mr-8">
                  <div className="space-y-2">
                    <Label>School / University</Label>
                    <Input value={item.school || ''} onChange={(e) => updateArrayItem('education', item.id, 'school', e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>Degree</Label>
                    <Input value={item.degree || ''} onChange={(e) => updateArrayItem('education', item.id, 'degree', e.target.value)} placeholder="e.g. BS" />
                  </div>
                  <div className="space-y-2">
                    <Label>Field of Study</Label>
                    <Input value={item.field || ''} onChange={(e) => updateArrayItem('education', item.id, 'field', e.target.value)} placeholder="e.g. Computer Science" />
                  </div>
                  <div className="space-y-2">
                    <Label>Graduation Date</Label>
                    <Input value={item.graduationDate || ''} onChange={(e) => updateArrayItem('education', item.id, 'graduationDate', e.target.value)} placeholder="e.g. May 2022" />
                  </div>
                  <div className="space-y-2">
                    <Label>GPA (Optional)</Label>
                    <Input value={item.gpa || ''} onChange={(e) => updateArrayItem('education', item.id, 'gpa', e.target.value)} placeholder="e.g. 3.8/4.0" />
                  </div>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full" onClick={() => addArrayItem('education', { school: '', degree: '', field: '', graduationDate: '', gpa: '' })}>
              <Plus className="w-4 h-4 mr-2" /> Add Education
            </Button>
          </AccordionContent>
        </AccordionItem>

        {/* Skills */}
        <AccordionItem value="skills" className="bg-card rounded-xl border px-5 shadow-sm data-[state=open]:pb-5">
          <AccordionTrigger className="hover:no-underline font-bold text-lg">Skills</AccordionTrigger>
          <AccordionContent className="pt-4 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.skills?.map((item) => (
                <div key={item.id} className="flex gap-2">
                  <Input value={item.name || ''} onChange={(e) => updateArrayItem('skills', item.id, 'name', e.target.value)} placeholder="Skill name" />
                  <Button variant="ghost" size="icon" className="shrink-0 text-destructive border" onClick={() => removeArrayItem('skills', item.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full" onClick={() => addArrayItem('skills', { name: '', proficiency: '' })}>
              <Plus className="w-4 h-4 mr-2" /> Add Skill
            </Button>
          </AccordionContent>
        </AccordionItem>

        {/* Projects */}
        <AccordionItem value="projects" className="bg-card rounded-xl border px-5 shadow-sm data-[state=open]:pb-5">
          <AccordionTrigger className="hover:no-underline font-bold text-lg">Projects</AccordionTrigger>
          <AccordionContent className="pt-4 space-y-6">
            {data.projects?.map((item) => (
              <div key={item.id} className="relative p-4 border rounded-lg bg-muted/30">
                <Button variant="ghost" size="icon" className="absolute top-2 right-2 text-destructive" onClick={() => removeArrayItem('projects', item.id)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mr-8">
                  <div className="space-y-2 md:col-span-2">
                    <Label>Project Name</Label>
                    <Input value={item.name || ''} onChange={(e) => updateArrayItem('projects', item.id, 'name', e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>Tech Stack</Label>
                    <Input value={item.techStack || ''} onChange={(e) => updateArrayItem('projects', item.id, 'techStack', e.target.value)} placeholder="React, Node.js" />
                  </div>
                  <div className="space-y-2">
                    <Label>URL</Label>
                    <Input value={item.url || ''} onChange={(e) => updateArrayItem('projects', item.id, 'url', e.target.value)} placeholder="https://..." />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label>Description</Label>
                    <Textarea value={item.description || ''} onChange={(e) => updateArrayItem('projects', item.id, 'description', e.target.value)} />
                  </div>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full" onClick={() => addArrayItem('projects', { name: '', description: '', url: '', techStack: '' })}>
              <Plus className="w-4 h-4 mr-2" /> Add Project
            </Button>
          </AccordionContent>
        </AccordionItem>
        
        {/* Additional Sections (Certs, Languages) omitted for brevity but logic applies identically */}
      </Accordion>
    </div>
  );
}
