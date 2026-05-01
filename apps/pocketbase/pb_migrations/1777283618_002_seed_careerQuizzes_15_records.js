/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerQuizzes");

  const record0 = new Record(collection);
    record0.set("careerSlug", "backend-engineer");
    record0.set("difficulty", "Basic");
    record0.set("questionNumber", 1);
    record0.set("question", "What is a REST API?");
    record0.set("options", ["A database system", "An architectural style for web services using HTTP", "A programming language", "A server configuration tool"]);
    record0.set("correctAnswer", "B");
    record0.set("explanation", "REST (Representational State Transfer) is an architectural style for designing networked applications using HTTP requests.");
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
    record1.set("careerSlug", "backend-engineer");
    record1.set("difficulty", "Basic");
    record1.set("questionNumber", 2);
    record1.set("question", "Which of the following is a relational database?");
    record1.set("options", ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch"]);
    record1.set("correctAnswer", "B");
    record1.set("explanation", "PostgreSQL is a relational database management system that uses SQL.");
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
    record2.set("careerSlug", "backend-engineer");
    record2.set("difficulty", "Basic");
    record2.set("questionNumber", 3);
    record2.set("question", "What does JWT stand for?");
    record2.set("options", ["Java Web Token", "JSON Web Token", "JavaScript Web Token", "Java Web Toolkit"]);
    record2.set("correctAnswer", "B");
    record2.set("explanation", "JWT stands for JSON Web Token, used for secure authentication and authorization.");
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
    record3.set("careerSlug", "backend-engineer");
    record3.set("difficulty", "Basic");
    record3.set("questionNumber", 4);
    record3.set("question", "What is the primary purpose of a database index?");
    record3.set("options", ["To store data", "To improve query performance", "To encrypt data", "To backup data"]);
    record3.set("correctAnswer", "B");
    record3.set("explanation", "Database indexes improve query performance by allowing faster data retrieval.");
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
    record4.set("careerSlug", "backend-engineer");
    record4.set("difficulty", "Basic");
    record4.set("questionNumber", 5);
    record4.set("question", "Which HTTP method is used to retrieve data?");
    record4.set("options", ["POST", "PUT", "GET", "DELETE"]);
    record4.set("correctAnswer", "C");
    record4.set("explanation", "GET is the HTTP method used to retrieve data from a server.");
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
    record5.set("careerSlug", "backend-engineer");
    record5.set("difficulty", "Medium");
    record5.set("questionNumber", 6);
    record5.set("question", "What is the difference between SQL and NoSQL databases?");
    record5.set("options", ["No difference", "SQL is relational, NoSQL is non-relational", "NoSQL is always faster", "SQL doesn't use tables"]);
    record5.set("correctAnswer", "B");
    record5.set("explanation", "SQL databases are relational with structured schemas, while NoSQL databases are non-relational and flexible.");
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
    record6.set("careerSlug", "backend-engineer");
    record6.set("difficulty", "Medium");
    record6.set("questionNumber", 7);
    record6.set("question", "What is caching used for?");
    record6.set("options", ["Storing permanent data", "Improving performance by storing frequently accessed data", "Encrypting data", "Backing up data"]);
    record6.set("correctAnswer", "B");
    record6.set("explanation", "Caching stores frequently accessed data in fast-access memory to improve performance.");
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
    record7.set("careerSlug", "backend-engineer");
    record7.set("difficulty", "Medium");
    record7.set("questionNumber", 8);
    record7.set("question", "What is OAuth used for?");
    record7.set("options", ["Database management", "Secure authentication and authorization", "Data encryption", "Server configuration"]);
    record7.set("correctAnswer", "B");
    record7.set("explanation", "OAuth is an open standard for secure authentication and authorization.");
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
    record8.set("careerSlug", "backend-engineer");
    record8.set("difficulty", "Medium");
    record8.set("questionNumber", 9);
    record8.set("question", "What is a message queue used for?");
    record8.set("options", ["Storing user data", "Asynchronous communication between services", "Managing databases", "Encrypting data"]);
    record8.set("correctAnswer", "B");
    record8.set("explanation", "Message queues enable asynchronous communication between different services or components.");
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
    record9.set("careerSlug", "backend-engineer");
    record9.set("difficulty", "Medium");
    record9.set("questionNumber", 10);
    record9.set("question", "What is the purpose of middleware in web frameworks?");
    record9.set("options", ["To store data", "To process requests and responses", "To manage databases", "To encrypt data"]);
    record9.set("correctAnswer", "B");
    record9.set("explanation", "Middleware processes requests and responses, adding functionality to the request/response pipeline.");
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
    record10.set("careerSlug", "backend-engineer");
    record10.set("difficulty", "Hard");
    record10.set("questionNumber", 11);
    record10.set("question", "What is the N+1 query problem?");
    record10.set("options", ["A database error", "Executing one query followed by N additional queries for related data", "A performance optimization", "A security vulnerability"]);
    record10.set("correctAnswer", "B");
    record10.set("explanation", "The N+1 problem occurs when a query is executed once, then N additional queries are executed for related data, causing performance issues.");
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
    record11.set("careerSlug", "backend-engineer");
    record11.set("difficulty", "Hard");
    record11.set("questionNumber", 12);
    record11.set("question", "What is database normalization?");
    record11.set("options", ["Encrypting data", "Organizing data to reduce redundancy and improve integrity", "Backing up data", "Compressing data"]);
    record11.set("correctAnswer", "B");
    record11.set("explanation", "Database normalization organizes data to reduce redundancy and improve data integrity.");
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
    record12.set("careerSlug", "backend-engineer");
    record12.set("difficulty", "Hard");
    record12.set("questionNumber", 13);
    record12.set("question", "What is the difference between authentication and authorization?");
    record12.set("options", ["They are the same", "Authentication verifies identity, authorization checks permissions", "Authorization comes before authentication", "They are only for databases"]);
    record12.set("correctAnswer", "B");
    record12.set("explanation", "Authentication verifies who you are, while authorization determines what you can access.");
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
    record13.set("careerSlug", "backend-engineer");
    record13.set("difficulty", "Hard");
    record13.set("questionNumber", 14);
    record13.set("question", "What is horizontal scaling?");
    record13.set("options", ["Increasing server resources", "Adding more servers to distribute load", "Reducing server resources", "Optimizing code"]);
    record13.set("correctAnswer", "B");
    record13.set("explanation", "Horizontal scaling adds more servers to distribute the load across multiple machines.");
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
    record14.set("careerSlug", "backend-engineer");
    record14.set("difficulty", "Hard");
    record14.set("questionNumber", 15);
    record14.set("question", "What is a microservices architecture?");
    record14.set("options", ["One large monolithic application", "Breaking applications into small, independent services", "Using multiple databases", "Cloud-only architecture"]);
    record14.set("correctAnswer", "B");
    record14.set("explanation", "Microservices architecture breaks applications into small, independently deployable services.");
  try {
    app.save(record14);
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
