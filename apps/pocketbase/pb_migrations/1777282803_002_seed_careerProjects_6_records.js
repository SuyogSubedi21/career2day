/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerProjects");

  const record0 = new Record(collection);
    record0.set("careerSlug", "machine-learning-engineer");
    record0.set("projectTitle", "Movie Recommendation System");
    record0.set("description", "Build collaborative filtering recommendation system");
    record0.set("difficulty", "Intermediate");
    record0.set("estimatedTime", "2-4 weeks");
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
    record1.set("projectTitle", "Real-time Fraud Detection Model");
    record1.set("description", "Create fraud detection system with REST API");
    record1.set("difficulty", "Advanced");
    record1.set("estimatedTime", "2-4 weeks");
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
    record2.set("projectTitle", "Image Classification with PyTorch");
    record2.set("description", "Train CNN with transfer learning");
    record2.set("difficulty", "Intermediate");
    record2.set("estimatedTime", "2-4 weeks");
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
    record3.set("projectTitle", "NLP Sentiment Analysis Pipeline");
    record3.set("description", "Build BERT sentiment analysis pipeline");
    record3.set("difficulty", "Advanced");
    record3.set("estimatedTime", "2-4 weeks");
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
    record4.set("projectTitle", "Time Series Forecasting System");
    record4.set("description", "Develop LSTM and Prophet forecasting models");
    record4.set("difficulty", "Advanced");
    record4.set("estimatedTime", "2-4 weeks");
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
    record5.set("projectTitle", "End-to-End MLOps Pipeline");
    record5.set("description", "Create complete MLOps pipeline with Docker and CI/CD");
    record5.set("difficulty", "Advanced");
    record5.set("estimatedTime", "2-4 weeks");
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
