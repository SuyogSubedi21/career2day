
import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Helmet } from 'react-helmet';
import { Loader2, Eye, EyeOff, Lock, Mail, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/home';

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      await login(email, password);
      toast.success('Welcome back!');
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12 relative overflow-hidden">
      <Helmet>
        <title>Login | CareerMastery</title>
      </Helmet>

      {/* Decorative background effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[420px] glass-card-premium rounded-[2rem] p-8 md:p-10 relative z-10"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary shadow-lg shadow-primary/30 text-primary-foreground mb-6 hover:scale-105 transition-transform">
            <Briefcase className="w-6 h-6" />
          </Link>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground mb-2">Welcome Back</h1>
          <p className="text-muted-foreground text-sm font-medium">Sign in to continue your career journey</p>
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
                disabled={loading}
                required
              />
            </div>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="font-semibold text-foreground/90">Password</Label>
              <a href="#" className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors" onClick={(e) => { e.preventDefault(); toast.info("Password reset link sent to your email."); }}>
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="pl-10 pr-10 h-12 bg-background/50 border-border/50 text-foreground focus-visible:ring-primary shadow-sm rounded-xl transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          <Button type="submit" className="w-full h-12 text-base font-bold rounded-xl shadow-lg shadow-primary/20 transition-all hover:translate-y-[-1px] active:translate-y-[1px]" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Signing in...
              </>
            ) : (
              'Login'
            )}
          </Button>
        </form>

        <div className="mt-8 text-center pt-6 border-t border-border/40">
          <p className="text-sm text-muted-foreground font-medium">
            Don't have an account?{' '}
            <Link to="/register" className="font-bold text-primary hover:text-primary/80 transition-colors">
              Register here
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
