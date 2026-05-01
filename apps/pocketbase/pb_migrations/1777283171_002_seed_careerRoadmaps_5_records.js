/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerRoadmaps");

  const record0 = new Record(collection);
    record0.set("careerSlug", "data-scientist");
    record0.set("phase", 1);
    record0.set("phaseTitle", "Statistics & Mathematics Foundation");
    record0.set("duration", "6-8 weeks");
    record0.set("skills", ["Probability", "Hypothesis Testing", "Descriptive Statistics", "Inferential Statistics", "Bayesian Statistics"]);
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
    record1.set("careerSlug", "data-scientist");
    record1.set("phase", 2);
    record1.set("phaseTitle", "Python & Data Manipulation");
    record1.set("duration", "4-6 weeks");
    record1.set("skills", ["Python", "Pandas", "NumPy", "Data Cleaning", "Data Wrangling", "SQL"]);
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
    record2.set("careerSlug", "data-scientist");
    record2.set("phase", 3);
    record2.set("phaseTitle", "Data Visualization & Exploration");
    record2.set("duration", "6-8 weeks");
    record2.set("skills", ["Matplotlib", "Seaborn", "Plotly", "Tableau", "Power BI", "EDA"]);
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
    record3.set("careerSlug", "data-scientist");
    record3.set("phase", 4);
    record3.set("phaseTitle", "Machine Learning & Modeling");
    record3.set("duration", "8-10 weeks");
    record3.set("skills", ["Supervised Learning", "Unsupervised Learning", "Scikit-learn", "Model Evaluation", "Feature Engineering"]);
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
    record4.set("careerSlug", "data-scientist");
    record4.set("phase", 5);
    record4.set("phaseTitle", "Business Analytics & Communication");
    record4.set("duration", "6-8 weeks");
    record4.set("skills", ["A/B Testing", "Statistical Testing", "Data Storytelling", "Business Metrics", "Presentation Skills"]);
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
