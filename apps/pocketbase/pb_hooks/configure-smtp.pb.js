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
        settings.meta.appURL = "https://career2day.com";

        // Override password reset email template to point to our frontend
        settings.meta.resetPasswordTemplate.subject = "Reset your Career2Day password";
        settings.meta.resetPasswordTemplate.body = `<p>Hello,</p>
<p>Click the link below to reset your Career2Day password:</p>
<p><a href="https://career2day.com/reset-password?token={TOKEN}" style="background:#6366f1;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;display:inline-block;font-weight:600;">Reset Password</a></p>
<p>Or copy this link: https://career2day.com/reset-password?token={TOKEN}</p>
<p>This link expires in 30 minutes. If you didn't request this, ignore this email.</p>
<p>— Career2Day Team</p>`;

        // Override verification email template
        settings.meta.verificationTemplate.subject = "Verify your Career2Day email";
        settings.meta.verificationTemplate.body = `<p>Hello,</p>
<p>Click the link below to verify your email address:</p>
<p><a href="https://career2day.com/verify-email?token={TOKEN}" style="background:#6366f1;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;display:inline-block;font-weight:600;">Verify Email</a></p>
<p>Or copy this link: https://career2day.com/verify-email?token={TOKEN}</p>
<p>If you didn't create an account, ignore this email.</p>
<p>— Career2Day Team</p>`;

        $app.save(settings);
        $app.logger().info("[configure-smtp] SMTP configured from environment variables.");
    } catch (err) {
        $app.logger().error("[configure-smtp] Failed to apply SMTP settings: " + err.message);
    }
});
