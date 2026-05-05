
import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEOHead({ 
  title = 'Career2Day - Career Roadmaps, CV Builder and Interview Prep', 
  description = 'Career2Day helps learners move from beginner to job-ready with career roadmaps, quizzes, interview preparation, readiness tracking, and a private browser-based CV builder.', 
  keywords = 'IT career, interview prep, CV builder, coding practice, tech jobs', 
  ogImage = 'https://career2day.com/og-image.jpg', 
  ogUrl = 'https://career2day.com', 
  type = 'website',
  canonicalUrl = '',
  schema = null
}) {
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : ogUrl);
  const baseSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Career2Day',
      url: 'https://career2day.com',
      logo: 'https://career2day.com/favicon.svg'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Career2Day',
      url: 'https://career2day.com',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://career2day.com/careers?search={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    }
  ];
  const schemas = schema ? [...baseSchema, schema] : baseSchema;

  return (
    <Helmet>
      <html lang="en" />
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
      <meta name="robots" content="index,follow,max-image-preview:large" />
      <meta name="theme-color" content="#0f172a" />

      {/* Structured Data */}
      {schemas.map((item, index) => (
        <script key={`schema-${index}`} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}
