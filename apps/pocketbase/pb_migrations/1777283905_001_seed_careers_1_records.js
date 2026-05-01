/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
    record0.set("name", "Machine Learning Engineer");
    record0.set("slug", "machine-learning-engineer");
    record0.set("description", "Develop machine learning models, implement AI solutions, and optimize algorithms to solve complex business problems.");
    record0.set("averageSalary", 165000);
    record0.set("entrySalary", 120000);
    record0.set("midSalary", 165000);
    record0.set("seniorSalary", 210000);
    record0.set("jobDemand", "Very High");
    record0.set("overview", "Master machine learning engineering with a comprehensive 12-18 month roadmap covering mathematics, Python, algorithms, deep learning, and production deployment.");
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
