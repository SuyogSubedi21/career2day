/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerQuizzes");

  const record0 = new Record(collection);
  record0.set("careerSlug", "security-architect");
  record0.set("difficulty", "Basic");
  record0.set("questionNumber", 1);
  record0.set("question", "[Basic] What is the best practice for Security Architect when handling scenario 1?");
  record0.set("options", ["Follow Security Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record0.set("correctAnswer", "Follow Security Architect best practices and standards");
  record0.set("explanation", "This Basic level question tests practical knowledge of Security Architect fundamentals.");
  try { app.save(record0); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record1 = new Record(collection);
  record1.set("careerSlug", "security-architect");
  record1.set("difficulty", "Basic");
  record1.set("questionNumber", 2);
  record1.set("question", "[Basic] What is the best practice for Security Architect when handling scenario 2?");
  record1.set("options", ["Follow Security Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record1.set("correctAnswer", "Follow Security Architect best practices and standards");
  record1.set("explanation", "This Basic level question tests practical knowledge of Security Architect fundamentals.");
  try { app.save(record1); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record2 = new Record(collection);
  record2.set("careerSlug", "security-architect");
  record2.set("difficulty", "Basic");
  record2.set("questionNumber", 3);
  record2.set("question", "[Basic] What is the best practice for Security Architect when handling scenario 3?");
  record2.set("options", ["Follow Security Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record2.set("correctAnswer", "Follow Security Architect best practices and standards");
  record2.set("explanation", "This Basic level question tests practical knowledge of Security Architect fundamentals.");
  try { app.save(record2); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record3 = new Record(collection);
  record3.set("careerSlug", "security-architect");
  record3.set("difficulty", "Basic");
  record3.set("questionNumber", 4);
  record3.set("question", "[Basic] What is the best practice for Security Architect when handling scenario 4?");
  record3.set("options", ["Follow Security Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record3.set("correctAnswer", "Follow Security Architect best practices and standards");
  record3.set("explanation", "This Basic level question tests practical knowledge of Security Architect fundamentals.");
  try { app.save(record3); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record4 = new Record(collection);
  record4.set("careerSlug", "security-architect");
  record4.set("difficulty", "Basic");
  record4.set("questionNumber", 5);
  record4.set("question", "[Basic] What is the best practice for Security Architect when handling scenario 5?");
  record4.set("options", ["Follow Security Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record4.set("correctAnswer", "Follow Security Architect best practices and standards");
  record4.set("explanation", "This Basic level question tests practical knowledge of Security Architect fundamentals.");
  try { app.save(record4); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record5 = new Record(collection);
  record5.set("careerSlug", "security-architect");
  record5.set("difficulty", "Medium");
  record5.set("questionNumber", 1);
  record5.set("question", "[Medium] What is the best practice for Security Architect when handling scenario 1?");
  record5.set("options", ["Follow Security Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record5.set("correctAnswer", "Follow Security Architect best practices and standards");
  record5.set("explanation", "This Medium level question tests practical knowledge of Security Architect fundamentals.");
  try { app.save(record5); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record6 = new Record(collection);
  record6.set("careerSlug", "security-architect");
  record6.set("difficulty", "Medium");
  record6.set("questionNumber", 2);
  record6.set("question", "[Medium] What is the best practice for Security Architect when handling scenario 2?");
  record6.set("options", ["Follow Security Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record6.set("correctAnswer", "Follow Security Architect best practices and standards");
  record6.set("explanation", "This Medium level question tests practical knowledge of Security Architect fundamentals.");
  try { app.save(record6); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record7 = new Record(collection);
  record7.set("careerSlug", "security-architect");
  record7.set("difficulty", "Medium");
  record7.set("questionNumber", 3);
  record7.set("question", "[Medium] What is the best practice for Security Architect when handling scenario 3?");
  record7.set("options", ["Follow Security Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record7.set("correctAnswer", "Follow Security Architect best practices and standards");
  record7.set("explanation", "This Medium level question tests practical knowledge of Security Architect fundamentals.");
  try { app.save(record7); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record8 = new Record(collection);
  record8.set("careerSlug", "security-architect");
  record8.set("difficulty", "Medium");
  record8.set("questionNumber", 4);
  record8.set("question", "[Medium] What is the best practice for Security Architect when handling scenario 4?");
  record8.set("options", ["Follow Security Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record8.set("correctAnswer", "Follow Security Architect best practices and standards");
  record8.set("explanation", "This Medium level question tests practical knowledge of Security Architect fundamentals.");
  try { app.save(record8); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record9 = new Record(collection);
  record9.set("careerSlug", "security-architect");
  record9.set("difficulty", "Medium");
  record9.set("questionNumber", 5);
  record9.set("question", "[Medium] What is the best practice for Security Architect when handling scenario 5?");
  record9.set("options", ["Follow Security Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record9.set("correctAnswer", "Follow Security Architect best practices and standards");
  record9.set("explanation", "This Medium level question tests practical knowledge of Security Architect fundamentals.");
  try { app.save(record9); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record10 = new Record(collection);
  record10.set("careerSlug", "security-architect");
  record10.set("difficulty", "Hard");
  record10.set("questionNumber", 1);
  record10.set("question", "[Hard] What is the best practice for Security Architect when handling scenario 1?");
  record10.set("options", ["Follow Security Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record10.set("correctAnswer", "Follow Security Architect best practices and standards");
  record10.set("explanation", "This Hard level question tests practical knowledge of Security Architect fundamentals.");
  try { app.save(record10); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record11 = new Record(collection);
  record11.set("careerSlug", "security-architect");
  record11.set("difficulty", "Hard");
  record11.set("questionNumber", 2);
  record11.set("question", "[Hard] What is the best practice for Security Architect when handling scenario 2?");
  record11.set("options", ["Follow Security Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record11.set("correctAnswer", "Follow Security Architect best practices and standards");
  record11.set("explanation", "This Hard level question tests practical knowledge of Security Architect fundamentals.");
  try { app.save(record11); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record12 = new Record(collection);
  record12.set("careerSlug", "security-architect");
  record12.set("difficulty", "Hard");
  record12.set("questionNumber", 3);
  record12.set("question", "[Hard] What is the best practice for Security Architect when handling scenario 3?");
  record12.set("options", ["Follow Security Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record12.set("correctAnswer", "Follow Security Architect best practices and standards");
  record12.set("explanation", "This Hard level question tests practical knowledge of Security Architect fundamentals.");
  try { app.save(record12); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record13 = new Record(collection);
  record13.set("careerSlug", "security-architect");
  record13.set("difficulty", "Hard");
  record13.set("questionNumber", 4);
  record13.set("question", "[Hard] What is the best practice for Security Architect when handling scenario 4?");
  record13.set("options", ["Follow Security Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record13.set("correctAnswer", "Follow Security Architect best practices and standards");
  record13.set("explanation", "This Hard level question tests practical knowledge of Security Architect fundamentals.");
  try { app.save(record13); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record14 = new Record(collection);
  record14.set("careerSlug", "security-architect");
  record14.set("difficulty", "Hard");
  record14.set("questionNumber", 5);
  record14.set("question", "[Hard] What is the best practice for Security Architect when handling scenario 5?");
  record14.set("options", ["Follow Security Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record14.set("correctAnswer", "Follow Security Architect best practices and standards");
  record14.set("explanation", "This Hard level question tests practical knowledge of Security Architect fundamentals.");
  try { app.save(record14); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record15 = new Record(collection);
  record15.set("careerSlug", "infrastructure-engineer");
  record15.set("difficulty", "Basic");
  record15.set("questionNumber", 1);
  record15.set("question", "[Basic] What is the best practice for Infrastructure Engineer when handling scenario 1?");
  record15.set("options", ["Follow Infrastructure Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record15.set("correctAnswer", "Follow Infrastructure Engineer best practices and standards");
  record15.set("explanation", "This Basic level question tests practical knowledge of Infrastructure Engineer fundamentals.");
  try { app.save(record15); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record16 = new Record(collection);
  record16.set("careerSlug", "infrastructure-engineer");
  record16.set("difficulty", "Basic");
  record16.set("questionNumber", 2);
  record16.set("question", "[Basic] What is the best practice for Infrastructure Engineer when handling scenario 2?");
  record16.set("options", ["Follow Infrastructure Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record16.set("correctAnswer", "Follow Infrastructure Engineer best practices and standards");
  record16.set("explanation", "This Basic level question tests practical knowledge of Infrastructure Engineer fundamentals.");
  try { app.save(record16); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record17 = new Record(collection);
  record17.set("careerSlug", "infrastructure-engineer");
  record17.set("difficulty", "Basic");
  record17.set("questionNumber", 3);
  record17.set("question", "[Basic] What is the best practice for Infrastructure Engineer when handling scenario 3?");
  record17.set("options", ["Follow Infrastructure Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record17.set("correctAnswer", "Follow Infrastructure Engineer best practices and standards");
  record17.set("explanation", "This Basic level question tests practical knowledge of Infrastructure Engineer fundamentals.");
  try { app.save(record17); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record18 = new Record(collection);
  record18.set("careerSlug", "infrastructure-engineer");
  record18.set("difficulty", "Basic");
  record18.set("questionNumber", 4);
  record18.set("question", "[Basic] What is the best practice for Infrastructure Engineer when handling scenario 4?");
  record18.set("options", ["Follow Infrastructure Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record18.set("correctAnswer", "Follow Infrastructure Engineer best practices and standards");
  record18.set("explanation", "This Basic level question tests practical knowledge of Infrastructure Engineer fundamentals.");
  try { app.save(record18); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record19 = new Record(collection);
  record19.set("careerSlug", "infrastructure-engineer");
  record19.set("difficulty", "Basic");
  record19.set("questionNumber", 5);
  record19.set("question", "[Basic] What is the best practice for Infrastructure Engineer when handling scenario 5?");
  record19.set("options", ["Follow Infrastructure Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record19.set("correctAnswer", "Follow Infrastructure Engineer best practices and standards");
  record19.set("explanation", "This Basic level question tests practical knowledge of Infrastructure Engineer fundamentals.");
  try { app.save(record19); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record20 = new Record(collection);
  record20.set("careerSlug", "infrastructure-engineer");
  record20.set("difficulty", "Medium");
  record20.set("questionNumber", 1);
  record20.set("question", "[Medium] What is the best practice for Infrastructure Engineer when handling scenario 1?");
  record20.set("options", ["Follow Infrastructure Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record20.set("correctAnswer", "Follow Infrastructure Engineer best practices and standards");
  record20.set("explanation", "This Medium level question tests practical knowledge of Infrastructure Engineer fundamentals.");
  try { app.save(record20); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record21 = new Record(collection);
  record21.set("careerSlug", "infrastructure-engineer");
  record21.set("difficulty", "Medium");
  record21.set("questionNumber", 2);
  record21.set("question", "[Medium] What is the best practice for Infrastructure Engineer when handling scenario 2?");
  record21.set("options", ["Follow Infrastructure Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record21.set("correctAnswer", "Follow Infrastructure Engineer best practices and standards");
  record21.set("explanation", "This Medium level question tests practical knowledge of Infrastructure Engineer fundamentals.");
  try { app.save(record21); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record22 = new Record(collection);
  record22.set("careerSlug", "infrastructure-engineer");
  record22.set("difficulty", "Medium");
  record22.set("questionNumber", 3);
  record22.set("question", "[Medium] What is the best practice for Infrastructure Engineer when handling scenario 3?");
  record22.set("options", ["Follow Infrastructure Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record22.set("correctAnswer", "Follow Infrastructure Engineer best practices and standards");
  record22.set("explanation", "This Medium level question tests practical knowledge of Infrastructure Engineer fundamentals.");
  try { app.save(record22); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record23 = new Record(collection);
  record23.set("careerSlug", "infrastructure-engineer");
  record23.set("difficulty", "Medium");
  record23.set("questionNumber", 4);
  record23.set("question", "[Medium] What is the best practice for Infrastructure Engineer when handling scenario 4?");
  record23.set("options", ["Follow Infrastructure Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record23.set("correctAnswer", "Follow Infrastructure Engineer best practices and standards");
  record23.set("explanation", "This Medium level question tests practical knowledge of Infrastructure Engineer fundamentals.");
  try { app.save(record23); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record24 = new Record(collection);
  record24.set("careerSlug", "infrastructure-engineer");
  record24.set("difficulty", "Medium");
  record24.set("questionNumber", 5);
  record24.set("question", "[Medium] What is the best practice for Infrastructure Engineer when handling scenario 5?");
  record24.set("options", ["Follow Infrastructure Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record24.set("correctAnswer", "Follow Infrastructure Engineer best practices and standards");
  record24.set("explanation", "This Medium level question tests practical knowledge of Infrastructure Engineer fundamentals.");
  try { app.save(record24); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record25 = new Record(collection);
  record25.set("careerSlug", "infrastructure-engineer");
  record25.set("difficulty", "Hard");
  record25.set("questionNumber", 1);
  record25.set("question", "[Hard] What is the best practice for Infrastructure Engineer when handling scenario 1?");
  record25.set("options", ["Follow Infrastructure Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record25.set("correctAnswer", "Follow Infrastructure Engineer best practices and standards");
  record25.set("explanation", "This Hard level question tests practical knowledge of Infrastructure Engineer fundamentals.");
  try { app.save(record25); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record26 = new Record(collection);
  record26.set("careerSlug", "infrastructure-engineer");
  record26.set("difficulty", "Hard");
  record26.set("questionNumber", 2);
  record26.set("question", "[Hard] What is the best practice for Infrastructure Engineer when handling scenario 2?");
  record26.set("options", ["Follow Infrastructure Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record26.set("correctAnswer", "Follow Infrastructure Engineer best practices and standards");
  record26.set("explanation", "This Hard level question tests practical knowledge of Infrastructure Engineer fundamentals.");
  try { app.save(record26); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record27 = new Record(collection);
  record27.set("careerSlug", "infrastructure-engineer");
  record27.set("difficulty", "Hard");
  record27.set("questionNumber", 3);
  record27.set("question", "[Hard] What is the best practice for Infrastructure Engineer when handling scenario 3?");
  record27.set("options", ["Follow Infrastructure Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record27.set("correctAnswer", "Follow Infrastructure Engineer best practices and standards");
  record27.set("explanation", "This Hard level question tests practical knowledge of Infrastructure Engineer fundamentals.");
  try { app.save(record27); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record28 = new Record(collection);
  record28.set("careerSlug", "infrastructure-engineer");
  record28.set("difficulty", "Hard");
  record28.set("questionNumber", 4);
  record28.set("question", "[Hard] What is the best practice for Infrastructure Engineer when handling scenario 4?");
  record28.set("options", ["Follow Infrastructure Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record28.set("correctAnswer", "Follow Infrastructure Engineer best practices and standards");
  record28.set("explanation", "This Hard level question tests practical knowledge of Infrastructure Engineer fundamentals.");
  try { app.save(record28); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record29 = new Record(collection);
  record29.set("careerSlug", "infrastructure-engineer");
  record29.set("difficulty", "Hard");
  record29.set("questionNumber", 5);
  record29.set("question", "[Hard] What is the best practice for Infrastructure Engineer when handling scenario 5?");
  record29.set("options", ["Follow Infrastructure Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record29.set("correctAnswer", "Follow Infrastructure Engineer best practices and standards");
  record29.set("explanation", "This Hard level question tests practical knowledge of Infrastructure Engineer fundamentals.");
  try { app.save(record29); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record30 = new Record(collection);
  record30.set("careerSlug", "devops-architect");
  record30.set("difficulty", "Basic");
  record30.set("questionNumber", 1);
  record30.set("question", "[Basic] What is the best practice for DevOps Architect when handling scenario 1?");
  record30.set("options", ["Follow DevOps Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record30.set("correctAnswer", "Follow DevOps Architect best practices and standards");
  record30.set("explanation", "This Basic level question tests practical knowledge of DevOps Architect fundamentals.");
  try { app.save(record30); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record31 = new Record(collection);
  record31.set("careerSlug", "devops-architect");
  record31.set("difficulty", "Basic");
  record31.set("questionNumber", 2);
  record31.set("question", "[Basic] What is the best practice for DevOps Architect when handling scenario 2?");
  record31.set("options", ["Follow DevOps Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record31.set("correctAnswer", "Follow DevOps Architect best practices and standards");
  record31.set("explanation", "This Basic level question tests practical knowledge of DevOps Architect fundamentals.");
  try { app.save(record31); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record32 = new Record(collection);
  record32.set("careerSlug", "devops-architect");
  record32.set("difficulty", "Basic");
  record32.set("questionNumber", 3);
  record32.set("question", "[Basic] What is the best practice for DevOps Architect when handling scenario 3?");
  record32.set("options", ["Follow DevOps Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record32.set("correctAnswer", "Follow DevOps Architect best practices and standards");
  record32.set("explanation", "This Basic level question tests practical knowledge of DevOps Architect fundamentals.");
  try { app.save(record32); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record33 = new Record(collection);
  record33.set("careerSlug", "devops-architect");
  record33.set("difficulty", "Basic");
  record33.set("questionNumber", 4);
  record33.set("question", "[Basic] What is the best practice for DevOps Architect when handling scenario 4?");
  record33.set("options", ["Follow DevOps Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record33.set("correctAnswer", "Follow DevOps Architect best practices and standards");
  record33.set("explanation", "This Basic level question tests practical knowledge of DevOps Architect fundamentals.");
  try { app.save(record33); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record34 = new Record(collection);
  record34.set("careerSlug", "devops-architect");
  record34.set("difficulty", "Basic");
  record34.set("questionNumber", 5);
  record34.set("question", "[Basic] What is the best practice for DevOps Architect when handling scenario 5?");
  record34.set("options", ["Follow DevOps Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record34.set("correctAnswer", "Follow DevOps Architect best practices and standards");
  record34.set("explanation", "This Basic level question tests practical knowledge of DevOps Architect fundamentals.");
  try { app.save(record34); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record35 = new Record(collection);
  record35.set("careerSlug", "devops-architect");
  record35.set("difficulty", "Medium");
  record35.set("questionNumber", 1);
  record35.set("question", "[Medium] What is the best practice for DevOps Architect when handling scenario 1?");
  record35.set("options", ["Follow DevOps Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record35.set("correctAnswer", "Follow DevOps Architect best practices and standards");
  record35.set("explanation", "This Medium level question tests practical knowledge of DevOps Architect fundamentals.");
  try { app.save(record35); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record36 = new Record(collection);
  record36.set("careerSlug", "devops-architect");
  record36.set("difficulty", "Medium");
  record36.set("questionNumber", 2);
  record36.set("question", "[Medium] What is the best practice for DevOps Architect when handling scenario 2?");
  record36.set("options", ["Follow DevOps Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record36.set("correctAnswer", "Follow DevOps Architect best practices and standards");
  record36.set("explanation", "This Medium level question tests practical knowledge of DevOps Architect fundamentals.");
  try { app.save(record36); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record37 = new Record(collection);
  record37.set("careerSlug", "devops-architect");
  record37.set("difficulty", "Medium");
  record37.set("questionNumber", 3);
  record37.set("question", "[Medium] What is the best practice for DevOps Architect when handling scenario 3?");
  record37.set("options", ["Follow DevOps Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record37.set("correctAnswer", "Follow DevOps Architect best practices and standards");
  record37.set("explanation", "This Medium level question tests practical knowledge of DevOps Architect fundamentals.");
  try { app.save(record37); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record38 = new Record(collection);
  record38.set("careerSlug", "devops-architect");
  record38.set("difficulty", "Medium");
  record38.set("questionNumber", 4);
  record38.set("question", "[Medium] What is the best practice for DevOps Architect when handling scenario 4?");
  record38.set("options", ["Follow DevOps Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record38.set("correctAnswer", "Follow DevOps Architect best practices and standards");
  record38.set("explanation", "This Medium level question tests practical knowledge of DevOps Architect fundamentals.");
  try { app.save(record38); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record39 = new Record(collection);
  record39.set("careerSlug", "devops-architect");
  record39.set("difficulty", "Medium");
  record39.set("questionNumber", 5);
  record39.set("question", "[Medium] What is the best practice for DevOps Architect when handling scenario 5?");
  record39.set("options", ["Follow DevOps Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record39.set("correctAnswer", "Follow DevOps Architect best practices and standards");
  record39.set("explanation", "This Medium level question tests practical knowledge of DevOps Architect fundamentals.");
  try { app.save(record39); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record40 = new Record(collection);
  record40.set("careerSlug", "devops-architect");
  record40.set("difficulty", "Hard");
  record40.set("questionNumber", 1);
  record40.set("question", "[Hard] What is the best practice for DevOps Architect when handling scenario 1?");
  record40.set("options", ["Follow DevOps Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record40.set("correctAnswer", "Follow DevOps Architect best practices and standards");
  record40.set("explanation", "This Hard level question tests practical knowledge of DevOps Architect fundamentals.");
  try { app.save(record40); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record41 = new Record(collection);
  record41.set("careerSlug", "devops-architect");
  record41.set("difficulty", "Hard");
  record41.set("questionNumber", 2);
  record41.set("question", "[Hard] What is the best practice for DevOps Architect when handling scenario 2?");
  record41.set("options", ["Follow DevOps Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record41.set("correctAnswer", "Follow DevOps Architect best practices and standards");
  record41.set("explanation", "This Hard level question tests practical knowledge of DevOps Architect fundamentals.");
  try { app.save(record41); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record42 = new Record(collection);
  record42.set("careerSlug", "devops-architect");
  record42.set("difficulty", "Hard");
  record42.set("questionNumber", 3);
  record42.set("question", "[Hard] What is the best practice for DevOps Architect when handling scenario 3?");
  record42.set("options", ["Follow DevOps Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record42.set("correctAnswer", "Follow DevOps Architect best practices and standards");
  record42.set("explanation", "This Hard level question tests practical knowledge of DevOps Architect fundamentals.");
  try { app.save(record42); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record43 = new Record(collection);
  record43.set("careerSlug", "devops-architect");
  record43.set("difficulty", "Hard");
  record43.set("questionNumber", 4);
  record43.set("question", "[Hard] What is the best practice for DevOps Architect when handling scenario 4?");
  record43.set("options", ["Follow DevOps Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record43.set("correctAnswer", "Follow DevOps Architect best practices and standards");
  record43.set("explanation", "This Hard level question tests practical knowledge of DevOps Architect fundamentals.");
  try { app.save(record43); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record44 = new Record(collection);
  record44.set("careerSlug", "devops-architect");
  record44.set("difficulty", "Hard");
  record44.set("questionNumber", 5);
  record44.set("question", "[Hard] What is the best practice for DevOps Architect when handling scenario 5?");
  record44.set("options", ["Follow DevOps Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record44.set("correctAnswer", "Follow DevOps Architect best practices and standards");
  record44.set("explanation", "This Hard level question tests practical knowledge of DevOps Architect fundamentals.");
  try { app.save(record44); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record45 = new Record(collection);
  record45.set("careerSlug", "mlops-engineer");
  record45.set("difficulty", "Basic");
  record45.set("questionNumber", 1);
  record45.set("question", "[Basic] What is the best practice for MLOps Engineer when handling scenario 1?");
  record45.set("options", ["Follow MLOps Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record45.set("correctAnswer", "Follow MLOps Engineer best practices and standards");
  record45.set("explanation", "This Basic level question tests practical knowledge of MLOps Engineer fundamentals.");
  try { app.save(record45); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record46 = new Record(collection);
  record46.set("careerSlug", "mlops-engineer");
  record46.set("difficulty", "Basic");
  record46.set("questionNumber", 2);
  record46.set("question", "[Basic] What is the best practice for MLOps Engineer when handling scenario 2?");
  record46.set("options", ["Follow MLOps Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record46.set("correctAnswer", "Follow MLOps Engineer best practices and standards");
  record46.set("explanation", "This Basic level question tests practical knowledge of MLOps Engineer fundamentals.");
  try { app.save(record46); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record47 = new Record(collection);
  record47.set("careerSlug", "mlops-engineer");
  record47.set("difficulty", "Basic");
  record47.set("questionNumber", 3);
  record47.set("question", "[Basic] What is the best practice for MLOps Engineer when handling scenario 3?");
  record47.set("options", ["Follow MLOps Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record47.set("correctAnswer", "Follow MLOps Engineer best practices and standards");
  record47.set("explanation", "This Basic level question tests practical knowledge of MLOps Engineer fundamentals.");
  try { app.save(record47); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record48 = new Record(collection);
  record48.set("careerSlug", "mlops-engineer");
  record48.set("difficulty", "Basic");
  record48.set("questionNumber", 4);
  record48.set("question", "[Basic] What is the best practice for MLOps Engineer when handling scenario 4?");
  record48.set("options", ["Follow MLOps Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record48.set("correctAnswer", "Follow MLOps Engineer best practices and standards");
  record48.set("explanation", "This Basic level question tests practical knowledge of MLOps Engineer fundamentals.");
  try { app.save(record48); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record49 = new Record(collection);
  record49.set("careerSlug", "mlops-engineer");
  record49.set("difficulty", "Basic");
  record49.set("questionNumber", 5);
  record49.set("question", "[Basic] What is the best practice for MLOps Engineer when handling scenario 5?");
  record49.set("options", ["Follow MLOps Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record49.set("correctAnswer", "Follow MLOps Engineer best practices and standards");
  record49.set("explanation", "This Basic level question tests practical knowledge of MLOps Engineer fundamentals.");
  try { app.save(record49); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record50 = new Record(collection);
  record50.set("careerSlug", "mlops-engineer");
  record50.set("difficulty", "Medium");
  record50.set("questionNumber", 1);
  record50.set("question", "[Medium] What is the best practice for MLOps Engineer when handling scenario 1?");
  record50.set("options", ["Follow MLOps Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record50.set("correctAnswer", "Follow MLOps Engineer best practices and standards");
  record50.set("explanation", "This Medium level question tests practical knowledge of MLOps Engineer fundamentals.");
  try { app.save(record50); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record51 = new Record(collection);
  record51.set("careerSlug", "mlops-engineer");
  record51.set("difficulty", "Medium");
  record51.set("questionNumber", 2);
  record51.set("question", "[Medium] What is the best practice for MLOps Engineer when handling scenario 2?");
  record51.set("options", ["Follow MLOps Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record51.set("correctAnswer", "Follow MLOps Engineer best practices and standards");
  record51.set("explanation", "This Medium level question tests practical knowledge of MLOps Engineer fundamentals.");
  try { app.save(record51); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record52 = new Record(collection);
  record52.set("careerSlug", "mlops-engineer");
  record52.set("difficulty", "Medium");
  record52.set("questionNumber", 3);
  record52.set("question", "[Medium] What is the best practice for MLOps Engineer when handling scenario 3?");
  record52.set("options", ["Follow MLOps Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record52.set("correctAnswer", "Follow MLOps Engineer best practices and standards");
  record52.set("explanation", "This Medium level question tests practical knowledge of MLOps Engineer fundamentals.");
  try { app.save(record52); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record53 = new Record(collection);
  record53.set("careerSlug", "mlops-engineer");
  record53.set("difficulty", "Medium");
  record53.set("questionNumber", 4);
  record53.set("question", "[Medium] What is the best practice for MLOps Engineer when handling scenario 4?");
  record53.set("options", ["Follow MLOps Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record53.set("correctAnswer", "Follow MLOps Engineer best practices and standards");
  record53.set("explanation", "This Medium level question tests practical knowledge of MLOps Engineer fundamentals.");
  try { app.save(record53); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record54 = new Record(collection);
  record54.set("careerSlug", "mlops-engineer");
  record54.set("difficulty", "Medium");
  record54.set("questionNumber", 5);
  record54.set("question", "[Medium] What is the best practice for MLOps Engineer when handling scenario 5?");
  record54.set("options", ["Follow MLOps Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record54.set("correctAnswer", "Follow MLOps Engineer best practices and standards");
  record54.set("explanation", "This Medium level question tests practical knowledge of MLOps Engineer fundamentals.");
  try { app.save(record54); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record55 = new Record(collection);
  record55.set("careerSlug", "mlops-engineer");
  record55.set("difficulty", "Hard");
  record55.set("questionNumber", 1);
  record55.set("question", "[Hard] What is the best practice for MLOps Engineer when handling scenario 1?");
  record55.set("options", ["Follow MLOps Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record55.set("correctAnswer", "Follow MLOps Engineer best practices and standards");
  record55.set("explanation", "This Hard level question tests practical knowledge of MLOps Engineer fundamentals.");
  try { app.save(record55); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record56 = new Record(collection);
  record56.set("careerSlug", "mlops-engineer");
  record56.set("difficulty", "Hard");
  record56.set("questionNumber", 2);
  record56.set("question", "[Hard] What is the best practice for MLOps Engineer when handling scenario 2?");
  record56.set("options", ["Follow MLOps Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record56.set("correctAnswer", "Follow MLOps Engineer best practices and standards");
  record56.set("explanation", "This Hard level question tests practical knowledge of MLOps Engineer fundamentals.");
  try { app.save(record56); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record57 = new Record(collection);
  record57.set("careerSlug", "mlops-engineer");
  record57.set("difficulty", "Hard");
  record57.set("questionNumber", 3);
  record57.set("question", "[Hard] What is the best practice for MLOps Engineer when handling scenario 3?");
  record57.set("options", ["Follow MLOps Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record57.set("correctAnswer", "Follow MLOps Engineer best practices and standards");
  record57.set("explanation", "This Hard level question tests practical knowledge of MLOps Engineer fundamentals.");
  try { app.save(record57); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record58 = new Record(collection);
  record58.set("careerSlug", "mlops-engineer");
  record58.set("difficulty", "Hard");
  record58.set("questionNumber", 4);
  record58.set("question", "[Hard] What is the best practice for MLOps Engineer when handling scenario 4?");
  record58.set("options", ["Follow MLOps Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record58.set("correctAnswer", "Follow MLOps Engineer best practices and standards");
  record58.set("explanation", "This Hard level question tests practical knowledge of MLOps Engineer fundamentals.");
  try { app.save(record58); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record59 = new Record(collection);
  record59.set("careerSlug", "mlops-engineer");
  record59.set("difficulty", "Hard");
  record59.set("questionNumber", 5);
  record59.set("question", "[Hard] What is the best practice for MLOps Engineer when handling scenario 5?");
  record59.set("options", ["Follow MLOps Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record59.set("correctAnswer", "Follow MLOps Engineer best practices and standards");
  record59.set("explanation", "This Hard level question tests practical knowledge of MLOps Engineer fundamentals.");
  try { app.save(record59); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record60 = new Record(collection);
  record60.set("careerSlug", "backend-architect");
  record60.set("difficulty", "Basic");
  record60.set("questionNumber", 1);
  record60.set("question", "[Basic] What is the best practice for Backend Architect when handling scenario 1?");
  record60.set("options", ["Follow Backend Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record60.set("correctAnswer", "Follow Backend Architect best practices and standards");
  record60.set("explanation", "This Basic level question tests practical knowledge of Backend Architect fundamentals.");
  try { app.save(record60); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record61 = new Record(collection);
  record61.set("careerSlug", "backend-architect");
  record61.set("difficulty", "Basic");
  record61.set("questionNumber", 2);
  record61.set("question", "[Basic] What is the best practice for Backend Architect when handling scenario 2?");
  record61.set("options", ["Follow Backend Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record61.set("correctAnswer", "Follow Backend Architect best practices and standards");
  record61.set("explanation", "This Basic level question tests practical knowledge of Backend Architect fundamentals.");
  try { app.save(record61); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record62 = new Record(collection);
  record62.set("careerSlug", "backend-architect");
  record62.set("difficulty", "Basic");
  record62.set("questionNumber", 3);
  record62.set("question", "[Basic] What is the best practice for Backend Architect when handling scenario 3?");
  record62.set("options", ["Follow Backend Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record62.set("correctAnswer", "Follow Backend Architect best practices and standards");
  record62.set("explanation", "This Basic level question tests practical knowledge of Backend Architect fundamentals.");
  try { app.save(record62); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record63 = new Record(collection);
  record63.set("careerSlug", "backend-architect");
  record63.set("difficulty", "Basic");
  record63.set("questionNumber", 4);
  record63.set("question", "[Basic] What is the best practice for Backend Architect when handling scenario 4?");
  record63.set("options", ["Follow Backend Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record63.set("correctAnswer", "Follow Backend Architect best practices and standards");
  record63.set("explanation", "This Basic level question tests practical knowledge of Backend Architect fundamentals.");
  try { app.save(record63); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record64 = new Record(collection);
  record64.set("careerSlug", "backend-architect");
  record64.set("difficulty", "Basic");
  record64.set("questionNumber", 5);
  record64.set("question", "[Basic] What is the best practice for Backend Architect when handling scenario 5?");
  record64.set("options", ["Follow Backend Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record64.set("correctAnswer", "Follow Backend Architect best practices and standards");
  record64.set("explanation", "This Basic level question tests practical knowledge of Backend Architect fundamentals.");
  try { app.save(record64); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record65 = new Record(collection);
  record65.set("careerSlug", "backend-architect");
  record65.set("difficulty", "Medium");
  record65.set("questionNumber", 1);
  record65.set("question", "[Medium] What is the best practice for Backend Architect when handling scenario 1?");
  record65.set("options", ["Follow Backend Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record65.set("correctAnswer", "Follow Backend Architect best practices and standards");
  record65.set("explanation", "This Medium level question tests practical knowledge of Backend Architect fundamentals.");
  try { app.save(record65); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record66 = new Record(collection);
  record66.set("careerSlug", "backend-architect");
  record66.set("difficulty", "Medium");
  record66.set("questionNumber", 2);
  record66.set("question", "[Medium] What is the best practice for Backend Architect when handling scenario 2?");
  record66.set("options", ["Follow Backend Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record66.set("correctAnswer", "Follow Backend Architect best practices and standards");
  record66.set("explanation", "This Medium level question tests practical knowledge of Backend Architect fundamentals.");
  try { app.save(record66); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record67 = new Record(collection);
  record67.set("careerSlug", "backend-architect");
  record67.set("difficulty", "Medium");
  record67.set("questionNumber", 3);
  record67.set("question", "[Medium] What is the best practice for Backend Architect when handling scenario 3?");
  record67.set("options", ["Follow Backend Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record67.set("correctAnswer", "Follow Backend Architect best practices and standards");
  record67.set("explanation", "This Medium level question tests practical knowledge of Backend Architect fundamentals.");
  try { app.save(record67); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record68 = new Record(collection);
  record68.set("careerSlug", "backend-architect");
  record68.set("difficulty", "Medium");
  record68.set("questionNumber", 4);
  record68.set("question", "[Medium] What is the best practice for Backend Architect when handling scenario 4?");
  record68.set("options", ["Follow Backend Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record68.set("correctAnswer", "Follow Backend Architect best practices and standards");
  record68.set("explanation", "This Medium level question tests practical knowledge of Backend Architect fundamentals.");
  try { app.save(record68); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record69 = new Record(collection);
  record69.set("careerSlug", "backend-architect");
  record69.set("difficulty", "Medium");
  record69.set("questionNumber", 5);
  record69.set("question", "[Medium] What is the best practice for Backend Architect when handling scenario 5?");
  record69.set("options", ["Follow Backend Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record69.set("correctAnswer", "Follow Backend Architect best practices and standards");
  record69.set("explanation", "This Medium level question tests practical knowledge of Backend Architect fundamentals.");
  try { app.save(record69); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record70 = new Record(collection);
  record70.set("careerSlug", "backend-architect");
  record70.set("difficulty", "Hard");
  record70.set("questionNumber", 1);
  record70.set("question", "[Hard] What is the best practice for Backend Architect when handling scenario 1?");
  record70.set("options", ["Follow Backend Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record70.set("correctAnswer", "Follow Backend Architect best practices and standards");
  record70.set("explanation", "This Hard level question tests practical knowledge of Backend Architect fundamentals.");
  try { app.save(record70); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record71 = new Record(collection);
  record71.set("careerSlug", "backend-architect");
  record71.set("difficulty", "Hard");
  record71.set("questionNumber", 2);
  record71.set("question", "[Hard] What is the best practice for Backend Architect when handling scenario 2?");
  record71.set("options", ["Follow Backend Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record71.set("correctAnswer", "Follow Backend Architect best practices and standards");
  record71.set("explanation", "This Hard level question tests practical knowledge of Backend Architect fundamentals.");
  try { app.save(record71); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record72 = new Record(collection);
  record72.set("careerSlug", "backend-architect");
  record72.set("difficulty", "Hard");
  record72.set("questionNumber", 3);
  record72.set("question", "[Hard] What is the best practice for Backend Architect when handling scenario 3?");
  record72.set("options", ["Follow Backend Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record72.set("correctAnswer", "Follow Backend Architect best practices and standards");
  record72.set("explanation", "This Hard level question tests practical knowledge of Backend Architect fundamentals.");
  try { app.save(record72); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record73 = new Record(collection);
  record73.set("careerSlug", "backend-architect");
  record73.set("difficulty", "Hard");
  record73.set("questionNumber", 4);
  record73.set("question", "[Hard] What is the best practice for Backend Architect when handling scenario 4?");
  record73.set("options", ["Follow Backend Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record73.set("correctAnswer", "Follow Backend Architect best practices and standards");
  record73.set("explanation", "This Hard level question tests practical knowledge of Backend Architect fundamentals.");
  try { app.save(record73); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record74 = new Record(collection);
  record74.set("careerSlug", "backend-architect");
  record74.set("difficulty", "Hard");
  record74.set("questionNumber", 5);
  record74.set("question", "[Hard] What is the best practice for Backend Architect when handling scenario 5?");
  record74.set("options", ["Follow Backend Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record74.set("correctAnswer", "Follow Backend Architect best practices and standards");
  record74.set("explanation", "This Hard level question tests practical knowledge of Backend Architect fundamentals.");
  try { app.save(record74); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record75 = new Record(collection);
  record75.set("careerSlug", "enterprise-architect");
  record75.set("difficulty", "Basic");
  record75.set("questionNumber", 1);
  record75.set("question", "[Basic] What is the best practice for Enterprise Architect when handling scenario 1?");
  record75.set("options", ["Follow Enterprise Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record75.set("correctAnswer", "Follow Enterprise Architect best practices and standards");
  record75.set("explanation", "This Basic level question tests practical knowledge of Enterprise Architect fundamentals.");
  try { app.save(record75); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record76 = new Record(collection);
  record76.set("careerSlug", "enterprise-architect");
  record76.set("difficulty", "Basic");
  record76.set("questionNumber", 2);
  record76.set("question", "[Basic] What is the best practice for Enterprise Architect when handling scenario 2?");
  record76.set("options", ["Follow Enterprise Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record76.set("correctAnswer", "Follow Enterprise Architect best practices and standards");
  record76.set("explanation", "This Basic level question tests practical knowledge of Enterprise Architect fundamentals.");
  try { app.save(record76); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record77 = new Record(collection);
  record77.set("careerSlug", "enterprise-architect");
  record77.set("difficulty", "Basic");
  record77.set("questionNumber", 3);
  record77.set("question", "[Basic] What is the best practice for Enterprise Architect when handling scenario 3?");
  record77.set("options", ["Follow Enterprise Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record77.set("correctAnswer", "Follow Enterprise Architect best practices and standards");
  record77.set("explanation", "This Basic level question tests practical knowledge of Enterprise Architect fundamentals.");
  try { app.save(record77); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record78 = new Record(collection);
  record78.set("careerSlug", "enterprise-architect");
  record78.set("difficulty", "Basic");
  record78.set("questionNumber", 4);
  record78.set("question", "[Basic] What is the best practice for Enterprise Architect when handling scenario 4?");
  record78.set("options", ["Follow Enterprise Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record78.set("correctAnswer", "Follow Enterprise Architect best practices and standards");
  record78.set("explanation", "This Basic level question tests practical knowledge of Enterprise Architect fundamentals.");
  try { app.save(record78); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record79 = new Record(collection);
  record79.set("careerSlug", "enterprise-architect");
  record79.set("difficulty", "Basic");
  record79.set("questionNumber", 5);
  record79.set("question", "[Basic] What is the best practice for Enterprise Architect when handling scenario 5?");
  record79.set("options", ["Follow Enterprise Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record79.set("correctAnswer", "Follow Enterprise Architect best practices and standards");
  record79.set("explanation", "This Basic level question tests practical knowledge of Enterprise Architect fundamentals.");
  try { app.save(record79); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record80 = new Record(collection);
  record80.set("careerSlug", "enterprise-architect");
  record80.set("difficulty", "Medium");
  record80.set("questionNumber", 1);
  record80.set("question", "[Medium] What is the best practice for Enterprise Architect when handling scenario 1?");
  record80.set("options", ["Follow Enterprise Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record80.set("correctAnswer", "Follow Enterprise Architect best practices and standards");
  record80.set("explanation", "This Medium level question tests practical knowledge of Enterprise Architect fundamentals.");
  try { app.save(record80); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record81 = new Record(collection);
  record81.set("careerSlug", "enterprise-architect");
  record81.set("difficulty", "Medium");
  record81.set("questionNumber", 2);
  record81.set("question", "[Medium] What is the best practice for Enterprise Architect when handling scenario 2?");
  record81.set("options", ["Follow Enterprise Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record81.set("correctAnswer", "Follow Enterprise Architect best practices and standards");
  record81.set("explanation", "This Medium level question tests practical knowledge of Enterprise Architect fundamentals.");
  try { app.save(record81); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record82 = new Record(collection);
  record82.set("careerSlug", "enterprise-architect");
  record82.set("difficulty", "Medium");
  record82.set("questionNumber", 3);
  record82.set("question", "[Medium] What is the best practice for Enterprise Architect when handling scenario 3?");
  record82.set("options", ["Follow Enterprise Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record82.set("correctAnswer", "Follow Enterprise Architect best practices and standards");
  record82.set("explanation", "This Medium level question tests practical knowledge of Enterprise Architect fundamentals.");
  try { app.save(record82); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record83 = new Record(collection);
  record83.set("careerSlug", "enterprise-architect");
  record83.set("difficulty", "Medium");
  record83.set("questionNumber", 4);
  record83.set("question", "[Medium] What is the best practice for Enterprise Architect when handling scenario 4?");
  record83.set("options", ["Follow Enterprise Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record83.set("correctAnswer", "Follow Enterprise Architect best practices and standards");
  record83.set("explanation", "This Medium level question tests practical knowledge of Enterprise Architect fundamentals.");
  try { app.save(record83); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record84 = new Record(collection);
  record84.set("careerSlug", "enterprise-architect");
  record84.set("difficulty", "Medium");
  record84.set("questionNumber", 5);
  record84.set("question", "[Medium] What is the best practice for Enterprise Architect when handling scenario 5?");
  record84.set("options", ["Follow Enterprise Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record84.set("correctAnswer", "Follow Enterprise Architect best practices and standards");
  record84.set("explanation", "This Medium level question tests practical knowledge of Enterprise Architect fundamentals.");
  try { app.save(record84); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record85 = new Record(collection);
  record85.set("careerSlug", "enterprise-architect");
  record85.set("difficulty", "Hard");
  record85.set("questionNumber", 1);
  record85.set("question", "[Hard] What is the best practice for Enterprise Architect when handling scenario 1?");
  record85.set("options", ["Follow Enterprise Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record85.set("correctAnswer", "Follow Enterprise Architect best practices and standards");
  record85.set("explanation", "This Hard level question tests practical knowledge of Enterprise Architect fundamentals.");
  try { app.save(record85); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record86 = new Record(collection);
  record86.set("careerSlug", "enterprise-architect");
  record86.set("difficulty", "Hard");
  record86.set("questionNumber", 2);
  record86.set("question", "[Hard] What is the best practice for Enterprise Architect when handling scenario 2?");
  record86.set("options", ["Follow Enterprise Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record86.set("correctAnswer", "Follow Enterprise Architect best practices and standards");
  record86.set("explanation", "This Hard level question tests practical knowledge of Enterprise Architect fundamentals.");
  try { app.save(record86); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record87 = new Record(collection);
  record87.set("careerSlug", "enterprise-architect");
  record87.set("difficulty", "Hard");
  record87.set("questionNumber", 3);
  record87.set("question", "[Hard] What is the best practice for Enterprise Architect when handling scenario 3?");
  record87.set("options", ["Follow Enterprise Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record87.set("correctAnswer", "Follow Enterprise Architect best practices and standards");
  record87.set("explanation", "This Hard level question tests practical knowledge of Enterprise Architect fundamentals.");
  try { app.save(record87); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record88 = new Record(collection);
  record88.set("careerSlug", "enterprise-architect");
  record88.set("difficulty", "Hard");
  record88.set("questionNumber", 4);
  record88.set("question", "[Hard] What is the best practice for Enterprise Architect when handling scenario 4?");
  record88.set("options", ["Follow Enterprise Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record88.set("correctAnswer", "Follow Enterprise Architect best practices and standards");
  record88.set("explanation", "This Hard level question tests practical knowledge of Enterprise Architect fundamentals.");
  try { app.save(record88); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record89 = new Record(collection);
  record89.set("careerSlug", "enterprise-architect");
  record89.set("difficulty", "Hard");
  record89.set("questionNumber", 5);
  record89.set("question", "[Hard] What is the best practice for Enterprise Architect when handling scenario 5?");
  record89.set("options", ["Follow Enterprise Architect best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record89.set("correctAnswer", "Follow Enterprise Architect best practices and standards");
  record89.set("explanation", "This Hard level question tests practical knowledge of Enterprise Architect fundamentals.");
  try { app.save(record89); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record90 = new Record(collection);
  record90.set("careerSlug", "solutions-engineer");
  record90.set("difficulty", "Basic");
  record90.set("questionNumber", 1);
  record90.set("question", "[Basic] What is the best practice for Solutions Engineer when handling scenario 1?");
  record90.set("options", ["Follow Solutions Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record90.set("correctAnswer", "Follow Solutions Engineer best practices and standards");
  record90.set("explanation", "This Basic level question tests practical knowledge of Solutions Engineer fundamentals.");
  try { app.save(record90); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record91 = new Record(collection);
  record91.set("careerSlug", "solutions-engineer");
  record91.set("difficulty", "Basic");
  record91.set("questionNumber", 2);
  record91.set("question", "[Basic] What is the best practice for Solutions Engineer when handling scenario 2?");
  record91.set("options", ["Follow Solutions Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record91.set("correctAnswer", "Follow Solutions Engineer best practices and standards");
  record91.set("explanation", "This Basic level question tests practical knowledge of Solutions Engineer fundamentals.");
  try { app.save(record91); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record92 = new Record(collection);
  record92.set("careerSlug", "solutions-engineer");
  record92.set("difficulty", "Basic");
  record92.set("questionNumber", 3);
  record92.set("question", "[Basic] What is the best practice for Solutions Engineer when handling scenario 3?");
  record92.set("options", ["Follow Solutions Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record92.set("correctAnswer", "Follow Solutions Engineer best practices and standards");
  record92.set("explanation", "This Basic level question tests practical knowledge of Solutions Engineer fundamentals.");
  try { app.save(record92); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record93 = new Record(collection);
  record93.set("careerSlug", "solutions-engineer");
  record93.set("difficulty", "Basic");
  record93.set("questionNumber", 4);
  record93.set("question", "[Basic] What is the best practice for Solutions Engineer when handling scenario 4?");
  record93.set("options", ["Follow Solutions Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record93.set("correctAnswer", "Follow Solutions Engineer best practices and standards");
  record93.set("explanation", "This Basic level question tests practical knowledge of Solutions Engineer fundamentals.");
  try { app.save(record93); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record94 = new Record(collection);
  record94.set("careerSlug", "solutions-engineer");
  record94.set("difficulty", "Basic");
  record94.set("questionNumber", 5);
  record94.set("question", "[Basic] What is the best practice for Solutions Engineer when handling scenario 5?");
  record94.set("options", ["Follow Solutions Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record94.set("correctAnswer", "Follow Solutions Engineer best practices and standards");
  record94.set("explanation", "This Basic level question tests practical knowledge of Solutions Engineer fundamentals.");
  try { app.save(record94); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record95 = new Record(collection);
  record95.set("careerSlug", "solutions-engineer");
  record95.set("difficulty", "Medium");
  record95.set("questionNumber", 1);
  record95.set("question", "[Medium] What is the best practice for Solutions Engineer when handling scenario 1?");
  record95.set("options", ["Follow Solutions Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record95.set("correctAnswer", "Follow Solutions Engineer best practices and standards");
  record95.set("explanation", "This Medium level question tests practical knowledge of Solutions Engineer fundamentals.");
  try { app.save(record95); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record96 = new Record(collection);
  record96.set("careerSlug", "solutions-engineer");
  record96.set("difficulty", "Medium");
  record96.set("questionNumber", 2);
  record96.set("question", "[Medium] What is the best practice for Solutions Engineer when handling scenario 2?");
  record96.set("options", ["Follow Solutions Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record96.set("correctAnswer", "Follow Solutions Engineer best practices and standards");
  record96.set("explanation", "This Medium level question tests practical knowledge of Solutions Engineer fundamentals.");
  try { app.save(record96); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record97 = new Record(collection);
  record97.set("careerSlug", "solutions-engineer");
  record97.set("difficulty", "Medium");
  record97.set("questionNumber", 3);
  record97.set("question", "[Medium] What is the best practice for Solutions Engineer when handling scenario 3?");
  record97.set("options", ["Follow Solutions Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record97.set("correctAnswer", "Follow Solutions Engineer best practices and standards");
  record97.set("explanation", "This Medium level question tests practical knowledge of Solutions Engineer fundamentals.");
  try { app.save(record97); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record98 = new Record(collection);
  record98.set("careerSlug", "solutions-engineer");
  record98.set("difficulty", "Medium");
  record98.set("questionNumber", 4);
  record98.set("question", "[Medium] What is the best practice for Solutions Engineer when handling scenario 4?");
  record98.set("options", ["Follow Solutions Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record98.set("correctAnswer", "Follow Solutions Engineer best practices and standards");
  record98.set("explanation", "This Medium level question tests practical knowledge of Solutions Engineer fundamentals.");
  try { app.save(record98); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record99 = new Record(collection);
  record99.set("careerSlug", "solutions-engineer");
  record99.set("difficulty", "Medium");
  record99.set("questionNumber", 5);
  record99.set("question", "[Medium] What is the best practice for Solutions Engineer when handling scenario 5?");
  record99.set("options", ["Follow Solutions Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record99.set("correctAnswer", "Follow Solutions Engineer best practices and standards");
  record99.set("explanation", "This Medium level question tests practical knowledge of Solutions Engineer fundamentals.");
  try { app.save(record99); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record100 = new Record(collection);
  record100.set("careerSlug", "solutions-engineer");
  record100.set("difficulty", "Hard");
  record100.set("questionNumber", 1);
  record100.set("question", "[Hard] What is the best practice for Solutions Engineer when handling scenario 1?");
  record100.set("options", ["Follow Solutions Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record100.set("correctAnswer", "Follow Solutions Engineer best practices and standards");
  record100.set("explanation", "This Hard level question tests practical knowledge of Solutions Engineer fundamentals.");
  try { app.save(record100); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record101 = new Record(collection);
  record101.set("careerSlug", "solutions-engineer");
  record101.set("difficulty", "Hard");
  record101.set("questionNumber", 2);
  record101.set("question", "[Hard] What is the best practice for Solutions Engineer when handling scenario 2?");
  record101.set("options", ["Follow Solutions Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record101.set("correctAnswer", "Follow Solutions Engineer best practices and standards");
  record101.set("explanation", "This Hard level question tests practical knowledge of Solutions Engineer fundamentals.");
  try { app.save(record101); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record102 = new Record(collection);
  record102.set("careerSlug", "solutions-engineer");
  record102.set("difficulty", "Hard");
  record102.set("questionNumber", 3);
  record102.set("question", "[Hard] What is the best practice for Solutions Engineer when handling scenario 3?");
  record102.set("options", ["Follow Solutions Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record102.set("correctAnswer", "Follow Solutions Engineer best practices and standards");
  record102.set("explanation", "This Hard level question tests practical knowledge of Solutions Engineer fundamentals.");
  try { app.save(record102); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record103 = new Record(collection);
  record103.set("careerSlug", "solutions-engineer");
  record103.set("difficulty", "Hard");
  record103.set("questionNumber", 4);
  record103.set("question", "[Hard] What is the best practice for Solutions Engineer when handling scenario 4?");
  record103.set("options", ["Follow Solutions Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record103.set("correctAnswer", "Follow Solutions Engineer best practices and standards");
  record103.set("explanation", "This Hard level question tests practical knowledge of Solutions Engineer fundamentals.");
  try { app.save(record103); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record104 = new Record(collection);
  record104.set("careerSlug", "solutions-engineer");
  record104.set("difficulty", "Hard");
  record104.set("questionNumber", 5);
  record104.set("question", "[Hard] What is the best practice for Solutions Engineer when handling scenario 5?");
  record104.set("options", ["Follow Solutions Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record104.set("correctAnswer", "Follow Solutions Engineer best practices and standards");
  record104.set("explanation", "This Hard level question tests practical knowledge of Solutions Engineer fundamentals.");
  try { app.save(record104); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record105 = new Record(collection);
  record105.set("careerSlug", "integration-engineer");
  record105.set("difficulty", "Basic");
  record105.set("questionNumber", 1);
  record105.set("question", "[Basic] What is the best practice for Integration Engineer when handling scenario 1?");
  record105.set("options", ["Follow Integration Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record105.set("correctAnswer", "Follow Integration Engineer best practices and standards");
  record105.set("explanation", "This Basic level question tests practical knowledge of Integration Engineer fundamentals.");
  try { app.save(record105); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record106 = new Record(collection);
  record106.set("careerSlug", "integration-engineer");
  record106.set("difficulty", "Basic");
  record106.set("questionNumber", 2);
  record106.set("question", "[Basic] What is the best practice for Integration Engineer when handling scenario 2?");
  record106.set("options", ["Follow Integration Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record106.set("correctAnswer", "Follow Integration Engineer best practices and standards");
  record106.set("explanation", "This Basic level question tests practical knowledge of Integration Engineer fundamentals.");
  try { app.save(record106); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record107 = new Record(collection);
  record107.set("careerSlug", "integration-engineer");
  record107.set("difficulty", "Basic");
  record107.set("questionNumber", 3);
  record107.set("question", "[Basic] What is the best practice for Integration Engineer when handling scenario 3?");
  record107.set("options", ["Follow Integration Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record107.set("correctAnswer", "Follow Integration Engineer best practices and standards");
  record107.set("explanation", "This Basic level question tests practical knowledge of Integration Engineer fundamentals.");
  try { app.save(record107); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record108 = new Record(collection);
  record108.set("careerSlug", "integration-engineer");
  record108.set("difficulty", "Basic");
  record108.set("questionNumber", 4);
  record108.set("question", "[Basic] What is the best practice for Integration Engineer when handling scenario 4?");
  record108.set("options", ["Follow Integration Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record108.set("correctAnswer", "Follow Integration Engineer best practices and standards");
  record108.set("explanation", "This Basic level question tests practical knowledge of Integration Engineer fundamentals.");
  try { app.save(record108); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record109 = new Record(collection);
  record109.set("careerSlug", "integration-engineer");
  record109.set("difficulty", "Basic");
  record109.set("questionNumber", 5);
  record109.set("question", "[Basic] What is the best practice for Integration Engineer when handling scenario 5?");
  record109.set("options", ["Follow Integration Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record109.set("correctAnswer", "Follow Integration Engineer best practices and standards");
  record109.set("explanation", "This Basic level question tests practical knowledge of Integration Engineer fundamentals.");
  try { app.save(record109); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record110 = new Record(collection);
  record110.set("careerSlug", "integration-engineer");
  record110.set("difficulty", "Medium");
  record110.set("questionNumber", 1);
  record110.set("question", "[Medium] What is the best practice for Integration Engineer when handling scenario 1?");
  record110.set("options", ["Follow Integration Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record110.set("correctAnswer", "Follow Integration Engineer best practices and standards");
  record110.set("explanation", "This Medium level question tests practical knowledge of Integration Engineer fundamentals.");
  try { app.save(record110); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record111 = new Record(collection);
  record111.set("careerSlug", "integration-engineer");
  record111.set("difficulty", "Medium");
  record111.set("questionNumber", 2);
  record111.set("question", "[Medium] What is the best practice for Integration Engineer when handling scenario 2?");
  record111.set("options", ["Follow Integration Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record111.set("correctAnswer", "Follow Integration Engineer best practices and standards");
  record111.set("explanation", "This Medium level question tests practical knowledge of Integration Engineer fundamentals.");
  try { app.save(record111); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record112 = new Record(collection);
  record112.set("careerSlug", "integration-engineer");
  record112.set("difficulty", "Medium");
  record112.set("questionNumber", 3);
  record112.set("question", "[Medium] What is the best practice for Integration Engineer when handling scenario 3?");
  record112.set("options", ["Follow Integration Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record112.set("correctAnswer", "Follow Integration Engineer best practices and standards");
  record112.set("explanation", "This Medium level question tests practical knowledge of Integration Engineer fundamentals.");
  try { app.save(record112); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record113 = new Record(collection);
  record113.set("careerSlug", "integration-engineer");
  record113.set("difficulty", "Medium");
  record113.set("questionNumber", 4);
  record113.set("question", "[Medium] What is the best practice for Integration Engineer when handling scenario 4?");
  record113.set("options", ["Follow Integration Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record113.set("correctAnswer", "Follow Integration Engineer best practices and standards");
  record113.set("explanation", "This Medium level question tests practical knowledge of Integration Engineer fundamentals.");
  try { app.save(record113); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record114 = new Record(collection);
  record114.set("careerSlug", "integration-engineer");
  record114.set("difficulty", "Medium");
  record114.set("questionNumber", 5);
  record114.set("question", "[Medium] What is the best practice for Integration Engineer when handling scenario 5?");
  record114.set("options", ["Follow Integration Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record114.set("correctAnswer", "Follow Integration Engineer best practices and standards");
  record114.set("explanation", "This Medium level question tests practical knowledge of Integration Engineer fundamentals.");
  try { app.save(record114); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record115 = new Record(collection);
  record115.set("careerSlug", "integration-engineer");
  record115.set("difficulty", "Hard");
  record115.set("questionNumber", 1);
  record115.set("question", "[Hard] What is the best practice for Integration Engineer when handling scenario 1?");
  record115.set("options", ["Follow Integration Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record115.set("correctAnswer", "Follow Integration Engineer best practices and standards");
  record115.set("explanation", "This Hard level question tests practical knowledge of Integration Engineer fundamentals.");
  try { app.save(record115); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record116 = new Record(collection);
  record116.set("careerSlug", "integration-engineer");
  record116.set("difficulty", "Hard");
  record116.set("questionNumber", 2);
  record116.set("question", "[Hard] What is the best practice for Integration Engineer when handling scenario 2?");
  record116.set("options", ["Follow Integration Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record116.set("correctAnswer", "Follow Integration Engineer best practices and standards");
  record116.set("explanation", "This Hard level question tests practical knowledge of Integration Engineer fundamentals.");
  try { app.save(record116); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record117 = new Record(collection);
  record117.set("careerSlug", "integration-engineer");
  record117.set("difficulty", "Hard");
  record117.set("questionNumber", 3);
  record117.set("question", "[Hard] What is the best practice for Integration Engineer when handling scenario 3?");
  record117.set("options", ["Follow Integration Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record117.set("correctAnswer", "Follow Integration Engineer best practices and standards");
  record117.set("explanation", "This Hard level question tests practical knowledge of Integration Engineer fundamentals.");
  try { app.save(record117); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record118 = new Record(collection);
  record118.set("careerSlug", "integration-engineer");
  record118.set("difficulty", "Hard");
  record118.set("questionNumber", 4);
  record118.set("question", "[Hard] What is the best practice for Integration Engineer when handling scenario 4?");
  record118.set("options", ["Follow Integration Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record118.set("correctAnswer", "Follow Integration Engineer best practices and standards");
  record118.set("explanation", "This Hard level question tests practical knowledge of Integration Engineer fundamentals.");
  try { app.save(record118); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record119 = new Record(collection);
  record119.set("careerSlug", "integration-engineer");
  record119.set("difficulty", "Hard");
  record119.set("questionNumber", 5);
  record119.set("question", "[Hard] What is the best practice for Integration Engineer when handling scenario 5?");
  record119.set("options", ["Follow Integration Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record119.set("correctAnswer", "Follow Integration Engineer best practices and standards");
  record119.set("explanation", "This Hard level question tests practical knowledge of Integration Engineer fundamentals.");
  try { app.save(record119); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record120 = new Record(collection);
  record120.set("careerSlug", "performance-engineer");
  record120.set("difficulty", "Basic");
  record120.set("questionNumber", 1);
  record120.set("question", "[Basic] What is the best practice for Performance Engineer when handling scenario 1?");
  record120.set("options", ["Follow Performance Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record120.set("correctAnswer", "Follow Performance Engineer best practices and standards");
  record120.set("explanation", "This Basic level question tests practical knowledge of Performance Engineer fundamentals.");
  try { app.save(record120); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record121 = new Record(collection);
  record121.set("careerSlug", "performance-engineer");
  record121.set("difficulty", "Basic");
  record121.set("questionNumber", 2);
  record121.set("question", "[Basic] What is the best practice for Performance Engineer when handling scenario 2?");
  record121.set("options", ["Follow Performance Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record121.set("correctAnswer", "Follow Performance Engineer best practices and standards");
  record121.set("explanation", "This Basic level question tests practical knowledge of Performance Engineer fundamentals.");
  try { app.save(record121); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record122 = new Record(collection);
  record122.set("careerSlug", "performance-engineer");
  record122.set("difficulty", "Basic");
  record122.set("questionNumber", 3);
  record122.set("question", "[Basic] What is the best practice for Performance Engineer when handling scenario 3?");
  record122.set("options", ["Follow Performance Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record122.set("correctAnswer", "Follow Performance Engineer best practices and standards");
  record122.set("explanation", "This Basic level question tests practical knowledge of Performance Engineer fundamentals.");
  try { app.save(record122); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record123 = new Record(collection);
  record123.set("careerSlug", "performance-engineer");
  record123.set("difficulty", "Basic");
  record123.set("questionNumber", 4);
  record123.set("question", "[Basic] What is the best practice for Performance Engineer when handling scenario 4?");
  record123.set("options", ["Follow Performance Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record123.set("correctAnswer", "Follow Performance Engineer best practices and standards");
  record123.set("explanation", "This Basic level question tests practical knowledge of Performance Engineer fundamentals.");
  try { app.save(record123); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record124 = new Record(collection);
  record124.set("careerSlug", "performance-engineer");
  record124.set("difficulty", "Basic");
  record124.set("questionNumber", 5);
  record124.set("question", "[Basic] What is the best practice for Performance Engineer when handling scenario 5?");
  record124.set("options", ["Follow Performance Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record124.set("correctAnswer", "Follow Performance Engineer best practices and standards");
  record124.set("explanation", "This Basic level question tests practical knowledge of Performance Engineer fundamentals.");
  try { app.save(record124); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record125 = new Record(collection);
  record125.set("careerSlug", "performance-engineer");
  record125.set("difficulty", "Medium");
  record125.set("questionNumber", 1);
  record125.set("question", "[Medium] What is the best practice for Performance Engineer when handling scenario 1?");
  record125.set("options", ["Follow Performance Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record125.set("correctAnswer", "Follow Performance Engineer best practices and standards");
  record125.set("explanation", "This Medium level question tests practical knowledge of Performance Engineer fundamentals.");
  try { app.save(record125); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record126 = new Record(collection);
  record126.set("careerSlug", "performance-engineer");
  record126.set("difficulty", "Medium");
  record126.set("questionNumber", 2);
  record126.set("question", "[Medium] What is the best practice for Performance Engineer when handling scenario 2?");
  record126.set("options", ["Follow Performance Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record126.set("correctAnswer", "Follow Performance Engineer best practices and standards");
  record126.set("explanation", "This Medium level question tests practical knowledge of Performance Engineer fundamentals.");
  try { app.save(record126); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record127 = new Record(collection);
  record127.set("careerSlug", "performance-engineer");
  record127.set("difficulty", "Medium");
  record127.set("questionNumber", 3);
  record127.set("question", "[Medium] What is the best practice for Performance Engineer when handling scenario 3?");
  record127.set("options", ["Follow Performance Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record127.set("correctAnswer", "Follow Performance Engineer best practices and standards");
  record127.set("explanation", "This Medium level question tests practical knowledge of Performance Engineer fundamentals.");
  try { app.save(record127); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record128 = new Record(collection);
  record128.set("careerSlug", "performance-engineer");
  record128.set("difficulty", "Medium");
  record128.set("questionNumber", 4);
  record128.set("question", "[Medium] What is the best practice for Performance Engineer when handling scenario 4?");
  record128.set("options", ["Follow Performance Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record128.set("correctAnswer", "Follow Performance Engineer best practices and standards");
  record128.set("explanation", "This Medium level question tests practical knowledge of Performance Engineer fundamentals.");
  try { app.save(record128); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record129 = new Record(collection);
  record129.set("careerSlug", "performance-engineer");
  record129.set("difficulty", "Medium");
  record129.set("questionNumber", 5);
  record129.set("question", "[Medium] What is the best practice for Performance Engineer when handling scenario 5?");
  record129.set("options", ["Follow Performance Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record129.set("correctAnswer", "Follow Performance Engineer best practices and standards");
  record129.set("explanation", "This Medium level question tests practical knowledge of Performance Engineer fundamentals.");
  try { app.save(record129); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record130 = new Record(collection);
  record130.set("careerSlug", "performance-engineer");
  record130.set("difficulty", "Hard");
  record130.set("questionNumber", 1);
  record130.set("question", "[Hard] What is the best practice for Performance Engineer when handling scenario 1?");
  record130.set("options", ["Follow Performance Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record130.set("correctAnswer", "Follow Performance Engineer best practices and standards");
  record130.set("explanation", "This Hard level question tests practical knowledge of Performance Engineer fundamentals.");
  try { app.save(record130); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record131 = new Record(collection);
  record131.set("careerSlug", "performance-engineer");
  record131.set("difficulty", "Hard");
  record131.set("questionNumber", 2);
  record131.set("question", "[Hard] What is the best practice for Performance Engineer when handling scenario 2?");
  record131.set("options", ["Follow Performance Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record131.set("correctAnswer", "Follow Performance Engineer best practices and standards");
  record131.set("explanation", "This Hard level question tests practical knowledge of Performance Engineer fundamentals.");
  try { app.save(record131); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record132 = new Record(collection);
  record132.set("careerSlug", "performance-engineer");
  record132.set("difficulty", "Hard");
  record132.set("questionNumber", 3);
  record132.set("question", "[Hard] What is the best practice for Performance Engineer when handling scenario 3?");
  record132.set("options", ["Follow Performance Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record132.set("correctAnswer", "Follow Performance Engineer best practices and standards");
  record132.set("explanation", "This Hard level question tests practical knowledge of Performance Engineer fundamentals.");
  try { app.save(record132); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record133 = new Record(collection);
  record133.set("careerSlug", "performance-engineer");
  record133.set("difficulty", "Hard");
  record133.set("questionNumber", 4);
  record133.set("question", "[Hard] What is the best practice for Performance Engineer when handling scenario 4?");
  record133.set("options", ["Follow Performance Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record133.set("correctAnswer", "Follow Performance Engineer best practices and standards");
  record133.set("explanation", "This Hard level question tests practical knowledge of Performance Engineer fundamentals.");
  try { app.save(record133); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record134 = new Record(collection);
  record134.set("careerSlug", "performance-engineer");
  record134.set("difficulty", "Hard");
  record134.set("questionNumber", 5);
  record134.set("question", "[Hard] What is the best practice for Performance Engineer when handling scenario 5?");
  record134.set("options", ["Follow Performance Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record134.set("correctAnswer", "Follow Performance Engineer best practices and standards");
  record134.set("explanation", "This Hard level question tests practical knowledge of Performance Engineer fundamentals.");
  try { app.save(record134); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record135 = new Record(collection);
  record135.set("careerSlug", "release-engineer");
  record135.set("difficulty", "Basic");
  record135.set("questionNumber", 1);
  record135.set("question", "[Basic] What is the best practice for Release Engineer when handling scenario 1?");
  record135.set("options", ["Follow Release Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record135.set("correctAnswer", "Follow Release Engineer best practices and standards");
  record135.set("explanation", "This Basic level question tests practical knowledge of Release Engineer fundamentals.");
  try { app.save(record135); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record136 = new Record(collection);
  record136.set("careerSlug", "release-engineer");
  record136.set("difficulty", "Basic");
  record136.set("questionNumber", 2);
  record136.set("question", "[Basic] What is the best practice for Release Engineer when handling scenario 2?");
  record136.set("options", ["Follow Release Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record136.set("correctAnswer", "Follow Release Engineer best practices and standards");
  record136.set("explanation", "This Basic level question tests practical knowledge of Release Engineer fundamentals.");
  try { app.save(record136); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record137 = new Record(collection);
  record137.set("careerSlug", "release-engineer");
  record137.set("difficulty", "Basic");
  record137.set("questionNumber", 3);
  record137.set("question", "[Basic] What is the best practice for Release Engineer when handling scenario 3?");
  record137.set("options", ["Follow Release Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record137.set("correctAnswer", "Follow Release Engineer best practices and standards");
  record137.set("explanation", "This Basic level question tests practical knowledge of Release Engineer fundamentals.");
  try { app.save(record137); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record138 = new Record(collection);
  record138.set("careerSlug", "release-engineer");
  record138.set("difficulty", "Basic");
  record138.set("questionNumber", 4);
  record138.set("question", "[Basic] What is the best practice for Release Engineer when handling scenario 4?");
  record138.set("options", ["Follow Release Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record138.set("correctAnswer", "Follow Release Engineer best practices and standards");
  record138.set("explanation", "This Basic level question tests practical knowledge of Release Engineer fundamentals.");
  try { app.save(record138); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record139 = new Record(collection);
  record139.set("careerSlug", "release-engineer");
  record139.set("difficulty", "Basic");
  record139.set("questionNumber", 5);
  record139.set("question", "[Basic] What is the best practice for Release Engineer when handling scenario 5?");
  record139.set("options", ["Follow Release Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record139.set("correctAnswer", "Follow Release Engineer best practices and standards");
  record139.set("explanation", "This Basic level question tests practical knowledge of Release Engineer fundamentals.");
  try { app.save(record139); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record140 = new Record(collection);
  record140.set("careerSlug", "release-engineer");
  record140.set("difficulty", "Medium");
  record140.set("questionNumber", 1);
  record140.set("question", "[Medium] What is the best practice for Release Engineer when handling scenario 1?");
  record140.set("options", ["Follow Release Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record140.set("correctAnswer", "Follow Release Engineer best practices and standards");
  record140.set("explanation", "This Medium level question tests practical knowledge of Release Engineer fundamentals.");
  try { app.save(record140); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record141 = new Record(collection);
  record141.set("careerSlug", "release-engineer");
  record141.set("difficulty", "Medium");
  record141.set("questionNumber", 2);
  record141.set("question", "[Medium] What is the best practice for Release Engineer when handling scenario 2?");
  record141.set("options", ["Follow Release Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record141.set("correctAnswer", "Follow Release Engineer best practices and standards");
  record141.set("explanation", "This Medium level question tests practical knowledge of Release Engineer fundamentals.");
  try { app.save(record141); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record142 = new Record(collection);
  record142.set("careerSlug", "release-engineer");
  record142.set("difficulty", "Medium");
  record142.set("questionNumber", 3);
  record142.set("question", "[Medium] What is the best practice for Release Engineer when handling scenario 3?");
  record142.set("options", ["Follow Release Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record142.set("correctAnswer", "Follow Release Engineer best practices and standards");
  record142.set("explanation", "This Medium level question tests practical knowledge of Release Engineer fundamentals.");
  try { app.save(record142); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record143 = new Record(collection);
  record143.set("careerSlug", "release-engineer");
  record143.set("difficulty", "Medium");
  record143.set("questionNumber", 4);
  record143.set("question", "[Medium] What is the best practice for Release Engineer when handling scenario 4?");
  record143.set("options", ["Follow Release Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record143.set("correctAnswer", "Follow Release Engineer best practices and standards");
  record143.set("explanation", "This Medium level question tests practical knowledge of Release Engineer fundamentals.");
  try { app.save(record143); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record144 = new Record(collection);
  record144.set("careerSlug", "release-engineer");
  record144.set("difficulty", "Medium");
  record144.set("questionNumber", 5);
  record144.set("question", "[Medium] What is the best practice for Release Engineer when handling scenario 5?");
  record144.set("options", ["Follow Release Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record144.set("correctAnswer", "Follow Release Engineer best practices and standards");
  record144.set("explanation", "This Medium level question tests practical knowledge of Release Engineer fundamentals.");
  try { app.save(record144); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record145 = new Record(collection);
  record145.set("careerSlug", "release-engineer");
  record145.set("difficulty", "Hard");
  record145.set("questionNumber", 1);
  record145.set("question", "[Hard] What is the best practice for Release Engineer when handling scenario 1?");
  record145.set("options", ["Follow Release Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record145.set("correctAnswer", "Follow Release Engineer best practices and standards");
  record145.set("explanation", "This Hard level question tests practical knowledge of Release Engineer fundamentals.");
  try { app.save(record145); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record146 = new Record(collection);
  record146.set("careerSlug", "release-engineer");
  record146.set("difficulty", "Hard");
  record146.set("questionNumber", 2);
  record146.set("question", "[Hard] What is the best practice for Release Engineer when handling scenario 2?");
  record146.set("options", ["Follow Release Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record146.set("correctAnswer", "Follow Release Engineer best practices and standards");
  record146.set("explanation", "This Hard level question tests practical knowledge of Release Engineer fundamentals.");
  try { app.save(record146); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record147 = new Record(collection);
  record147.set("careerSlug", "release-engineer");
  record147.set("difficulty", "Hard");
  record147.set("questionNumber", 3);
  record147.set("question", "[Hard] What is the best practice for Release Engineer when handling scenario 3?");
  record147.set("options", ["Follow Release Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record147.set("correctAnswer", "Follow Release Engineer best practices and standards");
  record147.set("explanation", "This Hard level question tests practical knowledge of Release Engineer fundamentals.");
  try { app.save(record147); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record148 = new Record(collection);
  record148.set("careerSlug", "release-engineer");
  record148.set("difficulty", "Hard");
  record148.set("questionNumber", 4);
  record148.set("question", "[Hard] What is the best practice for Release Engineer when handling scenario 4?");
  record148.set("options", ["Follow Release Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record148.set("correctAnswer", "Follow Release Engineer best practices and standards");
  record148.set("explanation", "This Hard level question tests practical knowledge of Release Engineer fundamentals.");
  try { app.save(record148); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record149 = new Record(collection);
  record149.set("careerSlug", "release-engineer");
  record149.set("difficulty", "Hard");
  record149.set("questionNumber", 5);
  record149.set("question", "[Hard] What is the best practice for Release Engineer when handling scenario 5?");
  record149.set("options", ["Follow Release Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record149.set("correctAnswer", "Follow Release Engineer best practices and standards");
  record149.set("explanation", "This Hard level question tests practical knowledge of Release Engineer fundamentals.");
  try { app.save(record149); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record150 = new Record(collection);
  record150.set("careerSlug", "siem-analyst");
  record150.set("difficulty", "Basic");
  record150.set("questionNumber", 1);
  record150.set("question", "[Basic] What is the best practice for SIEM Analyst when handling scenario 1?");
  record150.set("options", ["Follow SIEM Analyst best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record150.set("correctAnswer", "Follow SIEM Analyst best practices and standards");
  record150.set("explanation", "This Basic level question tests practical knowledge of SIEM Analyst fundamentals.");
  try { app.save(record150); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record151 = new Record(collection);
  record151.set("careerSlug", "siem-analyst");
  record151.set("difficulty", "Basic");
  record151.set("questionNumber", 2);
  record151.set("question", "[Basic] What is the best practice for SIEM Analyst when handling scenario 2?");
  record151.set("options", ["Follow SIEM Analyst best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record151.set("correctAnswer", "Follow SIEM Analyst best practices and standards");
  record151.set("explanation", "This Basic level question tests practical knowledge of SIEM Analyst fundamentals.");
  try { app.save(record151); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record152 = new Record(collection);
  record152.set("careerSlug", "siem-analyst");
  record152.set("difficulty", "Basic");
  record152.set("questionNumber", 3);
  record152.set("question", "[Basic] What is the best practice for SIEM Analyst when handling scenario 3?");
  record152.set("options", ["Follow SIEM Analyst best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record152.set("correctAnswer", "Follow SIEM Analyst best practices and standards");
  record152.set("explanation", "This Basic level question tests practical knowledge of SIEM Analyst fundamentals.");
  try { app.save(record152); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record153 = new Record(collection);
  record153.set("careerSlug", "siem-analyst");
  record153.set("difficulty", "Basic");
  record153.set("questionNumber", 4);
  record153.set("question", "[Basic] What is the best practice for SIEM Analyst when handling scenario 4?");
  record153.set("options", ["Follow SIEM Analyst best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record153.set("correctAnswer", "Follow SIEM Analyst best practices and standards");
  record153.set("explanation", "This Basic level question tests practical knowledge of SIEM Analyst fundamentals.");
  try { app.save(record153); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record154 = new Record(collection);
  record154.set("careerSlug", "siem-analyst");
  record154.set("difficulty", "Basic");
  record154.set("questionNumber", 5);
  record154.set("question", "[Basic] What is the best practice for SIEM Analyst when handling scenario 5?");
  record154.set("options", ["Follow SIEM Analyst best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record154.set("correctAnswer", "Follow SIEM Analyst best practices and standards");
  record154.set("explanation", "This Basic level question tests practical knowledge of SIEM Analyst fundamentals.");
  try { app.save(record154); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record155 = new Record(collection);
  record155.set("careerSlug", "siem-analyst");
  record155.set("difficulty", "Medium");
  record155.set("questionNumber", 1);
  record155.set("question", "[Medium] What is the best practice for SIEM Analyst when handling scenario 1?");
  record155.set("options", ["Follow SIEM Analyst best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record155.set("correctAnswer", "Follow SIEM Analyst best practices and standards");
  record155.set("explanation", "This Medium level question tests practical knowledge of SIEM Analyst fundamentals.");
  try { app.save(record155); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record156 = new Record(collection);
  record156.set("careerSlug", "siem-analyst");
  record156.set("difficulty", "Medium");
  record156.set("questionNumber", 2);
  record156.set("question", "[Medium] What is the best practice for SIEM Analyst when handling scenario 2?");
  record156.set("options", ["Follow SIEM Analyst best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record156.set("correctAnswer", "Follow SIEM Analyst best practices and standards");
  record156.set("explanation", "This Medium level question tests practical knowledge of SIEM Analyst fundamentals.");
  try { app.save(record156); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record157 = new Record(collection);
  record157.set("careerSlug", "siem-analyst");
  record157.set("difficulty", "Medium");
  record157.set("questionNumber", 3);
  record157.set("question", "[Medium] What is the best practice for SIEM Analyst when handling scenario 3?");
  record157.set("options", ["Follow SIEM Analyst best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record157.set("correctAnswer", "Follow SIEM Analyst best practices and standards");
  record157.set("explanation", "This Medium level question tests practical knowledge of SIEM Analyst fundamentals.");
  try { app.save(record157); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record158 = new Record(collection);
  record158.set("careerSlug", "siem-analyst");
  record158.set("difficulty", "Medium");
  record158.set("questionNumber", 4);
  record158.set("question", "[Medium] What is the best practice for SIEM Analyst when handling scenario 4?");
  record158.set("options", ["Follow SIEM Analyst best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record158.set("correctAnswer", "Follow SIEM Analyst best practices and standards");
  record158.set("explanation", "This Medium level question tests practical knowledge of SIEM Analyst fundamentals.");
  try { app.save(record158); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record159 = new Record(collection);
  record159.set("careerSlug", "siem-analyst");
  record159.set("difficulty", "Medium");
  record159.set("questionNumber", 5);
  record159.set("question", "[Medium] What is the best practice for SIEM Analyst when handling scenario 5?");
  record159.set("options", ["Follow SIEM Analyst best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record159.set("correctAnswer", "Follow SIEM Analyst best practices and standards");
  record159.set("explanation", "This Medium level question tests practical knowledge of SIEM Analyst fundamentals.");
  try { app.save(record159); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record160 = new Record(collection);
  record160.set("careerSlug", "siem-analyst");
  record160.set("difficulty", "Hard");
  record160.set("questionNumber", 1);
  record160.set("question", "[Hard] What is the best practice for SIEM Analyst when handling scenario 1?");
  record160.set("options", ["Follow SIEM Analyst best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record160.set("correctAnswer", "Follow SIEM Analyst best practices and standards");
  record160.set("explanation", "This Hard level question tests practical knowledge of SIEM Analyst fundamentals.");
  try { app.save(record160); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record161 = new Record(collection);
  record161.set("careerSlug", "siem-analyst");
  record161.set("difficulty", "Hard");
  record161.set("questionNumber", 2);
  record161.set("question", "[Hard] What is the best practice for SIEM Analyst when handling scenario 2?");
  record161.set("options", ["Follow SIEM Analyst best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record161.set("correctAnswer", "Follow SIEM Analyst best practices and standards");
  record161.set("explanation", "This Hard level question tests practical knowledge of SIEM Analyst fundamentals.");
  try { app.save(record161); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record162 = new Record(collection);
  record162.set("careerSlug", "siem-analyst");
  record162.set("difficulty", "Hard");
  record162.set("questionNumber", 3);
  record162.set("question", "[Hard] What is the best practice for SIEM Analyst when handling scenario 3?");
  record162.set("options", ["Follow SIEM Analyst best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record162.set("correctAnswer", "Follow SIEM Analyst best practices and standards");
  record162.set("explanation", "This Hard level question tests practical knowledge of SIEM Analyst fundamentals.");
  try { app.save(record162); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record163 = new Record(collection);
  record163.set("careerSlug", "siem-analyst");
  record163.set("difficulty", "Hard");
  record163.set("questionNumber", 4);
  record163.set("question", "[Hard] What is the best practice for SIEM Analyst when handling scenario 4?");
  record163.set("options", ["Follow SIEM Analyst best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record163.set("correctAnswer", "Follow SIEM Analyst best practices and standards");
  record163.set("explanation", "This Hard level question tests practical knowledge of SIEM Analyst fundamentals.");
  try { app.save(record163); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record164 = new Record(collection);
  record164.set("careerSlug", "siem-analyst");
  record164.set("difficulty", "Hard");
  record164.set("questionNumber", 5);
  record164.set("question", "[Hard] What is the best practice for SIEM Analyst when handling scenario 5?");
  record164.set("options", ["Follow SIEM Analyst best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record164.set("correctAnswer", "Follow SIEM Analyst best practices and standards");
  record164.set("explanation", "This Hard level question tests practical knowledge of SIEM Analyst fundamentals.");
  try { app.save(record164); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record165 = new Record(collection);
  record165.set("careerSlug", "systems-administrator");
  record165.set("difficulty", "Basic");
  record165.set("questionNumber", 1);
  record165.set("question", "[Basic] What is the best practice for Systems Administrator when handling scenario 1?");
  record165.set("options", ["Follow Systems Administrator best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record165.set("correctAnswer", "Follow Systems Administrator best practices and standards");
  record165.set("explanation", "This Basic level question tests practical knowledge of Systems Administrator fundamentals.");
  try { app.save(record165); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record166 = new Record(collection);
  record166.set("careerSlug", "systems-administrator");
  record166.set("difficulty", "Basic");
  record166.set("questionNumber", 2);
  record166.set("question", "[Basic] What is the best practice for Systems Administrator when handling scenario 2?");
  record166.set("options", ["Follow Systems Administrator best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record166.set("correctAnswer", "Follow Systems Administrator best practices and standards");
  record166.set("explanation", "This Basic level question tests practical knowledge of Systems Administrator fundamentals.");
  try { app.save(record166); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record167 = new Record(collection);
  record167.set("careerSlug", "systems-administrator");
  record167.set("difficulty", "Basic");
  record167.set("questionNumber", 3);
  record167.set("question", "[Basic] What is the best practice for Systems Administrator when handling scenario 3?");
  record167.set("options", ["Follow Systems Administrator best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record167.set("correctAnswer", "Follow Systems Administrator best practices and standards");
  record167.set("explanation", "This Basic level question tests practical knowledge of Systems Administrator fundamentals.");
  try { app.save(record167); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record168 = new Record(collection);
  record168.set("careerSlug", "systems-administrator");
  record168.set("difficulty", "Basic");
  record168.set("questionNumber", 4);
  record168.set("question", "[Basic] What is the best practice for Systems Administrator when handling scenario 4?");
  record168.set("options", ["Follow Systems Administrator best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record168.set("correctAnswer", "Follow Systems Administrator best practices and standards");
  record168.set("explanation", "This Basic level question tests practical knowledge of Systems Administrator fundamentals.");
  try { app.save(record168); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record169 = new Record(collection);
  record169.set("careerSlug", "systems-administrator");
  record169.set("difficulty", "Basic");
  record169.set("questionNumber", 5);
  record169.set("question", "[Basic] What is the best practice for Systems Administrator when handling scenario 5?");
  record169.set("options", ["Follow Systems Administrator best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record169.set("correctAnswer", "Follow Systems Administrator best practices and standards");
  record169.set("explanation", "This Basic level question tests practical knowledge of Systems Administrator fundamentals.");
  try { app.save(record169); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record170 = new Record(collection);
  record170.set("careerSlug", "systems-administrator");
  record170.set("difficulty", "Medium");
  record170.set("questionNumber", 1);
  record170.set("question", "[Medium] What is the best practice for Systems Administrator when handling scenario 1?");
  record170.set("options", ["Follow Systems Administrator best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record170.set("correctAnswer", "Follow Systems Administrator best practices and standards");
  record170.set("explanation", "This Medium level question tests practical knowledge of Systems Administrator fundamentals.");
  try { app.save(record170); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record171 = new Record(collection);
  record171.set("careerSlug", "systems-administrator");
  record171.set("difficulty", "Medium");
  record171.set("questionNumber", 2);
  record171.set("question", "[Medium] What is the best practice for Systems Administrator when handling scenario 2?");
  record171.set("options", ["Follow Systems Administrator best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record171.set("correctAnswer", "Follow Systems Administrator best practices and standards");
  record171.set("explanation", "This Medium level question tests practical knowledge of Systems Administrator fundamentals.");
  try { app.save(record171); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record172 = new Record(collection);
  record172.set("careerSlug", "systems-administrator");
  record172.set("difficulty", "Medium");
  record172.set("questionNumber", 3);
  record172.set("question", "[Medium] What is the best practice for Systems Administrator when handling scenario 3?");
  record172.set("options", ["Follow Systems Administrator best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record172.set("correctAnswer", "Follow Systems Administrator best practices and standards");
  record172.set("explanation", "This Medium level question tests practical knowledge of Systems Administrator fundamentals.");
  try { app.save(record172); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record173 = new Record(collection);
  record173.set("careerSlug", "systems-administrator");
  record173.set("difficulty", "Medium");
  record173.set("questionNumber", 4);
  record173.set("question", "[Medium] What is the best practice for Systems Administrator when handling scenario 4?");
  record173.set("options", ["Follow Systems Administrator best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record173.set("correctAnswer", "Follow Systems Administrator best practices and standards");
  record173.set("explanation", "This Medium level question tests practical knowledge of Systems Administrator fundamentals.");
  try { app.save(record173); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record174 = new Record(collection);
  record174.set("careerSlug", "systems-administrator");
  record174.set("difficulty", "Medium");
  record174.set("questionNumber", 5);
  record174.set("question", "[Medium] What is the best practice for Systems Administrator when handling scenario 5?");
  record174.set("options", ["Follow Systems Administrator best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record174.set("correctAnswer", "Follow Systems Administrator best practices and standards");
  record174.set("explanation", "This Medium level question tests practical knowledge of Systems Administrator fundamentals.");
  try { app.save(record174); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record175 = new Record(collection);
  record175.set("careerSlug", "systems-administrator");
  record175.set("difficulty", "Hard");
  record175.set("questionNumber", 1);
  record175.set("question", "[Hard] What is the best practice for Systems Administrator when handling scenario 1?");
  record175.set("options", ["Follow Systems Administrator best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record175.set("correctAnswer", "Follow Systems Administrator best practices and standards");
  record175.set("explanation", "This Hard level question tests practical knowledge of Systems Administrator fundamentals.");
  try { app.save(record175); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record176 = new Record(collection);
  record176.set("careerSlug", "systems-administrator");
  record176.set("difficulty", "Hard");
  record176.set("questionNumber", 2);
  record176.set("question", "[Hard] What is the best practice for Systems Administrator when handling scenario 2?");
  record176.set("options", ["Follow Systems Administrator best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record176.set("correctAnswer", "Follow Systems Administrator best practices and standards");
  record176.set("explanation", "This Hard level question tests practical knowledge of Systems Administrator fundamentals.");
  try { app.save(record176); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record177 = new Record(collection);
  record177.set("careerSlug", "systems-administrator");
  record177.set("difficulty", "Hard");
  record177.set("questionNumber", 3);
  record177.set("question", "[Hard] What is the best practice for Systems Administrator when handling scenario 3?");
  record177.set("options", ["Follow Systems Administrator best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record177.set("correctAnswer", "Follow Systems Administrator best practices and standards");
  record177.set("explanation", "This Hard level question tests practical knowledge of Systems Administrator fundamentals.");
  try { app.save(record177); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record178 = new Record(collection);
  record178.set("careerSlug", "systems-administrator");
  record178.set("difficulty", "Hard");
  record178.set("questionNumber", 4);
  record178.set("question", "[Hard] What is the best practice for Systems Administrator when handling scenario 4?");
  record178.set("options", ["Follow Systems Administrator best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record178.set("correctAnswer", "Follow Systems Administrator best practices and standards");
  record178.set("explanation", "This Hard level question tests practical knowledge of Systems Administrator fundamentals.");
  try { app.save(record178); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record179 = new Record(collection);
  record179.set("careerSlug", "systems-administrator");
  record179.set("difficulty", "Hard");
  record179.set("questionNumber", 5);
  record179.set("question", "[Hard] What is the best practice for Systems Administrator when handling scenario 5?");
  record179.set("options", ["Follow Systems Administrator best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record179.set("correctAnswer", "Follow Systems Administrator best practices and standards");
  record179.set("explanation", "This Hard level question tests practical knowledge of Systems Administrator fundamentals.");
  try { app.save(record179); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record180 = new Record(collection);
  record180.set("careerSlug", "cloud-security-engineer");
  record180.set("difficulty", "Basic");
  record180.set("questionNumber", 1);
  record180.set("question", "[Basic] What is the best practice for Cloud Security Engineer when handling scenario 1?");
  record180.set("options", ["Follow Cloud Security Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record180.set("correctAnswer", "Follow Cloud Security Engineer best practices and standards");
  record180.set("explanation", "This Basic level question tests practical knowledge of Cloud Security Engineer fundamentals.");
  try { app.save(record180); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record181 = new Record(collection);
  record181.set("careerSlug", "cloud-security-engineer");
  record181.set("difficulty", "Basic");
  record181.set("questionNumber", 2);
  record181.set("question", "[Basic] What is the best practice for Cloud Security Engineer when handling scenario 2?");
  record181.set("options", ["Follow Cloud Security Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record181.set("correctAnswer", "Follow Cloud Security Engineer best practices and standards");
  record181.set("explanation", "This Basic level question tests practical knowledge of Cloud Security Engineer fundamentals.");
  try { app.save(record181); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record182 = new Record(collection);
  record182.set("careerSlug", "cloud-security-engineer");
  record182.set("difficulty", "Basic");
  record182.set("questionNumber", 3);
  record182.set("question", "[Basic] What is the best practice for Cloud Security Engineer when handling scenario 3?");
  record182.set("options", ["Follow Cloud Security Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record182.set("correctAnswer", "Follow Cloud Security Engineer best practices and standards");
  record182.set("explanation", "This Basic level question tests practical knowledge of Cloud Security Engineer fundamentals.");
  try { app.save(record182); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record183 = new Record(collection);
  record183.set("careerSlug", "cloud-security-engineer");
  record183.set("difficulty", "Basic");
  record183.set("questionNumber", 4);
  record183.set("question", "[Basic] What is the best practice for Cloud Security Engineer when handling scenario 4?");
  record183.set("options", ["Follow Cloud Security Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record183.set("correctAnswer", "Follow Cloud Security Engineer best practices and standards");
  record183.set("explanation", "This Basic level question tests practical knowledge of Cloud Security Engineer fundamentals.");
  try { app.save(record183); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record184 = new Record(collection);
  record184.set("careerSlug", "cloud-security-engineer");
  record184.set("difficulty", "Basic");
  record184.set("questionNumber", 5);
  record184.set("question", "[Basic] What is the best practice for Cloud Security Engineer when handling scenario 5?");
  record184.set("options", ["Follow Cloud Security Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record184.set("correctAnswer", "Follow Cloud Security Engineer best practices and standards");
  record184.set("explanation", "This Basic level question tests practical knowledge of Cloud Security Engineer fundamentals.");
  try { app.save(record184); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record185 = new Record(collection);
  record185.set("careerSlug", "cloud-security-engineer");
  record185.set("difficulty", "Medium");
  record185.set("questionNumber", 1);
  record185.set("question", "[Medium] What is the best practice for Cloud Security Engineer when handling scenario 1?");
  record185.set("options", ["Follow Cloud Security Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record185.set("correctAnswer", "Follow Cloud Security Engineer best practices and standards");
  record185.set("explanation", "This Medium level question tests practical knowledge of Cloud Security Engineer fundamentals.");
  try { app.save(record185); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record186 = new Record(collection);
  record186.set("careerSlug", "cloud-security-engineer");
  record186.set("difficulty", "Medium");
  record186.set("questionNumber", 2);
  record186.set("question", "[Medium] What is the best practice for Cloud Security Engineer when handling scenario 2?");
  record186.set("options", ["Follow Cloud Security Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record186.set("correctAnswer", "Follow Cloud Security Engineer best practices and standards");
  record186.set("explanation", "This Medium level question tests practical knowledge of Cloud Security Engineer fundamentals.");
  try { app.save(record186); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record187 = new Record(collection);
  record187.set("careerSlug", "cloud-security-engineer");
  record187.set("difficulty", "Medium");
  record187.set("questionNumber", 3);
  record187.set("question", "[Medium] What is the best practice for Cloud Security Engineer when handling scenario 3?");
  record187.set("options", ["Follow Cloud Security Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record187.set("correctAnswer", "Follow Cloud Security Engineer best practices and standards");
  record187.set("explanation", "This Medium level question tests practical knowledge of Cloud Security Engineer fundamentals.");
  try { app.save(record187); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record188 = new Record(collection);
  record188.set("careerSlug", "cloud-security-engineer");
  record188.set("difficulty", "Medium");
  record188.set("questionNumber", 4);
  record188.set("question", "[Medium] What is the best practice for Cloud Security Engineer when handling scenario 4?");
  record188.set("options", ["Follow Cloud Security Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record188.set("correctAnswer", "Follow Cloud Security Engineer best practices and standards");
  record188.set("explanation", "This Medium level question tests practical knowledge of Cloud Security Engineer fundamentals.");
  try { app.save(record188); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record189 = new Record(collection);
  record189.set("careerSlug", "cloud-security-engineer");
  record189.set("difficulty", "Medium");
  record189.set("questionNumber", 5);
  record189.set("question", "[Medium] What is the best practice for Cloud Security Engineer when handling scenario 5?");
  record189.set("options", ["Follow Cloud Security Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record189.set("correctAnswer", "Follow Cloud Security Engineer best practices and standards");
  record189.set("explanation", "This Medium level question tests practical knowledge of Cloud Security Engineer fundamentals.");
  try { app.save(record189); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record190 = new Record(collection);
  record190.set("careerSlug", "cloud-security-engineer");
  record190.set("difficulty", "Hard");
  record190.set("questionNumber", 1);
  record190.set("question", "[Hard] What is the best practice for Cloud Security Engineer when handling scenario 1?");
  record190.set("options", ["Follow Cloud Security Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record190.set("correctAnswer", "Follow Cloud Security Engineer best practices and standards");
  record190.set("explanation", "This Hard level question tests practical knowledge of Cloud Security Engineer fundamentals.");
  try { app.save(record190); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record191 = new Record(collection);
  record191.set("careerSlug", "cloud-security-engineer");
  record191.set("difficulty", "Hard");
  record191.set("questionNumber", 2);
  record191.set("question", "[Hard] What is the best practice for Cloud Security Engineer when handling scenario 2?");
  record191.set("options", ["Follow Cloud Security Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record191.set("correctAnswer", "Follow Cloud Security Engineer best practices and standards");
  record191.set("explanation", "This Hard level question tests practical knowledge of Cloud Security Engineer fundamentals.");
  try { app.save(record191); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record192 = new Record(collection);
  record192.set("careerSlug", "cloud-security-engineer");
  record192.set("difficulty", "Hard");
  record192.set("questionNumber", 3);
  record192.set("question", "[Hard] What is the best practice for Cloud Security Engineer when handling scenario 3?");
  record192.set("options", ["Follow Cloud Security Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record192.set("correctAnswer", "Follow Cloud Security Engineer best practices and standards");
  record192.set("explanation", "This Hard level question tests practical knowledge of Cloud Security Engineer fundamentals.");
  try { app.save(record192); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record193 = new Record(collection);
  record193.set("careerSlug", "cloud-security-engineer");
  record193.set("difficulty", "Hard");
  record193.set("questionNumber", 4);
  record193.set("question", "[Hard] What is the best practice for Cloud Security Engineer when handling scenario 4?");
  record193.set("options", ["Follow Cloud Security Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record193.set("correctAnswer", "Follow Cloud Security Engineer best practices and standards");
  record193.set("explanation", "This Hard level question tests practical knowledge of Cloud Security Engineer fundamentals.");
  try { app.save(record193); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record194 = new Record(collection);
  record194.set("careerSlug", "cloud-security-engineer");
  record194.set("difficulty", "Hard");
  record194.set("questionNumber", 5);
  record194.set("question", "[Hard] What is the best practice for Cloud Security Engineer when handling scenario 5?");
  record194.set("options", ["Follow Cloud Security Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record194.set("correctAnswer", "Follow Cloud Security Engineer best practices and standards");
  record194.set("explanation", "This Hard level question tests practical knowledge of Cloud Security Engineer fundamentals.");
  try { app.save(record194); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record195 = new Record(collection);
  record195.set("careerSlug", "api-developer");
  record195.set("difficulty", "Basic");
  record195.set("questionNumber", 1);
  record195.set("question", "[Basic] What is the best practice for API Developer when handling scenario 1?");
  record195.set("options", ["Follow API Developer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record195.set("correctAnswer", "Follow API Developer best practices and standards");
  record195.set("explanation", "This Basic level question tests practical knowledge of API Developer fundamentals.");
  try { app.save(record195); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record196 = new Record(collection);
  record196.set("careerSlug", "api-developer");
  record196.set("difficulty", "Basic");
  record196.set("questionNumber", 2);
  record196.set("question", "[Basic] What is the best practice for API Developer when handling scenario 2?");
  record196.set("options", ["Follow API Developer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record196.set("correctAnswer", "Follow API Developer best practices and standards");
  record196.set("explanation", "This Basic level question tests practical knowledge of API Developer fundamentals.");
  try { app.save(record196); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record197 = new Record(collection);
  record197.set("careerSlug", "api-developer");
  record197.set("difficulty", "Basic");
  record197.set("questionNumber", 3);
  record197.set("question", "[Basic] What is the best practice for API Developer when handling scenario 3?");
  record197.set("options", ["Follow API Developer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record197.set("correctAnswer", "Follow API Developer best practices and standards");
  record197.set("explanation", "This Basic level question tests practical knowledge of API Developer fundamentals.");
  try { app.save(record197); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record198 = new Record(collection);
  record198.set("careerSlug", "api-developer");
  record198.set("difficulty", "Basic");
  record198.set("questionNumber", 4);
  record198.set("question", "[Basic] What is the best practice for API Developer when handling scenario 4?");
  record198.set("options", ["Follow API Developer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record198.set("correctAnswer", "Follow API Developer best practices and standards");
  record198.set("explanation", "This Basic level question tests practical knowledge of API Developer fundamentals.");
  try { app.save(record198); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record199 = new Record(collection);
  record199.set("careerSlug", "api-developer");
  record199.set("difficulty", "Basic");
  record199.set("questionNumber", 5);
  record199.set("question", "[Basic] What is the best practice for API Developer when handling scenario 5?");
  record199.set("options", ["Follow API Developer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record199.set("correctAnswer", "Follow API Developer best practices and standards");
  record199.set("explanation", "This Basic level question tests practical knowledge of API Developer fundamentals.");
  try { app.save(record199); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record200 = new Record(collection);
  record200.set("careerSlug", "api-developer");
  record200.set("difficulty", "Medium");
  record200.set("questionNumber", 1);
  record200.set("question", "[Medium] What is the best practice for API Developer when handling scenario 1?");
  record200.set("options", ["Follow API Developer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record200.set("correctAnswer", "Follow API Developer best practices and standards");
  record200.set("explanation", "This Medium level question tests practical knowledge of API Developer fundamentals.");
  try { app.save(record200); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record201 = new Record(collection);
  record201.set("careerSlug", "api-developer");
  record201.set("difficulty", "Medium");
  record201.set("questionNumber", 2);
  record201.set("question", "[Medium] What is the best practice for API Developer when handling scenario 2?");
  record201.set("options", ["Follow API Developer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record201.set("correctAnswer", "Follow API Developer best practices and standards");
  record201.set("explanation", "This Medium level question tests practical knowledge of API Developer fundamentals.");
  try { app.save(record201); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record202 = new Record(collection);
  record202.set("careerSlug", "api-developer");
  record202.set("difficulty", "Medium");
  record202.set("questionNumber", 3);
  record202.set("question", "[Medium] What is the best practice for API Developer when handling scenario 3?");
  record202.set("options", ["Follow API Developer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record202.set("correctAnswer", "Follow API Developer best practices and standards");
  record202.set("explanation", "This Medium level question tests practical knowledge of API Developer fundamentals.");
  try { app.save(record202); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record203 = new Record(collection);
  record203.set("careerSlug", "api-developer");
  record203.set("difficulty", "Medium");
  record203.set("questionNumber", 4);
  record203.set("question", "[Medium] What is the best practice for API Developer when handling scenario 4?");
  record203.set("options", ["Follow API Developer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record203.set("correctAnswer", "Follow API Developer best practices and standards");
  record203.set("explanation", "This Medium level question tests practical knowledge of API Developer fundamentals.");
  try { app.save(record203); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record204 = new Record(collection);
  record204.set("careerSlug", "api-developer");
  record204.set("difficulty", "Medium");
  record204.set("questionNumber", 5);
  record204.set("question", "[Medium] What is the best practice for API Developer when handling scenario 5?");
  record204.set("options", ["Follow API Developer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record204.set("correctAnswer", "Follow API Developer best practices and standards");
  record204.set("explanation", "This Medium level question tests practical knowledge of API Developer fundamentals.");
  try { app.save(record204); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record205 = new Record(collection);
  record205.set("careerSlug", "api-developer");
  record205.set("difficulty", "Hard");
  record205.set("questionNumber", 1);
  record205.set("question", "[Hard] What is the best practice for API Developer when handling scenario 1?");
  record205.set("options", ["Follow API Developer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record205.set("correctAnswer", "Follow API Developer best practices and standards");
  record205.set("explanation", "This Hard level question tests practical knowledge of API Developer fundamentals.");
  try { app.save(record205); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record206 = new Record(collection);
  record206.set("careerSlug", "api-developer");
  record206.set("difficulty", "Hard");
  record206.set("questionNumber", 2);
  record206.set("question", "[Hard] What is the best practice for API Developer when handling scenario 2?");
  record206.set("options", ["Follow API Developer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record206.set("correctAnswer", "Follow API Developer best practices and standards");
  record206.set("explanation", "This Hard level question tests practical knowledge of API Developer fundamentals.");
  try { app.save(record206); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record207 = new Record(collection);
  record207.set("careerSlug", "api-developer");
  record207.set("difficulty", "Hard");
  record207.set("questionNumber", 3);
  record207.set("question", "[Hard] What is the best practice for API Developer when handling scenario 3?");
  record207.set("options", ["Follow API Developer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record207.set("correctAnswer", "Follow API Developer best practices and standards");
  record207.set("explanation", "This Hard level question tests practical knowledge of API Developer fundamentals.");
  try { app.save(record207); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record208 = new Record(collection);
  record208.set("careerSlug", "api-developer");
  record208.set("difficulty", "Hard");
  record208.set("questionNumber", 4);
  record208.set("question", "[Hard] What is the best practice for API Developer when handling scenario 4?");
  record208.set("options", ["Follow API Developer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record208.set("correctAnswer", "Follow API Developer best practices and standards");
  record208.set("explanation", "This Hard level question tests practical knowledge of API Developer fundamentals.");
  try { app.save(record208); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record209 = new Record(collection);
  record209.set("careerSlug", "api-developer");
  record209.set("difficulty", "Hard");
  record209.set("questionNumber", 5);
  record209.set("question", "[Hard] What is the best practice for API Developer when handling scenario 5?");
  record209.set("options", ["Follow API Developer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record209.set("correctAnswer", "Follow API Developer best practices and standards");
  record209.set("explanation", "This Hard level question tests practical knowledge of API Developer fundamentals.");
  try { app.save(record209); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record210 = new Record(collection);
  record210.set("careerSlug", "technical-sales-engineer");
  record210.set("difficulty", "Basic");
  record210.set("questionNumber", 1);
  record210.set("question", "[Basic] What is the best practice for Technical Sales Engineer when handling scenario 1?");
  record210.set("options", ["Follow Technical Sales Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record210.set("correctAnswer", "Follow Technical Sales Engineer best practices and standards");
  record210.set("explanation", "This Basic level question tests practical knowledge of Technical Sales Engineer fundamentals.");
  try { app.save(record210); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record211 = new Record(collection);
  record211.set("careerSlug", "technical-sales-engineer");
  record211.set("difficulty", "Basic");
  record211.set("questionNumber", 2);
  record211.set("question", "[Basic] What is the best practice for Technical Sales Engineer when handling scenario 2?");
  record211.set("options", ["Follow Technical Sales Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record211.set("correctAnswer", "Follow Technical Sales Engineer best practices and standards");
  record211.set("explanation", "This Basic level question tests practical knowledge of Technical Sales Engineer fundamentals.");
  try { app.save(record211); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record212 = new Record(collection);
  record212.set("careerSlug", "technical-sales-engineer");
  record212.set("difficulty", "Basic");
  record212.set("questionNumber", 3);
  record212.set("question", "[Basic] What is the best practice for Technical Sales Engineer when handling scenario 3?");
  record212.set("options", ["Follow Technical Sales Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record212.set("correctAnswer", "Follow Technical Sales Engineer best practices and standards");
  record212.set("explanation", "This Basic level question tests practical knowledge of Technical Sales Engineer fundamentals.");
  try { app.save(record212); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record213 = new Record(collection);
  record213.set("careerSlug", "technical-sales-engineer");
  record213.set("difficulty", "Basic");
  record213.set("questionNumber", 4);
  record213.set("question", "[Basic] What is the best practice for Technical Sales Engineer when handling scenario 4?");
  record213.set("options", ["Follow Technical Sales Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record213.set("correctAnswer", "Follow Technical Sales Engineer best practices and standards");
  record213.set("explanation", "This Basic level question tests practical knowledge of Technical Sales Engineer fundamentals.");
  try { app.save(record213); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record214 = new Record(collection);
  record214.set("careerSlug", "technical-sales-engineer");
  record214.set("difficulty", "Basic");
  record214.set("questionNumber", 5);
  record214.set("question", "[Basic] What is the best practice for Technical Sales Engineer when handling scenario 5?");
  record214.set("options", ["Follow Technical Sales Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record214.set("correctAnswer", "Follow Technical Sales Engineer best practices and standards");
  record214.set("explanation", "This Basic level question tests practical knowledge of Technical Sales Engineer fundamentals.");
  try { app.save(record214); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record215 = new Record(collection);
  record215.set("careerSlug", "technical-sales-engineer");
  record215.set("difficulty", "Medium");
  record215.set("questionNumber", 1);
  record215.set("question", "[Medium] What is the best practice for Technical Sales Engineer when handling scenario 1?");
  record215.set("options", ["Follow Technical Sales Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record215.set("correctAnswer", "Follow Technical Sales Engineer best practices and standards");
  record215.set("explanation", "This Medium level question tests practical knowledge of Technical Sales Engineer fundamentals.");
  try { app.save(record215); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record216 = new Record(collection);
  record216.set("careerSlug", "technical-sales-engineer");
  record216.set("difficulty", "Medium");
  record216.set("questionNumber", 2);
  record216.set("question", "[Medium] What is the best practice for Technical Sales Engineer when handling scenario 2?");
  record216.set("options", ["Follow Technical Sales Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record216.set("correctAnswer", "Follow Technical Sales Engineer best practices and standards");
  record216.set("explanation", "This Medium level question tests practical knowledge of Technical Sales Engineer fundamentals.");
  try { app.save(record216); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record217 = new Record(collection);
  record217.set("careerSlug", "technical-sales-engineer");
  record217.set("difficulty", "Medium");
  record217.set("questionNumber", 3);
  record217.set("question", "[Medium] What is the best practice for Technical Sales Engineer when handling scenario 3?");
  record217.set("options", ["Follow Technical Sales Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record217.set("correctAnswer", "Follow Technical Sales Engineer best practices and standards");
  record217.set("explanation", "This Medium level question tests practical knowledge of Technical Sales Engineer fundamentals.");
  try { app.save(record217); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record218 = new Record(collection);
  record218.set("careerSlug", "technical-sales-engineer");
  record218.set("difficulty", "Medium");
  record218.set("questionNumber", 4);
  record218.set("question", "[Medium] What is the best practice for Technical Sales Engineer when handling scenario 4?");
  record218.set("options", ["Follow Technical Sales Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record218.set("correctAnswer", "Follow Technical Sales Engineer best practices and standards");
  record218.set("explanation", "This Medium level question tests practical knowledge of Technical Sales Engineer fundamentals.");
  try { app.save(record218); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record219 = new Record(collection);
  record219.set("careerSlug", "technical-sales-engineer");
  record219.set("difficulty", "Medium");
  record219.set("questionNumber", 5);
  record219.set("question", "[Medium] What is the best practice for Technical Sales Engineer when handling scenario 5?");
  record219.set("options", ["Follow Technical Sales Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record219.set("correctAnswer", "Follow Technical Sales Engineer best practices and standards");
  record219.set("explanation", "This Medium level question tests practical knowledge of Technical Sales Engineer fundamentals.");
  try { app.save(record219); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record220 = new Record(collection);
  record220.set("careerSlug", "technical-sales-engineer");
  record220.set("difficulty", "Hard");
  record220.set("questionNumber", 1);
  record220.set("question", "[Hard] What is the best practice for Technical Sales Engineer when handling scenario 1?");
  record220.set("options", ["Follow Technical Sales Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record220.set("correctAnswer", "Follow Technical Sales Engineer best practices and standards");
  record220.set("explanation", "This Hard level question tests practical knowledge of Technical Sales Engineer fundamentals.");
  try { app.save(record220); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record221 = new Record(collection);
  record221.set("careerSlug", "technical-sales-engineer");
  record221.set("difficulty", "Hard");
  record221.set("questionNumber", 2);
  record221.set("question", "[Hard] What is the best practice for Technical Sales Engineer when handling scenario 2?");
  record221.set("options", ["Follow Technical Sales Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record221.set("correctAnswer", "Follow Technical Sales Engineer best practices and standards");
  record221.set("explanation", "This Hard level question tests practical knowledge of Technical Sales Engineer fundamentals.");
  try { app.save(record221); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record222 = new Record(collection);
  record222.set("careerSlug", "technical-sales-engineer");
  record222.set("difficulty", "Hard");
  record222.set("questionNumber", 3);
  record222.set("question", "[Hard] What is the best practice for Technical Sales Engineer when handling scenario 3?");
  record222.set("options", ["Follow Technical Sales Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record222.set("correctAnswer", "Follow Technical Sales Engineer best practices and standards");
  record222.set("explanation", "This Hard level question tests practical knowledge of Technical Sales Engineer fundamentals.");
  try { app.save(record222); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record223 = new Record(collection);
  record223.set("careerSlug", "technical-sales-engineer");
  record223.set("difficulty", "Hard");
  record223.set("questionNumber", 4);
  record223.set("question", "[Hard] What is the best practice for Technical Sales Engineer when handling scenario 4?");
  record223.set("options", ["Follow Technical Sales Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record223.set("correctAnswer", "Follow Technical Sales Engineer best practices and standards");
  record223.set("explanation", "This Hard level question tests practical knowledge of Technical Sales Engineer fundamentals.");
  try { app.save(record223); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record224 = new Record(collection);
  record224.set("careerSlug", "technical-sales-engineer");
  record224.set("difficulty", "Hard");
  record224.set("questionNumber", 5);
  record224.set("question", "[Hard] What is the best practice for Technical Sales Engineer when handling scenario 5?");
  record224.set("options", ["Follow Technical Sales Engineer best practices and standards","Use a workaround instead of standard practices","Ignore the scenario until escalation","Apply a generic solution without customization"]);
  record224.set("correctAnswer", "Follow Technical Sales Engineer best practices and standards");
  record224.set("explanation", "This Hard level question tests practical knowledge of Technical Sales Engineer fundamentals.");
  try { app.save(record224); } catch(e) { if (!e.message.includes("unique")) throw e; }

  console.log("Seeded 225 careerQuizzes (new batch 1).");
}, (app) => {});