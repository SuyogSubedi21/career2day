
/// <reference path="../pb_data/types.d.ts" />
onMailerSend((e) => {
    if (e.app.settings().smtp.enabled) {
        return e.next()
    }

    const apiUrl = $os.getenv("BUILDER_MAILER_API_URL");
    const apiKey = $os.getenv("BUILDER_MAILER_API_KEY");
    const senderAddress =
        $os.getenv("BUILDER_MAILER_SENDER_ADDRESS") ||
        e.app.settings().meta.senderAddress ||
        $os.getenv("SMTP_USER") ||
        "noreply@career2day.com";

    if (!apiUrl || !apiKey) {
        // Builder mailer is optional; fall through to default sender when not configured.
        return e.next();
    }

    if (!e.message.to || !e.message.to.length || !e.message.to[0].address) {
        return e.next();
    }

    const payload = {
        "subject": e.message.subject,
        "content": {
            ...(e.message.html ? {
                "html": e.message.html,
            } : {
                "text": e.message.text,
            }),
            "type": "plain",
        },
        "from": senderAddress,
        "replyTo": senderAddress,
        "to": e.message.to[0].address,
    }

    const response = $http.send({
        url: `${apiUrl}/api/v2/email`,
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    
    if (response.statusCode !== 200) {
        $app.logger().error("Failed to send email", "error", response.json);
        return e.next();
    }

    return;
})
