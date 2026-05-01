/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("interviewQuestionsDatabase");

  const record0 = new Record(collection);
    record0.set("careerSlug", "backend-developer");
    record0.set("careerName", "Backend Developer");
    record0.set("level", "Beginner");
    record0.set("questionNumber", 1);
    record0.set("question", "What is SQL and what are its basic operations?");
    record0.set("explanation", "SQL (Structured Query Language) is used to manage relational databases. Basic operations include SELECT, INSERT, UPDATE, DELETE.");
    record0.set("practicalExample", "SELECT * FROM users WHERE age > 18; INSERT INTO users (name, age) VALUES ('John', 25);");
    record0.set("keyPoints", ["Query language for databases", "CRUD operations", "Relational databases", "Standardized syntax"]);
    record0.set("relatedTopics", ["Databases", "Relational Databases", "Data Management", "SQL Queries"]);
    record0.set("difficulty", "Simple");
    record0.set("category", "Technical");
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
    record1.set("question", "What is NoSQL and how does it differ from SQL?");
    record1.set("explanation", "NoSQL databases store data in non-relational formats like documents, key-value pairs, or graphs. They offer flexibility and scalability.");
    record1.set("practicalExample", "// MongoDB: db.users.insertOne({name: 'John', age: 25}); // Redis: SET user:1 '{name: John}'");
    record1.set("keyPoints", ["Non-relational databases", "Flexible schema", "Horizontal scalability", "Various data models"]);
    record1.set("relatedTopics", ["Databases", "MongoDB", "Redis", "Data Storage"]);
    record1.set("difficulty", "Simple");
    record1.set("category", "Technical");
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
    record2.set("level", "Beginner");
    record2.set("questionNumber", 3);
    record2.set("question", "What is database normalization?");
    record2.set("explanation", "Normalization is the process of organizing data to reduce redundancy and improve data integrity in relational databases.");
    record2.set("practicalExample", "// Unnormalized: users table with repeated addresses // Normalized: separate users and addresses tables with foreign key");
    record2.set("keyPoints", ["Reduces redundancy", "Improves data integrity", "Multiple normal forms", "Prevents anomalies"]);
    record2.set("relatedTopics", ["Database Design", "Relational Databases", "Data Integrity", "Schema Design"]);
    record2.set("difficulty", "Simple");
    record2.set("category", "Technical");
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
    record3.set("level", "Beginner");
    record3.set("questionNumber", 4);
    record3.set("question", "What are ACID properties in databases?");
    record3.set("explanation", "ACID (Atomicity, Consistency, Isolation, Durability) are properties that guarantee reliable database transactions.");
    record3.set("practicalExample", "Transaction: Debit account A, Credit account B. Either both succeed or both fail (Atomicity).");
    record3.set("keyPoints", ["Atomicity: all or nothing", "Consistency: valid state", "Isolation: concurrent safety", "Durability: persistent"]);
    record3.set("relatedTopics", ["Transactions", "Data Integrity", "Database Design", "Reliability"]);
    record3.set("difficulty", "Simple");
    record3.set("category", "Technical");
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
    record4.set("level", "Beginner");
    record4.set("questionNumber", 5);
    record4.set("question", "What are database indexes and why are they important?");
    record4.set("explanation", "Indexes are data structures that improve query performance by allowing faster data retrieval.");
    record4.set("practicalExample", "CREATE INDEX idx_email ON users(email); SELECT * FROM users WHERE email = 'john@example.com'; // Faster with index");
    record4.set("keyPoints", ["Improve query speed", "Trade-off: storage and write speed", "B-tree structure", "Essential for performance"]);
    record4.set("relatedTopics", ["Query Optimization", "Database Performance", "Data Structures", "SQL"]);
    record4.set("difficulty", "Simple");
    record4.set("category", "Technical");
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
    record5.set("level", "Beginner");
    record5.set("questionNumber", 6);
    record5.set("question", "What is REST API and its principles?");
    record5.set("explanation", "REST (Representational State Transfer) is an architectural style for building APIs using HTTP methods and standard conventions.");
    record5.set("practicalExample", "GET /api/users - retrieve users, POST /api/users - create user, PUT /api/users/1 - update user");
    record5.set("keyPoints", ["Uses HTTP methods", "Stateless", "Resource-based", "Standard conventions"]);
    record5.set("relatedTopics", ["API Design", "HTTP", "Web Services", "Architecture"]);
    record5.set("difficulty", "Simple");
    record5.set("category", "Technical");
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
    record6.set("level", "Beginner");
    record6.set("questionNumber", 7);
    record6.set("question", "What are HTTP methods and their purposes?");
    record6.set("explanation", "HTTP methods define the action to be performed on a resource. Common methods are GET, POST, PUT, DELETE, PATCH.");
    record6.set("practicalExample", "GET: retrieve, POST: create, PUT: replace, DELETE: remove, PATCH: partial update");
    record6.set("keyPoints", ["GET: safe and idempotent", "POST: creates resource", "PUT: replaces resource", "DELETE: removes resource"]);
    record6.set("relatedTopics", ["HTTP", "REST API", "Web Services", "API Design"]);
    record6.set("difficulty", "Simple");
    record6.set("category", "Technical");
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
    record7.set("level", "Beginner");
    record7.set("questionNumber", 8);
    record7.set("question", "What are HTTP status codes?");
    record7.set("explanation", "HTTP status codes indicate the result of an HTTP request. They are grouped into 5 categories: 1xx, 2xx, 3xx, 4xx, 5xx.");
    record7.set("practicalExample", "200: OK, 201: Created, 400: Bad Request, 401: Unauthorized, 404: Not Found, 500: Server Error");
    record7.set("keyPoints", ["2xx: success", "3xx: redirection", "4xx: client error", "5xx: server error"]);
    record7.set("relatedTopics", ["HTTP", "API Design", "Error Handling", "Web Services"]);
    record7.set("difficulty", "Simple");
    record7.set("category", "Technical");
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
    record8.set("level", "Beginner");
    record8.set("questionNumber", 9);
    record8.set("question", "What is authentication and how does it work?");
    record8.set("explanation", "Authentication verifies the identity of a user. Common methods include username/password, JWT, OAuth, and session-based auth.");
    record8.set("practicalExample", "User provides credentials, server validates, returns token or session ID for future requests.");
    record8.set("keyPoints", ["Verifies identity", "Multiple methods available", "Stateless vs stateful", "Security critical"]);
    record8.set("relatedTopics", ["Security", "Authorization", "JWT", "OAuth"]);
    record8.set("difficulty", "Simple");
    record8.set("category", "Technical");
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
    record9.set("level", "Beginner");
    record9.set("questionNumber", 10);
    record9.set("question", "What is authorization and how does it differ from authentication?");
    record9.set("explanation", "Authorization determines what authenticated users can do. Authentication verifies who they are.");
    record9.set("practicalExample", "Auth: verify user is John. Authz: John can access admin panel.");
    record9.set("keyPoints", ["Authorization: permissions", "Authentication: identity", "Role-based access", "Permission checking"]);
    record9.set("relatedTopics", ["Security", "Authentication", "Access Control", "Permissions"]);
    record9.set("difficulty", "Simple");
    record9.set("category", "Technical");
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
    record10.set("level", "Intermediate");
    record10.set("questionNumber", 11);
    record10.set("question", "What is JWT (JSON Web Token) and how does it work?");
    record10.set("explanation", "JWT is a stateless authentication method that encodes user information in a token sent with each request.");
    record10.set("practicalExample", "Header.Payload.Signature - Server signs token, client sends in Authorization header, server verifies signature.");
    record10.set("keyPoints", ["Stateless authentication", "Three parts: header, payload, signature", "Self-contained", "Scalable"]);
    record10.set("relatedTopics", ["Authentication", "Security", "Tokens", "Stateless"]);
    record10.set("difficulty", "Medium");
    record10.set("category", "Technical");
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
    record11.set("question", "What is OAuth 2.0 and how does it work?");
    record11.set("explanation", "OAuth 2.0 is an authorization framework that allows users to grant third-party applications access to their resources.");
    record11.set("practicalExample", "User clicks 'Login with Google', redirected to Google, grants permission, redirected back with authorization code.");
    record11.set("keyPoints", ["Third-party authorization", "Delegated access", "Multiple grant types", "Industry standard"]);
    record11.set("relatedTopics", ["Authentication", "Security", "Authorization", "Third-party Integration"]);
    record11.set("difficulty", "Medium");
    record11.set("category", "Technical");
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
    record12.set("question", "What is the N+1 problem in databases?");
    record12.set("explanation", "The N+1 problem occurs when a query makes one initial query plus N additional queries for related data, causing performance issues.");
    record12.set("practicalExample", "// N+1: SELECT * FROM users; for each user: SELECT * FROM posts WHERE userId = user.id; // Solution: JOIN or eager loading");
    record12.set("keyPoints", ["Performance issue", "Caused by lazy loading", "Solved with JOINs", "Eager loading solution"]);
    record12.set("relatedTopics", ["Query Optimization", "Database Performance", "Relationships", "SQL"]);
    record12.set("difficulty", "Medium");
    record12.set("category", "Technical");
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
    record13.set("question", "What is query optimization and why is it important?");
    record13.set("explanation", "Query optimization improves database query performance through indexing, query restructuring, and execution plan analysis.");
    record13.set("practicalExample", "Use indexes, avoid SELECT *, use JOINs instead of subqueries, analyze execution plans.");
    record13.set("keyPoints", ["Improves performance", "Reduces resource usage", "Indexes critical", "Execution plans"]);
    record13.set("relatedTopics", ["Database Performance", "SQL", "Indexes", "Scalability"]);
    record13.set("difficulty", "Medium");
    record13.set("category", "Technical");
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
    record14.set("level", "Intermediate");
    record14.set("questionNumber", 15);
    record14.set("question", "What is caching and how does it improve performance?");
    record14.set("explanation", "Caching stores frequently accessed data in fast-access storage to reduce database queries and improve response times.");
    record14.set("practicalExample", "Cache user data in Redis, check cache before querying database, update cache on data changes.");
    record14.set("keyPoints", ["Reduces database load", "Improves response time", "Trade-off: consistency", "Multiple cache levels"]);
    record14.set("relatedTopics", ["Performance Optimization", "Redis", "Database", "Scalability"]);
    record14.set("difficulty", "Medium");
    record14.set("category", "Technical");
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
    record15.set("level", "Intermediate");
    record15.set("questionNumber", 16);
    record15.set("question", "What is Redis and what are its use cases?");
    record15.set("explanation", "Redis is an in-memory data store used for caching, sessions, real-time analytics, and message queues.");
    record15.set("practicalExample", "SET key value, GET key, LPUSH list item, HSET hash field value");
    record15.set("keyPoints", ["In-memory storage", "Fast access", "Multiple data types", "Persistence options"]);
    record15.set("relatedTopics", ["Caching", "Databases", "Performance", "Real-time Data"]);
    record15.set("difficulty", "Medium");
    record15.set("category", "Technical");
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
    record16.set("question", "What is SQL injection and how do you prevent it?");
    record16.set("explanation", "SQL injection is a security vulnerability where attackers insert malicious SQL code. Prevention includes parameterized queries and input validation.");
    record16.set("practicalExample", "// Vulnerable: SELECT * FROM users WHERE id = ' + userId + '; // Safe: SELECT * FROM users WHERE id = ?; (with parameterized query)");
    record16.set("keyPoints", ["Security vulnerability", "Parameterized queries prevent it", "Input validation", "Prepared statements"]);
    record16.set("relatedTopics", ["Security", "SQL", "Input Validation", "Web Security"]);
    record16.set("difficulty", "Medium");
    record16.set("category", "Technical");
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
    record17.set("question", "What is XSS (Cross-Site Scripting) and how do you prevent it?");
    record17.set("explanation", "XSS is a security vulnerability where attackers inject malicious scripts. Prevention includes input sanitization and output encoding.");
    record17.set("practicalExample", "// Vulnerable: <div>{userInput}</div> // Safe: <div>{sanitize(userInput)}</div>");
    record17.set("keyPoints", ["Security vulnerability", "Input sanitization", "Output encoding", "Content Security Policy"]);
    record17.set("relatedTopics", ["Security", "Web Security", "Input Validation", "Frontend Security"]);
    record17.set("difficulty", "Medium");
    record17.set("category", "Technical");
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
    record18.set("level", "Intermediate");
    record18.set("questionNumber", 19);
    record18.set("question", "What is CSRF (Cross-Site Request Forgery) and how do you prevent it?");
    record18.set("explanation", "CSRF is an attack where a user is tricked into making unwanted requests. Prevention includes CSRF tokens and SameSite cookies.");
    record18.set("practicalExample", "Include CSRF token in forms, validate token on server, use SameSite cookie attribute.");
    record18.set("keyPoints", ["Security vulnerability", "CSRF tokens", "SameSite cookies", "Origin validation"]);
    record18.set("relatedTopics", ["Security", "Web Security", "Cookies", "Authentication"]);
    record18.set("difficulty", "Medium");
    record18.set("category", "Technical");
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
    record19.set("question", "What is HTTPS/SSL/TLS and why is it important?");
    record19.set("explanation", "HTTPS encrypts data in transit using SSL/TLS protocols, ensuring secure communication between client and server.");
    record19.set("practicalExample", "https://example.com uses SSL/TLS to encrypt data, preventing man-in-the-middle attacks.");
    record19.set("keyPoints", ["Encrypts data in transit", "Prevents eavesdropping", "Certificates required", "Industry standard"]);
    record19.set("relatedTopics", ["Security", "Encryption", "Web Security", "Certificates"]);
    record19.set("difficulty", "Medium");
    record19.set("category", "Technical");
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
    record20.set("question", "What is password hashing and salting?");
    record20.set("explanation", "Hashing converts passwords to irreversible strings. Salting adds random data to prevent rainbow table attacks.");
    record20.set("practicalExample", "bcrypt.hash(password, 10) - hashes password with salt, bcrypt.compare(password, hash) - verifies");
    record20.set("keyPoints", ["Irreversible hashing", "Salting prevents attacks", "bcrypt recommended", "Never store plain passwords"]);
    record20.set("relatedTopics", ["Security", "Authentication", "Cryptography", "Data Protection"]);
    record20.set("difficulty", "Medium");
    record20.set("category", "Technical");
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
    record21.set("level", "Intermediate");
    record21.set("questionNumber", 22);
    record21.set("question", "What is API versioning and why is it important?");
    record21.set("explanation", "API versioning allows you to maintain multiple versions of an API to support backward compatibility and gradual migration.");
    record21.set("practicalExample", "/api/v1/users, /api/v2/users - different versions with different schemas or behavior");
    record21.set("keyPoints", ["Backward compatibility", "Gradual migration", "Multiple strategies", "Prevents breaking changes"]);
    record21.set("relatedTopics", ["API Design", "REST API", "Versioning Strategies", "Maintenance"]);
    record21.set("difficulty", "Medium");
    record21.set("category", "Technical");
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
    record22.set("level", "Intermediate");
    record22.set("questionNumber", 23);
    record22.set("question", "What is rate limiting and how does it work?");
    record22.set("explanation", "Rate limiting restricts the number of requests a client can make in a time period to prevent abuse and ensure fair usage.");
    record22.set("practicalExample", "Allow 100 requests per minute per IP, return 429 Too Many Requests when exceeded.");
    record22.set("keyPoints", ["Prevents abuse", "Ensures fair usage", "Multiple strategies", "Protects resources"]);
    record22.set("relatedTopics", ["API Design", "Security", "Performance", "Scalability"]);
    record22.set("difficulty", "Medium");
    record22.set("category", "Technical");
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
    record23.set("question", "What is REST vs GraphQL?");
    record23.set("explanation", "REST uses multiple endpoints for different resources. GraphQL uses a single endpoint with flexible queries for specific data needs.");
    record23.set("practicalExample", "REST: GET /api/users/1, GET /api/users/1/posts. GraphQL: query { user(id: 1) { name posts { title } } }");
    record23.set("keyPoints", ["REST: multiple endpoints", "GraphQL: single endpoint", "GraphQL: flexible queries", "Different use cases"]);
    record23.set("relatedTopics", ["API Design", "REST API", "GraphQL", "Web Services"]);
    record23.set("difficulty", "Medium");
    record23.set("category", "Technical");
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
    record24.set("question", "What is a CDN (Content Delivery Network)?");
    record24.set("explanation", "A CDN distributes content across geographically dispersed servers to deliver content faster to users worldwide.");
    record24.set("practicalExample", "User in Asia requests image, CDN serves from nearest server in Asia instead of origin server in US.");
    record24.set("keyPoints", ["Distributed servers", "Faster content delivery", "Reduces latency", "Improves performance"]);
    record24.set("relatedTopics", ["Performance Optimization", "Infrastructure", "Scalability", "Caching"]);
    record24.set("difficulty", "Medium");
    record24.set("category", "Technical");
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
    record25.set("level", "Intermediate");
    record25.set("questionNumber", 26);
    record25.set("question", "What is load balancing and how does it work?");
    record25.set("explanation", "Load balancing distributes incoming requests across multiple servers to improve performance and reliability.");
    record25.set("practicalExample", "Client requests go to load balancer, which distributes to available servers based on algorithm (round-robin, least connections).");
    record25.set("keyPoints", ["Distributes load", "Improves performance", "Increases reliability", "Multiple algorithms"]);
    record25.set("relatedTopics", ["Scalability", "Infrastructure", "Performance", "High Availability"]);
    record25.set("difficulty", "Medium");
    record25.set("category", "Technical");
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
    record26.set("level", "Intermediate");
    record26.set("questionNumber", 27);
    record26.set("question", "What is horizontal vs vertical scaling?");
    record26.set("explanation", "Horizontal scaling adds more servers. Vertical scaling increases resources of existing servers.");
    record26.set("practicalExample", "Horizontal: add more servers to handle load. Vertical: upgrade CPU/RAM of existing server.");
    record26.set("keyPoints", ["Horizontal: add servers", "Vertical: upgrade resources", "Horizontal more scalable", "Different trade-offs"]);
    record26.set("relatedTopics", ["Scalability", "Infrastructure", "Performance", "Architecture"]);
    record26.set("difficulty", "Medium");
    record26.set("category", "Technical");
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
    record27.set("question", "What are microservices and their benefits?");
    record27.set("explanation", "Microservices is an architecture where applications are built as small, independent services that communicate via APIs.");
    record27.set("practicalExample", "User service, Product service, Order service - each with own database and deployment.");
    record27.set("keyPoints", ["Independent services", "Scalable", "Maintainable", "Technology flexibility"]);
    record27.set("relatedTopics", ["Architecture", "Scalability", "Deployment", "Service Communication"]);
    record27.set("difficulty", "Medium");
    record27.set("category", "Technical");
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
    record28.set("level", "Intermediate");
    record28.set("questionNumber", 29);
    record28.set("question", "What is an API gateway?");
    record28.set("explanation", "An API gateway is a server that acts as an intermediary between clients and microservices, handling routing, authentication, and rate limiting.");
    record28.set("practicalExample", "Client requests go to API gateway, which routes to appropriate microservice, handles auth, rate limiting, logging.");
    record28.set("keyPoints", ["Centralized entry point", "Routing", "Authentication", "Rate limiting"]);
    record28.set("relatedTopics", ["Microservices", "API Design", "Architecture", "Security"]);
    record28.set("difficulty", "Medium");
    record28.set("category", "Technical");
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
    record29.set("question", "What are message queues and their use cases?");
    record29.set("explanation", "Message queues enable asynchronous communication between services by storing messages for later processing.");
    record29.set("practicalExample", "Order service sends message to queue, Payment service processes asynchronously, Order service notified when complete.");
    record29.set("keyPoints", ["Asynchronous communication", "Decouples services", "Improves reliability", "Handles spikes"]);
    record29.set("relatedTopics", ["Asynchronous Processing", "Microservices", "Architecture", "Scalability"]);
    record29.set("difficulty", "Medium");
    record29.set("category", "Technical");
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
    record30.set("level", "Intermediate");
    record30.set("questionNumber", 31);
    record30.set("question", "What is eventual consistency?");
    record30.set("explanation", "Eventual consistency is a model where data becomes consistent across distributed systems after some time.");
    record30.set("practicalExample", "User updates profile, change propagates to all servers eventually, not immediately.");
    record30.set("keyPoints", ["Distributed systems", "Eventual synchronization", "Trade-off: consistency", "Improves availability"]);
    record30.set("relatedTopics", ["Distributed Systems", "CAP Theorem", "Databases", "Scalability"]);
    record30.set("difficulty", "Medium");
    record30.set("category", "Technical");
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
    record31.set("question", "What is idempotency in APIs?");
    record31.set("explanation", "Idempotency means that making the same request multiple times produces the same result as making it once.");
    record31.set("practicalExample", "POST /api/orders with idempotency key - same key returns same order, prevents duplicate orders.");
    record31.set("keyPoints", ["Same result on retry", "Prevents duplicates", "Idempotency keys", "Improves reliability"]);
    record31.set("relatedTopics", ["API Design", "Reliability", "Distributed Systems", "Error Handling"]);
    record31.set("difficulty", "Medium");
    record31.set("category", "Technical");
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
    record32.set("level", "Intermediate");
    record32.set("questionNumber", 33);
    record32.set("question", "What is pagination and filtering in APIs?");
    record32.set("explanation", "Pagination divides large datasets into pages. Filtering narrows results based on criteria.");
    record32.set("practicalExample", "GET /api/users?page=1&limit=10&role=admin - returns page 1 with 10 admin users.");
    record32.set("keyPoints", ["Pagination: divide data", "Filtering: narrow results", "Improves performance", "Better UX"]);
    record32.set("relatedTopics", ["API Design", "Data Management", "Performance", "Query Parameters"]);
    record32.set("difficulty", "Medium");
    record32.set("category", "Technical");
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
    record33.set("question", "What is the difference between PUT and PATCH?");
    record33.set("explanation", "PUT replaces the entire resource. PATCH applies partial updates to a resource.");
    record33.set("practicalExample", "PUT /api/users/1 - replace entire user. PATCH /api/users/1 - update only name field.");
    record33.set("keyPoints", ["PUT: full replacement", "PATCH: partial update", "Different semantics", "Different use cases"]);
    record33.set("relatedTopics", ["HTTP Methods", "REST API", "API Design", "Resource Updates"]);
    record33.set("difficulty", "Medium");
    record33.set("category", "Technical");
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
    record34.set("level", "Intermediate");
    record34.set("questionNumber", 35);
    record34.set("question", "What is error handling and logging in APIs?");
    record34.set("explanation", "Error handling returns appropriate error responses. Logging records events for debugging and monitoring.");
    record34.set("practicalExample", "try { operation() } catch (error) { logger.error(error); return { status: 500, message: 'Server error' }; }");
    record34.set("keyPoints", ["Appropriate error responses", "Logging for debugging", "Monitoring", "Error tracking"]);
    record34.set("relatedTopics", ["Error Handling", "Logging", "Debugging", "Monitoring"]);
    record34.set("difficulty", "Medium");
    record34.set("category", "Technical");
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
    record35.set("question", "What is Docker and containerization?");
    record35.set("explanation", "Docker packages applications and dependencies into containers for consistent deployment across environments.");
    record35.set("practicalExample", "Dockerfile defines image, docker build creates image, docker run starts container.");
    record35.set("keyPoints", ["Containerization", "Consistency", "Portability", "Isolation"]);
    record35.set("relatedTopics", ["DevOps", "Deployment", "Infrastructure", "Containerization"]);
    record35.set("difficulty", "Medium");
    record35.set("category", "Technical");
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
    record36.set("level", "Intermediate");
    record36.set("questionNumber", 37);
    record36.set("question", "What is Kubernetes and its benefits?");
    record36.set("explanation", "Kubernetes is an orchestration platform for managing containerized applications at scale.");
    record36.set("practicalExample", "Deploy containers, Kubernetes manages scaling, updates, and resource allocation automatically.");
    record36.set("keyPoints", ["Container orchestration", "Auto-scaling", "Self-healing", "Rolling updates"]);
    record36.set("relatedTopics", ["DevOps", "Containerization", "Deployment", "Infrastructure"]);
    record36.set("difficulty", "Medium");
    record36.set("category", "Technical");
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
    record37.set("question", "What is CI/CD and why is it important?");
    record37.set("explanation", "CI/CD automates testing and deployment. Continuous Integration tests code, Continuous Deployment releases to production.");
    record37.set("practicalExample", "Push code, CI runs tests, if pass, CD deploys to production automatically.");
    record37.set("keyPoints", ["Automated testing", "Automated deployment", "Faster releases", "Fewer errors"]);
    record37.set("relatedTopics", ["DevOps", "Deployment", "Testing", "Automation"]);
    record37.set("difficulty", "Medium");
    record37.set("category", "Technical");
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
    record38.set("level", "Intermediate");
    record38.set("questionNumber", 39);
    record38.set("question", "What is monitoring and alerting?");
    record38.set("explanation", "Monitoring tracks system health and performance. Alerting notifies when issues occur.");
    record38.set("practicalExample", "Monitor CPU usage, alert when > 80%, notify team to investigate.");
    record38.set("keyPoints", ["System health tracking", "Performance metrics", "Proactive alerts", "Incident response"]);
    record38.set("relatedTopics", ["DevOps", "Observability", "Infrastructure", "Reliability"]);
    record38.set("difficulty", "Medium");
    record38.set("category", "Technical");
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
    record39.set("level", "Advanced");
    record39.set("questionNumber", 40);
    record39.set("question", "What is the CAP theorem?");
    record39.set("explanation", "CAP theorem states that distributed systems can guarantee at most two of: Consistency, Availability, Partition tolerance.");
    record39.set("practicalExample", "Choose CA (consistent, available), CP (consistent, partition tolerant), or AP (available, partition tolerant).");
    record39.set("keyPoints", ["Consistency vs Availability", "Partition tolerance", "Trade-offs", "System design"]);
    record39.set("relatedTopics", ["Distributed Systems", "Database Design", "Scalability", "Architecture"]);
    record39.set("difficulty", "Hard");
    record39.set("category", "Technical");
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
    record40.set("question", "What is database sharding?");
    record40.set("explanation", "Sharding partitions data across multiple databases based on a shard key to improve scalability.");
    record40.set("practicalExample", "Shard by user ID: users 1-1000 on shard 1, 1001-2000 on shard 2.");
    record40.set("keyPoints", ["Horizontal partitioning", "Improves scalability", "Shard key selection critical", "Operational complexity"]);
    record40.set("relatedTopics", ["Scalability", "Database Design", "Distributed Systems", "Performance"]);
    record40.set("difficulty", "Hard");
    record40.set("category", "Technical");
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
    record41.set("level", "Advanced");
    record41.set("questionNumber", 42);
    record41.set("question", "What is database replication and clustering?");
    record41.set("explanation", "Replication copies data across servers for redundancy. Clustering groups servers for high availability.");
    record41.set("practicalExample", "Master-slave replication: writes to master, reads from slaves. Clustering: multiple nodes act as one.");
    record41.set("keyPoints", ["Redundancy", "High availability", "Failover", "Data consistency"]);
    record41.set("relatedTopics", ["High Availability", "Disaster Recovery", "Database Design", "Reliability"]);
    record41.set("difficulty", "Hard");
    record41.set("category", "Technical");
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
    record42.set("question", "What is denormalization and when is it used?");
    record42.set("explanation", "Denormalization intentionally duplicates data to improve query performance, trading consistency for speed.");
    record42.set("practicalExample", "Store user name in orders table to avoid JOIN, update name in both tables on change.");
    record42.set("keyPoints", ["Improves query performance", "Increases storage", "Consistency challenges", "Used in NoSQL"]);
    record42.set("relatedTopics", ["Database Design", "Performance Optimization", "Normalization", "Trade-offs"]);
    record42.set("difficulty", "Hard");
    record42.set("category", "Technical");
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
    record43.set("level", "Advanced");
    record43.set("questionNumber", 44);
    record43.set("question", "What is distributed transactions and their challenges?");
    record43.set("explanation", "Distributed transactions span multiple databases. Challenges include consistency, atomicity, and complexity.");
    record43.set("practicalExample", "Transfer money: debit account A in DB1, credit account B in DB2. Both must succeed or both fail.");
    record43.set("keyPoints", ["Spans multiple databases", "ACID challenges", "Two-phase commit", "Complexity"]);
    record43.set("relatedTopics", ["Distributed Systems", "Transactions", "Consistency", "Architecture"]);
    record43.set("difficulty", "Hard");
    record43.set("category", "Technical");
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
    record44.set("question", "What is synchronous vs asynchronous processing?");
    record44.set("explanation", "Synchronous waits for completion. Asynchronous continues without waiting, improving responsiveness.");
    record44.set("practicalExample", "Sync: send email, wait for response. Async: queue email, return immediately, process later.");
    record44.set("keyPoints", ["Synchronous: blocking", "Asynchronous: non-blocking", "Improves responsiveness", "Different use cases"]);
    record44.set("relatedTopics", ["Asynchronous Programming", "Performance", "Scalability", "Architecture"]);
    record44.set("difficulty", "Hard");
    record44.set("category", "Technical");
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
    record45.set("level", "Advanced");
    record45.set("questionNumber", 46);
    record45.set("question", "What are webhooks and how do they work?");
    record45.set("explanation", "Webhooks are HTTP callbacks that notify external systems when events occur.");
    record45.set("practicalExample", "Payment processed, webhook sends POST to /api/payment-webhook with payment details.");
    record45.set("keyPoints", ["Event-driven", "HTTP callbacks", "Real-time notifications", "Decoupled systems"]);
    record45.set("relatedTopics", ["Event-driven Architecture", "Integration", "Real-time", "Asynchronous"]);
    record45.set("difficulty", "Hard");
    record45.set("category", "Technical");
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
    record46.set("question", "What is database migration strategy?");
    record46.set("explanation", "Database migration strategy manages schema changes in production without downtime or data loss.");
    record46.set("practicalExample", "Add column with default, deploy code that uses new column, remove old column in next release.");
    record46.set("keyPoints", ["Zero downtime", "Backward compatibility", "Rollback capability", "Data safety"]);
    record46.set("relatedTopics", ["DevOps", "Database Design", "Deployment", "Reliability"]);
    record46.set("difficulty", "Hard");
    record46.set("category", "Technical");
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
    record47.set("level", "Advanced");
    record47.set("questionNumber", 48);
    record47.set("question", "What is infrastructure as code (IaC)?");
    record47.set("explanation", "IaC manages infrastructure through code, enabling version control, automation, and reproducibility.");
    record47.set("practicalExample", "Terraform, CloudFormation define infrastructure as code, deploy consistently across environments.");
    record47.set("keyPoints", ["Version control", "Automation", "Reproducibility", "Consistency"]);
    record47.set("relatedTopics", ["DevOps", "Infrastructure", "Automation", "Deployment"]);
    record47.set("difficulty", "Hard");
    record47.set("category", "Technical");
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
    record48.set("question", "What is stateless vs stateful services?");
    record48.set("explanation", "Stateless services don't store client state, enabling horizontal scaling. Stateful services maintain state.");
    record48.set("practicalExample", "Stateless: API server, can add more instances. Stateful: database, requires replication.");
    record48.set("keyPoints", ["Stateless: scalable", "Stateful: complex", "Session management", "Scalability"]);
    record48.set("relatedTopics", ["Architecture", "Scalability", "Distributed Systems", "Design Patterns"]);
    record48.set("difficulty", "Hard");
    record48.set("category", "Technical");
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
    record49.set("level", "Advanced");
    record49.set("questionNumber", 50);
    record49.set("question", "What are API design best practices?");
    record49.set("explanation", "Best practices include versioning, consistent naming, proper status codes, documentation, and security.");
    record49.set("practicalExample", "Use /api/v1/users, consistent naming, return 201 for creation, document with OpenAPI, validate input.");
    record49.set("keyPoints", ["Versioning", "Consistency", "Documentation", "Security", "Error handling"]);
    record49.set("relatedTopics", ["API Design", "REST API", "Documentation", "Best Practices"]);
    record49.set("difficulty", "Hard");
    record49.set("category", "Technical");
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
