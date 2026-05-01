/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
    record0.set("name", "Data Scientist");
    record0.set("slug", "data-scientist");
    record0.set("description", "Extract insights from data using statistical analysis, machine learning, and data visualization to drive business decisions.");
    record0.set("entrySalary", 120000);
    record0.set("midSalary", 160000);
    record0.set("seniorSalary", 200000);
    record0.set("jobDemand", "Very High");
    record0.set("technicalSkills", ["Statistics", "Probability", "Python", "Pandas", "NumPy", "SQL", "Matplotlib", "Seaborn", "Tableau", "Power BI", "Scikit-learn"]);
    record0.set("softSkills", ["A/B Testing", "Data Storytelling", "Communication", "Problem Solving"]);
    record0.set("tools", ["Python", "Pandas", "NumPy", "SQL", "Matplotlib", "Seaborn", "Tableau", "Power BI", "Scikit-learn"]);
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
