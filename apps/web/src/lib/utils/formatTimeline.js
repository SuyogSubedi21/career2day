
export function formatTimeline(minMonths, maxMonths) {
  if (!minMonths && !maxMonths) return 'Varies';
  if (minMonths && !maxMonths) return `${minMonths}+ months`;
  if (!minMonths && maxMonths) return `Up to ${maxMonths} months`;
  
  if (minMonths >= 12 && maxMonths >= 12) {
    return `${Math.floor(minMonths/12)}-${Math.floor(maxMonths/12)} years`;
  }
  return `${minMonths}-${maxMonths} months`;
}
