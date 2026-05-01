/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerLevels");

  const record0 = new Record(collection);
    record0.set("careerSlug", "software-engineer");
    record0.set("level", "Beginner");
    record0.set("timeline", "6-12 months");
    record0.set("salary", "$55K-$75K");
    record0.set("skills", [{"skill": "Python", "description": "Learn basic syntax and fundamentals", "proficiency": "Beginner"}, {"skill": "JavaScript", "description": "Understand DOM manipulation and basic web development", "proficiency": "Beginner"}, {"skill": "Git", "description": "Version control basics and collaboration", "proficiency": "Beginner"}, {"skill": "HTML/CSS", "description": "Web page structure and styling", "proficiency": "Beginner"}, {"skill": "Problem Solving", "description": "Basic algorithmic thinking", "proficiency": "Beginner"}]);
    record0.set("projects", [{"name": "Todo App", "description": "Build a simple todo list with add/delete functionality", "skillsUsed": ["JavaScript", "HTML/CSS"], "difficulty": "Beginner"}, {"name": "Calculator", "description": "Create a basic calculator with arithmetic operations", "skillsUsed": ["Python", "Problem Solving"], "difficulty": "Beginner"}]);
    record0.set("certifications", [{"name": "Python for Everybody", "issuer": "Coursera", "cost": 39, "duration": "3 months"}, {"name": "The Complete JavaScript Course", "issuer": "Udemy", "cost": 15, "duration": "3 months"}]);
    record0.set("resources", [{"name": "Codecademy", "link": "https://codecademy.com", "type": "Interactive Learning", "platform": "Web", "duration": "Self-paced"}, {"name": "FreeCodeCamp", "link": "https://freecodecamp.org", "type": "Video Tutorials", "platform": "Web", "duration": "Self-paced"}, {"name": "LeetCode Easy Problems", "link": "https://leetcode.com", "type": "Practice Problems", "platform": "Web", "duration": "Self-paced"}]);
    record0.set("jobsAvailable", 2500);
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
    record1.set("careerSlug", "software-engineer");
    record1.set("level", "Intermediate");
    record1.set("timeline", "1-2 years");
    record1.set("salary", "$95K-$130K");
    record1.set("skills", [{"skill": "Java", "description": "Object-oriented programming and design patterns", "proficiency": "Intermediate"}, {"skill": "SQL", "description": "Database design and complex queries", "proficiency": "Intermediate"}, {"skill": "REST APIs", "description": "Design and build RESTful web services", "proficiency": "Intermediate"}, {"skill": "Docker", "description": "Containerization and deployment basics", "proficiency": "Beginner"}, {"skill": "System Design", "description": "Basic architecture and scalability concepts", "proficiency": "Beginner"}]);
    record1.set("projects", [{"name": "E-commerce Backend", "description": "Build a REST API for an e-commerce platform with database", "skillsUsed": ["Java", "SQL", "REST APIs"], "difficulty": "Intermediate"}, {"name": "Microservices Project", "description": "Create multiple services that communicate via APIs", "skillsUsed": ["Docker", "REST APIs", "System Design"], "difficulty": "Intermediate"}]);
    record1.set("certifications", [{"name": "Oracle Certified Associate Java Programmer", "issuer": "Oracle", "cost": 245, "duration": "2 months"}, {"name": "AWS Certified Developer Associate", "issuer": "Amazon", "cost": 300, "duration": "2 months"}]);
    record1.set("resources", [{"name": "System Design Primer", "link": "https://github.com/donnemartin/system-design-primer", "type": "Study Guide", "platform": "GitHub", "duration": "Self-paced"}, {"name": "Design Patterns Course", "link": "https://refactoring.guru", "type": "Interactive Learning", "platform": "Web", "duration": "Self-paced"}, {"name": "LeetCode Medium Problems", "link": "https://leetcode.com", "type": "Practice Problems", "platform": "Web", "duration": "Self-paced"}]);
    record1.set("jobsAvailable", 5000);
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
    record2.set("careerSlug", "software-engineer");
    record2.set("level", "Advanced");
    record2.set("timeline", "3+ years");
    record2.set("salary", "$150K-$250K");
    record2.set("skills", [{"skill": "Kubernetes", "description": "Container orchestration and production deployment", "proficiency": "Advanced"}, {"skill": "Microservices Architecture", "description": "Design and implement distributed systems", "proficiency": "Advanced"}, {"skill": "Cloud Platforms", "description": "AWS, GCP, or Azure expertise", "proficiency": "Advanced"}, {"skill": "Performance Optimization", "description": "Code optimization and system tuning", "proficiency": "Advanced"}, {"skill": "Leadership", "description": "Mentoring and technical decision making", "proficiency": "Intermediate"}]);
    record2.set("projects", [{"name": "Distributed System", "description": "Build a scalable system handling millions of requests", "skillsUsed": ["Kubernetes", "Microservices Architecture", "Cloud Platforms"], "difficulty": "Advanced"}, {"name": "Open Source Contribution", "description": "Contribute to major open source projects", "skillsUsed": ["Leadership", "Performance Optimization"], "difficulty": "Advanced"}]);
    record2.set("certifications", [{"name": "AWS Certified Solutions Architect Professional", "issuer": "Amazon", "cost": 300, "duration": "3 months"}, {"name": "Certified Kubernetes Administrator", "issuer": "CNCF", "cost": 395, "duration": "2 months"}]);
    record2.set("resources", [{"name": "Designing Data-Intensive Applications", "link": "https://dataintensive.net", "type": "Book", "platform": "Print/Digital", "duration": "Self-paced"}, {"name": "LeetCode Hard Problems", "link": "https://leetcode.com", "type": "Practice Problems", "platform": "Web", "duration": "Self-paced"}, {"name": "Advanced System Design", "link": "https://www.educative.io", "type": "Course", "platform": "Web", "duration": "Self-paced"}]);
    record2.set("jobsAvailable", 3000);
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
    record3.set("careerSlug", "data-analyst");
    record3.set("level", "Beginner");
    record3.set("timeline", "3-6 months");
    record3.set("salary", "$50K-$70K");
    record3.set("skills", [{"skill": "Excel", "description": "Pivot tables, formulas, and data visualization", "proficiency": "Beginner"}, {"skill": "SQL", "description": "Basic SELECT queries and joins", "proficiency": "Beginner"}, {"skill": "Google Analytics", "description": "Website traffic and user behavior analysis", "proficiency": "Beginner"}, {"skill": "Data Visualization", "description": "Creating basic charts and dashboards", "proficiency": "Beginner"}, {"skill": "Statistics", "description": "Basic statistical concepts and analysis", "proficiency": "Beginner"}]);
    record3.set("projects", [{"name": "Sales Analysis Dashboard", "description": "Create an Excel dashboard analyzing sales data", "skillsUsed": ["Excel", "Data Visualization"], "difficulty": "Beginner"}, {"name": "Website Analytics Report", "description": "Analyze website traffic using Google Analytics", "skillsUsed": ["Google Analytics", "Statistics"], "difficulty": "Beginner"}]);
    record3.set("certifications", [{"name": "Google Data Analytics Certificate", "issuer": "Google", "cost": 39, "duration": "3 months"}, {"name": "Excel Fundamentals", "issuer": "Udemy", "cost": 15, "duration": "1 month"}]);
    record3.set("resources", [{"name": "Khan Academy Statistics", "link": "https://khanacademy.org", "type": "Video Tutorials", "platform": "Web", "duration": "Self-paced"}, {"name": "SQL Tutorial", "link": "https://sqlzoo.net", "type": "Interactive Learning", "platform": "Web", "duration": "Self-paced"}, {"name": "Excel Tips & Tricks", "link": "https://excelisfun.net", "type": "Video Tutorials", "platform": "YouTube", "duration": "Self-paced"}]);
    record3.set("jobsAvailable", 1500);
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
    record4.set("careerSlug", "data-analyst");
    record4.set("level", "Intermediate");
    record4.set("timeline", "1-2 years");
    record4.set("salary", "$75K-$110K");
    record4.set("skills", [{"skill": "Python", "description": "Data manipulation with pandas and numpy", "proficiency": "Intermediate"}, {"skill": "Tableau", "description": "Advanced dashboard creation and visualization", "proficiency": "Intermediate"}, {"skill": "SQL", "description": "Complex queries, subqueries, and optimization", "proficiency": "Intermediate"}, {"skill": "Statistical Analysis", "description": "Hypothesis testing and regression analysis", "proficiency": "Intermediate"}, {"skill": "Business Acumen", "description": "Understanding business metrics and KPIs", "proficiency": "Intermediate"}]);
    record4.set("projects", [{"name": "Customer Segmentation", "description": "Analyze customer data and create segments for marketing", "skillsUsed": ["Python", "Statistical Analysis"], "difficulty": "Intermediate"}, {"name": "Business Intelligence Dashboard", "description": "Build interactive dashboards in Tableau", "skillsUsed": ["Tableau", "SQL", "Business Acumen"], "difficulty": "Intermediate"}]);
    record4.set("certifications", [{"name": "Microsoft Certified: Data Analyst Associate", "issuer": "Microsoft", "cost": 165, "duration": "2 months"}, {"name": "Tableau Desktop Specialist", "issuer": "Tableau", "cost": 100, "duration": "1 month"}]);
    record4.set("resources", [{"name": "Python for Data Analysis", "link": "https://wesmckinney.com/book/", "type": "Book", "platform": "Print/Digital", "duration": "Self-paced"}, {"name": "Tableau Public Gallery", "link": "https://public.tableau.com", "type": "Learning by Example", "platform": "Web", "duration": "Self-paced"}, {"name": "Statistics Course", "link": "https://www.coursera.org", "type": "Course", "platform": "Web", "duration": "Self-paced"}]);
    record4.set("jobsAvailable", 3000);
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
    record5.set("careerSlug", "data-analyst");
    record5.set("level", "Advanced");
    record5.set("timeline", "3+ years");
    record5.set("salary", "$120K-$180K");
    record5.set("skills", [{"skill": "Advanced SQL", "description": "Window functions, CTEs, and query optimization", "proficiency": "Advanced"}, {"skill": "Machine Learning", "description": "Predictive modeling and classification", "proficiency": "Intermediate"}, {"skill": "Data Engineering", "description": "ETL pipelines and data warehousing", "proficiency": "Intermediate"}, {"skill": "Leadership", "description": "Managing analytics teams and projects", "proficiency": "Intermediate"}, {"skill": "Strategic Thinking", "description": "Translating data into business strategy", "proficiency": "Advanced"}]);
    record5.set("projects", [{"name": "Predictive Analytics Model", "description": "Build a machine learning model for business prediction", "skillsUsed": ["Machine Learning", "Advanced SQL"], "difficulty": "Advanced"}, {"name": "Data Warehouse Design", "description": "Design and implement a data warehouse", "skillsUsed": ["Data Engineering", "Strategic Thinking"], "difficulty": "Advanced"}]);
    record5.set("certifications", [{"name": "Google Cloud Professional Data Engineer", "issuer": "Google", "cost": 200, "duration": "3 months"}, {"name": "AWS Certified Data Analytics Specialty", "issuer": "Amazon", "cost": 300, "duration": "3 months"}]);
    record5.set("resources", [{"name": "Advanced SQL Techniques", "link": "https://www.educative.io", "type": "Course", "platform": "Web", "duration": "Self-paced"}, {"name": "Machine Learning Specialization", "link": "https://www.coursera.org", "type": "Course", "platform": "Web", "duration": "Self-paced"}, {"name": "Data Warehouse Design", "link": "https://www.udemy.com", "type": "Course", "platform": "Web", "duration": "Self-paced"}]);
    record5.set("jobsAvailable", 1500);
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
    record6.set("careerSlug", "devops-engineer");
    record6.set("level", "Beginner");
    record6.set("timeline", "6-12 months");
    record6.set("salary", "$70K-$95K");
    record6.set("skills", [{"skill": "Linux", "description": "Command line basics and system administration", "proficiency": "Beginner"}, {"skill": "Docker", "description": "Container basics and image creation", "proficiency": "Beginner"}, {"skill": "Git", "description": "Version control and collaboration", "proficiency": "Beginner"}, {"skill": "Bash Scripting", "description": "Basic shell scripting and automation", "proficiency": "Beginner"}, {"skill": "Cloud Basics", "description": "Introduction to AWS or GCP", "proficiency": "Beginner"}]);
    record6.set("projects", [{"name": "Docker Application", "description": "Containerize a simple application", "skillsUsed": ["Docker", "Linux"], "difficulty": "Beginner"}, {"name": "Bash Automation Script", "description": "Create scripts to automate common tasks", "skillsUsed": ["Bash Scripting", "Linux"], "difficulty": "Beginner"}]);
    record6.set("certifications", [{"name": "Linux Fundamentals", "issuer": "Linux Academy", "cost": 300, "duration": "2 months"}, {"name": "Docker Essentials", "issuer": "Docker", "cost": 0, "duration": "1 month"}]);
    record6.set("resources", [{"name": "Linux Command Line Basics", "link": "https://linuxcommand.org", "type": "Tutorial", "platform": "Web", "duration": "Self-paced"}, {"name": "Docker Getting Started", "link": "https://docker.com/get-started", "type": "Interactive Learning", "platform": "Web", "duration": "Self-paced"}, {"name": "Bash Scripting Guide", "link": "https://www.gnu.org/software/bash/manual/", "type": "Documentation", "platform": "Web", "duration": "Self-paced"}]);
    record6.set("jobsAvailable", 1200);
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
    record7.set("careerSlug", "devops-engineer");
    record7.set("level", "Intermediate");
    record7.set("timeline", "1-2 years");
    record7.set("salary", "$110K-$160K");
    record7.set("skills", [{"skill": "Kubernetes", "description": "Container orchestration and deployment", "proficiency": "Intermediate"}, {"skill": "CI/CD", "description": "Jenkins, GitLab CI, or GitHub Actions", "proficiency": "Intermediate"}, {"skill": "AWS", "description": "EC2, S3, RDS, and other core services", "proficiency": "Intermediate"}, {"skill": "Infrastructure as Code", "description": "Terraform or CloudFormation", "proficiency": "Intermediate"}, {"skill": "Monitoring", "description": "Prometheus, ELK stack, or Datadog", "proficiency": "Beginner"}]);
    record7.set("projects", [{"name": "Kubernetes Deployment", "description": "Deploy and manage applications on Kubernetes", "skillsUsed": ["Kubernetes", "Docker"], "difficulty": "Intermediate"}, {"name": "CI/CD Pipeline", "description": "Build automated deployment pipeline", "skillsUsed": ["CI/CD", "Git"], "difficulty": "Intermediate"}]);
    record7.set("certifications", [{"name": "AWS Certified DevOps Engineer Associate", "issuer": "Amazon", "cost": 300, "duration": "2 months"}, {"name": "Certified Kubernetes Administrator", "issuer": "CNCF", "cost": 395, "duration": "2 months"}]);
    record7.set("resources", [{"name": "Kubernetes Documentation", "link": "https://kubernetes.io/docs", "type": "Documentation", "platform": "Web", "duration": "Self-paced"}, {"name": "Terraform Learning Path", "link": "https://learn.hashicorp.com", "type": "Course", "platform": "Web", "duration": "Self-paced"}, {"name": "AWS DevOps Course", "link": "https://www.udemy.com", "type": "Course", "platform": "Web", "duration": "Self-paced"}]);
    record7.set("jobsAvailable", 2500);
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
    record8.set("careerSlug", "devops-engineer");
    record8.set("level", "Advanced");
    record8.set("timeline", "3+ years");
    record8.set("salary", "$170K-$250K");
    record8.set("skills", [{"skill": "Advanced Kubernetes", "description": "Custom operators and advanced networking", "proficiency": "Advanced"}, {"skill": "Cloud Architecture", "description": "Designing scalable cloud solutions", "proficiency": "Advanced"}, {"skill": "Security", "description": "Container security and compliance", "proficiency": "Advanced"}, {"skill": "Performance Tuning", "description": "Optimizing infrastructure and applications", "proficiency": "Advanced"}, {"skill": "Leadership", "description": "Managing DevOps teams", "proficiency": "Intermediate"}]);
    record8.set("projects", [{"name": "Multi-Cloud Infrastructure", "description": "Design infrastructure across multiple cloud providers", "skillsUsed": ["Cloud Architecture", "Advanced Kubernetes"], "difficulty": "Advanced"}, {"name": "Security Implementation", "description": "Implement comprehensive security measures", "skillsUsed": ["Security", "Leadership"], "difficulty": "Advanced"}]);
    record8.set("certifications", [{"name": "AWS Certified Solutions Architect Professional", "issuer": "Amazon", "cost": 300, "duration": "3 months"}, {"name": "Certified Kubernetes Security Specialist", "issuer": "CNCF", "cost": 395, "duration": "2 months"}]);
    record8.set("resources", [{"name": "Advanced Kubernetes Patterns", "link": "https://www.oreilly.com", "type": "Book", "platform": "Print/Digital", "duration": "Self-paced"}, {"name": "Cloud Architecture Design", "link": "https://www.educative.io", "type": "Course", "platform": "Web", "duration": "Self-paced"}, {"name": "Container Security", "link": "https://www.coursera.org", "type": "Course", "platform": "Web", "duration": "Self-paced"}]);
    record8.set("jobsAvailable", 1500);
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
    record9.set("careerSlug", "product-manager");
    record9.set("level", "Beginner");
    record9.set("timeline", "6-12 months");
    record9.set("salary", "$80K-$110K");
    record9.set("skills", [{"skill": "Product Strategy", "description": "Understanding product vision and roadmap", "proficiency": "Beginner"}, {"skill": "User Research", "description": "Conducting user interviews and surveys", "proficiency": "Beginner"}, {"skill": "Data Analysis", "description": "Analyzing product metrics and KPIs", "proficiency": "Beginner"}, {"skill": "Communication", "description": "Presenting ideas to stakeholders", "proficiency": "Beginner"}, {"skill": "Agile", "description": "Understanding Scrum and sprint planning", "proficiency": "Beginner"}]);
    record9.set("projects", [{"name": "Product Roadmap", "description": "Create a 6-month product roadmap", "skillsUsed": ["Product Strategy", "Communication"], "difficulty": "Beginner"}, {"name": "User Research Study", "description": "Conduct user interviews and synthesize findings", "skillsUsed": ["User Research", "Data Analysis"], "difficulty": "Beginner"}]);
    record9.set("certifications", [{"name": "Reforge Product Management", "issuer": "Reforge", "cost": 2000, "duration": "4 weeks"}, {"name": "Product School Certification", "issuer": "Product School", "cost": 1500, "duration": "4 weeks"}]);
    record9.set("resources", [{"name": "Inspired by Marty Cagan", "link": "https://www.svpg.com", "type": "Book", "platform": "Print/Digital", "duration": "Self-paced"}, {"name": "Product Management Fundamentals", "link": "https://www.coursera.org", "type": "Course", "platform": "Web", "duration": "Self-paced"}, {"name": "User Research Methods", "link": "https://www.nngroup.com", "type": "Course", "platform": "Web", "duration": "Self-paced"}]);
    record9.set("jobsAvailable", 800);
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
    record10.set("careerSlug", "product-manager");
    record10.set("level", "Intermediate");
    record10.set("timeline", "1-2 years");
    record10.set("salary", "$120K-$170K");
    record10.set("skills", [{"skill": "Advanced Strategy", "description": "Competitive analysis and market positioning", "proficiency": "Intermediate"}, {"skill": "Metrics & Analytics", "description": "Advanced analytics and experimentation", "proficiency": "Intermediate"}, {"skill": "Stakeholder Management", "description": "Managing complex stakeholder relationships", "proficiency": "Intermediate"}, {"skill": "Technical Understanding", "description": "Understanding technical constraints and possibilities", "proficiency": "Intermediate"}, {"skill": "Leadership", "description": "Influencing without authority", "proficiency": "Intermediate"}]);
    record10.set("projects", [{"name": "Feature Launch", "description": "Lead a feature from conception to launch", "skillsUsed": ["Advanced Strategy", "Stakeholder Management"], "difficulty": "Intermediate"}, {"name": "A/B Testing Program", "description": "Design and run experimentation program", "skillsUsed": ["Metrics & Analytics", "Leadership"], "difficulty": "Intermediate"}]);
    record10.set("certifications", [{"name": "Reforge Advanced Product Management", "issuer": "Reforge", "cost": 2000, "duration": "4 weeks"}, {"name": "Pragmatic Marketing Certification", "issuer": "Pragmatic Institute", "cost": 2500, "duration": "3 days"}]);
    record10.set("resources", [{"name": "Lean Product Playbook", "link": "https://www.leanproductplaybook.com", "type": "Book", "platform": "Print/Digital", "duration": "Self-paced"}, {"name": "Advanced Product Strategy", "link": "https://www.reforge.com", "type": "Course", "platform": "Web", "duration": "Self-paced"}, {"name": "Experimentation Course", "link": "https://www.coursera.org", "type": "Course", "platform": "Web", "duration": "Self-paced"}]);
    record10.set("jobsAvailable", 1200);
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
    record11.set("careerSlug", "product-manager");
    record11.set("level", "Advanced");
    record11.set("timeline", "3+ years");
    record11.set("salary", "$180K-$280K");
    record11.set("skills", [{"skill": "Strategic Vision", "description": "Setting long-term product direction", "proficiency": "Advanced"}, {"skill": "Business Acumen", "description": "Understanding business models and financials", "proficiency": "Advanced"}, {"skill": "Organizational Leadership", "description": "Leading product teams and initiatives", "proficiency": "Advanced"}, {"skill": "Market Expertise", "description": "Deep understanding of market dynamics", "proficiency": "Advanced"}, {"skill": "Executive Communication", "description": "Communicating with C-level executives", "proficiency": "Advanced"}]);
    record11.set("projects", [{"name": "Product Line Extension", "description": "Launch a new product line or market", "skillsUsed": ["Strategic Vision", "Business Acumen"], "difficulty": "Advanced"}, {"name": "Organizational Transformation", "description": "Lead product organization restructuring", "skillsUsed": ["Organizational Leadership", "Executive Communication"], "difficulty": "Advanced"}]);
    record11.set("certifications", [{"name": "Executive Product Management", "issuer": "Reforge", "cost": 2000, "duration": "4 weeks"}, {"name": "MBA or equivalent", "issuer": "Various", "cost": 50000, "duration": "2 years"}]);
    record11.set("resources", [{"name": "Good Strategy Bad Strategy", "link": "https://www.amazon.com", "type": "Book", "platform": "Print/Digital", "duration": "Self-paced"}, {"name": "Executive Leadership Course", "link": "https://www.coursera.org", "type": "Course", "platform": "Web", "duration": "Self-paced"}, {"name": "Strategic Thinking Workshop", "link": "https://www.reforge.com", "type": "Workshop", "platform": "Web", "duration": "Self-paced"}]);
    record11.set("jobsAvailable", 600);
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
    record12.set("careerSlug", "ux-designer");
    record12.set("level", "Beginner");
    record12.set("timeline", "6-12 months");
    record12.set("salary", "$55K-$80K");
    record12.set("skills", [{"skill": "Figma", "description": "Basic design and prototyping", "proficiency": "Beginner"}, {"skill": "User Research", "description": "Conducting user interviews and surveys", "proficiency": "Beginner"}, {"skill": "Wireframing", "description": "Creating low-fidelity wireframes", "proficiency": "Beginner"}, {"skill": "Design Principles", "description": "Understanding UX/UI fundamentals", "proficiency": "Beginner"}, {"skill": "Communication", "description": "Presenting designs to stakeholders", "proficiency": "Beginner"}]);
    record12.set("projects", [{"name": "Mobile App Redesign", "description": "Redesign a mobile app interface", "skillsUsed": ["Figma", "Wireframing"], "difficulty": "Beginner"}, {"name": "User Research Project", "description": "Conduct user research and create personas", "skillsUsed": ["User Research", "Communication"], "difficulty": "Beginner"}]);
    record12.set("certifications", [{"name": "Google UX Design Certificate", "issuer": "Google", "cost": 39, "duration": "6 months"}, {"name": "Figma Fundamentals", "issuer": "Udemy", "cost": 15, "duration": "1 month"}]);
    record12.set("resources", [{"name": "Don't Make Me Think", "link": "https://www.amazon.com", "type": "Book", "platform": "Print/Digital", "duration": "Self-paced"}, {"name": "UX Design Fundamentals", "link": "https://www.nngroup.com", "type": "Course", "platform": "Web", "duration": "Self-paced"}, {"name": "Figma Tutorials", "link": "https://www.figma.com/resources", "type": "Video Tutorials", "platform": "Web", "duration": "Self-paced"}]);
    record12.set("jobsAvailable", 1000);
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
    record13.set("careerSlug", "ux-designer");
    record13.set("level", "Intermediate");
    record13.set("timeline", "1-2 years");
    record13.set("salary", "$85K-$130K");
    record13.set("skills", [{"skill": "Advanced Figma", "description": "Complex prototypes and design systems", "proficiency": "Intermediate"}, {"skill": "Usability Testing", "description": "Conducting and analyzing usability tests", "proficiency": "Intermediate"}, {"skill": "Information Architecture", "description": "Designing information structures", "proficiency": "Intermediate"}, {"skill": "Accessibility", "description": "Designing for accessibility standards", "proficiency": "Intermediate"}, {"skill": "Analytics", "description": "Understanding user behavior data", "proficiency": "Beginner"}]);
    record13.set("projects", [{"name": "Design System", "description": "Create a comprehensive design system", "skillsUsed": ["Advanced Figma", "Information Architecture"], "difficulty": "Intermediate"}, {"name": "Usability Testing Study", "description": "Conduct and analyze usability tests", "skillsUsed": ["Usability Testing", "Analytics"], "difficulty": "Intermediate"}]);
    record13.set("certifications", [{"name": "Nielsen Norman UX Certification", "issuer": "Nielsen Norman Group", "cost": 2000, "duration": "1 week"}, {"name": "Advanced UX Design", "link": "https://www.interaction-design.org", "type": "Course", "platform": "Web", "duration": "Self-paced"}]);
    record13.set("resources", [{"name": "The Design of Everyday Things", "link": "https://www.amazon.com", "type": "Book", "platform": "Print/Digital", "duration": "Self-paced"}, {"name": "Advanced UX Research", "link": "https://www.nngroup.com", "type": "Course", "platform": "Web", "duration": "Self-paced"}, {"name": "Accessibility Guidelines", "link": "https://www.w3.org/WAI", "type": "Documentation", "platform": "Web", "duration": "Self-paced"}]);
    record13.set("jobsAvailable", 1500);
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
    record14.set("careerSlug", "ux-designer");
    record14.set("level", "Advanced");
    record14.set("timeline", "3+ years");
    record14.set("salary", "$140K-$220K");
    record14.set("skills", [{"skill": "Strategic Design", "description": "Aligning design with business strategy", "proficiency": "Advanced"}, {"skill": "Design Leadership", "description": "Leading design teams and initiatives", "proficiency": "Advanced"}, {"skill": "Advanced Research", "description": "Conducting advanced user research", "proficiency": "Advanced"}, {"skill": "Product Thinking", "description": "Understanding product strategy", "proficiency": "Advanced"}, {"skill": "Organizational Impact", "description": "Driving organizational change through design", "proficiency": "Advanced"}]);
    record14.set("projects", [{"name": "Product Strategy Design", "description": "Lead design for new product strategy", "skillsUsed": ["Strategic Design", "Product Thinking"], "difficulty": "Advanced"}, {"name": "Design Organization", "description": "Build and lead design organization", "skillsUsed": ["Design Leadership", "Organizational Impact"], "difficulty": "Advanced"}]);
    record14.set("certifications", [{"name": "Executive Design Leadership", "issuer": "Various", "cost": 5000, "duration": "3 months"}, {"name": "Strategic Design Thinking", "link": "https://www.interaction-design.org", "type": "Course", "platform": "Web", "duration": "Self-paced"}]);
    record14.set("resources", [{"name": "Designing for Growth", "link": "https://www.amazon.com", "type": "Book", "platform": "Print/Digital", "duration": "Self-paced"}, {"name": "Design Strategy Course", "link": "https://www.nngroup.com", "type": "Course", "platform": "Web", "duration": "Self-paced"}, {"name": "Leadership in Design", "link": "https://www.interaction-design.org", "type": "Course", "platform": "Web", "duration": "Self-paced"}]);
    record14.set("jobsAvailable", 800);
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
    record15.set("careerSlug", "frontend-developer");
    record15.set("level", "Beginner");
    record15.set("timeline", "3-6 months");
    record15.set("salary", "$50K-$75K");
    record15.set("skills", [{"skill": "HTML/CSS", "description": "Web page structure and styling", "proficiency": "Beginner"}, {"skill": "JavaScript", "description": "DOM manipulation and basic interactivity", "proficiency": "Beginner"}, {"skill": "Responsive Design", "description": "Mobile-first and responsive layouts", "proficiency": "Beginner"}, {"skill": "Git", "description": "Version control basics", "proficiency": "Beginner"}, {"skill": "Browser DevTools", "description": "Debugging and inspecting elements", "proficiency": "Beginner"}]);
    record15.set("projects", [{"name": "Personal Portfolio", "description": "Build a responsive portfolio website", "skillsUsed": ["HTML/CSS", "Responsive Design"], "difficulty": "Beginner"}, {"name": "Interactive Website", "description": "Create a website with JavaScript interactions", "skillsUsed": ["JavaScript", "HTML/CSS"], "difficulty": "Beginner"}]);
    record15.set("certifications", [{"name": "Meta Front-End Developer Certificate", "issuer": "Meta", "cost": 39, "duration": "3 months"}, {"name": "HTML/CSS Fundamentals", "issuer": "Udemy", "cost": 15, "duration": "1 month"}]);
    record15.set("resources", [{"name": "MDN Web Docs", "link": "https://developer.mozilla.org", "type": "Documentation", "platform": "Web", "duration": "Self-paced"}, {"name": "FreeCodeCamp Frontend", "link": "https://freecodecamp.org", "type": "Video Tutorials", "platform": "Web", "duration": "Self-paced"}, {"name": "CSS Tricks", "link": "https://css-tricks.com", "type": "Blog/Tutorials", "platform": "Web", "duration": "Self-paced"}]);
    record15.set("jobsAvailable", 2000);
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
    record16.set("careerSlug", "frontend-developer");
    record16.set("level", "Intermediate");
    record16.set("timeline", "1-2 years");
    record16.set("salary", "$85K-$130K");
    record16.set("skills", [{"skill": "React", "description": "Component-based development and hooks", "proficiency": "Intermediate"}, {"skill": "TypeScript", "description": "Type-safe JavaScript development", "proficiency": "Intermediate"}, {"skill": "State Management", "description": "Redux or Context API", "proficiency": "Intermediate"}, {"skill": "REST APIs", "description": "Consuming APIs and data fetching", "proficiency": "Intermediate"}, {"skill": "Testing", "description": "Unit and integration testing", "proficiency": "Beginner"}]);
    record16.set("projects", [{"name": "React Application", "description": "Build a multi-page React application", "skillsUsed": ["React", "State Management"], "difficulty": "Intermediate"}, {"name": "API Integration", "description": "Integrate with REST APIs and handle data", "skillsUsed": ["REST APIs", "React"], "difficulty": "Intermediate"}]);
    record16.set("certifications", [{"name": "React Developer Certification", "issuer": "Udemy", "cost": 15, "duration": "2 months"}, {"name": "TypeScript Fundamentals", "issuer": "Udemy", "cost": 15, "duration": "1 month"}]);
    record16.set("resources", [{"name": "React Official Documentation", "link": "https://react.dev", "type": "Documentation", "platform": "Web", "duration": "Self-paced"}, {"name": "Advanced React Patterns", "link": "https://www.epicreact.dev", "type": "Course", "platform": "Web", "duration": "Self-paced"}, {"name": "Testing React Applications", "link": "https://www.testingjavascript.com", "type": "Course", "platform": "Web", "duration": "Self-paced"}]);
    record16.set("jobsAvailable", 3500);
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
    record17.set("careerSlug", "frontend-developer");
    record17.set("level", "Advanced");
    record17.set("timeline", "3+ years");
    record17.set("salary", "$140K-$220K");
    record17.set("skills", [{"skill": "Advanced React", "description": "Performance optimization and advanced patterns", "proficiency": "Advanced"}, {"skill": "Web Performance", "description": "Optimization and monitoring", "proficiency": "Advanced"}, {"skill": "Accessibility", "description": "WCAG compliance and accessible design", "proficiency": "Advanced"}, {"skill": "System Design", "description": "Designing scalable frontend architecture", "proficiency": "Advanced"}, {"skill": "Leadership", "description": "Mentoring and technical decisions", "proficiency": "Intermediate"}]);
    record17.set("projects", [{"name": "High-Performance Application", "description": "Build a highly optimized frontend application", "skillsUsed": ["Advanced React", "Web Performance"], "difficulty": "Advanced"}, {"name": "Design System", "description": "Create a comprehensive design system", "skillsUsed": ["System Design", "Leadership"], "difficulty": "Advanced"}]);
    record17.set("certifications", [{"name": "Advanced React Patterns", "issuer": "Epic React", "cost": 300, "duration": "2 months"}, {"name": "Web Performance Optimization", "link": "https://www.udemy.com", "type": "Course", "platform": "Web", "duration": "Self-paced"}]);
    record17.set("resources", [{"name": "High Performance JavaScript", "link": "https://www.amazon.com", "type": "Book", "platform": "Print/Digital", "duration": "Self-paced"}, {"name": "Web Accessibility Course", "link": "https://www.nngroup.com", "type": "Course", "platform": "Web", "duration": "Self-paced"}, {"name": "Frontend Architecture", "link": "https://www.educative.io", "type": "Course", "platform": "Web", "duration": "Self-paced"}]);
    record17.set("jobsAvailable", 2000);
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
    record18.set("careerSlug", "backend-developer");
    record18.set("level", "Beginner");
    record18.set("timeline", "6-12 months");
    record18.set("salary", "$55K-$80K");
    record18.set("skills", [{"skill": "Python", "description": "Basic syntax and fundamentals", "proficiency": "Beginner"}, {"skill": "SQL", "description": "Basic queries and database design", "proficiency": "Beginner"}, {"skill": "REST APIs", "description": "Building simple APIs", "proficiency": "Beginner"}, {"skill": "Git", "description": "Version control basics", "proficiency": "Beginner"}, {"skill": "HTTP", "description": "Understanding HTTP protocols", "proficiency": "Beginner"}]);
    record18.set("projects", [{"name": "Simple API", "description": "Build a basic REST API", "skillsUsed": ["Python", "REST APIs"], "difficulty": "Beginner"}, {"name": "Database Design", "description": "Design and create a database schema", "skillsUsed": ["SQL", "Database Design"], "difficulty": "Beginner"}]);
    record18.set("certifications", [{"name": "Python for Everybody", "issuer": "Coursera", "cost": 39, "duration": "3 months"}, {"name": "SQL Fundamentals", "issuer": "Udemy", "cost": 15, "duration": "1 month"}]);
    record18.set("resources", [{"name": "Python Official Documentation", "link": "https://python.org", "type": "Documentation", "platform": "Web", "duration": "Self-paced"}, {"name": "SQL Tutorial", "link": "https://sqlzoo.net", "type": "Interactive Learning", "platform": "Web", "duration": "Self-paced"}, {"name": "REST API Design", "link": "https://restfulapi.net", "type": "Guide", "platform": "Web", "duration": "Self-paced"}]);
    record18.set("jobsAvailable", 1800);
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
    record19.set("careerSlug", "backend-developer");
    record19.set("level", "Intermediate");
    record19.set("timeline", "1-2 years");
    record19.set("salary", "$90K-$140K");
    record19.set("skills", [{"skill": "Java", "description": "Object-oriented programming and design patterns", "proficiency": "Intermediate"}, {"skill": "Advanced SQL", "description": "Complex queries and optimization", "proficiency": "Intermediate"}, {"skill": "Database Design", "description": "Normalization and schema design", "proficiency": "Intermediate"}, {"skill": "Caching", "description": "Redis and caching strategies", "proficiency": "Beginner"}, {"skill": "Testing", "description": "Unit and integration testing", "proficiency": "Intermediate"}]);
    record19.set("projects", [{"name": "Scalable API", "description": "Build a scalable REST API with database", "skillsUsed": ["Java", "Advanced SQL"], "difficulty": "Intermediate"}, {"name": "Microservice", "description": "Create a microservice with caching", "skillsUsed": ["Caching", "Testing"], "difficulty": "Intermediate"}]);
    record19.set("certifications", [{"name": "Oracle Certified Associate Java Programmer", "issuer": "Oracle", "cost": 245, "duration": "2 months"}, {"name": "AWS Certified Developer Associate", "issuer": "Amazon", "cost": 300, "duration": "2 months"}]);
    record19.set("resources", [{"name": "Effective Java", "link": "https://www.amazon.com", "type": "Book", "platform": "Print/Digital", "duration": "Self-paced"}, {"name": "Database Design Course", "link": "https://www.coursera.org", "type": "Course", "platform": "Web", "duration": "Self-paced"}, {"name": "Testing Best Practices", "link": "https://www.udemy.com", "type": "Course", "platform": "Web", "duration": "Self-paced"}]);
    record19.set("jobsAvailable", 3000);
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
    record20.set("careerSlug", "backend-developer");
    record20.set("level", "Advanced");
    record20.set("timeline", "3+ years");
    record20.set("salary", "$150K-$240K");
    record20.set("skills", [{"skill": "System Design", "description": "Designing scalable distributed systems", "proficiency": "Advanced"}, {"skill": "Performance Optimization", "description": "Query optimization and caching strategies", "proficiency": "Advanced"}, {"skill": "Cloud Platforms", "description": "AWS, GCP, or Azure expertise", "proficiency": "Advanced"}, {"skill": "Security", "description": "Application security and data protection", "proficiency": "Advanced"}, {"skill": "Leadership", "description": "Mentoring and technical decisions", "proficiency": "Intermediate"}]);
    record20.set("projects", [{"name": "Distributed System", "description": "Design a system handling millions of requests", "skillsUsed": ["System Design", "Performance Optimization"], "difficulty": "Advanced"}, {"name": "Secure Application", "description": "Build a secure backend application", "skillsUsed": ["Security", "Cloud Platforms"], "difficulty": "Advanced"}]);
    record20.set("certifications", [{"name": "AWS Certified Solutions Architect Professional", "issuer": "Amazon", "cost": 300, "duration": "3 months"}, {"name": "System Design Mastery", "link": "https://www.educative.io", "type": "Course", "platform": "Web", "duration": "Self-paced"}]);
    record20.set("resources", [{"name": "Designing Data-Intensive Applications", "link": "https://dataintensive.net", "type": "Book", "platform": "Print/Digital", "duration": "Self-paced"}, {"name": "Advanced System Design", "link": "https://www.educative.io", "type": "Course", "platform": "Web", "duration": "Self-paced"}, {"name": "Security Best Practices", "link": "https://www.coursera.org", "type": "Course", "platform": "Web", "duration": "Self-paced"}]);
    record20.set("jobsAvailable", 2000);
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
    record21.set("careerSlug", "full-stack-developer");
    record21.set("level", "Beginner");
    record21.set("timeline", "6-12 months");
    record21.set("salary", "$60K-$85K");
    record21.set("skills", [{"skill": "JavaScript", "description": "Core language for frontend and backend", "proficiency": "Beginner"}, {"skill": "HTML/CSS", "description": "Web page structure and styling", "proficiency": "Beginner"}, {"skill": "Node.js", "description": "JavaScript runtime for backend", "proficiency": "Beginner"}, {"skill": "MongoDB", "description": "NoSQL database basics", "proficiency": "Beginner"}, {"skill": "Git", "description": "Version control basics", "proficiency": "Beginner"}]);
    record21.set("projects", [{"name": "MERN Todo App", "description": "Build a full-stack todo application", "skillsUsed": ["JavaScript", "Node.js", "MongoDB"], "difficulty": "Beginner"}, {"name": "Personal Blog", "description": "Create a blog with frontend and backend", "skillsUsed": ["HTML/CSS", "Node.js"], "difficulty": "Beginner"}]);
    record21.set("certifications", [{"name": "The Complete JavaScript Course", "issuer": "Udemy", "cost": 15, "duration": "3 months"}, {"name": "MERN Stack Basics", "issuer": "Udemy", "cost": 15, "duration": "2 months"}]);
    record21.set("resources", [{"name": "JavaScript.info", "link": "https://javascript.info", "type": "Tutorial", "platform": "Web", "duration": "Self-paced"}, {"name": "Node.js Documentation", "link": "https://nodejs.org", "type": "Documentation", "platform": "Web", "duration": "Self-paced"}, {"name": "MongoDB University", "link": "https://university.mongodb.com", "type": "Course", "platform": "Web", "duration": "Self-paced"}]);
    record21.set("jobsAvailable", 1500);
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
    record22.set("careerSlug", "full-stack-developer");
    record22.set("level", "Intermediate");
    record22.set("timeline", "1-2 years");
    record22.set("salary", "$100K-$150K");
    record22.set("skills", [{"skill": "React", "description": "Frontend framework and state management", "proficiency": "Intermediate"}, {"skill": "Express.js", "description": "Backend framework for Node.js", "proficiency": "Intermediate"}, {"skill": "SQL", "description": "Relational database design and queries", "proficiency": "Intermediate"}, {"skill": "REST APIs", "description": "Building and consuming APIs", "proficiency": "Intermediate"}, {"skill": "Deployment", "description": "Deploying applications to cloud", "proficiency": "Beginner"}]);
    record22.set("projects", [{"name": "Full-Stack Application", "description": "Build a complete web application", "skillsUsed": ["React", "Express.js", "SQL"], "difficulty": "Intermediate"}, {"name": "Cloud Deployment", "description": "Deploy application to AWS or Heroku", "skillsUsed": ["Deployment", "REST APIs"], "difficulty": "Intermediate"}]);
    record22.set("certifications", [{"name": "MERN Stack Specialization", "issuer": "Coursera", "cost": 39, "duration": "4 months"}, {"name": "AWS Certified Developer Associate", "issuer": "Amazon", "cost": 300, "duration": "2 months"}]);
    record22.set("resources", [{"name": "React Official Documentation", "link": "https://react.dev", "type": "Documentation", "platform": "Web", "duration": "Self-paced"}, {"name": "Express.js Guide", "link": "https://expressjs.com", "type": "Documentation", "platform": "Web", "duration": "Self-paced"}, {"name": "Full-Stack Development Course", "link": "https://www.coursera.org", "type": "Course", "platform": "Web", "duration": "Self-paced"}]);
    record22.set("jobsAvailable", 2500);
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
    record23.set("careerSlug", "full-stack-developer");
    record23.set("level", "Advanced");
    record23.set("timeline", "3+ years");
    record23.set("salary", "$160K-$250K");
    record23.set("skills", [{"skill": "Advanced Architecture", "description": "Designing scalable full-stack systems", "proficiency": "Advanced"}, {"skill": "DevOps", "description": "CI/CD and infrastructure management", "proficiency": "Intermediate"}, {"skill": "Performance", "description": "Frontend and backend optimization", "proficiency": "Advanced"}, {"skill": "Security", "description": "Application and data security", "proficiency": "Advanced"}, {"skill": "Leadership", "description": "Mentoring and technical decisions", "proficiency": "Intermediate"}]);
    record23.set("projects", [{"name": "Scalable Platform", "description": "Build a scalable full-stack platform", "skillsUsed": ["Advanced Architecture", "Performance"], "difficulty": "Advanced"}, {"name": "DevOps Implementation", "description": "Implement CI/CD and infrastructure", "skillsUsed": ["DevOps", "Security"], "difficulty": "Advanced"}]);
    record23.set("certifications", [{"name": "AWS Certified Solutions Architect Professional", "issuer": "Amazon", "cost": 300, "duration": "3 months"}, {"name": "Advanced Full-Stack Development", "link": "https://www.educative.io", "type": "Course", "platform": "Web", "duration": "Self-paced"}]);
    record23.set("resources", [{"name": "Designing Data-Intensive Applications", "link": "https://dataintensive.net", "type": "Book", "platform": "Print/Digital", "duration": "Self-paced"}, {"name": "Full-Stack Architecture", "link": "https://www.educative.io", "type": "Course", "platform": "Web", "duration": "Self-paced"}, {"name": "DevOps for Developers", "link": "https://www.coursera.org", "type": "Course", "platform": "Web", "duration": "Self-paced"}]);
    record23.set("jobsAvailable", 1800);
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
    record24.set("careerSlug", "machine-learning-engineer");
    record24.set("level", "Beginner");
    record24.set("timeline", "6-12 months");
    record24.set("salary", "$80K-$120K");
    record24.set("skills", [{"skill": "Python", "description": "Core language for ML development", "proficiency": "Beginner"}, {"skill": "Statistics", "description": "Basic statistical concepts", "proficiency": "Beginner"}, {"skill": "Scikit-learn", "description": "Machine learning library basics", "proficiency": "Beginner"}, {"skill": "Data Preprocessing", "description": "Cleaning and preparing data", "proficiency": "Beginner"}, {"skill": "Jupyter Notebooks", "description": "Interactive development environment", "proficiency": "Beginner"}]);
    record24.set("projects", [{"name": "Classification Model", "description": "Build a classification model with Scikit-learn", "skillsUsed": ["Python", "Scikit-learn"], "difficulty": "Beginner"}, {"name": "Data Analysis", "description": "Analyze and visualize datasets", "skillsUsed": ["Data Preprocessing", "Statistics"], "difficulty": "Beginner"}]);
    record24.set("certifications", [{"name": "Andrew Ng's Machine Learning Course", "issuer": "Coursera", "cost": 39, "duration": "3 months"}, {"name": "Python for Data Science", "issuer": "Udemy", "cost": 15, "duration": "2 months"}]);
    record24.set("resources", [{"name": "Scikit-learn Documentation", "link": "https://scikit-learn.org", "type": "Documentation", "platform": "Web", "duration": "Self-paced"}, {"name": "Statistics Fundamentals", "link": "https://www.khanacademy.org", "type": "Video Tutorials", "platform": "Web", "duration": "Self-paced"}, {"name": "ML Basics Course", "link": "https://www.coursera.org", "type": "Course", "platform": "Web", "duration": "Self-paced"}]);
    record24.set("jobsAvailable", 1200);
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
    record25.set("careerSlug", "machine-learning-engineer");
    record25.set("level", "Intermediate");
    record25.set("timeline", "1-2 years");
    record25.set("salary", "$130K-$190K");
    record25.set("skills", [{"skill": "TensorFlow", "description": "Deep learning framework", "proficiency": "Intermediate"}, {"skill": "PyTorch", "description": "Deep learning framework", "proficiency": "Intermediate"}, {"skill": "Neural Networks", "description": "Understanding and building neural networks", "proficiency": "Intermediate"}, {"skill": "Model Evaluation", "description": "Metrics and validation techniques", "proficiency": "Intermediate"}, {"skill": "Feature Engineering", "description": "Creating and selecting features", "proficiency": "Intermediate"}]);
    record25.set("projects", [{"name": "Deep Learning Model", "description": "Build a neural network with TensorFlow", "skillsUsed": ["TensorFlow", "Neural Networks"], "difficulty": "Intermediate"}, {"name": "ML Pipeline", "description": "Create end-to-end ML pipeline", "skillsUsed": ["Feature Engineering", "Model Evaluation"], "difficulty": "Intermediate"}]);
    record25.set("certifications", [{"name": "TensorFlow Developer Certificate", "issuer": "Google", "cost": 100, "duration": "2 months"}, {"name": "Deep Learning Specialization", "issuer": "Coursera", "cost": 39, "duration": "4 months"}]);
    record25.set("resources", [{"name": "TensorFlow Documentation", "link": "https://tensorflow.org", "type": "Documentation", "platform": "Web", "duration": "Self-paced"}, {"name": "Deep Learning Course", "link": "https://www.deeplearning.ai", "type": "Course", "platform": "Web", "duration": "Self-paced"}, {"name": "PyTorch Tutorials", "link": "https://pytorch.org", "type": "Documentation", "platform": "Web", "duration": "Self-paced"}]);
    record25.set("jobsAvailable", 2000);
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
    record26.set("careerSlug", "machine-learning-engineer");
    record26.set("level", "Advanced");
    record26.set("timeline", "3+ years");
    record26.set("salary", "$200K-$300K");
    record26.set("skills", [{"skill": "Advanced Deep Learning", "description": "Transformers, GANs, and advanced architectures", "proficiency": "Advanced"}, {"skill": "MLOps", "description": "Model deployment and monitoring", "proficiency": "Advanced"}, {"skill": "Research", "description": "Understanding and implementing research papers", "proficiency": "Advanced"}, {"skill": "Optimization", "description": "Model optimization and efficiency", "proficiency": "Advanced"}, {"skill": "Leadership", "description": "Leading ML teams and projects", "proficiency": "Intermediate"}]);
    record26.set("projects", [{"name": "Production ML System", "description": "Build a production ML system with MLOps", "skillsUsed": ["MLOps", "Advanced Deep Learning"], "difficulty": "Advanced"}, {"name": "Research Implementation", "description": "Implement cutting-edge ML research", "skillsUsed": ["Research", "Optimization"], "difficulty": "Advanced"}]);
    record26.set("certifications", [{"name": "Google Cloud Professional Machine Learning Engineer", "issuer": "Google", "cost": 200, "duration": "3 months"}, {"name": "AWS Certified Machine Learning Specialty", "issuer": "Amazon", "cost": 300, "duration": "3 months"}]);
    record26.set("resources", [{"name": "Attention is All You Need", "link": "https://arxiv.org", "type": "Research Paper", "platform": "Web", "duration": "Self-paced"}, {"name": "MLOps Course", "link": "https://www.coursera.org", "type": "Course", "platform": "Web", "duration": "Self-paced"}, {"name": "Advanced ML Systems", "link": "https://www.educative.io", "type": "Course", "platform": "Web", "duration": "Self-paced"}]);
    record26.set("jobsAvailable", 1500);
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
    record27.set("careerSlug", "cloud-architect");
    record27.set("level", "Beginner");
    record27.set("timeline", "6-12 months");
    record27.set("salary", "$85K-$120K");
    record27.set("skills", [{"skill": "AWS Basics", "description": "EC2, S3, RDS fundamentals", "proficiency": "Beginner"}, {"skill": "Cloud Concepts", "description": "Understanding cloud architecture principles", "proficiency": "Beginner"}, {"skill": "Networking", "description": "VPC and basic networking", "proficiency": "Beginner"}, {"skill": "Security Basics", "description": "IAM and basic security", "proficiency": "Beginner"}, {"skill": "Cost Management", "description": "Understanding cloud costs", "proficiency": "Beginner"}]);
    record27.set("projects", [{"name": "Simple AWS Setup", "description": "Deploy a basic application on AWS", "skillsUsed": ["AWS Basics", "Networking"], "difficulty": "Beginner"}, {"name": "Security Implementation", "description": "Implement basic security measures", "skillsUsed": ["Security Basics", "IAM"], "difficulty": "Beginner"}]);
    record27.set("certifications", [{"name": "AWS Certified Cloud Practitioner", "issuer": "Amazon", "cost": 100, "duration": "1 month"}, {"name": "AWS Certified Solutions Architect Associate", "issuer": "Amazon", "cost": 300, "duration": "2 months"}]);
    record27.set("resources", [{"name": "AWS Documentation", "link": "https://aws.amazon.com/documentation", "type": "Documentation", "platform": "Web", "duration": "Self-paced"}, {"name": "AWS Fundamentals", "link": "https://www.coursera.org", "type": "Course", "platform": "Web", "duration": "Self-paced"}, {"name": "Cloud Architecture Basics", "link": "https://www.udemy.com", "type": "Course", "platform": "Web", "duration": "Self-paced"}]);
    record27.set("jobsAvailable", 1000);
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
    record28.set("careerSlug", "cloud-architect");
    record28.set("level", "Intermediate");
    record28.set("timeline", "1-2 years");
    record28.set("salary", "$130K-$190K");
    record28.set("skills", [{"skill": "Advanced AWS", "description": "Lambda, RDS, DynamoDB, and advanced services", "proficiency": "Intermediate"}, {"skill": "Multi-Cloud", "description": "Azure and Google Cloud basics", "proficiency": "Beginner"}, {"skill": "Infrastructure as Code", "description": "Terraform and CloudFormation", "proficiency": "Intermediate"}, {"skill": "Disaster Recovery", "description": "Backup and recovery strategies", "proficiency": "Intermediate"}, {"skill": "Performance", "description": "Optimization and monitoring", "proficiency": "Intermediate"}]);
    record28.set("projects", [{"name": "Scalable Architecture", "description": "Design a scalable cloud architecture", "skillsUsed": ["Advanced AWS", "Infrastructure as Code"], "difficulty": "Intermediate"}, {"name": "Disaster Recovery Plan", "description": "Implement disaster recovery solution", "skillsUsed": ["Disaster Recovery", "Performance"], "difficulty": "Intermediate"}]);
    record28.set("certifications", [{"name": "AWS Certified Solutions Architect Professional", "issuer": "Amazon", "cost": 300, "duration": "3 months"}, {"name": "Terraform Associate", "issuer": "HashiCorp", "cost": 70, "duration": "1 month"}]);
    record28.set("resources", [{"name": "AWS Well-Architected Framework", "link": "https://aws.amazon.com/architecture/well-architected", "type": "Guide", "platform": "Web", "duration": "Self-paced"}, {"name": "Advanced AWS Course", "link": "https://www.coursera.org", "type": "Course", "platform": "Web", "duration": "Self-paced"}, {"name": "Infrastructure as Code", "link": "https://learn.hashicorp.com", "type": "Course", "platform": "Web", "duration": "Self-paced"}]);
    record28.set("jobsAvailable", 1800);
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
    record29.set("careerSlug", "cloud-architect");
    record29.set("level", "Advanced");
    record29.set("timeline", "3+ years");
    record29.set("salary", "$200K-$300K");
    record29.set("skills", [{"skill": "Enterprise Architecture", "description": "Designing enterprise-scale solutions", "proficiency": "Advanced"}, {"skill": "Security Architecture", "description": "Comprehensive security design", "proficiency": "Advanced"}, {"skill": "Cost Optimization", "description": "Advanced cost management strategies", "proficiency": "Advanced"}, {"skill": "Compliance", "description": "Regulatory compliance and standards", "proficiency": "Advanced"}, {"skill": "Leadership", "description": "Leading architecture teams", "proficiency": "Advanced"}]);
    record29.set("projects", [{"name": "Enterprise Cloud Migration", "description": "Lead enterprise migration to cloud", "skillsUsed": ["Enterprise Architecture", "Compliance"], "difficulty": "Advanced"}, {"name": "Security Architecture", "description": "Design comprehensive security architecture", "skillsUsed": ["Security Architecture", "Leadership"], "difficulty": "Advanced"}]);
    record29.set("certifications", [{"name": "AWS Certified Solutions Architect Professional", "issuer": "Amazon", "cost": 300, "duration": "3 months"}, {"name": "TOGAF Enterprise Architecture", "issuer": "The Open Group", "cost": 500, "duration": "2 months"}]);
    record29.set("resources", [{"name": "Enterprise Architecture Patterns", "link": "https://www.oreilly.com", "type": "Book", "platform": "Print/Digital", "duration": "Self-paced"}, {"name": "Advanced Cloud Architecture", "link": "https://www.educative.io", "type": "Course", "platform": "Web", "duration": "Self-paced"}, {"name": "Cloud Security Design", "link": "https://www.coursera.org", "type": "Course", "platform": "Web", "duration": "Self-paced"}]);
    record29.set("jobsAvailable", 1200);
  try {
    app.save(record29);
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
