/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
    record0.set("name", "Software Engineer");
    record0.set("slug", "software-engineer");
    record0.set("description", "Design, develop, and maintain software applications and systems using programming languages and development frameworks.");
    record0.set("overview", "Software engineers create and improve software applications that power modern technology. They work with various programming languages, frameworks, and tools to build scalable solutions. This role involves problem-solving, coding, testing, and collaborating with cross-functional teams.");
    record0.set("averageSalary", 145000);
    record0.set("salaryRange", "{'min': 85000, 'max': 220000}");
    record0.set("jobDemandOutlook", "High");
    record0.set("entrySalary", 85000);
    record0.set("midSalary", 145000);
    record0.set("seniorSalary", 220000);
    record0.set("jobDemand", "High");
    record0.set("skillsRequired", [{"skill": "Python", "proficiency": "Advanced"}, {"skill": "JavaScript", "proficiency": "Advanced"}, {"skill": "Java", "proficiency": "Advanced"}, {"skill": "System Design", "proficiency": "Intermediate"}, {"skill": "Database Design", "proficiency": "Intermediate"}, {"skill": "API Development", "proficiency": "Advanced"}]);
    record0.set("softSkills", ["Problem Solving", "Communication", "Teamwork", "Time Management", "Adaptability"]);
    record0.set("tools", ["Git", "Docker", "Kubernetes", "Jenkins", "VS Code", "IntelliJ IDEA"]);
    record0.set("topPayingStates", [{"state": "California", "salary": 165000}, {"state": "New York", "salary": 155000}, {"state": "Washington", "salary": 150000}, {"state": "Massachusetts", "salary": 148000}, {"state": "Colorado", "salary": 142000}]);
    record0.set("relatedCareers", ["full-stack-developer", "data-scientist", "devops-engineer"]);
    record0.set("salaryInsights", "{'trends': 'Steady growth with 13% increase expected through 2026', 'growthProjection': '15% job growth over next 5 years', 'benefits': 'Health insurance, 401k, stock options, remote work, professional development'}");
    record0.set("roadmap", [{"stage": "Junior Developer", "duration": "0-2 years", "skills": ["Core programming", "Version control", "Basic testing"], "salary": 85000}, {"stage": "Mid-Level Developer", "duration": "2-5 years", "skills": ["System design", "Code review", "Mentoring"], "salary": 145000}, {"stage": "Senior Developer", "duration": "5+ years", "skills": ["Architecture", "Leadership", "Strategic planning"], "salary": 220000}]);
    record0.set("faqs", [{"question": "What programming languages should I learn first?", "answer": "Start with Python or JavaScript as they're beginner-friendly and widely used. Then learn Java or C++ for deeper understanding."}, {"question": "Do I need a computer science degree?", "answer": "While helpful, many successful engineers are self-taught or bootcamp graduates. Focus on building a strong portfolio."}, {"question": "What's the job market like in 2026?", "answer": "Extremely competitive with high demand. Remote opportunities are abundant, and salaries continue to rise."}]);
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
    record1.set("description", "Analyze complex datasets to help organizations make data-driven decisions using statistical analysis, machine learning, and data visualization.");
    record1.set("overview", "Data scientists extract insights from large datasets using statistical methods, machine learning algorithms, and data visualization techniques. They work across industries to solve business problems, predict trends, and optimize operations.");
    record1.set("averageSalary", 135000);
    record1.set("salaryRange", "{'min': 80000, 'max': 210000}");
    record1.set("jobDemandOutlook", "High");
    record1.set("entrySalary", 80000);
    record1.set("midSalary", 135000);
    record1.set("seniorSalary", 210000);
    record1.set("jobDemand", "High");
    record1.set("skillsRequired", [{"skill": "Python", "proficiency": "Advanced"}, {"skill": "SQL", "proficiency": "Advanced"}, {"skill": "Machine Learning", "proficiency": "Advanced"}, {"skill": "Statistics", "proficiency": "Advanced"}, {"skill": "Data Visualization", "proficiency": "Intermediate"}, {"skill": "Big Data Tools", "proficiency": "Intermediate"}]);
    record1.set("softSkills", ["Communication", "Problem Solving", "Critical Thinking", "Business Acumen", "Presentation Skills"]);
    record1.set("tools", ["Python", "R", "TensorFlow", "Scikit-learn", "Tableau", "Power BI", "Spark"]);
    record1.set("topPayingStates", [{"state": "California", "salary": 155000}, {"state": "New York", "salary": 148000}, {"state": "Massachusetts", "salary": 145000}, {"state": "Washington", "salary": 142000}, {"state": "Illinois", "salary": 138000}]);
    record1.set("relatedCareers", ["machine-learning-engineer", "data-analyst", "software-engineer"]);
    record1.set("salaryInsights", "{'trends': 'Growing demand with 36% job growth projected', 'growthProjection': 'One of the fastest-growing tech careers', 'benefits': 'Competitive salary, stock options, flexible work, learning opportunities'}");
    record1.set("roadmap", [{"stage": "Junior Data Scientist", "duration": "0-2 years", "skills": ["Data cleaning", "Basic ML", "SQL"], "salary": 80000}, {"stage": "Data Scientist", "duration": "2-5 years", "skills": ["Advanced ML", "Model deployment", "Business insights"], "salary": 135000}, {"stage": "Senior Data Scientist", "duration": "5+ years", "skills": ["Research", "Strategy", "Team leadership"], "salary": 210000}]);
    record1.set("faqs", [{"question": "What's the difference between data scientist and data analyst?", "answer": "Data scientists focus on building predictive models and ML solutions, while analysts focus on reporting and insights."}, {"question": "Do I need a PhD?", "answer": "Not required. Many successful data scientists have bachelor's degrees or bootcamp certifications with strong portfolios."}, {"question": "What industries hire data scientists?", "answer": "Tech, finance, healthcare, retail, manufacturing, and government all have high demand for data scientists."}]);
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
    record2.set("description", "Develop both frontend and backend components of web applications, handling user interfaces and server-side logic.");
    record2.set("overview", "Full stack developers work on all layers of web applications, from user-facing interfaces to backend servers and databases. They bridge the gap between design and infrastructure, creating complete web solutions.");
    record2.set("averageSalary", 130000);
    record2.set("salaryRange", "{'min': 75000, 'max': 200000}");
    record2.set("jobDemandOutlook", "High");
    record2.set("entrySalary", 75000);
    record2.set("midSalary", 130000);
    record2.set("seniorSalary", 200000);
    record2.set("jobDemand", "High");
    record2.set("skillsRequired", [{"skill": "JavaScript", "proficiency": "Advanced"}, {"skill": "React/Vue", "proficiency": "Advanced"}, {"skill": "Node.js", "proficiency": "Advanced"}, {"skill": "Database Design", "proficiency": "Intermediate"}, {"skill": "REST APIs", "proficiency": "Advanced"}, {"skill": "HTML/CSS", "proficiency": "Advanced"}]);
    record2.set("softSkills", ["Communication", "Problem Solving", "Creativity", "Attention to Detail", "Collaboration"]);
    record2.set("tools", ["React", "Node.js", "MongoDB", "PostgreSQL", "Git", "Webpack", "Docker"]);
    record2.set("topPayingStates", [{"state": "California", "salary": 150000}, {"state": "New York", "salary": 142000}, {"state": "Washington", "salary": 138000}, {"state": "Massachusetts", "salary": 135000}, {"state": "Colorado", "salary": 130000}]);
    record2.set("relatedCareers", ["frontend-developer", "backend-developer", "software-engineer"]);
    record2.set("salaryInsights", "{'trends': 'Consistent demand with 13% growth expected', 'growthProjection': 'Strong job market through 2026 and beyond', 'benefits': 'Flexible work, remote options, continuous learning, competitive pay'}");
    record2.set("roadmap", [{"stage": "Junior Full Stack Developer", "duration": "0-2 years", "skills": ["Frontend basics", "Backend fundamentals", "Database basics"], "salary": 75000}, {"stage": "Full Stack Developer", "duration": "2-5 years", "skills": ["Advanced frontend", "Scalable backend", "DevOps basics"], "salary": 130000}, {"stage": "Senior Full Stack Developer", "duration": "5+ years", "skills": ["Architecture", "Mentoring", "System design"], "salary": 200000}]);
    record2.set("faqs", [{"question": "Is it better to specialize or be full stack?", "answer": "Both paths are viable. Full stack offers flexibility and higher pay, while specialization allows deeper expertise."}, {"question": "What's the learning curve?", "answer": "Expect 6-12 months to become job-ready with consistent learning and practice."}, {"question": "Can I transition from frontend to full stack?", "answer": "Yes, many frontend developers transition to full stack by learning backend technologies."}]);
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
    record3.set("description", "Manage infrastructure, automate deployment processes, and ensure reliable and scalable system operations.");
    record3.set("overview", "DevOps engineers bridge development and operations, automating infrastructure management and deployment pipelines. They ensure systems are reliable, scalable, and secure while improving development efficiency.");
    record3.set("averageSalary", 140000);
    record3.set("salaryRange", "{'min': 85000, 'max': 215000}");
    record3.set("jobDemandOutlook", "High");
    record3.set("entrySalary", 85000);
    record3.set("midSalary", 140000);
    record3.set("seniorSalary", 215000);
    record3.set("jobDemand", "High");
    record3.set("skillsRequired", [{"skill": "Linux", "proficiency": "Advanced"}, {"skill": "Docker", "proficiency": "Advanced"}, {"skill": "Kubernetes", "proficiency": "Advanced"}, {"skill": "CI/CD", "proficiency": "Advanced"}, {"skill": "Cloud Platforms", "proficiency": "Advanced"}, {"skill": "Infrastructure as Code", "proficiency": "Intermediate"}]);
    record3.set("softSkills", ["Problem Solving", "Communication", "Attention to Detail", "Teamwork", "Continuous Learning"]);
    record3.set("tools", ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Terraform", "Ansible", "AWS/Azure/GCP"]);
    record3.set("topPayingStates", [{"state": "California", "salary": 160000}, {"state": "New York", "salary": 152000}, {"state": "Washington", "salary": 148000}, {"state": "Massachusetts", "salary": 145000}, {"state": "Colorado", "salary": 140000}]);
    record3.set("relatedCareers", ["cloud-architect", "systems-administrator", "software-engineer"]);
    record3.set("salaryInsights", "{'trends': 'High demand with 15% growth expected', 'growthProjection': 'One of the highest-paying tech roles', 'benefits': 'Excellent salary, stock options, remote work, on-call compensation'}");
    record3.set("roadmap", [{"stage": "Junior DevOps Engineer", "duration": "0-2 years", "skills": ["Linux basics", "Docker", "Basic CI/CD"], "salary": 85000}, {"stage": "DevOps Engineer", "duration": "2-5 years", "skills": ["Kubernetes", "Cloud platforms", "Infrastructure automation"], "salary": 140000}, {"stage": "Senior DevOps Engineer", "duration": "5+ years", "skills": ["Architecture", "Security", "Team leadership"], "salary": 215000}]);
    record3.set("faqs", [{"question": "Do I need a software engineering background?", "answer": "Not required. Many DevOps engineers come from system administration or IT operations backgrounds."}, {"question": "What cloud platform should I learn first?", "answer": "AWS is most popular, but Azure and GCP are also valuable. Learning one deeply is better than surface knowledge of all."}, {"question": "Is on-call work stressful?", "answer": "It can be, but good automation and team rotation minimize stress. Compensation usually reflects this responsibility."}]);
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
    record4.set("name", "Machine Learning Engineer");
    record4.set("slug", "machine-learning-engineer");
    record4.set("description", "Design and implement machine learning systems that learn from data and improve over time without explicit programming.");
    record4.set("overview", "ML engineers develop algorithms and systems that enable computers to learn from data. They work on everything from model development to production deployment, solving complex problems with AI.");
    record4.set("averageSalary", 150000);
    record4.set("salaryRange", "{'min': 90000, 'max': 230000}");
    record4.set("jobDemandOutlook", "High");
    record4.set("entrySalary", 90000);
    record4.set("midSalary", 150000);
    record4.set("seniorSalary", 230000);
    record4.set("jobDemand", "High");
    record4.set("skillsRequired", [{"skill": "Python", "proficiency": "Advanced"}, {"skill": "Machine Learning", "proficiency": "Advanced"}, {"skill": "Deep Learning", "proficiency": "Advanced"}, {"skill": "Statistics", "proficiency": "Advanced"}, {"skill": "Data Engineering", "proficiency": "Intermediate"}, {"skill": "Model Deployment", "proficiency": "Intermediate"}]);
    record4.set("softSkills", ["Problem Solving", "Research Mindset", "Communication", "Collaboration", "Creativity"]);
    record4.set("tools", ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "MLflow", "Jupyter", "Apache Spark"]);
    record4.set("topPayingStates", [{"state": "California", "salary": 175000}, {"state": "New York", "salary": 165000}, {"state": "Washington", "salary": 160000}, {"state": "Massachusetts", "salary": 158000}, {"state": "Colorado", "salary": 152000}]);
    record4.set("relatedCareers", ["data-scientist", "ai-specialist", "software-engineer"]);
    record4.set("salaryInsights", "{'trends': 'Explosive growth with 36% increase projected', 'growthProjection': 'Fastest-growing tech career with highest salaries', 'benefits': 'Top-tier salary, stock options, research opportunities, flexible work'}");
    record4.set("roadmap", [{"stage": "Junior ML Engineer", "duration": "0-2 years", "skills": ["ML fundamentals", "Model training", "Data preprocessing"], "salary": 90000}, {"stage": "ML Engineer", "duration": "2-5 years", "skills": ["Advanced algorithms", "Model optimization", "Production systems"], "salary": 150000}, {"stage": "Senior ML Engineer", "duration": "5+ years", "skills": ["Research", "Architecture", "Team leadership"], "salary": 230000}]);
    record4.set("faqs", [{"question": "What's the difference between ML engineer and data scientist?", "answer": "ML engineers focus on building production systems, while data scientists focus on analysis and insights."}, {"question": "Do I need a PhD?", "answer": "Not required, but advanced degrees are common. Strong portfolio and experience matter more."}, {"question": "What's the job market like?", "answer": "Extremely competitive with high demand. Companies are actively recruiting ML talent."}]);
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
    record5.set("name", "Cloud Architect");
    record5.set("slug", "cloud-architect");
    record5.set("description", "Design and manage cloud infrastructure solutions that are scalable, secure, and cost-effective for organizations.");
    record5.set("overview", "Cloud architects design enterprise cloud solutions using AWS, Azure, or GCP. They ensure systems are reliable, secure, and optimized for cost and performance.");
    record5.set("averageSalary", 155000);
    record5.set("salaryRange", "{'min': 95000, 'max': 240000}");
    record5.set("jobDemandOutlook", "High");
    record5.set("entrySalary", 95000);
    record5.set("midSalary", 155000);
    record5.set("seniorSalary", 240000);
    record5.set("jobDemand", "High");
    record5.set("skillsRequired", [{"skill": "AWS", "proficiency": "Advanced"}, {"skill": "Azure", "proficiency": "Advanced"}, {"skill": "System Design", "proficiency": "Advanced"}, {"skill": "Security", "proficiency": "Advanced"}, {"skill": "Networking", "proficiency": "Intermediate"}, {"skill": "Cost Optimization", "proficiency": "Intermediate"}]);
    record5.set("softSkills", ["Strategic Thinking", "Communication", "Problem Solving", "Leadership", "Business Acumen"]);
    record5.set("tools", ["AWS", "Azure", "GCP", "Terraform", "CloudFormation", "Kubernetes", "Monitoring Tools"]);
    record5.set("topPayingStates", [{"state": "California", "salary": 180000}, {"state": "New York", "salary": 170000}, {"state": "Washington", "salary": 165000}, {"state": "Massachusetts", "salary": 162000}, {"state": "Colorado", "salary": 155000}]);
    record5.set("relatedCareers", ["devops-engineer", "systems-administrator", "security-engineer"]);
    record5.set("salaryInsights", "{'trends': 'Strong growth with 12% increase expected', 'growthProjection': 'Cloud adoption driving sustained demand', 'benefits': 'High salary, stock options, consulting opportunities, remote work'}");
    record5.set("roadmap", [{"stage": "Cloud Engineer", "duration": "0-2 years", "skills": ["Cloud basics", "Infrastructure setup", "Cost management"], "salary": 95000}, {"stage": "Cloud Architect", "duration": "2-5 years", "skills": ["Solution design", "Security architecture", "Multi-cloud"], "salary": 155000}, {"stage": "Enterprise Cloud Architect", "duration": "5+ years", "skills": ["Strategic planning", "Governance", "Leadership"], "salary": 240000}]);
    record5.set("faqs", [{"question": "Which cloud platform should I focus on?", "answer": "AWS is most popular, but learning multiple platforms increases marketability."}, {"question": "What certifications are important?", "answer": "AWS Solutions Architect, Azure Administrator, and GCP Professional are highly valued."}, {"question": "Do I need DevOps experience?", "answer": "Yes, DevOps experience is very helpful for understanding infrastructure automation."}]);
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
    record6.set("name", "Frontend Developer");
    record6.set("slug", "frontend-developer");
    record6.set("description", "Create user interfaces and interactive web experiences using HTML, CSS, and JavaScript frameworks.");
    record6.set("overview", "Frontend developers build the visual and interactive parts of web applications. They focus on user experience, responsive design, and performance optimization.");
    record6.set("averageSalary", 125000);
    record6.set("salaryRange", "{'min': 70000, 'max': 190000}");
    record6.set("jobDemandOutlook", "High");
    record6.set("entrySalary", 70000);
    record6.set("midSalary", 125000);
    record6.set("seniorSalary", 190000);
    record6.set("jobDemand", "High");
    record6.set("skillsRequired", [{"skill": "JavaScript", "proficiency": "Advanced"}, {"skill": "React", "proficiency": "Advanced"}, {"skill": "HTML/CSS", "proficiency": "Advanced"}, {"skill": "Responsive Design", "proficiency": "Advanced"}, {"skill": "Web Performance", "proficiency": "Intermediate"}, {"skill": "Testing", "proficiency": "Intermediate"}]);
    record6.set("softSkills", ["Creativity", "Attention to Detail", "Communication", "Problem Solving", "User Empathy"]);
    record6.set("tools", ["React", "Vue", "Angular", "Webpack", "Sass", "Git", "Chrome DevTools"]);
    record6.set("topPayingStates", [{"state": "California", "salary": 145000}, {"state": "New York", "salary": 138000}, {"state": "Washington", "salary": 135000}, {"state": "Massachusetts", "salary": 132000}, {"state": "Colorado", "salary": 128000}]);
    record6.set("relatedCareers", ["full-stack-developer", "ui-ux-designer", "web-developer"]);
    record6.set("salaryInsights", "{'trends': 'Steady growth with 13% increase expected', 'growthProjection': 'Consistent demand across all industries', 'benefits': 'Flexible work, remote options, creative environment, competitive pay'}");
    record6.set("roadmap", [{"stage": "Junior Frontend Developer", "duration": "0-2 years", "skills": ["HTML/CSS", "JavaScript basics", "React fundamentals"], "salary": 70000}, {"stage": "Frontend Developer", "duration": "2-5 years", "skills": ["Advanced React", "Performance optimization", "Testing"], "salary": 125000}, {"stage": "Senior Frontend Developer", "duration": "5+ years", "skills": ["Architecture", "Mentoring", "Design systems"], "salary": 190000}]);
    record6.set("faqs", [{"question": "Should I learn React, Vue, or Angular?", "answer": "React is most popular and has the largest job market. Learn one deeply, then others are easier."}, {"question": "Is design knowledge important?", "answer": "Yes, understanding design principles helps create better user experiences."}, {"question": "What about mobile development?", "answer": "React Native allows frontend developers to build mobile apps with JavaScript."}]);
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
    record7.set("name", "Backend Developer");
    record7.set("slug", "backend-developer");
    record7.set("description", "Develop server-side logic, databases, and APIs that power web and mobile applications.");
    record7.set("overview", "Backend developers build the server infrastructure and business logic that applications rely on. They work with databases, APIs, and server frameworks to create scalable systems.");
    record7.set("averageSalary", 128000);
    record7.set("salaryRange", "{'min': 75000, 'max': 195000}");
    record7.set("jobDemandOutlook", "High");
    record7.set("entrySalary", 75000);
    record7.set("midSalary", 128000);
    record7.set("seniorSalary", 195000);
    record7.set("jobDemand", "High");
    record7.set("skillsRequired", [{"skill": "Python/Java/Go", "proficiency": "Advanced"}, {"skill": "SQL", "proficiency": "Advanced"}, {"skill": "REST APIs", "proficiency": "Advanced"}, {"skill": "Database Design", "proficiency": "Intermediate"}, {"skill": "Caching", "proficiency": "Intermediate"}, {"skill": "Message Queues", "proficiency": "Intermediate"}]);
    record7.set("softSkills", ["Problem Solving", "Communication", "Attention to Detail", "Teamwork", "Debugging Skills"]);
    record7.set("tools", ["Python", "Java", "Node.js", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ"]);
    record7.set("topPayingStates", [{"state": "California", "salary": 148000}, {"state": "New York", "salary": 140000}, {"state": "Washington", "salary": 137000}, {"state": "Massachusetts", "salary": 135000}, {"state": "Colorado", "salary": 130000}]);
    record7.set("relatedCareers", ["full-stack-developer", "software-engineer", "database-administrator"]);
    record7.set("salaryInsights", "{'trends': 'Strong demand with 13% growth expected', 'growthProjection': 'Consistent opportunities across industries', 'benefits': 'Competitive salary, remote work, learning opportunities, stock options'}");
    record7.set("roadmap", [{"stage": "Junior Backend Developer", "duration": "0-2 years", "skills": ["API development", "Database basics", "Server fundamentals"], "salary": 75000}, {"stage": "Backend Developer", "duration": "2-5 years", "skills": ["Scalable systems", "Database optimization", "Microservices"], "salary": 128000}, {"stage": "Senior Backend Developer", "duration": "5+ years", "skills": ["Architecture", "Mentoring", "System design"], "salary": 195000}]);
    record7.set("faqs", [{"question": "What programming language should I learn?", "answer": "Python, Java, and Go are popular. Choose based on job market in your area."}, {"question": "How important is database knowledge?", "answer": "Very important. Strong SQL and database design skills are essential."}, {"question": "What about microservices?", "answer": "Increasingly important. Understanding microservices architecture is valuable for senior roles."}]);
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
    record8.set("name", "Data Analyst");
    record8.set("slug", "data-analyst");
    record8.set("description", "Collect, process, and analyze data to provide insights that support business decision-making.");
    record8.set("overview", "Data analysts examine data to identify trends, patterns, and insights. They create reports and visualizations that help organizations understand their business and make informed decisions.");
    record8.set("averageSalary", 95000);
    record8.set("salaryRange", "{'min': 55000, 'max': 150000}");
    record8.set("jobDemandOutlook", "High");
    record8.set("entrySalary", 55000);
    record8.set("midSalary", 95000);
    record8.set("seniorSalary", 150000);
    record8.set("jobDemand", "High");
    record8.set("skillsRequired", [{"skill": "SQL", "proficiency": "Advanced"}, {"skill": "Excel", "proficiency": "Advanced"}, {"skill": "Data Visualization", "proficiency": "Advanced"}, {"skill": "Statistics", "proficiency": "Intermediate"}, {"skill": "Python/R", "proficiency": "Intermediate"}, {"skill": "Business Analysis", "proficiency": "Intermediate"}]);
    record8.set("softSkills", ["Communication", "Attention to Detail", "Problem Solving", "Business Acumen", "Presentation Skills"]);
    record8.set("tools", ["SQL", "Excel", "Tableau", "Power BI", "Python", "R", "Google Analytics"]);
    record8.set("topPayingStates", [{"state": "California", "salary": 110000}, {"state": "New York", "salary": 105000}, {"state": "Massachusetts", "salary": 102000}, {"state": "Washington", "salary": 100000}, {"state": "Illinois", "salary": 97000}]);
    record8.set("relatedCareers", ["data-scientist", "business-analyst", "database-administrator"]);
    record8.set("salaryInsights", "{'trends': 'Growing demand with 25% job growth projected', 'growthProjection': 'Strong market through 2026 and beyond', 'benefits': 'Competitive salary, flexible work, learning opportunities, remote options'}");
    record8.set("roadmap", [{"stage": "Junior Data Analyst", "duration": "0-2 years", "skills": ["SQL basics", "Excel", "Basic visualization"], "salary": 55000}, {"stage": "Data Analyst", "duration": "2-5 years", "skills": ["Advanced SQL", "Dashboard creation", "Statistical analysis"], "salary": 95000}, {"stage": "Senior Data Analyst", "duration": "5+ years", "skills": ["Advanced analytics", "Mentoring", "Strategic insights"], "salary": 150000}]);
    record8.set("faqs", [{"question": "Do I need a statistics degree?", "answer": "Not required. Many analysts learn on the job. Strong SQL and Excel skills are more important."}, {"question": "What's the difference between analyst and scientist?", "answer": "Analysts focus on reporting and insights, scientists focus on predictive modeling."}, {"question": "Which visualization tool should I learn?", "answer": "Tableau and Power BI are most popular. Learning one well is better than surface knowledge of both."}]);
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
    record9.set("name", "Cybersecurity Analyst");
    record9.set("slug", "cybersecurity-analyst");
    record9.set("description", "Protect organizations from cyber threats by monitoring systems, identifying vulnerabilities, and implementing security measures.");
    record9.set("overview", "Cybersecurity analysts defend organizations against cyber attacks and data breaches. They monitor networks, conduct security audits, and implement protective measures.");
    record9.set("averageSalary", 120000);
    record9.set("salaryRange", "{'min': 70000, 'max': 180000}");
    record9.set("jobDemandOutlook", "High");
    record9.set("entrySalary", 70000);
    record9.set("midSalary", 120000);
    record9.set("seniorSalary", 180000);
    record9.set("jobDemand", "High");
    record9.set("skillsRequired", [{"skill": "Network Security", "proficiency": "Advanced"}, {"skill": "Penetration Testing", "proficiency": "Advanced"}, {"skill": "Threat Analysis", "proficiency": "Advanced"}, {"skill": "Incident Response", "proficiency": "Intermediate"}, {"skill": "Compliance", "proficiency": "Intermediate"}, {"skill": "Linux/Windows", "proficiency": "Advanced"}]);
    record9.set("softSkills", ["Attention to Detail", "Problem Solving", "Communication", "Teamwork", "Continuous Learning"]);
    record9.set("tools", ["Wireshark", "Metasploit", "Burp Suite", "Splunk", "Nessus", "Snort", "SIEM Tools"]);
    record9.set("topPayingStates", [{"state": "California", "salary": 140000}, {"state": "New York", "salary": 135000}, {"state": "Washington", "salary": 132000}, {"state": "Massachusetts", "salary": 130000}, {"state": "Colorado", "salary": 125000}]);
    record9.set("relatedCareers", ["security-engineer", "network-administrator", "systems-administrator"]);
    record9.set("salaryInsights", "{'trends': 'High demand with 33% job growth projected', 'growthProjection': 'One of the fastest-growing tech careers', 'benefits': 'Excellent salary, stock options, on-call compensation, remote work'}");
    record9.set("roadmap", [{"stage": "Security Analyst", "duration": "0-2 years", "skills": ["Network basics", "Threat monitoring", "Incident response"], "salary": 70000}, {"stage": "Senior Security Analyst", "duration": "2-5 years", "skills": ["Penetration testing", "Vulnerability assessment", "Security architecture"], "salary": 120000}, {"stage": "Security Manager", "duration": "5+ years", "skills": ["Team leadership", "Strategy", "Compliance management"], "salary": 180000}]);
    record9.set("faqs", [{"question": "What certifications are important?", "answer": "CompTIA Security+, CEH, and CISSP are highly valued in the industry."}, {"question": "Do I need IT experience first?", "answer": "Yes, most employers prefer 2-3 years of IT or networking experience."}, {"question": "Is the job stressful?", "answer": "It can be, especially during incidents. But good team support and processes help manage stress."}]);
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
    record10.set("name", "UI/UX Designer");
    record10.set("slug", "ui-ux-designer");
    record10.set("description", "Design user interfaces and experiences that are intuitive, visually appealing, and meet user needs.");
    record10.set("overview", "UI/UX designers create digital products that are both beautiful and functional. They conduct user research, create wireframes and prototypes, and iterate based on feedback.");
    record10.set("averageSalary", 110000);
    record10.set("salaryRange", "{'min': 60000, 'max': 170000}");
    record10.set("jobDemandOutlook", "High");
    record10.set("entrySalary", 60000);
    record10.set("midSalary", 110000);
    record10.set("seniorSalary", 170000);
    record10.set("jobDemand", "High");
    record10.set("skillsRequired", [{"skill": "Figma", "proficiency": "Advanced"}, {"skill": "User Research", "proficiency": "Advanced"}, {"skill": "Wireframing", "proficiency": "Advanced"}, {"skill": "Prototyping", "proficiency": "Advanced"}, {"skill": "Visual Design", "proficiency": "Advanced"}, {"skill": "Usability Testing", "proficiency": "Intermediate"}]);
    record10.set("softSkills", ["Creativity", "Communication", "Empathy", "Problem Solving", "Collaboration"]);
    record10.set("tools", ["Figma", "Adobe XD", "Sketch", "Protopie", "Usability Hub", "Miro", "InVision"]);
    record10.set("topPayingStates", [{"state": "California", "salary": 130000}, {"state": "New York", "salary": 122000}, {"state": "Washington", "salary": 118000}, {"state": "Massachusetts", "salary": 115000}, {"state": "Colorado", "salary": 110000}]);
    record10.set("relatedCareers", ["product-manager", "frontend-developer", "graphic-designer"]);
    record10.set("salaryInsights", "{'trends': 'Growing demand with 13% job growth expected', 'growthProjection': 'Strong market as companies focus on user experience', 'benefits': 'Creative work, flexible hours, remote options, competitive salary'}");
    record10.set("roadmap", [{"stage": "Junior UX Designer", "duration": "0-2 years", "skills": ["Wireframing", "Basic prototyping", "Design principles"], "salary": 60000}, {"stage": "UX Designer", "duration": "2-5 years", "skills": ["User research", "Advanced prototyping", "Design systems"], "salary": 110000}, {"stage": "Senior UX Designer", "duration": "5+ years", "skills": ["Strategy", "Mentoring", "Product thinking"], "salary": 170000}]);
    record10.set("faqs", [{"question": "Do I need a design degree?", "answer": "Not required. A strong portfolio demonstrating design thinking is more important."}, {"question": "What's the difference between UI and UX?", "answer": "UX focuses on user experience and research, UI focuses on visual design and interaction."}, {"question": "Should I learn to code?", "answer": "Not required, but understanding frontend development helps collaboration with developers."}]);
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
    record11.set("name", "Product Manager");
    record11.set("slug", "product-manager");
    record11.set("description", "Guide product development by defining vision, strategy, and roadmap while balancing user needs and business goals.");
    record11.set("overview", "Product managers act as the bridge between users, engineering, and business. They define product strategy, prioritize features, and ensure successful product launches.");
    record11.set("averageSalary", 135000);
    record11.set("salaryRange", "{'min': 80000, 'max': 210000}");
    record11.set("jobDemandOutlook", "High");
    record11.set("entrySalary", 80000);
    record11.set("midSalary", 135000);
    record11.set("seniorSalary", 210000);
    record11.set("jobDemand", "High");
    record11.set("skillsRequired", [{"skill": "Product Strategy", "proficiency": "Advanced"}, {"skill": "Data Analysis", "proficiency": "Advanced"}, {"skill": "User Research", "proficiency": "Advanced"}, {"skill": "Roadmap Planning", "proficiency": "Advanced"}, {"skill": "Stakeholder Management", "proficiency": "Advanced"}, {"skill": "Technical Knowledge", "proficiency": "Intermediate"}]);
    record11.set("softSkills", ["Leadership", "Communication", "Strategic Thinking", "Problem Solving", "Empathy"]);
    record11.set("tools", ["Jira", "Figma", "Mixpanel", "Amplitude", "SQL", "Excel", "Looker"]);
    record11.set("topPayingStates", [{"state": "California", "salary": 160000}, {"state": "New York", "salary": 150000}, {"state": "Washington", "salary": 145000}, {"state": "Massachusetts", "salary": 142000}, {"state": "Colorado", "salary": 138000}]);
    record11.set("relatedCareers", ["business-analyst", "data-analyst", "ui-ux-designer"]);
    record11.set("salaryInsights", "{'trends': 'Strong demand with 12% growth expected', 'growthProjection': 'Consistent opportunities in tech and beyond', 'benefits': 'High salary, stock options, leadership opportunities, strategic impact'}");
    record11.set("roadmap", [{"stage": "Associate Product Manager", "duration": "0-2 years", "skills": ["Product basics", "Data analysis", "User research"], "salary": 80000}, {"stage": "Product Manager", "duration": "2-5 years", "skills": ["Strategy", "Roadmap planning", "Cross-functional leadership"], "salary": 135000}, {"stage": "Senior Product Manager", "duration": "5+ years", "skills": ["Vision setting", "Team leadership", "Business strategy"], "salary": 210000}]);
    record11.set("faqs", [{"question": "What background do I need?", "answer": "Many paths lead to PM: engineering, design, business, or analytics. Strong product thinking matters most."}, {"question": "Do I need an MBA?", "answer": "Not required. Experience and a strong portfolio are more valuable."}, {"question": "What's the typical career path?", "answer": "Often start as APM, then PM, then Senior PM, then Director or VP of Product."}]);
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
    record12.set("description", "Manage and maintain computer systems, networks, and servers to ensure reliable operations and security.");
    record12.set("overview", "Systems administrators maintain IT infrastructure, manage user accounts, install software, and troubleshoot technical issues. They ensure systems are secure, reliable, and performing optimally.");
    record12.set("averageSalary", 105000);
    record12.set("salaryRange", "{'min': 60000, 'max': 160000}");
    record12.set("jobDemandOutlook", "Medium");
    record12.set("entrySalary", 60000);
    record12.set("midSalary", 105000);
    record12.set("seniorSalary", 160000);
    record12.set("jobDemand", "Medium");
    record12.set("skillsRequired", [{"skill": "Linux/Windows", "proficiency": "Advanced"}, {"skill": "Networking", "proficiency": "Advanced"}, {"skill": "Active Directory", "proficiency": "Advanced"}, {"skill": "Virtualization", "proficiency": "Intermediate"}, {"skill": "Backup/Recovery", "proficiency": "Intermediate"}, {"skill": "Security", "proficiency": "Intermediate"}]);
    record12.set("softSkills", ["Problem Solving", "Communication", "Attention to Detail", "Teamwork", "Patience"]);
    record12.set("tools", ["Linux", "Windows Server", "VMware", "Hyper-V", "Active Directory", "Nagios", "Ansible"]);
    record12.set("topPayingStates", [{"state": "California", "salary": 125000}, {"state": "New York", "salary": 118000}, {"state": "Washington", "salary": 115000}, {"state": "Massachusetts", "salary": 112000}, {"state": "Colorado", "salary": 108000}]);
    record12.set("relatedCareers", ["network-administrator", "devops-engineer", "security-engineer"]);
    record12.set("salaryInsights", "{'trends': 'Stable with 5% growth expected', 'growthProjection': 'Cloud adoption reducing traditional sysadmin roles', 'benefits': 'Stable employment, on-call compensation, benefits, job security'}");
    record12.set("roadmap", [{"stage": "Junior Systems Administrator", "duration": "0-2 years", "skills": ["System basics", "User management", "Troubleshooting"], "salary": 60000}, {"stage": "Systems Administrator", "duration": "2-5 years", "skills": ["Infrastructure management", "Security", "Automation"], "salary": 105000}, {"stage": "Senior Systems Administrator", "duration": "5+ years", "skills": ["Architecture", "Team leadership", "Strategic planning"], "salary": 160000}]);
    record12.set("faqs", [{"question": "Is this role being replaced by cloud?", "answer": "Traditional sysadmin roles are declining, but cloud and DevOps skills are in high demand."}, {"question": "What certifications matter?", "answer": "CompTIA A+, Network+, and vendor certifications (Microsoft, Linux) are valuable."}, {"question": "Is on-call work required?", "answer": "Often yes, especially for critical systems. Compensation usually reflects this."}]);
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
    record13.set("name", "Network Administrator");
    record13.set("slug", "network-administrator");
    record13.set("description", "Design, implement, and maintain computer networks that connect systems and enable communication.");
    record13.set("overview", "Network administrators manage organizational networks, ensuring connectivity, security, and performance. They configure routers, switches, firewalls, and troubleshoot network issues.");
    record13.set("averageSalary", 108000);
    record13.set("salaryRange", "{'min': 62000, 'max': 165000}");
    record13.set("jobDemandOutlook", "Medium");
    record13.set("entrySalary", 62000);
    record13.set("midSalary", 108000);
    record13.set("seniorSalary", 165000);
    record13.set("jobDemand", "Medium");
    record13.set("skillsRequired", [{"skill": "Networking", "proficiency": "Advanced"}, {"skill": "Cisco", "proficiency": "Advanced"}, {"skill": "Firewalls", "proficiency": "Advanced"}, {"skill": "TCP/IP", "proficiency": "Advanced"}, {"skill": "VPN", "proficiency": "Intermediate"}, {"skill": "Network Security", "proficiency": "Intermediate"}]);
    record13.set("softSkills", ["Problem Solving", "Communication", "Attention to Detail", "Teamwork", "Patience"]);
    record13.set("tools", ["Cisco", "Juniper", "Palo Alto", "Wireshark", "Splunk", "Nagios", "Ansible"]);
    record13.set("topPayingStates", [{"state": "California", "salary": 128000}, {"state": "New York", "salary": 120000}, {"state": "Washington", "salary": 117000}, {"state": "Massachusetts", "salary": 114000}, {"state": "Colorado", "salary": 110000}]);
    record13.set("relatedCareers", ["systems-administrator", "security-engineer", "devops-engineer"]);
    record13.set("salaryInsights", "{'trends': 'Stable with 5% growth expected', 'growthProjection': 'Consistent demand for network expertise', 'benefits': 'Stable employment, on-call compensation, benefits, job security'}");
    record13.set("roadmap", [{"stage": "Junior Network Administrator", "duration": "0-2 years", "skills": ["Network basics", "Cisco fundamentals", "Troubleshooting"], "salary": 62000}, {"stage": "Network Administrator", "duration": "2-5 years", "skills": ["Advanced Cisco", "Security", "Network design"], "salary": 108000}, {"stage": "Senior Network Administrator", "duration": "5+ years", "skills": ["Architecture", "Team leadership", "Strategic planning"], "salary": 165000}]);
    record13.set("faqs", [{"question": "What certifications are important?", "answer": "Cisco CCNA, CompTIA Network+, and CCNP are highly valued."}, {"question": "Is this role changing?", "answer": "Yes, cloud and SD-WAN are changing networking. Continuous learning is essential."}, {"question": "What's the job market like?", "answer": "Stable but slower growth than cloud roles. Network expertise remains valuable."}]);
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
    record14.set("description", "Manage databases, ensure data integrity, optimize performance, and implement security measures.");
    record14.set("overview", "Database administrators maintain databases that store critical business data. They handle backups, performance tuning, security, and disaster recovery.");
    record14.set("averageSalary", 115000);
    record14.set("salaryRange", "{'min': 65000, 'max': 175000}");
    record14.set("jobDemandOutlook", "Medium");
    record14.set("entrySalary", 65000);
    record14.set("midSalary", 115000);
    record14.set("seniorSalary", 175000);
    record14.set("jobDemand", "Medium");
    record14.set("skillsRequired", [{"skill": "SQL", "proficiency": "Advanced"}, {"skill": "Oracle/PostgreSQL", "proficiency": "Advanced"}, {"skill": "Performance Tuning", "proficiency": "Advanced"}, {"skill": "Backup/Recovery", "proficiency": "Advanced"}, {"skill": "Security", "proficiency": "Intermediate"}, {"skill": "NoSQL", "proficiency": "Intermediate"}]);
    record14.set("softSkills", ["Attention to Detail", "Problem Solving", "Communication", "Teamwork", "Patience"]);
    record14.set("tools", ["Oracle", "PostgreSQL", "MySQL", "MongoDB", "Backup tools", "Monitoring tools", "SQL Server"]);
    record14.set("topPayingStates", [{"state": "California", "salary": 135000}, {"state": "New York", "salary": 128000}, {"state": "Washington", "salary": 125000}, {"state": "Massachusetts", "salary": 122000}, {"state": "Colorado", "salary": 118000}]);
    record14.set("relatedCareers", ["data-analyst", "backend-developer", "systems-administrator"]);
    record14.set("salaryInsights", "{'trends': 'Stable with 8% growth expected', 'growthProjection': 'Cloud databases changing the role but demand remains', 'benefits': 'Stable employment, on-call compensation, benefits, job security'}");
    record14.set("roadmap", [{"stage": "Junior Database Administrator", "duration": "0-2 years", "skills": ["SQL basics", "Backup/recovery", "Monitoring"], "salary": 65000}, {"stage": "Database Administrator", "duration": "2-5 years", "skills": ["Performance tuning", "Security", "Disaster recovery"], "salary": 115000}, {"stage": "Senior Database Administrator", "duration": "5+ years", "skills": ["Architecture", "Team leadership", "Strategic planning"], "salary": 175000}]);
    record14.set("faqs", [{"question": "Is this role changing with cloud databases?", "answer": "Yes, cloud databases are reducing traditional DBA roles. Learning cloud platforms is important."}, {"question": "What certifications matter?", "answer": "Oracle DBA, Microsoft SQL Server, and cloud certifications are valuable."}, {"question": "Is on-call work required?", "answer": "Often yes, especially for critical databases. Compensation reflects this responsibility."}]);
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
    record15.set("description", "Analyze business processes and requirements to recommend solutions that improve efficiency and profitability.");
    record15.set("overview", "Business analysts bridge the gap between business needs and technical solutions. They gather requirements, analyze processes, and recommend improvements.");
    record15.set("averageSalary", 100000);
    record15.set("salaryRange", "{'min': 58000, 'max': 155000}");
    record15.set("jobDemandOutlook", "High");
    record15.set("entrySalary", 58000);
    record15.set("midSalary", 100000);
    record15.set("seniorSalary", 155000);
    record15.set("jobDemand", "High");
    record15.set("skillsRequired", [{"skill": "Requirements Analysis", "proficiency": "Advanced"}, {"skill": "Process Modeling", "proficiency": "Advanced"}, {"skill": "Data Analysis", "proficiency": "Advanced"}, {"skill": "SQL", "proficiency": "Intermediate"}, {"skill": "Business Acumen", "proficiency": "Advanced"}, {"skill": "Communication", "proficiency": "Advanced"}]);
    record15.set("softSkills", ["Communication", "Problem Solving", "Attention to Detail", "Stakeholder Management", "Analytical Thinking"]);
    record15.set("tools", ["Jira", "Confluence", "SQL", "Excel", "Visio", "Tableau", "Power BI"]);
    record15.set("topPayingStates", [{"state": "California", "salary": 120000}, {"state": "New York", "salary": 112000}, {"state": "Massachusetts", "salary": 110000}, {"state": "Washington", "salary": 108000}, {"state": "Illinois", "salary": 105000}]);
    record15.set("relatedCareers", ["product-manager", "data-analyst", "project-manager"]);
    record15.set("salaryInsights", "{'trends': 'Growing demand with 10% job growth expected', 'growthProjection': 'Consistent opportunities across industries', 'benefits': 'Competitive salary, flexible work, learning opportunities, remote options'}");
    record15.set("roadmap", [{"stage": "Junior Business Analyst", "duration": "0-2 years", "skills": ["Requirements gathering", "Basic analysis", "Documentation"], "salary": 58000}, {"stage": "Business Analyst", "duration": "2-5 years", "skills": ["Advanced analysis", "Process improvement", "Stakeholder management"], "salary": 100000}, {"stage": "Senior Business Analyst", "duration": "5+ years", "skills": ["Strategy", "Team leadership", "Business transformation"], "salary": 155000}]);
    record15.set("faqs", [{"question": "What background do I need?", "answer": "Many paths lead to BA: IT, business, engineering. Strong analytical skills matter most."}, {"question": "Do I need an MBA?", "answer": "Not required. Experience and certifications like CBAP are more valuable."}, {"question": "What industries hire business analysts?", "answer": "All industries need business analysts. Tech, finance, healthcare, and retail have high demand."}]);
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
    record16.set("description", "Plan, execute, and oversee projects to ensure they are completed on time, within budget, and to specifications.");
    record16.set("overview", "Project managers coordinate teams and resources to deliver projects successfully. They manage timelines, budgets, risks, and stakeholder communication.");
    record16.set("averageSalary", 105000);
    record16.set("salaryRange", "{'min': 60000, 'max': 160000}");
    record16.set("jobDemandOutlook", "High");
    record16.set("entrySalary", 60000);
    record16.set("midSalary", 105000);
    record16.set("seniorSalary", 160000);
    record16.set("jobDemand", "High");
    record16.set("skillsRequired", [{"skill": "Project Planning", "proficiency": "Advanced"}, {"skill": "Risk Management", "proficiency": "Advanced"}, {"skill": "Stakeholder Management", "proficiency": "Advanced"}, {"skill": "Budget Management", "proficiency": "Advanced"}, {"skill": "Agile/Scrum", "proficiency": "Advanced"}, {"skill": "Communication", "proficiency": "Advanced"}]);
    record16.set("softSkills", ["Leadership", "Communication", "Problem Solving", "Teamwork", "Negotiation"]);
    record16.set("tools", ["Jira", "Asana", "Monday.com", "Microsoft Project", "Confluence", "Slack", "Excel"]);
    record16.set("topPayingStates", [{"state": "California", "salary": 125000}, {"state": "New York", "salary": 118000}, {"state": "Massachusetts", "salary": 115000}, {"state": "Washington", "salary": 112000}, {"state": "Colorado", "salary": 108000}]);
    record16.set("relatedCareers", ["product-manager", "business-analyst", "scrum-master"]);
    record16.set("salaryInsights", "{'trends': 'Growing demand with 10% job growth expected', 'growthProjection': 'Consistent opportunities across industries', 'benefits': 'Competitive salary, leadership opportunities, flexible work, remote options'}");
    record16.set("roadmap", [{"stage": "Associate Project Manager", "duration": "0-2 years", "skills": ["Project basics", "Agile fundamentals", "Communication"], "salary": 60000}, {"stage": "Project Manager", "duration": "2-5 years", "skills": ["Advanced planning", "Risk management", "Team leadership"], "salary": 105000}, {"stage": "Senior Project Manager", "duration": "5+ years", "skills": ["Portfolio management", "Strategic planning", "Executive leadership"], "salary": 160000}]);
    record16.set("faqs", [{"question": "What certifications are important?", "answer": "PMP, CAPM, and Scrum Master certifications are highly valued."}, {"question": "Do I need technical knowledge?", "answer": "Not required, but understanding technical aspects helps manage tech projects better."}, {"question": "What's the difference between Waterfall and Agile?", "answer": "Waterfall is sequential, Agile is iterative. Most tech companies use Agile now."}]);
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
    record17.set("name", "QA Engineer");
    record17.set("slug", "qa-engineer");
    record17.set("description", "Test software applications to identify bugs, ensure quality, and verify that products meet requirements.");
    record17.set("overview", "QA engineers develop test strategies, create test cases, and execute tests to ensure software quality. They work with developers to identify and fix issues.");
    record17.set("averageSalary", 105000);
    record17.set("salaryRange", "{'min': 60000, 'max': 160000}");
    record17.set("jobDemandOutlook", "High");
    record17.set("entrySalary", 60000);
    record17.set("midSalary", 105000);
    record17.set("seniorSalary", 160000);
    record17.set("jobDemand", "High");
    record17.set("skillsRequired", [{"skill": "Test Automation", "proficiency": "Advanced"}, {"skill": "Selenium", "proficiency": "Advanced"}, {"skill": "Manual Testing", "proficiency": "Advanced"}, {"skill": "SQL", "proficiency": "Intermediate"}, {"skill": "API Testing", "proficiency": "Intermediate"}, {"skill": "Test Planning", "proficiency": "Advanced"}]);
    record17.set("softSkills", ["Attention to Detail", "Problem Solving", "Communication", "Teamwork", "Analytical Thinking"]);
    record17.set("tools", ["Selenium", "Jira", "TestNG", "Cucumber", "Postman", "LoadRunner", "Jenkins"]);
    record17.set("topPayingStates", [{"state": "California", "salary": 125000}, {"state": "New York", "salary": 118000}, {"state": "Washington", "salary": 115000}, {"state": "Massachusetts", "salary": 112000}, {"state": "Colorado", "salary": 108000}]);
    record17.set("relatedCareers", ["software-engineer", "devops-engineer", "automation-engineer"]);
    record17.set("salaryInsights", "{'trends': 'Growing demand with 10% job growth expected', 'growthProjection': 'Automation increasing demand for skilled QA engineers', 'benefits': 'Competitive salary, flexible work, learning opportunities, remote options'}");
    record17.set("roadmap", [{"stage": "Junior QA Engineer", "duration": "0-2 years", "skills": ["Manual testing", "Test case creation", "Bug reporting"], "salary": 60000}, {"stage": "QA Engineer", "duration": "2-5 years", "skills": ["Test automation", "API testing", "Test strategy"], "salary": 105000}, {"stage": "Senior QA Engineer", "duration": "5+ years", "skills": ["Quality strategy", "Team leadership", "Process improvement"], "salary": 160000}]);
    record17.set("faqs", [{"question": "Do I need to code?", "answer": "Not required for manual testing, but automation skills require programming knowledge."}, {"question": "What's the difference between manual and automation testing?", "answer": "Manual testing is done by humans, automation uses scripts. Both are important."}, {"question": "What's the job market like?", "answer": "Strong demand, especially for automation engineers. Salaries are competitive."}]);
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
    record18.set("name", "Security Engineer");
    record18.set("slug", "security-engineer");
    record18.set("description", "Design and implement security solutions to protect systems, networks, and data from threats.");
    record18.set("overview", "Security engineers build secure systems and infrastructure. They design security architectures, implement controls, and conduct security assessments.");
    record18.set("averageSalary", 130000);
    record18.set("salaryRange", "{'min': 75000, 'max': 195000}");
    record18.set("jobDemandOutlook", "High");
    record18.set("entrySalary", 75000);
    record18.set("midSalary", 130000);
    record18.set("seniorSalary", 195000);
    record18.set("jobDemand", "High");
    record18.set("skillsRequired", [{"skill": "Network Security", "proficiency": "Advanced"}, {"skill": "Cryptography", "proficiency": "Advanced"}, {"skill": "Secure Coding", "proficiency": "Advanced"}, {"skill": "Penetration Testing", "proficiency": "Advanced"}, {"skill": "Cloud Security", "proficiency": "Intermediate"}, {"skill": "Compliance", "proficiency": "Intermediate"}]);
    record18.set("softSkills", ["Problem Solving", "Attention to Detail", "Communication", "Teamwork", "Continuous Learning"]);
    record18.set("tools", ["Burp Suite", "Metasploit", "Wireshark", "Splunk", "Nessus", "Snort", "SIEM Tools"]);
    record18.set("topPayingStates", [{"state": "California", "salary": 150000}, {"state": "New York", "salary": 142000}, {"state": "Washington", "salary": 138000}, {"state": "Massachusetts", "salary": 135000}, {"state": "Colorado", "salary": 130000}]);
    record18.set("relatedCareers", ["cybersecurity-analyst", "network-administrator", "systems-administrator"]);
    record18.set("salaryInsights", "{'trends': 'High demand with 33% job growth projected', 'growthProjection': 'One of the fastest-growing tech careers', 'benefits': 'Excellent salary, stock options, on-call compensation, remote work'}");
    record18.set("roadmap", [{"stage": "Junior Security Engineer", "duration": "0-2 years", "skills": ["Security basics", "Vulnerability assessment", "Secure coding"], "salary": 75000}, {"stage": "Security Engineer", "duration": "2-5 years", "skills": ["Security architecture", "Penetration testing", "Threat modeling"], "salary": 130000}, {"stage": "Senior Security Engineer", "duration": "5+ years", "skills": ["Security strategy", "Team leadership", "Compliance management"], "salary": 195000}]);
    record18.set("faqs", [{"question": "What certifications are important?", "answer": "CISSP, CEH, and OSCP are highly valued in the industry."}, {"question": "Do I need a security background?", "answer": "Not required. Many security engineers come from software engineering or system administration."}, {"question": "What's the job market like?", "answer": "Extremely competitive with high demand. Companies are actively recruiting security talent."}]);
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
    record19.set("name", "Solutions Architect");
    record19.set("slug", "solutions-architect");
    record19.set("description", "Design comprehensive technical solutions that address client business needs and align with organizational goals.");
    record19.set("overview", "Solutions architects work with clients to understand requirements and design technical solutions. They bridge business and technology, ensuring solutions are scalable and cost-effective.");
    record19.set("averageSalary", 145000);
    record19.set("salaryRange", "{'min': 90000, 'max': 220000}");
    record19.set("jobDemandOutlook", "High");
    record19.set("entrySalary", 90000);
    record19.set("midSalary", 145000);
    record19.set("seniorSalary", 220000);
    record19.set("jobDemand", "High");
    record19.set("skillsRequired", [{"skill": "System Design", "proficiency": "Advanced"}, {"skill": "Cloud Platforms", "proficiency": "Advanced"}, {"skill": "Business Acumen", "proficiency": "Advanced"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Technical Leadership", "proficiency": "Advanced"}, {"skill": "Consulting Skills", "proficiency": "Intermediate"}]);
    record19.set("softSkills", ["Communication", "Leadership", "Problem Solving", "Strategic Thinking", "Presentation Skills"]);
    record19.set("tools", ["AWS", "Azure", "GCP", "Visio", "Lucidchart", "Jira", "Confluence"]);
    record19.set("topPayingStates", [{"state": "California", "salary": 170000}, {"state": "New York", "salary": 160000}, {"state": "Washington", "salary": 155000}, {"state": "Massachusetts", "salary": 152000}, {"state": "Colorado", "salary": 148000}]);
    record19.set("relatedCareers", ["cloud-architect", "product-manager", "technical-lead"]);
    record19.set("salaryInsights", "{'trends': 'Strong demand with 12% growth expected', 'growthProjection': 'Consistent opportunities in consulting and enterprise', 'benefits': 'High salary, stock options, consulting opportunities, remote work'}");
    record19.set("roadmap", [{"stage": "Associate Solutions Architect", "duration": "0-2 years", "skills": ["Solution design basics", "Client communication", "Technical knowledge"], "salary": 90000}, {"stage": "Solutions Architect", "duration": "2-5 years", "skills": ["Complex solution design", "Client management", "Technical leadership"], "salary": 145000}, {"stage": "Principal Solutions Architect", "duration": "5+ years", "skills": ["Strategic design", "Team leadership", "Business strategy"], "salary": 220000}]);
    record19.set("faqs", [{"question": "What's the difference between solutions architect and cloud architect?", "answer": "Solutions architects focus on overall solutions, cloud architects specialize in cloud infrastructure."}, {"question": "Do I need consulting experience?", "answer": "Not required, but it helps. Strong technical and communication skills are essential."}, {"question": "What's the job market like?", "answer": "Strong demand, especially for architects with cloud and enterprise experience."}]);
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
    record20.set("name", "Technical Lead");
    record20.set("slug", "technical-lead");
    record20.set("description", "Lead technical teams, make architectural decisions, and mentor engineers while contributing to code.");
    record20.set("overview", "Technical leads combine hands-on coding with team leadership. They guide technical direction, mentor engineers, and ensure code quality.");
    record20.set("averageSalary", 140000);
    record20.set("salaryRange", "{'min': 85000, 'max': 210000}");
    record20.set("jobDemandOutlook", "High");
    record20.set("entrySalary", 85000);
    record20.set("midSalary", 140000);
    record20.set("seniorSalary", 210000);
    record20.set("jobDemand", "High");
    record20.set("skillsRequired", [{"skill": "Software Engineering", "proficiency": "Advanced"}, {"skill": "System Design", "proficiency": "Advanced"}, {"skill": "Leadership", "proficiency": "Advanced"}, {"skill": "Code Review", "proficiency": "Advanced"}, {"skill": "Mentoring", "proficiency": "Advanced"}, {"skill": "Communication", "proficiency": "Advanced"}]);
    record20.set("softSkills", ["Leadership", "Communication", "Problem Solving", "Mentoring", "Strategic Thinking"]);
    record20.set("tools", ["Git", "Jira", "Code review tools", "Monitoring tools", "Documentation tools", "Slack", "Confluence"]);
    record20.set("topPayingStates", [{"state": "California", "salary": 160000}, {"state": "New York", "salary": 152000}, {"state": "Washington", "salary": 148000}, {"state": "Massachusetts", "salary": 145000}, {"state": "Colorado", "salary": 140000}]);
    record20.set("relatedCareers", ["software-engineer", "engineering-manager", "solutions-architect"]);
    record20.set("salaryInsights", "{'trends': 'Strong demand with 12% growth expected', 'growthProjection': 'Consistent opportunities for experienced engineers', 'benefits': 'High salary, stock options, leadership opportunities, remote work'}");
    record20.set("roadmap", [{"stage": "Senior Engineer", "duration": "0-2 years", "skills": ["Advanced coding", "Mentoring", "Architecture"], "salary": 85000}, {"stage": "Technical Lead", "duration": "2-5 years", "skills": ["Team leadership", "Strategic decisions", "Code quality"], "salary": 140000}, {"stage": "Engineering Manager", "duration": "5+ years", "skills": ["Team management", "Hiring", "Strategic planning"], "salary": 210000}]);
    record20.set("faqs", [{"question": "Do I need to stop coding?", "answer": "No, technical leads continue coding while leading teams. Balance is important."}, {"question": "What's the difference between tech lead and engineering manager?", "answer": "Tech leads focus on technical decisions, managers focus on people and processes."}, {"question": "What skills are most important?", "answer": "Communication, mentoring, and system design are critical for success."}]);
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
    record21.set("name", "Engineering Manager");
    record21.set("slug", "engineering-manager");
    record21.set("description", "Manage engineering teams, hire talent, set technical direction, and ensure project delivery.");
    record21.set("overview", "Engineering managers lead teams of engineers, focusing on hiring, development, and delivery. They balance technical excellence with business goals.");
    record21.set("averageSalary", 150000);
    record21.set("salaryRange", "{'min': 90000, 'max': 230000}");
    record21.set("jobDemandOutlook", "High");
    record21.set("entrySalary", 90000);
    record21.set("midSalary", 150000);
    record21.set("seniorSalary", 230000);
    record21.set("jobDemand", "High");
    record21.set("skillsRequired", [{"skill": "Team Management", "proficiency": "Advanced"}, {"skill": "Hiring", "proficiency": "Advanced"}, {"skill": "Strategic Planning", "proficiency": "Advanced"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Technical Knowledge", "proficiency": "Advanced"}, {"skill": "Mentoring", "proficiency": "Advanced"}]);
    record21.set("softSkills", ["Leadership", "Communication", "Empathy", "Problem Solving", "Strategic Thinking"]);
    record21.set("tools", ["Jira", "Confluence", "Slack", "Greenhouse", "15Five", "Lattice", "Excel"]);
    record21.set("topPayingStates", [{"state": "California", "salary": 175000}, {"state": "New York", "salary": 165000}, {"state": "Washington", "salary": 160000}, {"state": "Massachusetts", "salary": 158000}, {"state": "Colorado", "salary": 152000}]);
    record21.set("relatedCareers", ["technical-lead", "director-of-engineering", "product-manager"]);
    record21.set("salaryInsights", "{'trends': 'Strong demand with 12% growth expected', 'growthProjection': 'Consistent opportunities for experienced leaders', 'benefits': 'High salary, stock options, leadership opportunities, remote work'}");
    record21.set("roadmap", [{"stage": "Technical Lead", "duration": "0-2 years", "skills": ["Team leadership", "Mentoring", "Technical decisions"], "salary": 90000}, {"stage": "Engineering Manager", "duration": "2-5 years", "skills": ["Team management", "Hiring", "Strategic planning"], "salary": 150000}, {"stage": "Director of Engineering", "duration": "5+ years", "skills": ["Organization leadership", "Strategy", "Executive presence"], "salary": 230000}]);
    record21.set("faqs", [{"question": "Do I need to stop coding?", "answer": "Yes, most managers focus on people and processes rather than coding."}, {"question": "What's the biggest challenge?", "answer": "Balancing team needs with business goals while maintaining technical excellence."}, {"question": "What skills matter most?", "answer": "Communication, empathy, and strategic thinking are critical for success."}]);
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
    record22.set("name", "AI Specialist");
    record22.set("slug", "ai-specialist");
    record22.set("description", "Develop and implement artificial intelligence solutions including machine learning, deep learning, and NLP.");
    record22.set("overview", "AI specialists create intelligent systems using machine learning and deep learning. They work on cutting-edge problems in computer vision, NLP, and autonomous systems.");
    record22.set("averageSalary", 160000);
    record22.set("salaryRange", "{'min': 100000, 'max': 250000}");
    record22.set("jobDemandOutlook", "High");
    record22.set("entrySalary", 100000);
    record22.set("midSalary", 160000);
    record22.set("seniorSalary", 250000);
    record22.set("jobDemand", "High");
    record22.set("skillsRequired", [{"skill": "Deep Learning", "proficiency": "Advanced"}, {"skill": "Python", "proficiency": "Advanced"}, {"skill": "TensorFlow/PyTorch", "proficiency": "Advanced"}, {"skill": "NLP", "proficiency": "Advanced"}, {"skill": "Computer Vision", "proficiency": "Advanced"}, {"skill": "Research", "proficiency": "Advanced"}]);
    record22.set("softSkills", ["Problem Solving", "Research Mindset", "Communication", "Creativity", "Collaboration"]);
    record22.set("tools", ["TensorFlow", "PyTorch", "Keras", "OpenCV", "NLTK", "Hugging Face", "Jupyter"]);
    record22.set("topPayingStates", [{"state": "California", "salary": 190000}, {"state": "New York", "salary": 180000}, {"state": "Washington", "salary": 175000}, {"state": "Massachusetts", "salary": 172000}, {"state": "Colorado", "salary": 165000}]);
    record22.set("relatedCareers", ["machine-learning-engineer", "data-scientist", "research-scientist"]);
    record22.set("salaryInsights", "{'trends': 'Explosive growth with 36% increase projected', 'growthProjection': 'Fastest-growing tech career with highest salaries', 'benefits': 'Top-tier salary, stock options, research opportunities, flexible work'}");
    record22.set("roadmap", [{"stage": "Junior AI Specialist", "duration": "0-2 years", "skills": ["Deep learning basics", "Model training", "Research fundamentals"], "salary": 100000}, {"stage": "AI Specialist", "duration": "2-5 years", "skills": ["Advanced algorithms", "Research", "Model optimization"], "salary": 160000}, {"stage": "Senior AI Specialist", "duration": "5+ years", "skills": ["Research leadership", "Innovation", "Team leadership"], "salary": 250000}]);
    record22.set("faqs", [{"question": "Do I need a PhD?", "answer": "Not required, but advanced degrees are common. Strong portfolio matters more."}, {"question": "What's the difference between AI specialist and ML engineer?", "answer": "AI specialists focus on advanced AI research, ML engineers focus on production systems."}, {"question": "What's the job market like?", "answer": "Extremely competitive with high demand. Companies are actively recruiting AI talent."}]);
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
    record23.set("name", "Mobile Developer");
    record23.set("slug", "mobile-developer");
    record23.set("description", "Develop mobile applications for iOS and Android platforms using native or cross-platform frameworks.");
    record23.set("overview", "Mobile developers create apps for smartphones and tablets. They work with iOS, Android, or cross-platform frameworks to build engaging mobile experiences.");
    record23.set("averageSalary", 125000);
    record23.set("salaryRange", "{'min': 70000, 'max': 190000}");
    record23.set("jobDemandOutlook", "High");
    record23.set("entrySalary", 70000);
    record23.set("midSalary", 125000);
    record23.set("seniorSalary", 190000);
    record23.set("jobDemand", "High");
    record23.set("skillsRequired", [{"skill": "Swift/Kotlin", "proficiency": "Advanced"}, {"skill": "React Native", "proficiency": "Advanced"}, {"skill": "Mobile UI/UX", "proficiency": "Advanced"}, {"skill": "APIs", "proficiency": "Advanced"}, {"skill": "Testing", "proficiency": "Intermediate"}, {"skill": "Performance Optimization", "proficiency": "Intermediate"}]);
    record23.set("softSkills", ["Problem Solving", "Creativity", "Attention to Detail", "Teamwork", "User Empathy"]);
    record23.set("tools", ["Swift", "Kotlin", "React Native", "Flutter", "Xcode", "Android Studio", "Firebase"]);
    record23.set("topPayingStates", [{"state": "California", "salary": 145000}, {"state": "New York", "salary": 138000}, {"state": "Washington", "salary": 135000}, {"state": "Massachusetts", "salary": 132000}, {"state": "Colorado", "salary": 128000}]);
    record23.set("relatedCareers", ["frontend-developer", "full-stack-developer", "software-engineer"]);
    record23.set("salaryInsights", "{'trends': 'Steady demand with 13% growth expected', 'growthProjection': 'Consistent opportunities as mobile usage grows', 'benefits': 'Competitive salary, flexible work, remote options, creative environment'}");
    record23.set("roadmap", [{"stage": "Junior Mobile Developer", "duration": "0-2 years", "skills": ["Mobile basics", "UI development", "API integration"], "salary": 70000}, {"stage": "Mobile Developer", "duration": "2-5 years", "skills": ["Advanced mobile", "Performance optimization", "Testing"], "salary": 125000}, {"stage": "Senior Mobile Developer", "duration": "5+ years", "skills": ["Architecture", "Mentoring", "Design systems"], "salary": 190000}]);
    record23.set("faqs", [{"question": "Should I learn iOS or Android first?", "answer": "Either is fine. Learning one deeply is better than surface knowledge of both."}, {"question": "What about cross-platform frameworks?", "answer": "React Native and Flutter are popular. They allow code sharing between iOS and Android."}, {"question": "What's the job market like?", "answer": "Strong demand, especially for experienced developers. Remote opportunities are abundant."}]);
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
    record24.set("name", "Game Developer");
    record24.set("slug", "game-developer");
    record24.set("description", "Create video games using game engines and programming languages, focusing on gameplay, graphics, and user experience.");
    record24.set("overview", "Game developers design and build video games for various platforms. They work with game engines like Unity and Unreal, creating engaging interactive experiences.");
    record24.set("averageSalary", 115000);
    record24.set("salaryRange", "{'min': 65000, 'max': 180000}");
    record24.set("jobDemandOutlook", "Medium");
    record24.set("entrySalary", 65000);
    record24.set("midSalary", 115000);
    record24.set("seniorSalary", 180000);
    record24.set("jobDemand", "Medium");
    record24.set("skillsRequired", [{"skill": "C#/C++", "proficiency": "Advanced"}, {"skill": "Unity/Unreal", "proficiency": "Advanced"}, {"skill": "Game Design", "proficiency": "Advanced"}, {"skill": "Graphics Programming", "proficiency": "Intermediate"}, {"skill": "Physics", "proficiency": "Intermediate"}, {"skill": "Problem Solving", "proficiency": "Advanced"}]);
    record24.set("softSkills", ["Creativity", "Problem Solving", "Teamwork", "Attention to Detail", "Passion for Games"]);
    record24.set("tools", ["Unity", "Unreal Engine", "C#", "C++", "Blender", "Git", "Perforce"]);
    record24.set("topPayingStates", [{"state": "California", "salary": 135000}, {"state": "Washington", "salary": 128000}, {"state": "Texas", "salary": 120000}, {"state": "New York", "salary": 118000}, {"state": "Colorado", "salary": 115000}]);
    record24.set("relatedCareers", ["software-engineer", "graphics-programmer", "game-designer"]);
    record24.set("salaryInsights", "{'trends': 'Stable with 5% growth expected', 'growthProjection': 'Competitive market with lower growth than other tech roles', 'benefits': 'Creative work, stock options, flexible hours, passion-driven environment'}");
    record24.set("roadmap", [{"stage": "Junior Game Developer", "duration": "0-2 years", "skills": ["Game engine basics", "Scripting", "Game mechanics"], "salary": 65000}, {"stage": "Game Developer", "duration": "2-5 years", "skills": ["Advanced gameplay", "Optimization", "Team collaboration"], "salary": 115000}, {"stage": "Senior Game Developer", "duration": "5+ years", "skills": ["Architecture", "Mentoring", "Technical leadership"], "salary": 180000}]);
    record24.set("faqs", [{"question": "Should I learn Unity or Unreal?", "answer": "Both are popular. Unity is more beginner-friendly, Unreal is more powerful."}, {"question": "Do I need to be a gamer?", "answer": "Not required, but passion for games helps. Understanding game design is important."}, {"question": "What's the job market like?", "answer": "Competitive but stable. Passion and portfolio matter more than credentials."}]);
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
    record25.set("name", "Blockchain Developer");
    record25.set("slug", "blockchain-developer");
    record25.set("description", "Develop blockchain applications and smart contracts using distributed ledger technology.");
    record25.set("overview", "Blockchain developers create decentralized applications and smart contracts. They work with blockchain platforms like Ethereum and Solana.");
    record25.set("averageSalary", 140000);
    record25.set("salaryRange", "{'min': 85000, 'max': 210000}");
    record25.set("jobDemandOutlook", "High");
    record25.set("entrySalary", 85000);
    record25.set("midSalary", 140000);
    record25.set("seniorSalary", 210000);
    record25.set("jobDemand", "High");
    record25.set("skillsRequired", [{"skill": "Solidity", "proficiency": "Advanced"}, {"skill": "Ethereum", "proficiency": "Advanced"}, {"skill": "Smart Contracts", "proficiency": "Advanced"}, {"skill": "Cryptography", "proficiency": "Intermediate"}, {"skill": "Web3", "proficiency": "Advanced"}, {"skill": "JavaScript", "proficiency": "Advanced"}]);
    record25.set("softSkills", ["Problem Solving", "Attention to Detail", "Communication", "Teamwork", "Continuous Learning"]);
    record25.set("tools", ["Solidity", "Ethereum", "Hardhat", "Truffle", "Web3.js", "Remix", "MetaMask"]);
    record25.set("topPayingStates", [{"state": "California", "salary": 160000}, {"state": "New York", "salary": 152000}, {"state": "Washington", "salary": 148000}, {"state": "Massachusetts", "salary": 145000}, {"state": "Colorado", "salary": 140000}]);
    record25.set("relatedCareers", ["software-engineer", "security-engineer", "full-stack-developer"]);
    record25.set("salaryInsights", "{'trends': 'Growing demand with 15% growth expected', 'growthProjection': 'Emerging field with strong future potential', 'benefits': 'High salary, stock options, remote work, cutting-edge technology'}");
    record25.set("roadmap", [{"stage": "Junior Blockchain Developer", "duration": "0-2 years", "skills": ["Blockchain basics", "Smart contracts", "Solidity fundamentals"], "salary": 85000}, {"stage": "Blockchain Developer", "duration": "2-5 years", "skills": ["Advanced smart contracts", "DApp development", "Security"], "salary": 140000}, {"stage": "Senior Blockchain Developer", "duration": "5+ years", "skills": ["Architecture", "Protocol design", "Team leadership"], "salary": 210000}]);
    record25.set("faqs", [{"question": "Do I need crypto knowledge?", "answer": "Not required, but understanding blockchain and crypto concepts helps."}, {"question": "What's the job market like?", "answer": "Growing demand but smaller market than traditional software engineering."}, {"question": "Is blockchain here to stay?", "answer": "Yes, blockchain technology is here to stay. Adoption is growing across industries."}]);
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
    record26.set("name", "IoT Developer");
    record26.set("slug", "iot-developer");
    record26.set("description", "Develop applications for Internet of Things devices, connecting physical devices to the internet.");
    record26.set("overview", "IoT developers create software for connected devices. They work with embedded systems, sensors, and cloud platforms to build IoT solutions.");
    record26.set("averageSalary", 120000);
    record26.set("salaryRange", "{'min': 70000, 'max': 185000}");
    record26.set("jobDemandOutlook", "High");
    record26.set("entrySalary", 70000);
    record26.set("midSalary", 120000);
    record26.set("seniorSalary", 185000);
    record26.set("jobDemand", "High");
    record26.set("skillsRequired", [{"skill": "C/C++", "proficiency": "Advanced"}, {"skill": "Embedded Systems", "proficiency": "Advanced"}, {"skill": "IoT Platforms", "proficiency": "Advanced"}, {"skill": "Networking", "proficiency": "Intermediate"}, {"skill": "Cloud Platforms", "proficiency": "Intermediate"}, {"skill": "Hardware Knowledge", "proficiency": "Intermediate"}]);
    record26.set("softSkills", ["Problem Solving", "Attention to Detail", "Communication", "Teamwork", "Creativity"]);
    record26.set("tools", ["Arduino", "Raspberry Pi", "AWS IoT", "Azure IoT", "MQTT", "C/C++", "Python"]);
    record26.set("topPayingStates", [{"state": "California", "salary": 140000}, {"state": "Washington", "salary": 135000}, {"state": "Texas", "salary": 128000}, {"state": "New York", "salary": 125000}, {"state": "Colorado", "salary": 120000}]);
    record26.set("relatedCareers", ["embedded-systems-engineer", "software-engineer", "devops-engineer"]);
    record26.set("salaryInsights", "{'trends': 'Growing demand with 15% growth expected', 'growthProjection': 'Strong market as IoT adoption increases', 'benefits': 'Competitive salary, remote work, cutting-edge technology, learning opportunities'}");
    record26.set("roadmap", [{"stage": "Junior IoT Developer", "duration": "0-2 years", "skills": ["Embedded basics", "IoT fundamentals", "Sensor integration"], "salary": 70000}, {"stage": "IoT Developer", "duration": "2-5 years", "skills": ["Advanced IoT", "Cloud integration", "System design"], "salary": 120000}, {"stage": "Senior IoT Developer", "duration": "5+ years", "skills": ["Architecture", "Team leadership", "Strategic planning"], "salary": 185000}]);
    record26.set("faqs", [{"question": "Do I need hardware knowledge?", "answer": "Not required, but understanding hardware helps. Most IoT developers learn on the job."}, {"question": "What platforms should I learn?", "answer": "AWS IoT and Azure IoT are most popular. Learning one deeply is better than surface knowledge."}, {"question": "What's the job market like?", "answer": "Growing demand as IoT adoption increases across industries."}]);
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
    record27.set("name", "Embedded Systems Engineer");
    record27.set("slug", "embedded-systems-engineer");
    record27.set("description", "Design and develop software for embedded systems in devices like microcontrollers and real-time systems.");
    record27.set("overview", "Embedded systems engineers create software for specialized hardware. They work on firmware, drivers, and real-time systems.");
    record27.set("averageSalary", 118000);
    record27.set("salaryRange", "{'min': 68000, 'max': 180000}");
    record27.set("jobDemandOutlook", "Medium");
    record27.set("entrySalary", 68000);
    record27.set("midSalary", 118000);
    record27.set("seniorSalary", 180000);
    record27.set("jobDemand", "Medium");
    record27.set("skillsRequired", [{"skill": "C/C++", "proficiency": "Advanced"}, {"skill": "Assembly", "proficiency": "Advanced"}, {"skill": "Microcontrollers", "proficiency": "Advanced"}, {"skill": "Real-time Systems", "proficiency": "Intermediate"}, {"skill": "Hardware Knowledge", "proficiency": "Advanced"}, {"skill": "Debugging", "proficiency": "Advanced"}]);
    record27.set("softSkills", ["Problem Solving", "Attention to Detail", "Communication", "Teamwork", "Patience"]);
    record27.set("tools", ["C/C++", "Assembly", "ARM", "RTOS", "Oscilloscope", "Logic Analyzer", "Debuggers"]);
    record27.set("topPayingStates", [{"state": "California", "salary": 138000}, {"state": "Texas", "salary": 130000}, {"state": "Washington", "salary": 128000}, {"state": "New York", "salary": 125000}, {"state": "Colorado", "salary": 120000}]);
    record27.set("relatedCareers", ["iot-developer", "hardware-engineer", "software-engineer"]);
    record27.set("salaryInsights", "{'trends': 'Stable with 5% growth expected', 'growthProjection': 'Consistent demand in automotive and industrial sectors', 'benefits': 'Stable employment, benefits, job security, learning opportunities'}");
    record27.set("roadmap", [{"stage": "Junior Embedded Systems Engineer", "duration": "0-2 years", "skills": ["Embedded basics", "Microcontroller programming", "Debugging"], "salary": 68000}, {"stage": "Embedded Systems Engineer", "duration": "2-5 years", "skills": ["Advanced firmware", "Real-time systems", "Hardware integration"], "salary": 118000}, {"stage": "Senior Embedded Systems Engineer", "duration": "5+ years", "skills": ["Architecture", "Team leadership", "Strategic planning"], "salary": 180000}]);
    record27.set("faqs", [{"question": "Do I need hardware knowledge?", "answer": "Yes, understanding hardware is essential for embedded systems work."}, {"question": "What languages should I learn?", "answer": "C and C++ are essential. Assembly knowledge is also important."}, {"question": "What's the job market like?", "answer": "Stable but slower growth than software engineering. Automotive and industrial sectors have high demand."}]);
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
    record28.set("name", "Graphics Programmer");
    record28.set("slug", "graphics-programmer");
    record28.set("description", "Develop graphics rendering systems and visual effects for games and applications.");
    record28.set("overview", "Graphics programmers create rendering engines and visual effects. They work with graphics APIs like OpenGL and DirectX.");
    record28.set("averageSalary", 125000);
    record28.set("salaryRange", "{'min': 75000, 'max': 190000}");
    record28.set("jobDemandOutlook", "Medium");
    record28.set("entrySalary", 75000);
    record28.set("midSalary", 125000);
    record28.set("seniorSalary", 190000);
    record28.set("jobDemand", "Medium");
    record28.set("skillsRequired", [{"skill": "C++", "proficiency": "Advanced"}, {"skill": "Graphics APIs", "proficiency": "Advanced"}, {"skill": "Shader Programming", "proficiency": "Advanced"}, {"skill": "Linear Algebra", "proficiency": "Advanced"}, {"skill": "Performance Optimization", "proficiency": "Advanced"}, {"skill": "GPU Programming", "proficiency": "Intermediate"}]);
    record28.set("softSkills", ["Problem Solving", "Attention to Detail", "Communication", "Teamwork", "Creativity"]);
    record28.set("tools", ["C++", "OpenGL", "DirectX", "Vulkan", "GLSL", "HLSL", "GPU Debuggers"]);
    record28.set("topPayingStates", [{"state": "California", "salary": 145000}, {"state": "Washington", "salary": 138000}, {"state": "Texas", "salary": 130000}, {"state": "New York", "salary": 128000}, {"state": "Colorado", "salary": 125000}]);
    record28.set("relatedCareers", ["game-developer", "software-engineer", "vr-developer"]);
    record28.set("salaryInsights", "{'trends': 'Stable with 5% growth expected', 'growthProjection': 'Consistent demand in gaming and VR', 'benefits': 'Competitive salary, creative work, stock options, flexible hours'}");
    record28.set("roadmap", [{"stage": "Junior Graphics Programmer", "duration": "0-2 years", "skills": ["Graphics basics", "Shader programming", "API fundamentals"], "salary": 75000}, {"stage": "Graphics Programmer", "duration": "2-5 years", "skills": ["Advanced rendering", "Performance optimization", "Visual effects"], "salary": 125000}, {"stage": "Senior Graphics Programmer", "duration": "5+ years", "skills": ["Engine architecture", "Team leadership", "Research"], "salary": 190000}]);
    record28.set("faqs", [{"question": "Do I need a math background?", "answer": "Yes, linear algebra and calculus are important for graphics programming."}, {"question": "What graphics API should I learn?", "answer": "OpenGL is good for learning, but Vulkan and DirectX are more modern."}, {"question": "What's the job market like?", "answer": "Smaller market than general software engineering, but stable demand in gaming and VR."}]);
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
    record29.set("name", "VR Developer");
    record29.set("slug", "vr-developer");
    record29.set("description", "Create virtual reality experiences and applications using VR platforms and game engines.");
    record29.set("overview", "VR developers build immersive virtual reality experiences. They work with VR platforms like Meta Quest and HTC Vive.");
    record29.set("averageSalary", 130000);
    record29.set("salaryRange", "{'min': 75000, 'max': 200000}");
    record29.set("jobDemandOutlook", "High");
    record29.set("entrySalary", 75000);
    record29.set("midSalary", 130000);
    record29.set("seniorSalary", 200000);
    record29.set("jobDemand", "High");
    record29.set("skillsRequired", [{"skill": "C#/C++", "proficiency": "Advanced"}, {"skill": "Unity/Unreal", "proficiency": "Advanced"}, {"skill": "VR Development", "proficiency": "Advanced"}, {"skill": "3D Graphics", "proficiency": "Advanced"}, {"skill": "User Experience", "proficiency": "Advanced"}, {"skill": "Physics", "proficiency": "Intermediate"}]);
    record29.set("softSkills", ["Creativity", "Problem Solving", "Teamwork", "Attention to Detail", "User Empathy"]);
    record29.set("tools", ["Unity", "Unreal Engine", "C#", "C++", "Blender", "Meta Quest SDK", "SteamVR"]);
    record29.set("topPayingStates", [{"state": "California", "salary": 150000}, {"state": "Washington", "salary": 143000}, {"state": "Texas", "salary": 135000}, {"state": "New York", "salary": 133000}, {"state": "Colorado", "salary": 130000}]);
    record29.set("relatedCareers", ["game-developer", "graphics-programmer", "software-engineer"]);
    record29.set("salaryInsights", "{'trends': 'Growing demand with 15% growth expected', 'growthProjection': 'Emerging field with strong future potential', 'benefits': 'Competitive salary, creative work, cutting-edge technology, remote work'}");
    record29.set("roadmap", [{"stage": "Junior VR Developer", "duration": "0-2 years", "skills": ["VR basics", "Game engine fundamentals", "3D graphics"], "salary": 75000}, {"stage": "VR Developer", "duration": "2-5 years", "skills": ["Advanced VR", "User experience design", "Performance optimization"], "salary": 130000}, {"stage": "Senior VR Developer", "duration": "5+ years", "skills": ["Architecture", "Team leadership", "Innovation"], "salary": 200000}]);
    record29.set("faqs", [{"question": "Do I need VR hardware?", "answer": "Yes, having a VR headset helps for testing and development."}, {"question": "What platforms should I target?", "answer": "Meta Quest is most popular, but PC VR (Steam) and PlayStation VR are also important."}, {"question": "What's the job market like?", "answer": "Growing demand as VR adoption increases. Still a smaller market than traditional gaming."}]);
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
    record30.set("name", "AR Developer");
    record30.set("slug", "ar-developer");
    record30.set("description", "Create augmented reality applications that blend digital content with the real world.");
    record30.set("overview", "AR developers build augmented reality experiences for mobile and wearable devices. They work with AR frameworks like ARKit and ARCore.");
    record30.set("averageSalary", 128000);
    record30.set("salaryRange", "{'min': 73000, 'max': 195000}");
    record30.set("jobDemandOutlook", "High");
    record30.set("entrySalary", 73000);
    record30.set("midSalary", 128000);
    record30.set("seniorSalary", 195000);
    record30.set("jobDemand", "High");
    record30.set("skillsRequired", [{"skill": "Swift/Kotlin", "proficiency": "Advanced"}, {"skill": "ARKit/ARCore", "proficiency": "Advanced"}, {"skill": "3D Graphics", "proficiency": "Advanced"}, {"skill": "Mobile Development", "proficiency": "Advanced"}, {"skill": "Computer Vision", "proficiency": "Intermediate"}, {"skill": "User Experience", "proficiency": "Advanced"}]);
    record30.set("softSkills", ["Creativity", "Problem Solving", "Teamwork", "Attention to Detail", "User Empathy"]);
    record30.set("tools", ["Swift", "Kotlin", "ARKit", "ARCore", "Unity", "Blender", "Xcode", "Android Studio"]);
    record30.set("topPayingStates", [{"state": "California", "salary": 148000}, {"state": "Washington", "salary": 141000}, {"state": "Texas", "salary": 133000}, {"state": "New York", "salary": 131000}, {"state": "Colorado", "salary": 128000}]);
    record30.set("relatedCareers", ["mobile-developer", "vr-developer", "game-developer"]);
    record30.set("salaryInsights", "{'trends': 'Growing demand with 15% growth expected', 'growthProjection': 'Strong market as AR adoption increases', 'benefits': 'Competitive salary, creative work, cutting-edge technology, remote work'}");
    record30.set("roadmap", [{"stage": "Junior AR Developer", "duration": "0-2 years", "skills": ["AR basics", "Mobile development", "3D graphics"], "salary": 73000}, {"stage": "AR Developer", "duration": "2-5 years", "skills": ["Advanced AR", "User experience design", "Performance optimization"], "salary": 128000}, {"stage": "Senior AR Developer", "duration": "5+ years", "skills": ["Architecture", "Team leadership", "Innovation"], "salary": 195000}]);
    record30.set("faqs", [{"question": "Should I focus on iOS or Android?", "answer": "Both are important. Learning one deeply is better than surface knowledge of both."}, {"question": "What's the difference between AR and VR?", "answer": "AR blends digital with real world, VR is fully immersive. AR is more accessible."}, {"question": "What's the job market like?", "answer": "Growing demand as AR adoption increases in retail, education, and entertainment."}]);
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
    record31.set("name", "Research Scientist");
    record31.set("slug", "research-scientist");
    record31.set("description", "Conduct research to advance technology and develop novel algorithms and methodologies.");
    record31.set("overview", "Research scientists push the boundaries of technology through research and innovation. They publish papers, develop new algorithms, and explore emerging technologies.");
    record31.set("averageSalary", 155000);
    record31.set("salaryRange", "{'min': 100000, 'max': 250000}");
    record31.set("jobDemandOutlook", "High");
    record31.set("entrySalary", 100000);
    record31.set("midSalary", 155000);
    record31.set("seniorSalary", 250000);
    record31.set("jobDemand", "High");
    record31.set("skillsRequired", [{"skill": "Research Methodology", "proficiency": "Advanced"}, {"skill": "Machine Learning", "proficiency": "Advanced"}, {"skill": "Statistics", "proficiency": "Advanced"}, {"skill": "Python", "proficiency": "Advanced"}, {"skill": "Academic Writing", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}]);
    record31.set("softSkills", ["Research Mindset", "Communication", "Creativity", "Collaboration", "Persistence"]);
    record31.set("tools", ["Python", "TensorFlow", "PyTorch", "Jupyter", "Git", "LaTeX", "Research databases"]);
    record31.set("topPayingStates", [{"state": "California", "salary": 180000}, {"state": "New York", "salary": 170000}, {"state": "Massachusetts", "salary": 168000}, {"state": "Washington", "salary": 165000}, {"state": "Colorado", "salary": 160000}]);
    record31.set("relatedCareers", ["machine-learning-engineer", "ai-specialist", "data-scientist"]);
    record31.set("salaryInsights", "{'trends': 'Growing demand with 15% growth expected', 'growthProjection': 'Strong market for research talent', 'benefits': 'High salary, stock options, research opportunities, flexible work, publication opportunities'}");
    record31.set("roadmap", [{"stage": "Junior Research Scientist", "duration": "0-2 years", "skills": ["Research basics", "Paper writing", "Experimentation"], "salary": 100000}, {"stage": "Research Scientist", "duration": "2-5 years", "skills": ["Advanced research", "Publication", "Innovation"], "salary": 155000}, {"stage": "Senior Research Scientist", "duration": "5+ years", "skills": ["Research leadership", "Strategy", "Team management"], "salary": 250000}]);
    record31.set("faqs", [{"question": "Do I need a PhD?", "answer": "Usually yes for research scientist roles. Master's degree may work with strong research background."}, {"question": "What's the difference between research scientist and ML engineer?", "answer": "Research scientists focus on novel research, ML engineers focus on production systems."}, {"question": "What's the job market like?", "answer": "Strong demand in tech companies and research institutions. Highly competitive."}]);
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
    record32.set("name", "Technical Writer");
    record32.set("slug", "technical-writer");
    record32.set("description", "Create technical documentation, user guides, and API documentation for software products.");
    record32.set("overview", "Technical writers translate complex technical information into clear, user-friendly documentation. They work with engineers to create guides, tutorials, and API docs.");
    record32.set("averageSalary", 95000);
    record32.set("salaryRange", "{'min': 55000, 'max': 150000}");
    record32.set("jobDemandOutlook", "High");
    record32.set("entrySalary", 55000);
    record32.set("midSalary", 95000);
    record32.set("seniorSalary", 150000);
    record32.set("jobDemand", "High");
    record32.set("skillsRequired", [{"skill": "Technical Writing", "proficiency": "Advanced"}, {"skill": "Documentation Tools", "proficiency": "Advanced"}, {"skill": "Markdown/XML", "proficiency": "Advanced"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Technical Knowledge", "proficiency": "Intermediate"}, {"skill": "User Research", "proficiency": "Intermediate"}]);
    record32.set("softSkills", ["Communication", "Attention to Detail", "Organization", "Empathy", "Problem Solving"]);
    record32.set("tools", ["Markdown", "Confluence", "Jira", "Git", "Figma", "Sphinx", "MkDocs"]);
    record32.set("topPayingStates", [{"state": "California", "salary": 115000}, {"state": "New York", "salary": 108000}, {"state": "Massachusetts", "salary": 105000}, {"state": "Washington", "salary": 102000}, {"state": "Colorado", "salary": 98000}]);
    record32.set("relatedCareers", ["product-manager", "ui-ux-designer", "business-analyst"]);
    record32.set("salaryInsights", "{'trends': 'Growing demand with 10% job growth expected', 'growthProjection': 'Consistent opportunities as companies focus on documentation', 'benefits': 'Flexible work, remote options, creative environment, competitive salary'}");
    record32.set("roadmap", [{"stage": "Junior Technical Writer", "duration": "0-2 years", "skills": ["Technical writing basics", "Documentation tools", "Research"], "salary": 55000}, {"stage": "Technical Writer", "duration": "2-5 years", "skills": ["Advanced documentation", "User research", "Content strategy"], "salary": 95000}, {"stage": "Senior Technical Writer", "duration": "5+ years", "skills": ["Documentation strategy", "Team leadership", "Content architecture"], "salary": 150000}]);
    record32.set("faqs", [{"question": "Do I need a technical background?", "answer": "Not required, but technical knowledge helps. Strong writing skills are most important."}, {"question": "What tools should I learn?", "answer": "Markdown, Confluence, and Git are essential. Learn based on company needs."}, {"question": "What's the job market like?", "answer": "Growing demand as companies recognize importance of good documentation."}]);
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
    record33.set("name", "IT Support Specialist");
    record33.set("slug", "it-support-specialist");
    record33.set("description", "Provide technical support to end users, troubleshoot issues, and maintain IT systems.");
    record33.set("overview", "IT support specialists help users with technical problems. They provide first-line support, troubleshoot issues, and maintain IT infrastructure.");
    record33.set("averageSalary", 65000);
    record33.set("salaryRange", "{'min': 38000, 'max': 110000}");
    record33.set("jobDemandOutlook", "Medium");
    record33.set("entrySalary", 38000);
    record33.set("midSalary", 65000);
    record33.set("seniorSalary", 110000);
    record33.set("jobDemand", "Medium");
    record33.set("skillsRequired", [{"skill": "Troubleshooting", "proficiency": "Advanced"}, {"skill": "Windows/Mac", "proficiency": "Advanced"}, {"skill": "Networking", "proficiency": "Intermediate"}, {"skill": "Help Desk Tools", "proficiency": "Advanced"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}]);
    record33.set("softSkills", ["Communication", "Patience", "Problem Solving", "Teamwork", "Customer Service"]);
    record33.set("tools", ["Windows", "Mac", "Linux", "Jira", "ServiceNow", "Remote Desktop", "Ticketing Systems"]);
    record33.set("topPayingStates", [{"state": "California", "salary": 80000}, {"state": "New York", "salary": 75000}, {"state": "Massachusetts", "salary": 72000}, {"state": "Washington", "salary": 70000}, {"state": "Colorado", "salary": 68000}]);
    record33.set("relatedCareers", ["systems-administrator", "network-administrator", "help-desk-technician"]);
    record33.set("salaryInsights", "{'trends': 'Stable with 5% growth expected', 'growthProjection': 'Consistent demand but slower growth than other tech roles', 'benefits': 'Stable employment, benefits, job security, learning opportunities'}");
    record33.set("roadmap", [{"stage": "Help Desk Technician", "duration": "0-2 years", "skills": ["Basic troubleshooting", "Customer service", "Ticketing systems"], "salary": 38000}, {"stage": "IT Support Specialist", "duration": "2-5 years", "skills": ["Advanced troubleshooting", "System administration", "Networking"], "salary": 65000}, {"stage": "IT Support Manager", "duration": "5+ years", "skills": ["Team management", "Strategic planning", "Process improvement"], "salary": 110000}]);
    record33.set("faqs", [{"question": "What certifications are important?", "answer": "CompTIA A+ is the most common entry-level certification."}, {"question": "Is this a good entry point to tech?", "answer": "Yes, many tech professionals start in IT support and transition to other roles."}, {"question": "What's the job market like?", "answer": "Stable but slower growth. Remote work is becoming more common."}]);
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
    record34.set("name", "Help Desk Technician");
    record34.set("slug", "help-desk-technician");
    record34.set("description", "Provide first-line technical support to users, resolve common issues, and escalate complex problems.");
    record34.set("overview", "Help desk technicians are the first point of contact for technical support. They resolve user issues, manage tickets, and maintain user satisfaction.");
    record34.set("averageSalary", 55000);
    record34.set("salaryRange", "{'min': 32000, 'max': 95000}");
    record34.set("jobDemandOutlook", "Medium");
    record34.set("entrySalary", 32000);
    record34.set("midSalary", 55000);
    record34.set("seniorSalary", 95000);
    record34.set("jobDemand", "Medium");
    record34.set("skillsRequired", [{"skill": "Troubleshooting", "proficiency": "Intermediate"}, {"skill": "Windows/Mac", "proficiency": "Intermediate"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Customer Service", "proficiency": "Advanced"}, {"skill": "Ticketing Systems", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Intermediate"}]);
    record34.set("softSkills", ["Communication", "Patience", "Problem Solving", "Teamwork", "Customer Service"]);
    record34.set("tools", ["Windows", "Mac", "Ticketing Systems", "Remote Support Tools", "Email", "Phone Systems"]);
    record34.set("topPayingStates", [{"state": "California", "salary": 70000}, {"state": "New York", "salary": 65000}, {"state": "Massachusetts", "salary": 62000}, {"state": "Washington", "salary": 60000}, {"state": "Colorado", "salary": 58000}]);
    record34.set("relatedCareers", ["it-support-specialist", "systems-administrator", "network-administrator"]);
    record34.set("salaryInsights", "{'trends': 'Stable with 3% growth expected', 'growthProjection': 'Consistent demand but slower growth than other tech roles', 'benefits': 'Stable employment, benefits, job security, learning opportunities'}");
    record34.set("roadmap", [{"stage": "Help Desk Technician", "duration": "0-2 years", "skills": ["Basic troubleshooting", "Customer service", "Ticketing systems"], "salary": 32000}, {"stage": "Senior Help Desk Technician", "duration": "2-5 years", "skills": ["Advanced troubleshooting", "Mentoring", "Process improvement"], "salary": 55000}, {"stage": "IT Support Specialist", "duration": "5+ years", "skills": ["System administration", "Team leadership", "Strategic planning"], "salary": 95000}]);
    record34.set("faqs", [{"question": "Do I need certifications?", "answer": "Not required to start, but CompTIA A+ helps with advancement."}, {"question": "Is this a good entry point to tech?", "answer": "Yes, many tech professionals start in help desk and transition to other roles."}, {"question": "What's the job market like?", "answer": "Stable but slower growth. Remote work is becoming more common."}]);
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
    record35.set("name", "Graphic Designer");
    record35.set("slug", "graphic-designer");
    record35.set("description", "Create visual content including logos, branding, marketing materials, and digital designs.");
    record35.set("overview", "Graphic designers create visual solutions for communication problems. They work with design software to create compelling visual content.");
    record35.set("averageSalary", 85000);
    record35.set("salaryRange", "{'min': 45000, 'max': 135000}");
    record35.set("jobDemandOutlook", "Medium");
    record35.set("entrySalary", 45000);
    record35.set("midSalary", 85000);
    record35.set("seniorSalary", 135000);
    record35.set("jobDemand", "Medium");
    record35.set("skillsRequired", [{"skill": "Adobe Creative Suite", "proficiency": "Advanced"}, {"skill": "Visual Design", "proficiency": "Advanced"}, {"skill": "Branding", "proficiency": "Advanced"}, {"skill": "Typography", "proficiency": "Advanced"}, {"skill": "Color Theory", "proficiency": "Advanced"}, {"skill": "Communication", "proficiency": "Advanced"}]);
    record35.set("softSkills", ["Creativity", "Communication", "Attention to Detail", "Problem Solving", "Collaboration"]);
    record35.set("tools", ["Photoshop", "Illustrator", "InDesign", "Figma", "Sketch", "XD", "Blender"]);
    record35.set("topPayingStates", [{"state": "California", "salary": 105000}, {"state": "New York", "salary": 98000}, {"state": "Massachusetts", "salary": 95000}, {"state": "Washington", "salary": 92000}, {"state": "Colorado", "salary": 88000}]);
    record35.set("relatedCareers", ["ui-ux-designer", "product-designer", "web-designer"]);
    record35.set("salaryInsights", "{'trends': 'Stable with 3% growth expected', 'growthProjection': 'Consistent demand but slower growth than tech roles', 'benefits': 'Creative work, flexible hours, remote options, portfolio-driven'}");
    record35.set("roadmap", [{"stage": "Junior Graphic Designer", "duration": "0-2 years", "skills": ["Design basics", "Adobe tools", "Visual principles"], "salary": 45000}, {"stage": "Graphic Designer", "duration": "2-5 years", "skills": ["Advanced design", "Branding", "Client management"], "salary": 85000}, {"stage": "Senior Graphic Designer", "duration": "5+ years", "skills": ["Design strategy", "Team leadership", "Creative direction"], "salary": 135000}]);
    record35.set("faqs", [{"question": "Do I need a design degree?", "answer": "Not required. A strong portfolio is more important than credentials."}, {"question": "What software should I learn?", "answer": "Adobe Creative Suite is industry standard. Figma is increasingly important for digital design."}, {"question": "What's the job market like?", "answer": "Stable but competitive. Remote work is common. Portfolio quality matters most."}]);
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
    record36.set("name", "Web Developer");
    record36.set("slug", "web-developer");
    record36.set("description", "Develop websites and web applications using HTML, CSS, JavaScript, and web frameworks.");
    record36.set("overview", "Web developers build websites and web applications. They work on both frontend and backend, creating responsive and interactive web experiences.");
    record36.set("averageSalary", 120000);
    record36.set("salaryRange", "{'min': 65000, 'max': 185000}");
    record36.set("jobDemandOutlook", "High");
    record36.set("entrySalary", 65000);
    record36.set("midSalary", 120000);
    record36.set("seniorSalary", 185000);
    record36.set("jobDemand", "High");
    record36.set("skillsRequired", [{"skill": "JavaScript", "proficiency": "Advanced"}, {"skill": "HTML/CSS", "proficiency": "Advanced"}, {"skill": "React/Vue", "proficiency": "Advanced"}, {"skill": "Responsive Design", "proficiency": "Advanced"}, {"skill": "Backend Basics", "proficiency": "Intermediate"}, {"skill": "Web Performance", "proficiency": "Intermediate"}]);
    record36.set("softSkills", ["Problem Solving", "Communication", "Creativity", "Attention to Detail", "Collaboration"]);
    record36.set("tools", ["JavaScript", "React", "Vue", "Node.js", "Git", "Webpack", "Chrome DevTools"]);
    record36.set("topPayingStates", [{"state": "California", "salary": 140000}, {"state": "New York", "salary": 133000}, {"state": "Washington", "salary": 130000}, {"state": "Massachusetts", "salary": 127000}, {"state": "Colorado", "salary": 123000}]);
    record36.set("relatedCareers", ["frontend-developer", "full-stack-developer", "software-engineer"]);
    record36.set("salaryInsights", "{'trends': 'Strong demand with 13% growth expected', 'growthProjection': 'Consistent opportunities across all industries', 'benefits': 'Flexible work, remote options, continuous learning, competitive pay'}");
    record36.set("roadmap", [{"stage": "Junior Web Developer", "duration": "0-2 years", "skills": ["HTML/CSS", "JavaScript basics", "Responsive design"], "salary": 65000}, {"stage": "Web Developer", "duration": "2-5 years", "skills": ["Advanced JavaScript", "Framework expertise", "Performance optimization"], "salary": 120000}, {"stage": "Senior Web Developer", "duration": "5+ years", "skills": ["Architecture", "Mentoring", "Design systems"], "salary": 185000}]);
    record36.set("faqs", [{"question": "Should I learn frontend or backend first?", "answer": "Frontend is more accessible for beginners. Full stack knowledge is valuable."}, {"question": "What framework should I learn?", "answer": "React is most popular. Vue and Angular are also valuable."}, {"question": "What's the job market like?", "answer": "Excellent demand with many remote opportunities. Bootcamp graduates are competitive."}]);
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
    record37.set("name", "Automation Engineer");
    record37.set("slug", "automation-engineer");
    record37.set("description", "Develop automation solutions to streamline processes and improve efficiency in manufacturing and operations.");
    record37.set("overview", "Automation engineers design and implement automated systems. They work with robotics, control systems, and software to optimize processes.");
    record37.set("averageSalary", 110000);
    record37.set("salaryRange", "{'min': 62000, 'max': 170000}");
    record37.set("jobDemandOutlook", "High");
    record37.set("entrySalary", 62000);
    record37.set("midSalary", 110000);
    record37.set("seniorSalary", 170000);
    record37.set("jobDemand", "High");
    record37.set("skillsRequired", [{"skill": "Python", "proficiency": "Advanced"}, {"skill": "Robotics", "proficiency": "Advanced"}, {"skill": "Control Systems", "proficiency": "Advanced"}, {"skill": "PLC Programming", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}, {"skill": "System Design", "proficiency": "Intermediate"}]);
    record37.set("softSkills", ["Problem Solving", "Attention to Detail", "Communication", "Teamwork", "Creativity"]);
    record37.set("tools", ["Python", "ROS", "PLC", "MATLAB", "Simulink", "Git", "CAD Software"]);
    record37.set("topPayingStates", [{"state": "California", "salary": 130000}, {"state": "Texas", "salary": 122000}, {"state": "Michigan", "salary": 118000}, {"state": "Ohio", "salary": 115000}, {"state": "Indiana", "salary": 112000}]);
    record37.set("relatedCareers", ["robotics-engineer", "mechanical-engineer", "software-engineer"]);
    record37.set("salaryInsights", "{'trends': 'Growing demand with 10% job growth expected', 'growthProjection': 'Strong market as automation adoption increases', 'benefits': 'Competitive salary, benefits, job security, learning opportunities'}");
    record37.set("roadmap", [{"stage": "Junior Automation Engineer", "duration": "0-2 years", "skills": ["Automation basics", "PLC programming", "Problem solving"], "salary": 62000}, {"stage": "Automation Engineer", "duration": "2-5 years", "skills": ["Advanced automation", "System design", "Robotics"], "salary": 110000}, {"stage": "Senior Automation Engineer", "duration": "5+ years", "skills": ["Architecture", "Team leadership", "Strategic planning"], "salary": 170000}]);
    record37.set("faqs", [{"question": "Do I need an engineering degree?", "answer": "Helpful but not required. Strong technical skills and experience matter more."}, {"question": "What industries hire automation engineers?", "answer": "Manufacturing, automotive, pharmaceuticals, and logistics all have high demand."}, {"question": "What's the job market like?", "answer": "Strong demand as companies automate processes. Salaries are competitive."}]);
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
    record38.set("name", "Robotics Engineer");
    record38.set("slug", "robotics-engineer");
    record38.set("description", "Design and develop robotic systems for manufacturing, healthcare, and other applications.");
    record38.set("overview", "Robotics engineers create robots and robotic systems. They work on mechanical design, control systems, and software integration.");
    record38.set("averageSalary", 115000);
    record38.set("salaryRange", "{'min': 65000, 'max': 180000}");
    record38.set("jobDemandOutlook", "High");
    record38.set("entrySalary", 65000);
    record38.set("midSalary", 115000);
    record38.set("seniorSalary", 180000);
    record38.set("jobDemand", "High");
    record38.set("skillsRequired", [{"skill": "Robotics", "proficiency": "Advanced"}, {"skill": "C++/Python", "proficiency": "Advanced"}, {"skill": "Control Systems", "proficiency": "Advanced"}, {"skill": "Mechanical Design", "proficiency": "Advanced"}, {"skill": "ROS", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}]);
    record38.set("softSkills", ["Problem Solving", "Creativity", "Communication", "Teamwork", "Attention to Detail"]);
    record38.set("tools", ["ROS", "C++", "Python", "MATLAB", "CAD", "Gazebo", "Git"]);
    record38.set("topPayingStates", [{"state": "California", "salary": 135000}, {"state": "Texas", "salary": 127000}, {"state": "Michigan", "salary": 123000}, {"state": "Ohio", "salary": 120000}, {"state": "Massachusetts", "salary": 118000}]);
    record38.set("relatedCareers", ["automation-engineer", "mechanical-engineer", "software-engineer"]);
    record38.set("salaryInsights", "{'trends': 'Growing demand with 15% job growth expected', 'growthProjection': 'Strong market as robotics adoption increases', 'benefits': 'Competitive salary, benefits, job security, cutting-edge technology'}");
    record38.set("roadmap", [{"stage": "Junior Robotics Engineer", "duration": "0-2 years", "skills": ["Robotics basics", "ROS fundamentals", "Control systems"], "salary": 65000}, {"stage": "Robotics Engineer", "duration": "2-5 years", "skills": ["Advanced robotics", "System design", "Integration"], "salary": 115000}, {"stage": "Senior Robotics Engineer", "duration": "5+ years", "skills": ["Architecture", "Team leadership", "Innovation"], "salary": 180000}]);
    record38.set("faqs", [{"question": "Do I need an engineering degree?", "answer": "Helpful but not required. Strong technical skills and robotics experience matter more."}, {"question": "What industries hire robotics engineers?", "answer": "Manufacturing, healthcare, aerospace, and research all have high demand."}, {"question": "What's the job market like?", "answer": "Strong demand as robotics adoption increases. Salaries are competitive."}]);
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
    record39.set("name", "Scrum Master");
    record39.set("slug", "scrum-master");
    record39.set("description", "Facilitate agile development processes, remove impediments, and ensure team productivity.");
    record39.set("overview", "Scrum masters guide teams through agile development. They facilitate ceremonies, remove blockers, and help teams improve.");
    record39.set("averageSalary", 105000);
    record39.set("salaryRange", "{'min': 60000, 'max': 160000}");
    record39.set("jobDemandOutlook", "High");
    record39.set("entrySalary", 60000);
    record39.set("midSalary", 105000);
    record39.set("seniorSalary", 160000);
    record39.set("jobDemand", "High");
    record39.set("skillsRequired", [{"skill": "Agile/Scrum", "proficiency": "Advanced"}, {"skill": "Facilitation", "proficiency": "Advanced"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}, {"skill": "Coaching", "proficiency": "Advanced"}, {"skill": "Technical Knowledge", "proficiency": "Intermediate"}]);
    record39.set("softSkills", ["Communication", "Leadership", "Problem Solving", "Empathy", "Coaching"]);
    record39.set("tools", ["Jira", "Confluence", "Miro", "Slack", "Azure DevOps", "Monday.com", "Asana"]);
    record39.set("topPayingStates", [{"state": "California", "salary": 125000}, {"state": "New York", "salary": 118000}, {"state": "Massachusetts", "salary": 115000}, {"state": "Washington", "salary": 112000}, {"state": "Colorado", "salary": 108000}]);
    record39.set("relatedCareers", ["project-manager", "product-manager", "agile-coach"]);
    record39.set("salaryInsights", "{'trends': 'Growing demand with 10% job growth expected', 'growthProjection': 'Consistent opportunities as agile adoption increases', 'benefits': 'Competitive salary, flexible work, remote options, leadership opportunities'}");
    record39.set("roadmap", [{"stage": "Associate Scrum Master", "duration": "0-2 years", "skills": ["Agile basics", "Facilitation", "Communication"], "salary": 60000}, {"stage": "Scrum Master", "duration": "2-5 years", "skills": ["Advanced agile", "Coaching", "Team development"], "salary": 105000}, {"stage": "Agile Coach", "duration": "5+ years", "skills": ["Organizational transformation", "Strategy", "Leadership"], "salary": 160000}]);
    record39.set("faqs", [{"question": "What certifications are important?", "answer": "Certified Scrum Master (CSM) is the most common and valuable certification."}, {"question": "Do I need technical knowledge?", "answer": "Not required, but understanding technical aspects helps. Soft skills are most important."}, {"question": "What's the job market like?", "answer": "Strong demand as companies adopt agile. Remote opportunities are abundant."}]);
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
    record40.set("name", "Agile Coach");
    record40.set("slug", "agile-coach");
    record40.set("description", "Guide organizations in adopting agile methodologies and improving development processes.");
    record40.set("overview", "Agile coaches help organizations transform to agile. They mentor teams, improve processes, and drive organizational change.");
    record40.set("averageSalary", 125000);
    record40.set("salaryRange", "{'min': 75000, 'max': 190000}");
    record40.set("jobDemandOutlook", "High");
    record40.set("entrySalary", 75000);
    record40.set("midSalary", 125000);
    record40.set("seniorSalary", 190000);
    record40.set("jobDemand", "High");
    record40.set("skillsRequired", [{"skill": "Agile Methodologies", "proficiency": "Advanced"}, {"skill": "Coaching", "proficiency": "Advanced"}, {"skill": "Change Management", "proficiency": "Advanced"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Leadership", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}]);
    record40.set("softSkills", ["Leadership", "Communication", "Coaching", "Empathy", "Strategic Thinking"]);
    record40.set("tools", ["Jira", "Confluence", "Miro", "Slack", "Azure DevOps", "Coaching frameworks", "Assessment tools"]);
    record40.set("topPayingStates", [{"state": "California", "salary": 145000}, {"state": "New York", "salary": 138000}, {"state": "Massachusetts", "salary": 135000}, {"state": "Washington", "salary": 132000}, {"state": "Colorado", "salary": 128000}]);
    record40.set("relatedCareers", ["scrum-master", "project-manager", "organizational-development"]);
    record40.set("salaryInsights", "{'trends': 'Growing demand with 12% job growth expected', 'growthProjection': 'Strong market as organizations transform to agile', 'benefits': 'High salary, consulting opportunities, remote work, leadership opportunities'}");
    record40.set("roadmap", [{"stage": "Scrum Master", "duration": "0-2 years", "skills": ["Agile basics", "Team facilitation", "Communication"], "salary": 75000}, {"stage": "Agile Coach", "duration": "2-5 years", "skills": ["Organizational coaching", "Change management", "Strategy"], "salary": 125000}, {"stage": "Senior Agile Coach", "duration": "5+ years", "skills": ["Enterprise transformation", "Leadership", "Consulting"], "salary": 190000}]);
    record40.set("faqs", [{"question": "What certifications are important?", "answer": "SAFe Program Consultant (SPC) and Certified Agile Coach (CAC) are valuable."}, {"question": "Do I need technical knowledge?", "answer": "Not required, but understanding technical aspects helps. Coaching skills are most important."}, {"question": "What's the job market like?", "answer": "Strong demand as organizations transform to agile. Consulting opportunities are abundant."}]);
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
    record41.set("name", "Director of Engineering");
    record41.set("slug", "director-of-engineering");
    record41.set("description", "Lead engineering organizations, set technical strategy, and manage multiple teams.");
    record41.set("overview", "Directors of engineering lead engineering organizations. They set strategy, manage budgets, and develop talent.");
    record41.set("averageSalary", 200000);
    record41.set("salaryRange", "{'min': 130000, 'max': 300000}");
    record41.set("jobDemandOutlook", "High");
    record41.set("entrySalary", 130000);
    record41.set("midSalary", 200000);
    record41.set("seniorSalary", 300000);
    record41.set("jobDemand", "High");
    record41.set("skillsRequired", [{"skill": "Leadership", "proficiency": "Advanced"}, {"skill": "Strategic Planning", "proficiency": "Advanced"}, {"skill": "Technical Knowledge", "proficiency": "Advanced"}, {"skill": "Budget Management", "proficiency": "Advanced"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Hiring", "proficiency": "Advanced"}]);
    record41.set("softSkills", ["Leadership", "Strategic Thinking", "Communication", "Empathy", "Decision Making"]);
    record41.set("tools", ["Jira", "Confluence", "Slack", "Greenhouse", "15Five", "Lattice", "Excel"]);
    record41.set("topPayingStates", [{"state": "California", "salary": 240000}, {"state": "New York", "salary": 220000}, {"state": "Washington", "salary": 210000}, {"state": "Massachusetts", "salary": 205000}, {"state": "Colorado", "salary": 200000}]);
    record41.set("relatedCareers", ["engineering-manager", "vp-of-engineering", "cto"]);
    record41.set("salaryInsights", "{'trends': 'Strong demand with 12% growth expected', 'growthProjection': 'Consistent opportunities for experienced leaders', 'benefits': 'High salary, stock options, leadership opportunities, strategic impact'}");
    record41.set("roadmap", [{"stage": "Engineering Manager", "duration": "0-2 years", "skills": ["Team management", "Hiring", "Technical decisions"], "salary": 130000}, {"stage": "Director of Engineering", "duration": "2-5 years", "skills": ["Organization leadership", "Strategy", "Budget management"], "salary": 200000}, {"stage": "VP of Engineering", "duration": "5+ years", "skills": ["Executive leadership", "Company strategy", "Board presence"], "salary": 300000}]);
    record41.set("faqs", [{"question": "What's the biggest challenge?", "answer": "Balancing technical excellence with business goals while managing multiple teams."}, {"question": "Do I need to stop coding?", "answer": "Yes, most directors focus on strategy and people rather than coding."}, {"question": "What skills matter most?", "answer": "Leadership, strategic thinking, and communication are critical for success."}]);
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
    record42.set("name", "VP of Engineering");
    record42.set("slug", "vp-of-engineering");
    record42.set("description", "Lead engineering strategy at the executive level, manage budgets, and drive organizational growth.");
    record42.set("overview", "VPs of engineering lead engineering at the executive level. They set company-wide technical strategy and drive innovation.");
    record42.set("averageSalary", 250000);
    record42.set("salaryRange", "{'min': 160000, 'max': 400000}");
    record42.set("jobDemandOutlook", "High");
    record42.set("entrySalary", 160000);
    record42.set("midSalary", 250000);
    record42.set("seniorSalary", 400000);
    record42.set("jobDemand", "High");
    record42.set("skillsRequired", [{"skill": "Executive Leadership", "proficiency": "Advanced"}, {"skill": "Strategic Planning", "proficiency": "Advanced"}, {"skill": "Business Acumen", "proficiency": "Advanced"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Hiring", "proficiency": "Advanced"}, {"skill": "Technical Knowledge", "proficiency": "Advanced"}]);
    record42.set("softSkills", ["Leadership", "Strategic Thinking", "Communication", "Decision Making", "Vision Setting"]);
    record42.set("tools", ["Jira", "Confluence", "Slack", "Greenhouse", "15Five", "Lattice", "Excel"]);
    record42.set("topPayingStates", [{"state": "California", "salary": 300000}, {"state": "New York", "salary": 280000}, {"state": "Washington", "salary": 270000}, {"state": "Massachusetts", "salary": 265000}, {"state": "Colorado", "salary": 260000}]);
    record42.set("relatedCareers", ["director-of-engineering", "cto", "ceo"]);
    record42.set("salaryInsights", "{'trends': 'Strong demand with 12% growth expected', 'growthProjection': 'Consistent opportunities for experienced leaders', 'benefits': 'High salary, stock options, executive benefits, strategic impact'}");
    record42.set("roadmap", [{"stage": "Director of Engineering", "duration": "0-2 years", "skills": ["Organization leadership", "Strategy", "Budget management"], "salary": 160000}, {"stage": "VP of Engineering", "duration": "2-5 years", "skills": ["Executive leadership", "Company strategy", "Board presence"], "salary": 250000}, {"stage": "CTO/Chief Technology Officer", "duration": "5+ years", "skills": ["Company vision", "Executive team", "Board leadership"], "salary": 400000}]);
    record42.set("faqs", [{"question": "What's the biggest challenge?", "answer": "Balancing technical innovation with business goals at the executive level."}, {"question": "Do I need an MBA?", "answer": "Not required, but helpful. Experience and track record matter more."}, {"question": "What skills matter most?", "answer": "Strategic thinking, communication, and business acumen are critical for success."}]);
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
    record43.set("name", "CTO (Chief Technology Officer)");
    record43.set("slug", "cto");
    record43.set("description", "Set company-wide technology strategy, drive innovation, and lead technical vision.");
    record43.set("overview", "CTOs lead technology strategy at the highest level. They set vision, drive innovation, and ensure technical excellence.");
    record43.set("averageSalary", 300000);
    record43.set("salaryRange", "{'min': 200000, 'max': 500000}");
    record43.set("jobDemandOutlook", "High");
    record43.set("entrySalary", 200000);
    record43.set("midSalary", 300000);
    record43.set("seniorSalary", 500000);
    record43.set("jobDemand", "High");
    record43.set("skillsRequired", [{"skill": "Executive Leadership", "proficiency": "Advanced"}, {"skill": "Strategic Vision", "proficiency": "Advanced"}, {"skill": "Business Acumen", "proficiency": "Advanced"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Technical Knowledge", "proficiency": "Advanced"}, {"skill": "Innovation", "proficiency": "Advanced"}]);
    record43.set("softSkills", ["Leadership", "Vision Setting", "Communication", "Decision Making", "Strategic Thinking"]);
    record43.set("tools", ["Strategic planning tools", "Communication platforms", "Analytics tools", "Board presentation tools"]);
    record43.set("topPayingStates", [{"state": "California", "salary": 350000}, {"state": "New York", "salary": 330000}, {"state": "Washington", "salary": 320000}, {"state": "Massachusetts", "salary": 315000}, {"state": "Colorado", "salary": 310000}]);
    record43.set("relatedCareers", ["vp-of-engineering", "ceo", "founder"]);
    record43.set("salaryInsights", "{'trends': 'Strong demand with 12% growth expected', 'growthProjection': 'Consistent opportunities for experienced leaders', 'benefits': 'High salary, stock options, executive benefits, strategic impact'}");
    record43.set("roadmap", [{"stage": "VP of Engineering", "duration": "0-2 years", "skills": ["Executive leadership", "Company strategy", "Board presence"], "salary": 200000}, {"stage": "CTO", "duration": "2-5 years", "skills": ["Company vision", "Executive team", "Board leadership"], "salary": 300000}, {"stage": "Founder/CEO", "duration": "5+ years", "skills": ["Company leadership", "Vision", "Execution"], "salary": 500000}]);
    record43.set("faqs", [{"question": "What's the biggest challenge?", "answer": "Balancing innovation with business goals while leading the entire technology organization."}, {"question": "Do I need an MBA?", "answer": "Not required, but helpful. Experience and track record matter more."}, {"question": "What skills matter most?", "answer": "Vision, strategic thinking, and communication are critical for success."}]);
  try {
    app.save(record43);
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
