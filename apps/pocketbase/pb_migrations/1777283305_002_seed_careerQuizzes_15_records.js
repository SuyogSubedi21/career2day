/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerQuizzes");

  const record0 = new Record(collection);
    record0.set("careerSlug", "full-stack-developer");
    record0.set("difficulty", "Basic");
    record0.set("questionNumber", 1);
    record0.set("question", "What does HTML stand for?");
    record0.set("options", ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"]);
    record0.set("correctAnswer", "A");
    record0.set("explanation", "HTML stands for Hyper Text Markup Language, the standard markup language for creating web pages.");
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
    record1.set("difficulty", "Basic");
    record1.set("questionNumber", 2);
    record1.set("question", "Which of the following is a JavaScript framework?");
    record1.set("options", ["Django", "React", "Laravel", "Flask"]);
    record1.set("correctAnswer", "B");
    record1.set("explanation", "React is a popular JavaScript library/framework for building user interfaces.");
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
    record2.set("difficulty", "Basic");
    record2.set("questionNumber", 3);
    record2.set("question", "What is CSS used for?");
    record2.set("options", ["Server-side scripting", "Styling and layout of web pages", "Database management", "Backend logic"]);
    record2.set("correctAnswer", "B");
    record2.set("explanation", "CSS (Cascading Style Sheets) is used for styling and controlling the layout of web pages.");
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
    record3.set("difficulty", "Basic");
    record3.set("questionNumber", 4);
    record3.set("question", "Which database is a NoSQL database?");
    record3.set("options", ["PostgreSQL", "MySQL", "MongoDB", "Oracle"]);
    record3.set("correctAnswer", "C");
    record3.set("explanation", "MongoDB is a popular NoSQL database that stores data in JSON-like documents.");
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
    record4.set("difficulty", "Basic");
    record4.set("questionNumber", 5);
    record4.set("question", "What is Node.js?");
    record4.set("options", ["A frontend framework", "A JavaScript runtime for server-side development", "A database system", "A CSS preprocessor"]);
    record4.set("correctAnswer", "B");
    record4.set("explanation", "Node.js is a JavaScript runtime that allows you to run JavaScript on the server side.");
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
    record5.set("difficulty", "Medium");
    record5.set("questionNumber", 6);
    record5.set("question", "What is the purpose of middleware in Express.js?");
    record5.set("options", ["To handle database queries", "To process requests and responses", "To manage user authentication only", "To compile CSS"]);
    record5.set("correctAnswer", "B");
    record5.set("explanation", "Middleware in Express.js processes requests and responses, allowing you to add functionality to the request/response pipeline.");
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
    record6.set("difficulty", "Medium");
    record6.set("questionNumber", 7);
    record6.set("question", "What is the difference between let and const in JavaScript?");
    record6.set("options", ["No difference", "let is block-scoped, const is function-scoped", "const cannot be reassigned, let can", "let is faster than const"]);
    record6.set("correctAnswer", "C");
    record6.set("explanation", "const creates a constant that cannot be reassigned, while let creates a variable that can be reassigned but is block-scoped.");
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
    record7.set("difficulty", "Medium");
    record7.set("questionNumber", 8);
    record7.set("question", "What is REST API?");
    record7.set("options", ["A database query language", "An architectural style for web services", "A frontend framework", "A server configuration tool"]);
    record7.set("correctAnswer", "B");
    record7.set("explanation", "REST (Representational State Transfer) is an architectural style for designing networked applications using HTTP requests.");
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
    record8.set("difficulty", "Medium");
    record8.set("questionNumber", 9);
    record8.set("question", "What is Docker used for?");
    record8.set("options", ["Frontend styling", "Containerizing applications for deployment", "Database management", "Version control"]);
    record8.set("correctAnswer", "B");
    record8.set("explanation", "Docker is used to containerize applications, making them portable and consistent across different environments.");
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
    record9.set("difficulty", "Medium");
    record9.set("questionNumber", 10);
    record9.set("question", "What is the purpose of JWT (JSON Web Token)?");
    record9.set("options", ["Styling web pages", "Secure authentication and authorization", "Database indexing", "CSS preprocessing"]);
    record9.set("correctAnswer", "B");
    record9.set("explanation", "JWT is used for secure authentication and authorization by encoding user information in a token.");
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
    record10.set("difficulty", "Hard");
    record10.set("questionNumber", 11);
    record10.set("question", "What is the difference between SQL and NoSQL databases?");
    record10.set("options", ["No difference", "SQL is relational, NoSQL is non-relational", "NoSQL is always faster", "SQL doesn't use tables"]);
    record10.set("correctAnswer", "B");
    record10.set("explanation", "SQL databases are relational and use structured schemas, while NoSQL databases are non-relational and flexible in structure.");
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
    record11.set("difficulty", "Hard");
    record11.set("questionNumber", 12);
    record11.set("question", "What is the purpose of ORM (Object-Relational Mapping)?");
    record11.set("options", ["To style HTML", "To map database tables to object models", "To manage CSS", "To handle frontend routing"]);
    record11.set("correctAnswer", "B");
    record11.set("explanation", "ORM maps database tables to object models, allowing you to interact with databases using object-oriented code.");
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
    record13.set("careerSlug", "full-stack-developer");
    record13.set("difficulty", "Hard");
    record13.set("questionNumber", 14);
    record13.set("question", "What is CI/CD?");
    record13.set("options", ["A database system", "Continuous Integration/Continuous Deployment", "A CSS framework", "A frontend library"]);
    record13.set("correctAnswer", "B");
    record13.set("explanation", "CI/CD is a practice of automating testing and deployment to ensure code quality and faster releases.");
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
    record14.set("difficulty", "Hard");
    record14.set("questionNumber", 15);
    record14.set("question", "What is the purpose of API rate limiting?");
    record14.set("options", ["To speed up requests", "To prevent abuse and control resource usage", "To encrypt data", "To manage databases"]);
    record14.set("correctAnswer", "B");
    record14.set("explanation", "API rate limiting controls the number of requests a client can make, preventing abuse and ensuring fair resource usage.");
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
