/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerSkills");

  const record0 = new Record(collection);
    record0.set("skillName", "Linux");
    record0.set("category", "Languages");
    record0.set("difficulty", "Beginner");
    record0.set("description", "Linux operating system fundamentals and command-line operations");
    record0.set("relatedCareers", ["devops-engineer"]);
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
    record1.set("skillName", "Shell Scripting");
    record1.set("category", "Languages");
    record1.set("difficulty", "Intermediate");
    record1.set("description", "Writing shell scripts for automation and system administration tasks");
    record1.set("relatedCareers", ["devops-engineer"]);
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
    record2.set("skillName", "Docker");
    record2.set("category", "Tools");
    record2.set("difficulty", "Intermediate");
    record2.set("description", "Containerization platform for packaging and deploying applications");
    record2.set("relatedCareers", ["devops-engineer"]);
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
    record3.set("skillName", "Kubernetes");
    record3.set("category", "Tools");
    record3.set("difficulty", "Advanced");
    record3.set("description", "Container orchestration platform for managing containerized applications at scale");
    record3.set("relatedCareers", ["devops-engineer"]);
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
    record4.set("skillName", "Jenkins");
    record4.set("category", "Tools");
    record4.set("difficulty", "Intermediate");
    record4.set("description", "Continuous integration and continuous deployment automation server");
    record4.set("relatedCareers", ["devops-engineer"]);
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
    record5.set("skillName", "Git");
    record5.set("category", "Tools");
    record5.set("difficulty", "Beginner");
    record5.set("description", "Version control system for code management and collaboration");
    record5.set("relatedCareers", ["devops-engineer"]);
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
    record6.set("skillName", "Terraform");
    record6.set("category", "Tools");
    record6.set("difficulty", "Advanced");
    record6.set("description", "Infrastructure as Code tool for provisioning cloud resources");
    record6.set("relatedCareers", ["devops-engineer"]);
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
    record7.set("skillName", "Ansible");
    record7.set("category", "Tools");
    record7.set("difficulty", "Intermediate");
    record7.set("description", "Configuration management and infrastructure automation tool");
    record7.set("relatedCareers", ["devops-engineer"]);
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
    record8.set("skillName", "AWS");
    record8.set("category", "Cloud Platforms");
    record8.set("difficulty", "Advanced");
    record8.set("description", "Amazon Web Services cloud platform and services");
    record8.set("relatedCareers", ["devops-engineer"]);
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
    record9.set("skillName", "Azure");
    record9.set("category", "Cloud Platforms");
    record9.set("difficulty", "Advanced");
    record9.set("description", "Microsoft Azure cloud platform and services");
    record9.set("relatedCareers", ["devops-engineer"]);
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
    record10.set("skillName", "Prometheus");
    record10.set("category", "Tools");
    record10.set("difficulty", "Advanced");
    record10.set("description", "Monitoring and alerting system for infrastructure and applications");
    record10.set("relatedCareers", ["devops-engineer"]);
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
    record11.set("skillName", "ELK Stack");
    record11.set("category", "Tools");
    record11.set("difficulty", "Advanced");
    record11.set("description", "Elasticsearch, Logstash, Kibana stack for log aggregation and analysis");
    record11.set("relatedCareers", ["devops-engineer"]);
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
    record12.set("skillName", "CI/CD");
    record12.set("category", "Concepts");
    record12.set("difficulty", "Intermediate");
    record12.set("description", "Continuous Integration and Continuous Deployment practices and pipelines");
    record12.set("relatedCareers", ["devops-engineer"]);
  try {
    app.save(record12);
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
