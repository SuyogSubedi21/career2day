/// <reference path="../pb_data/types.d.ts" />

// Login notification emails are intentionally disabled.
// Registration/welcome emails are handled by welcome-email-signup.pb.js.
onRecordAuthRequest((e) => {
  e.next();
}, "users");
