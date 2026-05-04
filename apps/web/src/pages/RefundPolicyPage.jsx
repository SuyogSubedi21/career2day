import React from 'react';
import SEOHead from '@/components/SEOHead.jsx';

export default function RefundPolicyPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Refund Policy - Career2Day',
    url: 'https://career2day.com/refund-policy',
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <SEOHead
        title="Refund Policy - Career2Day"
        description="Read Career2Day's refund policy for subscriptions, eligibility windows, and how to request a refund."
        keywords="refund policy, subscription refunds, cancellation policy"
        ogUrl="https://career2day.com/refund-policy"
        type="website"
        schema={schema}
      />

      <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert prose-headings:font-bold prose-a:text-primary">
        <h1 className="text-4xl md:text-5xl tracking-tight mb-4">Refund Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: May 4, 2026</p>

        <h2>1. Overview</h2>
        <p>
          This Refund Policy describes when payments for Career2Day premium features can be refunded. By purchasing
          a paid plan, you agree to this policy.
        </p>

        <h2>2. Eligibility Window</h2>
        <p>
          You may request a refund within 7 calendar days of the original purchase date if you are not satisfied with
          the service.
        </p>

        <h2>3. Non-Refundable Cases</h2>
        <ul>
          <li>Requests submitted after the 7-day refund window.</li>
          <li>Repeated refund requests from accounts showing abuse or fraudulent behavior.</li>
          <li>Any third-party fees charged by payment processors or banks.</li>
        </ul>

        <h2>4. Partial Usage</h2>
        <p>
          If substantial premium usage has already occurred, we may issue a partial refund or deny the request based
          on account activity and fair-use review.
        </p>

        <h2>5. How to Request a Refund</h2>
        <p>
          Email support at <a href="mailto:support@career2day.com">support@career2day.com</a> with your account
          email, purchase date, and payment reference. We usually respond within 3 business days.
        </p>

        <h2>6. Processing Time</h2>
        <p>
          Approved refunds are sent to the original payment method. Depending on your bank or payment provider,
          processing may take 5 to 10 business days.
        </p>

        <h2>7. Policy Changes</h2>
        <p>
          We may update this policy to reflect operational or legal changes. The updated version will always be posted
          on this page with a revised date.
        </p>
      </div>
    </div>
  );
}
