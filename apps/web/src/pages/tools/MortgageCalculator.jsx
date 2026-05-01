
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(400000);
  const [downPayment, setDownPayment] = useState(80000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [years, setYears] = useState(30);

  const principal = homePrice - downPayment;
  const monthlyRate = (interestRate / 100) / 12;
  const numberOfPayments = years * 12;
  
  const monthlyPayment = principal * 
    (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  const totalPaid = monthlyPayment * numberOfPayments;
  const totalInterest = totalPaid - principal;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Helmet><title>Mortgage Calculator - CareerFlow</title></Helmet>
      <div>
        <h1 className="text-3xl font-bold mb-2">Mortgage Calculator</h1>
        <p className="text-muted-foreground">Calculate your monthly mortgage payments and total interest.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card p-6 rounded-2xl space-y-6">
          <div className="space-y-2">
            <Label>Home Price ($)</Label>
            <Input type="number" value={homePrice} onChange={(e) => setHomePrice(Number(e.target.value))} />
          </div>
          <div className="space-y-2">
            <Label>Down Payment ($)</Label>
            <Input type="number" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} />
          </div>
          <div className="space-y-2">
            <Label>Interest Rate (%)</Label>
            <Input type="number" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} />
          </div>
          <div className="space-y-2">
            <Label>Loan Term (Years)</Label>
            <Input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} />
          </div>
        </div>

        <div className="glass-card p-6 rounded-2xl flex flex-col justify-center space-y-6">
          <div className="text-center p-6 bg-primary/10 rounded-xl">
            <p className="text-sm text-primary font-medium mb-2">Estimated Monthly Payment</p>
            <p className="text-4xl font-bold text-primary">${monthlyPayment.toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
            <p className="text-xs text-muted-foreground mt-2">Principal & Interest only</p>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Principal Amount</span>
              <span className="font-medium">${principal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Total Interest Paid</span>
              <span className="font-medium">${totalInterest.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
            </div>
            <div className="flex justify-between text-sm font-bold pt-3 border-t">
              <span>Total Cost of Loan</span>
              <span>${totalPaid.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
