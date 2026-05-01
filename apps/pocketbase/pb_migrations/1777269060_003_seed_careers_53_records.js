/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
    record0.set("name", "Frontend Developer");
    record0.set("slug", "frontend-developer");
    record0.set("description", "Build user interfaces and web applications using HTML, CSS, and JavaScript frameworks");
    record0.set("averageSalary", 95000);
    record0.set("salaryRange", "{'min': 70000, 'max': 140000}");
    record0.set("demandLevel", "Very High");
    record0.set("timeToReady", 12);
    record0.set("overview", "Frontend developers create interactive web experiences using modern frameworks like React, Vue, and Angular. High demand with excellent growth prospects.");
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
    record1.set("name", "Backend Developer");
    record1.set("slug", "backend-developer");
    record1.set("description", "Develop server-side logic, APIs, and database systems for web applications");
    record1.set("averageSalary", 105000);
    record1.set("salaryRange", "{'min': 75000, 'max': 160000}");
    record1.set("demandLevel", "Very High");
    record1.set("timeToReady", 14);
    record1.set("overview", "Backend developers build the core infrastructure of web applications using Node.js, Python, Java, and Go. Critical role with strong market demand.");
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
    record2.set("name", "Full Stack Developer");
    record2.set("slug", "full-stack-developer");
    record2.set("description", "Work on both frontend and backend of web applications");
    record2.set("averageSalary", 110000);
    record2.set("salaryRange", "{'min': 80000, 'max': 170000}");
    record2.set("demandLevel", "Very High");
    record2.set("timeToReady", 18);
    record2.set("overview", "Full stack developers handle entire application development from UI to database. Highly sought after with premium compensation.");
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
    record3.set("name", "Mobile Developer (iOS)");
    record3.set("slug", "mobile-developer-ios");
    record3.set("description", "Develop native iOS applications using Swift and Objective-C");
    record3.set("averageSalary", 100000);
    record3.set("salaryRange", "{'min': 75000, 'max': 150000}");
    record3.set("demandLevel", "High");
    record3.set("timeToReady", 14);
    record3.set("overview", "iOS developers create applications for Apple devices. Strong demand with competitive salaries and growing opportunities.");
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
    record4.set("name", "Mobile Developer (Android)");
    record4.set("slug", "mobile-developer-android");
    record4.set("description", "Develop native Android applications using Kotlin and Java");
    record4.set("averageSalary", 98000);
    record4.set("salaryRange", "{'min': 72000, 'max': 145000}");
    record4.set("demandLevel", "High");
    record4.set("timeToReady", 14);
    record4.set("overview", "Android developers build apps for the world's most popular mobile platform. Consistent demand with good career growth.");
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
    record5.set("name", "React Developer");
    record5.set("slug", "react-developer");
    record5.set("description", "Specialize in building applications with React.js framework");
    record5.set("averageSalary", 105000);
    record5.set("salaryRange", "{'min': 80000, 'max': 155000}");
    record5.set("demandLevel", "Very High");
    record5.set("timeToReady", 10);
    record5.set("overview", "React specialists are in extremely high demand. Most startups and enterprises use React for frontend development.");
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
    record6.set("name", "Vue.js Developer");
    record6.set("slug", "vue-developer");
    record6.set("description", "Build applications using Vue.js framework");
    record6.set("averageSalary", 92000);
    record6.set("salaryRange", "{'min': 70000, 'max': 135000}");
    record6.set("demandLevel", "High");
    record6.set("timeToReady", 10);
    record6.set("overview", "Vue developers are increasingly sought after as Vue gains popularity in enterprise applications.");
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
    record7.set("name", "Angular Developer");
    record7.set("slug", "angular-developer");
    record7.set("description", "Develop enterprise applications using Angular framework");
    record7.set("averageSalary", 100000);
    record7.set("salaryRange", "{'min': 75000, 'max': 145000}");
    record7.set("demandLevel", "High");
    record7.set("timeToReady", 12);
    record7.set("overview", "Angular specialists work on large-scale enterprise applications. Strong demand in corporate environments.");
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
    record8.set("name", "Node.js Developer");
    record8.set("slug", "nodejs-developer");
    record8.set("description", "Build server-side applications using Node.js and JavaScript");
    record8.set("averageSalary", 102000);
    record8.set("salaryRange", "{'min': 78000, 'max': 155000}");
    record8.set("demandLevel", "Very High");
    record8.set("timeToReady", 12);
    record8.set("overview", "Node.js developers are highly sought after for building scalable backend systems with JavaScript.");
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
    record9.set("name", "Python Developer");
    record9.set("slug", "python-developer");
    record9.set("description", "Develop applications using Python programming language");
    record9.set("averageSalary", 100000);
    record9.set("salaryRange", "{'min': 75000, 'max': 150000}");
    record9.set("demandLevel", "Very High");
    record9.set("timeToReady", 12);
    record9.set("overview", "Python developers work across web, data science, and AI. Extremely versatile and in high demand.");
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
    record10.set("name", "Java Developer");
    record10.set("slug", "java-developer");
    record10.set("description", "Build enterprise applications using Java");
    record10.set("averageSalary", 105000);
    record10.set("salaryRange", "{'min': 80000, 'max': 160000}");
    record10.set("demandLevel", "High");
    record10.set("timeToReady", 14);
    record10.set("overview", "Java developers work on large-scale enterprise systems. Stable demand with strong compensation.");
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
    record11.set("name", "C++ Developer");
    record11.set("slug", "cpp-developer");
    record11.set("description", "Develop high-performance systems using C++");
    record11.set("averageSalary", 110000);
    record11.set("salaryRange", "{'min': 85000, 'max': 170000}");
    record11.set("demandLevel", "High");
    record11.set("timeToReady", 16);
    record11.set("overview", "C++ specialists work on performance-critical systems, game engines, and embedded systems. Premium compensation.");
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
    record12.set("name", "Go Developer");
    record12.set("slug", "go-developer");
    record12.set("description", "Build concurrent and scalable systems using Go");
    record12.set("averageSalary", 108000);
    record12.set("salaryRange", "{'min': 82000, 'max': 160000}");
    record12.set("demandLevel", "Growing");
    record12.set("timeToReady", 11);
    record12.set("overview", "Go developers are increasingly needed for cloud infrastructure and microservices. Rapidly growing demand.");
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
    record13.set("name", "Rust Developer");
    record13.set("slug", "rust-developer");
    record13.set("description", "Develop safe and concurrent systems using Rust");
    record13.set("averageSalary", 115000);
    record13.set("salaryRange", "{'min': 90000, 'max': 175000}");
    record13.set("demandLevel", "Growing");
    record13.set("timeToReady", 13);
    record13.set("overview", "Rust developers command premium salaries. Growing demand in systems programming and blockchain.");
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
    record14.set("name", "DevOps Engineer");
    record14.set("slug", "devops-engineer");
    record14.set("description", "Manage infrastructure, deployment, and operations");
    record14.set("averageSalary", 115000);
    record14.set("salaryRange", "{'min': 85000, 'max': 170000}");
    record14.set("demandLevel", "Very High");
    record14.set("timeToReady", 16);
    record14.set("overview", "DevOps engineers are critical for modern software delivery. High demand with excellent compensation.");
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
    record15.set("name", "Cloud Architect");
    record15.set("slug", "cloud-architect");
    record15.set("description", "Design and manage cloud infrastructure solutions");
    record15.set("averageSalary", 130000);
    record15.set("salaryRange", "{'min': 100000, 'max': 200000}");
    record15.set("demandLevel", "Very High");
    record15.set("timeToReady", 18);
    record15.set("overview", "Cloud architects design enterprise cloud solutions. Premium role with strong market demand.");
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
    record16.set("name", "AWS Solutions Architect");
    record16.set("slug", "aws-solutions-architect");
    record16.set("description", "Design solutions using Amazon Web Services");
    record16.set("averageSalary", 125000);
    record16.set("salaryRange", "{'min': 95000, 'max': 190000}");
    record16.set("demandLevel", "Very High");
    record16.set("timeToReady", 16);
    record16.set("overview", "AWS specialists are highly sought after. AWS dominates cloud market with strong demand.");
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
    record17.set("name", "Data Engineer");
    record17.set("slug", "data-engineer");
    record17.set("description", "Build data pipelines and infrastructure for data processing");
    record17.set("averageSalary", 115000);
    record17.set("salaryRange", "{'min': 85000, 'max': 170000}");
    record17.set("demandLevel", "Very High");
    record17.set("timeToReady", 14);
    record17.set("overview", "Data engineers build the infrastructure for big data. Critical role with excellent compensation.");
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
    record18.set("name", "Data Scientist");
    record18.set("slug", "data-scientist");
    record18.set("description", "Analyze data and build machine learning models");
    record18.set("averageSalary", 120000);
    record18.set("salaryRange", "{'min': 90000, 'max': 180000}");
    record18.set("demandLevel", "Very High");
    record18.set("timeToReady", 16);
    record18.set("overview", "Data scientists are in extremely high demand. Work with cutting-edge AI and ML technologies.");
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
    record19.set("name", "Machine Learning Engineer");
    record19.set("slug", "machine-learning-engineer");
    record19.set("description", "Develop and deploy machine learning models");
    record19.set("averageSalary", 125000);
    record19.set("salaryRange", "{'min': 95000, 'max': 190000}");
    record19.set("demandLevel", "Very High");
    record19.set("timeToReady", 16);
    record19.set("overview", "ML engineers command premium salaries. Critical for AI-driven companies and research.");
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
    record20.set("name", "AI Engineer");
    record20.set("slug", "ai-engineer");
    record20.set("description", "Build artificial intelligence systems and applications");
    record20.set("averageSalary", 130000);
    record20.set("salaryRange", "{'min': 100000, 'max': 200000}");
    record20.set("demandLevel", "Very High");
    record20.set("timeToReady", 18);
    record20.set("overview", "AI engineers are at the forefront of technology. Extremely high demand with premium compensation.");
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
    record21.set("name", "QA Engineer");
    record21.set("slug", "qa-engineer");
    record21.set("description", "Test software and ensure quality standards");
    record21.set("averageSalary", 85000);
    record21.set("salaryRange", "{'min': 65000, 'max': 125000}");
    record21.set("demandLevel", "High");
    record21.set("timeToReady", 10);
    record21.set("overview", "QA engineers ensure software quality. Solid demand with good career progression.");
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
    record22.set("name", "Automation QA Engineer");
    record22.set("slug", "automation-qa-engineer");
    record22.set("description", "Develop automated testing frameworks and tools");
    record22.set("averageSalary", 95000);
    record22.set("salaryRange", "{'min': 75000, 'max': 140000}");
    record22.set("demandLevel", "Very High");
    record22.set("timeToReady", 12);
    record22.set("overview", "Automation QA engineers are highly valued. Combines programming with testing expertise.");
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
    record23.set("name", "Security Engineer");
    record23.set("slug", "security-engineer");
    record23.set("description", "Implement security measures and protect systems");
    record23.set("averageSalary", 120000);
    record23.set("salaryRange", "{'min': 90000, 'max': 180000}");
    record23.set("demandLevel", "Very High");
    record23.set("timeToReady", 16);
    record23.set("overview", "Security engineers are critical for protecting systems. High demand with premium compensation.");
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
    record24.set("name", "Cybersecurity Analyst");
    record24.set("slug", "cybersecurity-analyst");
    record24.set("description", "Monitor and analyze security threats");
    record24.set("averageSalary", 110000);
    record24.set("salaryRange", "{'min': 85000, 'max': 165000}");
    record24.set("demandLevel", "Very High");
    record24.set("timeToReady", 14);
    record24.set("overview", "Cybersecurity analysts protect organizations from threats. Strong demand with excellent growth.");
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
    record25.set("name", "Penetration Tester");
    record25.set("slug", "penetration-tester");
    record25.set("description", "Test systems for security vulnerabilities");
    record25.set("averageSalary", 115000);
    record25.set("salaryRange", "{'min': 88000, 'max': 175000}");
    record25.set("demandLevel", "High");
    record25.set("timeToReady", 15);
    record25.set("overview", "Penetration testers find vulnerabilities before attackers do. Specialized role with good compensation.");
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
    record26.set("name", "Database Administrator");
    record26.set("slug", "database-administrator");
    record26.set("description", "Manage and optimize databases");
    record26.set("averageSalary", 105000);
    record26.set("salaryRange", "{'min': 80000, 'max': 155000}");
    record26.set("demandLevel", "High");
    record26.set("timeToReady", 13);
    record26.set("overview", "DBAs ensure data integrity and performance. Stable demand with good compensation.");
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
    record27.set("name", "Database Developer");
    record27.set("slug", "database-developer");
    record27.set("description", "Design and develop database systems");
    record27.set("averageSalary", 108000);
    record27.set("salaryRange", "{'min': 82000, 'max': 160000}");
    record27.set("demandLevel", "High");
    record27.set("timeToReady", 14);
    record27.set("overview", "Database developers design efficient data systems. Strong demand in enterprise environments.");
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
    record28.set("name", "Solutions Architect");
    record28.set("slug", "solutions-architect");
    record28.set("description", "Design technical solutions for business problems");
    record28.set("averageSalary", 125000);
    record28.set("salaryRange", "{'min': 95000, 'max': 190000}");
    record28.set("demandLevel", "High");
    record28.set("timeToReady", 18);
    record28.set("overview", "Solutions architects bridge business and technology. Senior role with excellent compensation.");
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
    record29.set("name", "Technical Lead");
    record29.set("slug", "technical-lead");
    record29.set("description", "Lead technical teams and make architectural decisions");
    record29.set("averageSalary", 120000);
    record29.set("salaryRange", "{'min': 90000, 'max': 180000}");
    record29.set("demandLevel", "High");
    record29.set("timeToReady", 16);
    record29.set("overview", "Technical leads guide development teams. Leadership role with strong compensation.");
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
    record30.set("name", "Engineering Manager");
    record30.set("slug", "engineering-manager");
    record30.set("description", "Manage engineering teams and projects");
    record30.set("averageSalary", 130000);
    record30.set("salaryRange", "{'min': 100000, 'max': 200000}");
    record30.set("demandLevel", "High");
    record30.set("timeToReady", 18);
    record30.set("overview", "Engineering managers lead teams and drive delivery. Senior role with premium compensation.");
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
    record31.set("name", "Product Manager");
    record31.set("slug", "product-manager");
    record31.set("description", "Define product strategy and roadmap");
    record31.set("averageSalary", 125000);
    record31.set("salaryRange", "{'min': 95000, 'max': 190000}");
    record31.set("demandLevel", "High");
    record31.set("timeToReady", 14);
    record31.set("overview", "Product managers shape product direction. Strategic role with excellent compensation.");
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
    record32.set("name", "UX/UI Designer");
    record32.set("slug", "ux-ui-designer");
    record32.set("description", "Design user interfaces and experiences");
    record32.set("averageSalary", 95000);
    record32.set("salaryRange", "{'min': 72000, 'max': 140000}");
    record32.set("demandLevel", "High");
    record32.set("timeToReady", 12);
    record32.set("overview", "UX/UI designers create beautiful and usable interfaces. Growing demand with good compensation.");
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
    record33.set("name", "UX Designer");
    record33.set("slug", "ux-designer");
    record33.set("description", "Focus on user experience and usability");
    record33.set("averageSalary", 92000);
    record33.set("salaryRange", "{'min': 70000, 'max': 135000}");
    record33.set("demandLevel", "High");
    record33.set("timeToReady", 12);
    record33.set("overview", "UX designers improve how users interact with products. Strong demand in tech companies.");
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
    record34.set("name", "UI Designer");
    record34.set("slug", "ui-designer");
    record34.set("description", "Design visual interfaces and components");
    record34.set("averageSalary", 88000);
    record34.set("salaryRange", "{'min': 68000, 'max': 130000}");
    record34.set("demandLevel", "Medium");
    record34.set("timeToReady", 10);
    record34.set("overview", "UI designers create visual designs. Solid demand with good career opportunities.");
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
    record35.set("name", "Blockchain Developer");
    record35.set("slug", "blockchain-developer");
    record35.set("description", "Develop blockchain and cryptocurrency applications");
    record35.set("averageSalary", 120000);
    record35.set("salaryRange", "{'min': 90000, 'max': 180000}");
    record35.set("demandLevel", "Growing");
    record35.set("timeToReady", 14);
    record35.set("overview", "Blockchain developers work on cutting-edge technology. Growing demand with premium compensation.");
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
    record36.set("name", "Game Developer");
    record36.set("slug", "game-developer");
    record36.set("description", "Develop video games and interactive experiences");
    record36.set("averageSalary", 95000);
    record36.set("salaryRange", "{'min': 70000, 'max': 145000}");
    record36.set("demandLevel", "Medium");
    record36.set("timeToReady", 14);
    record36.set("overview", "Game developers create interactive entertainment. Competitive field with creative opportunities.");
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
    record37.set("name", "Unity Developer");
    record37.set("slug", "unity-developer");
    record37.set("description", "Develop games using Unity engine");
    record37.set("averageSalary", 92000);
    record37.set("salaryRange", "{'min': 70000, 'max': 140000}");
    record37.set("demandLevel", "High");
    record37.set("timeToReady", 12);
    record37.set("overview", "Unity developers are in high demand. Most popular game engine with strong job market.");
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
    record38.set("name", "Unreal Engine Developer");
    record38.set("slug", "unreal-engine-developer");
    record38.set("description", "Develop games using Unreal Engine");
    record38.set("averageSalary", 98000);
    record38.set("salaryRange", "{'min': 75000, 'max': 150000}");
    record38.set("demandLevel", "High");
    record38.set("timeToReady", 14);
    record38.set("overview", "Unreal developers work on AAA games and VR. Strong demand with good compensation.");
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
    record39.set("name", "AR/VR Developer");
    record39.set("slug", "ar-vr-developer");
    record39.set("description", "Develop augmented and virtual reality applications");
    record39.set("averageSalary", 105000);
    record39.set("salaryRange", "{'min': 80000, 'max': 160000}");
    record39.set("demandLevel", "Growing");
    record39.set("timeToReady", 14);
    record39.set("overview", "AR/VR developers work on emerging technology. Growing demand with premium compensation.");
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
    record40.set("name", "IoT Developer");
    record40.set("slug", "iot-developer");
    record40.set("description", "Develop Internet of Things applications and systems");
    record40.set("averageSalary", 100000);
    record40.set("salaryRange", "{'min': 75000, 'max': 150000}");
    record40.set("demandLevel", "Growing");
    record40.set("timeToReady", 14);
    record40.set("overview", "IoT developers connect physical devices to the internet. Growing field with good opportunities.");
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
    record41.set("name", "Embedded Systems Developer");
    record41.set("slug", "embedded-systems-developer");
    record41.set("description", "Develop software for embedded systems and microcontrollers");
    record41.set("averageSalary", 105000);
    record41.set("salaryRange", "{'min': 80000, 'max': 160000}");
    record41.set("demandLevel", "High");
    record41.set("timeToReady", 15);
    record41.set("overview", "Embedded developers work on hardware-software integration. Specialized role with good compensation.");
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
    record42.set("name", "Systems Administrator");
    record42.set("slug", "systems-administrator");
    record42.set("description", "Manage and maintain computer systems and networks");
    record42.set("averageSalary", 90000);
    record42.set("salaryRange", "{'min': 70000, 'max': 130000}");
    record42.set("demandLevel", "Medium");
    record42.set("timeToReady", 12);
    record42.set("overview", "Systems admins keep infrastructure running. Stable demand with good job security.");
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
    record43.set("name", "Network Engineer");
    record43.set("slug", "network-engineer");
    record43.set("description", "Design and manage computer networks");
    record43.set("averageSalary", 95000);
    record43.set("salaryRange", "{'min': 72000, 'max': 140000}");
    record43.set("demandLevel", "High");
    record43.set("timeToReady", 13);
    record43.set("overview", "Network engineers build and maintain networks. Strong demand in enterprise environments.");
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
    record44.set("name", "Site Reliability Engineer");
    record44.set("slug", "site-reliability-engineer");
    record44.set("description", "Ensure system reliability and performance");
    record44.set("averageSalary", 120000);
    record44.set("salaryRange", "{'min': 90000, 'max': 180000}");
    record44.set("demandLevel", "Very High");
    record44.set("timeToReady", 15);
    record44.set("overview", "SREs keep systems running reliably. High demand with premium compensation.");
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
    record45.set("name", "Technical Writer");
    record45.set("slug", "technical-writer");
    record45.set("description", "Create technical documentation and guides");
    record45.set("averageSalary", 80000);
    record45.set("salaryRange", "{'min': 62000, 'max': 120000}");
    record45.set("demandLevel", "Medium");
    record45.set("timeToReady", 10);
    record45.set("overview", "Technical writers document software. Growing demand as companies value documentation.");
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
    record46.set("name", "DevSecOps Engineer");
    record46.set("slug", "devsecops-engineer");
    record46.set("description", "Integrate security into DevOps processes");
    record46.set("averageSalary", 125000);
    record46.set("salaryRange", "{'min': 95000, 'max': 190000}");
    record46.set("demandLevel", "Very High");
    record46.set("timeToReady", 16);
    record46.set("overview", "DevSecOps engineers embed security in development. Critical role with premium compensation.");
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
    record47.set("name", "Platform Engineer");
    record47.set("slug", "platform-engineer");
    record47.set("description", "Build internal platforms and developer tools");
    record47.set("averageSalary", 120000);
    record47.set("salaryRange", "{'min': 90000, 'max': 180000}");
    record47.set("demandLevel", "Very High");
    record47.set("timeToReady", 15);
    record47.set("overview", "Platform engineers build tools for other developers. Growing role with excellent compensation.");
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
    record48.set("name", "GraphQL Developer");
    record48.set("slug", "graphql-developer");
    record48.set("description", "Develop APIs using GraphQL");
    record48.set("averageSalary", 105000);
    record48.set("salaryRange", "{'min': 80000, 'max': 155000}");
    record48.set("demandLevel", "Growing");
    record48.set("timeToReady", 11);
    record48.set("overview", "GraphQL developers build modern APIs. Growing demand as GraphQL adoption increases.");
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
    record49.set("name", "Microservices Architect");
    record49.set("slug", "microservices-architect");
    record49.set("description", "Design microservices-based architectures");
    record49.set("averageSalary", 130000);
    record49.set("salaryRange", "{'min': 100000, 'max': 200000}");
    record49.set("demandLevel", "Very High");
    record49.set("timeToReady", 17);
    record49.set("overview", "Microservices architects design scalable systems. Senior role with premium compensation.");
  try {
    app.save(record49);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record50 = new Record(collection);
    record50.set("name", "Kubernetes Engineer");
    record50.set("slug", "kubernetes-engineer");
    record50.set("description", "Manage containerized applications with Kubernetes");
    record50.set("averageSalary", 118000);
    record50.set("salaryRange", "{'min': 88000, 'max': 175000}");
    record50.set("demandLevel", "Very High");
    record50.set("timeToReady", 14);
    record50.set("overview", "Kubernetes engineers manage container orchestration. High demand with excellent compensation.");
  try {
    app.save(record50);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record51 = new Record(collection);
    record51.set("name", "Docker Specialist");
    record51.set("slug", "docker-specialist");
    record51.set("description", "Containerize applications using Docker");
    record51.set("averageSalary", 105000);
    record51.set("salaryRange", "{'min': 80000, 'max': 160000}");
    record51.set("demandLevel", "High");
    record51.set("timeToReady", 11);
    record51.set("overview", "Docker specialists containerize applications. Strong demand in modern development.");
  try {
    app.save(record51);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record52 = new Record(collection);
    record52.set("name", "TypeScript Developer");
    record52.set("slug", "typescript-developer");
    record52.set("description", "Develop applications using TypeScript");
    record52.set("averageSalary", 105000);
    record52.set("salaryRange", "{'min': 80000, 'max': 155000}");
    record52.set("demandLevel", "Very High");
    record52.set("timeToReady", 11);
    record52.set("overview", "TypeScript developers build type-safe applications. Rapidly growing demand in JavaScript ecosystem.");
  try {
    app.save(record52);
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
