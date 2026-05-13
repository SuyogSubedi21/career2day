
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
import GoogleIcon from '@/components/icons/GoogleIcon.jsx';

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
                placeholder="Your name"
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
            onClick={() => loginWithGoogle({ mode: 'signup' }).then(() => navigate('/dashboard'))}
          >
            <GoogleIcon className="mr-2 h-5 w-5" />
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
