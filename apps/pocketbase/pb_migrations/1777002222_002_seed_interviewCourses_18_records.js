/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("interviewCourses");

  const record0 = new Record(collection);
    record0.set("name", "Data Structures");
    record0.set("description", "Master fundamental data structures including arrays, linked lists, trees, graphs, and hash tables");
    record0.set("questionCount", 25);
    record0.set("difficulty_distribution", "{'simple': 5, 'medium': 12, 'hard': 8}");
    record0.set("category", "Core");
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
    record1.set("description", "Learn sorting, searching, dynamic programming, and algorithm optimization techniques");
    record1.set("questionCount", 28);
    record1.set("difficulty_distribution", "{'simple': 4, 'medium': 14, 'hard': 10}");
    record1.set("category", "Core");
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
    record2.set("questionCount", 20);
    record2.set("difficulty_distribution", "{'simple': 2, 'medium': 8, 'hard': 10}");
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
    record3.set("description", "SQL, NoSQL, indexing, normalization, and query optimization");
    record3.set("questionCount", 18);
    record3.set("difficulty_distribution", "{'simple': 4, 'medium': 9, 'hard': 5}");
    record3.set("category", "Core");
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
    record4.set("description", "Frontend and backend web technologies, REST APIs, and web frameworks");
    record4.set("questionCount", 22);
    record4.set("difficulty_distribution", "{'simple': 6, 'medium': 11, 'hard': 5}");
    record4.set("category", "Development");
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
    record5.set("description", "CI/CD pipelines, containerization, orchestration, and infrastructure automation");
    record5.set("questionCount", 16);
    record5.set("difficulty_distribution", "{'simple': 3, 'medium': 8, 'hard': 5}");
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
    record6.set("questionCount", 19);
    record6.set("difficulty_distribution", "{'simple': 5, 'medium': 9, 'hard': 5}");
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
    record7.set("description", "Microsoft Azure services, architecture, and deployment strategies");
    record7.set("questionCount", 17);
    record7.set("difficulty_distribution", "{'simple': 4, 'medium': 8, 'hard': 5}");
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
    record8.set("description", "Google Cloud Platform services and architecture patterns");
    record8.set("questionCount", 15);
    record8.set("difficulty_distribution", "{'simple': 3, 'medium': 7, 'hard': 5}");
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
    record9.set("description", "Security principles, encryption, authentication, and threat mitigation");
    record9.set("questionCount", 16);
    record9.set("difficulty_distribution", "{'simple': 3, 'medium': 8, 'hard': 5}");
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
    record10.set("description", "ML algorithms, neural networks, and practical ML applications");
    record10.set("questionCount", 18);
    record10.set("difficulty_distribution", "{'simple': 2, 'medium': 8, 'hard': 8}");
    record10.set("category", "Advanced");
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
    record11.set("description", "Product strategy, roadmapping, and stakeholder management");
    record11.set("questionCount", 14);
    record11.set("difficulty_distribution", "{'simple': 5, 'medium': 7, 'hard': 2}");
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
    record12.set("questionCount", 20);
    record12.set("difficulty_distribution", "{'simple': 8, 'medium': 10, 'hard': 2}");
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
    record13.set("description", "Leadership styles, team management, and decision-making frameworks");
    record13.set("questionCount", 15);
    record13.set("difficulty_distribution", "{'simple': 5, 'medium': 8, 'hard': 2}");
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
    record14.set("description", "Technical communication, presentation skills, and documentation");
    record14.set("questionCount", 12);
    record14.set("difficulty_distribution", "{'simple': 6, 'medium': 5, 'hard': 1}");
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
    record15.set("questionCount", 21);
    record15.set("difficulty_distribution", "{'simple': 3, 'medium': 10, 'hard': 8}");
    record15.set("category", "Core");
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
    record16.set("name", "Microservices");
    record16.set("description", "Microservices architecture, service mesh, and distributed systems patterns");
    record16.set("questionCount", 17);
    record16.set("difficulty_distribution", "{'simple': 2, 'medium': 8, 'hard': 7}");
    record16.set("category", "Advanced");
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
    record17.set("name", "API Design");
    record17.set("description", "RESTful API design, GraphQL, and API security best practices");
    record17.set("questionCount", 14);
    record17.set("difficulty_distribution", "{'simple': 4, 'medium': 7, 'hard': 3}");
    record17.set("category", "Development");
  try {
    app.save(record17);
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
