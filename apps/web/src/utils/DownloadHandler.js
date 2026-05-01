
export const downloadResume = (resumeData, templateName, onDownloadComplete) => {
  const originalTitle = document.title;
  document.title = `${resumeData.name || 'Resume'} - ${templateName}`;

  setTimeout(() => {
    window.print();
    
    setTimeout(() => {
      document.title = originalTitle;
      if (onDownloadComplete) {
        onDownloadComplete();
      }
    }, 500);
  }, 100);
};

export const canUserDownload = (downloadCount, isPremium, isTemplatePremium) => {
  if (downloadCount === 0) return true;
  if (isPremium) return true;
  if (!isTemplatePremium) return true;
  return false;
};
