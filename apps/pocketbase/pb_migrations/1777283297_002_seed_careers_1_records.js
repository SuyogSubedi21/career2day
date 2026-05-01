/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
    record0.set("name", "Full Stack Developer");
    record0.set("slug", "full-stack-developer");
    record0.set("description", "Build complete web applications from frontend to backend, handling databases, servers, and user interfaces.");
    record0.set("entrySalary", 100000);
    record0.set("midSalary", 140000);
    record0.set("seniorSalary", 180000);
    record0.set("jobDemand", "Very High");
    record0.set("technicalSkills", ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "PostgreSQL", "Docker", "AWS", "REST APIs", "Authentication"]);
    record0.set("softSkills", ["Problem Solving", "Communication", "Teamwork", "Time Management"]);
    record0.set("tools", ["React", "Node.js", "Express", "MongoDB", "PostgreSQL", "Docker", "AWS", "Git"]);
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
