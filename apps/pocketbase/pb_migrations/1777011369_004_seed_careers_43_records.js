/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
    record0.set("name", "Software Engineer");
    record0.set("slug", "software-engineer");
    record0.set("description", "Design, develop, and maintain software applications and systems");
    record0.set("overview", "Software engineers create the digital products and services that power modern businesses. They work across full-stack development, cloud infrastructure, and emerging technologies.");
    record0.set("averageSalary", 145000);
    record0.set("salaryRange", "{'min': 85000, 'max': 220000}");
    record0.set("jobDemandOutlook", "Excellent - 13% growth through 2032");
    record0.set("topPayingStates", ["CA", "WA", "NY", "MA", "CO"]);
    record0.set("roadmap", "{'Beginner': {'skills': ['Python/JavaScript', 'HTML/CSS', 'Git', 'REST APIs'], 'projects': ['Todo App', 'Weather App', 'Personal Portfolio'], 'certifications': ['AWS Cloud Practitioner'], 'resources': ['freeCodeCamp', 'Codecademy'], 'expectedSalary': 75000}, 'Intermediate': {'skills': ['React/Vue', 'Node.js', 'SQL', 'Docker'], 'projects': ['E-commerce Platform', 'Social Media App', 'Real-time Chat'], 'certifications': ['AWS Solutions Architect Associate'], 'resources': ['Udemy', 'Pluralsight'], 'expectedSalary': 120000}, 'Advanced': {'skills': ['System Design', 'Microservices', 'Kubernetes', 'ML Integration'], 'projects': ['Distributed System', 'AI-powered App', 'Cloud Infrastructure'], 'certifications': ['AWS Solutions Architect Professional'], 'resources': ['System Design Interview', 'LeetCode'], 'expectedSalary': 180000}}");
    record0.set("skillsRequired", "{'technical': ['Programming Languages', 'Data Structures', 'Algorithms', 'Database Design', 'API Development'], 'soft': ['Problem Solving', 'Communication', 'Teamwork', 'Time Management'], 'tools': ['Git', 'Docker', 'Kubernetes', 'AWS', 'Jenkins']}");
    record0.set("salaryInsights", "{'byLevel': {'beginner': 75000, 'intermediate': 120000, 'advanced': 180000}, 'byState': {'CA': 165000, 'WA': 155000, 'NY': 140000, 'MA': 150000, 'CO': 135000}}");
    record0.set("relatedCareers", ["data-engineer", "devops-engineer", "frontend-developer", "backend-developer"]);
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
    record1.set("description", "Extract insights from data using statistical analysis and machine learning");
    record1.set("overview", "Data scientists combine programming, statistics, and domain expertise to solve complex business problems through data analysis and predictive modeling.");
    record1.set("averageSalary", 135000);
    record1.set("salaryRange", "{'min': 80000, 'max': 210000}");
    record1.set("jobDemandOutlook", "Very Strong - 36% growth through 2032");
    record1.set("topPayingStates", ["CA", "NY", "MA", "WA", "TX"]);
    record1.set("roadmap", "{'Beginner': {'skills': ['Python', 'SQL', 'Statistics Basics', 'Pandas/NumPy'], 'projects': ['Data Cleaning Project', 'Exploratory Data Analysis', 'Basic Visualization'], 'certifications': ['Google Data Analytics Certificate'], 'resources': ['Coursera', 'DataCamp'], 'expectedSalary': 70000}, 'Intermediate': {'skills': ['Machine Learning', 'Scikit-learn', 'Statistical Testing', 'Data Visualization'], 'projects': ['Predictive Model', 'Classification Project', 'Time Series Analysis'], 'certifications': ['AWS Machine Learning Specialty'], 'resources': ['Fast.ai', 'Kaggle'], 'expectedSalary': 115000}, 'Advanced': {'skills': ['Deep Learning', 'TensorFlow/PyTorch', 'Big Data', 'MLOps'], 'projects': ['Neural Network', 'NLP Project', 'Recommendation System'], 'certifications': ['TensorFlow Developer Certificate'], 'resources': ['Research Papers', 'Advanced ML Courses'], 'expectedSalary': 170000}}");
    record1.set("skillsRequired", "{'technical': ['Python', 'SQL', 'Statistics', 'Machine Learning', 'Data Visualization'], 'soft': ['Analytical Thinking', 'Communication', 'Business Acumen', 'Curiosity'], 'tools': ['Python', 'R', 'SQL', 'Tableau', 'Power BI', 'TensorFlow']}");
    record1.set("salaryInsights", "{'byLevel': {'beginner': 70000, 'intermediate': 115000, 'advanced': 170000}, 'byState': {'CA': 155000, 'NY': 145000, 'MA': 150000, 'WA': 140000, 'TX': 125000}}");
    record1.set("relatedCareers", ["machine-learning-engineer", "data-engineer", "business-analyst", "statistician"]);
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
    record2.set("description", "Manage infrastructure, deployment pipelines, and system reliability");
    record2.set("overview", "DevOps engineers bridge development and operations, automating deployment processes and ensuring system reliability, scalability, and security.");
    record2.set("averageSalary", 140000);
    record2.set("salaryRange", "{'min': 85000, 'max': 215000}");
    record2.set("jobDemandOutlook", "Strong - 15% growth through 2032");
    record2.set("topPayingStates", ["CA", "WA", "NY", "MA", "CO"]);
    record2.set("roadmap", "{'Beginner': {'skills': ['Linux', 'Bash Scripting', 'Git', 'Basic Networking'], 'projects': ['Linux Server Setup', 'Bash Automation', 'Git Workflow'], 'certifications': ['CompTIA Security+'], 'resources': ['Linux Academy', 'Udemy'], 'expectedSalary': 80000}, 'Intermediate': {'skills': ['Docker', 'Kubernetes', 'CI/CD', 'Cloud Platforms'], 'projects': ['Docker Containerization', 'Kubernetes Deployment', 'Jenkins Pipeline'], 'certifications': ['AWS Solutions Architect Associate'], 'resources': ['Linux Academy', 'A Cloud Guru'], 'expectedSalary': 125000}, 'Advanced': {'skills': ['Infrastructure as Code', 'Terraform', 'Monitoring', 'Security'], 'projects': ['Terraform Infrastructure', 'Prometheus Monitoring', 'Security Hardening'], 'certifications': ['AWS Solutions Architect Professional'], 'resources': ['Terraform Registry', 'Advanced DevOps'], 'expectedSalary': 175000}}");
    record2.set("skillsRequired", "{'technical': ['Linux', 'Scripting', 'Cloud Platforms', 'Containerization', 'Infrastructure as Code'], 'soft': ['Problem Solving', 'Collaboration', 'Documentation', 'Attention to Detail'], 'tools': ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'AWS', 'Azure']}");
    record2.set("salaryInsights", "{'byLevel': {'beginner': 80000, 'intermediate': 125000, 'advanced': 175000}, 'byState': {'CA': 160000, 'WA': 150000, 'NY': 135000, 'MA': 145000, 'CO': 130000}}");
    record2.set("relatedCareers", ["cloud-architect", "systems-administrator", "software-engineer", "security-engineer"]);
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
    record3.set("description", "Build user interfaces and interactive web applications");
    record3.set("overview", "Frontend developers create the visual and interactive elements of web applications, focusing on user experience and responsive design.");
    record3.set("averageSalary", 125000);
    record3.set("salaryRange", "{'min': 70000, 'max': 190000}");
    record3.set("jobDemandOutlook", "Strong - 16% growth through 2032");
    record3.set("topPayingStates", ["CA", "NY", "WA", "MA", "CO"]);
    record3.set("roadmap", "{'Beginner': {'skills': ['HTML/CSS', 'JavaScript Basics', 'Responsive Design', 'Git'], 'projects': ['Personal Website', 'Landing Page', 'Portfolio Site'], 'certifications': ['Google Front-End Developer Certificate'], 'resources': ['freeCodeCamp', 'Codecademy'], 'expectedSalary': 65000}, 'Intermediate': {'skills': ['React/Vue', 'JavaScript ES6+', 'CSS Frameworks', 'API Integration'], 'projects': ['React App', 'E-commerce Frontend', 'Dashboard'], 'certifications': ['React Developer Certificate'], 'resources': ['Udemy', 'Frontend Masters'], 'expectedSalary': 110000}, 'Advanced': {'skills': ['Advanced React', 'Performance Optimization', 'Testing', 'Design Systems'], 'projects': ['Complex Web App', 'Design System', 'Performance Optimization'], 'certifications': ['Advanced Frontend Certification'], 'resources': ['Frontend Masters', 'Advanced Courses'], 'expectedSalary': 160000}}");
    record3.set("skillsRequired", "{'technical': ['HTML/CSS', 'JavaScript', 'React/Vue', 'Responsive Design', 'Web Performance'], 'soft': ['Attention to Detail', 'Creativity', 'Communication', 'User Empathy'], 'tools': ['React', 'Vue', 'Webpack', 'Git', 'Chrome DevTools']}");
    record3.set("salaryInsights", "{'byLevel': {'beginner': 65000, 'intermediate': 110000, 'advanced': 160000}, 'byState': {'CA': 145000, 'NY': 130000, 'WA': 125000, 'MA': 135000, 'CO': 115000}}");
    record3.set("relatedCareers", ["ux-designer", "full-stack-developer", "web-developer", "ui-developer"]);
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
    record4.set("description", "Develop server-side logic, databases, and APIs");
    record4.set("overview", "Backend developers build the server-side infrastructure that powers applications, managing databases, APIs, and business logic.");
    record4.set("averageSalary", 135000);
    record4.set("salaryRange", "{'min': 75000, 'max': 200000}");
    record4.set("jobDemandOutlook", "Strong - 17% growth through 2032");
    record4.set("topPayingStates", ["CA", "WA", "NY", "MA", "CO"]);
    record4.set("roadmap", "{'Beginner': {'skills': ['Python/Java', 'SQL', 'REST APIs', 'Git'], 'projects': ['Simple API', 'Database Design', 'CRUD Application'], 'certifications': ['AWS Cloud Practitioner'], 'resources': ['Codecademy', 'Udemy'], 'expectedSalary': 70000}, 'Intermediate': {'skills': ['Node.js/Django', 'Database Optimization', 'Authentication', 'Caching'], 'projects': ['Scalable API', 'Microservice', 'Real-time Application'], 'certifications': ['AWS Solutions Architect Associate'], 'resources': ['Udemy', 'Pluralsight'], 'expectedSalary': 120000}, 'Advanced': {'skills': ['System Design', 'Distributed Systems', 'Performance Tuning', 'Security'], 'projects': ['Distributed System', 'High-scale API', 'Infrastructure Design'], 'certifications': ['AWS Solutions Architect Professional'], 'resources': ['System Design Interview', 'Advanced Courses'], 'expectedSalary': 170000}}");
    record4.set("skillsRequired", "{'technical': ['Programming Languages', 'SQL', 'API Design', 'Database Management', 'System Design'], 'soft': ['Problem Solving', 'Communication', 'Attention to Detail', 'Teamwork'], 'tools': ['Node.js', 'Django', 'PostgreSQL', 'Redis', 'Docker']}");
    record4.set("salaryInsights", "{'byLevel': {'beginner': 70000, 'intermediate': 120000, 'advanced': 170000}, 'byState': {'CA': 155000, 'WA': 145000, 'NY': 135000, 'MA': 140000, 'CO': 125000}}");
    record4.set("relatedCareers", ["software-engineer", "devops-engineer", "database-administrator", "full-stack-developer"]);
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
    record5.set("description", "Build and deploy machine learning models at scale");
    record5.set("overview", "ML engineers develop, train, and deploy machine learning models that solve real-world problems, focusing on scalability and performance.");
    record5.set("averageSalary", 155000);
    record5.set("salaryRange", "{'min': 95000, 'max': 240000}");
    record5.set("jobDemandOutlook", "Excellent - 35% growth through 2032");
    record5.set("topPayingStates", ["CA", "WA", "NY", "MA", "TX"]);
    record5.set("roadmap", "{'Beginner': {'skills': ['Python', 'Statistics', 'Scikit-learn', 'Data Preprocessing'], 'projects': ['Classification Model', 'Regression Project', 'Data Analysis'], 'certifications': ['Google Machine Learning Certificate'], 'resources': ['Coursera', 'DataCamp'], 'expectedSalary': 85000}, 'Intermediate': {'skills': ['Deep Learning', 'TensorFlow', 'Model Evaluation', 'Feature Engineering'], 'projects': ['Neural Network', 'Computer Vision', 'NLP Project'], 'certifications': ['TensorFlow Developer Certificate'], 'resources': ['Fast.ai', 'Kaggle'], 'expectedSalary': 135000}, 'Advanced': {'skills': ['MLOps', 'Model Deployment', 'Distributed Training', 'Research'], 'projects': ['Production ML System', 'Custom Framework', 'Research Paper'], 'certifications': ['Advanced ML Specialization'], 'resources': ['Research Papers', 'Advanced Courses'], 'expectedSalary': 200000}}");
    record5.set("skillsRequired", "{'technical': ['Python', 'Machine Learning', 'Deep Learning', 'Statistics', 'Big Data'], 'soft': ['Research Mindset', 'Problem Solving', 'Communication', 'Experimentation'], 'tools': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Spark', 'Kubernetes']}");
    record5.set("salaryInsights", "{'byLevel': {'beginner': 85000, 'intermediate': 135000, 'advanced': 200000}, 'byState': {'CA': 180000, 'WA': 165000, 'NY': 155000, 'MA': 160000, 'TX': 140000}}");
    record5.set("relatedCareers", ["data-scientist", "ai-engineer", "data-engineer", "research-scientist"]);
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
    record6.set("overview", "Cloud architects design scalable, secure, and cost-effective cloud solutions, helping organizations migrate to and optimize cloud platforms.");
    record6.set("averageSalary", 160000);
    record6.set("salaryRange", "{'min': 100000, 'max': 240000}");
    record6.set("jobDemandOutlook", "Excellent - 20% growth through 2032");
    record6.set("topPayingStates", ["CA", "WA", "NY", "MA", "TX"]);
    record6.set("roadmap", "{'Beginner': {'skills': ['Cloud Basics', 'AWS Fundamentals', 'Networking', 'Security Basics'], 'projects': ['Simple AWS Setup', 'VPC Configuration', 'IAM Policies'], 'certifications': ['AWS Cloud Practitioner'], 'resources': ['AWS Training', 'A Cloud Guru'], 'expectedSalary': 90000}, 'Intermediate': {'skills': ['AWS Solutions', 'Architecture Design', 'Cost Optimization', 'Compliance'], 'projects': ['Multi-tier Architecture', 'Disaster Recovery', 'Migration Plan'], 'certifications': ['AWS Solutions Architect Associate'], 'resources': ['AWS Whitepapers', 'Linux Academy'], 'expectedSalary': 140000}, 'Advanced': {'skills': ['Enterprise Architecture', 'Multi-cloud', 'Advanced Security', 'Optimization'], 'projects': ['Enterprise Solution', 'Multi-cloud Strategy', 'Security Framework'], 'certifications': ['AWS Solutions Architect Professional'], 'resources': ['AWS Advanced', 'Enterprise Courses'], 'expectedSalary': 200000}}");
    record6.set("skillsRequired", "{'technical': ['Cloud Platforms', 'Networking', 'Security', 'Infrastructure Design', 'Cost Management'], 'soft': ['Strategic Thinking', 'Communication', 'Leadership', 'Business Acumen'], 'tools': ['AWS', 'Azure', 'GCP', 'Terraform', 'CloudFormation']}");
    record6.set("salaryInsights", "{'byLevel': {'beginner': 90000, 'intermediate': 140000, 'advanced': 200000}, 'byState': {'CA': 185000, 'WA': 170000, 'NY': 160000, 'MA': 165000, 'TX': 145000}}");
    record6.set("relatedCareers", ["devops-engineer", "systems-administrator", "security-architect", "infrastructure-engineer"]);
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
    record7.set("name", "UX Designer");
    record7.set("slug", "ux-designer");
    record7.set("description", "Create user-centered designs for digital products");
    record7.set("overview", "UX designers research user needs and create intuitive, accessible interfaces that solve problems and delight users.");
    record7.set("averageSalary", 110000);
    record7.set("salaryRange", "{'min': 60000, 'max': 170000}");
    record7.set("jobDemandOutlook", "Strong - 13% growth through 2032");
    record7.set("topPayingStates", ["CA", "NY", "WA", "MA", "CO"]);
    record7.set("roadmap", "{'Beginner': {'skills': ['User Research', 'Wireframing', 'Prototyping', 'Design Thinking'], 'projects': ['User Research Project', 'Wireframes', 'Low-fidelity Prototype'], 'certifications': ['Google UX Design Certificate'], 'resources': ['Interaction Design Foundation', 'Coursera'], 'expectedSalary': 55000}, 'Intermediate': {'skills': ['Figma', 'Usability Testing', 'Information Architecture', 'Design Systems'], 'projects': ['High-fidelity Prototype', 'Usability Study', 'Design System'], 'certifications': ['Nielsen Norman UX Certification'], 'resources': ['Interaction Design Foundation', 'Udemy'], 'expectedSalary': 100000}, 'Advanced': {'skills': ['Strategic Design', 'Leadership', 'Advanced Research', 'Accessibility'], 'projects': ['Product Strategy', 'Research Framework', 'Accessibility Audit'], 'certifications': ['Advanced UX Certification'], 'resources': ['Advanced Courses', 'Industry Conferences'], 'expectedSalary': 150000}}");
    record7.set("skillsRequired", "{'technical': ['Figma/Sketch', 'Prototyping', 'User Research', 'Wireframing', 'Design Systems'], 'soft': ['Empathy', 'Communication', 'Creativity', 'Problem Solving'], 'tools': ['Figma', 'Adobe XD', 'Sketch', 'Miro', 'UserTesting']}");
    record7.set("salaryInsights", "{'byLevel': {'beginner': 55000, 'intermediate': 100000, 'advanced': 150000}, 'byState': {'CA': 130000, 'NY': 115000, 'WA': 110000, 'MA': 120000, 'CO': 105000}}");
    record7.set("relatedCareers", ["ui-designer", "product-manager", "frontend-developer", "interaction-designer"]);
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
    record8.set("description", "Guide product strategy and development from conception to launch");
    record8.set("overview", "Product managers define product vision, strategy, and roadmap, working cross-functionally to deliver products that meet user needs and business goals.");
    record8.set("averageSalary", 130000);
    record8.set("salaryRange", "{'min': 75000, 'max': 210000}");
    record8.set("jobDemandOutlook", "Strong - 8% growth through 2032");
    record8.set("topPayingStates", ["CA", "NY", "WA", "MA", "TX"]);
    record8.set("roadmap", "{'Beginner': {'skills': ['Product Thinking', 'Market Research', 'Analytics Basics', 'Communication'], 'projects': ['Product Analysis', 'Market Research', 'Feature Proposal'], 'certifications': ['Reforge Product Management'], 'resources': ['Reforge', 'Product School'], 'expectedSalary': 70000}, 'Intermediate': {'skills': ['Product Strategy', 'Data Analysis', 'User Research', 'Roadmapping'], 'projects': ['Product Strategy', 'Roadmap', 'Launch Plan'], 'certifications': ['Pragmatic Marketing Certification'], 'resources': ['Reforge', 'Product School'], 'expectedSalary': 120000}, 'Advanced': {'skills': ['Strategic Leadership', 'Business Strategy', 'Advanced Analytics', 'Scaling'], 'projects': ['Business Strategy', 'Portfolio Management', 'Scaling Plan'], 'certifications': ['Advanced PM Certification'], 'resources': ['Executive Courses', 'Industry Leaders'], 'expectedSalary': 180000}}");
    record8.set("skillsRequired", "{'technical': ['Analytics', 'SQL Basics', 'Data Interpretation', 'Product Tools'], 'soft': ['Leadership', 'Communication', 'Strategic Thinking', 'Empathy'], 'tools': ['Jira', 'Mixpanel', 'Amplitude', 'SQL', 'Figma']}");
    record8.set("salaryInsights", "{'byLevel': {'beginner': 70000, 'intermediate': 120000, 'advanced': 180000}, 'byState': {'CA': 155000, 'NY': 140000, 'WA': 135000, 'MA': 145000, 'TX': 125000}}");
    record8.set("relatedCareers", ["ux-designer", "business-analyst", "marketing-manager", "strategy-consultant"]);
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
    record9.set("name", "Data Engineer");
    record9.set("slug", "data-engineer");
    record9.set("description", "Build and maintain data infrastructure and pipelines");
    record9.set("overview", "Data engineers design and build systems that collect, process, and store data at scale, enabling data scientists and analysts to work effectively.");
    record9.set("averageSalary", 140000);
    record9.set("salaryRange", "{'min': 85000, 'max': 220000}");
    record9.set("jobDemandOutlook", "Excellent - 36% growth through 2032");
    record9.set("topPayingStates", ["CA", "WA", "NY", "MA", "TX"]);
    record9.set("roadmap", "{'Beginner': {'skills': ['SQL', 'Python', 'Data Modeling', 'ETL Basics'], 'projects': ['ETL Pipeline', 'Data Warehouse', 'SQL Optimization'], 'certifications': ['Google Cloud Data Engineer'], 'resources': ['DataCamp', 'Coursera'], 'expectedSalary': 80000}, 'Intermediate': {'skills': ['Spark', 'Kafka', 'Data Warehousing', 'Cloud Platforms'], 'projects': ['Spark Pipeline', 'Real-time Processing', 'Data Lake'], 'certifications': ['AWS Data Analytics Specialty'], 'resources': ['Udemy', 'A Cloud Guru'], 'expectedSalary': 125000}, 'Advanced': {'skills': ['Distributed Systems', 'Advanced Spark', 'Data Governance', 'Optimization'], 'projects': ['Distributed Pipeline', 'Data Governance', 'Performance Tuning'], 'certifications': ['Advanced Data Engineering'], 'resources': ['Advanced Courses', 'Research Papers'], 'expectedSalary': 180000}}");
    record9.set("skillsRequired", "{'technical': ['SQL', 'Python', 'Spark', 'Data Warehousing', 'Cloud Platforms'], 'soft': ['Problem Solving', 'Attention to Detail', 'Communication', 'Collaboration'], 'tools': ['Spark', 'Kafka', 'Airflow', 'Snowflake', 'BigQuery']}");
    record9.set("salaryInsights", "{'byLevel': {'beginner': 80000, 'intermediate': 125000, 'advanced': 180000}, 'byState': {'CA': 160000, 'WA': 150000, 'NY': 140000, 'MA': 145000, 'TX': 130000}}");
    record9.set("relatedCareers", ["data-scientist", "machine-learning-engineer", "database-administrator", "analytics-engineer"]);
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
    record10.set("description", "Protect systems and data from cyber threats");
    record10.set("overview", "Security engineers design and implement security measures to protect organizations from cyber attacks, ensuring compliance and data protection.");
    record10.set("averageSalary", 145000);
    record10.set("salaryRange", "{'min': 90000, 'max': 230000}");
    record10.set("jobDemandOutlook", "Excellent - 35% growth through 2032");
    record10.set("topPayingStates", ["CA", "WA", "NY", "MA", "VA"]);
    record10.set("roadmap", "{'Beginner': {'skills': ['Network Security', 'Linux', 'Cryptography Basics', 'Security Fundamentals'], 'projects': ['Security Audit', 'Firewall Config', 'Vulnerability Scan'], 'certifications': ['CompTIA Security+'], 'resources': ['CompTIA', 'Udemy'], 'expectedSalary': 85000}, 'Intermediate': {'skills': ['Penetration Testing', 'SIEM', 'Incident Response', 'Cloud Security'], 'projects': ['Penetration Test', 'SIEM Setup', 'Security Policy'], 'certifications': ['Certified Ethical Hacker'], 'resources': ['eLearnSecurity', 'Udemy'], 'expectedSalary': 130000}, 'Advanced': {'skills': ['Advanced Penetration Testing', 'Security Architecture', 'Threat Intelligence', 'Compliance'], 'projects': ['Security Framework', 'Threat Analysis', 'Compliance Audit'], 'certifications': ['OSCP', 'CISSP'], 'resources': ['Offensive Security', 'Advanced Courses'], 'expectedSalary': 190000}}");
    record10.set("skillsRequired", "{'technical': ['Networking', 'Linux', 'Cryptography', 'Penetration Testing', 'SIEM'], 'soft': ['Analytical Thinking', 'Attention to Detail', 'Communication', 'Persistence'], 'tools': ['Metasploit', 'Wireshark', 'Burp Suite', 'Splunk', 'Nessus']}");
    record10.set("salaryInsights", "{'byLevel': {'beginner': 85000, 'intermediate': 130000, 'advanced': 190000}, 'byState': {'CA': 165000, 'WA': 155000, 'NY': 150000, 'MA': 160000, 'VA': 155000}}");
    record10.set("relatedCareers", ["devops-engineer", "systems-administrator", "network-engineer", "compliance-officer"]);
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
    record11.set("name", "Full Stack Developer");
    record11.set("slug", "full-stack-developer");
    record11.set("description", "Develop both frontend and backend components of web applications");
    record11.set("overview", "Full stack developers work across the entire application stack, from user interfaces to server-side logic and databases.");
    record11.set("averageSalary", 130000);
    record11.set("salaryRange", "{'min': 75000, 'max': 200000}");
    record11.set("jobDemandOutlook", "Strong - 17% growth through 2032");
    record11.set("topPayingStates", ["CA", "WA", "NY", "MA", "CO"]);
    record11.set("roadmap", "{'Beginner': {'skills': ['HTML/CSS', 'JavaScript', 'Node.js', 'SQL'], 'projects': ['Simple Web App', 'CRUD Application', 'Personal Project'], 'certifications': ['Full Stack Developer Certificate'], 'resources': ['freeCodeCamp', 'Codecademy'], 'expectedSalary': 70000}, 'Intermediate': {'skills': ['React', 'Express', 'MongoDB', 'REST APIs'], 'projects': ['E-commerce App', 'Social Platform', 'Real-time App'], 'certifications': ['MERN Stack Certificate'], 'resources': ['Udemy', 'Frontend Masters'], 'expectedSalary': 115000}, 'Advanced': {'skills': ['Advanced React', 'Microservices', 'DevOps', 'System Design'], 'projects': ['Scalable Platform', 'Microservice Architecture', 'Cloud Deployment'], 'certifications': ['Advanced Full Stack'], 'resources': ['Advanced Courses', 'System Design'], 'expectedSalary': 170000}}");
    record11.set("skillsRequired", "{'technical': ['Frontend Technologies', 'Backend Technologies', 'Databases', 'APIs', 'DevOps Basics'], 'soft': ['Problem Solving', 'Communication', 'Teamwork', 'Adaptability'], 'tools': ['React', 'Node.js', 'MongoDB', 'Docker', 'Git']}");
    record11.set("salaryInsights", "{'byLevel': {'beginner': 70000, 'intermediate': 115000, 'advanced': 170000}, 'byState': {'CA': 150000, 'WA': 140000, 'NY': 130000, 'MA': 135000, 'CO': 120000}}");
    record11.set("relatedCareers", ["software-engineer", "frontend-developer", "backend-developer", "devops-engineer"]);
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
    record12.set("name", "Database Administrator");
    record12.set("slug", "database-administrator");
    record12.set("description", "Manage and optimize database systems");
    record12.set("overview", "Database administrators ensure database systems are secure, reliable, and performant, managing backups, recovery, and optimization.");
    record12.set("averageSalary", 120000);
    record12.set("salaryRange", "{'min': 70000, 'max': 180000}");
    record12.set("jobDemandOutlook", "Moderate - 8% growth through 2032");
    record12.set("topPayingStates", ["CA", "NY", "WA", "MA", "TX"]);
    record12.set("roadmap", "{'Beginner': {'skills': ['SQL', 'Database Design', 'Backup/Recovery', 'Linux'], 'projects': ['Database Design', 'Backup Setup', 'Query Optimization'], 'certifications': ['Oracle Database Associate'], 'resources': ['Oracle University', 'Udemy'], 'expectedSalary': 65000}, 'Intermediate': {'skills': ['Performance Tuning', 'Replication', 'Security', 'Cloud Databases'], 'projects': ['Performance Tuning', 'Replication Setup', 'Security Hardening'], 'certifications': ['Oracle Database Professional'], 'resources': ['Oracle University', 'Pluralsight'], 'expectedSalary': 110000}, 'Advanced': {'skills': ['Advanced Tuning', 'High Availability', 'Disaster Recovery', 'Architecture'], 'projects': ['HA Setup', 'DR Plan', 'Database Architecture'], 'certifications': ['Oracle Database Expert'], 'resources': ['Advanced Courses', 'Industry Certifications'], 'expectedSalary': 160000}}");
    record12.set("skillsRequired", "{'technical': ['SQL', 'Database Design', 'Performance Tuning', 'Backup/Recovery', 'Security'], 'soft': ['Attention to Detail', 'Problem Solving', 'Communication', 'Reliability'], 'tools': ['Oracle', 'PostgreSQL', 'MySQL', 'MongoDB', 'Backup Tools']}");
    record12.set("salaryInsights", "{'byLevel': {'beginner': 65000, 'intermediate': 110000, 'advanced': 160000}, 'byState': {'CA': 140000, 'NY': 125000, 'WA': 120000, 'MA': 130000, 'TX': 115000}}");
    record12.set("relatedCareers", ["data-engineer", "backend-developer", "systems-administrator", "data-architect"]);
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
    record13.set("description", "Manage and maintain IT infrastructure and systems");
    record13.set("overview", "Systems administrators manage servers, networks, and user accounts, ensuring system availability, security, and performance.");
    record13.set("averageSalary", 110000);
    record13.set("salaryRange", "{'min': 60000, 'max': 170000}");
    record13.set("jobDemandOutlook", "Moderate - 5% growth through 2032");
    record13.set("topPayingStates", ["CA", "NY", "WA", "MA", "VA"]);
    record13.set("roadmap", "{'Beginner': {'skills': ['Windows/Linux', 'Networking Basics', 'User Management', 'Troubleshooting'], 'projects': ['Server Setup', 'User Management', 'Network Config'], 'certifications': ['CompTIA A+'], 'resources': ['CompTIA', 'Udemy'], 'expectedSalary': 55000}, 'Intermediate': {'skills': ['Active Directory', 'Virtualization', 'Backup/Recovery', 'Security'], 'projects': ['AD Setup', 'Virtualization', 'Backup System'], 'certifications': ['CompTIA Network+'], 'resources': ['CompTIA', 'Linux Academy'], 'expectedSalary': 100000}, 'Advanced': {'skills': ['Infrastructure Design', 'Cloud Management', 'Advanced Security', 'Automation'], 'projects': ['Infrastructure Design', 'Cloud Migration', 'Automation'], 'certifications': ['CompTIA Security+'], 'resources': ['Advanced Courses', 'Industry Certifications'], 'expectedSalary': 150000}}");
    record13.set("skillsRequired", "{'technical': ['Windows/Linux', 'Networking', 'Virtualization', 'Scripting', 'Cloud Platforms'], 'soft': ['Problem Solving', 'Communication', 'Attention to Detail', 'Reliability'], 'tools': ['Active Directory', 'VMware', 'Hyper-V', 'Ansible', 'Puppet']}");
    record13.set("salaryInsights", "{'byLevel': {'beginner': 55000, 'intermediate': 100000, 'advanced': 150000}, 'byState': {'CA': 130000, 'NY': 115000, 'WA': 110000, 'MA': 120000, 'VA': 115000}}");
    record13.set("relatedCareers", ["devops-engineer", "network-engineer", "security-engineer", "cloud-architect"]);
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
    record14.set("name", "Network Engineer");
    record14.set("slug", "network-engineer");
    record14.set("description", "Design and manage computer networks");
    record14.set("overview", "Network engineers design, implement, and maintain computer networks, ensuring connectivity, security, and optimal performance.");
    record14.set("averageSalary", 115000);
    record14.set("salaryRange", "{'min': 65000, 'max': 180000}");
    record14.set("jobDemandOutlook", "Moderate - 6% growth through 2032");
    record14.set("topPayingStates", ["CA", "NY", "WA", "MA", "VA"]);
    record14.set("roadmap", "{'Beginner': {'skills': ['Networking Fundamentals', 'TCP/IP', 'Routing/Switching', 'Cisco Basics'], 'projects': ['Network Design', 'Router Config', 'Switch Setup'], 'certifications': ['CompTIA Network+'], 'resources': ['CompTIA', 'Cisco Learning Network'], 'expectedSalary': 60000}, 'Intermediate': {'skills': ['Advanced Routing', 'MPLS', 'Network Security', 'Wireless'], 'projects': ['Complex Network', 'Security Implementation', 'Wireless Setup'], 'certifications': ['Cisco CCNA'], 'resources': ['Cisco Learning Network', 'Udemy'], 'expectedSalary': 105000}, 'Advanced': {'skills': ['Network Architecture', 'BGP', 'Advanced Security', 'Automation'], 'projects': ['Enterprise Network', 'Security Architecture', 'Network Automation'], 'certifications': ['Cisco CCNP'], 'resources': ['Cisco Learning Network', 'Advanced Courses'], 'expectedSalary': 160000}}");
    record14.set("skillsRequired", "{'technical': ['Networking', 'Routing/Switching', 'TCP/IP', 'Network Security', 'Wireless'], 'soft': ['Problem Solving', 'Communication', 'Attention to Detail', 'Teamwork'], 'tools': ['Cisco', 'Juniper', 'Wireshark', 'GNS3', 'Ansible']}");
    record14.set("salaryInsights", "{'byLevel': {'beginner': 60000, 'intermediate': 105000, 'advanced': 160000}, 'byState': {'CA': 135000, 'NY': 120000, 'WA': 115000, 'MA': 125000, 'VA': 120000}}");
    record14.set("relatedCareers", ["systems-administrator", "security-engineer", "devops-engineer", "cloud-architect"]);
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
    record15.set("description", "Analyze business needs and recommend technology solutions");
    record15.set("overview", "Business analysts bridge business and technology, gathering requirements and recommending solutions that improve processes and efficiency.");
    record15.set("averageSalary", 105000);
    record15.set("salaryRange", "{'min': 60000, 'max': 170000}");
    record15.set("jobDemandOutlook", "Strong - 10% growth through 2032");
    record15.set("topPayingStates", ["CA", "NY", "MA", "WA", "TX"]);
    record15.set("roadmap", "{'Beginner': {'skills': ['Requirements Gathering', 'Documentation', 'Basic Analysis', 'Communication'], 'projects': ['Requirements Document', 'Process Analysis', 'Stakeholder Interview'], 'certifications': ['IIBA ECBA'], 'resources': ['IIBA', 'Udemy'], 'expectedSalary': 55000}, 'Intermediate': {'skills': ['Advanced Analysis', 'Data Analysis', 'Process Modeling', 'SQL Basics'], 'projects': ['Business Case', 'Process Model', 'Data Analysis'], 'certifications': ['IIBA CCBA'], 'resources': ['IIBA', 'Coursera'], 'expectedSalary': 95000}, 'Advanced': {'skills': ['Strategic Analysis', 'Advanced SQL', 'Predictive Analytics', 'Leadership'], 'projects': ['Strategic Plan', 'Advanced Analytics', 'Transformation'], 'certifications': ['IIBA CBAP'], 'resources': ['IIBA', 'Advanced Courses'], 'expectedSalary': 150000}}");
    record15.set("skillsRequired", "{'technical': ['SQL', 'Data Analysis', 'Excel', 'Business Tools', 'Process Modeling'], 'soft': ['Communication', 'Analytical Thinking', 'Problem Solving', 'Stakeholder Management'], 'tools': ['SQL', 'Excel', 'Tableau', 'Jira', 'Visio']}");
    record15.set("salaryInsights", "{'byLevel': {'beginner': 55000, 'intermediate': 95000, 'advanced': 150000}, 'byState': {'CA': 125000, 'NY': 115000, 'MA': 120000, 'WA': 110000, 'TX': 100000}}");
    record15.set("relatedCareers", ["product-manager", "data-analyst", "project-manager", "consultant"]);
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
    record16.set("name", "QA Engineer");
    record16.set("slug", "qa-engineer");
    record16.set("description", "Test software to ensure quality and reliability");
    record16.set("overview", "QA engineers develop and execute test plans, identify bugs, and ensure software meets quality standards before release.");
    record16.set("averageSalary", 105000);
    record16.set("salaryRange", "{'min': 60000, 'max': 160000}");
    record16.set("jobDemandOutlook", "Moderate - 7% growth through 2032");
    record16.set("topPayingStates", ["CA", "NY", "WA", "MA", "CO"]);
    record16.set("roadmap", "{'Beginner': {'skills': ['Manual Testing', 'Test Planning', 'Bug Reporting', 'Basic Automation'], 'projects': ['Test Plan', 'Test Cases', 'Bug Reports'], 'certifications': ['ISTQB Foundation'], 'resources': ['ISTQB', 'Udemy'], 'expectedSalary': 55000}, 'Intermediate': {'skills': ['Test Automation', 'Selenium', 'Performance Testing', 'API Testing'], 'projects': ['Automation Framework', 'Performance Test', 'API Test'], 'certifications': ['ISTQB Advanced'], 'resources': ['Udemy', 'Pluralsight'], 'expectedSalary': 95000}, 'Advanced': {'skills': ['Advanced Automation', 'CI/CD Integration', 'Test Strategy', 'Leadership'], 'projects': ['CI/CD Pipeline', 'Test Strategy', 'Quality Framework'], 'certifications': ['ISTQB Expert'], 'resources': ['Advanced Courses', 'Industry Certifications'], 'expectedSalary': 145000}}");
    record16.set("skillsRequired", "{'technical': ['Test Automation', 'Selenium', 'SQL', 'API Testing', 'Performance Testing'], 'soft': ['Attention to Detail', 'Problem Solving', 'Communication', 'Analytical Thinking'], 'tools': ['Selenium', 'Jira', 'TestNG', 'Postman', 'JMeter']}");
    record16.set("salaryInsights", "{'byLevel': {'beginner': 55000, 'intermediate': 95000, 'advanced': 145000}, 'byState': {'CA': 125000, 'NY': 110000, 'WA': 105000, 'MA': 115000, 'CO': 100000}}");
    record16.set("relatedCareers", ["software-engineer", "devops-engineer", "automation-engineer", "performance-engineer"]);
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
    record17.set("name", "AI Engineer");
    record17.set("slug", "ai-engineer");
    record17.set("description", "Develop artificial intelligence and machine learning solutions");
    record17.set("overview", "AI engineers build intelligent systems using machine learning, deep learning, and NLP to solve complex problems and create innovative products.");
    record17.set("averageSalary", 160000);
    record17.set("salaryRange", "{'min': 100000, 'max': 250000}");
    record17.set("jobDemandOutlook", "Excellent - 35% growth through 2032");
    record17.set("topPayingStates", ["CA", "WA", "NY", "MA", "TX"]);
    record17.set("roadmap", "{'Beginner': {'skills': ['Python', 'Machine Learning Basics', 'Statistics', 'Data Preprocessing'], 'projects': ['ML Model', 'Data Analysis', 'Classification Project'], 'certifications': ['Google AI Certificate'], 'resources': ['Coursera', 'DataCamp'], 'expectedSalary': 90000}, 'Intermediate': {'skills': ['Deep Learning', 'NLP', 'Computer Vision', 'Model Deployment'], 'projects': ['Neural Network', 'NLP Project', 'Vision Model'], 'certifications': ['TensorFlow Developer Certificate'], 'resources': ['Fast.ai', 'Kaggle'], 'expectedSalary': 140000}, 'Advanced': {'skills': ['Advanced AI', 'Research', 'System Design', 'Scaling'], 'projects': ['Research Paper', 'Production AI System', 'Custom Framework'], 'certifications': ['Advanced AI Specialization'], 'resources': ['Research Papers', 'Advanced Courses'], 'expectedSalary': 210000}}");
    record17.set("skillsRequired", "{'technical': ['Python', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'], 'soft': ['Research Mindset', 'Problem Solving', 'Creativity', 'Communication'], 'tools': ['TensorFlow', 'PyTorch', 'Hugging Face', 'OpenAI', 'Kubernetes']}");
    record17.set("salaryInsights", "{'byLevel': {'beginner': 90000, 'intermediate': 140000, 'advanced': 210000}, 'byState': {'CA': 190000, 'WA': 175000, 'NY': 165000, 'MA': 170000, 'TX': 150000}}");
    record17.set("relatedCareers", ["machine-learning-engineer", "data-scientist", "research-scientist", "nlp-engineer"]);
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
    record18.set("name", "Mobile Developer");
    record18.set("slug", "mobile-developer");
    record18.set("description", "Develop applications for mobile devices");
    record18.set("overview", "Mobile developers create applications for iOS and Android platforms, focusing on user experience, performance, and platform-specific features.");
    record18.set("averageSalary", 120000);
    record18.set("salaryRange", "{'min': 70000, 'max': 190000}");
    record18.set("jobDemandOutlook", "Strong - 18% growth through 2032");
    record18.set("topPayingStates", ["CA", "NY", "WA", "MA", "CO"]);
    record18.set("roadmap", "{'Beginner': {'skills': ['Swift/Kotlin', 'Mobile UI', 'Mobile Development Basics', 'Git'], 'projects': ['Simple App', 'Todo App', 'Calculator'], 'certifications': ['iOS Developer Certificate'], 'resources': ['Apple Developer', 'Udemy'], 'expectedSalary': 65000}, 'Intermediate': {'skills': ['Advanced Swift', 'Firebase', 'REST APIs', 'Mobile Design'], 'projects': ['Feature-rich App', 'Backend Integration', 'Real-time App'], 'certifications': ['Advanced Mobile Certificate'], 'resources': ['Udemy', 'Pluralsight'], 'expectedSalary': 110000}, 'Advanced': {'skills': ['Performance Optimization', 'Advanced Architecture', 'Cross-platform', 'Leadership'], 'projects': ['Production App', 'Cross-platform App', 'Performance Optimization'], 'certifications': ['Advanced Mobile Specialization'], 'resources': ['Advanced Courses', 'Industry Leaders'], 'expectedSalary': 160000}}");
    record18.set("skillsRequired", "{'technical': ['Swift/Kotlin', 'Mobile UI', 'REST APIs', 'Databases', 'Mobile Architecture'], 'soft': ['Attention to Detail', 'Creativity', 'Problem Solving', 'User Empathy'], 'tools': ['Xcode', 'Android Studio', 'Firebase', 'Git', 'Figma']}");
    record18.set("salaryInsights", "{'byLevel': {'beginner': 65000, 'intermediate': 110000, 'advanced': 160000}, 'byState': {'CA': 140000, 'NY': 125000, 'WA': 120000, 'MA': 130000, 'CO': 115000}}");
    record18.set("relatedCareers", ["frontend-developer", "full-stack-developer", "ux-designer", "software-engineer"]);
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
    record19.set("description", "Design technology solutions for business problems");
    record19.set("overview", "Solutions architects design comprehensive technology solutions that address business requirements, balancing functionality, scalability, and cost.");
    record19.set("averageSalary", 150000);
    record19.set("salaryRange", "{'min': 95000, 'max': 230000}");
    record19.set("jobDemandOutlook", "Strong - 12% growth through 2032");
    record19.set("topPayingStates", ["CA", "WA", "NY", "MA", "TX"]);
    record19.set("roadmap", "{'Beginner': {'skills': ['System Design', 'Cloud Basics', 'Architecture Patterns', 'Communication'], 'projects': ['Architecture Design', 'Solution Proposal', 'Technical Documentation'], 'certifications': ['AWS Solutions Architect Associate'], 'resources': ['AWS Training', 'A Cloud Guru'], 'expectedSalary': 85000}, 'Intermediate': {'skills': ['Advanced Architecture', 'Enterprise Design', 'Cost Optimization', 'Security'], 'projects': ['Enterprise Solution', 'Migration Plan', 'Optimization'], 'certifications': ['AWS Solutions Architect Professional'], 'resources': ['AWS Whitepapers', 'Advanced Courses'], 'expectedSalary': 135000}, 'Advanced': {'skills': ['Strategic Architecture', 'Multi-cloud', 'Advanced Security', 'Leadership'], 'projects': ['Strategic Solution', 'Multi-cloud Architecture', 'Transformation'], 'certifications': ['Advanced Architecture Certification'], 'resources': ['Executive Courses', 'Industry Leaders'], 'expectedSalary': 200000}}");
    record19.set("skillsRequired", "{'technical': ['System Design', 'Cloud Platforms', 'Architecture Patterns', 'Security', 'Cost Management'], 'soft': ['Communication', 'Strategic Thinking', 'Leadership', 'Business Acumen'], 'tools': ['AWS', 'Azure', 'GCP', 'Visio', 'Lucidchart']}");
    record19.set("salaryInsights", "{'byLevel': {'beginner': 85000, 'intermediate': 135000, 'advanced': 200000}, 'byState': {'CA': 175000, 'WA': 160000, 'NY': 150000, 'MA': 155000, 'TX': 140000}}");
    record19.set("relatedCareers", ["cloud-architect", "devops-engineer", "systems-administrator", "enterprise-architect"]);
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
    record20.set("name", "DevSecOps Engineer");
    record20.set("slug", "devsecops-engineer");
    record20.set("description", "Integrate security into development and operations");
    record20.set("overview", "DevSecOps engineers embed security practices throughout the development lifecycle, automating security testing and compliance checks.");
    record20.set("averageSalary", 150000);
    record20.set("salaryRange", "{'min': 95000, 'max': 230000}");
    record20.set("jobDemandOutlook", "Excellent - 30% growth through 2032");
    record20.set("topPayingStates", ["CA", "WA", "NY", "MA", "VA"]);
    record20.set("roadmap", "{'Beginner': {'skills': ['Security Basics', 'CI/CD', 'Container Security', 'Compliance'], 'projects': ['Security Pipeline', 'Container Scanning', 'Compliance Check'], 'certifications': ['CompTIA Security+'], 'resources': ['CompTIA', 'Udemy'], 'expectedSalary': 90000}, 'Intermediate': {'skills': ['Advanced Security', 'SAST/DAST', 'Infrastructure Security', 'Threat Modeling'], 'projects': ['Security Framework', 'Threat Model', 'Security Automation'], 'certifications': ['Certified Ethical Hacker'], 'resources': ['eLearnSecurity', 'Udemy'], 'expectedSalary': 135000}, 'Advanced': {'skills': ['Security Architecture', 'Advanced Threat Analysis', 'Compliance Leadership', 'Strategy'], 'projects': ['Security Architecture', 'Compliance Framework', 'Risk Management'], 'certifications': ['CISSP'], 'resources': ['Advanced Courses', 'Industry Certifications'], 'expectedSalary': 200000}}");
    record20.set("skillsRequired", "{'technical': ['Security', 'CI/CD', 'Container Security', 'Infrastructure as Code', 'Threat Modeling'], 'soft': ['Analytical Thinking', 'Communication', 'Attention to Detail', 'Leadership'], 'tools': ['Jenkins', 'Docker', 'Kubernetes', 'Snyk', 'Splunk']}");
    record20.set("salaryInsights", "{'byLevel': {'beginner': 90000, 'intermediate': 135000, 'advanced': 200000}, 'byState': {'CA': 170000, 'WA': 160000, 'NY': 155000, 'MA': 165000, 'VA': 160000}}");
    record20.set("relatedCareers", ["devops-engineer", "security-engineer", "cloud-architect", "compliance-officer"]);
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
    record21.set("name", "Analytics Engineer");
    record21.set("slug", "analytics-engineer");
    record21.set("description", "Build data infrastructure for analytics and reporting");
    record21.set("overview", "Analytics engineers design and build data systems that enable analysts and business users to access and analyze data effectively.");
    record21.set("averageSalary", 130000);
    record21.set("salaryRange", "{'min': 80000, 'max': 200000}");
    record21.set("jobDemandOutlook", "Excellent - 25% growth through 2032");
    record21.set("topPayingStates", ["CA", "NY", "WA", "MA", "TX"]);
    record21.set("roadmap", "{'Beginner': {'skills': ['SQL', 'Data Modeling', 'ETL Basics', 'Analytics Tools'], 'projects': ['Data Model', 'ETL Pipeline', 'Analytics Dashboard'], 'certifications': ['Google Analytics Certificate'], 'resources': ['DataCamp', 'Coursera'], 'expectedSalary': 75000}, 'Intermediate': {'skills': ['Advanced SQL', 'dbt', 'Data Warehouse', 'BI Tools'], 'projects': ['dbt Project', 'Data Warehouse', 'BI Dashboard'], 'certifications': ['dbt Certification'], 'resources': ['dbt Learn', 'Udemy'], 'expectedSalary': 115000}, 'Advanced': {'skills': ['Advanced dbt', 'Data Governance', 'Optimization', 'Leadership'], 'projects': ['Data Governance', 'Optimization', 'Analytics Platform'], 'certifications': ['Advanced Analytics Certification'], 'resources': ['Advanced Courses', 'Industry Leaders'], 'expectedSalary': 170000}}");
    record21.set("skillsRequired", "{'technical': ['SQL', 'Data Modeling', 'ETL', 'BI Tools', 'Data Warehousing'], 'soft': ['Problem Solving', 'Communication', 'Attention to Detail', 'Collaboration'], 'tools': ['SQL', 'dbt', 'Snowflake', 'Tableau', 'Looker']}");
    record21.set("salaryInsights", "{'byLevel': {'beginner': 75000, 'intermediate': 115000, 'advanced': 170000}, 'byState': {'CA': 150000, 'NY': 135000, 'WA': 130000, 'MA': 140000, 'TX': 120000}}");
    record21.set("relatedCareers", ["data-engineer", "data-scientist", "business-analyst", "data-analyst"]);
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
    record22.set("name", "Infrastructure Engineer");
    record22.set("slug", "infrastructure-engineer");
    record22.set("description", "Design and manage IT infrastructure");
    record22.set("overview", "Infrastructure engineers design, build, and maintain the physical and virtual infrastructure that supports applications and services.");
    record22.set("averageSalary", 125000);
    record22.set("salaryRange", "{'min': 75000, 'max': 190000}");
    record22.set("jobDemandOutlook", "Moderate - 8% growth through 2032");
    record22.set("topPayingStates", ["CA", "WA", "NY", "MA", "TX"]);
    record22.set("roadmap", "{'Beginner': {'skills': ['Networking', 'Virtualization', 'Linux', 'Cloud Basics'], 'projects': ['Network Design', 'VM Setup', 'Cloud Infrastructure'], 'certifications': ['CompTIA Network+'], 'resources': ['CompTIA', 'Linux Academy'], 'expectedSalary': 70000}, 'Intermediate': {'skills': ['Advanced Networking', 'Cloud Platforms', 'Infrastructure as Code', 'Automation'], 'projects': ['Cloud Architecture', 'Terraform', 'Automation'], 'certifications': ['AWS Solutions Architect Associate'], 'resources': ['AWS Training', 'Udemy'], 'expectedSalary': 115000}, 'Advanced': {'skills': ['Enterprise Architecture', 'Advanced Cloud', 'Optimization', 'Leadership'], 'projects': ['Enterprise Infrastructure', 'Optimization', 'Transformation'], 'certifications': ['AWS Solutions Architect Professional'], 'resources': ['Advanced Courses', 'Industry Leaders'], 'expectedSalary': 170000}}");
    record22.set("skillsRequired", "{'technical': ['Networking', 'Virtualization', 'Cloud Platforms', 'Infrastructure as Code', 'Scripting'], 'soft': ['Problem Solving', 'Communication', 'Attention to Detail', 'Teamwork'], 'tools': ['Terraform', 'Ansible', 'AWS', 'Azure', 'Kubernetes']}");
    record22.set("salaryInsights", "{'byLevel': {'beginner': 70000, 'intermediate': 115000, 'advanced': 170000}, 'byState': {'CA': 145000, 'WA': 135000, 'NY': 125000, 'MA': 130000, 'TX': 115000}}");
    record22.set("relatedCareers", ["devops-engineer", "cloud-architect", "systems-administrator", "network-engineer"]);
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
    record23.set("name", "Compliance Officer");
    record23.set("slug", "compliance-officer");
    record23.set("description", "Ensure organizational compliance with regulations");
    record23.set("overview", "Compliance officers develop and implement policies to ensure organizations meet legal and regulatory requirements, managing risk and audits.");
    record23.set("averageSalary", 115000);
    record23.set("salaryRange", "{'min': 70000, 'max': 180000}");
    record23.set("jobDemandOutlook", "Moderate - 6% growth through 2032");
    record23.set("topPayingStates", ["NY", "CA", "MA", "WA", "TX"]);
    record23.set("roadmap", "{'Beginner': {'skills': ['Compliance Basics', 'Regulations', 'Documentation', 'Risk Assessment'], 'projects': ['Compliance Audit', 'Policy Document', 'Risk Assessment'], 'certifications': ['Compliance Certification'], 'resources': ['ACCA', 'Udemy'], 'expectedSalary': 65000}, 'Intermediate': {'skills': ['Advanced Compliance', 'Audit Management', 'Regulatory Knowledge', 'Systems'], 'projects': ['Compliance Program', 'Audit Plan', 'Regulatory Implementation'], 'certifications': ['CCEP'], 'resources': ['ACCA', 'Coursera'], 'expectedSalary': 105000}, 'Advanced': {'skills': ['Strategic Compliance', 'Leadership', 'Advanced Regulations', 'Risk Management'], 'projects': ['Compliance Strategy', 'Risk Framework', 'Transformation'], 'certifications': ['CCEP-I'], 'resources': ['Advanced Courses', 'Industry Leaders'], 'expectedSalary': 160000}}");
    record23.set("skillsRequired", "{'technical': ['Regulatory Knowledge', 'Audit Systems', 'Documentation', 'Data Analysis'], 'soft': ['Attention to Detail', 'Communication', 'Leadership', 'Analytical Thinking'], 'tools': ['Compliance Software', 'Excel', 'Audit Tools', 'Risk Management Tools']}");
    record23.set("salaryInsights", "{'byLevel': {'beginner': 65000, 'intermediate': 105000, 'advanced': 160000}, 'byState': {'NY': 135000, 'CA': 130000, 'MA': 125000, 'WA': 120000, 'TX': 110000}}");
    record23.set("relatedCareers", ["risk-manager", "audit-manager", "legal-advisor", "quality-assurance-manager"]);
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
    record24.set("name", "Research Scientist");
    record24.set("slug", "research-scientist");
    record24.set("description", "Conduct research to advance technology and science");
    record24.set("overview", "Research scientists conduct cutting-edge research in AI, ML, and other fields, publishing papers and developing novel algorithms and techniques.");
    record24.set("averageSalary", 165000);
    record24.set("salaryRange", "{'min': 100000, 'max': 250000}");
    record24.set("jobDemandOutlook", "Strong - 8% growth through 2032");
    record24.set("topPayingStates", ["CA", "WA", "NY", "MA", "TX"]);
    record24.set("roadmap", "{'Beginner': {'skills': ['Python', 'Statistics', 'Research Methodology', 'Paper Writing'], 'projects': ['Research Project', 'Data Analysis', 'Paper'], 'certifications': ['Research Certification'], 'resources': ['Coursera', 'arXiv'], 'expectedSalary': 95000}, 'Intermediate': {'skills': ['Advanced ML', 'Research Design', 'Publication', 'Collaboration'], 'projects': ['Research Paper', 'Novel Algorithm', 'Experiment'], 'certifications': ['Advanced Research Certification'], 'resources': ['Research Papers', 'Conferences'], 'expectedSalary': 150000}, 'Advanced': {'skills': ['Cutting-edge Research', 'Leadership', 'Innovation', 'Strategic Research'], 'projects': ['Breakthrough Research', 'Novel Framework', 'Industry Impact'], 'certifications': ['PhD or Equivalent'], 'resources': ['Top Conferences', 'Industry Leaders'], 'expectedSalary': 220000}}");
    record24.set("skillsRequired", "{'technical': ['Python', 'Statistics', 'Machine Learning', 'Research Methodology', 'Data Analysis'], 'soft': ['Creativity', 'Analytical Thinking', 'Communication', 'Persistence'], 'tools': ['Python', 'TensorFlow', 'PyTorch', 'Jupyter', 'Git']}");
    record24.set("salaryInsights", "{'byLevel': {'beginner': 95000, 'intermediate': 150000, 'advanced': 220000}, 'byState': {'CA': 195000, 'WA': 180000, 'NY': 170000, 'MA': 175000, 'TX': 155000}}");
    record24.set("relatedCareers", ["machine-learning-engineer", "ai-engineer", "data-scientist", "academic-researcher"]);
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
    record25.set("name", "Technical Writer");
    record25.set("slug", "technical-writer");
    record25.set("description", "Create technical documentation and guides");
    record25.set("overview", "Technical writers create clear, comprehensive documentation for software products, APIs, and systems, helping users understand complex technologies.");
    record25.set("averageSalary", 95000);
    record25.set("salaryRange", "{'min': 55000, 'max': 150000}");
    record25.set("jobDemandOutlook", "Moderate - 7% growth through 2032");
    record25.set("topPayingStates", ["CA", "WA", "NY", "MA", "CO"]);
    record25.set("roadmap", "{'Beginner': {'skills': ['Technical Writing', 'Documentation Tools', 'Markdown', 'Basic Technical Knowledge'], 'projects': ['User Guide', 'API Documentation', 'Tutorial'], 'certifications': ['Technical Writing Certificate'], 'resources': ['Write the Docs', 'Udemy'], 'expectedSalary': 50000}, 'Intermediate': {'skills': ['Advanced Documentation', 'Information Architecture', 'Video Documentation', 'Content Management'], 'projects': ['Comprehensive Documentation', 'Video Tutorial', 'Knowledge Base'], 'certifications': ['Advanced Technical Writing'], 'resources': ['Write the Docs', 'Coursera'], 'expectedSalary': 90000}, 'Advanced': {'skills': ['Documentation Strategy', 'Leadership', 'Advanced Tools', 'Content Strategy'], 'projects': ['Documentation Strategy', 'Content Platform', 'Training Program'], 'certifications': ['Advanced Documentation Certification'], 'resources': ['Advanced Courses', 'Industry Leaders'], 'expectedSalary': 140000}}");
    record25.set("skillsRequired", "{'technical': ['Technical Knowledge', 'Documentation Tools', 'Markdown', 'Version Control'], 'soft': ['Communication', 'Clarity', 'Organization', 'Attention to Detail'], 'tools': ['Markdown', 'Git', 'Confluence', 'Figma', 'Sphinx']}");
    record25.set("salaryInsights", "{'byLevel': {'beginner': 50000, 'intermediate': 90000, 'advanced': 140000}, 'byState': {'CA': 115000, 'WA': 105000, 'NY': 100000, 'MA': 110000, 'CO': 95000}}");
    record25.set("relatedCareers", ["ux-writer", "content-strategist", "product-manager", "developer-advocate"]);
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
    record26.set("name", "Site Reliability Engineer");
    record26.set("slug", "site-reliability-engineer");
    record26.set("description", "Ensure system reliability and performance at scale");
    record26.set("overview", "SREs apply software engineering principles to operations, automating systems and improving reliability, availability, and performance.");
    record26.set("averageSalary", 155000);
    record26.set("salaryRange", "{'min': 100000, 'max': 240000}");
    record26.set("jobDemandOutlook", "Excellent - 20% growth through 2032");
    record26.set("topPayingStates", ["CA", "WA", "NY", "MA", "TX"]);
    record26.set("roadmap", "{'Beginner': {'skills': ['Linux', 'Monitoring', 'Incident Response', 'Scripting'], 'projects': ['Monitoring Setup', 'Incident Response', 'Automation'], 'certifications': ['CompTIA Security+'], 'resources': ['Linux Academy', 'Udemy'], 'expectedSalary': 90000}, 'Intermediate': {'skills': ['Advanced Monitoring', 'Observability', 'Automation', 'Performance Tuning'], 'projects': ['Observability Platform', 'Automation Framework', 'Performance Optimization'], 'certifications': ['AWS Solutions Architect Associate'], 'resources': ['Udemy', 'A Cloud Guru'], 'expectedSalary': 140000}, 'Advanced': {'skills': ['Advanced SRE', 'Chaos Engineering', 'Architecture', 'Leadership'], 'projects': ['Chaos Engineering', 'SRE Platform', 'Transformation'], 'certifications': ['AWS Solutions Architect Professional'], 'resources': ['Advanced Courses', 'Industry Leaders'], 'expectedSalary': 210000}}");
    record26.set("skillsRequired", "{'technical': ['Linux', 'Monitoring', 'Scripting', 'Cloud Platforms', 'Observability'], 'soft': ['Problem Solving', 'Communication', 'Teamwork', 'Attention to Detail'], 'tools': ['Prometheus', 'Grafana', 'ELK Stack', 'Kubernetes', 'Terraform']}");
    record26.set("salaryInsights", "{'byLevel': {'beginner': 90000, 'intermediate': 140000, 'advanced': 210000}, 'byState': {'CA': 180000, 'WA': 170000, 'NY': 160000, 'MA': 165000, 'TX': 145000}}");
    record26.set("relatedCareers", ["devops-engineer", "systems-administrator", "cloud-architect", "infrastructure-engineer"]);
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
    record27.set("name", "Blockchain Developer");
    record27.set("slug", "blockchain-developer");
    record27.set("description", "Develop blockchain and cryptocurrency applications");
    record27.set("overview", "Blockchain developers build decentralized applications, smart contracts, and blockchain infrastructure using technologies like Ethereum and Solidity.");
    record27.set("averageSalary", 140000);
    record27.set("salaryRange", "{'min': 85000, 'max': 220000}");
    record27.set("jobDemandOutlook", "Strong - 25% growth through 2032");
    record27.set("topPayingStates", ["CA", "NY", "WA", "MA", "TX"]);
    record27.set("roadmap", "{'Beginner': {'skills': ['Solidity', 'Blockchain Basics', 'Smart Contracts', 'Web3.js'], 'projects': ['Simple Smart Contract', 'Token', 'DApp'], 'certifications': ['Ethereum Developer Certificate'], 'resources': ['Ethereum.org', 'Udemy'], 'expectedSalary': 80000}, 'Intermediate': {'skills': ['Advanced Solidity', 'DeFi', 'Security', 'Testing'], 'projects': ['DeFi Protocol', 'Secure Contract', 'Complex DApp'], 'certifications': ['Advanced Blockchain Certificate'], 'resources': ['Udemy', 'Coursera'], 'expectedSalary': 130000}, 'Advanced': {'skills': ['Blockchain Architecture', 'Protocol Design', 'Security Auditing', 'Leadership'], 'projects': ['Protocol Design', 'Security Audit', 'Blockchain Platform'], 'certifications': ['Advanced Blockchain Specialization'], 'resources': ['Advanced Courses', 'Industry Leaders'], 'expectedSalary': 190000}}");
    record27.set("skillsRequired", "{'technical': ['Solidity', 'Blockchain', 'Smart Contracts', 'Cryptography', 'Web3'], 'soft': ['Problem Solving', 'Security Mindset', 'Innovation', 'Communication'], 'tools': ['Solidity', 'Hardhat', 'Truffle', 'Web3.js', 'Etherscan']}");
    record27.set("salaryInsights", "{'byLevel': {'beginner': 80000, 'intermediate': 130000, 'advanced': 190000}, 'byState': {'CA': 160000, 'NY': 145000, 'WA': 140000, 'MA': 150000, 'TX': 130000}}");
    record27.set("relatedCareers", ["software-engineer", "security-engineer", "full-stack-developer", "smart-contract-auditor"]);
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
    record28.set("name", "Game Developer");
    record28.set("slug", "game-developer");
    record28.set("description", "Create video games and interactive experiences");
    record28.set("overview", "Game developers design and build video games using game engines, programming languages, and creative tools, focusing on gameplay and user experience.");
    record28.set("averageSalary", 110000);
    record28.set("salaryRange", "{'min': 60000, 'max': 180000}");
    record28.set("jobDemandOutlook", "Strong - 14% growth through 2032");
    record28.set("topPayingStates", ["CA", "WA", "NY", "MA", "TX"]);
    record28.set("roadmap", "{'Beginner': {'skills': ['C#/C++', 'Unity/Unreal', 'Game Design', '3D Graphics'], 'projects': ['Simple Game', '2D Game', 'Game Prototype'], 'certifications': ['Unity Developer Certificate'], 'resources': ['Unity Learn', 'Udemy'], 'expectedSalary': 60000}, 'Intermediate': {'skills': ['Advanced Game Development', 'Physics', 'AI', 'Networking'], 'projects': ['3D Game', 'Multiplayer Game', 'Complex Mechanics'], 'certifications': ['Advanced Game Development'], 'resources': ['Udemy', 'Game Dev Courses'], 'expectedSalary': 105000}, 'Advanced': {'skills': ['Game Architecture', 'Optimization', 'Leadership', 'Innovation'], 'projects': ['AAA Game', 'Game Engine', 'Innovative Game'], 'certifications': ['Advanced Game Development Specialization'], 'resources': ['Advanced Courses', 'Industry Leaders'], 'expectedSalary': 160000}}");
    record28.set("skillsRequired", "{'technical': ['C#/C++', 'Game Engines', '3D Graphics', 'Physics', 'AI'], 'soft': ['Creativity', 'Problem Solving', 'Teamwork', 'Attention to Detail'], 'tools': ['Unity', 'Unreal Engine', 'Blender', 'Git', 'Perforce']}");
    record28.set("salaryInsights", "{'byLevel': {'beginner': 60000, 'intermediate': 105000, 'advanced': 160000}, 'byState': {'CA': 135000, 'WA': 125000, 'NY': 115000, 'MA': 120000, 'TX': 105000}}");
    record28.set("relatedCareers", ["graphics-programmer", "game-designer", "software-engineer", "vr-developer"]);
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
    record29.set("name", "Cybersecurity Analyst");
    record29.set("slug", "cybersecurity-analyst");
    record29.set("description", "Monitor and protect systems from cyber threats");
    record29.set("overview", "Cybersecurity analysts monitor networks for security breaches, implement protective measures, and respond to incidents to protect organizational assets.");
    record29.set("averageSalary", 130000);
    record29.set("salaryRange", "{'min': 75000, 'max': 200000}");
    record29.set("jobDemandOutlook", "Excellent - 35% growth through 2032");
    record29.set("topPayingStates", ["CA", "WA", "NY", "MA", "VA"]);
    record29.set("roadmap", "{'Beginner': {'skills': ['Network Security', 'Firewalls', 'Intrusion Detection', 'Security Basics'], 'projects': ['Security Audit', 'Firewall Config', 'IDS Setup'], 'certifications': ['CompTIA Security+'], 'resources': ['CompTIA', 'Udemy'], 'expectedSalary': 70000}, 'Intermediate': {'skills': ['Advanced Threat Analysis', 'SIEM', 'Incident Response', 'Malware Analysis'], 'projects': ['Threat Analysis', 'SIEM Setup', 'Incident Response'], 'certifications': ['Certified Ethical Hacker'], 'resources': ['eLearnSecurity', 'Udemy'], 'expectedSalary': 120000}, 'Advanced': {'skills': ['Advanced Threat Hunting', 'Forensics', 'Security Architecture', 'Leadership'], 'projects': ['Threat Hunting', 'Forensic Analysis', 'Security Framework'], 'certifications': ['CISSP'], 'resources': ['Advanced Courses', 'Industry Certifications'], 'expectedSalary': 180000}}");
    record29.set("skillsRequired", "{'technical': ['Network Security', 'SIEM', 'Threat Analysis', 'Incident Response', 'Forensics'], 'soft': ['Analytical Thinking', 'Attention to Detail', 'Communication', 'Persistence'], 'tools': ['Splunk', 'Wireshark', 'Metasploit', 'Burp Suite', 'Nessus']}");
    record29.set("salaryInsights", "{'byLevel': {'beginner': 70000, 'intermediate': 120000, 'advanced': 180000}, 'byState': {'CA': 150000, 'WA': 140000, 'NY': 135000, 'MA': 145000, 'VA': 140000}}");
    record29.set("relatedCareers", ["security-engineer", "devops-engineer", "systems-administrator", "incident-response-manager"]);
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
    record30.set("name", "Data Analyst");
    record30.set("slug", "data-analyst");
    record30.set("description", "Analyze data to support business decisions");
    record30.set("overview", "Data analysts examine data to identify trends, patterns, and insights that help organizations make informed business decisions.");
    record30.set("averageSalary", 95000);
    record30.set("salaryRange", "{'min': 55000, 'max': 160000}");
    record30.set("jobDemandOutlook", "Strong - 23% growth through 2032");
    record30.set("topPayingStates", ["CA", "NY", "MA", "WA", "TX"]);
    record30.set("roadmap", "{'Beginner': {'skills': ['Excel', 'SQL', 'Data Visualization', 'Statistics Basics'], 'projects': ['Data Analysis', 'Dashboard', 'Report'], 'certifications': ['Google Data Analytics Certificate'], 'resources': ['Coursera', 'DataCamp'], 'expectedSalary': 50000}, 'Intermediate': {'skills': ['Advanced SQL', 'Tableau/Power BI', 'Statistical Analysis', 'Python Basics'], 'projects': ['Advanced Dashboard', 'Statistical Analysis', 'Predictive Model'], 'certifications': ['Tableau Desktop Specialist'], 'resources': ['Udemy', 'Coursera'], 'expectedSalary': 85000}, 'Advanced': {'skills': ['Advanced Analytics', 'Machine Learning', 'Data Storytelling', 'Leadership'], 'projects': ['ML Model', 'Advanced Analytics', 'Strategic Insights'], 'certifications': ['Advanced Analytics Certification'], 'resources': ['Advanced Courses', 'Industry Leaders'], 'expectedSalary': 150000}}");
    record30.set("skillsRequired", "{'technical': ['SQL', 'Excel', 'Data Visualization', 'Statistics', 'Python'], 'soft': ['Communication', 'Analytical Thinking', 'Attention to Detail', 'Curiosity'], 'tools': ['SQL', 'Tableau', 'Power BI', 'Excel', 'Python']}");
    record30.set("salaryInsights", "{'byLevel': {'beginner': 50000, 'intermediate': 85000, 'advanced': 150000}, 'byState': {'CA': 115000, 'NY': 105000, 'MA': 110000, 'WA': 100000, 'TX': 90000}}");
    record30.set("relatedCareers", ["business-analyst", "analytics-engineer", "data-scientist", "business-intelligence-analyst"]);
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
    record31.set("description", "Facilitate agile development and team collaboration");
    record31.set("overview", "Scrum masters facilitate agile development processes, removing obstacles and helping teams deliver value through iterative development.");
    record31.set("averageSalary", 105000);
    record31.set("salaryRange", "{'min': 65000, 'max': 170000}");
    record31.set("jobDemandOutlook", "Strong - 12% growth through 2032");
    record31.set("topPayingStates", ["CA", "NY", "WA", "MA", "TX"]);
    record31.set("roadmap", "{'Beginner': {'skills': ['Agile Basics', 'Scrum Framework', 'Facilitation', 'Communication'], 'projects': ['Sprint Planning', 'Retrospective', 'Standup'], 'certifications': ['Certified Scrum Master'], 'resources': ['Scrum.org', 'Udemy'], 'expectedSalary': 60000}, 'Intermediate': {'skills': ['Advanced Scrum', 'Coaching', 'Conflict Resolution', 'Metrics'], 'projects': ['Team Coaching', 'Process Improvement', 'Metrics'], 'certifications': ['Professional Scrum Master II'], 'resources': ['Scrum.org', 'Coursera'], 'expectedSalary': 100000}, 'Advanced': {'skills': ['Organizational Coaching', 'Transformation', 'Leadership', 'Strategy'], 'projects': ['Organizational Transformation', 'Scaling Agile', 'Strategy'], 'certifications': ['Professional Scrum Master III'], 'resources': ['Advanced Courses', 'Industry Leaders'], 'expectedSalary': 160000}}");
    record31.set("skillsRequired", "{'technical': ['Agile Methodologies', 'Jira', 'Metrics', 'Process Management'], 'soft': ['Leadership', 'Communication', 'Coaching', 'Conflict Resolution'], 'tools': ['Jira', 'Confluence', 'Miro', 'Azure DevOps']}");
    record31.set("salaryInsights", "{'byLevel': {'beginner': 60000, 'intermediate': 100000, 'advanced': 160000}, 'byState': {'CA': 125000, 'NY': 115000, 'WA': 110000, 'MA': 120000, 'TX': 105000}}");
    record31.set("relatedCareers", ["project-manager", "product-manager", "agile-coach", "team-lead"]);
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
    record32.set("name", "Enterprise Architect");
    record32.set("slug", "enterprise-architect");
    record32.set("description", "Design enterprise-wide technology strategies");
    record32.set("overview", "Enterprise architects design comprehensive technology strategies and solutions that align with organizational goals and enable digital transformation.");
    record32.set("averageSalary", 160000);
    record32.set("salaryRange", "{'min': 110000, 'max': 250000}");
    record32.set("jobDemandOutlook", "Strong - 10% growth through 2032");
    record32.set("topPayingStates", ["CA", "WA", "NY", "MA", "TX"]);
    record32.set("roadmap", "{'Beginner': {'skills': ['System Design', 'Architecture Patterns', 'Enterprise Basics', 'Communication'], 'projects': ['Architecture Design', 'Technology Assessment', 'Strategy Document'], 'certifications': ['AWS Solutions Architect Associate'], 'resources': ['AWS Training', 'Udemy'], 'expectedSalary': 100000}, 'Intermediate': {'skills': ['Enterprise Architecture', 'Strategic Planning', 'Governance', 'Advanced Design'], 'projects': ['Enterprise Strategy', 'Transformation Plan', 'Governance Framework'], 'certifications': ['TOGAF 9 Certified'], 'resources': ['TOGAF', 'Advanced Courses'], 'expectedSalary': 150000}, 'Advanced': {'skills': ['Strategic Leadership', 'Organizational Transformation', 'Advanced Governance', 'Innovation'], 'projects': ['Digital Transformation', 'Strategic Initiative', 'Innovation Framework'], 'certifications': ['TOGAF 9 Certified Practitioner'], 'resources': ['Executive Courses', 'Industry Leaders'], 'expectedSalary': 230000}}");
    record32.set("skillsRequired", "{'technical': ['System Design', 'Architecture Patterns', 'Enterprise Technologies', 'Cloud Platforms'], 'soft': ['Strategic Thinking', 'Leadership', 'Communication', 'Business Acumen'], 'tools': ['Visio', 'Lucidchart', 'ArchiMate', 'TOGAF', 'Enterprise Tools']}");
    record32.set("salaryInsights", "{'byLevel': {'beginner': 100000, 'intermediate': 150000, 'advanced': 230000}, 'byState': {'CA': 190000, 'WA': 175000, 'NY': 170000, 'MA': 175000, 'TX': 160000}}");
    record32.set("relatedCareers", ["solutions-architect", "cloud-architect", "cto", "technology-strategist"]);
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
    record33.set("name", "NLP Engineer");
    record33.set("slug", "nlp-engineer");
    record33.set("description", "Develop natural language processing applications");
    record33.set("overview", "NLP engineers build systems that understand and process human language, creating applications like chatbots, translation tools, and sentiment analysis.");
    record33.set("averageSalary", 150000);
    record33.set("salaryRange", "{'min': 95000, 'max': 240000}");
    record33.set("jobDemandOutlook", "Excellent - 35% growth through 2032");
    record33.set("topPayingStates", ["CA", "WA", "NY", "MA", "TX"]);
    record33.set("roadmap", "{'Beginner': {'skills': ['Python', 'NLP Basics', 'Text Processing', 'Machine Learning'], 'projects': ['Text Classification', 'Sentiment Analysis', 'Text Preprocessing'], 'certifications': ['NLP Basics Certificate'], 'resources': ['Coursera', 'DataCamp'], 'expectedSalary': 85000}, 'Intermediate': {'skills': ['Advanced NLP', 'Transformers', 'BERT/GPT', 'Deep Learning'], 'projects': ['Named Entity Recognition', 'Machine Translation', 'Question Answering'], 'certifications': ['Advanced NLP Certificate'], 'resources': ['Fast.ai', 'Hugging Face'], 'expectedSalary': 135000}, 'Advanced': {'skills': ['Cutting-edge NLP', 'LLM Fine-tuning', 'Research', 'System Design'], 'projects': ['Custom LLM', 'Advanced NLP System', 'Research Paper'], 'certifications': ['Advanced NLP Specialization'], 'resources': ['Research Papers', 'Advanced Courses'], 'expectedSalary': 210000}}");
    record33.set("skillsRequired", "{'technical': ['Python', 'NLP', 'Deep Learning', 'Transformers', 'Machine Learning'], 'soft': ['Research Mindset', 'Problem Solving', 'Communication', 'Creativity'], 'tools': ['Python', 'Hugging Face', 'PyTorch', 'TensorFlow', 'NLTK']}");
    record33.set("salaryInsights", "{'byLevel': {'beginner': 85000, 'intermediate': 135000, 'advanced': 210000}, 'byState': {'CA': 175000, 'WA': 160000, 'NY': 150000, 'MA': 155000, 'TX': 140000}}");
    record33.set("relatedCareers", ["machine-learning-engineer", "ai-engineer", "data-scientist", "research-scientist"]);
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
    record34.set("name", "Computer Vision Engineer");
    record34.set("slug", "computer-vision-engineer");
    record34.set("description", "Develop computer vision and image processing applications");
    record34.set("overview", "Computer vision engineers build systems that interpret visual information from images and videos, enabling applications like object detection and facial recognition.");
    record34.set("averageSalary", 150000);
    record34.set("salaryRange", "{'min': 95000, 'max': 240000}");
    record34.set("jobDemandOutlook", "Excellent - 35% growth through 2032");
    record34.set("topPayingStates", ["CA", "WA", "NY", "MA", "TX"]);
    record34.set("roadmap", "{'Beginner': {'skills': ['Python', 'OpenCV', 'Image Processing', 'Machine Learning'], 'projects': ['Image Classification', 'Edge Detection', 'Object Detection'], 'certifications': ['Computer Vision Basics'], 'resources': ['Coursera', 'OpenCV'], 'expectedSalary': 85000}, 'Intermediate': {'skills': ['Advanced CV', 'Deep Learning', 'CNN', 'Real-time Processing'], 'projects': ['Face Recognition', 'Video Analysis', '3D Reconstruction'], 'certifications': ['Advanced Computer Vision'], 'resources': ['Fast.ai', 'Udemy'], 'expectedSalary': 135000}, 'Advanced': {'skills': ['Cutting-edge CV', 'Advanced Deep Learning', 'Research', 'System Design'], 'projects': ['Custom Vision System', 'Advanced CV Research', 'Production System'], 'certifications': ['Advanced CV Specialization'], 'resources': ['Research Papers', 'Advanced Courses'], 'expectedSalary': 210000}}");
    record34.set("skillsRequired", "{'technical': ['Python', 'Computer Vision', 'Deep Learning', 'Image Processing', 'Machine Learning'], 'soft': ['Research Mindset', 'Problem Solving', 'Creativity', 'Communication'], 'tools': ['Python', 'OpenCV', 'PyTorch', 'TensorFlow', 'CUDA']}");
    record34.set("salaryInsights", "{'byLevel': {'beginner': 85000, 'intermediate': 135000, 'advanced': 210000}, 'byState': {'CA': 175000, 'WA': 160000, 'NY': 150000, 'MA': 155000, 'TX': 140000}}");
    record34.set("relatedCareers", ["machine-learning-engineer", "ai-engineer", "data-scientist", "robotics-engineer"]);
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
    record35.set("name", "Robotics Engineer");
    record35.set("slug", "robotics-engineer");
    record35.set("description", "Design and develop robotic systems");
    record35.set("overview", "Robotics engineers design and build robots and autonomous systems, combining mechanical engineering, electronics, and software development.");
    record35.set("averageSalary", 130000);
    record35.set("salaryRange", "{'min': 80000, 'max': 210000}");
    record35.set("jobDemandOutlook", "Strong - 15% growth through 2032");
    record35.set("topPayingStates", ["CA", "WA", "NY", "MA", "TX"]);
    record35.set("roadmap", "{'Beginner': {'skills': ['C++/Python', 'ROS', 'Mechanics', 'Electronics'], 'projects': ['Simple Robot', 'Robot Simulation', 'Basic Automation'], 'certifications': ['ROS Basics'], 'resources': ['ROS.org', 'Udemy'], 'expectedSalary': 75000}, 'Intermediate': {'skills': ['Advanced ROS', 'Computer Vision', 'Control Systems', 'Kinematics'], 'projects': ['Autonomous Robot', 'Vision-based Robot', 'Complex System'], 'certifications': ['Advanced Robotics'], 'resources': ['Udemy', 'Coursera'], 'expectedSalary': 120000}, 'Advanced': {'skills': ['Advanced Robotics', 'AI Integration', 'System Design', 'Research'], 'projects': ['Autonomous System', 'AI Robot', 'Research Project'], 'certifications': ['Advanced Robotics Specialization'], 'resources': ['Advanced Courses', 'Research Papers'], 'expectedSalary': 190000}}");
    record35.set("skillsRequired", "{'technical': ['C++/Python', 'ROS', 'Control Systems', 'Computer Vision', 'Electronics'], 'soft': ['Problem Solving', 'Creativity', 'Teamwork', 'Attention to Detail'], 'tools': ['ROS', 'Gazebo', 'Python', 'C++', 'CAD Software']}");
    record35.set("salaryInsights", "{'byLevel': {'beginner': 75000, 'intermediate': 120000, 'advanced': 190000}, 'byState': {'CA': 155000, 'WA': 145000, 'NY': 135000, 'MA': 140000, 'TX': 125000}}");
    record35.set("relatedCareers", ["software-engineer", "mechanical-engineer", "ai-engineer", "embedded-systems-engineer"]);
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
    record36.set("name", "Embedded Systems Engineer");
    record36.set("slug", "embedded-systems-engineer");
    record36.set("description", "Develop software for embedded devices");
    record36.set("overview", "Embedded systems engineers develop software for microcontrollers and embedded devices, optimizing for performance, power, and reliability.");
    record36.set("averageSalary", 120000);
    record36.set("salaryRange", "{'min': 70000, 'max': 190000}");
    record36.set("jobDemandOutlook", "Strong - 10% growth through 2032");
    record36.set("topPayingStates", ["CA", "WA", "NY", "MA", "TX"]);
    record36.set("roadmap", "{'Beginner': {'skills': ['C/C++', 'Microcontrollers', 'Electronics', 'Assembly'], 'projects': ['LED Control', 'Sensor Integration', 'Simple Device'], 'certifications': ['Embedded Systems Basics'], 'resources': ['Arduino', 'Udemy'], 'expectedSalary': 65000}, 'Intermediate': {'skills': ['Advanced C/C++', 'RTOS', 'Hardware Interfaces', 'Debugging'], 'projects': ['Complex Device', 'RTOS Application', 'Hardware Integration'], 'certifications': ['Advanced Embedded Systems'], 'resources': ['Udemy', 'Coursera'], 'expectedSalary': 110000}, 'Advanced': {'skills': ['Advanced Embedded', 'System Design', 'Optimization', 'Leadership'], 'projects': ['Production Device', 'Optimized System', 'Architecture'], 'certifications': ['Advanced Embedded Specialization'], 'resources': ['Advanced Courses', 'Industry Leaders'], 'expectedSalary': 170000}}");
    record36.set("skillsRequired", "{'technical': ['C/C++', 'Microcontrollers', 'Electronics', 'RTOS', 'Assembly'], 'soft': ['Problem Solving', 'Attention to Detail', 'Teamwork', 'Persistence'], 'tools': ['C/C++', 'RTOS', 'Oscilloscope', 'Debugger', 'CAD']}");
    record36.set("salaryInsights", "{'byLevel': {'beginner': 65000, 'intermediate': 110000, 'advanced': 170000}, 'byState': {'CA': 140000, 'WA': 130000, 'NY': 120000, 'MA': 125000, 'TX': 115000}}");
    record36.set("relatedCareers", ["software-engineer", "hardware-engineer", "robotics-engineer", "iot-engineer"]);
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
    record37.set("name", "IoT Engineer");
    record37.set("slug", "iot-engineer");
    record37.set("description", "Develop Internet of Things applications and systems");
    record37.set("overview", "IoT engineers design and build connected devices and systems that collect, process, and transmit data, enabling smart applications and automation.");
    record37.set("averageSalary", 125000);
    record37.set("salaryRange", "{'min': 75000, 'max': 200000}");
    record37.set("jobDemandOutlook", "Strong - 18% growth through 2032");
    record37.set("topPayingStates", ["CA", "WA", "NY", "MA", "TX"]);
    record37.set("roadmap", "{'Beginner': {'skills': ['Python', 'IoT Basics', 'Sensors', 'Connectivity'], 'projects': ['Simple IoT Device', 'Sensor Integration', 'Data Collection'], 'certifications': ['IoT Basics Certificate'], 'resources': ['Arduino', 'Coursera'], 'expectedSalary': 70000}, 'Intermediate': {'skills': ['Advanced IoT', 'Cloud Integration', 'Edge Computing', 'Security'], 'projects': ['Connected Device', 'Cloud Integration', 'Edge Application'], 'certifications': ['AWS IoT Specialty'], 'resources': ['AWS Training', 'Udemy'], 'expectedSalary': 115000}, 'Advanced': {'skills': ['Advanced IoT Architecture', '5G', 'System Design', 'Leadership'], 'projects': ['IoT Platform', '5G Application', 'Scalable System'], 'certifications': ['Advanced IoT Specialization'], 'resources': ['Advanced Courses', 'Industry Leaders'], 'expectedSalary': 180000}}");
    record37.set("skillsRequired", "{'technical': ['Python', 'IoT Platforms', 'Cloud Services', 'Sensors', 'Connectivity'], 'soft': ['Problem Solving', 'Systems Thinking', 'Communication', 'Teamwork'], 'tools': ['Python', 'AWS IoT', 'Azure IoT', 'MQTT', 'Raspberry Pi']}");
    record37.set("salaryInsights", "{'byLevel': {'beginner': 70000, 'intermediate': 115000, 'advanced': 180000}, 'byState': {'CA': 145000, 'WA': 135000, 'NY': 125000, 'MA': 130000, 'TX': 120000}}");
    record37.set("relatedCareers", ["embedded-systems-engineer", "software-engineer", "cloud-architect", "robotics-engineer"]);
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
    record38.set("name", "VR Developer");
    record38.set("slug", "vr-developer");
    record38.set("description", "Create virtual reality experiences and applications");
    record38.set("overview", "VR developers build immersive virtual reality experiences using game engines and VR platforms, creating applications for gaming, training, and simulation.");
    record38.set("averageSalary", 120000);
    record38.set("salaryRange", "{'min': 70000, 'max': 190000}");
    record38.set("jobDemandOutlook", "Strong - 20% growth through 2032");
    record38.set("topPayingStates", ["CA", "WA", "NY", "MA", "TX"]);
    record38.set("roadmap", "{'Beginner': {'skills': ['C#/C++', 'Unity/Unreal', 'VR Basics', '3D Graphics'], 'projects': ['Simple VR App', 'VR Scene', 'Interactive Experience'], 'certifications': ['VR Developer Certificate'], 'resources': ['Unity Learn', 'Udemy'], 'expectedSalary': 65000}, 'Intermediate': {'skills': ['Advanced VR', 'Physics', 'Interaction Design', 'Performance'], 'projects': ['Complex VR App', 'Multiplayer VR', 'Optimized Experience'], 'certifications': ['Advanced VR Development'], 'resources': ['Udemy', 'VR Courses'], 'expectedSalary': 110000}, 'Advanced': {'skills': ['VR Architecture', 'Advanced Graphics', 'Leadership', 'Innovation'], 'projects': ['VR Platform', 'Advanced Experience', 'Innovative App'], 'certifications': ['Advanced VR Specialization'], 'resources': ['Advanced Courses', 'Industry Leaders'], 'expectedSalary': 170000}}");
    record38.set("skillsRequired", "{'technical': ['C#/C++', 'VR Engines', '3D Graphics', 'Physics', 'Interaction Design'], 'soft': ['Creativity', 'Problem Solving', 'Attention to Detail', 'Teamwork'], 'tools': ['Unity', 'Unreal Engine', 'Blender', 'SteamVR', 'Oculus SDK']}");
    record38.set("salaryInsights", "{'byLevel': {'beginner': 65000, 'intermediate': 110000, 'advanced': 170000}, 'byState': {'CA': 140000, 'WA': 130000, 'NY': 120000, 'MA': 125000, 'TX': 110000}}");
    record38.set("relatedCareers", ["game-developer", "graphics-programmer", "software-engineer", "ux-designer"]);
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
    record39.set("name", "AR Developer");
    record39.set("slug", "ar-developer");
    record39.set("description", "Create augmented reality applications");
    record39.set("overview", "AR developers build augmented reality experiences that blend digital content with the real world, creating interactive applications for mobile and web.");
    record39.set("averageSalary", 120000);
    record39.set("salaryRange", "{'min': 70000, 'max': 190000}");
    record39.set("jobDemandOutlook", "Strong - 20% growth through 2032");
    record39.set("topPayingStates", ["CA", "WA", "NY", "MA", "TX"]);
    record39.set("roadmap", "{'Beginner': {'skills': ['Swift/Kotlin', 'ARKit/ARCore', '3D Graphics', 'Mobile Dev'], 'projects': ['Simple AR App', 'Object Detection', 'Interactive AR'], 'certifications': ['AR Developer Certificate'], 'resources': ['Apple Developer', 'Udemy'], 'expectedSalary': 65000}, 'Intermediate': {'skills': ['Advanced AR', 'Computer Vision', 'Physics', 'Performance'], 'projects': ['Complex AR App', 'Real-world Integration', 'Optimized App'], 'certifications': ['Advanced AR Development'], 'resources': ['Udemy', 'AR Courses'], 'expectedSalary': 110000}, 'Advanced': {'skills': ['AR Architecture', 'Advanced Vision', 'Leadership', 'Innovation'], 'projects': ['AR Platform', 'Advanced Experience', 'Innovative App'], 'certifications': ['Advanced AR Specialization'], 'resources': ['Advanced Courses', 'Industry Leaders'], 'expectedSalary': 170000}}");
    record39.set("skillsRequired", "{'technical': ['Swift/Kotlin', 'ARKit/ARCore', 'Computer Vision', '3D Graphics', 'Mobile Dev'], 'soft': ['Creativity', 'Problem Solving', 'Attention to Detail', 'Teamwork'], 'tools': ['ARKit', 'ARCore', 'Unity', 'Blender', 'Xcode']}");
    record39.set("salaryInsights", "{'byLevel': {'beginner': 65000, 'intermediate': 110000, 'advanced': 170000}, 'byState': {'CA': 140000, 'WA': 130000, 'NY': 120000, 'MA': 125000, 'TX': 110000}}");
    record39.set("relatedCareers", ["mobile-developer", "game-developer", "ux-designer", "software-engineer"]);
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
    record40.set("name", "Quantum Developer");
    record40.set("slug", "quantum-developer");
    record40.set("description", "Develop quantum computing applications");
    record40.set("overview", "Quantum developers write algorithms and applications for quantum computers, working with quantum programming frameworks and solving quantum-specific problems.");
    record40.set("averageSalary", 160000);
    record40.set("salaryRange", "{'min': 110000, 'max': 250000}");
    record40.set("jobDemandOutlook", "Emerging - 50% growth through 2032");
    record40.set("topPayingStates", ["CA", "WA", "NY", "MA", "TX"]);
    record40.set("roadmap", "{'Beginner': {'skills': ['Python', 'Quantum Basics', 'Linear Algebra', 'Qiskit'], 'projects': ['Simple Quantum Circuit', 'Quantum Algorithm', 'Simulation'], 'certifications': ['Quantum Computing Basics'], 'resources': ['IBM Quantum', 'Coursera'], 'expectedSalary': 100000}, 'Intermediate': {'skills': ['Advanced Quantum', 'Quantum Algorithms', 'Hardware', 'Optimization'], 'projects': ['Complex Algorithm', 'Hardware Implementation', 'Optimization'], 'certifications': ['Advanced Quantum Computing'], 'resources': ['IBM Quantum', 'Udemy'], 'expectedSalary': 150000}, 'Advanced': {'skills': ['Cutting-edge Quantum', 'Research', 'System Design', 'Leadership'], 'projects': ['Novel Algorithm', 'Research Paper', 'Quantum System'], 'certifications': ['Advanced Quantum Specialization'], 'resources': ['Research Papers', 'Advanced Courses'], 'expectedSalary': 230000}}");
    record40.set("skillsRequired", "{'technical': ['Python', 'Quantum Computing', 'Linear Algebra', 'Physics', 'Algorithms'], 'soft': ['Research Mindset', 'Problem Solving', 'Creativity', 'Communication'], 'tools': ['Qiskit', 'Cirq', 'Q#', 'Python', 'Jupyter']}");
    record40.set("salaryInsights", "{'byLevel': {'beginner': 100000, 'intermediate': 150000, 'advanced': 230000}, 'byState': {'CA': 190000, 'WA': 180000, 'NY': 170000, 'MA': 175000, 'TX': 160000}}");
    record40.set("relatedCareers", ["software-engineer", "research-scientist", "physicist", "mathematician"]);
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
    record41.set("name", "Prompt Engineer");
    record41.set("slug", "prompt-engineer");
    record41.set("description", "Optimize interactions with large language models");
    record41.set("overview", "Prompt engineers craft effective prompts and workflows for large language models, optimizing outputs for specific tasks and applications.");
    record41.set("averageSalary", 115000);
    record41.set("salaryRange", "{'min': 70000, 'max': 180000}");
    record41.set("jobDemandOutlook", "Emerging - 40% growth through 2032");
    record41.set("topPayingStates", ["CA", "WA", "NY", "MA", "TX"]);
    record41.set("roadmap", "{'Beginner': {'skills': ['LLM Basics', 'Prompt Design', 'ChatGPT', 'API Usage'], 'projects': ['Prompt Optimization', 'Simple Application', 'Workflow'], 'certifications': ['Prompt Engineering Basics'], 'resources': ['OpenAI', 'Coursera'], 'expectedSalary': 65000}, 'Intermediate': {'skills': ['Advanced Prompting', 'Fine-tuning', 'Evaluation', 'Integration'], 'projects': ['Complex Application', 'Fine-tuned Model', 'Production System'], 'certifications': ['Advanced Prompt Engineering'], 'resources': ['OpenAI', 'Udemy'], 'expectedSalary': 110000}, 'Advanced': {'skills': ['LLM Architecture', 'Advanced Fine-tuning', 'Research', 'Leadership'], 'projects': ['Custom LLM', 'Research', 'Innovative Application'], 'certifications': ['Advanced LLM Specialization'], 'resources': ['Research Papers', 'Advanced Courses'], 'expectedSalary': 170000}}");
    record41.set("skillsRequired", "{'technical': ['LLM Knowledge', 'Prompt Design', 'API Integration', 'Python Basics'], 'soft': ['Creativity', 'Communication', 'Problem Solving', 'Experimentation'], 'tools': ['ChatGPT', 'OpenAI API', 'Python', 'Langchain', 'Hugging Face']}");
    record41.set("salaryInsights", "{'byLevel': {'beginner': 65000, 'intermediate': 110000, 'advanced': 170000}, 'byState': {'CA': 135000, 'WA': 125000, 'NY': 115000, 'MA': 120000, 'TX': 105000}}");
    record41.set("relatedCareers", ["ai-engineer", "machine-learning-engineer", "nlp-engineer", "software-engineer"]);
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
    record42.set("name", "Generalist Developer");
    record42.set("slug", "generalist-developer");
    record42.set("description", "Develop across multiple technologies and domains");
    record42.set("overview", "Generalist developers work across various technologies and domains, adapting quickly to new tools and solving diverse problems with broad technical knowledge.");
    record42.set("averageSalary", 125000);
    record42.set("salaryRange", "{'min': 75000, 'max': 200000}");
    record42.set("jobDemandOutlook", "Strong - 15% growth through 2032");
    record42.set("topPayingStates", ["CA", "WA", "NY", "MA", "CO"]);
    record42.set("roadmap", "{'Beginner': {'skills': ['Multiple Languages', 'Web Basics', 'Databases', 'Git'], 'projects': ['Multi-tech Project', 'Full Stack App', 'Diverse Tools'], 'certifications': ['Generalist Developer Certificate'], 'resources': ['Udemy', 'Codecademy'], 'expectedSalary': 70000}, 'Intermediate': {'skills': ['Advanced Multi-tech', 'Architecture', 'DevOps Basics', 'Cloud'], 'projects': ['Complex Multi-tech', 'Cloud Application', 'Diverse Stack'], 'certifications': ['Advanced Generalist Certificate'], 'resources': ['Udemy', 'Pluralsight'], 'expectedSalary': 115000}, 'Advanced': {'skills': ['Advanced Architecture', 'Leadership', 'Strategic Tech', 'Innovation'], 'projects': ['Enterprise Solution', 'Tech Strategy', 'Transformation'], 'certifications': ['Advanced Generalist Specialization'], 'resources': ['Advanced Courses', 'Industry Leaders'], 'expectedSalary': 180000}}");
    record42.set("skillsRequired", "{'technical': ['Multiple Languages', 'Web Development', 'Databases', 'Cloud Platforms', 'DevOps'], 'soft': ['Adaptability', 'Problem Solving', 'Communication', 'Continuous Learning'], 'tools': ['Multiple Frameworks', 'Docker', 'Cloud Platforms', 'Git', 'Various DBs']}");
    record42.set("salaryInsights", "{'byLevel': {'beginner': 70000, 'intermediate': 115000, 'advanced': 180000}, 'byState': {'CA': 145000, 'WA': 135000, 'NY': 125000, 'MA': 130000, 'CO': 120000}}");
    record42.set("relatedCareers", ["software-engineer", "full-stack-developer", "solutions-architect", "technical-lead"]);
  try {
    app.save(record42);
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
