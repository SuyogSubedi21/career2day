/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerProjects");

  const record0 = new Record(collection);
    record0.set("careerSlug", "devops-engineer");
    record0.set("projectTitle", "Kubernetes Cluster Setup & Management");
    record0.set("description", "Set up a production-grade Kubernetes cluster, configure networking, storage, and deploy applications with proper scaling and monitoring.");
    record0.set("difficulty", "Advanced");
    record0.set("estimatedTime", "6-8 weeks");
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
    record1.set("projectTitle", "CI/CD Pipeline Implementation");
    record1.set("description", "Build a complete CI/CD pipeline using Jenkins or GitHub Actions, including automated testing, building, and deployment to multiple environments.");
    record1.set("difficulty", "Advanced");
    record1.set("estimatedTime", "5-7 weeks");
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
    record2.set("projectTitle", "Infrastructure as Code with Terraform");
    record2.set("description", "Create reusable Terraform modules to provision cloud infrastructure on AWS or Azure, including networking, compute, and database resources.");
    record2.set("difficulty", "Intermediate");
    record2.set("estimatedTime", "4-6 weeks");
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
    record3.set("projectTitle", "Docker Containerization Project");
    record3.set("description", "Containerize a multi-tier application using Docker, create Docker Compose files for local development, and push images to a registry.");
    record3.set("difficulty", "Intermediate");
    record3.set("estimatedTime", "3-5 weeks");
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
    record4.set("projectTitle", "Monitoring & Logging System");
    record4.set("description", "Implement comprehensive monitoring using Prometheus and Grafana, set up centralized logging with ELK Stack, and configure alerting rules.");
    record4.set("difficulty", "Advanced");
    record4.set("estimatedTime", "5-7 weeks");
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
    record5.set("projectTitle", "Multi-Cloud Deployment Strategy");
    record5.set("description", "Design and implement a multi-cloud deployment strategy across AWS and Azure, including disaster recovery and failover mechanisms.");
    record5.set("difficulty", "Advanced");
    record5.set("estimatedTime", "7-9 weeks");
  try {
    app.save(record5);
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
