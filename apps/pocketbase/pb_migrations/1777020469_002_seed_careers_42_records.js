/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
    record0.set("name", "Software Engineer");
    record0.set("slug", "software-engineer");
    record0.set("description", "Design, develop, and maintain software applications and systems");
    record0.set("overview", "Software engineers create the applications and systems that power modern technology. They work across full-stack development, backend systems, frontend interfaces, and everything in between.");
    record0.set("averageSalary", 120000);
    record0.set("salaryRange", "{'min': 80000, 'max': 180000}");
    record0.set("jobDemandOutlook", "Very High - Growing 22% through 2032");
    record0.set("topPayingStates", [{"state": "California", "salary": 145000}, {"state": "New York", "salary": 135000}, {"state": "Washington", "salary": 130000}, {"state": "Massachusetts", "salary": 128000}, {"state": "Colorado", "salary": 125000}]);
    record0.set("roadmap", "{'phase1': 'Learn fundamentals', 'phase2': 'Build projects', 'phase3': 'Contribute to open source', 'phase4': 'Interview preparation', 'phase5': 'Land first role'}");
    record0.set("skillsRequired", ["Programming Languages", "Data Structures", "Algorithms", "System Design", "Version Control", "Testing", "Debugging"]);
    record0.set("salaryInsights", "{'entry': 85000, 'mid': 120000, 'senior': 160000, 'lead': 200000}");
    record0.set("relatedCareers", ["backend-engineer", "frontend-engineer", "full-stack-engineer"]);
    record0.set("entrySalary", 85000);
    record0.set("midSalary", 120000);
    record0.set("seniorSalary", 160000);
    record0.set("jobDemand", "High");
    record0.set("topStates", [{"state": "California", "count": 45000}, {"state": "New York", "count": 28000}, {"state": "Washington", "count": 22000}, {"state": "Texas", "count": 20000}, {"state": "Massachusetts", "count": 18000}]);
    record0.set("technicalSkills", ["Python", "Java", "JavaScript", "C++", "SQL", "Git", "Docker", "Kubernetes"]);
    record0.set("softSkills", ["Problem Solving", "Communication", "Teamwork", "Time Management", "Adaptability"]);
    record0.set("tools", ["VS Code", "Git", "Docker", "Jenkins", "JIRA", "Slack"]);
    record0.set("faqs", [{"question": "What languages should I learn?", "answer": "Start with Python or JavaScript, then expand to Java or C++."}, {"question": "How long does it take?", "answer": "6-12 months with dedicated learning, 2-4 years for mastery."}]);
  try {
    app.save(record0);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record1 = new Record(collection);
    record1.set("name", "Data Analyst");
    record1.set("slug", "data-analyst");
    record1.set("description", "Analyze data to help organizations make informed business decisions");
    record1.set("overview", "Data analysts transform raw data into actionable insights. They use statistical analysis, data visualization, and business acumen to drive decision-making across organizations.");
    record1.set("averageSalary", 75000);
    record1.set("salaryRange", "{'min': 55000, 'max': 110000}");
    record1.set("jobDemandOutlook", "High - Growing 36% through 2032");
    record1.set("topPayingStates", [{"state": "California", "salary": 95000}, {"state": "New York", "salary": 88000}, {"state": "Washington", "salary": 85000}, {"state": "Massachusetts", "salary": 83000}, {"state": "Colorado", "salary": 80000}]);
    record1.set("roadmap", "{'phase1': 'Learn Excel and SQL', 'phase2': 'Master visualization tools', 'phase3': 'Learn statistics', 'phase4': 'Build portfolio', 'phase5': 'Interview prep'}");
    record1.set("skillsRequired", ["SQL", "Excel", "Data Visualization", "Statistics", "Business Acumen", "Python", "Tableau"]);
    record1.set("salaryInsights", "{'entry': 60000, 'mid': 75000, 'senior': 105000, 'lead': 130000}");
    record1.set("relatedCareers", ["business-intelligence-analyst", "data-scientist", "business-analyst"]);
    record1.set("entrySalary", 60000);
    record1.set("midSalary", 75000);
    record1.set("seniorSalary", 105000);
    record1.set("jobDemand", "High");
    record1.set("topStates", [{"state": "California", "count": 12000}, {"state": "New York", "count": 8500}, {"state": "Texas", "count": 7000}, {"state": "Washington", "count": 6500}, {"state": "Massachusetts", "count": 6000}]);
    record1.set("technicalSkills", ["SQL", "Python", "R", "Excel", "Tableau", "Power BI", "Google Analytics"]);
    record1.set("softSkills", ["Communication", "Critical Thinking", "Attention to Detail", "Storytelling", "Collaboration"]);
    record1.set("tools", ["Excel", "SQL", "Tableau", "Power BI", "Python", "R", "Google Analytics"]);
    record1.set("faqs", [{"question": "Do I need a degree?", "answer": "No, bootcamps and self-study are viable paths."}, {"question": "What tools matter most?", "answer": "SQL and Excel are essential; Tableau/Power BI are highly valued."}]);
  try {
    app.save(record1);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record2 = new Record(collection);
    record2.set("name", "DevOps Engineer");
    record2.set("slug", "devops-engineer");
    record2.set("description", "Manage infrastructure, deployment pipelines, and system reliability");
    record2.set("overview", "DevOps engineers bridge development and operations, automating deployment processes and ensuring system reliability. They work with cloud platforms, containerization, and infrastructure as code.");
    record2.set("averageSalary", 130000);
    record2.set("salaryRange", "{'min': 95000, 'max': 180000}");
    record2.set("jobDemandOutlook", "Very High - Growing 25% through 2032");
    record2.set("topPayingStates", [{"state": "California", "salary": 155000}, {"state": "New York", "salary": 145000}, {"state": "Washington", "salary": 140000}, {"state": "Massachusetts", "salary": 138000}, {"state": "Colorado", "salary": 135000}]);
    record2.set("roadmap", "{'phase1': 'Learn Linux and networking', 'phase2': 'Master cloud platforms', 'phase3': 'Learn containerization', 'phase4': 'CI/CD pipelines', 'phase5': 'Infrastructure as code'}");
    record2.set("skillsRequired", ["Linux", "Cloud Platforms", "Docker", "Kubernetes", "CI/CD", "Scripting", "Monitoring"]);
    record2.set("salaryInsights", "{'entry': 100000, 'mid': 130000, 'senior': 170000, 'lead': 210000}");
    record2.set("relatedCareers", ["cloud-architect", "systems-administrator", "backend-engineer"]);
    record2.set("entrySalary", 100000);
    record2.set("midSalary", 130000);
    record2.set("seniorSalary", 170000);
    record2.set("jobDemand", "High");
    record2.set("topStates", [{"state": "California", "count": 8000}, {"state": "New York", "count": 5500}, {"state": "Washington", "count": 5000}, {"state": "Texas", "count": 4500}, {"state": "Massachusetts", "count": 4000}]);
    record2.set("technicalSkills", ["Linux", "Docker", "Kubernetes", "AWS", "Azure", "GCP", "Terraform", "Jenkins"]);
    record2.set("softSkills", ["Problem Solving", "Communication", "Attention to Detail", "Collaboration", "Leadership"]);
    record2.set("tools", ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Terraform", "Ansible", "Prometheus"]);
    record2.set("faqs", [{"question": "Do I need to be a developer first?", "answer": "Not necessarily, but understanding development helps significantly."}, {"question": "What cloud platform should I learn?", "answer": "AWS is most popular, but Azure and GCP are also valuable."}]);
  try {
    app.save(record2);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record3 = new Record(collection);
    record3.set("name", "Product Manager");
    record3.set("slug", "product-manager");
    record3.set("description", "Lead product strategy, roadmap, and cross-functional teams");
    record3.set("overview", "Product managers are the 'CEOs of their product,' defining vision, strategy, and roadmap. They work with engineering, design, marketing, and sales to deliver customer value.");
    record3.set("averageSalary", 135000);
    record3.set("salaryRange", "{'min': 100000, 'max': 200000}");
    record3.set("jobDemandOutlook", "High - Growing 18% through 2032");
    record3.set("topPayingStates", [{"state": "California", "salary": 165000}, {"state": "New York", "salary": 155000}, {"state": "Washington", "salary": 150000}, {"state": "Massachusetts", "salary": 148000}, {"state": "Colorado", "salary": 145000}]);
    record3.set("roadmap", "{'phase1': 'Understand product fundamentals', 'phase2': 'Learn user research', 'phase3': 'Master analytics', 'phase4': 'Build portfolio', 'phase5': 'Interview prep'}");
    record3.set("skillsRequired", ["Product Strategy", "User Research", "Analytics", "Communication", "Leadership", "Technical Acumen", "Business Sense"]);
    record3.set("salaryInsights", "{'entry': 110000, 'mid': 135000, 'senior': 180000, 'lead': 250000}");
    record3.set("relatedCareers", ["business-analyst", "ux-designer", "project-manager"]);
    record3.set("entrySalary", 110000);
    record3.set("midSalary", 135000);
    record3.set("seniorSalary", 180000);
    record3.set("jobDemand", "High");
    record3.set("topStates", [{"state": "California", "count": 6500}, {"state": "New York", "count": 4500}, {"state": "Washington", "count": 3500}, {"state": "Texas", "count": 3000}, {"state": "Massachusetts", "count": 2800}]);
    record3.set("technicalSkills", ["Analytics", "SQL", "User Research", "Wireframing", "Prototyping", "A/B Testing"]);
    record3.set("softSkills", ["Leadership", "Communication", "Strategic Thinking", "Empathy", "Negotiation"]);
    record3.set("tools", ["Figma", "Mixpanel", "Amplitude", "Jira", "Confluence", "Miro", "UserTesting"]);
    record3.set("faqs", [{"question": "Do I need an MBA?", "answer": "No, but business education or experience helps."}, {"question": "What's the best path into PM?", "answer": "Common paths: APM programs, transitioning from engineering/design, or starting in related roles."}]);
  try {
    app.save(record3);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record4 = new Record(collection);
    record4.set("name", "UX Designer");
    record4.set("slug", "ux-designer");
    record4.set("description", "Design user experiences and interfaces for digital products");
    record4.set("overview", "UX designers create intuitive, beautiful, and functional digital experiences. They conduct user research, create wireframes and prototypes, and iterate based on feedback.");
    record4.set("averageSalary", 95000);
    record4.set("salaryRange", "{'min': 70000, 'max': 140000}");
    record4.set("jobDemandOutlook", "High - Growing 20% through 2032");
    record4.set("topPayingStates", [{"state": "California", "salary": 120000}, {"state": "New York", "salary": 110000}, {"state": "Washington", "salary": 105000}, {"state": "Massachusetts", "salary": 103000}, {"state": "Colorado", "salary": 100000}]);
    record4.set("roadmap", "{'phase1': 'Learn design fundamentals', 'phase2': 'Master design tools', 'phase3': 'User research', 'phase4': 'Build portfolio', 'phase5': 'Interview prep'}");
    record4.set("skillsRequired", ["User Research", "Wireframing", "Prototyping", "Visual Design", "Interaction Design", "Usability Testing", "Communication"]);
    record4.set("salaryInsights", "{'entry': 75000, 'mid': 95000, 'senior': 130000, 'lead': 170000}");
    record4.set("relatedCareers", ["frontend-engineer", "product-manager", "ui-designer"]);
    record4.set("entrySalary", 75000);
    record4.set("midSalary", 95000);
    record4.set("seniorSalary", 130000);
    record4.set("jobDemand", "High");
    record4.set("topStates", [{"state": "California", "count": 5500}, {"state": "New York", "count": 3800}, {"state": "Washington", "count": 3200}, {"state": "Texas", "count": 2800}, {"state": "Massachusetts", "count": 2500}]);
    record4.set("technicalSkills", ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research", "Wireframing"]);
    record4.set("softSkills", ["Empathy", "Communication", "Creativity", "Problem Solving", "Collaboration"]);
    record4.set("tools", ["Figma", "Adobe XD", "Sketch", "Miro", "UserTesting", "Hotjar", "Maze"]);
    record4.set("faqs", [{"question": "Do I need a design degree?", "answer": "No, bootcamps and self-study are viable with a strong portfolio."}, {"question": "What's the difference between UX and UI?", "answer": "UX focuses on user experience and research; UI focuses on visual design and interfaces."}]);
  try {
    app.save(record4);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record5 = new Record(collection);
    record5.set("name", "Backend Engineer");
    record5.set("slug", "backend-engineer");
    record5.set("description", "Build server-side applications, APIs, and databases");
    record5.set("overview", "Backend engineers develop the server-side logic, databases, and APIs that power applications. They focus on performance, scalability, and security.");
    record5.set("averageSalary", 125000);
    record5.set("salaryRange", "{'min': 85000, 'max': 180000}");
    record5.set("jobDemandOutlook", "Very High - Growing 23% through 2032");
    record5.set("topPayingStates", [{"state": "California", "salary": 150000}, {"state": "New York", "salary": 140000}, {"state": "Washington", "salary": 135000}, {"state": "Massachusetts", "salary": 133000}, {"state": "Colorado", "salary": 130000}]);
    record5.set("roadmap", "{'phase1': 'Learn programming fundamentals', 'phase2': 'Master databases', 'phase3': 'Learn APIs and REST', 'phase4': 'System design', 'phase5': 'Interview prep'}");
    record5.set("skillsRequired", ["Programming Languages", "Databases", "APIs", "System Design", "Testing", "Version Control", "Cloud Platforms"]);
    record5.set("salaryInsights", "{'entry': 90000, 'mid': 125000, 'senior': 165000, 'lead': 210000}");
    record5.set("relatedCareers", ["software-engineer", "devops-engineer", "database-administrator"]);
    record5.set("entrySalary", 90000);
    record5.set("midSalary", 125000);
    record5.set("seniorSalary", 165000);
    record5.set("jobDemand", "High");
    record5.set("topStates", [{"state": "California", "count": 18000}, {"state": "New York", "count": 12000}, {"state": "Washington", "count": 10000}, {"state": "Texas", "count": 9000}, {"state": "Massachusetts", "count": 8000}]);
    record5.set("technicalSkills", ["Python", "Java", "Node.js", "SQL", "PostgreSQL", "MongoDB", "Redis"]);
    record5.set("softSkills", ["Problem Solving", "Communication", "Attention to Detail", "Collaboration", "Debugging"]);
    record5.set("tools", ["Git", "Docker", "Kubernetes", "Jenkins", "PostgreSQL", "MongoDB", "Redis"]);
    record5.set("faqs", [{"question": "What language should I learn?", "answer": "Python, Java, or Node.js are popular choices."}, {"question": "How important is database knowledge?", "answer": "Very important - SQL and NoSQL databases are essential."}]);
  try {
    app.save(record5);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record6 = new Record(collection);
    record6.set("name", "Frontend Engineer");
    record6.set("slug", "frontend-engineer");
    record6.set("description", "Build user-facing web and mobile applications");
    record6.set("overview", "Frontend engineers create the visual and interactive parts of applications. They work with HTML, CSS, JavaScript, and modern frameworks to deliver engaging user experiences.");
    record6.set("averageSalary", 115000);
    record6.set("salaryRange", "{'min': 80000, 'max': 170000}");
    record6.set("jobDemandOutlook", "Very High - Growing 24% through 2032");
    record6.set("topPayingStates", [{"state": "California", "salary": 140000}, {"state": "New York", "salary": 130000}, {"state": "Washington", "salary": 125000}, {"state": "Massachusetts", "salary": 123000}, {"state": "Colorado", "salary": 120000}]);
    record6.set("roadmap", "{'phase1': 'Learn HTML/CSS/JavaScript', 'phase2': 'Master a framework', 'phase3': 'Learn responsive design', 'phase4': 'Build projects', 'phase5': 'Interview prep'}");
    record6.set("skillsRequired", ["HTML/CSS", "JavaScript", "React/Vue/Angular", "Responsive Design", "Version Control", "Testing", "Performance Optimization"]);
    record6.set("salaryInsights", "{'entry': 85000, 'mid': 115000, 'senior': 155000, 'lead': 200000}");
    record6.set("relatedCareers", ["software-engineer", "ux-designer", "full-stack-engineer"]);
    record6.set("entrySalary", 85000);
    record6.set("midSalary", 115000);
    record6.set("seniorSalary", 155000);
    record6.set("jobDemand", "High");
    record6.set("topStates", [{"state": "California", "count": 16000}, {"state": "New York", "count": 11000}, {"state": "Washington", "count": 9000}, {"state": "Texas", "count": 8000}, {"state": "Massachusetts", "count": 7500}]);
    record6.set("technicalSkills", ["JavaScript", "React", "Vue", "Angular", "HTML", "CSS", "TypeScript"]);
    record6.set("softSkills", ["Attention to Detail", "Communication", "Problem Solving", "Creativity", "Collaboration"]);
    record6.set("tools", ["VS Code", "Git", "Chrome DevTools", "Webpack", "npm", "Jest", "Figma"]);
    record6.set("faqs", [{"question": "Which framework should I learn?", "answer": "React is most popular, but Vue and Angular are also valuable."}, {"question": "Do I need to know backend?", "answer": "Not required, but understanding APIs and databases helps."}]);
  try {
    app.save(record6);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record7 = new Record(collection);
    record7.set("name", "Full Stack Engineer");
    record7.set("slug", "full-stack-engineer");
    record7.set("description", "Build complete applications from frontend to backend");
    record7.set("overview", "Full stack engineers work across the entire application stack, from user interfaces to databases. They have broad technical knowledge and can build complete features independently.");
    record7.set("averageSalary", 120000);
    record7.set("salaryRange", "{'min': 85000, 'max': 175000}");
    record7.set("jobDemandOutlook", "Very High - Growing 23% through 2032");
    record7.set("topPayingStates", [{"state": "California", "salary": 145000}, {"state": "New York", "salary": 135000}, {"state": "Washington", "salary": 130000}, {"state": "Massachusetts", "salary": 128000}, {"state": "Colorado", "salary": 125000}]);
    record7.set("roadmap", "{'phase1': 'Learn frontend basics', 'phase2': 'Learn backend basics', 'phase3': 'Master a stack', 'phase4': 'Build projects', 'phase5': 'Interview prep'}");
    record7.set("skillsRequired", ["Frontend Technologies", "Backend Technologies", "Databases", "APIs", "System Design", "DevOps Basics", "Problem Solving"]);
    record7.set("salaryInsights", "{'entry': 88000, 'mid': 120000, 'senior': 160000, 'lead': 205000}");
    record7.set("relatedCareers", ["software-engineer", "backend-engineer", "frontend-engineer"]);
    record7.set("entrySalary", 88000);
    record7.set("midSalary", 120000);
    record7.set("seniorSalary", 160000);
    record7.set("jobDemand", "High");
    record7.set("topStates", [{"state": "California", "count": 14000}, {"state": "New York", "count": 10000}, {"state": "Washington", "count": 8500}, {"state": "Texas", "count": 7500}, {"state": "Massachusetts", "count": 7000}]);
    record7.set("technicalSkills", ["JavaScript", "React", "Node.js", "Python", "SQL", "MongoDB", "Docker"]);
    record7.set("softSkills", ["Problem Solving", "Communication", "Adaptability", "Collaboration", "Time Management"]);
    record7.set("tools", ["VS Code", "Git", "Docker", "PostgreSQL", "MongoDB", "Postman", "JIRA"]);
    record7.set("faqs", [{"question": "Is full stack better than specializing?", "answer": "Both paths are valuable; choose based on your interests."}, {"question": "What's the best stack to learn?", "answer": "MERN (MongoDB, Express, React, Node) or LAMP are popular choices."}]);
  try {
    app.save(record7);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record8 = new Record(collection);
    record8.set("name", "Cloud Architect");
    record8.set("slug", "cloud-architect");
    record8.set("description", "Design and manage cloud infrastructure and solutions");
    record8.set("overview", "Cloud architects design scalable, secure, and cost-effective cloud solutions. They work with AWS, Azure, or GCP to build enterprise-grade infrastructure.");
    record8.set("averageSalary", 145000);
    record8.set("salaryRange", "{'min': 110000, 'max': 200000}");
    record8.set("jobDemandOutlook", "Very High - Growing 28% through 2032");
    record8.set("topPayingStates", [{"state": "California", "salary": 170000}, {"state": "New York", "salary": 160000}, {"state": "Washington", "salary": 155000}, {"state": "Massachusetts", "salary": 153000}, {"state": "Colorado", "salary": 150000}]);
    record8.set("roadmap", "{'phase1': 'Learn cloud fundamentals', 'phase2': 'Get cloud certification', 'phase3': 'Design solutions', 'phase4': 'Gain experience', 'phase5': 'Architect complex systems'}");
    record8.set("skillsRequired", ["Cloud Platforms", "System Design", "Networking", "Security", "Cost Optimization", "DevOps", "Infrastructure as Code"]);
    record8.set("salaryInsights", "{'entry': 120000, 'mid': 145000, 'senior': 190000, 'lead': 250000}");
    record8.set("relatedCareers", ["devops-engineer", "systems-administrator", "security-engineer"]);
    record8.set("entrySalary", 120000);
    record8.set("midSalary", 145000);
    record8.set("seniorSalary", 190000);
    record8.set("jobDemand", "High");
    record8.set("topStates", [{"state": "California", "count": 6000}, {"state": "New York", "count": 4000}, {"state": "Washington", "count": 3500}, {"state": "Texas", "count": 3000}, {"state": "Massachusetts", "count": 2800}]);
    record8.set("technicalSkills", ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Networking", "Security"]);
    record8.set("softSkills", ["Strategic Thinking", "Communication", "Problem Solving", "Leadership", "Attention to Detail"]);
    record8.set("tools", ["AWS", "Azure", "Terraform", "Kubernetes", "CloudFormation", "Ansible", "Prometheus"]);
    record8.set("faqs", [{"question": "What certifications do I need?", "answer": "AWS Solutions Architect or Azure Administrator are highly valued."}, {"question": "Do I need DevOps experience first?", "answer": "It helps, but not required if you have strong infrastructure knowledge."}]);
  try {
    app.save(record8);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record9 = new Record(collection);
    record9.set("name", "Security Engineer");
    record9.set("slug", "security-engineer");
    record9.set("description", "Protect systems and data from security threats");
    record9.set("overview", "Security engineers design and implement security measures to protect systems, networks, and data. They identify vulnerabilities, implement safeguards, and respond to incidents.");
    record9.set("averageSalary", 135000);
    record9.set("salaryRange", "{'min': 100000, 'max': 190000}");
    record9.set("jobDemandOutlook", "Very High - Growing 35% through 2032");
    record9.set("topPayingStates", [{"state": "California", "salary": 160000}, {"state": "New York", "salary": 150000}, {"state": "Washington", "salary": 145000}, {"state": "Massachusetts", "salary": 143000}, {"state": "Colorado", "salary": 140000}]);
    record9.set("roadmap", "{'phase1': 'Learn networking and systems', 'phase2': 'Learn security fundamentals', 'phase3': 'Get certifications', 'phase4': 'Gain hands-on experience', 'phase5': 'Specialize'}");
    record9.set("skillsRequired", ["Networking", "System Administration", "Cryptography", "Vulnerability Assessment", "Incident Response", "Compliance", "Coding"]);
    record9.set("salaryInsights", "{'entry': 105000, 'mid': 135000, 'senior': 175000, 'lead': 230000}");
    record9.set("relatedCareers", ["systems-administrator", "network-engineer", "devops-engineer"]);
    record9.set("entrySalary", 105000);
    record9.set("midSalary", 135000);
    record9.set("seniorSalary", 175000);
    record9.set("jobDemand", "High");
    record9.set("topStates", [{"state": "California", "count": 5500}, {"state": "New York", "count": 3800}, {"state": "Washington", "count": 3200}, {"state": "Texas", "count": 2800}, {"state": "Massachusetts", "count": 2500}]);
    record9.set("technicalSkills", ["Networking", "Linux", "Python", "Cryptography", "Penetration Testing", "SIEM Tools"]);
    record9.set("softSkills", ["Attention to Detail", "Problem Solving", "Communication", "Analytical Thinking", "Vigilance"]);
    record9.set("tools", ["Wireshark", "Metasploit", "Burp Suite", "Splunk", "Snort", "OpenSSL", "Nessus"]);
    record9.set("faqs", [{"question": "What certifications matter?", "answer": "CISSP, CEH, and Security+ are highly valued."}, {"question": "Do I need a security background?", "answer": "No, but networking and systems knowledge is essential."}]);
  try {
    app.save(record9);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record10 = new Record(collection);
    record10.set("name", "Machine Learning Engineer");
    record10.set("slug", "machine-learning-engineer");
    record10.set("description", "Build and deploy machine learning models and systems");
    record10.set("overview", "ML engineers develop machine learning models and production systems. They work with data scientists, engineers, and product teams to deploy AI solutions at scale.");
    record10.set("averageSalary", 140000);
    record10.set("salaryRange", "{'min': 105000, 'max': 200000}");
    record10.set("jobDemandOutlook", "Very High - Growing 36% through 2032");
    record10.set("topPayingStates", [{"state": "California", "salary": 170000}, {"state": "New York", "salary": 160000}, {"state": "Washington", "salary": 155000}, {"state": "Massachusetts", "salary": 153000}, {"state": "Colorado", "salary": 150000}]);
    record10.set("roadmap", "{'phase1': 'Learn Python and math', 'phase2': 'Learn ML fundamentals', 'phase3': 'Build projects', 'phase4': 'Learn production systems', 'phase5': 'Specialize'}");
    record10.set("skillsRequired", ["Python", "Machine Learning", "Deep Learning", "Data Processing", "Statistics", "System Design", "Cloud Platforms"]);
    record10.set("salaryInsights", "{'entry': 115000, 'mid': 140000, 'senior': 185000, 'lead': 250000}");
    record10.set("relatedCareers", ["data-scientist", "ai-engineer", "backend-engineer"]);
    record10.set("entrySalary", 115000);
    record10.set("midSalary", 140000);
    record10.set("seniorSalary", 185000);
    record10.set("jobDemand", "High");
    record10.set("topStates", [{"state": "California", "count": 8000}, {"state": "New York", "count": 5500}, {"state": "Washington", "count": 4500}, {"state": "Texas", "count": 4000}, {"state": "Massachusetts", "count": 3500}]);
    record10.set("technicalSkills", ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "SQL", "Spark", "Kubernetes"]);
    record10.set("softSkills", ["Problem Solving", "Communication", "Analytical Thinking", "Collaboration", "Creativity"]);
    record10.set("tools", ["Python", "TensorFlow", "PyTorch", "Jupyter", "Git", "Docker", "Kubernetes"]);
    record10.set("faqs", [{"question": "Do I need a PhD?", "answer": "No, but strong math and programming skills are essential."}, {"question": "What's the difference between ML Engineer and Data Scientist?", "answer": "ML Engineers focus on production systems; Data Scientists focus on analysis and modeling."}]);
  try {
    app.save(record10);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record11 = new Record(collection);
    record11.set("name", "Database Administrator");
    record11.set("slug", "database-administrator");
    record11.set("description", "Manage and optimize databases for performance and reliability");
    record11.set("overview", "Database administrators manage database systems, ensuring performance, security, and availability. They handle backups, recovery, optimization, and capacity planning.");
    record11.set("averageSalary", 105000);
    record11.set("salaryRange", "{'min': 80000, 'max': 150000}");
    record11.set("jobDemandOutlook", "Moderate - Growing 8% through 2032");
    record11.set("topPayingStates", [{"state": "California", "salary": 130000}, {"state": "New York", "salary": 120000}, {"state": "Washington", "salary": 115000}, {"state": "Massachusetts", "salary": 113000}, {"state": "Colorado", "salary": 110000}]);
    record11.set("roadmap", "{'phase1': 'Learn SQL fundamentals', 'phase2': 'Learn database systems', 'phase3': 'Learn administration', 'phase4': 'Get certified', 'phase5': 'Specialize'}");
    record11.set("skillsRequired", ["SQL", "Database Systems", "Performance Tuning", "Backup and Recovery", "Security", "Scripting", "Monitoring"]);
    record11.set("salaryInsights", "{'entry': 85000, 'mid': 105000, 'senior': 140000, 'lead': 180000}");
    record11.set("relatedCareers", ["systems-administrator", "backend-engineer", "devops-engineer"]);
    record11.set("entrySalary", 85000);
    record11.set("midSalary", 105000);
    record11.set("seniorSalary", 140000);
    record11.set("jobDemand", "Medium");
    record11.set("topStates", [{"state": "California", "count": 3500}, {"state": "New York", "count": 2500}, {"state": "Texas", "count": 2000}, {"state": "Washington", "count": 1800}, {"state": "Massachusetts", "count": 1600}]);
    record11.set("technicalSkills", ["SQL", "PostgreSQL", "MySQL", "Oracle", "MongoDB", "Backup/Recovery", "Performance Tuning"]);
    record11.set("softSkills", ["Attention to Detail", "Problem Solving", "Communication", "Reliability", "Analytical Thinking"]);
    record11.set("tools", ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "Backup tools", "Monitoring tools", "SQL Server"]);
    record11.set("faqs", [{"question": "What databases should I learn?", "answer": "PostgreSQL and MySQL are good starting points; Oracle is valuable for enterprises."}, {"question": "Is DBA a dying role?", "answer": "No, but it's evolving with cloud databases and automation."}]);
  try {
    app.save(record11);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record12 = new Record(collection);
    record12.set("name", "Systems Administrator");
    record12.set("slug", "systems-administrator");
    record12.set("description", "Manage and maintain computer systems and networks");
    record12.set("overview", "Systems administrators manage IT infrastructure, including servers, networks, and user accounts. They ensure system availability, security, and performance.");
    record12.set("averageSalary", 85000);
    record12.set("salaryRange", "{'min': 65000, 'max': 125000}");
    record12.set("jobDemandOutlook", "Moderate - Growing 5% through 2032");
    record12.set("topPayingStates", [{"state": "California", "salary": 110000}, {"state": "New York", "salary": 100000}, {"state": "Washington", "salary": 95000}, {"state": "Massachusetts", "salary": 93000}, {"state": "Colorado", "salary": 90000}]);
    record12.set("roadmap", "{'phase1': 'Learn networking basics', 'phase2': 'Learn Linux/Windows', 'phase3': 'Learn administration', 'phase4': 'Get certified', 'phase5': 'Specialize'}");
    record12.set("skillsRequired", ["Linux/Windows", "Networking", "System Administration", "Scripting", "Security", "Troubleshooting", "Monitoring"]);
    record12.set("salaryInsights", "{'entry': 70000, 'mid': 85000, 'senior': 115000, 'lead': 150000}");
    record12.set("relatedCareers", ["network-engineer", "devops-engineer", "security-engineer"]);
    record12.set("entrySalary", 70000);
    record12.set("midSalary", 85000);
    record12.set("seniorSalary", 115000);
    record12.set("jobDemand", "Medium");
    record12.set("topStates", [{"state": "California", "count": 4000}, {"state": "New York", "count": 2800}, {"state": "Texas", "count": 2500}, {"state": "Washington", "count": 2200}, {"state": "Massachusetts", "count": 2000}]);
    record12.set("technicalSkills", ["Linux", "Windows Server", "Networking", "Bash", "PowerShell", "Active Directory"]);
    record12.set("softSkills", ["Problem Solving", "Communication", "Attention to Detail", "Reliability", "Patience"]);
    record12.set("tools", ["Linux", "Windows Server", "Active Directory", "Nagios", "Zabbix", "Ansible", "Puppet"]);
    record12.set("faqs", [{"question": "Should I learn Linux or Windows?", "answer": "Both are valuable; Linux is increasingly important."}, {"question": "Is this role being automated away?", "answer": "Some tasks are, but skilled admins are still in demand."}]);
  try {
    app.save(record12);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record13 = new Record(collection);
    record13.set("name", "Network Engineer");
    record13.set("slug", "network-engineer");
    record13.set("description", "Design and manage computer networks");
    record13.set("overview", "Network engineers design, implement, and maintain computer networks. They work with routers, switches, firewalls, and other networking equipment.");
    record13.set("averageSalary", 95000);
    record13.set("salaryRange", "{'min': 75000, 'max': 140000}");
    record13.set("jobDemandOutlook", "Moderate - Growing 6% through 2032");
    record13.set("topPayingStates", [{"state": "California", "salary": 120000}, {"state": "New York", "salary": 110000}, {"state": "Washington", "salary": 105000}, {"state": "Massachusetts", "salary": 103000}, {"state": "Colorado", "salary": 100000}]);
    record13.set("roadmap", "{'phase1': 'Learn networking fundamentals', 'phase2': 'Learn routing and switching', 'phase3': 'Get certified', 'phase4': 'Gain experience', 'phase5': 'Specialize'}");
    record13.set("skillsRequired", ["Networking", "Routing and Switching", "TCP/IP", "Firewalls", "VPN", "Troubleshooting", "Security"]);
    record13.set("salaryInsights", "{'entry': 80000, 'mid': 95000, 'senior': 130000, 'lead': 170000}");
    record13.set("relatedCareers", ["systems-administrator", "security-engineer", "devops-engineer"]);
    record13.set("entrySalary", 80000);
    record13.set("midSalary", 95000);
    record13.set("seniorSalary", 130000);
    record13.set("jobDemand", "Medium");
    record13.set("topStates", [{"state": "California", "count": 3500}, {"state": "New York", "count": 2500}, {"state": "Texas", "count": 2200}, {"state": "Washington", "count": 2000}, {"state": "Massachusetts", "count": 1800}]);
    record13.set("technicalSkills", ["Cisco", "Routing", "Switching", "TCP/IP", "Firewalls", "VPN", "MPLS"]);
    record13.set("softSkills", ["Problem Solving", "Communication", "Attention to Detail", "Analytical Thinking", "Patience"]);
    record13.set("tools", ["Cisco", "Juniper", "Arista", "Wireshark", "Packet Tracer", "GNS3", "Splunk"]);
    record13.set("faqs", [{"question": "What certifications matter?", "answer": "CCNA and CCNP are industry standards."}, {"question": "Is networking still relevant?", "answer": "Yes, especially with cloud and SDN technologies."}]);
  try {
    app.save(record13);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record14 = new Record(collection);
    record14.set("name", "Solutions Architect");
    record14.set("slug", "solutions-architect");
    record14.set("description", "Design technical solutions for business problems");
    record14.set("overview", "Solutions architects design comprehensive technical solutions that address business requirements. They work with clients, engineers, and stakeholders to deliver effective solutions.");
    record14.set("averageSalary", 140000);
    record14.set("salaryRange", "{'min': 110000, 'max': 190000}");
    record14.set("jobDemandOutlook", "High - Growing 15% through 2032");
    record14.set("topPayingStates", [{"state": "California", "salary": 165000}, {"state": "New York", "salary": 155000}, {"state": "Washington", "salary": 150000}, {"state": "Massachusetts", "salary": 148000}, {"state": "Colorado", "salary": 145000}]);
    record14.set("roadmap", "{'phase1': 'Gain technical expertise', 'phase2': 'Learn business acumen', 'phase3': 'Develop communication skills', 'phase4': 'Build portfolio', 'phase5': 'Specialize'}");
    record14.set("skillsRequired", ["Technical Expertise", "Business Acumen", "Communication", "Problem Solving", "Leadership", "Cloud Platforms", "System Design"]);
    record14.set("salaryInsights", "{'entry': 120000, 'mid': 140000, 'senior': 180000, 'lead': 240000}");
    record14.set("relatedCareers", ["cloud-architect", "product-manager", "technical-lead"]);
    record14.set("entrySalary", 120000);
    record14.set("midSalary", 140000);
    record14.set("seniorSalary", 180000);
    record14.set("jobDemand", "High");
    record14.set("topStates", [{"state": "California", "count": 5000}, {"state": "New York", "count": 3500}, {"state": "Washington", "count": 3000}, {"state": "Texas", "count": 2500}, {"state": "Massachusetts", "count": 2300}]);
    record14.set("technicalSkills", ["Cloud Platforms", "System Design", "Networking", "Security", "Databases", "DevOps"]);
    record14.set("softSkills", ["Communication", "Leadership", "Strategic Thinking", "Problem Solving", "Negotiation"]);
    record14.set("tools", ["AWS", "Azure", "Visio", "Lucidchart", "JIRA", "Confluence", "Miro"]);
    record14.set("faqs", [{"question": "What's the path to Solutions Architect?", "answer": "Usually from engineering or cloud architect roles."}, {"question": "Do I need certifications?", "answer": "Cloud certifications like AWS Solutions Architect are valuable."}]);
  try {
    app.save(record14);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record15 = new Record(collection);
    record15.set("name", "Business Analyst");
    record15.set("slug", "business-analyst");
    record15.set("description", "Analyze business needs and recommend solutions");
    record15.set("overview", "Business analysts bridge business and technology, analyzing requirements and recommending solutions. They work with stakeholders to understand needs and drive improvements.");
    record15.set("averageSalary", 80000);
    record15.set("salaryRange", "{'min': 60000, 'max': 120000}");
    record15.set("jobDemandOutlook", "High - Growing 14% through 2032");
    record15.set("topPayingStates", [{"state": "California", "salary": 105000}, {"state": "New York", "salary": 95000}, {"state": "Washington", "salary": 90000}, {"state": "Massachusetts", "salary": 88000}, {"state": "Colorado", "salary": 85000}]);
    record15.set("roadmap", "{'phase1': 'Learn business fundamentals', 'phase2': 'Learn analysis techniques', 'phase3': 'Learn tools', 'phase4': 'Build portfolio', 'phase5': 'Specialize'}");
    record15.set("skillsRequired", ["Business Analysis", "Requirements Gathering", "Communication", "Problem Solving", "Data Analysis", "Documentation", "Stakeholder Management"]);
    record15.set("salaryInsights", "{'entry': 65000, 'mid': 80000, 'senior': 110000, 'lead': 150000}");
    record15.set("relatedCareers", ["product-manager", "data-analyst", "project-manager"]);
    record15.set("entrySalary", 65000);
    record15.set("midSalary", 80000);
    record15.set("seniorSalary", 110000);
    record15.set("jobDemand", "High");
    record15.set("topStates", [{"state": "California", "count": 6000}, {"state": "New York", "count": 4500}, {"state": "Texas", "count": 4000}, {"state": "Washington", "count": 3500}, {"state": "Massachusetts", "count": 3200}]);
    record15.set("technicalSkills", ["SQL", "Excel", "Data Analysis", "Requirements Gathering", "Process Modeling"]);
    record15.set("softSkills", ["Communication", "Analytical Thinking", "Problem Solving", "Stakeholder Management", "Documentation"]);
    record15.set("tools", ["Excel", "SQL", "Visio", "JIRA", "Confluence", "Lucidchart", "Tableau"]);
    record15.set("faqs", [{"question": "Do I need an MBA?", "answer": "No, but business education or experience helps."}, {"question": "What's the difference between BA and PM?", "answer": "BAs focus on requirements; PMs focus on strategy and roadmap."}]);
  try {
    app.save(record15);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record16 = new Record(collection);
    record16.set("name", "Project Manager");
    record16.set("slug", "project-manager");
    record16.set("description", "Plan and oversee project execution");
    record16.set("overview", "Project managers plan, execute, and oversee projects to deliver on time and within budget. They manage teams, risks, and stakeholder expectations.");
    record16.set("averageSalary", 95000);
    record16.set("salaryRange", "{'min': 70000, 'max': 140000}");
    record16.set("jobDemandOutlook", "Moderate - Growing 6% through 2032");
    record16.set("topPayingStates", [{"state": "California", "salary": 120000}, {"state": "New York", "salary": 110000}, {"state": "Washington", "salary": 105000}, {"state": "Massachusetts", "salary": 103000}, {"state": "Colorado", "salary": 100000}]);
    record16.set("roadmap", "{'phase1': 'Learn PM fundamentals', 'phase2': 'Get PMP or Agile certification', 'phase3': 'Manage projects', 'phase4': 'Build portfolio', 'phase5': 'Specialize'}");
    record16.set("skillsRequired", ["Project Management", "Leadership", "Communication", "Risk Management", "Budget Management", "Stakeholder Management", "Planning"]);
    record16.set("salaryInsights", "{'entry': 75000, 'mid': 95000, 'senior': 130000, 'lead': 170000}");
    record16.set("relatedCareers", ["scrum-master", "business-analyst", "product-manager"]);
    record16.set("entrySalary", 75000);
    record16.set("midSalary", 95000);
    record16.set("seniorSalary", 130000);
    record16.set("jobDemand", "Medium");
    record16.set("topStates", [{"state": "California", "count": 5500}, {"state": "New York", "count": 4000}, {"state": "Texas", "count": 3500}, {"state": "Washington", "count": 3000}, {"state": "Massachusetts", "count": 2800}]);
    record16.set("technicalSkills", ["Project Management Tools", "Excel", "Risk Management", "Budget Planning", "Scheduling"]);
    record16.set("softSkills", ["Leadership", "Communication", "Problem Solving", "Negotiation", "Stakeholder Management"]);
    record16.set("tools", ["JIRA", "Asana", "Monday.com", "Microsoft Project", "Confluence", "Slack", "Excel"]);
    record16.set("faqs", [{"question": "What certifications matter?", "answer": "PMP and Agile certifications are highly valued."}, {"question": "Is PM a good career?", "answer": "Yes, with good growth potential and diverse opportunities."}]);
  try {
    app.save(record16);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record17 = new Record(collection);
    record17.set("name", "Scrum Master");
    record17.set("slug", "scrum-master");
    record17.set("description", "Facilitate agile development and remove team impediments");
    record17.set("overview", "Scrum masters facilitate agile development, removing impediments and helping teams deliver value. They coach teams on agile practices and continuous improvement.");
    record17.set("averageSalary", 90000);
    record17.set("salaryRange", "{'min': 70000, 'max': 130000}");
    record17.set("jobDemandOutlook", "High - Growing 12% through 2032");
    record17.set("topPayingStates", [{"state": "California", "salary": 115000}, {"state": "New York", "salary": 105000}, {"state": "Washington", "salary": 100000}, {"state": "Massachusetts", "salary": 98000}, {"state": "Colorado", "salary": 95000}]);
    record17.set("roadmap", "{'phase1': 'Learn Agile fundamentals', 'phase2': 'Get Scrum Master certification', 'phase3': 'Facilitate teams', 'phase4': 'Build experience', 'phase5': 'Advance'}");
    record17.set("skillsRequired", ["Agile Methodology", "Scrum Framework", "Facilitation", "Communication", "Problem Solving", "Coaching", "Leadership"]);
    record17.set("salaryInsights", "{'entry': 75000, 'mid': 90000, 'senior': 120000, 'lead': 160000}");
    record17.set("relatedCareers", ["project-manager", "agile-coach", "product-owner"]);
    record17.set("entrySalary", 75000);
    record17.set("midSalary", 90000);
    record17.set("seniorSalary", 120000);
    record17.set("jobDemand", "High");
    record17.set("topStates", [{"state": "California", "count": 4500}, {"state": "New York", "count": 3200}, {"state": "Texas", "count": 2800}, {"state": "Washington", "count": 2500}, {"state": "Massachusetts", "count": 2300}]);
    record17.set("technicalSkills", ["Agile", "Scrum", "Kanban", "JIRA", "Confluence", "Facilitation Tools"]);
    record17.set("softSkills", ["Communication", "Coaching", "Problem Solving", "Empathy", "Leadership"]);
    record17.set("tools", ["JIRA", "Confluence", "Miro", "Slack", "Azure DevOps", "Monday.com", "Asana"]);
    record17.set("faqs", [{"question": "What certification do I need?", "answer": "CSM (Certified Scrum Master) is the most recognized."}, {"question": "Do I need development experience?", "answer": "Not required, but it helps understand team challenges."}]);
  try {
    app.save(record17);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record18 = new Record(collection);
    record18.set("name", "Technical Writer");
    record18.set("slug", "technical-writer");
    record18.set("description", "Create technical documentation and user guides");
    record18.set("overview", "Technical writers create clear, concise documentation for software, APIs, and systems. They translate complex technical information into user-friendly guides.");
    record18.set("averageSalary", 75000);
    record18.set("salaryRange", "{'min': 55000, 'max': 110000}");
    record18.set("jobDemandOutlook", "Moderate - Growing 8% through 2032");
    record18.set("topPayingStates", [{"state": "California", "salary": 95000}, {"state": "New York", "salary": 85000}, {"state": "Washington", "salary": 80000}, {"state": "Massachusetts", "salary": 78000}, {"state": "Colorado", "salary": 75000}]);
    record18.set("roadmap", "{'phase1': 'Learn technical writing basics', 'phase2': 'Learn tools', 'phase3': 'Build portfolio', 'phase4': 'Gain experience', 'phase5': 'Specialize'}");
    record18.set("skillsRequired", ["Technical Writing", "Documentation Tools", "Communication", "Research", "Organization", "Attention to Detail", "Technical Knowledge"]);
    record18.set("salaryInsights", "{'entry': 60000, 'mid': 75000, 'senior': 105000, 'lead': 140000}");
    record18.set("relatedCareers", ["content-strategist", "ux-writer", "product-manager"]);
    record18.set("entrySalary", 60000);
    record18.set("midSalary", 75000);
    record18.set("seniorSalary", 105000);
    record18.set("jobDemand", "Medium");
    record18.set("topStates", [{"state": "California", "count": 2500}, {"state": "New York", "count": 1800}, {"state": "Washington", "count": 1500}, {"state": "Texas", "count": 1300}, {"state": "Massachusetts", "count": 1200}]);
    record18.set("technicalSkills", ["Markdown", "XML", "DITA", "Git", "API Documentation", "Confluence", "Sphinx"]);
    record18.set("softSkills", ["Communication", "Attention to Detail", "Organization", "Research", "Empathy"]);
    record18.set("tools", ["Confluence", "Markdown", "Git", "Sphinx", "MkDocs", "Swagger", "Postman"]);
    record18.set("faqs", [{"question": "Do I need a writing degree?", "answer": "No, but strong writing skills and technical knowledge are essential."}, {"question": "What tools should I learn?", "answer": "Markdown, Git, and API documentation tools are most important."}]);
  try {
    app.save(record18);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record19 = new Record(collection);
    record19.set("name", "QA Engineer");
    record19.set("slug", "qa-engineer");
    record19.set("description", "Test software to ensure quality and reliability");
    record19.set("overview", "QA engineers test software to identify bugs and ensure quality. They develop test strategies, automate tests, and work with developers to fix issues.");
    record19.set("averageSalary", 85000);
    record19.set("salaryRange", "{'min': 65000, 'max': 125000}");
    record19.set("jobDemandOutlook", "Moderate - Growing 7% through 2032");
    record19.set("topPayingStates", [{"state": "California", "salary": 110000}, {"state": "New York", "salary": 100000}, {"state": "Washington", "salary": 95000}, {"state": "Massachusetts", "salary": 93000}, {"state": "Colorado", "salary": 90000}]);
    record19.set("roadmap", "{'phase1': 'Learn testing fundamentals', 'phase2': 'Learn automation tools', 'phase3': 'Build test suites', 'phase4': 'Gain experience', 'phase5': 'Specialize'}");
    record19.set("skillsRequired", ["Testing", "Test Automation", "Problem Solving", "Attention to Detail", "Communication", "SQL", "Scripting"]);
    record19.set("salaryInsights", "{'entry': 70000, 'mid': 85000, 'senior': 115000, 'lead': 150000}");
    record19.set("relatedCareers", ["software-engineer", "devops-engineer", "automation-engineer"]);
    record19.set("entrySalary", 70000);
    record19.set("midSalary", 85000);
    record19.set("seniorSalary", 115000);
    record19.set("jobDemand", "Medium");
    record19.set("topStates", [{"state": "California", "count": 4000}, {"state": "New York", "count": 2800}, {"state": "Texas", "count": 2500}, {"state": "Washington", "count": 2200}, {"state": "Massachusetts", "count": 2000}]);
    record19.set("technicalSkills", ["Selenium", "Python", "SQL", "JIRA", "TestNG", "Cucumber", "API Testing"]);
    record19.set("softSkills", ["Attention to Detail", "Problem Solving", "Communication", "Analytical Thinking", "Patience"]);
    record19.set("tools", ["Selenium", "JIRA", "TestNG", "Cucumber", "Postman", "JMeter", "Appium"]);
    record19.set("faqs", [{"question": "Do I need to code?", "answer": "Not required for manual testing, but automation requires coding skills."}, {"question": "Is QA a good career?", "answer": "Yes, especially with automation skills in high demand."}]);
  try {
    app.save(record19);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record20 = new Record(collection);
    record20.set("name", "Mobile Developer");
    record20.set("slug", "mobile-developer");
    record20.set("description", "Build mobile applications for iOS and Android");
    record20.set("overview", "Mobile developers create applications for smartphones and tablets. They work with native platforms (iOS/Android) or cross-platform frameworks.");
    record20.set("averageSalary", 110000);
    record20.set("salaryRange", "{'min': 80000, 'max': 160000}");
    record20.set("jobDemandOutlook", "High - Growing 18% through 2032");
    record20.set("topPayingStates", [{"state": "California", "salary": 135000}, {"state": "New York", "salary": 125000}, {"state": "Washington", "salary": 120000}, {"state": "Massachusetts", "salary": 118000}, {"state": "Colorado", "salary": 115000}]);
    record20.set("roadmap", "{'phase1': 'Learn mobile fundamentals', 'phase2': 'Choose platform', 'phase3': 'Build apps', 'phase4': 'Publish apps', 'phase5': 'Specialize'}");
    record20.set("skillsRequired", ["Mobile Development", "Platform Knowledge", "UI/UX", "APIs", "Databases", "Testing", "Performance Optimization"]);
    record20.set("salaryInsights", "{'entry': 85000, 'mid': 110000, 'senior': 150000, 'lead': 195000}");
    record20.set("relatedCareers", ["frontend-engineer", "software-engineer", "ux-designer"]);
    record20.set("entrySalary", 85000);
    record20.set("midSalary", 110000);
    record20.set("seniorSalary", 150000);
    record20.set("jobDemand", "High");
    record20.set("topStates", [{"state": "California", "count": 7000}, {"state": "New York", "count": 5000}, {"state": "Washington", "count": 4000}, {"state": "Texas", "count": 3500}, {"state": "Massachusetts", "count": 3200}]);
    record20.set("technicalSkills", ["Swift", "Kotlin", "React Native", "Flutter", "Objective-C", "Java", "APIs"]);
    record20.set("softSkills", ["Problem Solving", "Communication", "Creativity", "Attention to Detail", "Collaboration"]);
    record20.set("tools", ["Xcode", "Android Studio", "Git", "Firebase", "Postman", "TestFlight", "Google Play"]);
    record20.set("faqs", [{"question": "Should I learn iOS or Android?", "answer": "Both are valuable; choose based on your interests."}, {"question": "Is cross-platform development worth it?", "answer": "Yes, React Native and Flutter are increasingly popular."}]);
  try {
    app.save(record20);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record21 = new Record(collection);
    record21.set("name", "Game Developer");
    record21.set("slug", "game-developer");
    record21.set("description", "Create video games and interactive experiences");
    record21.set("overview", "Game developers create video games using game engines and programming languages. They work on gameplay, graphics, physics, and user experience.");
    record21.set("averageSalary", 95000);
    record21.set("salaryRange", "{'min': 70000, 'max': 150000}");
    record21.set("jobDemandOutlook", "Moderate - Growing 9% through 2032");
    record21.set("topPayingStates", [{"state": "California", "salary": 120000}, {"state": "New York", "salary": 110000}, {"state": "Washington", "salary": 105000}, {"state": "Texas", "salary": 100000}, {"state": "Massachusetts", "salary": 98000}]);
    record21.set("roadmap", "{'phase1': 'Learn game development basics', 'phase2': 'Choose engine', 'phase3': 'Build games', 'phase4': 'Publish games', 'phase5': 'Specialize'}");
    record21.set("skillsRequired", ["Game Development", "Game Engines", "Programming", "Graphics", "Physics", "Audio", "Optimization"]);
    record21.set("salaryInsights", "{'entry': 75000, 'mid': 95000, 'senior': 135000, 'lead': 180000}");
    record21.set("relatedCareers", ["software-engineer", "graphics-programmer", "game-designer"]);
    record21.set("entrySalary", 75000);
    record21.set("midSalary", 95000);
    record21.set("seniorSalary", 135000);
    record21.set("jobDemand", "Medium");
    record21.set("topStates", [{"state": "California", "count": 5000}, {"state": "Washington", "count": 2500}, {"state": "Texas", "count": 2000}, {"state": "New York", "count": 1800}, {"state": "Massachusetts", "count": 1500}]);
    record21.set("technicalSkills", ["C#", "C++", "Unity", "Unreal Engine", "Graphics", "Physics", "Networking"]);
    record21.set("softSkills", ["Creativity", "Problem Solving", "Collaboration", "Attention to Detail", "Passion"]);
    record21.set("tools", ["Unity", "Unreal Engine", "Godot", "Git", "Visual Studio", "Blender", "FMOD"]);
    record21.set("faqs", [{"question": "What engine should I learn?", "answer": "Unity is most popular for indie developers; Unreal for AAA games."}, {"question": "Can I make money as an indie developer?", "answer": "Yes, but it requires marketing and persistence."}]);
  try {
    app.save(record21);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record22 = new Record(collection);
    record22.set("name", "Blockchain Developer");
    record22.set("slug", "blockchain-developer");
    record22.set("description", "Build blockchain applications and smart contracts");
    record22.set("overview", "Blockchain developers create decentralized applications and smart contracts. They work with blockchain platforms like Ethereum and develop cryptocurrency solutions.");
    record22.set("averageSalary", 125000);
    record22.set("salaryRange", "{'min': 90000, 'max': 180000}");
    record22.set("jobDemandOutlook", "High - Growing 32% through 2032");
    record22.set("topPayingStates", [{"state": "California", "salary": 150000}, {"state": "New York", "salary": 140000}, {"state": "Washington", "salary": 135000}, {"state": "Massachusetts", "salary": 133000}, {"state": "Colorado", "salary": 130000}]);
    record22.set("roadmap", "{'phase1': 'Learn blockchain fundamentals', 'phase2': 'Learn smart contracts', 'phase3': 'Build dApps', 'phase4': 'Understand DeFi', 'phase5': 'Specialize'}");
    record22.set("skillsRequired", ["Blockchain", "Smart Contracts", "Solidity", "Cryptography", "Web3", "DeFi", "Security"]);
    record22.set("salaryInsights", "{'entry': 100000, 'mid': 125000, 'senior': 170000, 'lead': 220000}");
    record22.set("relatedCareers", ["software-engineer", "security-engineer", "backend-engineer"]);
    record22.set("entrySalary", 100000);
    record22.set("midSalary", 125000);
    record22.set("seniorSalary", 170000);
    record22.set("jobDemand", "High");
    record22.set("topStates", [{"state": "California", "count": 3500}, {"state": "New York", "count": 2500}, {"state": "Washington", "count": 2000}, {"state": "Texas", "count": 1800}, {"state": "Massachusetts", "count": 1600}]);
    record22.set("technicalSkills", ["Solidity", "Ethereum", "Web3.js", "Hardhat", "Truffle", "Python", "JavaScript"]);
    record22.set("softSkills", ["Problem Solving", "Analytical Thinking", "Communication", "Attention to Detail", "Curiosity"]);
    record22.set("tools", ["Solidity", "Hardhat", "Truffle", "Remix", "MetaMask", "Etherscan", "Web3.js"]);
    record22.set("faqs", [{"question": "Do I need to understand crypto?", "answer": "Yes, understanding blockchain and crypto is essential."}, {"question": "Is blockchain development stable?", "answer": "It's growing but volatile; diversify your skills."}]);
  try {
    app.save(record22);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record23 = new Record(collection);
    record23.set("name", "AI Engineer");
    record23.set("slug", "ai-engineer");
    record23.set("description", "Build artificial intelligence systems and applications");
    record23.set("overview", "AI engineers develop artificial intelligence systems, from machine learning models to large language models. They work on cutting-edge AI technologies.");
    record23.set("averageSalary", 145000);
    record23.set("salaryRange", "{'min': 110000, 'max': 210000}");
    record23.set("jobDemandOutlook", "Very High - Growing 38% through 2032");
    record23.set("topPayingStates", [{"state": "California", "salary": 175000}, {"state": "New York", "salary": 165000}, {"state": "Washington", "salary": 160000}, {"state": "Massachusetts", "salary": 158000}, {"state": "Colorado", "salary": 155000}]);
    record23.set("roadmap", "{'phase1': 'Learn AI fundamentals', 'phase2': 'Learn deep learning', 'phase3': 'Learn LLMs', 'phase4': 'Build projects', 'phase5': 'Specialize'}");
    record23.set("skillsRequired", ["AI/ML", "Deep Learning", "Python", "TensorFlow/PyTorch", "NLP", "Computer Vision", "System Design"]);
    record23.set("salaryInsights", "{'entry': 120000, 'mid': 145000, 'senior': 195000, 'lead': 270000}");
    record23.set("relatedCareers", ["machine-learning-engineer", "data-scientist", "backend-engineer"]);
    record23.set("entrySalary", 120000);
    record23.set("midSalary", 145000);
    record23.set("seniorSalary", 195000);
    record23.set("jobDemand", "High");
    record23.set("topStates", [{"state": "California", "count": 6000}, {"state": "New York", "count": 4000}, {"state": "Washington", "count": 3500}, {"state": "Texas", "count": 3000}, {"state": "Massachusetts", "count": 2800}]);
    record23.set("technicalSkills", ["Python", "TensorFlow", "PyTorch", "Transformers", "NLP", "Computer Vision", "Kubernetes"]);
    record23.set("softSkills", ["Problem Solving", "Analytical Thinking", "Communication", "Creativity", "Collaboration"]);
    record23.set("tools", ["Python", "TensorFlow", "PyTorch", "Hugging Face", "Jupyter", "Git", "Docker"]);
    record23.set("faqs", [{"question": "Do I need a PhD?", "answer": "No, but strong math and programming skills are essential."}, {"question": "What's the difference between AI and ML Engineer?", "answer": "AI Engineers focus on broader AI systems; ML Engineers focus on models."}]);
  try {
    app.save(record23);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record24 = new Record(collection);
    record24.set("name", "Data Scientist");
    record24.set("slug", "data-scientist");
    record24.set("description", "Analyze data and build predictive models");
    record24.set("overview", "Data scientists analyze complex data to extract insights and build predictive models. They combine statistics, programming, and domain knowledge.");
    record24.set("averageSalary", 120000);
    record24.set("salaryRange", "{'min': 90000, 'max': 170000}");
    record24.set("jobDemandOutlook", "Very High - Growing 36% through 2032");
    record24.set("topPayingStates", [{"state": "California", "salary": 145000}, {"state": "New York", "salary": 135000}, {"state": "Washington", "salary": 130000}, {"state": "Massachusetts", "salary": 128000}, {"state": "Colorado", "salary": 125000}]);
    record24.set("roadmap", "{'phase1': 'Learn statistics and Python', 'phase2': 'Learn ML', 'phase3': 'Build projects', 'phase4': 'Learn communication', 'phase5': 'Specialize'}");
    record24.set("skillsRequired", ["Statistics", "Python", "Machine Learning", "Data Analysis", "SQL", "Communication", "Domain Knowledge"]);
    record24.set("salaryInsights", "{'entry': 100000, 'mid': 120000, 'senior': 160000, 'lead': 210000}");
    record24.set("relatedCareers", ["machine-learning-engineer", "data-analyst", "ai-engineer"]);
    record24.set("entrySalary", 100000);
    record24.set("midSalary", 120000);
    record24.set("seniorSalary", 160000);
    record24.set("jobDemand", "High");
    record24.set("topStates", [{"state": "California", "count": 7000}, {"state": "New York", "count": 5000}, {"state": "Washington", "count": 4000}, {"state": "Texas", "count": 3500}, {"state": "Massachusetts", "count": 3200}]);
    record24.set("technicalSkills", ["Python", "R", "SQL", "Scikit-learn", "TensorFlow", "Pandas", "Matplotlib"]);
    record24.set("softSkills", ["Communication", "Problem Solving", "Analytical Thinking", "Storytelling", "Collaboration"]);
    record24.set("tools", ["Python", "R", "Jupyter", "SQL", "Tableau", "Git", "Spark"]);
    record24.set("faqs", [{"question": "Do I need a degree?", "answer": "No, bootcamps and self-study are viable with a strong portfolio."}, {"question": "What's the difference between Data Scientist and Data Analyst?", "answer": "Data Scientists build predictive models; Data Analysts focus on insights."}]);
  try {
    app.save(record24);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record25 = new Record(collection);
    record25.set("name", "Business Intelligence Analyst");
    record25.set("slug", "business-intelligence-analyst");
    record25.set("description", "Create dashboards and reports for business insights");
    record25.set("overview", "BI analysts create dashboards and reports that help organizations understand their data. They work with data warehouses and visualization tools.");
    record25.set("averageSalary", 85000);
    record25.set("salaryRange", "{'min': 65000, 'max': 130000}");
    record25.set("jobDemandOutlook", "High - Growing 18% through 2032");
    record25.set("topPayingStates", [{"state": "California", "salary": 110000}, {"state": "New York", "salary": 100000}, {"state": "Washington", "salary": 95000}, {"state": "Massachusetts", "salary": 93000}, {"state": "Colorado", "salary": 90000}]);
    record25.set("roadmap", "{'phase1': 'Learn SQL and Excel', 'phase2': 'Learn BI tools', 'phase3': 'Build dashboards', 'phase4': 'Gain experience', 'phase5': 'Specialize'}");
    record25.set("skillsRequired", ["SQL", "BI Tools", "Data Visualization", "Excel", "Business Acumen", "Communication", "Problem Solving"]);
    record25.set("salaryInsights", "{'entry': 70000, 'mid': 85000, 'senior': 120000, 'lead': 160000}");
    record25.set("relatedCareers", ["data-analyst", "data-scientist", "business-analyst"]);
    record25.set("entrySalary", 70000);
    record25.set("midSalary", 85000);
    record25.set("seniorSalary", 120000);
    record25.set("jobDemand", "High");
    record25.set("topStates", [{"state": "California", "count": 5000}, {"state": "New York", "count": 3500}, {"state": "Texas", "count": 3000}, {"state": "Washington", "count": 2500}, {"state": "Massachusetts", "count": 2300}]);
    record25.set("technicalSkills", ["SQL", "Tableau", "Power BI", "Excel", "Python", "Data Warehousing"]);
    record25.set("softSkills", ["Communication", "Attention to Detail", "Problem Solving", "Storytelling", "Collaboration"]);
    record25.set("tools", ["Tableau", "Power BI", "SQL", "Excel", "Looker", "Qlik", "Snowflake"]);
    record25.set("faqs", [{"question": "What BI tool should I learn?", "answer": "Tableau and Power BI are most popular."}, {"question": "Do I need to code?", "answer": "SQL is essential; Python is helpful but not required."}]);
  try {
    app.save(record25);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record26 = new Record(collection);
    record26.set("name", "IT Manager");
    record26.set("slug", "it-manager");
    record26.set("description", "Manage IT teams and infrastructure");
    record26.set("overview", "IT managers oversee IT teams and infrastructure, managing budgets, projects, and personnel. They ensure systems run smoothly and support business goals.");
    record26.set("averageSalary", 110000);
    record26.set("salaryRange", "{'min': 85000, 'max': 160000}");
    record26.set("jobDemandOutlook", "Moderate - Growing 5% through 2032");
    record26.set("topPayingStates", [{"state": "California", "salary": 135000}, {"state": "New York", "salary": 125000}, {"state": "Washington", "salary": 120000}, {"state": "Massachusetts", "salary": 118000}, {"state": "Colorado", "salary": 115000}]);
    record26.set("roadmap", "{'phase1': 'Gain IT experience', 'phase2': 'Develop leadership skills', 'phase3': 'Manage projects', 'phase4': 'Lead teams', 'phase5': 'Advance'}");
    record26.set("skillsRequired", ["IT Management", "Leadership", "Communication", "Budget Management", "Project Management", "Technical Knowledge", "Problem Solving"]);
    record26.set("salaryInsights", "{'entry': 90000, 'mid': 110000, 'senior': 150000, 'lead': 200000}");
    record26.set("relatedCareers", ["systems-administrator", "it-director", "project-manager"]);
    record26.set("entrySalary", 90000);
    record26.set("midSalary", 110000);
    record26.set("seniorSalary", 150000);
    record26.set("jobDemand", "Medium");
    record26.set("topStates", [{"state": "California", "count": 4000}, {"state": "New York", "count": 2800}, {"state": "Texas", "count": 2500}, {"state": "Washington", "count": 2200}, {"state": "Massachusetts", "count": 2000}]);
    record26.set("technicalSkills", ["IT Infrastructure", "Project Management", "Budget Planning", "Team Management", "Strategic Planning"]);
    record26.set("softSkills", ["Leadership", "Communication", "Problem Solving", "Decision Making", "Negotiation"]);
    record26.set("tools", ["JIRA", "Confluence", "Excel", "ServiceNow", "Active Directory", "Slack", "Teams"]);
    record26.set("faqs", [{"question": "Do I need an MBA?", "answer": "Not required, but business education helps."}, {"question": "What's the path to IT Manager?", "answer": "Usually from systems administrator or senior technical roles."}]);
  try {
    app.save(record26);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record27 = new Record(collection);
    record27.set("name", "IT Director");
    record27.set("slug", "it-director");
    record27.set("description", "Lead IT strategy and operations");
    record27.set("overview", "IT directors lead IT strategy, operations, and teams. They align IT with business goals and manage large budgets and complex projects.");
    record27.set("averageSalary", 150000);
    record27.set("salaryRange", "{'min': 120000, 'max': 220000}");
    record27.set("jobDemandOutlook", "Moderate - Growing 4% through 2032");
    record27.set("topPayingStates", [{"state": "California", "salary": 180000}, {"state": "New York", "salary": 170000}, {"state": "Washington", "salary": 165000}, {"state": "Massachusetts", "salary": 163000}, {"state": "Colorado", "salary": 160000}]);
    record27.set("roadmap", "{'phase1': 'Gain IT experience', 'phase2': 'Become IT Manager', 'phase3': 'Lead large teams', 'phase4': 'Strategic planning', 'phase5': 'Become CTO'}");
    record27.set("skillsRequired", ["IT Strategy", "Leadership", "Business Acumen", "Budget Management", "Communication", "Vision", "Problem Solving"]);
    record27.set("salaryInsights", "{'entry': 130000, 'mid': 150000, 'senior': 200000, 'lead': 280000}");
    record27.set("relatedCareers", ["it-manager", "cto", "cio"]);
    record27.set("entrySalary", 130000);
    record27.set("midSalary", 150000);
    record27.set("seniorSalary", 200000);
    record27.set("jobDemand", "Medium");
    record27.set("topStates", [{"state": "California", "count": 2500}, {"state": "New York", "count": 1800}, {"state": "Texas", "count": 1500}, {"state": "Washington", "count": 1300}, {"state": "Massachusetts", "count": 1200}]);
    record27.set("technicalSkills", ["IT Strategy", "Leadership", "Budget Planning", "Risk Management", "Vendor Management"]);
    record27.set("softSkills", ["Strategic Thinking", "Leadership", "Communication", "Decision Making", "Vision"]);
    record27.set("tools", ["Strategic Planning Tools", "Excel", "JIRA", "Confluence", "ServiceNow", "Slack", "Teams"]);
    record27.set("faqs", [{"question": "What's the path to IT Director?", "answer": "Usually from IT Manager or senior technical leadership roles."}, {"question": "Do I need an MBA?", "answer": "Helpful but not required; experience matters more."}]);
  try {
    app.save(record27);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record28 = new Record(collection);
    record28.set("name", "Chief Technology Officer");
    record28.set("slug", "chief-technology-officer");
    record28.set("description", "Lead technology strategy and innovation");
    record28.set("overview", "CTOs lead technology strategy, innovation, and digital transformation. They work with executives to align technology with business vision.");
    record28.set("averageSalary", 200000);
    record28.set("salaryRange", "{'min': 160000, 'max': 300000}");
    record28.set("jobDemandOutlook", "High - Growing 8% through 2032");
    record28.set("topPayingStates", [{"state": "California", "salary": 240000}, {"state": "New York", "salary": 220000}, {"state": "Washington", "salary": 210000}, {"state": "Massachusetts", "salary": 208000}, {"state": "Colorado", "salary": 205000}]);
    record28.set("roadmap", "{'phase1': 'Gain technical expertise', 'phase2': 'Lead teams', 'phase3': 'Manage large projects', 'phase4': 'Strategic planning', 'phase5': 'Become CTO'}");
    record28.set("skillsRequired", ["Technology Strategy", "Leadership", "Business Acumen", "Vision", "Communication", "Innovation", "Problem Solving"]);
    record28.set("salaryInsights", "{'entry': 180000, 'mid': 200000, 'senior': 260000, 'lead': 350000}");
    record28.set("relatedCareers", ["it-director", "ceo", "vp-engineering"]);
    record28.set("entrySalary", 180000);
    record28.set("midSalary", 200000);
    record28.set("seniorSalary", 260000);
    record28.set("jobDemand", "High");
    record28.set("topStates", [{"state": "California", "count": 1500}, {"state": "New York", "count": 1000}, {"state": "Washington", "count": 800}, {"state": "Texas", "count": 700}, {"state": "Massachusetts", "count": 650}]);
    record28.set("technicalSkills", ["Technology Strategy", "Leadership", "Innovation", "Digital Transformation", "Risk Management"]);
    record28.set("softSkills", ["Strategic Thinking", "Leadership", "Vision", "Communication", "Decision Making"]);
    record28.set("tools", ["Strategic Planning Tools", "Executive Dashboards", "JIRA", "Confluence", "Slack", "Teams", "Excel"]);
    record28.set("faqs", [{"question": "What's the path to CTO?", "answer": "Usually from VP Engineering, IT Director, or senior technical leadership."}, {"question": "Do I need an MBA?", "answer": "Helpful but not required; experience and vision matter most."}]);
  try {
    app.save(record28);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record29 = new Record(collection);
    record29.set("name", "Consultant");
    record29.set("slug", "consultant");
    record29.set("description", "Advise organizations on technology and business strategy");
    record29.set("overview", "Technology consultants advise organizations on technology strategy, digital transformation, and business improvement. They work with clients to solve complex problems.");
    record29.set("averageSalary", 130000);
    record29.set("salaryRange", "{'min': 100000, 'max': 200000}");
    record29.set("jobDemandOutlook", "High - Growing 12% through 2032");
    record29.set("topPayingStates", [{"state": "California", "salary": 160000}, {"state": "New York", "salary": 150000}, {"state": "Washington", "salary": 145000}, {"state": "Massachusetts", "salary": 143000}, {"state": "Colorado", "salary": 140000}]);
    record29.set("roadmap", "{'phase1': 'Gain expertise', 'phase2': 'Develop consulting skills', 'phase3': 'Build network', 'phase4': 'Lead projects', 'phase5': 'Become partner'}");
    record29.set("skillsRequired", ["Domain Expertise", "Communication", "Problem Solving", "Business Acumen", "Leadership", "Presentation", "Analysis"]);
    record29.set("salaryInsights", "{'entry': 110000, 'mid': 130000, 'senior': 180000, 'lead': 250000}");
    record29.set("relatedCareers", ["solutions-architect", "business-analyst", "product-manager"]);
    record29.set("entrySalary", 110000);
    record29.set("midSalary", 130000);
    record29.set("seniorSalary", 180000);
    record29.set("jobDemand", "High");
    record29.set("topStates", [{"state": "California", "count": 4000}, {"state": "New York", "count": 3000}, {"state": "Washington", "count": 2500}, {"state": "Texas", "count": 2200}, {"state": "Massachusetts", "count": 2000}]);
    record29.set("technicalSkills", ["Domain Expertise", "Analysis", "Problem Solving", "Communication", "Project Management"]);
    record29.set("softSkills", ["Communication", "Problem Solving", "Leadership", "Presentation", "Negotiation"]);
    record29.set("tools", ["PowerPoint", "Excel", "Visio", "JIRA", "Confluence", "Miro", "Lucidchart"]);
    record29.set("faqs", [{"question": "Do I need an MBA?", "answer": "Not required, but business education helps."}, {"question": "What's the best path to consulting?", "answer": "Usually from technical or business roles with strong expertise."}]);
  try {
    app.save(record29);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record30 = new Record(collection);
    record30.set("name", "Cybersecurity Analyst");
    record30.set("slug", "cybersecurity-analyst");
    record30.set("description", "Monitor and protect systems from cyber threats");
    record30.set("overview", "Cybersecurity analysts monitor systems for threats, implement security measures, and respond to incidents. They work to protect organizations from cyber attacks.");
    record30.set("averageSalary", 105000);
    record30.set("salaryRange", "{'min': 80000, 'max': 160000}");
    record30.set("jobDemandOutlook", "Very High - Growing 35% through 2032");
    record30.set("topPayingStates", [{"state": "California", "salary": 130000}, {"state": "New York", "salary": 120000}, {"state": "Washington", "salary": 115000}, {"state": "Massachusetts", "salary": 113000}, {"state": "Colorado", "salary": 110000}]);
    record30.set("roadmap", "{'phase1': 'Learn networking and systems', 'phase2': 'Learn security fundamentals', 'phase3': 'Get certifications', 'phase4': 'Gain experience', 'phase5': 'Specialize'}");
    record30.set("skillsRequired", ["Networking", "System Administration", "Security Tools", "Threat Analysis", "Incident Response", "Compliance", "Communication"]);
    record30.set("salaryInsights", "{'entry': 85000, 'mid': 105000, 'senior': 145000, 'lead': 190000}");
    record30.set("relatedCareers", ["security-engineer", "systems-administrator", "network-engineer"]);
    record30.set("entrySalary", 85000);
    record30.set("midSalary", 105000);
    record30.set("seniorSalary", 145000);
    record30.set("jobDemand", "High");
    record30.set("topStates", [{"state": "California", "count": 4500}, {"state": "New York", "count": 3200}, {"state": "Washington", "count": 2800}, {"state": "Texas", "count": 2500}, {"state": "Massachusetts", "count": 2300}]);
    record30.set("technicalSkills", ["Networking", "Linux", "Windows", "SIEM Tools", "Firewalls", "IDS/IPS", "Threat Analysis"]);
    record30.set("softSkills", ["Attention to Detail", "Problem Solving", "Communication", "Analytical Thinking", "Vigilance"]);
    record30.set("tools", ["Splunk", "Snort", "Suricata", "Wireshark", "Metasploit", "Nessus", "Burp Suite"]);
    record30.set("faqs", [{"question": "What certifications matter?", "answer": "Security+, CEH, and CISSP are highly valued."}, {"question": "Do I need a security background?", "answer": "No, but networking and systems knowledge is essential."}]);
  try {
    app.save(record30);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record31 = new Record(collection);
    record31.set("name", "Cloud Engineer");
    record31.set("slug", "cloud-engineer");
    record31.set("description", "Deploy and manage cloud infrastructure");
    record31.set("overview", "Cloud engineers deploy, manage, and optimize cloud infrastructure. They work with AWS, Azure, or GCP to build scalable, reliable systems.");
    record31.set("averageSalary", 125000);
    record31.set("salaryRange", "{'min': 95000, 'max': 180000}");
    record31.set("jobDemandOutlook", "Very High - Growing 26% through 2032");
    record31.set("topPayingStates", [{"state": "California", "salary": 150000}, {"state": "New York", "salary": 140000}, {"state": "Washington", "salary": 135000}, {"state": "Massachusetts", "salary": 133000}, {"state": "Colorado", "salary": 130000}]);
    record31.set("roadmap", "{'phase1': 'Learn cloud fundamentals', 'phase2': 'Get cloud certification', 'phase3': 'Deploy systems', 'phase4': 'Optimize costs', 'phase5': 'Architect solutions'}");
    record31.set("skillsRequired", ["Cloud Platforms", "Infrastructure as Code", "Networking", "Databases", "DevOps", "Security", "Monitoring"]);
    record31.set("salaryInsights", "{'entry': 100000, 'mid': 125000, 'senior': 165000, 'lead': 210000}");
    record31.set("relatedCareers", ["devops-engineer", "cloud-architect", "systems-administrator"]);
    record31.set("entrySalary", 100000);
    record31.set("midSalary", 125000);
    record31.set("seniorSalary", 165000);
    record31.set("jobDemand", "High");
    record31.set("topStates", [{"state": "California", "count": 7000}, {"state": "New York", "count": 5000}, {"state": "Washington", "count": 4000}, {"state": "Texas", "count": 3500}, {"state": "Massachusetts", "count": 3200}]);
    record31.set("technicalSkills", ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Docker", "Networking"]);
    record31.set("softSkills", ["Problem Solving", "Communication", "Attention to Detail", "Collaboration", "Learning Agility"]);
    record31.set("tools", ["AWS", "Azure", "Terraform", "Kubernetes", "Docker", "CloudFormation", "Ansible"]);
    record31.set("faqs", [{"question": "Which cloud platform should I learn?", "answer": "AWS is most popular, but Azure and GCP are also valuable."}, {"question": "Do I need DevOps experience?", "answer": "Not required, but it helps significantly."}]);
  try {
    app.save(record31);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record32 = new Record(collection);
    record32.set("name", "API Developer");
    record32.set("slug", "api-developer");
    record32.set("description", "Design and build APIs for applications");
    record32.set("overview", "API developers design and build APIs that enable communication between applications. They focus on performance, security, and usability.");
    record32.set("averageSalary", 115000);
    record32.set("salaryRange", "{'min': 85000, 'max': 165000}");
    record32.set("jobDemandOutlook", "High - Growing 20% through 2032");
    record32.set("topPayingStates", [{"state": "California", "salary": 140000}, {"state": "New York", "salary": 130000}, {"state": "Washington", "salary": 125000}, {"state": "Massachusetts", "salary": 123000}, {"state": "Colorado", "salary": 120000}]);
    record32.set("roadmap", "{'phase1': 'Learn REST fundamentals', 'phase2': 'Learn API design', 'phase3': 'Build APIs', 'phase4': 'Learn GraphQL', 'phase5': 'Specialize'}");
    record32.set("skillsRequired", ["REST APIs", "API Design", "Backend Development", "Databases", "Security", "Documentation", "Testing"]);
    record32.set("salaryInsights", "{'entry': 90000, 'mid': 115000, 'senior': 155000, 'lead': 200000}");
    record32.set("relatedCareers", ["backend-engineer", "software-engineer", "full-stack-engineer"]);
    record32.set("entrySalary", 90000);
    record32.set("midSalary", 115000);
    record32.set("seniorSalary", 155000);
    record32.set("jobDemand", "High");
    record32.set("topStates", [{"state": "California", "count": 6000}, {"state": "New York", "count": 4500}, {"state": "Washington", "count": 3500}, {"state": "Texas", "count": 3000}, {"state": "Massachusetts", "count": 2800}]);
    record32.set("technicalSkills", ["REST", "GraphQL", "Node.js", "Python", "SQL", "MongoDB", "Postman"]);
    record32.set("softSkills", ["Problem Solving", "Communication", "Attention to Detail", "Collaboration", "Documentation"]);
    record32.set("tools", ["Postman", "Swagger", "Git", "Docker", "PostgreSQL", "MongoDB", "Insomnia"]);
    record32.set("faqs", [{"question": "What's the difference between REST and GraphQL?", "answer": "REST is traditional; GraphQL is more flexible and efficient."}, {"question": "Do I need to know frontend?", "answer": "Not required, but understanding client needs helps."}]);
  try {
    app.save(record32);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record33 = new Record(collection);
    record33.set("name", "Embedded Systems Engineer");
    record33.set("slug", "embedded-systems-engineer");
    record33.set("description", "Develop software for embedded devices");
    record33.set("overview", "Embedded systems engineers develop software for devices like IoT devices, microcontrollers, and embedded systems. They work with hardware and low-level programming.");
    record33.set("averageSalary", 105000);
    record33.set("salaryRange", "{'min': 80000, 'max': 155000}");
    record33.set("jobDemandOutlook", "High - Growing 15% through 2032");
    record33.set("topPayingStates", [{"state": "California", "salary": 130000}, {"state": "New York", "salary": 120000}, {"state": "Washington", "salary": 115000}, {"state": "Massachusetts", "salary": 113000}, {"state": "Colorado", "salary": 110000}]);
    record33.set("roadmap", "{'phase1': 'Learn C/C++', 'phase2': 'Learn microcontrollers', 'phase3': 'Learn embedded systems', 'phase4': 'Build projects', 'phase5': 'Specialize'}");
    record33.set("skillsRequired", ["C/C++", "Microcontrollers", "Hardware Knowledge", "Real-time Systems", "Debugging", "Testing", "Problem Solving"]);
    record33.set("salaryInsights", "{'entry': 85000, 'mid': 105000, 'senior': 145000, 'lead': 190000}");
    record33.set("relatedCareers", ["firmware-engineer", "hardware-engineer", "software-engineer"]);
    record33.set("entrySalary", 85000);
    record33.set("midSalary", 105000);
    record33.set("seniorSalary", 145000);
    record33.set("jobDemand", "High");
    record33.set("topStates", [{"state": "California", "count": 3500}, {"state": "New York", "count": 2500}, {"state": "Washington", "count": 2000}, {"state": "Texas", "count": 1800}, {"state": "Massachusetts", "count": 1600}]);
    record33.set("technicalSkills", ["C", "C++", "Assembly", "Arduino", "ARM", "RTOS", "Debugging"]);
    record33.set("softSkills", ["Problem Solving", "Attention to Detail", "Analytical Thinking", "Collaboration", "Patience"]);
    record33.set("tools", ["Arduino", "STM32", "Raspberry Pi", "JTAG", "Oscilloscope", "Git", "GCC"]);
    record33.set("faqs", [{"question": "Do I need hardware knowledge?", "answer": "Yes, understanding hardware is essential."}, {"question": "What microcontroller should I learn?", "answer": "Arduino is good for beginners; ARM is industry standard."}]);
  try {
    app.save(record33);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record34 = new Record(collection);
    record34.set("name", "DevSecOps Engineer");
    record34.set("slug", "devsecops-engineer");
    record34.set("description", "Integrate security into DevOps processes");
    record34.set("overview", "DevSecOps engineers integrate security into development and operations processes. They automate security testing and ensure secure deployments.");
    record34.set("averageSalary", 135000);
    record34.set("salaryRange", "{'min': 105000, 'max': 190000}");
    record34.set("jobDemandOutlook", "Very High - Growing 30% through 2032");
    record34.set("topPayingStates", [{"state": "California", "salary": 160000}, {"state": "New York", "salary": 150000}, {"state": "Washington", "salary": 145000}, {"state": "Massachusetts", "salary": 143000}, {"state": "Colorado", "salary": 140000}]);
    record34.set("roadmap", "{'phase1': 'Learn DevOps', 'phase2': 'Learn security', 'phase3': 'Integrate security', 'phase4': 'Automate testing', 'phase5': 'Specialize'}");
    record34.set("skillsRequired", ["DevOps", "Security", "CI/CD", "Infrastructure as Code", "Container Security", "Compliance", "Automation"]);
    record34.set("salaryInsights", "{'entry': 110000, 'mid': 135000, 'senior': 175000, 'lead': 230000}");
    record34.set("relatedCareers", ["devops-engineer", "security-engineer", "cloud-architect"]);
    record34.set("entrySalary", 110000);
    record34.set("midSalary", 135000);
    record34.set("seniorSalary", 175000);
    record34.set("jobDemand", "High");
    record34.set("topStates", [{"state": "California", "count": 4000}, {"state": "New York", "count": 2800}, {"state": "Washington", "count": 2500}, {"state": "Texas", "count": 2200}, {"state": "Massachusetts", "count": 2000}]);
    record34.set("technicalSkills", ["Docker", "Kubernetes", "Jenkins", "Terraform", "SAST/DAST", "Container Security", "Compliance"]);
    record34.set("softSkills", ["Problem Solving", "Communication", "Attention to Detail", "Collaboration", "Security Mindset"]);
    record34.set("tools", ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Snyk", "Sonarqube", "Vault"]);
    record34.set("faqs", [{"question": "Do I need security certifications?", "answer": "Not required, but Security+ or CEH are helpful."}, {"question": "What's the best path to DevSecOps?", "answer": "Usually from DevOps or Security Engineer roles."}]);
  try {
    app.save(record34);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record35 = new Record(collection);
    record35.set("name", "Site Reliability Engineer");
    record35.set("slug", "site-reliability-engineer");
    record35.set("description", "Ensure system reliability and performance");
    record35.set("overview", "Site reliability engineers ensure systems are reliable, scalable, and performant. They work on monitoring, alerting, and incident response.");
    record35.set("averageSalary", 130000);
    record35.set("salaryRange", "{'min': 100000, 'max': 185000}");
    record35.set("jobDemandOutlook", "Very High - Growing 28% through 2032");
    record35.set("topPayingStates", [{"state": "California", "salary": 155000}, {"state": "New York", "salary": 145000}, {"state": "Washington", "salary": 140000}, {"state": "Massachusetts", "salary": 138000}, {"state": "Colorado", "salary": 135000}]);
    record35.set("roadmap", "{'phase1': 'Learn systems and networking', 'phase2': 'Learn monitoring tools', 'phase3': 'Learn incident response', 'phase4': 'Optimize systems', 'phase5': 'Specialize'}");
    record35.set("skillsRequired", ["Systems Administration", "Monitoring", "Incident Response", "Performance Tuning", "Scripting", "Cloud Platforms", "Problem Solving"]);
    record35.set("salaryInsights", "{'entry': 105000, 'mid': 130000, 'senior': 170000, 'lead': 220000}");
    record35.set("relatedCareers", ["devops-engineer", "systems-administrator", "cloud-engineer"]);
    record35.set("entrySalary", 105000);
    record35.set("midSalary", 130000);
    record35.set("seniorSalary", 170000);
    record35.set("jobDemand", "High");
    record35.set("topStates", [{"state": "California", "count": 5000}, {"state": "New York", "count": 3500}, {"state": "Washington", "count": 3000}, {"state": "Texas", "count": 2500}, {"state": "Massachusetts", "count": 2300}]);
    record35.set("technicalSkills", ["Linux", "Kubernetes", "Prometheus", "Grafana", "Python", "Go", "Terraform"]);
    record35.set("softSkills", ["Problem Solving", "Communication", "Attention to Detail", "Collaboration", "Stress Management"]);
    record35.set("tools", ["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic", "PagerDuty", "Kubernetes"]);
    record35.set("faqs", [{"question": "What's the difference between SRE and DevOps?", "answer": "SREs focus on reliability; DevOps focuses on deployment automation."}, {"question": "Do I need to code?", "answer": "Yes, scripting and programming are essential."}]);
  try {
    app.save(record35);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record36 = new Record(collection);
    record36.set("name", "Platform Engineer");
    record36.set("slug", "platform-engineer");
    record36.set("description", "Build internal developer platforms");
    record36.set("overview", "Platform engineers build internal platforms that enable developers to build and deploy applications efficiently. They focus on developer experience and productivity.");
    record36.set("averageSalary", 135000);
    record36.set("salaryRange", "{'min': 105000, 'max': 190000}");
    record36.set("jobDemandOutlook", "Very High - Growing 32% through 2032");
    record36.set("topPayingStates", [{"state": "California", "salary": 160000}, {"state": "New York", "salary": 150000}, {"state": "Washington", "salary": 145000}, {"state": "Massachusetts", "salary": 143000}, {"state": "Colorado", "salary": 140000}]);
    record36.set("roadmap", "{'phase1': 'Learn DevOps and Kubernetes', 'phase2': 'Learn platform design', 'phase3': 'Build platforms', 'phase4': 'Optimize DX', 'phase5': 'Specialize'}");
    record36.set("skillsRequired", ["Kubernetes", "DevOps", "Platform Design", "Developer Experience", "Infrastructure as Code", "Automation", "Communication"]);
    record36.set("salaryInsights", "{'entry': 110000, 'mid': 135000, 'senior': 175000, 'lead': 230000}");
    record36.set("relatedCareers", ["devops-engineer", "cloud-architect", "site-reliability-engineer"]);
    record36.set("entrySalary", 110000);
    record36.set("midSalary", 135000);
    record36.set("seniorSalary", 175000);
    record36.set("jobDemand", "High");
    record36.set("topStates", [{"state": "California", "count": 3500}, {"state": "New York", "count": 2500}, {"state": "Washington", "count": 2000}, {"state": "Texas", "count": 1800}, {"state": "Massachusetts", "count": 1600}]);
    record36.set("technicalSkills", ["Kubernetes", "Terraform", "Go", "Python", "Docker", "CI/CD", "Observability"]);
    record36.set("softSkills", ["Communication", "Problem Solving", "Empathy", "Collaboration", "Strategic Thinking"]);
    record36.set("tools", ["Kubernetes", "Terraform", "Helm", "ArgoCD", "Prometheus", "Grafana", "GitOps"]);
    record36.set("faqs", [{"question": "What's the difference between Platform Engineer and DevOps?", "answer": "Platform Engineers focus on developer experience; DevOps focuses on operations."}, {"question": "Is this a new role?", "answer": "Yes, it's an emerging role with high demand."}]);
  try {
    app.save(record36);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record37 = new Record(collection);
    record37.set("name", "Graphics Programmer");
    record37.set("slug", "graphics-programmer");
    record37.set("description", "Develop graphics and rendering systems");
    record37.set("overview", "Graphics programmers develop graphics engines and rendering systems. They work with GPUs, shaders, and graphics APIs.");
    record37.set("averageSalary", 120000);
    record37.set("salaryRange", "{'min': 90000, 'max': 170000}");
    record37.set("jobDemandOutlook", "Moderate - Growing 10% through 2032");
    record37.set("topPayingStates", [{"state": "California", "salary": 145000}, {"state": "New York", "salary": 135000}, {"state": "Washington", "salary": 130000}, {"state": "Massachusetts", "salary": 128000}, {"state": "Colorado", "salary": 125000}]);
    record37.set("roadmap", "{'phase1': 'Learn graphics fundamentals', 'phase2': 'Learn graphics APIs', 'phase3': 'Learn shaders', 'phase4': 'Build engines', 'phase5': 'Specialize'}");
    record37.set("skillsRequired", ["Graphics APIs", "Shaders", "Linear Algebra", "C++", "GPU Programming", "Performance Optimization", "Problem Solving"]);
    record37.set("salaryInsights", "{'entry': 95000, 'mid': 120000, 'senior': 160000, 'lead': 210000}");
    record37.set("relatedCareers", ["game-developer", "software-engineer", "vfx-programmer"]);
    record37.set("entrySalary", 95000);
    record37.set("midSalary", 120000);
    record37.set("seniorSalary", 160000);
    record37.set("jobDemand", "Medium");
    record37.set("topStates", [{"state": "California", "count": 2500}, {"state": "Washington", "count": 1500}, {"state": "New York", "count": 1200}, {"state": "Texas", "count": 1000}, {"state": "Massachusetts", "count": 900}]);
    record37.set("technicalSkills", ["C++", "OpenGL", "DirectX", "Vulkan", "GLSL", "HLSL", "Linear Algebra"]);
    record37.set("softSkills", ["Problem Solving", "Analytical Thinking", "Attention to Detail", "Collaboration", "Creativity"]);
    record37.set("tools", ["Visual Studio", "Git", "OpenGL", "DirectX", "Vulkan", "Shader Editors", "Profilers"]);
    record37.set("faqs", [{"question": "What graphics API should I learn?", "answer": "OpenGL is good for learning; Vulkan is modern and powerful."}, {"question": "Do I need a math background?", "answer": "Yes, linear algebra and geometry are essential."}]);
  try {
    app.save(record37);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record38 = new Record(collection);
    record38.set("name", "Augmented Reality Developer");
    record38.set("slug", "augmented-reality-developer");
    record38.set("description", "Build augmented reality applications");
    record38.set("overview", "AR developers create augmented reality experiences using AR frameworks and tools. They work on mobile and web-based AR applications.");
    record38.set("averageSalary", 115000);
    record38.set("salaryRange", "{'min': 85000, 'max': 165000}");
    record38.set("jobDemandOutlook", "High - Growing 25% through 2032");
    record38.set("topPayingStates", [{"state": "California", "salary": 140000}, {"state": "New York", "salary": 130000}, {"state": "Washington", "salary": 125000}, {"state": "Massachusetts", "salary": 123000}, {"state": "Colorado", "salary": 120000}]);
    record38.set("roadmap", "{'phase1': 'Learn AR fundamentals', 'phase2': 'Learn AR frameworks', 'phase3': 'Build AR apps', 'phase4': 'Learn 3D graphics', 'phase5': 'Specialize'}");
    record38.set("skillsRequired", ["AR Frameworks", "3D Graphics", "Mobile Development", "Computer Vision", "Problem Solving", "Creativity", "Communication"]);
    record38.set("salaryInsights", "{'entry': 90000, 'mid': 115000, 'senior': 155000, 'lead': 200000}");
    record38.set("relatedCareers", ["game-developer", "mobile-developer", "graphics-programmer"]);
    record38.set("entrySalary", 90000);
    record38.set("midSalary", 115000);
    record38.set("seniorSalary", 155000);
    record38.set("jobDemand", "High");
    record38.set("topStates", [{"state": "California", "count": 2500}, {"state": "New York", "count": 1800}, {"state": "Washington", "count": 1500}, {"state": "Texas", "count": 1300}, {"state": "Massachusetts", "count": 1200}]);
    record38.set("technicalSkills", ["ARKit", "ARCore", "Unity", "Unreal", "C#", "JavaScript", "3D Graphics"]);
    record38.set("softSkills", ["Creativity", "Problem Solving", "Communication", "Collaboration", "Innovation"]);
    record38.set("tools", ["Unity", "Unreal", "ARKit", "ARCore", "Blender", "Git", "Visual Studio"]);
    record38.set("faqs", [{"question": "What AR framework should I learn?", "answer": "ARKit for iOS, ARCore for Android, or WebAR for web."}, {"question": "Do I need 3D graphics knowledge?", "answer": "Yes, understanding 3D graphics helps significantly."}]);
  try {
    app.save(record38);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record39 = new Record(collection);
    record39.set("name", "Virtual Reality Developer");
    record39.set("slug", "virtual-reality-developer");
    record39.set("description", "Build virtual reality applications");
    record39.set("overview", "VR developers create immersive virtual reality experiences using VR frameworks and game engines. They work on VR applications for various platforms.");
    record39.set("averageSalary", 120000);
    record39.set("salaryRange", "{'min': 90000, 'max': 170000}");
    record39.set("jobDemandOutlook", "High - Growing 22% through 2032");
    record39.set("topPayingStates", [{"state": "California", "salary": 145000}, {"state": "New York", "salary": 135000}, {"state": "Washington", "salary": 130000}, {"state": "Massachusetts", "salary": 128000}, {"state": "Colorado", "salary": 125000}]);
    record39.set("roadmap", "{'phase1': 'Learn VR fundamentals', 'phase2': 'Learn VR frameworks', 'phase3': 'Build VR apps', 'phase4': 'Learn 3D graphics', 'phase5': 'Specialize'}");
    record39.set("skillsRequired", ["VR Frameworks", "3D Graphics", "Game Development", "Physics", "Problem Solving", "Creativity", "Communication"]);
    record39.set("salaryInsights", "{'entry': 95000, 'mid': 120000, 'senior': 160000, 'lead': 210000}");
    record39.set("relatedCareers", ["game-developer", "graphics-programmer", "ar-developer"]);
    record39.set("entrySalary", 95000);
    record39.set("midSalary", 120000);
    record39.set("seniorSalary", 160000);
    record39.set("jobDemand", "High");
    record39.set("topStates", [{"state": "California", "count": 2000}, {"state": "Washington", "count": 1200}, {"state": "New York", "count": 1000}, {"state": "Texas", "count": 900}, {"state": "Massachusetts", "count": 800}]);
    record39.set("technicalSkills", ["Unity", "Unreal", "C#", "C++", "3D Graphics", "Physics", "Networking"]);
    record39.set("softSkills", ["Creativity", "Problem Solving", "Communication", "Collaboration", "Innovation"]);
    record39.set("tools", ["Unity", "Unreal", "SteamVR", "Oculus SDK", "Blender", "Git", "Visual Studio"]);
    record39.set("faqs", [{"question": "What VR platform should I target?", "answer": "Meta Quest is most accessible; PlayStation VR and SteamVR are also popular."}, {"question": "Do I need 3D graphics knowledge?", "answer": "Yes, understanding 3D graphics is essential."}]);
  try {
    app.save(record39);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record40 = new Record(collection);
    record40.set("name", "IoT Developer");
    record40.set("slug", "iot-developer");
    record40.set("description", "Build Internet of Things applications");
    record40.set("overview", "IoT developers create applications for connected devices. They work with sensors, microcontrollers, and cloud platforms to build IoT solutions.");
    record40.set("averageSalary", 110000);
    record40.set("salaryRange", "{'min': 85000, 'max': 160000}");
    record40.set("jobDemandOutlook", "High - Growing 24% through 2032");
    record40.set("topPayingStates", [{"state": "California", "salary": 135000}, {"state": "New York", "salary": 125000}, {"state": "Washington", "salary": 120000}, {"state": "Massachusetts", "salary": 118000}, {"state": "Colorado", "salary": 115000}]);
    record40.set("roadmap", "{'phase1': 'Learn embedded systems', 'phase2': 'Learn IoT platforms', 'phase3': 'Build IoT projects', 'phase4': 'Learn cloud integration', 'phase5': 'Specialize'}");
    record40.set("skillsRequired", ["Embedded Systems", "IoT Platforms", "Sensors", "Networking", "Cloud Platforms", "Problem Solving", "Communication"]);
    record40.set("salaryInsights", "{'entry': 90000, 'mid': 110000, 'senior': 150000, 'lead': 195000}");
    record40.set("relatedCareers", ["embedded-systems-engineer", "backend-engineer", "cloud-engineer"]);
    record40.set("entrySalary", 90000);
    record40.set("midSalary", 110000);
    record40.set("seniorSalary", 150000);
    record40.set("jobDemand", "High");
    record40.set("topStates", [{"state": "California", "count": 3000}, {"state": "New York", "count": 2000}, {"state": "Washington", "count": 1800}, {"state": "Texas", "count": 1600}, {"state": "Massachusetts", "count": 1400}]);
    record40.set("technicalSkills", ["C", "Python", "Arduino", "Raspberry Pi", "MQTT", "AWS IoT", "Azure IoT"]);
    record40.set("softSkills", ["Problem Solving", "Analytical Thinking", "Communication", "Collaboration", "Creativity"]);
    record40.set("tools", ["Arduino", "Raspberry Pi", "MQTT", "AWS IoT", "Azure IoT", "Node-RED", "Git"]);
    record40.set("faqs", [{"question": "What IoT platform should I learn?", "answer": "AWS IoT and Azure IoT are most popular."}, {"question": "Do I need hardware knowledge?", "answer": "Yes, understanding sensors and microcontrollers is essential."}]);
  try {
    app.save(record40);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record41 = new Record(collection);
    record41.set("name", "Quantum Developer");
    record41.set("slug", "quantum-developer");
    record41.set("description", "Develop quantum computing applications");
    record41.set("overview", "Quantum developers create applications for quantum computers. They work with quantum programming frameworks and algorithms.");
    record41.set("averageSalary", 140000);
    record41.set("salaryRange", "{'min': 110000, 'max': 200000}");
    record41.set("jobDemandOutlook", "Very High - Growing 40% through 2032");
    record41.set("topPayingStates", [{"state": "California", "salary": 170000}, {"state": "New York", "salary": 160000}, {"state": "Washington", "salary": 155000}, {"state": "Massachusetts", "salary": 153000}, {"state": "Colorado", "salary": 150000}]);
    record41.set("roadmap", "{'phase1': 'Learn quantum fundamentals', 'phase2': 'Learn quantum algorithms', 'phase3': 'Learn quantum frameworks', 'phase4': 'Build projects', 'phase5': 'Specialize'}");
    record41.set("skillsRequired", ["Quantum Computing", "Quantum Algorithms", "Linear Algebra", "Physics", "Python", "Problem Solving", "Research"]);
    record41.set("salaryInsights", "{'entry': 120000, 'mid': 140000, 'senior': 190000, 'lead': 260000}");
    record41.set("relatedCareers", ["machine-learning-engineer", "data-scientist", "software-engineer"]);
    record41.set("entrySalary", 120000);
    record41.set("midSalary", 140000);
    record41.set("seniorSalary", 190000);
    record41.set("jobDemand", "High");
    record41.set("topStates", [{"state": "California", "count": 1500}, {"state": "New York", "count": 1000}, {"state": "Washington", "count": 800}, {"state": "Massachusetts", "count": 700}, {"state": "Colorado", "count": 600}]);
    record41.set("technicalSkills", ["Qiskit", "Cirq", "Q#", "Python", "Linear Algebra", "Quantum Algorithms"]);
    record41.set("softSkills", ["Problem Solving", "Analytical Thinking", "Research", "Communication", "Creativity"]);
    record41.set("tools", ["Qiskit", "Cirq", "Q#", "IBM Quantum", "Azure Quantum", "Python", "Jupyter"]);
    record41.set("faqs", [{"question": "Do I need a physics background?", "answer": "Not required, but understanding quantum mechanics helps."}, {"question": "Is quantum computing ready for production?", "answer": "Still emerging, but growing rapidly with real applications."}]);
  try {
    app.save(record41);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})
