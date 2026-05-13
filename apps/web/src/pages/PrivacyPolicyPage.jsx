import React from 'react';
import SEOHead from '@/components/SEOHead.jsx';
import PolicyPageShell from '@/components/PolicyPageShell.jsx';

const sections = [
  {
    title: 'What this policy covers',
    body: 'This policy explains how Career2Day handles information when you use our career roadmaps, CV builder, interview preparation tools, quizzes, blog, contact forms, and related website features.',
  },
  {
    title: 'Information we collect',
    body: 'We collect only the information needed to run and improve the platform.',
    items: [
      'Account and contact information, such as your name, email address, login details, and support messages.',
      'Career content you choose to enter, including CV details, skills, projects, education, work history, target roles, progress notes, quiz activity, and interview practice history.',
      'Usage and device information, such as pages visited, browser type, approximate location, error logs, referral source, and performance data.',
      'Payment-related information if paid features are offered. Card details are handled by payment providers; Career2Day does not store full card numbers.',
    ],
  },
  {
    title: 'CV builder and roadmap data',
    body: 'Content you add to the CV builder or roadmap tools belongs to you. Some features may store drafts, preferences, and progress in your browser so the app can restore your work on the same device. If account-based saving is enabled, the same type of content may be stored securely with your account so you can access it across sessions.',
  },
  {
    title: 'How we use information',
    items: [
      'Provide, personalize, and maintain the Career2Day experience.',
      'Save progress, generate CV content, show role-specific roadmaps, and organize interview preparation.',
      'Send account, support, security, billing, or product update messages.',
      'Understand which features are useful, fix bugs, measure performance, and improve content quality.',
      'Protect the platform from spam, abuse, fraud, security incidents, and unauthorized access.',
    ],
  },
  {
    title: 'Cookies and local storage',
    body: 'Career2Day may use cookies, local storage, and similar browser technologies for sign-in sessions, theme preferences, saved drafts, progress tracking, analytics, and basic security. You can clear browser storage at any time, but doing so may remove local drafts or preferences.',
  },
  {
    title: 'When we share information',
    body: 'We do not sell your personal information. We may share limited information with trusted service providers that help us host the website, process payments, send email, analyze reliability, provide support, or protect the service. We may also disclose information if required by law, to enforce our terms, or to prevent harm.',
  },
  {
    title: 'Security and retention',
    body: 'We use practical administrative, technical, and organizational safeguards to protect information. No online service can guarantee perfect security, so avoid adding sensitive personal data that is not needed for career preparation. We keep information only as long as reasonably needed for the purposes described here, unless a longer period is required for legal, tax, security, or dispute reasons.',
  },
  {
    title: 'Your choices',
    items: [
      'You can update or remove information in your account where the platform provides those controls.',
      'You can request access, correction, deletion, or export of personal information by contacting us.',
      'You can unsubscribe from marketing emails using the link in the email, while still receiving important account or transaction messages.',
      'You can clear cookies and local storage in your browser, which may remove saved drafts on that device.',
    ],
  },
  {
    title: 'Children and international users',
    body: 'Career2Day is intended for learners and job seekers who are at least 13 years old. If you use the platform from outside the country where our systems or service providers operate, your information may be processed in other regions with different data protection rules.',
  },
  {
    title: 'Updates to this policy',
    body: 'We may update this policy as Career2Day changes. When we do, we will revise the date on this page and, when appropriate, provide additional notice in the product or by email.',
  },
];

export default function PrivacyPolicyPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Career2Day',
    url: 'https://career2day.com',
    logo: 'https://career2day.com/logo.png',
  };

  return (
    <>
      <SEOHead
        title="Privacy Policy - Career2Day"
        description="Learn how Career2Day collects, uses, protects, and manages information for career roadmaps, CV building, and interview preparation."
        keywords="privacy policy, data protection, Career2Day privacy"
        ogUrl="https://career2day.com/privacy-policy"
        type="website"
        schema={schema}
      />
      <PolicyPageShell
        title="Privacy Policy"
        description="A clear explanation of what Career2Day collects, why it is used, when it is shared, and how you can manage your information."
        lastUpdated="May 13, 2026"
        contactEmail="privacy@career2day.com"
        highlights={[
          { title: 'You own your CV content', body: 'Your resume details, projects, and career notes remain your content.' },
          { title: 'No selling personal data', body: 'We do not sell personal information to advertisers or data brokers.' },
          { title: 'Practical control', body: 'You can request access, correction, deletion, or export of your information.' },
        ]}
        sections={sections}
      />
    </>
  );
}
