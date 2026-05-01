
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ZoomIn, ZoomOut, Printer, Download, Share2, Maximize2, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  ModernTemplate, MinimalTemplate, StudentTemplate, CorporateTemplate, ExecutiveTemplate, 
  CreativeTemplate, TechTemplate, DataTemplate, DesignerTemplate, MarketingTemplate, 
  ManagerTemplate, AcademicTemplate, ATSProTemplate, ProfessionalPlusTemplate, PremiumEliteTemplate 
} from './CVTemplates.jsx';

const templateMap = {
  'modern': ModernTemplate,
  'minimal': MinimalTemplate,
  'student': StudentTemplate,
  'corporate': CorporateTemplate,
  'executive': ExecutiveTemplate,
  'creative': CreativeTemplate,
  'tech': TechTemplate,
  'data': DataTemplate,
  'designer': DesignerTemplate,
  'marketing': MarketingTemplate,
  'manager': ManagerTemplate,
  'academic': AcademicTemplate,
  'ats-pro': ATSProTemplate,
  'professional-plus': ProfessionalPlusTemplate,
  'premium-elite': PremiumEliteTemplate
};

export default function CVPreviewPanel({ cvData, selectedTemplate, isPremiumUnlocked, onDownload }) {
  const [zoom, setZoom] = useState(100);
  
  const TemplateComponent = templateMap[selectedTemplate.id] || ModernTemplate;
  const isLocked = selectedTemplate.category === 'Premium' && !isPremiumUnlocked;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col h-full bg-slate-200/50 dark:bg-slate-900 relative">
      {/* Toolbar */}
      <div className="h-14 border-b border-border/50 bg-background/80 backdrop-blur-md flex items-center justify-between px-4 shrink-0 z-20">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setZoom(z => Math.max(50, z - 10))}><ZoomOut className="w-4 h-4" /></Button>
          <span className="text-sm font-medium w-12 text-center">{zoom}%</span>
          <Button variant="ghost" size="icon" onClick={() => setZoom(z => Math.min(150, z + 10))}><ZoomIn className="w-4 h-4" /></Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={handlePrint} title="Print"><Printer className="w-4 h-4" /></Button>
          <Button variant="ghost" size="icon" title="Share"><Share2 className="w-4 h-4" /></Button>
          <Button variant="ghost" size="icon" title="Full Screen"><Maximize2 className="w-4 h-4" /></Button>
          <Button onClick={onDownload} size="sm" className="ml-2 shadow-md shadow-primary/20" disabled={isLocked}>
            <Download className="w-4 h-4 mr-2" /> Download
          </Button>
        </div>
      </div>

      {/* Preview Area */}
      <div className="flex-1 overflow-auto custom-scrollbar p-8 flex justify-center items-start relative">
        <div 
          className="transition-transform duration-200 origin-top shadow-2xl bg-white relative"
          style={{ transform: `scale(${zoom / 100})` }}
          id="cv-preview-content"
        >
          <TemplateComponent cvData={cvData} />
          
          {/* Premium Lock Overlay */}
          {isLocked && (
            <div className="absolute inset-0 bg-background/60 backdrop-blur-sm flex flex-col items-center justify-center z-50">
              <div className="glass-card p-8 rounded-3xl text-center max-w-md shadow-2xl border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Premium Template</h3>
                <p className="text-muted-foreground mb-6">
                  Unlock {selectedTemplate.name} and 11 other premium templates to stand out from the crowd.
                </p>
                <Button asChild size="lg" className="w-full rounded-full shadow-lg shadow-primary/20">
                  <Link to="/pricing">Upgrade to Premium</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
