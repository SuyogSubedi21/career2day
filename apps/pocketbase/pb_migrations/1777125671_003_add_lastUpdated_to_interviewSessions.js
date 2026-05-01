/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("interviewSessions");

  const existing = collection.fields.getByName("lastUpdated");
  if (existing) {
    if (existing.type === "autodate") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("lastUpdated"); // exists with wrong type, remove first
  }

  collection.fields.add(new AutodateField({
    name: "lastUpdated",
    onCreate: true,
    onUpdate: true
  }));

  return app.save(collection);
}, (app) => {
  try {
    const collection = app.findCollectionByNameOrId("interviewSessions");
    collection.fields.removeByName("lastUpdated");
    return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
