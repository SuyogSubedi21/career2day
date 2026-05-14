
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Helmet } from 'react-helmet';
import { Loader2, Eye, EyeOff, User, Lock, Mail, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import GoogleIcon from '@/components/icons/GoogleIcon.jsx';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const { register, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name || !email || !password || !confirmPassword) {
      toast.error('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (password.length < 8) {
      toast.error('Password must be at least 8 characters long');
      return;
    }

    if (!acceptedTerms) {
      toast.error('You must accept the Terms of Service');
      return;
    }

    setLoading(true);
    try {
      const result = await register(email.trim().toLowerCase(), password, confirmPassword, name.trim());
      if (!result.success) {
        throw new Error(result.error);
      }
      toast.success('Account created successfully. Please log in to continue.');
      navigate('/login');
    } catch (error) {
      let errorMessage = 'Failed to create account. Please try again.';
      if (error.response?.data?.email?.code === 'validation_invalid_email') {
        errorMessage = 'Invalid email address.';
      } else if (error.response?.data?.email?.code === 'validation_not_unique') {
        errorMessage = 'An account with this email already exists.';
      } else if (error.message) {
        errorMessage = error.message;
      }
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setLoading(true);
    try {
      await loginWithGoogle({ mode: 'signup' });
      navigate('/dashboard');
    } catch {
      // AuthContext shows the error toast.
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 dark:bg-slate-950 sm:px-6 lg:px-8">
      <Helmet>
        <title>Create Account | Career2Day</title>
      </Helmet>

      <div className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-6xl overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_28px_90px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-slate-900 lg:grid-cols-[440px_1fr]">
        <section className="hidden bg-slate-950 p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <Link to="/" className="inline-flex items-center gap-3 text-white">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600">
              <Briefcase className="h-5 w-5" />
            </span>
            <span className="text-xl font-black tracking-tight">Career2Day</span>
          </Link>

          <div>
            <h1 className="text-4xl font-black leading-tight tracking-tight">Build a launch-ready career profile.</h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Create one account for roadmap progress, CV drafts, interview practice, and saved careers.
            </p>
          </div>

          <div className="grid gap-4">
            {['Free career roadmaps', 'Role-aware CV builder', 'Interview prep with hints and answers'].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 className="h-5 w-5 text-blue-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="flex items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-lg">
            <div className="mb-8 lg:hidden">
              <Link to="/" className="inline-flex items-center gap-3 text-foreground">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Briefcase className="h-5 w-5" />
                </span>
                <span className="text-xl font-black tracking-tight">Career2Day</span>
              </Link>
            </div>

            <div className="mb-8">
              <h1 className="text-3xl font-black tracking-tight text-slate-950 dark:text-white">Create your account</h1>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Start with free tools and keep your work connected.</p>
            </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="name"
                type="text"
                placeholder="Jane Doe"
                className="pl-10 h-11 bg-background text-foreground"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                disabled={loading}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="pl-10 h-11 bg-background text-foreground"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                disabled={loading}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className="pl-10 pr-10 h-11 bg-background text-foreground"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                  disabled={loading}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Confirm password"
                  className="pl-10 pr-10 h-11 bg-background text-foreground"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  autoComplete="new-password"
                  disabled={loading}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
          
          {password && password.length < 8 && (
            <p className="text-xs text-destructive">Password must be at least 8 characters long.</p>
          )}

          <div className="flex items-start space-x-2 pt-2">
            <input 
              type="checkbox" 
              id="terms" 
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary bg-background"
            />
            <Label htmlFor="terms" className="font-normal text-sm text-muted-foreground leading-snug cursor-pointer">
              I agree to the <Link to="/terms-of-service" className="text-primary hover:underline">Terms of Service</Link> and <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
            </Label>
          </div>

          <Button type="submit" className="h-12 w-full rounded-xl text-base font-bold shadow-lg shadow-primary/20" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Creating account...
              </>
            ) : (
              <>Create account <ArrowRight className="ml-2 h-4 w-4" /></>
            )}
          </Button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-semibold uppercase text-muted-foreground">or</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <Button type="button" variant="outline" className="h-12 w-full rounded-xl font-bold" disabled={loading} onClick={handleGoogleSignup}>
          <GoogleIcon className="mr-2 h-5 w-5" />
          Continue with Google
        </Button>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-primary hover:underline transition-all">
              Sign in instead
            </Link>
          </p>
        </div>
          </div>
        </section>
      </div>
    </div>
  );
}
