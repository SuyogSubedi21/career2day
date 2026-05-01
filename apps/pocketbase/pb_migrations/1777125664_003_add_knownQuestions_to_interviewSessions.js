/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("interviewSessions");

  const existing = collection.fields.getByName("knownQuestions");
  if (existing) {
    if (existing.type === "number") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("knownQuestions"); // exists with wrong type, remove first
  }

  collection.fields.add(new NumberField({
    name: "knownQuestions",
    required: false
  }));

  return app.save(collection);
}, (app) => {
  try {
    const collection = app.findCollectionByNameOrId("interviewSessions");
    collection.fields.removeByName("knownQuestions");
    return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
