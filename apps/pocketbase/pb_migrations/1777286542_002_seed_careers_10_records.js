/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
    record0.set("name", "Frontend Developer");
    record0.set("slug", "frontend-developer");
    record0.set("description", "Build responsive, accessible user interfaces using modern frameworks and design systems. Create pixel-perfect implementations from design mockups.");
    record0.set("overview", "Frontend developers create the visual and interactive parts of web applications using HTML, CSS, and JavaScript. They work with design systems and modern frameworks to build fast, accessible user experiences.");
    record0.set("averageSalary", 102000);
    record0.set("salaryRange", "{'min': 65000, 'max': 140000, 'avg': 102000}");
    record0.set("jobDemandOutlook", "Very High");
    record0.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record0.set("entrySalary", 65000);
    record0.set("midSalary", 102000);
    record0.set("seniorSalary", 140000);
    record0.set("jobDemand", "Very High");
    record0.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record0.set("technicalSkills", ["HTML5", "CSS3", "JavaScript (ES6+)", "React 18", "TypeScript", "Tailwind CSS", "Git/GitHub", "REST APIs", "Web Accessibility (WCAG)", "Performance Optimization", "Testing (Jest/React Testing Library)", "Responsive Design", "Browser DevTools"]);
    record0.set("softSkills", ["Communication", "Problem-solving", "Attention to detail", "Collaboration", "Time management"]);
    record0.set("skillsRequired", ["HTML5", "CSS3", "JavaScript (ES6+)", "React 18", "TypeScript", "Tailwind CSS", "Git/GitHub", "REST APIs", "Web Accessibility (WCAG)", "Performance Optimization", "Testing (Jest/React Testing Library)", "Responsive Design", "Browser DevTools"]);
    record0.set("roadmap", [{"phase": 1, "title": "Web Fundamentals", "duration": "4 weeks", "skills": ["HTML5", "CSS3", "JavaScript basics", "DOM manipulation", "Responsive design"]}, {"phase": 2, "title": "JavaScript Mastery", "duration": "4 weeks", "skills": ["ES6+ features", "Async/await", "Promises", "Functional programming", "DOM APIs"]}, {"phase": 3, "title": "React Deep Dive", "duration": "4 weeks", "skills": ["React hooks", "State management", "Component lifecycle", "Context API", "Performance optimization"]}, {"phase": 4, "title": "Advanced Patterns", "duration": "3 weeks", "skills": ["Design patterns", "Testing strategies", "TypeScript", "Advanced CSS", "Accessibility"]}, {"phase": 5, "title": "Professional Tools", "duration": "3 weeks", "skills": ["Git workflows", "Build tools", "DevTools", "Performance monitoring", "Deployment"]}]);
    record0.set("relatedCareers", ["UI/UX Designer", "Full Stack Developer", "Web Developer"]);
    record0.set("faqs", [{"question": "What's the difference between frontend and backend?", "answer": "Frontend handles the user interface and user experience, while backend manages data and server logic."}, {"question": "Do I need to know all these technologies?", "answer": "Start with HTML, CSS, and JavaScript. React and TypeScript are highly valuable. Learn others as needed."}]);
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
    record1.set("description", "Design and build scalable server-side applications, APIs, and databases. Handle millions of requests with optimal performance and security.");
    record1.set("overview", "Backend developers build the server-side logic that powers web and mobile applications. They work with databases, APIs, and cloud infrastructure to ensure applications are fast, secure, and scalable.");
    record1.set("averageSalary", 112000);
    record1.set("salaryRange", "{'min': 75000, 'max': 150000, 'avg': 112000}");
    record1.set("jobDemandOutlook", "Very High");
    record1.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Illinois"]);
    record1.set("entrySalary", 75000);
    record1.set("midSalary", 112000);
    record1.set("seniorSalary", 150000);
    record1.set("jobDemand", "Very High");
    record1.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Illinois"]);
    record1.set("technicalSkills", ["Node.js", "Express.js", "Python", "SQL (PostgreSQL)", "NoSQL (MongoDB)", "REST API design", "GraphQL", "Authentication (JWT/OAuth)", "Docker", "Microservices", "System Design", "AWS/GCP", "Database optimization", "Message queues (Redis/RabbitMQ)"]);
    record1.set("softSkills", ["System thinking", "Problem-solving", "Debugging skills", "Documentation", "Collaboration"]);
    record1.set("skillsRequired", ["Node.js", "Express.js", "Python", "SQL (PostgreSQL)", "NoSQL (MongoDB)", "REST API design", "GraphQL", "Authentication (JWT/OAuth)", "Docker", "Microservices", "System Design", "AWS/GCP", "Database optimization", "Message queues (Redis/RabbitMQ)"]);
    record1.set("roadmap", [{"phase": 1, "title": "Backend Fundamentals", "duration": "4 weeks", "skills": ["Server concepts", "HTTP/HTTPS", "Request-response cycle", "Databases basics", "API design"]}, {"phase": 2, "title": "Node.js & Express", "duration": "4 weeks", "skills": ["Node.js runtime", "Express framework", "Routing", "Middleware", "Error handling"]}, {"phase": 3, "title": "Databases", "duration": "4 weeks", "skills": ["SQL fundamentals", "PostgreSQL", "MongoDB", "Query optimization", "Indexing"]}, {"phase": 4, "title": "APIs & Security", "duration": "3 weeks", "skills": ["REST API design", "GraphQL", "Authentication", "Authorization", "Security best practices"]}, {"phase": 5, "title": "Deployment & Scaling", "duration": "3 weeks", "skills": ["Docker", "Cloud deployment", "Load balancing", "Caching", "Monitoring"]}]);
    record1.set("relatedCareers", ["Full Stack Developer", "DevOps Engineer", "Database Administrator"]);
    record1.set("faqs", [{"question": "Should I learn Node.js or Python first?", "answer": "Both are excellent. Node.js is JavaScript-based, Python is more versatile. Choose based on your preference."}, {"question": "How important is database knowledge?", "answer": "Very important. Strong database skills are crucial for backend development."}]);
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
    record2.set("description", "Build complete web applications from database to user interface. Understand the entire technology stack and make architectural decisions.");
    record2.set("overview", "Full stack developers work on both frontend and backend, building complete web applications. They understand the entire technology stack and can make architectural decisions across the application.");
    record2.set("averageSalary", 127000);
    record2.set("salaryRange", "{'min': 85000, 'max': 170000, 'avg': 127000}");
    record2.set("jobDemandOutlook", "Very High");
    record2.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record2.set("entrySalary", 85000);
    record2.set("midSalary", 127000);
    record2.set("seniorSalary", 170000);
    record2.set("jobDemand", "Very High");
    record2.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record2.set("technicalSkills", ["React", "Node.js", "Express", "PostgreSQL", "MongoDB", "JavaScript", "TypeScript", "REST APIs", "GraphQL", "Docker", "AWS", "System Design", "Git", "Testing", "CI/CD", "Agile methodologies"]);
    record2.set("softSkills", ["Versatility", "Problem-solving", "Communication", "Project management", "Adaptability"]);
    record2.set("skillsRequired", ["React", "Node.js", "Express", "PostgreSQL", "MongoDB", "JavaScript", "TypeScript", "REST APIs", "GraphQL", "Docker", "AWS", "System Design", "Git", "Testing", "CI/CD", "Agile methodologies"]);
    record2.set("roadmap", [{"phase": 1, "title": "Frontend Fundamentals", "duration": "4 weeks", "skills": ["HTML/CSS", "JavaScript", "React basics", "Component design", "State management"]}, {"phase": 2, "title": "Backend Fundamentals", "duration": "4 weeks", "skills": ["Node.js", "Express", "API design", "Authentication", "Database basics"]}, {"phase": 3, "title": "Database Design", "duration": "4 weeks", "skills": ["SQL", "NoSQL", "Schema design", "Relationships", "Optimization"]}, {"phase": 4, "title": "Integration & Advanced Features", "duration": "3 weeks", "skills": ["Full stack integration", "Advanced patterns", "Performance", "Security", "Testing"]}, {"phase": 5, "title": "DevOps & Deployment", "duration": "3 weeks", "skills": ["Docker", "CI/CD", "Cloud deployment", "Monitoring", "Scaling"]}]);
    record2.set("relatedCareers", ["Frontend Developer", "Backend Developer", "DevOps Engineer"]);
    record2.set("faqs", [{"question": "Is it better to specialize or be full stack?", "answer": "Both paths are valuable. Full stack offers versatility, specialization offers depth. Choose based on your interests."}, {"question": "How long does it take to become a full stack developer?", "answer": "Typically 10-12 months of focused learning to reach junior level proficiency."}]);
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
    record3.set("description", "Automate infrastructure, manage deployments, and ensure system reliability. Bridge the gap between development and operations.");
    record3.set("overview", "DevOps engineers automate infrastructure and deployment processes, ensuring applications run reliably at scale. They bridge the gap between development and operations teams.");
    record3.set("averageSalary", 137000);
    record3.set("salaryRange", "{'min': 95000, 'max': 180000, 'avg': 137000}");
    record3.set("jobDemandOutlook", "Very High");
    record3.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Virginia"]);
    record3.set("entrySalary", 95000);
    record3.set("midSalary", 137000);
    record3.set("seniorSalary", 180000);
    record3.set("jobDemand", "Very High");
    record3.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Virginia"]);
    record3.set("technicalSkills", ["Linux", "Docker", "Kubernetes", "CI/CD (Jenkins/GitHub Actions)", "AWS/Azure/GCP", "Terraform", "Ansible", "Prometheus", "ELK Stack", "Shell scripting", "Networking", "Git", "Python/Go"]);
    record3.set("softSkills", ["Problem-solving", "Automation mindset", "Communication", "Documentation", "Reliability focus"]);
    record3.set("skillsRequired", ["Linux", "Docker", "Kubernetes", "CI/CD (Jenkins/GitHub Actions)", "AWS/Azure/GCP", "Terraform", "Ansible", "Prometheus", "ELK Stack", "Shell scripting", "Networking", "Git", "Python/Go"]);
    record3.set("roadmap", [{"phase": 1, "title": "Linux Mastery", "duration": "3 weeks", "skills": ["Linux fundamentals", "Command line", "File systems", "Permissions", "System administration"]}, {"phase": 2, "title": "Containerization", "duration": "3 weeks", "skills": ["Docker basics", "Images and containers", "Docker Compose", "Registry", "Best practices"]}, {"phase": 3, "title": "Orchestration", "duration": "4 weeks", "skills": ["Kubernetes architecture", "Deployments", "Services", "ConfigMaps", "Persistent volumes"]}, {"phase": 4, "title": "CI/CD & Automation", "duration": "3 weeks", "skills": ["Jenkins", "GitHub Actions", "Pipeline design", "Automation", "Testing integration"]}, {"phase": 5, "title": "Cloud & Infrastructure", "duration": "3 weeks", "skills": ["AWS/Azure/GCP", "Infrastructure as Code", "Terraform", "Monitoring", "Cost optimization"]}]);
    record3.set("relatedCareers", ["Backend Developer", "Cloud Architect", "Systems Administrator"]);
    record3.set("faqs", [{"question": "Do I need to be a developer first?", "answer": "Not necessarily, but understanding development helps. Strong Linux and automation skills are essential."}, {"question": "What's the difference between DevOps and SRE?", "answer": "DevOps focuses on automation and deployment. SRE (Site Reliability Engineering) focuses on system reliability and performance."}]);
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
    record4.set("description", "Extract actionable insights from data using statistics, machine learning, and advanced analytics. Drive business decisions with data.");
    record4.set("overview", "Data scientists analyze complex datasets to extract insights and build predictive models. They combine statistics, programming, and domain knowledge to solve business problems.");
    record4.set("averageSalary", 135000);
    record4.set("salaryRange", "{'min': 90000, 'max': 180000, 'avg': 135000}");
    record4.set("jobDemandOutlook", "Very High");
    record4.set("topPayingStates", ["California", "New York", "Massachusetts", "Washington", "Illinois"]);
    record4.set("entrySalary", 90000);
    record4.set("midSalary", 135000);
    record4.set("seniorSalary", 180000);
    record4.set("jobDemand", "Very High");
    record4.set("topStates", ["California", "New York", "Massachusetts", "Washington", "Illinois"]);
    record4.set("technicalSkills", ["Python", "SQL", "Statistics", "Machine Learning (scikit-learn)", "Deep Learning (TensorFlow/PyTorch)", "Pandas", "NumPy", "Matplotlib/Seaborn", "Tableau/Power BI", "Big Data (Spark)", "A/B testing", "Linear Algebra"]);
    record4.set("softSkills", ["Statistical thinking", "Communication", "Business acumen", "Curiosity", "Problem-solving"]);
    record4.set("skillsRequired", ["Python", "SQL", "Statistics", "Machine Learning (scikit-learn)", "Deep Learning (TensorFlow/PyTorch)", "Pandas", "NumPy", "Matplotlib/Seaborn", "Tableau/Power BI", "Big Data (Spark)", "A/B testing", "Linear Algebra"]);
    record4.set("roadmap", [{"phase": 1, "title": "Python & Math Foundations", "duration": "4 weeks", "skills": ["Python programming", "Linear algebra", "Statistics basics", "Probability", "NumPy/Pandas"]}, {"phase": 2, "title": "Data Analysis & Visualization", "duration": "4 weeks", "skills": ["Data cleaning", "Exploratory analysis", "Visualization", "SQL", "Data storytelling"]}, {"phase": 3, "title": "Machine Learning", "duration": "4 weeks", "skills": ["Supervised learning", "Unsupervised learning", "Model evaluation", "Feature engineering", "scikit-learn"]}, {"phase": 4, "title": "Advanced ML & Deep Learning", "duration": "3 weeks", "skills": ["Neural networks", "TensorFlow/PyTorch", "NLP basics", "Computer vision", "Advanced techniques"]}, {"phase": 5, "title": "Deployment & Big Data", "duration": "3 weeks", "skills": ["Model deployment", "Big Data (Spark)", "A/B testing", "Production systems", "Monitoring"]}]);
    record4.set("relatedCareers", ["Machine Learning Engineer", "Data Analyst", "Business Analyst"]);
    record4.set("faqs", [{"question": "Do I need a math degree?", "answer": "Not required, but strong math fundamentals help. You can learn the necessary math through online courses."}, {"question": "What's the difference between Data Scientist and Data Analyst?", "answer": "Data Scientists build predictive models and use ML. Data Analysts focus on descriptive analytics and insights."}]);
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
    record5.set("name", "Mobile Developer (iOS/Android)");
    record5.set("slug", "mobile-developer");
    record5.set("description", "Build native and cross-platform mobile applications for iOS and Android. Create engaging user experiences on mobile devices.");
    record5.set("overview", "Mobile developers create applications for smartphones and tablets. They can specialize in native development (Swift/Kotlin) or cross-platform frameworks (React Native/Flutter).");
    record5.set("averageSalary", 120000);
    record5.set("salaryRange", "{'min': 80000, 'max': 160000, 'avg': 120000}");
    record5.set("jobDemandOutlook", "Very High");
    record5.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record5.set("entrySalary", 80000);
    record5.set("midSalary", 120000);
    record5.set("seniorSalary", 160000);
    record5.set("jobDemand", "Very High");
    record5.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record5.set("technicalSkills", ["Swift", "Kotlin", "React Native", "Flutter", "Dart", "Mobile UI/UX", "REST APIs", "Firebase", "SQLite", "Git", "Xcode", "Android Studio", "App Store/Play Store deployment"]);
    record5.set("softSkills", ["User-centric thinking", "Problem-solving", "Attention to detail", "Collaboration", "Adaptability"]);
    record5.set("skillsRequired", ["Swift", "Kotlin", "React Native", "Flutter", "Dart", "Mobile UI/UX", "REST APIs", "Firebase", "SQLite", "Git", "Xcode", "Android Studio", "App Store/Play Store deployment"]);
    record5.set("roadmap", [{"phase": 1, "title": "Mobile Fundamentals", "duration": "3 weeks", "skills": ["Mobile concepts", "UI/UX principles", "Platform guidelines", "Development environment", "Basic programming"]}, {"phase": 2, "title": "Native Development", "duration": "3 weeks", "skills": ["Swift (iOS)", "Kotlin (Android)", "Native APIs", "UI frameworks", "Navigation"]}, {"phase": 3, "title": "Advanced Mobile", "duration": "4 weeks", "skills": ["Data persistence", "Networking", "Authentication", "Performance", "Testing"]}, {"phase": 4, "title": "Cross-platform Development", "duration": "3 weeks", "skills": ["React Native", "Flutter", "Dart", "Code sharing", "Platform-specific code"]}, {"phase": 5, "title": "Deployment & Optimization", "duration": "3 weeks", "skills": ["App Store submission", "Play Store deployment", "Performance optimization", "Analytics", "Monetization"]}]);
    record5.set("relatedCareers", ["Frontend Developer", "Full Stack Developer", "UI/UX Designer"]);
    record5.set("faqs", [{"question": "Should I learn iOS or Android first?", "answer": "Either works. iOS uses Swift, Android uses Kotlin. Choose based on your preference or market demand."}, {"question": "Is cross-platform development worth learning?", "answer": "Yes, React Native and Flutter allow you to build for both platforms with shared code."}]);
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
    record6.set("description", "Design scalable, secure, and cost-effective cloud infrastructure. Make strategic decisions about cloud platforms and services.");
    record6.set("overview", "Cloud architects design and oversee cloud infrastructure and services. They make strategic decisions about cloud platforms, ensuring scalability, security, and cost-effectiveness.");
    record6.set("averageSalary", 155000);
    record6.set("salaryRange", "{'min': 110000, 'max': 200000, 'avg': 155000}");
    record6.set("jobDemandOutlook", "Very High");
    record6.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Virginia"]);
    record6.set("entrySalary", 110000);
    record6.set("midSalary", 155000);
    record6.set("seniorSalary", 200000);
    record6.set("jobDemand", "Very High");
    record6.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Virginia"]);
    record6.set("technicalSkills", ["AWS/Azure/GCP", "System Design", "Networking", "Security", "Databases", "Microservices", "Kubernetes", "Infrastructure as Code", "Cost optimization", "Compliance", "DevOps"]);
    record6.set("softSkills", ["Strategic thinking", "Communication", "Leadership", "Business acumen", "Decision-making"]);
    record6.set("skillsRequired", ["AWS/Azure/GCP", "System Design", "Networking", "Security", "Databases", "Microservices", "Kubernetes", "Infrastructure as Code", "Cost optimization", "Compliance", "DevOps"]);
    record6.set("roadmap", [{"phase": 1, "title": "Cloud Fundamentals", "duration": "4 weeks", "skills": ["Cloud concepts", "AWS/Azure/GCP basics", "Services overview", "Pricing models", "Account management"]}, {"phase": 2, "title": "Core Services", "duration": "4 weeks", "skills": ["Compute", "Storage", "Networking", "Databases", "Security services"]}, {"phase": 3, "title": "Advanced Architecture", "duration": "4 weeks", "skills": ["Microservices", "Containerization", "Serverless", "High availability", "Disaster recovery"]}, {"phase": 4, "title": "Security & Compliance", "duration": "3 weeks", "skills": ["Cloud security", "Identity management", "Compliance frameworks", "Encryption", "Auditing"]}, {"phase": 5, "title": "Optimization & Cost", "duration": "3 weeks", "skills": ["Cost optimization", "Performance tuning", "Monitoring", "Automation", "Best practices"]}]);
    record6.set("relatedCareers", ["DevOps Engineer", "Systems Administrator", "Security Architect"]);
    record6.set("faqs", [{"question": "Do I need certifications?", "answer": "Certifications like AWS Solutions Architect are valuable and often required for senior roles."}, {"question": "Which cloud platform should I learn first?", "answer": "AWS is the market leader. Azure and GCP are also important. Learning one deeply helps with others."}]);
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
    record7.set("name", "Machine Learning Engineer");
    record7.set("slug", "machine-learning-engineer");
    record7.set("description", "Build machine learning systems that learn from data and improve over time. Deploy models to production at scale.");
    record7.set("overview", "Machine learning engineers build and deploy ML systems that solve real-world problems. They combine software engineering with machine learning to create scalable, production-ready systems.");
    record7.set("averageSalary", 150000);
    record7.set("salaryRange", "{'min': 100000, 'max': 200000, 'avg': 150000}");
    record7.set("jobDemandOutlook", "Very High");
    record7.set("topPayingStates", ["California", "New York", "Massachusetts", "Washington", "Colorado"]);
    record7.set("entrySalary", 100000);
    record7.set("midSalary", 150000);
    record7.set("seniorSalary", 200000);
    record7.set("jobDemand", "Very High");
    record7.set("topStates", ["California", "New York", "Massachusetts", "Washington", "Colorado"]);
    record7.set("technicalSkills", ["Python", "Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "MLOps", "Feature Engineering", "Model Deployment", "Big Data", "Statistics", "SQL", "Git"]);
    record7.set("softSkills", ["Problem-solving", "Experimentation", "Communication", "Collaboration", "Attention to detail"]);
    record7.set("skillsRequired", ["Python", "Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "MLOps", "Feature Engineering", "Model Deployment", "Big Data", "Statistics", "SQL", "Git"]);
    record7.set("roadmap", [{"phase": 1, "title": "ML Fundamentals", "duration": "4 weeks", "skills": ["ML concepts", "Supervised learning", "Unsupervised learning", "Model evaluation", "scikit-learn"]}, {"phase": 2, "title": "Feature Engineering", "duration": "4 weeks", "skills": ["Feature selection", "Feature scaling", "Dimensionality reduction", "Data preprocessing", "Domain knowledge"]}, {"phase": 3, "title": "Deep Learning", "duration": "4 weeks", "skills": ["Neural networks", "TensorFlow", "PyTorch", "CNNs", "RNNs"]}, {"phase": 4, "title": "Advanced Topics", "duration": "3 weeks", "skills": ["Transfer learning", "Reinforcement learning", "NLP", "Computer vision", "Advanced architectures"]}, {"phase": 5, "title": "MLOps & Deployment", "duration": "3 weeks", "skills": ["Model deployment", "MLOps", "Monitoring", "A/B testing", "Production systems"]}]);
    record7.set("relatedCareers", ["Data Scientist", "AI Engineer", "Research Scientist"]);
    record7.set("faqs", [{"question": "What's the difference between ML Engineer and Data Scientist?", "answer": "ML Engineers focus on building production systems. Data Scientists focus on analysis and insights."}, {"question": "Do I need a PhD?", "answer": "Not required. Strong programming and ML fundamentals are more important than formal education."}]);
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
    record8.set("name", "Cybersecurity Specialist");
    record8.set("slug", "cybersecurity-specialist");
    record8.set("description", "Protect systems and data from cyber threats. Implement security measures and respond to incidents.");
    record8.set("overview", "Cybersecurity specialists protect organizations from cyber threats. They implement security measures, conduct assessments, and respond to security incidents.");
    record8.set("averageSalary", 127000);
    record8.set("salaryRange", "{'min': 85000, 'max': 170000, 'avg': 127000}");
    record8.set("jobDemandOutlook", "Very High");
    record8.set("topPayingStates", ["California", "New York", "Virginia", "Massachusetts", "Washington"]);
    record8.set("entrySalary", 85000);
    record8.set("midSalary", 127000);
    record8.set("seniorSalary", 170000);
    record8.set("jobDemand", "Very High");
    record8.set("topStates", ["California", "New York", "Virginia", "Massachusetts", "Washington"]);
    record8.set("technicalSkills", ["Network Security", "Cryptography", "Penetration Testing", "Firewalls", "IDS/IPS", "SIEM", "Vulnerability Assessment", "Incident Response", "Linux/Windows", "Python", "Ethical Hacking"]);
    record8.set("softSkills", ["Attention to detail", "Problem-solving", "Communication", "Incident management", "Compliance knowledge"]);
    record8.set("skillsRequired", ["Network Security", "Cryptography", "Penetration Testing", "Firewalls", "IDS/IPS", "SIEM", "Vulnerability Assessment", "Incident Response", "Linux/Windows", "Python", "Ethical Hacking"]);
    record8.set("roadmap", [{"phase": 1, "title": "Security Fundamentals", "duration": "3 weeks", "skills": ["Security concepts", "Threats and vulnerabilities", "Risk management", "Compliance basics", "Security principles"]}, {"phase": 2, "title": "Network Security", "duration": "3 weeks", "skills": ["Network protocols", "Firewalls", "VPNs", "Intrusion detection", "Network monitoring"]}, {"phase": 3, "title": "Application Security", "duration": "4 weeks", "skills": ["OWASP Top 10", "Secure coding", "Authentication", "Encryption", "API security"]}, {"phase": 4, "title": "Penetration Testing", "duration": "3 weeks", "skills": ["Reconnaissance", "Scanning", "Exploitation", "Reporting", "Ethical hacking"]}, {"phase": 5, "title": "Incident Response & Compliance", "duration": "3 weeks", "skills": ["Incident response", "Forensics", "Compliance frameworks", "SIEM", "Threat intelligence"]}]);
    record8.set("relatedCareers", ["Network Administrator", "Security Architect", "Incident Response Analyst"]);
    record8.set("faqs", [{"question": "Do I need certifications?", "answer": "Yes, certifications like Security+, CEH, or CISSP are highly valued in cybersecurity."}, {"question": "Is ethical hacking legal?", "answer": "Yes, if you have permission. Penetration testing is a legitimate security practice."}]);
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
    record9.set("name", "QA Engineer / Test Automation");
    record9.set("slug", "qa-engineer");
    record9.set("description", "Ensure software quality through comprehensive testing. Automate tests to catch bugs before they reach users.");
    record9.set("overview", "QA engineers ensure software quality through manual and automated testing. They design test strategies, execute tests, and automate repetitive testing tasks.");
    record9.set("averageSalary", 105000);
    record9.set("salaryRange", "{'min': 70000, 'max': 140000, 'avg': 105000}");
    record9.set("jobDemandOutlook", "High");
    record9.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record9.set("entrySalary", 70000);
    record9.set("midSalary", 105000);
    record9.set("seniorSalary", 140000);
    record9.set("jobDemand", "High");
    record9.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record9.set("technicalSkills", ["Manual Testing", "Test Automation", "Selenium", "Cypress", "Jest", "Python", "SQL", "Git", "CI/CD", "API Testing", "Performance Testing", "Test Management Tools"]);
    record9.set("softSkills", ["Attention to detail", "Problem-solving", "Communication", "Documentation", "Analytical thinking"]);
    record9.set("skillsRequired", ["Manual Testing", "Test Automation", "Selenium", "Cypress", "Jest", "Python", "SQL", "Git", "CI/CD", "API Testing", "Performance Testing", "Test Management Tools"]);
    record9.set("roadmap", [{"phase": 1, "title": "QA Fundamentals", "duration": "3 weeks", "skills": ["Testing concepts", "Test planning", "Test cases", "Bug reporting", "Quality metrics"]}, {"phase": 2, "title": "Manual Testing", "duration": "3 weeks", "skills": ["Functional testing", "Regression testing", "User acceptance testing", "Exploratory testing", "Test documentation"]}, {"phase": 3, "title": "Test Automation", "duration": "4 weeks", "skills": ["Selenium", "Cypress", "Test frameworks", "Page Object Model", "Automation best practices"]}, {"phase": 4, "title": "Advanced Testing", "duration": "3 weeks", "skills": ["API testing", "Performance testing", "Security testing", "Mobile testing", "Advanced frameworks"]}, {"phase": 5, "title": "CI/CD & Tools", "duration": "3 weeks", "skills": ["CI/CD integration", "Test management tools", "Reporting", "Continuous testing", "DevOps practices"]}]);
    record9.set("relatedCareers", ["Backend Developer", "Frontend Developer", "DevOps Engineer"]);
    record9.set("faqs", [{"question": "Is QA a good career path?", "answer": "Yes, QA is essential for software quality. Automation skills make it even more valuable."}, {"question": "Can I transition from QA to development?", "answer": "Yes, many developers start in QA. The testing knowledge is valuable for development."}]);
  try {
    app.save(record9);
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
