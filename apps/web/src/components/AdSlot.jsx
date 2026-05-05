import React from 'react';

export default function AdSlot({ label = 'Advertisement', variant = 'banner' }) {
  const sizeClass = variant === 'sidebar' ? 'min-h-64' : 'min-h-24';

  return (
    <aside className={`flex ${sizeClass} w-full items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-center text-xs font-semibold uppercase tracking-wide text-slate-400 dark:border-white/15 dark:bg-white/5 dark:text-slate-500`} aria-label={label}>
      {label}
    </aside>
  );
}
