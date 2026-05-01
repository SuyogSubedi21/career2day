/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
    record0.set("name", "Software Engineer");
    record0.set("slug", "software-engineer");
    record0.set("description", "Designs, develops, and maintains software applications and systems. Works across full development lifecycle from requirements to deployment.");
    record0.set("overview", "Software engineers are the backbone of the tech industry, creating applications that power businesses and consumer products. They work with various programming languages and frameworks to solve complex problems.");
    record0.set("averageSalary", 120000);
    record0.set("entrySalary", 85000);
    record0.set("midSalary", 120000);
    record0.set("seniorSalary", 160000);
    record0.set("salaryRange", "{'min': 85000, 'max': 180000}");
    record0.set("jobDemand", "Very High");
    record0.set("jobDemandOutlook", "Growing 13% through 2032, much faster than average. High demand across all industries.");
    record0.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record0.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record0.set("technicalSkills", ["Java", "Python", "C++", "JavaScript", "System Design", "Data Structures", "Algorithms", "Git"]);
    record0.set("softSkills", ["Problem Solving", "Communication", "Teamwork", "Time Management", "Adaptability"]);
    record0.set("tools", ["Git", "Docker", "Jenkins", "JIRA", "VS Code", "IntelliJ IDEA"]);
    record0.set("skillsRequired", ["Programming Languages", "Software Design Patterns", "Testing", "Version Control", "Agile Methodologies"]);
    record0.set("salaryInsights", "{'entry': '85K-95K', 'mid': '110K-130K', 'senior': '150K-180K'}");
    record0.set("relatedCareers", ["Backend Developer", "Frontend Developer", "Full Stack Developer", "DevOps Engineer"]);
    record0.set("roadmap", "{'phase1': 'Learn fundamentals (6-12 months)', 'phase2': 'Build projects and contribute to open source (6-12 months)', 'phase3': 'Gain professional experience (2-3 years)', 'phase4': 'Specialize or lead (3+ years)'}");
    record0.set("faqs", [{"q": "What languages should I learn?", "a": "Start with Python or Java, then learn JavaScript. Master data structures and algorithms."}, {"q": "How long to get a job?", "a": "Typically 6-12 months of focused learning plus portfolio projects."}, {"q": "Is a degree required?", "a": "Not always. Bootcamps and self-learning work, but a CS degree helps with some companies."}]);
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
    record1.set("name", "Frontend Developer");
    record1.set("slug", "frontend-developer");
    record1.set("description", "Creates user interfaces and experiences for web and mobile applications. Focuses on HTML, CSS, JavaScript, and modern frameworks.");
    record1.set("overview", "Frontend developers build the visual and interactive parts of applications that users see and interact with. They bridge design and backend functionality.");
    record1.set("averageSalary", 110000);
    record1.set("entrySalary", 75000);
    record1.set("midSalary", 110000);
    record1.set("seniorSalary", 150000);
    record1.set("salaryRange", "{'min': 75000, 'max': 170000}");
    record1.set("jobDemand", "Very High");
    record1.set("jobDemandOutlook", "Growing 16% through 2032. Demand for modern web development skills is strong.");
    record1.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record1.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record1.set("technicalSkills", ["HTML/CSS", "JavaScript", "React", "Vue.js", "Angular", "TypeScript", "Responsive Design", "Web Performance"]);
    record1.set("softSkills", ["Attention to Detail", "Communication", "Creativity", "Problem Solving", "Collaboration"]);
    record1.set("tools", ["VS Code", "Chrome DevTools", "Figma", "Git", "Webpack", "npm"]);
    record1.set("skillsRequired", ["UI/UX Principles", "CSS Frameworks", "JavaScript Frameworks", "API Integration", "Testing"]);
    record1.set("salaryInsights", "{'entry': '70K-85K', 'mid': '100K-120K', 'senior': '140K-170K'}");
    record1.set("relatedCareers", ["UI/UX Designer", "Full Stack Developer", "Backend Developer", "Web3 Developer"]);
    record1.set("roadmap", "{'phase1': 'Master HTML/CSS/JavaScript (3-6 months)', 'phase2': 'Learn a framework like React (3-6 months)', 'phase3': 'Build portfolio projects (3-6 months)', 'phase4': 'Professional experience and specialization (2+ years)'}");
    record1.set("faqs", [{"q": "Which framework should I learn?", "a": "React is most popular. Also learn Vue or Angular for versatility."}, {"q": "Do I need design skills?", "a": "Basic design understanding helps, but focus on development. Collaborate with designers."}, {"q": "How important is performance?", "a": "Very important. Learn about optimization, lazy loading, and web vitals."}]);
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
    record2.set("name", "Backend Developer");
    record2.set("slug", "backend-developer");
    record2.set("description", "Develops server-side logic, databases, and APIs that power applications. Handles data processing, security, and system architecture.");
    record2.set("overview", "Backend developers build the infrastructure that makes applications work. They manage databases, servers, and the logic that processes user requests.");
    record2.set("averageSalary", 125000);
    record2.set("entrySalary", 80000);
    record2.set("midSalary", 125000);
    record2.set("seniorSalary", 170000);
    record2.set("salaryRange", "{'min': 80000, 'max': 190000}");
    record2.set("jobDemand", "Very High");
    record2.set("jobDemandOutlook", "Growing 13% through 2032. Strong demand for scalable backend systems.");
    record2.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record2.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record2.set("technicalSkills", ["Python", "Java", "Node.js", "SQL", "NoSQL", "REST APIs", "Microservices", "System Design"]);
    record2.set("softSkills", ["Problem Solving", "Attention to Detail", "Communication", "Teamwork", "Analytical Thinking"]);
    record2.set("tools", ["Git", "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "Redis", "AWS"]);
    record2.set("skillsRequired", ["Database Design", "API Development", "Authentication/Security", "Scalability", "Cloud Platforms"]);
    record2.set("salaryInsights", "{'entry': '80K-95K', 'mid': '115K-135K', 'senior': '160K-190K'}");
    record2.set("relatedCareers", ["Full Stack Developer", "DevOps Engineer", "Data Engineer", "Solutions Architect"]);
    record2.set("roadmap", "{'phase1': 'Learn backend language and databases (6-12 months)', 'phase2': 'Build APIs and understand system design (6-12 months)', 'phase3': 'Gain professional experience (2-3 years)', 'phase4': 'Specialize in scalability or architecture (3+ years)'}");
    record2.set("faqs", [{"q": "What language should I learn?", "a": "Python or Java are great starts. Node.js is also popular for JavaScript developers."}, {"q": "How important is database knowledge?", "a": "Critical. Learn both SQL and NoSQL databases."}, {"q": "What about cloud platforms?", "a": "Essential. AWS, Google Cloud, or Azure experience is highly valued."}]);
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
    record3.set("name", "Full Stack Developer");
    record3.set("slug", "full-stack-developer");
    record3.set("description", "Develops both frontend and backend components of applications. Works across the entire technology stack from UI to database.");
    record3.set("overview", "Full stack developers are versatile professionals who can build complete applications from start to finish, handling both client and server-side development.");
    record3.set("averageSalary", 115000);
    record3.set("entrySalary", 75000);
    record3.set("midSalary", 115000);
    record3.set("seniorSalary", 160000);
    record3.set("salaryRange", "{'min': 75000, 'max': 180000}");
    record3.set("jobDemand", "Very High");
    record3.set("jobDemandOutlook", "Growing 13% through 2032. Highly sought after for startups and small teams.");
    record3.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record3.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record3.set("technicalSkills", ["JavaScript", "React", "Node.js", "SQL", "HTML/CSS", "REST APIs", "Git", "Databases"]);
    record3.set("softSkills", ["Versatility", "Problem Solving", "Communication", "Time Management", "Adaptability"]);
    record3.set("tools", ["VS Code", "Git", "Docker", "Postman", "MongoDB", "PostgreSQL", "AWS"]);
    record3.set("skillsRequired", ["Frontend Frameworks", "Backend Development", "Database Design", "API Development", "DevOps Basics"]);
    record3.set("salaryInsights", "{'entry': '75K-90K', 'mid': '105K-125K', 'senior': '150K-180K'}");
    record3.set("relatedCareers", ["Frontend Developer", "Backend Developer", "Web3 Developer", "DevOps Engineer"]);
    record3.set("roadmap", "{'phase1': 'Master frontend fundamentals (3-6 months)', 'phase2': 'Learn backend development (3-6 months)', 'phase3': 'Build full stack projects (3-6 months)', 'phase4': 'Professional experience and specialization (2+ years)'}");
    record3.set("faqs", [{"q": "Is it better to specialize or stay full stack?", "a": "Both paths are valid. Full stack is great for startups; specialization pays more at large companies."}, {"q": "Which tech stack should I learn?", "a": "MERN (MongoDB, Express, React, Node) is popular and in-demand."}, {"q": "How long to become job-ready?", "a": "6-12 months of focused learning with portfolio projects."}]);
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
    record4.set("name", "Data Analyst");
    record4.set("slug", "data-analyst");
    record4.set("description", "Analyzes data to help organizations make informed business decisions. Uses SQL, Python, and visualization tools to extract insights.");
    record4.set("overview", "Data analysts transform raw data into actionable insights that drive business strategy. They work with databases, spreadsheets, and visualization tools.");
    record4.set("averageSalary", 85000);
    record4.set("entrySalary", 60000);
    record4.set("midSalary", 85000);
    record4.set("seniorSalary", 120000);
    record4.set("salaryRange", "{'min': 60000, 'max': 140000}");
    record4.set("jobDemand", "High");
    record4.set("jobDemandOutlook", "Growing 36% through 2032, much faster than average. Data is critical to all industries.");
    record4.set("topPayingStates", ["California", "New York", "Massachusetts", "Washington", "Texas"]);
    record4.set("topStates", ["California", "New York", "Massachusetts", "Washington", "Texas"]);
    record4.set("technicalSkills", ["SQL", "Python", "Excel", "Tableau", "Power BI", "Statistics", "Data Visualization", "R"]);
    record4.set("softSkills", ["Analytical Thinking", "Communication", "Attention to Detail", "Problem Solving", "Business Acumen"]);
    record4.set("tools", ["SQL", "Python", "Tableau", "Power BI", "Excel", "Google Analytics", "Looker"]);
    record4.set("skillsRequired", ["Statistical Analysis", "Data Visualization", "SQL Queries", "Business Intelligence", "Dashboard Creation"]);
    record4.set("salaryInsights", "{'entry': '55K-70K', 'mid': '80K-95K', 'senior': '110K-140K'}");
    record4.set("relatedCareers", ["Data Scientist", "Business Analyst", "Data Engineer", "BI Developer"]);
    record4.set("roadmap", "{'phase1': 'Learn SQL and Excel (2-4 months)', 'phase2': 'Learn Python and statistics (3-6 months)', 'phase3': 'Master visualization tools (2-3 months)', 'phase4': 'Build portfolio and gain experience (1-2 years)'}");
    record4.set("faqs", [{"q": "Do I need a math degree?", "a": "No, but strong analytical skills and statistics knowledge help."}, {"q": "What's the difference between analyst and scientist?", "a": "Analysts focus on business insights; scientists build predictive models."}, {"q": "Which tool should I learn first?", "a": "SQL is essential. Then Python or R, then visualization tools like Tableau."}]);
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
    record5.set("name", "Data Scientist");
    record5.set("slug", "data-scientist");
    record5.set("description", "Builds predictive models and machine learning solutions using statistical analysis and programming. Solves complex business problems with data.");
    record5.set("overview", "Data scientists combine statistics, programming, and domain expertise to build models that predict outcomes and drive strategic decisions.");
    record5.set("averageSalary", 130000);
    record5.set("entrySalary", 90000);
    record5.set("midSalary", 130000);
    record5.set("seniorSalary", 180000);
    record5.set("salaryRange", "{'min': 90000, 'max': 210000}");
    record5.set("jobDemand", "Very High");
    record5.set("jobDemandOutlook", "Growing 36% through 2032. High demand for ML and AI expertise.");
    record5.set("topPayingStates", ["California", "New York", "Massachusetts", "Washington", "Texas"]);
    record5.set("topStates", ["California", "New York", "Massachusetts", "Washington", "Texas"]);
    record5.set("technicalSkills", ["Python", "R", "SQL", "Machine Learning", "Statistics", "TensorFlow", "Scikit-learn", "Deep Learning"]);
    record5.set("softSkills", ["Problem Solving", "Communication", "Analytical Thinking", "Creativity", "Business Acumen"]);
    record5.set("tools", ["Python", "R", "Jupyter", "TensorFlow", "Scikit-learn", "SQL", "Tableau"]);
    record5.set("skillsRequired", ["Machine Learning Algorithms", "Statistical Modeling", "Python/R Programming", "Data Visualization", "Domain Knowledge"]);
    record5.set("salaryInsights", "{'entry': '85K-105K', 'mid': '120K-145K', 'senior': '170K-210K'}");
    record5.set("relatedCareers", ["Machine Learning Engineer", "AI Engineer", "Data Analyst", "Data Engineer"]);
    record5.set("roadmap", "{'phase1': 'Learn Python and statistics (4-6 months)', 'phase2': 'Master machine learning algorithms (4-6 months)', 'phase3': 'Build ML projects and portfolio (3-6 months)', 'phase4': 'Professional experience and specialization (2+ years)'}");
    record5.set("faqs", [{"q": "Do I need a PhD?", "a": "No, but a strong math/stats background helps. Many successful data scientists have bootcamp training."}, {"q": "What's the difference from data analyst?", "a": "Scientists build predictive models; analysts focus on business insights."}, {"q": "How long to get a job?", "a": "12-18 months with strong portfolio and projects."}]);
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
    record6.set("name", "Machine Learning Engineer");
    record6.set("slug", "machine-learning-engineer");
    record6.set("description", "Designs and implements machine learning systems that learn from data. Focuses on model development, optimization, and deployment.");
    record6.set("overview", "ML engineers build systems that improve automatically through experience. They work on recommendation systems, computer vision, NLP, and predictive models.");
    record6.set("averageSalary", 140000);
    record6.set("entrySalary", 100000);
    record6.set("midSalary", 140000);
    record6.set("seniorSalary", 190000);
    record6.set("salaryRange", "{'min': 100000, 'max': 220000}");
    record6.set("jobDemand", "Very High");
    record6.set("jobDemandOutlook", "Growing 36% through 2032. Highest demand in AI/ML field.");
    record6.set("topPayingStates", ["California", "New York", "Massachusetts", "Washington", "Texas"]);
    record6.set("topStates", ["California", "New York", "Massachusetts", "Washington", "Texas"]);
    record6.set("technicalSkills", ["Python", "TensorFlow", "PyTorch", "Machine Learning", "Deep Learning", "SQL", "Statistics", "Distributed Systems"]);
    record6.set("softSkills", ["Problem Solving", "Analytical Thinking", "Communication", "Creativity", "Attention to Detail"]);
    record6.set("tools", ["Python", "TensorFlow", "PyTorch", "Jupyter", "Git", "Docker", "AWS SageMaker"]);
    record6.set("skillsRequired", ["Deep Learning", "Model Optimization", "Feature Engineering", "MLOps", "Cloud Platforms"]);
    record6.set("salaryInsights", "{'entry': '95K-115K', 'mid': '130K-155K', 'senior': '180K-220K'}");
    record6.set("relatedCareers", ["Data Scientist", "AI Engineer", "AI Researcher", "NLP Engineer"]);
    record6.set("roadmap", "{'phase1': 'Strong Python and math foundation (3-6 months)', 'phase2': 'Master ML algorithms and frameworks (6-9 months)', 'phase3': 'Build production ML systems (3-6 months)', 'phase4': 'Professional experience and specialization (2+ years)'}");
    record6.set("faqs", [{"q": "What's the difference from data scientist?", "a": "ML engineers focus on building production systems; data scientists focus on analysis."}, {"q": "Do I need a PhD?", "a": "No, but strong math and CS fundamentals are essential."}, {"q": "What frameworks should I learn?", "a": "TensorFlow and PyTorch are industry standards."}]);
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
    record7.set("name", "AI Engineer");
    record7.set("slug", "ai-engineer");
    record7.set("description", "Develops artificial intelligence solutions including large language models, computer vision, and autonomous systems. Implements cutting-edge AI technologies.");
    record7.set("overview", "AI engineers build intelligent systems that can perceive, learn, and make decisions. They work with LLMs, generative AI, and advanced neural networks.");
    record7.set("averageSalary", 150000);
    record7.set("entrySalary", 110000);
    record7.set("midSalary", 150000);
    record7.set("seniorSalary", 210000);
    record7.set("salaryRange", "{'min': 110000, 'max': 250000}");
    record7.set("jobDemand", "Very High");
    record7.set("jobDemandOutlook", "Growing 36% through 2032. Explosive demand for generative AI and LLM expertise.");
    record7.set("topPayingStates", ["California", "New York", "Massachusetts", "Washington", "Texas"]);
    record7.set("topStates", ["California", "New York", "Massachusetts", "Washington", "Texas"]);
    record7.set("technicalSkills", ["Python", "LLMs", "Transformers", "PyTorch", "Deep Learning", "NLP", "Computer Vision", "Prompt Engineering"]);
    record7.set("softSkills", ["Problem Solving", "Creativity", "Communication", "Analytical Thinking", "Innovation"]);
    record7.set("tools", ["Python", "PyTorch", "Hugging Face", "OpenAI API", "LangChain", "Git", "Docker"]);
    record7.set("skillsRequired", ["Generative AI", "LLM Fine-tuning", "Prompt Engineering", "Neural Networks", "MLOps"]);
    record7.set("salaryInsights", "{'entry': '105K-130K', 'mid': '140K-170K', 'senior': '200K-250K'}");
    record7.set("relatedCareers", ["Machine Learning Engineer", "AI Researcher", "NLP Engineer", "Computer Vision Engineer"]);
    record7.set("roadmap", "{'phase1': 'Master Python and deep learning (4-6 months)', 'phase2': 'Learn LLMs and transformers (3-6 months)', 'phase3': 'Build AI projects with LLMs (3-6 months)', 'phase4': 'Professional experience in AI systems (2+ years)'}");
    record7.set("faqs", [{"q": "What's the difference from ML engineer?", "a": "AI engineers focus on advanced AI systems like LLMs; ML engineers build general ML systems."}, {"q": "Is generative AI experience required?", "a": "Increasingly important. LLM and prompt engineering skills are highly valued."}, {"q": "How fast is this field changing?", "a": "Very fast. Continuous learning is essential."}]);
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
    record8.set("name", "DevOps Engineer");
    record8.set("slug", "devops-engineer");
    record8.set("description", "Manages infrastructure, deployment pipelines, and system reliability. Bridges development and operations using automation and cloud technologies.");
    record8.set("overview", "DevOps engineers automate and streamline the software development lifecycle. They manage infrastructure, CI/CD pipelines, and ensure system reliability.");
    record8.set("averageSalary", 130000);
    record8.set("entrySalary", 85000);
    record8.set("midSalary", 130000);
    record8.set("seniorSalary", 180000);
    record8.set("salaryRange", "{'min': 85000, 'max': 200000}");
    record8.set("jobDemand", "Very High");
    record8.set("jobDemandOutlook", "Growing 13% through 2032. High demand for cloud and automation expertise.");
    record8.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record8.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record8.set("technicalSkills", ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux", "Terraform", "Python", "Monitoring"]);
    record8.set("softSkills", ["Problem Solving", "Communication", "Teamwork", "Attention to Detail", "Continuous Learning"]);
    record8.set("tools", ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Terraform", "Ansible", "Prometheus"]);
    record8.set("skillsRequired", ["Container Orchestration", "Infrastructure as Code", "CI/CD Pipelines", "Cloud Platforms", "Monitoring/Logging"]);
    record8.set("salaryInsights", "{'entry': '80K-100K', 'mid': '120K-145K', 'senior': '170K-200K'}");
    record8.set("relatedCareers", ["Cloud Engineer", "Site Reliability Engineer", "Systems Administrator", "Backend Developer"]);
    record8.set("roadmap", "{'phase1': 'Learn Linux and networking (2-4 months)', 'phase2': 'Master Docker and Kubernetes (3-6 months)', 'phase3': 'Learn cloud platform and IaC (3-6 months)', 'phase4': 'Professional experience and specialization (2+ years)'}");
    record8.set("faqs", [{"q": "Do I need to be a developer first?", "a": "Not required, but helpful. Many DevOps engineers come from sysadmin backgrounds."}, {"q": "Which cloud platform should I learn?", "a": "AWS is most popular. Also learn Kubernetes for container orchestration."}, {"q": "What certifications are valuable?", "a": "AWS Solutions Architect, Kubernetes CKA, and Docker certifications are respected."}]);
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
    record9.set("name", "Cloud Engineer");
    record9.set("slug", "cloud-engineer");
    record9.set("description", "Designs, implements, and manages cloud infrastructure and services. Works with AWS, Azure, or Google Cloud to build scalable systems.");
    record9.set("overview", "Cloud engineers architect and maintain cloud-based infrastructure. They ensure systems are scalable, secure, and cost-effective.");
    record9.set("averageSalary", 125000);
    record9.set("entrySalary", 80000);
    record9.set("midSalary", 125000);
    record9.set("seniorSalary", 175000);
    record9.set("salaryRange", "{'min': 80000, 'max': 200000}");
    record9.set("jobDemand", "Very High");
    record9.set("jobDemandOutlook", "Growing 13% through 2032. Cloud adoption is accelerating across industries.");
    record9.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record9.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record9.set("technicalSkills", ["AWS", "Azure", "Google Cloud", "Networking", "Security", "Terraform", "Docker", "Kubernetes"]);
    record9.set("softSkills", ["Problem Solving", "Communication", "Attention to Detail", "Teamwork", "Analytical Thinking"]);
    record9.set("tools", ["AWS", "Terraform", "Docker", "Kubernetes", "CloudFormation", "Git", "Monitoring Tools"]);
    record9.set("skillsRequired", ["Cloud Architecture", "Infrastructure as Code", "Networking", "Security", "Cost Optimization"]);
    record9.set("salaryInsights", "{'entry': '75K-95K', 'mid': '115K-140K', 'senior': '165K-200K'}");
    record9.set("relatedCareers", ["DevOps Engineer", "Solutions Architect", "Cloud Security Engineer", "Systems Administrator"]);
    record9.set("roadmap", "{'phase1': 'Learn cloud fundamentals (2-4 months)', 'phase2': 'Master one cloud platform (3-6 months)', 'phase3': 'Learn infrastructure and security (3-6 months)', 'phase4': 'Professional experience and specialization (2+ years)'}");
    record9.set("faqs", [{"q": "Which cloud platform should I learn?", "a": "AWS is most popular. Also valuable to learn Azure and Google Cloud."}, {"q": "What certifications matter?", "a": "AWS Solutions Architect Associate, Azure Administrator, Google Cloud Associate."}, {"q": "Do I need networking knowledge?", "a": "Yes, understanding VPCs, subnets, and security groups is important."}]);
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
    record10.set("name", "Cybersecurity Analyst");
    record10.set("slug", "cybersecurity-analyst");
    record10.set("description", "Protects organizations from cyber threats by monitoring systems, identifying vulnerabilities, and implementing security measures.");
    record10.set("overview", "Cybersecurity analysts defend against cyber attacks and data breaches. They monitor networks, analyze threats, and implement protective measures.");
    record10.set("averageSalary", 105000);
    record10.set("entrySalary", 70000);
    record10.set("midSalary", 105000);
    record10.set("seniorSalary", 150000);
    record10.set("salaryRange", "{'min': 70000, 'max': 170000}");
    record10.set("jobDemand", "Very High");
    record10.set("jobDemandOutlook", "Growing 33% through 2032, much faster than average. Cyber threats are increasing.");
    record10.set("topPayingStates", ["California", "New York", "Massachusetts", "Washington", "Virginia"]);
    record10.set("topStates", ["California", "New York", "Massachusetts", "Washington", "Virginia"]);
    record10.set("technicalSkills", ["Network Security", "Firewalls", "Intrusion Detection", "Encryption", "Vulnerability Assessment", "Linux", "Python", "SIEM Tools"]);
    record10.set("softSkills", ["Attention to Detail", "Problem Solving", "Communication", "Analytical Thinking", "Vigilance"]);
    record10.set("tools", ["Wireshark", "Metasploit", "Nessus", "Splunk", "Snort", "Linux", "Python"]);
    record10.set("skillsRequired", ["Network Security", "Threat Analysis", "Incident Response", "Compliance", "Vulnerability Management"]);
    record10.set("salaryInsights", "{'entry': '65K-80K', 'mid': '100K-115K', 'senior': '140K-170K'}");
    record10.set("relatedCareers", ["Ethical Hacker", "Security Engineer", "Cloud Security Engineer", "Penetration Tester"]);
    record10.set("roadmap", "{'phase1': 'Learn networking and Linux (3-6 months)', 'phase2': 'Study security fundamentals (3-6 months)', 'phase3': 'Get Security+ certification (2-3 months)', 'phase4': 'Professional experience and specialization (2+ years)'}");
    record10.set("faqs", [{"q": "Do I need IT experience first?", "a": "Yes, typically 2-3 years of IT experience is expected."}, {"q": "What certifications are important?", "a": "Security+, CEH, CISSP are industry-standard certifications."}, {"q": "Is coding required?", "a": "Not required, but Python scripting skills are valuable."}]);
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
    record11.set("name", "Ethical Hacker");
    record11.set("slug", "ethical-hacker");
    record11.set("description", "Tests security systems by attempting to breach them with permission. Identifies vulnerabilities before malicious hackers can exploit them.");
    record11.set("overview", "Ethical hackers (penetration testers) use hacking techniques to find security weaknesses. They help organizations strengthen their defenses.");
    record11.set("averageSalary", 115000);
    record11.set("entrySalary", 75000);
    record11.set("midSalary", 115000);
    record11.set("seniorSalary", 160000);
    record11.set("salaryRange", "{'min': 75000, 'max': 180000}");
    record11.set("jobDemand", "Very High");
    record11.set("jobDemandOutlook", "Growing 33% through 2032. Demand for penetration testing is increasing.");
    record11.set("topPayingStates", ["California", "New York", "Massachusetts", "Washington", "Virginia"]);
    record11.set("topStates", ["California", "New York", "Massachusetts", "Washington", "Virginia"]);
    record11.set("technicalSkills", ["Penetration Testing", "Network Security", "Web Application Security", "Python", "Linux", "Metasploit", "Burp Suite", "Reverse Engineering"]);
    record11.set("softSkills", ["Problem Solving", "Attention to Detail", "Creativity", "Communication", "Ethical Judgment"]);
    record11.set("tools", ["Metasploit", "Burp Suite", "Wireshark", "Nmap", "Kali Linux", "Python", "Hashcat"]);
    record11.set("skillsRequired", ["Penetration Testing", "Vulnerability Assessment", "Exploit Development", "Social Engineering", "Report Writing"]);
    record11.set("salaryInsights", "{'entry': '70K-90K', 'mid': '110K-130K', 'senior': '150K-180K'}");
    record11.set("relatedCareers", ["Cybersecurity Analyst", "Security Engineer", "Cloud Security Engineer", "Penetration Tester"]);
    record11.set("roadmap", "{'phase1': 'Learn networking and Linux (3-6 months)', 'phase2': 'Study penetration testing (4-6 months)', 'phase3': 'Get CEH or OSCP certification (3-6 months)', 'phase4': 'Professional experience (2+ years)'}");
    record11.set("faqs", [{"q": "Is this legal?", "a": "Yes, when done with written permission. Always get authorization before testing."}, {"q": "What certifications matter?", "a": "CEH, OSCP, and GPEN are highly respected."}, {"q": "Do I need programming skills?", "a": "Python and scripting skills are valuable but not always required."}]);
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
    record12.set("name", "Network Engineer");
    record12.set("slug", "network-engineer");
    record12.set("description", "Designs, implements, and maintains computer networks. Ensures network performance, security, and reliability for organizations.");
    record12.set("overview", "Network engineers build and maintain the infrastructure that connects computers and systems. They design networks for performance and security.");
    record12.set("averageSalary", 110000);
    record12.set("entrySalary", 70000);
    record12.set("midSalary", 110000);
    record12.set("seniorSalary", 155000);
    record12.set("salaryRange", "{'min': 70000, 'max': 175000}");
    record12.set("jobDemand", "High");
    record12.set("jobDemandOutlook", "Growing 5% through 2032. Steady demand for network infrastructure.");
    record12.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record12.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record12.set("technicalSkills", ["Networking Protocols", "Cisco", "Routing", "Switching", "Firewalls", "VPN", "TCP/IP", "Network Security"]);
    record12.set("softSkills", ["Problem Solving", "Communication", "Attention to Detail", "Teamwork", "Patience"]);
    record12.set("tools", ["Cisco IOS", "Wireshark", "Packet Tracer", "GNS3", "Nmap", "Splunk", "Nagios"]);
    record12.set("skillsRequired", ["Network Design", "Routing & Switching", "Network Security", "Troubleshooting", "Monitoring"]);
    record12.set("salaryInsights", "{'entry': '65K-80K', 'mid': '105K-120K', 'senior': '145K-175K'}");
    record12.set("relatedCareers", ["Systems Administrator", "Network Security Engineer", "Cloud Engineer", "DevOps Engineer"]);
    record12.set("roadmap", "{'phase1': 'Learn networking fundamentals (3-6 months)', 'phase2': 'Study Cisco or other vendor (4-6 months)', 'phase3': 'Get CCNA certification (3-6 months)', 'phase4': 'Professional experience and specialization (2+ years)'}");
    record12.set("faqs", [{"q": "What certifications are important?", "a": "Cisco CCNA is the industry standard. Also valuable: CompTIA Network+."}, {"q": "Do I need IT experience?", "a": "Helpful but not always required. Some start directly in networking."}, {"q": "Is this field growing?", "a": "Steady growth. Cloud and SD-WAN are creating new opportunities."}]);
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
    record13.set("name", "Systems Administrator");
    record13.set("slug", "systems-administrator");
    record13.set("description", "Manages and maintains computer systems and servers. Handles user accounts, system updates, backups, and technical support.");
    record13.set("overview", "Systems administrators keep IT infrastructure running smoothly. They manage servers, user accounts, security, and system performance.");
    record13.set("averageSalary", 95000);
    record13.set("entrySalary", 60000);
    record13.set("midSalary", 95000);
    record13.set("seniorSalary", 135000);
    record13.set("salaryRange", "{'min': 60000, 'max': 155000}");
    record13.set("jobDemand", "High");
    record13.set("jobDemandOutlook", "Growing 5% through 2032. Steady demand for system management.");
    record13.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record13.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record13.set("technicalSkills", ["Linux", "Windows Server", "Active Directory", "Virtualization", "Backup/Recovery", "Scripting", "Networking", "Security"]);
    record13.set("softSkills", ["Problem Solving", "Communication", "Attention to Detail", "Teamwork", "Patience"]);
    record13.set("tools", ["Linux", "Windows Server", "VMware", "Hyper-V", "Ansible", "Puppet", "Nagios"]);
    record13.set("skillsRequired", ["System Management", "User Administration", "Backup & Recovery", "Security", "Troubleshooting"]);
    record13.set("salaryInsights", "{'entry': '55K-70K', 'mid': '90K-105K', 'senior': '125K-155K'}");
    record13.set("relatedCareers", ["Network Engineer", "Cloud Engineer", "DevOps Engineer", "IT Support Specialist"]);
    record13.set("roadmap", "{'phase1': 'Learn Linux and Windows Server (3-6 months)', 'phase2': 'Study system administration (3-6 months)', 'phase3': 'Get CompTIA A+ or Linux+ (2-3 months)', 'phase4': 'Professional experience (2+ years)'}");
    record13.set("faqs", [{"q": "Do I need IT support experience?", "a": "Helpful but not required. Many transition from IT support to sysadmin."}, {"q": "What certifications matter?", "a": "CompTIA A+, Linux+, and Microsoft certifications are valuable."}, {"q": "Is this field growing?", "a": "Steady growth. Cloud and automation are changing the role."}]);
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
    record14.set("name", "Database Administrator");
    record14.set("slug", "database-administrator");
    record14.set("description", "Manages databases, ensuring data integrity, security, and performance. Handles backups, recovery, and optimization.");
    record14.set("overview", "Database administrators maintain the systems that store and manage critical business data. They ensure databases are secure, fast, and reliable.");
    record14.set("averageSalary", 110000);
    record14.set("entrySalary", 75000);
    record14.set("midSalary", 110000);
    record14.set("seniorSalary", 155000);
    record14.set("salaryRange", "{'min': 75000, 'max': 175000}");
    record14.set("jobDemand", "High");
    record14.set("jobDemandOutlook", "Growing 8% through 2032. Steady demand for database expertise.");
    record14.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record14.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record14.set("technicalSkills", ["SQL", "Oracle", "PostgreSQL", "MySQL", "Backup/Recovery", "Performance Tuning", "Security", "Replication"]);
    record14.set("softSkills", ["Attention to Detail", "Problem Solving", "Communication", "Analytical Thinking", "Reliability"]);
    record14.set("tools", ["SQL", "Oracle", "PostgreSQL", "MySQL", "MongoDB", "Backup Tools", "Monitoring Tools"]);
    record14.set("skillsRequired", ["Database Design", "Performance Tuning", "Backup & Recovery", "Security", "Troubleshooting"]);
    record14.set("salaryInsights", "{'entry': '70K-85K', 'mid': '105K-120K', 'senior': '145K-175K'}");
    record14.set("relatedCareers", ["Data Engineer", "Backend Developer", "Systems Administrator", "Data Analyst"]);
    record14.set("roadmap", "{'phase1': 'Learn SQL and database fundamentals (3-6 months)', 'phase2': 'Study a specific database system (3-6 months)', 'phase3': 'Get database certification (2-3 months)', 'phase4': 'Professional experience (2+ years)'}");
    record14.set("faqs", [{"q": "Which database should I learn?", "a": "SQL is essential. Then Oracle, PostgreSQL, or MySQL depending on industry."}, {"q": "What certifications are valuable?", "a": "Oracle DBA, Microsoft SQL Server, and PostgreSQL certifications."}, {"q": "Is this field growing?", "a": "Steady growth. Cloud databases and NoSQL are creating new opportunities."}]);
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
    record15.set("name", "UI/UX Designer");
    record15.set("slug", "ui-ux-designer");
    record15.set("description", "Designs user interfaces and experiences for applications and websites. Focuses on usability, aesthetics, and user satisfaction.");
    record15.set("overview", "UI/UX designers create intuitive and beautiful interfaces. They research user needs, design solutions, and test usability.");
    record15.set("averageSalary", 95000);
    record15.set("entrySalary", 60000);
    record15.set("midSalary", 95000);
    record15.set("seniorSalary", 140000);
    record15.set("salaryRange", "{'min': 60000, 'max': 160000}");
    record15.set("jobDemand", "High");
    record15.set("jobDemandOutlook", "Growing 13% through 2032. Increasing focus on user experience.");
    record15.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record15.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record15.set("technicalSkills", ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research", "Wireframing", "Visual Design", "Interaction Design"]);
    record15.set("softSkills", ["Creativity", "Communication", "Empathy", "Problem Solving", "Attention to Detail"]);
    record15.set("tools", ["Figma", "Adobe XD", "Sketch", "Protopie", "Usability Testing Tools", "Analytics Tools"]);
    record15.set("skillsRequired", ["User Research", "Wireframing", "Prototyping", "Visual Design", "Usability Testing"]);
    record15.set("salaryInsights", "{'entry': '55K-70K', 'mid': '90K-105K', 'senior': '130K-160K'}");
    record15.set("relatedCareers", ["Frontend Developer", "Product Manager", "UX Researcher", "Interaction Designer"]);
    record15.set("roadmap", "{'phase1': 'Learn design fundamentals (2-4 months)', 'phase2': 'Master design tools like Figma (2-4 months)', 'phase3': 'Build portfolio with projects (3-6 months)', 'phase4': 'Professional experience (1-2 years)'}");
    record15.set("faqs", [{"q": "Do I need to code?", "a": "Not required, but understanding frontend development helps."}, {"q": "What should my portfolio include?", "a": "Case studies showing your design process, not just final designs."}, {"q": "Is a design degree required?", "a": "No, bootcamps and self-learning work. Portfolio matters most."}]);
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
    record16.set("name", "Product Manager");
    record16.set("slug", "product-manager");
    record16.set("description", "Defines product vision, strategy, and roadmap. Works with engineering, design, and business teams to deliver successful products.");
    record16.set("overview", "Product managers guide product development from conception to launch. They balance user needs, business goals, and technical constraints.");
    record16.set("averageSalary", 125000);
    record16.set("entrySalary", 80000);
    record16.set("midSalary", 125000);
    record16.set("seniorSalary", 180000);
    record16.set("salaryRange", "{'min': 80000, 'max': 210000}");
    record16.set("jobDemand", "High");
    record16.set("jobDemandOutlook", "Growing 8% through 2032. Steady demand for product leadership.");
    record16.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record16.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record16.set("technicalSkills", ["Product Strategy", "Data Analysis", "User Research", "Roadmapping", "Agile", "SQL", "Analytics", "Technical Understanding"]);
    record16.set("softSkills", ["Leadership", "Communication", "Strategic Thinking", "Problem Solving", "Empathy"]);
    record16.set("tools", ["Jira", "Figma", "Analytics Tools", "SQL", "Mixpanel", "Amplitude", "Looker"]);
    record16.set("skillsRequired", ["Product Strategy", "User Research", "Data Analysis", "Roadmapping", "Stakeholder Management"]);
    record16.set("salaryInsights", "{'entry': '75K-95K', 'mid': '115K-140K', 'senior': '170K-210K'}");
    record16.set("relatedCareers", ["Project Manager", "Business Analyst", "Data Analyst", "UI/UX Designer"]);
    record16.set("roadmap", "{'phase1': 'Gain experience in tech or business (2-3 years)', 'phase2': 'Transition to associate PM role (1-2 years)', 'phase3': 'Become PM and build expertise (2-3 years)', 'phase4': 'Senior PM or Director level (3+ years)'}");
    record16.set("faqs", [{"q": "What background do I need?", "a": "Tech, business, or design backgrounds all work. Experience matters most."}, {"q": "Do I need an MBA?", "a": "Not required. Many successful PMs don't have MBAs."}, {"q": "What skills are most important?", "a": "Communication, data analysis, and strategic thinking."}]);
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
    record17.set("name", "Project Manager");
    record17.set("slug", "project-manager");
    record17.set("description", "Plans, executes, and monitors projects to ensure they meet goals, timelines, and budgets. Coordinates teams and manages stakeholders.");
    record17.set("overview", "Project managers oversee project execution from planning to completion. They manage scope, schedule, budget, and team coordination.");
    record17.set("averageSalary", 105000);
    record17.set("entrySalary", 70000);
    record17.set("midSalary", 105000);
    record17.set("seniorSalary", 150000);
    record17.set("salaryRange", "{'min': 70000, 'max': 170000}");
    record17.set("jobDemand", "High");
    record17.set("jobDemandOutlook", "Growing 6% through 2032. Steady demand for project management.");
    record17.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record17.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record17.set("technicalSkills", ["Project Management", "Agile/Scrum", "Risk Management", "Budget Management", "Scheduling", "Communication", "Leadership", "Problem Solving"]);
    record17.set("softSkills", ["Leadership", "Communication", "Organization", "Problem Solving", "Negotiation"]);
    record17.set("tools", ["Jira", "Asana", "Monday.com", "Microsoft Project", "Confluence", "Slack", "Excel"]);
    record17.set("skillsRequired", ["Project Planning", "Risk Management", "Stakeholder Management", "Agile Methodologies", "Budget Management"]);
    record17.set("salaryInsights", "{'entry': '65K-80K', 'mid': '100K-115K', 'senior': '140K-170K'}");
    record17.set("relatedCareers", ["Product Manager", "Business Analyst", "Scrum Master", "Program Manager"]);
    record17.set("roadmap", "{'phase1': 'Gain experience in tech or business (2-3 years)', 'phase2': 'Get PMP or Scrum Master certification (2-3 months)', 'phase3': 'Become PM and build expertise (2-3 years)', 'phase4': 'Senior PM or Director level (3+ years)'}");
    record17.set("faqs", [{"q": "What certifications matter?", "a": "PMP, Scrum Master (CSM), and Agile certifications are valuable."}, {"q": "Do I need tech background?", "a": "Not required, but helpful. Many PMs come from various backgrounds."}, {"q": "What's the difference from product manager?", "a": "PMs manage execution; product managers define strategy."}]);
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
    record18.set("name", "Business Analyst");
    record18.set("slug", "business-analyst");
    record18.set("description", "Analyzes business processes and requirements to improve efficiency and solve problems. Works with stakeholders to define solutions.");
    record18.set("overview", "Business analysts bridge business and technology. They analyze requirements, identify improvements, and help implement solutions.");
    record18.set("averageSalary", 90000);
    record18.set("entrySalary", 60000);
    record18.set("midSalary", 90000);
    record18.set("seniorSalary", 130000);
    record18.set("salaryRange", "{'min': 60000, 'max': 150000}");
    record18.set("jobDemand", "High");
    record18.set("jobDemandOutlook", "Growing 8% through 2032. Steady demand for business analysis.");
    record18.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record18.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record18.set("technicalSkills", ["Requirements Analysis", "Process Modeling", "Data Analysis", "SQL", "Business Intelligence", "Documentation", "Stakeholder Management", "Problem Solving"]);
    record18.set("softSkills", ["Communication", "Analytical Thinking", "Problem Solving", "Attention to Detail", "Empathy"]);
    record18.set("tools", ["SQL", "Excel", "Tableau", "Jira", "Confluence", "Visio", "Power BI"]);
    record18.set("skillsRequired", ["Requirements Gathering", "Process Analysis", "Data Analysis", "Documentation", "Stakeholder Management"]);
    record18.set("salaryInsights", "{'entry': '55K-70K', 'mid': '85K-100K', 'senior': '120K-150K'}");
    record18.set("relatedCareers", ["Product Manager", "Project Manager", "Data Analyst", "Systems Analyst"]);
    record18.set("roadmap", "{'phase1': 'Gain business experience (2-3 years)', 'phase2': 'Learn analysis tools and SQL (3-6 months)', 'phase3': 'Transition to BA role (1-2 years)', 'phase4': 'Senior BA or manager level (3+ years)'}");
    record18.set("faqs", [{"q": "What background do I need?", "a": "Business, IT, or any field works. Analytical skills matter most."}, {"q": "Do I need certifications?", "a": "CBAP and IIBA certifications are valuable but not required."}, {"q": "What skills are most important?", "a": "Communication, analytical thinking, and SQL knowledge."}]);
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
    record19.set("description", "Tests software to identify bugs and ensure quality. Creates test plans, executes tests, and reports defects.");
    record19.set("overview", "QA engineers ensure software quality through systematic testing. They find bugs before users do and verify that features work correctly.");
    record19.set("averageSalary", 85000);
    record19.set("entrySalary", 55000);
    record19.set("midSalary", 85000);
    record19.set("seniorSalary", 125000);
    record19.set("salaryRange", "{'min': 55000, 'max': 145000}");
    record19.set("jobDemand", "High");
    record19.set("jobDemandOutlook", "Growing 13% through 2032. Increasing focus on quality assurance.");
    record19.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record19.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record19.set("technicalSkills", ["Test Planning", "Manual Testing", "Automation Testing", "Selenium", "Python", "SQL", "Bug Tracking", "Test Management"]);
    record19.set("softSkills", ["Attention to Detail", "Problem Solving", "Communication", "Analytical Thinking", "Patience"]);
    record19.set("tools", ["Selenium", "Jira", "TestRail", "Postman", "Python", "SQL", "Jenkins"]);
    record19.set("skillsRequired", ["Test Planning", "Test Automation", "Bug Reporting", "SQL", "Automation Frameworks"]);
    record19.set("salaryInsights", "{'entry': '50K-65K', 'mid': '80K-95K', 'senior': '115K-145K'}");
    record19.set("relatedCareers", ["Automation Tester", "QA Automation Engineer", "Test Manager", "Software Engineer"]);
    record19.set("roadmap", "{'phase1': 'Learn testing fundamentals (2-4 months)', 'phase2': 'Master test automation tools (3-6 months)', 'phase3': 'Learn programming for automation (3-6 months)', 'phase4': 'Professional experience (1-2 years)'}");
    record19.set("faqs", [{"q": "Do I need to code?", "a": "Not required for manual QA, but essential for automation."}, {"q": "What tools should I learn?", "a": "Selenium is most popular. Also learn Jira and SQL."}, {"q": "Is this a good career path?", "a": "Yes, especially if you transition to automation testing."}]);
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
    record20.set("name", "Automation Tester");
    record20.set("slug", "automation-tester");
    record20.set("description", "Develops automated tests to verify software functionality. Uses testing frameworks and programming to create test scripts.");
    record20.set("overview", "Automation testers write code to automatically test software. They create test frameworks and maintain test suites.");
    record20.set("averageSalary", 95000);
    record20.set("entrySalary", 65000);
    record20.set("midSalary", 95000);
    record20.set("seniorSalary", 140000);
    record20.set("salaryRange", "{'min': 65000, 'max': 160000}");
    record20.set("jobDemand", "High");
    record20.set("jobDemandOutlook", "Growing 13% through 2032. High demand for test automation.");
    record20.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record20.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record20.set("technicalSkills", ["Selenium", "Python", "Java", "Test Frameworks", "CI/CD", "SQL", "API Testing", "Performance Testing"]);
    record20.set("softSkills", ["Problem Solving", "Attention to Detail", "Communication", "Analytical Thinking", "Creativity"]);
    record20.set("tools", ["Selenium", "Python", "Java", "Postman", "Jenkins", "Jira", "TestNG"]);
    record20.set("skillsRequired", ["Test Automation", "Programming", "Test Framework Design", "API Testing", "CI/CD Integration"]);
    record20.set("salaryInsights", "{'entry': '60K-75K', 'mid': '90K-105K', 'senior': '130K-160K'}");
    record20.set("relatedCareers", ["QA Engineer", "Software Engineer", "DevOps Engineer", "Performance Tester"]);
    record20.set("roadmap", "{'phase1': 'Learn programming and testing (3-6 months)', 'phase2': 'Master Selenium and test frameworks (3-6 months)', 'phase3': 'Build automation projects (3-6 months)', 'phase4': 'Professional experience (1-2 years)'}");
    record20.set("faqs", [{"q": "What programming language should I learn?", "a": "Python or Java. Python is easier to start with."}, {"q": "Is this better than manual QA?", "a": "Yes, automation testers typically earn more and have better career growth."}, {"q": "What frameworks should I learn?", "a": "Selenium is most popular. Also learn TestNG or JUnit."}]);
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
    record21.set("name", "Mobile App Developer");
    record21.set("slug", "mobile-app-developer");
    record21.set("description", "Develops applications for mobile devices (iOS and Android). Creates user-friendly apps using mobile development frameworks.");
    record21.set("overview", "Mobile app developers build applications for smartphones and tablets. They work with iOS, Android, or cross-platform frameworks.");
    record21.set("averageSalary", 110000);
    record21.set("entrySalary", 75000);
    record21.set("midSalary", 110000);
    record21.set("seniorSalary", 155000);
    record21.set("salaryRange", "{'min': 75000, 'max': 175000}");
    record21.set("jobDemand", "High");
    record21.set("jobDemandOutlook", "Growing 13% through 2032. Continued demand for mobile apps.");
    record21.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record21.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record21.set("technicalSkills", ["Swift", "Kotlin", "React Native", "Flutter", "JavaScript", "Mobile UI/UX", "APIs", "Databases"]);
    record21.set("softSkills", ["Problem Solving", "Creativity", "Communication", "Attention to Detail", "Adaptability"]);
    record21.set("tools", ["Xcode", "Android Studio", "React Native", "Flutter", "Git", "Firebase", "Postman"]);
    record21.set("skillsRequired", ["Mobile Frameworks", "Native Development", "API Integration", "Mobile UI Design", "Performance Optimization"]);
    record21.set("salaryInsights", "{'entry': '70K-85K', 'mid': '105K-125K', 'senior': '145K-175K'}");
    record21.set("relatedCareers", ["Frontend Developer", "Full Stack Developer", "Game Developer", "Backend Developer"]);
    record21.set("roadmap", "{'phase1': 'Learn mobile fundamentals (3-6 months)', 'phase2': 'Master a platform (iOS or Android) (3-6 months)', 'phase3': 'Build mobile apps (3-6 months)', 'phase4': 'Professional experience (1-2 years)'}");
    record21.set("faqs", [{"q": "Should I learn iOS or Android?", "a": "Both are valuable. React Native or Flutter for cross-platform is also popular."}, {"q": "Do I need to know web development?", "a": "Helpful but not required. Mobile development has its own patterns."}, {"q": "What's the job market like?", "a": "Strong demand, especially for experienced developers."}]);
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
    record22.set("name", "Game Developer");
    record22.set("slug", "game-developer");
    record22.set("description", "Develops video games using game engines and programming. Creates gameplay mechanics, graphics, and interactive experiences.");
    record22.set("overview", "Game developers create interactive entertainment. They work with game engines like Unity and Unreal to build engaging games.");
    record22.set("averageSalary", 100000);
    record22.set("entrySalary", 65000);
    record22.set("midSalary", 100000);
    record22.set("seniorSalary", 150000);
    record22.set("salaryRange", "{'min': 65000, 'max': 180000}");
    record22.set("jobDemand", "High");
    record22.set("jobDemandOutlook", "Growing 13% through 2032. Gaming industry continues to expand.");
    record22.set("topPayingStates", ["California", "Washington", "Texas", "New York", "Massachusetts"]);
    record22.set("topStates", ["California", "Washington", "Texas", "New York", "Massachusetts"]);
    record22.set("technicalSkills", ["C#", "C++", "Unity", "Unreal Engine", "Game Physics", "Graphics Programming", "AI", "Networking"]);
    record22.set("softSkills", ["Creativity", "Problem Solving", "Teamwork", "Attention to Detail", "Passion for Games"]);
    record22.set("tools", ["Unity", "Unreal Engine", "C#", "C++", "Git", "Blender", "Visual Studio"]);
    record22.set("skillsRequired", ["Game Engine Proficiency", "Programming", "Game Design", "Physics", "Optimization"]);
    record22.set("salaryInsights", "{'entry': '60K-75K', 'mid': '95K-110K', 'senior': '140K-180K'}");
    record22.set("relatedCareers", ["Graphics Programmer", "Game Designer", "Mobile App Developer", "Software Engineer"]);
    record22.set("roadmap", "{'phase1': 'Learn game engine (Unity or Unreal) (3-6 months)', 'phase2': 'Learn C# or C++ (3-6 months)', 'phase3': 'Build game projects (6-12 months)', 'phase4': 'Professional experience (1-2 years)'}");
    record22.set("faqs", [{"q": "Which engine should I learn?", "a": "Unity is more beginner-friendly. Unreal is more powerful for AAA games."}, {"q": "Do I need art skills?", "a": "Not required, but helpful. You can work with artists."}, {"q": "Is the job market competitive?", "a": "Yes, but there's strong demand for experienced developers."}]);
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
    record23.set("name", "Embedded Systems Engineer");
    record23.set("slug", "embedded-systems-engineer");
    record23.set("description", "Develops software for embedded systems in devices like IoT, automotive, and industrial equipment. Works with hardware and firmware.");
    record23.set("overview", "Embedded systems engineers create software for specialized devices. They work with microcontrollers, real-time systems, and hardware integration.");
    record23.set("averageSalary", 105000);
    record23.set("entrySalary", 75000);
    record23.set("midSalary", 105000);
    record23.set("seniorSalary", 150000);
    record23.set("salaryRange", "{'min': 75000, 'max': 170000}");
    record23.set("jobDemand", "High");
    record23.set("jobDemandOutlook", "Growing 13% through 2032. IoT and smart devices driving demand.");
    record23.set("topPayingStates", ["California", "Texas", "Massachusetts", "Washington", "New York"]);
    record23.set("topStates", ["California", "Texas", "Massachusetts", "Washington", "New York"]);
    record23.set("technicalSkills", ["C", "C++", "Assembly", "Microcontrollers", "RTOS", "Hardware Interfacing", "Firmware Development", "Debugging"]);
    record23.set("softSkills", ["Problem Solving", "Attention to Detail", "Analytical Thinking", "Teamwork", "Patience"]);
    record23.set("tools", ["C/C++", "ARM Cortex", "RTOS", "Oscilloscope", "Logic Analyzer", "Git", "Embedded IDEs"]);
    record23.set("skillsRequired", ["Embedded C/C++", "Microcontroller Programming", "Hardware Interfacing", "Real-time Systems", "Debugging"]);
    record23.set("salaryInsights", "{'entry': '70K-85K', 'mid': '100K-115K', 'senior': '140K-170K'}");
    record23.set("relatedCareers", ["Firmware Engineer", "IoT Developer", "Robotics Engineer", "Hardware Engineer"]);
    record23.set("roadmap", "{'phase1': 'Learn C and embedded fundamentals (4-6 months)', 'phase2': 'Study microcontrollers and RTOS (4-6 months)', 'phase3': 'Build embedded projects (3-6 months)', 'phase4': 'Professional experience (2+ years)'}");
    record23.set("faqs", [{"q": "What's the difference from software engineering?", "a": "Embedded engineers work with hardware constraints and real-time systems."}, {"q": "Do I need electronics knowledge?", "a": "Helpful but not required. You can learn on the job."}, {"q": "What microcontrollers should I learn?", "a": "ARM Cortex-M is most common. Also Arduino for learning."}]);
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
    record24.set("name", "Blockchain Developer");
    record24.set("slug", "blockchain-developer");
    record24.set("description", "Develops blockchain applications and smart contracts. Works with cryptocurrencies, distributed ledgers, and decentralized systems.");
    record24.set("overview", "Blockchain developers build decentralized applications and smart contracts. They work with blockchain platforms like Ethereum and Solidity.");
    record24.set("averageSalary", 135000);
    record24.set("entrySalary", 90000);
    record24.set("midSalary", 135000);
    record24.set("seniorSalary", 190000);
    record24.set("salaryRange", "{'min': 90000, 'max': 220000}");
    record24.set("jobDemand", "Very High");
    record24.set("jobDemandOutlook", "Growing rapidly. High demand for blockchain expertise.");
    record24.set("topPayingStates", ["California", "New York", "Massachusetts", "Washington", "Texas"]);
    record24.set("topStates", ["California", "New York", "Massachusetts", "Washington", "Texas"]);
    record24.set("technicalSkills", ["Solidity", "Ethereum", "Smart Contracts", "Web3.js", "Cryptography", "JavaScript", "Python", "Distributed Systems"]);
    record24.set("softSkills", ["Problem Solving", "Analytical Thinking", "Creativity", "Communication", "Continuous Learning"]);
    record24.set("tools", ["Solidity", "Ethereum", "Hardhat", "Truffle", "Web3.js", "Git", "Remix IDE"]);
    record24.set("skillsRequired", ["Smart Contract Development", "Solidity", "Blockchain Architecture", "Cryptography", "DeFi Protocols"]);
    record24.set("salaryInsights", "{'entry': '85K-105K', 'mid': '125K-150K', 'senior': '180K-220K'}");
    record24.set("relatedCareers", ["Web3 Developer", "Smart Contract Auditor", "Cryptocurrency Developer", "Backend Developer"]);
    record24.set("roadmap", "{'phase1': 'Learn Solidity and Ethereum (3-6 months)', 'phase2': 'Build smart contracts (3-6 months)', 'phase3': 'Understand DeFi and protocols (3-6 months)', 'phase4': 'Professional experience (1-2 years)'}");
    record24.set("faqs", [{"q": "Do I need crypto knowledge?", "a": "Helpful but not required. Focus on development skills."}, {"q": "What's the job market like?", "a": "Very strong demand, especially for experienced developers."}, {"q": "Is this field stable?", "a": "Growing but volatile. Continuous learning is essential."}]);
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
    record25.set("name", "Web3 Developer");
    record25.set("slug", "web3-developer");
    record25.set("description", "Develops decentralized web applications (dApps) using blockchain technology. Combines frontend development with Web3 protocols.");
    record25.set("overview", "Web3 developers build decentralized applications that interact with blockchain. They combine traditional web development with blockchain integration.");
    record25.set("averageSalary", 130000);
    record25.set("entrySalary", 85000);
    record25.set("midSalary", 130000);
    record25.set("seniorSalary", 185000);
    record25.set("salaryRange", "{'min': 85000, 'max': 210000}");
    record25.set("jobDemand", "Very High");
    record25.set("jobDemandOutlook", "Growing rapidly. High demand for Web3 expertise.");
    record25.set("topPayingStates", ["California", "New York", "Massachusetts", "Washington", "Texas"]);
    record25.set("topStates", ["California", "New York", "Massachusetts", "Washington", "Texas"]);
    record25.set("technicalSkills", ["JavaScript", "React", "Web3.js", "Solidity", "Ethereum", "Smart Contracts", "CSS", "Node.js"]);
    record25.set("softSkills", ["Problem Solving", "Creativity", "Communication", "Adaptability", "Continuous Learning"]);
    record25.set("tools", ["React", "Web3.js", "Ethers.js", "Hardhat", "Solidity", "Git", "MetaMask"]);
    record25.set("skillsRequired", ["Frontend Development", "Web3 Integration", "Smart Contract Interaction", "Blockchain Understanding", "DeFi Protocols"]);
    record25.set("salaryInsights", "{'entry': '80K-100K', 'mid': '120K-145K', 'senior': '175K-210K'}");
    record25.set("relatedCareers", ["Frontend Developer", "Blockchain Developer", "Full Stack Developer", "Smart Contract Developer"]);
    record25.set("roadmap", "{'phase1': 'Master React and JavaScript (3-6 months)', 'phase2': 'Learn Web3.js and blockchain basics (3-6 months)', 'phase3': 'Build dApps (3-6 months)', 'phase4': 'Professional experience (1-2 years)'}");
    record25.set("faqs", [{"q": "Do I need blockchain knowledge?", "a": "Helpful but not required. Learn as you build dApps."}, {"q": "What's the job market like?", "a": "Very strong demand for Web3 developers."}, {"q": "Is this field stable?", "a": "Growing but volatile. Continuous learning is essential."}]);
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
    record26.set("name", "AR/VR Developer");
    record26.set("slug", "ar-vr-developer");
    record26.set("description", "Develops augmented and virtual reality applications. Creates immersive experiences using AR/VR platforms and game engines.");
    record26.set("overview", "AR/VR developers create immersive experiences for virtual and augmented reality. They work with specialized tools and platforms.");
    record26.set("averageSalary", 115000);
    record26.set("entrySalary", 80000);
    record26.set("midSalary", 115000);
    record26.set("seniorSalary", 160000);
    record26.set("salaryRange", "{'min': 80000, 'max': 185000}");
    record26.set("jobDemand", "High");
    record26.set("jobDemandOutlook", "Growing 13% through 2032. AR/VR adoption is increasing.");
    record26.set("topPayingStates", ["California", "Washington", "Massachusetts", "New York", "Texas"]);
    record26.set("topStates", ["California", "Washington", "Massachusetts", "New York", "Texas"]);
    record26.set("technicalSkills", ["Unity", "Unreal Engine", "C#", "C++", "3D Graphics", "Physics", "Spatial Computing", "JavaScript"]);
    record26.set("softSkills", ["Creativity", "Problem Solving", "Teamwork", "Attention to Detail", "Visualization"]);
    record26.set("tools", ["Unity", "Unreal Engine", "C#", "C++", "Blender", "Git", "Visual Studio"]);
    record26.set("skillsRequired", ["Game Engine Proficiency", "3D Graphics", "Spatial Computing", "Physics Simulation", "User Experience Design"]);
    record26.set("salaryInsights", "{'entry': '75K-90K', 'mid': '110K-130K', 'senior': '150K-185K'}");
    record26.set("relatedCareers", ["Game Developer", "Graphics Programmer", "3D Artist", "Software Engineer"]);
    record26.set("roadmap", "{'phase1': 'Learn game engine (Unity or Unreal) (3-6 months)', 'phase2': 'Study 3D graphics and physics (3-6 months)', 'phase3': 'Build AR/VR projects (6-12 months)', 'phase4': 'Professional experience (1-2 years)'}");
    record26.set("faqs", [{"q": "Which platform should I target?", "a": "Meta Quest is most accessible. Also learn for Apple Vision Pro."}, {"q": "Do I need 3D art skills?", "a": "Not required, but helpful. You can work with artists."}, {"q": "What's the job market like?", "a": "Growing demand, especially for experienced developers."}]);
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
    record27.set("name", "Robotics Engineer");
    record27.set("slug", "robotics-engineer");
    record27.set("description", "Designs and develops robotic systems and automation. Works with hardware, firmware, and control systems.");
    record27.set("overview", "Robotics engineers create automated systems and robots. They combine mechanical engineering, electronics, and software development.");
    record27.set("averageSalary", 110000);
    record27.set("entrySalary", 75000);
    record27.set("midSalary", 110000);
    record27.set("seniorSalary", 160000);
    record27.set("salaryRange", "{'min': 75000, 'max': 185000}");
    record27.set("jobDemand", "High");
    record27.set("jobDemandOutlook", "Growing 13% through 2032. Automation and robotics are expanding.");
    record27.set("topPayingStates", ["California", "Massachusetts", "Texas", "Washington", "New York"]);
    record27.set("topStates", ["California", "Massachusetts", "Texas", "Washington", "New York"]);
    record27.set("technicalSkills", ["C++", "Python", "ROS", "Control Systems", "Embedded Systems", "Mechanical Design", "Electronics", "Kinematics"]);
    record27.set("softSkills", ["Problem Solving", "Analytical Thinking", "Teamwork", "Attention to Detail", "Creativity"]);
    record27.set("tools", ["ROS", "C++", "Python", "CAD Software", "Simulators", "Git", "MATLAB"]);
    record27.set("skillsRequired", ["Robotics Frameworks", "Control Systems", "Embedded Programming", "Mechanical Design", "Sensor Integration"]);
    record27.set("salaryInsights", "{'entry': '70K-85K', 'mid': '105K-120K', 'senior': '150K-185K'}");
    record27.set("relatedCareers", ["Embedded Systems Engineer", "Mechanical Engineer", "Control Systems Engineer", "Software Engineer"]);
    record27.set("roadmap", "{'phase1': 'Learn C++ and Python (3-6 months)', 'phase2': 'Study ROS and control systems (4-6 months)', 'phase3': 'Build robotics projects (6-12 months)', 'phase4': 'Professional experience (2+ years)'}");
    record27.set("faqs", [{"q": "Do I need mechanical engineering knowledge?", "a": "Helpful but not required. You can learn on the job."}, {"q": "What's ROS?", "a": "Robot Operating System - the standard framework for robotics development."}, {"q": "What's the job market like?", "a": "Growing demand in manufacturing, healthcare, and research."}]);
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
    record28.set("name", "Big Data Engineer");
    record28.set("slug", "big-data-engineer");
    record28.set("description", "Designs and maintains systems for processing large volumes of data. Works with distributed computing frameworks and data pipelines.");
    record28.set("overview", "Big data engineers build systems to process and analyze massive datasets. They work with Hadoop, Spark, and cloud platforms.");
    record28.set("averageSalary", 135000);
    record28.set("entrySalary", 95000);
    record28.set("midSalary", 135000);
    record28.set("seniorSalary", 185000);
    record28.set("salaryRange", "{'min': 95000, 'max': 210000}");
    record28.set("jobDemand", "Very High");
    record28.set("jobDemandOutlook", "Growing 36% through 2032. High demand for big data expertise.");
    record28.set("topPayingStates", ["California", "New York", "Massachusetts", "Washington", "Texas"]);
    record28.set("topStates", ["California", "New York", "Massachusetts", "Washington", "Texas"]);
    record28.set("technicalSkills", ["Hadoop", "Spark", "Python", "SQL", "Scala", "Kafka", "Hive", "Cloud Platforms"]);
    record28.set("softSkills", ["Problem Solving", "Analytical Thinking", "Communication", "Attention to Detail", "Teamwork"]);
    record28.set("tools", ["Hadoop", "Spark", "Kafka", "Python", "SQL", "Hive", "AWS/GCP"]);
    record28.set("skillsRequired", ["Distributed Computing", "Data Pipeline Design", "SQL", "Spark/Hadoop", "Cloud Platforms"]);
    record28.set("salaryInsights", "{'entry': '90K-110K', 'mid': '130K-155K', 'senior': '175K-210K'}");
    record28.set("relatedCareers", ["Data Engineer", "Data Scientist", "Backend Developer", "DevOps Engineer"]);
    record28.set("roadmap", "{'phase1': 'Learn Python and SQL (3-6 months)', 'phase2': 'Master Spark and Hadoop (4-6 months)', 'phase3': 'Build data pipeline projects (3-6 months)', 'phase4': 'Professional experience (2+ years)'}");
    record28.set("faqs", [{"q": "What's the difference from data engineer?", "a": "Big data engineers focus on large-scale distributed systems."}, {"q": "Do I need Hadoop knowledge?", "a": "Spark is more modern, but Hadoop knowledge is valuable."}, {"q": "What's the job market like?", "a": "Very strong demand for experienced big data engineers."}]);
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
    record29.set("name", "Data Engineer");
    record29.set("slug", "data-engineer");
    record29.set("description", "Builds and maintains data infrastructure and pipelines. Ensures data quality, accessibility, and performance for analytics.");
    record29.set("overview", "Data engineers build the systems that collect, process, and store data. They create pipelines that feed data to analysts and scientists.");
    record29.set("averageSalary", 125000);
    record29.set("entrySalary", 85000);
    record29.set("midSalary", 125000);
    record29.set("seniorSalary", 175000);
    record29.set("salaryRange", "{'min': 85000, 'max': 200000}");
    record29.set("jobDemand", "Very High");
    record29.set("jobDemandOutlook", "Growing 36% through 2032. High demand for data infrastructure.");
    record29.set("topPayingStates", ["California", "New York", "Massachusetts", "Washington", "Texas"]);
    record29.set("topStates", ["California", "New York", "Massachusetts", "Washington", "Texas"]);
    record29.set("technicalSkills", ["Python", "SQL", "Spark", "Kafka", "ETL", "Cloud Platforms", "Data Warehousing", "Databases"]);
    record29.set("softSkills", ["Problem Solving", "Attention to Detail", "Communication", "Analytical Thinking", "Teamwork"]);
    record29.set("tools", ["Python", "SQL", "Spark", "Kafka", "Airflow", "AWS/GCP", "Docker"]);
    record29.set("skillsRequired", ["ETL Development", "Data Pipeline Design", "SQL", "Cloud Platforms", "Data Warehousing"]);
    record29.set("salaryInsights", "{'entry': '80K-100K', 'mid': '120K-140K', 'senior': '165K-200K'}");
    record29.set("relatedCareers", ["Big Data Engineer", "Backend Developer", "DevOps Engineer", "Data Scientist"]);
    record29.set("roadmap", "{'phase1': 'Learn Python and SQL (3-6 months)', 'phase2': 'Master ETL and data pipelines (4-6 months)', 'phase3': 'Learn cloud platforms (3-6 months)', 'phase4': 'Professional experience (2+ years)'}");
    record29.set("faqs", [{"q": "What's the difference from big data engineer?", "a": "Data engineers focus on pipelines; big data engineers on distributed systems."}, {"q": "Do I need to know Spark?", "a": "Very helpful. Also learn Kafka and cloud platforms."}, {"q": "What's the job market like?", "a": "Very strong demand for experienced data engineers."}]);
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
    record30.set("name", "Site Reliability Engineer");
    record30.set("slug", "site-reliability-engineer");
    record30.set("description", "Ensures system reliability, performance, and uptime. Combines software engineering with operations to build resilient systems.");
    record30.set("overview", "SREs apply software engineering principles to operations. They automate infrastructure, improve reliability, and reduce downtime.");
    record30.set("averageSalary", 140000);
    record30.set("entrySalary", 95000);
    record30.set("midSalary", 140000);
    record30.set("seniorSalary", 190000);
    record30.set("salaryRange", "{'min': 95000, 'max': 220000}");
    record30.set("jobDemand", "Very High");
    record30.set("jobDemandOutlook", "Growing 13% through 2032. High demand for reliability expertise.");
    record30.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record30.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record30.set("technicalSkills", ["Python", "Go", "Kubernetes", "Docker", "Monitoring", "Linux", "Cloud Platforms", "Automation"]);
    record30.set("softSkills", ["Problem Solving", "Communication", "Teamwork", "Attention to Detail", "Continuous Learning"]);
    record30.set("tools", ["Kubernetes", "Docker", "Prometheus", "Grafana", "Python", "Go", "Terraform"]);
    record30.set("skillsRequired", ["System Design", "Automation", "Monitoring", "Incident Response", "Infrastructure as Code"]);
    record30.set("salaryInsights", "{'entry': '90K-110K', 'mid': '135K-160K', 'senior': '180K-220K'}");
    record30.set("relatedCareers", ["DevOps Engineer", "Cloud Engineer", "Backend Developer", "Systems Administrator"]);
    record30.set("roadmap", "{'phase1': 'Gain DevOps/SysAdmin experience (2-3 years)', 'phase2': 'Learn SRE principles and tools (3-6 months)', 'phase3': 'Transition to SRE role (1-2 years)', 'phase4': 'Senior SRE or manager level (3+ years)'}");
    record30.set("faqs", [{"q": "What's the difference from DevOps?", "a": "SREs focus on reliability; DevOps on deployment automation."}, {"q": "Do I need operations experience?", "a": "Yes, typically 2-3 years of DevOps or SysAdmin experience."}, {"q": "What's the job market like?", "a": "Very strong demand for experienced SREs."}]);
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
    record31.set("name", "IT Support Specialist");
    record31.set("slug", "it-support-specialist");
    record31.set("description", "Provides technical support to end users. Troubleshoots hardware and software issues, manages tickets, and maintains systems.");
    record31.set("overview", "IT support specialists help users with technical problems. They provide first-line support and maintain IT infrastructure.");
    record31.set("averageSalary", 60000);
    record31.set("entrySalary", 40000);
    record31.set("midSalary", 60000);
    record31.set("seniorSalary", 90000);
    record31.set("salaryRange", "{'min': 40000, 'max': 110000}");
    record31.set("jobDemand", "High");
    record31.set("jobDemandOutlook", "Growing 5% through 2032. Steady demand for IT support.");
    record31.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record31.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record31.set("technicalSkills", ["Windows", "Mac", "Linux", "Networking", "Troubleshooting", "Help Desk Software", "Hardware", "Software Installation"]);
    record31.set("softSkills", ["Communication", "Patience", "Problem Solving", "Teamwork", "Customer Service"]);
    record31.set("tools", ["Windows", "Mac", "Linux", "Jira", "ServiceNow", "Remote Desktop", "Ticketing Systems"]);
    record31.set("skillsRequired", ["Troubleshooting", "Customer Service", "System Administration", "Networking Basics", "Hardware Support"]);
    record31.set("salaryInsights", "{'entry': '38K-50K', 'mid': '55K-70K', 'senior': '80K-110K'}");
    record31.set("relatedCareers", ["Systems Administrator", "Network Engineer", "IT Consultant", "Technical Support Engineer"]);
    record31.set("roadmap", "{'phase1': 'Get CompTIA A+ certification (2-3 months)', 'phase2': 'Gain IT support experience (1-2 years)', 'phase3': 'Specialize or move to sysadmin (2-3 years)', 'phase4': 'Senior roles or management (3+ years)'}");
    record31.set("faqs", [{"q": "What certifications matter?", "a": "CompTIA A+ is the standard entry-level certification."}, {"q": "Is this a good career start?", "a": "Yes, great entry point into IT. Many advance to sysadmin or other roles."}, {"q": "What's the job market like?", "a": "Steady demand. Good for career growth into other IT roles."}]);
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
    record32.set("name", "Technical Support Engineer");
    record32.set("slug", "technical-support-engineer");
    record32.set("description", "Provides technical support for software and systems. Troubleshoots complex issues, documents solutions, and escalates problems.");
    record32.set("overview", "Technical support engineers help customers with technical problems. They provide advanced support and work with development teams.");
    record32.set("averageSalary", 75000);
    record32.set("entrySalary", 50000);
    record32.set("midSalary", 75000);
    record32.set("seniorSalary", 110000);
    record32.set("salaryRange", "{'min': 50000, 'max': 130000}");
    record32.set("jobDemand", "High");
    record32.set("jobDemandOutlook", "Growing 5% through 2032. Steady demand for technical support.");
    record32.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record32.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record32.set("technicalSkills", ["Troubleshooting", "Networking", "Databases", "APIs", "Linux", "Windows", "Scripting", "Documentation"]);
    record32.set("softSkills", ["Communication", "Problem Solving", "Patience", "Teamwork", "Customer Service"]);
    record32.set("tools", ["Linux", "Windows", "Networking Tools", "Databases", "Ticketing Systems", "Remote Support Tools"]);
    record32.set("skillsRequired", ["Technical Troubleshooting", "Customer Communication", "Documentation", "System Administration", "Problem Analysis"]);
    record32.set("salaryInsights", "{'entry': '48K-60K', 'mid': '70K-85K', 'senior': '100K-130K'}");
    record32.set("relatedCareers", ["IT Support Specialist", "Systems Administrator", "Network Engineer", "IT Consultant"]);
    record32.set("roadmap", "{'phase1': 'Gain IT support experience (1-2 years)', 'phase2': 'Develop technical expertise (2-3 years)', 'phase3': 'Become senior support engineer (2-3 years)', 'phase4': 'Manager or specialist roles (3+ years)'}");
    record32.set("faqs", [{"q": "What skills are most important?", "a": "Troubleshooting, communication, and technical knowledge."}, {"q": "Is this a good career path?", "a": "Yes, good for advancing to other technical roles."}, {"q": "What's the job market like?", "a": "Steady demand, especially for experienced engineers."}]);
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
    record33.set("name", "IT Consultant");
    record33.set("slug", "it-consultant");
    record33.set("description", "Advises organizations on IT strategy, systems, and solutions. Analyzes needs and recommends technology implementations.");
    record33.set("overview", "IT consultants help organizations improve their technology. They assess needs, recommend solutions, and guide implementations.");
    record33.set("averageSalary", 110000);
    record33.set("entrySalary", 70000);
    record33.set("midSalary", 110000);
    record33.set("seniorSalary", 160000);
    record33.set("salaryRange", "{'min': 70000, 'max': 190000}");
    record33.set("jobDemand", "High");
    record33.set("jobDemandOutlook", "Growing 8% through 2032. Steady demand for IT consulting.");
    record33.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record33.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record33.set("technicalSkills", ["Systems Analysis", "IT Strategy", "Cloud Platforms", "Security", "Networking", "Databases", "Project Management", "Business Analysis"]);
    record33.set("softSkills", ["Communication", "Problem Solving", "Business Acumen", "Leadership", "Presentation Skills"]);
    record33.set("tools", ["Cloud Platforms", "Networking Tools", "Analysis Tools", "Project Management Tools", "Databases"]);
    record33.set("skillsRequired", ["IT Strategy", "Systems Analysis", "Business Consulting", "Project Management", "Technical Knowledge"]);
    record33.set("salaryInsights", "{'entry': '65K-80K', 'mid': '105K-125K', 'senior': '150K-190K'}");
    record33.set("relatedCareers", ["Solutions Architect", "Business Analyst", "Project Manager", "Systems Administrator"]);
    record33.set("roadmap", "{'phase1': 'Gain IT experience (3-5 years)', 'phase2': 'Develop consulting skills (2-3 years)', 'phase3': 'Become IT consultant (2-3 years)', 'phase4': 'Senior consultant or manager (3+ years)'}");
    record33.set("faqs", [{"q": "What background do I need?", "a": "IT experience plus business understanding. MBA helpful but not required."}, {"q": "What skills are most important?", "a": "Communication, business acumen, and technical knowledge."}, {"q": "What's the job market like?", "a": "Good demand, especially for experienced consultants."}]);
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
    record34.set("name", "Solutions Architect");
    record34.set("slug", "solutions-architect");
    record34.set("description", "Designs technology solutions for business problems. Works with clients to understand needs and architect scalable systems.");
    record34.set("overview", "Solutions architects design comprehensive technology solutions. They bridge business requirements and technical implementation.");
    record34.set("averageSalary", 135000);
    record34.set("entrySalary", 90000);
    record34.set("midSalary", 135000);
    record34.set("seniorSalary", 190000);
    record34.set("salaryRange", "{'min': 90000, 'max': 220000}");
    record34.set("jobDemand", "High");
    record34.set("jobDemandOutlook", "Growing 8% through 2032. Steady demand for architecture expertise.");
    record34.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record34.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record34.set("technicalSkills", ["System Design", "Cloud Architecture", "Networking", "Security", "Databases", "Scalability", "Business Analysis", "Technical Leadership"]);
    record34.set("softSkills", ["Communication", "Leadership", "Problem Solving", "Business Acumen", "Presentation Skills"]);
    record34.set("tools", ["Cloud Platforms", "Architecture Tools", "Networking Tools", "Databases", "Monitoring Tools"]);
    record34.set("skillsRequired", ["System Architecture", "Cloud Platforms", "Security Design", "Scalability", "Business Consulting"]);
    record34.set("salaryInsights", "{'entry': '85K-105K', 'mid': '130K-155K', 'senior': '180K-220K'}");
    record34.set("relatedCareers", ["Enterprise Architect", "Cloud Architect", "Backend Developer", "DevOps Engineer"]);
    record34.set("roadmap", "{'phase1': 'Gain software development experience (3-5 years)', 'phase2': 'Develop architecture skills (2-3 years)', 'phase3': 'Become solutions architect (2-3 years)', 'phase4': 'Senior architect or manager (3+ years)'}");
    record34.set("faqs", [{"q": "What background do I need?", "a": "Software development experience plus architecture knowledge."}, {"q": "What certifications matter?", "a": "AWS Solutions Architect, Azure Solutions Architect certifications."}, {"q": "What's the job market like?", "a": "Strong demand for experienced solutions architects."}]);
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
    record35.set("name", "Enterprise Architect");
    record35.set("slug", "enterprise-architect");
    record35.set("description", "Designs enterprise-wide technology strategies and systems. Aligns IT with business goals and manages complex implementations.");
    record35.set("overview", "Enterprise architects design organization-wide technology strategies. They ensure systems align with business objectives and scale effectively.");
    record35.set("averageSalary", 150000);
    record35.set("entrySalary", 110000);
    record35.set("midSalary", 150000);
    record35.set("seniorSalary", 210000);
    record35.set("salaryRange", "{'min': 110000, 'max': 250000}");
    record35.set("jobDemand", "High");
    record35.set("jobDemandOutlook", "Growing 8% through 2032. Steady demand for enterprise architecture.");
    record35.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record35.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record35.set("technicalSkills", ["Enterprise Architecture", "System Design", "Cloud Platforms", "Security", "Governance", "Business Analysis", "Strategic Planning", "Technical Leadership"]);
    record35.set("softSkills", ["Leadership", "Communication", "Strategic Thinking", "Business Acumen", "Presentation Skills"]);
    record35.set("tools", ["Architecture Tools", "Cloud Platforms", "Enterprise Tools", "Governance Tools", "Monitoring Tools"]);
    record35.set("skillsRequired", ["Enterprise Architecture", "Strategic Planning", "Governance", "Cloud Platforms", "Business Alignment"]);
    record35.set("salaryInsights", "{'entry': '105K-125K', 'mid': '145K-170K', 'senior': '200K-250K'}");
    record35.set("relatedCareers", ["Solutions Architect", "CTO", "IT Director", "Chief Architect"]);
    record35.set("roadmap", "{'phase1': 'Gain software development experience (3-5 years)', 'phase2': 'Develop architecture skills (3-5 years)', 'phase3': 'Become solutions architect (2-3 years)', 'phase4': 'Enterprise architect (3+ years)'}");
    record35.set("faqs", [{"q": "What background do I need?", "a": "Extensive software and architecture experience, plus business knowledge."}, {"q": "What certifications matter?", "a": "TOGAF, AWS Solutions Architect, Azure certifications."}, {"q": "What's the job market like?", "a": "Strong demand for experienced enterprise architects."}]);
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
    record36.set("name", "CRM Developer");
    record36.set("slug", "crm-developer");
    record36.set("description", "Develops and customizes CRM systems like Salesforce. Creates workflows, integrations, and custom features.");
    record36.set("overview", "CRM developers build and customize customer relationship management systems. They work with platforms like Salesforce and Dynamics.");
    record36.set("averageSalary", 105000);
    record36.set("entrySalary", 70000);
    record36.set("midSalary", 105000);
    record36.set("seniorSalary", 150000);
    record36.set("salaryRange", "{'min': 70000, 'max': 170000}");
    record36.set("jobDemand", "High");
    record36.set("jobDemandOutlook", "Growing 8% through 2032. Steady demand for CRM expertise.");
    record36.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record36.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record36.set("technicalSkills", ["Salesforce", "Apex", "Lightning", "JavaScript", "SQL", "APIs", "Integrations", "Configuration"]);
    record36.set("softSkills", ["Problem Solving", "Communication", "Attention to Detail", "Teamwork", "Business Understanding"]);
    record36.set("tools", ["Salesforce", "Apex", "Lightning", "JavaScript", "SQL", "Git", "Postman"]);
    record36.set("skillsRequired", ["Salesforce Development", "Apex Programming", "Lightning Components", "API Integration", "Configuration"]);
    record36.set("salaryInsights", "{'entry': '65K-80K', 'mid': '100K-115K', 'senior': '140K-170K'}");
    record36.set("relatedCareers", ["Backend Developer", "Full Stack Developer", "ERP Consultant", "Systems Administrator"]);
    record36.set("roadmap", "{'phase1': 'Learn Salesforce basics (2-4 months)', 'phase2': 'Master Apex and Lightning (3-6 months)', 'phase3': 'Build Salesforce projects (3-6 months)', 'phase4': 'Professional experience (1-2 years)'}");
    record36.set("faqs", [{"q": "Do I need Salesforce experience?", "a": "Not required. Salesforce training is available and certifications help."}, {"q": "What certifications matter?", "a": "Salesforce Administrator and Developer certifications are valuable."}, {"q": "What's the job market like?", "a": "Strong demand for Salesforce developers."}]);
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
    record37.set("name", "ERP Consultant");
    record37.set("slug", "erp-consultant");
    record37.set("description", "Implements and customizes ERP systems like SAP and Oracle. Advises on business processes and system configuration.");
    record37.set("overview", "ERP consultants help organizations implement enterprise resource planning systems. They configure systems and guide business process changes.");
    record37.set("averageSalary", 120000);
    record37.set("entrySalary", 80000);
    record37.set("midSalary", 120000);
    record37.set("seniorSalary", 170000);
    record37.set("salaryRange", "{'min': 80000, 'max': 200000}");
    record37.set("jobDemand", "High");
    record37.set("jobDemandOutlook", "Growing 8% through 2032. Steady demand for ERP expertise.");
    record37.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record37.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record37.set("technicalSkills", ["SAP", "Oracle", "Business Processes", "Configuration", "SQL", "APIs", "Project Management", "Business Analysis"]);
    record37.set("softSkills", ["Communication", "Problem Solving", "Business Acumen", "Leadership", "Change Management"]);
    record37.set("tools", ["SAP", "Oracle", "SQL", "Project Management Tools", "Business Analysis Tools"]);
    record37.set("skillsRequired", ["ERP Systems", "Business Process Design", "Configuration", "Project Management", "Business Consulting"]);
    record37.set("salaryInsights", "{'entry': '75K-95K', 'mid': '115K-135K', 'senior': '160K-200K'}");
    record37.set("relatedCareers", ["CRM Developer", "Business Analyst", "Solutions Architect", "IT Consultant"]);
    record37.set("roadmap", "{'phase1': 'Gain business experience (2-3 years)', 'phase2': 'Learn ERP system (3-6 months)', 'phase3': 'Become ERP consultant (2-3 years)', 'phase4': 'Senior consultant or manager (3+ years)'}");
    record37.set("faqs", [{"q": "Do I need business background?", "a": "Yes, understanding business processes is important."}, {"q": "What certifications matter?", "a": "SAP and Oracle certifications are valuable."}, {"q": "What's the job market like?", "a": "Strong demand for experienced ERP consultants."}]);
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
    record38.set("name", "Digital Marketing (Tech-focused)");
    record38.set("slug", "digital-marketing-tech");
    record38.set("description", "Manages digital marketing campaigns with technical focus. Works with marketing automation, analytics, and technology platforms.");
    record38.set("overview", "Tech-focused digital marketers combine marketing strategy with technical skills. They work with marketing automation, analytics, and data.");
    record38.set("averageSalary", 85000);
    record38.set("entrySalary", 55000);
    record38.set("midSalary", 85000);
    record38.set("seniorSalary", 130000);
    record38.set("salaryRange", "{'min': 55000, 'max': 150000}");
    record38.set("jobDemand", "High");
    record38.set("jobDemandOutlook", "Growing 10% through 2032. Increasing demand for tech-savvy marketers.");
    record38.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record38.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record38.set("technicalSkills", ["Google Analytics", "Marketing Automation", "SQL", "Python", "HTML/CSS", "APIs", "Data Analysis", "SEO/SEM"]);
    record38.set("softSkills", ["Communication", "Creativity", "Analytical Thinking", "Problem Solving", "Business Acumen"]);
    record38.set("tools", ["Google Analytics", "HubSpot", "Marketo", "SQL", "Python", "Google Ads", "SEMrush"]);
    record38.set("skillsRequired", ["Digital Marketing Strategy", "Analytics", "Marketing Automation", "Data Analysis", "Technical SEO"]);
    record38.set("salaryInsights", "{'entry': '50K-65K', 'mid': '80K-95K', 'senior': '120K-150K'}");
    record38.set("relatedCareers", ["SEO Specialist", "Data Analyst", "Product Manager", "Content Strategist"]);
    record38.set("roadmap", "{'phase1': 'Learn digital marketing fundamentals (2-4 months)', 'phase2': 'Develop technical skills (3-6 months)', 'phase3': 'Build marketing projects (3-6 months)', 'phase4': 'Professional experience (1-2 years)'}");
    record38.set("faqs", [{"q": "Do I need coding skills?", "a": "Not required, but SQL and Python are valuable."}, {"q": "What tools should I learn?", "a": "Google Analytics, HubSpot, and marketing automation platforms."}, {"q": "What's the job market like?", "a": "Growing demand for tech-savvy marketers."}]);
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
    record39.set("name", "SEO Specialist (Technical SEO)");
    record39.set("slug", "seo-specialist-technical");
    record39.set("description", "Optimizes websites for search engines with technical focus. Works on site structure, performance, and technical SEO.");
    record39.set("overview", "Technical SEO specialists optimize websites for search engines. They focus on site architecture, performance, and technical implementation.");
    record39.set("averageSalary", 80000);
    record39.set("entrySalary", 50000);
    record39.set("midSalary", 80000);
    record39.set("seniorSalary", 120000);
    record39.set("salaryRange", "{'min': 50000, 'max': 140000}");
    record39.set("jobDemand", "High");
    record39.set("jobDemandOutlook", "Growing 10% through 2032. Steady demand for SEO expertise.");
    record39.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record39.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record39.set("technicalSkills", ["SEO", "HTML/CSS", "JavaScript", "Site Performance", "Analytics", "SQL", "Python", "Crawling Tools"]);
    record39.set("softSkills", ["Analytical Thinking", "Problem Solving", "Communication", "Attention to Detail", "Creativity"]);
    record39.set("tools", ["Google Analytics", "SEMrush", "Ahrefs", "Screaming Frog", "Google Search Console", "Python", "SQL"]);
    record39.set("skillsRequired", ["Technical SEO", "Site Performance Optimization", "Analytics", "HTML/CSS", "Data Analysis"]);
    record39.set("salaryInsights", "{'entry': '45K-60K', 'mid': '75K-90K', 'senior': '110K-140K'}");
    record39.set("relatedCareers", ["Digital Marketing", "Content Strategist", "Data Analyst", "Frontend Developer"]);
    record39.set("roadmap", "{'phase1': 'Learn SEO fundamentals (2-4 months)', 'phase2': 'Develop technical skills (3-6 months)', 'phase3': 'Build SEO projects (3-6 months)', 'phase4': 'Professional experience (1-2 years)'}");
    record39.set("faqs", [{"q": "Do I need coding skills?", "a": "HTML/CSS helpful. Python and JavaScript are valuable."}, {"q": "What tools should I learn?", "a": "Google Analytics, SEMrush, Ahrefs, and Screaming Frog."}, {"q": "What's the job market like?", "a": "Good demand for technical SEO specialists."}]);
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
    record40.set("name", "Content Strategist (Tech niche)");
    record40.set("slug", "content-strategist-tech");
    record40.set("description", "Creates content strategy for tech companies and products. Develops content plans, manages creation, and measures performance.");
    record40.set("overview", "Tech content strategists create content for technology audiences. They develop strategies, manage creation, and measure impact.");
    record40.set("averageSalary", 85000);
    record40.set("entrySalary", 55000);
    record40.set("midSalary", 85000);
    record40.set("seniorSalary", 130000);
    record40.set("salaryRange", "{'min': 55000, 'max': 150000}");
    record40.set("jobDemand", "High");
    record40.set("jobDemandOutlook", "Growing 10% through 2032. Increasing demand for content strategy.");
    record40.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record40.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record40.set("technicalSkills", ["Content Strategy", "Analytics", "SEO", "Technical Writing", "Data Analysis", "CMS", "HTML/CSS", "Marketing Automation"]);
    record40.set("softSkills", ["Communication", "Creativity", "Analytical Thinking", "Problem Solving", "Leadership"]);
    record40.set("tools", ["Google Analytics", "CMS", "SEMrush", "Ahrefs", "Content Management Tools", "SQL", "Python"]);
    record40.set("skillsRequired", ["Content Strategy", "Technical Writing", "Analytics", "SEO", "Project Management"]);
    record40.set("salaryInsights", "{'entry': '50K-65K', 'mid': '80K-95K', 'senior': '120K-150K'}");
    record40.set("relatedCareers", ["Digital Marketing", "SEO Specialist", "Product Manager", "Data Analyst"]);
    record40.set("roadmap", "{'phase1': 'Develop writing and marketing skills (1-2 years)', 'phase2': 'Learn content strategy (3-6 months)', 'phase3': 'Build content projects (3-6 months)', 'phase4': 'Professional experience (1-2 years)'}");
    record40.set("faqs", [{"q": "Do I need technical background?", "a": "Not required, but understanding tech helps."}, {"q": "What skills are most important?", "a": "Writing, strategy, and analytics."}, {"q": "What's the job market like?", "a": "Growing demand for tech content strategists."}]);
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
    record41.set("name", "API Developer");
    record41.set("slug", "api-developer");
    record41.set("description", "Designs and develops APIs for applications and services. Creates RESTful and GraphQL APIs that enable integrations.");
    record41.set("overview", "API developers build interfaces that allow applications to communicate. They design and implement RESTful and GraphQL APIs.");
    record41.set("averageSalary", 115000);
    record41.set("entrySalary", 80000);
    record41.set("midSalary", 115000);
    record41.set("seniorSalary", 160000);
    record41.set("salaryRange", "{'min': 80000, 'max': 185000}");
    record41.set("jobDemand", "Very High");
    record41.set("jobDemandOutlook", "Growing 13% through 2032. High demand for API expertise.");
    record41.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record41.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record41.set("technicalSkills", ["REST APIs", "GraphQL", "Node.js", "Python", "Java", "SQL", "API Design", "Security"]);
    record41.set("softSkills", ["Problem Solving", "Communication", "Attention to Detail", "Teamwork", "Documentation"]);
    record41.set("tools", ["Node.js", "Python", "Java", "Postman", "GraphQL", "Git", "Docker"]);
    record41.set("skillsRequired", ["API Design", "REST/GraphQL", "Backend Development", "Security", "Documentation"]);
    record41.set("salaryInsights", "{'entry': '75K-95K', 'mid': '110K-130K', 'senior': '150K-185K'}");
    record41.set("relatedCareers", ["Backend Developer", "Full Stack Developer", "Integration Engineer", "Software Engineer"]);
    record41.set("roadmap", "{'phase1': 'Learn backend development (3-6 months)', 'phase2': 'Master API design and REST (3-6 months)', 'phase3': 'Build API projects (3-6 months)', 'phase4': 'Professional experience (1-2 years)'}");
    record41.set("faqs", [{"q": "What's the difference from backend developer?", "a": "API developers focus on API design; backend developers on full systems."}, {"q": "Should I learn REST or GraphQL?", "a": "REST first, then GraphQL. Both are valuable."}, {"q": "What's the job market like?", "a": "Very strong demand for API developers."}]);
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
    record42.set("name", "Integration Engineer");
    record42.set("slug", "integration-engineer");
    record42.set("description", "Integrates different systems and applications. Develops solutions that connect disparate systems and enable data flow.");
    record42.set("overview", "Integration engineers connect different systems and applications. They build solutions that enable seamless data and process flow.");
    record42.set("averageSalary", 110000);
    record42.set("entrySalary", 75000);
    record42.set("midSalary", 110000);
    record42.set("seniorSalary", 155000);
    record42.set("salaryRange", "{'min': 75000, 'max': 180000}");
    record42.set("jobDemand", "High");
    record42.set("jobDemandOutlook", "Growing 8% through 2032. Steady demand for integration expertise.");
    record42.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record42.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record42.set("technicalSkills", ["Integration Platforms", "APIs", "ETL", "Middleware", "SQL", "Python", "XML/JSON", "System Design"]);
    record42.set("softSkills", ["Problem Solving", "Communication", "Attention to Detail", "Teamwork", "Analytical Thinking"]);
    record42.set("tools", ["MuleSoft", "Talend", "Apache Kafka", "APIs", "SQL", "Python", "Git"]);
    record42.set("skillsRequired", ["Integration Architecture", "API Integration", "ETL Development", "Middleware", "System Design"]);
    record42.set("salaryInsights", "{'entry': '70K-85K', 'mid': '105K-120K', 'senior': '145K-180K'}");
    record42.set("relatedCareers", ["Backend Developer", "API Developer", "Data Engineer", "Solutions Architect"]);
    record42.set("roadmap", "{'phase1': 'Learn backend development (3-6 months)', 'phase2': 'Study integration platforms (3-6 months)', 'phase3': 'Build integration projects (3-6 months)', 'phase4': 'Professional experience (1-2 years)'}");
    record42.set("faqs", [{"q": "What integration platforms should I learn?", "a": "MuleSoft and Talend are popular. Also learn APIs and ETL."}, {"q": "Do I need backend experience?", "a": "Yes, helpful to understand systems and APIs."}, {"q": "What's the job market like?", "a": "Good demand for integration engineers."}]);
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
    record43.set("name", "Security Engineer");
    record43.set("slug", "security-engineer");
    record43.set("description", "Designs and implements security solutions for systems and applications. Focuses on preventing breaches and protecting data.");
    record43.set("overview", "Security engineers build systems to protect against cyber threats. They design security architecture and implement protective measures.");
    record43.set("averageSalary", 120000);
    record43.set("entrySalary", 80000);
    record43.set("midSalary", 120000);
    record43.set("seniorSalary", 170000);
    record43.set("salaryRange", "{'min': 80000, 'max': 200000}");
    record43.set("jobDemand", "Very High");
    record43.set("jobDemandOutlook", "Growing 33% through 2032. High demand for security expertise.");
    record43.set("topPayingStates", ["California", "New York", "Massachusetts", "Washington", "Virginia"]);
    record43.set("topStates", ["California", "New York", "Massachusetts", "Washington", "Virginia"]);
    record43.set("technicalSkills", ["Network Security", "Cryptography", "Secure Coding", "Penetration Testing", "Firewalls", "Encryption", "Python", "Linux"]);
    record43.set("softSkills", ["Problem Solving", "Attention to Detail", "Communication", "Analytical Thinking", "Vigilance"]);
    record43.set("tools", ["Firewalls", "Encryption Tools", "Penetration Testing Tools", "Python", "Linux", "Security Frameworks"]);
    record43.set("skillsRequired", ["Security Architecture", "Cryptography", "Secure Coding", "Threat Analysis", "Compliance"]);
    record43.set("salaryInsights", "{'entry': '75K-95K', 'mid': '115K-135K', 'senior': '160K-200K'}");
    record43.set("relatedCareers", ["Cybersecurity Analyst", "Penetration Tester", "Cloud Security Engineer", "Security Architect"]);
    record43.set("roadmap", "{'phase1': 'Learn security fundamentals (3-6 months)', 'phase2': 'Study cryptography and secure coding (4-6 months)', 'phase3': 'Build security projects (3-6 months)', 'phase4': 'Professional experience (2+ years)'}");
    record43.set("faqs", [{"q": "What certifications matter?", "a": "CISSP, CEH, and Security+ are valuable."}, {"q": "Do I need penetration testing skills?", "a": "Helpful but not required. Can specialize in different areas."}, {"q": "What's the job market like?", "a": "Very strong demand for security engineers."}]);
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
    record44.set("name", "Penetration Tester");
    record44.set("slug", "penetration-tester");
    record44.set("description", "Tests security systems by attempting authorized breaches. Identifies vulnerabilities and provides recommendations for improvement.");
    record44.set("overview", "Penetration testers find security weaknesses before attackers do. They conduct authorized security tests and report findings.");
    record44.set("averageSalary", 120000);
    record44.set("entrySalary", 80000);
    record44.set("midSalary", 120000);
    record44.set("seniorSalary", 170000);
    record44.set("salaryRange", "{'min': 80000, 'max': 200000}");
    record44.set("jobDemand", "Very High");
    record44.set("jobDemandOutlook", "Growing 33% through 2032. High demand for penetration testing.");
    record44.set("topPayingStates", ["California", "New York", "Massachusetts", "Washington", "Virginia"]);
    record44.set("topStates", ["California", "New York", "Massachusetts", "Washington", "Virginia"]);
    record44.set("technicalSkills", ["Penetration Testing", "Network Security", "Web Application Security", "Python", "Linux", "Metasploit", "Burp Suite", "Reverse Engineering"]);
    record44.set("softSkills", ["Problem Solving", "Creativity", "Communication", "Attention to Detail", "Ethical Judgment"]);
    record44.set("tools", ["Metasploit", "Burp Suite", "Wireshark", "Nmap", "Kali Linux", "Python", "Hashcat"]);
    record44.set("skillsRequired", ["Penetration Testing", "Vulnerability Assessment", "Exploit Development", "Report Writing", "Security Analysis"]);
    record44.set("salaryInsights", "{'entry': '75K-95K', 'mid': '115K-135K', 'senior': '160K-200K'}");
    record44.set("relatedCareers", ["Ethical Hacker", "Security Engineer", "Cybersecurity Analyst", "Cloud Security Engineer"]);
    record44.set("roadmap", "{'phase1': 'Learn networking and Linux (3-6 months)', 'phase2': 'Study penetration testing (4-6 months)', 'phase3': 'Get CEH or OSCP certification (3-6 months)', 'phase4': 'Professional experience (2+ years)'}");
    record44.set("faqs", [{"q": "Is this legal?", "a": "Yes, when done with written permission. Always get authorization."}, {"q": "What certifications matter?", "a": "CEH, OSCP, and GPEN are highly respected."}, {"q": "What's the job market like?", "a": "Very strong demand for penetration testers."}]);
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
    record45.set("name", "Cloud Security Engineer");
    record45.set("slug", "cloud-security-engineer");
    record45.set("description", "Secures cloud infrastructure and applications. Implements security controls for cloud platforms like AWS, Azure, and GCP.");
    record45.set("overview", "Cloud security engineers protect cloud infrastructure. They implement security controls and ensure compliance in cloud environments.");
    record45.set("averageSalary", 130000);
    record45.set("entrySalary", 90000);
    record45.set("midSalary", 130000);
    record45.set("seniorSalary", 180000);
    record45.set("salaryRange", "{'min': 90000, 'max': 210000}");
    record45.set("jobDemand", "Very High");
    record45.set("jobDemandOutlook", "Growing 33% through 2032. High demand for cloud security.");
    record45.set("topPayingStates", ["California", "New York", "Massachusetts", "Washington", "Texas"]);
    record45.set("topStates", ["California", "New York", "Massachusetts", "Washington", "Texas"]);
    record45.set("technicalSkills", ["Cloud Security", "AWS", "Azure", "GCP", "Encryption", "Identity Management", "Compliance", "Python"]);
    record45.set("softSkills", ["Problem Solving", "Attention to Detail", "Communication", "Analytical Thinking", "Continuous Learning"]);
    record45.set("tools", ["AWS", "Azure", "GCP", "Encryption Tools", "Identity Management Tools", "Python", "Security Tools"]);
    record45.set("skillsRequired", ["Cloud Security Architecture", "Identity & Access Management", "Encryption", "Compliance", "Cloud Platforms"]);
    record45.set("salaryInsights", "{'entry': '85K-105K', 'mid': '125K-150K', 'senior': '170K-210K'}");
    record45.set("relatedCareers", ["Security Engineer", "Cloud Engineer", "Cybersecurity Analyst", "Solutions Architect"]);
    record45.set("roadmap", "{'phase1': 'Learn cloud fundamentals (2-4 months)', 'phase2': 'Study cloud security (4-6 months)', 'phase3': 'Get cloud security certification (2-3 months)', 'phase4': 'Professional experience (2+ years)'}");
    record45.set("faqs", [{"q": "Which cloud platform should I focus on?", "a": "AWS is most popular. Also valuable to learn Azure and GCP."}, {"q": "What certifications matter?", "a": "AWS Security Specialty, Azure Security Engineer, GCP Security certifications."}, {"q": "What's the job market like?", "a": "Very strong demand for cloud security engineers."}]);
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
    record46.set("name", "AI Researcher");
    record46.set("slug", "ai-researcher");
    record46.set("description", "Conducts research on artificial intelligence and machine learning. Develops new algorithms and advances AI technology.");
    record46.set("overview", "AI researchers advance the field of artificial intelligence. They conduct research, publish papers, and develop new AI techniques.");
    record46.set("averageSalary", 160000);
    record46.set("entrySalary", 120000);
    record46.set("midSalary", 160000);
    record46.set("seniorSalary", 220000);
    record46.set("salaryRange", "{'min': 120000, 'max': 250000}");
    record46.set("jobDemand", "Very High");
    record46.set("jobDemandOutlook", "Growing 36% through 2032. High demand for AI research.");
    record46.set("topPayingStates", ["California", "New York", "Massachusetts", "Washington", "Texas"]);
    record46.set("topStates", ["California", "New York", "Massachusetts", "Washington", "Texas"]);
    record46.set("technicalSkills", ["Python", "Deep Learning", "Machine Learning", "Research Methodology", "Mathematics", "TensorFlow", "PyTorch", "Statistics"]);
    record46.set("softSkills", ["Problem Solving", "Creativity", "Communication", "Analytical Thinking", "Continuous Learning"]);
    record46.set("tools", ["Python", "TensorFlow", "PyTorch", "Jupyter", "Git", "Research Tools", "Visualization Tools"]);
    record46.set("skillsRequired", ["Deep Learning", "Research Methodology", "Mathematics", "Machine Learning Theory", "Publication Writing"]);
    record46.set("salaryInsights", "{'entry': '115K-135K', 'mid': '155K-180K', 'senior': '210K-250K'}");
    record46.set("relatedCareers", ["Machine Learning Engineer", "AI Engineer", "NLP Engineer", "Computer Vision Engineer"]);
    record46.set("roadmap", "{'phase1': 'Strong math and Python foundation (3-6 months)', 'phase2': 'Master deep learning and research (6-12 months)', 'phase3': 'Conduct AI research projects (6-12 months)', 'phase4': 'Professional research role (2+ years)'}");
    record46.set("faqs", [{"q": "Do I need a PhD?", "a": "Not required, but helpful. Many researchers have PhDs."}, {"q": "What's the difference from ML engineer?", "a": "Researchers focus on advancing AI; engineers build production systems."}, {"q": "What's the job market like?", "a": "Very strong demand for AI researchers."}]);
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
    record47.set("name", "NLP Engineer");
    record47.set("slug", "nlp-engineer");
    record47.set("description", "Develops natural language processing systems. Works on language models, text analysis, and conversational AI.");
    record47.set("overview", "NLP engineers build systems that understand and process human language. They work on chatbots, translation, and text analysis.");
    record47.set("averageSalary", 140000);
    record47.set("entrySalary", 100000);
    record47.set("midSalary", 140000);
    record47.set("seniorSalary", 190000);
    record47.set("salaryRange", "{'min': 100000, 'max': 220000}");
    record47.set("jobDemand", "Very High");
    record47.set("jobDemandOutlook", "Growing 36% through 2032. High demand for NLP expertise.");
    record47.set("topPayingStates", ["California", "New York", "Massachusetts", "Washington", "Texas"]);
    record47.set("topStates", ["California", "New York", "Massachusetts", "Washington", "Texas"]);
    record47.set("technicalSkills", ["Python", "NLP", "Transformers", "BERT", "GPT", "Deep Learning", "PyTorch", "Hugging Face"]);
    record47.set("softSkills", ["Problem Solving", "Creativity", "Communication", "Analytical Thinking", "Continuous Learning"]);
    record47.set("tools", ["Python", "PyTorch", "Hugging Face", "NLTK", "spaCy", "Git", "Jupyter"]);
    record47.set("skillsRequired", ["NLP Algorithms", "Transformers", "Language Models", "Deep Learning", "Text Processing"]);
    record47.set("salaryInsights", "{'entry': '95K-115K', 'mid': '135K-160K', 'senior': '180K-220K'}");
    record47.set("relatedCareers", ["Machine Learning Engineer", "AI Engineer", "AI Researcher", "Computer Vision Engineer"]);
    record47.set("roadmap", "{'phase1': 'Learn Python and deep learning (4-6 months)', 'phase2': 'Master NLP and transformers (4-6 months)', 'phase3': 'Build NLP projects (3-6 months)', 'phase4': 'Professional experience (1-2 years)'}");
    record47.set("faqs", [{"q": "What's the difference from ML engineer?", "a": "NLP engineers specialize in language; ML engineers work on general ML."}, {"q": "Should I learn transformers?", "a": "Yes, transformers are essential for modern NLP."}, {"q": "What's the job market like?", "a": "Very strong demand for NLP engineers."}]);
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
    record48.set("name", "Computer Vision Engineer");
    record48.set("slug", "computer-vision-engineer");
    record48.set("description", "Develops computer vision systems for image and video analysis. Works on object detection, image recognition, and visual understanding.");
    record48.set("overview", "Computer vision engineers build systems that understand images and video. They work on object detection, facial recognition, and visual analysis.");
    record48.set("averageSalary", 140000);
    record48.set("entrySalary", 100000);
    record48.set("midSalary", 140000);
    record48.set("seniorSalary", 190000);
    record48.set("salaryRange", "{'min': 100000, 'max': 220000}");
    record48.set("jobDemand", "Very High");
    record48.set("jobDemandOutlook", "Growing 36% through 2032. High demand for computer vision.");
    record48.set("topPayingStates", ["California", "New York", "Massachusetts", "Washington", "Texas"]);
    record48.set("topStates", ["California", "New York", "Massachusetts", "Washington", "Texas"]);
    record48.set("technicalSkills", ["Python", "Computer Vision", "Deep Learning", "OpenCV", "PyTorch", "TensorFlow", "Image Processing", "CNN"]);
    record48.set("softSkills", ["Problem Solving", "Creativity", "Communication", "Analytical Thinking", "Continuous Learning"]);
    record48.set("tools", ["Python", "PyTorch", "TensorFlow", "OpenCV", "Git", "Jupyter", "CUDA"]);
    record48.set("skillsRequired", ["Computer Vision Algorithms", "Deep Learning", "Image Processing", "CNN Architecture", "Object Detection"]);
    record48.set("salaryInsights", "{'entry': '95K-115K', 'mid': '135K-160K', 'senior': '180K-220K'}");
    record48.set("relatedCareers", ["Machine Learning Engineer", "AI Engineer", "AI Researcher", "NLP Engineer"]);
    record48.set("roadmap", "{'phase1': 'Learn Python and deep learning (4-6 months)', 'phase2': 'Master computer vision and CNNs (4-6 months)', 'phase3': 'Build CV projects (3-6 months)', 'phase4': 'Professional experience (1-2 years)'}");
    record48.set("faqs", [{"q": "What's the difference from ML engineer?", "a": "CV engineers specialize in vision; ML engineers work on general ML."}, {"q": "Should I learn OpenCV?", "a": "Yes, OpenCV is essential for computer vision."}, {"q": "What's the job market like?", "a": "Very strong demand for computer vision engineers."}]);
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
    record49.set("name", "Software Architect");
    record49.set("slug", "software-architect");
    record49.set("description", "Designs software systems and architecture. Makes high-level decisions about system structure, technology choices, and design patterns.");
    record49.set("overview", "Software architects design the structure of software systems. They make decisions about technology, patterns, and system design.");
    record49.set("averageSalary", 145000);
    record49.set("entrySalary", 100000);
    record49.set("midSalary", 145000);
    record49.set("seniorSalary", 200000);
    record49.set("salaryRange", "{'min': 100000, 'max': 230000}");
    record49.set("jobDemand", "High");
    record49.set("jobDemandOutlook", "Growing 13% through 2032. Steady demand for architecture expertise.");
    record49.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record49.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record49.set("technicalSkills", ["System Design", "Architecture Patterns", "Scalability", "Cloud Platforms", "Databases", "Microservices", "Security", "Technical Leadership"]);
    record49.set("softSkills", ["Leadership", "Communication", "Problem Solving", "Strategic Thinking", "Decision Making"]);
    record49.set("tools", ["Cloud Platforms", "Architecture Tools", "Databases", "Monitoring Tools", "Design Tools"]);
    record49.set("skillsRequired", ["System Architecture", "Design Patterns", "Scalability", "Cloud Platforms", "Technical Leadership"]);
    record49.set("salaryInsights", "{'entry': '95K-115K', 'mid': '140K-165K', 'senior': '190K-230K'}");
    record49.set("relatedCareers", ["Solutions Architect", "Enterprise Architect", "Backend Developer", "DevOps Engineer"]);
    record49.set("roadmap", "{'phase1': 'Gain software development experience (5-7 years)', 'phase2': 'Develop architecture skills (2-3 years)', 'phase3': 'Become software architect (2-3 years)', 'phase4': 'Senior architect or manager (3+ years)'}");
    record49.set("faqs", [{"q": "What background do I need?", "a": "Extensive software development experience plus architecture knowledge."}, {"q": "What certifications matter?", "a": "AWS Solutions Architect, Azure certifications, TOGAF."}, {"q": "What's the job market like?", "a": "Strong demand for experienced software architects."}]);
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
