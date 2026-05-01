/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerInterviewQuestions");

  const record0 = new Record(collection);
    record0.set("careerSlug", "full-stack-developer");
    record0.set("questionNumber", 1);
    record0.set("question", "Question 1");
    record0.set("category", "Technical");
    record0.set("difficulty", "Beginner");
    record0.set("explanation", "Explanation for question 1");
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
    record1.set("careerSlug", "full-stack-developer");
    record1.set("questionNumber", 2);
    record1.set("question", "Question 2");
    record1.set("category", "Behavioral");
    record1.set("difficulty", "Beginner");
    record1.set("explanation", "Explanation for question 2");
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
    record2.set("careerSlug", "full-stack-developer");
    record2.set("questionNumber", 3);
    record2.set("question", "Question 3");
    record2.set("category", "System Design");
    record2.set("difficulty", "Beginner");
    record2.set("explanation", "Explanation for question 3");
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
    record3.set("careerSlug", "full-stack-developer");
    record3.set("questionNumber", 4);
    record3.set("question", "Question 4");
    record3.set("category", "Technical");
    record3.set("difficulty", "Intermediate");
    record3.set("explanation", "Explanation for question 4");
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
    record4.set("careerSlug", "full-stack-developer");
    record4.set("questionNumber", 5);
    record4.set("question", "Question 5");
    record4.set("category", "Behavioral");
    record4.set("difficulty", "Intermediate");
    record4.set("explanation", "Explanation for question 5");
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
    record5.set("careerSlug", "full-stack-developer");
    record5.set("questionNumber", 6);
    record5.set("question", "Question 6");
    record5.set("category", "System Design");
    record5.set("difficulty", "Intermediate");
    record5.set("explanation", "Explanation for question 6");
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
    record6.set("careerSlug", "full-stack-developer");
    record6.set("questionNumber", 7);
    record6.set("question", "Question 7");
    record6.set("category", "Technical");
    record6.set("difficulty", "Advanced");
    record6.set("explanation", "Explanation for question 7");
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
    record7.set("careerSlug", "full-stack-developer");
    record7.set("questionNumber", 8);
    record7.set("question", "Question 8");
    record7.set("category", "Behavioral");
    record7.set("difficulty", "Advanced");
    record7.set("explanation", "Explanation for question 8");
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
    record8.set("careerSlug", "full-stack-developer");
    record8.set("questionNumber", 9);
    record8.set("question", "Question 9");
    record8.set("category", "System Design");
    record8.set("difficulty", "Advanced");
    record8.set("explanation", "Explanation for question 9");
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
    record9.set("careerSlug", "full-stack-developer");
    record9.set("questionNumber", 10);
    record9.set("question", "Question 10");
    record9.set("category", "Technical");
    record9.set("difficulty", "Beginner");
    record9.set("explanation", "Explanation for question 10");
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
    record10.set("careerSlug", "full-stack-developer");
    record10.set("questionNumber", 11);
    record10.set("question", "Question 11");
    record10.set("category", "Behavioral");
    record10.set("difficulty", "Beginner");
    record10.set("explanation", "Explanation for question 11");
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
    record11.set("careerSlug", "full-stack-developer");
    record11.set("questionNumber", 12);
    record11.set("question", "Question 12");
    record11.set("category", "System Design");
    record11.set("difficulty", "Beginner");
    record11.set("explanation", "Explanation for question 12");
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
    record12.set("careerSlug", "full-stack-developer");
    record12.set("questionNumber", 13);
    record12.set("question", "Question 13");
    record12.set("category", "Technical");
    record12.set("difficulty", "Intermediate");
    record12.set("explanation", "Explanation for question 13");
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
    record13.set("careerSlug", "full-stack-developer");
    record13.set("questionNumber", 14);
    record13.set("question", "Question 14");
    record13.set("category", "Behavioral");
    record13.set("difficulty", "Intermediate");
    record13.set("explanation", "Explanation for question 14");
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
    record14.set("careerSlug", "full-stack-developer");
    record14.set("questionNumber", 15);
    record14.set("question", "Question 15");
    record14.set("category", "System Design");
    record14.set("difficulty", "Intermediate");
    record14.set("explanation", "Explanation for question 15");
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
    record15.set("careerSlug", "full-stack-developer");
    record15.set("questionNumber", 16);
    record15.set("question", "Question 16");
    record15.set("category", "Technical");
    record15.set("difficulty", "Advanced");
    record15.set("explanation", "Explanation for question 16");
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
    record16.set("careerSlug", "full-stack-developer");
    record16.set("questionNumber", 17);
    record16.set("question", "Question 17");
    record16.set("category", "Behavioral");
    record16.set("difficulty", "Advanced");
    record16.set("explanation", "Explanation for question 17");
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
    record17.set("careerSlug", "full-stack-developer");
    record17.set("questionNumber", 18);
    record17.set("question", "Question 18");
    record17.set("category", "System Design");
    record17.set("difficulty", "Advanced");
    record17.set("explanation", "Explanation for question 18");
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
    record18.set("careerSlug", "full-stack-developer");
    record18.set("questionNumber", 19);
    record18.set("question", "Question 19");
    record18.set("category", "Technical");
    record18.set("difficulty", "Beginner");
    record18.set("explanation", "Explanation for question 19");
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
    record19.set("careerSlug", "full-stack-developer");
    record19.set("questionNumber", 20);
    record19.set("question", "Question 20");
    record19.set("category", "Behavioral");
    record19.set("difficulty", "Beginner");
    record19.set("explanation", "Explanation for question 20");
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
    record20.set("careerSlug", "full-stack-developer");
    record20.set("questionNumber", 21);
    record20.set("question", "Question 21");
    record20.set("category", "System Design");
    record20.set("difficulty", "Beginner");
    record20.set("explanation", "Explanation for question 21");
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
    record21.set("careerSlug", "full-stack-developer");
    record21.set("questionNumber", 22);
    record21.set("question", "Question 22");
    record21.set("category", "Technical");
    record21.set("difficulty", "Intermediate");
    record21.set("explanation", "Explanation for question 22");
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
    record22.set("careerSlug", "full-stack-developer");
    record22.set("questionNumber", 23);
    record22.set("question", "Question 23");
    record22.set("category", "Behavioral");
    record22.set("difficulty", "Intermediate");
    record22.set("explanation", "Explanation for question 23");
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
    record23.set("careerSlug", "full-stack-developer");
    record23.set("questionNumber", 24);
    record23.set("question", "Question 24");
    record23.set("category", "System Design");
    record23.set("difficulty", "Intermediate");
    record23.set("explanation", "Explanation for question 24");
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
    record24.set("careerSlug", "full-stack-developer");
    record24.set("questionNumber", 25);
    record24.set("question", "Question 25");
    record24.set("category", "Technical");
    record24.set("difficulty", "Advanced");
    record24.set("explanation", "Explanation for question 25");
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
    record25.set("careerSlug", "full-stack-developer");
    record25.set("questionNumber", 26);
    record25.set("question", "Question 26");
    record25.set("category", "Behavioral");
    record25.set("difficulty", "Advanced");
    record25.set("explanation", "Explanation for question 26");
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
    record26.set("careerSlug", "full-stack-developer");
    record26.set("questionNumber", 27);
    record26.set("question", "Question 27");
    record26.set("category", "System Design");
    record26.set("difficulty", "Advanced");
    record26.set("explanation", "Explanation for question 27");
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
    record27.set("careerSlug", "full-stack-developer");
    record27.set("questionNumber", 28);
    record27.set("question", "Question 28");
    record27.set("category", "Technical");
    record27.set("difficulty", "Beginner");
    record27.set("explanation", "Explanation for question 28");
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
    record28.set("careerSlug", "full-stack-developer");
    record28.set("questionNumber", 29);
    record28.set("question", "Question 29");
    record28.set("category", "Behavioral");
    record28.set("difficulty", "Beginner");
    record28.set("explanation", "Explanation for question 29");
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
    record29.set("careerSlug", "full-stack-developer");
    record29.set("questionNumber", 30);
    record29.set("question", "Question 30");
    record29.set("category", "System Design");
    record29.set("difficulty", "Beginner");
    record29.set("explanation", "Explanation for question 30");
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
    record30.set("careerSlug", "full-stack-developer");
    record30.set("questionNumber", 31);
    record30.set("question", "Question 31");
    record30.set("category", "Technical");
    record30.set("difficulty", "Intermediate");
    record30.set("explanation", "Explanation for question 31");
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
    record31.set("careerSlug", "full-stack-developer");
    record31.set("questionNumber", 32);
    record31.set("question", "Question 32");
    record31.set("category", "Behavioral");
    record31.set("difficulty", "Intermediate");
    record31.set("explanation", "Explanation for question 32");
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
    record32.set("careerSlug", "full-stack-developer");
    record32.set("questionNumber", 33);
    record32.set("question", "Question 33");
    record32.set("category", "System Design");
    record32.set("difficulty", "Intermediate");
    record32.set("explanation", "Explanation for question 33");
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
    record33.set("careerSlug", "full-stack-developer");
    record33.set("questionNumber", 34);
    record33.set("question", "Question 34");
    record33.set("category", "Technical");
    record33.set("difficulty", "Advanced");
    record33.set("explanation", "Explanation for question 34");
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
    record34.set("careerSlug", "full-stack-developer");
    record34.set("questionNumber", 35);
    record34.set("question", "Question 35");
    record34.set("category", "Behavioral");
    record34.set("difficulty", "Advanced");
    record34.set("explanation", "Explanation for question 35");
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
    record35.set("careerSlug", "full-stack-developer");
    record35.set("questionNumber", 36);
    record35.set("question", "Question 36");
    record35.set("category", "System Design");
    record35.set("difficulty", "Advanced");
    record35.set("explanation", "Explanation for question 36");
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
    record36.set("careerSlug", "full-stack-developer");
    record36.set("questionNumber", 37);
    record36.set("question", "Question 37");
    record36.set("category", "Technical");
    record36.set("difficulty", "Beginner");
    record36.set("explanation", "Explanation for question 37");
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
    record37.set("careerSlug", "full-stack-developer");
    record37.set("questionNumber", 38);
    record37.set("question", "Question 38");
    record37.set("category", "Behavioral");
    record37.set("difficulty", "Beginner");
    record37.set("explanation", "Explanation for question 38");
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
    record38.set("careerSlug", "full-stack-developer");
    record38.set("questionNumber", 39);
    record38.set("question", "Question 39");
    record38.set("category", "System Design");
    record38.set("difficulty", "Beginner");
    record38.set("explanation", "Explanation for question 39");
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
    record39.set("careerSlug", "full-stack-developer");
    record39.set("questionNumber", 40);
    record39.set("question", "Question 40");
    record39.set("category", "Technical");
    record39.set("difficulty", "Intermediate");
    record39.set("explanation", "Explanation for question 40");
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
    record40.set("careerSlug", "full-stack-developer");
    record40.set("questionNumber", 41);
    record40.set("question", "Question 41");
    record40.set("category", "Behavioral");
    record40.set("difficulty", "Intermediate");
    record40.set("explanation", "Explanation for question 41");
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
    record41.set("careerSlug", "full-stack-developer");
    record41.set("questionNumber", 42);
    record41.set("question", "Question 42");
    record41.set("category", "System Design");
    record41.set("difficulty", "Intermediate");
    record41.set("explanation", "Explanation for question 42");
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
    record42.set("careerSlug", "full-stack-developer");
    record42.set("questionNumber", 43);
    record42.set("question", "Question 43");
    record42.set("category", "Technical");
    record42.set("difficulty", "Advanced");
    record42.set("explanation", "Explanation for question 43");
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
    record43.set("careerSlug", "full-stack-developer");
    record43.set("questionNumber", 44);
    record43.set("question", "Question 44");
    record43.set("category", "Behavioral");
    record43.set("difficulty", "Advanced");
    record43.set("explanation", "Explanation for question 44");
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
    record44.set("careerSlug", "full-stack-developer");
    record44.set("questionNumber", 45);
    record44.set("question", "Question 45");
    record44.set("category", "System Design");
    record44.set("difficulty", "Advanced");
    record44.set("explanation", "Explanation for question 45");
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
    record45.set("careerSlug", "full-stack-developer");
    record45.set("questionNumber", 46);
    record45.set("question", "Question 46");
    record45.set("category", "Technical");
    record45.set("difficulty", "Beginner");
    record45.set("explanation", "Explanation for question 46");
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
    record46.set("careerSlug", "full-stack-developer");
    record46.set("questionNumber", 47);
    record46.set("question", "Question 47");
    record46.set("category", "Behavioral");
    record46.set("difficulty", "Beginner");
    record46.set("explanation", "Explanation for question 47");
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
    record47.set("careerSlug", "full-stack-developer");
    record47.set("questionNumber", 48);
    record47.set("question", "Question 48");
    record47.set("category", "System Design");
    record47.set("difficulty", "Beginner");
    record47.set("explanation", "Explanation for question 48");
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
    record48.set("careerSlug", "full-stack-developer");
    record48.set("questionNumber", 49);
    record48.set("question", "Question 49");
    record48.set("category", "Technical");
    record48.set("difficulty", "Intermediate");
    record48.set("explanation", "Explanation for question 49");
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
    record49.set("careerSlug", "full-stack-developer");
    record49.set("questionNumber", 50);
    record49.set("question", "Question 50");
    record49.set("category", "Behavioral");
    record49.set("difficulty", "Intermediate");
    record49.set("explanation", "Explanation for question 50");
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
    record50.set("careerSlug", "full-stack-developer");
    record50.set("questionNumber", 51);
    record50.set("question", "Question 51");
    record50.set("category", "System Design");
    record50.set("difficulty", "Intermediate");
    record50.set("explanation", "Explanation for question 51");
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
    record51.set("careerSlug", "full-stack-developer");
    record51.set("questionNumber", 52);
    record51.set("question", "Question 52");
    record51.set("category", "Technical");
    record51.set("difficulty", "Advanced");
    record51.set("explanation", "Explanation for question 52");
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
    record52.set("careerSlug", "full-stack-developer");
    record52.set("questionNumber", 53);
    record52.set("question", "Question 53");
    record52.set("category", "Behavioral");
    record52.set("difficulty", "Advanced");
    record52.set("explanation", "Explanation for question 53");
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
    record53.set("careerSlug", "full-stack-developer");
    record53.set("questionNumber", 54);
    record53.set("question", "Question 54");
    record53.set("category", "System Design");
    record53.set("difficulty", "Advanced");
    record53.set("explanation", "Explanation for question 54");
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
    record54.set("careerSlug", "full-stack-developer");
    record54.set("questionNumber", 55);
    record54.set("question", "Question 55");
    record54.set("category", "Technical");
    record54.set("difficulty", "Beginner");
    record54.set("explanation", "Explanation for question 55");
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
    record55.set("careerSlug", "full-stack-developer");
    record55.set("questionNumber", 56);
    record55.set("question", "Question 56");
    record55.set("category", "Behavioral");
    record55.set("difficulty", "Beginner");
    record55.set("explanation", "Explanation for question 56");
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
    record56.set("careerSlug", "full-stack-developer");
    record56.set("questionNumber", 57);
    record56.set("question", "Question 57");
    record56.set("category", "System Design");
    record56.set("difficulty", "Beginner");
    record56.set("explanation", "Explanation for question 57");
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
    record57.set("careerSlug", "full-stack-developer");
    record57.set("questionNumber", 58);
    record57.set("question", "Question 58");
    record57.set("category", "Technical");
    record57.set("difficulty", "Intermediate");
    record57.set("explanation", "Explanation for question 58");
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
    record58.set("careerSlug", "full-stack-developer");
    record58.set("questionNumber", 59);
    record58.set("question", "Question 59");
    record58.set("category", "Behavioral");
    record58.set("difficulty", "Intermediate");
    record58.set("explanation", "Explanation for question 59");
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
    record59.set("careerSlug", "full-stack-developer");
    record59.set("questionNumber", 60);
    record59.set("question", "Question 60");
    record59.set("category", "System Design");
    record59.set("difficulty", "Intermediate");
    record59.set("explanation", "Explanation for question 60");
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
    record60.set("careerSlug", "full-stack-developer");
    record60.set("questionNumber", 61);
    record60.set("question", "Question 61");
    record60.set("category", "Technical");
    record60.set("difficulty", "Advanced");
    record60.set("explanation", "Explanation for question 61");
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
    record61.set("careerSlug", "full-stack-developer");
    record61.set("questionNumber", 62);
    record61.set("question", "Question 62");
    record61.set("category", "Behavioral");
    record61.set("difficulty", "Advanced");
    record61.set("explanation", "Explanation for question 62");
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
    record62.set("careerSlug", "full-stack-developer");
    record62.set("questionNumber", 63);
    record62.set("question", "Question 63");
    record62.set("category", "System Design");
    record62.set("difficulty", "Advanced");
    record62.set("explanation", "Explanation for question 63");
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
    record63.set("careerSlug", "full-stack-developer");
    record63.set("questionNumber", 64);
    record63.set("question", "Question 64");
    record63.set("category", "Technical");
    record63.set("difficulty", "Beginner");
    record63.set("explanation", "Explanation for question 64");
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
    record64.set("careerSlug", "full-stack-developer");
    record64.set("questionNumber", 65);
    record64.set("question", "Question 65");
    record64.set("category", "Behavioral");
    record64.set("difficulty", "Beginner");
    record64.set("explanation", "Explanation for question 65");
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
    record65.set("careerSlug", "full-stack-developer");
    record65.set("questionNumber", 66);
    record65.set("question", "Question 66");
    record65.set("category", "System Design");
    record65.set("difficulty", "Beginner");
    record65.set("explanation", "Explanation for question 66");
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
    record66.set("careerSlug", "full-stack-developer");
    record66.set("questionNumber", 67);
    record66.set("question", "Question 67");
    record66.set("category", "Technical");
    record66.set("difficulty", "Intermediate");
    record66.set("explanation", "Explanation for question 67");
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
    record67.set("careerSlug", "full-stack-developer");
    record67.set("questionNumber", 68);
    record67.set("question", "Question 68");
    record67.set("category", "Behavioral");
    record67.set("difficulty", "Intermediate");
    record67.set("explanation", "Explanation for question 68");
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
    record68.set("careerSlug", "full-stack-developer");
    record68.set("questionNumber", 69);
    record68.set("question", "Question 69");
    record68.set("category", "System Design");
    record68.set("difficulty", "Intermediate");
    record68.set("explanation", "Explanation for question 69");
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
    record69.set("careerSlug", "full-stack-developer");
    record69.set("questionNumber", 70);
    record69.set("question", "Question 70");
    record69.set("category", "Technical");
    record69.set("difficulty", "Advanced");
    record69.set("explanation", "Explanation for question 70");
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
    record70.set("careerSlug", "full-stack-developer");
    record70.set("questionNumber", 71);
    record70.set("question", "Question 71");
    record70.set("category", "Behavioral");
    record70.set("difficulty", "Advanced");
    record70.set("explanation", "Explanation for question 71");
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
    record71.set("careerSlug", "full-stack-developer");
    record71.set("questionNumber", 72);
    record71.set("question", "Question 72");
    record71.set("category", "System Design");
    record71.set("difficulty", "Advanced");
    record71.set("explanation", "Explanation for question 72");
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
    record72.set("careerSlug", "full-stack-developer");
    record72.set("questionNumber", 73);
    record72.set("question", "Question 73");
    record72.set("category", "Technical");
    record72.set("difficulty", "Beginner");
    record72.set("explanation", "Explanation for question 73");
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
    record73.set("careerSlug", "full-stack-developer");
    record73.set("questionNumber", 74);
    record73.set("question", "Question 74");
    record73.set("category", "Behavioral");
    record73.set("difficulty", "Beginner");
    record73.set("explanation", "Explanation for question 74");
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
    record74.set("careerSlug", "full-stack-developer");
    record74.set("questionNumber", 75);
    record74.set("question", "Question 75");
    record74.set("category", "System Design");
    record74.set("difficulty", "Beginner");
    record74.set("explanation", "Explanation for question 75");
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
    record75.set("careerSlug", "full-stack-developer");
    record75.set("questionNumber", 76);
    record75.set("question", "Question 76");
    record75.set("category", "Technical");
    record75.set("difficulty", "Intermediate");
    record75.set("explanation", "Explanation for question 76");
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
    record76.set("careerSlug", "full-stack-developer");
    record76.set("questionNumber", 77);
    record76.set("question", "Question 77");
    record76.set("category", "Behavioral");
    record76.set("difficulty", "Intermediate");
    record76.set("explanation", "Explanation for question 77");
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
    record77.set("careerSlug", "full-stack-developer");
    record77.set("questionNumber", 78);
    record77.set("question", "Question 78");
    record77.set("category", "System Design");
    record77.set("difficulty", "Intermediate");
    record77.set("explanation", "Explanation for question 78");
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
    record78.set("careerSlug", "full-stack-developer");
    record78.set("questionNumber", 79);
    record78.set("question", "Question 79");
    record78.set("category", "Technical");
    record78.set("difficulty", "Advanced");
    record78.set("explanation", "Explanation for question 79");
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
    record79.set("careerSlug", "full-stack-developer");
    record79.set("questionNumber", 80);
    record79.set("question", "Question 80");
    record79.set("category", "Behavioral");
    record79.set("difficulty", "Advanced");
    record79.set("explanation", "Explanation for question 80");
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
    record80.set("careerSlug", "full-stack-developer");
    record80.set("questionNumber", 81);
    record80.set("question", "Question 81");
    record80.set("category", "System Design");
    record80.set("difficulty", "Advanced");
    record80.set("explanation", "Explanation for question 81");
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
    record81.set("careerSlug", "full-stack-developer");
    record81.set("questionNumber", 82);
    record81.set("question", "Question 82");
    record81.set("category", "Technical");
    record81.set("difficulty", "Beginner");
    record81.set("explanation", "Explanation for question 82");
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
    record82.set("careerSlug", "full-stack-developer");
    record82.set("questionNumber", 83);
    record82.set("question", "Question 83");
    record82.set("category", "Behavioral");
    record82.set("difficulty", "Beginner");
    record82.set("explanation", "Explanation for question 83");
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
    record83.set("careerSlug", "full-stack-developer");
    record83.set("questionNumber", 84);
    record83.set("question", "Question 84");
    record83.set("category", "System Design");
    record83.set("difficulty", "Beginner");
    record83.set("explanation", "Explanation for question 84");
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
    record84.set("careerSlug", "full-stack-developer");
    record84.set("questionNumber", 85);
    record84.set("question", "Question 85");
    record84.set("category", "Technical");
    record84.set("difficulty", "Intermediate");
    record84.set("explanation", "Explanation for question 85");
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
    record85.set("careerSlug", "full-stack-developer");
    record85.set("questionNumber", 86);
    record85.set("question", "Question 86");
    record85.set("category", "Behavioral");
    record85.set("difficulty", "Intermediate");
    record85.set("explanation", "Explanation for question 86");
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
    record86.set("careerSlug", "full-stack-developer");
    record86.set("questionNumber", 87);
    record86.set("question", "Question 87");
    record86.set("category", "System Design");
    record86.set("difficulty", "Intermediate");
    record86.set("explanation", "Explanation for question 87");
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
    record87.set("careerSlug", "full-stack-developer");
    record87.set("questionNumber", 88);
    record87.set("question", "Question 88");
    record87.set("category", "Technical");
    record87.set("difficulty", "Advanced");
    record87.set("explanation", "Explanation for question 88");
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
    record88.set("careerSlug", "full-stack-developer");
    record88.set("questionNumber", 89);
    record88.set("question", "Question 89");
    record88.set("category", "Behavioral");
    record88.set("difficulty", "Advanced");
    record88.set("explanation", "Explanation for question 89");
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
    record89.set("careerSlug", "full-stack-developer");
    record89.set("questionNumber", 90);
    record89.set("question", "Question 90");
    record89.set("category", "System Design");
    record89.set("difficulty", "Advanced");
    record89.set("explanation", "Explanation for question 90");
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
    record90.set("careerSlug", "full-stack-developer");
    record90.set("questionNumber", 91);
    record90.set("question", "Question 91");
    record90.set("category", "Technical");
    record90.set("difficulty", "Beginner");
    record90.set("explanation", "Explanation for question 91");
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
    record91.set("careerSlug", "full-stack-developer");
    record91.set("questionNumber", 92);
    record91.set("question", "Question 92");
    record91.set("category", "Behavioral");
    record91.set("difficulty", "Beginner");
    record91.set("explanation", "Explanation for question 92");
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
    record92.set("careerSlug", "full-stack-developer");
    record92.set("questionNumber", 93);
    record92.set("question", "Question 93");
    record92.set("category", "System Design");
    record92.set("difficulty", "Beginner");
    record92.set("explanation", "Explanation for question 93");
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
    record93.set("careerSlug", "full-stack-developer");
    record93.set("questionNumber", 94);
    record93.set("question", "Question 94");
    record93.set("category", "Technical");
    record93.set("difficulty", "Intermediate");
    record93.set("explanation", "Explanation for question 94");
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
    record94.set("careerSlug", "full-stack-developer");
    record94.set("questionNumber", 95);
    record94.set("question", "Question 95");
    record94.set("category", "Behavioral");
    record94.set("difficulty", "Intermediate");
    record94.set("explanation", "Explanation for question 95");
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
    record95.set("careerSlug", "full-stack-developer");
    record95.set("questionNumber", 96);
    record95.set("question", "Question 96");
    record95.set("category", "System Design");
    record95.set("difficulty", "Intermediate");
    record95.set("explanation", "Explanation for question 96");
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
    record96.set("careerSlug", "full-stack-developer");
    record96.set("questionNumber", 97);
    record96.set("question", "Question 97");
    record96.set("category", "Technical");
    record96.set("difficulty", "Advanced");
    record96.set("explanation", "Explanation for question 97");
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
    record97.set("careerSlug", "full-stack-developer");
    record97.set("questionNumber", 98);
    record97.set("question", "Question 98");
    record97.set("category", "Behavioral");
    record97.set("difficulty", "Advanced");
    record97.set("explanation", "Explanation for question 98");
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
    record98.set("careerSlug", "full-stack-developer");
    record98.set("questionNumber", 99);
    record98.set("question", "Question 99");
    record98.set("category", "System Design");
    record98.set("difficulty", "Advanced");
    record98.set("explanation", "Explanation for question 99");
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
    record99.set("careerSlug", "full-stack-developer");
    record99.set("questionNumber", 100);
    record99.set("question", "Question 100");
    record99.set("category", "Technical");
    record99.set("difficulty", "Beginner");
    record99.set("explanation", "Explanation for question 100");
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
