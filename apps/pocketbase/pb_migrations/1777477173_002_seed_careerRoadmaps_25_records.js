/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerRoadmaps");

  const record0 = new Record(collection);
    record0.set("careerSlug", "software-engineer");
    record0.set("phase", 1);
    record0.set("phaseTitle", "Fundamentals & Setup");
    record0.set("duration", "1-3 months");
    record0.set("skills", ["Programming Basics", "Variables & Data Types", "Control Flow", "Functions", "Problem Solving"]);
    record0.set("resources", ["Codecademy", "freeCodeCamp", "Khan Academy", "LeetCode Easy Problems"]);
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
    record1.set("phase", 2);
    record1.set("phaseTitle", "Core Programming Languages");
    record1.set("duration", "3-6 months");
    record1.set("skills", ["Python", "JavaScript", "Object-Oriented Programming", "Data Structures", "Algorithms"]);
    record1.set("resources", ["Python Official Docs", "JavaScript MDN", "GeeksforGeeks", "LeetCode Medium Problems"]);
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
    record2.set("phase", 3);
    record2.set("phaseTitle", "Web Development Basics");
    record2.set("duration", "3-6 months");
    record2.set("skills", ["HTML", "CSS", "DOM Manipulation", "REST APIs", "Git & GitHub"]);
    record2.set("resources", ["MDN Web Docs", "freeCodeCamp Web Dev", "GitHub Guides", "Postman API Learning"]);
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
    record3.set("phase", 4);
    record3.set("phaseTitle", "Backend Development");
    record3.set("duration", "3-6 months");
    record3.set("skills", ["Node.js/Express", "Databases", "Authentication", "API Design", "Testing"]);
    record3.set("resources", ["Node.js Official Docs", "Express.js Guide", "MongoDB University", "Jest Testing"]);
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
    record4.set("phase", 5);
    record4.set("phaseTitle", "Advanced Concepts");
    record4.set("duration", "3-6 months");
    record4.set("skills", ["System Design", "Microservices", "Cloud Deployment", "Performance Optimization", "Security"]);
    record4.set("resources", ["System Design Primer", "AWS Documentation", "Docker Docs", "OWASP Security"]);
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
    record5.set("careerSlug", "data-scientist");
    record5.set("phase", 1);
    record5.set("phaseTitle", "Math & Statistics Foundations");
    record5.set("duration", "2-4 months");
    record5.set("skills", ["Linear Algebra", "Probability", "Statistics", "Calculus Basics", "Mathematical Thinking"]);
    record5.set("resources", ["3Blue1Brown Videos", "Khan Academy Math", "StatQuest with Josh Starmer", "MIT OpenCourseWare"]);
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
    record6.set("careerSlug", "data-scientist");
    record6.set("phase", 2);
    record6.set("phaseTitle", "Python & Data Manipulation");
    record6.set("duration", "2-4 months");
    record6.set("skills", ["Python Basics", "Pandas", "NumPy", "Data Cleaning", "Exploratory Data Analysis"]);
    record6.set("resources", ["Python for Data Analysis Book", "Pandas Documentation", "DataCamp", "Kaggle Datasets"]);
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
    record7.set("careerSlug", "data-scientist");
    record7.set("phase", 3);
    record7.set("phaseTitle", "SQL & Databases");
    record7.set("duration", "1-3 months");
    record7.set("skills", ["SQL Queries", "Database Design", "Joins", "Aggregations", "Window Functions"]);
    record7.set("resources", ["SQL Tutorial", "Mode Analytics SQL", "LeetCode SQL", "PostgreSQL Docs"]);
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
    record8.set("phase", 4);
    record8.set("phaseTitle", "Machine Learning Fundamentals");
    record8.set("duration", "3-6 months");
    record8.set("skills", ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Feature Engineering", "Scikit-learn"]);
    record8.set("resources", ["Andrew Ng ML Course", "Scikit-learn Docs", "Kaggle Competitions", "Fast.ai"]);
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
    record9.set("phase", 5);
    record9.set("phaseTitle", "Advanced ML & Deep Learning");
    record9.set("duration", "3-6 months");
    record9.set("skills", ["Deep Learning", "Neural Networks", "NLP", "Computer Vision", "Model Deployment"]);
    record9.set("resources", ["Deep Learning Specialization", "TensorFlow Docs", "PyTorch Tutorials", "Papers with Code"]);
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
    record10.set("careerSlug", "devops-engineer");
    record10.set("phase", 1);
    record10.set("phaseTitle", "Linux & Networking Fundamentals");
    record10.set("duration", "2-4 months");
    record10.set("skills", ["Linux Commands", "File Systems", "Networking Basics", "SSH", "Shell Scripting"]);
    record10.set("resources", ["Linux Academy", "Udemy Linux Course", "Linux Man Pages", "Networking Basics"]);
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
    record11.set("careerSlug", "devops-engineer");
    record11.set("phase", 2);
    record11.set("phaseTitle", "Containerization with Docker");
    record11.set("duration", "2-4 months");
    record11.set("skills", ["Docker Basics", "Images & Containers", "Docker Compose", "Registry", "Best Practices"]);
    record11.set("resources", ["Docker Official Docs", "Docker Mastery Course", "Play with Docker", "Docker Hub"]);
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
    record12.set("phase", 3);
    record12.set("phaseTitle", "Kubernetes & Orchestration");
    record12.set("duration", "3-6 months");
    record12.set("skills", ["Kubernetes Basics", "Pods & Services", "Deployments", "ConfigMaps", "Helm"]);
    record12.set("resources", ["Kubernetes Official Docs", "Kubernetes the Hard Way", "Minikube", "KodeKloud"]);
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
    record13.set("phase", 4);
    record13.set("phaseTitle", "Cloud Platforms (AWS/Azure/GCP)");
    record13.set("duration", "3-6 months");
    record13.set("skills", ["Cloud Services", "EC2/VMs", "Storage", "Networking", "IAM & Security"]);
    record13.set("resources", ["AWS Free Tier", "Azure Learn", "GCP Qwiklabs", "Cloud Certification Courses"]);
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
    record14.set("phase", 5);
    record14.set("phaseTitle", "CI/CD & Infrastructure as Code");
    record14.set("duration", "3-6 months");
    record14.set("skills", ["Jenkins/GitLab CI", "Terraform", "Ansible", "Monitoring", "Logging"]);
    record14.set("resources", ["Jenkins Documentation", "Terraform Registry", "Ansible Docs", "Prometheus Docs"]);
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
    record15.set("phase", 1);
    record15.set("phaseTitle", "Frontend Fundamentals");
    record15.set("duration", "2-4 months");
    record15.set("skills", ["HTML", "CSS", "JavaScript Basics", "Responsive Design", "DOM"]);
    record15.set("resources", ["MDN Web Docs", "freeCodeCamp Responsive", "CSS Tricks", "Flexbox Froggy"]);
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
    record16.set("phase", 2);
    record16.set("phaseTitle", "Frontend Frameworks");
    record16.set("duration", "2-4 months");
    record16.set("skills", ["React/Vue/Angular", "Component Architecture", "State Management", "Routing", "Testing"]);
    record16.set("resources", ["React Official Docs", "Vue.js Guide", "Angular Docs", "Jest Testing"]);
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
    record17.set("phase", 3);
    record17.set("phaseTitle", "Backend Fundamentals");
    record17.set("duration", "2-4 months");
    record17.set("skills", ["Node.js", "Express", "REST APIs", "Authentication", "Middleware"]);
    record17.set("resources", ["Node.js Docs", "Express Guide", "RESTful API Design", "JWT Auth"]);
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
    record18.set("phase", 4);
    record18.set("phaseTitle", "Databases & Data Management");
    record18.set("duration", "2-4 months");
    record18.set("skills", ["SQL", "MongoDB", "Database Design", "Migrations", "Optimization"]);
    record18.set("resources", ["SQL Tutorial", "MongoDB University", "Database Design Basics", "Sequelize/Mongoose"]);
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
    record19.set("phase", 5);
    record19.set("phaseTitle", "Deployment & DevOps");
    record19.set("duration", "2-4 months");
    record19.set("skills", ["Docker", "Git", "Deployment", "Monitoring", "Performance Optimization"]);
    record19.set("resources", ["Docker Docs", "Heroku Deployment", "Vercel Docs", "New Relic Monitoring"]);
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
    record20.set("duration", "2-4 months");
    record20.set("skills", ["Mobile UI/UX Principles", "Platform Differences", "Navigation", "State Management", "APIs"]);
    record20.set("resources", ["Apple HIG", "Material Design", "Mobile Design Patterns", "API Integration"]);
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
    record21.set("phaseTitle", "Cross-Platform Development");
    record21.set("duration", "3-6 months");
    record21.set("skills", ["React Native/Flutter", "JavaScript/Dart", "Component Libraries", "Navigation", "State Management"]);
    record21.set("resources", ["React Native Docs", "Flutter Docs", "Expo", "Firebase Integration"]);
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
    record22.set("phaseTitle", "Native Development (iOS)");
    record22.set("duration", "3-6 months");
    record22.set("skills", ["Swift", "Xcode", "UIKit/SwiftUI", "Core Data", "Networking"]);
    record22.set("resources", ["Apple Developer Docs", "Swift Playgrounds", "Hacking with Swift", "Stanford CS193p"]);
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
    record23.set("phaseTitle", "Native Development (Android)");
    record23.set("duration", "3-6 months");
    record23.set("skills", ["Kotlin", "Android Studio", "Jetpack", "Room Database", "Networking"]);
    record23.set("resources", ["Android Developer Docs", "Kotlin Docs", "Google Codelabs", "Android Fundamentals"]);
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
    record24.set("careerSlug", "mobile-developer");
    record24.set("phase", 5);
    record24.set("phaseTitle", "Advanced Features & Deployment");
    record24.set("duration", "2-4 months");
    record24.set("skills", ["Push Notifications", "Analytics", "App Store Deployment", "Performance", "Security"]);
    record24.set("resources", ["Firebase Docs", "App Store Connect", "Google Play Console", "Mobile Security"]);
  try {
    app.save(record24);
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
