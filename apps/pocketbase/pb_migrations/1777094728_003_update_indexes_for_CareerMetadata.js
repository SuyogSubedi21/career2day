/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("CareerMetadata");
  collection.indexes.push("CREATE UNIQUE INDEX idx_CareerMetadata_careerSlug ON CareerMetadata (careerSlug)");
  return app.save(collection);
}, (app) => {
  try {
  const collection = app.findCollectionByNameOrId("CareerMetadata");
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_CareerMetadata_careerSlug"));
  return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
