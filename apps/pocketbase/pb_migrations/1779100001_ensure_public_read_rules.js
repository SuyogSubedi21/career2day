/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collections = ["careerInterviewQuestions", "careerQuizzes", "careerRoadmaps", "careerSkills", "careers"];
  for (const name of collections) {
    try {
      const col = app.findCollectionByNameOrId(name);
      col.listRule = "";
      col.viewRule = "";
      app.save(col);
      console.log(`Set public read rules for: ${name}`);
    } catch (e) {
      console.log(`Could not update rules for ${name}: ${e.message}`);
    }
  }
}, (app) => {});
