/// <reference path="../pb_data/types.d.ts" />
onRecordAuthRequest((e) => {
  const message = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: 'Career2Day'
    },
    to: [{ address: e.record.get("email") }],
    subject: "New Login to Your Career2Day Account",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2c3e50; margin: 0; font-size: 28px;">Career2Day</h1>
            <p style="color: #7f8c8d; margin: 5px 0 0 0;">Your Path to Career Success</p>
          </div>
          
          <h2 style="color: #2c3e50; font-size: 20px; margin-bottom: 20px;">New Login Detected</h2>
          
          <p style="color: #34495e; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            We detected a new login to your Career2Day account. If this was you, you can ignore this email. If you didn't authorize this login, please secure your account immediately.
          </p>
          
          <div style="background-color: #ecf0f1; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p style="color: #2c3e50; font-size: 14px; margin: 0 0 10px 0;"><strong>Login Details:</strong></p>
            <p style="color: #34495e; font-size: 14px; margin: 5px 0;">
              <strong>Time:</strong> ${new Date().toLocaleString()}<br>
              <strong>Account:</strong> ${e.record.get("email")}
            </p>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://career2day.com/account/security" style="display: inline-block; background-color: #3498db; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 16px;">
              Review Account Security
            </a>
          </div>
          
          <div style="background-color: #f8d7da; border-left: 4px solid #dc3545; padding: 15px; margin: 20px 0; border-radius: 4px;">
            <p style="color: #721c24; font-size: 14px; margin: 0;">
              <strong>Suspicious Activity?</strong> If you didn't authorize this login, <a href="https://career2day.com/account/security" style="color: #dc3545; text-decoration: none; font-weight: bold;">change your password immediately</a>.
            </p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ecf0f1; margin: 30px 0;">
          
          <p style="color: #7f8c8d; font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
            For your security, we recommend enabling two-factor authentication on your account. Visit your <a href="https://career2day.com/account/security" style="color: #3498db; text-decoration: none;">security settings</a> to set it up.
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
  try {
    $app.newMailClient().send(message);
  } catch (err) {
    $app.logger().error("Login notification email error: " + err.message);
  }
  e.next();
}, "users");