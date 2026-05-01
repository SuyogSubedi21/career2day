
import { generateTemplatePreviewSVG } from '@/lib/templatePreviewGenerator.js';

// Base configurations for 24 distinct templates with enhanced premium designs
const templateConfigs = [
  // FREE TEMPLATES (4)
  {
    id: 'ModernClean',
    name: 'Modern Clean',
    category: 'Free',
    description: 'A beautifully balanced, minimal design that emphasizes clarity and modern typography.',
    colorScheme: { primary: '#0f172a', secondary: '#f8fafc', accent: '#64748b' },
    typography: { fontFamily: 'Outfit, sans-serif', sizes: { header: '2.5rem', section: '1.25rem', body: '0.95rem' } },
    layout: { type: 'single', headerAlign: 'left', contentAlign: 'left', spacing: '1.5rem' },
    styling: { headerStyle: 'minimal', sidebarBg: 'none', backgrounds: 'light', borders: 'none', sectionTitles: 'underline' },
    sections: ['summary', 'experience', 'education', 'skills', 'projects'],
    features: { hasPhotoPlaceholder: true }
  },
  {
    id: 'ProfessionalClassic',
    name: 'Professional Classic',
    category: 'Free',
    description: 'The gold standard for corporate applications. ATS-optimized with a conservative layout.',
    colorScheme: { primary: '#1e3a8a', secondary: '#f1f5f9', accent: '#3b82f6' },
    typography: { fontFamily: 'Playfair Display, serif', sizes: { header: '2.5rem', section: '1.3rem', body: '0.9rem' } },
    layout: { type: 'single', headerAlign: 'center', contentAlign: 'left', spacing: '1.25rem' },
    styling: { headerStyle: 'minimal', sidebarBg: 'none', backgrounds: 'light', borders: 'solid', sectionTitles: 'bold-colored' },
    sections: ['summary', 'experience', 'education', 'skills'],
    features: { hasPhotoPlaceholder: false }
  },
  {
    id: 'SimpleElegant',
    name: 'Simple Elegant',
    category: 'Free',
    description: 'Clean lines and elegant spacing for a sophisticated professional look.',
    colorScheme: { primary: '#334155', secondary: '#f8fafc', accent: '#94a3b8' },
    typography: { fontFamily: 'Lora, serif', sizes: { header: '2.25rem', section: '1.2rem', body: '0.9rem' } },
    layout: { type: 'sidebar-left', headerAlign: 'left', contentAlign: 'left', spacing: '1.5rem' },
    styling: { headerStyle: 'minimal', sidebarBg: 'none', backgrounds: 'light', borders: 'none', sectionTitles: 'uppercase-tracking' },
    sections: ['summary', 'experience', 'education', 'skills'],
    features: { hasPhotoPlaceholder: false }
  },
  {
    id: 'TechFocus',
    name: 'Tech Focus',
    category: 'Free',
    description: 'Built for developers. Highlights technical skills and projects with a crisp aesthetic.',
    colorScheme: { primary: '#047857', secondary: '#ecfdf5', accent: '#10b981' },
    typography: { fontFamily: 'Space Grotesk, sans-serif', sizes: { header: '2.25rem', section: '1.15rem', body: '0.9rem' } },
    layout: { type: 'sidebar-right', headerAlign: 'split', contentAlign: 'left', spacing: '1.25rem' },
    styling: { headerStyle: 'split', sidebarBg: 'colored', backgrounds: 'light', borders: 'none', sectionTitles: 'pill' },
    sections: ['summary', 'skills', 'experience', 'projects', 'education'],
    features: { hasPhotoPlaceholder: false }
  },
  
  // PREMIUM TEMPLATES (20) - Enhanced Visuals
  {
    id: 'CreativeBold',
    name: 'Creative Bold',
    category: 'Premium',
    description: 'Stand out with bold typography and full-width colored header sections.',
    colorScheme: { primary: '#9f1239', secondary: '#fff1f2', accent: '#e11d48' },
    typography: { fontFamily: 'Plus Jakarta Sans, sans-serif', sizes: { header: '2.85rem', section: '1.4rem', body: '0.95rem' } },
    layout: { type: 'single', headerAlign: 'center', contentAlign: 'left', spacing: '1.85rem' },
    styling: { headerStyle: 'colored', sidebarBg: 'none', backgrounds: 'light', borders: 'none', sectionTitles: 'bold-colored', shadows: 'sm' },
    sections: ['summary', 'experience', 'education', 'skills', 'projects'],
    features: { hasPhotoPlaceholder: true }
  },
  {
    id: 'MinimalistPro',
    name: 'Minimalist Pro',
    category: 'Premium',
    description: 'Focus entirely on content with this elegantly stripped-back dark accent design.',
    colorScheme: { primary: '#09090b', secondary: '#f4f4f5', accent: '#52525b' },
    typography: { fontFamily: 'DM Sans, sans-serif', sizes: { header: '2.6rem', section: '1.25rem', body: '0.95rem' } },
    layout: { type: 'sidebar-left', headerAlign: 'left', contentAlign: 'left', spacing: '1.75rem' },
    styling: { headerStyle: 'minimal', sidebarBg: 'primary', backgrounds: 'light', borders: 'none', sectionTitles: 'underline' },
    sections: ['summary', 'experience', 'education', 'skills'],
    features: { hasPhotoPlaceholder: true }
  },
  {
    id: 'ModernBlue',
    name: 'Modern Blue',
    category: 'Premium',
    description: 'A contemporary take on the classic resume with premium topographical choices.',
    colorScheme: { primary: '#0284c7', secondary: '#f0f9ff', accent: '#38bdf8' },
    typography: { fontFamily: 'Outfit, sans-serif', sizes: { header: '2.75rem', section: '1.3rem', body: '0.95rem' } },
    layout: { type: 'sidebar-left', headerAlign: 'split', contentAlign: 'left', spacing: '1.6rem' },
    styling: { headerStyle: 'split', sidebarBg: 'colored', backgrounds: 'light', borders: 'none', sectionTitles: 'uppercase-tracking' },
    sections: ['summary', 'experience', 'education', 'skills', 'languages'],
    features: { hasPhotoPlaceholder: true }
  },
  {
    id: 'TechAdvanced',
    name: 'Tech Advanced',
    category: 'Premium',
    description: 'A highly structured design optimized for displaying dense technical proficiencies.',
    colorScheme: { primary: '#4f46e5', secondary: '#eef2ff', accent: '#818cf8' },
    typography: { fontFamily: 'Space Grotesk, sans-serif', sizes: { header: '2.4rem', section: '1.25rem', body: '0.9rem' } },
    layout: { type: 'sidebar-right', headerAlign: 'left', contentAlign: 'left', spacing: '1.5rem' },
    styling: { headerStyle: 'minimal', sidebarBg: 'colored', backgrounds: 'light', borders: 'solid', sectionTitles: 'pill' },
    sections: ['summary', 'experience', 'projects', 'skills', 'education'],
    features: { hasPhotoPlaceholder: true }
  },
  {
    id: 'ExecutiveElite',
    name: 'Executive Elite',
    category: 'Premium',
    description: 'Authoritative, centered layout perfect for C-level and management applications.',
    colorScheme: { primary: '#0f172a', secondary: '#f8fafc', accent: '#64748b' },
    typography: { fontFamily: 'Playfair Display, serif', sizes: { header: '3rem', section: '1.4rem', body: '1rem' } },
    layout: { type: 'single', headerAlign: 'center', contentAlign: 'center', spacing: '2rem' },
    styling: { headerStyle: 'colored', sidebarBg: 'none', backgrounds: 'light', borders: 'double', sectionTitles: 'uppercase-tracking' },
    sections: ['summary', 'experience', 'education', 'skills'],
    features: { hasPhotoPlaceholder: true }
  },
  {
    id: 'DesignerPortfolio',
    name: 'Designer Portfolio',
    category: 'Premium',
    description: 'Visual-heavy layout perfect for UX/UI designers and artists with distinct split sections.',
    colorScheme: { primary: '#ea580c', secondary: '#fff7ed', accent: '#fb923c' },
    typography: { fontFamily: 'Plus Jakarta Sans, sans-serif', sizes: { header: '2.8rem', section: '1.35rem', body: '0.95rem' } },
    layout: { type: 'sidebar-left', headerAlign: 'left', contentAlign: 'left', spacing: '1.75rem' },
    styling: { headerStyle: 'split', sidebarBg: 'primary', backgrounds: 'light', borders: 'none', sectionTitles: 'bold-colored' },
    sections: ['summary', 'experience', 'projects', 'skills', 'education'],
    features: { hasPhotoPlaceholder: true }
  },
  {
    id: 'AcademicScholar',
    name: 'Academic Scholar',
    category: 'Premium',
    description: 'Extensive, detailed format suitable for curriculum vitae and publications.',
    colorScheme: { primary: '#27272a', secondary: '#f4f4f5', accent: '#71717a' },
    typography: { fontFamily: 'Lora, serif', sizes: { header: '2.5rem', section: '1.25rem', body: '0.95rem' } },
    layout: { type: 'single', headerAlign: 'left', contentAlign: 'left', spacing: '1.5rem' },
    styling: { headerStyle: 'minimal', sidebarBg: 'none', backgrounds: 'light', borders: 'none', sectionTitles: 'underline' },
    sections: ['summary', 'experience', 'education', 'certifications', 'skills'],
    features: { hasPhotoPlaceholder: true }
  },
  {
    id: 'StartupDynamic',
    name: 'Startup Dynamic',
    category: 'Premium',
    description: 'Bold styling for modern tech and fast-growing company applications.',
    colorScheme: { primary: '#d946ef', secondary: '#fdf4ff', accent: '#e879f9' },
    typography: { fontFamily: 'Outfit, sans-serif', sizes: { header: '2.75rem', section: '1.35rem', body: '0.95rem' } },
    layout: { type: 'sidebar-right', headerAlign: 'left', contentAlign: 'left', spacing: '1.6rem' },
    styling: { headerStyle: 'colored', sidebarBg: 'colored', backgrounds: 'light', borders: 'none', sectionTitles: 'pill' },
    sections: ['summary', 'experience', 'skills', 'projects'],
    features: { hasPhotoPlaceholder: true }
  },
  {
    id: 'ConsultantPro',
    name: 'Consultant Pro',
    category: 'Premium',
    description: 'Highlight your expertise and client success with this structured timeline layout.',
    colorScheme: { primary: '#0d9488', secondary: '#f0fdfa', accent: '#2dd4bf' },
    typography: { fontFamily: 'DM Sans, sans-serif', sizes: { header: '2.6rem', section: '1.3rem', body: '0.95rem' } },
    layout: { type: 'single', headerAlign: 'split', contentAlign: 'left', spacing: '1.75rem' },
    styling: { headerStyle: 'minimal', sidebarBg: 'none', backgrounds: 'light', borders: 'none', sectionTitles: 'uppercase-tracking' },
    sections: ['summary', 'experience', 'education', 'skills', 'languages'],
    features: { hasPhotoPlaceholder: true }
  },
  {
    id: 'HealthcareSpecialist',
    name: 'Healthcare Specialist',
    category: 'Premium',
    description: 'Clean, trustworthy design tailored for medical and healthcare professionals.',
    colorScheme: { primary: '#0891b2', secondary: '#ecfeff', accent: '#22d3ee' },
    typography: { fontFamily: 'Outfit, sans-serif', sizes: { header: '2.5rem', section: '1.25rem', body: '0.95rem' } },
    layout: { type: 'sidebar-left', headerAlign: 'left', contentAlign: 'left', spacing: '1.5rem' },
    styling: { headerStyle: 'split', sidebarBg: 'none', backgrounds: 'light', borders: 'solid', sectionTitles: 'bold-colored' },
    sections: ['summary', 'experience', 'education', 'certifications', 'skills'],
    features: { hasPhotoPlaceholder: true }
  },
  {
    id: 'FinanceExpert',
    name: 'Finance Expert',
    category: 'Premium',
    description: 'Conservative yet modern layout for banking and finance roles.',
    colorScheme: { primary: '#1e293b', secondary: '#f8fafc', accent: '#64748b' },
    typography: { fontFamily: 'Playfair Display, serif', sizes: { header: '2.75rem', section: '1.3rem', body: '0.95rem' } },
    layout: { type: 'single', headerAlign: 'right', contentAlign: 'left', spacing: '1.6rem' },
    styling: { headerStyle: 'minimal', sidebarBg: 'none', backgrounds: 'light', borders: 'none', sectionTitles: 'underline' },
    sections: ['summary', 'experience', 'education', 'skills'],
    features: { hasPhotoPlaceholder: true }
  },
  {
    id: 'MarketingPro',
    name: 'Marketing Pro',
    category: 'Premium',
    description: 'Showcase your campaigns and metrics with this vibrant, high-contrast template.',
    colorScheme: { primary: '#f59e0b', secondary: '#fffbeb', accent: '#fbbf24' },
    typography: { fontFamily: 'Plus Jakarta Sans, sans-serif', sizes: { header: '2.85rem', section: '1.35rem', body: '0.95rem' } },
    layout: { type: 'sidebar-right', headerAlign: 'center', contentAlign: 'left', spacing: '1.75rem' },
    styling: { headerStyle: 'colored', sidebarBg: 'none', backgrounds: 'light', borders: 'none', sectionTitles: 'pill' },
    sections: ['summary', 'experience', 'projects', 'skills', 'education'],
    features: { hasPhotoPlaceholder: true }
  },
  {
    id: 'HRProfessional',
    name: 'HR Professional',
    category: 'Premium',
    description: 'Approachable and organized layout perfect for human resources and recruiting.',
    colorScheme: { primary: '#7c3aed', secondary: '#eef2ff', accent: '#a78bfa' },
    typography: { fontFamily: 'DM Sans, sans-serif', sizes: { header: '2.6rem', section: '1.25rem', body: '0.95rem' } },
    layout: { type: 'sidebar-left', headerAlign: 'left', contentAlign: 'left', spacing: '1.5rem' },
    styling: { headerStyle: 'split', sidebarBg: 'colored', backgrounds: 'light', borders: 'none', sectionTitles: 'bold-colored' },
    sections: ['summary', 'experience', 'education', 'skills'],
    features: { hasPhotoPlaceholder: true }
  },
  {
    id: 'EngineeringPro',
    name: 'Engineering Pro',
    category: 'Premium',
    description: 'Advanced layout for senior engineers featuring detailed project sections.',
    colorScheme: { primary: '#16a34a', secondary: '#f0fdf4', accent: '#4ade80' },
    typography: { fontFamily: 'Space Grotesk, sans-serif', sizes: { header: '2.6rem', section: '1.3rem', body: '0.95rem' } },
    layout: { type: 'single', headerAlign: 'split', contentAlign: 'left', spacing: '1.75rem' },
    styling: { headerStyle: 'minimal', sidebarBg: 'none', backgrounds: 'light', borders: 'solid', sectionTitles: 'uppercase-tracking' },
    sections: ['summary', 'experience', 'projects', 'skills', 'education'],
    features: { hasPhotoPlaceholder: true }
  },
  {
    id: 'CreativeAgency',
    name: 'Creative Agency',
    category: 'Premium',
    description: 'Ultra-clean dark-mode inspired design with generous whitespace.',
    colorScheme: { primary: '#f8fafc', secondary: '#0f172a', accent: '#94a3b8' },
    typography: { fontFamily: 'Outfit, sans-serif', sizes: { header: '2.8rem', section: '1.4rem', body: '1rem' } },
    layout: { type: 'sidebar-left', headerAlign: 'left', contentAlign: 'left', spacing: '2rem' },
    styling: { headerStyle: 'minimal', sidebarBg: 'colored', backgrounds: 'dark', borders: 'none', sectionTitles: 'underline' },
    sections: ['summary', 'experience', 'skills', 'education'],
    features: { hasPhotoPlaceholder: true }
  },
  {
    id: 'LegalCounsel',
    name: 'Legal Counsel',
    category: 'Premium',
    description: 'Traditional, highly professional layout for the legal sector.',
    colorScheme: { primary: '#4338ca', secondary: '#eef2ff', accent: '#818cf8' },
    typography: { fontFamily: 'Lora, serif', sizes: { header: '2.6rem', section: '1.25rem', body: '0.95rem' } },
    layout: { type: 'single', headerAlign: 'center', contentAlign: 'left', spacing: '1.5rem' },
    styling: { headerStyle: 'split', sidebarBg: 'none', backgrounds: 'light', borders: 'solid', sectionTitles: 'bold-colored' },
    sections: ['summary', 'experience', 'education', 'skills'],
    features: { hasPhotoPlaceholder: false }
  },
  {
    id: 'NonprofitLeader',
    name: 'Nonprofit Leader',
    category: 'Premium',
    description: 'Highlight career progression and impact with precise structural blocks.',
    colorScheme: { primary: '#059669', secondary: '#ecfdf5', accent: '#34d399' },
    typography: { fontFamily: 'Plus Jakarta Sans, sans-serif', sizes: { header: '2.7rem', section: '1.3rem', body: '0.95rem' } },
    layout: { type: 'sidebar-right', headerAlign: 'left', contentAlign: 'left', spacing: '1.75rem' },
    styling: { headerStyle: 'colored', sidebarBg: 'primary', backgrounds: 'light', borders: 'none', sectionTitles: 'uppercase-tracking' },
    sections: ['summary', 'experience', 'volunteer', 'education', 'skills'],
    features: { hasPhotoPlaceholder: false }
  },
  {
    id: 'LuxuryBrand',
    name: 'Luxury Brand',
    category: 'Premium',
    description: 'The ultimate layout for high-end retail and luxury brand applications.',
    colorScheme: { primary: '#b45309', secondary: '#020617', accent: '#f59e0b' },
    typography: { fontFamily: 'Playfair Display, serif', sizes: { header: '3rem', section: '1.45rem', body: '1rem' } },
    layout: { type: 'single', headerAlign: 'center', contentAlign: 'center', spacing: '2.25rem' },
    styling: { headerStyle: 'minimal', sidebarBg: 'none', backgrounds: 'dark', borders: 'solid', sectionTitles: 'underline' },
    sections: ['summary', 'experience', 'education', 'skills'],
    features: { hasPhotoPlaceholder: false }
  },
  {
    id: 'DataScientist',
    name: 'Data Scientist',
    category: 'Premium',
    description: 'Analytical layout emphasizing tools, languages, and measurable project outcomes.',
    colorScheme: { primary: '#2563eb', secondary: '#f0f9ff', accent: '#60a5fa' },
    typography: { fontFamily: 'Space Grotesk, sans-serif', sizes: { header: '2.6rem', section: '1.25rem', body: '0.95rem' } },
    layout: { type: 'sidebar-left', headerAlign: 'split', contentAlign: 'left', spacing: '1.5rem' },
    styling: { headerStyle: 'minimal', sidebarBg: 'colored', backgrounds: 'light', borders: 'none', sectionTitles: 'pill' },
    sections: ['summary', 'skills', 'experience', 'projects', 'education'],
    features: { hasPhotoPlaceholder: false }
  },
  {
    id: 'SalesDirector',
    name: 'Sales Director',
    category: 'Premium',
    description: 'Results-driven format designed to highlight KPIs and revenue growth.',
    colorScheme: { primary: '#be123c', secondary: '#fff1f2', accent: '#fb7185' },
    typography: { fontFamily: 'Outfit, sans-serif', sizes: { header: '2.8rem', section: '1.35rem', body: '0.95rem' } },
    layout: { type: 'single', headerAlign: 'left', contentAlign: 'left', spacing: '1.75rem' },
    styling: { headerStyle: 'colored', sidebarBg: 'none', backgrounds: 'light', borders: 'none', sectionTitles: 'uppercase-tracking' },
    sections: ['summary', 'experience', 'education', 'skills'],
    features: { hasPhotoPlaceholder: false }
  }
];

// Attach dynamic SVG previews to each template config
export const cvTemplates = templateConfigs.map(template => ({
  ...template,
  previewImage: generateTemplatePreviewSVG(template)
}));

export const getAllTemplates = () => cvTemplates;
export const getTemplateById = (id) => cvTemplates.find(t => t.id === id) || cvTemplates[0];
export const getFreeTemplates = () => cvTemplates.filter(t => t.category === 'Free');
export const getPremiumTemplates = () => cvTemplates.filter(t => t.category === 'Premium');
