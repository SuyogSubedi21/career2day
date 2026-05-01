/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerRoadmaps");

  const record0 = new Record(collection);
    record0.set("careerSlug", "full-stack-developer");
    record0.set("phase", 1);
    record0.set("phaseTitle", "Web Fundamentals");
    record0.set("duration", "4-6 weeks");
    record0.set("skills", ["HTML", "CSS", "JavaScript", "DOM", "Responsive Design", "Git"]);
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
    record1.set("careerSlug", "full-stack-developer");
    record1.set("phase", 2);
    record1.set("phaseTitle", "Frontend Development");
    record1.set("duration", "6-8 weeks");
    record1.set("skills", ["React", "Vue", "Angular", "State Management", "CSS Frameworks", "Tailwind CSS"]);
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
    record2.set("careerSlug", "full-stack-developer");
    record2.set("phase", 3);
    record2.set("phaseTitle", "Backend Development");
    record2.set("duration", "6-8 weeks");
    record2.set("skills", ["Node.js", "Express", "REST APIs", "Authentication", "Authorization", "Middleware"]);
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
    record3.set("careerSlug", "full-stack-developer");
    record3.set("phase", 4);
    record3.set("phaseTitle", "Databases & Data Management");
    record3.set("duration", "4-6 weeks");
    record3.set("skills", ["SQL", "PostgreSQL", "MongoDB", "Database Design", "ORM", "Query Optimization"]);
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
    record4.set("careerSlug", "full-stack-developer");
    record4.set("phase", 5);
    record4.set("phaseTitle", "Deployment & DevOps");
    record4.set("duration", "4-6 weeks");
    record4.set("skills", ["Docker", "AWS", "Heroku", "CI/CD", "Monitoring", "Performance Optimization"]);
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
