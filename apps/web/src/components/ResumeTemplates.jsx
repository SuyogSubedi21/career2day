
import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';

const renderBullets = (text) => {
  if (!text) return null;
  const lines = text.split('\n').filter(l => l.trim().length > 0);
  return (
    <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700">
      {lines.map((line, idx) => (
        <li key={idx}>{line.replace(/^[-*•]\s*/, '')}</li>
      ))}
    </ul>
  );
};

export const ModernTemplate = ({ data }) => {
  return (
    <div className="resume-print-area resume-body-sans flex flex-col gap-6">
      <header className="border-b-2 border-primary pb-4">
        <h1 className="text-4xl font-bold resume-text-navy mb-1 uppercase tracking-wider">{data.fullName || 'YOUR NAME'}</h1>
        <h2 className="text-xl text-primary font-medium">{data.jobTitle || 'Professional Title'}</h2>
        
        <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
          {data.email && <div className="flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> {data.email}</div>}
          {data.phone && <div className="flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> {data.phone}</div>}
          {data.location && <div className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {data.location}</div>}
        </div>
      </header>

      {data.summary && (
        <section>
          <h3 className="text-lg font-bold text-primary uppercase tracking-wider mb-2">Professional Summary</h3>
          <p className="text-sm text-gray-700 leading-relaxed">{data.summary}</p>
        </section>
      )}

      <div className="grid grid-cols-3 gap-8 flex-1">
        <div className="col-span-2 space-y-6">
          {data.workExperience?.length > 0 && (
            <section>
              <h3 className="text-lg font-bold text-primary uppercase tracking-wider mb-3">Experience</h3>
              <div className="space-y-4">
                {data.workExperience.map(job => (
                  <div key={job.id}>
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-gray-900 text-base">{job.position}</h4>
                      <span className="text-sm text-gray-500 font-medium whitespace-nowrap ml-2">
                        {job.startDate} - {job.endDate || 'Present'}
                      </span>
                    </div>
                    <div className="text-primary text-sm font-medium mb-1">{job.company}</div>
                    {renderBullets(job.description)}
                  </div>
                ))}
              </div>
            </section>
          )}

          {data.projects?.length > 0 && (
            <section>
              <h3 className="text-lg font-bold text-primary uppercase tracking-wider mb-3">Projects</h3>
              <div className="space-y-4">
                {data.projects.map(proj => (
                  <div key={proj.id}>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-gray-900">{proj.name}</h4>
                      {proj.url && <a href={proj.url} className="text-primary text-xs hover:underline">Link</a>}
                    </div>
                    {proj.techStack && <div className="text-xs text-gray-500 font-medium mb-1">{proj.techStack}</div>}
                    <p className="text-sm text-gray-700">{proj.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="col-span-1 space-y-6">
          {data.skills?.length > 0 && (
            <section>
              <h3 className="text-lg font-bold text-primary uppercase tracking-wider mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.map(skill => (
                  <span key={skill.id} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium border border-gray-200">
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {data.education?.length > 0 && (
            <section>
              <h3 className="text-lg font-bold text-primary uppercase tracking-wider mb-3">Education</h3>
              <div className="space-y-3">
                {data.education.map(edu => (
                  <div key={edu.id}>
                    <h4 className="font-bold text-gray-900 text-sm leading-tight">{edu.degree} in {edu.field}</h4>
                    <div className="text-gray-600 text-sm">{edu.school}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{edu.graduationDate}</div>
                    {edu.gpa && <div className="text-gray-500 text-xs">GPA: {edu.gpa}</div>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {data.certifications?.length > 0 && (
            <section>
              <h3 className="text-lg font-bold text-primary uppercase tracking-wider mb-3">Certifications</h3>
              <div className="space-y-2">
                {data.certifications.map(cert => (
                  <div key={cert.id}>
                    <h4 className="font-bold text-gray-900 text-sm">{cert.name}</h4>
                    <div className="text-gray-600 text-xs">{cert.issuer} {cert.date && `• ${cert.date}`}</div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export const ClassicTemplate = ({ data }) => {
  return (
    <div className="resume-print-area resume-heading-serif flex flex-col gap-5 text-gray-900">
      <header className="text-center pb-4 border-b-2 border-gray-800">
        <h1 className="text-3xl font-bold mb-1 uppercase tracking-widest">{data.fullName || 'YOUR NAME'}</h1>
        <div className="resume-body-sans text-sm text-gray-600 flex justify-center flex-wrap gap-x-4 gap-y-1">
          {data.email && <span>{data.email}</span>}
          {data.phone && <span>• {data.phone}</span>}
          {data.location && <span>• {data.location}</span>}
        </div>
      </header>

      {data.summary && (
        <section>
          <p className="resume-body-sans text-sm leading-relaxed text-justify">{data.summary}</p>
        </section>
      )}

      {data.workExperience?.length > 0 && (
        <section>
          <h3 className="text-lg font-bold uppercase border-b border-gray-300 mb-3 pb-1 tracking-wider">Experience</h3>
          <div className="space-y-4 resume-body-sans">
            {data.workExperience.map(job => (
              <div key={job.id}>
                <div className="flex justify-between items-baseline">
                  <h4 className="font-bold text-base">{job.position}</h4>
                  <span className="text-sm font-medium">{job.startDate} - {job.endDate || 'Present'}</span>
                </div>
                <div className="italic text-sm text-gray-700 mb-1">{job.company}</div>
                {renderBullets(job.description)}
              </div>
            ))}
          </div>
        </section>
      )}

      {data.education?.length > 0 && (
        <section>
          <h3 className="text-lg font-bold uppercase border-b border-gray-300 mb-3 pb-1 tracking-wider">Education</h3>
          <div className="space-y-3 resume-body-sans">
            {data.education.map(edu => (
              <div key={edu.id} className="flex justify-between items-baseline">
                <div>
                  <h4 className="font-bold text-base">{edu.school}</h4>
                  <div className="text-sm text-gray-700">{edu.degree} in {edu.field} {edu.gpa && `• GPA: ${edu.gpa}`}</div>
                </div>
                <span className="text-sm font-medium">{edu.graduationDate}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {data.skills?.length > 0 && (
        <section>
          <h3 className="text-lg font-bold uppercase border-b border-gray-300 mb-3 pb-1 tracking-wider">Skills</h3>
          <div className="resume-body-sans text-sm">
            <p className="leading-relaxed">
              {data.skills.map(s => s.name).join(' • ')}
            </p>
          </div>
        </section>
      )}
    </div>
  );
};

export const MinimalistTemplate = ({ data }) => {
  return (
    <div className="resume-print-area resume-body-sans flex flex-col text-gray-800 p-12">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-5xl font-light tracking-tight text-black mb-2">{data.fullName || 'First Last'}</h1>
          <h2 className="text-xl text-gray-500 font-light">{data.jobTitle || 'Profession'}</h2>
        </div>
        <div className="text-right text-xs text-gray-500 space-y-1">
          {data.email && <div>{data.email}</div>}
          {data.phone && <div>{data.phone}</div>}
          {data.location && <div>{data.location}</div>}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-3 space-y-8">
          {data.skills?.length > 0 && (
            <section>
              <h3 className="text-xs font-bold uppercase text-gray-400 tracking-widest mb-4">Skills</h3>
              <ul className="text-sm space-y-1">
                {data.skills.map(skill => (
                  <li key={skill.id} className="text-gray-700">{skill.name}</li>
                ))}
              </ul>
            </section>
          )}

          {data.education?.length > 0 && (
            <section>
              <h3 className="text-xs font-bold uppercase text-gray-400 tracking-widest mb-4">Education</h3>
              <div className="space-y-4">
                {data.education.map(edu => (
                  <div key={edu.id} className="text-sm">
                    <div className="font-medium text-gray-900">{edu.degree}</div>
                    <div className="text-gray-500 text-xs mt-1">{edu.school}</div>
                    <div className="text-gray-400 text-xs">{edu.graduationDate}</div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="col-span-9 space-y-8">
          {data.summary && (
            <section>
              <p className="text-sm leading-loose text-gray-600">{data.summary}</p>
            </section>
          )}

          {data.workExperience?.length > 0 && (
            <section>
              <h3 className="text-xs font-bold uppercase text-gray-400 tracking-widest mb-6 border-b border-gray-100 pb-2">Experience</h3>
              <div className="space-y-6">
                {data.workExperience.map(job => (
                  <div key={job.id} className="group">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-medium text-black text-base">{job.position}</h4>
                      <span className="text-xs text-gray-400 tracking-wide uppercase">
                        {job.startDate} — {job.endDate || 'Present'}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 mb-3">{job.company}</div>
                    {renderBullets(job.description)}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export const CreativeTemplate = ({ data }) => {
  return (
    <div className="resume-print-area resume-body-sans flex p-0">
      {/* Left Sidebar */}
      <div className="w-[35%] bg-slate-900 text-white p-8 flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 leading-tight">{data.fullName || 'Name'}</h1>
          <h2 className="text-sm text-slate-400 font-medium uppercase tracking-widest">{data.jobTitle || 'Role'}</h2>
        </div>

        <div className="space-y-3 text-sm text-slate-300">
          {data.email && <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-slate-500" /> <span className="break-all">{data.email}</span></div>}
          {data.phone && <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-slate-500" /> <span>{data.phone}</span></div>}
          {data.location && <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-slate-500" /> <span>{data.location}</span></div>}
        </div>

        {data.skills?.length > 0 && (
          <section className="mt-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 border-b border-slate-800 pb-2">Expertise</h3>
            <div className="flex flex-col gap-2">
              {data.skills.map(skill => (
                <div key={skill.id} className="text-sm flex items-center justify-between">
                  <span>{skill.name}</span>
                  {skill.proficiency && <span className="text-xs text-slate-500 bg-slate-800 px-2 py-0.5 rounded">{skill.proficiency}</span>}
                </div>
              ))}
            </div>
          </section>
        )}

        {data.languages?.length > 0 && (
          <section className="mt-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 border-b border-slate-800 pb-2">Languages</h3>
            <div className="flex flex-col gap-2">
              {data.languages.map(lang => (
                <div key={lang.id} className="text-sm flex justify-between">
                  <span>{lang.name}</span>
                  <span className="text-slate-500 text-xs">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Right Content */}
      <div className="w-[65%] bg-white p-8 py-10 flex flex-col gap-8 text-slate-800">
        {data.summary && (
          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-indigo-500 inline-block"></span> Profile
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">{data.summary}</p>
          </section>
        )}

        {data.workExperience?.length > 0 && (
          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-indigo-500 inline-block"></span> Experience
            </h3>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-1.5 before:w-0.5 before:bg-slate-100">
              {data.workExperience.map(job => (
                <div key={job.id} className="relative pl-6">
                  <span className="absolute left-0 top-1.5 w-3 h-3 bg-indigo-500 rounded-full border-4 border-white shadow-sm shadow-indigo-200"></span>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-bold text-slate-900">{job.position}</h4>
                    <span className="text-xs font-bold text-indigo-500 bg-indigo-50 px-2 py-1 rounded-full">
                      {job.startDate} - {job.endDate || 'Present'}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-slate-500 mb-2">{job.company}</div>
                  <div className="text-slate-600">{renderBullets(job.description)}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {data.education?.length > 0 && (
          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-indigo-500 inline-block"></span> Education
            </h3>
            <div className="space-y-4">
              {data.education.map(edu => (
                <div key={edu.id} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="flex justify-between">
                    <h4 className="font-bold text-slate-900 text-sm">{edu.degree} in {edu.field}</h4>
                    <span className="text-xs text-slate-500">{edu.graduationDate}</span>
                  </div>
                  <div className="text-sm text-slate-600 mt-1">{edu.school}</div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
