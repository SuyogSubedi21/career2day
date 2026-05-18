import adminPb from '@/lib/adminPocketbaseClient.js';

const restoreAdminAuth = () => {
  if (adminPb.authStore.isValid) return;

  try {
    const session = JSON.parse(localStorage.getItem('admin_session') || 'null');
    if (session?.token && session?.model) {
      adminPb.authStore.save(session.token, session.model);
    }
  } catch {
    // Ignore malformed local sessions; the protected route will send users back to login.
  }
};

const adminOptions = () => {
  restoreAdminAuth();

  return {
    method: 'GET',
    headers: adminPb.authStore.token
      ? { Authorization: adminPb.authStore.token }
      : {}
  };
};

export const getAdminSummary = () => adminPb.send('/api/admin/summary', adminOptions());

export const getAdminUsers = () => adminPb.send('/api/admin/users', adminOptions());

export const getAdminSubscriptions = () => adminPb.send('/api/admin/subscriptions', adminOptions());
