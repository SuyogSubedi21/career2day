/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
    record0.set("name", "Backend Engineer");
    record0.set("slug", "backend-engineer");
    record0.set("description", "Build robust server-side applications, manage databases, and create scalable backend systems that power web and mobile applications.");
    record0.set("entrySalary", 110000);
    record0.set("midSalary", 150000);
    record0.set("seniorSalary", 190000);
    record0.set("jobDemand", "Very High");
    record0.set("technicalSkills", ["Python", "Java", "Go", "Django", "Spring Boot", "PostgreSQL", "MongoDB", "REST APIs", "JWT", "OAuth", "Caching", "Message Queues", "Docker", "Kubernetes"]);
    record0.set("softSkills", ["Problem Solving", "Communication", "Teamwork", "Code Review"]);
    record0.set("tools", ["Django", "Spring Boot", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "Redis"]);
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
