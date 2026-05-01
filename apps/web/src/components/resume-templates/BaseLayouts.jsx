
import React from 'react';
import { getTemplateById } from '@/data/templateData.js';

// Common Section Components
const SectionHeader = ({ title, color, font }) => (
  <h2 className="text-lg font-bold uppercase tracking-wider mb-3 mt-6 border-b-2 pb-1" style={{ color, borderColor: color, fontFamily: font }}>
    {title}
  </h2>
);

const ContactInfo = ({ data }) => (
  <div className="flex flex-wrap gap-3 text-sm opacity-90 mt-2">
    {data.email && <span>{data.email}</span>}
    {data.phone && <span>• {data.phone}</span>}
    {data.location && <span>• {data.location}</span>}
  </div>
);

// 1. Sidebar Layout
export const ModernSidebarLayout = ({ data, config }) => (
  <div className="flex min-h-full bg-white" style={{ fontFamily: config.fonts.body, color: config.colors.text }}>
    {/* Sidebar */}
    <div className="w-[30%] p-8" style={{ backgroundColor: config.colors.accent }}>
      <div className="mb-8">
        <h1 className="text-3xl font-bold leading-tight" style={{ color: config.colors.primary, fontFamily: config.fonts.heading }}>
          {data.name || 'Your Name'}
        </h1>
        <p className="text-lg mt-2 font-medium" style={{ color: config.colors.secondary }}>{data.title}</p>
        <div className="mt-4 flex flex-col gap-2 text-sm">
          {data.email && <div>{data.email}</div>}
          {data.phone && <div>{data.phone}</div>}
          {data.location && <div>{data.location}</div>}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: config.colors.primary }}>Skills</h2>
        <div className="flex flex-wrap gap-2">
          {(data.skills || []).map((skill, i) => (
            <span key={i} className="text-xs px-2 py-1 rounded" style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}>{skill}</span>
          ))}
        </div>
      </div>

      {data.education?.length > 0 && (
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: config.colors.primary }}>Education</h2>
          {data.education.map((edu, i) => (
            <div key={i} className="mb-4">
              <h3 className="font-bold text-sm">{edu.degree}</h3>
              <p className="text-xs opacity-80">{edu.school}</p>
              <p className="text-xs opacity-70">{edu.year}</p>
            </div>
          ))}
        </div>
      )}
    </div>

    {/* Main Content */}
    <div className="w-[70%] p-8">
      {data.summary && (
        <section>
          <SectionHeader title="Professional Summary" color={config.colors.primary} font={config.fonts.heading} />
          <p className="text-sm leading-relaxed">{data.summary}</p>
        </section>
      )}

      {data.experience?.length > 0 && (
        <section>
          <SectionHeader title="Experience" color={config.colors.primary} font={config.fonts.heading} />
          {data.experience.map((exp, i) => (
            <div key={i} className="mb-5">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold" style={{ color: config.colors.secondary }}>{exp.role}</h3>
                <span className="text-xs font-medium opacity-70">{exp.duration}</span>
              </div>
              <p className="text-sm font-medium mb-2">{exp.company}</p>
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {data.projects?.length > 0 && (
        <section>
          <SectionHeader title="Projects" color={config.colors.primary} font={config.fonts.heading} />
          {data.projects.map((proj, i) => (
            <div key={i} className="mb-4">
              <h3 className="font-bold text-sm">{proj.name}</h3>
              <p className="text-sm leading-relaxed">{proj.description}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  </div>
);

// 2. Single Column Minimal Layout
export const MinimalSingleColumnLayout = ({ data, config }) => (
  <div className="min-h-full bg-white p-12" style={{ fontFamily: config.fonts.body, color: config.colors.text }}>
    <header className="text-center mb-10 pb-6 border-b" style={{ borderColor: config.colors.accent }}>
      <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ color: config.colors.primary, fontFamily: config.fonts.heading }}>
        {data.name || 'Your Name'}
      </h1>
      <p className="text-xl" style={{ color: config.colors.secondary }}>{data.title}</p>
      <div className="flex justify-center mt-3">
        <ContactInfo data={data} />
      </div>
    </header>

    {data.summary && (
      <section className="mb-8 text-center max-w-3xl mx-auto">
        <p className="text-sm leading-relaxed italic">{data.summary}</p>
      </section>
    )}

    {data.experience?.length > 0 && (
      <section className="mb-8">
        <SectionHeader title="Experience" color={config.colors.primary} font={config.fonts.heading} />
        {data.experience.map((exp, i) => (
          <div key={i} className="mb-6">
            <div className="flex justify-between">
              <h3 className="font-bold text-lg">{exp.role} <span className="font-normal opacity-70">at {exp.company}</span></h3>
              <span className="text-sm font-medium opacity-70">{exp.duration}</span>
            </div>
            <p className="text-sm mt-2 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </section>
    )}

    <div className="grid grid-cols-2 gap-8">
      <div>
        <SectionHeader title="Skills" color={config.colors.primary} font={config.fonts.heading} />
        <p className="text-sm leading-relaxed">{(data.skills || []).join(' • ')}</p>
      </div>
      <div>
        <SectionHeader title="Education" color={config.colors.primary} font={config.fonts.heading} />
        {data.education?.map((edu, i) => (
          <div key={i} className="mb-3">
            <h3 className="font-bold text-sm">{edu.degree}</h3>
            <p className="text-sm">{edu.school} • {edu.year}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// 3. Two Column Executive Layout
export const ExecutiveTwoColumnLayout = ({ data, config }) => (
  <div className="min-h-full bg-white p-10" style={{ fontFamily: config.fonts.body, color: config.colors.text }}>
    <header className="mb-8 p-6 rounded-lg" style={{ backgroundColor: config.colors.primary, color: '#fff' }}>
      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: config.fonts.heading }}>{data.name || 'Your Name'}</h1>
      <p className="text-xl opacity-90">{data.title}</p>
      <div className="mt-4 flex gap-4 text-sm opacity-80">
        {data.email && <span>{data.email}</span>}
        {data.phone && <span>{data.phone}</span>}
        {data.location && <span>{data.location}</span>}
      </div>
    </header>

    <div className="flex gap-8">
      <div className="w-2/3">
        {data.summary && (
          <section className="mb-6">
            <SectionHeader title="Profile" color={config.colors.primary} font={config.fonts.heading} />
            <p className="text-sm leading-relaxed">{data.summary}</p>
          </section>
        )}

        {data.experience?.length > 0 && (
          <section>
            <SectionHeader title="Professional Experience" color={config.colors.primary} font={config.fonts.heading} />
            {data.experience.map((exp, i) => (
              <div key={i} className="mb-6">
                <h3 className="font-bold text-base" style={{ color: config.colors.secondary }}>{exp.role}</h3>
                <div className="flex justify-between text-sm font-medium mb-2 opacity-80">
                  <span>{exp.company}</span>
                  <span>{exp.duration}</span>
                </div>
                <p className="text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </section>
        )}
      </div>

      <div className="w-1/3 space-y-6">
        <section>
          <SectionHeader title="Core Competencies" color={config.colors.primary} font={config.fonts.heading} />
          <ul className="list-disc list-inside text-sm space-y-1">
            {(data.skills || []).map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </section>

        {data.education?.length > 0 && (
          <section>
            <SectionHeader title="Education" color={config.colors.primary} font={config.fonts.heading} />
            {data.education.map((edu, i) => (
              <div key={i} className="mb-3">
                <h3 className="font-bold text-sm">{edu.degree}</h3>
                <p className="text-sm">{edu.school}</p>
                <p className="text-xs opacity-70">{edu.year}</p>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  </div>
);

// 4. Timeline Layout
export const TimelineLayout = ({ data, config }) => (
  <div className="min-h-full bg-white p-10" style={{ fontFamily: config.fonts.body, color: config.colors.text }}>
    <header className="border-b-4 pb-6 mb-8" style={{ borderColor: config.colors.primary }}>
      <h1 className="text-4xl font-bold uppercase tracking-widest" style={{ color: config.colors.primary, fontFamily: config.fonts.heading }}>
        {data.name || 'Your Name'}
      </h1>
      <p className="text-xl mt-2 tracking-wide font-light" style={{ color: config.colors.secondary }}>{data.title}</p>
      <ContactInfo data={data} />
    </header>

    <div className="flex gap-12">
      <div className="w-1/4">
        <SectionHeader title="Skills" color={config.colors.primary} font={config.fonts.heading} />
        <div className="flex flex-col gap-2">
          {(data.skills || []).map((skill, i) => (
            <div key={i} className="text-sm border-l-2 pl-2" style={{ borderColor: config.colors.secondary }}>{skill}</div>
          ))}
        </div>
        
        <div className="mt-8">
          <SectionHeader title="Education" color={config.colors.primary} font={config.fonts.heading} />
          {data.education?.map((edu, i) => (
            <div key={i} className="mb-4">
              <p className="text-xs font-bold" style={{ color: config.colors.secondary }}>{edu.year}</p>
              <h3 className="font-bold text-sm mt-1">{edu.degree}</h3>
              <p className="text-sm opacity-80">{edu.school}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-3/4">
        {data.summary && <p className="text-sm leading-relaxed mb-8">{data.summary}</p>}

        <SectionHeader title="Experience" color={config.colors.primary} font={config.fonts.heading} />
        <div className="relative border-l-2 ml-3 space-y-8" style={{ borderColor: config.colors.accent }}>
          {(data.experience || []).map((exp, i) => (
            <div key={i} className="relative pl-6">
              <div className="absolute w-3 h-3 rounded-full -left-[7px] top-1.5" style={{ backgroundColor: config.colors.primary }}></div>
              <span className="text-xs font-bold px-2 py-1 rounded mb-2 inline-block" style={{ backgroundColor: config.colors.accent, color: config.colors.primary }}>
                {exp.duration}
              </span>
              <h3 className="font-bold text-lg">{exp.role}</h3>
              <p className="text-sm font-medium mb-2 opacity-80">{exp.company}</p>
              <p className="text-sm leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const TemplateRenderer = ({ templateId, data }) => {
  const config = getTemplateById(templateId);
  
  switch(config.layout) {
    case 'sidebar': return <ModernSidebarLayout data={data} config={config} />;
    case 'single-column': return <MinimalSingleColumnLayout data={data} config={config} />;
    case 'two-column': return <ExecutiveTwoColumnLayout data={data} config={config} />;
    case 'timeline': return <TimelineLayout data={data} config={config} />;
    default: return <MinimalSingleColumnLayout data={data} config={config} />;
  }
};
