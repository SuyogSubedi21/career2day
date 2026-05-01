
import { useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient.js';

export function useCareerData(slug) {
  const [career, setCareer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    const fetchCareer = async () => {
      try {
        setLoading(true);
        const record = await pb.collection('careers').getFirstListItem(`slug="${slug}"`, {
          $autoCancel: false
        });
        setCareer(record);
      } catch (err) {
        console.error('Error fetching career:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCareer();
  }, [slug]);

  return { career, loading, error };
}
