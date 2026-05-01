/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerRoadmaps");

  const record0 = new Record(collection);
    record0.set("careerSlug", "devops-engineer");
    record0.set("phase", 1);
    record0.set("phaseTitle", "Linux & System Administration");
    record0.set("duration", "6-8 weeks");
    record0.set("skills", ["Linux Basics", "Shell Scripting", "System Administration", "Networking", "Security Fundamentals"]);
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
    record1.set("phase", 2);
    record1.set("phaseTitle", "Version Control & CI/CD");
    record1.set("duration", "6-8 weeks");
    record1.set("skills", ["Git", "GitHub", "GitLab", "Jenkins", "GitHub Actions", "CI/CD Pipelines", "Automation"]);
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
    record2.set("phase", 3);
    record2.set("phaseTitle", "Containerization & Orchestration");
    record2.set("duration", "8-10 weeks");
    record2.set("skills", ["Docker", "Kubernetes", "Container Registry", "Helm", "Container Security"]);
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
    record3.set("phase", 4);
    record3.set("phaseTitle", "Infrastructure as Code");
    record3.set("duration", "6-8 weeks");
    record3.set("skills", ["Terraform", "Ansible", "CloudFormation", "Infrastructure Automation", "Configuration Management"]);
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
    record4.set("phase", 5);
    record4.set("phaseTitle", "Cloud Platforms & Monitoring");
    record4.set("duration", "6-8 weeks");
    record4.set("skills", ["AWS", "Azure", "GCP", "Prometheus", "ELK Stack", "Logging", "Monitoring", "Alerting"]);
  try {
    app.save(record4);
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
