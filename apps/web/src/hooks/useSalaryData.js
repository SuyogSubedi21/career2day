
import { useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient.js';

export function useSalaryData(careerSlug) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!careerSlug) {
      setLoading(false);
      return;
    }

    const fetchSalaries = async () => {
      try {
        setLoading(true);
        const records = await pb.collection('SalaryData').getFullList({
          filter: `careerSlug="${careerSlug}"`,
          sort: 'level,country',
          $autoCancel: false
        });
        setData(records);
      } catch (err) {
        console.error('Error fetching salary data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSalaries();
  }, [careerSlug]);

  return { data, loading, error };
}
