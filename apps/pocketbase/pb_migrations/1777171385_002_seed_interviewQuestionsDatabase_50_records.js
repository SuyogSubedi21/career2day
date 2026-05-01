/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("interviewQuestionsDatabase");

  const record0 = new Record(collection);
    record0.set("careerSlug", "backend-developer");
    record0.set("careerName", "Backend Developer");
    record0.set("level", "Beginner");
    record0.set("questionNumber", 1);
    record0.set("question", "What is the difference between SQL and NoSQL databases?");
    record0.set("explanation", "SQL databases use structured schemas with tables and relationships. NoSQL databases are flexible, schema-less, and optimized for specific data types. SQL is better for relational data, NoSQL for unstructured or rapidly changing data.");
    record0.set("practicalExample", "SQL: SELECT * FROM users WHERE age > 18; NoSQL: db.users.find({age: {$gt: 18}})");
    record0.set("keyPoints", ["SQL uses structured schemas", "NoSQL is flexible and schema-less", "SQL for relational data, NoSQL for unstructured"]);
    record0.set("relatedTopics", ["database design", "ACID", "CAP theorem"]);
    record0.set("difficulty", "Simple");
    record0.set("category", "Database Design");
  try {
    app.save(record0);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record1 = new Record(collection);
    record1.set("careerSlug", "backend-developer");
    record1.set("careerName", "Backend Developer");
    record1.set("level", "Beginner");
    record1.set("questionNumber", 2);
    record1.set("question", "What is an API and what are REST principles?");
    record1.set("explanation", "An API (Application Programming Interface) allows applications to communicate. REST (Representational State Transfer) uses HTTP methods (GET, POST, PUT, DELETE) on resources identified by URLs. RESTful APIs are stateless and cacheable.");
    record1.set("practicalExample", "GET /api/users - retrieve users, POST /api/users - create user, PUT /api/users/1 - update user, DELETE /api/users/1 - delete user");
    record1.set("keyPoints", ["API enables application communication", "REST uses HTTP methods", "stateless and cacheable"]);
    record1.set("relatedTopics", ["HTTP methods", "status codes", "GraphQL"]);
    record1.set("difficulty", "Simple");
    record1.set("category", "API Design");
  try {
    app.save(record1);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record2 = new Record(collection);
    record2.set("careerSlug", "backend-developer");
    record2.set("careerName", "Backend Developer");
    record2.set("level", "Intermediate");
    record2.set("questionNumber", 3);
    record2.set("question", "Explain the concept of authentication and authorization.");
    record2.set("explanation", "Authentication verifies who you are (login). Authorization determines what you can do (permissions). Both are essential for security. Common methods: JWT tokens, OAuth, session-based auth.");
    record2.set("practicalExample", "Authentication: user logs in with credentials. Authorization: check if user has 'admin' role before allowing action.");
    record2.set("keyPoints", ["authentication verifies identity", "authorization checks permissions", "both essential for security"]);
    record2.set("relatedTopics", ["JWT", "OAuth", "session management"]);
    record2.set("difficulty", "Medium");
    record2.set("category", "Security");
  try {
    app.save(record2);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record3 = new Record(collection);
    record3.set("careerSlug", "backend-developer");
    record3.set("careerName", "Backend Developer");
    record3.set("level", "Intermediate");
    record3.set("questionNumber", 4);
    record3.set("question", "What is caching and why is it important?");
    record3.set("explanation", "Caching stores frequently accessed data in fast storage to reduce database queries. Types: in-memory (Redis), HTTP caching, database query caching. Improves performance and reduces server load significantly.");
    record3.set("practicalExample", "Redis: SET key value EX 3600; GET key. HTTP: Cache-Control: max-age=3600");
    record3.set("keyPoints", ["caching reduces database queries", "improves performance", "types: in-memory, HTTP, query"]);
    record3.set("relatedTopics", ["Redis", "cache invalidation", "CDN"]);
    record3.set("difficulty", "Medium");
    record3.set("category", "Performance");
  try {
    app.save(record3);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record4 = new Record(collection);
    record4.set("careerSlug", "backend-developer");
    record4.set("careerName", "Backend Developer");
    record4.set("level", "Intermediate");
    record4.set("questionNumber", 5);
    record4.set("question", "Explain database indexing and its impact on performance.");
    record4.set("explanation", "Indexes speed up data retrieval by creating a sorted data structure. Trade-off: faster reads but slower writes and more storage. Use indexes on frequently queried columns. Improves query performance dramatically.");
    record4.set("practicalExample", "CREATE INDEX idx_email ON users(email); SELECT * FROM users WHERE email = 'test@test.com'; // uses index");
    record4.set("keyPoints", ["indexes speed up queries", "slower writes and more storage", "use on frequently queried columns"]);
    record4.set("relatedTopics", ["query optimization", "execution plans"]);
    record4.set("difficulty", "Medium");
    record4.set("category", "Database Design");
  try {
    app.save(record4);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record5 = new Record(collection);
    record5.set("careerSlug", "backend-developer");
    record5.set("careerName", "Backend Developer");
    record5.set("level", "Advanced");
    record5.set("questionNumber", 6);
    record5.set("question", "What is database normalization and why is it important?");
    record5.set("explanation", "Normalization organizes data to reduce redundancy and improve integrity. Normal forms (1NF, 2NF, 3NF) define levels of normalization. Prevents anomalies and ensures data consistency.");
    record5.set("practicalExample", "1NF: atomic values. 2NF: no partial dependencies. 3NF: no transitive dependencies.");
    record5.set("keyPoints", ["normalization reduces redundancy", "prevents anomalies", "normal forms define levels"]);
    record5.set("relatedTopics", ["denormalization", "ACID", "data integrity"]);
    record5.set("difficulty", "Hard");
    record5.set("category", "Database Design");
  try {
    app.save(record5);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record6 = new Record(collection);
    record6.set("careerSlug", "backend-developer");
    record6.set("careerName", "Backend Developer");
    record6.set("level", "Advanced");
    record6.set("questionNumber", 7);
    record6.set("question", "Explain the concept of transactions and ACID properties.");
    record6.set("explanation", "Transactions ensure data consistency. ACID: Atomicity (all or nothing), Consistency (valid state), Isolation (concurrent independence), Durability (persistent). Essential for data integrity in critical operations.");
    record6.set("practicalExample", "BEGIN TRANSACTION; UPDATE account SET balance = balance - 100 WHERE id = 1; UPDATE account SET balance = balance + 100 WHERE id = 2; COMMIT;");
    record6.set("keyPoints", ["transactions ensure consistency", "ACID properties guarantee reliability", "all or nothing execution"]);
    record6.set("relatedTopics", ["locks", "isolation levels", "deadlocks"]);
    record6.set("difficulty", "Hard");
    record6.set("category", "Database Design");
  try {
    app.save(record6);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record7 = new Record(collection);
    record7.set("careerSlug", "backend-developer");
    record7.set("careerName", "Backend Developer");
    record7.set("level", "Intermediate");
    record7.set("questionNumber", 8);
    record7.set("question", "What is the N+1 query problem and how do you solve it?");
    record7.set("explanation", "N+1 occurs when fetching a parent and then querying for each child (1 + N queries). Solve using eager loading (JOIN), batch loading, or GraphQL. Significantly impacts performance.");
    record7.set("practicalExample", "Problem: for each user, query posts (N+1 queries). Solution: SELECT users.*, posts.* FROM users JOIN posts ON users.id = posts.user_id");
    record7.set("keyPoints", ["N+1 causes excessive queries", "solve with eager loading", "impacts performance significantly"]);
    record7.set("relatedTopics", ["eager loading", "lazy loading", "query optimization"]);
    record7.set("difficulty", "Medium");
    record7.set("category", "Performance");
  try {
    app.save(record7);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record8 = new Record(collection);
    record8.set("careerSlug", "backend-developer");
    record8.set("careerName", "Backend Developer");
    record8.set("level", "Intermediate");
    record8.set("questionNumber", 9);
    record8.set("question", "Explain the concept of microservices architecture.");
    record8.set("explanation", "Microservices divide applications into small, independent services. Each service handles a specific business capability. Enables scalability, independent deployment, and technology diversity. Adds complexity in communication and data consistency.");
    record8.set("practicalExample", "User Service, Order Service, Payment Service - each with own database and API.");
    record8.set("keyPoints", ["microservices are independent", "each handles specific capability", "enables scalability and independent deployment"]);
    record8.set("relatedTopics", ["service discovery", "API gateway", "distributed systems"]);
    record8.set("difficulty", "Hard");
    record8.set("category", "Architecture");
  try {
    app.save(record8);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record9 = new Record(collection);
    record9.set("careerSlug", "backend-developer");
    record9.set("careerName", "Backend Developer");
    record9.set("level", "Advanced");
    record9.set("questionNumber", 10);
    record9.set("question", "What is eventual consistency and when is it appropriate?");
    record9.set("explanation", "Eventual consistency means data becomes consistent over time, not immediately. Used in distributed systems for availability. Trade-off: availability and partition tolerance for immediate consistency. Appropriate for non-critical data.");
    record9.set("practicalExample", "User updates profile, change propagates to all replicas eventually. Suitable for caches, analytics, non-critical data.");
    record9.set("keyPoints", ["eventual consistency trades immediate consistency", "used in distributed systems", "appropriate for non-critical data"]);
    record9.set("relatedTopics", ["CAP theorem", "distributed systems", "replication"]);
    record9.set("difficulty", "Hard");
    record9.set("category", "Distributed Systems");
  try {
    app.save(record9);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record10 = new Record(collection);
    record10.set("careerSlug", "backend-developer");
    record10.set("careerName", "Backend Developer");
    record10.set("level", "Beginner");
    record10.set("questionNumber", 11);
    record10.set("question", "What are HTTP status codes and what do they mean?");
    record10.set("explanation", "HTTP status codes indicate request results. 2xx: success, 3xx: redirect, 4xx: client error, 5xx: server error. Common: 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Internal Server Error.");
    record10.set("practicalExample", "200 OK - request succeeded. 404 Not Found - resource doesn't exist. 500 Internal Server Error - server error.");
    record10.set("keyPoints", ["2xx indicates success", "4xx indicates client error", "5xx indicates server error"]);
    record10.set("relatedTopics", ["HTTP methods", "error handling"]);
    record10.set("difficulty", "Simple");
    record10.set("category", "HTTP");
  try {
    app.save(record10);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record11 = new Record(collection);
    record11.set("careerSlug", "backend-developer");
    record11.set("careerName", "Backend Developer");
    record11.set("level", "Intermediate");
    record11.set("questionNumber", 12);
    record11.set("question", "Explain the concept of rate limiting and why it's important.");
    record11.set("explanation", "Rate limiting restricts number of requests per time period. Prevents abuse, protects against DDoS, ensures fair resource usage. Implement using tokens, sliding windows, or leaky buckets.");
    record11.set("practicalExample", "Allow 100 requests per minute per IP. Return 429 Too Many Requests when exceeded.");
    record11.set("keyPoints", ["rate limiting prevents abuse", "protects against DDoS", "ensures fair resource usage"]);
    record11.set("relatedTopics", ["throttling", "DDoS protection", "API security"]);
    record11.set("difficulty", "Medium");
    record11.set("category", "Security");
  try {
    app.save(record11);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record12 = new Record(collection);
    record12.set("careerSlug", "backend-developer");
    record12.set("careerName", "Backend Developer");
    record12.set("level", "Intermediate");
    record12.set("questionNumber", 13);
    record12.set("question", "What is SQL injection and how do you prevent it?");
    record12.set("explanation", "SQL injection inserts malicious SQL code into queries. Prevents data theft and modification. Prevent using parameterized queries, input validation, and ORM frameworks. Never concatenate user input into SQL.");
    record12.set("practicalExample", "Vulnerable: SELECT * FROM users WHERE id = ' + userId + '; Safe: SELECT * FROM users WHERE id = ?; (with parameterized query)");
    record12.set("keyPoints", ["SQL injection inserts malicious code", "prevent with parameterized queries", "never concatenate user input"]);
    record12.set("relatedTopics", ["input validation", "ORM", "security"]);
    record12.set("difficulty", "Medium");
    record12.set("category", "Security");
  try {
    app.save(record12);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record13 = new Record(collection);
    record13.set("careerSlug", "backend-developer");
    record13.set("careerName", "Backend Developer");
    record13.set("level", "Intermediate");
    record13.set("questionNumber", 14);
    record13.set("question", "Explain the concept of load balancing.");
    record13.set("explanation", "Load balancing distributes requests across multiple servers. Improves availability, scalability, and performance. Algorithms: round-robin, least connections, IP hash. Essential for high-traffic applications.");
    record13.set("practicalExample", "Requests distributed to Server 1, Server 2, Server 3 in rotation.");
    record13.set("keyPoints", ["load balancing distributes requests", "improves availability and scalability", "various algorithms available"]);
    record13.set("relatedTopics", ["horizontal scaling", "failover", "health checks"]);
    record13.set("difficulty", "Medium");
    record13.set("category", "Infrastructure");
  try {
    app.save(record13);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record14 = new Record(collection);
    record14.set("careerSlug", "backend-developer");
    record14.set("careerName", "Backend Developer");
    record14.set("level", "Advanced");
    record14.set("questionNumber", 15);
    record14.set("question", "What is database replication and what are its benefits?");
    record14.set("explanation", "Replication copies data across multiple database instances. Benefits: high availability, disaster recovery, read scaling. Types: master-slave, master-master. Trade-off: consistency vs availability.");
    record14.set("practicalExample", "Master database replicates to Slave 1 and Slave 2. Reads from slaves, writes to master.");
    record14.set("keyPoints", ["replication copies data across instances", "enables high availability", "read scaling"]);
    record14.set("relatedTopics", ["failover", "consistency", "disaster recovery"]);
    record14.set("difficulty", "Hard");
    record14.set("category", "Database Design");
  try {
    app.save(record14);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record15 = new Record(collection);
    record15.set("careerSlug", "backend-developer");
    record15.set("careerName", "Backend Developer");
    record15.set("level", "Advanced");
    record15.set("questionNumber", 16);
    record15.set("question", "Explain the concept of sharding and when to use it.");
    record15.set("explanation", "Sharding partitions data across multiple databases based on a key. Enables horizontal scaling for large datasets. Trade-off: complexity in querying and maintaining consistency. Use when single database can't handle volume.");
    record15.set("practicalExample", "Shard by user_id: users 1-1000 on Shard 1, 1001-2000 on Shard 2.");
    record15.set("keyPoints", ["sharding partitions data", "enables horizontal scaling", "adds complexity"]);
    record15.set("relatedTopics", ["horizontal scaling", "consistency", "distributed systems"]);
    record15.set("difficulty", "Hard");
    record15.set("category", "Database Design");
  try {
    app.save(record15);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record16 = new Record(collection);
    record16.set("careerSlug", "backend-developer");
    record16.set("careerName", "Backend Developer");
    record16.set("level", "Intermediate");
    record16.set("questionNumber", 17);
    record16.set("question", "What is GraphQL and how does it differ from REST?");
    record16.set("explanation", "GraphQL is a query language for APIs. Clients request exactly what data they need. Advantages: no over-fetching, no under-fetching, single endpoint. Disadvantages: complexity, caching challenges.");
    record16.set("practicalExample", "GraphQL: query { user(id: 1) { name email posts { title } } } vs REST: GET /users/1, GET /users/1/posts");
    record16.set("keyPoints", ["GraphQL requests exact data needed", "single endpoint", "no over/under-fetching"]);
    record16.set("relatedTopics", ["REST", "API design", "query language"]);
    record16.set("difficulty", "Medium");
    record16.set("category", "API Design");
  try {
    app.save(record16);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record17 = new Record(collection);
    record17.set("careerSlug", "backend-developer");
    record17.set("careerName", "Backend Developer");
    record17.set("level", "Intermediate");
    record17.set("questionNumber", 18);
    record17.set("question", "Explain the concept of idempotency in APIs.");
    record17.set("explanation", "Idempotent operations produce same result regardless of how many times called. Important for reliability in distributed systems. GET, PUT, DELETE should be idempotent. POST typically isn't.");
    record17.set("practicalExample", "PUT /users/1 with same data multiple times = same result. POST /users multiple times = multiple users created.");
    record17.set("keyPoints", ["idempotent operations produce same result", "important for reliability", "GET, PUT, DELETE should be idempotent"]);
    record17.set("relatedTopics", ["API design", "reliability", "distributed systems"]);
    record17.set("difficulty", "Medium");
    record17.set("category", "API Design");
  try {
    app.save(record17);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record18 = new Record(collection);
    record18.set("careerSlug", "backend-developer");
    record18.set("careerName", "Backend Developer");
    record18.set("level", "Advanced");
    record18.set("questionNumber", 19);
    record18.set("question", "What is the CAP theorem and its implications?");
    record18.set("explanation", "CAP theorem states distributed systems can guarantee at most 2 of 3: Consistency, Availability, Partition tolerance. Most systems choose AP (availability + partition tolerance) over C. Guides architecture decisions.");
    record18.set("practicalExample", "SQL databases: CA (no partition tolerance). NoSQL: AP (eventual consistency).");
    record18.set("keyPoints", ["CAP: Consistency, Availability, Partition tolerance", "can guarantee at most 2", "guides architecture decisions"]);
    record18.set("relatedTopics", ["distributed systems", "eventual consistency", "ACID"]);
    record18.set("difficulty", "Hard");
    record18.set("category", "Distributed Systems");
  try {
    app.save(record18);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record19 = new Record(collection);
    record19.set("careerSlug", "backend-developer");
    record19.set("careerName", "Backend Developer");
    record19.set("level", "Intermediate");
    record19.set("questionNumber", 20);
    record19.set("question", "How do you handle errors and exceptions in backend applications?");
    record19.set("explanation", "Use try/catch blocks, custom error classes, and proper logging. Return meaningful error messages and appropriate status codes. Implement error tracking (Sentry). Never expose sensitive information in errors.");
    record19.set("practicalExample", "try { riskyOperation(); } catch(error) { logger.error(error); return res.status(500).json({message: 'Internal error'}); }");
    record19.set("keyPoints", ["use try/catch blocks", "return appropriate status codes", "log errors for debugging"]);
    record19.set("relatedTopics", ["logging", "error tracking", "debugging"]);
    record19.set("difficulty", "Medium");
    record19.set("category", "Error Handling");
  try {
    app.save(record19);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record20 = new Record(collection);
    record20.set("careerSlug", "backend-developer");
    record20.set("careerName", "Backend Developer");
    record20.set("level", "Intermediate");
    record20.set("questionNumber", 21);
    record20.set("question", "What is middleware and how is it used?");
    record20.set("explanation", "Middleware functions process requests before reaching route handlers. Used for authentication, logging, validation, error handling. Middleware chain allows composing functionality.");
    record20.set("practicalExample", "app.use(authenticate); app.use(validate); app.get('/users', handler);");
    record20.set("keyPoints", ["middleware processes requests", "used for cross-cutting concerns", "middleware chain"]);
    record20.set("relatedTopics", ["request/response cycle", "authentication", "logging"]);
    record20.set("difficulty", "Medium");
    record20.set("category", "Backend Architecture");
  try {
    app.save(record20);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record21 = new Record(collection);
    record21.set("careerSlug", "backend-developer");
    record21.set("careerName", "Backend Developer");
    record21.set("level", "Advanced");
    record21.set("questionNumber", 22);
    record21.set("question", "Explain the concept of message queues and their use cases.");
    record21.set("explanation", "Message queues decouple services by storing messages for asynchronous processing. Enables scalability, reliability, and loose coupling. Examples: RabbitMQ, Kafka. Use for background jobs, event processing.");
    record21.set("practicalExample", "User submits form -> message queued -> worker processes asynchronously -> user notified when done.");
    record21.set("keyPoints", ["message queues decouple services", "enable asynchronous processing", "improve reliability"]);
    record21.set("relatedTopics", ["event-driven architecture", "RabbitMQ", "Kafka"]);
    record21.set("difficulty", "Hard");
    record21.set("category", "Architecture");
  try {
    app.save(record21);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record22 = new Record(collection);
    record22.set("careerSlug", "backend-developer");
    record22.set("careerName", "Backend Developer");
    record22.set("level", "Advanced");
    record22.set("questionNumber", 23);
    record22.set("question", "What is event sourcing and how does it differ from traditional databases?");
    record22.set("explanation", "Event sourcing stores all changes as immutable events instead of current state. Enables audit trail, time travel, and event replay. Trade-off: complexity and storage. Useful for financial systems, audit requirements.");
    record22.set("practicalExample", "Instead of storing balance = 1000, store events: [DepositEvent(500), WithdrawalEvent(100)].");
    record22.set("keyPoints", ["event sourcing stores changes as events", "enables audit trail", "enables time travel"]);
    record22.set("relatedTopics", ["CQRS", "event-driven architecture", "audit"]);
    record22.set("difficulty", "Hard");
    record22.set("category", "Architecture");
  try {
    app.save(record22);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record23 = new Record(collection);
    record23.set("careerSlug", "backend-developer");
    record23.set("careerName", "Backend Developer");
    record23.set("level", "Intermediate");
    record23.set("questionNumber", 24);
    record23.set("question", "How do you implement pagination in APIs?");
    record23.set("explanation", "Pagination divides large datasets into pages. Implement using offset/limit or cursor-based pagination. Cursor-based is more efficient for large datasets. Always include total count and has_more flag.");
    record23.set("practicalExample", "GET /users?page=1&limit=10 or GET /users?cursor=abc123&limit=10");
    record23.set("keyPoints", ["pagination divides large datasets", "offset/limit or cursor-based", "cursor-based more efficient"]);
    record23.set("relatedTopics", ["API design", "performance", "database queries"]);
    record23.set("difficulty", "Medium");
    record23.set("category", "API Design");
  try {
    app.save(record23);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record24 = new Record(collection);
    record24.set("careerSlug", "backend-developer");
    record24.set("careerName", "Backend Developer");
    record24.set("level", "Intermediate");
    record24.set("questionNumber", 25);
    record24.set("question", "What is CORS and how do you configure it on the backend?");
    record24.set("explanation", "CORS controls which origins can access resources. Configure on server by setting Access-Control-Allow-Origin header. Specify allowed methods, headers, and credentials. Essential for frontend-backend communication.");
    record24.set("practicalExample", "app.use((req, res, next) => { res.setHeader('Access-Control-Allow-Origin', '*'); res.setHeader('Access-Control-Allow-Methods', 'GET, POST'); next(); });");
    record24.set("keyPoints", ["CORS controls cross-origin access", "configure via headers", "specify allowed methods and origins"]);
    record24.set("relatedTopics", ["same-origin policy", "preflight requests"]);
    record24.set("difficulty", "Medium");
    record24.set("category", "Security");
  try {
    app.save(record24);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record25 = new Record(collection);
    record25.set("careerSlug", "backend-developer");
    record25.set("careerName", "Backend Developer");
    record25.set("level", "Advanced");
    record25.set("questionNumber", 26);
    record25.set("question", "Explain the concept of circuit breaker pattern.");
    record25.set("explanation", "Circuit breaker prevents cascading failures by stopping requests to failing services. States: closed (normal), open (failing), half-open (testing). Enables graceful degradation and recovery.");
    record25.set("practicalExample", "Service A calls Service B. If B fails repeatedly, circuit opens and A stops calling B temporarily.");
    record25.set("keyPoints", ["circuit breaker prevents cascading failures", "three states: closed, open, half-open", "enables graceful degradation"]);
    record25.set("relatedTopics", ["resilience", "microservices", "fault tolerance"]);
    record25.set("difficulty", "Hard");
    record25.set("category", "Architecture");
  try {
    app.save(record25);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record26 = new Record(collection);
    record26.set("careerSlug", "backend-developer");
    record26.set("careerName", "Backend Developer");
    record26.set("level", "Advanced");
    record26.set("questionNumber", 27);
    record26.set("question", "What is the bulkhead pattern and how does it improve resilience?");
    record26.set("explanation", "Bulkhead pattern isolates resources to prevent total system failure. Each service gets dedicated resources. If one service fails, others continue. Inspired by ship compartments.");
    record26.set("practicalExample", "Thread pool 1 for Service A, Thread pool 2 for Service B. Service A failure doesn't affect Service B.");
    record26.set("keyPoints", ["bulkhead isolates resources", "prevents total system failure", "enables independent scaling"]);
    record26.set("relatedTopics", ["resilience", "resource isolation", "microservices"]);
    record26.set("difficulty", "Hard");
    record26.set("category", "Architecture");
  try {
    app.save(record26);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record27 = new Record(collection);
    record27.set("careerSlug", "backend-developer");
    record27.set("careerName", "Backend Developer");
    record27.set("level", "Intermediate");
    record27.set("questionNumber", 28);
    record27.set("question", "How do you implement logging and monitoring in backend applications?");
    record27.set("explanation", "Logging records application events for debugging. Monitoring tracks system health and performance. Use structured logging (JSON), centralized logging (ELK, Splunk), and metrics (Prometheus). Essential for production systems.");
    record27.set("practicalExample", "logger.info({userId: 1, action: 'login', timestamp: Date.now()}); metrics.increment('login_count');");
    record27.set("keyPoints", ["logging records events", "monitoring tracks health", "structured logging for analysis"]);
    record27.set("relatedTopics", ["ELK stack", "Prometheus", "alerting"]);
    record27.set("difficulty", "Medium");
    record27.set("category", "Operations");
  try {
    app.save(record27);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record28 = new Record(collection);
    record28.set("careerSlug", "backend-developer");
    record28.set("careerName", "Backend Developer");
    record28.set("level", "Advanced");
    record28.set("questionNumber", 29);
    record28.set("question", "Explain the concept of distributed tracing.");
    record28.set("explanation", "Distributed tracing tracks requests across multiple services. Helps identify bottlenecks and failures in microservices. Tools: Jaeger, Zipkin. Essential for debugging complex systems.");
    record28.set("practicalExample", "Request enters Service A, calls Service B, calls Service C. Trace shows timing and dependencies.");
    record28.set("keyPoints", ["distributed tracing tracks requests", "identifies bottlenecks", "essential for microservices"]);
    record28.set("relatedTopics", ["observability", "microservices", "debugging"]);
    record28.set("difficulty", "Hard");
    record28.set("category", "Operations");
  try {
    app.save(record28);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record29 = new Record(collection);
    record29.set("careerSlug", "backend-developer");
    record29.set("careerName", "Backend Developer");
    record29.set("level", "Intermediate");
    record29.set("questionNumber", 30);
    record29.set("question", "What is API versioning and why is it important?");
    record29.set("explanation", "API versioning manages changes to APIs without breaking clients. Strategies: URL versioning (/v1/users), header versioning, query parameter. Important for backward compatibility and smooth transitions.");
    record29.set("practicalExample", "GET /api/v1/users vs GET /api/v2/users with different response formats.");
    record29.set("keyPoints", ["API versioning manages changes", "maintains backward compatibility", "enables smooth transitions"]);
    record29.set("relatedTopics", ["API design", "backward compatibility"]);
    record29.set("difficulty", "Medium");
    record29.set("category", "API Design");
  try {
    app.save(record29);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record30 = new Record(collection);
    record30.set("careerSlug", "backend-developer");
    record30.set("careerName", "Backend Developer");
    record30.set("level", "Advanced");
    record30.set("questionNumber", 31);
    record30.set("question", "Explain the concept of database connection pooling.");
    record30.set("explanation", "Connection pooling reuses database connections instead of creating new ones. Improves performance and reduces resource usage. Configure pool size based on workload. Essential for high-traffic applications.");
    record30.set("practicalExample", "Pool size: 10. Request 1 uses connection 1, releases it. Request 2 reuses connection 1.");
    record30.set("keyPoints", ["connection pooling reuses connections", "improves performance", "reduces resource usage"]);
    record30.set("relatedTopics", ["database optimization", "performance", "scalability"]);
    record30.set("difficulty", "Hard");
    record30.set("category", "Database Design");
  try {
    app.save(record30);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record31 = new Record(collection);
    record31.set("careerSlug", "backend-developer");
    record31.set("careerName", "Backend Developer");
    record31.set("level", "Intermediate");
    record31.set("questionNumber", 32);
    record31.set("question", "How do you handle file uploads in backend applications?");
    record31.set("explanation", "Validate file type and size, store securely (cloud storage), generate unique names, scan for malware. Never trust client-provided filenames. Use CDN for serving files. Implement progress tracking for large files.");
    record31.set("practicalExample", "Validate MIME type, upload to S3, return signed URL for download.");
    record31.set("keyPoints", ["validate file type and size", "store securely", "generate unique names"]);
    record31.set("relatedTopics", ["file storage", "cloud storage", "security"]);
    record31.set("difficulty", "Medium");
    record31.set("category", "File Handling");
  try {
    app.save(record31);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record32 = new Record(collection);
    record32.set("careerSlug", "backend-developer");
    record32.set("careerName", "Backend Developer");
    record32.set("level", "Advanced");
    record32.set("questionNumber", 33);
    record32.set("question", "What is the difference between vertical and horizontal scaling?");
    record32.set("explanation", "Vertical scaling adds resources to single server (CPU, RAM). Horizontal scaling adds more servers. Horizontal is preferred for distributed systems but adds complexity. Vertical has limits.");
    record32.set("practicalExample", "Vertical: upgrade server from 8GB to 16GB RAM. Horizontal: add more servers to load balancer.");
    record32.set("keyPoints", ["vertical scaling adds resources to server", "horizontal scaling adds servers", "horizontal preferred for distributed systems"]);
    record32.set("relatedTopics", ["load balancing", "infrastructure", "scalability"]);
    record32.set("difficulty", "Hard");
    record32.set("category", "Infrastructure");
  try {
    app.save(record32);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record33 = new Record(collection);
    record33.set("careerSlug", "backend-developer");
    record33.set("careerName", "Backend Developer");
    record33.set("level", "Intermediate");
    record33.set("questionNumber", 34);
    record33.set("question", "Explain the concept of webhooks.");
    record33.set("explanation", "Webhooks are user-defined HTTP callbacks triggered by events. Enable real-time notifications and integrations. Implement with retry logic and signature verification. Alternative to polling.");
    record33.set("practicalExample", "Payment processed -> webhook POST to /webhooks/payment with event data.");
    record33.set("keyPoints", ["webhooks are HTTP callbacks", "triggered by events", "enable real-time notifications"]);
    record33.set("relatedTopics", ["event-driven architecture", "integrations"]);
    record33.set("difficulty", "Medium");
    record33.set("category", "API Design");
  try {
    app.save(record33);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record34 = new Record(collection);
    record34.set("careerSlug", "backend-developer");
    record34.set("careerName", "Backend Developer");
    record34.set("level", "Advanced");
    record34.set("questionNumber", 35);
    record34.set("question", "What is the difference between stateful and stateless services?");
    record34.set("explanation", "Stateless services don't store client context, enabling easy scaling. Stateful services maintain client state, harder to scale. Prefer stateless for distributed systems. Use external storage for state.");
    record34.set("practicalExample", "Stateless: each request contains all needed info. Stateful: server remembers client session.");
    record34.set("keyPoints", ["stateless services enable scaling", "stateful services maintain context", "prefer stateless"]);
    record34.set("relatedTopics", ["scalability", "distributed systems", "session management"]);
    record34.set("difficulty", "Hard");
    record34.set("category", "Architecture");
  try {
    app.save(record34);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record35 = new Record(collection);
    record35.set("careerSlug", "backend-developer");
    record35.set("careerName", "Backend Developer");
    record35.set("level", "Intermediate");
    record35.set("questionNumber", 36);
    record35.set("question", "How do you implement search functionality in backend applications?");
    record35.set("explanation", "Use full-text search engines (Elasticsearch, Solr) for efficient searching. Index data for fast retrieval. Implement filtering, sorting, and pagination. Handle typos with fuzzy matching.");
    record35.set("practicalExample", "Elasticsearch: POST /users/_search with query DSL for complex searches.");
    record35.set("keyPoints", ["use search engines for efficiency", "index data for fast retrieval", "implement filtering and sorting"]);
    record35.set("relatedTopics", ["Elasticsearch", "full-text search", "indexing"]);
    record35.set("difficulty", "Medium");
    record35.set("category", "Search");
  try {
    app.save(record35);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record36 = new Record(collection);
    record36.set("careerSlug", "backend-developer");
    record36.set("careerName", "Backend Developer");
    record36.set("level", "Advanced");
    record36.set("questionNumber", 37);
    record36.set("question", "Explain the concept of saga pattern for distributed transactions.");
    record36.set("explanation", "Saga pattern manages distributed transactions across services. Two approaches: choreography (event-driven) and orchestration (central coordinator). Handles failures with compensating transactions.");
    record36.set("practicalExample", "Order saga: create order -> reserve inventory -> process payment. If payment fails, compensate by releasing inventory.");
    record36.set("keyPoints", ["saga manages distributed transactions", "choreography vs orchestration", "compensating transactions"]);
    record36.set("relatedTopics", ["distributed transactions", "microservices", "consistency"]);
    record36.set("difficulty", "Hard");
    record36.set("category", "Architecture");
  try {
    app.save(record36);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record37 = new Record(collection);
    record37.set("careerSlug", "backend-developer");
    record37.set("careerName", "Backend Developer");
    record37.set("level", "Intermediate");
    record37.set("questionNumber", 38);
    record37.set("question", "What is the difference between synchronous and asynchronous processing?");
    record37.set("explanation", "Synchronous: client waits for response. Asynchronous: client doesn't wait, processes later. Asynchronous improves responsiveness and scalability. Use message queues for async processing.");
    record37.set("practicalExample", "Synchronous: POST /process, wait for result. Asynchronous: POST /process, return job ID, poll for status.");
    record37.set("keyPoints", ["synchronous blocks client", "asynchronous improves responsiveness", "use message queues"]);
    record37.set("relatedTopics", ["message queues", "background jobs", "scalability"]);
    record37.set("difficulty", "Medium");
    record37.set("category", "Architecture");
  try {
    app.save(record37);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record38 = new Record(collection);
    record38.set("careerSlug", "backend-developer");
    record38.set("careerName", "Backend Developer");
    record38.set("level", "Advanced");
    record38.set("questionNumber", 39);
    record38.set("question", "How do you implement real-time features using WebSockets?");
    record38.set("explanation", "WebSockets enable bidirectional communication between client and server. Use for real-time notifications, chat, live updates. Maintain persistent connections. Handle reconnection and message ordering.");
    record38.set("practicalExample", "Client connects to WebSocket server. Server pushes updates to all connected clients in real-time.");
    record38.set("keyPoints", ["WebSockets enable bidirectional communication", "persistent connections", "real-time updates"]);
    record38.set("relatedTopics", ["Socket.io", "real-time", "scalability"]);
    record38.set("difficulty", "Hard");
    record38.set("category", "Real-time");
  try {
    app.save(record38);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record39 = new Record(collection);
    record39.set("careerSlug", "backend-developer");
    record39.set("careerName", "Backend Developer");
    record39.set("level", "Intermediate");
    record39.set("questionNumber", 40);
    record39.set("question", "Explain the concept of API rate limiting strategies.");
    record39.set("explanation", "Strategies: token bucket (smooth bursts), sliding window (accurate), leaky bucket (smooth flow). Implement per-user, per-IP, or global limits. Return 429 status with retry-after header.");
    record39.set("practicalExample", "Token bucket: 100 tokens per minute. Each request costs 1 token. Tokens refill over time.");
    record39.set("keyPoints", ["token bucket for bursts", "sliding window for accuracy", "leaky bucket for smooth flow"]);
    record39.set("relatedTopics", ["rate limiting", "API security", "DDoS protection"]);
    record39.set("difficulty", "Medium");
    record39.set("category", "Security");
  try {
    app.save(record39);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record40 = new Record(collection);
    record40.set("careerSlug", "backend-developer");
    record40.set("careerName", "Backend Developer");
    record40.set("level", "Advanced");
    record40.set("questionNumber", 41);
    record40.set("question", "What is the difference between push and pull architectures?");
    record40.set("explanation", "Push: server sends data to clients. Pull: clients request data from server. Push is real-time but harder to scale. Pull is simpler but less responsive. Hybrid approaches combine both.");
    record40.set("practicalExample", "Push: WebSocket server sends updates. Pull: client polls /api/updates every 5 seconds.");
    record40.set("keyPoints", ["push is real-time", "pull is simpler", "hybrid combines both"]);
    record40.set("relatedTopics", ["real-time", "WebSockets", "polling"]);
    record40.set("difficulty", "Hard");
    record40.set("category", "Architecture");
  try {
    app.save(record40);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record41 = new Record(collection);
    record41.set("careerSlug", "backend-developer");
    record41.set("careerName", "Backend Developer");
    record41.set("level", "Intermediate");
    record41.set("questionNumber", 42);
    record41.set("question", "How do you implement soft deletes in databases?");
    record41.set("explanation", "Soft deletes mark records as deleted without removing them. Enables recovery and maintains referential integrity. Add deleted_at timestamp. Filter out soft-deleted records in queries.");
    record41.set("practicalExample", "UPDATE users SET deleted_at = NOW() WHERE id = 1; SELECT * FROM users WHERE deleted_at IS NULL;");
    record41.set("keyPoints", ["soft deletes mark as deleted", "enables recovery", "maintains referential integrity"]);
    record41.set("relatedTopics", ["data integrity", "audit trail", "recovery"]);
    record41.set("difficulty", "Medium");
    record41.set("category", "Database Design");
  try {
    app.save(record41);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record42 = new Record(collection);
    record42.set("careerSlug", "backend-developer");
    record42.set("careerName", "Backend Developer");
    record42.set("level", "Advanced");
    record42.set("questionNumber", 43);
    record42.set("question", "Explain the concept of CQRS (Command Query Responsibility Segregation).");
    record42.set("explanation", "CQRS separates read and write models. Commands modify state, queries retrieve state. Enables optimization for each model. Often combined with event sourcing. Adds complexity but improves scalability.");
    record42.set("practicalExample", "Write model: normalized for updates. Read model: denormalized for queries. Synchronized via events.");
    record42.set("keyPoints", ["CQRS separates read and write", "enables optimization", "often with event sourcing"]);
    record42.set("relatedTopics", ["event sourcing", "architecture", "scalability"]);
    record42.set("difficulty", "Hard");
    record42.set("category", "Architecture");
  try {
    app.save(record42);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record43 = new Record(collection);
    record43.set("careerSlug", "backend-developer");
    record43.set("careerName", "Backend Developer");
    record43.set("level", "Intermediate");
    record43.set("questionNumber", 44);
    record43.set("question", "What is the difference between encryption and hashing?");
    record43.set("explanation", "Encryption is reversible (with key), hashing is one-way. Use hashing for passwords, encryption for sensitive data. Never store plaintext passwords. Use bcrypt or Argon2 for password hashing.");
    record43.set("practicalExample", "Hashing: password -> bcrypt -> stored hash. Encryption: data -> AES -> encrypted data (reversible with key).");
    record43.set("keyPoints", ["encryption is reversible", "hashing is one-way", "use hashing for passwords"]);
    record43.set("relatedTopics", ["cryptography", "password security", "data protection"]);
    record43.set("difficulty", "Medium");
    record43.set("category", "Security");
  try {
    app.save(record43);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record44 = new Record(collection);
    record44.set("careerSlug", "backend-developer");
    record44.set("careerName", "Backend Developer");
    record44.set("level", "Advanced");
    record44.set("questionNumber", 45);
    record44.set("question", "How do you implement feature flags in backend applications?");
    record44.set("explanation", "Feature flags enable/disable features without deployment. Useful for A/B testing, gradual rollouts, and kill switches. Store in database or configuration service. Evaluate at runtime.");
    record44.set("practicalExample", "if (featureFlags.newUI) { return newUIResponse(); } else { return oldUIResponse(); }");
    record44.set("keyPoints", ["feature flags enable/disable features", "useful for gradual rollouts", "runtime evaluation"]);
    record44.set("relatedTopics", ["deployment", "A/B testing", "configuration"]);
    record44.set("difficulty", "Hard");
    record44.set("category", "Operations");
  try {
    app.save(record44);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record45 = new Record(collection);
    record45.set("careerSlug", "backend-developer");
    record45.set("careerName", "Backend Developer");
    record45.set("level", "Intermediate");
    record45.set("questionNumber", 46);
    record45.set("question", "Explain the concept of idempotent keys for payment processing.");
    record45.set("explanation", "Idempotent keys prevent duplicate charges if request retried. Client provides unique key with request. Server checks if key processed before. Essential for payment systems.");
    record45.set("practicalExample", "POST /payments with Idempotency-Key: abc123. If retried with same key, returns cached result.");
    record45.set("keyPoints", ["idempotent keys prevent duplicates", "client provides unique key", "essential for payments"]);
    record45.set("relatedTopics", ["payment processing", "reliability", "idempotency"]);
    record45.set("difficulty", "Medium");
    record45.set("category", "Payment Processing");
  try {
    app.save(record45);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record46 = new Record(collection);
    record46.set("careerSlug", "backend-developer");
    record46.set("careerName", "Backend Developer");
    record46.set("level", "Advanced");
    record46.set("questionNumber", 47);
    record46.set("question", "What is the difference between optimistic and pessimistic locking?");
    record46.set("explanation", "Optimistic locking assumes conflicts rare, checks on update. Pessimistic locking locks resource immediately. Optimistic better for low-contention, pessimistic for high-contention.");
    record46.set("practicalExample", "Optimistic: read version, update if version matches. Pessimistic: lock row before reading.");
    record46.set("keyPoints", ["optimistic assumes conflicts rare", "pessimistic locks immediately", "choose based on contention"]);
    record46.set("relatedTopics", ["concurrency", "database locking", "transactions"]);
    record46.set("difficulty", "Hard");
    record46.set("category", "Database Design");
  try {
    app.save(record46);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record47 = new Record(collection);
    record47.set("careerSlug", "backend-developer");
    record47.set("careerName", "Backend Developer");
    record47.set("level", "Intermediate");
    record47.set("questionNumber", 48);
    record47.set("question", "How do you implement background jobs in backend applications?");
    record47.set("explanation", "Background jobs handle long-running tasks asynchronously. Use job queues (Bull, Celery). Implement retry logic and error handling. Monitor job status and failures.");
    record47.set("practicalExample", "Queue job: sendEmail(userId). Worker processes: fetch user, send email, mark complete.");
    record47.set("keyPoints", ["background jobs handle async tasks", "use job queues", "implement retry logic"]);
    record47.set("relatedTopics", ["message queues", "async processing", "scalability"]);
    record47.set("difficulty", "Medium");
    record47.set("category", "Architecture");
  try {
    app.save(record47);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record48 = new Record(collection);
    record48.set("careerSlug", "backend-developer");
    record48.set("careerName", "Backend Developer");
    record48.set("level", "Advanced");
    record48.set("questionNumber", 49);
    record48.set("question", "Explain the concept of database denormalization and when to use it.");
    record48.set("explanation", "Denormalization duplicates data to improve query performance. Trade-off: faster reads but slower writes and consistency challenges. Use for read-heavy workloads. Maintain consistency with triggers or application logic.");
    record48.set("practicalExample", "Store user name in orders table for faster queries instead of joining users table.");
    record48.set("keyPoints", ["denormalization duplicates data", "improves read performance", "use for read-heavy workloads"]);
    record48.set("relatedTopics", ["normalization", "performance", "consistency"]);
    record48.set("difficulty", "Hard");
    record48.set("category", "Database Design");
  try {
    app.save(record48);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record49 = new Record(collection);
    record49.set("careerSlug", "backend-developer");
    record49.set("careerName", "Backend Developer");
    record49.set("level", "Intermediate");
    record49.set("questionNumber", 50);
    record49.set("question", "What is the difference between REST and SOAP APIs?");
    record49.set("explanation", "REST uses HTTP methods on resources, simpler and more flexible. SOAP uses XML and is more formal, better for complex operations. REST preferred for modern APIs. SOAP still used in enterprise systems.");
    record49.set("practicalExample", "REST: GET /users/1. SOAP: POST /soap with XML envelope containing method call.");
    record49.set("keyPoints", ["REST uses HTTP methods", "SOAP uses XML", "REST simpler and more flexible"]);
    record49.set("relatedTopics", ["API design", "HTTP", "web services"]);
    record49.set("difficulty", "Medium");
    record49.set("category", "API Design");
  try {
    app.save(record49);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})
