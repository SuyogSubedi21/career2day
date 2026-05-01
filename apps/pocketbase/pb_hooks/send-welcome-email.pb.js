/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  try {
    const userEmail = e.record.get("email");
    const userName = e.record.get("name") || "User";
    
    if (!userEmail) {
      console.log("Welcome email hook: No email found for user, skipping email send");
      e.next();
      return;
    }
    
    const message = new MailerMessage({
      from: {
        address: $app.settings().meta.senderAddress,
        name: $app.settings().meta.senderName
      },
      to: [{ address: userEmail }],
      subject: "Welcome to CareerPath!",
      html: `
        <h1>Welcome to CareerPath, ${userName}!</h1>
        <p>Thank you for registering with us. We're excited to have you on board!</p>
        <p>Your account has been successfully created. You can now:</p>
        <ul>
          <li>Explore career paths and opportunities</li>
          <li>Take career readiness quizzes</li>
          <li>Build and customize your resume</li>
          <li>Prepare for interviews with our resources</li>
        </ul>
        <p>If you have any questions, feel free to reach out to our support team.</p>
        <p>Happy exploring!</p>
        <p><strong>CareerPath Team</strong></p>
      `
    });
    
    $app.newMailClient().send(message);
    console.log("Welcome email sent successfully to: " + userEmail);
  } catch (error) {
    // Graceful error handling - log the error but don't fail the registration
    console.log("Welcome email hook error: " + error.message);
    console.log("User registration completed, but welcome email could not be sent");
  }
  
  // Always continue execution regardless of email success/failure
  e.next();
}, "users");