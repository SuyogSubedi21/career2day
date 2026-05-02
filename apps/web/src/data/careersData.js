
const createCareer = (c) => {
  const min = c.salary?.min || 70000;
  const max = c.salary?.max || 150000;
  const avg = c.salary?.avg || Math.round((min + max) / 2);
  const entrySalary = min;
  const midSalary = avg;
  const seniorSalary = max;

  const techSkills = c.technicalSkills || ["JavaScript", "React", "Node.js", "SQL", "Git"];
  const sSkills = c.softSkills || ["Communication", "Problem Solving", "Teamwork", "Analytical Thinking", "Adaptability"];
  const toolList = c.tools || ["VS Code", "Jira", "GitHub", "Docker", "Slack"];

  return {
    id: c.id || `career-${c.slug}`,
    name: c.name,
    slug: c.slug,
    description: c.description || `Professional ${c.name} role focusing on modern technologies and industry best practices.`,
    overview: c.overview || `The ${c.name} is responsible for driving technical excellence and delivering high-quality solutions within their domain.`,
    averageSalary: avg,
    salaryRange: { min, max, avg },
    jobDemandOutlook: c.jobDemandOutlook || "High growth expected over the next 5-10 years as the tech industry expands.",
    topPayingStates: c.topPayingStates || ["California", "New York", "Washington", "Texas", "Massachusetts"],
    roadmap: c.roadmap || {
      1: { title: "Fundamentals & Basics", duration: "2 months", skills: ["Core Concepts", "Basic Syntax"], resources: ["Official Documentation", "Beginner Tutorials"] },
      2: { title: "Core Technologies", duration: "3 months", skills: techSkills.slice(0, 3), resources: ["Online Courses", "Hands-on Projects"] },
      3: { title: "Advanced Implementation", duration: "3 months", skills: techSkills.slice(2, 5), resources: ["Advanced Books", "System Design Case Studies"] },
      4: { title: "Professional Practices", duration: "2 months", skills: toolList.slice(0, 3), resources: ["Industry Standards Guides", "Open Source Contributions"] },
      5: { title: "Mastery & Specialization", duration: "2 months", skills: sSkills.slice(0, 3), resources: ["Conferences", "Research Papers", "Leadership Mentoring"] }
    },
    skillsRequired: c.skillsRequired || [...techSkills, ...sSkills],
    salaryInsights: c.salaryInsights || {
      "0-2 years": `$${min.toLocaleString()} - $${(min + 15000).toLocaleString()}`,
      "2-5 years": `$${(min + 15000).toLocaleString()} - $${avg.toLocaleString()}`,
      "5-10 years": `$${avg.toLocaleString()} - $${(max - 15000).toLocaleString()}`,
      "10+ years": `$${(max - 15000).toLocaleString()} - $${max.toLocaleString()}`
    },
    relatedCareers: c.relatedCareers || ["Software Engineer", "Systems Analyst", "Technical Lead"],
    entrySalary,
    midSalary,
    seniorSalary,
    jobDemand: c.jobDemand || "High",
    topStates: c.topStates || ["CA", "NY", "WA", "TX", "MA"],
    technicalSkills: techSkills,
    softSkills: sSkills,
    tools: toolList,
    faqs: c.faqs || [
      { question: `What are the day-to-day responsibilities of a ${c.name}?`, answer: `A ${c.name} typically spends their day designing solutions, collaborating with teams, and implementing core features within their domain.` },
      { question: `Is ${c.name} a good career choice?`, answer: "Yes, it offers competitive compensation, continuous learning opportunities, and strong market demand." },
      { question: `How long does it take to become a ${c.name}?`, answer: "With dedicated study, you can reach an entry-level proficiency in 6 to 12 months." },
      { question: `What is the most important skill for a ${c.name}?`, answer: `While technical knowledge is crucial, problem-solving and adaptability are the most valuable long-term skills for a ${c.name}.` }
    ]
  };
};

export const careersData = [
  // Original 30 
  createCareer({ name: 'Frontend Developer', slug: 'frontend-developer', salary: { min: 70000, max: 160000, avg: 105000 } }),
  createCareer({ name: 'Backend Developer', slug: 'backend-developer', salary: { min: 75000, max: 170000, avg: 115000 } }),
  createCareer({ name: 'Full Stack Developer', slug: 'full-stack-developer', salary: { min: 80000, max: 185000, avg: 125000 } }),
  createCareer({ name: 'DevOps Engineer', slug: 'devops-engineer', salary: { min: 90000, max: 195000, avg: 135000 } }),
  createCareer({ name: 'Cloud Architect', slug: 'cloud-architect', salary: { min: 120000, max: 220000, avg: 165000 } }),
  createCareer({ name: 'Data Scientist', slug: 'data-scientist', salary: { min: 85000, max: 190000, avg: 130000 } }),
  createCareer({ name: 'Machine Learning Engineer', slug: 'machine-learning-engineer', salary: { min: 100000, max: 210000, avg: 155000 } }),
  createCareer({ name: 'AI Engineer', slug: 'ai-engineer', salary: { min: 110000, max: 220000, avg: 160000 } }),
  createCareer({ name: 'Cybersecurity Specialist', slug: 'cybersecurity-specialist', salary: { min: 85000, max: 180000, avg: 125000 } }),
  createCareer({ name: 'Network Engineer', slug: 'network-engineer', salary: { min: 75000, max: 160000, avg: 108000 } }),
  createCareer({ name: 'Systems Administrator', slug: 'systems-administrator', salary: { min: 65000, max: 130000, avg: 90000 } }),
  createCareer({ name: 'Database Administrator', slug: 'database-administrator', salary: { min: 85000, max: 165000, avg: 125000 } }),
  createCareer({ name: 'QA Engineer', slug: 'qa-engineer', salary: { min: 65000, max: 140000, avg: 95000 } }),
  createCareer({ name: 'Mobile Developer', slug: 'mobile-developer', salary: { min: 75000, max: 165000, avg: 115000 } }),
  createCareer({ name: 'Game Developer', slug: 'game-developer', salary: { min: 75000, max: 160000, avg: 118000 } }),
  createCareer({ name: 'UX/UI Designer', slug: 'ux-ui-designer', salary: { min: 70000, max: 150000, avg: 100000 } }),
  createCareer({ name: 'Product Manager', slug: 'product-manager', salary: { min: 85000, max: 190000, avg: 125000 } }),
  createCareer({ name: 'Business Analyst', slug: 'business-analyst', salary: { min: 70000, max: 140000, avg: 95000 } }),
  createCareer({ name: 'Solutions Architect', slug: 'solutions-architect', salary: { min: 115000, max: 220000, avg: 160000 } }),
  createCareer({ name: 'Documentation Engineer', slug: 'documentation-engineer', salary: { min: 65000, max: 140000, avg: 95000 } }),
  createCareer({ name: 'IT Project Manager', slug: 'it-project-manager', salary: { min: 80000, max: 160000, avg: 115000 } }),
  createCareer({ name: 'IT Support Specialist', slug: 'it-support-specialist', salary: { min: 50000, max: 95000, avg: 65000 } }),
  createCareer({ name: 'Systems Analyst', slug: 'systems-analyst', salary: { min: 70000, max: 135000, avg: 98000 } }),
  createCareer({ name: 'IT Consultant', slug: 'it-consultant', salary: { min: 85000, max: 175000, avg: 120000 } }),
  createCareer({ name: 'Software Architect', slug: 'software-architect', salary: { min: 130000, max: 230000, avg: 175000 } }),
  createCareer({ name: 'Engineering Manager', slug: 'engineering-manager', salary: { min: 140000, max: 250000, avg: 185000 } }),
  createCareer({ name: 'Technical Lead', slug: 'technical-lead', salary: { min: 120000, max: 210000, avg: 160000 } }),
  createCareer({ name: 'Security Engineer', slug: 'security-engineer', salary: { min: 100000, max: 190000, avg: 140000 } }),
  createCareer({ name: 'Infrastructure Engineer', slug: 'infrastructure-engineer', salary: { min: 95000, max: 180000, avg: 130000 } }),
  createCareer({ name: 'Quantum Computing Engineer', slug: 'quantum-computing-engineer', salary: { min: 115000, max: 230000, avg: 165000 } }),
  
  // First Expansion (5)
  createCareer({ name: 'SOC Analyst', slug: 'soc-analyst', salary: { min: 65000, max: 135000, avg: 100000 } }),
  createCareer({ name: 'API Developer', slug: 'api-developer', salary: { min: 75000, max: 155000, avg: 115000 } }),
  createCareer({ name: 'A11y Engineer', slug: 'a11y-engineer', salary: { min: 70000, max: 145000, avg: 107000 } }),
  createCareer({ name: 'Blockchain Security Auditor', slug: 'blockchain-security-auditor', salary: { min: 100000, max: 200000, avg: 150000 } }),
  createCareer({ name: 'Data Engineer', slug: 'data-engineer', salary: { min: 90000, max: 180000, avg: 135000 } }),

  // Second Expansion (5)
  createCareer({ 
    name: 'MLOps Engineer', 
    slug: 'mlops-engineer', 
    salary: { min: 95000, max: 190000, avg: 142000 },
    jobDemandOutlook: "Very High",
    jobDemand: "Very High",
    description: "Bridge the gap between Machine Learning and Operations by streamlining the deployment, testing, and monitoring of ML models.",
    overview: "MLOps Engineers are essential for scaling AI solutions, ensuring that models transition smoothly from research to production environments.",
    technicalSkills: ['Python', 'Docker', 'Kubernetes', 'CI/CD', 'TensorFlow', 'PyTorch', 'AWS SageMaker', 'MLflow'],
    softSkills: ['Analytical Thinking', 'Collaboration', 'Problem Solving', 'Adaptability'],
    tools: ['Git', 'Jenkins', 'Terraform', 'Prometheus', 'Grafana'],
    relatedCareers: ['Machine Learning Engineer', 'Data Engineer', 'DevOps Engineer']
  }),
  createCareer({ 
    name: 'Growth Hacker', 
    slug: 'growth-hacker', 
    salary: { min: 70000, max: 150000, avg: 110000 },
    jobDemandOutlook: "High",
    jobDemand: "High",
    description: "Combine marketing, data analysis, and engineering to rapidly test and implement strategies that drive user acquisition and retention.",
    overview: "Growth Hackers focus purely on growth metrics, utilizing creative, low-cost strategies to help businesses scale efficiently.",
    technicalSkills: ['Data Analysis', 'SQL', 'A/B Testing', 'SEO/SEM', 'HTML/CSS', 'Python (Basic)', 'Conversion Rate Optimization'],
    softSkills: ['Creativity', 'Data-Driven Mindset', 'Agility', 'Communication'],
    tools: ['Google Analytics', 'Mixpanel', 'Optimizely', 'HubSpot', 'Tableau'],
    relatedCareers: ['Product Manager', 'Data Analyst', 'Digital Marketer']
  }),
  createCareer({ 
    name: 'Technical Writer', 
    slug: 'technical-writer', 
    salary: { min: 65000, max: 135000, avg: 100000 },
    jobDemandOutlook: "High",
    jobDemand: "High",
    description: "Translate complex technical concepts into clear, concise, and accessible documentation for developers and end-users.",
    overview: "Technical Writers play a crucial role in developer experience by creating tutorials, API references, and architecture guides.",
    technicalSkills: ['Markdown', 'API Documentation', 'HTML/CSS', 'Git', 'Information Architecture', 'Basic Programming'],
    softSkills: ['Writing', 'Empathy for Users', 'Attention to Detail', 'Interviewing SMEs'],
    tools: ['Sphinx', 'Confluence', 'Swagger/OpenAPI', 'Docusaurus', 'Postman'],
    relatedCareers: ['Developer Advocate', 'UX Writer', 'Documentation Engineer']
  }),
  createCareer({ 
    name: 'Compliance & Privacy Engineer', 
    slug: 'compliance-privacy-engineer', 
    salary: { min: 80000, max: 160000, avg: 120000 },
    jobDemandOutlook: "Very High",
    jobDemand: "Very High",
    description: "Ensure software systems comply with global data protection regulations while integrating privacy-by-design principles into the architecture.",
    overview: "Privacy Engineers protect user data by implementing technical safeguards and auditing systems for compliance with GDPR, CCPA, and other frameworks.",
    technicalSkills: ['GDPR', 'CCPA', 'Data Privacy', 'Risk Assessment', 'Cryptography', 'Data Anonymization', 'Security Auditing'],
    softSkills: ['Ethics', 'Critical Thinking', 'Legal Comprehension', 'Cross-functional Leadership'],
    tools: ['OneTrust', 'Vanta', 'Splunk', 'Data Mapping Tools', 'AWS Macie'],
    relatedCareers: ['Cybersecurity Specialist', 'Security Architect', 'Data Governance Lead']
  }),
  createCareer({ 
    name: 'Prompt Engineer', 
    slug: 'prompt-engineer', 
    salary: { min: 75000, max: 160000, avg: 117000 },
    jobDemandOutlook: "Very High",
    jobDemand: "Very High",
    description: "Design, refine, and optimize prompts to effectively communicate with Large Language Models (LLMs) and generate highly accurate AI outputs.",
    overview: "Prompt Engineers maximize the utility of AI systems by understanding model behaviors, reducing hallucinations, and creating scalable prompt templates.",
    technicalSkills: ['LLM Knowledge', 'Prompt Engineering', 'AI expertise', 'Python', 'NLP Basics', 'Few-Shot Learning', 'Fine-tuning concepts'],
    softSkills: ['Linguistic Precision', 'Iterative Testing', 'Creativity', 'Pattern Recognition'],
    tools: ['OpenAI API', 'LangChain', 'Anthropic Console', 'Hugging Face', 'Jupyter Notebooks'],
    relatedCareers: ['AI Engineer', 'Machine Learning Engineer', 'Conversational Designer']
  }),

  // Third Expansion - 5 New Careers (Total 45)
  createCareer({
    name: 'Embedded Systems Engineer',
    slug: 'embedded-systems-engineer',
    salary: { min: 85000, max: 175000, avg: 130000 },
    jobDemandOutlook: "Very High",
    jobDemand: "Very High",
    description: "Design and program the microcontrollers and firmware that power smart devices and IoT hardware.",
    overview: "Embedded Systems Engineers work at the intersection of hardware and software, creating reliable, real-time systems for medical devices, automotive, and consumer electronics.",
    technicalSkills: ['C', 'C++', 'Microcontrollers', 'RTOS', 'Firmware Development', 'Hardware Debugging', 'IoT'],
    softSkills: ['Problem Solving', 'Attention to Detail', 'Analytical Thinking', 'Patience'],
    tools: ['Oscilloscopes', 'Logic Analyzers', 'Git', 'JTAG', 'Keil'],
    relatedCareers: ['Hardware Engineer', 'IoT Developer', 'Systems Engineer']
  }),
  createCareer({
    name: 'Bioinformatics Engineer',
    slug: 'bioinformatics-engineer',
    salary: { min: 80000, max: 170000, avg: 125000 },
    jobDemandOutlook: "Very High",
    jobDemand: "Very High",
    description: "Develop algorithms and software tools to understand biological data, particularly in genomics.",
    overview: "Bioinformatics Engineers merge biology, computer science, and data analytics to accelerate medical research, drug discovery, and personalized medicine.",
    technicalSkills: ['Python', 'R', 'Genomics', 'Machine Learning', 'Data Pipeline', 'SQL', 'Biostatistics'],
    softSkills: ['Cross-disciplinary Communication', 'Research', 'Critical Thinking', 'Curiosity'],
    tools: ['Nextflow', 'Docker', 'AWS', 'Bioconductor', 'Jupyter'],
    relatedCareers: ['Data Scientist', 'Computational Biologist', 'Machine Learning Engineer']
  }),
  createCareer({
    name: 'Spatial Computing Developer',
    slug: 'spatial-computing-developer',
    salary: { min: 90000, max: 180000, avg: 135000 },
    jobDemandOutlook: "Very High",
    jobDemand: "Very High",
    description: "Build immersive augmented and virtual reality experiences that blend digital content with the physical world.",
    overview: "Spatial Computing Developers push the boundaries of human-computer interaction by developing apps for headsets, smart glasses, and emerging XR platforms.",
    technicalSkills: ['C#', 'C++', 'Unity', 'Unreal Engine', 'ARKit', 'ARCore', '3D Math'],
    softSkills: ['Creativity', 'User Empathy', 'Spatial Awareness', 'Adaptability'],
    tools: ['Blender', 'Maya', 'Git', 'VisionOS', 'Oculus SDK'],
    relatedCareers: ['Game Developer', 'UX/UI Designer', 'Computer Vision Engineer']
  }),
  createCareer({
    name: 'Renewable Energy Systems Engineer',
    slug: 'renewable-energy-systems-engineer',
    salary: { min: 85000, max: 170000, avg: 127000 },
    jobDemandOutlook: "Very High",
    jobDemand: "Very High",
    description: "Design and implement software and systems that optimize the generation and distribution of renewable energy.",
    overview: "Renewable Energy Systems Engineers write the code that manages smart grids, solar arrays, and wind farms, contributing directly to a sustainable future.",
    technicalSkills: ['MATLAB', 'AutoCAD', 'Power Systems', 'Energy Storage', 'Grid Integration', 'Data Analysis'],
    softSkills: ['Project Management', 'Sustainability Focus', 'Problem Solving', 'Collaboration'],
    tools: ['PVsyst', 'Homer', 'SCADA', 'GIS', 'Python'],
    relatedCareers: ['Systems Engineer', 'Data Analyst', 'Infrastructure Engineer']
  }),
  createCareer({
    name: 'Neurotech Engineer',
    slug: 'neurotech-engineer',
    salary: { min: 95000, max: 190000, avg: 142000 },
    jobDemandOutlook: "Very High",
    jobDemand: "Very High",
    description: "Develop brain-computer interfaces and applications that read and interpret neural signals.",
    overview: "Neurotech Engineers are at the bleeding edge of science and technology, building systems that restore mobility, treat neurological disorders, and enhance human cognition.",
    technicalSkills: ['Signal Processing', 'Python', 'MATLAB', 'Machine Learning', 'BCI', 'Neuroscience Basics', 'C++'],
    softSkills: ['Ethics', 'Innovation', 'Research-driven', 'Perseverance'],
    tools: ['EEG Software', 'TensorFlow', 'LabVIEW', 'OpenBCI', 'MNE-Python'],
    relatedCareers: ['Biomedical Engineer', 'Machine Learning Engineer', 'AI Engineer']
  }),

  // Fourth Expansion - 5 New Careers (Total 50)
  createCareer({
    name: 'Security Architect',
    slug: 'security-architect',
    salary: { min: 125000, max: 200000, avg: 165000 },
    jobDemandOutlook: 'Very High',
    jobDemand: 'Very High',
    description: 'Design and implement enterprise security solutions, including access controls, encryption, and threat mitigation strategies across distributed systems.',
    overview: 'Security Architects lead the design of comprehensive security frameworks, ensuring systems are protected against advanced persistent threats and compliance risks.',
    technicalSkills: ['Zero Trust Architecture', 'IAM', 'PKI', 'SIEM', 'Threat Modeling', 'OWASP', 'Cloud Security'],
    softSkills: ['Risk Assessment', 'Stakeholder Communication', 'Strategic Thinking', 'Attention to Detail'],
    tools: ['Palo Alto', 'CrowdStrike', 'Splunk', 'AWS Security Hub', 'Terraform'],
    relatedCareers: ['Cloud Security Engineer', 'Penetration Tester', 'CISO']
  }),
  createCareer({
    name: 'Cloud Security Engineer',
    slug: 'cloud-security-engineer',
    salary: { min: 115000, max: 195000, avg: 155000 },
    jobDemandOutlook: 'Very High',
    jobDemand: 'Very High',
    description: 'Secure cloud infrastructure and applications, implement cloud security best practices, and manage cloud access controls across multi-cloud environments.',
    overview: 'Cloud Security Engineers protect cloud-native applications and infrastructure, implementing guardrails, policies, and monitoring across AWS, Azure, and GCP.',
    technicalSkills: ['AWS/Azure/GCP Security', 'IAM', 'CSPM', 'Container Security', 'DevSecOps', 'Terraform', 'SIEM'],
    softSkills: ['Risk Analysis', 'Collaboration', 'Communication', 'Continuous Learning'],
    tools: ['AWS Security Hub', 'Azure Defender', 'Prisma Cloud', 'HashiCorp Vault', 'Wiz'],
    relatedCareers: ['Security Architect', 'DevOps Engineer', 'Cloud Architect']
  }),
  createCareer({
    name: 'Enterprise Architect',
    slug: 'enterprise-architect',
    salary: { min: 130000, max: 210000, avg: 170000 },
    jobDemandOutlook: 'High',
    jobDemand: 'High',
    description: 'Design enterprise IT infrastructure, oversee digital transformation initiatives, and align technology with business strategy across an organization.',
    overview: 'Enterprise Architects operate at the intersection of business and technology, crafting long-term IT strategies, governance frameworks, and architectural standards.',
    technicalSkills: ['TOGAF', 'Enterprise Integration Patterns', 'SOA/Microservices', 'Cloud Strategy', 'API Design', 'ITIL'],
    softSkills: ['Executive Communication', 'Strategic Planning', 'Stakeholder Management', 'Leadership'],
    tools: ['ArchiMate', 'LeanIX', 'Sparx EA', 'Confluence', 'Jira'],
    relatedCareers: ['Solutions Architect', 'Software Architect', 'CTO']
  }),
  createCareer({
    name: 'Integration Engineer',
    slug: 'integration-engineer',
    salary: { min: 95000, max: 175000, avg: 135000 },
    jobDemandOutlook: 'High',
    jobDemand: 'High',
    description: 'Design and implement integrations between enterprise systems using APIs, middleware, and ETL tools to create seamless data flows.',
    overview: 'Integration Engineers connect disparate software systems, enabling data exchange and workflow automation across ERP, CRM, and cloud platforms.',
    technicalSkills: ['REST APIs', 'GraphQL', 'ETL', 'Kafka', 'MuleSoft', 'iPaaS', 'SQL'],
    softSkills: ['Problem Solving', 'Systems Thinking', 'Documentation', 'Collaboration'],
    tools: ['MuleSoft', 'Boomi', 'Kafka', 'Postman', 'Talend'],
    relatedCareers: ['API Developer', 'Backend Engineer', 'Data Engineer']
  }),
  createCareer({
    name: 'Performance Engineer',
    slug: 'performance-engineer',
    salary: { min: 105000, max: 185000, avg: 145000 },
    jobDemandOutlook: 'High',
    jobDemand: 'High',
    description: 'Optimize application and system performance through profiling, benchmarking, load testing, and architectural improvements for high-traffic systems.',
    overview: 'Performance Engineers ensure applications can handle peak loads by identifying bottlenecks, tuning systems, and implementing caching and scaling solutions.',
    technicalSkills: ['Load Testing', 'Profiling', 'JVM Tuning', 'Caching', 'CDN', 'Database Optimization', 'APM'],
    softSkills: ['Analytical Thinking', 'Attention to Detail', 'Communication', 'Patience'],
    tools: ['JMeter', 'Gatling', 'Grafana', 'Datadog', 'New Relic'],
    relatedCareers: ['Site Reliability Engineer', 'Backend Engineer', 'DevOps Engineer']
  })
];

export const getCareerBySlug = (slug) => {
  return careersData.find(career => career.slug === slug);
};

export const getAllCareers = () => {
  return careersData;
};
