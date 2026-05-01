/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("interviewQuestionsDatabase");

  const record0 = new Record(collection);
    record0.set("careerSlug", "devops-engineer");
    record0.set("careerName", "DevOps Engineer");
    record0.set("level", "Beginner");
    record0.set("questionNumber", 1);
    record0.set("question", "What is DevOps and what are its core principles?");
    record0.set("explanation", "DevOps combines development and operations to improve collaboration and automation. Core principles: automation, continuous integration/deployment, monitoring, infrastructure as code. Enables faster, more reliable releases.");
    record0.set("practicalExample", "Developers commit code -> CI/CD pipeline runs tests -> automatically deploys to production.");
    record0.set("keyPoints", ["DevOps combines dev and ops", "automation and CI/CD", "infrastructure as code"]);
    record0.set("relatedTopics", ["CI/CD", "automation", "infrastructure"]);
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
    record1.set("question", "What is the difference between Docker and virtual machines?");
    record1.set("explanation", "Docker containers are lightweight, share OS kernel, start quickly. VMs are heavier, have full OS, more isolated. Containers more efficient, VMs more isolated. Docker preferred for microservices.");
    record1.set("practicalExample", "Docker: container with app and dependencies. VM: full OS with app.");
    record1.set("keyPoints", ["containers lightweight", "VMs heavier", "containers share kernel"]);
    record1.set("relatedTopics", ["containerization", "virtualization", "Docker"]);
    record1.set("difficulty", "Simple");
    record1.set("category", "Containerization");
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
    record2.set("level", "Intermediate");
    record2.set("questionNumber", 3);
    record2.set("question", "Explain Kubernetes and its role in container orchestration.");
    record2.set("explanation", "Kubernetes orchestrates containers across clusters. Handles deployment, scaling, networking, storage. Automates container management. Essential for large-scale applications.");
    record2.set("practicalExample", "Deploy app to Kubernetes, it manages replicas, load balancing, updates.");
    record2.set("keyPoints", ["Kubernetes orchestrates containers", "handles scaling and deployment", "automates management"]);
    record2.set("relatedTopics", ["container orchestration", "Docker", "microservices"]);
    record2.set("difficulty", "Medium");
    record2.set("category", "Orchestration");
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
    record3.set("level", "Intermediate");
    record3.set("questionNumber", 4);
    record3.set("question", "What is CI/CD and how does it improve software delivery?");
    record3.set("explanation", "CI/CD automates testing and deployment. Continuous Integration: merge code frequently, run tests. Continuous Deployment: automatically deploy to production. Improves speed, reliability, and quality.");
    record3.set("practicalExample", "Push code -> CI runs tests -> CD deploys to production automatically.");
    record3.set("keyPoints", ["CI automates testing", "CD automates deployment", "improves speed and reliability"]);
    record3.set("relatedTopics", ["automation", "testing", "deployment"]);
    record3.set("difficulty", "Medium");
    record3.set("category", "CI/CD");
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
    record4.set("level", "Intermediate");
    record4.set("questionNumber", 5);
    record4.set("question", "Explain Infrastructure as Code (IaC) and its benefits.");
    record4.set("explanation", "IaC defines infrastructure in code (Terraform, Ansible). Enables version control, reproducibility, automation. Reduces manual errors and improves consistency.");
    record4.set("practicalExample", "Terraform: define servers, networks, databases in code. Apply to create infrastructure.");
    record4.set("keyPoints", ["IaC defines infrastructure in code", "enables version control", "improves consistency"]);
    record4.set("relatedTopics", ["Terraform", "Ansible", "automation"]);
    record4.set("difficulty", "Medium");
    record4.set("category", "Infrastructure");
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
    record5.set("question", "What are Linux commands essential for DevOps?");
    record5.set("explanation", "Essential commands: ls, cd, mkdir, rm, cp, mv, grep, find, chmod, chown, ps, kill, systemctl, journalctl. Understanding Linux is fundamental for DevOps.");
    record5.set("practicalExample", "ls -la (list files), grep 'error' log.txt (search), ps aux (list processes).");
    record5.set("keyPoints", ["file operations", "process management", "permissions"]);
    record5.set("relatedTopics", ["Linux", "shell scripting", "system administration"]);
    record5.set("difficulty", "Simple");
    record5.set("category", "Linux");
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
    record6.set("level", "Intermediate");
    record6.set("questionNumber", 7);
    record6.set("question", "Explain networking concepts essential for DevOps.");
    record6.set("explanation", "Key concepts: IP addresses, DNS, ports, protocols (TCP/UDP), firewalls, load balancing. Understanding networking is crucial for infrastructure management.");
    record6.set("practicalExample", "Configure firewall rules, set up DNS, manage load balancer.");
    record6.set("keyPoints", ["IP addressing", "DNS", "firewalls", "load balancing"]);
    record6.set("relatedTopics", ["networking", "security", "infrastructure"]);
    record6.set("difficulty", "Medium");
    record6.set("category", "Networking");
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
    record7.set("level", "Advanced");
    record7.set("questionNumber", 8);
    record7.set("question", "What is monitoring and logging in DevOps?");
    record7.set("explanation", "Monitoring tracks system health and performance. Logging records events for debugging. Tools: Prometheus (metrics), ELK (logs), Grafana (visualization). Essential for production systems.");
    record7.set("practicalExample", "Prometheus scrapes metrics, Grafana visualizes, alerts on thresholds.");
    record7.set("keyPoints", ["monitoring tracks health", "logging records events", "alerting on anomalies"]);
    record7.set("relatedTopics", ["Prometheus", "ELK", "Grafana"]);
    record7.set("difficulty", "Hard");
    record7.set("category", "Monitoring");
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
    record8.set("level", "Advanced");
    record8.set("questionNumber", 9);
    record8.set("question", "Explain the concept of infrastructure scaling.");
    record8.set("explanation", "Vertical scaling: add resources to single server. Horizontal scaling: add more servers. Horizontal preferred for distributed systems. Auto-scaling adjusts based on demand.");
    record8.set("practicalExample", "Vertical: upgrade server RAM. Horizontal: add more servers to load balancer.");
    record8.set("keyPoints", ["vertical adds resources", "horizontal adds servers", "auto-scaling adjusts demand"]);
    record8.set("relatedTopics", ["load balancing", "auto-scaling", "infrastructure"]);
    record8.set("difficulty", "Hard");
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
    record9.set("level", "Intermediate");
    record9.set("questionNumber", 10);
    record9.set("question", "What is a reverse proxy and how is it used?");
    record9.set("explanation", "Reverse proxy sits between clients and servers, forwards requests. Used for load balancing, SSL termination, caching. Tools: Nginx, HAProxy. Improves performance and security.");
    record9.set("practicalExample", "Client -> Nginx (reverse proxy) -> Server 1/2/3. Nginx distributes requests.");
    record9.set("keyPoints", ["reverse proxy forwards requests", "load balancing", "SSL termination"]);
    record9.set("relatedTopics", ["Nginx", "load balancing", "security"]);
    record9.set("difficulty", "Medium");
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
    record10.set("questionNumber", 11);
    record10.set("question", "Explain the concept of blue-green deployment.");
    record10.set("explanation", "Blue-green maintains two identical environments. Deploy to inactive environment, test, switch traffic. Enables quick rollback if issues. Zero downtime deployment.");
    record10.set("practicalExample", "Blue (production) -> deploy to Green -> test -> switch traffic to Green.");
    record10.set("keyPoints", ["two identical environments", "zero downtime", "quick rollback"]);
    record10.set("relatedTopics", ["deployment", "CI/CD", "DevOps"]);
    record10.set("difficulty", "Medium");
    record10.set("category", "Deployment");
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
    record11.set("questionNumber", 12);
    record11.set("question", "What is canary deployment and when to use it?");
    record11.set("explanation", "Canary deployment gradually rolls out to subset of users. Monitor for issues before full rollout. Safer than big-bang deployment. Use for high-risk changes.");
    record11.set("practicalExample", "Deploy to 10% users, monitor, gradually increase to 100%.");
    record11.set("keyPoints", ["gradual rollout", "monitor for issues", "safer than big-bang"]);
    record11.set("relatedTopics", ["deployment", "CI/CD", "monitoring"]);
    record11.set("difficulty", "Medium");
    record11.set("category", "Deployment");
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
    record12.set("level", "Advanced");
    record12.set("questionNumber", 13);
    record12.set("question", "Explain the concept of disaster recovery and high availability.");
    record12.set("explanation", "Disaster recovery: plan to recover from failures. High availability: system continues operating despite failures. Use replication, backups, failover. RPO (Recovery Point Objective), RTO (Recovery Time Objective).");
    record12.set("practicalExample", "Database replication, automated failover, regular backups.");
    record12.set("keyPoints", ["disaster recovery planning", "high availability", "RPO and RTO"]);
    record12.set("relatedTopics", ["backup", "replication", "failover"]);
    record12.set("difficulty", "Hard");
    record12.set("category", "Reliability");
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
    record13.set("questionNumber", 14);
    record13.set("question", "What is a configuration management tool and why is it important?");
    record13.set("explanation", "Configuration management tools (Ansible, Chef, Puppet) automate server configuration. Ensures consistency across servers. Enables reproducibility and version control.");
    record13.set("practicalExample", "Ansible playbook: install packages, configure services, deploy app.");
    record13.set("keyPoints", ["automates configuration", "ensures consistency", "enables version control"]);
    record13.set("relatedTopics", ["Ansible", "Chef", "Puppet"]);
    record13.set("difficulty", "Medium");
    record13.set("category", "Configuration");
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
    record14.set("level", "Advanced");
    record14.set("questionNumber", 15);
    record14.set("question", "Explain the concept of secrets management.");
    record14.set("explanation", "Secrets management securely stores and manages sensitive data (passwords, API keys). Tools: HashiCorp Vault, AWS Secrets Manager. Never commit secrets to version control.");
    record14.set("practicalExample", "Store database password in Vault, application retrieves at runtime.");
    record14.set("keyPoints", ["secure storage", "never commit secrets", "runtime retrieval"]);
    record14.set("relatedTopics", ["security", "Vault", "secrets"]);
    record14.set("difficulty", "Hard");
    record14.set("category", "Security");
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
    record15.set("questionNumber", 16);
    record15.set("question", "What is a container registry and how is it used?");
    record15.set("explanation", "Container registry stores Docker images. Examples: Docker Hub, ECR, GCR. Push images after building, pull when deploying. Enables version control and distribution.");
    record15.set("practicalExample", "Build image -> push to ECR -> pull from ECR when deploying.");
    record15.set("keyPoints", ["stores Docker images", "version control", "distribution"]);
    record15.set("relatedTopics", ["Docker", "container", "registry"]);
    record15.set("difficulty", "Medium");
    record15.set("category", "Containerization");
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
    record16.set("level", "Advanced");
    record16.set("questionNumber", 17);
    record16.set("question", "Explain the concept of service mesh.");
    record16.set("explanation", "Service mesh manages service-to-service communication. Handles routing, load balancing, security, observability. Tools: Istio, Linkerd. Adds complexity but improves reliability.");
    record16.set("practicalExample", "Istio: manages traffic between microservices, enables circuit breaking, retries.");
    record16.set("keyPoints", ["manages service communication", "routing and load balancing", "observability"]);
    record16.set("relatedTopics", ["microservices", "Istio", "networking"]);
    record16.set("difficulty", "Hard");
    record16.set("category", "Microservices");
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
    record17.set("questionNumber", 18);
    record17.set("question", "What is a webhook and how is it used in CI/CD?");
    record17.set("explanation", "Webhooks are HTTP callbacks triggered by events. In CI/CD: code push triggers webhook to start pipeline. Enables automation and integration.");
    record17.set("practicalExample", "GitHub push -> webhook -> Jenkins starts build pipeline.");
    record17.set("keyPoints", ["HTTP callbacks", "triggered by events", "enables automation"]);
    record17.set("relatedTopics", ["CI/CD", "automation", "integration"]);
    record17.set("difficulty", "Medium");
    record17.set("category", "CI/CD");
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
    record18.set("level", "Advanced");
    record18.set("questionNumber", 19);
    record18.set("question", "Explain the concept of GitOps.");
    record18.set("explanation", "GitOps uses Git as single source of truth for infrastructure and application state. Changes via Git commits, automatically applied. Enables version control and audit trail.");
    record18.set("practicalExample", "Update deployment.yaml in Git -> ArgoCD detects change -> applies to cluster.");
    record18.set("keyPoints", ["Git as source of truth", "automatic application", "audit trail"]);
    record18.set("relatedTopics", ["Git", "CI/CD", "infrastructure"]);
    record18.set("difficulty", "Hard");
    record18.set("category", "DevOps");
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
    record19.set("questionNumber", 20);
    record19.set("question", "What is a load balancer and how does it work?");
    record19.set("explanation", "Load balancer distributes requests across servers. Algorithms: round-robin, least connections, IP hash. Improves availability and scalability. Can be hardware or software.");
    record19.set("practicalExample", "Requests distributed to Server 1, Server 2, Server 3 in rotation.");
    record19.set("keyPoints", ["distributes requests", "improves availability", "various algorithms"]);
    record19.set("relatedTopics", ["infrastructure", "scaling", "networking"]);
    record19.set("difficulty", "Medium");
    record19.set("category", "Infrastructure");
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
    record20.set("level", "Advanced");
    record20.set("questionNumber", 21);
    record20.set("question", "Explain the concept of observability in DevOps.");
    record20.set("explanation", "Observability: ability to understand system state from external outputs. Three pillars: metrics, logs, traces. Enables debugging and understanding system behavior.");
    record20.set("practicalExample", "Metrics: CPU usage. Logs: error messages. Traces: request flow across services.");
    record20.set("keyPoints", ["three pillars: metrics, logs, traces", "understand system state", "enables debugging"]);
    record20.set("relatedTopics", ["monitoring", "logging", "distributed tracing"]);
    record20.set("difficulty", "Hard");
    record20.set("category", "Observability");
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
    record21.set("questionNumber", 22);
    record21.set("question", "What is a persistent volume in Kubernetes?");
    record21.set("explanation", "Persistent volumes store data that survives pod restarts. Decouples storage from compute. Types: local, NFS, cloud storage. Essential for stateful applications.");
    record21.set("practicalExample", "Database pod uses persistent volume to store data across restarts.");
    record21.set("keyPoints", ["survives pod restarts", "decouples storage", "various types"]);
    record21.set("relatedTopics", ["Kubernetes", "storage", "stateful applications"]);
    record21.set("difficulty", "Medium");
    record21.set("category", "Kubernetes");
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
    record22.set("level", "Advanced");
    record22.set("questionNumber", 23);
    record22.set("question", "Explain the concept of network policies in Kubernetes.");
    record22.set("explanation", "Network policies control traffic between pods. Restrict ingress/egress. Improves security by default-deny approach. Essential for multi-tenant clusters.");
    record22.set("practicalExample", "Allow traffic from frontend to backend, deny all other traffic.");
    record22.set("keyPoints", ["control pod traffic", "ingress/egress rules", "improves security"]);
    record22.set("relatedTopics", ["Kubernetes", "networking", "security"]);
    record22.set("difficulty", "Hard");
    record22.set("category", "Kubernetes");
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
    record23.set("questionNumber", 24);
    record23.set("question", "What is a Helm chart and how is it used?");
    record23.set("explanation", "Helm charts package Kubernetes applications. Templates for easy deployment and configuration. Enables version control and reusability. Simplifies Kubernetes deployments.");
    record23.set("practicalExample", "Helm chart: define deployment, service, configmap. Deploy with helm install.");
    record23.set("keyPoints", ["packages Kubernetes apps", "templates for configuration", "enables reusability"]);
    record23.set("relatedTopics", ["Kubernetes", "Helm", "deployment"]);
    record23.set("difficulty", "Medium");
    record23.set("category", "Kubernetes");
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
    record24.set("level", "Advanced");
    record24.set("questionNumber", 25);
    record24.set("question", "Explain the concept of stateful vs stateless applications.");
    record24.set("explanation", "Stateless: no client context stored, easy to scale. Stateful: maintains context, harder to scale. Prefer stateless for distributed systems. Use external storage for state.");
    record24.set("practicalExample", "Stateless: each request contains all info. Stateful: server remembers session.");
    record24.set("keyPoints", ["stateless easy to scale", "stateful maintains context", "prefer stateless"]);
    record24.set("relatedTopics", ["scalability", "architecture", "design"]);
    record24.set("difficulty", "Hard");
    record24.set("category", "Architecture");
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
    record25.set("questionNumber", 26);
    record25.set("question", "What is a namespace in Kubernetes?");
    record25.set("explanation", "Namespaces partition cluster resources. Enable multi-tenancy and resource isolation. Default namespace for general use. Useful for separating environments.");
    record25.set("practicalExample", "Namespaces: production, staging, development. Each isolated.");
    record25.set("keyPoints", ["partition resources", "enable multi-tenancy", "resource isolation"]);
    record25.set("relatedTopics", ["Kubernetes", "resource management"]);
    record25.set("difficulty", "Medium");
    record25.set("category", "Kubernetes");
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
    record26.set("level", "Advanced");
    record26.set("questionNumber", 27);
    record26.set("question", "Explain the concept of resource quotas in Kubernetes.");
    record26.set("explanation", "Resource quotas limit resource usage per namespace. Prevent resource hogging. Ensure fair resource distribution. Essential for multi-tenant clusters.");
    record26.set("practicalExample", "Limit CPU to 10 cores, memory to 20GB per namespace.");
    record26.set("keyPoints", ["limit resource usage", "prevent hogging", "fair distribution"]);
    record26.set("relatedTopics", ["Kubernetes", "resource management"]);
    record26.set("difficulty", "Hard");
    record26.set("category", "Kubernetes");
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
    record27.set("questionNumber", 28);
    record27.set("question", "What is a DaemonSet in Kubernetes?");
    record27.set("explanation", "DaemonSet ensures pod runs on every node. Used for logging, monitoring, networking agents. Automatically adds pod to new nodes.");
    record27.set("practicalExample", "DaemonSet for Prometheus node exporter on every node.");
    record27.set("keyPoints", ["runs on every node", "automatic on new nodes", "used for agents"]);
    record27.set("relatedTopics", ["Kubernetes", "pod management"]);
    record27.set("difficulty", "Medium");
    record27.set("category", "Kubernetes");
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
    record28.set("level", "Advanced");
    record28.set("questionNumber", 29);
    record28.set("question", "Explain the concept of ingress in Kubernetes.");
    record28.set("explanation", "Ingress manages external access to services. Routes HTTP/HTTPS traffic. Enables virtual hosting and path-based routing. Requires ingress controller.");
    record28.set("practicalExample", "Route example.com to service A, api.example.com to service B.");
    record28.set("keyPoints", ["manages external access", "HTTP/HTTPS routing", "virtual hosting"]);
    record28.set("relatedTopics", ["Kubernetes", "networking", "routing"]);
    record28.set("difficulty", "Hard");
    record28.set("category", "Kubernetes");
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
    record29.set("questionNumber", 30);
    record29.set("question", "What is a ConfigMap in Kubernetes?");
    record29.set("explanation", "ConfigMap stores non-sensitive configuration data. Decouples config from code. Can be mounted as files or environment variables. Enables easy configuration changes.");
    record29.set("practicalExample", "ConfigMap: database host, API endpoint. Pod reads at startup.");
    record29.set("keyPoints", ["stores configuration", "decouples from code", "easy changes"]);
    record29.set("relatedTopics", ["Kubernetes", "configuration"]);
    record29.set("difficulty", "Medium");
    record29.set("category", "Kubernetes");
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
    record30.set("level", "Intermediate");
    record30.set("questionNumber", 31);
    record30.set("question", "What is a Secret in Kubernetes?");
    record30.set("explanation", "Secret stores sensitive data (passwords, API keys). Base64 encoded by default. Should use encryption at rest. Never commit to version control.");
    record30.set("practicalExample", "Secret: database password. Pod reads at startup.");
    record30.set("keyPoints", ["stores sensitive data", "base64 encoded", "use encryption"]);
    record30.set("relatedTopics", ["Kubernetes", "security", "secrets"]);
    record30.set("difficulty", "Medium");
    record30.set("category", "Kubernetes");
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
    record31.set("questionNumber", 32);
    record31.set("question", "Explain the concept of pod disruption budgets.");
    record31.set("explanation", "Pod disruption budgets ensure minimum availability during disruptions. Prevent simultaneous pod evictions. Essential for high-availability applications.");
    record31.set("practicalExample", "PDB: minimum 2 pods available. Prevents evicting more than 1 pod.");
    record31.set("keyPoints", ["ensure minimum availability", "prevent simultaneous evictions", "high availability"]);
    record31.set("relatedTopics", ["Kubernetes", "reliability"]);
    record31.set("difficulty", "Hard");
    record31.set("category", "Kubernetes");
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
    record32.set("level", "Intermediate");
    record32.set("questionNumber", 33);
    record32.set("question", "What is a StatefulSet in Kubernetes?");
    record32.set("explanation", "StatefulSet manages stateful applications. Maintains stable pod identities and persistent storage. Used for databases, caches. Ordered deployment and scaling.");
    record32.set("practicalExample", "StatefulSet for MongoDB: pod-0, pod-1, pod-2 with persistent volumes.");
    record32.set("keyPoints", ["manages stateful apps", "stable identities", "persistent storage"]);
    record32.set("relatedTopics", ["Kubernetes", "stateful applications"]);
    record32.set("difficulty", "Medium");
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
    record33.set("questionNumber", 34);
    record33.set("question", "Explain the concept of horizontal pod autoscaling.");
    record33.set("explanation", "HPA automatically scales pods based on metrics (CPU, memory). Monitors metrics, scales up/down. Improves resource efficiency and responsiveness.");
    record33.set("practicalExample", "HPA: scale to 10 pods when CPU > 80%, scale down when < 20%.");
    record33.set("keyPoints", ["automatic scaling", "based on metrics", "improves efficiency"]);
    record33.set("relatedTopics", ["Kubernetes", "auto-scaling"]);
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
    record34.set("level", "Intermediate");
    record34.set("questionNumber", 35);
    record34.set("question", "What is a job in Kubernetes?");
    record34.set("explanation", "Job runs pods to completion. Used for batch processing, one-time tasks. Retries on failure. Cleans up after completion.");
    record34.set("practicalExample", "Job: process data file, generate report, complete.");
    record34.set("keyPoints", ["runs to completion", "batch processing", "retries on failure"]);
    record34.set("relatedTopics", ["Kubernetes", "batch processing"]);
    record34.set("difficulty", "Medium");
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
    record35.set("questionNumber", 36);
    record35.set("question", "Explain the concept of liveness and readiness probes.");
    record35.set("explanation", "Liveness probe: is pod alive? Restart if not. Readiness probe: is pod ready for traffic? Remove from load balancer if not. Essential for reliability.");
    record35.set("practicalExample", "Liveness: HTTP GET /health. Readiness: check database connection.");
    record35.set("keyPoints", ["liveness checks if alive", "readiness checks if ready", "automatic recovery"]);
    record35.set("relatedTopics", ["Kubernetes", "health checks", "reliability"]);
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
    record36.set("level", "Intermediate");
    record36.set("questionNumber", 37);
    record36.set("question", "What is a Docker image and how do you build one?");
    record36.set("explanation", "Docker image is a blueprint for containers. Built from Dockerfile with instructions. Layers enable caching and efficiency. Push to registry for distribution.");
    record36.set("practicalExample", "Dockerfile: FROM node, COPY app, RUN npm install, CMD npm start.");
    record36.set("keyPoints", ["blueprint for containers", "built from Dockerfile", "layers enable caching"]);
    record36.set("relatedTopics", ["Docker", "containerization"]);
    record36.set("difficulty", "Medium");
    record36.set("category", "Docker");
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
    record37.set("level", "Intermediate");
    record37.set("questionNumber", 38);
    record37.set("question", "What is Docker Compose and when to use it?");
    record37.set("explanation", "Docker Compose defines multi-container applications in YAML. Simplifies local development and testing. Not for production. Use for development environments.");
    record37.set("practicalExample", "docker-compose.yml: define app, database, cache services. Run with docker-compose up.");
    record37.set("keyPoints", ["defines multi-container apps", "simplifies development", "not for production"]);
    record37.set("relatedTopics", ["Docker", "containerization"]);
    record37.set("difficulty", "Medium");
    record37.set("category", "Docker");
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
    record38.set("questionNumber", 39);
    record38.set("question", "Explain the concept of container security.");
    record38.set("explanation", "Container security: run as non-root, minimal base images, scan for vulnerabilities, network policies. Containers share kernel, so security is critical.");
    record38.set("practicalExample", "Use distroless images, run as non-root user, scan with Trivy.");
    record38.set("keyPoints", ["run as non-root", "minimal images", "vulnerability scanning"]);
    record38.set("relatedTopics", ["Docker", "security", "Kubernetes"]);
    record38.set("difficulty", "Hard");
    record38.set("category", "Security");
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
    record39.set("level", "Intermediate");
    record39.set("questionNumber", 40);
    record39.set("question", "What is a volume in Docker?");
    record39.set("explanation", "Volumes persist data outside containers. Survive container deletion. Types: named volumes, bind mounts. Essential for databases and stateful apps.");
    record39.set("practicalExample", "Docker volume: docker run -v myvolume:/data. Data persists.");
    record39.set("keyPoints", ["persist data", "survive deletion", "various types"]);
    record39.set("relatedTopics", ["Docker", "storage", "persistence"]);
    record39.set("difficulty", "Medium");
    record39.set("category", "Docker");
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
    record40.set("careerSlug", "devops-engineer");
    record40.set("careerName", "DevOps Engineer");
    record40.set("level", "Advanced");
    record40.set("questionNumber", 41);
    record40.set("question", "Explain the concept of multi-stage Docker builds.");
    record40.set("explanation", "Multi-stage builds reduce image size by using multiple FROM statements. Build in one stage, copy artifacts to final stage. Reduces final image size significantly.");
    record40.set("practicalExample", "Stage 1: build app. Stage 2: copy binary from stage 1, run app.");
    record40.set("keyPoints", ["reduces image size", "multiple stages", "copy artifacts"]);
    record40.set("relatedTopics", ["Docker", "optimization"]);
    record40.set("difficulty", "Hard");
    record40.set("category", "Docker");
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
    record41.set("careerSlug", "devops-engineer");
    record41.set("careerName", "DevOps Engineer");
    record41.set("level", "Intermediate");
    record41.set("questionNumber", 42);
    record41.set("question", "What is a Dockerfile and what are common instructions?");
    record41.set("explanation", "Dockerfile defines how to build Docker image. Common instructions: FROM (base image), RUN (execute), COPY (copy files), EXPOSE (port), CMD (default command).");
    record41.set("practicalExample", "FROM node:16, COPY . /app, RUN npm install, EXPOSE 3000, CMD npm start.");
    record41.set("keyPoints", ["defines image build", "common instructions", "layer-based"]);
    record41.set("relatedTopics", ["Docker", "containerization"]);
    record41.set("difficulty", "Medium");
    record41.set("category", "Docker");
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
    record42.set("careerSlug", "devops-engineer");
    record42.set("careerName", "DevOps Engineer");
    record42.set("level", "Advanced");
    record42.set("questionNumber", 43);
    record42.set("question", "Explain the concept of container networking.");
    record42.set("explanation", "Container networking: bridge (default), host, overlay. Containers communicate via networks. Port mapping exposes ports. Essential for multi-container applications.");
    record42.set("practicalExample", "Docker network: create network, connect containers, communicate via service names.");
    record42.set("keyPoints", ["bridge, host, overlay networks", "port mapping", "service discovery"]);
    record42.set("relatedTopics", ["Docker", "networking"]);
    record42.set("difficulty", "Hard");
    record42.set("category", "Docker");
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
    record43.set("careerSlug", "devops-engineer");
    record43.set("careerName", "DevOps Engineer");
    record43.set("level", "Intermediate");
    record43.set("questionNumber", 44);
    record43.set("question", "What is a Jenkins pipeline and how is it used?");
    record43.set("explanation", "Jenkins pipeline defines CI/CD workflow in code. Stages: build, test, deploy. Enables version control and reproducibility. Supports parallel execution.");
    record43.set("practicalExample", "Pipeline: checkout -> build -> test -> deploy stages.");
    record43.set("keyPoints", ["defines CI/CD workflow", "version control", "parallel execution"]);
    record43.set("relatedTopics", ["Jenkins", "CI/CD", "automation"]);
    record43.set("difficulty", "Medium");
    record43.set("category", "CI/CD");
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
    record44.set("careerSlug", "devops-engineer");
    record44.set("careerName", "DevOps Engineer");
    record44.set("level", "Advanced");
    record44.set("questionNumber", 45);
    record44.set("question", "Explain the concept of artifact management.");
    record44.set("explanation", "Artifact management stores build outputs (binaries, packages). Tools: Artifactory, Nexus. Enables version control and distribution. Essential for reproducible builds.");
    record44.set("practicalExample", "Build app -> store artifact in Artifactory -> deploy from artifact.");
    record44.set("keyPoints", ["stores build outputs", "version control", "distribution"]);
    record44.set("relatedTopics", ["CI/CD", "artifact repository"]);
    record44.set("difficulty", "Hard");
    record44.set("category", "CI/CD");
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
    record45.set("careerSlug", "devops-engineer");
    record45.set("careerName", "DevOps Engineer");
    record45.set("level", "Intermediate");
    record45.set("questionNumber", 46);
    record45.set("question", "What is a webhook in Jenkins?");
    record45.set("explanation", "Webhook triggers Jenkins job on events (code push, PR). Enables automation. GitHub/GitLab sends webhook to Jenkins.");
    record45.set("practicalExample", "GitHub push -> webhook -> Jenkins starts build pipeline.");
    record45.set("keyPoints", ["triggers on events", "enables automation", "GitHub integration"]);
    record45.set("relatedTopics", ["Jenkins", "CI/CD", "automation"]);
    record45.set("difficulty", "Medium");
    record45.set("category", "CI/CD");
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
    record46.set("careerSlug", "devops-engineer");
    record46.set("careerName", "DevOps Engineer");
    record46.set("level", "Advanced");
    record46.set("questionNumber", 47);
    record46.set("question", "Explain the concept of infrastructure testing.");
    record46.set("explanation", "Infrastructure testing validates infrastructure code. Tools: Terraform testing, ServerSpec, InSpec. Ensures infrastructure meets requirements. Prevents configuration drift.");
    record46.set("practicalExample", "Test: server has required packages, ports are open, services running.");
    record46.set("keyPoints", ["validates infrastructure", "prevents drift", "automated testing"]);
    record46.set("relatedTopics", ["IaC", "testing", "infrastructure"]);
    record46.set("difficulty", "Hard");
    record46.set("category", "Testing");
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
    record47.set("careerSlug", "devops-engineer");
    record47.set("careerName", "DevOps Engineer");
    record47.set("level", "Intermediate");
    record47.set("questionNumber", 48);
    record47.set("question", "What is a Terraform state file and why is it important?");
    record47.set("explanation", "State file tracks infrastructure state. Enables Terraform to know what exists. Must be stored securely (remote backend). Never commit to version control.");
    record47.set("practicalExample", "terraform.tfstate: stores resource IDs and attributes.");
    record47.set("keyPoints", ["tracks infrastructure state", "remote backend", "never commit"]);
    record47.set("relatedTopics", ["Terraform", "IaC", "state management"]);
    record47.set("difficulty", "Medium");
    record47.set("category", "Infrastructure");
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
    record48.set("careerSlug", "devops-engineer");
    record48.set("careerName", "DevOps Engineer");
    record48.set("level", "Advanced");
    record48.set("questionNumber", 49);
    record48.set("question", "Explain the concept of cost optimization in cloud.");
    record48.set("explanation", "Cost optimization: right-sizing, reserved instances, spot instances, auto-scaling. Monitor costs with tools like CloudWatch. Significant savings possible.");
    record48.set("practicalExample", "Use spot instances for non-critical workloads, reserved instances for baseline.");
    record48.set("keyPoints", ["right-sizing", "reserved instances", "spot instances"]);
    record48.set("relatedTopics", ["cloud", "cost management", "optimization"]);
    record48.set("difficulty", "Hard");
    record48.set("category", "Cloud");
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
    record49.set("careerSlug", "devops-engineer");
    record49.set("careerName", "DevOps Engineer");
    record49.set("level", "Intermediate");
    record49.set("questionNumber", 50);
    record49.set("question", "What is a cloud provider and what are major ones?");
    record49.set("explanation", "Cloud providers offer computing resources on demand. Major: AWS, Azure, GCP. Services: compute, storage, networking, databases. Choose based on needs and expertise.");
    record49.set("practicalExample", "AWS: EC2 (compute), S3 (storage), RDS (database).");
    record49.set("keyPoints", ["on-demand resources", "major providers", "various services"]);
    record49.set("relatedTopics", ["cloud", "AWS", "Azure", "GCP"]);
    record49.set("difficulty", "Simple");
    record49.set("category", "Cloud");
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
