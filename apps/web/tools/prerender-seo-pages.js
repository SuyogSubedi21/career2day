import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { allCareerSummaries, careerPlatformData } from '../src/data/careerPlatformData.js';
import { careerBlogArticles } from '../src/data/careerBlogArticles.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(__dirname, '..');
const distRoot = path.resolve(webRoot, '../../dist/apps/web');
const templatePath = path.join(distRoot, 'index.html');

const siteUrl = 'https://career2day.com';

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const stripHtml = (value = '') =>
  String(value)
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const paragraph = (text) => `<p>${escapeHtml(text)}</p>`;
const list = (items = []) => `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;

const blogChartSummaries = {
  'how-to-follow-a-career-roadmap-without-getting-overwhelmed': {
    title: 'Weekly roadmap balance',
    description: 'A practical roadmap works best when learning, building, review, and applications stay connected.',
    data: [['Learn', 35], ['Build', 30], ['Review', 15], ['Apply', 20]]
  },
  'cv-mistakes-that-stop-good-candidates-getting-interviews': {
    title: 'CV clarity impact',
    description: 'Recruiter confidence rises when CV claims are tied to tools, outcomes, and readable project proof.',
    data: [['Generic claims', 28], ['Tool evidence', 58], ['Project proof', 76], ['Outcome bullets', 88]]
  },
  'how-to-practice-interview-questions-so-answers-sound-real': {
    title: 'Interview practice improvement',
    description: 'Answers usually improve when candidates move from memorizing to project-based practice.',
    data: [['Session 1', 35], ['Session 2', 48], ['Session 3', 61], ['Session 4', 72], ['Session 5', 84]]
  },
  'how-to-become-an-ai-engineer-with-a-job-ready-portfolio': {
    title: 'AI portfolio evidence mix',
    description: 'A stronger AI portfolio shows more than notebooks: evaluation, API thinking, and product reliability matter.',
    data: [['Notebook', 45], ['Evaluation', 70], ['API', 62], ['Monitoring', 54], ['Writeup', 80]]
  },
  'frontend-engineer-roadmap-from-html-to-production-ui': {
    title: 'Frontend readiness ladder',
    description: 'Frontend readiness grows as fundamentals become usable workflows with quality and polish.',
    data: [['HTML/CSS', 30], ['JS', 45], ['React', 62], ['APIs', 74], ['Quality', 86]]
  },
  'why-quizzes-improve-career-readiness-when-used-correctly': {
    title: 'Readiness score weighting',
    description: 'Quiz scores are useful when they are combined with roadmap progress and interview practice.',
    data: [['Roadmap', 40], ['Quizzes', 35], ['Interview', 25]]
  },
  'portfolio-projects-that-make-a-cv-stronger': {
    title: 'Project strength signals',
    description: 'Projects become stronger when they show relevance, documentation, deployment, and interview stories.',
    data: [['Role fit', 82], ['README', 72], ['Screenshots', 58], ['Deployed app', 68], ['CV bullet', 88]]
  },
  'ats-keywords-without-making-your-cv-sound-robotic': {
    title: 'ATS keyword quality',
    description: 'Keyword value increases when terms are placed inside honest, evidence-based CV bullets.',
    data: [['Stuffed list', 35], ['Skills', 55], ['Projects', 78], ['Experience', 86]]
  },
  'what-job-ready-really-means-for-beginners': {
    title: 'Beginner readiness pillars',
    description: 'Job-ready beginners combine fundamentals, proof, communication, and application materials.',
    data: [['Fundamentals', 30], ['Proof', 30], ['Communication', 20], ['Applications', 20]]
  },
  'how-to-prepare-for-your-first-90-days-in-a-tech-role': {
    title: 'First 90 days focus curve',
    description: 'The early ramp shifts from learning context to reliable contribution and visible ownership.',
    data: [['Day 1', 20], ['Day 15', 42], ['Day 30', 58], ['Day 60', 76], ['Day 90', 90]]
  }
};

const blogChartContent = (slug) => {
  const chart = blogChartSummaries[slug];
  if (!chart) return '';

  return `
    <h2>${escapeHtml(chart.title)}</h2>
    ${paragraph(chart.description)}
    <table>
      <thead><tr><th>Signal</th><th>Score</th></tr></thead>
      <tbody>
        ${chart.data.map(([label, value]) => `<tr><td>${escapeHtml(label)}</td><td>${escapeHtml(value)}%</td></tr>`).join('')}
      </tbody>
    </table>
  `;
};

const layout = ({ title, description, canonical, content, schema }) => {
  let html = baseTemplate;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escapeHtml(description)}" />`);
  html = html.replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`);
  html = html.replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`);
  html = html.replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escapeHtml(title)}" />`);
  html = html.replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${escapeHtml(description)}" />`);

  const schemaScript = schema
    ? `<script type="application/ld+json">${JSON.stringify(schema)}</script>`
    : '';
  html = html.replace('</head>', `${schemaScript}\n  </head>`);

  const seoContent = `<div id="root"><main id="seo-static-content" style="max-width:960px;margin:0 auto;padding:48px 20px;font-family:Inter,Arial,sans-serif;line-height:1.7;color:#111827">${content}</main></div>`;
  html = html.replace('<div id="root"></div>', seoContent);
  return html;
};

const writeRoute = (route, page) => {
  const routePath = route === '/' ? '' : route.replace(/^\/|\/$/g, '');
  const outDir = path.join(distRoot, routePath);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), layout(page));
};

const pageSchema = (route, title, description) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  description,
  url: `${siteUrl}${route === '/' ? '/' : route}`
});

const homeContent = () => `
  <h1>Career2Day - Career Roadmaps, CV Builder and Interview Prep</h1>
  ${paragraph('Career2Day helps learners move from beginner to job-ready with practical career roadmaps, interview preparation, quizzes, project guidance, and a role-aware CV builder.')}
  <h2>What Career2Day offers</h2>
  ${list(['Step-by-step career roadmaps for technology roles.', 'Interview questions and quiz practice connected to each career path.', 'A browser-based CV builder that helps turn skills and projects into application-ready content.', 'Career articles about learning, portfolios, ATS keywords, interviews, and first-role preparation.'])}
  <h2>Featured career paths</h2>
  ${list(careerPlatformData.map((career) => `${career.name}: ${career.description || career.tagline}`))}
  <h2>Why the platform exists</h2>
  ${paragraph('Many learners collect tutorials without a clear path to proof. Career2Day organizes learning into outcomes, projects, readiness signals, and CV material so preparation becomes visible and useful.')}
`;

const careersContent = () => `
  <h1>Career Roadmaps</h1>
  ${paragraph('Browse the Career2Day catalog of technology careers. Complete tracks include skills, tools, projects, interview preparation, quiz practice, and CV guidance.')}
  ${allCareerSummaries.map((career) => `
    <section>
      <h2>${escapeHtml(career.name)}</h2>
      ${paragraph(`${career.name} is listed in the ${career.category} category. Status: ${career.status === 'complete' ? 'complete roadmap available' : 'catalog slot ready for expansion'}.`)}
      <p><a href="/careers/${career.slug}">Open ${escapeHtml(career.name)} roadmap</a></p>
    </section>
  `).join('')}
`;

const careerContent = (career) => `
  <h1>${escapeHtml(career.name)} Roadmap</h1>
  ${paragraph(career.description || career.tagline || `${career.name} career roadmap and preparation guide.`)}
  <h2>Core skills</h2>
  ${list(career.requiredSkills || [])}
  <h2>Tools to practise</h2>
  ${list(career.tools || [])}
  <h2>Learning roadmap</h2>
  ${(career.roadmap || []).map((phase) => `
    <section>
      <h3>${escapeHtml(phase.phase)} - ${escapeHtml(String(phase.timelineWeeks || ''))} weeks</h3>
      ${paragraph((phase.skills || []).join(', '))}
      ${paragraph(`Project: ${phase.miniProject || 'Build a portfolio-ready proof point.'}`)}
      ${paragraph(`Outcome: ${phase.outcome || 'Demonstrate practical readiness for the role.'}`)}
    </section>
  `).join('')}
  <h2>Interview preparation</h2>
  ${list((career.interviewQuestions || []).slice(0, 20).map((item) => item.question || item.q || String(item)))}
  <h2>Frequently asked questions</h2>
  ${(career.faqs || []).map((faq) => `<h3>${escapeHtml(faq.question)}</h3>${paragraph(faq.answer)}`).join('')}
`;

const blogListContent = () => `
  <h1>Career2Day Blog</h1>
  ${paragraph('Read practical career articles about roadmaps, CVs, interviews, portfolio projects, ATS keywords, and first-role preparation.')}
  ${careerBlogArticles.map((article) => `
    <article>
      <h2><a href="/blog/${article.slug}">${escapeHtml(article.title)}</a></h2>
      ${paragraph(article.excerpt)}
    </article>
  `).join('')}
`;

const blogArticleContent = (article) => `
  <article>
    <h1>${escapeHtml(article.title)}</h1>
    ${paragraph(article.excerpt)}
    <p><strong>Category:</strong> ${escapeHtml(article.category)} | <strong>Reading time:</strong> ${escapeHtml(article.readingTime)} minutes</p>
    ${article.content}
    ${blogChartContent(article.slug)}
  </article>
`;

const simplePage = (title, description, sections) => `
  <h1>${escapeHtml(title)}</h1>
  ${paragraph(description)}
  ${sections.map(([heading, body]) => `<h2>${escapeHtml(heading)}</h2>${paragraph(body)}`).join('')}
`;

if (!fs.existsSync(templatePath)) {
  console.error(`[prerender-seo-pages] Missing build template: ${templatePath}`);
  process.exit(1);
}

const baseTemplate = fs.readFileSync(templatePath, 'utf8');

const routes = [
  ['/', {
    title: 'Career2Day - Career Roadmaps, CV Builder and Interview Prep',
    description: 'Career roadmaps, CV builder, interview prep, quizzes and readiness tracking in one connected career platform.',
    canonical: `${siteUrl}/`,
    content: homeContent(),
    schema: pageSchema('/', 'Career2Day', 'Career roadmaps, CV builder and interview prep.')
  }],
  ['/careers', {
    title: 'Career Roadmaps | Career2Day',
    description: 'Browse technology career roadmaps with skills, tools, projects, interview questions, quizzes and CV guidance.',
    canonical: `${siteUrl}/careers`,
    content: careersContent(),
    schema: pageSchema('/careers', 'Career Roadmaps', 'Browse technology career roadmaps.')
  }],
  ['/blog', {
    title: 'Career Blog | Career2Day',
    description: 'Career articles about roadmaps, resumes, interview practice, portfolios, ATS keywords and first job preparation.',
    canonical: `${siteUrl}/blog`,
    content: blogListContent(),
    schema: pageSchema('/blog', 'Career Blog', 'Career articles and job readiness guides.')
  }],
  ['/about', {
    title: 'About Career2Day',
    description: 'Career2Day helps learners present skills clearly through career roadmaps, interview preparation and CV building tools.',
    canonical: `${siteUrl}/about`,
    content: simplePage('About Career2Day', 'Career2Day was created to help learners turn preparation into proof that can be used in applications and interviews.', [
      ['Mission', 'Make practical career preparation accessible through structured roadmaps, interview practice and CV tools.'],
      ['Founder story', 'The platform began as a student-built response to the problem of capable candidates being hidden by weak CVs and unclear preparation.']
    ]),
    schema: pageSchema('/about', 'About Career2Day', 'About the Career2Day platform.')
  }],
  ['/contact', {
    title: 'Contact Career2Day',
    description: 'Contact Career2Day for support, privacy requests, content feedback and partnership inquiries.',
    canonical: `${siteUrl}/contact`,
    content: simplePage('Contact Career2Day', 'Reach Career2Day for account questions, content feedback, privacy requests and partnership inquiries.', [
      ['Support', 'Email support@career2day.com for account and product help.'],
      ['Privacy', 'Email privacy@career2day.com for data and privacy requests.'],
      ['Content feedback', 'Email editorial@career2day.com with page URLs and correction details.']
    ]),
    schema: pageSchema('/contact', 'Contact Career2Day', 'Contact and support information.')
  }],
  ['/pricing', {
    title: 'Pricing | Career2Day',
    description: 'Review Career2Day pricing for CV builder downloads, premium career preparation tools and subscription options.',
    canonical: `${siteUrl}/pricing`,
    content: simplePage('Career2Day Pricing', 'Career2Day keeps core career learning pages accessible while offering paid CV downloads and premium preparation features where available.', [
      ['Free career preparation', 'Public career roadmaps, career articles, and many preparation resources are available so learners can explore roles before paying.'],
      ['Paid tools', 'Paid downloads or subscription features may support CV export, template access, and additional preparation workflows.'],
      ['Billing support', 'For subscription or purchase questions, contact support@career2day.com with your account email and transaction details.']
    ]),
    schema: pageSchema('/pricing', 'Career2Day Pricing', 'Pricing and billing information.')
  }],
  ['/cv-builder', {
    title: 'CV Builder | Career2Day',
    description: 'Build a role-aware CV with Career2Day using skills, projects, summary guidance and ATS-friendly career preparation content.',
    canonical: `${siteUrl}/cv-builder`,
    content: simplePage('Career2Day CV Builder', 'The Career2Day CV builder helps learners turn skills, projects, education, and experience into a structured CV that is easier for recruiters to scan.', [
      ['Role-aware CV guidance', 'The builder connects career preparation to CV sections so users can describe projects, skills, and outcomes more clearly.'],
      ['ATS-friendly structure', 'Clear headings, concise bullet points, and relevant keywords help a CV communicate fit without sounding artificial.'],
      ['Private workflow', 'Users should never paste private passwords, API keys, or unrelated sensitive information into CV fields.']
    ]),
    schema: pageSchema('/cv-builder', 'Career2Day CV Builder', 'Role-aware CV builder.')
  }],
  ['/privacy-policy', {
    title: 'Privacy Policy - Career2Day',
    description: 'Learn how Career2Day collects, uses and protects account, CV and usage data.',
    canonical: `${siteUrl}/privacy-policy`,
    content: simplePage('Privacy Policy', 'Career2Day respects user privacy and explains what data is collected, why it is used and how users can contact us.', [
      ['Information we collect', 'We may collect account information, technical data, CV data entered by users and usage information needed to operate the platform.'],
      ['How we use information', 'Data is used to provide CV building, account access, platform improvement, security and support.'],
      ['Contact', 'Privacy questions can be sent to privacy@career2day.com.']
    ]),
    schema: pageSchema('/privacy-policy', 'Privacy Policy', 'Career2Day privacy policy.')
  }],
  ['/terms-of-service', {
    title: 'Terms of Service - Career2Day',
    description: 'Read the rules and conditions for using Career2Day career roadmaps, CV builder and interview tools.',
    canonical: `${siteUrl}/terms-of-service`,
    content: simplePage('Terms of Service', 'These terms explain acceptable use of Career2Day and the responsibilities of users who access the platform.', [
      ['Acceptable use', 'Users should use the platform for lawful career development, CV building and interview preparation.'],
      ['User content', 'CV information entered by users belongs to the user. Platform templates and original site content belong to Career2Day.'],
      ['Contact', 'Terms questions can be sent to terms@career2day.com.']
    ]),
    schema: pageSchema('/terms-of-service', 'Terms of Service', 'Career2Day terms of service.')
  }],
  ['/refund-policy', {
    title: 'Refund Policy - Career2Day',
    description: 'Read Career2Day refund and purchase guidance for paid downloads or subscriptions.',
    canonical: `${siteUrl}/refund-policy`,
    content: simplePage('Refund Policy', 'This page explains how users can contact Career2Day about purchases, billing issues or refund requests.', [
      ['Billing questions', 'Users should include the account email, purchase date and transaction reference when requesting help.'],
      ['Support review', 'Refund requests are reviewed based on the product purchased, payment status and applicable policy terms.']
    ]),
    schema: pageSchema('/refund-policy', 'Refund Policy', 'Career2Day refund policy.')
  }]
];

for (const career of careerPlatformData) {
  const title = career.seo?.title || `${career.name} Roadmap, Skills, Salary and Interview Questions | Career2Day`;
  const description = career.seo?.description || career.description || `${career.name} roadmap with skills, tools, projects and interview preparation.`;
  routes.push([`/careers/${career.slug}`, {
    title,
    description,
    canonical: `${siteUrl}/careers/${career.slug}`,
    content: careerContent(career),
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: `${career.name} Career Roadmap`,
      description,
      url: `${siteUrl}/careers/${career.slug}`
    }
  }]);
  routes.push([`/interview-questions/${career.slug}`, {
    title: `${career.name} Interview Questions | Career2Day`,
    description: `Practice ${career.name} interview questions with beginner, intermediate and advanced prompts.`,
    canonical: `${siteUrl}/interview-questions/${career.slug}`,
    content: `<h1>${escapeHtml(career.name)} Interview Questions</h1>${paragraph(`Practice interview questions for the ${career.name} path.`)}${list((career.interviewQuestions || []).slice(0, 60).map((item) => item.question || item.q || String(item)))}`,
    schema: pageSchema(`/interview-questions/${career.slug}`, `${career.name} Interview Questions`, `Interview questions for ${career.name}.`)
  }]);
}

for (const article of careerBlogArticles) {
  routes.push([`/blog/${article.slug}`, {
    title: `${article.title} | Career2Day`,
    description: article.excerpt,
    canonical: `${siteUrl}/blog/${article.slug}`,
    content: blogArticleContent(article),
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.excerpt,
      datePublished: article.publishedAt,
      author: { '@type': 'Organization', name: article.author || 'Career2Day' },
      url: `${siteUrl}/blog/${article.slug}`
    }
  }]);
}

for (const [route, page] of routes) {
  writeRoute(route, page);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(([route]) => `  <url><loc>${siteUrl}${route === '/' ? '/' : route}</loc><lastmod>2026-05-05</lastmod><changefreq>${route === '/' ? 'weekly' : 'monthly'}</changefreq><priority>${route === '/' ? '1.0' : '0.8'}</priority></url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(distRoot, 'sitemap.xml'), sitemap);

console.log(`[prerender-seo-pages] Wrote ${routes.length} crawlable route snapshots.`);
