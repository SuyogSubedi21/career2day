import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function ForgotPasswordPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-28 text-center">
      <h1 className="text-3xl font-extrabold">Password reset</h1>
      <p className="mt-3 text-muted-foreground">Password reset can be connected to PocketBase email later. Core career tools do not require login.</p>
      <Button asChild className="mt-6"><Link to="/">Return home</Link></Button>
    </div>
  );
}
