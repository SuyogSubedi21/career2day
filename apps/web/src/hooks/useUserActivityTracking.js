
import pb from '@/lib/pocketbaseClient';

export const logActivity = async (action, pageName = '', featureName = '', duration = 0) => {
  try {
    const userEmail = pb.authStore.model?.email;
    if (!userEmail) return; // Only track authenticated users

    await pb.collection('user_activity').create({
      user_email: userEmail,
      action: action,
      page_name: pageName,
      feature_name: featureName,
      duration: duration
    }, { $autoCancel: false });
  } catch (error) {
    console.error('Failed to log user activity:', error);
  }
};

export default function useUserActivityTracking() {
  return { logActivity };
}
