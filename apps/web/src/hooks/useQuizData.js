
import { useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient.js';

export function useQuizData(careerSlug, level) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!careerSlug || !level) {
      setLoading(false);
      return;
    }

    const fetchQuestions = async () => {
      try {
        setLoading(true);
        const records = await pb.collection('interviewQuestions').getFullList({
          filter: `careerSlug="${careerSlug}" && level="${level}"`,
          sort: 'questionNumber',
          $autoCancel: false
        });
        setQuestions(records);
      } catch (err) {
        console.error('Error fetching questions:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [careerSlug, level]);

  return { questions, loading, error };
}
