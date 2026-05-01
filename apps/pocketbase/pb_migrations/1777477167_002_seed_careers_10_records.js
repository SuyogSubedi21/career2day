/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
    record0.set("name", "Software Engineer");
    record0.set("slug", "software-engineer");
    record0.set("description", "Design, develop, and maintain software applications and systems");
    record0.set("overview", "Software engineers create and improve software applications used by millions. They work with various programming languages and frameworks to build scalable solutions.");
    record0.set("averageSalary", 120000);
    record0.set("salaryRange", "{'min': 80000, 'max': 180000}");
    record0.set("jobDemandOutlook", "High - Growing 13% through 2032");
    record0.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record0.set("roadmap", [{"phase": 1, "title": "Fundamentals", "duration": "3-6 months"}, {"phase": 2, "title": "Core Languages", "duration": "6-12 months"}, {"phase": 3, "title": "Web Development", "duration": "6-12 months"}]);
    record0.set("skillsRequired", ["JavaScript", "Python", "Java", "Git", "SQL", "REST APIs"]);
    record0.set("salaryInsights", "{'entry': 80000, 'mid': 120000, 'senior': 180000}");
    record0.set("relatedCareers", ["DevOps Engineer", "Full Stack Developer", "Mobile Developer"]);
    record0.set("entrySalary", 80000);
    record0.set("midSalary", 120000);
    record0.set("seniorSalary", 180000);
    record0.set("jobDemand", "High");
    record0.set("topStates", ["California", "New York", "Washington"]);
    record0.set("technicalSkills", ["JavaScript", "Python", "Java", "C++", "Go", "Rust"]);
    record0.set("softSkills", ["Problem Solving", "Communication", "Teamwork", "Time Management"]);
    record0.set("tools", ["Git", "Docker", "Jenkins", "VS Code", "IntelliJ IDEA"]);
    record0.set("faqs", [{"question": "What languages should I learn first?", "answer": "Start with Python or JavaScript as they're beginner-friendly and widely used."}, {"question": "How long does it take to become a software engineer?", "answer": "Typically 6-12 months of focused learning for entry-level positions."}]);
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
    record1.set("name", "Data Scientist");
    record1.set("slug", "data-scientist");
    record1.set("description", "Analyze complex data sets to help organizations make informed decisions");
    record1.set("overview", "Data scientists use statistical analysis, machine learning, and programming to extract insights from data. They bridge the gap between data engineering and business strategy.");
    record1.set("averageSalary", 130000);
    record1.set("salaryRange", "{'min': 90000, 'max': 200000}");
    record1.set("jobDemandOutlook", "Very High - Growing 36% through 2032");
    record1.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Illinois"]);
    record1.set("roadmap", [{"phase": 1, "title": "Statistics & Math", "duration": "3-6 months"}, {"phase": 2, "title": "Python & SQL", "duration": "6-12 months"}, {"phase": 3, "title": "Machine Learning", "duration": "6-12 months"}]);
    record1.set("skillsRequired", ["Python", "SQL", "Statistics", "Machine Learning", "Data Visualization", "R"]);
    record1.set("salaryInsights", "{'entry': 90000, 'mid': 130000, 'senior': 200000}");
    record1.set("relatedCareers", ["Machine Learning Engineer", "Data Engineer", "Analytics Engineer"]);
    record1.set("entrySalary", 90000);
    record1.set("midSalary", 130000);
    record1.set("seniorSalary", 200000);
    record1.set("jobDemand", "Very High");
    record1.set("topStates", ["California", "New York", "Washington"]);
    record1.set("technicalSkills", ["Python", "R", "SQL", "TensorFlow", "PyTorch", "Scikit-learn"]);
    record1.set("softSkills", ["Data Storytelling", "Critical Thinking", "Communication", "Business Acumen"]);
    record1.set("tools", ["Jupyter Notebook", "Pandas", "Matplotlib", "Tableau", "Power BI"]);
    record1.set("faqs", [{"question": "Do I need a PhD to become a data scientist?", "answer": "No, a bachelor's degree with relevant skills is sufficient for entry-level positions."}, {"question": "What's the difference between data scientist and data engineer?", "answer": "Data scientists focus on analysis and modeling, while data engineers build the infrastructure."}]);
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
    record2.set("name", "DevOps Engineer");
    record2.set("slug", "devops-engineer");
    record2.set("description", "Manage infrastructure, deployment pipelines, and system reliability");
    record2.set("overview", "DevOps engineers bridge development and operations, automating deployment processes and ensuring system reliability. They work with cloud platforms and containerization technologies.");
    record2.set("averageSalary", 125000);
    record2.set("salaryRange", "{'min': 85000, 'max': 190000}");
    record2.set("jobDemandOutlook", "High - Growing 15% through 2032");
    record2.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Colorado"]);
    record2.set("roadmap", [{"phase": 1, "title": "Linux & Networking", "duration": "3-6 months"}, {"phase": 2, "title": "Cloud Platforms", "duration": "6-12 months"}, {"phase": 3, "title": "CI/CD & Automation", "duration": "6-12 months"}]);
    record2.set("skillsRequired", ["Linux", "Docker", "Kubernetes", "AWS/Azure/GCP", "CI/CD", "Infrastructure as Code"]);
    record2.set("salaryInsights", "{'entry': 85000, 'mid': 125000, 'senior': 190000}");
    record2.set("relatedCareers", ["Cloud Architect", "Site Reliability Engineer", "Infrastructure Engineer"]);
    record2.set("entrySalary", 85000);
    record2.set("midSalary", 125000);
    record2.set("seniorSalary", 190000);
    record2.set("jobDemand", "High");
    record2.set("topStates", ["California", "New York", "Washington"]);
    record2.set("technicalSkills", ["Linux", "Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins"]);
    record2.set("softSkills", ["Problem Solving", "Communication", "Collaboration", "Documentation"]);
    record2.set("tools", ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Terraform"]);
    record2.set("faqs", [{"question": "What's the difference between DevOps and SRE?", "answer": "DevOps is a culture/practice, while SRE is a specific implementation of those principles."}, {"question": "Which cloud platform should I learn first?", "answer": "AWS is the most popular, but Azure and GCP are equally valuable."}]);
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
    record3.set("name", "Full Stack Developer");
    record3.set("slug", "full-stack-developer");
    record3.set("description", "Build complete web applications from frontend to backend");
    record3.set("overview", "Full stack developers work on both client-side and server-side of web applications. They have expertise in multiple technologies and can handle entire project development.");
    record3.set("averageSalary", 115000);
    record3.set("salaryRange", "{'min': 75000, 'max': 170000}");
    record3.set("jobDemandOutlook", "High - Growing 13% through 2032");
    record3.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record3.set("roadmap", [{"phase": 1, "title": "Frontend Basics", "duration": "3-6 months"}, {"phase": 2, "title": "Backend Development", "duration": "6-12 months"}, {"phase": 3, "title": "Databases & Deployment", "duration": "6-12 months"}]);
    record3.set("skillsRequired", ["JavaScript", "React/Vue/Angular", "Node.js", "SQL", "HTML/CSS", "REST APIs"]);
    record3.set("salaryInsights", "{'entry': 75000, 'mid': 115000, 'senior': 170000}");
    record3.set("relatedCareers", ["Frontend Developer", "Backend Developer", "Software Engineer"]);
    record3.set("entrySalary", 75000);
    record3.set("midSalary", 115000);
    record3.set("seniorSalary", 170000);
    record3.set("jobDemand", "High");
    record3.set("topStates", ["California", "New York", "Washington"]);
    record3.set("technicalSkills", ["JavaScript", "React", "Node.js", "MongoDB", "PostgreSQL", "Express"]);
    record3.set("softSkills", ["Problem Solving", "Communication", "Adaptability", "Teamwork"]);
    record3.set("tools", ["VS Code", "Git", "Postman", "MongoDB Compass", "Chrome DevTools"]);
    record3.set("faqs", [{"question": "Should I learn frontend or backend first?", "answer": "Start with frontend (HTML/CSS/JavaScript) as it's more visual and motivating."}, {"question": "What's the best tech stack to learn?", "answer": "MERN (MongoDB, Express, React, Node.js) is popular and in-demand."}]);
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
    record4.set("name", "Mobile Developer");
    record4.set("slug", "mobile-developer");
    record4.set("description", "Create applications for mobile devices (iOS and Android)");
    record4.set("overview", "Mobile developers build applications for smartphones and tablets. They can specialize in native development (Swift/Kotlin) or cross-platform frameworks (React Native/Flutter).");
    record4.set("averageSalary", 110000);
    record4.set("salaryRange", "{'min': 70000, 'max': 160000}");
    record4.set("jobDemandOutlook", "High - Growing 13% through 2032");
    record4.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record4.set("roadmap", [{"phase": 1, "title": "Mobile Fundamentals", "duration": "3-6 months"}, {"phase": 2, "title": "Platform-Specific Development", "duration": "6-12 months"}, {"phase": 3, "title": "Advanced Features & Deployment", "duration": "6-12 months"}]);
    record4.set("skillsRequired", ["Swift/Kotlin", "React Native/Flutter", "JavaScript", "Mobile UI/UX", "APIs", "Git"]);
    record4.set("salaryInsights", "{'entry': 70000, 'mid': 110000, 'senior': 160000}");
    record4.set("relatedCareers", ["Frontend Developer", "Software Engineer", "Game Developer"]);
    record4.set("entrySalary", 70000);
    record4.set("midSalary", 110000);
    record4.set("seniorSalary", 160000);
    record4.set("jobDemand", "High");
    record4.set("topStates", ["California", "New York", "Washington"]);
    record4.set("technicalSkills", ["Swift", "Kotlin", "React Native", "Flutter", "JavaScript", "Java"]);
    record4.set("softSkills", ["User Experience Thinking", "Problem Solving", "Communication", "Attention to Detail"]);
    record4.set("tools", ["Xcode", "Android Studio", "VS Code", "Git", "Firebase"]);
    record4.set("faqs", [{"question": "Should I learn native or cross-platform development?", "answer": "Start with cross-platform (React Native/Flutter) for faster learning and broader job market."}, {"question": "What's the job market like for mobile developers?", "answer": "Strong demand, especially for React Native and Flutter developers."}]);
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
    record5.set("name", "Cloud Architect");
    record5.set("slug", "cloud-architect");
    record5.set("description", "Design and manage cloud infrastructure solutions for organizations");
    record5.set("overview", "Cloud architects design scalable, secure, and cost-effective cloud solutions. They work with AWS, Azure, or GCP to build enterprise-level infrastructure.");
    record5.set("averageSalary", 145000);
    record5.set("salaryRange", "{'min': 100000, 'max': 220000}");
    record5.set("jobDemandOutlook", "Very High - Growing 20% through 2032");
    record5.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Virginia"]);
    record5.set("roadmap", [{"phase": 1, "title": "Cloud Fundamentals", "duration": "3-6 months"}, {"phase": 2, "title": "Cloud Platform Expertise", "duration": "6-12 months"}, {"phase": 3, "title": "Architecture & Design Patterns", "duration": "6-12 months"}]);
    record5.set("skillsRequired", ["AWS/Azure/GCP", "Infrastructure as Code", "Networking", "Security", "Databases", "Cost Optimization"]);
    record5.set("salaryInsights", "{'entry': 100000, 'mid': 145000, 'senior': 220000}");
    record5.set("relatedCareers", ["DevOps Engineer", "Solutions Architect", "Infrastructure Engineer"]);
    record5.set("entrySalary", 100000);
    record5.set("midSalary", 145000);
    record5.set("seniorSalary", 220000);
    record5.set("jobDemand", "Very High");
    record5.set("topStates", ["California", "New York", "Washington"]);
    record5.set("technicalSkills", ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Networking"]);
    record5.set("softSkills", ["Strategic Thinking", "Communication", "Leadership", "Business Acumen"]);
    record5.set("tools", ["AWS Console", "Terraform", "CloudFormation", "Kubernetes", "Monitoring Tools"]);
    record5.set("faqs", [{"question": "What certifications should I get?", "answer": "AWS Solutions Architect, Azure Administrator, or GCP Professional Cloud Architect."}, {"question": "Do I need DevOps experience first?", "answer": "Yes, DevOps experience is typically a prerequisite for cloud architecture roles."}]);
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
    record6.set("name", "Machine Learning Engineer");
    record6.set("slug", "machine-learning-engineer");
    record6.set("description", "Build and deploy machine learning models for real-world applications");
    record6.set("overview", "ML engineers develop, train, and deploy machine learning models. They combine software engineering with data science to create production-ready AI solutions.");
    record6.set("averageSalary", 140000);
    record6.set("salaryRange", "{'min': 95000, 'max': 210000}");
    record6.set("jobDemandOutlook", "Very High - Growing 36% through 2032");
    record6.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record6.set("roadmap", [{"phase": 1, "title": "Python & Math Foundations", "duration": "3-6 months"}, {"phase": 2, "title": "Machine Learning Algorithms", "duration": "6-12 months"}, {"phase": 3, "title": "Model Deployment & MLOps", "duration": "6-12 months"}]);
    record6.set("skillsRequired", ["Python", "TensorFlow/PyTorch", "SQL", "Statistics", "MLOps", "Cloud Platforms"]);
    record6.set("salaryInsights", "{'entry': 95000, 'mid': 140000, 'senior': 210000}");
    record6.set("relatedCareers", ["Data Scientist", "AI Engineer", "Research Scientist"]);
    record6.set("entrySalary", 95000);
    record6.set("midSalary", 140000);
    record6.set("seniorSalary", 210000);
    record6.set("jobDemand", "Very High");
    record6.set("topStates", ["California", "New York", "Washington"]);
    record6.set("technicalSkills", ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "SQL", "Spark"]);
    record6.set("softSkills", ["Problem Solving", "Research Mindset", "Communication", "Experimentation"]);
    record6.set("tools", ["Jupyter Notebook", "TensorFlow", "PyTorch", "MLflow", "Kubernetes"]);
    record6.set("faqs", [{"question": "What's the difference between ML Engineer and Data Scientist?", "answer": "ML Engineers focus on production and deployment, while Data Scientists focus on analysis and experimentation."}, {"question": "Do I need a PhD?", "answer": "No, but strong math and programming skills are essential."}]);
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
    record7.set("name", "Frontend Developer");
    record7.set("slug", "frontend-developer");
    record7.set("description", "Build user interfaces and interactive web applications");
    record7.set("overview", "Frontend developers create the visual and interactive parts of web applications. They work with HTML, CSS, and JavaScript frameworks to build responsive user experiences.");
    record7.set("averageSalary", 105000);
    record7.set("salaryRange", "{'min': 65000, 'max': 155000}");
    record7.set("jobDemandOutlook", "High - Growing 13% through 2032");
    record7.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record7.set("roadmap", [{"phase": 1, "title": "HTML, CSS & JavaScript", "duration": "3-6 months"}, {"phase": 2, "title": "Frontend Frameworks", "duration": "6-12 months"}, {"phase": 3, "title": "Advanced Concepts & Performance", "duration": "6-12 months"}]);
    record7.set("skillsRequired", ["HTML", "CSS", "JavaScript", "React/Vue/Angular", "Responsive Design", "Git"]);
    record7.set("salaryInsights", "{'entry': 65000, 'mid': 105000, 'senior': 155000}");
    record7.set("relatedCareers", ["Full Stack Developer", "UI/UX Designer", "Web Developer"]);
    record7.set("entrySalary", 65000);
    record7.set("midSalary", 105000);
    record7.set("seniorSalary", 155000);
    record7.set("jobDemand", "High");
    record7.set("topStates", ["California", "New York", "Washington"]);
    record7.set("technicalSkills", ["JavaScript", "React", "Vue", "Angular", "TypeScript", "CSS"]);
    record7.set("softSkills", ["Attention to Detail", "Communication", "Problem Solving", "Creativity"]);
    record7.set("tools", ["VS Code", "Chrome DevTools", "Git", "Webpack", "Figma"]);
    record7.set("faqs", [{"question": "Which framework should I learn first?", "answer": "React is the most popular and has the largest job market."}, {"question": "Do I need to know backend development?", "answer": "Not required, but understanding APIs and backend basics is helpful."}]);
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
    record8.set("name", "Backend Developer");
    record8.set("slug", "backend-developer");
    record8.set("description", "Build server-side logic and APIs for web applications");
    record8.set("overview", "Backend developers create the server-side logic that powers web applications. They work with databases, APIs, and server infrastructure to handle business logic.");
    record8.set("averageSalary", 115000);
    record8.set("salaryRange", "{'min': 75000, 'max': 170000}");
    record8.set("jobDemandOutlook", "High - Growing 13% through 2032");
    record8.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record8.set("roadmap", [{"phase": 1, "title": "Programming Fundamentals", "duration": "3-6 months"}, {"phase": 2, "title": "Backend Frameworks & Databases", "duration": "6-12 months"}, {"phase": 3, "title": "APIs & System Design", "duration": "6-12 months"}]);
    record8.set("skillsRequired", ["Python/Java/Node.js", "SQL", "REST APIs", "Databases", "Git", "System Design"]);
    record8.set("salaryInsights", "{'entry': 75000, 'mid': 115000, 'senior': 170000}");
    record8.set("relatedCareers", ["Full Stack Developer", "Software Engineer", "DevOps Engineer"]);
    record8.set("entrySalary", 75000);
    record8.set("midSalary", 115000);
    record8.set("seniorSalary", 170000);
    record8.set("jobDemand", "High");
    record8.set("topStates", ["California", "New York", "Washington"]);
    record8.set("technicalSkills", ["Python", "Java", "Node.js", "PostgreSQL", "MongoDB", "Redis"]);
    record8.set("softSkills", ["Problem Solving", "Communication", "System Thinking", "Debugging"]);
    record8.set("tools", ["Git", "Postman", "Docker", "Database Tools", "VS Code"]);
    record8.set("faqs", [{"question": "What language should I learn for backend?", "answer": "Python (Django/Flask) or Node.js are great starting points."}, {"question": "How important is database knowledge?", "answer": "Very important - SQL and database design are core skills."}]);
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
    record9.set("name", "UI/UX Designer");
    record9.set("slug", "ui-ux-designer");
    record9.set("description", "Design user interfaces and experiences for digital products");
    record9.set("overview", "UI/UX designers create intuitive and visually appealing interfaces for applications. They combine user research, design principles, and prototyping to build great user experiences.");
    record9.set("averageSalary", 100000);
    record9.set("salaryRange", "{'min': 60000, 'max': 150000}");
    record9.set("jobDemandOutlook", "High - Growing 13% through 2032");
    record9.set("topPayingStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record9.set("roadmap", [{"phase": 1, "title": "Design Fundamentals", "duration": "3-6 months"}, {"phase": 2, "title": "Tools & Prototyping", "duration": "6-12 months"}, {"phase": 3, "title": "User Research & Advanced Design", "duration": "6-12 months"}]);
    record9.set("skillsRequired", ["Figma", "User Research", "Wireframing", "Prototyping", "Design Systems", "Communication"]);
    record9.set("salaryInsights", "{'entry': 60000, 'mid': 100000, 'senior': 150000}");
    record9.set("relatedCareers", ["Product Designer", "Interaction Designer", "Frontend Developer"]);
    record9.set("entrySalary", 60000);
    record9.set("midSalary", 100000);
    record9.set("seniorSalary", 150000);
    record9.set("jobDemand", "High");
    record9.set("topStates", ["California", "New York", "Washington"]);
    record9.set("technicalSkills", ["Figma", "Adobe XD", "Sketch", "Prototyping", "HTML/CSS basics"]);
    record9.set("softSkills", ["Empathy", "Communication", "Creativity", "Problem Solving"]);
    record9.set("tools", ["Figma", "Adobe Creative Suite", "Sketch", "InVision", "Miro"]);
    record9.set("faqs", [{"question": "Do I need to know how to code?", "answer": "Not required, but basic HTML/CSS knowledge is helpful."}, {"question": "What's the difference between UI and UX?", "answer": "UI is visual design, UX is the overall user experience and interaction."}]);
  try {
    app.save(record9);
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
