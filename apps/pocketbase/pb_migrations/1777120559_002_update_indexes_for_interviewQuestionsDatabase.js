/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("interviewQuestionsDatabase");
  collection.indexes.push("CREATE INDEX idx_interviewQuestionsDatabase_careerSlug_level ON interviewQuestionsDatabase (careerSlug, level)");
  return app.save(collection);
}, (app) => {
  try {
  const collection = app.findCollectionByNameOrId("interviewQuestionsDatabase");
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_interviewQuestionsDatabase_careerSlug_level"));
  return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
