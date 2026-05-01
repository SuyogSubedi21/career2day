/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerRoadmaps");

  const record0 = new Record(collection);
    record0.set("careerSlug", "machine-learning-engineer");
    record0.set("phase", 1);
    record0.set("phaseTitle", "Mathematics & Statistics Foundation");
    record0.set("duration", "6-8 weeks");
    record0.set("skills", ["Linear Algebra", "Calculus", "Probability", "Statistics"]);
    record0.set("resources", [{"name": "Khan Academy Linear Algebra", "url": "https://www.khanacademy.org/math/linear-algebra", "type": "free"}, {"name": "StatQuest with Josh Starmer", "url": "https://www.youtube.com/c/joshstarmer", "type": "free"}, {"name": "3Blue1Brown Essence of Calculus", "url": "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr", "type": "free"}]);
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
    record1.set("phaseTitle", "Python Programming");
    record1.set("duration", "4-6 weeks");
    record1.set("skills", ["Python Basics", "NumPy", "Pandas", "Matplotlib", "Seaborn"]);
    record1.set("resources", [{"name": "Python for Everybody - Coursera (Audit Free)", "url": "https://www.coursera.org/specializations/python", "type": "free"}, {"name": "Kaggle Python Course", "url": "https://www.kaggle.com/learn/python", "type": "free"}, {"name": "Real Python", "url": "https://realpython.com", "type": "free"}]);
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
    record2.set("skills", ["Supervised Learning", "Unsupervised Learning", "Scikit-learn", "Feature Engineering", "Model Evaluation"]);
    record2.set("resources", [{"name": "Andrew Ng ML Course - Coursera (Audit)", "url": "https://www.coursera.org/learn/machine-learning", "type": "free"}, {"name": "Kaggle ML Course", "url": "https://www.kaggle.com/learn/intro-to-machine-learning", "type": "free"}, {"name": "Google ML Crash Course", "url": "https://developers.google.com/machine-learning/crash-course", "type": "free"}]);
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
    record3.set("phaseTitle", "Deep Learning");
    record3.set("duration", "8-10 weeks");
    record3.set("skills", ["Neural Networks", "CNNs", "RNNs", "TensorFlow", "PyTorch", "Transformers"]);
    record3.set("resources", [{"name": "fast.ai Deep Learning", "url": "https://www.fast.ai", "type": "free"}, {"name": "Deep Learning Specialization - Coursera (Audit)", "url": "https://www.coursera.org/specializations/deep-learning", "type": "free"}, {"name": "PyTorch Official Tutorials", "url": "https://pytorch.org/tutorials/", "type": "free"}]);
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
    record4.set("phaseTitle", "MLOps & Deployment");
    record4.set("duration", "6-8 weeks");
    record4.set("skills", ["Docker", "MLflow", "AWS SageMaker", "CI/CD for ML", "Model Monitoring"]);
    record4.set("resources", [{"name": "MLOps Zoomcamp", "url": "https://github.com/DataTalksClub/mlops-zoomcamp", "type": "free"}, {"name": "Made With ML", "url": "https://madewithml.com", "type": "free"}, {"name": "AWS ML Free Tier", "url": "https://aws.amazon.com/free/machine-learning/", "type": "free"}]);
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
