/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("interviewCourses");

  const record0 = new Record(collection);
    record0.set("name", "Data Structures");
    record0.set("description", "Master fundamental data structures including arrays, linked lists, trees, graphs, and hash tables");
    record0.set("questionCount", 50);
    record0.set("difficulty_distribution", "{'Simple': 15, 'Medium': 20, 'Hard': 15}");
    record0.set("category", "Core CS");
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
    record1.set("name", "Algorithms");
    record1.set("description", "Learn sorting, searching, dynamic programming, and algorithmic problem-solving techniques");
    record1.set("questionCount", 60);
    record1.set("difficulty_distribution", "{'Simple': 18, 'Medium': 24, 'Hard': 18}");
    record1.set("category", "Core CS");
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
    record2.set("name", "System Design");
    record2.set("description", "Design scalable systems, databases, and distributed architectures");
    record2.set("questionCount", 40);
    record2.set("difficulty_distribution", "{'Simple': 12, 'Medium': 16, 'Hard': 12}");
    record2.set("category", "Advanced");
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
    record3.set("name", "Database Design");
    record3.set("description", "SQL, NoSQL, indexing, normalization, and database optimization");
    record3.set("questionCount", 35);
    record3.set("difficulty_distribution", "{'Simple': 10, 'Medium': 14, 'Hard': 11}");
    record3.set("category", "Backend");
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
    record4.set("name", "Web Development");
    record4.set("description", "Frontend, backend, APIs, and full-stack web development concepts");
    record4.set("questionCount", 45);
    record4.set("difficulty_distribution", "{'Simple': 13, 'Medium': 18, 'Hard': 14}");
    record4.set("category", "Web");
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
    record5.set("name", "DevOps");
    record5.set("description", "CI/CD, containerization, orchestration, and infrastructure automation");
    record5.set("questionCount", 30);
    record5.set("difficulty_distribution", "{'Simple': 9, 'Medium': 12, 'Hard': 9}");
    record5.set("category", "Infrastructure");
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
    record6.set("name", "Cloud AWS");
    record6.set("description", "Amazon Web Services architecture, services, and best practices");
    record6.set("questionCount", 40);
    record6.set("difficulty_distribution", "{'Simple': 12, 'Medium': 16, 'Hard': 12}");
    record6.set("category", "Cloud");
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
    record7.set("name", "Cloud Azure");
    record7.set("description", "Microsoft Azure services, architecture, and cloud solutions");
    record7.set("questionCount", 35);
    record7.set("difficulty_distribution", "{'Simple': 10, 'Medium': 14, 'Hard': 11}");
    record7.set("category", "Cloud");
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
    record8.set("name", "Cloud GCP");
    record8.set("description", "Google Cloud Platform services and architecture");
    record8.set("questionCount", 35);
    record8.set("difficulty_distribution", "{'Simple': 10, 'Medium': 14, 'Hard': 11}");
    record8.set("category", "Cloud");
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
    record9.set("name", "Cybersecurity");
    record9.set("description", "Security principles, encryption, authentication, and threat prevention");
    record9.set("questionCount", 30);
    record9.set("difficulty_distribution", "{'Simple': 9, 'Medium': 12, 'Hard': 9}");
    record9.set("category", "Security");
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
    record10.set("name", "Machine Learning");
    record10.set("description", "ML algorithms, neural networks, and data science concepts");
    record10.set("questionCount", 35);
    record10.set("difficulty_distribution", "{'Simple': 10, 'Medium': 14, 'Hard': 11}");
    record10.set("category", "AI/ML");
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
    record11.set("name", "Product Management");
    record11.set("description", "Product strategy, roadmapping, and user-centric design");
    record11.set("questionCount", 25);
    record11.set("difficulty_distribution", "{'Simple': 7, 'Medium': 10, 'Hard': 8}");
    record11.set("category", "Soft Skills");
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
    record12.set("name", "Behavioral Questions");
    record12.set("description", "STAR method, conflict resolution, and team collaboration scenarios");
    record12.set("questionCount", 40);
    record12.set("difficulty_distribution", "{'Simple': 12, 'Medium': 16, 'Hard': 12}");
    record12.set("category", "Soft Skills");
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
    record13.set("name", "Leadership");
    record13.set("description", "Team management, decision-making, and leadership principles");
    record13.set("questionCount", 25);
    record13.set("difficulty_distribution", "{'Simple': 7, 'Medium': 10, 'Hard': 8}");
    record13.set("category", "Soft Skills");
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
    record14.set("name", "Communication");
    record14.set("description", "Technical communication, presentation, and stakeholder management");
    record14.set("questionCount", 20);
    record14.set("difficulty_distribution", "{'Simple': 6, 'Medium': 8, 'Hard': 6}");
    record14.set("category", "Soft Skills");
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
    record15.set("name", "Problem Solving");
    record15.set("description", "Analytical thinking, logical reasoning, and creative problem-solving");
    record15.set("questionCount", 50);
    record15.set("difficulty_distribution", "{'Simple': 15, 'Medium': 20, 'Hard': 15}");
    record15.set("category", "Core CS");
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
    record16.set("name", "API Design");
    record16.set("description", "RESTful APIs, GraphQL, API security, and versioning strategies");
    record16.set("questionCount", 30);
    record16.set("difficulty_distribution", "{'Simple': 9, 'Medium': 12, 'Hard': 9}");
    record16.set("category", "Backend");
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
    record17.set("name", "Microservices");
    record17.set("description", "Microservices architecture, service communication, and distributed systems");
    record17.set("questionCount", 35);
    record17.set("difficulty_distribution", "{'Simple': 10, 'Medium': 14, 'Hard': 11}");
    record17.set("category", "Advanced");
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
    record18.set("name", "Testing & QA");
    record18.set("description", "Unit testing, integration testing, test automation, and QA strategies");
    record18.set("questionCount", 25);
    record18.set("difficulty_distribution", "{'Simple': 7, 'Medium': 10, 'Hard': 8}");
    record18.set("category", "QA");
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
    record19.set("name", "Performance Optimization");
    record19.set("description", "Code optimization, caching, profiling, and performance tuning");
    record19.set("questionCount", 30);
    record19.set("difficulty_distribution", "{'Simple': 9, 'Medium': 12, 'Hard': 9}");
    record19.set("category", "Advanced");
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
    record20.set("name", "Security Best Practices");
    record20.set("description", "OWASP, secure coding, vulnerability assessment, and risk management");
    record20.set("questionCount", 25);
    record20.set("difficulty_distribution", "{'Simple': 7, 'Medium': 10, 'Hard': 8}");
    record20.set("category", "Security");
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
    record21.set("name", "Distributed Systems");
    record21.set("description", "Consensus algorithms, fault tolerance, and distributed computing concepts");
    record21.set("questionCount", 40);
    record21.set("difficulty_distribution", "{'Simple': 12, 'Medium': 16, 'Hard': 12}");
    record21.set("category", "Advanced");
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
    record22.set("name", "Database Optimization");
    record22.set("description", "Query optimization, indexing strategies, and database performance tuning");
    record22.set("questionCount", 30);
    record22.set("difficulty_distribution", "{'Simple': 9, 'Medium': 12, 'Hard': 9}");
    record22.set("category", "Backend");
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
    record23.set("name", "Code Review");
    record23.set("description", "Code quality, best practices, and effective code review techniques");
    record23.set("questionCount", 20);
    record23.set("difficulty_distribution", "{'Simple': 6, 'Medium': 8, 'Hard': 6}");
    record23.set("category", "Soft Skills");
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
    record24.set("name", "Object-Oriented Design");
    record24.set("description", "OOP principles, design patterns, and SOLID principles");
    record24.set("questionCount", 35);
    record24.set("difficulty_distribution", "{'Simple': 10, 'Medium': 14, 'Hard': 11}");
    record24.set("category", "Core CS");
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
    record25.set("name", "Functional Programming");
    record25.set("description", "Functional paradigms, immutability, and functional design patterns");
    record25.set("questionCount", 30);
    record25.set("difficulty_distribution", "{'Simple': 9, 'Medium': 12, 'Hard': 9}");
    record25.set("category", "Core CS");
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
    record26.set("name", "Mobile Development");
    record26.set("description", "iOS, Android, cross-platform development, and mobile architecture");
    record26.set("questionCount", 35);
    record26.set("difficulty_distribution", "{'Simple': 10, 'Medium': 14, 'Hard': 11}");
    record26.set("category", "Mobile");
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
    record27.set("name", "Networking");
    record27.set("description", "TCP/IP, DNS, HTTP, and network protocols");
    record27.set("questionCount", 30);
    record27.set("difficulty_distribution", "{'Simple': 9, 'Medium': 12, 'Hard': 9}");
    record27.set("category", "Infrastructure");
  try {
    app.save(record27);
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
