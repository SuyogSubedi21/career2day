
const careerTitles = [
  'Software Engineer', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Data Analyst',
  'Data Scientist', 'Machine Learning Engineer', 'AI Engineer', 'DevOps Engineer', 'Cloud Engineer',
  'Cybersecurity Analyst', 'Ethical Hacker', 'Network Engineer', 'Systems Administrator', 'Database Administrator',
  'UI/UX Designer', 'Product Manager', 'Project Manager', 'Business Analyst', 'QA Engineer',
  'Automation Tester', 'Mobile App Developer', 'Game Developer', 'Embedded Systems Engineer', 'Blockchain Developer',
  'Web3 Developer', 'AR/VR Developer', 'Robotics Engineer', 'Big Data Engineer', 'Data Engineer',
  'Site Reliability Engineer', 'IT Support Specialist', 'Technical Support Engineer', 'IT Consultant', 'Solutions Architect',
  'Enterprise Architect', 'CRM Developer', 'ERP Consultant', 'Digital Marketing (Tech-focused)', 'SEO Specialist (Technical SEO)',
  'Content Strategist (Tech niche)', 'API Developer', 'Integration Engineer', 'Security Engineer', 'Penetration Tester',
  'Cloud Security Engineer', 'AI Researcher', 'NLP Engineer', 'Computer Vision Engineer', 'Software Architect'
];

const generateSkills = (level, category) => {
  const common = [
    { name: 'Version Control (Git)', description: 'Manage code changes and collaborate with teams.' },
    { name: 'Agile Methodologies', description: 'Work in iterative sprints to deliver value.' },
    { name: 'Problem Solving', description: 'Break down complex issues into manageable tasks.' }
  ];
  
  if (level === 'beginner') return [...common, { name: 'Basic Programming', description: 'Write clean, readable code in primary languages.' }, { name: 'Command Line Basics', description: 'Navigate systems and execute core commands.' }];
  if (level === 'intermediate') return [{ name: 'System Design Basics', description: 'Design scalable component architectures.' }, { name: 'CI/CD Pipelines', description: 'Automate testing and deployment processes.' }, { name: 'Advanced Debugging', description: 'Identify and resolve deep-rooted system bugs.' }, { name: 'Database Optimization', description: 'Improve query performance and indexing.' }];
  return [{ name: 'Enterprise Architecture', description: 'Design systems that span multiple business domains.' }, { name: 'Technical Leadership', description: 'Guide teams and make high-level technical decisions.' }, { name: 'Performance Tuning', description: 'Optimize systems for maximum throughput and low latency.' }, { name: 'Cloud Strategy', description: 'Define organization-wide cloud adoption and governance.' }];
};

const generateProjects = (level) => {
  if (level === 'beginner') {
    return [
      { name: 'Task Management CLI', description: 'A command-line tool to add, update, and remove daily tasks.', technologies: ['Python/Node.js', 'File I/O'], difficulty: 'Beginner', estimatedHours: 15 },
      { name: 'Personal Portfolio', description: 'A responsive website showcasing your skills and projects.', technologies: ['HTML', 'CSS', 'JavaScript'], difficulty: 'Beginner', estimatedHours: 20 },
      { name: 'Weather Dashboard', description: 'Fetch and display weather data from a public API.', technologies: ['React', 'REST APIs'], difficulty: 'Beginner', estimatedHours: 25 }
    ];
  }
  if (level === 'intermediate') {
    return [
      { name: 'E-commerce API', description: 'RESTful API with authentication, products, and order management.', technologies: ['Node.js', 'Express', 'PostgreSQL'], difficulty: 'Intermediate', estimatedHours: 40 },
      { name: 'Real-time Chat App', description: 'A websocket-based application for instant messaging.', technologies: ['React', 'Socket.io', 'Redis'], difficulty: 'Intermediate', estimatedHours: 50 },
      { name: 'Data Visualization Dashboard', description: 'Interactive charts rendering large datasets.', technologies: ['D3.js/Chart.js', 'Python', 'SQL'], difficulty: 'Intermediate', estimatedHours: 45 }
    ];
  }
  return [
    { name: 'Microservices Platform', description: 'A distributed system using message brokers and container orchestration.', technologies: ['Docker', 'Kubernetes', 'Kafka', 'Go/Java'], difficulty: 'Advanced', estimatedHours: 120 },
    { name: 'Predictive Analytics Engine', description: 'Machine learning pipeline predicting user behavior trends.', technologies: ['TensorFlow', 'PyTorch', 'AWS SageMaker'], difficulty: 'Advanced', estimatedHours: 150 },
    { name: 'Custom Programming Language', description: 'A small interpreter or compiler for a domain-specific language.', technologies: ['C/Rust', 'AST', 'Lexical Analysis'], difficulty: 'Advanced', estimatedHours: 200 }
  ];
};

const generateCareerData = (title) => {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const baseSalary = 60000 + Math.random() * 40000;
  
  // Categorize roughly
  let category = 'Development';
  if (title.includes('Data') || title.includes('ML') || title.includes('AI') || title.includes('Analytics')) category = 'Data & AI';
  else if (title.includes('Cloud') || title.includes('DevOps') || title.includes('Reliability')) category = 'Cloud & Infrastructure';
  else if (title.includes('Security') || title.includes('Hacker') || title.includes('Penetration')) category = 'Cybersecurity';
  else if (title.includes('Manager') || title.includes('Analyst') || title.includes('Scrum')) category = 'Management & Strategy';
  
  return {
    name: title,
    slug,
    category,
    description: `Design, build, and optimize systems as a professional ${title}.`,
    overview: `The ${title} plays a critical role in modern tech organizations. They are responsible for delivering high-quality solutions, analyzing complex requirements, and ensuring systems run efficiently and securely.`,
    whyThisCareer: `High demand, excellent compensation, and the ability to solve impactful problems make ${title} one of the most rewarding paths in technology today.`,
    jobMarketOutlook: 'Employment in this sector is projected to grow much faster than the average for all occupations over the next decade.',
    averageSalary: Math.round(baseSalary * 1.5),
    salaryRange: {
      min: Math.round(baseSalary),
      max: Math.round(baseSalary * 2.5)
    },
    jobDemand: Math.random() > 0.3 ? 'High' : 'Medium',
    timeToJobReady: '6-9 months',
    beginnerSkills: generateSkills('beginner', category),
    intermediateSkills: generateSkills('intermediate', category),
    advancedSkills: generateSkills('advanced', category),
    detailedRoadmap: [
      { phase: 'Foundations', months: '1-3', topics: ['Core Concepts', 'Basic Syntax', 'Version Control'], projects: ['Hello World App', 'Basic Scripts'], resources: ['Online Docs', 'Interactive Tutorials'] },
      { phase: 'Core Skills', months: '4-6', topics: ['Frameworks', 'Databases', 'API Integration'], projects: ['CRUD Application', 'Dashboard'], resources: ['Advanced Courses', 'Official Guides'] },
      { phase: 'Advanced Topics', months: '7-9', topics: ['System Architecture', 'Performance', 'Security'], projects: ['Microservices', 'Analytics Engine'], resources: ['Whitepapers', 'Tech Blogs'] },
      { phase: 'Projects & Practice', months: '10-12', topics: ['Interview Prep', 'Portfolio Building', 'Open Source'], projects: ['Capstone Project', 'Contributions'], resources: ['LeetCode', 'GitHub'] }
    ],
    toolsAndTechnologies: {
      'Languages': ['Python', 'JavaScript', 'Go', 'Rust'],
      'Frameworks': ['React', 'Node.js', 'Django', 'Spring Boot'],
      'Infrastructure': ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      'Databases': ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch']
    },
    projectsToBuild: {
      beginner: generateProjects('beginner'),
      intermediate: generateProjects('intermediate'),
      advanced: generateProjects('advanced')
    },
    salaryProgression: {
      entry: Math.round(baseSalary),
      junior: Math.round(baseSalary * 1.2),
      mid: Math.round(baseSalary * 1.5),
      senior: Math.round(baseSalary * 2.0),
      lead: Math.round(baseSalary * 2.5)
    }
  };
};

export const careers = careerTitles.map(title => generateCareerData(title));

export const getCareerBySlug = (slug) => {
  return careers.find(c => c.slug === slug) || generateCareerData(slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '));
};
