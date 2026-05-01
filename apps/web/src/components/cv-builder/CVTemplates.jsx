
import React from 'react';
import { cvTemplates } from '@/data/cvTemplatesData.js';

// --- Inline SVG Icons for PDF compatibility ---
const MailIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const PhoneIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const PinIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

// --- Helpers ---
const renderBullets = (text) => {
  if (!text) return null;
  
  if (typeof text === 'object' && text !== null && text.$$typeof === Symbol.for('react.element')) {
    return <div style={{ marginTop: '0.5rem', opacity: 0.9 }}>{text}</div>;
  }
  
  let bulletStrings = [];
  if (Array.isArray(text)) {
    bulletStrings = text.map(item => {
      if (typeof item === 'string') return item;
      if (item?.text) return item.text;
      if (item?.description) return item.description;
      return '';
    }).map(item => String(item).replace(/^[-*•]\s*/, '').trim()).filter(Boolean);
  } else if (typeof text === 'object' && text !== null) {
    let extractedText = text.text || text.description || '';
    bulletStrings = extractedText.split(/\n/).map(b => b.replace(/^[-*•]\s*/, '').trim()).filter(Boolean);
  } else if (typeof text === 'string') {
    bulletStrings = text.split(/\n/).map(b => b.replace(/^[-*•]\s*/, '').trim()).filter(Boolean);
  }
  
  if (bulletStrings.length === 0) return null;
  
  return (
    <ul style={{ margin: 0, paddingLeft: '1.25rem', marginTop: '0.5rem', listStyleType: 'disc' }}>
      {bulletStrings.map((bullet, idx) => (
        <li key={idx} style={{ marginBottom: '0.25rem' }}>{bullet}</li>
      ))}
    </ul>
  );
};

// --- Master Template Engine ---
const MasterTemplate = ({ cvData, config }) => {
  const { id, colorScheme, typography, layout, styling, sections, features, category } = config;
  
  const isPremium = category === 'Premium';
  const primaryColor = colorScheme.primary;
  const secondaryColor = colorScheme.secondary;
  const accentColor = colorScheme.accent;

  const isDarkCanvas = styling.backgrounds === 'dark';
  const pageBg = isDarkCanvas ? '#0f172a' : '#ffffff';
  const textMain = isDarkCanvas ? '#f8fafc' : '#1e293b';
  const textMuted = isDarkCanvas ? '#cbd5e1' : '#475569';

  // Layout calculations
  const isSidebarLayout = layout.type.includes('sidebar');
  const isLeftSidebar = layout.type === 'sidebar-left';
  
  const hasDarkSidebar = ['primary', 'colored'].includes(styling.sidebarBg);
  const sidebarBgColor = styling.sidebarBg === 'primary' ? primaryColor : (styling.sidebarBg === 'colored' ? secondaryColor : 'transparent');
  const isSidebarDarkText = styling.sidebarBg !== 'primary';
  
  const sbTextMain = isSidebarDarkText ? '#1e293b' : '#ffffff';
  const sbTextMuted = isSidebarDarkText ? '#475569' : 'rgba(255,255,255,0.8)';
  const sbIconColor = isSidebarDarkText ? primaryColor : accentColor;

  const isHeaderColored = styling.headerStyle === 'colored';
  const headerBg = isHeaderColored ? primaryColor : (styling.headerStyle === 'split' ? secondaryColor : 'transparent');
  const headerTextMain = isHeaderColored ? '#ffffff' : primaryColor;
  const headerTextMuted = isHeaderColored ? 'rgba(255,255,255,0.85)' : '#475569';

  const containerStyle = {
    fontFamily: typography.fontFamily,
    backgroundColor: pageBg,
    color: textMain,
    minHeight: '297mm',
    width: '210mm',
    boxSizing: 'border-box',
    position: 'relative',
    margin: '0 auto',
    overflow: 'hidden',
    boxShadow: styling.shadows === 'sm' ? '0 4px 15px rgba(0, 0, 0, 0.05)' : 'none',
    border: styling.borders === 'solid' ? `8px solid ${primaryColor}` : styling.borders === 'double' ? `12px double ${primaryColor}` : 'none'
  };

  // --- Reusable Renderers ---
  const ContactItem = ({ icon, text, color, iconColor }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem', fontSize: '0.85rem', color: color, fontWeight: '500' }}>
      <span style={{ color: iconColor || color, display: 'flex', alignItems: 'center' }}>{icon}</span>
      <span>{text}</span>
    </div>
  );

  const renderPhoto = (size = '130px', align = 'center') => {
    if (!features?.hasPhotoPlaceholder || !cvData?.photo_preview) return null;
    return (
      <div style={{ display: 'flex', justifyContent: align, marginBottom: '1.5rem' }}>
        <img src={cvData.photo_preview} alt="Profile" style={{
          width: size, height: size, borderRadius: '50%', objectFit: 'cover',
          border: `4px solid ${isHeaderColored || !isSidebarDarkText ? '#ffffff' : primaryColor}`,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }} />
      </div>
    );
  };

  const renderSectionTitle = (title, color, isSidebar = false) => {
    const style = {
      fontSize: isSidebar ? '1.1rem' : typography.sizes.section,
      fontWeight: '800',
      color: color,
      textTransform: styling.sectionTitles === 'uppercase-tracking' ? 'uppercase' : 'none',
      letterSpacing: styling.sectionTitles === 'uppercase-tracking' ? '0.08em' : 'normal',
      marginBottom: '1.25rem',
      paddingBottom: styling.sectionTitles === 'underline' || isSidebar ? '0.5rem' : '0',
      borderBottom: styling.sectionTitles === 'underline' || isSidebar ? `2px solid ${isSidebar ? color + '40' : secondaryColor}` : 'none',
      display: styling.sectionTitles === 'pill' ? 'inline-block' : 'block',
      backgroundColor: styling.sectionTitles === 'pill' ? secondaryColor : 'transparent',
      padding: styling.sectionTitles === 'pill' ? '0.35rem 1.25rem' : (styling.sectionTitles === 'underline' || isSidebar ? '0 0 0.5rem 0' : '0'),
      borderRadius: styling.sectionTitles === 'pill' ? '9999px' : '0'
    };
    return <h3 style={style}>{title}</h3>;
  };

  const renderTimelineItem = (title, subtitle, date, description, tColor, mColor) => (
    <div style={{ position: 'relative', paddingLeft: '1.25rem', paddingBottom: '1.25rem', borderLeft: `2px solid ${accentColor}50` }}>
      <div style={{ position: 'absolute', left: '-5px', top: '6px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: accentColor, border: '2px solid #fff' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
        <h4 style={{ fontWeight: '800', fontSize: '1.05rem', color: tColor }}>{title}</h4>
        {date && <span style={{ fontSize: '0.85rem', fontWeight: '700', color: isSidebarDarkText ? primaryColor : accentColor }}>{date}</span>}
      </div>
      {subtitle && <div style={{ fontSize: '0.95rem', fontWeight: '600', color: mColor, marginBottom: '0.5rem' }}>{subtitle}</div>}
      {description && <div style={{ fontSize: '0.9rem', lineHeight: '1.6', color: mColor }}>{renderBullets(description)}</div>}
    </div>
  );

  const renderStandardItem = (title, subtitle, date, description, tColor, mColor) => (
    <div style={{ marginBottom: '1.25rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
        <h4 style={{ fontWeight: '800', fontSize: '1.05rem', color: tColor }}>{title}</h4>
        {date && <span style={{ fontSize: '0.85rem', fontWeight: '700', color: primaryColor }}>{date}</span>}
      </div>
      {subtitle && <div style={{ fontSize: '0.95rem', fontWeight: '600', color: mColor, marginBottom: '0.5rem' }}>{subtitle}</div>}
      {description && <div style={{ fontSize: '0.9rem', lineHeight: '1.6', color: mColor }}>{renderBullets(description)}</div>}
    </div>
  );

  const renderSkills = (skills, isSidebar, tColor) => {
    if (!skills?.length) return null;
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {skills.map((skill, idx) => (
          <span key={idx} style={{
            backgroundColor: isSidebar ? (isSidebarDarkText ? secondaryColor : 'rgba(255,255,255,0.15)') : secondaryColor,
            color: isSidebar ? tColor : primaryColor,
            padding: '0.35rem 0.85rem',
            borderRadius: '6px',
            fontSize: '0.85rem',
            fontWeight: '600',
            border: isSidebar && !isSidebarDarkText ? `1px solid rgba(255,255,255,0.2)` : `1px solid ${primaryColor}15`
          }}>
            {skill.name || skill}
          </span>
        ))}
      </div>
    );
  };

  const renderSection = (sectionName, isSidebar) => {
    const textColor = isSidebar ? sbTextMain : textMain;
    const mutedColor = isSidebar ? sbTextMuted : textMuted;
    const useTimeline = isPremium && !isSidebar;

    switch (sectionName) {
      case 'summary':
        if (!cvData?.professionalSummary) return null;
        return (
          <div key="summary" style={{ marginBottom: '2rem' }}>
            {renderSectionTitle('Professional Summary', isSidebar ? textColor : primaryColor, isSidebar)}
            <div style={{ fontSize: '0.95rem', lineHeight: '1.7', color: mutedColor }}>{cvData.professionalSummary}</div>
          </div>
        );
        
      case 'experience':
        if (!cvData?.experience?.length) return null;
        return (
          <div key="experience" style={{ marginBottom: '2rem' }}>
            {renderSectionTitle('Experience', isSidebar ? textColor : primaryColor, isSidebar)}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {cvData.experience.map((exp, idx) => (
                <div key={idx}>
                  {useTimeline 
                    ? renderTimelineItem(exp.position, exp.company, exp.duration, exp.description, textColor, mutedColor)
                    : renderStandardItem(exp.position, exp.company, exp.duration, exp.description, textColor, mutedColor)}
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'education':
        if (!cvData?.education?.length) return null;
        return (
          <div key="education" style={{ marginBottom: '2rem' }}>
            {renderSectionTitle('Education', isSidebar ? textColor : primaryColor, isSidebar)}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {cvData.education.map((edu, idx) => {
                const subtitle = edu.field ? `${edu.degree} in ${edu.field}` : edu.degree;
                return (
                  <div key={idx}>
                    {useTimeline 
                      ? renderTimelineItem(edu.school, subtitle, edu.year, null, textColor, mutedColor)
                      : renderStandardItem(edu.school, subtitle, edu.year, null, textColor, mutedColor)}
                  </div>
                );
              })}
            </div>
          </div>
        );
        
      case 'projects':
        if (!cvData?.projects?.length) return null;
        return (
          <div key="projects" style={{ marginBottom: '2rem' }}>
            {renderSectionTitle('Projects', isSidebar ? textColor : primaryColor, isSidebar)}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {cvData.projects.map((proj, idx) => (
                <div key={idx}>
                  {useTimeline 
                    ? renderTimelineItem(proj.name, null, proj.duration, proj.description, textColor, mutedColor)
                    : renderStandardItem(proj.name, null, proj.duration, proj.description, textColor, mutedColor)}
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'skills':
        if (!cvData?.skills?.length) return null;
        return (
          <div key="skills" style={{ marginBottom: '2rem' }}>
            {renderSectionTitle('Skills', isSidebar ? textColor : primaryColor, isSidebar)}
            {renderSkills(cvData.skills, isSidebar, textColor)}
          </div>
        );
        
      case 'certifications':
        if (!cvData?.certifications?.length) return null;
        return (
          <div key="certifications" style={{ marginBottom: '2rem' }}>
            {renderSectionTitle('Certifications', isSidebar ? textColor : primaryColor, isSidebar)}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {cvData.certifications.map((cert, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '0.95rem', color: textColor }}>{cert.name}</div>
                    <div style={{ fontSize: '0.85rem', color: mutedColor, fontWeight: '500' }}>{cert.issuer}</div>
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: '600', color: isSidebar && !isSidebarDarkText ? accentColor : primaryColor }}>{cert.year}</span>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'languages':
        if (!cvData?.languages?.length) return null;
        return (
          <div key="languages" style={{ marginBottom: '2rem' }}>
            {renderSectionTitle('Languages', isSidebar ? textColor : primaryColor, isSidebar)}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {cvData.languages.map((lang, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: '700', fontSize: '0.9rem', color: textColor }}>{lang.name}</span>
                  <span style={{ fontSize: '0.85rem', color: mutedColor, fontWeight: '500' }}>{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'volunteer':
        if (!cvData?.volunteer?.length) return null;
        return (
          <div key="volunteer" style={{ marginBottom: '2rem' }}>
            {renderSectionTitle('Volunteer', isSidebar ? textColor : primaryColor, isSidebar)}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {cvData.volunteer.map((vol, idx) => (
                <div key={idx}>
                  {renderStandardItem(vol.role, vol.organization, vol.duration, vol.description, textColor, mutedColor)}
                </div>
              ))}
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  // --- Layout Renderers ---
  
  if (!isSidebarLayout) {
    // SINGLE COLUMN LAYOUT
    return (
      <div style={containerStyle}>
        <div style={{ padding: '3rem 3rem 2rem 3rem', backgroundColor: headerBg, color: headerTextMain, borderBottom: `4px solid ${accentColor}` }}>
          <div style={{ display: 'flex', justifyContent: layout.headerAlign === 'center' ? 'center' : 'space-between', alignItems: 'center', flexDirection: layout.headerAlign === 'center' ? 'column' : 'row', gap: '2rem' }}>
            {layout.headerAlign !== 'right' && renderPhoto('110px', 'flex-start')}
            <div style={{ textAlign: layout.headerAlign, flex: 1 }}>
              <h1 style={{ fontSize: typography.sizes.header, fontWeight: '900', margin: 0, letterSpacing: '-0.03em', lineHeight: '1.1' }}>{cvData?.personalInfo?.fullName}</h1>
              <h2 style={{ fontSize: '1.4rem', fontWeight: '600', color: isHeaderColored ? 'rgba(255,255,255,0.9)' : accentColor, marginTop: '0.5rem' }}>{cvData?.personalInfo?.jobTitle}</h2>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.25rem', justifyContent: layout.headerAlign === 'center' ? 'center' : 'flex-start', flexWrap: 'wrap', fontSize: '0.95rem' }}>
                {cvData?.personalInfo?.email && <ContactItem icon={MailIcon} text={cvData.personalInfo.email} color={headerTextMuted} iconColor={isHeaderColored ? '#ffffff' : primaryColor} />}
                {cvData?.personalInfo?.phone && <ContactItem icon={PhoneIcon} text={cvData.personalInfo.phone} color={headerTextMuted} iconColor={isHeaderColored ? '#ffffff' : primaryColor} />}
                {cvData?.personalInfo?.location && <ContactItem icon={PinIcon} text={cvData.personalInfo.location} color={headerTextMuted} iconColor={isHeaderColored ? '#ffffff' : primaryColor} />}
              </div>
            </div>
            {layout.headerAlign === 'right' && renderPhoto('110px', 'flex-end')}
          </div>
        </div>
        <div style={{ padding: '3rem' }}>
          {sections.map(s => renderSection(s, false))}
        </div>
      </div>
    );
  }

  // SIDEBAR LAYOUT
  const sideSectionNames = ['skills', 'certifications', 'languages'];
  const sideSectionsToRender = sections.filter(s => sideSectionNames.includes(s));
  const mainSectionsToRender = sections.filter(s => !sideSectionNames.includes(s));

  const Sidebar = () => (
    <div style={{ width: '34%', backgroundColor: sidebarBgColor, padding: '3rem 2rem', color: sbTextMain, borderRight: isLeftSidebar && isSidebarDarkText ? 'none' : `1px solid ${secondaryColor}`, borderLeft: !isLeftSidebar && isSidebarDarkText ? 'none' : `1px solid ${secondaryColor}` }}>
      {renderPhoto('140px', 'center')}
      
      <div style={{ marginBottom: '2.5rem' }}>
        {renderSectionTitle('Contact', sbTextMain, true)}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {cvData?.personalInfo?.email && <ContactItem icon={MailIcon} text={cvData.personalInfo.email} color={sbTextMuted} iconColor={sbIconColor} />}
          {cvData?.personalInfo?.phone && <ContactItem icon={PhoneIcon} text={cvData.personalInfo.phone} color={sbTextMuted} iconColor={sbIconColor} />}
          {cvData?.personalInfo?.location && <ContactItem icon={PinIcon} text={cvData.personalInfo.location} color={sbTextMuted} iconColor={sbIconColor} />}
        </div>
      </div>

      {sideSectionsToRender.map(s => renderSection(s, true))}
    </div>
  );

  const MainArea = () => (
    <div style={{ width: '66%', padding: '3rem' }}>
      <div style={{ marginBottom: '2.5rem', borderBottom: `2px solid ${secondaryColor}`, paddingBottom: '1.5rem' }}>
        <h1 style={{ fontSize: typography.sizes.header, fontWeight: '900', color: primaryColor, margin: 0, letterSpacing: '-0.03em', lineHeight: '1.1' }}>{cvData?.personalInfo?.fullName}</h1>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: accentColor, marginTop: '0.5rem' }}>{cvData?.personalInfo?.jobTitle}</h2>
      </div>
      
      {mainSectionsToRender.map(s => renderSection(s, false))}
    </div>
  );

  return (
    <div style={{ ...containerStyle, display: 'flex', padding: 0 }}>
      {isLeftSidebar && <Sidebar />}
      <MainArea />
      {!isLeftSidebar && <Sidebar />}
    </div>
  );
};

// --- Exports ---
const createTemplateComponent = (id) => {
  const config = cvTemplates.find(t => t.id === id) || cvTemplates[0];
  const Component = ({ cvData }) => <MasterTemplate cvData={cvData} config={config} />;
  Component.displayName = id;
  return Component;
};

// Export all templates dynamically for the builder
export const TemplatesConfig = cvTemplates.map(t => ({
  id: t.id,
  component: createTemplateComponent(t.id)
}));

// Named exports for explicit imports if needed elsewhere
export const ModernClean = createTemplateComponent('ModernClean');
export const ProfessionalClassic = createTemplateComponent('ProfessionalClassic');
export const CreativeBold = createTemplateComponent('CreativeBold');
export const TechDeveloper = createTemplateComponent('TechFocus');
export const PremiumExecutive = createTemplateComponent('ExecutiveElite');
export const PremiumMinimal = createTemplateComponent('MinimalistPro');
