/// <reference path="../pb_data/types.d.ts" />

// Runs on every PocketBase startup and applies SMTP settings from env vars.
// This ensures email works even after restarts without re-running migrations.
onBootstrap((e) => {
    e.next();

    const smtpHost = $os.getenv("SMTP_HOST");
    const smtpUser = $os.getenv("SMTP_USER");
    const smtpPassword = $os.getenv("SMTP_PASSWORD");

    if (!smtpHost || !smtpUser || !smtpPassword) {
        $app.logger().warn("[configure-smtp] SMTP_HOST / SMTP_USER / SMTP_PASSWORD not set — emails will not be sent.");
        return;
    }

    try {
        const settings = $app.settings();
        settings.smtp.enabled = true;
        settings.smtp.host = smtpHost;
        settings.smtp.port = parseInt($os.getenv("SMTP_PORT") || "587", 10);
        settings.smtp.username = smtpUser;
        settings.smtp.password = smtpPassword;
        settings.smtp.tls = ($os.getenv("SMTP_TLS") || "false") === "true";
        settings.meta.senderAddress = $os.getenv("SMTP_SENDER") || smtpUser;
        settings.meta.senderName = $os.getenv("SMTP_SENDER_NAME") || "Career2Day";
        $app.save(settings);
        $app.logger().info("[configure-smtp] SMTP configured from environment variables.");
    } catch (err) {
        $app.logger().error("[configure-smtp] Failed to apply SMTP settings: " + err.message);
    }
});
