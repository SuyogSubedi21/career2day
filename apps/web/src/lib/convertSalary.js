export const EXCHANGE_RATES = {
  USD: 1,
  NPR: 133,
  INR: 83.5,
  AUD: 1.52,
  GBP: 0.79,
  CNY: 7.2
};

export const CURRENCY_SYMBOLS = {
  USD: '$',
  NPR: 'NPR ',
  INR: 'INR ',
  AUD: 'A$',
  GBP: 'GBP ',
  CNY: 'CNY '
};

export function getCurrencySymbol(currency = 'USD') {
  return CURRENCY_SYMBOLS[currency] || '$';
}

export default function convertSalary(amount, fromCurrency = 'USD', toCurrency = 'USD') {
  if (!amount || isNaN(amount)) return 0;
  if (fromCurrency === toCurrency) return amount;

  const amountInUSD = amount / (EXCHANGE_RATES[fromCurrency] || 1);
  return amountInUSD * (EXCHANGE_RATES[toCurrency] || 1);
}
