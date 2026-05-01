
import { useState, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { getTemplateById } from '@/data/templateData';

export const useTemplateManager = () => {
  const [selectedTemplateId, setSelectedTemplateId] = useLocalStorage('selectedTemplate', 'modern-clean');
  const [isPremium, setIsPremium] = useLocalStorage('isPremium', false);
  const [downloadCount, setDownloadCount] = useLocalStorage('downloadCount', 0);

  const selectedTemplate = getTemplateById(selectedTemplateId);

  const selectTemplate = useCallback((templateId) => {
    const template = getTemplateById(templateId);
    if (template.isPremium && !isPremium) {
      return false;
    }
    setSelectedTemplateId(templateId);
    return true;
  }, [isPremium, setSelectedTemplateId]);

  const unlockPremium = useCallback(() => {
    setIsPremium(true);
  }, [setIsPremium]);

  const incrementDownloadCount = useCallback(() => {
    setDownloadCount(prev => prev + 1);
  }, [setDownloadCount]);

  const canDownload = downloadCount === 0 || isPremium || !selectedTemplate.isPremium;

  return {
    selectedTemplate,
    selectedTemplateId,
    isPremium,
    downloadCount,
    selectTemplate,
    unlockPremium,
    incrementDownloadCount,
    canDownload
  };
};
