
import React from 'react';
import SEOHead from '@/components/SEOHead.jsx';

export default function PrivacyPolicyPage() {
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
        title="Privacy Policy - Career2Day"
        description="Read Career2Day's privacy policy to understand how we protect your data and personal information."
        keywords="privacy policy, data protection, privacy"
        ogUrl="https://career2day.com/privacy-policy"
        type="website"
        schema={schema}
      />
      <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert prose-headings:font-bold prose-a:text-primary">
        <h1 className="text-4xl md:text-5xl tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: April 26, 2026</p>
        
        <h2>1. Introduction</h2>
        <p>Welcome to Career2Day. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
        
        <h2>2. Information We Collect</h2>
        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
        <ul>
          <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
          <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
          <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
          <li><strong>Profile Data:</strong> includes your username and password, your interests, preferences, feedback and survey responses, as well as CV data you input into our builder.</li>
        </ul>
        
        <h2>3. How We Use Your Information</h2>
        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
        <ul>
          <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., providing CV building services).</li>
          <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          <li>Where we need to comply with a legal obligation.</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>

        <h2>5. Your Rights</h2>
        <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
        <ul>
          <li>Request access to your personal data.</li>
          <li>Request correction of your personal data.</li>
          <li>Request erasure of your personal data.</li>
          <li>Object to processing of your personal data.</li>
        </ul>

        <h2>6. Contact Us</h2>
        <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
        <p>Email: <a href="mailto:privacy@career2day.com">privacy@career2day.com</a></p>
      </div>
    </div>
  );
}
