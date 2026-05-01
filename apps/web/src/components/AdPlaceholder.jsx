
import React from 'react';

export default function AdPlaceholder({ width, height, slotId, className = '' }) {
  const adWidth = width || '100%';
  const adHeight = height || '250px';

  return (
    <div 
      className={`bg-card border border-border flex flex-col items-center justify-center overflow-hidden rounded-sm mx-auto my-6 shadow-sm ${className}`}
      style={{ 
        width: '100%', 
        maxWidth: adWidth, 
        minHeight: adHeight,
        height: adHeight
      }}
      data-ad-slot={slotId}
    >
      <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest block mb-1">
        Advertisement
      </span>
      {slotId && (
        <span className="text-[9px] text-muted-foreground/60">
          Slot: {slotId}
        </span>
      )}
    </div>
  );
}
