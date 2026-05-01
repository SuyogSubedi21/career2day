/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerLevels");

  const record0 = new Record(collection);
    record0.set("careerSlug", "frontend-developer");
    record0.set("level", "Beginner");
    record0.set("timeline", "3-6 months");
    record0.set("salary", "$60-80k");
    record0.set("skills", ["HTML", "CSS", "JavaScript Basics", "Git", "Responsive Design"]);
    record0.set("projects", ["Personal Portfolio", "Todo App", "Weather App"]);
    record0.set("certifications", ["HTML/CSS Fundamentals"]);
    record0.set("resources", ["MDN Web Docs", "FreeCodeCamp"]);
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
    record1.set("careerSlug", "frontend-developer");
    record1.set("level", "Intermediate");
    record1.set("timeline", "6-12 months");
    record1.set("salary", "$90-130k");
    record1.set("skills", ["React", "TypeScript", "REST APIs", "State Management", "Testing"]);
    record1.set("projects", ["E-commerce Site", "Social Media App", "Dashboard"]);
    record1.set("certifications", ["React Certification"]);
    record1.set("resources", ["React Docs", "Udemy Courses"]);
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
    record2.set("careerSlug", "frontend-developer");
    record2.set("level", "Advanced");
    record2.set("timeline", "12-18 months");
    record2.set("salary", "$130-180k+");
    record2.set("skills", ["Advanced React Patterns", "Performance Optimization", "System Design", "Web Security", "DevOps Basics"]);
    record2.set("projects", ["Large-scale App", "Open Source Contribution", "Performance Optimization"]);
    record2.set("certifications", ["AWS Certified Cloud Practitioner"]);
    record2.set("resources", ["Advanced React Patterns", "System Design Books"]);
  try {
    app.save(record2);
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
