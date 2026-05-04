/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const smtpHost = $os.getenv("SMTP_HOST") || "";
  const smtpPort = parseInt($os.getenv("SMTP_PORT") || "587", 10);
  const smtpUser = $os.getenv("SMTP_USER") || "";
  const smtpPassword = $os.getenv("SMTP_PASSWORD") || "";
  const smtpSender = $os.getenv("SMTP_SENDER") || smtpUser;

  if (!smtpHost || !smtpUser || !smtpPassword) {
    console.log("[SMTP migration] Missing SMTP_HOST/SMTP_USER/SMTP_PASSWORD, skipping SMTP setup.");
    return;
  }

  const settings = app.settings();

  settings.smtp.enabled = true;
  settings.smtp.host = smtpHost;
  settings.smtp.port = smtpPort;
  settings.smtp.username = smtpUser;
  settings.smtp.password = smtpPassword;
  settings.smtp.tls = smtpPort === 465;

  if (smtpSender) {
    settings.meta.senderAddress = smtpSender;
  }
  if (!settings.meta.senderName) {
    settings.meta.senderName = "Career2Day";
  }

  app.save(settings);
  console.log("[SMTP migration] SMTP configured from environment variables.");
}, (app) => {
  // No automatic rollback to avoid wiping valid production mail settings.
  return;
});
