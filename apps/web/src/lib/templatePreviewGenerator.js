
const dummyProfiles = [
  { name: 'Maya Chen', role: 'Product Manager', company: 'Meridian Labs', school: 'Stanford University' },
  { name: 'Raj Patel', role: 'Senior Software Engineer', company: 'Nexus Tech', school: 'MIT' },
  { name: 'Lucia Torres', role: 'UX/UI Designer', company: 'Creative Shift', school: 'Parsons School of Design' },
  { name: 'Kwame Asante', role: 'Data Scientist', company: 'Quant AI', school: 'UC Berkeley' },
  { name: 'Anika Bergström', role: 'Marketing Director', company: 'Global Brands', school: 'Stockholm School of Economics' },
  { name: 'David Kim', role: 'Financial Analyst', company: 'Capital Partners', school: 'Wharton School' },
  { name: 'Elena Rossi', role: 'Operations Manager', company: 'Logistics Pro', school: 'Bocconi University' },
  { name: 'Hassan Diallo', role: 'Sales Executive', company: 'TechSolutions', school: 'HEC Paris' },
  { name: 'Sofia Martinez', role: 'HR Business Partner', company: 'PeopleFirst', school: 'NYU' },
  { name: 'Wei Zhang', role: 'Cloud Architect', company: 'SkySystems', school: 'Tsinghua University' },
  { name: 'Yuki Tanaka', role: 'Art Director', company: 'Studio Blanc', school: 'Tokyo University of the Arts' },
  { name: 'Amina Al-Fayed', role: 'Healthcare Administrator', company: 'City Hospital', school: 'Johns Hopkins' },
  { name: 'Carlos Mendoza', role: 'Legal Counsel', company: 'Mendoza & Associates', school: 'Harvard Law' },
  { name: 'Nina Kowalski', role: 'Research Scientist', company: 'BioGen', school: 'Oxford University' },
  { name: 'Omar Tariq', role: 'Cybersecurity Analyst', company: 'SecureNet', school: 'Georgia Tech' },
  { name: 'Chloe Bennett', role: 'Content Strategist', company: 'MediaHouse', school: 'Northwestern' },
  { name: 'Lucas Silva', role: 'Supply Chain Director', company: 'FastFreight', school: 'University of São Paulo' },
  { name: 'Zara Rahman', role: 'DevOps Engineer', company: 'CloudScale', school: 'Imperial College London' },
  { name: 'Julian Dubois', role: 'Chef de Cuisine', company: 'Le Petit Bistro', school: 'Le Cordon Bleu' },
  { name: 'Mei Lin', role: 'Quality Assurance Lead', company: 'TestPerfect', school: 'National University of Singapore' },
  { name: 'Samuel Osei', role: 'Mechanical Engineer', company: 'BuildCorp', school: 'University of Cambridge' },
  { name: 'Isabella Silva', role: 'Business Consultant', company: 'Strategy Insights', school: 'INSEAD' },
  { name: 'Kenji Sato', role: 'Game Developer', company: 'PlayForge', school: 'Kyoto University' },
  { name: 'Olivia Okafor', role: 'Public Relations Specialist', company: 'Voice Comm', school: 'University of Toronto' }
];

export function generateTemplatePreviewSVG(config, index = 0) {
  const { layout, styling, colorScheme, typography } = config;
  const primary = colorScheme.primary || '#1e293b';
  const secondary = colorScheme.secondary || '#f1f5f9';
  const profile = dummyProfiles[index % dummyProfiles.length];
  
  const isDark = styling.backgrounds === 'dark';
  const textMain = isDark ? '#f8fafc' : '#334155';
  const textMuted = isDark ? '#cbd5e1' : '#64748b';
  
  // Use generic sans-serif for SVG rendering to ensure it looks clean everywhere
  const fontFam = "system-ui, -apple-system, sans-serif";

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 297" width="100%" height="100%">`;
  svg += `<rect width="210" height="297" fill="${isDark ? '#0f172a' : '#ffffff'}"/>`;

  const isSidebarLeft = layout.type === 'sidebar-left';
  const isSidebarRight = layout.type === 'sidebar-right';
  const isTwoColumn = isSidebarLeft || isSidebarRight;

  // Helper for text rendering
  const drawText = (x, y, text, size, color, weight = 'normal', anchor = 'start', spacing = 0) => {
    return `<text x="${x}" y="${y}" font-family="${fontFam}" font-size="${size}" font-weight="${weight}" fill="${color}" text-anchor="${anchor}" ${spacing ? `letter-spacing="${spacing}"` : ''}>${text}</text>`;
  };

  // Header Background
  if (styling.headerStyle === 'colored') {
    svg += `<rect x="0" y="0" width="210" height="50" fill="${primary}"/>`;
  } else if (styling.headerStyle === 'split') {
    svg += `<rect x="0" y="0" width="210" height="50" fill="${secondary}"/>`;
  }

  // Header Text Content
  const hTextMain = styling.headerStyle === 'colored' ? '#ffffff' : primary;
  const hTextMuted = styling.headerStyle === 'colored' ? 'rgba(255,255,255,0.8)' : textMuted;
  
  if (layout.headerAlign === 'center') {
    svg += drawText(105, 25, profile.name.toUpperCase(), 14, hTextMain, 'bold', 'middle', 1);
    svg += drawText(105, 34, profile.role, 6, styling.headerStyle === 'colored' ? '#ffffff' : colorScheme.accent, 'normal', 'middle');
    svg += drawText(105, 42, "hello@example.com  |  +1 234 567 890  |  New York, NY", 4, hTextMuted, 'normal', 'middle');
  } else if (layout.headerAlign === 'split') {
    svg += drawText(15, 26, profile.name, 16, hTextMain, 'bold', 'start');
    svg += drawText(15, 36, profile.role, 6, styling.headerStyle === 'colored' ? '#ffffff' : colorScheme.accent, '500', 'start');
    svg += drawText(195, 20, "hello@example.com", 4, hTextMuted, 'normal', 'end');
    svg += drawText(195, 28, "+1 234 567 890", 4, hTextMuted, 'normal', 'end');
    svg += drawText(195, 36, "New York, NY", 4, hTextMuted, 'normal', 'end');
  } else {
    svg += drawText(15, 25, profile.name, 16, hTextMain, 'bold', 'start');
    svg += drawText(15, 34, profile.role, 6, styling.headerStyle === 'colored' ? '#ffffff' : colorScheme.accent, '500', 'start');
    svg += drawText(15, 42, "hello@example.com  |  +1 234 567 890  |  New York, NY", 4, hTextMuted, 'normal', 'start');
  }

  // Layout Columns
  if (isTwoColumn) {
    const sbX = isSidebarLeft ? 0 : 140;
    const mainX = isSidebarLeft ? 70 : 0;
    
    if (styling.sidebarBg === 'colored') {
      const sbY = ['colored', 'split'].includes(styling.headerStyle) ? 50 : 0;
      svg += `<rect x="${sbX}" y="${sbY}" width="70" height="${297 - sbY}" fill="${secondary}"/>`;
    } else if (styling.sidebarBg === 'primary') {
      const sbY = ['colored', 'split'].includes(styling.headerStyle) ? 50 : 0;
      svg += `<rect x="${sbX}" y="${sbY}" width="70" height="${297 - sbY}" fill="${primary}"/>`;
    } else {
      const lineX = isSidebarLeft ? 65 : 145;
      svg += `<rect x="${lineX}" y="60" width="0.5" height="220" fill="${textMuted}" opacity="0.3"/>`;
    }

    const sbTextMain = styling.sidebarBg === 'primary' ? '#ffffff' : textMain;
    const sbTextMuted = styling.sidebarBg === 'primary' ? 'rgba(255,255,255,0.7)' : textMuted;
    const sbAccent = styling.sidebarBg === 'primary' ? '#ffffff' : primary;

    // Sidebar Content (Skills, Education)
    let sY = ['colored', 'split'].includes(styling.headerStyle) ? 65 : 65;
    
    // Skills Section
    svg += drawText(sbX + 10, sY, "SKILLS", 6, sbAccent, 'bold');
    if (styling.sectionTitles === 'underline') svg += `<rect x="${sbX + 10}" y="${sY + 3}" width="15" height="1" fill="${sbAccent}"/>`;
    sY += 12;
    ['Project Management', 'Data Analysis', 'Strategic Planning', 'Agile Methodology', 'Team Leadership'].forEach(skill => {
      svg += `<circle cx="${sbX + 12}" cy="${sY - 1.5}" r="1" fill="${sbTextMuted}"/>`;
      svg += drawText(sbX + 16, sY, skill, 4.5, sbTextMuted);
      sY += 8;
    });

    sY += 10;
    // Education Section
    svg += drawText(sbX + 10, sY, "EDUCATION", 6, sbAccent, 'bold');
    if (styling.sectionTitles === 'underline') svg += `<rect x="${sbX + 10}" y="${sY + 3}" width="20" height="1" fill="${sbAccent}"/>`;
    sY += 12;
    svg += drawText(sbX + 10, sY, "Bachelor of Science", 5, sbTextMain, 'bold');
    sY += 6;
    svg += drawText(sbX + 10, sY, profile.school, 4.5, sbTextMuted);
    sY += 6;
    svg += drawText(sbX + 10, sY, "2016 - 2020", 4, sbTextMuted);

    // Main Column Content
    let mY = ['colored', 'split'].includes(styling.headerStyle) ? 65 : 65;
    
    // Summary
    svg += drawText(mainX + 15, mY, "PROFESSIONAL SUMMARY", 6, primary, 'bold');
    if (styling.sectionTitles === 'underline') svg += `<rect x="${mainX + 15}" y="${mY + 3}" width="40" height="1" fill="${primary}"/>`;
    mY += 10;
    svg += drawText(mainX + 15, mY, `Results-driven ${profile.role.toLowerCase()} with 5+ years of experience`, 4.5, textMuted);
    mY += 6;
    svg += drawText(mainX + 15, mY, `leading high-impact initiatives at top-tier organizations.`, 4.5, textMuted);
    mY += 6;
    svg += drawText(mainX + 15, mY, `Proven ability to optimize workflows and drive revenue growth.`, 4.5, textMuted);
    mY += 15;

    // Experience
    svg += drawText(mainX + 15, mY, "EXPERIENCE", 6, primary, 'bold');
    if (styling.sectionTitles === 'underline') svg += `<rect x="${mainX + 15}" y="${mY + 3}" width="20" height="1" fill="${primary}"/>`;
    mY += 12;
    
    // Job 1
    svg += drawText(mainX + 15, mY, profile.role, 5.5, textMain, 'bold');
    svg += drawText(mainX + 125, mY, "2020 - Present", 4.5, primary, '500', 'end');
    mY += 6;
    svg += drawText(mainX + 15, mY, profile.company, 5, textMuted, '500');
    mY += 8;
    svg += `<circle cx="${mainX + 17}" cy="${mY - 1.5}" r="1" fill="${textMuted}"/>`;
    svg += drawText(mainX + 22, mY, `Spearheaded cross-functional teams to deliver projects`, 4.5, textMuted);
    mY += 6;
    svg += drawText(mainX + 22, mY, `under budget and ahead of schedule by 15%.`, 4.5, textMuted);
    mY += 6;
    svg += `<circle cx="${mainX + 17}" cy="${mY - 1.5}" r="1" fill="${textMuted}"/>`;
    svg += drawText(mainX + 22, mY, `Implemented data-driven strategies that increased`, 4.5, textMuted);
    mY += 6;
    svg += drawText(mainX + 22, mY, `customer retention metrics by over 25% year-over-year.`, 4.5, textMuted);
    mY += 15;

    // Job 2
    svg += drawText(mainX + 15, mY, `Associate ${profile.role}`, 5.5, textMain, 'bold');
    svg += drawText(mainX + 125, mY, "2017 - 2020", 4.5, primary, '500', 'end');
    mY += 6;
    svg += drawText(mainX + 15, mY, "Global Enterprises Inc.", 5, textMuted, '500');
    mY += 8;
    svg += `<circle cx="${mainX + 17}" cy="${mY - 1.5}" r="1" fill="${textMuted}"/>`;
    svg += drawText(mainX + 22, mY, `Managed daily operations and optimized resource allocation.`, 4.5, textMuted);
    mY += 6;
    svg += `<circle cx="${mainX + 17}" cy="${mY - 1.5}" r="1" fill="${textMuted}"/>`;
    svg += drawText(mainX + 22, mY, `Collaborated with executive leadership to define goals.`, 4.5, textMuted);

  } else {
    // Single Column Layout
    let mY = ['colored', 'split'].includes(styling.headerStyle) ? 65 : 65;
    const alignX = layout.contentAlign === 'center' ? 105 : 15;
    const anchor = layout.contentAlign === 'center' ? 'middle' : 'start';
    
    // Summary
    svg += drawText(alignX, mY, "PROFESSIONAL SUMMARY", 6, primary, 'bold', anchor);
    mY += 10;
    svg += drawText(alignX, mY, `Dedicated ${profile.role.toLowerCase()} with expertise in strategic development, team leadership,`, 4.5, textMuted, 'normal', anchor);
    mY += 6;
    svg += drawText(alignX, mY, `and process optimization. Consistently delivers robust solutions that align with business`, 4.5, textMuted, 'normal', anchor);
    mY += 6;
    svg += drawText(alignX, mY, `objectives and drive substantial revenue growth in fast-paced environments.`, 4.5, textMuted, 'normal', anchor);
    mY += 15;

    // Experience
    svg += drawText(alignX, mY, "WORK EXPERIENCE", 6, primary, 'bold', anchor);
    mY += 12;
    
    svg += drawText(15, mY, profile.role, 5.5, textMain, 'bold');
    svg += drawText(195, mY, "2020 - Present", 4.5, primary, '500', 'end');
    mY += 6;
    svg += drawText(15, mY, profile.company, 5, textMuted, '500');
    mY += 8;
    svg += `<circle cx="17" cy="${mY - 1.5}" r="1" fill="${textMuted}"/>`;
    svg += drawText(22, mY, `Led a team of 12 professionals to successfully launch three major product initiatives.`, 4.5, textMuted);
    mY += 6;
    svg += `<circle cx="17" cy="${mY - 1.5}" r="1" fill="${textMuted}"/>`;
    svg += drawText(22, mY, `Reduced operational bottlenecks, improving overall team efficiency by 30%.`, 4.5, textMuted);
    mY += 15;

    svg += drawText(15, mY, `Junior ${profile.role}`, 5.5, textMain, 'bold');
    svg += drawText(195, mY, "2018 - 2020", 4.5, primary, '500', 'end');
    mY += 6;
    svg += drawText(15, mY, "InnovateTech Solutions", 5, textMuted, '500');
    mY += 8;
    svg += `<circle cx="17" cy="${mY - 1.5}" r="1" fill="${textMuted}"/>`;
    svg += drawText(22, mY, `Assisted in data analysis and reporting for key stakeholder presentations.`, 4.5, textMuted);
    mY += 15;

    // Education & Skills in two columns for bottom
    svg += drawText(15, mY, "EDUCATION", 6, primary, 'bold');
    svg += drawText(120, mY, "CORE SKILLS", 6, primary, 'bold');
    mY += 10;
    
    svg += drawText(15, mY, "Master of Business Administration", 5, textMain, 'bold');
    svg += drawText(120, mY, "• Strategic Planning", 4.5, textMuted);
    mY += 6;
    svg += drawText(15, mY, profile.school, 4.5, textMuted);
    svg += drawText(120, mY, "• Cross-functional Leadership", 4.5, textMuted);
    mY += 6;
    svg += drawText(15, mY, "2016 - 2018", 4, textMuted);
    svg += drawText(120, mY, "• Data-Driven Analysis", 4.5, textMuted);
  }

  if (styling.borders === 'solid') {
    svg += `<rect x="5" y="5" width="200" height="287" fill="none" stroke="${primary}" stroke-width="2"/>`;
  }

  svg += `</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
