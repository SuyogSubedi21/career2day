
import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/contexts/AuthContext.jsx';
import pb from '@/lib/pocketbaseClient.js';

// Global cache to prevent excessive API calls during navigation
const subscriptionCache = {
  data: null,
  timestamp: 0,
  userId: null
};

const CACHE_TTL = 1000 * 60 * 2; // 2 minutes (reduced for faster updates)

export function useSubscription() {
  const { currentUser, isAuthenticated } = useAuth();
  const [isPremium, setIsPremium] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkSubscription = useCallback(async (forceRefresh = false) => {
    if (!isAuthenticated || !currentUser) {
      setIsPremium(false);
      setLoading(false);
      return;
    }

    const now = Date.now();
    if (
      !forceRefresh &&
      subscriptionCache.userId === currentUser.id && 
      (now - subscriptionCache.timestamp) < CACHE_TTL
    ) {
      setIsPremium(subscriptionCache.data);
      setLoading(false);
      return;
    }

    try {
      let hasActiveSub = false;

      // 1. Check active stripe subscriptions (Primary check for premium_monthly / premium_annual)
      const stripeSubs = await pb.collection('subscriptions_stripe').getList(1, 1, {
        filter: `user_email = "${currentUser.email}" && status = "active" && (plan_type = "premium_monthly" || plan_type = "premium_annual")`,
        $autoCancel: false
      });

      if (stripeSubs.items.length > 0) {
        hasActiveSub = true;
      } else {
        // 2. Fallback: Check khalti subscriptions
        const khaltiSubs = await pb.collection('khalti_subscriptions').getList(1, 1, {
          filter: `userId = "${currentUser.id}" && status = "active"`,
          $autoCancel: false
        });

        if (khaltiSubs.items.length > 0) {
          hasActiveSub = true;
        } else {
          // 3. Fallback: Check generic new subscriptions collection
          const genericSubs = await pb.collection('subscriptions_new').getList(1, 1, {
            filter: `user_email = "${currentUser.email}" && status = "active"`,
            $autoCancel: false
          });

          if (genericSubs.items.length > 0) {
            hasActiveSub = true;
          }
        }
      }

      // Update Cache
      subscriptionCache.data = hasActiveSub;
      subscriptionCache.timestamp = now;
      subscriptionCache.userId = currentUser.id;

      setIsPremium(hasActiveSub);
    } catch (error) {
      console.error('[useSubscription] Failed to verify subscription:', error);
      setIsPremium(false);
    } finally {
      setLoading(false);
    }
  }, [currentUser, isAuthenticated]);

  useEffect(() => {
    checkSubscription();
  }, [checkSubscription]);

  return { isPremium, loading, refreshSubscription: () => checkSubscription(true) };
}
