/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerSkills");

  const record0 = new Record(collection);
    record0.set("skillName", "JavaScript");
    record0.set("category", "Languages");
    record0.set("difficulty", "Beginner");
    record0.set("description", "Versatile programming language for web development, both frontend and backend");
    record0.set("relatedCareers", ["Software Engineer", "Full Stack Developer", "Frontend Developer", "Mobile Developer"]);
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
    record1.set("skillName", "Python");
    record1.set("category", "Languages");
    record1.set("difficulty", "Beginner");
    record1.set("description", "Beginner-friendly language widely used in data science, machine learning, and backend development");
    record1.set("relatedCareers", ["Software Engineer", "Data Scientist", "Machine Learning Engineer", "Backend Developer"]);
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
    record2.set("skillName", "Java");
    record2.set("category", "Languages");
    record2.set("difficulty", "Intermediate");
    record2.set("description", "Enterprise-level language used for large-scale applications and Android development");
    record2.set("relatedCareers", ["Software Engineer", "Backend Developer", "Mobile Developer"]);
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
    record3.set("skillName", "React");
    record3.set("category", "Frameworks");
    record3.set("difficulty", "Intermediate");
    record3.set("description", "Popular JavaScript library for building interactive user interfaces");
    record3.set("relatedCareers", ["Frontend Developer", "Full Stack Developer", "Mobile Developer"]);
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
    record4.set("skillName", "Node.js");
    record4.set("category", "Frameworks");
    record4.set("difficulty", "Intermediate");
    record4.set("description", "JavaScript runtime for building server-side applications and APIs");
    record4.set("relatedCareers", ["Backend Developer", "Full Stack Developer", "Software Engineer"]);
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
    record5.set("skillName", "Docker");
    record5.set("category", "Tools");
    record5.set("difficulty", "Intermediate");
    record5.set("description", "Containerization platform for packaging and deploying applications");
    record5.set("relatedCareers", ["DevOps Engineer", "Cloud Architect", "Backend Developer"]);
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
    record6.set("skillName", "Kubernetes");
    record6.set("category", "Tools");
    record6.set("difficulty", "Advanced");
    record6.set("description", "Container orchestration platform for managing containerized applications at scale");
    record6.set("relatedCareers", ["DevOps Engineer", "Cloud Architect", "Machine Learning Engineer"]);
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
    record7.set("skillName", "AWS");
    record7.set("category", "Cloud Platforms");
    record7.set("difficulty", "Intermediate");
    record7.set("description", "Amazon Web Services - leading cloud computing platform");
    record7.set("relatedCareers", ["Cloud Architect", "DevOps Engineer", "Backend Developer"]);
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
    record8.set("skillName", "SQL");
    record8.set("category", "Databases");
    record8.set("difficulty", "Beginner");
    record8.set("description", "Language for querying and managing relational databases");
    record8.set("relatedCareers", ["Data Scientist", "Backend Developer", "Full Stack Developer", "Machine Learning Engineer"]);
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
    record9.set("skillName", "MongoDB");
    record9.set("category", "Databases");
    record9.set("difficulty", "Intermediate");
    record9.set("description", "NoSQL database for flexible, document-based data storage");
    record9.set("relatedCareers", ["Backend Developer", "Full Stack Developer", "Software Engineer"]);
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
    record10.set("skillName", "TensorFlow");
    record10.set("category", "AI-ML");
    record10.set("difficulty", "Advanced");
    record10.set("description", "Open-source machine learning framework by Google");
    record10.set("relatedCareers", ["Machine Learning Engineer", "Data Scientist", "AI Engineer"]);
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
    record11.set("skillName", "PyTorch");
    record11.set("category", "AI-ML");
    record11.set("difficulty", "Advanced");
    record11.set("description", "Deep learning framework popular in research and production");
    record11.set("relatedCareers", ["Machine Learning Engineer", "Data Scientist", "AI Engineer"]);
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
    record12.set("skillName", "Git");
    record12.set("category", "Tools");
    record12.set("difficulty", "Beginner");
    record12.set("description", "Version control system for tracking code changes and collaboration");
    record12.set("relatedCareers", ["Software Engineer", "Frontend Developer", "Backend Developer", "DevOps Engineer"]);
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
    record13.set("skillName", "REST APIs");
    record13.set("category", "Concepts");
    record13.set("difficulty", "Intermediate");
    record13.set("description", "Architectural style for building web services and APIs");
    record13.set("relatedCareers", ["Backend Developer", "Full Stack Developer", "Software Engineer"]);
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
    record14.set("skillName", "System Design");
    record14.set("category", "Concepts");
    record14.set("difficulty", "Advanced");
    record14.set("description", "Design of large-scale distributed systems and architecture");
    record14.set("relatedCareers", ["Software Engineer", "Backend Developer", "Cloud Architect"]);
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
    record15.set("skillName", "Machine Learning");
    record15.set("category", "AI-ML");
    record15.set("difficulty", "Advanced");
    record15.set("description", "Algorithms and techniques for building intelligent systems");
    record15.set("relatedCareers", ["Machine Learning Engineer", "Data Scientist", "AI Engineer"]);
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
    record16.set("skillName", "Data Analysis");
    record16.set("category", "Concepts");
    record16.set("difficulty", "Intermediate");
    record16.set("description", "Extracting insights from data using statistical methods");
    record16.set("relatedCareers", ["Data Scientist", "Machine Learning Engineer", "Analytics Engineer"]);
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
    record17.set("skillName", "Linux");
    record17.set("category", "Tools");
    record17.set("difficulty", "Intermediate");
    record17.set("description", "Open-source operating system widely used in servers and cloud");
    record17.set("relatedCareers", ["DevOps Engineer", "Cloud Architect", "Backend Developer"]);
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
    record18.set("skillName", "Vue.js");
    record18.set("category", "Frameworks");
    record18.set("difficulty", "Intermediate");
    record18.set("description", "Progressive JavaScript framework for building user interfaces");
    record18.set("relatedCareers", ["Frontend Developer", "Full Stack Developer"]);
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
    record19.set("skillName", "Angular");
    record19.set("category", "Frameworks");
    record19.set("difficulty", "Advanced");
    record19.set("description", "Full-featured JavaScript framework for building complex applications");
    record19.set("relatedCareers", ["Frontend Developer", "Full Stack Developer"]);
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
    record20.set("skillName", "TypeScript");
    record20.set("category", "Languages");
    record20.set("difficulty", "Intermediate");
    record20.set("description", "Typed superset of JavaScript for building scalable applications");
    record20.set("relatedCareers", ["Frontend Developer", "Backend Developer", "Full Stack Developer"]);
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
    record21.set("skillName", "Terraform");
    record21.set("category", "Tools");
    record21.set("difficulty", "Intermediate");
    record21.set("description", "Infrastructure as Code tool for managing cloud resources");
    record21.set("relatedCareers", ["DevOps Engineer", "Cloud Architect"]);
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
    record22.set("skillName", "Jenkins");
    record22.set("category", "Tools");
    record22.set("difficulty", "Intermediate");
    record22.set("description", "Automation server for continuous integration and deployment");
    record22.set("relatedCareers", ["DevOps Engineer", "Backend Developer"]);
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
    record23.set("skillName", "Figma");
    record23.set("category", "Design");
    record23.set("difficulty", "Beginner");
    record23.set("description", "Collaborative design tool for UI/UX design and prototyping");
    record23.set("relatedCareers", ["UI/UX Designer", "Product Designer"]);
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
    record24.set("skillName", "Swift");
    record24.set("category", "Languages");
    record24.set("difficulty", "Intermediate");
    record24.set("description", "Programming language for iOS and macOS development");
    record24.set("relatedCareers", ["Mobile Developer", "iOS Developer"]);
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
    record25.set("skillName", "Kotlin");
    record25.set("category", "Languages");
    record25.set("difficulty", "Intermediate");
    record25.set("description", "Modern programming language for Android development");
    record25.set("relatedCareers", ["Mobile Developer", "Android Developer"]);
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
    record26.set("skillName", "React Native");
    record26.set("category", "Frameworks");
    record26.set("difficulty", "Intermediate");
    record26.set("description", "Cross-platform framework for building mobile apps with JavaScript");
    record26.set("relatedCareers", ["Mobile Developer", "Full Stack Developer"]);
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
    record27.set("skillName", "Flutter");
    record27.set("category", "Frameworks");
    record27.set("difficulty", "Intermediate");
    record27.set("description", "Cross-platform framework for building mobile apps with Dart");
    record27.set("relatedCareers", ["Mobile Developer"]);
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
    record28.set("skillName", "Pandas");
    record28.set("category", "Tools");
    record28.set("difficulty", "Intermediate");
    record28.set("description", "Python library for data manipulation and analysis");
    record28.set("relatedCareers", ["Data Scientist", "Machine Learning Engineer"]);
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
    record29.set("skillName", "Scikit-learn");
    record29.set("category", "Tools");
    record29.set("difficulty", "Intermediate");
    record29.set("description", "Python library for machine learning algorithms");
    record29.set("relatedCareers", ["Data Scientist", "Machine Learning Engineer"]);
  try {
    app.save(record29);
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
