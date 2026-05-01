/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerSkills");

  const record0 = new Record(collection);
    record0.set("skillName", "AWS");
    record0.set("category", "Cloud Platforms");
    record0.set("difficulty", "Advanced");
    record0.set("description", "Amazon Web Services cloud platform and comprehensive service offerings");
    record0.set("relatedCareers", ["cloud-architect"]);
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
    record1.set("skillName", "Azure");
    record1.set("category", "Cloud Platforms");
    record1.set("difficulty", "Advanced");
    record1.set("description", "Microsoft Azure cloud platform and enterprise services");
    record1.set("relatedCareers", ["cloud-architect"]);
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
    record2.set("skillName", "GCP");
    record2.set("category", "Cloud Platforms");
    record2.set("difficulty", "Advanced");
    record2.set("description", "Google Cloud Platform services and infrastructure");
    record2.set("relatedCareers", ["cloud-architect"]);
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
    record3.set("skillName", "EC2");
    record3.set("category", "Tools");
    record3.set("difficulty", "Intermediate");
    record3.set("description", "AWS Elastic Compute Cloud for virtual machine instances");
    record3.set("relatedCareers", ["cloud-architect"]);
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
    record4.set("skillName", "S3");
    record4.set("category", "Tools");
    record4.set("difficulty", "Intermediate");
    record4.set("description", "AWS Simple Storage Service for object storage");
    record4.set("relatedCareers", ["cloud-architect"]);
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
    record5.set("skillName", "RDS");
    record5.set("category", "Databases");
    record5.set("difficulty", "Intermediate");
    record5.set("description", "AWS Relational Database Service for managed databases");
    record5.set("relatedCareers", ["cloud-architect"]);
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
    record6.set("skillName", "Lambda");
    record6.set("category", "Tools");
    record6.set("difficulty", "Advanced");
    record6.set("description", "AWS Lambda for serverless computing and event-driven architecture");
    record6.set("relatedCareers", ["cloud-architect"]);
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
    record7.set("skillName", "VPC");
    record7.set("category", "Concepts");
    record7.set("difficulty", "Intermediate");
    record7.set("description", "Virtual Private Cloud for isolated network environments");
    record7.set("relatedCareers", ["cloud-architect"]);
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
    record8.set("skillName", "IAM");
    record8.set("category", "Security");
    record8.set("difficulty", "Intermediate");
    record8.set("description", "Identity and Access Management for user permissions and security");
    record8.set("relatedCareers", ["cloud-architect"]);
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
    record9.set("skillName", "CloudFormation");
    record9.set("category", "Tools");
    record9.set("difficulty", "Advanced");
    record9.set("description", "Infrastructure as Code tool for defining AWS resources");
    record9.set("relatedCareers", ["cloud-architect"]);
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
    record10.set("skillName", "Microservices");
    record10.set("category", "Concepts");
    record10.set("difficulty", "Advanced");
    record10.set("description", "Architecture pattern for building scalable applications with independent services");
    record10.set("relatedCareers", ["cloud-architect"]);
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
    record11.set("skillName", "Serverless");
    record11.set("category", "Concepts");
    record11.set("difficulty", "Advanced");
    record11.set("description", "Serverless computing architecture and event-driven design patterns");
    record11.set("relatedCareers", ["cloud-architect"]);
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
    record12.set("skillName", "Security");
    record12.set("category", "Security");
    record12.set("difficulty", "Advanced");
    record12.set("description", "Cloud security best practices, encryption, and compliance");
    record12.set("relatedCareers", ["cloud-architect"]);
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
    record13.set("skillName", "Cost Optimization");
    record13.set("category", "Concepts");
    record13.set("difficulty", "Advanced");
    record13.set("description", "Strategies for optimizing cloud infrastructure costs and resource utilization");
    record13.set("relatedCareers", ["cloud-architect"]);
  try {
    app.save(record13);
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
