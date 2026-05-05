/// <reference path="../pb_data/types.d.ts" />

const escapeHtml = (value) => String(value || "")
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&#39;");

onRecordAfterCreateSuccess((e) => {
  e.next();

  try {
    const userEmail = e.record.get("email");
    const userName = e.record.get("name") || "there";
    const safeUserName = escapeHtml(userName);
    const settings = e.app.settings();

    if (!userEmail) {
      e.app.logger().warn("[welcome-email] New user has no email; skipped welcome email.");
      return;
    }

    if (!settings.smtp.enabled) {
      e.app.logger().warn("[welcome-email] SMTP is not enabled; welcome email was not sent to " + userEmail);
      return;
    }

    const message = new MailerMessage({
      from: {
        address: settings.meta.senderAddress || "noreply@career2day.com",
        name: settings.meta.senderName || "Career2Day"
      },
      to: [{ address: userEmail }],
      subject: "Welcome to Career2Day",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;padding:24px;background:#f8fafc;color:#0f172a">
          <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:10px;padding:28px">
            <h1 style="font-size:26px;line-height:1.25;margin:0 0 12px;color:#0f172a">Welcome to Career2Day</h1>
            <p style="font-size:16px;line-height:1.7;margin:0 0 16px">Hi ${safeUserName},</p>
            <p style="font-size:16px;line-height:1.7;margin:0 0 16px">Thanks for creating your account. You can now explore career roadmaps, build your CV, read practical guides, and prepare for interviews from one place.</p>
            <p style="font-size:16px;line-height:1.7;margin:0 0 24px">A good first step is to choose one career path and save the roadmap you want to follow.</p>
            <p style="margin:28px 0">
              <a href="https://career2day.com/careers" style="background:#2563eb;color:#ffffff;text-decoration:none;border-radius:8px;padding:12px 18px;font-weight:700;display:inline-block">Explore career roadmaps</a>
            </p>
            <p style="font-size:14px;line-height:1.6;margin:24px 0 0;color:#64748b">Career2Day Team</p>
          </div>
        </div>
      `,
      text: `Welcome to Career2Day, ${userName}.\n\nThanks for creating your account. Start here: https://career2day.com/careers\n\nCareer2Day Team`
    });

    e.app.newMailClient().send(message);
    e.app.logger().info("[welcome-email] Sent welcome email to " + userEmail);
  } catch (err) {
    e.app.logger().error("[welcome-email] Failed to send welcome email: " + err.message);
  }
}, "users");
