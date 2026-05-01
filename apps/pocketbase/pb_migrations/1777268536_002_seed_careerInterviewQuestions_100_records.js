/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerInterviewQuestions");

  const record0 = new Record(collection);
    record0.set("careerSlug", "machine-learning-engineer");
    record0.set("questionNumber", 1);
    record0.set("question", "What is the bias-variance tradeoff?");
    record0.set("category", "Technical");
    record0.set("difficulty", "Intermediate");
    record0.set("explanation", "The bias-variance tradeoff describes the balance between a model's ability to fit the training data (low bias) and its ability to generalize to new data (low variance). High bias leads to underfitting, while high variance leads to overfitting.");
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
    record1.set("questionNumber", 2);
    record1.set("question", "Explain gradient descent and its variants (SGD, Adam, RMSprop).");
    record1.set("category", "Technical");
    record1.set("difficulty", "Intermediate");
    record1.set("explanation", "Gradient descent is an optimization algorithm that iteratively updates model parameters to minimize loss. SGD updates on single samples, Adam adapts learning rates per parameter, and RMSprop uses exponential moving averages of squared gradients.");
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
    record2.set("questionNumber", 3);
    record2.set("question", "What is regularization? Explain L1 vs L2.");
    record2.set("category", "Technical");
    record2.set("difficulty", "Intermediate");
    record2.set("explanation", "Regularization adds a penalty term to the loss function to prevent overfitting. L1 (Lasso) uses absolute values and encourages sparsity, while L2 (Ridge) uses squared values and distributes weights more evenly.");
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
    record3.set("questionNumber", 4);
    record3.set("question", "How does a Random Forest differ from a single Decision Tree?");
    record3.set("category", "Technical");
    record3.set("difficulty", "Beginner");
    record3.set("explanation", "Random Forest is an ensemble of multiple decision trees trained on random subsets of data and features. It reduces overfitting and variance compared to a single tree by averaging predictions.");
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
    record4.set("questionNumber", 5);
    record4.set("question", "What is cross-validation and why is it important?");
    record4.set("category", "Technical");
    record4.set("difficulty", "Beginner");
    record4.set("explanation", "Cross-validation splits data into k folds, training on k-1 and testing on 1, repeated k times. It provides a more reliable estimate of model performance and helps detect overfitting.");
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
    record5.set("questionNumber", 6);
    record5.set("question", "Explain the concept of overfitting and how to prevent it.");
    record5.set("category", "Technical");
    record5.set("difficulty", "Beginner");
    record5.set("explanation", "Overfitting occurs when a model learns training data too well, including noise, and performs poorly on new data. Prevention methods include regularization, cross-validation, early stopping, and using simpler models.");
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
    record6.set("questionNumber", 7);
    record6.set("question", "What is the difference between classification and regression?");
    record6.set("category", "Technical");
    record6.set("difficulty", "Beginner");
    record6.set("explanation", "Classification predicts discrete categories (e.g., spam/not spam), while regression predicts continuous values (e.g., house prices). Classification uses metrics like accuracy and F1-score, regression uses MSE and R\u00b2.");
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
    record7.set("questionNumber", 8);
    record7.set("question", "How does backpropagation work?");
    record7.set("category", "Technical");
    record7.set("difficulty", "Intermediate");
    record7.set("explanation", "Backpropagation computes gradients of the loss with respect to weights by applying the chain rule backwards through the network. These gradients are used to update weights via gradient descent.");
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
    record8.set("questionNumber", 9);
    record8.set("question", "What is a confusion matrix? Explain precision, recall, F1-score.");
    record8.set("category", "Technical");
    record8.set("difficulty", "Beginner");
    record8.set("explanation", "A confusion matrix shows true positives, false positives, true negatives, and false negatives. Precision = TP/(TP+FP), Recall = TP/(TP+FN), F1-score = 2*(Precision*Recall)/(Precision+Recall).");
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
    record9.set("questionNumber", 10);
    record9.set("question", "What is ROC-AUC and when do you use it?");
    record9.set("category", "Technical");
    record9.set("difficulty", "Intermediate");
    record9.set("explanation", "ROC-AUC measures the area under the Receiver Operating Characteristic curve, showing the trade-off between true positive rate and false positive rate. It's useful for imbalanced datasets and threshold selection.");
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
    record10.set("questionNumber", 11);
    record10.set("question", "What is feature scaling and why is it important?");
    record10.set("category", "Technical");
    record10.set("difficulty", "Beginner");
    record10.set("explanation", "Feature scaling normalizes features to similar ranges (e.g., 0-1 or mean=0, std=1). It's important for distance-based algorithms (KNN, SVM, K-means) and helps gradient descent converge faster.");
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
    record11.set("questionNumber", 12);
    record11.set("question", "Explain the curse of dimensionality.");
    record11.set("category", "Technical");
    record11.set("difficulty", "Intermediate");
    record11.set("explanation", "As the number of features increases, the volume of the feature space grows exponentially, making data sparse. This leads to overfitting, increased computational cost, and reduced model performance.");
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
    record12.set("questionNumber", 13);
    record12.set("question", "What is PCA and how does it work?");
    record12.set("category", "Technical");
    record12.set("difficulty", "Intermediate");
    record12.set("explanation", "Principal Component Analysis finds orthogonal directions (principal components) that capture maximum variance in data. It reduces dimensionality while preserving important information.");
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
    record13.set("questionNumber", 14);
    record13.set("question", "What is the difference between supervised and unsupervised learning?");
    record13.set("category", "Technical");
    record13.set("difficulty", "Beginner");
    record13.set("explanation", "Supervised learning uses labeled data to train models (classification, regression). Unsupervised learning finds patterns in unlabeled data (clustering, dimensionality reduction).");
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
    record14.set("questionNumber", 15);
    record14.set("question", "Explain K-means clustering and its limitations.");
    record14.set("category", "Technical");
    record14.set("difficulty", "Intermediate");
    record14.set("explanation", "K-means partitions data into k clusters by minimizing within-cluster variance. Limitations include sensitivity to initialization, assumption of spherical clusters, and need to specify k beforehand.");
  try {
    app.save(record14);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record15 = new Record(collection);
    record15.set("careerSlug", "machine-learning-engineer");
    record15.set("questionNumber", 16);
    record15.set("question", "What is the difference between batch, mini-batch, and stochastic gradient descent?");
    record15.set("category", "Technical");
    record15.set("difficulty", "Intermediate");
    record15.set("explanation", "Batch GD uses all data per update (stable but slow), SGD uses one sample (fast but noisy), mini-batch uses a subset (balance between stability and speed).");
  try {
    app.save(record15);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record16 = new Record(collection);
    record16.set("careerSlug", "machine-learning-engineer");
    record16.set("questionNumber", 17);
    record16.set("question", "What is a neural network and how does it work?");
    record16.set("category", "Technical");
    record16.set("difficulty", "Beginner");
    record16.set("explanation", "A neural network is a model inspired by biological neurons, consisting of interconnected layers. It learns by adjusting weights through backpropagation to minimize loss.");
  try {
    app.save(record16);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record17 = new Record(collection);
    record17.set("careerSlug", "machine-learning-engineer");
    record17.set("questionNumber", 18);
    record17.set("question", "Explain activation functions and their purposes.");
    record17.set("category", "Technical");
    record17.set("difficulty", "Intermediate");
    record17.set("explanation", "Activation functions introduce non-linearity to neural networks. Common ones: ReLU (fast, sparse), Sigmoid (0-1 output), Tanh (-1 to 1), Softmax (multi-class probabilities).");
  try {
    app.save(record17);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record18 = new Record(collection);
    record18.set("careerSlug", "machine-learning-engineer");
    record18.set("questionNumber", 19);
    record18.set("question", "What is dropout and how does it prevent overfitting?");
    record18.set("category", "Technical");
    record18.set("difficulty", "Intermediate");
    record18.set("explanation", "Dropout randomly deactivates neurons during training with probability p. This prevents co-adaptation and acts as an ensemble, improving generalization.");
  try {
    app.save(record18);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record19 = new Record(collection);
    record19.set("careerSlug", "machine-learning-engineer");
    record19.set("questionNumber", 20);
    record19.set("question", "What is batch normalization and why is it useful?");
    record19.set("category", "Technical");
    record19.set("difficulty", "Intermediate");
    record19.set("explanation", "Batch normalization normalizes layer inputs to have mean 0 and variance 1. It stabilizes training, allows higher learning rates, and acts as a regularizer.");
  try {
    app.save(record19);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record20 = new Record(collection);
    record20.set("careerSlug", "machine-learning-engineer");
    record20.set("questionNumber", 21);
    record20.set("question", "Explain convolutional neural networks (CNNs).");
    record20.set("category", "Technical");
    record20.set("difficulty", "Intermediate");
    record20.set("explanation", "CNNs use convolutional layers to extract spatial features from images. They consist of convolution, pooling, and fully connected layers, reducing parameters through weight sharing.");
  try {
    app.save(record20);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record21 = new Record(collection);
    record21.set("careerSlug", "machine-learning-engineer");
    record21.set("questionNumber", 22);
    record21.set("question", "What is a recurrent neural network (RNN) and its applications?");
    record21.set("category", "Technical");
    record21.set("difficulty", "Intermediate");
    record21.set("explanation", "RNNs process sequential data by maintaining hidden state across time steps. Applications include language modeling, machine translation, and time-series prediction.");
  try {
    app.save(record21);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record22 = new Record(collection);
    record22.set("careerSlug", "machine-learning-engineer");
    record22.set("questionNumber", 23);
    record22.set("question", "What are LSTMs and GRUs? How do they solve the vanishing gradient problem?");
    record22.set("category", "Technical");
    record22.set("difficulty", "Advanced");
    record22.set("explanation", "LSTMs and GRUs use gating mechanisms to control information flow. They maintain long-term dependencies through cell state (LSTM) or reset/update gates (GRU), preventing gradient vanishing.");
  try {
    app.save(record22);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record23 = new Record(collection);
    record23.set("careerSlug", "machine-learning-engineer");
    record23.set("questionNumber", 24);
    record23.set("question", "Explain the attention mechanism.");
    record23.set("category", "Technical");
    record23.set("difficulty", "Advanced");
    record23.set("explanation", "Attention allows models to focus on relevant parts of input. It computes weighted sums of values based on query-key similarity, enabling better long-range dependencies.");
  try {
    app.save(record23);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record24 = new Record(collection);
    record24.set("careerSlug", "machine-learning-engineer");
    record24.set("questionNumber", 25);
    record24.set("question", "What is a transformer and how does it differ from RNNs?");
    record24.set("category", "Technical");
    record24.set("difficulty", "Advanced");
    record24.set("explanation", "Transformers use self-attention instead of recurrence, processing sequences in parallel. They're more efficient, capture long-range dependencies better, and form the basis of models like BERT and GPT.");
  try {
    app.save(record24);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record25 = new Record(collection);
    record25.set("careerSlug", "machine-learning-engineer");
    record25.set("questionNumber", 26);
    record25.set("question", "What is transfer learning and when should you use it?");
    record25.set("category", "Technical");
    record25.set("difficulty", "Intermediate");
    record25.set("explanation", "Transfer learning reuses pre-trained models on new tasks. Use it when you have limited data, need faster training, or want to leverage knowledge from related tasks.");
  try {
    app.save(record25);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record26 = new Record(collection);
    record26.set("careerSlug", "machine-learning-engineer");
    record26.set("questionNumber", 27);
    record26.set("question", "Explain support vector machines (SVMs).");
    record26.set("category", "Technical");
    record26.set("difficulty", "Intermediate");
    record26.set("explanation", "SVMs find the hyperplane that maximizes margin between classes. They use kernel tricks for non-linear separation and work well for binary classification with high-dimensional data.");
  try {
    app.save(record26);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record27 = new Record(collection);
    record27.set("careerSlug", "machine-learning-engineer");
    record27.set("questionNumber", 28);
    record27.set("question", "What is the kernel trick and why is it useful?");
    record27.set("category", "Technical");
    record27.set("difficulty", "Advanced");
    record27.set("explanation", "The kernel trick computes dot products in high-dimensional space without explicitly transforming data. It enables non-linear classification while keeping computational cost manageable.");
  try {
    app.save(record27);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record28 = new Record(collection);
    record28.set("careerSlug", "machine-learning-engineer");
    record28.set("questionNumber", 29);
    record28.set("question", "Explain ensemble methods and their advantages.");
    record28.set("category", "Technical");
    record28.set("difficulty", "Intermediate");
    record28.set("explanation", "Ensemble methods combine multiple models (bagging, boosting, stacking). They reduce variance, improve robustness, and often outperform individual models.");
  try {
    app.save(record28);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record29 = new Record(collection);
    record29.set("careerSlug", "machine-learning-engineer");
    record29.set("questionNumber", 30);
    record29.set("question", "What is boosting and how does it differ from bagging?");
    record29.set("category", "Technical");
    record29.set("difficulty", "Intermediate");
    record29.set("explanation", "Boosting sequentially trains models, each focusing on previous errors. Bagging trains models independently on random samples. Boosting reduces bias, bagging reduces variance.");
  try {
    app.save(record29);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record30 = new Record(collection);
    record30.set("careerSlug", "machine-learning-engineer");
    record30.set("questionNumber", 31);
    record30.set("question", "Explain gradient boosting and XGBoost.");
    record30.set("category", "Technical");
    record30.set("difficulty", "Advanced");
    record30.set("explanation", "Gradient boosting builds trees sequentially to minimize loss. XGBoost adds regularization, parallel processing, and handles missing values, making it faster and more accurate.");
  try {
    app.save(record30);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record31 = new Record(collection);
    record31.set("careerSlug", "machine-learning-engineer");
    record31.set("questionNumber", 32);
    record31.set("question", "What is hyperparameter tuning and common methods?");
    record31.set("category", "Technical");
    record31.set("difficulty", "Intermediate");
    record31.set("explanation", "Hyperparameter tuning optimizes model parameters not learned from data. Methods include grid search (exhaustive), random search (random sampling), and Bayesian optimization.");
  try {
    app.save(record31);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record32 = new Record(collection);
    record32.set("careerSlug", "machine-learning-engineer");
    record32.set("questionNumber", 33);
    record32.set("question", "What is early stopping and how does it work?");
    record32.set("category", "Technical");
    record32.set("difficulty", "Beginner");
    record32.set("explanation", "Early stopping monitors validation loss during training and stops when it stops improving. It prevents overfitting and saves computational resources.");
  try {
    app.save(record32);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record33 = new Record(collection);
    record33.set("careerSlug", "machine-learning-engineer");
    record33.set("questionNumber", 34);
    record33.set("question", "Explain data augmentation and its benefits.");
    record33.set("category", "Technical");
    record33.set("difficulty", "Beginner");
    record33.set("explanation", "Data augmentation artificially increases training data through transformations (rotation, flip, crop for images). It improves model robustness and reduces overfitting.");
  try {
    app.save(record33);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record34 = new Record(collection);
    record34.set("careerSlug", "machine-learning-engineer");
    record34.set("questionNumber", 35);
    record34.set("question", "What is imbalanced data and how do you handle it?");
    record34.set("category", "Technical");
    record34.set("difficulty", "Intermediate");
    record34.set("explanation", "Imbalanced data has unequal class distributions. Solutions include oversampling minority class, undersampling majority class, SMOTE, class weights, and using appropriate metrics (F1, AUC).");
  try {
    app.save(record34);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record35 = new Record(collection);
    record35.set("careerSlug", "machine-learning-engineer");
    record35.set("questionNumber", 36);
    record35.set("question", "What is the difference between parametric and non-parametric models?");
    record35.set("category", "Technical");
    record35.set("difficulty", "Intermediate");
    record35.set("explanation", "Parametric models assume a fixed functional form (e.g., linear regression). Non-parametric models make fewer assumptions and grow in complexity with data (e.g., KNN, decision trees).");
  try {
    app.save(record35);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record36 = new Record(collection);
    record36.set("careerSlug", "machine-learning-engineer");
    record36.set("questionNumber", 37);
    record36.set("question", "Explain the concept of generalization error.");
    record36.set("category", "Technical");
    record36.set("difficulty", "Intermediate");
    record36.set("explanation", "Generalization error is the difference between training and test performance. It's caused by bias (underfitting) and variance (overfitting). The goal is to minimize total error.");
  try {
    app.save(record36);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record37 = new Record(collection);
    record37.set("careerSlug", "machine-learning-engineer");
    record37.set("questionNumber", 38);
    record37.set("question", "What is the difference between correlation and causation?");
    record37.set("category", "Technical");
    record37.set("difficulty", "Beginner");
    record37.set("explanation", "Correlation measures association between variables, causation means one causes the other. Correlation doesn't imply causation; confounding variables can create spurious correlations.");
  try {
    app.save(record37);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record38 = new Record(collection);
    record38.set("careerSlug", "machine-learning-engineer");
    record38.set("questionNumber", 39);
    record38.set("question", "Explain feature importance and how to compute it.");
    record38.set("category", "Technical");
    record38.set("difficulty", "Intermediate");
    record38.set("explanation", "Feature importance measures how much each feature contributes to predictions. Methods include permutation importance, SHAP values, tree-based importance, and coefficient magnitude.");
  try {
    app.save(record38);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record39 = new Record(collection);
    record39.set("careerSlug", "machine-learning-engineer");
    record39.set("questionNumber", 40);
    record39.set("question", "What is the difference between accuracy and precision?");
    record39.set("category", "Technical");
    record39.set("difficulty", "Beginner");
    record39.set("explanation", "Accuracy = (TP+TN)/(Total), measures overall correctness. Precision = TP/(TP+FP), measures false positive rate. Use precision when false positives are costly.");
  try {
    app.save(record39);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record40 = new Record(collection);
    record40.set("careerSlug", "machine-learning-engineer");
    record40.set("questionNumber", 41);
    record40.set("question", "Explain the concept of model interpretability.");
    record40.set("category", "Technical");
    record40.set("difficulty", "Intermediate");
    record40.set("explanation", "Model interpretability is the ability to understand why a model makes predictions. Important for trust, debugging, and compliance. Methods include LIME, SHAP, and attention visualization.");
  try {
    app.save(record40);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record41 = new Record(collection);
    record41.set("careerSlug", "machine-learning-engineer");
    record41.set("questionNumber", 42);
    record41.set("question", "What is the difference between validation and test sets?");
    record41.set("category", "Technical");
    record41.set("difficulty", "Beginner");
    record41.set("explanation", "Validation set tunes hyperparameters and prevents overfitting during training. Test set evaluates final model performance on unseen data. Both should be independent of training data.");
  try {
    app.save(record41);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record42 = new Record(collection);
    record42.set("careerSlug", "machine-learning-engineer");
    record42.set("questionNumber", 43);
    record42.set("question", "Explain the concept of data leakage.");
    record42.set("category", "Technical");
    record42.set("difficulty", "Intermediate");
    record42.set("explanation", "Data leakage occurs when information from test/validation data influences training. It causes overly optimistic performance estimates. Prevent by proper data splitting and feature engineering.");
  try {
    app.save(record42);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record43 = new Record(collection);
    record43.set("careerSlug", "machine-learning-engineer");
    record43.set("questionNumber", 44);
    record43.set("question", "What is the difference between L1 and L2 regularization?");
    record43.set("category", "Technical");
    record43.set("difficulty", "Intermediate");
    record43.set("explanation", "L1 (Lasso) uses |w| penalty, encouraging sparsity (feature selection). L2 (Ridge) uses w\u00b2 penalty, distributing weights evenly. Elastic Net combines both.");
  try {
    app.save(record43);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record44 = new Record(collection);
    record44.set("careerSlug", "machine-learning-engineer");
    record44.set("questionNumber", 45);
    record44.set("question", "Explain the concept of learning curves.");
    record44.set("category", "Technical");
    record44.set("difficulty", "Intermediate");
    record44.set("explanation", "Learning curves plot training and validation error vs. training set size. They diagnose bias (both high) vs. variance (gap between them) and indicate if more data helps.");
  try {
    app.save(record44);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record45 = new Record(collection);
    record45.set("careerSlug", "machine-learning-engineer");
    record45.set("questionNumber", 46);
    record45.set("question", "What is the difference between hard and soft margin SVM?");
    record45.set("category", "Technical");
    record45.set("difficulty", "Advanced");
    record45.set("explanation", "Hard margin SVM requires perfect separation (no misclassification). Soft margin SVM allows some misclassification via slack variables, making it more practical for real data.");
  try {
    app.save(record45);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record46 = new Record(collection);
    record46.set("careerSlug", "machine-learning-engineer");
    record46.set("questionNumber", 47);
    record46.set("question", "Explain the concept of margin in SVMs.");
    record46.set("category", "Technical");
    record46.set("difficulty", "Intermediate");
    record46.set("explanation", "Margin is the distance between the separating hyperplane and nearest data points. Maximizing margin improves generalization and is the core objective of SVMs.");
  try {
    app.save(record46);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record47 = new Record(collection);
    record47.set("careerSlug", "machine-learning-engineer");
    record47.set("questionNumber", 48);
    record47.set("question", "What is the difference between one-vs-rest and one-vs-one for multi-class classification?");
    record47.set("category", "Technical");
    record47.set("difficulty", "Advanced");
    record47.set("explanation", "One-vs-rest trains k binary classifiers (one per class). One-vs-one trains k(k-1)/2 classifiers (one per pair). One-vs-one is slower but often more accurate.");
  try {
    app.save(record47);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record48 = new Record(collection);
    record48.set("careerSlug", "machine-learning-engineer");
    record48.set("questionNumber", 49);
    record48.set("question", "Explain the concept of decision boundaries.");
    record48.set("category", "Technical");
    record48.set("difficulty", "Intermediate");
    record48.set("explanation", "Decision boundaries are the regions where a classifier assigns different classes. Linear models have linear boundaries, while non-linear models can have complex boundaries.");
  try {
    app.save(record48);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record49 = new Record(collection);
    record49.set("careerSlug", "machine-learning-engineer");
    record49.set("questionNumber", 50);
    record49.set("question", "What is the difference between parametric and non-parametric density estimation?");
    record49.set("category", "Technical");
    record49.set("difficulty", "Advanced");
    record49.set("explanation", "Parametric assumes a known distribution (e.g., Gaussian). Non-parametric makes no assumptions (e.g., kernel density estimation). Non-parametric is more flexible but needs more data.");
  try {
    app.save(record49);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record50 = new Record(collection);
    record50.set("careerSlug", "machine-learning-engineer");
    record50.set("questionNumber", 51);
    record50.set("question", "Explain the concept of Bayesian inference.");
    record50.set("category", "Technical");
    record50.set("difficulty", "Advanced");
    record50.set("explanation", "Bayesian inference updates prior beliefs with observed data using Bayes' theorem: P(\u03b8|data) \u221d P(data|\u03b8)P(\u03b8). It provides uncertainty estimates and principled decision-making.");
  try {
    app.save(record50);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record51 = new Record(collection);
    record51.set("careerSlug", "machine-learning-engineer");
    record51.set("questionNumber", 52);
    record51.set("question", "What is the difference between frequentist and Bayesian statistics?");
    record51.set("category", "Technical");
    record51.set("difficulty", "Advanced");
    record51.set("explanation", "Frequentist treats parameters as fixed, uses p-values and confidence intervals. Bayesian treats parameters as random, uses prior/posterior distributions and credible intervals.");
  try {
    app.save(record51);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record52 = new Record(collection);
    record52.set("careerSlug", "machine-learning-engineer");
    record52.set("questionNumber", 53);
    record52.set("question", "Explain the concept of maximum likelihood estimation (MLE).");
    record52.set("category", "Technical");
    record52.set("difficulty", "Advanced");
    record52.set("explanation", "MLE finds parameters that maximize the likelihood of observed data. It's a fundamental principle in statistics and machine learning for parameter estimation.");
  try {
    app.save(record52);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record53 = new Record(collection);
    record53.set("careerSlug", "machine-learning-engineer");
    record53.set("questionNumber", 54);
    record53.set("question", "What is the difference between generative and discriminative models?");
    record53.set("category", "Technical");
    record53.set("difficulty", "Intermediate");
    record53.set("explanation", "Generative models learn P(X,Y) and can generate data (e.g., Naive Bayes, GANs). Discriminative models learn P(Y|X) directly (e.g., logistic regression, SVMs).");
  try {
    app.save(record53);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record54 = new Record(collection);
    record54.set("careerSlug", "machine-learning-engineer");
    record54.set("questionNumber", 55);
    record54.set("question", "Explain the concept of Naive Bayes.");
    record54.set("category", "Technical");
    record54.set("difficulty", "Intermediate");
    record54.set("explanation", "Naive Bayes assumes feature independence given the class. Despite this unrealistic assumption, it works well in practice, especially for text classification.");
  try {
    app.save(record54);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record55 = new Record(collection);
    record55.set("careerSlug", "machine-learning-engineer");
    record55.set("questionNumber", 56);
    record55.set("question", "What is the difference between batch and online learning?");
    record55.set("category", "Technical");
    record55.set("difficulty", "Intermediate");
    record55.set("explanation", "Batch learning trains on all data at once. Online learning updates incrementally with new samples. Online learning is useful for streaming data and large datasets.");
  try {
    app.save(record55);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record56 = new Record(collection);
    record56.set("careerSlug", "machine-learning-engineer");
    record56.set("questionNumber", 57);
    record56.set("question", "Explain the concept of reinforcement learning.");
    record56.set("category", "Technical");
    record56.set("difficulty", "Intermediate");
    record56.set("explanation", "Reinforcement learning trains agents to maximize cumulative reward through interaction with an environment. It uses exploration-exploitation trade-off and value/policy functions.");
  try {
    app.save(record56);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record57 = new Record(collection);
    record57.set("careerSlug", "machine-learning-engineer");
    record57.set("questionNumber", 58);
    record57.set("question", "What is the difference between value-based and policy-based RL?");
    record57.set("category", "Technical");
    record57.set("difficulty", "Advanced");
    record57.set("explanation", "Value-based RL learns value functions (Q-learning, DQN). Policy-based RL learns policies directly (policy gradient, actor-critic). Policy-based is better for continuous actions.");
  try {
    app.save(record57);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record58 = new Record(collection);
    record58.set("careerSlug", "machine-learning-engineer");
    record58.set("questionNumber", 59);
    record58.set("question", "Explain the concept of Markov Decision Process (MDP).");
    record58.set("category", "Technical");
    record58.set("difficulty", "Advanced");
    record58.set("explanation", "MDP models sequential decision-making with states, actions, rewards, and transitions. It assumes Markov property: future depends only on current state, not history.");
  try {
    app.save(record58);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record59 = new Record(collection);
    record59.set("careerSlug", "machine-learning-engineer");
    record59.set("questionNumber", 60);
    record59.set("question", "What is the difference between exploration and exploitation?");
    record59.set("category", "Technical");
    record59.set("difficulty", "Intermediate");
    record59.set("explanation", "Exploration tries new actions to learn, exploitation uses known good actions. Balancing them is crucial in RL. Strategies include epsilon-greedy and upper confidence bound.");
  try {
    app.save(record59);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record60 = new Record(collection);
    record60.set("careerSlug", "machine-learning-engineer");
    record60.set("questionNumber", 61);
    record60.set("question", "Explain the concept of clustering.");
    record60.set("category", "Technical");
    record60.set("difficulty", "Beginner");
    record60.set("explanation", "Clustering groups similar data points without labels. Common algorithms: K-means (centroid-based), hierarchical (tree-based), DBSCAN (density-based).");
  try {
    app.save(record60);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record61 = new Record(collection);
    record61.set("careerSlug", "machine-learning-engineer");
    record61.set("questionNumber", 62);
    record61.set("question", "What is the difference between hard and soft clustering?");
    record61.set("category", "Technical");
    record61.set("difficulty", "Intermediate");
    record61.set("explanation", "Hard clustering assigns each point to one cluster (K-means). Soft clustering assigns probabilities to clusters (Gaussian Mixture Models). Soft clustering provides more information.");
  try {
    app.save(record61);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record62 = new Record(collection);
    record62.set("careerSlug", "machine-learning-engineer");
    record62.set("questionNumber", 63);
    record62.set("question", "Explain hierarchical clustering and its types.");
    record62.set("category", "Technical");
    record62.set("difficulty", "Intermediate");
    record62.set("explanation", "Hierarchical clustering builds a tree of clusters. Agglomerative (bottom-up) merges clusters, divisive (top-down) splits clusters. Dendrograms visualize the hierarchy.");
  try {
    app.save(record62);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record63 = new Record(collection);
    record63.set("careerSlug", "machine-learning-engineer");
    record63.set("questionNumber", 64);
    record63.set("question", "What is DBSCAN and how does it differ from K-means?");
    record63.set("category", "Technical");
    record63.set("difficulty", "Intermediate");
    record63.set("explanation", "DBSCAN groups points by density, doesn't require specifying k, and finds arbitrary-shaped clusters. K-means requires k and assumes spherical clusters.");
  try {
    app.save(record63);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record64 = new Record(collection);
    record64.set("careerSlug", "machine-learning-engineer");
    record64.set("questionNumber", 65);
    record64.set("question", "Explain the concept of silhouette score.");
    record64.set("category", "Technical");
    record64.set("difficulty", "Intermediate");
    record64.set("explanation", "Silhouette score measures how similar a point is to its cluster vs. other clusters. Range: -1 to 1, higher is better. Useful for evaluating clustering quality.");
  try {
    app.save(record64);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record65 = new Record(collection);
    record65.set("careerSlug", "machine-learning-engineer");
    record65.set("questionNumber", 66);
    record65.set("question", "What is the difference between supervised and semi-supervised learning?");
    record65.set("category", "Technical");
    record65.set("difficulty", "Beginner");
    record65.set("explanation", "Supervised learning uses fully labeled data. Semi-supervised uses mostly unlabeled data with some labels. Semi-supervised is useful when labeling is expensive.");
  try {
    app.save(record65);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record66 = new Record(collection);
    record66.set("careerSlug", "machine-learning-engineer");
    record66.set("questionNumber", 67);
    record66.set("question", "Explain the concept of self-supervised learning.");
    record66.set("category", "Technical");
    record66.set("difficulty", "Advanced");
    record66.set("explanation", "Self-supervised learning creates labels from unlabeled data (e.g., predicting next word, image rotation). It enables pre-training on large unlabeled datasets.");
  try {
    app.save(record66);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record67 = new Record(collection);
    record67.set("careerSlug", "machine-learning-engineer");
    record67.set("questionNumber", 68);
    record67.set("question", "What is the difference between classification and clustering?");
    record67.set("category", "Technical");
    record67.set("difficulty", "Beginner");
    record67.set("explanation", "Classification predicts labels for new data using labeled training data. Clustering groups unlabeled data by similarity. Classification is supervised, clustering is unsupervised.");
  try {
    app.save(record67);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record68 = new Record(collection);
    record68.set("careerSlug", "machine-learning-engineer");
    record68.set("questionNumber", 69);
    record68.set("question", "Explain the concept of anomaly detection.");
    record68.set("category", "Technical");
    record68.set("difficulty", "Intermediate");
    record68.set("explanation", "Anomaly detection identifies unusual data points. Methods include isolation forests, one-class SVM, autoencoders. Applications: fraud detection, network intrusion detection.");
  try {
    app.save(record68);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record69 = new Record(collection);
    record69.set("careerSlug", "machine-learning-engineer");
    record69.set("questionNumber", 70);
    record69.set("question", "What is the difference between outliers and anomalies?");
    record69.set("category", "Technical");
    record69.set("difficulty", "Intermediate");
    record69.set("explanation", "Outliers are extreme values in a feature. Anomalies are unusual patterns in multivariate data. Anomalies are more relevant for real-world applications.");
  try {
    app.save(record69);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record70 = new Record(collection);
    record70.set("careerSlug", "machine-learning-engineer");
    record70.set("questionNumber", 71);
    record70.set("question", "Explain the concept of time-series forecasting.");
    record70.set("category", "Technical");
    record70.set("difficulty", "Intermediate");
    record70.set("explanation", "Time-series forecasting predicts future values based on historical data. Methods: ARIMA, exponential smoothing, RNNs, Transformers. Key: capturing trends, seasonality, and dependencies.");
  try {
    app.save(record70);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record71 = new Record(collection);
    record71.set("careerSlug", "machine-learning-engineer");
    record71.set("questionNumber", 72);
    record71.set("question", "What is the difference between stationary and non-stationary time series?");
    record71.set("category", "Technical");
    record71.set("difficulty", "Intermediate");
    record71.set("explanation", "Stationary series has constant mean/variance over time. Non-stationary has trends or seasonality. ARIMA requires differencing to make series stationary.");
  try {
    app.save(record71);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record72 = new Record(collection);
    record72.set("careerSlug", "machine-learning-engineer");
    record72.set("questionNumber", 73);
    record72.set("question", "Explain the concept of autocorrelation.");
    record72.set("category", "Technical");
    record72.set("difficulty", "Intermediate");
    record72.set("explanation", "Autocorrelation measures correlation between a series and its lagged values. High autocorrelation indicates temporal dependencies. ACF/PACF plots help identify ARIMA parameters.");
  try {
    app.save(record72);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record73 = new Record(collection);
    record73.set("careerSlug", "machine-learning-engineer");
    record73.set("questionNumber", 74);
    record73.set("question", "What is the difference between ARIMA and exponential smoothing?");
    record73.set("category", "Technical");
    record73.set("difficulty", "Advanced");
    record73.set("explanation", "ARIMA models autoregressive and moving average components. Exponential smoothing weights recent observations more. ARIMA is more flexible, exponential smoothing is simpler.");
  try {
    app.save(record73);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record74 = new Record(collection);
    record74.set("careerSlug", "machine-learning-engineer");
    record74.set("questionNumber", 75);
    record74.set("question", "Explain the concept of natural language processing (NLP).");
    record74.set("category", "Technical");
    record74.set("difficulty", "Beginner");
    record74.set("explanation", "NLP processes and analyzes text data. Tasks: tokenization, POS tagging, NER, sentiment analysis, machine translation. Modern NLP uses deep learning and transformers.");
  try {
    app.save(record74);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record75 = new Record(collection);
    record75.set("careerSlug", "machine-learning-engineer");
    record75.set("questionNumber", 76);
    record75.set("question", "What is the difference between bag-of-words and word embeddings?");
    record75.set("category", "Technical");
    record75.set("difficulty", "Intermediate");
    record75.set("explanation", "Bag-of-words represents text as word counts, ignoring order. Word embeddings (Word2Vec, GloVe) represent words as dense vectors capturing semantic meaning.");
  try {
    app.save(record75);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record76 = new Record(collection);
    record76.set("careerSlug", "machine-learning-engineer");
    record76.set("questionNumber", 77);
    record76.set("question", "Explain the concept of word2vec.");
    record76.set("category", "Technical");
    record76.set("difficulty", "Intermediate");
    record76.set("explanation", "Word2Vec learns word embeddings using neural networks. Skip-gram predicts context from word, CBOW predicts word from context. Embeddings capture semantic relationships.");
  try {
    app.save(record76);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record77 = new Record(collection);
    record77.set("careerSlug", "machine-learning-engineer");
    record77.set("questionNumber", 78);
    record77.set("question", "What is the difference between BERT and GPT?");
    record77.set("category", "Technical");
    record77.set("difficulty", "Advanced");
    record77.set("explanation", "BERT is bidirectional, trained with masked language modeling, good for understanding. GPT is unidirectional, trained with causal language modeling, good for generation.");
  try {
    app.save(record77);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record78 = new Record(collection);
    record78.set("careerSlug", "machine-learning-engineer");
    record78.set("questionNumber", 79);
    record78.set("question", "Explain the concept of sentiment analysis.");
    record78.set("category", "Technical");
    record78.set("difficulty", "Beginner");
    record78.set("explanation", "Sentiment analysis determines emotional tone of text (positive, negative, neutral). Methods: rule-based, machine learning, deep learning. Applications: product reviews, social media.");
  try {
    app.save(record78);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record79 = new Record(collection);
    record79.set("careerSlug", "machine-learning-engineer");
    record79.set("questionNumber", 80);
    record79.set("question", "What is the difference between named entity recognition and part-of-speech tagging?");
    record79.set("category", "Technical");
    record79.set("difficulty", "Intermediate");
    record79.set("explanation", "NER identifies entities (person, location, organization). POS tagging identifies word types (noun, verb, adjective). Both are fundamental NLP tasks.");
  try {
    app.save(record79);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record80 = new Record(collection);
    record80.set("careerSlug", "machine-learning-engineer");
    record80.set("questionNumber", 81);
    record80.set("question", "Explain the concept of computer vision.");
    record80.set("category", "Technical");
    record80.set("difficulty", "Beginner");
    record80.set("explanation", "Computer vision processes and analyzes images. Tasks: classification, detection, segmentation, pose estimation. Modern CV uses CNNs and transformers.");
  try {
    app.save(record80);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record81 = new Record(collection);
    record81.set("careerSlug", "machine-learning-engineer");
    record81.set("questionNumber", 82);
    record81.set("question", "What is the difference between image classification and object detection?");
    record81.set("category", "Technical");
    record81.set("difficulty", "Beginner");
    record81.set("explanation", "Image classification predicts class of entire image. Object detection locates and classifies multiple objects. Detection is more complex and requires bounding boxes.");
  try {
    app.save(record81);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record82 = new Record(collection);
    record82.set("careerSlug", "machine-learning-engineer");
    record82.set("questionNumber", 83);
    record82.set("question", "Explain the concept of semantic segmentation.");
    record82.set("category", "Technical");
    record82.set("difficulty", "Intermediate");
    record82.set("explanation", "Semantic segmentation assigns class labels to each pixel. Applications: autonomous driving, medical imaging. Methods: FCN, U-Net, DeepLab.");
  try {
    app.save(record82);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record83 = new Record(collection);
    record83.set("careerSlug", "machine-learning-engineer");
    record83.set("questionNumber", 84);
    record83.set("question", "What is the difference between semantic and instance segmentation?");
    record83.set("category", "Technical");
    record83.set("difficulty", "Intermediate");
    record83.set("explanation", "Semantic segmentation labels pixels by class. Instance segmentation distinguishes individual objects of same class. Instance segmentation is more challenging.");
  try {
    app.save(record83);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record84 = new Record(collection);
    record84.set("careerSlug", "machine-learning-engineer");
    record84.set("questionNumber", 85);
    record84.set("question", "Explain the concept of generative adversarial networks (GANs).");
    record84.set("category", "Technical");
    record84.set("difficulty", "Advanced");
    record84.set("explanation", "GANs have generator (creates fake data) and discriminator (distinguishes real/fake). They compete in a game, improving both. Applications: image generation, style transfer.");
  try {
    app.save(record84);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record85 = new Record(collection);
    record85.set("careerSlug", "machine-learning-engineer");
    record85.set("questionNumber", 86);
    record85.set("question", "What is the difference between discriminator and generator in GANs?");
    record85.set("category", "Technical");
    record85.set("difficulty", "Advanced");
    record85.set("explanation", "Generator creates fake data from noise. Discriminator classifies real vs. fake. Generator tries to fool discriminator, discriminator tries to catch fakes.");
  try {
    app.save(record85);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record86 = new Record(collection);
    record86.set("careerSlug", "machine-learning-engineer");
    record86.set("questionNumber", 87);
    record86.set("question", "Explain the concept of variational autoencoders (VAEs).");
    record86.set("category", "Technical");
    record86.set("difficulty", "Advanced");
    record86.set("explanation", "VAEs learn latent representations with probabilistic encoder/decoder. They enable generation and interpolation. More stable than GANs but produce blurrier images.");
  try {
    app.save(record86);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record87 = new Record(collection);
    record87.set("careerSlug", "machine-learning-engineer");
    record87.set("questionNumber", 88);
    record87.set("question", "What is the difference between autoencoders and VAEs?");
    record87.set("category", "Technical");
    record87.set("difficulty", "Advanced");
    record87.set("explanation", "Autoencoders learn deterministic latent codes. VAEs learn probabilistic latent distributions. VAEs enable generation, autoencoders are better for reconstruction.");
  try {
    app.save(record87);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record88 = new Record(collection);
    record88.set("careerSlug", "machine-learning-engineer");
    record88.set("questionNumber", 89);
    record88.set("question", "Explain the concept of metric learning.");
    record88.set("category", "Technical");
    record88.set("difficulty", "Advanced");
    record88.set("explanation", "Metric learning learns distance functions where similar samples are close, dissimilar are far. Methods: triplet loss, contrastive loss. Applications: face recognition, recommendation.");
  try {
    app.save(record88);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record89 = new Record(collection);
    record89.set("careerSlug", "machine-learning-engineer");
    record89.set("questionNumber", 90);
    record89.set("question", "What is the difference between Euclidean and cosine distance?");
    record89.set("category", "Technical");
    record89.set("difficulty", "Intermediate");
    record89.set("explanation", "Euclidean distance measures straight-line distance. Cosine distance measures angle between vectors. Cosine is scale-invariant, useful for high-dimensional data.");
  try {
    app.save(record89);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record90 = new Record(collection);
    record90.set("careerSlug", "machine-learning-engineer");
    record90.set("questionNumber", 91);
    record90.set("question", "Explain the concept of matrix factorization.");
    record90.set("category", "Technical");
    record90.set("difficulty", "Intermediate");
    record90.set("explanation", "Matrix factorization decomposes a matrix into lower-rank factors. Applications: collaborative filtering, dimensionality reduction. Methods: SVD, NMF.");
  try {
    app.save(record90);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record91 = new Record(collection);
    record91.set("careerSlug", "machine-learning-engineer");
    record91.set("questionNumber", 92);
    record91.set("question", "What is the difference between collaborative filtering and content-based filtering?");
    record91.set("category", "Technical");
    record91.set("difficulty", "Intermediate");
    record91.set("explanation", "Collaborative filtering uses user-item interactions. Content-based uses item features. Hybrid combines both. Collaborative filtering is more popular but has cold-start problem.");
  try {
    app.save(record91);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record92 = new Record(collection);
    record92.set("careerSlug", "machine-learning-engineer");
    record92.set("questionNumber", 93);
    record92.set("question", "Explain the concept of recommendation systems.");
    record92.set("category", "Technical");
    record92.set("difficulty", "Intermediate");
    record92.set("explanation", "Recommendation systems predict user preferences. Methods: collaborative filtering, content-based, hybrid, deep learning. Applications: Netflix, Amazon, Spotify.");
  try {
    app.save(record92);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record93 = new Record(collection);
    record93.set("careerSlug", "machine-learning-engineer");
    record93.set("questionNumber", 94);
    record93.set("question", "What is the difference between ranking and rating prediction?");
    record93.set("category", "Technical");
    record93.set("difficulty", "Intermediate");
    record93.set("explanation", "Rating prediction estimates user ratings for items. Ranking predicts item order by preference. Ranking is more practical for recommendations.");
  try {
    app.save(record93);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record94 = new Record(collection);
    record94.set("careerSlug", "machine-learning-engineer");
    record94.set("questionNumber", 95);
    record94.set("question", "Explain the concept of cold-start problem.");
    record94.set("category", "Technical");
    record94.set("difficulty", "Intermediate");
    record94.set("explanation", "Cold-start occurs when new users/items have no interaction history. Solutions: content-based filtering, hybrid approaches, popularity-based recommendations.");
  try {
    app.save(record94);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record95 = new Record(collection);
    record95.set("careerSlug", "machine-learning-engineer");
    record95.set("questionNumber", 96);
    record95.set("question", "What is the difference between explicit and implicit feedback?");
    record95.set("category", "Technical");
    record95.set("difficulty", "Intermediate");
    record95.set("explanation", "Explicit feedback: user ratings, reviews. Implicit feedback: clicks, purchases, views. Implicit is more abundant but noisier.");
  try {
    app.save(record95);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record96 = new Record(collection);
    record96.set("careerSlug", "machine-learning-engineer");
    record96.set("questionNumber", 97);
    record96.set("question", "Explain the concept of A/B testing.");
    record96.set("category", "Technical");
    record96.set("difficulty", "Intermediate");
    record96.set("explanation", "A/B testing compares two versions to determine which performs better. It's the gold standard for evaluating changes. Requires statistical significance testing.");
  try {
    app.save(record96);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record97 = new Record(collection);
    record97.set("careerSlug", "machine-learning-engineer");
    record97.set("questionNumber", 98);
    record97.set("question", "What is the difference between statistical significance and practical significance?");
    record97.set("category", "Technical");
    record97.set("difficulty", "Advanced");
    record97.set("explanation", "Statistical significance means result unlikely by chance (p < 0.05). Practical significance means result is meaningful in real-world. Both matter for decisions.");
  try {
    app.save(record97);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record98 = new Record(collection);
    record98.set("careerSlug", "machine-learning-engineer");
    record98.set("questionNumber", 99);
    record98.set("question", "Explain the concept of p-value.");
    record98.set("category", "Technical");
    record98.set("difficulty", "Intermediate");
    record98.set("explanation", "P-value is probability of observing data if null hypothesis is true. Lower p-value suggests stronger evidence against null. Threshold: typically 0.05.");
  try {
    app.save(record98);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record99 = new Record(collection);
    record99.set("careerSlug", "machine-learning-engineer");
    record99.set("questionNumber", 100);
    record99.set("question", "What is the difference between type I and type II errors?");
    record99.set("category", "Technical");
    record99.set("difficulty", "Intermediate");
    record99.set("explanation", "Type I error: reject true null hypothesis (false positive). Type II error: fail to reject false null hypothesis (false negative). Trade-off controlled by significance level.");
  try {
    app.save(record99);
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
