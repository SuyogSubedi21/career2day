/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
    record0.set("name", "Frontend Developer");
    record0.set("slug", "frontend-developer");
    record0.set("description", "Specializes in building user interfaces and client-side applications using HTML, CSS, and JavaScript frameworks.");
    record0.set("overview", "Frontend developers create the visual and interactive elements of web applications that users see and interact with daily.");
    record0.set("averageSalary", 95000);
    record0.set("entrySalary", 60000);
    record0.set("midSalary", 95000);
    record0.set("seniorSalary", 140000);
    record0.set("salaryRange", "{'entry': 60000, 'mid': 95000, 'senior': 140000}");
    record0.set("jobDemand", "High");
    record0.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record0.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record0.set("roadmap", [{"stage": "Fundamentals", "timeline": "3-4 months", "focus": "HTML, CSS, JavaScript basics"}, {"stage": "Intermediate", "timeline": "4-6 months", "focus": "React/Vue/Angular, responsive design"}, {"stage": "Advanced", "timeline": "6-12 months", "focus": "State management, performance optimization"}, {"stage": "Expert", "timeline": "12+ months", "focus": "System design, mentoring, architecture"}]);
    record0.set("skillsRequired", ["JavaScript", "React", "CSS", "HTML", "TypeScript", "Git", "REST APIs", "Responsive Design", "Web Performance", "Testing"]);
    record0.set("technicalSkills", ["JavaScript", "React", "Vue.js", "Angular", "TypeScript", "CSS/SCSS", "HTML5", "Webpack", "REST APIs", "GraphQL"]);
    record0.set("softSkills", ["Communication", "Problem-solving", "Attention to detail", "Collaboration", "Time management", "Creativity"]);
    record0.set("tools", ["VS Code", "Chrome DevTools", "Git", "Figma", "Webpack", "npm", "Jest", "Postman"]);
    record0.set("faqs", [{"q": "What's the best way to learn React?", "a": "Start with fundamentals, build projects, practice state management"}, {"q": "How important is CSS?", "a": "Very important - it's essential for creating responsive, accessible UIs"}]);
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
    record1.set("name", "Backend Developer");
    record1.set("slug", "backend-developer");
    record1.set("description", "Develops server-side logic, databases, and APIs that power web and mobile applications.");
    record1.set("overview", "Backend developers build the infrastructure and logic that handles data processing, storage, and business logic.");
    record1.set("averageSalary", 105000);
    record1.set("entrySalary", 65000);
    record1.set("midSalary", 105000);
    record1.set("seniorSalary", 155000);
    record1.set("salaryRange", "{'entry': 65000, 'mid': 105000, 'senior': 155000}");
    record1.set("jobDemand", "High");
    record1.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Illinois"]);
    record1.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Illinois"]);
    record1.set("roadmap", [{"stage": "Fundamentals", "timeline": "3-4 months", "focus": "Programming basics, databases"}, {"stage": "Intermediate", "timeline": "4-6 months", "focus": "Web frameworks, API design"}, {"stage": "Advanced", "timeline": "6-12 months", "focus": "Microservices, scalability, security"}, {"stage": "Expert", "timeline": "12+ months", "focus": "System architecture, DevOps, mentoring"}]);
    record1.set("skillsRequired", ["Python/Java/Node.js", "SQL", "REST APIs", "Databases", "Git", "Docker", "Authentication", "API Design", "Testing", "Cloud Services"]);
    record1.set("technicalSkills", ["Python", "Java", "Node.js", "SQL", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "REST APIs", "GraphQL"]);
    record1.set("softSkills", ["Problem-solving", "Communication", "Debugging", "Collaboration", "System thinking", "Documentation"]);
    record1.set("tools", ["Git", "Docker", "Postman", "pgAdmin", "MongoDB Compass", "IntelliJ IDEA", "VS Code", "Jenkins"]);
    record1.set("faqs", [{"q": "Should I learn SQL or NoSQL first?", "a": "Start with SQL - it's fundamental and widely used"}, {"q": "What's the importance of APIs?", "a": "APIs are critical - they're how frontend and backend communicate"}]);
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
    record2.set("name", "Full Stack Developer");
    record2.set("slug", "full-stack-developer");
    record2.set("description", "Works on both frontend and backend, handling complete application development from UI to database.");
    record2.set("overview", "Full stack developers have expertise across the entire technology stack, enabling them to build complete applications independently.");
    record2.set("averageSalary", 110000);
    record2.set("entrySalary", 70000);
    record2.set("midSalary", 110000);
    record2.set("seniorSalary", 160000);
    record2.set("salaryRange", "{'entry': 70000, 'mid': 110000, 'senior': 160000}");
    record2.set("jobDemand", "High");
    record2.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record2.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record2.set("roadmap", [{"stage": "Frontend Basics", "timeline": "3-4 months", "focus": "HTML, CSS, JavaScript"}, {"stage": "Backend Basics", "timeline": "3-4 months", "focus": "Server-side language, databases"}, {"stage": "Integration", "timeline": "4-6 months", "focus": "APIs, deployment, full applications"}, {"stage": "Advanced", "timeline": "6+ months", "focus": "Optimization, architecture, DevOps"}]);
    record2.set("skillsRequired", ["JavaScript", "React", "Node.js", "SQL", "MongoDB", "Git", "Docker", "REST APIs", "Authentication", "Deployment"]);
    record2.set("technicalSkills", ["JavaScript", "React", "Node.js", "Express", "SQL", "MongoDB", "Docker", "Git", "REST APIs", "HTML/CSS"]);
    record2.set("softSkills", ["Versatility", "Problem-solving", "Communication", "Project management", "Adaptability", "Collaboration"]);
    record2.set("tools", ["VS Code", "Git", "Docker", "Postman", "MongoDB Compass", "npm", "Heroku", "AWS"]);
    record2.set("faqs", [{"q": "Is full stack development harder than specializing?", "a": "It requires broader knowledge but offers more flexibility"}, {"q": "What's the best tech stack to learn?", "a": "MERN (MongoDB, Express, React, Node.js) is popular and in-demand"}]);
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
    record3.set("name", "DevOps Engineer");
    record3.set("slug", "devops-engineer");
    record3.set("description", "Manages infrastructure, deployment pipelines, and ensures smooth operation of applications in production.");
    record3.set("overview", "DevOps engineers bridge development and operations, automating deployment and infrastructure management.");
    record3.set("averageSalary", 120000);
    record3.set("entrySalary", 75000);
    record3.set("midSalary", 120000);
    record3.set("seniorSalary", 170000);
    record3.set("salaryRange", "{'entry': 75000, 'mid': 120000, 'senior': 170000}");
    record3.set("jobDemand", "High");
    record3.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Virginia"]);
    record3.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Virginia"]);
    record3.set("roadmap", [{"stage": "Fundamentals", "timeline": "3-4 months", "focus": "Linux, networking, basics"}, {"stage": "Containerization", "timeline": "3-4 months", "focus": "Docker, container orchestration"}, {"stage": "Cloud & CI/CD", "timeline": "4-6 months", "focus": "AWS/Azure, Jenkins, automation"}, {"stage": "Advanced", "timeline": "6+ months", "focus": "Kubernetes, infrastructure as code, monitoring"}]);
    record3.set("skillsRequired", ["Linux", "Docker", "Kubernetes", "AWS/Azure", "CI/CD", "Git", "Scripting", "Networking", "Monitoring", "Infrastructure as Code"]);
    record3.set("technicalSkills", ["Linux", "Docker", "Kubernetes", "AWS", "Azure", "Jenkins", "Terraform", "Ansible", "Python", "Bash"]);
    record3.set("softSkills", ["Problem-solving", "Communication", "Attention to detail", "Collaboration", "Incident management", "Documentation"]);
    record3.set("tools", ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Terraform", "Ansible", "Prometheus", "ELK Stack"]);
    record3.set("faqs", [{"q": "Do I need to be a developer first?", "a": "Not necessarily, but programming knowledge helps significantly"}, {"q": "What cloud platform should I learn?", "a": "AWS is most popular, but Azure and GCP are also valuable"}]);
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
    record4.set("name", "Data Scientist");
    record4.set("slug", "data-scientist");
    record4.set("description", "Analyzes complex data sets and builds machine learning models to solve business problems.");
    record4.set("overview", "Data scientists use statistics, programming, and machine learning to extract insights from data and drive business decisions.");
    record4.set("averageSalary", 115000);
    record4.set("entrySalary", 70000);
    record4.set("midSalary", 115000);
    record4.set("seniorSalary", 165000);
    record4.set("salaryRange", "{'entry': 70000, 'mid': 115000, 'senior': 165000}");
    record4.set("jobDemand", "High");
    record4.set("topPayingStates", ["California", "New York", "Massachusetts", "Washington", "Illinois"]);
    record4.set("topStates", ["California", "New York", "Massachusetts", "Washington", "Illinois"]);
    record4.set("roadmap", [{"stage": "Fundamentals", "timeline": "4-6 months", "focus": "Statistics, Python, SQL"}, {"stage": "Data Analysis", "timeline": "3-4 months", "focus": "Pandas, visualization, EDA"}, {"stage": "Machine Learning", "timeline": "4-6 months", "focus": "Scikit-learn, algorithms, modeling"}, {"stage": "Advanced", "timeline": "6+ months", "focus": "Deep learning, production models, big data"}]);
    record4.set("skillsRequired", ["Python", "SQL", "Statistics", "Machine Learning", "Data Visualization", "Pandas", "Scikit-learn", "TensorFlow", "Git", "Communication"]);
    record4.set("technicalSkills", ["Python", "R", "SQL", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Keras", "Matplotlib", "Seaborn"]);
    record4.set("softSkills", ["Statistical thinking", "Communication", "Problem-solving", "Curiosity", "Attention to detail", "Business acumen"]);
    record4.set("tools", ["Jupyter Notebook", "Python", "SQL", "Tableau", "Power BI", "Git", "AWS SageMaker", "Google Colab"]);
    record4.set("faqs", [{"q": "Do I need a math degree?", "a": "Not required, but strong math/stats foundation is helpful"}, {"q": "What's the difference between data scientist and data analyst?", "a": "Data scientists build predictive models; analysts focus on insights"}]);
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
    record5.set("name", "Machine Learning Engineer");
    record5.set("slug", "machine-learning-engineer");
    record5.set("description", "Designs and implements machine learning systems that learn from data and improve over time.");
    record5.set("overview", "ML engineers build scalable machine learning systems that power AI applications and intelligent features.");
    record5.set("averageSalary", 130000);
    record5.set("entrySalary", 80000);
    record5.set("midSalary", 130000);
    record5.set("seniorSalary", 180000);
    record5.set("salaryRange", "{'entry': 80000, 'mid': 130000, 'senior': 180000}");
    record5.set("jobDemand", "High");
    record5.set("topPayingStates", ["California", "New York", "Massachusetts", "Washington", "Colorado"]);
    record5.set("topStates", ["California", "New York", "Massachusetts", "Washington", "Colorado"]);
    record5.set("roadmap", [{"stage": "Fundamentals", "timeline": "4-6 months", "focus": "Python, math, ML basics"}, {"stage": "Core ML", "timeline": "4-6 months", "focus": "Algorithms, model training, evaluation"}, {"stage": "Deep Learning", "timeline": "4-6 months", "focus": "Neural networks, TensorFlow, PyTorch"}, {"stage": "Production", "timeline": "6+ months", "focus": "Model deployment, MLOps, scaling"}]);
    record5.set("skillsRequired", ["Python", "Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "SQL", "Statistics", "Git", "Cloud Services", "Model Deployment"]);
    record5.set("technicalSkills", ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "SQL", "Pandas", "NumPy", "Keras", "Docker", "Kubernetes"]);
    record5.set("softSkills", ["Problem-solving", "Research mindset", "Communication", "Collaboration", "Attention to detail", "Continuous learning"]);
    record5.set("tools", ["Python", "TensorFlow", "PyTorch", "Jupyter", "Git", "Docker", "AWS SageMaker", "MLflow"]);
    record5.set("faqs", [{"q": "What's the difference between ML engineer and data scientist?", "a": "ML engineers focus on production systems; data scientists on analysis"}, {"q": "Do I need a PhD?", "a": "Not required, but strong fundamentals in math and CS are important"}]);
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
    record6.set("name", "Cloud Architect");
    record6.set("slug", "cloud-architect");
    record6.set("description", "Designs and manages cloud infrastructure solutions that are scalable, secure, and cost-effective.");
    record6.set("overview", "Cloud architects design enterprise-level cloud solutions and ensure optimal cloud infrastructure performance.");
    record6.set("averageSalary", 140000);
    record6.set("entrySalary", 85000);
    record6.set("midSalary", 140000);
    record6.set("seniorSalary", 190000);
    record6.set("salaryRange", "{'entry': 85000, 'mid': 140000, 'senior': 190000}");
    record6.set("jobDemand", "High");
    record6.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Virginia"]);
    record6.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Virginia"]);
    record6.set("roadmap", [{"stage": "Cloud Fundamentals", "timeline": "3-4 months", "focus": "AWS/Azure basics, networking"}, {"stage": "Core Services", "timeline": "4-6 months", "focus": "Compute, storage, databases"}, {"stage": "Architecture", "timeline": "4-6 months", "focus": "Design patterns, security, scalability"}, {"stage": "Expert", "timeline": "6+ months", "focus": "Multi-cloud, optimization, compliance"}]);
    record6.set("skillsRequired", ["AWS/Azure/GCP", "Networking", "Security", "Databases", "Scalability", "Cost Optimization", "Infrastructure as Code", "Compliance", "Docker", "Kubernetes"]);
    record6.set("technicalSkills", ["AWS", "Azure", "GCP", "Networking", "Security", "Terraform", "CloudFormation", "Docker", "Kubernetes", "SQL"]);
    record6.set("softSkills", ["Strategic thinking", "Communication", "Leadership", "Problem-solving", "Business acumen", "Decision-making"]);
    record6.set("tools", ["AWS Console", "Azure Portal", "Terraform", "CloudFormation", "Visio", "Git", "Monitoring tools", "Cost calculators"]);
    record6.set("faqs", [{"q": "Which cloud platform should I specialize in?", "a": "AWS is most popular, but multi-cloud knowledge is increasingly valuable"}, {"q": "Do I need certifications?", "a": "AWS Solutions Architect or Azure certifications are highly recommended"}]);
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
    record7.set("name", "Cybersecurity Engineer");
    record7.set("slug", "cybersecurity-engineer");
    record7.set("description", "Protects systems and networks from cyber threats through security implementation and monitoring.");
    record7.set("overview", "Cybersecurity engineers design and implement security measures to protect organizations from cyber attacks.");
    record7.set("averageSalary", 125000);
    record7.set("entrySalary", 75000);
    record7.set("midSalary", 125000);
    record7.set("seniorSalary", 175000);
    record7.set("salaryRange", "{'entry': 75000, 'mid': 125000, 'senior': 175000}");
    record7.set("jobDemand", "High");
    record7.set("topPayingStates", ["California", "Virginia", "Massachusetts", "New York", "Washington"]);
    record7.set("topStates", ["California", "Virginia", "Massachusetts", "New York", "Washington"]);
    record7.set("roadmap", [{"stage": "Fundamentals", "timeline": "4-6 months", "focus": "Networking, Linux, security basics"}, {"stage": "Core Security", "timeline": "4-6 months", "focus": "Cryptography, firewalls, intrusion detection"}, {"stage": "Advanced", "timeline": "4-6 months", "focus": "Penetration testing, incident response"}, {"stage": "Expert", "timeline": "6+ months", "focus": "Security architecture, compliance, threat intelligence"}]);
    record7.set("skillsRequired", ["Networking", "Linux", "Cryptography", "Firewalls", "Intrusion Detection", "Penetration Testing", "Incident Response", "Compliance", "Python", "SQL"]);
    record7.set("technicalSkills", ["Linux", "Networking", "Cryptography", "Firewalls", "IDS/IPS", "SIEM", "Penetration Testing", "Python", "Bash", "SQL"]);
    record7.set("softSkills", ["Attention to detail", "Problem-solving", "Communication", "Analytical thinking", "Persistence", "Ethical mindset"]);
    record7.set("tools", ["Wireshark", "Metasploit", "Burp Suite", "Nessus", "Splunk", "Snort", "OpenSSL", "Git"]);
    record7.set("faqs", [{"q": "Do I need certifications?", "a": "Yes, CEH, CISSP, or Security+ are highly valued"}, {"q": "Is ethical hacking important?", "a": "Yes, understanding attack methods helps build better defenses"}]);
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
    record8.set("name", "Mobile Developer");
    record8.set("slug", "mobile-developer");
    record8.set("description", "Develops applications for mobile devices using native or cross-platform frameworks.");
    record8.set("overview", "Mobile developers create apps for iOS and Android platforms, focusing on user experience and performance.");
    record8.set("averageSalary", 105000);
    record8.set("entrySalary", 65000);
    record8.set("midSalary", 105000);
    record8.set("seniorSalary", 155000);
    record8.set("salaryRange", "{'entry': 65000, 'mid': 105000, 'senior': 155000}");
    record8.set("jobDemand", "High");
    record8.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record8.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record8.set("roadmap", [{"stage": "Fundamentals", "timeline": "3-4 months", "focus": "Swift/Kotlin, mobile basics"}, {"stage": "Native Development", "timeline": "4-6 months", "focus": "iOS/Android frameworks, UI"}, {"stage": "Advanced", "timeline": "4-6 months", "focus": "Performance, testing, deployment"}, {"stage": "Expert", "timeline": "6+ months", "focus": "Architecture, cross-platform, leadership"}]);
    record8.set("skillsRequired", ["Swift/Kotlin", "Java", "React Native/Flutter", "Mobile UI/UX", "APIs", "Git", "Testing", "Performance Optimization", "Firebase", "Debugging"]);
    record8.set("technicalSkills", ["Swift", "Kotlin", "Java", "React Native", "Flutter", "Firebase", "REST APIs", "SQLite", "Xcode", "Android Studio"]);
    record8.set("softSkills", ["Attention to detail", "Problem-solving", "User empathy", "Collaboration", "Adaptability", "Communication"]);
    record8.set("tools", ["Xcode", "Android Studio", "Git", "Firebase", "Postman", "TestFlight", "Figma", "Jira"]);
    record8.set("faqs", [{"q": "Should I learn iOS or Android first?", "a": "Either works, but iOS has higher pay; consider your interests"}, {"q": "Is cross-platform development worth learning?", "a": "Yes, React Native and Flutter are increasingly popular"}]);
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
    record9.set("name", "QA Engineer");
    record9.set("slug", "qa-engineer");
    record9.set("description", "Tests software applications to identify bugs and ensure quality before release.");
    record9.set("overview", "QA engineers develop test strategies and execute tests to ensure software meets quality standards.");
    record9.set("averageSalary", 85000);
    record9.set("entrySalary", 50000);
    record9.set("midSalary", 85000);
    record9.set("seniorSalary", 130000);
    record9.set("salaryRange", "{'entry': 50000, 'mid': 85000, 'senior': 130000}");
    record9.set("jobDemand", "Medium");
    record9.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record9.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record9.set("roadmap", [{"stage": "Fundamentals", "timeline": "2-3 months", "focus": "Testing basics, test planning"}, {"stage": "Automation", "timeline": "3-4 months", "focus": "Selenium, test frameworks"}, {"stage": "Advanced", "timeline": "4-6 months", "focus": "Performance testing, CI/CD integration"}, {"stage": "Expert", "timeline": "6+ months", "focus": "Test strategy, leadership, automation architecture"}]);
    record9.set("skillsRequired", ["Testing Methodologies", "Selenium", "Test Automation", "SQL", "Git", "API Testing", "Performance Testing", "Bug Tracking", "Python/Java", "Communication"]);
    record9.set("technicalSkills", ["Selenium", "TestNG", "JUnit", "Python", "Java", "SQL", "Postman", "Git", "Jenkins", "Jira"]);
    record9.set("softSkills", ["Attention to detail", "Problem-solving", "Communication", "Patience", "Analytical thinking", "Documentation"]);
    record9.set("tools", ["Selenium", "Postman", "Jira", "TestRail", "Git", "Jenkins", "LoadRunner", "Appium"]);
    record9.set("faqs", [{"q": "Is QA a good career path?", "a": "Yes, especially with automation skills - high demand and good growth"}, {"q": "Do I need to code?", "a": "Not required for manual QA, but automation requires programming skills"}]);
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
    record10.set("name", "Solutions Architect");
    record10.set("slug", "solutions-architect");
    record10.set("description", "Designs technical solutions that meet business requirements and align with organizational goals.");
    record10.set("overview", "Solutions architects bridge business and technology, designing comprehensive solutions for complex problems.");
    record10.set("averageSalary", 135000);
    record10.set("entrySalary", 80000);
    record10.set("midSalary", 135000);
    record10.set("seniorSalary", 185000);
    record10.set("salaryRange", "{'entry': 80000, 'mid': 135000, 'senior': 185000}");
    record10.set("jobDemand", "High");
    record10.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Illinois"]);
    record10.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Illinois"]);
    record10.set("roadmap", [{"stage": "Technical Foundation", "timeline": "4-6 months", "focus": "Development, architecture basics"}, {"stage": "Architecture Patterns", "timeline": "4-6 months", "focus": "Design patterns, scalability"}, {"stage": "Business Acumen", "timeline": "4-6 months", "focus": "Requirements gathering, communication"}, {"stage": "Expert", "timeline": "6+ months", "focus": "Enterprise solutions, leadership, strategy"}]);
    record10.set("skillsRequired", ["System Design", "Cloud Platforms", "Databases", "Networking", "Security", "Communication", "Business Analysis", "Project Management", "Technical Leadership", "Documentation"]);
    record10.set("technicalSkills", ["AWS/Azure", "System Design", "Databases", "Networking", "Security", "Microservices", "APIs", "Docker", "Kubernetes", "Monitoring"]);
    record10.set("softSkills", ["Communication", "Leadership", "Business acumen", "Problem-solving", "Presentation skills", "Stakeholder management"]);
    record10.set("tools", ["Visio", "Lucidchart", "AWS/Azure", "Git", "Jira", "Confluence", "Figma", "Project management tools"]);
    record10.set("faqs", [{"q": "What's the difference between architect and developer?", "a": "Architects design systems; developers implement them"}, {"q": "Do I need certifications?", "a": "AWS Solutions Architect or similar certifications are valuable"}]);
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
    record11.set("description", "Manages databases, ensuring performance, security, and availability of data systems.");
    record11.set("overview", "DBAs maintain database infrastructure, optimize performance, and ensure data integrity and security.");
    record11.set("averageSalary", 110000);
    record11.set("entrySalary", 65000);
    record11.set("midSalary", 110000);
    record11.set("seniorSalary", 160000);
    record11.set("salaryRange", "{'entry': 65000, 'mid': 110000, 'senior': 160000}");
    record11.set("jobDemand", "Medium");
    record11.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Illinois"]);
    record11.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Illinois"]);
    record11.set("roadmap", [{"stage": "Fundamentals", "timeline": "3-4 months", "focus": "SQL, database basics"}, {"stage": "Administration", "timeline": "4-6 months", "focus": "Backup, recovery, security"}, {"stage": "Performance", "timeline": "4-6 months", "focus": "Optimization, tuning, monitoring"}, {"stage": "Expert", "timeline": "6+ months", "focus": "High availability, disaster recovery, architecture"}]);
    record11.set("skillsRequired", ["SQL", "Database Management", "Backup & Recovery", "Performance Tuning", "Security", "Scripting", "Monitoring", "Cloud Databases", "Linux", "Networking"]);
    record11.set("technicalSkills", ["SQL", "PostgreSQL", "MySQL", "Oracle", "MongoDB", "Backup tools", "Scripting", "Linux", "Networking", "Cloud databases"]);
    record11.set("softSkills", ["Attention to detail", "Problem-solving", "Communication", "Patience", "Analytical thinking", "Reliability"]);
    record11.set("tools", ["SQL Server", "PostgreSQL", "MySQL", "Oracle", "MongoDB", "Backup software", "Monitoring tools", "Git"]);
    record11.set("faqs", [{"q": "Is DBA a dying career?", "a": "No, but it's evolving with cloud databases and automation"}, {"q": "What databases should I learn?", "a": "PostgreSQL and MySQL are good starts; Oracle is enterprise standard"}]);
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
    record12.set("name", "Product Manager");
    record12.set("slug", "product-manager");
    record12.set("description", "Guides product development by defining vision, strategy, and roadmap based on market and user needs.");
    record12.set("overview", "Product managers act as the bridge between users, business, and engineering teams to create successful products.");
    record12.set("averageSalary", 130000);
    record12.set("entrySalary", 75000);
    record12.set("midSalary", 130000);
    record12.set("seniorSalary", 180000);
    record12.set("salaryRange", "{'entry': 75000, 'mid': 130000, 'senior': 180000}");
    record12.set("jobDemand", "High");
    record12.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record12.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record12.set("roadmap", [{"stage": "Fundamentals", "timeline": "3-4 months", "focus": "Product basics, user research"}, {"stage": "Core Skills", "timeline": "4-6 months", "focus": "Strategy, roadmapping, metrics"}, {"stage": "Advanced", "timeline": "4-6 months", "focus": "Leadership, cross-functional management"}, {"stage": "Expert", "timeline": "6+ months", "focus": "Vision, strategy, organizational impact"}]);
    record12.set("skillsRequired", ["Product Strategy", "User Research", "Data Analysis", "Communication", "Leadership", "Technical Understanding", "Market Analysis", "Roadmapping", "Metrics", "Stakeholder Management"]);
    record12.set("technicalSkills", ["Data Analysis", "SQL", "Analytics tools", "A/B Testing", "User research", "Prototyping", "Technical understanding", "Metrics", "Roadmapping", "Documentation"]);
    record12.set("softSkills", ["Communication", "Leadership", "Strategic thinking", "Empathy", "Negotiation", "Decision-making"]);
    record12.set("tools", ["Jira", "Confluence", "Figma", "Analytics tools", "Mixpanel", "Amplitude", "User research tools", "Roadmap tools"]);
    record12.set("faqs", [{"q": "Do I need technical background?", "a": "Not required, but technical understanding is very helpful"}, {"q": "What's the career path?", "a": "APM \u2192 PM \u2192 Senior PM \u2192 Director \u2192 VP of Product"}]);
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
    record13.set("name", "UX/UI Designer");
    record13.set("slug", "ux-ui-designer");
    record13.set("description", "Creates user-centered designs for digital products, focusing on usability and visual aesthetics.");
    record13.set("overview", "UX/UI designers research user needs and create intuitive, beautiful interfaces that solve problems.");
    record13.set("averageSalary", 95000);
    record13.set("entrySalary", 55000);
    record13.set("midSalary", 95000);
    record13.set("seniorSalary", 140000);
    record13.set("salaryRange", "{'entry': 55000, 'mid': 95000, 'senior': 140000}");
    record13.set("jobDemand", "High");
    record13.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record13.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record13.set("roadmap", [{"stage": "Fundamentals", "timeline": "3-4 months", "focus": "Design principles, tools"}, {"stage": "UX Research", "timeline": "3-4 months", "focus": "User research, wireframing"}, {"stage": "UI Design", "timeline": "3-4 months", "focus": "Visual design, prototyping"}, {"stage": "Advanced", "timeline": "4-6 months", "focus": "Interaction design, systems, leadership"}]);
    record13.set("skillsRequired", ["User Research", "Wireframing", "Prototyping", "Visual Design", "Figma", "User Testing", "Accessibility", "Communication", "Problem-solving", "Design Systems"]);
    record13.set("technicalSkills", ["Figma", "Adobe XD", "Sketch", "Prototyping", "User research", "Wireframing", "Visual design", "HTML/CSS basics", "Accessibility", "Design systems"]);
    record13.set("softSkills", ["Empathy", "Communication", "Creativity", "Problem-solving", "Collaboration", "Attention to detail"]);
    record13.set("tools", ["Figma", "Adobe XD", "Sketch", "Protopie", "UserTesting", "Hotjar", "Miro", "Zeplin"]);
    record13.set("faqs", [{"q": "Do I need to code?", "a": "Not required, but HTML/CSS basics are helpful"}, {"q": "What's the difference between UX and UI?", "a": "UX is about user experience; UI is about visual interface"}]);
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
    record14.set("name", "Business Analyst");
    record14.set("slug", "business-analyst");
    record14.set("description", "Analyzes business processes and requirements, translating them into technical specifications.");
    record14.set("overview", "Business analysts bridge business and technology, ensuring solutions meet organizational needs.");
    record14.set("averageSalary", 90000);
    record14.set("entrySalary", 55000);
    record14.set("midSalary", 90000);
    record14.set("seniorSalary", 135000);
    record14.set("salaryRange", "{'entry': 55000, 'mid': 90000, 'senior': 135000}");
    record14.set("jobDemand", "Medium");
    record14.set("topPayingStates", ["California", "New York", "Massachusetts", "Illinois", "Texas"]);
    record14.set("topStates", ["California", "New York", "Massachusetts", "Illinois", "Texas"]);
    record14.set("roadmap", [{"stage": "Fundamentals", "timeline": "3-4 months", "focus": "Business basics, requirements gathering"}, {"stage": "Core Skills", "timeline": "4-6 months", "focus": "Analysis, documentation, communication"}, {"stage": "Advanced", "timeline": "4-6 months", "focus": "Process improvement, stakeholder management"}, {"stage": "Expert", "timeline": "6+ months", "focus": "Strategy, leadership, organizational impact"}]);
    record14.set("skillsRequired", ["Requirements Gathering", "Process Analysis", "Documentation", "Communication", "Data Analysis", "SQL", "Business Acumen", "Problem-solving", "Stakeholder Management", "Technical Understanding"]);
    record14.set("technicalSkills", ["SQL", "Data analysis", "Process modeling", "Requirements documentation", "Prototyping", "Testing", "Technical understanding", "Metrics", "Reporting", "Tools"]);
    record14.set("softSkills", ["Communication", "Analytical thinking", "Problem-solving", "Stakeholder management", "Negotiation", "Attention to detail"]);
    record14.set("tools", ["Jira", "Confluence", "Visio", "SQL", "Excel", "Tableau", "Lucidchart", "Miro"]);
    record14.set("faqs", [{"q": "What's the difference between BA and PM?", "a": "BAs focus on requirements; PMs focus on strategy and vision"}, {"q": "Do I need technical skills?", "a": "Not required, but SQL and data analysis are very helpful"}]);
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
    record15.set("name", "Systems Administrator");
    record15.set("slug", "systems-administrator");
    record15.set("description", "Manages and maintains computer systems, networks, and user accounts for organizations.");
    record15.set("overview", "Systems administrators ensure IT infrastructure runs smoothly and securely.");
    record15.set("averageSalary", 85000);
    record15.set("entrySalary", 50000);
    record15.set("midSalary", 85000);
    record15.set("seniorSalary", 130000);
    record15.set("salaryRange", "{'entry': 50000, 'mid': 85000, 'senior': 130000}");
    record15.set("jobDemand", "Medium");
    record15.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Virginia"]);
    record15.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Virginia"]);
    record15.set("roadmap", [{"stage": "Fundamentals", "timeline": "3-4 months", "focus": "Windows/Linux, networking basics"}, {"stage": "Administration", "timeline": "4-6 months", "focus": "User management, security, backup"}, {"stage": "Advanced", "timeline": "4-6 months", "focus": "Virtualization, automation, monitoring"}, {"stage": "Expert", "timeline": "6+ months", "focus": "Infrastructure design, cloud, leadership"}]);
    record15.set("skillsRequired", ["Windows/Linux", "Networking", "Active Directory", "Virtualization", "Backup & Recovery", "Security", "Scripting", "Monitoring", "Cloud Services", "Troubleshooting"]);
    record15.set("technicalSkills", ["Windows Server", "Linux", "Active Directory", "Virtualization", "Networking", "Scripting", "Backup tools", "Monitoring", "Cloud services", "Security"]);
    record15.set("softSkills", ["Problem-solving", "Communication", "Attention to detail", "Patience", "Reliability", "Documentation"]);
    record15.set("tools", ["Active Directory", "Windows Server", "Linux", "Hyper-V", "VMware", "Nagios", "Ansible", "Git"]);
    record15.set("faqs", [{"q": "Is sysadmin a good career?", "a": "Yes, stable demand and good growth potential"}, {"q": "Should I learn Windows or Linux?", "a": "Both are valuable; Linux is increasingly important"}]);
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
    record16.set("name", "Network Engineer");
    record16.set("slug", "network-engineer");
    record16.set("description", "Designs, implements, and maintains computer networks for organizations.");
    record16.set("overview", "Network engineers build and manage the infrastructure that connects systems and enables communication.");
    record16.set("averageSalary", 95000);
    record16.set("entrySalary", 60000);
    record16.set("midSalary", 95000);
    record16.set("seniorSalary", 140000);
    record16.set("salaryRange", "{'entry': 60000, 'mid': 95000, 'senior': 140000}");
    record16.set("jobDemand", "Medium");
    record16.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Virginia"]);
    record16.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Virginia"]);
    record16.set("roadmap", [{"stage": "Fundamentals", "timeline": "3-4 months", "focus": "Networking basics, TCP/IP"}, {"stage": "Core Skills", "timeline": "4-6 months", "focus": "Routing, switching, security"}, {"stage": "Advanced", "timeline": "4-6 months", "focus": "Network design, optimization, monitoring"}, {"stage": "Expert", "timeline": "6+ months", "focus": "Enterprise networks, cloud networking, leadership"}]);
    record16.set("skillsRequired", ["Networking", "TCP/IP", "Routing", "Switching", "Firewalls", "VPN", "Network Security", "Monitoring", "Scripting", "Cloud Networking"]);
    record16.set("technicalSkills", ["Cisco", "Routing", "Switching", "Firewalls", "VPN", "Network security", "Monitoring", "Scripting", "Cloud networking", "Troubleshooting"]);
    record16.set("softSkills", ["Problem-solving", "Communication", "Attention to detail", "Patience", "Analytical thinking", "Documentation"]);
    record16.set("tools", ["Cisco IOS", "Wireshark", "Packet Tracer", "Nagios", "Splunk", "Firewalls", "VPN tools", "Git"]);
    record16.set("faqs", [{"q": "Do I need certifications?", "a": "Yes, CCNA or similar Cisco certifications are highly valued"}, {"q": "Is networking still relevant?", "a": "Yes, especially with cloud and SDN technologies"}]);
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
    record17.set("name", "Security Analyst");
    record17.set("slug", "security-analyst");
    record17.set("description", "Monitors and analyzes security threats, implements security measures, and responds to incidents.");
    record17.set("overview", "Security analysts protect organizations by detecting and responding to security threats.");
    record17.set("averageSalary", 105000);
    record17.set("entrySalary", 65000);
    record17.set("midSalary", 105000);
    record17.set("seniorSalary", 155000);
    record17.set("salaryRange", "{'entry': 65000, 'mid': 105000, 'senior': 155000}");
    record17.set("jobDemand", "High");
    record17.set("topPayingStates", ["California", "Virginia", "Massachusetts", "New York", "Washington"]);
    record17.set("topStates", ["California", "Virginia", "Massachusetts", "New York", "Washington"]);
    record17.set("roadmap", [{"stage": "Fundamentals", "timeline": "3-4 months", "focus": "Security basics, networking"}, {"stage": "Threat Detection", "timeline": "4-6 months", "focus": "SIEM, monitoring, analysis"}, {"stage": "Incident Response", "timeline": "4-6 months", "focus": "Incident handling, forensics"}, {"stage": "Expert", "timeline": "6+ months", "focus": "Threat intelligence, strategy, leadership"}]);
    record17.set("skillsRequired", ["SIEM", "Threat Detection", "Incident Response", "Networking", "Linux", "Scripting", "Forensics", "Compliance", "Communication", "Analysis"]);
    record17.set("technicalSkills", ["SIEM tools", "Splunk", "ELK Stack", "Networking", "Linux", "Scripting", "Forensics", "Threat intelligence", "Compliance", "Monitoring"]);
    record17.set("softSkills", ["Analytical thinking", "Problem-solving", "Communication", "Attention to detail", "Stress management", "Collaboration"]);
    record17.set("tools", ["Splunk", "ELK Stack", "Wireshark", "Metasploit", "Nessus", "Burp Suite", "Git", "Incident management tools"]);
    record17.set("faqs", [{"q": "Do I need certifications?", "a": "Yes, Security+, CEH, or CISSP are valuable"}, {"q": "What's the difference between security analyst and engineer?", "a": "Analysts detect threats; engineers build security systems"}]);
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
    record18.set("name", "Data Engineer");
    record18.set("slug", "data-engineer");
    record18.set("description", "Builds and maintains data pipelines and infrastructure for data processing and analytics.");
    record18.set("overview", "Data engineers create the systems that enable data scientists and analysts to work with data.");
    record18.set("averageSalary", 120000);
    record18.set("entrySalary", 75000);
    record18.set("midSalary", 120000);
    record18.set("seniorSalary", 170000);
    record18.set("salaryRange", "{'entry': 75000, 'mid': 120000, 'senior': 170000}");
    record18.set("jobDemand", "High");
    record18.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Illinois"]);
    record18.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Illinois"]);
    record18.set("roadmap", [{"stage": "Fundamentals", "timeline": "3-4 months", "focus": "SQL, Python, databases"}, {"stage": "Data Pipelines", "timeline": "4-6 months", "focus": "ETL, Apache tools, data warehousing"}, {"stage": "Big Data", "timeline": "4-6 months", "focus": "Spark, Hadoop, distributed systems"}, {"stage": "Advanced", "timeline": "6+ months", "focus": "Architecture, optimization, cloud data platforms"}]);
    record18.set("skillsRequired", ["SQL", "Python", "ETL", "Apache Spark", "Hadoop", "Data Warehousing", "Cloud Platforms", "Git", "Databases", "Scripting"]);
    record18.set("technicalSkills", ["Python", "SQL", "Spark", "Hadoop", "Kafka", "Airflow", "Cloud platforms", "Databases", "Git", "Scripting"]);
    record18.set("softSkills", ["Problem-solving", "Communication", "Attention to detail", "Collaboration", "System thinking", "Documentation"]);
    record18.set("tools", ["Python", "SQL", "Spark", "Hadoop", "Kafka", "Airflow", "Git", "Cloud platforms"]);
    record18.set("faqs", [{"q": "What's the difference between data engineer and data scientist?", "a": "Engineers build systems; scientists analyze data"}, {"q": "Do I need to know Spark?", "a": "Yes, Spark is essential for big data processing"}]);
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
    record19.set("name", "AI Engineer");
    record19.set("slug", "ai-engineer");
    record19.set("description", "Develops and deploys artificial intelligence systems and applications.");
    record19.set("overview", "AI engineers build intelligent systems that can learn and make decisions.");
    record19.set("averageSalary", 135000);
    record19.set("entrySalary", 85000);
    record19.set("midSalary", 135000);
    record19.set("seniorSalary", 185000);
    record19.set("salaryRange", "{'entry': 85000, 'mid': 135000, 'senior': 185000}");
    record19.set("jobDemand", "High");
    record19.set("topPayingStates", ["California", "New York", "Massachusetts", "Washington", "Colorado"]);
    record19.set("topStates", ["California", "New York", "Massachusetts", "Washington", "Colorado"]);
    record19.set("roadmap", [{"stage": "Fundamentals", "timeline": "4-6 months", "focus": "Python, ML basics, math"}, {"stage": "Deep Learning", "timeline": "4-6 months", "focus": "Neural networks, TensorFlow, PyTorch"}, {"stage": "NLP/Computer Vision", "timeline": "4-6 months", "focus": "Specialized AI domains"}, {"stage": "Production", "timeline": "6+ months", "focus": "Deployment, optimization, scaling"}]);
    record19.set("skillsRequired", ["Python", "Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "NLP", "Computer Vision", "Math", "Git", "Cloud Services"]);
    record19.set("technicalSkills", ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision", "Transformers", "LLMs", "Docker", "Kubernetes", "Cloud platforms"]);
    record19.set("softSkills", ["Research mindset", "Problem-solving", "Communication", "Collaboration", "Continuous learning", "Creativity"]);
    record19.set("tools", ["Python", "TensorFlow", "PyTorch", "Jupyter", "Git", "Docker", "Hugging Face", "Cloud platforms"]);
    record19.set("faqs", [{"q": "What's the difference between AI and ML engineer?", "a": "AI is broader; ML is a subset focused on learning algorithms"}, {"q": "Do I need a PhD?", "a": "Not required, but strong math and CS fundamentals are important"}]);
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
    record20.set("name", "Blockchain Developer");
    record20.set("slug", "blockchain-developer");
    record20.set("description", "Develops applications and smart contracts on blockchain platforms.");
    record20.set("overview", "Blockchain developers build decentralized applications and smart contracts.");
    record20.set("averageSalary", 125000);
    record20.set("entrySalary", 75000);
    record20.set("midSalary", 125000);
    record20.set("seniorSalary", 175000);
    record20.set("salaryRange", "{'entry': 75000, 'mid': 125000, 'senior': 175000}");
    record20.set("jobDemand", "Medium");
    record20.set("topPayingStates", ["California", "New York", "Massachusetts", "Washington", "Colorado"]);
    record20.set("topStates", ["California", "New York", "Massachusetts", "Washington", "Colorado"]);
    record20.set("roadmap", [{"stage": "Fundamentals", "timeline": "3-4 months", "focus": "Blockchain basics, cryptography"}, {"stage": "Smart Contracts", "timeline": "4-6 months", "focus": "Solidity, Ethereum, development"}, {"stage": "Advanced", "timeline": "4-6 months", "focus": "DeFi, security, optimization"}, {"stage": "Expert", "timeline": "6+ months", "focus": "Architecture, auditing, leadership"}]);
    record20.set("skillsRequired", ["Solidity", "Ethereum", "Smart Contracts", "Cryptography", "JavaScript", "Web3", "Git", "Security", "Testing", "DeFi"]);
    record20.set("technicalSkills", ["Solidity", "Ethereum", "Web3.js", "Hardhat", "Truffle", "JavaScript", "Cryptography", "Git", "Testing", "Security"]);
    record20.set("softSkills", ["Problem-solving", "Security mindset", "Communication", "Attention to detail", "Continuous learning", "Collaboration"]);
    record20.set("tools", ["Solidity", "Hardhat", "Truffle", "Remix", "Web3.js", "Etherscan", "Git", "Testing frameworks"]);
    record20.set("faqs", [{"q": "Is blockchain development worth learning?", "a": "Yes, growing field with good opportunities"}, {"q": "Do I need to understand cryptography?", "a": "Yes, it's fundamental to blockchain security"}]);
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
    record21.set("description", "Develops video games using game engines and programming languages.");
    record21.set("overview", "Game developers create interactive entertainment experiences.");
    record21.set("averageSalary", 100000);
    record21.set("entrySalary", 60000);
    record21.set("midSalary", 100000);
    record21.set("seniorSalary", 150000);
    record21.set("salaryRange", "{'entry': 60000, 'mid': 100000, 'senior': 150000}");
    record21.set("jobDemand", "Medium");
    record21.set("topPayingStates", ["California", "Washington", "Texas", "New York", "Massachusetts"]);
    record21.set("topStates", ["California", "Washington", "Texas", "New York", "Massachusetts"]);
    record21.set("roadmap", [{"stage": "Fundamentals", "timeline": "3-4 months", "focus": "Game design, engine basics"}, {"stage": "Game Development", "timeline": "4-6 months", "focus": "C#/C++, game mechanics, physics"}, {"stage": "Advanced", "timeline": "4-6 months", "focus": "Graphics, optimization, multiplayer"}, {"stage": "Expert", "timeline": "6+ months", "focus": "Engine architecture, leadership, innovation"}]);
    record21.set("skillsRequired", ["C#/C++", "Unity/Unreal", "Game Design", "Physics", "Graphics", "Git", "Problem-solving", "Creativity", "Collaboration", "Performance Optimization"]);
    record21.set("technicalSkills", ["C#", "C++", "Unity", "Unreal Engine", "Physics engines", "Graphics programming", "Git", "Networking", "Audio", "Animation"]);
    record21.set("softSkills", ["Creativity", "Problem-solving", "Collaboration", "Communication", "Attention to detail", "Passion for games"]);
    record21.set("tools", ["Unity", "Unreal Engine", "C#", "C++", "Git", "Blender", "Visual Studio", "Perforce"]);
    record21.set("faqs", [{"q": "Should I learn Unity or Unreal?", "a": "Both are valuable; Unity is more accessible for beginners"}, {"q": "Do I need art skills?", "a": "Not required, but understanding art helps collaboration"}]);
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
    record22.set("name", "Embedded Systems Engineer");
    record22.set("slug", "embedded-systems-engineer");
    record22.set("description", "Develops software for embedded systems and IoT devices.");
    record22.set("overview", "Embedded systems engineers create software for devices with limited resources.");
    record22.set("averageSalary", 105000);
    record22.set("entrySalary", 65000);
    record22.set("midSalary", 105000);
    record22.set("seniorSalary", 155000);
    record22.set("salaryRange", "{'entry': 65000, 'mid': 105000, 'senior': 155000}");
    record22.set("jobDemand", "Medium");
    record22.set("topPayingStates", ["California", "Texas", "Massachusetts", "Washington", "New York"]);
    record22.set("topStates", ["California", "Texas", "Massachusetts", "Washington", "New York"]);
    record22.set("roadmap", [{"stage": "Fundamentals", "timeline": "4-6 months", "focus": "C/C++, microcontrollers, hardware"}, {"stage": "Embedded Development", "timeline": "4-6 months", "focus": "RTOS, drivers, firmware"}, {"stage": "Advanced", "timeline": "4-6 months", "focus": "Optimization, debugging, protocols"}, {"stage": "Expert", "timeline": "6+ months", "focus": "System design, IoT, leadership"}]);
    record22.set("skillsRequired", ["C/C++", "Microcontrollers", "RTOS", "Hardware", "Firmware", "Debugging", "Protocols", "Git", "Testing", "Problem-solving"]);
    record22.set("technicalSkills", ["C", "C++", "Assembly", "RTOS", "Microcontrollers", "Firmware", "Debugging", "Protocols", "Git", "Hardware knowledge"]);
    record22.set("softSkills", ["Problem-solving", "Attention to detail", "Patience", "Communication", "Analytical thinking", "Persistence"]);
    record22.set("tools", ["GCC", "GDB", "JTAG debuggers", "Oscilloscope", "Logic analyzer", "Git", "Embedded IDEs", "RTOS"]);
    record22.set("faqs", [{"q": "Do I need hardware knowledge?", "a": "Yes, understanding hardware is essential"}, {"q": "Is embedded development hard?", "a": "It requires patience and attention to detail, but very rewarding"}]);
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
    record23.set("name", "IoT Developer");
    record23.set("slug", "iot-developer");
    record23.set("description", "Develops applications and systems for Internet of Things devices and platforms.");
    record23.set("overview", "IoT developers create connected systems that collect and process data from physical devices.");
    record23.set("averageSalary", 110000);
    record23.set("entrySalary", 70000);
    record23.set("midSalary", 110000);
    record23.set("seniorSalary", 160000);
    record23.set("salaryRange", "{'entry': 70000, 'mid': 110000, 'senior': 160000}");
    record23.set("jobDemand", "High");
    record23.set("topPayingStates", ["California", "Texas", "Washington", "Massachusetts", "New York"]);
    record23.set("topStates", ["California", "Texas", "Washington", "Massachusetts", "New York"]);
    record23.set("roadmap", [{"stage": "Fundamentals", "timeline": "3-4 months", "focus": "IoT basics, protocols, hardware"}, {"stage": "Device Development", "timeline": "4-6 months", "focus": "Embedded systems, sensors, connectivity"}, {"stage": "Cloud Integration", "timeline": "4-6 months", "focus": "Cloud platforms, data processing"}, {"stage": "Advanced", "timeline": "6+ months", "focus": "System design, security, scalability"}]);
    record23.set("skillsRequired", ["Python", "C/C++", "IoT Protocols", "Cloud Platforms", "Sensors", "Microcontrollers", "Networking", "Git", "Data Processing", "Security"]);
    record23.set("technicalSkills", ["Python", "C/C++", "MQTT", "CoAP", "Bluetooth", "WiFi", "Cloud platforms", "Sensors", "Microcontrollers", "Data processing"]);
    record23.set("softSkills", ["Problem-solving", "Communication", "Collaboration", "System thinking", "Attention to detail", "Continuous learning"]);
    record23.set("tools", ["Python", "Arduino", "Raspberry Pi", "MQTT", "Cloud platforms", "Git", "Sensors", "Microcontrollers"]);
    record23.set("faqs", [{"q": "What's the difference between IoT and embedded?", "a": "IoT focuses on connected systems; embedded is broader"}, {"q": "Which cloud platform for IoT?", "a": "AWS IoT, Azure IoT, and Google Cloud IoT are all popular"}]);
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
    record24.set("name", "AR/VR Developer");
    record24.set("slug", "ar-vr-developer");
    record24.set("description", "Develops augmented and virtual reality applications and experiences.");
    record24.set("overview", "AR/VR developers create immersive experiences using specialized technologies.");
    record24.set("averageSalary", 115000);
    record24.set("entrySalary", 70000);
    record24.set("midSalary", 115000);
    record24.set("seniorSalary", 165000);
    record24.set("salaryRange", "{'entry': 70000, 'mid': 115000, 'senior': 165000}");
    record24.set("jobDemand", "Medium");
    record24.set("topPayingStates", ["California", "Washington", "Massachusetts", "New York", "Texas"]);
    record24.set("topStates", ["California", "Washington", "Massachusetts", "New York", "Texas"]);
    record24.set("roadmap", [{"stage": "Fundamentals", "timeline": "3-4 months", "focus": "3D graphics, game engines"}, {"stage": "AR/VR Basics", "timeline": "4-6 months", "focus": "ARKit/ARCore, VR development"}, {"stage": "Advanced", "timeline": "4-6 months", "focus": "Interaction design, optimization"}, {"stage": "Expert", "timeline": "6+ months", "focus": "System design, innovation, leadership"}]);
    record24.set("skillsRequired", ["C#", "Unity/Unreal", "3D Graphics", "ARKit/ARCore", "Physics", "Interaction Design", "Git", "Problem-solving", "Creativity", "Performance"]);
    record24.set("technicalSkills", ["C#", "C++", "Unity", "Unreal", "ARKit", "ARCore", "3D graphics", "Physics", "Git", "Networking"]);
    record24.set("softSkills", ["Creativity", "Problem-solving", "Attention to detail", "Communication", "Collaboration", "Spatial thinking"]);
    record24.set("tools", ["Unity", "Unreal Engine", "ARKit", "ARCore", "Blender", "Visual Studio", "Git", "3D modeling tools"]);
    record24.set("faqs", [{"q": "Is AR/VR a growing field?", "a": "Yes, rapidly growing with many opportunities"}, {"q": "Do I need 3D modeling skills?", "a": "Not required, but helpful for understanding 3D concepts"}]);
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
    record25.set("name", "Site Reliability Engineer");
    record25.set("slug", "site-reliability-engineer");
    record25.set("description", "Ensures reliability, performance, and scalability of production systems.");
    record25.set("overview", "SREs apply software engineering principles to operations and infrastructure.");
    record25.set("averageSalary", 130000);
    record25.set("entrySalary", 80000);
    record25.set("midSalary", 130000);
    record25.set("seniorSalary", 180000);
    record25.set("salaryRange", "{'entry': 80000, 'mid': 130000, 'senior': 180000}");
    record25.set("jobDemand", "High");
    record25.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record25.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record25.set("roadmap", [{"stage": "Fundamentals", "timeline": "4-6 months", "focus": "Linux, networking, basics"}, {"stage": "DevOps", "timeline": "4-6 months", "focus": "Docker, Kubernetes, CI/CD"}, {"stage": "SRE Practices", "timeline": "4-6 months", "focus": "Monitoring, incident response, automation"}, {"stage": "Advanced", "timeline": "6+ months", "focus": "System design, reliability engineering, leadership"}]);
    record25.set("skillsRequired", ["Linux", "Docker", "Kubernetes", "Monitoring", "Incident Response", "Scripting", "Cloud Platforms", "Git", "Databases", "Networking"]);
    record25.set("technicalSkills", ["Linux", "Docker", "Kubernetes", "Prometheus", "Grafana", "ELK Stack", "Scripting", "Cloud platforms", "Git", "Databases"]);
    record25.set("softSkills", ["Problem-solving", "Communication", "Incident management", "Collaboration", "Attention to detail", "Stress management"]);
    record25.set("tools", ["Docker", "Kubernetes", "Prometheus", "Grafana", "ELK Stack", "Git", "Cloud platforms", "Incident management tools"]);
    record25.set("faqs", [{"q": "What's the difference between SRE and DevOps?", "a": "SREs focus on reliability; DevOps is broader operations"}, {"q": "Do I need to be a developer?", "a": "Not required, but programming skills are very helpful"}]);
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
    record26.set("name", "Technical Writer");
    record26.set("slug", "technical-writer");
    record26.set("description", "Creates technical documentation, guides, and manuals for software and systems.");
    record26.set("overview", "Technical writers translate complex technical information into clear, accessible documentation.");
    record26.set("averageSalary", 80000);
    record26.set("entrySalary", 50000);
    record26.set("midSalary", 80000);
    record26.set("seniorSalary", 120000);
    record26.set("salaryRange", "{'entry': 50000, 'mid': 80000, 'senior': 120000}");
    record26.set("jobDemand", "Medium");
    record26.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record26.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record26.set("roadmap", [{"stage": "Fundamentals", "timeline": "2-3 months", "focus": "Writing basics, technical understanding"}, {"stage": "Documentation", "timeline": "3-4 months", "focus": "Tools, formats, best practices"}, {"stage": "Advanced", "timeline": "4-6 months", "focus": "Information architecture, user research"}, {"stage": "Expert", "timeline": "6+ months", "focus": "Strategy, leadership, content management"}]);
    record26.set("skillsRequired", ["Technical Writing", "Communication", "Technical Understanding", "Documentation Tools", "Git", "Markdown", "User Research", "Organization", "Attention to Detail", "Problem-solving"]);
    record26.set("technicalSkills", ["Markdown", "Git", "Documentation tools", "HTML/CSS basics", "API documentation", "Diagrams", "Version control", "Technical understanding", "Tools", "Publishing"]);
    record26.set("softSkills", ["Communication", "Clarity", "Organization", "Attention to detail", "Empathy", "Collaboration"]);
    record26.set("tools", ["Markdown", "Git", "Confluence", "Sphinx", "MkDocs", "Figma", "Jira", "VS Code"]);
    record26.set("faqs", [{"q": "Do I need technical background?", "a": "Not required, but technical understanding is very helpful"}, {"q": "Is technical writing a good career?", "a": "Yes, stable demand and good growth potential"}]);
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
    record27.set("name", "Solutions Engineer");
    record27.set("slug", "solutions-engineer");
    record27.set("description", "Designs and implements technical solutions for clients, bridging sales and engineering.");
    record27.set("overview", "Solutions engineers work with clients to understand needs and design appropriate technical solutions.");
    record27.set("averageSalary", 120000);
    record27.set("entrySalary", 75000);
    record27.set("midSalary", 120000);
    record27.set("seniorSalary", 170000);
    record27.set("salaryRange", "{'entry': 75000, 'mid': 120000, 'senior': 170000}");
    record27.set("jobDemand", "High");
    record27.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Illinois"]);
    record27.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Illinois"]);
    record27.set("roadmap", [{"stage": "Technical Foundation", "timeline": "4-6 months", "focus": "Development, architecture basics"}, {"stage": "Product Knowledge", "timeline": "3-4 months", "focus": "Company products, use cases"}, {"stage": "Client Engagement", "timeline": "4-6 months", "focus": "Communication, requirements gathering"}, {"stage": "Advanced", "timeline": "6+ months", "focus": "Strategy, complex solutions, leadership"}]);
    record27.set("skillsRequired", ["System Design", "Communication", "Technical Knowledge", "Problem-solving", "Client Management", "Presentation", "Documentation", "Cloud Platforms", "Databases", "Networking"]);
    record27.set("technicalSkills", ["System design", "Cloud platforms", "Databases", "Networking", "APIs", "Security", "Scripting", "Git", "Monitoring", "Documentation"]);
    record27.set("softSkills", ["Communication", "Presentation", "Client management", "Problem-solving", "Collaboration", "Negotiation"]);
    record27.set("tools", ["Visio", "Lucidchart", "Cloud platforms", "Git", "Jira", "Confluence", "Presentation tools", "Demo environments"]);
    record27.set("faqs", [{"q": "Do I need sales skills?", "a": "Not required, but communication and presentation skills are important"}, {"q": "What's the career path?", "a": "Solutions Engineer \u2192 Senior SE \u2192 Solutions Architect \u2192 Director"}]);
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
    record28.set("name", "Support Engineer");
    record28.set("slug", "support-engineer");
    record28.set("description", "Provides technical support to customers and helps resolve issues with products.");
    record28.set("overview", "Support engineers help customers succeed by providing technical assistance and troubleshooting.");
    record28.set("averageSalary", 75000);
    record28.set("entrySalary", 45000);
    record28.set("midSalary", 75000);
    record28.set("seniorSalary", 115000);
    record28.set("salaryRange", "{'entry': 45000, 'mid': 75000, 'senior': 115000}");
    record28.set("jobDemand", "Medium");
    record28.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record28.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record28.set("roadmap", [{"stage": "Fundamentals", "timeline": "2-3 months", "focus": "Product knowledge, support basics"}, {"stage": "Technical Skills", "timeline": "3-4 months", "focus": "Troubleshooting, debugging, tools"}, {"stage": "Advanced", "timeline": "4-6 months", "focus": "Complex issues, documentation, training"}, {"stage": "Expert", "timeline": "6+ months", "focus": "Leadership, strategy, customer success"}]);
    record28.set("skillsRequired", ["Communication", "Problem-solving", "Technical Knowledge", "Patience", "Troubleshooting", "Documentation", "Customer Service", "Tools", "Git", "Databases"]);
    record28.set("technicalSkills", ["Troubleshooting", "Debugging", "Product knowledge", "Databases", "APIs", "Scripting", "Git", "Monitoring", "Tools", "Documentation"]);
    record28.set("softSkills", ["Communication", "Patience", "Problem-solving", "Empathy", "Customer service", "Attention to detail"]);
    record28.set("tools", ["Support ticketing systems", "Git", "Databases", "Debugging tools", "Monitoring tools", "Documentation", "Chat tools", "Video conferencing"]);
    record28.set("faqs", [{"q": "Is support a good career path?", "a": "Yes, good entry point to tech with growth opportunities"}, {"q": "Can I move to engineering?", "a": "Yes, many engineers start in support roles"}]);
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
    record29.set("name", "Release Manager");
    record29.set("slug", "release-manager");
    record29.set("description", "Manages software releases, coordinates deployments, and ensures smooth release processes.");
    record29.set("overview", "Release managers oversee the planning and execution of software releases.");
    record29.set("averageSalary", 105000);
    record29.set("entrySalary", 65000);
    record29.set("midSalary", 105000);
    record29.set("seniorSalary", 155000);
    record29.set("salaryRange", "{'entry': 65000, 'mid': 105000, 'senior': 155000}");
    record29.set("jobDemand", "Medium");
    record29.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Illinois"]);
    record29.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Illinois"]);
    record29.set("roadmap", [{"stage": "Fundamentals", "timeline": "3-4 months", "focus": "Release processes, tools"}, {"stage": "Coordination", "timeline": "4-6 months", "focus": "Planning, communication, tracking"}, {"stage": "Advanced", "timeline": "4-6 months", "focus": "Automation, optimization, risk management"}, {"stage": "Expert", "timeline": "6+ months", "focus": "Strategy, leadership, continuous delivery"}]);
    record29.set("skillsRequired", ["Release Management", "Communication", "Project Management", "Git", "CI/CD", "Problem-solving", "Documentation", "Tools", "Coordination", "Risk Management"]);
    record29.set("technicalSkills", ["Git", "CI/CD tools", "Release tools", "Scripting", "Databases", "Monitoring", "Documentation", "Automation", "Tools", "Troubleshooting"]);
    record29.set("softSkills", ["Communication", "Organization", "Leadership", "Problem-solving", "Coordination", "Attention to detail"]);
    record29.set("tools", ["Git", "Jenkins", "GitLab CI", "Jira", "Confluence", "Release tools", "Monitoring tools", "Documentation"]);
    record29.set("faqs", [{"q": "Do I need development experience?", "a": "Not required, but technical understanding is helpful"}, {"q": "What's the career path?", "a": "Release Manager \u2192 Senior RM \u2192 Release Engineering Manager"}]);
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
    record30.set("name", "Build Engineer");
    record30.set("slug", "build-engineer");
    record30.set("description", "Develops and maintains build systems, automation, and infrastructure for software development.");
    record30.set("overview", "Build engineers create and optimize build systems that enable efficient software development.");
    record30.set("averageSalary", 115000);
    record30.set("entrySalary", 70000);
    record30.set("midSalary", 115000);
    record30.set("seniorSalary", 165000);
    record30.set("salaryRange", "{'entry': 70000, 'mid': 115000, 'senior': 165000}");
    record30.set("jobDemand", "Medium");
    record30.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record30.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record30.set("roadmap", [{"stage": "Fundamentals", "timeline": "3-4 months", "focus": "Build systems, scripting"}, {"stage": "Build Tools", "timeline": "4-6 months", "focus": "Maven, Gradle, Bazel, CMake"}, {"stage": "Advanced", "timeline": "4-6 months", "focus": "Optimization, CI/CD integration"}, {"stage": "Expert", "timeline": "6+ months", "focus": "Architecture, scalability, leadership"}]);
    record30.set("skillsRequired", ["Build Systems", "Scripting", "CI/CD", "Git", "Automation", "Problem-solving", "Documentation", "Tools", "Databases", "Monitoring"]);
    record30.set("technicalSkills", ["Maven", "Gradle", "Bazel", "CMake", "Scripting", "Git", "CI/CD", "Docker", "Kubernetes", "Automation"]);
    record30.set("softSkills", ["Problem-solving", "Communication", "Attention to detail", "Collaboration", "System thinking", "Documentation"]);
    record30.set("tools", ["Maven", "Gradle", "Bazel", "CMake", "Git", "Jenkins", "Docker", "Kubernetes"]);
    record30.set("faqs", [{"q": "Do I need development experience?", "a": "Yes, understanding development is important"}, {"q": "What build systems should I learn?", "a": "Maven and Gradle are most common; Bazel is growing"}]);
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
    record31.set("name", "Platform Engineer");
    record31.set("slug", "platform-engineer");
    record31.set("description", "Builds and maintains internal platforms that enable development teams to work efficiently.");
    record31.set("overview", "Platform engineers create infrastructure and tools that improve developer productivity.");
    record31.set("averageSalary", 125000);
    record31.set("entrySalary", 75000);
    record31.set("midSalary", 125000);
    record31.set("seniorSalary", 175000);
    record31.set("salaryRange", "{'entry': 75000, 'mid': 125000, 'senior': 175000}");
    record31.set("jobDemand", "High");
    record31.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record31.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record31.set("roadmap", [{"stage": "Fundamentals", "timeline": "4-6 months", "focus": "Development, infrastructure basics"}, {"stage": "Platform Development", "timeline": "4-6 months", "focus": "APIs, tools, automation"}, {"stage": "Advanced", "timeline": "4-6 months", "focus": "Scalability, reliability, optimization"}, {"stage": "Expert", "timeline": "6+ months", "focus": "Architecture, strategy, leadership"}]);
    record31.set("skillsRequired", ["System Design", "APIs", "Cloud Platforms", "Kubernetes", "Scripting", "Git", "Databases", "Monitoring", "Problem-solving", "Communication"]);
    record31.set("technicalSkills", ["System design", "APIs", "Kubernetes", "Cloud platforms", "Scripting", "Git", "Databases", "Monitoring", "Docker", "Automation"]);
    record31.set("softSkills", ["Problem-solving", "Communication", "Collaboration", "System thinking", "Attention to detail", "Leadership"]);
    record31.set("tools", ["Kubernetes", "Cloud platforms", "Git", "Docker", "Monitoring tools", "APIs", "Scripting", "Databases"]);
    record31.set("faqs", [{"q": "What's the difference between platform and DevOps engineer?", "a": "Platform engineers focus on developer experience; DevOps on operations"}, {"q": "Is platform engineering a new field?", "a": "Yes, rapidly growing with high demand"}]);
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
    record32.set("name", "Infrastructure Engineer");
    record32.set("slug", "infrastructure-engineer");
    record32.set("description", "Designs and manages IT infrastructure including servers, networks, and storage.");
    record32.set("overview", "Infrastructure engineers build and maintain the foundation that supports all IT operations.");
    record32.set("averageSalary", 110000);
    record32.set("entrySalary", 65000);
    record32.set("midSalary", 110000);
    record32.set("seniorSalary", 160000);
    record32.set("salaryRange", "{'entry': 65000, 'mid': 110000, 'senior': 160000}");
    record32.set("jobDemand", "Medium");
    record32.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Virginia"]);
    record32.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Virginia"]);
    record32.set("roadmap", [{"stage": "Fundamentals", "timeline": "4-6 months", "focus": "Networking, servers, basics"}, {"stage": "Infrastructure", "timeline": "4-6 months", "focus": "Virtualization, storage, security"}, {"stage": "Advanced", "timeline": "4-6 months", "focus": "Cloud, automation, optimization"}, {"stage": "Expert", "timeline": "6+ months", "focus": "Architecture, strategy, leadership"}]);
    record32.set("skillsRequired", ["Networking", "Virtualization", "Cloud Platforms", "Storage", "Security", "Scripting", "Monitoring", "Git", "Databases", "Problem-solving"]);
    record32.set("technicalSkills", ["Networking", "Virtualization", "Cloud platforms", "Storage", "Security", "Scripting", "Monitoring", "Git", "Databases", "Automation"]);
    record32.set("softSkills", ["Problem-solving", "Communication", "Attention to detail", "Collaboration", "System thinking", "Documentation"]);
    record32.set("tools", ["Virtualization tools", "Cloud platforms", "Networking tools", "Monitoring tools", "Scripting", "Git", "Storage tools", "Security tools"]);
    record32.set("faqs", [{"q": "Is infrastructure engineering still relevant?", "a": "Yes, especially with cloud and hybrid infrastructure"}, {"q": "Should I learn cloud?", "a": "Yes, cloud knowledge is increasingly important"}]);
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
    record33.set("name", "Security Architect");
    record33.set("slug", "security-architect");
    record33.set("description", "Designs comprehensive security solutions and strategies for organizations.");
    record33.set("overview", "Security architects create security frameworks and strategies to protect organizations.");
    record33.set("averageSalary", 145000);
    record33.set("entrySalary", 90000);
    record33.set("midSalary", 145000);
    record33.set("seniorSalary", 195000);
    record33.set("salaryRange", "{'entry': 90000, 'mid': 145000, 'senior': 195000}");
    record33.set("jobDemand", "High");
    record33.set("topPayingStates", ["California", "Virginia", "Massachusetts", "New York", "Washington"]);
    record33.set("topStates", ["California", "Virginia", "Massachusetts", "New York", "Washington"]);
    record33.set("roadmap", [{"stage": "Fundamentals", "timeline": "4-6 months", "focus": "Security basics, networking"}, {"stage": "Security Engineering", "timeline": "4-6 months", "focus": "Cryptography, systems, threats"}, {"stage": "Architecture", "timeline": "4-6 months", "focus": "Design patterns, compliance, strategy"}, {"stage": "Expert", "timeline": "6+ months", "focus": "Enterprise security, leadership, innovation"}]);
    record33.set("skillsRequired", ["Security Architecture", "Cryptography", "Networking", "Cloud Security", "Compliance", "Risk Management", "Leadership", "Communication", "System Design", "Threat Intelligence"]);
    record33.set("technicalSkills", ["Security architecture", "Cryptography", "Networking", "Cloud security", "Compliance", "Risk management", "Threat intelligence", "Monitoring", "Incident response", "Forensics"]);
    record33.set("softSkills", ["Strategic thinking", "Leadership", "Communication", "Problem-solving", "Decision-making", "Business acumen"]);
    record33.set("tools", ["Security tools", "Cloud platforms", "Monitoring tools", "Threat intelligence", "Compliance tools", "Visio", "Git", "Documentation"]);
    record33.set("faqs", [{"q": "Do I need certifications?", "a": "Yes, CISSP or similar certifications are highly valued"}, {"q": "What's the career path?", "a": "Security Engineer \u2192 Security Architect \u2192 Chief Security Officer"}]);
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
    record34.set("name", "Enterprise Architect");
    record34.set("slug", "enterprise-architect");
    record34.set("description", "Designs enterprise-wide IT solutions and strategies aligned with business goals.");
    record34.set("overview", "Enterprise architects create comprehensive IT strategies and solutions for large organizations.");
    record34.set("averageSalary", 155000);
    record34.set("entrySalary", 95000);
    record34.set("midSalary", 155000);
    record34.set("seniorSalary", 205000);
    record34.set("salaryRange", "{'entry': 95000, 'mid': 155000, 'senior': 205000}");
    record34.set("jobDemand", "High");
    record34.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Illinois"]);
    record34.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Illinois"]);
    record34.set("roadmap", [{"stage": "Technical Foundation", "timeline": "4-6 months", "focus": "Development, architecture basics"}, {"stage": "Solution Architecture", "timeline": "4-6 months", "focus": "Design patterns, systems"}, {"stage": "Enterprise Architecture", "timeline": "4-6 months", "focus": "Strategy, governance, alignment"}, {"stage": "Expert", "timeline": "6+ months", "focus": "Organizational strategy, leadership, innovation"}]);
    record34.set("skillsRequired", ["Enterprise Architecture", "System Design", "Business Strategy", "Governance", "Cloud Platforms", "Leadership", "Communication", "Risk Management", "Compliance", "Change Management"]);
    record34.set("technicalSkills", ["Enterprise architecture", "System design", "Cloud platforms", "Databases", "Networking", "Security", "Governance", "Compliance", "Monitoring", "Documentation"]);
    record34.set("softSkills", ["Strategic thinking", "Leadership", "Communication", "Business acumen", "Decision-making", "Stakeholder management"]);
    record34.set("tools", ["Visio", "Lucidchart", "Cloud platforms", "Governance tools", "Compliance tools", "Git", "Documentation", "Project management"]);
    record34.set("faqs", [{"q": "Do I need certifications?", "a": "TOGAF or similar certifications are valuable"}, {"q": "What's the career path?", "a": "Solutions Architect \u2192 Enterprise Architect \u2192 CTO/Chief Architect"}]);
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
    record35.set("name", "Integration Engineer");
    record35.set("slug", "integration-engineer");
    record35.set("description", "Integrates different systems and applications to work together seamlessly.");
    record35.set("overview", "Integration engineers connect disparate systems to create unified solutions.");
    record35.set("averageSalary", 115000);
    record35.set("entrySalary", 70000);
    record35.set("midSalary", 115000);
    record35.set("seniorSalary", 165000);
    record35.set("salaryRange", "{'entry': 70000, 'mid': 115000, 'senior': 165000}");
    record35.set("jobDemand", "Medium");
    record35.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Illinois"]);
    record35.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Illinois"]);
    record35.set("roadmap", [{"stage": "Fundamentals", "timeline": "3-4 months", "focus": "APIs, integration basics"}, {"stage": "Integration Patterns", "timeline": "4-6 months", "focus": "ESB, middleware, protocols"}, {"stage": "Advanced", "timeline": "4-6 months", "focus": "Complex integrations, optimization"}, {"stage": "Expert", "timeline": "6+ months", "focus": "Architecture, strategy, leadership"}]);
    record35.set("skillsRequired", ["APIs", "Integration Patterns", "Middleware", "Databases", "Scripting", "Git", "Problem-solving", "Communication", "System Design", "Testing"]);
    record35.set("technicalSkills", ["APIs", "REST", "SOAP", "Middleware", "ESB", "Databases", "Scripting", "Git", "Message queues", "Monitoring"]);
    record35.set("softSkills", ["Problem-solving", "Communication", "Attention to detail", "Collaboration", "System thinking", "Documentation"]);
    record35.set("tools", ["APIs", "Middleware platforms", "Git", "Databases", "Message queues", "Monitoring tools", "Testing tools", "Documentation"]);
    record35.set("faqs", [{"q": "What integration platforms should I learn?", "a": "MuleSoft, Apache Camel, and cloud-native solutions are popular"}, {"q": "Is integration engineering in demand?", "a": "Yes, especially with microservices and cloud adoption"}]);
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
    record36.set("name", "API Developer");
    record36.set("slug", "api-developer");
    record36.set("description", "Develops and maintains APIs that enable communication between applications.");
    record36.set("overview", "API developers create the interfaces that allow different systems to communicate.");
    record36.set("averageSalary", 110000);
    record36.set("entrySalary", 65000);
    record36.set("midSalary", 110000);
    record36.set("seniorSalary", 160000);
    record36.set("salaryRange", "{'entry': 65000, 'mid': 110000, 'senior': 160000}");
    record36.set("jobDemand", "High");
    record36.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record36.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record36.set("roadmap", [{"stage": "Fundamentals", "timeline": "3-4 months", "focus": "REST, HTTP, basics"}, {"stage": "API Development", "timeline": "4-6 months", "focus": "Frameworks, design patterns"}, {"stage": "Advanced", "timeline": "4-6 months", "focus": "GraphQL, security, optimization"}, {"stage": "Expert", "timeline": "6+ months", "focus": "Architecture, governance, leadership"}]);
    record36.set("skillsRequired", ["REST APIs", "GraphQL", "HTTP", "Databases", "Authentication", "Git", "Testing", "Documentation", "Problem-solving", "Communication"]);
    record36.set("technicalSkills", ["REST", "GraphQL", "HTTP", "Databases", "Authentication", "Git", "Testing", "Documentation", "Monitoring", "Security"]);
    record36.set("softSkills", ["Problem-solving", "Communication", "Attention to detail", "Collaboration", "Documentation", "System thinking"]);
    record36.set("tools", ["Postman", "Git", "Databases", "Testing tools", "Monitoring tools", "Documentation", "API gateways", "Security tools"]);
    record36.set("faqs", [{"q": "Should I learn REST or GraphQL?", "a": "Both are valuable; REST is more established, GraphQL is growing"}, {"q": "What's important in API design?", "a": "Consistency, documentation, versioning, and security"}]);
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
    record37.set("name", "Database Developer");
    record37.set("slug", "database-developer");
    record37.set("description", "Develops database applications and optimizes database performance.");
    record37.set("overview", "Database developers create efficient database solutions and optimize data access.");
    record37.set("averageSalary", 110000);
    record37.set("entrySalary", 65000);
    record37.set("midSalary", 110000);
    record37.set("seniorSalary", 160000);
    record37.set("salaryRange", "{'entry': 65000, 'mid': 110000, 'senior': 160000}");
    record37.set("jobDemand", "Medium");
    record37.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Illinois"]);
    record37.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Illinois"]);
    record37.set("roadmap", [{"stage": "Fundamentals", "timeline": "3-4 months", "focus": "SQL, database basics"}, {"stage": "Database Development", "timeline": "4-6 months", "focus": "Stored procedures, optimization"}, {"stage": "Advanced", "timeline": "4-6 months", "focus": "Performance tuning, architecture"}, {"stage": "Expert", "timeline": "6+ months", "focus": "Complex systems, leadership, innovation"}]);
    record37.set("skillsRequired", ["SQL", "Database Design", "Performance Tuning", "Stored Procedures", "Indexing", "Git", "Testing", "Problem-solving", "Communication", "Monitoring"]);
    record37.set("technicalSkills", ["SQL", "Database design", "Stored procedures", "Indexing", "Performance tuning", "Git", "Testing", "Monitoring", "Scripting", "Databases"]);
    record37.set("softSkills", ["Problem-solving", "Attention to detail", "Communication", "Analytical thinking", "Documentation", "Collaboration"]);
    record37.set("tools", ["SQL", "Databases", "Git", "Monitoring tools", "Testing tools", "Performance tools", "Documentation", "Scripting"]);
    record37.set("faqs", [{"q": "What databases should I learn?", "a": "PostgreSQL and MySQL are good starts; Oracle is enterprise standard"}, {"q": "Is database development still relevant?", "a": "Yes, especially with data growth and optimization needs"}]);
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
    record38.set("name", "ETL Developer");
    record38.set("slug", "etl-developer");
    record38.set("description", "Develops Extract, Transform, Load processes for data integration and warehousing.");
    record38.set("overview", "ETL developers create data pipelines that move and transform data between systems.");
    record38.set("averageSalary", 115000);
    record38.set("entrySalary", 70000);
    record38.set("midSalary", 115000);
    record38.set("seniorSalary", 165000);
    record38.set("salaryRange", "{'entry': 70000, 'mid': 115000, 'senior': 165000}");
    record38.set("jobDemand", "High");
    record38.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Illinois"]);
    record38.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Illinois"]);
    record38.set("roadmap", [{"stage": "Fundamentals", "timeline": "3-4 months", "focus": "SQL, databases, ETL basics"}, {"stage": "ETL Tools", "timeline": "4-6 months", "focus": "Talend, Informatica, Apache tools"}, {"stage": "Advanced", "timeline": "4-6 months", "focus": "Complex pipelines, optimization"}, {"stage": "Expert", "timeline": "6+ months", "focus": "Architecture, big data, leadership"}]);
    record38.set("skillsRequired", ["SQL", "ETL Tools", "Data Warehousing", "Databases", "Scripting", "Git", "Problem-solving", "Communication", "Testing", "Monitoring"]);
    record38.set("technicalSkills", ["SQL", "ETL tools", "Data warehousing", "Databases", "Scripting", "Git", "Apache tools", "Monitoring", "Testing", "Performance tuning"]);
    record38.set("softSkills", ["Problem-solving", "Attention to detail", "Communication", "Analytical thinking", "Documentation", "Collaboration"]);
    record38.set("tools", ["SQL", "ETL tools", "Databases", "Git", "Monitoring tools", "Testing tools", "Apache tools", "Scripting"]);
    record38.set("faqs", [{"q": "What ETL tools should I learn?", "a": "Talend and Informatica are popular; cloud-native solutions are growing"}, {"q": "Is ETL development in demand?", "a": "Yes, especially with data integration needs"}]);
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
    record39.set("name", "Analytics Engineer");
    record39.set("slug", "analytics-engineer");
    record39.set("description", "Builds data infrastructure and analytics solutions for business intelligence.");
    record39.set("overview", "Analytics engineers create data systems that enable data-driven decision making.");
    record39.set("averageSalary", 120000);
    record39.set("entrySalary", 75000);
    record39.set("midSalary", 120000);
    record39.set("seniorSalary", 170000);
    record39.set("salaryRange", "{'entry': 75000, 'mid': 120000, 'senior': 170000}");
    record39.set("jobDemand", "High");
    record39.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Illinois"]);
    record39.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Illinois"]);
    record39.set("roadmap", [{"stage": "Fundamentals", "timeline": "3-4 months", "focus": "SQL, databases, analytics basics"}, {"stage": "Data Modeling", "timeline": "4-6 months", "focus": "Warehousing, BI tools, visualization"}, {"stage": "Advanced", "timeline": "4-6 months", "focus": "Complex analytics, optimization"}, {"stage": "Expert", "timeline": "6+ months", "focus": "Architecture, strategy, leadership"}]);
    record39.set("skillsRequired", ["SQL", "Data Warehousing", "BI Tools", "Data Modeling", "Databases", "Git", "Problem-solving", "Communication", "Testing", "Visualization"]);
    record39.set("technicalSkills", ["SQL", "Data warehousing", "BI tools", "Data modeling", "Databases", "Git", "Visualization", "Monitoring", "Testing", "Scripting"]);
    record39.set("softSkills", ["Problem-solving", "Communication", "Analytical thinking", "Attention to detail", "Documentation", "Collaboration"]);
    record39.set("tools", ["SQL", "BI tools", "Databases", "Git", "Visualization tools", "Data warehousing", "Monitoring", "Testing"]);
    record39.set("faqs", [{"q": "What BI tools should I learn?", "a": "Tableau and Power BI are most popular"}, {"q": "Is analytics engineering a new field?", "a": "Yes, rapidly growing with high demand"}]);
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
    record40.set("name", "Data Analyst");
    record40.set("slug", "data-analyst");
    record40.set("description", "Analyzes data to provide insights and support business decision making.");
    record40.set("overview", "Data analysts examine data to uncover patterns and insights that drive business value.");
    record40.set("averageSalary", 85000);
    record40.set("entrySalary", 50000);
    record40.set("midSalary", 85000);
    record40.set("seniorSalary", 130000);
    record40.set("salaryRange", "{'entry': 50000, 'mid': 85000, 'senior': 130000}");
    record40.set("jobDemand", "High");
    record40.set("topPayingStates", ["California", "New York", "Massachusetts", "Washington", "Illinois"]);
    record40.set("topStates", ["California", "New York", "Massachusetts", "Washington", "Illinois"]);
    record40.set("roadmap", [{"stage": "Fundamentals", "timeline": "2-3 months", "focus": "Excel, SQL, statistics"}, {"stage": "Data Analysis", "timeline": "3-4 months", "focus": "Visualization, BI tools, analysis"}, {"stage": "Advanced", "timeline": "4-6 months", "focus": "Advanced analytics, Python, modeling"}, {"stage": "Expert", "timeline": "6+ months", "focus": "Strategy, leadership, complex analysis"}]);
    record40.set("skillsRequired", ["SQL", "Excel", "Statistics", "Data Visualization", "BI Tools", "Communication", "Problem-solving", "Python", "Git", "Business Acumen"]);
    record40.set("technicalSkills", ["SQL", "Excel", "Statistics", "Visualization", "BI tools", "Python", "Git", "Databases", "Reporting", "Analysis"]);
    record40.set("softSkills", ["Communication", "Analytical thinking", "Problem-solving", "Attention to detail", "Business acumen", "Curiosity"]);
    record40.set("tools", ["Excel", "SQL", "Tableau", "Power BI", "Python", "Git", "Databases", "Reporting tools"]);
    record40.set("faqs", [{"q": "Do I need a math degree?", "a": "Not required, but statistics knowledge is helpful"}, {"q": "What's the difference between data analyst and scientist?", "a": "Analysts focus on insights; scientists build predictive models"}]);
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
    record41.set("name", "Business Intelligence Developer");
    record41.set("slug", "business-intelligence-developer");
    record41.set("description", "Develops business intelligence solutions including dashboards and reports.");
    record41.set("overview", "BI developers create systems that help organizations understand and act on their data.");
    record41.set("averageSalary", 105000);
    record41.set("entrySalary", 65000);
    record41.set("midSalary", 105000);
    record41.set("seniorSalary", 155000);
    record41.set("salaryRange", "{'entry': 65000, 'mid': 105000, 'senior': 155000}");
    record41.set("jobDemand", "High");
    record41.set("topPayingStates", ["California", "New York", "Massachusetts", "Washington", "Illinois"]);
    record41.set("topStates", ["California", "New York", "Massachusetts", "Washington", "Illinois"]);
    record41.set("roadmap", [{"stage": "Fundamentals", "timeline": "3-4 months", "focus": "SQL, BI tools, databases"}, {"stage": "BI Development", "timeline": "4-6 months", "focus": "Dashboards, reports, visualization"}, {"stage": "Advanced", "timeline": "4-6 months", "focus": "Complex solutions, optimization"}, {"stage": "Expert", "timeline": "6+ months", "focus": "Architecture, strategy, leadership"}]);
    record41.set("skillsRequired", ["SQL", "BI Tools", "Data Warehousing", "Databases", "Visualization", "Git", "Problem-solving", "Communication", "Testing", "Reporting"]);
    record41.set("technicalSkills", ["SQL", "BI tools", "Data warehousing", "Databases", "Visualization", "Git", "Reporting", "Monitoring", "Testing", "Scripting"]);
    record41.set("softSkills", ["Communication", "Problem-solving", "Attention to detail", "Collaboration", "Documentation", "Business acumen"]);
    record41.set("tools", ["SQL", "BI tools", "Databases", "Git", "Visualization tools", "Data warehousing", "Reporting", "Monitoring"]);
    record41.set("faqs", [{"q": "What BI tools should I learn?", "a": "Tableau and Power BI are most popular; Looker is growing"}, {"q": "Is BI development in demand?", "a": "Yes, high demand for BI solutions"}]);
  try {
    app.save(record41);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record42 = new Record(collection);
    record42.set("name", "Automation Engineer");
    record42.set("slug", "automation-engineer");
    record42.set("description", "Develops automation solutions to improve efficiency and reduce manual work.");
    record42.set("overview", "Automation engineers create systems that automate repetitive tasks and processes.");
    record42.set("averageSalary", 110000);
    record42.set("entrySalary", 65000);
    record42.set("midSalary", 110000);
    record42.set("seniorSalary", 160000);
    record42.set("salaryRange", "{'entry': 65000, 'mid': 110000, 'senior': 160000}");
    record42.set("jobDemand", "High");
    record42.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record42.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record42.set("roadmap", [{"stage": "Fundamentals", "timeline": "3-4 months", "focus": "Scripting, automation basics"}, {"stage": "Automation Tools", "timeline": "4-6 months", "focus": "RPA, CI/CD, frameworks"}, {"stage": "Advanced", "timeline": "4-6 months", "focus": "Complex automation, optimization"}, {"stage": "Expert", "timeline": "6+ months", "focus": "Architecture, strategy, leadership"}]);
    record42.set("skillsRequired", ["Scripting", "RPA", "CI/CD", "Problem-solving", "Git", "Testing", "Communication", "System Design", "Databases", "Monitoring"]);
    record42.set("technicalSkills", ["Scripting", "RPA tools", "CI/CD", "Git", "Testing", "Databases", "Monitoring", "APIs", "Automation frameworks", "Problem-solving"]);
    record42.set("softSkills", ["Problem-solving", "Communication", "Attention to detail", "Collaboration", "System thinking", "Documentation"]);
    record42.set("tools", ["Scripting languages", "RPA tools", "CI/CD tools", "Git", "Testing tools", "Monitoring", "APIs", "Automation frameworks"]);
    record42.set("faqs", [{"q": "What RPA tools should I learn?", "a": "UiPath and Blue Prism are most popular"}, {"q": "Is automation engineering in demand?", "a": "Yes, high demand for automation solutions"}]);
  try {
    app.save(record42);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record43 = new Record(collection);
    record43.set("name", "Performance Engineer");
    record43.set("slug", "performance-engineer");
    record43.set("description", "Optimizes application and system performance to ensure optimal user experience.");
    record43.set("overview", "Performance engineers identify and resolve performance bottlenecks.");
    record43.set("averageSalary", 115000);
    record43.set("entrySalary", 70000);
    record43.set("midSalary", 115000);
    record43.set("seniorSalary", 165000);
    record43.set("salaryRange", "{'entry': 70000, 'mid': 115000, 'senior': 165000}");
    record43.set("jobDemand", "Medium");
    record43.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record43.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record43.set("roadmap", [{"stage": "Fundamentals", "timeline": "3-4 months", "focus": "Performance basics, profiling"}, {"stage": "Performance Testing", "timeline": "4-6 months", "focus": "Load testing, monitoring, analysis"}, {"stage": "Advanced", "timeline": "4-6 months", "focus": "Optimization, tuning, architecture"}, {"stage": "Expert", "timeline": "6+ months", "focus": "Strategy, leadership, innovation"}]);
    record43.set("skillsRequired", ["Performance Testing", "Profiling", "Monitoring", "Load Testing", "Scripting", "Git", "Problem-solving", "Communication", "System Design", "Databases"]);
    record43.set("technicalSkills", ["Performance testing", "Profiling", "Monitoring", "Load testing", "Scripting", "Git", "Databases", "Caching", "Optimization", "Analysis"]);
    record43.set("softSkills", ["Problem-solving", "Analytical thinking", "Communication", "Attention to detail", "Documentation", "Collaboration"]);
    record43.set("tools", ["Performance testing tools", "Profiling tools", "Monitoring tools", "Load testing", "Git", "Databases", "Caching tools", "Analysis tools"]);
    record43.set("faqs", [{"q": "What performance testing tools should I learn?", "a": "JMeter and LoadRunner are popular"}, {"q": "Is performance engineering in demand?", "a": "Yes, especially for high-traffic applications"}]);
  try {
    app.save(record43);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record44 = new Record(collection);
    record44.set("name", "Accessibility Engineer");
    record44.set("slug", "accessibility-engineer");
    record44.set("description", "Ensures digital products are accessible to users with disabilities.");
    record44.set("overview", "Accessibility engineers create inclusive digital experiences for all users.");
    record44.set("averageSalary", 95000);
    record44.set("entrySalary", 60000);
    record44.set("midSalary", 95000);
    record44.set("seniorSalary", 140000);
    record44.set("salaryRange", "{'entry': 60000, 'mid': 95000, 'senior': 140000}");
    record44.set("jobDemand", "Medium");
    record44.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Illinois"]);
    record44.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Illinois"]);
    record44.set("roadmap", [{"stage": "Fundamentals", "timeline": "3-4 months", "focus": "Accessibility basics, standards"}, {"stage": "Implementation", "timeline": "4-6 months", "focus": "WCAG, testing, tools"}, {"stage": "Advanced", "timeline": "4-6 months", "focus": "Complex accessibility, optimization"}, {"stage": "Expert", "timeline": "6+ months", "focus": "Strategy, leadership, advocacy"}]);
    record44.set("skillsRequired", ["Accessibility Standards", "WCAG", "Testing", "HTML/CSS", "JavaScript", "Git", "Problem-solving", "Communication", "User Research", "Empathy"]);
    record44.set("technicalSkills", ["WCAG", "Accessibility testing", "HTML/CSS", "JavaScript", "Assistive technologies", "Git", "Testing tools", "Monitoring", "Documentation", "Analysis"]);
    record44.set("softSkills", ["Empathy", "Communication", "Problem-solving", "Attention to detail", "Advocacy", "Collaboration"]);
    record44.set("tools", ["Accessibility testing tools", "WCAG validators", "Assistive technologies", "Git", "Testing tools", "Documentation", "Analysis tools", "Monitoring"]);
    record44.set("faqs", [{"q": "What's WCAG?", "a": "Web Content Accessibility Guidelines - the standard for web accessibility"}, {"q": "Is accessibility engineering in demand?", "a": "Yes, growing field with legal and ethical importance"}]);
  try {
    app.save(record44);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record45 = new Record(collection);
    record45.set("name", "Technical Program Manager");
    record45.set("slug", "technical-program-manager");
    record45.set("description", "Manages technical programs and initiatives, coordinating across teams.");
    record45.set("overview", "Technical program managers oversee complex technical projects and initiatives.");
    record45.set("averageSalary", 125000);
    record45.set("entrySalary", 75000);
    record45.set("midSalary", 125000);
    record45.set("seniorSalary", 175000);
    record45.set("salaryRange", "{'entry': 75000, 'mid': 125000, 'senior': 175000}");
    record45.set("jobDemand", "High");
    record45.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record45.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record45.set("roadmap", [{"stage": "Fundamentals", "timeline": "3-4 months", "focus": "Program management basics, technical understanding"}, {"stage": "Program Management", "timeline": "4-6 months", "focus": "Planning, coordination, communication"}, {"stage": "Advanced", "timeline": "4-6 months", "focus": "Complex programs, leadership, strategy"}, {"stage": "Expert", "timeline": "6+ months", "focus": "Organizational strategy, leadership, innovation"}]);
    record45.set("skillsRequired", ["Program Management", "Technical Understanding", "Communication", "Leadership", "Problem-solving", "Project Management", "Stakeholder Management", "Risk Management", "Metrics", "Documentation"]);
    record45.set("technicalSkills", ["Program management", "Technical understanding", "Project management", "Metrics", "Risk management", "Documentation", "Tools", "Communication", "Analysis", "Planning"]);
    record45.set("softSkills", ["Leadership", "Communication", "Problem-solving", "Stakeholder management", "Strategic thinking", "Decision-making"]);
    record45.set("tools", ["Jira", "Confluence", "Project management tools", "Metrics tools", "Communication tools", "Documentation", "Visio", "Spreadsheets"]);
    record45.set("faqs", [{"q": "Do I need technical background?", "a": "Yes, technical understanding is important"}, {"q": "What's the career path?", "a": "TPM \u2192 Senior TPM \u2192 Director \u2192 VP of Engineering"}]);
  try {
    app.save(record45);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record46 = new Record(collection);
    record46.set("name", "Engineering Manager");
    record46.set("slug", "engineering-manager");
    record46.set("description", "Manages engineering teams and oversees technical projects and development.");
    record46.set("overview", "Engineering managers lead teams and ensure successful delivery of technical projects.");
    record46.set("averageSalary", 135000);
    record46.set("entrySalary", 80000);
    record46.set("midSalary", 135000);
    record46.set("seniorSalary", 185000);
    record46.set("salaryRange", "{'entry': 80000, 'mid': 135000, 'senior': 185000}");
    record46.set("jobDemand", "High");
    record46.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record46.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record46.set("roadmap", [{"stage": "Fundamentals", "timeline": "3-4 months", "focus": "Leadership basics, team management"}, {"stage": "Team Leadership", "timeline": "4-6 months", "focus": "Mentoring, performance management, communication"}, {"stage": "Advanced", "timeline": "4-6 months", "focus": "Strategic leadership, organizational development"}, {"stage": "Expert", "timeline": "6+ months", "focus": "Executive leadership, organizational strategy"}]);
    record46.set("skillsRequired", ["Leadership", "Team Management", "Communication", "Technical Knowledge", "Problem-solving", "Mentoring", "Performance Management", "Strategic Thinking", "Decision-making", "Empathy"]);
    record46.set("technicalSkills", ["Technical knowledge", "Team management", "Performance management", "Mentoring", "Communication", "Problem-solving", "Strategic thinking", "Metrics", "Documentation", "Tools"]);
    record46.set("softSkills", ["Leadership", "Communication", "Empathy", "Problem-solving", "Decision-making", "Mentoring"]);
    record46.set("tools", ["Jira", "Confluence", "Performance management tools", "Communication tools", "Documentation", "Metrics tools", "Project management", "Spreadsheets"]);
    record46.set("faqs", [{"q": "Do I need to stop coding?", "a": "Not necessarily, but management takes priority"}, {"q": "What's the career path?", "a": "Engineer \u2192 Engineering Manager \u2192 Director \u2192 VP of Engineering"}]);
  try {
    app.save(record46);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record47 = new Record(collection);
    record47.set("name", "Staff Engineer");
    record47.set("slug", "staff-engineer");
    record47.set("description", "Senior technical role focused on architecture, mentoring, and strategic technical decisions.");
    record47.set("overview", "Staff engineers provide technical leadership and shape the direction of engineering.");
    record47.set("averageSalary", 160000);
    record47.set("entrySalary", 100000);
    record47.set("midSalary", 160000);
    record47.set("seniorSalary", 210000);
    record47.set("salaryRange", "{'entry': 100000, 'mid': 160000, 'senior': 210000}");
    record47.set("jobDemand", "High");
    record47.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record47.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record47.set("roadmap", [{"stage": "Senior Engineer", "timeline": "4-6 months", "focus": "Deep expertise, mentoring"}, {"stage": "Staff Engineer", "timeline": "6-12 months", "focus": "Architecture, strategy, leadership"}, {"stage": "Principal Engineer", "timeline": "12+ months", "focus": "Organizational impact, innovation"}, {"stage": "Distinguished", "timeline": "12+ months", "focus": "Industry leadership, thought leadership"}]);
    record47.set("skillsRequired", ["Technical Expertise", "Architecture", "Leadership", "Communication", "Mentoring", "Strategic Thinking", "Problem-solving", "System Design", "Decision-making", "Vision"]);
    record47.set("technicalSkills", ["Technical expertise", "Architecture", "System design", "Leadership", "Mentoring", "Communication", "Strategic thinking", "Problem-solving", "Innovation", "Documentation"]);
    record47.set("softSkills", ["Leadership", "Communication", "Mentoring", "Strategic thinking", "Problem-solving", "Vision"]);
    record47.set("tools", ["Technical tools", "Communication tools", "Documentation", "Metrics tools", "Project management", "Collaboration tools", "Visio", "Spreadsheets"]);
    record47.set("faqs", [{"q": "What's the difference between staff and principal engineer?", "a": "Staff engineers lead teams; principal engineers shape organizational strategy"}, {"q": "Do I need to manage people?", "a": "Not necessarily, but leadership is important"}]);
  try {
    app.save(record47);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record48 = new Record(collection);
    record48.set("name", "Principal Engineer");
    record48.set("slug", "principal-engineer");
    record48.set("description", "Highest technical role providing strategic direction and organizational leadership.");
    record48.set("overview", "Principal engineers shape the technical direction and strategy of organizations.");
    record48.set("averageSalary", 190000);
    record48.set("entrySalary", 120000);
    record48.set("midSalary", 190000);
    record48.set("seniorSalary", 240000);
    record48.set("salaryRange", "{'entry': 120000, 'mid': 190000, 'senior': 240000}");
    record48.set("jobDemand", "High");
    record48.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record48.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record48.set("roadmap", [{"stage": "Staff Engineer", "timeline": "6-12 months", "focus": "Deep expertise, mentoring"}, {"stage": "Principal Engineer", "timeline": "12+ months", "focus": "Organizational strategy, innovation"}, {"stage": "Distinguished", "timeline": "12+ months", "focus": "Industry leadership, thought leadership"}, {"stage": "Executive", "timeline": "12+ months", "focus": "C-level roles, organizational leadership"}]);
    record48.set("skillsRequired", ["Technical Expertise", "Strategic Vision", "Leadership", "Communication", "Mentoring", "Organizational Thinking", "Problem-solving", "Innovation", "Decision-making", "Business Acumen"]);
    record48.set("technicalSkills", ["Technical expertise", "Strategic vision", "Architecture", "System design", "Leadership", "Mentoring", "Communication", "Innovation", "Problem-solving", "Documentation"]);
    record48.set("softSkills", ["Leadership", "Strategic thinking", "Communication", "Mentoring", "Vision", "Decision-making"]);
    record48.set("tools", ["Technical tools", "Communication tools", "Documentation", "Metrics tools", "Project management", "Collaboration tools", "Visio", "Spreadsheets"]);
    record48.set("faqs", [{"q": "What's the difference between principal and distinguished engineer?", "a": "Principal engineers lead organizations; distinguished engineers are industry leaders"}, {"q": "Is this the highest technical role?", "a": "Principal is highest technical role; distinguished is honorary"}]);
  try {
    app.save(record48);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record49 = new Record(collection);
    record49.set("name", "Architect");
    record49.set("slug", "architect");
    record49.set("description", "Designs comprehensive technical solutions and systems architecture.");
    record49.set("overview", "Architects design systems that are scalable, secure, and aligned with business goals.");
    record49.set("averageSalary", 150000);
    record49.set("entrySalary", 95000);
    record49.set("midSalary", 150000);
    record49.set("seniorSalary", 200000);
    record49.set("salaryRange", "{'entry': 95000, 'mid': 150000, 'senior': 200000}");
    record49.set("jobDemand", "High");
    record49.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Illinois"]);
    record49.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Illinois"]);
    record49.set("roadmap", [{"stage": "Technical Foundation", "timeline": "4-6 months", "focus": "Development, system design"}, {"stage": "Solution Architecture", "timeline": "4-6 months", "focus": "Design patterns, systems"}, {"stage": "Enterprise Architecture", "timeline": "4-6 months", "focus": "Strategy, governance, alignment"}, {"stage": "Expert", "timeline": "6+ months", "focus": "Organizational strategy, leadership"}]);
    record49.set("skillsRequired", ["System Design", "Architecture Patterns", "Cloud Platforms", "Databases", "Networking", "Security", "Leadership", "Communication", "Problem-solving", "Strategic Thinking"]);
    record49.set("technicalSkills", ["System design", "Architecture patterns", "Cloud platforms", "Databases", "Networking", "Security", "Scalability", "Performance", "Monitoring", "Documentation"]);
    record49.set("softSkills", ["Strategic thinking", "Leadership", "Communication", "Problem-solving", "Decision-making", "Business acumen"]);
    record49.set("tools", ["Visio", "Lucidchart", "Cloud platforms", "Git", "Monitoring tools", "Documentation", "Metrics tools", "Collaboration tools"]);
    record49.set("faqs", [{"q": "Do I need certifications?", "a": "AWS Solutions Architect or similar certifications are valuable"}, {"q": "What's the career path?", "a": "Senior Engineer \u2192 Architect \u2192 Principal Architect \u2192 CTO"}]);
  try {
    app.save(record49);
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
