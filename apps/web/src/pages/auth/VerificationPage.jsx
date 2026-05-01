
import React from 'react';
import { Navigate } from 'react-router-dom';

// This file is deprecated and no longer used. Redirecting to home.
export default function VerificationPage() {
  return <Navigate to="/" replace />;
}
