/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerSkills");

  const record0 = new Record(collection);
    record0.set("skillName", "Python");
    record0.set("category", "Languages");
    record0.set("difficulty", "Intermediate");
    record0.set("description", "Core programming language for machine learning development and data science.");
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
    record1.set("skillName", "Machine Learning");
    record1.set("category", "Concepts");
    record1.set("difficulty", "Advanced");
    record1.set("description", "Fundamental concepts and algorithms for building predictive models.");
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
    record2.set("skillName", "Deep Learning");
    record2.set("category", "Concepts");
    record2.set("difficulty", "Advanced");
    record2.set("description", "Advanced neural network architectures and techniques for complex pattern recognition.");
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
    record3.set("skillName", "TensorFlow");
    record3.set("category", "Frameworks");
    record3.set("difficulty", "Advanced");
    record3.set("description", "Open-source machine learning framework for building and training neural networks.");
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
    record4.set("skillName", "PyTorch");
    record4.set("category", "Frameworks");
    record4.set("difficulty", "Advanced");
    record4.set("description", "Deep learning framework known for flexibility and dynamic computation graphs.");
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
    record5.set("skillName", "Scikit-learn");
    record5.set("category", "Tools");
    record5.set("difficulty", "Intermediate");
    record5.set("description", "Python library for machine learning algorithms and data preprocessing.");
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
    record6.set("skillName", "Pandas");
    record6.set("category", "Tools");
    record6.set("difficulty", "Intermediate");
    record6.set("description", "Data manipulation and analysis library for working with structured data.");
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
    record7.set("skillName", "NumPy");
    record7.set("category", "Tools");
    record7.set("difficulty", "Intermediate");
    record7.set("description", "Numerical computing library for array operations and mathematical functions.");
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
    record8.set("skillName", "Statistics");
    record8.set("category", "Concepts");
    record8.set("difficulty", "Intermediate");
    record8.set("description", "Statistical methods and probability theory essential for data analysis.");
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
    record9.set("skillName", "Linear Algebra");
    record9.set("category", "Concepts");
    record9.set("difficulty", "Intermediate");
    record9.set("description", "Mathematical foundation for understanding machine learning algorithms.");
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
    record10.set("skillName", "Computer Vision");
    record10.set("category", "Concepts");
    record10.set("difficulty", "Advanced");
    record10.set("description", "Techniques for processing and analyzing visual data using deep learning.");
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
    record11.set("skillName", "NLP");
    record11.set("category", "Concepts");
    record11.set("difficulty", "Advanced");
    record11.set("description", "Natural Language Processing for text analysis and language understanding.");
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
