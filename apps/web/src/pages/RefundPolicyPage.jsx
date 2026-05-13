import React from 'react';
import SEOHead from '@/components/SEOHead.jsx';
import PolicyPageShell from '@/components/PolicyPageShell.jsx';

const sections = [
  {
    title: 'Overview',
    body: 'Many Career2Day features are currently free to use. If Career2Day offers paid plans, premium tools, digital downloads, or one-time purchases, this policy explains when refunds may be available and how to request one.',
  },
  {
    title: 'Refund window',
    body: 'For eligible paid plans or premium feature purchases, you may request a refund within 7 calendar days of the original purchase date. We review requests based on purchase date, access history, usage, delivery status, and the reason for the request.',
  },
  {
    title: 'Usually eligible for a refund',
    items: [
      'A duplicate charge for the same account and same billing period.',
      'An accidental purchase reported within 7 calendar days with limited usage.',
      'A technical issue on Career2Day that prevents access to a paid feature and cannot be resolved in a reasonable time.',
      'A paid plan purchased within 7 calendar days where premium features were not substantially used.',
    ],
  },
  {
    title: 'Usually not refundable',
    items: [
      'Requests made after the 7 calendar day window, unless required by applicable law.',
      'Free features, free trials, promotional credits, coupons, or complimentary access.',
      'One-time digital downloads, exported files, or delivered digital products after successful delivery, unless there was a duplicate charge or technical failure.',
      'Accounts showing refund abuse, fraud, policy violations, or repeated purchase-and-refund behavior.',
      'Bank fees, currency conversion costs, or other third-party charges that Career2Day does not control.',
    ],
  },
  {
    title: 'Subscriptions and cancellations',
    body: 'If subscriptions are offered, cancellation stops future renewals but does not automatically refund the current billing period. If you cancel because of a technical issue or accidental purchase, contact support within the refund window so we can review it.',
  },
  {
    title: 'How to request a refund',
    body: 'Email admin@career2day.com with your account email, purchase date, payment reference or receipt, the product or plan purchased, and a short explanation of the issue. Clear details help us review faster.',
  },
  {
    title: 'Review and processing time',
    body: 'We usually respond within 3 business days. Approved refunds are returned to the original payment method when possible. Your bank, card issuer, or payment provider may take 5 to 10 business days to show the refund after it is issued.',
  },
  {
    title: 'Chargebacks and payment disputes',
    body: 'Please contact us first so we can help resolve billing issues quickly. If a chargeback or payment dispute is opened, account access may be limited while the payment provider reviews the case.',
  },
  {
    title: 'Policy updates',
    body: 'We may update this policy when pricing, payment providers, product features, or operational needs change. The latest version will always be posted on this page with the updated date.',
  },
];

export default function RefundPolicyPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Refund Policy - Career2Day',
    url: 'https://career2day.com/refund-policy',
  };

  return (
    <>
      <SEOHead
        title="Refund Policy - Career2Day"
        description="Read Career2Day's refund policy for eligible paid plans, premium features, digital downloads, cancellations, and billing support."
        keywords="refund policy, Career2Day refunds, cancellation policy"
        ogUrl="https://career2day.com/refund-policy"
        type="website"
        schema={schema}
      />
      <PolicyPageShell
        eyebrow="Billing policy"
        title="Refund Policy"
        description="A straightforward refund policy for paid Career2Day features, with clear eligibility rules, request steps, and processing timelines."
        lastUpdated="May 13, 2026"
        contactEmail="admin@career2day.com"
        highlights={[
          { title: '7-day review window', body: 'Eligible paid purchases can be reviewed within 7 calendar days.' },
          { title: 'Free tools stay free', body: 'Free features, trials, and credits do not require refunds.' },
          { title: 'Clear support path', body: 'Send purchase details and the issue so support can review quickly.' },
        ]}
        sections={sections}
      />
    </>
  );
}
