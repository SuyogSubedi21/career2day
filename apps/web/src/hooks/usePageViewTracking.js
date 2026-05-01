
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import pb from '@/lib/pocketbaseClient';

export default function usePageViewTracking() {
  const location = useLocation();

  useEffect(() => {
    const trackPageView = async () => {
      try {
        // Generate or retrieve session ID
        let sessionId = sessionStorage.getItem('session_id');
        if (!sessionId) {
          sessionId = crypto.randomUUID();
          sessionStorage.setItem('session_id', sessionId);
        }

        // Detect device type
        const getDeviceType = () => {
          const ua = navigator.userAgent;
          if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) return 'tablet';
          if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) return 'mobile';
          return 'desktop';
        };

        // Get user email if logged in
        const userEmail = pb.authStore.model?.email || '';

        await pb.collection('page_views').create({
          page_name: location.pathname,
          user_email: userEmail,
          session_id: sessionId,
          referrer: document.referrer || '',
          device_type: getDeviceType()
        }, { $autoCancel: false });
      } catch (error) {
        console.error('Failed to track page view:', error);
        // Fail silently to not block rendering
      }
    };

    trackPageView();
  }, [location.pathname]);
}
