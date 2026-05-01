/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerProjects");

  const record0 = new Record(collection);
    record0.set("careerSlug", "frontend-developer");
    record0.set("projectTitle", "Todo Application");
    record0.set("description", "Build a fully functional todo app with add, edit, delete, and filter functionality. Store data in localStorage and implement a clean UI.");
    record0.set("difficulty", "Beginner");
    record0.set("estimatedTime", "2 weeks");
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
    record1.set("careerSlug", "frontend-developer");
    record1.set("projectTitle", "Weather Application");
    record1.set("description", "Create a weather app that fetches data from a weather API, displays current conditions and forecasts, with location search and temperature unit toggle.");
    record1.set("difficulty", "Beginner");
    record1.set("estimatedTime", "2.5 weeks");
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
    record2.set("careerSlug", "frontend-developer");
    record2.set("projectTitle", "E-Commerce Product Page");
    record2.set("description", "Build a product page with image gallery, product details, reviews, and shopping cart functionality. Implement filtering and sorting.");
    record2.set("difficulty", "Intermediate");
    record2.set("estimatedTime", "4 weeks");
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
    record3.set("careerSlug", "frontend-developer");
    record3.set("projectTitle", "Social Media Feed");
    record3.set("description", "Create a social media feed with posts, comments, likes, and user profiles. Implement infinite scroll and real-time updates.");
    record3.set("difficulty", "Intermediate");
    record3.set("estimatedTime", "4.5 weeks");
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
    record4.set("careerSlug", "frontend-developer");
    record4.set("projectTitle", "Real-Time Chat Application");
    record4.set("description", "Build a chat application with real-time messaging, user authentication, typing indicators, and message history.");
    record4.set("difficulty", "Advanced");
    record4.set("estimatedTime", "5 weeks");
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
    record5.set("careerSlug", "frontend-developer");
    record5.set("projectTitle", "Responsive Dashboard");
    record5.set("description", "Create a responsive admin dashboard with charts, tables, filters, and dark mode. Implement data visualization and responsive design.");
    record5.set("difficulty", "Advanced");
    record5.set("estimatedTime", "5.5 weeks");
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
    record6.set("projectTitle", "RESTful Blog API");
    record6.set("description", "Build a complete blog API with CRUD operations for posts and comments. Implement authentication, pagination, and filtering.");
    record6.set("difficulty", "Beginner");
    record6.set("estimatedTime", "3 weeks");
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
    record7.set("projectTitle", "User Authentication System");
    record7.set("description", "Create a user authentication system with registration, login, password reset, and email verification. Implement JWT tokens and refresh tokens.");
    record7.set("difficulty", "Beginner");
    record7.set("estimatedTime", "3 weeks");
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
    record8.set("projectTitle", "E-Commerce API");
    record8.set("description", "Build a complete e-commerce API with products, orders, payments, and inventory management. Implement role-based access control.");
    record8.set("difficulty", "Intermediate");
    record8.set("estimatedTime", "5 weeks");
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
    record9.set("projectTitle", "Real-Time Notification System");
    record9.set("description", "Create a notification system with WebSockets for real-time updates. Implement notification preferences and delivery channels.");
    record9.set("difficulty", "Intermediate");
    record9.set("estimatedTime", "4 weeks");
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
    record10.set("projectTitle", "Microservices Architecture");
    record10.set("description", "Design and implement a microservices system with multiple services, API gateway, service discovery, and inter-service communication.");
    record10.set("difficulty", "Advanced");
    record10.set("estimatedTime", "6 weeks");
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
    record11.set("projectTitle", "Analytics & Reporting Engine");
    record11.set("description", "Build an analytics engine that processes large datasets, generates reports, and provides real-time dashboards with aggregated data.");
    record11.set("difficulty", "Advanced");
    record11.set("estimatedTime", "6 weeks");
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
    record12.set("projectTitle", "Personal Portfolio Website");
    record12.set("description", "Build a responsive portfolio website showcasing projects, skills, and contact information. Include smooth scrolling and animations.");
    record12.set("difficulty", "Beginner");
    record12.set("estimatedTime", "2.5 weeks");
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
    record13.set("projectTitle", "Task Management Application");
    record13.set("description", "Create a full-stack task management app with user authentication, task CRUD operations, categories, and due dates. Include a backend API.");
    record13.set("difficulty", "Intermediate");
    record13.set("estimatedTime", "4 weeks");
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
    record14.set("projectTitle", "Blog Platform");
    record14.set("description", "Build a complete blogging platform with user authentication, post creation/editing, comments, and search functionality.");
    record14.set("difficulty", "Intermediate");
    record14.set("estimatedTime", "5 weeks");
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
    record15.set("projectTitle", "Social Network");
    record15.set("description", "Create a social network with user profiles, friend connections, posts, comments, likes, and real-time notifications.");
    record15.set("difficulty", "Advanced");
    record15.set("estimatedTime", "6 weeks");
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
    record16.set("projectTitle", "E-Commerce Platform");
    record16.set("description", "Build a complete e-commerce platform with product catalog, shopping cart, checkout, payment processing, and order management.");
    record16.set("difficulty", "Advanced");
    record16.set("estimatedTime", "7 weeks");
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
    record17.set("projectTitle", "Real-Time Collaboration Tool");
    record17.set("description", "Create a collaborative document editor with real-time synchronization, user presence, comments, and version history.");
    record17.set("difficulty", "Advanced");
    record17.set("estimatedTime", "7 weeks");
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
    record18.set("careerSlug", "devops-engineer");
    record18.set("projectTitle", "Docker Containerization");
    record18.set("description", "Containerize a multi-tier application using Docker. Create Dockerfiles, optimize images, and set up Docker Compose for local development.");
    record18.set("difficulty", "Beginner");
    record18.set("estimatedTime", "2.5 weeks");
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
    record19.set("careerSlug", "devops-engineer");
    record19.set("projectTitle", "CI/CD Pipeline Setup");
    record19.set("description", "Set up a complete CI/CD pipeline using GitHub Actions or GitLab CI. Implement automated testing, building, and deployment.");
    record19.set("difficulty", "Beginner");
    record19.set("estimatedTime", "3 weeks");
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
    record20.set("careerSlug", "devops-engineer");
    record20.set("projectTitle", "Kubernetes Deployment");
    record20.set("description", "Deploy a multi-container application to Kubernetes. Create deployments, services, and configure networking and storage.");
    record20.set("difficulty", "Intermediate");
    record20.set("estimatedTime", "4 weeks");
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
    record21.set("careerSlug", "devops-engineer");
    record21.set("projectTitle", "Infrastructure as Code");
    record21.set("description", "Use Terraform to provision cloud infrastructure. Create reusable modules and manage infrastructure through code.");
    record21.set("difficulty", "Intermediate");
    record21.set("estimatedTime", "4 weeks");
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
    record22.set("careerSlug", "devops-engineer");
    record22.set("projectTitle", "Monitoring & Logging System");
    record22.set("description", "Set up comprehensive monitoring and logging using Prometheus, Grafana, and ELK stack. Create dashboards and alerts.");
    record22.set("difficulty", "Advanced");
    record22.set("estimatedTime", "5 weeks");
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
    record23.set("careerSlug", "devops-engineer");
    record23.set("projectTitle", "High-Availability Cluster");
    record23.set("description", "Design and implement a highly available Kubernetes cluster with load balancing, auto-scaling, and disaster recovery.");
    record23.set("difficulty", "Advanced");
    record23.set("estimatedTime", "6 weeks");
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
    record24.set("careerSlug", "data-scientist");
    record24.set("projectTitle", "Exploratory Data Analysis");
    record24.set("description", "Perform comprehensive EDA on a public dataset. Create visualizations, identify patterns, and generate insights.");
    record24.set("difficulty", "Beginner");
    record24.set("estimatedTime", "2 weeks");
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
    record25.set("careerSlug", "data-scientist");
    record25.set("projectTitle", "Predictive Modeling");
    record25.set("description", "Build a machine learning model to predict house prices or customer churn. Implement feature engineering and model evaluation.");
    record25.set("difficulty", "Beginner");
    record25.set("estimatedTime", "3 weeks");
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
    record26.set("careerSlug", "data-scientist");
    record26.set("projectTitle", "Classification Model");
    record26.set("description", "Create a classification model for image recognition or text classification. Implement multiple algorithms and compare performance.");
    record26.set("difficulty", "Intermediate");
    record26.set("estimatedTime", "4 weeks");
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
    record27.set("careerSlug", "data-scientist");
    record27.set("projectTitle", "Time Series Forecasting");
    record27.set("description", "Build a time series model to forecast stock prices or weather patterns. Implement ARIMA and neural network approaches.");
    record27.set("difficulty", "Intermediate");
    record27.set("estimatedTime", "4.5 weeks");
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
    record28.set("careerSlug", "data-scientist");
    record28.set("projectTitle", "Deep Learning Model");
    record28.set("description", "Create a deep learning model for image classification or NLP tasks. Implement CNNs or RNNs and optimize performance.");
    record28.set("difficulty", "Advanced");
    record28.set("estimatedTime", "5.5 weeks");
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
    record29.set("careerSlug", "data-scientist");
    record29.set("projectTitle", "End-to-End ML Pipeline");
    record29.set("description", "Build a complete machine learning pipeline from data collection to model deployment. Implement MLOps best practices.");
    record29.set("difficulty", "Advanced");
    record29.set("estimatedTime", "6 weeks");
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
