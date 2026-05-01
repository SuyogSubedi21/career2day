
import { useState, useEffect } from 'react';
import { COUNTRIES } from '@/lib/constants/countries.js';

export function useCountryData() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this might fetch from an API
    // For now, we return the constants
    setCountries(COUNTRIES);
    setLoading(false);
  }, []);

  return { countries, loading };
}
