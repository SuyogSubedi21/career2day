/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quizResults");

  const existing = collection.fields.getByName("readinessLevel");
  if (existing) {
    if (existing.type === "select") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("readinessLevel"); // exists with wrong type, remove first
  }

  collection.fields.add(new SelectField({
    name: "readinessLevel",
    required: false,
    values: ["Not Ready", "Almost Ready", "Ready", "Highly Prepared"]
  }));

  return app.save(collection);
}, (app) => {
  try {
    const collection = app.findCollectionByNameOrId("quizResults");
    collection.fields.removeByName("readinessLevel");
    return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
