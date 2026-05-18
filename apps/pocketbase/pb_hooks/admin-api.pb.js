/// <reference path="../pb_data/types.d.ts" />

const ADMIN_EMAIL = ($os.getenv("ADMIN_EMAIL") || "admin@career2day.com").toLowerCase();

function safeGet(record, field, fallback) {
  try {
    const value = record.get(field);
    return value === undefined || value === null ? fallback : value;
  } catch {
    return fallback;
  }
}

function isAdminAuth(record) {
  if (!record) return false;
  const email = String(safeGet(record, "email", "")).toLowerCase();
  return (
    email === ADMIN_EMAIL ||
    safeGet(record, "role", "") === "admin" ||
    safeGet(record, "isAdmin", false) === true ||
    safeGet(record, "admin", false) === true
  );
}

function requireAdmin(e) {
  if (!isAdminAuth(e.auth)) {
    return e.json(403, { message: "Admin access required." });
  }
  return null;
}

function listRecords(name, sort, limit) {
  try {
    const records = $app.findRecordsByFilter(name, "id != ''", sort || "-created", limit || 1000, 0);
    return records.filter((record) => !!record);
  } catch (err) {
    $app.logger().warn("[admin-api] Could not read " + name + ": " + err.message);
    return [];
  }
}

function recordDate(record) {
  try {
    return record.get("created") || record.created || "";
  } catch {
    return "";
  }
}

function usersPayload(records) {
  return records.map((record) => ({
    id: record.id,
    name: safeGet(record, "name", ""),
    email: safeGet(record, "email", ""),
    created: recordDate(record),
    authProvider: safeGet(record, "authProvider", "") || safeGet(record, "provider", "")
  }));
}

function subscriptionsPayload(records) {
  return records.map((record) => ({
    id: record.id,
    user_email: safeGet(record, "user_email", "") || safeGet(record, "email", ""),
    plan_type: safeGet(record, "plan_type", "") || safeGet(record, "plan", ""),
    status: safeGet(record, "status", ""),
    amount_paid: safeGet(record, "amount_paid", 0) || safeGet(record, "amount", 0),
    stripe_subscription_id: safeGet(record, "stripe_subscription_id", ""),
    created: recordDate(record)
  }));
}

routerAdd("GET", "/api/admin/summary", (e) => {
  const get = (record, field, fallback) => {
    try {
      const value = record.get(field);
      return value === undefined || value === null ? fallback : value;
    } catch {
      return fallback;
    }
  };

  const adminEmail = ($os.getenv("ADMIN_EMAIL") || "admin@career2day.com").toLowerCase();
  const authEmail = String(get(e.auth, "email", "")).toLowerCase();
  const isAdmin =
    authEmail === adminEmail ||
    get(e.auth, "role", "") === "admin" ||
    get(e.auth, "isAdmin", false) === true ||
    get(e.auth, "admin", false) === true;

  if (!isAdmin) {
    return e.json(403, { message: "Admin access required." });
  }

  const list = (name, limit) => {
    try {
      return $app.findRecordsByFilter(name, "id != ''", "", limit || 2000, 0).filter((record) => !!record);
    } catch (err) {
      $app.logger().warn("[admin-api] Could not read " + name + ": " + err.message);
      return [];
    }
  };

  const users = list("users", 2000);
  const subscriptions = list("subscriptions_stripe", 2000);

  return e.json(200, {
    counts: {
      users: users.length,
      subscriptions: subscriptions.length,
      activeSubscriptions: subscriptions.filter((item) => get(item, "status", "") === "active").length,
      pageViews: list("page_views", 2000).length,
      userActivity: list("user_activity", 2000).length,
      cvs: list("userCVs", 2000).length,
      careers: list("careers", 2000).length,
      skills: list("careerSkills", 2000).length,
      interviewQuestions: list("careerInterviewQuestions", 2000).length,
      quizzes: list("careerQuizzes", 2000).length,
      roadmaps: list("careerRoadmaps", 2000).length
    }
  });
}, $apis.requireAuth("users"));

routerAdd("GET", "/api/admin/users", (e) => {
  try {
    const get = (record, field, fallback) => {
      try {
        const value = record.get(field);
        return value === undefined || value === null ? fallback : value;
      } catch {
        return fallback;
      }
    };

    const adminEmail = ($os.getenv("ADMIN_EMAIL") || "admin@career2day.com").toLowerCase();
    const authEmail = String(get(e.auth, "email", "")).toLowerCase();
    const isAdmin =
      authEmail === adminEmail ||
      get(e.auth, "role", "") === "admin" ||
      get(e.auth, "isAdmin", false) === true ||
      get(e.auth, "admin", false) === true;

    if (!isAdmin) {
      return e.json(403, { message: "Admin access required." });
    }

    const users = $app.findRecordsByFilter("users", "id != ''", "", 1000, 0).filter((record) => !!record);
    const externalAuths = $app.findRecordsByFilter("_externalAuths", "id != ''", "", 2000, 0).filter((record) => !!record);
    const authProvidersByUser = {};

    externalAuths.forEach((record) => {
      const recordRef = get(record, "recordRef", "");
      const provider = get(record, "provider", "");
      if (recordRef && provider) {
        authProvidersByUser[recordRef] = provider;
      }
    });

    return e.json(200, {
      totalItems: users.length,
      items: users.map((record) => ({
        id: record.id,
        name: get(record, "name", ""),
        email: get(record, "email", ""),
        created: get(record, "created", "") || record.created || "",
        authProvider: authProvidersByUser[record.id] || "email"
      }))
    });
  } catch (err) {
    $app.logger().error("[admin-api] Users route failed: " + err.message);
    return e.json(500, { message: err.message || "Failed to load admin users." });
  }
}, $apis.requireAuth("users"));

routerAdd("GET", "/api/admin/subscriptions", (e) => {
  const get = (record, field, fallback) => {
    try {
      const value = record.get(field);
      return value === undefined || value === null ? fallback : value;
    } catch {
      return fallback;
    }
  };

  const adminEmail = ($os.getenv("ADMIN_EMAIL") || "admin@career2day.com").toLowerCase();
  const authEmail = String(get(e.auth, "email", "")).toLowerCase();
  const isAdmin =
    authEmail === adminEmail ||
    get(e.auth, "role", "") === "admin" ||
    get(e.auth, "isAdmin", false) === true ||
    get(e.auth, "admin", false) === true;

  if (!isAdmin) {
    return e.json(403, { message: "Admin access required." });
  }

  let subscriptions = [];
  try {
    subscriptions = $app.findRecordsByFilter("subscriptions_stripe", "id != ''", "", 1000, 0).filter((record) => !!record);
  } catch (err) {
    $app.logger().warn("[admin-api] Could not read subscriptions_stripe: " + err.message);
  }

  return e.json(200, {
    totalItems: subscriptions.length,
    items: subscriptions.map((record) => ({
      id: record.id,
      user_email: get(record, "user_email", "") || get(record, "email", ""),
      plan_type: get(record, "plan_type", "") || get(record, "plan", ""),
      status: get(record, "status", ""),
      amount_paid: get(record, "amount_paid", 0) || get(record, "amount", 0),
      stripe_subscription_id: get(record, "stripe_subscription_id", ""),
      created: get(record, "created", "") || record.created || ""
    }))
  });
}, $apis.requireAuth("users"));
