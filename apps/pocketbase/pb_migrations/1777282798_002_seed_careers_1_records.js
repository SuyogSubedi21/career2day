/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
    record0.set("name", "Machine Learning Engineer");
    record0.set("slug", "machine-learning-engineer");
    record0.set("description", "Design, build, and deploy machine learning models that solve real-world problems at scale. Work with data pipelines, model optimization, and production systems.");
    record0.set("overview", "Master the skills to design, build, and deploy machine learning models at scale. Learn from mathematics foundations through production MLOps.");
    record0.set("averageSalary", 200000);
    record0.set("entrySalary", 150000);
    record0.set("midSalary", 200000);
    record0.set("seniorSalary", 250000);
    record0.set("jobDemand", "Very High");
    record0.set("salaryRange", "{'min': 150000, 'max': 250000}");
    record0.set("technicalSkills", ["Linear Algebra", "Calculus", "Probability Theory", "Statistics", "Matrix Operations", "Python", "NumPy", "Pandas", "Data Visualization", "Matplotlib", "Seaborn", "Supervised Learning", "Unsupervised Learning", "Scikit-learn", "Feature Engineering", "Model Evaluation", "Cross-Validation", "Neural Networks", "CNNs", "RNNs", "LSTMs", "TensorFlow", "PyTorch", "Transformers", "Docker", "Kubernetes", "MLflow", "AWS SageMaker", "Model Monitoring", "CI/CD", "Model Versioning"]);
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
