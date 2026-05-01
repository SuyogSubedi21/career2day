/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerQuizzes");

  const record0 = new Record(collection);
    record0.set("careerSlug", "machine-learning-engineer");
    record0.set("difficulty", "Basic");
    record0.set("questionNumber", 1);
    record0.set("question", "Quiz Question 1");
    record0.set("options", ["Option A", "Option B", "Option C", "Option D"]);
    record0.set("correctAnswer", "A");
    record0.set("explanation", "Placeholder explanation - to be replaced");
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
    record1.set("question", "Quiz Question 2");
    record1.set("options", ["Option A", "Option B", "Option C", "Option D"]);
    record1.set("correctAnswer", "A");
    record1.set("explanation", "Placeholder explanation - to be replaced");
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
    record2.set("question", "Quiz Question 3");
    record2.set("options", ["Option A", "Option B", "Option C", "Option D"]);
    record2.set("correctAnswer", "A");
    record2.set("explanation", "Placeholder explanation - to be replaced");
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
    record3.set("question", "Quiz Question 4");
    record3.set("options", ["Option A", "Option B", "Option C", "Option D"]);
    record3.set("correctAnswer", "A");
    record3.set("explanation", "Placeholder explanation - to be replaced");
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
    record4.set("question", "Quiz Question 5");
    record4.set("options", ["Option A", "Option B", "Option C", "Option D"]);
    record4.set("correctAnswer", "A");
    record4.set("explanation", "Placeholder explanation - to be replaced");
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
    record5.set("question", "Quiz Question 6");
    record5.set("options", ["Option A", "Option B", "Option C", "Option D"]);
    record5.set("correctAnswer", "A");
    record5.set("explanation", "Placeholder explanation - to be replaced");
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
    record6.set("question", "Quiz Question 7");
    record6.set("options", ["Option A", "Option B", "Option C", "Option D"]);
    record6.set("correctAnswer", "A");
    record6.set("explanation", "Placeholder explanation - to be replaced");
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
    record7.set("question", "Quiz Question 8");
    record7.set("options", ["Option A", "Option B", "Option C", "Option D"]);
    record7.set("correctAnswer", "A");
    record7.set("explanation", "Placeholder explanation - to be replaced");
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
    record8.set("question", "Quiz Question 9");
    record8.set("options", ["Option A", "Option B", "Option C", "Option D"]);
    record8.set("correctAnswer", "A");
    record8.set("explanation", "Placeholder explanation - to be replaced");
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
    record9.set("question", "Quiz Question 10");
    record9.set("options", ["Option A", "Option B", "Option C", "Option D"]);
    record9.set("correctAnswer", "A");
    record9.set("explanation", "Placeholder explanation - to be replaced");
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
    record10.set("question", "Quiz Question 11");
    record10.set("options", ["Option A", "Option B", "Option C", "Option D"]);
    record10.set("correctAnswer", "A");
    record10.set("explanation", "Placeholder explanation - to be replaced");
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
    record11.set("question", "Quiz Question 12");
    record11.set("options", ["Option A", "Option B", "Option C", "Option D"]);
    record11.set("correctAnswer", "A");
    record11.set("explanation", "Placeholder explanation - to be replaced");
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
    record12.set("question", "Quiz Question 13");
    record12.set("options", ["Option A", "Option B", "Option C", "Option D"]);
    record12.set("correctAnswer", "A");
    record12.set("explanation", "Placeholder explanation - to be replaced");
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
    record13.set("question", "Quiz Question 14");
    record13.set("options", ["Option A", "Option B", "Option C", "Option D"]);
    record13.set("correctAnswer", "A");
    record13.set("explanation", "Placeholder explanation - to be replaced");
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
    record14.set("question", "Quiz Question 15");
    record14.set("options", ["Option A", "Option B", "Option C", "Option D"]);
    record14.set("correctAnswer", "A");
    record14.set("explanation", "Placeholder explanation - to be replaced");
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
