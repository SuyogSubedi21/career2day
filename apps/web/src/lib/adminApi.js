import pb from '@/lib/pocketbaseClient.js';

export const getAdminSummary = () => pb.send('/api/admin/summary', { method: 'GET' });

export const getAdminUsers = () => pb.send('/api/admin/users', { method: 'GET' });

export const getAdminSubscriptions = () => pb.send('/api/admin/subscriptions', { method: 'GET' });
