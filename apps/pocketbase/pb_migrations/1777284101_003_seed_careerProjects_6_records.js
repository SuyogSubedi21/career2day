/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerProjects");

  const record0 = new Record(collection);
    record0.set("careerSlug", "qa-engineer");
    record0.set("projectTitle", "Manual Testing Project");
    record0.set("description", "Execute comprehensive manual testing on a web application including functional, regression, and user acceptance testing.");
    record0.set("difficulty", "Beginner");
    record0.set("estimatedTime", "3-4 weeks");
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
    record1.set("careerSlug", "qa-engineer");
    record1.set("projectTitle", "Automation Testing Suite");
    record1.set("description", "Build an automated test suite using Selenium and a testing framework to validate application functionality.");
    record1.set("difficulty", "Intermediate");
    record1.set("estimatedTime", "4-5 weeks");
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
    record2.set("careerSlug", "qa-engineer");
    record2.set("projectTitle", "Performance Testing Analysis");
    record2.set("description", "Conduct load and stress testing on an application to identify performance bottlenecks and optimization opportunities.");
    record2.set("difficulty", "Intermediate");
    record2.set("estimatedTime", "3-4 weeks");
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
    record3.set("careerSlug", "qa-engineer");
    record3.set("projectTitle", "Mobile App Testing");
    record3.set("description", "Perform comprehensive testing on a mobile application across different devices and operating systems.");
    record3.set("difficulty", "Intermediate");
    record3.set("estimatedTime", "3-4 weeks");
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
    record4.set("careerSlug", "qa-engineer");
    record4.set("projectTitle", "API Testing Project");
    record4.set("description", "Develop and execute API tests using tools like Postman or REST Assured to validate backend services.");
    record4.set("difficulty", "Advanced");
    record4.set("estimatedTime", "3-4 weeks");
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
    record5.set("careerSlug", "qa-engineer");
    record5.set("projectTitle", "End-to-End Testing Framework");
    record5.set("description", "Design and implement a comprehensive end-to-end testing framework covering multiple application workflows.");
    record5.set("difficulty", "Advanced");
    record5.set("estimatedTime", "4-5 weeks");
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
