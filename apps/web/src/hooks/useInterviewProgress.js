
import { useState, useEffect, useMemo, useCallback } from 'react';
import { interviewQuestionsDatabase, CAREERS_LIST } from '@/lib/interviewQuestionsData.js';
import { toast } from 'sonner';

export function useInterviewProgress() {
  const defaultSlug = CAREERS_LIST[0] || 'software-engineer';
  
  // State
  const [selectedCareerSlug, setSelectedCareerSlug] = useState(defaultSlug);
  const [difficultyFilter, setDifficultyFilter] = useState('All');
  const [levelFilter, setLevelFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isPracticeMode, setIsPracticeMode] = useState(false);
  
  // Persisted state
  const [reviewedIds, setReviewedIds] = useState(() => {
    try {
      const saved = localStorage.getItem('interview_reviewed_questions');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  const [sessionTime, setSessionTime] = useState(0);
  const [sessionQuestionsAttempted, setSessionQuestionsAttempted] = useState(0);

  // Persist reviewed IDs
  useEffect(() => {
    localStorage.setItem('interview_reviewed_questions', JSON.stringify(Array.from(reviewedIds)));
  }, [reviewedIds]);

  // Timer for practice mode
  useEffect(() => {
    let interval;
    if (isPracticeMode) {
      interval = setInterval(() => {
        setSessionTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPracticeMode]);

  const allCareerQuestions = useMemo(() => {
    return interviewQuestionsDatabase[selectedCareerSlug]?.questions || [];
  }, [selectedCareerSlug]);

  const filteredQuestions = useMemo(() => {
    return allCareerQuestions.filter(q => {
      const matchDiff = difficultyFilter === 'All' || q.difficulty === difficultyFilter;
      const matchLevel = levelFilter === 'All' || q.level === levelFilter;
      
      let matchSearch = true;
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        matchSearch = 
          (q.question && q.question.toLowerCase().includes(query)) ||
          (q.explanation && q.explanation.toLowerCase().includes(query)) ||
          (q.category && q.category.toLowerCase().includes(query)) ||
          (q.relatedTopics && q.relatedTopics.some(t => t.toLowerCase().includes(query)));
      }
      
      return matchDiff && matchLevel && matchSearch;
    });
  }, [allCareerQuestions, difficultyFilter, levelFilter, searchQuery]);

  // Reset page on filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCareerSlug, difficultyFilter, levelFilter, searchQuery]);

  const toggleReviewed = useCallback((id) => {
    setReviewedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
        if (isPracticeMode) {
          setSessionQuestionsAttempted(s => s + 1);
        }
      }
      return next;
    });
  }, [isPracticeMode]);

  const getStats = useCallback(() => {
    const total = allCareerQuestions.length;
    const reviewed = allCareerQuestions.filter(q => reviewedIds.has(q.id)).length;
    
    const byDifficulty = {
      Beginner: { total: 0, reviewed: 0 },
      Intermediate: { total: 0, reviewed: 0 },
      Advanced: { total: 0, reviewed: 0 }
    };

    allCareerQuestions.forEach(q => {
      // Map 'difficulty' or 'level' correctly based on schema
      const diffKey = q.difficulty || q.level;
      if (byDifficulty[diffKey]) {
        byDifficulty[diffKey].total++;
        if (reviewedIds.has(q.id)) {
          byDifficulty[diffKey].reviewed++;
        }
      }
    });

    return { total, reviewed, byDifficulty };
  }, [allCareerQuestions, reviewedIds]);

  const togglePracticeMode = () => {
    setIsPracticeMode(prev => {
      if (!prev) {
        setSessionTime(0);
        setSessionQuestionsAttempted(0);
        toast.success("Practice mode started");
      } else {
        toast.info(`Session ended. Time: ${Math.floor(sessionTime / 60)}m ${sessionTime % 60}s`);
      }
      return !prev;
    });
  };

  return {
    selectedCareerSlug,
    setSelectedCareerSlug,
    difficultyFilter,
    setDifficultyFilter,
    levelFilter,
    setLevelFilter,
    searchQuery,
    setSearchQuery,
    currentPage,
    setCurrentPage,
    isPracticeMode,
    togglePracticeMode,
    sessionTime,
    sessionQuestionsAttempted,
    reviewedIds,
    toggleReviewed,
    allCareerQuestions,
    filteredQuestions,
    getStats,
    careers: CAREERS_LIST
  };
}
