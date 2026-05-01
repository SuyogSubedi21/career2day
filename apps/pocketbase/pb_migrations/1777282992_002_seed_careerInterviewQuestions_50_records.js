/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerInterviewQuestions");

  const record0 = new Record(collection);
    record0.set("careerSlug", "machine-learning-engineer");
    record0.set("questionNumber", 1);
    record0.set("question", "Question 1");
    record0.set("difficulty", "Intermediate");
    record0.set("category", "Technical");
    record0.set("explanation", "Sample explanation");
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
    record1.set("question", "Question 2");
    record1.set("difficulty", "Intermediate");
    record1.set("category", "Technical");
    record1.set("explanation", "Sample explanation");
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
    record2.set("question", "Question 3");
    record2.set("difficulty", "Intermediate");
    record2.set("category", "Technical");
    record2.set("explanation", "Sample explanation");
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
    record3.set("question", "Question 4");
    record3.set("difficulty", "Intermediate");
    record3.set("category", "Technical");
    record3.set("explanation", "Sample explanation");
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
    record4.set("question", "Question 5");
    record4.set("difficulty", "Intermediate");
    record4.set("category", "Technical");
    record4.set("explanation", "Sample explanation");
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
    record5.set("question", "Question 6");
    record5.set("difficulty", "Intermediate");
    record5.set("category", "Technical");
    record5.set("explanation", "Sample explanation");
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
    record6.set("question", "Question 7");
    record6.set("difficulty", "Intermediate");
    record6.set("category", "Technical");
    record6.set("explanation", "Sample explanation");
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
    record7.set("question", "Question 8");
    record7.set("difficulty", "Intermediate");
    record7.set("category", "Technical");
    record7.set("explanation", "Sample explanation");
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
    record8.set("question", "Question 9");
    record8.set("difficulty", "Intermediate");
    record8.set("category", "Technical");
    record8.set("explanation", "Sample explanation");
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
    record9.set("question", "Question 10");
    record9.set("difficulty", "Intermediate");
    record9.set("category", "Technical");
    record9.set("explanation", "Sample explanation");
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
    record10.set("question", "Question 11");
    record10.set("difficulty", "Intermediate");
    record10.set("category", "Technical");
    record10.set("explanation", "Sample explanation");
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
    record11.set("question", "Question 12");
    record11.set("difficulty", "Intermediate");
    record11.set("category", "Technical");
    record11.set("explanation", "Sample explanation");
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
    record12.set("question", "Question 13");
    record12.set("difficulty", "Intermediate");
    record12.set("category", "Technical");
    record12.set("explanation", "Sample explanation");
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
    record13.set("question", "Question 14");
    record13.set("difficulty", "Intermediate");
    record13.set("category", "Technical");
    record13.set("explanation", "Sample explanation");
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
    record14.set("question", "Question 15");
    record14.set("difficulty", "Intermediate");
    record14.set("category", "Technical");
    record14.set("explanation", "Sample explanation");
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
    record15.set("question", "Question 16");
    record15.set("difficulty", "Intermediate");
    record15.set("category", "Technical");
    record15.set("explanation", "Sample explanation");
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
    record16.set("question", "Question 17");
    record16.set("difficulty", "Intermediate");
    record16.set("category", "Technical");
    record16.set("explanation", "Sample explanation");
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
    record17.set("question", "Question 18");
    record17.set("difficulty", "Intermediate");
    record17.set("category", "Technical");
    record17.set("explanation", "Sample explanation");
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
    record18.set("question", "Question 19");
    record18.set("difficulty", "Intermediate");
    record18.set("category", "Technical");
    record18.set("explanation", "Sample explanation");
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
    record19.set("question", "Question 20");
    record19.set("difficulty", "Intermediate");
    record19.set("category", "Technical");
    record19.set("explanation", "Sample explanation");
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
    record20.set("question", "Question 21");
    record20.set("difficulty", "Intermediate");
    record20.set("category", "Technical");
    record20.set("explanation", "Sample explanation");
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
    record21.set("question", "Question 22");
    record21.set("difficulty", "Intermediate");
    record21.set("category", "Technical");
    record21.set("explanation", "Sample explanation");
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
    record22.set("question", "Question 23");
    record22.set("difficulty", "Intermediate");
    record22.set("category", "Technical");
    record22.set("explanation", "Sample explanation");
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
    record23.set("question", "Question 24");
    record23.set("difficulty", "Intermediate");
    record23.set("category", "Technical");
    record23.set("explanation", "Sample explanation");
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
    record24.set("question", "Question 25");
    record24.set("difficulty", "Intermediate");
    record24.set("category", "Technical");
    record24.set("explanation", "Sample explanation");
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
    record25.set("question", "Question 26");
    record25.set("difficulty", "Intermediate");
    record25.set("category", "Technical");
    record25.set("explanation", "Sample explanation");
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
    record26.set("question", "Question 27");
    record26.set("difficulty", "Intermediate");
    record26.set("category", "Technical");
    record26.set("explanation", "Sample explanation");
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
    record27.set("question", "Question 28");
    record27.set("difficulty", "Intermediate");
    record27.set("category", "Technical");
    record27.set("explanation", "Sample explanation");
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
    record28.set("question", "Question 29");
    record28.set("difficulty", "Intermediate");
    record28.set("category", "Technical");
    record28.set("explanation", "Sample explanation");
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
    record29.set("question", "Question 30");
    record29.set("difficulty", "Intermediate");
    record29.set("category", "Technical");
    record29.set("explanation", "Sample explanation");
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
    record30.set("question", "Question 31");
    record30.set("difficulty", "Intermediate");
    record30.set("category", "Technical");
    record30.set("explanation", "Sample explanation");
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
    record31.set("question", "Question 32");
    record31.set("difficulty", "Intermediate");
    record31.set("category", "Technical");
    record31.set("explanation", "Sample explanation");
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
    record32.set("question", "Question 33");
    record32.set("difficulty", "Intermediate");
    record32.set("category", "Technical");
    record32.set("explanation", "Sample explanation");
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
    record33.set("question", "Question 34");
    record33.set("difficulty", "Intermediate");
    record33.set("category", "Technical");
    record33.set("explanation", "Sample explanation");
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
    record34.set("question", "Question 35");
    record34.set("difficulty", "Intermediate");
    record34.set("category", "Technical");
    record34.set("explanation", "Sample explanation");
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
    record35.set("question", "Question 36");
    record35.set("difficulty", "Intermediate");
    record35.set("category", "Technical");
    record35.set("explanation", "Sample explanation");
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
    record36.set("question", "Question 37");
    record36.set("difficulty", "Intermediate");
    record36.set("category", "Technical");
    record36.set("explanation", "Sample explanation");
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
    record37.set("question", "Question 38");
    record37.set("difficulty", "Intermediate");
    record37.set("category", "Technical");
    record37.set("explanation", "Sample explanation");
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
    record38.set("question", "Question 39");
    record38.set("difficulty", "Intermediate");
    record38.set("category", "Technical");
    record38.set("explanation", "Sample explanation");
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
    record39.set("question", "Question 40");
    record39.set("difficulty", "Intermediate");
    record39.set("category", "Technical");
    record39.set("explanation", "Sample explanation");
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
    record40.set("question", "Question 41");
    record40.set("difficulty", "Intermediate");
    record40.set("category", "Technical");
    record40.set("explanation", "Sample explanation");
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
    record41.set("question", "Question 42");
    record41.set("difficulty", "Intermediate");
    record41.set("category", "Technical");
    record41.set("explanation", "Sample explanation");
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
    record42.set("question", "Question 43");
    record42.set("difficulty", "Intermediate");
    record42.set("category", "Technical");
    record42.set("explanation", "Sample explanation");
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
    record43.set("question", "Question 44");
    record43.set("difficulty", "Intermediate");
    record43.set("category", "Technical");
    record43.set("explanation", "Sample explanation");
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
    record44.set("question", "Question 45");
    record44.set("difficulty", "Intermediate");
    record44.set("category", "Technical");
    record44.set("explanation", "Sample explanation");
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
    record45.set("question", "Question 46");
    record45.set("difficulty", "Intermediate");
    record45.set("category", "Technical");
    record45.set("explanation", "Sample explanation");
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
    record46.set("question", "Question 47");
    record46.set("difficulty", "Intermediate");
    record46.set("category", "Technical");
    record46.set("explanation", "Sample explanation");
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
    record47.set("question", "Question 48");
    record47.set("difficulty", "Intermediate");
    record47.set("category", "Technical");
    record47.set("explanation", "Sample explanation");
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
    record48.set("question", "Question 49");
    record48.set("difficulty", "Intermediate");
    record48.set("category", "Technical");
    record48.set("explanation", "Sample explanation");
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
    record49.set("question", "Question 50");
    record49.set("difficulty", "Intermediate");
    record49.set("category", "Technical");
    record49.set("explanation", "Sample explanation");
  try {
    app.save(record49);
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
