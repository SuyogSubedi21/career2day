import React, { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Download, FileText, Palette, Printer, Save, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SEOHead from '@/components/SEOHead.jsx';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { getCareerPlatformBySlug } from '@/data/careerPlatformData.js';
import pb from '@/lib/pocketbaseClient.js';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const defaultRole = 'ai-engineer';

const templates = [
  ['modern-minimal', 'Modern Minimal', 'Clean single-column layout for broad applications.', 'classic', false],
  ['corporate-professional', 'Corporate Professional', 'Formal structure for enterprise roles.', 'executive', false],
  ['single-column-ats', 'Single-column ATS', 'Plain parser-friendly layout.', 'ats', false],
  ['technical-sidebar', 'Technical Sidebar', 'Skills-heavy sidebar for technical roles.', 'sidebar', false],
  ['executive-navy', 'Executive Navy', 'Senior navy header with leadership emphasis.', 'bold', false],
  ['product-manager', 'Product Manager', 'Impact-led layout for product roles.', 'impact', true],
  ['data-analytics', 'Data Analytics', 'Metric-forward layout for analytics roles.', 'compact', false],
  ['project-showcase', 'Project Showcase', 'Portfolio-first project presentation.', 'showcase', true],
  ['designer-grid', 'Designer Grid', 'Balanced grid for design portfolios.', 'grid', true],
  ['compact-engineer', 'Compact Engineer', 'Dense engineering format.', 'compact', false],
  ['sidebar-photo', 'Sidebar Photo', 'Photo sidebar with strong profile block.', 'sidebar', true],
  ['bold-header', 'Bold Header', 'High-impact header with clean sections.', 'bold', false],
  ['minimal-print', 'Minimal Print', 'Print-ready formal document.', 'ats', false],
  ['academic-cv', 'Academic CV', 'Research and education-forward layout.', 'academic', false],
  ['startup-modern', 'Startup Modern', 'Modern builder-focused layout.', 'showcase', true],
  ['consultant-classic', 'Consultant Classic', 'Case-study and outcome layout.', 'executive', false],
  ['creative-portfolio', 'Creative Portfolio', 'Portfolio CV with visual header.', 'grid', true],
  ['graduate-entry', 'Graduate Entry', 'Education and project-first layout.', 'graduate', false],
  ['senior-leadership', 'Senior Leadership', 'Executive achievements and scope.', 'leadership', false],
  ['clean-european', 'Clean European', 'Structured European-style CV.', 'european', true]
].map(([id, name, description, family, supportsPhoto]) => ({ id, name, description, family, supportsPhoto }));

const palettes = {
  navy: { name: 'Navy Professional', accent: '#1d4ed8', header: '#0f172a', sidebar: '#111827' },
  slate: { name: 'Slate Minimal', accent: '#475569', header: '#1e293b', sidebar: '#334155' },
  emerald: { name: 'Emerald Clean', accent: '#047857', header: '#064e3b', sidebar: '#065f46' },
  burgundy: { name: 'Burgundy Executive', accent: '#7f1d1d', header: '#450a0a', sidebar: '#7f1d1d' },
  black: { name: 'Black & White ATS', accent: '#111827', header: '#111827', sidebar: '#111827' },
  blue: { name: 'Blue Corporate', accent: '#1e40af', header: '#1e3a8a', sidebar: '#1e40af' }
};

const fontOptions = {
  inter: 'Inter, system-ui, sans-serif',
  manrope: 'Manrope, Inter, system-ui, sans-serif',
  georgia: 'Georgia, serif'
};

const defaultProfile = (career) => ({
  name: 'Your Name',
  title: career.name,
  email: 'john.doe@email.com',
  phone: '+1 555 0134',
  location: 'New York, NY',
  website: 'linkedin.com/in/johndoe',
  summary: career.cv.summary,
  skills: career.cv.skills.join(', '),
  projects: formatLeveledProjects(career.cv.projects),
  experience: `Career2Day Portfolio Contributor | Remote | Jan 2026 - Present\nBuilt role-aligned projects, documented outcomes, and converted project work into recruiter-ready CV evidence.\nImproved project presentation through clear metrics, README documentation, and interview-ready explanations.\nPrepared portfolio stories for interviews by connecting tools, decisions, constraints, and measurable outcomes.\nReviewed learning progress weekly and refined project scope around practical employer expectations.`,
  education: 'B.S. Computer Science, State University | 2022 - 2026\nCareer2Day guided roadmap and portfolio program\nRelevant work: applied projects, technical documentation, interview preparation, and project presentation',
  certifications: 'Google Data Analytics Certificate\nAWS Cloud Practitioner\nCareer2Day Portfolio Readiness Program',
  photo: ''
});

const defaultStyle = {
  palette: 'navy',
  accent: palettes.navy.accent,
  header: palettes.navy.header,
  sidebar: palettes.navy.sidebar,
  font: 'inter',
  density: 'comfortable',
  headingStyle: 'rule'
};

const storageKey = (role, template) => `career2day-cv-editor-${role}-${template}`;

export default function SmartCVBuilderPage() {
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role') || defaultRole;
  const templateId = searchParams.get('template');
  const career = getCareerPlatformBySlug(role) || getCareerPlatformBySlug(defaultRole);
  const isEditor = typeof window !== 'undefined' && window.location.pathname === '/cv-builder/editor';
  const template = templates.find((item) => item.id === templateId) || templates[0];

  if (!isEditor) return <TemplateGallery career={career} />;
  return <CVEditor career={career} template={template} />;
}

function TemplateGallery({ career }) {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-8 text-slate-950 dark:bg-[#080b12] dark:text-white sm:px-6 lg:px-8">
      <SEOHead title={`CV Templates for ${career.name} | Career2Day`} description="Choose a professional CV template, then edit it with live preview and local browser autosave." />
      <div className="mx-auto max-w-7xl">
        <Button asChild variant="ghost" className="mb-6 rounded-md">
          <Link to={`/careers/${career.slug}`}><ArrowLeft className="mr-2 h-4 w-4" /> Back to career</Link>
        </Button>
        <header className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-500">Template selection</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">Choose a CV template</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">Select a professional layout. The next page is a dedicated editor with live preview, style controls, autosave, photo support, and export actions.</p>
        </header>
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {templates.map((template) => (
            <article key={template.id} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/10">
              <RealMiniPreview template={template} career={career} />
              <h2 className="mt-4 text-lg font-extrabold">{template.name}</h2>
              <p className="mt-1 min-h-10 text-sm leading-5 text-slate-600 dark:text-slate-300">{template.description}</p>
              <Button asChild className="mt-4 w-full rounded-md">
                <Link to={`/cv-builder/editor?template=${template.id}&role=${career.slug}`}>Use this template</Link>
              </Button>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

function CVEditor({ career, template }) {
  const { currentUser, isAuthenticated } = useAuth();
  const saved = useMemo(() => {
    try {
      return JSON.parse(window.localStorage.getItem(storageKey(career.slug, template.id)) || '{}');
    } catch {
      return {};
    }
  }, [career.slug, template.id]);
  const [profile, setProfile] = useState({ ...defaultProfile(career), ...saved.profile });
  const [style, setStyle] = useState({ ...defaultStyle, ...saved.style });
  const [activeSection, setActiveSection] = useState('summary');
  const [saveState, setSaveState] = useState('Saved locally');
  const [cloudCVId, setCloudCVId] = useState(null);
  const [cloudLoaded, setCloudLoaded] = useState(false);

  useEffect(() => {
    setSaveState('Saving...');
    const timer = setTimeout(() => {
      window.localStorage.setItem(storageKey(career.slug, template.id), JSON.stringify({ profile, style }));
      setSaveState(isAuthenticated ? 'Saved locally, syncing...' : 'Saved locally');
    }, 250);
    return () => clearTimeout(timer);
  }, [career.slug, isAuthenticated, template.id, profile, style]);

  useEffect(() => {
    if (!isAuthenticated || !currentUser) {
      setCloudCVId(null);
      setCloudLoaded(true);
      return undefined;
    }

    let isMounted = true;

    const loadCloudCV = async () => {
      setCloudLoaded(false);
      try {
        const records = await pb.collection('userCVs').getList(1, 20, {
          filter: `userId="${currentUser.id}" && templateId="${template.id}"`,
          sort: '-updated',
          $autoCancel: false
        });
        const record = records.items.find((item) => item.personalInfo?.__careerSlug === career.slug) || records.items[0];
        if (!isMounted || !record) return;

        setCloudCVId(record.id);
        setProfile(cloudRecordToProfile(record, career));
        setStyle({ ...defaultStyle, ...(record.personalInfo?.__smartStyle || {}) });
        setSaveState('Loaded from your account');
      } catch (error) {
        console.warn('[SmartCVBuilderPage] Cloud CV load skipped:', error);
      } finally {
        if (isMounted) setCloudLoaded(true);
      }
    };

    loadCloudCV();

    return () => {
      isMounted = false;
    };
  }, [career, currentUser, isAuthenticated, template.id]);

  useEffect(() => {
    if (!isAuthenticated || !currentUser || !cloudLoaded) return undefined;

    const timer = setTimeout(async () => {
      const hasUserContent = profile.name !== 'Your Name' || profile.email !== 'john.doe@email.com' || profile.phone !== '+1 555 0134' || profile.website !== 'linkedin.com/in/johndoe';
      if (!hasUserContent) {
        setSaveState('Saved locally');
        return;
      }

      setSaveState('Saving to your account...');
      try {
        const payload = profileToCloudRecord(profile, style, career, template, currentUser.id);
        if (cloudCVId) {
          await pb.collection('userCVs').update(cloudCVId, payload, { $autoCancel: false });
        } else {
          const record = await pb.collection('userCVs').create(payload, { $autoCancel: false });
          setCloudCVId(record.id);
        }
        setSaveState('Saved to your account');
      } catch (error) {
        console.warn('[SmartCVBuilderPage] Cloud CV save skipped:', error);
        setSaveState('Saved locally');
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [career, cloudCVId, cloudLoaded, currentUser, isAuthenticated, profile, style, template]);

  const updateProfile = (key, value) => setProfile((current) => ({ ...current, [key]: value }));
  const updateStyle = (patch) => setStyle((current) => ({ ...current, ...patch }));

  const choosePalette = (key) => {
    const palette = palettes[key];
    updateStyle({ palette: key, accent: palette.accent, header: palette.header, sidebar: palette.sidebar });
  };

  const uploadPhoto = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => updateProfile('photo', reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-950 dark:bg-[#080b12] dark:text-white">
      <SEOHead title={`${template.name} CV Editor | Career2Day`} description="Edit your CV with live preview, style customization, local autosave, and export options." />
      <div className="sticky top-16 z-30 border-b border-slate-200 bg-white/95 backdrop-blur dark:border-white/10 dark:bg-[#080b12]/95">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild variant="ghost" className="rounded-md">
              <Link to={`/cv-builder?role=${career.slug}`}><ArrowLeft className="mr-2 h-4 w-4" /> Back to templates</Link>
            </Button>
            <div>
              <div className="text-sm text-slate-500">Current template</div>
              <h1 className="text-lg font-extrabold">{template.name}</h1>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-md bg-slate-100 px-3 py-2 text-xs font-bold text-slate-600 dark:bg-white/10 dark:text-slate-300"><Save className="mr-2 h-4 w-4" /> {saveState}</span>
            <Button asChild variant="outline" className="rounded-md"><Link to={`/cv-builder?role=${career.slug}`}>Change template</Link></Button>
            <Button className="rounded-md" onClick={() => exportPdf(profile)}><Printer className="mr-2 h-4 w-4" /> Export PDF</Button>
            <Button variant="outline" className="rounded-md" onClick={() => exportWord(profile)}><Download className="mr-2 h-4 w-4" /> Export Word</Button>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[470px_1fr] lg:px-8">
        <aside className="space-y-5">
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/10">
            <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">Your CV data is saved only in your browser. Photos stay local and are not uploaded.</p>
          </div>
          <SectionTabs active={activeSection} onChange={setActiveSection} />
          <EditorFields active={activeSection} profile={profile} updateProfile={updateProfile} uploadPhoto={uploadPhoto} career={career} />
          <StylePanel style={style} updateStyle={updateStyle} choosePalette={choosePalette} />
        </aside>
        <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white">
          <div className="mb-3 flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 font-extrabold"><FileText className="h-4 w-4" /> Live preview</div>
            <span className="text-slate-500">Updates instantly</span>
          </div>
          <CVPreview profile={profile} template={template} style={style} />
        </section>
      </div>
    </main>
  );
}

function SectionTabs({ active, onChange }) {
  const tabs = ['summary', 'skills', 'projects', 'experience', 'education', 'certifications', 'photo'];
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-2 shadow-sm dark:border-white/10 dark:bg-white/10">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {tabs.map((tab) => (
          <button key={tab} type="button" onClick={() => onChange(tab)} className={`rounded-md px-3 py-2 text-sm font-bold capitalize transition ${active === tab ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10'}`}>{tab}</button>
        ))}
      </div>
    </div>
  );
}

function EditorFields({ active, profile, updateProfile, uploadPhoto, career }) {
  const common = (
    <div className="grid gap-3 sm:grid-cols-2">
      <Field label="Name" value={profile.name} onChange={(value) => updateProfile('name', value)} />
      <Field label="Title" value={profile.title} onChange={(value) => updateProfile('title', value)} />
      <Field label="Email" value={profile.email} onChange={(value) => updateProfile('email', value)} />
      <Field label="Phone" value={profile.phone} onChange={(value) => updateProfile('phone', value)} />
      <Field label="Location" value={profile.location} onChange={(value) => updateProfile('location', value)} />
      <Field label="Links" value={profile.website} onChange={(value) => updateProfile('website', value)} />
    </div>
  );

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/10">
      {active === 'summary' && <><h2 className="mb-4 text-lg font-extrabold">Contact and summary</h2>{common}<Area label="Summary" value={profile.summary} onChange={(value) => updateProfile('summary', value)} /></>}
      {active === 'skills' && <><h2 className="mb-4 text-lg font-extrabold">Skills</h2><Field label="Skills" value={profile.skills} onChange={(value) => updateProfile('skills', value)} /><SuggestionRow title="Role suggestions" items={career.cv.skills} onPick={(item) => updateProfile('skills', addUnique(profile.skills, item))} /></>}
      {active === 'projects' && <><h2 className="mb-4 text-lg font-extrabold">Projects</h2><Area label="One project per line: Level 1, Level 2, then Level 3" value={profile.projects} onChange={(value) => updateProfile('projects', value)} /><SuggestionRow title="Project suggestions" items={career.cv.projects} onPick={(item) => updateProfile('projects', addProjectLine(profile.projects, item))} /></>}
      {active === 'experience' && <><h2 className="mb-4 text-lg font-extrabold">Experience</h2><Area label="Work experience" value={profile.experience} onChange={(value) => updateProfile('experience', value)} /></>}
      {active === 'education' && <><h2 className="mb-4 text-lg font-extrabold">Education</h2><Area label="Education" value={profile.education} onChange={(value) => updateProfile('education', value)} /></>}
      {active === 'certifications' && <><h2 className="mb-4 text-lg font-extrabold">Certifications</h2><Area label="Certifications" value={profile.certifications} onChange={(value) => updateProfile('certifications', value)} /></>}
      {active === 'photo' && (
        <>
          <h2 className="mb-4 text-lg font-extrabold">Profile photo</h2>
          <Input type="file" accept="image/*" onChange={uploadPhoto} />
          {profile.photo && (
            <div className="mt-4 flex items-center gap-4 rounded-md border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/10">
              <img src={profile.photo} alt="" className="h-24 w-24 rounded-md object-cover" />
              <Button type="button" variant="destructive" className="rounded-md" onClick={() => updateProfile('photo', '')}>
                <Trash2 className="mr-2 h-4 w-4" /> Remove photo
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function StylePanel({ style, updateStyle, choosePalette }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/10">
      <h2 className="mb-4 flex items-center gap-2 text-lg font-extrabold"><Palette className="h-5 w-5" /> Template Style</h2>
      <div className="grid gap-3">
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(palettes).map(([key, palette]) => (
            <button key={key} type="button" onClick={() => choosePalette(key)} className={`rounded-md border p-3 text-left text-xs font-bold ${style.palette === key ? 'border-slate-900 dark:border-white' : 'border-slate-200 dark:border-white/10'}`}>
              <span className="mb-2 flex gap-1"><span className="h-3 w-6 rounded-sm" style={{ background: palette.header }} /><span className="h-3 w-6 rounded-sm" style={{ background: palette.accent }} /></span>
              {palette.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          <ColorField label="Accent" value={style.accent} onChange={(value) => updateStyle({ accent: value })} />
          <ColorField label="Header" value={style.header} onChange={(value) => updateStyle({ header: value })} />
          <ColorField label="Sidebar" value={style.sidebar} onChange={(value) => updateStyle({ sidebar: value })} />
        </div>
        <SelectField label="Font style" value={style.font} onChange={(value) => updateStyle({ font: value })} options={[['inter', 'Inter'], ['manrope', 'Manrope'], ['georgia', 'Georgia']]} />
        <SelectField label="Spacing density" value={style.density} onChange={(value) => updateStyle({ density: value })} options={[['compact', 'Compact'], ['comfortable', 'Comfortable'], ['spacious', 'Spacious']]} />
        <SelectField label="Section heading style" value={style.headingStyle} onChange={(value) => updateStyle({ headingStyle: value })} options={[['rule', 'Rule line'], ['block', 'Block label'], ['plain', 'Plain text']]} />
      </div>
    </div>
  );
}

function RealMiniPreview({ template, career }) {
  const sample = { name: 'Your Name', title: career.name, skills: 'SQL React Python', school: 'State University' };
  if (template.family === 'sidebar') {
    return <div className="h-44 overflow-hidden rounded-md border bg-white text-[9px] text-slate-900"><div className="grid h-full grid-cols-[36%_1fr]"><div className="bg-slate-900 p-2 text-white">{template.supportsPhoto && <div className="mb-2 h-8 w-8 rounded-sm bg-slate-200" />}<b>{sample.name}</b><p>{sample.title}</p><hr className="my-2 border-slate-600" /><p>Skills</p><p>{sample.skills}</p></div><div className="p-2"><b>Summary</b><p>Builds practical projects and clear business outcomes.</p><b>Experience</b><p>Portfolio Contributor</p><b>Education</b><p>{sample.school}</p></div></div></div>;
  }
  if (template.family === 'ats' || template.family === 'academic') {
    return <div className="h-44 overflow-hidden rounded-md border bg-white p-3 text-center text-[9px] text-slate-900"><b className="text-[12px]">{sample.name}</b><p>{sample.title} | john@email.com</p><hr className="my-2" /><TextMini title="Summary" /><TextMini title="Skills" text={sample.skills} /><TextMini title="Education" text={sample.school} /></div>;
  }
  if (template.family === 'bold' || template.family === 'leadership') {
    return <div className="h-44 overflow-hidden rounded-md border bg-white text-[9px] text-slate-900"><div className="bg-slate-900 p-3 text-white"><b className="text-[12px]">{sample.name}</b><p>{sample.title}</p></div><div className="grid grid-cols-[1fr_38%] gap-2 p-2"><div><TextMini title="Experience" /><TextMini title="Projects" /></div><div><TextMini title="Skills" text={sample.skills} /></div></div></div>;
  }
  if (template.family === 'impact' || template.family === 'grid' || template.family === 'showcase') {
    return <div className="h-44 overflow-hidden rounded-md border bg-white p-2 text-[9px] text-slate-900"><div className="border-l-4 border-slate-800 bg-slate-50 p-2">{template.supportsPhoto && <span className="float-right h-8 w-8 rounded-sm bg-slate-300" />}<b className="text-[12px]">{sample.name}</b><p>{sample.title}</p></div><div className="mt-2 grid grid-cols-2 gap-2"><TextMini title="Projects" /><TextMini title="Skills" text={sample.skills} /></div><TextMini title="Experience" /></div>;
  }
  return <div className="h-44 overflow-hidden rounded-md border bg-white p-3 text-[9px] text-slate-900"><div className="border-b-2 border-slate-900 pb-2"><b className="text-[12px]">{sample.name}</b><p>{sample.title} | john@email.com</p></div><TextMini title="Summary" /><TextMini title="Experience" /><TextMini title="Projects" /></div>;
}

function TextMini({ title, text = 'Delivered measurable project work and clear outcomes.' }) {
  return <div className="mt-2 text-left"><b>{title}</b><p className="leading-3 text-slate-600">{text}</p></div>;
}

function CVPreview({ profile, template, style }) {
  const fontFamily = fontOptions[style.font] || fontOptions.inter;
  const sectionClass = style.headingStyle === 'block' ? 'bg-slate-100 px-2 py-1' : style.headingStyle === 'plain' ? '' : 'border-b border-slate-200 pb-1';
  const showPhoto = template.supportsPhoto && profile.photo;
  const css = { '--cv-accent': style.accent, '--cv-header': style.header, '--cv-sidebar': style.sidebar, fontFamily };
  const pageClass = 'mx-auto h-[1123px] w-[794px] bg-white text-slate-950 shadow-sm overflow-hidden';
  const pageStyle = { ...css, width: '794px', height: '1123px' };

  if (template.family === 'sidebar') {
    return <div id="smart-cv-template" className={`${pageClass} grid grid-cols-[250px_1fr]`} style={pageStyle}><aside className="flex h-full flex-col px-[18px] py-[28px] text-white" style={{ background: 'var(--cv-sidebar)' }}>{showPhoto && <img src={profile.photo} alt="" className="mb-5 h-28 w-28 rounded-md object-cover" />}<h2 className="text-3xl font-extrabold">{profile.name}</h2><p className="mt-1 font-bold" style={{ color: 'var(--cv-accent)' }}>{profile.title}</p><p className="mb-4 mt-2.5 flex flex-wrap gap-x-4 gap-y-1.5 text-[13px] leading-[1.55] opacity-85">{[profile.email, profile.phone, profile.location, profile.website].filter(Boolean).map((item) => <span key={item}>{item}</span>)}</p><CVSection title="Skills" sectionClass={sectionClass} dark sidebar><SkillPills text={profile.skills} dark sidebar /></CVSection></aside><main className="h-full px-[24px] py-[28px]"><CVContent profile={profile} sectionClass={sectionClass} /></main></div>;
  }
  if (template.family === 'bold' || template.family === 'leadership') {
    return <div id="smart-cv-template" className={`${pageClass} flex flex-col`} style={pageStyle}><header className="px-[40px] py-[32px] text-white" style={{ background: 'var(--cv-header)' }}><h2 className="text-4xl font-extrabold">{profile.name}</h2><p className="mt-1 text-lg font-bold" style={{ color: 'var(--cv-accent)' }}>{profile.title}</p><p className="mb-4 mt-2.5 flex flex-wrap gap-x-4 gap-y-1.5 text-[13px] opacity-85">{[profile.email, profile.phone, profile.location, profile.website].filter(Boolean).map((item) => <span key={item}>{item}</span>)}</p></header><main className="grid flex-1 gap-5 px-[36px] py-[24px] md:grid-cols-[1fr_0.72fr]"><div><CVSection title="Summary" sectionClass={sectionClass}><p>{profile.summary}</p></CVSection><CVSection title="Experience" sectionClass={sectionClass}><EntryText text={profile.experience} /></CVSection><CVSection title="Projects" sectionClass={sectionClass}><EntryText text={formatLeveledProjectText(profile.projects)} /></CVSection></div><div><CVSection title="Skills" sectionClass={sectionClass}><SkillPills text={profile.skills} /></CVSection><CVSection title="Education" sectionClass={sectionClass}><EntryText text={profile.education} /></CVSection><CVSection title="Certifications" sectionClass={sectionClass}><BulletText text={profile.certifications} /></CVSection></div></main></div>;
  }
  if (template.family === 'impact' || template.family === 'grid' || template.family === 'showcase') {
    return <div id="smart-cv-template" className={`${pageClass} flex flex-col px-[48px] py-[40px]`} style={pageStyle}><header className={`mb-[18px] grid gap-5 rounded-md border-l-8 bg-slate-50 px-[40px] py-[32px] ${showPhoto ? 'grid-cols-[96px_1fr] items-center' : ''}`} style={{ borderColor: 'var(--cv-accent)' }}>{showPhoto && <img src={profile.photo} alt="" className="h-24 w-24 rounded-md object-cover" />}<div><h2 className="text-4xl font-extrabold">{profile.name}</h2><p className="mt-1 text-lg font-bold" style={{ color: 'var(--cv-accent)' }}>{profile.title}</p><p className="mb-4 mt-2.5 flex flex-wrap gap-x-4 gap-y-1.5 text-[13px] text-slate-600">{[profile.email, profile.phone, profile.location].filter(Boolean).map((item) => <span key={item}>{item}</span>)}</p></div></header><main className="grid flex-1 gap-5 md:grid-cols-[1fr_0.75fr]"><div><CVContent profile={profile} sectionClass={sectionClass} /></div><div><CVSection title="Links" sectionClass={sectionClass}><BulletText text={profile.website} /></CVSection><CVSection title="Certifications" sectionClass={sectionClass}><BulletText text={profile.certifications} /></CVSection></div></main></div>;
  }
  if (template.family === 'ats' || template.family === 'academic' || template.family === 'graduate') {
    return <div id="smart-cv-template" className={`${pageClass} flex flex-col px-[48px] py-[40px]`} style={pageStyle}><header className="mb-[18px] text-center"><h2 className="text-3xl font-bold">{profile.name}</h2><p className="mt-1 text-[13px]">{profile.title}</p><p className="mt-2.5 flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-[13px]">{[profile.email, profile.phone, profile.location, profile.website].filter(Boolean).map((item) => <span key={item}>{item}</span>)}</p></header><CVContent profile={profile} sectionClass={sectionClass} /></div>;
  }
  return <div id="smart-cv-template" className={`${pageClass} flex flex-col px-[48px] py-[40px]`} style={pageStyle}><header className="mb-[18px] border-b-4 pb-5" style={{ borderColor: 'var(--cv-header)' }}><h2 className="text-4xl font-extrabold">{profile.name}</h2><p className="mt-1 text-lg font-bold" style={{ color: 'var(--cv-accent)' }}>{profile.title}</p><p className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1.5 text-[13px] text-slate-600">{[profile.email, profile.phone, profile.location, profile.website].filter(Boolean).map((item) => <span key={item}>{item}</span>)}</p></header><CVContent profile={profile} sectionClass={sectionClass} /></div>;
}

function CVContent({ profile, sectionClass }) {
  return <div className="flex flex-1 flex-col"><CVSection title="Summary" sectionClass={sectionClass}><p>{profile.summary}</p></CVSection><CVSection title="Skills" sectionClass={sectionClass}><SkillPills text={profile.skills} /></CVSection><CVSection title="Projects" sectionClass={sectionClass}><EntryText text={formatLeveledProjectText(profile.projects)} /></CVSection><CVSection title="Experience" sectionClass={sectionClass}><EntryText text={profile.experience} /></CVSection><CVSection title="Education" sectionClass={sectionClass}><EntryText text={profile.education} /></CVSection><CVSection title="Certifications" sectionClass={sectionClass}><BulletText text={profile.certifications} /></CVSection></div>;
}

function CVSection({ title, children, sectionClass, dark = false, sidebar = false }) {
  return <section className={`${sidebar ? 'mb-[18px]' : 'mb-5'} last:mb-0`}><h3 className={`mb-2 mt-0 pb-[5px] text-[12px] font-extrabold uppercase leading-4 tracking-[0.12em] ${dark ? 'text-white/80' : 'text-slate-500'} ${sectionClass}`}>{title}</h3><div className={`text-[13px] leading-[1.55] ${dark ? 'text-white/85' : 'text-slate-700'}`}>{children}</div></section>;
}

function Field({ label, value, onChange }) {
  return <label className="grid gap-2 text-sm font-bold">{label}<Input value={value} onChange={(event) => onChange(event.target.value)} className="rounded-md" /></label>;
}

function Area({ label, value, onChange }) {
  return <label className="mt-4 grid gap-2 text-sm font-bold">{label}<Textarea value={value} onChange={(event) => onChange(event.target.value)} className="min-h-32 rounded-md" /></label>;
}

function ColorField({ label, value, onChange }) {
  return <label className="grid gap-1 text-xs font-bold">{label}<Input type="color" value={value} onChange={(event) => onChange(event.target.value)} className="h-10 rounded-md p-1" /></label>;
}

function SelectField({ label, value, onChange, options }) {
  return <label className="grid gap-1 text-sm font-bold">{label}<select value={value} onChange={(event) => onChange(event.target.value)} className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-950 dark:border-white/10">{options.map(([key, name]) => <option key={key} value={key}>{name}</option>)}</select></label>;
}

function SkillPills({ text, dark = false, sidebar = false }) {
  return <div className={sidebar ? 'grid gap-0.5' : 'flex flex-wrap gap-1'}>{String(text).split(',').map((skill) => skill.trim()).filter(Boolean).map((skill) => <span key={skill} className={`${sidebar ? 'border-b border-white/10 py-[3px]' : 'rounded-sm px-1.5 py-0.5'} text-[12px] font-bold leading-4 ${dark ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-700'}`}>{skill}</span>)}</div>;
}

function BulletText({ text }) {
  const lines = String(text).split('\n').map((line) => line.trim()).filter(Boolean);
  return <ul className="mt-[5px] list-disc pl-[13px]">{lines.map((line, index) => <li key={line} className={`leading-[1.55] ${index === lines.length - 1 ? 'mb-0' : 'mb-[3px]'}`}>{line}</li>)}</ul>;
}

function EntryText({ text }) {
  const lines = String(text).split('\n').map((line) => line.trim()).filter(Boolean);
  if (!lines.length) return null;

  const [firstLine, ...detailLines] = lines;
  const parts = firstLine.split('|').map((part) => part.trim()).filter(Boolean);
  const hasStructuredHeader = parts.length >= 2;
  const title = hasStructuredHeader ? parts[0] : firstLine;
  const subtitle = hasStructuredHeader ? parts.slice(1, -1).join(' - ') : '';
  const date = hasStructuredHeader ? parts[parts.length - 1] : '';

  return (
    <div className="mb-[13px] break-inside-avoid last:mb-0">
      <div className="flex items-start justify-between gap-2.5">
        <div>
          <p className="font-bold leading-[1.25] text-slate-950">{title}</p>
          {subtitle && <p className="mt-[2px] text-[11px] font-semibold leading-[1.25] text-slate-600">{subtitle}</p>}
        </div>
        {date && <p className="max-w-[150px] text-right text-[11px] font-semibold leading-[1.25] text-slate-600">{date}</p>}
      </div>
      {detailLines.length > 0 && <BulletText text={detailLines.join('\n')} />}
    </div>
  );
}

function SuggestionRow({ title, items, onPick }) {
  return <div className="mt-4"><h3 className="mb-2 text-xs font-extrabold uppercase tracking-wide text-slate-500">{title}</h3><div className="flex flex-wrap gap-2">{items.map((item) => <button key={item} type="button" onClick={() => onPick(item)} className="rounded-md bg-slate-100 px-2 py-1 text-xs font-bold text-slate-700 hover:bg-slate-200 dark:bg-white/10 dark:text-slate-200">{item}</button>)}</div></div>;
}

function addUnique(current, value) {
  const values = String(current).split(',').map((item) => item.trim()).filter(Boolean);
  if (!values.map((item) => item.toLowerCase()).includes(value.toLowerCase())) values.push(value);
  return values.join(', ');
}

function addLine(current, value) {
  return String(current).includes(value) ? current : `${current}\n${value}`.trim();
}

function formatLeveledProjects(projects = []) {
  return projects.slice(0, 3).map((project, index) => `Level ${index + 1} Project: ${project}`).join('\n');
}

function formatLeveledProjectText(projectText = '') {
  return String(projectText)
    .split('\n')
    .map((line) => line.trim().replace(/^Level\s+\d+\s+Project:\s*/i, ''))
    .filter(Boolean)
    .slice(0, 3)
    .map((project, index) => `Level ${index + 1} Project: ${project}`)
    .join('\n');
}

function addProjectLine(current, value) {
  if (String(current).includes(value)) return current;
  const count = String(current).split('\n').map((line) => line.trim()).filter(Boolean).length;
  if (count >= 3) return current;
  const level = Math.min(count + 1, 3);
  return addLine(current, `Level ${level} Project: ${value}`);
}

async function exportPdf(profile) {
  const element = document.getElementById('smart-cv-template');
  if (!element) return;

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    logging: false,
    backgroundColor: '#ffffff'
  });

  const imgData = canvas.toDataURL('image/jpeg', 1.0);
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const imgHeight = (canvas.height * pageWidth) / canvas.width;
  let y = 0;

  pdf.addImage(imgData, 'JPEG', 0, y, pageWidth, imgHeight);
  while (imgHeight + y > pageHeight) {
    y -= pageHeight;
    pdf.addPage();
    pdf.addImage(imgData, 'JPEG', 0, y, pageWidth, imgHeight);
  }

  pdf.save(`${profile.name.replace(/\s+/g, '-').toLowerCase()}-cv.pdf`);
}

function exportWord(profile) {
  const html = `<html><head><meta charset="utf-8"><title>${escapeHtml(profile.name)} CV</title></head><body><h1>${escapeHtml(profile.name)}</h1><p><strong>${escapeHtml(profile.title)}</strong></p><p>${escapeHtml(profile.email)} | ${escapeHtml(profile.phone)} | ${escapeHtml(profile.location)}</p><h2>Summary</h2><p>${escapeHtml(profile.summary)}</p><h2>Skills</h2><p>${escapeHtml(profile.skills)}</p><h2>Projects</h2>${toHtmlList(formatLeveledProjectText(profile.projects))}<h2>Experience</h2>${toHtmlList(profile.experience)}<h2>Education</h2>${toHtmlList(profile.education)}<h2>Certifications</h2>${toHtmlList(profile.certifications)}</body></html>`;
  const blob = new Blob([html], { type: 'application/msword' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `${profile.name.replace(/\s+/g, '-').toLowerCase()}-cv.doc`;
  anchor.click();
  URL.revokeObjectURL(url);
}

function toHtmlList(text) {
  return `<ul>${String(text).split('\n').map((line) => line.trim()).filter(Boolean).map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
}

function escapeHtml(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

function profileToCloudRecord(profile, style, career, template, userId) {
  return {
    userId,
    name: profile.name && profile.name !== 'Your Name' ? `${profile.name}'s CV` : `${career.name} CV`,
    template: template.id,
    templateId: template.id,
    personalInfo: {
      fullName: profile.name,
      jobTitle: profile.title,
      email: profile.email,
      phone: profile.phone,
      location: profile.location,
      website: profile.website,
      photo: profile.photo,
      __careerSlug: career.slug,
      __smartStyle: style
    },
    summary: profile.summary,
    workExperience: textToRows(profile.experience, 'experience'),
    education: textToRows(profile.education, 'education'),
    skills: String(profile.skills).split(',').map((name) => ({ name: name.trim(), level: 'Working' })).filter((item) => item.name),
    certifications: textToRows(profile.certifications, 'certification'),
    projects: String(profile.projects)
      .split('\n')
      .map((line, index) => line.trim())
      .filter(Boolean)
      .map((line, index) => ({ name: line.replace(/^Level\s+\d+\s+Project:\s*/i, ''), duration: `Level ${index + 1} Project`, description: line })),
    languages: [],
    volunteerExperience: []
  };
}

function cloudRecordToProfile(record, career) {
  const personalInfo = record.personalInfo || {};
  return {
    ...defaultProfile(career),
    name: personalInfo.fullName || personalInfo.name || defaultProfile(career).name,
    title: personalInfo.jobTitle || personalInfo.title || career.name,
    email: personalInfo.email || defaultProfile(career).email,
    phone: personalInfo.phone || defaultProfile(career).phone,
    location: personalInfo.location || defaultProfile(career).location,
    website: personalInfo.website || defaultProfile(career).website,
    summary: record.summary || record.professionalSummary || defaultProfile(career).summary,
    skills: Array.isArray(record.skills) ? record.skills.map((skill) => skill.name || skill).filter(Boolean).join(', ') : defaultProfile(career).skills,
    projects: rowsToText(record.projects, 'projects') || defaultProfile(career).projects,
    experience: rowsToText(record.workExperience || record.experience, 'experience') || defaultProfile(career).experience,
    education: rowsToText(record.education, 'education') || defaultProfile(career).education,
    certifications: rowsToText(record.certifications, 'certifications') || defaultProfile(career).certifications,
    photo: personalInfo.photo || ''
  };
}

function textToRows(text, type) {
  return String(text)
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      if (type === 'experience') return { company: line, position: line, description: line };
      if (type === 'education') return { school: line, degree: line, description: line };
      return { name: line, issuer: line, description: line };
    });
}

function rowsToText(rows, type) {
  if (!Array.isArray(rows)) return '';
  return rows
    .map((row) => {
      if (typeof row === 'string') return row;
      if (type === 'projects') return row.description || row.name || '';
      if (type === 'experience') return row.description || [row.position, row.company, row.startDate].filter(Boolean).join(' | ');
      if (type === 'education') return row.description || [row.degree, row.school, row.graduationDate].filter(Boolean).join(' | ');
      return row.description || row.name || row.issuer || '';
    })
    .filter(Boolean)
    .join('\n');
}
