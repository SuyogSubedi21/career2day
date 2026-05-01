/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("interviewQuestionsDatabase");

  const record0 = new Record(collection);
    record0.set("careerSlug", "full-stack-developer");
    record0.set("careerName", "Full Stack Developer");
    record0.set("level", "Beginner");
    record0.set("questionNumber", 1);
    record0.set("question", "What is the MERN stack and what are its components?");
    record0.set("explanation", "MERN = MongoDB (database), Express (backend), React (frontend), Node.js (runtime). Full JavaScript stack enables code reuse. MongoDB is NoSQL, Express handles routing, React manages UI, Node.js runs server.");
    record0.set("practicalExample", "Frontend: React components. Backend: Express API. Database: MongoDB collections. Runtime: Node.js");
    record0.set("keyPoints", ["MERN is full JavaScript stack", "MongoDB for data", "Express for API", "React for UI"]);
    record0.set("relatedTopics", ["MEAN", "LAMP", "full-stack architecture"]);
    record0.set("difficulty", "Simple");
    record0.set("category", "Full Stack Architecture");
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
    record1.set("careerSlug", "full-stack-developer");
    record1.set("careerName", "Full Stack Developer");
    record1.set("level", "Intermediate");
    record1.set("questionNumber", 2);
    record1.set("question", "Explain the concept of full-stack authentication flow.");
    record1.set("explanation", "User logs in with credentials. Backend validates and returns JWT token. Frontend stores token and includes in requests. Backend verifies token on protected routes. Logout clears token.");
    record1.set("practicalExample", "1. POST /login with credentials. 2. Backend returns JWT. 3. Frontend stores in localStorage. 4. Include in Authorization header. 5. Backend verifies token.");
    record1.set("keyPoints", ["JWT for stateless auth", "token in Authorization header", "verify on protected routes"]);
    record1.set("relatedTopics", ["JWT", "session management", "security"]);
    record1.set("difficulty", "Medium");
    record1.set("category", "Authentication");
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
    record2.set("careerSlug", "full-stack-developer");
    record2.set("careerName", "Full Stack Developer");
    record2.set("level", "Intermediate");
    record2.set("questionNumber", 3);
    record2.set("question", "How do you handle state management in full-stack applications?");
    record2.set("explanation", "Frontend: React state, Context API, Redux for complex state. Backend: database for persistent state, cache for temporary state. Synchronize via API calls. Consider eventual consistency.");
    record2.set("practicalExample", "Frontend: useState for local state, Redux for global state. Backend: database for persistence, Redis for cache.");
    record2.set("keyPoints", ["frontend state management", "backend state persistence", "synchronization via API"]);
    record2.set("relatedTopics", ["Redux", "Context API", "database design"]);
    record2.set("difficulty", "Medium");
    record2.set("category", "State Management");
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
    record3.set("careerSlug", "full-stack-developer");
    record3.set("careerName", "Full Stack Developer");
    record3.set("level", "Intermediate");
    record3.set("questionNumber", 4);
    record3.set("question", "Explain the concept of API design for full-stack applications.");
    record3.set("explanation", "Design RESTful APIs with clear endpoints, proper HTTP methods, meaningful status codes. Frontend consumes API. Versioning for backward compatibility. Documentation essential. Consider pagination, filtering, sorting.");
    record3.set("practicalExample", "GET /api/v1/users - list users. POST /api/v1/users - create user. PUT /api/v1/users/1 - update user.");
    record3.set("keyPoints", ["RESTful design", "proper HTTP methods", "versioning", "documentation"]);
    record3.set("relatedTopics", ["REST", "API design", "documentation"]);
    record3.set("difficulty", "Medium");
    record3.set("category", "API Design");
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
    record4.set("careerSlug", "full-stack-developer");
    record4.set("careerName", "Full Stack Developer");
    record4.set("level", "Advanced");
    record4.set("questionNumber", 5);
    record4.set("question", "How do you implement real-time features in full-stack applications?");
    record4.set("explanation", "Use WebSockets for bidirectional communication. Frontend connects to WebSocket server. Backend broadcasts updates to all connected clients. Handle reconnection and message ordering.");
    record4.set("practicalExample", "Socket.io: client connects, server emits events, client receives updates in real-time.");
    record4.set("keyPoints", ["WebSockets for real-time", "bidirectional communication", "broadcast updates"]);
    record4.set("relatedTopics", ["WebSockets", "Socket.io", "real-time"]);
    record4.set("difficulty", "Hard");
    record4.set("category", "Real-time Features");
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
    record5.set("careerSlug", "full-stack-developer");
    record5.set("careerName", "Full Stack Developer");
    record5.set("level", "Intermediate");
    record5.set("questionNumber", 6);
    record5.set("question", "What is the difference between client-side and server-side rendering?");
    record5.set("explanation", "Client-side rendering: JavaScript renders HTML in browser. Server-side rendering: server sends HTML. CSR better for interactivity, SSR better for SEO and initial load. Next.js enables both.");
    record5.set("practicalExample", "CSR: React renders in browser. SSR: Next.js renders on server, sends HTML.");
    record5.set("keyPoints", ["CSR renders in browser", "SSR renders on server", "SSR better for SEO"]);
    record5.set("relatedTopics", ["Next.js", "SEO", "performance"]);
    record5.set("difficulty", "Medium");
    record5.set("category", "Rendering");
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
    record6.set("careerSlug", "full-stack-developer");
    record6.set("careerName", "Full Stack Developer");
    record6.set("level", "Intermediate");
    record6.set("questionNumber", 7);
    record6.set("question", "How do you handle file uploads in full-stack applications?");
    record6.set("explanation", "Frontend: form with file input, send to backend. Backend: validate, store securely (cloud storage), return URL. Frontend: display file. Handle progress and errors.");
    record6.set("practicalExample", "Frontend: FormData with file. Backend: validate MIME type, upload to S3, return URL.");
    record6.set("keyPoints", ["validate file type and size", "store securely", "return URL for access"]);
    record6.set("relatedTopics", ["file storage", "cloud storage", "security"]);
    record6.set("difficulty", "Medium");
    record6.set("category", "File Handling");
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
    record7.set("careerSlug", "full-stack-developer");
    record7.set("careerName", "Full Stack Developer");
    record7.set("level", "Advanced");
    record7.set("questionNumber", 8);
    record7.set("question", "Explain the concept of deployment and DevOps for full-stack applications.");
    record7.set("explanation", "Deployment: push code to production. DevOps: automate deployment, testing, monitoring. Use CI/CD pipelines (GitHub Actions, Jenkins). Containerize with Docker. Orchestrate with Kubernetes.");
    record7.set("practicalExample", "Push to GitHub -> CI/CD pipeline runs tests -> builds Docker image -> deploys to Kubernetes.");
    record7.set("keyPoints", ["CI/CD automation", "Docker containerization", "Kubernetes orchestration"]);
    record7.set("relatedTopics", ["Docker", "Kubernetes", "CI/CD"]);
    record7.set("difficulty", "Hard");
    record7.set("category", "DevOps");
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
    record8.set("careerSlug", "full-stack-developer");
    record8.set("careerName", "Full Stack Developer");
    record8.set("level", "Intermediate");
    record8.set("questionNumber", 9);
    record8.set("question", "How do you handle errors and exceptions across full-stack applications?");
    record8.set("explanation", "Frontend: try/catch, error boundaries, user-friendly messages. Backend: proper status codes, error logging, meaningful messages. Avoid exposing sensitive info. Implement error tracking (Sentry).");
    record8.set("practicalExample", "Frontend: catch API errors, show toast. Backend: return 400 with error message, log to Sentry.");
    record8.set("keyPoints", ["frontend error handling", "backend error handling", "error tracking"]);
    record8.set("relatedTopics", ["error handling", "logging", "monitoring"]);
    record8.set("difficulty", "Medium");
    record8.set("category", "Error Handling");
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
    record9.set("careerSlug", "full-stack-developer");
    record9.set("careerName", "Full Stack Developer");
    record9.set("level", "Advanced");
    record9.set("questionNumber", 10);
    record9.set("question", "What is the difference between monolithic and microservices architecture?");
    record9.set("explanation", "Monolithic: single codebase, single deployment. Microservices: multiple services, independent deployment. Monolithic simpler, microservices more scalable. Choose based on team size and complexity.");
    record9.set("practicalExample", "Monolithic: one Node.js app with all features. Microservices: separate services for users, orders, payments.");
    record9.set("keyPoints", ["monolithic is simpler", "microservices more scalable", "choose based on needs"]);
    record9.set("relatedTopics", ["microservices", "architecture", "scalability"]);
    record9.set("difficulty", "Hard");
    record9.set("category", "Architecture");
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
    record10.set("careerSlug", "full-stack-developer");
    record10.set("careerName", "Full Stack Developer");
    record10.set("level", "Intermediate");
    record10.set("questionNumber", 11);
    record10.set("question", "How do you implement search functionality in full-stack applications?");
    record10.set("explanation", "Frontend: search input with debouncing. Backend: query database or search engine (Elasticsearch). Return results with pagination. Implement filtering and sorting.");
    record10.set("practicalExample", "Frontend: debounced input -> API call. Backend: Elasticsearch query -> return results.");
    record10.set("keyPoints", ["debounce search input", "use search engine", "pagination and filtering"]);
    record10.set("relatedTopics", ["Elasticsearch", "search", "performance"]);
    record10.set("difficulty", "Medium");
    record10.set("category", "Search");
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
    record11.set("careerSlug", "full-stack-developer");
    record11.set("careerName", "Full Stack Developer");
    record11.set("level", "Intermediate");
    record11.set("questionNumber", 12);
    record11.set("question", "Explain the concept of caching in full-stack applications.");
    record11.set("explanation", "Frontend: browser cache, localStorage, service workers. Backend: Redis, database query cache. HTTP caching with headers. Reduces load and improves performance.");
    record11.set("practicalExample", "Frontend: cache API responses. Backend: Redis for frequently accessed data. HTTP: Cache-Control headers.");
    record11.set("keyPoints", ["frontend caching", "backend caching", "HTTP caching"]);
    record11.set("relatedTopics", ["Redis", "performance", "cache invalidation"]);
    record11.set("difficulty", "Medium");
    record11.set("category", "Performance");
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
    record12.set("careerSlug", "full-stack-developer");
    record12.set("careerName", "Full Stack Developer");
    record12.set("level", "Advanced");
    record12.set("questionNumber", 13);
    record12.set("question", "How do you implement pagination in full-stack applications?");
    record12.set("explanation", "Frontend: display page controls, fetch data for selected page. Backend: implement offset/limit or cursor-based pagination. Return total count and has_more flag. Optimize queries.");
    record12.set("practicalExample", "Frontend: page buttons. Backend: GET /api/users?page=1&limit=10. Return {data, total, hasMore}.");
    record12.set("keyPoints", ["frontend pagination UI", "backend pagination logic", "optimize queries"]);
    record12.set("relatedTopics", ["API design", "performance", "database queries"]);
    record12.set("difficulty", "Medium");
    record12.set("category", "Data Handling");
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
    record13.set("careerSlug", "full-stack-developer");
    record13.set("careerName", "Full Stack Developer");
    record13.set("level", "Intermediate");
    record13.set("questionNumber", 14);
    record13.set("question", "What is the difference between SQL and NoSQL for full-stack applications?");
    record13.set("explanation", "SQL: structured, ACID, relational. NoSQL: flexible, eventual consistency, scalable. SQL for relational data, NoSQL for unstructured. Many apps use both (polyglot persistence).");
    record13.set("practicalExample", "SQL: PostgreSQL for users and orders. NoSQL: MongoDB for logs and analytics.");
    record13.set("keyPoints", ["SQL structured", "NoSQL flexible", "use both when appropriate"]);
    record13.set("relatedTopics", ["database design", "ACID", "CAP theorem"]);
    record13.set("difficulty", "Medium");
    record13.set("category", "Database Design");
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
    record14.set("careerSlug", "full-stack-developer");
    record14.set("careerName", "Full Stack Developer");
    record14.set("level", "Advanced");
    record14.set("questionNumber", 15);
    record14.set("question", "How do you implement testing in full-stack applications?");
    record14.set("explanation", "Frontend: unit tests (Jest), component tests (React Testing Library), E2E tests (Cypress). Backend: unit tests, integration tests, API tests. Aim for high coverage. Automate in CI/CD.");
    record14.set("practicalExample", "Frontend: test components. Backend: test API endpoints. E2E: test user flows.");
    record14.set("keyPoints", ["frontend testing", "backend testing", "E2E testing"]);
    record14.set("relatedTopics", ["Jest", "React Testing Library", "Cypress"]);
    record14.set("difficulty", "Hard");
    record14.set("category", "Testing");
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
    record15.set("careerSlug", "full-stack-developer");
    record15.set("careerName", "Full Stack Developer");
    record15.set("level", "Intermediate");
    record15.set("questionNumber", 16);
    record15.set("question", "Explain the concept of API versioning in full-stack applications.");
    record15.set("explanation", "Versioning manages API changes without breaking clients. Strategies: URL versioning (/v1, /v2), header versioning. Maintain backward compatibility. Plan deprecation.");
    record15.set("practicalExample", "GET /api/v1/users vs GET /api/v2/users with different response formats.");
    record15.set("keyPoints", ["versioning manages changes", "backward compatibility", "deprecation planning"]);
    record15.set("relatedTopics", ["API design", "backward compatibility"]);
    record15.set("difficulty", "Medium");
    record15.set("category", "API Design");
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
    record16.set("careerSlug", "full-stack-developer");
    record16.set("careerName", "Full Stack Developer");
    record16.set("level", "Advanced");
    record16.set("questionNumber", 17);
    record16.set("question", "How do you handle security in full-stack applications?");
    record16.set("explanation", "Frontend: HTTPS, secure token storage, input validation, XSS prevention. Backend: authentication, authorization, SQL injection prevention, rate limiting, CORS. Use security headers.");
    record16.set("practicalExample", "Frontend: validate input, use HTTPS. Backend: JWT auth, parameterized queries, rate limiting.");
    record16.set("keyPoints", ["frontend security", "backend security", "HTTPS", "authentication"]);
    record16.set("relatedTopics", ["HTTPS", "JWT", "CORS", "security headers"]);
    record16.set("difficulty", "Hard");
    record16.set("category", "Security");
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
    record17.set("careerSlug", "full-stack-developer");
    record17.set("careerName", "Full Stack Developer");
    record17.set("level", "Intermediate");
    record17.set("questionNumber", 18);
    record17.set("question", "What is the difference between synchronous and asynchronous operations in full-stack?");
    record17.set("explanation", "Synchronous: client waits for response. Asynchronous: client doesn't wait. Use async for long operations (file uploads, email). Improves UX and scalability.");
    record17.set("practicalExample", "Synchronous: POST /process, wait. Asynchronous: POST /process, return job ID, poll for status.");
    record17.set("keyPoints", ["synchronous blocks", "asynchronous improves UX", "use for long operations"]);
    record17.set("relatedTopics", ["async/await", "message queues", "background jobs"]);
    record17.set("difficulty", "Medium");
    record17.set("category", "Architecture");
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
    record18.set("careerSlug", "full-stack-developer");
    record18.set("careerName", "Full Stack Developer");
    record18.set("level", "Advanced");
    record18.set("questionNumber", 19);
    record18.set("question", "Explain the concept of database transactions in full-stack applications.");
    record18.set("explanation", "Transactions ensure data consistency. ACID properties guarantee reliability. Use for operations affecting multiple tables. Implement rollback on failure.");
    record18.set("practicalExample", "Transfer money: debit account A, credit account B. If either fails, rollback both.");
    record18.set("keyPoints", ["transactions ensure consistency", "ACID properties", "rollback on failure"]);
    record18.set("relatedTopics", ["ACID", "database design", "consistency"]);
    record18.set("difficulty", "Hard");
    record18.set("category", "Database Design");
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
    record19.set("careerSlug", "full-stack-developer");
    record19.set("careerName", "Full Stack Developer");
    record19.set("level", "Intermediate");
    record19.set("questionNumber", 20);
    record19.set("question", "How do you implement form validation in full-stack applications?");
    record19.set("explanation", "Frontend: real-time validation for UX. Backend: validation for security. Use libraries (Formik, Yup). Validate type, length, format. Return meaningful errors.");
    record19.set("practicalExample", "Frontend: validate email format. Backend: validate email uniqueness, required fields.");
    record19.set("keyPoints", ["frontend validation for UX", "backend validation for security", "meaningful errors"]);
    record19.set("relatedTopics", ["form handling", "validation libraries", "security"]);
    record19.set("difficulty", "Medium");
    record19.set("category", "Form Handling");
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
    record20.set("careerSlug", "full-stack-developer");
    record20.set("careerName", "Full Stack Developer");
    record20.set("level", "Advanced");
    record20.set("questionNumber", 21);
    record20.set("question", "What is the difference between REST and GraphQL for full-stack applications?");
    record20.set("explanation", "REST: multiple endpoints, over/under-fetching. GraphQL: single endpoint, exact data needed. GraphQL more flexible but more complex. Choose based on needs.");
    record20.set("practicalExample", "REST: GET /users/1, GET /users/1/posts. GraphQL: query { user(id: 1) { name posts { title } } }");
    record20.set("keyPoints", ["REST multiple endpoints", "GraphQL single endpoint", "GraphQL more flexible"]);
    record20.set("relatedTopics", ["REST", "GraphQL", "API design"]);
    record20.set("difficulty", "Hard");
    record20.set("category", "API Design");
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
    record21.set("careerSlug", "full-stack-developer");
    record21.set("careerName", "Full Stack Developer");
    record21.set("level", "Intermediate");
    record21.set("questionNumber", 22);
    record21.set("question", "How do you handle performance optimization in full-stack applications?");
    record21.set("explanation", "Frontend: code splitting, lazy loading, image optimization, caching. Backend: database indexing, caching, query optimization. Monitor with tools like Lighthouse.");
    record21.set("practicalExample", "Frontend: lazy load components. Backend: index frequently queried columns. Cache API responses.");
    record21.set("keyPoints", ["frontend optimization", "backend optimization", "monitoring"]);
    record21.set("relatedTopics", ["performance", "caching", "optimization"]);
    record21.set("difficulty", "Medium");
    record21.set("category", "Performance");
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
    record22.set("careerSlug", "full-stack-developer");
    record22.set("careerName", "Full Stack Developer");
    record22.set("level", "Advanced");
    record22.set("questionNumber", 23);
    record22.set("question", "Explain the concept of load balancing in full-stack applications.");
    record22.set("explanation", "Load balancing distributes requests across servers. Improves availability and scalability. Algorithms: round-robin, least connections. Use reverse proxy (Nginx, HAProxy).");
    record22.set("practicalExample", "Requests distributed to Server 1, Server 2, Server 3 in rotation.");
    record22.set("keyPoints", ["load balancing distributes requests", "improves availability", "various algorithms"]);
    record22.set("relatedTopics", ["horizontal scaling", "failover", "infrastructure"]);
    record22.set("difficulty", "Hard");
    record22.set("category", "Infrastructure");
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
    record23.set("careerSlug", "full-stack-developer");
    record23.set("careerName", "Full Stack Developer");
    record23.set("level", "Intermediate");
    record23.set("questionNumber", 24);
    record23.set("question", "How do you implement logging and monitoring in full-stack applications?");
    record23.set("explanation", "Frontend: error tracking (Sentry), analytics. Backend: structured logging, centralized logging (ELK), metrics (Prometheus). Monitor performance and errors.");
    record23.set("practicalExample", "Frontend: Sentry for errors. Backend: ELK for logs, Prometheus for metrics.");
    record23.set("keyPoints", ["frontend error tracking", "backend logging", "monitoring"]);
    record23.set("relatedTopics", ["Sentry", "ELK", "Prometheus"]);
    record23.set("difficulty", "Medium");
    record23.set("category", "Operations");
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
    record24.set("careerSlug", "full-stack-developer");
    record24.set("careerName", "Full Stack Developer");
    record24.set("level", "Advanced");
    record24.set("questionNumber", 25);
    record24.set("question", "What is the difference between stateful and stateless services in full-stack?");
    record24.set("explanation", "Stateless services don't store client context, enabling easy scaling. Stateful services maintain context. Prefer stateless. Use external storage for state (Redis, database).");
    record24.set("practicalExample", "Stateless: each request contains all info. Stateful: server remembers session.");
    record24.set("keyPoints", ["stateless enables scaling", "stateful maintains context", "prefer stateless"]);
    record24.set("relatedTopics", ["scalability", "session management", "architecture"]);
    record24.set("difficulty", "Hard");
    record24.set("category", "Architecture");
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
    record25.set("careerSlug", "full-stack-developer");
    record25.set("careerName", "Full Stack Developer");
    record25.set("level", "Intermediate");
    record25.set("questionNumber", 26);
    record25.set("question", "How do you implement notifications in full-stack applications?");
    record25.set("explanation", "Email: send via SMTP or service (SendGrid). Push notifications: service workers. In-app: WebSockets or polling. SMS: Twilio. Choose based on use case.");
    record25.set("practicalExample", "Email: SendGrid. Push: service workers. In-app: WebSockets.");
    record25.set("keyPoints", ["email notifications", "push notifications", "in-app notifications"]);
    record25.set("relatedTopics", ["WebSockets", "service workers", "email services"]);
    record25.set("difficulty", "Medium");
    record25.set("category", "Notifications");
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
    record26.set("careerSlug", "full-stack-developer");
    record26.set("careerName", "Full Stack Developer");
    record26.set("level", "Advanced");
    record26.set("questionNumber", 27);
    record26.set("question", "Explain the concept of database replication in full-stack applications.");
    record26.set("explanation", "Replication copies data across instances. Enables high availability and read scaling. Master-slave: writes to master, reads from slaves. Trade-off: consistency vs availability.");
    record26.set("practicalExample", "Master database replicates to Slave 1 and Slave 2. Reads from slaves, writes to master.");
    record26.set("keyPoints", ["replication enables high availability", "read scaling", "consistency trade-off"]);
    record26.set("relatedTopics", ["high availability", "disaster recovery", "consistency"]);
    record26.set("difficulty", "Hard");
    record26.set("category", "Database Design");
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
    record27.set("careerSlug", "full-stack-developer");
    record27.set("careerName", "Full Stack Developer");
    record27.set("level", "Intermediate");
    record27.set("questionNumber", 28);
    record27.set("question", "How do you handle CORS in full-stack applications?");
    record27.set("explanation", "CORS controls cross-origin access. Configure on backend by setting headers. Specify allowed origins, methods, headers. Handle preflight requests.");
    record27.set("practicalExample", "Backend: res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');");
    record27.set("keyPoints", ["CORS controls cross-origin access", "configure via headers", "handle preflight"]);
    record27.set("relatedTopics", ["same-origin policy", "preflight requests"]);
    record27.set("difficulty", "Medium");
    record27.set("category", "Security");
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
    record28.set("careerSlug", "full-stack-developer");
    record28.set("careerName", "Full Stack Developer");
    record28.set("level", "Advanced");
    record28.set("questionNumber", 29);
    record28.set("question", "What is the difference between horizontal and vertical scaling in full-stack?");
    record28.set("explanation", "Vertical: add resources to single server. Horizontal: add more servers. Horizontal preferred for distributed systems. Vertical has limits.");
    record28.set("practicalExample", "Vertical: upgrade server RAM. Horizontal: add more servers to load balancer.");
    record28.set("keyPoints", ["vertical adds resources", "horizontal adds servers", "horizontal preferred"]);
    record28.set("relatedTopics", ["scalability", "load balancing", "infrastructure"]);
    record28.set("difficulty", "Hard");
    record28.set("category", "Infrastructure");
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
    record29.set("careerSlug", "full-stack-developer");
    record29.set("careerName", "Full Stack Developer");
    record29.set("level", "Intermediate");
    record29.set("questionNumber", 30);
    record29.set("question", "How do you implement rate limiting in full-stack applications?");
    record29.set("explanation", "Rate limiting restricts requests per time period. Prevent abuse and DDoS. Implement on backend using tokens or sliding windows. Return 429 status when exceeded.");
    record29.set("practicalExample", "Allow 100 requests per minute per IP. Return 429 Too Many Requests when exceeded.");
    record29.set("keyPoints", ["rate limiting prevents abuse", "implement on backend", "return 429 status"]);
    record29.set("relatedTopics", ["security", "DDoS protection", "API security"]);
    record29.set("difficulty", "Medium");
    record29.set("category", "Security");
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
    record30.set("careerSlug", "full-stack-developer");
    record30.set("careerName", "Full Stack Developer");
    record30.set("level", "Advanced");
    record30.set("questionNumber", 31);
    record30.set("question", "Explain the concept of database sharding in full-stack applications.");
    record30.set("explanation", "Sharding partitions data across databases. Enables horizontal scaling for large datasets. Trade-off: complexity in querying. Use when single database can't handle volume.");
    record30.set("practicalExample", "Shard by user_id: users 1-1000 on Shard 1, 1001-2000 on Shard 2.");
    record30.set("keyPoints", ["sharding partitions data", "enables horizontal scaling", "adds complexity"]);
    record30.set("relatedTopics", ["horizontal scaling", "consistency", "distributed systems"]);
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
    record31.set("careerSlug", "full-stack-developer");
    record31.set("careerName", "Full Stack Developer");
    record31.set("level", "Intermediate");
    record31.set("questionNumber", 32);
    record31.set("question", "How do you implement soft deletes in full-stack applications?");
    record31.set("explanation", "Soft deletes mark records as deleted without removing. Enables recovery and maintains referential integrity. Add deleted_at timestamp. Filter in queries.");
    record31.set("practicalExample", "UPDATE users SET deleted_at = NOW() WHERE id = 1; SELECT * FROM users WHERE deleted_at IS NULL;");
    record31.set("keyPoints", ["soft deletes mark as deleted", "enables recovery", "maintains integrity"]);
    record31.set("relatedTopics", ["data integrity", "audit trail", "recovery"]);
    record31.set("difficulty", "Medium");
    record31.set("category", "Database Design");
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
    record32.set("careerSlug", "full-stack-developer");
    record32.set("careerName", "Full Stack Developer");
    record32.set("level", "Advanced");
    record32.set("questionNumber", 33);
    record32.set("question", "What is the difference between push and pull architectures in full-stack?");
    record32.set("explanation", "Push: server sends data to clients (WebSockets). Pull: clients request data (polling). Push is real-time but harder to scale. Pull is simpler but less responsive.");
    record32.set("practicalExample", "Push: WebSocket server sends updates. Pull: client polls /api/updates every 5 seconds.");
    record32.set("keyPoints", ["push is real-time", "pull is simpler", "choose based on needs"]);
    record32.set("relatedTopics", ["real-time", "WebSockets", "polling"]);
    record32.set("difficulty", "Hard");
    record32.set("category", "Architecture");
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
    record33.set("careerSlug", "full-stack-developer");
    record33.set("careerName", "Full Stack Developer");
    record33.set("level", "Intermediate");
    record33.set("questionNumber", 34);
    record33.set("question", "How do you implement webhooks in full-stack applications?");
    record33.set("explanation", "Webhooks are HTTP callbacks triggered by events. Enable real-time notifications. Implement with retry logic and signature verification. Alternative to polling.");
    record33.set("practicalExample", "Payment processed -> webhook POST to /webhooks/payment with event data.");
    record33.set("keyPoints", ["webhooks are HTTP callbacks", "triggered by events", "enable real-time notifications"]);
    record33.set("relatedTopics", ["event-driven architecture", "integrations"]);
    record33.set("difficulty", "Medium");
    record33.set("category", "Integration");
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
    record34.set("careerSlug", "full-stack-developer");
    record34.set("careerName", "Full Stack Developer");
    record34.set("level", "Advanced");
    record34.set("questionNumber", 35);
    record34.set("question", "Explain the concept of circuit breaker pattern in full-stack applications.");
    record34.set("explanation", "Circuit breaker prevents cascading failures. States: closed (normal), open (failing), half-open (testing). Enables graceful degradation and recovery.");
    record34.set("practicalExample", "Service A calls Service B. If B fails repeatedly, circuit opens and A stops calling B temporarily.");
    record34.set("keyPoints", ["circuit breaker prevents cascading failures", "three states", "enables graceful degradation"]);
    record34.set("relatedTopics", ["resilience", "microservices", "fault tolerance"]);
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
    record35.set("careerSlug", "full-stack-developer");
    record35.set("careerName", "Full Stack Developer");
    record35.set("level", "Intermediate");
    record35.set("questionNumber", 36);
    record35.set("question", "How do you implement feature flags in full-stack applications?");
    record35.set("explanation", "Feature flags enable/disable features without deployment. Useful for A/B testing and gradual rollouts. Store in database or configuration service. Evaluate at runtime.");
    record35.set("practicalExample", "if (featureFlags.newUI) { return newUIResponse(); } else { return oldUIResponse(); }");
    record35.set("keyPoints", ["feature flags enable/disable features", "useful for gradual rollouts", "runtime evaluation"]);
    record35.set("relatedTopics", ["deployment", "A/B testing", "configuration"]);
    record35.set("difficulty", "Medium");
    record35.set("category", "Operations");
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
    record36.set("careerSlug", "full-stack-developer");
    record36.set("careerName", "Full Stack Developer");
    record36.set("level", "Advanced");
    record36.set("questionNumber", 37);
    record36.set("question", "What is the difference between optimistic and pessimistic locking in full-stack?");
    record36.set("explanation", "Optimistic: assumes conflicts rare, checks on update. Pessimistic: locks immediately. Optimistic better for low-contention, pessimistic for high-contention.");
    record36.set("practicalExample", "Optimistic: read version, update if version matches. Pessimistic: lock row before reading.");
    record36.set("keyPoints", ["optimistic assumes conflicts rare", "pessimistic locks immediately", "choose based on contention"]);
    record36.set("relatedTopics", ["concurrency", "database locking", "transactions"]);
    record36.set("difficulty", "Hard");
    record36.set("category", "Database Design");
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
    record37.set("careerSlug", "full-stack-developer");
    record37.set("careerName", "Full Stack Developer");
    record37.set("level", "Intermediate");
    record37.set("questionNumber", 38);
    record37.set("question", "How do you implement background jobs in full-stack applications?");
    record37.set("explanation", "Background jobs handle long-running tasks asynchronously. Use job queues (Bull, Celery). Implement retry logic and error handling. Monitor job status.");
    record37.set("practicalExample", "Queue job: sendEmail(userId). Worker processes: fetch user, send email, mark complete.");
    record37.set("keyPoints", ["background jobs handle async tasks", "use job queues", "implement retry logic"]);
    record37.set("relatedTopics", ["message queues", "async processing", "scalability"]);
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
    record38.set("careerSlug", "full-stack-developer");
    record38.set("careerName", "Full Stack Developer");
    record38.set("level", "Advanced");
    record38.set("questionNumber", 39);
    record38.set("question", "Explain the concept of CQRS in full-stack applications.");
    record38.set("explanation", "CQRS separates read and write models. Commands modify state, queries retrieve state. Enables optimization for each model. Often combined with event sourcing.");
    record38.set("practicalExample", "Write model: normalized for updates. Read model: denormalized for queries. Synchronized via events.");
    record38.set("keyPoints", ["CQRS separates read and write", "enables optimization", "often with event sourcing"]);
    record38.set("relatedTopics", ["event sourcing", "architecture", "scalability"]);
    record38.set("difficulty", "Hard");
    record38.set("category", "Architecture");
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
    record39.set("careerSlug", "full-stack-developer");
    record39.set("careerName", "Full Stack Developer");
    record39.set("level", "Intermediate");
    record39.set("questionNumber", 40);
    record39.set("question", "How do you implement idempotent keys in full-stack applications?");
    record39.set("explanation", "Idempotent keys prevent duplicate operations if request retried. Client provides unique key. Server checks if key processed before. Essential for payments.");
    record39.set("practicalExample", "POST /payments with Idempotency-Key: abc123. If retried with same key, returns cached result.");
    record39.set("keyPoints", ["idempotent keys prevent duplicates", "client provides unique key", "essential for payments"]);
    record39.set("relatedTopics", ["payment processing", "reliability", "idempotency"]);
    record39.set("difficulty", "Medium");
    record39.set("category", "Payment Processing");
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
    record40.set("careerSlug", "full-stack-developer");
    record40.set("careerName", "Full Stack Developer");
    record40.set("level", "Advanced");
    record40.set("questionNumber", 41);
    record40.set("question", "What is the difference between encryption and hashing in full-stack?");
    record40.set("explanation", "Encryption is reversible (with key), hashing is one-way. Use hashing for passwords, encryption for sensitive data. Never store plaintext passwords.");
    record40.set("practicalExample", "Hashing: password -> bcrypt -> stored hash. Encryption: data -> AES -> encrypted data.");
    record40.set("keyPoints", ["encryption is reversible", "hashing is one-way", "use hashing for passwords"]);
    record40.set("relatedTopics", ["cryptography", "password security", "data protection"]);
    record40.set("difficulty", "Hard");
    record40.set("category", "Security");
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
    record41.set("careerSlug", "full-stack-developer");
    record41.set("careerName", "Full Stack Developer");
    record41.set("level", "Intermediate");
    record41.set("questionNumber", 42);
    record41.set("question", "How do you implement database denormalization in full-stack applications?");
    record41.set("explanation", "Denormalization duplicates data to improve query performance. Trade-off: faster reads but slower writes. Use for read-heavy workloads. Maintain consistency.");
    record41.set("practicalExample", "Store user name in orders table for faster queries instead of joining users table.");
    record41.set("keyPoints", ["denormalization duplicates data", "improves read performance", "use for read-heavy workloads"]);
    record41.set("relatedTopics", ["normalization", "performance", "consistency"]);
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
    record42.set("careerSlug", "full-stack-developer");
    record42.set("careerName", "Full Stack Developer");
    record42.set("level", "Advanced");
    record42.set("questionNumber", 43);
    record42.set("question", "Explain the concept of saga pattern in full-stack applications.");
    record42.set("explanation", "Saga pattern manages distributed transactions across services. Choreography (event-driven) or orchestration (central coordinator). Handles failures with compensating transactions.");
    record42.set("practicalExample", "Order saga: create order -> reserve inventory -> process payment. If payment fails, compensate by releasing inventory.");
    record42.set("keyPoints", ["saga manages distributed transactions", "choreography vs orchestration", "compensating transactions"]);
    record42.set("relatedTopics", ["distributed transactions", "microservices", "consistency"]);
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
    record43.set("careerSlug", "full-stack-developer");
    record43.set("careerName", "Full Stack Developer");
    record43.set("level", "Intermediate");
    record43.set("questionNumber", 44);
    record43.set("question", "How do you implement connection pooling in full-stack applications?");
    record43.set("explanation", "Connection pooling reuses database connections. Improves performance and reduces resource usage. Configure pool size based on workload. Essential for high-traffic applications.");
    record43.set("practicalExample", "Pool size: 10. Request 1 uses connection 1, releases it. Request 2 reuses connection 1.");
    record43.set("keyPoints", ["connection pooling reuses connections", "improves performance", "reduces resource usage"]);
    record43.set("relatedTopics", ["database optimization", "performance", "scalability"]);
    record43.set("difficulty", "Medium");
    record43.set("category", "Database Design");
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
    record44.set("careerSlug", "full-stack-developer");
    record44.set("careerName", "Full Stack Developer");
    record44.set("level", "Advanced");
    record44.set("questionNumber", 45);
    record44.set("question", "What is the difference between eventual consistency and strong consistency?");
    record44.set("explanation", "Strong consistency: data immediately consistent. Eventual consistency: data becomes consistent over time. Strong consistency simpler but less scalable. Eventual consistency more scalable.");
    record44.set("practicalExample", "Strong: update immediately visible. Eventual: update propagates to replicas over time.");
    record44.set("keyPoints", ["strong consistency immediate", "eventual consistency over time", "trade-off: consistency vs scalability"]);
    record44.set("relatedTopics", ["CAP theorem", "distributed systems", "replication"]);
    record44.set("difficulty", "Hard");
    record44.set("category", "Distributed Systems");
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
    record45.set("careerSlug", "full-stack-developer");
    record45.set("careerName", "Full Stack Developer");
    record45.set("level", "Intermediate");
    record45.set("questionNumber", 46);
    record45.set("question", "How do you implement distributed tracing in full-stack applications?");
    record45.set("explanation", "Distributed tracing tracks requests across services. Helps identify bottlenecks and failures. Tools: Jaeger, Zipkin. Essential for debugging complex systems.");
    record45.set("practicalExample", "Request enters Service A, calls Service B, calls Service C. Trace shows timing and dependencies.");
    record45.set("keyPoints", ["distributed tracing tracks requests", "identifies bottlenecks", "essential for microservices"]);
    record45.set("relatedTopics", ["observability", "microservices", "debugging"]);
    record45.set("difficulty", "Medium");
    record45.set("category", "Operations");
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
    record46.set("careerSlug", "full-stack-developer");
    record46.set("careerName", "Full Stack Developer");
    record46.set("level", "Advanced");
    record46.set("questionNumber", 47);
    record46.set("question", "Explain the concept of bulkhead pattern in full-stack applications.");
    record46.set("explanation", "Bulkhead pattern isolates resources to prevent total system failure. Each service gets dedicated resources. If one service fails, others continue.");
    record46.set("practicalExample", "Thread pool 1 for Service A, Thread pool 2 for Service B. Service A failure doesn't affect Service B.");
    record46.set("keyPoints", ["bulkhead isolates resources", "prevents total system failure", "enables independent scaling"]);
    record46.set("relatedTopics", ["resilience", "resource isolation", "microservices"]);
    record46.set("difficulty", "Hard");
    record46.set("category", "Architecture");
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
    record47.set("careerSlug", "full-stack-developer");
    record47.set("careerName", "Full Stack Developer");
    record47.set("level", "Intermediate");
    record47.set("questionNumber", 48);
    record47.set("question", "How do you implement API documentation in full-stack applications?");
    record47.set("explanation", "Document APIs with tools like Swagger/OpenAPI. Include endpoints, parameters, responses, examples. Keep documentation updated. Essential for frontend developers.");
    record47.set("practicalExample", "Swagger: define API schema, auto-generate documentation and client libraries.");
    record47.set("keyPoints", ["document all endpoints", "include examples", "keep updated"]);
    record47.set("relatedTopics", ["Swagger", "OpenAPI", "API design"]);
    record47.set("difficulty", "Medium");
    record47.set("category", "Documentation");
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
    record48.set("careerSlug", "full-stack-developer");
    record48.set("careerName", "Full Stack Developer");
    record48.set("level", "Advanced");
    record48.set("questionNumber", 49);
    record48.set("question", "What is the difference between blue-green and canary deployments?");
    record48.set("explanation", "Blue-green: two identical environments, switch traffic. Canary: gradual rollout to subset of users. Blue-green faster, canary safer. Choose based on risk tolerance.");
    record48.set("practicalExample", "Blue-green: deploy to green, test, switch traffic. Canary: deploy to 10% users, monitor, gradually increase.");
    record48.set("keyPoints", ["blue-green switches traffic", "canary gradual rollout", "choose based on risk"]);
    record48.set("relatedTopics", ["deployment", "CI/CD", "DevOps"]);
    record48.set("difficulty", "Hard");
    record48.set("category", "DevOps");
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
    record49.set("careerSlug", "full-stack-developer");
    record49.set("careerName", "Full Stack Developer");
    record49.set("level", "Intermediate");
    record49.set("questionNumber", 50);
    record49.set("question", "How do you implement environment configuration in full-stack applications?");
    record49.set("explanation", "Use environment variables for configuration. Separate configs for development, staging, production. Never commit secrets. Use tools like dotenv.");
    record49.set("practicalExample", "DATABASE_URL=postgres://... API_KEY=secret... Use process.env.DATABASE_URL in code.");
    record49.set("keyPoints", ["use environment variables", "separate configs per environment", "never commit secrets"]);
    record49.set("relatedTopics", ["configuration management", "secrets management", "DevOps"]);
    record49.set("difficulty", "Medium");
    record49.set("category", "Configuration");
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
