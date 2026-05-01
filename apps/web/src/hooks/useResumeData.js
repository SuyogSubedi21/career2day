
import { useState, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

const initialResumeData = {
  name: '',
  title: '',
  email: '',
  phone: '',
  location: '',
  summary: '',
  skills: [],
  experience: [],
  education: [],
  projects: [],
  certifications: []
};

export const useResumeData = () => {
  const [resumeData, setResumeData] = useLocalStorage('resumeData', initialResumeData);
  const [errors, setErrors] = useState({});

  const updateField = useCallback((field, value) => {
    setResumeData(prev => ({
      ...prev,
      [field]: value
    }));
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  }, [setResumeData, errors]);

  const addArrayItem = useCallback((field, item) => {
    setResumeData(prev => ({
      ...prev,
      [field]: [...prev[field], item]
    }));
  }, [setResumeData]);

  const updateArrayItem = useCallback((field, index, item) => {
    setResumeData(prev => ({
      ...prev,
      [field]: prev[field].map((existingItem, i) => i === index ? item : existingItem)
    }));
  }, [setResumeData]);

  const removeArrayItem = useCallback((field, index) => {
    setResumeData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  }, [setResumeData]);

  const resetData = useCallback(() => {
    setResumeData(initialResumeData);
    setErrors({});
  }, [setResumeData]);

  return {
    resumeData,
    errors,
    setErrors,
    updateField,
    addArrayItem,
    updateArrayItem,
    removeArrayItem,
    resetData
  };
};
