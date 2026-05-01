/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
    record0.set("name", "Frontend Developer");
    record0.set("slug", "frontend-developer");
    record0.set("description", "Frontend developers create user interfaces and interactive web applications using HTML, CSS, and JavaScript. They focus on user experience, performance, and responsive design.");
    record0.set("overview", "Frontend development is the art of creating beautiful, functional, and performant user interfaces. Frontend developers work with modern frameworks like React, Vue, and Angular to build dynamic web applications that users interact with directly.");
    record0.set("averageSalary", 95000);
    record0.set("salaryRange", "{'entry': 60000, 'mid': 95000, 'senior': 140000}");
    record0.set("jobDemandOutlook", "High demand with 13% growth expected through 2032. Remote opportunities abundant.");
    record0.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record0.set("roadmap", [{"stage": "Fundamentals", "duration": "3-4 months", "topics": ["HTML5", "CSS3", "JavaScript ES6+", "DOM manipulation", "Git basics"]}, {"stage": "Intermediate", "duration": "4-6 months", "topics": ["React fundamentals", "State management", "API integration", "Responsive design", "Testing basics"]}, {"stage": "Advanced", "duration": "6-8 months", "topics": ["Advanced React patterns", "Performance optimization", "TypeScript", "Web accessibility", "Build tools"]}, {"stage": "Expert", "duration": "Ongoing", "topics": ["System design", "Architecture patterns", "Leadership", "Mentoring", "Emerging technologies"]}]);
    record0.set("skillsRequired", ["JavaScript", "React", "CSS", "HTML", "TypeScript", "Git", "REST APIs", "Testing", "Performance optimization", "Responsive design"]);
    record0.set("salaryInsights", "{'entry': '60-75k for junior developers with bootcamp or degree', 'mid': '90-110k for developers with 3-5 years experience', 'senior': '130-180k for senior developers with 7+ years and leadership'}");
    record0.set("relatedCareers", ["Full Stack Developer", "Backend Developer", "UX/UI Designer"]);
    record0.set("entrySalary", 60000);
    record0.set("midSalary", 95000);
    record0.set("seniorSalary", 140000);
    record0.set("jobDemand", "High");
    record0.set("topStates", ["California", "New York", "Washington"]);
    record0.set("technicalSkills", ["React", "Vue", "Angular", "TypeScript", "Webpack", "Jest", "Cypress"]);
    record0.set("softSkills", ["Communication", "Problem-solving", "Attention to detail", "Collaboration", "Time management"]);
    record0.set("tools", ["VS Code", "Chrome DevTools", "Figma", "Git", "Webpack", "npm"]);
    record0.set("faqs", [{"question": "What's the best way to learn frontend development?", "answer": "Start with HTML/CSS/JavaScript fundamentals, then learn a framework like React. Build projects to practice."}, {"question": "Is a degree required?", "answer": "No, many successful frontend developers are self-taught or bootcamp graduates. Portfolio matters more than degree."}, {"question": "How long to become job-ready?", "answer": "6-12 months of dedicated learning with consistent practice and projects."}]);
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
    record1.set("description", "Backend developers build server-side logic, databases, and APIs that power web applications. They focus on performance, security, and scalability.");
    record1.set("overview", "Backend development involves creating the infrastructure and logic that makes web applications work. Backend developers work with databases, APIs, and server-side frameworks to handle business logic, data processing, and system integration.");
    record1.set("averageSalary", 105000);
    record1.set("salaryRange", "{'entry': 65000, 'mid': 105000, 'senior': 155000}");
    record1.set("jobDemandOutlook", "Very high demand with 15% growth expected. Microservices and cloud adoption driving growth.");
    record1.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record1.set("roadmap", [{"stage": "Fundamentals", "duration": "3-4 months", "topics": ["Programming language (Python/Node.js/Java)", "SQL basics", "HTTP/REST", "Git", "Command line"]}, {"stage": "Intermediate", "duration": "4-6 months", "topics": ["Database design", "API development", "Authentication", "Caching", "Testing"]}, {"stage": "Advanced", "duration": "6-8 months", "topics": ["Microservices", "System design", "DevOps basics", "Security", "Performance tuning"]}, {"stage": "Expert", "duration": "Ongoing", "topics": ["Architecture design", "Distributed systems", "Leadership", "Cloud platforms", "Advanced patterns"]}]);
    record1.set("skillsRequired", ["Python/Node.js/Java", "SQL", "REST APIs", "Database design", "Git", "Docker", "Testing", "Authentication", "Caching", "System design"]);
    record1.set("salaryInsights", "{'entry': '65-80k for junior developers', 'mid': '100-120k for developers with 3-5 years', 'senior': '140-200k for senior developers with 7+ years'}");
    record1.set("relatedCareers", ["Full Stack Developer", "DevOps Engineer", "Database Administrator"]);
    record1.set("entrySalary", 65000);
    record1.set("midSalary", 105000);
    record1.set("seniorSalary", 155000);
    record1.set("jobDemand", "Very High");
    record1.set("topStates", ["California", "New York", "Washington"]);
    record1.set("technicalSkills", ["Python", "Node.js", "Java", "PostgreSQL", "MongoDB", "Docker", "Kubernetes"]);
    record1.set("softSkills", ["Problem-solving", "Communication", "System thinking", "Collaboration", "Debugging"]);
    record1.set("tools", ["Postman", "Git", "Docker", "Jenkins", "PostgreSQL", "MongoDB"]);
    record1.set("faqs", [{"question": "Which language should I learn first?", "answer": "Python is beginner-friendly, Node.js if you know JavaScript, Java for enterprise. Choose based on job market in your area."}, {"question": "How important is database knowledge?", "answer": "Very important. Strong SQL and database design skills are essential for backend development."}, {"question": "Do I need to know DevOps?", "answer": "Basic DevOps knowledge (Docker, CI/CD) is increasingly important. Not required initially but valuable."}]);
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
    record2.set("description", "Full stack developers work on both frontend and backend of web applications. They understand the entire development process from database to user interface.");
    record2.set("overview", "Full stack development combines frontend and backend skills to build complete web applications. Full stack developers can work across the entire technology stack, making them versatile and valuable in startups and smaller teams.");
    record2.set("averageSalary", 100000);
    record2.set("salaryRange", "{'entry': 62000, 'mid': 100000, 'senior': 150000}");
    record2.set("jobDemandOutlook", "High demand, especially in startups. 12% growth expected through 2032.");
    record2.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record2.set("roadmap", [{"stage": "Frontend Basics", "duration": "3-4 months", "topics": ["HTML/CSS", "JavaScript", "React basics", "Responsive design"]}, {"stage": "Backend Basics", "duration": "3-4 months", "topics": ["Node.js/Python", "Express/Flask", "REST APIs", "SQL basics"]}, {"stage": "Integration", "duration": "4-6 months", "topics": ["Full-stack architecture", "Authentication", "Deployment", "DevOps basics", "Testing"]}, {"stage": "Advanced", "duration": "Ongoing", "topics": ["System design", "Microservices", "Cloud platforms", "Performance optimization", "Leadership"]}]);
    record2.set("skillsRequired", ["JavaScript", "React", "Node.js/Python", "SQL", "REST APIs", "Git", "Docker", "Testing", "Authentication", "Deployment"]);
    record2.set("salaryInsights", "{'entry': '62-75k for junior full stack developers', 'mid': '95-115k for developers with 3-5 years', 'senior': '140-180k for senior developers with 7+ years'}");
    record2.set("relatedCareers", ["Frontend Developer", "Backend Developer", "DevOps Engineer"]);
    record2.set("entrySalary", 62000);
    record2.set("midSalary", 100000);
    record2.set("seniorSalary", 150000);
    record2.set("jobDemand", "High");
    record2.set("topStates", ["California", "New York", "Washington"]);
    record2.set("technicalSkills", ["React", "Node.js", "PostgreSQL", "Docker", "Git", "REST APIs", "TypeScript"]);
    record2.set("softSkills", ["Versatility", "Problem-solving", "Communication", "Time management", "Adaptability"]);
    record2.set("tools", ["VS Code", "Git", "Docker", "Postman", "PostgreSQL", "npm"]);
    record2.set("faqs", [{"question": "Is full stack development harder than specializing?", "answer": "It requires broader knowledge but less depth in each area. Good for startups, but specialization pays more at large companies."}, {"question": "Should I learn frontend or backend first?", "answer": "Start with frontend (HTML/CSS/JavaScript) as it's more visual and motivating, then move to backend."}, {"question": "Can I transition from full stack to specialist?", "answer": "Yes, many full stack developers specialize later. Your broad knowledge helps you understand the full picture."}]);
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
    record3.set("name", "DevOps Engineer");
    record3.set("slug", "devops-engineer");
    record3.set("description", "DevOps engineers automate infrastructure, manage deployments, and ensure system reliability. They bridge development and operations teams.");
    record3.set("overview", "DevOps engineering focuses on automating and streamlining the software development and deployment process. DevOps engineers use tools and practices to enable continuous integration, continuous deployment, and infrastructure automation.");
    record3.set("averageSalary", 115000);
    record3.set("salaryRange", "{'entry': 70000, 'mid': 115000, 'senior': 165000}");
    record3.set("jobDemandOutlook", "Very high demand with 15% growth. Cloud adoption and containerization driving growth.");
    record3.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record3.set("roadmap", [{"stage": "Linux Fundamentals", "duration": "2-3 months", "topics": ["Linux commands", "Shell scripting", "File systems", "User management", "Networking basics"]}, {"stage": "Containerization", "duration": "3-4 months", "topics": ["Docker", "Container concepts", "Image building", "Docker Compose", "Container registry"]}, {"stage": "Orchestration", "duration": "4-6 months", "topics": ["Kubernetes", "Deployment", "Services", "Networking", "Storage"]}, {"stage": "Advanced", "duration": "Ongoing", "topics": ["CI/CD pipelines", "Infrastructure as Code", "Monitoring", "Security", "Cloud platforms"]}]);
    record3.set("skillsRequired", ["Linux", "Docker", "Kubernetes", "CI/CD", "Infrastructure as Code", "Cloud platforms", "Monitoring", "Networking", "Scripting", "Git"]);
    record3.set("salaryInsights", "{'entry': '70-85k for junior DevOps engineers', 'mid': '110-130k for engineers with 3-5 years', 'senior': '150-200k for senior engineers with 7+ years'}");
    record3.set("relatedCareers", ["Backend Developer", "Cloud Architect", "Solutions Architect"]);
    record3.set("entrySalary", 70000);
    record3.set("midSalary", 115000);
    record3.set("seniorSalary", 165000);
    record3.set("jobDemand", "Very High");
    record3.set("topStates", ["California", "New York", "Washington"]);
    record3.set("technicalSkills", ["Docker", "Kubernetes", "Terraform", "Jenkins", "AWS", "Python", "Bash"]);
    record3.set("softSkills", ["Problem-solving", "Communication", "Attention to detail", "Collaboration", "Continuous learning"]);
    record3.set("tools", ["Docker", "Kubernetes", "Terraform", "Jenkins", "Prometheus", "ELK Stack"]);
    record3.set("faqs", [{"question": "Do I need to be a developer first?", "answer": "Not required, but helpful. Many DevOps engineers come from system administration backgrounds."}, {"question": "What's the most important skill?", "answer": "Linux and scripting are fundamental. Docker and Kubernetes are increasingly essential."}, {"question": "How long to become job-ready?", "answer": "6-12 months with focused learning and hands-on practice with tools."}]);
  try {
    app.save(record3);
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
