
import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEOHead({ 
  title = 'CareerMastery - Elevate Your IT Career', 
  description = 'Your ultimate platform for IT career roadmaps, interview preparation, and professional CV building.', 
  keywords = 'IT career, interview prep, CV builder, coding practice, tech jobs', 
  ogImage = 'https://careermastery.com/og-image.jpg', 
  ogUrl = 'https://careermastery.com', 
  type = 'website',
  canonicalUrl = '',
  schema = null
}) {
  const currentUrl = canonicalUrl || typeof window !== 'undefined' ? window.location.href : ogUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
