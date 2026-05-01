
import React from 'react';

export default function CVTemplateRenderer({ data, template }) {
  const {
    personalInfo = {},
    summary = '',
    workExperience = [],
    education = [],
    skills = [],
    projects = []
  } = data;

  const tplName = template?.name?.toLowerCase() || 'professional corporate';

  // Base configurations based on template name
  const isDark = tplName.includes('tech') || tplName.includes('executive');
  const isCreative = tplName.includes('creative') || tplName.includes('artistic') || tplName.includes('colorful');
  const isMinimal = tplName.includes('minimal');
  const isSerif = tplName.includes('traditional') || tplName.includes('academic') || tplName.includes('corporate');

  const wrapperClass = `w-full h-full p-8 md:p-12 box-border flex flex-col ${
    isDark ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
  } ${isSerif ? 'font-serif' : 'font-sans'} overflow-hidden`;

  const accentColor = isCreative ? 'text-indigo-500' : isDark ? 'text-blue-400' : 'text-blue-700';
  const borderAccent = isCreative ? 'border-indigo-500' : isDark ? 'border-blue-400' : 'border-blue-700';

  return (
    <div id="cv-print-content" className={wrapperClass}>
      {/* Header */}
      <header className={`mb-6 ${isMinimal ? 'text-left' : 'text-center border-b-2 pb-6'} ${borderAccent}`}>
        <h1 className={`text-3xl md:text-5xl font-bold uppercase tracking-wider mb-2 ${isCreative ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600' : ''}`}>
          {personalInfo.fullName || 'YOUR NAME'}
        </h1>
        <div className={`flex flex-wrap justify-center gap-4 text-sm md:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'} ${isMinimal ? 'justify-start' : ''}`}>
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>• {personalInfo.phone}</span>}
          {personalInfo.location && <span>• {personalInfo.location}</span>}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-6">
          <h2 className={`text-lg font-bold uppercase tracking-widest mb-2 ${accentColor}`}>Professional Summary</h2>
          <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{summary}</p>
        </section>
      )}

      {/* Two Column Layout for contents if creative/minimal, otherwise stacked */}
      <div className={`flex-1 ${isMinimal || isCreative ? 'grid grid-cols-3 gap-8' : 'flex flex-col gap-6'}`}>
        
        {/* Main Content Column */}
        <div className={isMinimal || isCreative ? 'col-span-2 flex flex-col gap-6' : 'flex flex-col gap-6'}>
          {/* Work Experience */}
          {workExperience.length > 0 && (
            <section>
              <h2 className={`text-lg font-bold uppercase tracking-widest mb-3 border-b pb-1 ${accentColor} ${borderAccent}`}>Experience</h2>
              <div className="space-y-4">
                {workExperience.map((exp, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-base">{exp.jobTitle || 'Job Title'}</h3>
                      <span className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {exp.startDate} - {exp.endDate || 'Present'}
                      </span>
                    </div>
                    <div className={`text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{exp.company || 'Company Name'}</div>
                    <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <section>
              <h2 className={`text-lg font-bold uppercase tracking-widest mb-3 border-b pb-1 ${accentColor} ${borderAccent}`}>Projects</h2>
              <div className="space-y-3">
                {projects.map((proj, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-sm">{proj.name || 'Project Name'}</h3>
                      {proj.link && <a href={proj.link} className={`text-xs hover:underline ${accentColor}`}>{proj.link}</a>}
                    </div>
                    <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{proj.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar Column */}
        <div className={isMinimal || isCreative ? 'col-span-1 flex flex-col gap-6' : 'flex flex-col gap-6'}>
          {/* Education */}
          {education.length > 0 && (
            <section>
              <h2 className={`text-lg font-bold uppercase tracking-widest mb-3 border-b pb-1 ${accentColor} ${borderAccent}`}>Education</h2>
              <div className="space-y-3">
                {education.map((edu, idx) => (
                  <div key={idx}>
                    <h3 className="font-bold text-sm">{edu.degree || 'Degree'}</h3>
                    <div className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{edu.school || 'University Name'}</div>
                    <div className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{edu.graduationDate}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
          {skills.length > 0 && (
            <section>
              <h2 className={`text-lg font-bold uppercase tracking-widest mb-3 border-b pb-1 ${accentColor} ${borderAccent}`}>Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className={`text-xs px-2 py-1 rounded-md font-medium ${
                      isDark ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {skill.name || skill}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
        
      </div>
    </div>
  );
}
