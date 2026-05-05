import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function ResetPasswordPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-28 text-center">
      <h1 className="text-3xl font-extrabold">Set a new password</h1>
      <p className="mt-3 text-muted-foreground">This placeholder keeps auth routes stable while the free product experience remains public.</p>
      <Button asChild className="mt-6"><Link to="/">Return home</Link></Button>
    </div>
  );
}
