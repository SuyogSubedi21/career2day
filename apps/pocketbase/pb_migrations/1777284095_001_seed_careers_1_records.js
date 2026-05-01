/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
    record0.set("name", "QA Engineer");
    record0.set("slug", "qa-engineer");
    record0.set("description", "Ensure software quality through comprehensive testing, identify bugs, and implement quality assurance processes.");
    record0.set("averageSalary", 115000);
    record0.set("entrySalary", 80000);
    record0.set("midSalary", 115000);
    record0.set("seniorSalary", 150000);
    record0.set("jobDemand", "High");
    record0.set("overview", "Master QA engineering with a comprehensive 6-10 month roadmap covering testing fundamentals, manual testing, automation, performance testing, and quality leadership.");
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
