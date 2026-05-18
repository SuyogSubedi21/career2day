
import { useState, useEffect, useCallback } from 'react';
import pb from '@/lib/pocketbaseClient.js';
import { subDays, format, isAfter, startOfMonth, subMonths } from 'date-fns';
import { getAdminSummary, getAdminUsers, getAdminSubscriptions } from '@/lib/adminApi.js';

export function useAdminDashboardData() {
  const [data, setData] = useState({
    totalUsers: 0,
    freeUsers: 0,
    paidUsers: 0,
    totalCVs: 0,
    totalDownloads: 0,
    totalBookmarks: 0,
    pageViews: 0,
    userActivity: 0,
    totalCareers: 0,
    recentUsers: [],
    topPages: [],
    monthlyRevenue: [],
    userGrowth: [],
    activityData: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const [summaryRes, adminUsersRes, adminSubsRes] = await Promise.all([
        getAdminSummary().catch(() => null),
        getAdminUsers().catch(() => ({ items: [], totalItems: 0 })),
        getAdminSubscriptions().catch(() => ({ items: [], totalItems: 0 }))
      ]);

      // Fetch all required collections concurrently with autoCancel disabled
      const [
        usersRes,
        cvsRes,
        downloadsRes,
        bookmarksRes,
        savedCareersRes,
        subsRes,
        pageViewsRes,
        userActivityRes,
        careersRes
      ] = await Promise.all([
        pb.collection('users').getFullList({ sort: '-created', $autoCancel: false }).catch(() => adminUsersRes.items || []),
        pb.collection('userCVs').getFullList({ sort: '-created', $autoCancel: false }).catch(() => []),
        pb.collection('downloads').getFullList({ sort: '-created', $autoCancel: false }).catch(() => []),
        pb.collection('bookmarks').getFullList({ sort: '-created', $autoCancel: false }).catch(() => []),
        pb.collection('savedCareers').getFullList({ sort: '-created', $autoCancel: false }).catch(() => []),
        pb.collection('subscriptions_stripe').getFullList({ sort: '-created', $autoCancel: false }).catch(() => adminSubsRes.items || []),
        pb.collection('page_views').getFullList({ sort: '-created', $autoCancel: false }).catch(() => []),
        pb.collection('user_activity').getFullList({ sort: '-created', $autoCancel: false }).catch(() => []),
        pb.collection('careers').getFullList({ sort: '-created', $autoCancel: false }).catch(() => [])
      ]);

      console.log('[AdminDashboard] Fetched Users:', usersRes.length);
      console.log('[AdminDashboard] Fetched CVs:', cvsRes.length);
      console.log('[AdminDashboard] Fetched Downloads:', downloadsRes.length);
      console.log('[AdminDashboard] Fetched Bookmarks:', bookmarksRes.length);
      console.log('[AdminDashboard] Fetched Subscriptions:', subsRes.length);

      // --- Calculate Stats ---
      const summaryCounts = summaryRes?.counts || {};
      const totalUsers = summaryCounts.users ?? adminUsersRes.totalItems ?? usersRes.length;
      const paidUsers = summaryCounts.activeSubscriptions ?? usersRes.filter(u => u.premium === true).length;
      const freeUsers = Math.max(0, totalUsers - paidUsers);
      
      const totalCVs = summaryCounts.cvs ?? cvsRes.length;
      const totalDownloads = downloadsRes.length;
      const totalBookmarks = Math.max(bookmarksRes.length, savedCareersRes.length);
      const pageViews = summaryCounts.pageViews ?? pageViewsRes.length;
      const userActivity = summaryCounts.userActivity ?? userActivityRes.length;
      const totalCareers = summaryCounts.careers ?? careersRes.length;

      // --- Generate Chart Data ---
      const last30Days = Array.from({ length: 30 }).map((_, i) => {
        return format(subDays(new Date(), 29 - i), 'MMM dd');
      });

      // 1. User Growth (Cumulative last 30 days)
      let cumulativeUsers = usersRes.filter(u => !isAfter(new Date(u.created), subDays(new Date(), 30))).length;
      const userGrowthMap = {};
      usersRes.forEach(u => {
        const d = format(new Date(u.created), 'MMM dd');
        userGrowthMap[d] = (userGrowthMap[d] || 0) + 1;
      });
      
      const userGrowth = last30Days.map(dateStr => {
        cumulativeUsers += (userGrowthMap[dateStr] || 0);
        return { date: dateStr, count: cumulativeUsers };
      });

      // 2. Revenue (Monthly from subscriptions_stripe for last 6 months)
      const revenueMap = {};
      // Initialize last 6 months with 0
      for (let i = 5; i >= 0; i--) {
        const monthStr = format(subMonths(new Date(), i), 'MMM yyyy');
        revenueMap[monthStr] = 0;
      }

      subsRes.forEach(sub => {
        if (sub.status === 'active' && sub.amount_paid) {
          const monthStr = format(startOfMonth(new Date(sub.created)), 'MMM yyyy');
          if (revenueMap[monthStr] !== undefined) {
            revenueMap[monthStr] += sub.amount_paid;
          }
        }
      });
      
      const monthlyRevenue = Object.keys(revenueMap).map(month => ({
        month,
        revenue: revenueMap[month]
      }));

      // 3. Activity (CVs and Downloads per day for last 30 days)
      const activityMap = {};
      last30Days.forEach(d => { activityMap[d] = { cvCount: 0, downloadCount: 0 }; });

      cvsRes.forEach(cv => {
        const d = format(new Date(cv.created), 'MMM dd');
        if (activityMap[d]) activityMap[d].cvCount++;
      });
      downloadsRes.forEach(dl => {
        const d = format(new Date(dl.created), 'MMM dd');
        if (activityMap[d]) activityMap[d].downloadCount++;
      });

      const activityData = last30Days.map(dateStr => ({
        date: dateStr,
        cvCount: activityMap[dateStr].cvCount,
        downloadCount: activityMap[dateStr].downloadCount
      }));

      const topPagesMap = {};
      pageViewsRes.forEach((view) => {
        const pageName = view.page_name || view.path || 'Unknown';
        topPagesMap[pageName] = (topPagesMap[pageName] || 0) + 1;
      });

      const topPages = Object.entries(topPagesMap)
        .map(([page, views]) => ({ page, views }))
        .sort((a, b) => b.views - a.views)
        .slice(0, 8);

      setData({
        totalUsers,
        freeUsers,
        paidUsers,
        totalCVs,
        totalDownloads,
        totalBookmarks,
        pageViews,
        userActivity,
        totalCareers,
        recentUsers: usersRes.slice(0, 8),
        topPages,
        monthlyRevenue,
        userGrowth,
        activityData
      });
    } catch (err) {
      console.error('[useAdminDashboardData] Error fetching data:', err);
      setError(err.message || 'Failed to fetch dashboard data');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    refresh: fetchData
  };
}
