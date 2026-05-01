
import { useState, useEffect, useCallback } from 'react';
import pb from '@/lib/pocketbaseClient.js';
import { useAuth } from '@/contexts/AuthContext.jsx';

export function useDownloadLimit() {
  const { currentUser, isAuthenticated } = useAuth();
  const [downloadCount, setDownloadCount] = useState(0);
  const [isPremium, setIsPremium] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchStatus = useCallback(async () => {
    if (!isAuthenticated || !currentUser) {
      setDownloadCount(0);
      setIsPremium(false);
      setLoading(false);
      return;
    }
    
    try {
      // 1. Fetch user's subscription plan from subscriptions_stripe
      let activeSub = null;
      try {
        activeSub = await pb.collection('subscriptions_stripe').getFirstListItem(
          `user_email="${currentUser.email}" && status="active"`,
          { $autoCancel: false }
        );
      } catch (e) {
        // No active subscription found, default to FREE
      }

      // 2. Determine if user is FREE or PREMIUM based on plan_type field
      const hasPremiumPlan = activeSub && (activeSub.plan_type === 'premium_monthly' || activeSub.plan_type === 'premium_annual');
      setIsPremium(hasPremiumPlan);

      // Fetch user's download count from downloads collection
      const records = await pb.collection('downloads').getList(1, 1, {
        filter: `user_id = "${currentUser.id}"`,
        $autoCancel: false
      });
      setDownloadCount(records.totalItems);

    } catch (error) {
      console.error('[useDownloadLimit] Error fetching limit data:', error);
    } finally {
      setLoading(false);
    }
  }, [currentUser, isAuthenticated]);

  useEffect(() => {
    fetchStatus();
  }, [fetchStatus]);

  const incrementDownloadCount = async (cvId, format = 'pdf') => {
    if (!isAuthenticated || !currentUser || !cvId) return;
    try {
      await pb.collection('downloads').create({
        user_id: currentUser.id,
        cv_id: cvId,
        downloaded_date: new Date().toISOString()
      }, { $autoCancel: false });
      
      await fetchStatus();
    } catch (error) {
      console.error('[useDownloadLimit] Error recording download:', error);
    }
  };

  // 3 & 4. Compute format availability and limits
  const maxDownloads = isPremium ? Infinity : 1;
  const canDownloadPDF = isPremium || downloadCount < maxDownloads;
  const canDownloadDOC = isPremium;
  const canDownloadTXT = isPremium;
  const showPricingPopup = !isPremium && downloadCount >= maxDownloads;

  // 5. Return the requested object structure
  return {
    canDownloadPDF,
    canDownloadDOC,
    canDownloadTXT,
    downloadCount,
    maxDownloads,
    isPremium,
    showPricingPopup,
    loading,
    incrementDownloadCount,
    refreshLimit: fetchStatus
  };
}
