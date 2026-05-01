
import { useState, useCallback, useEffect, useRef } from 'react';
import pb from '@/lib/pocketbaseClient';
import { debounce } from '@/lib/searchUtils';

export function useQuestionSearch(initialCareerSlug = '') {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [careerSlug, setCareerSlug] = useState(initialCareerSlug);
  const [difficulty, setDifficulty] = useState([]);
  const [level, setLevel] = useState([]);
  
  const [results, setResults] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const [page, setPage] = useState(1);
  const perPage = 20;

  // Cache object to avoid refetching identical queries
  const cacheRef = useRef({});

  // Debounce the text query update
  const debouncedSetQuery = useCallback(
    debounce((newQuery) => {
      setDebouncedQuery(newQuery);
      setPage(1); // Reset page on new search
    }, 400),
    []
  );

  const handleQueryChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    debouncedSetQuery(val);
  };

  const fetchResults = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const filters = [];
      if (careerSlug && careerSlug !== 'all') {
        filters.push(`careerSlug = "${careerSlug}"`);
      }
      if (difficulty.length > 0) {
        const diffFilter = difficulty.map(d => `difficulty = "${d}"`).join(' || ');
        filters.push(`(${diffFilter})`);
      }
      if (level.length > 0) {
        const lvlFilter = level.map(l => `level = "${l}"`).join(' || ');
        filters.push(`(${lvlFilter})`);
      }

      // Text search using ~ operator in PocketBase
      if (debouncedQuery) {
        const safeQuery = debouncedQuery.replace(/"/g, '\\"');
        filters.push(`(question ~ "${safeQuery}" || explanation ~ "${safeQuery}" || relatedTopics ~ "${safeQuery}")`);
      }

      const filterString = filters.join(' && ');
      const cacheKey = `${page}-${filterString}`;

      if (cacheRef.current[cacheKey]) {
        setResults(cacheRef.current[cacheKey].items);
        setTotalItems(cacheRef.current[cacheKey].totalItems);
        setIsLoading(false);
        return;
      }

      const response = await pb.collection('interviewQuestionsDatabase').getList(page, perPage, {
        filter: filterString,
        sort: 'questionNumber',
        $autoCancel: false
      });

      cacheRef.current[cacheKey] = {
        items: response.items,
        totalItems: response.totalItems
      };

      setResults(response.items);
      setTotalItems(response.totalItems);
    } catch (err) {
      console.error('Search error:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [debouncedQuery, careerSlug, difficulty, level, page]);

  useEffect(() => {
    fetchResults();
  }, [fetchResults]);

  const clearSearch = () => {
    setQuery('');
    setDebouncedQuery('');
    setPage(1);
  };

  const clearAllFilters = () => {
    setQuery('');
    setDebouncedQuery('');
    setCareerSlug('');
    setDifficulty([]);
    setLevel([]);
    setPage(1);
  };

  return {
    query,
    handleQueryChange,
    clearSearch,
    clearAllFilters,
    careerSlug,
    setCareerSlug,
    difficulty,
    setDifficulty,
    level,
    setLevel,
    results,
    totalItems,
    isLoading,
    error,
    page,
    setPage,
    totalPages: Math.ceil(totalItems / perPage)
  };
}
