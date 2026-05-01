/// <reference path="../../pb_data/types.d.ts" />
migrate((app) => {
    const smtpHost     = $os.getenv("SMTP_HOST")     || "smtp.hostinger.com";
    const smtpPort     = parseInt($os.getenv("SMTP_PORT") || "587");
    const smtpUser     = $os.getenv("SMTP_USER")     || "";
    const smtpPassword = $os.getenv("SMTP_PASSWORD") || "";
    const smtpSender   = $os.getenv("SMTP_SENDER")   || smtpUser;

    if (!smtpUser || !smtpPassword) {
        console.log("[SMTP migration] SMTP_USER or SMTP_PASSWORD not set — skipping SMTP config.");
        return;
    }

    let settings = app.settings();

    settings.smtp.enabled  = true;
    settings.smtp.host     = smtpHost;
    settings.smtp.port     = smtpPort;
    settings.smtp.username = smtpUser;
    settings.smtp.password = smtpPassword;
    settings.smtp.tls      = (smtpPort === 465);

    settings.meta.senderAddress = smtpSender;
    settings.meta.senderName    = "Career2Day";

    app.save(settings);
    console.log("[SMTP migration] Hostinger SMTP configured successfully.");
});
