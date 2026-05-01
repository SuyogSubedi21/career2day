/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerLevels");

  const record0 = new Record(collection);
    record0.set("careerSlug", "software-engineer");
    record0.set("level", "Beginner");
    record0.set("timeline", "6-12 months");
    record0.set("salary", "$50k-$70k");
    record0.set("skills", ["Variables and Data Types", "Control Flow", "Functions", "Basic Algorithms", "Debugging", "Version Control"]);
    record0.set("projects", ["Calculator App", "To-Do List", "Simple Game"]);
    record0.set("certifications", ["Python for Everybody", "JavaScript Basics"]);
    record0.set("resources", [{"name": "Codecademy", "type": "Online Course", "url": "https://codecademy.com"}, {"name": "FreeCodeCamp", "type": "Video Course", "url": "https://freecodecamp.org"}]);
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
    record1.set("salary", "$70k-$100k");
    record1.set("skills", ["Object-Oriented Programming", "Data Structures", "Algorithms", "Testing", "API Design", "Database Design"]);
    record1.set("projects", ["REST API", "Web Application", "Microservice"]);
    record1.set("certifications", ["AWS Developer Associate", "Java Certification"]);
    record1.set("resources", [{"name": "LeetCode", "type": "Practice Platform", "url": "https://leetcode.com"}, {"name": "System Design Primer", "type": "Learning Resource", "url": "https://github.com/donnemartin/system-design-primer"}]);
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
    record2.set("salary", "$100k-$150k+");
    record2.set("skills", ["System Design", "Distributed Systems", "Performance Optimization", "Architecture Patterns", "Leadership", "Technical Strategy"]);
    record2.set("projects", ["Scalable System", "Open Source Contribution", "Technical Leadership"]);
    record2.set("certifications", ["AWS Solutions Architect", "System Design Mastery"]);
    record2.set("resources", [{"name": "Designing Data-Intensive Applications", "type": "Book", "url": "https://dataintensive.net"}, {"name": "High Scalability", "type": "Blog", "url": "http://highscalability.com"}]);
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
    record3.set("salary", "$40k-$55k");
    record3.set("skills", ["Excel Fundamentals", "SQL Basics", "Data Visualization", "Statistics Basics", "Google Analytics", "Data Cleaning"]);
    record3.set("projects", ["Sales Dashboard", "Customer Analysis", "Trend Report"]);
    record3.set("certifications", ["Google Analytics Certification", "Excel Basics"]);
    record3.set("resources", [{"name": "Mode Analytics SQL Tutorial", "type": "Online Course", "url": "https://mode.com/sql-tutorial"}, {"name": "Tableau Public", "type": "Practice Platform", "url": "https://public.tableau.com"}]);
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
    record4.set("salary", "$55k-$75k");
    record4.set("skills", ["Advanced SQL", "Tableau/Power BI", "Statistical Analysis", "Python for Data", "Data Modeling", "Business Acumen"]);
    record4.set("projects", ["Business Intelligence Dashboard", "Predictive Analysis", "Data Pipeline"]);
    record4.set("certifications", ["Tableau Desktop Specialist", "Google Data Analytics Professional"]);
    record4.set("resources", [{"name": "DataCamp", "type": "Online Course", "url": "https://datacamp.com"}, {"name": "Kaggle", "type": "Practice Platform", "url": "https://kaggle.com"}]);
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
    record5.set("salary", "$75k-$110k+");
    record5.set("skills", ["Advanced Analytics", "Machine Learning Basics", "Data Strategy", "Leadership", "Communication", "Business Strategy"]);
    record5.set("projects", ["Predictive Model", "Data Strategy", "Team Leadership"]);
    record5.set("certifications", ["Advanced Analytics Certification", "Data Science Fundamentals"]);
    record5.set("resources", [{"name": "Coursera Data Science Specialization", "type": "Online Course", "url": "https://coursera.org"}, {"name": "Towards Data Science", "type": "Blog", "url": "https://towardsdatascience.com"}]);
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
    record6.set("salary", "$60k-$80k");
    record6.set("skills", ["Linux Fundamentals", "Networking Basics", "Shell Scripting", "Git", "Docker Basics", "CI/CD Concepts"]);
    record6.set("projects", ["Linux Server Setup", "Docker Container", "Simple CI/CD Pipeline"]);
    record6.set("certifications", ["Linux Fundamentals", "Docker Basics"]);
    record6.set("resources", [{"name": "Linux Academy", "type": "Online Course", "url": "https://linuxacademy.com"}, {"name": "Docker Documentation", "type": "Official Docs", "url": "https://docs.docker.com"}]);
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
    record7.set("salary", "$80k-$120k");
    record7.set("skills", ["Kubernetes", "Infrastructure as Code", "Cloud Platforms", "Monitoring", "CI/CD Pipelines", "Container Orchestration"]);
    record7.set("projects", ["Kubernetes Cluster", "Terraform Infrastructure", "Monitoring System"]);
    record7.set("certifications", ["AWS Certified DevOps Engineer", "Kubernetes Administrator"]);
    record7.set("resources", [{"name": "Kubernetes Official Tutorial", "type": "Official Docs", "url": "https://kubernetes.io"}, {"name": "Terraform Registry", "type": "Official Docs", "url": "https://registry.terraform.io"}]);
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
    record8.set("salary", "$120k-$180k+");
    record8.set("skills", ["Advanced Kubernetes", "Multi-Cloud Strategy", "Security Automation", "Cost Optimization", "Architecture Design", "Leadership"]);
    record8.set("projects", ["Multi-Cloud Infrastructure", "Security Automation", "Cost Optimization Strategy"]);
    record8.set("certifications", ["AWS Solutions Architect", "Kubernetes Security Specialist"]);
    record8.set("resources", [{"name": "Cloud Native Computing Foundation", "type": "Certification Body", "url": "https://cncf.io"}, {"name": "DevOps Handbook", "type": "Book", "url": "https://itrevolution.com"}]);
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
    record9.set("salary", "$70k-$90k");
    record9.set("skills", ["Product Fundamentals", "User Research", "Competitive Analysis", "Roadmap Planning", "Communication", "Analytics Basics"]);
    record9.set("projects", ["Product Brief", "User Research Study", "Feature Proposal"]);
    record9.set("certifications", ["Reforge Product Management", "Google Product Management"]);
    record9.set("resources", [{"name": "Reforge", "type": "Online Course", "url": "https://reforge.com"}, {"name": "Product School", "type": "Online Course", "url": "https://productschool.com"}]);
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
    record10.set("salary", "$90k-$130k");
    record10.set("skills", ["Product Strategy", "Metrics and Analytics", "Stakeholder Management", "Roadmap Execution", "User Testing", "Market Analysis"]);
    record10.set("projects", ["Product Strategy", "Launch Campaign", "Metrics Dashboard"]);
    record10.set("certifications", ["Pragmatic Marketing", "Advanced Product Management"]);
    record10.set("resources", [{"name": "Inspired by Marty Cagan", "type": "Book", "url": "https://svpg.com"}, {"name": "Product Hunt", "type": "Community", "url": "https://producthunt.com"}]);
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
    record11.set("salary", "$130k-$200k+");
    record11.set("skills", ["Product Vision", "Business Strategy", "Leadership", "Organizational Impact", "Innovation", "Executive Communication"]);
    record11.set("projects", ["Product Vision", "Organizational Strategy", "Team Leadership"]);
    record11.set("certifications", ["Executive Product Management", "Strategic Leadership"]);
    record11.set("resources", [{"name": "Lean Product Playbook", "type": "Book", "url": "https://leanproductplaybook.com"}, {"name": "Mind the Product", "type": "Community", "url": "https://mindtheproduct.com"}]);
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
    record12.set("salary", "$50k-$70k");
    record12.set("skills", ["Design Fundamentals", "Wireframing", "User Research Basics", "Figma", "Prototyping", "Visual Design"]);
    record12.set("projects", ["Wireframe Set", "Low-Fidelity Prototype", "Design System"]);
    record12.set("certifications", ["Google UX Design", "Figma Basics"]);
    record12.set("resources", [{"name": "Interaction Design Foundation", "type": "Online Course", "url": "https://interaction-design.org"}, {"name": "Figma Community", "type": "Community", "url": "https://figma.com/community"}]);
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
    record13.set("salary", "$70k-$100k");
    record13.set("skills", ["User Research", "Interaction Design", "Usability Testing", "Design Systems", "Prototyping", "Communication"]);
    record13.set("projects", ["User Research Study", "Interactive Prototype", "Design System"]);
    record13.set("certifications", ["Nielsen Norman UX Certification", "Advanced Figma"]);
    record13.set("resources", [{"name": "Don Norman Design of Everyday Things", "type": "Book", "url": "https://mitpress.mit.edu"}, {"name": "UX Collective", "type": "Blog", "url": "https://uxdesign.cc"}]);
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
    record14.set("salary", "$100k-$140k+");
    record14.set("skills", ["Design Strategy", "User Research Leadership", "Design Thinking", "Accessibility", "Leadership", "Business Impact"]);
    record14.set("projects", ["Design Strategy", "Research Leadership", "Team Mentoring"]);
    record14.set("certifications", ["Advanced UX Strategy", "Design Leadership"]);
    record14.set("resources", [{"name": "Design of Everyday Things", "type": "Book", "url": "https://mitpress.mit.edu"}, {"name": "A List Apart", "type": "Blog", "url": "https://alistapart.com"}]);
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
    record15.set("careerSlug", "backend-engineer");
    record15.set("level", "Beginner");
    record15.set("timeline", "6-12 months");
    record15.set("salary", "$55k-$75k");
    record15.set("skills", ["Programming Fundamentals", "HTTP/REST", "Databases Basics", "API Design", "Testing", "Version Control"]);
    record15.set("projects", ["Simple API", "Database Design", "CRUD Application"]);
    record15.set("certifications", ["Backend Development Basics", "REST API Design"]);
    record15.set("resources", [{"name": "Backend Development Roadmap", "type": "Learning Path", "url": "https://roadmap.sh"}, {"name": "REST API Best Practices", "type": "Guide", "url": "https://restfulapi.net"}]);
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
    record16.set("careerSlug", "backend-engineer");
    record16.set("level", "Intermediate");
    record16.set("timeline", "1-2 years");
    record16.set("salary", "$75k-$110k");
    record16.set("skills", ["Advanced Database Design", "System Design", "Caching", "Message Queues", "Microservices", "Performance Optimization"]);
    record16.set("projects", ["Microservice", "Caching Layer", "Message Queue System"]);
    record16.set("certifications", ["AWS Developer Associate", "System Design Fundamentals"]);
    record16.set("resources", [{"name": "System Design Interview", "type": "Course", "url": "https://systemdesigninterview.com"}, {"name": "High Performance MySQL", "type": "Book", "url": "https://oreilly.com"}]);
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
    record17.set("careerSlug", "backend-engineer");
    record17.set("level", "Advanced");
    record17.set("timeline", "3+ years");
    record17.set("salary", "$110k-$165k+");
    record17.set("skills", ["Distributed Systems", "Architecture Design", "Leadership", "Performance Tuning", "Security", "Technical Strategy"]);
    record17.set("projects", ["Distributed System", "Architecture Design", "Team Leadership"]);
    record17.set("certifications", ["AWS Solutions Architect", "System Design Mastery"]);
    record17.set("resources", [{"name": "Designing Data-Intensive Applications", "type": "Book", "url": "https://dataintensive.net"}, {"name": "High Scalability", "type": "Blog", "url": "http://highscalability.com"}]);
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
    record18.set("careerSlug", "frontend-engineer");
    record18.set("level", "Beginner");
    record18.set("timeline", "6-12 months");
    record18.set("salary", "$50k-$70k");
    record18.set("skills", ["HTML/CSS", "JavaScript Basics", "DOM Manipulation", "Responsive Design", "Git", "Browser DevTools"]);
    record18.set("projects", ["Static Website", "Interactive Component", "Responsive Layout"]);
    record18.set("certifications", ["HTML/CSS Basics", "JavaScript Fundamentals"]);
    record18.set("resources", [{"name": "FreeCodeCamp Frontend", "type": "Online Course", "url": "https://freecodecamp.org"}, {"name": "MDN Web Docs", "type": "Reference", "url": "https://developer.mozilla.org"}]);
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
    record19.set("careerSlug", "frontend-engineer");
    record19.set("level", "Intermediate");
    record19.set("timeline", "1-2 years");
    record19.set("salary", "$70k-$110k");
    record19.set("skills", ["React/Vue/Angular", "State Management", "API Integration", "Testing", "Performance Optimization", "Accessibility"]);
    record19.set("projects", ["React Application", "State Management", "API Integration"]);
    record19.set("certifications", ["React Developer Certification", "Advanced JavaScript"]);
    record19.set("resources", [{"name": "React Official Tutorial", "type": "Official Docs", "url": "https://react.dev"}, {"name": "JavaScript.info", "type": "Learning Resource", "url": "https://javascript.info"}]);
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
    record20.set("careerSlug", "frontend-engineer");
    record20.set("level", "Advanced");
    record20.set("timeline", "3+ years");
    record20.set("salary", "$110k-$155k+");
    record20.set("skills", ["Advanced React", "Performance Optimization", "Architecture Design", "Leadership", "Web Standards", "Technical Strategy"]);
    record20.set("projects", ["Complex Application", "Performance Optimization", "Team Leadership"]);
    record20.set("certifications", ["Advanced React", "Web Performance Optimization"]);
    record20.set("resources", [{"name": "Web Performance Working Group", "type": "Standards Body", "url": "https://www.w3.org"}, {"name": "Frontend Masters", "type": "Online Course", "url": "https://frontendmasters.com"}]);
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
    record21.set("careerSlug", "full-stack-engineer");
    record21.set("level", "Beginner");
    record21.set("timeline", "9-15 months");
    record21.set("salary", "$55k-$75k");
    record21.set("skills", ["Frontend Basics", "Backend Basics", "Database Basics", "Full Stack Concepts", "Git", "Deployment Basics"]);
    record21.set("projects", ["Full Stack Todo App", "Blog Platform", "Simple E-commerce"]);
    record21.set("certifications", ["Full Stack Development Basics", "MERN Stack Basics"]);
    record21.set("resources", [{"name": "The Odin Project", "type": "Online Course", "url": "https://theodinproject.com"}, {"name": "Full Stack Open", "type": "Online Course", "url": "https://fullstackopen.com"}]);
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
    record22.set("careerSlug", "full-stack-engineer");
    record22.set("level", "Intermediate");
    record22.set("timeline", "1-2 years");
    record22.set("salary", "$75k-$110k");
    record22.set("skills", ["Advanced Frontend", "Advanced Backend", "Database Design", "DevOps Basics", "Testing", "Performance Optimization"]);
    record22.set("projects", ["Scalable Application", "Microservices", "DevOps Pipeline"]);
    record22.set("certifications", ["Full Stack Developer Certification", "AWS Developer Associate"]);
    record22.set("resources", [{"name": "Full Stack Development Roadmap", "type": "Learning Path", "url": "https://roadmap.sh"}, {"name": "System Design Interview", "type": "Course", "url": "https://systemdesigninterview.com"}]);
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
    record23.set("careerSlug", "full-stack-engineer");
    record23.set("level", "Advanced");
    record23.set("timeline", "3+ years");
    record23.set("salary", "$110k-$160k+");
    record23.set("skills", ["System Design", "Architecture", "Leadership", "Performance Optimization", "Security", "Technical Strategy"]);
    record23.set("projects", ["Complex System", "Architecture Design", "Team Leadership"]);
    record23.set("certifications", ["AWS Solutions Architect", "System Design Mastery"]);
    record23.set("resources", [{"name": "Designing Data-Intensive Applications", "type": "Book", "url": "https://dataintensive.net"}, {"name": "High Scalability", "type": "Blog", "url": "http://highscalability.com"}]);
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
    record24.set("careerSlug", "cloud-architect");
    record24.set("level", "Beginner");
    record24.set("timeline", "6-12 months");
    record24.set("salary", "$70k-$90k");
    record24.set("skills", ["Cloud Fundamentals", "AWS Basics", "Networking Basics", "Security Basics", "Cost Management", "Compliance Basics"]);
    record24.set("projects", ["Simple Cloud Setup", "VPC Configuration", "Cost Analysis"]);
    record24.set("certifications", ["AWS Cloud Practitioner", "Azure Fundamentals"]);
    record24.set("resources", [{"name": "AWS Training and Certification", "type": "Official Training", "url": "https://aws.amazon.com/training"}, {"name": "Cloud Academy", "type": "Online Course", "url": "https://cloudacademy.com"}]);
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
    record25.set("careerSlug", "cloud-architect");
    record25.set("level", "Intermediate");
    record25.set("timeline", "1-2 years");
    record25.set("salary", "$90k-$140k");
    record25.set("skills", ["Advanced AWS", "Infrastructure as Code", "Security Architecture", "Cost Optimization", "Disaster Recovery", "Compliance"]);
    record25.set("projects", ["Multi-Tier Architecture", "Disaster Recovery Plan", "Security Architecture"]);
    record25.set("certifications", ["AWS Solutions Architect Associate", "Azure Administrator"]);
    record25.set("resources", [{"name": "AWS Solutions Architect Professional", "type": "Certification", "url": "https://aws.amazon.com/certification"}, {"name": "Terraform Registry", "type": "Official Docs", "url": "https://registry.terraform.io"}]);
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
    record26.set("careerSlug", "cloud-architect");
    record26.set("level", "Advanced");
    record26.set("timeline", "3+ years");
    record26.set("salary", "$140k-$200k+");
    record26.set("skills", ["Enterprise Architecture", "Multi-Cloud Strategy", "Advanced Security", "Cost Optimization", "Leadership", "Strategic Planning"]);
    record26.set("projects", ["Enterprise Architecture", "Multi-Cloud Strategy", "Team Leadership"]);
    record26.set("certifications", ["AWS Solutions Architect Professional", "Azure Solutions Architect Expert"]);
    record26.set("resources", [{"name": "AWS Well-Architected Framework", "type": "Official Guide", "url": "https://aws.amazon.com/architecture/well-architected"}, {"name": "Cloud Architecture Patterns", "type": "Book", "url": "https://oreilly.com"}]);
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
    record27.set("careerSlug", "security-engineer");
    record27.set("level", "Beginner");
    record27.set("timeline", "6-12 months");
    record27.set("salary", "$65k-$85k");
    record27.set("skills", ["Security Fundamentals", "Networking Basics", "Cryptography Basics", "Vulnerability Assessment", "Compliance Basics", "Communication"]);
    record27.set("projects", ["Security Audit", "Vulnerability Report", "Security Policy"]);
    record27.set("certifications", ["Security+", "CompTIA A+"]);
    record27.set("resources", [{"name": "Professor Messer Security+", "type": "Video Course", "url": "https://professormesser.com"}, {"name": "OWASP Top 10", "type": "Guide", "url": "https://owasp.org"}]);
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
    record28.set("careerSlug", "security-engineer");
    record28.set("level", "Intermediate");
    record28.set("timeline", "1-2 years");
    record28.set("salary", "$85k-$130k");
    record28.set("skills", ["Advanced Security", "Incident Response", "Penetration Testing", "Security Architecture", "Compliance Management", "Leadership"]);
    record28.set("projects", ["Incident Response Plan", "Penetration Test", "Security Architecture"]);
    record28.set("certifications", ["CEH", "CISSP"]);
    record28.set("resources", [{"name": "Certified Ethical Hacker", "type": "Certification", "url": "https://www.eccouncil.org"}, {"name": "SANS Security Training", "type": "Online Course", "url": "https://www.sans.org"}]);
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
    record29.set("careerSlug", "security-engineer");
    record29.set("level", "Advanced");
    record29.set("timeline", "3+ years");
    record29.set("salary", "$130k-$190k+");
    record29.set("skills", ["Enterprise Security", "Security Strategy", "Leadership", "Threat Intelligence", "Advanced Incident Response", "Compliance Strategy"]);
    record29.set("projects", ["Security Strategy", "Threat Intelligence Program", "Team Leadership"]);
    record29.set("certifications", ["CISSP", "CCSK"]);
    record29.set("resources", [{"name": "CISSP Study Guide", "type": "Book", "url": "https://oreilly.com"}, {"name": "Security Architecture Patterns", "type": "Book", "url": "https://oreilly.com"}]);
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
    record30.set("careerSlug", "machine-learning-engineer");
    record30.set("level", "Beginner");
    record30.set("timeline", "6-12 months");
    record30.set("salary", "$70k-$90k");
    record30.set("skills", ["Python Fundamentals", "Math Basics", "ML Concepts", "Data Preprocessing", "Scikit-learn", "Jupyter Notebooks"]);
    record30.set("projects", ["Iris Classification", "Housing Price Prediction", "Sentiment Analysis"]);
    record30.set("certifications", ["Machine Learning Basics", "Python for Data Science"]);
    record30.set("resources", [{"name": "Andrew Ng Machine Learning Course", "type": "Online Course", "url": "https://coursera.org"}, {"name": "Scikit-learn Documentation", "type": "Official Docs", "url": "https://scikit-learn.org"}]);
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
    record31.set("careerSlug", "machine-learning-engineer");
    record31.set("level", "Intermediate");
    record31.set("timeline", "1-2 years");
    record31.set("salary", "$90k-$140k");
    record31.set("skills", ["Deep Learning", "TensorFlow/PyTorch", "Feature Engineering", "Model Evaluation", "Production Systems", "Cloud ML"]);
    record31.set("projects", ["Neural Network", "Image Classification", "ML Pipeline"]);
    record31.set("certifications", ["TensorFlow Developer", "AWS Machine Learning Specialty"]);
    record31.set("resources", [{"name": "Deep Learning Specialization", "type": "Online Course", "url": "https://coursera.org"}, {"name": "TensorFlow Documentation", "type": "Official Docs", "url": "https://tensorflow.org"}]);
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
    record32.set("careerSlug", "machine-learning-engineer");
    record32.set("level", "Advanced");
    record32.set("timeline", "3+ years");
    record32.set("salary", "$140k-$200k+");
    record32.set("skills", ["Advanced Deep Learning", "Distributed ML", "MLOps", "Research", "Leadership", "Strategic Planning"]);
    record32.set("projects", ["Advanced ML System", "MLOps Pipeline", "Research Publication"]);
    record32.set("certifications", ["Advanced Machine Learning", "MLOps Specialization"]);
    record32.set("resources", [{"name": "Designing Machine Learning Systems", "type": "Book", "url": "https://oreilly.com"}, {"name": "Papers with Code", "type": "Research Platform", "url": "https://paperswithcode.com"}]);
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
    record33.set("careerSlug", "database-administrator");
    record33.set("level", "Beginner");
    record33.set("timeline", "6-12 months");
    record33.set("salary", "$60k-$80k");
    record33.set("skills", ["SQL Fundamentals", "Database Concepts", "Backup Basics", "User Management", "Monitoring Basics", "Documentation"]);
    record33.set("projects", ["Database Design", "Backup Plan", "User Management"]);
    record33.set("certifications", ["SQL Fundamentals", "Database Basics"]);
    record33.set("resources", [{"name": "Mode Analytics SQL Tutorial", "type": "Online Course", "url": "https://mode.com/sql-tutorial"}, {"name": "PostgreSQL Documentation", "type": "Official Docs", "url": "https://postgresql.org"}]);
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
    record34.set("careerSlug", "database-administrator");
    record34.set("level", "Intermediate");
    record34.set("timeline", "1-2 years");
    record34.set("salary", "$80k-$120k");
    record34.set("skills", ["Advanced SQL", "Performance Tuning", "Backup and Recovery", "Security", "Replication", "Monitoring"]);
    record34.set("projects", ["Performance Optimization", "Disaster Recovery", "Replication Setup"]);
    record34.set("certifications", ["Oracle Database Administrator", "PostgreSQL Administrator"]);
    record34.set("resources", [{"name": "High Performance MySQL", "type": "Book", "url": "https://oreilly.com"}, {"name": "Oracle University", "type": "Official Training", "url": "https://oracle.com/education"}]);
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
    record35.set("careerSlug", "database-administrator");
    record35.set("level", "Advanced");
    record35.set("timeline", "3+ years");
    record35.set("salary", "$120k-$155k+");
    record35.set("skills", ["Enterprise Database", "Advanced Tuning", "Capacity Planning", "Leadership", "Cloud Databases", "Strategic Planning"]);
    record35.set("projects", ["Enterprise Database", "Capacity Planning", "Team Leadership"]);
    record35.set("certifications", ["Oracle Database Expert", "Advanced DBA Certification"]);
    record35.set("resources", [{"name": "Database Internals", "type": "Book", "url": "https://oreilly.com"}, {"name": "Database Engineering", "type": "Blog", "url": "https://use-the-index-luke.com"}]);
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
    record36.set("careerSlug", "systems-administrator");
    record36.set("level", "Beginner");
    record36.set("timeline", "6-12 months");
    record36.set("salary", "$50k-$70k");
    record36.set("skills", ["Linux Basics", "Windows Basics", "Networking Basics", "User Management", "File Systems", "Troubleshooting"]);
    record36.set("projects", ["Linux Server Setup", "User Management", "Network Configuration"]);
    record36.set("certifications", ["CompTIA A+", "Linux Fundamentals"]);
    record36.set("resources", [{"name": "Linux Academy", "type": "Online Course", "url": "https://linuxacademy.com"}, {"name": "Linux Command Line Basics", "type": "Online Course", "url": "https://udacity.com"}]);
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
    record37.set("careerSlug", "systems-administrator");
    record37.set("level", "Intermediate");
    record37.set("timeline", "1-2 years");
    record37.set("salary", "$70k-$105k");
    record37.set("skills", ["Advanced Linux", "Active Directory", "Scripting", "Monitoring", "Security", "Automation"]);
    record37.set("projects", ["Automation Script", "Monitoring System", "Security Hardening"]);
    record37.set("certifications", ["RHCE", "Microsoft Certified Administrator"]);
    record37.set("resources", [{"name": "Red Hat Training", "type": "Official Training", "url": "https://redhat.com/training"}, {"name": "Microsoft Learn", "type": "Official Training", "url": "https://learn.microsoft.com"}]);
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
    record38.set("careerSlug", "systems-administrator");
    record38.set("level", "Advanced");
    record38.set("timeline", "3+ years");
    record38.set("salary", "$105k-$140k+");
    record38.set("skills", ["Enterprise Systems", "Advanced Automation", "Leadership", "Cloud Systems", "Strategic Planning", "Compliance"]);
    record38.set("projects", ["Enterprise Infrastructure", "Automation Framework", "Team Leadership"]);
    record38.set("certifications", ["RHCA", "Microsoft Certified Solutions Expert"]);
    record38.set("resources", [{"name": "Enterprise Linux Administration", "type": "Book", "url": "https://oreilly.com"}, {"name": "Systems Administration Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record39.set("careerSlug", "network-engineer");
    record39.set("level", "Beginner");
    record39.set("timeline", "6-12 months");
    record39.set("salary", "$55k-$75k");
    record39.set("skills", ["Networking Fundamentals", "TCP/IP", "Routing Basics", "Switching Basics", "Cisco Basics", "Troubleshooting"]);
    record39.set("projects", ["Network Design", "Router Configuration", "Switch Configuration"]);
    record39.set("certifications", ["CompTIA Network+", "Cisco CCNA"]);
    record39.set("resources", [{"name": "Cisco Learning Network", "type": "Official Training", "url": "https://learningnetwork.cisco.com"}, {"name": "Packet Tracer", "type": "Simulation Tool", "url": "https://cisco.com"}]);
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
    record40.set("careerSlug", "network-engineer");
    record40.set("level", "Intermediate");
    record40.set("timeline", "1-2 years");
    record40.set("salary", "$75k-$115k");
    record40.set("skills", ["Advanced Routing", "Advanced Switching", "VPN", "Firewalls", "Security", "Monitoring"]);
    record40.set("projects", ["VPN Setup", "Firewall Configuration", "Network Security"]);
    record40.set("certifications", ["Cisco CCNP", "Juniper JNCIA"]);
    record40.set("resources", [{"name": "Cisco Learning Network", "type": "Official Training", "url": "https://learningnetwork.cisco.com"}, {"name": "GNS3", "type": "Simulation Tool", "url": "https://gns3.com"}]);
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
    record41.set("careerSlug", "network-engineer");
    record41.set("level", "Advanced");
    record41.set("timeline", "3+ years");
    record41.set("salary", "$115k-$160k+");
    record41.set("skills", ["Enterprise Networking", "Advanced Security", "Leadership", "Cloud Networking", "Strategic Planning", "Compliance"]);
    record41.set("projects", ["Enterprise Network", "Network Security", "Team Leadership"]);
    record41.set("certifications", ["Cisco CCIE", "Juniper JNCIE"]);
    record41.set("resources", [{"name": "CCIE Study Guide", "type": "Book", "url": "https://oreilly.com"}, {"name": "Network Engineering Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record42.set("careerSlug", "solutions-architect");
    record42.set("level", "Beginner");
    record42.set("timeline", "6-12 months");
    record42.set("salary", "$80k-$100k");
    record42.set("skills", ["Technical Fundamentals", "Communication", "Problem Solving", "Cloud Basics", "Architecture Basics", "Documentation"]);
    record42.set("projects", ["Solution Design", "Architecture Diagram", "Technical Proposal"]);
    record42.set("certifications", ["AWS Solutions Architect Associate", "Azure Administrator"]);
    record42.set("resources", [{"name": "AWS Training and Certification", "type": "Official Training", "url": "https://aws.amazon.com/training"}, {"name": "Cloud Architecture Patterns", "type": "Book", "url": "https://oreilly.com"}]);
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
    record43.set("careerSlug", "solutions-architect");
    record43.set("level", "Intermediate");
    record43.set("timeline", "1-2 years");
    record43.set("salary", "$100k-$150k");
    record43.set("skills", ["Advanced Architecture", "Business Acumen", "Leadership", "Security Architecture", "Cost Optimization", "Compliance"]);
    record43.set("projects", ["Enterprise Architecture", "Security Architecture", "Cost Optimization"]);
    record43.set("certifications", ["AWS Solutions Architect Professional", "Azure Solutions Architect Expert"]);
    record43.set("resources", [{"name": "AWS Well-Architected Framework", "type": "Official Guide", "url": "https://aws.amazon.com/architecture/well-architected"}, {"name": "Solution Architecture Patterns", "type": "Book", "url": "https://oreilly.com"}]);
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
    record44.set("careerSlug", "solutions-architect");
    record44.set("level", "Advanced");
    record44.set("timeline", "3+ years");
    record44.set("salary", "$150k-$210k+");
    record44.set("skills", ["Enterprise Strategy", "Leadership", "Innovation", "Multi-Cloud", "Strategic Planning", "Executive Communication"]);
    record44.set("projects", ["Strategic Architecture", "Digital Transformation", "Team Leadership"]);
    record44.set("certifications", ["AWS Solutions Architect Professional", "Azure Solutions Architect Expert"]);
    record44.set("resources", [{"name": "Enterprise Architecture Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "Architecture Patterns", "type": "Blog", "url": "https://martinfowler.com"}]);
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
    record45.set("careerSlug", "business-analyst");
    record45.set("level", "Beginner");
    record45.set("timeline", "6-12 months");
    record45.set("salary", "$50k-$70k");
    record45.set("skills", ["Business Analysis Basics", "Requirements Gathering", "Communication", "Documentation", "Excel", "Problem Solving"]);
    record45.set("projects", ["Requirements Document", "Process Flow", "Business Case"]);
    record45.set("certifications", ["Business Analysis Fundamentals", "IIBA ECBA"]);
    record45.set("resources", [{"name": "IIBA Training", "type": "Official Training", "url": "https://iiba.org"}, {"name": "Business Analysis Body of Knowledge", "type": "Guide", "url": "https://iiba.org"}]);
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
    record46.set("careerSlug", "business-analyst");
    record46.set("level", "Intermediate");
    record46.set("timeline", "1-2 years");
    record46.set("salary", "$70k-$100k");
    record46.set("skills", ["Advanced Analysis", "Stakeholder Management", "Data Analysis", "Process Improvement", "Communication", "Leadership"]);
    record46.set("projects", ["Process Improvement", "Data Analysis", "Stakeholder Management"]);
    record46.set("certifications", ["IIBA CCBA", "Agile Analysis Certification"]);
    record46.set("resources", [{"name": "IIBA Certification", "type": "Certification", "url": "https://iiba.org"}, {"name": "Business Analysis Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record47.set("careerSlug", "business-analyst");
    record47.set("level", "Advanced");
    record47.set("timeline", "3+ years");
    record47.set("salary", "$100k-$150k+");
    record47.set("skills", ["Strategic Analysis", "Leadership", "Business Strategy", "Innovation", "Executive Communication", "Organizational Impact"]);
    record47.set("projects", ["Strategic Initiative", "Organizational Change", "Team Leadership"]);
    record47.set("certifications", ["IIBA CBAP", "Advanced Business Analysis"]);
    record47.set("resources", [{"name": "Business Analysis Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "Strategic Business Analysis", "type": "Course", "url": "https://iiba.org"}]);
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
    record48.set("careerSlug", "project-manager");
    record48.set("level", "Beginner");
    record48.set("timeline", "6-12 months");
    record48.set("salary", "$60k-$80k");
    record48.set("skills", ["Project Management Basics", "Planning", "Communication", "Risk Management", "Time Management", "Documentation"]);
    record48.set("projects", ["Project Plan", "Risk Register", "Status Report"]);
    record48.set("certifications", ["CAPM", "Agile Fundamentals"]);
    record48.set("resources", [{"name": "PMI Training", "type": "Official Training", "url": "https://pmi.org"}, {"name": "Project Management Body of Knowledge", "type": "Guide", "url": "https://pmi.org"}]);
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
    record49.set("careerSlug", "project-manager");
    record49.set("level", "Intermediate");
    record49.set("timeline", "1-2 years");
    record49.set("salary", "$80k-$120k");
    record49.set("skills", ["Advanced Project Management", "Stakeholder Management", "Budget Management", "Risk Management", "Leadership", "Communication"]);
    record49.set("projects", ["Complex Project", "Budget Management", "Stakeholder Management"]);
    record49.set("certifications", ["PMP", "Agile Certified Practitioner"]);
    record49.set("resources", [{"name": "PMP Certification", "type": "Certification", "url": "https://pmi.org"}, {"name": "Project Management Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record50.set("careerSlug", "project-manager");
    record50.set("level", "Advanced");
    record50.set("timeline", "3+ years");
    record50.set("salary", "$120k-$170k+");
    record50.set("skills", ["Program Management", "Strategic Planning", "Leadership", "Organizational Impact", "Executive Communication", "Innovation"]);
    record50.set("projects", ["Program Management", "Strategic Initiative", "Team Leadership"]);
    record50.set("certifications", ["PgMP", "Advanced Project Management"]);
    record50.set("resources", [{"name": "Program Management Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "Strategic Project Management", "type": "Course", "url": "https://pmi.org"}]);
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
    record51.set("careerSlug", "scrum-master");
    record51.set("level", "Beginner");
    record51.set("timeline", "3-6 months");
    record51.set("salary", "$60k-$80k");
    record51.set("skills", ["Agile Fundamentals", "Scrum Framework", "Facilitation", "Communication", "Problem Solving", "Coaching"]);
    record51.set("projects", ["Sprint Planning", "Daily Standup", "Retrospective"]);
    record51.set("certifications", ["CSM", "Scrum Fundamentals"]);
    record51.set("resources", [{"name": "Scrum.org Training", "type": "Official Training", "url": "https://scrum.org"}, {"name": "Scrum Guide", "type": "Official Guide", "url": "https://scrumguides.org"}]);
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
    record52.set("careerSlug", "scrum-master");
    record52.set("level", "Intermediate");
    record52.set("timeline", "1-2 years");
    record52.set("salary", "$80k-$115k");
    record52.set("skills", ["Advanced Scrum", "Team Coaching", "Organizational Change", "Metrics", "Leadership", "Communication"]);
    record52.set("projects", ["Team Coaching", "Process Improvement", "Organizational Change"]);
    record52.set("certifications", ["PSM II", "Advanced Scrum Master"]);
    record52.set("resources", [{"name": "Scrum.org Certification", "type": "Certification", "url": "https://scrum.org"}, {"name": "Scrum Master Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record53.set("careerSlug", "scrum-master");
    record53.set("level", "Advanced");
    record53.set("timeline", "3+ years");
    record53.set("salary", "$115k-$160k+");
    record53.set("skills", ["Organizational Coaching", "Leadership", "Strategic Planning", "Transformation", "Executive Communication", "Innovation"]);
    record53.set("projects", ["Organizational Transformation", "Strategic Coaching", "Team Leadership"]);
    record53.set("certifications", ["PSM III", "Agile Coach Certification"]);
    record53.set("resources", [{"name": "Agile Coach Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "Organizational Agility", "type": "Course", "url": "https://scrum.org"}]);
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
    record54.set("careerSlug", "technical-writer");
    record54.set("level", "Beginner");
    record54.set("timeline", "6-12 months");
    record54.set("salary", "$45k-$65k");
    record54.set("skills", ["Technical Writing Basics", "Documentation Tools", "Communication", "Research", "Organization", "Attention to Detail"]);
    record54.set("projects", ["User Guide", "API Documentation", "Tutorial"]);
    record54.set("certifications", ["Technical Writing Fundamentals", "Markdown Basics"]);
    record54.set("resources", [{"name": "Write the Docs", "type": "Community", "url": "https://www.writethedocs.org"}, {"name": "Technical Writing Course", "type": "Online Course", "url": "https://udacity.com"}]);
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
    record55.set("careerSlug", "technical-writer");
    record55.set("level", "Intermediate");
    record55.set("timeline", "1-2 years");
    record55.set("salary", "$65k-$95k");
    record55.set("skills", ["Advanced Documentation", "Content Strategy", "Tools Expertise", "Communication", "Project Management", "Leadership"]);
    record55.set("projects", ["Documentation Strategy", "Content Management", "Tool Implementation"]);
    record55.set("certifications", ["Advanced Technical Writing", "Content Strategy"]);
    record55.set("resources", [{"name": "Society for Technical Communication", "type": "Professional Organization", "url": "https://stc.org"}, {"name": "Technical Writing Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record56.set("careerSlug", "technical-writer");
    record56.set("level", "Advanced");
    record56.set("timeline", "3+ years");
    record56.set("salary", "$95k-$130k+");
    record56.set("skills", ["Content Strategy", "Leadership", "Information Architecture", "Team Management", "Executive Communication", "Innovation"]);
    record56.set("projects", ["Content Strategy", "Team Leadership", "Information Architecture"]);
    record56.set("certifications", ["Advanced Content Strategy", "Information Architecture"]);
    record56.set("resources", [{"name": "Information Architecture Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "Content Strategy Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record57.set("careerSlug", "qa-engineer");
    record57.set("level", "Beginner");
    record57.set("timeline", "6-12 months");
    record57.set("salary", "$50k-$70k");
    record57.set("skills", ["Testing Fundamentals", "Test Planning", "Manual Testing", "Bug Reporting", "Communication", "Attention to Detail"]);
    record57.set("projects", ["Test Plan", "Test Cases", "Bug Report"]);
    record57.set("certifications", ["ISTQB Fundamentals", "QA Basics"]);
    record57.set("resources", [{"name": "ISTQB Training", "type": "Official Training", "url": "https://istqb.org"}, {"name": "Software Testing Fundamentals", "type": "Online Course", "url": "https://udacity.com"}]);
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
    record58.set("careerSlug", "qa-engineer");
    record58.set("level", "Intermediate");
    record58.set("timeline", "1-2 years");
    record58.set("salary", "$70k-$105k");
    record58.set("skills", ["Test Automation", "Selenium", "Performance Testing", "API Testing", "Leadership", "Communication"]);
    record58.set("projects", ["Automation Framework", "Performance Test", "API Test"]);
    record58.set("certifications", ["ISTQB Advanced", "Selenium Certification"]);
    record58.set("resources", [{"name": "ISTQB Advanced Certification", "type": "Certification", "url": "https://istqb.org"}, {"name": "Selenium Documentation", "type": "Official Docs", "url": "https://selenium.dev"}]);
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
    record59.set("careerSlug", "qa-engineer");
    record59.set("level", "Advanced");
    record59.set("timeline", "3+ years");
    record59.set("salary", "$105k-$145k+");
    record59.set("skills", ["QA Strategy", "Leadership", "Test Architecture", "Continuous Testing", "Executive Communication", "Innovation"]);
    record59.set("projects", ["QA Strategy", "Test Architecture", "Team Leadership"]);
    record59.set("certifications", ["ISTQB Expert", "Advanced QA Certification"]);
    record59.set("resources", [{"name": "QA Strategy Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "Continuous Testing", "type": "Book", "url": "https://oreilly.com"}]);
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
    record60.set("careerSlug", "mobile-developer");
    record60.set("level", "Beginner");
    record60.set("timeline", "6-12 months");
    record60.set("salary", "$55k-$75k");
    record60.set("skills", ["Mobile Fundamentals", "Swift/Kotlin Basics", "UI Development", "API Integration", "Git", "Testing"]);
    record60.set("projects", ["Simple App", "UI Components", "API Integration"]);
    record60.set("certifications", ["iOS Development Basics", "Android Development Basics"]);
    record60.set("resources", [{"name": "Apple Developer Training", "type": "Official Training", "url": "https://developer.apple.com"}, {"name": "Android Developer Training", "type": "Official Training", "url": "https://developer.android.com"}]);
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
    record61.set("careerSlug", "mobile-developer");
    record61.set("level", "Intermediate");
    record61.set("timeline", "1-2 years");
    record61.set("salary", "$75k-$120k");
    record61.set("skills", ["Advanced Mobile Development", "Performance Optimization", "Testing", "Databases", "Cloud Integration", "Leadership"]);
    record61.set("projects", ["Complex App", "Performance Optimization", "Cloud Integration"]);
    record61.set("certifications", ["iOS Developer Certification", "Android Developer Certification"]);
    record61.set("resources", [{"name": "Apple Developer Documentation", "type": "Official Docs", "url": "https://developer.apple.com"}, {"name": "Android Developer Documentation", "type": "Official Docs", "url": "https://developer.android.com"}]);
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
    record62.set("careerSlug", "mobile-developer");
    record62.set("level", "Advanced");
    record62.set("timeline", "3+ years");
    record62.set("salary", "$120k-$170k+");
    record62.set("skills", ["Mobile Architecture", "Leadership", "Performance Optimization", "Security", "Team Management", "Strategic Planning"]);
    record62.set("projects", ["Mobile Architecture", "Team Leadership", "Strategic Planning"]);
    record62.set("certifications", ["Advanced Mobile Development", "Mobile Architecture"]);
    record62.set("resources", [{"name": "Mobile Architecture Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "Mobile Development Patterns", "type": "Blog", "url": "https://martinfowler.com"}]);
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
    record63.set("careerSlug", "game-developer");
    record63.set("level", "Beginner");
    record63.set("timeline", "6-12 months");
    record63.set("salary", "$50k-$70k");
    record63.set("skills", ["Game Development Basics", "Unity Basics", "C# Basics", "Game Design", "Physics", "Debugging"]);
    record63.set("projects", ["Simple Game", "Game Mechanics", "Game Assets"]);
    record63.set("certifications", ["Unity Basics", "Game Development Fundamentals"]);
    record63.set("resources", [{"name": "Unity Learn", "type": "Official Training", "url": "https://learn.unity.com"}, {"name": "Game Development Roadmap", "type": "Learning Path", "url": "https://roadmap.sh"}]);
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
    record64.set("careerSlug", "game-developer");
    record64.set("level", "Intermediate");
    record64.set("timeline", "1-2 years");
    record64.set("salary", "$70k-$110k");
    record64.set("skills", ["Advanced Game Development", "Graphics", "Physics Engine", "Networking", "Performance Optimization", "Leadership"]);
    record64.set("projects", ["Complex Game", "Multiplayer Game", "Graphics Implementation"]);
    record64.set("certifications", ["Advanced Unity", "Game Architecture"]);
    record64.set("resources", [{"name": "Unity Documentation", "type": "Official Docs", "url": "https://docs.unity.com"}, {"name": "Game Programming Patterns", "type": "Book", "url": "https://gameprogrammingpatterns.com"}]);
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
    record65.set("careerSlug", "game-developer");
    record65.set("level", "Advanced");
    record65.set("timeline", "3+ years");
    record65.set("salary", "$110k-$160k+");
    record65.set("skills", ["Game Architecture", "Leadership", "Team Management", "Innovation", "Strategic Planning", "Executive Communication"]);
    record65.set("projects", ["AAA Game", "Team Leadership", "Strategic Planning"]);
    record65.set("certifications", ["Advanced Game Development", "Game Architecture"]);
    record65.set("resources", [{"name": "Game Architecture Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "Game Development Patterns", "type": "Blog", "url": "https://gameprogrammingpatterns.com"}]);
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
    record66.set("careerSlug", "blockchain-developer");
    record66.set("level", "Beginner");
    record66.set("timeline", "6-12 months");
    record66.set("salary", "$70k-$90k");
    record66.set("skills", ["Blockchain Fundamentals", "Solidity Basics", "Smart Contracts", "Ethereum Basics", "Web3 Basics", "Security Basics"]);
    record66.set("projects", ["Simple Smart Contract", "Token Contract", "DApp"]);
    record66.set("certifications", ["Blockchain Fundamentals", "Solidity Basics"]);
    record66.set("resources", [{"name": "Ethereum Developer Documentation", "type": "Official Docs", "url": "https://ethereum.org"}, {"name": "CryptoZombies", "type": "Interactive Tutorial", "url": "https://cryptozombies.io"}]);
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
    record67.set("careerSlug", "blockchain-developer");
    record67.set("level", "Intermediate");
    record67.set("timeline", "1-2 years");
    record67.set("salary", "$90k-$150k");
    record67.set("skills", ["Advanced Smart Contracts", "DeFi", "Security Auditing", "Testing", "Performance Optimization", "Leadership"]);
    record67.set("projects", ["DeFi Protocol", "Security Audit", "Complex Smart Contract"]);
    record67.set("certifications", ["Advanced Solidity", "DeFi Certification"]);
    record67.set("resources", [{"name": "Solidity Documentation", "type": "Official Docs", "url": "https://solidity.readthedocs.io"}, {"name": "OpenZeppelin Contracts", "type": "Library", "url": "https://openzeppelin.com"}]);
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
    record68.set("careerSlug", "blockchain-developer");
    record68.set("level", "Advanced");
    record68.set("timeline", "3+ years");
    record68.set("salary", "$150k-$220k+");
    record68.set("skills", ["Blockchain Architecture", "Leadership", "Protocol Design", "Security Strategy", "Team Management", "Innovation"]);
    record68.set("projects", ["Blockchain Protocol", "Team Leadership", "Strategic Planning"]);
    record68.set("certifications", ["Advanced Blockchain", "Blockchain Architecture"]);
    record68.set("resources", [{"name": "Blockchain Architecture Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "Ethereum Research", "type": "Blog", "url": "https://ethresear.ch"}]);
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
    record69.set("careerSlug", "ai-engineer");
    record69.set("level", "Beginner");
    record69.set("timeline", "6-12 months");
    record69.set("salary", "$80k-$100k");
    record69.set("skills", ["AI Fundamentals", "Python Basics", "Machine Learning Basics", "Deep Learning Basics", "Math Basics", "Problem Solving"]);
    record69.set("projects", ["Simple ML Model", "Classification Model", "Prediction Model"]);
    record69.set("certifications", ["AI Fundamentals", "Machine Learning Basics"]);
    record69.set("resources", [{"name": "Fast.ai", "type": "Online Course", "url": "https://fast.ai"}, {"name": "Andrew Ng Machine Learning", "type": "Online Course", "url": "https://coursera.org"}]);
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
    record70.set("careerSlug", "ai-engineer");
    record70.set("level", "Intermediate");
    record70.set("timeline", "1-2 years");
    record70.set("salary", "$100k-$160k");
    record70.set("skills", ["Advanced AI", "LLMs", "NLP", "Computer Vision", "Production Systems", "Leadership"]);
    record70.set("projects", ["LLM Application", "NLP Model", "Computer Vision System"]);
    record70.set("certifications", ["Advanced AI", "LLM Specialization"]);
    record70.set("resources", [{"name": "Hugging Face Course", "type": "Online Course", "url": "https://huggingface.co"}, {"name": "LLM Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record71.set("careerSlug", "ai-engineer");
    record71.set("level", "Advanced");
    record71.set("timeline", "3+ years");
    record71.set("salary", "$160k-$250k+");
    record71.set("skills", ["AI Strategy", "Leadership", "Research", "Innovation", "Team Management", "Executive Communication"]);
    record71.set("projects", ["AI Strategy", "Research Publication", "Team Leadership"]);
    record71.set("certifications", ["Advanced AI", "AI Research"]);
    record71.set("resources", [{"name": "AI Strategy Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "Papers with Code", "type": "Research Platform", "url": "https://paperswithcode.com"}]);
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
    record72.set("careerSlug", "data-scientist");
    record72.set("level", "Beginner");
    record72.set("timeline", "6-12 months");
    record72.set("salary", "$70k-$90k");
    record72.set("skills", ["Statistics Basics", "Python Basics", "Data Analysis", "Visualization", "SQL Basics", "Problem Solving"]);
    record72.set("projects", ["Data Analysis", "Visualization", "Simple Model"]);
    record72.set("certifications", ["Data Science Fundamentals", "Statistics Basics"]);
    record72.set("resources", [{"name": "DataCamp", "type": "Online Course", "url": "https://datacamp.com"}, {"name": "Kaggle Learn", "type": "Online Course", "url": "https://kaggle.com/learn"}]);
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
    record73.set("careerSlug", "data-scientist");
    record73.set("level", "Intermediate");
    record73.set("timeline", "1-2 years");
    record73.set("salary", "$90k-$140k");
    record73.set("skills", ["Advanced Statistics", "Machine Learning", "Feature Engineering", "Communication", "Business Acumen", "Leadership"]);
    record73.set("projects", ["Predictive Model", "Feature Engineering", "Business Analysis"]);
    record73.set("certifications", ["Machine Learning Specialization", "Advanced Statistics"]);
    record73.set("resources", [{"name": "Coursera Data Science Specialization", "type": "Online Course", "url": "https://coursera.org"}, {"name": "Towards Data Science", "type": "Blog", "url": "https://towardsdatascience.com"}]);
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
    record74.set("careerSlug", "data-scientist");
    record74.set("level", "Advanced");
    record74.set("timeline", "3+ years");
    record74.set("salary", "$140k-$200k+");
    record74.set("skills", ["Research", "Leadership", "Strategic Planning", "Innovation", "Team Management", "Executive Communication"]);
    record74.set("projects", ["Research Publication", "Team Leadership", "Strategic Planning"]);
    record74.set("certifications", ["Advanced Data Science", "Research Specialization"]);
    record74.set("resources", [{"name": "Data Science Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "Papers with Code", "type": "Research Platform", "url": "https://paperswithcode.com"}]);
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
    record75.set("careerSlug", "business-intelligence-analyst");
    record75.set("level", "Beginner");
    record75.set("timeline", "6-12 months");
    record75.set("salary", "$50k-$70k");
    record75.set("skills", ["SQL Basics", "Excel Advanced", "Data Visualization", "Tableau Basics", "Business Acumen", "Communication"]);
    record75.set("projects", ["Dashboard", "Report", "Data Analysis"]);
    record75.set("certifications", ["Tableau Fundamentals", "SQL Basics"]);
    record75.set("resources", [{"name": "Tableau Public", "type": "Practice Platform", "url": "https://public.tableau.com"}, {"name": "Mode Analytics SQL", "type": "Online Course", "url": "https://mode.com/sql-tutorial"}]);
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
    record76.set("careerSlug", "business-intelligence-analyst");
    record76.set("level", "Intermediate");
    record76.set("timeline", "1-2 years");
    record76.set("salary", "$70k-$110k");
    record76.set("skills", ["Advanced SQL", "Advanced Tableau", "Data Modeling", "Business Analysis", "Communication", "Leadership"]);
    record76.set("projects", ["Complex Dashboard", "Data Warehouse", "Business Intelligence"]);
    record76.set("certifications", ["Tableau Desktop Specialist", "Advanced SQL"]);
    record76.set("resources", [{"name": "Tableau Desktop Specialist", "type": "Certification", "url": "https://tableau.com"}, {"name": "Data Warehouse Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record77.set("careerSlug", "business-intelligence-analyst");
    record77.set("level", "Advanced");
    record77.set("timeline", "3+ years");
    record77.set("salary", "$110k-$160k+");
    record77.set("skills", ["BI Strategy", "Leadership", "Data Architecture", "Team Management", "Executive Communication", "Innovation"]);
    record77.set("projects", ["BI Strategy", "Data Architecture", "Team Leadership"]);
    record77.set("certifications", ["Advanced BI", "Data Architecture"]);
    record77.set("resources", [{"name": "BI Strategy Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "Data Architecture Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record78.set("careerSlug", "it-manager");
    record78.set("level", "Beginner");
    record78.set("timeline", "6-12 months");
    record78.set("salary", "$80k-$100k");
    record78.set("skills", ["IT Fundamentals", "Leadership Basics", "Communication", "Project Management", "Budget Management", "Problem Solving"]);
    record78.set("projects", ["Team Management", "Project Planning", "Budget Planning"]);
    record78.set("certifications", ["IT Management Basics", "Leadership Fundamentals"]);
    record78.set("resources", [{"name": "PMI Training", "type": "Official Training", "url": "https://pmi.org"}, {"name": "Leadership Fundamentals", "type": "Online Course", "url": "https://coursera.org"}]);
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
    record79.set("careerSlug", "it-manager");
    record79.set("level", "Intermediate");
    record79.set("timeline", "1-2 years");
    record79.set("salary", "$100k-$140k");
    record79.set("skills", ["Advanced IT Management", "Team Leadership", "Strategic Planning", "Budget Management", "Communication", "Problem Solving"]);
    record79.set("projects", ["IT Strategy", "Team Leadership", "Budget Management"]);
    record79.set("certifications", ["PMP", "IT Management Certification"]);
    record79.set("resources", [{"name": "PMP Certification", "type": "Certification", "url": "https://pmi.org"}, {"name": "IT Management Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record80.set("careerSlug", "it-manager");
    record80.set("level", "Advanced");
    record80.set("timeline", "3+ years");
    record80.set("salary", "$140k-$200k+");
    record80.set("skills", ["IT Strategy", "Leadership", "Organizational Impact", "Executive Communication", "Innovation", "Strategic Planning"]);
    record80.set("projects", ["IT Strategy", "Organizational Transformation", "Team Leadership"]);
    record80.set("certifications", ["Advanced IT Management", "Strategic Leadership"]);
    record80.set("resources", [{"name": "IT Strategy Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "Organizational Leadership", "type": "Course", "url": "https://coursera.org"}]);
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
    record81.set("careerSlug", "it-director");
    record81.set("level", "Beginner");
    record81.set("timeline", "6-12 months");
    record81.set("salary", "$110k-$140k");
    record81.set("skills", ["IT Strategy", "Leadership", "Communication", "Budget Management", "Strategic Planning", "Problem Solving"]);
    record81.set("projects", ["IT Strategy", "Team Leadership", "Budget Planning"]);
    record81.set("certifications", ["IT Director Certification", "Strategic Leadership"]);
    record81.set("resources", [{"name": "Executive Leadership Program", "type": "Online Course", "url": "https://coursera.org"}, {"name": "IT Strategy Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record82.set("careerSlug", "it-director");
    record82.set("level", "Intermediate");
    record82.set("timeline", "1-2 years");
    record82.set("salary", "$140k-$180k");
    record82.set("skills", ["Advanced IT Strategy", "Executive Leadership", "Organizational Impact", "Innovation", "Executive Communication", "Strategic Planning"]);
    record82.set("projects", ["Digital Transformation", "Organizational Strategy", "Team Leadership"]);
    record82.set("certifications", ["Executive Leadership", "Strategic IT Management"]);
    record82.set("resources", [{"name": "Executive Leadership Program", "type": "Online Course", "url": "https://coursera.org"}, {"name": "Digital Transformation Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record83.set("careerSlug", "it-director");
    record83.set("level", "Advanced");
    record83.set("timeline", "3+ years");
    record83.set("salary", "$180k-$260k+");
    record83.set("skills", ["Enterprise Strategy", "Executive Leadership", "Vision", "Innovation", "Team Management", "Executive Communication"]);
    record83.set("projects", ["Enterprise Strategy", "Digital Transformation", "Team Leadership"]);
    record83.set("certifications", ["Advanced Executive Leadership", "Enterprise Strategy"]);
    record83.set("resources", [{"name": "Enterprise Strategy Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "Executive Leadership", "type": "Course", "url": "https://coursera.org"}]);
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
    record84.set("careerSlug", "chief-technology-officer");
    record84.set("level", "Beginner");
    record84.set("timeline", "6-12 months");
    record84.set("salary", "$150k-$180k");
    record84.set("skills", ["Technology Strategy", "Leadership", "Communication", "Vision", "Innovation", "Strategic Planning"]);
    record84.set("projects", ["Technology Strategy", "Team Leadership", "Innovation Planning"]);
    record84.set("certifications", ["Executive Leadership", "Technology Strategy"]);
    record84.set("resources", [{"name": "Executive Leadership Program", "type": "Online Course", "url": "https://coursera.org"}, {"name": "Technology Strategy Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record85.set("careerSlug", "chief-technology-officer");
    record85.set("level", "Intermediate");
    record85.set("timeline", "1-2 years");
    record85.set("salary", "$180k-$240k");
    record85.set("skills", ["Advanced Technology Strategy", "Executive Leadership", "Innovation", "Organizational Impact", "Executive Communication", "Vision"]);
    record85.set("projects", ["Digital Transformation", "Technology Vision", "Team Leadership"]);
    record85.set("certifications", ["Advanced Executive Leadership", "Technology Strategy"]);
    record85.set("resources", [{"name": "Digital Transformation Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "Technology Strategy", "type": "Course", "url": "https://coursera.org"}]);
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
    record86.set("careerSlug", "chief-technology-officer");
    record86.set("level", "Advanced");
    record86.set("timeline", "3+ years");
    record86.set("salary", "$240k-$350k+");
    record86.set("skills", ["Enterprise Vision", "Executive Leadership", "Innovation", "Strategic Planning", "Team Management", "Executive Communication"]);
    record86.set("projects", ["Enterprise Vision", "Digital Transformation", "Team Leadership"]);
    record86.set("certifications", ["Advanced Executive Leadership", "Enterprise Strategy"]);
    record86.set("resources", [{"name": "Enterprise Strategy Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "Executive Leadership", "type": "Course", "url": "https://coursera.org"}]);
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
    record87.set("careerSlug", "consultant");
    record87.set("level", "Beginner");
    record87.set("timeline", "6-12 months");
    record87.set("salary", "$70k-$90k");
    record87.set("skills", ["Domain Expertise", "Communication", "Problem Solving", "Business Acumen", "Presentation", "Analysis"]);
    record87.set("projects", ["Consulting Project", "Business Analysis", "Recommendation Report"]);
    record87.set("certifications", ["Consulting Fundamentals", "Business Analysis"]);
    record87.set("resources", [{"name": "Consulting Fundamentals", "type": "Online Course", "url": "https://coursera.org"}, {"name": "Business Analysis Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record88.set("careerSlug", "consultant");
    record88.set("level", "Intermediate");
    record88.set("timeline", "1-2 years");
    record88.set("salary", "$90k-$150k");
    record88.set("skills", ["Advanced Consulting", "Leadership", "Strategic Thinking", "Communication", "Problem Solving", "Business Strategy"]);
    record88.set("projects", ["Strategic Consulting", "Business Transformation", "Team Leadership"]);
    record88.set("certifications", ["Advanced Consulting", "Strategic Business Analysis"]);
    record88.set("resources", [{"name": "Consulting Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "Strategic Consulting", "type": "Course", "url": "https://coursera.org"}]);
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
    record89.set("careerSlug", "consultant");
    record89.set("level", "Advanced");
    record89.set("timeline", "3+ years");
    record89.set("salary", "$150k-$250k+");
    record89.set("skills", ["Strategic Consulting", "Leadership", "Vision", "Innovation", "Executive Communication", "Organizational Impact"]);
    record89.set("projects", ["Strategic Transformation", "Executive Consulting", "Team Leadership"]);
    record89.set("certifications", ["Advanced Consulting", "Strategic Leadership"]);
    record89.set("resources", [{"name": "Strategic Consulting Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "Executive Consulting", "type": "Course", "url": "https://coursera.org"}]);
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
    record90.set("careerSlug", "cybersecurity-analyst");
    record90.set("level", "Beginner");
    record90.set("timeline", "6-12 months");
    record90.set("salary", "$60k-$80k");
    record90.set("skills", ["Security Fundamentals", "Networking Basics", "Threat Analysis", "Monitoring Basics", "Communication", "Problem Solving"]);
    record90.set("projects", ["Security Audit", "Threat Report", "Security Policy"]);
    record90.set("certifications", ["Security+", "CompTIA A+"]);
    record90.set("resources", [{"name": "Professor Messer Security+", "type": "Video Course", "url": "https://professormesser.com"}, {"name": "OWASP Top 10", "type": "Guide", "url": "https://owasp.org"}]);
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
    record91.set("careerSlug", "cybersecurity-analyst");
    record91.set("level", "Intermediate");
    record91.set("timeline", "1-2 years");
    record91.set("salary", "$80k-$130k");
    record91.set("skills", ["Advanced Security", "Incident Response", "Threat Intelligence", "SIEM Tools", "Leadership", "Communication"]);
    record91.set("projects", ["Incident Response", "Threat Intelligence", "Security Architecture"]);
    record91.set("certifications", ["CEH", "CISSP"]);
    record91.set("resources", [{"name": "Certified Ethical Hacker", "type": "Certification", "url": "https://www.eccouncil.org"}, {"name": "SANS Security Training", "type": "Online Course", "url": "https://www.sans.org"}]);
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
    record92.set("careerSlug", "cybersecurity-analyst");
    record92.set("level", "Advanced");
    record92.set("timeline", "3+ years");
    record92.set("salary", "$130k-$190k+");
    record92.set("skills", ["Enterprise Security", "Security Strategy", "Leadership", "Threat Intelligence", "Executive Communication", "Innovation"]);
    record92.set("projects", ["Security Strategy", "Threat Intelligence Program", "Team Leadership"]);
    record92.set("certifications", ["CISSP", "CCSK"]);
    record92.set("resources", [{"name": "CISSP Study Guide", "type": "Book", "url": "https://oreilly.com"}, {"name": "Security Architecture Patterns", "type": "Book", "url": "https://oreilly.com"}]);
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
    record93.set("careerSlug", "cloud-engineer");
    record93.set("level", "Beginner");
    record93.set("timeline", "6-12 months");
    record93.set("salary", "$70k-$90k");
    record93.set("skills", ["Cloud Fundamentals", "AWS Basics", "Networking Basics", "Security Basics", "Cost Management", "Compliance Basics"]);
    record93.set("projects", ["Simple Cloud Setup", "VPC Configuration", "Cost Analysis"]);
    record93.set("certifications", ["AWS Cloud Practitioner", "Azure Fundamentals"]);
    record93.set("resources", [{"name": "AWS Training and Certification", "type": "Official Training", "url": "https://aws.amazon.com/training"}, {"name": "Cloud Academy", "type": "Online Course", "url": "https://cloudacademy.com"}]);
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
    record94.set("careerSlug", "cloud-engineer");
    record94.set("level", "Intermediate");
    record94.set("timeline", "1-2 years");
    record94.set("salary", "$90k-$140k");
    record94.set("skills", ["Advanced AWS", "Infrastructure as Code", "Security Architecture", "Cost Optimization", "Disaster Recovery", "Compliance"]);
    record94.set("projects", ["Multi-Tier Architecture", "Disaster Recovery Plan", "Security Architecture"]);
    record94.set("certifications", ["AWS Solutions Architect Associate", "Azure Administrator"]);
    record94.set("resources", [{"name": "AWS Solutions Architect Professional", "type": "Certification", "url": "https://aws.amazon.com/certification"}, {"name": "Terraform Registry", "type": "Official Docs", "url": "https://registry.terraform.io"}]);
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
    record95.set("careerSlug", "cloud-engineer");
    record95.set("level", "Advanced");
    record95.set("timeline", "3+ years");
    record95.set("salary", "$140k-$200k+");
    record95.set("skills", ["Enterprise Cloud", "Multi-Cloud Strategy", "Advanced Security", "Cost Optimization", "Leadership", "Strategic Planning"]);
    record95.set("projects", ["Enterprise Cloud Architecture", "Multi-Cloud Strategy", "Team Leadership"]);
    record95.set("certifications", ["AWS Solutions Architect Professional", "Azure Solutions Architect Expert"]);
    record95.set("resources", [{"name": "AWS Well-Architected Framework", "type": "Official Guide", "url": "https://aws.amazon.com/architecture/well-architected"}, {"name": "Cloud Architecture Patterns", "type": "Book", "url": "https://oreilly.com"}]);
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
    record96.set("careerSlug", "api-developer");
    record96.set("level", "Beginner");
    record96.set("timeline", "6-12 months");
    record96.set("salary", "$55k-$75k");
    record96.set("skills", ["REST Fundamentals", "HTTP Basics", "JSON", "API Design", "Testing", "Documentation"]);
    record96.set("projects", ["Simple REST API", "API Documentation", "API Testing"]);
    record96.set("certifications", ["REST API Basics", "API Design Fundamentals"]);
    record96.set("resources", [{"name": "REST API Best Practices", "type": "Guide", "url": "https://restfulapi.net"}, {"name": "Postman Learning Center", "type": "Online Course", "url": "https://learning.postman.com"}]);
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
    record97.set("careerSlug", "api-developer");
    record97.set("level", "Intermediate");
    record97.set("timeline", "1-2 years");
    record97.set("salary", "$75k-$120k");
    record97.set("skills", ["Advanced API Design", "GraphQL", "API Security", "Performance Optimization", "Testing", "Leadership"]);
    record97.set("projects", ["GraphQL API", "API Security", "Performance Optimization"]);
    record97.set("certifications", ["Advanced API Design", "GraphQL Certification"]);
    record97.set("resources", [{"name": "GraphQL Official Tutorial", "type": "Official Docs", "url": "https://graphql.org"}, {"name": "API Design Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record98.set("careerSlug", "api-developer");
    record98.set("level", "Advanced");
    record98.set("timeline", "3+ years");
    record98.set("salary", "$120k-$180k+");
    record98.set("skills", ["API Architecture", "Leadership", "API Strategy", "Performance Optimization", "Security Strategy", "Team Management"]);
    record98.set("projects", ["API Platform", "API Strategy", "Team Leadership"]);
    record98.set("certifications", ["Advanced API Design", "API Architecture"]);
    record98.set("resources", [{"name": "API Architecture Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "API Design Patterns", "type": "Blog", "url": "https://martinfowler.com"}]);
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
    record99.set("careerSlug", "embedded-systems-engineer");
    record99.set("level", "Beginner");
    record99.set("timeline", "6-12 months");
    record99.set("salary", "$60k-$80k");
    record99.set("skills", ["C/C++ Basics", "Microcontroller Basics", "Digital Logic", "Debugging", "Testing", "Documentation"]);
    record99.set("projects", ["Arduino Project", "Microcontroller Program", "Embedded System"]);
    record99.set("certifications", ["Embedded Systems Basics", "C Programming"]);
    record99.set("resources", [{"name": "Arduino Official Tutorial", "type": "Official Docs", "url": "https://arduino.cc"}, {"name": "Embedded Systems Fundamentals", "type": "Online Course", "url": "https://udacity.com"}]);
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
    record100.set("careerSlug", "embedded-systems-engineer");
    record100.set("level", "Intermediate");
    record100.set("timeline", "1-2 years");
    record100.set("salary", "$80k-$130k");
    record100.set("skills", ["Advanced C/C++", "Real-time Systems", "Hardware Integration", "Performance Optimization", "Testing", "Leadership"]);
    record100.set("projects", ["Real-time System", "Hardware Integration", "Performance Optimization"]);
    record100.set("certifications", ["Advanced Embedded Systems", "Real-time Systems"]);
    record100.set("resources", [{"name": "Real-time Systems Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "Embedded Systems Design", "type": "Online Course", "url": "https://coursera.org"}]);
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
    record101.set("careerSlug", "embedded-systems-engineer");
    record101.set("level", "Advanced");
    record101.set("timeline", "3+ years");
    record101.set("salary", "$130k-$180k+");
    record101.set("skills", ["Embedded Architecture", "Leadership", "System Design", "Performance Optimization", "Security", "Team Management"]);
    record101.set("projects", ["Embedded System Architecture", "Team Leadership", "Strategic Planning"]);
    record101.set("certifications", ["Advanced Embedded Systems", "Embedded Architecture"]);
    record101.set("resources", [{"name": "Embedded Systems Architecture", "type": "Book", "url": "https://oreilly.com"}, {"name": "Embedded Design Patterns", "type": "Blog", "url": "https://martinfowler.com"}]);
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
    record102.set("careerSlug", "devsecops-engineer");
    record102.set("level", "Beginner");
    record102.set("timeline", "6-12 months");
    record102.set("salary", "$75k-$95k");
    record102.set("skills", ["DevOps Basics", "Security Basics", "CI/CD Basics", "Container Basics", "Scripting", "Communication"]);
    record102.set("projects", ["CI/CD Pipeline", "Container Security", "Security Scanning"]);
    record102.set("certifications", ["DevOps Fundamentals", "Security Basics"]);
    record102.set("resources", [{"name": "DevOps Fundamentals", "type": "Online Course", "url": "https://coursera.org"}, {"name": "Container Security", "type": "Guide", "url": "https://owasp.org"}]);
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
    record103.set("careerSlug", "devsecops-engineer");
    record103.set("level", "Intermediate");
    record103.set("timeline", "1-2 years");
    record103.set("salary", "$95k-$150k");
    record103.set("skills", ["Advanced DevOps", "Advanced Security", "Infrastructure as Code", "Container Security", "Compliance", "Leadership"]);
    record103.set("projects", ["Secure CI/CD", "Container Security", "Compliance Automation"]);
    record103.set("certifications", ["AWS DevOps Engineer", "Security+ Advanced"]);
    record103.set("resources", [{"name": "AWS DevOps Engineer Professional", "type": "Certification", "url": "https://aws.amazon.com/certification"}, {"name": "DevSecOps Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record104.set("careerSlug", "devsecops-engineer");
    record104.set("level", "Advanced");
    record104.set("timeline", "3+ years");
    record104.set("salary", "$150k-$220k+");
    record104.set("skills", ["DevSecOps Strategy", "Leadership", "Security Architecture", "Compliance Strategy", "Team Management", "Innovation"]);
    record104.set("projects", ["DevSecOps Strategy", "Security Architecture", "Team Leadership"]);
    record104.set("certifications", ["Advanced DevSecOps", "Security Architecture"]);
    record104.set("resources", [{"name": "DevSecOps Strategy Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "Security Architecture Patterns", "type": "Book", "url": "https://oreilly.com"}]);
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
    record105.set("careerSlug", "site-reliability-engineer");
    record105.set("level", "Beginner");
    record105.set("timeline", "6-12 months");
    record105.set("salary", "$80k-$100k");
    record105.set("skills", ["Systems Administration", "Monitoring Basics", "Incident Response Basics", "Scripting", "Communication", "Problem Solving"]);
    record105.set("projects", ["Monitoring Setup", "Incident Response Plan", "Performance Analysis"]);
    record105.set("certifications", ["SRE Fundamentals", "Monitoring Basics"]);
    record105.set("resources", [{"name": "Google SRE Book", "type": "Free Book", "url": "https://sre.google"}, {"name": "Prometheus Documentation", "type": "Official Docs", "url": "https://prometheus.io"}]);
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
    record106.set("careerSlug", "site-reliability-engineer");
    record106.set("level", "Intermediate");
    record106.set("timeline", "1-2 years");
    record106.set("salary", "$100k-$160k");
    record106.set("skills", ["Advanced Monitoring", "Advanced Incident Response", "Performance Optimization", "Automation", "Leadership", "Communication"]);
    record106.set("projects", ["Monitoring System", "Incident Response", "Performance Optimization"]);
    record106.set("certifications", ["Advanced SRE", "Monitoring Certification"]);
    record106.set("resources", [{"name": "Google SRE Workbook", "type": "Free Book", "url": "https://sre.google"}, {"name": "SRE Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record107.set("careerSlug", "site-reliability-engineer");
    record107.set("level", "Advanced");
    record107.set("timeline", "3+ years");
    record107.set("salary", "$160k-$230k+");
    record107.set("skills", ["SRE Strategy", "Leadership", "System Design", "Performance Optimization", "Team Management", "Innovation"]);
    record107.set("projects", ["SRE Strategy", "System Architecture", "Team Leadership"]);
    record107.set("certifications", ["Advanced SRE", "SRE Architecture"]);
    record107.set("resources", [{"name": "SRE Strategy Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "Reliability Engineering", "type": "Blog", "url": "https://sre.google"}]);
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
    record108.set("careerSlug", "platform-engineer");
    record108.set("level", "Beginner");
    record108.set("timeline", "6-12 months");
    record108.set("salary", "$80k-$100k");
    record108.set("skills", ["Kubernetes Basics", "DevOps Basics", "Platform Concepts", "Scripting", "Communication", "Problem Solving"]);
    record108.set("projects", ["Kubernetes Setup", "Platform Component", "Developer Tool"]);
    record108.set("certifications", ["Kubernetes Fundamentals", "Platform Engineering Basics"]);
    record108.set("resources", [{"name": "Kubernetes Official Tutorial", "type": "Official Docs", "url": "https://kubernetes.io"}, {"name": "Platform Engineering Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record109.set("careerSlug", "platform-engineer");
    record109.set("level", "Intermediate");
    record109.set("timeline", "1-2 years");
    record109.set("salary", "$100k-$160k");
    record109.set("skills", ["Advanced Kubernetes", "Platform Design", "Developer Experience", "Infrastructure as Code", "Leadership", "Communication"]);
    record109.set("projects", ["Internal Platform", "Developer Experience", "Platform Automation"]);
    record109.set("certifications", ["Advanced Kubernetes", "Platform Engineering"]);
    record109.set("resources", [{"name": "Kubernetes Advanced", "type": "Certification", "url": "https://kubernetes.io"}, {"name": "Platform Engineering Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record110.set("careerSlug", "platform-engineer");
    record110.set("level", "Advanced");
    record110.set("timeline", "3+ years");
    record110.set("salary", "$160k-$230k+");
    record110.set("skills", ["Platform Strategy", "Leadership", "Developer Experience Strategy", "Team Management", "Innovation", "Executive Communication"]);
    record110.set("projects", ["Platform Strategy", "Developer Experience", "Team Leadership"]);
    record110.set("certifications", ["Advanced Platform Engineering", "Platform Architecture"]);
    record110.set("resources", [{"name": "Platform Engineering Strategy", "type": "Book", "url": "https://oreilly.com"}, {"name": "Developer Experience", "type": "Blog", "url": "https://martinfowler.com"}]);
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
    record111.set("careerSlug", "graphics-programmer");
    record111.set("level", "Beginner");
    record111.set("timeline", "6-12 months");
    record111.set("salary", "$70k-$90k");
    record111.set("skills", ["Graphics Fundamentals", "Linear Algebra", "OpenGL Basics", "C++ Basics", "Debugging", "Problem Solving"]);
    record111.set("projects", ["Simple Graphics Program", "Shader Program", "3D Rendering"]);
    record111.set("certifications", ["Graphics Programming Basics", "OpenGL Basics"]);
    record111.set("resources", [{"name": "Learn OpenGL", "type": "Online Tutorial", "url": "https://learnopengl.com"}, {"name": "Graphics Programming Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record112.set("careerSlug", "graphics-programmer");
    record112.set("level", "Intermediate");
    record112.set("timeline", "1-2 years");
    record112.set("salary", "$90k-$140k");
    record112.set("skills", ["Advanced Graphics", "Shader Programming", "Performance Optimization", "3D Graphics", "Leadership", "Communication"]);
    record112.set("projects", ["Graphics Engine", "Advanced Shaders", "Performance Optimization"]);
    record112.set("certifications", ["Advanced Graphics", "Shader Programming"]);
    record112.set("resources", [{"name": "Real-Time Rendering", "type": "Book", "url": "https://oreilly.com"}, {"name": "Graphics Programming Patterns", "type": "Blog", "url": "https://martinfowler.com"}]);
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
    record113.set("careerSlug", "graphics-programmer");
    record113.set("level", "Advanced");
    record113.set("timeline", "3+ years");
    record113.set("salary", "$140k-$200k+");
    record113.set("skills", ["Graphics Architecture", "Leadership", "Performance Optimization", "Research", "Team Management", "Innovation"]);
    record113.set("projects", ["Graphics System", "Research Publication", "Team Leadership"]);
    record113.set("certifications", ["Advanced Graphics", "Graphics Architecture"]);
    record113.set("resources", [{"name": "Graphics Architecture Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "Graphics Research", "type": "Blog", "url": "https://martinfowler.com"}]);
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
    record114.set("careerSlug", "augmented-reality-developer");
    record114.set("level", "Beginner");
    record114.set("timeline", "6-12 months");
    record114.set("salary", "$70k-$90k");
    record114.set("skills", ["AR Fundamentals", "ARKit/ARCore Basics", "3D Graphics Basics", "Mobile Development", "Problem Solving", "Creativity"]);
    record114.set("projects", ["Simple AR App", "AR Experience", "3D Model"]);
    record114.set("certifications", ["AR Development Basics", "Mobile Development"]);
    record114.set("resources", [{"name": "Apple ARKit Documentation", "type": "Official Docs", "url": "https://developer.apple.com"}, {"name": "Google ARCore Documentation", "type": "Official Docs", "url": "https://developers.google.com/ar"}]);
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
    record115.set("careerSlug", "augmented-reality-developer");
    record115.set("level", "Intermediate");
    record115.set("timeline", "1-2 years");
    record115.set("salary", "$90k-$140k");
    record115.set("skills", ["Advanced AR", "3D Graphics", "Computer Vision", "Performance Optimization", "Leadership", "Communication"]);
    record115.set("projects", ["Complex AR App", "AR Experience", "3D Graphics"]);
    record115.set("certifications", ["Advanced AR Development", "3D Graphics"]);
    record115.set("resources", [{"name": "ARKit Advanced", "type": "Official Docs", "url": "https://developer.apple.com"}, {"name": "AR Development Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record116.set("careerSlug", "augmented-reality-developer");
    record116.set("level", "Advanced");
    record116.set("timeline", "3+ years");
    record116.set("salary", "$140k-$200k+");
    record116.set("skills", ["AR Architecture", "Leadership", "3D Graphics Strategy", "Team Management", "Innovation", "Executive Communication"]);
    record116.set("projects", ["AR Platform", "Team Leadership", "Strategic Planning"]);
    record116.set("certifications", ["Advanced AR Development", "AR Architecture"]);
    record116.set("resources", [{"name": "AR Architecture Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "AR Development Patterns", "type": "Blog", "url": "https://martinfowler.com"}]);
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
    record117.set("careerSlug", "virtual-reality-developer");
    record117.set("level", "Beginner");
    record117.set("timeline", "6-12 months");
    record117.set("salary", "$70k-$90k");
    record117.set("skills", ["VR Fundamentals", "Unity Basics", "3D Graphics Basics", "C# Basics", "Problem Solving", "Creativity"]);
    record117.set("projects", ["Simple VR App", "VR Experience", "3D Environment"]);
    record117.set("certifications", ["VR Development Basics", "Unity Basics"]);
    record117.set("resources", [{"name": "Unity VR Documentation", "type": "Official Docs", "url": "https://docs.unity.com"}, {"name": "VR Development Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record118.set("careerSlug", "virtual-reality-developer");
    record118.set("level", "Intermediate");
    record118.set("timeline", "1-2 years");
    record118.set("salary", "$90k-$140k");
    record118.set("skills", ["Advanced VR", "3D Graphics", "Physics Engine", "Performance Optimization", "Leadership", "Communication"]);
    record118.set("projects", ["Complex VR App", "VR Experience", "3D Graphics"]);
    record118.set("certifications", ["Advanced VR Development", "3D Graphics"]);
    record118.set("resources", [{"name": "Unity VR Advanced", "type": "Official Docs", "url": "https://docs.unity.com"}, {"name": "VR Development Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record119.set("careerSlug", "virtual-reality-developer");
    record119.set("level", "Advanced");
    record119.set("timeline", "3+ years");
    record119.set("salary", "$140k-$200k+");
    record119.set("skills", ["VR Architecture", "Leadership", "3D Graphics Strategy", "Team Management", "Innovation", "Executive Communication"]);
    record119.set("projects", ["VR Platform", "Team Leadership", "Strategic Planning"]);
    record119.set("certifications", ["Advanced VR Development", "VR Architecture"]);
    record119.set("resources", [{"name": "VR Architecture Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "VR Development Patterns", "type": "Blog", "url": "https://martinfowler.com"}]);
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
    record120.set("careerSlug", "iot-developer");
    record120.set("level", "Beginner");
    record120.set("timeline", "6-12 months");
    record120.set("salary", "$65k-$85k");
    record120.set("skills", ["IoT Fundamentals", "Embedded Systems Basics", "Sensors", "Networking Basics", "Python Basics", "Problem Solving"]);
    record120.set("projects", ["Simple IoT Device", "Sensor Integration", "IoT Application"]);
    record120.set("certifications", ["IoT Fundamentals", "Embedded Systems Basics"]);
    record120.set("resources", [{"name": "Arduino Official Tutorial", "type": "Official Docs", "url": "https://arduino.cc"}, {"name": "IoT Development Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record121.set("careerSlug", "iot-developer");
    record121.set("level", "Intermediate");
    record121.set("timeline", "1-2 years");
    record121.set("salary", "$85k-$140k");
    record121.set("skills", ["Advanced IoT", "Cloud Integration", "MQTT", "Performance Optimization", "Leadership", "Communication"]);
    record121.set("projects", ["IoT System", "Cloud Integration", "IoT Platform"]);
    record121.set("certifications", ["Advanced IoT Development", "Cloud Integration"]);
    record121.set("resources", [{"name": "AWS IoT Documentation", "type": "Official Docs", "url": "https://aws.amazon.com/iot"}, {"name": "IoT Development Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record122.set("careerSlug", "iot-developer");
    record122.set("level", "Advanced");
    record122.set("timeline", "3+ years");
    record122.set("salary", "$140k-$200k+");
    record122.set("skills", ["IoT Architecture", "Leadership", "Cloud Strategy", "Team Management", "Innovation", "Executive Communication"]);
    record122.set("projects", ["IoT Platform", "Team Leadership", "Strategic Planning"]);
    record122.set("certifications", ["Advanced IoT Development", "IoT Architecture"]);
    record122.set("resources", [{"name": "IoT Architecture Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "IoT Development Patterns", "type": "Blog", "url": "https://martinfowler.com"}]);
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
    record123.set("careerSlug", "quantum-developer");
    record123.set("level", "Beginner");
    record123.set("timeline", "6-12 months");
    record123.set("salary", "$90k-$110k");
    record123.set("skills", ["Quantum Fundamentals", "Linear Algebra", "Python Basics", "Quantum Algorithms Basics", "Problem Solving", "Research"]);
    record123.set("projects", ["Simple Quantum Program", "Quantum Algorithm", "Quantum Simulation"]);
    record123.set("certifications", ["Quantum Computing Basics", "Quantum Programming"]);
    record123.set("resources", [{"name": "IBM Quantum Learning", "type": "Official Training", "url": "https://quantum.ibm.com"}, {"name": "Quantum Computing Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record124.set("careerSlug", "quantum-developer");
    record124.set("level", "Intermediate");
    record124.set("timeline", "1-2 years");
    record124.set("salary", "$110k-$170k");
    record124.set("skills", ["Advanced Quantum", "Quantum Algorithms", "Quantum Hardware", "Performance Optimization", "Leadership", "Research"]);
    record124.set("projects", ["Quantum Algorithm", "Quantum Application", "Quantum Research"]);
    record124.set("certifications", ["Advanced Quantum Computing", "Quantum Algorithms"]);
    record124.set("resources", [{"name": "IBM Quantum Advanced", "type": "Official Training", "url": "https://quantum.ibm.com"}, {"name": "Quantum Algorithms Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record125.set("careerSlug", "quantum-developer");
    record125.set("level", "Advanced");
    record125.set("timeline", "3+ years");
    record125.set("salary", "$170k-$280k+");
    record125.set("skills", ["Quantum Architecture", "Leadership", "Research", "Team Management", "Innovation", "Executive Communication"]);
    record125.set("projects", ["Quantum Platform", "Research Publication", "Team Leadership"]);
    record125.set("certifications", ["Advanced Quantum Computing", "Quantum Architecture"]);
    record125.set("resources", [{"name": "Quantum Architecture Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "Quantum Research", "type": "Blog", "url": "https://arxiv.org"}]);
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
    record126.set("careerSlug", "penetration-tester");
    record126.set("level", "Beginner");
    record126.set("timeline", "6-12 months");
    record126.set("salary", "$70k-$90k");
    record126.set("skills", ["Networking Basics", "Security Fundamentals", "Penetration Testing Basics", "Scripting", "Problem Solving", "Communication"]);
    record126.set("projects", ["Security Assessment", "Vulnerability Report", "Penetration Test"]);
    record126.set("certifications", ["Security+", "CEH Basics"]);
    record126.set("resources", [{"name": "Professor Messer Security+", "type": "Video Course", "url": "https://professormesser.com"}, {"name": "Penetration Testing Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record127.set("careerSlug", "penetration-tester");
    record127.set("level", "Intermediate");
    record127.set("timeline", "1-2 years");
    record127.set("salary", "$90k-$150k");
    record127.set("skills", ["Advanced Penetration Testing", "Vulnerability Assessment", "Exploit Development", "Security Tools", "Leadership", "Communication"]);
    record127.set("projects", ["Penetration Test", "Exploit Development", "Security Assessment"]);
    record127.set("certifications", ["CEH", "OSCP"]);
    record127.set("resources", [{"name": "Certified Ethical Hacker", "type": "Certification", "url": "https://www.eccouncil.org"}, {"name": "OSCP Certification", "type": "Certification", "url": "https://www.offensive-security.com"}]);
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
    record128.set("careerSlug", "penetration-tester");
    record128.set("level", "Advanced");
    record128.set("timeline", "3+ years");
    record128.set("salary", "$150k-$220k+");
    record128.set("skills", ["Advanced Penetration Testing", "Leadership", "Security Strategy", "Team Management", "Innovation", "Executive Communication"]);
    record128.set("projects", ["Security Strategy", "Team Leadership", "Strategic Planning"]);
    record128.set("certifications", ["GPEN", "GWAPT"]);
    record128.set("resources", [{"name": "GPEN Certification", "type": "Certification", "url": "https://www.giac.org"}, {"name": "Penetration Testing Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record129.set("careerSlug", "compliance-engineer");
    record129.set("level", "Beginner");
    record129.set("timeline", "6-12 months");
    record129.set("salary", "$65k-$85k");
    record129.set("skills", ["Compliance Fundamentals", "Regulations Basics", "Documentation", "Communication", "Problem Solving", "Attention to Detail"]);
    record129.set("projects", ["Compliance Audit", "Compliance Report", "Compliance Policy"]);
    record129.set("certifications", ["Compliance Fundamentals", "Regulatory Basics"]);
    record129.set("resources", [{"name": "Compliance Training", "type": "Online Course", "url": "https://coursera.org"}, {"name": "Compliance Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record130.set("careerSlug", "compliance-engineer");
    record130.set("level", "Intermediate");
    record130.set("timeline", "1-2 years");
    record130.set("salary", "$85k-$130k");
    record130.set("skills", ["Advanced Compliance", "Audit Processes", "Risk Assessment", "Leadership", "Communication", "Problem Solving"]);
    record130.set("projects", ["Compliance Program", "Audit Management", "Risk Assessment"]);
    record130.set("certifications", ["CISSP", "CISM"]);
    record130.set("resources", [{"name": "CISSP Certification", "type": "Certification", "url": "https://www.isc2.org"}, {"name": "Compliance Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record131.set("careerSlug", "compliance-engineer");
    record131.set("level", "Advanced");
    record131.set("timeline", "3+ years");
    record131.set("salary", "$130k-$190k+");
    record131.set("skills", ["Compliance Strategy", "Leadership", "Regulatory Strategy", "Team Management", "Innovation", "Executive Communication"]);
    record131.set("projects", ["Compliance Strategy", "Team Leadership", "Strategic Planning"]);
    record131.set("certifications", ["CCSK", "Advanced Compliance"]);
    record131.set("resources", [{"name": "Compliance Strategy Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "Regulatory Strategy", "type": "Course", "url": "https://coursera.org"}]);
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
    record132.set("careerSlug", "release-manager");
    record132.set("level", "Beginner");
    record132.set("timeline", "6-12 months");
    record132.set("salary", "$65k-$85k");
    record132.set("skills", ["Release Management Basics", "Project Management Basics", "Communication", "Documentation", "Problem Solving", "Planning"]);
    record132.set("projects", ["Release Plan", "Release Notes", "Deployment Plan"]);
    record132.set("certifications", ["Release Management Basics", "Project Management Basics"]);
    record132.set("resources", [{"name": "Release Management Training", "type": "Online Course", "url": "https://coursera.org"}, {"name": "Release Management Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record133.set("careerSlug", "release-manager");
    record133.set("level", "Intermediate");
    record133.set("timeline", "1-2 years");
    record133.set("salary", "$85k-$130k");
    record133.set("skills", ["Advanced Release Management", "CI/CD", "Stakeholder Management", "Leadership", "Communication", "Problem Solving"]);
    record133.set("projects", ["Release Strategy", "CI/CD Pipeline", "Stakeholder Management"]);
    record133.set("certifications", ["Advanced Release Management", "CI/CD Certification"]);
    record133.set("resources", [{"name": "Release Management Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "CI/CD Best Practices", "type": "Guide", "url": "https://martinfowler.com"}]);
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
    record134.set("careerSlug", "release-manager");
    record134.set("level", "Advanced");
    record134.set("timeline", "3+ years");
    record134.set("salary", "$130k-$180k+");
    record134.set("skills", ["Release Strategy", "Leadership", "Organizational Impact", "Team Management", "Innovation", "Executive Communication"]);
    record134.set("projects", ["Release Strategy", "Team Leadership", "Strategic Planning"]);
    record134.set("certifications", ["Advanced Release Management", "Strategic Release Management"]);
    record134.set("resources", [{"name": "Release Strategy Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "Organizational Release Management", "type": "Course", "url": "https://coursera.org"}]);
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
    record135.set("careerSlug", "technical-architect");
    record135.set("level", "Beginner");
    record135.set("timeline", "6-12 months");
    record135.set("salary", "$90k-$110k");
    record135.set("skills", ["Architecture Fundamentals", "System Design Basics", "Communication", "Problem Solving", "Technical Knowledge", "Documentation"]);
    record135.set("projects", ["Architecture Diagram", "System Design", "Technical Proposal"]);
    record135.set("certifications", ["Architecture Fundamentals", "System Design Basics"]);
    record135.set("resources", [{"name": "System Design Primer", "type": "Learning Resource", "url": "https://github.com/donnemartin/system-design-primer"}, {"name": "Architecture Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record136.set("careerSlug", "technical-architect");
    record136.set("level", "Intermediate");
    record136.set("timeline", "1-2 years");
    record136.set("salary", "$110k-$160k");
    record136.set("skills", ["Advanced Architecture", "System Design", "Leadership", "Communication", "Problem Solving", "Strategic Thinking"]);
    record136.set("projects", ["System Architecture", "Technical Leadership", "Strategic Planning"]);
    record136.set("certifications", ["Advanced Architecture", "System Design"]);
    record136.set("resources", [{"name": "Designing Data-Intensive Applications", "type": "Book", "url": "https://dataintensive.net"}, {"name": "Architecture Patterns", "type": "Blog", "url": "https://martinfowler.com"}]);
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
    record137.set("careerSlug", "technical-architect");
    record137.set("level", "Advanced");
    record137.set("timeline", "3+ years");
    record137.set("salary", "$160k-$240k+");
    record137.set("skills", ["Enterprise Architecture", "Leadership", "Strategic Planning", "Team Management", "Innovation", "Executive Communication"]);
    record137.set("projects", ["Enterprise Architecture", "Team Leadership", "Strategic Planning"]);
    record137.set("certifications", ["Advanced Architecture", "Enterprise Architecture"]);
    record137.set("resources", [{"name": "Enterprise Architecture Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "Architecture Strategy", "type": "Course", "url": "https://coursera.org"}]);
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
    record138.set("careerSlug", "engineering-manager");
    record138.set("level", "Beginner");
    record138.set("timeline", "6-12 months");
    record138.set("salary", "$100k-$120k");
    record138.set("skills", ["Leadership Basics", "Communication", "Project Management", "People Management", "Problem Solving", "Technical Knowledge"]);
    record138.set("projects", ["Team Management", "Project Planning", "Team Development"]);
    record138.set("certifications", ["Leadership Fundamentals", "Management Basics"]);
    record138.set("resources", [{"name": "Leadership Fundamentals", "type": "Online Course", "url": "https://coursera.org"}, {"name": "Management Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record139.set("careerSlug", "engineering-manager");
    record139.set("level", "Intermediate");
    record139.set("timeline", "1-2 years");
    record139.set("salary", "$120k-$170k");
    record139.set("skills", ["Advanced Leadership", "Team Development", "Strategic Planning", "Communication", "Problem Solving", "Organizational Impact"]);
    record139.set("projects", ["Team Leadership", "Strategic Planning", "Organizational Development"]);
    record139.set("certifications", ["Advanced Leadership", "Management Certification"]);
    record139.set("resources", [{"name": "The Manager's Path", "type": "Book", "url": "https://oreilly.com"}, {"name": "Leadership Development", "type": "Course", "url": "https://coursera.org"}]);
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
    record140.set("careerSlug", "engineering-manager");
    record140.set("level", "Advanced");
    record140.set("timeline", "3+ years");
    record140.set("salary", "$170k-$260k+");
    record140.set("skills", ["Executive Leadership", "Strategic Planning", "Organizational Impact", "Team Management", "Innovation", "Executive Communication"]);
    record140.set("projects", ["Executive Leadership", "Organizational Strategy", "Team Leadership"]);
    record140.set("certifications", ["Executive Leadership", "Strategic Management"]);
    record140.set("resources", [{"name": "Executive Leadership Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "Strategic Leadership", "type": "Course", "url": "https://coursera.org"}]);
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
    record141.set("careerSlug", "technical-lead");
    record141.set("level", "Beginner");
    record141.set("timeline", "6-12 months");
    record141.set("salary", "$90k-$110k");
    record141.set("skills", ["Technical Expertise", "Leadership Basics", "Communication", "Mentoring", "Problem Solving", "Code Review"]);
    record141.set("projects", ["Team Leadership", "Code Review", "Mentoring"]);
    record141.set("certifications", ["Technical Leadership Basics", "Leadership Fundamentals"]);
    record141.set("resources", [{"name": "Technical Leadership Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "Leadership Fundamentals", "type": "Online Course", "url": "https://coursera.org"}]);
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
    record142.set("careerSlug", "technical-lead");
    record142.set("level", "Intermediate");
    record142.set("timeline", "1-2 years");
    record142.set("salary", "$110k-$160k");
    record142.set("skills", ["Advanced Technical Leadership", "Team Development", "Strategic Planning", "Communication", "Problem Solving", "Organizational Impact"]);
    record142.set("projects", ["Team Leadership", "Strategic Planning", "Technical Development"]);
    record142.set("certifications", ["Advanced Technical Leadership", "Leadership Certification"]);
    record142.set("resources", [{"name": "The Manager's Path", "type": "Book", "url": "https://oreilly.com"}, {"name": "Technical Leadership Development", "type": "Course", "url": "https://coursera.org"}]);
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
    record143.set("careerSlug", "technical-lead");
    record143.set("level", "Advanced");
    record143.set("timeline", "3+ years");
    record143.set("salary", "$160k-$220k+");
    record143.set("skills", ["Executive Technical Leadership", "Strategic Planning", "Organizational Impact", "Team Management", "Innovation", "Executive Communication"]);
    record143.set("projects", ["Executive Leadership", "Organizational Strategy", "Team Leadership"]);
    record143.set("certifications", ["Executive Technical Leadership", "Strategic Management"]);
    record143.set("resources", [{"name": "Executive Leadership Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "Strategic Leadership", "type": "Course", "url": "https://coursera.org"}]);
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
    record144.set("careerSlug", "vp-engineering");
    record144.set("level", "Beginner");
    record144.set("timeline", "6-12 months");
    record144.set("salary", "$140k-$170k");
    record144.set("skills", ["Engineering Leadership", "Strategic Planning", "Communication", "Budget Management", "Team Management", "Vision"]);
    record144.set("projects", ["Engineering Strategy", "Team Leadership", "Budget Planning"]);
    record144.set("certifications", ["Executive Leadership", "Strategic Management"]);
    record144.set("resources", [{"name": "Executive Leadership Program", "type": "Online Course", "url": "https://coursera.org"}, {"name": "Engineering Leadership Handbook", "type": "Book", "url": "https://oreilly.com"}]);
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
    record145.set("careerSlug", "vp-engineering");
    record145.set("level", "Intermediate");
    record145.set("timeline", "1-2 years");
    record145.set("salary", "$170k-$230k");
    record145.set("skills", ["Advanced Engineering Leadership", "Strategic Planning", "Organizational Impact", "Executive Communication", "Innovation", "Team Management"]);
    record145.set("projects", ["Engineering Strategy", "Organizational Development", "Team Leadership"]);
    record145.set("certifications", ["Advanced Executive Leadership", "Strategic Management"]);
    record145.set("resources", [{"name": "Digital Transformation Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "Executive Leadership", "type": "Course", "url": "https://coursera.org"}]);
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
    record146.set("careerSlug", "vp-engineering");
    record146.set("level", "Advanced");
    record146.set("timeline", "3+ years");
    record146.set("salary", "$230k-$320k+");
    record146.set("skills", ["Enterprise Engineering Leadership", "Strategic Vision", "Organizational Transformation", "Executive Communication", "Innovation", "Team Management"]);
    record146.set("projects", ["Enterprise Strategy", "Digital Transformation", "Team Leadership"]);
    record146.set("certifications", ["Advanced Executive Leadership", "Enterprise Strategy"]);
    record146.set("resources", [{"name": "Enterprise Strategy Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "Executive Leadership", "type": "Course", "url": "https://coursera.org"}]);
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
    record147.set("careerSlug", "accessibility-engineer");
    record147.set("level", "Beginner");
    record147.set("timeline", "6-12 months");
    record147.set("salary", "$65k-$85k");
    record147.set("skills", ["Accessibility Fundamentals", "WCAG Basics", "HTML/CSS", "Testing Basics", "Communication", "Empathy"]);
    record147.set("projects", ["Accessibility Audit", "WCAG Compliance", "Accessibility Testing"]);
    record147.set("certifications", ["Accessibility Fundamentals", "WCAG Basics"]);
    record147.set("resources", [{"name": "WebAIM", "type": "Learning Resource", "url": "https://webaim.org"}, {"name": "WCAG Guidelines", "type": "Official Guide", "url": "https://www.w3.org/WAI/WCAG21/quickref"}]);
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
    record148.set("careerSlug", "accessibility-engineer");
    record148.set("level", "Intermediate");
    record148.set("timeline", "1-2 years");
    record148.set("salary", "$85k-$130k");
    record148.set("skills", ["Advanced Accessibility", "WCAG Expertise", "Testing Tools", "Communication", "Leadership", "Problem Solving"]);
    record148.set("projects", ["Accessibility Program", "WCAG Implementation", "Accessibility Testing"]);
    record148.set("certifications", ["Advanced Accessibility", "WCAG Certification"]);
    record148.set("resources", [{"name": "Accessibility Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "Inclusive Design Patterns", "type": "Blog", "url": "https://www.smashingmagazine.com"}]);
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
    record149.set("careerSlug", "accessibility-engineer");
    record149.set("level", "Advanced");
    record149.set("timeline", "3+ years");
    record149.set("salary", "$130k-$180k+");
    record149.set("skills", ["Accessibility Strategy", "Leadership", "Inclusive Design", "Team Management", "Innovation", "Executive Communication"]);
    record149.set("projects", ["Accessibility Strategy", "Team Leadership", "Inclusive Design"]);
    record149.set("certifications", ["Advanced Accessibility", "Accessibility Architecture"]);
    record149.set("resources", [{"name": "Accessibility Strategy Handbook", "type": "Book", "url": "https://oreilly.com"}, {"name": "Inclusive Design", "type": "Course", "url": "https://coursera.org"}]);
  try {
    app.save(record149);
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
