/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerProjects");

  const record0 = new Record(collection);
    record0.set("careerSlug", "backend-engineer");
    record0.set("projectTitle", "RESTful API Development");
    record0.set("description", "Build a complete RESTful API with proper HTTP methods, status codes, error handling, and documentation.");
    record0.set("difficulty", "Intermediate");
    record0.set("estimatedTime", "4-6 weeks");
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
    record1.set("projectTitle", "User Authentication System");
    record1.set("description", "Implement user authentication with JWT tokens, password hashing, refresh tokens, and secure session management.");
    record1.set("difficulty", "Intermediate");
    record1.set("estimatedTime", "3-5 weeks");
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
    record2.set("projectTitle", "Database Design & Optimization");
    record2.set("description", "Design normalized database schemas, create indexes, optimize queries, and implement caching strategies.");
    record2.set("difficulty", "Intermediate");
    record2.set("estimatedTime", "4-6 weeks");
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
    record3.set("projectTitle", "Real-time Notification System");
    record3.set("description", "Build a real-time notification system using WebSockets, message queues, and event-driven architecture.");
    record3.set("difficulty", "Advanced");
    record3.set("estimatedTime", "6-8 weeks");
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
    record4.set("projectTitle", "Payment Processing Integration");
    record4.set("description", "Integrate payment gateways, handle transactions securely, implement webhooks, and manage payment workflows.");
    record4.set("difficulty", "Advanced");
    record4.set("estimatedTime", "5-7 weeks");
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
    record5.set("careerSlug", "backend-engineer");
    record5.set("projectTitle", "Scalable Microservices Architecture");
    record5.set("description", "Design and implement a microservices architecture with service discovery, API gateway, and inter-service communication.");
    record5.set("difficulty", "Advanced");
    record5.set("estimatedTime", "8-10 weeks");
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
