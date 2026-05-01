/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("subscriptions");

  const existing = collection.fields.getByName("renewalDate");
  if (existing) {
    if (existing.type === "date") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("renewalDate"); // exists with wrong type, remove first
  }

  collection.fields.add(new DateField({
    name: "renewalDate",
    required: false
  }));

  return app.save(collection);
}, (app) => {
  try {
    const collection = app.findCollectionByNameOrId("subscriptions");
    collection.fields.removeByName("renewalDate");
    return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
