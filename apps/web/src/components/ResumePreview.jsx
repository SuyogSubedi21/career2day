
import React from 'react';
import { ModernTemplate, ClassicTemplate, MinimalistTemplate, CreativeTemplate } from './ResumeTemplates.jsx';

export default function ResumePreview({ data, template = 'modern' }) {
  const renderTemplate = () => {
    switch (template) {
      case 'modern': return <ModernTemplate data={data} />;
      case 'classic': return <ClassicTemplate data={data} />;
      case 'minimalist': return <MinimalistTemplate data={data} />;
      case 'creative': return <CreativeTemplate data={data} />;
      default: return <ModernTemplate data={data} />;
    }
  };

  return (
    <div id="resume-preview-content" className="resume-document transform-gpu transition-all duration-300 origin-top">
      {renderTemplate()}
    </div>
  );
}
