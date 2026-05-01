/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerRoadmaps");

  const record0 = new Record(collection);
    record0.set("careerSlug", "frontend-developer");
    record0.set("phase", 1);
    record0.set("phaseTitle", "HTML, CSS & JavaScript Fundamentals");
    record0.set("duration", "3-4 months");
    record0.set("skills", ["HTML5", "CSS3", "JavaScript ES6+", "DOM Manipulation", "Responsive Design", "Git & GitHub"]);
    record0.set("resources", [{"name": "MDN Web Docs", "type": "documentation", "url": "https://developer.mozilla.org", "cost": "free"}, {"name": "freeCodeCamp HTML/CSS Course", "type": "video", "url": "https://freecodecamp.org", "cost": "free"}, {"name": "JavaScript.info", "type": "interactive", "url": "https://javascript.info", "cost": "free"}]);
    record0.set("projects", [{"title": "Personal Portfolio Website", "description": "Build a responsive portfolio showcasing projects", "difficulty": "Beginner"}, {"title": "Todo App", "description": "Interactive todo list with add/delete functionality", "difficulty": "Beginner"}]);
    record0.set("milestones", ["Complete HTML/CSS basics", "Master JavaScript fundamentals", "Build first responsive website", "Deploy to GitHub Pages"]);
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
    record1.set("phase", 2);
    record1.set("phaseTitle", "React & Modern Frontend Frameworks");
    record1.set("duration", "3-4 months");
    record1.set("skills", ["React.js", "JSX", "Component Architecture", "State Management (Redux/Context)", "React Hooks", "API Integration"]);
    record1.set("resources", [{"name": "React Official Documentation", "type": "documentation", "url": "https://react.dev", "cost": "free"}, {"name": "Scrimba React Course", "type": "video", "url": "https://scrimba.com", "cost": "paid"}, {"name": "React Query Documentation", "type": "documentation", "url": "https://tanstack.com/query", "cost": "free"}]);
    record1.set("projects", [{"title": "E-commerce Product Listing", "description": "React app with filtering and sorting", "difficulty": "Intermediate"}, {"title": "Weather App", "description": "Fetch and display weather data from API", "difficulty": "Intermediate"}]);
    record1.set("milestones", ["Learn React fundamentals", "Master component lifecycle", "Implement state management", "Build API-connected app"]);
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
    record2.set("phase", 3);
    record2.set("phaseTitle", "Advanced Styling & Build Tools");
    record2.set("duration", "2-3 months");
    record2.set("skills", ["Tailwind CSS", "Webpack/Vite", "TypeScript", "Testing (Jest/React Testing Library)", "Performance Optimization", "Accessibility (a11y)"]);
    record2.set("resources", [{"name": "Tailwind CSS Documentation", "type": "documentation", "url": "https://tailwindcss.com", "cost": "free"}, {"name": "TypeScript Handbook", "type": "documentation", "url": "https://typescriptlang.org", "cost": "free"}, {"name": "Testing Library Docs", "type": "documentation", "url": "https://testing-library.com", "cost": "free"}]);
    record2.set("projects", [{"title": "Styled Component Library", "description": "Build reusable UI components with Tailwind", "difficulty": "Intermediate"}, {"title": "Tested React Application", "description": "App with comprehensive unit and integration tests", "difficulty": "Advanced"}]);
    record2.set("milestones", ["Master CSS-in-JS solutions", "Learn TypeScript", "Write testable code", "Optimize bundle size"]);
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
    record3.set("phase", 4);
    record3.set("phaseTitle", "Full-Stack Integration & Production");
    record3.set("duration", "3-4 months");
    record3.set("skills", ["Next.js/Nuxt", "Server-Side Rendering", "SEO Optimization", "CI/CD Pipelines", "Docker Basics", "Monitoring & Analytics"]);
    record3.set("resources", [{"name": "Next.js Documentation", "type": "documentation", "url": "https://nextjs.org", "cost": "free"}, {"name": "Vercel Deployment Guide", "type": "documentation", "url": "https://vercel.com", "cost": "free"}, {"name": "Web Vitals Guide", "type": "documentation", "url": "https://web.dev", "cost": "free"}]);
    record3.set("projects", [{"title": "Full-Stack Blog Platform", "description": "Next.js app with database integration", "difficulty": "Advanced"}, {"title": "Production-Ready SaaS Feature", "description": "Deployed feature with monitoring", "difficulty": "Advanced"}]);
    record3.set("milestones", ["Deploy to production", "Implement SSR/SSG", "Set up CI/CD", "Monitor application performance"]);
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
    record4.set("careerSlug", "backend-developer");
    record4.set("phase", 1);
    record4.set("phaseTitle", "Programming Fundamentals & Databases");
    record4.set("duration", "3-4 months");
    record4.set("skills", ["Python/Node.js/Java basics", "Data Structures", "Algorithms", "SQL", "Database Design", "Git"]);
    record4.set("resources", [{"name": "Python for Everybody", "type": "video", "url": "https://py4e.com", "cost": "free"}, {"name": "SQL Tutorial", "type": "interactive", "url": "https://sqlzoo.net", "cost": "free"}, {"name": "LeetCode", "type": "practice", "url": "https://leetcode.com", "cost": "freemium"}]);
    record4.set("projects", [{"title": "Database Design Project", "description": "Design and implement relational database", "difficulty": "Beginner"}, {"title": "Algorithm Practice", "description": "Solve 50+ coding problems", "difficulty": "Beginner"}]);
    record4.set("milestones", ["Master programming language", "Understand data structures", "Write SQL queries", "Solve algorithmic problems"]);
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
    record5.set("careerSlug", "backend-developer");
    record5.set("phase", 2);
    record5.set("phaseTitle", "Web Frameworks & REST APIs");
    record5.set("duration", "3-4 months");
    record5.set("skills", ["Express.js/Django/Spring", "RESTful API Design", "Authentication & Authorization", "Middleware", "Error Handling", "API Documentation"]);
    record5.set("resources", [{"name": "Express.js Guide", "type": "documentation", "url": "https://expressjs.com", "cost": "free"}, {"name": "REST API Best Practices", "type": "course", "url": "https://restfulapi.net", "cost": "free"}, {"name": "Postman API Testing", "type": "tool", "url": "https://postman.com", "cost": "freemium"}]);
    record5.set("projects", [{"title": "User Management API", "description": "CRUD API with authentication", "difficulty": "Intermediate"}, {"title": "Blog API", "description": "Full-featured API with comments and likes", "difficulty": "Intermediate"}]);
    record5.set("milestones", ["Build REST API", "Implement JWT authentication", "Write API documentation", "Handle errors gracefully"]);
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
    record6.set("phase", 3);
    record6.set("phaseTitle", "Advanced Patterns & Scalability");
    record6.set("duration", "3-4 months");
    record6.set("skills", ["Caching (Redis)", "Message Queues (RabbitMQ/Kafka)", "Microservices", "Testing (Unit/Integration)", "Logging & Monitoring", "Database Optimization"]);
    record6.set("resources", [{"name": "Redis Documentation", "type": "documentation", "url": "https://redis.io", "cost": "free"}, {"name": "Microservices Patterns", "type": "book", "url": "https://microservices.io", "cost": "paid"}, {"name": "Jest Testing Framework", "type": "documentation", "url": "https://jestjs.io", "cost": "free"}]);
    record6.set("projects", [{"title": "Cached API Service", "description": "Implement Redis caching layer", "difficulty": "Advanced"}, {"title": "Message Queue System", "description": "Async job processing with queues", "difficulty": "Advanced"}]);
    record6.set("milestones", ["Implement caching strategy", "Set up message queues", "Write comprehensive tests", "Optimize database queries"]);
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
    record7.set("phase", 4);
    record7.set("phaseTitle", "DevOps & Production Deployment");
    record7.set("duration", "3-4 months");
    record7.set("skills", ["Docker & Containerization", "Kubernetes basics", "CI/CD Pipelines", "Cloud Platforms (AWS/GCP)", "Infrastructure as Code", "Security Best Practices"]);
    record7.set("resources", [{"name": "Docker Documentation", "type": "documentation", "url": "https://docker.com", "cost": "free"}, {"name": "AWS for Developers", "type": "course", "url": "https://aws.amazon.com", "cost": "freemium"}, {"name": "GitHub Actions Guide", "type": "documentation", "url": "https://github.com/features/actions", "cost": "free"}]);
    record7.set("projects", [{"title": "Dockerized Application", "description": "Containerize backend application", "difficulty": "Advanced"}, {"title": "CI/CD Pipeline", "description": "Automated testing and deployment", "difficulty": "Advanced"}]);
    record7.set("milestones", ["Containerize application", "Deploy to cloud", "Set up CI/CD", "Monitor production system"]);
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
    record8.set("careerSlug", "data-scientist");
    record8.set("phase", 1);
    record8.set("phaseTitle", "Math, Statistics & Python Fundamentals");
    record8.set("duration", "2-3 months");
    record8.set("skills", ["Linear Algebra", "Probability & Statistics", "Python", "NumPy", "Pandas", "Data Visualization (Matplotlib/Seaborn)"]);
    record8.set("resources", [{"name": "3Blue1Brown Linear Algebra", "type": "video", "url": "https://youtube.com/3blue1brown", "cost": "free"}, {"name": "StatQuest Statistics", "type": "video", "url": "https://youtube.com/statquest", "cost": "free"}, {"name": "Kaggle Learn", "type": "course", "url": "https://kaggle.com/learn", "cost": "free"}]);
    record8.set("projects", [{"title": "Data Exploration Project", "description": "Analyze and visualize dataset", "difficulty": "Beginner"}, {"title": "Statistical Analysis", "description": "Hypothesis testing on real data", "difficulty": "Beginner"}]);
    record8.set("milestones", ["Master Python for data science", "Understand statistics", "Create visualizations", "Explore real datasets"]);
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
    record9.set("careerSlug", "data-scientist");
    record9.set("phase", 2);
    record9.set("phaseTitle", "Machine Learning Fundamentals");
    record9.set("duration", "3-4 months");
    record9.set("skills", ["Supervised Learning", "Unsupervised Learning", "Scikit-learn", "Model Evaluation", "Feature Engineering", "Cross-validation"]);
    record9.set("resources", [{"name": "Scikit-learn Documentation", "type": "documentation", "url": "https://scikit-learn.org", "cost": "free"}, {"name": "Andrew Ng ML Course", "type": "course", "url": "https://coursera.org", "cost": "freemium"}, {"name": "Kaggle Competitions", "type": "practice", "url": "https://kaggle.com", "cost": "free"}]);
    record9.set("projects", [{"title": "Classification Model", "description": "Build and evaluate classification model", "difficulty": "Intermediate"}, {"title": "Clustering Analysis", "description": "Unsupervised learning on customer data", "difficulty": "Intermediate"}]);
    record9.set("milestones", ["Understand ML algorithms", "Build predictive models", "Evaluate model performance", "Handle imbalanced data"]);
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
    record10.set("careerSlug", "data-scientist");
    record10.set("phase", 3);
    record10.set("phaseTitle", "Deep Learning & Advanced Techniques");
    record10.set("duration", "3-4 months");
    record10.set("skills", ["Neural Networks", "TensorFlow/PyTorch", "CNNs", "RNNs", "NLP Basics", "Transfer Learning"]);
    record10.set("resources", [{"name": "Fast.ai Deep Learning", "type": "course", "url": "https://fast.ai", "cost": "free"}, {"name": "TensorFlow Documentation", "type": "documentation", "url": "https://tensorflow.org", "cost": "free"}, {"name": "PyTorch Tutorials", "type": "documentation", "url": "https://pytorch.org", "cost": "free"}]);
    record10.set("projects", [{"title": "Image Classification Model", "description": "CNN for image recognition", "difficulty": "Advanced"}, {"title": "NLP Text Classification", "description": "Sentiment analysis or topic modeling", "difficulty": "Advanced"}]);
    record10.set("milestones", ["Build neural networks", "Train deep learning models", "Work with images and text", "Implement transfer learning"]);
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
    record11.set("careerSlug", "data-scientist");
    record11.set("phase", 4);
    record11.set("phaseTitle", "Production ML & Advanced Applications");
    record11.set("duration", "2-3 months");
    record11.set("skills", ["MLOps", "Model Deployment", "A/B Testing", "Time Series Analysis", "Recommendation Systems", "Ethics in AI"]);
    record11.set("resources", [{"name": "MLflow Documentation", "type": "documentation", "url": "https://mlflow.org", "cost": "free"}, {"name": "Made With ML", "type": "course", "url": "https://madewithml.com", "cost": "free"}, {"name": "Hugging Face Models", "type": "library", "url": "https://huggingface.co", "cost": "free"}]);
    record11.set("projects", [{"title": "End-to-End ML Pipeline", "description": "Complete ML project with deployment", "difficulty": "Advanced"}, {"title": "Recommendation Engine", "description": "Collaborative filtering system", "difficulty": "Advanced"}]);
    record11.set("milestones", ["Deploy ML model", "Monitor model performance", "Implement A/B testing", "Build production pipeline"]);
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
    record12.set("careerSlug", "devops-engineer");
    record12.set("phase", 1);
    record12.set("phaseTitle", "Linux & Networking Fundamentals");
    record12.set("duration", "3-4 months");
    record12.set("skills", ["Linux Administration", "Shell Scripting", "Networking Basics", "TCP/IP", "DNS", "SSH & Security"]);
    record12.set("resources", [{"name": "Linux Academy", "type": "course", "url": "https://linuxacademy.com", "cost": "paid"}, {"name": "Linux Command Line Basics", "type": "documentation", "url": "https://linux.com", "cost": "free"}, {"name": "Bash Scripting Guide", "type": "documentation", "url": "https://gnu.org/software/bash", "cost": "free"}]);
    record12.set("projects", [{"title": "Linux Server Setup", "description": "Configure and secure Linux server", "difficulty": "Beginner"}, {"title": "Bash Automation Scripts", "description": "Write scripts for system administration", "difficulty": "Beginner"}]);
    record12.set("milestones", ["Master Linux commands", "Write shell scripts", "Understand networking", "Secure systems"]);
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
    record13.set("careerSlug", "devops-engineer");
    record13.set("phase", 2);
    record13.set("phaseTitle", "Containerization & Orchestration");
    record13.set("duration", "4-5 months");
    record13.set("skills", ["Docker", "Docker Compose", "Kubernetes", "Container Registry", "Helm", "Service Mesh basics"]);
    record13.set("resources", [{"name": "Docker Official Docs", "type": "documentation", "url": "https://docker.com", "cost": "free"}, {"name": "Kubernetes Documentation", "type": "documentation", "url": "https://kubernetes.io", "cost": "free"}, {"name": "Linux Foundation K8s Course", "type": "course", "url": "https://linuxfoundation.org", "cost": "paid"}]);
    record13.set("projects", [{"title": "Multi-Container Application", "description": "Docker Compose setup with multiple services", "difficulty": "Intermediate"}, {"title": "Kubernetes Deployment", "description": "Deploy application to K8s cluster", "difficulty": "Intermediate"}]);
    record13.set("milestones", ["Master Docker", "Deploy to Kubernetes", "Manage container orchestration", "Scale applications"]);
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
    record14.set("careerSlug", "devops-engineer");
    record14.set("phase", 3);
    record14.set("phaseTitle", "CI/CD & Infrastructure as Code");
    record14.set("duration", "3-4 months");
    record14.set("skills", ["Jenkins/GitLab CI", "GitHub Actions", "Terraform", "Ansible", "Infrastructure as Code", "Pipeline Design"]);
    record14.set("resources", [{"name": "Terraform Documentation", "type": "documentation", "url": "https://terraform.io", "cost": "free"}, {"name": "Ansible Documentation", "type": "documentation", "url": "https://ansible.com", "cost": "free"}, {"name": "GitHub Actions Guide", "type": "documentation", "url": "https://github.com/features/actions", "cost": "free"}]);
    record14.set("projects", [{"title": "Infrastructure as Code", "description": "Provision cloud infrastructure with Terraform", "difficulty": "Advanced"}, {"title": "CI/CD Pipeline", "description": "Automated testing and deployment pipeline", "difficulty": "Advanced"}]);
    record14.set("milestones", ["Write IaC", "Build CI/CD pipelines", "Automate deployments", "Version infrastructure"]);
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
    record15.set("careerSlug", "devops-engineer");
    record15.set("phase", 4);
    record15.set("phaseTitle", "Cloud Platforms & Monitoring");
    record15.set("duration", "4-5 months");
    record15.set("skills", ["AWS/GCP/Azure", "Cloud Architecture", "Monitoring (Prometheus/Grafana)", "Logging (ELK Stack)", "Security & Compliance", "Disaster Recovery"]);
    record15.set("resources", [{"name": "AWS Certified Solutions Architect", "type": "course", "url": "https://aws.amazon.com", "cost": "paid"}, {"name": "Prometheus Documentation", "type": "documentation", "url": "https://prometheus.io", "cost": "free"}, {"name": "ELK Stack Guide", "type": "documentation", "url": "https://elastic.co", "cost": "freemium"}]);
    record15.set("projects", [{"title": "Cloud Infrastructure", "description": "Design and deploy on AWS/GCP", "difficulty": "Advanced"}, {"title": "Monitoring System", "description": "Set up comprehensive monitoring and alerting", "difficulty": "Advanced"}]);
    record15.set("milestones", ["Deploy to cloud", "Set up monitoring", "Implement logging", "Plan disaster recovery"]);
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
    record16.set("phase", 1);
    record16.set("phaseTitle", "Frontend Fundamentals");
    record16.set("duration", "3-4 months");
    record16.set("skills", ["HTML5", "CSS3", "JavaScript ES6+", "Responsive Design", "DOM", "Git"]);
    record16.set("resources", [{"name": "MDN Web Docs", "type": "documentation", "url": "https://developer.mozilla.org", "cost": "free"}, {"name": "freeCodeCamp", "type": "video", "url": "https://freecodecamp.org", "cost": "free"}, {"name": "CSS Tricks", "type": "blog", "url": "https://css-tricks.com", "cost": "free"}]);
    record16.set("projects", [{"title": "Responsive Website", "description": "Multi-page responsive site", "difficulty": "Beginner"}, {"title": "Interactive UI", "description": "Dynamic page with JavaScript", "difficulty": "Beginner"}]);
    record16.set("milestones", ["Master HTML/CSS", "Learn JavaScript", "Build responsive sites", "Use version control"]);
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
    record17.set("phase", 2);
    record17.set("phaseTitle", "Backend & Database Basics");
    record17.set("duration", "3-4 months");
    record17.set("skills", ["Node.js/Python/Java", "Express/Django/Spring", "SQL", "Database Design", "REST APIs", "Authentication"]);
    record17.set("resources", [{"name": "Express.js Guide", "type": "documentation", "url": "https://expressjs.com", "cost": "free"}, {"name": "SQL Tutorial", "type": "interactive", "url": "https://sqlzoo.net", "cost": "free"}, {"name": "REST API Design", "type": "guide", "url": "https://restfulapi.net", "cost": "free"}]);
    record17.set("projects", [{"title": "Backend API", "description": "RESTful API with database", "difficulty": "Intermediate"}, {"title": "User Authentication", "description": "Login system with JWT", "difficulty": "Intermediate"}]);
    record17.set("milestones", ["Build backend server", "Design database", "Create REST API", "Implement authentication"]);
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
    record18.set("phase", 3);
    record18.set("phaseTitle", "Frontend Frameworks & Integration");
    record18.set("duration", "3-4 months");
    record18.set("skills", ["React/Vue/Angular", "State Management", "Component Architecture", "API Integration", "Testing", "TypeScript"]);
    record18.set("resources", [{"name": "React Documentation", "type": "documentation", "url": "https://react.dev", "cost": "free"}, {"name": "TypeScript Handbook", "type": "documentation", "url": "https://typescriptlang.org", "cost": "free"}, {"name": "Testing Library", "type": "documentation", "url": "https://testing-library.com", "cost": "free"}]);
    record18.set("projects", [{"title": "Full-Stack Todo App", "description": "React frontend with Node backend", "difficulty": "Intermediate"}, {"title": "E-commerce Site", "description": "Product listing and shopping cart", "difficulty": "Advanced"}]);
    record18.set("milestones", ["Master frontend framework", "Connect frontend to backend", "Implement state management", "Write tests"]);
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
    record19.set("phase", 4);
    record19.set("phaseTitle", "Deployment & Advanced Topics");
    record19.set("duration", "3-4 months");
    record19.set("skills", ["Docker", "CI/CD", "Cloud Deployment", "Performance Optimization", "Security", "Monitoring"]);
    record19.set("resources", [{"name": "Docker Documentation", "type": "documentation", "url": "https://docker.com", "cost": "free"}, {"name": "Vercel Deployment", "type": "documentation", "url": "https://vercel.com", "cost": "free"}, {"name": "Web Performance", "type": "guide", "url": "https://web.dev", "cost": "free"}]);
    record19.set("projects", [{"title": "Deployed Application", "description": "Full-stack app deployed to production", "difficulty": "Advanced"}, {"title": "Optimized System", "description": "Performance and security improvements", "difficulty": "Advanced"}]);
    record19.set("milestones", ["Deploy application", "Set up CI/CD", "Optimize performance", "Monitor production"]);
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
    record20.set("careerSlug", "mobile-developer");
    record20.set("phase", 1);
    record20.set("phaseTitle", "Mobile Development Fundamentals");
    record20.set("duration", "2-3 months");
    record20.set("skills", ["Swift/Kotlin basics", "Mobile UI Principles", "Responsive Design", "Touch Interactions", "Mobile Performance", "Git"]);
    record20.set("resources", [{"name": "Swift Official Guide", "type": "documentation", "url": "https://swift.org", "cost": "free"}, {"name": "Kotlin Documentation", "type": "documentation", "url": "https://kotlinlang.org", "cost": "free"}, {"name": "Material Design", "type": "guide", "url": "https://material.io", "cost": "free"}]);
    record20.set("projects", [{"title": "Simple iOS App", "description": "Basic app with UI elements", "difficulty": "Beginner"}, {"title": "Android App", "description": "Basic Android application", "difficulty": "Beginner"}]);
    record20.set("milestones", ["Learn mobile language", "Understand mobile UI", "Build first app", "Deploy to store"]);
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
    record21.set("careerSlug", "mobile-developer");
    record21.set("phase", 2);
    record21.set("phaseTitle", "Native Development & APIs");
    record21.set("duration", "3-4 months");
    record21.set("skills", ["UIKit/Jetpack Compose", "Navigation", "Data Persistence", "API Integration", "Networking", "Permissions"]);
    record21.set("resources", [{"name": "UIKit Documentation", "type": "documentation", "url": "https://developer.apple.com", "cost": "free"}, {"name": "Android Developers", "type": "documentation", "url": "https://developer.android.com", "cost": "free"}, {"name": "Postman API Testing", "type": "tool", "url": "https://postman.com", "cost": "freemium"}]);
    record21.set("projects", [{"title": "Weather App", "description": "Fetch and display API data", "difficulty": "Intermediate"}, {"title": "Note-Taking App", "description": "Local data persistence", "difficulty": "Intermediate"}]);
    record21.set("milestones", ["Build complex UI", "Integrate APIs", "Handle data persistence", "Manage permissions"]);
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
    record22.set("careerSlug", "mobile-developer");
    record22.set("phase", 3);
    record22.set("phaseTitle", "Advanced Features & Cross-Platform");
    record22.set("duration", "3-4 months");
    record22.set("skills", ["React Native/Flutter", "State Management", "Testing", "Performance Optimization", "Analytics", "Push Notifications"]);
    record22.set("resources", [{"name": "React Native Docs", "type": "documentation", "url": "https://reactnative.dev", "cost": "free"}, {"name": "Flutter Documentation", "type": "documentation", "url": "https://flutter.dev", "cost": "free"}, {"name": "Firebase Documentation", "type": "documentation", "url": "https://firebase.google.com", "cost": "freemium"}]);
    record22.set("projects", [{"title": "Cross-Platform App", "description": "React Native or Flutter app", "difficulty": "Advanced"}, {"title": "Real-time Chat", "description": "Firebase-powered messaging app", "difficulty": "Advanced"}]);
    record22.set("milestones", ["Learn cross-platform framework", "Implement real-time features", "Add push notifications", "Optimize performance"]);
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
    record23.set("careerSlug", "mobile-developer");
    record23.set("phase", 4);
    record23.set("phaseTitle", "Production & App Store Deployment");
    record23.set("duration", "2-3 months");
    record23.set("skills", ["App Store Submission", "TestFlight/Beta Testing", "Crash Reporting", "Analytics", "Monetization", "App Security"]);
    record23.set("resources", [{"name": "App Store Connect", "type": "documentation", "url": "https://appstoreconnect.apple.com", "cost": "free"}, {"name": "Google Play Console", "type": "documentation", "url": "https://play.google.com/console", "cost": "free"}, {"name": "Firebase Crashlytics", "type": "tool", "url": "https://firebase.google.com", "cost": "freemium"}]);
    record23.set("projects", [{"title": "Published App", "description": "App submitted to App Store/Play Store", "difficulty": "Advanced"}, {"title": "Monetized App", "description": "App with in-app purchases or ads", "difficulty": "Advanced"}]);
    record23.set("milestones", ["Submit to app stores", "Manage beta testing", "Monitor crashes", "Track analytics"]);
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
    record24.set("careerSlug", "cloud-architect");
    record24.set("phase", 1);
    record24.set("phaseTitle", "Cloud Fundamentals & Core Services");
    record24.set("duration", "3-4 months");
    record24.set("skills", ["Cloud Computing Basics", "AWS/GCP/Azure Fundamentals", "Compute Services", "Storage Services", "Networking", "Cost Management"]);
    record24.set("resources", [{"name": "AWS Fundamentals", "type": "course", "url": "https://aws.amazon.com", "cost": "freemium"}, {"name": "Google Cloud Basics", "type": "course", "url": "https://cloud.google.com", "cost": "freemium"}, {"name": "Azure Fundamentals", "type": "course", "url": "https://azure.microsoft.com", "cost": "freemium"}]);
    record24.set("projects", [{"title": "Cloud Account Setup", "description": "Configure cloud account and services", "difficulty": "Beginner"}, {"title": "Simple Web Server", "description": "Deploy web server on cloud", "difficulty": "Beginner"}]);
    record24.set("milestones", ["Understand cloud concepts", "Set up cloud account", "Deploy basic resources", "Manage costs"]);
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
    record25.set("careerSlug", "cloud-architect");
    record25.set("phase", 2);
    record25.set("phaseTitle", "Advanced Services & Architecture");
    record25.set("duration", "4-5 months");
    record25.set("skills", ["Databases (RDS, Firestore)", "Messaging Services", "Load Balancing", "Auto Scaling", "CDN", "Security Groups"]);
    record25.set("resources", [{"name": "AWS Solutions Architect", "type": "course", "url": "https://aws.amazon.com", "cost": "paid"}, {"name": "Cloud Architecture Patterns", "type": "book", "url": "https://cloudarchitecturepatterns.org", "cost": "paid"}, {"name": "Well-Architected Framework", "type": "guide", "url": "https://aws.amazon.com", "cost": "free"}]);
    record25.set("projects", [{"title": "Scalable Architecture", "description": "Design auto-scaling system", "difficulty": "Intermediate"}, {"title": "Database Design", "description": "Multi-region database setup", "difficulty": "Intermediate"}]);
    record25.set("milestones", ["Design scalable systems", "Implement databases", "Set up load balancing", "Plan disaster recovery"]);
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
    record26.set("careerSlug", "cloud-architect");
    record26.set("phase", 3);
    record26.set("phaseTitle", "Security, Compliance & Optimization");
    record26.set("duration", "3-4 months");
    record26.set("skills", ["IAM & Access Control", "Encryption", "Compliance (HIPAA, GDPR)", "Cost Optimization", "Monitoring", "Disaster Recovery"]);
    record26.set("resources", [{"name": "AWS Security Best Practices", "type": "guide", "url": "https://aws.amazon.com", "cost": "free"}, {"name": "Cloud Security Alliance", "type": "documentation", "url": "https://cloudsecurityalliance.org", "cost": "free"}, {"name": "Compliance Frameworks", "type": "guide", "url": "https://nist.gov", "cost": "free"}]);
    record26.set("projects", [{"title": "Secure Architecture", "description": "Implement security best practices", "difficulty": "Advanced"}, {"title": "Compliance Setup", "description": "Configure for GDPR/HIPAA", "difficulty": "Advanced"}]);
    record26.set("milestones", ["Implement security", "Ensure compliance", "Optimize costs", "Plan backup strategy"]);
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
    record27.set("careerSlug", "cloud-architect");
    record27.set("phase", 4);
    record27.set("phaseTitle", "Enterprise Architecture & Strategy");
    record27.set("duration", "3-4 months");
    record27.set("skills", ["Multi-Cloud Strategy", "Migration Planning", "Hybrid Cloud", "Governance", "Cost Forecasting", "Strategic Planning"]);
    record27.set("resources", [{"name": "Enterprise Architecture", "type": "course", "url": "https://togaf.org", "cost": "paid"}, {"name": "Cloud Migration Guide", "type": "guide", "url": "https://aws.amazon.com", "cost": "free"}, {"name": "FinOps Framework", "type": "guide", "url": "https://finops.org", "cost": "free"}]);
    record27.set("projects", [{"title": "Migration Plan", "description": "Plan on-premises to cloud migration", "difficulty": "Advanced"}, {"title": "Enterprise Architecture", "description": "Design enterprise cloud strategy", "difficulty": "Advanced"}]);
    record27.set("milestones", ["Plan migrations", "Design enterprise systems", "Implement governance", "Forecast costs"]);
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
    record28.set("careerSlug", "machine-learning-engineer");
    record28.set("phase", 1);
    record28.set("phaseTitle", "Math & Python Foundations");
    record28.set("duration", "2-3 months");
    record28.set("skills", ["Linear Algebra", "Calculus", "Probability", "Python", "NumPy", "Pandas"]);
    record28.set("resources", [{"name": "3Blue1Brown Math", "type": "video", "url": "https://youtube.com/3blue1brown", "cost": "free"}, {"name": "Python for Data Science", "type": "course", "url": "https://kaggle.com/learn", "cost": "free"}, {"name": "NumPy Tutorial", "type": "documentation", "url": "https://numpy.org", "cost": "free"}]);
    record28.set("projects", [{"title": "Math Problem Solving", "description": "Solve linear algebra problems", "difficulty": "Beginner"}, {"title": "Data Manipulation", "description": "Clean and transform datasets", "difficulty": "Beginner"}]);
    record28.set("milestones", ["Master mathematics", "Learn Python", "Manipulate data", "Visualize data"]);
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
    record29.set("careerSlug", "machine-learning-engineer");
    record29.set("phase", 2);
    record29.set("phaseTitle", "Classical ML & Feature Engineering");
    record29.set("duration", "3-4 months");
    record29.set("skills", ["Scikit-learn", "Feature Engineering", "Model Selection", "Hyperparameter Tuning", "Cross-validation", "Evaluation Metrics"]);
    record29.set("resources", [{"name": "Scikit-learn Guide", "type": "documentation", "url": "https://scikit-learn.org", "cost": "free"}, {"name": "Feature Engineering", "type": "course", "url": "https://kaggle.com/learn", "cost": "free"}, {"name": "ML Mastery", "type": "blog", "url": "https://machinelearningmastery.com", "cost": "freemium"}]);
    record29.set("projects", [{"title": "Predictive Model", "description": "Build and tune ML model", "difficulty": "Intermediate"}, {"title": "Feature Engineering", "description": "Create features for prediction", "difficulty": "Intermediate"}]);
    record29.set("milestones", ["Build ML models", "Engineer features", "Tune hyperparameters", "Evaluate performance"]);
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
    record30.set("careerSlug", "machine-learning-engineer");
    record30.set("phase", 3);
    record30.set("phaseTitle", "Deep Learning & Production");
    record30.set("duration", "4-5 months");
    record30.set("skills", ["TensorFlow/PyTorch", "Neural Networks", "CNNs", "RNNs", "Model Deployment", "MLOps"]);
    record30.set("resources", [{"name": "TensorFlow Tutorials", "type": "documentation", "url": "https://tensorflow.org", "cost": "free"}, {"name": "PyTorch Documentation", "type": "documentation", "url": "https://pytorch.org", "cost": "free"}, {"name": "MLflow Guide", "type": "documentation", "url": "https://mlflow.org", "cost": "free"}]);
    record30.set("projects", [{"title": "Deep Learning Model", "description": "CNN or RNN for complex task", "difficulty": "Advanced"}, {"title": "Model Deployment", "description": "Deploy model to production", "difficulty": "Advanced"}]);
    record30.set("milestones", ["Build deep learning models", "Deploy models", "Monitor performance", "Implement MLOps"]);
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
    record31.set("careerSlug", "machine-learning-engineer");
    record31.set("phase", 4);
    record31.set("phaseTitle", "Advanced ML & Research");
    record31.set("duration", "3-4 months");
    record31.set("skills", ["Transformers", "Reinforcement Learning", "AutoML", "Distributed Training", "Research Papers", "Advanced Optimization"]);
    record31.set("resources", [{"name": "Hugging Face Transformers", "type": "documentation", "url": "https://huggingface.co", "cost": "free"}, {"name": "Reinforcement Learning", "type": "course", "url": "https://spinningup.openai.com", "cost": "free"}, {"name": "ArXiv Papers", "type": "research", "url": "https://arxiv.org", "cost": "free"}]);
    record31.set("projects", [{"title": "Transformer Model", "description": "Fine-tune or build transformer", "difficulty": "Advanced"}, {"title": "Research Implementation", "description": "Implement recent research paper", "difficulty": "Advanced"}]);
    record31.set("milestones", ["Work with transformers", "Implement advanced techniques", "Publish research", "Contribute to open source"]);
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
    record32.set("careerSlug", "cybersecurity-specialist");
    record32.set("phase", 1);
    record32.set("phaseTitle", "Networking & System Security Basics");
    record32.set("duration", "3-4 months");
    record32.set("skills", ["Networking Fundamentals", "TCP/IP", "Firewalls", "Linux Security", "Windows Security", "Encryption Basics"]);
    record32.set("resources", [{"name": "CompTIA Network+", "type": "course", "url": "https://comptia.org", "cost": "paid"}, {"name": "Linux Security", "type": "guide", "url": "https://linux.com", "cost": "free"}, {"name": "NIST Cybersecurity", "type": "guide", "url": "https://nist.gov", "cost": "free"}]);
    record32.set("projects", [{"title": "Network Setup", "description": "Configure secure network", "difficulty": "Beginner"}, {"title": "System Hardening", "description": "Secure Linux/Windows system", "difficulty": "Beginner"}]);
    record32.set("milestones", ["Understand networking", "Secure systems", "Configure firewalls", "Implement encryption"]);
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
    record33.set("careerSlug", "cybersecurity-specialist");
    record33.set("phase", 2);
    record33.set("phaseTitle", "Penetration Testing & Vulnerability Assessment");
    record33.set("duration", "4-5 months");
    record33.set("skills", ["Penetration Testing", "Vulnerability Scanning", "Metasploit", "Burp Suite", "OWASP Top 10", "Ethical Hacking"]);
    record33.set("resources", [{"name": "CEH Certification", "type": "course", "url": "https://eccouncil.org", "cost": "paid"}, {"name": "HackTheBox", "type": "practice", "url": "https://hackthebox.com", "cost": "freemium"}, {"name": "OWASP Guide", "type": "documentation", "url": "https://owasp.org", "cost": "free"}]);
    record33.set("projects", [{"title": "Penetration Test", "description": "Conduct authorized pen test", "difficulty": "Intermediate"}, {"title": "Vulnerability Report", "description": "Identify and document vulnerabilities", "difficulty": "Intermediate"}]);
    record33.set("milestones", ["Learn penetration testing", "Use security tools", "Identify vulnerabilities", "Write security reports"]);
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
    record34.set("careerSlug", "cybersecurity-specialist");
    record34.set("phase", 3);
    record34.set("phaseTitle", "Incident Response & Threat Analysis");
    record34.set("duration", "3-4 months");
    record34.set("skills", ["Incident Response", "Forensics", "Threat Intelligence", "SIEM Tools", "Malware Analysis", "Log Analysis"]);
    record34.set("resources", [{"name": "SANS Incident Response", "type": "course", "url": "https://sans.org", "cost": "paid"}, {"name": "Splunk Documentation", "type": "documentation", "url": "https://splunk.com", "cost": "freemium"}, {"name": "Threat Intelligence", "type": "guide", "url": "https://mitre.org", "cost": "free"}]);
    record34.set("projects", [{"title": "Incident Response Plan", "description": "Create IR playbook", "difficulty": "Advanced"}, {"title": "Forensic Analysis", "description": "Analyze security incident", "difficulty": "Advanced"}]);
    record34.set("milestones", ["Respond to incidents", "Analyze threats", "Use SIEM tools", "Conduct forensics"]);
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
    record35.set("careerSlug", "cybersecurity-specialist");
    record35.set("phase", 4);
    record35.set("phaseTitle", "Security Architecture & Compliance");
    record35.set("duration", "3-4 months");
    record35.set("skills", ["Security Architecture", "Compliance (ISO 27001, SOC 2)", "Risk Management", "Security Governance", "Cloud Security", "Zero Trust"]);
    record35.set("resources", [{"name": "CISSP Certification", "type": "course", "url": "https://isc2.org", "cost": "paid"}, {"name": "ISO 27001 Guide", "type": "documentation", "url": "https://iso.org", "cost": "paid"}, {"name": "Zero Trust Architecture", "type": "guide", "url": "https://nist.gov", "cost": "free"}]);
    record35.set("projects", [{"title": "Security Architecture", "description": "Design secure infrastructure", "difficulty": "Advanced"}, {"title": "Compliance Framework", "description": "Implement compliance program", "difficulty": "Advanced"}]);
    record35.set("milestones", ["Design security systems", "Implement compliance", "Manage risk", "Lead security initiatives"]);
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
    record36.set("careerSlug", "qa-engineer");
    record36.set("phase", 1);
    record36.set("phaseTitle", "Testing Fundamentals & Manual Testing");
    record36.set("duration", "2-3 months");
    record36.set("skills", ["Testing Concepts", "Test Planning", "Manual Testing", "Test Cases", "Bug Reporting", "SDLC Understanding"]);
    record36.set("resources", [{"name": "ISTQB Foundation", "type": "course", "url": "https://istqb.org", "cost": "paid"}, {"name": "Software Testing Guide", "type": "documentation", "url": "https://guru99.com", "cost": "free"}, {"name": "Test Case Writing", "type": "guide", "url": "https://testingexcellence.com", "cost": "free"}]);
    record36.set("projects", [{"title": "Test Plan", "description": "Create comprehensive test plan", "difficulty": "Beginner"}, {"title": "Manual Testing", "description": "Execute test cases and report bugs", "difficulty": "Beginner"}]);
    record36.set("milestones", ["Understand testing", "Write test cases", "Report bugs", "Understand SDLC"]);
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
    record37.set("careerSlug", "qa-engineer");
    record37.set("phase", 2);
    record37.set("phaseTitle", "Automation Testing & Tools");
    record37.set("duration", "3-4 months");
    record37.set("skills", ["Selenium", "Test Automation", "Programming for QA", "Test Frameworks", "CI/CD Integration", "API Testing"]);
    record37.set("resources", [{"name": "Selenium Documentation", "type": "documentation", "url": "https://selenium.dev", "cost": "free"}, {"name": "Postman API Testing", "type": "tool", "url": "https://postman.com", "cost": "freemium"}, {"name": "Python for QA", "type": "course", "url": "https://kaggle.com/learn", "cost": "free"}]);
    record37.set("projects", [{"title": "Automated Test Suite", "description": "Selenium tests for web app", "difficulty": "Intermediate"}, {"title": "API Test Automation", "description": "Postman/REST API testing", "difficulty": "Intermediate"}]);
    record37.set("milestones", ["Learn test automation", "Write automated tests", "Integrate with CI/CD", "Test APIs"]);
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
    record38.set("careerSlug", "qa-engineer");
    record38.set("phase", 3);
    record38.set("phaseTitle", "Performance & Security Testing");
    record38.set("duration", "3-4 months");
    record38.set("skills", ["Performance Testing", "Load Testing", "Security Testing", "JMeter", "Burp Suite", "Test Reporting"]);
    record38.set("resources", [{"name": "JMeter Documentation", "type": "documentation", "url": "https://jmeter.apache.org", "cost": "free"}, {"name": "Performance Testing Guide", "type": "course", "url": "https://guru99.com", "cost": "free"}, {"name": "Burp Suite Guide", "type": "documentation", "url": "https://portswigger.net", "cost": "freemium"}]);
    record38.set("projects", [{"title": "Load Testing", "description": "Performance test with JMeter", "difficulty": "Advanced"}, {"title": "Security Testing", "description": "Security test with Burp Suite", "difficulty": "Advanced"}]);
    record38.set("milestones", ["Conduct performance tests", "Identify bottlenecks", "Security testing", "Optimize performance"]);
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
    record39.set("careerSlug", "qa-engineer");
    record39.set("phase", 4);
    record39.set("phaseTitle", "Test Strategy & Leadership");
    record39.set("duration", "2-3 months");
    record39.set("skills", ["Test Strategy", "Test Management", "Continuous Testing", "Quality Metrics", "Team Leadership", "Process Improvement"]);
    record39.set("resources", [{"name": "Test Management", "type": "course", "url": "https://istqb.org", "cost": "paid"}, {"name": "Quality Metrics", "type": "guide", "url": "https://guru99.com", "cost": "free"}, {"name": "Agile Testing", "type": "book", "url": "https://agiletestingalliance.org", "cost": "paid"}]);
    record39.set("projects", [{"title": "Test Strategy", "description": "Create testing strategy for product", "difficulty": "Advanced"}, {"title": "Quality Dashboard", "description": "Build quality metrics dashboard", "difficulty": "Advanced"}]);
    record39.set("milestones", ["Develop test strategy", "Lead QA team", "Implement metrics", "Improve processes"]);
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
    record40.set("careerSlug", "database-administrator");
    record40.set("phase", 1);
    record40.set("phaseTitle", "Database Fundamentals & SQL");
    record40.set("duration", "3-4 months");
    record40.set("skills", ["Relational Databases", "SQL", "Database Design", "Normalization", "Indexing", "Query Optimization"]);
    record40.set("resources", [{"name": "SQL Tutorial", "type": "interactive", "url": "https://sqlzoo.net", "cost": "free"}, {"name": "Database Design", "type": "course", "url": "https://coursera.org", "cost": "freemium"}, {"name": "PostgreSQL Documentation", "type": "documentation", "url": "https://postgresql.org", "cost": "free"}]);
    record40.set("projects", [{"title": "Database Design", "description": "Design normalized database", "difficulty": "Beginner"}, {"title": "SQL Queries", "description": "Write complex SQL queries", "difficulty": "Beginner"}]);
    record40.set("milestones", ["Master SQL", "Design databases", "Optimize queries", "Understand normalization"]);
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
    record41.set("careerSlug", "database-administrator");
    record41.set("phase", 2);
    record41.set("phaseTitle", "Database Administration & Backup");
    record41.set("duration", "3-4 months");
    record41.set("skills", ["User Management", "Backup & Recovery", "Replication", "High Availability", "Monitoring", "Performance Tuning"]);
    record41.set("resources", [{"name": "MySQL Administration", "type": "course", "url": "https://mysql.com", "cost": "freemium"}, {"name": "PostgreSQL Administration", "type": "documentation", "url": "https://postgresql.org", "cost": "free"}, {"name": "Database Backup Strategies", "type": "guide", "url": "https://oracle.com", "cost": "free"}]);
    record41.set("projects", [{"title": "Backup Strategy", "description": "Implement backup and recovery", "difficulty": "Intermediate"}, {"title": "Replication Setup", "description": "Configure database replication", "difficulty": "Intermediate"}]);
    record41.set("milestones", ["Manage users", "Implement backups", "Set up replication", "Monitor performance"]);
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
    record42.set("phase", 3);
    record42.set("phaseTitle", "Advanced Topics & Cloud Databases");
    record42.set("duration", "3-4 months");
    record42.set("skills", ["NoSQL Databases", "Cloud Databases (RDS, Cloud SQL)", "Sharding", "Partitioning", "Data Migration", "Disaster Recovery"]);
    record42.set("resources", [{"name": "MongoDB Documentation", "type": "documentation", "url": "https://mongodb.com", "cost": "free"}, {"name": "AWS RDS Guide", "type": "documentation", "url": "https://aws.amazon.com", "cost": "free"}, {"name": "Data Migration", "type": "guide", "url": "https://aws.amazon.com", "cost": "free"}]);
    record42.set("projects", [{"title": "NoSQL Database", "description": "Design and implement NoSQL DB", "difficulty": "Advanced"}, {"title": "Cloud Database", "description": "Migrate to cloud database", "difficulty": "Advanced"}]);
    record42.set("milestones", ["Work with NoSQL", "Use cloud databases", "Implement sharding", "Plan migrations"]);
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
    record43.set("phase", 4);
    record43.set("phaseTitle", "Enterprise Database Management");
    record43.set("duration", "3-4 months");
    record43.set("skills", ["Enterprise Databases (Oracle, SQL Server)", "Data Governance", "Security & Compliance", "Cost Optimization", "Strategic Planning"]);
    record43.set("resources", [{"name": "Oracle Database", "type": "documentation", "url": "https://oracle.com", "cost": "freemium"}, {"name": "SQL Server Administration", "type": "course", "url": "https://microsoft.com", "cost": "paid"}, {"name": "Data Governance", "type": "guide", "url": "https://gartner.com", "cost": "paid"}]);
    record43.set("projects", [{"title": "Enterprise Database", "description": "Manage enterprise database", "difficulty": "Advanced"}, {"title": "Governance Framework", "description": "Implement data governance", "difficulty": "Advanced"}]);
    record43.set("milestones", ["Manage enterprise systems", "Implement governance", "Ensure compliance", "Optimize costs"]);
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
    record44.set("careerSlug", "solutions-architect");
    record44.set("phase", 1);
    record44.set("phaseTitle", "Technology Fundamentals & Architecture Basics");
    record44.set("duration", "3-4 months");
    record44.set("skills", ["System Design", "Architecture Patterns", "Scalability Concepts", "Cloud Basics", "Networking", "Security Principles"]);
    record44.set("resources", [{"name": "System Design Primer", "type": "guide", "url": "https://github.com/donnemartin/system-design-primer", "cost": "free"}, {"name": "AWS Fundamentals", "type": "course", "url": "https://aws.amazon.com", "cost": "freemium"}, {"name": "Architecture Patterns", "type": "book", "url": "https://microservices.io", "cost": "paid"}]);
    record44.set("projects", [{"title": "System Design", "description": "Design scalable system", "difficulty": "Intermediate"}, {"title": "Architecture Diagram", "description": "Create architecture diagrams", "difficulty": "Beginner"}]);
    record44.set("milestones", ["Understand system design", "Learn architecture patterns", "Design systems", "Understand trade-offs"]);
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
    record45.set("careerSlug", "solutions-architect");
    record45.set("phase", 2);
    record45.set("phaseTitle", "Cloud Architecture & Design Patterns");
    record45.set("duration", "4-5 months");
    record45.set("skills", ["Cloud Architecture", "Microservices", "Serverless", "API Design", "Data Architecture", "Integration Patterns"]);
    record45.set("resources", [{"name": "AWS Solutions Architect", "type": "course", "url": "https://aws.amazon.com", "cost": "paid"}, {"name": "Microservices Patterns", "type": "book", "url": "https://microservices.io", "cost": "paid"}, {"name": "Cloud Design Patterns", "type": "guide", "url": "https://microsoft.com", "cost": "free"}]);
    record45.set("projects", [{"title": "Microservices Architecture", "description": "Design microservices system", "difficulty": "Advanced"}, {"title": "Serverless Application", "description": "Design serverless solution", "difficulty": "Advanced"}]);
    record45.set("milestones", ["Design cloud systems", "Implement microservices", "Design APIs", "Plan data architecture"]);
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
    record46.set("careerSlug", "solutions-architect");
    record46.set("phase", 3);
    record46.set("phaseTitle", "Security, Compliance & Operations");
    record46.set("duration", "3-4 months");
    record46.set("skills", ["Security Architecture", "Compliance Design", "Operational Excellence", "Cost Optimization", "Disaster Recovery", "Monitoring"]);
    record46.set("resources", [{"name": "AWS Well-Architected", "type": "guide", "url": "https://aws.amazon.com", "cost": "free"}, {"name": "Security Architecture", "type": "course", "url": "https://sans.org", "cost": "paid"}, {"name": "Compliance Frameworks", "type": "guide", "url": "https://nist.gov", "cost": "free"}]);
    record46.set("projects", [{"title": "Secure Architecture", "description": "Design secure system", "difficulty": "Advanced"}, {"title": "Compliance Design", "description": "Design for compliance", "difficulty": "Advanced"}]);
    record46.set("milestones", ["Design secure systems", "Ensure compliance", "Plan operations", "Optimize costs"]);
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
    record47.set("careerSlug", "solutions-architect");
    record47.set("phase", 4);
    record47.set("phaseTitle", "Enterprise Solutions & Strategic Design");
    record47.set("duration", "3-4 months");
    record47.set("skills", ["Enterprise Architecture", "Digital Transformation", "Multi-Cloud Strategy", "Business Alignment", "Change Management", "Strategic Planning"]);
    record47.set("resources", [{"name": "TOGAF Framework", "type": "course", "url": "https://togaf.org", "cost": "paid"}, {"name": "Enterprise Architecture", "type": "guide", "url": "https://gartner.com", "cost": "paid"}, {"name": "Digital Transformation", "type": "course", "url": "https://coursera.org", "cost": "freemium"}]);
    record47.set("projects", [{"title": "Enterprise Architecture", "description": "Design enterprise solution", "difficulty": "Advanced"}, {"title": "Transformation Strategy", "description": "Plan digital transformation", "difficulty": "Advanced"}]);
    record47.set("milestones", ["Design enterprise systems", "Plan transformations", "Align with business", "Lead initiatives"]);
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
    record48.set("careerSlug", "product-manager");
    record48.set("phase", 1);
    record48.set("phaseTitle", "Product Fundamentals & Market Research");
    record48.set("duration", "2-3 months");
    record48.set("skills", ["Product Strategy", "Market Research", "User Research", "Competitive Analysis", "Product Metrics", "Roadmapping Basics"]);
    record48.set("resources", [{"name": "Inspired by Marty Cagan", "type": "book", "url": "https://svpg.com", "cost": "paid"}, {"name": "Product School", "type": "course", "url": "https://productschool.com", "cost": "paid"}, {"name": "Reforge Product Strategy", "type": "course", "url": "https://reforge.com", "cost": "paid"}]);
    record48.set("projects", [{"title": "Market Research", "description": "Analyze market and competitors", "difficulty": "Beginner"}, {"title": "User Research", "description": "Conduct user interviews", "difficulty": "Beginner"}]);
    record48.set("milestones", ["Understand product strategy", "Research market", "Understand users", "Analyze competitors"]);
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
    record49.set("careerSlug", "product-manager");
    record49.set("phase", 2);
    record49.set("phaseTitle", "Product Development & Execution");
    record49.set("duration", "3-4 months");
    record49.set("skills", ["Product Roadmap", "Requirements Definition", "Agile/Scrum", "Stakeholder Management", "Prioritization", "Launch Planning"]);
    record49.set("resources", [{"name": "Cracking the PM Interview", "type": "book", "url": "https://amazon.com", "cost": "paid"}, {"name": "Reforge Product Management", "type": "course", "url": "https://reforge.com", "cost": "paid"}, {"name": "Product Thinking", "type": "blog", "url": "https://medium.com", "cost": "free"}]);
    record49.set("projects", [{"title": "Product Roadmap", "description": "Create product roadmap", "difficulty": "Intermediate"}, {"title": "Feature Specification", "description": "Write detailed feature specs", "difficulty": "Intermediate"}]);
    record49.set("milestones", ["Create roadmaps", "Define requirements", "Manage stakeholders", "Plan launches"]);
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
    record50.set("careerSlug", "product-manager");
    record50.set("phase", 3);
    record50.set("phaseTitle", "Analytics & Data-Driven Decisions");
    record50.set("duration", "3-4 months");
    record50.set("skills", ["Product Analytics", "A/B Testing", "Metrics & KPIs", "Data Interpretation", "SQL Basics", "Experimentation"]);
    record50.set("resources", [{"name": "Reforge Analytics", "type": "course", "url": "https://reforge.com", "cost": "paid"}, {"name": "Amplitude Analytics", "type": "documentation", "url": "https://amplitude.com", "cost": "freemium"}, {"name": "Experimentation Guide", "type": "guide", "url": "https://exp-platform.com", "cost": "free"}]);
    record50.set("projects", [{"title": "Analytics Dashboard", "description": "Build product metrics dashboard", "difficulty": "Intermediate"}, {"title": "A/B Test", "description": "Design and run A/B test", "difficulty": "Intermediate"}]);
    record50.set("milestones", ["Understand analytics", "Design experiments", "Interpret data", "Make data-driven decisions"]);
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
    record51.set("careerSlug", "product-manager");
    record51.set("phase", 4);
    record51.set("phaseTitle", "Leadership & Strategic Growth");
    record51.set("duration", "3-4 months");
    record51.set("skills", ["Product Leadership", "Growth Strategy", "Business Model Innovation", "Team Building", "Vision Setting", "Executive Communication"]);
    record51.set("resources", [{"name": "Reforge Growth Strategy", "type": "course", "url": "https://reforge.com", "cost": "paid"}, {"name": "Good Strategy Bad Strategy", "type": "book", "url": "https://amazon.com", "cost": "paid"}, {"name": "Product Leadership", "type": "course", "url": "https://productschool.com", "cost": "paid"}]);
    record51.set("projects", [{"title": "Growth Strategy", "description": "Develop growth strategy", "difficulty": "Advanced"}, {"title": "Business Model", "description": "Design business model", "difficulty": "Advanced"}]);
    record51.set("milestones", ["Lead product teams", "Develop growth strategies", "Set vision", "Drive business impact"]);
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
    record52.set("careerSlug", "ux-designer");
    record52.set("phase", 1);
    record52.set("phaseTitle", "Design Fundamentals & User Research");
    record52.set("duration", "2-3 months");
    record52.set("skills", ["Design Principles", "User Research", "User Personas", "User Journeys", "Wireframing", "Design Thinking"]);
    record52.set("resources", [{"name": "Design of Everyday Things", "type": "book", "url": "https://amazon.com", "cost": "paid"}, {"name": "Nielsen Norman UX", "type": "course", "url": "https://nngroup.com", "cost": "paid"}, {"name": "Interaction Design Foundation", "type": "course", "url": "https://interaction-design.org", "cost": "freemium"}]);
    record52.set("projects", [{"title": "User Research", "description": "Conduct user interviews", "difficulty": "Beginner"}, {"title": "Wireframes", "description": "Create wireframes for app", "difficulty": "Beginner"}]);
    record52.set("milestones", ["Understand design principles", "Research users", "Create personas", "Map user journeys"]);
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
    record53.set("careerSlug", "ux-designer");
    record53.set("phase", 2);
    record53.set("phaseTitle", "Visual Design & Prototyping");
    record53.set("duration", "3-4 months");
    record53.set("skills", ["Visual Design", "Typography", "Color Theory", "Figma/Sketch", "Prototyping", "Design Systems"]);
    record53.set("resources", [{"name": "Figma Tutorials", "type": "documentation", "url": "https://figma.com", "cost": "free"}, {"name": "Design Systems", "type": "course", "url": "https://nngroup.com", "cost": "paid"}, {"name": "Color Theory", "type": "guide", "url": "https://interaction-design.org", "cost": "freemium"}]);
    record53.set("projects", [{"title": "Visual Design", "description": "Design UI mockups", "difficulty": "Intermediate"}, {"title": "Interactive Prototype", "description": "Create clickable prototype", "difficulty": "Intermediate"}]);
    record53.set("milestones", ["Master design tools", "Create visual designs", "Build prototypes", "Design systems"]);
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
    record54.set("careerSlug", "ux-designer");
    record54.set("phase", 3);
    record54.set("phaseTitle", "Usability Testing & Iteration");
    record54.set("duration", "3-4 months");
    record54.set("skills", ["Usability Testing", "User Testing", "Accessibility (a11y)", "Interaction Design", "Animation", "Responsive Design"]);
    record54.set("resources", [{"name": "Usability Testing Guide", "type": "guide", "url": "https://nngroup.com", "cost": "paid"}, {"name": "Web Accessibility", "type": "guide", "url": "https://w3.org", "cost": "free"}, {"name": "Interaction Design", "type": "course", "url": "https://interaction-design.org", "cost": "freemium"}]);
    record54.set("projects", [{"title": "Usability Test", "description": "Conduct usability testing", "difficulty": "Intermediate"}, {"title": "Accessible Design", "description": "Design accessible interface", "difficulty": "Intermediate"}]);
    record54.set("milestones", ["Test with users", "Iterate designs", "Ensure accessibility", "Design interactions"]);
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
    record55.set("careerSlug", "ux-designer");
    record55.set("phase", 4);
    record55.set("phaseTitle", "Design Leadership & Strategy");
    record55.set("duration", "3-4 months");
    record55.set("skills", ["Design Strategy", "Design Leadership", "Design Thinking", "Stakeholder Management", "Design Metrics", "Team Building"]);
    record55.set("resources", [{"name": "Design Leadership", "type": "course", "url": "https://nngroup.com", "cost": "paid"}, {"name": "Design Strategy", "type": "book", "url": "https://amazon.com", "cost": "paid"}, {"name": "Design Thinking", "type": "course", "url": "https://interaction-design.org", "cost": "freemium"}]);
    record55.set("projects", [{"title": "Design Strategy", "description": "Develop design strategy", "difficulty": "Advanced"}, {"title": "Design System", "description": "Build comprehensive design system", "difficulty": "Advanced"}]);
    record55.set("milestones", ["Lead design teams", "Develop strategy", "Build design systems", "Drive design culture"]);
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
    record56.set("careerSlug", "data-engineer");
    record56.set("phase", 1);
    record56.set("phaseTitle", "Programming & SQL Fundamentals");
    record56.set("duration", "3-4 months");
    record56.set("skills", ["Python/Scala", "SQL", "Data Structures", "Algorithms", "Git", "Linux Basics"]);
    record56.set("resources", [{"name": "Python for Data Engineering", "type": "course", "url": "https://kaggle.com/learn", "cost": "free"}, {"name": "SQL Tutorial", "type": "interactive", "url": "https://sqlzoo.net", "cost": "free"}, {"name": "LeetCode", "type": "practice", "url": "https://leetcode.com", "cost": "freemium"}]);
    record56.set("projects", [{"title": "Data Processing", "description": "Process data with Python", "difficulty": "Beginner"}, {"title": "SQL Queries", "description": "Write complex SQL queries", "difficulty": "Beginner"}]);
    record56.set("milestones", ["Master programming", "Learn SQL", "Understand data structures", "Use version control"]);
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
    record57.set("careerSlug", "data-engineer");
    record57.set("phase", 2);
    record57.set("phaseTitle", "ETL & Data Pipelines");
    record57.set("duration", "3-4 months");
    record57.set("skills", ["ETL Concepts", "Apache Spark", "Data Warehousing", "Airflow", "Data Quality", "Batch Processing"]);
    record57.set("resources", [{"name": "Apache Spark Documentation", "type": "documentation", "url": "https://spark.apache.org", "cost": "free"}, {"name": "Airflow Documentation", "type": "documentation", "url": "https://airflow.apache.org", "cost": "free"}, {"name": "Data Engineering Wiki", "type": "guide", "url": "https://dataengineering.wiki", "cost": "free"}]);
    record57.set("projects", [{"title": "ETL Pipeline", "description": "Build data pipeline with Spark", "difficulty": "Intermediate"}, {"title": "Scheduled Workflow", "description": "Create workflow with Airflow", "difficulty": "Intermediate"}]);
    record57.set("milestones", ["Build ETL pipelines", "Use Spark", "Orchestrate workflows", "Ensure data quality"]);
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
    record58.set("careerSlug", "data-engineer");
    record58.set("phase", 3);
    record58.set("phaseTitle", "Big Data & Streaming");
    record58.set("duration", "3-4 months");
    record58.set("skills", ["Kafka", "Stream Processing", "Hadoop", "Distributed Systems", "Data Lakes", "Real-time Processing"]);
    record58.set("resources", [{"name": "Kafka Documentation", "type": "documentation", "url": "https://kafka.apache.org", "cost": "free"}, {"name": "Flink Documentation", "type": "documentation", "url": "https://flink.apache.org", "cost": "free"}, {"name": "Distributed Systems", "type": "course", "url": "https://coursera.org", "cost": "freemium"}]);
    record58.set("projects", [{"title": "Streaming Pipeline", "description": "Build real-time data pipeline", "difficulty": "Advanced"}, {"title": "Data Lake", "description": "Design and implement data lake", "difficulty": "Advanced"}]);
    record58.set("milestones", ["Work with Kafka", "Process streams", "Build data lakes", "Handle big data"]);
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
    record59.set("careerSlug", "data-engineer");
    record59.set("phase", 4);
    record59.set("phaseTitle", "Advanced Architecture & Optimization");
    record59.set("duration", "3-4 months");
    record59.set("skills", ["Data Architecture", "Performance Optimization", "Cloud Data Platforms", "Data Governance", "Monitoring", "Cost Optimization"]);
    record59.set("resources", [{"name": "Snowflake Documentation", "type": "documentation", "url": "https://snowflake.com", "cost": "free"}, {"name": "BigQuery Documentation", "type": "documentation", "url": "https://cloud.google.com", "cost": "free"}, {"name": "Data Architecture", "type": "guide", "url": "https://dataengineering.wiki", "cost": "free"}]);
    record59.set("projects", [{"title": "Cloud Data Platform", "description": "Design cloud data architecture", "difficulty": "Advanced"}, {"title": "Optimized Pipeline", "description": "Optimize data pipeline performance", "difficulty": "Advanced"}]);
    record59.set("milestones", ["Design data architecture", "Optimize performance", "Use cloud platforms", "Implement governance"]);
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
    record60.set("careerSlug", "blockchain-developer");
    record60.set("phase", 1);
    record60.set("phaseTitle", "Blockchain Fundamentals & Cryptography");
    record60.set("duration", "2-3 months");
    record60.set("skills", ["Blockchain Concepts", "Cryptography Basics", "Bitcoin", "Ethereum Basics", "Smart Contracts Intro", "Web3 Concepts"]);
    record60.set("resources", [{"name": "Bitcoin Whitepaper", "type": "paper", "url": "https://bitcoin.org", "cost": "free"}, {"name": "Ethereum Documentation", "type": "documentation", "url": "https://ethereum.org", "cost": "free"}, {"name": "Cryptography Course", "type": "course", "url": "https://coursera.org", "cost": "freemium"}]);
    record60.set("projects", [{"title": "Blockchain Research", "description": "Study blockchain technology", "difficulty": "Beginner"}, {"title": "Wallet Setup", "description": "Set up crypto wallet", "difficulty": "Beginner"}]);
    record60.set("milestones", ["Understand blockchain", "Learn cryptography", "Understand smart contracts", "Explore Web3"]);
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
    record61.set("careerSlug", "blockchain-developer");
    record61.set("phase", 2);
    record61.set("phaseTitle", "Smart Contract Development");
    record61.set("duration", "3-4 months");
    record61.set("skills", ["Solidity", "Smart Contracts", "Remix IDE", "Testing", "Gas Optimization", "Security Basics"]);
    record61.set("resources", [{"name": "Solidity Documentation", "type": "documentation", "url": "https://solidity.readthedocs.io", "cost": "free"}, {"name": "CryptoZombies", "type": "interactive", "url": "https://cryptozombies.io", "cost": "free"}, {"name": "Hardhat Documentation", "type": "documentation", "url": "https://hardhat.org", "cost": "free"}]);
    record61.set("projects", [{"title": "Simple Smart Contract", "description": "Write basic Solidity contract", "difficulty": "Intermediate"}, {"title": "Token Contract", "description": "Create ERC-20 token", "difficulty": "Intermediate"}]);
    record61.set("milestones", ["Learn Solidity", "Write smart contracts", "Test contracts", "Deploy to testnet"]);
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
    record62.set("careerSlug", "blockchain-developer");
    record62.set("phase", 3);
    record62.set("phaseTitle", "DeFi & Advanced Contracts");
    record62.set("duration", "3-4 months");
    record62.set("skills", ["DeFi Protocols", "Uniswap", "Aave", "Advanced Solidity", "Security Auditing", "Contract Optimization"]);
    record62.set("resources", [{"name": "DeFi Protocol Docs", "type": "documentation", "url": "https://uniswap.org", "cost": "free"}, {"name": "OpenZeppelin Contracts", "type": "library", "url": "https://openzeppelin.com", "cost": "free"}, {"name": "Smart Contract Security", "type": "guide", "url": "https://consensys.net", "cost": "free"}]);
    record62.set("projects", [{"title": "DeFi Protocol", "description": "Build DeFi application", "difficulty": "Advanced"}, {"title": "Security Audit", "description": "Audit smart contract", "difficulty": "Advanced"}]);
    record62.set("milestones", ["Understand DeFi", "Build complex contracts", "Audit security", "Optimize gas"]);
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
    record63.set("careerSlug", "blockchain-developer");
    record63.set("phase", 4);
    record63.set("phaseTitle", "Production & Scaling");
    record63.set("duration", "3-4 months");
    record63.set("skills", ["Layer 2 Solutions", "Cross-chain Development", "Production Deployment", "Monitoring", "Governance", "Advanced Security"]);
    record63.set("resources", [{"name": "Polygon Documentation", "type": "documentation", "url": "https://polygon.technology", "cost": "free"}, {"name": "Arbitrum Documentation", "type": "documentation", "url": "https://arbitrum.io", "cost": "free"}, {"name": "Web3 Security", "type": "guide", "url": "https://consensys.net", "cost": "free"}]);
    record63.set("projects", [{"title": "Layer 2 Application", "description": "Deploy on Layer 2", "difficulty": "Advanced"}, {"title": "Production DApp", "description": "Launch production DApp", "difficulty": "Advanced"}]);
    record63.set("milestones", ["Deploy to Layer 2", "Scale application", "Implement governance", "Ensure security"]);
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
    record64.set("careerSlug", "ai-engineer");
    record64.set("phase", 1);
    record64.set("phaseTitle", "AI Fundamentals & Python");
    record64.set("duration", "2-3 months");
    record64.set("skills", ["Python", "Math Foundations", "AI Concepts", "Machine Learning Basics", "Libraries (NumPy, Pandas)", "Jupyter Notebooks"]);
    record64.set("resources", [{"name": "Python for AI", "type": "course", "url": "https://kaggle.com/learn", "cost": "free"}, {"name": "AI Fundamentals", "type": "course", "url": "https://coursera.org", "cost": "freemium"}, {"name": "3Blue1Brown Math", "type": "video", "url": "https://youtube.com/3blue1brown", "cost": "free"}]);
    record64.set("projects", [{"title": "Data Analysis", "description": "Analyze dataset with Python", "difficulty": "Beginner"}, {"title": "ML Basics", "description": "Build simple ML model", "difficulty": "Beginner"}]);
    record64.set("milestones", ["Master Python", "Understand AI concepts", "Learn ML basics", "Use data science tools"]);
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
    record65.set("careerSlug", "ai-engineer");
    record65.set("phase", 2);
    record65.set("phaseTitle", "Deep Learning & Neural Networks");
    record65.set("duration", "3-4 months");
    record65.set("skills", ["TensorFlow/PyTorch", "Neural Networks", "CNNs", "RNNs", "Transfer Learning", "Model Training"]);
    record65.set("resources", [{"name": "TensorFlow Tutorials", "type": "documentation", "url": "https://tensorflow.org", "cost": "free"}, {"name": "PyTorch Documentation", "type": "documentation", "url": "https://pytorch.org", "cost": "free"}, {"name": "Fast.ai", "type": "course", "url": "https://fast.ai", "cost": "free"}]);
    record65.set("projects", [{"title": "Image Classification", "description": "CNN for image recognition", "difficulty": "Intermediate"}, {"title": "NLP Model", "description": "Text classification or generation", "difficulty": "Intermediate"}]);
    record65.set("milestones", ["Build neural networks", "Train deep learning models", "Work with images and text", "Use transfer learning"]);
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
    record66.set("careerSlug", "ai-engineer");
    record66.set("phase", 3);
    record66.set("phaseTitle", "LLMs & Generative AI");
    record66.set("duration", "3-4 months");
    record66.set("skills", ["Large Language Models", "Prompt Engineering", "Fine-tuning", "RAG Systems", "Vector Databases", "LangChain"]);
    record66.set("resources", [{"name": "OpenAI API Docs", "type": "documentation", "url": "https://openai.com", "cost": "freemium"}, {"name": "Hugging Face Transformers", "type": "documentation", "url": "https://huggingface.co", "cost": "free"}, {"name": "LangChain Documentation", "type": "documentation", "url": "https://langchain.com", "cost": "free"}]);
    record66.set("projects", [{"title": "LLM Application", "description": "Build app with LLM API", "difficulty": "Advanced"}, {"title": "RAG System", "description": "Implement retrieval-augmented generation", "difficulty": "Advanced"}]);
    record66.set("milestones", ["Work with LLMs", "Prompt engineering", "Fine-tune models", "Build RAG systems"]);
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
    record67.set("careerSlug", "ai-engineer");
    record67.set("phase", 4);
    record67.set("phaseTitle", "Production AI & Advanced Applications");
    record67.set("duration", "3-4 months");
    record67.set("skills", ["MLOps", "Model Deployment", "Monitoring", "Ethical AI", "Multimodal AI", "Advanced Optimization"]);
    record67.set("resources", [{"name": "MLflow Documentation", "type": "documentation", "url": "https://mlflow.org", "cost": "free"}, {"name": "Ethical AI Guide", "type": "guide", "url": "https://ai.google", "cost": "free"}, {"name": "Production ML", "type": "course", "url": "https://madewithml.com", "cost": "free"}]);
    record67.set("projects", [{"title": "Production AI System", "description": "Deploy AI model to production", "difficulty": "Advanced"}, {"title": "Multimodal Application", "description": "Build app with vision and language", "difficulty": "Advanced"}]);
    record67.set("milestones", ["Deploy AI models", "Monitor performance", "Implement ethics", "Build advanced systems"]);
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
    record68.set("careerSlug", "software-architect");
    record68.set("phase", 1);
    record68.set("phaseTitle", "Software Design Principles & Patterns");
    record68.set("duration", "3-4 months");
    record68.set("skills", ["SOLID Principles", "Design Patterns", "Clean Code", "Refactoring", "Code Review", "Documentation"]);
    record68.set("resources", [{"name": "Clean Code", "type": "book", "url": "https://amazon.com", "cost": "paid"}, {"name": "Design Patterns", "type": "book", "url": "https://amazon.com", "cost": "paid"}, {"name": "Refactoring Guide", "type": "book", "url": "https://amazon.com", "cost": "paid"}]);
    record68.set("projects", [{"title": "Code Refactoring", "description": "Refactor legacy code", "difficulty": "Intermediate"}, {"title": "Design Pattern Implementation", "description": "Implement design patterns", "difficulty": "Intermediate"}]);
    record68.set("milestones", ["Master design principles", "Apply design patterns", "Write clean code", "Review code effectively"]);
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
    record69.set("careerSlug", "software-architect");
    record69.set("phase", 2);
    record69.set("phaseTitle", "System Architecture & Scalability");
    record69.set("duration", "4-5 months");
    record69.set("skills", ["System Design", "Microservices", "Distributed Systems", "Scalability", "Load Balancing", "Caching Strategies"]);
    record69.set("resources", [{"name": "System Design Primer", "type": "guide", "url": "https://github.com/donnemartin/system-design-primer", "cost": "free"}, {"name": "Designing Data-Intensive Applications", "type": "book", "url": "https://amazon.com", "cost": "paid"}, {"name": "Microservices Patterns", "type": "book", "url": "https://microservices.io", "cost": "paid"}]);
    record69.set("projects", [{"title": "Scalable System", "description": "Design scalable architecture", "difficulty": "Advanced"}, {"title": "Microservices Design", "description": "Design microservices system", "difficulty": "Advanced"}]);
    record69.set("milestones", ["Design systems", "Implement microservices", "Plan scalability", "Optimize performance"]);
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
    record70.set("careerSlug", "software-architect");
    record70.set("phase", 3);
    record70.set("phaseTitle", "Technology Stack & Integration");
    record70.set("duration", "3-4 months");
    record70.set("skills", ["Technology Selection", "Integration Patterns", "API Design", "Data Architecture", "Security Architecture", "DevOps Integration"]);
    record70.set("resources", [{"name": "Technology Radar", "type": "guide", "url": "https://thoughtworks.com", "cost": "free"}, {"name": "API Design Guide", "type": "guide", "url": "https://restfulapi.net", "cost": "free"}, {"name": "Enterprise Integration", "type": "book", "url": "https://amazon.com", "cost": "paid"}]);
    record70.set("projects", [{"title": "Technology Stack", "description": "Select and justify tech stack", "difficulty": "Advanced"}, {"title": "Integration Architecture", "description": "Design system integration", "difficulty": "Advanced"}]);
    record70.set("milestones", ["Select technologies", "Design APIs", "Plan data architecture", "Integrate systems"]);
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
    record71.set("careerSlug", "software-architect");
    record71.set("phase", 4);
    record71.set("phaseTitle", "Enterprise Architecture & Leadership");
    record71.set("duration", "3-4 months");
    record71.set("skills", ["Enterprise Architecture", "Strategic Planning", "Team Leadership", "Governance", "Change Management", "Business Alignment"]);
    record71.set("resources", [{"name": "TOGAF Framework", "type": "course", "url": "https://togaf.org", "cost": "paid"}, {"name": "Enterprise Architecture", "type": "guide", "url": "https://gartner.com", "cost": "paid"}, {"name": "Leadership Skills", "type": "course", "url": "https://coursera.org", "cost": "freemium"}]);
    record71.set("projects", [{"title": "Enterprise Architecture", "description": "Design enterprise system", "difficulty": "Advanced"}, {"title": "Strategic Plan", "description": "Create technology strategy", "difficulty": "Advanced"}]);
    record71.set("milestones", ["Design enterprise systems", "Lead architecture", "Plan strategy", "Drive transformation"]);
  try {
    app.save(record71);
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
