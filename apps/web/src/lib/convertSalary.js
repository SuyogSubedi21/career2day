
export const EXCHANGE_RATES = {
  USD: 1,
  INR: 83.5,
  AUD: 1.52,
  GBP: 0.79,
  CAD: 1.36,
  NPR: 132.50
};

export const CURRENCY_SYMBOLS = {
  USD: '$',
  INR: '₹',
  AUD: 'A$',
  GBP: '£',
  CAD: 'C$',
  NPR: '₨'
};

export function getCurrencySymbol(currency = 'USD') {
  return CURRENCY_SYMBOLS[currency] || '$';
}

export default function convertSalary(amount, fromCurrency = 'USD', toCurrency = 'USD') {
  if (!amount || isNaN(amount)) return 0;
  if (fromCurrency === toCurrency) return amount;

  // Convert to USD first (base currency)
  const amountInUSD = amount / (EXCHANGE_RATES[fromCurrency] || 1);
  
  // Convert from USD to target currency
  return amountInUSD * (EXCHANGE_RATES[toCurrency] || 1);
}
