/// <reference path="../pb_data/types.d.ts" />

// Rewrites PocketBase default auth links in outgoing emails so they always
// point to frontend routes handled by the web app.
onMailerSend((e) => {
  try {
    const html = e.message.html || "";
    const text = e.message.text || "";

    const resetLinkPattern = /(?:https?:\/\/[^\s"'<>]+)?\/_\/#\/auth\/confirm-password-reset\/([^\s"'<>]+)/g;
    const verifyLinkPattern = /(?:https?:\/\/[^\s"'<>]+)?\/_\/#\/auth\/confirm-verification\/([^\s"'<>]+)/g;

    const rewriteReset = (_match, token) => `https://career2day.com/reset-password?token=${token}`;
    const rewriteVerify = (_match, token) => `https://career2day.com/verify-email?token=${token}`;

    if (html) {
      let newHtml = html.replace(resetLinkPattern, rewriteReset);
      newHtml = newHtml.replace(verifyLinkPattern, rewriteVerify);
      e.message.html = newHtml;
    }

    if (text) {
      let newText = text.replace(resetLinkPattern, rewriteReset);
      newText = newText.replace(verifyLinkPattern, rewriteVerify);
      e.message.text = newText;
    }
  } catch (err) {
    $app.logger().warn("[rewrite-auth-links] Failed to rewrite auth links: " + err.message);
  }

  return e.next();
});
