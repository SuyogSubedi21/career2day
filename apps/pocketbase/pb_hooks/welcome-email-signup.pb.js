/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  try {
    const message = new MailerMessage({
      from: {
        address: $app.settings().meta.senderAddress || "noreply@career2day.com",
        name: $app.settings().meta.senderName || "Career2Day"
      },
      to: [{ address: e.record.get("email") }],
      subject: "Welcome to Career2Day!",
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#f9f9f9"><div style="background:#fff;padding:30px;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1)"><h1 style="color:#2c3e50;font-size:28px;margin:0 0 8px">Welcome to Career2Day! 🎉</h1><p style="color:#7f8c8d;margin:0 0 24px">Your Path to Career Success</p><p style="color:#34495e;font-size:16px;line-height:1.6">Hi there,</p><p style="color:#34495e;font-size:16px;line-height:1.6">Thank you for signing up! We're excited to help you explore career paths, prepare for interviews, and build your resume.</p><p style="color:#34495e;font-size:16px;line-height:1.6">Get started by browsing careers, taking quizzes, and creating your first CV.</p><div style="text-align:center;margin:30px 0"><a href="https://career2day.com/careers" style="display:inline-block;background:#3498db;color:#fff;padding:12px 30px;text-decoration:none;border-radius:5px;font-weight:bold;font-size:16px">Explore Careers</a></div><p style="color:#7f8c8d;font-size:13px">The Career2Day Team</p></div></div>`
    });
    $app.newMailClient().send(message);
  } catch (err) {
    $app.logger().error("Welcome email error: " + err.message);
  }
  e.next();
}, "users");