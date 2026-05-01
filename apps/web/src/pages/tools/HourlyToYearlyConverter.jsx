
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const HourlyToYearlyConverter = () => {
  const [hourlyRate, setHourlyRate] = useState(35);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [weeksPerYear, setWeeksPerYear] = useState(50); // 2 weeks vacation

  const yearly = hourlyRate * hoursPerWeek * weeksPerYear;
  const monthly = yearly / 12;
  const weekly = hourlyRate * hoursPerWeek;
  const daily = weekly / 5;

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <Helmet><title>Hourly to Yearly Converter - CareerFlow</title></Helmet>
      <div>
        <h1 className="text-3xl font-bold mb-2">Hourly to Yearly Converter</h1>
        <p className="text-muted-foreground">Convert your hourly wage to an annual salary.</p>
      </div>

      <div className="glass-card p-6 rounded-2xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>Hourly Rate ($)</Label>
            <Input 
              type="number" 
              value={hourlyRate} 
              onChange={(e) => setHourlyRate(Number(e.target.value))}
            />
          </div>
          <div className="space-y-2">
            <Label>Hours per Week</Label>
            <Input 
              type="number" 
              value={hoursPerWeek} 
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
            />
          </div>
          <div className="space-y-2">
            <Label>Weeks per Year</Label>
            <Input 
              type="number" 
              value={weeksPerYear} 
              onChange={(e) => setWeeksPerYear(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
          <div className="p-4 bg-muted rounded-xl text-center">
            <p className="text-sm text-muted-foreground mb-1">Daily</p>
            <p className="text-xl font-bold">${daily.toLocaleString()}</p>
          </div>
          <div className="p-4 bg-muted rounded-xl text-center">
            <p className="text-sm text-muted-foreground mb-1">Weekly</p>
            <p className="text-xl font-bold">${weekly.toLocaleString()}</p>
          </div>
          <div className="p-4 bg-muted rounded-xl text-center">
            <p className="text-sm text-muted-foreground mb-1">Monthly</p>
            <p className="text-xl font-bold">${monthly.toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
          </div>
          <div className="p-4 bg-primary/10 rounded-xl text-center">
            <p className="text-sm text-primary font-medium mb-1">Yearly</p>
            <p className="text-2xl font-bold text-primary">${yearly.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourlyToYearlyConverter;
