import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { allCareerSummaries, careerPlatformData } from '../src/data/careerPlatformData.js';
import { careerBlogArticles } from '../src/data/careerBlogArticles.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(__dirname, '..');
const distRoot = path.resolve(webRoot, '../../frontend');
const templatePath = path.join(distRoot, 'index.html');

const siteUrl = 'https://career2day.com';
const sitemapLastmod = '2026-05-06';

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
const linkList = (items = []) => `<ul>${items.map((item) => `<li><a href="${item.href}">${escapeHtml(item.label)}</a></li>`).join('')}</ul>`;
const textList = (items = []) => list(items.map((item) => {
  if (typeof item === 'string') return item;
  if (!item) return '';
  return item.description || item.title || JSON.stringify(item);
}));

const homepageFaqs = [
  ['Is Career2Day free?', 'Yes. Career2Day gives learners free access to career roadmaps, interview preparation, quizzes, readiness tracking, and the browser-based CV builder.'],
  ['Who is Career2Day for?', 'Career2Day is built for students, career switchers, and early-career professionals who want a clearer route from learning to portfolio proof and job applications.'],
  ['How does the CV builder connect to roadmaps?', 'Roadmaps help you build skills and projects, then the CV builder turns that work into role-aware summaries, skills, project bullets, and ATS-friendly wording.'],
  ['What careers can I plan on Career2Day?', 'Career2Day includes technology career tracks such as AI Engineer, Frontend Engineer, Data Analyst, Data Scientist, Machine Learning Engineer, and more.']
];

const ensureMeta = (html, selector, tag) => (selector.test(html) ? html.replace(selector, tag) : html.replace('</head>', `  ${tag}\n</head>`));

const careerUrl = (career) => `${siteUrl}/careers/${career.slug}`;

const relatedCareers = (career, limit = 5) => {
  const sameCategory = careerPlatformData.filter((item) => item.slug !== career.slug && item.category === career.category);
  const fallback = careerPlatformData.filter((item) => item.slug !== career.slug && item.category !== career.category);
  return [...sameCategory, ...fallback].slice(0, limit);
};

const careerAliases = [
  { alias: 'frontend-developer', target: 'frontend-engineer', label: 'Frontend Developer' },
  { alias: 'backend-developer', target: 'backend-engineer', label: 'Backend Developer' },
  { alias: 'cybersecurity-analyst', target: 'soc-analyst', label: 'Cybersecurity Analyst' }
];

const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

const faqSchema = (faqs = []) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Career2Day',
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/careers?search={search_term_string}`,
    'query-input': 'required name=search_term_string'
  }
};

const graphSchema = (...items) => ({
  '@context': 'https://schema.org',
  '@graph': items.filter(Boolean).map((item) => {
    const { '@context': _context, ...rest } = item;
    return rest;
  })
});

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
  html = ensureMeta(html, /<meta property="twitter:url" content="[^"]*" \/>/, `<meta property="twitter:url" content="${canonical}" />`);
  html = ensureMeta(html, /<meta property="twitter:title" content="[^"]*" \/>/, `<meta property="twitter:title" content="${escapeHtml(title)}" />`);
  html = ensureMeta(html, /<meta property="twitter:description" content="[^"]*" \/>/, `<meta property="twitter:description" content="${escapeHtml(description)}" />`);
  html = ensureMeta(html, /<meta property="twitter:image" content="[^"]*" \/>/, '<meta property="twitter:image" content="https://career2day.com/og-image.jpg" />');

  const schemaScript = schema
    ? `<script type="application/ld+json">${JSON.stringify(schema)}</script>`
    : '';
  const fallbackStyles = `
    <style>
      html{background:#f8fafc;color:#0f172a}body{margin:0;background:#f8fafc;font-family:Inter,Arial,sans-serif}#seo-shell{display:none;min-height:100vh}#seo-nav{position:sticky;top:0;z-index:10;border-bottom:1px solid #e2e8f0;background:rgba(248,250,252,.94);backdrop-filter:blur(16px)}#seo-nav-inner{max-width:1120px;margin:0 auto;padding:16px 20px;display:flex;align-items:center;gap:20px;flex-wrap:wrap}#seo-brand{margin-right:auto;font-weight:900;color:#0f172a;text-decoration:none;letter-spacing:-.02em}#seo-nav a:not(#seo-brand){color:#334155;text-decoration:none;font-weight:700;font-size:14px}#seo-static-content{max-width:960px;margin:0 auto;padding:56px 20px 72px;line-height:1.72;color:#1e293b}#seo-static-content h1{max-width:780px;margin:0 0 18px;font-size:clamp(36px,6vw,64px);line-height:1.02;letter-spacing:-.04em;color:#020617}#seo-static-content h2{margin:34px 0 10px;font-size:24px;line-height:1.2;color:#0f172a}#seo-static-content h3{margin:22px 0 8px;font-size:18px;color:#0f172a}#seo-static-content p{max-width:820px;margin:0 0 14px;font-size:18px}#seo-static-content ul{max-width:840px;margin:12px 0 0;padding-left:22px}#seo-static-content li{margin:8px 0;font-size:17px}#seo-static-content a{color:#1d4ed8;font-weight:800}#seo-footer{max-width:960px;margin:0 auto;padding:24px 20px 48px;color:#64748b}#seo-footer a{color:#334155;font-weight:800;text-decoration:none}@media (prefers-color-scheme:dark){html{background:#070b13;color:#e5e7eb}body{background:#070b13}#seo-nav{border-color:rgba(255,255,255,.1);background:rgba(7,11,19,.9)}#seo-brand,#seo-static-content h1,#seo-static-content h2,#seo-static-content h3{color:#fff}#seo-nav a:not(#seo-brand),#seo-static-content,#seo-footer a{color:#cbd5e1}#seo-static-content a{color:#93c5fd}#seo-footer{color:#94a3b8}}
    </style>
    <noscript><style>#seo-shell{display:block}</style></noscript>
  `;
  html = html.replace('</head>', `${schemaScript}${fallbackStyles}\n  </head>`);

  const seoNav = `
    <nav id="seo-nav" aria-label="Main navigation">
      <div id="seo-nav-inner">
        <a id="seo-brand" href="/">Career2Day</a>
        <a href="/">Home</a>
        <a href="/careers">Careers</a>
        <a href="/cv-builder">CV Builder</a>
        <a href="/blog">Blog</a>
        <a href="/pricing">Pricing</a>
        <a href="/contact">Contact Us</a>
      </div>
    </nav>
  `;
  const seoFooter = `
    <footer id="seo-footer">
      <a href="/contact">Contact Us</a>
    </footer>
  `;
  const seoContent = `<div id="root"><div id="seo-shell">${seoNav}<main id="seo-static-content">${content}</main>${seoFooter}</div></div>`;
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
  <h1>Free Career Roadmaps, CV Builder and Interview Prep</h1>
  ${paragraph('Career2Day helps learners move from lost to job-ready with free career roadmaps, interview preparation, quizzes, project guidance, readiness tracking, and a role-aware CV builder.')}
  <h2>What is Career2Day?</h2>
  ${paragraph('Career2Day is a free career readiness platform for learners who want more than a list of tutorials. It connects role-specific career roadmaps, interview practice, quizzes, project guidance, readiness tracking, and a browser-based CV builder so every step supports the same job goal.')}
  ${paragraph('Start by choosing a target career such as AI Engineer, Frontend Engineer, Data Analyst, or Data Scientist. Each path shows the skills to learn, tools to practise, projects to build, and interview topics to review. As you complete work, Career2Day helps turn that proof into stronger CV sections, clearer project bullets, and better answers for recruiters and hiring managers.')}
  <h2>What Career2Day offers</h2>
  ${list(['Step-by-step career roadmaps for technology roles.', 'Interview questions and quiz practice connected to each career path.', 'A browser-based CV builder that helps turn skills and projects into application-ready content.', 'Latest career guides about learning, portfolios, ATS keywords, interviews, and first-role preparation.', 'Weekly career tips for roadmap progress, CV improvements, interview prep, and portfolio ideas.'])}
  <h2>Featured career paths</h2>
  ${list(careerPlatformData.slice(0, 4).map((career) => `${career.name}: ${career.description || career.tagline}`))}
  <p><a href="/careers">Explore More</a></p>
  <h2>Frequently asked questions</h2>
  ${homepageFaqs.map(([question, answer]) => `<h3>${escapeHtml(question)}</h3>${paragraph(answer)}`).join('')}
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

const careerFaqs = (career) => {
  const totalWeeks = (career.roadmap || []).reduce((sum, phase) => sum + Number(phase.timelineWeeks || 0), 0);
  const projectTitles = (career.projects || []).slice(0, 3).map((project) => (
    typeof project === 'string' ? project : project.title || project.description
  )).filter(Boolean);
  return (career.faqs && career.faqs.length ? career.faqs : [
    { question: `How long does it take to become a ${career.name}?`, answer: `This ${career.name} roadmap is structured for about ${totalWeeks || 'several'} focused weeks of learning, projects, interview practice and CV preparation.` },
    { question: `What tools should a ${career.name} learn?`, answer: `${career.name} learners should practise tools such as ${(career.tools || []).join(', ')}.` },
    { question: `What projects should I build for ${career.name} roles?`, answer: `Build projects that prove role-specific skills, such as ${projectTitles.join(', ')}.` }
  ]);
};

const careerContent = (career) => `
  <h1>${escapeHtml(career.name)} Roadmap</h1>
  ${paragraph(career.description || career.tagline || `${career.name} career roadmap and preparation guide.`)}
  <nav aria-label="Breadcrumb">
    <ol>
      <li><a href="/">Home</a></li>
      <li><a href="/careers">Careers</a></li>
      <li>${escapeHtml(career.name)}</li>
    </ol>
  </nav>
  <h2>Core skills</h2>
  ${list(career.requiredSkills || [])}
  <h2>Detailed skill guide</h2>
  ${Object.entries(career.skillsDetailed || {}).map(([group, skills]) => `
    <section>
      <h3>${escapeHtml(group)} skills</h3>
      ${(skills || []).map((skill) => `
        <article>
          <h4>${escapeHtml(skill.name || String(skill))}</h4>
          ${skill.explanation ? paragraph(skill.explanation) : ''}
          ${skill.whyItMatters ? paragraph(`Why it matters: ${skill.whyItMatters}`) : ''}
        </article>
      `).join('')}
    </section>
  `).join('')}
  <h2>Tools to practise</h2>
  ${list(career.tools || [])}
  <h2>Projects for ${escapeHtml(career.name)} learners</h2>
  ${(career.projects || []).map((project, index) => `
    <article>
      <h3>Project ${index + 1}: ${escapeHtml(project.title || `Portfolio project ${index + 1}`)}</h3>
      ${paragraph(project.description || String(project))}
      ${project.difficulty ? paragraph(`Difficulty: ${project.difficulty}`) : ''}
      ${(project.technologies || project.toolsUsed)?.length ? `<h4>Technologies used</h4>${list(project.technologies || project.toolsUsed)}` : ''}
      ${project.skillsUsed?.length ? `<h4>Skills used</h4>${list(project.skillsUsed)}` : ''}
      ${project.deployment ? paragraph(`Deployment suggestion: ${project.deployment}`) : ''}
      ${project.learningOutcomes?.length ? `<h4>Learning outcomes</h4>${list(project.learningOutcomes)}` : ''}
      ${project.applicationValue ? paragraph(`Portfolio value: ${project.applicationValue}`) : ''}
    </article>
  `).join('') || textList(career.projects || [])}
  <h2>Learning roadmap</h2>
  ${(career.roadmap || []).map((phase) => `
    <section>
      <h3>${escapeHtml(phase.phase)} - ${escapeHtml(String(phase.timelineWeeks || ''))} weeks</h3>
      <h4>Topics to learn</h4>
      ${list(phase.topics || phase.skills || [])}
      <h4>Checklist</h4>
      ${list(phase.checklist || [])}
      <h4>Tools</h4>
      ${list(phase.tools || [])}
      ${paragraph(`Project: ${phase.miniProject || 'Build a portfolio-ready proof point.'}`)}
      ${paragraph(`Outcome: ${phase.outcome || 'Demonstrate practical readiness for the role.'}`)}
      ${phase.nextAction ? paragraph(`Next action: ${phase.nextAction}`) : ''}
    </section>
  `).join('')}
  <h2>Interview preparation</h2>
  ${(career.interviewQuestions || []).map((item, index) => `
    <section>
      <h3>Interview question ${index + 1}: ${escapeHtml(item.topic || item.relatedSkill || career.name)}</h3>
      ${paragraph(item.question || item.q || String(item))}
      ${item.shortAnswer ? paragraph(`Short answer: ${item.shortAnswer}`) : ''}
      ${item.detailedAnswer ? paragraph(`Detailed answer: ${item.detailedAnswer}`) : ''}
      ${item.commonMistake ? paragraph(`Common mistake: ${item.commonMistake}`) : ''}
      ${item.realWorldExample ? paragraph(`Real-world example: ${item.realWorldExample}`) : ''}
    </section>
  `).join('')}
  <p><a href="/interview-questions/${career.slug}">Open all ${escapeHtml(career.name)} interview questions</a></p>
  <h2>Quiz questions</h2>
  ${(career.quizzes || []).map((item, index) => `
    <section>
      <h3>Quiz question ${index + 1}: ${escapeHtml(item.topic || career.name)}</h3>
      ${paragraph(item.question)}
      ${item.options?.length ? `<h4>Answer choices</h4>${list(item.options)}` : ''}
      ${paragraph(`Correct answer: ${item.correctAnswer}`)}
      ${paragraph(`Explanation: ${item.explanation}`)}
    </section>
  `).join('')}
  <p><a href="/quiz/${career.slug}">Open ${escapeHtml(career.name)} quiz practice</a></p>
  <h2>Related careers</h2>
  ${linkList(relatedCareers(career).map((item) => ({ href: `/careers/${item.slug}`, label: item.name })))}
  <h2>Frequently asked questions</h2>
  ${careerFaqs(career).map((faq) => `<h3>${escapeHtml(faq.question)}</h3>${paragraph(faq.answer)}`).join('')}
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
    <h2>Related career roadmaps</h2>
    ${linkList(careerPlatformData.slice(0, 6).map((career) => ({ href: `/careers/${career.slug}`, label: career.name })))}
  </article>
`;

const quizIndexContent = () => `
  <h1>Career Quizzes</h1>
  ${paragraph('Use Career2Day quizzes to review role-specific concepts and identify the next learning action for each career path.')}
  ${linkList(careerPlatformData.map((career) => ({ href: `/quiz/${career.slug}`, label: `${career.name} quiz questions` })))}
`;

const interviewIndexContent = () => `
  <h1>Career Interview Questions</h1>
  ${paragraph('Browse role-specific interview questions for every Career2Day roadmap. Each interview page includes beginner, intermediate and advanced prompts connected to skills, tools, projects and quiz topics.')}
  ${linkList(careerPlatformData.map((career) => ({ href: `/interview-questions/${career.slug}`, label: `${career.name} interview questions` })))}
`;

const quizContent = (career) => `
  <h1>${escapeHtml(career.name)} Quiz Questions</h1>
  ${paragraph(`Practise ${career.name} quiz questions with answer explanations connected to the ${career.name} roadmap, projects and interview preparation.`)}
  <nav aria-label="Breadcrumb">
    <ol>
      <li><a href="/">Home</a></li>
      <li><a href="/quiz">Quizzes</a></li>
      <li>${escapeHtml(career.name)}</li>
    </ol>
  </nav>
  ${(career.quizzes || []).map((item, index) => `
    <section>
      <h2>Question ${index + 1}: ${escapeHtml(item.topic || career.name)}</h2>
      ${paragraph(item.question)}
      <h3>Answer choices</h3>
      ${list(item.options || [])}
      ${paragraph(`Correct answer: ${item.correctAnswer}`)}
      ${paragraph(`Explanation: ${item.explanation}`)}
    </section>
  `).join('')}
  <h2>Continue learning</h2>
  ${linkList([
    { href: `/careers/${career.slug}`, label: `${career.name} roadmap` },
    { href: `/interview-questions/${career.slug}`, label: `${career.name} interview questions` },
    { href: '/careers', label: 'All career roadmaps' }
  ])}
`;

const interviewContent = (career) => `
  <h1>${escapeHtml(career.name)} Interview Questions</h1>
  ${paragraph(`Practice ${career.name} interview questions with beginner, intermediate and advanced prompts. These questions connect to the ${career.name} roadmap, quiz topics, tools and projects.`)}
  <nav aria-label="Breadcrumb">
    <ol>
      <li><a href="/">Home</a></li>
      <li><a href="/interview-questions">Interview Questions</a></li>
      <li>${escapeHtml(career.name)}</li>
    </ol>
  </nav>
  ${(career.interviewQuestions || []).map((item, index) => `
    <section>
      <h2>Question ${index + 1}: ${escapeHtml(item.topic || item.relatedSkill || career.name)}</h2>
      ${paragraph(item.question || item.q || String(item))}
      ${item.shortAnswer ? paragraph(`Short answer: ${item.shortAnswer}`) : ''}
      ${item.detailedAnswer ? paragraph(`Detailed answer: ${item.detailedAnswer}`) : ''}
      ${item.commonMistake ? paragraph(`Common mistake: ${item.commonMistake}`) : ''}
      ${item.realWorldExample ? paragraph(`Real-world example: ${item.realWorldExample}`) : ''}
    </section>
  `).join('')}
  <h2>Continue learning</h2>
  ${linkList([
    { href: `/careers/${career.slug}`, label: `${career.name} roadmap` },
    { href: `/quiz/${career.slug}`, label: `${career.name} quiz questions` },
    { href: '/careers', label: 'All career roadmaps' }
  ])}
`;

const simplePage = (title, description, sections) => `
  <h1>${escapeHtml(title)}</h1>
  ${paragraph(description)}
  ${sections.map(([heading, body]) => `<h2>${escapeHtml(heading)}</h2>${paragraph(body)}`).join('')}
`;

const contactFormContent = () => `
  <h1>Contact Career2Day</h1>
  ${paragraph('Fill out the form below and our team will get back to you as soon as possible.')}
  <form action="https://formspree.io/f/xgodyjpl" method="POST">
    <p>
      <label for="name">Full Name</label><br />
      <input id="name" name="name" type="text" required />
    </p>
    <p>
      <label for="email">Email Address</label><br />
      <input id="email" name="email" type="email" required />
    </p>
    <p>
      <label for="message">Message</label><br />
      <textarea id="message" name="message" rows="6" required></textarea>
    </p>
    <p><button type="submit">Send Message</button></p>
  </form>
`;

if (!fs.existsSync(templatePath)) {
  console.error(`[prerender-seo-pages] Missing build template: ${templatePath}`);
  process.exit(1);
}

const baseTemplate = fs.readFileSync(templatePath, 'utf8');

const routes = [
  ['/', {
    title: 'Free Career Roadmaps, CV Builder & Interview Prep | Career2Day',
    description: 'Get hired faster with free career roadmaps, a CV builder, interview prep and quizzes. Plan your path and build a job-ready CV in minutes - 100% free.',
    canonical: `${siteUrl}/`,
    content: homeContent(),
    schema: graphSchema(
      webSiteSchema,
      faqSchema(homepageFaqs.map(([question, answer]) => ({ question, answer }))),
      breadcrumbSchema([{ name: 'Home', url: `${siteUrl}/` }])
    )
  }],
  ['/careers', {
    title: 'Career Roadmaps | Career2Day',
    description: 'Browse technology career roadmaps with skills, tools, projects, interview questions, quizzes and CV guidance.',
    canonical: `${siteUrl}/careers`,
    content: careersContent(),
    schema: graphSchema(
      pageSchema('/careers', 'Career Roadmaps', 'Browse technology career roadmaps.'),
      breadcrumbSchema([
        { name: 'Home', url: `${siteUrl}/` },
        { name: 'Careers', url: `${siteUrl}/careers` }
      ])
    )
  }],
  ['/blog', {
    title: 'Career Blog | Career2Day',
    description: 'Career articles about roadmaps, resumes, interview practice, portfolios, ATS keywords and first job preparation.',
    canonical: `${siteUrl}/blog`,
    content: blogListContent(),
    schema: graphSchema(
      pageSchema('/blog', 'Career Blog', 'Career articles and job readiness guides.'),
      breadcrumbSchema([
        { name: 'Home', url: `${siteUrl}/` },
        { name: 'Blog', url: `${siteUrl}/blog` }
      ])
    )
  }],
  ['/quiz', {
    title: 'Career Quizzes | Career2Day',
    description: 'Browse career quiz questions for every Career2Day roadmap, with answer explanations connected to role-specific skills, tools and projects.',
    canonical: `${siteUrl}/quiz`,
    content: quizIndexContent(),
    schema: graphSchema(
      pageSchema('/quiz', 'Career Quizzes', 'Career quiz questions for every roadmap.'),
      breadcrumbSchema([
        { name: 'Home', url: `${siteUrl}/` },
        { name: 'Quizzes', url: `${siteUrl}/quiz` }
      ])
    )
  }],
  ['/interview-questions', {
    title: 'Career Interview Questions | Career2Day',
    description: 'Browse role-specific interview questions for every Career2Day roadmap, including beginner, intermediate and advanced preparation prompts.',
    canonical: `${siteUrl}/interview-questions`,
    content: interviewIndexContent(),
    schema: graphSchema(
      pageSchema('/interview-questions', 'Career Interview Questions', 'Role-specific interview questions for every roadmap.'),
      breadcrumbSchema([
        { name: 'Home', url: `${siteUrl}/` },
        { name: 'Interview Questions', url: `${siteUrl}/interview-questions` }
      ])
    )
  }],
  ['/about', {
    title: 'About Career2Day',
    description: 'Career2Day helps learners prepare with career roadmaps, interview practice, quizzes and a role-aware CV builder.',
    canonical: `${siteUrl}/about`,
    content: simplePage('About Career2Day', 'Career2Day was created to bring roadmaps, interview preparation, quizzes and CV building into one practical career readiness platform.', [
      ['Mission', 'Help learners follow a clear path from choosing a career to building projects, practising interviews, checking readiness and creating a role-aware CV.'],
      ['Founder story', 'The platform began as a student-built response to the problem of beginners being stuck between scattered tutorials, unclear preparation and weak application materials.']
    ]),
    schema: pageSchema('/about', 'About Career2Day', 'About the Career2Day platform.')
  }],
  ['/contact', {
    title: 'Contact Us | Career2Day',
    description: 'Contact Career2Day for support, business, or feedback. Use the form below to reach us directly.',
    canonical: `${siteUrl}/contact`,
    content: contactFormContent(),
    schema: pageSchema('/contact', 'Contact Career2Day', 'Contact form and support information.')
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
  const faqs = careerFaqs(career);
  routes.push([`/careers/${career.slug}`, {
    title,
    description,
    canonical: careerUrl(career),
    content: careerContent(career),
    schema: graphSchema(
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: `${career.name} Career Roadmap`,
        description,
        url: careerUrl(career),
        mainEntityOfPage: careerUrl(career),
        author: { '@type': 'Organization', name: 'Career2Day' },
        publisher: { '@type': 'Organization', name: 'Career2Day', logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.svg` } }
      },
      faqSchema(faqs),
      breadcrumbSchema([
        { name: 'Home', url: `${siteUrl}/` },
        { name: 'Careers', url: `${siteUrl}/careers` },
        { name: career.name, url: careerUrl(career) }
      ])
    )
  }]);
  routes.push([`/interview-questions/${career.slug}`, {
    title: `${career.name} Interview Questions | Career2Day`,
    description: `Practice ${career.name} interview questions with beginner, intermediate and advanced prompts.`,
    canonical: `${siteUrl}/interview-questions/${career.slug}`,
    content: interviewContent(career),
    schema: graphSchema(
      pageSchema(`/interview-questions/${career.slug}`, `${career.name} Interview Questions`, `Interview questions for ${career.name}.`),
      breadcrumbSchema([
        { name: 'Home', url: `${siteUrl}/` },
        { name: 'Interview Questions', url: `${siteUrl}/interview-questions` },
        { name: career.name, url: `${siteUrl}/interview-questions/${career.slug}` }
      ])
    )
  }]);
  routes.push([`/quiz/${career.slug}`, {
    title: `${career.name} Quiz Questions | Career2Day`,
    description: `Practice ${career.name} quiz questions with answer explanations connected to roadmap skills, projects and interview preparation.`,
    canonical: `${siteUrl}/quiz/${career.slug}`,
    content: quizContent(career),
    schema: graphSchema(
      pageSchema(`/quiz/${career.slug}`, `${career.name} Quiz Questions`, `Quiz questions for ${career.name}.`),
      breadcrumbSchema([
        { name: 'Home', url: `${siteUrl}/` },
        { name: 'Quizzes', url: `${siteUrl}/quiz` },
        { name: career.name, url: `${siteUrl}/quiz/${career.slug}` }
      ])
    )
  }]);
}

for (const alias of careerAliases) {
  const career = careerPlatformData.find((item) => item.slug === alias.target);
  if (!career) continue;
  const title = `${alias.label} Roadmap, Skills, Interview Questions and Quiz | Career2Day`;
  const description = `Follow a practical ${alias.label} roadmap with skills, tools, projects, interview questions, quiz practice and CV guidance.`;
  routes.push([`/careers/${alias.alias}`, {
    title,
    description,
    canonical: careerUrl(career),
    content: `
      <h1>${escapeHtml(alias.label)} Roadmap</h1>
      ${paragraph(`${alias.label} learners can use the ${career.name} roadmap as the closest Career2Day path for skills, projects, interview preparation, quiz practice and CV guidance.`)}
      ${careerContent(career).replace(/<h1>[\s\S]*?<\/h1>/, '')}
    `,
    schema: graphSchema(
      pageSchema(`/careers/${alias.alias}`, title, description),
      breadcrumbSchema([
        { name: 'Home', url: `${siteUrl}/` },
        { name: 'Careers', url: `${siteUrl}/careers` },
        { name: alias.label, url: `${siteUrl}/careers/${alias.alias}` }
      ])
    )
  }]);
}

for (const article of careerBlogArticles) {
  const articleUrl = `${siteUrl}/blog/${article.slug}`;
  routes.push([`/blog/${article.slug}`, {
    title: `${article.title} | Career2Day`,
    description: article.excerpt,
    canonical: articleUrl,
    content: blogArticleContent(article),
    schema: graphSchema(
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.excerpt,
        datePublished: article.publishedAt,
        author: { '@type': 'Organization', name: article.author || 'Career2Day' },
        url: articleUrl,
        mainEntityOfPage: articleUrl,
        publisher: { '@type': 'Organization', name: 'Career2Day', logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.svg` } }
      },
      breadcrumbSchema([
        { name: 'Home', url: `${siteUrl}/` },
        { name: 'Blog', url: `${siteUrl}/blog` },
        { name: article.title, url: articleUrl }
      ])
    )
  }]);
}

for (const [route, page] of routes) {
  writeRoute(route, page);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(([route]) => `  <url><loc>${siteUrl}${route === '/' ? '/' : route}</loc><lastmod>${sitemapLastmod}</lastmod><changefreq>${route === '/' ? 'weekly' : 'monthly'}</changefreq><priority>${route === '/' ? '1.0' : '0.8'}</priority></url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(distRoot, 'sitemap.xml'), sitemap);

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
fs.writeFileSync(path.join(distRoot, 'robots.txt'), robots);

console.log(`[prerender-seo-pages] Wrote ${routes.length} crawlable route snapshots.`);
