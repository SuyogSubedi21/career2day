
const generateTOC = (headings) => {
  return headings.map(h => ({
    id: h.text.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    text: h.text,
    level: h.level
  }));
};

const articles = [
  {
    id: '1',
    slug: 'best-high-paying-it-careers-2024',
    title: 'Best High-Paying IT Careers in 2024',
    author: 'Sarah Williams',
    publishedDate: '2024-01-15',
    readingTime: 6,
    category: 'Career Guides',
    excerpt: 'Discover the top high-paying IT careers in 2024, from AI Engineering to Cloud Architecture. Learn what skills you need to break into these lucrative roles.',
    featuredImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    relatedArticleIds: ['2', '5', '9'],
    tags: ['Salary', 'Tech Careers', '2024 Trends'],
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>The tech industry continues to evolve rapidly, and with it, the demand for highly skilled professionals. If you're looking to maximize your earning potential in 2024, targeting the right niche is crucial.</p>
      <h2 id="ai-and-machine-learning">1. AI and Machine Learning Engineers</h2>
      <p>With the generative AI boom, engineers who can build, fine-tune, and deploy ML models are commanding premium salaries.</p>
      <ul>
        <li><strong>Average Salary:</strong> $150,000 - $200,000+</li>
        <li><strong>Key Skills:</strong> Python, PyTorch, TensorFlow, NLP</li>
      </ul>
      <h2 id="cloud-architects">2. Cloud Architects</h2>
      <p>Organizations are moving infrastructure to the cloud faster than ever. Cloud Architects design these complex environments.</p>
      <ul>
        <li><strong>Average Salary:</strong> $140,000 - $180,000+</li>
        <li><strong>Key Skills:</strong> AWS, Azure, GCP, Kubernetes</li>
      </ul>
      <h2 id="cybersecurity-managers">3. Cybersecurity Managers</h2>
      <p>As threats become more sophisticated, protecting data is paramount. Security leaders are compensated accordingly.</p>
      <h3 id="next-steps">Next Steps</h3>
      <p>Focus on upskilling in these high-demand areas. Certification and hands-on projects are your best tools for breaking into these tiers.</p>
    `,
    tableOfContents: generateTOC([
      { text: 'Introduction', level: 2 },
      { text: 'AI and Machine Learning', level: 2 },
      { text: 'Cloud Architects', level: 2 },
      { text: 'Cybersecurity Managers', level: 2 },
      { text: 'Next Steps', level: 3 }
    ])
  },
  {
    id: '2',
    slug: 'how-to-become-software-engineer-roadmap',
    title: 'How to Become a Software Engineer: Complete Roadmap',
    author: 'David Chen',
    publishedDate: '2024-02-02',
    readingTime: 8,
    category: 'Career Guides',
    excerpt: 'A comprehensive, step-by-step guide to becoming a software engineer. From learning your first programming language to acing the technical interview.',
    featuredImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    relatedArticleIds: ['1', '3', '4'],
    tags: ['Software Engineering', 'Roadmap', 'Beginner'],
    content: `
      <h2 id="phase-1-fundamentals">Phase 1: The Fundamentals</h2>
      <p>Before building complex systems, you must understand the basics of programming. Start with a beginner-friendly language like Python or JavaScript.</p>
      <h2 id="phase-2-data-structures">Phase 2: Data Structures & Algorithms</h2>
      <p>This is crucial for passing technical interviews. Focus on:</p>
      <ul>
        <li>Arrays & Strings</li>
        <li>Hash Maps</li>
        <li>Trees & Graphs</li>
      </ul>
      <h2 id="phase-3-building-projects">Phase 3: Building Projects</h2>
      <p>Theory isn't enough. Build full-stack applications to demonstrate your abilities. A good portfolio speaks louder than a resume.</p>
      <h3 id="recommended-projects">Recommended Projects</h3>
      <p>Try building a RESTful API, a real-time chat app, or a task management system.</p>
    `,
    tableOfContents: generateTOC([
      { text: 'Phase 1 Fundamentals', level: 2 },
      { text: 'Phase 2 Data Structures', level: 2 },
      { text: 'Phase 3 Building Projects', level: 2 },
      { text: 'Recommended Projects', level: 3 }
    ])
  },
  {
    id: '3',
    slug: 'cv-tips-for-developers',
    title: 'CV Tips for Developers: Stand Out to Recruiters',
    author: 'Emily Rodriguez',
    publishedDate: '2024-02-15',
    readingTime: 5,
    category: 'Interview Tips',
    excerpt: 'Your CV is your first impression. Learn how to format your developer resume to bypass ATS filters and catch the eye of hiring managers.',
    featuredImage: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=800&q=80',
    relatedArticleIds: ['2', '4'],
    tags: ['CV', 'Resume', 'Job Search'],
    content: `
      <h2 id="keep-it-clean">Keep it Clean and ATS-Friendly</h2>
      <p>Applicant Tracking Systems (ATS) cannot parse complex graphics. Stick to clean, single-column or simple two-column layouts.</p>
      <h2 id="highlight-impact">Highlight Impact, Not Just Duties</h2>
      <p>Instead of "Fixed bugs," write "Reduced application load time by 40% by optimizing database queries." Use the XYZ formula: Accomplished [X] as measured by [Y], by doing [Z].</p>
      <h2 id="skills-section">Organize Your Skills Section</h2>
      <p>Group your technical skills logically:</p>
      <ul>
        <li><strong>Languages:</strong> JavaScript, Python, Go</li>
        <li><strong>Frameworks:</strong> React, Node.js, Express</li>
        <li><strong>Tools:</strong> Docker, Git, AWS</li>
      </ul>
    `,
    tableOfContents: generateTOC([
      { text: 'Keep it Clean', level: 2 },
      { text: 'Highlight Impact', level: 2 },
      { text: 'Skills Section', level: 2 }
    ])
  },
  {
    id: '4',
    slug: 'interview-preparation-guide-100-questions',
    title: 'Interview Preparation Guide: 100 Questions Explained',
    author: 'Michael Chang',
    publishedDate: '2024-03-01',
    readingTime: 12,
    category: 'Interview Tips',
    excerpt: 'Master your next technical interview. We break down the most common behavioural and technical questions across top tech companies.',
    featuredImage: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80',
    relatedArticleIds: ['2', '3'],
    tags: ['Interviews', 'Tech Prep'],
    content: `
      <h2 id="the-star-method">The STAR Method</h2>
      <p>For behavioural questions, always use the STAR method: Situation, Task, Action, Result.</p>
      <h2 id="common-technical-questions">Common Technical Questions</h2>
      <p>Technical questions test your problem-solving process. Always think out loud.</p>
      <h3 id="system-design">System Design</h3>
      <p>When asked to design a system, start with requirements gathering before jumping into architecture.</p>
      <h3 id="algorithms">Algorithms</h3>
      <p>Practice common patterns: Sliding Window, Two Pointers, Fast & Slow Pointers.</p>
    `,
    tableOfContents: generateTOC([
      { text: 'The STAR Method', level: 2 },
      { text: 'Common Technical Questions', level: 2 },
      { text: 'System Design', level: 3 },
      { text: 'Algorithms', level: 3 }
    ])
  },
  {
    id: '5',
    slug: 'top-10-skills-that-pay-the-most-in-it',
    title: 'Top 10 Skills That Pay the Most in IT',
    author: 'Sarah Williams',
    publishedDate: '2024-03-10',
    readingTime: 4,
    category: 'Salary Insights',
    excerpt: 'Want to negotiate a higher salary? These 10 technical skills are commanding the highest market premiums in the tech industry today.',
    featuredImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    relatedArticleIds: ['1', '7', '9'],
    tags: ['Salary', 'Skills', 'Negotiation'],
    content: `
      <h2 id="cloud-architecture">1. Cloud Architecture (AWS/Azure/GCP)</h2>
      <p>Expertise in designing resilient cloud systems is highly valued.</p>
      <h2 id="machine-learning">2. Machine Learning & LLMs</h2>
      <p>With the rise of ChatGPT, fine-tuning LLMs is a top-tier skill.</p>
      <h2 id="kubernetes">3. Kubernetes & Container Orchestration</h2>
      <p>DevOps skills, specifically K8s, are essential for modern scalable applications.</p>
    `,
    tableOfContents: generateTOC([
      { text: 'Cloud Architecture', level: 2 },
      { text: 'Machine Learning', level: 2 },
      { text: 'Kubernetes', level: 2 }
    ])
  },
  {
    id: '6',
    slug: 'data-science-career-path',
    title: 'Data Science Career Path: From Beginner to Expert',
    author: 'Dr. Alan Turing',
    publishedDate: '2024-03-15',
    readingTime: 7,
    category: 'Career Guides',
    excerpt: 'Uncover the roadmap to becoming a Data Scientist. Learn about SQL, Python, machine learning models, and data visualization techniques.',
    featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    relatedArticleIds: ['1', '9'],
    tags: ['Data Science', 'Analytics'],
    content: `
      <h2 id="mastering-sql">Mastering SQL</h2>
      <p>Data science starts with data extraction. SQL is the non-negotiable first step.</p>
      <h2 id="python-and-pandas">Python and Pandas</h2>
      <p>Learn to clean and manipulate data using Python's most popular data library.</p>
      <h2 id="machine-learning-models">Machine Learning Models</h2>
      <p>Move beyond linear regression. Understand Random Forests, Gradient Boosting, and neural networks.</p>
    `,
    tableOfContents: generateTOC([
      { text: 'Mastering SQL', level: 2 },
      { text: 'Python and Pandas', level: 2 },
      { text: 'Machine Learning Models', level: 2 }
    ])
  },
  {
    id: '7',
    slug: 'cloud-engineering-aws-azure-gcp',
    title: 'Cloud Engineering: AWS, Azure, GCP Comparison',
    author: 'David Chen',
    publishedDate: '2024-03-20',
    readingTime: 6,
    category: 'Skill Development',
    excerpt: 'Which cloud provider should you learn first? We compare Amazon Web Services, Microsoft Azure, and Google Cloud Platform for career growth.',
    featuredImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    relatedArticleIds: ['1', '10'],
    tags: ['Cloud', 'AWS', 'Azure', 'GCP'],
    content: `
      <h2 id="aws-market-leader">AWS: The Market Leader</h2>
      <p>AWS has the largest market share and the most job openings. It is generally the safest bet for beginners.</p>
      <h2 id="azure-enterprise-choice">Azure: The Enterprise Choice</h2>
      <p>If you want to work for large corporations already using Microsoft products, Azure is highly lucrative.</p>
      <h2 id="gcp-data-focus">GCP: Data and AI Focus</h2>
      <p>Google Cloud excels in data analytics and Kubernetes (which Google invented).</p>
    `,
    tableOfContents: generateTOC([
      { text: 'AWS Market Leader', level: 2 },
      { text: 'Azure Enterprise Choice', level: 2 },
      { text: 'GCP Data Focus', level: 2 }
    ])
  },
  {
    id: '8',
    slug: 'cybersecurity-careers-ethical-hacking',
    title: 'Cybersecurity Careers: Ethical Hacking to CISO',
    author: 'Marcus Johnson',
    publishedDate: '2024-03-25',
    readingTime: 7,
    category: 'Career Guides',
    excerpt: 'Explore the diverse world of cybersecurity. From penetration testing to security architecture, find your path in this high-demand field.',
    featuredImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
    relatedArticleIds: ['1', '5'],
    tags: ['Security', 'Ethical Hacking'],
    content: `
      <h2 id="red-team-vs-blue-team">Red Team vs. Blue Team</h2>
      <p>Red teams focus on offensive security (ethical hacking), while blue teams handle defense and incident response.</p>
      <h2 id="certifications-matter">Certifications Matter</h2>
      <p>In security, certs like CompTIA Security+, OSCP, and CISSP are highly respected by HR departments.</p>
      <h2 id="the-path-to-ciso">The Path to CISO</h2>
      <p>Becoming a Chief Information Security Officer requires a blend of deep technical knowledge and business acumen.</p>
    `,
    tableOfContents: generateTOC([
      { text: 'Red Team vs Blue Team', level: 2 },
      { text: 'Certifications Matter', level: 2 },
      { text: 'The Path to CISO', level: 2 }
    ])
  },
  {
    id: '9',
    slug: 'ai-and-machine-learning-future',
    title: 'AI and Machine Learning: The Future of IT',
    author: 'Sarah Williams',
    publishedDate: '2024-04-02',
    readingTime: 5,
    category: 'Industry Trends',
    excerpt: 'How artificial intelligence is reshaping the IT landscape and what you need to do to future-proof your tech career.',
    featuredImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    relatedArticleIds: ['1', '5', '6'],
    tags: ['AI', 'Machine Learning', 'Future Tech'],
    content: `
      <h2 id="ai-as-a-tool">AI as a Developer Tool</h2>
      <p>AI won't replace developers soon, but developers who use AI will replace those who don't. Tools like Copilot are accelerating workflows.</p>
      <h2 id="shift-in-demand">Shift in Skill Demand</h2>
      <p>Prompt engineering, model fine-tuning, and RAG (Retrieval-Augmented Generation) architectures are the new must-have skills.</p>
    `,
    tableOfContents: generateTOC([
      { text: 'AI as a Developer Tool', level: 2 },
      { text: 'Shift in Demand', level: 2 }
    ])
  },
  {
    id: '10',
    slug: 'devops-engineer-roadmap',
    title: 'DevOps Engineer: Skills, Salary, and Roadmap',
    author: 'David Chen',
    publishedDate: '2024-04-10',
    readingTime: 8,
    category: 'Career Guides',
    excerpt: 'Bridge the gap between development and operations. Learn Linux, networking, CI/CD, and containerization to become a DevOps Engineer.',
    featuredImage: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80',
    relatedArticleIds: ['1', '7'],
    tags: ['DevOps', 'CI/CD', 'Linux'],
    content: `
      <h2 id="linux-and-networking">Linux and Networking</h2>
      <p>DevOps starts with the OS. You must be comfortable navigating Linux systems and understanding DNS, HTTP, and load balancing.</p>
      <h2 id="infrastructure-as-code">Infrastructure as Code (IaC)</h2>
      <p>Tools like Terraform and Ansible allow you to provision infrastructure using code, making it reproducible and version-controlled.</p>
      <h2 id="ci-cd-pipelines">CI/CD Pipelines</h2>
      <p>Automating the testing and deployment of applications using Jenkins, GitHub Actions, or GitLab CI is the core of DevOps.</p>
    `,
    tableOfContents: generateTOC([
      { text: 'Linux and Networking', level: 2 },
      { text: 'Infrastructure as Code', level: 2 },
      { text: 'CI CD Pipelines', level: 2 }
    ])
  }
];

export const getAllArticles = () => articles;

export const getArticleBySlug = (slug) => {
  return articles.find(article => article.slug === slug);
};

export const getArticlesByCategory = (category) => {
  if (category === 'All') return articles;
  return articles.filter(article => article.category === category);
};

export const searchArticles = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return articles.filter(article => 
    article.title.toLowerCase().includes(lowercaseQuery) ||
    article.excerpt.toLowerCase().includes(lowercaseQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};
