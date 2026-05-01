/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerSkills");

  const record0 = new Record(collection);
    record0.set("skillName", "HTML");
    record0.set("category", "Languages");
    record0.set("difficulty", "Beginner");
    record0.set("description", "HyperText Markup Language for creating web page structure");
    record0.set("relatedCareers", ["full-stack-developer"]);
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
    record1.set("skillName", "CSS");
    record1.set("category", "Languages");
    record1.set("difficulty", "Beginner");
    record1.set("description", "Cascading Style Sheets for styling and layout of web pages");
    record1.set("relatedCareers", ["full-stack-developer"]);
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
    record2.set("skillName", "JavaScript");
    record2.set("category", "Languages");
    record2.set("difficulty", "Beginner");
    record2.set("description", "Programming language for interactive web development");
    record2.set("relatedCareers", ["full-stack-developer"]);
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
    record3.set("skillName", "React");
    record3.set("category", "Frameworks");
    record3.set("difficulty", "Intermediate");
    record3.set("description", "JavaScript library for building user interfaces with components");
    record3.set("relatedCareers", ["full-stack-developer"]);
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
    record4.set("skillName", "Node.js");
    record4.set("category", "Frameworks");
    record4.set("difficulty", "Intermediate");
    record4.set("description", "JavaScript runtime for server-side development");
    record4.set("relatedCareers", ["full-stack-developer"]);
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
    record5.set("skillName", "Express");
    record5.set("category", "Frameworks");
    record5.set("difficulty", "Intermediate");
    record5.set("description", "Minimal web application framework for Node.js");
    record5.set("relatedCareers", ["full-stack-developer"]);
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
    record6.set("relatedCareers", ["full-stack-developer"]);
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
    record7.set("skillName", "PostgreSQL");
    record7.set("category", "Databases");
    record7.set("difficulty", "Intermediate");
    record7.set("description", "Relational database management system");
    record7.set("relatedCareers", ["full-stack-developer"]);
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
    record8.set("skillName", "Docker");
    record8.set("category", "Tools");
    record8.set("difficulty", "Intermediate");
    record8.set("description", "Containerization platform for application deployment");
    record8.set("relatedCareers", ["full-stack-developer"]);
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
    record9.set("skillName", "AWS");
    record9.set("category", "Cloud Platforms");
    record9.set("difficulty", "Advanced");
    record9.set("description", "Amazon Web Services for cloud infrastructure and deployment");
    record9.set("relatedCareers", ["full-stack-developer"]);
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
    record10.set("skillName", "Git");
    record10.set("category", "Tools");
    record10.set("difficulty", "Beginner");
    record10.set("description", "Version control system for code management");
    record10.set("relatedCareers", ["full-stack-developer"]);
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
    record11.set("skillName", "REST APIs");
    record11.set("category", "Concepts");
    record11.set("difficulty", "Intermediate");
    record11.set("description", "Architectural style for designing web services");
    record11.set("relatedCareers", ["full-stack-developer"]);
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
    record12.set("skillName", "Authentication");
    record12.set("category", "Security");
    record12.set("difficulty", "Advanced");
    record12.set("description", "Techniques for verifying user identity and securing applications");
    record12.set("relatedCareers", ["full-stack-developer"]);
  try {
    app.save(record12);
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
