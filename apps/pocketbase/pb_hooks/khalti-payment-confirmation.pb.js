/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  // Only send confirmation email for active subscriptions
  if (e.record.get("status") !== "active") {
    e.next();
    return;
  }

  const userId = e.record.get("userId");
  const userEmail = e.record.get("user_email");
  const planType = e.record.get("plan_type");
  const amount = e.record.get("amount");
  const paymentMethod = e.record.get("payment_method");
  const khaltiTransactionId = e.record.get("khalti_transaction_id");
  const subscriptionDate = e.record.get("subscription_date");
  const renewalDate = e.record.get("renewal_date");
  const recordId = e.record.id;

  // Generate invoice number based on record ID and timestamp
  const invoiceNumber = "INV-" + recordId.substring(0, 8).toUpperCase() + "-" + new Date().getTime().toString().slice(-6);

  // Determine subscription period text
  let subscriptionPeriod = "";
  if (planType === "monthly") {
    subscriptionPeriod = "1 Month";
  } else if (planType === "yearly") {
    subscriptionPeriod = "1 Year";
  } else if (planType === "one-time") {
    subscriptionPeriod = "One-Time Access";
  }

  // Format dates for display
  const subDate = new Date(subscriptionDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  let renewalDateText = "N/A";
  if (renewalDate) {
    renewalDateText = new Date(renewalDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }

  // Build email HTML
  const emailHTML = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h1 style="color: #333; margin-top: 0; text-align: center;">Payment Confirmation</h1>
        
        <p style="color: #666; font-size: 16px;">Dear User,</p>
        
        <p style="color: #666; font-size: 16px;">Thank you for your subscription! Your payment has been successfully processed.</p>
        
        <div style="background-color: #f0f8ff; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0; border-radius: 4px;">
          <h2 style="color: #007bff; margin-top: 0;">Subscription Details</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px 0; color: #666; font-weight: bold;">Invoice Number:</td>
              <td style="padding: 10px 0; color: #333; text-align: right;">${invoiceNumber}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px 0; color: #666; font-weight: bold;">Plan Type:</td>
              <td style="padding: 10px 0; color: #333; text-align: right;">${planType.charAt(0).toUpperCase() + planType.slice(1)}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px 0; color: #666; font-weight: bold;">Subscription Period:</td>
              <td style="padding: 10px 0; color: #333; text-align: right;">${subscriptionPeriod}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px 0; color: #666; font-weight: bold;">Amount Paid:</td>
              <td style="padding: 10px 0; color: #333; text-align: right;">Rs. ${amount}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px 0; color: #666; font-weight: bold;">Payment Method:</td>
              <td style="padding: 10px 0; color: #333; text-align: right;">${paymentMethod.charAt(0).toUpperCase() + paymentMethod.slice(1).replace(/_/g, " ")}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px 0; color: #666; font-weight: bold;">Transaction ID:</td>
              <td style="padding: 10px 0; color: #333; text-align: right; font-family: monospace;">${khaltiTransactionId || "N/A"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px 0; color: #666; font-weight: bold;">Subscription Date:</td>
              <td style="padding: 10px 0; color: #333; text-align: right;">${subDate}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; font-weight: bold;">Renewal Date:</td>
              <td style="padding: 10px 0; color: #333; text-align: right;">${renewalDateText}</td>
            </tr>
          </table>
        </div>
        
        <div style="background-color: #f0fff4; padding: 20px; border-left: 4px solid #28a745; margin: 20px 0; border-radius: 4px;">
          <h3 style="color: #28a745; margin-top: 0;">What's Next?</h3>
          <ul style="color: #666; line-height: 1.8;">
            <li>Your subscription is now active and ready to use</li>
            <li>You can access all premium features immediately</li>
            <li>Your subscription will automatically renew on ${renewalDateText}</li>
            <li>You can manage your subscription in your account settings</li>
          </ul>
        </div>
        
        <div style="background-color: #fff3cd; padding: 20px; border-left: 4px solid #ffc107; margin: 20px 0; border-radius: 4px;">
          <h3 style="color: #856404; margin-top: 0;">Important Information</h3>
          <p style="color: #856404; margin: 0;">Please keep this confirmation email for your records. If you have any questions about your subscription, please contact our support team.</p>
        </div>
        
        <p style="color: #666; font-size: 14px; margin-top: 30px; text-align: center; border-top: 1px solid #ddd; padding-top: 20px;">
          This is an automated email. Please do not reply to this message.
        </p>
        
        <p style="color: #999; font-size: 12px; text-align: center; margin-top: 10px;">
          © 2024 Career Readiness Platform. All rights reserved.
        </p>
      </div>
    </div>
  `;

  try {
    const message = new MailerMessage({
      from: {
        address: $app.settings().meta.senderAddress,
        name: $app.settings().meta.senderName
      },
      to: [{ address: userEmail }],
      subject: "Payment Confirmation - Subscription Activated",
      html: emailHTML
    });
    
    $app.newMailClient().send(message);
  } catch (error) {
    console.log("Error sending confirmation email:", error);
  }

  e.next();
}, "khalti_subscriptions");