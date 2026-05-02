/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerRoadmaps");

  const record0 = new Record(collection);
  record0.set("careerSlug", "backend-architect");
  record0.set("phase", 1);
  record0.set("phaseTitle", "Fundamentals & Prerequisites");
  record0.set("duration", "3 months");
  record0.set("skills", ["Core Concepts","Problem Solving","Technical Communication"]);
  record0.set("resources", ["Online courses","Official documentation","Beginner tutorials"]);
  record0.set("projects", ["Setup development environment","Hello World project","Basic tooling practice"]);
  try { app.save(record0); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record1 = new Record(collection);
  record1.set("careerSlug", "backend-architect");
  record1.set("phase", 2);
  record1.set("phaseTitle", "Core Technologies & Tools");
  record1.set("duration", "3 months");
  record1.set("skills", ["Primary Tech Stack","Tool Proficiency","Version Control"]);
  record1.set("resources", ["Advanced courses","Official docs","Community projects"]);
  record1.set("projects", ["Build a core feature","Integrate primary tools","Complete guided project"]);
  try { app.save(record1); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record2 = new Record(collection);
  record2.set("careerSlug", "backend-architect");
  record2.set("phase", 3);
  record2.set("phaseTitle", "Advanced Patterns & Architecture");
  record2.set("duration", "4 months");
  record2.set("skills", ["System Design","Performance Optimization","Security Best Practices"]);
  record2.set("resources", ["Architecture case studies","Advanced workshops","Industry whitepapers"]);
  record2.set("projects", ["Design a system","Optimize an application","Implement security controls"]);
  try { app.save(record2); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record3 = new Record(collection);
  record3.set("careerSlug", "backend-architect");
  record3.set("phase", 4);
  record3.set("phaseTitle", "Real-World Projects & Collaboration");
  record3.set("duration", "3 months");
  record3.set("skills", ["Agile Workflows","Code Review","Cross-team Collaboration"]);
  record3.set("resources", ["Open source contributions","Mentorship programs","Pair programming"]);
  record3.set("projects", ["Contribute to open source","Build a portfolio project","Lead a small team initiative"]);
  try { app.save(record3); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record4 = new Record(collection);
  record4.set("careerSlug", "backend-architect");
  record4.set("phase", 5);
  record4.set("phaseTitle", "Specialization & Career Growth");
  record4.set("duration", "Ongoing");
  record4.set("skills", ["Deep Domain Expertise","Leadership","Strategic Thinking"]);
  record4.set("resources", ["Conferences","Research papers","Expert networks"]);
  record4.set("projects", ["Drive innovation projects","Mentor junior engineers","Publish technical content"]);
  try { app.save(record4); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record5 = new Record(collection);
  record5.set("careerSlug", "enterprise-architect");
  record5.set("phase", 1);
  record5.set("phaseTitle", "Fundamentals & Prerequisites");
  record5.set("duration", "3 months");
  record5.set("skills", ["Core Concepts","Problem Solving","Technical Communication"]);
  record5.set("resources", ["Online courses","Official documentation","Beginner tutorials"]);
  record5.set("projects", ["Setup development environment","Hello World project","Basic tooling practice"]);
  try { app.save(record5); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record6 = new Record(collection);
  record6.set("careerSlug", "enterprise-architect");
  record6.set("phase", 2);
  record6.set("phaseTitle", "Core Technologies & Tools");
  record6.set("duration", "3 months");
  record6.set("skills", ["Primary Tech Stack","Tool Proficiency","Version Control"]);
  record6.set("resources", ["Advanced courses","Official docs","Community projects"]);
  record6.set("projects", ["Build a core feature","Integrate primary tools","Complete guided project"]);
  try { app.save(record6); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record7 = new Record(collection);
  record7.set("careerSlug", "enterprise-architect");
  record7.set("phase", 3);
  record7.set("phaseTitle", "Advanced Patterns & Architecture");
  record7.set("duration", "4 months");
  record7.set("skills", ["System Design","Performance Optimization","Security Best Practices"]);
  record7.set("resources", ["Architecture case studies","Advanced workshops","Industry whitepapers"]);
  record7.set("projects", ["Design a system","Optimize an application","Implement security controls"]);
  try { app.save(record7); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record8 = new Record(collection);
  record8.set("careerSlug", "enterprise-architect");
  record8.set("phase", 4);
  record8.set("phaseTitle", "Real-World Projects & Collaboration");
  record8.set("duration", "3 months");
  record8.set("skills", ["Agile Workflows","Code Review","Cross-team Collaboration"]);
  record8.set("resources", ["Open source contributions","Mentorship programs","Pair programming"]);
  record8.set("projects", ["Contribute to open source","Build a portfolio project","Lead a small team initiative"]);
  try { app.save(record8); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record9 = new Record(collection);
  record9.set("careerSlug", "enterprise-architect");
  record9.set("phase", 5);
  record9.set("phaseTitle", "Specialization & Career Growth");
  record9.set("duration", "Ongoing");
  record9.set("skills", ["Deep Domain Expertise","Leadership","Strategic Thinking"]);
  record9.set("resources", ["Conferences","Research papers","Expert networks"]);
  record9.set("projects", ["Drive innovation projects","Mentor junior engineers","Publish technical content"]);
  try { app.save(record9); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record10 = new Record(collection);
  record10.set("careerSlug", "solutions-engineer");
  record10.set("phase", 1);
  record10.set("phaseTitle", "Fundamentals & Prerequisites");
  record10.set("duration", "3 months");
  record10.set("skills", ["Core Concepts","Problem Solving","Technical Communication"]);
  record10.set("resources", ["Online courses","Official documentation","Beginner tutorials"]);
  record10.set("projects", ["Setup development environment","Hello World project","Basic tooling practice"]);
  try { app.save(record10); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record11 = new Record(collection);
  record11.set("careerSlug", "solutions-engineer");
  record11.set("phase", 2);
  record11.set("phaseTitle", "Core Technologies & Tools");
  record11.set("duration", "3 months");
  record11.set("skills", ["Primary Tech Stack","Tool Proficiency","Version Control"]);
  record11.set("resources", ["Advanced courses","Official docs","Community projects"]);
  record11.set("projects", ["Build a core feature","Integrate primary tools","Complete guided project"]);
  try { app.save(record11); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record12 = new Record(collection);
  record12.set("careerSlug", "solutions-engineer");
  record12.set("phase", 3);
  record12.set("phaseTitle", "Advanced Patterns & Architecture");
  record12.set("duration", "4 months");
  record12.set("skills", ["System Design","Performance Optimization","Security Best Practices"]);
  record12.set("resources", ["Architecture case studies","Advanced workshops","Industry whitepapers"]);
  record12.set("projects", ["Design a system","Optimize an application","Implement security controls"]);
  try { app.save(record12); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record13 = new Record(collection);
  record13.set("careerSlug", "solutions-engineer");
  record13.set("phase", 4);
  record13.set("phaseTitle", "Real-World Projects & Collaboration");
  record13.set("duration", "3 months");
  record13.set("skills", ["Agile Workflows","Code Review","Cross-team Collaboration"]);
  record13.set("resources", ["Open source contributions","Mentorship programs","Pair programming"]);
  record13.set("projects", ["Contribute to open source","Build a portfolio project","Lead a small team initiative"]);
  try { app.save(record13); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record14 = new Record(collection);
  record14.set("careerSlug", "solutions-engineer");
  record14.set("phase", 5);
  record14.set("phaseTitle", "Specialization & Career Growth");
  record14.set("duration", "Ongoing");
  record14.set("skills", ["Deep Domain Expertise","Leadership","Strategic Thinking"]);
  record14.set("resources", ["Conferences","Research papers","Expert networks"]);
  record14.set("projects", ["Drive innovation projects","Mentor junior engineers","Publish technical content"]);
  try { app.save(record14); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record15 = new Record(collection);
  record15.set("careerSlug", "integration-engineer");
  record15.set("phase", 1);
  record15.set("phaseTitle", "Fundamentals & Prerequisites");
  record15.set("duration", "3 months");
  record15.set("skills", ["Core Concepts","Problem Solving","Technical Communication"]);
  record15.set("resources", ["Online courses","Official documentation","Beginner tutorials"]);
  record15.set("projects", ["Setup development environment","Hello World project","Basic tooling practice"]);
  try { app.save(record15); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record16 = new Record(collection);
  record16.set("careerSlug", "integration-engineer");
  record16.set("phase", 2);
  record16.set("phaseTitle", "Core Technologies & Tools");
  record16.set("duration", "3 months");
  record16.set("skills", ["Primary Tech Stack","Tool Proficiency","Version Control"]);
  record16.set("resources", ["Advanced courses","Official docs","Community projects"]);
  record16.set("projects", ["Build a core feature","Integrate primary tools","Complete guided project"]);
  try { app.save(record16); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record17 = new Record(collection);
  record17.set("careerSlug", "integration-engineer");
  record17.set("phase", 3);
  record17.set("phaseTitle", "Advanced Patterns & Architecture");
  record17.set("duration", "4 months");
  record17.set("skills", ["System Design","Performance Optimization","Security Best Practices"]);
  record17.set("resources", ["Architecture case studies","Advanced workshops","Industry whitepapers"]);
  record17.set("projects", ["Design a system","Optimize an application","Implement security controls"]);
  try { app.save(record17); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record18 = new Record(collection);
  record18.set("careerSlug", "integration-engineer");
  record18.set("phase", 4);
  record18.set("phaseTitle", "Real-World Projects & Collaboration");
  record18.set("duration", "3 months");
  record18.set("skills", ["Agile Workflows","Code Review","Cross-team Collaboration"]);
  record18.set("resources", ["Open source contributions","Mentorship programs","Pair programming"]);
  record18.set("projects", ["Contribute to open source","Build a portfolio project","Lead a small team initiative"]);
  try { app.save(record18); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record19 = new Record(collection);
  record19.set("careerSlug", "integration-engineer");
  record19.set("phase", 5);
  record19.set("phaseTitle", "Specialization & Career Growth");
  record19.set("duration", "Ongoing");
  record19.set("skills", ["Deep Domain Expertise","Leadership","Strategic Thinking"]);
  record19.set("resources", ["Conferences","Research papers","Expert networks"]);
  record19.set("projects", ["Drive innovation projects","Mentor junior engineers","Publish technical content"]);
  try { app.save(record19); } catch(e) { if (!e.message.includes("unique")) throw e; }

  console.log("Seeded 20 careerRoadmaps (new batch 2).");
}, (app) => {});