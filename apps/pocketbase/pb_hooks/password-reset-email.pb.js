/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const message = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: 'Career2Day'
    },
    to: [{ address: e.record.get("email") }],
    subject: "Reset Your Career2Day Password",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2c3e50; margin: 0; font-size: 28px;">Career2Day</h1>
            <p style="color: #7f8c8d; margin: 5px 0 0 0;">Your Path to Career Success</p>
          </div>
          
          <h2 style="color: #2c3e50; font-size: 20px; margin-bottom: 20px;">Reset Your Password</h2>
          
          <p style="color: #34495e; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            We received a request to reset your Career2Day password. Click the button below to create a new password. This link will expire in 24 hours.
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://career2day.com/reset-password?token=${e.record.get("token")}" style="display: inline-block; background-color: #e74c3c; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 16px;">
              Reset Password
            </a>
          </div>
          
          <p style="color: #7f8c8d; font-size: 14px; margin: 20px 0;">
            Or copy and paste this link in your browser:<br>
            <span style="word-break: break-all; color: #3498db;">https://career2day.com/reset-password?token=${e.record.get("token")}</span>
          </p>
          
          <div style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0; border-radius: 4px;">
            <p style="color: #856404; font-size: 14px; margin: 0;">
              <strong>Security Tip:</strong> Never share this link with anyone. Career2Day staff will never ask for your password.
            </p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ecf0f1; margin: 30px 0;">
          
          <p style="color: #7f8c8d; font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
            If you didn't request a password reset, please ignore this email. Your account remains secure.
          </p>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ecf0f1;">
            <p style="color: #7f8c8d; font-size: 12px; margin: 0;">
              <strong>Career2Day Team</strong><br>
              <a href="https://career2day.com" style="color: #3498db; text-decoration: none;">https://career2day.com</a>
            </p>
          </div>
        </div>
      </div>
    `
  });
  $app.newMailClient().send(message);
  e.next();
}, "users");