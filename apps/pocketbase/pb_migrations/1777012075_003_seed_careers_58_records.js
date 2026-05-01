/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
    record0.set("name", "Frontend Developer");
    record0.set("slug", "frontend-developer");
    record0.set("description", "Build user-facing web applications using HTML, CSS, and JavaScript frameworks");
    record0.set("category", "Frontend");
    record0.set("jobDemand", "High");
    record0.set("entrySalary", 65000);
    record0.set("midSalary", 95000);
    record0.set("seniorSalary", 140000);
    record0.set("topStates", "{'California': '$75K-$150K', 'New York': '$70K-$140K', 'Washington': '$72K-$145K', 'Massachusetts': '$68K-$135K', 'Texas': '$65K-$125K'}");
    record0.set("technicalSkills", ["HTML/CSS", "JavaScript", "React", "Vue.js", "TypeScript", "Responsive Design"]);
    record0.set("softSkills", ["Communication", "Problem Solving", "Attention to Detail", "Collaboration"]);
    record0.set("tools", ["VS Code", "Chrome DevTools", "Git", "Webpack", "Figma"]);
    record0.set("certifications", ["Google Front-End Developer", "freeCodeCamp Responsive Web Design"]);
    record0.set("faqs", [{"q": "What's the best way to learn React?", "a": "Start with fundamentals, then build projects"}, {"q": "How important is CSS?", "a": "Very important for styling and layouts"}]);
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
    record1.set("description", "Develop server-side logic, databases, and APIs that power applications");
    record1.set("category", "Backend");
    record1.set("jobDemand", "High");
    record1.set("entrySalary", 70000);
    record1.set("midSalary", 105000);
    record1.set("seniorSalary", 155000);
    record1.set("topStates", "{'California': '$80K-$160K', 'New York': '$75K-$150K', 'Washington': '$77K-$155K', 'Massachusetts': '$72K-$145K', 'Texas': '$70K-$135K'}");
    record1.set("technicalSkills", ["Python/Java/Node.js", "SQL", "REST APIs", "Databases", "System Design", "Authentication"]);
    record1.set("softSkills", ["Problem Solving", "Debugging", "Documentation", "Teamwork"]);
    record1.set("tools", ["Git", "Docker", "Postman", "Database Tools", "IDE"]);
    record1.set("certifications", ["AWS Certified Developer", "Oracle Java Programmer"]);
    record1.set("faqs", [{"q": "Which language should I learn?", "a": "Python, Java, or Node.js are popular choices"}, {"q": "How important is database knowledge?", "a": "Critical for backend development"}]);
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
    record2.set("description", "Work on both frontend and backend, managing complete application development");
    record2.set("category", "Full Stack");
    record2.set("jobDemand", "High");
    record2.set("entrySalary", 72000);
    record2.set("midSalary", 110000);
    record2.set("seniorSalary", 160000);
    record2.set("topStates", "{'California': '$82K-$165K', 'New York': '$77K-$155K', 'Washington': '$79K-$160K', 'Massachusetts': '$74K-$150K', 'Texas': '$72K-$140K'}");
    record2.set("technicalSkills", ["Frontend Frameworks", "Backend Languages", "Databases", "APIs", "DevOps Basics", "Full Stack Architecture"]);
    record2.set("softSkills", ["Versatility", "Problem Solving", "Communication", "Project Management"]);
    record2.set("tools", ["Git", "Docker", "VS Code", "Database Tools", "CI/CD"]);
    record2.set("certifications", ["Full Stack Web Development", "MERN Stack Certification"]);
    record2.set("faqs", [{"q": "Is full stack better than specializing?", "a": "Both have advantages; full stack offers flexibility"}, {"q": "What's the learning curve?", "a": "Steeper but rewarding with broader opportunities"}]);
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
    record3.set("name", "Data Scientist");
    record3.set("slug", "data-scientist");
    record3.set("description", "Analyze complex data and build machine learning models to drive business decisions");
    record3.set("category", "Data");
    record3.set("jobDemand", "High");
    record3.set("entrySalary", 85000);
    record3.set("midSalary", 125000);
    record3.set("seniorSalary", 180000);
    record3.set("topStates", "{'California': '$95K-$190K', 'New York': '$90K-$180K', 'Washington': '$88K-$175K', 'Massachusetts': '$92K-$185K', 'Texas': '$85K-$165K'}");
    record3.set("technicalSkills", ["Python", "Machine Learning", "Statistics", "SQL", "Data Visualization", "Deep Learning"]);
    record3.set("softSkills", ["Statistical Thinking", "Communication", "Business Acumen", "Storytelling"]);
    record3.set("tools", ["Python (Pandas, Scikit-learn)", "Jupyter", "SQL", "Tableau", "TensorFlow"]);
    record3.set("certifications", ["Google Data Analytics", "IBM Data Science Professional"]);
    record3.set("faqs", [{"q": "Do I need a PhD?", "a": "No, but strong math/stats background helps"}, {"q": "What's the job market like?", "a": "Excellent demand with competitive salaries"}]);
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
    record4.set("name", "Data Engineer");
    record4.set("slug", "data-engineer");
    record4.set("description", "Build and maintain data pipelines and infrastructure for data processing");
    record4.set("category", "Data");
    record4.set("jobDemand", "High");
    record4.set("entrySalary", 80000);
    record4.set("midSalary", 120000);
    record4.set("seniorSalary", 170000);
    record4.set("topStates", "{'California': '$90K-$180K', 'New York': '$85K-$170K', 'Washington': '$87K-$165K', 'Massachusetts': '$88K-$175K', 'Texas': '$80K-$155K'}");
    record4.set("technicalSkills", ["Python/Scala", "SQL", "ETL", "Big Data Tools", "Cloud Platforms", "Data Warehousing"]);
    record4.set("softSkills", ["Problem Solving", "Attention to Detail", "Collaboration", "System Thinking"]);
    record4.set("tools", ["Apache Spark", "Hadoop", "Airflow", "SQL", "Cloud Services"]);
    record4.set("certifications", ["Cloudera Data Engineer", "AWS Data Analytics"]);
    record4.set("faqs", [{"q": "What's the difference from Data Scientist?", "a": "Engineers build infrastructure; Scientists analyze data"}, {"q": "Is Big Data knowledge required?", "a": "Yes, essential for the role"}]);
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
    record5.set("name", "DevOps Engineer");
    record5.set("slug", "devops-engineer");
    record5.set("description", "Manage infrastructure, deployment pipelines, and system reliability");
    record5.set("category", "DevOps");
    record5.set("jobDemand", "High");
    record5.set("entrySalary", 75000);
    record5.set("midSalary", 115000);
    record5.set("seniorSalary", 165000);
    record5.set("topStates", "{'California': '$85K-$170K', 'New York': '$80K-$160K', 'Washington': '$82K-$165K', 'Massachusetts': '$83K-$170K', 'Texas': '$75K-$150K'}");
    record5.set("technicalSkills", ["Linux", "Docker", "Kubernetes", "CI/CD", "Cloud Platforms", "Infrastructure as Code"]);
    record5.set("softSkills", ["Problem Solving", "Automation Mindset", "Communication", "Reliability Focus"]);
    record5.set("tools", ["Docker", "Kubernetes", "Jenkins", "Terraform", "AWS/Azure"]);
    record5.set("certifications", ["Kubernetes Administrator", "AWS DevOps Engineer"]);
    record5.set("faqs", [{"q": "Do I need Linux knowledge?", "a": "Yes, essential for DevOps"}, {"q": "What's the career growth?", "a": "Strong growth with increasing demand"}]);
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
    record6.set("description", "Design and implement cloud infrastructure solutions for organizations");
    record6.set("category", "Cloud");
    record6.set("jobDemand", "High");
    record6.set("entrySalary", 95000);
    record6.set("midSalary", 140000);
    record6.set("seniorSalary", 190000);
    record6.set("topStates", "{'California': '$105K-$200K', 'New York': '$100K-$190K', 'Washington': '$102K-$195K', 'Massachusetts': '$103K-$200K', 'Texas': '$95K-$175K'}");
    record6.set("technicalSkills", ["AWS/Azure/GCP", "System Design", "Security", "Networking", "Cost Optimization", "Scalability"]);
    record6.set("softSkills", ["Strategic Thinking", "Leadership", "Communication", "Business Acumen"]);
    record6.set("tools", ["AWS", "Azure", "Terraform", "CloudFormation", "Monitoring Tools"]);
    record6.set("certifications", ["AWS Solutions Architect", "Azure Solutions Architect"]);
    record6.set("faqs", [{"q": "What experience is needed?", "a": "Usually 5+ years of cloud/infrastructure experience"}, {"q": "What's the salary potential?", "a": "Among the highest in tech"}]);
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
    record7.set("description", "Protect systems and data from cyber threats and vulnerabilities");
    record7.set("category", "Security");
    record7.set("jobDemand", "High");
    record7.set("entrySalary", 80000);
    record7.set("midSalary", 125000);
    record7.set("seniorSalary", 175000);
    record7.set("topStates", "{'California': '$90K-$180K', 'New York': '$85K-$170K', 'Washington': '$87K-$175K', 'Massachusetts': '$88K-$180K', 'Texas': '$80K-$160K'}");
    record7.set("technicalSkills", ["Network Security", "Cryptography", "Penetration Testing", "Vulnerability Assessment", "Compliance", "Incident Response"]);
    record7.set("softSkills", ["Attention to Detail", "Problem Solving", "Communication", "Vigilance"]);
    record7.set("tools", ["Burp Suite", "Metasploit", "Wireshark", "SIEM Tools", "Firewalls"]);
    record7.set("certifications", ["CEH (Certified Ethical Hacker)", "CISSP"]);
    record7.set("faqs", [{"q": "Is a security background required?", "a": "Helpful but not always required"}, {"q": "What certifications matter most?", "a": "CEH and CISSP are highly valued"}]);
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
    record8.set("name", "Product Manager");
    record8.set("slug", "product-manager");
    record8.set("description", "Lead product strategy, roadmap, and cross-functional teams to deliver solutions");
    record8.set("category", "Management");
    record8.set("jobDemand", "High");
    record8.set("entrySalary", 90000);
    record8.set("midSalary", 135000);
    record8.set("seniorSalary", 185000);
    record8.set("topStates", "{'California': '$100K-$195K', 'New York': '$95K-$185K', 'Washington': '$97K-$190K', 'Massachusetts': '$98K-$195K', 'Texas': '$90K-$170K'}");
    record8.set("technicalSkills", ["Product Strategy", "Data Analysis", "User Research", "Roadmapping", "Metrics", "Technical Literacy"]);
    record8.set("softSkills", ["Leadership", "Communication", "Negotiation", "Strategic Thinking"]);
    record8.set("tools", ["Jira", "Figma", "Analytics Tools", "Roadmap Tools", "SQL"]);
    record8.set("certifications", ["Reforge Product Management", "Pragmatic Marketing"]);
    record8.set("faqs", [{"q": "Do I need technical background?", "a": "Helpful but not required; business skills matter more"}, {"q": "What's the career path?", "a": "Can lead to VP/Chief Product Officer roles"}]);
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
    record9.set("name", "UX Designer");
    record9.set("slug", "ux-designer");
    record9.set("description", "Design user experiences and interfaces that are intuitive and engaging");
    record9.set("category", "Design");
    record9.set("jobDemand", "High");
    record9.set("entrySalary", 65000);
    record9.set("midSalary", 95000);
    record9.set("seniorSalary", 140000);
    record9.set("topStates", "{'California': '$75K-$150K', 'New York': '$70K-$140K', 'Washington': '$72K-$145K', 'Massachusetts': '$68K-$135K', 'Texas': '$65K-$125K'}");
    record9.set("technicalSkills", ["Wireframing", "Prototyping", "User Research", "Interaction Design", "Visual Design", "Usability Testing"]);
    record9.set("softSkills", ["Empathy", "Communication", "Creativity", "Problem Solving"]);
    record9.set("tools", ["Figma", "Adobe XD", "Sketch", "Prototyping Tools", "User Testing"]);
    record9.set("certifications", ["Google UX Design", "Nielsen Norman UX Certification"]);
    record9.set("faqs", [{"q": "Do I need design background?", "a": "Helpful but can learn through bootcamps"}, {"q": "What's the job market?", "a": "Growing demand for UX professionals"}]);
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
    record10.set("name", "Mobile Developer");
    record10.set("slug", "mobile-developer");
    record10.set("description", "Build native or cross-platform mobile applications for iOS and Android");
    record10.set("category", "Frontend");
    record10.set("jobDemand", "High");
    record10.set("entrySalary", 70000);
    record10.set("midSalary", 105000);
    record10.set("seniorSalary", 155000);
    record10.set("topStates", "{'California': '$80K-$160K', 'New York': '$75K-$150K', 'Washington': '$77K-$155K', 'Massachusetts': '$72K-$145K', 'Texas': '$70K-$135K'}");
    record10.set("technicalSkills", ["Swift/Kotlin", "React Native/Flutter", "Mobile UI", "APIs", "Mobile Testing", "Performance Optimization"]);
    record10.set("softSkills", ["Problem Solving", "Attention to Detail", "Collaboration", "Adaptability"]);
    record10.set("tools", ["Xcode", "Android Studio", "Git", "Firebase", "Testing Tools"]);
    record10.set("certifications", ["Google Associate Android Developer", "Apple Developer"]);
    record10.set("faqs", [{"q": "Should I learn native or cross-platform?", "a": "Both valuable; cross-platform offers flexibility"}, {"q": "What's the job outlook?", "a": "Strong demand for mobile developers"}]);
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
    record11.set("description", "Test software to ensure quality, reliability, and performance");
    record11.set("category", "Backend");
    record11.set("jobDemand", "Medium");
    record11.set("entrySalary", 55000);
    record11.set("midSalary", 80000);
    record11.set("seniorSalary", 120000);
    record11.set("topStates", "{'California': '$65K-$130K', 'New York': '$60K-$120K', 'Washington': '$62K-$125K', 'Massachusetts': '$58K-$115K', 'Texas': '$55K-$110K'}");
    record11.set("technicalSkills", ["Test Automation", "Manual Testing", "SQL", "API Testing", "Performance Testing", "Test Planning"]);
    record11.set("softSkills", ["Attention to Detail", "Problem Solving", "Communication", "Documentation"]);
    record11.set("tools", ["Selenium", "Postman", "JIRA", "TestNG", "LoadRunner"]);
    record11.set("certifications", ["ISTQB Certified Tester", "Selenium Certification"]);
    record11.set("faqs", [{"q": "Is QA a good career?", "a": "Yes, essential role with good growth potential"}, {"q": "Can I transition to development?", "a": "Yes, many QA engineers transition to dev"}]);
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
    record12.set("name", "Solutions Architect");
    record12.set("slug", "solutions-architect");
    record12.set("description", "Design technical solutions that meet business requirements and scale");
    record12.set("category", "Cloud");
    record12.set("jobDemand", "High");
    record12.set("entrySalary", 100000);
    record12.set("midSalary", 145000);
    record12.set("seniorSalary", 200000);
    record12.set("topStates", "{'California': '$110K-$210K', 'New York': '$105K-$200K', 'Washington': '$107K-$205K', 'Massachusetts': '$108K-$210K', 'Texas': '$100K-$185K'}");
    record12.set("technicalSkills", ["System Design", "Cloud Platforms", "Architecture Patterns", "Security", "Scalability", "Cost Optimization"]);
    record12.set("softSkills", ["Leadership", "Communication", "Strategic Thinking", "Client Management"]);
    record12.set("tools", ["AWS", "Azure", "Visio", "Lucidchart", "Monitoring Tools"]);
    record12.set("certifications", ["AWS Solutions Architect", "Azure Solutions Architect"]);
    record12.set("faqs", [{"q": "What experience is needed?", "a": "Usually 7+ years in technical roles"}, {"q": "What's the salary range?", "a": "Among the highest in tech"}]);
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
    record13.set("name", "Machine Learning Engineer");
    record13.set("slug", "machine-learning-engineer");
    record13.set("description", "Build and deploy machine learning models and systems at scale");
    record13.set("category", "Data");
    record13.set("jobDemand", "High");
    record13.set("entrySalary", 95000);
    record13.set("midSalary", 140000);
    record13.set("seniorSalary", 195000);
    record13.set("topStates", "{'California': '$105K-$205K', 'New York': '$100K-$195K', 'Washington': '$102K-$200K', 'Massachusetts': '$103K-$205K', 'Texas': '$95K-$180K'}");
    record13.set("technicalSkills", ["Python", "TensorFlow/PyTorch", "Deep Learning", "MLOps", "Feature Engineering", "Model Deployment"]);
    record13.set("softSkills", ["Problem Solving", "Research Mindset", "Communication", "Experimentation"]);
    record13.set("tools", ["Python", "TensorFlow", "PyTorch", "Jupyter", "MLflow"]);
    record13.set("certifications", ["Google ML Engineer", "Fast.ai Deep Learning"]);
    record13.set("faqs", [{"q": "Do I need a PhD?", "a": "No, but strong math/CS background helps"}, {"q": "What's the job market?", "a": "Excellent demand with premium salaries"}]);
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
    record14.set("description", "Manage, optimize, and secure databases for organizations");
    record14.set("category", "Backend");
    record14.set("jobDemand", "Medium");
    record14.set("entrySalary", 70000);
    record14.set("midSalary", 105000);
    record14.set("seniorSalary", 155000);
    record14.set("topStates", "{'California': '$80K-$160K', 'New York': '$75K-$150K', 'Washington': '$77K-$155K', 'Massachusetts': '$72K-$145K', 'Texas': '$70K-$135K'}");
    record14.set("technicalSkills", ["SQL", "Database Design", "Performance Tuning", "Backup/Recovery", "Security", "Replication"]);
    record14.set("softSkills", ["Problem Solving", "Attention to Detail", "Documentation", "Reliability Focus"]);
    record14.set("tools", ["Oracle", "PostgreSQL", "MySQL", "Monitoring Tools", "Backup Tools"]);
    record14.set("certifications", ["Oracle Database Administrator", "Microsoft SQL Server"]);
    record14.set("faqs", [{"q": "Is DBA still relevant?", "a": "Yes, critical for data management"}, {"q": "What databases should I learn?", "a": "Oracle, PostgreSQL, and MySQL are popular"}]);
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
    record15.set("description", "Manage and maintain IT infrastructure and systems");
    record15.set("category", "DevOps");
    record15.set("jobDemand", "Medium");
    record15.set("entrySalary", 60000);
    record15.set("midSalary", 85000);
    record15.set("seniorSalary", 130000);
    record15.set("topStates", "{'California': '$70K-$140K', 'New York': '$65K-$130K', 'Washington': '$67K-$135K', 'Massachusetts': '$63K-$125K', 'Texas': '$60K-$120K'}");
    record15.set("technicalSkills", ["Linux/Windows", "Networking", "System Security", "Virtualization", "Scripting", "Monitoring"]);
    record15.set("softSkills", ["Problem Solving", "Communication", "Reliability Focus", "Documentation"]);
    record15.set("tools", ["Linux", "Windows Server", "Ansible", "Nagios", "Virtualization"]);
    record15.set("certifications", ["CompTIA Security+", "Linux Administrator"]);
    record15.set("faqs", [{"q": "Is SysAdmin a good career?", "a": "Yes, stable with good job security"}, {"q": "What's the growth potential?", "a": "Can transition to DevOps or Cloud roles"}]);
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
    record16.set("description", "Design, implement, and maintain network infrastructure");
    record16.set("category", "DevOps");
    record16.set("jobDemand", "Medium");
    record16.set("entrySalary", 65000);
    record16.set("midSalary", 95000);
    record16.set("seniorSalary", 145000);
    record16.set("topStates", "{'California': '$75K-$150K', 'New York': '$70K-$140K', 'Washington': '$72K-$145K', 'Massachusetts': '$68K-$135K', 'Texas': '$65K-$125K'}");
    record16.set("technicalSkills", ["Networking Protocols", "Routing/Switching", "Firewalls", "VPN", "Network Security", "Troubleshooting"]);
    record16.set("softSkills", ["Problem Solving", "Attention to Detail", "Communication", "Patience"]);
    record16.set("tools", ["Cisco", "Juniper", "Wireshark", "Packet Tracer", "Monitoring Tools"]);
    record16.set("certifications", ["Cisco CCNA", "CompTIA Network+"]);
    record16.set("faqs", [{"q": "Is networking still relevant?", "a": "Yes, essential for infrastructure"}, {"q": "What certifications matter?", "a": "Cisco CCNA is highly valued"}]);
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
    record17.set("name", "Cybersecurity Analyst");
    record17.set("slug", "cybersecurity-analyst");
    record17.set("description", "Monitor and protect systems from cyber threats and attacks");
    record17.set("category", "Security");
    record17.set("jobDemand", "High");
    record17.set("entrySalary", 75000);
    record17.set("midSalary", 110000);
    record17.set("seniorSalary", 160000);
    record17.set("topStates", "{'California': '$85K-$170K', 'New York': '$80K-$160K', 'Washington': '$82K-$165K', 'Massachusetts': '$83K-$170K', 'Texas': '$75K-$150K'}");
    record17.set("technicalSkills", ["SIEM Tools", "Threat Analysis", "Incident Response", "Network Security", "Compliance", "Forensics"]);
    record17.set("softSkills", ["Attention to Detail", "Problem Solving", "Communication", "Vigilance"]);
    record17.set("tools", ["Splunk", "ELK Stack", "Wireshark", "Firewalls", "IDS/IPS"]);
    record17.set("certifications", ["CompTIA Security+", "CEH"]);
    record17.set("faqs", [{"q": "What's the job market?", "a": "Excellent demand with strong growth"}, {"q": "Do I need experience?", "a": "Entry-level positions available with certifications"}]);
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
    record18.set("description", "Analyze business needs and translate them into technical requirements");
    record18.set("category", "Management");
    record18.set("jobDemand", "High");
    record18.set("entrySalary", 65000);
    record18.set("midSalary", 95000);
    record18.set("seniorSalary", 140000);
    record18.set("topStates", "{'California': '$75K-$150K', 'New York': '$70K-$140K', 'Washington': '$72K-$145K', 'Massachusetts': '$68K-$135K', 'Texas': '$65K-$125K'}");
    record18.set("technicalSkills", ["Requirements Analysis", "Data Analysis", "SQL", "Process Modeling", "Documentation", "Testing"]);
    record18.set("softSkills", ["Communication", "Problem Solving", "Stakeholder Management", "Analytical Thinking"]);
    record18.set("tools", ["JIRA", "SQL", "Visio", "Excel", "Confluence"]);
    record18.set("certifications", ["IIBA CBAP", "Agile Business Analysis"]);
    record18.set("faqs", [{"q": "Do I need technical background?", "a": "Helpful but not required"}, {"q": "What's the career path?", "a": "Can lead to Product Manager or Project Manager roles"}]);
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
    record19.set("name", "Technical Writer");
    record19.set("slug", "technical-writer");
    record19.set("description", "Create documentation and guides for technical products and systems");
    record19.set("category", "Frontend");
    record19.set("jobDemand", "Medium");
    record19.set("entrySalary", 55000);
    record19.set("midSalary", 80000);
    record19.set("seniorSalary", 120000);
    record19.set("topStates", "{'California': '$65K-$130K', 'New York': '$60K-$120K', 'Washington': '$62K-$125K', 'Massachusetts': '$58K-$115K', 'Texas': '$55K-$110K'}");
    record19.set("technicalSkills", ["Technical Documentation", "API Documentation", "Markdown", "Tools (Confluence, Git)", "Diagramming", "Content Management"]);
    record19.set("softSkills", ["Writing", "Communication", "Attention to Detail", "Organization"]);
    record19.set("tools", ["Confluence", "Git", "Markdown", "Figma", "Diagramming Tools"]);
    record19.set("certifications", ["Society for Technical Communication", "Technical Writing Certification"]);
    record19.set("faqs", [{"q": "Is technical writing a good career?", "a": "Yes, growing demand with good work-life balance"}, {"q": "Do I need technical background?", "a": "Helpful but can learn on the job"}]);
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
    record20.set("name", "Software Architect");
    record20.set("slug", "software-architect");
    record20.set("description", "Design high-level software architecture and technical strategies");
    record20.set("category", "Full Stack");
    record20.set("jobDemand", "High");
    record20.set("entrySalary", 110000);
    record20.set("midSalary", 160000);
    record20.set("seniorSalary", 220000);
    record20.set("topStates", "{'California': '$120K-$230K', 'New York': '$115K-$220K', 'Washington': '$117K-$225K', 'Massachusetts': '$118K-$230K', 'Texas': '$110K-$200K'}");
    record20.set("technicalSkills", ["System Design", "Architecture Patterns", "Scalability", "Security", "Technology Selection", "Code Quality"]);
    record20.set("softSkills", ["Leadership", "Communication", "Strategic Thinking", "Mentoring"]);
    record20.set("tools", ["Design Tools", "Modeling Tools", "Code Review Tools", "Monitoring"]);
    record20.set("certifications", ["TOGAF", "AWS Solutions Architect"]);
    record20.set("faqs", [{"q": "What experience is needed?", "a": "Usually 10+ years in development"}, {"q": "What's the salary potential?", "a": "Among the highest in tech"}]);
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
    record21.set("description", "Lead engineering teams and manage technical projects and people");
    record21.set("category", "Management");
    record21.set("jobDemand", "High");
    record21.set("entrySalary", 120000);
    record21.set("midSalary", 170000);
    record21.set("seniorSalary", 240000);
    record21.set("topStates", "{'California': '$130K-$250K', 'New York': '$125K-$240K', 'Washington': '$127K-$245K', 'Massachusetts': '$128K-$250K', 'Texas': '$120K-$220K'}");
    record21.set("technicalSkills", ["Team Leadership", "Project Management", "Technical Knowledge", "Mentoring", "Performance Management", "Strategic Planning"]);
    record21.set("softSkills", ["Leadership", "Communication", "Empathy", "Decision Making"]);
    record21.set("tools", ["JIRA", "Confluence", "1:1 Tools", "Performance Tools", "Slack"]);
    record21.set("certifications", ["PMP", "Agile Leadership"]);
    record21.set("faqs", [{"q": "Do I need management experience?", "a": "Helpful but can transition from IC roles"}, {"q": "What's the salary potential?", "a": "Excellent with director/VP opportunities"}]);
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
    record22.set("name", "Scrum Master");
    record22.set("slug", "scrum-master");
    record22.set("description", "Facilitate agile processes and remove impediments for development teams");
    record22.set("category", "Management");
    record22.set("jobDemand", "High");
    record22.set("entrySalary", 75000);
    record22.set("midSalary", 110000);
    record22.set("seniorSalary", 160000);
    record22.set("topStates", "{'California': '$85K-$170K', 'New York': '$80K-$160K', 'Washington': '$82K-$165K', 'Massachusetts': '$83K-$170K', 'Texas': '$75K-$150K'}");
    record22.set("technicalSkills", ["Agile Methodologies", "Scrum Framework", "Facilitation", "Conflict Resolution", "Metrics", "Coaching"]);
    record22.set("softSkills", ["Communication", "Leadership", "Problem Solving", "Empathy"]);
    record22.set("tools", ["JIRA", "Confluence", "Miro", "Slack", "Azure DevOps"]);
    record22.set("certifications", ["Certified Scrum Master", "Professional Scrum Master"]);
    record22.set("faqs", [{"q": "Is Scrum Master a good career?", "a": "Yes, growing demand in agile organizations"}, {"q": "What's the growth path?", "a": "Can transition to Product Owner or Manager roles"}]);
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
    record23.set("name", "Site Reliability Engineer");
    record23.set("slug", "site-reliability-engineer");
    record23.set("description", "Ensure system reliability, performance, and uptime through automation and monitoring");
    record23.set("category", "DevOps");
    record23.set("jobDemand", "High");
    record23.set("entrySalary", 85000);
    record23.set("midSalary", 130000);
    record23.set("seniorSalary", 185000);
    record23.set("topStates", "{'California': '$95K-$195K', 'New York': '$90K-$185K', 'Washington': '$92K-$190K', 'Massachusetts': '$93K-$195K', 'Texas': '$85K-$170K'}");
    record23.set("technicalSkills", ["Linux", "Kubernetes", "Monitoring", "Incident Response", "Automation", "Performance Tuning"]);
    record23.set("softSkills", ["Problem Solving", "Reliability Focus", "Communication", "On-call Mindset"]);
    record23.set("tools", ["Kubernetes", "Prometheus", "Grafana", "PagerDuty", "Terraform"]);
    record23.set("certifications", ["Kubernetes Administrator", "AWS DevOps Engineer"]);
    record23.set("faqs", [{"q": "What's the on-call commitment?", "a": "Varies by company; usually rotating shifts"}, {"q": "What's the career growth?", "a": "Strong growth with excellent compensation"}]);
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
    record24.set("name", "Platform Engineer");
    record24.set("slug", "platform-engineer");
    record24.set("description", "Build internal platforms and tools to improve developer productivity");
    record24.set("category", "DevOps");
    record24.set("jobDemand", "High");
    record24.set("entrySalary", 90000);
    record24.set("midSalary", 135000);
    record24.set("seniorSalary", 190000);
    record24.set("topStates", "{'California': '$100K-$200K', 'New York': '$95K-$190K', 'Washington': '$97K-$195K', 'Massachusetts': '$98K-$200K', 'Texas': '$90K-$175K'}");
    record24.set("technicalSkills", ["Platform Design", "Kubernetes", "CI/CD", "Infrastructure as Code", "Developer Experience", "Automation"]);
    record24.set("softSkills", ["Problem Solving", "Communication", "Empathy for Developers", "Systems Thinking"]);
    record24.set("tools", ["Kubernetes", "Terraform", "Jenkins", "Git", "Monitoring Tools"]);
    record24.set("certifications", ["Kubernetes Administrator", "AWS DevOps Engineer"]);
    record24.set("faqs", [{"q": "What's the difference from DevOps?", "a": "Platform engineers focus on developer experience"}, {"q": "What's the job market?", "a": "Growing demand in tech companies"}]);
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
    record25.set("name", "AI/ML Engineer");
    record25.set("slug", "ai-ml-engineer");
    record25.set("description", "Develop and deploy artificial intelligence and machine learning solutions");
    record25.set("category", "Data");
    record25.set("jobDemand", "High");
    record25.set("entrySalary", 100000);
    record25.set("midSalary", 150000);
    record25.set("seniorSalary", 210000);
    record25.set("topStates", "{'California': '$110K-$220K', 'New York': '$105K-$210K', 'Washington': '$107K-$215K', 'Massachusetts': '$108K-$220K', 'Texas': '$100K-$195K'}");
    record25.set("technicalSkills", ["Python", "Deep Learning", "NLP", "Computer Vision", "MLOps", "Reinforcement Learning"]);
    record25.set("softSkills", ["Research Mindset", "Problem Solving", "Communication", "Experimentation"]);
    record25.set("tools", ["Python", "TensorFlow", "PyTorch", "Hugging Face", "MLflow"]);
    record25.set("certifications", ["Google AI/ML Engineer", "Fast.ai Deep Learning"]);
    record25.set("faqs", [{"q": "What's the difference from ML Engineer?", "a": "AI/ML is broader, includes AI research"}, {"q": "What's the salary potential?", "a": "Among the highest in tech"}]);
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
    record26.set("name", "Blockchain Developer");
    record26.set("slug", "blockchain-developer");
    record26.set("description", "Build decentralized applications and smart contracts on blockchain platforms");
    record26.set("category", "Backend");
    record26.set("jobDemand", "Medium");
    record26.set("entrySalary", 85000);
    record26.set("midSalary", 130000);
    record26.set("seniorSalary", 185000);
    record26.set("topStates", "{'California': '$95K-$195K', 'New York': '$90K-$185K', 'Washington': '$92K-$190K', 'Massachusetts': '$93K-$195K', 'Texas': '$85K-$170K'}");
    record26.set("technicalSkills", ["Solidity", "Smart Contracts", "Blockchain Architecture", "Cryptography", "Web3", "DeFi"]);
    record26.set("softSkills", ["Problem Solving", "Innovation Mindset", "Communication", "Continuous Learning"]);
    record26.set("tools", ["Solidity", "Ethereum", "Hardhat", "Web3.js", "Truffle"]);
    record26.set("certifications", ["Ethereum Developer", "Certified Blockchain Developer"]);
    record26.set("faqs", [{"q": "Is blockchain a stable career?", "a": "Growing but volatile; good for innovation"}, {"q": "What's the salary potential?", "a": "Competitive with premium for expertise"}]);
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
    record27.set("name", "Game Developer");
    record27.set("slug", "game-developer");
    record27.set("description", "Create engaging games using game engines and programming languages");
    record27.set("category", "Frontend");
    record27.set("jobDemand", "Medium");
    record27.set("entrySalary", 65000);
    record27.set("midSalary", 95000);
    record27.set("seniorSalary", 140000);
    record27.set("topStates", "{'California': '$75K-$150K', 'New York': '$70K-$140K', 'Washington': '$72K-$145K', 'Massachusetts': '$68K-$135K', 'Texas': '$65K-$125K'}");
    record27.set("technicalSkills", ["C#/C++", "Game Engines (Unity/Unreal)", "Graphics Programming", "Physics", "Game Design", "Optimization"]);
    record27.set("softSkills", ["Creativity", "Problem Solving", "Collaboration", "Attention to Detail"]);
    record27.set("tools", ["Unity", "Unreal Engine", "C#", "Blender", "Git"]);
    record27.set("certifications", ["Unity Certified Developer", "Unreal Engine Certification"]);
    record27.set("faqs", [{"q": "Is game development a good career?", "a": "Yes, but competitive and demanding"}, {"q": "What's the work-life balance?", "a": "Can be intense during crunch periods"}]);
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
    record28.set("name", "Embedded Systems Engineer");
    record28.set("slug", "embedded-systems-engineer");
    record28.set("description", "Develop software for embedded systems and IoT devices");
    record28.set("category", "Backend");
    record28.set("jobDemand", "Medium");
    record28.set("entrySalary", 70000);
    record28.set("midSalary", 105000);
    record28.set("seniorSalary", 155000);
    record28.set("topStates", "{'California': '$80K-$160K', 'New York': '$75K-$150K', 'Washington': '$77K-$155K', 'Massachusetts': '$72K-$145K', 'Texas': '$70K-$135K'}");
    record28.set("technicalSkills", ["C/C++", "Embedded Systems", "Hardware Knowledge", "Real-time Systems", "Firmware", "Debugging"]);
    record28.set("softSkills", ["Problem Solving", "Attention to Detail", "Hardware Thinking", "Patience"]);
    record28.set("tools", ["C/C++", "Microcontrollers", "Oscilloscope", "JTAG", "Git"]);
    record28.set("certifications", ["Embedded Systems Certification", "ARM Cortex"]);
    record28.set("faqs", [{"q": "Is embedded systems still relevant?", "a": "Yes, essential for IoT and hardware"}, {"q": "What's the job market?", "a": "Stable with good growth potential"}]);
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
    record29.set("name", "IoT Engineer");
    record29.set("slug", "iot-engineer");
    record29.set("description", "Design and develop Internet of Things solutions and connected devices");
    record29.set("category", "Backend");
    record29.set("jobDemand", "High");
    record29.set("entrySalary", 75000);
    record29.set("midSalary", 115000);
    record29.set("seniorSalary", 165000);
    record29.set("topStates", "{'California': '$85K-$170K', 'New York': '$80K-$160K', 'Washington': '$82K-$165K', 'Massachusetts': '$83K-$170K', 'Texas': '$75K-$150K'}");
    record29.set("technicalSkills", ["IoT Platforms", "Embedded Systems", "Networking", "Cloud Integration", "Sensors", "Real-time Processing"]);
    record29.set("softSkills", ["Problem Solving", "Systems Thinking", "Communication", "Innovation"]);
    record29.set("tools", ["Arduino", "Raspberry Pi", "MQTT", "AWS IoT", "Azure IoT"]);
    record29.set("certifications", ["AWS IoT Developer", "Azure IoT Developer"]);
    record29.set("faqs", [{"q": "What's the job market?", "a": "Growing rapidly with strong demand"}, {"q": "What skills are most important?", "a": "Embedded systems and cloud integration"}]);
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
    record30.set("name", "API Developer");
    record30.set("slug", "api-developer");
    record30.set("description", "Design and develop robust APIs for applications and services");
    record30.set("category", "Backend");
    record30.set("jobDemand", "High");
    record30.set("entrySalary", 72000);
    record30.set("midSalary", 108000);
    record30.set("seniorSalary", 158000);
    record30.set("topStates", "{'California': '$82K-$165K', 'New York': '$77K-$155K', 'Washington': '$79K-$160K', 'Massachusetts': '$74K-$150K', 'Texas': '$72K-$140K'}");
    record30.set("technicalSkills", ["REST APIs", "GraphQL", "API Design", "Authentication", "Rate Limiting", "Documentation"]);
    record30.set("softSkills", ["Problem Solving", "Communication", "Attention to Detail", "Collaboration"]);
    record30.set("tools", ["Node.js/Python", "Postman", "Swagger", "Git", "Docker"]);
    record30.set("certifications", ["API Design Certification", "GraphQL Certification"]);
    record30.set("faqs", [{"q": "What's the difference from backend?", "a": "API developers focus on API design and integration"}, {"q": "Is GraphQL important?", "a": "Yes, increasingly popular alongside REST"}]);
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
    record31.set("description", "Secure cloud infrastructure and applications from threats");
    record31.set("category", "Security");
    record31.set("jobDemand", "High");
    record31.set("entrySalary", 85000);
    record31.set("midSalary", 130000);
    record31.set("seniorSalary", 185000);
    record31.set("topStates", "{'California': '$95K-$195K', 'New York': '$90K-$185K', 'Washington': '$92K-$190K', 'Massachusetts': '$93K-$195K', 'Texas': '$85K-$170K'}");
    record31.set("technicalSkills", ["Cloud Security", "IAM", "Encryption", "Compliance", "Threat Detection", "Incident Response"]);
    record31.set("softSkills", ["Problem Solving", "Attention to Detail", "Communication", "Vigilance"]);
    record31.set("tools", ["AWS Security", "Azure Security", "Splunk", "Firewalls", "SIEM"]);
    record31.set("certifications", ["AWS Security Specialty", "Azure Security Engineer"]);
    record31.set("faqs", [{"q": "What's the job market?", "a": "Excellent demand with premium salaries"}, {"q": "What certifications matter?", "a": "AWS and Azure security certifications"}]);
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
    record32.set("name", "Performance Engineer");
    record32.set("slug", "performance-engineer");
    record32.set("description", "Optimize application and system performance for speed and efficiency");
    record32.set("category", "Backend");
    record32.set("jobDemand", "Medium");
    record32.set("entrySalary", 75000);
    record32.set("midSalary", 115000);
    record32.set("seniorSalary", 165000);
    record32.set("topStates", "{'California': '$85K-$170K', 'New York': '$80K-$160K', 'Washington': '$82K-$165K', 'Massachusetts': '$83K-$170K', 'Texas': '$75K-$150K'}");
    record32.set("technicalSkills", ["Performance Testing", "Profiling", "Load Testing", "Optimization", "Monitoring", "Benchmarking"]);
    record32.set("softSkills", ["Problem Solving", "Analytical Thinking", "Communication", "Patience"]);
    record32.set("tools", ["JMeter", "Gatling", "Profilers", "Monitoring Tools", "SQL"]);
    record32.set("certifications", ["Performance Testing Certification", "Load Testing Certification"]);
    record32.set("faqs", [{"q": "Is performance engineering important?", "a": "Yes, critical for user experience"}, {"q": "What's the job market?", "a": "Growing demand in performance-critical systems"}]);
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
    record33.set("name", "Automation Engineer");
    record33.set("slug", "automation-engineer");
    record33.set("description", "Automate testing, deployment, and operational processes");
    record33.set("category", "DevOps");
    record33.set("jobDemand", "High");
    record33.set("entrySalary", 70000);
    record33.set("midSalary", 105000);
    record33.set("seniorSalary", 155000);
    record33.set("topStates", "{'California': '$80K-$160K', 'New York': '$75K-$150K', 'Washington': '$77K-$155K', 'Massachusetts': '$72K-$145K', 'Texas': '$70K-$135K'}");
    record33.set("technicalSkills", ["Test Automation", "Scripting", "CI/CD", "Infrastructure Automation", "Robotics", "Orchestration"]);
    record33.set("softSkills", ["Problem Solving", "Automation Mindset", "Communication", "Efficiency Focus"]);
    record33.set("tools", ["Selenium", "Jenkins", "Terraform", "Ansible", "Python"]);
    record33.set("certifications", ["Selenium Certification", "Automation Testing Certification"]);
    record33.set("faqs", [{"q": "What's the difference from QA?", "a": "Automation engineers focus on automation frameworks"}, {"q": "What's the job market?", "a": "Strong demand with good growth"}]);
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
    record34.set("name", "Data Analyst");
    record34.set("slug", "data-analyst");
    record34.set("description", "Analyze data to provide insights and support business decisions");
    record34.set("category", "Data");
    record34.set("jobDemand", "High");
    record34.set("entrySalary", 60000);
    record34.set("midSalary", 85000);
    record34.set("seniorSalary", 130000);
    record34.set("topStates", "{'California': '$70K-$140K', 'New York': '$65K-$130K', 'Washington': '$67K-$135K', 'Massachusetts': '$63K-$125K', 'Texas': '$60K-$120K'}");
    record34.set("technicalSkills", ["SQL", "Data Visualization", "Excel", "Statistics", "Python/R", "Business Intelligence"]);
    record34.set("softSkills", ["Analytical Thinking", "Communication", "Storytelling", "Problem Solving"]);
    record34.set("tools", ["SQL", "Tableau", "Power BI", "Excel", "Python"]);
    record34.set("certifications", ["Google Data Analytics", "Microsoft Data Analyst"]);
    record34.set("faqs", [{"q": "What's the difference from Data Scientist?", "a": "Analysts focus on insights; Scientists build models"}, {"q": "What's the job market?", "a": "Excellent demand with strong growth"}]);
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
    record35.set("name", "Business Intelligence Developer");
    record35.set("slug", "business-intelligence-developer");
    record35.set("description", "Build data warehouses and BI solutions for business analytics");
    record35.set("category", "Data");
    record35.set("jobDemand", "High");
    record35.set("entrySalary", 70000);
    record35.set("midSalary", 105000);
    record35.set("seniorSalary", 155000);
    record35.set("topStates", "{'California': '$80K-$160K', 'New York': '$75K-$150K', 'Washington': '$77K-$155K', 'Massachusetts': '$72K-$145K', 'Texas': '$70K-$135K'}");
    record35.set("technicalSkills", ["SQL", "ETL", "Data Warehousing", "BI Tools", "Data Modeling", "Reporting"]);
    record35.set("softSkills", ["Problem Solving", "Communication", "Attention to Detail", "Business Acumen"]);
    record35.set("tools", ["Tableau", "Power BI", "SQL Server", "Informatica", "Looker"]);
    record35.set("certifications", ["Tableau Desktop Specialist", "Microsoft Power BI"]);
    record35.set("faqs", [{"q": "What's the job market?", "a": "Strong demand with good growth"}, {"q": "What tools should I learn?", "a": "Tableau and Power BI are most popular"}]);
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
    record36.set("name", "Integration Engineer");
    record36.set("slug", "integration-engineer");
    record36.set("description", "Integrate different systems and applications to work together seamlessly");
    record36.set("category", "Backend");
    record36.set("jobDemand", "Medium");
    record36.set("entrySalary", 70000);
    record36.set("midSalary", 105000);
    record36.set("seniorSalary", 155000);
    record36.set("topStates", "{'California': '$80K-$160K', 'New York': '$75K-$150K', 'Washington': '$77K-$155K', 'Massachusetts': '$72K-$145K', 'Texas': '$70K-$135K'}");
    record36.set("technicalSkills", ["APIs", "Middleware", "ETL", "System Integration", "Messaging", "Data Mapping"]);
    record36.set("softSkills", ["Problem Solving", "Communication", "Systems Thinking", "Attention to Detail"]);
    record36.set("tools", ["MuleSoft", "Apache Camel", "Talend", "APIs", "Messaging Queues"]);
    record36.set("certifications", ["MuleSoft Certified Developer", "Integration Certification"]);
    record36.set("faqs", [{"q": "What's the job market?", "a": "Stable with good growth potential"}, {"q": "What tools are most important?", "a": "MuleSoft and Talend are industry leaders"}]);
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
    record37.set("name", "Release Manager");
    record37.set("slug", "release-manager");
    record37.set("description", "Manage software releases and deployment processes");
    record37.set("category", "DevOps");
    record37.set("jobDemand", "Medium");
    record37.set("entrySalary", 75000);
    record37.set("midSalary", 110000);
    record37.set("seniorSalary", 160000);
    record37.set("topStates", "{'California': '$85K-$170K', 'New York': '$80K-$160K', 'Washington': '$82K-$165K', 'Massachusetts': '$83K-$170K', 'Texas': '$75K-$150K'}");
    record37.set("technicalSkills", ["Release Planning", "CI/CD", "Version Control", "Deployment", "Risk Management", "Documentation"]);
    record37.set("softSkills", ["Communication", "Organization", "Problem Solving", "Leadership"]);
    record37.set("tools", ["Jenkins", "Git", "JIRA", "Confluence", "Deployment Tools"]);
    record37.set("certifications", ["Release Management Certification", "ITIL"]);
    record37.set("faqs", [{"q": "Is release management important?", "a": "Yes, critical for smooth deployments"}, {"q": "What's the career growth?", "a": "Can transition to DevOps or Project Manager roles"}]);
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
    record38.set("name", "Compliance Engineer");
    record38.set("slug", "compliance-engineer");
    record38.set("description", "Ensure systems and processes comply with regulations and standards");
    record38.set("category", "Security");
    record38.set("jobDemand", "Medium");
    record38.set("entrySalary", 70000);
    record38.set("midSalary", 105000);
    record38.set("seniorSalary", 155000);
    record38.set("topStates", "{'California': '$80K-$160K', 'New York': '$75K-$150K', 'Washington': '$77K-$155K', 'Massachusetts': '$72K-$145K', 'Texas': '$70K-$135K'}");
    record38.set("technicalSkills", ["Compliance Standards", "Auditing", "Risk Assessment", "Documentation", "Security", "Regulations"]);
    record38.set("softSkills", ["Attention to Detail", "Communication", "Organization", "Problem Solving"]);
    record38.set("tools", ["Compliance Tools", "Audit Tools", "Documentation", "Risk Management", "SIEM"]);
    record38.set("certifications", ["CISSP", "Certified Compliance Professional"]);
    record38.set("faqs", [{"q": "What's the job market?", "a": "Growing demand with regulatory focus"}, {"q": "What certifications matter?", "a": "CISSP and compliance-specific certifications"}]);
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
    record39.set("name", "Infrastructure Engineer");
    record39.set("slug", "infrastructure-engineer");
    record39.set("description", "Design and manage IT infrastructure and systems");
    record39.set("category", "DevOps");
    record39.set("jobDemand", "Medium");
    record39.set("entrySalary", 70000);
    record39.set("midSalary", 105000);
    record39.set("seniorSalary", 155000);
    record39.set("topStates", "{'California': '$80K-$160K', 'New York': '$75K-$150K', 'Washington': '$77K-$155K', 'Massachusetts': '$72K-$145K', 'Texas': '$70K-$135K'}");
    record39.set("technicalSkills", ["Infrastructure Design", "Virtualization", "Networking", "Storage", "Disaster Recovery", "Capacity Planning"]);
    record39.set("softSkills", ["Problem Solving", "Systems Thinking", "Communication", "Planning"]);
    record39.set("tools", ["VMware", "Hyper-V", "Networking", "Storage", "Monitoring"]);
    record39.set("certifications", ["VMware Certified", "CompTIA Infrastructure+"]);
    record39.set("faqs", [{"q": "What's the difference from SysAdmin?", "a": "Infrastructure engineers design; SysAdmins maintain"}, {"q": "What's the job market?", "a": "Stable with good growth potential"}]);
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
    record40.set("name", "Middleware Developer");
    record40.set("slug", "middleware-developer");
    record40.set("description", "Develop middleware solutions for system integration and communication");
    record40.set("category", "Backend");
    record40.set("jobDemand", "Medium");
    record40.set("entrySalary", 75000);
    record40.set("midSalary", 115000);
    record40.set("seniorSalary", 165000);
    record40.set("topStates", "{'California': '$85K-$170K', 'New York': '$80K-$160K', 'Washington': '$82K-$165K', 'Massachusetts': '$83K-$170K', 'Texas': '$75K-$150K'}");
    record40.set("technicalSkills", ["Middleware Platforms", "Message Queues", "APIs", "System Integration", "Protocols", "Performance"]);
    record40.set("softSkills", ["Problem Solving", "Systems Thinking", "Communication", "Attention to Detail"]);
    record40.set("tools", ["Apache Kafka", "RabbitMQ", "Middleware Platforms", "APIs", "Monitoring"]);
    record40.set("certifications", ["Middleware Certification", "Integration Certification"]);
    record40.set("faqs", [{"q": "What's the job market?", "a": "Growing demand in enterprise systems"}, {"q": "What skills are most important?", "a": "Message queues and system integration"}]);
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
    record41.set("name", "Firmware Engineer");
    record41.set("slug", "firmware-engineer");
    record41.set("description", "Develop firmware for hardware devices and embedded systems");
    record41.set("category", "Backend");
    record41.set("jobDemand", "Medium");
    record41.set("entrySalary", 75000);
    record41.set("midSalary", 115000);
    record41.set("seniorSalary", 165000);
    record41.set("topStates", "{'California': '$85K-$170K', 'New York': '$80K-$160K', 'Washington': '$82K-$165K', 'Massachusetts': '$83K-$170K', 'Texas': '$75K-$150K'}");
    record41.set("technicalSkills", ["C/C++", "Assembly", "Embedded Systems", "Hardware Knowledge", "Real-time Systems", "Debugging"]);
    record41.set("softSkills", ["Problem Solving", "Attention to Detail", "Hardware Thinking", "Patience"]);
    record41.set("tools", ["C/C++", "Microcontrollers", "Debuggers", "JTAG", "Oscilloscope"]);
    record41.set("certifications", ["Embedded Systems Certification", "ARM Cortex"]);
    record41.set("faqs", [{"q": "Is firmware development still relevant?", "a": "Yes, essential for hardware devices"}, {"q": "What's the job market?", "a": "Stable with good growth potential"}]);
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
    record42.set("name", "Graphics Programmer");
    record42.set("slug", "graphics-programmer");
    record42.set("description", "Develop graphics rendering and visualization systems");
    record42.set("category", "Frontend");
    record42.set("jobDemand", "Medium");
    record42.set("entrySalary", 80000);
    record42.set("midSalary", 120000);
    record42.set("seniorSalary", 170000);
    record42.set("topStates", "{'California': '$90K-$180K', 'New York': '$85K-$170K', 'Washington': '$87K-$175K', 'Massachusetts': '$88K-$180K', 'Texas': '$80K-$160K'}");
    record42.set("technicalSkills", ["C++", "Graphics APIs (OpenGL/Vulkan)", "Shaders", "3D Math", "Performance Optimization", "GPU Programming"]);
    record42.set("softSkills", ["Problem Solving", "Creativity", "Attention to Detail", "Collaboration"]);
    record42.set("tools", ["C++", "OpenGL", "Vulkan", "GLSL", "Graphics Debuggers"]);
    record42.set("certifications", ["Graphics Programming Certification", "GPU Programming"]);
    record42.set("faqs", [{"q": "Is graphics programming hard?", "a": "Yes, requires strong math and C++ skills"}, {"q": "What's the job market?", "a": "Niche but well-compensated"}]);
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
    record43.set("name", "Compiler Engineer");
    record43.set("slug", "compiler-engineer");
    record43.set("description", "Develop compilers and programming language tools");
    record43.set("category", "Backend");
    record43.set("jobDemand", "Low");
    record43.set("entrySalary", 90000);
    record43.set("midSalary", 135000);
    record43.set("seniorSalary", 190000);
    record43.set("topStates", "{'California': '$100K-$200K', 'New York': '$95K-$190K', 'Washington': '$97K-$195K', 'Massachusetts': '$98K-$200K', 'Texas': '$90K-$175K'}");
    record43.set("technicalSkills", ["C++", "Compiler Design", "Language Theory", "Optimization", "Parsing", "Code Generation"]);
    record43.set("softSkills", ["Problem Solving", "Analytical Thinking", "Attention to Detail", "Research Mindset"]);
    record43.set("tools", ["C++", "LLVM", "GCC", "Compiler Tools", "Git"]);
    record43.set("certifications", ["Compiler Design Certification", "Language Theory"]);
    record43.set("faqs", [{"q": "Is compiler engineering a good career?", "a": "Yes, but niche with high compensation"}, {"q": "What's the job market?", "a": "Limited but well-paid positions"}]);
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
    record44.set("name", "Distributed Systems Engineer");
    record44.set("slug", "distributed-systems-engineer");
    record44.set("description", "Design and build large-scale distributed systems");
    record44.set("category", "Backend");
    record44.set("jobDemand", "High");
    record44.set("entrySalary", 100000);
    record44.set("midSalary", 150000);
    record44.set("seniorSalary", 210000);
    record44.set("topStates", "{'California': '$110K-$220K', 'New York': '$105K-$210K', 'Washington': '$107K-$215K', 'Massachusetts': '$108K-$220K', 'Texas': '$100K-$195K'}");
    record44.set("technicalSkills", ["Distributed Systems", "Consensus Algorithms", "Scalability", "Fault Tolerance", "Networking", "System Design"]);
    record44.set("softSkills", ["Problem Solving", "Systems Thinking", "Communication", "Research Mindset"]);
    record44.set("tools", ["Distributed Databases", "Message Queues", "Monitoring", "Kubernetes", "Cloud Platforms"]);
    record44.set("certifications", ["Distributed Systems Certification", "System Design"]);
    record44.set("faqs", [{"q": "What's the job market?", "a": "Excellent demand with premium salaries"}, {"q": "What skills are most important?", "a": "System design and scalability"}]);
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
    record45.set("name", "Research Engineer");
    record45.set("slug", "research-engineer");
    record45.set("description", "Conduct research and develop cutting-edge technologies");
    record45.set("category", "Data");
    record45.set("jobDemand", "Medium");
    record45.set("entrySalary", 95000);
    record45.set("midSalary", 140000);
    record45.set("seniorSalary", 195000);
    record45.set("topStates", "{'California': '$105K-$205K', 'New York': '$100K-$195K', 'Washington': '$102K-$200K', 'Massachusetts': '$103K-$205K', 'Texas': '$95K-$180K'}");
    record45.set("technicalSkills", ["Research Methodology", "Programming", "Mathematics", "Experimentation", "Publication", "Innovation"]);
    record45.set("softSkills", ["Research Mindset", "Communication", "Creativity", "Collaboration"]);
    record45.set("tools", ["Python", "Research Tools", "Jupyter", "Git", "Academic Tools"]);
    record45.set("certifications", ["Research Certification", "Advanced Degree"]);
    record45.set("faqs", [{"q": "Do I need a PhD?", "a": "Helpful but not always required"}, {"q": "What's the job market?", "a": "Limited but well-compensated in tech companies"}]);
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
    record46.set("name", "Accessibility Engineer");
    record46.set("slug", "accessibility-engineer");
    record46.set("description", "Ensure applications are accessible to users with disabilities");
    record46.set("category", "Frontend");
    record46.set("jobDemand", "Medium");
    record46.set("entrySalary", 65000);
    record46.set("midSalary", 95000);
    record46.set("seniorSalary", 140000);
    record46.set("topStates", "{'California': '$75K-$150K', 'New York': '$70K-$140K', 'Washington': '$72K-$145K', 'Massachusetts': '$68K-$135K', 'Texas': '$65K-$125K'}");
    record46.set("technicalSkills", ["WCAG Standards", "Accessibility Testing", "Assistive Technologies", "HTML/CSS", "JavaScript", "Testing Tools"]);
    record46.set("softSkills", ["Empathy", "Attention to Detail", "Communication", "Problem Solving"]);
    record46.set("tools", ["Accessibility Tools", "Screen Readers", "Testing Tools", "WCAG Checkers", "Figma"]);
    record46.set("certifications", ["IAAP Certification", "Accessibility Specialist"]);
    record46.set("faqs", [{"q": "Is accessibility important?", "a": "Yes, critical for inclusive design"}, {"q": "What's the job market?", "a": "Growing demand with regulatory focus"}]);
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
    record47.set("name", "Localization Engineer");
    record47.set("slug", "localization-engineer");
    record47.set("description", "Adapt software for different languages and regions");
    record47.set("category", "Frontend");
    record47.set("jobDemand", "Medium");
    record47.set("entrySalary", 60000);
    record47.set("midSalary", 85000);
    record47.set("seniorSalary", 130000);
    record47.set("topStates", "{'California': '$70K-$140K', 'New York': '$65K-$130K', 'Washington': '$67K-$135K', 'Massachusetts': '$63K-$125K', 'Texas': '$60K-$120K'}");
    record47.set("technicalSkills", ["Localization Tools", "Unicode", "Language Knowledge", "Testing", "Documentation", "Cultural Awareness"]);
    record47.set("softSkills", ["Attention to Detail", "Communication", "Cultural Sensitivity", "Problem Solving"]);
    record47.set("tools", ["Localization Tools", "Translation Tools", "Testing Tools", "Git", "Confluence"]);
    record47.set("certifications", ["Localization Certification", "Language Certification"]);
    record47.set("faqs", [{"q": "Is localization important?", "a": "Yes, critical for global applications"}, {"q": "What languages should I know?", "a": "English plus 1-2 other languages helpful"}]);
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
    record48.set("name", "Observability Engineer");
    record48.set("slug", "observability-engineer");
    record48.set("description", "Build monitoring and observability systems for applications");
    record48.set("category", "DevOps");
    record48.set("jobDemand", "High");
    record48.set("entrySalary", 85000);
    record48.set("midSalary", 130000);
    record48.set("seniorSalary", 185000);
    record48.set("topStates", "{'California': '$95K-$195K', 'New York': '$90K-$185K', 'Washington': '$92K-$190K', 'Massachusetts': '$93K-$195K', 'Texas': '$85K-$170K'}");
    record48.set("technicalSkills", ["Monitoring Tools", "Logging", "Tracing", "Metrics", "Alerting", "System Design"]);
    record48.set("softSkills", ["Problem Solving", "Systems Thinking", "Communication", "Attention to Detail"]);
    record48.set("tools", ["Prometheus", "Grafana", "ELK Stack", "Jaeger", "Datadog"]);
    record48.set("certifications", ["Observability Certification", "Monitoring Certification"]);
    record48.set("faqs", [{"q": "What's the difference from DevOps?", "a": "Observability engineers focus on monitoring"}, {"q": "What's the job market?", "a": "Growing demand with strong compensation"}]);
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
    record49.set("name", "Incident Response Engineer");
    record49.set("slug", "incident-response-engineer");
    record49.set("description", "Respond to and manage security incidents and breaches");
    record49.set("category", "Security");
    record49.set("jobDemand", "High");
    record49.set("entrySalary", 80000);
    record49.set("midSalary", 125000);
    record49.set("seniorSalary", 175000);
    record49.set("topStates", "{'California': '$90K-$180K', 'New York': '$85K-$170K', 'Washington': '$87K-$175K', 'Massachusetts': '$88K-$180K', 'Texas': '$80K-$160K'}");
    record49.set("technicalSkills", ["Incident Response", "Forensics", "Threat Analysis", "SIEM", "Malware Analysis", "Communication"]);
    record49.set("softSkills", ["Problem Solving", "Stress Management", "Communication", "Attention to Detail"]);
    record49.set("tools", ["SIEM Tools", "Forensics Tools", "Malware Analysis", "Incident Management", "Slack"]);
    record49.set("certifications", ["GCIH", "ECIH"]);
    record49.set("faqs", [{"q": "What's the on-call commitment?", "a": "Usually 24/7 on-call rotation"}, {"q": "What's the stress level?", "a": "High during incidents; requires stress management"}]);
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
    record50.set("name", "Threat Intelligence Engineer");
    record50.set("slug", "threat-intelligence-engineer");
    record50.set("description", "Analyze threats and provide intelligence for security defense");
    record50.set("category", "Security");
    record50.set("jobDemand", "High");
    record50.set("entrySalary", 85000);
    record50.set("midSalary", 130000);
    record50.set("seniorSalary", 185000);
    record50.set("topStates", "{'California': '$95K-$195K', 'New York': '$90K-$185K', 'Washington': '$92K-$190K', 'Massachusetts': '$93K-$195K', 'Texas': '$85K-$170K'}");
    record50.set("technicalSkills", ["Threat Analysis", "Intelligence Gathering", "Malware Analysis", "Indicators of Compromise", "Reporting", "Tools"]);
    record50.set("softSkills", ["Analytical Thinking", "Communication", "Research Mindset", "Attention to Detail"]);
    record50.set("tools", ["OSINT Tools", "Malware Analysis", "Threat Intelligence Platforms", "SIEM", "Reporting"]);
    record50.set("certifications", ["GCIH", "ECIH"]);
    record50.set("faqs", [{"q": "What's the job market?", "a": "Excellent demand with strong compensation"}, {"q": "What skills are most important?", "a": "Threat analysis and intelligence gathering"}]);
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
    record51.set("name", "Vulnerability Manager");
    record51.set("slug", "vulnerability-manager");
    record51.set("description", "Identify, assess, and manage security vulnerabilities");
    record51.set("category", "Security");
    record51.set("jobDemand", "High");
    record51.set("entrySalary", 75000);
    record51.set("midSalary", 115000);
    record51.set("seniorSalary", 165000);
    record51.set("topStates", "{'California': '$85K-$170K', 'New York': '$80K-$160K', 'Washington': '$82K-$165K', 'Massachusetts': '$83K-$170K', 'Texas': '$75K-$150K'}");
    record51.set("technicalSkills", ["Vulnerability Assessment", "Penetration Testing", "Risk Management", "Remediation", "Reporting", "Tools"]);
    record51.set("softSkills", ["Problem Solving", "Communication", "Attention to Detail", "Risk Awareness"]);
    record51.set("tools", ["Nessus", "Qualys", "Burp Suite", "Vulnerability Scanners", "SIEM"]);
    record51.set("certifications", ["CEH", "OSCP"]);
    record51.set("faqs", [{"q": "What's the job market?", "a": "Strong demand with good compensation"}, {"q": "What certifications matter?", "a": "CEH and OSCP are highly valued"}]);
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
    record52.set("name", "Privacy Engineer");
    record52.set("slug", "privacy-engineer");
    record52.set("description", "Implement privacy protections and ensure GDPR/CCPA compliance");
    record52.set("category", "Security");
    record52.set("jobDemand", "High");
    record52.set("entrySalary", 80000);
    record52.set("midSalary", 125000);
    record52.set("seniorSalary", 175000);
    record52.set("topStates", "{'California': '$90K-$180K', 'New York': '$85K-$170K', 'Washington': '$87K-$175K', 'Massachusetts': '$88K-$180K', 'Texas': '$80K-$160K'}");
    record52.set("technicalSkills", ["Privacy Regulations", "Data Protection", "Encryption", "Compliance", "Risk Assessment", "Documentation"]);
    record52.set("softSkills", ["Attention to Detail", "Communication", "Problem Solving", "Regulatory Knowledge"]);
    record52.set("tools", ["Privacy Tools", "Encryption", "Compliance Tools", "Data Management", "Monitoring"]);
    record52.set("certifications", ["CIPM", "CIPP"]);
    record52.set("faqs", [{"q": "What's the job market?", "a": "Growing demand with regulatory focus"}, {"q": "What certifications matter?", "a": "CIPM and CIPP are valuable"}]);
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
    record53.set("name", "Capacity Planning Engineer");
    record53.set("slug", "capacity-planning-engineer");
    record53.set("description", "Plan and optimize resource capacity for systems and infrastructure");
    record53.set("category", "DevOps");
    record53.set("jobDemand", "Medium");
    record53.set("entrySalary", 75000);
    record53.set("midSalary", 115000);
    record53.set("seniorSalary", 165000);
    record53.set("topStates", "{'California': '$85K-$170K', 'New York': '$80K-$160K', 'Washington': '$82K-$165K', 'Massachusetts': '$83K-$170K', 'Texas': '$75K-$150K'}");
    record53.set("technicalSkills", ["Capacity Planning", "Forecasting", "Performance Analysis", "Cost Optimization", "Monitoring", "Modeling"]);
    record53.set("softSkills", ["Analytical Thinking", "Communication", "Problem Solving", "Strategic Thinking"]);
    record53.set("tools", ["Monitoring Tools", "Analytics", "Forecasting Tools", "Spreadsheets", "Databases"]);
    record53.set("certifications", ["Capacity Planning Certification", "Performance Certification"]);
    record53.set("faqs", [{"q": "What's the job market?", "a": "Stable with good growth potential"}, {"q": "What skills are most important?", "a": "Forecasting and cost optimization"}]);
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
    record54.set("name", "Disaster Recovery Engineer");
    record54.set("slug", "disaster-recovery-engineer");
    record54.set("description", "Plan and implement disaster recovery and business continuity solutions");
    record54.set("category", "DevOps");
    record54.set("jobDemand", "Medium");
    record54.set("entrySalary", 80000);
    record54.set("midSalary", 125000);
    record54.set("seniorSalary", 175000);
    record54.set("topStates", "{'California': '$90K-$180K', 'New York': '$85K-$170K', 'Washington': '$87K-$175K', 'Massachusetts': '$88K-$180K', 'Texas': '$80K-$160K'}");
    record54.set("technicalSkills", ["Disaster Recovery", "Business Continuity", "Backup/Recovery", "Failover", "Testing", "Documentation"]);
    record54.set("softSkills", ["Problem Solving", "Planning", "Communication", "Stress Management"]);
    record54.set("tools", ["Backup Tools", "Disaster Recovery Tools", "Monitoring", "Testing Tools", "Documentation"]);
    record54.set("certifications", ["DRII", "CBCP"]);
    record54.set("faqs", [{"q": "Is disaster recovery important?", "a": "Yes, critical for business continuity"}, {"q": "What's the job market?", "a": "Stable with good growth potential"}]);
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
    record55.set("name", "Vendor Manager");
    record55.set("slug", "vendor-manager");
    record55.set("description", "Manage relationships with technology vendors and service providers");
    record55.set("category", "Management");
    record55.set("jobDemand", "Medium");
    record55.set("entrySalary", 70000);
    record55.set("midSalary", 105000);
    record55.set("seniorSalary", 155000);
    record55.set("topStates", "{'California': '$80K-$160K', 'New York': '$75K-$150K', 'Washington': '$77K-$155K', 'Massachusetts': '$72K-$145K', 'Texas': '$70K-$135K'}");
    record55.set("technicalSkills", ["Vendor Management", "Contract Negotiation", "SLA Management", "Risk Assessment", "Cost Analysis", "Communication"]);
    record55.set("softSkills", ["Negotiation", "Communication", "Problem Solving", "Relationship Building"]);
    record55.set("tools", ["Vendor Management Tools", "Contract Tools", "Spreadsheets", "Communication Tools", "Monitoring"]);
    record55.set("certifications", ["Vendor Management Certification", "Procurement Certification"]);
    record55.set("faqs", [{"q": "What's the job market?", "a": "Stable with good growth potential"}, {"q": "What skills are most important?", "a": "Negotiation and relationship management"}]);
  try {
    app.save(record55);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record56 = new Record(collection);
    record56.set("name", "IT Consultant");
    record56.set("slug", "it-consultant");
    record56.set("description", "Advise organizations on technology strategy and implementation");
    record56.set("category", "Management");
    record56.set("jobDemand", "High");
    record56.set("entrySalary", 85000);
    record56.set("midSalary", 130000);
    record56.set("seniorSalary", 185000);
    record56.set("topStates", "{'California': '$95K-$195K', 'New York': '$90K-$185K', 'Washington': '$92K-$190K', 'Massachusetts': '$93K-$195K', 'Texas': '$85K-$170K'}");
    record56.set("technicalSkills", ["Technology Strategy", "System Design", "Business Analysis", "Project Management", "Communication", "Industry Knowledge"]);
    record56.set("softSkills", ["Communication", "Strategic Thinking", "Problem Solving", "Client Management"]);
    record56.set("tools", ["Consulting Tools", "Visio", "Project Management", "Analytics", "Communication"]);
    record56.set("certifications", ["Consulting Certification", "Industry Certifications"]);
    record56.set("faqs", [{"q": "What's the job market?", "a": "Excellent demand with strong compensation"}, {"q": "What experience is needed?", "a": "Usually 5+ years in technical roles"}]);
  try {
    app.save(record56);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record57 = new Record(collection);
    record57.set("name", "Technical Architect");
    record57.set("slug", "technical-architect");
    record57.set("description", "Design technical solutions and oversee implementation");
    record57.set("category", "Full Stack");
    record57.set("jobDemand", "High");
    record57.set("entrySalary", 110000);
    record57.set("midSalary", 160000);
    record57.set("seniorSalary", 220000);
    record57.set("topStates", "{'California': '$120K-$230K', 'New York': '$115K-$220K', 'Washington': '$117K-$225K', 'Massachusetts': '$118K-$230K', 'Texas': '$110K-$200K'}");
    record57.set("technicalSkills", ["System Design", "Architecture Patterns", "Technology Selection", "Scalability", "Security", "Cost Optimization"]);
    record57.set("softSkills", ["Leadership", "Communication", "Strategic Thinking", "Mentoring"]);
    record57.set("tools", ["Design Tools", "Modeling Tools", "Code Review", "Monitoring", "Collaboration"]);
    record57.set("certifications", ["TOGAF", "AWS Solutions Architect"]);
    record57.set("faqs", [{"q": "What experience is needed?", "a": "Usually 10+ years in development"}, {"q": "What's the salary potential?", "a": "Among the highest in tech"}]);
  try {
    app.save(record57);
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
