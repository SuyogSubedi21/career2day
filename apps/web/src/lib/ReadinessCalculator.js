
export const calculateOverallScore = (correct, attempted) => {
  if (attempted === 0) return 0;
  return Math.round((correct / attempted) * 100);
};

export const getReadinessLevel = (score) => {
  if (score <= 30) return { label: 'Not Ready', color: 'hsl(var(--readiness-not))' };
  if (score <= 60) return { label: 'Almost Ready', color: 'hsl(var(--readiness-almost))' };
  if (score <= 80) return { label: 'Ready', color: 'hsl(var(--readiness-ready))' };
  return { label: 'Highly Prepared', color: 'hsl(var(--readiness-highly))' };
};

export const calculatePerformanceByRole = (progressRecords) => {
  const roleMap = {};
  progressRecords.forEach(record => {
    // using courseId for role name mapping as configured in DB
    const role = record.courseId || record.careerPath || 'Unknown Role';
    if (!roleMap[role]) {
      roleMap[role] = { attempted: 0, correct: 0 };
    }
    roleMap[role].attempted += record.questionsAttempted || 0;
    roleMap[role].correct += record.correctAnswers || 0;
  });

  return Object.entries(roleMap).map(([role, stats]) => ({
    name: role,
    accuracy: stats.attempted === 0 ? 0 : Math.round((stats.correct / stats.attempted) * 100),
    attempted: stats.attempted
  })).sort((a, b) => b.accuracy - a.accuracy);
};

export const calculatePerformanceByCategory = (answersByCategory) => {
  // Assuming answersByCategory is { 'Technical': { correct: 10, total: 15 }, ... }
  if (!answersByCategory) return [];
  return Object.entries(answersByCategory).map(([category, stats]) => ({
    name: category,
    value: stats.total === 0 ? 0 : Math.round((stats.correct / stats.total) * 100),
    total: stats.total
  }));
};

export const identifyWeakAreas = (rolePerformance) => {
  return rolePerformance.filter(r => r.accuracy < 60 && r.attempted >= 5).slice(0, 3);
};

export const getRecommendedRoles = (rolePerformance, allRoles) => {
  // Recommend roles with lowest accuracy that have been attempted, or unattempted roles
  const attemptedRoles = rolePerformance.map(r => r.name);
  const unattempted = allRoles.filter(r => !attemptedRoles.includes(r)).slice(0, 3);
  
  const weakRoles = rolePerformance
    .filter(r => r.accuracy < 70)
    .sort((a, b) => a.accuracy - b.accuracy)
    .map(r => r.name)
    .slice(0, 3);

  return [...new Set([...weakRoles, ...unattempted])].slice(0, 4);
};
