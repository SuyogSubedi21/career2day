/// <reference path="../pb_data/types.d.ts" />
// Fires when a user requests email verification (correct PocketBase event)
onRecordRequestVerification((e) => {
  // Let PocketBase send its built-in verification email via SMTP
  e.next();
  return;
}, "users");

// PocketBase sends its built-in verification email automatically when onRecordRequestVerification
// fires and e.next() is called. SMTP must be configured via configure-smtp.pb.js + env vars.