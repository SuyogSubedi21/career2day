/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
    record0.set("name", "Software Engineer");
    record0.set("slug", "software-engineer");
    record0.set("description", "Develops, tests, and maintains software applications and systems");
    record0.set("overview", "Software engineers design and build applications that solve real-world problems. They work with various programming languages and frameworks to create scalable, efficient solutions.");
    record0.set("jobDemand", "Very High");
    record0.set("entrySalary", 85000);
    record0.set("midSalary", 130000);
    record0.set("seniorSalary", 180000);
    record0.set("topStates", [{"state": "California", "salary": 195000}, {"state": "New York", "salary": 165000}, {"state": "Washington", "salary": 175000}, {"state": "Massachusetts", "salary": 160000}, {"state": "Texas", "salary": 145000}]);
    record0.set("technicalSkills", [{"skill": "Python", "proficiency": "Advanced"}, {"skill": "Java", "proficiency": "Advanced"}, {"skill": "JavaScript", "proficiency": "Advanced"}, {"skill": "SQL", "proficiency": "Intermediate"}, {"skill": "Git", "proficiency": "Advanced"}, {"skill": "REST APIs", "proficiency": "Advanced"}, {"skill": "Docker", "proficiency": "Intermediate"}, {"skill": "Kubernetes", "proficiency": "Intermediate"}]);
    record0.set("softSkills", ["Problem Solving", "Communication", "Teamwork", "Time Management", "Adaptability"]);
    record0.set("tools", ["Git", "Docker", "Jenkins", "JIRA", "VS Code", "IntelliJ IDEA", "Postman", "AWS"]);
    record0.set("certifications", [{"name": "AWS Certified Solutions Architect", "issuer": "Amazon", "cost": 300, "duration": "3 months"}, {"name": "Google Cloud Professional", "issuer": "Google", "cost": 200, "duration": "2 months"}, {"name": "Azure Developer Associate", "issuer": "Microsoft", "cost": 165, "duration": "2 months"}]);
    record0.set("faqs", [{"question": "What programming languages should I learn?", "answer": "Start with Python or JavaScript, then learn Java or C++. Focus on one language deeply before learning others."}, {"question": "How long does it take to become a software engineer?", "answer": "Typically 4 years for a degree, or 6-12 months for bootcamp graduates. Continuous learning is essential."}, {"question": "What's the difference between frontend and backend?", "answer": "Frontend handles user interface and experience, backend handles server logic and databases."}, {"question": "Do I need a computer science degree?", "answer": "Not necessarily. Many successful engineers come from bootcamps or self-taught backgrounds."}, {"question": "What's the job market like?", "answer": "Very strong demand with competitive salaries. Remote work is common in this field."}, {"question": "How important is data structures and algorithms?", "answer": "Very important for interviews and writing efficient code. Practice regularly."}]);
    record0.set("relatedCareers", ["frontend-developer", "backend-developer", "full-stack-developer"]);
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
    record1.set("description", "Analyzes data to help organizations make informed business decisions");
    record1.set("overview", "Data analysts collect, process, and analyze data to identify trends and insights. They use statistical tools and visualization techniques to communicate findings to stakeholders.");
    record1.set("jobDemand", "High");
    record1.set("entrySalary", 65000);
    record1.set("midSalary", 95000);
    record1.set("seniorSalary", 135000);
    record1.set("topStates", [{"state": "New York", "salary": 125000}, {"state": "California", "salary": 130000}, {"state": "Texas", "salary": 105000}, {"state": "Illinois", "salary": 100000}, {"state": "Massachusetts", "salary": 115000}]);
    record1.set("technicalSkills", [{"skill": "SQL", "proficiency": "Advanced"}, {"skill": "Python", "proficiency": "Advanced"}, {"skill": "Excel", "proficiency": "Advanced"}, {"skill": "Tableau", "proficiency": "Intermediate"}, {"skill": "Power BI", "proficiency": "Intermediate"}, {"skill": "Statistics", "proficiency": "Advanced"}, {"skill": "R", "proficiency": "Intermediate"}, {"skill": "Google Analytics", "proficiency": "Intermediate"}]);
    record1.set("softSkills", ["Data Visualization", "Communication", "Critical Thinking", "Attention to Detail", "Business Acumen"]);
    record1.set("tools", ["SQL", "Python", "Tableau", "Power BI", "Excel", "Google Analytics", "Looker", "Jupyter"]);
    record1.set("certifications", [{"name": "Google Data Analytics Certificate", "issuer": "Google", "cost": 39, "duration": "3 months"}, {"name": "Microsoft Certified: Data Analyst Associate", "issuer": "Microsoft", "cost": 165, "duration": "2 months"}, {"name": "Tableau Desktop Specialist", "issuer": "Tableau", "cost": 100, "duration": "1 month"}]);
    record1.set("faqs", [{"question": "What's the difference between data analyst and data scientist?", "answer": "Analysts focus on business insights from existing data, while scientists build predictive models and algorithms."}, {"question": "Do I need a math background?", "answer": "Statistics knowledge is helpful but not required. You can learn it on the job."}, {"question": "What tools should I learn first?", "answer": "Start with SQL and Excel, then move to Python and visualization tools like Tableau."}, {"question": "How much programming is involved?", "answer": "Moderate programming, mainly SQL and Python. Less than software engineers."}, {"question": "What's the career growth path?", "answer": "Can advance to Senior Analyst, Analytics Manager, or transition to Data Science."}, {"question": "Is remote work common?", "answer": "Yes, many companies offer remote positions for data analysts."}]);
    record1.set("relatedCareers", ["business-analyst", "data-scientist", "machine-learning-engineer"]);
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
    record2.set("description", "Manages infrastructure, deployment, and operations for software systems");
    record2.set("overview", "DevOps engineers bridge development and operations, automating deployment processes and managing cloud infrastructure. They ensure systems are reliable, scalable, and secure.");
    record2.set("jobDemand", "Very High");
    record2.set("entrySalary", 90000);
    record2.set("midSalary", 140000);
    record2.set("seniorSalary", 190000);
    record2.set("topStates", [{"state": "California", "salary": 200000}, {"state": "New York", "salary": 170000}, {"state": "Washington", "salary": 185000}, {"state": "Colorado", "salary": 155000}, {"state": "Massachusetts", "salary": 165000}]);
    record2.set("technicalSkills", [{"skill": "Docker", "proficiency": "Advanced"}, {"skill": "Kubernetes", "proficiency": "Advanced"}, {"skill": "AWS", "proficiency": "Advanced"}, {"skill": "CI/CD", "proficiency": "Advanced"}, {"skill": "Linux", "proficiency": "Advanced"}, {"skill": "Terraform", "proficiency": "Intermediate"}, {"skill": "Jenkins", "proficiency": "Intermediate"}, {"skill": "Python", "proficiency": "Intermediate"}]);
    record2.set("softSkills", ["Problem Solving", "Communication", "Automation Mindset", "Reliability Focus", "Continuous Learning"]);
    record2.set("tools", ["Docker", "Kubernetes", "AWS", "Jenkins", "GitLab CI", "Terraform", "Ansible", "Prometheus"]);
    record2.set("certifications", [{"name": "AWS Certified DevOps Engineer", "issuer": "Amazon", "cost": 300, "duration": "3 months"}, {"name": "Certified Kubernetes Administrator", "issuer": "CNCF", "cost": 395, "duration": "2 months"}, {"name": "HashiCorp Certified: Terraform Associate", "issuer": "HashiCorp", "cost": 70, "duration": "1 month"}]);
    record2.set("faqs", [{"question": "What's the difference between DevOps and SysAdmin?", "answer": "DevOps focuses on automation and CI/CD, while SysAdmins manage infrastructure manually."}, {"question": "Do I need to be a software engineer first?", "answer": "Not required, but understanding software development helps significantly."}, {"question": "What cloud platform should I learn?", "answer": "AWS is most popular, but Google Cloud and Azure are also valuable."}, {"question": "How important is Linux knowledge?", "answer": "Very important. Most servers run Linux, so strong Linux skills are essential."}, {"question": "What's the learning curve?", "answer": "Steep but rewarding. Expect 6-12 months to become proficient."}, {"question": "Is this a good career choice?", "answer": "Excellent choice with high demand and competitive salaries."}]);
    record2.set("relatedCareers", ["software-engineer", "cloud-architect", "systems-administrator"]);
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
    record3.set("description", "Defines product strategy, roadmap, and features based on market and user needs");
    record3.set("overview", "Product managers act as the bridge between customers, engineering, and business. They define product vision, prioritize features, and ensure successful product launches.");
    record3.set("jobDemand", "High");
    record3.set("entrySalary", 95000);
    record3.set("midSalary", 150000);
    record3.set("seniorSalary", 210000);
    record3.set("topStates", [{"state": "California", "salary": 220000}, {"state": "New York", "salary": 180000}, {"state": "Washington", "salary": 175000}, {"state": "Massachusetts", "salary": 165000}, {"state": "Texas", "salary": 155000}]);
    record3.set("technicalSkills", [{"skill": "Product Strategy", "proficiency": "Advanced"}, {"skill": "Data Analysis", "proficiency": "Advanced"}, {"skill": "User Research", "proficiency": "Advanced"}, {"skill": "SQL", "proficiency": "Intermediate"}, {"skill": "Analytics Tools", "proficiency": "Intermediate"}, {"skill": "Wireframing", "proficiency": "Intermediate"}, {"skill": "Agile", "proficiency": "Advanced"}, {"skill": "Technical Understanding", "proficiency": "Intermediate"}]);
    record3.set("softSkills", ["Leadership", "Communication", "Strategic Thinking", "Stakeholder Management", "Empathy"]);
    record3.set("tools", ["Jira", "Figma", "Mixpanel", "Amplitude", "Google Analytics", "Slack", "Confluence", "Asana"]);
    record3.set("certifications", [{"name": "Reforge Product Management", "issuer": "Reforge", "cost": 2000, "duration": "4 weeks"}, {"name": "Pragmatic Marketing Certification", "issuer": "Pragmatic Institute", "cost": 2500, "duration": "3 days"}, {"name": "Product School Certification", "issuer": "Product School", "cost": 1500, "duration": "4 weeks"}]);
    record3.set("faqs", [{"question": "Do I need an MBA?", "answer": "Not required. Many PMs come from engineering, design, or business backgrounds."}, {"question": "What's the typical career path?", "answer": "Often start as Associate PM, then PM, Senior PM, and potentially Director or VP."}, {"question": "How much technical knowledge do I need?", "answer": "Enough to understand feasibility and communicate with engineers effectively."}, {"question": "What's the work-life balance?", "answer": "Can be demanding, especially during product launches and crises."}, {"question": "How do I transition into PM?", "answer": "Build product sense, learn analytics, and take on PM-like responsibilities in current role."}, {"question": "What's the salary progression?", "answer": "Strong growth potential, especially at tech companies and startups."}]);
    record3.set("relatedCareers", ["product-owner", "business-analyst", "growth-hacker"]);
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
    record4.set("description", "Designs user experiences and interfaces for digital products");
    record4.set("overview", "UX designers research user needs, create wireframes and prototypes, and conduct usability testing. They ensure products are intuitive, accessible, and delightful to use.");
    record4.set("jobDemand", "High");
    record4.set("entrySalary", 70000);
    record4.set("midSalary", 110000);
    record4.set("seniorSalary", 155000);
    record4.set("topStates", [{"state": "California", "salary": 165000}, {"state": "New York", "salary": 140000}, {"state": "Washington", "salary": 135000}, {"state": "Massachusetts", "salary": 130000}, {"state": "Texas", "salary": 115000}]);
    record4.set("technicalSkills", [{"skill": "Figma", "proficiency": "Advanced"}, {"skill": "User Research", "proficiency": "Advanced"}, {"skill": "Wireframing", "proficiency": "Advanced"}, {"skill": "Prototyping", "proficiency": "Advanced"}, {"skill": "Usability Testing", "proficiency": "Intermediate"}, {"skill": "Information Architecture", "proficiency": "Advanced"}, {"skill": "HTML/CSS", "proficiency": "Intermediate"}, {"skill": "Analytics", "proficiency": "Intermediate"}]);
    record4.set("softSkills", ["Empathy", "Communication", "Creativity", "Problem Solving", "Collaboration"]);
    record4.set("tools", ["Figma", "Adobe XD", "Sketch", "Framer", "Miro", "UserTesting", "Hotjar", "Maze"]);
    record4.set("certifications", [{"name": "Google UX Design Certificate", "issuer": "Google", "cost": 39, "duration": "6 months"}, {"name": "Nielsen Norman UX Certification", "issuer": "Nielsen Norman Group", "cost": 2000, "duration": "1 week"}, {"name": "Interaction Design Foundation Certificate", "issuer": "IDF", "cost": 0, "duration": "3 months"}]);
    record4.set("faqs", [{"question": "Do I need a design degree?", "answer": "Not required. Many UX designers come from various backgrounds with strong portfolios."}, {"question": "What's the difference between UX and UI?", "answer": "UX focuses on user experience and research, UI focuses on visual design and interface."}, {"question": "How important is coding?", "answer": "Not required, but understanding HTML/CSS helps communicate with developers."}, {"question": "What should my portfolio include?", "answer": "Case studies showing your process, research, and design decisions."}, {"question": "How do I get my first UX job?", "answer": "Build a strong portfolio, take online courses, and practice with real projects."}, {"question": "What's the career growth?", "answer": "Can advance to Senior Designer, Design Lead, or Design Manager."}]);
    record4.set("relatedCareers", ["frontend-developer", "product-manager", "graphic-designer"]);
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
    record5.set("name", "Frontend Developer");
    record5.set("slug", "frontend-developer");
    record5.set("description", "Builds user interfaces and client-side applications using web technologies");
    record5.set("overview", "Frontend developers create the visual and interactive parts of websites and applications. They use HTML, CSS, and JavaScript to build responsive, accessible interfaces.");
    record5.set("jobDemand", "Very High");
    record5.set("entrySalary", 80000);
    record5.set("midSalary", 125000);
    record5.set("seniorSalary", 170000);
    record5.set("topStates", [{"state": "California", "salary": 185000}, {"state": "New York", "salary": 155000}, {"state": "Washington", "salary": 165000}, {"state": "Massachusetts", "salary": 150000}, {"state": "Texas", "salary": 135000}]);
    record5.set("technicalSkills", [{"skill": "JavaScript", "proficiency": "Advanced"}, {"skill": "React", "proficiency": "Advanced"}, {"skill": "HTML/CSS", "proficiency": "Advanced"}, {"skill": "TypeScript", "proficiency": "Intermediate"}, {"skill": "Vue.js", "proficiency": "Intermediate"}, {"skill": "REST APIs", "proficiency": "Intermediate"}, {"skill": "Git", "proficiency": "Advanced"}, {"skill": "Responsive Design", "proficiency": "Advanced"}]);
    record5.set("softSkills", ["Attention to Detail", "Communication", "Problem Solving", "Creativity", "Collaboration"]);
    record5.set("tools", ["React", "Vue.js", "Angular", "Webpack", "Babel", "Git", "Chrome DevTools", "Figma"]);
    record5.set("certifications", [{"name": "Meta Front-End Developer Certificate", "issuer": "Meta", "cost": 39, "duration": "3 months"}, {"name": "Google Front-End Web Developer Certificate", "issuer": "Google", "cost": 39, "duration": "3 months"}, {"name": "freeCodeCamp Responsive Web Design", "issuer": "freeCodeCamp", "cost": 0, "duration": "3 months"}]);
    record5.set("faqs", [{"question": "What framework should I learn first?", "answer": "React is most popular, but Vue.js is easier to learn. Choose based on job market in your area."}, {"question": "Do I need to know backend?", "answer": "Not required, but understanding APIs and databases helps."}, {"question": "How important is CSS?", "answer": "Very important. Strong CSS skills are essential for frontend development."}, {"question": "What's the learning curve?", "answer": "Moderate. You can become productive in 3-6 months with consistent practice."}, {"question": "Is this a good entry-level career?", "answer": "Yes, many bootcamps focus on frontend development."}, {"question": "What's the job market like?", "answer": "Excellent demand with many remote opportunities."}]);
    record5.set("relatedCareers", ["backend-developer", "full-stack-developer", "ux-designer"]);
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
    record6.set("name", "Backend Developer");
    record6.set("slug", "backend-developer");
    record6.set("description", "Builds server-side logic, databases, and APIs for applications");
    record6.set("overview", "Backend developers create the server infrastructure that powers applications. They work with databases, APIs, and business logic to ensure applications run smoothly.");
    record6.set("jobDemand", "Very High");
    record6.set("entrySalary", 85000);
    record6.set("midSalary", 130000);
    record6.set("seniorSalary", 180000);
    record6.set("topStates", [{"state": "California", "salary": 190000}, {"state": "New York", "salary": 160000}, {"state": "Washington", "salary": 175000}, {"state": "Massachusetts", "salary": 155000}, {"state": "Texas", "salary": 140000}]);
    record6.set("technicalSkills", [{"skill": "Python", "proficiency": "Advanced"}, {"skill": "Java", "proficiency": "Advanced"}, {"skill": "SQL", "proficiency": "Advanced"}, {"skill": "REST APIs", "proficiency": "Advanced"}, {"skill": "Node.js", "proficiency": "Intermediate"}, {"skill": "Database Design", "proficiency": "Advanced"}, {"skill": "Git", "proficiency": "Advanced"}, {"skill": "Docker", "proficiency": "Intermediate"}]);
    record6.set("softSkills", ["Problem Solving", "Attention to Detail", "Communication", "Debugging Skills", "System Thinking"]);
    record6.set("tools", ["Python", "Java", "Node.js", "PostgreSQL", "MongoDB", "Git", "Postman", "Docker"]);
    record6.set("certifications", [{"name": "Oracle Certified Associate Java Programmer", "issuer": "Oracle", "cost": 245, "duration": "2 months"}, {"name": "AWS Certified Developer Associate", "issuer": "Amazon", "cost": 300, "duration": "2 months"}, {"name": "MongoDB Certified Developer", "issuer": "MongoDB", "cost": 150, "duration": "1 month"}]);
    record6.set("faqs", [{"question": "What language should I learn?", "answer": "Python or Java are good starts. Choose based on job market and personal preference."}, {"question": "How important is database knowledge?", "answer": "Very important. Strong SQL and database design skills are essential."}, {"question": "Do I need to know frontend?", "answer": "Not required, but understanding how frontend consumes APIs helps."}, {"question": "What's the difference between SQL and NoSQL?", "answer": "SQL is relational and structured, NoSQL is flexible and scalable. Learn both."}, {"question": "How do I debug backend issues?", "answer": "Use logging, monitoring tools, and understand your framework's debugging capabilities."}, {"question": "What's the career progression?", "answer": "Can advance to Senior Developer, Tech Lead, or Architect."}]);
    record6.set("relatedCareers", ["frontend-developer", "full-stack-developer", "devops-engineer"]);
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
    record7.set("name", "Full Stack Developer");
    record7.set("slug", "full-stack-developer");
    record7.set("description", "Develops both frontend and backend components of web applications");
    record7.set("overview", "Full stack developers work across the entire application stack, from user interface to database. They have broad knowledge of multiple technologies and can build complete applications.");
    record7.set("jobDemand", "Very High");
    record7.set("entrySalary", 88000);
    record7.set("midSalary", 135000);
    record7.set("seniorSalary", 185000);
    record7.set("topStates", [{"state": "California", "salary": 195000}, {"state": "New York", "salary": 165000}, {"state": "Washington", "salary": 180000}, {"state": "Massachusetts", "salary": 160000}, {"state": "Texas", "salary": 145000}]);
    record7.set("technicalSkills", [{"skill": "JavaScript", "proficiency": "Advanced"}, {"skill": "React", "proficiency": "Advanced"}, {"skill": "Node.js", "proficiency": "Advanced"}, {"skill": "SQL", "proficiency": "Advanced"}, {"skill": "MongoDB", "proficiency": "Intermediate"}, {"skill": "REST APIs", "proficiency": "Advanced"}, {"skill": "Git", "proficiency": "Advanced"}, {"skill": "Docker", "proficiency": "Intermediate"}]);
    record7.set("softSkills", ["Versatility", "Problem Solving", "Communication", "Time Management", "Continuous Learning"]);
    record7.set("tools", ["JavaScript", "React", "Node.js", "Express", "MongoDB", "PostgreSQL", "Git", "Docker"]);
    record7.set("certifications", [{"name": "The Complete JavaScript Course", "issuer": "Udemy", "cost": 15, "duration": "3 months"}, {"name": "MERN Stack Specialization", "issuer": "Coursera", "cost": 39, "duration": "4 months"}, {"name": "Full Stack Web Development Bootcamp", "issuer": "Various", "cost": 15000, "duration": "12 weeks"}]);
    record7.set("faqs", [{"question": "Is full stack development harder than specializing?", "answer": "It requires broader knowledge but allows more flexibility and independence."}, {"question": "What's the best tech stack to learn?", "answer": "MERN (MongoDB, Express, React, Node.js) is popular and in-demand."}, {"question": "Can I specialize later?", "answer": "Yes, many full stack developers specialize in frontend or backend later."}, {"question": "What's the salary compared to specialists?", "answer": "Similar to specialists, sometimes higher due to versatility."}, {"question": "How long to become proficient?", "answer": "6-12 months with consistent practice and projects."}, {"question": "Is this good for startups?", "answer": "Excellent choice for startups where versatility is valued."}]);
    record7.set("relatedCareers", ["frontend-developer", "backend-developer", "software-engineer"]);
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
    record8.set("name", "Machine Learning Engineer");
    record8.set("slug", "machine-learning-engineer");
    record8.set("description", "Develops and deploys machine learning models and AI systems");
    record8.set("overview", "ML engineers build, train, and deploy machine learning models. They work with data scientists and engineers to create intelligent systems that learn from data.");
    record8.set("jobDemand", "Very High");
    record8.set("entrySalary", 110000);
    record8.set("midSalary", 160000);
    record8.set("seniorSalary", 220000);
    record8.set("topStates", [{"state": "California", "salary": 240000}, {"state": "New York", "salary": 190000}, {"state": "Washington", "salary": 210000}, {"state": "Massachusetts", "salary": 185000}, {"state": "Texas", "salary": 170000}]);
    record8.set("technicalSkills", [{"skill": "Python", "proficiency": "Advanced"}, {"skill": "TensorFlow", "proficiency": "Advanced"}, {"skill": "PyTorch", "proficiency": "Advanced"}, {"skill": "SQL", "proficiency": "Advanced"}, {"skill": "Statistics", "proficiency": "Advanced"}, {"skill": "Deep Learning", "proficiency": "Advanced"}, {"skill": "Git", "proficiency": "Advanced"}, {"skill": "Cloud Platforms", "proficiency": "Intermediate"}]);
    record8.set("softSkills", ["Mathematical Thinking", "Problem Solving", "Communication", "Experimentation", "Attention to Detail"]);
    record8.set("tools", ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Jupyter", "Git", "AWS", "Google Cloud"]);
    record8.set("certifications", [{"name": "Google Cloud Professional Machine Learning Engineer", "issuer": "Google", "cost": 200, "duration": "3 months"}, {"name": "AWS Certified Machine Learning Specialty", "issuer": "Amazon", "cost": 300, "duration": "3 months"}, {"name": "Andrew Ng's Machine Learning Specialization", "issuer": "Coursera", "cost": 39, "duration": "3 months"}]);
    record8.set("faqs", [{"question": "Do I need a PhD?", "answer": "Not required. Many ML engineers have bachelor's degrees or bootcamp training."}, {"question": "What's the difference between ML engineer and data scientist?", "answer": "ML engineers focus on production systems, data scientists focus on research and analysis."}, {"question": "How important is math?", "answer": "Very important. Strong linear algebra and statistics knowledge is essential."}, {"question": "What frameworks should I learn?", "answer": "TensorFlow and PyTorch are most popular. Learn both."}, {"question": "How do I get started?", "answer": "Learn Python, statistics, and take online ML courses. Build projects."}, {"question": "What's the job market?", "answer": "Excellent demand with very competitive salaries."}]);
    record8.set("relatedCareers", ["data-analyst", "data-scientist", "software-engineer"]);
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
    record9.set("name", "Cloud Architect");
    record9.set("slug", "cloud-architect");
    record9.set("description", "Designs and manages cloud infrastructure and solutions");
    record9.set("overview", "Cloud architects design scalable, secure, and cost-effective cloud solutions. They work with teams to migrate systems to the cloud and optimize cloud infrastructure.");
    record9.set("jobDemand", "Very High");
    record9.set("entrySalary", 110000);
    record9.set("midSalary", 160000);
    record9.set("seniorSalary", 220000);
    record9.set("topStates", [{"state": "California", "salary": 230000}, {"state": "New York", "salary": 185000}, {"state": "Washington", "salary": 205000}, {"state": "Massachusetts", "salary": 180000}, {"state": "Texas", "salary": 165000}]);
    record9.set("technicalSkills", [{"skill": "AWS", "proficiency": "Advanced"}, {"skill": "Azure", "proficiency": "Advanced"}, {"skill": "Google Cloud", "proficiency": "Intermediate"}, {"skill": "Networking", "proficiency": "Advanced"}, {"skill": "Security", "proficiency": "Advanced"}, {"skill": "Infrastructure as Code", "proficiency": "Advanced"}, {"skill": "Kubernetes", "proficiency": "Intermediate"}, {"skill": "Database Design", "proficiency": "Advanced"}]);
    record9.set("softSkills", ["Strategic Thinking", "Communication", "Problem Solving", "Leadership", "Business Acumen"]);
    record9.set("tools", ["AWS", "Azure", "Terraform", "CloudFormation", "Kubernetes", "Docker", "Networking Tools", "Security Tools"]);
    record9.set("certifications", [{"name": "AWS Certified Solutions Architect Professional", "issuer": "Amazon", "cost": 300, "duration": "3 months"}, {"name": "Microsoft Certified: Azure Solutions Architect Expert", "issuer": "Microsoft", "cost": 165, "duration": "2 months"}, {"name": "Google Cloud Architect Certification", "issuer": "Google", "cost": 200, "duration": "3 months"}]);
    record9.set("faqs", [{"question": "Do I need to be a DevOps engineer first?", "answer": "Not required, but DevOps experience is very helpful."}, {"question": "Which cloud platform should I focus on?", "answer": "AWS is most popular, but learn multiple platforms."}, {"question": "How important is networking knowledge?", "answer": "Very important. Strong networking fundamentals are essential."}, {"question": "What's the typical career path?", "answer": "Often start as DevOps engineer, then Solutions Architect, then Cloud Architect."}, {"question": "How do I transition into this role?", "answer": "Get cloud certifications, build cloud projects, and gain hands-on experience."}, {"question": "What's the salary potential?", "answer": "Excellent, with strong growth potential and consulting opportunities."}]);
    record9.set("relatedCareers", ["devops-engineer", "systems-administrator", "security-engineer"]);
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
    record10.set("name", "Security Engineer");
    record10.set("slug", "security-engineer");
    record10.set("description", "Protects systems and data from security threats and vulnerabilities");
    record10.set("overview", "Security engineers design and implement security measures to protect systems, networks, and data. They conduct security audits, implement security protocols, and respond to security incidents.");
    record10.set("jobDemand", "Very High");
    record10.set("entrySalary", 95000);
    record10.set("midSalary", 145000);
    record10.set("seniorSalary", 200000);
    record10.set("topStates", [{"state": "California", "salary": 210000}, {"state": "New York", "salary": 175000}, {"state": "Washington", "salary": 190000}, {"state": "Massachusetts", "salary": 170000}, {"state": "Texas", "salary": 155000}]);
    record10.set("technicalSkills", [{"skill": "Network Security", "proficiency": "Advanced"}, {"skill": "Cryptography", "proficiency": "Advanced"}, {"skill": "Penetration Testing", "proficiency": "Advanced"}, {"skill": "Linux", "proficiency": "Advanced"}, {"skill": "Python", "proficiency": "Intermediate"}, {"skill": "Cloud Security", "proficiency": "Advanced"}, {"skill": "Incident Response", "proficiency": "Advanced"}, {"skill": "Compliance", "proficiency": "Intermediate"}]);
    record10.set("softSkills", ["Attention to Detail", "Problem Solving", "Communication", "Vigilance", "Continuous Learning"]);
    record10.set("tools", ["Wireshark", "Metasploit", "Burp Suite", "Nessus", "Splunk", "Linux", "Python", "AWS Security"]);
    record10.set("certifications", [{"name": "Certified Ethical Hacker (CEH)", "issuer": "EC-Council", "cost": 1000, "duration": "2 months"}, {"name": "CISSP", "issuer": "ISC2", "cost": 749, "duration": "3 months"}, {"name": "CompTIA Security+", "issuer": "CompTIA", "cost": 400, "duration": "1 month"}]);
    record10.set("faqs", [{"question": "Do I need a security background?", "answer": "Not required. Many security engineers come from networking or systems administration."}, {"question": "What's the difference between security engineer and ethical hacker?", "answer": "Security engineers build defenses, ethical hackers test them."}, {"question": "How important is Linux knowledge?", "answer": "Very important. Most servers and security tools run on Linux."}, {"question": "What certifications should I get?", "answer": "Start with Security+, then CEH or CISSP."}, {"question": "What's the job market like?", "answer": "Excellent demand with high salaries and job security."}, {"question": "Is this stressful?", "answer": "Can be, especially during security incidents, but very rewarding."}]);
    record10.set("relatedCareers", ["devops-engineer", "systems-administrator", "network-engineer"]);
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
    record11.set("name", "QA Engineer");
    record11.set("slug", "qa-engineer");
    record11.set("description", "Tests software to identify and report bugs and quality issues");
    record11.set("overview", "QA engineers develop test strategies, create test cases, and execute tests to ensure software quality. They work with developers to identify and fix bugs before release.");
    record11.set("jobDemand", "High");
    record11.set("entrySalary", 70000);
    record11.set("midSalary", 105000);
    record11.set("seniorSalary", 150000);
    record11.set("topStates", [{"state": "California", "salary": 160000}, {"state": "New York", "salary": 135000}, {"state": "Washington", "salary": 145000}, {"state": "Massachusetts", "salary": 130000}, {"state": "Texas", "salary": 115000}]);
    record11.set("technicalSkills", [{"skill": "Test Automation", "proficiency": "Advanced"}, {"skill": "Selenium", "proficiency": "Advanced"}, {"skill": "Python", "proficiency": "Intermediate"}, {"skill": "SQL", "proficiency": "Intermediate"}, {"skill": "API Testing", "proficiency": "Advanced"}, {"skill": "Test Planning", "proficiency": "Advanced"}, {"skill": "Git", "proficiency": "Intermediate"}, {"skill": "JIRA", "proficiency": "Advanced"}]);
    record11.set("softSkills", ["Attention to Detail", "Problem Solving", "Communication", "Patience", "Documentation"]);
    record11.set("tools", ["Selenium", "Cypress", "Postman", "JIRA", "TestNG", "Python", "Git", "Jenkins"]);
    record11.set("certifications", [{"name": "ISTQB Certified Tester", "issuer": "ISTQB", "cost": 300, "duration": "1 month"}, {"name": "Selenium WebDriver Certification", "issuer": "Udemy", "cost": 15, "duration": "1 month"}, {"name": "API Testing Certification", "issuer": "Udemy", "cost": 15, "duration": "2 weeks"}]);
    record11.set("faqs", [{"question": "Do I need to be a developer?", "answer": "Not required, but programming knowledge is very helpful."}, {"question": "What's the difference between manual and automation testing?", "answer": "Manual testing is done by humans, automation testing uses scripts."}, {"question": "Should I learn automation?", "answer": "Yes, automation is increasingly important and increases salary potential."}, {"question": "What tools should I learn?", "answer": "Selenium for web, Postman for APIs, and a programming language like Python."}, {"question": "What's the career growth?", "answer": "Can advance to QA Lead, Test Manager, or transition to development."}, {"question": "Is this a good entry-level role?", "answer": "Yes, good entry point into tech with lower barrier to entry."}]);
    record11.set("relatedCareers", ["software-engineer", "devops-engineer", "product-manager"]);
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
    record12.set("name", "Business Analyst");
    record12.set("slug", "business-analyst");
    record12.set("description", "Analyzes business processes and requirements for software solutions");
    record12.set("overview", "Business analysts bridge the gap between business stakeholders and technical teams. They gather requirements, analyze processes, and ensure solutions meet business needs.");
    record12.set("jobDemand", "High");
    record12.set("entrySalary", 75000);
    record12.set("midSalary", 110000);
    record12.set("seniorSalary", 155000);
    record12.set("topStates", [{"state": "New York", "salary": 145000}, {"state": "California", "salary": 150000}, {"state": "Texas", "salary": 120000}, {"state": "Illinois", "salary": 115000}, {"state": "Massachusetts", "salary": 130000}]);
    record12.set("technicalSkills", [{"skill": "Requirements Analysis", "proficiency": "Advanced"}, {"skill": "SQL", "proficiency": "Intermediate"}, {"skill": "Data Analysis", "proficiency": "Advanced"}, {"skill": "Process Mapping", "proficiency": "Advanced"}, {"skill": "Excel", "proficiency": "Advanced"}, {"skill": "Agile", "proficiency": "Advanced"}, {"skill": "Wireframing", "proficiency": "Intermediate"}, {"skill": "Documentation", "proficiency": "Advanced"}]);
    record12.set("softSkills", ["Communication", "Stakeholder Management", "Problem Solving", "Critical Thinking", "Negotiation"]);
    record12.set("tools", ["Excel", "SQL", "Jira", "Confluence", "Lucidchart", "Miro", "Power BI", "Visio"]);
    record12.set("certifications", [{"name": "IIBA Certified Business Analyst", "issuer": "IIBA", "cost": 500, "duration": "2 months"}, {"name": "Agile Business Analysis", "issuer": "Coursera", "cost": 39, "duration": "2 months"}, {"name": "Business Analysis Fundamentals", "issuer": "Udemy", "cost": 15, "duration": "1 month"}]);
    record12.set("faqs", [{"question": "Do I need a technical background?", "answer": "Not required, but technical knowledge is helpful."}, {"question": "What's the difference between BA and PM?", "answer": "BAs focus on requirements and process, PMs focus on strategy and vision."}, {"question": "What skills are most important?", "answer": "Communication, analytical thinking, and understanding business processes."}, {"question": "How do I transition into BA?", "answer": "Start in a related role, learn requirements analysis, and build domain knowledge."}, {"question": "What's the career path?", "answer": "Can advance to Senior BA, BA Manager, or Product Manager."}, {"question": "Is this a good career?", "answer": "Yes, stable with good growth potential and diverse opportunities."}]);
    record12.set("relatedCareers", ["product-manager", "data-analyst", "project-manager"]);
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
    record13.set("name", "Solutions Architect");
    record13.set("slug", "solutions-architect");
    record13.set("description", "Designs technical solutions that meet business requirements");
    record13.set("overview", "Solutions architects work with clients and technical teams to design comprehensive solutions. They balance business needs with technical feasibility and cost considerations.");
    record13.set("jobDemand", "High");
    record13.set("entrySalary", 110000);
    record13.set("midSalary", 160000);
    record13.set("seniorSalary", 220000);
    record13.set("topStates", [{"state": "California", "salary": 230000}, {"state": "New York", "salary": 185000}, {"state": "Washington", "salary": 205000}, {"state": "Massachusetts", "salary": 180000}, {"state": "Texas", "salary": 165000}]);
    record13.set("technicalSkills", [{"skill": "System Design", "proficiency": "Advanced"}, {"skill": "Cloud Platforms", "proficiency": "Advanced"}, {"skill": "Networking", "proficiency": "Advanced"}, {"skill": "Database Design", "proficiency": "Advanced"}, {"skill": "Security", "proficiency": "Advanced"}, {"skill": "Scalability", "proficiency": "Advanced"}, {"skill": "Cost Optimization", "proficiency": "Intermediate"}, {"skill": "Documentation", "proficiency": "Advanced"}]);
    record13.set("softSkills", ["Communication", "Leadership", "Problem Solving", "Business Acumen", "Presentation Skills"]);
    record13.set("tools", ["AWS", "Azure", "Visio", "Lucidchart", "Jira", "Confluence", "Networking Tools", "Security Tools"]);
    record13.set("certifications", [{"name": "AWS Certified Solutions Architect Professional", "issuer": "Amazon", "cost": 300, "duration": "3 months"}, {"name": "Microsoft Certified: Azure Solutions Architect Expert", "issuer": "Microsoft", "cost": 165, "duration": "2 months"}, {"name": "Google Cloud Architect Certification", "issuer": "Google", "cost": 200, "duration": "3 months"}]);
    record13.set("faqs", [{"question": "What's the difference between Solutions Architect and Cloud Architect?", "answer": "Solutions Architects focus on business solutions, Cloud Architects focus on cloud infrastructure."}, {"question": "Do I need to be a developer?", "answer": "Not required, but technical background is very helpful."}, {"question": "What's the typical career path?", "answer": "Often start as developer or engineer, then move to architect roles."}, {"question": "How important is communication?", "answer": "Very important. You'll spend significant time with clients and stakeholders."}, {"question": "What's the salary potential?", "answer": "Excellent, with strong growth and consulting opportunities."}, {"question": "Is this a good long-term career?", "answer": "Yes, stable with high demand and good work-life balance."}]);
    record13.set("relatedCareers", ["cloud-architect", "devops-engineer", "software-engineer"]);
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
    record14.set("name", "Systems Administrator");
    record14.set("slug", "systems-administrator");
    record14.set("description", "Manages and maintains computer systems and networks");
    record14.set("overview", "Systems administrators manage servers, networks, and user accounts. They ensure systems are secure, reliable, and perform optimally.");
    record14.set("jobDemand", "High");
    record14.set("entrySalary", 65000);
    record14.set("midSalary", 100000);
    record14.set("seniorSalary", 145000);
    record14.set("topStates", [{"state": "California", "salary": 155000}, {"state": "New York", "salary": 130000}, {"state": "Washington", "salary": 140000}, {"state": "Massachusetts", "salary": 125000}, {"state": "Texas", "salary": 110000}]);
    record14.set("technicalSkills", [{"skill": "Linux", "proficiency": "Advanced"}, {"skill": "Windows Server", "proficiency": "Advanced"}, {"skill": "Networking", "proficiency": "Advanced"}, {"skill": "Active Directory", "proficiency": "Advanced"}, {"skill": "Virtualization", "proficiency": "Intermediate"}, {"skill": "Backup & Recovery", "proficiency": "Advanced"}, {"skill": "Security", "proficiency": "Advanced"}, {"skill": "Scripting", "proficiency": "Intermediate"}]);
    record14.set("softSkills", ["Problem Solving", "Attention to Detail", "Communication", "Reliability", "Continuous Learning"]);
    record14.set("tools", ["Linux", "Windows Server", "Active Directory", "VMware", "Hyper-V", "Bash", "PowerShell", "Nagios"]);
    record14.set("certifications", [{"name": "CompTIA A+", "issuer": "CompTIA", "cost": 400, "duration": "1 month"}, {"name": "CompTIA Network+", "issuer": "CompTIA", "cost": 400, "duration": "1 month"}, {"name": "Linux Professional Institute Certification", "issuer": "LPI", "cost": 200, "duration": "2 months"}]);
    record14.set("faqs", [{"question": "Do I need a degree?", "answer": "Not required. Many sysadmins come from IT support backgrounds."}, {"question": "What's the difference between sysadmin and DevOps?", "answer": "Sysadmins manage infrastructure manually, DevOps focuses on automation."}, {"question": "What certifications should I get?", "answer": "Start with A+, then Network+, then Linux or Windows certifications."}, {"question": "How important is Linux?", "answer": "Very important. Most servers run Linux."}, {"question": "What's the career growth?", "answer": "Can advance to Senior Admin, Systems Manager, or DevOps Engineer."}, {"question": "Is this a good entry-level role?", "answer": "Yes, good entry point into IT with stable career growth."}]);
    record14.set("relatedCareers", ["devops-engineer", "network-engineer", "security-engineer"]);
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
    record15.set("name", "Network Engineer");
    record15.set("slug", "network-engineer");
    record15.set("description", "Designs and manages computer networks and connectivity");
    record15.set("overview", "Network engineers design, implement, and maintain computer networks. They ensure networks are secure, reliable, and perform optimally.");
    record15.set("jobDemand", "High");
    record15.set("entrySalary", 70000);
    record15.set("midSalary", 110000);
    record15.set("seniorSalary", 160000);
    record15.set("topStates", [{"state": "California", "salary": 170000}, {"state": "New York", "salary": 140000}, {"state": "Washington", "salary": 150000}, {"state": "Massachusetts", "salary": 135000}, {"state": "Texas", "salary": 120000}]);
    record15.set("technicalSkills", [{"skill": "Networking Protocols", "proficiency": "Advanced"}, {"skill": "Cisco Routers", "proficiency": "Advanced"}, {"skill": "Switching", "proficiency": "Advanced"}, {"skill": "Firewalls", "proficiency": "Advanced"}, {"skill": "VPN", "proficiency": "Intermediate"}, {"skill": "Network Security", "proficiency": "Advanced"}, {"skill": "Troubleshooting", "proficiency": "Advanced"}, {"skill": "Linux", "proficiency": "Intermediate"}]);
    record15.set("softSkills", ["Problem Solving", "Attention to Detail", "Communication", "Patience", "Continuous Learning"]);
    record15.set("tools", ["Cisco IOS", "Juniper", "Palo Alto", "Wireshark", "Nmap", "Linux", "Python", "Ansible"]);
    record15.set("certifications", [{"name": "Cisco CCNA", "issuer": "Cisco", "cost": 330, "duration": "2 months"}, {"name": "Cisco CCNP", "issuer": "Cisco", "cost": 330, "duration": "3 months"}, {"name": "CompTIA Network+", "issuer": "CompTIA", "cost": 400, "duration": "1 month"}]);
    record15.set("faqs", [{"question": "Do I need a degree?", "answer": "Not required. Many network engineers come from IT support backgrounds."}, {"question": "What certifications should I get?", "answer": "Start with Network+, then CCNA, then CCNP."}, {"question": "How important is Cisco knowledge?", "answer": "Very important. Cisco dominates the networking market."}, {"question": "What's the difference between network engineer and sysadmin?", "answer": "Network engineers focus on networks, sysadmins focus on servers and systems."}, {"question": "What's the career growth?", "answer": "Can advance to Senior Engineer, Network Manager, or Solutions Architect."}, {"question": "Is this a good career?", "answer": "Yes, stable with good growth potential and job security."}]);
    record15.set("relatedCareers", ["systems-administrator", "security-engineer", "devops-engineer"]);
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
    record16.set("name", "Database Administrator");
    record16.set("slug", "database-administrator");
    record16.set("description", "Manages and maintains databases for organizations");
    record16.set("overview", "Database administrators manage databases, ensure data integrity, and optimize performance. They handle backups, security, and user access.");
    record16.set("jobDemand", "High");
    record16.set("entrySalary", 75000);
    record16.set("midSalary", 115000);
    record16.set("seniorSalary", 165000);
    record16.set("topStates", [{"state": "California", "salary": 175000}, {"state": "New York", "salary": 145000}, {"state": "Washington", "salary": 155000}, {"state": "Massachusetts", "salary": 140000}, {"state": "Texas", "salary": 125000}]);
    record16.set("technicalSkills", [{"skill": "SQL", "proficiency": "Advanced"}, {"skill": "Oracle", "proficiency": "Advanced"}, {"skill": "PostgreSQL", "proficiency": "Advanced"}, {"skill": "Backup & Recovery", "proficiency": "Advanced"}, {"skill": "Performance Tuning", "proficiency": "Advanced"}, {"skill": "Security", "proficiency": "Advanced"}, {"skill": "Replication", "proficiency": "Intermediate"}, {"skill": "Linux", "proficiency": "Intermediate"}]);
    record16.set("softSkills", ["Attention to Detail", "Problem Solving", "Communication", "Reliability", "Continuous Learning"]);
    record16.set("tools", ["Oracle", "PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Backup Tools", "Monitoring Tools", "Linux"]);
    record16.set("certifications", [{"name": "Oracle Certified Associate Database Administrator", "issuer": "Oracle", "cost": 245, "duration": "2 months"}, {"name": "Microsoft Certified: Data Administrator Associate", "issuer": "Microsoft", "cost": 165, "duration": "2 months"}, {"name": "PostgreSQL Certification", "issuer": "EDB", "cost": 500, "duration": "2 months"}]);
    record16.set("faqs", [{"question": "Do I need a degree?", "answer": "Not required. Many DBAs come from developer or sysadmin backgrounds."}, {"question": "What database should I learn first?", "answer": "PostgreSQL or MySQL are good starts. Oracle is most popular in enterprises."}, {"question": "How important is SQL?", "answer": "Very important. Strong SQL skills are essential."}, {"question": "What's the difference between DBA and developer?", "answer": "DBAs manage databases, developers use databases in applications."}, {"question": "What's the career growth?", "answer": "Can advance to Senior DBA, Database Manager, or Data Architect."}, {"question": "Is this a good career?", "answer": "Yes, stable with good salaries and job security."}]);
    record16.set("relatedCareers", ["systems-administrator", "data-analyst", "backend-developer"]);
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
    record17.set("name", "IT Manager");
    record17.set("slug", "it-manager");
    record17.set("description", "Manages IT teams and technology infrastructure");
    record17.set("overview", "IT managers oversee IT teams, manage budgets, and ensure technology aligns with business goals. They handle hiring, performance management, and strategic planning.");
    record17.set("jobDemand", "High");
    record17.set("entrySalary", 95000);
    record17.set("midSalary", 145000);
    record17.set("seniorSalary", 200000);
    record17.set("topStates", [{"state": "California", "salary": 210000}, {"state": "New York", "salary": 175000}, {"state": "Washington", "salary": 190000}, {"state": "Massachusetts", "salary": 170000}, {"state": "Texas", "salary": 155000}]);
    record17.set("technicalSkills", [{"skill": "IT Infrastructure", "proficiency": "Advanced"}, {"skill": "Project Management", "proficiency": "Advanced"}, {"skill": "Budget Management", "proficiency": "Advanced"}, {"skill": "Team Leadership", "proficiency": "Advanced"}, {"skill": "Strategic Planning", "proficiency": "Advanced"}, {"skill": "Vendor Management", "proficiency": "Intermediate"}, {"skill": "IT Security", "proficiency": "Intermediate"}, {"skill": "Cloud Platforms", "proficiency": "Intermediate"}]);
    record17.set("softSkills", ["Leadership", "Communication", "Strategic Thinking", "Decision Making", "Conflict Resolution"]);
    record17.set("tools", ["Project Management Tools", "Budget Software", "JIRA", "Confluence", "Slack", "Microsoft Teams", "ServiceNow", "Tableau"]);
    record17.set("certifications", [{"name": "PMP (Project Management Professional)", "issuer": "PMI", "cost": 555, "duration": "3 months"}, {"name": "ITIL Foundation", "issuer": "AXELOS", "cost": 300, "duration": "1 month"}, {"name": "Certified ScrumMaster", "issuer": "Scrum Alliance", "cost": 500, "duration": "2 days"}]);
    record17.set("faqs", [{"question": "Do I need technical background?", "answer": "Yes, most IT managers come from technical roles."}, {"question": "What's the typical career path?", "answer": "Usually start as engineer/admin, then team lead, then manager."}, {"question": "How important is people management?", "answer": "Very important. Much of the role involves managing and developing people."}, {"question": "What certifications should I get?", "answer": "PMP and ITIL are valuable for IT managers."}, {"question": "What's the work-life balance?", "answer": "Can be demanding, especially during crises or major projects."}, {"question": "What's the salary potential?", "answer": "Good, with potential to advance to Director or VP roles."}]);
    record17.set("relatedCareers", ["project-manager", "devops-engineer", "systems-administrator"]);
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
    record18.set("description", "Creates technical documentation for software and products");
    record18.set("overview", "Technical writers create user guides, API documentation, and technical manuals. They translate complex technical information into clear, accessible documentation.");
    record18.set("jobDemand", "Moderate");
    record18.set("entrySalary", 65000);
    record18.set("midSalary", 95000);
    record18.set("seniorSalary", 135000);
    record18.set("topStates", [{"state": "California", "salary": 145000}, {"state": "New York", "salary": 120000}, {"state": "Washington", "salary": 130000}, {"state": "Massachusetts", "salary": 115000}, {"state": "Texas", "salary": 105000}]);
    record18.set("technicalSkills", [{"skill": "Technical Writing", "proficiency": "Advanced"}, {"skill": "Markdown", "proficiency": "Advanced"}, {"skill": "HTML/CSS", "proficiency": "Intermediate"}, {"skill": "Git", "proficiency": "Intermediate"}, {"skill": "API Documentation", "proficiency": "Advanced"}, {"skill": "Diagrams & Visuals", "proficiency": "Advanced"}, {"skill": "SQL", "proficiency": "Intermediate"}, {"skill": "Tools", "proficiency": "Advanced"}]);
    record18.set("softSkills", ["Communication", "Attention to Detail", "Organization", "Empathy", "Collaboration"]);
    record18.set("tools", ["Markdown", "Git", "Confluence", "Jira", "Figma", "Visio", "MkDocs", "Sphinx"]);
    record18.set("certifications", [{"name": "Society for Technical Communication Certification", "issuer": "STC", "cost": 500, "duration": "3 months"}, {"name": "Technical Writing Fundamentals", "issuer": "Udemy", "cost": 15, "duration": "1 month"}, {"name": "API Documentation Certification", "issuer": "Udemy", "cost": 15, "duration": "2 weeks"}]);
    record18.set("faqs", [{"question": "Do I need a technical background?", "answer": "Not required, but technical knowledge is helpful."}, {"question": "What's the difference between technical writing and copywriting?", "answer": "Technical writing focuses on accuracy and clarity, copywriting focuses on persuasion."}, {"question": "What tools should I learn?", "answer": "Markdown, Git, and documentation platforms like Confluence."}, {"question": "How do I get started?", "answer": "Build a portfolio with sample documentation and take online courses."}, {"question": "What's the career growth?", "answer": "Can advance to Senior Writer, Documentation Manager, or Content Strategist."}, {"question": "Is this a good career?", "answer": "Yes, stable with good work-life balance and remote opportunities."}]);
    record18.set("relatedCareers", ["product-manager", "ux-designer", "content-creator"]);
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
    record19.set("name", "Project Manager");
    record19.set("slug", "project-manager");
    record19.set("description", "Plans, executes, and oversees projects to ensure successful completion");
    record19.set("overview", "Project managers coordinate teams, manage budgets and timelines, and ensure projects meet objectives. They handle stakeholder communication and risk management.");
    record19.set("jobDemand", "High");
    record19.set("entrySalary", 75000);
    record19.set("midSalary", 115000);
    record19.set("seniorSalary", 160000);
    record19.set("topStates", [{"state": "New York", "salary": 150000}, {"state": "California", "salary": 155000}, {"state": "Texas", "salary": 125000}, {"state": "Illinois", "salary": 120000}, {"state": "Massachusetts", "salary": 135000}]);
    record19.set("technicalSkills", [{"skill": "Project Planning", "proficiency": "Advanced"}, {"skill": "Risk Management", "proficiency": "Advanced"}, {"skill": "Budget Management", "proficiency": "Advanced"}, {"skill": "Stakeholder Management", "proficiency": "Advanced"}, {"skill": "Agile", "proficiency": "Advanced"}, {"skill": "Excel", "proficiency": "Advanced"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}]);
    record19.set("softSkills", ["Leadership", "Communication", "Organization", "Decision Making", "Conflict Resolution"]);
    record19.set("tools", ["Jira", "Asana", "Monday.com", "Microsoft Project", "Confluence", "Slack", "Excel", "Gantt Charts"]);
    record19.set("certifications", [{"name": "PMP (Project Management Professional)", "issuer": "PMI", "cost": 555, "duration": "3 months"}, {"name": "Certified ScrumMaster", "issuer": "Scrum Alliance", "cost": 500, "duration": "2 days"}, {"name": "PRINCE2 Certification", "issuer": "AXELOS", "cost": 500, "duration": "2 days"}]);
    record19.set("faqs", [{"question": "Do I need a technical background?", "answer": "Not required, but helpful for tech projects."}, {"question": "What's the difference between PM and Scrum Master?", "answer": "PMs manage projects and stakeholders, Scrum Masters facilitate agile processes."}, {"question": "What certifications should I get?", "answer": "PMP is most recognized, CSM is good for agile environments."}, {"question": "How important is communication?", "answer": "Very important. Much of the role involves communicating with stakeholders."}, {"question": "What's the career growth?", "answer": "Can advance to Senior PM, Program Manager, or Director."}, {"question": "Is this a good career?", "answer": "Yes, stable with good growth potential and diverse opportunities."}]);
    record19.set("relatedCareers", ["product-manager", "business-analyst", "scrum-master"]);
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
    record20.set("name", "Scrum Master");
    record20.set("slug", "scrum-master");
    record20.set("description", "Facilitates agile development processes and removes team impediments");
    record20.set("overview", "Scrum masters coach teams on agile practices, facilitate ceremonies, and remove obstacles. They help teams work efficiently and continuously improve.");
    record20.set("jobDemand", "High");
    record20.set("entrySalary", 80000);
    record20.set("midSalary", 120000);
    record20.set("seniorSalary", 165000);
    record20.set("topStates", [{"state": "California", "salary": 175000}, {"state": "New York", "salary": 145000}, {"state": "Washington", "salary": 155000}, {"state": "Massachusetts", "salary": 140000}, {"state": "Texas", "salary": 125000}]);
    record20.set("technicalSkills", [{"skill": "Agile Methodology", "proficiency": "Advanced"}, {"skill": "Scrum Framework", "proficiency": "Advanced"}, {"skill": "Kanban", "proficiency": "Intermediate"}, {"skill": "Facilitation", "proficiency": "Advanced"}, {"skill": "Coaching", "proficiency": "Advanced"}, {"skill": "Jira", "proficiency": "Advanced"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}]);
    record20.set("softSkills", ["Leadership", "Communication", "Empathy", "Patience", "Continuous Learning"]);
    record20.set("tools", ["Jira", "Confluence", "Miro", "Slack", "Azure DevOps", "Monday.com", "Asana", "Trello"]);
    record20.set("certifications", [{"name": "Certified ScrumMaster (CSM)", "issuer": "Scrum Alliance", "cost": 500, "duration": "2 days"}, {"name": "Professional Scrum Master (PSM)", "issuer": "Scrum.org", "cost": 200, "duration": "1 month"}, {"name": "Agile Certified Practitioner (ACP)", "issuer": "PMI", "cost": 555, "duration": "2 months"}]);
    record20.set("faqs", [{"question": "Do I need development experience?", "answer": "Not required, but helpful for understanding team challenges."}, {"question": "What's the difference between Scrum Master and Project Manager?", "answer": "Scrum Masters facilitate agile processes, PMs manage projects and stakeholders."}, {"question": "What certifications should I get?", "answer": "CSM is most popular and easiest to get started."}, {"question": "How important is coaching?", "answer": "Very important. Much of the role involves coaching and mentoring."}, {"question": "What's the career growth?", "answer": "Can advance to Agile Coach, Release Train Engineer, or Agile Manager."}, {"question": "Is this a good career?", "answer": "Yes, growing field with good salaries and job security."}]);
    record20.set("relatedCareers", ["project-manager", "agile-coach", "product-owner"]);
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
    record21.set("name", "Agile Coach");
    record21.set("slug", "agile-coach");
    record21.set("description", "Coaches organizations on agile transformation and practices");
    record21.set("overview", "Agile coaches help organizations adopt agile methodologies and improve their processes. They work at team and organizational levels to drive agile transformation.");
    record21.set("jobDemand", "Moderate");
    record21.set("entrySalary", 90000);
    record21.set("midSalary", 135000);
    record21.set("seniorSalary", 185000);
    record21.set("topStates", [{"state": "California", "salary": 195000}, {"state": "New York", "salary": 160000}, {"state": "Washington", "salary": 175000}, {"state": "Massachusetts", "salary": 155000}, {"state": "Texas", "salary": 140000}]);
    record21.set("technicalSkills", [{"skill": "Agile Methodology", "proficiency": "Advanced"}, {"skill": "Organizational Change", "proficiency": "Advanced"}, {"skill": "Coaching", "proficiency": "Advanced"}, {"skill": "Facilitation", "proficiency": "Advanced"}, {"skill": "Lean Principles", "proficiency": "Advanced"}, {"skill": "Metrics & Analytics", "proficiency": "Intermediate"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}]);
    record21.set("softSkills", ["Leadership", "Communication", "Empathy", "Strategic Thinking", "Continuous Learning"]);
    record21.set("tools", ["Jira", "Confluence", "Miro", "Slack", "Azure DevOps", "Metrics Tools", "Facilitation Tools", "Learning Platforms"]);
    record21.set("certifications", [{"name": "Certified Agile Coach (CAC)", "issuer": "Agile Alliance", "cost": 500, "duration": "3 months"}, {"name": "Certified Scrum Trainer (CST)", "issuer": "Scrum Alliance", "cost": 5000, "duration": "5 days"}, {"name": "SAFe Program Consultant (SPC)", "issuer": "Scaled Agile", "cost": 2000, "duration": "3 days"}]);
    record21.set("faqs", [{"question": "Do I need Scrum Master experience?", "answer": "Yes, typically you should be a Scrum Master first."}, {"question": "What's the difference between Scrum Master and Agile Coach?", "answer": "Scrum Masters work with teams, Agile Coaches work at organizational level."}, {"question": "What certifications should I get?", "answer": "CSM first, then CAC or CST."}, {"question": "How important is change management?", "answer": "Very important. Much of the role involves managing organizational change."}, {"question": "What's the career growth?", "answer": "Can advance to Senior Coach, Transformation Lead, or Consulting roles."}, {"question": "Is this a good career?", "answer": "Yes, growing field with excellent salaries and consulting opportunities."}]);
    record21.set("relatedCareers", ["scrum-master", "project-manager", "product-manager"]);
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
    record22.set("name", "Product Owner");
    record22.set("slug", "product-owner");
    record22.set("description", "Manages product backlog and prioritizes features for development teams");
    record22.set("overview", "Product owners define product requirements, manage the backlog, and work with teams to deliver value. They represent stakeholders and ensure the team builds the right product.");
    record22.set("jobDemand", "High");
    record22.set("entrySalary", 85000);
    record22.set("midSalary", 130000);
    record22.set("seniorSalary", 180000);
    record22.set("topStates", [{"state": "California", "salary": 190000}, {"state": "New York", "salary": 160000}, {"state": "Washington", "salary": 170000}, {"state": "Massachusetts", "salary": 155000}, {"state": "Texas", "salary": 140000}]);
    record22.set("technicalSkills", [{"skill": "Product Management", "proficiency": "Advanced"}, {"skill": "Backlog Management", "proficiency": "Advanced"}, {"skill": "User Stories", "proficiency": "Advanced"}, {"skill": "Agile", "proficiency": "Advanced"}, {"skill": "Data Analysis", "proficiency": "Intermediate"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Jira", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}]);
    record22.set("softSkills", ["Leadership", "Communication", "Decision Making", "Stakeholder Management", "Empathy"]);
    record22.set("tools", ["Jira", "Confluence", "Miro", "Slack", "Analytics Tools", "Figma", "Asana", "Monday.com"]);
    record22.set("certifications", [{"name": "Certified Scrum Product Owner (CSPO)", "issuer": "Scrum Alliance", "cost": 500, "duration": "2 days"}, {"name": "Professional Scrum Product Owner (PSPO)", "issuer": "Scrum.org", "cost": 200, "duration": "1 month"}, {"name": "Reforge Product Management", "issuer": "Reforge", "cost": 2000, "duration": "4 weeks"}]);
    record22.set("faqs", [{"question": "What's the difference between Product Owner and Product Manager?", "answer": "POs manage backlog for teams, PMs manage overall product strategy."}, {"question": "Do I need development experience?", "answer": "Not required, but helpful for understanding technical constraints."}, {"question": "What certifications should I get?", "answer": "CSPO is most popular for Scrum environments."}, {"question": "How important is stakeholder management?", "answer": "Very important. You'll balance team needs with stakeholder expectations."}, {"question": "What's the career growth?", "answer": "Can advance to Senior PO, Product Manager, or Director."}, {"question": "Is this a good career?", "answer": "Yes, growing field with good salaries and diverse opportunities."}]);
    record22.set("relatedCareers", ["product-manager", "scrum-master", "business-analyst"]);
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
    record23.set("name", "Growth Hacker");
    record23.set("slug", "growth-hacker");
    record23.set("description", "Uses creative strategies to rapidly grow user base and revenue");
    record23.set("overview", "Growth hackers combine marketing, data analysis, and product knowledge to drive rapid growth. They experiment with strategies to acquire, retain, and monetize users.");
    record23.set("jobDemand", "High");
    record23.set("entrySalary", 75000);
    record23.set("midSalary", 120000);
    record23.set("seniorSalary", 170000);
    record23.set("topStates", [{"state": "California", "salary": 180000}, {"state": "New York", "salary": 150000}, {"state": "Washington", "salary": 160000}, {"state": "Massachusetts", "salary": 145000}, {"state": "Texas", "salary": 130000}]);
    record23.set("technicalSkills", [{"skill": "Data Analysis", "proficiency": "Advanced"}, {"skill": "SQL", "proficiency": "Intermediate"}, {"skill": "Google Analytics", "proficiency": "Advanced"}, {"skill": "A/B Testing", "proficiency": "Advanced"}, {"skill": "Marketing Automation", "proficiency": "Intermediate"}, {"skill": "Python", "proficiency": "Intermediate"}, {"skill": "Product Knowledge", "proficiency": "Advanced"}, {"skill": "Experimentation", "proficiency": "Advanced"}]);
    record23.set("softSkills", ["Creativity", "Analytical Thinking", "Problem Solving", "Communication", "Entrepreneurial Mindset"]);
    record23.set("tools", ["Google Analytics", "Mixpanel", "Amplitude", "Segment", "SQL", "Python", "Excel", "Slack"]);
    record23.set("certifications", [{"name": "Google Analytics Certification", "issuer": "Google", "cost": 0, "duration": "1 month"}, {"name": "Growth Marketing Certification", "issuer": "Reforge", "cost": 2000, "duration": "4 weeks"}, {"name": "Data Analytics Certification", "issuer": "Google", "cost": 39, "duration": "3 months"}]);
    record23.set("faqs", [{"question": "Do I need marketing experience?", "answer": "Not required, but helpful. Many growth hackers come from product or engineering."}, {"question": "What's the difference between growth hacker and marketer?", "answer": "Growth hackers focus on rapid experimentation and data, marketers focus on campaigns."}, {"question": "What skills are most important?", "answer": "Data analysis, experimentation, and product understanding."}, {"question": "How do I get started?", "answer": "Learn analytics, SQL, and take growth marketing courses."}, {"question": "What's the career growth?", "answer": "Can advance to Growth Manager, Head of Growth, or VP of Growth."}, {"question": "Is this a good career?", "answer": "Yes, especially in startups with excellent growth potential."}]);
    record23.set("relatedCareers", ["product-manager", "data-analyst", "marketing-manager"]);
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
    record24.set("name", "Marketing Manager");
    record24.set("slug", "marketing-manager");
    record24.set("description", "Plans and executes marketing strategies to promote products and services");
    record24.set("overview", "Marketing managers develop marketing strategies, manage campaigns, and analyze results. They work with teams to build brand awareness and drive customer acquisition.");
    record24.set("jobDemand", "High");
    record24.set("entrySalary", 70000);
    record24.set("midSalary", 110000);
    record24.set("seniorSalary", 160000);
    record24.set("topStates", [{"state": "New York", "salary": 150000}, {"state": "California", "salary": 155000}, {"state": "Texas", "salary": 125000}, {"state": "Illinois", "salary": 120000}, {"state": "Massachusetts", "salary": 135000}]);
    record24.set("technicalSkills", [{"skill": "Marketing Strategy", "proficiency": "Advanced"}, {"skill": "Data Analysis", "proficiency": "Advanced"}, {"skill": "Google Analytics", "proficiency": "Advanced"}, {"skill": "Content Marketing", "proficiency": "Advanced"}, {"skill": "Social Media", "proficiency": "Advanced"}, {"skill": "Email Marketing", "proficiency": "Intermediate"}, {"skill": "SEO", "proficiency": "Intermediate"}, {"skill": "Excel", "proficiency": "Advanced"}]);
    record24.set("softSkills", ["Creativity", "Communication", "Leadership", "Strategic Thinking", "Analytical Thinking"]);
    record24.set("tools", ["Google Analytics", "HubSpot", "Mailchimp", "Hootsuite", "Canva", "Excel", "Slack", "Asana"]);
    record24.set("certifications", [{"name": "Google Analytics Certification", "issuer": "Google", "cost": 0, "duration": "1 month"}, {"name": "HubSpot Inbound Marketing Certification", "issuer": "HubSpot", "cost": 0, "duration": "1 month"}, {"name": "Digital Marketing Certification", "issuer": "Coursera", "cost": 39, "duration": "3 months"}]);
    record24.set("faqs", [{"question": "Do I need a marketing degree?", "answer": "Not required. Many marketing managers come from various backgrounds."}, {"question": "What's the difference between marketing and sales?", "answer": "Marketing creates demand, sales closes deals."}, {"question": "What skills are most important?", "answer": "Data analysis, communication, and strategic thinking."}, {"question": "How do I get started?", "answer": "Learn analytics, take marketing courses, and build a portfolio."}, {"question": "What's the career growth?", "answer": "Can advance to Senior Manager, Director, or VP of Marketing."}, {"question": "Is this a good career?", "answer": "Yes, stable with good growth potential and diverse opportunities."}]);
    record24.set("relatedCareers", ["growth-hacker", "digital-marketer", "product-manager"]);
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
    record25.set("name", "Sales Manager");
    record25.set("slug", "sales-manager");
    record25.set("description", "Leads sales teams and manages customer relationships to drive revenue");
    record25.set("overview", "Sales managers oversee sales teams, set targets, and manage customer relationships. They develop sales strategies and ensure teams meet revenue goals.");
    record25.set("jobDemand", "High");
    record25.set("entrySalary", 75000);
    record25.set("midSalary", 120000);
    record25.set("seniorSalary", 170000);
    record25.set("topStates", [{"state": "New York", "salary": 160000}, {"state": "California", "salary": 165000}, {"state": "Texas", "salary": 135000}, {"state": "Illinois", "salary": 130000}, {"state": "Massachusetts", "salary": 145000}]);
    record25.set("technicalSkills", [{"skill": "Sales Strategy", "proficiency": "Advanced"}, {"skill": "CRM Systems", "proficiency": "Advanced"}, {"skill": "Negotiation", "proficiency": "Advanced"}, {"skill": "Forecasting", "proficiency": "Advanced"}, {"skill": "Data Analysis", "proficiency": "Intermediate"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Leadership", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}]);
    record25.set("softSkills", ["Leadership", "Communication", "Negotiation", "Motivation", "Strategic Thinking"]);
    record25.set("tools", ["Salesforce", "HubSpot", "Pipedrive", "Excel", "Slack", "Zoom", "LinkedIn", "Tableau"]);
    record25.set("certifications", [{"name": "Salesforce Administrator Certification", "issuer": "Salesforce", "cost": 200, "duration": "1 month"}, {"name": "Sales Management Certification", "issuer": "Coursera", "cost": 39, "duration": "2 months"}, {"name": "Negotiation Skills Certification", "issuer": "Udemy", "cost": 15, "duration": "1 month"}]);
    record25.set("faqs", [{"question": "Do I need sales experience?", "answer": "Yes, typically you should be a sales rep first."}, {"question": "What's the difference between sales and marketing?", "answer": "Sales closes deals, marketing creates demand."}, {"question": "What skills are most important?", "answer": "Leadership, communication, and negotiation."}, {"question": "How do I transition into sales management?", "answer": "Excel as a sales rep, then move into team lead or manager roles."}, {"question": "What's the career growth?", "answer": "Can advance to Senior Manager, Director, or VP of Sales."}, {"question": "Is this a good career?", "answer": "Yes, with excellent earning potential through commissions and bonuses."}]);
    record25.set("relatedCareers", ["marketing-manager", "business-analyst", "product-manager"]);
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
    record26.set("name", "HR Manager");
    record26.set("slug", "hr-manager");
    record26.set("description", "Manages human resources functions including recruitment and employee relations");
    record26.set("overview", "HR managers oversee recruitment, employee relations, training, and compliance. They develop HR strategies and ensure positive workplace culture.");
    record26.set("jobDemand", "High");
    record26.set("entrySalary", 70000);
    record26.set("midSalary", 110000);
    record26.set("seniorSalary", 160000);
    record26.set("topStates", [{"state": "New York", "salary": 150000}, {"state": "California", "salary": 155000}, {"state": "Texas", "salary": 125000}, {"state": "Illinois", "salary": 120000}, {"state": "Massachusetts", "salary": 135000}]);
    record26.set("technicalSkills", [{"skill": "Recruitment", "proficiency": "Advanced"}, {"skill": "Employee Relations", "proficiency": "Advanced"}, {"skill": "HRIS Systems", "proficiency": "Advanced"}, {"skill": "Compliance", "proficiency": "Advanced"}, {"skill": "Training & Development", "proficiency": "Advanced"}, {"skill": "Data Analysis", "proficiency": "Intermediate"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}]);
    record26.set("softSkills", ["Communication", "Empathy", "Leadership", "Confidentiality", "Conflict Resolution"]);
    record26.set("tools", ["Workday", "BambooHR", "LinkedIn Recruiter", "Excel", "Slack", "Zoom", "Asana", "Tableau"]);
    record26.set("certifications", [{"name": "SHRM Certified Professional (SHRM-CP)", "issuer": "SHRM", "cost": 500, "duration": "2 months"}, {"name": "PHR (Professional in Human Resources)", "issuer": "HRCI", "cost": 500, "duration": "2 months"}, {"name": "HR Fundamentals Certification", "issuer": "Coursera", "cost": 39, "duration": "2 months"}]);
    record26.set("faqs", [{"question": "Do I need an HR degree?", "answer": "Not required. Many HR managers come from various backgrounds."}, {"question": "What's the difference between HR and recruiting?", "answer": "HR manages all employee functions, recruiting is one part of HR."}, {"question": "What certifications should I get?", "answer": "SHRM-CP or PHR are most recognized."}, {"question": "What skills are most important?", "answer": "Communication, empathy, and understanding employment law."}, {"question": "What's the career growth?", "answer": "Can advance to Senior Manager, Director, or VP of HR."}, {"question": "Is this a good career?", "answer": "Yes, stable with good growth potential and diverse opportunities."}]);
    record26.set("relatedCareers", ["project-manager", "business-analyst", "management-consultant"]);
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
    record27.set("name", "Finance Analyst");
    record27.set("slug", "finance-analyst");
    record27.set("description", "Analyzes financial data to support business decisions");
    record27.set("overview", "Finance analysts examine financial data, create forecasts, and provide insights to support business decisions. They work with budgets, investments, and financial planning.");
    record27.set("jobDemand", "High");
    record27.set("entrySalary", 70000);
    record27.set("midSalary", 110000);
    record27.set("seniorSalary", 160000);
    record27.set("topStates", [{"state": "New York", "salary": 150000}, {"state": "California", "salary": 155000}, {"state": "Texas", "salary": 125000}, {"state": "Illinois", "salary": 120000}, {"state": "Massachusetts", "salary": 135000}]);
    record27.set("technicalSkills", [{"skill": "Financial Analysis", "proficiency": "Advanced"}, {"skill": "Excel", "proficiency": "Advanced"}, {"skill": "SQL", "proficiency": "Intermediate"}, {"skill": "Accounting", "proficiency": "Advanced"}, {"skill": "Forecasting", "proficiency": "Advanced"}, {"skill": "Data Analysis", "proficiency": "Advanced"}, {"skill": "Python", "proficiency": "Intermediate"}, {"skill": "Tableau", "proficiency": "Intermediate"}]);
    record27.set("softSkills", ["Analytical Thinking", "Attention to Detail", "Communication", "Problem Solving", "Business Acumen"]);
    record27.set("tools", ["Excel", "SQL", "Python", "Tableau", "Power BI", "SAP", "Oracle", "Bloomberg Terminal"]);
    record27.set("certifications", [{"name": "CFA Level 1", "issuer": "CFA Institute", "cost": 1000, "duration": "3 months"}, {"name": "Financial Modeling Certification", "issuer": "Udemy", "cost": 15, "duration": "1 month"}, {"name": "Google Data Analytics Certificate", "issuer": "Google", "cost": 39, "duration": "3 months"}]);
    record27.set("faqs", [{"question": "Do I need an accounting degree?", "answer": "Not required, but helpful. Many analysts come from finance or business backgrounds."}, {"question": "What's the difference between finance analyst and accountant?", "answer": "Analysts focus on forecasting and insights, accountants focus on recording transactions."}, {"question": "What certifications should I get?", "answer": "CFA is most prestigious, but financial modeling skills are also valuable."}, {"question": "How important is Excel?", "answer": "Very important. Strong Excel skills are essential."}, {"question": "What's the career growth?", "answer": "Can advance to Senior Analyst, Manager, or Director of Finance."}, {"question": "Is this a good career?", "answer": "Yes, stable with good growth potential and strong salaries."}]);
    record27.set("relatedCareers", ["accountant", "data-analyst", "business-analyst"]);
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
    record28.set("name", "Accountant");
    record28.set("slug", "accountant");
    record28.set("description", "Records and reports financial transactions for organizations");
    record28.set("overview", "Accountants maintain financial records, prepare tax returns, and ensure compliance with regulations. They work with financial statements and audit requirements.");
    record28.set("jobDemand", "High");
    record28.set("entrySalary", 65000);
    record28.set("midSalary", 100000);
    record28.set("seniorSalary", 145000);
    record28.set("topStates", [{"state": "New York", "salary": 135000}, {"state": "California", "salary": 140000}, {"state": "Texas", "salary": 110000}, {"state": "Illinois", "salary": 105000}, {"state": "Massachusetts", "salary": 120000}]);
    record28.set("technicalSkills", [{"skill": "Accounting", "proficiency": "Advanced"}, {"skill": "Excel", "proficiency": "Advanced"}, {"skill": "Tax Preparation", "proficiency": "Advanced"}, {"skill": "Financial Reporting", "proficiency": "Advanced"}, {"skill": "Auditing", "proficiency": "Intermediate"}, {"skill": "QuickBooks", "proficiency": "Advanced"}, {"skill": "SQL", "proficiency": "Intermediate"}, {"skill": "Compliance", "proficiency": "Advanced"}]);
    record28.set("softSkills", ["Attention to Detail", "Analytical Thinking", "Communication", "Organization", "Integrity"]);
    record28.set("tools", ["QuickBooks", "Excel", "SAP", "Oracle", "Xero", "SQL", "Tax Software", "Audit Tools"]);
    record28.set("certifications", [{"name": "CPA (Certified Public Accountant)", "issuer": "AICPA", "cost": 1000, "duration": "6 months"}, {"name": "CMA (Certified Management Accountant)", "issuer": "IMA", "cost": 1000, "duration": "6 months"}, {"name": "Bookkeeping Certification", "issuer": "NACPB", "cost": 500, "duration": "3 months"}]);
    record28.set("faqs", [{"question": "Do I need an accounting degree?", "answer": "Not required for entry-level, but helpful. CPA requires specific education."}, {"question": "What's the difference between accountant and bookkeeper?", "answer": "Accountants analyze and interpret financial data, bookkeepers record transactions."}, {"question": "What certifications should I get?", "answer": "CPA is most prestigious and increases earning potential significantly."}, {"question": "How important is Excel?", "answer": "Very important. Strong Excel skills are essential."}, {"question": "What's the career growth?", "answer": "Can advance to Senior Accountant, Manager, or Controller."}, {"question": "Is this a good career?", "answer": "Yes, stable with good growth potential and strong job security."}]);
    record28.set("relatedCareers", ["finance-analyst", "business-analyst", "consultant"]);
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
    record29.set("description", "Provides expert advice to organizations on business and strategy");
    record29.set("overview", "Consultants analyze business problems, develop solutions, and help organizations improve performance. They work across industries and functions.");
    record29.set("jobDemand", "High");
    record29.set("entrySalary", 80000);
    record29.set("midSalary", 130000);
    record29.set("seniorSalary", 200000);
    record29.set("topStates", [{"state": "New York", "salary": 190000}, {"state": "California", "salary": 195000}, {"state": "Texas", "salary": 160000}, {"state": "Illinois", "salary": 155000}, {"state": "Massachusetts", "salary": 175000}]);
    record29.set("technicalSkills", [{"skill": "Business Analysis", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}, {"skill": "Data Analysis", "proficiency": "Advanced"}, {"skill": "Excel", "proficiency": "Advanced"}, {"skill": "SQL", "proficiency": "Intermediate"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Project Management", "proficiency": "Advanced"}, {"skill": "Industry Knowledge", "proficiency": "Advanced"}]);
    record29.set("softSkills", ["Communication", "Leadership", "Strategic Thinking", "Problem Solving", "Presentation Skills"]);
    record29.set("tools", ["Excel", "SQL", "Tableau", "Power BI", "Jira", "Confluence", "Slack", "Visio"]);
    record29.set("certifications", [{"name": "Management Consulting Certification", "issuer": "Coursera", "cost": 39, "duration": "3 months"}, {"name": "Business Analysis Certification", "issuer": "IIBA", "cost": 500, "duration": "2 months"}, {"name": "Strategy Certification", "issuer": "Udemy", "cost": 15, "duration": "1 month"}]);
    record29.set("faqs", [{"question": "Do I need an MBA?", "answer": "Not required, but helpful. Many consultants have MBAs."}, {"question": "What's the typical career path?", "answer": "Often start as analyst, then consultant, then senior consultant or manager."}, {"question": "What skills are most important?", "answer": "Problem solving, communication, and business acumen."}, {"question": "How do I get started?", "answer": "Join a consulting firm or build expertise in a specific domain."}, {"question": "What's the work-life balance?", "answer": "Can be demanding, especially with travel and client work."}, {"question": "What's the salary potential?", "answer": "Excellent, especially at top consulting firms."}]);
    record29.set("relatedCareers", ["business-analyst", "management-consultant", "strategy-consultant"]);
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
    record30.set("name", "Management Consultant");
    record30.set("slug", "management-consultant");
    record30.set("description", "Advises organizations on management and organizational strategy");
    record30.set("overview", "Management consultants help organizations improve operations, strategy, and performance. They work with leadership to implement organizational changes.");
    record30.set("jobDemand", "High");
    record30.set("entrySalary", 85000);
    record30.set("midSalary", 140000);
    record30.set("seniorSalary", 210000);
    record30.set("topStates", [{"state": "New York", "salary": 200000}, {"state": "California", "salary": 205000}, {"state": "Texas", "salary": 170000}, {"state": "Illinois", "salary": 165000}, {"state": "Massachusetts", "salary": 185000}]);
    record30.set("technicalSkills", [{"skill": "Strategic Planning", "proficiency": "Advanced"}, {"skill": "Organizational Design", "proficiency": "Advanced"}, {"skill": "Change Management", "proficiency": "Advanced"}, {"skill": "Data Analysis", "proficiency": "Advanced"}, {"skill": "Excel", "proficiency": "Advanced"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Leadership", "proficiency": "Advanced"}, {"skill": "Industry Knowledge", "proficiency": "Advanced"}]);
    record30.set("softSkills", ["Leadership", "Communication", "Strategic Thinking", "Problem Solving", "Presentation Skills"]);
    record30.set("tools", ["Excel", "Tableau", "Power BI", "Jira", "Confluence", "Slack", "Visio", "Miro"]);
    record30.set("certifications", [{"name": "Management Consulting Certification", "issuer": "Coursera", "cost": 39, "duration": "3 months"}, {"name": "Change Management Certification", "issuer": "Udemy", "cost": 15, "duration": "1 month"}, {"name": "Strategic Planning Certification", "issuer": "Udemy", "cost": 15, "duration": "1 month"}]);
    record30.set("faqs", [{"question": "Do I need an MBA?", "answer": "Not required, but helpful. Many management consultants have MBAs."}, {"question": "What's the difference between management and strategy consulting?", "answer": "Management consultants focus on operations, strategy consultants focus on long-term direction."}, {"question": "What skills are most important?", "answer": "Strategic thinking, communication, and change management."}, {"question": "How do I get started?", "answer": "Join a consulting firm or build expertise in organizational development."}, {"question": "What's the work-life balance?", "answer": "Can be demanding, especially with travel and client work."}, {"question": "What's the salary potential?", "answer": "Excellent, especially at top consulting firms."}]);
    record30.set("relatedCareers", ["consultant", "strategy-consultant", "business-analyst"]);
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
    record31.set("name", "Strategy Consultant");
    record31.set("slug", "strategy-consultant");
    record31.set("description", "Develops long-term strategies for organizations to achieve competitive advantage");
    record31.set("overview", "Strategy consultants analyze markets, competitors, and internal capabilities to develop strategies. They help organizations define direction and achieve strategic goals.");
    record31.set("jobDemand", "High");
    record31.set("entrySalary", 90000);
    record31.set("midSalary", 150000);
    record31.set("seniorSalary", 220000);
    record31.set("topStates", [{"state": "New York", "salary": 210000}, {"state": "California", "salary": 215000}, {"state": "Texas", "salary": 180000}, {"state": "Illinois", "salary": 175000}, {"state": "Massachusetts", "salary": 195000}]);
    record31.set("technicalSkills", [{"skill": "Strategic Analysis", "proficiency": "Advanced"}, {"skill": "Market Research", "proficiency": "Advanced"}, {"skill": "Competitive Analysis", "proficiency": "Advanced"}, {"skill": "Data Analysis", "proficiency": "Advanced"}, {"skill": "Excel", "proficiency": "Advanced"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Leadership", "proficiency": "Advanced"}, {"skill": "Industry Knowledge", "proficiency": "Advanced"}]);
    record31.set("softSkills", ["Strategic Thinking", "Communication", "Leadership", "Problem Solving", "Presentation Skills"]);
    record31.set("tools", ["Excel", "Tableau", "Power BI", "Jira", "Confluence", "Slack", "Visio", "Miro"]);
    record31.set("certifications", [{"name": "Strategy Certification", "issuer": "Coursera", "cost": 39, "duration": "3 months"}, {"name": "Business Strategy Certification", "issuer": "Udemy", "cost": 15, "duration": "1 month"}, {"name": "Competitive Strategy Certification", "issuer": "Udemy", "cost": 15, "duration": "1 month"}]);
    record31.set("faqs", [{"question": "Do I need an MBA?", "answer": "Not required, but helpful. Many strategy consultants have MBAs."}, {"question": "What's the difference between strategy and management consulting?", "answer": "Strategy consultants focus on long-term direction, management consultants focus on operations."}, {"question": "What skills are most important?", "answer": "Strategic thinking, analytical skills, and communication."}, {"question": "How do I get started?", "answer": "Join a consulting firm or build expertise in strategic planning."}, {"question": "What's the work-life balance?", "answer": "Can be demanding, especially with travel and client work."}, {"question": "What's the salary potential?", "answer": "Excellent, especially at top consulting firms."}]);
    record31.set("relatedCareers", ["management-consultant", "consultant", "business-analyst"]);
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
    record32.set("name", "Operations Manager");
    record32.set("slug", "operations-manager");
    record32.set("description", "Manages day-to-day operations and ensures efficiency and quality");
    record32.set("overview", "Operations managers oversee processes, manage resources, and ensure operations run smoothly. They focus on efficiency, quality, and cost control.");
    record32.set("jobDemand", "High");
    record32.set("entrySalary", 70000);
    record32.set("midSalary", 110000);
    record32.set("seniorSalary", 160000);
    record32.set("topStates", [{"state": "New York", "salary": 150000}, {"state": "California", "salary": 155000}, {"state": "Texas", "salary": 125000}, {"state": "Illinois", "salary": 120000}, {"state": "Massachusetts", "salary": 135000}]);
    record32.set("technicalSkills", [{"skill": "Process Management", "proficiency": "Advanced"}, {"skill": "Quality Control", "proficiency": "Advanced"}, {"skill": "Data Analysis", "proficiency": "Advanced"}, {"skill": "Excel", "proficiency": "Advanced"}, {"skill": "Project Management", "proficiency": "Advanced"}, {"skill": "Supply Chain", "proficiency": "Intermediate"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}]);
    record32.set("softSkills", ["Leadership", "Communication", "Problem Solving", "Organization", "Continuous Improvement"]);
    record32.set("tools", ["Excel", "Tableau", "Power BI", "Jira", "Confluence", "Slack", "Visio", "SAP"]);
    record32.set("certifications", [{"name": "Lean Six Sigma Green Belt", "issuer": "ASQ", "cost": 500, "duration": "2 months"}, {"name": "Operations Management Certification", "issuer": "Coursera", "cost": 39, "duration": "2 months"}, {"name": "Project Management Professional (PMP)", "issuer": "PMI", "cost": 555, "duration": "3 months"}]);
    record32.set("faqs", [{"question": "Do I need a degree?", "answer": "Not required, but helpful. Many ops managers come from various backgrounds."}, {"question": "What's the difference between operations and project management?", "answer": "Operations manage ongoing processes, project managers manage specific projects."}, {"question": "What certifications should I get?", "answer": "Lean Six Sigma or PMP are valuable."}, {"question": "What skills are most important?", "answer": "Process improvement, data analysis, and leadership."}, {"question": "What's the career growth?", "answer": "Can advance to Senior Manager, Director, or VP of Operations."}, {"question": "Is this a good career?", "answer": "Yes, stable with good growth potential and diverse opportunities."}]);
    record32.set("relatedCareers", ["project-manager", "supply-chain-manager", "business-analyst"]);
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
    record33.set("name", "Supply Chain Manager");
    record33.set("slug", "supply-chain-manager");
    record33.set("description", "Manages supply chain operations and logistics");
    record33.set("overview", "Supply chain managers oversee procurement, inventory, and logistics. They optimize supply chain efficiency and ensure products reach customers on time.");
    record33.set("jobDemand", "High");
    record33.set("entrySalary", 75000);
    record33.set("midSalary", 115000);
    record33.set("seniorSalary", 165000);
    record33.set("topStates", [{"state": "Texas", "salary": 155000}, {"state": "California", "salary": 160000}, {"state": "New York", "salary": 140000}, {"state": "Illinois", "salary": 135000}, {"state": "Georgia", "salary": 130000}]);
    record33.set("technicalSkills", [{"skill": "Supply Chain Management", "proficiency": "Advanced"}, {"skill": "Procurement", "proficiency": "Advanced"}, {"skill": "Inventory Management", "proficiency": "Advanced"}, {"skill": "Data Analysis", "proficiency": "Advanced"}, {"skill": "Excel", "proficiency": "Advanced"}, {"skill": "ERP Systems", "proficiency": "Advanced"}, {"skill": "Logistics", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}]);
    record33.set("softSkills", ["Leadership", "Communication", "Problem Solving", "Negotiation", "Continuous Improvement"]);
    record33.set("tools", ["SAP", "Oracle", "Excel", "Tableau", "Power BI", "Jira", "Slack", "Logistics Software"]);
    record33.set("certifications", [{"name": "APICS CSCP", "issuer": "APICS", "cost": 500, "duration": "3 months"}, {"name": "Supply Chain Management Certification", "issuer": "Coursera", "cost": 39, "duration": "2 months"}, {"name": "Lean Six Sigma Green Belt", "issuer": "ASQ", "cost": 500, "duration": "2 months"}]);
    record33.set("faqs", [{"question": "Do I need a degree?", "answer": "Not required, but helpful. Many supply chain managers come from logistics or operations."}, {"question": "What's the difference between supply chain and logistics?", "answer": "Supply chain is broader and includes procurement, logistics is focused on transportation."}, {"question": "What certifications should I get?", "answer": "APICS CSCP is most recognized in the field."}, {"question": "What skills are most important?", "answer": "Data analysis, negotiation, and process improvement."}, {"question": "What's the career growth?", "answer": "Can advance to Senior Manager, Director, or VP of Supply Chain."}, {"question": "Is this a good career?", "answer": "Yes, stable with good growth potential and strong salaries."}]);
    record33.set("relatedCareers", ["operations-manager", "logistics-manager", "procurement-manager"]);
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
    record34.set("name", "Logistics Manager");
    record34.set("slug", "logistics-manager");
    record34.set("description", "Manages transportation and distribution of goods");
    record34.set("overview", "Logistics managers oversee transportation, warehousing, and distribution. They optimize logistics operations to ensure efficient and cost-effective delivery.");
    record34.set("jobDemand", "High");
    record34.set("entrySalary", 70000);
    record34.set("midSalary", 110000);
    record34.set("seniorSalary", 160000);
    record34.set("topStates", [{"state": "Texas", "salary": 150000}, {"state": "California", "salary": 155000}, {"state": "New York", "salary": 135000}, {"state": "Illinois", "salary": 130000}, {"state": "Georgia", "salary": 125000}]);
    record34.set("technicalSkills", [{"skill": "Logistics Management", "proficiency": "Advanced"}, {"skill": "Transportation", "proficiency": "Advanced"}, {"skill": "Warehouse Management", "proficiency": "Advanced"}, {"skill": "Data Analysis", "proficiency": "Advanced"}, {"skill": "Excel", "proficiency": "Advanced"}, {"skill": "ERP Systems", "proficiency": "Advanced"}, {"skill": "Route Optimization", "proficiency": "Intermediate"}, {"skill": "Problem Solving", "proficiency": "Advanced"}]);
    record34.set("softSkills", ["Leadership", "Communication", "Problem Solving", "Organization", "Continuous Improvement"]);
    record34.set("tools", ["SAP", "Oracle", "Excel", "Tableau", "Power BI", "Jira", "Slack", "Logistics Software"]);
    record34.set("certifications", [{"name": "APICS CSCP", "issuer": "APICS", "cost": 500, "duration": "3 months"}, {"name": "Logistics Management Certification", "issuer": "Coursera", "cost": 39, "duration": "2 months"}, {"name": "Lean Six Sigma Green Belt", "issuer": "ASQ", "cost": 500, "duration": "2 months"}]);
    record34.set("faqs", [{"question": "Do I need a degree?", "answer": "Not required, but helpful. Many logistics managers come from operations or supply chain."}, {"question": "What's the difference between logistics and supply chain?", "answer": "Logistics focuses on transportation and distribution, supply chain is broader."}, {"question": "What certifications should I get?", "answer": "APICS CSCP is valuable for career advancement."}, {"question": "What skills are most important?", "answer": "Data analysis, problem solving, and process optimization."}, {"question": "What's the career growth?", "answer": "Can advance to Senior Manager, Director, or VP of Logistics."}, {"question": "Is this a good career?", "answer": "Yes, stable with good growth potential and strong salaries."}]);
    record34.set("relatedCareers", ["supply-chain-manager", "operations-manager", "procurement-manager"]);
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
    record35.set("name", "Procurement Manager");
    record35.set("slug", "procurement-manager");
    record35.set("description", "Manages purchasing and vendor relationships");
    record35.set("overview", "Procurement managers oversee purchasing, vendor selection, and contract negotiation. They ensure organizations get quality goods and services at competitive prices.");
    record35.set("jobDemand", "Moderate");
    record35.set("entrySalary", 70000);
    record35.set("midSalary", 110000);
    record35.set("seniorSalary", 160000);
    record35.set("topStates", [{"state": "Texas", "salary": 150000}, {"state": "California", "salary": 155000}, {"state": "New York", "salary": 135000}, {"state": "Illinois", "salary": 130000}, {"state": "Georgia", "salary": 125000}]);
    record35.set("technicalSkills", [{"skill": "Procurement", "proficiency": "Advanced"}, {"skill": "Vendor Management", "proficiency": "Advanced"}, {"skill": "Negotiation", "proficiency": "Advanced"}, {"skill": "Contract Management", "proficiency": "Advanced"}, {"skill": "Data Analysis", "proficiency": "Advanced"}, {"skill": "Excel", "proficiency": "Advanced"}, {"skill": "ERP Systems", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}]);
    record35.set("softSkills", ["Negotiation", "Communication", "Problem Solving", "Attention to Detail", "Relationship Building"]);
    record35.set("tools", ["SAP", "Oracle", "Excel", "Tableau", "Power BI", "Jira", "Slack", "Procurement Software"]);
    record35.set("certifications", [{"name": "APICS CSCP", "issuer": "APICS", "cost": 500, "duration": "3 months"}, {"name": "Procurement Certification", "issuer": "Coursera", "cost": 39, "duration": "2 months"}, {"name": "Contract Management Certification", "issuer": "Udemy", "cost": 15, "duration": "1 month"}]);
    record35.set("faqs", [{"question": "Do I need a degree?", "answer": "Not required, but helpful. Many procurement managers come from supply chain or operations."}, {"question": "What's the difference between procurement and purchasing?", "answer": "Procurement is broader and includes strategy, purchasing is transactional."}, {"question": "What certifications should I get?", "answer": "APICS CSCP is valuable for career advancement."}, {"question": "What skills are most important?", "answer": "Negotiation, vendor management, and data analysis."}, {"question": "What's the career growth?", "answer": "Can advance to Senior Manager, Director, or VP of Procurement."}, {"question": "Is this a good career?", "answer": "Yes, stable with good growth potential and strong salaries."}]);
    record35.set("relatedCareers", ["supply-chain-manager", "operations-manager", "logistics-manager"]);
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
    record36.set("name", "Real Estate Agent");
    record36.set("slug", "real-estate-agent");
    record36.set("description", "Buys, sells, and rents properties on behalf of clients");
    record36.set("overview", "Real estate agents help clients buy, sell, or rent properties. They market properties, negotiate deals, and manage transactions.");
    record36.set("jobDemand", "High");
    record36.set("entrySalary", 50000);
    record36.set("midSalary", 100000);
    record36.set("seniorSalary", 200000);
    record36.set("topStates", [{"state": "California", "salary": 220000}, {"state": "New York", "salary": 180000}, {"state": "Texas", "salary": 160000}, {"state": "Florida", "salary": 170000}, {"state": "Illinois", "salary": 150000}]);
    record36.set("technicalSkills", [{"skill": "Real Estate Knowledge", "proficiency": "Advanced"}, {"skill": "Sales", "proficiency": "Advanced"}, {"skill": "Negotiation", "proficiency": "Advanced"}, {"skill": "CRM Systems", "proficiency": "Advanced"}, {"skill": "Marketing", "proficiency": "Advanced"}, {"skill": "Excel", "proficiency": "Intermediate"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}]);
    record36.set("softSkills", ["Sales", "Communication", "Negotiation", "Relationship Building", "Persistence"]);
    record36.set("tools", ["MLS", "Zillow", "Realtor.com", "CRM Systems", "Excel", "Slack", "Zoom", "Marketing Tools"]);
    record36.set("certifications", [{"name": "Real Estate License", "issuer": "State", "cost": 500, "duration": "1 month"}, {"name": "NAR Membership", "issuer": "NAR", "cost": 200, "duration": "Ongoing"}, {"name": "Real Estate Marketing Certification", "issuer": "Udemy", "cost": 15, "duration": "1 month"}]);
    record36.set("faqs", [{"question": "Do I need a degree?", "answer": "Not required. You need a real estate license."}, {"question": "How do I get a real estate license?", "answer": "Take a course, pass the exam, and join a brokerage."}, {"question": "What's the income potential?", "answer": "Highly variable based on sales. Top agents earn significant commissions."}, {"question": "What skills are most important?", "answer": "Sales, negotiation, and relationship building."}, {"question": "What's the work-life balance?", "answer": "Can be demanding, especially during busy seasons."}, {"question": "Is this a good career?", "answer": "Yes, if you're good at sales and enjoy working with people."}]);
    record36.set("relatedCareers", ["sales-manager", "business-analyst", "financial-advisor"]);
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
    record37.set("name", "Insurance Agent");
    record37.set("slug", "insurance-agent");
    record37.set("description", "Sells insurance policies to individuals and businesses");
    record37.set("overview", "Insurance agents help clients find appropriate insurance coverage. They assess needs, explain policies, and manage claims.");
    record37.set("jobDemand", "High");
    record37.set("entrySalary", 50000);
    record37.set("midSalary", 90000);
    record37.set("seniorSalary", 160000);
    record37.set("topStates", [{"state": "California", "salary": 170000}, {"state": "New York", "salary": 140000}, {"state": "Texas", "salary": 130000}, {"state": "Florida", "salary": 135000}, {"state": "Illinois", "salary": 125000}]);
    record37.set("technicalSkills", [{"skill": "Insurance Knowledge", "proficiency": "Advanced"}, {"skill": "Sales", "proficiency": "Advanced"}, {"skill": "Customer Service", "proficiency": "Advanced"}, {"skill": "CRM Systems", "proficiency": "Advanced"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Excel", "proficiency": "Intermediate"}, {"skill": "Problem Solving", "proficiency": "Advanced"}, {"skill": "Compliance", "proficiency": "Advanced"}]);
    record37.set("softSkills", ["Sales", "Communication", "Relationship Building", "Empathy", "Persistence"]);
    record37.set("tools", ["Insurance Software", "CRM Systems", "Excel", "Slack", "Zoom", "Marketing Tools", "Email", "Phone Systems"]);
    record37.set("certifications", [{"name": "Insurance License", "issuer": "State", "cost": 500, "duration": "1 month"}, {"name": "Certified Insurance Counselor", "issuer": "The National Alliance", "cost": 500, "duration": "3 months"}, {"name": "Chartered Special Risk (CSR)", "issuer": "The Institutes", "cost": 500, "duration": "3 months"}]);
    record37.set("faqs", [{"question": "Do I need a degree?", "answer": "Not required. You need an insurance license."}, {"question": "How do I get an insurance license?", "answer": "Take a course, pass the exam, and work for an insurance company or agency."}, {"question": "What's the income potential?", "answer": "Highly variable based on sales. Top agents earn significant commissions."}, {"question": "What skills are most important?", "answer": "Sales, communication, and product knowledge."}, {"question": "What's the work-life balance?", "answer": "Can be demanding, especially during busy seasons."}, {"question": "Is this a good career?", "answer": "Yes, if you're good at sales and enjoy helping people."}]);
    record37.set("relatedCareers", ["financial-advisor", "sales-manager", "real-estate-agent"]);
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
    record38.set("name", "Financial Advisor");
    record38.set("slug", "financial-advisor");
    record38.set("description", "Provides financial planning and investment advice to clients");
    record38.set("overview", "Financial advisors help clients plan for retirement, invest wisely, and manage wealth. They assess financial goals and recommend strategies.");
    record38.set("jobDemand", "High");
    record38.set("entrySalary", 60000);
    record38.set("midSalary", 110000);
    record38.set("seniorSalary", 180000);
    record38.set("topStates", [{"state": "New York", "salary": 190000}, {"state": "California", "salary": 195000}, {"state": "Texas", "salary": 155000}, {"state": "Illinois", "salary": 150000}, {"state": "Massachusetts", "salary": 170000}]);
    record38.set("technicalSkills", [{"skill": "Financial Planning", "proficiency": "Advanced"}, {"skill": "Investment Knowledge", "proficiency": "Advanced"}, {"skill": "Tax Planning", "proficiency": "Advanced"}, {"skill": "Excel", "proficiency": "Advanced"}, {"skill": "CRM Systems", "proficiency": "Advanced"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Compliance", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}]);
    record38.set("softSkills", ["Communication", "Relationship Building", "Empathy", "Trustworthiness", "Problem Solving"]);
    record38.set("tools", ["Financial Planning Software", "Excel", "CRM Systems", "Bloomberg Terminal", "Morningstar", "Slack", "Zoom", "Email"]);
    record38.set("certifications", [{"name": "CFP (Certified Financial Planner)", "issuer": "CFP Board", "cost": 1000, "duration": "6 months"}, {"name": "Series 7 License", "issuer": "FINRA", "cost": 500, "duration": "1 month"}, {"name": "Series 65 License", "issuer": "FINRA", "cost": 500, "duration": "1 month"}]);
    record38.set("faqs", [{"question": "Do I need a degree?", "answer": "Not required, but helpful. Many advisors have finance or business degrees."}, {"question": "What certifications should I get?", "answer": "CFP is most prestigious. Series 7 and 65 are required for certain roles."}, {"question": "What skills are most important?", "answer": "Financial knowledge, communication, and relationship building."}, {"question": "What's the income potential?", "answer": "Good, with potential for significant earnings through commissions and fees."}, {"question": "What's the work-life balance?", "answer": "Generally good, though can be demanding during market volatility."}, {"question": "Is this a good career?", "answer": "Yes, if you're interested in finance and helping people achieve goals."}]);
    record38.set("relatedCareers", ["investment-banker", "accountant", "finance-analyst"]);
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
    record39.set("name", "Investment Banker");
    record39.set("slug", "investment-banker");
    record39.set("description", "Advises companies on mergers, acquisitions, and capital raising");
    record39.set("overview", "Investment bankers help companies raise capital, execute mergers and acquisitions, and provide financial advisory services. They work on complex financial transactions.");
    record39.set("jobDemand", "Moderate");
    record39.set("entrySalary", 100000);
    record39.set("midSalary", 200000);
    record39.set("seniorSalary", 400000);
    record39.set("topStates", [{"state": "New York", "salary": 450000}, {"state": "California", "salary": 400000}, {"state": "Texas", "salary": 300000}, {"state": "Illinois", "salary": 280000}, {"state": "Massachusetts", "salary": 350000}]);
    record39.set("technicalSkills", [{"skill": "Financial Modeling", "proficiency": "Advanced"}, {"skill": "Valuation", "proficiency": "Advanced"}, {"skill": "M&A", "proficiency": "Advanced"}, {"skill": "Excel", "proficiency": "Advanced"}, {"skill": "PowerPoint", "proficiency": "Advanced"}, {"skill": "Accounting", "proficiency": "Advanced"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}]);
    record39.set("softSkills", ["Communication", "Relationship Building", "Problem Solving", "Work Ethic", "Attention to Detail"]);
    record39.set("tools", ["Excel", "PowerPoint", "Bloomberg Terminal", "CapitalIQ", "Pitchbook", "Slack", "Zoom", "Email"]);
    record39.set("certifications", [{"name": "CFA Level 1", "issuer": "CFA Institute", "cost": 1000, "duration": "3 months"}, {"name": "Series 7 License", "issuer": "FINRA", "cost": 500, "duration": "1 month"}, {"name": "Financial Modeling Certification", "issuer": "Udemy", "cost": 15, "duration": "1 month"}]);
    record39.set("faqs", [{"question": "Do I need an MBA?", "answer": "Not required, but helpful. Many investment bankers have MBAs."}, {"question": "What's the typical career path?", "answer": "Analyst, Associate, Vice President, Director, Managing Director."}, {"question": "What skills are most important?", "answer": "Financial modeling, communication, and relationship building."}, {"question": "What's the work-life balance?", "answer": "Demanding, with long hours and high stress."}, {"question": "What's the salary potential?", "answer": "Excellent, especially with bonuses and equity."}, {"question": "Is this a good career?", "answer": "Yes, if you're willing to work hard and interested in finance."}]);
    record39.set("relatedCareers", ["financial-advisor", "trader", "finance-analyst"]);
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
    record40.set("name", "Trader");
    record40.set("slug", "trader");
    record40.set("description", "Buys and sells financial instruments to generate profits");
    record40.set("overview", "Traders buy and sell stocks, bonds, currencies, and derivatives. They analyze markets and execute trades to generate returns.");
    record40.set("jobDemand", "Moderate");
    record40.set("entrySalary", 80000);
    record40.set("midSalary", 150000);
    record40.set("seniorSalary", 300000);
    record40.set("topStates", [{"state": "New York", "salary": 350000}, {"state": "California", "salary": 300000}, {"state": "Texas", "salary": 200000}, {"state": "Illinois", "salary": 180000}, {"state": "Massachusetts", "salary": 250000}]);
    record40.set("technicalSkills", [{"skill": "Market Analysis", "proficiency": "Advanced"}, {"skill": "Trading Platforms", "proficiency": "Advanced"}, {"skill": "Risk Management", "proficiency": "Advanced"}, {"skill": "Excel", "proficiency": "Advanced"}, {"skill": "Financial Modeling", "proficiency": "Advanced"}, {"skill": "Technical Analysis", "proficiency": "Advanced"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}]);
    record40.set("softSkills", ["Decision Making", "Risk Management", "Stress Management", "Analytical Thinking", "Quick Thinking"]);
    record40.set("tools", ["Bloomberg Terminal", "Trading Platforms", "Excel", "Python", "R", "Slack", "Zoom", "Email"]);
    record40.set("certifications", [{"name": "Series 7 License", "issuer": "FINRA", "cost": 500, "duration": "1 month"}, {"name": "Series 63 License", "issuer": "FINRA", "cost": 500, "duration": "1 month"}, {"name": "CFA Level 1", "issuer": "CFA Institute", "cost": 1000, "duration": "3 months"}]);
    record40.set("faqs", [{"question": "Do I need a degree?", "answer": "Not required, but helpful. Many traders have finance or math degrees."}, {"question": "What's the typical career path?", "answer": "Junior Trader, Trader, Senior Trader, Trading Manager."}, {"question": "What skills are most important?", "answer": "Market analysis, risk management, and quick decision making."}, {"question": "What's the work-life balance?", "answer": "Demanding, with long hours and high stress."}, {"question": "What's the salary potential?", "answer": "Excellent, especially with bonuses and profit sharing."}, {"question": "Is this a good career?", "answer": "Yes, if you're interested in markets and can handle stress."}]);
    record40.set("relatedCareers", ["investment-banker", "financial-advisor", "analyst"]);
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
    record41.set("name", "Analyst");
    record41.set("slug", "analyst");
    record41.set("description", "Analyzes data and information to support business decisions");
    record41.set("overview", "Analysts examine data, identify trends, and provide insights. They work across various domains including finance, business, and operations.");
    record41.set("jobDemand", "High");
    record41.set("entrySalary", 65000);
    record41.set("midSalary", 100000);
    record41.set("seniorSalary", 150000);
    record41.set("topStates", [{"state": "New York", "salary": 140000}, {"state": "California", "salary": 145000}, {"state": "Texas", "salary": 115000}, {"state": "Illinois", "salary": 110000}, {"state": "Massachusetts", "salary": 125000}]);
    record41.set("technicalSkills", [{"skill": "Data Analysis", "proficiency": "Advanced"}, {"skill": "Excel", "proficiency": "Advanced"}, {"skill": "SQL", "proficiency": "Advanced"}, {"skill": "Python", "proficiency": "Intermediate"}, {"skill": "Tableau", "proficiency": "Intermediate"}, {"skill": "Statistics", "proficiency": "Advanced"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}]);
    record41.set("softSkills", ["Analytical Thinking", "Communication", "Attention to Detail", "Problem Solving", "Continuous Learning"]);
    record41.set("tools", ["Excel", "SQL", "Python", "Tableau", "Power BI", "Jira", "Slack", "Jupyter"]);
    record41.set("certifications", [{"name": "Google Data Analytics Certificate", "issuer": "Google", "cost": 39, "duration": "3 months"}, {"name": "Microsoft Certified: Data Analyst Associate", "issuer": "Microsoft", "cost": 165, "duration": "2 months"}, {"name": "SQL Certification", "issuer": "Udemy", "cost": 15, "duration": "1 month"}]);
    record41.set("faqs", [{"question": "What's the difference between analyst and data scientist?", "answer": "Analysts focus on business insights, data scientists build predictive models."}, {"question": "What skills should I learn first?", "answer": "Excel and SQL are essential foundations."}, {"question": "What certifications should I get?", "answer": "Google Data Analytics Certificate is good for beginners."}, {"question": "What's the career growth?", "answer": "Can advance to Senior Analyst, Manager, or transition to other roles."}, {"question": "Is this a good entry-level role?", "answer": "Yes, good entry point into data and analytics."}, {"question": "What's the salary potential?", "answer": "Good, with strong growth potential."}]);
    record41.set("relatedCareers", ["data-analyst", "business-analyst", "finance-analyst"]);
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
    record42.set("name", "Researcher");
    record42.set("slug", "researcher");
    record42.set("description", "Conducts research to advance knowledge and solve problems");
    record42.set("overview", "Researchers design studies, collect data, and analyze findings. They work in academia, industry, and government to advance knowledge.");
    record42.set("jobDemand", "Moderate");
    record42.set("entrySalary", 60000);
    record42.set("midSalary", 95000);
    record42.set("seniorSalary", 140000);
    record42.set("topStates", [{"state": "California", "salary": 150000}, {"state": "Massachusetts", "salary": 145000}, {"state": "New York", "salary": 135000}, {"state": "Washington", "salary": 140000}, {"state": "Illinois", "salary": 125000}]);
    record42.set("technicalSkills", [{"skill": "Research Methodology", "proficiency": "Advanced"}, {"skill": "Data Analysis", "proficiency": "Advanced"}, {"skill": "Statistics", "proficiency": "Advanced"}, {"skill": "Python", "proficiency": "Intermediate"}, {"skill": "R", "proficiency": "Intermediate"}, {"skill": "SQL", "proficiency": "Intermediate"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}]);
    record42.set("softSkills", ["Critical Thinking", "Communication", "Attention to Detail", "Curiosity", "Persistence"]);
    record42.set("tools", ["Python", "R", "SQL", "SPSS", "SAS", "Jupyter", "Git", "LaTeX"]);
    record42.set("certifications", [{"name": "Research Methods Certification", "issuer": "Coursera", "cost": 39, "duration": "2 months"}, {"name": "Statistics Certification", "issuer": "Coursera", "cost": 39, "duration": "2 months"}, {"name": "Python for Research", "issuer": "Udemy", "cost": 15, "duration": "1 month"}]);
    record42.set("faqs", [{"question": "Do I need a PhD?", "answer": "Not required for all roles, but helpful for academic positions."}, {"question": "What's the typical career path?", "answer": "Research Assistant, Researcher, Senior Researcher, Principal Investigator."}, {"question": "What skills are most important?", "answer": "Research methodology, statistics, and communication."}, {"question": "What's the work-life balance?", "answer": "Generally good, though can be demanding during projects."}, {"question": "What's the salary potential?", "answer": "Moderate, with potential for growth in industry roles."}, {"question": "Is this a good career?", "answer": "Yes, if you're curious and enjoy solving problems."}]);
    record42.set("relatedCareers", ["scientist", "data-analyst", "analyst"]);
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
    record43.set("name", "Scientist");
    record43.set("slug", "scientist");
    record43.set("description", "Conducts scientific research and experiments");
    record43.set("overview", "Scientists design and conduct experiments to advance knowledge. They work in various fields including biology, chemistry, physics, and environmental science.");
    record43.set("jobDemand", "Moderate");
    record43.set("entrySalary", 65000);
    record43.set("midSalary", 100000);
    record43.set("seniorSalary", 150000);
    record43.set("topStates", [{"state": "California", "salary": 160000}, {"state": "Massachusetts", "salary": 155000}, {"state": "New York", "salary": 145000}, {"state": "Washington", "salary": 150000}, {"state": "Illinois", "salary": 135000}]);
    record43.set("technicalSkills", [{"skill": "Scientific Method", "proficiency": "Advanced"}, {"skill": "Laboratory Techniques", "proficiency": "Advanced"}, {"skill": "Data Analysis", "proficiency": "Advanced"}, {"skill": "Statistics", "proficiency": "Advanced"}, {"skill": "Python", "proficiency": "Intermediate"}, {"skill": "R", "proficiency": "Intermediate"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}]);
    record43.set("softSkills", ["Critical Thinking", "Communication", "Attention to Detail", "Curiosity", "Persistence"]);
    record43.set("tools", ["Laboratory Equipment", "Python", "R", "SPSS", "SAS", "Jupyter", "Git", "LaTeX"]);
    record43.set("certifications", [{"name": "Scientific Research Certification", "issuer": "Coursera", "cost": 39, "duration": "2 months"}, {"name": "Statistics Certification", "issuer": "Coursera", "cost": 39, "duration": "2 months"}, {"name": "Python for Science", "issuer": "Udemy", "cost": 15, "duration": "1 month"}]);
    record43.set("faqs", [{"question": "Do I need a PhD?", "answer": "Not required for all roles, but helpful for research positions."}, {"question": "What's the typical career path?", "answer": "Research Assistant, Scientist, Senior Scientist, Principal Investigator."}, {"question": "What skills are most important?", "answer": "Scientific method, laboratory techniques, and data analysis."}, {"question": "What's the work-life balance?", "answer": "Generally good, though can be demanding during projects."}, {"question": "What's the salary potential?", "answer": "Moderate, with potential for growth in industry roles."}, {"question": "Is this a good career?", "answer": "Yes, if you're passionate about science and discovery."}]);
    record43.set("relatedCareers", ["researcher", "engineer", "data-analyst"]);
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
    record44.set("name", "Engineer");
    record44.set("slug", "engineer");
    record44.set("description", "Designs and builds structures, machines, and systems");
    record44.set("overview", "Engineers apply scientific and mathematical principles to design and build solutions. They work in various fields including civil, mechanical, electrical, and chemical engineering.");
    record44.set("jobDemand", "High");
    record44.set("entrySalary", 75000);
    record44.set("midSalary", 120000);
    record44.set("seniorSalary", 170000);
    record44.set("topStates", [{"state": "California", "salary": 180000}, {"state": "Texas", "salary": 150000}, {"state": "New York", "salary": 160000}, {"state": "Washington", "salary": 170000}, {"state": "Illinois", "salary": 145000}]);
    record44.set("technicalSkills", [{"skill": "CAD", "proficiency": "Advanced"}, {"skill": "Mathematics", "proficiency": "Advanced"}, {"skill": "Physics", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}, {"skill": "Project Management", "proficiency": "Intermediate"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Python", "proficiency": "Intermediate"}, {"skill": "MATLAB", "proficiency": "Intermediate"}]);
    record44.set("softSkills", ["Problem Solving", "Attention to Detail", "Communication", "Teamwork", "Continuous Learning"]);
    record44.set("tools", ["CAD Software", "MATLAB", "Python", "Simulink", "Git", "Project Management Tools", "Testing Equipment", "Slack"]);
    record44.set("certifications", [{"name": "Professional Engineer (PE)", "issuer": "NCEES", "cost": 500, "duration": "6 months"}, {"name": "FE Exam", "issuer": "NCEES", "cost": 300, "duration": "3 months"}, {"name": "Engineering Certification", "issuer": "Coursera", "cost": 39, "duration": "3 months"}]);
    record44.set("faqs", [{"question": "Do I need a degree?", "answer": "Yes, most engineering roles require a degree."}, {"question": "What's the typical career path?", "answer": "Junior Engineer, Engineer, Senior Engineer, Engineering Manager."}, {"question": "What certifications should I get?", "answer": "PE (Professional Engineer) is valuable for career advancement."}, {"question": "What skills are most important?", "answer": "Problem solving, mathematics, and communication."}, {"question": "What's the work-life balance?", "answer": "Generally good, though can be demanding during projects."}, {"question": "What's the salary potential?", "answer": "Good, with strong growth potential."}]);
    record44.set("relatedCareers", ["architect", "scientist", "software-engineer"]);
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
    record45.set("name", "Architect");
    record45.set("slug", "architect");
    record45.set("description", "Designs buildings and structures");
    record45.set("overview", "Architects design buildings and structures, considering aesthetics, functionality, and safety. They work with clients, engineers, and contractors to bring designs to life.");
    record45.set("jobDemand", "Moderate");
    record45.set("entrySalary", 70000);
    record45.set("midSalary", 110000);
    record45.set("seniorSalary", 160000);
    record45.set("topStates", [{"state": "California", "salary": 170000}, {"state": "New York", "salary": 145000}, {"state": "Texas", "salary": 130000}, {"state": "Illinois", "salary": 125000}, {"state": "Massachusetts", "salary": 140000}]);
    record45.set("technicalSkills", [{"skill": "CAD", "proficiency": "Advanced"}, {"skill": "BIM", "proficiency": "Advanced"}, {"skill": "Design", "proficiency": "Advanced"}, {"skill": "Building Codes", "proficiency": "Advanced"}, {"skill": "Project Management", "proficiency": "Advanced"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}, {"skill": "Sustainability", "proficiency": "Intermediate"}]);
    record45.set("softSkills", ["Creativity", "Communication", "Problem Solving", "Attention to Detail", "Leadership"]);
    record45.set("tools", ["AutoCAD", "Revit", "SketchUp", "Rhino", "Lumion", "Project Management Tools", "Slack", "Email"]);
    record45.set("certifications", [{"name": "AIA Membership", "issuer": "AIA", "cost": 500, "duration": "Ongoing"}, {"name": "NCARB Certification", "issuer": "NCARB", "cost": 500, "duration": "6 months"}, {"name": "LEED Certification", "issuer": "USGBC", "cost": 200, "duration": "1 month"}]);
    record45.set("faqs", [{"question": "Do I need a degree?", "answer": "Yes, most architecture roles require a degree."}, {"question": "What's the typical career path?", "answer": "Intern, Junior Architect, Architect, Senior Architect, Principal."}, {"question": "What certifications should I get?", "answer": "NCARB and LEED are valuable for career advancement."}, {"question": "What skills are most important?", "answer": "Design, CAD, and communication."}, {"question": "What's the work-life balance?", "answer": "Generally good, though can be demanding during projects."}, {"question": "What's the salary potential?", "answer": "Good, with strong growth potential."}]);
    record45.set("relatedCareers", ["engineer", "designer", "project-manager"]);
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
    record46.set("name", "Designer");
    record46.set("slug", "designer");
    record46.set("description", "Creates visual designs for products, interfaces, and communications");
    record46.set("overview", "Designers create visual designs for various purposes including products, interfaces, and marketing materials. They combine aesthetics with functionality.");
    record46.set("jobDemand", "High");
    record46.set("entrySalary", 65000);
    record46.set("midSalary", 100000);
    record46.set("seniorSalary", 150000);
    record46.set("topStates", [{"state": "California", "salary": 160000}, {"state": "New York", "salary": 135000}, {"state": "Washington", "salary": 145000}, {"state": "Massachusetts", "salary": 130000}, {"state": "Texas", "salary": 115000}]);
    record46.set("technicalSkills", [{"skill": "Design Software", "proficiency": "Advanced"}, {"skill": "Visual Design", "proficiency": "Advanced"}, {"skill": "User Experience", "proficiency": "Advanced"}, {"skill": "Color Theory", "proficiency": "Advanced"}, {"skill": "Typography", "proficiency": "Advanced"}, {"skill": "Prototyping", "proficiency": "Intermediate"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}]);
    record46.set("softSkills", ["Creativity", "Communication", "Attention to Detail", "Collaboration", "Problem Solving"]);
    record46.set("tools", ["Figma", "Adobe Creative Suite", "Sketch", "Framer", "Miro", "Slack", "Zoom", "Git"]);
    record46.set("certifications", [{"name": "Google UX Design Certificate", "issuer": "Google", "cost": 39, "duration": "6 months"}, {"name": "Adobe Certified Associate", "issuer": "Adobe", "cost": 200, "duration": "1 month"}, {"name": "Design Fundamentals", "issuer": "Coursera", "cost": 39, "duration": "2 months"}]);
    record46.set("faqs", [{"question": "Do I need a degree?", "answer": "Not required. Many designers have portfolios instead of degrees."}, {"question": "What software should I learn?", "answer": "Figma for UI/UX, Adobe Creative Suite for graphic design."}, {"question": "What's the typical career path?", "answer": "Junior Designer, Designer, Senior Designer, Design Lead."}, {"question": "What skills are most important?", "answer": "Design software, visual design, and communication."}, {"question": "What's the work-life balance?", "answer": "Generally good, though can be demanding during projects."}, {"question": "What's the salary potential?", "answer": "Good, with strong growth potential."}]);
    record46.set("relatedCareers", ["ux-designer", "graphic-designer", "architect"]);
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
    record47.set("name", "Photographer");
    record47.set("slug", "photographer");
    record47.set("description", "Captures images for various purposes including commercial and artistic");
    record47.set("overview", "Photographers capture images for commercial, editorial, or artistic purposes. They work with clients to understand their needs and deliver quality images.");
    record47.set("jobDemand", "Moderate");
    record47.set("entrySalary", 50000);
    record47.set("midSalary", 80000);
    record47.set("seniorSalary", 130000);
    record47.set("topStates", [{"state": "California", "salary": 140000}, {"state": "New York", "salary": 120000}, {"state": "Texas", "salary": 100000}, {"state": "Florida", "salary": 105000}, {"state": "Illinois", "salary": 95000}]);
    record47.set("technicalSkills", [{"skill": "Photography", "proficiency": "Advanced"}, {"skill": "Camera Equipment", "proficiency": "Advanced"}, {"skill": "Lighting", "proficiency": "Advanced"}, {"skill": "Composition", "proficiency": "Advanced"}, {"skill": "Photo Editing", "proficiency": "Advanced"}, {"skill": "Business Skills", "proficiency": "Intermediate"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}]);
    record47.set("softSkills", ["Creativity", "Communication", "Attention to Detail", "Patience", "Business Acumen"]);
    record47.set("tools", ["Camera Equipment", "Lightroom", "Photoshop", "Capture One", "Slack", "Email", "Portfolio Website", "Social Media"]);
    record47.set("certifications", [{"name": "Professional Photography Certification", "issuer": "PPA", "cost": 500, "duration": "1 year"}, {"name": "Adobe Certified Associate", "issuer": "Adobe", "cost": 200, "duration": "1 month"}, {"name": "Photography Fundamentals", "issuer": "Udemy", "cost": 15, "duration": "1 month"}]);
    record47.set("faqs", [{"question": "Do I need a degree?", "answer": "Not required. A strong portfolio is more important."}, {"question": "What equipment do I need?", "answer": "A good camera, lenses, and lighting equipment."}, {"question": "What's the typical career path?", "answer": "Freelance, Studio Photographer, Commercial Photographer, Art Director."}, {"question": "What skills are most important?", "answer": "Photography, lighting, and business skills."}, {"question": "What's the work-life balance?", "answer": "Variable, depending on projects and clients."}, {"question": "What's the salary potential?", "answer": "Highly variable based on specialization and client base."}]);
    record47.set("relatedCareers", ["videographer", "designer", "content-creator"]);
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
    record48.set("name", "Videographer");
    record48.set("slug", "videographer");
    record48.set("description", "Creates video content for various purposes including commercial and artistic");
    record48.set("overview", "Videographers capture and edit video content for commercials, documentaries, and artistic projects. They work with clients to bring their vision to life.");
    record48.set("jobDemand", "Moderate");
    record48.set("entrySalary", 50000);
    record48.set("midSalary", 85000);
    record48.set("seniorSalary", 140000);
    record48.set("topStates", [{"state": "California", "salary": 150000}, {"state": "New York", "salary": 125000}, {"state": "Texas", "salary": 105000}, {"state": "Florida", "salary": 110000}, {"state": "Illinois", "salary": 100000}]);
    record48.set("technicalSkills", [{"skill": "Videography", "proficiency": "Advanced"}, {"skill": "Video Editing", "proficiency": "Advanced"}, {"skill": "Camera Equipment", "proficiency": "Advanced"}, {"skill": "Lighting", "proficiency": "Advanced"}, {"skill": "Sound Design", "proficiency": "Intermediate"}, {"skill": "Color Grading", "proficiency": "Intermediate"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}]);
    record48.set("softSkills", ["Creativity", "Communication", "Attention to Detail", "Patience", "Business Acumen"]);
    record48.set("tools", ["Camera Equipment", "Premiere Pro", "Final Cut Pro", "DaVinci Resolve", "After Effects", "Slack", "Email", "Portfolio Website"]);
    record48.set("certifications", [{"name": "Adobe Certified Associate", "issuer": "Adobe", "cost": 200, "duration": "1 month"}, {"name": "Video Production Certification", "issuer": "Udemy", "cost": 15, "duration": "1 month"}, {"name": "Filmmaking Fundamentals", "issuer": "Coursera", "cost": 39, "duration": "2 months"}]);
    record48.set("faqs", [{"question": "Do I need a degree?", "answer": "Not required. A strong portfolio is more important."}, {"question": "What equipment do I need?", "answer": "A good camera, lenses, lighting, and audio equipment."}, {"question": "What's the typical career path?", "answer": "Freelance, Studio Videographer, Commercial Videographer, Director."}, {"question": "What skills are most important?", "answer": "Videography, editing, and storytelling."}, {"question": "What's the work-life balance?", "answer": "Variable, depending on projects and clients."}, {"question": "What's the salary potential?", "answer": "Highly variable based on specialization and client base."}]);
    record48.set("relatedCareers", ["photographer", "content-creator", "designer"]);
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
    record49.set("name", "Content Creator");
    record49.set("slug", "content-creator");
    record49.set("description", "Creates content for various platforms including social media and blogs");
    record49.set("overview", "Content creators produce content for social media, blogs, YouTube, and other platforms. They engage audiences and build communities around their content.");
    record49.set("jobDemand", "High");
    record49.set("entrySalary", 40000);
    record49.set("midSalary", 80000);
    record49.set("seniorSalary", 150000);
    record49.set("topStates", [{"state": "California", "salary": 160000}, {"state": "New York", "salary": 135000}, {"state": "Texas", "salary": 110000}, {"state": "Florida", "salary": 115000}, {"state": "Illinois", "salary": 105000}]);
    record49.set("technicalSkills", [{"skill": "Content Creation", "proficiency": "Advanced"}, {"skill": "Social Media", "proficiency": "Advanced"}, {"skill": "Video Editing", "proficiency": "Intermediate"}, {"skill": "Photography", "proficiency": "Intermediate"}, {"skill": "Writing", "proficiency": "Advanced"}, {"skill": "Analytics", "proficiency": "Intermediate"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}]);
    record49.set("softSkills", ["Creativity", "Communication", "Authenticity", "Consistency", "Engagement"]);
    record49.set("tools", ["Social Media Platforms", "Video Editing Software", "Photography Tools", "Analytics Tools", "Canva", "Slack", "Email", "Portfolio Website"]);
    record49.set("certifications", [{"name": "Social Media Marketing Certification", "issuer": "HubSpot", "cost": 0, "duration": "1 month"}, {"name": "Content Marketing Certification", "issuer": "Coursera", "cost": 39, "duration": "2 months"}, {"name": "Video Production Certification", "issuer": "Udemy", "cost": 15, "duration": "1 month"}]);
    record49.set("faqs", [{"question": "Do I need a degree?", "answer": "Not required. Passion and consistency are more important."}, {"question": "How do I get started?", "answer": "Choose a platform, create content consistently, and engage with your audience."}, {"question": "What's the typical career path?", "answer": "Content Creator, Influencer, Brand Ambassador, Content Manager."}, {"question": "What skills are most important?", "answer": "Creativity, communication, and consistency."}, {"question": "What's the work-life balance?", "answer": "Variable, depending on content schedule and audience."}, {"question": "What's the salary potential?", "answer": "Highly variable based on audience size and monetization."}]);
    record49.set("relatedCareers", ["social-media-manager", "videographer", "photographer"]);
  try {
    app.save(record49);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record50 = new Record(collection);
    record50.set("name", "Social Media Manager");
    record50.set("slug", "social-media-manager");
    record50.set("description", "Manages social media presence and engagement for organizations");
    record50.set("overview", "Social media managers create content, manage communities, and analyze engagement. They build brand presence and drive customer engagement on social platforms.");
    record50.set("jobDemand", "High");
    record50.set("entrySalary", 55000);
    record50.set("midSalary", 90000);
    record50.set("seniorSalary", 140000);
    record50.set("topStates", [{"state": "New York", "salary": 135000}, {"state": "California", "salary": 140000}, {"state": "Texas", "salary": 110000}, {"state": "Illinois", "salary": 105000}, {"state": "Massachusetts", "salary": 120000}]);
    record50.set("technicalSkills", [{"skill": "Social Media Platforms", "proficiency": "Advanced"}, {"skill": "Content Creation", "proficiency": "Advanced"}, {"skill": "Analytics", "proficiency": "Advanced"}, {"skill": "Community Management", "proficiency": "Advanced"}, {"skill": "Copywriting", "proficiency": "Advanced"}, {"skill": "Design Tools", "proficiency": "Intermediate"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}]);
    record50.set("softSkills", ["Creativity", "Communication", "Engagement", "Consistency", "Trend Awareness"]);
    record50.set("tools", ["Social Media Platforms", "Hootsuite", "Buffer", "Canva", "Analytics Tools", "Slack", "Email", "Google Analytics"]);
    record50.set("certifications", [{"name": "HubSpot Social Media Certification", "issuer": "HubSpot", "cost": 0, "duration": "1 month"}, {"name": "Social Media Marketing Certification", "issuer": "Coursera", "cost": 39, "duration": "2 months"}, {"name": "Content Marketing Certification", "issuer": "Udemy", "cost": 15, "duration": "1 month"}]);
    record50.set("faqs", [{"question": "Do I need a degree?", "answer": "Not required. Experience and portfolio are more important."}, {"question": "What platforms should I focus on?", "answer": "Instagram, TikTok, LinkedIn, and Twitter are most popular."}, {"question": "What's the typical career path?", "answer": "Social Media Coordinator, Manager, Senior Manager, Director."}, {"question": "What skills are most important?", "answer": "Content creation, analytics, and community management."}, {"question": "What's the work-life balance?", "answer": "Can be demanding, especially during campaigns."}, {"question": "What's the salary potential?", "answer": "Good, with strong growth potential."}]);
    record50.set("relatedCareers", ["content-creator", "digital-marketer", "marketing-manager"]);
  try {
    app.save(record50);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record51 = new Record(collection);
    record51.set("name", "SEO Specialist");
    record51.set("slug", "seo-specialist");
    record51.set("description", "Optimizes websites for search engine visibility");
    record51.set("overview", "SEO specialists improve website visibility in search results through optimization techniques. They analyze keywords, create content, and build links to drive organic traffic.");
    record51.set("jobDemand", "High");
    record51.set("entrySalary", 55000);
    record51.set("midSalary", 90000);
    record51.set("seniorSalary", 140000);
    record51.set("topStates", [{"state": "New York", "salary": 135000}, {"state": "California", "salary": 140000}, {"state": "Texas", "salary": 110000}, {"state": "Illinois", "salary": 105000}, {"state": "Massachusetts", "salary": 120000}]);
    record51.set("technicalSkills", [{"skill": "SEO", "proficiency": "Advanced"}, {"skill": "Keyword Research", "proficiency": "Advanced"}, {"skill": "Content Optimization", "proficiency": "Advanced"}, {"skill": "Technical SEO", "proficiency": "Advanced"}, {"skill": "Analytics", "proficiency": "Advanced"}, {"skill": "HTML/CSS", "proficiency": "Intermediate"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}]);
    record51.set("softSkills", ["Analytical Thinking", "Communication", "Attention to Detail", "Continuous Learning", "Problem Solving"]);
    record51.set("tools", ["Google Analytics", "SEMrush", "Ahrefs", "Moz", "Google Search Console", "Excel", "Slack", "Email"]);
    record51.set("certifications", [{"name": "Google Analytics Certification", "issuer": "Google", "cost": 0, "duration": "1 month"}, {"name": "SEO Certification", "issuer": "Moz", "cost": 500, "duration": "2 months"}, {"name": "SEO Fundamentals", "issuer": "Udemy", "cost": 15, "duration": "1 month"}]);
    record51.set("faqs", [{"question": "Do I need a degree?", "answer": "Not required. Experience and certifications are more important."}, {"question": "What tools should I learn?", "answer": "Google Analytics, SEMrush, and Ahrefs are essential."}, {"question": "What's the typical career path?", "answer": "SEO Specialist, Senior Specialist, SEO Manager, Director."}, {"question": "What skills are most important?", "answer": "Keyword research, content optimization, and analytics."}, {"question": "What's the work-life balance?", "answer": "Generally good, though can be demanding during campaigns."}, {"question": "What's the salary potential?", "answer": "Good, with strong growth potential."}]);
    record51.set("relatedCareers", ["digital-marketer", "content-creator", "social-media-manager"]);
  try {
    app.save(record51);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record52 = new Record(collection);
    record52.set("name", "Digital Marketer");
    record52.set("slug", "digital-marketer");
    record52.set("description", "Develops and executes digital marketing strategies");
    record52.set("overview", "Digital marketers create and manage online marketing campaigns across multiple channels. They use data and analytics to drive customer acquisition and engagement.");
    record52.set("jobDemand", "High");
    record52.set("entrySalary", 60000);
    record52.set("midSalary", 100000);
    record52.set("seniorSalary", 150000);
    record52.set("topStates", [{"state": "New York", "salary": 145000}, {"state": "California", "salary": 150000}, {"state": "Texas", "salary": 120000}, {"state": "Illinois", "salary": 115000}, {"state": "Massachusetts", "salary": 130000}]);
    record52.set("technicalSkills", [{"skill": "Digital Marketing", "proficiency": "Advanced"}, {"skill": "SEO", "proficiency": "Advanced"}, {"skill": "SEM", "proficiency": "Advanced"}, {"skill": "Social Media", "proficiency": "Advanced"}, {"skill": "Analytics", "proficiency": "Advanced"}, {"skill": "Content Marketing", "proficiency": "Advanced"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}]);
    record52.set("softSkills", ["Creativity", "Analytical Thinking", "Communication", "Continuous Learning", "Problem Solving"]);
    record52.set("tools", ["Google Analytics", "Google Ads", "Facebook Ads", "SEMrush", "Hootsuite", "Mailchimp", "Excel", "Slack"]);
    record52.set("certifications", [{"name": "Google Digital Marketing Certification", "issuer": "Google", "cost": 39, "duration": "3 months"}, {"name": "HubSpot Digital Marketing Certification", "issuer": "HubSpot", "cost": 0, "duration": "1 month"}, {"name": "Digital Marketing Fundamentals", "issuer": "Coursera", "cost": 39, "duration": "2 months"}]);
    record52.set("faqs", [{"question": "Do I need a degree?", "answer": "Not required. Experience and certifications are more important."}, {"question": "What channels should I focus on?", "answer": "SEO, SEM, social media, and email marketing are most important."}, {"question": "What's the typical career path?", "answer": "Digital Marketer, Senior Marketer, Manager, Director."}, {"question": "What skills are most important?", "answer": "Analytics, SEO, and content marketing."}, {"question": "What's the work-life balance?", "answer": "Generally good, though can be demanding during campaigns."}, {"question": "What's the salary potential?", "answer": "Good, with strong growth potential."}]);
    record52.set("relatedCareers", ["seo-specialist", "social-media-manager", "marketing-manager"]);
  try {
    app.save(record52);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record53 = new Record(collection);
    record53.set("name", "Email Marketer");
    record53.set("slug", "email-marketer");
    record53.set("description", "Creates and manages email marketing campaigns");
    record53.set("overview", "Email marketers design and execute email campaigns to engage customers. They segment audiences, create content, and analyze performance metrics.");
    record53.set("jobDemand", "Moderate");
    record53.set("entrySalary", 55000);
    record53.set("midSalary", 85000);
    record53.set("seniorSalary", 130000);
    record53.set("topStates", [{"state": "New York", "salary": 125000}, {"state": "California", "salary": 130000}, {"state": "Texas", "salary": 105000}, {"state": "Illinois", "salary": 100000}, {"state": "Massachusetts", "salary": 115000}]);
    record53.set("technicalSkills", [{"skill": "Email Marketing", "proficiency": "Advanced"}, {"skill": "Copywriting", "proficiency": "Advanced"}, {"skill": "Analytics", "proficiency": "Advanced"}, {"skill": "Segmentation", "proficiency": "Advanced"}, {"skill": "A/B Testing", "proficiency": "Advanced"}, {"skill": "HTML/CSS", "proficiency": "Intermediate"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}]);
    record53.set("softSkills", ["Creativity", "Analytical Thinking", "Communication", "Attention to Detail", "Problem Solving"]);
    record53.set("tools", ["Mailchimp", "HubSpot", "Klaviyo", "Constant Contact", "Google Analytics", "Excel", "Slack", "Email"]);
    record53.set("certifications", [{"name": "HubSpot Email Marketing Certification", "issuer": "HubSpot", "cost": 0, "duration": "1 month"}, {"name": "Email Marketing Certification", "issuer": "Udemy", "cost": 15, "duration": "1 month"}, {"name": "Digital Marketing Fundamentals", "issuer": "Coursera", "cost": 39, "duration": "2 months"}]);
    record53.set("faqs", [{"question": "Do I need a degree?", "answer": "Not required. Experience and certifications are more important."}, {"question": "What tools should I learn?", "answer": "Mailchimp, HubSpot, and Klaviyo are most popular."}, {"question": "What's the typical career path?", "answer": "Email Marketer, Senior Marketer, Manager, Director."}, {"question": "What skills are most important?", "answer": "Copywriting, analytics, and segmentation."}, {"question": "What's the work-life balance?", "answer": "Generally good, though can be demanding during campaigns."}, {"question": "What's the salary potential?", "answer": "Good, with strong growth potential."}]);
    record53.set("relatedCareers", ["digital-marketer", "social-media-manager", "marketing-manager"]);
  try {
    app.save(record53);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record54 = new Record(collection);
    record54.set("name", "Brand Manager");
    record54.set("slug", "brand-manager");
    record54.set("description", "Manages brand strategy and positioning");
    record54.set("overview", "Brand managers develop and execute brand strategies to build brand value. They oversee marketing campaigns, manage brand identity, and ensure consistency.");
    record54.set("jobDemand", "High");
    record54.set("entrySalary", 70000);
    record54.set("midSalary", 115000);
    record54.set("seniorSalary", 170000);
    record54.set("topStates", [{"state": "New York", "salary": 165000}, {"state": "California", "salary": 170000}, {"state": "Texas", "salary": 135000}, {"state": "Illinois", "salary": 130000}, {"state": "Massachusetts", "salary": 150000}]);
    record54.set("technicalSkills", [{"skill": "Brand Strategy", "proficiency": "Advanced"}, {"skill": "Marketing", "proficiency": "Advanced"}, {"skill": "Analytics", "proficiency": "Advanced"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Project Management", "proficiency": "Advanced"}, {"skill": "Design Knowledge", "proficiency": "Intermediate"}, {"skill": "Problem Solving", "proficiency": "Advanced"}, {"skill": "Business Acumen", "proficiency": "Advanced"}]);
    record54.set("softSkills", ["Leadership", "Communication", "Strategic Thinking", "Creativity", "Problem Solving"]);
    record54.set("tools", ["Marketing Tools", "Analytics Tools", "Design Tools", "Project Management Tools", "Slack", "Excel", "Jira", "Confluence"]);
    record54.set("certifications", [{"name": "Brand Management Certification", "issuer": "Coursera", "cost": 39, "duration": "2 months"}, {"name": "Marketing Management Certification", "issuer": "Udemy", "cost": 15, "duration": "1 month"}, {"name": "Strategic Marketing Certification", "issuer": "Udemy", "cost": 15, "duration": "1 month"}]);
    record54.set("faqs", [{"question": "Do I need a degree?", "answer": "Not required, but helpful. Many brand managers have marketing or business degrees."}, {"question": "What's the typical career path?", "answer": "Marketing Coordinator, Brand Manager, Senior Manager, Director."}, {"question": "What skills are most important?", "answer": "Strategic thinking, communication, and analytics."}, {"question": "What's the work-life balance?", "answer": "Generally good, though can be demanding during campaigns."}, {"question": "What's the salary potential?", "answer": "Good, with strong growth potential."}]);
    record54.set("relatedCareers", ["marketing-manager", "product-manager", "communications-manager"]);
  try {
    app.save(record54);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record55 = new Record(collection);
    record55.set("name", "Communications Manager");
    record55.set("slug", "communications-manager");
    record55.set("description", "Manages internal and external communications for organizations");
    record55.set("overview", "Communications managers develop communication strategies, manage messaging, and oversee communications across channels. They ensure consistent and effective communication.");
    record55.set("jobDemand", "High");
    record55.set("entrySalary", 65000);
    record55.set("midSalary", 105000);
    record55.set("seniorSalary", 160000);
    record55.set("topStates", [{"state": "New York", "salary": 155000}, {"state": "California", "salary": 160000}, {"state": "Texas", "salary": 130000}, {"state": "Illinois", "salary": 125000}, {"state": "Massachusetts", "salary": 140000}]);
    record55.set("technicalSkills", [{"skill": "Communication Strategy", "proficiency": "Advanced"}, {"skill": "Writing", "proficiency": "Advanced"}, {"skill": "Media Relations", "proficiency": "Advanced"}, {"skill": "Social Media", "proficiency": "Advanced"}, {"skill": "Analytics", "proficiency": "Intermediate"}, {"skill": "Project Management", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}, {"skill": "Business Acumen", "proficiency": "Advanced"}]);
    record55.set("softSkills", ["Communication", "Leadership", "Strategic Thinking", "Creativity", "Problem Solving"]);
    record55.set("tools", ["Social Media Platforms", "Email", "Project Management Tools", "Analytics Tools", "Design Tools", "Slack", "Jira", "Confluence"]);
    record55.set("certifications", [{"name": "Communications Certification", "issuer": "Coursera", "cost": 39, "duration": "2 months"}, {"name": "Public Relations Certification", "issuer": "Udemy", "cost": 15, "duration": "1 month"}, {"name": "Strategic Communications Certification", "issuer": "Udemy", "cost": 15, "duration": "1 month"}]);
    record55.set("faqs", [{"question": "Do I need a degree?", "answer": "Not required, but helpful. Many communications managers have communications or journalism degrees."}, {"question": "What's the typical career path?", "answer": "Communications Coordinator, Manager, Senior Manager, Director."}, {"question": "What skills are most important?", "answer": "Writing, communication, and strategic thinking."}, {"question": "What's the work-life balance?", "answer": "Generally good, though can be demanding during crises."}, {"question": "What's the salary potential?", "answer": "Good, with strong growth potential."}]);
    record55.set("relatedCareers", ["marketing-manager", "brand-manager", "public-relations-manager"]);
  try {
    app.save(record55);
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
