/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerProjects");

  const record0 = new Record(collection);
    record0.set("careerSlug", "data-scientist");
    record0.set("projectTitle", "Customer Segmentation Analysis");
    record0.set("description", "Analyze customer data and segment them into distinct groups using clustering techniques for targeted marketing strategies.");
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
    record1.set("careerSlug", "data-scientist");
    record1.set("projectTitle", "Sales Forecasting Model");
    record1.set("description", "Build a predictive model to forecast future sales using historical data and time series analysis.");
    record1.set("difficulty", "Intermediate");
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
    record2.set("careerSlug", "data-scientist");
    record2.set("projectTitle", "Churn Prediction System");
    record2.set("description", "Develop a classification model to predict customer churn and identify at-risk customers.");
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
    record3.set("careerSlug", "data-scientist");
    record3.set("projectTitle", "Market Basket Analysis");
    record3.set("description", "Analyze customer purchase patterns to discover product associations and recommend cross-selling opportunities.");
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
    record4.set("careerSlug", "data-scientist");
    record4.set("projectTitle", "Sentiment Analysis Project");
    record4.set("description", "Build a natural language processing model to analyze customer sentiment from reviews and social media.");
    record4.set("difficulty", "Advanced");
    record4.set("estimatedTime", "4-5 weeks");
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
    record5.set("careerSlug", "data-scientist");
    record5.set("projectTitle", "Business Intelligence Dashboard");
    record5.set("description", "Create an interactive dashboard to visualize key business metrics and enable data-driven decision making.");
    record5.set("difficulty", "Intermediate");
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
