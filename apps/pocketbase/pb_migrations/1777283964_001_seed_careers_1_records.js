/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
    record0.set("name", "Data Scientist");
    record0.set("slug", "data-scientist");
    record0.set("description", "Extract insights from data, build predictive models, and drive data-driven decision making for organizations.");
    record0.set("averageSalary", 155000);
    record0.set("entrySalary", 110000);
    record0.set("midSalary", 155000);
    record0.set("seniorSalary", 200000);
    record0.set("jobDemand", "Very High");
    record0.set("overview", "Master data science with a comprehensive 10-16 month roadmap covering SQL, statistics, Python, machine learning, and advanced analytics with business communication.");
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
