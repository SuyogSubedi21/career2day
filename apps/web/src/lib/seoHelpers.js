
export const generateMetaTags = ({ title, description, keywords, url, image, type = 'website' }) => {
  return [
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: type },
    { property: 'og:url', content: url },
    { property: 'og:image', content: image || 'https://careerflow.example.com/og-default.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image || 'https://careerflow.example.com/twitter-default.jpg' }
  ];
};

export const generateStructuredData = (schema) => {
  return JSON.stringify(schema);
};

export const generateBreadcrumbs = (items) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CareerFlow",
    "url": "https://careerflow.example.com",
    "logo": "https://careerflow.example.com/logo.png"
  };
};

export const generateJobPostingSchema = (career, minSalary, maxSalary) => {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": career.name,
    "description": career.description || career.overview,
    "datePosted": new Date().toISOString().split('T')[0],
    "employmentType": "FULL_TIME",
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": minSalary,
        "maxValue": maxSalary,
        "unitText": "YEAR"
      }
    }
  };
};
