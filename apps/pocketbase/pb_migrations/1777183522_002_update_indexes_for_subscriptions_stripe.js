/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("subscriptions_stripe");
  collection.indexes.push("CREATE INDEX idx_subscriptions_stripe_user_email ON subscriptions_stripe (user_email)");
  return app.save(collection);
}, (app) => {
  try {
  const collection = app.findCollectionByNameOrId("subscriptions_stripe");
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_subscriptions_stripe_user_email"));
  return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
