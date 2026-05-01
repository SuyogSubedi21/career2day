/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("interviewQuestionsDatabase");

  const record0 = new Record(collection);
    record0.set("careerSlug", "software-engineer");
    record0.set("careerName", "Software Engineer");
    record0.set("level", "Beginner");
    record0.set("questionNumber", 1);
    record0.set("question", "What is the difference between REST and GraphQL APIs?");
    record0.set("explanation", "REST uses multiple endpoints for different resources, while GraphQL uses a single endpoint and allows clients to request exactly the data they need. GraphQL reduces over-fetching and under-fetching of data.");
    record0.set("practicalExample", "REST: GET /users/1, GET /users/1/posts. GraphQL: Single query requesting user and posts together.");
    record0.set("keyPoints", ["REST uses HTTP methods", "GraphQL uses queries", "GraphQL reduces bandwidth"]);
    record0.set("relatedTopics", ["API Design", "Web Services"]);
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
    record1.set("careerSlug", "software-engineer");
    record1.set("careerName", "Software Engineer");
    record1.set("level", "Beginner");
    record1.set("questionNumber", 2);
    record1.set("question", "Explain the SOLID principles in software design.");
    record1.set("explanation", "SOLID is an acronym for five design principles: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion. These principles help create maintainable and scalable code.");
    record1.set("practicalExample", "Single Responsibility: A class should have only one reason to change. A User class should only handle user data, not email sending.");
    record1.set("keyPoints", ["S - Single Responsibility", "O - Open/Closed", "L - Liskov Substitution", "I - Interface Segregation", "D - Dependency Inversion"]);
    record1.set("relatedTopics", ["Design Patterns", "Code Quality"]);
    record1.set("difficulty", "Medium");
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
    record2.set("careerSlug", "software-engineer");
    record2.set("careerName", "Software Engineer");
    record2.set("level", "Intermediate");
    record2.set("questionNumber", 3);
    record2.set("question", "How do you debug a complex production issue?");
    record2.set("explanation", "Debugging involves gathering logs, reproducing the issue, isolating the root cause, and implementing a fix. Use monitoring tools, error tracking, and systematic testing.");
    record2.set("practicalExample", "Check application logs, review recent deployments, use APM tools like New Relic, create a minimal reproduction case.");
    record2.set("keyPoints", ["Gather logs", "Reproduce issue", "Isolate root cause", "Test fix", "Monitor"]);
    record2.set("relatedTopics", ["Debugging", "Monitoring"]);
    record2.set("difficulty", "Medium");
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
    record3.set("careerSlug", "software-engineer");
    record3.set("careerName", "Software Engineer");
    record3.set("level", "Intermediate");
    record3.set("questionNumber", 4);
    record3.set("question", "What are common design patterns and when to use them?");
    record3.set("explanation", "Design patterns are reusable solutions to common problems. Creational patterns (Singleton, Factory), Structural patterns (Adapter, Decorator), and Behavioral patterns (Observer, Strategy) each serve different purposes.");
    record3.set("practicalExample", "Use Singleton for database connections, Factory for object creation, Observer for event handling.");
    record3.set("keyPoints", ["Creational patterns", "Structural patterns", "Behavioral patterns"]);
    record3.set("relatedTopics", ["Design Patterns", "Architecture"]);
    record3.set("difficulty", "Medium");
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
    record4.set("careerSlug", "software-engineer");
    record4.set("careerName", "Software Engineer");
    record4.set("level", "Advanced");
    record4.set("questionNumber", 5);
    record4.set("question", "Explain version control best practices and Git workflows.");
    record4.set("explanation", "Use meaningful commit messages, feature branches, code reviews, and semantic versioning. Common workflows include Git Flow and GitHub Flow for managing releases and features.");
    record4.set("practicalExample", "Create feature branch, make commits, create pull request, review, merge to main, tag release.");
    record4.set("keyPoints", ["Meaningful commits", "Feature branches", "Code reviews", "Semantic versioning"]);
    record4.set("relatedTopics", ["Git", "Collaboration"]);
    record4.set("difficulty", "Medium");
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
    record5.set("careerSlug", "software-engineer");
    record5.set("careerName", "Software Engineer");
    record5.set("level", "Advanced");
    record5.set("questionNumber", 6);
    record5.set("question", "What is clean code and how do you maintain it?");
    record5.set("explanation", "Clean code is readable, maintainable, and follows conventions. Use meaningful names, keep functions small, avoid duplication, handle errors properly, and write tests.");
    record5.set("practicalExample", "Use descriptive variable names like 'userEmailAddress' instead of 'uea', keep functions under 20 lines, use comments for 'why' not 'what'.");
    record5.set("keyPoints", ["Meaningful names", "Small functions", "DRY principle", "Error handling", "Testing"]);
    record5.set("relatedTopics", ["Code Quality", "Best Practices"]);
    record5.set("difficulty", "Hard");
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
    record6.set("careerSlug", "frontend-developer");
    record6.set("careerName", "Frontend Developer");
    record6.set("level", "Beginner");
    record6.set("questionNumber", 1);
    record6.set("question", "What is the DOM and how does it work?");
    record6.set("explanation", "The DOM (Document Object Model) is a programming interface for HTML and XML documents. It represents the page as a tree of objects that can be manipulated with JavaScript.");
    record6.set("practicalExample", "document.getElementById('myId').textContent = 'Hello'; - This accesses and modifies a DOM element.");
    record6.set("keyPoints", ["Tree structure", "JavaScript manipulation", "Events", "Selectors"]);
    record6.set("relatedTopics", ["JavaScript", "HTML"]);
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
    record7.set("careerSlug", "frontend-developer");
    record7.set("careerName", "Frontend Developer");
    record7.set("level", "Beginner");
    record7.set("questionNumber", 2);
    record7.set("question", "Explain CSS Flexbox and Grid layouts.");
    record7.set("explanation", "Flexbox is a one-dimensional layout model for arranging items in rows or columns. CSS Grid is a two-dimensional layout system for creating complex layouts with rows and columns.");
    record7.set("practicalExample", "Flexbox: display: flex; justify-content: center; Grid: display: grid; grid-template-columns: 1fr 1fr;");
    record7.set("keyPoints", ["Flexbox properties", "Grid properties", "Responsive design", "Alignment"]);
    record7.set("relatedTopics", ["CSS", "Responsive Design"]);
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
    record8.set("careerSlug", "frontend-developer");
    record8.set("careerName", "Frontend Developer");
    record8.set("level", "Intermediate");
    record8.set("questionNumber", 3);
    record8.set("question", "What are React Hooks and how do they work?");
    record8.set("explanation", "Hooks are functions that let you use state and other React features in functional components. Common hooks include useState, useEffect, useContext, and useReducer.");
    record8.set("practicalExample", "const [count, setCount] = useState(0); useEffect(() => { /* side effects */ }, [dependencies]);");
    record8.set("keyPoints", ["useState", "useEffect", "Custom hooks", "Rules of hooks"]);
    record8.set("relatedTopics", ["React", "State Management"]);
    record8.set("difficulty", "Medium");
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
    record9.set("careerSlug", "frontend-developer");
    record9.set("careerName", "Frontend Developer");
    record9.set("level", "Intermediate");
    record9.set("questionNumber", 4);
    record9.set("question", "How do you optimize frontend performance?");
    record9.set("explanation", "Optimize by minimizing bundle size, lazy loading, code splitting, caching, image optimization, and reducing re-renders. Use tools like Lighthouse and WebPageTest.");
    record9.set("practicalExample", "Use React.lazy() for code splitting, implement image lazy loading, optimize CSS, minify JavaScript.");
    record9.set("keyPoints", ["Bundle size", "Lazy loading", "Caching", "Image optimization", "Monitoring"]);
    record9.set("relatedTopics", ["Performance", "Optimization"]);
    record9.set("difficulty", "Medium");
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
    record10.set("careerSlug", "frontend-developer");
    record10.set("careerName", "Frontend Developer");
    record10.set("level", "Advanced");
    record10.set("questionNumber", 5);
    record10.set("question", "Explain event delegation and event bubbling.");
    record10.set("explanation", "Event bubbling is when an event triggered on a child element propagates up to parent elements. Event delegation uses this to handle events on parent elements for multiple children.");
    record10.set("practicalExample", "Click handler on parent ul handles clicks on all child li elements instead of attaching handlers to each li.");
    record10.set("keyPoints", ["Event bubbling", "Event capturing", "Event delegation", "stopPropagation"]);
    record10.set("relatedTopics", ["JavaScript Events", "DOM"]);
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
    record11.set("careerSlug", "frontend-developer");
    record11.set("careerName", "Frontend Developer");
    record11.set("level", "Advanced");
    record11.set("questionNumber", 6);
    record11.set("question", "How do you ensure responsive design across devices?");
    record11.set("explanation", "Use mobile-first approach, media queries, flexible layouts, responsive images, and test on multiple devices. Use viewport meta tag and relative units.");
    record11.set("practicalExample", "@media (max-width: 768px) { /* mobile styles */ } Use rem/em instead of px for font sizes.");
    record11.set("keyPoints", ["Mobile-first", "Media queries", "Flexible layouts", "Testing"]);
    record11.set("relatedTopics", ["Responsive Design", "CSS"]);
    record11.set("difficulty", "Hard");
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
    record12.set("level", "Beginner");
    record12.set("questionNumber", 1);
    record12.set("question", "What is database normalization and why is it important?");
    record12.set("explanation", "Normalization is the process of organizing data to reduce redundancy and improve data integrity. It involves dividing tables into smaller tables and defining relationships.");
    record12.set("practicalExample", "Instead of storing user address in user table, create separate address table and link with foreign key.");
    record12.set("keyPoints", ["1NF", "2NF", "3NF", "BCNF", "Redundancy"]);
    record12.set("relatedTopics", ["Database Design", "SQL"]);
    record12.set("difficulty", "Simple");
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
    record13.set("level", "Beginner");
    record13.set("questionNumber", 2);
    record13.set("question", "Explain RESTful API design principles.");
    record13.set("explanation", "REST uses HTTP methods (GET, POST, PUT, DELETE) on resources identified by URLs. Follow conventions for status codes, use proper HTTP verbs, and design stateless APIs.");
    record13.set("practicalExample", "GET /api/users - retrieve users, POST /api/users - create user, PUT /api/users/1 - update user.");
    record13.set("keyPoints", ["HTTP methods", "Status codes", "Resource-oriented", "Stateless"]);
    record13.set("relatedTopics", ["API Design", "HTTP"]);
    record13.set("difficulty", "Simple");
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
    record14.set("questionNumber", 3);
    record14.set("question", "How do you implement authentication and authorization?");
    record14.set("explanation", "Authentication verifies user identity (login), authorization determines what authenticated users can do. Use JWT, OAuth, sessions, and role-based access control.");
    record14.set("practicalExample", "JWT tokens for stateless auth, refresh tokens for security, role-based middleware for authorization.");
    record14.set("keyPoints", ["Authentication", "Authorization", "JWT", "OAuth", "RBAC"]);
    record14.set("relatedTopics", ["Security", "API Design"]);
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
    record15.set("questionNumber", 4);
    record15.set("question", "What are caching strategies and when to use them?");
    record15.set("explanation", "Caching stores frequently accessed data to reduce database load. Strategies include in-memory caching (Redis), HTTP caching, database query caching, and CDN caching.");
    record15.set("practicalExample", "Cache user profiles in Redis with 1-hour TTL, use HTTP cache headers for static assets, implement cache invalidation on updates.");
    record15.set("keyPoints", ["Redis", "Cache invalidation", "TTL", "Cache strategies"]);
    record15.set("relatedTopics", ["Performance", "Databases"]);
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
    record16.set("level", "Advanced");
    record16.set("questionNumber", 5);
    record16.set("question", "Explain load balancing and horizontal scaling.");
    record16.set("explanation", "Load balancing distributes traffic across multiple servers. Horizontal scaling adds more servers to handle increased load. Use load balancers like Nginx or cloud solutions.");
    record16.set("practicalExample", "Nginx load balancer distributes requests to multiple app servers, database replication for read scaling.");
    record16.set("keyPoints", ["Load balancing", "Horizontal scaling", "Session management", "Database replication"]);
    record16.set("relatedTopics", ["Infrastructure", "Scalability"]);
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
    record17.set("level", "Advanced");
    record17.set("questionNumber", 6);
    record17.set("question", "How do you handle errors and implement proper error handling?");
    record17.set("explanation", "Implement try-catch blocks, use custom error classes, log errors properly, return meaningful error messages, and implement error recovery strategies.");
    record17.set("practicalExample", "Catch database errors, return 500 with generic message to client, log detailed error server-side, implement retry logic for transient failures.");
    record17.set("keyPoints", ["Error logging", "Error recovery", "Error messages", "Monitoring"]);
    record17.set("relatedTopics", ["Error Handling", "Debugging"]);
    record17.set("difficulty", "Hard");
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
    record18.set("careerSlug", "data-scientist");
    record18.set("careerName", "Data Scientist");
    record18.set("level", "Beginner");
    record18.set("questionNumber", 1);
    record18.set("question", "What is overfitting and how do you prevent it?");
    record18.set("explanation", "Overfitting occurs when a model learns the training data too well, including noise, and performs poorly on new data. Prevent it with regularization, cross-validation, and early stopping.");
    record18.set("practicalExample", "Use L1/L2 regularization, reduce model complexity, use dropout in neural networks, validate on separate test set.");
    record18.set("keyPoints", ["Regularization", "Cross-validation", "Early stopping", "Model complexity"]);
    record18.set("relatedTopics", ["Machine Learning", "Model Evaluation"]);
    record18.set("difficulty", "Simple");
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
    record19.set("careerSlug", "data-scientist");
    record19.set("careerName", "Data Scientist");
    record19.set("level", "Beginner");
    record19.set("questionNumber", 2);
    record19.set("question", "Explain cross-validation and its importance.");
    record19.set("explanation", "Cross-validation divides data into k folds, trains on k-1 folds and tests on 1 fold, repeating k times. It provides better estimates of model performance and reduces variance.");
    record19.set("practicalExample", "5-fold cross-validation: divide data into 5 parts, train 5 models each using 4 parts for training and 1 for testing.");
    record19.set("keyPoints", ["k-fold", "Stratified", "Time series", "Performance estimation"]);
    record19.set("relatedTopics", ["Model Evaluation", "Validation"]);
    record19.set("difficulty", "Simple");
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
    record20.set("careerSlug", "data-scientist");
    record20.set("careerName", "Data Scientist");
    record20.set("level", "Intermediate");
    record20.set("questionNumber", 3);
    record20.set("question", "How do you handle missing data in datasets?");
    record20.set("explanation", "Handle missing data by deletion (if few), imputation (mean, median, mode), forward/backward fill for time series, or using algorithms that handle missing values.");
    record20.set("practicalExample", "Drop rows with >50% missing, impute numeric columns with median, categorical with mode, use KNN imputation for complex patterns.");
    record20.set("keyPoints", ["Deletion", "Imputation", "Forward fill", "Missing patterns"]);
    record20.set("relatedTopics", ["Data Preprocessing", "Data Cleaning"]);
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
    record21.set("careerSlug", "data-scientist");
    record21.set("careerName", "Data Scientist");
    record21.set("level", "Intermediate");
    record21.set("questionNumber", 4);
    record21.set("question", "What is feature engineering and why is it important?");
    record21.set("explanation", "Feature engineering is creating new features from raw data to improve model performance. It includes scaling, encoding, polynomial features, and domain-specific features.");
    record21.set("practicalExample", "Create age groups from age, one-hot encode categorical variables, create interaction features, normalize numerical features.");
    record21.set("keyPoints", ["Feature creation", "Feature scaling", "Feature selection", "Domain knowledge"]);
    record21.set("relatedTopics", ["Data Preprocessing", "Model Improvement"]);
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
    record22.set("careerSlug", "data-scientist");
    record22.set("careerName", "Data Scientist");
    record22.set("level", "Advanced");
    record22.set("questionNumber", 5);
    record22.set("question", "Explain regularization techniques and their effects.");
    record22.set("explanation", "Regularization adds penalty terms to loss function to prevent overfitting. L1 (Lasso) performs feature selection, L2 (Ridge) shrinks coefficients, Elastic Net combines both.");
    record22.set("practicalExample", "L1: sum of absolute coefficients, L2: sum of squared coefficients, Elastic Net: combination with alpha and l1_ratio parameters.");
    record22.set("keyPoints", ["L1 regularization", "L2 regularization", "Elastic Net", "Hyperparameter tuning"]);
    record22.set("relatedTopics", ["Model Optimization", "Overfitting"]);
    record22.set("difficulty", "Hard");
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
    record23.set("careerSlug", "data-scientist");
    record23.set("careerName", "Data Scientist");
    record23.set("level", "Advanced");
    record23.set("questionNumber", 6);
    record23.set("question", "How do you evaluate model performance and choose metrics?");
    record23.set("explanation", "Choose metrics based on problem type: accuracy/precision/recall for classification, MSE/RMSE/MAE for regression, AUC-ROC for imbalanced data. Consider business context.");
    record23.set("practicalExample", "For fraud detection: use precision/recall/F1 not accuracy (imbalanced), for regression: use RMSE for interpretability.");
    record23.set("keyPoints", ["Classification metrics", "Regression metrics", "Imbalanced data", "Business metrics"]);
    record23.set("relatedTopics", ["Model Evaluation", "Performance"]);
    record23.set("difficulty", "Hard");
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
    record24.set("careerSlug", "devops-engineer");
    record24.set("careerName", "DevOps Engineer");
    record24.set("level", "Beginner");
    record24.set("questionNumber", 1);
    record24.set("question", "What is CI/CD and why is it important?");
    record24.set("explanation", "CI/CD automates testing and deployment. Continuous Integration merges code frequently with automated tests. Continuous Deployment automatically releases to production.");
    record24.set("practicalExample", "GitHub Actions runs tests on every push, automatically deploys to staging/production if tests pass.");
    record24.set("keyPoints", ["Continuous Integration", "Continuous Deployment", "Automation", "Testing"]);
    record24.set("relatedTopics", ["DevOps", "Automation"]);
    record24.set("difficulty", "Simple");
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
    record25.set("careerSlug", "devops-engineer");
    record25.set("careerName", "DevOps Engineer");
    record25.set("level", "Beginner");
    record25.set("questionNumber", 2);
    record25.set("question", "Explain Docker and containerization.");
    record25.set("explanation", "Docker packages applications with dependencies into containers. Containers are lightweight, portable, and ensure consistency across environments.");
    record25.set("practicalExample", "Dockerfile defines image, docker run creates container, docker-compose orchestrates multiple containers.");
    record25.set("keyPoints", ["Images", "Containers", "Dockerfile", "Docker Compose"]);
    record25.set("relatedTopics", ["Containerization", "Infrastructure"]);
    record25.set("difficulty", "Simple");
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
    record26.set("careerSlug", "devops-engineer");
    record26.set("careerName", "DevOps Engineer");
    record26.set("level", "Intermediate");
    record26.set("questionNumber", 3);
    record26.set("question", "What is Kubernetes and how does it work?");
    record26.set("explanation", "Kubernetes orchestrates containerized applications across clusters. It handles deployment, scaling, networking, and self-healing of containers.");
    record26.set("practicalExample", "Define pods, services, deployments in YAML, kubectl applies configuration, Kubernetes manages replicas and updates.");
    record26.set("keyPoints", ["Pods", "Services", "Deployments", "Scaling"]);
    record26.set("relatedTopics", ["Container Orchestration", "Infrastructure"]);
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
    record27.set("careerSlug", "devops-engineer");
    record27.set("careerName", "DevOps Engineer");
    record27.set("level", "Intermediate");
    record27.set("questionNumber", 4);
    record27.set("question", "How do you implement monitoring and alerting?");
    record27.set("explanation", "Use monitoring tools (Prometheus, Grafana) to collect metrics, set up alerts for anomalies, implement logging (ELK stack), and create dashboards for visibility.");
    record27.set("practicalExample", "Prometheus scrapes metrics, Grafana visualizes, AlertManager sends notifications when CPU >80% or error rate spikes.");
    record27.set("keyPoints", ["Metrics", "Logging", "Alerting", "Dashboards"]);
    record27.set("relatedTopics", ["Monitoring", "Observability"]);
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
    record28.set("careerSlug", "devops-engineer");
    record28.set("careerName", "DevOps Engineer");
    record28.set("level", "Advanced");
    record28.set("questionNumber", 5);
    record28.set("question", "Explain Infrastructure as Code (IaC) and its benefits.");
    record28.set("explanation", "IaC defines infrastructure using code (Terraform, CloudFormation). Benefits include version control, reproducibility, automation, and disaster recovery.");
    record28.set("practicalExample", "Terraform code defines AWS resources, version controlled in Git, can be applied to multiple environments consistently.");
    record28.set("keyPoints", ["Terraform", "CloudFormation", "Version control", "Reproducibility"]);
    record28.set("relatedTopics", ["Infrastructure", "Automation"]);
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
    record29.set("careerSlug", "devops-engineer");
    record29.set("careerName", "DevOps Engineer");
    record29.set("level", "Advanced");
    record29.set("questionNumber", 6);
    record29.set("question", "How do you manage deployments and rollbacks?");
    record29.set("explanation", "Use blue-green deployments, canary releases, or rolling updates. Implement automated rollback on failures, maintain version history, and test in staging.");
    record29.set("practicalExample", "Blue-green: run two identical environments, switch traffic to new version, rollback by switching back if issues occur.");
    record29.set("keyPoints", ["Blue-green", "Canary", "Rolling updates", "Rollback"]);
    record29.set("relatedTopics", ["Deployment", "Release Management"]);
    record29.set("difficulty", "Hard");
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
    record30.set("careerSlug", "mobile-app-developer");
    record30.set("careerName", "Mobile App Developer");
    record30.set("level", "Beginner");
    record30.set("questionNumber", 1);
    record30.set("question", "What is the difference between native and cross-platform development?");
    record30.set("explanation", "Native apps are built for specific platforms (iOS/Android) using platform-specific languages. Cross-platform apps use frameworks like React Native or Flutter to run on multiple platforms.");
    record30.set("practicalExample", "Native: Swift for iOS, Kotlin for Android. Cross-platform: React Native, Flutter, Xamarin.");
    record30.set("keyPoints", ["Native development", "Cross-platform", "Performance", "Code reuse"]);
    record30.set("relatedTopics", ["Mobile Development", "Frameworks"]);
    record30.set("difficulty", "Simple");
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
    record31.set("careerSlug", "mobile-app-developer");
    record31.set("careerName", "Mobile App Developer");
    record31.set("level", "Beginner");
    record31.set("questionNumber", 2);
    record31.set("question", "Explain the app lifecycle and state management.");
    record31.set("explanation", "Apps have states: created, started, resumed, paused, stopped, destroyed. Proper state management preserves data during configuration changes and lifecycle transitions.");
    record31.set("practicalExample", "Save state in onSaveInstanceState, restore in onCreate, use ViewModel to survive configuration changes.");
    record31.set("keyPoints", ["Lifecycle methods", "State preservation", "ViewModel", "Configuration changes"]);
    record31.set("relatedTopics", ["Mobile Development", "State Management"]);
    record31.set("difficulty", "Simple");
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
    record32.set("careerSlug", "mobile-app-developer");
    record32.set("careerName", "Mobile App Developer");
    record32.set("level", "Intermediate");
    record32.set("questionNumber", 3);
    record32.set("question", "How do you optimize mobile app performance?");
    record32.set("explanation", "Optimize by reducing app size, lazy loading, efficient memory usage, background task optimization, and battery efficiency. Profile with Android Profiler or Xcode Instruments.");
    record32.set("practicalExample", "Use ProGuard for code shrinking, implement image caching, avoid memory leaks, use WorkManager for background tasks.");
    record32.set("keyPoints", ["App size", "Memory management", "Battery efficiency", "Profiling"]);
    record32.set("relatedTopics", ["Performance", "Optimization"]);
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
    record33.set("careerSlug", "mobile-app-developer");
    record33.set("careerName", "Mobile App Developer");
    record33.set("level", "Intermediate");
    record33.set("questionNumber", 4);
    record33.set("question", "What are best practices for mobile security?");
    record33.set("explanation", "Secure data with encryption, use secure storage for sensitive data, validate inputs, implement certificate pinning, use HTTPS, and follow platform security guidelines.");
    record33.set("practicalExample", "Use Keystore for credentials, encrypt local database, validate API responses, implement biometric authentication.");
    record33.set("keyPoints", ["Encryption", "Secure storage", "Input validation", "HTTPS"]);
    record33.set("relatedTopics", ["Security", "Best Practices"]);
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
    record34.set("careerSlug", "mobile-app-developer");
    record34.set("careerName", "Mobile App Developer");
    record34.set("level", "Advanced");
    record34.set("questionNumber", 5);
    record34.set("question", "Explain dependency injection and its benefits in mobile apps.");
    record34.set("explanation", "Dependency injection provides dependencies to classes rather than having them create dependencies. Benefits include testability, loose coupling, and flexibility.");
    record34.set("practicalExample", "Use Hilt for Android, inject repositories into ViewModels, makes unit testing easier by injecting mock objects.");
    record34.set("keyPoints", ["Loose coupling", "Testability", "Hilt", "Dagger"]);
    record34.set("relatedTopics", ["Architecture", "Testing"]);
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
    record35.set("careerSlug", "mobile-app-developer");
    record35.set("careerName", "Mobile App Developer");
    record35.set("level", "Advanced");
    record35.set("questionNumber", 6);
    record35.set("question", "How do you implement offline-first architecture?");
    record35.set("explanation", "Offline-first apps work without internet by storing data locally, syncing when online. Use local databases (Room, Realm), implement conflict resolution, and queue operations.");
    record35.set("practicalExample", "Store data in Room database, queue API calls, sync when network available, handle conflicts with timestamps.");
    record35.set("keyPoints", ["Local storage", "Sync", "Conflict resolution", "Queue"]);
    record35.set("relatedTopics", ["Architecture", "Data Persistence"]);
    record35.set("difficulty", "Hard");
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
    record36.set("careerSlug", "cloud-architect");
    record36.set("careerName", "Cloud Architect");
    record36.set("level", "Beginner");
    record36.set("questionNumber", 1);
    record36.set("question", "What are the main cloud service models?");
    record36.set("explanation", "IaaS (Infrastructure as a Service) provides computing resources, PaaS (Platform as a Service) provides development platforms, SaaS (Software as a Service) provides applications.");
    record36.set("practicalExample", "IaaS: AWS EC2, PaaS: Heroku, SaaS: Salesforce, Google Workspace.");
    record36.set("keyPoints", ["IaaS", "PaaS", "SaaS", "Responsibility"]);
    record36.set("relatedTopics", ["Cloud Computing", "Services"]);
    record36.set("difficulty", "Simple");
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
    record37.set("careerSlug", "cloud-architect");
    record37.set("careerName", "Cloud Architect");
    record37.set("level", "Beginner");
    record37.set("questionNumber", 2);
    record37.set("question", "Explain cloud deployment models.");
    record37.set("explanation", "Public cloud is shared infrastructure, private cloud is dedicated, hybrid combines both, multi-cloud uses multiple providers. Each has different security and cost implications.");
    record37.set("practicalExample", "Public: AWS, Azure, GCP. Private: On-premises cloud. Hybrid: On-premises + AWS. Multi-cloud: AWS + Azure.");
    record37.set("keyPoints", ["Public cloud", "Private cloud", "Hybrid", "Multi-cloud"]);
    record37.set("relatedTopics", ["Cloud Computing", "Deployment"]);
    record37.set("difficulty", "Simple");
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
    record38.set("careerSlug", "cloud-architect");
    record38.set("careerName", "Cloud Architect");
    record38.set("level", "Intermediate");
    record38.set("questionNumber", 3);
    record38.set("question", "How do you design for high availability and disaster recovery?");
    record38.set("explanation", "Use multi-region deployment, load balancing, auto-scaling, database replication, and backup strategies. Define RTO (Recovery Time Objective) and RPO (Recovery Point Objective).");
    record38.set("practicalExample", "Multi-region active-active setup, automated failover, regular backups, disaster recovery drills.");
    record38.set("keyPoints", ["Multi-region", "Failover", "Backups", "RTO/RPO"]);
    record38.set("relatedTopics", ["Reliability", "Disaster Recovery"]);
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
    record39.set("careerSlug", "cloud-architect");
    record39.set("careerName", "Cloud Architect");
    record39.set("level", "Intermediate");
    record39.set("questionNumber", 4);
    record39.set("question", "What are cloud security best practices?");
    record39.set("explanation", "Implement least privilege access, encryption at rest and in transit, network segmentation, regular audits, and compliance monitoring. Use IAM for access control.");
    record39.set("practicalExample", "Use security groups, VPCs, encryption keys, MFA, regular security assessments, compliance with GDPR/HIPAA.");
    record39.set("keyPoints", ["IAM", "Encryption", "Network security", "Compliance"]);
    record39.set("relatedTopics", ["Security", "Compliance"]);
    record39.set("difficulty", "Medium");
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
    record40.set("careerSlug", "cloud-architect");
    record40.set("careerName", "Cloud Architect");
    record40.set("level", "Advanced");
    record40.set("questionNumber", 5);
    record40.set("question", "How do you optimize cloud costs?");
    record40.set("explanation", "Use reserved instances, spot instances, auto-scaling, right-sizing, and monitoring. Implement cost allocation tags, use serverless for variable workloads.");
    record40.set("practicalExample", "Use EC2 reserved instances for baseline, spot for batch jobs, Lambda for event-driven, CloudWatch for monitoring.");
    record40.set("keyPoints", ["Reserved instances", "Spot instances", "Serverless", "Monitoring"]);
    record40.set("relatedTopics", ["Cost Optimization", "Efficiency"]);
    record40.set("difficulty", "Medium");
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
    record41.set("careerSlug", "cloud-architect");
    record41.set("careerName", "Cloud Architect");
    record41.set("level", "Advanced");
    record41.set("questionNumber", 6);
    record41.set("question", "Explain microservices architecture and its challenges.");
    record41.set("explanation", "Microservices break applications into small, independent services. Benefits: scalability, flexibility. Challenges: complexity, distributed debugging, data consistency.");
    record41.set("practicalExample", "Each service has own database, communicates via APIs, deployed independently, requires service discovery and monitoring.");
    record41.set("keyPoints", ["Service independence", "Scalability", "Complexity", "Distributed systems"]);
    record41.set("relatedTopics", ["Architecture", "Scalability"]);
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
    record42.set("careerSlug", "database-administrator");
    record42.set("careerName", "Database Administrator");
    record42.set("level", "Beginner");
    record42.set("questionNumber", 1);
    record42.set("question", "What are the main types of databases?");
    record42.set("explanation", "Relational databases (SQL) store structured data in tables, NoSQL databases (MongoDB, Cassandra) handle unstructured data, graph databases for relationships.");
    record42.set("practicalExample", "SQL: PostgreSQL, MySQL. NoSQL: MongoDB, DynamoDB. Graph: Neo4j.");
    record42.set("keyPoints", ["Relational", "NoSQL", "Graph", "Use cases"]);
    record42.set("relatedTopics", ["Databases", "Data Storage"]);
    record42.set("difficulty", "Simple");
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
    record43.set("careerSlug", "database-administrator");
    record43.set("careerName", "Database Administrator");
    record43.set("level", "Beginner");
    record43.set("questionNumber", 2);
    record43.set("question", "Explain ACID properties in databases.");
    record43.set("explanation", "Atomicity: transactions complete fully or not at all. Consistency: data remains valid. Isolation: concurrent transactions don't interfere. Durability: committed data persists.");
    record43.set("practicalExample", "Bank transfer: debit account (atomic), both accounts valid (consistent), other transactions isolated, committed data survives crashes.");
    record43.set("keyPoints", ["Atomicity", "Consistency", "Isolation", "Durability"]);
    record43.set("relatedTopics", ["Transactions", "Data Integrity"]);
    record43.set("difficulty", "Simple");
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
    record44.set("careerSlug", "database-administrator");
    record44.set("careerName", "Database Administrator");
    record44.set("level", "Intermediate");
    record44.set("questionNumber", 3);
    record44.set("question", "How do you optimize database queries?");
    record44.set("explanation", "Use indexes, analyze query plans, avoid N+1 queries, denormalize when needed, use caching, and partition large tables. Monitor slow queries.");
    record44.set("practicalExample", "Create index on frequently queried columns, use EXPLAIN to analyze query plans, implement query result caching.");
    record44.set("keyPoints", ["Indexes", "Query plans", "Caching", "Partitioning"]);
    record44.set("relatedTopics", ["Performance", "Optimization"]);
    record44.set("difficulty", "Medium");
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
    record45.set("careerSlug", "database-administrator");
    record45.set("careerName", "Database Administrator");
    record45.set("level", "Intermediate");
    record45.set("questionNumber", 4);
    record45.set("question", "What are backup and recovery strategies?");
    record45.set("explanation", "Implement full backups, incremental backups, and transaction logs. Test recovery procedures regularly. Use automated backup tools and off-site storage.");
    record45.set("practicalExample", "Daily full backup, hourly incremental, transaction logs for point-in-time recovery, test restore monthly.");
    record45.set("keyPoints", ["Full backup", "Incremental backup", "Recovery", "Testing"]);
    record45.set("relatedTopics", ["Disaster Recovery", "Data Protection"]);
    record45.set("difficulty", "Medium");
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
    record46.set("careerSlug", "database-administrator");
    record46.set("careerName", "Database Administrator");
    record46.set("level", "Advanced");
    record46.set("questionNumber", 5);
    record46.set("question", "Explain database replication and sharding.");
    record46.set("explanation", "Replication copies data across servers for redundancy and read scaling. Sharding partitions data across servers for write scaling and handling large datasets.");
    record46.set("practicalExample", "Master-slave replication for read scaling, sharding by user ID for horizontal scaling.");
    record46.set("keyPoints", ["Replication", "Sharding", "Consistency", "Scalability"]);
    record46.set("relatedTopics", ["Scalability", "High Availability"]);
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
    record47.set("careerSlug", "database-administrator");
    record47.set("careerName", "Database Administrator");
    record47.set("level", "Advanced");
    record47.set("questionNumber", 6);
    record47.set("question", "How do you ensure database security and compliance?");
    record47.set("explanation", "Implement encryption, access controls, audit logging, regular security updates, and compliance monitoring. Use role-based access and data masking.");
    record47.set("practicalExample", "Encrypt sensitive columns, implement row-level security, audit all access, regular penetration testing, GDPR compliance.");
    record47.set("keyPoints", ["Encryption", "Access control", "Auditing", "Compliance"]);
    record47.set("relatedTopics", ["Security", "Compliance"]);
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
    record48.set("careerSlug", "machine-learning-engineer");
    record48.set("careerName", "Machine Learning Engineer");
    record48.set("level", "Beginner");
    record48.set("questionNumber", 1);
    record48.set("question", "What is the difference between supervised and unsupervised learning?");
    record48.set("explanation", "Supervised learning uses labeled data to train models (classification, regression). Unsupervised learning finds patterns in unlabeled data (clustering, dimensionality reduction).");
    record48.set("practicalExample", "Supervised: predict house prices from features. Unsupervised: group customers by behavior without labels.");
    record48.set("keyPoints", ["Labeled data", "Unlabeled data", "Classification", "Clustering"]);
    record48.set("relatedTopics", ["Machine Learning", "Algorithms"]);
    record48.set("difficulty", "Simple");
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
    record49.set("careerSlug", "machine-learning-engineer");
    record49.set("careerName", "Machine Learning Engineer");
    record49.set("level", "Beginner");
    record49.set("questionNumber", 2);
    record49.set("question", "Explain the machine learning workflow.");
    record49.set("explanation", "Define problem, collect data, preprocess, feature engineering, model selection, training, evaluation, hyperparameter tuning, and deployment.");
    record49.set("practicalExample", "Predict customer churn: collect data, clean, engineer features, train models, evaluate, tune, deploy to production.");
    record49.set("keyPoints", ["Data collection", "Preprocessing", "Training", "Evaluation"]);
    record49.set("relatedTopics", ["Machine Learning", "Process"]);
    record49.set("difficulty", "Simple");
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

  const record50 = new Record(collection);
    record50.set("careerSlug", "machine-learning-engineer");
    record50.set("careerName", "Machine Learning Engineer");
    record50.set("level", "Intermediate");
    record50.set("questionNumber", 3);
    record50.set("question", "What are common machine learning algorithms and their use cases?");
    record50.set("explanation", "Linear/Logistic Regression for simple relationships, Decision Trees for interpretability, Random Forest for robustness, SVM for classification, Neural Networks for complex patterns.");
    record50.set("practicalExample", "Linear Regression: predict sales. Decision Tree: loan approval. Neural Network: image recognition.");
    record50.set("keyPoints", ["Regression", "Classification", "Ensemble", "Deep Learning"]);
    record50.set("relatedTopics", ["Algorithms", "Model Selection"]);
    record50.set("difficulty", "Medium");
    record50.set("category", "Technical");
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
    record51.set("careerSlug", "machine-learning-engineer");
    record51.set("careerName", "Machine Learning Engineer");
    record51.set("level", "Intermediate");
    record51.set("questionNumber", 4);
    record51.set("question", "How do you handle imbalanced datasets?");
    record51.set("explanation", "Use techniques like oversampling minority class, undersampling majority class, SMOTE, class weights, or different evaluation metrics like F1-score and AUC-ROC.");
    record51.set("practicalExample", "Fraud detection: use SMOTE to generate synthetic fraud samples, use class weights in model, evaluate with F1-score not accuracy.");
    record51.set("keyPoints", ["Oversampling", "Undersampling", "SMOTE", "Class weights"]);
    record51.set("relatedTopics", ["Data Preprocessing", "Model Evaluation"]);
    record51.set("difficulty", "Medium");
    record51.set("category", "Technical");
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
    record52.set("careerSlug", "machine-learning-engineer");
    record52.set("careerName", "Machine Learning Engineer");
    record52.set("level", "Advanced");
    record52.set("questionNumber", 5);
    record52.set("question", "Explain ensemble methods and their benefits.");
    record52.set("explanation", "Ensemble methods combine multiple models to improve performance. Bagging reduces variance, boosting reduces bias, stacking combines diverse models.");
    record52.set("practicalExample", "Random Forest (bagging), Gradient Boosting, XGBoost, voting classifier combining multiple algorithms.");
    record52.set("keyPoints", ["Bagging", "Boosting", "Stacking", "Voting"]);
    record52.set("relatedTopics", ["Algorithms", "Model Improvement"]);
    record52.set("difficulty", "Hard");
    record52.set("category", "Technical");
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
    record53.set("careerSlug", "machine-learning-engineer");
    record53.set("careerName", "Machine Learning Engineer");
    record53.set("level", "Advanced");
    record53.set("questionNumber", 6);
    record53.set("question", "How do you deploy and monitor machine learning models?");
    record53.set("explanation", "Use model serving frameworks (TensorFlow Serving, MLflow), containerize with Docker, implement monitoring for model drift, retrain periodically, and A/B test new versions.");
    record53.set("practicalExample", "Deploy model in Docker container, monitor predictions vs actual, retrain monthly, A/B test new model version.");
    record53.set("keyPoints", ["Model serving", "Monitoring", "Drift detection", "Retraining"]);
    record53.set("relatedTopics", ["Deployment", "MLOps"]);
    record53.set("difficulty", "Hard");
    record53.set("category", "Technical");
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
    record54.set("careerSlug", "security-engineer");
    record54.set("careerName", "Security Engineer");
    record54.set("level", "Beginner");
    record54.set("questionNumber", 1);
    record54.set("question", "What are common security vulnerabilities and how to prevent them?");
    record54.set("explanation", "OWASP Top 10 includes SQL injection, XSS, CSRF, insecure deserialization. Prevent with input validation, parameterized queries, output encoding, and security headers.");
    record54.set("practicalExample", "SQL injection: use prepared statements. XSS: encode output. CSRF: use tokens.");
    record54.set("keyPoints", ["OWASP Top 10", "Input validation", "Output encoding", "Security headers"]);
    record54.set("relatedTopics", ["Security", "Vulnerabilities"]);
    record54.set("difficulty", "Simple");
    record54.set("category", "Technical");
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
    record55.set("careerSlug", "security-engineer");
    record55.set("careerName", "Security Engineer");
    record55.set("level", "Beginner");
    record55.set("questionNumber", 2);
    record55.set("question", "Explain encryption and its types.");
    record55.set("explanation", "Symmetric encryption uses same key for encryption/decryption (AES). Asymmetric uses public/private keys (RSA). Hash functions create fixed-size digests (SHA-256).");
    record55.set("practicalExample", "AES for data at rest, RSA for key exchange, SHA-256 for password hashing.");
    record55.set("keyPoints", ["Symmetric", "Asymmetric", "Hashing", "Key management"]);
    record55.set("relatedTopics", ["Cryptography", "Security"]);
    record55.set("difficulty", "Simple");
    record55.set("category", "Technical");
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
    record56.set("careerSlug", "security-engineer");
    record56.set("careerName", "Security Engineer");
    record56.set("level", "Intermediate");
    record56.set("questionNumber", 3);
    record56.set("question", "What is a security audit and penetration testing?");
    record56.set("explanation", "Security audit reviews systems for vulnerabilities and compliance. Penetration testing simulates attacks to find weaknesses. Both identify risks and recommend fixes.");
    record56.set("practicalExample", "Audit: check access controls, encryption, logging. Pen test: attempt to breach systems, exploit vulnerabilities.");
    record56.set("keyPoints", ["Vulnerability assessment", "Penetration testing", "Risk assessment", "Remediation"]);
    record56.set("relatedTopics", ["Security Testing", "Compliance"]);
    record56.set("difficulty", "Medium");
    record56.set("category", "Technical");
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
    record57.set("careerSlug", "security-engineer");
    record57.set("careerName", "Security Engineer");
    record57.set("level", "Intermediate");
    record57.set("questionNumber", 4);
    record57.set("question", "How do you implement secure authentication and authorization?");
    record57.set("explanation", "Use strong password policies, MFA, OAuth/OpenID Connect, JWT tokens, and role-based access control. Implement secure session management and token expiration.");
    record57.set("practicalExample", "Require 12+ character passwords, enforce MFA, use JWT with short expiration, implement RBAC.");
    record57.set("keyPoints", ["MFA", "OAuth", "JWT", "RBAC"]);
    record57.set("relatedTopics", ["Authentication", "Authorization"]);
    record57.set("difficulty", "Medium");
    record57.set("category", "Technical");
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
    record58.set("careerSlug", "security-engineer");
    record58.set("careerName", "Security Engineer");
    record58.set("level", "Advanced");
    record58.set("questionNumber", 5);
    record58.set("question", "Explain threat modeling and risk assessment.");
    record58.set("explanation", "Threat modeling identifies potential threats and vulnerabilities. Risk assessment evaluates likelihood and impact. Use frameworks like STRIDE or PASTA.");
    record58.set("practicalExample", "STRIDE: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege.");
    record58.set("keyPoints", ["Threat modeling", "Risk assessment", "STRIDE", "Mitigation"]);
    record58.set("relatedTopics", ["Security Planning", "Risk Management"]);
    record58.set("difficulty", "Hard");
    record58.set("category", "Technical");
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
    record59.set("careerSlug", "security-engineer");
    record59.set("careerName", "Security Engineer");
    record59.set("level", "Advanced");
    record59.set("questionNumber", 6);
    record59.set("question", "How do you respond to security incidents?");
    record59.set("explanation", "Have incident response plan: detect, contain, eradicate, recover, post-incident review. Maintain logs, communicate with stakeholders, and implement preventive measures.");
    record59.set("practicalExample", "Detect breach, isolate affected systems, remove malware, restore from backups, analyze root cause, implement fixes.");
    record59.set("keyPoints", ["Detection", "Containment", "Eradication", "Recovery"]);
    record59.set("relatedTopics", ["Incident Response", "Security Operations"]);
    record59.set("difficulty", "Hard");
    record59.set("category", "Technical");
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
    record60.set("careerSlug", "qa-engineer");
    record60.set("careerName", "QA Engineer");
    record60.set("level", "Beginner");
    record60.set("questionNumber", 1);
    record60.set("question", "What are the types of software testing?");
    record60.set("explanation", "Unit testing tests individual components, integration testing tests component interactions, system testing tests entire system, acceptance testing validates requirements.");
    record60.set("practicalExample", "Unit: test function logic. Integration: test API calls. System: test full workflow. Acceptance: test user requirements.");
    record60.set("keyPoints", ["Unit testing", "Integration testing", "System testing", "Acceptance testing"]);
    record60.set("relatedTopics", ["Testing", "Quality Assurance"]);
    record60.set("difficulty", "Simple");
    record60.set("category", "Technical");
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
    record61.set("careerSlug", "qa-engineer");
    record61.set("careerName", "QA Engineer");
    record61.set("level", "Beginner");
    record61.set("questionNumber", 2);
    record61.set("question", "Explain test automation and its benefits.");
    record61.set("explanation", "Test automation uses tools to execute tests automatically. Benefits: faster feedback, consistent results, cost reduction, better coverage, and continuous testing.");
    record61.set("practicalExample", "Selenium for web testing, Appium for mobile, JUnit for unit tests, automated regression testing in CI/CD.");
    record61.set("keyPoints", ["Automation tools", "Regression testing", "CI/CD integration", "ROI"]);
    record61.set("relatedTopics", ["Test Automation", "Efficiency"]);
    record61.set("difficulty", "Simple");
    record61.set("category", "Technical");
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
    record62.set("careerSlug", "qa-engineer");
    record62.set("careerName", "QA Engineer");
    record62.set("level", "Intermediate");
    record62.set("questionNumber", 3);
    record62.set("question", "What is test coverage and how do you measure it?");
    record62.set("explanation", "Test coverage measures percentage of code executed by tests. Tools like JaCoCo, Istanbul measure coverage. Aim for high coverage but focus on critical paths.");
    record62.set("practicalExample", "80% code coverage means 80% of code is executed by tests. Focus on business logic, not trivial getters.");
    record62.set("keyPoints", ["Code coverage", "Branch coverage", "Tools", "Coverage goals"]);
    record62.set("relatedTopics", ["Testing", "Metrics"]);
    record62.set("difficulty", "Medium");
    record62.set("category", "Technical");
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
    record63.set("careerSlug", "qa-engineer");
    record63.set("careerName", "QA Engineer");
    record63.set("level", "Intermediate");
    record63.set("questionNumber", 4);
    record63.set("question", "How do you write effective test cases?");
    record63.set("explanation", "Test cases should be clear, independent, repeatable, and focused. Include setup, execution, and assertion. Use descriptive names and cover positive/negative scenarios.");
    record63.set("practicalExample", "Test name: testLoginWithValidCredentialsSucceeds. Setup: create user. Execute: login. Assert: user authenticated.");
    record63.set("keyPoints", ["Clear naming", "Independence", "Repeatability", "Coverage"]);
    record63.set("relatedTopics", ["Test Design", "Best Practices"]);
    record63.set("difficulty", "Medium");
    record63.set("category", "Technical");
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
    record64.set("careerSlug", "qa-engineer");
    record64.set("careerName", "QA Engineer");
    record64.set("level", "Advanced");
    record64.set("questionNumber", 5);
    record64.set("question", "Explain performance and load testing.");
    record64.set("explanation", "Performance testing measures response times and resource usage. Load testing simulates concurrent users to find breaking points. Use tools like JMeter, LoadRunner.");
    record64.set("practicalExample", "Load test: simulate 1000 concurrent users, measure response time, identify bottlenecks, optimize.");
    record64.set("keyPoints", ["Response time", "Throughput", "Load testing", "Stress testing"]);
    record64.set("relatedTopics", ["Performance", "Testing"]);
    record64.set("difficulty", "Hard");
    record64.set("category", "Technical");
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
    record65.set("careerSlug", "qa-engineer");
    record65.set("careerName", "QA Engineer");
    record65.set("level", "Advanced");
    record65.set("questionNumber", 6);
    record65.set("question", "How do you ensure quality in continuous integration?");
    record65.set("explanation", "Implement automated tests in CI pipeline, set quality gates, monitor metrics, enforce code reviews, and fail builds on test failures or coverage drops.");
    record65.set("practicalExample", "Run unit tests, integration tests, code coverage checks, security scans on every commit, fail if coverage drops below 80%.");
    record65.set("keyPoints", ["Automated testing", "Quality gates", "Metrics", "Continuous monitoring"]);
    record65.set("relatedTopics", ["CI/CD", "Quality Assurance"]);
    record65.set("difficulty", "Hard");
    record65.set("category", "Technical");
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
    record66.set("careerSlug", "solutions-architect");
    record66.set("careerName", "Solutions Architect");
    record66.set("level", "Beginner");
    record66.set("questionNumber", 1);
    record66.set("question", "What is the role of a solutions architect?");
    record66.set("explanation", "Solutions architects design technical solutions for business problems. They understand requirements, design systems, ensure scalability, and bridge business and technical teams.");
    record66.set("practicalExample", "Client needs e-commerce platform: architect designs microservices, cloud infrastructure, database strategy, security approach.");
    record66.set("keyPoints", ["Requirements analysis", "System design", "Scalability", "Communication"]);
    record66.set("relatedTopics", ["Architecture", "Leadership"]);
    record66.set("difficulty", "Simple");
    record66.set("category", "Technical");
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
    record67.set("careerSlug", "solutions-architect");
    record67.set("careerName", "Solutions Architect");
    record67.set("level", "Beginner");
    record67.set("questionNumber", 2);
    record67.set("question", "Explain system design principles.");
    record67.set("explanation", "Design for scalability, reliability, maintainability, and security. Use modular architecture, separation of concerns, and design patterns.");
    record67.set("practicalExample", "Microservices for scalability, load balancing for reliability, caching for performance, encryption for security.");
    record67.set("keyPoints", ["Scalability", "Reliability", "Maintainability", "Security"]);
    record67.set("relatedTopics", ["Architecture", "Design"]);
    record67.set("difficulty", "Simple");
    record67.set("category", "Technical");
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
    record68.set("careerSlug", "solutions-architect");
    record68.set("careerName", "Solutions Architect");
    record68.set("level", "Intermediate");
    record68.set("questionNumber", 3);
    record68.set("question", "How do you gather and analyze requirements?");
    record68.set("explanation", "Conduct stakeholder interviews, document functional and non-functional requirements, create use cases, and validate understanding. Prioritize requirements by business value.");
    record68.set("practicalExample", "Interview users, document requirements, create user stories, prioritize by ROI, validate with stakeholders.");
    record68.set("keyPoints", ["Stakeholder analysis", "Requirements documentation", "Use cases", "Prioritization"]);
    record68.set("relatedTopics", ["Requirements", "Analysis"]);
    record68.set("difficulty", "Medium");
    record68.set("category", "Technical");
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
    record69.set("careerSlug", "solutions-architect");
    record69.set("careerName", "Solutions Architect");
    record69.set("level", "Intermediate");
    record69.set("questionNumber", 4);
    record69.set("question", "What are non-functional requirements and why are they important?");
    record69.set("explanation", "Non-functional requirements specify how system should perform: scalability, performance, security, availability, maintainability. They're critical for system success.");
    record69.set("practicalExample", "System must handle 10,000 concurrent users, respond in <200ms, have 99.9% uptime, support 1000 TPS.");
    record69.set("keyPoints", ["Performance", "Scalability", "Availability", "Security"]);
    record69.set("relatedTopics", ["Requirements", "Quality"]);
    record69.set("difficulty", "Medium");
    record69.set("category", "Technical");
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
    record70.set("careerSlug", "solutions-architect");
    record70.set("careerName", "Solutions Architect");
    record70.set("level", "Advanced");
    record70.set("questionNumber", 5);
    record70.set("question", "How do you design for fault tolerance and resilience?");
    record70.set("explanation", "Use redundancy, failover mechanisms, circuit breakers, retry logic, and graceful degradation. Design for partial failures and implement monitoring.");
    record70.set("practicalExample", "Multi-region deployment, load balancing, circuit breaker for failing services, retry with exponential backoff.");
    record70.set("keyPoints", ["Redundancy", "Failover", "Circuit breaker", "Monitoring"]);
    record70.set("relatedTopics", ["Reliability", "Resilience"]);
    record70.set("difficulty", "Hard");
    record70.set("category", "Technical");
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
    record71.set("careerSlug", "solutions-architect");
    record71.set("careerName", "Solutions Architect");
    record71.set("level", "Advanced");
    record71.set("questionNumber", 6);
    record71.set("question", "How do you present and communicate architecture decisions?");
    record71.set("explanation", "Create architecture diagrams, document decisions with rationale, present to stakeholders, address concerns, and ensure alignment with business goals.");
    record71.set("practicalExample", "Create C4 diagrams, document trade-offs, present to technical and business teams, get buy-in before implementation.");
    record71.set("keyPoints", ["Documentation", "Visualization", "Communication", "Stakeholder alignment"]);
    record71.set("relatedTopics", ["Communication", "Leadership"]);
    record71.set("difficulty", "Hard");
    record71.set("category", "Technical");
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
    record72.set("careerSlug", "network-engineer");
    record72.set("careerName", "Network Engineer");
    record72.set("level", "Beginner");
    record72.set("questionNumber", 1);
    record72.set("question", "What are the OSI model layers and their functions?");
    record72.set("explanation", "7 layers: Physical (cables), Data Link (MAC), Network (IP), Transport (TCP/UDP), Session (connections), Presentation (encryption), Application (HTTP/SMTP).");
    record72.set("practicalExample", "Layer 1: Ethernet cables. Layer 3: IP routing. Layer 4: TCP connections. Layer 7: Web browsers.");
    record72.set("keyPoints", ["7 layers", "Protocols", "Data flow", "Troubleshooting"]);
    record72.set("relatedTopics", ["Networking", "Protocols"]);
    record72.set("difficulty", "Simple");
    record72.set("category", "Technical");
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
    record73.set("careerSlug", "network-engineer");
    record73.set("careerName", "Network Engineer");
    record73.set("level", "Beginner");
    record73.set("questionNumber", 2);
    record73.set("question", "Explain IP addressing and subnetting.");
    record73.set("explanation", "IP addresses identify devices on networks. IPv4 uses 32 bits, IPv6 uses 128 bits. Subnetting divides networks into smaller subnets using subnet masks.");
    record73.set("practicalExample", "192.168.1.0/24 is a subnet with 256 addresses. Subnet mask 255.255.255.0 defines network portion.");
    record73.set("keyPoints", ["IPv4", "IPv6", "Subnet mask", "CIDR notation"]);
    record73.set("relatedTopics", ["IP Addressing", "Networking"]);
    record73.set("difficulty", "Simple");
    record73.set("category", "Technical");
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
    record74.set("careerSlug", "network-engineer");
    record74.set("careerName", "Network Engineer");
    record74.set("level", "Intermediate");
    record74.set("questionNumber", 3);
    record74.set("question", "What are VLANs and why are they used?");
    record74.set("explanation", "VLANs (Virtual LANs) logically segment networks without physical separation. Benefits: improved security, better performance, easier management.");
    record74.set("practicalExample", "Separate VLAN for finance, HR, IT departments. Restrict traffic between VLANs with access control lists.");
    record74.set("keyPoints", ["Logical segmentation", "Security", "Performance", "Management"]);
    record74.set("relatedTopics", ["Network Design", "Security"]);
    record74.set("difficulty", "Medium");
    record74.set("category", "Technical");
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
    record75.set("careerSlug", "network-engineer");
    record75.set("careerName", "Network Engineer");
    record75.set("level", "Intermediate");
    record75.set("questionNumber", 4);
    record75.set("question", "How do you troubleshoot network connectivity issues?");
    record75.set("explanation", "Use ping to test connectivity, traceroute to find path, netstat to check connections, tcpdump to capture packets. Check logs and configuration.");
    record75.set("practicalExample", "Ping fails: check physical connection. Traceroute shows timeout: routing issue. Netstat shows no listening port: service not running.");
    record75.set("keyPoints", ["Ping", "Traceroute", "Netstat", "Packet analysis"]);
    record75.set("relatedTopics", ["Troubleshooting", "Diagnostics"]);
    record75.set("difficulty", "Medium");
    record75.set("category", "Technical");
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
    record76.set("careerSlug", "network-engineer");
    record76.set("careerName", "Network Engineer");
    record76.set("level", "Advanced");
    record76.set("questionNumber", 5);
    record76.set("question", "Explain network security and firewalls.");
    record76.set("explanation", "Firewalls filter traffic based on rules. Implement defense in depth: perimeter security, network segmentation, intrusion detection, DDoS protection.");
    record76.set("practicalExample", "Firewall blocks unauthorized ports, IDS detects attacks, WAF protects web applications, DDoS mitigation for large attacks.");
    record76.set("keyPoints", ["Firewall rules", "IDS/IPS", "WAF", "DDoS protection"]);
    record76.set("relatedTopics", ["Security", "Network Defense"]);
    record76.set("difficulty", "Hard");
    record76.set("category", "Technical");
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
    record77.set("careerSlug", "network-engineer");
    record77.set("careerName", "Network Engineer");
    record77.set("level", "Advanced");
    record77.set("questionNumber", 6);
    record77.set("question", "How do you design scalable and resilient networks?");
    record77.set("explanation", "Use redundancy, load balancing, failover mechanisms, and monitoring. Design for growth with proper capacity planning and network segmentation.");
    record77.set("practicalExample", "Redundant links, load balancers, failover routing, network monitoring, capacity planning for growth.");
    record77.set("keyPoints", ["Redundancy", "Load balancing", "Failover", "Monitoring"]);
    record77.set("relatedTopics", ["Network Design", "Scalability"]);
    record77.set("difficulty", "Hard");
    record77.set("category", "Technical");
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
    record78.set("careerSlug", "systems-administrator");
    record78.set("careerName", "Systems Administrator");
    record78.set("level", "Beginner");
    record78.set("questionNumber", 1);
    record78.set("question", "What are the main responsibilities of a systems administrator?");
    record78.set("explanation", "Manage servers, networks, and user accounts. Handle installations, updates, backups, security, and troubleshooting. Ensure system availability and performance.");
    record78.set("practicalExample", "Install OS, manage users, apply patches, backup data, monitor performance, troubleshoot issues.");
    record78.set("keyPoints", ["Server management", "User management", "Maintenance", "Troubleshooting"]);
    record78.set("relatedTopics", ["Systems Administration", "IT Operations"]);
    record78.set("difficulty", "Simple");
    record78.set("category", "Technical");
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
    record79.set("careerSlug", "systems-administrator");
    record79.set("careerName", "Systems Administrator");
    record79.set("level", "Beginner");
    record79.set("questionNumber", 2);
    record79.set("question", "Explain user and access management.");
    record79.set("explanation", "Create user accounts, assign permissions, implement access controls, manage groups, and enforce security policies. Use LDAP or Active Directory.");
    record79.set("practicalExample", "Create user in Active Directory, assign to groups, set file permissions, enforce password policy.");
    record79.set("keyPoints", ["User accounts", "Permissions", "Groups", "Access control"]);
    record79.set("relatedTopics", ["Security", "User Management"]);
    record79.set("difficulty", "Simple");
    record79.set("category", "Technical");
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
    record80.set("careerSlug", "systems-administrator");
    record80.set("careerName", "Systems Administrator");
    record80.set("level", "Intermediate");
    record80.set("questionNumber", 3);
    record80.set("question", "How do you manage system updates and patches?");
    record80.set("explanation", "Plan update schedule, test patches, deploy systematically, monitor for issues. Balance security with stability. Use patch management tools.");
    record80.set("practicalExample", "Test patches in staging, deploy during maintenance window, monitor for issues, rollback if needed.");
    record80.set("keyPoints", ["Patch management", "Testing", "Deployment", "Monitoring"]);
    record80.set("relatedTopics", ["Maintenance", "Security"]);
    record80.set("difficulty", "Medium");
    record80.set("category", "Technical");
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
    record81.set("careerSlug", "systems-administrator");
    record81.set("careerName", "Systems Administrator");
    record81.set("level", "Intermediate");
    record81.set("questionNumber", 4);
    record81.set("question", "What are backup and disaster recovery procedures?");
    record81.set("explanation", "Implement regular backups, test recovery, maintain off-site copies, document procedures, and define RTO/RPO. Use automated backup tools.");
    record81.set("practicalExample", "Daily incremental backups, weekly full backups, monthly off-site copies, quarterly recovery tests.");
    record81.set("keyPoints", ["Backup strategy", "Recovery testing", "Off-site storage", "Documentation"]);
    record81.set("relatedTopics", ["Disaster Recovery", "Data Protection"]);
    record81.set("difficulty", "Medium");
    record81.set("category", "Technical");
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
    record82.set("careerSlug", "systems-administrator");
    record82.set("careerName", "Systems Administrator");
    record82.set("level", "Advanced");
    record82.set("questionNumber", 5);
    record82.set("question", "How do you monitor system performance and health?");
    record82.set("explanation", "Use monitoring tools to track CPU, memory, disk, network. Set alerts for anomalies, analyze trends, and optimize resources. Implement log aggregation.");
    record82.set("practicalExample", "Nagios monitors servers, Grafana visualizes metrics, ELK aggregates logs, alerts on high CPU/memory.");
    record82.set("keyPoints", ["Monitoring tools", "Alerting", "Performance analysis", "Log aggregation"]);
    record82.set("relatedTopics", ["Monitoring", "Performance"]);
    record82.set("difficulty", "Hard");
    record82.set("category", "Technical");
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
    record83.set("careerSlug", "systems-administrator");
    record83.set("careerName", "Systems Administrator");
    record83.set("level", "Advanced");
    record83.set("questionNumber", 6);
    record83.set("question", "How do you implement system security hardening?");
    record83.set("explanation", "Disable unnecessary services, apply security patches, configure firewalls, implement strong authentication, audit logs, and regular security assessments.");
    record83.set("practicalExample", "Disable unused ports, enforce strong passwords, enable SELinux, configure firewall rules, audit access logs.");
    record83.set("keyPoints", ["Service hardening", "Authentication", "Firewall", "Auditing"]);
    record83.set("relatedTopics", ["Security", "Hardening"]);
    record83.set("difficulty", "Hard");
    record83.set("category", "Technical");
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
    record84.set("careerSlug", "business-analyst");
    record84.set("careerName", "Business Analyst");
    record84.set("level", "Beginner");
    record84.set("questionNumber", 1);
    record84.set("question", "What is the role of a business analyst?");
    record84.set("explanation", "Business analysts bridge business and IT. They gather requirements, analyze processes, identify improvements, and ensure solutions meet business needs.");
    record84.set("practicalExample", "Interview stakeholders, document requirements, create process flows, recommend solutions, validate implementation.");
    record84.set("keyPoints", ["Requirements gathering", "Process analysis", "Communication", "Problem solving"]);
    record84.set("relatedTopics", ["Business Analysis", "Project Management"]);
    record84.set("difficulty", "Simple");
    record84.set("category", "Technical");
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
    record85.set("careerSlug", "business-analyst");
    record85.set("careerName", "Business Analyst");
    record85.set("level", "Beginner");
    record85.set("questionNumber", 2);
    record85.set("question", "Explain requirements gathering and documentation.");
    record85.set("explanation", "Conduct interviews, workshops, and surveys. Document functional and non-functional requirements. Create use cases, user stories, and acceptance criteria.");
    record85.set("practicalExample", "Interview users, create user stories, define acceptance criteria, document in requirements document.");
    record85.set("keyPoints", ["Interviews", "User stories", "Acceptance criteria", "Documentation"]);
    record85.set("relatedTopics", ["Requirements", "Documentation"]);
    record85.set("difficulty", "Simple");
    record85.set("category", "Technical");
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
    record86.set("careerSlug", "business-analyst");
    record86.set("careerName", "Business Analyst");
    record86.set("level", "Intermediate");
    record86.set("questionNumber", 3);
    record86.set("question", "What are process modeling and analysis techniques?");
    record86.set("explanation", "Use flowcharts, BPMN, swimlane diagrams to model processes. Analyze for inefficiencies, bottlenecks, and improvement opportunities.");
    record86.set("practicalExample", "Create BPMN diagram of order process, identify bottlenecks, recommend automation, measure improvement.");
    record86.set("keyPoints", ["Process modeling", "BPMN", "Flowcharts", "Analysis"]);
    record86.set("relatedTopics", ["Process Improvement", "Analysis"]);
    record86.set("difficulty", "Medium");
    record86.set("category", "Technical");
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
    record87.set("careerSlug", "business-analyst");
    record87.set("careerName", "Business Analyst");
    record87.set("level", "Intermediate");
    record87.set("questionNumber", 4);
    record87.set("question", "How do you prioritize requirements?");
    record87.set("explanation", "Use MoSCoW method (Must, Should, Could, Won't), value vs effort matrix, or business impact analysis. Align with business goals and stakeholder input.");
    record87.set("practicalExample", "Must: core features. Should: important features. Could: nice-to-have. Won't: out of scope.");
    record87.set("keyPoints", ["MoSCoW", "Prioritization", "Business value", "Stakeholder alignment"]);
    record87.set("relatedTopics", ["Requirements", "Project Management"]);
    record87.set("difficulty", "Medium");
    record87.set("category", "Technical");
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
    record88.set("careerSlug", "business-analyst");
    record88.set("careerName", "Business Analyst");
    record88.set("level", "Advanced");
    record88.set("questionNumber", 5);
    record88.set("question", "Explain data analysis and business intelligence.");
    record88.set("explanation", "Analyze data to identify trends, patterns, and insights. Use BI tools to create dashboards and reports. Support data-driven decision making.");
    record88.set("practicalExample", "Analyze sales data, create dashboard showing trends, identify top products, recommend marketing focus.");
    record88.set("keyPoints", ["Data analysis", "BI tools", "Dashboards", "Insights"]);
    record88.set("relatedTopics", ["Data Analysis", "Business Intelligence"]);
    record88.set("difficulty", "Hard");
    record88.set("category", "Technical");
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
    record89.set("careerSlug", "business-analyst");
    record89.set("careerName", "Business Analyst");
    record89.set("level", "Advanced");
    record89.set("questionNumber", 6);
    record89.set("question", "How do you manage stakeholder expectations and communication?");
    record89.set("explanation", "Maintain regular communication, manage scope creep, document decisions, address concerns, and ensure alignment. Use clear documentation and presentations.");
    record89.set("practicalExample", "Weekly status meetings, document change requests, present findings to stakeholders, manage expectations.");
    record89.set("keyPoints", ["Communication", "Stakeholder management", "Scope management", "Documentation"]);
    record89.set("relatedTopics", ["Communication", "Project Management"]);
    record89.set("difficulty", "Hard");
    record89.set("category", "Technical");
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
    record90.set("careerSlug", "project-manager");
    record90.set("careerName", "Project Manager");
    record90.set("level", "Beginner");
    record90.set("questionNumber", 1);
    record90.set("question", "What are the main project management methodologies?");
    record90.set("explanation", "Waterfall follows sequential phases, Agile uses iterative sprints, Scrum is Agile framework with sprints and ceremonies, Kanban focuses on continuous flow.");
    record90.set("practicalExample", "Waterfall: design, develop, test, deploy. Agile: 2-week sprints with daily standups. Kanban: continuous delivery.");
    record90.set("keyPoints", ["Waterfall", "Agile", "Scrum", "Kanban"]);
    record90.set("relatedTopics", ["Project Management", "Methodologies"]);
    record90.set("difficulty", "Simple");
    record90.set("category", "Technical");
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
    record91.set("careerSlug", "project-manager");
    record91.set("careerName", "Project Manager");
    record91.set("level", "Beginner");
    record91.set("questionNumber", 2);
    record91.set("question", "Explain project scope, schedule, and budget management.");
    record91.set("explanation", "Define scope clearly, create realistic schedules, estimate budgets, track progress, and manage changes. Use tools like Gantt charts and earned value analysis.");
    record91.set("practicalExample", "Define deliverables, create timeline, estimate costs, track progress, manage scope changes.");
    record91.set("keyPoints", ["Scope definition", "Scheduling", "Budgeting", "Change management"]);
    record91.set("relatedTopics", ["Project Management", "Planning"]);
    record91.set("difficulty", "Simple");
    record91.set("category", "Technical");
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
    record92.set("careerSlug", "project-manager");
    record92.set("careerName", "Project Manager");
    record92.set("level", "Intermediate");
    record92.set("questionNumber", 3);
    record92.set("question", "How do you identify and manage project risks?");
    record92.set("explanation", "Identify risks early, assess probability and impact, develop mitigation strategies, monitor risks, and adjust plans. Use risk register and risk matrix.");
    record92.set("practicalExample", "Identify resource shortage risk, assess impact, plan mitigation (hire contractors), monitor progress.");
    record92.set("keyPoints", ["Risk identification", "Risk assessment", "Mitigation", "Monitoring"]);
    record92.set("relatedTopics", ["Risk Management", "Planning"]);
    record92.set("difficulty", "Medium");
    record92.set("category", "Technical");
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
    record93.set("careerSlug", "project-manager");
    record93.set("careerName", "Project Manager");
    record93.set("level", "Intermediate");
    record93.set("questionNumber", 4);
    record93.set("question", "What is stakeholder management and communication planning?");
    record93.set("explanation", "Identify stakeholders, understand interests, plan communication, manage expectations, and address concerns. Create communication plan with frequency and channels.");
    record93.set("practicalExample", "Identify stakeholders, create communication matrix, send weekly status reports, hold monthly reviews.");
    record93.set("keyPoints", ["Stakeholder analysis", "Communication plan", "Engagement", "Expectation management"]);
    record93.set("relatedTopics", ["Stakeholder Management", "Communication"]);
    record93.set("difficulty", "Medium");
    record93.set("category", "Technical");
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
    record94.set("careerSlug", "project-manager");
    record94.set("careerName", "Project Manager");
    record94.set("level", "Advanced");
    record94.set("questionNumber", 5);
    record94.set("question", "How do you manage team performance and resolve conflicts?");
    record94.set("explanation", "Set clear expectations, provide feedback, recognize achievements, address conflicts promptly, and foster collaboration. Use performance metrics and one-on-ones.");
    record94.set("practicalExample", "Set sprint goals, track velocity, provide feedback, address conflicts in team meetings, celebrate wins.");
    record94.set("keyPoints", ["Performance management", "Conflict resolution", "Team motivation", "Feedback"]);
    record94.set("relatedTopics", ["Team Management", "Leadership"]);
    record94.set("difficulty", "Hard");
    record94.set("category", "Technical");
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
    record95.set("careerSlug", "project-manager");
    record95.set("careerName", "Project Manager");
    record95.set("level", "Advanced");
    record95.set("questionNumber", 6);
    record95.set("question", "How do you ensure project quality and lessons learned?");
    record95.set("explanation", "Define quality standards, implement QA processes, conduct reviews, document lessons learned, and apply improvements to future projects.");
    record95.set("practicalExample", "Define acceptance criteria, conduct code reviews, hold retrospectives, document lessons, improve processes.");
    record95.set("keyPoints", ["Quality standards", "QA processes", "Retrospectives", "Continuous improvement"]);
    record95.set("relatedTopics", ["Quality Management", "Continuous Improvement"]);
    record95.set("difficulty", "Hard");
    record95.set("category", "Technical");
  try {
    app.save(record95);
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
