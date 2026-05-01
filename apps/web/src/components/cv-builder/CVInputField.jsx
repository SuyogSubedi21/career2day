
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function CVInputField({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  type = 'text', 
  required = false,
  error = null 
}) {
  return (
    <div className="space-y-1.5 w-full">
      <Label className="text-sm font-semibold text-foreground/90 flex items-center">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </Label>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`bg-background shadow-sm transition-colors ${
          error ? 'border-destructive focus-visible:ring-destructive' : 'border-border focus-visible:ring-primary'
        }`}
      />
      {error && <p className="text-xs text-destructive mt-1 font-medium">{error}</p>}
    </div>
  );
}
