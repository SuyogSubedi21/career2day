
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function CVFieldInput({ label, value, onChange, placeholder, required, error, type = 'text', className = '' }) {
  return (
    <div className={`space-y-2 ${className}`}>
      <Label className="text-foreground/90 font-medium">
        {label} {required && <span className="text-destructive">*</span>}
      </Label>
      {type === 'textarea' ? (
        <Textarea
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`min-h-[100px] bg-background/50 focus:bg-background transition-colors ${error ? 'border-destructive focus-visible:ring-destructive' : ''}`}
        />
      ) : (
        <Input
          type={type}
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`bg-background/50 focus:bg-background transition-colors ${error ? 'border-destructive focus-visible:ring-destructive' : ''}`}
        />
      )}
      {error && <p className="text-xs text-destructive font-medium">{error}</p>}
    </div>
  );
}
