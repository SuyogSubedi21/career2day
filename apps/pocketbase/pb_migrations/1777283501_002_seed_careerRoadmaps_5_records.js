/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerRoadmaps");

  const record0 = new Record(collection);
    record0.set("careerSlug", "cloud-architect");
    record0.set("phase", 1);
    record0.set("phaseTitle", "Cloud Fundamentals");
    record0.set("duration", "6-8 weeks");
    record0.set("skills", ["Cloud Computing Basics", "AWS Fundamentals", "Azure Basics", "GCP Basics", "Cloud Services Models"]);
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
    record1.set("careerSlug", "cloud-architect");
    record1.set("phase", 2);
    record1.set("phaseTitle", "AWS Deep Dive");
    record1.set("duration", "8-10 weeks");
    record1.set("skills", ["EC2", "S3", "RDS", "VPC", "IAM", "Lambda", "CloudFormation", "AWS Architecture"]);
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
    record2.set("careerSlug", "cloud-architect");
    record2.set("phase", 3);
    record2.set("phaseTitle", "Advanced Cloud Services");
    record2.set("duration", "8-10 weeks");
    record2.set("skills", ["Microservices", "Serverless Architecture", "API Gateway", "Load Balancing", "Auto Scaling", "CDN"]);
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
    record3.set("careerSlug", "cloud-architect");
    record3.set("phase", 4);
    record3.set("phaseTitle", "Security & Compliance");
    record3.set("duration", "6-8 weeks");
    record3.set("skills", ["Cloud Security", "Identity Management", "Encryption", "Compliance Standards", "Security Best Practices"]);
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
    record4.set("careerSlug", "cloud-architect");
    record4.set("phase", 5);
    record4.set("phaseTitle", "Enterprise Architecture & Optimization");
    record4.set("duration", "6-8 weeks");
    record4.set("skills", ["Cost Optimization", "Performance Tuning", "Disaster Recovery", "High Availability", "Multi-Region Architecture"]);
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
