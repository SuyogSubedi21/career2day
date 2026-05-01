/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("interviewQuestionsDatabase");

  const record0 = new Record(collection);
    record0.set("careerSlug", "devops-engineer");
    record0.set("careerName", "DevOps Engineer");
    record0.set("level", "Beginner");
    record0.set("questionNumber", 1);
    record0.set("question", "What is DevOps and what are its main principles?");
    record0.set("explanation", "DevOps combines development and operations to shorten development lifecycle and improve deployment frequency. Principles: collaboration, automation, measurement, sharing.");
    record0.set("practicalExample", "Developers and ops work together, automate testing and deployment, monitor performance continuously");
    record0.set("keyPoints", ["Collaboration", "Automation", "Continuous delivery", "Monitoring"]);
    record0.set("relatedTopics", ["DevOps", "CI/CD", "Infrastructure"]);
    record0.set("difficulty", "Simple");
    record0.set("category", "DevOps Fundamentals");
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
    record1.set("careerName", "DevOps Engineer");
    record1.set("level", "Beginner");
    record1.set("questionNumber", 2);
    record1.set("question", "What is the difference between CI and CD?");
    record1.set("explanation", "CI (Continuous Integration): automatically test code changes. CD (Continuous Deployment): automatically deploy to production. CD includes CI.");
    record1.set("practicalExample", "CI: run tests on every commit. CD: automatically deploy to production if tests pass");
    record1.set("keyPoints", ["Automation", "Testing", "Deployment", "Frequency"]);
    record1.set("relatedTopics", ["CI/CD", "Automation", "DevOps"]);
    record1.set("difficulty", "Simple");
    record1.set("category", "CI/CD");
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
    record2.set("careerName", "DevOps Engineer");
    record2.set("level", "Beginner");
    record2.set("questionNumber", 3);
    record2.set("question", "What is containerization and why is it important?");
    record2.set("explanation", "Containerization packages application with dependencies in isolated environment. Benefits: consistency, portability, scalability, resource efficiency.");
    record2.set("practicalExample", "Docker container runs same way on laptop, server, cloud. No 'works on my machine' problems");
    record2.set("keyPoints", ["Isolation", "Portability", "Consistency", "Efficiency"]);
    record2.set("relatedTopics", ["Docker", "Containers", "Infrastructure"]);
    record2.set("difficulty", "Simple");
    record2.set("category", "Containerization");
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
    record3.set("careerName", "DevOps Engineer");
    record3.set("level", "Beginner");
    record3.set("questionNumber", 4);
    record3.set("question", "What is Docker?");
    record3.set("explanation", "Docker is containerization platform that packages applications and dependencies. Uses images (blueprints) and containers (running instances).");
    record3.set("practicalExample", "Dockerfile defines image, docker run creates container from image");
    record3.set("keyPoints", ["Containerization", "Images", "Containers", "Portability"]);
    record3.set("relatedTopics", ["Docker", "Containers", "DevOps"]);
    record3.set("difficulty", "Simple");
    record3.set("category", "Containerization");
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
    record4.set("careerName", "DevOps Engineer");
    record4.set("level", "Beginner");
    record4.set("questionNumber", 5);
    record4.set("question", "What is the difference between Docker image and Docker container?");
    record4.set("explanation", "Image is blueprint/template (static). Container is running instance of image (dynamic). Image is like class, container is like object.");
    record4.set("practicalExample", "Image: ubuntu:20.04 with Python installed. Container: running instance of that image");
    record4.set("keyPoints", ["Blueprint vs instance", "Static vs dynamic", "Reusability", "Isolation"]);
    record4.set("relatedTopics", ["Docker", "Containers", "OOP analogy"]);
    record4.set("difficulty", "Simple");
    record4.set("category", "Containerization");
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
    record5.set("careerName", "DevOps Engineer");
    record5.set("level", "Beginner");
    record5.set("questionNumber", 6);
    record5.set("question", "What is Kubernetes?");
    record5.set("explanation", "Kubernetes is container orchestration platform. Manages deployment, scaling, networking of containers. Automates container lifecycle.");
    record5.set("practicalExample", "Deploy 100 containers, K8s automatically manages them, scales up/down based on demand");
    record5.set("keyPoints", ["Orchestration", "Automation", "Scaling", "Management"]);
    record5.set("relatedTopics", ["Kubernetes", "Containers", "Infrastructure"]);
    record5.set("difficulty", "Simple");
    record5.set("category", "Orchestration");
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
    record6.set("careerName", "DevOps Engineer");
    record6.set("level", "Beginner");
    record6.set("questionNumber", 7);
    record6.set("question", "What is the difference between Docker and Kubernetes?");
    record6.set("explanation", "Docker: containerization platform. Kubernetes: container orchestration. Docker runs containers, Kubernetes manages many containers.");
    record6.set("practicalExample", "Docker: package app in container. Kubernetes: manage 1000 containers across multiple servers");
    record6.set("keyPoints", ["Containerization vs orchestration", "Single vs multiple", "Scope", "Complexity"]);
    record6.set("relatedTopics", ["Docker", "Kubernetes", "Infrastructure"]);
    record6.set("difficulty", "Simple");
    record6.set("category", "Orchestration");
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
    record7.set("careerName", "DevOps Engineer");
    record7.set("level", "Beginner");
    record7.set("questionNumber", 8);
    record7.set("question", "What is Infrastructure as Code (IaC)?");
    record7.set("explanation", "IaC manages infrastructure using code instead of manual configuration. Benefits: version control, reproducibility, automation, consistency.");
    record7.set("practicalExample", "Terraform code defines servers, networks, databases. Same code creates identical infrastructure everywhere");
    record7.set("keyPoints", ["Code-based", "Version control", "Reproducibility", "Automation"]);
    record7.set("relatedTopics", ["IaC", "Terraform", "Infrastructure"]);
    record7.set("difficulty", "Simple");
    record7.set("category", "Infrastructure");
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
    record8.set("careerName", "DevOps Engineer");
    record8.set("level", "Beginner");
    record8.set("questionNumber", 9);
    record8.set("question", "What is Terraform?");
    record8.set("explanation", "Terraform is IaC tool that provisions infrastructure. Supports multiple cloud providers. Uses declarative configuration files.");
    record8.set("practicalExample", "Write .tf file defining AWS resources, terraform apply creates them");
    record8.set("keyPoints", ["IaC", "Multi-cloud", "Declarative", "Automation"]);
    record8.set("relatedTopics", ["Terraform", "IaC", "Infrastructure"]);
    record8.set("difficulty", "Simple");
    record8.set("category", "Infrastructure");
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
    record9.set("careerName", "DevOps Engineer");
    record9.set("level", "Beginner");
    record9.set("questionNumber", 10);
    record9.set("question", "What is the difference between imperative and declarative IaC?");
    record9.set("explanation", "Imperative: specify how to build infrastructure (step-by-step). Declarative: specify desired state, tool figures out how.");
    record9.set("practicalExample", "Imperative: create server, install software, configure network. Declarative: define desired state in config file");
    record9.set("keyPoints", ["How vs what", "Steps vs state", "Flexibility vs simplicity", "Tools"]);
    record9.set("relatedTopics", ["IaC", "Infrastructure", "Automation"]);
    record9.set("difficulty", "Simple");
    record9.set("category", "Infrastructure");
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
    record10.set("careerName", "DevOps Engineer");
    record10.set("level", "Intermediate");
    record10.set("questionNumber", 21);
    record10.set("question", "What is a microservices architecture?");
    record10.set("explanation", "Microservices: application built as collection of small, independent services. Each service handles specific business capability. Communicate via APIs.");
    record10.set("practicalExample", "E-commerce: user service, product service, order service, payment service - each independent");
    record10.set("keyPoints", ["Independent services", "Scalability", "Flexibility", "Complexity"]);
    record10.set("relatedTopics", ["Architecture", "Microservices", "Design"]);
    record10.set("difficulty", "Medium");
    record10.set("category", "Architecture");
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
    record11.set("careerName", "DevOps Engineer");
    record11.set("level", "Intermediate");
    record11.set("questionNumber", 22);
    record11.set("question", "What is the difference between monolithic and microservices architecture?");
    record11.set("explanation", "Monolithic: single codebase, single deployment. Microservices: multiple codebases, independent deployments. Microservices more flexible, more complex.");
    record11.set("practicalExample", "Monolithic: one app handles everything. Microservices: separate apps for users, products, orders");
    record11.set("keyPoints", ["Codebase", "Deployment", "Scalability", "Complexity"]);
    record11.set("relatedTopics", ["Architecture", "Design", "DevOps"]);
    record11.set("difficulty", "Medium");
    record11.set("category", "Architecture");
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
    record12.set("careerName", "DevOps Engineer");
    record12.set("level", "Intermediate");
    record12.set("questionNumber", 23);
    record12.set("question", "What is service mesh?");
    record12.set("explanation", "Service mesh manages communication between microservices. Handles routing, load balancing, security, monitoring. Examples: Istio, Linkerd.");
    record12.set("practicalExample", "Istio manages traffic between services, handles retries, circuit breaking, monitoring");
    record12.set("keyPoints", ["Service communication", "Routing", "Security", "Observability"]);
    record12.set("relatedTopics", ["Microservices", "Networking", "Infrastructure"]);
    record12.set("difficulty", "Medium");
    record12.set("category", "Architecture");
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
    record13.set("careerName", "DevOps Engineer");
    record13.set("level", "Intermediate");
    record13.set("questionNumber", 24);
    record13.set("question", "What is monitoring and observability?");
    record13.set("explanation", "Monitoring: collect metrics and logs. Observability: understand system behavior from outputs. Observability includes monitoring, logging, tracing.");
    record13.set("practicalExample", "Monitoring: CPU usage 80%. Observability: understand why CPU is high (which service, which operation)");
    record13.set("keyPoints", ["Metrics", "Logs", "Traces", "Understanding"]);
    record13.set("relatedTopics", ["Monitoring", "Observability", "DevOps"]);
    record13.set("difficulty", "Medium");
    record13.set("category", "Monitoring");
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
    record14.set("careerName", "DevOps Engineer");
    record14.set("level", "Intermediate");
    record14.set("questionNumber", 25);
    record14.set("question", "What is the difference between metrics, logs, and traces?");
    record14.set("explanation", "Metrics: numerical measurements (CPU, memory). Logs: text records of events. Traces: request flow through system. Together provide observability.");
    record14.set("practicalExample", "Metric: CPU 80%. Log: 'User login failed'. Trace: request path through 5 services");
    record14.set("keyPoints", ["Numerical vs text", "Aggregation", "Detail level", "Use cases"]);
    record14.set("relatedTopics", ["Observability", "Monitoring", "Debugging"]);
    record14.set("difficulty", "Medium");
    record14.set("category", "Monitoring");
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
    record15.set("careerName", "DevOps Engineer");
    record15.set("level", "Intermediate");
    record15.set("questionNumber", 26);
    record15.set("question", "What is Prometheus?");
    record15.set("explanation", "Prometheus is monitoring and alerting system. Collects metrics from applications. Time-series database. Provides querying and visualization.");
    record15.set("practicalExample", "Prometheus scrapes metrics from services, stores in time-series DB, Grafana visualizes");
    record15.set("keyPoints", ["Metrics collection", "Time-series", "Alerting", "Querying"]);
    record15.set("relatedTopics", ["Monitoring", "Prometheus", "Observability"]);
    record15.set("difficulty", "Medium");
    record15.set("category", "Monitoring");
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
    record16.set("careerName", "DevOps Engineer");
    record16.set("level", "Intermediate");
    record16.set("questionNumber", 27);
    record16.set("question", "What is Grafana?");
    record16.set("explanation", "Grafana is visualization and dashboarding platform. Connects to data sources (Prometheus, Elasticsearch). Creates dashboards and alerts.");
    record16.set("practicalExample", "Grafana dashboard shows CPU, memory, request rate from Prometheus data");
    record16.set("keyPoints", ["Visualization", "Dashboards", "Alerts", "Data sources"]);
    record16.set("relatedTopics", ["Monitoring", "Visualization", "Observability"]);
    record16.set("difficulty", "Medium");
    record16.set("category", "Monitoring");
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
    record17.set("careerName", "DevOps Engineer");
    record17.set("level", "Intermediate");
    record17.set("questionNumber", 28);
    record17.set("question", "What is ELK stack?");
    record17.set("explanation", "ELK: Elasticsearch (search/store), Logstash (process), Kibana (visualize). Centralized logging solution. Collects, processes, visualizes logs.");
    record17.set("practicalExample", "Logs from all services -> Logstash -> Elasticsearch -> Kibana dashboard");
    record17.set("keyPoints", ["Centralized logging", "Processing", "Visualization", "Searching"]);
    record17.set("relatedTopics", ["Logging", "ELK", "Observability"]);
    record17.set("difficulty", "Medium");
    record17.set("category", "Logging");
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
    record18.set("careerName", "DevOps Engineer");
    record18.set("level", "Intermediate");
    record18.set("questionNumber", 29);
    record18.set("question", "What is Jenkins?");
    record18.set("explanation", "Jenkins is CI/CD automation server. Triggers builds on code changes. Runs tests, builds artifacts, deploys. Extensible with plugins.");
    record18.set("practicalExample", "Code pushed -> Jenkins detects -> runs tests -> builds Docker image -> deploys to staging");
    record18.set("keyPoints", ["CI/CD", "Automation", "Pipelines", "Extensibility"]);
    record18.set("relatedTopics", ["CI/CD", "Automation", "DevOps"]);
    record18.set("difficulty", "Medium");
    record18.set("category", "CI/CD");
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
    record19.set("careerName", "DevOps Engineer");
    record19.set("level", "Intermediate");
    record19.set("questionNumber", 30);
    record19.set("question", "What is GitLab CI/CD?");
    record19.set("explanation", "GitLab CI/CD is built-in CI/CD in GitLab. Defined in .gitlab-ci.yml. Runs jobs in Docker containers. Integrated with Git workflow.");
    record19.set("practicalExample", ".gitlab-ci.yml defines stages: test, build, deploy. Runs automatically on push");
    record19.set("keyPoints", ["Built-in CI/CD", "YAML configuration", "Docker", "Integration"]);
    record19.set("relatedTopics", ["CI/CD", "GitLab", "DevOps"]);
    record19.set("difficulty", "Medium");
    record19.set("category", "CI/CD");
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
    record20.set("careerSlug", "devops-engineer");
    record20.set("careerName", "DevOps Engineer");
    record20.set("level", "Intermediate");
    record20.set("questionNumber", 31);
    record20.set("question", "What is GitHub Actions?");
    record20.set("explanation", "GitHub Actions is CI/CD in GitHub. Defined in YAML workflows. Runs on events (push, PR). Integrates with GitHub ecosystem.");
    record20.set("practicalExample", "Workflow runs tests on PR, builds on merge, deploys on release");
    record20.set("keyPoints", ["Built-in CI/CD", "Workflows", "Events", "Integration"]);
    record20.set("relatedTopics", ["CI/CD", "GitHub", "DevOps"]);
    record20.set("difficulty", "Medium");
    record20.set("category", "CI/CD");
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
    record21.set("careerSlug", "devops-engineer");
    record21.set("careerName", "DevOps Engineer");
    record21.set("level", "Intermediate");
    record21.set("questionNumber", 32);
    record21.set("question", "What is a deployment pipeline?");
    record21.set("explanation", "Deployment pipeline automates code from commit to production. Stages: build, test, deploy to staging, deploy to production. Enables continuous delivery.");
    record21.set("practicalExample", "Code commit -> build -> unit tests -> integration tests -> staging -> production");
    record21.set("keyPoints", ["Automation", "Stages", "Quality gates", "Continuous delivery"]);
    record21.set("relatedTopics", ["CI/CD", "Automation", "DevOps"]);
    record21.set("difficulty", "Medium");
    record21.set("category", "CI/CD");
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
    record22.set("careerSlug", "devops-engineer");
    record22.set("careerName", "DevOps Engineer");
    record22.set("level", "Intermediate");
    record22.set("questionNumber", 33);
    record22.set("question", "What is blue-green deployment?");
    record22.set("explanation", "Blue-green deployment: two identical production environments. Blue (current), Green (new). Switch traffic to green after testing. Quick rollback if issues.");
    record22.set("practicalExample", "Blue: v1.0 serving traffic. Green: v1.1 deployed. Test green, switch traffic, keep blue for rollback");
    record22.set("keyPoints", ["Zero downtime", "Quick rollback", "Testing", "Risk reduction"]);
    record22.set("relatedTopics", ["Deployment strategies", "DevOps", "Reliability"]);
    record22.set("difficulty", "Medium");
    record22.set("category", "Deployment");
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
    record23.set("careerSlug", "devops-engineer");
    record23.set("careerName", "DevOps Engineer");
    record23.set("level", "Intermediate");
    record23.set("questionNumber", 34);
    record23.set("question", "What is canary deployment?");
    record23.set("explanation", "Canary deployment: gradually roll out new version to small percentage of users. Monitor for issues. Gradually increase percentage. Minimize risk.");
    record23.set("practicalExample", "Deploy v1.1 to 5% of users, monitor, increase to 25%, then 100%");
    record23.set("keyPoints", ["Gradual rollout", "Risk reduction", "Monitoring", "User feedback"]);
    record23.set("relatedTopics", ["Deployment strategies", "DevOps", "Reliability"]);
    record23.set("difficulty", "Medium");
    record23.set("category", "Deployment");
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
    record24.set("careerSlug", "devops-engineer");
    record24.set("careerName", "DevOps Engineer");
    record24.set("level", "Intermediate");
    record24.set("questionNumber", 35);
    record24.set("question", "What is rolling deployment?");
    record24.set("explanation", "Rolling deployment: gradually replace old instances with new. One instance at a time. No downtime. Slower than blue-green.");
    record24.set("practicalExample", "10 servers running v1.0. Replace 1 with v1.1, then 2, then 3... until all v1.1");
    record24.set("keyPoints", ["Gradual replacement", "No downtime", "Resource efficient", "Slower"]);
    record24.set("relatedTopics", ["Deployment strategies", "DevOps", "Reliability"]);
    record24.set("difficulty", "Medium");
    record24.set("category", "Deployment");
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
    record25.set("careerSlug", "devops-engineer");
    record25.set("careerName", "DevOps Engineer");
    record25.set("level", "Intermediate");
    record25.set("questionNumber", 36);
    record25.set("question", "What is load balancing?");
    record25.set("explanation", "Load balancing distributes traffic across multiple servers. Improves performance, availability, scalability. Types: round-robin, least connections, IP hash.");
    record25.set("practicalExample", "3 web servers, load balancer distributes requests evenly");
    record25.set("keyPoints", ["Traffic distribution", "Availability", "Performance", "Scalability"]);
    record25.set("relatedTopics", ["Infrastructure", "Networking", "Scalability"]);
    record25.set("difficulty", "Medium");
    record25.set("category", "Infrastructure");
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
    record26.set("careerSlug", "devops-engineer");
    record26.set("careerName", "DevOps Engineer");
    record26.set("level", "Intermediate");
    record26.set("questionNumber", 37);
    record26.set("question", "What is auto-scaling?");
    record26.set("explanation", "Auto-scaling automatically adjusts number of instances based on demand. Scales up when load increases, scales down when load decreases. Cost efficient.");
    record26.set("practicalExample", "CPU > 80% -> add 2 instances. CPU < 30% -> remove 1 instance");
    record26.set("keyPoints", ["Automatic adjustment", "Demand-based", "Cost efficiency", "Availability"]);
    record26.set("relatedTopics", ["Scalability", "Infrastructure", "Cloud"]);
    record26.set("difficulty", "Medium");
    record26.set("category", "Infrastructure");
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
    record27.set("careerSlug", "devops-engineer");
    record27.set("careerName", "DevOps Engineer");
    record27.set("level", "Intermediate");
    record27.set("questionNumber", 38);
    record27.set("question", "What is a reverse proxy?");
    record27.set("explanation", "Reverse proxy sits between clients and servers. Forwards requests to backend servers. Benefits: load balancing, caching, security, SSL termination.");
    record27.set("practicalExample", "Nginx reverse proxy forwards requests to 3 backend servers");
    record27.set("keyPoints", ["Request forwarding", "Load balancing", "Security", "Caching"]);
    record27.set("relatedTopics", ["Networking", "Infrastructure", "Security"]);
    record27.set("difficulty", "Medium");
    record27.set("category", "Networking");
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
    record28.set("careerSlug", "devops-engineer");
    record28.set("careerName", "DevOps Engineer");
    record28.set("level", "Intermediate");
    record28.set("questionNumber", 39);
    record28.set("question", "What is Nginx?");
    record28.set("explanation", "Nginx is web server and reverse proxy. High performance, low memory. Used for load balancing, caching, SSL termination.");
    record28.set("practicalExample", "Nginx listens on port 80, forwards to backend servers on port 8080");
    record28.set("keyPoints", ["Web server", "Reverse proxy", "Performance", "Lightweight"]);
    record28.set("relatedTopics", ["Web servers", "Networking", "Infrastructure"]);
    record28.set("difficulty", "Medium");
    record28.set("category", "Networking");
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
    record29.set("careerSlug", "devops-engineer");
    record29.set("careerName", "DevOps Engineer");
    record29.set("level", "Intermediate");
    record29.set("questionNumber", 40);
    record29.set("question", "What is the difference between horizontal and vertical scaling?");
    record29.set("explanation", "Horizontal: add more servers. Vertical: add more resources to existing server. Horizontal is more scalable, vertical has limits.");
    record29.set("practicalExample", "Horizontal: add 10 servers. Vertical: upgrade CPU from 4 to 8 cores");
    record29.set("keyPoints", ["More servers vs more resources", "Scalability", "Cost", "Complexity"]);
    record29.set("relatedTopics", ["Scalability", "Infrastructure", "Design"]);
    record29.set("difficulty", "Medium");
    record29.set("category", "Infrastructure");
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
    record30.set("careerSlug", "devops-engineer");
    record30.set("careerName", "DevOps Engineer");
    record30.set("level", "Advanced");
    record30.set("questionNumber", 41);
    record30.set("question", "What is GitOps?");
    record30.set("explanation", "GitOps uses Git as single source of truth for infrastructure and application. Changes via Git commits. Automated deployment. Enables version control for infrastructure.");
    record30.set("practicalExample", "Push Kubernetes manifests to Git -> ArgoCD detects -> applies to cluster");
    record30.set("keyPoints", ["Git as source of truth", "Automation", "Version control", "Declarative"]);
    record30.set("relatedTopics", ["DevOps", "IaC", "Kubernetes"]);
    record30.set("difficulty", "Hard");
    record30.set("category", "DevOps");
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
    record31.set("careerSlug", "devops-engineer");
    record31.set("careerName", "DevOps Engineer");
    record31.set("level", "Advanced");
    record31.set("questionNumber", 42);
    record31.set("question", "What is ArgoCD?");
    record31.set("explanation", "ArgoCD is GitOps tool for Kubernetes. Syncs cluster state with Git repository. Continuous deployment. Declarative configuration.");
    record31.set("practicalExample", "Update deployment.yaml in Git -> ArgoCD automatically updates Kubernetes cluster");
    record31.set("keyPoints", ["GitOps", "Kubernetes", "Continuous deployment", "Declarative"]);
    record31.set("relatedTopics", ["Kubernetes", "GitOps", "DevOps"]);
    record31.set("difficulty", "Hard");
    record31.set("category", "DevOps");
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
    record32.set("careerSlug", "devops-engineer");
    record32.set("careerName", "DevOps Engineer");
    record32.set("level", "Advanced");
    record32.set("questionNumber", 43);
    record32.set("question", "What is Helm?");
    record32.set("explanation", "Helm is package manager for Kubernetes. Packages applications as charts. Simplifies deployment, versioning, rollback.");
    record32.set("practicalExample", "Helm chart for WordPress includes deployment, service, configmap. Deploy with: helm install wordpress");
    record32.set("keyPoints", ["Package manager", "Charts", "Templating", "Versioning"]);
    record32.set("relatedTopics", ["Kubernetes", "Package management", "DevOps"]);
    record32.set("difficulty", "Hard");
    record32.set("category", "Kubernetes");
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
    record33.set("careerSlug", "devops-engineer");
    record33.set("careerName", "DevOps Engineer");
    record33.set("level", "Advanced");
    record33.set("questionNumber", 44);
    record33.set("question", "What is a Kubernetes pod?");
    record33.set("explanation", "Pod is smallest deployable unit in Kubernetes. Contains one or more containers. Containers share network namespace (same IP). Ephemeral.");
    record33.set("practicalExample", "Pod with nginx container. Pod gets IP, containers share it");
    record33.set("keyPoints", ["Smallest unit", "Container wrapper", "Shared network", "Ephemeral"]);
    record33.set("relatedTopics", ["Kubernetes", "Containers", "Orchestration"]);
    record33.set("difficulty", "Hard");
    record33.set("category", "Kubernetes");
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
    record34.set("careerSlug", "devops-engineer");
    record34.set("careerName", "DevOps Engineer");
    record34.set("level", "Advanced");
    record34.set("questionNumber", 45);
    record34.set("question", "What is a Kubernetes deployment?");
    record34.set("explanation", "Deployment manages pods. Ensures desired number of replicas running. Handles rolling updates, rollbacks. Declarative.");
    record34.set("practicalExample", "Deployment: 3 replicas of nginx. If pod dies, deployment creates new one");
    record34.set("keyPoints", ["Pod management", "Replicas", "Rolling updates", "Declarative"]);
    record34.set("relatedTopics", ["Kubernetes", "Orchestration", "DevOps"]);
    record34.set("difficulty", "Hard");
    record34.set("category", "Kubernetes");
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
    record35.set("careerSlug", "devops-engineer");
    record35.set("careerName", "DevOps Engineer");
    record35.set("level", "Advanced");
    record35.set("questionNumber", 46);
    record35.set("question", "What is a Kubernetes service?");
    record35.set("explanation", "Service exposes pods to network. Provides stable IP and DNS. Types: ClusterIP (internal), NodePort (external), LoadBalancer (cloud).");
    record35.set("practicalExample", "Service routes traffic to 3 nginx pods. Clients connect to service IP");
    record35.set("keyPoints", ["Pod exposure", "Stable IP", "Load balancing", "Service discovery"]);
    record35.set("relatedTopics", ["Kubernetes", "Networking", "Orchestration"]);
    record35.set("difficulty", "Hard");
    record35.set("category", "Kubernetes");
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
    record36.set("careerSlug", "devops-engineer");
    record36.set("careerName", "DevOps Engineer");
    record36.set("level", "Advanced");
    record36.set("questionNumber", 47);
    record36.set("question", "What is a Kubernetes ConfigMap and Secret?");
    record36.set("explanation", "ConfigMap stores non-sensitive configuration. Secret stores sensitive data (passwords, tokens). Both injected into pods as env vars or volumes.");
    record36.set("practicalExample", "ConfigMap: database host. Secret: database password");
    record36.set("keyPoints", ["Configuration management", "Sensitive data", "Injection", "Separation"]);
    record36.set("relatedTopics", ["Kubernetes", "Configuration", "Security"]);
    record36.set("difficulty", "Hard");
    record36.set("category", "Kubernetes");
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
    record37.set("careerSlug", "devops-engineer");
    record37.set("careerName", "DevOps Engineer");
    record37.set("level", "Advanced");
    record37.set("questionNumber", 48);
    record37.set("question", "What is a Kubernetes namespace?");
    record37.set("explanation", "Namespace is virtual cluster within cluster. Isolates resources. Enables multi-tenancy. Default namespace is 'default'.");
    record37.set("practicalExample", "Namespace 'production' and 'staging' with separate deployments");
    record37.set("keyPoints", ["Isolation", "Multi-tenancy", "Resource separation", "RBAC"]);
    record37.set("relatedTopics", ["Kubernetes", "Isolation", "Organization"]);
    record37.set("difficulty", "Hard");
    record37.set("category", "Kubernetes");
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
    record38.set("careerSlug", "devops-engineer");
    record38.set("careerName", "DevOps Engineer");
    record38.set("level", "Advanced");
    record38.set("questionNumber", 49);
    record38.set("question", "What is a Kubernetes ingress?");
    record38.set("explanation", "Ingress manages external access to services. Routes HTTP/HTTPS traffic. Provides load balancing, SSL termination, virtual hosting.");
    record38.set("practicalExample", "Ingress routes example.com to service A, api.example.com to service B");
    record38.set("keyPoints", ["External access", "Routing", "SSL termination", "Virtual hosting"]);
    record38.set("relatedTopics", ["Kubernetes", "Networking", "Routing"]);
    record38.set("difficulty", "Hard");
    record38.set("category", "Kubernetes");
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
    record39.set("careerSlug", "devops-engineer");
    record39.set("careerName", "DevOps Engineer");
    record39.set("level", "Advanced");
    record39.set("questionNumber", 50);
    record39.set("question", "What is a Kubernetes StatefulSet?");
    record39.set("explanation", "StatefulSet manages stateful applications. Maintains pod identity and ordering. Persistent storage. Used for databases, caches.");
    record39.set("practicalExample", "StatefulSet for MySQL: pod-0, pod-1, pod-2 with persistent volumes");
    record39.set("keyPoints", ["Stateful applications", "Pod identity", "Persistent storage", "Ordering"]);
    record39.set("relatedTopics", ["Kubernetes", "Stateful apps", "Storage"]);
    record39.set("difficulty", "Hard");
    record39.set("category", "Kubernetes");
  try {
    app.save(record39);
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
