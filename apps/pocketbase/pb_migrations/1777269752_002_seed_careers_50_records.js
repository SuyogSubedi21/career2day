/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
    record0.set("name", "Machine Learning Engineer");
    record0.set("slug", "machine-learning-engineer");
    record0.set("description", "Designs and implements machine learning models and systems that learn from data to make predictions and decisions. Works with large datasets, algorithms, and frameworks to solve complex business problems through AI.");
    record0.set("entrySalary", 95000);
    record0.set("midSalary", 140000);
    record0.set("seniorSalary", 200000);
    record0.set("jobDemand", "Very High");
    record0.set("technicalSkills", ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "SQL", "Statistics", "Linear Algebra", "Data Preprocessing", "Model Evaluation", "Feature Engineering"]);
    record0.set("softSkills", ["Problem Solving", "Communication", "Collaboration", "Critical Thinking", "Attention to Detail"]);
    record0.set("tools", ["Jupyter Notebook", "Git", "Docker", "AWS SageMaker", "Google Colab", "MLflow", "Weights & Biases"]);
    record0.set("faqs", [{"question": "What's the difference between ML Engineer and Data Scientist?", "answer": "ML Engineers focus on building production systems and deploying models at scale, while Data Scientists focus on analysis and model research. ML Engineers need stronger software engineering skills."}, {"question": "How long does it take to become an ML Engineer?", "answer": "Typically 18-24 months with dedicated learning, including foundational math, programming, and hands-on projects. Prior software engineering experience accelerates this."}, {"question": "What programming language should I learn first?", "answer": "Python is the industry standard for ML. It has the richest ecosystem of libraries (TensorFlow, PyTorch, Scikit-learn) and is beginner-friendly."}, {"question": "Do I need a degree in Computer Science?", "answer": "Not required. Many successful ML Engineers are self-taught or have bootcamp backgrounds. A strong portfolio of projects matters more than credentials."}, {"question": "What's the salary range for ML Engineers?", "answer": "Entry-level: $95K-$120K, Mid-level: $130K-$170K, Senior: $180K-$250K+. Top companies and specialized roles pay significantly higher."}, {"question": "What are the most in-demand ML specializations?", "answer": "Computer Vision, NLP, Reinforcement Learning, and MLOps are highly sought after. Specializing in one area increases your market value."}]);
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
    record1.set("name", "Data Scientist");
    record1.set("slug", "data-scientist");
    record1.set("description", "Analyzes complex datasets to extract insights and inform business decisions. Combines statistics, programming, and domain knowledge to solve problems through data-driven approaches.");
    record1.set("entrySalary", 85000);
    record1.set("midSalary", 130000);
    record1.set("seniorSalary", 180000);
    record1.set("jobDemand", "Very High");
    record1.set("technicalSkills", ["Python", "R", "SQL", "Statistics", "Data Visualization", "Pandas", "NumPy", "Matplotlib", "Tableau", "A/B Testing"]);
    record1.set("softSkills", ["Data Storytelling", "Communication", "Business Acumen", "Curiosity", "Analytical Thinking"]);
    record1.set("tools", ["Jupyter Notebook", "Tableau", "Power BI", "Excel", "Git", "SQL Server", "PostgreSQL"]);
    record1.set("faqs", [{"question": "What's the main difference between Data Scientist and Data Analyst?", "answer": "Data Scientists build predictive models and use advanced statistics, while Data Analysts focus on descriptive analytics and dashboards. Data Scientists need stronger programming and ML skills."}, {"question": "Is a statistics degree required?", "answer": "Not required, but helpful. You can learn statistics through online courses and practice. Understanding probability, distributions, and hypothesis testing is essential."}, {"question": "How important is domain knowledge?", "answer": "Very important. Understanding the business context helps you ask better questions and deliver more valuable insights. Domain expertise often leads to higher salaries."}, {"question": "What's the typical career progression?", "answer": "Junior Data Scientist \u2192 Senior Data Scientist \u2192 Lead/Principal Data Scientist \u2192 Manager or Specialist roles. Progression depends on technical depth or leadership interest."}, {"question": "How much time do Data Scientists spend coding vs. analyzing?", "answer": "Typically 40% coding, 40% analysis/visualization, 20% communication. The ratio varies by company and role."}, {"question": "What are the most valuable certifications?", "answer": "Google Data Analytics, IBM Data Science, AWS Certified Machine Learning are recognized. However, a strong portfolio is more valuable than certifications."}]);
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
    record2.set("description", "Develops both frontend and backend components of web applications. Works across the entire technology stack to build complete, scalable web solutions from database to user interface.");
    record2.set("entrySalary", 70000);
    record2.set("midSalary", 110000);
    record2.set("seniorSalary", 160000);
    record2.set("jobDemand", "Very High");
    record2.set("technicalSkills", ["JavaScript", "React", "Node.js", "HTML/CSS", "SQL", "REST APIs", "Git", "Database Design", "Authentication", "Responsive Design"]);
    record2.set("softSkills", ["Problem Solving", "Communication", "Time Management", "Adaptability", "Teamwork"]);
    record2.set("tools", ["VS Code", "Git", "Docker", "Postman", "Chrome DevTools", "npm/yarn", "Webpack"]);
    record2.set("faqs", [{"question": "What's the best tech stack to learn in 2024?", "answer": "MERN (MongoDB, Express, React, Node.js) or MEAN are popular. Choose based on job market in your region. JavaScript across the stack reduces context switching."}, {"question": "How long to become job-ready as a Full Stack Developer?", "answer": "6-12 months with consistent learning and projects. Most companies expect a portfolio of 3-5 complete projects before hiring."}, {"question": "Do I need to be equally strong in frontend and backend?", "answer": "Not necessarily. Most developers have a preference. Being strong in one and competent in the other is acceptable. Specialization often comes later."}, {"question": "What's the salary difference between frontend and full stack?", "answer": "Full Stack developers typically earn 10-20% more due to broader skill requirements. Senior Full Stack roles command premium salaries."}, {"question": "How important is DevOps knowledge?", "answer": "Increasingly important. Understanding Docker, CI/CD, and cloud deployment (AWS/GCP) makes you more valuable and opens higher-paying roles."}, {"question": "What's the best way to build a portfolio?", "answer": "Build 3-5 complete projects: a simple CRUD app, a real-time app, and a complex project with authentication and database. Deploy them live on GitHub and Heroku/Vercel."}]);
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
    record3.set("description", "Bridges development and operations by automating infrastructure, deployment, and monitoring processes. Ensures applications are reliable, scalable, and efficiently deployed across environments.");
    record3.set("entrySalary", 90000);
    record3.set("midSalary", 135000);
    record3.set("seniorSalary", 190000);
    record3.set("jobDemand", "Very High");
    record3.set("technicalSkills", ["Linux", "Docker", "Kubernetes", "CI/CD", "AWS/GCP/Azure", "Infrastructure as Code", "Terraform", "Jenkins", "Monitoring", "Networking"]);
    record3.set("softSkills", ["Problem Solving", "Communication", "Attention to Detail", "Continuous Learning", "Collaboration"]);
    record3.set("tools", ["Docker", "Kubernetes", "Terraform", "Jenkins", "GitLab CI", "Prometheus", "ELK Stack", "Ansible"]);
    record3.set("faqs", [{"question": "Do I need to be a developer first?", "answer": "Not required, but helpful. Many DevOps engineers come from system administration backgrounds. Understanding application development helps you design better infrastructure."}, {"question": "What's the learning path for DevOps?", "answer": "Start with Linux fundamentals, then Docker, then Kubernetes, then cloud platforms (AWS/GCP), then CI/CD and IaC. This typically takes 12-18 months."}, {"question": "Which cloud platform should I focus on?", "answer": "AWS is the market leader with 32% market share. GCP and Azure are also valuable. Learning one deeply is better than surface-level knowledge of all three."}, {"question": "How important are certifications?", "answer": "AWS Certified Solutions Architect and Kubernetes certifications are valuable. However, hands-on experience and a strong portfolio matter more."}, {"question": "What's the salary progression in DevOps?", "answer": "Entry: $85K-$100K, Mid: $120K-$160K, Senior: $170K-$250K+. Specialized roles (Platform Engineer, SRE) can earn even more."}, {"question": "Is DevOps a good career choice?", "answer": "Yes, very much. DevOps skills are in high demand, salaries are competitive, and the field is growing rapidly as companies adopt cloud-native architectures."}]);
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
    record4.set("name", "Cloud Architect");
    record4.set("slug", "cloud-architect");
    record4.set("description", "Designs and oversees cloud infrastructure solutions for organizations. Creates scalable, secure, and cost-effective cloud architectures that align with business requirements.");
    record4.set("entrySalary", 110000);
    record4.set("midSalary", 160000);
    record4.set("seniorSalary", 220000);
    record4.set("jobDemand", "Very High");
    record4.set("technicalSkills", ["AWS/GCP/Azure", "Architecture Design", "Security", "Networking", "Databases", "Scalability", "Cost Optimization", "Disaster Recovery", "Compliance", "Infrastructure as Code"]);
    record4.set("softSkills", ["Strategic Thinking", "Communication", "Leadership", "Business Acumen", "Decision Making"]);
    record4.set("tools", ["AWS", "GCP", "Azure", "Terraform", "CloudFormation", "Lucidchart", "Visio"]);
    record4.set("faqs", [{"question": "What experience is needed to become a Cloud Architect?", "answer": "Typically 5-7 years in IT/DevOps/Backend roles. You need deep understanding of infrastructure, security, and business requirements before designing architectures."}, {"question": "Which certifications are most valuable?", "answer": "AWS Solutions Architect Professional, Google Cloud Architect, Azure Solutions Architect Expert. These are industry-recognized and command higher salaries."}, {"question": "What's the difference between Cloud Architect and Solutions Architect?", "answer": "Cloud Architects focus specifically on cloud infrastructure design. Solutions Architects have broader scope including applications, databases, and business solutions."}, {"question": "How much coding is involved?", "answer": "Minimal direct coding. You write Infrastructure as Code (Terraform, CloudFormation) but focus more on design, documentation, and decision-making."}, {"question": "What are the highest-paying specializations?", "answer": "Security-focused architectures, multi-cloud strategies, and cost optimization consulting command premium rates. Specialized expertise increases earning potential significantly."}, {"question": "Is this a good long-term career?", "answer": "Excellent. Cloud adoption is accelerating, and skilled architects are in high demand. Salaries are competitive, and there's clear progression to leadership roles."}]);
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
    record5.set("description", "Develops server-side logic, APIs, and databases that power applications. Focuses on performance, scalability, and security of backend systems that handle business logic and data.");
    record5.set("entrySalary", 75000);
    record5.set("midSalary", 115000);
    record5.set("seniorSalary", 170000);
    record5.set("jobDemand", "Very High");
    record5.set("technicalSkills", ["Java/Python/Go", "REST APIs", "SQL/NoSQL", "Microservices", "System Design", "Caching", "Message Queues", "Authentication", "Database Optimization", "Scalability"]);
    record5.set("softSkills", ["Problem Solving", "Communication", "Code Quality Focus", "Collaboration", "Debugging Skills"]);
    record5.set("tools", ["Git", "Docker", "Kubernetes", "Postman", "Redis", "RabbitMQ", "PostgreSQL", "MongoDB"]);
    record5.set("faqs", [{"question": "What programming language should I learn for backend?", "answer": "Java, Python, Go, or Node.js are popular. Java dominates enterprise, Python is versatile, Go is for systems programming. Choose based on job market and interest."}, {"question": "How important is system design knowledge?", "answer": "Critical for senior roles. Understanding scalability, databases, caching, and distributed systems is essential. Start learning this after 1-2 years of experience."}, {"question": "What's the difference between Backend Engineer and Full Stack Developer?", "answer": "Backend Engineers specialize deeply in server-side systems, databases, and APIs. Full Stack Developers work across frontend and backend but may be less specialized."}, {"question": "How do I prepare for backend interviews?", "answer": "Practice coding problems (LeetCode), system design questions, and API design. Companies test both algorithmic skills and architectural thinking."}, {"question": "What's the career progression?", "answer": "Junior Backend Engineer \u2192 Senior Backend Engineer \u2192 Staff Engineer \u2192 Tech Lead/Manager. Progression depends on technical depth or leadership interest."}, {"question": "How important is DevOps knowledge?", "answer": "Increasingly important. Understanding Docker, Kubernetes, and CI/CD makes you more valuable. Many companies expect backend engineers to understand deployment."}]);
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
    record6.set("description", "Creates user interfaces and interactive experiences for web and mobile applications. Focuses on performance, accessibility, and user experience while working with modern frameworks and tools.");
    record6.set("entrySalary", 70000);
    record6.set("midSalary", 110000);
    record6.set("seniorSalary", 160000);
    record6.set("jobDemand", "Very High");
    record6.set("technicalSkills", ["JavaScript", "React/Vue/Angular", "HTML/CSS", "Responsive Design", "State Management", "Testing", "Performance Optimization", "Accessibility", "REST APIs", "Git"]);
    record6.set("softSkills", ["Attention to Detail", "Communication", "Collaboration", "Problem Solving", "User Empathy"]);
    record6.set("tools", ["VS Code", "Chrome DevTools", "Figma", "Git", "npm/yarn", "Webpack", "Jest", "Storybook"]);
    record6.set("faqs", [{"question": "Should I learn React, Vue, or Angular?", "answer": "React is the most popular (40% market share). Vue is easier to learn. Angular is used in enterprises. React is the safest choice for job prospects."}, {"question": "How important is CSS knowledge?", "answer": "Very important. Many junior developers underestimate CSS. Strong CSS skills make you stand out. Learn Flexbox, Grid, and responsive design thoroughly."}, {"question": "Do I need to know backend technologies?", "answer": "Not required, but helpful. Understanding APIs, databases, and server-side concepts helps you communicate with backend teams and build better features."}, {"question": "What's the best way to learn frontend development?", "answer": "Build projects: a portfolio site, a todo app, a weather app, a social media clone. Deploy them live. A strong portfolio matters more than certifications."}, {"question": "How important is performance optimization?", "answer": "Critical. Users expect fast, responsive interfaces. Learn about lazy loading, code splitting, caching, and Core Web Vitals. Performance skills command higher salaries."}, {"question": "What's the salary difference between frontend and backend?", "answer": "Similar at entry level. Backend typically pays 5-10% more at senior levels due to system design complexity. However, top frontend engineers earn comparable salaries."}]);
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
    record7.set("description", "Develops and deploys artificial intelligence systems and applications. Combines machine learning, deep learning, and software engineering to build intelligent systems that solve real-world problems.");
    record7.set("entrySalary", 100000);
    record7.set("midSalary", 150000);
    record7.set("seniorSalary", 220000);
    record7.set("jobDemand", "Very High");
    record7.set("technicalSkills", ["Python", "Deep Learning", "Neural Networks", "TensorFlow/PyTorch", "NLP", "Computer Vision", "Reinforcement Learning", "MLOps", "Cloud Platforms", "Data Engineering"]);
    record7.set("softSkills", ["Problem Solving", "Research Mindset", "Communication", "Collaboration", "Continuous Learning"]);
    record7.set("tools", ["TensorFlow", "PyTorch", "Hugging Face", "OpenAI API", "Jupyter", "Git", "Docker", "AWS SageMaker"]);
    record7.set("faqs", [{"question": "What's the difference between AI Engineer and ML Engineer?", "answer": "AI Engineers focus on broader AI systems including NLP, computer vision, and reasoning. ML Engineers focus on predictive models. AI Engineers need deeper understanding of AI theory."}, {"question": "Do I need a PhD?", "answer": "Not required. Many successful AI Engineers are self-taught or have bootcamp backgrounds. A strong portfolio of AI projects matters more than credentials."}, {"question": "What's the learning path?", "answer": "Start with Python and math fundamentals, then machine learning, then deep learning, then specialize (NLP, CV, RL). This typically takes 18-24 months."}, {"question": "How important is research experience?", "answer": "Helpful but not required. Understanding recent papers and being able to implement them is valuable. Many companies value practical experience over research."}, {"question": "What are the highest-paying AI specializations?", "answer": "Large Language Models (LLMs), Computer Vision, and Reinforcement Learning are highest-paying. Specialized expertise commands significant premiums."}, {"question": "Is AI engineering a stable career?", "answer": "Yes, very much. AI adoption is accelerating across industries. Demand far exceeds supply. Salaries are competitive and growing rapidly."}]);
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
    record8.set("name", "Cybersecurity Engineer");
    record8.set("slug", "cybersecurity-engineer");
    record8.set("description", "Protects systems and networks from cyber threats and attacks. Designs security solutions, conducts vulnerability assessments, and implements protective measures to safeguard data and infrastructure.");
    record8.set("entrySalary", 85000);
    record8.set("midSalary", 130000);
    record8.set("seniorSalary", 190000);
    record8.set("jobDemand", "Very High");
    record8.set("technicalSkills", ["Network Security", "Cryptography", "Firewalls", "Intrusion Detection", "Penetration Testing", "Secure Coding", "Incident Response", "Compliance", "Linux/Windows", "Cloud Security"]);
    record8.set("softSkills", ["Attention to Detail", "Problem Solving", "Communication", "Ethical Mindset", "Continuous Learning"]);
    record8.set("tools", ["Wireshark", "Metasploit", "Burp Suite", "Nessus", "Splunk", "Snort", "OpenSSL", "Git"]);
    record8.set("faqs", [{"question": "What certifications are most valuable?", "answer": "CompTIA Security+, CEH (Certified Ethical Hacker), CISSP are industry-recognized. Security+ is the entry point. CISSP requires 5 years experience."}, {"question": "Do I need a networking background?", "answer": "Helpful but not required. Understanding TCP/IP, DNS, and network protocols is essential. You can learn this through courses and practice."}, {"question": "What's the difference between Cybersecurity Engineer and Penetration Tester?", "answer": "Cybersecurity Engineers design and implement security systems. Penetration Testers test security by attempting to break in. Both are valuable but different skill sets."}, {"question": "How important is coding?", "answer": "Important. You'll write security scripts, analyze code for vulnerabilities, and automate security tasks. Python and Bash are essential."}, {"question": "What's the career progression?", "answer": "Security Analyst \u2192 Cybersecurity Engineer \u2192 Senior Engineer \u2192 Security Architect \u2192 CISO. Progression depends on technical depth or management interest."}, {"question": "Is cybersecurity a good career?", "answer": "Excellent. Cyber threats are increasing, regulations are tightening, and skilled professionals are in high demand. Salaries are competitive and growing."}]);
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
    record9.set("name", "Mobile Developer (iOS/Android)");
    record9.set("slug", "mobile-developer");
    record9.set("description", "Develops native or cross-platform mobile applications for iOS and Android devices. Creates user-friendly, performant apps that run on smartphones and tablets.");
    record9.set("entrySalary", 70000);
    record9.set("midSalary", 115000);
    record9.set("seniorSalary", 170000);
    record9.set("jobDemand", "High");
    record9.set("technicalSkills", ["Swift/Kotlin", "Mobile UI/UX", "REST APIs", "Local Storage", "Threading", "Performance Optimization", "Testing", "Git", "Responsive Design", "Mobile Security"]);
    record9.set("softSkills", ["Attention to Detail", "User Empathy", "Problem Solving", "Collaboration", "Communication"]);
    record9.set("tools", ["Xcode", "Android Studio", "Git", "Firebase", "Postman", "Figma", "TestFlight", "Google Play Console"]);
    record9.set("faqs", [{"question": "Should I learn iOS or Android first?", "answer": "Either is fine. iOS (Swift) is easier to learn. Android (Kotlin) has larger market share. Learning one deeply is better than surface-level knowledge of both."}, {"question": "Is cross-platform development (React Native, Flutter) worth learning?", "answer": "Yes, if you want to build for both platforms with one codebase. However, native development pays more and is more in-demand for complex apps."}, {"question": "How long to become job-ready?", "answer": "6-12 months with consistent learning and projects. Most companies expect 2-3 complete apps in your portfolio before hiring."}, {"question": "What's the salary difference between iOS and Android?", "answer": "Similar at entry level. iOS typically pays 5-10% more due to higher app monetization. However, Android has larger market share and more opportunities."}, {"question": "How important is UI/UX knowledge?", "answer": "Very important. Mobile developers need to understand design principles, user experience, and platform guidelines. Collaboration with designers is essential."}, {"question": "What's the career progression?", "answer": "Junior Mobile Developer \u2192 Senior Mobile Developer \u2192 Tech Lead \u2192 Engineering Manager. Some specialize in specific domains (gaming, fintech, healthcare)."}]);
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
    record10.set("description", "Designs comprehensive technology solutions that address business problems. Works with clients and stakeholders to understand requirements and architect scalable, cost-effective solutions.");
    record10.set("entrySalary", 105000);
    record10.set("midSalary", 155000);
    record10.set("seniorSalary", 210000);
    record10.set("jobDemand", "High");
    record10.set("technicalSkills", ["System Design", "Cloud Platforms", "Databases", "Networking", "Security", "Scalability", "Cost Optimization", "Integration", "Compliance", "Architecture Patterns"]);
    record10.set("softSkills", ["Communication", "Business Acumen", "Leadership", "Problem Solving", "Presentation Skills"]);
    record10.set("tools", ["AWS/GCP/Azure", "Lucidchart", "Visio", "Terraform", "CloudFormation"]);
    record10.set("faqs", [{"question": "What experience is needed?", "answer": "Typically 5-7 years in development or infrastructure roles. You need deep technical knowledge and business understanding before designing solutions."}, {"question": "How is this different from Cloud Architect?", "answer": "Solutions Architects have broader scope including applications, databases, and business solutions. Cloud Architects focus specifically on cloud infrastructure."}, {"question": "How much time is spent coding?", "answer": "Minimal. You focus on design, documentation, and communication. You may write Infrastructure as Code but mostly guide others."}, {"question": "What certifications are valuable?", "answer": "AWS Solutions Architect Professional, Google Cloud Architect, Azure Solutions Architect Expert. These are industry-recognized and command higher salaries."}, {"question": "What's the career progression?", "answer": "Solutions Architect \u2192 Principal Architect \u2192 VP of Architecture. Some move into sales engineering or consulting roles."}, {"question": "Is this a good long-term career?", "answer": "Excellent. Solutions Architects are in high demand, salaries are competitive, and there's clear progression to leadership roles."}]);
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
    record11.set("description", "Manages and maintains databases that store critical business data. Ensures data integrity, security, performance, and availability while handling backups and disaster recovery.");
    record11.set("entrySalary", 75000);
    record11.set("midSalary", 115000);
    record11.set("seniorSalary", 160000);
    record11.set("jobDemand", "High");
    record11.set("technicalSkills", ["SQL", "Database Design", "Performance Tuning", "Backup/Recovery", "Security", "Replication", "Clustering", "Monitoring", "Linux/Windows", "Scripting"]);
    record11.set("softSkills", ["Attention to Detail", "Problem Solving", "Communication", "Reliability", "Continuous Learning"]);
    record11.set("tools", ["PostgreSQL", "MySQL", "Oracle", "SQL Server", "MongoDB", "Backup tools", "Monitoring tools"]);
    record11.set("faqs", [{"question": "What databases should I learn?", "answer": "PostgreSQL and MySQL are open-source and widely used. Oracle and SQL Server are enterprise standards. Learning one deeply is better than surface-level knowledge of many."}, {"question": "Is DBA a dying career?", "answer": "No. Cloud databases (RDS, Cloud SQL) have changed the role but increased demand. DBAs are evolving to manage cloud databases and data platforms."}, {"question": "What certifications are valuable?", "answer": "Oracle Certified Associate, Microsoft SQL Server certifications, PostgreSQL certifications. However, hands-on experience matters more."}, {"question": "How important is scripting?", "answer": "Very important. You'll write scripts for automation, monitoring, and maintenance. Python, Bash, and SQL scripting are essential."}, {"question": "What's the career progression?", "answer": "Junior DBA \u2192 Senior DBA \u2192 Database Architect \u2192 Data Platform Manager. Some specialize in specific databases or cloud platforms."}, {"question": "What are the highest-paying DBA specializations?", "answer": "Cloud database management, data warehousing, and big data platforms command premium salaries. Specialized expertise increases earning potential."}]);
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
    record12.set("description", "Manages and maintains computer systems and networks for organizations. Handles user accounts, system updates, security, and troubleshooting to ensure smooth IT operations.");
    record12.set("entrySalary", 60000);
    record12.set("midSalary", 90000);
    record12.set("seniorSalary", 130000);
    record12.set("jobDemand", "High");
    record12.set("technicalSkills", ["Linux/Windows", "Networking", "Active Directory", "Virtualization", "Scripting", "Security", "Backup/Recovery", "Monitoring", "Cloud Platforms", "Troubleshooting"]);
    record12.set("softSkills", ["Problem Solving", "Communication", "Patience", "Attention to Detail", "Time Management"]);
    record12.set("tools", ["Linux", "Windows Server", "VMware", "Hyper-V", "Ansible", "Puppet", "Nagios", "Git"]);
    record12.set("faqs", [{"question": "What certifications are most valuable?", "answer": "CompTIA A+, Network+, Security+, Microsoft certifications, Linux+ are recognized. Start with A+ for entry-level roles."}, {"question": "Should I focus on Linux or Windows?", "answer": "Both are valuable. Linux is growing in enterprise. Windows dominates corporate environments. Learning both makes you more marketable."}, {"question": "How important is scripting?", "answer": "Very important. You'll automate tasks using PowerShell (Windows) or Bash (Linux). Automation skills significantly increase your value."}, {"question": "What's the career progression?", "answer": "Junior SysAdmin \u2192 Senior SysAdmin \u2192 Systems Engineer \u2192 Infrastructure Manager. Some move into DevOps or cloud roles."}, {"question": "Is this a good entry-level IT career?", "answer": "Yes. It's a good starting point for IT careers. You learn fundamentals and can specialize later (DevOps, Cloud, Security)."}, {"question": "How is this changing with cloud adoption?", "answer": "Traditional on-premises sysadmin roles are declining. Cloud-focused sysadmins managing AWS/GCP/Azure are in high demand with better salaries."}]);
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
    record13.set("description", "Designs, implements, and maintains computer networks. Ensures network performance, security, and reliability while managing routers, switches, firewalls, and other networking equipment.");
    record13.set("entrySalary", 70000);
    record13.set("midSalary", 110000);
    record13.set("seniorSalary", 160000);
    record13.set("jobDemand", "High");
    record13.set("technicalSkills", ["TCP/IP", "Routing/Switching", "Firewalls", "VPN", "Network Security", "Wireless Networks", "Network Design", "Troubleshooting", "Monitoring", "Cloud Networking"]);
    record13.set("softSkills", ["Problem Solving", "Communication", "Attention to Detail", "Patience", "Continuous Learning"]);
    record13.set("tools", ["Cisco IOS", "Juniper", "Wireshark", "Nmap", "Splunk", "Nagios", "GNS3"]);
    record13.set("faqs", [{"question": "What certifications are most valuable?", "answer": "Cisco CCNA is the industry standard. Juniper JNCIA, CompTIA Network+ are also recognized. CCNA is the best starting point."}, {"question": "Is networking a good career?", "answer": "Yes. Networks are critical infrastructure. Skilled network engineers are in high demand with competitive salaries and job security."}, {"question": "How is cloud changing networking?", "answer": "Cloud networking (AWS VPC, GCP VPC) is becoming increasingly important. Network engineers need to learn cloud networking alongside traditional networking."}, {"question": "What's the difference between Network Engineer and Network Administrator?", "answer": "Network Engineers design and implement networks. Network Administrators maintain and troubleshoot existing networks. Engineers typically earn more."}, {"question": "How important is security knowledge?", "answer": "Very important. Network security is critical. Understanding firewalls, VPNs, and intrusion detection is essential for modern network engineers."}, {"question": "What's the career progression?", "answer": "Junior Network Engineer \u2192 Senior Network Engineer \u2192 Network Architect \u2192 Infrastructure Manager. Some specialize in security or cloud networking."}]);
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
    record14.set("name", "Security Analyst");
    record14.set("slug", "security-analyst");
    record14.set("description", "Monitors and analyzes security events to detect and respond to threats. Conducts vulnerability assessments, implements security measures, and helps organizations maintain compliance with security standards.");
    record14.set("entrySalary", 70000);
    record14.set("midSalary", 105000);
    record14.set("seniorSalary", 150000);
    record14.set("jobDemand", "Very High");
    record14.set("technicalSkills", ["Network Security", "Vulnerability Assessment", "Incident Response", "SIEM Tools", "Firewalls", "Intrusion Detection", "Log Analysis", "Compliance", "Scripting", "Threat Analysis"]);
    record14.set("softSkills", ["Attention to Detail", "Problem Solving", "Communication", "Ethical Mindset", "Continuous Learning"]);
    record14.set("tools", ["Splunk", "ELK Stack", "Wireshark", "Nessus", "Burp Suite", "Metasploit", "Snort"]);
    record14.set("faqs", [{"question": "What certifications are most valuable?", "answer": "CompTIA Security+, CEH, CISSP are industry-recognized. Security+ is the entry point. CEH is valuable for hands-on security testing."}, {"question": "What's the difference between Security Analyst and Cybersecurity Engineer?", "answer": "Security Analysts focus on monitoring and responding to threats. Cybersecurity Engineers design and implement security systems. Engineers typically earn more."}, {"question": "How important is coding?", "answer": "Helpful but not required. Python scripting for automation is valuable. Understanding code helps analyze security issues."}, {"question": "What's the career progression?", "answer": "Security Analyst \u2192 Senior Analyst \u2192 Security Engineer \u2192 Security Architect \u2192 CISO. Progression depends on technical depth or management interest."}, {"question": "Is this a good entry-level security career?", "answer": "Yes. Security Analyst is a good starting point. You learn fundamentals and can specialize later (penetration testing, architecture, management)."}, {"question": "How important is incident response experience?", "answer": "Very important. Hands-on incident response experience is highly valued. It teaches you real-world security challenges and improves your skills rapidly."}]);
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
    record15.set("name", "Data Engineer");
    record15.set("slug", "data-engineer");
    record15.set("description", "Builds and maintains data pipelines and infrastructure that enable data analysis and machine learning. Focuses on data collection, processing, storage, and making data accessible to analysts and scientists.");
    record15.set("entrySalary", 90000);
    record15.set("midSalary", 135000);
    record15.set("seniorSalary", 190000);
    record15.set("jobDemand", "Very High");
    record15.set("technicalSkills", ["Python/Scala", "SQL", "Spark", "Hadoop", "ETL", "Data Warehousing", "Cloud Platforms", "Databases", "Streaming", "Data Modeling"]);
    record15.set("softSkills", ["Problem Solving", "Communication", "Attention to Detail", "Collaboration", "Continuous Learning"]);
    record15.set("tools", ["Apache Spark", "Hadoop", "Kafka", "Airflow", "Snowflake", "BigQuery", "Redshift", "Git"]);
    record15.set("faqs", [{"question": "What's the difference between Data Engineer and Data Scientist?", "answer": "Data Engineers build infrastructure for data. Data Scientists analyze data. Engineers need stronger software engineering skills. Scientists need stronger statistics skills."}, {"question": "What programming language should I learn?", "answer": "Python is most popular and beginner-friendly. Scala is used in big data (Spark). SQL is essential for both. Start with Python."}, {"question": "How long to become job-ready?", "answer": "12-18 months with consistent learning and projects. Most companies expect understanding of ETL, databases, and cloud platforms."}, {"question": "What's the career progression?", "answer": "Junior Data Engineer \u2192 Senior Data Engineer \u2192 Staff Engineer \u2192 Data Platform Manager. Some specialize in specific domains (streaming, warehousing)."}, {"question": "How important is cloud knowledge?", "answer": "Very important. Cloud data platforms (Snowflake, BigQuery, Redshift) are industry standard. Cloud skills significantly increase your value."}, {"question": "What are the highest-paying specializations?", "answer": "Real-time streaming, data warehousing, and data platform architecture command premium salaries. Specialized expertise increases earning potential."}]);
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
    record16.set("name", "QA Automation Engineer");
    record16.set("slug", "qa-automation-engineer");
    record16.set("description", "Develops automated tests to ensure software quality and reliability. Creates test frameworks and scripts that validate functionality, performance, and security of applications.");
    record16.set("entrySalary", 65000);
    record16.set("midSalary", 100000);
    record16.set("seniorSalary", 145000);
    record16.set("jobDemand", "High");
    record16.set("technicalSkills", ["Selenium", "Test Automation", "Python/Java", "API Testing", "Performance Testing", "CI/CD", "Test Frameworks", "SQL", "Git", "Debugging"]);
    record16.set("softSkills", ["Attention to Detail", "Problem Solving", "Communication", "Collaboration", "Analytical Thinking"]);
    record16.set("tools", ["Selenium", "Cypress", "Postman", "JUnit", "TestNG", "Jenkins", "Git", "Jira"]);
    record16.set("faqs", [{"question": "What programming language should I learn?", "answer": "Python is easiest to learn. Java is widely used in enterprises. JavaScript for web testing. Start with Python or Java."}, {"question": "Is QA Automation a good career?", "answer": "Yes. Automation is critical for modern development. Skilled QA automation engineers are in high demand with competitive salaries."}, {"question": "What's the difference between QA Automation Engineer and QA Engineer?", "answer": "QA Automation Engineers write automated tests. QA Engineers do manual testing. Automation engineers earn more and have better career prospects."}, {"question": "How important is API testing?", "answer": "Very important. Modern applications rely on APIs. API testing skills are highly valued and command higher salaries."}, {"question": "What's the career progression?", "answer": "QA Automation Engineer \u2192 Senior QA Engineer \u2192 QA Lead \u2192 QA Manager. Some specialize in performance or security testing."}, {"question": "How is QA changing with DevOps?", "answer": "QA is becoming more integrated with development (shift-left testing). QA engineers need to understand CI/CD and work closely with developers."}]);
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
    record17.set("name", "Software Architect");
    record17.set("slug", "software-architect");
    record17.set("description", "Designs high-level software solutions and system architectures. Makes critical technical decisions about technology choices, design patterns, and system structure to meet business requirements.");
    record17.set("entrySalary", 120000);
    record17.set("midSalary", 170000);
    record17.set("seniorSalary", 240000);
    record17.set("jobDemand", "High");
    record17.set("technicalSkills", ["System Design", "Architecture Patterns", "Microservices", "Databases", "Scalability", "Security", "Cloud Platforms", "Design Patterns", "Code Quality", "Technical Leadership"]);
    record17.set("softSkills", ["Leadership", "Communication", "Strategic Thinking", "Decision Making", "Business Acumen"]);
    record17.set("tools", ["UML", "Lucidchart", "Visio", "Git", "Docker", "Kubernetes"]);
    record17.set("faqs", [{"question": "What experience is needed?", "answer": "Typically 8-10 years in development roles. You need deep technical knowledge and proven ability to make good architectural decisions."}, {"question": "How much coding is involved?", "answer": "Minimal direct coding. You focus on design, documentation, and technical leadership. You may review code and guide others."}, {"question": "What's the difference between Software Architect and Solutions Architect?", "answer": "Software Architects focus on application architecture. Solutions Architects have broader scope including infrastructure and business solutions."}, {"question": "How important is communication?", "answer": "Critical. You need to explain complex technical concepts to non-technical stakeholders and align technical decisions with business goals."}, {"question": "What's the career progression?", "answer": "Senior Developer \u2192 Architect \u2192 Principal Architect \u2192 VP of Engineering. Some move into consulting or CTO roles."}, {"question": "Is this a good long-term career?", "answer": "Excellent. Architects are in high demand, salaries are very competitive, and there's clear progression to leadership roles."}]);
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
    record18.set("name", "Blockchain Developer");
    record18.set("slug", "blockchain-developer");
    record18.set("description", "Develops applications and smart contracts on blockchain platforms. Creates decentralized applications (dApps) and blockchain solutions for various industries.");
    record18.set("entrySalary", 100000);
    record18.set("midSalary", 160000);
    record18.set("seniorSalary", 240000);
    record18.set("jobDemand", "Growing");
    record18.set("technicalSkills", ["Solidity", "Smart Contracts", "Ethereum", "Web3.js", "Cryptography", "Consensus Mechanisms", "DeFi", "Security Auditing", "Python/JavaScript", "Distributed Systems"]);
    record18.set("softSkills", ["Problem Solving", "Research Mindset", "Communication", "Collaboration", "Continuous Learning"]);
    record18.set("tools", ["Remix IDE", "Hardhat", "Truffle", "MetaMask", "Etherscan", "Git"]);
    record18.set("faqs", [{"question": "What programming language should I learn?", "answer": "Solidity for Ethereum smart contracts. JavaScript/Python for dApp development. Rust for Solana. Start with Solidity."}, {"question": "Is blockchain development a stable career?", "answer": "Growing but volatile. Blockchain adoption is accelerating, but the industry is still emerging. Salaries are high but job stability varies."}, {"question": "Do I need to understand cryptocurrency?", "answer": "Helpful but not required. Understanding blockchain fundamentals, smart contracts, and DeFi concepts is more important than cryptocurrency trading knowledge."}, {"question": "What's the learning path?", "answer": "Start with Solidity and Ethereum, then learn Web3.js, then build dApps. This typically takes 6-12 months with prior development experience."}, {"question": "What are the highest-paying blockchain specializations?", "answer": "Smart contract auditing, DeFi protocol development, and Layer 2 solutions command premium salaries. Specialized expertise is highly valued."}, {"question": "Is this a good career choice?", "answer": "Yes, if you're interested in emerging technology. Blockchain developers are in high demand with excellent salaries. However, the field is still evolving."}]);
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
    record19.set("name", "Game Developer");
    record19.set("slug", "game-developer");
    record19.set("description", "Develops video games for various platforms using game engines and programming languages. Creates gameplay mechanics, graphics, and interactive experiences for entertainment.");
    record19.set("entrySalary", 70000);
    record19.set("midSalary", 110000);
    record19.set("seniorSalary", 160000);
    record19.set("jobDemand", "High");
    record19.set("technicalSkills", ["C#/C++", "Unity/Unreal", "Game Physics", "Graphics Programming", "AI", "Networking", "Performance Optimization", "Game Design", "3D Math", "Scripting"]);
    record19.set("softSkills", ["Creativity", "Problem Solving", "Collaboration", "Communication", "Attention to Detail"]);
    record19.set("tools", ["Unity", "Unreal Engine", "Visual Studio", "Git", "Blender", "FMOD"]);
    record19.set("faqs", [{"question": "Should I learn Unity or Unreal Engine?", "answer": "Unity is easier to learn and more beginner-friendly. Unreal is more powerful for AAA games. Start with Unity, then learn Unreal if interested."}, {"question": "What programming language should I learn?", "answer": "C# for Unity, C++ for Unreal. C# is easier to learn. Both are valuable depending on your target engine."}, {"question": "Is game development a good career?", "answer": "Yes, if you're passionate about games. The industry is growing, salaries are competitive, but work-life balance can be challenging (crunch periods)."}, {"question": "What's the difference between Game Developer and Game Programmer?", "answer": "Game Programmers focus on code and systems. Game Developers have broader roles including design and gameplay. Both are valuable."}, {"question": "How important is game design knowledge?", "answer": "Very important. Understanding game mechanics, level design, and player experience makes you a better programmer and more valuable to teams."}, {"question": "What's the career progression?", "answer": "Junior Game Programmer \u2192 Senior Programmer \u2192 Lead Programmer \u2192 Technical Director. Some move into game design or management."}]);
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
    record20.set("name", "Embedded Systems Engineer");
    record20.set("slug", "embedded-systems-engineer");
    record20.set("description", "Develops software and firmware for embedded systems and IoT devices. Works with hardware constraints to create efficient, reliable systems for devices like microcontrollers and sensors.");
    record20.set("entrySalary", 75000);
    record20.set("midSalary", 115000);
    record20.set("seniorSalary", 165000);
    record20.set("jobDemand", "High");
    record20.set("technicalSkills", ["C/C++", "Microcontrollers", "RTOS", "Hardware Interfacing", "Low-level Programming", "Debugging", "Assembly", "Firmware Development", "Power Management", "Communication Protocols"]);
    record20.set("softSkills", ["Problem Solving", "Attention to Detail", "Patience", "Collaboration", "Continuous Learning"]);
    record20.set("tools", ["Arduino", "STM32", "RTOS", "Oscilloscope", "Logic Analyzer", "Git", "GCC"]);
    record20.set("faqs", [{"question": "What programming language should I learn?", "answer": "C is the industry standard for embedded systems. C++ is also used. Assembly is important for low-level work. Start with C."}, {"question": "Do I need electrical engineering knowledge?", "answer": "Helpful but not required. Understanding basic electronics, circuits, and hardware interfaces is important. You can learn this through courses and practice."}, {"question": "What's the learning path?", "answer": "Start with C and microcontrollers (Arduino), then learn RTOS, then specialize (IoT, automotive, medical devices). This typically takes 12-18 months."}, {"question": "What are the highest-paying embedded specializations?", "answer": "Automotive embedded systems, medical device firmware, and aerospace systems command premium salaries. Specialized expertise is highly valued."}, {"question": "Is embedded systems a good career?", "answer": "Yes. Embedded systems are everywhere (cars, medical devices, IoT). Skilled engineers are in high demand with competitive salaries."}, {"question": "How is IoT changing embedded systems?", "answer": "IoT is creating new opportunities for embedded engineers. Connected devices, edge computing, and real-time systems are growing areas with excellent career prospects."}]);
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
    record21.set("name", "IoT Engineer");
    record21.set("slug", "iot-engineer");
    record21.set("description", "Designs and develops Internet of Things solutions connecting physical devices to networks and cloud platforms. Creates systems that collect, process, and analyze data from connected devices.");
    record21.set("entrySalary", 80000);
    record21.set("midSalary", 125000);
    record21.set("seniorSalary", 180000);
    record21.set("jobDemand", "Growing");
    record21.set("technicalSkills", ["Embedded Systems", "IoT Platforms", "Cloud Platforms", "Networking", "Sensors", "Data Processing", "MQTT/CoAP", "Edge Computing", "Python/C++", "Security"]);
    record21.set("softSkills", ["Problem Solving", "Systems Thinking", "Communication", "Collaboration", "Continuous Learning"]);
    record21.set("tools", ["Arduino", "Raspberry Pi", "AWS IoT", "Azure IoT", "Google Cloud IoT", "MQTT", "Git"]);
    record21.set("faqs", [{"question": "What's the difference between IoT Engineer and Embedded Systems Engineer?", "answer": "IoT Engineers focus on connected systems and cloud integration. Embedded Engineers focus on device firmware. IoT Engineers need broader knowledge."}, {"question": "What cloud platforms should I learn?", "answer": "AWS IoT, Azure IoT, and Google Cloud IoT are major platforms. AWS is the market leader. Learning one deeply is better than surface-level knowledge of all."}, {"question": "How important is security?", "answer": "Critical. IoT devices are vulnerable to attacks. Understanding security, encryption, and secure communication is essential."}, {"question": "What's the learning path?", "answer": "Start with embedded systems and microcontrollers, then learn IoT platforms and cloud integration, then specialize. This typically takes 12-18 months."}, {"question": "What are the highest-paying IoT specializations?", "answer": "Industrial IoT (IIoT), smart cities, and healthcare IoT command premium salaries. Specialized expertise is highly valued."}, {"question": "Is IoT a good career?", "answer": "Yes. IoT adoption is accelerating across industries. Skilled engineers are in high demand with competitive salaries and growing opportunities."}]);
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
    record22.set("name", "Site Reliability Engineer (SRE)");
    record22.set("slug", "site-reliability-engineer");
    record22.set("description", "Ensures reliability, scalability, and performance of production systems and services. Combines software engineering with operations to automate infrastructure and improve system reliability.");
    record22.set("entrySalary", 100000);
    record22.set("midSalary", 150000);
    record22.set("seniorSalary", 210000);
    record22.set("jobDemand", "Very High");
    record22.set("technicalSkills", ["Linux", "Cloud Platforms", "Kubernetes", "Monitoring", "Incident Response", "Automation", "Infrastructure as Code", "Databases", "Networking", "Performance Tuning"]);
    record22.set("softSkills", ["Problem Solving", "Communication", "Collaboration", "Attention to Detail", "Continuous Learning"]);
    record22.set("tools", ["Kubernetes", "Prometheus", "Grafana", "ELK Stack", "Terraform", "Ansible", "Git", "PagerDuty"]);
    record22.set("faqs", [{"question": "What's the difference between SRE and DevOps Engineer?", "answer": "SREs focus on reliability and performance of production systems. DevOps Engineers focus on deployment and infrastructure. SREs typically earn more."}, {"question": "Do I need DevOps experience first?", "answer": "Helpful but not required. SRE is a specialized role. Understanding infrastructure, monitoring, and incident response is essential."}, {"question": "How important is on-call duty?", "answer": "Very important. SREs are on-call to respond to incidents. This is part of the job and comes with on-call pay. Work-life balance can be challenging."}, {"question": "What's the learning path?", "answer": "Start with DevOps/infrastructure, then learn monitoring and incident response, then specialize in SRE. This typically takes 2-3 years of experience."}, {"question": "What are the highest-paying SRE specializations?", "answer": "High-traffic systems, financial services, and critical infrastructure command premium salaries. Specialized expertise is highly valued."}, {"question": "Is SRE a good career?", "answer": "Excellent. SREs are in high demand, salaries are very competitive, and the role is critical for modern tech companies."}]);
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
    record23.set("name", "Platform Engineer");
    record23.set("slug", "platform-engineer");
    record23.set("description", "Builds internal developer platforms and tools that enable other engineers to develop, deploy, and operate applications efficiently. Creates abstractions and automation to improve developer productivity.");
    record23.set("entrySalary", 105000);
    record23.set("midSalary", 155000);
    record23.set("seniorSalary", 220000);
    record23.set("jobDemand", "Growing");
    record23.set("technicalSkills", ["Kubernetes", "Cloud Platforms", "Infrastructure as Code", "Automation", "API Design", "Monitoring", "CI/CD", "Databases", "Networking", "Developer Experience"]);
    record23.set("softSkills", ["Communication", "Empathy", "Problem Solving", "Leadership", "Collaboration"]);
    record23.set("tools", ["Kubernetes", "Terraform", "Helm", "ArgoCD", "Prometheus", "Git", "Docker"]);
    record23.set("faqs", [{"question": "What's the difference between Platform Engineer and DevOps Engineer?", "answer": "Platform Engineers build tools for developers. DevOps Engineers manage infrastructure. Platform Engineers focus on developer experience and productivity."}, {"question": "Is this a new role?", "answer": "Yes, relatively new. As companies scale, they need internal platforms. This is a growing field with excellent career prospects."}, {"question": "What experience is needed?", "answer": "Typically 3-5 years in DevOps, SRE, or backend engineering. You need deep understanding of developer workflows and infrastructure."}, {"question": "How important is communication?", "answer": "Critical. You're building tools for other engineers. Understanding their needs and communicating effectively is essential."}, {"question": "What's the career progression?", "answer": "Senior Platform Engineer \u2192 Staff Engineer \u2192 Principal Engineer \u2192 Engineering Manager. Some move into product or consulting roles."}, {"question": "Is this a good career?", "answer": "Excellent. Platform engineering is a growing field with high demand, competitive salaries, and interesting technical challenges."}]);
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
    record24.set("name", "MLOps Engineer");
    record24.set("slug", "mlops-engineer");
    record24.set("description", "Operationalizes machine learning models by building infrastructure and pipelines for training, deployment, and monitoring. Bridges the gap between data scientists and production systems.");
    record24.set("entrySalary", 105000);
    record24.set("midSalary", 155000);
    record24.set("seniorSalary", 220000);
    record24.set("jobDemand", "Very High");
    record24.set("technicalSkills", ["Python", "ML Frameworks", "Docker", "Kubernetes", "CI/CD", "Cloud Platforms", "Monitoring", "Data Pipelines", "Infrastructure as Code", "Databases"]);
    record24.set("softSkills", ["Problem Solving", "Communication", "Collaboration", "Continuous Learning", "Attention to Detail"]);
    record24.set("tools", ["TensorFlow", "PyTorch", "Docker", "Kubernetes", "Jenkins", "Git", "MLflow", "Kubeflow"]);
    record24.set("faqs", [{"question": "What's the difference between MLOps Engineer and ML Engineer?", "answer": "ML Engineers build models. MLOps Engineers deploy and maintain models in production. MLOps Engineers need stronger DevOps skills."}, {"question": "Do I need ML knowledge?", "answer": "Helpful but not required. Understanding ML concepts helps, but strong DevOps and software engineering skills are more important."}, {"question": "What's the learning path?", "answer": "Start with DevOps/backend engineering, then learn ML concepts, then specialize in MLOps. This typically takes 2-3 years of experience."}, {"question": "What are the highest-paying MLOps specializations?", "answer": "Large-scale ML systems, real-time inference, and ML platform development command premium salaries. Specialized expertise is highly valued."}, {"question": "Is MLOps a good career?", "answer": "Excellent. MLOps is a growing field with high demand, competitive salaries, and interesting technical challenges at the intersection of ML and DevOps."}, {"question": "How is MLOps evolving?", "answer": "MLOps is becoming more standardized with tools like Kubeflow and MLflow. The field is maturing, creating more opportunities and higher salaries."}]);
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
    record25.set("name", "Computer Vision Engineer");
    record25.set("slug", "computer-vision-engineer");
    record25.set("description", "Develops systems that enable computers to interpret and understand visual information from images and videos. Creates applications for object detection, image recognition, and visual analysis.");
    record25.set("entrySalary", 100000);
    record25.set("midSalary", 150000);
    record25.set("seniorSalary", 220000);
    record25.set("jobDemand", "Very High");
    record25.set("technicalSkills", ["Python", "OpenCV", "TensorFlow/PyTorch", "Deep Learning", "Image Processing", "CNN", "Object Detection", "Segmentation", "3D Vision", "CUDA"]);
    record25.set("softSkills", ["Problem Solving", "Research Mindset", "Communication", "Collaboration", "Continuous Learning"]);
    record25.set("tools", ["OpenCV", "TensorFlow", "PyTorch", "YOLO", "Jupyter", "Git", "CUDA"]);
    record25.set("faqs", [{"question": "What's the difference between Computer Vision Engineer and ML Engineer?", "answer": "Computer Vision Engineers specialize in image and video processing. ML Engineers work on general machine learning. CV Engineers need deeper understanding of image processing."}, {"question": "Do I need a degree in computer science?", "answer": "Not required. Many successful CV engineers are self-taught or have bootcamp backgrounds. A strong portfolio of CV projects matters more."}, {"question": "What's the learning path?", "answer": "Start with Python and image processing, then deep learning, then specialize in CV. This typically takes 18-24 months with prior ML experience."}, {"question": "What are the highest-paying CV specializations?", "answer": "Autonomous vehicles, medical imaging, and 3D vision command premium salaries. Specialized expertise is highly valued."}, {"question": "Is Computer Vision a good career?", "answer": "Excellent. CV is a growing field with high demand, competitive salaries, and applications across industries (autonomous vehicles, healthcare, robotics)."}, {"question": "How is Computer Vision evolving?", "answer": "Transformer models and foundation models are changing CV. Vision-language models and multimodal AI are emerging areas with excellent opportunities."}]);
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
    record26.set("name", "NLP Engineer");
    record26.set("slug", "nlp-engineer");
    record26.set("description", "Develops systems that enable computers to understand and process human language. Creates applications for text analysis, machine translation, chatbots, and language understanding.");
    record26.set("entrySalary", 100000);
    record26.set("midSalary", 150000);
    record26.set("seniorSalary", 220000);
    record26.set("jobDemand", "Very High");
    record26.set("technicalSkills", ["Python", "NLP Libraries", "Deep Learning", "Transformers", "BERT/GPT", "Text Processing", "Tokenization", "Embeddings", "Language Models", "Hugging Face"]);
    record26.set("softSkills", ["Problem Solving", "Research Mindset", "Communication", "Collaboration", "Continuous Learning"]);
    record26.set("tools", ["Hugging Face", "NLTK", "spaCy", "TensorFlow", "PyTorch", "Jupyter", "Git"]);
    record26.set("faqs", [{"question": "What's the difference between NLP Engineer and ML Engineer?", "answer": "NLP Engineers specialize in language processing. ML Engineers work on general machine learning. NLP Engineers need deeper understanding of linguistics and language models."}, {"question": "Do I need linguistics knowledge?", "answer": "Helpful but not required. Understanding language structure helps, but you can learn it through practice. Strong ML skills are more important."}, {"question": "What's the learning path?", "answer": "Start with Python and NLP basics, then deep learning, then transformers and LLMs. This typically takes 18-24 months with prior ML experience."}, {"question": "What are the highest-paying NLP specializations?", "answer": "Large Language Models (LLMs), machine translation, and conversational AI command premium salaries. Specialized expertise is highly valued."}, {"question": "Is NLP a good career?", "answer": "Excellent. NLP is a booming field with high demand, competitive salaries, and applications across industries (chatbots, translation, search)."}, {"question": "How is NLP evolving?", "answer": "Large Language Models (GPT, BERT) are transforming NLP. Foundation models and prompt engineering are emerging areas with excellent opportunities."}]);
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
    record27.set("description", "Designs and develops robotic systems and autonomous machines. Works on hardware integration, control systems, and software to create robots that perform specific tasks.");
    record27.set("entrySalary", 85000);
    record27.set("midSalary", 130000);
    record27.set("seniorSalary", 190000);
    record27.set("jobDemand", "Growing");
    record27.set("technicalSkills", ["C++/Python", "ROS", "Control Systems", "Kinematics", "Computer Vision", "Sensors", "Actuators", "Embedded Systems", "Simulation", "Machine Learning"]);
    record27.set("softSkills", ["Problem Solving", "Creativity", "Collaboration", "Attention to Detail", "Continuous Learning"]);
    record27.set("tools", ["ROS", "Gazebo", "MATLAB", "Simulink", "OpenCV", "Git"]);
    record27.set("faqs", [{"question": "Do I need a robotics degree?", "answer": "Not required. Many successful robotics engineers are self-taught or have bootcamp backgrounds. Hands-on projects matter more than credentials."}, {"question": "What's the learning path?", "answer": "Start with embedded systems and control theory, then ROS, then specialize (autonomous vehicles, industrial robots, humanoids). This typically takes 18-24 months."}, {"question": "What are the highest-paying robotics specializations?", "answer": "Autonomous vehicles, industrial automation, and humanoid robots command premium salaries. Specialized expertise is highly valued."}, {"question": "Is robotics a good career?", "answer": "Yes. Robotics is a growing field with applications across industries. Skilled engineers are in high demand with competitive salaries."}, {"question": "How is robotics evolving?", "answer": "AI and machine learning are transforming robotics. Autonomous systems, collaborative robots, and AI-powered robots are emerging areas with excellent opportunities."}, {"question": "What's the difference between Robotics Engineer and Embedded Systems Engineer?", "answer": "Robotics Engineers focus on complete robotic systems including hardware and software. Embedded Engineers focus on device firmware. Robotics Engineers need broader knowledge."}]);
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
    record28.set("name", "Quantum Computing Engineer");
    record28.set("slug", "quantum-computing-engineer");
    record28.set("description", "Develops algorithms and applications for quantum computers. Works with quantum mechanics principles to solve complex problems that classical computers cannot efficiently handle.");
    record28.set("entrySalary", 110000);
    record28.set("midSalary", 170000);
    record28.set("seniorSalary", 260000);
    record28.set("jobDemand", "Growing");
    record28.set("technicalSkills", ["Quantum Mechanics", "Quantum Algorithms", "Qiskit/Cirq", "Linear Algebra", "Python", "Quantum Gates", "Quantum Circuits", "Error Correction", "Optimization", "Simulation"]);
    record28.set("softSkills", ["Problem Solving", "Research Mindset", "Communication", "Collaboration", "Continuous Learning"]);
    record28.set("tools", ["Qiskit", "Cirq", "Q#", "Jupyter", "Git"]);
    record28.set("faqs", [{"question": "Do I need a physics degree?", "answer": "Helpful but not required. Understanding quantum mechanics is important. You can learn it through online courses and practice."}, {"question": "What's the learning path?", "answer": "Start with quantum mechanics and linear algebra, then quantum algorithms, then quantum programming. This typically takes 18-24 months with strong math background."}, {"question": "Is quantum computing a stable career?", "answer": "Growing but emerging. Quantum computing is still in early stages. Salaries are high, but job opportunities are limited. Good for long-term career."}, {"question": "What companies are hiring quantum engineers?", "answer": "IBM, Google, Microsoft, Amazon, and startups are hiring. Academic research is also an option. Job market is growing rapidly."}, {"question": "What are the highest-paying quantum specializations?", "answer": "Quantum algorithm development, quantum error correction, and quantum hardware design command premium salaries. Specialized expertise is highly valued."}, {"question": "Is this a good career choice?", "answer": "Yes, if you're interested in cutting-edge technology. Quantum computing is the future. Skilled engineers are in high demand with excellent salaries."}]);
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
    record29.set("name", "AR/VR Developer");
    record29.set("slug", "ar-vr-developer");
    record29.set("description", "Develops augmented reality and virtual reality applications and experiences. Creates immersive digital environments and interactive experiences for various platforms and devices.");
    record29.set("entrySalary", 75000);
    record29.set("midSalary", 120000);
    record29.set("seniorSalary", 180000);
    record29.set("jobDemand", "Growing");
    record29.set("technicalSkills", ["C#/C++", "Unity/Unreal", "3D Graphics", "Spatial Computing", "Physics", "User Interaction", "Performance Optimization", "Mobile Development", "3D Modeling", "Networking"]);
    record29.set("softSkills", ["Creativity", "Problem Solving", "Collaboration", "Communication", "Attention to Detail"]);
    record29.set("tools", ["Unity", "Unreal Engine", "Blender", "Visual Studio", "Git", "ARKit/ARCore"]);
    record29.set("faqs", [{"question": "Should I learn AR or VR first?", "answer": "Either is fine. AR is more accessible (mobile). VR is more immersive. Learning one deeply is better than surface-level knowledge of both."}, {"question": "What game engine should I use?", "answer": "Unity is more beginner-friendly and has better AR/VR support. Unreal is more powerful for high-end VR. Start with Unity."}, {"question": "What's the learning path?", "answer": "Start with game development fundamentals, then 3D graphics, then AR/VR frameworks. This typically takes 12-18 months with prior game dev experience."}, {"question": "What are the highest-paying AR/VR specializations?", "answer": "Enterprise VR, medical VR, and architectural visualization command premium salaries. Specialized expertise is highly valued."}, {"question": "Is AR/VR a good career?", "answer": "Yes. AR/VR is a growing field with applications across industries. Skilled developers are in high demand with competitive salaries."}, {"question": "How is AR/VR evolving?", "answer": "Spatial computing, mixed reality, and AI-powered experiences are emerging. Apple Vision Pro and similar devices are creating new opportunities."}]);
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
    record30.set("name", "Web3/Crypto Developer");
    record30.set("slug", "web3-crypto-developer");
    record30.set("description", "Develops decentralized applications and blockchain-based solutions. Creates Web3 applications that leverage blockchain technology for transparency, security, and decentralization.");
    record30.set("entrySalary", 95000);
    record30.set("midSalary", 155000);
    record30.set("seniorSalary", 240000);
    record30.set("jobDemand", "Growing");
    record30.set("technicalSkills", ["Solidity", "Web3.js", "Smart Contracts", "Ethereum", "DeFi", "NFTs", "JavaScript/Python", "Cryptography", "Distributed Systems", "Security"]);
    record30.set("softSkills", ["Problem Solving", "Research Mindset", "Communication", "Collaboration", "Continuous Learning"]);
    record30.set("tools", ["Remix IDE", "Hardhat", "Truffle", "MetaMask", "Etherscan", "Git"]);
    record30.set("faqs", [{"question": "What's the difference between Web3 Developer and Blockchain Developer?", "answer": "Web3 Developers focus on decentralized applications. Blockchain Developers focus on blockchain infrastructure. Web3 Developers need stronger frontend skills."}, {"question": "Do I need to understand cryptocurrency?", "answer": "Helpful but not required. Understanding blockchain fundamentals, smart contracts, and DeFi concepts is more important than cryptocurrency trading knowledge."}, {"question": "What's the learning path?", "answer": "Start with Solidity and smart contracts, then Web3.js, then build dApps. This typically takes 6-12 months with prior development experience."}, {"question": "Is Web3 a stable career?", "answer": "Growing but volatile. Web3 adoption is accelerating, but the industry is still emerging. Salaries are high but job stability varies."}, {"question": "What are the highest-paying Web3 specializations?", "answer": "DeFi protocol development, NFT platforms, and Web3 security command premium salaries. Specialized expertise is highly valued."}, {"question": "Is this a good career choice?", "answer": "Yes, if you're interested in emerging technology. Web3 developers are in high demand with excellent salaries. However, the field is still evolving."}]);
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
    record31.set("name", "Cloud Security Engineer");
    record31.set("slug", "cloud-security-engineer");
    record31.set("description", "Secures cloud infrastructure and applications against threats and vulnerabilities. Designs and implements security controls, compliance measures, and incident response for cloud environments.");
    record31.set("entrySalary", 95000);
    record31.set("midSalary", 140000);
    record31.set("seniorSalary", 200000);
    record31.set("jobDemand", "Very High");
    record31.set("technicalSkills", ["Cloud Platforms", "Network Security", "Identity Management", "Encryption", "Compliance", "Incident Response", "Vulnerability Assessment", "Threat Analysis", "Scripting", "Auditing"]);
    record31.set("softSkills", ["Attention to Detail", "Problem Solving", "Communication", "Ethical Mindset", "Continuous Learning"]);
    record31.set("tools", ["AWS", "GCP", "Azure", "Splunk", "Wireshark", "Nessus", "Git"]);
    record31.set("faqs", [{"question": "What certifications are most valuable?", "answer": "AWS Security Specialty, Google Cloud Security Engineer, Azure Security Engineer are recognized. CompTIA Security+ is a good foundation."}, {"question": "What cloud platform should I focus on?", "answer": "AWS is the market leader. GCP and Azure are also valuable. Learning one deeply is better than surface-level knowledge of all three."}, {"question": "How important is compliance knowledge?", "answer": "Very important. Understanding GDPR, HIPAA, SOC 2, and other compliance frameworks is essential for cloud security roles."}, {"question": "What's the career progression?", "answer": "Cloud Security Engineer \u2192 Senior Engineer \u2192 Security Architect \u2192 CISO. Progression depends on technical depth or management interest."}, {"question": "How is cloud security evolving?", "answer": "Zero-trust security, cloud-native security, and AI-powered threat detection are emerging. These specialized skills command premium salaries."}, {"question": "Is cloud security a good career?", "answer": "Excellent. Cloud security is critical as companies migrate to cloud. Skilled engineers are in very high demand with competitive salaries."}]);
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
    record32.set("description", "Designs and manages IT infrastructure including servers, storage, networking, and cloud resources. Ensures infrastructure is reliable, scalable, and cost-effective.");
    record32.set("entrySalary", 80000);
    record32.set("midSalary", 125000);
    record32.set("seniorSalary", 180000);
    record32.set("jobDemand", "High");
    record32.set("technicalSkills", ["Cloud Platforms", "Virtualization", "Networking", "Storage", "Infrastructure as Code", "Monitoring", "Automation", "Linux/Windows", "Databases", "Security"]);
    record32.set("softSkills", ["Problem Solving", "Communication", "Attention to Detail", "Collaboration", "Continuous Learning"]);
    record32.set("tools", ["Terraform", "Ansible", "Docker", "Kubernetes", "Prometheus", "Git"]);
    record32.set("faqs", [{"question": "What's the difference between Infrastructure Engineer and DevOps Engineer?", "answer": "Infrastructure Engineers focus on infrastructure design and management. DevOps Engineers focus on deployment and automation. DevOps typically pays more."}, {"question": "What cloud platform should I focus on?", "answer": "AWS is the market leader. GCP and Azure are also valuable. Learning one deeply is better than surface-level knowledge of all three."}, {"question": "How important is Infrastructure as Code?", "answer": "Very important. IaC (Terraform, CloudFormation) is industry standard. Strong IaC skills significantly increase your value."}, {"question": "What's the career progression?", "answer": "Junior Infrastructure Engineer \u2192 Senior Engineer \u2192 Infrastructure Architect \u2192 Manager. Some specialize in specific domains (cloud, security, databases)."}, {"question": "How is infrastructure changing?", "answer": "Cloud adoption is transforming infrastructure. On-premises infrastructure is declining. Cloud-focused infrastructure engineers are in high demand."}, {"question": "Is infrastructure a good career?", "answer": "Yes. Infrastructure is critical for all organizations. Skilled engineers are in high demand with competitive salaries and job security."}]);
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
    record33.set("name", "Release Engineer");
    record33.set("slug", "release-engineer");
    record33.set("description", "Manages software release processes and deployment pipelines. Ensures smooth, reliable releases of software products while maintaining quality and minimizing downtime.");
    record33.set("entrySalary", 85000);
    record33.set("midSalary", 130000);
    record33.set("seniorSalary", 185000);
    record33.set("jobDemand", "High");
    record33.set("technicalSkills", ["CI/CD", "Release Management", "Automation", "Scripting", "Version Control", "Deployment Tools", "Monitoring", "Incident Response", "Linux/Windows", "Cloud Platforms"]);
    record33.set("softSkills", ["Problem Solving", "Communication", "Attention to Detail", "Collaboration", "Stress Management"]);
    record33.set("tools", ["Jenkins", "GitLab CI", "GitHub Actions", "Ansible", "Docker", "Kubernetes", "Git"]);
    record33.set("faqs", [{"question": "What's the difference between Release Engineer and DevOps Engineer?", "answer": "Release Engineers focus on release processes and deployment. DevOps Engineers focus on infrastructure and automation. Both are valuable."}, {"question": "How important is scripting?", "answer": "Very important. You'll write scripts for automation, testing, and deployment. Python, Bash, and shell scripting are essential."}, {"question": "What's the learning path?", "answer": "Start with CI/CD and automation, then release management, then specialize. This typically takes 2-3 years of experience."}, {"question": "How stressful is the job?", "answer": "Can be stressful during releases. You're responsible for smooth deployments. On-call duty is common. However, good automation reduces stress."}, {"question": "What's the career progression?", "answer": "Release Engineer \u2192 Senior Release Engineer \u2192 Release Manager \u2192 Director. Some move into DevOps or platform engineering roles."}, {"question": "Is release engineering a good career?", "answer": "Yes. Release engineering is critical for modern software development. Skilled engineers are in high demand with competitive salaries."}]);
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
    record34.set("name", "Technical Architect");
    record34.set("slug", "technical-architect");
    record34.set("description", "Designs technical solutions and system architectures for complex business problems. Makes strategic technology decisions and provides technical leadership across organizations.");
    record34.set("entrySalary", 125000);
    record34.set("midSalary", 180000);
    record34.set("seniorSalary", 260000);
    record34.set("jobDemand", "High");
    record34.set("technicalSkills", ["System Design", "Architecture Patterns", "Cloud Platforms", "Databases", "Scalability", "Security", "Microservices", "Design Patterns", "Technical Leadership", "Business Acumen"]);
    record34.set("softSkills", ["Leadership", "Communication", "Strategic Thinking", "Decision Making", "Business Acumen"]);
    record34.set("tools", ["UML", "Lucidchart", "Visio", "Git", "Docker", "Kubernetes"]);
    record34.set("faqs", [{"question": "What experience is needed?", "answer": "Typically 8-10 years in development or infrastructure roles. You need deep technical knowledge and proven ability to make good architectural decisions."}, {"question": "How much coding is involved?", "answer": "Minimal direct coding. You focus on design, documentation, and technical leadership. You may review code and guide others."}, {"question": "What's the difference between Technical Architect and Software Architect?", "answer": "Technical Architects have broader scope including infrastructure and business solutions. Software Architects focus on application architecture."}, {"question": "How important is communication?", "answer": "Critical. You need to explain complex technical concepts to non-technical stakeholders and align technical decisions with business goals."}, {"question": "What's the career progression?", "answer": "Senior Developer \u2192 Architect \u2192 Principal Architect \u2192 VP of Engineering. Some move into consulting or CTO roles."}, {"question": "Is this a good long-term career?", "answer": "Excellent. Technical Architects are in high demand, salaries are very competitive, and there's clear progression to leadership roles."}]);
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
    record35.set("name", "Solutions Engineer");
    record35.set("slug", "solutions-engineer");
    record35.set("description", "Bridges the gap between sales and engineering by designing technical solutions for customers. Understands customer needs and creates solutions that address their business problems.");
    record35.set("entrySalary", 90000);
    record35.set("midSalary", 140000);
    record35.set("seniorSalary", 200000);
    record35.set("jobDemand", "High");
    record35.set("technicalSkills", ["System Design", "Cloud Platforms", "Databases", "Networking", "Security", "Integration", "Scalability", "Technical Communication", "Problem Solving", "Business Acumen"]);
    record35.set("softSkills", ["Communication", "Presentation Skills", "Problem Solving", "Business Acumen", "Collaboration"]);
    record35.set("tools", ["AWS/GCP/Azure", "Lucidchart", "Visio", "Git"]);
    record35.set("faqs", [{"question": "What's the difference between Solutions Engineer and Solutions Architect?", "answer": "Solutions Engineers work with customers to understand needs and design solutions. Solutions Architects focus on technical design. Engineers need stronger communication skills."}, {"question": "How much time is spent with customers?", "answer": "Significant time. You'll attend meetings, presentations, and demos. Strong communication and presentation skills are essential."}, {"question": "What's the learning path?", "answer": "Start with development or infrastructure, then move into solutions engineering. This typically requires 3-5 years of technical experience."}, {"question": "How important is sales knowledge?", "answer": "Helpful but not required. Understanding customer needs and business value is important. You'll work closely with sales teams."}, {"question": "What's the career progression?", "answer": "Solutions Engineer \u2192 Senior Solutions Engineer \u2192 Solutions Architect \u2192 Sales Engineering Manager. Some move into product or consulting roles."}, {"question": "Is this a good career?", "answer": "Yes. Solutions Engineers are in high demand, salaries are competitive, and the role offers variety and customer interaction."}]);
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
    record36.set("name", "Performance Engineer");
    record36.set("slug", "performance-engineer");
    record36.set("description", "Optimizes application and system performance to ensure fast, responsive user experiences. Identifies bottlenecks, conducts performance testing, and implements optimizations.");
    record36.set("entrySalary", 85000);
    record36.set("midSalary", 130000);
    record36.set("seniorSalary", 190000);
    record36.set("jobDemand", "High");
    record36.set("technicalSkills", ["Performance Testing", "Profiling", "Load Testing", "Optimization", "Monitoring", "Databases", "Caching", "Networking", "Scripting", "System Design"]);
    record36.set("softSkills", ["Problem Solving", "Attention to Detail", "Communication", "Collaboration", "Analytical Thinking"]);
    record36.set("tools", ["JMeter", "LoadRunner", "Gatling", "Prometheus", "Grafana", "Git"]);
    record36.set("faqs", [{"question": "What's the difference between Performance Engineer and QA Engineer?", "answer": "Performance Engineers focus on performance and load testing. QA Engineers focus on functional testing. Performance Engineers need deeper understanding of systems."}, {"question": "How important is coding?", "answer": "Important. You'll write performance tests and optimization scripts. Python, Java, and scripting skills are valuable."}, {"question": "What's the learning path?", "answer": "Start with QA or backend engineering, then learn performance testing and optimization. This typically takes 2-3 years of experience."}, {"question": "What are the highest-paying performance specializations?", "answer": "High-traffic systems, financial services, and real-time systems command premium salaries. Specialized expertise is highly valued."}, {"question": "Is performance engineering a good career?", "answer": "Yes. Performance is critical for user experience. Skilled engineers are in high demand with competitive salaries."}, {"question": "How is performance engineering evolving?", "answer": "Cloud-native performance, serverless optimization, and AI-powered performance analysis are emerging areas with excellent opportunities."}]);
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
    record37.set("name", "Penetration Tester/Ethical Hacker");
    record37.set("slug", "penetration-tester");
    record37.set("description", "Tests security of systems and networks by attempting to find vulnerabilities before malicious actors do. Conducts authorized security assessments and provides recommendations for improvements.");
    record37.set("entrySalary", 80000);
    record37.set("midSalary", 125000);
    record37.set("seniorSalary", 180000);
    record37.set("jobDemand", "Very High");
    record37.set("technicalSkills", ["Network Security", "Penetration Testing", "Vulnerability Assessment", "Exploitation", "Scripting", "Cryptography", "Web Security", "Wireless Security", "Social Engineering", "Reporting"]);
    record37.set("softSkills", ["Problem Solving", "Attention to Detail", "Communication", "Ethical Mindset", "Continuous Learning"]);
    record37.set("tools", ["Metasploit", "Burp Suite", "Nmap", "Wireshark", "Kali Linux", "Git"]);
    record37.set("faqs", [{"question": "What certifications are most valuable?", "answer": "CEH (Certified Ethical Hacker), OSCP (Offensive Security Certified Professional), GPEN are industry-recognized. OSCP is the most respected."}, {"question": "Is penetration testing legal?", "answer": "Yes, if authorized. You must have written permission from the organization. Unauthorized testing is illegal."}, {"question": "What's the learning path?", "answer": "Start with networking and security fundamentals, then penetration testing tools and techniques. This typically takes 12-18 months."}, {"question": "How important is coding?", "answer": "Important. You'll write exploits and automation scripts. Python and Bash are essential."}, {"question": "What's the career progression?", "answer": "Penetration Tester \u2192 Senior Tester \u2192 Security Consultant \u2192 Security Manager. Some specialize in specific domains (web, network, wireless)."}, {"question": "Is penetration testing a good career?", "answer": "Excellent. Cyber threats are increasing, and skilled testers are in very high demand with competitive salaries."}]);
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
    record38.set("name", "SOC Analyst");
    record38.set("slug", "soc-analyst");
    record38.set("description", "Monitors security events and alerts in a Security Operations Center to detect and respond to threats. Analyzes security incidents and coordinates incident response efforts.");
    record38.set("entrySalary", 65000);
    record38.set("midSalary", 100000);
    record38.set("seniorSalary", 145000);
    record38.set("jobDemand", "Very High");
    record38.set("technicalSkills", ["SIEM Tools", "Log Analysis", "Threat Analysis", "Incident Response", "Network Security", "Malware Analysis", "Scripting", "Monitoring", "Forensics", "Compliance"]);
    record38.set("softSkills", ["Attention to Detail", "Problem Solving", "Communication", "Stress Management", "Continuous Learning"]);
    record38.set("tools", ["Splunk", "ELK Stack", "Wireshark", "Snort", "Suricata", "Git"]);
    record38.set("faqs", [{"question": "What certifications are most valuable?", "answer": "CompTIA Security+, CEH, CISSP are recognized. Security+ is the entry point. CISSP requires 5 years experience."}, {"question": "What's the learning path?", "answer": "Start with security fundamentals, then SIEM tools and log analysis, then incident response. This typically takes 6-12 months."}, {"question": "Is SOC Analyst a good entry-level security career?", "answer": "Yes. SOC Analyst is a good starting point for security careers. You learn fundamentals and can specialize later."}, {"question": "How stressful is the job?", "answer": "Can be stressful. You're on-call for incidents. However, good processes and team support reduce stress."}, {"question": "What's the career progression?", "answer": "SOC Analyst \u2192 Senior Analyst \u2192 Security Engineer \u2192 Security Architect \u2192 CISO. Progression depends on technical depth or management interest."}, {"question": "How is SOC evolving?", "answer": "AI and automation are transforming SOC. Automated threat detection and response are emerging. These skills command premium salaries."}]);
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
    record39.set("name", "Incident Response Specialist");
    record39.set("slug", "incident-response-specialist");
    record39.set("description", "Responds to and manages security incidents and breaches. Investigates incidents, contains threats, and implements remediation measures to minimize damage and prevent future incidents.");
    record39.set("entrySalary", 85000);
    record39.set("midSalary", 130000);
    record39.set("seniorSalary", 190000);
    record39.set("jobDemand", "Very High");
    record39.set("technicalSkills", ["Incident Response", "Forensics", "Malware Analysis", "Network Security", "Log Analysis", "Threat Analysis", "Scripting", "Compliance", "Evidence Handling", "Communication"]);
    record39.set("softSkills", ["Problem Solving", "Communication", "Stress Management", "Attention to Detail", "Continuous Learning"]);
    record39.set("tools", ["Splunk", "Wireshark", "Volatility", "Autopsy", "Git"]);
    record39.set("faqs", [{"question": "What certifications are most valuable?", "answer": "GCIH (GIAC Certified Incident Handler), ECIH, CISSP are recognized. GCIH is a good starting point."}, {"question": "What's the learning path?", "answer": "Start with security fundamentals, then incident response procedures, then forensics. This typically takes 2-3 years of security experience."}, {"question": "How stressful is the job?", "answer": "Very stressful. You're responding to active incidents. However, good processes and team support reduce stress. On-call duty is common."}, {"question": "What's the career progression?", "answer": "Incident Response Specialist \u2192 Senior Specialist \u2192 Incident Response Manager \u2192 Security Manager. Some move into consulting roles."}, {"question": "Is incident response a good career?", "answer": "Excellent. Cyber incidents are increasing, and skilled responders are in very high demand with competitive salaries."}, {"question": "How is incident response evolving?", "answer": "Automation and AI are transforming incident response. Automated detection and response are emerging. These skills command premium salaries."}]);
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
    record40.set("name", "Compliance Engineer");
    record40.set("slug", "compliance-engineer");
    record40.set("description", "Ensures systems and processes comply with regulatory requirements and security standards. Implements compliance controls, conducts audits, and maintains compliance documentation.");
    record40.set("entrySalary", 80000);
    record40.set("midSalary", 125000);
    record40.set("seniorSalary", 180000);
    record40.set("jobDemand", "High");
    record40.set("technicalSkills", ["Compliance Frameworks", "Auditing", "Risk Assessment", "Security Controls", "Documentation", "Regulatory Knowledge", "Scripting", "Monitoring", "Reporting", "Technical Knowledge"]);
    record40.set("softSkills", ["Attention to Detail", "Communication", "Problem Solving", "Collaboration", "Continuous Learning"]);
    record40.set("tools", ["Compliance Tools", "Audit Tools", "Git"]);
    record40.set("faqs", [{"question": "What certifications are most valuable?", "answer": "CISSP, CISM, CCSK are recognized. Industry-specific certifications (HIPAA, PCI-DSS) are also valuable."}, {"question": "What compliance frameworks should I learn?", "answer": "GDPR, HIPAA, SOC 2, PCI-DSS, ISO 27001 are major frameworks. Learning one deeply is better than surface-level knowledge of all."}, {"question": "How important is technical knowledge?", "answer": "Important. You need to understand technical controls and systems. Strong technical background helps significantly."}, {"question": "What's the career progression?", "answer": "Compliance Engineer \u2192 Senior Engineer \u2192 Compliance Manager \u2192 Chief Compliance Officer. Some move into consulting roles."}, {"question": "Is compliance engineering a good career?", "answer": "Yes. Compliance is critical for organizations. Skilled engineers are in high demand with competitive salaries and job security."}, {"question": "How is compliance evolving?", "answer": "Automation and AI are transforming compliance. Continuous compliance monitoring and automated controls are emerging areas with excellent opportunities."}]);
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
    record41.set("name", "IT Project Manager");
    record41.set("slug", "it-project-manager");
    record41.set("description", "Manages IT projects from planning through completion. Oversees budgets, timelines, resources, and stakeholders to ensure successful project delivery.");
    record41.set("entrySalary", 85000);
    record41.set("midSalary", 130000);
    record41.set("seniorSalary", 185000);
    record41.set("jobDemand", "High");
    record41.set("technicalSkills", ["Project Management", "IT Knowledge", "Risk Management", "Budget Management", "Stakeholder Management", "Communication", "Planning", "Monitoring", "Problem Solving", "Leadership"]);
    record41.set("softSkills", ["Leadership", "Communication", "Problem Solving", "Time Management", "Stress Management"]);
    record41.set("tools", ["Jira", "Asana", "Microsoft Project", "Confluence"]);
    record41.set("faqs", [{"question": "What certifications are most valuable?", "answer": "PMP (Project Management Professional), CAPM, Agile certifications are recognized. PMP is the most respected."}, {"question": "Do I need technical background?", "answer": "Helpful but not required. Understanding IT concepts helps, but project management skills are more important."}, {"question": "What's the learning path?", "answer": "Start with IT experience, then project management training, then certifications. This typically takes 3-5 years of IT experience."}, {"question": "What's the career progression?", "answer": "Project Manager \u2192 Senior Project Manager \u2192 Program Manager \u2192 Director. Some move into consulting or executive roles."}, {"question": "How stressful is the job?", "answer": "Can be stressful. You're responsible for project success. However, good planning and team support reduce stress."}, {"question": "Is IT Project Management a good career?", "answer": "Yes. Project managers are in high demand. Salaries are competitive, and there's clear progression to leadership roles."}]);
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
    record42.set("name", "Technical Program Manager");
    record42.set("slug", "technical-program-manager");
    record42.set("description", "Manages complex technical programs and initiatives across multiple teams. Coordinates technical work, removes blockers, and ensures alignment with business objectives.");
    record42.set("entrySalary", 100000);
    record42.set("midSalary", 150000);
    record42.set("seniorSalary", 220000);
    record42.set("jobDemand", "High");
    record42.set("technicalSkills", ["Program Management", "Technical Knowledge", "System Design", "Risk Management", "Stakeholder Management", "Communication", "Problem Solving", "Leadership", "Metrics"]);
    record42.set("softSkills", ["Leadership", "Communication", "Problem Solving", "Strategic Thinking", "Collaboration"]);
    record42.set("tools", ["Jira", "Asana", "Confluence", "Lucidchart"]);
    record42.set("faqs", [{"question": "What's the difference between Technical Program Manager and Project Manager?", "answer": "TPMs manage complex technical programs across teams. PMs manage individual projects. TPMs need stronger technical knowledge and earn more."}, {"question": "Do I need coding experience?", "answer": "Not required, but helpful. Understanding technical concepts and system design is important. Strong communication skills are more critical."}, {"question": "What's the learning path?", "answer": "Start with engineering or project management, then move into TPM roles. This typically requires 3-5 years of technical experience."}, {"question": "What's the career progression?", "answer": "Technical Program Manager \u2192 Senior TPM \u2192 Director \u2192 VP. Some move into product or executive roles."}, {"question": "Is TPM a good career?", "answer": "Excellent. TPMs are in high demand at tech companies. Salaries are very competitive, and there's clear progression to leadership roles."}, {"question": "How is TPM role evolving?", "answer": "TPMs are becoming more strategic. Focus on business impact, metrics, and cross-functional alignment is increasing. These skills command premium salaries."}]);
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
    record43.set("name", "Product Manager (Tech)");
    record43.set("slug", "product-manager-tech");
    record43.set("description", "Defines product vision and strategy for technology products. Works with engineering, design, and business teams to build products that solve customer problems and drive business value.");
    record43.set("entrySalary", 100000);
    record43.set("midSalary", 160000);
    record43.set("seniorSalary", 240000);
    record43.set("jobDemand", "High");
    record43.set("technicalSkills", ["Product Strategy", "Technical Knowledge", "Data Analysis", "User Research", "Metrics", "Communication", "Problem Solving", "Business Acumen", "Market Analysis"]);
    record43.set("softSkills", ["Leadership", "Communication", "Strategic Thinking", "Collaboration", "Empathy"]);
    record43.set("tools", ["Jira", "Figma", "Analytics Tools", "Lucidchart"]);
    record43.set("faqs", [{"question": "Do I need technical background?", "answer": "Helpful but not required. Understanding technical concepts helps, but product thinking and business acumen are more important."}, {"question": "What's the learning path?", "answer": "Start with engineering or business, then move into product roles. This typically requires 3-5 years of experience."}, {"question": "What's the difference between Product Manager and Technical Program Manager?", "answer": "PMs focus on product vision and strategy. TPMs focus on program execution. PMs need stronger business and user understanding."}, {"question": "What's the career progression?", "answer": "Product Manager \u2192 Senior PM \u2192 Director \u2192 VP of Product. Some move into executive or consulting roles."}, {"question": "Is Product Management a good career?", "answer": "Excellent. PMs are in high demand at tech companies. Salaries are very competitive, and there's clear progression to leadership roles."}, {"question": "How is Product Management evolving?", "answer": "Data-driven product decisions, AI-powered features, and user-centric design are increasingly important. These skills command premium salaries."}]);
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
    record44.set("name", "Engineering Manager");
    record44.set("slug", "engineering-manager");
    record44.set("description", "Leads and manages engineering teams to deliver high-quality software products. Focuses on team development, technical excellence, and business outcomes.");
    record44.set("entrySalary", 110000);
    record44.set("midSalary", 170000);
    record44.set("seniorSalary", 260000);
    record44.set("jobDemand", "High");
    record44.set("technicalSkills", ["Technical Leadership", "Team Management", "System Design", "Code Quality", "Hiring", "Performance Management", "Communication", "Problem Solving", "Business Acumen"]);
    record44.set("softSkills", ["Leadership", "Communication", "Empathy", "Decision Making", "Conflict Resolution"]);
    record44.set("tools", ["Jira", "Confluence", "Git"]);
    record44.set("faqs", [{"question": "What experience is needed?", "answer": "Typically 5-7 years as an engineer. You need strong technical foundation and proven ability to lead and develop others."}, {"question": "How much coding is involved?", "answer": "Minimal direct coding. You focus on team leadership, hiring, and strategic decisions. You may review code and guide others."}, {"question": "What's the career progression?", "answer": "Senior Engineer \u2192 Engineering Manager \u2192 Senior Manager \u2192 Director \u2192 VP. Some move into executive or consulting roles."}, {"question": "Is management a good career?", "answer": "Yes, if you enjoy leading people. Managers earn more than individual contributors. However, management is different from engineering."}, {"question": "How important is people management?", "answer": "Critical. Your success depends on your team's success. Hiring, developing, and retaining talent is essential."}, {"question": "Is it possible to go back to engineering?", "answer": "Yes, but challenging. Many managers transition back to engineering. However, it's easier to move forward into management."}]);
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
    record45.set("name", "Staff Engineer");
    record45.set("slug", "staff-engineer");
    record45.set("description", "Provides technical leadership and expertise across multiple teams and projects. Influences architecture decisions, mentors engineers, and drives technical excellence.");
    record45.set("entrySalary", 140000);
    record45.set("midSalary", 200000);
    record45.set("seniorSalary", 300000);
    record45.set("jobDemand", "High");
    record45.set("technicalSkills", ["System Design", "Architecture", "Technical Leadership", "Code Quality", "Mentoring", "Problem Solving", "Communication", "Business Acumen", "Strategic Thinking"]);
    record45.set("softSkills", ["Leadership", "Communication", "Mentoring", "Strategic Thinking", "Influence"]);
    record45.set("tools", ["Git", "Lucidchart", "Confluence"]);
    record45.set("faqs", [{"question": "What experience is needed?", "answer": "Typically 8-10 years as an engineer. You need deep technical expertise and proven ability to influence and lead without authority."}, {"question": "How much coding is involved?", "answer": "Varies. Some Staff Engineers code heavily, others focus on architecture and mentoring. It depends on the company and role."}, {"question": "What's the difference between Staff Engineer and Engineering Manager?", "answer": "Staff Engineers focus on technical excellence and architecture. Managers focus on team leadership. Both are valuable career paths."}, {"question": "What's the career progression?", "answer": "Senior Engineer \u2192 Staff Engineer \u2192 Principal Engineer \u2192 Distinguished Engineer. Some move into management or consulting roles."}, {"question": "Is Staff Engineer a good career?", "answer": "Excellent. Staff Engineers are in high demand, salaries are very competitive, and the role offers technical depth and influence."}, {"question": "How is Staff Engineer role evolving?", "answer": "Staff Engineers are becoming more strategic. Focus on business impact, cross-functional leadership, and organizational influence is increasing."}]);
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
    record46.set("name", "Principal Engineer");
    record46.set("slug", "principal-engineer");
    record46.set("description", "Provides strategic technical leadership and vision for the organization. Influences long-term technical direction, drives innovation, and mentors senior engineers.");
    record46.set("entrySalary", 160000);
    record46.set("midSalary", 240000);
    record46.set("seniorSalary", 350000);
    record46.set("jobDemand", "High");
    record46.set("technicalSkills", ["Strategic Vision", "System Design", "Architecture", "Technical Leadership", "Innovation", "Mentoring", "Communication", "Business Acumen", "Industry Knowledge"]);
    record46.set("softSkills", ["Leadership", "Communication", "Strategic Thinking", "Influence", "Mentoring"]);
    record46.set("tools", ["Git", "Lucidchart", "Confluence"]);
    record46.set("faqs", [{"question": "What experience is needed?", "answer": "Typically 12+ years as an engineer. You need exceptional technical expertise and proven ability to drive organizational change."}, {"question": "How much coding is involved?", "answer": "Minimal. You focus on strategy, architecture, and mentoring. You may review code and guide others."}, {"question": "What's the difference between Principal Engineer and Staff Engineer?", "answer": "Principal Engineers have broader organizational scope and strategic influence. Staff Engineers focus on technical excellence within teams."}, {"question": "What's the career progression?", "answer": "Staff Engineer \u2192 Principal Engineer \u2192 Distinguished Engineer \u2192 CTO. Some move into consulting or executive roles."}, {"question": "Is Principal Engineer a good career?", "answer": "Excellent. Principal Engineers are in high demand, salaries are exceptional, and the role offers significant influence and impact."}, {"question": "How rare is Principal Engineer role?", "answer": "Very rare. Only top 1-2% of engineers reach this level. It requires exceptional technical expertise and organizational impact."}]);
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
    record47.set("name", "Research Scientist");
    record47.set("slug", "research-scientist");
    record47.set("description", "Conducts research to advance technology and solve complex problems. Publishes papers, develops novel algorithms, and drives innovation in specific technical domains.");
    record47.set("entrySalary", 110000);
    record47.set("midSalary", 170000);
    record47.set("seniorSalary", 260000);
    record47.set("jobDemand", "Growing");
    record47.set("technicalSkills", ["Research Methodology", "Mathematics", "Programming", "Machine Learning", "Statistics", "Data Analysis", "Writing", "Presentation", "Domain Expertise", "Continuous Learning"]);
    record47.set("softSkills", ["Research Mindset", "Communication", "Collaboration", "Creativity", "Persistence"]);
    record47.set("tools", ["Python", "Jupyter", "Git", "LaTeX"]);
    record47.set("faqs", [{"question": "Do I need a PhD?", "answer": "Helpful but not required. Many research scientists have PhDs, but strong research skills and publications matter more."}, {"question": "What's the learning path?", "answer": "Start with strong math and programming foundation, then specialize in research area. This typically requires 4-6 years of education and experience."}, {"question": "What's the difference between Research Scientist and ML Engineer?", "answer": "Research Scientists focus on novel research and publications. ML Engineers focus on production systems. Scientists need stronger research skills."}, {"question": "Where do research scientists work?", "answer": "Tech companies (Google, Meta, OpenAI), academic institutions, and research labs. Industry research is growing rapidly."}, {"question": "What's the career progression?", "answer": "Research Scientist \u2192 Senior Scientist \u2192 Principal Scientist \u2192 Research Director. Some move into consulting or academic roles."}, {"question": "Is research science a good career?", "answer": "Excellent for those interested in advancing technology. Salaries are competitive, and the work is intellectually challenging and impactful."}]);
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
    record48.set("name", "Technical Writer");
    record48.set("slug", "technical-writer");
    record48.set("description", "Creates technical documentation, guides, and content for software products and systems. Translates complex technical concepts into clear, accessible documentation for users and developers.");
    record48.set("entrySalary", 65000);
    record48.set("midSalary", 100000);
    record48.set("seniorSalary", 145000);
    record48.set("jobDemand", "High");
    record48.set("technicalSkills", ["Technical Writing", "Documentation Tools", "Markdown", "API Documentation", "User Guides", "Technical Knowledge", "Research", "Communication", "Organization", "Attention to Detail"]);
    record48.set("softSkills", ["Communication", "Attention to Detail", "Organization", "Empathy", "Collaboration"]);
    record48.set("tools", ["Markdown", "Git", "Confluence", "Sphinx", "MkDocs"]);
    record48.set("faqs", [{"question": "Do I need technical background?", "answer": "Helpful but not required. Strong writing skills and ability to learn technical concepts are more important."}, {"question": "What's the learning path?", "answer": "Start with writing skills, then learn technical concepts and documentation tools. This typically takes 6-12 months."}, {"question": "What types of technical writing are there?", "answer": "API documentation, user guides, tutorials, blog posts, and internal documentation. Different types require different skills."}, {"question": "What's the career progression?", "answer": "Technical Writer \u2192 Senior Writer \u2192 Documentation Manager \u2192 Director. Some move into content strategy or product roles."}, {"question": "Is technical writing a good career?", "answer": "Yes. Good documentation is critical for products. Skilled writers are in high demand with competitive salaries."}, {"question": "How is technical writing evolving?", "answer": "AI-assisted writing, interactive documentation, and video tutorials are emerging. These skills command premium salaries."}]);
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
    record49.set("name", "Developer Advocate");
    record49.set("slug", "developer-advocate");
    record49.set("description", "Advocates for developers and promotes developer-friendly products and platforms. Creates content, speaks at conferences, and builds communities around technologies.");
    record49.set("entrySalary", 85000);
    record49.set("midSalary", 135000);
    record49.set("seniorSalary", 190000);
    record49.set("jobDemand", "Growing");
    record49.set("technicalSkills", ["Technical Knowledge", "Communication", "Content Creation", "Public Speaking", "Community Building", "Programming", "Problem Solving", "Marketing", "Social Media", "Presentation"]);
    record49.set("softSkills", ["Communication", "Presentation Skills", "Empathy", "Collaboration", "Passion for Technology"]);
    record49.set("tools", ["Git", "Markdown", "Video Tools", "Social Media"]);
    record49.set("faqs", [{"question": "Do I need to be a great programmer?", "answer": "Not required, but helpful. Strong communication and presentation skills are more important. You need to understand developer needs."}, {"question": "What's the learning path?", "answer": "Start with development experience, then move into advocacy roles. This typically requires 3-5 years of technical experience."}, {"question": "What's the difference between Developer Advocate and Sales Engineer?", "answer": "Advocates focus on community and content. Sales Engineers focus on customer solutions. Advocates need stronger communication skills."}, {"question": "What's the career progression?", "answer": "Developer Advocate \u2192 Senior Advocate \u2192 Director \u2192 VP of Developer Relations. Some move into product or consulting roles."}, {"question": "Is Developer Advocate a good career?", "answer": "Yes, if you enjoy public speaking and community building. Salaries are competitive, and the work is impactful and engaging."}, {"question": "How is Developer Advocacy evolving?", "answer": "Content creation, community building, and thought leadership are increasingly important. These skills command premium salaries."}]);
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
