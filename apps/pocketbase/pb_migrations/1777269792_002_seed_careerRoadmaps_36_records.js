/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerRoadmaps");

  const record0 = new Record(collection);
    record0.set("careerSlug", "machine-learning-engineer");
    record0.set("phase", 1);
    record0.set("phaseTitle", "Fundamentals");
    record0.set("duration", "3 months");
    record0.set("skills", ["Python", "Linear Algebra", "Statistics", "NumPy", "Pandas"]);
    record0.set("resources", [{"name": "Python for Data Science", "type": "course", "url": "https://www.coursera.org/learn/python-data-analysis", "description": "Learn Python fundamentals and data manipulation"}, {"name": "3Blue1Brown Linear Algebra", "type": "video", "url": "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab", "description": "Intuitive understanding of linear algebra concepts"}]);
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
    record1.set("careerSlug", "machine-learning-engineer");
    record1.set("phase", 2);
    record1.set("phaseTitle", "Core ML Concepts");
    record1.set("duration", "4 months");
    record1.set("skills", ["Scikit-learn", "Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Feature Engineering"]);
    record1.set("resources", [{"name": "Scikit-learn Documentation", "type": "documentation", "url": "https://scikit-learn.org/", "description": "Official scikit-learn library documentation"}, {"name": "Andrew Ng ML Course", "type": "course", "url": "https://www.coursera.org/learn/machine-learning", "description": "Comprehensive machine learning fundamentals"}]);
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
    record2.set("careerSlug", "machine-learning-engineer");
    record2.set("phase", 3);
    record2.set("phaseTitle", "Deep Learning");
    record2.set("duration", "4 months");
    record2.set("skills", ["TensorFlow", "PyTorch", "Neural Networks", "CNN", "RNN"]);
    record2.set("resources", [{"name": "Deep Learning Specialization", "type": "course", "url": "https://www.coursera.org/specializations/deep-learning", "description": "Andrew Ng's deep learning specialization"}, {"name": "PyTorch Tutorials", "type": "documentation", "url": "https://pytorch.org/tutorials/", "description": "Official PyTorch tutorials and documentation"}]);
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
    record3.set("careerSlug", "machine-learning-engineer");
    record3.set("phase", 4);
    record3.set("phaseTitle", "Advanced Topics");
    record3.set("duration", "3 months");
    record3.set("skills", ["Reinforcement Learning", "Transfer Learning", "Hyperparameter Tuning", "Model Optimization"]);
    record3.set("resources", [{"name": "Reinforcement Learning Course", "type": "course", "url": "https://www.deepmind.com/learning-resources", "description": "DeepMind reinforcement learning resources"}, {"name": "Fast.ai Practical Deep Learning", "type": "course", "url": "https://course.fast.ai/", "description": "Practical deep learning for coders"}]);
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
    record4.set("careerSlug", "machine-learning-engineer");
    record4.set("phase", 5);
    record4.set("phaseTitle", "Production & MLOps");
    record4.set("duration", "3 months");
    record4.set("skills", ["Model Deployment", "Docker", "Cloud Platforms", "MLflow", "Monitoring"]);
    record4.set("resources", [{"name": "MLflow Documentation", "type": "documentation", "url": "https://mlflow.org/", "description": "MLflow for model management and deployment"}, {"name": "AWS SageMaker Guide", "type": "documentation", "url": "https://docs.aws.amazon.com/sagemaker/", "description": "AWS SageMaker for ML deployment"}]);
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
    record5.set("careerSlug", "machine-learning-engineer");
    record5.set("phase", 6);
    record5.set("phaseTitle", "Specialization & Projects");
    record5.set("duration", "3 months");
    record5.set("skills", ["Computer Vision", "NLP", "Time Series", "Real-world Projects"]);
    record5.set("resources", [{"name": "Kaggle Competitions", "type": "project", "url": "https://www.kaggle.com/", "description": "Real-world ML competitions and datasets"}, {"name": "GitHub ML Projects", "type": "project", "url": "https://github.com/topics/machine-learning", "description": "Open-source ML projects to contribute to"}]);
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
    record6.set("phase", 1);
    record6.set("phaseTitle", "Fundamentals");
    record6.set("duration", "3 months");
    record6.set("skills", ["Python", "SQL", "Statistics", "Data Visualization", "Excel"]);
    record6.set("resources", [{"name": "Python for Data Science", "type": "course", "url": "https://www.coursera.org/learn/python-data-analysis", "description": "Learn Python fundamentals and data manipulation"}, {"name": "SQL Tutorial", "type": "course", "url": "https://www.codecademy.com/learn/learn-sql", "description": "SQL fundamentals for data querying"}]);
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
    record7.set("phase", 2);
    record7.set("phaseTitle", "Data Analysis");
    record7.set("duration", "3 months");
    record7.set("skills", ["Pandas", "NumPy", "Data Cleaning", "Exploratory Data Analysis", "Statistical Testing"]);
    record7.set("resources", [{"name": "Pandas Documentation", "type": "documentation", "url": "https://pandas.pydata.org/docs/", "description": "Official pandas documentation"}, {"name": "Statistics for Data Science", "type": "course", "url": "https://www.coursera.org/learn/statistics-for-data-analysis", "description": "Statistical concepts for data analysis"}]);
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
    record8.set("phase", 3);
    record8.set("phaseTitle", "Visualization & Communication");
    record8.set("duration", "2 months");
    record8.set("skills", ["Matplotlib", "Seaborn", "Tableau", "Data Storytelling", "Presentation"]);
    record8.set("resources", [{"name": "Tableau Public", "type": "tool", "url": "https://public.tableau.com/", "description": "Learn Tableau with public datasets"}, {"name": "Data Visualization Best Practices", "type": "course", "url": "https://www.coursera.org/learn/data-visualization", "description": "Effective data visualization techniques"}]);
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
    record9.set("phase", 4);
    record9.set("phaseTitle", "Machine Learning");
    record9.set("duration", "4 months");
    record9.set("skills", ["Scikit-learn", "Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Feature Engineering"]);
    record9.set("resources", [{"name": "Scikit-learn Documentation", "type": "documentation", "url": "https://scikit-learn.org/", "description": "Official scikit-learn library documentation"}, {"name": "Andrew Ng ML Course", "type": "course", "url": "https://www.coursera.org/learn/machine-learning", "description": "Comprehensive machine learning fundamentals"}]);
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
    record10.set("phase", 5);
    record10.set("phaseTitle", "Advanced Analytics");
    record10.set("duration", "3 months");
    record10.set("skills", ["A/B Testing", "Causal Inference", "Time Series", "Experimentation"]);
    record10.set("resources", [{"name": "Causal Inference Course", "type": "course", "url": "https://www.coursera.org/learn/causal-inference", "description": "Understanding causal relationships in data"}, {"name": "Experimentation at Scale", "type": "course", "url": "https://www.coursera.org/learn/experimentation", "description": "A/B testing and experimentation design"}]);
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
    record11.set("phase", 6);
    record11.set("phaseTitle", "Portfolio & Real Projects");
    record11.set("duration", "3 months");
    record11.set("skills", ["End-to-end Projects", "Business Impact", "Communication", "Presentation"]);
    record11.set("resources", [{"name": "Kaggle Competitions", "type": "project", "url": "https://www.kaggle.com/", "description": "Real-world data science competitions"}, {"name": "GitHub Data Science Projects", "type": "project", "url": "https://github.com/topics/data-science", "description": "Open-source data science projects"}]);
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
    record12.set("phase", 1);
    record12.set("phaseTitle", "Web Fundamentals");
    record12.set("duration", "2 months");
    record12.set("skills", ["HTML", "CSS", "JavaScript", "Git", "Command Line"]);
    record12.set("resources", [{"name": "MDN Web Docs", "type": "documentation", "url": "https://developer.mozilla.org/", "description": "Comprehensive web development documentation"}, {"name": "FreeCodeCamp Web Development", "type": "course", "url": "https://www.freecodecamp.org/learn/responsive-web-design/", "description": "Free responsive web design course"}]);
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
    record13.set("phase", 2);
    record13.set("phaseTitle", "Frontend Development");
    record13.set("duration", "3 months");
    record13.set("skills", ["React", "State Management", "Component Design", "CSS Frameworks", "Testing"]);
    record13.set("resources", [{"name": "React Official Tutorial", "type": "documentation", "url": "https://react.dev/learn", "description": "Official React documentation and tutorial"}, {"name": "React Course", "type": "course", "url": "https://www.udemy.com/course/react-the-complete-guide/", "description": "Comprehensive React course"}]);
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
    record14.set("phase", 3);
    record14.set("phaseTitle", "Backend Development");
    record14.set("duration", "3 months");
    record14.set("skills", ["Node.js", "Express", "REST APIs", "Authentication", "Databases"]);
    record14.set("resources", [{"name": "Node.js Documentation", "type": "documentation", "url": "https://nodejs.org/en/docs/", "description": "Official Node.js documentation"}, {"name": "Express.js Guide", "type": "documentation", "url": "https://expressjs.com/", "description": "Express.js web framework guide"}]);
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
    record15.set("phase", 4);
    record15.set("phaseTitle", "Databases & Data");
    record15.set("duration", "2 months");
    record15.set("skills", ["SQL", "MongoDB", "Database Design", "Optimization", "Migrations"]);
    record15.set("resources", [{"name": "SQL Tutorial", "type": "course", "url": "https://www.codecademy.com/learn/learn-sql", "description": "SQL fundamentals"}, {"name": "MongoDB University", "type": "course", "url": "https://university.mongodb.com/", "description": "Official MongoDB courses"}]);
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
    record16.set("phase", 5);
    record16.set("phaseTitle", "DevOps & Deployment");
    record16.set("duration", "2 months");
    record16.set("skills", ["Docker", "CI/CD", "Cloud Platforms", "Monitoring", "Performance"]);
    record16.set("resources", [{"name": "Docker Documentation", "type": "documentation", "url": "https://docs.docker.com/", "description": "Official Docker documentation"}, {"name": "GitHub Actions Guide", "type": "documentation", "url": "https://docs.github.com/en/actions", "description": "GitHub Actions CI/CD guide"}]);
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
    record17.set("phase", 6);
    record17.set("phaseTitle", "Portfolio Projects");
    record17.set("duration", "3 months");
    record17.set("skills", ["Full Stack Projects", "System Design", "Code Quality", "Deployment"]);
    record17.set("resources", [{"name": "GitHub Portfolio Projects", "type": "project", "url": "https://github.com/topics/full-stack", "description": "Full stack project examples"}, {"name": "Vercel Deployment", "type": "tool", "url": "https://vercel.com/", "description": "Deploy full stack applications"}]);
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
    record18.set("phase", 1);
    record18.set("phaseTitle", "Linux Fundamentals");
    record18.set("duration", "2 months");
    record18.set("skills", ["Linux", "Command Line", "File Systems", "Permissions", "Scripting"]);
    record18.set("resources", [{"name": "Linux Academy", "type": "course", "url": "https://www.linuxacademy.com/", "description": "Comprehensive Linux training"}, {"name": "Linux Command Line Basics", "type": "course", "url": "https://www.udacity.com/course/linux-command-line-basics--ud595", "description": "Linux command line fundamentals"}]);
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
    record19.set("phase", 2);
    record19.set("phaseTitle", "Networking & Infrastructure");
    record19.set("duration", "2 months");
    record19.set("skills", ["Networking", "TCP/IP", "DNS", "Firewalls", "Load Balancing"]);
    record19.set("resources", [{"name": "CompTIA Network+ Course", "type": "course", "url": "https://www.comptia.org/certifications/network", "description": "Network fundamentals certification"}, {"name": "Networking Basics", "type": "course", "url": "https://www.coursera.org/learn/computer-networking", "description": "Computer networking fundamentals"}]);
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
    record20.set("phase", 3);
    record20.set("phaseTitle", "Containerization");
    record20.set("duration", "2 months");
    record20.set("skills", ["Docker", "Container Orchestration", "Image Building", "Registry Management"]);
    record20.set("resources", [{"name": "Docker Documentation", "type": "documentation", "url": "https://docs.docker.com/", "description": "Official Docker documentation"}, {"name": "Docker Mastery Course", "type": "course", "url": "https://www.udemy.com/course/docker-mastery/", "description": "Comprehensive Docker course"}]);
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
    record21.set("phase", 4);
    record21.set("phaseTitle", "Kubernetes & Orchestration");
    record21.set("duration", "3 months");
    record21.set("skills", ["Kubernetes", "Helm", "Service Mesh", "Deployment Strategies"]);
    record21.set("resources", [{"name": "Kubernetes Official Documentation", "type": "documentation", "url": "https://kubernetes.io/docs/", "description": "Official Kubernetes documentation"}, {"name": "Kubernetes for Developers", "type": "course", "url": "https://www.udemy.com/course/kubernetes-for-developers/", "description": "Kubernetes fundamentals for developers"}]);
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
    record22.set("phase", 5);
    record22.set("phaseTitle", "Cloud Platforms");
    record22.set("duration", "3 months");
    record22.set("skills", ["AWS", "Infrastructure as Code", "Terraform", "CloudFormation"]);
    record22.set("resources", [{"name": "AWS Certified Solutions Architect", "type": "course", "url": "https://aws.amazon.com/certification/certified-solutions-architect-associate/", "description": "AWS Solutions Architect certification"}, {"name": "Terraform Documentation", "type": "documentation", "url": "https://www.terraform.io/docs", "description": "Terraform Infrastructure as Code"}]);
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
    record23.set("phase", 6);
    record23.set("phaseTitle", "CI/CD & Monitoring");
    record23.set("duration", "2 months");
    record23.set("skills", ["Jenkins", "GitLab CI", "Prometheus", "ELK Stack", "Monitoring"]);
    record23.set("resources", [{"name": "Jenkins Documentation", "type": "documentation", "url": "https://www.jenkins.io/doc/", "description": "Official Jenkins documentation"}, {"name": "Prometheus Monitoring", "type": "course", "url": "https://prometheus.io/docs/", "description": "Prometheus monitoring and alerting"}]);
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
    record24.set("phaseTitle", "Cloud Fundamentals");
    record24.set("duration", "2 months");
    record24.set("skills", ["Cloud Concepts", "AWS Basics", "Compute", "Storage", "Networking"]);
    record24.set("resources", [{"name": "AWS Fundamentals", "type": "course", "url": "https://aws.amazon.com/training/", "description": "Official AWS training"}, {"name": "Cloud Computing Basics", "type": "course", "url": "https://www.coursera.org/learn/cloud-computing", "description": "Cloud computing fundamentals"}]);
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
    record25.set("phaseTitle", "AWS Deep Dive");
    record25.set("duration", "3 months");
    record25.set("skills", ["EC2", "RDS", "S3", "VPC", "IAM", "Lambda"]);
    record25.set("resources", [{"name": "AWS Solutions Architect Associate", "type": "course", "url": "https://aws.amazon.com/certification/certified-solutions-architect-associate/", "description": "AWS Solutions Architect Associate certification"}, {"name": "A Cloud Guru AWS Courses", "type": "course", "url": "https://acloudguru.com/", "description": "Comprehensive AWS training platform"}]);
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
    record26.set("phaseTitle", "Advanced AWS Architecture");
    record26.set("duration", "3 months");
    record26.set("skills", ["Auto Scaling", "Load Balancing", "Disaster Recovery", "High Availability"]);
    record26.set("resources", [{"name": "AWS Solutions Architect Professional", "type": "course", "url": "https://aws.amazon.com/certification/certified-solutions-architect-professional/", "description": "AWS Solutions Architect Professional certification"}, {"name": "AWS Well-Architected Framework", "type": "documentation", "url": "https://aws.amazon.com/architecture/well-architected/", "description": "AWS architecture best practices"}]);
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
    record27.set("phaseTitle", "Security & Compliance");
    record27.set("duration", "2 months");
    record27.set("skills", ["Security", "Compliance", "Encryption", "Access Control", "Auditing"]);
    record27.set("resources", [{"name": "AWS Security Best Practices", "type": "documentation", "url": "https://aws.amazon.com/security/best-practices/", "description": "AWS security best practices"}, {"name": "Cloud Security Course", "type": "course", "url": "https://www.coursera.org/learn/cloud-security", "description": "Cloud security fundamentals"}]);
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
    record28.set("careerSlug", "cloud-architect");
    record28.set("phase", 5);
    record28.set("phaseTitle", "Cost Optimization");
    record28.set("duration", "2 months");
    record28.set("skills", ["Cost Analysis", "Reserved Instances", "Spot Instances", "Optimization Strategies"]);
    record28.set("resources", [{"name": "AWS Cost Optimization", "type": "documentation", "url": "https://aws.amazon.com/aws-cost-management/", "description": "AWS cost management tools"}, {"name": "Cost Optimization Best Practices", "type": "course", "url": "https://www.coursera.org/learn/cost-optimization", "description": "Cloud cost optimization strategies"}]);
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
    record29.set("careerSlug", "cloud-architect");
    record29.set("phase", 6);
    record29.set("phaseTitle", "Multi-Cloud & Advanced Topics");
    record29.set("duration", "2 months");
    record29.set("skills", ["GCP", "Azure", "Hybrid Cloud", "Disaster Recovery"]);
    record29.set("resources", [{"name": "Google Cloud Architect", "type": "course", "url": "https://cloud.google.com/certification/cloud-architect", "description": "Google Cloud Architect certification"}, {"name": "Azure Architect", "type": "course", "url": "https://learn.microsoft.com/en-us/certifications/azure-solutions-architect-expert/", "description": "Azure Solutions Architect certification"}]);
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
    record30.set("careerSlug", "backend-engineer");
    record30.set("phase", 1);
    record30.set("phaseTitle", "Programming Fundamentals");
    record30.set("duration", "2 months");
    record30.set("skills", ["Python", "Java", "Go", "Data Structures", "Algorithms"]);
    record30.set("resources", [{"name": "LeetCode", "type": "practice", "url": "https://leetcode.com/", "description": "Coding interview practice"}, {"name": "Algorithms Course", "type": "course", "url": "https://www.coursera.org/learn/algorithms-part1", "description": "Algorithms fundamentals"}]);
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
    record31.set("careerSlug", "backend-engineer");
    record31.set("phase", 2);
    record31.set("phaseTitle", "Web Frameworks");
    record31.set("duration", "2 months");
    record31.set("skills", ["Express", "Django", "Spring Boot", "REST APIs", "HTTP"]);
    record31.set("resources", [{"name": "Express.js Guide", "type": "documentation", "url": "https://expressjs.com/", "description": "Express.js web framework"}, {"name": "Django Documentation", "type": "documentation", "url": "https://docs.djangoproject.com/", "description": "Django web framework"}]);
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
    record32.set("careerSlug", "backend-engineer");
    record32.set("phase", 3);
    record32.set("phaseTitle", "Databases");
    record32.set("duration", "2 months");
    record32.set("skills", ["SQL", "Database Design", "Indexing", "Query Optimization", "Transactions"]);
    record32.set("resources", [{"name": "SQL Tutorial", "type": "course", "url": "https://www.codecademy.com/learn/learn-sql", "description": "SQL fundamentals"}, {"name": "Database Design Course", "type": "course", "url": "https://www.coursera.org/learn/database-design", "description": "Database design principles"}]);
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
    record33.set("careerSlug", "backend-engineer");
    record33.set("phase", 4);
    record33.set("phaseTitle", "System Design");
    record33.set("duration", "3 months");
    record33.set("skills", ["Scalability", "Caching", "Message Queues", "Microservices", "Distributed Systems"]);
    record33.set("resources", [{"name": "System Design Interview", "type": "course", "url": "https://www.educative.io/courses/grokking-the-system-design-interview", "description": "System design interview preparation"}, {"name": "Designing Data-Intensive Applications", "type": "book", "url": "https://dataintensive.net/", "description": "Comprehensive system design book"}]);
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
    record34.set("careerSlug", "backend-engineer");
    record34.set("phase", 5);
    record34.set("phaseTitle", "DevOps & Deployment");
    record34.set("duration", "2 months");
    record34.set("skills", ["Docker", "Kubernetes", "CI/CD", "Monitoring", "Logging"]);
    record34.set("resources", [{"name": "Docker Documentation", "type": "documentation", "url": "https://docs.docker.com/", "description": "Official Docker documentation"}, {"name": "Kubernetes Documentation", "type": "documentation", "url": "https://kubernetes.io/docs/", "description": "Official Kubernetes documentation"}]);
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
    record35.set("careerSlug", "backend-engineer");
    record35.set("phase", 6);
    record35.set("phaseTitle", "Advanced Topics & Projects");
    record35.set("duration", "3 months");
    record35.set("skills", ["Performance Tuning", "Security", "Testing", "Real-world Projects"]);
    record35.set("resources", [{"name": "GitHub Backend Projects", "type": "project", "url": "https://github.com/topics/backend", "description": "Backend project examples"}, {"name": "System Design Resources", "type": "documentation", "url": "https://github.com/donnemartin/system-design-primer", "description": "System design primer"}]);
  try {
    app.save(record35);
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
