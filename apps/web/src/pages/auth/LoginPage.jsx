
import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { toast } from 'sonner';
import GoogleIcon from '@/components/icons/GoogleIcon.jsx';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const returnTo = searchParams.get('returnTo') || '/dashboard';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    console.log(`[LoginPage] Initiating login flow for: ${email}`);
    
    try {
      const result = await login(email, password);
      console.log('[LoginPage] Login successful, redirecting to:', returnTo);
      toast.success('Logged in successfully');
      navigate(returnTo);
    } catch (error) {
      console.error('[LoginPage] Authentication failed:', error);
      
      let errorMessage = 'An unexpected error occurred during login.';
      
      if (error.status === 400) {
        errorMessage = 'Invalid email or password. Please double-check your credentials.';
      } else if (error.status === 403) {
        errorMessage = 'Account access denied. Please contact support.';
      } else if (error.status === 404) {
        errorMessage = 'Account not found. Please check your email or sign up.';
      } else if (error.status === 0 || !navigator.onLine || error.isAbort) {
        errorMessage = 'Network error. Please check your internet connection and try again.';
      } else if (error.message) {
        errorMessage = error.message === 'Failed to authenticate.' 
          ? 'Invalid email or password. Please double-check your credentials.' 
          : error.message;
      }

      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4 py-12">
      <Helmet>
        <title>Log In | Career2Day</title>
      </Helmet>
      
      <div className="w-full max-w-md bg-card rounded-2xl shadow-xl border border-border/50 p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Log in to continue your career journey</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input 
                id="email" 
                type="email" 
                placeholder="you@example.com" 
                className="pl-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link to="/forgot-password" className="text-sm text-primary hover:underline">Forgot password?</Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                className="pl-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
          </div>

          <Button type="submit" className="w-full h-12 text-lg font-semibold" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Log In'} <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </form>

        <div className="mt-6 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-card text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <div className="mt-6">
          <Button 
            type="button" 
            variant="outline" 
            className="w-full h-12" 
            disabled={isLoading}
            onClick={() => loginWithGoogle().then(() => navigate(returnTo))}
          >
            <GoogleIcon className="mr-2 h-5 w-5" />
            Google
          </Button>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Don't have an account? <Link to="/signup" className="text-primary font-semibold hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
