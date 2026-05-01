/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerQuizzes");

  const record0 = new Record(collection);
    record0.set("careerSlug", "devops-engineer");
    record0.set("difficulty", "Basic");
    record0.set("questionNumber", 1);
    record0.set("question", "What does CI/CD stand for?");
    record0.set("options", ["Continuous Integration/Continuous Deployment", "Code Integration/Code Development", "Continuous Implementation/Continuous Delivery", "Code Improvement/Code Distribution"]);
    record0.set("correctAnswer", "A");
    record0.set("explanation", "CI/CD stands for Continuous Integration/Continuous Deployment, a practice of automating testing and deployment.");
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
    record1.set("careerSlug", "devops-engineer");
    record1.set("difficulty", "Basic");
    record1.set("questionNumber", 2);
    record1.set("question", "Which of the following is a containerization platform?");
    record1.set("options", ["Kubernetes", "Docker", "Jenkins", "Terraform"]);
    record1.set("correctAnswer", "B");
    record1.set("explanation", "Docker is a containerization platform that packages applications and dependencies into containers.");
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
    record2.set("careerSlug", "devops-engineer");
    record2.set("difficulty", "Basic");
    record2.set("questionNumber", 3);
    record2.set("question", "What is the primary purpose of Kubernetes?");
    record2.set("options", ["Version control", "Container orchestration", "Infrastructure provisioning", "Log aggregation"]);
    record2.set("correctAnswer", "B");
    record2.set("explanation", "Kubernetes is used for container orchestration, managing and scaling containerized applications.");
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
    record3.set("careerSlug", "devops-engineer");
    record3.set("difficulty", "Basic");
    record3.set("questionNumber", 4);
    record3.set("question", "Which tool is used for Infrastructure as Code?");
    record3.set("options", ["Docker", "Jenkins", "Terraform", "Prometheus"]);
    record3.set("correctAnswer", "C");
    record3.set("explanation", "Terraform is an Infrastructure as Code tool that allows you to define infrastructure using code.");
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
    record4.set("careerSlug", "devops-engineer");
    record4.set("difficulty", "Basic");
    record4.set("questionNumber", 5);
    record4.set("question", "What is Git primarily used for?");
    record4.set("options", ["Monitoring systems", "Version control", "Container management", "Log analysis"]);
    record4.set("correctAnswer", "B");
    record4.set("explanation", "Git is a version control system used for tracking changes in code and collaborating with teams.");
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
    record5.set("careerSlug", "devops-engineer");
    record5.set("difficulty", "Medium");
    record5.set("questionNumber", 6);
    record5.set("question", "What is the difference between Docker and Kubernetes?");
    record5.set("options", ["No difference", "Docker is for containerization, Kubernetes is for orchestration", "Kubernetes is for containerization, Docker is for orchestration", "They serve the same purpose"]);
    record5.set("correctAnswer", "B");
    record5.set("explanation", "Docker creates containers, while Kubernetes manages and orchestrates those containers at scale.");
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
    record6.set("difficulty", "Medium");
    record6.set("questionNumber", 7);
    record6.set("question", "What does a CI/CD pipeline typically include?");
    record6.set("options", ["Only testing", "Build, test, and deployment stages", "Only deployment", "Only code review"]);
    record6.set("correctAnswer", "B");
    record6.set("explanation", "A CI/CD pipeline includes building code, running tests, and deploying to production automatically.");
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
    record7.set("difficulty", "Medium");
    record7.set("questionNumber", 8);
    record7.set("question", "What is the purpose of Prometheus?");
    record7.set("options", ["Container management", "Monitoring and alerting", "Infrastructure provisioning", "Version control"]);
    record7.set("correctAnswer", "B");
    record7.set("explanation", "Prometheus is a monitoring and alerting system that collects metrics from applications and infrastructure.");
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
    record8.set("difficulty", "Medium");
    record8.set("questionNumber", 9);
    record8.set("question", "What does IaC (Infrastructure as Code) enable?");
    record8.set("options", ["Manual infrastructure management", "Version-controlled infrastructure definitions", "Faster manual deployments", "Reduced automation"]);
    record8.set("correctAnswer", "B");
    record8.set("explanation", "IaC allows infrastructure to be defined, versioned, and managed like application code.");
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
    record9.set("careerSlug", "devops-engineer");
    record9.set("difficulty", "Medium");
    record9.set("questionNumber", 10);
    record9.set("question", "What is the ELK Stack used for?");
    record9.set("options", ["Container orchestration", "Log aggregation and analysis", "Infrastructure provisioning", "Version control"]);
    record9.set("correctAnswer", "B");
    record9.set("explanation", "ELK Stack (Elasticsearch, Logstash, Kibana) is used for centralized logging and log analysis.");
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
    record10.set("difficulty", "Hard");
    record10.set("questionNumber", 11);
    record10.set("question", "What is the difference between blue-green and canary deployments?");
    record10.set("options", ["No difference", "Blue-green switches all traffic at once, canary gradually shifts traffic", "Canary switches all traffic at once, blue-green gradually shifts", "They are the same strategy"]);
    record10.set("correctAnswer", "B");
    record10.set("explanation", "Blue-green deployment switches all traffic at once, while canary deployment gradually shifts traffic to new version.");
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
    record11.set("difficulty", "Hard");
    record11.set("questionNumber", 12);
    record11.set("question", "What is the purpose of a reverse proxy in DevOps?");
    record11.set("options", ["To slow down requests", "To route requests and provide load balancing", "To increase latency", "To reduce security"]);
    record11.set("correctAnswer", "B");
    record11.set("explanation", "A reverse proxy routes client requests to backend servers and provides load balancing and security.");
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
    record12.set("difficulty", "Hard");
    record12.set("questionNumber", 13);
    record12.set("question", "What is the difference between stateful and stateless applications?");
    record12.set("options", ["No difference", "Stateful stores session data, stateless doesn't", "Stateless stores session data, stateful doesn't", "They are the same"]);
    record12.set("correctAnswer", "B");
    record12.set("explanation", "Stateful applications maintain session state, while stateless applications don't store client state.");
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
    record13.set("difficulty", "Hard");
    record13.set("questionNumber", 14);
    record13.set("question", "What is the purpose of a service mesh?");
    record13.set("options", ["Container management", "Managing service-to-service communication", "Version control", "Log aggregation"]);
    record13.set("correctAnswer", "B");
    record13.set("explanation", "A service mesh manages communication between microservices, providing observability and security.");
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
    record14.set("difficulty", "Hard");
    record14.set("questionNumber", 15);
    record14.set("question", "What is GitOps?");
    record14.set("options", ["Using Git for version control only", "Using Git as the source of truth for infrastructure and application deployment", "A Git hosting service", "A backup strategy"]);
    record14.set("correctAnswer", "B");
    record14.set("explanation", "GitOps uses Git as the single source of truth for infrastructure and application state, enabling declarative deployments.");
  try {
    app.save(record14);
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
