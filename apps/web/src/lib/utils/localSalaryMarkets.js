export const LOCAL_SALARY_MARKETS = [
  { country: 'USA', currency: 'USD', locale: 'en-US', exchangeRate: 1, marketFactor: 1 },
  { country: 'Nepal', currency: 'NPR', locale: 'en-NP', exchangeRate: 133, marketFactor: 0.1 },
  { country: 'India', currency: 'INR', locale: 'en-IN', exchangeRate: 83.5, marketFactor: 0.24 },
  { country: 'Australia', currency: 'AUD', locale: 'en-AU', exchangeRate: 1.52, marketFactor: 0.75 },
  { country: 'UK', currency: 'GBP', locale: 'en-GB', exchangeRate: 0.79, marketFactor: 0.72 },
  { country: 'China', currency: 'CNY', locale: 'zh-CN', exchangeRate: 7.2, marketFactor: 0.42 }
];

export function getMarketByCountry(countryName) {
  return LOCAL_SALARY_MARKETS.find((market) => market.country.toLowerCase() === countryName?.toLowerCase());
}

export function formatLocalSalary(amount, currency = 'USD', locale = 'en-US') {
  if (!amount || Number.isNaN(Number(amount))) return 'N/A';

  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      maximumFractionDigits: 0
    }).format(Math.round(amount));
  } catch {
    return `${currency} ${Math.round(amount).toLocaleString()}`;
  }
}

export function localizeAnnualSalary(usdSalary, market) {
  if (!usdSalary || !market) return 0;
  return usdSalary * market.marketFactor * market.exchangeRate;
}

export function getLocalizedSalaryMarkets({ entryUsd, midUsd, seniorUsd }) {
  const fallbackMid = midUsd || entryUsd || seniorUsd || 0;
  const fallbackEntry = entryUsd || fallbackMid * 0.75;
  const fallbackSenior = seniorUsd || fallbackMid * 1.35;

  return LOCAL_SALARY_MARKETS.map((market) => {
    const entry = localizeAnnualSalary(fallbackEntry, market);
    const mid = localizeAnnualSalary(fallbackMid, market);
    const senior = localizeAnnualSalary(fallbackSenior, market);

    return {
      ...market,
      entry,
      mid,
      senior,
      entryLabel: formatLocalSalary(entry, market.currency, market.locale),
      midLabel: formatLocalSalary(mid, market.currency, market.locale),
      seniorLabel: formatLocalSalary(senior, market.currency, market.locale),
      rangeLabel: `${formatLocalSalary(entry, market.currency, market.locale)} - ${formatLocalSalary(senior, market.currency, market.locale)}`
    };
  });
}
