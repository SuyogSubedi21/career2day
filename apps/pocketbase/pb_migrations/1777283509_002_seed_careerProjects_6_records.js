/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerProjects");

  const record0 = new Record(collection);
    record0.set("careerSlug", "cloud-architect");
    record0.set("projectTitle", "Multi-Region AWS Architecture");
    record0.set("description", "Design and implement a multi-region AWS architecture with failover capabilities, load balancing, and data replication across regions.");
    record0.set("difficulty", "Advanced");
    record0.set("estimatedTime", "8-10 weeks");
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
    record1.set("projectTitle", "Serverless Application Design");
    record1.set("description", "Build a complete serverless application using Lambda, API Gateway, DynamoDB, and other AWS services with auto-scaling and cost optimization.");
    record1.set("difficulty", "Advanced");
    record1.set("estimatedTime", "7-9 weeks");
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
    record2.set("projectTitle", "Disaster Recovery Plan Implementation");
    record2.set("description", "Create a comprehensive disaster recovery plan with RTO/RPO targets, backup strategies, and failover mechanisms for enterprise applications.");
    record2.set("difficulty", "Advanced");
    record2.set("estimatedTime", "6-8 weeks");
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
    record3.set("projectTitle", "Cost Optimization Analysis");
    record3.set("description", "Analyze cloud infrastructure costs, identify optimization opportunities, implement reserved instances, and reduce overall cloud spending.");
    record3.set("difficulty", "Intermediate");
    record3.set("estimatedTime", "4-6 weeks");
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
    record4.set("projectTitle", "Microservices Architecture Design");
    record4.set("description", "Design a microservices architecture with containerization, orchestration, service discovery, and inter-service communication patterns.");
    record4.set("difficulty", "Advanced");
    record4.set("estimatedTime", "8-10 weeks");
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
    record5.set("careerSlug", "cloud-architect");
    record5.set("projectTitle", "Enterprise Cloud Migration Strategy");
    record5.set("description", "Develop a comprehensive cloud migration strategy for enterprise applications, including assessment, planning, execution, and optimization phases.");
    record5.set("difficulty", "Advanced");
    record5.set("estimatedTime", "10-12 weeks");
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
