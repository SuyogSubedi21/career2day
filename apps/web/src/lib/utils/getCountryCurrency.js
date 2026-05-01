
import { COUNTRIES } from '@/lib/constants/countries.js';

export function getCountryCurrency(countryNameOrCode) {
  const country = COUNTRIES.find(c => 
    c.name.toLowerCase() === countryNameOrCode.toLowerCase() || 
    c.code.toLowerCase() === countryNameOrCode.toLowerCase()
  );
  return country ? country.currency : 'USD';
}
