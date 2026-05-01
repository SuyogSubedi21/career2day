/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerQuizzes");

  const record0 = new Record(collection);
    record0.set("careerSlug", "data-scientist");
    record0.set("difficulty", "Basic");
    record0.set("questionNumber", 1);
    record0.set("question", "What is the primary goal of descriptive statistics?");
    record0.set("options", ["To predict future outcomes", "To summarize and describe data characteristics", "To test hypotheses", "To establish causation"]);
    record0.set("correctAnswer", "B");
    record0.set("explanation", "Descriptive statistics focuses on summarizing and describing the main characteristics of a dataset.");
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
    record1.set("difficulty", "Basic");
    record1.set("questionNumber", 2);
    record1.set("question", "Which Python library is primarily used for numerical computing?");
    record1.set("options", ["Pandas", "NumPy", "Matplotlib", "Scikit-learn"]);
    record1.set("correctAnswer", "B");
    record1.set("explanation", "NumPy is the fundamental library for numerical computing in Python.");
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
    record2.set("difficulty", "Basic");
    record2.set("questionNumber", 3);
    record2.set("question", "What does SQL stand for?");
    record2.set("options", ["Structured Query Language", "Simple Query Language", "Standard Query Language", "Structured Question Language"]);
    record2.set("correctAnswer", "A");
    record2.set("explanation", "SQL stands for Structured Query Language, used for managing databases.");
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
    record3.set("difficulty", "Basic");
    record3.set("questionNumber", 4);
    record3.set("question", "What is the purpose of data visualization?");
    record3.set("options", ["To store data", "To communicate insights from data", "To clean data", "To train models"]);
    record3.set("correctAnswer", "B");
    record3.set("explanation", "Data visualization helps communicate complex data insights in an understandable format.");
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
    record4.set("difficulty", "Basic");
    record4.set("questionNumber", 5);
    record4.set("question", "Which of the following is a supervised learning algorithm?");
    record4.set("options", ["K-means", "DBSCAN", "Linear Regression", "PCA"]);
    record4.set("correctAnswer", "C");
    record4.set("explanation", "Linear Regression is a supervised learning algorithm used for prediction tasks.");
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
    record5.set("difficulty", "Medium");
    record5.set("questionNumber", 6);
    record5.set("question", "What is the difference between correlation and causation?");
    record5.set("options", ["They are the same thing", "Correlation shows relationship, causation shows cause-effect", "Causation is weaker than correlation", "There is no difference"]);
    record5.set("correctAnswer", "B");
    record5.set("explanation", "Correlation indicates a relationship between variables, while causation implies one variable causes changes in another.");
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
    record6.set("careerSlug", "data-scientist");
    record6.set("difficulty", "Medium");
    record6.set("questionNumber", 7);
    record6.set("question", "What is the purpose of cross-validation in machine learning?");
    record6.set("options", ["To increase model accuracy", "To assess model generalization", "To reduce training time", "To increase dataset size"]);
    record6.set("correctAnswer", "B");
    record6.set("explanation", "Cross-validation helps evaluate how well a model generalizes to unseen data.");
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
    record7.set("careerSlug", "data-scientist");
    record7.set("difficulty", "Medium");
    record7.set("questionNumber", 8);
    record7.set("question", "Which metric is best for imbalanced classification problems?");
    record7.set("options", ["Accuracy", "Precision and Recall", "Mean Squared Error", "R-squared"]);
    record7.set("correctAnswer", "B");
    record7.set("explanation", "Precision and Recall are better metrics for imbalanced datasets than accuracy.");
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
    record8.set("careerSlug", "data-scientist");
    record8.set("difficulty", "Medium");
    record8.set("questionNumber", 9);
    record8.set("question", "What is feature engineering?");
    record8.set("options", ["Building machine learning models", "Creating new features from existing data", "Cleaning raw data", "Visualizing data"]);
    record8.set("correctAnswer", "B");
    record8.set("explanation", "Feature engineering involves creating new features from existing data to improve model performance.");
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
    record9.set("careerSlug", "data-scientist");
    record9.set("difficulty", "Medium");
    record9.set("questionNumber", 10);
    record9.set("question", "What does A/B testing measure?");
    record9.set("options", ["Model accuracy", "Statistical significance of differences between variants", "Data quality", "Feature importance"]);
    record9.set("correctAnswer", "B");
    record9.set("explanation", "A/B testing measures whether differences between two variants are statistically significant.");
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
    record10.set("careerSlug", "data-scientist");
    record10.set("difficulty", "Hard");
    record10.set("questionNumber", 11);
    record10.set("question", "What is the bias-variance tradeoff?");
    record10.set("options", ["A method to reduce overfitting", "The balance between model simplicity and complexity", "A technique for feature selection", "A way to improve data quality"]);
    record10.set("correctAnswer", "B");
    record10.set("explanation", "The bias-variance tradeoff describes the balance between underfitting (high bias) and overfitting (high variance).");
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
    record11.set("careerSlug", "data-scientist");
    record11.set("difficulty", "Hard");
    record11.set("questionNumber", 12);
    record11.set("question", "What is the purpose of regularization in machine learning?");
    record11.set("options", ["To increase model complexity", "To prevent overfitting by penalizing large coefficients", "To improve training speed", "To increase dataset size"]);
    record11.set("correctAnswer", "B");
    record11.set("explanation", "Regularization prevents overfitting by adding a penalty term for large model coefficients.");
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
    record12.set("careerSlug", "data-scientist");
    record12.set("difficulty", "Hard");
    record12.set("questionNumber", 13);
    record12.set("question", "What is the difference between parametric and non-parametric models?");
    record12.set("options", ["Parametric models have parameters, non-parametric don't", "Parametric models assume data distribution, non-parametric don't", "Non-parametric models are always better", "There is no difference"]);
    record12.set("correctAnswer", "B");
    record12.set("explanation", "Parametric models assume a specific data distribution, while non-parametric models make fewer assumptions.");
  try {
    app.save(record12);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record13 = new Record(collection);
    record13.set("careerSlug", "data-scientist");
    record13.set("difficulty", "Hard");
    record13.set("questionNumber", 14);
    record13.set("question", "What is the curse of dimensionality?");
    record13.set("options", ["Having too many rows in data", "Performance degradation with increasing features", "Data being too clean", "Models being too simple"]);
    record13.set("correctAnswer", "B");
    record13.set("explanation", "The curse of dimensionality refers to performance degradation as the number of features increases.");
  try {
    app.save(record13);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record14 = new Record(collection);
    record14.set("careerSlug", "data-scientist");
    record14.set("difficulty", "Hard");
    record14.set("questionNumber", 15);
    record14.set("question", "What is ensemble learning?");
    record14.set("options", ["Using a single powerful model", "Combining multiple models to improve predictions", "Training models sequentially", "Using only neural networks"]);
    record14.set("correctAnswer", "B");
    record14.set("explanation", "Ensemble learning combines multiple models to achieve better predictive performance than individual models.");
  try {
    app.save(record14);
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
