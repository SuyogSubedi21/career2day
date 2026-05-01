/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerRoadmaps");

  const record0 = new Record(collection);
    record0.set("careerSlug", "machine-learning-engineer");
    record0.set("phase", 1);
    record0.set("phaseTitle", "Mathematics & Statistics Foundation");
    record0.set("duration", "6-8 weeks");
    record0.set("skills", ["Linear Algebra", "Calculus", "Probability Theory", "Statistics"]);
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
    record1.set("phase", 2);
    record1.set("phaseTitle", "Python Programming & Data Manipulation");
    record1.set("duration", "4-6 weeks");
    record1.set("skills", ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn"]);
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
    record2.set("phase", 3);
    record2.set("phaseTitle", "Machine Learning Fundamentals");
    record2.set("duration", "8-10 weeks");
    record2.set("skills", ["Supervised Learning", "Unsupervised Learning", "Scikit-learn", "Feature Engineering"]);
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
    record3.set("phase", 4);
    record3.set("phaseTitle", "Deep Learning & Neural Networks");
    record3.set("duration", "8-10 weeks");
    record3.set("skills", ["Neural Networks", "CNNs", "RNNs", "LSTMs", "TensorFlow", "PyTorch"]);
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
    record4.set("phase", 5);
    record4.set("phaseTitle", "MLOps & Production Deployment");
    record4.set("duration", "6-8 weeks");
    record4.set("skills", ["Docker", "Kubernetes", "MLflow", "AWS SageMaker", "Model Monitoring"]);
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
