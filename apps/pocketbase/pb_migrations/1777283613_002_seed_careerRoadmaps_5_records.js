/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerRoadmaps");

  const record0 = new Record(collection);
    record0.set("careerSlug", "backend-engineer");
    record0.set("phase", 1);
    record0.set("phaseTitle", "Programming Fundamentals");
    record0.set("duration", "4-6 weeks");
    record0.set("skills", ["Python", "Java", "Go", "OOP Concepts", "Design Patterns", "Data Structures", "Algorithms"]);
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
    record1.set("careerSlug", "backend-engineer");
    record1.set("phase", 2);
    record1.set("phaseTitle", "Web Frameworks & APIs");
    record1.set("duration", "6-8 weeks");
    record1.set("skills", ["Django", "Spring Boot", "Gin", "REST APIs", "API Design", "Request/Response Handling", "Middleware"]);
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
    record2.set("careerSlug", "backend-engineer");
    record2.set("phase", 3);
    record2.set("phaseTitle", "Databases & Data Management");
    record2.set("duration", "6-8 weeks");
    record2.set("skills", ["SQL", "PostgreSQL", "MongoDB", "Database Design", "Indexing", "Query Optimization", "Caching"]);
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
    record3.set("careerSlug", "backend-engineer");
    record3.set("phase", 4);
    record3.set("phaseTitle", "Authentication & Security");
    record3.set("duration", "4-6 weeks");
    record3.set("skills", ["JWT", "OAuth", "Password Hashing", "SQL Injection Prevention", "CORS", "Rate Limiting", "Security Best Practices"]);
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
    record4.set("careerSlug", "backend-engineer");
    record4.set("phase", 5);
    record4.set("phaseTitle", "Scalability & Performance");
    record4.set("duration", "6-8 weeks");
    record4.set("skills", ["Load Balancing", "Caching Strategies", "Message Queues", "Microservices", "Monitoring", "Logging"]);
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
