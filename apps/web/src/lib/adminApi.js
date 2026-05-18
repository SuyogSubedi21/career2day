import adminPb from '@/lib/adminPocketbaseClient.js';

const adminOptions = () => ({
  method: 'GET',
  headers: adminPb.authStore.token
    ? { Authorization: adminPb.authStore.token }
    : {}
});

export const getAdminSummary = () => adminPb.send('/api/admin/summary', adminOptions());

export const getAdminUsers = () => adminPb.send('/api/admin/users', adminOptions());

export const getAdminSubscriptions = () => adminPb.send('/api/admin/subscriptions', adminOptions());
