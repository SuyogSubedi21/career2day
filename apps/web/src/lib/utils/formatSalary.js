
export function formatSalary(value, currencyCode = 'USD', locale = 'en-US') {
  if (value == null || isNaN(value)) return 'N/A';
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
    maximumFractionDigits: 0,
  }).format(value);
}
