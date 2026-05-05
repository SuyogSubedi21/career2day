/// <reference path="../pb_data/types.d.ts" />

const ADMIN_EMAIL = ($os.getenv("ADMIN_EMAIL") || "suyogsubedivlogs@gmail.com").toLowerCase();

const isAdminAuth = (record) => {
  if (!record) return false;
  const email = String(record.get("email") || "").toLowerCase();
  return (
    email === ADMIN_EMAIL ||
    record.get("role") === "admin" ||
    record.get("isAdmin") === true ||
    record.get("admin") === true
  );
};

const requireAdmin = (e) => {
  if (!isAdminAuth(e.auth)) {
    return e.json(403, { message: "Admin access required." });
  }
  return null;
};

const listRecords = (name, sort, limit) => {
  try {
    return $app.findRecordsByFilter(name, "id != ''", sort || "-created", limit || 1000, 0);
  } catch (err) {
    $app.logger().warn("[admin-api] Could not read " + name + ": " + err.message);
    return [];
  }
};

const recordDate = (record) => {
  try {
    return record.get("created") || record.created || "";
  } catch {
    return "";
  }
};

const usersPayload = (records) => records.map((record) => ({
  id: record.id,
  name: record.get("name") || "",
  email: record.get("email") || "",
  created: recordDate(record)
}));

const subscriptionsPayload = (records) => records.map((record) => ({
  id: record.id,
  user_email: record.get("user_email") || record.get("email") || "",
  plan_type: record.get("plan_type") || record.get("plan") || "",
  status: record.get("status") || "",
  amount_paid: record.get("amount_paid") || record.get("amount") || 0,
  stripe_subscription_id: record.get("stripe_subscription_id") || "",
  created: recordDate(record)
}));

routerAdd("GET", "/api/admin/summary", (e) => {
  const blocked = requireAdmin(e);
  if (blocked) return blocked;

  const users = listRecords("users", "-created", 2000);
  const subscriptions = listRecords("subscriptions_stripe", "-created", 2000);

  return e.json(200, {
    counts: {
      users: users.length,
      subscriptions: subscriptions.length,
      activeSubscriptions: subscriptions.filter((item) => item.get("status") === "active").length,
      pageViews: listRecords("page_views", "-created", 2000).length,
      userActivity: listRecords("user_activity", "-created", 2000).length,
      cvs: listRecords("userCVs", "-created", 2000).length,
      careers: listRecords("careers", "-created", 2000).length,
      skills: listRecords("careerSkills", "-created", 2000).length,
      interviewQuestions: listRecords("careerInterviewQuestions", "-created", 2000).length,
      quizzes: listRecords("careerQuizzes", "-created", 2000).length,
      roadmaps: listRecords("careerRoadmaps", "-created", 2000).length
    }
  });
}, $apis.requireAuth("users"));

routerAdd("GET", "/api/admin/users", (e) => {
  const blocked = requireAdmin(e);
  if (blocked) return blocked;

  const users = listRecords("users", "-created", 500);
  return e.json(200, {
    totalItems: users.length,
    items: usersPayload(users)
  });
}, $apis.requireAuth("users"));

routerAdd("GET", "/api/admin/subscriptions", (e) => {
  const blocked = requireAdmin(e);
  if (blocked) return blocked;

  const subscriptions = listRecords("subscriptions_stripe", "-created", 500);
  return e.json(200, {
    totalItems: subscriptions.length,
    items: subscriptionsPayload(subscriptions)
  });
}, $apis.requireAuth("users"));
