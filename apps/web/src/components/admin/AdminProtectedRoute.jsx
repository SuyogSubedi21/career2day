
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAdminAuth } from '@/contexts/AdminAuthContext.jsx';
import { Loader2 } from 'lucide-react';

export default function AdminProtectedRoute() {
  const { isAdminLoggedIn, isLoading } = useAdminAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdminLoggedIn) {
    // Redirect to home page if not an admin
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
