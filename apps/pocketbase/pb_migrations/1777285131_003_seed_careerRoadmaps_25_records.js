/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerRoadmaps");

  const record0 = new Record(collection);
    record0.set("careerSlug", "frontend-developer");
    record0.set("phase", 1);
    record0.set("phaseTitle", "HTML, CSS & JavaScript Fundamentals");
    record0.set("duration", "8 weeks");
    record0.set("skills", ["HTML5 Semantic Markup", "CSS3 Flexbox & Grid", "JavaScript ES6+", "DOM Manipulation", "Event Handling", "Responsive Design Basics"]);
    record0.set("resources", ["MDN Web Docs", "freeCodeCamp", "Codecademy"]);
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
    record1.set("phase", 2);
    record1.set("phaseTitle", "Modern Frontend Frameworks");
    record1.set("duration", "10 weeks");
    record1.set("skills", ["React Fundamentals", "JSX & Components", "State Management", "Hooks", "React Router", "API Integration", "Async/Await"]);
    record1.set("resources", ["React Official Docs", "Scrimba React Course", "React Query"]);
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
    record2.set("phase", 3);
    record2.set("phaseTitle", "Advanced Styling & Performance");
    record2.set("duration", "8 weeks");
    record2.set("skills", ["CSS-in-JS", "Tailwind CSS", "Web Performance Optimization", "Lazy Loading", "Code Splitting", "Browser DevTools"]);
    record2.set("resources", ["Tailwind Documentation", "Web.dev", "Chrome DevTools Docs"]);
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
    record3.set("careerSlug", "frontend-developer");
    record3.set("phase", 4);
    record3.set("phaseTitle", "State Management & Testing");
    record3.set("duration", "9 weeks");
    record3.set("skills", ["Redux/Context API", "State Management Patterns", "Unit Testing", "Integration Testing", "Jest & React Testing Library", "Debugging"]);
    record3.set("resources", ["Redux Documentation", "Testing Library Docs", "Jest Docs"]);
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
    record4.set("careerSlug", "frontend-developer");
    record4.set("phase", 5);
    record4.set("phaseTitle", "Production & Deployment");
    record4.set("duration", "7 weeks");
    record4.set("skills", ["Build Tools (Webpack/Vite)", "CI/CD Pipelines", "Deployment (Vercel/Netlify)", "Monitoring & Analytics", "SEO Optimization", "Accessibility (a11y)"]);
    record4.set("resources", ["Webpack Docs", "Vercel Docs", "Web Accessibility Guidelines"]);
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
    record5.set("phase", 1);
    record5.set("phaseTitle", "Programming Fundamentals & Databases");
    record5.set("duration", "9 weeks");
    record5.set("skills", ["Node.js Basics", "JavaScript/TypeScript", "SQL Fundamentals", "Database Design", "CRUD Operations", "Query Optimization"]);
    record5.set("resources", ["Node.js Official Docs", "SQL Tutorial", "PostgreSQL Docs"]);
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
    record6.set("careerSlug", "backend-developer");
    record6.set("phase", 2);
    record6.set("phaseTitle", "REST APIs & Express.js");
    record6.set("duration", "10 weeks");
    record6.set("skills", ["Express.js Framework", "HTTP Methods & Status Codes", "Middleware", "Request/Response Handling", "Error Handling", "API Design Patterns"]);
    record6.set("resources", ["Express.js Docs", "RESTful API Design", "HTTP Status Codes"]);
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
    record7.set("careerSlug", "backend-developer");
    record7.set("phase", 3);
    record7.set("phaseTitle", "Authentication & Security");
    record7.set("duration", "8 weeks");
    record7.set("skills", ["JWT Authentication", "OAuth 2.0", "Password Hashing", "CORS & Security Headers", "SQL Injection Prevention", "Rate Limiting"]);
    record7.set("resources", ["JWT.io", "OWASP Security", "Auth0 Docs"]);
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
    record8.set("careerSlug", "backend-developer");
    record8.set("phase", 4);
    record8.set("phaseTitle", "Advanced Databases & Caching");
    record8.set("duration", "9 weeks");
    record8.set("skills", ["MongoDB & NoSQL", "Redis Caching", "Database Indexing", "Transaction Management", "Data Replication", "Backup Strategies"]);
    record8.set("resources", ["MongoDB Docs", "Redis Docs", "Database Design Patterns"]);
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
    record9.set("careerSlug", "backend-developer");
    record9.set("phase", 5);
    record9.set("phaseTitle", "Scalability & DevOps");
    record9.set("duration", "8 weeks");
    record9.set("skills", ["Microservices Architecture", "Docker Basics", "Load Balancing", "Monitoring & Logging", "System Design", "Cloud Deployment"]);
    record9.set("resources", ["Docker Docs", "Microservices Patterns", "AWS/GCP Docs"]);
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
    record10.set("careerSlug", "full-stack-developer");
    record10.set("phase", 1);
    record10.set("phaseTitle", "Web Fundamentals & Frontend Basics");
    record10.set("duration", "10 weeks");
    record10.set("skills", ["HTML5 & CSS3", "JavaScript ES6+", "Responsive Design", "DOM Manipulation", "Git & Version Control", "Web Standards"]);
    record10.set("resources", ["MDN Web Docs", "freeCodeCamp", "CSS-Tricks"]);
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
    record11.set("careerSlug", "full-stack-developer");
    record11.set("phase", 2);
    record11.set("phaseTitle", "Frontend Frameworks & State Management");
    record11.set("duration", "11 weeks");
    record11.set("skills", ["React Fundamentals", "Component Architecture", "Hooks & State", "React Router", "State Management (Redux/Context)", "API Integration"]);
    record11.set("resources", ["React Docs", "Redux Docs", "React Router Docs"]);
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
    record12.set("careerSlug", "full-stack-developer");
    record12.set("phase", 3);
    record12.set("phaseTitle", "Backend Development & Databases");
    record12.set("duration", "11 weeks");
    record12.set("skills", ["Node.js & Express.js", "REST API Design", "SQL & PostgreSQL", "MongoDB & NoSQL", "Authentication & Authorization", "Database Design"]);
    record12.set("resources", ["Express.js Docs", "PostgreSQL Docs", "MongoDB Docs"]);
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
    record13.set("careerSlug", "full-stack-developer");
    record13.set("phase", 4);
    record13.set("phaseTitle", "Integration & Advanced Concepts");
    record13.set("duration", "10 weeks");
    record13.set("skills", ["Full Stack Integration", "Error Handling", "Testing (Frontend & Backend)", "Performance Optimization", "Security Best Practices", "Deployment"]);
    record13.set("resources", ["Testing Library Docs", "Jest Docs", "Web Security Academy"]);
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
    record14.set("careerSlug", "full-stack-developer");
    record14.set("phase", 5);
    record14.set("phaseTitle", "Production & Scaling");
    record14.set("duration", "9 weeks");
    record14.set("skills", ["CI/CD Pipelines", "Docker & Containerization", "Cloud Deployment", "Monitoring & Logging", "System Design", "Scalability Patterns"]);
    record14.set("resources", ["Docker Docs", "GitHub Actions", "AWS/Vercel Docs"]);
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
    record15.set("phase", 1);
    record15.set("phaseTitle", "Linux & Networking Fundamentals");
    record15.set("duration", "10 weeks");
    record15.set("skills", ["Linux Command Line", "File Systems & Permissions", "Networking Basics", "TCP/IP", "DNS & DHCP", "Shell Scripting"]);
    record15.set("resources", ["Linux Academy", "Networking Fundamentals", "Bash Scripting Guide"]);
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
    record16.set("phase", 2);
    record16.set("phaseTitle", "Containerization & Docker");
    record16.set("duration", "9 weeks");
    record16.set("skills", ["Docker Fundamentals", "Container Images", "Docker Compose", "Container Networking", "Docker Registry", "Container Security"]);
    record16.set("resources", ["Docker Official Docs", "Docker Hub", "Play with Docker"]);
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
    record17.set("phase", 3);
    record17.set("phaseTitle", "Orchestration & Kubernetes");
    record17.set("duration", "11 weeks");
    record17.set("skills", ["Kubernetes Architecture", "Pods & Deployments", "Services & Networking", "ConfigMaps & Secrets", "Persistent Volumes", "Helm Charts"]);
    record17.set("resources", ["Kubernetes Official Docs", "Kubernetes.io", "Minikube"]);
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
    record18.set("careerSlug", "devops-engineer");
    record18.set("phase", 4);
    record18.set("phaseTitle", "CI/CD & Infrastructure as Code");
    record18.set("duration", "10 weeks");
    record18.set("skills", ["Jenkins & GitLab CI", "GitHub Actions", "Terraform", "Infrastructure as Code", "Pipeline Design", "Artifact Management"]);
    record18.set("resources", ["Jenkins Docs", "Terraform Docs", "GitLab CI Docs"]);
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
    record19.set("careerSlug", "devops-engineer");
    record19.set("phase", 5);
    record19.set("phaseTitle", "Cloud Platforms & Monitoring");
    record19.set("duration", "10 weeks");
    record19.set("skills", ["AWS Services", "GCP & Azure Basics", "Monitoring & Alerting", "Prometheus & Grafana", "Log Aggregation", "Disaster Recovery"]);
    record19.set("resources", ["AWS Documentation", "Prometheus Docs", "Grafana Docs"]);
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
    record20.set("careerSlug", "data-scientist");
    record20.set("phase", 1);
    record20.set("phaseTitle", "Python & Data Fundamentals");
    record20.set("duration", "10 weeks");
    record20.set("skills", ["Python Programming", "NumPy & Pandas", "Data Cleaning", "Exploratory Data Analysis", "SQL Basics", "Data Visualization"]);
    record20.set("resources", ["Python.org", "Pandas Documentation", "Kaggle Learn"]);
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
    record21.set("careerSlug", "data-scientist");
    record21.set("phase", 2);
    record21.set("phaseTitle", "Statistics & Probability");
    record21.set("duration", "9 weeks");
    record21.set("skills", ["Descriptive Statistics", "Probability Theory", "Hypothesis Testing", "Regression Analysis", "Correlation & Causation", "Statistical Inference"]);
    record21.set("resources", ["StatQuest Videos", "Khan Academy", "Think Stats"]);
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
    record22.set("careerSlug", "data-scientist");
    record22.set("phase", 3);
    record22.set("phaseTitle", "Machine Learning Fundamentals");
    record22.set("duration", "11 weeks");
    record22.set("skills", ["Supervised Learning", "Classification & Regression", "Scikit-learn", "Model Evaluation", "Feature Engineering", "Cross-Validation"]);
    record22.set("resources", ["Scikit-learn Docs", "Andrew Ng ML Course", "Kaggle Competitions"]);
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
    record23.set("careerSlug", "data-scientist");
    record23.set("phase", 4);
    record23.set("phaseTitle", "Deep Learning & Advanced ML");
    record23.set("duration", "11 weeks");
    record23.set("skills", ["Neural Networks", "TensorFlow & Keras", "Convolutional Neural Networks", "Recurrent Neural Networks", "Transfer Learning", "Model Optimization"]);
    record23.set("resources", ["TensorFlow Docs", "Fast.ai", "Deep Learning Specialization"]);
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
    record24.set("careerSlug", "data-scientist");
    record24.set("phase", 5);
    record24.set("phaseTitle", "Production & Deployment");
    record24.set("duration", "9 weeks");
    record24.set("skills", ["Model Deployment", "MLOps", "Model Monitoring", "A/B Testing", "Data Pipeline", "Business Communication"]);
    record24.set("resources", ["MLflow Docs", "Hugging Face", "Model Deployment Guides"]);
  try {
    app.save(record24);
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
