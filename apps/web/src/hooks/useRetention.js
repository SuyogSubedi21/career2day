import { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'career2day-retention';

const initialState = {
  recentlyViewed: [],
  weeklyGoal: 5,
  completedActions: 0,
  streakPlaceholder: 0,
  milestones: []
};

export function useRetention(currentCareer) {
  const [state, setState] = useState(() => {
    try {
      return { ...initialState, ...JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}') };
    } catch {
      return initialState;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    if (!currentCareer) return;
    setState((current) => {
      const nextRecentlyViewed = [
        { slug: currentCareer.slug, name: currentCareer.name, viewedAt: new Date().toISOString() },
        ...current.recentlyViewed.filter((item) => item.slug !== currentCareer.slug)
      ].slice(0, 5);
      return { ...current, recentlyViewed: nextRecentlyViewed };
    });
  }, [currentCareer?.slug]);

  const badges = useMemo(() => {
    const items = [];
    if (state.completedActions >= 1) items.push('First step');
    if (state.completedActions >= 5) items.push('Weekly momentum');
    if (state.completedActions >= 12) items.push('Job-ready builder');
    return items;
  }, [state.completedActions]);

  const completeAction = (label) => {
    setState((current) => ({
      ...current,
      completedActions: current.completedActions + 1,
      milestones: [{ label, completedAt: new Date().toISOString() }, ...current.milestones].slice(0, 8)
    }));
  };

  return { retention: state, badges, completeAction, setRetention: setState };
}
