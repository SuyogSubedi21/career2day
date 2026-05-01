/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerProjects");

  const record0 = new Record(collection);
    record0.set("careerSlug", "machine-learning-engineer");
    record0.set("projectTitle", "Predictive Analytics Model");
    record0.set("description", "Build a predictive model to forecast business metrics using historical data and machine learning algorithms.");
    record0.set("difficulty", "Intermediate");
    record0.set("estimatedTime", "3-4 weeks");
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
    record1.set("projectTitle", "Image Classification System");
    record1.set("description", "Develop a deep learning model to classify images using CNNs and transfer learning techniques.");
    record1.set("difficulty", "Advanced");
    record1.set("estimatedTime", "4-5 weeks");
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
    record2.set("projectTitle", "Natural Language Processing Application");
    record2.set("description", "Create an NLP application for text analysis, sentiment analysis, or language understanding tasks.");
    record2.set("difficulty", "Advanced");
    record2.set("estimatedTime", "4-5 weeks");
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
    record3.set("projectTitle", "Recommendation Engine");
    record3.set("description", "Build a recommendation system using collaborative filtering or content-based approaches.");
    record3.set("difficulty", "Intermediate");
    record3.set("estimatedTime", "3-4 weeks");
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
    record4.set("projectTitle", "Time Series Forecasting");
    record4.set("description", "Implement time series models to predict future values based on historical temporal data.");
    record4.set("difficulty", "Intermediate");
    record4.set("estimatedTime", "3-4 weeks");
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
    record5.set("projectTitle", "Anomaly Detection System");
    record5.set("description", "Develop a system to detect anomalies and outliers in data using unsupervised learning techniques.");
    record5.set("difficulty", "Advanced");
    record5.set("estimatedTime", "3-4 weeks");
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
