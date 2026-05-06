/// <reference path="../pb_data/types.d.ts" />

const disableAuthAlertForCollection = (app, collectionName) => {
  const collection = app.findCollectionByNameOrId(collectionName);
  const currentAuthAlert = collection.authAlert || {};

  if (currentAuthAlert.enabled === false) {
    return;
  }

  collection.authAlert = Object.assign({}, currentAuthAlert, { enabled: false });
  app.save(collection);
  app.logger().info("[auth-alert] Disabled " + collectionName + " login alert emails.");
};

const isLoginAlertMessage = (message) => {
  const subject = String(message?.subject || "").toLowerCase();
  const html = String(message?.html || "").toLowerCase();
  const text = String(message?.text || "").toLowerCase();
  const content = subject + "\n" + html + "\n" + text;

  return (
    content.includes("login detected") ||
    content.includes("new login") ||
    content.includes("new device") ||
    content.includes("auth alert")
  );
};

onBootstrap((e) => {
  e.next();

  try {
    disableAuthAlertForCollection(e.app, "users");
  } catch (err) {
    e.app.logger().warn("[auth-alert] Could not disable users auth alerts: " + err.message);
  }

  try {
    disableAuthAlertForCollection(e.app, "_superusers");
  } catch (err) {
    e.app.logger().warn("[auth-alert] Could not disable superuser auth alerts: " + err.message);
  }
});

onMailerRecordAuthAlertSend((e) => {
  const email = e.record?.get("email") || "unknown";
  e.app.logger().info("[auth-alert] Blocked record login alert email for " + email);
}, "users", "_superusers");

onMailerSend((e) => {
  if (isLoginAlertMessage(e.message)) {
    e.app.logger().info("[auth-alert] Blocked generic login alert email: " + (e.message?.subject || "no subject"));
    return;
  }

  e.next();
});
