/// <reference path="../pb_data/types.d.ts" />

onBootstrap((e) => {
  e.next();

  try {
    const users = e.app.findCollectionByNameOrId("users");
    users.authAlert = { enabled: false };
    e.app.save(users);
    e.app.logger().info("[auth-alert] Disabled users collection login alert emails.");
  } catch (err) {
    e.app.logger().warn("[auth-alert] Could not disable users auth alerts: " + err.message);
  }

  try {
    const superusers = e.app.findCollectionByNameOrId("_superusers");
    superusers.authAlert = { enabled: false };
    e.app.save(superusers);
    e.app.logger().info("[auth-alert] Disabled superuser login alert emails.");
  } catch (err) {
    e.app.logger().warn("[auth-alert] Could not disable superuser auth alerts: " + err.message);
  }
});

onMailerRecordAuthAlertSend((e) => {
  e.app.logger().info("[auth-alert] Blocked a login alert email for " + (e.record.get("email") || "unknown"));
}, "users", "_superusers");
