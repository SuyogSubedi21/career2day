/// <reference path="../pb_data/types.d.ts" />
// Fires when a user requests a password reset (correct PocketBase event)
onRecordRequestPasswordReset((e) => {
  // Let PocketBase send its built-in password reset email via SMTP
  e.next();
  return;
}, "users");

// PocketBase sends its built-in password reset email automatically when onRecordRequestPasswordReset
// fires and e.next() is called. SMTP must be configured via configure-smtp.pb.js + env vars.