const roleKits = {
  'data-analyst': {
    slug: 'data-analyst',
    name: 'Data Analyst',
    accent: 'from-sky-500 to-emerald-500',
    timelineWeeks: 16,
    tagline: 'Turn raw data into decisions teams can trust.',
    skills: ['SQL', 'Python', 'Excel', 'Power BI', 'Tableau', 'Statistics', 'Data Cleaning', 'Dashboard Design'],
    tools: ['PostgreSQL', 'Jupyter Notebook', 'Excel', 'Power BI', 'Tableau', 'GitHub'],
    projects: [
      'Sales performance dashboard with SQL and Power BI',
      'Customer churn analysis using Python and pandas',
      'Executive KPI report with automated data cleaning'
    ],
    keywords: ['data analysis', 'SQL queries', 'dashboarding', 'ETL', 'KPI reporting', 'business insights', 'data visualization'],
    summary: 'Entry-level Data Analyst with hands-on experience in SQL, Python, Excel, and dashboarding. Comfortable cleaning messy datasets, finding business trends, and presenting clear insights through visual reports.',
    phases: [
      {
        title: 'Basics',
        weeks: '1-4 weeks',
        skills: ['Spreadsheet logic', 'SQL SELECT/JOIN/GROUP BY', 'Basic statistics', 'Chart selection'],
        tools: ['Excel or Google Sheets', 'PostgreSQL', 'Khan Academy Statistics'],
        project: 'Clean a messy sales spreadsheet and summarize revenue, margin, and top products.',
        outcome: 'You can answer simple business questions from a dataset without getting lost.'
      },
      {
        title: 'Intermediate',
        weeks: '5-8 weeks',
        skills: ['Python basics', 'pandas', 'Data cleaning', 'Exploratory analysis'],
        tools: ['Jupyter Notebook', 'pandas', 'Matplotlib', 'GitHub'],
        project: 'Analyze customer churn and explain the three strongest churn signals.',
        outcome: 'You can move from raw CSVs to a clear written insight report.'
      },
      {
        title: 'Advanced',
        weeks: '9-12 weeks',
        skills: ['Dashboard UX', 'Data modeling', 'Storytelling', 'Stakeholder questions'],
        tools: ['Power BI', 'Tableau', 'dbdiagram.io', 'Notion'],
        project: 'Build an executive KPI dashboard with filters, trends, and recommendations.',
        outcome: 'You can create decision-ready dashboards, not just attractive charts.'
      },
      {
        title: 'Job-ready',
        weeks: '13-16 weeks',
        skills: ['Portfolio polish', 'ATS keywords', 'Case interviews', 'Business communication'],
        tools: ['GitHub Pages', 'LinkedIn', 'Career2Day CV Builder'],
        project: 'Publish a 3-project analytics portfolio and role-specific CV.',
        outcome: 'You have proof of skill, a targeted CV, and interview stories ready.'
      }
    ]
  },
  'frontend-developer': {
    slug: 'frontend-developer',
    name: 'Frontend Developer',
    accent: 'from-indigo-500 to-cyan-500',
    timelineWeeks: 18,
    tagline: 'Build polished interfaces users can trust and enjoy.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design', 'Accessibility', 'Git', 'API Integration'],
    tools: ['VS Code', 'React', 'Vite', 'Tailwind CSS', 'Figma', 'GitHub'],
    projects: ['Responsive SaaS dashboard', 'API-powered job tracker', 'Accessible component library'],
    keywords: ['React', 'responsive UI', 'accessibility', 'component architecture', 'REST APIs', 'performance', 'state management'],
    summary: 'Frontend Developer focused on responsive React applications, accessible components, and clean user experiences. Experienced with JavaScript, Tailwind CSS, API integration, and performance-minded UI delivery.',
    phases: [
      {
        title: 'Basics',
        weeks: '1-4 weeks',
        skills: ['Semantic HTML', 'CSS layout', 'JavaScript fundamentals', 'Responsive thinking'],
        tools: ['VS Code', 'Chrome DevTools', 'Git'],
        project: 'Build a responsive personal portfolio with three case-study cards.',
        outcome: 'You can create clean static pages that work across devices.'
      },
      {
        title: 'Intermediate',
        weeks: '5-9 weeks',
        skills: ['React components', 'Props/state', 'Forms', 'API fetching'],
        tools: ['React', 'Vite', 'Tailwind CSS', 'REST APIs'],
        project: 'Build a job application tracker that saves status and notes.',
        outcome: 'You can ship interactive app screens with real data flow.'
      },
      {
        title: 'Advanced',
        weeks: '10-14 weeks',
        skills: ['Accessibility', 'Performance', 'Design systems', 'Testing basics'],
        tools: ['Lighthouse', 'React Testing Library', 'Figma', 'Storybook'],
        project: 'Create a small component system with buttons, cards, forms, and states.',
        outcome: 'Your UI work becomes reusable, testable, and production-minded.'
      },
      {
        title: 'Job-ready',
        weeks: '15-18 weeks',
        skills: ['Portfolio writing', 'Code review', 'Interview tasks', 'ATS positioning'],
        tools: ['GitHub', 'Netlify', 'Career2Day CV Builder'],
        project: 'Publish two polished apps with READMEs, screenshots, and measurable outcomes.',
        outcome: 'You can show recruiters finished work and explain tradeoffs clearly.'
      }
    ]
  },
  'ux-designer': {
    slug: 'ux-designer',
    name: 'UX Designer',
    accent: 'from-rose-500 to-amber-500',
    timelineWeeks: 14,
    tagline: 'Design useful products from research to polished prototype.',
    skills: ['User Research', 'Wireframing', 'Prototyping', 'Information Architecture', 'Usability Testing', 'UX Writing'],
    tools: ['Figma', 'FigJam', 'Miro', 'Notion', 'Maze'],
    projects: ['Mobile onboarding redesign', 'SaaS dashboard usability study', 'Design system starter kit'],
    keywords: ['user research', 'wireframes', 'prototypes', 'usability testing', 'design systems', 'journey mapping', 'Figma'],
    summary: 'UX Designer with practical experience in research, wireframing, prototyping, and usability testing. Skilled at translating user needs into simple flows, clear interfaces, and product decisions.',
    phases: [
      {
        title: 'Basics',
        weeks: '1-3 weeks',
        skills: ['UX process', 'Heuristic review', 'User goals', 'Basic Figma'],
        tools: ['Figma', 'FigJam', 'Mobbin'],
        project: 'Audit a signup flow and document five UX improvements.',
        outcome: 'You can identify friction and explain design decisions.'
      },
      {
        title: 'Intermediate',
        weeks: '4-7 weeks',
        skills: ['Research planning', 'Interview synthesis', 'User flows', 'Wireframes'],
        tools: ['Miro', 'Notion', 'Figma'],
        project: 'Research and redesign a job search onboarding journey.',
        outcome: 'You can connect user evidence to improved product flow.'
      },
      {
        title: 'Advanced',
        weeks: '8-11 weeks',
        skills: ['Interactive prototypes', 'Design systems', 'Usability testing', 'UX writing'],
        tools: ['Figma Components', 'Maze', 'Loom'],
        project: 'Prototype a career dashboard and run five usability tests.',
        outcome: 'You can validate a design before engineering invests in it.'
      },
      {
        title: 'Job-ready',
        weeks: '12-14 weeks',
        skills: ['Case study storytelling', 'Portfolio critique', 'Whiteboard practice', 'ATS keywords'],
        tools: ['Notion', 'Framer', 'Career2Day CV Builder'],
        project: 'Publish two case studies with problem, process, evidence, and result.',
        outcome: 'You can present your design work like a product thinker.'
      }
    ]
  },
  'software-engineer': {
    slug: 'software-engineer',
    name: 'Software Engineer',
    accent: 'from-violet-500 to-blue-500',
    timelineWeeks: 20,
    tagline: 'Learn to build reliable software from fundamentals to shipped systems.',
    skills: ['JavaScript', 'Python', 'Data Structures', 'APIs', 'Databases', 'Testing', 'Git', 'System Design'],
    tools: ['VS Code', 'GitHub', 'Node.js', 'PostgreSQL', 'Docker', 'Postman'],
    projects: ['REST API with authentication', 'Full-stack task manager', 'Testing and deployment pipeline'],
    keywords: ['software engineering', 'APIs', 'databases', 'testing', 'Git', 'system design', 'full-stack development'],
    summary: 'Software Engineer with project experience across APIs, databases, testing, and full-stack application development. Comfortable breaking down problems, writing maintainable code, and shipping reliable features.',
    phases: [
      {
        title: 'Basics',
        weeks: '1-5 weeks',
        skills: ['Programming fundamentals', 'Git', 'Debugging', 'Data structures basics'],
        tools: ['VS Code', 'GitHub', 'Node.js or Python'],
        project: 'Build a command-line habit tracker with persistent storage.',
        outcome: 'You can write and debug small programs confidently.'
      },
      {
        title: 'Intermediate',
        weeks: '6-10 weeks',
        skills: ['APIs', 'Databases', 'Authentication', 'Error handling'],
        tools: ['Express or FastAPI', 'PostgreSQL', 'Postman'],
        project: 'Build a REST API with users, auth, and CRUD endpoints.',
        outcome: 'You can build backend services with real application structure.'
      },
      {
        title: 'Advanced',
        weeks: '11-16 weeks',
        skills: ['Testing', 'Deployment', 'Performance', 'System design basics'],
        tools: ['Docker', 'Vitest or Pytest', 'Render or Railway'],
        project: 'Deploy a tested full-stack app with logs and environment config.',
        outcome: 'You understand production concerns beyond code that only runs locally.'
      },
      {
        title: 'Job-ready',
        weeks: '17-20 weeks',
        skills: ['Interview algorithms', 'Architecture tradeoffs', 'Portfolio polish', 'ATS keywords'],
        tools: ['LeetCode', 'GitHub', 'Career2Day CV Builder'],
        project: 'Create a polished portfolio with two deployed applications and technical writeups.',
        outcome: 'You are ready to explain your projects, code decisions, and problem-solving process.'
      }
    ]
  }
};

export const featuredCareerSlugs = ['data-analyst', 'frontend-developer', 'ux-designer', 'software-engineer'];

export const getRoleKit = (slugOrName = '') => {
  const normalized = String(slugOrName)
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  return roleKits[normalized] || Object.values(roleKits).find((kit) => kit.name.toLowerCase() === String(slugOrName).toLowerCase()) || null;
};

export const getFeaturedRoleKits = () => featuredCareerSlugs.map((slug) => roleKits[slug]);

export const getDefaultRoleKit = () => roleKits['data-analyst'];
