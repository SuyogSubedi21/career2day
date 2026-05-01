/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
    record0.set("name", "Data Analyst");
    record0.set("slug", "data-analyst");
    record0.set("description", "Analyze data to help businesses make informed decisions");
    record0.set("overview", "Data Analysts examine data sets to identify trends, patterns, and insights that help organizations optimize operations and strategy.");
    record0.set("category", "Data");
    record0.set("jobDemand", "High");
    record0.set("entrySalary", 55000);
    record0.set("midSalary", 75000);
    record0.set("seniorSalary", 100000);
    record0.set("topStates", [{"state": "California", "salaryMin": 70000, "salaryMax": 110000}, {"state": "New York", "salaryMin": 68000, "salaryMax": 105000}, {"state": "Texas", "salaryMin": 60000, "salaryMax": 90000}, {"state": "Massachusetts", "salaryMin": 65000, "salaryMax": 100000}, {"state": "Washington", "salaryMin": 62000, "salaryMax": 95000}]);
    record0.set("technicalSkills", [{"skill": "SQL", "proficiency": "Expert"}, {"skill": "Python", "proficiency": "Advanced"}, {"skill": "Excel", "proficiency": "Expert"}, {"skill": "Tableau", "proficiency": "Advanced"}, {"skill": "Power BI", "proficiency": "Advanced"}, {"skill": "Statistics", "proficiency": "Advanced"}, {"skill": "Data Visualization", "proficiency": "Expert"}, {"skill": "R", "proficiency": "Intermediate"}]);
    record0.set("softSkills", ["Communication", "Problem Solving", "Critical Thinking", "Attention to Detail", "Presentation"]);
    record0.set("tools", ["Tableau", "Power BI", "Excel", "SQL Server", "PostgreSQL", "Python", "R", "Looker"]);
    record0.set("certifications", ["Google Data Analytics Certificate", "Microsoft Certified: Data Analyst", "Tableau Desktop Specialist"]);
    record0.set("beginnerLevel", "{'skills': ['SQL basics', 'Excel pivot tables', 'Data cleaning'], 'projects': ['Sales data analysis', 'Customer segmentation'], 'resources': ['DataCamp', 'Coursera'], 'timeline': '3-6 months', 'salary': 55000}");
    record0.set("intermediateLevel", "{'skills': ['Advanced SQL', 'Python for data analysis', 'Tableau dashboards'], 'projects': ['Business intelligence dashboards', 'Predictive analysis'], 'resources': ['Mode Analytics', 'Udacity'], 'timeline': '6-12 months', 'salary': 75000}");
    record0.set("advancedLevel", "{'skills': ['Machine learning basics', 'Advanced statistics', 'Data storytelling'], 'projects': ['Complex data models', 'Strategic insights'], 'resources': ['Advanced courses', 'Industry certifications'], 'timeline': '12+ months', 'salary': 100000}");
    record0.set("relatedCareers", ["Data Scientist", "Business Analyst", "Analytics Engineer"]);
    record0.set("faqs", [{"question": "What tools do data analysts use?", "answer": "Common tools include SQL, Python, Tableau, Power BI, and Excel"}, {"question": "Is coding required?", "answer": "Basic SQL and Python are increasingly important for modern data analysts"}, {"question": "What's the job outlook?", "answer": "Strong growth expected with 23% increase through 2032"}, {"question": "How long to become proficient?", "answer": "6-12 months with dedicated learning and practice"}, {"question": "What industries hire data analysts?", "answer": "Finance, healthcare, retail, tech, and government sectors"}, {"question": "Remote work opportunities?", "answer": "Yes, most data analyst roles offer remote or hybrid options"}]);
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
    record1.set("name", "Software Engineer");
    record1.set("slug", "software-engineer");
    record1.set("description", "Design, develop, and maintain software applications");
    record1.set("overview", "Software Engineers create applications and systems that solve real-world problems using programming languages and software development principles.");
    record1.set("category", "Backend");
    record1.set("jobDemand", "High");
    record1.set("entrySalary", 70000);
    record1.set("midSalary", 110000);
    record1.set("seniorSalary", 160000);
    record1.set("topStates", [{"state": "California", "salaryMin": 90000, "salaryMax": 180000}, {"state": "Washington", "salaryMin": 85000, "salaryMax": 170000}, {"state": "New York", "salaryMin": 80000, "salaryMax": 160000}, {"state": "Massachusetts", "salaryMin": 75000, "salaryMax": 150000}, {"state": "Colorado", "salaryMin": 70000, "salaryMax": 140000}]);
    record1.set("technicalSkills", [{"skill": "Java", "proficiency": "Expert"}, {"skill": "Python", "proficiency": "Advanced"}, {"skill": "System Design", "proficiency": "Advanced"}, {"skill": "Algorithms", "proficiency": "Advanced"}, {"skill": "Data Structures", "proficiency": "Expert"}, {"skill": "Git", "proficiency": "Expert"}, {"skill": "REST APIs", "proficiency": "Advanced"}, {"skill": "Databases", "proficiency": "Advanced"}]);
    record1.set("softSkills", ["Problem Solving", "Teamwork", "Communication", "Adaptability", "Time Management"]);
    record1.set("tools", ["Git", "Docker", "Kubernetes", "Jenkins", "JIRA", "VS Code", "IntelliJ IDEA", "Postman"]);
    record1.set("certifications", ["AWS Certified Developer", "Oracle Certified Associate Java Programmer", "Google Cloud Professional"]);
    record1.set("beginnerLevel", "{'skills': ['Basic programming', 'OOP concepts', 'Version control'], 'projects': ['Todo app', 'Calculator'], 'resources': ['LeetCode', 'HackerRank'], 'timeline': '3-6 months', 'salary': 70000}");
    record1.set("intermediateLevel", "{'skills': ['Advanced OOP', 'Design patterns', 'API development'], 'projects': ['Web application', 'Microservices'], 'resources': ['System Design Primer', 'Educative'], 'timeline': '6-12 months', 'salary': 110000}");
    record1.set("advancedLevel", "{'skills': ['System architecture', 'Performance optimization', 'Leadership'], 'projects': ['Large-scale systems', 'Technical mentoring'], 'resources': ['Advanced courses', 'Industry conferences'], 'timeline': '12+ months', 'salary': 160000}");
    record1.set("relatedCareers", ["Full Stack Developer", "Backend Developer", "Solutions Architect"]);
    record1.set("faqs", [{"question": "What programming languages should I learn?", "answer": "Java, Python, C++, and JavaScript are most in-demand"}, {"question": "Is a CS degree required?", "answer": "No, bootcamps and self-study are viable alternatives"}, {"question": "How important is system design?", "answer": "Critical for senior roles and technical interviews"}, {"question": "What's the typical career progression?", "answer": "Junior \u2192 Mid-level \u2192 Senior \u2192 Staff/Principal Engineer"}, {"question": "How much time for interviews?", "answer": "Expect 4-6 weeks of preparation for FAANG companies"}, {"question": "Remote opportunities?", "answer": "Abundant, especially post-pandemic"}]);
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
    record2.set("description", "Manage infrastructure, deployment, and operations");
    record2.set("overview", "DevOps Engineers bridge development and operations, automating deployment pipelines and managing cloud infrastructure.");
    record2.set("category", "DevOps");
    record2.set("jobDemand", "High");
    record2.set("entrySalary", 75000);
    record2.set("midSalary", 115000);
    record2.set("seniorSalary", 155000);
    record2.set("topStates", [{"state": "California", "salaryMin": 95000, "salaryMax": 175000}, {"state": "Washington", "salaryMin": 90000, "salaryMax": 165000}, {"state": "New York", "salaryMin": 85000, "salaryMax": 155000}, {"state": "Texas", "salaryMin": 75000, "salaryMax": 140000}, {"state": "Colorado", "salaryMin": 80000, "salaryMax": 150000}]);
    record2.set("technicalSkills", [{"skill": "Docker", "proficiency": "Expert"}, {"skill": "Kubernetes", "proficiency": "Expert"}, {"skill": "CI/CD", "proficiency": "Advanced"}, {"skill": "AWS", "proficiency": "Advanced"}, {"skill": "Linux", "proficiency": "Expert"}, {"skill": "Terraform", "proficiency": "Advanced"}, {"skill": "Python", "proficiency": "Advanced"}, {"skill": "Monitoring", "proficiency": "Advanced"}]);
    record2.set("softSkills", ["Problem Solving", "Communication", "Collaboration", "Attention to Detail", "Continuous Learning"]);
    record2.set("tools", ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Terraform", "Ansible", "Prometheus", "ELK Stack"]);
    record2.set("certifications", ["AWS Certified DevOps Engineer", "Kubernetes Administrator (CKA)", "HashiCorp Certified Terraform Associate"]);
    record2.set("beginnerLevel", "{'skills': ['Linux basics', 'Docker fundamentals', 'Git workflows'], 'projects': ['Docker containerization', 'Basic CI/CD pipeline'], 'resources': ['Linux Academy', 'Docker documentation'], 'timeline': '3-6 months', 'salary': 75000}");
    record2.set("intermediateLevel", "{'skills': ['Kubernetes orchestration', 'Infrastructure as Code', 'Monitoring setup'], 'projects': ['Multi-container deployments', 'Automated pipelines'], 'resources': ['Kubernetes documentation', 'Terraform tutorials'], 'timeline': '6-12 months', 'salary': 115000}");
    record2.set("advancedLevel", "{'skills': ['Advanced Kubernetes', 'Cloud architecture', 'Security hardening'], 'projects': ['Enterprise infrastructure', 'Disaster recovery'], 'resources': ['Advanced certifications', 'Industry conferences'], 'timeline': '12+ months', 'salary': 155000}");
    record2.set("relatedCareers", ["Cloud Architect", "Site Reliability Engineer", "Infrastructure Engineer"]);
    record2.set("faqs", [{"question": "Do I need a software engineering background?", "answer": "Helpful but not required; Linux and scripting skills are more important"}, {"question": "What's the learning curve?", "answer": "6-12 months to become proficient with hands-on practice"}, {"question": "Is certification necessary?", "answer": "Not required but AWS/Kubernetes certs are highly valued"}, {"question": "What's the job market like?", "answer": "Excellent demand with competitive salaries"}, {"question": "How much on-call work?", "answer": "Varies by company; typically 1-2 weeks per quarter"}, {"question": "What's the future of DevOps?", "answer": "Evolving toward platform engineering and GitOps practices"}]);
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
    record3.set("description", "Lead product strategy and development");
    record3.set("overview", "Product Managers define product vision, strategy, and roadmap while collaborating with engineering, design, and marketing teams.");
    record3.set("category", "Management");
    record3.set("jobDemand", "High");
    record3.set("entrySalary", 80000);
    record3.set("midSalary", 130000);
    record3.set("seniorSalary", 180000);
    record3.set("topStates", [{"state": "California", "salaryMin": 110000, "salaryMax": 200000}, {"state": "New York", "salaryMin": 100000, "salaryMax": 190000}, {"state": "Washington", "salaryMin": 95000, "salaryMax": 180000}, {"state": "Massachusetts", "salaryMin": 90000, "salaryMax": 170000}, {"state": "Texas", "salaryMin": 85000, "salaryMax": 160000}]);
    record3.set("technicalSkills", [{"skill": "Product Strategy", "proficiency": "Expert"}, {"skill": "Data Analysis", "proficiency": "Advanced"}, {"skill": "SQL", "proficiency": "Intermediate"}, {"skill": "User Research", "proficiency": "Advanced"}, {"skill": "Roadmapping", "proficiency": "Expert"}, {"skill": "Metrics & Analytics", "proficiency": "Advanced"}, {"skill": "Prototyping", "proficiency": "Intermediate"}, {"skill": "A/B Testing", "proficiency": "Advanced"}]);
    record3.set("softSkills", ["Leadership", "Communication", "Stakeholder Management", "Strategic Thinking", "Negotiation"]);
    record3.set("tools", ["Jira", "Figma", "Mixpanel", "Amplitude", "Looker", "Notion", "Asana", "Miro"]);
    record3.set("certifications", ["Reforge Product Management", "Pragmatic Marketing Certification", "Google Product Management Certificate"]);
    record3.set("beginnerLevel", "{'skills': ['Product thinking', 'User research basics', 'Roadmap creation'], 'projects': ['Feature prioritization', 'User interviews'], 'resources': ['Reforge', 'Inspired by Marty Cagan'], 'timeline': '3-6 months', 'salary': 80000}");
    record3.set("intermediateLevel", "{'skills': ['Advanced analytics', 'Go-to-market strategy', 'Stakeholder management'], 'projects': ['Product launches', 'Market analysis'], 'resources': ['Cracking the PM Interview', \"Lenny's Product Podcast\"], 'timeline': '6-12 months', 'salary': 130000}");
    record3.set("advancedLevel", "{'skills': ['Strategic vision', 'Organizational leadership', 'Business acumen'], 'projects': ['Portfolio management', 'Company strategy'], 'resources': ['Executive coaching', 'Industry networks'], 'timeline': '12+ months', 'salary': 180000}");
    record3.set("relatedCareers", ["Technical Product Manager", "Growth Manager", "Business Analyst"]);
    record3.set("faqs", [{"question": "Do I need technical skills?", "answer": "Not required but helpful for credibility with engineering teams"}, {"question": "What's the typical background?", "answer": "Engineering, design, marketing, or business backgrounds all work"}, {"question": "How do I transition into PM?", "answer": "Start as APM, transition from related roles, or take PM bootcamps"}, {"question": "What's the work-life balance?", "answer": "Demanding but varies by company; typically 50-60 hour weeks"}, {"question": "How important is data?", "answer": "Critical for decision-making and justifying product decisions"}, {"question": "What's the career ceiling?", "answer": "Can progress to Director, VP, or Chief Product Officer"}]);
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
    record4.set("description", "Create user-centered product experiences");
    record4.set("overview", "UX Designers research user needs and create intuitive, accessible interfaces that solve problems and delight users.");
    record4.set("category", "Design");
    record4.set("jobDemand", "High");
    record4.set("entrySalary", 65000);
    record4.set("midSalary", 95000);
    record4.set("seniorSalary", 135000);
    record4.set("topStates", [{"state": "California", "salaryMin": 85000, "salaryMax": 155000}, {"state": "New York", "salaryMin": 80000, "salaryMax": 145000}, {"state": "Washington", "salaryMin": 75000, "salaryMax": 135000}, {"state": "Texas", "salaryMin": 70000, "salaryMax": 125000}, {"state": "Colorado", "salaryMin": 68000, "salaryMax": 120000}]);
    record4.set("technicalSkills", [{"skill": "Figma", "proficiency": "Expert"}, {"skill": "User Research", "proficiency": "Advanced"}, {"skill": "Wireframing", "proficiency": "Expert"}, {"skill": "Prototyping", "proficiency": "Advanced"}, {"skill": "Usability Testing", "proficiency": "Advanced"}, {"skill": "Information Architecture", "proficiency": "Advanced"}, {"skill": "Accessibility", "proficiency": "Advanced"}, {"skill": "Design Systems", "proficiency": "Intermediate"}]);
    record4.set("softSkills", ["Empathy", "Communication", "Collaboration", "Problem Solving", "Creativity"]);
    record4.set("tools", ["Figma", "Adobe XD", "Sketch", "Framer", "Miro", "UserTesting", "Hotjar", "Maze"]);
    record4.set("certifications", ["Google UX Design Certificate", "Nielsen Norman UX Certification", "Interaction Design Foundation"]);
    record4.set("beginnerLevel", "{'skills': ['Design fundamentals', 'User research basics', 'Figma basics'], 'projects': ['Wireframes', 'Low-fidelity prototypes'], 'resources': ['Design of Everyday Things', 'Interaction Design Foundation'], 'timeline': '3-6 months', 'salary': 65000}");
    record4.set("intermediateLevel", "{'skills': ['Advanced Figma', 'Usability testing', 'Design systems'], 'projects': ['High-fidelity designs', 'User testing sessions'], 'resources': ['Nielsen Norman', 'Interaction Design courses'], 'timeline': '6-12 months', 'salary': 95000}");
    record4.set("advancedLevel", "{'skills': ['Strategic design', 'Design leadership', 'Research methodology'], 'projects': ['Design systems', 'Product strategy'], 'resources': ['Advanced certifications', 'Design conferences'], 'timeline': '12+ months', 'salary': 135000}");
    record4.set("relatedCareers", ["UI Designer", "Product Designer", "Interaction Designer"]);
    record4.set("faqs", [{"question": "Do I need a design degree?", "answer": "No, bootcamps and self-study portfolios are sufficient"}, {"question": "What's the most important skill?", "answer": "Understanding user needs through research and empathy"}, {"question": "How important is coding?", "answer": "Not required but helpful for collaboration with developers"}, {"question": "What should my portfolio include?", "answer": "3-5 case studies showing process, research, and outcomes"}, {"question": "What's the job market like?", "answer": "Strong demand with competitive salaries and remote opportunities"}, {"question": "How do I stay current?", "answer": "Follow design trends, attend conferences, and practice continuously"}]);
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
    record5.set("description", "Build machine learning models and predictive analytics");
    record5.set("overview", "Data Scientists combine statistics, programming, and domain expertise to extract insights and build predictive models from data.");
    record5.set("category", "Data");
    record5.set("jobDemand", "High");
    record5.set("entrySalary", 85000);
    record5.set("midSalary", 130000);
    record5.set("seniorSalary", 180000);
    record5.set("topStates", [{"state": "California", "salaryMin": 110000, "salaryMax": 200000}, {"state": "New York", "salaryMin": 105000, "salaryMax": 190000}, {"state": "Washington", "salaryMin": 100000, "salaryMax": 185000}, {"state": "Massachusetts", "salaryMin": 95000, "salaryMax": 175000}, {"state": "Texas", "salaryMin": 90000, "salaryMax": 165000}]);
    record5.set("technicalSkills", [{"skill": "Python", "proficiency": "Expert"}, {"skill": "Machine Learning", "proficiency": "Expert"}, {"skill": "Statistics", "proficiency": "Expert"}, {"skill": "SQL", "proficiency": "Advanced"}, {"skill": "Deep Learning", "proficiency": "Advanced"}, {"skill": "TensorFlow", "proficiency": "Advanced"}, {"skill": "Scikit-learn", "proficiency": "Advanced"}, {"skill": "Data Visualization", "proficiency": "Advanced"}]);
    record5.set("softSkills", ["Problem Solving", "Communication", "Critical Thinking", "Collaboration", "Curiosity"]);
    record5.set("tools", ["Python", "R", "TensorFlow", "PyTorch", "Scikit-learn", "Jupyter", "SQL", "Tableau"]);
    record5.set("certifications", ["Google Advanced Data Analytics Certificate", "AWS Certified Machine Learning Specialty", "Andrew Ng's Machine Learning Specialization"]);
    record5.set("beginnerLevel", "{'skills': ['Python fundamentals', 'Statistics basics', 'Data cleaning'], 'projects': ['Iris classification', 'Housing price prediction'], 'resources': ['Kaggle', 'Fast.ai'], 'timeline': '6-9 months', 'salary': 85000}");
    record5.set("intermediateLevel", "{'skills': ['Advanced ML algorithms', 'Feature engineering', 'Model evaluation'], 'projects': ['Real-world datasets', 'Kaggle competitions'], 'resources': ['Coursera ML course', 'Hands-On ML book'], 'timeline': '9-15 months', 'salary': 130000}");
    record5.set("advancedLevel", "{'skills': ['Deep learning', 'NLP', 'Computer vision'], 'projects': ['Production ML systems', 'Research papers'], 'resources': ['Advanced specializations', 'Research communities'], 'timeline': '15+ months', 'salary': 180000}");
    record5.set("relatedCareers", ["Machine Learning Engineer", "Analytics Engineer", "AI Engineer"]);
    record5.set("faqs", [{"question": "What's the difference between data scientist and data analyst?", "answer": "Data scientists focus on predictive modeling; analysts focus on insights"}, {"question": "Do I need a PhD?", "answer": "No, bootcamps and self-study are viable paths"}, {"question": "How much math is required?", "answer": "Linear algebra, calculus, and statistics are essential"}, {"question": "What's the job market like?", "answer": "Highly competitive but strong demand for experienced practitioners"}, {"question": "How long to become proficient?", "answer": "12-18 months with dedicated study and projects"}, {"question": "What's the typical workflow?", "answer": "Data exploration \u2192 modeling \u2192 evaluation \u2192 deployment"}]);
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
    record6.set("description", "Design and manage cloud infrastructure solutions");
    record6.set("overview", "Cloud Architects design scalable, secure, and cost-effective cloud solutions using AWS, Azure, or GCP.");
    record6.set("category", "Cloud");
    record6.set("jobDemand", "High");
    record6.set("entrySalary", 90000);
    record6.set("midSalary", 140000);
    record6.set("seniorSalary", 190000);
    record6.set("topStates", [{"state": "California", "salaryMin": 120000, "salaryMax": 210000}, {"state": "Washington", "salaryMin": 115000, "salaryMax": 200000}, {"state": "New York", "salaryMin": 110000, "salaryMax": 190000}, {"state": "Texas", "salaryMin": 100000, "salaryMax": 175000}, {"state": "Colorado", "salaryMin": 105000, "salaryMax": 185000}]);
    record6.set("technicalSkills", [{"skill": "AWS", "proficiency": "Expert"}, {"skill": "Azure", "proficiency": "Advanced"}, {"skill": "GCP", "proficiency": "Advanced"}, {"skill": "Networking", "proficiency": "Advanced"}, {"skill": "Security", "proficiency": "Advanced"}, {"skill": "Terraform", "proficiency": "Advanced"}, {"skill": "Kubernetes", "proficiency": "Advanced"}, {"skill": "Cost Optimization", "proficiency": "Advanced"}]);
    record6.set("softSkills", ["Strategic Thinking", "Communication", "Leadership", "Problem Solving", "Business Acumen"]);
    record6.set("tools", ["AWS", "Azure", "GCP", "Terraform", "CloudFormation", "Kubernetes", "Prometheus", "Grafana"]);
    record6.set("certifications", ["AWS Solutions Architect Professional", "Azure Solutions Architect Expert", "Google Cloud Architect"]);
    record6.set("beginnerLevel", "{'skills': ['Cloud fundamentals', 'AWS basics', 'Networking concepts'], 'projects': ['Simple web applications', 'Database setup'], 'resources': ['AWS documentation', 'Linux Academy'], 'timeline': '6-9 months', 'salary': 90000}");
    record6.set("intermediateLevel", "{'skills': ['Advanced AWS services', 'High availability design', 'Security best practices'], 'projects': ['Multi-tier applications', 'Disaster recovery'], 'resources': ['AWS certification courses', 'Architecture patterns'], 'timeline': '9-15 months', 'salary': 140000}");
    record6.set("advancedLevel", "{'skills': ['Enterprise architecture', 'Cost optimization', 'Compliance'], 'projects': ['Large-scale migrations', 'Strategic planning'], 'resources': ['Advanced certifications', 'Industry conferences'], 'timeline': '15+ months', 'salary': 190000}");
    record6.set("relatedCareers", ["DevOps Engineer", "Solutions Architect", "Infrastructure Engineer"]);
    record6.set("faqs", [{"question": "Which cloud platform should I learn first?", "answer": "AWS is most popular; Azure and GCP are also valuable"}, {"question": "Do I need infrastructure experience?", "answer": "Helpful but not required; cloud fundamentals can be learned"}, {"question": "How important are certifications?", "answer": "Very important for credibility and career advancement"}, {"question": "What's the typical career path?", "answer": "DevOps/SysAdmin \u2192 Cloud Engineer \u2192 Cloud Architect"}, {"question": "How much hands-on work?", "answer": "Varies; architects spend more time on design than implementation"}, {"question": "What's the salary potential?", "answer": "Among the highest in tech with strong growth"}]);
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
    record7.set("name", "Security Engineer");
    record7.set("slug", "security-engineer");
    record7.set("description", "Protect systems and data from cyber threats");
    record7.set("overview", "Security Engineers design and implement security measures to protect organizations from cyber attacks and data breaches.");
    record7.set("category", "Security");
    record7.set("jobDemand", "High");
    record7.set("entrySalary", 80000);
    record7.set("midSalary", 125000);
    record7.set("seniorSalary", 170000);
    record7.set("topStates", [{"state": "California", "salaryMin": 105000, "salaryMax": 190000}, {"state": "Virginia", "salaryMin": 100000, "salaryMax": 180000}, {"state": "New York", "salaryMin": 95000, "salaryMax": 175000}, {"state": "Texas", "salaryMin": 90000, "salaryMax": 165000}, {"state": "Washington", "salaryMin": 92000, "salaryMax": 170000}]);
    record7.set("technicalSkills", [{"skill": "Network Security", "proficiency": "Expert"}, {"skill": "Cryptography", "proficiency": "Advanced"}, {"skill": "Penetration Testing", "proficiency": "Advanced"}, {"skill": "Firewalls", "proficiency": "Advanced"}, {"skill": "SIEM", "proficiency": "Advanced"}, {"skill": "Linux", "proficiency": "Advanced"}, {"skill": "Python", "proficiency": "Intermediate"}, {"skill": "Vulnerability Assessment", "proficiency": "Advanced"}]);
    record7.set("softSkills", ["Attention to Detail", "Problem Solving", "Communication", "Compliance Knowledge", "Continuous Learning"]);
    record7.set("tools", ["Wireshark", "Metasploit", "Burp Suite", "Nessus", "Splunk", "Snort", "OpenVAS", "Kali Linux"]);
    record7.set("certifications", ["CompTIA Security+", "Certified Ethical Hacker (CEH)", "CISSP"]);
    record7.set("beginnerLevel", "{'skills': ['Network fundamentals', 'Security basics', 'Linux'], 'projects': ['Network analysis', 'Vulnerability scanning'], 'resources': ['CompTIA Security+', 'TryHackMe'], 'timeline': '6-9 months', 'salary': 80000}");
    record7.set("intermediateLevel", "{'skills': ['Penetration testing', 'Incident response', 'Compliance'], 'projects': ['Security audits', 'Threat analysis'], 'resources': ['CEH certification', 'HackTheBox'], 'timeline': '9-15 months', 'salary': 125000}");
    record7.set("advancedLevel", "{'skills': ['Advanced threat analysis', 'Security architecture', 'Leadership'], 'projects': ['Security strategy', 'Enterprise defense'], 'resources': ['CISSP certification', 'Industry conferences'], 'timeline': '15+ months', 'salary': 170000}");
    record7.set("relatedCareers", ["Cybersecurity Analyst", "Penetration Tester", "Cloud Security Engineer"]);
    record7.set("faqs", [{"question": "Do I need a security background?", "answer": "No, but IT or networking experience is helpful"}, {"question": "What certifications are most valuable?", "answer": "Security+, CEH, and CISSP are industry standards"}, {"question": "How important is hands-on experience?", "answer": "Critical; labs and CTF competitions are essential"}, {"question": "What's the job market like?", "answer": "Excellent demand with high salaries and growth"}, {"question": "How much on-call work?", "answer": "Varies; incident response roles have more on-call"}, {"question": "What's the future of security?", "answer": "Cloud security and AI-driven threat detection are growing"}]);
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
    record8.set("description", "Build and deploy machine learning systems");
    record8.set("overview", "ML Engineers develop, train, and deploy machine learning models at scale for production systems.");
    record8.set("category", "Data");
    record8.set("jobDemand", "High");
    record8.set("entrySalary", 95000);
    record8.set("midSalary", 150000);
    record8.set("seniorSalary", 210000);
    record8.set("topStates", [{"state": "California", "salaryMin": 130000, "salaryMax": 240000}, {"state": "Washington", "salaryMin": 125000, "salaryMax": 230000}, {"state": "New York", "salaryMin": 120000, "salaryMax": 220000}, {"state": "Massachusetts", "salaryMin": 115000, "salaryMax": 210000}, {"state": "Colorado", "salaryMin": 110000, "salaryMax": 200000}]);
    record8.set("technicalSkills", [{"skill": "Python", "proficiency": "Expert"}, {"skill": "TensorFlow", "proficiency": "Expert"}, {"skill": "PyTorch", "proficiency": "Expert"}, {"skill": "Machine Learning", "proficiency": "Expert"}, {"skill": "Deep Learning", "proficiency": "Advanced"}, {"skill": "SQL", "proficiency": "Advanced"}, {"skill": "Spark", "proficiency": "Advanced"}, {"skill": "MLOps", "proficiency": "Advanced"}]);
    record8.set("softSkills", ["Problem Solving", "Communication", "Collaboration", "Attention to Detail", "Continuous Learning"]);
    record8.set("tools", ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Spark", "Airflow", "MLflow", "Kubernetes"]);
    record8.set("certifications", ["TensorFlow Developer Certificate", "AWS Certified Machine Learning Specialty", "Google Cloud ML Engineer"]);
    record8.set("beginnerLevel", "{'skills': ['Python', 'ML fundamentals', 'Data preprocessing'], 'projects': ['Classification models', 'Regression models'], 'resources': ['Fast.ai', 'Kaggle'], 'timeline': '6-9 months', 'salary': 95000}");
    record8.set("intermediateLevel", "{'skills': ['Advanced ML', 'Model optimization', 'Deployment'], 'projects': ['Production models', 'Kaggle competitions'], 'resources': ['Coursera ML course', 'MLOps courses'], 'timeline': '9-15 months', 'salary': 150000}");
    record8.set("advancedLevel", "{'skills': ['Advanced deep learning', 'Research', 'System design'], 'projects': ['Large-scale systems', 'Novel architectures'], 'resources': ['Research papers', 'Advanced courses'], 'timeline': '15+ months', 'salary': 210000}");
    record8.set("relatedCareers", ["Data Scientist", "AI Engineer", "Research Scientist"]);
    record8.set("faqs", [{"question": "What's the difference between ML engineer and data scientist?", "answer": "ML engineers focus on production systems; data scientists on analysis"}, {"question": "How important is math?", "answer": "Linear algebra and calculus are essential"}, {"question": "What's the typical workflow?", "answer": "Data preparation \u2192 model development \u2192 optimization \u2192 deployment"}, {"question": "How much research is involved?", "answer": "Varies by company; more in research-focused roles"}, {"question": "What's the job market like?", "answer": "Highly competitive with excellent compensation"}, {"question": "How long to become proficient?", "answer": "12-18 months with strong fundamentals"}]);
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
    record9.set("name", "Full Stack Developer");
    record9.set("slug", "full-stack-developer");
    record9.set("description", "Build complete web applications from frontend to backend");
    record9.set("overview", "Full Stack Developers create entire web applications, handling both client-side and server-side development.");
    record9.set("category", "Backend");
    record9.set("jobDemand", "High");
    record9.set("entrySalary", 70000);
    record9.set("midSalary", 110000);
    record9.set("seniorSalary", 155000);
    record9.set("topStates", [{"state": "California", "salaryMin": 90000, "salaryMax": 175000}, {"state": "New York", "salaryMin": 85000, "salaryMax": 165000}, {"state": "Washington", "salaryMin": 80000, "salaryMax": 160000}, {"state": "Texas", "salaryMin": 75000, "salaryMax": 145000}, {"state": "Colorado", "salaryMin": 72000, "salaryMax": 140000}]);
    record9.set("technicalSkills", [{"skill": "JavaScript", "proficiency": "Expert"}, {"skill": "React", "proficiency": "Advanced"}, {"skill": "Node.js", "proficiency": "Advanced"}, {"skill": "SQL", "proficiency": "Advanced"}, {"skill": "HTML/CSS", "proficiency": "Expert"}, {"skill": "REST APIs", "proficiency": "Advanced"}, {"skill": "Git", "proficiency": "Advanced"}, {"skill": "Databases", "proficiency": "Advanced"}]);
    record9.set("softSkills", ["Problem Solving", "Communication", "Teamwork", "Adaptability", "Time Management"]);
    record9.set("tools", ["React", "Node.js", "Express", "MongoDB", "PostgreSQL", "Git", "Docker", "VS Code"]);
    record9.set("certifications", ["Full Stack Web Development Bootcamp", "AWS Certified Developer", "Google Cloud Associate"]);
    record9.set("beginnerLevel", "{'skills': ['HTML/CSS', 'JavaScript basics', 'React fundamentals'], 'projects': ['Todo app', 'Portfolio website'], 'resources': ['FreeCodeCamp', 'Codecademy'], 'timeline': '3-6 months', 'salary': 70000}");
    record9.set("intermediateLevel", "{'skills': ['Advanced React', 'Node.js/Express', 'Database design'], 'projects': ['Full web applications', 'API development'], 'resources': ['Udemy courses', 'Scrimba'], 'timeline': '6-12 months', 'salary': 110000}");
    record9.set("advancedLevel", "{'skills': ['System design', 'Performance optimization', 'DevOps'], 'projects': ['Scalable applications', 'Microservices'], 'resources': ['Advanced courses', 'Open source'], 'timeline': '12+ months', 'salary': 155000}");
    record9.set("relatedCareers", ["Frontend Developer", "Backend Developer", "Software Engineer"]);
    record9.set("faqs", [{"question": "What's the best way to learn full stack?", "answer": "Bootcamps, online courses, or self-study with projects"}, {"question": "How long does it take?", "answer": "3-6 months for basics, 12+ months for proficiency"}, {"question": "Do I need a degree?", "answer": "No, bootcamps and portfolios are sufficient"}, {"question": "What's the job market like?", "answer": "Strong demand with good salaries and remote opportunities"}, {"question": "Should I specialize?", "answer": "Eventually yes; most developers specialize in frontend or backend"}, {"question": "How important is DevOps knowledge?", "answer": "Increasingly important for modern full stack developers"}]);
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
    record10.set("name", "Frontend Developer");
    record10.set("slug", "frontend-developer");
    record10.set("description", "Build user interfaces and client-side applications");
    record10.set("overview", "Frontend Developers create interactive, responsive user interfaces using HTML, CSS, and JavaScript frameworks.");
    record10.set("category", "Frontend");
    record10.set("jobDemand", "High");
    record10.set("entrySalary", 65000);
    record10.set("midSalary", 100000);
    record10.set("seniorSalary", 145000);
    record10.set("topStates", [{"state": "California", "salaryMin": 85000, "salaryMax": 165000}, {"state": "New York", "salaryMin": 80000, "salaryMax": 155000}, {"state": "Washington", "salaryMin": 75000, "salaryMax": 150000}, {"state": "Texas", "salaryMin": 70000, "salaryMax": 135000}, {"state": "Colorado", "salaryMin": 68000, "salaryMax": 130000}]);
    record10.set("technicalSkills", [{"skill": "JavaScript", "proficiency": "Expert"}, {"skill": "React", "proficiency": "Expert"}, {"skill": "HTML/CSS", "proficiency": "Expert"}, {"skill": "TypeScript", "proficiency": "Advanced"}, {"skill": "Responsive Design", "proficiency": "Expert"}, {"skill": "Git", "proficiency": "Advanced"}, {"skill": "REST APIs", "proficiency": "Advanced"}, {"skill": "Testing", "proficiency": "Advanced"}]);
    record10.set("softSkills", ["Attention to Detail", "Communication", "Collaboration", "Problem Solving", "Creativity"]);
    record10.set("tools", ["React", "Vue", "Angular", "Webpack", "Babel", "Jest", "Git", "Chrome DevTools"]);
    record10.set("certifications", ["Google Front-End Web Development Certificate", "Meta Front-End Developer Certificate", "Scrimba Frontend Developer"]);
    record10.set("beginnerLevel", "{'skills': ['HTML/CSS', 'JavaScript basics', 'Responsive design'], 'projects': ['Static websites', 'Simple interactive pages'], 'resources': ['FreeCodeCamp', 'MDN Web Docs'], 'timeline': '3-6 months', 'salary': 65000}");
    record10.set("intermediateLevel", "{'skills': ['React/Vue', 'Advanced CSS', 'API integration'], 'projects': ['Interactive applications', 'Component libraries'], 'resources': ['React documentation', 'Udemy courses'], 'timeline': '6-12 months', 'salary': 100000}");
    record10.set("advancedLevel", "{'skills': ['Performance optimization', 'Advanced patterns', 'Accessibility'], 'projects': ['Complex applications', 'Design systems'], 'resources': ['Advanced courses', 'Open source'], 'timeline': '12+ months', 'salary': 145000}");
    record10.set("relatedCareers", ["Full Stack Developer", "UI Developer", "Web Developer"]);
    record10.set("faqs", [{"question": "What framework should I learn?", "answer": "React is most popular; Vue and Angular are also valuable"}, {"question": "How important is design knowledge?", "answer": "Helpful but not required; collaboration with designers is key"}, {"question": "What's the learning curve?", "answer": "3-6 months for basics, 12+ months for proficiency"}, {"question": "Do I need a degree?", "answer": "No, bootcamps and portfolios are sufficient"}, {"question": "What's the job market like?", "answer": "Excellent demand with competitive salaries"}, {"question": "How important is accessibility?", "answer": "Increasingly important for modern web development"}]);
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
    record11.set("name", "Backend Developer");
    record11.set("slug", "backend-developer");
    record11.set("description", "Build server-side applications and APIs");
    record11.set("overview", "Backend Developers create server-side logic, databases, and APIs that power web and mobile applications.");
    record11.set("category", "Backend");
    record11.set("jobDemand", "High");
    record11.set("entrySalary", 70000);
    record11.set("midSalary", 110000);
    record11.set("seniorSalary", 155000);
    record11.set("topStates", [{"state": "California", "salaryMin": 90000, "salaryMax": 175000}, {"state": "New York", "salaryMin": 85000, "salaryMax": 165000}, {"state": "Washington", "salaryMin": 80000, "salaryMax": 160000}, {"state": "Texas", "salaryMin": 75000, "salaryMax": 145000}, {"state": "Colorado", "salaryMin": 72000, "salaryMax": 140000}]);
    record11.set("technicalSkills", [{"skill": "Python", "proficiency": "Expert"}, {"skill": "Node.js", "proficiency": "Advanced"}, {"skill": "SQL", "proficiency": "Expert"}, {"skill": "REST APIs", "proficiency": "Expert"}, {"skill": "Databases", "proficiency": "Advanced"}, {"skill": "Git", "proficiency": "Advanced"}, {"skill": "Docker", "proficiency": "Intermediate"}, {"skill": "System Design", "proficiency": "Advanced"}]);
    record11.set("softSkills", ["Problem Solving", "Communication", "Teamwork", "Attention to Detail", "Debugging"]);
    record11.set("tools", ["Python", "Node.js", "PostgreSQL", "MongoDB", "Redis", "Docker", "Git", "Postman"]);
    record11.set("certifications", ["AWS Certified Developer", "Google Cloud Associate", "Oracle Certified Associate Java Programmer"]);
    record11.set("beginnerLevel", "{'skills': ['Python/Node.js basics', 'SQL fundamentals', 'API design'], 'projects': ['Simple APIs', 'Database design'], 'resources': ['Codecademy', 'Udemy'], 'timeline': '3-6 months', 'salary': 70000}");
    record11.set("intermediateLevel", "{'skills': ['Advanced SQL', 'API development', 'Database optimization'], 'projects': ['Production APIs', 'Microservices'], 'resources': ['System Design Primer', 'Educative'], 'timeline': '6-12 months', 'salary': 110000}");
    record11.set("advancedLevel", "{'skills': ['System architecture', 'Performance tuning', 'Leadership'], 'projects': ['Large-scale systems', 'Technical mentoring'], 'resources': ['Advanced courses', 'Industry conferences'], 'timeline': '12+ months', 'salary': 155000}");
    record11.set("relatedCareers", ["Full Stack Developer", "Software Engineer", "DevOps Engineer"]);
    record11.set("faqs", [{"question": "What language should I learn?", "answer": "Python, Java, and Node.js are most in-demand"}, {"question": "How important is database knowledge?", "answer": "Critical; SQL and NoSQL databases are essential"}, {"question": "What's the learning curve?", "answer": "3-6 months for basics, 12+ months for proficiency"}, {"question": "Do I need a degree?", "answer": "No, bootcamps and portfolios are sufficient"}, {"question": "What's the job market like?", "answer": "Excellent demand with competitive salaries"}, {"question": "How important is system design?", "answer": "Critical for senior roles and technical interviews"}]);
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
    record12.set("name", "Mobile Developer (iOS)");
    record12.set("slug", "mobile-developer-ios");
    record12.set("description", "Build iOS applications for iPhones and iPads");
    record12.set("overview", "iOS Developers create native applications for Apple devices using Swift and Objective-C.");
    record12.set("category", "Frontend");
    record12.set("jobDemand", "High");
    record12.set("entrySalary", 70000);
    record12.set("midSalary", 110000);
    record12.set("seniorSalary", 155000);
    record12.set("topStates", [{"state": "California", "salaryMin": 90000, "salaryMax": 175000}, {"state": "New York", "salaryMin": 85000, "salaryMax": 165000}, {"state": "Washington", "salaryMin": 80000, "salaryMax": 160000}, {"state": "Texas", "salaryMin": 75000, "salaryMax": 145000}, {"state": "Colorado", "salaryMin": 72000, "salaryMax": 140000}]);
    record12.set("technicalSkills", [{"skill": "Swift", "proficiency": "Expert"}, {"skill": "UIKit", "proficiency": "Advanced"}, {"skill": "SwiftUI", "proficiency": "Advanced"}, {"skill": "Xcode", "proficiency": "Expert"}, {"skill": "Core Data", "proficiency": "Advanced"}, {"skill": "REST APIs", "proficiency": "Advanced"}, {"skill": "Git", "proficiency": "Advanced"}, {"skill": "Testing", "proficiency": "Advanced"}]);
    record12.set("softSkills", ["Problem Solving", "Attention to Detail", "Communication", "Collaboration", "Creativity"]);
    record12.set("tools", ["Xcode", "Swift", "SwiftUI", "CocoaPods", "Git", "TestFlight", "Instruments", "Charles Proxy"]);
    record12.set("certifications", ["Apple Developer Program", "iOS Development Bootcamp", "Swift Fundamentals"]);
    record12.set("beginnerLevel", "{'skills': ['Swift basics', 'UIKit fundamentals', 'Xcode'], 'projects': ['Simple apps', 'UI practice'], 'resources': ['Apple Developer', 'Ray Wenderlich'], 'timeline': '3-6 months', 'salary': 70000}");
    record12.set("intermediateLevel", "{'skills': ['Advanced Swift', 'SwiftUI', 'API integration'], 'projects': ['Production apps', 'App Store releases'], 'resources': ['WWDC videos', 'Hacking with Swift'], 'timeline': '6-12 months', 'salary': 110000}");
    record12.set("advancedLevel", "{'skills': ['Performance optimization', 'Advanced patterns', 'Leadership'], 'projects': ['Complex applications', 'Technical mentoring'], 'resources': ['Advanced courses', 'Open source'], 'timeline': '12+ months', 'salary': 155000}");
    record12.set("relatedCareers", ["Mobile Developer (Android)", "Full Stack Developer", "Software Engineer"]);
    record12.set("faqs", [{"question": "Do I need a Mac?", "answer": "Yes, Xcode requires macOS"}, {"question": "Should I learn Swift or Objective-C?", "answer": "Swift is modern and recommended for new developers"}, {"question": "What's the learning curve?", "answer": "3-6 months for basics, 12+ months for proficiency"}, {"question": "How important is SwiftUI?", "answer": "Increasingly important for modern iOS development"}, {"question": "What's the job market like?", "answer": "Strong demand with competitive salaries"}, {"question": "Can I develop cross-platform?", "answer": "Yes, with React Native or Flutter, but native is preferred"}]);
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
    record13.set("name", "Mobile Developer (Android)");
    record13.set("slug", "mobile-developer-android");
    record13.set("description", "Build Android applications for smartphones and tablets");
    record13.set("overview", "Android Developers create native applications for Android devices using Kotlin and Java.");
    record13.set("category", "Frontend");
    record13.set("jobDemand", "High");
    record13.set("entrySalary", 70000);
    record13.set("midSalary", 110000);
    record13.set("seniorSalary", 155000);
    record13.set("topStates", [{"state": "California", "salaryMin": 90000, "salaryMax": 175000}, {"state": "New York", "salaryMin": 85000, "salaryMax": 165000}, {"state": "Washington", "salaryMin": 80000, "salaryMax": 160000}, {"state": "Texas", "salaryMin": 75000, "salaryMax": 145000}, {"state": "Colorado", "salaryMin": 72000, "salaryMax": 140000}]);
    record13.set("technicalSkills", [{"skill": "Kotlin", "proficiency": "Expert"}, {"skill": "Java", "proficiency": "Advanced"}, {"skill": "Android Studio", "proficiency": "Expert"}, {"skill": "Jetpack", "proficiency": "Advanced"}, {"skill": "REST APIs", "proficiency": "Advanced"}, {"skill": "SQLite", "proficiency": "Advanced"}, {"skill": "Git", "proficiency": "Advanced"}, {"skill": "Testing", "proficiency": "Advanced"}]);
    record13.set("softSkills", ["Problem Solving", "Attention to Detail", "Communication", "Collaboration", "Creativity"]);
    record13.set("tools", ["Android Studio", "Kotlin", "Java", "Gradle", "Git", "Firebase", "Retrofit", "Room"]);
    record13.set("certifications", ["Google Associate Android Developer", "Android Development Bootcamp", "Kotlin Fundamentals"]);
    record13.set("beginnerLevel", "{'skills': ['Kotlin basics', 'Android fundamentals', 'Android Studio'], 'projects': ['Simple apps', 'UI practice'], 'resources': ['Google Codelabs', 'Udacity'], 'timeline': '3-6 months', 'salary': 70000}");
    record13.set("intermediateLevel", "{'skills': ['Advanced Kotlin', 'Jetpack components', 'API integration'], 'projects': ['Production apps', 'Play Store releases'], 'resources': ['Android documentation', 'Udemy courses'], 'timeline': '6-12 months', 'salary': 110000}");
    record13.set("advancedLevel", "{'skills': ['Performance optimization', 'Advanced patterns', 'Leadership'], 'projects': ['Complex applications', 'Technical mentoring'], 'resources': ['Advanced courses', 'Open source'], 'timeline': '12+ months', 'salary': 155000}");
    record13.set("relatedCareers", ["Mobile Developer (iOS)", "Full Stack Developer", "Software Engineer"]);
    record13.set("faqs", [{"question": "Should I learn Kotlin or Java?", "answer": "Kotlin is modern and recommended; Java knowledge is still valuable"}, {"question": "What's the learning curve?", "answer": "3-6 months for basics, 12+ months for proficiency"}, {"question": "How important is Jetpack?", "answer": "Very important for modern Android development"}, {"question": "What's the job market like?", "answer": "Strong demand with competitive salaries"}, {"question": "Can I develop cross-platform?", "answer": "Yes, with React Native or Flutter, but native is preferred"}, {"question": "How do I test my apps?", "answer": "Use Android emulator, Firebase Testing Lab, and unit tests"}]);
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
    record14.set("name", "QA Engineer");
    record14.set("slug", "qa-engineer");
    record14.set("description", "Test software quality and identify bugs");
    record14.set("overview", "QA Engineers develop test strategies, execute tests, and ensure software meets quality standards.");
    record14.set("category", "Backend");
    record14.set("jobDemand", "Medium");
    record14.set("entrySalary", 60000);
    record14.set("midSalary", 85000);
    record14.set("seniorSalary", 120000);
    record14.set("topStates", [{"state": "California", "salaryMin": 75000, "salaryMax": 140000}, {"state": "New York", "salaryMin": 70000, "salaryMax": 130000}, {"state": "Texas", "salaryMin": 65000, "salaryMax": 115000}, {"state": "Washington", "salaryMin": 68000, "salaryMax": 125000}, {"state": "Colorado", "salaryMin": 62000, "salaryMax": 110000}]);
    record14.set("technicalSkills", [{"skill": "Test Automation", "proficiency": "Expert"}, {"skill": "Selenium", "proficiency": "Advanced"}, {"skill": "Python", "proficiency": "Advanced"}, {"skill": "SQL", "proficiency": "Advanced"}, {"skill": "API Testing", "proficiency": "Advanced"}, {"skill": "Git", "proficiency": "Advanced"}, {"skill": "JIRA", "proficiency": "Advanced"}, {"skill": "Performance Testing", "proficiency": "Intermediate"}]);
    record14.set("softSkills", ["Attention to Detail", "Problem Solving", "Communication", "Documentation", "Patience"]);
    record14.set("tools", ["Selenium", "Cypress", "Postman", "JMeter", "JIRA", "TestNG", "Pytest", "Git"]);
    record14.set("certifications", ["ISTQB Certified Tester", "Selenium WebDriver Certification", "SDET Bootcamp"]);
    record14.set("beginnerLevel", "{'skills': ['Manual testing', 'Test case creation', 'Bug reporting'], 'projects': ['Test plans', 'Test execution'], 'resources': ['ISTQB basics', 'Udemy courses'], 'timeline': '2-4 months', 'salary': 60000}");
    record14.set("intermediateLevel", "{'skills': ['Test automation', 'API testing', 'CI/CD integration'], 'projects': ['Automated test suites', 'Performance testing'], 'resources': ['Selenium documentation', 'Advanced courses'], 'timeline': '4-8 months', 'salary': 85000}");
    record14.set("advancedLevel", "{'skills': ['Advanced automation', 'Test strategy', 'Leadership'], 'projects': ['Enterprise test frameworks', 'Technical mentoring'], 'resources': ['Advanced certifications', 'Industry conferences'], 'timeline': '8+ months', 'salary': 120000}");
    record14.set("relatedCareers", ["SDET", "Test Automation Engineer", "Software Engineer"]);
    record14.set("faqs", [{"question": "Do I need coding skills?", "answer": "Yes, especially for test automation roles"}, {"question": "What's the learning curve?", "answer": "2-4 months for manual testing, 6-12 months for automation"}, {"question": "Is QA a dead-end career?", "answer": "No, many QA engineers transition to SDET or development roles"}, {"question": "What's the job market like?", "answer": "Good demand with competitive salaries"}, {"question": "How important is automation?", "answer": "Critical for modern QA roles"}, {"question": "What's the typical workflow?", "answer": "Test planning \u2192 execution \u2192 bug reporting \u2192 regression testing"}]);
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
    record15.set("overview", "Business Analysts bridge business and technology, gathering requirements and recommending solutions.");
    record15.set("category", "Management");
    record15.set("jobDemand", "High");
    record15.set("entrySalary", 65000);
    record15.set("midSalary", 95000);
    record15.set("seniorSalary", 135000);
    record15.set("topStates", [{"state": "New York", "salaryMin": 80000, "salaryMax": 150000}, {"state": "California", "salaryMin": 75000, "salaryMax": 145000}, {"state": "Texas", "salaryMin": 70000, "salaryMax": 130000}, {"state": "Massachusetts", "salaryMin": 72000, "salaryMax": 135000}, {"state": "Illinois", "salaryMin": 68000, "salaryMax": 125000}]);
    record15.set("technicalSkills", [{"skill": "Requirements Analysis", "proficiency": "Expert"}, {"skill": "SQL", "proficiency": "Intermediate"}, {"skill": "Data Analysis", "proficiency": "Advanced"}, {"skill": "Process Modeling", "proficiency": "Advanced"}, {"skill": "Excel", "proficiency": "Advanced"}, {"skill": "Tableau", "proficiency": "Intermediate"}, {"skill": "JIRA", "proficiency": "Advanced"}, {"skill": "Wireframing", "proficiency": "Intermediate"}]);
    record15.set("softSkills", ["Communication", "Stakeholder Management", "Problem Solving", "Documentation", "Negotiation"]);
    record15.set("tools", ["JIRA", "Confluence", "Excel", "Tableau", "Lucidchart", "Figma", "SQL", "Miro"]);
    record15.set("certifications", ["IIBA Certified Business Analyst", "Agile Analysis Certification", "Google Business Analytics Certificate"]);
    record15.set("beginnerLevel", "{'skills': ['Requirements gathering', 'Documentation', 'Basic analysis'], 'projects': ['Requirements documents', 'Process flows'], 'resources': ['IIBA basics', 'Udemy courses'], 'timeline': '3-6 months', 'salary': 65000}");
    record15.set("intermediateLevel", "{'skills': ['Advanced analysis', 'Stakeholder management', 'Solution design'], 'projects': ['Business cases', 'System requirements'], 'resources': ['IIBA certification', 'Advanced courses'], 'timeline': '6-12 months', 'salary': 95000}");
    record15.set("advancedLevel", "{'skills': ['Strategic analysis', 'Leadership', 'Business acumen'], 'projects': ['Enterprise solutions', 'Strategic planning'], 'resources': ['Advanced certifications', 'Industry networks'], 'timeline': '12+ months', 'salary': 135000}");
    record15.set("relatedCareers", ["Product Manager", "Solutions Architect", "Project Manager"]);
    record15.set("faqs", [{"question": "Do I need technical skills?", "answer": "Helpful but not required; communication is more important"}, {"question": "What's the typical background?", "answer": "Business, IT, or any field with analytical skills"}, {"question": "How long to become proficient?", "answer": "6-12 months with relevant experience"}, {"question": "What's the job market like?", "answer": "Strong demand across industries"}, {"question": "How important is certification?", "answer": "Helpful for career advancement but not required"}, {"question": "What's the typical workflow?", "answer": "Gather requirements \u2192 analyze \u2192 document \u2192 present solutions"}]);
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
    record16.set("name", "Solutions Architect");
    record16.set("slug", "solutions-architect");
    record16.set("description", "Design technical solutions for business problems");
    record16.set("overview", "Solutions Architects design comprehensive technical solutions that address business requirements and constraints.");
    record16.set("category", "Cloud");
    record16.set("jobDemand", "High");
    record16.set("entrySalary", 95000);
    record16.set("midSalary", 145000);
    record16.set("seniorSalary", 195000);
    record16.set("topStates", [{"state": "California", "salaryMin": 125000, "salaryMax": 215000}, {"state": "New York", "salaryMin": 115000, "salaryMax": 200000}, {"state": "Washington", "salaryMin": 110000, "salaryMax": 195000}, {"state": "Texas", "salaryMin": 105000, "salaryMax": 185000}, {"state": "Colorado", "salaryMin": 100000, "salaryMax": 180000}]);
    record16.set("technicalSkills", [{"skill": "System Design", "proficiency": "Expert"}, {"skill": "Cloud Architecture", "proficiency": "Expert"}, {"skill": "AWS", "proficiency": "Advanced"}, {"skill": "Networking", "proficiency": "Advanced"}, {"skill": "Security", "proficiency": "Advanced"}, {"skill": "Databases", "proficiency": "Advanced"}, {"skill": "Scalability", "proficiency": "Expert"}, {"skill": "Cost Optimization", "proficiency": "Advanced"}]);
    record16.set("softSkills", ["Communication", "Stakeholder Management", "Strategic Thinking", "Problem Solving", "Leadership"]);
    record16.set("tools", ["AWS", "Azure", "GCP", "Terraform", "Lucidchart", "Visio", "JIRA", "Confluence"]);
    record16.set("certifications", ["AWS Solutions Architect Professional", "Azure Solutions Architect Expert", "Google Cloud Architect"]);
    record16.set("beginnerLevel", "{'skills': ['System design basics', 'Cloud fundamentals', 'Architecture patterns'], 'projects': ['Simple architectures', 'Design documents'], 'resources': ['AWS documentation', 'System Design Primer'], 'timeline': '6-9 months', 'salary': 95000}");
    record16.set("intermediateLevel", "{'skills': ['Advanced architecture', 'Multi-cloud design', 'Security architecture'], 'projects': ['Complex solutions', 'Enterprise designs'], 'resources': ['AWS certification courses', 'Architecture patterns'], 'timeline': '9-15 months', 'salary': 145000}");
    record16.set("advancedLevel", "{'skills': ['Strategic architecture', 'Leadership', 'Business acumen'], 'projects': ['Enterprise transformation', 'Strategic planning'], 'resources': ['Advanced certifications', 'Industry conferences'], 'timeline': '15+ months', 'salary': 195000}");
    record16.set("relatedCareers", ["Cloud Architect", "DevOps Engineer", "Technical Product Manager"]);
    record16.set("faqs", [{"question": "What's the difference between solutions architect and cloud architect?", "answer": "Solutions architects focus on business problems; cloud architects on cloud infrastructure"}, {"question": "Do I need development experience?", "answer": "Helpful but not required; architecture knowledge is more important"}, {"question": "How important are certifications?", "answer": "Very important for credibility and career advancement"}, {"question": "What's the typical workflow?", "answer": "Gather requirements \u2192 design solution \u2192 present to stakeholders"}, {"question": "How much hands-on work?", "answer": "Varies; architects spend more time on design than implementation"}, {"question": "What's the salary potential?", "answer": "Among the highest in tech with strong growth"}]);
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
    record17.set("name", "Database Administrator");
    record17.set("slug", "database-administrator");
    record17.set("description", "Manage and optimize databases");
    record17.set("overview", "Database Administrators maintain database systems, ensure data integrity, and optimize performance.");
    record17.set("category", "Backend");
    record17.set("jobDemand", "Medium");
    record17.set("entrySalary", 70000);
    record17.set("midSalary", 105000);
    record17.set("seniorSalary", 150000);
    record17.set("topStates", [{"state": "California", "salaryMin": 90000, "salaryMax": 170000}, {"state": "New York", "salaryMin": 85000, "salaryMax": 160000}, {"state": "Texas", "salaryMin": 80000, "salaryMax": 145000}, {"state": "Washington", "salaryMin": 82000, "salaryMax": 155000}, {"state": "Colorado", "salaryMin": 75000, "salaryMax": 140000}]);
    record17.set("technicalSkills", [{"skill": "SQL", "proficiency": "Expert"}, {"skill": "PostgreSQL", "proficiency": "Expert"}, {"skill": "MySQL", "proficiency": "Advanced"}, {"skill": "Backup/Recovery", "proficiency": "Expert"}, {"skill": "Performance Tuning", "proficiency": "Advanced"}, {"skill": "Security", "proficiency": "Advanced"}, {"skill": "Replication", "proficiency": "Advanced"}, {"skill": "Monitoring", "proficiency": "Advanced"}]);
    record17.set("softSkills", ["Attention to Detail", "Problem Solving", "Communication", "Documentation", "Reliability"]);
    record17.set("tools", ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "Redis", "Backup tools", "Monitoring tools", "SQL Server"]);
    record17.set("certifications", ["Oracle Certified Associate Database Administrator", "MySQL Certified Associate", "PostgreSQL Certification"]);
    record17.set("beginnerLevel", "{'skills': ['SQL fundamentals', 'Database basics', 'Backup concepts'], 'projects': ['Database setup', 'Basic queries'], 'resources': ['SQL tutorials', 'Database documentation'], 'timeline': '3-6 months', 'salary': 70000}");
    record17.set("intermediateLevel", "{'skills': ['Advanced SQL', 'Performance tuning', 'Replication'], 'projects': ['Database optimization', 'Backup strategies'], 'resources': ['Advanced courses', 'Database documentation'], 'timeline': '6-12 months', 'salary': 105000}");
    record17.set("advancedLevel", "{'skills': ['Enterprise databases', 'Disaster recovery', 'Leadership'], 'projects': ['Large-scale systems', 'Technical mentoring'], 'resources': ['Advanced certifications', 'Industry conferences'], 'timeline': '12+ months', 'salary': 150000}");
    record17.set("relatedCareers", ["Data Engineer", "DevOps Engineer", "Systems Administrator"]);
    record17.set("faqs", [{"question": "What databases should I learn?", "answer": "PostgreSQL, MySQL, and Oracle are most common"}, {"question": "How important is performance tuning?", "answer": "Critical for senior DBA roles"}, {"question": "What's the learning curve?", "answer": "3-6 months for basics, 12+ months for proficiency"}, {"question": "Is DBA a dying career?", "answer": "No, but evolving toward cloud-managed databases"}, {"question": "What's the job market like?", "answer": "Good demand with competitive salaries"}, {"question": "How much on-call work?", "answer": "Varies; critical systems require more on-call"}]);
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
    record18.set("name", "Network Engineer");
    record18.set("slug", "network-engineer");
    record18.set("description", "Design and manage computer networks");
    record18.set("overview", "Network Engineers design, implement, and maintain computer networks for organizations.");
    record18.set("category", "DevOps");
    record18.set("jobDemand", "Medium");
    record18.set("entrySalary", 65000);
    record18.set("midSalary", 95000);
    record18.set("seniorSalary", 135000);
    record18.set("topStates", [{"state": "California", "salaryMin": 85000, "salaryMax": 155000}, {"state": "Virginia", "salaryMin": 80000, "salaryMax": 145000}, {"state": "Texas", "salaryMin": 75000, "salaryMax": 130000}, {"state": "New York", "salaryMin": 78000, "salaryMax": 140000}, {"state": "Washington", "salaryMin": 77000, "salaryMax": 138000}]);
    record18.set("technicalSkills", [{"skill": "TCP/IP", "proficiency": "Expert"}, {"skill": "Routing", "proficiency": "Advanced"}, {"skill": "Switching", "proficiency": "Advanced"}, {"skill": "Firewalls", "proficiency": "Advanced"}, {"skill": "VPN", "proficiency": "Advanced"}, {"skill": "Network Security", "proficiency": "Advanced"}, {"skill": "Linux", "proficiency": "Intermediate"}, {"skill": "Monitoring", "proficiency": "Advanced"}]);
    record18.set("softSkills", ["Problem Solving", "Communication", "Attention to Detail", "Documentation", "Patience"]);
    record18.set("tools", ["Cisco IOS", "Juniper", "Wireshark", "Packet Tracer", "GNS3", "Nagios", "Zabbix", "Splunk"]);
    record18.set("certifications", ["Cisco CCNA", "CompTIA Network+", "Juniper JNCIA"]);
    record18.set("beginnerLevel", "{'skills': ['Network fundamentals', 'TCP/IP basics', 'Routing basics'], 'projects': ['Network design', 'Packet analysis'], 'resources': ['CompTIA Network+', 'Cisco CCNA'], 'timeline': '3-6 months', 'salary': 65000}");
    record18.set("intermediateLevel", "{'skills': ['Advanced routing', 'Security', 'Troubleshooting'], 'projects': ['Network implementation', 'Security design'], 'resources': ['Cisco CCNA', 'Advanced courses'], 'timeline': '6-12 months', 'salary': 95000}");
    record18.set("advancedLevel", "{'skills': ['Enterprise networks', 'Leadership', 'Strategic planning'], 'projects': ['Large-scale networks', 'Technical mentoring'], 'resources': ['Advanced certifications', 'Industry conferences'], 'timeline': '12+ months', 'salary': 135000}");
    record18.set("relatedCareers", ["Systems Administrator", "Security Engineer", "DevOps Engineer"]);
    record18.set("faqs", [{"question": "What certifications should I get?", "answer": "CCNA is the industry standard for network engineers"}, {"question": "How important is hands-on experience?", "answer": "Critical; labs and simulations are essential"}, {"question": "What's the learning curve?", "answer": "3-6 months for basics, 12+ months for proficiency"}, {"question": "What's the job market like?", "answer": "Good demand with competitive salaries"}, {"question": "How much on-call work?", "answer": "Varies; critical infrastructure requires more on-call"}, {"question": "What's the future of networking?", "answer": "Cloud networking and software-defined networking are growing"}]);
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
    record19.set("name", "Systems Administrator");
    record19.set("slug", "systems-administrator");
    record19.set("description", "Manage computer systems and infrastructure");
    record19.set("overview", "Systems Administrators maintain servers, networks, and IT infrastructure for organizations.");
    record19.set("category", "DevOps");
    record19.set("jobDemand", "Medium");
    record19.set("entrySalary", 60000);
    record19.set("midSalary", 85000);
    record19.set("seniorSalary", 120000);
    record19.set("topStates", [{"state": "California", "salaryMin": 75000, "salaryMax": 140000}, {"state": "New York", "salaryMin": 70000, "salaryMax": 130000}, {"state": "Texas", "salaryMin": 65000, "salaryMax": 115000}, {"state": "Washington", "salaryMin": 68000, "salaryMax": 125000}, {"state": "Colorado", "salaryMin": 62000, "salaryMax": 110000}]);
    record19.set("technicalSkills", [{"skill": "Linux", "proficiency": "Expert"}, {"skill": "Windows Server", "proficiency": "Advanced"}, {"skill": "Networking", "proficiency": "Advanced"}, {"skill": "Virtualization", "proficiency": "Advanced"}, {"skill": "Scripting", "proficiency": "Advanced"}, {"skill": "Security", "proficiency": "Advanced"}, {"skill": "Monitoring", "proficiency": "Advanced"}, {"skill": "Backup/Recovery", "proficiency": "Advanced"}]);
    record19.set("softSkills", ["Problem Solving", "Communication", "Attention to Detail", "Documentation", "Reliability"]);
    record19.set("tools", ["Linux", "Windows Server", "VMware", "Hyper-V", "Ansible", "Puppet", "Nagios", "Splunk"]);
    record19.set("certifications", ["CompTIA Security+", "Linux+ Certification", "Microsoft Certified: Windows Server Administrator"]);
    record19.set("beginnerLevel", "{'skills': ['Linux basics', 'Windows Server basics', 'Networking'], 'projects': ['Server setup', 'User management'], 'resources': ['Linux Academy', 'Microsoft Learn'], 'timeline': '3-6 months', 'salary': 60000}");
    record19.set("intermediateLevel", "{'skills': ['Advanced Linux', 'Virtualization', 'Automation'], 'projects': ['Infrastructure setup', 'Automation scripts'], 'resources': ['Advanced courses', 'Linux documentation'], 'timeline': '6-12 months', 'salary': 85000}");
    record19.set("advancedLevel", "{'skills': ['Enterprise infrastructure', 'Leadership', 'Strategic planning'], 'projects': ['Large-scale systems', 'Technical mentoring'], 'resources': ['Advanced certifications', 'Industry conferences'], 'timeline': '12+ months', 'salary': 120000}");
    record19.set("relatedCareers", ["DevOps Engineer", "Network Engineer", "Security Engineer"]);
    record19.set("faqs", [{"question": "What certifications should I get?", "answer": "Security+, Linux+, and Microsoft certifications are valuable"}, {"question": "How important is Linux knowledge?", "answer": "Critical for modern systems administration"}, {"question": "What's the learning curve?", "answer": "3-6 months for basics, 12+ months for proficiency"}, {"question": "What's the job market like?", "answer": "Good demand with competitive salaries"}, {"question": "How much on-call work?", "answer": "Varies; critical systems require more on-call"}, {"question": "What's the future of sysadmin?", "answer": "Evolving toward cloud infrastructure and DevOps"}]);
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
    record20.set("name", "IT Support Specialist");
    record20.set("slug", "it-support-specialist");
    record20.set("description", "Provide technical support to end users");
    record20.set("overview", "IT Support Specialists help users troubleshoot technical issues and maintain IT systems.");
    record20.set("category", "DevOps");
    record20.set("jobDemand", "Medium");
    record20.set("entrySalary", 40000);
    record20.set("midSalary", 55000);
    record20.set("seniorSalary", 75000);
    record20.set("topStates", [{"state": "California", "salaryMin": 50000, "salaryMax": 90000}, {"state": "New York", "salaryMin": 48000, "salaryMax": 85000}, {"state": "Texas", "salaryMin": 45000, "salaryMax": 75000}, {"state": "Washington", "salaryMin": 46000, "salaryMax": 80000}, {"state": "Colorado", "salaryMin": 44000, "salaryMax": 72000}]);
    record20.set("technicalSkills", [{"skill": "Windows", "proficiency": "Advanced"}, {"skill": "Networking", "proficiency": "Intermediate"}, {"skill": "Troubleshooting", "proficiency": "Advanced"}, {"skill": "Help Desk Software", "proficiency": "Advanced"}, {"skill": "Remote Support", "proficiency": "Advanced"}, {"skill": "Hardware", "proficiency": "Intermediate"}, {"skill": "Active Directory", "proficiency": "Intermediate"}, {"skill": "Office 365", "proficiency": "Intermediate"}]);
    record20.set("softSkills", ["Communication", "Patience", "Problem Solving", "Customer Service", "Documentation"]);
    record20.set("tools", ["Windows", "Active Directory", "Remote Desktop", "TeamViewer", "Jira Service Desk", "Office 365", "Slack", "Zoom"]);
    record20.set("certifications", ["CompTIA A+", "CompTIA Security+", "Microsoft Certified: Windows Server Administrator"]);
    record20.set("beginnerLevel", "{'skills': ['Windows basics', 'Troubleshooting', 'Customer service'], 'projects': ['User support', 'Ticket resolution'], 'resources': ['CompTIA A+', 'Help desk training'], 'timeline': '2-4 months', 'salary': 40000}");
    record20.set("intermediateLevel", "{'skills': ['Advanced troubleshooting', 'Networking', 'System administration'], 'projects': ['Complex issues', 'System maintenance'], 'resources': ['Advanced courses', 'Certifications'], 'timeline': '4-8 months', 'salary': 55000}");
    record20.set("advancedLevel", "{'skills': ['Leadership', 'Strategic support', 'Advanced systems'], 'projects': ['Support strategy', 'Technical mentoring'], 'resources': ['Advanced certifications', 'Industry networks'], 'timeline': '8+ months', 'salary': 75000}");
    record20.set("relatedCareers", ["Systems Administrator", "Network Engineer", "IT Manager"]);
    record20.set("faqs", [{"question": "Is this a good entry-level role?", "answer": "Yes, excellent starting point for IT careers"}, {"question": "What certifications should I get?", "answer": "CompTIA A+ is the industry standard"}, {"question": "How long to advance?", "answer": "2-3 years to move into systems administration"}, {"question": "What's the job market like?", "answer": "Good demand with entry-level salaries"}, {"question": "How much on-call work?", "answer": "Varies; some roles have on-call requirements"}, {"question": "What's the typical workflow?", "answer": "Receive ticket \u2192 troubleshoot \u2192 resolve \u2192 document"}]);
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
    record21.set("name", "Cybersecurity Analyst");
    record21.set("slug", "cybersecurity-analyst");
    record21.set("description", "Monitor and protect against cyber threats");
    record21.set("overview", "Cybersecurity Analysts monitor networks for security breaches and implement protective measures.");
    record21.set("category", "Security");
    record21.set("jobDemand", "High");
    record21.set("entrySalary", 70000);
    record21.set("midSalary", 110000);
    record21.set("seniorSalary", 155000);
    record21.set("topStates", [{"state": "California", "salaryMin": 95000, "salaryMax": 175000}, {"state": "Virginia", "salaryMin": 90000, "salaryMax": 165000}, {"state": "New York", "salaryMin": 85000, "salaryMax": 160000}, {"state": "Texas", "salaryMin": 80000, "salaryMax": 150000}, {"state": "Washington", "salaryMin": 82000, "salaryMax": 155000}]);
    record21.set("technicalSkills", [{"skill": "Network Security", "proficiency": "Expert"}, {"skill": "SIEM", "proficiency": "Advanced"}, {"skill": "Incident Response", "proficiency": "Advanced"}, {"skill": "Threat Analysis", "proficiency": "Advanced"}, {"skill": "Firewalls", "proficiency": "Advanced"}, {"skill": "Intrusion Detection", "proficiency": "Advanced"}, {"skill": "Linux", "proficiency": "Intermediate"}, {"skill": "Python", "proficiency": "Intermediate"}]);
    record21.set("softSkills", ["Attention to Detail", "Problem Solving", "Communication", "Compliance Knowledge", "Continuous Learning"]);
    record21.set("tools", ["Splunk", "ELK Stack", "Wireshark", "Snort", "Suricata", "Metasploit", "Nessus", "Burp Suite"]);
    record21.set("certifications", ["CompTIA Security+", "Certified Ethical Hacker (CEH)", "CISSP"]);
    record21.set("beginnerLevel", "{'skills': ['Network fundamentals', 'Security basics', 'SIEM basics'], 'projects': ['Log analysis', 'Threat detection'], 'resources': ['CompTIA Security+', 'TryHackMe'], 'timeline': '3-6 months', 'salary': 70000}");
    record21.set("intermediateLevel", "{'skills': ['Advanced SIEM', 'Incident response', 'Threat hunting'], 'projects': ['Security monitoring', 'Incident investigation'], 'resources': ['CEH certification', 'Advanced courses'], 'timeline': '6-12 months', 'salary': 110000}");
    record21.set("advancedLevel", "{'skills': ['Advanced threat analysis', 'Security strategy', 'Leadership'], 'projects': ['Security program', 'Technical mentoring'], 'resources': ['CISSP certification', 'Industry conferences'], 'timeline': '12+ months', 'salary': 155000}");
    record21.set("relatedCareers", ["Security Engineer", "Penetration Tester", "Cloud Security Engineer"]);
    record21.set("faqs", [{"question": "Do I need a security background?", "answer": "No, but IT or networking experience is helpful"}, {"question": "What certifications are most valuable?", "answer": "Security+, CEH, and CISSP are industry standards"}, {"question": "How important is hands-on experience?", "answer": "Critical; labs and real-world scenarios are essential"}, {"question": "What's the job market like?", "answer": "Excellent demand with high salaries and growth"}, {"question": "How much on-call work?", "answer": "Varies; incident response roles have more on-call"}, {"question": "What's the typical workflow?", "answer": "Monitor \u2192 detect \u2192 investigate \u2192 respond \u2192 document"}]);
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
    record22.set("name", "Penetration Tester");
    record22.set("slug", "penetration-tester");
    record22.set("description", "Test security by simulating attacks");
    record22.set("overview", "Penetration Testers ethically hack systems to identify vulnerabilities before malicious actors do.");
    record22.set("category", "Security");
    record22.set("jobDemand", "High");
    record22.set("entrySalary", 75000);
    record22.set("midSalary", 120000);
    record22.set("seniorSalary", 170000);
    record22.set("topStates", [{"state": "California", "salaryMin": 100000, "salaryMax": 190000}, {"state": "Virginia", "salaryMin": 95000, "salaryMax": 180000}, {"state": "New York", "salaryMin": 90000, "salaryMax": 175000}, {"state": "Texas", "salaryMin": 85000, "salaryMax": 160000}, {"state": "Washington", "salaryMin": 87000, "salaryMax": 165000}]);
    record22.set("technicalSkills", [{"skill": "Penetration Testing", "proficiency": "Expert"}, {"skill": "Metasploit", "proficiency": "Advanced"}, {"skill": "Burp Suite", "proficiency": "Advanced"}, {"skill": "Network Security", "proficiency": "Advanced"}, {"skill": "Web Security", "proficiency": "Advanced"}, {"skill": "Linux", "proficiency": "Advanced"}, {"skill": "Python", "proficiency": "Advanced"}, {"skill": "Exploitation", "proficiency": "Advanced"}]);
    record22.set("softSkills", ["Problem Solving", "Communication", "Attention to Detail", "Ethical Judgment", "Continuous Learning"]);
    record22.set("tools", ["Metasploit", "Burp Suite", "Kali Linux", "Wireshark", "Nmap", "Hashcat", "SQLmap", "BeEF"]);
    record22.set("certifications", ["Certified Ethical Hacker (CEH)", "Offensive Security Certified Professional (OSCP)", "GPEN"]);
    record22.set("beginnerLevel", "{'skills': ['Network fundamentals', 'Linux basics', 'Hacking basics'], 'projects': ['Vulnerability scanning', 'Basic exploitation'], 'resources': ['CEH certification', 'HackTheBox'], 'timeline': '6-9 months', 'salary': 75000}");
    record22.set("intermediateLevel", "{'skills': ['Advanced exploitation', 'Web testing', 'Report writing'], 'projects': ['Penetration tests', 'Vulnerability assessments'], 'resources': ['OSCP certification', 'Advanced courses'], 'timeline': '9-15 months', 'salary': 120000}");
    record22.set("advancedLevel", "{'skills': ['Advanced techniques', 'Red team operations', 'Leadership'], 'projects': ['Complex assessments', 'Technical mentoring'], 'resources': ['Advanced certifications', 'Industry conferences'], 'timeline': '15+ months', 'salary': 170000}");
    record22.set("relatedCareers", ["Security Engineer", "Cybersecurity Analyst", "Red Team Operator"]);
    record22.set("faqs", [{"question": "Is penetration testing legal?", "answer": "Yes, when authorized by the organization"}, {"question": "What certifications are most valuable?", "answer": "CEH and OSCP are industry standards"}, {"question": "How important is hands-on experience?", "answer": "Critical; labs and real-world testing are essential"}, {"question": "What's the job market like?", "answer": "Excellent demand with high salaries"}, {"question": "How much travel is involved?", "answer": "Varies; some roles require on-site testing"}, {"question": "What's the typical workflow?", "answer": "Reconnaissance \u2192 scanning \u2192 enumeration \u2192 exploitation \u2192 reporting"}]);
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
    record23.set("name", "Cloud Security Engineer");
    record23.set("slug", "cloud-security-engineer");
    record23.set("description", "Secure cloud infrastructure and applications");
    record23.set("overview", "Cloud Security Engineers design and implement security measures for cloud-based systems.");
    record23.set("category", "Security");
    record23.set("jobDemand", "High");
    record23.set("entrySalary", 85000);
    record23.set("midSalary", 130000);
    record23.set("seniorSalary", 180000);
    record23.set("topStates", [{"state": "California", "salaryMin": 110000, "salaryMax": 200000}, {"state": "Washington", "salaryMin": 105000, "salaryMax": 190000}, {"state": "New York", "salaryMin": 100000, "salaryMax": 185000}, {"state": "Texas", "salaryMin": 95000, "salaryMax": 170000}, {"state": "Colorado", "salaryMin": 92000, "salaryMax": 175000}]);
    record23.set("technicalSkills", [{"skill": "AWS Security", "proficiency": "Expert"}, {"skill": "Azure Security", "proficiency": "Advanced"}, {"skill": "Cloud Architecture", "proficiency": "Advanced"}, {"skill": "Identity Management", "proficiency": "Advanced"}, {"skill": "Encryption", "proficiency": "Advanced"}, {"skill": "Compliance", "proficiency": "Advanced"}, {"skill": "Network Security", "proficiency": "Advanced"}, {"skill": "Python", "proficiency": "Intermediate"}]);
    record23.set("softSkills", ["Problem Solving", "Communication", "Compliance Knowledge", "Attention to Detail", "Continuous Learning"]);
    record23.set("tools", ["AWS", "Azure", "GCP", "Terraform", "CloudTrail", "GuardDuty", "Splunk", "Vault"]);
    record23.set("certifications", ["AWS Certified Security Specialty", "Azure Security Engineer Associate", "Google Cloud Security Engineer"]);
    record23.set("beginnerLevel", "{'skills': ['Cloud fundamentals', 'Security basics', 'AWS basics'], 'projects': ['Secure cloud setup', 'IAM configuration'], 'resources': ['AWS documentation', 'Security courses'], 'timeline': '6-9 months', 'salary': 85000}");
    record23.set("intermediateLevel", "{'skills': ['Advanced AWS security', 'Compliance', 'Threat detection'], 'projects': ['Security architecture', 'Compliance implementation'], 'resources': ['AWS certification courses', 'Advanced courses'], 'timeline': '9-15 months', 'salary': 130000}");
    record23.set("advancedLevel", "{'skills': ['Enterprise security', 'Leadership', 'Strategic planning'], 'projects': ['Security program', 'Technical mentoring'], 'resources': ['Advanced certifications', 'Industry conferences'], 'timeline': '15+ months', 'salary': 180000}");
    record23.set("relatedCareers", ["Cloud Architect", "Security Engineer", "DevOps Engineer"]);
    record23.set("faqs", [{"question": "Which cloud platform should I focus on?", "answer": "AWS is most popular; Azure and GCP are also valuable"}, {"question": "Do I need security experience?", "answer": "Helpful but not required; cloud fundamentals can be learned"}, {"question": "How important are certifications?", "answer": "Very important for credibility and career advancement"}, {"question": "What's the job market like?", "answer": "Excellent demand with high salaries and growth"}, {"question": "How much on-call work?", "answer": "Varies; security incidents may require on-call"}, {"question": "What's the future of cloud security?", "answer": "Zero trust architecture and AI-driven threat detection are growing"}]);
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
    record24.set("name", "AI/ML Engineer");
    record24.set("slug", "ai-ml-engineer");
    record24.set("description", "Build artificial intelligence and machine learning systems");
    record24.set("overview", "AI/ML Engineers develop intelligent systems using advanced machine learning and deep learning techniques.");
    record24.set("category", "Data");
    record24.set("jobDemand", "High");
    record24.set("entrySalary", 100000);
    record24.set("midSalary", 160000);
    record24.set("seniorSalary", 220000);
    record24.set("topStates", [{"state": "California", "salaryMin": 140000, "salaryMax": 260000}, {"state": "Washington", "salaryMin": 135000, "salaryMax": 250000}, {"state": "New York", "salaryMin": 130000, "salaryMax": 240000}, {"state": "Massachusetts", "salaryMin": 125000, "salaryMax": 230000}, {"state": "Colorado", "salaryMin": 120000, "salaryMax": 220000}]);
    record24.set("technicalSkills", [{"skill": "Python", "proficiency": "Expert"}, {"skill": "Deep Learning", "proficiency": "Expert"}, {"skill": "TensorFlow", "proficiency": "Expert"}, {"skill": "PyTorch", "proficiency": "Expert"}, {"skill": "NLP", "proficiency": "Advanced"}, {"skill": "Computer Vision", "proficiency": "Advanced"}, {"skill": "Reinforcement Learning", "proficiency": "Advanced"}, {"skill": "MLOps", "proficiency": "Advanced"}]);
    record24.set("softSkills", ["Problem Solving", "Communication", "Collaboration", "Continuous Learning", "Creativity"]);
    record24.set("tools", ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "OpenAI", "Kubernetes", "MLflow"]);
    record24.set("certifications", ["TensorFlow Developer Certificate", "AWS Certified Machine Learning Specialty", "Google Cloud ML Engineer"]);
    record24.set("beginnerLevel", "{'skills': ['Python', 'ML fundamentals', 'Deep learning basics'], 'projects': ['Image classification', 'Text classification'], 'resources': ['Fast.ai', 'Kaggle'], 'timeline': '6-9 months', 'salary': 100000}");
    record24.set("intermediateLevel", "{'skills': ['Advanced deep learning', 'NLP', 'Computer vision'], 'projects': ['Production models', 'Kaggle competitions'], 'resources': ['Coursera ML course', 'Research papers'], 'timeline': '9-15 months', 'salary': 160000}");
    record24.set("advancedLevel", "{'skills': ['Advanced research', 'System design', 'Leadership'], 'projects': ['Novel architectures', 'Technical mentoring'], 'resources': ['Research papers', 'Advanced courses'], 'timeline': '15+ months', 'salary': 220000}");
    record24.set("relatedCareers", ["Data Scientist", "Machine Learning Engineer", "Research Scientist"]);
    record24.set("faqs", [{"question": "What's the difference between AI and ML?", "answer": "AI is broader; ML is a subset focused on learning from data"}, {"question": "How important is math?", "answer": "Linear algebra, calculus, and statistics are essential"}, {"question": "What's the learning curve?", "answer": "12-18 months with strong fundamentals"}, {"question": "How much research is involved?", "answer": "Varies by company; more in research-focused roles"}, {"question": "What's the job market like?", "answer": "Highly competitive with excellent compensation"}, {"question": "What's the future of AI/ML?", "answer": "Rapid growth with applications across all industries"}]);
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
    record25.set("name", "Data Engineer");
    record25.set("slug", "data-engineer");
    record25.set("description", "Build data infrastructure and pipelines");
    record25.set("overview", "Data Engineers design and build systems that collect, process, and store data at scale.");
    record25.set("category", "Data");
    record25.set("jobDemand", "High");
    record25.set("entrySalary", 85000);
    record25.set("midSalary", 130000);
    record25.set("seniorSalary", 180000);
    record25.set("topStates", [{"state": "California", "salaryMin": 110000, "salaryMax": 200000}, {"state": "New York", "salaryMin": 105000, "salaryMax": 190000}, {"state": "Washington", "salaryMin": 100000, "salaryMax": 185000}, {"state": "Texas", "salaryMin": 95000, "salaryMax": 170000}, {"state": "Colorado", "salaryMin": 92000, "salaryMax": 175000}]);
    record25.set("technicalSkills", [{"skill": "Python", "proficiency": "Expert"}, {"skill": "SQL", "proficiency": "Expert"}, {"skill": "Spark", "proficiency": "Expert"}, {"skill": "Hadoop", "proficiency": "Advanced"}, {"skill": "Kafka", "proficiency": "Advanced"}, {"skill": "ETL", "proficiency": "Expert"}, {"skill": "Cloud Platforms", "proficiency": "Advanced"}, {"skill": "Data Warehousing", "proficiency": "Advanced"}]);
    record25.set("softSkills", ["Problem Solving", "Communication", "Collaboration", "Attention to Detail", "Continuous Learning"]);
    record25.set("tools", ["Python", "Spark", "Hadoop", "Kafka", "Airflow", "Snowflake", "BigQuery", "Redshift"]);
    record25.set("certifications", ["Google Cloud Data Engineer", "AWS Certified Data Analytics Specialty", "Databricks Certified"]);
    record25.set("beginnerLevel", "{'skills': ['Python', 'SQL', 'ETL basics'], 'projects': ['Data pipelines', 'Data warehousing'], 'resources': ['DataCamp', 'Udacity'], 'timeline': '6-9 months', 'salary': 85000}");
    record25.set("intermediateLevel", "{'skills': ['Advanced Spark', 'Kafka', 'Cloud platforms'], 'projects': ['Large-scale pipelines', 'Real-time processing'], 'resources': ['Spark documentation', 'Advanced courses'], 'timeline': '9-15 months', 'salary': 130000}");
    record25.set("advancedLevel", "{'skills': ['Advanced architecture', 'Leadership', 'Strategic planning'], 'projects': ['Enterprise data systems', 'Technical mentoring'], 'resources': ['Advanced certifications', 'Industry conferences'], 'timeline': '15+ months', 'salary': 180000}");
    record25.set("relatedCareers", ["Data Scientist", "Analytics Engineer", "Machine Learning Engineer"]);
    record25.set("faqs", [{"question": "What's the difference between data engineer and data scientist?", "answer": "Data engineers build systems; data scientists analyze data"}, {"question": "How important is Spark?", "answer": "Critical for large-scale data processing"}, {"question": "What's the learning curve?", "answer": "6-9 months for basics, 12-18 months for proficiency"}, {"question": "What's the job market like?", "answer": "Excellent demand with high salaries"}, {"question": "How much on-call work?", "answer": "Varies; data pipelines may require monitoring"}, {"question": "What's the typical workflow?", "answer": "Design \u2192 build \u2192 test \u2192 deploy \u2192 monitor"}]);
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
    record26.set("name", "Analytics Engineer");
    record26.set("slug", "analytics-engineer");
    record26.set("description", "Build analytics infrastructure and data models");
    record26.set("overview", "Analytics Engineers bridge data engineering and analytics, building data models and infrastructure for analysis.");
    record26.set("category", "Data");
    record26.set("jobDemand", "High");
    record26.set("entrySalary", 80000);
    record26.set("midSalary", 120000);
    record26.set("seniorSalary", 165000);
    record26.set("topStates", [{"state": "California", "salaryMin": 105000, "salaryMax": 185000}, {"state": "New York", "salaryMin": 100000, "salaryMax": 175000}, {"state": "Washington", "salaryMin": 95000, "salaryMax": 170000}, {"state": "Texas", "salaryMin": 90000, "salaryMax": 160000}, {"state": "Colorado", "salaryMin": 87000, "salaryMax": 155000}]);
    record26.set("technicalSkills", [{"skill": "SQL", "proficiency": "Expert"}, {"skill": "dbt", "proficiency": "Expert"}, {"skill": "Python", "proficiency": "Advanced"}, {"skill": "Data Modeling", "proficiency": "Expert"}, {"skill": "Warehousing", "proficiency": "Advanced"}, {"skill": "Analytics Tools", "proficiency": "Advanced"}, {"skill": "Git", "proficiency": "Advanced"}, {"skill": "Testing", "proficiency": "Advanced"}]);
    record26.set("softSkills", ["Problem Solving", "Communication", "Collaboration", "Attention to Detail", "Documentation"]);
    record26.set("tools", ["dbt", "SQL", "Snowflake", "BigQuery", "Redshift", "Tableau", "Looker", "Git"]);
    record26.set("certifications", ["dbt Certification", "Google Cloud Data Engineer", "Coursera Data Engineering"]);
    record26.set("beginnerLevel", "{'skills': ['SQL', 'Data modeling', 'dbt basics'], 'projects': ['Data models', 'Transformations'], 'resources': ['dbt documentation', 'Mode Analytics'], 'timeline': '3-6 months', 'salary': 80000}");
    record26.set("intermediateLevel", "{'skills': ['Advanced dbt', 'Complex models', 'Testing'], 'projects': ['Analytics infrastructure', 'Data marts'], 'resources': ['dbt courses', 'Advanced SQL'], 'timeline': '6-12 months', 'salary': 120000}");
    record26.set("advancedLevel", "{'skills': ['Advanced architecture', 'Leadership', 'Strategic planning'], 'projects': ['Enterprise analytics', 'Technical mentoring'], 'resources': ['Advanced courses', 'Industry conferences'], 'timeline': '12+ months', 'salary': 165000}");
    record26.set("relatedCareers", ["Data Engineer", "Data Analyst", "Business Analyst"]);
    record26.set("faqs", [{"question": "What's the difference between analytics engineer and data engineer?", "answer": "Analytics engineers focus on analytics; data engineers on infrastructure"}, {"question": "How important is dbt?", "answer": "Very important for modern analytics engineering"}, {"question": "What's the learning curve?", "answer": "3-6 months for basics, 12+ months for proficiency"}, {"question": "What's the job market like?", "answer": "Growing demand with competitive salaries"}, {"question": "Do I need a data background?", "answer": "Helpful but not required; SQL and modeling can be learned"}, {"question": "What's the typical workflow?", "answer": "Design \u2192 build models \u2192 test \u2192 deploy \u2192 monitor"}]);
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
    record27.set("name", "Growth Hacker");
    record27.set("slug", "growth-hacker");
    record27.set("description", "Drive rapid business growth through experimentation");
    record27.set("overview", "Growth Hackers use data-driven experimentation to rapidly grow user bases and revenue.");
    record27.set("category", "Data");
    record27.set("jobDemand", "High");
    record27.set("entrySalary", 70000);
    record27.set("midSalary", 110000);
    record27.set("seniorSalary", 155000);
    record27.set("topStates", [{"state": "California", "salaryMin": 90000, "salaryMax": 175000}, {"state": "New York", "salaryMin": 85000, "salaryMax": 165000}, {"state": "Washington", "salaryMin": 80000, "salaryMax": 160000}, {"state": "Texas", "salaryMin": 75000, "salaryMax": 145000}, {"state": "Colorado", "salaryMin": 72000, "salaryMax": 140000}]);
    record27.set("technicalSkills", [{"skill": "Data Analysis", "proficiency": "Expert"}, {"skill": "SQL", "proficiency": "Advanced"}, {"skill": "Python", "proficiency": "Advanced"}, {"skill": "A/B Testing", "proficiency": "Expert"}, {"skill": "Analytics", "proficiency": "Expert"}, {"skill": "Product Knowledge", "proficiency": "Advanced"}, {"skill": "Marketing Automation", "proficiency": "Advanced"}, {"skill": "Experimentation", "proficiency": "Expert"}]);
    record27.set("softSkills", ["Creativity", "Problem Solving", "Communication", "Collaboration", "Analytical Thinking"]);
    record27.set("tools", ["Mixpanel", "Amplitude", "Google Analytics", "Tableau", "Python", "SQL", "Optimizely", "Segment"]);
    record27.set("certifications", ["Google Analytics Certification", "Reforge Growth Marketing", "Product Analytics Certification"]);
    record27.set("beginnerLevel", "{'skills': ['Analytics basics', 'A/B testing', 'SQL'], 'projects': ['Growth experiments', 'Analytics dashboards'], 'resources': ['Reforge', 'Coursera'], 'timeline': '3-6 months', 'salary': 70000}");
    record27.set("intermediateLevel", "{'skills': ['Advanced analytics', 'Experimentation design', 'Product sense'], 'projects': ['Growth campaigns', 'Viral loops'], 'resources': ['Growth Hacker Handbook', 'Advanced courses'], 'timeline': '6-12 months', 'salary': 110000}");
    record27.set("advancedLevel", "{'skills': ['Strategic growth', 'Leadership', 'Business acumen'], 'projects': ['Growth strategy', 'Technical mentoring'], 'resources': ['Advanced courses', 'Industry networks'], 'timeline': '12+ months', 'salary': 155000}");
    record27.set("relatedCareers", ["Product Manager", "Data Analyst", "Marketing Manager"]);
    record27.set("faqs", [{"question": "Do I need a technical background?", "answer": "Helpful but not required; analytical skills are more important"}, {"question": "What's the typical background?", "answer": "Marketing, product, or data analytics backgrounds work well"}, {"question": "How important is experimentation?", "answer": "Critical; data-driven testing is core to growth hacking"}, {"question": "What's the job market like?", "answer": "Strong demand in startups and tech companies"}, {"question": "How much coding is required?", "answer": "SQL and Python are helpful but not always required"}, {"question": "What's the typical workflow?", "answer": "Identify opportunity \u2192 design experiment \u2192 analyze \u2192 scale"}]);
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
    record28.set("name", "Marketing Manager");
    record28.set("slug", "marketing-manager");
    record28.set("description", "Lead marketing strategy and campaigns");
    record28.set("overview", "Marketing Managers develop and execute marketing strategies to promote products and services.");
    record28.set("category", "Management");
    record28.set("jobDemand", "High");
    record28.set("entrySalary", 65000);
    record28.set("midSalary", 100000);
    record28.set("seniorSalary", 145000);
    record28.set("topStates", [{"state": "New York", "salaryMin": 85000, "salaryMax": 160000}, {"state": "California", "salaryMin": 80000, "salaryMax": 155000}, {"state": "Texas", "salaryMin": 75000, "salaryMax": 140000}, {"state": "Massachusetts", "salaryMin": 77000, "salaryMax": 145000}, {"state": "Illinois", "salaryMin": 72000, "salaryMax": 135000}]);
    record28.set("technicalSkills", [{"skill": "Marketing Strategy", "proficiency": "Expert"}, {"skill": "Analytics", "proficiency": "Advanced"}, {"skill": "Content Marketing", "proficiency": "Advanced"}, {"skill": "SEO/SEM", "proficiency": "Advanced"}, {"skill": "Social Media", "proficiency": "Advanced"}, {"skill": "Email Marketing", "proficiency": "Advanced"}, {"skill": "Data Analysis", "proficiency": "Intermediate"}, {"skill": "Marketing Automation", "proficiency": "Advanced"}]);
    record28.set("softSkills", ["Leadership", "Communication", "Creativity", "Strategic Thinking", "Collaboration"]);
    record28.set("tools", ["Google Analytics", "HubSpot", "Mailchimp", "Hootsuite", "Canva", "SEMrush", "Tableau", "Salesforce"]);
    record28.set("certifications", ["Google Analytics Certification", "HubSpot Inbound Marketing", "Hootsuite Platform Certification"]);
    record28.set("beginnerLevel", "{'skills': ['Marketing fundamentals', 'Social media', 'Content creation'], 'projects': ['Social campaigns', 'Email campaigns'], 'resources': ['HubSpot Academy', 'Google Analytics'], 'timeline': '3-6 months', 'salary': 65000}");
    record28.set("intermediateLevel", "{'skills': ['Advanced analytics', 'Campaign management', 'Strategy'], 'projects': ['Multi-channel campaigns', 'Marketing automation'], 'resources': ['Advanced courses', 'Industry blogs'], 'timeline': '6-12 months', 'salary': 100000}");
    record28.set("advancedLevel", "{'skills': ['Strategic marketing', 'Leadership', 'Business acumen'], 'projects': ['Marketing strategy', 'Team leadership'], 'resources': ['Advanced certifications', 'Industry networks'], 'timeline': '12+ months', 'salary': 145000}");
    record28.set("relatedCareers", ["Product Manager", "Growth Manager", "Sales Manager"]);
    record28.set("faqs", [{"question": "Do I need a marketing degree?", "answer": "No, experience and skills matter more"}, {"question": "What's the typical background?", "answer": "Marketing, communications, or business backgrounds work well"}, {"question": "How important is data?", "answer": "Critical for measuring campaign effectiveness"}, {"question": "What's the job market like?", "answer": "Strong demand across industries"}, {"question": "How much travel is involved?", "answer": "Varies; some roles require conference attendance"}, {"question": "What's the typical workflow?", "answer": "Strategy \u2192 planning \u2192 execution \u2192 analysis \u2192 optimization"}]);
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
    record29.set("name", "Sales Manager");
    record29.set("slug", "sales-manager");
    record29.set("description", "Lead sales teams and drive revenue");
    record29.set("overview", "Sales Managers oversee sales teams, develop strategies, and drive revenue growth.");
    record29.set("category", "Management");
    record29.set("jobDemand", "High");
    record29.set("entrySalary", 70000);
    record29.set("midSalary", 110000);
    record29.set("seniorSalary", 160000);
    record29.set("topStates", [{"state": "California", "salaryMin": 95000, "salaryMax": 185000}, {"state": "New York", "salaryMin": 90000, "salaryMax": 175000}, {"state": "Texas", "salaryMin": 85000, "salaryMax": 160000}, {"state": "Massachusetts", "salaryMin": 82000, "salaryMax": 155000}, {"state": "Illinois", "salaryMin": 78000, "salaryMax": 145000}]);
    record29.set("technicalSkills", [{"skill": "Sales Strategy", "proficiency": "Expert"}, {"skill": "CRM", "proficiency": "Advanced"}, {"skill": "Forecasting", "proficiency": "Advanced"}, {"skill": "Analytics", "proficiency": "Advanced"}, {"skill": "Negotiation", "proficiency": "Expert"}, {"skill": "Pipeline Management", "proficiency": "Expert"}, {"skill": "Data Analysis", "proficiency": "Intermediate"}, {"skill": "Sales Automation", "proficiency": "Advanced"}]);
    record29.set("softSkills", ["Leadership", "Communication", "Negotiation", "Motivation", "Strategic Thinking"]);
    record29.set("tools", ["Salesforce", "HubSpot", "Pipedrive", "LinkedIn Sales Navigator", "Tableau", "Excel", "Slack", "Zoom"]);
    record29.set("certifications", ["Salesforce Administrator", "HubSpot Sales Certification", "Sandler Sales Training"]);
    record29.set("beginnerLevel", "{'skills': ['Sales fundamentals', 'CRM basics', 'Pipeline management'], 'projects': ['Sales plans', 'Territory management'], 'resources': ['Salesforce training', 'Sales courses'], 'timeline': '3-6 months', 'salary': 70000}");
    record29.set("intermediateLevel", "{'skills': ['Advanced CRM', 'Forecasting', 'Team management'], 'projects': ['Sales strategy', 'Team coaching'], 'resources': ['Advanced courses', 'Sales coaching'], 'timeline': '6-12 months', 'salary': 110000}");
    record29.set("advancedLevel", "{'skills': ['Strategic sales', 'Leadership', 'Business acumen'], 'projects': ['Sales organization', 'Executive leadership'], 'resources': ['Advanced certifications', 'Industry networks'], 'timeline': '12+ months', 'salary': 160000}");
    record29.set("relatedCareers", ["Product Manager", "Marketing Manager", "Business Development Manager"]);
    record29.set("faqs", [{"question": "Do I need sales experience?", "answer": "Yes, typically 3-5 years of sales experience required"}, {"question": "What's the typical background?", "answer": "Sales, business development, or account management"}, {"question": "How important is CRM knowledge?", "answer": "Critical; Salesforce is industry standard"}, {"question": "What's the job market like?", "answer": "Strong demand with competitive compensation"}, {"question": "How much travel is involved?", "answer": "Varies; some roles require significant travel"}, {"question": "What's the typical workflow?", "answer": "Strategy \u2192 coaching \u2192 pipeline management \u2192 forecasting"}]);
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
    record30.set("name", "Project Manager");
    record30.set("slug", "project-manager");
    record30.set("description", "Plan and execute projects on time and budget");
    record30.set("overview", "Project Managers oversee projects from planning through completion, ensuring goals are met.");
    record30.set("category", "Management");
    record30.set("jobDemand", "High");
    record30.set("entrySalary", 70000);
    record30.set("midSalary", 105000);
    record30.set("seniorSalary", 150000);
    record30.set("topStates", [{"state": "California", "salaryMin": 90000, "salaryMax": 170000}, {"state": "New York", "salaryMin": 85000, "salaryMax": 160000}, {"state": "Texas", "salaryMin": 80000, "salaryMax": 145000}, {"state": "Massachusetts", "salaryMin": 82000, "salaryMax": 155000}, {"state": "Colorado", "salaryMin": 75000, "salaryMax": 140000}]);
    record30.set("technicalSkills", [{"skill": "Project Management", "proficiency": "Expert"}, {"skill": "Agile/Scrum", "proficiency": "Advanced"}, {"skill": "Risk Management", "proficiency": "Advanced"}, {"skill": "Budget Management", "proficiency": "Advanced"}, {"skill": "Stakeholder Management", "proficiency": "Expert"}, {"skill": "JIRA", "proficiency": "Advanced"}, {"skill": "Excel", "proficiency": "Advanced"}, {"skill": "Communication", "proficiency": "Expert"}]);
    record30.set("softSkills", ["Leadership", "Communication", "Problem Solving", "Organization", "Negotiation"]);
    record30.set("tools", ["JIRA", "Asana", "Monday.com", "Microsoft Project", "Confluence", "Excel", "Slack", "Zoom"]);
    record30.set("certifications", ["PMP (Project Management Professional)", "Certified ScrumMaster (CSM)", "PRINCE2"]);
    record30.set("beginnerLevel", "{'skills': ['Project fundamentals', 'Agile basics', 'JIRA'], 'projects': ['Small projects', 'Task management'], 'resources': ['PMI basics', 'Scrum training'], 'timeline': '3-6 months', 'salary': 70000}");
    record30.set("intermediateLevel", "{'skills': ['Advanced Agile', 'Risk management', 'Stakeholder management'], 'projects': ['Medium projects', 'Team leadership'], 'resources': ['PMP preparation', 'Advanced courses'], 'timeline': '6-12 months', 'salary': 105000}");
    record30.set("advancedLevel", "{'skills': ['Strategic project management', 'Leadership', 'Business acumen'], 'projects': ['Large programs', 'Executive leadership'], 'resources': ['PMP certification', 'Industry networks'], 'timeline': '12+ months', 'salary': 150000}");
    record30.set("relatedCareers", ["Scrum Master", "Product Manager", "Business Analyst"]);
    record30.set("faqs", [{"question": "Do I need a PMP certification?", "answer": "Not required but helpful for career advancement"}, {"question": "What's the typical background?", "answer": "Any field with project experience works"}, {"question": "How important is Agile?", "answer": "Very important for modern project management"}, {"question": "What's the job market like?", "answer": "Strong demand across industries"}, {"question": "How much travel is involved?", "answer": "Varies; some roles require on-site presence"}, {"question": "What's the typical workflow?", "answer": "Planning \u2192 execution \u2192 monitoring \u2192 closure"}]);
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
    record31.set("name", "Scrum Master");
    record31.set("slug", "scrum-master");
    record31.set("description", "Facilitate agile teams and remove blockers");
    record31.set("overview", "Scrum Masters facilitate agile teams, remove impediments, and ensure effective sprint execution.");
    record31.set("category", "Management");
    record31.set("jobDemand", "High");
    record31.set("entrySalary", 75000);
    record31.set("midSalary", 110000);
    record31.set("seniorSalary", 155000);
    record31.set("topStates", [{"state": "California", "salaryMin": 95000, "salaryMax": 175000}, {"state": "New York", "salaryMin": 90000, "salaryMax": 165000}, {"state": "Washington", "salaryMin": 85000, "salaryMax": 160000}, {"state": "Texas", "salaryMin": 80000, "salaryMax": 150000}, {"state": "Colorado", "salaryMin": 78000, "salaryMax": 145000}]);
    record31.set("technicalSkills", [{"skill": "Scrum", "proficiency": "Expert"}, {"skill": "Agile", "proficiency": "Expert"}, {"skill": "Facilitation", "proficiency": "Expert"}, {"skill": "JIRA", "proficiency": "Advanced"}, {"skill": "Kanban", "proficiency": "Advanced"}, {"skill": "Coaching", "proficiency": "Advanced"}, {"skill": "Conflict Resolution", "proficiency": "Advanced"}, {"skill": "Communication", "proficiency": "Expert"}]);
    record31.set("softSkills", ["Leadership", "Communication", "Coaching", "Problem Solving", "Empathy"]);
    record31.set("tools", ["JIRA", "Confluence", "Miro", "Slack", "Azure DevOps", "Monday.com", "Asana", "Zoom"]);
    record31.set("certifications", ["Certified ScrumMaster (CSM)", "Professional Scrum Master (PSM)", "Certified Scrum Product Owner (CSPO)"]);
    record31.set("beginnerLevel", "{'skills': ['Scrum fundamentals', 'Agile basics', 'Facilitation'], 'projects': ['Sprint planning', 'Daily standups'], 'resources': ['Scrum.org', 'Coursera'], 'timeline': '2-4 months', 'salary': 75000}");
    record31.set("intermediateLevel", "{'skills': ['Advanced Scrum', 'Coaching', 'Conflict resolution'], 'projects': ['Team coaching', 'Process improvement'], 'resources': ['PSM certification', 'Advanced courses'], 'timeline': '4-8 months', 'salary': 110000}");
    record31.set("advancedLevel", "{'skills': ['Organizational coaching', 'Leadership', 'Strategic thinking'], 'projects': ['Organizational transformation', 'Executive coaching'], 'resources': ['Advanced certifications', 'Industry networks'], 'timeline': '8+ months', 'salary': 155000}");
    record31.set("relatedCareers", ["Project Manager", "Product Manager", "Agile Coach"]);
    record31.set("faqs", [{"question": "Do I need development experience?", "answer": "No, but understanding development helps"}, {"question": "What's the typical background?", "answer": "Project management, development, or any field"}, {"question": "How important is CSM certification?", "answer": "Very important for credibility"}, {"question": "What's the job market like?", "answer": "Strong demand with competitive salaries"}, {"question": "How much hands-on coding?", "answer": "None; focus is on facilitation and coaching"}, {"question": "What's the typical workflow?", "answer": "Facilitate \u2192 coach \u2192 remove blockers \u2192 improve process"}]);
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
    record32.set("description", "Create technical documentation and guides");
    record32.set("overview", "Technical Writers create clear, concise documentation for software products and systems.");
    record32.set("category", "Backend");
    record32.set("jobDemand", "Medium");
    record32.set("entrySalary", 60000);
    record32.set("midSalary", 85000);
    record32.set("seniorSalary", 120000);
    record32.set("topStates", [{"state": "California", "salaryMin": 75000, "salaryMax": 140000}, {"state": "New York", "salaryMin": 70000, "salaryMax": 130000}, {"state": "Washington", "salaryMin": 68000, "salaryMax": 125000}, {"state": "Texas", "salaryMin": 65000, "salaryMax": 115000}, {"state": "Colorado", "salaryMin": 62000, "salaryMax": 110000}]);
    record32.set("technicalSkills", [{"skill": "Technical Writing", "proficiency": "Expert"}, {"skill": "Markdown", "proficiency": "Advanced"}, {"skill": "Git", "proficiency": "Intermediate"}, {"skill": "API Documentation", "proficiency": "Advanced"}, {"skill": "Tools (Confluence, Docs)", "proficiency": "Advanced"}, {"skill": "HTML/CSS", "proficiency": "Intermediate"}, {"skill": "Information Architecture", "proficiency": "Advanced"}, {"skill": "Editing", "proficiency": "Expert"}]);
    record32.set("softSkills", ["Communication", "Attention to Detail", "Organization", "Empathy", "Collaboration"]);
    record32.set("tools", ["Confluence", "Google Docs", "Markdown", "Git", "Figma", "Swagger/OpenAPI", "ReadTheDocs", "Notion"]);
    record32.set("certifications", ["Society for Technical Communication (STC) Certification", "Technical Writing Bootcamp", "Google Technical Writing"]);
    record32.set("beginnerLevel", "{'skills': ['Writing fundamentals', 'Markdown', 'Documentation basics'], 'projects': ['User guides', 'API docs'], 'resources': ['Google Technical Writing', 'STC resources'], 'timeline': '2-4 months', 'salary': 60000}");
    record32.set("intermediateLevel", "{'skills': ['Advanced documentation', 'Information architecture', 'Git'], 'projects': ['Complex documentation', 'Developer guides'], 'resources': ['Advanced courses', 'STC certification'], 'timeline': '4-8 months', 'salary': 85000}");
    record32.set("advancedLevel", "{'skills': ['Documentation strategy', 'Leadership', 'Content management'], 'projects': ['Documentation systems', 'Team leadership'], 'resources': ['Advanced certifications', 'Industry networks'], 'timeline': '8+ months', 'salary': 120000}");
    record32.set("relatedCareers", ["Content Writer", "Developer Advocate", "Product Manager"]);
    record32.set("faqs", [{"question": "Do I need a technical background?", "answer": "No, but technical aptitude is helpful"}, {"question": "What's the typical background?", "answer": "Writing, journalism, or technical fields"}, {"question": "How important is Git knowledge?", "answer": "Increasingly important for modern technical writing"}, {"question": "What's the job market like?", "answer": "Good demand with competitive salaries"}, {"question": "How much interaction with developers?", "answer": "Significant; collaboration is key"}, {"question": "What's the typical workflow?", "answer": "Gather info \u2192 write \u2192 review \u2192 publish \u2192 maintain"}]);
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
    record33.set("name", "Developer Advocate");
    record33.set("slug", "developer-advocate");
    record33.set("description", "Advocate for developers and build community");
    record33.set("overview", "Developer Advocates represent developers' interests, create content, and build communities around products.");
    record33.set("category", "Backend");
    record33.set("jobDemand", "Medium");
    record33.set("entrySalary", 75000);
    record33.set("midSalary", 115000);
    record33.set("seniorSalary", 160000);
    record33.set("topStates", [{"state": "California", "salaryMin": 100000, "salaryMax": 185000}, {"state": "New York", "salaryMin": 95000, "salaryMax": 175000}, {"state": "Washington", "salaryMin": 90000, "salaryMax": 170000}, {"state": "Texas", "salaryMin": 85000, "salaryMax": 155000}, {"state": "Colorado", "salaryMin": 82000, "salaryMax": 150000}]);
    record33.set("technicalSkills", [{"skill": "Software Development", "proficiency": "Advanced"}, {"skill": "Public Speaking", "proficiency": "Advanced"}, {"skill": "Content Creation", "proficiency": "Advanced"}, {"skill": "Community Building", "proficiency": "Advanced"}, {"skill": "Technical Writing", "proficiency": "Advanced"}, {"skill": "Video Production", "proficiency": "Intermediate"}, {"skill": "Social Media", "proficiency": "Advanced"}, {"skill": "Presentation Skills", "proficiency": "Expert"}]);
    record33.set("softSkills", ["Communication", "Empathy", "Creativity", "Networking", "Passion for Community"]);
    record33.set("tools", ["GitHub", "YouTube", "Twitter", "Twitch", "Figma", "OBS", "Slack", "Discord"]);
    record33.set("certifications", ["Public Speaking Certification", "Content Marketing Certification", "Developer Relations Certification"]);
    record33.set("beginnerLevel", "{'skills': ['Development basics', 'Content creation', 'Community engagement'], 'projects': ['Blog posts', 'Social media'], 'resources': ['Developer Relations courses', 'Content creation'], 'timeline': '3-6 months', 'salary': 75000}");
    record33.set("intermediateLevel", "{'skills': ['Advanced content', 'Speaking', 'Community management'], 'projects': ['Conference talks', 'Community events'], 'resources': ['Speaking courses', 'Advanced content'], 'timeline': '6-12 months', 'salary': 115000}");
    record33.set("advancedLevel", "{'skills': ['Strategic advocacy', 'Leadership', 'Influence'], 'projects': ['Developer programs', 'Team leadership'], 'resources': ['Advanced courses', 'Industry networks'], 'timeline': '12+ months', 'salary': 160000}");
    record33.set("relatedCareers", ["Technical Writer", "Product Manager", "Marketing Manager"]);
    record33.set("faqs", [{"question": "Do I need development experience?", "answer": "Yes, typically 3-5 years required"}, {"question": "How important is public speaking?", "answer": "Very important; conference talks are common"}, {"question": "What's the typical background?", "answer": "Software development with passion for community"}, {"question": "How much travel is involved?", "answer": "Significant; conference attendance is common"}, {"question": "What's the job market like?", "answer": "Growing demand in tech companies"}, {"question": "What's the typical workflow?", "answer": "Create content \u2192 speak \u2192 engage community \u2192 gather feedback"}]);
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
    record34.set("name", "Solutions Engineer");
    record34.set("slug", "solutions-engineer");
    record34.set("description", "Provide technical solutions to customers");
    record34.set("overview", "Solutions Engineers work with customers to understand needs and implement technical solutions.");
    record34.set("category", "Backend");
    record34.set("jobDemand", "High");
    record34.set("entrySalary", 80000);
    record34.set("midSalary", 125000);
    record34.set("seniorSalary", 175000);
    record34.set("topStates", [{"state": "California", "salaryMin": 105000, "salaryMax": 190000}, {"state": "New York", "salaryMin": 100000, "salaryMax": 180000}, {"state": "Washington", "salaryMin": 95000, "salaryMax": 175000}, {"state": "Texas", "salaryMin": 90000, "salaryMax": 160000}, {"state": "Colorado", "salaryMin": 87000, "salaryMax": 155000}]);
    record34.set("technicalSkills", [{"skill": "Software Development", "proficiency": "Advanced"}, {"skill": "System Design", "proficiency": "Advanced"}, {"skill": "Cloud Platforms", "proficiency": "Advanced"}, {"skill": "APIs", "proficiency": "Advanced"}, {"skill": "Databases", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Expert"}, {"skill": "Communication", "proficiency": "Expert"}, {"skill": "Presentation", "proficiency": "Advanced"}]);
    record34.set("softSkills", ["Communication", "Problem Solving", "Empathy", "Collaboration", "Negotiation"]);
    record34.set("tools", ["AWS", "Azure", "GCP", "Git", "Docker", "Kubernetes", "JIRA", "Confluence"]);
    record34.set("certifications", ["AWS Solutions Architect", "Azure Solutions Architect", "Google Cloud Architect"]);
    record34.set("beginnerLevel", "{'skills': ['Development basics', 'System design', 'Communication'], 'projects': ['Customer solutions', 'Technical demos'], 'resources': ['AWS documentation', 'System Design Primer'], 'timeline': '3-6 months', 'salary': 80000}");
    record34.set("intermediateLevel", "{'skills': ['Advanced architecture', 'Customer management', 'Presentation'], 'projects': ['Complex solutions', 'Customer implementations'], 'resources': ['Advanced courses', 'Customer success'], 'timeline': '6-12 months', 'salary': 125000}");
    record34.set("advancedLevel", "{'skills': ['Strategic solutions', 'Leadership', 'Business acumen'], 'projects': ['Enterprise solutions', 'Team leadership'], 'resources': ['Advanced certifications', 'Industry networks'], 'timeline': '12+ months', 'salary': 175000}");
    record34.set("relatedCareers", ["Solutions Architect", "Cloud Architect", "Technical Product Manager"]);
    record34.set("faqs", [{"question": "Do I need development experience?", "answer": "Yes, typically 3-5 years required"}, {"question": "How much travel is involved?", "answer": "Significant; customer visits are common"}, {"question": "What's the typical background?", "answer": "Software development with customer-facing skills"}, {"question": "How important is communication?", "answer": "Critical; customer interaction is key"}, {"question": "What's the job market like?", "answer": "Strong demand in enterprise software"}, {"question": "What's the typical workflow?", "answer": "Understand needs \u2192 design solution \u2192 implement \u2192 support"}]);
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
    record35.set("name", "Site Reliability Engineer (SRE)");
    record35.set("slug", "site-reliability-engineer");
    record35.set("description", "Ensure system reliability and performance");
    record35.set("overview", "SREs apply software engineering principles to operations, ensuring systems are reliable and scalable.");
    record35.set("category", "DevOps");
    record35.set("jobDemand", "High");
    record35.set("entrySalary", 90000);
    record35.set("midSalary", 140000);
    record35.set("seniorSalary", 190000);
    record35.set("topStates", [{"state": "California", "salaryMin": 120000, "salaryMax": 210000}, {"state": "Washington", "salaryMin": 115000, "salaryMax": 200000}, {"state": "New York", "salaryMin": 110000, "salaryMax": 190000}, {"state": "Texas", "salaryMin": 100000, "salaryMax": 175000}, {"state": "Colorado", "salaryMin": 105000, "salaryMax": 185000}]);
    record35.set("technicalSkills", [{"skill": "Linux", "proficiency": "Expert"}, {"skill": "Kubernetes", "proficiency": "Expert"}, {"skill": "Monitoring", "proficiency": "Expert"}, {"skill": "Python", "proficiency": "Advanced"}, {"skill": "System Design", "proficiency": "Advanced"}, {"skill": "Incident Response", "proficiency": "Advanced"}, {"skill": "Automation", "proficiency": "Expert"}, {"skill": "Cloud Platforms", "proficiency": "Advanced"}]);
    record35.set("softSkills", ["Problem Solving", "Communication", "Collaboration", "Attention to Detail", "Continuous Learning"]);
    record35.set("tools", ["Kubernetes", "Prometheus", "Grafana", "ELK Stack", "Python", "Terraform", "Docker", "Jenkins"]);
    record35.set("certifications", ["Kubernetes Administrator (CKA)", "AWS Certified DevOps Engineer", "Google Cloud Professional"]);
    record35.set("beginnerLevel", "{'skills': ['Linux basics', 'Monitoring', 'Incident response'], 'projects': ['Monitoring setup', 'Runbooks'], 'resources': ['Linux Academy', 'Kubernetes documentation'], 'timeline': '6-9 months', 'salary': 90000}");
    record35.set("intermediateLevel", "{'skills': ['Advanced Kubernetes', 'Automation', 'Performance tuning'], 'projects': ['Reliability improvements', 'Automation'], 'resources': ['SRE book', 'Advanced courses'], 'timeline': '9-15 months', 'salary': 140000}");
    record35.set("advancedLevel", "{'skills': ['Advanced architecture', 'Leadership', 'Strategic planning'], 'projects': ['Large-scale systems', 'Technical mentoring'], 'resources': ['Advanced certifications', 'Industry conferences'], 'timeline': '15+ months', 'salary': 190000}");
    record35.set("relatedCareers", ["DevOps Engineer", "Cloud Architect", "Infrastructure Engineer"]);
    record35.set("faqs", [{"question": "What's the difference between SRE and DevOps?", "answer": "SREs focus on reliability; DevOps on deployment automation"}, {"question": "Do I need development experience?", "answer": "Yes, typically 3-5 years required"}, {"question": "How important is the SRE book?", "answer": "Very important; foundational reading for the role"}, {"question": "What's the job market like?", "answer": "Excellent demand with high salaries"}, {"question": "How much on-call work?", "answer": "Significant; on-call rotations are common"}, {"question": "What's the typical workflow?", "answer": "Monitor \u2192 detect \u2192 investigate \u2192 resolve \u2192 improve"}]);
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
    record36.set("overview", "Platform Engineers build internal platforms that enable developers to build and deploy applications efficiently.");
    record36.set("category", "DevOps");
    record36.set("jobDemand", "High");
    record36.set("entrySalary", 95000);
    record36.set("midSalary", 145000);
    record36.set("seniorSalary", 200000);
    record36.set("topStates", [{"state": "California", "salaryMin": 125000, "salaryMax": 220000}, {"state": "Washington", "salaryMin": 120000, "salaryMax": 210000}, {"state": "New York", "salaryMin": 115000, "salaryMax": 200000}, {"state": "Texas", "salaryMin": 105000, "salaryMax": 185000}, {"state": "Colorado", "salaryMin": 110000, "salaryMax": 195000}]);
    record36.set("technicalSkills", [{"skill": "Kubernetes", "proficiency": "Expert"}, {"skill": "Platform Design", "proficiency": "Expert"}, {"skill": "Python", "proficiency": "Advanced"}, {"skill": "Go", "proficiency": "Advanced"}, {"skill": "System Design", "proficiency": "Expert"}, {"skill": "DevOps", "proficiency": "Advanced"}, {"skill": "Cloud Platforms", "proficiency": "Advanced"}, {"skill": "Automation", "proficiency": "Expert"}]);
    record36.set("softSkills", ["Problem Solving", "Communication", "Collaboration", "Empathy for Developers", "Continuous Learning"]);
    record36.set("tools", ["Kubernetes", "Terraform", "Helm", "ArgoCD", "Python", "Go", "Docker", "Jenkins"]);
    record36.set("certifications", ["Kubernetes Administrator (CKA)", "AWS Certified DevOps Engineer", "Google Cloud Professional"]);
    record36.set("beginnerLevel", "{'skills': ['Kubernetes', 'Platform concepts', 'Developer experience'], 'projects': ['Platform components', 'Developer tools'], 'resources': ['Kubernetes documentation', 'Platform engineering courses'], 'timeline': '6-9 months', 'salary': 95000}");
    record36.set("intermediateLevel", "{'skills': ['Advanced platform design', 'Developer experience', 'Automation'], 'projects': ['Platform features', 'Developer workflows'], 'resources': ['Platform engineering books', 'Advanced courses'], 'timeline': '9-15 months', 'salary': 145000}");
    record36.set("advancedLevel", "{'skills': ['Strategic platform design', 'Leadership', 'Organizational impact'], 'projects': ['Platform strategy', 'Technical mentoring'], 'resources': ['Advanced courses', 'Industry conferences'], 'timeline': '15+ months', 'salary': 200000}");
    record36.set("relatedCareers", ["DevOps Engineer", "SRE", "Cloud Architect"]);
    record36.set("faqs", [{"question": "What's the difference between platform engineer and DevOps?", "answer": "Platform engineers build for developers; DevOps focuses on deployment"}, {"question": "Do I need development experience?", "answer": "Yes, understanding developer needs is critical"}, {"question": "How important is Kubernetes?", "answer": "Very important; most platforms run on Kubernetes"}, {"question": "What's the job market like?", "answer": "Growing demand with excellent salaries"}, {"question": "What's the typical workflow?", "answer": "Understand needs \u2192 design platform \u2192 build \u2192 iterate"}, {"question": "How much on-call work?", "answer": "Varies; platform stability is critical"}]);
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
    record37.set("name", "Infrastructure Engineer");
    record37.set("slug", "infrastructure-engineer");
    record37.set("description", "Design and manage infrastructure systems");
    record37.set("overview", "Infrastructure Engineers design, build, and maintain the infrastructure that supports applications.");
    record37.set("category", "DevOps");
    record37.set("jobDemand", "High");
    record37.set("entrySalary", 85000);
    record37.set("midSalary", 130000);
    record37.set("seniorSalary", 180000);
    record37.set("topStates", [{"state": "California", "salaryMin": 110000, "salaryMax": 200000}, {"state": "Washington", "salaryMin": 105000, "salaryMax": 190000}, {"state": "New York", "salaryMin": 100000, "salaryMax": 185000}, {"state": "Texas", "salaryMin": 95000, "salaryMax": 170000}, {"state": "Colorado", "salaryMin": 92000, "salaryMax": 175000}]);
    record37.set("technicalSkills", [{"skill": "Cloud Platforms", "proficiency": "Expert"}, {"skill": "Networking", "proficiency": "Advanced"}, {"skill": "Terraform", "proficiency": "Expert"}, {"skill": "Linux", "proficiency": "Advanced"}, {"skill": "Kubernetes", "proficiency": "Advanced"}, {"skill": "Security", "proficiency": "Advanced"}, {"skill": "Monitoring", "proficiency": "Advanced"}, {"skill": "Automation", "proficiency": "Expert"}]);
    record37.set("softSkills", ["Problem Solving", "Communication", "Collaboration", "Attention to Detail", "Continuous Learning"]);
    record37.set("tools", ["Terraform", "Kubernetes", "AWS", "Azure", "GCP", "Ansible", "Prometheus", "Grafana"]);
    record37.set("certifications", ["AWS Solutions Architect Professional", "Terraform Associate", "Kubernetes Administrator"]);
    record37.set("beginnerLevel", "{'skills': ['Cloud fundamentals', 'Terraform basics', 'Networking'], 'projects': ['Infrastructure setup', 'IaC basics'], 'resources': ['AWS documentation', 'Terraform tutorials'], 'timeline': '6-9 months', 'salary': 85000}");
    record37.set("intermediateLevel", "{'skills': ['Advanced Terraform', 'Multi-cloud', 'Security'], 'projects': ['Complex infrastructure', 'Multi-region setup'], 'resources': ['Terraform documentation', 'Advanced courses'], 'timeline': '9-15 months', 'salary': 130000}");
    record37.set("advancedLevel", "{'skills': ['Advanced architecture', 'Leadership', 'Strategic planning'], 'projects': ['Enterprise infrastructure', 'Technical mentoring'], 'resources': ['Advanced certifications', 'Industry conferences'], 'timeline': '15+ months', 'salary': 180000}");
    record37.set("relatedCareers", ["Cloud Architect", "DevOps Engineer", "SRE"]);
    record37.set("faqs", [{"question": "What's the difference between infrastructure engineer and cloud architect?", "answer": "Infrastructure engineers build; architects design"}, {"question": "How important is Terraform?", "answer": "Very important for infrastructure as code"}, {"question": "What's the learning curve?", "answer": "6-9 months for basics, 12-18 months for proficiency"}, {"question": "What's the job market like?", "answer": "Excellent demand with high salaries"}, {"question": "How much on-call work?", "answer": "Varies; infrastructure stability is critical"}, {"question": "What's the typical workflow?", "answer": "Design \u2192 build \u2192 test \u2192 deploy \u2192 monitor"}]);
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
    record38.set("name", "Blockchain Developer");
    record38.set("slug", "blockchain-developer");
    record38.set("description", "Build blockchain and cryptocurrency applications");
    record38.set("overview", "Blockchain Developers create decentralized applications and smart contracts using blockchain technology.");
    record38.set("category", "Backend");
    record38.set("jobDemand", "High");
    record38.set("entrySalary", 90000);
    record38.set("midSalary", 140000);
    record38.set("seniorSalary", 200000);
    record38.set("topStates", [{"state": "California", "salaryMin": 120000, "salaryMax": 220000}, {"state": "New York", "salaryMin": 115000, "salaryMax": 210000}, {"state": "Washington", "salaryMin": 110000, "salaryMax": 200000}, {"state": "Texas", "salaryMin": 100000, "salaryMax": 185000}, {"state": "Colorado", "salaryMin": 105000, "salaryMax": 195000}]);
    record38.set("technicalSkills", [{"skill": "Solidity", "proficiency": "Expert"}, {"skill": "Ethereum", "proficiency": "Advanced"}, {"skill": "Smart Contracts", "proficiency": "Expert"}, {"skill": "Web3.js", "proficiency": "Advanced"}, {"skill": "Python", "proficiency": "Advanced"}, {"skill": "Cryptography", "proficiency": "Advanced"}, {"skill": "Rust", "proficiency": "Intermediate"}, {"skill": "System Design", "proficiency": "Advanced"}]);
    record38.set("softSkills", ["Problem Solving", "Communication", "Continuous Learning", "Attention to Detail", "Creativity"]);
    record38.set("tools", ["Solidity", "Ethereum", "Hardhat", "Truffle", "Web3.js", "MetaMask", "Remix", "Ganache"]);
    record38.set("certifications", ["Ethereum Developer Certification", "Blockchain Fundamentals", "Smart Contract Security"]);
    record38.set("beginnerLevel", "{'skills': ['Blockchain basics', 'Solidity fundamentals', 'Smart contracts'], 'projects': ['Simple contracts', 'Token creation'], 'resources': ['CryptoZombies', 'Ethereum documentation'], 'timeline': '6-9 months', 'salary': 90000}");
    record38.set("intermediateLevel", "{'skills': ['Advanced Solidity', 'DApp development', 'Security'], 'projects': ['Complex contracts', 'DApps'], 'resources': ['Hardhat documentation', 'Advanced courses'], 'timeline': '9-15 months', 'salary': 140000}");
    record38.set("advancedLevel", "{'skills': ['Advanced security', 'Protocol design', 'Leadership'], 'projects': ['Protocol development', 'Technical mentoring'], 'resources': ['Research papers', 'Industry conferences'], 'timeline': '15+ months', 'salary': 200000}");
    record38.set("relatedCareers", ["Smart Contract Developer", "Cryptocurrency Developer", "Software Engineer"]);
    record38.set("faqs", [{"question": "Do I need cryptocurrency knowledge?", "answer": "Helpful but not required; can be learned"}, {"question": "What's the learning curve?", "answer": "6-9 months for basics, 12-18 months for proficiency"}, {"question": "How important is security?", "answer": "Critical; smart contract bugs can be costly"}, {"question": "What's the job market like?", "answer": "Growing demand with excellent salaries"}, {"question": "What blockchains should I learn?", "answer": "Ethereum is most popular; Solana and Polygon also valuable"}, {"question": "What's the typical workflow?", "answer": "Design \u2192 develop \u2192 test \u2192 audit \u2192 deploy"}]);
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
    record39.set("name", "Game Developer");
    record39.set("slug", "game-developer");
    record39.set("description", "Create video games and interactive experiences");
    record39.set("overview", "Game Developers design and build video games using game engines and programming languages.");
    record39.set("category", "Frontend");
    record39.set("jobDemand", "High");
    record39.set("entrySalary", 70000);
    record39.set("midSalary", 110000);
    record39.set("seniorSalary", 160000);
    record39.set("topStates", [{"state": "California", "salaryMin": 95000, "salaryMax": 185000}, {"state": "Washington", "salaryMin": 90000, "salaryMax": 175000}, {"state": "Texas", "salaryMin": 80000, "salaryMax": 155000}, {"state": "New York", "salaryMin": 85000, "salaryMax": 165000}, {"state": "Colorado", "salaryMin": 78000, "salaryMax": 150000}]);
    record39.set("technicalSkills", [{"skill": "C#", "proficiency": "Expert"}, {"skill": "Unity", "proficiency": "Expert"}, {"skill": "Unreal Engine", "proficiency": "Advanced"}, {"skill": "Game Design", "proficiency": "Advanced"}, {"skill": "Physics", "proficiency": "Advanced"}, {"skill": "Graphics", "proficiency": "Intermediate"}, {"skill": "Networking", "proficiency": "Intermediate"}, {"skill": "Problem Solving", "proficiency": "Expert"}]);
    record39.set("softSkills", ["Creativity", "Problem Solving", "Collaboration", "Attention to Detail", "Passion for Games"]);
    record39.set("tools", ["Unity", "Unreal Engine", "C#", "C++", "Blender", "Visual Studio", "Git", "Perforce"]);
    record39.set("certifications", ["Unity Certified Developer", "Unreal Engine Certification", "Game Development Bootcamp"]);
    record39.set("beginnerLevel", "{'skills': ['Game design basics', 'Unity basics', 'C# fundamentals'], 'projects': ['Simple games', 'Game mechanics'], 'resources': ['Unity Learn', 'Brackeys'], 'timeline': '3-6 months', 'salary': 70000}");
    record39.set("intermediateLevel", "{'skills': ['Advanced Unity', 'Game systems', 'Optimization'], 'projects': ['Complete games', 'Multiplayer'], 'resources': ['Game development courses', 'Game jams'], 'timeline': '6-12 months', 'salary': 110000}");
    record39.set("advancedLevel", "{'skills': ['Advanced systems', 'Leadership', 'Game direction'], 'projects': ['Large games', 'Team leadership'], 'resources': ['Advanced courses', 'Industry conferences'], 'timeline': '12+ months', 'salary': 160000}");
    record39.set("relatedCareers", ["Graphics Programmer", "Game Designer", "AR/VR Developer"]);
    record39.set("faqs", [{"question": "Should I learn Unity or Unreal?", "answer": "Unity is more beginner-friendly; Unreal is more powerful"}, {"question": "Do I need art skills?", "answer": "No, but collaboration with artists is important"}, {"question": "What's the learning curve?", "answer": "3-6 months for basics, 12+ months for proficiency"}, {"question": "What's the job market like?", "answer": "Strong demand with competitive salaries"}, {"question": "How important is game design?", "answer": "Very important; understanding game mechanics is critical"}, {"question": "What's the typical workflow?", "answer": "Design \u2192 prototype \u2192 develop \u2192 test \u2192 polish"}]);
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
    record40.set("name", "AR/VR Developer");
    record40.set("slug", "ar-vr-developer");
    record40.set("description", "Build augmented and virtual reality applications");
    record40.set("overview", "AR/VR Developers create immersive experiences using augmented and virtual reality technologies.");
    record40.set("category", "Frontend");
    record40.set("jobDemand", "High");
    record40.set("entrySalary", 80000);
    record40.set("midSalary", 125000);
    record40.set("seniorSalary", 180000);
    record40.set("topStates", [{"state": "California", "salaryMin": 105000, "salaryMax": 195000}, {"state": "Washington", "salaryMin": 100000, "salaryMax": 185000}, {"state": "New York", "salaryMin": 95000, "salaryMax": 175000}, {"state": "Texas", "salaryMin": 90000, "salaryMax": 165000}, {"state": "Colorado", "salaryMin": 87000, "salaryMax": 160000}]);
    record40.set("technicalSkills", [{"skill": "Unity", "proficiency": "Expert"}, {"skill": "C#", "proficiency": "Advanced"}, {"skill": "AR/VR Frameworks", "proficiency": "Expert"}, {"skill": "3D Graphics", "proficiency": "Advanced"}, {"skill": "Physics", "proficiency": "Advanced"}, {"skill": "Spatial Computing", "proficiency": "Advanced"}, {"skill": "Networking", "proficiency": "Intermediate"}, {"skill": "Problem Solving", "proficiency": "Expert"}]);
    record40.set("softSkills", ["Creativity", "Problem Solving", "Collaboration", "Attention to Detail", "Innovation"]);
    record40.set("tools", ["Unity", "Unreal Engine", "ARKit", "ARCore", "C#", "Blender", "Visual Studio", "Git"]);
    record40.set("certifications", ["Unity Certified Developer", "AR/VR Development Bootcamp", "Spatial Computing Certification"]);
    record40.set("beginnerLevel", "{'skills': ['AR/VR basics', 'Unity basics', '3D concepts'], 'projects': ['Simple AR apps', 'VR experiences'], 'resources': ['Unity Learn', 'ARKit/ARCore docs'], 'timeline': '3-6 months', 'salary': 80000}");
    record40.set("intermediateLevel", "{'skills': ['Advanced AR/VR', '3D graphics', 'Optimization'], 'projects': ['Complex experiences', 'Multiplayer'], 'resources': ['Advanced courses', 'Game jams'], 'timeline': '6-12 months', 'salary': 125000}");
    record40.set("advancedLevel", "{'skills': ['Advanced systems', 'Leadership', 'Innovation'], 'projects': ['Large projects', 'Team leadership'], 'resources': ['Advanced courses', 'Industry conferences'], 'timeline': '12+ months', 'salary': 180000}");
    record40.set("relatedCareers", ["Game Developer", "Graphics Programmer", "3D Developer"]);
    record40.set("faqs", [{"question": "What's the difference between AR and VR?", "answer": "AR overlays digital on real world; VR is fully immersive"}, {"question": "What devices should I target?", "answer": "Start with mobile (ARKit/ARCore), then headsets"}, {"question": "What's the learning curve?", "answer": "3-6 months for basics, 12+ months for proficiency"}, {"question": "What's the job market like?", "answer": "Growing demand with excellent salaries"}, {"question": "How important is 3D graphics?", "answer": "Very important for immersive experiences"}, {"question": "What's the typical workflow?", "answer": "Design \u2192 prototype \u2192 develop \u2192 test \u2192 optimize"}]);
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
    record41.set("name", "Embedded Systems Engineer");
    record41.set("slug", "embedded-systems-engineer");
    record41.set("description", "Develop software for embedded devices");
    record41.set("overview", "Embedded Systems Engineers develop software for microcontrollers and embedded devices.");
    record41.set("category", "Backend");
    record41.set("jobDemand", "Medium");
    record41.set("entrySalary", 75000);
    record41.set("midSalary", 115000);
    record41.set("seniorSalary", 160000);
    record41.set("topStates", [{"state": "California", "salaryMin": 100000, "salaryMax": 185000}, {"state": "Texas", "salaryMin": 85000, "salaryMax": 160000}, {"state": "Washington", "salaryMin": 90000, "salaryMax": 170000}, {"state": "Massachusetts", "salaryMin": 88000, "salaryMax": 165000}, {"state": "Colorado", "salaryMin": 82000, "salaryMax": 155000}]);
    record41.set("technicalSkills", [{"skill": "C", "proficiency": "Expert"}, {"skill": "C++", "proficiency": "Advanced"}, {"skill": "Embedded Systems", "proficiency": "Expert"}, {"skill": "Microcontrollers", "proficiency": "Advanced"}, {"skill": "Real-time Systems", "proficiency": "Advanced"}, {"skill": "Hardware", "proficiency": "Advanced"}, {"skill": "Assembly", "proficiency": "Intermediate"}, {"skill": "Debugging", "proficiency": "Expert"}]);
    record41.set("softSkills", ["Problem Solving", "Attention to Detail", "Communication", "Collaboration", "Continuous Learning"]);
    record41.set("tools", ["C", "C++", "ARM", "RTOS", "Oscilloscope", "Logic Analyzer", "Git", "JIRA"]);
    record41.set("certifications", ["Embedded Systems Certification", "ARM Cortex Certification", "Real-time Systems Certification"]);
    record41.set("beginnerLevel", "{'skills': ['C fundamentals', 'Microcontroller basics', 'Hardware basics'], 'projects': ['Simple firmware', 'LED control'], 'resources': ['Arduino tutorials', 'Embedded systems courses'], 'timeline': '6-9 months', 'salary': 75000}");
    record41.set("intermediateLevel", "{'skills': ['Advanced C', 'RTOS', 'Hardware integration'], 'projects': ['Complex firmware', 'Device drivers'], 'resources': ['Advanced courses', 'Hardware documentation'], 'timeline': '9-15 months', 'salary': 115000}");
    record41.set("advancedLevel", "{'skills': ['Advanced systems', 'Leadership', 'Architecture'], 'projects': ['Complex systems', 'Technical mentoring'], 'resources': ['Advanced certifications', 'Industry conferences'], 'timeline': '15+ months', 'salary': 160000}");
    record41.set("relatedCareers", ["Firmware Engineer", "Hardware Engineer", "IoT Engineer"]);
    record41.set("faqs", [{"question": "Do I need hardware knowledge?", "answer": "Helpful but can be learned on the job"}, {"question": "What's the learning curve?", "answer": "6-9 months for basics, 12-18 months for proficiency"}, {"question": "How important is C?", "answer": "Critical; most embedded systems use C"}, {"question": "What's the job market like?", "answer": "Good demand with competitive salaries"}, {"question": "How much hands-on work?", "answer": "Significant; hardware interaction is common"}, {"question": "What's the typical workflow?", "answer": "Design \u2192 develop \u2192 test \u2192 debug \u2192 deploy"}]);
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
    record42.set("name", "IoT Engineer");
    record42.set("slug", "iot-engineer");
    record42.set("description", "Build Internet of Things applications");
    record42.set("overview", "IoT Engineers develop applications that connect and manage IoT devices and sensors.");
    record42.set("category", "Backend");
    record42.set("jobDemand", "High");
    record42.set("entrySalary", 80000);
    record42.set("midSalary", 125000);
    record42.set("seniorSalary", 175000);
    record42.set("topStates", [{"state": "California", "salaryMin": 105000, "salaryMax": 195000}, {"state": "Texas", "salaryMin": 95000, "salaryMax": 175000}, {"state": "Washington", "salaryMin": 100000, "salaryMax": 185000}, {"state": "Massachusetts", "salaryMin": 98000, "salaryMax": 180000}, {"state": "Colorado", "salaryMin": 92000, "salaryMax": 170000}]);
    record42.set("technicalSkills", [{"skill": "Python", "proficiency": "Expert"}, {"skill": "IoT Platforms", "proficiency": "Expert"}, {"skill": "Embedded Systems", "proficiency": "Advanced"}, {"skill": "Cloud Platforms", "proficiency": "Advanced"}, {"skill": "Networking", "proficiency": "Advanced"}, {"skill": "MQTT", "proficiency": "Advanced"}, {"skill": "Sensors", "proficiency": "Advanced"}, {"skill": "Data Processing", "proficiency": "Advanced"}]);
    record42.set("softSkills", ["Problem Solving", "Communication", "Collaboration", "Attention to Detail", "Continuous Learning"]);
    record42.set("tools", ["Python", "AWS IoT", "Azure IoT", "MQTT", "Raspberry Pi", "Arduino", "Node-RED", "InfluxDB"]);
    record42.set("certifications", ["AWS Certified IoT Specialist", "Azure IoT Developer", "IoT Fundamentals"]);
    record42.set("beginnerLevel", "{'skills': ['IoT basics', 'Python', 'Sensors'], 'projects': ['Simple IoT devices', 'Data collection'], 'resources': ['AWS IoT documentation', 'IoT courses'], 'timeline': '3-6 months', 'salary': 80000}");
    record42.set("intermediateLevel", "{'skills': ['Advanced IoT', 'Cloud integration', 'Data processing'], 'projects': ['Complex systems', 'Real-time monitoring'], 'resources': ['Advanced courses', 'IoT platforms'], 'timeline': '6-12 months', 'salary': 125000}");
    record42.set("advancedLevel", "{'skills': ['Advanced architecture', 'Leadership', 'Strategic planning'], 'projects': ['Enterprise IoT', 'Technical mentoring'], 'resources': ['Advanced certifications', 'Industry conferences'], 'timeline': '12+ months', 'salary': 175000}");
    record42.set("relatedCareers", ["Embedded Systems Engineer", "Data Engineer", "Cloud Architect"]);
    record42.set("faqs", [{"question": "What's the difference between IoT and embedded systems?", "answer": "IoT focuses on connected devices; embedded on firmware"}, {"question": "What platforms should I learn?", "answer": "AWS IoT and Azure IoT are most popular"}, {"question": "What's the learning curve?", "answer": "3-6 months for basics, 12+ months for proficiency"}, {"question": "What's the job market like?", "answer": "Growing demand with excellent salaries"}, {"question": "How important is cloud knowledge?", "answer": "Very important for modern IoT applications"}, {"question": "What's the typical workflow?", "answer": "Design \u2192 develop \u2192 test \u2192 deploy \u2192 monitor"}]);
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
    record43.set("name", "Robotics Engineer");
    record43.set("slug", "robotics-engineer");
    record43.set("description", "Design and build robotic systems");
    record43.set("overview", "Robotics Engineers develop software and systems for autonomous robots and robotic applications.");
    record43.set("category", "Backend");
    record43.set("jobDemand", "Medium");
    record43.set("entrySalary", 85000);
    record43.set("midSalary", 130000);
    record43.set("seniorSalary", 185000);
    record43.set("topStates", [{"state": "California", "salaryMin": 110000, "salaryMax": 200000}, {"state": "Texas", "salaryMin": 100000, "salaryMax": 185000}, {"state": "Washington", "salaryMin": 105000, "salaryMax": 195000}, {"state": "Massachusetts", "salaryMin": 103000, "salaryMax": 190000}, {"state": "Colorado", "salaryMin": 97000, "salaryMax": 180000}]);
    record43.set("technicalSkills", [{"skill": "Python", "proficiency": "Expert"}, {"skill": "C++", "proficiency": "Advanced"}, {"skill": "ROS", "proficiency": "Expert"}, {"skill": "Control Systems", "proficiency": "Advanced"}, {"skill": "Computer Vision", "proficiency": "Advanced"}, {"skill": "Kinematics", "proficiency": "Advanced"}, {"skill": "Simulation", "proficiency": "Advanced"}, {"skill": "Machine Learning", "proficiency": "Intermediate"}]);
    record43.set("softSkills", ["Problem Solving", "Communication", "Collaboration", "Attention to Detail", "Creativity"]);
    record43.set("tools", ["ROS", "Python", "C++", "Gazebo", "OpenCV", "TensorFlow", "Git", "MATLAB"]);
    record43.set("certifications", ["ROS Certification", "Robotics Fundamentals", "Control Systems Certification"]);
    record43.set("beginnerLevel", "{'skills': ['Robotics basics', 'Python', 'ROS basics'], 'projects': ['Simple robots', 'Simulation'], 'resources': ['ROS tutorials', 'Robotics courses'], 'timeline': '6-9 months', 'salary': 85000}");
    record43.set("intermediateLevel", "{'skills': ['Advanced ROS', 'Control systems', 'Computer vision'], 'projects': ['Complex robots', 'Autonomous systems'], 'resources': ['Advanced courses', 'ROS documentation'], 'timeline': '9-15 months', 'salary': 130000}");
    record43.set("advancedLevel", "{'skills': ['Advanced systems', 'Leadership', 'Research'], 'projects': ['Research projects', 'Technical mentoring'], 'resources': ['Research papers', 'Industry conferences'], 'timeline': '15+ months', 'salary': 185000}");
    record43.set("relatedCareers", ["Embedded Systems Engineer", "Machine Learning Engineer", "Control Systems Engineer"]);
    record43.set("faqs", [{"question": "Do I need a robotics degree?", "answer": "No, but physics and math are helpful"}, {"question": "What's the learning curve?", "answer": "6-9 months for basics, 12-18 months for proficiency"}, {"question": "How important is ROS?", "answer": "Very important; industry standard for robotics"}, {"question": "What's the job market like?", "answer": "Growing demand with excellent salaries"}, {"question": "How much hands-on work?", "answer": "Significant; hardware interaction is common"}, {"question": "What's the typical workflow?", "answer": "Design \u2192 simulate \u2192 build \u2192 test \u2192 deploy"}]);
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
    record44.set("name", "Hardware Engineer");
    record44.set("slug", "hardware-engineer");
    record44.set("description", "Design and develop hardware systems");
    record44.set("overview", "Hardware Engineers design and develop physical hardware components and systems.");
    record44.set("category", "Backend");
    record44.set("jobDemand", "Medium");
    record44.set("entrySalary", 80000);
    record44.set("midSalary", 125000);
    record44.set("seniorSalary", 175000);
    record44.set("topStates", [{"state": "California", "salaryMin": 105000, "salaryMax": 195000}, {"state": "Texas", "salaryMin": 95000, "salaryMax": 175000}, {"state": "Washington", "salaryMin": 100000, "salaryMax": 185000}, {"state": "Massachusetts", "salaryMin": 98000, "salaryMax": 180000}, {"state": "Colorado", "salaryMin": 92000, "salaryMax": 170000}]);
    record44.set("technicalSkills", [{"skill": "Circuit Design", "proficiency": "Expert"}, {"skill": "PCB Design", "proficiency": "Expert"}, {"skill": "VHDL/Verilog", "proficiency": "Advanced"}, {"skill": "Microcontrollers", "proficiency": "Advanced"}, {"skill": "Simulation", "proficiency": "Advanced"}, {"skill": "Testing", "proficiency": "Advanced"}, {"skill": "CAD", "proficiency": "Advanced"}, {"skill": "Power Electronics", "proficiency": "Intermediate"}]);
    record44.set("softSkills", ["Problem Solving", "Attention to Detail", "Communication", "Collaboration", "Continuous Learning"]);
    record44.set("tools", ["EAGLE", "Altium", "VHDL", "Verilog", "SPICE", "Oscilloscope", "Logic Analyzer", "Git"]);
    record44.set("certifications", ["PCB Design Certification", "FPGA Certification", "Electronics Certification"]);
    record44.set("beginnerLevel", "{'skills': ['Circuit basics', 'PCB design basics', 'CAD'], 'projects': ['Simple circuits', 'PCB layouts'], 'resources': ['Electronics tutorials', 'CAD courses'], 'timeline': '6-9 months', 'salary': 80000}");
    record44.set("intermediateLevel", "{'skills': ['Advanced PCB design', 'FPGA', 'Testing'], 'projects': ['Complex circuits', 'FPGA designs'], 'resources': ['Advanced courses', 'Hardware documentation'], 'timeline': '9-15 months', 'salary': 125000}");
    record44.set("advancedLevel", "{'skills': ['Advanced systems', 'Leadership', 'Architecture'], 'projects': ['Complex systems', 'Technical mentoring'], 'resources': ['Advanced certifications', 'Industry conferences'], 'timeline': '15+ months', 'salary': 175000}");
    record44.set("relatedCareers", ["Firmware Engineer", "Embedded Systems Engineer", "Electrical Engineer"]);
    record44.set("faqs", [{"question": "Do I need an EE degree?", "answer": "Helpful but not required; can be learned"}, {"question": "What's the learning curve?", "answer": "6-9 months for basics, 12-18 months for proficiency"}, {"question": "How important is PCB design?", "answer": "Very important for hardware engineers"}, {"question": "What's the job market like?", "answer": "Good demand with competitive salaries"}, {"question": "How much hands-on work?", "answer": "Significant; prototyping and testing are common"}, {"question": "What's the typical workflow?", "answer": "Design \u2192 simulate \u2192 prototype \u2192 test \u2192 manufacture"}]);
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
    record45.set("name", "Firmware Engineer");
    record45.set("slug", "firmware-engineer");
    record45.set("description", "Develop firmware for hardware devices");
    record45.set("overview", "Firmware Engineers develop low-level software that controls hardware devices.");
    record45.set("category", "Backend");
    record45.set("jobDemand", "Medium");
    record45.set("entrySalary", 80000);
    record45.set("midSalary", 125000);
    record45.set("seniorSalary", 175000);
    record45.set("topStates", [{"state": "California", "salaryMin": 105000, "salaryMax": 195000}, {"state": "Texas", "salaryMin": 95000, "salaryMax": 175000}, {"state": "Washington", "salaryMin": 100000, "salaryMax": 185000}, {"state": "Massachusetts", "salaryMin": 98000, "salaryMax": 180000}, {"state": "Colorado", "salaryMin": 92000, "salaryMax": 170000}]);
    record45.set("technicalSkills", [{"skill": "C", "proficiency": "Expert"}, {"skill": "Assembly", "proficiency": "Advanced"}, {"skill": "Embedded Systems", "proficiency": "Expert"}, {"skill": "Microcontrollers", "proficiency": "Advanced"}, {"skill": "Real-time Systems", "proficiency": "Advanced"}, {"skill": "Debugging", "proficiency": "Expert"}, {"skill": "Hardware", "proficiency": "Advanced"}, {"skill": "Testing", "proficiency": "Advanced"}]);
    record45.set("softSkills", ["Problem Solving", "Attention to Detail", "Communication", "Collaboration", "Continuous Learning"]);
    record45.set("tools", ["C", "Assembly", "ARM", "RTOS", "Oscilloscope", "Logic Analyzer", "Git", "JIRA"]);
    record45.set("certifications", ["Embedded Systems Certification", "ARM Cortex Certification", "Real-time Systems Certification"]);
    record45.set("beginnerLevel", "{'skills': ['C fundamentals', 'Microcontroller basics', 'Debugging'], 'projects': ['Simple firmware', 'Device control'], 'resources': ['Embedded systems courses', 'Microcontroller docs'], 'timeline': '6-9 months', 'salary': 80000}");
    record45.set("intermediateLevel", "{'skills': ['Advanced C', 'RTOS', 'Optimization'], 'projects': ['Complex firmware', 'Device drivers'], 'resources': ['Advanced courses', 'Hardware documentation'], 'timeline': '9-15 months', 'salary': 125000}");
    record45.set("advancedLevel", "{'skills': ['Advanced systems', 'Leadership', 'Architecture'], 'projects': ['Complex systems', 'Technical mentoring'], 'resources': ['Advanced certifications', 'Industry conferences'], 'timeline': '15+ months', 'salary': 175000}");
    record45.set("relatedCareers", ["Embedded Systems Engineer", "Hardware Engineer", "IoT Engineer"]);
    record45.set("faqs", [{"question": "What's the difference between firmware and embedded systems?", "answer": "Firmware is low-level; embedded systems is broader"}, {"question": "How important is Assembly?", "answer": "Important for optimization and debugging"}, {"question": "What's the learning curve?", "answer": "6-9 months for basics, 12-18 months for proficiency"}, {"question": "What's the job market like?", "answer": "Good demand with competitive salaries"}, {"question": "How much hands-on work?", "answer": "Significant; hardware interaction is common"}, {"question": "What's the typical workflow?", "answer": "Design \u2192 develop \u2192 test \u2192 debug \u2192 deploy"}]);
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
    record46.set("name", "Technical Product Manager");
    record46.set("slug", "technical-product-manager");
    record46.set("description", "Lead product strategy with technical expertise");
    record46.set("overview", "Technical Product Managers combine product management with deep technical knowledge to drive product decisions.");
    record46.set("category", "Management");
    record46.set("jobDemand", "High");
    record46.set("entrySalary", 90000);
    record46.set("midSalary", 140000);
    record46.set("seniorSalary", 195000);
    record46.set("topStates", [{"state": "California", "salaryMin": 120000, "salaryMax": 220000}, {"state": "New York", "salaryMin": 110000, "salaryMax": 210000}, {"state": "Washington", "salaryMin": 105000, "salaryMax": 200000}, {"state": "Massachusetts", "salaryMin": 100000, "salaryMax": 190000}, {"state": "Texas", "salaryMin": 95000, "salaryMax": 180000}]);
    record46.set("technicalSkills", [{"skill": "Product Strategy", "proficiency": "Expert"}, {"skill": "System Design", "proficiency": "Advanced"}, {"skill": "Data Analysis", "proficiency": "Advanced"}, {"skill": "SQL", "proficiency": "Intermediate"}, {"skill": "APIs", "proficiency": "Advanced"}, {"skill": "Metrics", "proficiency": "Advanced"}, {"skill": "Technical Writing", "proficiency": "Advanced"}, {"skill": "Roadmapping", "proficiency": "Expert"}]);
    record46.set("softSkills", ["Leadership", "Communication", "Strategic Thinking", "Problem Solving", "Stakeholder Management"]);
    record46.set("tools", ["JIRA", "Figma", "Mixpanel", "Amplitude", "Looker", "Notion", "Asana", "Miro"]);
    record46.set("certifications", ["Reforge Product Management", "Pragmatic Marketing Certification", "Google Product Management"]);
    record46.set("beginnerLevel", "{'skills': ['Product thinking', 'Technical basics', 'Roadmapping'], 'projects': ['Feature prioritization', 'Technical specs'], 'resources': ['Reforge', 'Inspired by Marty Cagan'], 'timeline': '3-6 months', 'salary': 90000}");
    record46.set("intermediateLevel", "{'skills': ['Advanced product strategy', 'System design', 'Metrics'], 'projects': ['Product launches', 'Technical strategy'], 'resources': ['Cracking the PM Interview', 'Advanced courses'], 'timeline': '6-12 months', 'salary': 140000}");
    record46.set("advancedLevel", "{'skills': ['Strategic vision', 'Leadership', 'Business acumen'], 'projects': ['Portfolio management', 'Company strategy'], 'resources': ['Executive coaching', 'Industry networks'], 'timeline': '12+ months', 'salary': 195000}");
    record46.set("relatedCareers", ["Product Manager", "Solutions Architect", "Engineering Manager"]);
    record46.set("faqs", [{"question": "Do I need development experience?", "answer": "Yes, typically 3-5 years required"}, {"question": "What's the typical background?", "answer": "Software engineering with product interest"}, {"question": "How important is system design?", "answer": "Critical for technical credibility"}, {"question": "What's the job market like?", "answer": "Strong demand with excellent compensation"}, {"question": "How much hands-on coding?", "answer": "Minimal; focus is on strategy"}, {"question": "What's the typical workflow?", "answer": "Understand needs \u2192 design solution \u2192 drive execution"}]);
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
    record47.set("name", "Engineering Manager");
    record47.set("slug", "engineering-manager");
    record47.set("description", "Lead engineering teams and drive technical excellence");
    record47.set("overview", "Engineering Managers oversee engineering teams, manage projects, and drive technical excellence.");
    record47.set("category", "Management");
    record47.set("jobDemand", "High");
    record47.set("entrySalary", 100000);
    record47.set("midSalary", 155000);
    record47.set("seniorSalary", 220000);
    record47.set("topStates", [{"state": "California", "salaryMin": 135000, "salaryMax": 250000}, {"state": "New York", "salaryMin": 125000, "salaryMax": 240000}, {"state": "Washington", "salaryMin": 120000, "salaryMax": 230000}, {"state": "Massachusetts", "salaryMin": 115000, "salaryMax": 220000}, {"state": "Texas", "salaryMin": 110000, "salaryMax": 210000}]);
    record47.set("technicalSkills", [{"skill": "Software Development", "proficiency": "Advanced"}, {"skill": "System Design", "proficiency": "Advanced"}, {"skill": "Leadership", "proficiency": "Expert"}, {"skill": "Project Management", "proficiency": "Advanced"}, {"skill": "Mentoring", "proficiency": "Expert"}, {"skill": "Communication", "proficiency": "Expert"}, {"skill": "Strategic Planning", "proficiency": "Advanced"}, {"skill": "Hiring", "proficiency": "Advanced"}]);
    record47.set("softSkills", ["Leadership", "Communication", "Coaching", "Problem Solving", "Strategic Thinking"]);
    record47.set("tools", ["JIRA", "Confluence", "GitHub", "Slack", "Zoom", "Excel", "Tableau", "Asana"]);
    record47.set("certifications", ["Leadership Certification", "Project Management Professional (PMP)", "Coaching Certification"]);
    record47.set("beginnerLevel", "{'skills': ['Team leadership', 'Project management', 'Mentoring'], 'projects': ['Team management', 'Project delivery'], 'resources': ['Leadership courses', 'Coaching training'], 'timeline': '3-6 months', 'salary': 100000}");
    record47.set("intermediateLevel", "{'skills': ['Advanced leadership', 'Strategic planning', 'Organizational skills'], 'projects': ['Team growth', 'Strategic initiatives'], 'resources': ['Executive coaching', 'Advanced courses'], 'timeline': '6-12 months', 'salary': 155000}");
    record47.set("advancedLevel", "{'skills': ['Executive leadership', 'Organizational strategy', 'Vision'], 'projects': ['Organization building', 'Executive leadership'], 'resources': ['Executive coaching', 'Industry networks'], 'timeline': '12+ months', 'salary': 220000}");
    record47.set("relatedCareers", ["VP of Engineering", "CTO", "Technical Product Manager"]);
    record47.set("faqs", [{"question": "Do I need development experience?", "answer": "Yes, typically 5-7 years required"}, {"question": "What's the typical background?", "answer": "Senior software engineer transitioning to management"}, {"question": "How important is mentoring?", "answer": "Critical; developing people is key responsibility"}, {"question": "What's the job market like?", "answer": "Strong demand with excellent compensation"}, {"question": "How much hands-on coding?", "answer": "Minimal; focus is on team and strategy"}, {"question": "What's the typical workflow?", "answer": "Hire \u2192 develop \u2192 plan \u2192 execute \u2192 review"}]);
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
    record48.set("name", "VP of Engineering");
    record48.set("slug", "vp-of-engineering");
    record48.set("description", "Lead engineering organization and strategy");
    record48.set("overview", "VPs of Engineering oversee the entire engineering organization and drive technical strategy.");
    record48.set("category", "Management");
    record48.set("jobDemand", "High");
    record48.set("entrySalary", 150000);
    record48.set("midSalary", 220000);
    record48.set("seniorSalary", 320000);
    record48.set("topStates", [{"state": "California", "salaryMin": 200000, "salaryMax": 380000}, {"state": "New York", "salaryMin": 180000, "salaryMax": 360000}, {"state": "Washington", "salaryMin": 175000, "salaryMax": 350000}, {"state": "Massachusetts", "salaryMin": 170000, "salaryMax": 340000}, {"state": "Texas", "salaryMin": 160000, "salaryMax": 320000}]);
    record48.set("technicalSkills", [{"skill": "Strategic Leadership", "proficiency": "Expert"}, {"skill": "Organizational Development", "proficiency": "Expert"}, {"skill": "System Design", "proficiency": "Advanced"}, {"skill": "Business Acumen", "proficiency": "Expert"}, {"skill": "Financial Management", "proficiency": "Advanced"}, {"skill": "Communication", "proficiency": "Expert"}, {"skill": "Hiring", "proficiency": "Expert"}, {"skill": "Mentoring", "proficiency": "Expert"}]);
    record48.set("softSkills", ["Leadership", "Strategic Thinking", "Communication", "Negotiation", "Vision"]);
    record48.set("tools", ["JIRA", "Confluence", "GitHub", "Slack", "Zoom", "Excel", "Tableau", "Salesforce"]);
    record48.set("certifications", ["Executive Leadership Certification", "MBA (preferred)", "Coaching Certification"]);
    record48.set("beginnerLevel", "{'skills': ['Organization leadership', 'Strategic planning', 'Hiring'], 'projects': ['Organization building', 'Strategic initiatives'], 'resources': ['Executive coaching', 'Leadership courses'], 'timeline': '6-12 months', 'salary': 150000}");
    record48.set("intermediateLevel", "{'skills': ['Advanced strategy', 'Board interaction', 'M&A'], 'projects': ['Company strategy', 'Organizational transformation'], 'resources': ['Executive coaching', 'Board networks'], 'timeline': '12-18 months', 'salary': 220000}");
    record48.set("advancedLevel", "{'skills': ['Executive vision', 'Company strategy', 'Industry leadership'], 'projects': ['Company direction', 'Industry influence'], 'resources': ['Executive networks', 'Industry leadership'], 'timeline': '18+ months', 'salary': 320000}");
    record48.set("relatedCareers", ["CTO", "Chief Product Officer", "Chief Executive Officer"]);
    record48.set("faqs", [{"question": "What's the typical background?", "answer": "Senior engineering manager with 10+ years experience"}, {"question": "Do I need an MBA?", "answer": "Not required but helpful for executive roles"}, {"question": "How important is business acumen?", "answer": "Critical; understanding business is essential"}, {"question": "What's the job market like?", "answer": "Limited positions but excellent compensation"}, {"question": "How much hands-on coding?", "answer": "None; focus is on strategy and leadership"}, {"question": "What's the typical workflow?", "answer": "Strategy \u2192 hiring \u2192 development \u2192 execution \u2192 growth"}]);
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
    record49.set("name", "CTO");
    record49.set("slug", "cto");
    record49.set("description", "Chief Technology Officer - Lead technology strategy");
    record49.set("overview", "CTOs set technology vision and strategy for organizations, overseeing all technical decisions.");
    record49.set("category", "Management");
    record49.set("jobDemand", "High");
    record49.set("entrySalary", 180000);
    record49.set("midSalary", 280000);
    record49.set("seniorSalary", 400000);
    record49.set("topStates", [{"state": "California", "salaryMin": 250000, "salaryMax": 500000}, {"state": "New York", "salaryMin": 220000, "salaryMax": 450000}, {"state": "Washington", "salaryMin": 210000, "salaryMax": 420000}, {"state": "Massachusetts", "salaryMin": 200000, "salaryMax": 400000}, {"state": "Texas", "salaryMin": 190000, "salaryMax": 380000}]);
    record49.set("technicalSkills", [{"skill": "Strategic Vision", "proficiency": "Expert"}, {"skill": "Technology Strategy", "proficiency": "Expert"}, {"skill": "Business Acumen", "proficiency": "Expert"}, {"skill": "System Architecture", "proficiency": "Expert"}, {"skill": "Leadership", "proficiency": "Expert"}, {"skill": "Communication", "proficiency": "Expert"}, {"skill": "Innovation", "proficiency": "Expert"}, {"skill": "Financial Management", "proficiency": "Advanced"}]);
    record49.set("softSkills", ["Strategic Thinking", "Leadership", "Communication", "Vision", "Influence"]);
    record49.set("tools", ["Strategic planning tools", "Board management", "Financial tools", "Communication platforms", "Analytics"]);
    record49.set("certifications", ["Executive Leadership Certification", "MBA (preferred)", "Board Certification"]);
    record49.set("beginnerLevel", "{'skills': ['Technology strategy', 'Organization leadership', 'Board interaction'], 'projects': ['Technology roadmap', 'Strategic initiatives'], 'resources': ['Executive coaching', 'Board networks'], 'timeline': '6-12 months', 'salary': 180000}");
    record49.set("intermediateLevel", "{'skills': ['Advanced strategy', 'Company vision', 'M&A'], 'projects': ['Company transformation', 'Technology leadership'], 'resources': ['Executive coaching', 'Industry networks'], 'timeline': '12-18 months', 'salary': 280000}");
    record49.set("advancedLevel", "{'skills': ['Executive vision', 'Industry leadership', 'Innovation'], 'projects': ['Company direction', 'Industry influence'], 'resources': ['Executive networks', 'Industry leadership'], 'timeline': '18+ months', 'salary': 400000}");
    record49.set("relatedCareers", ["VP of Engineering", "Chief Product Officer", "Chief Executive Officer"]);
    record49.set("faqs", [{"question": "What's the typical background?", "answer": "VP of Engineering or equivalent with 15+ years experience"}, {"question": "Do I need an MBA?", "answer": "Not required but helpful for executive roles"}, {"question": "How important is business acumen?", "answer": "Critical; understanding business is essential"}, {"question": "What's the job market like?", "answer": "Very limited positions but exceptional compensation"}, {"question": "How much hands-on coding?", "answer": "None; focus is on strategy and vision"}, {"question": "What's the typical workflow?", "answer": "Vision \u2192 strategy \u2192 execution \u2192 growth \u2192 innovation"}]);
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
