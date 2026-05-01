
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CreditCard, Calendar, Download, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { useAuth } from '@/contexts/AuthContext.jsx';
import apiServerClient from '@/lib/apiServerClient.js';
import SEOHead from '@/components/SEOHead.jsx';
import { toast } from 'sonner';

export default function SubscriptionPage() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [subscription, setSubscription] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cancelModalOpen, setCancelModalOpen] = useState(false);

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const response = await apiServerClient.fetch(`/stripe/subscription/${currentUser.email}`);
        if (response.ok) {
          const data = await response.json();
          setSubscription(data);
        } else {
          // If 404, user has no subscription history
          setSubscription(null);
        }
      } catch (error) {
        console.error('Error fetching subscription:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSubscription();
  }, [currentUser]);

  const handleCancelSubscription = () => {
    setCancelModalOpen(false);
    // Real implementation would call Stripe customer portal or backend API
    toast.info('Subscription cancellation is handled via the billing portal. Redirecting...');
    setTimeout(() => toast.info('Billing portal integration coming soon!'), 1500);
  };

  const getPlanDisplayName = (type) => {
    if (type === 'premium_monthly') return 'Premium Monthly';
    if (type === 'premium_annual') return 'Premium Annual';
    return 'Free Tier';
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center"><Loader2 className="w-10 h-10 animate-spin text-primary" /></div>;
  }

  const isPremium = subscription && subscription.status === 'active';

  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <SEOHead title="Manage Subscription | CareerMastery" />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-8 text-foreground">Subscription Management</h1>

        {/* Current Plan Section */}
        <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-6 text-foreground">Current Plan</h2>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-muted/50 p-6 rounded-lg border border-border">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-extrabold text-foreground">
                    {isPremium ? getPlanDisplayName(subscription.plan_type) : 'Free Plan'}
                  </h3>
                  <Badge variant="outline" className={isPremium ? "border-success text-success bg-success/10" : "border-muted-foreground text-muted-foreground"}>
                    {isPremium ? 'Active' : 'Current'}
                  </Badge>
                </div>
                
                {isPremium ? (
                  <p className="text-muted-foreground flex items-center text-sm">
                    <Calendar className="w-4 h-4 mr-2" /> 
                    Renews on {new Date(subscription.renewal_date).toLocaleDateString()}
                  </p>
                ) : (
                  <p className="text-muted-foreground text-sm">You are currently on the basic free tier.</p>
                )}
              </div>
              
              <div className="flex flex-col gap-3 w-full md:w-auto">
                {!isPremium ? (
                  <Button asChild className="w-full md:w-auto rounded-lg bg-primary text-primary-foreground font-bold">
                    <Link to="/pricing">Upgrade to Premium</Link>
                  </Button>
                ) : (
                  <>
                    <Button variant="outline" className="w-full md:w-auto rounded-lg border-border hover:bg-muted" onClick={() => toast.info('Billing portal coming soon!')}>
                      Update Payment Method
                    </Button>
                    <div className="flex gap-2">
                      <Button asChild variant="outline" className="w-full md:w-auto rounded-lg border-border hover:bg-muted">
                        <Link to="/pricing">Change Plan</Link>
                      </Button>
                      <Button variant="outline" className="w-full md:w-auto rounded-lg text-destructive hover:bg-destructive/10 border-border" onClick={() => setCancelModalOpen(true)}>
                        Cancel
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Billing History */}
        <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 sm:p-8 border-b border-border">
            <h2 className="text-xl font-bold text-foreground">Billing History</h2>
            <p className="text-muted-foreground text-sm">View past payments and download invoices.</p>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-muted/50">
                <TableRow className="border-border">
                  <TableHead className="text-foreground">Date</TableHead>
                  <TableHead className="text-foreground">Plan</TableHead>
                  <TableHead className="text-foreground">Amount</TableHead>
                  <TableHead className="text-foreground">Status</TableHead>
                  <TableHead className="text-right text-foreground">Invoice</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {!subscription || !subscription.amount_paid ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-10 text-muted-foreground">
                      No billing history found.
                    </TableCell>
                  </TableRow>
                ) : (
                  <TableRow className="border-border">
                    <TableCell className="font-medium text-foreground">{new Date(subscription.subscription_date || subscription.created).toLocaleDateString()}</TableCell>
                    <TableCell className="text-muted-foreground">{getPlanDisplayName(subscription.plan_type)}</TableCell>
                    <TableCell className="text-muted-foreground">${(subscription.amount_paid / 100).toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="border-success text-success bg-success/10">Paid</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" onClick={() => toast.success('Downloading invoice...')} className="text-primary hover:text-primary/80">
                        <Download className="w-4 h-4 mr-2" /> PDF
                      </Button>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Cancel Dialog */}
        <Dialog open={cancelModalOpen} onOpenChange={setCancelModalOpen}>
          <DialogContent className="sm:max-w-md rounded-xl bg-card border-border">
            <DialogHeader>
              <DialogTitle className="text-xl flex items-center gap-2 text-foreground">
                <AlertCircle className="w-5 h-5 text-destructive" /> Cancel Subscription
              </DialogTitle>
              <DialogDescription className="text-foreground/80 pt-2">
                Are you sure you want to cancel your Premium subscription? You will lose access to premium templates, unlimited downloads, and advanced analytics at the end of your billing cycle.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex-col sm:flex-row gap-3 mt-4">
              <Button variant="outline" onClick={() => setCancelModalOpen(false)} className="rounded-lg w-full sm:w-auto border-border text-foreground hover:bg-muted">
                Keep Subscription
              </Button>
              <Button variant="destructive" onClick={handleCancelSubscription} className="rounded-lg w-full sm:w-auto font-bold">
                Yes, Cancel Subscription
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

      </div>
    </div>
  );
}
