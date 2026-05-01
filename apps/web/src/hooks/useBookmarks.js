
import { useState, useEffect, useCallback } from 'react';
import pb from '@/lib/pocketbaseClient.js';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { toast } from 'sonner';

export function useBookmarks() {
  const { currentUser, isAuthenticated } = useAuth();
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBookmarks = useCallback(async () => {
    if (!isAuthenticated || !currentUser) {
      setBookmarks([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const records = await pb.collection('bookmarks').getFullList({
        filter: `user_id = "${currentUser.id}"`,
        $autoCancel: false,
      });
      setBookmarks(records);
    } catch (err) {
      console.error('[useBookmarks] Error fetching bookmarks:', err);
      const errorMessage = err.data?.message || err.message || 'Failed to fetch bookmarks';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [currentUser, isAuthenticated]);

  // Persist state on page refresh by fetching bookmarks on mount
  useEffect(() => {
    fetchBookmarks();
  }, [fetchBookmarks]);

  const isBookmarked = useCallback((cvId) => {
    if (!cvId) return false;
    return bookmarks.some((b) => b.cv_id === cvId);
  }, [bookmarks]);

  const addBookmark = async (cvId) => {
    if (!isAuthenticated || !currentUser) {
      toast.error('Please log in to bookmark CVs.');
      return false;
    }
    
    if (!cvId) return false;

    try {
      setError(null);
      const record = await pb.collection('bookmarks').create({
        user_id: currentUser.id,
        cv_id: cvId,
      }, { $autoCancel: false });
      
      setBookmarks(prev => [...prev, record]);
      toast.success('CV bookmarked successfully.');
      return true;
    } catch (err) {
      console.error('[useBookmarks] Error adding bookmark:', err);
      const errorMessage = err.data?.message || err.message || 'Failed to add bookmark';
      setError(errorMessage);
      
      // Handle duplicate attempts gracefully
      if (err.status === 400 && err.data?.data?.user_id?.code === 'validation_not_unique') {
        toast.info('This CV is already bookmarked.');
        await fetchBookmarks(); // Sync state with server
      } else {
        toast.error(`Error: ${errorMessage}`);
      }
      return false;
    }
  };

  const removeBookmark = async (cvId) => {
    if (!isAuthenticated || !currentUser || !cvId) return false;

    const bookmarkToRemove = bookmarks.find(b => b.cv_id === cvId);
    if (!bookmarkToRemove) return true; // Already removed locally

    try {
      setError(null);
      await pb.collection('bookmarks').delete(bookmarkToRemove.id, { $autoCancel: false });
      setBookmarks(prev => prev.filter(b => b.id !== bookmarkToRemove.id));
      toast.success('Bookmark removed.');
      return true;
    } catch (err) {
      console.error('[useBookmarks] Error removing bookmark:', err);
      const errorMessage = err.data?.message || err.message || 'Failed to remove bookmark';
      setError(errorMessage);
      
      if (err.status === 404) {
        // Already deleted on server
        setBookmarks(prev => prev.filter(b => b.id !== bookmarkToRemove.id));
        return true;
      }
      toast.error(`Error: ${errorMessage}`);
      return false;
    }
  };

  const toggleBookmark = async (cvId) => {
    if (!cvId) return false;
    
    // Check if already bookmarked before creating a new record
    if (isBookmarked(cvId)) {
      return await removeBookmark(cvId);
    } else {
      return await addBookmark(cvId);
    }
  };

  return {
    bookmarks,
    bookmarkCount: bookmarks.length,
    loading,
    error,
    isBookmarked,
    addBookmark,
    removeBookmark,
    toggleBookmark,
    refreshBookmarks: fetchBookmarks
  };
}
