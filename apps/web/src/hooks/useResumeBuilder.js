
import { useState, useCallback, useRef } from 'react';
import { toast } from 'sonner';

const defaultState = {
  name: 'Untitled Resume',
  template: 'modern',
  fullName: '',
  jobTitle: '',
  email: '',
  phone: '',
  location: '',
  summary: '',
  workExperience: [],
  education: [],
  skills: [],
  projects: [],
  certifications: [],
  languages: [],
  volunteerExperience: []
};

export const useResumeBuilder = () => {
  const [data, setData] = useState(defaultState);
  const [activeResumeId, setActiveResumeId] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const saveTimeoutRef = useRef(null);

  const updateField = useCallback((field, value) => {
    setData(prev => ({ ...prev, [field]: value }));
    setHasUnsavedChanges(true);
  }, []);

  const addArrayItem = useCallback((arrayField, itemTemplate) => {
    setData(prev => ({
      ...prev,
      [arrayField]: [...(prev[arrayField] || []), { id: Date.now().toString(), ...itemTemplate }]
    }));
    setHasUnsavedChanges(true);
  }, []);

  const updateArrayItem = useCallback((arrayField, id, field, value) => {
    setData(prev => ({
      ...prev,
      [arrayField]: prev[arrayField].map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    }));
    setHasUnsavedChanges(true);
  }, []);

  const removeArrayItem = useCallback((arrayField, id) => {
    setData(prev => ({
      ...prev,
      [arrayField]: prev[arrayField].filter(item => item.id !== id)
    }));
    setHasUnsavedChanges(true);
  }, []);

  const reorderArrayItem = useCallback((arrayField, startIndex, endIndex) => {
    setData(prev => {
      const result = Array.from(prev[arrayField]);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      return { ...prev, [arrayField]: result };
    });
    setHasUnsavedChanges(true);
  }, []);

  const resetForm = useCallback(() => {
    setData(defaultState);
    setActiveResumeId(null);
    setHasUnsavedChanges(false);
  }, []);

  const loadResume = useCallback((resumeData) => {
    setData({ ...defaultState, ...resumeData });
    setActiveResumeId(resumeData.id);
    setHasUnsavedChanges(false);
  }, []);

  return {
    data,
    activeResumeId,
    setActiveResumeId,
    isSaving,
    setIsSaving,
    hasUnsavedChanges,
    setHasUnsavedChanges,
    updateField,
    addArrayItem,
    updateArrayItem,
    removeArrayItem,
    reorderArrayItem,
    resetForm,
    loadResume,
    saveTimeoutRef
  };
};
