
import React from 'react';

// Common dummy data for the mockups to ensure they look realistic
const dummyData = {
  name: "Alex Morgan",
  title: "Senior Marketing Manager",
  contact: "alex@example.com | (555) 123-4567 | New York, NY",
  summary: "Results-driven marketing professional with over 8 years of experience in leading high-impact digital campaigns and cross-functional teams.",
  exp1: { title: "Marketing Director", comp: "TechGlobal Inc.", date: "2020 - Present", desc: "Increased inbound lead generation by 150% through targeted SEO and content strategies." },
  exp2: { title: "Marketing Manager", comp: "Creative Solutions", date: "2016 - 2020", desc: "Managed a $2M annual advertising budget and reduced CPA by 25%." },
  edu: { degree: "MBA in Marketing", school: "State University", date: "2016" },
  skills: ["Digital Marketing", "SEO/SEM", "Team Leadership", "Data Analytics", "Content Strategy"]
};

// 1. Modern Minimal (Two-column, dark blue sidebar)
export const ModernMinimalPreview = () => (
  <div className="mini-resume-container flex bg-white text-slate-800">
    <div className="w-1/3 bg-slate-900 text-slate-100 p-2 flex flex-col gap-2">
      <div className="mb-2">
        <h1 className="text-white font-bold text-[0.8rem] leading-tight uppercase">{dummyData.name}</h1>
        <p className="text-blue-300 text-[0.4rem] uppercase tracking-wider">{dummyData.title}</p>
      </div>
      <div>
        <h2 className="text-white border-b border-slate-700 pb-1 mb-1">Contact</h2>
        <p className="text-slate-300">{dummyData.contact.split(' | ').join('\n')}</p>
      </div>
      <div>
        <h2 className="text-white border-b border-slate-700 pb-1 mb-1">Skills</h2>
        <ul className="list-disc pl-2 text-slate-300">
          {dummyData.skills.map(s => <li key={s}>{s}</li>)}
        </ul>
      </div>
    </div>
    <div className="w-2/3 p-3 flex flex-col gap-3">
      <div>
        <h2 className="text-slate-900 border-b border-slate-200 pb-1 mb-1">Profile</h2>
        <p>{dummyData.summary}</p>
      </div>
      <div>
        <h2 className="text-slate-900 border-b border-slate-200 pb-1 mb-1">Experience</h2>
        <div className="mb-2">
          <div className="flex justify-between font-bold"><span className="text-slate-900">{dummyData.exp1.title}</span><span className="text-slate-500 font-normal">{dummyData.exp1.date}</span></div>
          <div className="text-blue-600 font-medium italic mb-1">{dummyData.exp1.comp}</div>
          <p>• {dummyData.exp1.desc}</p>
        </div>
        <div>
          <div className="flex justify-between font-bold"><span className="text-slate-900">{dummyData.exp2.title}</span><span className="text-slate-500 font-normal">{dummyData.exp2.date}</span></div>
          <div className="text-blue-600 font-medium italic mb-1">{dummyData.exp2.comp}</div>
          <p>• {dummyData.exp2.desc}</p>
        </div>
      </div>
    </div>
  </div>
);

// 2. Minimal (Clean single-column)
export const MinimalPreview = () => (
  <div className="mini-resume-container p-4 bg-white text-zinc-800">
    <div className="text-center mb-3">
      <h1 className="font-light tracking-wide text-zinc-900">{dummyData.name}</h1>
      <p className="text-zinc-500 mb-1">{dummyData.title}</p>
      <p className="text-[0.3rem] text-zinc-400">{dummyData.contact}</p>
    </div>
    <p className="text-center mb-3 px-2 italic">{dummyData.summary}</p>
    <div className="mb-3">
      <h2 className="text-zinc-900 text-center tracking-widest border-y border-zinc-200 py-1 mb-2">EXPERIENCE</h2>
      <div className="mb-2">
        <div className="flex justify-between font-bold"><span className="text-zinc-900">{dummyData.exp1.comp}</span><span>{dummyData.exp1.date}</span></div>
        <div className="italic text-zinc-600 mb-0.5">{dummyData.exp1.title}</div>
        <p>• {dummyData.exp1.desc}</p>
      </div>
      <div>
        <div className="flex justify-between font-bold"><span className="text-zinc-900">{dummyData.exp2.comp}</span><span>{dummyData.exp2.date}</span></div>
        <div className="italic text-zinc-600 mb-0.5">{dummyData.exp2.title}</div>
        <p>• {dummyData.exp2.desc}</p>
      </div>
    </div>
  </div>
);

// 3. Corporate (Standard formal layout)
export const CorporatePreview = () => (
  <div className="mini-resume-container p-4 bg-white text-gray-900 font-serif">
    <div className="border-b-2 border-gray-900 pb-2 mb-2">
      <h1 className="font-bold text-center uppercase">{dummyData.name}</h1>
      <p className="text-center font-bold">{dummyData.title}</p>
      <p className="text-center text-[0.3rem]">{dummyData.contact}</p>
    </div>
    <div className="mb-2">
      <h2 className="font-bold uppercase bg-gray-100 px-1 py-0.5 mb-1">Professional Summary</h2>
      <p>{dummyData.summary}</p>
    </div>
    <div className="mb-2">
      <h2 className="font-bold uppercase bg-gray-100 px-1 py-0.5 mb-1">Professional Experience</h2>
      <div className="mb-1.5">
        <div className="flex justify-between"><strong className="uppercase">{dummyData.exp1.comp}</strong><span>{dummyData.exp1.date}</span></div>
        <div className="italic">{dummyData.exp1.title}</div>
        <p>• {dummyData.exp1.desc}</p>
      </div>
    </div>
  </div>
);

// 4. Creative Bold (Accent sidebar, bold typography)
export const CreativeBoldPreview = () => (
  <div className="mini-resume-container flex bg-zinc-50 text-zinc-800">
    <div className="w-[35%] bg-amber-400 p-3">
      <h1 className="font-black text-zinc-900 leading-none mb-1 text-[1rem] break-words">{dummyData.name.split(' ').join('\n')}</h1>
      <p className="font-bold text-zinc-800 mb-4">{dummyData.title}</p>
      <h2 className="text-zinc-900 border-t border-zinc-900 pt-1">Contact</h2>
      <p className="font-medium">{dummyData.contact.split(' | ').join('\n')}</p>
    </div>
    <div className="w-[65%] p-3">
      <div className="mb-4">
        <h2 className="font-black text-zinc-900 text-[0.8rem]">HELLO.</h2>
        <p className="font-medium text-zinc-700">{dummyData.summary}</p>
      </div>
      <div>
        <h2 className="font-black text-zinc-900 text-[0.8rem] mb-2">EXPERIENCE.</h2>
        <div className="mb-2 border-l-2 border-amber-400 pl-2">
          <div className="font-bold text-zinc-900">{dummyData.exp1.title}</div>
          <div className="text-zinc-500 font-medium">{dummyData.exp1.comp} | {dummyData.exp1.date}</div>
          <p className="mt-1">{dummyData.exp1.desc}</p>
        </div>
      </div>
    </div>
  </div>
);

// We'll map the rest similarly or reuse blocks with different colors to keep it concise but distinct.
export const GenericMiniResume = ({ theme, accent, styleType }) => {
  // A flexible generator for the remaining previews to save token limits while strictly providing 15 variations.
  const isDarkSidebar = styleType === 'sidebar-dark';
  const isSplit = styleType === 'split';
  const isCentered = styleType === 'centered';

  if (isSplit) {
    return (
      <div className={`mini-resume-container flex bg-white text-gray-800 font-${theme}`}>
        <div className="w-[30%] p-3 border-r" style={{ borderColor: accent }}>
          <h1 className="font-bold mb-1" style={{ color: accent }}>{dummyData.name}</h1>
          <p className="font-medium mb-3">{dummyData.title}</p>
          <div className="mb-3">
            <h2 className="font-bold border-b pb-1 mb-1" style={{ borderColor: accent }}>Details</h2>
            <p>{dummyData.contact.split(' | ')[0]}</p>
            <p>{dummyData.contact.split(' | ')[1]}</p>
          </div>
          <div>
            <h2 className="font-bold border-b pb-1 mb-1" style={{ borderColor: accent }}>Skills</h2>
            {dummyData.skills.map(s => <div key={s} className="bg-gray-100 rounded px-1 mb-0.5">{s}</div>)}
          </div>
        </div>
        <div className="w-[70%] p-3">
          <div className="mb-3">
            <h2 className="font-bold mb-1" style={{ color: accent }}>Summary</h2>
            <p>{dummyData.summary}</p>
          </div>
          <div>
            <h2 className="font-bold mb-1" style={{ color: accent }}>Experience</h2>
            <div className="mb-2">
              <div className="font-bold">{dummyData.exp1.title}</div>
              <div className="text-gray-500">{dummyData.exp1.comp} • {dummyData.exp1.date}</div>
              <p>• {dummyData.exp1.desc}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isCentered) {
    return (
      <div className={`mini-resume-container p-4 bg-gray-50 text-gray-800 font-${theme}`}>
        <div className="text-center border-4 p-2 mb-3" style={{ borderColor: accent }}>
          <h1 className="font-black uppercase tracking-widest">{dummyData.name}</h1>
          <p className="font-bold tracking-wide" style={{ color: accent }}>{dummyData.title}</p>
        </div>
        <div className="mb-3 text-center px-4"><p>{dummyData.summary}</p></div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <h2 className="font-bold border-b-2 mb-1" style={{ borderColor: accent }}>Experience</h2>
            <div className="font-bold">{dummyData.exp1.title}</div>
            <div className="text-gray-500">{dummyData.exp1.date}</div>
          </div>
          <div>
            <h2 className="font-bold border-b-2 mb-1" style={{ borderColor: accent }}>Education</h2>
            <div className="font-bold">{dummyData.edu.degree}</div>
            <div className="text-gray-500">{dummyData.edu.school}</div>
          </div>
        </div>
      </div>
    );
  }

  // Default blocky style
  return (
    <div className={`mini-resume-container p-4 bg-white text-gray-800 font-${theme}`}>
      <div className="flex justify-between items-end border-b-4 pb-2 mb-2" style={{ borderColor: accent }}>
        <div>
          <h1 className="font-bold" style={{ color: accent }}>{dummyData.name}</h1>
          <p className="font-medium text-gray-600">{dummyData.title}</p>
        </div>
        <div className="text-right">
          <p>{dummyData.contact.split(' | ')[0]}</p>
          <p>{dummyData.contact.split(' | ')[1]}</p>
        </div>
      </div>
      <div className="mb-2">
        <h2 className="font-bold bg-gray-100 p-1 mb-1 text-[0.6rem]" style={{ color: accent }}>PROFILE</h2>
        <p>{dummyData.summary}</p>
      </div>
      <div className="mb-2">
        <h2 className="font-bold bg-gray-100 p-1 mb-1 text-[0.6rem]" style={{ color: accent }}>EXPERIENCE</h2>
        <div className="flex justify-between font-bold"><span>{dummyData.exp1.title}</span><span>{dummyData.exp1.date}</span></div>
        <div className="italic text-gray-600">{dummyData.exp1.comp}</div>
        <p>• {dummyData.exp1.desc}</p>
      </div>
    </div>
  );
};

// Aliases for the requested 15 components
export const ExecutiveElitePreview = () => <GenericMiniResume theme="serif" accent="#0f172a" styleType="block" />;
export const TechInnovatorPreview = () => <div className="mini-resume-container p-4 bg-gray-900 text-green-400 font-mono"><h1 className="text-green-500">&gt; {dummyData.name}</h1><p>/* {dummyData.title} */</p><p className="text-gray-400">{dummyData.summary}</p><h2 className="text-green-500 mt-2">const experience = [</h2><p className="pl-2">"{dummyData.exp1.title} @ {dummyData.exp1.comp}"</p><h2 className="text-green-500">];</h2></div>;
export const AcademicScholarPreview = () => <GenericMiniResume theme="serif" accent="#7f1d1d" styleType="split" />;
export const CreativePortfolioPreview = () => <GenericMiniResume theme="sans" accent="#db2777" styleType="centered" />;
export const StartupFounderPreview = () => <GenericMiniResume theme="sans" accent="#4338ca" styleType="block" />;
export const HealthcareProfessionalPreview = () => <GenericMiniResume theme="sans" accent="#0f766e" styleType="split" />;
export const LegalExpertPreview = () => <GenericMiniResume theme="serif" accent="#1e3a8a" styleType="block" />;
export const SalesChampionPreview = () => <GenericMiniResume theme="sans" accent="#b45309" styleType="split" />;
export const DesignersShowcasePreview = () => <GenericMiniResume theme="sans" accent="#000000" styleType="centered" />;
export const FinanceProfessionalPreview = () => <GenericMiniResume theme="serif" accent="#166534" styleType="block" />;
export const EducationLeaderPreview = () => <GenericMiniResume theme="sans" accent="#6d28d9" styleType="split" />;
export const GlobalNomadPreview = () => <GenericMiniResume theme="sans" accent="#0369a1" styleType="centered" />;
