/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerInterviewQuestions");

  const record0 = new Record(collection);
    record0.set("careerSlug", "software-engineer");
    record0.set("questionNumber", 1);
    record0.set("question", "What is the difference between a stack and a queue?");
    record0.set("category", "Technical");
    record0.set("difficulty", "Beginner");
    record0.set("explanation", "A stack is a Last-In-First-Out (LIFO) data structure where elements are added and removed from the same end. A queue is a First-In-First-Out (FIFO) structure where elements are added at the rear and removed from the front.");
    record0.set("keyPoints", ["LIFO vs FIFO", "Push/Pop vs Enqueue/Dequeue", "Real-world examples"]);
    record0.set("relatedTopics", ["Data Structures", "Arrays", "Linked Lists"]);
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
    record1.set("questionNumber", 2);
    record1.set("question", "Explain the concept of Big O notation and why it matters");
    record1.set("category", "Technical");
    record1.set("difficulty", "Intermediate");
    record1.set("explanation", "Big O notation describes how an algorithm's runtime or space requirements grow as the input size increases. It helps us understand algorithm efficiency and scalability.");
    record1.set("keyPoints", ["Time complexity", "Space complexity", "Common complexities: O(1), O(n), O(n\u00b2), O(log n)"]);
    record1.set("relatedTopics", ["Algorithm Analysis", "Performance Optimization", "Data Structures"]);
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
    record2.set("questionNumber", 3);
    record2.set("question", "Tell me about a challenging project you worked on and how you solved it");
    record2.set("category", "Behavioral");
    record2.set("difficulty", "Intermediate");
    record2.set("explanation", "This is a behavioral question testing your problem-solving skills, communication, and ability to handle challenges. Use the STAR method (Situation, Task, Action, Result).");
    record2.set("keyPoints", ["STAR method", "Specific examples", "What you learned", "Team collaboration"]);
    record2.set("relatedTopics", ["Communication", "Problem Solving", "Leadership"]);
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
    record3.set("careerSlug", "software-engineer");
    record3.set("questionNumber", 4);
    record3.set("question", "What is a REST API and how does it work?");
    record3.set("category", "Technical");
    record3.set("difficulty", "Intermediate");
    record3.set("explanation", "REST (Representational State Transfer) is an architectural style for building web services. It uses HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources identified by URLs.");
    record3.set("keyPoints", ["HTTP methods", "Stateless", "Resource-based", "JSON/XML"]);
    record3.set("relatedTopics", ["Web Services", "HTTP", "API Design"]);
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
    record4.set("careerSlug", "software-engineer");
    record4.set("questionNumber", 5);
    record4.set("question", "How do you handle errors and exceptions in your code?");
    record4.set("category", "Technical");
    record4.set("difficulty", "Intermediate");
    record4.set("explanation", "Error handling involves using try-catch blocks, custom exceptions, logging, and graceful degradation. Good error handling improves user experience and debugging.");
    record4.set("keyPoints", ["Try-catch blocks", "Custom exceptions", "Logging", "User feedback"]);
    record4.set("relatedTopics", ["Debugging", "Code Quality", "Testing"]);
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
    record5.set("careerSlug", "data-scientist");
    record5.set("questionNumber", 1);
    record5.set("question", "What is the difference between supervised and unsupervised learning?");
    record5.set("category", "Technical");
    record5.set("difficulty", "Beginner");
    record5.set("explanation", "Supervised learning uses labeled data to train models (classification, regression). Unsupervised learning finds patterns in unlabeled data (clustering, dimensionality reduction).");
    record5.set("keyPoints", ["Labeled vs unlabeled data", "Examples of each", "Use cases"]);
    record5.set("relatedTopics", ["Machine Learning", "Classification", "Clustering"]);
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
    record6.set("careerSlug", "data-scientist");
    record6.set("questionNumber", 2);
    record6.set("question", "How do you handle missing data in a dataset?");
    record6.set("category", "Technical");
    record6.set("difficulty", "Intermediate");
    record6.set("explanation", "Strategies include deletion (if small %), imputation (mean, median, mode), forward/backward fill for time series, or using algorithms that handle missing values.");
    record6.set("keyPoints", ["Deletion", "Imputation methods", "Impact on analysis", "Domain knowledge"]);
    record6.set("relatedTopics", ["Data Cleaning", "EDA", "Feature Engineering"]);
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
    record7.set("careerSlug", "data-scientist");
    record7.set("questionNumber", 3);
    record7.set("question", "Explain overfitting and how to prevent it");
    record7.set("category", "Technical");
    record7.set("difficulty", "Intermediate");
    record7.set("explanation", "Overfitting occurs when a model learns noise instead of patterns. Prevention methods include cross-validation, regularization, early stopping, and using simpler models.");
    record7.set("keyPoints", ["Training vs test error", "Regularization (L1, L2)", "Cross-validation", "Early stopping"]);
    record7.set("relatedTopics", ["Model Evaluation", "Regularization", "Validation"]);
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
    record8.set("careerSlug", "data-scientist");
    record8.set("questionNumber", 4);
    record8.set("question", "Describe your experience with a real-world data project");
    record8.set("category", "Behavioral");
    record8.set("difficulty", "Intermediate");
    record8.set("explanation", "Share a specific project highlighting data collection, cleaning, analysis, modeling, and business impact. Use STAR method and quantify results.");
    record8.set("keyPoints", ["Problem definition", "Data sources", "Methods used", "Results and impact"]);
    record8.set("relatedTopics", ["Communication", "Project Management", "Business Acumen"]);
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
    record9.set("questionNumber", 5);
    record9.set("question", "What metrics do you use to evaluate classification models?");
    record9.set("category", "Technical");
    record9.set("difficulty", "Advanced");
    record9.set("explanation", "Common metrics include accuracy, precision, recall, F1-score, ROC-AUC. Choice depends on the problem and class imbalance.");
    record9.set("keyPoints", ["Accuracy", "Precision vs Recall", "F1-score", "ROC-AUC", "Confusion matrix"]);
    record9.set("relatedTopics", ["Model Evaluation", "Classification", "Imbalanced Data"]);
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
    record10.set("careerSlug", "devops-engineer");
    record10.set("questionNumber", 1);
    record10.set("question", "What is the difference between Docker and Kubernetes?");
    record10.set("category", "Technical");
    record10.set("difficulty", "Beginner");
    record10.set("explanation", "Docker is a containerization platform for packaging applications. Kubernetes is an orchestration platform for managing containers at scale across multiple machines.");
    record10.set("keyPoints", ["Containerization vs Orchestration", "Single vs multiple hosts", "Scaling", "Deployment"]);
    record10.set("relatedTopics", ["Containers", "Orchestration", "Cloud Infrastructure"]);
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
    record11.set("careerSlug", "devops-engineer");
    record11.set("questionNumber", 2);
    record11.set("question", "Explain CI/CD and its benefits");
    record11.set("category", "Technical");
    record11.set("difficulty", "Intermediate");
    record11.set("explanation", "CI/CD automates testing and deployment. Continuous Integration merges code frequently with automated tests. Continuous Deployment automatically releases to production.");
    record11.set("keyPoints", ["Automation", "Faster releases", "Quality assurance", "Reduced manual errors"]);
    record11.set("relatedTopics", ["Jenkins", "GitLab CI", "Deployment Pipelines"]);
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
    record12.set("careerSlug", "devops-engineer");
    record12.set("questionNumber", 3);
    record12.set("question", "How do you monitor and troubleshoot production issues?");
    record12.set("category", "Technical");
    record12.set("difficulty", "Intermediate");
    record12.set("explanation", "Use monitoring tools (Prometheus, Grafana), logging (ELK stack), alerting, and incident response procedures. Analyze metrics, logs, and traces to identify root causes.");
    record12.set("keyPoints", ["Monitoring tools", "Logging", "Alerting", "Root cause analysis"]);
    record12.set("relatedTopics", ["Observability", "Incident Response", "Performance Tuning"]);
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
    record13.set("careerSlug", "devops-engineer");
    record13.set("questionNumber", 4);
    record13.set("question", "Tell me about a time you improved system reliability or performance");
    record13.set("category", "Behavioral");
    record13.set("difficulty", "Intermediate");
    record13.set("explanation", "Share a specific example of optimization or reliability improvement. Quantify the impact (uptime %, latency reduction, cost savings).");
    record13.set("keyPoints", ["Problem identification", "Solution implementation", "Metrics improvement", "Team collaboration"]);
    record13.set("relatedTopics", ["Problem Solving", "Leadership", "Communication"]);
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
    record14.set("careerSlug", "devops-engineer");
    record14.set("questionNumber", 5);
    record14.set("question", "What is Infrastructure as Code and why is it important?");
    record14.set("category", "Technical");
    record14.set("difficulty", "Intermediate");
    record14.set("explanation", "IaC uses code to define and manage infrastructure (Terraform, Ansible). Benefits include version control, reproducibility, automation, and disaster recovery.");
    record14.set("keyPoints", ["Version control", "Reproducibility", "Automation", "Disaster recovery"]);
    record14.set("relatedTopics", ["Terraform", "Ansible", "Cloud Infrastructure"]);
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
    record15.set("careerSlug", "full-stack-developer");
    record15.set("questionNumber", 1);
    record15.set("question", "Explain the MVC architecture pattern");
    record15.set("category", "Technical");
    record15.set("difficulty", "Intermediate");
    record15.set("explanation", "MVC separates applications into Model (data), View (UI), and Controller (logic). This separation improves maintainability, testability, and scalability.");
    record15.set("keyPoints", ["Separation of concerns", "Model", "View", "Controller", "Benefits"]);
    record15.set("relatedTopics", ["Design Patterns", "Architecture", "Web Development"]);
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
    record16.set("careerSlug", "full-stack-developer");
    record16.set("questionNumber", 2);
    record16.set("question", "How do you secure a web application?");
    record16.set("category", "Technical");
    record16.set("difficulty", "Advanced");
    record16.set("explanation", "Security measures include HTTPS, input validation, SQL injection prevention, CSRF protection, authentication, authorization, and regular security audits.");
    record16.set("keyPoints", ["HTTPS", "Input validation", "SQL injection prevention", "CSRF", "Authentication"]);
    record16.set("relatedTopics", ["Security", "OWASP", "Best Practices"]);
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
    record17.set("careerSlug", "full-stack-developer");
    record17.set("questionNumber", 3);
    record17.set("question", "Describe your experience building a full-stack application");
    record17.set("category", "Behavioral");
    record17.set("difficulty", "Intermediate");
    record17.set("explanation", "Share a complete project from frontend to backend. Discuss technologies, challenges, solutions, and lessons learned.");
    record17.set("keyPoints", ["Project scope", "Technologies used", "Challenges", "Solutions", "Results"]);
    record17.set("relatedTopics", ["Project Management", "Communication", "Problem Solving"]);
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
    record18.set("careerSlug", "full-stack-developer");
    record18.set("questionNumber", 4);
    record18.set("question", "How do you optimize web application performance?");
    record18.set("category", "Technical");
    record18.set("difficulty", "Advanced");
    record18.set("explanation", "Optimization includes code splitting, lazy loading, caching, CDN, database optimization, compression, and monitoring. Both frontend and backend optimization matter.");
    record18.set("keyPoints", ["Code splitting", "Caching", "Database optimization", "Monitoring", "Profiling"]);
    record18.set("relatedTopics", ["Performance", "Optimization", "DevTools"]);
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
    record19.set("careerSlug", "full-stack-developer");
    record19.set("questionNumber", 5);
    record19.set("question", "What is the difference between SQL and NoSQL databases?");
    record19.set("category", "Technical");
    record19.set("difficulty", "Intermediate");
    record19.set("explanation", "SQL databases are relational with structured schemas. NoSQL databases are flexible, document-based or key-value stores. Choice depends on data structure and scalability needs.");
    record19.set("keyPoints", ["Relational vs document", "Schema flexibility", "Scalability", "ACID vs BASE"]);
    record19.set("relatedTopics", ["Databases", "Data Modeling", "Architecture"]);
  try {
    app.save(record19);
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
