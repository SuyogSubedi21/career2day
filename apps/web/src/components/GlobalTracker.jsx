
import React from 'react';
import usePageViewTracking from '@/hooks/usePageViewTracking.js';

// Wrapper component to apply tracking globally without modifying every page file
export default function GlobalTracker() {
  usePageViewTracking();
  return null;
}
