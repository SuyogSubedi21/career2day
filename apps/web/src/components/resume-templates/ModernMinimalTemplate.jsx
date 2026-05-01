
import React from 'react';

export default function ModernMinimalTemplate({ data }) {
  return (
    <div className="flex min-h-[297mm] w-[210mm] bg-white text-slate-900 font-poppins">
      {/* Left Sidebar (20%) */}
      <div className="w-[25%] bg-[hsl(var(--tpl-dark-blue))] text-white p-6 flex flex-col">
        <div className="mb-8 break-words">
          <h1 className="text-3xl font-bold mb-2 leading-tight">{data.fullName || 'Your Name'}</h1>
          <p className="text-sm text-blue-200 font-medium">{data.jobTitle || 'Professional Title'}</p>
        </div>
        
        <div className="space-y-3 text-xs mb-8 opacity-90 break-words">
          {data.email && <p className="flex items-center gap-2">✉ {data.email}</p>}
          {data.phone && <p className="flex items-center gap-2">☎ {data.phone}</p>}
          {data.location && <p className="flex items-center gap-2">📍 {data.location}</p>}
        </div>

        {data.skills?.length > 0 && (
          <div className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-wider mb-4 border-b border-blue-400/30 pb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, i) => (
                <span key={i} className="bg-blue-800/50 text-blue-50 px-2 py-1 text-xs rounded">
                  {skill.name || skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {data.certifications?.length > 0 && (
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider mb-4 border-b border-blue-400/30 pb-2">Certifications</h2>
            <div className="space-y-3">
              {data.certifications.map((cert, i) => (
                <div key={i}>
                  <h3 className="font-bold text-xs">{cert.name}</h3>
                  <p className="text-[10px] text-blue-200">{cert.issuer} {cert.date ? `• ${cert.date}` : ''}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Right Content Area (80%) */}
      <div className="w-[75%] p-8 flex flex-col gap-6">
        {data.summary && (
          <section>
            <h2 className="text-lg font-bold text-[hsl(var(--tpl-dark-blue))] uppercase tracking-wider mb-3">Professional Summary</h2>
            <p className="text-sm leading-relaxed text-slate-700">{data.summary}</p>
          </section>
        )}

        {data.workExperience?.length > 0 && (
          <section>
            <h2 className="text-lg font-bold text-[hsl(var(--tpl-dark-blue))] uppercase tracking-wider mb-4">Experience</h2>
            <div className="space-y-5 relative before:absolute before:inset-0 before:ml-[5px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-200">
              {data.workExperience.map((exp, i) => (
                <div key={i} className="relative pl-6">
                  <div className="absolute w-3 h-3 rounded-full bg-[hsl(var(--tpl-dark-blue))] left-0 top-1.5 border-2 border-white"></div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-base text-slate-900">{exp.title || exp.role}</h3>
                    <span className="text-xs font-medium text-[hsl(var(--tpl-dark-blue))]">{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <div className="text-sm font-medium text-slate-600 mb-2">{exp.company}</div>
                  <p className="text-sm text-slate-600 whitespace-pre-line leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {data.education?.length > 0 && (
          <section>
            <h2 className="text-lg font-bold text-[hsl(var(--tpl-dark-blue))] uppercase tracking-wider mb-4">Education</h2>
            <div className="space-y-4">
              {data.education.map((edu, i) => (
                <div key={i}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-slate-900 text-sm">{edu.degree}</h3>
                    <span className="text-xs text-slate-500">{edu.year || edu.graduationDate}</span>
                  </div>
                  <div className="text-sm text-slate-600">{edu.school}</div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
