/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
    record0.set("name", "Cloud Architect");
    record0.set("slug", "cloud-architect");
    record0.set("description", "Design scalable, secure, and cost-effective cloud solutions for enterprise applications and infrastructure.");
    record0.set("entrySalary", 140000);
    record0.set("midSalary", 190000);
    record0.set("seniorSalary", 240000);
    record0.set("jobDemand", "Very High");
    record0.set("technicalSkills", ["AWS", "Azure", "GCP", "EC2", "S3", "RDS", "Lambda", "VPC", "IAM", "CloudFormation", "Microservices", "Serverless", "Security", "Cost Optimization"]);
    record0.set("softSkills", ["Strategic Thinking", "Communication", "Leadership", "Problem Solving"]);
    record0.set("tools", ["AWS", "Azure", "GCP", "CloudFormation", "Terraform", "Kubernetes"]);
  try {
    app.save(record0);
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
