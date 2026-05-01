/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerSkills");

  const record0 = new Record(collection);
    record0.set("skillName", "Python");
    record0.set("category", "Languages");
    record0.set("difficulty", "Intermediate");
    record0.set("description", "Core programming language for data science and statistical analysis.");
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
    record1.set("skillName", "SQL");
    record1.set("category", "Languages");
    record1.set("difficulty", "Intermediate");
    record1.set("description", "Query language for extracting and manipulating data from databases.");
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
    record2.set("skillName", "Statistics");
    record2.set("category", "Concepts");
    record2.set("difficulty", "Advanced");
    record2.set("description", "Statistical methods and probability theory for data analysis and hypothesis testing.");
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
    record3.set("skillName", "Machine Learning");
    record3.set("category", "Concepts");
    record3.set("difficulty", "Advanced");
    record3.set("description", "Algorithms and techniques for building predictive models from data.");
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
    record4.set("skillName", "Pandas");
    record4.set("category", "Tools");
    record4.set("difficulty", "Intermediate");
    record4.set("description", "Python library for data manipulation and analysis.");
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
    record5.set("skillName", "NumPy");
    record5.set("category", "Tools");
    record5.set("difficulty", "Intermediate");
    record5.set("description", "Numerical computing library for array operations and mathematical functions.");
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
    record6.set("skillName", "Matplotlib");
    record6.set("category", "Tools");
    record6.set("difficulty", "Intermediate");
    record6.set("description", "Python library for creating static, animated, and interactive visualizations.");
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
    record7.set("skillName", "Scikit-learn");
    record7.set("category", "Tools");
    record7.set("difficulty", "Intermediate");
    record7.set("description", "Machine learning library with algorithms for classification, regression, and clustering.");
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
    record8.set("skillName", "Tableau");
    record8.set("category", "Tools");
    record8.set("difficulty", "Intermediate");
    record8.set("description", "Business intelligence tool for creating interactive data visualizations and dashboards.");
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
    record9.set("skillName", "Power BI");
    record9.set("category", "Tools");
    record9.set("difficulty", "Intermediate");
    record9.set("description", "Microsoft's business analytics tool for data visualization and reporting.");
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
    record10.set("skillName", "Data Visualization");
    record10.set("category", "Concepts");
    record10.set("difficulty", "Intermediate");
    record10.set("description", "Techniques for presenting data in visual formats to communicate insights effectively.");
  try {
    app.save(record10);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record11 = new Record(collection);
    record11.set("skillName", "Business Analytics");
    record11.set("category", "Concepts");
    record11.set("difficulty", "Advanced");
    record11.set("description", "Application of data analysis to solve business problems and drive strategic decisions.");
  try {
    app.save(record11);
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
