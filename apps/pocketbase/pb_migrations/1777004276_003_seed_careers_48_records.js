/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
    record0.set("name", "Data Analyst");
    record0.set("slug", "data-analyst");
    record0.set("description", "Analyze data to help businesses make informed decisions");
    record0.set("overview", "Data Analysts examine large datasets to identify trends, patterns, and insights that drive business strategy. They use statistical tools and programming languages to transform raw data into actionable intelligence.");
    record0.set("averageSalary", 68000);
    record0.set("salaryRange", "{'min': 50000, 'max': 95000}");
    record0.set("jobDemandOutlook", "Growing 36% through 2032, much faster than average");
    record0.set("topPayingStates", ["California", "New York", "Massachusetts", "Washington", "Texas"]);
    record0.set("roadmap", "{'beginner': {'skills': ['Excel', 'SQL basics', 'Data visualization'], 'projects': ['Sales data analysis', 'Customer segmentation'], 'certifications': ['Google Data Analytics Certificate'], 'resources': ['DataCamp', 'Coursera']}, 'intermediate': {'skills': ['Advanced SQL', 'Python/R', 'Tableau', 'Power BI'], 'projects': ['Predictive modeling', 'Dashboard creation'], 'certifications': ['Microsoft Certified: Data Analyst'], 'resources': ['Mode Analytics', 'Kaggle']}, 'advanced': {'skills': ['Machine Learning', 'Statistical analysis', 'Big Data tools'], 'projects': ['ML pipeline development', 'Advanced analytics'], 'certifications': ['AWS Certified Data Analytics'], 'resources': ['Databricks', 'Apache Spark']}}");
    record0.set("skillsRequired", "{'technical': [{'skill': 'SQL', 'proficiency': 'Advanced'}, {'skill': 'Python', 'proficiency': 'Intermediate'}, {'skill': 'Excel', 'proficiency': 'Advanced'}, {'skill': 'Tableau', 'proficiency': 'Intermediate'}], 'soft': ['Communication', 'Problem-solving', 'Attention to detail'], 'tools': ['Excel', 'SQL', 'Tableau', 'Power BI', 'Python'], 'certifications': ['Google Data Analytics', 'Microsoft Certified']}");
    record0.set("salaryInsights", "{'entry': 50000, 'mid': 68000, 'senior': 95000, 'byState': {'California': 85000, 'New York': 82000, 'Texas': 72000}, 'growthChart': '36% growth through 2032'}");
    record0.set("relatedCareers", ["Data Scientist", "Business Analyst", "Database Administrator"]);
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
    record1.set("overview", "Software Engineers create applications and systems that solve real-world problems. They work across the full development lifecycle, from requirements gathering to deployment and maintenance.");
    record1.set("averageSalary", 120000);
    record1.set("salaryRange", "{'min': 80000, 'max': 180000}");
    record1.set("jobDemandOutlook", "Growing 17% through 2032, faster than average");
    record1.set("topPayingStates", ["California", "Washington", "New York", "Massachusetts", "Colorado"]);
    record1.set("roadmap", "{'beginner': {'skills': ['Python/Java basics', 'Git', 'OOP concepts'], 'projects': ['Todo app', 'Calculator'], 'certifications': ['CompTIA A+'], 'resources': ['Codecademy', 'freeCodeCamp']}, 'intermediate': {'skills': ['Full-stack development', 'REST APIs', 'Databases'], 'projects': ['E-commerce platform', 'Social media app'], 'certifications': ['AWS Certified Developer'], 'resources': ['Udemy', 'Pluralsight']}, 'advanced': {'skills': ['System design', 'Microservices', 'Cloud architecture'], 'projects': ['Distributed systems', 'High-scale applications'], 'certifications': ['AWS Solutions Architect'], 'resources': ['System Design Primer', 'LeetCode']}}");
    record1.set("skillsRequired", "{'technical': [{'skill': 'Java', 'proficiency': 'Advanced'}, {'skill': 'Python', 'proficiency': 'Advanced'}, {'skill': 'JavaScript', 'proficiency': 'Intermediate'}, {'skill': 'SQL', 'proficiency': 'Intermediate'}], 'soft': ['Problem-solving', 'Teamwork', 'Communication'], 'tools': ['Git', 'Docker', 'Kubernetes', 'Jenkins'], 'certifications': ['AWS Certified Developer', 'Oracle Certified Associate']}");
    record1.set("salaryInsights", "{'entry': 80000, 'mid': 120000, 'senior': 180000, 'byState': {'California': 160000, 'Washington': 155000, 'New York': 145000}, 'growthChart': '17% growth through 2032'}");
    record1.set("relatedCareers", ["Frontend Developer", "Backend Developer", "DevOps Engineer"]);
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
    record2.set("description", "Manage infrastructure, deployment, and system operations");
    record2.set("overview", "DevOps Engineers bridge development and operations, automating deployment processes and managing cloud infrastructure. They ensure systems are reliable, scalable, and secure.");
    record2.set("averageSalary", 130000);
    record2.set("salaryRange", "{'min': 90000, 'max': 200000}");
    record2.set("jobDemandOutlook", "Growing 23% through 2032, much faster than average");
    record2.set("topPayingStates", ["California", "Washington", "New York", "Massachusetts", "Virginia"]);
    record2.set("roadmap", "{'beginner': {'skills': ['Linux basics', 'Git', 'Docker'], 'projects': ['Container setup', 'CI/CD pipeline basics'], 'certifications': ['Linux+'], 'resources': ['Linux Academy', 'Docker docs']}, 'intermediate': {'skills': ['Kubernetes', 'AWS/Azure', 'Terraform'], 'projects': ['Multi-container orchestration', 'Infrastructure as Code'], 'certifications': ['AWS Certified Solutions Architect'], 'resources': ['Kubernetes.io', 'Terraform docs']}, 'advanced': {'skills': ['Advanced Kubernetes', 'Multi-cloud', 'Security'], 'projects': ['Enterprise infrastructure', 'Disaster recovery'], 'certifications': ['CKA - Certified Kubernetes Administrator'], 'resources': ['CNCF', 'Linux Foundation']}}");
    record2.set("skillsRequired", "{'technical': [{'skill': 'Docker', 'proficiency': 'Advanced'}, {'skill': 'Kubernetes', 'proficiency': 'Advanced'}, {'skill': 'AWS', 'proficiency': 'Advanced'}, {'skill': 'Terraform', 'proficiency': 'Intermediate'}], 'soft': ['Problem-solving', 'Communication', 'Automation mindset'], 'tools': ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Ansible'], 'certifications': ['AWS Certified Solutions Architect', 'CKA']}");
    record2.set("salaryInsights", "{'entry': 90000, 'mid': 130000, 'senior': 200000, 'byState': {'California': 180000, 'Washington': 175000, 'New York': 160000}, 'growthChart': '23% growth through 2032'}");
    record2.set("relatedCareers", ["Cloud Architect", "Systems Administrator", "Software Engineer"]);
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
    record3.set("name", "Frontend Developer");
    record3.set("slug", "frontend-developer");
    record3.set("description", "Build user interfaces and client-side applications");
    record3.set("overview", "Frontend Developers create the visual and interactive parts of web and mobile applications. They focus on user experience, responsive design, and performance optimization.");
    record3.set("averageSalary", 105000);
    record3.set("salaryRange", "{'min': 70000, 'max': 160000}");
    record3.set("jobDemandOutlook", "Growing 16% through 2032, faster than average");
    record3.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record3.set("roadmap", "{'beginner': {'skills': ['HTML/CSS', 'JavaScript basics', 'Responsive design'], 'projects': ['Personal portfolio', 'Landing page'], 'certifications': ['freeCodeCamp Responsive Web Design'], 'resources': ['MDN Web Docs', 'CSS-Tricks']}, 'intermediate': {'skills': ['React/Vue', 'TypeScript', 'CSS frameworks'], 'projects': ['Interactive web app', 'E-commerce frontend'], 'certifications': ['React Developer Certification'], 'resources': ['React docs', 'Vue docs']}, 'advanced': {'skills': ['Advanced React', 'Performance optimization', 'Testing'], 'projects': ['Complex SPA', 'Design system'], 'certifications': ['AWS Certified Cloud Practitioner'], 'resources': ['Web.dev', 'Webpack docs']}}");
    record3.set("skillsRequired", "{'technical': [{'skill': 'JavaScript', 'proficiency': 'Advanced'}, {'skill': 'React', 'proficiency': 'Advanced'}, {'skill': 'HTML/CSS', 'proficiency': 'Advanced'}, {'skill': 'TypeScript', 'proficiency': 'Intermediate'}], 'soft': ['Attention to detail', 'Communication', 'Creativity'], 'tools': ['React', 'Vue', 'Angular', 'Webpack', 'Git'], 'certifications': ['React Developer Certification', 'AWS Certified Cloud Practitioner']}");
    record3.set("salaryInsights", "{'entry': 70000, 'mid': 105000, 'senior': 160000, 'byState': {'California': 145000, 'New York': 135000, 'Washington': 130000}, 'growthChart': '16% growth through 2032'}");
    record3.set("relatedCareers", ["Backend Developer", "Full Stack Developer", "UX Designer"]);
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
    record4.set("name", "Backend Developer");
    record4.set("slug", "backend-developer");
    record4.set("description", "Develop server-side logic and database systems");
    record4.set("overview", "Backend Developers build the server-side infrastructure that powers applications. They work with databases, APIs, and business logic to ensure applications function correctly and securely.");
    record4.set("averageSalary", 115000);
    record4.set("salaryRange", "{'min': 75000, 'max': 170000}");
    record4.set("jobDemandOutlook", "Growing 17% through 2032, faster than average");
    record4.set("topPayingStates", ["California", "Washington", "New York", "Massachusetts", "Colorado"]);
    record4.set("roadmap", "{'beginner': {'skills': ['Python/Java basics', 'SQL', 'REST APIs'], 'projects': ['Simple API', 'Database design'], 'certifications': ['CompTIA A+'], 'resources': ['Codecademy', 'SQL Tutorial']}, 'intermediate': {'skills': ['Advanced SQL', 'Microservices', 'Authentication'], 'projects': ['Multi-tier application', 'Payment integration'], 'certifications': ['AWS Certified Developer'], 'resources': ['Udemy', 'Pluralsight']}, 'advanced': {'skills': ['System design', 'Distributed systems', 'Performance tuning'], 'projects': ['High-scale backend', 'Real-time systems'], 'certifications': ['AWS Solutions Architect'], 'resources': ['System Design Primer', 'Designing Data-Intensive Applications']}}");
    record4.set("skillsRequired", "{'technical': [{'skill': 'Python', 'proficiency': 'Advanced'}, {'skill': 'Java', 'proficiency': 'Advanced'}, {'skill': 'SQL', 'proficiency': 'Advanced'}, {'skill': 'Node.js', 'proficiency': 'Intermediate'}], 'soft': ['Problem-solving', 'Teamwork', 'Attention to detail'], 'tools': ['Python', 'Java', 'PostgreSQL', 'MongoDB', 'Docker'], 'certifications': ['AWS Certified Developer', 'Oracle Certified Associate']}");
    record4.set("salaryInsights", "{'entry': 75000, 'mid': 115000, 'senior': 170000, 'byState': {'California': 155000, 'Washington': 150000, 'New York': 140000}, 'growthChart': '17% growth through 2032'}");
    record4.set("relatedCareers", ["Frontend Developer", "Full Stack Developer", "DevOps Engineer"]);
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
    record5.set("name", "Full Stack Developer");
    record5.set("slug", "full-stack-developer");
    record5.set("description", "Develop both frontend and backend of applications");
    record5.set("overview", "Full Stack Developers work across the entire application stack, handling both client-side and server-side development. They have broad knowledge of web technologies and can build complete applications.");
    record5.set("averageSalary", 110000);
    record5.set("salaryRange", "{'min': 75000, 'max': 165000}");
    record5.set("jobDemandOutlook", "Growing 17% through 2032, faster than average");
    record5.set("topPayingStates", ["California", "Washington", "New York", "Massachusetts", "Colorado"]);
    record5.set("roadmap", "{'beginner': {'skills': ['HTML/CSS/JavaScript', 'Basic backend', 'Git'], 'projects': ['Simple web app', 'Todo application'], 'certifications': ['freeCodeCamp Full Stack'], 'resources': ['Codecademy', 'freeCodeCamp']}, 'intermediate': {'skills': ['React/Vue', 'Node.js/Python', 'Databases'], 'projects': ['Full-featured web app', 'Blog platform'], 'certifications': ['AWS Certified Cloud Practitioner'], 'resources': ['Udemy', 'Pluralsight']}, 'advanced': {'skills': ['Advanced frameworks', 'System design', 'DevOps basics'], 'projects': ['Scalable application', 'SaaS platform'], 'certifications': ['AWS Solutions Architect'], 'resources': ['System Design Primer', 'AWS docs']}}");
    record5.set("skillsRequired", "{'technical': [{'skill': 'JavaScript', 'proficiency': 'Advanced'}, {'skill': 'React', 'proficiency': 'Advanced'}, {'skill': 'Node.js', 'proficiency': 'Advanced'}, {'skill': 'SQL', 'proficiency': 'Intermediate'}], 'soft': ['Problem-solving', 'Communication', 'Adaptability'], 'tools': ['React', 'Node.js', 'MongoDB', 'PostgreSQL', 'Docker'], 'certifications': ['AWS Certified Cloud Practitioner', 'AWS Solutions Architect']}");
    record5.set("salaryInsights", "{'entry': 75000, 'mid': 110000, 'senior': 165000, 'byState': {'California': 150000, 'Washington': 145000, 'New York': 135000}, 'growthChart': '17% growth through 2032'}");
    record5.set("relatedCareers", ["Frontend Developer", "Backend Developer", "DevOps Engineer"]);
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
    record6.set("name", "Mobile Developer");
    record6.set("slug", "mobile-developer");
    record6.set("description", "Develop applications for mobile devices");
    record6.set("overview", "Mobile Developers create applications for smartphones and tablets using native or cross-platform frameworks. They focus on performance, user experience, and platform-specific features.");
    record6.set("averageSalary", 108000);
    record6.set("salaryRange", "{'min': 70000, 'max': 160000}");
    record6.set("jobDemandOutlook", "Growing 18% through 2032, faster than average");
    record6.set("topPayingStates", ["California", "Washington", "New York", "Massachusetts", "Colorado"]);
    record6.set("roadmap", "{'beginner': {'skills': ['Swift/Kotlin basics', 'Mobile UI', 'Git'], 'projects': ['Simple iOS/Android app', 'Calculator app'], 'certifications': ['Google Associate Android Developer'], 'resources': ['Apple Developer', 'Android Developers']}, 'intermediate': {'skills': ['Advanced Swift/Kotlin', 'APIs', 'Databases'], 'projects': ['Feature-rich app', 'Social app'], 'certifications': ['AWS Certified Cloud Practitioner'], 'resources': ['Udemy', 'Pluralsight']}, 'advanced': {'skills': ['Performance optimization', 'Cross-platform', 'App publishing'], 'projects': ['Production app', 'App store success'], 'certifications': ['AWS Solutions Architect'], 'resources': ['App Store Connect', 'Google Play Console']}}");
    record6.set("skillsRequired", "{'technical': [{'skill': 'Swift', 'proficiency': 'Advanced'}, {'skill': 'Kotlin', 'proficiency': 'Advanced'}, {'skill': 'React Native', 'proficiency': 'Intermediate'}, {'skill': 'Firebase', 'proficiency': 'Intermediate'}], 'soft': ['Attention to detail', 'User empathy', 'Problem-solving'], 'tools': ['Xcode', 'Android Studio', 'React Native', 'Firebase'], 'certifications': ['Google Associate Android Developer', 'AWS Certified Cloud Practitioner']}");
    record6.set("salaryInsights", "{'entry': 70000, 'mid': 108000, 'senior': 160000, 'byState': {'California': 145000, 'Washington': 140000, 'New York': 130000}, 'growthChart': '18% growth through 2032'}");
    record6.set("relatedCareers", ["Frontend Developer", "Full Stack Developer", "Software Engineer"]);
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
    record7.set("name", "Cloud Architect");
    record7.set("slug", "cloud-architect");
    record7.set("description", "Design and manage cloud infrastructure solutions");
    record7.set("overview", "Cloud Architects design scalable, secure, and cost-effective cloud solutions. They work with organizations to migrate to cloud platforms and optimize their cloud infrastructure.");
    record7.set("averageSalary", 145000);
    record7.set("salaryRange", "{'min': 100000, 'max': 220000}");
    record7.set("jobDemandOutlook", "Growing 28% through 2032, much faster than average");
    record7.set("topPayingStates", ["California", "Washington", "New York", "Massachusetts", "Virginia"]);
    record7.set("roadmap", "{'beginner': {'skills': ['Cloud basics', 'AWS/Azure fundamentals', 'Networking'], 'projects': ['Simple cloud setup', 'VPC configuration'], 'certifications': ['AWS Certified Cloud Practitioner'], 'resources': ['AWS Training', 'Azure Learn']}, 'intermediate': {'skills': ['Advanced AWS/Azure', 'Security', 'Cost optimization'], 'projects': ['Multi-tier architecture', 'Disaster recovery'], 'certifications': ['AWS Solutions Architect Associate'], 'resources': ['AWS docs', 'Azure docs']}, 'advanced': {'skills': ['Enterprise architecture', 'Multi-cloud', 'Advanced security'], 'projects': ['Enterprise solutions', 'Global infrastructure'], 'certifications': ['AWS Solutions Architect Professional'], 'resources': ['AWS Well-Architected Framework', 'TOGAF']}}");
    record7.set("skillsRequired", "{'technical': [{'skill': 'AWS', 'proficiency': 'Advanced'}, {'skill': 'Azure', 'proficiency': 'Advanced'}, {'skill': 'Networking', 'proficiency': 'Advanced'}, {'skill': 'Security', 'proficiency': 'Advanced'}], 'soft': ['Strategic thinking', 'Communication', 'Leadership'], 'tools': ['AWS', 'Azure', 'Terraform', 'CloudFormation'], 'certifications': ['AWS Solutions Architect Professional', 'Azure Solutions Architect Expert']}");
    record7.set("salaryInsights", "{'entry': 100000, 'mid': 145000, 'senior': 220000, 'byState': {'California': 200000, 'Washington': 195000, 'New York': 180000}, 'growthChart': '28% growth through 2032'}");
    record7.set("relatedCareers", ["DevOps Engineer", "Solutions Architect", "Systems Administrator"]);
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
    record8.set("description", "Build and deploy machine learning models");
    record8.set("overview", "ML Engineers develop, train, and deploy machine learning models that solve complex problems. They work with data scientists and engineers to productionize AI solutions.");
    record8.set("averageSalary", 135000);
    record8.set("salaryRange", "{'min': 95000, 'max': 210000}");
    record8.set("jobDemandOutlook", "Growing 36% through 2032, much faster than average");
    record8.set("topPayingStates", ["California", "Washington", "New York", "Massachusetts", "Colorado"]);
    record8.set("roadmap", "{'beginner': {'skills': ['Python', 'ML basics', 'Statistics'], 'projects': ['Iris classification', 'Linear regression'], 'certifications': ['Google ML Crash Course'], 'resources': ['Coursera', 'DataCamp']}, 'intermediate': {'skills': ['TensorFlow/PyTorch', 'Feature engineering', 'Model evaluation'], 'projects': ['Image classification', 'NLP project'], 'certifications': ['TensorFlow Developer Certificate'], 'resources': ['Kaggle', 'Fast.ai']}, 'advanced': {'skills': ['Advanced deep learning', 'Production ML', 'MLOps'], 'projects': ['Production ML system', 'Research paper implementation'], 'certifications': ['AWS Certified Machine Learning Specialty'], 'resources': ['Papers with Code', 'Hugging Face']}}");
    record8.set("skillsRequired", "{'technical': [{'skill': 'Python', 'proficiency': 'Advanced'}, {'skill': 'TensorFlow', 'proficiency': 'Advanced'}, {'skill': 'PyTorch', 'proficiency': 'Advanced'}, {'skill': 'SQL', 'proficiency': 'Intermediate'}], 'soft': ['Problem-solving', 'Research mindset', 'Communication'], 'tools': ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Jupyter'], 'certifications': ['TensorFlow Developer Certificate', 'AWS Certified Machine Learning Specialty']}");
    record8.set("salaryInsights", "{'entry': 95000, 'mid': 135000, 'senior': 210000, 'byState': {'California': 190000, 'Washington': 185000, 'New York': 170000}, 'growthChart': '36% growth through 2032'}");
    record8.set("relatedCareers", ["Data Scientist", "Data Analyst", "Software Engineer"]);
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
    record9.set("name", "Data Scientist");
    record9.set("slug", "data-scientist");
    record9.set("description", "Analyze complex data and build predictive models");
    record9.set("overview", "Data Scientists combine statistics, programming, and domain expertise to extract insights from data and build predictive models. They work on strategic projects that drive business decisions.");
    record9.set("averageSalary", 125000);
    record9.set("salaryRange", "{'min': 85000, 'max': 190000}");
    record9.set("jobDemandOutlook", "Growing 36% through 2032, much faster than average");
    record9.set("topPayingStates", ["California", "New York", "Massachusetts", "Washington", "Colorado"]);
    record9.set("roadmap", "{'beginner': {'skills': ['Python', 'Statistics', 'SQL'], 'projects': ['Data exploration', 'Basic analysis'], 'certifications': ['Google Data Analytics Certificate'], 'resources': ['Coursera', 'DataCamp']}, 'intermediate': {'skills': ['Machine learning', 'Data visualization', 'A/B testing'], 'projects': ['Predictive model', 'Dashboard'], 'certifications': ['Microsoft Certified: Data Scientist'], 'resources': ['Kaggle', 'Udemy']}, 'advanced': {'skills': ['Advanced ML', 'Deep learning', 'Big data'], 'projects': ['Production ML', 'Research'], 'certifications': ['AWS Certified Machine Learning Specialty'], 'resources': ['Papers with Code', 'Hugging Face']}}");
    record9.set("skillsRequired", "{'technical': [{'skill': 'Python', 'proficiency': 'Advanced'}, {'skill': 'R', 'proficiency': 'Advanced'}, {'skill': 'SQL', 'proficiency': 'Advanced'}, {'skill': 'Machine Learning', 'proficiency': 'Advanced'}], 'soft': ['Communication', 'Problem-solving', 'Storytelling'], 'tools': ['Python', 'R', 'SQL', 'Tableau', 'Jupyter'], 'certifications': ['Microsoft Certified: Data Scientist', 'AWS Certified Machine Learning Specialty']}");
    record9.set("salaryInsights", "{'entry': 85000, 'mid': 125000, 'senior': 190000, 'byState': {'California': 170000, 'New York': 160000, 'Massachusetts': 155000}, 'growthChart': '36% growth through 2032'}");
    record9.set("relatedCareers", ["Data Analyst", "Machine Learning Engineer", "Business Analyst"]);
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
    record10.set("name", "Product Manager");
    record10.set("slug", "product-manager");
    record10.set("description", "Guide product strategy and development");
    record10.set("overview", "Product Managers define product vision, strategy, and roadmap. They work with engineering, design, and business teams to deliver products that meet market needs and business goals.");
    record10.set("averageSalary", 130000);
    record10.set("salaryRange", "{'min': 90000, 'max': 200000}");
    record10.set("jobDemandOutlook", "Growing 8% through 2032, as fast as average");
    record10.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record10.set("roadmap", "{'beginner': {'skills': ['Product thinking', 'User research', 'Analytics'], 'projects': ['Feature analysis', 'User interviews'], 'certifications': ['Reforge Product Management'], 'resources': ['Reforge', 'Product School']}, 'intermediate': {'skills': ['Roadmap planning', 'Stakeholder management', 'Metrics'], 'projects': ['Product launch', 'Feature prioritization'], 'certifications': ['Pragmatic Marketing Certified'], 'resources': ['Pragmatic Institute', 'Mind the Product']}, 'advanced': {'skills': ['Strategic planning', 'Business acumen', 'Leadership'], 'projects': ['Product strategy', 'Market expansion'], 'certifications': ['Reforge Advanced Product Management'], 'resources': ['Inspired by Marty Cagan', 'Lean Product Playbook']}}");
    record10.set("skillsRequired", "{'technical': [{'skill': 'Analytics', 'proficiency': 'Advanced'}, {'skill': 'SQL', 'proficiency': 'Intermediate'}, {'skill': 'User research', 'proficiency': 'Advanced'}, {'skill': 'Data interpretation', 'proficiency': 'Advanced'}], 'soft': ['Leadership', 'Communication', 'Strategic thinking'], 'tools': ['Jira', 'Figma', 'Analytics tools', 'SQL'], 'certifications': ['Pragmatic Marketing Certified', 'Reforge Product Management']}");
    record10.set("salaryInsights", "{'entry': 90000, 'mid': 130000, 'senior': 200000, 'byState': {'California': 180000, 'New York': 170000, 'Washington': 160000}, 'growthChart': '8% growth through 2032'}");
    record10.set("relatedCareers", ["UX Designer", "Business Analyst", "Technical Lead"]);
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
    record11.set("name", "UX Designer");
    record11.set("slug", "ux-designer");
    record11.set("description", "Design user experiences for digital products");
    record11.set("overview", "UX Designers create intuitive and engaging user experiences for digital products. They conduct research, create wireframes and prototypes, and collaborate with developers to implement designs.");
    record11.set("averageSalary", 105000);
    record11.set("salaryRange", "{'min': 70000, 'max': 160000}");
    record11.set("jobDemandOutlook", "Growing 13% through 2032, faster than average");
    record11.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record11.set("roadmap", "{'beginner': {'skills': ['Design principles', 'Wireframing', 'User research'], 'projects': ['Portfolio project', 'Redesign exercise'], 'certifications': ['Google UX Design Certificate'], 'resources': ['Interaction Design Foundation', 'Nielsen Norman Group']}, 'intermediate': {'skills': ['Prototyping', 'Usability testing', 'Design systems'], 'projects': ['Mobile app design', 'Web redesign'], 'certifications': ['UX Certification Program'], 'resources': ['Figma', 'Adobe XD']}, 'advanced': {'skills': ['Advanced research', 'Design strategy', 'Leadership'], 'projects': ['Enterprise design system', 'Product strategy'], 'certifications': ['Advanced UX Certification'], 'resources': ['Design of Everyday Things', 'Don Norman']}}");
    record11.set("skillsRequired", "{'technical': [{'skill': 'Figma', 'proficiency': 'Advanced'}, {'skill': 'Adobe XD', 'proficiency': 'Advanced'}, {'skill': 'Prototyping', 'proficiency': 'Advanced'}, {'skill': 'User research', 'proficiency': 'Advanced'}], 'soft': ['Empathy', 'Communication', 'Creativity'], 'tools': ['Figma', 'Adobe XD', 'Sketch', 'Protopie'], 'certifications': ['Google UX Design Certificate', 'Nielsen Norman UX Certification']}");
    record11.set("salaryInsights", "{'entry': 70000, 'mid': 105000, 'senior': 160000, 'byState': {'California': 145000, 'New York': 135000, 'Washington': 130000}, 'growthChart': '13% growth through 2032'}");
    record11.set("relatedCareers", ["Frontend Developer", "Product Manager", "UI Designer"]);
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
    record12.set("overview", "Systems Administrators manage an organization's IT infrastructure, including servers, networks, and user accounts. They ensure systems are secure, reliable, and performing optimally.");
    record12.set("averageSalary", 85000);
    record12.set("salaryRange", "{'min': 60000, 'max': 130000}");
    record12.set("jobDemandOutlook", "Growing 5% through 2032, slower than average");
    record12.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Virginia"]);
    record12.set("roadmap", "{'beginner': {'skills': ['Windows/Linux basics', 'Networking', 'User management'], 'projects': ['User account setup', 'Basic troubleshooting'], 'certifications': ['CompTIA A+'], 'resources': ['CompTIA', 'Linux Academy']}, 'intermediate': {'skills': ['Advanced networking', 'Security', 'Virtualization'], 'projects': ['Network setup', 'Server management'], 'certifications': ['CompTIA Security+'], 'resources': ['Udemy', 'Pluralsight']}, 'advanced': {'skills': ['Enterprise infrastructure', 'Cloud management', 'Disaster recovery'], 'projects': ['Enterprise systems', 'Cloud migration'], 'certifications': ['AWS Certified Solutions Architect'], 'resources': ['AWS docs', 'Microsoft Learn']}}");
    record12.set("skillsRequired", "{'technical': [{'skill': 'Windows Server', 'proficiency': 'Advanced'}, {'skill': 'Linux', 'proficiency': 'Advanced'}, {'skill': 'Networking', 'proficiency': 'Advanced'}, {'skill': 'Active Directory', 'proficiency': 'Advanced'}], 'soft': ['Problem-solving', 'Communication', 'Attention to detail'], 'tools': ['Windows Server', 'Linux', 'Active Directory', 'Virtualization'], 'certifications': ['CompTIA Security+', 'Microsoft Certified: Windows Server Administrator']}");
    record12.set("salaryInsights", "{'entry': 60000, 'mid': 85000, 'senior': 130000, 'byState': {'California': 115000, 'New York': 110000, 'Washington': 105000}, 'growthChart': '5% growth through 2032'}");
    record12.set("relatedCareers", ["Network Engineer", "DevOps Engineer", "Cloud Architect"]);
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
    record13.set("overview", "Network Engineers design, implement, and maintain computer networks. They ensure networks are secure, efficient, and meet organizational requirements.");
    record13.set("averageSalary", 95000);
    record13.set("salaryRange", "{'min': 65000, 'max': 150000}");
    record13.set("jobDemandOutlook", "Growing 5% through 2032, slower than average");
    record13.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Virginia"]);
    record13.set("roadmap", "{'beginner': {'skills': ['Networking basics', 'TCP/IP', 'Routing'], 'projects': ['Network design', 'Basic configuration'], 'certifications': ['CompTIA Network+'], 'resources': ['CompTIA', 'Cisco Learning Network']}, 'intermediate': {'skills': ['Advanced routing', 'Security', 'Switching'], 'projects': ['Enterprise network', 'Security implementation'], 'certifications': ['Cisco CCNA'], 'resources': ['Cisco Learning Network', 'Udemy']}, 'advanced': {'skills': ['Enterprise architecture', 'Security design', 'Cloud networking'], 'projects': ['Large-scale network', 'Security architecture'], 'certifications': ['Cisco CCNP'], 'resources': ['Cisco Learning Network', 'AWS docs']}}");
    record13.set("skillsRequired", "{'technical': [{'skill': 'Cisco IOS', 'proficiency': 'Advanced'}, {'skill': 'TCP/IP', 'proficiency': 'Advanced'}, {'skill': 'Routing/Switching', 'proficiency': 'Advanced'}, {'skill': 'Network Security', 'proficiency': 'Advanced'}], 'soft': ['Problem-solving', 'Communication', 'Attention to detail'], 'tools': ['Cisco IOS', 'Juniper', 'Wireshark', 'GNS3'], 'certifications': ['Cisco CCNA', 'Cisco CCNP']}");
    record13.set("salaryInsights", "{'entry': 65000, 'mid': 95000, 'senior': 150000, 'byState': {'California': 130000, 'New York': 125000, 'Washington': 120000}, 'growthChart': '5% growth through 2032'}");
    record13.set("relatedCareers", ["Systems Administrator", "Security Engineer", "Cloud Architect"]);
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
    record14.set("name", "Security Engineer");
    record14.set("slug", "security-engineer");
    record14.set("description", "Protect systems and data from security threats");
    record14.set("overview", "Security Engineers design and implement security measures to protect organizations from cyber threats. They conduct security assessments, implement security controls, and respond to incidents.");
    record14.set("averageSalary", 115000);
    record14.set("salaryRange", "{'min': 80000, 'max': 180000}");
    record14.set("jobDemandOutlook", "Growing 35% through 2032, much faster than average");
    record14.set("topPayingStates", ["California", "Washington", "New York", "Massachusetts", "Virginia"]);
    record14.set("roadmap", "{'beginner': {'skills': ['Security basics', 'Networking', 'Linux'], 'projects': ['Security audit', 'Vulnerability assessment'], 'certifications': ['CompTIA Security+'], 'resources': ['CompTIA', 'TryHackMe']}, 'intermediate': {'skills': ['Penetration testing', 'Cryptography', 'Incident response'], 'projects': ['Penetration test', 'Security implementation'], 'certifications': ['CEH - Certified Ethical Hacker'], 'resources': ['HackTheBox', 'Udemy']}, 'advanced': {'skills': ['Advanced penetration testing', 'Security architecture', 'Threat intelligence'], 'projects': ['Security strategy', 'Threat analysis'], 'certifications': ['OSCP - Offensive Security Certified Professional'], 'resources': ['Offensive Security', 'SANS']}}");
    record14.set("skillsRequired", "{'technical': [{'skill': 'Penetration Testing', 'proficiency': 'Advanced'}, {'skill': 'Cryptography', 'proficiency': 'Advanced'}, {'skill': 'Network Security', 'proficiency': 'Advanced'}, {'skill': 'Linux', 'proficiency': 'Advanced'}], 'soft': ['Problem-solving', 'Attention to detail', 'Communication'], 'tools': ['Metasploit', 'Burp Suite', 'Wireshark', 'Nmap'], 'certifications': ['CEH - Certified Ethical Hacker', 'OSCP']}");
    record14.set("salaryInsights", "{'entry': 80000, 'mid': 115000, 'senior': 180000, 'byState': {'California': 160000, 'Washington': 155000, 'New York': 145000}, 'growthChart': '35% growth through 2032'}");
    record14.set("relatedCareers", ["Network Engineer", "Systems Administrator", "DevOps Engineer"]);
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
    record15.set("name", "Database Administrator");
    record15.set("slug", "database-administrator");
    record15.set("description", "Manage and optimize databases");
    record15.set("overview", "Database Administrators manage databases, ensuring they are secure, reliable, and performing optimally. They handle backups, recovery, and performance tuning.");
    record15.set("averageSalary", 100000);
    record15.set("salaryRange", "{'min': 70000, 'max': 160000}");
    record15.set("jobDemandOutlook", "Growing 8% through 2032, as fast as average");
    record15.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Virginia"]);
    record15.set("roadmap", "{'beginner': {'skills': ['SQL basics', 'Database design', 'Backup/recovery'], 'projects': ['Database design', 'Backup setup'], 'certifications': ['Oracle Database Associate'], 'resources': ['Oracle University', 'SQL Tutorial']}, 'intermediate': {'skills': ['Advanced SQL', 'Performance tuning', 'Security'], 'projects': ['Performance optimization', 'Security implementation'], 'certifications': ['Oracle Database Professional'], 'resources': ['Oracle docs', 'Udemy']}, 'advanced': {'skills': ['Enterprise databases', 'High availability', 'Cloud databases'], 'projects': ['Enterprise database', 'Cloud migration'], 'certifications': ['Oracle Database Expert'], 'resources': ['Oracle docs', 'AWS docs']}}");
    record15.set("skillsRequired", "{'technical': [{'skill': 'SQL', 'proficiency': 'Advanced'}, {'skill': 'Oracle', 'proficiency': 'Advanced'}, {'skill': 'PostgreSQL', 'proficiency': 'Advanced'}, {'skill': 'Backup/Recovery', 'proficiency': 'Advanced'}], 'soft': ['Problem-solving', 'Attention to detail', 'Communication'], 'tools': ['Oracle', 'PostgreSQL', 'MySQL', 'MongoDB'], 'certifications': ['Oracle Database Professional', 'AWS Certified Database Specialty']}");
    record15.set("salaryInsights", "{'entry': 70000, 'mid': 100000, 'senior': 160000, 'byState': {'California': 140000, 'New York': 135000, 'Washington': 130000}, 'growthChart': '8% growth through 2032'}");
    record15.set("relatedCareers", ["Data Analyst", "Systems Administrator", "DevOps Engineer"]);
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
    record16.set("overview", "Solutions Architects design comprehensive technical solutions that address business requirements. They work with clients and technical teams to implement scalable, secure solutions.");
    record16.set("averageSalary", 140000);
    record16.set("salaryRange", "{'min': 100000, 'max': 210000}");
    record16.set("jobDemandOutlook", "Growing 15% through 2032, faster than average");
    record16.set("topPayingStates", ["California", "Washington", "New York", "Massachusetts", "Virginia"]);
    record16.set("roadmap", "{'beginner': {'skills': ['Cloud basics', 'Architecture patterns', 'Communication'], 'projects': ['Solution design', 'Architecture documentation'], 'certifications': ['AWS Certified Cloud Practitioner'], 'resources': ['AWS Training', 'Azure Learn']}, 'intermediate': {'skills': ['Advanced cloud', 'Security architecture', 'Cost optimization'], 'projects': ['Enterprise solution', 'Migration planning'], 'certifications': ['AWS Solutions Architect Associate'], 'resources': ['AWS docs', 'Azure docs']}, 'advanced': {'skills': ['Enterprise architecture', 'Strategic planning', 'Leadership'], 'projects': ['Enterprise strategy', 'Multi-cloud solutions'], 'certifications': ['AWS Solutions Architect Professional'], 'resources': ['AWS Well-Architected Framework', 'TOGAF']}}");
    record16.set("skillsRequired", "{'technical': [{'skill': 'AWS', 'proficiency': 'Advanced'}, {'skill': 'Azure', 'proficiency': 'Advanced'}, {'skill': 'Architecture design', 'proficiency': 'Advanced'}, {'skill': 'Security', 'proficiency': 'Advanced'}], 'soft': ['Communication', 'Leadership', 'Strategic thinking'], 'tools': ['AWS', 'Azure', 'Visio', 'Lucidchart'], 'certifications': ['AWS Solutions Architect Professional', 'Azure Solutions Architect Expert']}");
    record16.set("salaryInsights", "{'entry': 100000, 'mid': 140000, 'senior': 210000, 'byState': {'California': 190000, 'Washington': 185000, 'New York': 170000}, 'growthChart': '15% growth through 2032'}");
    record16.set("relatedCareers", ["Cloud Architect", "Technical Lead", "DevOps Engineer"]);
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
    record17.set("name", "Technical Lead");
    record17.set("slug", "technical-lead");
    record17.set("description", "Lead technical teams and projects");
    record17.set("overview", "Technical Leads guide development teams, make architectural decisions, and mentor junior developers. They balance technical excellence with project delivery.");
    record17.set("averageSalary", 135000);
    record17.set("salaryRange", "{'min': 95000, 'max': 200000}");
    record17.set("jobDemandOutlook", "Growing 17% through 2032, faster than average");
    record17.set("topPayingStates", ["California", "Washington", "New York", "Massachusetts", "Colorado"]);
    record17.set("roadmap", "{'beginner': {'skills': ['Software engineering', 'Communication', 'Mentoring'], 'projects': ['Code review', 'Team collaboration'], 'certifications': ['AWS Certified Developer'], 'resources': ['Udemy', 'Pluralsight']}, 'intermediate': {'skills': ['Architecture design', 'Project management', 'Leadership'], 'projects': ['Technical strategy', 'Team leadership'], 'certifications': ['AWS Solutions Architect Associate'], 'resources': ['Reforge', 'Coursera']}, 'advanced': {'skills': ['Strategic planning', 'Enterprise architecture', 'Executive communication'], 'projects': ['Enterprise strategy', 'Organizational leadership'], 'certifications': ['AWS Solutions Architect Professional'], 'resources': ['Inspired by Marty Cagan', 'The Phoenix Project']}}");
    record17.set("skillsRequired", "{'technical': [{'skill': 'Software Architecture', 'proficiency': 'Advanced'}, {'skill': 'System Design', 'proficiency': 'Advanced'}, {'skill': 'Code Review', 'proficiency': 'Advanced'}, {'skill': 'DevOps', 'proficiency': 'Intermediate'}], 'soft': ['Leadership', 'Communication', 'Mentoring'], 'tools': ['Git', 'Docker', 'Kubernetes', 'CI/CD'], 'certifications': ['AWS Solutions Architect Associate', 'AWS Solutions Architect Professional']}");
    record17.set("salaryInsights", "{'entry': 95000, 'mid': 135000, 'senior': 200000, 'byState': {'California': 180000, 'Washington': 175000, 'New York': 160000}, 'growthChart': '17% growth through 2032'}");
    record17.set("relatedCareers", ["Software Engineer", "Solutions Architect", "Engineering Manager"]);
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
    record18.set("name", "Engineering Manager");
    record18.set("slug", "engineering-manager");
    record18.set("description", "Manage engineering teams and projects");
    record18.set("overview", "Engineering Managers oversee engineering teams, manage projects, and ensure delivery of quality software. They balance technical knowledge with people management.");
    record18.set("averageSalary", 145000);
    record18.set("salaryRange", "{'min': 105000, 'max': 220000}");
    record18.set("jobDemandOutlook", "Growing 8% through 2032, as fast as average");
    record18.set("topPayingStates", ["California", "Washington", "New York", "Massachusetts", "Colorado"]);
    record18.set("roadmap", "{'beginner': {'skills': ['Software engineering', 'Team management', 'Communication'], 'projects': ['Team leadership', 'Project management'], 'certifications': ['Certified ScrumMaster'], 'resources': ['Scrum.org', 'Coursera']}, 'intermediate': {'skills': ['Strategic planning', 'Budget management', 'Hiring'], 'projects': ['Team scaling', 'Process improvement'], 'certifications': ['Certified Scrum Product Owner'], 'resources': ['Reforge', 'Coursera']}, 'advanced': {'skills': ['Executive leadership', 'Organizational strategy', 'Culture building'], 'projects': ['Organizational leadership', 'Strategic planning'], 'certifications': ['Executive Leadership Program'], 'resources': ['The Effective Manager', 'Radical Candor']}}");
    record18.set("skillsRequired", "{'technical': [{'skill': 'Software Engineering', 'proficiency': 'Advanced'}, {'skill': 'Project Management', 'proficiency': 'Advanced'}, {'skill': 'Agile/Scrum', 'proficiency': 'Advanced'}, {'skill': 'Budget Management', 'proficiency': 'Intermediate'}], 'soft': ['Leadership', 'Communication', 'People management'], 'tools': ['Jira', 'Confluence', 'Slack', 'GitHub'], 'certifications': ['Certified ScrumMaster', 'Certified Scrum Product Owner']}");
    record18.set("salaryInsights", "{'entry': 105000, 'mid': 145000, 'senior': 220000, 'byState': {'California': 200000, 'Washington': 195000, 'New York': 180000}, 'growthChart': '8% growth through 2032'}");
    record18.set("relatedCareers", ["Technical Lead", "Product Manager", "Solutions Architect"]);
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
    record19.set("description", "Test software and ensure quality");
    record19.set("overview", "QA Engineers develop and execute test plans to ensure software quality. They identify bugs, verify fixes, and implement automated testing strategies.");
    record19.set("averageSalary", 85000);
    record19.set("salaryRange", "{'min': 60000, 'max': 130000}");
    record19.set("jobDemandOutlook", "Growing 13% through 2032, faster than average");
    record19.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record19.set("roadmap", "{'beginner': {'skills': ['Testing basics', 'Test planning', 'Bug reporting'], 'projects': ['Manual testing', 'Test case creation'], 'certifications': ['ISTQB Certified Tester'], 'resources': ['ISTQB', 'Udemy']}, 'intermediate': {'skills': ['Automation testing', 'Test frameworks', 'Performance testing'], 'projects': ['Automated test suite', 'Performance testing'], 'certifications': ['ISTQB Advanced Level'], 'resources': ['Selenium', 'Udemy']}, 'advanced': {'skills': ['Advanced automation', 'CI/CD integration', 'Test strategy'], 'projects': ['Enterprise test framework', 'Test strategy'], 'certifications': ['ISTQB Expert Level'], 'resources': ['Selenium', 'Jenkins']}}");
    record19.set("skillsRequired", "{'technical': [{'skill': 'Selenium', 'proficiency': 'Advanced'}, {'skill': 'Python', 'proficiency': 'Intermediate'}, {'skill': 'Test automation', 'proficiency': 'Advanced'}, {'skill': 'SQL', 'proficiency': 'Intermediate'}], 'soft': ['Attention to detail', 'Problem-solving', 'Communication'], 'tools': ['Selenium', 'JUnit', 'TestNG', 'Jira'], 'certifications': ['ISTQB Certified Tester', 'ISTQB Advanced Level']}");
    record19.set("salaryInsights", "{'entry': 60000, 'mid': 85000, 'senior': 130000, 'byState': {'California': 115000, 'New York': 110000, 'Washington': 105000}, 'growthChart': '13% growth through 2032'}");
    record19.set("relatedCareers", ["Software Engineer", "DevOps Engineer", "Technical Lead"]);
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
    record20.set("name", "Business Analyst");
    record20.set("slug", "business-analyst");
    record20.set("description", "Analyze business needs and recommend solutions");
    record20.set("overview", "Business Analysts bridge business and technology, analyzing requirements and recommending solutions. They work with stakeholders to understand needs and drive improvements.");
    record20.set("averageSalary", 90000);
    record20.set("salaryRange", "{'min': 65000, 'max': 140000}");
    record20.set("jobDemandOutlook", "Growing 11% through 2032, faster than average");
    record20.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record20.set("roadmap", "{'beginner': {'skills': ['Business analysis', 'Requirements gathering', 'Documentation'], 'projects': ['Requirements analysis', 'Process documentation'], 'certifications': ['IIBA ECBA'], 'resources': ['IIBA', 'Udemy']}, 'intermediate': {'skills': ['Advanced analysis', 'Stakeholder management', 'Solution design'], 'projects': ['Solution design', 'Process improvement'], 'certifications': ['IIBA CCBA'], 'resources': ['IIBA', 'Coursera']}, 'advanced': {'skills': ['Strategic analysis', 'Enterprise solutions', 'Leadership'], 'projects': ['Enterprise strategy', 'Organizational transformation'], 'certifications': ['IIBA CBAP'], 'resources': ['IIBA', 'Reforge']}}");
    record20.set("skillsRequired", "{'technical': [{'skill': 'SQL', 'proficiency': 'Intermediate'}, {'skill': 'Data analysis', 'proficiency': 'Advanced'}, {'skill': 'Requirements gathering', 'proficiency': 'Advanced'}, {'skill': 'Documentation', 'proficiency': 'Advanced'}], 'soft': ['Communication', 'Problem-solving', 'Stakeholder management'], 'tools': ['Jira', 'Confluence', 'Excel', 'Visio'], 'certifications': ['IIBA CCBA', 'IIBA CBAP']}");
    record20.set("salaryInsights", "{'entry': 65000, 'mid': 90000, 'senior': 140000, 'byState': {'California': 125000, 'New York': 120000, 'Washington': 115000}, 'growthChart': '11% growth through 2032'}");
    record20.set("relatedCareers", ["Product Manager", "Data Analyst", "Solutions Architect"]);
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
    record21.set("name", "DevSecOps Engineer");
    record21.set("slug", "devsecops-engineer");
    record21.set("description", "Integrate security into DevOps processes");
    record21.set("overview", "DevSecOps Engineers embed security practices into the development and operations pipeline. They ensure applications are secure from development through deployment.");
    record21.set("averageSalary", 140000);
    record21.set("salaryRange", "{'min': 100000, 'max': 210000}");
    record21.set("jobDemandOutlook", "Growing 35% through 2032, much faster than average");
    record21.set("topPayingStates", ["California", "Washington", "New York", "Massachusetts", "Virginia"]);
    record21.set("roadmap", "{'beginner': {'skills': ['DevOps basics', 'Security basics', 'CI/CD'], 'projects': ['Secure pipeline setup', 'Security scanning'], 'certifications': ['AWS Certified Security Specialty'], 'resources': ['AWS Training', 'TryHackMe']}, 'intermediate': {'skills': ['Advanced DevOps', 'Security architecture', 'Compliance'], 'projects': ['Secure infrastructure', 'Compliance implementation'], 'certifications': ['Certified Kubernetes Security Specialist'], 'resources': ['CNCF', 'Udemy']}, 'advanced': {'skills': ['Enterprise security', 'Threat modeling', 'Security strategy'], 'projects': ['Enterprise security strategy', 'Zero-trust architecture'], 'certifications': ['CISSP'], 'resources': ['SANS', 'Offensive Security']}}");
    record21.set("skillsRequired", "{'technical': [{'skill': 'Docker', 'proficiency': 'Advanced'}, {'skill': 'Kubernetes', 'proficiency': 'Advanced'}, {'skill': 'Security scanning', 'proficiency': 'Advanced'}, {'skill': 'CI/CD', 'proficiency': 'Advanced'}], 'soft': ['Problem-solving', 'Communication', 'Security mindset'], 'tools': ['Docker', 'Kubernetes', 'Jenkins', 'SonarQube', 'Snyk'], 'certifications': ['AWS Certified Security Specialty', 'Certified Kubernetes Security Specialist']}");
    record21.set("salaryInsights", "{'entry': 100000, 'mid': 140000, 'senior': 210000, 'byState': {'California': 190000, 'Washington': 185000, 'New York': 170000}, 'growthChart': '35% growth through 2032'}");
    record21.set("relatedCareers", ["DevOps Engineer", "Security Engineer", "Cloud Architect"]);
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
    record22.set("name", "Site Reliability Engineer");
    record22.set("slug", "site-reliability-engineer");
    record22.set("description", "Ensure system reliability and performance");
    record22.set("overview", "SREs apply software engineering principles to operations, focusing on reliability, scalability, and performance. They automate operational tasks and improve system resilience.");
    record22.set("averageSalary", 135000);
    record22.set("salaryRange", "{'min': 95000, 'max': 210000}");
    record22.set("jobDemandOutlook", "Growing 23% through 2032, much faster than average");
    record22.set("topPayingStates", ["California", "Washington", "New York", "Massachusetts", "Colorado"]);
    record22.set("roadmap", "{'beginner': {'skills': ['Linux', 'Networking', 'Monitoring'], 'projects': ['Monitoring setup', 'Alert configuration'], 'certifications': ['Linux+'], 'resources': ['Linux Academy', 'Udemy']}, 'intermediate': {'skills': ['Advanced Linux', 'Kubernetes', 'Observability'], 'projects': ['Infrastructure automation', 'Observability implementation'], 'certifications': ['CKA'], 'resources': ['Kubernetes.io', 'Prometheus docs']}, 'advanced': {'skills': ['Advanced Kubernetes', 'Distributed systems', 'Chaos engineering'], 'projects': ['Resilient infrastructure', 'Chaos testing'], 'certifications': ['CKAD'], 'resources': ['Gremlin', 'Chaos Mesh']}}");
    record22.set("skillsRequired", "{'technical': [{'skill': 'Linux', 'proficiency': 'Advanced'}, {'skill': 'Kubernetes', 'proficiency': 'Advanced'}, {'skill': 'Monitoring', 'proficiency': 'Advanced'}, {'skill': 'Python', 'proficiency': 'Intermediate'}], 'soft': ['Problem-solving', 'Communication', 'Automation mindset'], 'tools': ['Kubernetes', 'Prometheus', 'Grafana', 'ELK Stack'], 'certifications': ['CKA', 'CKAD']}");
    record22.set("salaryInsights", "{'entry': 95000, 'mid': 135000, 'senior': 210000, 'byState': {'California': 190000, 'Washington': 185000, 'New York': 170000}, 'growthChart': '23% growth through 2032'}");
    record22.set("relatedCareers", ["DevOps Engineer", "Cloud Architect", "Systems Administrator"]);
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
    record23.set("name", "AI/ML Researcher");
    record23.set("slug", "ai-ml-researcher");
    record23.set("description", "Research and develop advanced AI/ML technologies");
    record23.set("overview", "AI/ML Researchers advance the field of artificial intelligence and machine learning through research and experimentation. They publish papers, develop novel algorithms, and push the boundaries of AI.");
    record23.set("averageSalary", 150000);
    record23.set("salaryRange", "{'min': 110000, 'max': 250000}");
    record23.set("jobDemandOutlook", "Growing 36% through 2032, much faster than average");
    record23.set("topPayingStates", ["California", "Washington", "New York", "Massachusetts", "Colorado"]);
    record23.set("roadmap", "{'beginner': {'skills': ['Python', 'ML basics', 'Research methods'], 'projects': ['Research paper review', 'Basic experiments'], 'certifications': ['Google ML Crash Course'], 'resources': ['Coursera', 'arXiv']}, 'intermediate': {'skills': ['Advanced ML', 'Deep learning', 'Research design'], 'projects': ['Novel algorithm', 'Research paper'], 'certifications': ['TensorFlow Advanced'], 'resources': ['Papers with Code', 'Hugging Face']}, 'advanced': {'skills': ['Cutting-edge research', 'Publication', 'Leadership'], 'projects': ['Groundbreaking research', 'Industry impact'], 'certifications': ['PhD in ML/AI'], 'resources': ['NeurIPS', 'ICML']}}");
    record23.set("skillsRequired", "{'technical': [{'skill': 'Python', 'proficiency': 'Advanced'}, {'skill': 'TensorFlow', 'proficiency': 'Advanced'}, {'skill': 'PyTorch', 'proficiency': 'Advanced'}, {'skill': 'Research methodology', 'proficiency': 'Advanced'}], 'soft': ['Research mindset', 'Communication', 'Creativity'], 'tools': ['Python', 'TensorFlow', 'PyTorch', 'Jupyter'], 'certifications': ['PhD in Machine Learning', 'Advanced TensorFlow']}");
    record23.set("salaryInsights", "{'entry': 110000, 'mid': 150000, 'senior': 250000, 'byState': {'California': 220000, 'Washington': 215000, 'New York': 200000}, 'growthChart': '36% growth through 2032'}");
    record23.set("relatedCareers", ["Machine Learning Engineer", "Data Scientist", "Software Engineer"]);
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
    record24.set("description", "Develop blockchain and cryptocurrency applications");
    record24.set("overview", "Blockchain Developers create decentralized applications and smart contracts. They work with blockchain technologies like Ethereum and Solidity to build secure, transparent systems.");
    record24.set("averageSalary", 125000);
    record24.set("salaryRange", "{'min': 85000, 'max': 200000}");
    record24.set("jobDemandOutlook", "Growing 15% through 2032, faster than average");
    record24.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record24.set("roadmap", "{'beginner': {'skills': ['Solidity basics', 'Blockchain concepts', 'Web3.js'], 'projects': ['Simple smart contract', 'Token creation'], 'certifications': ['Ethereum Developer Certification'], 'resources': ['Ethereum.org', 'CryptoZombies']}, 'intermediate': {'skills': ['Advanced Solidity', 'DeFi protocols', 'Security'], 'projects': ['DeFi application', 'NFT contract'], 'certifications': ['Certified Blockchain Developer'], 'resources': ['Hardhat', 'OpenZeppelin']}, 'advanced': {'skills': ['Advanced security', 'Protocol design', 'Optimization'], 'projects': ['Production DeFi', 'Protocol development'], 'certifications': ['Advanced Blockchain Certification'], 'resources': ['Ethereum research', 'Protocol papers']}}");
    record24.set("skillsRequired", "{'technical': [{'skill': 'Solidity', 'proficiency': 'Advanced'}, {'skill': 'JavaScript', 'proficiency': 'Advanced'}, {'skill': 'Web3.js', 'proficiency': 'Advanced'}, {'skill': 'Smart contracts', 'proficiency': 'Advanced'}], 'soft': ['Problem-solving', 'Security mindset', 'Innovation'], 'tools': ['Solidity', 'Hardhat', 'Truffle', 'OpenZeppelin'], 'certifications': ['Ethereum Developer Certification', 'Certified Blockchain Developer']}");
    record24.set("salaryInsights", "{'entry': 85000, 'mid': 125000, 'senior': 200000, 'byState': {'California': 180000, 'New York': 170000, 'Washington': 160000}, 'growthChart': '15% growth through 2032'}");
    record24.set("relatedCareers", ["Software Engineer", "Full Stack Developer", "Security Engineer"]);
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
    record25.set("name", "IoT Developer");
    record25.set("slug", "iot-developer");
    record25.set("description", "Develop Internet of Things applications");
    record25.set("overview", "IoT Developers create applications for connected devices and sensors. They work with embedded systems, cloud platforms, and real-time data processing.");
    record25.set("averageSalary", 110000);
    record25.set("salaryRange", "{'min': 75000, 'max': 170000}");
    record25.set("jobDemandOutlook", "Growing 18% through 2032, faster than average");
    record25.set("topPayingStates", ["California", "Washington", "New York", "Massachusetts", "Colorado"]);
    record25.set("roadmap", "{'beginner': {'skills': ['Embedded systems', 'Arduino/Raspberry Pi', 'C/C++'], 'projects': ['Simple IoT device', 'Sensor integration'], 'certifications': ['Arduino Certified'], 'resources': ['Arduino.cc', 'Adafruit']}, 'intermediate': {'skills': ['Advanced embedded', 'IoT protocols', 'Cloud integration'], 'projects': ['Connected device', 'IoT platform'], 'certifications': ['AWS Certified IoT Specialist'], 'resources': ['AWS IoT', 'Azure IoT']}, 'advanced': {'skills': ['Advanced IoT architecture', 'Edge computing', 'Security'], 'projects': ['Enterprise IoT', 'Edge AI'], 'certifications': ['AWS Certified IoT Specialist Advanced'], 'resources': ['AWS IoT docs', 'Edge computing research']}}");
    record25.set("skillsRequired", "{'technical': [{'skill': 'C/C++', 'proficiency': 'Advanced'}, {'skill': 'Python', 'proficiency': 'Advanced'}, {'skill': 'IoT protocols', 'proficiency': 'Advanced'}, {'skill': 'Cloud platforms', 'proficiency': 'Intermediate'}], 'soft': ['Problem-solving', 'Hardware thinking', 'Communication'], 'tools': ['Arduino', 'Raspberry Pi', 'MQTT', 'AWS IoT'], 'certifications': ['Arduino Certified', 'AWS Certified IoT Specialist']}");
    record25.set("salaryInsights", "{'entry': 75000, 'mid': 110000, 'senior': 170000, 'byState': {'California': 155000, 'Washington': 150000, 'New York': 140000}, 'growthChart': '18% growth through 2032'}");
    record25.set("relatedCareers", ["Embedded Systems Engineer", "Software Engineer", "DevOps Engineer"]);
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
    record26.set("name", "Game Developer");
    record26.set("slug", "game-developer");
    record26.set("description", "Develop video games and interactive experiences");
    record26.set("overview", "Game Developers create video games and interactive entertainment. They work with game engines, graphics, physics, and gameplay mechanics.");
    record26.set("averageSalary", 95000);
    record26.set("salaryRange", "{'min': 65000, 'max': 150000}");
    record26.set("jobDemandOutlook", "Growing 13% through 2032, faster than average");
    record26.set("topPayingStates", ["California", "Washington", "New York", "Massachusetts", "Colorado"]);
    record26.set("roadmap", "{'beginner': {'skills': ['Game engine basics', 'C#/C++', 'Game design'], 'projects': ['Simple 2D game', 'Game prototype'], 'certifications': ['Unity Certified Associate'], 'resources': ['Unity Learn', 'Unreal Engine']}, 'intermediate': {'skills': ['Advanced game engine', 'Graphics programming', 'Networking'], 'projects': ['3D game', 'Multiplayer game'], 'certifications': ['Unity Certified Professional'], 'resources': ['Unreal Engine docs', 'Game Dev Stack Exchange']}, 'advanced': {'skills': ['Advanced graphics', 'AI for games', 'Optimization'], 'projects': ['AAA game', 'Game engine development'], 'certifications': ['Advanced Game Development'], 'resources': ['Game Engine Architecture', 'Real-Time Rendering']}}");
    record26.set("skillsRequired", "{'technical': [{'skill': 'C#', 'proficiency': 'Advanced'}, {'skill': 'C++', 'proficiency': 'Advanced'}, {'skill': 'Unity', 'proficiency': 'Advanced'}, {'skill': 'Unreal Engine', 'proficiency': 'Intermediate'}], 'soft': ['Creativity', 'Problem-solving', 'Teamwork'], 'tools': ['Unity', 'Unreal Engine', 'Blender', 'Git'], 'certifications': ['Unity Certified Professional', 'Unreal Engine Certification']}");
    record26.set("salaryInsights", "{'entry': 65000, 'mid': 95000, 'senior': 150000, 'byState': {'California': 135000, 'Washington': 130000, 'New York': 120000}, 'growthChart': '13% growth through 2032'}");
    record26.set("relatedCareers", ["Software Engineer", "Graphics Programmer", "UI Designer"]);
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
    record27.set("name", "Data Engineer");
    record27.set("slug", "data-engineer");
    record27.set("description", "Build data infrastructure and pipelines");
    record27.set("overview", "Data Engineers design and build systems for collecting, storing, and processing large amounts of data. They create data pipelines that enable data scientists and analysts to work effectively.");
    record27.set("averageSalary", 120000);
    record27.set("salaryRange", "{'min': 85000, 'max': 190000}");
    record27.set("jobDemandOutlook", "Growing 36% through 2032, much faster than average");
    record27.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record27.set("roadmap", "{'beginner': {'skills': ['SQL', 'Python', 'Data basics'], 'projects': ['Simple ETL', 'Data pipeline'], 'certifications': ['Google Cloud Data Engineer'], 'resources': ['DataCamp', 'Coursera']}, 'intermediate': {'skills': ['Advanced SQL', 'Spark', 'Data warehousing'], 'projects': ['Complex ETL', 'Data warehouse'], 'certifications': ['AWS Certified Data Analytics'], 'resources': ['Databricks', 'Udemy']}, 'advanced': {'skills': ['Advanced Spark', 'Streaming', 'Big data architecture'], 'projects': ['Real-time pipeline', 'Data lake'], 'certifications': ['Databricks Certified Data Engineer'], 'resources': ['Spark docs', 'Kafka docs']}}");
    record27.set("skillsRequired", "{'technical': [{'skill': 'SQL', 'proficiency': 'Advanced'}, {'skill': 'Python', 'proficiency': 'Advanced'}, {'skill': 'Spark', 'proficiency': 'Advanced'}, {'skill': 'Hadoop', 'proficiency': 'Intermediate'}], 'soft': ['Problem-solving', 'Communication', 'Attention to detail'], 'tools': ['Python', 'SQL', 'Spark', 'Hadoop', 'Kafka'], 'certifications': ['AWS Certified Data Analytics', 'Databricks Certified Data Engineer']}");
    record27.set("salaryInsights", "{'entry': 85000, 'mid': 120000, 'senior': 190000, 'byState': {'California': 170000, 'New York': 160000, 'Washington': 155000}, 'growthChart': '36% growth through 2032'}");
    record27.set("relatedCareers", ["Data Scientist", "Data Analyst", "Software Engineer"]);
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
    record28.set("name", "Cloud Security Engineer");
    record28.set("slug", "cloud-security-engineer");
    record28.set("description", "Secure cloud infrastructure and applications");
    record28.set("overview", "Cloud Security Engineers design and implement security measures for cloud environments. They ensure cloud infrastructure is protected from threats and compliant with regulations.");
    record28.set("averageSalary", 130000);
    record28.set("salaryRange", "{'min': 95000, 'max': 200000}");
    record28.set("jobDemandOutlook", "Growing 35% through 2032, much faster than average");
    record28.set("topPayingStates", ["California", "Washington", "New York", "Massachusetts", "Virginia"]);
    record28.set("roadmap", "{'beginner': {'skills': ['Cloud basics', 'Security basics', 'Networking'], 'projects': ['Cloud security audit', 'Security setup'], 'certifications': ['AWS Certified Security Specialty'], 'resources': ['AWS Training', 'Azure Security']}, 'intermediate': {'skills': ['Advanced cloud security', 'Compliance', 'Incident response'], 'projects': ['Security architecture', 'Compliance implementation'], 'certifications': ['Certified Cloud Security Professional'], 'resources': ['CCSK', 'Udemy']}, 'advanced': {'skills': ['Enterprise security', 'Threat modeling', 'Zero-trust'], 'projects': ['Enterprise security strategy', 'Zero-trust architecture'], 'certifications': ['CISSP'], 'resources': ['SANS', 'Offensive Security']}}");
    record28.set("skillsRequired", "{'technical': [{'skill': 'AWS', 'proficiency': 'Advanced'}, {'skill': 'Azure', 'proficiency': 'Advanced'}, {'skill': 'Security', 'proficiency': 'Advanced'}, {'skill': 'Networking', 'proficiency': 'Advanced'}], 'soft': ['Problem-solving', 'Communication', 'Security mindset'], 'tools': ['AWS', 'Azure', 'Terraform', 'Vault'], 'certifications': ['AWS Certified Security Specialty', 'Certified Cloud Security Professional']}");
    record28.set("salaryInsights", "{'entry': 95000, 'mid': 130000, 'senior': 200000, 'byState': {'California': 180000, 'Washington': 175000, 'New York': 160000}, 'growthChart': '35% growth through 2032'}");
    record28.set("relatedCareers", ["Cloud Architect", "Security Engineer", "DevOps Engineer"]);
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
    record29.set("name", "Embedded Systems Engineer");
    record29.set("slug", "embedded-systems-engineer");
    record29.set("description", "Develop embedded systems and firmware");
    record29.set("overview", "Embedded Systems Engineers design and develop firmware and software for embedded devices. They work with microcontrollers, real-time systems, and hardware integration.");
    record29.set("averageSalary", 105000);
    record29.set("salaryRange", "{'min': 75000, 'max': 160000}");
    record29.set("jobDemandOutlook", "Growing 8% through 2032, as fast as average");
    record29.set("topPayingStates", ["California", "Washington", "New York", "Massachusetts", "Colorado"]);
    record29.set("roadmap", "{'beginner': {'skills': ['C/C++', 'Microcontrollers', 'Digital electronics'], 'projects': ['Simple firmware', 'Microcontroller project'], 'certifications': ['Embedded Systems Basics'], 'resources': ['Arduino', 'STM32']}, 'intermediate': {'skills': ['Advanced C/C++', 'Real-time systems', 'Hardware integration'], 'projects': ['Complex firmware', 'Hardware integration'], 'certifications': ['Certified Embedded Systems Engineer'], 'resources': ['FreeRTOS', 'RTOS']}, 'advanced': {'skills': ['Advanced firmware', 'Optimization', 'Security'], 'projects': ['Production firmware', 'Secure systems'], 'certifications': ['Advanced Embedded Systems'], 'resources': ['Embedded Systems Design', 'Real-Time Systems']}}");
    record29.set("skillsRequired", "{'technical': [{'skill': 'C/C++', 'proficiency': 'Advanced'}, {'skill': 'Assembly', 'proficiency': 'Advanced'}, {'skill': 'Microcontrollers', 'proficiency': 'Advanced'}, {'skill': 'RTOS', 'proficiency': 'Intermediate'}], 'soft': ['Problem-solving', 'Attention to detail', 'Hardware thinking'], 'tools': ['C/C++', 'ARM', 'STM32', 'RTOS'], 'certifications': ['Certified Embedded Systems Engineer', 'ARM Cortex Certification']}");
    record29.set("salaryInsights", "{'entry': 75000, 'mid': 105000, 'senior': 160000, 'byState': {'California': 145000, 'Washington': 140000, 'New York': 130000}, 'growthChart': '8% growth through 2032'}");
    record29.set("relatedCareers", ["Software Engineer", "IoT Developer", "Hardware Engineer"]);
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
    record30.set("name", "Graphics Programmer");
    record30.set("slug", "graphics-programmer");
    record30.set("description", "Develop graphics and rendering systems");
    record30.set("overview", "Graphics Programmers create graphics engines and rendering systems for games and applications. They work with GPUs, shaders, and advanced graphics techniques.");
    record30.set("averageSalary", 115000);
    record30.set("salaryRange", "{'min': 80000, 'max': 180000}");
    record30.set("jobDemandOutlook", "Growing 13% through 2032, faster than average");
    record30.set("topPayingStates", ["California", "Washington", "New York", "Massachusetts", "Colorado"]);
    record30.set("roadmap", "{'beginner': {'skills': ['C++', 'OpenGL/DirectX basics', 'Linear algebra'], 'projects': ['Simple graphics app', 'Shader development'], 'certifications': ['Graphics Programming Basics'], 'resources': ['LearnOpenGL', 'DirectX docs']}, 'intermediate': {'skills': ['Advanced graphics', 'GPU optimization', 'Rendering techniques'], 'projects': ['Graphics engine', 'Advanced rendering'], 'certifications': ['Advanced Graphics Programming'], 'resources': ['Real-Time Rendering', 'GPU Gems']}, 'advanced': {'skills': ['Cutting-edge graphics', 'Ray tracing', 'Advanced optimization'], 'projects': ['Production graphics engine', 'Research'], 'certifications': ['Advanced Graphics Certification'], 'resources': ['NVIDIA research', 'Graphics research papers']}}");
    record30.set("skillsRequired", "{'technical': [{'skill': 'C++', 'proficiency': 'Advanced'}, {'skill': 'OpenGL', 'proficiency': 'Advanced'}, {'skill': 'DirectX', 'proficiency': 'Advanced'}, {'skill': 'GLSL/HLSL', 'proficiency': 'Advanced'}], 'soft': ['Problem-solving', 'Creativity', 'Attention to detail'], 'tools': ['C++', 'OpenGL', 'DirectX', 'GLSL'], 'certifications': ['Advanced Graphics Programming', 'NVIDIA Certification']}");
    record30.set("salaryInsights", "{'entry': 80000, 'mid': 115000, 'senior': 180000, 'byState': {'California': 160000, 'Washington': 155000, 'New York': 145000}, 'growthChart': '13% growth through 2032'}");
    record30.set("relatedCareers", ["Game Developer", "Software Engineer", "VR Developer"]);
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
    record31.set("name", "VR/AR Developer");
    record31.set("slug", "vr-ar-developer");
    record31.set("description", "Develop virtual and augmented reality applications");
    record31.set("overview", "VR/AR Developers create immersive experiences using virtual and augmented reality technologies. They work with VR/AR platforms, 3D graphics, and spatial computing.");
    record31.set("averageSalary", 110000);
    record31.set("salaryRange", "{'min': 75000, 'max': 170000}");
    record31.set("jobDemandOutlook", "Growing 18% through 2032, faster than average");
    record31.set("topPayingStates", ["California", "Washington", "New York", "Massachusetts", "Colorado"]);
    record31.set("roadmap", "{'beginner': {'skills': ['Unity/Unreal', 'C#/C++', '3D basics'], 'projects': ['Simple VR app', 'AR experience'], 'certifications': ['Unity VR Developer'], 'resources': ['Unity Learn', 'Unreal Engine']}, 'intermediate': {'skills': ['Advanced VR/AR', '3D graphics', 'Interaction design'], 'projects': ['Complex VR app', 'AR application'], 'certifications': ['Advanced VR Development'], 'resources': ['Unreal Engine docs', 'VR Best Practices']}, 'advanced': {'skills': ['Advanced graphics', 'Optimization', 'Spatial computing'], 'projects': ['Production VR/AR', 'Cutting-edge experience'], 'certifications': ['Advanced VR/AR Certification'], 'resources': ['VR research', 'Spatial computing papers']}}");
    record31.set("skillsRequired", "{'technical': [{'skill': 'C#', 'proficiency': 'Advanced'}, {'skill': 'C++', 'proficiency': 'Advanced'}, {'skill': 'Unity', 'proficiency': 'Advanced'}, {'skill': '3D graphics', 'proficiency': 'Advanced'}], 'soft': ['Creativity', 'Problem-solving', 'User empathy'], 'tools': ['Unity', 'Unreal Engine', 'Blender', 'Oculus SDK'], 'certifications': ['Unity VR Developer', 'Advanced VR Development']}");
    record31.set("salaryInsights", "{'entry': 75000, 'mid': 110000, 'senior': 170000, 'byState': {'California': 155000, 'Washington': 150000, 'New York': 140000}, 'growthChart': '18% growth through 2032'}");
    record31.set("relatedCareers", ["Game Developer", "Graphics Programmer", "Software Engineer"]);
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
    record32.set("name", "NLP Engineer");
    record32.set("slug", "nlp-engineer");
    record32.set("description", "Develop natural language processing systems");
    record32.set("overview", "NLP Engineers build systems that understand and process human language. They work with language models, text analysis, and conversational AI.");
    record32.set("averageSalary", 130000);
    record32.set("salaryRange", "{'min': 95000, 'max': 200000}");
    record32.set("jobDemandOutlook", "Growing 36% through 2032, much faster than average");
    record32.set("topPayingStates", ["California", "Washington", "New York", "Massachusetts", "Colorado"]);
    record32.set("roadmap", "{'beginner': {'skills': ['Python', 'NLP basics', 'Text processing'], 'projects': ['Text classification', 'Sentiment analysis'], 'certifications': ['Google NLP Basics'], 'resources': ['Coursera', 'DataCamp']}, 'intermediate': {'skills': ['Advanced NLP', 'Transformers', 'Language models'], 'projects': ['Chatbot', 'Named entity recognition'], 'certifications': ['Advanced NLP Certification'], 'resources': ['Hugging Face', 'Udemy']}, 'advanced': {'skills': ['Cutting-edge NLP', 'Large language models', 'Research'], 'projects': ['Production NLP system', 'Research'], 'certifications': ['Advanced NLP Research'], 'resources': ['Papers with Code', 'NeurIPS']}}");
    record32.set("skillsRequired", "{'technical': [{'skill': 'Python', 'proficiency': 'Advanced'}, {'skill': 'PyTorch', 'proficiency': 'Advanced'}, {'skill': 'Transformers', 'proficiency': 'Advanced'}, {'skill': 'NLP', 'proficiency': 'Advanced'}], 'soft': ['Problem-solving', 'Research mindset', 'Communication'], 'tools': ['Python', 'PyTorch', 'Hugging Face', 'NLTK'], 'certifications': ['Advanced NLP Certification', 'Hugging Face Certification']}");
    record32.set("salaryInsights", "{'entry': 95000, 'mid': 130000, 'senior': 200000, 'byState': {'California': 180000, 'Washington': 175000, 'New York': 160000}, 'growthChart': '36% growth through 2032'}");
    record32.set("relatedCareers", ["Machine Learning Engineer", "Data Scientist", "AI/ML Researcher"]);
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
    record33.set("name", "Computer Vision Engineer");
    record33.set("slug", "computer-vision-engineer");
    record33.set("description", "Develop computer vision and image processing systems");
    record33.set("overview", "Computer Vision Engineers build systems that understand and process images and video. They work with deep learning, image processing, and visual recognition.");
    record33.set("averageSalary", 130000);
    record33.set("salaryRange", "{'min': 95000, 'max': 200000}");
    record33.set("jobDemandOutlook", "Growing 36% through 2032, much faster than average");
    record33.set("topPayingStates", ["California", "Washington", "New York", "Massachusetts", "Colorado"]);
    record33.set("roadmap", "{'beginner': {'skills': ['Python', 'OpenCV', 'Image basics'], 'projects': ['Image classification', 'Object detection'], 'certifications': ['Google Computer Vision Basics'], 'resources': ['Coursera', 'OpenCV docs']}, 'intermediate': {'skills': ['Advanced CV', 'Deep learning', 'CNN'], 'projects': ['Face recognition', 'Video analysis'], 'certifications': ['Advanced CV Certification'], 'resources': ['Udemy', 'Fast.ai']}, 'advanced': {'skills': ['Cutting-edge CV', '3D vision', 'Research'], 'projects': ['Production CV system', 'Research'], 'certifications': ['Advanced CV Research'], 'resources': ['Papers with Code', 'CVPR']}}");
    record33.set("skillsRequired", "{'technical': [{'skill': 'Python', 'proficiency': 'Advanced'}, {'skill': 'OpenCV', 'proficiency': 'Advanced'}, {'skill': 'TensorFlow', 'proficiency': 'Advanced'}, {'skill': 'PyTorch', 'proficiency': 'Advanced'}], 'soft': ['Problem-solving', 'Research mindset', 'Communication'], 'tools': ['Python', 'OpenCV', 'TensorFlow', 'PyTorch'], 'certifications': ['Advanced CV Certification', 'TensorFlow Certification']}");
    record33.set("salaryInsights", "{'entry': 95000, 'mid': 130000, 'senior': 200000, 'byState': {'California': 180000, 'Washington': 175000, 'New York': 160000}, 'growthChart': '36% growth through 2032'}");
    record33.set("relatedCareers", ["Machine Learning Engineer", "Data Scientist", "AI/ML Researcher"]);
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
    record34.set("name", "Cybersecurity Analyst");
    record34.set("slug", "cybersecurity-analyst");
    record34.set("description", "Monitor and protect against cyber threats");
    record34.set("overview", "Cybersecurity Analysts monitor systems for security threats, investigate incidents, and implement protective measures. They work with security tools and threat intelligence.");
    record34.set("averageSalary", 105000);
    record34.set("salaryRange", "{'min': 75000, 'max': 160000}");
    record34.set("jobDemandOutlook", "Growing 35% through 2032, much faster than average");
    record34.set("topPayingStates", ["California", "Washington", "New York", "Massachusetts", "Virginia"]);
    record34.set("roadmap", "{'beginner': {'skills': ['Security basics', 'Networking', 'Linux'], 'projects': ['Security audit', 'Threat analysis'], 'certifications': ['CompTIA Security+'], 'resources': ['CompTIA', 'TryHackMe']}, 'intermediate': {'skills': ['Advanced security', 'Incident response', 'Threat intelligence'], 'projects': ['Incident investigation', 'Threat analysis'], 'certifications': ['CEH - Certified Ethical Hacker'], 'resources': ['HackTheBox', 'Udemy']}, 'advanced': {'skills': ['Advanced incident response', 'Threat hunting', 'Forensics'], 'projects': ['Threat hunting', 'Forensic analysis'], 'certifications': ['GCIH - GIAC Certified Incident Handler'], 'resources': ['SANS', 'Offensive Security']}}");
    record34.set("skillsRequired", "{'technical': [{'skill': 'Network security', 'proficiency': 'Advanced'}, {'skill': 'Incident response', 'proficiency': 'Advanced'}, {'skill': 'Threat analysis', 'proficiency': 'Advanced'}, {'skill': 'Linux', 'proficiency': 'Intermediate'}], 'soft': ['Problem-solving', 'Attention to detail', 'Communication'], 'tools': ['Wireshark', 'Splunk', 'Metasploit', 'Nmap'], 'certifications': ['CEH - Certified Ethical Hacker', 'GCIH']}");
    record34.set("salaryInsights", "{'entry': 75000, 'mid': 105000, 'senior': 160000, 'byState': {'California': 145000, 'Washington': 140000, 'New York': 130000}, 'growthChart': '35% growth through 2032'}");
    record34.set("relatedCareers", ["Security Engineer", "DevSecOps Engineer", "Network Engineer"]);
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
    record35.set("name", "IT Project Manager");
    record35.set("slug", "it-project-manager");
    record35.set("description", "Manage IT projects and teams");
    record35.set("overview", "IT Project Managers oversee technology projects, managing budgets, timelines, and teams. They ensure projects are delivered on time and within scope.");
    record35.set("averageSalary", 110000);
    record35.set("salaryRange", "{'min': 80000, 'max': 170000}");
    record35.set("jobDemandOutlook", "Growing 8% through 2032, as fast as average");
    record35.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record35.set("roadmap", "{'beginner': {'skills': ['Project management basics', 'Agile', 'Communication'], 'projects': ['Small project management', 'Team coordination'], 'certifications': ['Certified ScrumMaster'], 'resources': ['Scrum.org', 'Coursera']}, 'intermediate': {'skills': ['Advanced project management', 'Budget management', 'Risk management'], 'projects': ['Large project management', 'Portfolio management'], 'certifications': ['PMP - Project Management Professional'], 'resources': ['PMI', 'Udemy']}, 'advanced': {'skills': ['Strategic planning', 'Executive leadership', 'Organizational management'], 'projects': ['Enterprise project management', 'Strategic planning'], 'certifications': ['Program Management Professional'], 'resources': ['PMI', 'Reforge']}}");
    record35.set("skillsRequired", "{'technical': [{'skill': 'Project management', 'proficiency': 'Advanced'}, {'skill': 'Agile/Scrum', 'proficiency': 'Advanced'}, {'skill': 'Budget management', 'proficiency': 'Advanced'}, {'skill': 'Risk management', 'proficiency': 'Advanced'}], 'soft': ['Leadership', 'Communication', 'Problem-solving'], 'tools': ['Jira', 'Asana', 'Microsoft Project', 'Confluence'], 'certifications': ['PMP - Project Management Professional', 'Certified ScrumMaster']}");
    record35.set("salaryInsights", "{'entry': 80000, 'mid': 110000, 'senior': 170000, 'byState': {'California': 155000, 'New York': 150000, 'Washington': 145000}, 'growthChart': '8% growth through 2032'}");
    record35.set("relatedCareers", ["Product Manager", "Technical Lead", "Engineering Manager"]);
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
    record36.set("description", "Design and develop APIs");
    record36.set("overview", "API Developers design and build APIs that enable communication between applications. They focus on scalability, security, and developer experience.");
    record36.set("averageSalary", 115000);
    record36.set("salaryRange", "{'min': 80000, 'max': 170000}");
    record36.set("jobDemandOutlook", "Growing 17% through 2032, faster than average");
    record36.set("topPayingStates", ["California", "Washington", "New York", "Massachusetts", "Colorado"]);
    record36.set("roadmap", "{'beginner': {'skills': ['REST API basics', 'HTTP', 'JSON'], 'projects': ['Simple API', 'API documentation'], 'certifications': ['API Design Basics'], 'resources': ['Postman', 'Swagger']}, 'intermediate': {'skills': ['Advanced REST', 'GraphQL', 'API security'], 'projects': ['Complex API', 'GraphQL API'], 'certifications': ['Advanced API Design'], 'resources': ['Udemy', 'Pluralsight']}, 'advanced': {'skills': ['API architecture', 'Microservices', 'API governance'], 'projects': ['API platform', 'API ecosystem'], 'certifications': ['Advanced API Architecture'], 'resources': ['API Design Patterns', 'Microservices Patterns']}}");
    record36.set("skillsRequired", "{'technical': [{'skill': 'REST API', 'proficiency': 'Advanced'}, {'skill': 'GraphQL', 'proficiency': 'Advanced'}, {'skill': 'Node.js', 'proficiency': 'Advanced'}, {'skill': 'SQL', 'proficiency': 'Intermediate'}], 'soft': ['Communication', 'Problem-solving', 'Documentation'], 'tools': ['Postman', 'Swagger', 'GraphQL', 'Node.js'], 'certifications': ['Advanced API Design', 'AWS Certified Developer']}");
    record36.set("salaryInsights", "{'entry': 80000, 'mid': 115000, 'senior': 170000, 'byState': {'California': 155000, 'Washington': 150000, 'New York': 140000}, 'growthChart': '17% growth through 2032'}");
    record36.set("relatedCareers", ["Backend Developer", "Full Stack Developer", "Software Engineer"]);
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
    record37.set("name", "Database Architect");
    record37.set("slug", "database-architect");
    record37.set("description", "Design database systems and solutions");
    record37.set("overview", "Database Architects design scalable, secure database systems. They work on database strategy, optimization, and ensuring data integrity across organizations.");
    record37.set("averageSalary", 125000);
    record37.set("salaryRange", "{'min': 90000, 'max': 190000}");
    record37.set("jobDemandOutlook", "Growing 8% through 2032, as fast as average");
    record37.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Virginia"]);
    record37.set("roadmap", "{'beginner': {'skills': ['SQL', 'Database design', 'Normalization'], 'projects': ['Database design', 'Schema optimization'], 'certifications': ['Oracle Database Associate'], 'resources': ['Oracle University', 'SQL Tutorial']}, 'intermediate': {'skills': ['Advanced SQL', 'Performance tuning', 'Replication'], 'projects': ['Complex database', 'Performance optimization'], 'certifications': ['Oracle Database Professional'], 'resources': ['Oracle docs', 'Udemy']}, 'advanced': {'skills': ['Enterprise architecture', 'Distributed databases', 'Cloud databases'], 'projects': ['Enterprise database', 'Cloud migration'], 'certifications': ['Oracle Database Expert'], 'resources': ['Oracle docs', 'AWS docs']}}");
    record37.set("skillsRequired", "{'technical': [{'skill': 'SQL', 'proficiency': 'Advanced'}, {'skill': 'Database design', 'proficiency': 'Advanced'}, {'skill': 'Performance tuning', 'proficiency': 'Advanced'}, {'skill': 'Cloud databases', 'proficiency': 'Advanced'}], 'soft': ['Strategic thinking', 'Communication', 'Problem-solving'], 'tools': ['Oracle', 'PostgreSQL', 'MongoDB', 'Cassandra'], 'certifications': ['Oracle Database Expert', 'AWS Certified Database Specialty']}");
    record37.set("salaryInsights", "{'entry': 90000, 'mid': 125000, 'senior': 190000, 'byState': {'California': 170000, 'New York': 160000, 'Washington': 155000}, 'growthChart': '8% growth through 2032'}");
    record37.set("relatedCareers", ["Database Administrator", "Data Engineer", "Solutions Architect"]);
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
    record38.set("name", "Penetration Tester");
    record38.set("slug", "penetration-tester");
    record38.set("description", "Test systems for security vulnerabilities");
    record38.set("overview", "Penetration Testers simulate attacks on systems to identify vulnerabilities. They help organizations understand and fix security weaknesses before malicious actors exploit them.");
    record38.set("averageSalary", 120000);
    record38.set("salaryRange", "{'min': 85000, 'max': 180000}");
    record38.set("jobDemandOutlook", "Growing 35% through 2032, much faster than average");
    record38.set("topPayingStates", ["California", "Washington", "New York", "Massachusetts", "Virginia"]);
    record38.set("roadmap", "{'beginner': {'skills': ['Security basics', 'Networking', 'Linux'], 'projects': ['Security audit', 'Vulnerability assessment'], 'certifications': ['CompTIA Security+'], 'resources': ['CompTIA', 'TryHackMe']}, 'intermediate': {'skills': ['Penetration testing', 'Exploitation', 'Reporting'], 'projects': ['Penetration test', 'Vulnerability exploitation'], 'certifications': ['CEH - Certified Ethical Hacker'], 'resources': ['HackTheBox', 'Udemy']}, 'advanced': {'skills': ['Advanced exploitation', 'Custom tools', 'Advanced techniques'], 'projects': ['Advanced penetration test', 'Tool development'], 'certifications': ['OSCP - Offensive Security Certified Professional'], 'resources': ['Offensive Security', 'SANS']}}");
    record38.set("skillsRequired", "{'technical': [{'skill': 'Penetration testing', 'proficiency': 'Advanced'}, {'skill': 'Exploitation', 'proficiency': 'Advanced'}, {'skill': 'Networking', 'proficiency': 'Advanced'}, {'skill': 'Linux', 'proficiency': 'Advanced'}], 'soft': ['Problem-solving', 'Attention to detail', 'Communication'], 'tools': ['Metasploit', 'Burp Suite', 'Wireshark', 'Nmap'], 'certifications': ['CEH - Certified Ethical Hacker', 'OSCP']}");
    record38.set("salaryInsights", "{'entry': 85000, 'mid': 120000, 'senior': 180000, 'byState': {'California': 160000, 'Washington': 155000, 'New York': 145000}, 'growthChart': '35% growth through 2032'}");
    record38.set("relatedCareers", ["Security Engineer", "Cybersecurity Analyst", "DevSecOps Engineer"]);
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
    record39.set("name", "Compliance Officer");
    record39.set("slug", "compliance-officer");
    record39.set("description", "Ensure organizational compliance with regulations");
    record39.set("overview", "Compliance Officers ensure organizations follow laws and regulations. They develop policies, conduct audits, and manage compliance programs.");
    record39.set("averageSalary", 95000);
    record39.set("salaryRange", "{'min': 70000, 'max': 150000}");
    record39.set("jobDemandOutlook", "Growing 5% through 2032, slower than average");
    record39.set("topPayingStates", ["New York", "California", "Washington", "Massachusetts", "Virginia"]);
    record39.set("roadmap", "{'beginner': {'skills': ['Compliance basics', 'Regulations', 'Documentation'], 'projects': ['Compliance audit', 'Policy development'], 'certifications': ['Certified Compliance and Ethics Professional'], 'resources': ['SCCE', 'Coursera']}, 'intermediate': {'skills': ['Advanced compliance', 'Risk management', 'Auditing'], 'projects': ['Compliance program', 'Risk assessment'], 'certifications': ['Certified Information Systems Auditor'], 'resources': ['ISACA', 'Udemy']}, 'advanced': {'skills': ['Strategic compliance', 'Executive leadership', 'Governance'], 'projects': ['Enterprise compliance', 'Governance strategy'], 'certifications': ['Advanced Compliance Certification'], 'resources': ['SCCE', 'Reforge']}}");
    record39.set("skillsRequired", "{'technical': [{'skill': 'Compliance knowledge', 'proficiency': 'Advanced'}, {'skill': 'Auditing', 'proficiency': 'Advanced'}, {'skill': 'Risk management', 'proficiency': 'Advanced'}, {'skill': 'Documentation', 'proficiency': 'Advanced'}], 'soft': ['Communication', 'Attention to detail', 'Leadership'], 'tools': ['Compliance software', 'Audit tools', 'Excel'], 'certifications': ['Certified Compliance and Ethics Professional', 'Certified Information Systems Auditor']}");
    record39.set("salaryInsights", "{'entry': 70000, 'mid': 95000, 'senior': 150000, 'byState': {'New York': 135000, 'California': 130000, 'Washington': 125000}, 'growthChart': '5% growth through 2032'}");
    record39.set("relatedCareers", ["Security Engineer", "IT Auditor", "Risk Manager"]);
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
    record40.set("name", "IT Support Specialist");
    record40.set("slug", "it-support-specialist");
    record40.set("description", "Provide technical support to users");
    record40.set("overview", "IT Support Specialists help users with technical issues, troubleshoot problems, and provide training. They are the first line of support for IT issues.");
    record40.set("averageSalary", 55000);
    record40.set("salaryRange", "{'min': 40000, 'max': 85000}");
    record40.set("jobDemandOutlook", "Growing 5% through 2032, slower than average");
    record40.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record40.set("roadmap", "{'beginner': {'skills': ['Troubleshooting', 'Windows/Mac', 'Networking basics'], 'projects': ['User support', 'Ticket resolution'], 'certifications': ['CompTIA A+'], 'resources': ['CompTIA', 'Udemy']}, 'intermediate': {'skills': ['Advanced troubleshooting', 'Active Directory', 'Scripting'], 'projects': ['System administration', 'Automation'], 'certifications': ['CompTIA Network+'], 'resources': ['Udemy', 'Pluralsight']}, 'advanced': {'skills': ['System administration', 'Cloud support', 'Leadership'], 'projects': ['IT infrastructure', 'Team leadership'], 'certifications': ['CompTIA Security+'], 'resources': ['Udemy', 'Microsoft Learn']}}");
    record40.set("skillsRequired", "{'technical': [{'skill': 'Windows', 'proficiency': 'Advanced'}, {'skill': 'Mac', 'proficiency': 'Intermediate'}, {'skill': 'Networking', 'proficiency': 'Intermediate'}, {'skill': 'Troubleshooting', 'proficiency': 'Advanced'}], 'soft': ['Communication', 'Problem-solving', 'Patience'], 'tools': ['Windows', 'Mac', 'Active Directory', 'Remote support'], 'certifications': ['CompTIA A+', 'CompTIA Network+']}");
    record40.set("salaryInsights", "{'entry': 40000, 'mid': 55000, 'senior': 85000, 'byState': {'California': 75000, 'New York': 72000, 'Washington': 70000}, 'growthChart': '5% growth through 2032'}");
    record40.set("relatedCareers", ["Systems Administrator", "Network Engineer", "IT Project Manager"]);
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
    record41.set("name", "Web Developer");
    record41.set("slug", "web-developer");
    record41.set("description", "Develop websites and web applications");
    record41.set("overview", "Web Developers create websites and web applications using HTML, CSS, JavaScript, and various frameworks. They focus on functionality, design, and user experience.");
    record41.set("averageSalary", 100000);
    record41.set("salaryRange", "{'min': 65000, 'max': 155000}");
    record41.set("jobDemandOutlook", "Growing 16% through 2032, faster than average");
    record41.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record41.set("roadmap", "{'beginner': {'skills': ['HTML/CSS', 'JavaScript basics', 'Responsive design'], 'projects': ['Personal website', 'Landing page'], 'certifications': ['freeCodeCamp Web Development'], 'resources': ['MDN Web Docs', 'CSS-Tricks']}, 'intermediate': {'skills': ['React/Vue', 'Backend basics', 'Databases'], 'projects': ['Web application', 'E-commerce site'], 'certifications': ['React Developer Certification'], 'resources': ['React docs', 'Vue docs']}, 'advanced': {'skills': ['Advanced frameworks', 'Performance optimization', 'DevOps'], 'projects': ['Complex web app', 'SaaS platform'], 'certifications': ['AWS Certified Cloud Practitioner'], 'resources': ['Web.dev', 'Webpack docs']}}");
    record41.set("skillsRequired", "{'technical': [{'skill': 'JavaScript', 'proficiency': 'Advanced'}, {'skill': 'React', 'proficiency': 'Advanced'}, {'skill': 'HTML/CSS', 'proficiency': 'Advanced'}, {'skill': 'Node.js', 'proficiency': 'Intermediate'}], 'soft': ['Creativity', 'Problem-solving', 'Communication'], 'tools': ['React', 'Vue', 'Node.js', 'Git'], 'certifications': ['React Developer Certification', 'AWS Certified Cloud Practitioner']}");
    record41.set("salaryInsights", "{'entry': 65000, 'mid': 100000, 'senior': 155000, 'byState': {'California': 140000, 'New York': 130000, 'Washington': 125000}, 'growthChart': '16% growth through 2032'}");
    record41.set("relatedCareers", ["Frontend Developer", "Full Stack Developer", "UX Designer"]);
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
    record42.set("name", "Scrum Master");
    record42.set("slug", "scrum-master");
    record42.set("description", "Facilitate agile development processes");
    record42.set("overview", "Scrum Masters facilitate agile development processes, removing obstacles and ensuring teams follow Scrum practices. They coach teams and improve processes.");
    record42.set("averageSalary", 95000);
    record42.set("salaryRange", "{'min': 70000, 'max': 145000}");
    record42.set("jobDemandOutlook", "Growing 8% through 2032, as fast as average");
    record42.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record42.set("roadmap", "{'beginner': {'skills': ['Agile basics', 'Scrum framework', 'Communication'], 'projects': ['Team facilitation', 'Process improvement'], 'certifications': ['Certified ScrumMaster'], 'resources': ['Scrum.org', 'Coursera']}, 'intermediate': {'skills': ['Advanced Scrum', 'Coaching', 'Conflict resolution'], 'projects': ['Team coaching', 'Process optimization'], 'certifications': ['Professional Scrum Master II'], 'resources': ['Scrum.org', 'Udemy']}, 'advanced': {'skills': ['Organizational coaching', 'Scaling Scrum', 'Leadership'], 'projects': ['Enterprise agility', 'Organizational transformation'], 'certifications': ['Professional Scrum Master III'], 'resources': ['Scrum.org', 'Reforge']}}");
    record42.set("skillsRequired", "{'technical': [{'skill': 'Scrum framework', 'proficiency': 'Advanced'}, {'skill': 'Agile methodologies', 'proficiency': 'Advanced'}, {'skill': 'Process improvement', 'proficiency': 'Advanced'}, {'skill': 'Jira', 'proficiency': 'Intermediate'}], 'soft': ['Leadership', 'Communication', 'Coaching'], 'tools': ['Jira', 'Confluence', 'Miro', 'Slack'], 'certifications': ['Certified ScrumMaster', 'Professional Scrum Master II']}");
    record42.set("salaryInsights", "{'entry': 70000, 'mid': 95000, 'senior': 145000, 'byState': {'California': 130000, 'New York': 125000, 'Washington': 120000}, 'growthChart': '8% growth through 2032'}");
    record42.set("relatedCareers", ["Product Manager", "IT Project Manager", "Technical Lead"]);
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
    record43.set("name", "Solutions Engineer");
    record43.set("slug", "solutions-engineer");
    record43.set("description", "Design and implement technical solutions for clients");
    record43.set("overview", "Solutions Engineers work with clients to understand their needs and design technical solutions. They bridge the gap between sales and engineering.");
    record43.set("averageSalary", 120000);
    record43.set("salaryRange", "{'min': 85000, 'max': 180000}");
    record43.set("jobDemandOutlook", "Growing 15% through 2032, faster than average");
    record43.set("topPayingStates", ["California", "Washington", "New York", "Massachusetts", "Colorado"]);
    record43.set("roadmap", "{'beginner': {'skills': ['Technical knowledge', 'Communication', 'Problem-solving'], 'projects': ['Solution design', 'Client presentations'], 'certifications': ['AWS Certified Cloud Practitioner'], 'resources': ['AWS Training', 'Coursera']}, 'intermediate': {'skills': ['Advanced technical', 'Sales engineering', 'Architecture'], 'projects': ['Complex solutions', 'Client implementation'], 'certifications': ['AWS Solutions Architect Associate'], 'resources': ['AWS docs', 'Udemy']}, 'advanced': {'skills': ['Enterprise solutions', 'Strategic planning', 'Leadership'], 'projects': ['Enterprise solutions', 'Strategic partnerships'], 'certifications': ['AWS Solutions Architect Professional'], 'resources': ['AWS Well-Architected Framework', 'TOGAF']}}");
    record43.set("skillsRequired", "{'technical': [{'skill': 'Cloud platforms', 'proficiency': 'Advanced'}, {'skill': 'Architecture design', 'proficiency': 'Advanced'}, {'skill': 'Technical communication', 'proficiency': 'Advanced'}, {'skill': 'Problem-solving', 'proficiency': 'Advanced'}], 'soft': ['Communication', 'Sales skills', 'Leadership'], 'tools': ['AWS', 'Azure', 'Visio', 'Lucidchart'], 'certifications': ['AWS Solutions Architect Associate', 'AWS Solutions Architect Professional']}");
    record43.set("salaryInsights", "{'entry': 85000, 'mid': 120000, 'senior': 180000, 'byState': {'California': 160000, 'Washington': 155000, 'New York': 145000}, 'growthChart': '15% growth through 2032'}");
    record43.set("relatedCareers", ["Solutions Architect", "Cloud Architect", "Technical Lead"]);
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
    record44.set("name", "Automation Engineer");
    record44.set("slug", "automation-engineer");
    record44.set("description", "Automate business and technical processes");
    record44.set("overview", "Automation Engineers design and implement automation solutions to improve efficiency. They work with RPA, scripting, and workflow automation.");
    record44.set("averageSalary", 105000);
    record44.set("salaryRange", "{'min': 75000, 'max': 160000}");
    record44.set("jobDemandOutlook", "Growing 13% through 2032, faster than average");
    record44.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record44.set("roadmap", "{'beginner': {'skills': ['Python/Java', 'Scripting', 'Process analysis'], 'projects': ['Simple automation', 'Script development'], 'certifications': ['RPA Basics'], 'resources': ['UiPath Academy', 'Udemy']}, 'intermediate': {'skills': ['Advanced scripting', 'RPA platforms', 'Workflow design'], 'projects': ['Complex automation', 'RPA implementation'], 'certifications': ['UiPath Certified Associate'], 'resources': ['UiPath Academy', 'Udemy']}, 'advanced': {'skills': ['Advanced RPA', 'AI/ML integration', 'Enterprise automation'], 'projects': ['Enterprise automation', 'Intelligent automation'], 'certifications': ['UiPath Certified Professional'], 'resources': ['UiPath Academy', 'Automation Anywhere']}}");
    record44.set("skillsRequired", "{'technical': [{'skill': 'Python', 'proficiency': 'Advanced'}, {'skill': 'RPA', 'proficiency': 'Advanced'}, {'skill': 'Scripting', 'proficiency': 'Advanced'}, {'skill': 'Workflow design', 'proficiency': 'Advanced'}], 'soft': ['Problem-solving', 'Process thinking', 'Communication'], 'tools': ['UiPath', 'Automation Anywhere', 'Python', 'Selenium'], 'certifications': ['UiPath Certified Associate', 'UiPath Certified Professional']}");
    record44.set("salaryInsights", "{'entry': 75000, 'mid': 105000, 'senior': 160000, 'byState': {'California': 145000, 'New York': 140000, 'Washington': 135000}, 'growthChart': '13% growth through 2032'}");
    record44.set("relatedCareams", ["DevOps Engineer", "Software Engineer", "Business Analyst"]);
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
    record45.set("name", "Technical Writer");
    record45.set("slug", "technical-writer");
    record45.set("description", "Create technical documentation and guides");
    record45.set("overview", "Technical Writers create clear, accurate documentation for software and systems. They work with engineers to document features, APIs, and processes.");
    record45.set("averageSalary", 75000);
    record45.set("salaryRange", "{'min': 55000, 'max': 115000}");
    record45.set("jobDemandOutlook", "Growing 8% through 2032, as fast as average");
    record45.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record45.set("roadmap", "{'beginner': {'skills': ['Technical writing', 'Documentation tools', 'Communication'], 'projects': ['User guides', 'API documentation'], 'certifications': ['Technical Writing Basics'], 'resources': ['Write the Docs', 'Coursera']}, 'intermediate': {'skills': ['Advanced writing', 'Information architecture', 'Tools'], 'projects': ['Complex documentation', 'Documentation systems'], 'certifications': ['Advanced Technical Writing'], 'resources': ['Write the Docs', 'Udemy']}, 'advanced': {'skills': ['Documentation strategy', 'Content management', 'Leadership'], 'projects': ['Documentation platform', 'Content strategy'], 'certifications': ['Advanced Documentation Certification'], 'resources': ['Write the Docs', 'Reforge']}}");
    record45.set("skillsRequired", "{'technical': [{'skill': 'Technical writing', 'proficiency': 'Advanced'}, {'skill': 'Markdown', 'proficiency': 'Advanced'}, {'skill': 'Documentation tools', 'proficiency': 'Advanced'}, {'skill': 'Basic coding', 'proficiency': 'Intermediate'}], 'soft': ['Communication', 'Attention to detail', 'Organization'], 'tools': ['Markdown', 'Confluence', 'Sphinx', 'Git'], 'certifications': ['Advanced Technical Writing', 'Information Architecture']}");
    record45.set("salaryInsights", "{'entry': 55000, 'mid': 75000, 'senior': 115000, 'byState': {'California': 105000, 'New York': 100000, 'Washington': 95000}, 'growthChart': '8% growth through 2032'}");
    record45.set("relatedCareers", ["Product Manager", "UX Designer", "Business Analyst"]);
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
    record46.set("name", "IT Auditor");
    record46.set("slug", "it-auditor");
    record46.set("description", "Audit IT systems and controls");
    record46.set("overview", "IT Auditors evaluate IT systems, controls, and processes to ensure compliance and security. They identify risks and recommend improvements.");
    record46.set("averageSalary", 90000);
    record46.set("salaryRange", "{'min': 65000, 'max': 140000}");
    record46.set("jobDemandOutlook", "Growing 5% through 2032, slower than average");
    record46.set("topPayingStates", ["New York", "California", "Washington", "Massachusetts", "Virginia"]);
    record46.set("roadmap", "{'beginner': {'skills': ['Auditing basics', 'IT controls', 'Compliance'], 'projects': ['IT audit', 'Control assessment'], 'certifications': ['Certified Information Systems Auditor'], 'resources': ['ISACA', 'Udemy']}, 'intermediate': {'skills': ['Advanced auditing', 'Risk assessment', 'Reporting'], 'projects': ['Complex audit', 'Risk analysis'], 'certifications': ['CISA Advanced'], 'resources': ['ISACA', 'Udemy']}, 'advanced': {'skills': ['Enterprise auditing', 'Governance', 'Leadership'], 'projects': ['Enterprise audit', 'Governance strategy'], 'certifications': ['CISM - Certified Information Security Manager'], 'resources': ['ISACA', 'Reforge']}}");
    record46.set("skillsRequired", "{'technical': [{'skill': 'Auditing', 'proficiency': 'Advanced'}, {'skill': 'IT controls', 'proficiency': 'Advanced'}, {'skill': 'Risk assessment', 'proficiency': 'Advanced'}, {'skill': 'Compliance', 'proficiency': 'Advanced'}], 'soft': ['Communication', 'Attention to detail', 'Analytical thinking'], 'tools': ['Audit software', 'Excel', 'SQL'], 'certifications': ['Certified Information Systems Auditor', 'CISM']}");
    record46.set("salaryInsights", "{'entry': 65000, 'mid': 90000, 'senior': 140000, 'byState': {'New York': 125000, 'California': 120000, 'Washington': 115000}, 'growthChart': '5% growth through 2032'}");
    record46.set("relatedCareers", ["Compliance Officer", "Security Engineer", "IT Project Manager"]);
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
    record47.set("name", "Vendor Manager");
    record47.set("slug", "vendor-manager");
    record47.set("description", "Manage relationships with technology vendors");
    record47.set("overview", "Vendor Managers oversee relationships with technology vendors, negotiate contracts, and ensure vendor performance. They manage vendor portfolios and costs.");
    record47.set("averageSalary", 85000);
    record47.set("salaryRange", "{'min': 65000, 'max': 130000}");
    record47.set("jobDemandOutlook", "Growing 5% through 2032, slower than average");
    record47.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record47.set("roadmap", "{'beginner': {'skills': ['Vendor management', 'Negotiation', 'Communication'], 'projects': ['Vendor evaluation', 'Contract management'], 'certifications': ['Vendor Management Basics'], 'resources': ['Coursera', 'Udemy']}, 'intermediate': {'skills': ['Advanced vendor management', 'Procurement', 'Risk management'], 'projects': ['Vendor strategy', 'Portfolio management'], 'certifications': ['Certified Procurement Professional'], 'resources': ['NCMA', 'Udemy']}, 'advanced': {'skills': ['Strategic vendor management', 'Executive leadership', 'Governance'], 'projects': ['Enterprise vendor strategy', 'Organizational leadership'], 'certifications': ['Advanced Vendor Management'], 'resources': ['NCMA', 'Reforge']}}");
    record47.set("skillsRequired", "{'technical': [{'skill': 'Vendor management', 'proficiency': 'Advanced'}, {'skill': 'Procurement', 'proficiency': 'Advanced'}, {'skill': 'Contract management', 'proficiency': 'Advanced'}, {'skill': 'Risk management', 'proficiency': 'Advanced'}], 'soft': ['Negotiation', 'Communication', 'Leadership'], 'tools': ['Procurement software', 'Excel', 'Contract management tools'], 'certifications': ['Certified Procurement Professional', 'Advanced Vendor Management']}");
    record47.set("salaryInsights", "{'entry': 65000, 'mid': 85000, 'senior': 130000, 'byState': {'California': 115000, 'New York': 110000, 'Washington': 105000}, 'growthChart': '5% growth through 2032'}");
    record47.set("relatedCareers", ["IT Project Manager", "Compliance Officer", "IT Director"]);
  try {
    app.save(record47);
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
