/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerLevels");

  const record0 = new Record(collection);
    record0.set("careerSlug", "frontend-developer");
    record0.set("level", "Beginner");
    record0.set("timeline", "6-12 months");
    record0.set("salary", "$45K-$75K");
    record0.set("skills", ["HTML Basics", "CSS Fundamentals", "JavaScript Basics", "DOM Manipulation", "Responsive Design"]);
    record0.set("projects", ["Personal Portfolio Website", "Todo App with Vanilla JS", "Weather App using API"]);
    record0.set("certifications", ["freeCodeCamp Responsive Web Design", "Google Front-End Developer Basics"]);
    record0.set("resources", ["MDN Web Docs", "freeCodeCamp", "Codecademy", "CSS-Tricks"]);
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
    record1.set("careerSlug", "frontend-developer");
    record1.set("level", "Intermediate");
    record1.set("timeline", "12-24 months");
    record1.set("salary", "$75K-$120K");
    record1.set("skills", ["React Fundamentals", "State Management", "Component Design", "API Integration", "Testing Basics"]);
    record1.set("projects", ["E-commerce Product Page", "Social Media Feed Clone", "Real-time Chat Application"]);
    record1.set("certifications", ["React Developer Certification", "Advanced JavaScript"]);
    record1.set("resources", ["React Official Docs", "Udemy React Courses", "Frontend Masters", "Dev.to Articles"]);
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
    record2.set("careerSlug", "frontend-developer");
    record2.set("level", "Advanced");
    record2.set("timeline", "24+ months");
    record2.set("salary", "$120K-$200K+");
    record2.set("skills", ["Advanced React Patterns", "Performance Optimization", "TypeScript Mastery", "Web Security", "Accessibility Standards"]);
    record2.set("projects", ["Large-scale SPA Architecture", "Design System Implementation", "Performance-optimized Dashboard"]);
    record2.set("certifications", ["Advanced React Patterns", "Web Performance Optimization"]);
    record2.set("resources", ["React Advanced Patterns", "Web.dev", "Egghead.io", "Conference Talks"]);
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
    record3.set("careerSlug", "backend-developer");
    record3.set("level", "Beginner");
    record3.set("timeline", "6-12 months");
    record3.set("salary", "$45K-$75K");
    record3.set("skills", ["Python/Node.js Basics", "SQL Fundamentals", "REST API Basics", "Database Design", "Authentication Basics"]);
    record3.set("projects", ["Simple REST API", "Todo List Backend", "User Authentication System"]);
    record3.set("certifications", ["Python for Everybody", "Node.js Basics"]);
    record3.set("resources", ["Python Official Docs", "Node.js Docs", "SQL Tutorial", "Postman Learning"]);
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
    record4.set("careerSlug", "backend-developer");
    record4.set("level", "Intermediate");
    record4.set("timeline", "12-24 months");
    record4.set("salary", "$75K-$120K");
    record4.set("skills", ["Advanced SQL", "API Design Patterns", "Database Optimization", "Caching Strategies", "Microservices Basics"]);
    record4.set("projects", ["E-commerce API", "Real-time Notification System", "Data Pipeline"]);
    record4.set("certifications", ["AWS Certified Developer", "Advanced SQL"]);
    record4.set("resources", ["System Design Primer", "Designing Data-Intensive Applications", "AWS Docs", "Backend Masters"]);
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
    record5.set("careerSlug", "backend-developer");
    record5.set("level", "Advanced");
    record5.set("timeline", "24+ months");
    record5.set("salary", "$120K-$200K+");
    record5.set("skills", ["System Design", "Distributed Systems", "Performance Tuning", "Security Hardening", "DevOps Integration"]);
    record5.set("projects", ["Scalable Microservices Architecture", "High-performance Database System", "Real-time Analytics Platform"]);
    record5.set("certifications", ["System Design Mastery", "AWS Solutions Architect"]);
    record5.set("resources", ["Designing Data-Intensive Applications", "System Design Interview", "Conference Talks", "Research Papers"]);
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
    record6.set("careerSlug", "full-stack-developer");
    record6.set("level", "Beginner");
    record6.set("timeline", "6-12 months");
    record6.set("salary", "$45K-$75K");
    record6.set("skills", ["HTML/CSS", "JavaScript", "Basic Backend", "Database Basics", "Git Fundamentals"]);
    record6.set("projects", ["Personal Portfolio", "Blog Platform", "Simple CRUD App"]);
    record6.set("certifications", ["Full Stack Basics", "Git Fundamentals"]);
    record6.set("resources", ["freeCodeCamp Full Stack", "Codecademy", "MDN Docs", "GitHub Learning"]);
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
    record7.set("careerSlug", "full-stack-developer");
    record7.set("level", "Intermediate");
    record7.set("timeline", "12-24 months");
    record7.set("salary", "$75K-$120K");
    record7.set("skills", ["React/Vue", "Node.js/Python", "MongoDB/PostgreSQL", "API Design", "Deployment Basics"]);
    record7.set("projects", ["Full Stack E-commerce", "Social Network MVP", "Project Management Tool"]);
    record7.set("certifications", ["MERN Stack Certification", "Full Stack Web Development"]);
    record7.set("resources", ["Udemy Full Stack Courses", "Frontend Masters", "Egghead.io", "Dev.to"]);
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
    record8.set("careerSlug", "full-stack-developer");
    record8.set("level", "Advanced");
    record8.set("timeline", "24+ months");
    record8.set("salary", "$120K-$200K+");
    record8.set("skills", ["Advanced Architecture", "Performance Optimization", "Security Best Practices", "DevOps Knowledge", "Scalability Design"]);
    record8.set("projects", ["Enterprise SaaS Platform", "High-traffic Web Application", "Microservices Architecture"]);
    record8.set("certifications", ["Advanced Full Stack", "AWS Solutions Architect"]);
    record8.set("resources", ["System Design Primer", "Designing Data-Intensive Applications", "Conference Talks", "Research Papers"]);
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
    record9.set("careerSlug", "data-scientist");
    record9.set("level", "Beginner");
    record9.set("timeline", "6-12 months");
    record9.set("salary", "$45K-$75K");
    record9.set("skills", ["Python Basics", "Statistics Fundamentals", "Data Visualization", "Pandas Basics", "SQL Basics"]);
    record9.set("projects", ["Exploratory Data Analysis", "Simple Prediction Model", "Data Visualization Dashboard"]);
    record9.set("certifications", ["Google Data Analytics", "Python for Data Science"]);
    record9.set("resources", ["Kaggle Learn", "DataCamp", "Coursera", "Towards Data Science"]);
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
    record10.set("careerSlug", "data-scientist");
    record10.set("level", "Intermediate");
    record10.set("timeline", "12-24 months");
    record10.set("salary", "$75K-$120K");
    record10.set("skills", ["Machine Learning Algorithms", "Feature Engineering", "Model Evaluation", "Advanced Statistics", "Deep Learning Basics"]);
    record10.set("projects", ["Classification Model", "Time Series Forecasting", "Recommendation System"]);
    record10.set("certifications", ["IBM Data Science Professional", "Machine Learning Specialization"]);
    record10.set("resources", ["Fast.ai", "Coursera ML Specialization", "Kaggle Competitions", "Research Papers"]);
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
    record11.set("careerSlug", "data-scientist");
    record11.set("level", "Advanced");
    record11.set("timeline", "24+ months");
    record11.set("salary", "$120K-$200K+");
    record11.set("skills", ["Advanced Deep Learning", "NLP Expertise", "Computer Vision", "Production ML", "Research Skills"]);
    record11.set("projects", ["Large-scale ML System", "NLP Application", "Computer Vision Model"]);
    record11.set("certifications", ["Advanced Deep Learning", "Research Publication"]);
    record11.set("resources", ["Research Papers", "Conference Talks", "Advanced Courses", "Industry Blogs"]);
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
    record12.set("careerSlug", "data-engineer");
    record12.set("level", "Beginner");
    record12.set("timeline", "6-12 months");
    record12.set("salary", "$45K-$75K");
    record12.set("skills", ["Python Basics", "SQL Fundamentals", "ETL Concepts", "Data Warehousing Basics", "Git"]);
    record12.set("projects", ["Simple ETL Pipeline", "Data Warehouse Schema", "Data Quality Checks"]);
    record12.set("certifications", ["SQL Fundamentals", "Python Basics"]);
    record12.set("resources", ["SQL Tutorial", "Python Docs", "Udemy ETL Courses", "DataCamp"]);
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
    record13.set("careerSlug", "data-engineer");
    record13.set("level", "Intermediate");
    record13.set("timeline", "12-24 months");
    record13.set("salary", "$75K-$120K");
    record13.set("skills", ["Apache Spark", "Hadoop Ecosystem", "Advanced SQL", "Cloud Platforms", "Data Pipeline Design"]);
    record13.set("projects", ["Spark Data Processing", "Cloud Data Warehouse", "Real-time Data Pipeline"]);
    record13.set("certifications", ["Cloudera Data Engineer", "AWS Data Analytics"]);
    record13.set("resources", ["Spark Documentation", "Hadoop Docs", "Udemy Courses", "DataCamp"]);
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
    record14.set("careerSlug", "data-engineer");
    record14.set("level", "Advanced");
    record14.set("timeline", "24+ months");
    record14.set("salary", "$120K-$200K+");
    record14.set("skills", ["Advanced Spark", "Distributed Systems", "Performance Optimization", "Data Governance", "Architecture Design"]);
    record14.set("projects", ["Enterprise Data Lake", "Real-time Analytics Platform", "Data Governance System"]);
    record14.set("certifications", ["Advanced Data Engineering", "System Design"]);
    record14.set("resources", ["Designing Data-Intensive Applications", "Conference Talks", "Research Papers", "Industry Blogs"]);
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
    record15.set("careerSlug", "devops-engineer");
    record15.set("level", "Beginner");
    record15.set("timeline", "6-12 months");
    record15.set("salary", "$45K-$75K");
    record15.set("skills", ["Linux Basics", "Docker Fundamentals", "Git", "Shell Scripting", "CI/CD Basics"]);
    record15.set("projects", ["Dockerized Application", "Simple CI/CD Pipeline", "Linux Server Setup"]);
    record15.set("certifications", ["Docker Basics", "Linux Fundamentals"]);
    record15.set("resources", ["Docker Documentation", "Linux Academy", "Udemy Courses", "Linux Handbook"]);
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
    record16.set("careerSlug", "devops-engineer");
    record16.set("level", "Intermediate");
    record16.set("timeline", "12-24 months");
    record16.set("salary", "$75K-$120K");
    record16.set("skills", ["Kubernetes", "Advanced CI/CD", "Infrastructure as Code", "Cloud Platforms", "Monitoring"]);
    record16.set("projects", ["Kubernetes Cluster Setup", "Advanced CI/CD Pipeline", "Infrastructure Automation"]);
    record16.set("certifications", ["Kubernetes Administrator", "AWS DevOps Engineer"]);
    record16.set("resources", ["Kubernetes Documentation", "Terraform Docs", "Linux Academy", "A Cloud Guru"]);
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
    record17.set("careerSlug", "devops-engineer");
    record17.set("level", "Advanced");
    record17.set("timeline", "24+ months");
    record17.set("salary", "$120K-$200K+");
    record17.set("skills", ["Advanced Kubernetes", "Distributed Systems", "Performance Tuning", "Security Hardening", "Architecture Design"]);
    record17.set("projects", ["Enterprise Kubernetes Platform", "Multi-cloud Infrastructure", "High-availability System"]);
    record17.set("certifications", ["Advanced Kubernetes", "AWS Solutions Architect"]);
    record17.set("resources", ["Kubernetes Advanced", "CNCF Resources", "Conference Talks", "Research Papers"]);
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
    record18.set("careerSlug", "cloud-architect");
    record18.set("level", "Beginner");
    record18.set("timeline", "6-12 months");
    record18.set("salary", "$45K-$75K");
    record18.set("skills", ["Cloud Fundamentals", "AWS/Azure Basics", "Networking Basics", "Security Basics", "Cost Management"]);
    record18.set("projects", ["Simple Cloud Application", "Cloud Migration Plan", "Cost Optimization Analysis"]);
    record18.set("certifications", ["AWS Cloud Practitioner", "Azure Fundamentals"]);
    record18.set("resources", ["AWS Training", "Azure Learn", "Cloud Academy", "Linux Academy"]);
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
    record19.set("careerSlug", "cloud-architect");
    record19.set("level", "Intermediate");
    record19.set("timeline", "12-24 months");
    record19.set("salary", "$75K-$120K");
    record19.set("skills", ["Advanced AWS/Azure", "System Design", "Security Architecture", "Scalability Design", "Cost Optimization"]);
    record19.set("projects", ["Multi-tier Cloud Application", "Disaster Recovery Plan", "Cloud Security Architecture"]);
    record19.set("certifications", ["AWS Solutions Architect Associate", "Azure Solutions Architect"]);
    record19.set("resources", ["AWS Docs", "Azure Docs", "A Cloud Guru", "Linux Academy"]);
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
    record20.set("careerSlug", "cloud-architect");
    record20.set("level", "Advanced");
    record20.set("timeline", "24+ months");
    record20.set("salary", "$120K-$200K+");
    record20.set("skills", ["Enterprise Architecture", "Multi-cloud Strategy", "Advanced Security", "Performance Optimization", "Cost Governance"]);
    record20.set("projects", ["Enterprise Cloud Strategy", "Multi-cloud Architecture", "Global Infrastructure Design"]);
    record20.set("certifications", ["AWS Solutions Architect Professional", "Azure Solutions Architect Expert"]);
    record20.set("resources", ["AWS Advanced", "Azure Advanced", "Conference Talks", "Research Papers"]);
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
    record21.set("careerSlug", "security-engineer");
    record21.set("level", "Beginner");
    record21.set("timeline", "6-12 months");
    record21.set("salary", "$45K-$75K");
    record21.set("skills", ["Security Fundamentals", "Network Security Basics", "Cryptography Basics", "Vulnerability Assessment", "Compliance Basics"]);
    record21.set("projects", ["Security Audit", "Vulnerability Scan", "Security Policy Documentation"]);
    record21.set("certifications", ["CompTIA Security+", "CEH Basics"]);
    record21.set("resources", ["Security+ Study Guide", "CEH Study Guide", "OWASP", "Cybrary"]);
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
    record22.set("careerSlug", "security-engineer");
    record22.set("level", "Intermediate");
    record22.set("timeline", "12-24 months");
    record22.set("salary", "$75K-$120K");
    record22.set("skills", ["Penetration Testing", "Advanced Cryptography", "Incident Response", "Security Architecture", "Compliance Management"]);
    record22.set("projects", ["Penetration Test Report", "Security Architecture Design", "Incident Response Plan"]);
    record22.set("certifications", ["CEH Certified", "OSCP"]);
    record22.set("resources", ["CEH Study Guide", "OSCP Prep", "HackTheBox", "TryHackMe"]);
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
    record23.set("careerSlug", "security-engineer");
    record23.set("level", "Advanced");
    record23.set("timeline", "24+ months");
    record23.set("salary", "$120K-$200K+");
    record23.set("skills", ["Advanced Penetration Testing", "Security Architecture", "Threat Modeling", "Security Governance", "Research Skills"]);
    record23.set("projects", ["Enterprise Security Architecture", "Threat Intelligence System", "Security Research"]);
    record23.set("certifications", ["CISSP", "OSCP Advanced"]);
    record23.set("resources", ["CISSP Study Guide", "Advanced Security Research", "Conference Talks", "Research Papers"]);
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
    record24.set("careerSlug", "product-manager");
    record24.set("level", "Beginner");
    record24.set("timeline", "6-12 months");
    record24.set("salary", "$45K-$75K");
    record24.set("skills", ["Product Strategy Basics", "User Research", "Data Analysis", "Communication", "Roadmapping Basics"]);
    record24.set("projects", ["Product Requirements Document", "User Research Report", "Product Roadmap"]);
    record24.set("certifications", ["Reforge Product Management", "Product School Basics"]);
    record24.set("resources", ["Inspired by Marty Cagan", "Cracking the PM Interview", "Product School", "Mind the Product"]);
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
    record25.set("careerSlug", "product-manager");
    record25.set("level", "Intermediate");
    record25.set("timeline", "12-24 months");
    record25.set("salary", "$75K-$120K");
    record25.set("skills", ["Advanced Product Strategy", "Metrics & Analytics", "User Testing", "Stakeholder Management", "Agile Methodologies"]);
    record25.set("projects", ["Product Launch", "Feature Prioritization", "User Testing Program"]);
    record25.set("certifications", ["Reforge Advanced PM", "Pragmatic Marketing"]);
    record25.set("resources", ["Inspired", "Lean Product Playbook", "Reforge", "Product School"]);
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
    record26.set("careerSlug", "product-manager");
    record26.set("level", "Advanced");
    record26.set("timeline", "24+ months");
    record26.set("salary", "$120K-$200K+");
    record26.set("skills", ["Enterprise Product Strategy", "Market Analysis", "Team Leadership", "Business Acumen", "Innovation Management"]);
    record26.set("projects", ["Enterprise Product Strategy", "Market Expansion Plan", "Product Portfolio Management"]);
    record26.set("certifications", ["Advanced Product Management", "Executive Leadership"]);
    record26.set("resources", ["Inspired Advanced", "Good Strategy Bad Strategy", "Conference Talks", "Industry Research"]);
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
    record27.set("careerSlug", "ux-designer");
    record27.set("level", "Beginner");
    record27.set("timeline", "6-12 months");
    record27.set("salary", "$45K-$75K");
    record27.set("skills", ["Design Fundamentals", "Wireframing", "User Research Basics", "Figma Basics", "Prototyping"]);
    record27.set("projects", ["Wireframe Set", "User Research Report", "Low-fidelity Prototype"]);
    record27.set("certifications", ["Google UX Design", "Figma Basics"]);
    record27.set("resources", ["Google UX Design Course", "Figma Tutorials", "Design Fundamentals", "UX Collective"]);
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
    record28.set("careerSlug", "ux-designer");
    record28.set("level", "Intermediate");
    record28.set("timeline", "12-24 months");
    record28.set("salary", "$75K-$120K");
    record28.set("skills", ["Advanced Wireframing", "Interaction Design", "Usability Testing", "Design Systems", "Prototyping"]);
    record28.set("projects", ["Interactive Prototype", "Usability Test Report", "Design System Components"]);
    record28.set("certifications", ["Nielsen Norman UX Certification", "Advanced Figma"]);
    record28.set("resources", ["Don't Make Me Think", "The Design of Everyday Things", "Nielsen Norman", "Interaction Design Foundation"]);
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
    record29.set("careerSlug", "ux-designer");
    record29.set("level", "Advanced");
    record29.set("timeline", "24+ months");
    record29.set("salary", "$120K-$200K+");
    record29.set("skills", ["Advanced Interaction Design", "Design Leadership", "Research Methodology", "Design Strategy", "Accessibility Mastery"]);
    record29.set("projects", ["Design System", "Research-driven Redesign", "Design Strategy Document"]);
    record29.set("certifications", ["Advanced UX Design", "Design Leadership"]);
    record29.set("resources", ["Advanced UX Research", "Design Leadership", "Conference Talks", "Research Papers"]);
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
    record30.set("careerSlug", "mobile-developer");
    record30.set("level", "Beginner");
    record30.set("timeline", "6-12 months");
    record30.set("salary", "$45K-$75K");
    record30.set("skills", ["Swift/Kotlin Basics", "Mobile UI Fundamentals", "API Integration", "Mobile Testing", "Git"]);
    record30.set("projects", ["Simple iOS/Android App", "Todo App", "Weather App"]);
    record30.set("certifications", ["Google Associate Android Developer", "Swift Basics"]);
    record30.set("resources", ["Swift Documentation", "Kotlin Documentation", "Android Developers", "iOS Developers"]);
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
    record31.set("careerSlug", "mobile-developer");
    record31.set("level", "Intermediate");
    record31.set("timeline", "12-24 months");
    record31.set("salary", "$75K-$120K");
    record31.set("skills", ["Advanced Swift/Kotlin", "Mobile Architecture", "Performance Optimization", "Firebase Integration", "Testing"]);
    record31.set("projects", ["E-commerce App", "Social Media App", "Real-time Chat App"]);
    record31.set("certifications", ["Advanced Android Developer", "iOS Developer Certification"]);
    record31.set("resources", ["Android Developers Advanced", "iOS Developers Advanced", "Udemy Courses", "Ray Wenderlich"]);
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
    record32.set("careerSlug", "mobile-developer");
    record32.set("level", "Advanced");
    record32.set("timeline", "24+ months");
    record32.set("salary", "$120K-$200K+");
    record32.set("skills", ["Advanced Architecture", "Cross-platform Development", "Performance Tuning", "Security Hardening", "Leadership"]);
    record32.set("projects", ["Large-scale Mobile App", "Cross-platform Framework", "Mobile Platform Architecture"]);
    record32.set("certifications", ["Advanced Mobile Development", "Mobile Architecture"]);
    record32.set("resources", ["Advanced Mobile Patterns", "Conference Talks", "Research Papers", "Industry Blogs"]);
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
    record33.set("careerSlug", "qa-engineer");
    record33.set("level", "Beginner");
    record33.set("timeline", "6-12 months");
    record33.set("salary", "$45K-$75K");
    record33.set("skills", ["Manual Testing", "Test Planning", "Bug Reporting", "SQL Basics", "Test Case Design"]);
    record33.set("projects", ["Test Plan Document", "Test Case Suite", "Bug Report Analysis"]);
    record33.set("certifications", ["ISTQB Certified Tester", "QA Basics"]);
    record33.set("resources", ["ISTQB Study Guide", "QA Fundamentals", "Software Testing Help", "Udemy QA Courses"]);
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
    record34.set("careerSlug", "qa-engineer");
    record34.set("level", "Intermediate");
    record34.set("timeline", "12-24 months");
    record34.set("salary", "$75K-$120K");
    record34.set("skills", ["Test Automation", "Selenium", "API Testing", "Performance Testing", "Test Framework Design"]);
    record34.set("projects", ["Automation Test Suite", "API Test Framework", "Performance Test Report"]);
    record34.set("certifications", ["Selenium Certification", "Advanced ISTQB"]);
    record34.set("resources", ["Selenium Documentation", "Postman Learning", "TestNG Docs", "Udemy Automation Courses"]);
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
    record35.set("careerSlug", "qa-engineer");
    record35.set("level", "Advanced");
    record35.set("timeline", "24+ months");
    record35.set("salary", "$120K-$200K+");
    record35.set("skills", ["Advanced Automation", "Test Architecture", "CI/CD Integration", "Performance Tuning", "Leadership"]);
    record35.set("projects", ["Enterprise Test Framework", "Continuous Testing Platform", "Quality Metrics System"]);
    record35.set("certifications", ["Advanced Automation", "Test Architecture"]);
    record35.set("resources", ["Advanced Test Automation", "Conference Talks", "Research Papers", "Industry Blogs"]);
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
    record36.set("careerSlug", "solutions-architect");
    record36.set("level", "Beginner");
    record36.set("timeline", "6-12 months");
    record36.set("salary", "$45K-$75K");
    record36.set("skills", ["System Design Basics", "Cloud Fundamentals", "Architecture Patterns", "Communication", "Documentation"]);
    record36.set("projects", ["Architecture Diagram", "Solution Design Document", "Cost Analysis"]);
    record36.set("certifications", ["AWS Cloud Practitioner", "Azure Fundamentals"]);
    record36.set("resources", ["AWS Training", "Azure Learn", "System Design Primer", "Architecture Patterns"]);
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
    record37.set("careerSlug", "solutions-architect");
    record37.set("level", "Intermediate");
    record37.set("timeline", "12-24 months");
    record37.set("salary", "$75K-$120K");
    record37.set("skills", ["Advanced System Design", "Cloud Architecture", "Security Design", "Scalability Design", "Client Communication"]);
    record37.set("projects", ["Enterprise Solution Design", "Cloud Migration Plan", "Security Architecture"]);
    record37.set("certifications", ["AWS Solutions Architect Associate", "Azure Solutions Architect"]);
    record37.set("resources", ["AWS Docs", "Azure Docs", "System Design Primer", "A Cloud Guru"]);
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
    record38.set("careerSlug", "solutions-architect");
    record38.set("level", "Advanced");
    record38.set("timeline", "24+ months");
    record38.set("salary", "$120K-$200K+");
    record38.set("skills", ["Enterprise Architecture", "Strategic Planning", "Advanced Security", "Cost Optimization", "Leadership"]);
    record38.set("projects", ["Enterprise Architecture", "Multi-cloud Strategy", "Digital Transformation Plan"]);
    record38.set("certifications", ["AWS Solutions Architect Professional", "Azure Solutions Architect Expert"]);
    record38.set("resources", ["AWS Advanced", "Azure Advanced", "Conference Talks", "Research Papers"]);
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
    record39.set("careerSlug", "machine-learning-engineer");
    record39.set("level", "Beginner");
    record39.set("timeline", "6-12 months");
    record39.set("salary", "$45K-$75K");
    record39.set("skills", ["Python Basics", "Machine Learning Fundamentals", "Data Preprocessing", "Model Training", "Evaluation Metrics"]);
    record39.set("projects", ["Simple ML Model", "Data Preprocessing Pipeline", "Model Evaluation Report"]);
    record39.set("certifications", ["Google ML Engineer Basics", "Fast.ai Basics"]);
    record39.set("resources", ["Fast.ai", "Kaggle Learn", "Coursera ML Basics", "Towards Data Science"]);
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
    record40.set("careerSlug", "machine-learning-engineer");
    record40.set("level", "Intermediate");
    record40.set("timeline", "12-24 months");
    record40.set("salary", "$75K-$120K");
    record40.set("skills", ["TensorFlow/PyTorch", "Deep Learning", "Feature Engineering", "Model Deployment", "MLOps Basics"]);
    record40.set("projects", ["Deep Learning Model", "ML Pipeline", "Model Deployment"]);
    record40.set("certifications", ["TensorFlow Developer", "PyTorch Certification"]);
    record40.set("resources", ["TensorFlow Docs", "PyTorch Docs", "Fast.ai Advanced", "Coursera ML Specialization"]);
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
    record41.set("careerSlug", "machine-learning-engineer");
    record41.set("level", "Advanced");
    record41.set("timeline", "24+ months");
    record41.set("salary", "$120K-$200K+");
    record41.set("skills", ["Advanced Deep Learning", "MLOps Mastery", "Research Skills", "Production ML", "Leadership"]);
    record41.set("projects", ["Large-scale ML System", "MLOps Platform", "Research Publication"]);
    record41.set("certifications", ["Advanced ML Engineering", "Research Publication"]);
    record41.set("resources", ["Research Papers", "Conference Talks", "Advanced Courses", "Industry Blogs"]);
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
    record42.set("careerSlug", "database-administrator");
    record42.set("level", "Beginner");
    record42.set("timeline", "6-12 months");
    record42.set("salary", "$45K-$75K");
    record42.set("skills", ["SQL Fundamentals", "Database Design", "Backup Basics", "Performance Monitoring", "Security Basics"]);
    record42.set("projects", ["Database Schema Design", "Backup Plan", "Performance Report"]);
    record42.set("certifications", ["SQL Fundamentals", "DBA Basics"]);
    record42.set("resources", ["SQL Tutorial", "Oracle Docs", "PostgreSQL Docs", "Udemy DBA Courses"]);
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
    record43.set("careerSlug", "database-administrator");
    record43.set("level", "Intermediate");
    record43.set("timeline", "12-24 months");
    record43.set("salary", "$75K-$120K");
    record43.set("skills", ["Advanced SQL", "Performance Tuning", "Replication", "Disaster Recovery", "Security Hardening"]);
    record43.set("projects", ["Performance Tuning Report", "Replication Setup", "Disaster Recovery Plan"]);
    record43.set("certifications", ["Oracle Database Administrator", "Microsoft SQL Server"]);
    record43.set("resources", ["Oracle Docs", "SQL Server Docs", "PostgreSQL Docs", "Udemy Advanced Courses"]);
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
    record44.set("careerSlug", "database-administrator");
    record44.set("level", "Advanced");
    record44.set("timeline", "24+ months");
    record44.set("salary", "$120K-$200K+");
    record44.set("skills", ["Advanced Performance Tuning", "High Availability", "Data Governance", "Security Architecture", "Leadership"]);
    record44.set("projects", ["Enterprise Database Architecture", "High Availability System", "Data Governance Framework"]);
    record44.set("certifications", ["Advanced DBA", "Data Governance"]);
    record44.set("resources", ["Advanced DBA Docs", "Conference Talks", "Research Papers", "Industry Blogs"]);
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
    record45.set("careerSlug", "systems-administrator");
    record45.set("level", "Beginner");
    record45.set("timeline", "6-12 months");
    record45.set("salary", "$45K-$75K");
    record45.set("skills", ["Linux/Windows Basics", "User Management", "File Systems", "Networking Basics", "Monitoring Basics"]);
    record45.set("projects", ["Server Setup", "User Management Plan", "Monitoring Setup"]);
    record45.set("certifications", ["CompTIA A+", "Linux Fundamentals"]);
    record45.set("resources", ["Linux Academy", "CompTIA Study Guide", "Windows Server Docs", "Udemy Courses"]);
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
    record46.set("careerSlug", "systems-administrator");
    record46.set("level", "Intermediate");
    record46.set("timeline", "12-24 months");
    record46.set("salary", "$75K-$120K");
    record46.set("skills", ["Advanced Linux/Windows", "Virtualization", "Security Hardening", "Automation", "Troubleshooting"]);
    record46.set("projects", ["Virtualization Setup", "Security Hardening Plan", "Automation Scripts"]);
    record46.set("certifications", ["CompTIA Security+", "Linux Administrator"]);
    record46.set("resources", ["Linux Academy Advanced", "CompTIA Security+ Guide", "Ansible Docs", "Udemy Advanced Courses"]);
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
    record47.set("careerSlug", "systems-administrator");
    record47.set("level", "Advanced");
    record47.set("timeline", "24+ months");
    record47.set("salary", "$120K-$200K+");
    record47.set("skills", ["Enterprise Administration", "Advanced Automation", "Disaster Recovery", "Security Architecture", "Leadership"]);
    record47.set("projects", ["Enterprise Infrastructure", "Disaster Recovery System", "Security Architecture"]);
    record47.set("certifications", ["Advanced SysAdmin", "CISSP"]);
    record47.set("resources", ["Advanced SysAdmin Docs", "Conference Talks", "Research Papers", "Industry Blogs"]);
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
    record48.set("careerSlug", "network-engineer");
    record48.set("level", "Beginner");
    record48.set("timeline", "6-12 months");
    record48.set("salary", "$45K-$75K");
    record48.set("skills", ["Networking Fundamentals", "OSI Model", "IP Addressing", "Routing Basics", "Switching Basics"]);
    record48.set("projects", ["Network Design", "IP Addressing Plan", "Network Diagram"]);
    record48.set("certifications", ["CompTIA Network+", "Cisco CCNA Basics"]);
    record48.set("resources", ["CompTIA Network+ Guide", "Cisco Learning Network", "Packet Tracer", "Udemy Courses"]);
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
    record49.set("careerSlug", "network-engineer");
    record49.set("level", "Intermediate");
    record49.set("timeline", "12-24 months");
    record49.set("salary", "$75K-$120K");
    record49.set("skills", ["Advanced Routing", "Advanced Switching", "VPN Configuration", "Firewall Management", "Network Security"]);
    record49.set("projects", ["VPN Setup", "Firewall Configuration", "Network Security Plan"]);
    record49.set("certifications", ["Cisco CCNA", "CompTIA Security+"]);
    record49.set("resources", ["Cisco CCNA Study Guide", "Packet Tracer Labs", "CompTIA Security+ Guide", "Udemy Advanced Courses"]);
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
    record50.set("careerSlug", "network-engineer");
    record50.set("level", "Advanced");
    record50.set("timeline", "24+ months");
    record50.set("salary", "$120K-$200K+");
    record50.set("skills", ["Enterprise Networking", "Advanced Security", "Network Architecture", "Performance Optimization", "Leadership"]);
    record50.set("projects", ["Enterprise Network Architecture", "Network Security System", "Performance Optimization"]);
    record50.set("certifications", ["Cisco CCNP", "CISSP"]);
    record50.set("resources", ["Cisco CCNP Study Guide", "Advanced Networking", "Conference Talks", "Research Papers"]);
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
    record51.set("careerSlug", "cybersecurity-analyst");
    record51.set("level", "Beginner");
    record51.set("timeline", "6-12 months");
    record51.set("salary", "$45K-$75K");
    record51.set("skills", ["Security Fundamentals", "Threat Analysis Basics", "SIEM Basics", "Incident Response Basics", "Compliance Basics"]);
    record51.set("projects", ["Security Audit", "Threat Analysis Report", "Incident Response Plan"]);
    record51.set("certifications", ["CompTIA Security+", "CEH Basics"]);
    record51.set("resources", ["Security+ Study Guide", "CEH Study Guide", "OWASP", "Cybrary"]);
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
    record52.set("careerSlug", "cybersecurity-analyst");
    record52.set("level", "Intermediate");
    record52.set("timeline", "12-24 months");
    record52.set("salary", "$75K-$120K");
    record52.set("skills", ["Advanced Threat Analysis", "SIEM Management", "Incident Response", "Forensics Basics", "Compliance Management"]);
    record52.set("projects", ["SIEM Configuration", "Incident Response Report", "Forensics Analysis"]);
    record52.set("certifications", ["CEH Certified", "GCIH"]);
    record52.set("resources", ["CEH Study Guide", "GCIH Study Guide", "Splunk Docs", "Udemy Advanced Courses"]);
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
    record53.set("careerSlug", "cybersecurity-analyst");
    record53.set("level", "Advanced");
    record53.set("timeline", "24+ months");
    record53.set("salary", "$120K-$200K+");
    record53.set("skills", ["Advanced Forensics", "Threat Intelligence", "Security Architecture", "Governance", "Leadership"]);
    record53.set("projects", ["Threat Intelligence System", "Security Architecture", "Governance Framework"]);
    record53.set("certifications", ["CISSP", "ECIH"]);
    record53.set("resources", ["CISSP Study Guide", "Advanced Forensics", "Conference Talks", "Research Papers"]);
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
    record54.set("careerSlug", "business-analyst");
    record54.set("level", "Beginner");
    record54.set("timeline", "6-12 months");
    record54.set("salary", "$45K-$75K");
    record54.set("skills", ["Requirements Analysis", "Documentation", "Communication", "Data Analysis Basics", "Process Modeling"]);
    record54.set("projects", ["Requirements Document", "Process Flow Diagram", "Data Analysis Report"]);
    record54.set("certifications", ["IIBA CBAP Basics", "Business Analysis Fundamentals"]);
    record54.set("resources", ["IIBA Study Guide", "Business Analysis Handbook", "Udemy Courses", "Coursera"]);
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
    record55.set("careerSlug", "business-analyst");
    record55.set("level", "Intermediate");
    record55.set("timeline", "12-24 months");
    record55.set("salary", "$75K-$120K");
    record55.set("skills", ["Advanced Requirements", "Stakeholder Management", "Advanced Data Analysis", "Testing Coordination", "Agile BA"]);
    record55.set("projects", ["Complex Requirements Document", "Stakeholder Analysis", "Testing Coordination Plan"]);
    record55.set("certifications", ["IIBA CBAP", "Agile Business Analysis"]);
    record55.set("resources", ["IIBA CBAP Guide", "Agile BA Guide", "Udemy Advanced Courses", "Coursera"]);
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
    record56.set("careerSlug", "business-analyst");
    record56.set("level", "Advanced");
    record56.set("timeline", "24+ months");
    record56.set("salary", "$120K-$200K+");
    record56.set("skills", ["Enterprise Analysis", "Strategic Planning", "Leadership", "Advanced Agile", "Business Acumen"]);
    record56.set("projects", ["Enterprise Strategy", "Digital Transformation Plan", "Business Case Analysis"]);
    record56.set("certifications", ["Advanced BA", "Strategic Planning"]);
    record56.set("resources", ["Advanced BA Docs", "Conference Talks", "Research Papers", "Industry Blogs"]);
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
    record57.set("careerSlug", "technical-writer");
    record57.set("level", "Beginner");
    record57.set("timeline", "6-12 months");
    record57.set("salary", "$45K-$75K");
    record57.set("skills", ["Technical Writing Basics", "Markdown", "Documentation Tools", "API Documentation", "User Guides"]);
    record57.set("projects", ["User Guide", "API Documentation", "Tutorial"]);
    record57.set("certifications", ["Technical Writing Basics", "Markdown Certification"]);
    record57.set("resources", ["Write the Docs", "Technical Writing Course", "Markdown Guide", "Udemy Courses"]);
  try {
    app.save(record57);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record58 = new Record(collection);
    record58.set("careerSlug", "technical-writer");
    record58.set("level", "Intermediate");
    record58.set("timeline", "12-24 months");
    record58.set("salary", "$75K-$120K");
    record58.set("skills", ["Advanced Documentation", "Content Management", "Diagramming", "Video Documentation", "Information Architecture"]);
    record58.set("projects", ["Complete Documentation Set", "Diagramming System", "Video Tutorial Series"]);
    record58.set("certifications", ["STC Certification", "Advanced Technical Writing"]);
    record58.set("resources", ["STC Resources", "Write the Docs Advanced", "Udemy Advanced Courses", "Coursera"]);
  try {
    app.save(record58);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record59 = new Record(collection);
    record59.set("careerSlug", "technical-writer");
    record59.set("level", "Advanced");
    record59.set("timeline", "24+ months");
    record59.set("salary", "$120K-$200K+");
    record59.set("skills", ["Documentation Strategy", "Content Leadership", "Advanced IA", "Localization", "Analytics"]);
    record59.set("projects", ["Documentation Strategy", "Content Platform", "Localization System"]);
    record59.set("certifications", ["Advanced Technical Writing", "Content Strategy"]);
    record59.set("resources", ["Advanced Documentation", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record59);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record60 = new Record(collection);
    record60.set("careerSlug", "software-architect");
    record60.set("level", "Beginner");
    record60.set("timeline", "6-12 months");
    record60.set("salary", "$45K-$75K");
    record60.set("skills", ["Architecture Patterns", "System Design Basics", "Code Quality", "Design Principles", "Communication"]);
    record60.set("projects", ["Architecture Diagram", "Design Document", "Pattern Analysis"]);
    record60.set("certifications", ["TOGAF Basics", "Architecture Fundamentals"]);
    record60.set("resources", ["TOGAF Study Guide", "Design Patterns Book", "System Design Primer", "Udemy Courses"]);
  try {
    app.save(record60);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record61 = new Record(collection);
    record61.set("careerSlug", "software-architect");
    record61.set("level", "Intermediate");
    record61.set("timeline", "12-24 months");
    record61.set("salary", "$75K-$120K");
    record61.set("skills", ["Advanced Architecture", "Scalability Design", "Security Architecture", "Technology Selection", "Mentoring"]);
    record61.set("projects", ["Enterprise Architecture", "Scalability Plan", "Security Architecture"]);
    record61.set("certifications", ["TOGAF Certified", "AWS Solutions Architect"]);
    record61.set("resources", ["TOGAF Certification Guide", "AWS Docs", "System Design Primer", "Udemy Advanced Courses"]);
  try {
    app.save(record61);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record62 = new Record(collection);
    record62.set("careerSlug", "software-architect");
    record62.set("level", "Advanced");
    record62.set("timeline", "24+ months");
    record62.set("salary", "$120K-$200K+");
    record62.set("skills", ["Enterprise Architecture", "Strategic Planning", "Leadership", "Innovation", "Governance"]);
    record62.set("projects", ["Enterprise Strategy", "Technology Roadmap", "Governance Framework"]);
    record62.set("certifications", ["TOGAF Expert", "Advanced Architecture"]);
    record62.set("resources", ["Advanced Architecture", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record62);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record63 = new Record(collection);
    record63.set("careerSlug", "engineering-manager");
    record63.set("level", "Beginner");
    record63.set("timeline", "6-12 months");
    record63.set("salary", "$45K-$75K");
    record63.set("skills", ["Team Leadership", "Communication", "Project Management", "Performance Management", "Mentoring"]);
    record63.set("projects", ["Team Charter", "Performance Plan", "Project Plan"]);
    record63.set("certifications", ["PMP Basics", "Leadership Fundamentals"]);
    record63.set("resources", ["PMP Study Guide", "Leadership Course", "Udemy Courses", "Coursera"]);
  try {
    app.save(record63);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record64 = new Record(collection);
    record64.set("careerSlug", "engineering-manager");
    record64.set("level", "Intermediate");
    record64.set("timeline", "12-24 months");
    record64.set("salary", "$75K-$120K");
    record64.set("skills", ["Advanced Leadership", "Strategic Planning", "Hiring", "Team Development", "Agile Leadership"]);
    record64.set("projects", ["Team Development Plan", "Hiring Strategy", "Strategic Plan"]);
    record64.set("certifications", ["PMP Certified", "Agile Leadership"]);
    record64.set("resources", ["PMP Certification Guide", "Agile Leadership Guide", "Udemy Advanced Courses", "Coursera"]);
  try {
    app.save(record64);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record65 = new Record(collection);
    record65.set("careerSlug", "engineering-manager");
    record65.set("level", "Advanced");
    record65.set("timeline", "24+ months");
    record65.set("salary", "$120K-$200K+");
    record65.set("skills", ["Executive Leadership", "Organizational Strategy", "Talent Management", "Business Acumen", "Innovation"]);
    record65.set("projects", ["Organizational Strategy", "Talent Management System", "Business Plan"]);
    record65.set("certifications", ["Advanced Leadership", "Executive Coaching"]);
    record65.set("resources", ["Advanced Leadership", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record65);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record66 = new Record(collection);
    record66.set("careerSlug", "scrum-master");
    record66.set("level", "Beginner");
    record66.set("timeline", "6-12 months");
    record66.set("salary", "$45K-$75K");
    record66.set("skills", ["Scrum Framework", "Agile Fundamentals", "Facilitation", "Communication", "Conflict Resolution"]);
    record66.set("projects", ["Sprint Plan", "Retrospective Report", "Agile Metrics"]);
    record66.set("certifications", ["Certified Scrum Master", "Scrum Fundamentals"]);
    record66.set("resources", ["CSM Study Guide", "Scrum Guide", "Udemy Courses", "Coursera"]);
  try {
    app.save(record66);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record67 = new Record(collection);
    record67.set("careerSlug", "scrum-master");
    record67.set("level", "Intermediate");
    record67.set("timeline", "12-24 months");
    record67.set("salary", "$75K-$120K");
    record67.set("skills", ["Advanced Scrum", "Coaching", "Metrics & Analytics", "Scaling Agile", "Organizational Change"]);
    record67.set("projects", ["Agile Transformation Plan", "Metrics Dashboard", "Coaching Program"]);
    record67.set("certifications", ["Professional Scrum Master", "SAFe Agilist"]);
    record67.set("resources", ["PSM Study Guide", "SAFe Study Guide", "Udemy Advanced Courses", "Coursera"]);
  try {
    app.save(record67);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record68 = new Record(collection);
    record68.set("careerSlug", "scrum-master");
    record68.set("level", "Advanced");
    record68.set("timeline", "24+ months");
    record68.set("salary", "$120K-$200K+");
    record68.set("skills", ["Enterprise Agile", "Leadership", "Organizational Design", "Change Management", "Innovation"]);
    record68.set("projects", ["Enterprise Agile Strategy", "Organizational Transformation", "Innovation Program"]);
    record68.set("certifications", ["Advanced Scrum", "Executive Coaching"]);
    record68.set("resources", ["Advanced Scrum", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record68);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record69 = new Record(collection);
    record69.set("careerSlug", "site-reliability-engineer");
    record69.set("level", "Beginner");
    record69.set("timeline", "6-12 months");
    record69.set("salary", "$45K-$75K");
    record69.set("skills", ["Linux Basics", "Monitoring Basics", "Incident Response Basics", "Automation Basics", "Networking Basics"]);
    record69.set("projects", ["Monitoring Setup", "Incident Response Plan", "Automation Script"]);
    record69.set("certifications", ["Linux Fundamentals", "SRE Basics"]);
    record69.set("resources", ["Linux Academy", "SRE Book", "Prometheus Docs", "Udemy Courses"]);
  try {
    app.save(record69);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record70 = new Record(collection);
    record70.set("careerSlug", "site-reliability-engineer");
    record70.set("level", "Intermediate");
    record70.set("timeline", "12-24 months");
    record70.set("salary", "$75K-$120K");
    record70.set("skills", ["Advanced Monitoring", "Kubernetes", "Advanced Automation", "Performance Tuning", "Incident Management"]);
    record70.set("projects", ["Monitoring System", "Kubernetes Setup", "Performance Optimization"]);
    record70.set("certifications", ["Kubernetes Administrator", "AWS DevOps Engineer"]);
    record70.set("resources", ["Kubernetes Docs", "Prometheus Advanced", "Grafana Docs", "Udemy Advanced Courses"]);
  try {
    app.save(record70);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record71 = new Record(collection);
    record71.set("careerSlug", "site-reliability-engineer");
    record71.set("level", "Advanced");
    record71.set("timeline", "24+ months");
    record71.set("salary", "$120K-$200K+");
    record71.set("skills", ["Advanced Kubernetes", "Distributed Systems", "Chaos Engineering", "Leadership", "Architecture"]);
    record71.set("projects", ["Enterprise SRE Platform", "Chaos Engineering System", "Reliability Architecture"]);
    record71.set("certifications", ["Advanced SRE", "System Design"]);
    record71.set("resources", ["Advanced SRE", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record71);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record72 = new Record(collection);
    record72.set("careerSlug", "platform-engineer");
    record72.set("level", "Beginner");
    record72.set("timeline", "6-12 months");
    record72.set("salary", "$45K-$75K");
    record72.set("skills", ["Platform Fundamentals", "Kubernetes Basics", "CI/CD Basics", "Developer Experience", "Communication"]);
    record72.set("projects", ["Platform Design", "CI/CD Pipeline", "Developer Guide"]);
    record72.set("certifications", ["Kubernetes Basics", "Platform Engineering Fundamentals"]);
    record72.set("resources", ["Kubernetes Docs", "CI/CD Guide", "Platform Engineering Guide", "Udemy Courses"]);
  try {
    app.save(record72);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record73 = new Record(collection);
    record73.set("careerSlug", "platform-engineer");
    record73.set("level", "Intermediate");
    record73.set("timeline", "12-24 months");
    record73.set("salary", "$75K-$120K");
    record73.set("skills", ["Advanced Kubernetes", "Advanced CI/CD", "Infrastructure as Code", "Developer Tools", "Metrics"]);
    record73.set("projects", ["Internal Developer Platform", "Advanced CI/CD", "Developer Tools"]);
    record73.set("certifications", ["Kubernetes Administrator", "Platform Engineering"]);
    record73.set("resources", ["Kubernetes Advanced", "Terraform Docs", "Udemy Advanced Courses", "Coursera"]);
  try {
    app.save(record73);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record74 = new Record(collection);
    record74.set("careerSlug", "platform-engineer");
    record74.set("level", "Advanced");
    record74.set("timeline", "24+ months");
    record74.set("salary", "$120K-$200K+");
    record74.set("skills", ["Enterprise Platform", "Developer Experience Design", "Scalability", "Leadership", "Innovation"]);
    record74.set("projects", ["Enterprise Platform", "Developer Experience System", "Innovation Program"]);
    record74.set("certifications", ["Advanced Platform Engineering", "System Design"]);
    record74.set("resources", ["Advanced Platform Engineering", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record74);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record75 = new Record(collection);
    record75.set("careerSlug", "ai-ml-engineer");
    record75.set("level", "Beginner");
    record75.set("timeline", "6-12 months");
    record75.set("salary", "$45K-$75K");
    record75.set("skills", ["Python Basics", "ML Fundamentals", "Deep Learning Basics", "Data Preprocessing", "Evaluation Metrics"]);
    record75.set("projects", ["Simple ML Model", "Deep Learning Project", "Data Pipeline"]);
    record75.set("certifications", ["Google AI/ML Basics", "Fast.ai Basics"]);
    record75.set("resources", ["Fast.ai", "Kaggle Learn", "Coursera ML Basics", "Towards Data Science"]);
  try {
    app.save(record75);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record76 = new Record(collection);
    record76.set("careerSlug", "ai-ml-engineer");
    record76.set("level", "Intermediate");
    record76.set("timeline", "12-24 months");
    record76.set("salary", "$75K-$120K");
    record76.set("skills", ["Advanced Deep Learning", "NLP Basics", "Computer Vision Basics", "MLOps", "Model Deployment"]);
    record76.set("projects", ["NLP Project", "Computer Vision Project", "ML Pipeline"]);
    record76.set("certifications", ["TensorFlow Developer", "PyTorch Certification"]);
    record76.set("resources", ["TensorFlow Docs", "PyTorch Docs", "Fast.ai Advanced", "Coursera ML Specialization"]);
  try {
    app.save(record76);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record77 = new Record(collection);
    record77.set("careerSlug", "ai-ml-engineer");
    record77.set("level", "Advanced");
    record77.set("timeline", "24+ months");
    record77.set("salary", "$120K-$200K+");
    record77.set("skills", ["Advanced NLP", "Advanced Computer Vision", "Research Skills", "Production ML", "Leadership"]);
    record77.set("projects", ["Large-scale AI System", "Research Publication", "AI Platform"]);
    record77.set("certifications", ["Advanced AI/ML", "Research Publication"]);
    record77.set("resources", ["Research Papers", "Conference Talks", "Advanced Courses", "Industry Blogs"]);
  try {
    app.save(record77);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record78 = new Record(collection);
    record78.set("careerSlug", "blockchain-developer");
    record78.set("level", "Beginner");
    record78.set("timeline", "6-12 months");
    record78.set("salary", "$45K-$75K");
    record78.set("skills", ["Blockchain Fundamentals", "Solidity Basics", "Smart Contract Basics", "Web3 Basics", "Cryptography Basics"]);
    record78.set("projects", ["Simple Smart Contract", "Web3 Application", "Blockchain Analysis"]);
    record78.set("certifications", ["Ethereum Developer Basics", "Solidity Basics"]);
    record78.set("resources", ["Solidity Docs", "Ethereum Docs", "CryptoZombies", "Udemy Courses"]);
  try {
    app.save(record78);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record79 = new Record(collection);
    record79.set("careerSlug", "blockchain-developer");
    record79.set("level", "Intermediate");
    record79.set("timeline", "12-24 months");
    record79.set("salary", "$75K-$120K");
    record79.set("skills", ["Advanced Solidity", "Smart Contract Security", "DeFi Protocols", "Web3 Integration", "Testing"]);
    record79.set("projects", ["DeFi Protocol", "Smart Contract Audit", "Web3 Application"]);
    record79.set("certifications", ["Certified Blockchain Developer", "Advanced Solidity"]);
    record79.set("resources", ["Solidity Advanced", "OpenZeppelin Docs", "DeFi Protocols", "Udemy Advanced Courses"]);
  try {
    app.save(record79);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record80 = new Record(collection);
    record80.set("careerSlug", "blockchain-developer");
    record80.set("level", "Advanced");
    record80.set("timeline", "24+ months");
    record80.set("salary", "$120K-$200K+");
    record80.set("skills", ["Advanced Smart Contracts", "Blockchain Architecture", "Security Auditing", "Research Skills", "Leadership"]);
    record80.set("projects", ["Blockchain Platform", "Security Audit System", "Research Publication"]);
    record80.set("certifications", ["Advanced Blockchain", "Security Auditing"]);
    record80.set("resources", ["Advanced Blockchain", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record80);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record81 = new Record(collection);
    record81.set("careerSlug", "game-developer");
    record81.set("level", "Beginner");
    record81.set("timeline", "6-12 months");
    record81.set("salary", "$45K-$75K");
    record81.set("skills", ["Game Engine Basics", "C#/C++ Basics", "Game Design", "Physics Basics", "Asset Management"]);
    record81.set("projects", ["Simple 2D Game", "Game Prototype", "Asset Pipeline"]);
    record81.set("certifications", ["Unity Basics", "Game Development Fundamentals"]);
    record81.set("resources", ["Unity Learn", "Unreal Engine Docs", "Game Dev Tutorials", "Udemy Courses"]);
  try {
    app.save(record81);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record82 = new Record(collection);
    record82.set("careerSlug", "game-developer");
    record82.set("level", "Intermediate");
    record82.set("timeline", "12-24 months");
    record82.set("salary", "$75K-$120K");
    record82.set("skills", ["Advanced Game Engine", "Graphics Programming", "Game Physics", "Networking", "Performance Optimization"]);
    record82.set("projects", ["3D Game", "Multiplayer Game", "Game Engine Feature"]);
    record82.set("certifications", ["Unity Certified Developer", "Unreal Engine Certification"]);
    record82.set("resources", ["Unity Advanced", "Unreal Advanced", "Game Dev Advanced", "Udemy Advanced Courses"]);
  try {
    app.save(record82);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record83 = new Record(collection);
    record83.set("careerSlug", "game-developer");
    record83.set("level", "Advanced");
    record83.set("timeline", "24+ months");
    record83.set("salary", "$120K-$200K+");
    record83.set("skills", ["Advanced Graphics", "Game Architecture", "AI Systems", "Leadership", "Innovation"]);
    record83.set("projects", ["Large-scale Game", "Game Engine", "AI System"]);
    record83.set("certifications", ["Advanced Game Development", "Game Architecture"]);
    record83.set("resources", ["Advanced Game Dev", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record83);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record84 = new Record(collection);
    record84.set("careerSlug", "embedded-systems-engineer");
    record84.set("level", "Beginner");
    record84.set("timeline", "6-12 months");
    record84.set("salary", "$45K-$75K");
    record84.set("skills", ["C/C++ Basics", "Microcontroller Basics", "Hardware Knowledge", "Real-time Systems Basics", "Debugging"]);
    record84.set("projects", ["Microcontroller Project", "Firmware Basics", "Hardware Interface"]);
    record84.set("certifications", ["Embedded Systems Basics", "ARM Cortex Basics"]);
    record84.set("resources", ["C/C++ Docs", "Microcontroller Docs", "Embedded Systems Guide", "Udemy Courses"]);
  try {
    app.save(record84);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record85 = new Record(collection);
    record85.set("careerSlug", "embedded-systems-engineer");
    record85.set("level", "Intermediate");
    record85.set("timeline", "12-24 months");
    record85.set("salary", "$75K-$120K");
    record85.set("skills", ["Advanced C/C++", "Real-time Systems", "Firmware Development", "Hardware Debugging", "Performance Optimization"]);
    record85.set("projects", ["Complex Firmware", "Real-time System", "Hardware Optimization"]);
    record85.set("certifications", ["ARM Cortex Certified", "Embedded Systems Certification"]);
    record85.set("resources", ["ARM Docs", "Real-time Systems Guide", "Udemy Advanced Courses", "Coursera"]);
  try {
    app.save(record85);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record86 = new Record(collection);
    record86.set("careerSlug", "embedded-systems-engineer");
    record86.set("level", "Advanced");
    record86.set("timeline", "24+ months");
    record86.set("salary", "$120K-$200K+");
    record86.set("skills", ["Advanced Firmware", "Hardware Architecture", "System Design", "Leadership", "Innovation"]);
    record86.set("projects", ["Embedded Platform", "Hardware System", "Innovation Project"]);
    record86.set("certifications", ["Advanced Embedded Systems", "System Design"]);
    record86.set("resources", ["Advanced Embedded", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record86);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record87 = new Record(collection);
    record87.set("careerSlug", "iot-engineer");
    record87.set("level", "Beginner");
    record87.set("timeline", "6-12 months");
    record87.set("salary", "$45K-$75K");
    record87.set("skills", ["IoT Fundamentals", "Embedded Systems Basics", "Networking Basics", "Cloud Basics", "Sensors"]);
    record87.set("projects", ["IoT Device", "Sensor Integration", "Cloud Connection"]);
    record87.set("certifications", ["AWS IoT Basics", "IoT Fundamentals"]);
    record87.set("resources", ["AWS IoT Docs", "Azure IoT Docs", "IoT Guide", "Udemy Courses"]);
  try {
    app.save(record87);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record88 = new Record(collection);
    record88.set("careerSlug", "iot-engineer");
    record88.set("level", "Intermediate");
    record88.set("timeline", "12-24 months");
    record88.set("salary", "$75K-$120K");
    record88.set("skills", ["Advanced IoT Platforms", "Edge Computing", "Cloud Integration", "Real-time Processing", "Security"]);
    record88.set("projects", ["IoT Platform", "Edge Computing System", "Real-time Analytics"]);
    record88.set("certifications", ["AWS IoT Developer", "Azure IoT Developer"]);
    record88.set("resources", ["AWS IoT Advanced", "Azure IoT Advanced", "Udemy Advanced Courses", "Coursera"]);
  try {
    app.save(record88);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record89 = new Record(collection);
    record89.set("careerSlug", "iot-engineer");
    record89.set("level", "Advanced");
    record89.set("timeline", "24+ months");
    record89.set("salary", "$120K-$200K+");
    record89.set("skills", ["Enterprise IoT", "Advanced Edge Computing", "System Architecture", "Leadership", "Innovation"]);
    record89.set("projects", ["Enterprise IoT Platform", "Edge Computing Architecture", "Innovation Project"]);
    record89.set("certifications", ["Advanced IoT", "System Design"]);
    record89.set("resources", ["Advanced IoT", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record89);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record90 = new Record(collection);
    record90.set("careerSlug", "api-developer");
    record90.set("level", "Beginner");
    record90.set("timeline", "6-12 months");
    record90.set("salary", "$45K-$75K");
    record90.set("skills", ["REST API Basics", "HTTP Fundamentals", "JSON/XML", "API Design Basics", "Documentation"]);
    record90.set("projects", ["Simple REST API", "API Documentation", "API Testing"]);
    record90.set("certifications", ["API Design Basics", "REST API Fundamentals"]);
    record90.set("resources", ["REST API Guide", "HTTP Guide", "Postman Learning", "Udemy Courses"]);
  try {
    app.save(record90);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record91 = new Record(collection);
    record91.set("careerSlug", "api-developer");
    record91.set("level", "Intermediate");
    record91.set("timeline", "12-24 months");
    record91.set("salary", "$75K-$120K");
    record91.set("skills", ["Advanced REST", "GraphQL", "API Security", "Rate Limiting", "Versioning"]);
    record91.set("projects", ["GraphQL API", "Secure API", "API Gateway"]);
    record91.set("certifications", ["API Design Certification", "GraphQL Certification"]);
    record91.set("resources", ["GraphQL Docs", "API Security Guide", "Udemy Advanced Courses", "Coursera"]);
  try {
    app.save(record91);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record92 = new Record(collection);
    record92.set("careerSlug", "api-developer");
    record92.set("level", "Advanced");
    record92.set("timeline", "24+ months");
    record92.set("salary", "$120K-$200K+");
    record92.set("skills", ["Advanced API Architecture", "Microservices APIs", "API Governance", "Leadership", "Innovation"]);
    record92.set("projects", ["API Platform", "Microservices Architecture", "API Governance System"]);
    record92.set("certifications", ["Advanced API Design", "System Design"]);
    record92.set("resources", ["Advanced API Design", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record92);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record93 = new Record(collection);
    record93.set("careerSlug", "cloud-security-engineer");
    record93.set("level", "Beginner");
    record93.set("timeline", "6-12 months");
    record93.set("salary", "$45K-$75K");
    record93.set("skills", ["Cloud Security Basics", "IAM Basics", "Encryption Basics", "Compliance Basics", "Threat Detection Basics"]);
    record93.set("projects", ["Cloud Security Audit", "IAM Policy", "Encryption Setup"]);
    record93.set("certifications", ["AWS Security Basics", "Azure Security Basics"]);
    record93.set("resources", ["AWS Security Docs", "Azure Security Docs", "Cloud Security Guide", "Udemy Courses"]);
  try {
    app.save(record93);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record94 = new Record(collection);
    record94.set("careerSlug", "cloud-security-engineer");
    record94.set("level", "Intermediate");
    record94.set("timeline", "12-24 months");
    record94.set("salary", "$75K-$120K");
    record94.set("skills", ["Advanced Cloud Security", "Advanced IAM", "Threat Detection", "Incident Response", "Compliance Management"]);
    record94.set("projects", ["Cloud Security Architecture", "Threat Detection System", "Compliance Framework"]);
    record94.set("certifications", ["AWS Security Specialty", "Azure Security Engineer"]);
    record94.set("resources", ["AWS Security Advanced", "Azure Security Advanced", "Udemy Advanced Courses", "Coursera"]);
  try {
    app.save(record94);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record95 = new Record(collection);
    record95.set("careerSlug", "cloud-security-engineer");
    record95.set("level", "Advanced");
    record95.set("timeline", "24+ months");
    record95.set("salary", "$120K-$200K+");
    record95.set("skills", ["Enterprise Cloud Security", "Advanced Threat Detection", "Security Architecture", "Leadership", "Innovation"]);
    record95.set("projects", ["Enterprise Security Architecture", "Threat Intelligence System", "Innovation Project"]);
    record95.set("certifications", ["Advanced Cloud Security", "CISSP"]);
    record95.set("resources", ["Advanced Cloud Security", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record95);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record96 = new Record(collection);
    record96.set("careerSlug", "performance-engineer");
    record96.set("level", "Beginner");
    record96.set("timeline", "6-12 months");
    record96.set("salary", "$45K-$75K");
    record96.set("skills", ["Performance Testing Basics", "Load Testing Basics", "Profiling Basics", "Metrics", "Tools"]);
    record96.set("projects", ["Performance Test Plan", "Load Test Report", "Profiling Analysis"]);
    record96.set("certifications", ["Performance Testing Basics", "Load Testing Basics"]);
    record96.set("resources", ["JMeter Docs", "Load Testing Guide", "Performance Guide", "Udemy Courses"]);
  try {
    app.save(record96);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record97 = new Record(collection);
    record97.set("careerSlug", "performance-engineer");
    record97.set("level", "Intermediate");
    record97.set("timeline", "12-24 months");
    record97.set("salary", "$75K-$120K");
    record97.set("skills", ["Advanced Performance Testing", "Advanced Load Testing", "Optimization", "Benchmarking", "Monitoring"]);
    record97.set("projects", ["Performance Optimization", "Benchmarking Report", "Monitoring System"]);
    record97.set("certifications", ["Performance Testing Certification", "Load Testing Certification"]);
    record97.set("resources", ["JMeter Advanced", "Gatling Docs", "Udemy Advanced Courses", "Coursera"]);
  try {
    app.save(record97);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record98 = new Record(collection);
    record98.set("careerSlug", "performance-engineer");
    record98.set("level", "Advanced");
    record98.set("timeline", "24+ months");
    record98.set("salary", "$120K-$200K+");
    record98.set("skills", ["Advanced Optimization", "System Architecture", "Scalability Design", "Leadership", "Innovation"]);
    record98.set("projects", ["Performance Architecture", "Scalability System", "Innovation Project"]);
    record98.set("certifications", ["Advanced Performance Engineering", "System Design"]);
    record98.set("resources", ["Advanced Performance", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record98);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record99 = new Record(collection);
    record99.set("careerSlug", "automation-engineer");
    record99.set("level", "Beginner");
    record99.set("timeline", "6-12 months");
    record99.set("salary", "$45K-$75K");
    record99.set("skills", ["Test Automation Basics", "Selenium Basics", "Scripting Basics", "CI/CD Basics", "Tools"]);
    record99.set("projects", ["Automation Test Suite", "CI/CD Pipeline", "Automation Framework"]);
    record99.set("certifications", ["Selenium Basics", "Automation Testing Basics"]);
    record99.set("resources", ["Selenium Docs", "Automation Guide", "CI/CD Guide", "Udemy Courses"]);
  try {
    app.save(record99);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record100 = new Record(collection);
    record100.set("careerSlug", "automation-engineer");
    record100.set("level", "Intermediate");
    record100.set("timeline", "12-24 months");
    record100.set("salary", "$75K-$120K");
    record100.set("skills", ["Advanced Selenium", "Advanced CI/CD", "Infrastructure Automation", "Orchestration", "Monitoring"]);
    record100.set("projects", ["Advanced Automation Framework", "Infrastructure Automation", "Orchestration System"]);
    record100.set("certifications", ["Selenium Certification", "Automation Testing Certification"]);
    record100.set("resources", ["Selenium Advanced", "Terraform Docs", "Udemy Advanced Courses", "Coursera"]);
  try {
    app.save(record100);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record101 = new Record(collection);
    record101.set("careerSlug", "automation-engineer");
    record101.set("level", "Advanced");
    record101.set("timeline", "24+ months");
    record101.set("salary", "$120K-$200K+");
    record101.set("skills", ["Advanced Automation Architecture", "Robotics", "AI-driven Testing", "Leadership", "Innovation"]);
    record101.set("projects", ["Automation Platform", "AI Testing System", "Innovation Project"]);
    record101.set("certifications", ["Advanced Automation", "System Design"]);
    record101.set("resources", ["Advanced Automation", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record101);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record102 = new Record(collection);
    record102.set("careerSlug", "data-analyst");
    record102.set("level", "Beginner");
    record102.set("timeline", "6-12 months");
    record102.set("salary", "$45K-$75K");
    record102.set("skills", ["SQL Basics", "Excel", "Data Visualization Basics", "Statistics Basics", "Communication"]);
    record102.set("projects", ["Data Analysis Report", "Dashboard", "Statistical Analysis"]);
    record102.set("certifications", ["Google Data Analytics", "SQL Basics"]);
    record102.set("resources", ["SQL Tutorial", "Excel Guide", "Tableau Basics", "Udemy Courses"]);
  try {
    app.save(record102);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record103 = new Record(collection);
    record103.set("careerSlug", "data-analyst");
    record103.set("level", "Intermediate");
    record103.set("timeline", "12-24 months");
    record103.set("salary", "$75K-$120K");
    record103.set("skills", ["Advanced SQL", "Advanced Visualization", "Python/R", "Advanced Statistics", "Business Intelligence"]);
    record103.set("projects", ["Advanced Dashboard", "Statistical Model", "BI Solution"]);
    record103.set("certifications", ["Microsoft Data Analyst", "Advanced Analytics"]);
    record103.set("resources", ["Tableau Advanced", "Power BI Docs", "Python Data Analysis", "Udemy Advanced Courses"]);
  try {
    app.save(record103);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record104 = new Record(collection);
    record104.set("careerSlug", "data-analyst");
    record104.set("level", "Advanced");
    record104.set("timeline", "24+ months");
    record104.set("salary", "$120K-$200K+");
    record104.set("skills", ["Advanced Analytics", "Data Strategy", "Leadership", "Advanced BI", "Innovation"]);
    record104.set("projects", ["Data Strategy", "Analytics Platform", "Innovation Project"]);
    record104.set("certifications", ["Advanced Data Analytics", "Data Strategy"]);
    record104.set("resources", ["Advanced Analytics", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record104);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record105 = new Record(collection);
    record105.set("careerSlug", "business-intelligence-developer");
    record105.set("level", "Beginner");
    record105.set("timeline", "6-12 months");
    record105.set("salary", "$45K-$75K");
    record105.set("skills", ["SQL Fundamentals", "ETL Basics", "Data Modeling Basics", "BI Tools Basics", "Reporting"]);
    record105.set("projects", ["Data Warehouse Schema", "ETL Pipeline", "Basic Report"]);
    record105.set("certifications", ["Tableau Basics", "Power BI Basics"]);
    record105.set("resources", ["Tableau Docs", "Power BI Docs", "SQL Tutorial", "Udemy Courses"]);
  try {
    app.save(record105);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record106 = new Record(collection);
    record106.set("careerSlug", "business-intelligence-developer");
    record106.set("level", "Intermediate");
    record106.set("timeline", "12-24 months");
    record106.set("salary", "$75K-$120K");
    record106.set("skills", ["Advanced SQL", "Advanced ETL", "Advanced Data Modeling", "Advanced BI Tools", "Dashboard Design"]);
    record106.set("projects", ["Data Warehouse", "Advanced ETL", "Advanced Dashboard"]);
    record106.set("certifications", ["Tableau Desktop Specialist", "Microsoft Power BI"]);
    record106.set("resources", ["Tableau Advanced", "Power BI Advanced", "Udemy Advanced Courses", "Coursera"]);
  try {
    app.save(record106);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record107 = new Record(collection);
    record107.set("careerSlug", "business-intelligence-developer");
    record107.set("level", "Advanced");
    record107.set("timeline", "24+ months");
    record107.set("salary", "$120K-$200K+");
    record107.set("skills", ["Enterprise BI Architecture", "Advanced Data Modeling", "Leadership", "Data Governance", "Innovation"]);
    record107.set("projects", ["Enterprise BI Platform", "Data Governance System", "Innovation Project"]);
    record107.set("certifications", ["Advanced BI", "Data Governance"]);
    record107.set("resources", ["Advanced BI", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record107);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record108 = new Record(collection);
    record108.set("careerSlug", "integration-engineer");
    record108.set("level", "Beginner");
    record108.set("timeline", "6-12 months");
    record108.set("salary", "$45K-$75K");
    record108.set("skills", ["API Basics", "Integration Basics", "Middleware Basics", "Data Mapping", "Tools"]);
    record108.set("projects", ["Simple Integration", "API Integration", "Data Mapping"]);
    record108.set("certifications", ["Integration Basics", "API Basics"]);
    record108.set("resources", ["MuleSoft Docs", "API Guide", "Integration Guide", "Udemy Courses"]);
  try {
    app.save(record108);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record109 = new Record(collection);
    record109.set("careerSlug", "integration-engineer");
    record109.set("level", "Intermediate");
    record109.set("timeline", "12-24 months");
    record109.set("salary", "$75K-$120K");
    record109.set("skills", ["Advanced APIs", "Advanced Middleware", "ETL", "System Integration", "Monitoring"]);
    record109.set("projects", ["Complex Integration", "Middleware Solution", "ETL Pipeline"]);
    record109.set("certifications", ["MuleSoft Certified Developer", "Integration Certification"]);
    record109.set("resources", ["MuleSoft Advanced", "Talend Docs", "Udemy Advanced Courses", "Coursera"]);
  try {
    app.save(record109);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record110 = new Record(collection);
    record110.set("careerSlug", "integration-engineer");
    record110.set("level", "Advanced");
    record110.set("timeline", "24+ months");
    record110.set("salary", "$120K-$200K+");
    record110.set("skills", ["Enterprise Integration", "Advanced Architecture", "Leadership", "Data Governance", "Innovation"]);
    record110.set("projects", ["Enterprise Integration Platform", "Data Governance System", "Innovation Project"]);
    record110.set("certifications", ["Advanced Integration", "System Design"]);
    record110.set("resources", ["Advanced Integration", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record110);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record111 = new Record(collection);
    record111.set("careerSlug", "release-manager");
    record111.set("level", "Beginner");
    record111.set("timeline", "6-12 months");
    record111.set("salary", "$45K-$75K");
    record111.set("skills", ["Release Planning Basics", "CI/CD Basics", "Version Control", "Documentation", "Communication"]);
    record111.set("projects", ["Release Plan", "Release Notes", "Deployment Guide"]);
    record111.set("certifications", ["Release Management Basics", "CI/CD Basics"]);
    record111.set("resources", ["Release Management Guide", "CI/CD Guide", "Git Guide", "Udemy Courses"]);
  try {
    app.save(record111);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record112 = new Record(collection);
    record112.set("careerSlug", "release-manager");
    record112.set("level", "Intermediate");
    record112.set("timeline", "12-24 months");
    record112.set("salary", "$75K-$120K");
    record112.set("skills", ["Advanced Release Planning", "Advanced CI/CD", "Risk Management", "Deployment Automation", "Monitoring"]);
    record112.set("projects", ["Advanced Release Process", "Deployment Automation", "Risk Management Plan"]);
    record112.set("certifications", ["Release Management Certification", "ITIL Foundations"]);
    record112.set("resources", ["ITIL Guide", "Advanced CI/CD", "Udemy Advanced Courses", "Coursera"]);
  try {
    app.save(record112);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record113 = new Record(collection);
    record113.set("careerSlug", "release-manager");
    record113.set("level", "Advanced");
    record113.set("timeline", "24+ months");
    record113.set("salary", "$120K-$200K+");
    record113.set("skills", ["Enterprise Release Strategy", "Leadership", "Change Management", "Governance", "Innovation"]);
    record113.set("projects", ["Enterprise Release Strategy", "Governance Framework", "Innovation Project"]);
    record113.set("certifications", ["Advanced Release Management", "ITIL Expert"]);
    record113.set("resources", ["Advanced Release Management", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record113);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record114 = new Record(collection);
    record114.set("careerSlug", "compliance-engineer");
    record114.set("level", "Beginner");
    record114.set("timeline", "6-12 months");
    record114.set("salary", "$45K-$75K");
    record114.set("skills", ["Compliance Basics", "Auditing Basics", "Risk Assessment Basics", "Documentation", "Communication"]);
    record114.set("projects", ["Compliance Audit", "Risk Assessment", "Compliance Documentation"]);
    record114.set("certifications", ["Compliance Basics", "Risk Management Basics"]);
    record114.set("resources", ["Compliance Guide", "Risk Management Guide", "NIST Guide", "Udemy Courses"]);
  try {
    app.save(record114);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record115 = new Record(collection);
    record115.set("careerSlug", "compliance-engineer");
    record115.set("level", "Intermediate");
    record115.set("timeline", "12-24 months");
    record115.set("salary", "$75K-$120K");
    record115.set("skills", ["Advanced Compliance", "Advanced Auditing", "Governance", "Regulatory Knowledge", "Monitoring"]);
    record115.set("projects", ["Compliance Framework", "Governance System", "Audit Report"]);
    record115.set("certifications", ["Certified Compliance Professional", "CISSP Basics"]);
    record115.set("resources", ["Compliance Advanced", "CISSP Guide", "Udemy Advanced Courses", "Coursera"]);
  try {
    app.save(record115);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record116 = new Record(collection);
    record116.set("careerSlug", "compliance-engineer");
    record116.set("level", "Advanced");
    record116.set("timeline", "24+ months");
    record116.set("salary", "$120K-$200K+");
    record116.set("skills", ["Enterprise Compliance", "Advanced Governance", "Leadership", "Strategic Planning", "Innovation"]);
    record116.set("projects", ["Enterprise Compliance Strategy", "Governance Platform", "Innovation Project"]);
    record116.set("certifications", ["CISSP", "Advanced Compliance"]);
    record116.set("resources", ["Advanced Compliance", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record116);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record117 = new Record(collection);
    record117.set("careerSlug", "infrastructure-engineer");
    record117.set("level", "Beginner");
    record117.set("timeline", "6-12 months");
    record117.set("salary", "$45K-$75K");
    record117.set("skills", ["Infrastructure Basics", "Virtualization Basics", "Networking Basics", "Storage Basics", "Tools"]);
    record117.set("projects", ["Infrastructure Design", "Virtualization Setup", "Network Design"]);
    record117.set("certifications", ["Infrastructure Basics", "Virtualization Basics"]);
    record117.set("resources", ["VMware Docs", "Hyper-V Docs", "Infrastructure Guide", "Udemy Courses"]);
  try {
    app.save(record117);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record118 = new Record(collection);
    record118.set("careerSlug", "infrastructure-engineer");
    record118.set("level", "Intermediate");
    record118.set("timeline", "12-24 months");
    record118.set("salary", "$75K-$120K");
    record118.set("skills", ["Advanced Virtualization", "Advanced Networking", "Storage Management", "Disaster Recovery", "Capacity Planning"]);
    record118.set("projects", ["Advanced Infrastructure", "Disaster Recovery Plan", "Capacity Plan"]);
    record118.set("certifications", ["VMware Certified", "CompTIA Infrastructure+"]);
    record118.set("resources", ["VMware Advanced", "Storage Guide", "Udemy Advanced Courses", "Coursera"]);
  try {
    app.save(record118);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record119 = new Record(collection);
    record119.set("careerSlug", "infrastructure-engineer");
    record119.set("level", "Advanced");
    record119.set("timeline", "24+ months");
    record119.set("salary", "$120K-$200K+");
    record119.set("skills", ["Enterprise Infrastructure", "Advanced Architecture", "Leadership", "Strategic Planning", "Innovation"]);
    record119.set("projects", ["Enterprise Infrastructure", "Strategic Plan", "Innovation Project"]);
    record119.set("certifications", ["Advanced Infrastructure", "System Design"]);
    record119.set("resources", ["Advanced Infrastructure", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record119);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record120 = new Record(collection);
    record120.set("careerSlug", "middleware-developer");
    record120.set("level", "Beginner");
    record120.set("timeline", "6-12 months");
    record120.set("salary", "$45K-$75K");
    record120.set("skills", ["Middleware Basics", "Message Queues Basics", "APIs Basics", "Integration Basics", "Tools"]);
    record120.set("projects", ["Simple Middleware", "Message Queue Setup", "API Integration"]);
    record120.set("certifications", ["Middleware Basics", "Message Queue Basics"]);
    record120.set("resources", ["Kafka Docs", "RabbitMQ Docs", "Middleware Guide", "Udemy Courses"]);
  try {
    app.save(record120);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record121 = new Record(collection);
    record121.set("careerSlug", "middleware-developer");
    record121.set("level", "Intermediate");
    record121.set("timeline", "12-24 months");
    record121.set("salary", "$75K-$120K");
    record121.set("skills", ["Advanced Message Queues", "Advanced APIs", "System Integration", "Performance Tuning", "Monitoring"]);
    record121.set("projects", ["Advanced Middleware", "Message Queue System", "Performance Optimization"]);
    record121.set("certifications", ["Middleware Certification", "Integration Certification"]);
    record121.set("resources", ["Kafka Advanced", "RabbitMQ Advanced", "Udemy Advanced Courses", "Coursera"]);
  try {
    app.save(record121);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record122 = new Record(collection);
    record122.set("careerSlug", "middleware-developer");
    record122.set("level", "Advanced");
    record122.set("timeline", "24+ months");
    record122.set("salary", "$120K-$200K+");
    record122.set("skills", ["Enterprise Middleware", "Advanced Architecture", "Leadership", "Scalability Design", "Innovation"]);
    record122.set("projects", ["Enterprise Middleware Platform", "Scalability System", "Innovation Project"]);
    record122.set("certifications", ["Advanced Middleware", "System Design"]);
    record122.set("resources", ["Advanced Middleware", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record122);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record123 = new Record(collection);
    record123.set("careerSlug", "firmware-engineer");
    record123.set("level", "Beginner");
    record123.set("timeline", "6-12 months");
    record123.set("salary", "$45K-$75K");
    record123.set("skills", ["C/C++ Basics", "Firmware Basics", "Microcontroller Basics", "Debugging Basics", "Tools"]);
    record123.set("projects", ["Simple Firmware", "Microcontroller Project", "Debugging Exercise"]);
    record123.set("certifications", ["Firmware Basics", "Microcontroller Basics"]);
    record123.set("resources", ["C/C++ Docs", "Firmware Guide", "Microcontroller Docs", "Udemy Courses"]);
  try {
    app.save(record123);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record124 = new Record(collection);
    record124.set("careerSlug", "firmware-engineer");
    record124.set("level", "Intermediate");
    record124.set("timeline", "12-24 months");
    record124.set("salary", "$75K-$120K");
    record124.set("skills", ["Advanced C/C++", "Advanced Firmware", "Real-time Systems", "Hardware Debugging", "Optimization"]);
    record124.set("projects", ["Complex Firmware", "Real-time System", "Hardware Optimization"]);
    record124.set("certifications", ["Firmware Certification", "Real-time Systems"]);
    record124.set("resources", ["Firmware Advanced", "Real-time Systems Guide", "Udemy Advanced Courses", "Coursera"]);
  try {
    app.save(record124);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record125 = new Record(collection);
    record125.set("careerSlug", "firmware-engineer");
    record125.set("level", "Advanced");
    record125.set("timeline", "24+ months");
    record125.set("salary", "$120K-$200K+");
    record125.set("skills", ["Advanced Firmware Architecture", "Hardware Design", "Leadership", "System Design", "Innovation"]);
    record125.set("projects", ["Firmware Platform", "Hardware System", "Innovation Project"]);
    record125.set("certifications", ["Advanced Firmware", "System Design"]);
    record125.set("resources", ["Advanced Firmware", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record125);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record126 = new Record(collection);
    record126.set("careerSlug", "graphics-programmer");
    record126.set("level", "Beginner");
    record126.set("timeline", "6-12 months");
    record126.set("salary", "$45K-$75K");
    record126.set("skills", ["C++ Basics", "Graphics Basics", "OpenGL Basics", "3D Math Basics", "Tools"]);
    record126.set("projects", ["Simple Graphics Program", "3D Model Rendering", "Shader Basics"]);
    record126.set("certifications", ["Graphics Programming Basics", "OpenGL Basics"]);
    record126.set("resources", ["OpenGL Docs", "Graphics Guide", "3D Math Guide", "Udemy Courses"]);
  try {
    app.save(record126);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record127 = new Record(collection);
    record127.set("careerSlug", "graphics-programmer");
    record127.set("level", "Intermediate");
    record127.set("timeline", "12-24 months");
    record127.set("salary", "$75K-$120K");
    record127.set("skills", ["Advanced C++", "Advanced Graphics", "Shader Programming", "Performance Optimization", "GPU Programming"]);
    record127.set("projects", ["Advanced Graphics Engine", "Shader System", "Performance Optimization"]);
    record127.set("certifications", ["Graphics Programming Certification", "GPU Programming"]);
    record127.set("resources", ["Graphics Advanced", "Shader Guide", "Udemy Advanced Courses", "Coursera"]);
  try {
    app.save(record127);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record128 = new Record(collection);
    record128.set("careerSlug", "graphics-programmer");
    record128.set("level", "Advanced");
    record128.set("timeline", "24+ months");
    record128.set("salary", "$120K-$200K+");
    record128.set("skills", ["Advanced Graphics Architecture", "Rendering Engine Design", "Leadership", "Research Skills", "Innovation"]);
    record128.set("projects", ["Graphics Engine", "Rendering System", "Research Project"]);
    record128.set("certifications", ["Advanced Graphics", "Research Publication"]);
    record128.set("resources", ["Advanced Graphics", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record128);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record129 = new Record(collection);
    record129.set("careerSlug", "compiler-engineer");
    record129.set("level", "Beginner");
    record129.set("timeline", "6-12 months");
    record129.set("salary", "$45K-$75K");
    record129.set("skills", ["C++ Basics", "Compiler Basics", "Language Theory Basics", "Parsing Basics", "Tools"]);
    record129.set("projects", ["Simple Compiler", "Parser Implementation", "Language Design"]);
    record129.set("certifications", ["Compiler Basics", "Language Theory Basics"]);
    record129.set("resources", ["Compiler Design Guide", "LLVM Docs", "Language Theory Guide", "Udemy Courses"]);
  try {
    app.save(record129);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record130 = new Record(collection);
    record130.set("careerSlug", "compiler-engineer");
    record130.set("level", "Intermediate");
    record130.set("timeline", "12-24 months");
    record130.set("salary", "$75K-$120K");
    record130.set("skills", ["Advanced C++", "Advanced Compiler Design", "Optimization", "Code Generation", "Testing"]);
    record130.set("projects", ["Advanced Compiler", "Optimization System", "Code Generator"]);
    record130.set("certifications", ["Compiler Design Certification", "Language Theory"]);
    record130.set("resources", ["Compiler Advanced", "LLVM Advanced", "Udemy Advanced Courses", "Coursera"]);
  try {
    app.save(record130);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record131 = new Record(collection);
    record131.set("careerSlug", "compiler-engineer");
    record131.set("level", "Advanced");
    record131.set("timeline", "24+ months");
    record131.set("salary", "$120K-$200K+");
    record131.set("skills", ["Advanced Compiler Architecture", "Research Skills", "Leadership", "Innovation", "Language Design"]);
    record131.set("projects", ["Language Implementation", "Compiler Platform", "Research Publication"]);
    record131.set("certifications", ["Advanced Compiler", "Research Publication"]);
    record131.set("resources", ["Advanced Compiler", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record131);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record132 = new Record(collection);
    record132.set("careerSlug", "distributed-systems-engineer");
    record132.set("level", "Beginner");
    record132.set("timeline", "6-12 months");
    record132.set("salary", "$45K-$75K");
    record132.set("skills", ["Distributed Systems Basics", "Consensus Basics", "Networking Basics", "System Design Basics", "Tools"]);
    record132.set("projects", ["Simple Distributed System", "Consensus Implementation", "System Design"]);
    record132.set("certifications", ["Distributed Systems Basics", "System Design Basics"]);
    record132.set("resources", ["Distributed Systems Guide", "Consensus Algorithms", "System Design Primer", "Udemy Courses"]);
  try {
    app.save(record132);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record133 = new Record(collection);
    record133.set("careerSlug", "distributed-systems-engineer");
    record133.set("level", "Intermediate");
    record133.set("timeline", "12-24 months");
    record133.set("salary", "$75K-$120K");
    record133.set("skills", ["Advanced Distributed Systems", "Advanced Consensus", "Fault Tolerance", "Scalability Design", "Monitoring"]);
    record133.set("projects", ["Advanced Distributed System", "Fault Tolerance System", "Scalability Design"]);
    record133.set("certifications", ["Distributed Systems Certification", "System Design"]);
    record133.set("resources", ["Distributed Systems Advanced", "System Design Primer", "Udemy Advanced Courses", "Coursera"]);
  try {
    app.save(record133);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record134 = new Record(collection);
    record134.set("careerSlug", "distributed-systems-engineer");
    record134.set("level", "Advanced");
    record134.set("timeline", "24+ months");
    record134.set("salary", "$120K-$200K+");
    record134.set("skills", ["Advanced Architecture", "Research Skills", "Leadership", "Innovation", "System Design Mastery"]);
    record134.set("projects", ["Distributed System Platform", "Research Publication", "Innovation Project"]);
    record134.set("certifications", ["Advanced Distributed Systems", "Research Publication"]);
    record134.set("resources", ["Advanced Distributed Systems", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record134);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record135 = new Record(collection);
    record135.set("careerSlug", "research-engineer");
    record135.set("level", "Beginner");
    record135.set("timeline", "6-12 months");
    record135.set("salary", "$45K-$75K");
    record135.set("skills", ["Research Methodology", "Programming Basics", "Mathematics", "Experimentation", "Communication"]);
    record135.set("projects", ["Research Proposal", "Experiment Design", "Research Report"]);
    record135.set("certifications", ["Research Basics", "Scientific Method"]);
    record135.set("resources", ["Research Methodology Guide", "Academic Writing", "Experiment Design", "Udemy Courses"]);
  try {
    app.save(record135);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record136 = new Record(collection);
    record136.set("careerSlug", "research-engineer");
    record136.set("level", "Intermediate");
    record136.set("timeline", "12-24 months");
    record136.set("salary", "$75K-$120K");
    record136.set("skills", ["Advanced Research", "Advanced Programming", "Advanced Mathematics", "Publication", "Collaboration"]);
    record136.set("projects", ["Research Publication", "Advanced Experiment", "Research System"]);
    record136.set("certifications", ["Research Certification", "Publication"]);
    record136.set("resources", ["Advanced Research", "Publication Guide", "Udemy Advanced Courses", "Coursera"]);
  try {
    app.save(record136);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record137 = new Record(collection);
    record137.set("careerSlug", "research-engineer");
    record137.set("level", "Advanced");
    record137.set("timeline", "24+ months");
    record137.set("salary", "$120K-$200K+");
    record137.set("skills", ["Advanced Research Leadership", "Innovation", "Strategic Research", "Mentoring", "Impact"]);
    record137.set("projects", ["Research Program", "Innovation Project", "Research Leadership"]);
    record137.set("certifications", ["Advanced Research", "Research Leadership"]);
    record137.set("resources", ["Advanced Research", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record137);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record138 = new Record(collection);
    record138.set("careerSlug", "accessibility-engineer");
    record138.set("level", "Beginner");
    record138.set("timeline", "6-12 months");
    record138.set("salary", "$45K-$75K");
    record138.set("skills", ["WCAG Basics", "Accessibility Testing Basics", "HTML/CSS", "Assistive Technologies", "Tools"]);
    record138.set("projects", ["Accessibility Audit", "WCAG Compliance Report", "Accessible Component"]);
    record138.set("certifications", ["WCAG Basics", "Accessibility Basics"]);
    record138.set("resources", ["WCAG Guide", "Accessibility Guide", "Screen Reader Guide", "Udemy Courses"]);
  try {
    app.save(record138);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record139 = new Record(collection);
    record139.set("careerSlug", "accessibility-engineer");
    record139.set("level", "Intermediate");
    record139.set("timeline", "12-24 months");
    record139.set("salary", "$75K-$120K");
    record139.set("skills", ["Advanced WCAG", "Advanced Testing", "Assistive Technology Expertise", "Design Collaboration", "Automation"]);
    record139.set("projects", ["Accessibility Framework", "Testing Automation", "Design System"]);
    record139.set("certifications", ["IAAP Certification", "Advanced Accessibility"]);
    record139.set("resources", ["IAAP Guide", "Advanced Accessibility", "Udemy Advanced Courses", "Coursera"]);
  try {
    app.save(record139);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record140 = new Record(collection);
    record140.set("careerSlug", "accessibility-engineer");
    record140.set("level", "Advanced");
    record140.set("timeline", "24+ months");
    record140.set("salary", "$120K-$200K+");
    record140.set("skills", ["Advanced Accessibility Strategy", "Leadership", "Inclusive Design", "Research Skills", "Innovation"]);
    record140.set("projects", ["Accessibility Platform", "Inclusive Design System", "Research Project"]);
    record140.set("certifications", ["Advanced Accessibility", "Research Publication"]);
    record140.set("resources", ["Advanced Accessibility", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record140);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record141 = new Record(collection);
    record141.set("careerSlug", "localization-engineer");
    record141.set("level", "Beginner");
    record141.set("timeline", "6-12 months");
    record141.set("salary", "$45K-$75K");
    record141.set("skills", ["Localization Basics", "Unicode", "Language Knowledge", "Testing Basics", "Tools"]);
    record141.set("projects", ["Localization Plan", "Language Support", "Testing Report"]);
    record141.set("certifications", ["Localization Basics", "Language Certification"]);
    record141.set("resources", ["Localization Guide", "Unicode Guide", "Language Guide", "Udemy Courses"]);
  try {
    app.save(record141);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record142 = new Record(collection);
    record142.set("careerSlug", "localization-engineer");
    record142.set("level", "Intermediate");
    record142.set("timeline", "12-24 months");
    record142.set("salary", "$75K-$120K");
    record142.set("skills", ["Advanced Localization", "Advanced Testing", "Multiple Languages", "Cultural Adaptation", "Automation"]);
    record142.set("projects", ["Multi-language System", "Localization Framework", "Testing Automation"]);
    record142.set("certifications", ["Localization Certification", "Advanced Language"]);
    record142.set("resources", ["Advanced Localization", "Language Advanced", "Udemy Advanced Courses", "Coursera"]);
  try {
    app.save(record142);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record143 = new Record(collection);
    record143.set("careerSlug", "localization-engineer");
    record143.set("level", "Advanced");
    record143.set("timeline", "24+ months");
    record143.set("salary", "$120K-$200K+");
    record143.set("skills", ["Advanced Localization Strategy", "Leadership", "Global Design", "Research Skills", "Innovation"]);
    record143.set("projects", ["Global Platform", "Localization Platform", "Research Project"]);
    record143.set("certifications", ["Advanced Localization", "Research Publication"]);
    record143.set("resources", ["Advanced Localization", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record143);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record144 = new Record(collection);
    record144.set("careerSlug", "observability-engineer");
    record144.set("level", "Beginner");
    record144.set("timeline", "6-12 months");
    record144.set("salary", "$45K-$75K");
    record144.set("skills", ["Monitoring Basics", "Logging Basics", "Metrics Basics", "Alerting Basics", "Tools"]);
    record144.set("projects", ["Monitoring Setup", "Logging System", "Alert Configuration"]);
    record144.set("certifications", ["Monitoring Basics", "Observability Basics"]);
    record144.set("resources", ["Prometheus Docs", "Logging Guide", "Monitoring Guide", "Udemy Courses"]);
  try {
    app.save(record144);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record145 = new Record(collection);
    record145.set("careerSlug", "observability-engineer");
    record145.set("level", "Intermediate");
    record145.set("timeline", "12-24 months");
    record145.set("salary", "$75K-$120K");
    record145.set("skills", ["Advanced Monitoring", "Advanced Logging", "Tracing", "Advanced Alerting", "Analysis"]);
    record145.set("projects", ["Observability Platform", "Tracing System", "Analysis Dashboard"]);
    record145.set("certifications", ["Observability Certification", "Monitoring Certification"]);
    record145.set("resources", ["Prometheus Advanced", "Jaeger Docs", "Udemy Advanced Courses", "Coursera"]);
  try {
    app.save(record145);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record146 = new Record(collection);
    record146.set("careerSlug", "observability-engineer");
    record146.set("level", "Advanced");
    record146.set("timeline", "24+ months");
    record146.set("salary", "$120K-$200K+");
    record146.set("skills", ["Advanced Observability Architecture", "Leadership", "System Design", "Research Skills", "Innovation"]);
    record146.set("projects", ["Observability Platform", "System Design", "Research Project"]);
    record146.set("certifications", ["Advanced Observability", "System Design"]);
    record146.set("resources", ["Advanced Observability", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record146);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record147 = new Record(collection);
    record147.set("careerSlug", "incident-response-engineer");
    record147.set("level", "Beginner");
    record147.set("timeline", "6-12 months");
    record147.set("salary", "$45K-$75K");
    record147.set("skills", ["Incident Response Basics", "Forensics Basics", "Communication", "Documentation", "Tools"]);
    record147.set("projects", ["Incident Response Plan", "Forensics Report", "Response Procedure"]);
    record147.set("certifications", ["GCIH Basics", "Incident Response Basics"]);
    record147.set("resources", ["GCIH Guide", "Incident Response Guide", "Forensics Guide", "Udemy Courses"]);
  try {
    app.save(record147);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record148 = new Record(collection);
    record148.set("careerSlug", "incident-response-engineer");
    record148.set("level", "Intermediate");
    record148.set("timeline", "12-24 months");
    record148.set("salary", "$75K-$120K");
    record148.set("skills", ["Advanced Incident Response", "Advanced Forensics", "Threat Analysis", "Automation", "Leadership"]);
    record148.set("projects", ["Incident Response System", "Forensics Automation", "Threat Analysis"]);
    record148.set("certifications", ["GCIH Certified", "ECIH"]);
    record148.set("resources", ["GCIH Advanced", "ECIH Guide", "Udemy Advanced Courses", "Coursera"]);
  try {
    app.save(record148);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record149 = new Record(collection);
    record149.set("careerSlug", "incident-response-engineer");
    record149.set("level", "Advanced");
    record149.set("timeline", "24+ months");
    record149.set("salary", "$120K-$200K+");
    record149.set("skills", ["Advanced Response Strategy", "Leadership", "Threat Intelligence", "Research Skills", "Innovation"]);
    record149.set("projects", ["Response Platform", "Threat Intelligence System", "Research Project"]);
    record149.set("certifications", ["Advanced Incident Response", "Research Publication"]);
    record149.set("resources", ["Advanced Incident Response", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record149);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record150 = new Record(collection);
    record150.set("careerSlug", "threat-intelligence-engineer");
    record150.set("level", "Beginner");
    record150.set("timeline", "6-12 months");
    record150.set("salary", "$45K-$75K");
    record150.set("skills", ["Threat Analysis Basics", "Intelligence Gathering", "OSINT Basics", "Reporting", "Tools"]);
    record150.set("projects", ["Threat Analysis Report", "Intelligence Report", "OSINT Analysis"]);
    record150.set("certifications", ["Threat Intelligence Basics", "OSINT Basics"]);
    record150.set("resources", ["Threat Intelligence Guide", "OSINT Guide", "Intelligence Guide", "Udemy Courses"]);
  try {
    app.save(record150);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record151 = new Record(collection);
    record151.set("careerSlug", "threat-intelligence-engineer");
    record151.set("level", "Intermediate");
    record151.set("timeline", "12-24 months");
    record151.set("salary", "$75K-$120K");
    record151.set("skills", ["Advanced Threat Analysis", "Advanced Intelligence", "Malware Analysis", "Indicators of Compromise", "Automation"]);
    record151.set("projects", ["Threat Intelligence Platform", "Malware Analysis", "IOC System"]);
    record151.set("certifications", ["Threat Intelligence Certification", "Malware Analysis"]);
    record151.set("resources", ["Advanced Threat Intelligence", "Malware Analysis Guide", "Udemy Advanced Courses", "Coursera"]);
  try {
    app.save(record151);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record152 = new Record(collection);
    record152.set("careerSlug", "threat-intelligence-engineer");
    record152.set("level", "Advanced");
    record152.set("timeline", "24+ months");
    record152.set("salary", "$120K-$200K+");
    record152.set("skills", ["Advanced Intelligence Strategy", "Leadership", "Research Skills", "Innovation", "Strategic Planning"]);
    record152.set("projects", ["Intelligence Platform", "Research Publication", "Strategic Plan"]);
    record152.set("certifications", ["Advanced Threat Intelligence", "Research Publication"]);
    record152.set("resources", ["Advanced Threat Intelligence", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record152);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record153 = new Record(collection);
    record153.set("careerSlug", "vulnerability-manager");
    record153.set("level", "Beginner");
    record153.set("timeline", "6-12 months");
    record153.set("salary", "$45K-$75K");
    record153.set("skills", ["Vulnerability Assessment Basics", "Scanning Basics", "Risk Assessment", "Reporting", "Tools"]);
    record153.set("projects", ["Vulnerability Scan Report", "Risk Assessment", "Remediation Plan"]);
    record153.set("certifications", ["Vulnerability Assessment Basics", "Risk Management Basics"]);
    record153.set("resources", ["Vulnerability Assessment Guide", "Risk Management Guide", "Nessus Guide", "Udemy Courses"]);
  try {
    app.save(record153);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record154 = new Record(collection);
    record154.set("careerSlug", "vulnerability-manager");
    record154.set("level", "Intermediate");
    record154.set("timeline", "12-24 months");
    record154.set("salary", "$75K-$120K");
    record154.set("skills", ["Advanced Assessment", "Penetration Testing", "Remediation", "Metrics", "Automation"]);
    record154.set("projects", ["Penetration Test Report", "Remediation Automation", "Metrics Dashboard"]);
    record154.set("certifications", ["CEH", "OSCP"]);
    record154.set("resources", ["CEH Guide", "OSCP Guide", "Udemy Advanced Courses", "Coursera"]);
  try {
    app.save(record154);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record155 = new Record(collection);
    record155.set("careerSlug", "vulnerability-manager");
    record155.set("level", "Advanced");
    record155.set("timeline", "24+ months");
    record155.set("salary", "$120K-$200K+");
    record155.set("skills", ["Advanced Management Strategy", "Leadership", "Research Skills", "Innovation", "Governance"]);
    record155.set("projects", ["Vulnerability Management Platform", "Research Publication", "Governance Framework"]);
    record155.set("certifications", ["Advanced Vulnerability Management", "Research Publication"]);
    record155.set("resources", ["Advanced Vulnerability Management", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record155);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record156 = new Record(collection);
    record156.set("careerSlug", "privacy-engineer");
    record156.set("level", "Beginner");
    record156.set("timeline", "6-12 months");
    record156.set("salary", "$45K-$75K");
    record156.set("skills", ["Privacy Basics", "GDPR Basics", "Data Protection", "Compliance", "Tools"]);
    record156.set("projects", ["Privacy Audit", "GDPR Compliance Report", "Privacy Policy"]);
    record156.set("certifications", ["Privacy Basics", "GDPR Basics"]);
    record156.set("resources", ["GDPR Guide", "Privacy Guide", "Data Protection Guide", "Udemy Courses"]);
  try {
    app.save(record156);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record157 = new Record(collection);
    record157.set("careerSlug", "privacy-engineer");
    record157.set("level", "Intermediate");
    record157.set("timeline", "12-24 months");
    record157.set("salary", "$75K-$120K");
    record157.set("skills", ["Advanced Privacy", "Advanced GDPR", "CCPA", "Encryption", "Automation"]);
    record157.set("projects", ["Privacy Framework", "Encryption System", "Compliance Automation"]);
    record157.set("certifications", ["CIPM", "CIPP"]);
    record157.set("resources", ["CIPM Guide", "CIPP Guide", "Udemy Advanced Courses", "Coursera"]);
  try {
    app.save(record157);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record158 = new Record(collection);
    record158.set("careerSlug", "privacy-engineer");
    record158.set("level", "Advanced");
    record158.set("timeline", "24+ months");
    record158.set("salary", "$120K-$200K+");
    record158.set("skills", ["Advanced Privacy Strategy", "Leadership", "Research Skills", "Innovation", "Governance"]);
    record158.set("projects", ["Privacy Platform", "Research Publication", "Governance Framework"]);
    record158.set("certifications", ["Advanced Privacy", "Research Publication"]);
    record158.set("resources", ["Advanced Privacy", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record158);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record159 = new Record(collection);
    record159.set("careerSlug", "capacity-planning-engineer");
    record159.set("level", "Beginner");
    record159.set("timeline", "6-12 months");
    record159.set("salary", "$45K-$75K");
    record159.set("skills", ["Capacity Planning Basics", "Forecasting Basics", "Monitoring", "Analysis", "Tools"]);
    record159.set("projects", ["Capacity Plan", "Forecasting Report", "Analysis Report"]);
    record159.set("certifications", ["Capacity Planning Basics", "Forecasting Basics"]);
    record159.set("resources", ["Capacity Planning Guide", "Forecasting Guide", "Monitoring Guide", "Udemy Courses"]);
  try {
    app.save(record159);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record160 = new Record(collection);
    record160.set("careerSlug", "capacity-planning-engineer");
    record160.set("level", "Intermediate");
    record160.set("timeline", "12-24 months");
    record160.set("salary", "$75K-$120K");
    record160.set("skills", ["Advanced Capacity Planning", "Advanced Forecasting", "Cost Optimization", "Modeling", "Automation"]);
    record160.set("projects", ["Advanced Capacity Plan", "Cost Optimization", "Modeling System"]);
    record160.set("certifications", ["Capacity Planning Certification", "Forecasting Certification"]);
    record160.set("resources", ["Advanced Capacity Planning", "Cost Optimization Guide", "Udemy Advanced Courses", "Coursera"]);
  try {
    app.save(record160);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record161 = new Record(collection);
    record161.set("careerSlug", "capacity-planning-engineer");
    record161.set("level", "Advanced");
    record161.set("timeline", "24+ months");
    record161.set("salary", "$120K-$200K+");
    record161.set("skills", ["Advanced Planning Strategy", "Leadership", "Research Skills", "Innovation", "Strategic Planning"]);
    record161.set("projects", ["Planning Platform", "Research Publication", "Strategic Plan"]);
    record161.set("certifications", ["Advanced Capacity Planning", "Research Publication"]);
    record161.set("resources", ["Advanced Capacity Planning", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record161);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record162 = new Record(collection);
    record162.set("careerSlug", "disaster-recovery-engineer");
    record162.set("level", "Beginner");
    record162.set("timeline", "6-12 months");
    record162.set("salary", "$45K-$75K");
    record162.set("skills", ["Disaster Recovery Basics", "Business Continuity Basics", "Backup Basics", "Testing", "Documentation"]);
    record162.set("projects", ["DR Plan", "BC Plan", "Testing Report"]);
    record162.set("certifications", ["Disaster Recovery Basics", "BC Basics"]);
    record162.set("resources", ["DR Guide", "BC Guide", "Backup Guide", "Udemy Courses"]);
  try {
    app.save(record162);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record163 = new Record(collection);
    record163.set("careerSlug", "disaster-recovery-engineer");
    record163.set("level", "Intermediate");
    record163.set("timeline", "12-24 months");
    record163.set("salary", "$75K-$120K");
    record163.set("skills", ["Advanced DR", "Advanced BC", "Failover", "Automation", "Metrics"]);
    record163.set("projects", ["Advanced DR Plan", "Failover System", "Automation Framework"]);
    record163.set("certifications", ["DRII", "CBCP"]);
    record163.set("resources", ["DRII Guide", "CBCP Guide", "Udemy Advanced Courses", "Coursera"]);
  try {
    app.save(record163);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record164 = new Record(collection);
    record164.set("careerSlug", "disaster-recovery-engineer");
    record164.set("level", "Advanced");
    record164.set("timeline", "24+ months");
    record164.set("salary", "$120K-$200K+");
    record164.set("skills", ["Advanced DR Strategy", "Leadership", "Research Skills", "Innovation", "Governance"]);
    record164.set("projects", ["DR Platform", "Research Publication", "Governance Framework"]);
    record164.set("certifications", ["Advanced DR", "Research Publication"]);
    record164.set("resources", ["Advanced DR", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record164);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record165 = new Record(collection);
    record165.set("careerSlug", "vendor-manager");
    record165.set("level", "Beginner");
    record165.set("timeline", "6-12 months");
    record165.set("salary", "$45K-$75K");
    record165.set("skills", ["Vendor Management Basics", "Contract Basics", "Communication", "Negotiation", "Tools"]);
    record165.set("projects", ["Vendor Assessment", "Contract Review", "SLA Document"]);
    record165.set("certifications", ["Vendor Management Basics", "Contract Basics"]);
    record165.set("resources", ["Vendor Management Guide", "Contract Guide", "Negotiation Guide", "Udemy Courses"]);
  try {
    app.save(record165);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record166 = new Record(collection);
    record166.set("careerSlug", "vendor-manager");
    record166.set("level", "Intermediate");
    record166.set("timeline", "12-24 months");
    record166.set("salary", "$75K-$120K");
    record166.set("skills", ["Advanced Vendor Management", "Advanced Contracts", "SLA Management", "Risk Assessment", "Metrics"]);
    record166.set("projects", ["Vendor Strategy", "SLA Management System", "Risk Assessment"]);
    record166.set("certifications", ["Vendor Management Certification", "Contract Management"]);
    record166.set("resources", ["Advanced Vendor Management", "SLA Guide", "Udemy Advanced Courses", "Coursera"]);
  try {
    app.save(record166);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record167 = new Record(collection);
    record167.set("careerSlug", "vendor-manager");
    record167.set("level", "Advanced");
    record167.set("timeline", "24+ months");
    record167.set("salary", "$120K-$200K+");
    record167.set("skills", ["Advanced Management Strategy", "Leadership", "Research Skills", "Innovation", "Strategic Planning"]);
    record167.set("projects", ["Vendor Platform", "Research Publication", "Strategic Plan"]);
    record167.set("certifications", ["Advanced Vendor Management", "Research Publication"]);
    record167.set("resources", ["Advanced Vendor Management", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record167);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record168 = new Record(collection);
    record168.set("careerSlug", "it-consultant");
    record168.set("level", "Beginner");
    record168.set("timeline", "6-12 months");
    record168.set("salary", "$45K-$75K");
    record168.set("skills", ["Consulting Basics", "Technology Knowledge", "Communication", "Analysis", "Tools"]);
    record168.set("projects", ["Technology Assessment", "Consulting Report", "Recommendation Plan"]);
    record168.set("certifications", ["Consulting Basics", "Technology Certification"]);
    record168.set("resources", ["Consulting Guide", "Technology Guide", "Communication Guide", "Udemy Courses"]);
  try {
    app.save(record168);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record169 = new Record(collection);
    record169.set("careerSlug", "it-consultant");
    record169.set("level", "Intermediate");
    record169.set("timeline", "12-24 months");
    record169.set("salary", "$75K-$120K");
    record169.set("skills", ["Advanced Consulting", "Advanced Technology", "Client Management", "Project Management", "Metrics"]);
    record169.set("projects", ["Consulting Engagement", "Technology Strategy", "Implementation Plan"]);
    record169.set("certifications", ["Consulting Certification", "Advanced Technology"]);
    record169.set("resources", ["Advanced Consulting", "Client Management Guide", "Udemy Advanced Courses", "Coursera"]);
  try {
    app.save(record169);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record170 = new Record(collection);
    record170.set("careerSlug", "it-consultant");
    record170.set("level", "Advanced");
    record170.set("timeline", "24+ months");
    record170.set("salary", "$120K-$200K+");
    record170.set("skills", ["Advanced Consulting Strategy", "Leadership", "Research Skills", "Innovation", "Strategic Planning"]);
    record170.set("projects", ["Consulting Platform", "Research Publication", "Strategic Plan"]);
    record170.set("certifications", ["Advanced Consulting", "Research Publication"]);
    record170.set("resources", ["Advanced Consulting", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record170);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record171 = new Record(collection);
    record171.set("careerSlug", "technical-architect");
    record171.set("level", "Beginner");
    record171.set("timeline", "6-12 months");
    record171.set("salary", "$45K-$75K");
    record171.set("skills", ["Architecture Basics", "System Design Basics", "Technology Knowledge", "Communication", "Documentation"]);
    record171.set("projects", ["Architecture Diagram", "Design Document", "Technology Assessment"]);
    record171.set("certifications", ["Architecture Basics", "System Design Basics"]);
    record171.set("resources", ["Architecture Guide", "System Design Primer", "Technology Guide", "Udemy Courses"]);
  try {
    app.save(record171);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record172 = new Record(collection);
    record172.set("careerSlug", "technical-architect");
    record172.set("level", "Intermediate");
    record172.set("timeline", "12-24 months");
    record172.set("salary", "$75K-$120K");
    record172.set("skills", ["Advanced Architecture", "Advanced System Design", "Technology Selection", "Scalability", "Mentoring"]);
    record172.set("projects", ["Enterprise Architecture", "Scalability Design", "Technology Strategy"]);
    record172.set("certifications", ["TOGAF Certified", "AWS Solutions Architect"]);
    record172.set("resources", ["TOGAF Guide", "AWS Docs", "System Design Primer", "Udemy Advanced Courses"]);
  try {
    app.save(record172);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record173 = new Record(collection);
    record173.set("careerSlug", "technical-architect");
    record173.set("level", "Advanced");
    record173.set("timeline", "24+ months");
    record173.set("salary", "$120K-$200K+");
    record173.set("skills", ["Advanced Architecture Strategy", "Leadership", "Research Skills", "Innovation", "Strategic Planning"]);
    record173.set("projects", ["Architecture Platform", "Research Publication", "Strategic Plan"]);
    record173.set("certifications", ["TOGAF Expert", "Advanced Architecture"]);
    record173.set("resources", ["Advanced Architecture", "Conference Talks", "Research Papers", "Industry Blogs"]);
  try {
    app.save(record173);
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
