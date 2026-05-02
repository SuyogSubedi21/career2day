/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  // Delete all previously seeded careerInterviewQuestions records
  // This clears placeholder data ("Question 1", "Explanation for question 1") from earlier migrations
  const col = app.findCollectionByNameOrId("careerInterviewQuestions");
  const records = app.findAllRecords("careerInterviewQuestions");
  for (const r of records) {
    try { app.delete(r); } catch(e) { console.log("Could not delete:", e.message); }
  }
  console.log("Cleared all careerInterviewQuestions records.");
}, (app) => {
  // down: cannot recover deleted records
});
