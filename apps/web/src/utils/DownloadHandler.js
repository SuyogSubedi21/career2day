
import { exportElementToPdf, getCvExportElement } from '@/utils/exportPdf.js';

export const downloadResume = async (resumeData, templateName, onDownloadComplete) => {
  const name = resumeData.name || resumeData.personalInfo?.fullName || 'Resume';
  const safeName = String(name).trim().replace(/\s+/g, '-');
  await exportElementToPdf(getCvExportElement(), `${safeName}-${templateName}.pdf`);
  if (onDownloadComplete) {
    onDownloadComplete();
  }
};

export const canUserDownload = (downloadCount, isPremium, isTemplatePremium) => {
  if (downloadCount === 0) return true;
  if (isPremium) return true;
  if (!isTemplatePremium) return true;
  return false;
};
