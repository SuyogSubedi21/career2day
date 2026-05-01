/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerRoadmaps");

  const record0 = new Record(collection);
    record0.set("careerSlug", "frontend-engineer");
    record0.set("phase", 1);
    record0.set("phaseTitle", "Web Fundamentals");
    record0.set("duration", "2 months");
    record0.set("skills", ["HTML", "CSS", "JavaScript", "Git", "Command Line"]);
    record0.set("resources", [{"name": "MDN Web Docs", "type": "documentation", "url": "https://developer.mozilla.org/", "description": "Comprehensive web development documentation"}, {"name": "FreeCodeCamp Web Development", "type": "course", "url": "https://www.freecodecamp.org/learn/responsive-web-design/", "description": "Free responsive web design course"}]);
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
    record1.set("careerSlug", "frontend-engineer");
    record1.set("phase", 2);
    record1.set("phaseTitle", "JavaScript Mastery");
    record1.set("duration", "2 months");
    record1.set("skills", ["JavaScript ES6+", "DOM Manipulation", "Async Programming", "Fetch API"]);
    record1.set("resources", [{"name": "JavaScript.info", "type": "documentation", "url": "https://javascript.info/", "description": "Comprehensive JavaScript guide"}, {"name": "You Don't Know JS", "type": "book", "url": "https://github.com/getify/You-Dont-Know-JS", "description": "Deep JavaScript learning"}]);
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
    record2.set("careerSlug", "frontend-engineer");
    record2.set("phase", 3);
    record2.set("phaseTitle", "React Fundamentals");
    record2.set("duration", "2 months");
    record2.set("skills", ["React Basics", "Components", "Hooks", "State Management"]);
    record2.set("resources", [{"name": "React Official Tutorial", "type": "documentation", "url": "https://react.dev/learn", "description": "Official React documentation"}, {"name": "React Course", "type": "course", "url": "https://www.udemy.com/course/react-the-complete-guide/", "description": "Comprehensive React course"}]);
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
    record3.set("careerSlug", "frontend-engineer");
    record3.set("phase", 4);
    record3.set("phaseTitle", "Advanced React");
    record3.set("duration", "2 months");
    record3.set("skills", ["Advanced Hooks", "Context API", "Performance Optimization", "Testing"]);
    record3.set("resources", [{"name": "React Advanced Patterns", "type": "course", "url": "https://www.epicreact.dev/", "description": "Advanced React patterns and practices"}, {"name": "React Testing Library", "type": "documentation", "url": "https://testing-library.com/react", "description": "React testing best practices"}]);
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
    record4.set("careerSlug", "frontend-engineer");
    record4.set("phase", 5);
    record4.set("phaseTitle", "Styling & Design");
    record4.set("duration", "2 months");
    record4.set("skills", ["CSS Frameworks", "Responsive Design", "Accessibility", "Design Systems"]);
    record4.set("resources", [{"name": "Tailwind CSS", "type": "documentation", "url": "https://tailwindcss.com/docs", "description": "Tailwind CSS utility framework"}, {"name": "Web Accessibility", "type": "course", "url": "https://www.coursera.org/learn/web-accessibility", "description": "Web accessibility fundamentals"}]);
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
    record5.set("careerSlug", "frontend-engineer");
    record5.set("phase", 6);
    record5.set("phaseTitle", "Portfolio & Projects");
    record5.set("duration", "3 months");
    record5.set("skills", ["Full Projects", "Performance", "SEO", "Deployment"]);
    record5.set("resources", [{"name": "Vercel Deployment", "type": "tool", "url": "https://vercel.com/", "description": "Deploy frontend applications"}, {"name": "GitHub Portfolio", "type": "project", "url": "https://github.com/topics/frontend", "description": "Frontend project examples"}]);
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
    record6.set("careerSlug", "ai-engineer");
    record6.set("phase", 1);
    record6.set("phaseTitle", "Fundamentals");
    record6.set("duration", "3 months");
    record6.set("skills", ["Python", "Linear Algebra", "Statistics", "NumPy", "Pandas"]);
    record6.set("resources", [{"name": "Python for AI", "type": "course", "url": "https://www.coursera.org/learn/python-data-analysis", "description": "Python fundamentals for AI"}, {"name": "Math for AI", "type": "course", "url": "https://www.coursera.org/learn/mathematics-for-machine-learning", "description": "Mathematics for machine learning"}]);
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
    record7.set("careerSlug", "ai-engineer");
    record7.set("phase", 2);
    record7.set("phaseTitle", "Machine Learning Basics");
    record7.set("duration", "3 months");
    record7.set("skills", ["Scikit-learn", "Supervised Learning", "Unsupervised Learning", "Model Evaluation"]);
    record7.set("resources", [{"name": "Andrew Ng ML Course", "type": "course", "url": "https://www.coursera.org/learn/machine-learning", "description": "Comprehensive machine learning fundamentals"}, {"name": "Scikit-learn Documentation", "type": "documentation", "url": "https://scikit-learn.org/", "description": "Scikit-learn library documentation"}]);
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
    record8.set("careerSlug", "ai-engineer");
    record8.set("phase", 3);
    record8.set("phaseTitle", "Deep Learning");
    record8.set("duration", "4 months");
    record8.set("skills", ["TensorFlow", "PyTorch", "Neural Networks", "CNN", "RNN"]);
    record8.set("resources", [{"name": "Deep Learning Specialization", "type": "course", "url": "https://www.coursera.org/specializations/deep-learning", "description": "Andrew Ng's deep learning specialization"}, {"name": "PyTorch Tutorials", "type": "documentation", "url": "https://pytorch.org/tutorials/", "description": "Official PyTorch tutorials"}]);
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
    record9.set("careerSlug", "ai-engineer");
    record9.set("phase", 4);
    record9.set("phaseTitle", "NLP & Computer Vision");
    record9.set("duration", "3 months");
    record9.set("skills", ["NLP", "Computer Vision", "Transformers", "BERT", "GPT"]);
    record9.set("resources", [{"name": "Hugging Face Course", "type": "course", "url": "https://huggingface.co/course", "description": "NLP with Transformers"}, {"name": "Computer Vision Course", "type": "course", "url": "https://www.coursera.org/learn/computer-vision", "description": "Computer vision fundamentals"}]);
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
    record10.set("careerSlug", "ai-engineer");
    record10.set("phase", 5);
    record10.set("phaseTitle", "Advanced AI");
    record10.set("duration", "3 months");
    record10.set("skills", ["Reinforcement Learning", "Generative Models", "LLMs", "Prompt Engineering"]);
    record10.set("resources", [{"name": "Reinforcement Learning", "type": "course", "url": "https://www.deepmind.com/learning-resources", "description": "DeepMind RL resources"}, {"name": "LLM Course", "type": "course", "url": "https://www.deeplearning.ai/short-courses/", "description": "Large Language Models courses"}]);
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
    record11.set("careerSlug", "ai-engineer");
    record11.set("phase", 6);
    record11.set("phaseTitle", "Production & Specialization");
    record11.set("duration", "3 months");
    record11.set("skills", ["Model Deployment", "MLOps", "Real-world Projects", "Specialization"]);
    record11.set("resources", [{"name": "MLflow Documentation", "type": "documentation", "url": "https://mlflow.org/", "description": "MLflow for model management"}, {"name": "Kaggle Competitions", "type": "project", "url": "https://www.kaggle.com/", "description": "Real-world AI competitions"}]);
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
    record12.set("careerSlug", "cybersecurity-engineer");
    record12.set("phase", 1);
    record12.set("phaseTitle", "Security Fundamentals");
    record12.set("duration", "2 months");
    record12.set("skills", ["Security Concepts", "Cryptography", "Network Security", "Compliance"]);
    record12.set("resources", [{"name": "CompTIA Security+", "type": "course", "url": "https://www.comptia.org/certifications/security", "description": "Security+ certification course"}, {"name": "OWASP Top 10", "type": "documentation", "url": "https://owasp.org/www-project-top-ten/", "description": "OWASP security vulnerabilities"}]);
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
    record13.set("careerSlug", "cybersecurity-engineer");
    record13.set("phase", 2);
    record13.set("phaseTitle", "Networking & Systems");
    record13.set("duration", "2 months");
    record13.set("skills", ["Networking", "Linux", "Windows", "Firewalls", "IDS/IPS"]);
    record13.set("resources", [{"name": "CompTIA Network+", "type": "course", "url": "https://www.comptia.org/certifications/network", "description": "Network+ certification"}, {"name": "Linux Security", "type": "course", "url": "https://www.linuxacademy.com/", "description": "Linux security fundamentals"}]);
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
    record14.set("careerSlug", "cybersecurity-engineer");
    record14.set("phase", 3);
    record14.set("phaseTitle", "Penetration Testing");
    record14.set("duration", "3 months");
    record14.set("skills", ["Penetration Testing", "Vulnerability Assessment", "Exploitation", "Metasploit"]);
    record14.set("resources", [{"name": "CEH Course", "type": "course", "url": "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/", "description": "Certified Ethical Hacker certification"}, {"name": "Metasploit Guide", "type": "documentation", "url": "https://docs.metasploit.com/", "description": "Metasploit framework documentation"}]);
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
    record15.set("careerSlug", "cybersecurity-engineer");
    record15.set("phase", 4);
    record15.set("phaseTitle", "Incident Response");
    record15.set("duration", "2 months");
    record15.set("skills", ["Incident Response", "Forensics", "Malware Analysis", "Threat Hunting"]);
    record15.set("resources", [{"name": "GCIH Course", "type": "course", "url": "https://www.giac.org/certification/certified-incident-handler-gcih", "description": "GIAC Incident Handler certification"}, {"name": "Forensics Guide", "type": "course", "url": "https://www.coursera.org/learn/digital-forensics", "description": "Digital forensics fundamentals"}]);
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
    record16.set("careerSlug", "cybersecurity-engineer");
    record16.set("phase", 5);
    record16.set("phaseTitle", "Cloud Security");
    record16.set("duration", "2 months");
    record16.set("skills", ["Cloud Security", "AWS Security", "Identity Management", "Compliance"]);
    record16.set("resources", [{"name": "AWS Security Specialty", "type": "course", "url": "https://aws.amazon.com/certification/certified-security-specialty/", "description": "AWS Security Specialty certification"}, {"name": "Cloud Security Course", "type": "course", "url": "https://www.coursera.org/learn/cloud-security", "description": "Cloud security fundamentals"}]);
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
    record17.set("careerSlug", "cybersecurity-engineer");
    record17.set("phase", 6);
    record17.set("phaseTitle", "Advanced Topics & Specialization");
    record17.set("duration", "2 months");
    record17.set("skills", ["Advanced Threats", "Threat Intelligence", "Security Architecture"]);
    record17.set("resources", [{"name": "CISSP Course", "type": "course", "url": "https://www.isc2.org/Certifications/CISSP", "description": "CISSP certification (requires 5 years experience)"}, {"name": "Threat Intelligence", "type": "course", "url": "https://www.coursera.org/learn/threat-intelligence", "description": "Threat intelligence fundamentals"}]);
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
    record18.set("careerSlug", "mobile-developer");
    record18.set("phase", 1);
    record18.set("phaseTitle", "Mobile Fundamentals");
    record18.set("duration", "2 months");
    record18.set("skills", ["Swift", "Kotlin", "Mobile UI/UX", "Git", "Xcode/Android Studio"]);
    record18.set("resources", [{"name": "Swift Official Guide", "type": "documentation", "url": "https://developer.apple.com/swift/", "description": "Official Swift programming language"}, {"name": "Kotlin Official Guide", "type": "documentation", "url": "https://kotlinlang.org/docs/", "description": "Official Kotlin documentation"}]);
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
    record19.set("careerSlug", "mobile-developer");
    record19.set("phase", 2);
    record19.set("phaseTitle", "iOS Development");
    record19.set("duration", "3 months");
    record19.set("skills", ["UIKit", "SwiftUI", "Core Data", "Networking", "Testing"]);
    record19.set("resources", [{"name": "iOS Development Course", "type": "course", "url": "https://www.udemy.com/course/ios-app-development-bootcamp/", "description": "Comprehensive iOS development course"}, {"name": "SwiftUI Tutorial", "type": "documentation", "url": "https://developer.apple.com/tutorials/swiftui", "description": "Official SwiftUI tutorial"}]);
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
    record20.set("phase", 3);
    record20.set("phaseTitle", "Android Development");
    record20.set("duration", "3 months");
    record20.set("skills", ["Android Framework", "Jetpack", "Room Database", "Networking", "Testing"]);
    record20.set("resources", [{"name": "Android Development Course", "type": "course", "url": "https://www.udacity.com/course/android-basics-nanodegree--nd803", "description": "Android basics nanodegree"}, {"name": "Android Documentation", "type": "documentation", "url": "https://developer.android.com/docs", "description": "Official Android documentation"}]);
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
    record21.set("phase", 4);
    record21.set("phaseTitle", "Advanced Mobile");
    record21.set("duration", "2 months");
    record21.set("skills", ["Performance Optimization", "Security", "Accessibility", "Analytics"]);
    record21.set("resources", [{"name": "Mobile Performance", "type": "course", "url": "https://www.coursera.org/learn/mobile-performance", "description": "Mobile app performance optimization"}, {"name": "Mobile Security", "type": "course", "url": "https://www.coursera.org/learn/mobile-security", "description": "Mobile app security"}]);
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
    record22.set("phase", 5);
    record22.set("phaseTitle", "Cross-Platform Development");
    record22.set("duration", "2 months");
    record22.set("skills", ["React Native", "Flutter", "Code Sharing", "Native Modules"]);
    record22.set("resources", [{"name": "React Native Documentation", "type": "documentation", "url": "https://reactnative.dev/docs/getting-started", "description": "React Native official documentation"}, {"name": "Flutter Documentation", "type": "documentation", "url": "https://flutter.dev/docs", "description": "Flutter official documentation"}]);
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
    record23.set("phase", 6);
    record23.set("phaseTitle", "Portfolio & App Store");
    record23.set("duration", "3 months");
    record23.set("skills", ["App Store Deployment", "Marketing", "Monetization", "Real-world Projects"]);
    record23.set("resources", [{"name": "App Store Guidelines", "type": "documentation", "url": "https://developer.apple.com/app-store/review/guidelines/", "description": "Apple App Store review guidelines"}, {"name": "Google Play Guidelines", "type": "documentation", "url": "https://play.google.com/about/developer-content-policy/", "description": "Google Play content policy"}]);
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
    record24.set("careerSlug", "solutions-architect");
    record24.set("phase", 1);
    record24.set("phaseTitle", "Technical Foundations");
    record24.set("duration", "2 months");
    record24.set("skills", ["System Design", "Architecture Patterns", "Databases", "Networking"]);
    record24.set("resources", [{"name": "System Design Interview", "type": "course", "url": "https://www.educative.io/courses/grokking-the-system-design-interview", "description": "System design interview preparation"}, {"name": "Architecture Patterns", "type": "book", "url": "https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/", "description": "Software architecture patterns"}]);
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
    record25.set("careerSlug", "solutions-architect");
    record25.set("phase", 2);
    record25.set("phaseTitle", "Cloud Platforms");
    record25.set("duration", "3 months");
    record25.set("skills", ["AWS", "GCP", "Azure", "Infrastructure as Code"]);
    record25.set("resources", [{"name": "AWS Solutions Architect", "type": "course", "url": "https://aws.amazon.com/certification/certified-solutions-architect-associate/", "description": "AWS Solutions Architect certification"}, {"name": "Cloud Architecture", "type": "course", "url": "https://www.coursera.org/learn/cloud-architecture", "description": "Cloud architecture fundamentals"}]);
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
    record26.set("careerSlug", "solutions-architect");
    record26.set("phase", 3);
    record26.set("phaseTitle", "Security & Compliance");
    record26.set("duration", "2 months");
    record26.set("skills", ["Security Architecture", "Compliance", "Encryption", "Access Control"]);
    record26.set("resources", [{"name": "Cloud Security", "type": "course", "url": "https://www.coursera.org/learn/cloud-security", "description": "Cloud security fundamentals"}, {"name": "Compliance Frameworks", "type": "course", "url": "https://www.coursera.org/learn/compliance", "description": "Compliance and regulations"}]);
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
    record27.set("careerSlug", "solutions-architect");
    record27.set("phase", 4);
    record27.set("phaseTitle", "Advanced Architecture");
    record27.set("duration", "3 months");
    record27.set("skills", ["Microservices", "Scalability", "Disaster Recovery", "Cost Optimization"]);
    record27.set("resources", [{"name": "Microservices Architecture", "type": "book", "url": "https://www.oreilly.com/library/view/building-microservices/9781491950340/", "description": "Building microservices book"}, {"name": "AWS Solutions Architect Professional", "type": "course", "url": "https://aws.amazon.com/certification/certified-solutions-architect-professional/", "description": "AWS Solutions Architect Professional"}]);
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
    record28.set("careerSlug", "solutions-architect");
    record28.set("phase", 5);
    record28.set("phaseTitle", "Business & Communication");
    record28.set("duration", "2 months");
    record28.set("skills", ["Business Acumen", "Communication", "Stakeholder Management", "Presentation"]);
    record28.set("resources", [{"name": "Business Communication", "type": "course", "url": "https://www.coursera.org/learn/business-communication", "description": "Business communication skills"}, {"name": "Technical Presentation", "type": "course", "url": "https://www.coursera.org/learn/presentation-skills", "description": "Technical presentation skills"}]);
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
    record29.set("careerSlug", "solutions-architect");
    record29.set("phase", 6);
    record29.set("phaseTitle", "Real-world Projects");
    record29.set("duration", "3 months");
    record29.set("skills", ["End-to-end Solutions", "Client Engagement", "Architecture Documentation"]);
    record29.set("resources", [{"name": "Architecture Documentation", "type": "documentation", "url": "https://www.archimate.org/", "description": "ArchiMate architecture modeling"}, {"name": "Case Studies", "type": "project", "url": "https://aws.amazon.com/solutions/case-studies/", "description": "AWS architecture case studies"}]);
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
