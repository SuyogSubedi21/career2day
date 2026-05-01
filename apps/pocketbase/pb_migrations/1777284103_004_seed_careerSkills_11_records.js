/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerSkills");

  const record0 = new Record(collection);
    record0.set("skillName", "Manual Testing");
    record0.set("category", "Concepts");
    record0.set("difficulty", "Beginner");
    record0.set("description", "Fundamental approach to testing software by manually executing test cases without automation tools.");
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
    record1.set("skillName", "Automation Testing");
    record1.set("category", "Concepts");
    record1.set("difficulty", "Intermediate");
    record1.set("description", "Using automated tools and scripts to execute test cases and validate software functionality.");
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
    record2.set("skillName", "Selenium");
    record2.set("category", "Tools");
    record2.set("difficulty", "Intermediate");
    record2.set("description", "Open-source automation tool for testing web applications across different browsers and platforms.");
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
    record3.set("skillName", "Test Planning");
    record3.set("category", "Concepts");
    record3.set("difficulty", "Intermediate");
    record3.set("description", "Process of defining test strategy, scope, objectives, and resource allocation for quality assurance.");
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
    record4.set("skillName", "Bug Tracking");
    record4.set("category", "Tools");
    record4.set("difficulty", "Beginner");
    record4.set("description", "Managing and tracking software defects using bug tracking systems and tools.");
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
    record5.set("skillName", "JIRA");
    record5.set("category", "Tools");
    record5.set("difficulty", "Intermediate");
    record5.set("description", "Popular issue and project tracking tool used for managing bugs, tasks, and test cases.");
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
    record6.set("skillName", "TestNG");
    record6.set("category", "Tools");
    record6.set("difficulty", "Intermediate");
    record6.set("description", "Java-based testing framework that provides annotations, assertions, and test execution capabilities.");
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
    record7.set("skillName", "Cucumber");
    record7.set("category", "Tools");
    record7.set("difficulty", "Advanced");
    record7.set("description", "Behavior-driven development tool for writing test cases in plain language and automating them.");
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
    record8.set("skillName", "Performance Testing");
    record8.set("category", "Concepts");
    record8.set("difficulty", "Advanced");
    record8.set("description", "Testing application performance under various load conditions to identify bottlenecks and optimization areas.");
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
    record9.set("skillName", "API Testing");
    record9.set("category", "Concepts");
    record9.set("difficulty", "Advanced");
    record9.set("description", "Testing application programming interfaces to validate functionality, reliability, and performance.");
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
    record10.set("skillName", "SQL");
    record10.set("category", "Languages");
    record10.set("difficulty", "Intermediate");
    record10.set("description", "Query language for database testing and validation of data integrity in applications.");
  try {
    app.save(record10);
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
