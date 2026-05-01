
import React from 'react';

export default function CreativeBoldTemplate({ data }) {
  return (
    <div className="flex min-h-[297mm] w-[210mm] bg-white text-slate-900">
      {/* Left Accent Bar (5%) */}
      <div className="w-[5%] bg-gradient-to-b from-[hsl(var(--tpl-purple))] to-[hsl(var(--tpl-blue))] shrink-0"></div>
      
      {/* Content Area (95%) */}
      <div className="w-[95%] p-10 flex flex-col">
        <header className="mb-8">
          <h1 className="text-5xl font-black tracking-tighter text-slate-900 mb-2 font-montserrat uppercase">{data.fullName || 'YOUR NAME'}</h1>
          <p className="text-xl font-bold text-[hsl(var(--tpl-purple))] mb-4 font-montserrat tracking-wide">{data.jobTitle || 'PROFESSIONAL TITLE'}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-500 font-poppins">
            {data.email && <span className="flex items-center gap-1">✉ {data.email}</span>}
            {data.phone && <span className="flex items-center gap-1">☎ {data.phone}</span>}
            {data.location && <span className="flex items-center gap-1">📍 {data.location}</span>}
          </div>
        </header>

        {data.summary && (
          <div className="mb-8 bg-slate-50 p-5 rounded-xl border-l-4 border-[hsl(var(--tpl-blue))]">
            <p className="text-sm leading-relaxed font-medium text-slate-700 font-poppins">{data.summary}</p>
          </div>
        )}

        <div className="grid grid-cols-3 gap-8 flex-1 font-poppins">
          {/* Main Column */}
          <div className="col-span-2 space-y-8">
            {data.workExperience?.length > 0 && (
              <section>
                <h2 className="text-2xl font-black mb-5 flex items-center gap-3 font-montserrat uppercase tracking-tight">
                  <span className="w-6 h-1.5 bg-[hsl(var(--tpl-purple))] inline-block rounded-full"></span> Experience
                </h2>
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-1.5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[hsl(var(--tpl-purple))] before:to-[hsl(var(--tpl-blue))]">
                  {data.workExperience.map((exp, i) => (
                    <div key={i} className="relative pl-6">
                      <div className="absolute w-3.5 h-3.5 rounded-full bg-white left-0 top-1 border-4 border-[hsl(var(--tpl-blue))]"></div>
                      <span className="text-xs font-bold text-[hsl(var(--tpl-purple))] uppercase tracking-wider mb-1 block">{exp.startDate} - {exp.endDate}</span>
                      <h3 className="font-bold text-lg text-slate-900">{exp.title || exp.role}</h3>
                      <p className="text-sm font-semibold text-slate-600 mb-2">{exp.company}</p>
                      <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Side Column */}
          <div className="col-span-1 space-y-8">
            {data.skills?.length > 0 && (
              <section>
                <h2 className="text-xl font-black mb-4 flex items-center gap-2 font-montserrat uppercase tracking-tight">
                  <span className="w-4 h-1.5 bg-[hsl(var(--tpl-blue))] inline-block rounded-full"></span> Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill, i) => (
                    <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-800 text-xs font-bold rounded-md border border-slate-200 shadow-sm">
                      {skill.name || skill}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {data.education?.length > 0 && (
              <section>
                <h2 className="text-xl font-black mb-4 flex items-center gap-2 font-montserrat uppercase tracking-tight">
                  <span className="w-4 h-1.5 bg-[hsl(var(--tpl-purple))] inline-block rounded-full"></span> Education
                </h2>
                <div className="space-y-4">
                  {data.education.map((edu, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                      <h3 className="font-bold text-sm text-slate-900">{edu.degree}</h3>
                      <p className="text-xs text-slate-600 mt-1">{edu.school}</p>
                      <p className="text-xs font-bold text-[hsl(var(--tpl-blue))] mt-2">{edu.year || edu.graduationDate}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {data.certifications?.length > 0 && (
              <section>
                <h2 className="text-xl font-black mb-4 flex items-center gap-2 font-montserrat uppercase tracking-tight">
                  <span className="w-4 h-1.5 bg-[hsl(var(--tpl-blue))] inline-block rounded-full"></span> Certs
                </h2>
                <div className="space-y-3">
                  {data.certifications.map((cert, i) => (
                    <div key={i} className="border-l-2 border-[hsl(var(--tpl-purple))] pl-3">
                      <h3 className="font-bold text-sm text-slate-900">{cert.name}</h3>
                      <p className="text-xs text-slate-600">{cert.issuer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
