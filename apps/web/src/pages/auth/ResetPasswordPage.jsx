
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Lock, Loader2, AlertCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient.js';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const token = searchParams.get('token');

  useEffect(() => {
    console.log(`[ResetPassword] Initializing with token: ${token ? 'Present' : 'Missing'}`);
    if (!token) {
      toast.error('Invalid or missing reset token');
    }
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!token) {
      toast.error('Invalid or missing reset token');
      return;
    }

    if (password.length < 8) {
      toast.error('Password must be at least 8 characters long');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    setIsSubmitting(true);
    console.log(`[ResetPassword] Submitting new password for token...`);
    
    try {
      await pb.collection('users').confirmPasswordReset(token, password, confirmPassword, { $autoCancel: false });
      console.log(`[ResetPassword] Password reset successful`);
      toast.success('Password updated successfully. You can now log in with your new password.');
      navigate('/login');
    } catch (error) {
      console.error('[ResetPassword] Confirm reset error:', error);
      // Provide a clear error message for expired/invalid tokens
      const errorMessage = error.status === 400 
        ? 'Reset link has expired or is invalid. Request a new one.' 
        : (error.message || 'Failed to reset password. Please try again.');
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4 py-12">
        <Helmet><title>Invalid Token | Career2Day</title></Helmet>
        <div className="w-full max-w-md bg-card rounded-2xl shadow-xl border border-border/50 p-8 text-center">
          <div className="w-16 h-16 bg-destructive/10 text-destructive rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Invalid Reset Link</h1>
          <p className="text-muted-foreground mb-8">This password reset link is invalid or has expired. Please request a new one.</p>
          <Button asChild className="w-full h-12">
            <Link to="/forgot-password">Request New Link</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4 py-12">
      <Helmet>
        <title>Create New Password | Career2Day</title>
      </Helmet>
      
      <div className="w-full max-w-md bg-card rounded-2xl shadow-xl border border-border/50 p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Create New Password</h1>
          <p className="text-muted-foreground">Please enter your new password below.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="password">New Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                className="pl-10 h-12"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isSubmitting}
                minLength={8}
              />
            </div>
            <p className="text-xs text-muted-foreground">Must be at least 8 characters long.</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input 
                id="confirmPassword" 
                type="password" 
                placeholder="••••••••" 
                className="pl-10 h-12"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={isSubmitting}
                minLength={8}
              />
            </div>
          </div>

          <Button type="submit" className="w-full h-12 text-lg font-semibold" disabled={isSubmitting}>
            {isSubmitting ? (
              <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Saving...</>
            ) : (
              'Reset Password'
            )}
          </Button>

          <div className="text-center pt-4">
            <Link to="/login" className="text-sm text-muted-foreground hover:text-primary hover:underline inline-flex items-center transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Log In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
