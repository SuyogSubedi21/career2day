/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerInterviewQuestions");

  const record0 = new Record(collection);
    record0.set("careerSlug", "machine-learning-engineer");
    record0.set("questionNumber", 1);
    record0.set("question", "Question 1");
    record0.set("category", "Technical");
    record0.set("difficulty", "Beginner");
    record0.set("explanation", "Placeholder - to be replaced with real answer");
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
    record1.set("category", "Behavioral");
    record1.set("difficulty", "Beginner");
    record1.set("explanation", "Placeholder - to be replaced with real answer");
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
    record2.set("category", "Technical");
    record2.set("difficulty", "Beginner");
    record2.set("explanation", "Placeholder - to be replaced with real answer");
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
    record3.set("category", "System Design");
    record3.set("difficulty", "Beginner");
    record3.set("explanation", "Placeholder - to be replaced with real answer");
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
    record4.set("category", "Technical");
    record4.set("difficulty", "Beginner");
    record4.set("explanation", "Placeholder - to be replaced with real answer");
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
    record5.set("category", "Behavioral");
    record5.set("difficulty", "Beginner");
    record5.set("explanation", "Placeholder - to be replaced with real answer");
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
    record6.set("category", "Technical");
    record6.set("difficulty", "Beginner");
    record6.set("explanation", "Placeholder - to be replaced with real answer");
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
    record7.set("category", "System Design");
    record7.set("difficulty", "Beginner");
    record7.set("explanation", "Placeholder - to be replaced with real answer");
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
    record8.set("category", "Technical");
    record8.set("difficulty", "Beginner");
    record8.set("explanation", "Placeholder - to be replaced with real answer");
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
    record9.set("category", "Behavioral");
    record9.set("difficulty", "Beginner");
    record9.set("explanation", "Placeholder - to be replaced with real answer");
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
    record10.set("category", "Technical");
    record10.set("difficulty", "Beginner");
    record10.set("explanation", "Placeholder - to be replaced with real answer");
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
    record11.set("category", "System Design");
    record11.set("difficulty", "Beginner");
    record11.set("explanation", "Placeholder - to be replaced with real answer");
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
    record12.set("category", "Technical");
    record12.set("difficulty", "Beginner");
    record12.set("explanation", "Placeholder - to be replaced with real answer");
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
    record13.set("category", "Behavioral");
    record13.set("difficulty", "Beginner");
    record13.set("explanation", "Placeholder - to be replaced with real answer");
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
    record14.set("category", "Technical");
    record14.set("difficulty", "Beginner");
    record14.set("explanation", "Placeholder - to be replaced with real answer");
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
    record15.set("category", "System Design");
    record15.set("difficulty", "Beginner");
    record15.set("explanation", "Placeholder - to be replaced with real answer");
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
    record16.set("category", "Technical");
    record16.set("difficulty", "Beginner");
    record16.set("explanation", "Placeholder - to be replaced with real answer");
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
    record17.set("category", "Behavioral");
    record17.set("difficulty", "Beginner");
    record17.set("explanation", "Placeholder - to be replaced with real answer");
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
    record18.set("category", "Technical");
    record18.set("difficulty", "Beginner");
    record18.set("explanation", "Placeholder - to be replaced with real answer");
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
    record19.set("category", "System Design");
    record19.set("difficulty", "Beginner");
    record19.set("explanation", "Placeholder - to be replaced with real answer");
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
    record20.set("category", "Technical");
    record20.set("difficulty", "Beginner");
    record20.set("explanation", "Placeholder - to be replaced with real answer");
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
    record21.set("category", "Behavioral");
    record21.set("difficulty", "Beginner");
    record21.set("explanation", "Placeholder - to be replaced with real answer");
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
    record22.set("category", "Technical");
    record22.set("difficulty", "Beginner");
    record22.set("explanation", "Placeholder - to be replaced with real answer");
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
    record23.set("category", "System Design");
    record23.set("difficulty", "Beginner");
    record23.set("explanation", "Placeholder - to be replaced with real answer");
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
    record24.set("category", "Technical");
    record24.set("difficulty", "Beginner");
    record24.set("explanation", "Placeholder - to be replaced with real answer");
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
    record25.set("category", "Behavioral");
    record25.set("difficulty", "Beginner");
    record25.set("explanation", "Placeholder - to be replaced with real answer");
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
    record26.set("category", "Technical");
    record26.set("difficulty", "Beginner");
    record26.set("explanation", "Placeholder - to be replaced with real answer");
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
    record27.set("category", "System Design");
    record27.set("difficulty", "Beginner");
    record27.set("explanation", "Placeholder - to be replaced with real answer");
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
    record28.set("category", "Technical");
    record28.set("difficulty", "Beginner");
    record28.set("explanation", "Placeholder - to be replaced with real answer");
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
    record29.set("category", "Behavioral");
    record29.set("difficulty", "Beginner");
    record29.set("explanation", "Placeholder - to be replaced with real answer");
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
    record30.set("category", "Technical");
    record30.set("difficulty", "Beginner");
    record30.set("explanation", "Placeholder - to be replaced with real answer");
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
    record31.set("category", "System Design");
    record31.set("difficulty", "Beginner");
    record31.set("explanation", "Placeholder - to be replaced with real answer");
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
    record32.set("category", "Technical");
    record32.set("difficulty", "Beginner");
    record32.set("explanation", "Placeholder - to be replaced with real answer");
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
    record33.set("category", "Behavioral");
    record33.set("difficulty", "Beginner");
    record33.set("explanation", "Placeholder - to be replaced with real answer");
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
    record34.set("category", "Technical");
    record34.set("difficulty", "Intermediate");
    record34.set("explanation", "Placeholder - to be replaced with real answer");
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
    record35.set("category", "System Design");
    record35.set("difficulty", "Intermediate");
    record35.set("explanation", "Placeholder - to be replaced with real answer");
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
    record36.set("category", "Technical");
    record36.set("difficulty", "Intermediate");
    record36.set("explanation", "Placeholder - to be replaced with real answer");
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
    record37.set("category", "Behavioral");
    record37.set("difficulty", "Intermediate");
    record37.set("explanation", "Placeholder - to be replaced with real answer");
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
    record38.set("category", "Technical");
    record38.set("difficulty", "Intermediate");
    record38.set("explanation", "Placeholder - to be replaced with real answer");
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
    record39.set("category", "System Design");
    record39.set("difficulty", "Intermediate");
    record39.set("explanation", "Placeholder - to be replaced with real answer");
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
    record40.set("category", "Technical");
    record40.set("difficulty", "Intermediate");
    record40.set("explanation", "Placeholder - to be replaced with real answer");
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
    record41.set("category", "Behavioral");
    record41.set("difficulty", "Intermediate");
    record41.set("explanation", "Placeholder - to be replaced with real answer");
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
    record42.set("category", "Technical");
    record42.set("difficulty", "Intermediate");
    record42.set("explanation", "Placeholder - to be replaced with real answer");
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
    record43.set("category", "System Design");
    record43.set("difficulty", "Intermediate");
    record43.set("explanation", "Placeholder - to be replaced with real answer");
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
    record44.set("category", "Technical");
    record44.set("difficulty", "Intermediate");
    record44.set("explanation", "Placeholder - to be replaced with real answer");
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
    record45.set("category", "Behavioral");
    record45.set("difficulty", "Intermediate");
    record45.set("explanation", "Placeholder - to be replaced with real answer");
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
    record46.set("category", "Technical");
    record46.set("difficulty", "Intermediate");
    record46.set("explanation", "Placeholder - to be replaced with real answer");
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
    record47.set("category", "System Design");
    record47.set("difficulty", "Intermediate");
    record47.set("explanation", "Placeholder - to be replaced with real answer");
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
    record48.set("category", "Technical");
    record48.set("difficulty", "Intermediate");
    record48.set("explanation", "Placeholder - to be replaced with real answer");
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
    record49.set("category", "Behavioral");
    record49.set("difficulty", "Intermediate");
    record49.set("explanation", "Placeholder - to be replaced with real answer");
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
    record50.set("question", "Question 51");
    record50.set("category", "Technical");
    record50.set("difficulty", "Intermediate");
    record50.set("explanation", "Placeholder - to be replaced with real answer");
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
    record51.set("question", "Question 52");
    record51.set("category", "System Design");
    record51.set("difficulty", "Intermediate");
    record51.set("explanation", "Placeholder - to be replaced with real answer");
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
    record52.set("question", "Question 53");
    record52.set("category", "Technical");
    record52.set("difficulty", "Intermediate");
    record52.set("explanation", "Placeholder - to be replaced with real answer");
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
    record53.set("question", "Question 54");
    record53.set("category", "Behavioral");
    record53.set("difficulty", "Intermediate");
    record53.set("explanation", "Placeholder - to be replaced with real answer");
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
    record54.set("question", "Question 55");
    record54.set("category", "Technical");
    record54.set("difficulty", "Intermediate");
    record54.set("explanation", "Placeholder - to be replaced with real answer");
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
    record55.set("question", "Question 56");
    record55.set("category", "System Design");
    record55.set("difficulty", "Intermediate");
    record55.set("explanation", "Placeholder - to be replaced with real answer");
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
    record56.set("question", "Question 57");
    record56.set("category", "Technical");
    record56.set("difficulty", "Intermediate");
    record56.set("explanation", "Placeholder - to be replaced with real answer");
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
    record57.set("question", "Question 58");
    record57.set("category", "Behavioral");
    record57.set("difficulty", "Intermediate");
    record57.set("explanation", "Placeholder - to be replaced with real answer");
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
    record58.set("question", "Question 59");
    record58.set("category", "Technical");
    record58.set("difficulty", "Intermediate");
    record58.set("explanation", "Placeholder - to be replaced with real answer");
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
    record59.set("question", "Question 60");
    record59.set("category", "System Design");
    record59.set("difficulty", "Intermediate");
    record59.set("explanation", "Placeholder - to be replaced with real answer");
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
    record60.set("question", "Question 61");
    record60.set("category", "Technical");
    record60.set("difficulty", "Intermediate");
    record60.set("explanation", "Placeholder - to be replaced with real answer");
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
    record61.set("question", "Question 62");
    record61.set("category", "Behavioral");
    record61.set("difficulty", "Intermediate");
    record61.set("explanation", "Placeholder - to be replaced with real answer");
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
    record62.set("question", "Question 63");
    record62.set("category", "Technical");
    record62.set("difficulty", "Intermediate");
    record62.set("explanation", "Placeholder - to be replaced with real answer");
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
    record63.set("question", "Question 64");
    record63.set("category", "System Design");
    record63.set("difficulty", "Intermediate");
    record63.set("explanation", "Placeholder - to be replaced with real answer");
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
    record64.set("question", "Question 65");
    record64.set("category", "Technical");
    record64.set("difficulty", "Intermediate");
    record64.set("explanation", "Placeholder - to be replaced with real answer");
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
    record65.set("question", "Question 66");
    record65.set("category", "Behavioral");
    record65.set("difficulty", "Intermediate");
    record65.set("explanation", "Placeholder - to be replaced with real answer");
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
    record66.set("question", "Question 67");
    record66.set("category", "Technical");
    record66.set("difficulty", "Intermediate");
    record66.set("explanation", "Placeholder - to be replaced with real answer");
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
    record67.set("question", "Question 68");
    record67.set("category", "System Design");
    record67.set("difficulty", "Advanced");
    record67.set("explanation", "Placeholder - to be replaced with real answer");
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
    record68.set("question", "Question 69");
    record68.set("category", "Technical");
    record68.set("difficulty", "Advanced");
    record68.set("explanation", "Placeholder - to be replaced with real answer");
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
    record69.set("question", "Question 70");
    record69.set("category", "Behavioral");
    record69.set("difficulty", "Advanced");
    record69.set("explanation", "Placeholder - to be replaced with real answer");
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
    record70.set("question", "Question 71");
    record70.set("category", "Technical");
    record70.set("difficulty", "Advanced");
    record70.set("explanation", "Placeholder - to be replaced with real answer");
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
    record71.set("question", "Question 72");
    record71.set("category", "System Design");
    record71.set("difficulty", "Advanced");
    record71.set("explanation", "Placeholder - to be replaced with real answer");
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
    record72.set("question", "Question 73");
    record72.set("category", "Technical");
    record72.set("difficulty", "Advanced");
    record72.set("explanation", "Placeholder - to be replaced with real answer");
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
    record73.set("question", "Question 74");
    record73.set("category", "Behavioral");
    record73.set("difficulty", "Advanced");
    record73.set("explanation", "Placeholder - to be replaced with real answer");
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
    record74.set("question", "Question 75");
    record74.set("category", "Technical");
    record74.set("difficulty", "Advanced");
    record74.set("explanation", "Placeholder - to be replaced with real answer");
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
    record75.set("question", "Question 76");
    record75.set("category", "System Design");
    record75.set("difficulty", "Advanced");
    record75.set("explanation", "Placeholder - to be replaced with real answer");
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
    record76.set("question", "Question 77");
    record76.set("category", "Technical");
    record76.set("difficulty", "Advanced");
    record76.set("explanation", "Placeholder - to be replaced with real answer");
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
    record77.set("question", "Question 78");
    record77.set("category", "Behavioral");
    record77.set("difficulty", "Advanced");
    record77.set("explanation", "Placeholder - to be replaced with real answer");
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
    record78.set("question", "Question 79");
    record78.set("category", "Technical");
    record78.set("difficulty", "Advanced");
    record78.set("explanation", "Placeholder - to be replaced with real answer");
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
    record79.set("question", "Question 80");
    record79.set("category", "System Design");
    record79.set("difficulty", "Advanced");
    record79.set("explanation", "Placeholder - to be replaced with real answer");
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
    record80.set("question", "Question 81");
    record80.set("category", "Technical");
    record80.set("difficulty", "Advanced");
    record80.set("explanation", "Placeholder - to be replaced with real answer");
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
    record81.set("question", "Question 82");
    record81.set("category", "Behavioral");
    record81.set("difficulty", "Advanced");
    record81.set("explanation", "Placeholder - to be replaced with real answer");
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
    record82.set("question", "Question 83");
    record82.set("category", "Technical");
    record82.set("difficulty", "Advanced");
    record82.set("explanation", "Placeholder - to be replaced with real answer");
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
    record83.set("question", "Question 84");
    record83.set("category", "System Design");
    record83.set("difficulty", "Advanced");
    record83.set("explanation", "Placeholder - to be replaced with real answer");
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
    record84.set("question", "Question 85");
    record84.set("category", "Technical");
    record84.set("difficulty", "Advanced");
    record84.set("explanation", "Placeholder - to be replaced with real answer");
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
    record85.set("question", "Question 86");
    record85.set("category", "Behavioral");
    record85.set("difficulty", "Advanced");
    record85.set("explanation", "Placeholder - to be replaced with real answer");
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
    record86.set("question", "Question 87");
    record86.set("category", "Technical");
    record86.set("difficulty", "Advanced");
    record86.set("explanation", "Placeholder - to be replaced with real answer");
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
    record87.set("question", "Question 88");
    record87.set("category", "System Design");
    record87.set("difficulty", "Advanced");
    record87.set("explanation", "Placeholder - to be replaced with real answer");
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
    record88.set("question", "Question 89");
    record88.set("category", "Technical");
    record88.set("difficulty", "Advanced");
    record88.set("explanation", "Placeholder - to be replaced with real answer");
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
    record89.set("question", "Question 90");
    record89.set("category", "Behavioral");
    record89.set("difficulty", "Advanced");
    record89.set("explanation", "Placeholder - to be replaced with real answer");
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
    record90.set("question", "Question 91");
    record90.set("category", "Technical");
    record90.set("difficulty", "Advanced");
    record90.set("explanation", "Placeholder - to be replaced with real answer");
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
    record91.set("question", "Question 92");
    record91.set("category", "System Design");
    record91.set("difficulty", "Advanced");
    record91.set("explanation", "Placeholder - to be replaced with real answer");
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
    record92.set("question", "Question 93");
    record92.set("category", "Technical");
    record92.set("difficulty", "Advanced");
    record92.set("explanation", "Placeholder - to be replaced with real answer");
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
    record93.set("question", "Question 94");
    record93.set("category", "Behavioral");
    record93.set("difficulty", "Advanced");
    record93.set("explanation", "Placeholder - to be replaced with real answer");
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
    record94.set("question", "Question 95");
    record94.set("category", "Technical");
    record94.set("difficulty", "Advanced");
    record94.set("explanation", "Placeholder - to be replaced with real answer");
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
    record95.set("question", "Question 96");
    record95.set("category", "System Design");
    record95.set("difficulty", "Advanced");
    record95.set("explanation", "Placeholder - to be replaced with real answer");
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
    record96.set("question", "Question 97");
    record96.set("category", "Technical");
    record96.set("difficulty", "Advanced");
    record96.set("explanation", "Placeholder - to be replaced with real answer");
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
    record97.set("question", "Question 98");
    record97.set("category", "Behavioral");
    record97.set("difficulty", "Advanced");
    record97.set("explanation", "Placeholder - to be replaced with real answer");
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
    record98.set("question", "Question 99");
    record98.set("category", "Technical");
    record98.set("difficulty", "Advanced");
    record98.set("explanation", "Placeholder - to be replaced with real answer");
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
    record99.set("question", "Question 100");
    record99.set("category", "System Design");
    record99.set("difficulty", "Advanced");
    record99.set("explanation", "Placeholder - to be replaced with real answer");
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
