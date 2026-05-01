
const careerNames = [
  "Software Engineer", "Product Manager", "Data Scientist", "UX Designer", "Marketing Manager", 
  "Sales Executive", "Business Analyst", "DevOps Engineer", "Frontend Developer", "Backend Developer", 
  "Full Stack Developer", "Mobile App Developer", "Machine Learning Engineer", "Data Engineer", "Cloud Architect", 
  "Cybersecurity Engineer", "QA Engineer", "Systems Administrator", "Database Administrator", "Network Engineer", 
  "IT Project Manager", "IT Support Specialist", "Business Development Manager", "Account Executive", "Customer Success Manager", 
  "Operations Manager", "Supply Chain Manager", "Financial Analyst", "Accountant", "Auditor", 
  "Tax Specialist", "Human Resources Manager", "Recruiter", "Content Strategist", "Copywriter", 
  "Graphic Designer", "UI Designer", "Product Designer", "Brand Manager", "Social Media Manager", 
  "SEO Specialist", "PPC Specialist", "Email Marketing Specialist", "Market Research Analyst", "Management Consultant", 
  "Strategy Consultant", "Solutions Architect", "Technical Writer", "Project Manager", "Business Intelligence Analyst"
];

// Helper to generate realistic data based on career category
const getCategoryData = (name) => {
  const n = name.toLowerCase();
  if (n.includes('engineer') || n.includes('developer') || n.includes('architect')) {
    return {
      category: 'Engineering',
      baseSalary: 110000,
      growth: '22%',
      demand: 'High',
      techSkills: ['JavaScript/Python/Java', 'Git/Version Control', 'CI/CD', 'Cloud Platforms (AWS/GCP)', 'System Design', 'APIs'],
      softSkills: ['Problem Solving', 'Analytical Thinking', 'Team Collaboration', 'Adaptability'],
      tools: ['VS Code', 'Docker', 'Kubernetes', 'Jira', 'Postman'],
      certs: ['AWS Certified Solutions Architect', 'Certified Kubernetes Administrator', 'CompTIA Security+'],
      env: 'Hybrid / Remote',
      companies: ['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple']
    };
  } else if (n.includes('data') || n.includes('machine learning') || n.includes('analyst')) {
    return {
      category: 'Data',
      baseSalary: 105000,
      growth: '35%',
      demand: 'High',
      techSkills: ['SQL', 'Python/R', 'Data Visualization', 'Statistical Analysis', 'Machine Learning', 'ETL'],
      softSkills: ['Critical Thinking', 'Business Acumen', 'Communication', 'Curiosity'],
      tools: ['Tableau', 'Power BI', 'Jupyter', 'Snowflake', 'Databricks'],
      certs: ['Google Data Analytics', 'AWS Certified Data Analytics', 'Microsoft Certified: Data Scientist'],
      env: 'Hybrid / Remote',
      companies: ['Netflix', 'Uber', 'Airbnb', 'Stripe', 'Spotify']
    };
  } else if (n.includes('design') || n.includes('ux') || n.includes('ui')) {
    return {
      category: 'Design',
      baseSalary: 95000,
      growth: '16%',
      demand: 'Medium',
      techSkills: ['Wireframing', 'Prototyping', 'User Research', 'Interaction Design', 'Information Architecture'],
      softSkills: ['Empathy', 'Active Listening', 'Collaboration', 'Receptiveness to Feedback'],
      tools: ['Figma', 'Sketch', 'Adobe Creative Cloud', 'InVision', 'Miro'],
      certs: ['Google UX Design Certificate', 'Nielsen Norman Group UX Certification'],
      env: 'Hybrid / Remote',
      companies: ['Apple', 'Airbnb', 'IDEO', 'Spotify', 'Adobe']
    };
  } else if (n.includes('manager') || n.includes('consultant') || n.includes('executive')) {
    return {
      category: 'Business & Management',
      baseSalary: 120000,
      growth: '10%',
      demand: 'Medium',
      techSkills: ['Project Management', 'Financial Modeling', 'Strategic Planning', 'Agile/Scrum', 'Data Analysis'],
      softSkills: ['Leadership', 'Negotiation', 'Public Speaking', 'Stakeholder Management', 'Decision Making'],
      tools: ['Jira', 'Asana', 'Salesforce', 'Excel', 'Confluence'],
      certs: ['PMP', 'Certified ScrumMaster (CSM)', 'Six Sigma'],
      env: 'Office / Hybrid',
      companies: ['McKinsey', 'Bain & Company', 'Deloitte', 'Goldman Sachs', 'Salesforce']
    };
  } else if (n.includes('marketing') || n.includes('seo') || n.includes('content') || n.includes('social')) {
    return {
      category: 'Marketing',
      baseSalary: 85000,
      growth: '10%',
      demand: 'Medium',
      techSkills: ['SEO/SEM', 'Content Strategy', 'Analytics', 'Campaign Management', 'Copywriting'],
      softSkills: ['Creativity', 'Communication', 'Adaptability', 'Trend Awareness'],
      tools: ['Google Analytics', 'HubSpot', 'Ahrefs', 'Hootsuite', 'Mailchimp'],
      certs: ['Google Analytics Certification', 'HubSpot Content Marketing', 'Meta Blueprint'],
      env: 'Hybrid / Remote',
      companies: ['HubSpot', 'Ogilvy', 'Procter & Gamble', 'Unilever', 'L\'Oréal']
    };
  } else {
    return {
      category: 'Operations & Support',
      baseSalary: 75000,
      growth: '8%',
      demand: 'Medium',
      techSkills: ['Process Optimization', 'Troubleshooting', 'System Administration', 'Reporting'],
      softSkills: ['Patience', 'Clear Communication', 'Time Management', 'Organization'],
      tools: ['Zendesk', 'ServiceNow', 'Microsoft Office', 'Slack'],
      certs: ['ITIL', 'CompTIA A+', 'Microsoft 365 Certified'],
      env: 'Office / Hybrid',
      companies: ['IBM', 'Cisco', 'Dell', 'HP', 'Intel']
    };
  }
};

export const careerRoadmapData = careerNames.map(name => {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const catData = getCategoryData(name);
  
  // Add some randomness to salaries based on the name length to make them look organic
  const variance = (name.length % 5) * 2000;
  const avg = catData.baseSalary + variance;
  
  return {
    id: slug,
    name: name,
    slug: slug,
    description: `A ${name} is a critical role focused on driving value through specialized expertise in ${catData.category.toLowerCase()}. They are responsible for executing complex tasks, collaborating with cross-functional teams, and ensuring high-quality outcomes that align with organizational goals.`,
    entrySalary: Math.round(avg * 0.7),
    midSalary: avg,
    seniorSalary: Math.round(avg * 1.35),
    expertSalary: Math.round(avg * 1.7),
    averageSalary: avg,
    jobDemand: catData.demand,
    growthRate: catData.growth,
    requiredSkills: {
      technical: catData.techSkills,
      soft: catData.softSkills
    },
    tools: catData.tools,
    educationRequirements: "Bachelor's degree in a related field, or equivalent practical experience and demonstrated portfolio.",
    certifications: catData.certs,
    careerProgressionPath: [
      {
        level: "Entry Level",
        title: `Junior ${name}`,
        timeline: "0-2 years",
        salary: Math.round(avg * 0.7),
        description: "Focuses on learning core systems, completing well-defined tasks, and assisting senior team members."
      },
      {
        level: "Mid Level",
        title: name,
        timeline: "2-5 years",
        salary: avg,
        description: "Takes ownership of larger projects, works independently, and begins mentoring junior staff."
      },
      {
        level: "Senior Level",
        title: `Senior ${name}`,
        timeline: "5-8 years",
        salary: Math.round(avg * 1.35),
        description: "Leads complex initiatives, defines best practices, and drives strategic decisions within the team."
      },
      {
        level: "Expert / Leadership",
        title: `Lead ${name} / Manager`,
        timeline: "8+ years",
        salary: Math.round(avg * 1.7),
        description: "Sets organizational vision, manages multiple teams or highly complex architectures, and influences company-wide strategy."
      }
    ],
    dayToDayResponsibilities: [
      "Collaborate with stakeholders to define project requirements and deliverables.",
      "Execute specialized tasks using industry-standard tools and methodologies.",
      "Analyze data or feedback to iterate and improve upon existing processes.",
      "Participate in team meetings, code/design reviews, and strategic planning sessions.",
      "Document workflows, architectures, or strategies for future reference."
    ],
    workEnvironment: catData.env,
    topCompaniesHiring: catData.companies,
    relatedCareers: careerNames.filter(n => n !== name && getCategoryData(n).category === catData.category).slice(0, 4),
    learningResources: [
      { name: `Complete ${name} Bootcamp`, link: "#" },
      { name: "Advanced Industry Techniques", link: "#" },
      { name: "Professional Community Forum", link: "#" }
    ]
  };
});
