/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerRoadmaps");

  const record0 = new Record(collection);
    record0.set("careerSlug", "qa-engineer");
    record0.set("phase", 1);
    record0.set("phaseTitle", "Testing Fundamentals");
    record0.set("duration", "4-6 weeks");
    record0.set("skills", ["Testing Basics", "Test Planning", "Test Cases", "Test Execution", "Bug Reporting", "Quality Assurance Concepts"]);
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
    record1.set("phase", 2);
    record1.set("phaseTitle", "Manual Testing");
    record1.set("duration", "4-6 weeks");
    record1.set("skills", ["Functional Testing", "Regression Testing", "Smoke Testing", "Sanity Testing", "User Acceptance Testing", "Test Documentation"]);
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
    record2.set("phase", 3);
    record2.set("phaseTitle", "Automation Testing");
    record2.set("duration", "6-8 weeks");
    record2.set("skills", ["Selenium", "Test Automation Frameworks", "Scripting", "Test Data Management", "Continuous Integration"]);
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
    record3.set("phase", 4);
    record3.set("phaseTitle", "Performance & Security Testing");
    record3.set("duration", "4-6 weeks");
    record3.set("skills", ["Load Testing", "Stress Testing", "Performance Analysis", "Security Testing", "Vulnerability Testing"]);
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
    record4.set("phase", 5);
    record4.set("phaseTitle", "Advanced QA & Leadership");
    record4.set("duration", "4-6 weeks");
    record4.set("skills", ["Test Strategy", "Quality Metrics", "Defect Management", "Team Leadership", "Process Improvement"]);
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
