
import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Helmet } from 'react-helmet';
import { Loader2, Eye, EyeOff, Lock, Mail, Briefcase, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import GoogleIcon from '@/components/icons/GoogleIcon.jsx';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      await login(email.trim().toLowerCase(), password);
      navigate(from, { replace: true });
    } catch (error) {
      let errorMessage = 'Failed to log in. Please check your credentials.';
      if (error.status === 400) {
        errorMessage = 'Invalid email or password.';
      }
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await loginWithGoogle();
      navigate(from, { replace: true });
    } catch {
      // AuthContext shows the error toast.
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 dark:bg-slate-950 sm:px-6 lg:px-8">
      <Helmet>
        <title>Login | Career2Day</title>
      </Helmet>

      <div className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-6xl overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_28px_90px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-slate-900 lg:grid-cols-[1fr_440px]">
        <section className="hidden bg-slate-950 p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <Link to="/" className="inline-flex items-center gap-3 text-white">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600">
              <Briefcase className="h-5 w-5" />
            </span>
            <span className="text-xl font-black tracking-tight">Career2Day</span>
          </Link>

          <div className="max-w-xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-blue-100">
              <Sparkles className="h-4 w-4" />
              Roadmaps, CVs, and interview prep in one workspace
            </div>
            <h1 className="text-5xl font-black leading-tight tracking-tight">
              Pick up exactly where your career plan left off.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Sign in to manage saved CVs, bookmarked careers, interview progress, and roadmap activity.
            </p>
          </div>

          <div className="grid gap-3 text-sm text-slate-300">
            {['Protected account access', 'Browser-based CV workspace', 'Progress saved to your profile'].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-blue-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="flex items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-md">
            <div className="mb-8 lg:hidden">
              <Link to="/" className="inline-flex items-center gap-3 text-foreground">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Briefcase className="h-5 w-5" />
                </span>
                <span className="text-xl font-black tracking-tight">Career2Day</span>
              </Link>
            </div>

            <div className="mb-8">
              <h1 className="text-3xl font-black tracking-tight text-slate-950 dark:text-white">Welcome back</h1>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Continue your roadmap, CV drafts, and interview preparation.
              </p>
            </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2.5">
            <Label htmlFor="email" className="font-semibold text-foreground/90">Email address</Label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="pl-10 h-12 bg-background/50 border-border/50 text-foreground focus-visible:ring-primary shadow-sm rounded-xl transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                disabled={loading}
                required
              />
            </div>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="font-semibold text-foreground/90">Password</Label>
              <Link to="/forgot-password" className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="pl-10 pr-10 h-12 bg-background/50 border-border/50 text-foreground focus-visible:ring-primary shadow-sm rounded-xl transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                disabled={loading}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <Button type="submit" className="h-12 w-full rounded-xl text-base font-bold shadow-lg shadow-primary/20" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Signing in...
              </>
            ) : (
              <>Sign in <ArrowRight className="ml-2 h-4 w-4" /></>
            )}
          </Button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-semibold uppercase text-muted-foreground">or</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <Button type="button" variant="outline" className="h-12 w-full rounded-xl font-bold" disabled={loading} onClick={handleGoogleLogin}>
          <GoogleIcon className="mr-2 h-5 w-5" />
          Continue with Google
        </Button>

        <div className="mt-8 text-center pt-6 border-t border-border/40">
          <p className="text-sm text-muted-foreground font-medium">
            Don't have an account?{' '}
            <Link to="/signup" className="font-bold text-primary hover:text-primary/80 transition-colors">
              Create account
            </Link>
          </p>
        </div>
          </div>
        </section>
      </div>
    </div>
  );
}
