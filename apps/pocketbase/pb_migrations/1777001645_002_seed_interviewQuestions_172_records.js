/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("interviewQuestions");

  const record0 = new Record(collection);
    record0.set("careerPath", "Software Engineer");
    record0.set("difficulty", "Simple");
    record0.set("questionType", "Technical");
    record0.set("question", "What is the difference between a class and an object?");
    record0.set("expectedAnswer", "A class is a blueprint for creating objects. An object is an instance of a class with specific values for its properties.");
    record0.set("tips", "Think of a class as a template and objects as actual items created from that template.");
    record0.set("timeLimit", 5);
    record0.set("relatedCareers", "Full Stack Developer, Backend Developer, Frontend Developer");
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
    record1.set("careerPath", "Software Engineer");
    record1.set("difficulty", "Medium");
    record1.set("questionType", "Technical");
    record1.set("question", "Explain the concept of polymorphism in object-oriented programming.");
    record1.set("expectedAnswer", "Polymorphism allows objects to take multiple forms. It enables a single interface to be used for different underlying data types. Common types include method overloading and method overriding.");
    record1.set("tips", "Consider examples like function overloading and inheritance hierarchies.");
    record1.set("timeLimit", 8);
    record1.set("relatedCareers", "Backend Developer, Full Stack Developer");
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
    record2.set("careerPath", "Software Engineer");
    record2.set("difficulty", "Hard");
    record2.set("questionType", "SystemDesign");
    record2.set("question", "Design a distributed cache system that can handle millions of requests per second.");
    record2.set("expectedAnswer", "Consider using consistent hashing for distribution, replication for fault tolerance, eviction policies like LRU, and monitoring for performance. Discuss trade-offs between consistency and availability.");
    record2.set("tips", "Think about CAP theorem, sharding strategies, and cache invalidation patterns.");
    record2.set("timeLimit", 15);
    record2.set("relatedCareers", "Backend Developer, Platform Engineer, Site Reliability Engineer");
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
    record3.set("careerPath", "Software Engineer");
    record3.set("difficulty", "Medium");
    record3.set("questionType", "ProblemSolving");
    record3.set("question", "Write an algorithm to find the longest substring without repeating characters.");
    record3.set("expectedAnswer", "Use a sliding window approach with a hash map to track character positions. Time complexity: O(n), Space complexity: O(min(m,n)) where m is charset size.");
    record3.set("tips", "Consider edge cases like empty strings and single characters.");
    record3.set("timeLimit", 10);
    record3.set("relatedCareers", "Full Stack Developer, Backend Developer");
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
    record4.set("careerPath", "Software Engineer");
    record4.set("difficulty", "Medium");
    record4.set("questionType", "Behavioral");
    record4.set("question", "Tell me about a time when you had to debug a complex issue in production.");
    record4.set("expectedAnswer", "Describe the situation, your approach to debugging, tools used, and the resolution. Emphasize communication and learning.");
    record4.set("tips", "Use the STAR method: Situation, Task, Action, Result.");
    record4.set("timeLimit", 10);
    record4.set("relatedCareers", "Backend Developer, Full Stack Developer, DevOps Engineer");
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
    record5.set("careerPath", "Data Analyst");
    record5.set("difficulty", "Simple");
    record5.set("questionType", "Technical");
    record5.set("question", "What is the difference between INNER JOIN and LEFT JOIN in SQL?");
    record5.set("expectedAnswer", "INNER JOIN returns only matching rows from both tables. LEFT JOIN returns all rows from the left table and matching rows from the right table.");
    record5.set("tips", "Visualize with Venn diagrams to understand the difference.");
    record5.set("timeLimit", 5);
    record5.set("relatedCareers", "Data Engineer, Analytics Engineer, Database Administrator");
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
    record6.set("careerPath", "Data Analyst");
    record6.set("difficulty", "Medium");
    record6.set("questionType", "Technical");
    record6.set("question", "How would you handle missing data in a dataset?");
    record6.set("expectedAnswer", "Options include deletion, imputation (mean, median, mode), forward/backward fill, or using algorithms that handle missing values. Choice depends on data distribution and context.");
    record6.set("tips", "Consider the impact on analysis and the reason for missing data.");
    record6.set("timeLimit", 8);
    record6.set("relatedCareers", "Data Scientist, Analytics Engineer, Data Engineer");
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
    record7.set("careerPath", "Data Analyst");
    record7.set("difficulty", "Hard");
    record7.set("questionType", "ProblemSolving");
    record7.set("question", "Write a SQL query to find the top 3 products by revenue for each category in the last quarter.");
    record7.set("expectedAnswer", "Use window functions like ROW_NUMBER() PARTITION BY category ORDER BY revenue DESC, then filter for rank <= 3. Include date filtering for the last quarter.");
    record7.set("tips", "Window functions are powerful for ranking and aggregation problems.");
    record7.set("timeLimit", 12);
    record7.set("relatedCareers", "Data Engineer, Analytics Engineer, Database Administrator");
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
    record8.set("careerPath", "Data Analyst");
    record8.set("difficulty", "Medium");
    record8.set("questionType", "Behavioral");
    record8.set("question", "Describe a time when your analysis led to a significant business decision.");
    record8.set("expectedAnswer", "Explain the business question, your analytical approach, key findings, and the impact of the decision. Quantify results if possible.");
    record8.set("tips", "Focus on the business impact and your role in the analysis.");
    record8.set("timeLimit", 10);
    record8.set("relatedCareers", "Business Analyst, Product Manager");
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
    record9.set("careerPath", "DevOps Engineer");
    record9.set("difficulty", "Simple");
    record9.set("questionType", "Technical");
    record9.set("question", "What is containerization and why is it useful?");
    record9.set("expectedAnswer", "Containerization packages applications with their dependencies into isolated units. Benefits include consistency across environments, scalability, and resource efficiency.");
    record9.set("tips", "Docker is the most popular containerization platform.");
    record9.set("timeLimit", 5);
    record9.set("relatedCareers", "Platform Engineer, Site Reliability Engineer, Backend Developer");
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
    record10.set("careerPath", "DevOps Engineer");
    record10.set("difficulty", "Medium");
    record10.set("questionType", "Technical");
    record10.set("question", "Explain the CI/CD pipeline and its benefits.");
    record10.set("expectedAnswer", "CI/CD automates code integration, testing, and deployment. CI catches bugs early, CD enables rapid releases. Benefits include faster feedback, reduced manual errors, and continuous delivery.");
    record10.set("tips", "Discuss tools like Jenkins, GitLab CI, GitHub Actions.");
    record10.set("timeLimit", 8);
    record10.set("relatedCareers", "Platform Engineer, Release Engineer, Build Engineer");
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
    record11.set("careerPath", "DevOps Engineer");
    record11.set("difficulty", "Hard");
    record11.set("questionType", "SystemDesign");
    record11.set("question", "Design a highly available Kubernetes cluster for a mission-critical application.");
    record11.set("expectedAnswer", "Consider multi-zone deployment, resource limits, health checks, auto-scaling, persistent storage, monitoring, and disaster recovery. Discuss trade-offs between cost and availability.");
    record11.set("tips", "Think about failure scenarios and recovery strategies.");
    record11.set("timeLimit", 15);
    record11.set("relatedCareers", "Platform Engineer, Site Reliability Engineer, Infrastructure Engineer");
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
    record12.set("careerPath", "DevOps Engineer");
    record12.set("difficulty", "Medium");
    record12.set("questionType", "Behavioral");
    record12.set("question", "Tell me about a time you improved system reliability or reduced downtime.");
    record12.set("expectedAnswer", "Describe the problem, your solution, implementation, and measurable improvements. Emphasize proactive monitoring and automation.");
    record12.set("tips", "Quantify improvements in uptime percentage or incident response time.");
    record12.set("timeLimit", 10);
    record12.set("relatedCareers", "Site Reliability Engineer, Platform Engineer");
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
    record13.set("careerPath", "Product Manager");
    record13.set("difficulty", "Simple");
    record13.set("questionType", "Behavioral");
    record13.set("question", "How do you prioritize features for a product roadmap?");
    record13.set("expectedAnswer", "Consider user impact, business value, technical feasibility, and strategic alignment. Use frameworks like RICE (Reach, Impact, Confidence, Effort) or MoSCoW.");
    record13.set("tips", "Discuss stakeholder input and data-driven decision making.");
    record13.set("timeLimit", 8);
    record13.set("relatedCareers", "Technical Product Manager, Business Analyst");
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
    record14.set("careerPath", "Product Manager");
    record14.set("difficulty", "Medium");
    record14.set("questionType", "Behavioral");
    record14.set("question", "Describe your approach to gathering and validating product requirements.");
    record14.set("expectedAnswer", "Conduct user research, interviews, surveys, and usability testing. Validate assumptions with prototypes and MVPs. Involve cross-functional teams.");
    record14.set("tips", "Emphasize user-centric thinking and iterative validation.");
    record14.set("timeLimit", 10);
    record14.set("relatedCareers", "Technical Product Manager, UX/UI Designer");
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
    record15.set("careerPath", "Product Manager");
    record15.set("difficulty", "Hard");
    record15.set("questionType", "Behavioral");
    record15.set("question", "How would you handle a situation where engineering and design teams disagree on a feature implementation?");
    record15.set("expectedAnswer", "Facilitate discussion, understand both perspectives, focus on user needs and business goals. Make data-driven decisions, compromise when needed, and ensure alignment.");
    record15.set("tips", "Emphasize leadership, communication, and conflict resolution skills.");
    record15.set("timeLimit", 12);
    record15.set("relatedCareers", "Technical Product Manager, Engineering Manager");
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
    record16.set("careerPath", "UX/UI Designer");
    record16.set("difficulty", "Simple");
    record16.set("questionType", "Behavioral");
    record16.set("question", "What is the difference between UX and UI design?");
    record16.set("expectedAnswer", "UX focuses on user experience, research, and interaction design. UI focuses on visual design, layout, and interface elements. Both are essential for great products.");
    record16.set("tips", "UX is about how it works, UI is about how it looks.");
    record16.set("timeLimit", 5);
    record16.set("relatedCareers", "Product Manager, Technical Product Manager");
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
    record17.set("careerPath", "UX/UI Designer");
    record17.set("difficulty", "Medium");
    record17.set("questionType", "Behavioral");
    record17.set("question", "Walk me through your design process for a new feature.");
    record17.set("expectedAnswer", "Research, wireframing, prototyping, user testing, iteration, and handoff to development. Emphasize user research and validation at each stage.");
    record17.set("tips", "Discuss tools like Figma, user testing methods, and design systems.");
    record17.set("timeLimit", 10);
    record17.set("relatedCareers", "Product Manager, Frontend Developer");
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
    record18.set("careerPath", "UX/UI Designer");
    record18.set("difficulty", "Hard");
    record18.set("questionType", "Behavioral");
    record18.set("question", "How do you balance aesthetics with usability in design?");
    record18.set("expectedAnswer", "Both are equally important. Conduct user research to understand needs, follow design principles, test with users, and iterate. Good design is both beautiful and functional.");
    record18.set("tips", "Discuss accessibility, user testing, and design systems.");
    record18.set("timeLimit", 12);
    record18.set("relatedCareers", "Frontend Developer, Product Manager");
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
    record19.set("careerPath", "Cloud Architect");
    record19.set("difficulty", "Medium");
    record19.set("questionType", "Technical");
    record19.set("question", "What are the key differences between IaaS, PaaS, and SaaS?");
    record19.set("expectedAnswer", "IaaS provides infrastructure (compute, storage, networking). PaaS provides platform for development. SaaS provides ready-to-use applications. Each offers different levels of control and responsibility.");
    record19.set("tips", "Think about what the provider manages vs. what you manage.");
    record19.set("timeLimit", 8);
    record19.set("relatedCareers", "Solutions Architect, Infrastructure Engineer");
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
    record20.set("careerPath", "Cloud Architect");
    record20.set("difficulty", "Hard");
    record20.set("questionType", "SystemDesign");
    record20.set("question", "Design a multi-region cloud architecture for a global SaaS application with disaster recovery requirements.");
    record20.set("expectedAnswer", "Consider data replication, failover mechanisms, latency optimization, compliance requirements, and cost. Discuss trade-offs between RPO/RTO and cost.");
    record20.set("tips", "Think about active-active vs. active-passive configurations.");
    record20.set("timeLimit", 15);
    record20.set("relatedCareers", "Solutions Architect, Site Reliability Engineer, Infrastructure Engineer");
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
    record21.set("careerPath", "Cloud Architect");
    record21.set("difficulty", "Medium");
    record21.set("questionType", "Behavioral");
    record21.set("question", "Tell me about a complex cloud migration project you led.");
    record21.set("expectedAnswer", "Describe the scope, challenges, your approach, and outcomes. Emphasize planning, risk management, and stakeholder communication.");
    record21.set("tips", "Discuss tools, methodologies, and lessons learned.");
    record21.set("timeLimit", 12);
    record21.set("relatedCareers", "Solutions Architect, Infrastructure Engineer");
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
    record22.set("careerPath", "Machine Learning Engineer");
    record22.set("difficulty", "Simple");
    record22.set("questionType", "Technical");
    record22.set("question", "What is the difference between supervised and unsupervised learning?");
    record22.set("expectedAnswer", "Supervised learning uses labeled data to train models (classification, regression). Unsupervised learning finds patterns in unlabeled data (clustering, dimensionality reduction).");
    record22.set("tips", "Think about examples like spam detection (supervised) vs. customer segmentation (unsupervised).");
    record22.set("timeLimit", 5);
    record22.set("relatedCareers", "Data Scientist, AI/ML Researcher");
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
    record23.set("careerPath", "Machine Learning Engineer");
    record23.set("difficulty", "Medium");
    record23.set("questionType", "Technical");
    record23.set("question", "How do you prevent overfitting in machine learning models?");
    record23.set("expectedAnswer", "Use techniques like cross-validation, regularization (L1/L2), dropout, early stopping, and data augmentation. Monitor train/test performance gap.");
    record23.set("tips", "Discuss the bias-variance trade-off.");
    record23.set("timeLimit", 8);
    record23.set("relatedCareers", "Data Scientist, AI/ML Researcher");
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
    record24.set("careerPath", "Machine Learning Engineer");
    record24.set("difficulty", "Hard");
    record24.set("questionType", "SystemDesign");
    record24.set("question", "Design a recommendation system for an e-commerce platform handling millions of users and products.");
    record24.set("expectedAnswer", "Consider collaborative filtering, content-based filtering, or hybrid approaches. Discuss scalability, cold-start problem, and real-time updates. Address computational complexity.");
    record24.set("tips", "Think about matrix factorization, embeddings, and serving infrastructure.");
    record24.set("timeLimit", 15);
    record24.set("relatedCareers", "Data Engineer, Data Scientist, Platform Engineer");
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
    record25.set("careerPath", "Machine Learning Engineer");
    record25.set("difficulty", "Medium");
    record25.set("questionType", "Behavioral");
    record25.set("question", "Describe a machine learning project where you had to handle imbalanced data.");
    record25.set("expectedAnswer", "Explain the problem, techniques used (oversampling, undersampling, SMOTE, class weights), evaluation metrics (F1, AUC-ROC), and results.");
    record25.set("tips", "Discuss why accuracy is misleading for imbalanced data.");
    record25.set("timeLimit", 10);
    record25.set("relatedCareers", "Data Scientist, Data Engineer");
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
    record26.set("careerPath", "Full Stack Developer");
    record26.set("difficulty", "Simple");
    record26.set("questionType", "Technical");
    record26.set("question", "What is the difference between REST and GraphQL?");
    record26.set("expectedAnswer", "REST uses fixed endpoints and HTTP methods. GraphQL allows clients to request exactly what data they need. GraphQL reduces over-fetching and under-fetching.");
    record26.set("tips", "Discuss trade-offs in complexity, caching, and learning curve.");
    record26.set("timeLimit", 6);
    record26.set("relatedCareers", "Backend Developer, Frontend Developer, API Developer");
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
    record27.set("careerPath", "Full Stack Developer");
    record27.set("difficulty", "Medium");
    record27.set("questionType", "Technical");
    record27.set("question", "Explain the concept of middleware in web applications.");
    record27.set("expectedAnswer", "Middleware are functions that process requests/responses in a pipeline. They can authenticate, log, validate, transform data, or handle errors. Examples: authentication, CORS, logging.");
    record27.set("tips", "Discuss the order of middleware execution and how they chain together.");
    record27.set("timeLimit", 8);
    record27.set("relatedCareers", "Backend Developer, Frontend Developer");
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
    record28.set("careerPath", "Full Stack Developer");
    record28.set("difficulty", "Hard");
    record28.set("questionType", "SystemDesign");
    record28.set("question", "Design a real-time collaborative document editing application like Google Docs.");
    record28.set("expectedAnswer", "Consider operational transformation or CRDT for conflict resolution, WebSocket for real-time sync, version control, permissions, and offline support. Discuss consistency models.");
    record28.set("tips", "Think about how to handle concurrent edits and network failures.");
    record28.set("timeLimit", 15);
    record28.set("relatedCareers", "Backend Developer, Frontend Developer, Platform Engineer");
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
    record29.set("careerPath", "Full Stack Developer");
    record29.set("difficulty", "Medium");
    record29.set("questionType", "Behavioral");
    record29.set("question", "Tell me about a challenging bug you fixed and how you debugged it.");
    record29.set("expectedAnswer", "Describe the symptoms, your debugging approach, tools used, root cause, and solution. Emphasize systematic thinking and persistence.");
    record29.set("tips", "Use the STAR method and discuss what you learned.");
    record29.set("timeLimit", 10);
    record29.set("relatedCareers", "Backend Developer, Frontend Developer, QA Engineer");
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
    record30.set("careerPath", "Frontend Developer");
    record30.set("difficulty", "Simple");
    record30.set("questionType", "Technical");
    record30.set("question", "What is the difference between let, const, and var in JavaScript?");
    record30.set("expectedAnswer", "var is function-scoped and hoisted. let and const are block-scoped. const cannot be reassigned. Use const by default, let when reassignment is needed.");
    record30.set("tips", "Discuss hoisting and temporal dead zone.");
    record30.set("timeLimit", 5);
    record30.set("relatedCareers", "Full Stack Developer, Web3/Crypto Developer");
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
    record31.set("careerPath", "Frontend Developer");
    record31.set("difficulty", "Medium");
    record31.set("questionType", "Technical");
    record31.set("question", "Explain the concept of virtual DOM in React.");
    record31.set("expectedAnswer", "Virtual DOM is an in-memory representation of the real DOM. React uses it to optimize updates by diffing and batching changes. This improves performance.");
    record31.set("tips", "Discuss reconciliation algorithm and why it matters.");
    record31.set("timeLimit", 8);
    record31.set("relatedCareers", "Full Stack Developer, Web3/Crypto Developer");
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
    record32.set("careerPath", "Frontend Developer");
    record32.set("difficulty", "Hard");
    record32.set("questionType", "ProblemSolving");
    record32.set("question", "Optimize a React application that renders a list of 10,000 items and is experiencing performance issues.");
    record32.set("expectedAnswer", "Use virtualization (react-window), memoization (React.memo, useMemo), code splitting, lazy loading, and profiling tools. Discuss rendering bottlenecks.");
    record32.set("tips", "Think about what causes re-renders and how to prevent unnecessary ones.");
    record32.set("timeLimit", 12);
    record32.set("relatedCareers", "Full Stack Developer, Performance Engineer");
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
    record33.set("careerPath", "Frontend Developer");
    record33.set("difficulty", "Medium");
    record33.set("questionType", "Behavioral");
    record33.set("question", "Describe your approach to responsive design and cross-browser compatibility.");
    record33.set("expectedAnswer", "Use mobile-first approach, CSS media queries, flexible layouts, and testing on multiple browsers. Discuss tools like BrowserStack and progressive enhancement.");
    record33.set("tips", "Emphasize accessibility and user experience across devices.");
    record33.set("timeLimit", 10);
    record33.set("relatedCareers", "Full Stack Developer, UX/UI Designer");
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
    record34.set("careerPath", "Backend Developer");
    record34.set("difficulty", "Simple");
    record34.set("questionType", "Technical");
    record34.set("question", "What is an API and what are the common HTTP methods?");
    record34.set("expectedAnswer", "API is an interface for communication between systems. Common HTTP methods: GET (retrieve), POST (create), PUT (update), DELETE (remove), PATCH (partial update).");
    record34.set("tips", "Discuss RESTful principles and idempotency.");
    record34.set("timeLimit", 5);
    record34.set("relatedCareers", "Full Stack Developer, API Developer");
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
    record35.set("careerPath", "Backend Developer");
    record35.set("difficulty", "Medium");
    record35.set("questionType", "Technical");
    record35.set("question", "Explain database normalization and its benefits.");
    record35.set("expectedAnswer", "Normalization organizes data to reduce redundancy and improve integrity. Normal forms (1NF, 2NF, 3NF) eliminate anomalies. Benefits: consistency, reduced storage, easier maintenance.");
    record35.set("tips", "Discuss trade-offs with denormalization for performance.");
    record35.set("timeLimit", 8);
    record35.set("relatedCareers", "Database Administrator, Data Engineer");
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
    record36.set("careerPath", "Backend Developer");
    record36.set("difficulty", "Hard");
    record36.set("questionType", "SystemDesign");
    record36.set("question", "Design a payment processing system that handles millions of transactions with high reliability and security.");
    record36.set("expectedAnswer", "Consider idempotency, transaction isolation, encryption, PCI compliance, fraud detection, and audit logging. Discuss eventual consistency and retry mechanisms.");
    record36.set("tips", "Think about failure scenarios and recovery strategies.");
    record36.set("timeLimit", 15);
    record36.set("relatedCareers", "Platform Engineer, Security Engineer, Site Reliability Engineer");
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
    record37.set("careerPath", "Backend Developer");
    record37.set("difficulty", "Medium");
    record37.set("questionType", "Behavioral");
    record37.set("question", "Tell me about a time you optimized a slow API endpoint.");
    record37.set("expectedAnswer", "Describe the problem, profiling approach, bottleneck identification, optimization techniques (caching, indexing, query optimization), and performance improvements.");
    record37.set("tips", "Quantify improvements and discuss trade-offs.");
    record37.set("timeLimit", 10);
    record37.set("relatedCareers", "Full Stack Developer, Performance Engineer, Database Administrator");
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
    record38.set("careerPath", "Mobile Developer");
    record38.set("difficulty", "Simple");
    record38.set("questionType", "Technical");
    record38.set("question", "What is the difference between native and cross-platform mobile development?");
    record38.set("expectedAnswer", "Native development uses platform-specific languages (Swift, Kotlin) for better performance. Cross-platform (React Native, Flutter) shares code but may have performance trade-offs.");
    record38.set("tips", "Discuss pros and cons of each approach.");
    record38.set("timeLimit", 6);
    record38.set("relatedCareers", "Frontend Developer, Full Stack Developer");
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
    record39.set("careerPath", "Mobile Developer");
    record39.set("difficulty", "Medium");
    record39.set("questionType", "Technical");
    record39.set("question", "How do you handle state management in a mobile application?");
    record39.set("expectedAnswer", "Use patterns like MVC, MVVM, or Redux. Consider local state, global state, and persistence. Tools: Provider, Bloc, Redux, MobX depending on framework.");
    record39.set("tips", "Discuss when to use each pattern and scalability.");
    record39.set("timeLimit", 8);
    record39.set("relatedCareers", "Frontend Developer, Full Stack Developer");
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
    record40.set("careerPath", "Mobile Developer");
    record40.set("difficulty", "Hard");
    record40.set("questionType", "SystemDesign");
    record40.set("question", "Design an offline-first mobile application that syncs with a backend when connectivity is restored.");
    record40.set("expectedAnswer", "Use local database (SQLite, Realm), queue for pending operations, conflict resolution strategy, and sync mechanism. Discuss eventual consistency and user experience.");
    record40.set("tips", "Think about handling conflicts and network failures.");
    record40.set("timeLimit", 12);
    record40.set("relatedCareers", "Backend Developer, Full Stack Developer, Platform Engineer");
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
    record41.set("careerPath", "Mobile Developer");
    record41.set("difficulty", "Medium");
    record41.set("questionType", "Behavioral");
    record41.set("question", "Describe your experience with mobile app performance optimization.");
    record41.set("expectedAnswer", "Discuss memory management, battery optimization, network efficiency, and profiling tools. Share specific examples and measurable improvements.");
    record41.set("tips", "Emphasize user experience and device constraints.");
    record41.set("timeLimit", 10);
    record41.set("relatedCareers", "Frontend Developer, Performance Engineer");
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
    record42.set("careerPath", "QA Engineer");
    record42.set("difficulty", "Simple");
    record42.set("questionType", "Technical");
    record42.set("question", "What is the difference between unit testing and integration testing?");
    record42.set("expectedAnswer", "Unit testing tests individual components in isolation. Integration testing tests how components work together. Both are essential for quality assurance.");
    record42.set("tips", "Discuss test pyramids and coverage metrics.");
    record42.set("timeLimit", 5);
    record42.set("relatedCareers", "Backend Developer, Frontend Developer, Automation Engineer");
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
    record43.set("careerPath", "QA Engineer");
    record43.set("difficulty", "Medium");
    record43.set("questionType", "Technical");
    record43.set("question", "How do you approach test automation for a web application?");
    record43.set("expectedAnswer", "Use frameworks like Selenium, Cypress, or Playwright. Identify test cases, create test scripts, maintain test data, and integrate with CI/CD. Discuss flakiness and maintenance.");
    record43.set("tips", "Discuss the balance between automation and manual testing.");
    record43.set("timeLimit", 8);
    record43.set("relatedCareers", "Automation Engineer, Backend Developer, Frontend Developer");
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
    record44.set("careerPath", "QA Engineer");
    record44.set("difficulty", "Hard");
    record44.set("questionType", "ProblemSolving");
    record44.set("question", "Design a comprehensive test strategy for a critical payment processing feature.");
    record44.set("expectedAnswer", "Include unit tests, integration tests, end-to-end tests, performance tests, security tests, and manual testing. Discuss test data, edge cases, and regression testing.");
    record44.set("tips", "Think about risk assessment and test prioritization.");
    record44.set("timeLimit", 12);
    record44.set("relatedCareers", "Automation Engineer, Security Engineer");
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
    record45.set("careerPath", "QA Engineer");
    record45.set("difficulty", "Medium");
    record45.set("questionType", "Behavioral");
    record45.set("question", "Tell me about a critical bug you found and how it was resolved.");
    record45.set("expectedAnswer", "Describe the bug, how you discovered it, reproduction steps, impact, and resolution. Emphasize communication and documentation.");
    record45.set("tips", "Discuss what process improvements were made to prevent similar issues.");
    record45.set("timeLimit", 10);
    record45.set("relatedCareers", "Backend Developer, Frontend Developer");
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
    record46.set("careerPath", "Security Engineer");
    record46.set("difficulty", "Simple");
    record46.set("questionType", "Technical");
    record46.set("question", "What is the difference between authentication and authorization?");
    record46.set("expectedAnswer", "Authentication verifies who you are (login). Authorization determines what you can do (permissions). Both are essential for security.");
    record46.set("tips", "Discuss common authentication methods like OAuth, JWT, and MFA.");
    record46.set("timeLimit", 5);
    record46.set("relatedCareers", "Cybersecurity Analyst, Backend Developer");
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
    record47.set("careerPath", "Security Engineer");
    record47.set("difficulty", "Medium");
    record47.set("questionType", "Technical");
    record47.set("question", "Explain common web application vulnerabilities and how to prevent them.");
    record47.set("expectedAnswer", "OWASP Top 10: SQL injection, XSS, CSRF, insecure deserialization, etc. Prevention: input validation, parameterized queries, output encoding, CSRF tokens, security headers.");
    record47.set("tips", "Discuss defense in depth and secure coding practices.");
    record47.set("timeLimit", 10);
    record47.set("relatedCareers", "Cybersecurity Analyst, Penetration Tester, Backend Developer");
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
    record48.set("careerPath", "Security Engineer");
    record48.set("difficulty", "Hard");
    record48.set("questionType", "SystemDesign");
    record48.set("question", "Design a secure authentication and authorization system for a multi-tenant SaaS application.");
    record48.set("expectedAnswer", "Consider OAuth2/OIDC, JWT, role-based access control, tenant isolation, encryption, audit logging, and compliance. Discuss trade-offs and security considerations.");
    record48.set("tips", "Think about token expiration, refresh tokens, and session management.");
    record48.set("timeLimit", 15);
    record48.set("relatedCareers", "Cybersecurity Analyst, Cloud Security Engineer, Backend Developer");
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
    record49.set("careerPath", "Security Engineer");
    record49.set("difficulty", "Medium");
    record49.set("questionType", "Behavioral");
    record49.set("question", "Tell me about a security vulnerability you discovered and how you addressed it.");
    record49.set("expectedAnswer", "Describe the vulnerability, impact assessment, remediation steps, and prevention measures. Emphasize responsible disclosure and communication.");
    record49.set("tips", "Discuss the importance of security culture and continuous improvement.");
    record49.set("timeLimit", 10);
    record49.set("relatedCareers", "Cybersecurity Analyst, Penetration Tester");
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
    record50.set("careerPath", "Database Administrator");
    record50.set("difficulty", "Simple");
    record50.set("questionType", "Technical");
    record50.set("question", "What is the purpose of database indexing?");
    record50.set("expectedAnswer", "Indexes speed up data retrieval by creating a sorted structure. They slow down writes but significantly improve read performance. Trade-off between read and write performance.");
    record50.set("tips", "Discuss different index types: B-tree, hash, bitmap.");
    record50.set("timeLimit", 5);
    record50.set("relatedCareers", "Data Engineer, Backend Developer");
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
    record51.set("careerPath", "Database Administrator");
    record51.set("difficulty", "Medium");
    record51.set("questionType", "Technical");
    record51.set("question", "How do you approach database performance tuning?");
    record51.set("expectedAnswer", "Identify slow queries using profiling tools, analyze execution plans, optimize indexes, rewrite queries, and monitor system resources. Discuss caching and denormalization.");
    record51.set("tips", "Use EXPLAIN plans and query analysis tools.");
    record51.set("timeLimit", 10);
    record51.set("relatedCareers", "Data Engineer, Backend Developer, Performance Engineer");
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
    record52.set("careerPath", "Database Administrator");
    record52.set("difficulty", "Hard");
    record52.set("questionType", "SystemDesign");
    record52.set("question", "Design a database architecture for a high-traffic application with sharding and replication requirements.");
    record52.set("expectedAnswer", "Consider sharding strategy (range, hash, directory-based), replication (master-slave, multi-master), consistency models, and failover mechanisms. Discuss trade-offs.");
    record52.set("tips", "Think about hot spots, data migration, and operational complexity.");
    record52.set("timeLimit", 15);
    record52.set("relatedCareers", "Data Engineer, Platform Engineer, Site Reliability Engineer");
  try {
    app.save(record52);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record53 = new Record(collection);
    record53.set("careerPath", "Database Administrator");
    record53.set("difficulty", "Medium");
    record53.set("questionType", "Behavioral");
    record53.set("question", "Tell me about a time you recovered from a database failure or data loss incident.");
    record53.set("expectedAnswer", "Describe the incident, root cause, recovery process, and preventive measures implemented. Emphasize backup strategies and disaster recovery planning.");
    record53.set("tips", "Discuss backup frequency, testing, and RTO/RPO.");
    record53.set("timeLimit", 10);
    record53.set("relatedCareers", "Site Reliability Engineer, Infrastructure Engineer");
  try {
    app.save(record53);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record54 = new Record(collection);
    record54.set("careerPath", "Systems Administrator");
    record54.set("difficulty", "Simple");
    record54.set("questionType", "Technical");
    record54.set("question", "What is the difference between TCP and UDP?");
    record54.set("expectedAnswer", "TCP is connection-oriented, reliable, and ordered. UDP is connectionless, fast, but unreliable. TCP for accuracy (email, web), UDP for speed (video, gaming).");
    record54.set("tips", "Discuss the three-way handshake and packet loss.");
    record54.set("timeLimit", 5);
    record54.set("relatedCareers", "Network Engineer, Infrastructure Engineer");
  try {
    app.save(record54);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record55 = new Record(collection);
    record55.set("careerPath", "Systems Administrator");
    record55.set("difficulty", "Medium");
    record55.set("questionType", "Technical");
    record55.set("question", "How do you manage system security and keep servers patched?");
    record55.set("expectedAnswer", "Implement patch management policies, automated updates, vulnerability scanning, and testing. Balance security with stability. Use configuration management tools.");
    record55.set("tips", "Discuss zero-day vulnerabilities and emergency patching.");
    record55.set("timeLimit", 8);
    record55.set("relatedCareers", "Security Engineer, Infrastructure Engineer");
  try {
    app.save(record55);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record56 = new Record(collection);
    record56.set("careerPath", "Systems Administrator");
    record56.set("difficulty", "Hard");
    record56.set("questionType", "SystemDesign");
    record56.set("question", "Design a disaster recovery plan for a critical infrastructure with multiple data centers.");
    record56.set("expectedAnswer", "Consider RTO/RPO requirements, backup strategies, failover mechanisms, testing procedures, and documentation. Discuss cost-benefit analysis and compliance.");
    record56.set("tips", "Think about different failure scenarios and recovery priorities.");
    record56.set("timeLimit", 15);
    record56.set("relatedCareers", "Site Reliability Engineer, Infrastructure Engineer, Cloud Architect");
  try {
    app.save(record56);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record57 = new Record(collection);
    record57.set("careerPath", "Systems Administrator");
    record57.set("difficulty", "Medium");
    record57.set("questionType", "Behavioral");
    record57.set("question", "Tell me about a time you resolved a critical system outage.");
    record57.set("expectedAnswer", "Describe the incident, your troubleshooting approach, root cause, resolution, and post-incident improvements. Emphasize communication and documentation.");
    record57.set("tips", "Discuss incident response procedures and lessons learned.");
    record57.set("timeLimit", 10);
    record57.set("relatedCareers", "Site Reliability Engineer, Infrastructure Engineer");
  try {
    app.save(record57);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record58 = new Record(collection);
    record58.set("careerPath", "Network Engineer");
    record58.set("difficulty", "Simple");
    record58.set("questionType", "Technical");
    record58.set("question", "What is the OSI model and why is it important?");
    record58.set("expectedAnswer", "The OSI model has 7 layers describing network communication. It helps understand how data flows and troubleshoot network issues. Layers: Physical, Data Link, Network, Transport, Session, Presentation, Application.");
    record58.set("tips", "Remember the mnemonic: Please Do Not Throw Sausage Pizza Away.");
    record58.set("timeLimit", 6);
    record58.set("relatedCareers", "Systems Administrator, Infrastructure Engineer");
  try {
    app.save(record58);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record59 = new Record(collection);
    record59.set("careerPath", "Network Engineer");
    record59.set("difficulty", "Medium");
    record59.set("questionType", "Technical");
    record59.set("question", "Explain the difference between routing and switching.");
    record59.set("expectedAnswer", "Switching operates at Layer 2 (Data Link), forwarding frames within a LAN. Routing operates at Layer 3 (Network), forwarding packets between networks using IP addresses.");
    record59.set("tips", "Discuss MAC addresses vs. IP addresses.");
    record59.set("timeLimit", 8);
    record59.set("relatedCareers", "Systems Administrator, Infrastructure Engineer");
  try {
    app.save(record59);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record60 = new Record(collection);
    record60.set("careerPath", "Network Engineer");
    record60.set("difficulty", "Hard");
    record60.set("questionType", "SystemDesign");
    record60.set("question", "Design a network architecture for a global enterprise with multiple offices and cloud infrastructure.");
    record60.set("expectedAnswer", "Consider WAN design, SD-WAN, VPN, load balancing, redundancy, security, and QoS. Discuss hybrid cloud connectivity and disaster recovery.");
    record60.set("tips", "Think about latency, bandwidth, and cost optimization.");
    record60.set("timeLimit", 15);
    record60.set("relatedCareers", "Systems Administrator, Infrastructure Engineer, Cloud Architect");
  try {
    app.save(record60);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record61 = new Record(collection);
    record61.set("careerPath", "Network Engineer");
    record61.set("difficulty", "Medium");
    record61.set("questionType", "Behavioral");
    record61.set("question", "Tell me about a time you optimized network performance or resolved connectivity issues.");
    record61.set("expectedAnswer", "Describe the problem, diagnostic tools used, root cause, optimization techniques, and measurable improvements. Emphasize systematic troubleshooting.");
    record61.set("tips", "Discuss monitoring and proactive maintenance.");
    record61.set("timeLimit", 10);
    record61.set("relatedCareers", "Systems Administrator, Infrastructure Engineer");
  try {
    app.save(record61);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record62 = new Record(collection);
    record62.set("careerPath", "Solutions Architect");
    record62.set("difficulty", "Medium");
    record62.set("questionType", "Behavioral");
    record62.set("question", "Walk me through your approach to designing a solution for a client's business problem.");
    record62.set("expectedAnswer", "Understand requirements, assess current state, propose architecture, discuss trade-offs, address concerns, and plan implementation. Emphasize stakeholder communication.");
    record62.set("tips", "Use frameworks like TOGAF or Zachman.");
    record62.set("timeLimit", 10);
    record62.set("relatedCareers", "Cloud Architect, Technical Product Manager");
  try {
    app.save(record62);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record63 = new Record(collection);
    record63.set("careerPath", "Solutions Architect");
    record63.set("difficulty", "Hard");
    record63.set("questionType", "SystemDesign");
    record63.set("question", "Design a solution for a retail company to modernize their legacy systems and enable omnichannel commerce.");
    record63.set("expectedAnswer", "Consider microservices, cloud migration, API-first approach, data integration, and scalability. Discuss phased approach, risk mitigation, and ROI.");
    record63.set("tips", "Think about business continuity during migration.");
    record63.set("timeLimit", 15);
    record63.set("relatedCareers", "Cloud Architect, Technical Product Manager, Infrastructure Engineer");
  try {
    app.save(record63);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record64 = new Record(collection);
    record64.set("careerPath", "Solutions Architect");
    record64.set("difficulty", "Medium");
    record64.set("questionType", "Behavioral");
    record64.set("question", "Tell me about a complex solution you designed and the challenges you overcame.");
    record64.set("expectedAnswer", "Describe the business context, technical challenges, your approach, and outcomes. Emphasize problem-solving and stakeholder management.");
    record64.set("tips", "Discuss lessons learned and how you'd approach it differently.");
    record64.set("timeLimit", 12);
    record64.set("relatedCareers", "Cloud Architect, Technical Product Manager");
  try {
    app.save(record64);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record65 = new Record(collection);
    record65.set("careerPath", "Technical Writer");
    record65.set("difficulty", "Simple");
    record65.set("questionType", "Behavioral");
    record65.set("question", "What is your approach to writing technical documentation?");
    record65.set("expectedAnswer", "Understand the audience, organize logically, use clear language, include examples, and maintain consistency. Emphasize accuracy and usability.");
    record65.set("tips", "Discuss tools like Markdown, Confluence, and documentation generators.");
    record65.set("timeLimit", 8);
    record65.set("relatedCareers", "Product Manager, Technical Product Manager");
  try {
    app.save(record65);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record66 = new Record(collection);
    record66.set("careerPath", "Technical Writer");
    record66.set("difficulty", "Medium");
    record66.set("questionType", "Behavioral");
    record66.set("question", "Describe your experience documenting complex technical concepts for different audiences.");
    record66.set("expectedAnswer", "Explain how you adapt content for different skill levels, use visuals effectively, and gather feedback. Discuss documentation tools and version control.");
    record66.set("tips", "Emphasize clarity and user feedback.");
    record66.set("timeLimit", 10);
    record66.set("relatedCareers", "Product Manager, UX/UI Designer");
  try {
    app.save(record66);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record67 = new Record(collection);
    record67.set("careerPath", "Technical Writer");
    record67.set("difficulty", "Hard");
    record67.set("questionType", "Behavioral");
    record67.set("question", "How would you approach documenting a new API for both developers and non-technical stakeholders?");
    record67.set("expectedAnswer", "Create separate documentation: API reference for developers, integration guides, and business overview for stakeholders. Use examples, diagrams, and clear language.");
    record67.set("tips", "Discuss documentation structure and tools.");
    record67.set("timeLimit", 12);
    record67.set("relatedCareers", "API Developer, Product Manager");
  try {
    app.save(record67);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record68 = new Record(collection);
    record68.set("careerPath", "Data Scientist");
    record68.set("difficulty", "Simple");
    record68.set("questionType", "Technical");
    record68.set("question", "What is the difference between correlation and causation?");
    record68.set("expectedAnswer", "Correlation shows relationship between variables. Causation means one causes the other. Correlation doesn't imply causation; confounding variables may exist.");
    record68.set("tips", "Discuss Simpson's Paradox and the importance of experimental design.");
    record68.set("timeLimit", 6);
    record68.set("relatedCareers", "Data Analyst, Analytics Engineer");
  try {
    app.save(record68);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record69 = new Record(collection);
    record69.set("careerPath", "Data Scientist");
    record69.set("difficulty", "Medium");
    record69.set("questionType", "Technical");
    record69.set("question", "Explain the bias-variance trade-off in machine learning.");
    record69.set("expectedAnswer", "Bias is error from wrong assumptions. Variance is error from sensitivity to training data. High bias = underfitting, high variance = overfitting. Balance is key.");
    record69.set("tips", "Discuss regularization and cross-validation.");
    record69.set("timeLimit", 8);
    record69.set("relatedCareers", "Machine Learning Engineer, AI/ML Researcher");
  try {
    app.save(record69);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record70 = new Record(collection);
    record70.set("careerPath", "Data Scientist");
    record70.set("difficulty", "Hard");
    record70.set("questionType", "ProblemSolving");
    record70.set("question", "Design an experiment to test if a new recommendation algorithm improves user engagement.");
    record70.set("expectedAnswer", "A/B test with control and treatment groups, define metrics (CTR, conversion, engagement), calculate sample size, run for sufficient duration, and analyze statistical significance.");
    record70.set("tips", "Discuss multiple testing corrections and practical significance.");
    record70.set("timeLimit", 12);
    record70.set("relatedCareers", "Machine Learning Engineer, Analytics Engineer, Product Manager");
  try {
    app.save(record70);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record71 = new Record(collection);
    record71.set("careerPath", "Data Scientist");
    record71.set("difficulty", "Medium");
    record71.set("questionType", "Behavioral");
    record71.set("question", "Tell me about a data science project where you had to communicate findings to non-technical stakeholders.");
    record71.set("expectedAnswer", "Describe the project, key findings, how you simplified complex concepts, and the business impact. Emphasize visualization and storytelling.");
    record71.set("tips", "Discuss the importance of context and actionable insights.");
    record71.set("timeLimit", 10);
    record71.set("relatedCareers", "Data Analyst, Product Manager");
  try {
    app.save(record71);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record72 = new Record(collection);
    record72.set("careerPath", "Business Analyst");
    record72.set("difficulty", "Simple");
    record72.set("questionType", "Behavioral");
    record72.set("question", "What is your approach to gathering business requirements?");
    record72.set("expectedAnswer", "Conduct interviews, workshops, and surveys with stakeholders. Document requirements clearly, validate understanding, and prioritize. Use tools like user stories and use cases.");
    record72.set("tips", "Emphasize stakeholder communication and documentation.");
    record72.set("timeLimit", 8);
    record72.set("relatedCareers", "Product Manager, Technical Product Manager");
  try {
    app.save(record72);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record73 = new Record(collection);
    record73.set("careerPath", "Business Analyst");
    record73.set("difficulty", "Medium");
    record73.set("questionType", "Behavioral");
    record73.set("question", "Describe a time you identified a business problem and proposed a solution.");
    record73.set("expectedAnswer", "Explain the problem discovery, analysis, proposed solution, stakeholder buy-in, and outcomes. Emphasize business impact and ROI.");
    record73.set("tips", "Discuss how you measured success.");
    record73.set("timeLimit", 10);
    record73.set("relatedCareers", "Product Manager, Data Analyst");
  try {
    app.save(record73);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record74 = new Record(collection);
    record74.set("careerPath", "Business Analyst");
    record74.set("difficulty", "Hard");
    record74.set("questionType", "Behavioral");
    record74.set("question", "How would you approach analyzing a complex business process to identify improvement opportunities?");
    record74.set("expectedAnswer", "Map current process, identify bottlenecks, analyze root causes, benchmark against best practices, propose improvements, and measure impact. Use tools like process mining.");
    record74.set("tips", "Discuss change management and stakeholder alignment.");
    record74.set("timeLimit", 12);
    record74.set("relatedCareers", "Product Manager, Project Manager");
  try {
    app.save(record74);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record75 = new Record(collection);
    record75.set("careerPath", "Project Manager");
    record75.set("difficulty", "Simple");
    record75.set("questionType", "Behavioral");
    record75.set("question", "What is your approach to project planning and scheduling?");
    record75.set("expectedAnswer", "Define scope, identify tasks, estimate effort, sequence activities, allocate resources, and create timeline. Use tools like Gantt charts and critical path analysis.");
    record75.set("tips", "Discuss risk management and contingency planning.");
    record75.set("timeLimit", 8);
    record75.set("relatedCareers", "Scrum Master, Product Manager");
  try {
    app.save(record75);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record76 = new Record(collection);
    record76.set("careerPath", "Project Manager");
    record76.set("difficulty", "Medium");
    record76.set("questionType", "Behavioral");
    record76.set("question", "Tell me about a time you managed a project that went off track and how you recovered.");
    record76.set("expectedAnswer", "Describe the issue, impact assessment, corrective actions, communication with stakeholders, and lessons learned. Emphasize problem-solving and leadership.");
    record76.set("tips", "Discuss how you prevented similar issues in the future.");
    record76.set("timeLimit", 10);
    record76.set("relatedCareers", "Scrum Master, Engineering Manager");
  try {
    app.save(record76);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record77 = new Record(collection);
    record77.set("careerPath", "Project Manager");
    record77.set("difficulty", "Hard");
    record77.set("questionType", "Behavioral");
    record77.set("question", "How would you manage a large, complex project with multiple teams and stakeholders?");
    record77.set("expectedAnswer", "Establish clear governance, communication plans, risk management, and escalation procedures. Use project management tools, track metrics, and ensure alignment.");
    record77.set("tips", "Discuss stakeholder management and conflict resolution.");
    record77.set("timeLimit", 12);
    record77.set("relatedCareers", "Scrum Master, Engineering Manager");
  try {
    app.save(record77);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record78 = new Record(collection);
    record78.set("careerPath", "Scrum Master");
    record78.set("difficulty", "Simple");
    record78.set("questionType", "Behavioral");
    record78.set("question", "What is the role of a Scrum Master?");
    record78.set("expectedAnswer", "Facilitate Scrum ceremonies, remove impediments, coach the team on Agile practices, and protect the team from distractions. Servant-leader mindset.");
    record78.set("tips", "Discuss the difference between Scrum Master and Project Manager.");
    record78.set("timeLimit", 6);
    record78.set("relatedCareers", "Project Manager, Engineering Manager");
  try {
    app.save(record78);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record79 = new Record(collection);
    record79.set("careerPath", "Scrum Master");
    record79.set("difficulty", "Medium");
    record79.set("questionType", "Behavioral");
    record79.set("question", "Describe your approach to handling team conflicts and improving team dynamics.");
    record79.set("expectedAnswer", "Address conflicts early, facilitate discussion, focus on interests not positions, and build psychological safety. Use retrospectives for continuous improvement.");
    record79.set("tips", "Emphasize empathy and communication skills.");
    record79.set("timeLimit", 10);
    record79.set("relatedCareers", "Project Manager, Engineering Manager");
  try {
    app.save(record79);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record80 = new Record(collection);
    record80.set("careerPath", "Scrum Master");
    record80.set("difficulty", "Hard");
    record80.set("questionType", "Behavioral");
    record80.set("question", "How would you help a team improve their velocity and delivery consistency?");
    record80.set("expectedAnswer", "Analyze sprint metrics, identify bottlenecks, improve estimation, reduce scope creep, and foster continuous improvement. Use data-driven approach.");
    record80.set("tips", "Discuss retrospectives and process improvements.");
    record80.set("timeLimit", 12);
    record80.set("relatedCareers", "Project Manager, Engineering Manager");
  try {
    app.save(record80);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record81 = new Record(collection);
    record81.set("careerPath", "IT Manager");
    record81.set("difficulty", "Medium");
    record81.set("questionType", "Behavioral");
    record81.set("question", "What is your approach to managing IT operations and infrastructure?");
    record81.set("expectedAnswer", "Establish SLAs, implement monitoring, manage incidents, plan capacity, control costs, and ensure security. Balance reliability with innovation.");
    record81.set("tips", "Discuss ITIL and best practices.");
    record81.set("timeLimit", 10);
    record81.set("relatedCareers", "Systems Administrator, Infrastructure Engineer");
  try {
    app.save(record81);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record82 = new Record(collection);
    record82.set("careerPath", "IT Manager");
    record82.set("difficulty", "Hard");
    record82.set("questionType", "Behavioral");
    record82.set("question", "How would you approach a digital transformation initiative for an organization?");
    record82.set("expectedAnswer", "Assess current state, define vision, create roadmap, manage change, build capabilities, and measure outcomes. Emphasize stakeholder engagement and risk management.");
    record82.set("tips", "Discuss organizational change management.");
    record82.set("timeLimit", 12);
    record82.set("relatedCareers", "Cloud Architect, Solutions Architect");
  try {
    app.save(record82);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record83 = new Record(collection);
    record83.set("careerPath", "IT Manager");
    record83.set("difficulty", "Medium");
    record83.set("questionType", "Behavioral");
    record83.set("question", "Tell me about a time you led a team through a major technology change.");
    record83.set("expectedAnswer", "Describe the change, challenges, your leadership approach, team support, and outcomes. Emphasize communication and change management.");
    record83.set("tips", "Discuss how you addressed resistance and built buy-in.");
    record83.set("timeLimit", 10);
    record83.set("relatedCareers", "Engineering Manager, Project Manager");
  try {
    app.save(record83);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record84 = new Record(collection);
    record84.set("careerPath", "CTO/VP Engineering");
    record84.set("difficulty", "Hard");
    record84.set("questionType", "Behavioral");
    record84.set("question", "How would you build and scale an engineering organization?");
    record84.set("expectedAnswer", "Define culture and values, hire talent, establish processes, invest in tools and infrastructure, mentor leaders, and align with business strategy. Discuss growth stages.");
    record84.set("tips", "Emphasize leadership, culture, and strategic thinking.");
    record84.set("timeLimit", 15);
    record84.set("relatedCareers", "Engineering Manager, Technical Product Manager");
  try {
    app.save(record84);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record85 = new Record(collection);
    record85.set("careerPath", "CTO/VP Engineering");
    record85.set("difficulty", "Hard");
    record85.set("questionType", "Behavioral");
    record85.set("question", "Describe your approach to technology strategy and architectural decisions.");
    record85.set("expectedAnswer", "Assess business needs, evaluate technologies, consider trade-offs, build consensus, and plan implementation. Balance innovation with stability.");
    record85.set("tips", "Discuss frameworks for technology decisions.");
    record85.set("timeLimit", 12);
    record85.set("relatedCareers", "Cloud Architect, Solutions Architect");
  try {
    app.save(record85);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record86 = new Record(collection);
    record86.set("careerPath", "CTO/VP Engineering");
    record86.set("difficulty", "Hard");
    record86.set("questionType", "Behavioral");
    record86.set("question", "Tell me about a major technical decision you made and its impact on the organization.");
    record86.set("expectedAnswer", "Describe the decision context, alternatives considered, your reasoning, implementation, and outcomes. Emphasize strategic thinking and leadership.");
    record86.set("tips", "Discuss how you built consensus and managed risk.");
    record86.set("timeLimit", 12);
    record86.set("relatedCareers", "Engineering Manager, Cloud Architect");
  try {
    app.save(record86);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record87 = new Record(collection);
    record87.set("careerPath", "Cybersecurity Analyst");
    record87.set("difficulty", "Simple");
    record87.set("questionType", "Technical");
    record87.set("question", "What is the principle of least privilege?");
    record87.set("expectedAnswer", "Users should have minimum permissions needed for their role. Reduces attack surface and limits damage from compromised accounts. Essential security principle.");
    record87.set("tips", "Discuss access control and privilege escalation.");
    record87.set("timeLimit", 5);
    record87.set("relatedCareers", "Security Engineer, Penetration Tester");
  try {
    app.save(record87);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record88 = new Record(collection);
    record88.set("careerPath", "Cybersecurity Analyst");
    record88.set("difficulty", "Medium");
    record88.set("questionType", "Technical");
    record88.set("question", "Explain the concept of defense in depth.");
    record88.set("expectedAnswer", "Multiple layers of security controls to protect against breaches. If one layer fails, others provide protection. Includes network, application, and data security.");
    record88.set("tips", "Discuss examples like firewalls, IDS, encryption, and access controls.");
    record88.set("timeLimit", 8);
    record88.set("relatedCareers", "Security Engineer, Cloud Security Engineer");
  try {
    app.save(record88);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record89 = new Record(collection);
    record89.set("careerPath", "Cybersecurity Analyst");
    record89.set("difficulty", "Hard");
    record89.set("questionType", "SystemDesign");
    record89.set("question", "Design a security monitoring and incident response system for an enterprise.");
    record89.set("expectedAnswer", "Include SIEM, threat detection, incident response procedures, forensics capabilities, and communication plans. Discuss automation and escalation.");
    record89.set("tips", "Think about false positives and alert fatigue.");
    record89.set("timeLimit", 15);
    record89.set("relatedCareers", "Security Engineer, Penetration Tester");
  try {
    app.save(record89);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record90 = new Record(collection);
    record90.set("careerPath", "Cybersecurity Analyst");
    record90.set("difficulty", "Medium");
    record90.set("questionType", "Behavioral");
    record90.set("question", "Tell me about a security incident you investigated and how you responded.");
    record90.set("expectedAnswer", "Describe the incident, investigation process, findings, remediation, and preventive measures. Emphasize documentation and communication.");
    record90.set("tips", "Discuss incident response procedures and lessons learned.");
    record90.set("timeLimit", 10);
    record90.set("relatedCareers", "Security Engineer, Penetration Tester");
  try {
    app.save(record90);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record91 = new Record(collection);
    record91.set("careerPath", "Penetration Tester");
    record91.set("difficulty", "Medium");
    record91.set("questionType", "Technical");
    record91.set("question", "What is the difference between black box, white box, and gray box testing?");
    record91.set("expectedAnswer", "Black box: no knowledge of system. White box: full knowledge. Gray box: partial knowledge. Each has different purposes and reveals different vulnerabilities.");
    record91.set("tips", "Discuss when to use each approach.");
    record91.set("timeLimit", 8);
    record91.set("relatedCareers", "Security Engineer, QA Engineer");
  try {
    app.save(record91);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record92 = new Record(collection);
    record92.set("careerPath", "Penetration Tester");
    record92.set("difficulty", "Hard");
    record92.set("questionType", "ProblemSolving");
    record92.set("question", "Walk me through your approach to conducting a penetration test on a web application.");
    record92.set("expectedAnswer", "Reconnaissance, scanning, enumeration, exploitation, post-exploitation, and reporting. Discuss tools, techniques, and responsible disclosure.");
    record92.set("tips", "Emphasize methodology and documentation.");
    record92.set("timeLimit", 12);
    record92.set("relatedCareers", "Security Engineer, Cybersecurity Analyst");
  try {
    app.save(record92);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record93 = new Record(collection);
    record93.set("careerPath", "Penetration Tester");
    record93.set("difficulty", "Medium");
    record93.set("questionType", "Behavioral");
    record93.set("question", "Tell me about a critical vulnerability you discovered and how you reported it.");
    record93.set("expectedAnswer", "Describe the vulnerability, impact, proof of concept, remediation recommendations, and responsible disclosure process. Emphasize communication.");
    record93.set("tips", "Discuss the importance of clear reporting.");
    record93.set("timeLimit", 10);
    record93.set("relatedCareers", "Security Engineer, Cybersecurity Analyst");
  try {
    app.save(record93);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record94 = new Record(collection);
    record94.set("careerPath", "Cloud Security Engineer");
    record94.set("difficulty", "Medium");
    record94.set("questionType", "Technical");
    record94.set("question", "What are the shared responsibility models in cloud computing?");
    record94.set("expectedAnswer", "Cloud provider secures infrastructure. Customer secures data, access, and applications. Varies by service model (IaaS, PaaS, SaaS). Clear understanding is critical.");
    record94.set("tips", "Discuss AWS, Azure, and GCP models.");
    record94.set("timeLimit", 8);
    record94.set("relatedCareers", "Security Engineer, Cloud Architect");
  try {
    app.save(record94);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record95 = new Record(collection);
    record95.set("careerPath", "Cloud Security Engineer");
    record95.set("difficulty", "Hard");
    record95.set("questionType", "SystemDesign");
    record95.set("question", "Design a secure cloud infrastructure for a regulated industry (healthcare, finance).");
    record95.set("expectedAnswer", "Consider encryption, access controls, compliance (HIPAA, PCI-DSS), audit logging, data residency, and disaster recovery. Discuss trade-offs and compliance requirements.");
    record95.set("tips", "Think about regulatory requirements and risk management.");
    record95.set("timeLimit", 15);
    record95.set("relatedCareers", "Security Engineer, Cloud Architect");
  try {
    app.save(record95);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record96 = new Record(collection);
    record96.set("careerPath", "Cloud Security Engineer");
    record96.set("difficulty", "Medium");
    record96.set("questionType", "Behavioral");
    record96.set("question", "Tell me about a time you secured a cloud migration or deployment.");
    record96.set("expectedAnswer", "Describe the project, security challenges, your approach, controls implemented, and outcomes. Emphasize compliance and risk management.");
    record96.set("tips", "Discuss lessons learned and best practices.");
    record96.set("timeLimit", 10);
    record96.set("relatedCareers", "Security Engineer, Cloud Architect");
  try {
    app.save(record96);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record97 = new Record(collection);
    record97.set("careerPath", "AI/ML Researcher");
    record97.set("difficulty", "Hard");
    record97.set("questionType", "Technical");
    record97.set("question", "Explain the concept of transfer learning and its applications.");
    record97.set("expectedAnswer", "Transfer learning reuses knowledge from one task for another. Reduces training time and data requirements. Applications: computer vision, NLP, domain adaptation.");
    record97.set("tips", "Discuss fine-tuning and feature extraction.");
    record97.set("timeLimit", 10);
    record97.set("relatedCareers", "Machine Learning Engineer, Data Scientist");
  try {
    app.save(record97);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record98 = new Record(collection);
    record98.set("careerPath", "AI/ML Researcher");
    record98.set("difficulty", "Hard");
    record98.set("questionType", "ProblemSolving");
    record98.set("question", "Design a novel approach to solve a complex machine learning problem in your area of expertise.");
    record98.set("expectedAnswer", "Propose a new architecture, algorithm, or technique. Discuss motivation, methodology, expected benefits, and evaluation approach. Show creativity and rigor.");
    record98.set("tips", "Emphasize novelty and scientific rigor.");
    record98.set("timeLimit", 15);
    record98.set("relatedCareers", "Machine Learning Engineer, Data Scientist");
  try {
    app.save(record98);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record99 = new Record(collection);
    record99.set("careerPath", "AI/ML Researcher");
    record99.set("difficulty", "Hard");
    record99.set("questionType", "Behavioral");
    record99.set("question", "Tell me about a research project you led and the impact of your findings.");
    record99.set("expectedAnswer", "Describe the research question, methodology, findings, and real-world applications. Emphasize innovation and contribution to the field.");
    record99.set("tips", "Discuss publications and collaborations.");
    record99.set("timeLimit", 12);
    record99.set("relatedCareers", "Machine Learning Engineer, Data Scientist");
  try {
    app.save(record99);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record100 = new Record(collection);
    record100.set("careerPath", "Blockchain Developer");
    record100.set("difficulty", "Medium");
    record100.set("questionType", "Technical");
    record100.set("question", "Explain the concept of smart contracts and their use cases.");
    record100.set("expectedAnswer", "Smart contracts are self-executing code on blockchain. Use cases: DeFi, supply chain, insurance, voting. Discuss security, gas costs, and limitations.");
    record100.set("tips", "Discuss Ethereum, Solidity, and other platforms.");
    record100.set("timeLimit", 8);
    record100.set("relatedCareers", "Web3/Crypto Developer, Backend Developer");
  try {
    app.save(record100);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record101 = new Record(collection);
    record101.set("careerPath", "Blockchain Developer");
    record101.set("difficulty", "Hard");
    record101.set("questionType", "SystemDesign");
    record101.set("question", "Design a decentralized application (dApp) for a specific use case.");
    record101.set("expectedAnswer", "Define smart contracts, data structures, consensus mechanism, and user interface. Discuss security, scalability, and regulatory considerations.");
    record101.set("tips", "Think about gas optimization and user experience.");
    record101.set("timeLimit", 15);
    record101.set("relatedCareers", "Web3/Crypto Developer, Full Stack Developer");
  try {
    app.save(record101);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record102 = new Record(collection);
    record102.set("careerPath", "Blockchain Developer");
    record102.set("difficulty", "Medium");
    record102.set("questionType", "Behavioral");
    record102.set("question", "Tell me about a blockchain project you developed and the challenges you faced.");
    record102.set("expectedAnswer", "Describe the project, technical challenges, solutions, and outcomes. Emphasize problem-solving and learning.");
    record102.set("tips", "Discuss security and performance considerations.");
    record102.set("timeLimit", 10);
    record102.set("relatedCareers", "Web3/Crypto Developer, Backend Developer");
  try {
    app.save(record102);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record103 = new Record(collection);
    record103.set("careerPath", "Game Developer");
    record103.set("difficulty", "Medium");
    record103.set("questionType", "Technical");
    record103.set("question", "What is the game loop and why is it important?");
    record103.set("expectedAnswer", "Game loop continuously updates game state, processes input, and renders graphics. Essential for responsive gameplay. Discuss frame rate and delta time.");
    record103.set("tips", "Discuss game engines like Unity and Unreal.");
    record103.set("timeLimit", 8);
    record103.set("relatedCareers", "Frontend Developer, Full Stack Developer");
  try {
    app.save(record103);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record104 = new Record(collection);
    record104.set("careerPath", "Game Developer");
    record104.set("difficulty", "Hard");
    record104.set("questionType", "SystemDesign");
    record104.set("question", "Design a multiplayer game architecture that supports thousands of concurrent players.");
    record104.set("expectedAnswer", "Consider server architecture, networking, state synchronization, latency compensation, and scalability. Discuss client-server vs. peer-to-peer.");
    record104.set("tips", "Think about lag compensation and cheating prevention.");
    record104.set("timeLimit", 15);
    record104.set("relatedCareers", "Backend Developer, Platform Engineer");
  try {
    app.save(record104);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record105 = new Record(collection);
    record105.set("careerPath", "Game Developer");
    record105.set("difficulty", "Medium");
    record105.set("questionType", "Behavioral");
    record105.set("question", "Tell me about a game you developed and the technical challenges you overcame.");
    record105.set("expectedAnswer", "Describe the game, technical challenges (performance, networking, gameplay), solutions, and outcomes. Emphasize problem-solving and creativity.");
    record105.set("tips", "Discuss optimization and player experience.");
    record105.set("timeLimit", 10);
    record105.set("relatedCareers", "Frontend Developer, Backend Developer");
  try {
    app.save(record105);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record106 = new Record(collection);
    record106.set("careerPath", "Embedded Systems Engineer");
    record106.set("difficulty", "Simple");
    record106.set("questionType", "Technical");
    record106.set("question", "What is the difference between microcontrollers and microprocessors?");
    record106.set("expectedAnswer", "Microcontrollers are single-chip computers for specific tasks (IoT, robotics). Microprocessors are general-purpose processors for complex computing. MCUs are simpler, cheaper, lower power.");
    record106.set("tips", "Discuss examples like Arduino and ARM processors.");
    record106.set("timeLimit", 6);
    record106.set("relatedCareers", "IoT Engineer, Hardware Engineer");
  try {
    app.save(record106);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record107 = new Record(collection);
    record107.set("careerPath", "Embedded Systems Engineer");
    record107.set("difficulty", "Medium");
    record107.set("questionType", "Technical");
    record107.set("question", "Explain real-time operating systems (RTOS) and their importance.");
    record107.set("expectedAnswer", "RTOS guarantees deterministic response times. Critical for time-sensitive applications (medical, automotive). Discuss scheduling, interrupts, and task management.");
    record107.set("tips", "Discuss examples like FreeRTOS and VxWorks.");
    record107.set("timeLimit", 8);
    record107.set("relatedCareers", "IoT Engineer, Systems Administrator");
  try {
    app.save(record107);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record108 = new Record(collection);
    record108.set("careerPath", "Embedded Systems Engineer");
    record108.set("difficulty", "Hard");
    record108.set("questionType", "SystemDesign");
    record108.set("question", "Design an embedded system for an autonomous vehicle's sensor processing unit.");
    record108.set("expectedAnswer", "Consider sensor types, data processing, real-time constraints, power efficiency, and safety. Discuss hardware selection, software architecture, and testing.");
    record108.set("tips", "Think about latency, reliability, and redundancy.");
    record108.set("timeLimit", 15);
    record108.set("relatedCareers", "IoT Engineer, Systems Administrator");
  try {
    app.save(record108);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record109 = new Record(collection);
    record109.set("careerPath", "Embedded Systems Engineer");
    record109.set("difficulty", "Medium");
    record109.set("questionType", "Behavioral");
    record109.set("question", "Tell me about an embedded systems project you developed and the challenges you faced.");
    record109.set("expectedAnswer", "Describe the project, hardware/software challenges, solutions, and outcomes. Emphasize problem-solving and optimization.");
    record109.set("tips", "Discuss power consumption and real-time constraints.");
    record109.set("timeLimit", 10);
    record109.set("relatedCareers", "IoT Engineer, Backend Developer");
  try {
    app.save(record109);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record110 = new Record(collection);
    record110.set("careerPath", "IoT Engineer");
    record110.set("difficulty", "Medium");
    record110.set("questionType", "Technical");
    record110.set("question", "What are the key considerations for IoT device design?");
    record110.set("expectedAnswer", "Power consumption, connectivity, security, scalability, and cost. Discuss protocols (WiFi, Bluetooth, LoRaWAN), edge computing, and cloud integration.");
    record110.set("tips", "Discuss IoT platforms and frameworks.");
    record110.set("timeLimit", 8);
    record110.set("relatedCareers", "Embedded Systems Engineer, Backend Developer");
  try {
    app.save(record110);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record111 = new Record(collection);
    record111.set("careerPath", "IoT Engineer");
    record111.set("difficulty", "Hard");
    record111.set("questionType", "SystemDesign");
    record111.set("question", "Design an IoT solution for smart city infrastructure (traffic, utilities, safety).");
    record111.set("expectedAnswer", "Consider device deployment, data collection, edge processing, cloud integration, analytics, and real-time response. Discuss scalability and security.");
    record111.set("tips", "Think about interoperability and standards.");
    record111.set("timeLimit", 15);
    record111.set("relatedCareers", "Embedded Systems Engineer, Platform Engineer");
  try {
    app.save(record111);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record112 = new Record(collection);
    record112.set("careerPath", "IoT Engineer");
    record112.set("difficulty", "Medium");
    record112.set("questionType", "Behavioral");
    record112.set("question", "Tell me about an IoT project you implemented and how you addressed scalability.");
    record112.set("expectedAnswer", "Describe the project, scalability challenges, architecture decisions, and outcomes. Emphasize distributed systems thinking.");
    record112.set("tips", "Discuss data management and real-time processing.");
    record112.set("timeLimit", 10);
    record112.set("relatedCareers", "Embedded Systems Engineer, Backend Developer");
  try {
    app.save(record112);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record113 = new Record(collection);
    record113.set("careerPath", "Site Reliability Engineer");
    record113.set("difficulty", "Medium");
    record113.set("questionType", "Technical");
    record113.set("question", "What is the concept of SLOs and SLIs and how do they relate?");
    record113.set("expectedAnswer", "SLI (Service Level Indicator) measures actual performance. SLO (Service Level Objective) is the target. SLAs are commitments to customers. SLIs inform SLOs.");
    record113.set("tips", "Discuss error budgets and monitoring.");
    record113.set("timeLimit", 8);
    record113.set("relatedCareers", "DevOps Engineer, Platform Engineer");
  try {
    app.save(record113);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record114 = new Record(collection);
    record114.set("careerPath", "Site Reliability Engineer");
    record114.set("difficulty", "Hard");
    record114.set("questionType", "SystemDesign");
    record114.set("question", "Design a monitoring and alerting system for a large-scale distributed system.");
    record114.set("expectedAnswer", "Consider metrics collection, storage, visualization, alerting rules, and incident response. Discuss observability (metrics, logs, traces) and alert fatigue.");
    record114.set("tips", "Think about signal-to-noise ratio and actionable alerts.");
    record114.set("timeLimit", 15);
    record114.set("relatedCareers", "DevOps Engineer, Platform Engineer, Infrastructure Engineer");
  try {
    app.save(record114);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record115 = new Record(collection);
    record115.set("careerPath", "Site Reliability Engineer");
    record115.set("difficulty", "Medium");
    record115.set("questionType", "Behavioral");
    record115.set("question", "Tell me about a time you improved system reliability or reduced incident frequency.");
    record115.set("expectedAnswer", "Describe the problem, root cause analysis, improvements implemented, and measurable outcomes. Emphasize proactive measures and automation.");
    record115.set("tips", "Discuss blameless postmortems and continuous improvement.");
    record115.set("timeLimit", 10);
    record115.set("relatedCareers", "DevOps Engineer, Platform Engineer");
  try {
    app.save(record115);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record116 = new Record(collection);
    record116.set("careerPath", "Platform Engineer");
    record116.set("difficulty", "Hard");
    record116.set("questionType", "SystemDesign");
    record116.set("question", "Design an internal developer platform that improves developer productivity and system reliability.");
    record116.set("expectedAnswer", "Consider self-service capabilities, standardized deployments, observability, security, and developer experience. Discuss infrastructure as code and GitOps.");
    record116.set("tips", "Think about reducing cognitive load and toil.");
    record116.set("timeLimit", 15);
    record116.set("relatedCareers", "DevOps Engineer, Site Reliability Engineer, Infrastructure Engineer");
  try {
    app.save(record116);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record117 = new Record(collection);
    record117.set("careerPath", "Platform Engineer");
    record117.set("difficulty", "Medium");
    record117.set("questionType", "Behavioral");
    record117.set("question", "Tell me about a platform or infrastructure improvement you led.");
    record117.set("expectedAnswer", "Describe the problem, your solution, adoption strategy, and impact. Emphasize developer experience and measurable improvements.");
    record117.set("tips", "Discuss how you gained buy-in from teams.");
    record117.set("timeLimit", 10);
    record117.set("relatedCareers", "DevOps Engineer, Site Reliability Engineer");
  try {
    app.save(record117);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record118 = new Record(collection);
    record118.set("careerPath", "Data Engineer");
    record118.set("difficulty", "Medium");
    record118.set("questionType", "Technical");
    record118.set("question", "What is the difference between batch processing and stream processing?");
    record118.set("expectedAnswer", "Batch processes large volumes periodically. Stream processes data continuously. Batch: high latency, high throughput. Stream: low latency, lower throughput.");
    record118.set("tips", "Discuss tools like Spark, Kafka, and Flink.");
    record118.set("timeLimit", 8);
    record118.set("relatedCareers", "Data Scientist, Analytics Engineer");
  try {
    app.save(record118);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record119 = new Record(collection);
    record119.set("careerPath", "Data Engineer");
    record119.set("difficulty", "Hard");
    record119.set("questionType", "SystemDesign");
    record119.set("question", "Design a data pipeline for real-time analytics on billions of events per day.");
    record119.set("expectedAnswer", "Consider data ingestion, processing, storage, and serving. Discuss scalability, fault tolerance, and latency requirements. Use technologies like Kafka, Spark, and data warehouses.");
    record119.set("tips", "Think about data quality and schema evolution.");
    record119.set("timeLimit", 15);
    record119.set("relatedCareers", "Data Scientist, Analytics Engineer, Platform Engineer");
  try {
    app.save(record119);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record120 = new Record(collection);
    record120.set("careerPath", "Data Engineer");
    record120.set("difficulty", "Medium");
    record120.set("questionType", "Behavioral");
    record120.set("question", "Tell me about a complex data pipeline you built and the challenges you faced.");
    record120.set("expectedAnswer", "Describe the pipeline, data challenges, architecture decisions, and outcomes. Emphasize scalability and reliability.");
    record120.set("tips", "Discuss data quality and monitoring.");
    record120.set("timeLimit", 10);
    record120.set("relatedCareers", "Data Scientist, Analytics Engineer");
  try {
    app.save(record120);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record121 = new Record(collection);
    record121.set("careerPath", "Analytics Engineer");
    record121.set("difficulty", "Medium");
    record121.set("questionType", "Technical");
    record121.set("question", "What is the difference between a data warehouse and a data lake?");
    record121.set("expectedAnswer", "Data warehouse: structured, processed, optimized for analytics. Data lake: raw, unstructured, flexible. Warehouse for BI, lake for exploration and ML.");
    record121.set("tips", "Discuss modern approaches like lakehouses.");
    record121.set("timeLimit", 8);
    record121.set("relatedCareers", "Data Engineer, Data Scientist");
  try {
    app.save(record121);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record122 = new Record(collection);
    record122.set("careerPath", "Analytics Engineer");
    record122.set("difficulty", "Hard");
    record122.set("questionType", "ProblemSolving");
    record122.set("question", "Design a data model for a multi-tenant SaaS analytics platform.");
    record122.set("expectedAnswer", "Consider dimensional modeling, fact and dimension tables, slowly changing dimensions, and multi-tenancy isolation. Discuss performance and flexibility.");
    record122.set("tips", "Think about query patterns and scalability.");
    record122.set("timeLimit", 12);
    record122.set("relatedCareers", "Data Engineer, Data Scientist");
  try {
    app.save(record122);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record123 = new Record(collection);
    record123.set("careerPath", "Analytics Engineer");
    record123.set("difficulty", "Medium");
    record123.set("questionType", "Behavioral");
    record123.set("question", "Tell me about a time you improved data quality or analytics accuracy.");
    record123.set("expectedAnswer", "Describe the problem, root cause, solution, and impact. Emphasize data validation and testing.");
    record123.set("tips", "Discuss data governance and documentation.");
    record123.set("timeLimit", 10);
    record123.set("relatedCareers", "Data Engineer, Data Scientist");
  try {
    app.save(record123);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record124 = new Record(collection);
    record124.set("careerPath", "Growth Engineer");
    record124.set("difficulty", "Medium");
    record124.set("questionType", "Behavioral");
    record124.set("question", "What is your approach to identifying and implementing growth opportunities?");
    record124.set("expectedAnswer", "Analyze user behavior, identify bottlenecks, hypothesize improvements, run experiments, and measure impact. Use data-driven approach and rapid iteration.");
    record124.set("tips", "Discuss A/B testing and metrics.");
    record124.set("timeLimit", 10);
    record124.set("relatedCareers", "Product Manager, Data Analyst");
  try {
    app.save(record124);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record125 = new Record(collection);
    record125.set("careerPath", "Growth Engineer");
    record125.set("difficulty", "Hard");
    record125.set("questionType", "ProblemSolving");
    record125.set("question", "Design a growth strategy to increase user retention for a mobile app.");
    record125.set("expectedAnswer", "Analyze churn patterns, identify key retention drivers, propose interventions (onboarding, engagement, notifications), and design experiments. Discuss metrics and success criteria.");
    record125.set("tips", "Think about user lifecycle and personalization.");
    record125.set("timeLimit", 12);
    record125.set("relatedCareers", "Product Manager, Data Analyst");
  try {
    app.save(record125);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record126 = new Record(collection);
    record126.set("careerPath", "Growth Engineer");
    record126.set("difficulty", "Medium");
    record126.set("questionType", "Behavioral");
    record126.set("question", "Tell me about a growth initiative you led and the results you achieved.");
    record126.set("expectedAnswer", "Describe the opportunity, hypothesis, implementation, experiments, and measurable impact. Emphasize data-driven approach and iteration.");
    record126.set("tips", "Quantify results and discuss learnings.");
    record126.set("timeLimit", 10);
    record126.set("relatedCareers", "Product Manager, Data Analyst");
  try {
    app.save(record126);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record127 = new Record(collection);
    record127.set("careerPath", "Performance Engineer");
    record127.set("difficulty", "Medium");
    record127.set("questionType", "Technical");
    record127.set("question", "What are the key metrics for measuring application performance?");
    record127.set("expectedAnswer", "Response time, throughput, latency, CPU/memory usage, and error rate. Discuss user-centric metrics like Core Web Vitals and Apdex.");
    record127.set("tips", "Discuss monitoring and profiling tools.");
    record127.set("timeLimit", 8);
    record127.set("relatedCareers", "Backend Developer, Frontend Developer");
  try {
    app.save(record127);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record128 = new Record(collection);
    record128.set("careerPath", "Performance Engineer");
    record128.set("difficulty", "Hard");
    record128.set("questionType", "SystemDesign");
    record128.set("question", "Design a performance optimization strategy for a slow web application.");
    record128.set("expectedAnswer", "Profile to identify bottlenecks, optimize database queries, implement caching, optimize frontend, and monitor improvements. Discuss trade-offs and priorities.");
    record128.set("tips", "Think about both backend and frontend optimization.");
    record128.set("timeLimit", 15);
    record128.set("relatedCareers", "Backend Developer, Frontend Developer, Database Administrator");
  try {
    app.save(record128);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record129 = new Record(collection);
    record129.set("careerPath", "Performance Engineer");
    record129.set("difficulty", "Medium");
    record129.set("questionType", "Behavioral");
    record129.set("question", "Tell me about a time you optimized application performance and the improvements you achieved.");
    record129.set("expectedAnswer", "Describe the problem, profiling approach, optimizations, and measurable improvements. Emphasize systematic approach and quantified results.");
    record129.set("tips", "Discuss tools and techniques used.");
    record129.set("timeLimit", 10);
    record129.set("relatedCareers", "Backend Developer, Frontend Developer");
  try {
    app.save(record129);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record130 = new Record(collection);
    record130.set("careerPath", "Accessibility Engineer");
    record130.set("difficulty", "Medium");
    record130.set("questionType", "Technical");
    record130.set("question", "What is WCAG and why is accessibility important?");
    record130.set("expectedAnswer", "WCAG (Web Content Accessibility Guidelines) ensures digital content is accessible to people with disabilities. Important for inclusivity, legal compliance, and better UX for all.");
    record130.set("tips", "Discuss WCAG levels (A, AA, AAA) and common issues.");
    record130.set("timeLimit", 8);
    record130.set("relatedCareers", "Frontend Developer, UX/UI Designer");
  try {
    app.save(record130);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record131 = new Record(collection);
    record131.set("careerPath", "Accessibility Engineer");
    record131.set("difficulty", "Hard");
    record131.set("questionType", "ProblemSolving");
    record131.set("question", "Design an accessible user interface for a complex data visualization dashboard.");
    record131.set("expectedAnswer", "Consider keyboard navigation, screen reader support, color contrast, semantic HTML, ARIA labels, and alternative text. Discuss testing with assistive technologies.");
    record131.set("tips", "Think about different disabilities and use cases.");
    record131.set("timeLimit", 12);
    record131.set("relatedCareers", "Frontend Developer, UX/UI Designer");
  try {
    app.save(record131);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record132 = new Record(collection);
    record132.set("careerPath", "Accessibility Engineer");
    record132.set("difficulty", "Medium");
    record132.set("questionType", "Behavioral");
    record132.set("question", "Tell me about a time you improved accessibility in a product or system.");
    record132.set("expectedAnswer", "Describe the accessibility issues, your approach, improvements implemented, and impact. Emphasize user testing and inclusive design.");
    record132.set("tips", "Discuss tools and standards used.");
    record132.set("timeLimit", 10);
    record132.set("relatedCareers", "Frontend Developer, UX/UI Designer");
  try {
    app.save(record132);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record133 = new Record(collection);
    record133.set("careerPath", "Technical Product Manager");
    record133.set("difficulty", "Medium");
    record133.set("questionType", "Behavioral");
    record133.set("question", "How do you balance technical feasibility with product vision?");
    record133.set("expectedAnswer", "Understand both technical constraints and product goals. Collaborate with engineering, propose trade-offs, and make data-driven decisions. Prioritize based on impact and effort.");
    record133.set("tips", "Emphasize communication and collaboration.");
    record133.set("timeLimit", 10);
    record133.set("relatedCareers", "Product Manager, Engineering Manager");
  try {
    app.save(record133);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record134 = new Record(collection);
    record134.set("careerPath", "Technical Product Manager");
    record134.set("difficulty", "Hard");
    record134.set("questionType", "Behavioral");
    record134.set("question", "Tell me about a time you navigated a complex technical decision with business implications.");
    record134.set("expectedAnswer", "Describe the decision context, technical and business considerations, stakeholders involved, your approach, and outcomes. Emphasize leadership and strategic thinking.");
    record134.set("tips", "Discuss how you built consensus.");
    record134.set("timeLimit", 12);
    record134.set("relatedCareers", "Product Manager, Engineering Manager");
  try {
    app.save(record134);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record135 = new Record(collection);
    record135.set("careerPath", "Technical Product Manager");
    record135.set("difficulty", "Medium");
    record135.set("questionType", "Behavioral");
    record135.set("question", "How do you stay current with technology trends and evaluate new technologies?");
    record135.set("expectedAnswer", "Follow industry news, evaluate against business needs and technical fit, prototype when needed, and involve engineering. Balance innovation with stability.");
    record135.set("tips", "Discuss frameworks for technology evaluation.");
    record135.set("timeLimit", 10);
    record135.set("relatedCareers", "Product Manager, Cloud Architect");
  try {
    app.save(record135);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record136 = new Record(collection);
    record136.set("careerPath", "Engineering Manager");
    record136.set("difficulty", "Hard");
    record136.set("questionType", "Behavioral");
    record136.set("question", "How do you build and develop high-performing engineering teams?");
    record136.set("expectedAnswer", "Hire talent, set clear goals, provide mentorship, remove blockers, foster collaboration, and create psychological safety. Discuss career development and retention.");
    record136.set("tips", "Emphasize leadership and people skills.");
    record136.set("timeLimit", 12);
    record136.set("relatedCareers", "CTO/VP Engineering, Technical Product Manager");
  try {
    app.save(record136);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record137 = new Record(collection);
    record137.set("careerPath", "Engineering Manager");
    record137.set("difficulty", "Hard");
    record137.set("questionType", "Behavioral");
    record137.set("question", "Tell me about a time you handled a difficult personnel situation or performance issue.");
    record137.set("expectedAnswer", "Describe the situation, your approach, communication, support provided, and outcome. Emphasize fairness, documentation, and development focus.");
    record137.set("tips", "Discuss how you balanced empathy with accountability.");
    record137.set("timeLimit", 12);
    record137.set("relatedCareers", "CTO/VP Engineering, Project Manager");
  try {
    app.save(record137);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record138 = new Record(collection);
    record138.set("careerPath", "Engineering Manager");
    record138.set("difficulty", "Hard");
    record138.set("questionType", "Behavioral");
    record138.set("question", "How do you balance technical depth with management responsibilities?");
    record138.set("expectedAnswer", "Stay involved in technical decisions, code reviews, and architecture. Allocate time for both. Delegate appropriately. Discuss trade-offs and continuous learning.");
    record138.set("tips", "Emphasize staying connected to technical work.");
    record138.set("timeLimit", 10);
    record138.set("relatedCareers", "CTO/VP Engineering, Technical Product Manager");
  try {
    app.save(record138);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record139 = new Record(collection);
    record139.set("careerPath", "Staff Engineer");
    record139.set("difficulty", "Hard");
    record139.set("questionType", "Behavioral");
    record139.set("question", "What is the role of a Staff Engineer and how do you create impact?");
    record139.set("expectedAnswer", "Technical leadership, architecture, mentoring, and strategic initiatives. Impact through influence, not direct management. Discuss scope and visibility.");
    record139.set("tips", "Emphasize technical depth and leadership.");
    record139.set("timeLimit", 10);
    record139.set("relatedCareers", "Principal Engineer, Engineering Manager");
  try {
    app.save(record139);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record140 = new Record(collection);
    record140.set("careerPath", "Staff Engineer");
    record140.set("difficulty", "Hard");
    record140.set("questionType", "Behavioral");
    record140.set("question", "Tell me about a major technical initiative you led and the impact it had.");
    record140.set("expectedAnswer", "Describe the initiative, your role, challenges, solutions, and measurable impact. Emphasize technical leadership and influence.");
    record140.set("tips", "Discuss how you gained buy-in and drove adoption.");
    record140.set("timeLimit", 12);
    record140.set("relatedCareers", "Principal Engineer, Engineering Manager");
  try {
    app.save(record140);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record141 = new Record(collection);
    record141.set("careerPath", "Staff Engineer");
    record141.set("difficulty", "Hard");
    record141.set("questionType", "Behavioral");
    record141.set("question", "How do you approach mentoring junior engineers and building technical culture?");
    record141.set("expectedAnswer", "Lead by example, provide feedback, create learning opportunities, and foster collaboration. Discuss code reviews, design discussions, and knowledge sharing.");
    record141.set("tips", "Emphasize impact on team growth.");
    record141.set("timeLimit", 10);
    record141.set("relatedCareers", "Principal Engineer, Engineering Manager");
  try {
    app.save(record141);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record142 = new Record(collection);
    record142.set("careerPath", "Principal Engineer");
    record142.set("difficulty", "Hard");
    record142.set("questionType", "Behavioral");
    record142.set("question", "How do you approach long-term technical strategy and vision?");
    record142.set("expectedAnswer", "Assess current state, identify gaps, propose vision, build consensus, and drive execution. Balance innovation with pragmatism. Discuss stakeholder management.");
    record142.set("tips", "Emphasize strategic thinking and influence.");
    record142.set("timeLimit", 12);
    record142.set("relatedCareers", "CTO/VP Engineering, Staff Engineer");
  try {
    app.save(record142);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record143 = new Record(collection);
    record143.set("careerPath", "Principal Engineer");
    record143.set("difficulty", "Hard");
    record143.set("questionType", "Behavioral");
    record143.set("question", "Tell me about a transformational technical initiative you led.");
    record143.set("expectedAnswer", "Describe the vision, challenges, your approach, team building, and outcomes. Emphasize impact on organization and technical excellence.");
    record143.set("tips", "Discuss how you overcame resistance and built momentum.");
    record143.set("timeLimit", 12);
    record143.set("relatedCareers", "CTO/VP Engineering, Staff Engineer");
  try {
    app.save(record143);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record144 = new Record(collection);
    record144.set("careerPath", "Principal Engineer");
    record144.set("difficulty", "Hard");
    record144.set("questionType", "Behavioral");
    record144.set("question", "How do you balance technical excellence with business pragmatism?");
    record144.set("expectedAnswer", "Understand business context, propose solutions that balance both, make trade-off decisions, and communicate rationale. Discuss when to push for quality.");
    record144.set("tips", "Emphasize strategic thinking and communication.");
    record144.set("timeLimit", 10);
    record144.set("relatedCareers", "CTO/VP Engineering, Staff Engineer");
  try {
    app.save(record144);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record145 = new Record(collection);
    record145.set("careerPath", "Solutions Engineer");
    record145.set("difficulty", "Medium");
    record145.set("questionType", "Behavioral");
    record145.set("question", "What is your approach to understanding customer needs and proposing solutions?");
    record145.set("expectedAnswer", "Listen actively, ask clarifying questions, understand business context, propose tailored solutions, and address concerns. Emphasize customer success.");
    record145.set("tips", "Discuss discovery and solution design.");
    record145.set("timeLimit", 10);
    record145.set("relatedCareers", "Solutions Architect, Technical Product Manager");
  try {
    app.save(record145);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record146 = new Record(collection);
    record146.set("careerPath", "Solutions Engineer");
    record146.set("difficulty", "Hard");
    record146.set("questionType", "Behavioral");
    record146.set("question", "Tell me about a complex customer problem you solved and the impact it had.");
    record146.set("expectedAnswer", "Describe the problem, your analysis, proposed solution, implementation support, and outcomes. Emphasize customer success and business impact.");
    record146.set("tips", "Discuss how you built trust and credibility.");
    record146.set("timeLimit", 12);
    record146.set("relatedCareers", "Solutions Architect, Technical Product Manager");
  try {
    app.save(record146);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record147 = new Record(collection);
    record147.set("careerPath", "Solutions Engineer");
    record147.set("difficulty", "Medium");
    record147.set("questionType", "Behavioral");
    record147.set("question", "How do you handle objections or concerns from customers about your solution?");
    record147.set("expectedAnswer", "Listen to concerns, understand underlying issues, address with data and examples, propose alternatives if needed. Emphasize transparency and customer success.");
    record147.set("tips", "Discuss building trust and credibility.");
    record147.set("timeLimit", 10);
    record147.set("relatedCareers", "Solutions Architect, Product Manager");
  try {
    app.save(record147);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record148 = new Record(collection);
    record148.set("careerPath", "Support Engineer");
    record148.set("difficulty", "Simple");
    record148.set("questionType", "Behavioral");
    record148.set("question", "What is your approach to providing excellent customer support?");
    record148.set("expectedAnswer", "Listen actively, understand the problem, provide clear solutions, follow up, and document. Emphasize empathy, patience, and problem-solving.");
    record148.set("tips", "Discuss support tools and knowledge bases.");
    record148.set("timeLimit", 8);
    record148.set("relatedCareers", "Solutions Engineer, Technical Product Manager");
  try {
    app.save(record148);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record149 = new Record(collection);
    record149.set("careerPath", "Support Engineer");
    record149.set("difficulty", "Medium");
    record149.set("questionType", "Behavioral");
    record149.set("question", "Tell me about a difficult support case you resolved and how you handled it.");
    record149.set("expectedAnswer", "Describe the issue, your troubleshooting approach, communication with customer, solution, and follow-up. Emphasize patience and problem-solving.");
    record149.set("tips", "Discuss how you turned a negative into positive.");
    record149.set("timeLimit", 10);
    record149.set("relatedCareers", "Solutions Engineer, QA Engineer");
  try {
    app.save(record149);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record150 = new Record(collection);
    record150.set("careerPath", "Support Engineer");
    record150.set("difficulty", "Medium");
    record150.set("questionType", "Behavioral");
    record150.set("question", "How do you stay current with product knowledge and help customers effectively?");
    record150.set("expectedAnswer", "Read documentation, test features, participate in training, ask questions, and share knowledge. Discuss continuous learning and knowledge sharing.");
    record150.set("tips", "Emphasize proactive learning and collaboration.");
    record150.set("timeLimit", 8);
    record150.set("relatedCareers", "Solutions Engineer, Technical Writer");
  try {
    app.save(record150);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record151 = new Record(collection);
    record151.set("careerPath", "Release Engineer");
    record151.set("difficulty", "Medium");
    record151.set("questionType", "Technical");
    record151.set("question", "What is the purpose of release management and what are key responsibilities?");
    record151.set("expectedAnswer", "Coordinate releases, manage versioning, ensure quality, communicate changes, and handle rollbacks. Responsibilities: planning, testing, deployment, documentation.");
    record151.set("tips", "Discuss release strategies and risk management.");
    record151.set("timeLimit", 8);
    record151.set("relatedCareers", "DevOps Engineer, Build Engineer");
  try {
    app.save(record151);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record152 = new Record(collection);
    record152.set("careerPath", "Release Engineer");
    record152.set("difficulty", "Hard");
    record152.set("questionType", "SystemDesign");
    record152.set("question", "Design a release management process for a large organization with multiple teams and environments.");
    record152.set("expectedAnswer", "Consider planning, testing, deployment strategies, rollback procedures, communication, and monitoring. Discuss risk management and automation.");
    record152.set("tips", "Think about coordination and safety.");
    record152.set("timeLimit", 12);
    record152.set("relatedCareers", "DevOps Engineer, Build Engineer");
  try {
    app.save(record152);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record153 = new Record(collection);
    record153.set("careerPath", "Release Engineer");
    record153.set("difficulty", "Medium");
    record153.set("questionType", "Behavioral");
    record153.set("question", "Tell me about a complex release you managed and how you ensured success.");
    record153.set("expectedAnswer", "Describe the release scope, challenges, your planning and coordination, risk mitigation, and outcomes. Emphasize communication and preparation.");
    record153.set("tips", "Discuss how you handled issues and rollbacks.");
    record153.set("timeLimit", 10);
    record153.set("relatedCareers", "DevOps Engineer, Build Engineer");
  try {
    app.save(record153);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record154 = new Record(collection);
    record154.set("careerPath", "Build Engineer");
    record154.set("difficulty", "Medium");
    record154.set("questionType", "Technical");
    record154.set("question", "What is the purpose of build systems and what are key considerations?");
    record154.set("expectedAnswer", "Build systems compile code, run tests, and produce artifacts. Considerations: speed, reliability, reproducibility, and scalability. Tools: Maven, Gradle, Bazel.");
    record154.set("tips", "Discuss build optimization and caching.");
    record154.set("timeLimit", 8);
    record154.set("relatedCareers", "DevOps Engineer, Release Engineer");
  try {
    app.save(record154);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record155 = new Record(collection);
    record155.set("careerPath", "Build Engineer");
    record155.set("difficulty", "Hard");
    record155.set("questionType", "SystemDesign");
    record155.set("question", "Design a scalable build system for a large monorepo with hundreds of services.");
    record155.set("expectedAnswer", "Consider distributed builds, caching, incremental builds, and parallelization. Discuss dependency management and build optimization.");
    record155.set("tips", "Think about build time and resource efficiency.");
    record155.set("timeLimit", 12);
    record155.set("relatedCareers", "DevOps Engineer, Platform Engineer");
  try {
    app.save(record155);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record156 = new Record(collection);
    record156.set("careerPath", "Build Engineer");
    record156.set("difficulty", "Medium");
    record156.set("questionType", "Behavioral");
    record156.set("question", "Tell me about a time you improved build performance or reliability.");
    record156.set("expectedAnswer", "Describe the problem, analysis, optimizations, and measurable improvements. Emphasize systematic approach and impact on developer productivity.");
    record156.set("tips", "Discuss tools and techniques used.");
    record156.set("timeLimit", 10);
    record156.set("relatedCareers", "DevOps Engineer, Release Engineer");
  try {
    app.save(record156);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record157 = new Record(collection);
    record157.set("careerPath", "Infrastructure Engineer");
    record157.set("difficulty", "Medium");
    record157.set("questionType", "Technical");
    record157.set("question", "What is infrastructure as code and why is it important?");
    record157.set("expectedAnswer", "IaC manages infrastructure through code (Terraform, CloudFormation). Benefits: version control, reproducibility, automation, and consistency. Enables DevOps practices.");
    record157.set("tips", "Discuss tools and best practices.");
    record157.set("timeLimit", 8);
    record157.set("relatedCareers", "DevOps Engineer, Platform Engineer");
  try {
    app.save(record157);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record158 = new Record(collection);
    record158.set("careerPath", "Infrastructure Engineer");
    record158.set("difficulty", "Hard");
    record158.set("questionType", "SystemDesign");
    record158.set("question", "Design an infrastructure as code solution for managing multi-cloud deployments.");
    record158.set("expectedAnswer", "Consider abstraction layers, provider-agnostic tools, state management, and testing. Discuss modularity, reusability, and operational concerns.");
    record158.set("tips", "Think about complexity and maintainability.");
    record158.set("timeLimit", 12);
    record158.set("relatedCareers", "DevOps Engineer, Cloud Architect");
  try {
    app.save(record158);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record159 = new Record(collection);
    record159.set("careerPath", "Infrastructure Engineer");
    record159.set("difficulty", "Medium");
    record159.set("questionType", "Behavioral");
    record159.set("question", "Tell me about a time you automated infrastructure provisioning or management.");
    record159.set("expectedAnswer", "Describe the problem, solution design, implementation, and impact. Emphasize automation benefits and operational improvements.");
    record159.set("tips", "Discuss tools and best practices.");
    record159.set("timeLimit", 10);
    record159.set("relatedCareers", "DevOps Engineer, Platform Engineer");
  try {
    app.save(record159);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record160 = new Record(collection);
    record160.set("careerPath", "Automation Engineer");
    record160.set("difficulty", "Medium");
    record160.set("questionType", "Technical");
    record160.set("question", "What is test automation and what are the benefits and challenges?");
    record160.set("expectedAnswer", "Automating test execution improves speed, consistency, and coverage. Benefits: faster feedback, reduced manual effort. Challenges: maintenance, flakiness, initial investment.");
    record160.set("tips", "Discuss test pyramid and automation strategies.");
    record160.set("timeLimit", 8);
    record160.set("relatedCareers", "QA Engineer, Backend Developer");
  try {
    app.save(record160);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record161 = new Record(collection);
    record161.set("careerPath", "Automation Engineer");
    record161.set("difficulty", "Hard");
    record161.set("questionType", "ProblemSolving");
    record161.set("question", "Design an automation framework for testing a complex microservices architecture.");
    record161.set("expectedAnswer", "Consider unit tests, integration tests, contract tests, and end-to-end tests. Discuss test data, environment management, and CI/CD integration.");
    record161.set("tips", "Think about test isolation and reliability.");
    record161.set("timeLimit", 12);
    record161.set("relatedCareers", "QA Engineer, DevOps Engineer");
  try {
    app.save(record161);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record162 = new Record(collection);
    record162.set("careerPath", "Automation Engineer");
    record162.set("difficulty", "Medium");
    record162.set("questionType", "Behavioral");
    record162.set("question", "Tell me about a time you built an automation solution that improved efficiency.");
    record162.set("expectedAnswer", "Describe the problem, automation approach, implementation, and measurable improvements. Emphasize impact on productivity and quality.");
    record162.set("tips", "Discuss tools and frameworks used.");
    record162.set("timeLimit", 10);
    record162.set("relatedCareers", "QA Engineer, DevOps Engineer");
  try {
    app.save(record162);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record163 = new Record(collection);
    record163.set("careerPath", "Integration Engineer");
    record163.set("difficulty", "Medium");
    record163.set("questionType", "Technical");
    record163.set("question", "What are the key challenges in system integration and how do you address them?");
    record163.set("expectedAnswer", "Challenges: data format differences, API incompatibilities, error handling, and monitoring. Solutions: adapters, middleware, standardization, and testing.");
    record163.set("tips", "Discuss integration patterns and tools.");
    record163.set("timeLimit", 8);
    record163.set("relatedCareers", "Backend Developer, API Developer");
  try {
    app.save(record163);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record164 = new Record(collection);
    record164.set("careerPath", "Integration Engineer");
    record164.set("difficulty", "Hard");
    record164.set("questionType", "SystemDesign");
    record164.set("question", "Design an integration solution for connecting legacy systems with modern cloud services.");
    record164.set("expectedAnswer", "Consider data mapping, API design, error handling, monitoring, and security. Discuss phased approach and backward compatibility.");
    record164.set("tips", "Think about data consistency and reliability.");
    record164.set("timeLimit", 12);
    record164.set("relatedCareers", "Backend Developer, Solutions Architect");
  try {
    app.save(record164);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record165 = new Record(collection);
    record165.set("careerPath", "Integration Engineer");
    record165.set("difficulty", "Medium");
    record165.set("questionType", "Behavioral");
    record165.set("question", "Tell me about a complex integration project you completed.");
    record165.set("expectedAnswer", "Describe the systems, integration challenges, your approach, and outcomes. Emphasize problem-solving and communication with stakeholders.");
    record165.set("tips", "Discuss tools and technologies used.");
    record165.set("timeLimit", 10);
    record165.set("relatedCareers", "Backend Developer, Solutions Architect");
  try {
    app.save(record165);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record166 = new Record(collection);
    record166.set("careerPath", "API Developer");
    record166.set("difficulty", "Medium");
    record166.set("questionType", "Technical");
    record166.set("question", "What are the principles of good API design?");
    record166.set("expectedAnswer", "Consistency, simplicity, versioning, documentation, error handling, and security. Discuss REST principles, naming conventions, and backward compatibility.");
    record166.set("tips", "Discuss API documentation tools like Swagger/OpenAPI.");
    record166.set("timeLimit", 8);
    record166.set("relatedCareers", "Backend Developer, Full Stack Developer");
  try {
    app.save(record166);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record167 = new Record(collection);
    record167.set("careerPath", "API Developer");
    record167.set("difficulty", "Hard");
    record167.set("questionType", "SystemDesign");
    record167.set("question", "Design a public API for a platform that will be used by thousands of developers.");
    record167.set("expectedAnswer", "Consider versioning, rate limiting, authentication, documentation, SDKs, and developer experience. Discuss backward compatibility and evolution.");
    record167.set("tips", "Think about developer onboarding and support.");
    record167.set("timeLimit", 12);
    record167.set("relatedCareers", "Backend Developer, Technical Product Manager");
  try {
    app.save(record167);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record168 = new Record(collection);
    record168.set("careerPath", "API Developer");
    record168.set("difficulty", "Medium");
    record168.set("questionType", "Behavioral");
    record168.set("question", "Tell me about an API you designed and how you ensured good developer experience.");
    record168.set("expectedAnswer", "Describe the API, design decisions, documentation, feedback from developers, and improvements. Emphasize developer-centric thinking.");
    record168.set("tips", "Discuss tools and best practices.");
    record168.set("timeLimit", 10);
    record168.set("relatedCareers", "Backend Developer, Technical Product Manager");
  try {
    app.save(record168);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record169 = new Record(collection);
    record169.set("careerPath", "Web3/Crypto Developer");
    record169.set("difficulty", "Medium");
    record169.set("questionType", "Technical");
    record169.set("question", "What is the difference between Bitcoin and Ethereum?");
    record169.set("expectedAnswer", "Bitcoin: digital currency, proof-of-work, limited functionality. Ethereum: smart contract platform, proof-of-stake, programmable. Different use cases and design philosophies.");
    record169.set("tips", "Discuss blockchain technology and consensus mechanisms.");
    record169.set("timeLimit", 8);
    record169.set("relatedCareers", "Blockchain Developer, Backend Developer");
  try {
    app.save(record169);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record170 = new Record(collection);
    record170.set("careerPath", "Web3/Crypto Developer");
    record170.set("difficulty", "Hard");
    record170.set("questionType", "ProblemSolving");
    record170.set("question", "Design a decentralized finance (DeFi) protocol for lending and borrowing.");
    record170.set("expectedAnswer", "Consider smart contracts, collateral management, interest rates, liquidation mechanisms, and security. Discuss economic incentives and risk management.");
    record170.set("tips", "Think about flash loans and oracle problems.");
    record170.set("timeLimit", 15);
    record170.set("relatedCareers", "Blockchain Developer, Backend Developer");
  try {
    app.save(record170);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record171 = new Record(collection);
    record171.set("careerPath", "Web3/Crypto Developer");
    record171.set("difficulty", "Medium");
    record171.set("questionType", "Behavioral");
    record171.set("question", "Tell me about a Web3 or crypto project you developed and the challenges you faced.");
    record171.set("expectedAnswer", "Describe the project, technical challenges (security, scalability, gas optimization), solutions, and outcomes. Emphasize learning and innovation.");
    record171.set("tips", "Discuss security considerations and best practices.");
    record171.set("timeLimit", 10);
    record171.set("relatedCareers", "Blockchain Developer, Backend Developer");
  try {
    app.save(record171);
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
