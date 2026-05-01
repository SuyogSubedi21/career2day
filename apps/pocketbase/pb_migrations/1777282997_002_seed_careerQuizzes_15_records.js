/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerQuizzes");

  const record0 = new Record(collection);
    record0.set("careerSlug", "machine-learning-engineer");
    record0.set("difficulty", "Basic");
    record0.set("questionNumber", 1);
    record0.set("question", "What is machine learning?");
    record0.set("options", ["A method of programming", "A subset of artificial intelligence", "A type of database", "A programming language"]);
    record0.set("correctAnswer", "A subset of artificial intelligence");
    record0.set("explanation", "Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience.");
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
    record1.set("difficulty", "Basic");
    record1.set("questionNumber", 2);
    record1.set("question", "What is supervised learning?");
    record1.set("options", ["Learning without labels", "Learning with labeled data", "Learning from images only", "Learning from text only"]);
    record1.set("correctAnswer", "Learning with labeled data");
    record1.set("explanation", "Supervised learning uses labeled training data to train models.");
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
    record2.set("difficulty", "Basic");
    record2.set("questionNumber", 3);
    record2.set("question", "What is unsupervised learning?");
    record2.set("options", ["Learning with labels", "Learning without labels", "Learning from supervised data", "Learning from teachers"]);
    record2.set("correctAnswer", "Learning without labels");
    record2.set("explanation", "Unsupervised learning finds patterns in unlabeled data.");
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
    record3.set("difficulty", "Basic");
    record3.set("questionNumber", 4);
    record3.set("question", "What is a neural network?");
    record3.set("options", ["A biological network", "A computer network", "A computational model inspired by biological neurons", "A social network"]);
    record3.set("correctAnswer", "A computational model inspired by biological neurons");
    record3.set("explanation", "Neural networks are computational models inspired by biological neural networks.");
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
    record4.set("difficulty", "Basic");
    record4.set("questionNumber", 5);
    record4.set("question", "What is overfitting?");
    record4.set("options", ["Model performs well on training data but poorly on test data", "Model performs poorly on both", "Model performs well on both", "Model is too simple"]);
    record4.set("correctAnswer", "Model performs well on training data but poorly on test data");
    record4.set("explanation", "Overfitting occurs when a model learns the training data too well, including noise.");
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
    record5.set("difficulty", "Medium");
    record5.set("questionNumber", 6);
    record5.set("question", "What is the purpose of cross-validation?");
    record5.set("options", ["To increase model accuracy", "To assess model performance on unseen data", "To reduce training time", "To increase dataset size"]);
    record5.set("correctAnswer", "To assess model performance on unseen data");
    record5.set("explanation", "Cross-validation helps estimate how well a model will generalize to unseen data.");
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
    record6.set("careerSlug", "machine-learning-engineer");
    record6.set("difficulty", "Medium");
    record6.set("questionNumber", 7);
    record6.set("question", "What is gradient descent?");
    record6.set("options", ["A type of descent in mountains", "An optimization algorithm", "A data structure", "A loss function"]);
    record6.set("correctAnswer", "An optimization algorithm");
    record6.set("explanation", "Gradient descent is an optimization algorithm used to minimize loss functions.");
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
    record7.set("careerSlug", "machine-learning-engineer");
    record7.set("difficulty", "Medium");
    record7.set("questionNumber", 8);
    record7.set("question", "What is a confusion matrix used for?");
    record7.set("options", ["Confusing the model", "Evaluating classification models", "Training models", "Preprocessing data"]);
    record7.set("correctAnswer", "Evaluating classification models");
    record7.set("explanation", "A confusion matrix is used to evaluate the performance of classification models.");
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
    record8.set("careerSlug", "machine-learning-engineer");
    record8.set("difficulty", "Medium");
    record8.set("questionNumber", 9);
    record8.set("question", "What is feature scaling?");
    record8.set("options", ["Removing features", "Normalizing feature values", "Adding more features", "Selecting features"]);
    record8.set("correctAnswer", "Normalizing feature values");
    record8.set("explanation", "Feature scaling normalizes the range of features to improve model performance.");
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
    record9.set("careerSlug", "machine-learning-engineer");
    record9.set("difficulty", "Medium");
    record9.set("questionNumber", 10);
    record9.set("question", "What is regularization?");
    record9.set("options", ["Making data regular", "Adding penalty to loss function", "Removing outliers", "Scaling features"]);
    record9.set("correctAnswer", "Adding penalty to loss function");
    record9.set("explanation", "Regularization adds a penalty term to the loss function to prevent overfitting.");
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
    record10.set("careerSlug", "machine-learning-engineer");
    record10.set("difficulty", "Hard");
    record10.set("questionNumber", 11);
    record10.set("question", "What is the curse of dimensionality?");
    record10.set("options", ["Too many dimensions in data", "Performance degradation with high dimensions", "Difficulty in visualization", "All of the above"]);
    record10.set("correctAnswer", "All of the above");
    record10.set("explanation", "The curse of dimensionality refers to various phenomena that arise when analyzing data in high-dimensional spaces.");
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
    record11.set("careerSlug", "machine-learning-engineer");
    record11.set("difficulty", "Hard");
    record11.set("questionNumber", 12);
    record11.set("question", "What is backpropagation?");
    record11.set("options", ["Moving backwards in data", "Algorithm for training neural networks", "A type of activation function", "A regularization technique"]);
    record11.set("correctAnswer", "Algorithm for training neural networks");
    record11.set("explanation", "Backpropagation is an algorithm for computing gradients in neural networks.");
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
    record12.set("careerSlug", "machine-learning-engineer");
    record12.set("difficulty", "Hard");
    record12.set("questionNumber", 13);
    record12.set("question", "What is batch normalization?");
    record12.set("options", ["Normalizing batches of data", "Technique to stabilize training", "Reducing internal covariate shift", "All of the above"]);
    record12.set("correctAnswer", "All of the above");
    record12.set("explanation", "Batch normalization normalizes inputs to each layer, stabilizing training and reducing internal covariate shift.");
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
    record13.set("careerSlug", "machine-learning-engineer");
    record13.set("difficulty", "Hard");
    record13.set("questionNumber", 14);
    record13.set("question", "What is attention mechanism?");
    record13.set("options", ["Paying attention to data", "Mechanism to focus on relevant parts", "Used in transformers", "All of the above"]);
    record13.set("correctAnswer", "All of the above");
    record13.set("explanation", "Attention mechanism allows models to focus on relevant parts of input, widely used in transformers.");
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
    record14.set("careerSlug", "machine-learning-engineer");
    record14.set("difficulty", "Hard");
    record14.set("questionNumber", 15);
    record14.set("question", "What is transfer learning?");
    record14.set("options", ["Transferring data", "Using pre-trained models for new tasks", "Moving models between servers", "Sharing models between users"]);
    record14.set("correctAnswer", "Using pre-trained models for new tasks");
    record14.set("explanation", "Transfer learning leverages knowledge from pre-trained models to solve new tasks efficiently.");
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
