/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
    record0.set("name", "Machine Learning Engineer");
    record0.set("slug", "machine-learning-engineer");
    record0.set("description", "Design, build, and deploy machine learning models that solve real-world problems at scale.");
    record0.set("entrySalary", 150000);
    record0.set("midSalary", 200000);
    record0.set("seniorSalary", 250000);
    record0.set("jobDemand", "Very High");
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
