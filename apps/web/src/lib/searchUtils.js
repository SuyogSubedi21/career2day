
/**
 * Utility functions for advanced interview question search and filtering
 * Note: This is a pure JavaScript file. No JSX is used here.
 */

// 1. Debounce function to limit API calls
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// 2. Text highlighting utility (returns an array of objects to keep JSX out of this file)
export const highlightMatches = (text, query) => {
  if (!text) return [];
  if (!query) return [{ text, isHighlight: false }];
  
  const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${safeQuery})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part) => ({
    text: part,
    isHighlight: regex.test(part)
  }));
};

// 3. Result ranking/relevance scoring
export const rankResults = (results, query) => {
  if (!query) return results;
  const lowerQuery = query.toLowerCase();

  return [...results].sort((a, b) => {
    let scoreA = 0;
    let scoreB = 0;

    // Exact matches in question get highest priority
    if (a.question?.toLowerCase().includes(lowerQuery)) scoreA += 10;
    if (b.question?.toLowerCase().includes(lowerQuery)) scoreB += 10;

    // Matches in related topics or key points
    if (a.relatedTopics?.some(t => t.toLowerCase().includes(lowerQuery))) scoreA += 5;
    if (b.relatedTopics?.some(t => t.toLowerCase().includes(lowerQuery))) scoreB += 5;

    // Matches in explanation
    if (a.explanation?.toLowerCase().includes(lowerQuery)) scoreA += 2;
    if (b.explanation?.toLowerCase().includes(lowerQuery)) scoreB += 2;

    return scoreB - scoreA;
  });
};

// 4. Empty state handling messages
export const getEmptyStateMessage = (query, career, difficulty) => {
  if (query) {
    return {
      title: "No matching questions found",
      description: `We couldn't find any questions matching "${query}". Try using different keywords or checking your spelling.`
    };
  }
  if (career || difficulty) {
    return {
      title: "No questions match your filters",
      description: "Try clearing some filters to see more results."
    };
  }
  return {
    title: "No questions available",
    description: "There are currently no questions to display."
  };
};

export const searchQuestions = (questions, query) => {
  if (!query) return questions;
  const lowerQuery = query.toLowerCase();
  
  return questions.filter(q => {
    return (
      q.question?.toLowerCase().includes(lowerQuery) ||
      q.explanation?.toLowerCase().includes(lowerQuery) ||
      q.careerName?.toLowerCase().includes(lowerQuery) ||
      q.relatedTopics?.some(t => t.toLowerCase().includes(lowerQuery)) ||
      q.keyPoints?.some(k => k.toLowerCase().includes(lowerQuery))
    );
  });
};
