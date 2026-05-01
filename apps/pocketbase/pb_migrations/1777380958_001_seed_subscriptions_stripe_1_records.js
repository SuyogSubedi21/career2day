/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("subscriptions_stripe");

  const record0 = new Record(collection);
    record0.set("user_email", "suyogsubedivlogs@gmail.com");
    record0.set("plan_type", "premium_monthly");
    record0.set("status", "active");
    record0.set("renewal_date", "2026-06-27");
    record0.set("amount_paid", 9.99);
  try {
    app.save(record0);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})
