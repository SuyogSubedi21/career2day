
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Helmet } from 'react-helmet';
import { Loader2, Eye, EyeOff, User, Lock, Mail, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const calculateStrength = (pass) => {
    if (!pass) return { text: '', color: 'bg-transparent' };
    if (pass.length < 6) return { text: 'Weak', color: 'bg-destructive' };
    if (pass.length < 10) return { text: 'Medium', color: 'bg-amber-500' };
    return { text: 'Strong', color: 'bg-emerald-500' };
  };

  const strength = calculateStrength(password);

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

    setLoading(true);
    try {
      await register(email, password, name);
      toast.success('Account created successfully!');
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12 relative overflow-hidden">
      <Helmet>
        <title>Create Account | CareerMastery</title>
      </Helmet>

      {/* Decorative background effects */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[480px] glass-card-premium rounded-[2rem] p-8 md:p-10 relative z-10"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary shadow-lg shadow-primary/30 text-primary-foreground mb-6 hover:scale-105 transition-transform">
            <Briefcase className="w-6 h-6" />
          </Link>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground mb-2">Create Account</h1>
          <p className="text-muted-foreground text-sm font-medium">Start building your future today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2.5">
            <Label htmlFor="name" className="font-semibold text-foreground/90">Full Name</Label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="name"
                type="text"
                placeholder="Maya Chen"
                className="pl-10 h-12 bg-background/50 border-border/50 text-foreground focus-visible:ring-primary shadow-sm rounded-xl transition-all"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
                required
              />
            </div>
          </div>

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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2.5">
              <Label htmlFor="password" className="font-semibold text-foreground/90">Password</Label>
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
              </div>
              {password && (
                <div className="flex items-center gap-2 mt-2">
                  <div className={`h-1.5 flex-1 rounded-full ${strength.text === 'Weak' ? 'bg-destructive' : strength.text === 'Medium' ? 'bg-amber-500' : 'bg-emerald-500'}`} />
                  <div className={`h-1.5 flex-1 rounded-full ${strength.text === 'Weak' ? 'bg-muted' : strength.text === 'Medium' ? 'bg-amber-500' : 'bg-emerald-500'}`} />
                  <div className={`h-1.5 flex-1 rounded-full ${strength.text === 'Strong' ? 'bg-emerald-500' : 'bg-muted'}`} />
                  <span className="text-[10px] font-bold text-muted-foreground w-10 text-right">{strength.text}</span>
                </div>
              )}
            </div>

            <div className="space-y-2.5">
              <Label htmlFor="confirmPassword" className="font-semibold text-foreground/90">Confirm</Label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="pl-10 pr-10 h-12 bg-background/50 border-border/50 text-foreground focus-visible:ring-primary shadow-sm rounded-xl transition-all"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
          </div>

          <Button type="submit" className="w-full h-12 mt-4 text-base font-bold rounded-xl shadow-lg shadow-primary/20 transition-all hover:translate-y-[-1px] active:translate-y-[1px]" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Registering...
              </>
            ) : (
              'Register'
            )}
          </Button>
        </form>

        <div className="mt-8 text-center pt-6 border-t border-border/40">
          <p className="text-sm text-muted-foreground font-medium">
            Already have an account?{' '}
            <Link to="/login" className="font-bold text-primary hover:text-primary/80 transition-colors">
              Login here
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
