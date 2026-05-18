import adminPb from '@/lib/adminPocketbaseClient.js';

export const getAdminSummary = () => adminPb.send('/api/admin/summary', { method: 'GET' });

export const getAdminUsers = () => adminPb.send('/api/admin/users', { method: 'GET' });

export const getAdminSubscriptions = () => adminPb.send('/api/admin/subscriptions', { method: 'GET' });
