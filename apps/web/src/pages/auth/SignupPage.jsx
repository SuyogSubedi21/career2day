
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Mail, Lock, User, ArrowRight, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/AuthContext.jsx';
import pb from '@/lib/pocketbaseClient.js';

export default function SignupPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { register, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (setter) => (e) => {
    setError('');
    setSuccess('');
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    if (!fullName.trim()) {
      setError('Full name is required.');
      return;
    }

    setIsLoading(true);
    
    try {
      const result = await register(email, password, confirmPassword, fullName);
      
      if (!result.success) {
        console.error('Signup failed:', result.error);
        setError(result.error);
        setIsLoading(false);
      } else {
        pb.authStore.clear();

        setFullName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setIsLoading(false);

        setSuccess('Account created successfully! Redirecting to login...');
        toast.success('Account created successfully!');
        
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
    } catch (err) {
      console.error('Unexpected signup error:', err);
      setError('An unexpected error occurred during registration.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background px-4 py-12">
      <Helmet>
        <title>Sign Up | Career2Day</title>
      </Helmet>
      
      <div className="w-full max-w-md bg-card rounded-2xl shadow-xl border border-border p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2 text-foreground">Create an Account</h1>
          <p className="text-muted-foreground">Start your journey to a better career</p>
        </div>

        {success && (
          <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-start gap-3 text-green-600 dark:text-green-400 transition-all animate-in fade-in slide-in-from-top-2">
            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
            <p className="text-sm font-medium">{success}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input 
                id="fullName" 
                placeholder="John Doe" 
                className="pl-10 bg-background text-foreground"
                value={fullName}
                onChange={handleInputChange(setFullName)}
                disabled={isLoading || !!success}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input 
                id="email" 
                type="email" 
                placeholder="you@example.com" 
                className="pl-10 bg-background text-foreground"
                value={email}
                onChange={handleInputChange(setEmail)}
                disabled={isLoading || !!success}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                className="pl-10 bg-background text-foreground"
                value={password}
                onChange={handleInputChange(setPassword)}
                disabled={isLoading || !!success}
              />
            </div>
            <p className="text-xs text-muted-foreground">Must be at least 8 characters.</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input 
                id="confirmPassword" 
                type="password" 
                placeholder="••••••••" 
                className="pl-10 bg-background text-foreground"
                value={confirmPassword}
                onChange={handleInputChange(setConfirmPassword)}
                disabled={isLoading || !!success}
              />
            </div>
          </div>

          <div className="pt-2">
            <Button type="submit" className="w-full h-12 text-lg font-semibold shadow-md transition-all" disabled={isLoading || !!success}>
              {isLoading ? (
                <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Creating account...</>
              ) : (
                <>Sign Up <ArrowRight className="ml-2 h-5 w-5" /></>
              )}
            </Button>
            
            {error && (
              <div className="mt-3 flex items-center justify-center gap-1.5 text-sm text-destructive animate-in fade-in zoom-in-95">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span className="font-medium">{error}</span>
              </div>
            )}
          </div>
        </form>

        <div className="mt-6 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-card text-muted-foreground">Or sign up with</span>
          </div>
        </div>

        <div className="mt-6">
          <Button 
            type="button" 
            variant="outline" 
            className="w-full h-12 bg-background hover:bg-muted text-foreground transition-all" 
            disabled={isLoading || !!success}
            onClick={() => loginWithGoogle().then(() => navigate('/dashboard'))}
          >
            <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Google
          </Button>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Already have an account? <Link to="/login" className="text-primary font-semibold hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}
