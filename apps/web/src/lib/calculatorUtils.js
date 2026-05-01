
export const stateData = {
  CA: { name: 'California', colIndex: 150, taxRate: 0.093 },
  TX: { name: 'Texas', colIndex: 95, taxRate: 0 },
  NY: { name: 'New York', colIndex: 135, taxRate: 0.0685 },
  FL: { name: 'Florida', colIndex: 105, taxRate: 0 },
  IL: { name: 'Illinois', colIndex: 100, taxRate: 0.0495 },
  PA: { name: 'Pennsylvania', colIndex: 98, taxRate: 0.0307 },
  OH: { name: 'Ohio', colIndex: 92, taxRate: 0.0275 },
  GA: { name: 'Georgia', colIndex: 98, taxRate: 0.0575 },
  NC: { name: 'North Carolina', colIndex: 95, taxRate: 0.0475 },
  WA: { name: 'Washington', colIndex: 115, taxRate: 0 }
};

export const calculateAmortization = (principal, annualRate, years) => {
  const monthlyRate = annualRate / 100 / 12;
  const totalPayments = years * 12;
  const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
  
  let balance = principal;
  let schedule = [];
  let totalInterest = 0;

  for (let i = 1; i <= totalPayments; i++) {
    const interest = balance * monthlyRate;
    const principalPayment = monthlyPayment - interest;
    balance -= principalPayment;
    totalInterest += interest;
    
    if (i % 12 === 0 || i === 1) {
      schedule.push({
        month: i,
        payment: monthlyPayment,
        principal: principalPayment,
        interest: interest,
        balance: Math.max(0, balance)
      });
    }
  }

  return { monthlyPayment, totalInterest, schedule };
};

export const calculateCompoundInterest = (principal, monthlyContribution, annualRate, years) => {
  const monthlyRate = annualRate / 100 / 12;
  const totalMonths = years * 12;
  let balance = principal;
  let data = [];

  for (let i = 1; i <= totalMonths; i++) {
    balance = (balance + monthlyContribution) * (1 + monthlyRate);
    if (i % 12 === 0) {
      data.push({
        year: i / 12,
        balance: Math.round(balance),
        contributions: Math.round(principal + (monthlyContribution * i))
      });
    }
  }
  return { finalBalance: balance, data };
};
