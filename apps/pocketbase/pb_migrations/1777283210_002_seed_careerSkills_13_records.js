/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerSkills");

  const record0 = new Record(collection);
    record0.set("skillName", "Statistics");
    record0.set("category", "Concepts");
    record0.set("difficulty", "Beginner");
    record0.set("description", "Fundamental statistical concepts and methods for data analysis");
    record0.set("relatedCareers", ["data-scientist"]);
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
    record1.set("skillName", "Probability");
    record1.set("category", "Concepts");
    record1.set("difficulty", "Beginner");
    record1.set("description", "Understanding probability distributions and probabilistic reasoning");
    record1.set("relatedCareers", ["data-scientist"]);
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
    record2.set("skillName", "Python");
    record2.set("category", "Languages");
    record2.set("difficulty", "Beginner");
    record2.set("description", "Python programming language for data science and machine learning");
    record2.set("relatedCareers", ["data-scientist"]);
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
    record3.set("skillName", "Pandas");
    record3.set("category", "Frameworks");
    record3.set("difficulty", "Intermediate");
    record3.set("description", "Data manipulation and analysis library for Python");
    record3.set("relatedCareers", ["data-scientist"]);
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
    record4.set("skillName", "NumPy");
    record4.set("category", "Frameworks");
    record4.set("difficulty", "Intermediate");
    record4.set("description", "Numerical computing library for Python");
    record4.set("relatedCareers", ["data-scientist"]);
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
    record5.set("skillName", "SQL");
    record5.set("category", "Languages");
    record5.set("difficulty", "Intermediate");
    record5.set("description", "Database querying and management language");
    record5.set("relatedCareers", ["data-scientist"]);
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
    record6.set("description", "Data visualization library for Python");
    record6.set("relatedCareers", ["data-scientist"]);
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
    record7.set("skillName", "Seaborn");
    record7.set("category", "Tools");
    record7.set("difficulty", "Intermediate");
    record7.set("description", "Statistical data visualization library built on Matplotlib");
    record7.set("relatedCareers", ["data-scientist"]);
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
    record8.set("description", "Business intelligence and data visualization tool");
    record8.set("relatedCareers", ["data-scientist"]);
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
    record9.set("description", "Microsoft's business analytics and visualization platform");
    record9.set("relatedCareers", ["data-scientist"]);
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
    record10.set("skillName", "Scikit-learn");
    record10.set("category", "Frameworks");
    record10.set("difficulty", "Intermediate");
    record10.set("description", "Machine learning library for Python");
    record10.set("relatedCareers", ["data-scientist"]);
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
    record11.set("skillName", "A/B Testing");
    record11.set("category", "Concepts");
    record11.set("difficulty", "Advanced");
    record11.set("description", "Experimental design and statistical testing methodology");
    record11.set("relatedCareers", ["data-scientist"]);
  try {
    app.save(record11);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record12 = new Record(collection);
    record12.set("skillName", "Data Storytelling");
    record12.set("category", "Concepts");
    record12.set("difficulty", "Advanced");
    record12.set("description", "Communicating data insights effectively to stakeholders");
    record12.set("relatedCareers", ["data-scientist"]);
  try {
    app.save(record12);
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
