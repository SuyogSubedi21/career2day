/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerProjects");

  const record0 = new Record(collection);
    record0.set("careerSlug", "machine-learning-engineer");
    record0.set("projectTitle", "Build a movie recommendation system using collaborative filtering");
    record0.set("difficulty", "Intermediate");
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
    record1.set("careerSlug", "machine-learning-engineer");
    record1.set("projectTitle", "Create a real-time fraud detection model with Scikit-learn");
    record1.set("difficulty", "Intermediate");
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
    record2.set("careerSlug", "machine-learning-engineer");
    record2.set("projectTitle", "Train an image classifier with PyTorch and deploy as a REST API");
    record2.set("difficulty", "Advanced");
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
    record3.set("careerSlug", "machine-learning-engineer");
    record3.set("projectTitle", "Build an NLP sentiment analysis pipeline with BERT");
    record3.set("difficulty", "Advanced");
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
    record4.set("careerSlug", "machine-learning-engineer");
    record4.set("projectTitle", "Develop a time-series forecasting system for stock prices");
    record4.set("difficulty", "Intermediate");
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
    record5.set("careerSlug", "machine-learning-engineer");
    record5.set("projectTitle", "Create an end-to-end MLOps pipeline with MLflow and Docker");
    record5.set("difficulty", "Advanced");
  try {
    app.save(record5);
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
