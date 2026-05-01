
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, CheckCircle2, AlertCircle, Building2, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient.js';
import apiServerClient from '@/lib/apiServerClient.js';

export const KhaltiPaymentButton = ({ planType, amount, userId, email, onSuccess }) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    if (!userId) {
      toast.error('Please log in to continue');
      return;
    }
    
    setLoading(true);
    try {
      // Backend integration task (handled by backend agent, we just consume it)
      const res = await apiServerClient.fetch('/khalti/initiate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planType, amount, userId, email })
      });
      
      if (!res.ok) throw new Error('Payment initiation failed');
      const data = await res.json();
      
      if (data.paymentUrl) {
        window.location.href = data.paymentUrl;
      } else {
        throw new Error('No payment URL received');
      }
    } catch (err) {
      console.error(err);
      toast.error('Failed to initiate Khalti payment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button 
      onClick={handlePayment} 
      disabled={loading}
      className="w-full h-12 text-lg font-bold bg-[hsl(var(--khalti))] text-[hsl(var(--khalti-foreground))] hover:brightness-110 active:scale-[0.98] transition-all"
    >
      <Smartphone className="w-5 h-5 mr-2" />
      {loading ? 'Processing...' : 'Pay with Khalti'}
    </Button>
  );
};

export const ESewaPaymentButton = ({ planType, amount, userId, email }) => {
  const handlePayment = () => {
    toast.info('eSewa integration is coming soon. Please use Khalti or Bank Transfer.');
  };

  return (
    <Button 
      onClick={handlePayment} 
      className="w-full h-12 text-lg font-bold bg-[hsl(var(--esewa))] text-[hsl(var(--esewa-foreground))] hover:brightness-110 active:scale-[0.98] transition-all"
    >
      <Smartphone className="w-5 h-5 mr-2" />
      Pay with eSewa
    </Button>
  );
};

export const BankTransferOption = ({ planType, amount, userId, email, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      toast.error('Please upload your payment receipt');
      return;
    }
    if (!userId) {
      toast.error('Please log in to continue');
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('userId', userId);
      formData.append('user_email', email);
      formData.append('plan_type', planType);
      formData.append('amount', amount.toString());
      formData.append('payment_method', 'bank_transfer');
      formData.append('status', 'pending');
      formData.append('payment_proof', file);

      await pb.collection('khalti_subscriptions').create(formData, { $autoCancel: false });
      
      toast.success('Payment receipt submitted! An admin will verify your payment shortly.');
      setFile(null);
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error(err);
      toast.error('Failed to submit receipt. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-muted p-6 rounded-xl border border-border mt-4">
      <div className="flex items-center gap-2 mb-4 text-foreground font-bold">
        <Building2 className="w-5 h-5 text-primary" />
        Bank Details
      </div>
      
      <div className="space-y-2 text-sm text-muted-foreground mb-6 font-mono bg-background p-4 rounded-lg border border-border">
        <p><span className="font-semibold text-foreground">Bank:</span> Global IME Bank</p>
        <p><span className="font-semibold text-foreground">Account Name:</span> CareerMastery Pvt Ltd</p>
        <p><span className="font-semibold text-foreground">Account Number:</span> 012345678901234</p>
        <p><span className="font-semibold text-foreground">Branch:</span> Kathmandu Main</p>
        <p><span className="font-semibold text-foreground">Amount to Transfer:</span> ${amount}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="receipt" className="text-foreground">Upload Payment Receipt</Label>
          <Input 
            id="receipt" 
            type="file" 
            accept="image/*,.pdf" 
            onChange={(e) => setFile(e.target.files[0])}
            className="cursor-pointer bg-background"
          />
        </div>
        <Button 
          type="submit" 
          disabled={loading || !file} 
          className="w-full font-bold bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {loading ? 'Submitting...' : 'Submit for Verification'}
        </Button>
      </form>
    </div>
  );
};
