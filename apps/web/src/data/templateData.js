
const templateImages = [
  'https://images.unsplash.com/photo-1695634621430-800538244782?auto=format&fit=crop&q=80&w=800&h=1000',
  'https://images.unsplash.com/photo-1695634365294-7e50d731722b?auto=format&fit=crop&q=80&w=800&h=1000',
  'https://images.unsplash.com/photo-1698047681432-006d2449c631?auto=format&fit=crop&q=80&w=800&h=1000',
  'https://images.unsplash.com/photo-1693045181224-9fc2f954f054?auto=format&fit=crop&q=80&w=800&h=1000',
  'https://images.unsplash.com/photo-1617451588899-7ac8679908c7?auto=format&fit=crop&q=80&w=800&h=1000',
  'https://images.unsplash.com/photo-1627513182299-4bc6693d2cae?auto=format&fit=crop&q=80&w=800&h=1000',
  'https://images.unsplash.com/photo-1704030459018-88ad4a4c7446?auto=format&fit=crop&q=80&w=800&h=1000'
];

export const templates = [
  {
    id: 'modern-clean',
    name: 'Modern Clean',
    category: 'Modern',
    isPremium: false,
    image: templateImages[0],
    fonts: { heading: 'Outfit, sans-serif', body: 'Plus Jakarta Sans, sans-serif' },
    colors: { primary: '#0f766e', secondary: '#14b8a6', text: '#1f2937', accent: '#f0fdfa' },
    layout: 'sidebar'
  },
  {
    id: 'minimal-elegant',
    name: 'Minimal Elegant',
    category: 'Minimal',
    isPremium: false,
    image: templateImages[1],
    fonts: { heading: 'serif', body: 'sans-serif' },
    colors: { primary: '#374151', secondary: '#6b7280', text: '#111827', accent: '#f9fafb' },
    layout: 'single-column'
  },
  {
    id: 'corporate-professional',
    name: 'Corporate Pro',
    category: 'Corporate',
    isPremium: false,
    image: templateImages[2],
    fonts: { heading: 'sans-serif', body: 'sans-serif' },
    colors: { primary: '#1e40af', secondary: '#3b82f6', text: '#1e293b', accent: '#eff6ff' },
    layout: 'two-column'
  },
  {
    id: 'creative-bold',
    name: 'Creative Bold',
    category: 'Creative',
    isPremium: true,
    image: templateImages[3],
    fonts: { heading: 'Outfit, sans-serif', body: 'sans-serif' },
    colors: { primary: '#ea580c', secondary: '#f97316', text: '#27272a', accent: '#fff7ed' },
    layout: 'timeline'
  },
  {
    id: 'executive-premium',
    name: 'Executive Suite',
    category: 'Executive',
    isPremium: true,
    image: templateImages[4],
    fonts: { heading: 'serif', body: 'sans-serif' },
    colors: { primary: '#0f172a', secondary: '#334155', text: '#0f172a', accent: '#f8fafc' },
    layout: 'two-column'
  },
  {
    id: 'modern-tech',
    name: 'Tech Innovator',
    category: 'Modern',
    isPremium: true,
    image: templateImages[5],
    fonts: { heading: 'monospace', body: 'sans-serif' },
    colors: { primary: '#0369a1', secondary: '#0ea5e9', text: '#1e293b', accent: '#f0f9ff' },
    layout: 'sidebar'
  },
  {
    id: 'minimal-zen',
    name: 'Minimal Zen',
    category: 'Minimal',
    isPremium: true,
    image: templateImages[6],
    fonts: { heading: 'sans-serif', body: 'serif' },
    colors: { primary: '#166534', secondary: '#22c55e', text: '#1f2937', accent: '#f0fdf4' },
    layout: 'single-column'
  },
  {
    id: 'creative-artistic',
    name: 'Artistic Vision',
    category: 'Creative',
    isPremium: true,
    image: templateImages[0],
    fonts: { heading: 'serif', body: 'sans-serif' },
    colors: { primary: '#be123c', secondary: '#f43f5e', text: '#1c1917', accent: '#fff1f2' },
    layout: 'sidebar'
  },
  {
    id: 'corporate-classic',
    name: 'Classic Corporate',
    category: 'Corporate',
    isPremium: true,
    image: templateImages[1],
    fonts: { heading: 'sans-serif', body: 'sans-serif' },
    colors: { primary: '#1d4ed8', secondary: '#2563eb', text: '#0f172a', accent: '#eff6ff' },
    layout: 'single-column'
  },
  {
    id: 'executive-luxury',
    name: 'Luxury Executive',
    category: 'Executive',
    isPremium: true,
    image: templateImages[2],
    fonts: { heading: 'serif', body: 'serif' },
    colors: { primary: '#854d0e', secondary: '#ca8a04', text: '#1c1917', accent: '#fefce8' },
    layout: 'timeline'
  },
  {
    id: 'modern-gradient',
    name: 'Gradient Flow',
    category: 'Modern',
    isPremium: true,
    image: templateImages[3],
    fonts: { heading: 'Outfit, sans-serif', body: 'sans-serif' },
    colors: { primary: '#4338ca', secondary: '#6366f1', text: '#1e293b', accent: '#f0f9ff' },
    layout: 'two-column'
  },
  {
    id: 'minimal-serif',
    name: 'Serif Elegance',
    category: 'Minimal',
    isPremium: true,
    image: templateImages[4],
    fonts: { heading: 'serif', body: 'serif' },
    colors: { primary: '#3f3f46', secondary: '#71717a', text: '#27272a', accent: '#fafafa' },
    layout: 'single-column'
  },
  {
    id: 'creative-studio',
    name: 'Studio Creative',
    category: 'Creative',
    isPremium: true,
    image: templateImages[5],
    fonts: { heading: 'sans-serif', body: 'sans-serif' },
    colors: { primary: '#c026d3', secondary: '#d946ef', text: '#1e293b', accent: '#fdf4ff' },
    layout: 'timeline'
  },
  {
    id: 'corporate-agile',
    name: 'Agile Corporate',
    category: 'Corporate',
    isPremium: true,
    image: templateImages[6],
    fonts: { heading: 'sans-serif', body: 'sans-serif' },
    colors: { primary: '#0f766e', secondary: '#14b8a6', text: '#1e293b', accent: '#f0fdfa' },
    layout: 'sidebar'
  },
  {
    id: 'executive-board',
    name: 'Boardroom',
    category: 'Executive',
    isPremium: true,
    image: templateImages[0],
    fonts: { heading: 'serif', body: 'sans-serif' },
    colors: { primary: '#111827', secondary: '#4b5563', text: '#111827', accent: '#f3f4f6' },
    layout: 'two-column'
  }
];

export const getTemplateById = (id) => templates.find(t => t.id === id) || templates[0];
