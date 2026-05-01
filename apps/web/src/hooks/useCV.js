
import { useState, useCallback, useRef, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient.js';
import { toast } from 'sonner';

export function useCV(currentUser) {
  const [cvs, setCvs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const autoSaveTimeoutRef = useRef(null);

  const fetchCVs = useCallback(async () => {
    if (!currentUser) {
      setCvs([]);
      setLoading(false);
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      const records = await pb.collection('userCVs').getList(1, 50, {
        filter: `userId="${currentUser.id}"`,
        sort: '-updated',
        $autoCancel: false
      });
      setCvs(records.items);
    } catch (err) {
      console.error('[useCV] Error fetching CVs:', err);
      setError(err.message || 'Failed to fetch CVs');
    } finally {
      setLoading(false);
    }
  }, [currentUser]);

  // Clean up auto-save timeouts on unmount
  useEffect(() => {
    return () => {
      if (autoSaveTimeoutRef.current) {
        clearTimeout(autoSaveTimeoutRef.current);
      }
    };
  }, []);

  const createCV = useCallback(async (data) => {
    if (!currentUser) {
      const err = new Error('Not authenticated');
      console.error('[useCV]', err);
      throw err;
    }
    try {
      const record = await pb.collection('userCVs').create({
        userId: currentUser.id,
        name: data.name || 'Untitled CV',
        template: data.templateId,
        templateId: data.templateId,
        personalInfo: data.personalInfo || {},
        workExperience: data.experience || [],
        education: data.education || [],
        skills: data.skills || [],
        certifications: data.certifications || [],
        projects: data.projects || [],
        languages: data.languages || [],
        volunteerExperience: data.volunteer || [],
        downloadCount: 0
      }, { $autoCancel: false });
      
      setCvs(prev => [record, ...prev]);
      return record;
    } catch (err) {
      console.error('[useCV] Create CV error:', err);
      throw err;
    }
  }, [currentUser]);

  const updateCV = useCallback(async (id, data) => {
    if (!currentUser) {
      const err = new Error('Not authenticated');
      console.error('[useCV]', err);
      throw err;
    }
    try {
      const record = await pb.collection('userCVs').update(id, {
        name: data.name || 'Untitled CV',
        template: data.templateId,
        templateId: data.templateId,
        personalInfo: data.personalInfo || {},
        workExperience: data.experience || [],
        education: data.education || [],
        skills: data.skills || [],
        certifications: data.certifications || [],
        projects: data.projects || [],
        languages: data.languages || [],
        volunteerExperience: data.volunteer || []
      }, { $autoCancel: false });
      
      setCvs(prev => prev.map(cv => cv.id === id ? record : cv));
      return record;
    } catch (err) {
      console.error('[useCV] Update CV error:', err);
      throw err;
    }
  }, [currentUser]);

  const deleteCV = useCallback(async (id) => {
    if (!currentUser) return;
    try {
      await pb.collection('userCVs').delete(id, { $autoCancel: false });
      setCvs(prev => prev.filter(cv => cv.id !== id));
      toast.success('CV deleted successfully');
    } catch (err) {
      console.error('[useCV] Delete CV error:', err);
      toast.error('Failed to delete CV');
      throw err;
    }
  }, [currentUser]);

  const autoSave = useCallback((id, data) => {
    if (autoSaveTimeoutRef.current) {
      clearTimeout(autoSaveTimeoutRef.current);
    }
    
    autoSaveTimeoutRef.current = setTimeout(async () => {
      try {
        if (id) {
          await updateCV(id, data);
        }
      } catch (err) {
        console.error('[useCV] Auto-save failed:', err);
      }
    }, 2000);
  }, [updateCV]);

  return {
    cvs,
    loading,
    error,
    fetchCVs,
    createCV,
    updateCV,
    deleteCV,
    autoSave
  };
}
