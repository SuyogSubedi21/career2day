
import React from 'react';

export default function ClassicProfessionalTemplate({ data }) {
  return (
    <div className="min-h-[297mm] w-[210mm] bg-[#f8fafc] text-slate-900 p-10 flex flex-col">
      {/* Centered Header */}
      <header className="text-center mb-8 border-b-2 border-[hsl(var(--tpl-teal))] pb-6">
        <h1 className="text-4xl font-bold text-slate-900 font-georgia mb-2 tracking-tight">{data.fullName || 'Your Name'}</h1>
        <p className="text-lg text-[hsl(var(--tpl-teal))] font-poppins font-medium mb-3">{data.jobTitle || 'Professional Title'}</p>
        <div className="flex justify-center flex-wrap gap-x-4 gap-y-1 text-sm text-slate-600 font-poppins">
          {data.email && <span>{data.email}</span>}
          {data.phone && <span>• {data.phone}</span>}
          {data.location && <span>• {data.location}</span>}
        </div>
      </header>

      {/* Two Column Layout */}
      <div className="flex gap-8 flex-1 font-poppins">
        {/* Left Column (40%) */}
        <div className="w-[35%] space-y-6">
          {data.skills?.length > 0 && (
            <section>
              <h2 className="text-sm font-bold text-[hsl(var(--tpl-teal))] uppercase tracking-widest border-b border-slate-300 pb-1 mb-3">Skills</h2>
              <ul className="space-y-1.5 text-sm text-slate-700">
                {data.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-[hsl(var(--tpl-teal))] rounded-full"></span>
                    {skill.name || skill}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {data.certifications?.length > 0 && (
            <section>
              <h2 className="text-sm font-bold text-[hsl(var(--tpl-teal))] uppercase tracking-widest border-b border-slate-300 pb-1 mb-3">Certifications</h2>
              <div className="space-y-3">
                {data.certifications.map((cert, i) => (
                  <div key={i}>
                    <h3 className="font-bold text-sm text-slate-800">{cert.name}</h3>
                    <p className="text-xs text-slate-600">{cert.issuer}</p>
                    {cert.date && <p className="text-xs text-slate-500 italic">{cert.date}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column (60%) */}
        <div className="w-[65%] space-y-6">
          {data.summary && (
            <section>
              <h2 className="text-sm font-bold text-[hsl(var(--tpl-teal))] uppercase tracking-widest border-b border-slate-300 pb-1 mb-3">Professional Summary</h2>
              <p className="text-sm leading-relaxed text-slate-700">{data.summary}</p>
            </section>
          )}

          {data.workExperience?.length > 0 && (
            <section>
              <h2 className="text-sm font-bold text-[hsl(var(--tpl-teal))] uppercase tracking-widest border-b border-slate-300 pb-1 mb-3">Experience</h2>
              <div className="space-y-5">
                {data.workExperience.map((exp, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-baseline mb-0.5">
                      <h3 className="font-bold text-base text-slate-900">{exp.title || exp.role}</h3>
                      <span className="text-xs font-medium text-slate-500">{exp.startDate} - {exp.endDate}</span>
                    </div>
                    <p className="text-sm font-medium text-[hsl(var(--tpl-teal))] mb-2">{exp.company}</p>
                    <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {data.education?.length > 0 && (
            <section>
              <h2 className="text-sm font-bold text-[hsl(var(--tpl-teal))] uppercase tracking-widest border-b border-slate-300 pb-1 mb-3">Education</h2>
              <div className="space-y-4">
                {data.education.map((edu, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-sm text-slate-900">{edu.degree}</h3>
                      <span className="text-xs text-slate-500">{edu.year || edu.graduationDate}</span>
                    </div>
                    <p className="text-sm text-slate-700">{edu.school}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
