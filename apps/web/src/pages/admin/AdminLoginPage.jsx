
import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ShieldAlert, Lock, Mail, Loader2, AlertOctagon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdminAuth } from '@/contexts/AdminAuthContext.jsx';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('suyogsubedivlogs@gmail.com');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const { login, isAdminLoggedIn } = useAdminAuth();
  const navigate = useNavigate();

  // If already authenticated, redirect away from login
  if (isAdminLoggedIn) {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');
    
    try {
      await login(email, password);
      navigate('/admin');
    } catch (error) {
      setErrorMsg(error.message || 'Invalid credentials');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 py-12 relative overflow-hidden font-sans">
      <Helmet>
        <title>Admin Login | Secure Portal</title>
      </Helmet>
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-800 p-8 text-slate-100 relative z-10">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-slate-950 border border-slate-800 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">Admin Portal</h1>
          <p className="text-slate-400 text-sm">Restricted access area. Authorized personnel only.</p>
        </div>

        {errorMsg && (
          <div className="mb-6 p-4 bg-destructive/10 border border-destructive/30 rounded-lg flex items-start gap-3">
            <AlertOctagon className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
            <p className="text-sm text-destructive font-medium">{errorMsg}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-300 font-medium">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-500" />
              <Input 
                id="email" 
                type="email" 
                className="pl-10 bg-slate-950 border-slate-800 text-slate-400 cursor-not-allowed h-12"
                value={email}
                readOnly
                tabIndex={-1}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-slate-300 font-medium">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-500" />
              <Input 
                id="password" 
                type="password" 
                className="pl-10 bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-600 focus-visible:ring-primary focus-visible:border-primary h-12"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full h-12 text-md font-bold mt-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all active:scale-[0.98]" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Authenticating...</>
            ) : (
              'Secure Login'
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
