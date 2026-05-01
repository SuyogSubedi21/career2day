
import React, { createContext, useContext, useState, useEffect } from 'react';
import convertSalaryFn, { getCurrencySymbol as getSymbol } from '@/lib/convertSalary.js';

const CurrencyContext = createContext();

export const useCurrency = () => useContext(CurrencyContext);

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrencyState] = useState(() => {
    const saved = localStorage.getItem('preferred_currency');
    return saved || 'USD';
  });

  const setCurrency = (newCurrency) => {
    setCurrencyState(newCurrency);
    localStorage.setItem('preferred_currency', newCurrency);
  };

  const convertSalary = (amount, fromCurrency = 'USD') => {
    return convertSalaryFn(amount, fromCurrency, currency);
  };

  const getCurrencySymbol = () => getSymbol(currency);

  const value = {
    currency,
    setCurrency,
    convertSalary,
    getCurrencySymbol,
    availableCurrencies: ['USD', 'INR', 'AUD', 'GBP', 'CAD', 'NPR']
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};
