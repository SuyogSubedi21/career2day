/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
    record0.set("name", "Cybersecurity Specialist");
    record0.set("slug", "cybersecurity-specialist");
    record0.set("description", "Protect systems and networks from cyber threats, implement security measures, and respond to security incidents.");
    record0.set("averageSalary", 140000);
    record0.set("entrySalary", 100000);
    record0.set("midSalary", 140000);
    record0.set("seniorSalary", 180000);
    record0.set("jobDemand", "Very High");
    record0.set("overview", "Master cybersecurity with a comprehensive 10-14 month roadmap covering networking, security fundamentals, threat analysis, incident response, and compliance.");
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
