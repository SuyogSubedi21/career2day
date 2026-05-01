/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
    record0.set("name", "Database Administrator");
    record0.set("slug", "database-administrator");
    record0.set("description", "A Database Administrator (DBA) is responsible for managing, maintaining, and optimizing database systems. DBAs ensure data integrity, security, and performance while handling backups, recovery, and system administration tasks. They work with various database platforms and are critical to organizational data management.");
    record0.set("overview", "Database Administrators manage and optimize database systems to ensure reliability, security, and performance. They handle database design, performance tuning, backup and recovery, replication, clustering, and security. DBAs work across multiple platforms including SQL Server, PostgreSQL, MySQL, Oracle, and MongoDB, making them essential for any data-driven organization.");
    record0.set("averageSalary", 120000);
    record0.set("salaryRange", "{'min': 80000, 'max': 160000, 'currency': 'USD'}");
    record0.set("jobDemandOutlook", "Very High (96%)");
    record0.set("jobDemand", "Very High");
    record0.set("topPayingStates", ["California", "New York", "Texas", "Washington", "Massachusetts"]);
    record0.set("entrySalary", 80000);
    record0.set("midSalary", 120000);
    record0.set("seniorSalary", 160000);
    record0.set("topStates", ["California", "New York", "Texas", "Washington", "Massachusetts"]);
    record0.set("skillsRequired", ["SQL", "PostgreSQL", "MySQL", "Oracle", "MongoDB", "Database Design", "Performance Tuning", "Backup & Recovery", "Replication", "Clustering", "Security", "Monitoring", "Linux", "Scripting (Bash/Python)"]);
    record0.set("technicalSkills", ["SQL", "PostgreSQL", "MySQL", "Oracle", "MongoDB", "Database Design", "Performance Tuning", "Backup & Recovery", "Replication", "Clustering", "Monitoring", "Linux", "Bash", "Python"]);
    record0.set("softSkills", ["Problem Solving", "Communication", "Attention to Detail", "Time Management", "Team Collaboration"]);
    record0.set("tools", ["pgAdmin", "MySQL Workbench", "Oracle SQL Developer", "MongoDB Compass", "Navicat", "DBeaver", "Grafana", "Prometheus"]);
    record0.set("roadmap", [{"phase": 1, "title": "Database Fundamentals", "duration": "1-2 months", "skills": ["SQL Basics", "Database Design", "Normalization", "Indexing"], "resources": ["SQL Tutorial", "Database Design Course", "Normalization Guide"]}, {"phase": 2, "title": "PostgreSQL/MySQL Mastery", "duration": "2-3 months", "skills": ["PostgreSQL Administration", "MySQL Administration", "User Management", "Backup Strategies"], "resources": ["PostgreSQL Documentation", "MySQL Documentation", "Administration Courses"]}, {"phase": 3, "title": "Performance & Optimization", "duration": "2-3 months", "skills": ["Query Optimization", "Index Tuning", "Performance Monitoring", "Bottleneck Analysis"], "resources": ["Performance Tuning Guide", "Query Optimization Course", "Monitoring Tools"]}, {"phase": 4, "title": "High Availability", "duration": "2-3 months", "skills": ["Replication", "Clustering", "Failover", "Load Balancing"], "resources": ["Replication Setup Guide", "Clustering Documentation", "HA Architecture Course"]}, {"phase": 5, "title": "Security & Compliance", "duration": "1-2 months", "skills": ["Database Security", "Encryption", "Access Control", "Compliance Standards"], "resources": ["Security Best Practices", "Encryption Guide", "Compliance Documentation"]}]);
    record0.set("relatedCareers", ["Data Engineer", "Systems Administrator", "Cloud Architect", "Data Scientist"]);
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
    record1.set("name", "Blockchain Developer");
    record1.set("slug", "blockchain-developer");
    record1.set("description", "A Blockchain Developer creates decentralized applications (dApps) and smart contracts on blockchain platforms. They design and implement secure, efficient blockchain solutions using languages like Solidity and frameworks like Web3.js. Blockchain developers work with cryptocurrencies, DeFi protocols, NFTs, and other blockchain-based systems.");
    record1.set("overview", "Blockchain Developers build decentralized applications and smart contracts on blockchain networks like Ethereum. They work with Solidity, Web3.js, and various blockchain frameworks to create secure, efficient solutions. Blockchain developers understand cryptography, consensus mechanisms, DeFi, NFTs, and security auditing, making them essential for the growing blockchain ecosystem.");
    record1.set("averageSalary", 147000);
    record1.set("salaryRange", "{'min': 95000, 'max': 200000, 'currency': 'USD'}");
    record1.set("jobDemandOutlook", "Very High (102%)");
    record1.set("jobDemand", "Very High");
    record1.set("topPayingStates", ["California", "New York", "Texas", "Colorado", "Washington"]);
    record1.set("entrySalary", 95000);
    record1.set("midSalary", 147000);
    record1.set("seniorSalary", 200000);
    record1.set("topStates", ["California", "New York", "Texas", "Colorado", "Washington"]);
    record1.set("skillsRequired", ["Solidity", "Web3.js", "Ethereum", "Smart Contracts", "Cryptography", "Consensus Mechanisms", "DeFi", "NFTs", "Hardhat", "Truffle", "JavaScript/TypeScript", "Git", "Security Auditing"]);
    record1.set("technicalSkills", ["Solidity", "Web3.js", "Ethereum", "Smart Contracts", "Cryptography", "Consensus Mechanisms", "DeFi", "NFTs", "Hardhat", "Truffle", "JavaScript", "TypeScript", "Git"]);
    record1.set("softSkills", ["Problem Solving", "Security Mindset", "Attention to Detail", "Communication", "Continuous Learning"]);
    record1.set("tools", ["Remix IDE", "Hardhat", "Truffle", "MetaMask", "Etherscan", "OpenZeppelin", "Ganache", "Web3.js"]);
    record1.set("roadmap", [{"phase": 1, "title": "Blockchain Fundamentals", "duration": "1-2 months", "skills": ["Blockchain Basics", "Cryptography", "Consensus Mechanisms", "Bitcoin & Ethereum"], "resources": ["Blockchain Basics Course", "Cryptography Guide", "Ethereum Whitepaper"]}, {"phase": 2, "title": "Smart Contracts", "duration": "2-3 months", "skills": ["Solidity Basics", "Smart Contract Development", "Testing", "Deployment"], "resources": ["Solidity Documentation", "Smart Contract Course", "Testing Framework Guide"]}, {"phase": 3, "title": "Web3 Development", "duration": "2-3 months", "skills": ["Web3.js", "dApp Development", "Frontend Integration", "Wallet Integration"], "resources": ["Web3.js Documentation", "dApp Development Course", "Frontend Integration Guide"]}, {"phase": 4, "title": "Advanced Topics", "duration": "2-3 months", "skills": ["DeFi Protocols", "NFTs", "Advanced Patterns", "Gas Optimization"], "resources": ["DeFi Protocol Guide", "NFT Development Course", "Gas Optimization Tips"]}, {"phase": 5, "title": "Deployment & Security", "duration": "1-2 months", "skills": ["Security Auditing", "Mainnet Deployment", "Monitoring", "Incident Response"], "resources": ["Security Audit Guide", "Deployment Checklist", "Monitoring Tools"]}]);
    record1.set("relatedCareers", ["Smart Contract Auditor", "Cryptocurrency Developer", "DeFi Developer", "Full Stack Developer"]);
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
    record2.set("name", "Game Developer");
    record2.set("slug", "game-developer");
    record2.set("description", "A Game Developer creates engaging games for multiple platforms including PC, console, and mobile. They use game engines like Unity and Unreal Engine, programming in C# or C++, and work on game design, physics, graphics, animation, audio, and networking. Game developers bring creative visions to life through interactive entertainment.");
    record2.set("overview", "Game Developers create engaging games for various platforms using engines like Unity and Unreal Engine. They work with C#, C++, and game design principles to develop mechanics, physics, graphics, animation, and networking features. Game developers combine technical skills with creativity to deliver immersive gaming experiences across PC, console, and mobile platforms.");
    record2.set("averageSalary", 115000);
    record2.set("salaryRange", "{'min': 75000, 'max': 155000, 'currency': 'USD'}");
    record2.set("jobDemandOutlook", "Very High (97%)");
    record2.set("jobDemand", "Very High");
    record2.set("topPayingStates", ["California", "Washington", "Texas", "New York", "Massachusetts"]);
    record2.set("entrySalary", 75000);
    record2.set("midSalary", 115000);
    record2.set("seniorSalary", 155000);
    record2.set("topStates", ["California", "Washington", "Texas", "New York", "Massachusetts"]);
    record2.set("skillsRequired", ["Unity", "Unreal Engine", "C#", "C++", "Game Design", "Physics", "Graphics", "Animation", "Audio", "Networking", "Performance Optimization", "Git", "Game Engines"]);
    record2.set("technicalSkills", ["Unity", "Unreal Engine", "C#", "C++", "Game Design", "Physics Engines", "Graphics Programming", "Animation Systems", "Audio Programming", "Networking", "Performance Optimization", "Git"]);
    record2.set("softSkills", ["Creativity", "Problem Solving", "Teamwork", "Communication", "Attention to Detail"]);
    record2.set("tools", ["Unity", "Unreal Engine", "Visual Studio", "Blender", "Wwise", "FMOD", "Git", "Jira"]);
    record2.set("roadmap", [{"phase": 1, "title": "Game Development Fundamentals", "duration": "1-2 months", "skills": ["Game Design Principles", "Game Loop", "Event Systems", "Basic Physics"], "resources": ["Game Design Course", "Game Development Fundamentals", "Physics Basics"]}, {"phase": 2, "title": "Unity Basics", "duration": "2-3 months", "skills": ["Unity Editor", "C# Scripting", "Scene Management", "UI Development"], "resources": ["Unity Documentation", "C# for Game Development", "UI Tutorial"]}, {"phase": 3, "title": "Game Mechanics", "duration": "2-3 months", "skills": ["Gameplay Programming", "Animation", "Audio Integration", "Input Handling"], "resources": ["Gameplay Programming Guide", "Animation Tutorial", "Audio Integration Course"]}, {"phase": 4, "title": "Advanced Features", "duration": "2-3 months", "skills": ["Networking", "Graphics Optimization", "Advanced Physics", "Performance Tuning"], "resources": ["Networking Guide", "Graphics Optimization", "Performance Profiling"]}, {"phase": 5, "title": "Deployment & Polish", "duration": "1-2 months", "skills": ["Build Optimization", "Platform Deployment", "Testing", "Release Management"], "resources": ["Build Optimization Guide", "Platform Deployment", "Testing Best Practices"]}]);
    record2.set("relatedCareers", ["Graphics Programmer", "Game Designer", "Audio Engineer", "VR Developer"]);
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
    record3.set("name", "Site Reliability Engineer (SRE)");
    record3.set("slug", "site-reliability-engineer");
    record3.set("description", "A Site Reliability Engineer (SRE) ensures system reliability, availability, and performance at scale. SREs combine software engineering with operations, using automation, monitoring, and incident response to maintain robust systems. They work with Kubernetes, Docker, monitoring tools, and cloud platforms to keep services running smoothly.");
    record3.set("overview", "Site Reliability Engineers (SREs) ensure system reliability and availability at scale by combining software engineering with operations. They use Kubernetes, Docker, monitoring tools like Prometheus and Grafana, and automation to maintain robust systems. SREs handle incident response, on-call management, and infrastructure automation, making them critical for high-availability systems. (Typically requires 2-3 years of backend/DevOps experience)");
    record3.set("averageSalary", 145000);
    record3.set("salaryRange", "{'min': 100000, 'max': 190000, 'currency': 'USD'}");
    record3.set("jobDemandOutlook", "Very High (103%)");
    record3.set("jobDemand", "Very High");
    record3.set("topPayingStates", ["California", "New York", "Washington", "Texas", "Massachusetts"]);
    record3.set("entrySalary", 100000);
    record3.set("midSalary", 145000);
    record3.set("seniorSalary", 190000);
    record3.set("topStates", ["California", "New York", "Washington", "Texas", "Massachusetts"]);
    record3.set("skillsRequired", ["Linux", "Kubernetes", "Docker", "Monitoring (Prometheus/Grafana)", "Logging (ELK)", "Incident Response", "On-call Management", "Automation (Python/Go)", "Cloud Platforms", "Networking", "Database Administration"]);
    record3.set("technicalSkills", ["Linux", "Kubernetes", "Docker", "Prometheus", "Grafana", "ELK Stack", "Python", "Go", "AWS", "GCP", "Azure", "Networking", "Database Administration"]);
    record3.set("softSkills", ["Problem Solving", "Communication", "Incident Management", "Teamwork", "Continuous Learning"]);
    record3.set("tools", ["Kubernetes", "Docker", "Prometheus", "Grafana", "ELK Stack", "Terraform", "Ansible", "PagerDuty"]);
    record3.set("roadmap", [{"phase": 1, "title": "SRE Fundamentals", "duration": "1-2 months", "skills": ["SRE Principles", "Linux Administration", "Networking Basics", "System Design"], "resources": ["SRE Book", "Linux Administration Course", "System Design Guide"]}, {"phase": 2, "title": "Monitoring & Observability", "duration": "2-3 months", "skills": ["Prometheus", "Grafana", "Logging", "Tracing", "Alerting"], "resources": ["Prometheus Documentation", "Grafana Tutorial", "Observability Guide"]}, {"phase": 3, "title": "Automation & Infrastructure", "duration": "2-3 months", "skills": ["Infrastructure as Code", "Kubernetes", "Docker", "Automation Scripts"], "resources": ["Kubernetes Course", "Docker Guide", "IaC Tutorial"]}, {"phase": 4, "title": "Incident Response", "duration": "2-3 months", "skills": ["Incident Management", "Postmortem Analysis", "On-call Procedures", "Runbooks"], "resources": ["Incident Response Guide", "Postmortem Template", "On-call Best Practices"]}, {"phase": 5, "title": "Advanced Topics", "duration": "1-2 months", "skills": ["Chaos Engineering", "Multi-region Deployment", "Cost Optimization", "Advanced Networking"], "resources": ["Chaos Engineering Guide", "Multi-region Architecture", "Cost Optimization Tips"]}]);
    record3.set("relatedCareers", ["DevOps Engineer", "Cloud Architect", "Systems Administrator", "Infrastructure Engineer"]);
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
    record4.set("name", "AI/ML Operations Engineer (MLOps)");
    record4.set("slug", "ai-ml-operations-engineer");
    record4.set("description", "An AI/ML Operations Engineer (MLOps) builds and maintains machine learning systems in production. They focus on model serving, data pipelines, monitoring, and automation to ensure ML models perform reliably at scale. MLOps engineers bridge the gap between data scientists and operations, using tools like Docker, Kubernetes, and CI/CD to operationalize machine learning.");
    record4.set("overview", "MLOps Engineers build and maintain machine learning systems in production, ensuring models perform reliably at scale. They work with Python, Docker, Kubernetes, CI/CD pipelines, and cloud platforms to operationalize ML models. MLOps engineers handle model serving, feature engineering, data pipelines, monitoring, and automated retraining, making them essential for production ML systems. (Typically requires ML/backend knowledge)");
    record4.set("averageSalary", 152000);
    record4.set("salaryRange", "{'min': 105000, 'max': 200000, 'currency': 'USD'}");
    record4.set("jobDemandOutlook", "Very High (105%)");
    record4.set("jobDemand", "Very High");
    record4.set("topPayingStates", ["California", "New York", "Washington", "Texas", "Massachusetts"]);
    record4.set("entrySalary", 105000);
    record4.set("midSalary", 152000);
    record4.set("seniorSalary", 200000);
    record4.set("topStates", ["California", "New York", "Washington", "Texas", "Massachusetts"]);
    record4.set("skillsRequired", ["Python", "Machine Learning", "Docker", "Kubernetes", "CI/CD", "Model Serving", "Feature Engineering", "Data Pipelines", "Monitoring", "Cloud Platforms (AWS/GCP/Azure)", "Git", "SQL"]);
    record4.set("technicalSkills", ["Python", "Machine Learning", "TensorFlow", "PyTorch", "Docker", "Kubernetes", "CI/CD", "Apache Airflow", "Spark", "AWS", "GCP", "Azure", "Git", "SQL"]);
    record4.set("softSkills", ["Problem Solving", "Communication", "Collaboration", "Attention to Detail", "Continuous Learning"]);
    record4.set("tools", ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Apache Airflow", "TensorFlow Serving", "KServe", "Prometheus", "ELK Stack"]);
    record4.set("roadmap", [{"phase": 1, "title": "ML Fundamentals", "duration": "1-2 months", "skills": ["ML Basics", "Python for ML", "Data Preprocessing", "Model Evaluation"], "resources": ["ML Fundamentals Course", "Python for ML", "Data Preprocessing Guide"]}, {"phase": 2, "title": "ML Frameworks", "duration": "2-3 months", "skills": ["TensorFlow", "PyTorch", "Scikit-learn", "Model Training"], "resources": ["TensorFlow Documentation", "PyTorch Tutorial", "ML Frameworks Course"]}, {"phase": 3, "title": "Deployment & Serving", "duration": "2-3 months", "skills": ["Model Serving", "Docker", "Kubernetes", "API Development"], "resources": ["Model Serving Guide", "Docker for ML", "Kubernetes Course"]}, {"phase": 4, "title": "Pipelines & Automation", "duration": "2-3 months", "skills": ["Data Pipelines", "Feature Engineering", "CI/CD for ML", "Orchestration"], "resources": ["Data Pipeline Guide", "Feature Engineering Course", "CI/CD for ML"]}, {"phase": 5, "title": "Production Systems", "duration": "1-2 months", "skills": ["Monitoring", "Automated Retraining", "Model Governance", "Scaling"], "resources": ["Production ML Guide", "Monitoring for ML", "Model Governance Best Practices"]}]);
    record4.set("relatedCareers", ["Data Engineer", "Machine Learning Engineer", "DevOps Engineer", "Data Scientist"]);
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
