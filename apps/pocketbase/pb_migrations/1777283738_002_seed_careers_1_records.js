/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
    record0.set("name", "Machine Learning Engineer");
    record0.set("slug", "machine-learning-engineer");
    record0.set("description", "Develop machine learning models, implement AI solutions, and optimize algorithms to solve complex business problems.");
    record0.set("overview", "Master the skills to build, train, and deploy machine learning models that solve real-world problems.");
    record0.set("averageSalary", 165000);
    record0.set("entrySalary", 120000);
    record0.set("midSalary", 165000);
    record0.set("seniorSalary", 210000);
    record0.set("jobDemand", "Very High");
    record0.set("salaryRange", "{'min': 120000, 'max': 210000}");
    record0.set("skillsRequired", ["Python", "Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Statistics", "Linear Algebra", "Computer Vision", "NLP"]);
    record0.set("technicalSkills", ["Python", "Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Statistics", "Linear Algebra", "Computer Vision", "NLP"]);
    record0.set("softSkills", ["Problem Solving", "Communication", "Collaboration", "Critical Thinking", "Attention to Detail"]);
    record0.set("tools", ["TensorFlow", "PyTorch", "Scikit-learn", "Jupyter Notebooks", "Git", "Docker", "AWS SageMaker"]);
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
