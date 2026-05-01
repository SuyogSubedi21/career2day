/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
    record0.set("name", "DevOps Engineer");
    record0.set("slug", "devops-engineer");
    record0.set("description", "Automate infrastructure, manage deployments, and ensure reliable system operations through continuous integration and deployment.");
    record0.set("entrySalary", 130000);
    record0.set("midSalary", 175000);
    record0.set("seniorSalary", 220000);
    record0.set("jobDemand", "Very High");
    record0.set("technicalSkills", ["Linux", "Shell Scripting", "Docker", "Kubernetes", "Jenkins", "Git", "Terraform", "Ansible", "AWS", "Azure", "Prometheus", "ELK Stack", "CI/CD"]);
    record0.set("softSkills", ["Problem Solving", "Communication", "Teamwork", "Documentation"]);
    record0.set("tools", ["Docker", "Kubernetes", "Jenkins", "Git", "Terraform", "Ansible", "AWS", "Azure", "Prometheus", "ELK Stack"]);
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
