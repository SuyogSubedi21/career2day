import React from 'react';
import SEOHead from '@/components/SEOHead.jsx';
import PolicyPageShell from '@/components/PolicyPageShell.jsx';

const sections = [
  {
    title: 'Agreement to these terms',
    body: 'By accessing or using Career2Day, you agree to these Terms of Service. If you do not agree, please do not use the platform. These terms apply to the website, career roadmaps, CV builder, interview preparation content, quizzes, guides, and any related features we provide.',
  },
  {
    title: 'What Career2Day provides',
    body: 'Career2Day is a career readiness platform for learning paths, project guidance, CV preparation, interview practice, salary research, and job-search planning. The platform provides educational and productivity tools. It does not guarantee employment, interviews, salary outcomes, admissions decisions, visas, or professional certifications.',
  },
  {
    title: 'Accounts and responsibility',
    items: [
      'Provide accurate account information and keep it updated.',
      'Keep your login details secure and notify us if you suspect unauthorized access.',
      'Use the platform for lawful career development, learning, and job-search preparation.',
      'You are responsible for the content you enter, upload, generate, export, or share through Career2Day.',
    ],
  },
  {
    title: 'Your content',
    body: 'You keep ownership of CV details, profile data, project notes, career goals, and other personal content you add. You give Career2Day permission to store, process, display, and format that content only as needed to provide the service, operate the platform, improve reliability, and support your account.',
  },
  {
    title: 'Acceptable use',
    items: [
      'Do not use Career2Day for illegal, harmful, abusive, deceptive, or discriminatory activity.',
      'Do not upload malware, attempt to bypass security, scrape at scale, overload systems, or interfere with other users.',
      'Do not copy, resell, or redistribute platform content as a competing product without written permission.',
      'Do not submit content that violates another person rights, privacy, or intellectual property.',
    ],
  },
  {
    title: 'Career guidance and accuracy',
    body: 'Roadmaps, salary ranges, project ratings, interview questions, guides, and recommendations are provided for learning and planning. We work to keep them useful and accurate, but the job market changes quickly. You should verify important decisions with employers, recruiters, official job postings, schools, certification providers, or other reliable sources.',
  },
  {
    title: 'Payments, plans, and cancellations',
    body: 'If Career2Day offers paid features, prices, billing periods, taxes, and renewal terms will be shown before purchase. You are responsible for payment information you provide. You can cancel future renewals through the available account controls or by contacting support. Refund requests are handled under our Refund Policy.',
  },
  {
    title: 'Platform content and intellectual property',
    body: 'Career2Day owns or licenses the website design, software, templates, learning content, interview material, branding, and other platform assets. You may use CV exports and personal outputs for your own job search, portfolio, and career development, but you may not claim ownership of the platform itself or its underlying content library.',
  },
  {
    title: 'Availability and changes',
    body: 'We may update, improve, limit, suspend, or discontinue features as the product evolves. We try to keep the service reliable, but interruptions may happen because of maintenance, hosting issues, security events, third-party providers, or factors outside our control.',
  },
  {
    title: 'Disclaimers and liability',
    body: 'Career2Day is provided on an as-available basis. To the fullest extent allowed by applicable law, we are not responsible for indirect, incidental, special, consequential, or lost-profit damages resulting from your use of the platform. Our total liability for paid services is limited to the amount you paid Career2Day for the affected service during the 3 months before the claim.',
  },
  {
    title: 'Suspension or termination',
    body: 'We may suspend or terminate access if you violate these terms, create risk for other users, misuse the service, fail to pay for paid features, or use Career2Day in a way that could harm the platform. You may stop using Career2Day at any time.',
  },
  {
    title: 'Updates to these terms',
    body: 'We may update these terms as the product, pricing, or legal requirements change. The updated version will be posted on this page with a new date. Continued use of Career2Day after updates means you accept the revised terms.',
  },
];

export default function TermsOfServicePage() {
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
        title="Terms of Service - Career2Day"
        description="Review the Career2Day terms for using career roadmaps, CV builder tools, interview preparation, and related platform features."
        keywords="terms of service, Career2Day terms, user agreement"
        ogUrl="https://career2day.com/terms-of-service"
        type="website"
        schema={schema}
      />
      <PolicyPageShell
        title="Terms of Service"
        description="The practical rules for using Career2Day, including accounts, acceptable use, paid features, platform content, and career guidance limits."
        lastUpdated="May 13, 2026"
        contactEmail="admin@career2day.com"
        highlights={[
          { title: 'Career support, not guarantees', body: 'We help with preparation, but jobs and salaries depend on employers and markets.' },
          { title: 'Your content stays yours', body: 'You own the CV details and personal career information you add.' },
          { title: 'Use it fairly', body: 'Do not abuse the platform, copy it as a competing service, or harm other users.' },
        ]}
        sections={sections}
      />
    </>
  );
}
