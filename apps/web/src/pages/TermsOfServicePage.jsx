
import React from 'react';
import SEOHead from '@/components/SEOHead.jsx';

export default function TermsOfServicePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Career2Day",
    "url": "https://career2day.com",
    "logo": "https://career2day.com/logo.png"
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <SEOHead 
        title="Terms of Service - Career2Day"
        description="Read Career2Day's terms of service to understand the rules and conditions for using our platform."
        keywords="terms of service, terms and conditions, user agreement"
        ogUrl="https://career2day.com/terms-of-service"
        type="website"
        schema={schema}
      />
      <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert prose-headings:font-bold prose-a:text-primary">
        <h1 className="text-4xl md:text-5xl tracking-tight mb-4">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: April 26, 2026</p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using Career2Day ("the Platform"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using the Platform's particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
        
        <h2>2. User Responsibilities</h2>
        <p>You agree to use the service for its intended purpose of career development, CV building, and interview preparation. You must not:</p>
        <ul>
          <li>Use the Platform for any illegal or unauthorized purpose.</li>
          <li>Attempt to hack, destabilize, or adapt the Platform or its source code.</li>
          <li>Transmit any worms, viruses, or any code of a destructive nature.</li>
          <li>Reproduce, duplicate, copy, sell, resell or exploit any portion of the Service without express written permission by us.</li>
        </ul>

        <h2>3. Intellectual Property</h2>
        <p>The CV templates, platform design, interview content, and original text are the property of Career2Day and are protected by copyright and intellectual property laws. The specific content you generate (your personal CV data) belongs to you.</p>

        <h2>4. Limitation of Liability</h2>
        <p>Career2Day shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses resulting from the use or the inability to use the service.</p>

        <h2>5. Termination</h2>
        <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

        <h2>6. Changes to Terms</h2>
        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.</p>

        <h2>7. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at:</p>
        <p>Email: <a href="mailto:terms@career2day.com">terms@career2day.com</a></p>
      </div>
    </div>
  );
}
