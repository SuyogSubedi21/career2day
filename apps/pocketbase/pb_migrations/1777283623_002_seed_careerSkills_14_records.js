/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerSkills");

  const record0 = new Record(collection);
    record0.set("skillName", "Python");
    record0.set("category", "Languages");
    record0.set("difficulty", "Beginner");
    record0.set("description", "Python programming language for backend development");
    record0.set("relatedCareers", ["backend-engineer"]);
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
    record1.set("skillName", "Java");
    record1.set("category", "Languages");
    record1.set("difficulty", "Beginner");
    record1.set("description", "Java programming language for enterprise backend development");
    record1.set("relatedCareers", ["backend-engineer"]);
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
    record2.set("skillName", "Go");
    record2.set("category", "Languages");
    record2.set("difficulty", "Intermediate");
    record2.set("description", "Go programming language for high-performance backend systems");
    record2.set("relatedCareers", ["backend-engineer"]);
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
    record3.set("skillName", "Django");
    record3.set("category", "Frameworks");
    record3.set("difficulty", "Intermediate");
    record3.set("description", "Python web framework for building robust backend applications");
    record3.set("relatedCareers", ["backend-engineer"]);
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
    record4.set("skillName", "Spring Boot");
    record4.set("category", "Frameworks");
    record4.set("difficulty", "Intermediate");
    record4.set("description", "Java framework for building scalable backend applications");
    record4.set("relatedCareers", ["backend-engineer"]);
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
    record5.set("skillName", "PostgreSQL");
    record5.set("category", "Databases");
    record5.set("difficulty", "Intermediate");
    record5.set("description", "Relational database management system for data storage");
    record5.set("relatedCareers", ["backend-engineer"]);
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
    record6.set("skillName", "MongoDB");
    record6.set("category", "Databases");
    record6.set("difficulty", "Intermediate");
    record6.set("description", "NoSQL database for flexible document storage");
    record6.set("relatedCareers", ["backend-engineer"]);
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
    record7.set("skillName", "REST APIs");
    record7.set("category", "Concepts");
    record7.set("difficulty", "Intermediate");
    record7.set("description", "Architectural style for designing web services");
    record7.set("relatedCareers", ["backend-engineer"]);
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
    record8.set("skillName", "JWT");
    record8.set("category", "Security");
    record8.set("difficulty", "Intermediate");
    record8.set("description", "JSON Web Token for secure authentication");
    record8.set("relatedCareers", ["backend-engineer"]);
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
    record9.set("skillName", "OAuth");
    record9.set("category", "Security");
    record9.set("difficulty", "Advanced");
    record9.set("description", "Open standard for secure authentication and authorization");
    record9.set("relatedCareers", ["backend-engineer"]);
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
    record10.set("skillName", "Caching");
    record10.set("category", "Concepts");
    record10.set("difficulty", "Advanced");
    record10.set("description", "Techniques for improving performance through data caching");
    record10.set("relatedCareers", ["backend-engineer"]);
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
    record11.set("skillName", "Message Queues");
    record11.set("category", "Concepts");
    record11.set("difficulty", "Advanced");
    record11.set("description", "Asynchronous communication between services");
    record11.set("relatedCareers", ["backend-engineer"]);
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
    record12.set("skillName", "Docker");
    record12.set("category", "Tools");
    record12.set("difficulty", "Intermediate");
    record12.set("description", "Containerization platform for application deployment");
    record12.set("relatedCareers", ["backend-engineer"]);
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
    record13.set("skillName", "Kubernetes");
    record13.set("category", "Tools");
    record13.set("difficulty", "Advanced");
    record13.set("description", "Container orchestration platform for managing containerized applications");
    record13.set("relatedCareers", ["backend-engineer"]);
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
