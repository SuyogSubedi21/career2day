
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Mail, ArrowLeft, Loader2, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient.js';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    setIsSubmitting(true);
    try {
      await pb.collection('users').requestPasswordReset(email.trim().toLowerCase(), { $autoCancel: false });
      toast.success('If an account exists, a reset link has been sent.');
      setIsSubmitted(true);
    } catch (error) {
      console.error('[ForgotPassword] Password reset request error:', error);
      toast.error('Could not send the reset email. Check PocketBase SMTP settings and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12 dark:bg-slate-950">
      <Helmet>
        <title>Forgot Password | Career2Day</title>
      </Helmet>
      
      <div className="w-full max-w-md rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-[0_24px_70px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-slate-900">
        <div className="text-center mb-8">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <h1 className="text-3xl font-black tracking-tight mb-2">Reset your password</h1>
          <p className="text-muted-foreground">Enter your account email. If it exists, PocketBase will send a secure reset link.</p>
        </div>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center space-y-6 py-4">
            <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">Check your email</h2>
              <p className="text-muted-foreground">
                If this account exists, we sent a reset link to <br/>
                <span className="font-medium text-foreground">{email}</span>
              </p>
            </div>
            <Button variant="outline" className="w-full h-12" onClick={() => setIsSubmitted(false)}>
              Try another email
            </Button>
            <Link to="/login" className="text-sm text-primary hover:underline font-medium inline-flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Log In
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="you@example.com" 
                  className="pl-10 h-12"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <Button type="submit" className="w-full h-12 text-lg font-semibold" disabled={isSubmitting}>
              {isSubmitting ? (
                <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Sending...</>
              ) : (
                'Send Reset Link'
              )}
            </Button>

            <div className="text-center pt-4">
              <Link to="/login" className="text-sm text-muted-foreground hover:text-primary hover:underline inline-flex items-center transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Log In
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
