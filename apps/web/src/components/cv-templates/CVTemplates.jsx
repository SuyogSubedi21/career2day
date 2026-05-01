
import React from 'react';
import { cvTemplates } from '@/data/cvTemplatesData.js';

// Helper to render bullet points - strictly handles string, array, React nodes, and null/undefined safely
const renderBullets = (text) => {
  if (!text) return null;
  
  if (typeof text === 'object' && text !== null && text.$$typeof === Symbol.for('react.element')) {
    return <div className="mt-2 text-muted-foreground/80">{text}</div>;
  }
  
  let bulletStrings = [];
  
  if (Array.isArray(text)) {
    bulletStrings = text.map(item => {
      if (typeof item === 'string') return item;
      if (typeof item === 'object' && item !== null && item.text) return item.text;
      if (typeof item === 'object' && item !== null && item.description) return item.description;
      return '';
    })
    .map(item => String(item).replace(/^[-*•]\s*/, '').trim())
    .filter(item => item.length > 0);
  }
  else if (typeof text === 'object' && text !== null) {
    let extractedText = '';
    if (text.text && typeof text.text === 'string') {
      extractedText = text.text;
    } else if (text.description && typeof text.description === 'string') {
      extractedText = text.description;
    } else {
      return null;
    }
    
    bulletStrings = extractedText
      .split(/\n/)
      .map(bullet => bullet.replace(/^[-*•]\s*/, '').trim())
      .filter(bullet => bullet.length > 0);
  }
  else if (typeof text === 'string') {
    bulletStrings = text
      .split(/\n/)
      .map(bullet => bullet.replace(/^[-*•]\s*/, '').trim())
      .filter(bullet => bullet.length > 0);
  } 
  else {
    return null;
  }
  
  if (bulletStrings.length === 0) return null;
  
  return (
    <ul className="list-disc pl-5 mt-2 space-y-1">
      {bulletStrings.map((bullet, idx) => (
        <li key={idx}>{bullet}</li>
      ))}
    </ul>
  );
};

// Master Template Engine that handles all variations based on config
const MasterTemplate = ({ cvData, config }) => {
  const { id, colorScheme, typography, layout, styling, sections, features } = config;
  
  const formatColor = (hslString) => `hsl(${hslString})`;
  
  const primaryColor = formatColor(colorScheme.primary);
  const secondaryColor = formatColor(colorScheme.secondary);
  const accentColor = formatColor(colorScheme.accent);

  const containerStyle = {
    fontFamily: typography.fontFamily,
    padding: layout.padding,
    backgroundColor: styling.backgrounds === 'gradient' ? '#fdfcfb' : '#ffffff',
    backgroundImage: styling.backgrounds === 'gradient' ? 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)' : 'none',
    color: '#1a1a1a',
    minHeight: '297mm',
    width: '210mm',
    boxSizing: 'border-box',
    position: 'relative',
    margin: '0 auto',
    overflow: 'hidden',
    boxShadow: styling.shadows === 'none' ? 'none' : styling.shadows === 'sm' ? '0 1px 3px rgba(0,0,0,0.1)' : styling.shadows === 'md' ? '0 4px 6px rgba(0,0,0,0.1)' : styling.shadows === 'lg' ? '0 10px 15px rgba(0,0,0,0.1)' : '0 20px 25px rgba(0,0,0,0.1)',
    border: styling.borders === 'none' ? 'none' : styling.borders.includes('solid') ? `4px solid ${primaryColor}` : styling.borders.includes('dashed') ? `2px dashed ${primaryColor}` : styling.borders.includes('double') ? `4px double ${primaryColor}` : 'none'
  };

  const headerStyle = {
    fontSize: typography.sizes.header,
    color: id.includes('Minimal') || id.includes('Classic') ? '#000' : primaryColor,
    fontWeight: 'bold',
    marginBottom: '0.25rem',
    textTransform: id.includes('Executive') || id.includes('Elite') ? 'uppercase' : 'none',
    letterSpacing: id.includes('Executive') ? '0.05em' : 'normal'
  };

  const sectionTitleStyle = {
    fontSize: typography.sizes.section,
    color: id.includes('Minimal') ? '#000' : primaryColor,
    fontWeight: 'bold',
    borderBottom: styling.borders.includes('none') && !id.includes('Creative') ? `2px solid ${secondaryColor}` : id.includes('Tech') ? `1px solid ${primaryColor}` : 'none',
    paddingBottom: '0.25rem',
    marginBottom: '1rem',
    textTransform: id.includes('Modern') || id.includes('Executive') ? 'uppercase' : 'none',
    letterSpacing: id.includes('Modern') ? '0.05em' : 'normal'
  };

  const bodyStyle = {
    fontSize: typography.sizes.body,
    lineHeight: '1.6',
    color: '#333'
  };

  const renderPhoto = () => {
    if (!features?.hasPhotoPlaceholder || !cvData.photo_preview) return null;
    
    const size = cvData.photo_size || 100;
    const position = cvData.photo_position || 'top-right';
    
    const photoStyle = {
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: position === 'circular' ? '50%' : '8px',
      objectFit: 'cover',
      border: `2px solid ${secondaryColor}`,
      flexShrink: 0
    };

    return <img src={cvData.photo_preview} alt="Profile" style={photoStyle} />;
  };

  const renderHeader = () => (
    <header className={`mb-8 flex ${layout.sidebarLeft ? 'text-left flex-col' : 'text-center flex-col items-center'}`} style={{ borderBottom: id.includes('Professional') ? `2px solid ${primaryColor}` : 'none', paddingBottom: id.includes('Professional') ? '1.5rem' : '0' }}>
      <div className={`flex w-full ${layout.sidebarLeft ? 'justify-between items-start' : 'justify-center items-center flex-col-reverse gap-4'}`}>
        <div className={layout.sidebarLeft ? 'flex-grow' : 'text-center'}>
          <h1 style={headerStyle}>{cvData.personalInfo?.fullName}</h1>
          <h2 style={{ fontSize: '1.25rem', color: id.includes('Minimal') ? '#666' : accentColor, fontWeight: '500', marginBottom: '0.75rem' }}>{cvData.personalInfo?.jobTitle}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: typography.sizes.body, color: '#555', justifyContent: layout.sidebarLeft ? 'flex-start' : 'center' }}>
            {cvData.personalInfo?.email && <span>{cvData.personalInfo.email}</span>}
            {cvData.personalInfo?.phone && <span>• {cvData.personalInfo.phone}</span>}
            {cvData.personalInfo?.location && <span>• {cvData.personalInfo.location}</span>}
          </div>
        </div>
        {renderPhoto()}
      </div>
    </header>
  );

  const renderSection = (sectionName) => {
    switch (sectionName) {
      case 'summary':
        if (!cvData.professionalSummary) return null;
        return (
          <div key="summary" style={{ marginBottom: layout.spacing }}>
            <h3 style={sectionTitleStyle}>Professional Summary</h3>
            <div style={bodyStyle}>{typeof cvData.professionalSummary === 'string' ? cvData.professionalSummary : (cvData.professionalSummary.$$typeof ? cvData.professionalSummary : '')}</div>
          </div>
        );
      case 'experience':
        if (!cvData.experience?.length) return null;
        return (
          <div key="experience" style={{ marginBottom: layout.spacing }}>
            <h3 style={sectionTitleStyle}>Experience</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {cvData.experience.map((exp, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
                    <h4 style={{ fontWeight: 'bold', fontSize: '1rem', color: '#111' }}>{exp.position}</h4>
                    <span style={{ fontSize: '0.85rem', color: '#666', fontWeight: '500' }}>{exp.duration}</span>
                  </div>
                  <div style={{ fontSize: '0.9rem', color: primaryColor, fontWeight: '500', marginBottom: '0.5rem' }}>{exp.company}</div>
                  <div style={bodyStyle}>{renderBullets(exp.description)}</div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'education':
        if (!cvData.education?.length) return null;
        return (
          <div key="education" style={{ marginBottom: layout.spacing }}>
            <h3 style={sectionTitleStyle}>Education</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {cvData.education.map((edu, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
                    <h4 style={{ fontWeight: 'bold', fontSize: '1rem', color: '#111' }}>{edu.school}</h4>
                    <span style={{ fontSize: '0.85rem', color: '#666', fontWeight: '500' }}>{edu.year}</span>
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#444', marginBottom: '0.25rem' }}>
                    {edu.degree} {edu.field && typeof edu.field === 'string' ? `in ${edu.field}` : edu.field}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'skills':
        if (!cvData.skills?.length) return null;
        return (
          <div key="skills" style={{ marginBottom: layout.spacing }}>
            <h3 style={sectionTitleStyle}>Skills</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {cvData.skills.map((skill, idx) => (
                <span key={idx} style={{ 
                  backgroundColor: id.includes('Minimal') ? 'transparent' : secondaryColor, 
                  color: id.includes('Minimal') ? '#333' : primaryColor,
                  padding: id.includes('Minimal') ? '0' : '0.25rem 0.75rem',
                  borderRadius: '4px',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                  border: id.includes('Minimal') ? 'none' : `1px solid ${primaryColor}33`
                }}>
                  {skill.name} {id.includes('Minimal') && idx < cvData.skills.length - 1 ? '•' : ''}
                </span>
              ))}
            </div>
          </div>
        );
      case 'projects':
        if (!cvData.projects?.length) return null;
        return (
          <div key="projects" style={{ marginBottom: layout.spacing }}>
            <h3 style={sectionTitleStyle}>Projects</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {cvData.projects.map((proj, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
                    <h4 style={{ fontWeight: 'bold', fontSize: '1rem', color: '#111' }}>{proj.name}</h4>
                    <span style={{ fontSize: '0.85rem', color: '#666', fontWeight: '500' }}>{proj.duration}</span>
                  </div>
                  <div style={bodyStyle}>{renderBullets(proj.description)}</div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'certifications':
        if (!cvData.certifications?.length) return null;
        return (
          <div key="certifications" style={{ marginBottom: layout.spacing }}>
            <h3 style={sectionTitleStyle}>Certifications</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {cvData.certifications.map((cert, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '0.95rem', color: '#111' }}>{cert.name}</div>
                    <div style={{ fontSize: '0.85rem', color: '#555' }}>{cert.issuer}</div>
                  </div>
                  <span style={{ fontSize: '0.85rem', color: '#666' }}>{cert.year}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 'languages':
        if (!cvData.languages?.length) return null;
        return (
          <div key="languages" style={{ marginBottom: layout.spacing }}>
            <h3 style={sectionTitleStyle}>Languages</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '0.5rem' }}>
              {cvData.languages.map((lang, idx) => (
                <div key={idx} style={{ fontSize: '0.9rem' }}>
                  <span style={{ fontWeight: 'bold', color: '#333' }}>{lang.name}</span>
                  <span style={{ color: '#666', marginLeft: '0.5rem' }}>({lang.proficiency})</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 'volunteer':
        if (!cvData.volunteer?.length) return null;
        return (
          <div key="volunteer" style={{ marginBottom: layout.spacing }}>
            <h3 style={sectionTitleStyle}>Volunteer Experience</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {cvData.volunteer.map((vol, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
                    <h4 style={{ fontWeight: 'bold', fontSize: '1rem', color: '#111' }}>{vol.role}</h4>
                    <span style={{ fontSize: '0.85rem', color: '#666', fontWeight: '500' }}>{vol.duration}</span>
                  </div>
                  <div style={{ fontSize: '0.9rem', color: primaryColor, fontWeight: '500', marginBottom: '0.5rem' }}>{vol.organization}</div>
                  <div style={bodyStyle}>{renderBullets(vol.description)}</div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (layout.twoColumn) {
    const mainSections = sections.filter(s => ['summary', 'experience', 'projects', 'volunteer'].includes(s));
    const sideSections = sections.filter(s => ['skills', 'education', 'certifications', 'languages'].includes(s));
    
    const sidebarWrapperStyle = id.includes('Creative') || id.includes('Designer') ? {
      backgroundColor: secondaryColor,
      padding: '2.5rem 1.5rem',
      height: '100%'
    } : {
      padding: layout.sidebarLeft ? '0 1.5rem 0 0' : '0 0 0 1.5rem',
      borderRight: layout.sidebarLeft ? `1px solid ${secondaryColor}` : 'none',
      borderLeft: !layout.sidebarLeft ? `1px solid ${secondaryColor}` : 'none',
    };

    return (
      <div className="cv-document" style={containerStyle}>
        {!layout.sidebarLeft && renderHeader()}
        <div style={{ display: 'flex', gap: id.includes('Creative') ? '0' : '2rem', height: '100%' }}>
          
          {layout.sidebarLeft && (
            <div style={{ width: '35%', ...sidebarWrapperStyle }}>
              {id.includes('Creative') && renderHeader()}
              {sideSections.map(s => renderSection(s))}
            </div>
          )}
          
          <div style={{ width: layout.sidebarLeft ? '65%' : '65%', padding: id.includes('Creative') ? '2.5rem' : '0' }}>
            {layout.sidebarLeft && !id.includes('Creative') && renderHeader()}
            {mainSections.map(s => renderSection(s))}
          </div>

          {!layout.sidebarLeft && (
            <div style={{ width: '35%', ...sidebarWrapperStyle }}>
              {sideSections.map(s => renderSection(s))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="cv-document" style={containerStyle}>
      {renderHeader()}
      {sections.map(s => renderSection(s))}
    </div>
  );
};

const createTemplateComponent = (id) => {
  const config = cvTemplates.find(t => t.id === id) || cvTemplates[0];
  const Component = ({ cvData }) => <MasterTemplate cvData={cvData} config={config} />;
  Component.displayName = id;
  return Component;
};

// Export all 24 templates dynamically
export const TemplatesConfig = cvTemplates.map(t => ({
  id: t.id,
  component: createTemplateComponent(t.id)
}));

// Named exports for backward compatibility
export const ModernClean = createTemplateComponent('ModernClean');
export const ProfessionalClassic = createTemplateComponent('ProfessionalClassic');
export const CreativeBold = createTemplateComponent('CreativeBold');
export const TechDeveloper = createTemplateComponent('TechDeveloper');
export const PremiumExecutive = createTemplateComponent('PremiumExecutive');
export const PremiumMinimal = createTemplateComponent('PremiumMinimal');
export const ModernBlue = createTemplateComponent('ModernBlue');
export const CreativeRed = createTemplateComponent('CreativeRed');
export const TechAdvanced = createTemplateComponent('TechAdvanced');
export const DesignerPortfolio = createTemplateComponent('DesignerPortfolio');
export const AcademicScholar = createTemplateComponent('AcademicScholar');
export const StartupDynamic = createTemplateComponent('StartupDynamic');
export const ConsultantPro = createTemplateComponent('ConsultantPro');
export const HealthcareSpecialist = createTemplateComponent('HealthcareSpecialist');
export const FinanceExpert = createTemplateComponent('FinanceExpert');
export const MarketingPro = createTemplateComponent('MarketingPro');
export const SalesLeader = createTemplateComponent('SalesLeader');
export const HRProfessional = createTemplateComponent('HRProfessional');
export const EducationSpecialist = createTemplateComponent('EducationSpecialist');
export const EngineeringPro = createTemplateComponent('EngineeringPro');
export const CreativeAgency = createTemplateComponent('CreativeAgency');
export const LegalCounsel = createTemplateComponent('LegalCounsel');
export const NonprofitLeader = createTemplateComponent('NonprofitLeader');
export const LuxuryBrand = createTemplateComponent('LuxuryBrand');
