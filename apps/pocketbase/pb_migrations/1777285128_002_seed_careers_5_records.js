/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
    record0.set("name", "Frontend Developer");
    record0.set("slug", "frontend-developer");
    record0.set("description", "Build interactive user interfaces and web applications using modern JavaScript frameworks and tools");
    record0.set("overview", "Frontend developers create the visual and interactive parts of web applications. They work with HTML, CSS, JavaScript, and frameworks like React, Vue, or Angular to build responsive, user-friendly interfaces.");
    record0.set("entrySalary", 65000);
    record0.set("midSalary", 95000);
    record0.set("seniorSalary", 140000);
    record0.set("jobDemand", "High");
    record0.set("salaryRange", "{'min': 65000, 'max': 140000, 'currency': 'USD'}");
    record0.set("topStates", ["California", "New York", "Texas", "Washington", "Massachusetts"]);
    record0.set("technicalSkills", ["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "TypeScript", "Responsive Design", "Web Performance"]);
    record0.set("softSkills", ["Communication", "Problem Solving", "Attention to Detail", "Collaboration", "Time Management"]);
    record0.set("tools", ["Git", "Webpack", "npm/yarn", "Chrome DevTools", "Figma", "VS Code"]);
    record0.set("faqs", [{"question": "What is the best way to learn React?", "answer": "Start with official React documentation, build small projects, and practice with real-world examples."}, {"question": "How important is CSS knowledge?", "answer": "Very important. Strong CSS skills are essential for creating responsive and visually appealing interfaces."}, {"question": "What portfolio projects should I build?", "answer": "Build projects like a todo app, weather app, e-commerce site, and a social media clone."}]);
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
    record1.set("description", "Develop server-side logic, databases, and APIs that power web and mobile applications");
    record1.set("overview", "Backend developers build the server-side infrastructure that powers applications. They work with databases, APIs, authentication, and business logic using languages like Python, Node.js, Java, or Go.");
    record1.set("entrySalary", 70000);
    record1.set("midSalary", 105000);
    record1.set("seniorSalary", 155000);
    record1.set("jobDemand", "High");
    record1.set("salaryRange", "{'min': 70000, 'max': 155000, 'currency': 'USD'}");
    record1.set("topStates", ["California", "New York", "Washington", "Texas", "Colorado"]);
    record1.set("technicalSkills", ["Node.js", "Python", "Java", "SQL", "MongoDB", "REST APIs", "Authentication", "System Design"]);
    record1.set("softSkills", ["Problem Solving", "Debugging", "Documentation", "Collaboration", "Analytical Thinking"]);
    record1.set("tools", ["Git", "Docker", "Postman", "PostgreSQL", "MongoDB", "VS Code"]);
    record1.set("faqs", [{"question": "What database should I learn first?", "answer": "Start with SQL (PostgreSQL) to understand relational databases, then learn NoSQL (MongoDB) for flexibility."}, {"question": "How do I design scalable APIs?", "answer": "Follow REST principles, use proper HTTP methods, implement caching, and design for horizontal scaling."}, {"question": "What is the most important skill?", "answer": "System design and understanding how to build scalable, maintainable systems is crucial."}]);
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
    record2.set("description", "Build complete web applications from frontend interfaces to backend servers and databases");
    record2.set("overview", "Full stack developers work on both frontend and backend of applications. They have a comprehensive understanding of the entire development process and can build complete applications independently.");
    record2.set("entrySalary", 75000);
    record2.set("midSalary", 110000);
    record2.set("seniorSalary", 160000);
    record2.set("jobDemand", "Very High");
    record2.set("salaryRange", "{'min': 75000, 'max': 160000, 'currency': 'USD'}");
    record2.set("topStates", ["California", "New York", "Texas", "Washington", "Massachusetts"]);
    record2.set("technicalSkills", ["React", "Node.js", "JavaScript", "SQL", "MongoDB", "REST APIs", "HTML/CSS", "System Design"]);
    record2.set("softSkills", ["Communication", "Project Management", "Problem Solving", "Adaptability", "Leadership"]);
    record2.set("tools", ["Git", "Docker", "npm/yarn", "PostgreSQL", "MongoDB", "VS Code"]);
    record2.set("faqs", [{"question": "Should I learn frontend or backend first?", "answer": "Start with frontend (HTML/CSS/JavaScript) as it is more visual and motivating, then move to backend."}, {"question": "What is the best tech stack?", "answer": "MERN (MongoDB, Express, React, Node.js) is popular, but choose based on project requirements."}, {"question": "How long does it take to become a full stack developer?", "answer": "Typically 12-18 months of dedicated learning and practice to reach junior level proficiency."}]);
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
    record3.set("description", "Manage infrastructure, deployment pipelines, and system reliability for applications");
    record3.set("overview", "DevOps engineers bridge development and operations, focusing on automation, infrastructure, and deployment. They work with cloud platforms, containerization, CI/CD pipelines, and monitoring systems.");
    record3.set("entrySalary", 80000);
    record3.set("midSalary", 120000);
    record3.set("seniorSalary", 170000);
    record3.set("jobDemand", "Very High");
    record3.set("salaryRange", "{'min': 80000, 'max': 170000, 'currency': 'USD'}");
    record3.set("topStates", ["California", "Washington", "New York", "Texas", "Colorado"]);
    record3.set("technicalSkills", ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux", "Terraform", "Monitoring", "Networking"]);
    record3.set("softSkills", ["Problem Solving", "Communication", "Documentation", "Attention to Detail", "Continuous Learning"]);
    record3.set("tools", ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Terraform", "Prometheus"]);
    record3.set("faqs", [{"question": "Do I need to be a developer first?", "answer": "Not necessarily, but understanding application development helps. Strong Linux and scripting skills are essential."}, {"question": "What cloud platform should I learn?", "answer": "AWS is most popular, but also learn GCP and Azure. Focus on core concepts that transfer between platforms."}, {"question": "What is the most important skill?", "answer": "Automation and infrastructure-as-code are critical. Learn to automate everything."}]);
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
    record4.set("name", "Data Scientist");
    record4.set("slug", "data-scientist");
    record4.set("description", "Extract insights from data and build machine learning models to solve business problems");
    record4.set("overview", "Data scientists analyze data, build predictive models, and create data-driven solutions. They combine statistics, programming, and domain expertise to extract actionable insights from complex datasets.");
    record4.set("entrySalary", 85000);
    record4.set("midSalary", 125000);
    record4.set("seniorSalary", 180000);
    record4.set("jobDemand", "High");
    record4.set("salaryRange", "{'min': 85000, 'max': 180000, 'currency': 'USD'}");
    record4.set("topStates", ["California", "New York", "Washington", "Massachusetts", "Texas"]);
    record4.set("technicalSkills", ["Python", "SQL", "Machine Learning", "Statistics", "TensorFlow", "Pandas", "Data Visualization", "Deep Learning"]);
    record4.set("softSkills", ["Communication", "Critical Thinking", "Problem Solving", "Storytelling", "Collaboration"]);
    record4.set("tools", ["Python", "Jupyter", "TensorFlow", "Scikit-learn", "Pandas", "Tableau"]);
    record4.set("faqs", [{"question": "Do I need a math background?", "answer": "Strong statistics and linear algebra knowledge is helpful but can be learned. Focus on practical application."}, {"question": "What programming language should I learn?", "answer": "Python is the industry standard for data science. Master Python first, then learn SQL."}, {"question": "What is the difference between data scientist and data analyst?", "answer": "Data analysts focus on reporting and dashboards, while data scientists build predictive models and ML solutions."}]);
  try {
    app.save(record4);
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
