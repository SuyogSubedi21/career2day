
import React from 'react';
import { FileText } from 'lucide-react';

// --- Shared Styles for Templates ---
const PageWrapper = ({ children, style }) => (
  <div 
    id="cv-print-area" 
    className="w-[210mm] min-h-[297mm] bg-white shadow-2xl mx-auto flex flex-col text-left overflow-hidden relative break-words"
    style={{ ...style }}
  >
    {children}
  </div>
);

// --- Modern Template (Free) ---
const ModernTemplate = ({ data }) => {
  const { personalInfo = {}, experience = [], education = [], skills = [] } = data;
  return (
    <PageWrapper style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#1e293b' }}>
      <div className="bg-slate-900 text-white p-10">
        <h1 className="text-4xl font-bold tracking-tight mb-2">{personalInfo.name || 'Your Name'}</h1>
        <p className="text-xl text-slate-300 font-medium mb-4">{personalInfo.title || 'Professional Title'}</p>
        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>• {personalInfo.phone}</span>}
          {personalInfo.location && <span>• {personalInfo.location}</span>}
        </div>
      </div>
      
      <div className="p-10 flex gap-8">
        <div className="w-2/3 space-y-8">
          {personalInfo.summary && (
            <section>
              <h2 className="text-xl font-bold text-slate-900 border-b-2 border-slate-200 pb-2 mb-4 uppercase tracking-wider text-sm">Professional Summary</h2>
              <p className="text-slate-600 leading-relaxed">{personalInfo.summary}</p>
            </section>
          )}
          
          {experience.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-slate-900 border-b-2 border-slate-200 pb-2 mb-4 uppercase tracking-wider text-sm">Experience</h2>
              <div className="space-y-6">
                {experience.map(exp => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-slate-800 text-lg">{exp.position}</h3>
                      <span className="text-sm font-medium text-slate-500">{exp.startDate} - {exp.endDate}</span>
                    </div>
                    <p className="text-slate-600 font-medium mb-2">{exp.company}</p>
                    <p className="text-slate-600 text-sm whitespace-pre-line">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
        
        <div className="w-1/3 space-y-8">
          {skills.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-slate-900 border-b-2 border-slate-200 pb-2 mb-4 uppercase tracking-wider text-sm">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill.id} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}
          
          {education.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-slate-900 border-b-2 border-slate-200 pb-2 mb-4 uppercase tracking-wider text-sm">Education</h2>
              <div className="space-y-4">
                {education.map(edu => (
                  <div key={edu.id}>
                    <h3 className="font-bold text-slate-800">{edu.degree} in {edu.field}</h3>
                    <p className="text-slate-600 text-sm">{edu.school}</p>
                    <p className="text-slate-500 text-xs mt-1">Graduated: {edu.gradDate}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

// --- Minimal Template (Free) ---
const MinimalTemplate = ({ data }) => {
  const { personalInfo = {}, experience = [], education = [], skills = [] } = data;
  return (
    <PageWrapper style={{ fontFamily: "'Lora', serif", color: '#333' }}>
      <div className="p-12 max-w-4xl mx-auto">
        <div className="text-center mb-10 border-b border-gray-300 pb-8">
          <h1 className="text-5xl font-normal mb-3">{personalInfo.name || 'Your Name'}</h1>
          <div className="text-gray-500 text-sm tracking-widest uppercase flex justify-center gap-4 flex-wrap">
            {personalInfo.email && <span>{personalInfo.email}</span>}
            {personalInfo.phone && <span>{personalInfo.phone}</span>}
            {personalInfo.location && <span>{personalInfo.location}</span>}
          </div>
        </div>

        {personalInfo.summary && (
          <section className="mb-8">
            <p className="text-gray-700 text-center leading-relaxed italic">{personalInfo.summary}</p>
          </section>
        )}

        <div className="space-y-8">
          {experience.length > 0 && (
            <section>
              <h2 className="text-lg font-bold uppercase tracking-widest text-gray-900 mb-6 border-b border-gray-200 pb-2">Experience</h2>
              <div className="space-y-6">
                {experience.map(exp => (
                  <div key={exp.id} className="flex gap-6">
                    <div className="w-1/4 shrink-0 text-sm text-gray-500 mt-1">
                      {exp.startDate} — {exp.endDate}
                    </div>
                    <div className="w-3/4">
                      <h3 className="font-bold text-gray-900">{exp.position}</h3>
                      <p className="text-gray-600 italic mb-2">{exp.company}</p>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {education.length > 0 && (
            <section>
              <h2 className="text-lg font-bold uppercase tracking-widest text-gray-900 mb-6 border-b border-gray-200 pb-2">Education</h2>
              <div className="space-y-4">
                {education.map(edu => (
                  <div key={edu.id} className="flex gap-6">
                    <div className="w-1/4 shrink-0 text-sm text-gray-500 mt-1">
                      {edu.gradDate}
                    </div>
                    <div className="w-3/4">
                      <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                      <p className="text-gray-600">{edu.school} • {edu.field}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {skills.length > 0 && (
            <section>
              <h2 className="text-lg font-bold uppercase tracking-widest text-gray-900 mb-6 border-b border-gray-200 pb-2">Skills</h2>
              <p className="text-gray-700 leading-relaxed">
                {skills.map(s => s.name).join(' • ')}
              </p>
            </section>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

// --- Tech Template (Premium) ---
const TechTemplate = ({ data }) => {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [] } = data;
  return (
    <PageWrapper style={{ fontFamily: "'JetBrains Mono', monospace", color: '#d4d4d8', backgroundColor: '#0f172a' }}>
      <div className="p-10">
        <header className="mb-10 border-b border-blue-500/30 pb-6">
          <h1 className="text-4xl font-bold text-blue-400 mb-2">&gt; {personalInfo.name || 'user'}_</h1>
          <p className="text-emerald-400 mb-4">role: "{personalInfo.title || 'developer'}"</p>
          <div className="flex gap-4 text-sm text-zinc-400">
            {personalInfo.email && <span>email: {personalInfo.email}</span>}
            {personalInfo.location && <span>loc: {personalInfo.location}</span>}
          </div>
        </header>

        <div className="space-y-8">
          {personalInfo.summary && (
            <section>
              <h2 className="text-blue-400 mb-2">/* summary */</h2>
              <p className="text-zinc-300 text-sm leading-relaxed">{personalInfo.summary}</p>
            </section>
          )}

          {skills.length > 0 && (
            <section>
              <h2 className="text-blue-400 mb-2">/* tech_stack */</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill.id} className="bg-blue-500/10 text-blue-300 px-2 py-1 text-xs rounded border border-blue-500/20">
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {experience.length > 0 && (
            <section>
              <h2 className="text-blue-400 mb-4">/* experience */</h2>
              <div className="space-y-6">
                {experience.map(exp => (
                  <div key={exp.id} className="border-l-2 border-zinc-700 pl-4">
                    <h3 className="font-bold text-emerald-400">{exp.position} @ {exp.company}</h3>
                    <p className="text-zinc-500 text-xs mb-2">[{exp.startDate} ... {exp.endDate}]</p>
                    <p className="text-zinc-300 text-sm whitespace-pre-line">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {projects.length > 0 && (
            <section>
              <h2 className="text-blue-400 mb-4">/* projects */</h2>
              <div className="grid grid-cols-2 gap-4">
                {projects.map(proj => (
                  <div key={proj.id} className="border border-zinc-800 p-4 rounded bg-zinc-900/50">
                    <h3 className="font-bold text-emerald-400 mb-1">{proj.name}</h3>
                    <p className="text-zinc-400 text-xs mb-2">{proj.link}</p>
                    <p className="text-zinc-300 text-sm">{proj.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};


export default function CVTemplateRenderer({ templateId, data, zoom = 100 }) {
  // Ensure we have a valid scaling container
  const scale = zoom / 100;
  
  // Render appropriate template
  const renderTemplate = () => {
    switch (templateId) {
      case 'modern':
      case 'modern-minimal':
      case 'student':
        return <ModernTemplate data={data} />;
      case 'minimal':
      case 'academic':
        return <MinimalTemplate data={data} />;
      case 'tech':
      case 'tech-innovator':
      case 'data':
        return <TechTemplate data={data} />;
      default:
        // Fallback to Modern for others
        return <ModernTemplate data={data} />;
    }
  };

  return (
    <div 
      className="origin-top flex justify-center transition-transform" 
      style={{ transform: `scale(${scale})` }}
    >
      {renderTemplate()}
    </div>
  );
}
