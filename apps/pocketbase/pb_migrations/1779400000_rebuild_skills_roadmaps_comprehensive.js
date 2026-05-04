/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  // Delete all existing careerSkills and careerRoadmaps
  const existingSkills = app.findRecordsByFilter("careerSkills", "id != null", "", 0, 0);
  for (const r of existingSkills) { app.delete(r); }
  console.log("Deleted " + existingSkills.length + " old careerSkills records.");

  const existingRoadmaps = app.findRecordsByFilter("careerRoadmaps", "id != null", "", 0, 0);
  for (const r of existingRoadmaps) { app.delete(r); }
  console.log("Deleted " + existingRoadmaps.length + " old careerRoadmaps records.");

  const skillsCollection = app.findCollectionByNameOrId("careerSkills");
  const roadmapCollection = app.findCollectionByNameOrId("careerRoadmaps");

  // Comprehensive skills data for all 50 careers
  const careerSkillsData = {
    "machine-learning-engineer": [
      { name: "Python", category: "Languages", difficulty: "Intermediate", desc: "Primary ML development language" },
      { name: "TensorFlow/PyTorch", category: "Frameworks", difficulty: "Advanced", desc: "Deep learning frameworks" },
      { name: "Scikit-learn", category: "Libraries", difficulty: "Intermediate", desc: "Classical ML algorithms" },
      { name: "Data Preprocessing", category: "Skills", difficulty: "Intermediate", desc: "Cleaning and preparing data" },
      { name: "Feature Engineering", category: "Skills", difficulty: "Advanced", desc: "Creating meaningful features" },
      { name: "Model Evaluation", category: "Skills", difficulty: "Intermediate", desc: "Testing and validating models" },
      { name: "SQL", category: "Languages", difficulty: "Intermediate", desc: "Database querying" },
      { name: "Statistics", category: "Math", difficulty: "Advanced", desc: "Statistical foundations" }
    ],
    "ai-llm-engineer": [
      { name: "Python", category: "Languages", difficulty: "Advanced", desc: "Primary AI development language" },
      { name: "LLMs/Transformers", category: "AI", difficulty: "Advanced", desc: "Large language model architecture" },
      { name: "LangChain/LlamaIndex", category: "Frameworks", difficulty: "Advanced", desc: "LLM orchestration" },
      { name: "API Integration", category: "Skills", difficulty: "Intermediate", desc: "Connecting LLM services" },
      { name: "Prompt Engineering", category: "Skills", difficulty: "Intermediate", desc: "Crafting effective prompts" },
      { name: "RAG Systems", category: "Architecture", difficulty: "Advanced", desc: "Retrieval-augmented generation" },
      { name: "OpenAI/Anthropic APIs", category: "Tools", difficulty: "Intermediate", desc: "Working with LLM APIs" }
    ],
    "cloud-architect": [
      { name: "AWS/Azure/GCP", category: "Cloud", difficulty: "Advanced", desc: "Major cloud platforms" },
      { name: "Infrastructure Design", category: "Architecture", difficulty: "Advanced", desc: "Designing scalable systems" },
      { name: "Security & Compliance", category: "Security", difficulty: "Advanced", desc: "Cloud security best practices" },
      { name: "Cost Optimization", category: "Cloud", difficulty: "Intermediate", desc: "Managing cloud expenses" },
      { name: "Networking", category: "Infrastructure", difficulty: "Advanced", desc: "Cloud networking concepts" },
      { name: "Database Design", category: "Databases", difficulty: "Advanced", desc: "Distributed database architecture" },
      { name: "Disaster Recovery", category: "Operations", difficulty: "Advanced", desc: "Business continuity planning" }
    ],
    "devops-platform-engineer": [
      { name: "Docker/Kubernetes", category: "Containerization", difficulty: "Advanced", desc: "Container orchestration" },
      { name: "CI/CD Pipelines", category: "DevOps", difficulty: "Advanced", desc: "Automated deployment" },
      { name: "Infrastructure as Code", category: "DevOps", difficulty: "Advanced", desc: "Terraform/CloudFormation" },
      { name: "Linux", category: "OS", difficulty: "Intermediate", desc: "Linux system administration" },
      { name: "Monitoring & Logging", category: "Operations", difficulty: "Advanced", desc: "Observability tools" },
      { name: "Scripting", category: "Programming", difficulty: "Intermediate", desc: "Bash/Python scripting" },
      { name: "Cloud Platforms", category: "Cloud", difficulty: "Advanced", desc: "AWS/Azure/GCP knowledge" }
    ],
    "cybersecurity-engineer": [
      { name: "Network Security", category: "Security", difficulty: "Advanced", desc: "Firewalls, VPNs, IDS/IPS" },
      { name: "Cryptography", category: "Security", difficulty: "Advanced", desc: "Encryption and hashing" },
      { name: "Penetration Testing", category: "Security", difficulty: "Advanced", desc: "Finding vulnerabilities" },
      { name: "Incident Response", category: "Security", difficulty: "Advanced", desc: "Handling security breaches" },
      { name: "Compliance Frameworks", category: "Governance", difficulty: "Intermediate", desc: "GDPR, HIPAA, PCI-DSS" },
      { name: "Linux/Windows", category: "OS", difficulty: "Advanced", desc: "OS hardening" },
      { name: "Security Tools", category: "Tools", difficulty: "Intermediate", desc: "Wireshark, Metasploit, etc." }
    ],
    "data-engineer": [
      { name: "SQL", category: "Languages", difficulty: "Advanced", desc: "Complex data queries" },
      { name: "Python/Scala", category: "Languages", difficulty: "Advanced", desc: "Data processing languages" },
      { name: "Apache Spark", category: "Frameworks", difficulty: "Advanced", desc: "Big data processing" },
      { name: "Data Warehousing", category: "Architecture", difficulty: "Advanced", desc: "DW design and optimization" },
      { name: "ETL/ELT", category: "Skills", difficulty: "Advanced", desc: "Data pipeline design" },
      { name: "Cloud Data Platforms", category: "Cloud", difficulty: "Advanced", desc: "Snowflake, BigQuery, Redshift" },
      { name: "Data Modeling", category: "Architecture", difficulty: "Advanced", desc: "Relational and dimensional modeling" }
    ],
    "full-stack-engineer": [
      { name: "React/Vue/Angular", category: "Frontend", difficulty: "Advanced", desc: "Modern frontend frameworks" },
      { name: "Node.js/Express", category: "Backend", difficulty: "Advanced", desc: "Backend runtime and frameworks" },
      { name: "Databases", category: "Databases", difficulty: "Advanced", desc: "SQL and NoSQL databases" },
      { name: "REST/GraphQL APIs", category: "Architecture", difficulty: "Intermediate", desc: "API design and development" },
      { name: "HTML/CSS/JavaScript", category: "Frontend", difficulty: "Intermediate", desc: "Web fundamentals" },
      { name: "Git", category: "Tools", difficulty: "Intermediate", desc: "Version control" },
      { name: "Deployment", category: "DevOps", difficulty: "Intermediate", desc: "App deployment and hosting" }
    ],
    "blockchain-web3-engineer": [
      { name: "Solidity", category: "Languages", difficulty: "Advanced", desc: "Smart contract language" },
      { name: "Ethereum/Web3.js", category: "Blockchain", difficulty: "Advanced", desc: "Blockchain interaction" },
      { name: "Smart Contracts", category: "Skills", difficulty: "Advanced", desc: "Writing secure contracts" },
      { name: "Cryptography", category: "Security", difficulty: "Advanced", desc: "Blockchain cryptography" },
      { name: "DeFi Protocols", category: "Blockchain", difficulty: "Advanced", desc: "Decentralized finance" },
      { name: "Gas Optimization", category: "Skills", difficulty: "Intermediate", desc: "Efficient contract coding" },
      { name: "Security Audits", category: "Security", difficulty: "Advanced", desc: "Smart contract testing" }
    ],
    "site-reliability-engineer-sre": [
      { name: "Infrastructure", category: "Operations", difficulty: "Advanced", desc: "Server and system management" },
      { name: "Monitoring & Alerting", category: "Operations", difficulty: "Advanced", desc: "Observability platform" },
      { name: "Performance Tuning", category: "Operations", difficulty: "Advanced", desc: "Optimizing system performance" },
      { name: "Incident Management", category: "Operations", difficulty: "Advanced", desc: "Managing outages" },
      { name: "Automation", category: "DevOps", difficulty: "Advanced", desc: "Automating operations tasks" },
      { name: "Disaster Recovery", category: "Operations", difficulty: "Advanced", desc: "Backup and recovery" },
      { name: "Scripting", category: "Programming", difficulty: "Intermediate", desc: "Bash/Python automation" }
    ],
    "embedded-systems-firmware-engineer": [
      { name: "C/C++", category: "Languages", difficulty: "Advanced", desc: "Low-level systems programming" },
      { name: "Microcontroller Programming", category: "Skills", difficulty: "Advanced", desc: "ARM, AVR, etc." },
      { name: "Real-Time Systems", category: "Skills", difficulty: "Advanced", desc: "RTOS programming" },
      { name: "Hardware Debugging", category: "Tools", difficulty: "Advanced", desc: "Debugging tools and techniques" },
      { name: "FPGA/Hardware Description", category: "Hardware", difficulty: "Advanced", desc: "VHDL/Verilog" },
      { name: "Power Management", category: "Hardware", difficulty: "Intermediate", desc: "Low-power design" },
      { name: "Communication Protocols", category: "Skills", difficulty: "Intermediate", desc: "I2C, SPI, UART" }
    ],
    "data-scientist": [
      { name: "Python/R", category: "Languages", difficulty: "Advanced", desc: "Data science languages" },
      { name: "Statistics", category: "Math", difficulty: "Advanced", desc: "Statistical analysis" },
      { name: "Machine Learning", category: "AI-ML", difficulty: "Advanced", desc: "ML algorithms and models" },
      { name: "Data Visualization", category: "Skills", difficulty: "Intermediate", desc: "Creating insightful visualizations" },
      { name: "SQL", category: "Languages", difficulty: "Intermediate", desc: "Data querying" },
      { name: "Pandas/NumPy", category: "Libraries", difficulty: "Advanced", desc: "Data manipulation" },
      { name: "Jupyter Notebooks", category: "Tools", difficulty: "Intermediate", desc: "Interactive data analysis" }
    ],
    "backend-engineer": [
      { name: "Node.js/Python/Java", category: "Languages", difficulty: "Advanced", desc: "Backend programming languages" },
      { name: "Database Design", category: "Databases", difficulty: "Advanced", desc: "SQL and NoSQL design" },
      { name: "API Design", category: "Architecture", difficulty: "Advanced", desc: "RESTful and GraphQL APIs" },
      { name: "Caching", category: "Architecture", difficulty: "Intermediate", desc: "Redis and caching strategies" },
      { name: "Message Queues", category: "Architecture", difficulty: "Intermediate", desc: "RabbitMQ, Kafka" },
      { name: "Microservices", category: "Architecture", difficulty: "Advanced", desc: "Service-oriented architecture" },
      { name: "Testing", category: "Skills", difficulty: "Intermediate", desc: "Unit and integration testing" }
    ],
    "mobile-app-developer-ios-android": [
      { name: "Swift/Kotlin", category: "Languages", difficulty: "Advanced", desc: "Native mobile languages" },
      { name: "React Native/Flutter", category: "Frameworks", difficulty: "Advanced", desc: "Cross-platform frameworks" },
      { name: "UI/UX Design", category: "Design", difficulty: "Intermediate", desc: "Mobile interface design" },
      { name: "Mobile APIs", category: "APIs", difficulty: "Intermediate", desc: "REST and GraphQL APIs" },
      { name: "Database", category: "Databases", difficulty: "Intermediate", desc: "SQLite, Realm" },
      { name: "Testing", category: "Skills", difficulty: "Intermediate", desc: "Unit and UI testing" },
      { name: "App Store Deployment", category: "Tools", difficulty: "Intermediate", desc: "Publishing to stores" }
    ],
    "product-manager-technical": [
      { name: "Product Strategy", category: "Skills", difficulty: "Advanced", desc: "Vision and roadmap" },
      { name: "User Research", category: "Skills", difficulty: "Intermediate", desc: "Understanding users" },
      { name: "Data Analysis", category: "Skills", difficulty: "Intermediate", desc: "Metrics and analytics" },
      { name: "Technical Understanding", category: "Knowledge", difficulty: "Intermediate", desc: "Tech fundamentals" },
      { name: "Stakeholder Management", category: "Skills", difficulty: "Advanced", desc: "Communication with teams" },
      { name: "Agile/Scrum", category: "Methodologies", difficulty: "Intermediate", desc: "Agile project management" },
      { name: "Documentation", category: "Skills", difficulty: "Intermediate", desc: "Writing PRDs and specs" }
    ],
    "quantum-computing-engineer": [
      { name: "Quantum Mechanics", category: "Physics", difficulty: "Advanced", desc: "Quantum principles" },
      { name: "Qiskit/Cirq", category: "Frameworks", difficulty: "Advanced", desc: "Quantum programming frameworks" },
      { name: "Python", category: "Languages", difficulty: "Advanced", desc: "Quantum algorithm development" },
      { name: "Linear Algebra", category: "Math", difficulty: "Advanced", desc: "Matrix operations" },
      { name: "Quantum Algorithms", category: "Skills", difficulty: "Advanced", desc: "Algorithm design" },
      { name: "Quantum Hardware", category: "Hardware", difficulty: "Advanced", desc: "Understanding quantum computers" },
      { name: "Error Correction", category: "Skills", difficulty: "Advanced", desc: "Quantum error handling" }
    ],
    "ar-vr-engineer": [
      { name: "Unity/Unreal", category: "Engines", difficulty: "Advanced", desc: "Game engines" },
      { name: "C#", category: "Languages", difficulty: "Advanced", desc: "Unity scripting" },
      { name: "3D Graphics", category: "Graphics", difficulty: "Advanced", desc: "3D modeling and rendering" },
      { name: "AR/VR APIs", category: "APIs", difficulty: "Advanced", desc: "ARKit, ARCore" },
      { name: "Spatial Computing", category: "Skills", difficulty: "Advanced", desc: "3D spatial awareness" },
      { name: "Physics Engine", category: "Skills", difficulty: "Intermediate", desc: "Real-time physics simulation" },
      { name: "Interaction Design", category: "Design", difficulty: "Intermediate", desc: "VR/AR user interaction" }
    ],
    "robotics-engineer": [
      { name: "C++/Python", category: "Languages", difficulty: "Advanced", desc: "Robot control languages" },
      { name: "ROS (Robot OS)", category: "Frameworks", difficulty: "Advanced", desc: "Robot operating system" },
      { name: "Robotics Hardware", category: "Hardware", difficulty: "Advanced", desc: "Motors, sensors, actuators" },
      { name: "Computer Vision", category: "AI-ML", difficulty: "Advanced", desc: "Visual perception" },
      { name: "Control Theory", category: "Engineering", difficulty: "Advanced", desc: "Robot control algorithms" },
      { name: "Kinematics/Dynamics", category: "Physics", difficulty: "Advanced", desc: "Robot movement" },
      { name: "SLAM", category: "AI-ML", difficulty: "Advanced", desc: "Simultaneous localization and mapping" }
    ],
    "network-engineer": [
      { name: "Networking Protocols", category: "Skills", difficulty: "Advanced", desc: "OSI model and protocols" },
      { name: "Cisco/Juniper", category: "Tools", difficulty: "Advanced", desc: "Network equipment" },
      { name: "Routing & Switching", category: "Skills", difficulty: "Advanced", desc: "Network routing" },
      { name: "Network Security", category: "Security", difficulty: "Advanced", desc: "Firewalls and VPNs" },
      { name: "Troubleshooting", category: "Skills", difficulty: "Advanced", desc: "Network diagnostics" },
      { name: "SDN", category: "Architecture", difficulty: "Advanced", desc: "Software-defined networking" },
      { name: "Network Monitoring", category: "Tools", difficulty: "Intermediate", desc: "Monitoring tools" }
    ],
    "solutions-architect": [
      { name: "System Design", category: "Architecture", difficulty: "Advanced", desc: "Large-scale systems" },
      { name: "Cloud Architecture", category: "Cloud", difficulty: "Advanced", desc: "Cloud solution design" },
      { name: "Technical Leadership", category: "Skills", difficulty: "Advanced", desc: "Leading technical teams" },
      { name: "Requirements Gathering", category: "Skills", difficulty: "Intermediate", desc: "Understanding client needs" },
      { name: "Documentation", category: "Skills", difficulty: "Intermediate", desc: "Architecture documentation" },
      { name: "Cost Analysis", category: "Skills", difficulty: "Intermediate", desc: "Solution cost estimation" },
      { name: "Technology Evaluation", category: "Skills", difficulty: "Advanced", desc: "Tool and technology selection" }
    ],
    "database-administrator-database-engineer": [
      { name: "SQL", category: "Languages", difficulty: "Advanced", desc: "Database query language" },
      { name: "Database Design", category: "Architecture", difficulty: "Advanced", desc: "Schema design" },
      { name: "Performance Tuning", category: "Skills", difficulty: "Advanced", desc: "Query optimization" },
      { name: "Backup & Recovery", category: "Operations", difficulty: "Advanced", desc: "Data protection" },
      { name: "Security", category: "Security", difficulty: "Advanced", desc: "Database security" },
      { name: "Replication", category: "Architecture", difficulty: "Advanced", desc: "Database replication" },
      { name: "Monitoring", category: "Operations", difficulty: "Intermediate", desc: "Database health monitoring" }
    ],
    "game-developer": [
      { name: "Unity/Unreal", category: "Engines", difficulty: "Advanced", desc: "Game development engines" },
      { name: "C#/C++", category: "Languages", difficulty: "Advanced", desc: "Game programming languages" },
      { name: "Game Design", category: "Design", difficulty: "Intermediate", desc: "Game mechanics and design" },
      { name: "Graphics Programming", category: "Graphics", difficulty: "Advanced", desc: "Rendering and shaders" },
      { name: "Audio", category: "Audio", difficulty: "Intermediate", desc: "Sound and music integration" },
      { name: "AI", category: "AI", difficulty: "Intermediate", desc: "NPC behavior and pathfinding" },
      { name: "Physics Engine", category: "Physics", difficulty: "Intermediate", desc: "Game physics" }
    ],
    "bioinformatics-engineer": [
      { name: "Python/R", category: "Languages", difficulty: "Advanced", desc: "Bioinformatics languages" },
      { name: "Genomics", category: "Biology", difficulty: "Advanced", desc: "DNA sequencing and analysis" },
      { name: "Proteomics", category: "Biology", difficulty: "Advanced", desc: "Protein analysis" },
      { name: "Statistics", category: "Math", difficulty: "Advanced", desc: "Biostatistics" },
      { name: "Bioinformatics Tools", category: "Tools", difficulty: "Advanced", desc: "BLAST, Bioconductor" },
      { name: "Machine Learning", category: "AI-ML", difficulty: "Advanced", desc: "ML for biological data" },
      { name: "Data Management", category: "Skills", difficulty: "Intermediate", desc: "Handling biological datasets" }
    ],
    "prompt-engineer-ai-product-specialist": [
      { name: "LLMs", category: "AI", difficulty: "Advanced", desc: "Understanding LLM behavior" },
      { name: "Prompt Design", category: "Skills", difficulty: "Advanced", desc: "Crafting effective prompts" },
      { name: "AI Ethics", category: "Knowledge", difficulty: "Intermediate", desc: "Responsible AI practices" },
      { name: "Content Creation", category: "Skills", difficulty: "Intermediate", desc: "Writing for AI systems" },
      { name: "Product Thinking", category: "Skills", difficulty: "Intermediate", desc: "Product development" },
      { name: "A/B Testing", category: "Skills", difficulty: "Intermediate", desc: "Testing prompt variations" },
      { name: "API Integration", category: "Skills", difficulty: "Intermediate", desc: "Using LLM APIs" }
    ],
    "hardware-engineer": [
      { name: "Circuit Design", category: "Hardware", difficulty: "Advanced", desc: "Schematic design" },
      { name: "PCB Design", category: "Hardware", difficulty: "Advanced", desc: "Physical board design" },
      { name: "Electronics", category: "Engineering", difficulty: "Advanced", desc: "Electrical engineering" },
      { name: "CAD Tools", category: "Tools", difficulty: "Advanced", desc: "EAGLE, Altium, KiCAD" },
      { name: "Simulation", category: "Skills", difficulty: "Intermediate", desc: "SPICE simulation" },
      { name: "Testing & Debugging", category: "Skills", difficulty: "Advanced", desc: "Hardware debugging" },
      { name: "Signal Integrity", category: "Engineering", difficulty: "Advanced", desc: "Signal analysis" }
    ],
    "autonomous-systems-self-driving-engineer": [
      { name: "Computer Vision", category: "AI-ML", difficulty: "Advanced", desc: "Visual perception" },
      { name: "Sensor Fusion", category: "Skills", difficulty: "Advanced", desc: "Combining sensor data" },
      { name: "Path Planning", category: "Robotics", difficulty: "Advanced", desc: "Navigation algorithms" },
      { name: "Control Systems", category: "Engineering", difficulty: "Advanced", desc: "Vehicle control" },
      { name: "Deep Learning", category: "AI-ML", difficulty: "Advanced", desc: "Neural networks for perception" },
      { name: "Simulation", category: "Tools", difficulty: "Intermediate", desc: "CARLA, Autoware" },
      { name: "Safety & Validation", category: "Skills", difficulty: "Advanced", desc: "Safety testing" }
    ],
    "ui-ux-designer-technical": [
      { name: "UI Design", category: "Design", difficulty: "Intermediate", desc: "User interface design" },
      { name: "UX Research", category: "Design", difficulty: "Intermediate", desc: "User research methods" },
      { name: "Prototyping", category: "Skills", difficulty: "Intermediate", desc: "Figma, Adobe XD" },
      { name: "Accessibility", category: "Skills", difficulty: "Intermediate", desc: "WCAG compliance" },
      { name: "HTML/CSS/JavaScript", category: "Frontend", difficulty: "Intermediate", desc: "Frontend web skills" },
      { name: "Design Systems", category: "Skills", difficulty: "Intermediate", desc: "Component libraries" },
      { name: "User Testing", category: "Skills", difficulty: "Intermediate", desc: "Usability testing" }
    ],
    "technical-writer": [
      { name: "Technical Writing", category: "Writing", difficulty: "Advanced", desc: "Clear technical documentation" },
      { name: "API Documentation", category: "Skills", difficulty: "Intermediate", desc: "API docs and examples" },
      { name: "Markdown/HTML", category: "Languages", difficulty: "Intermediate", desc: "Documentation markup" },
      { name: "Information Architecture", category: "Skills", difficulty: "Intermediate", desc: "Organizing information" },
      { name: "User Research", category: "Skills", difficulty: "Intermediate", desc: "Understanding users" },
      { name: "Tool Mastery", category: "Tools", difficulty: "Intermediate", desc: "Sphinx, GitBook, etc." },
      { name: "Editing", category: "Skills", difficulty: "Intermediate", desc: "Documentation editing" }
    ],
    "data-analyst": [
      { name: "SQL", category: "Languages", difficulty: "Advanced", desc: "Data query and analysis" },
      { name: "Data Visualization", category: "Tools", difficulty: "Advanced", desc: "Tableau, Power BI" },
      { name: "Statistics", category: "Math", difficulty: "Intermediate", desc: "Statistical analysis" },
      { name: "Excel", category: "Tools", difficulty: "Advanced", desc: "Advanced spreadsheet skills" },
      { name: "Python/R", category: "Languages", difficulty: "Intermediate", desc: "Data analysis languages" },
      { name: "Business Acumen", category: "Skills", difficulty: "Intermediate", desc: "Understanding business" },
      { name: "Dashboard Creation", category: "Skills", difficulty: "Intermediate", desc: "Building dashboards" }
    ],
    "it-security-analyst": [
      { name: "Security Best Practices", category: "Security", difficulty: "Advanced", desc: "Information security" },
      { name: "Vulnerability Assessment", category: "Security", difficulty: "Advanced", desc: "Identifying vulnerabilities" },
      { name: "Incident Response", category: "Security", difficulty: "Advanced", desc: "Handling incidents" },
      { name: "Compliance", category: "Governance", difficulty: "Intermediate", desc: "Regulatory compliance" },
      { name: "Network Security", category: "Security", difficulty: "Intermediate", desc: "Network protection" },
      { name: "SIEM Tools", category: "Tools", difficulty: "Intermediate", desc: "Security monitoring" },
      { name: "Threat Intelligence", category: "Security", difficulty: "Intermediate", desc: "Threat analysis" }
    ],
    "salesforce-developer": [
      { name: "Apex", category: "Languages", difficulty: "Advanced", desc: "Salesforce programming" },
      { name: "Lightning", category: "Frameworks", difficulty: "Advanced", desc: "Salesforce UI framework" },
      { name: "SOQL/SOSL", category: "Languages", difficulty: "Advanced", desc: "Salesforce query languages" },
      { name: "REST/SOAP APIs", category: "APIs", difficulty: "Advanced", desc: "Salesforce APIs" },
      { name: "Flow & Process Builder", category: "Skills", difficulty: "Intermediate", desc: "Workflow automation" },
      { name: "Data Management", category: "Skills", difficulty: "Intermediate", desc: "CRM data operations" },
      { name: "Security", category: "Security", difficulty: "Intermediate", desc: "Salesforce security model" }
    ],
    "computer-vision-engineer": [
      { name: "Python/C++", category: "Languages", difficulty: "Advanced", desc: "CV development languages" },
      { name: "OpenCV", category: "Libraries", difficulty: "Advanced", desc: "Computer vision library" },
      { name: "Deep Learning", category: "AI-ML", difficulty: "Advanced", desc: "CNN and vision models" },
      { name: "Image Processing", category: "Skills", difficulty: "Advanced", desc: "Image manipulation" },
      { name: "Object Detection", category: "AI-ML", difficulty: "Advanced", desc: "Detection algorithms" },
      { name: "Segmentation", category: "AI-ML", difficulty: "Advanced", desc: "Image segmentation" },
      { name: "3D Vision", category: "Skills", difficulty: "Advanced", desc: "3D reconstruction" }
    ],
    "natural-language-processing-nlp-engineer": [
      { name: "Python", category: "Languages", difficulty: "Advanced", desc: "NLP development" },
      { name: "NLP Libraries", category: "Libraries", difficulty: "Advanced", desc: "NLTK, spaCy, TextBlob" },
      { name: "Transformers", category: "AI-ML", difficulty: "Advanced", desc: "Transformer models" },
      { name: "Tokenization", category: "Skills", difficulty: "Intermediate", desc: "Text preprocessing" },
      { name: "Named Entity Recognition", category: "Skills", difficulty: "Advanced", desc: "NER systems" },
      { name: "Sentiment Analysis", category: "Skills", difficulty: "Intermediate", desc: "Sentiment detection" },
      { name: "Language Models", category: "AI-ML", difficulty: "Advanced", desc: "LLM fundamentals" }
    ],
    "penetration-tester-ethical-hacker": [
      { name: "Hacking Tools", category: "Tools", difficulty: "Advanced", desc: "Metasploit, Burp Suite" },
      { name: "Network Attacks", category: "Security", difficulty: "Advanced", desc: "Network penetration testing" },
      { name: "Web Application Security", category: "Security", difficulty: "Advanced", desc: "Web vulnerabilities" },
      { name: "Social Engineering", category: "Skills", difficulty: "Intermediate", desc: "Social engineering tactics" },
      { name: "Report Writing", category: "Skills", difficulty: "Intermediate", desc: "Vulnerability reports" },
      { name: "Linux/Windows", category: "OS", difficulty: "Advanced", desc: "OS penetration testing" },
      { name: "Cryptography", category: "Security", difficulty: "Intermediate", desc: "Encryption cracking" }
    ],
    "technical-program-manager-tpm": [
      { name: "Program Management", category: "Skills", difficulty: "Advanced", desc: "Project coordination" },
      { name: "Technical Leadership", category: "Skills", difficulty: "Advanced", desc: "Technical direction" },
      { name: "Agile/Scrum", category: "Methodologies", difficulty: "Intermediate", desc: "Agile methodologies" },
      { name: "Stakeholder Management", category: "Skills", difficulty: "Advanced", desc: "Cross-team coordination" },
      { name: "Risk Management", category: "Skills", difficulty: "Intermediate", desc: "Identifying and mitigating risks" },
      { name: "Data Analysis", category: "Skills", difficulty: "Intermediate", desc: "Program metrics" },
      { name: "Documentation", category: "Skills", difficulty: "Intermediate", desc: "Writing specifications" }
    ],
    "gis-geospatial-engineer": [
      { name: "GIS Software", category: "Tools", difficulty: "Advanced", desc: "ArcGIS, QGIS" },
      { name: "Remote Sensing", category: "Skills", difficulty: "Advanced", desc: "Satellite imagery analysis" },
      { name: "Spatial Analysis", category: "Skills", difficulty: "Advanced", desc: "GIS analysis techniques" },
      { name: "GPS & Geodesy", category: "Skills", difficulty: "Intermediate", desc: "GPS and coordinate systems" },
      { name: "Database", category: "Databases", difficulty: "Intermediate", desc: "Spatial databases" },
      { name: "Python/R", category: "Languages", difficulty: "Intermediate", desc: "Scripting for GIS" },
      { name: "Cartography", category: "Design", difficulty: "Intermediate", desc: "Map design and visualization" }
    ],
    "security-architect": [
      { name: "Security Design", category: "Security", difficulty: "Advanced", desc: "Security architecture" },
      { name: "Threat Modeling", category: "Security", difficulty: "Advanced", desc: "Identifying threats" },
      { name: "Security Standards", category: "Governance", difficulty: "Advanced", desc: "NIST, ISO 27001" },
      { name: "Zero Trust Architecture", category: "Architecture", difficulty: "Advanced", desc: "Modern security models" },
      { name: "Cryptography", category: "Security", difficulty: "Advanced", desc: "Encryption implementation" },
      { name: "Access Control", category: "Security", difficulty: "Advanced", desc: "IAM systems" },
      { name: "Compliance", category: "Governance", difficulty: "Intermediate", desc: "Security compliance" }
    ],
    "infrastructure-engineer": [
      { name: "Server Management", category: "Operations", difficulty: "Advanced", desc: "Physical and virtual servers" },
      { name: "Networking", category: "Infrastructure", difficulty: "Advanced", desc: "Network infrastructure" },
      { name: "Storage Systems", category: "Infrastructure", difficulty: "Advanced", desc: "Storage solutions" },
      { name: "Virtualization", category: "Infrastructure", difficulty: "Advanced", desc: "VMware, Hyper-V" },
      { name: "Load Balancing", category: "Infrastructure", difficulty: "Intermediate", desc: "Load balancing solutions" },
      { name: "Disaster Recovery", category: "Operations", difficulty: "Advanced", desc: "Business continuity" },
      { name: "Infrastructure Automation", category: "DevOps", difficulty: "Intermediate", desc: "IaC tools" }
    ],
    "devops-architect": [
      { name: "CI/CD", category: "DevOps", difficulty: "Advanced", desc: "Continuous integration and deployment" },
      { name: "Infrastructure as Code", category: "DevOps", difficulty: "Advanced", desc: "Terraform, CloudFormation" },
      { name: "Container Orchestration", category: "DevOps", difficulty: "Advanced", desc: "Kubernetes" },
      { name: "Monitoring", category: "Operations", difficulty: "Advanced", desc: "Observability and monitoring" },
      { name: "Cloud Architecture", category: "Cloud", difficulty: "Advanced", desc: "Cloud design patterns" },
      { name: "Team Leadership", category: "Skills", difficulty: "Advanced", desc: "Leading DevOps teams" },
      { name: "Security", category: "Security", difficulty: "Advanced", desc: "DevOps security" }
    ],
    "mlops-engineer": [
      { name: "Machine Learning", category: "AI-ML", difficulty: "Advanced", desc: "ML fundamentals" },
      { name: "MLflow/Kubeflow", category: "Tools", difficulty: "Advanced", desc: "ML workflow tools" },
      { name: "Model Deployment", category: "DevOps", difficulty: "Advanced", desc: "Deploying ML models" },
      { name: "Model Monitoring", category: "Operations", difficulty: "Advanced", desc: "ML model monitoring" },
      { name: "Data Pipelines", category: "Architecture", difficulty: "Advanced", desc: "ML data pipelines" },
      { name: "Kubernetes", category: "Infrastructure", difficulty: "Advanced", desc: "Container orchestration" },
      { name: "Python", category: "Languages", difficulty: "Advanced", desc: "Python for ML" }
    ],
    "backend-architect": [
      { name: "System Design", category: "Architecture", difficulty: "Advanced", desc: "Large-scale system design" },
      { name: "Microservices", category: "Architecture", difficulty: "Advanced", desc: "Microservices architecture" },
      { name: "API Design", category: "Architecture", difficulty: "Advanced", desc: "RESTful and event-driven APIs" },
      { name: "Database Architecture", category: "Architecture", difficulty: "Advanced", desc: "Database design patterns" },
      { name: "Scalability", category: "Skills", difficulty: "Advanced", desc: "Scaling systems" },
      { name: "Performance", category: "Skills", difficulty: "Advanced", desc: "Performance optimization" },
      { name: "Leadership", category: "Skills", difficulty: "Advanced", desc: "Technical leadership" }
    ],
    "enterprise-architect": [
      { name: "Enterprise Design", category: "Architecture", difficulty: "Advanced", desc: "Enterprise architecture" },
      { name: "IT Strategy", category: "Strategy", difficulty: "Advanced", desc: "IT strategic planning" },
      { name: "Technology Selection", category: "Skills", difficulty: "Advanced", desc: "Choosing technologies" },
      { name: "Change Management", category: "Skills", difficulty: "Advanced", desc: "Managing organizational change" },
      { name: "Governance", category: "Governance", difficulty: "Advanced", desc: "Enterprise governance" },
      { name: "Risk Management", category: "Skills", difficulty: "Advanced", desc: "Enterprise risk assessment" },
      { name: "Business Acumen", category: "Skills", difficulty: "Intermediate", desc: "Understanding business" }
    ],
    "solutions-engineer": [
      { name: "Solution Design", category: "Architecture", difficulty: "Advanced", desc: "Customer solution design" },
      { name: "Technical Sales", category: "Skills", difficulty: "Advanced", desc: "Pre-sales technical support" },
      { name: "Product Knowledge", category: "Skills", difficulty: "Advanced", desc: "Deep product expertise" },
      { name: "Presentation Skills", category: "Skills", difficulty: "Intermediate", desc: "Technical presentations" },
      { name: "Problem Solving", category: "Skills", difficulty: "Advanced", desc: "Customer problem solving" },
      { name: "Client Management", category: "Skills", difficulty: "Advanced", desc: "Client relationship management" },
      { name: "Documentation", category: "Skills", difficulty: "Intermediate", desc: "Solution documentation" }
    ],
    "integration-engineer": [
      { name: "Integration Platforms", category: "Tools", difficulty: "Advanced", desc: "iPaaS solutions" },
      { name: "API Integration", category: "Skills", difficulty: "Advanced", desc: "System integration via APIs" },
      { name: "ETL/ELT", category: "Skills", difficulty: "Advanced", desc: "Data integration" },
      { name: "Middleware", category: "Architecture", difficulty: "Advanced", desc: "Middleware solutions" },
      { name: "Workflow Automation", category: "Skills", difficulty: "Intermediate", desc: "Business process automation" },
      { name: "XML/JSON", category: "Data", difficulty: "Intermediate", desc: "Data format expertise" },
      { name: "Testing", category: "Skills", difficulty: "Intermediate", desc: "Integration testing" }
    ],
    "performance-engineer": [
      { name: "Performance Testing", category: "Testing", difficulty: "Advanced", desc: "Load and stress testing" },
      { name: "Profiling Tools", category: "Tools", difficulty: "Advanced", desc: "Performance profiling" },
      { name: "Optimization", category: "Skills", difficulty: "Advanced", desc: "Performance optimization" },
      { name: "Monitoring", category: "Operations", difficulty: "Advanced", desc: "Performance monitoring" },
      { name: "Database Tuning", category: "Databases", difficulty: "Advanced", desc: "Query optimization" },
      { name: "Architecture", category: "Architecture", difficulty: "Advanced", desc: "Performance architecture" },
      { name: "Scripting", category: "Programming", difficulty: "Intermediate", desc: "Performance automation" }
    ],
    "release-engineer": [
      { name: "Release Management", category: "DevOps", difficulty: "Advanced", desc: "Managing releases" },
      { name: "Version Control", category: "Tools", difficulty: "Advanced", desc: "Git and branching strategies" },
      { name: "Build Tools", category: "Tools", difficulty: "Advanced", desc: "Maven, Gradle, npm" },
      { name: "Automation", category: "DevOps", difficulty: "Advanced", desc: "Release automation" },
      { name: "Testing", category: "Skills", difficulty: "Intermediate", desc: "Release testing" },
      { name: "Documentation", category: "Skills", difficulty: "Intermediate", desc: "Release notes" },
      { name: "Communication", category: "Skills", difficulty: "Intermediate", desc: "Release communication" }
    ],
    "siem-analyst": [
      { name: "SIEM Tools", category: "Tools", difficulty: "Advanced", desc: "Splunk, ELK, ArcSight" },
      { name: "Log Analysis", category: "Security", difficulty: "Advanced", desc: "Security log analysis" },
      { name: "Threat Detection", category: "Security", difficulty: "Advanced", desc: "Identifying threats" },
      { name: "Incident Response", category: "Security", difficulty: "Advanced", desc: "Responding to incidents" },
      { name: "Compliance Monitoring", category: "Governance", difficulty: "Intermediate", desc: "Compliance tracking" },
      { name: "Alert Management", category: "Security", difficulty: "Intermediate", desc: "Alert tuning" },
      { name: "Data Analysis", category: "Skills", difficulty: "Intermediate", desc: "Security data analysis" }
    ],
    "systems-administrator": [
      { name: "Linux/Windows", category: "OS", difficulty: "Advanced", desc: "OS administration" },
      { name: "Active Directory", category: "Tools", difficulty: "Advanced", desc: "AD management" },
      { name: "User Management", category: "Operations", difficulty: "Intermediate", desc: "User account management" },
      { name: "System Backup", category: "Operations", difficulty: "Advanced", desc: "Backup and recovery" },
      { name: "Security", category: "Security", difficulty: "Intermediate", desc: "System security" },
      { name: "Networking", category: "Infrastructure", difficulty: "Intermediate", desc: "Network basics" },
      { name: "Troubleshooting", category: "Skills", difficulty: "Advanced", desc: "System troubleshooting" }
    ],
    "cloud-security-engineer": [
      { name: "Cloud Security", category: "Security", difficulty: "Advanced", desc: "AWS/Azure/GCP security" },
      { name: "IAM", category: "Security", difficulty: "Advanced", desc: "Identity and access management" },
      { name: "Compliance", category: "Governance", difficulty: "Advanced", desc: "Cloud compliance" },
      { name: "Data Protection", category: "Security", difficulty: "Advanced", desc: "Data encryption and protection" },
      { name: "Network Security", category: "Security", difficulty: "Advanced", desc: "Cloud network security" },
      { name: "Security Automation", category: "DevOps", difficulty: "Advanced", desc: "IaC security" },
      { name: "Threat Detection", category: "Security", difficulty: "Intermediate", desc: "Cloud threat monitoring" }
    ],
    "api-developer": [
      { name: "REST APIs", category: "APIs", difficulty: "Advanced", desc: "RESTful API design" },
      { name: "GraphQL", category: "APIs", difficulty: "Advanced", desc: "GraphQL development" },
      { name: "API Security", category: "Security", difficulty: "Advanced", desc: "API authentication and authorization" },
      { name: "API Documentation", category: "Skills", difficulty: "Intermediate", desc: "OpenAPI/Swagger" },
      { name: "API Gateway", category: "Architecture", difficulty: "Intermediate", desc: "API gateway management" },
      { name: "Backend Development", category: "Backend", difficulty: "Advanced", desc: "Backend implementation" },
      { name: "Testing", category: "Skills", difficulty: "Intermediate", desc: "API testing" }
    ],
    "technical-sales-engineer": [
      { name: "Technical Expertise", category: "Knowledge", difficulty: "Advanced", desc: "Deep product knowledge" },
      { name: "Sales Skills", category: "Skills", difficulty: "Advanced", desc: "Consultative selling" },
      { name: "Presentation Skills", category: "Skills", difficulty: "Advanced", desc: "Technical presentations" },
      { name: "Demo Development", category: "Skills", difficulty: "Intermediate", desc: "Creating product demos" },
      { name: "Customer Problem Solving", category: "Skills", difficulty: "Advanced", desc: "Solving customer problems" },
      { name: "Negotiation", category: "Skills", difficulty: "Intermediate", desc: "Negotiation techniques" },
      { name: "Account Management", category: "Skills", difficulty: "Intermediate", desc: "Customer relationship management" }
    ]
  };

  // Create skills records
  const allowedCategories = new Set([
    "Languages",
    "Frameworks",
    "Tools",
    "Concepts",
    "Databases",
    "Cloud Platforms",
    "Security",
    "DevOps",
    "AI-ML",
    "Mobile",
    "Testing",
    "Design"
  ]);

  const categoryMap = {
    "AI": "AI-ML",
    "APIs": "Frameworks",
    "Architecture": "Concepts",
    "Audio": "Tools",
    "Backend": "Concepts",
    "Biology": "Concepts",
    "Blockchain": "Concepts",
    "Cloud": "Cloud Platforms",
    "Containerization": "DevOps",
    "Data": "Concepts",
    "Engineering": "Concepts",
    "Engines": "Frameworks",
    "Frontend": "Concepts",
    "Governance": "Security",
    "Graphics": "Design",
    "Hardware": "Tools",
    "Infrastructure": "DevOps",
    "Knowledge": "Concepts",
    "Libraries": "Frameworks",
    "Math": "Concepts",
    "Methodologies": "Concepts",
    "Operations": "DevOps",
    "OS": "Tools",
    "Physics": "Concepts",
    "Programming": "Languages",
    "Robotics": "Concepts",
    "Skills": "Concepts",
    "Strategy": "Concepts",
    "Writing": "Concepts"
  };

  const normalizeCategory = (category) => {
    if (allowedCategories.has(category)) return category;
    return categoryMap[category] || "Concepts";
  };

  let skillsCreated = 0;
  for (const [careerSlug, skills] of Object.entries(careerSkillsData)) {
    for (const skill of skills) {
      const record = new Record(skillsCollection);
      record.set("skillName", skill.name);
      record.set("category", normalizeCategory(skill.category));
      record.set("difficulty", skill.difficulty);
      record.set("description", skill.desc);
      record.set("relatedCareers", [careerSlug]);
      record.set("phase", skill.difficulty || "Intermediate");
      try {
        app.save(record);
        skillsCreated++;
      } catch(e) {
        if (!e.message.includes("unique")) throw e;
      }
    }
  }
  console.log("Created " + skillsCreated + " careerSkills records.");

  // Comprehensive roadmap data for all 50 careers (4 phases per career)
  const careerRoadmapsData = {
    "machine-learning-engineer": [
      { phase: "Foundation", title: "ML Fundamentals", description: "Learn Python, statistics, basic ML concepts. Complete online courses (Andrew Ng's ML course)." },
      { phase: "Intermediate", title: "Hands-on ML", description: "Build projects with sklearn, pandas. Participate in Kaggle competitions. Learn feature engineering." },
      { phase: "Advanced", title: "Deep Learning", description: "Master TensorFlow/PyTorch. Build neural networks. Understand CNNs, RNNs, attention mechanisms." },
      { phase: "Professional", title: "Production ML", description: "Deploy models at scale. Learn MLOps, model monitoring, A/B testing. Lead ML initiatives." }
    ],
    "ai-llm-engineer": [
      { phase: "Foundation", title: "LLM Basics", description: "Understand transformer architecture. Study attention mechanisms. Learn about major LLMs." },
      { phase: "Intermediate", title: "Prompt Engineering", description: "Master prompt design techniques. Learn RAG systems. Build LLM applications using APIs." },
      { phase: "Advanced", title: "Fine-tuning & Agents", description: "Fine-tune LLMs. Build autonomous agents. Implement multi-step reasoning." },
      { phase: "Professional", title: "Production Systems", description: "Deploy LLM applications at scale. Manage costs and latency. Build retrieval systems." }
    ],
    "cloud-architect": [
      { phase: "Foundation", title: "Cloud Basics", description: "Learn cloud computing concepts. Understand compute, storage, networking. Get cloud certification." },
      { phase: "Intermediate", title: "Solution Design", description: "Design scalable architectures. Implement security best practices. Optimize costs." },
      { phase: "Advanced", title: "Enterprise Architecture", description: "Design multi-cloud solutions. Implement disaster recovery. Design for compliance." },
      { phase: "Professional", title: "Strategic Planning", description: "Lead digital transformation. Advise on cloud strategy. Manage large projects." }
    ],
    "devops-platform-engineer": [
      { phase: "Foundation", title: "Container Basics", description: "Learn Docker fundamentals. Understand containerization. Build container images." },
      { phase: "Intermediate", title: "Orchestration", description: "Master Kubernetes. Deploy applications. Implement CI/CD pipelines." },
      { phase: "Advanced", title: "Infrastructure as Code", description: "Learn Terraform/CloudFormation. Automate infrastructure. Implement IaC patterns." },
      { phase: "Professional", title: "Platform Leadership", description: "Build internal platforms. Standardize deployments. Lead platform teams." }
    ],
    "cybersecurity-engineer": [
      { phase: "Foundation", title: "Security Basics", description: "Learn security principles. Understand threats and vulnerabilities. Get Security+ certification." },
      { phase: "Intermediate", title: "Hands-on Security", description: "Practice penetration testing. Implement firewalls and VPNs. Set up intrusion detection." },
      { phase: "Advanced", title: "Advanced Threats", description: "Learn advanced attack techniques. Implement advanced defense mechanisms. Study threat intelligence." },
      { phase: "Professional", title: "Security Leadership", description: "Lead security initiatives. Design security strategies. Manage security teams." }
    ],
    "data-engineer": [
      { phase: "Foundation", title: "SQL Mastery", description: "Master SQL. Learn database design. Build queries. Understand data modeling." },
      { phase: "Intermediate", title: "Big Data", description: "Learn Spark. Build data pipelines. Work with Hadoop. Implement ETL." },
      { phase: "Advanced", title: "Data Warehousing", description: "Design data warehouses. Implement dimensional modeling. Optimize for analytics." },
      { phase: "Professional", title: "Data Platform", description: "Build data platforms. Implement data governance. Lead data initiatives." }
    ],
    "full-stack-engineer": [
      { phase: "Foundation", title: "Web Fundamentals", description: "Master HTML/CSS/JavaScript. Learn responsive design. Understand web standards." },
      { phase: "Intermediate", title: "Frontend Framework", description: "Learn React/Vue/Angular. Build interactive UIs. Master state management." },
      { phase: "Advanced", title: "Backend Development", description: "Learn Node.js/Express. Build APIs. Implement databases. Understand server architecture." },
      { phase: "Professional", title: "Full-Stack Mastery", description: "Architect full-stack applications. Optimize performance. Deploy to production." }
    ],
    "blockchain-web3-engineer": [
      { phase: "Foundation", title: "Blockchain Basics", description: "Understand blockchain technology. Learn about consensus mechanisms. Study cryptocurrencies." },
      { phase: "Intermediate", title: "Smart Contracts", description: "Learn Solidity. Write smart contracts. Understand gas optimization. Test contracts." },
      { phase: "Advanced", title: "DeFi Development", description: "Build DeFi protocols. Implement complex smart contracts. Learn about security audits." },
      { phase: "Professional", title: "Production Systems", description: "Deploy to mainnet. Manage liquidity pools. Handle real user transactions." }
    ],
    "site-reliability-engineer-sre": [
      { phase: "Foundation", title: "Infrastructure Basics", description: "Learn system administration. Understand networking. Learn Linux/Windows." },
      { phase: "Intermediate", title: "Monitoring & Alerting", description: "Implement monitoring systems. Set up alerting. Learn incident management." },
      { phase: "Advanced", title: "Reliability Engineering", description: "Design for reliability. Implement SLOs. Build disaster recovery." },
      { phase: "Professional", title: "SRE Leadership", description: "Lead SRE teams. Build platform reliability. Mentor junior engineers." }
    ],
    "embedded-systems-firmware-engineer": [
      { phase: "Foundation", title: "Microcontroller Basics", description: "Learn C/C++. Understand microcontroller architecture. Build simple programs." },
      { phase: "Intermediate", title: "Real-Time Systems", description: "Learn RTOS. Build real-time applications. Implement interrupt handling." },
      { phase: "Advanced", title: "Advanced Firmware", description: "Optimize firmware. Implement power management. Build complex systems." },
      { phase: "Professional", title: "Firmware Leadership", description: "Lead firmware teams. Architect systems. Manage production deployments." }
    ],
    "data-scientist": [
      { phase: "Foundation", title: "Statistics & Python", description: "Master Python. Learn statistics. Understand probability. Build data manipulation skills." },
      { phase: "Intermediate", title: "Machine Learning", description: "Learn ML algorithms. Build prediction models. Implement classification and regression." },
      { phase: "Advanced", title: "Advanced Analytics", description: "Master deep learning. Build complex models. Implement advanced techniques." },
      { phase: "Professional", title: "Data Science Leadership", description: "Lead data science teams. Drive insights. Communicate findings effectively." }
    ],
    "backend-engineer": [
      { phase: "Foundation", title: "Backend Basics", description: "Learn server-side programming. Understand databases. Build simple APIs." },
      { phase: "Intermediate", title: "Scalable Backends", description: "Learn caching. Implement message queues. Build microservices." },
      { phase: "Advanced", title: "High-Performance Systems", description: "Optimize database queries. Implement advanced caching. Design scalable architectures." },
      { phase: "Professional", title: "Backend Architecture", description: "Lead backend teams. Design systems. Mentor engineers." }
    ],
    "mobile-app-developer-ios-android": [
      { phase: "Foundation", title: "Mobile Basics", description: "Learn Swift/Kotlin. Understand mobile UI patterns. Build basic apps." },
      { phase: "Intermediate", title: "Production Apps", description: "Implement networking. Build complex UIs. Optimize performance." },
      { phase: "Advanced", title: "Cross-Platform", description: "Learn React Native/Flutter. Build cross-platform apps. Manage code sharing." },
      { phase: "Professional", title: "App Leadership", description: "Lead mobile teams. Architect apps. Manage app store presence." }
    ],
    "product-manager-technical": [
      { phase: "Foundation", title: "Product Basics", description: "Understand product management. Learn user research. Build empathy." },
      { phase: "Intermediate", title: "Product Strategy", description: "Define product vision. Write PRDs. Prioritize features. Work with teams." },
      { phase: "Advanced", title: "Strategic Planning", description: "Develop long-term strategy. Understand market dynamics. Build roadmaps." },
      { phase: "Professional", title: "Executive Leadership", description: "Lead product organization. Drive company strategy. Manage portfolio." }
    ],
    "quantum-computing-engineer": [
      { phase: "Foundation", title: "Quantum Physics", description: "Learn quantum mechanics. Understand qubits. Study quantum gates." },
      { phase: "Intermediate", title: "Quantum Programming", description: "Learn Qiskit/Cirq. Write quantum programs. Run on simulators." },
      { phase: "Advanced", title: "Quantum Algorithms", description: "Study algorithms (Shor's, Grover's). Implement error correction. Optimize circuits." },
      { phase: "Professional", title: "Quantum Systems", description: "Run on real quantum computers. Solve real problems. Lead quantum initiatives." }
    ],
    "ar-vr-engineer": [
      { phase: "Foundation", title: "3D Graphics Basics", description: "Learn 3D graphics. Understand game engines. Build simple scenes." },
      { phase: "Intermediate", title: "VR Development", description: "Learn VR APIs. Build immersive experiences. Implement interaction." },
      { phase: "Advanced", title: "Advanced Graphics", description: "Master shaders. Implement advanced effects. Optimize performance." },
      { phase: "Professional", title: "VR Systems", description: "Lead VR teams. Build complex experiences. Deploy to production." }
    ],
    "robotics-engineer": [
      { phase: "Foundation", title: "Robotics Basics", description: "Learn ROS. Understand robot hardware. Build simple robots." },
      { phase: "Intermediate", title: "Robot Programming", description: "Program autonomous behavior. Implement navigation. Add sensors." },
      { phase: "Advanced", title: "Advanced Robotics", description: "Implement SLAM. Build manipulation systems. Advanced control." },
      { phase: "Professional", title: "Robotics Systems", description: "Lead robotics teams. Deploy industrial robots. Manage projects." }
    ],
    "network-engineer": [
      { phase: "Foundation", title: "Networking Basics", description: "Learn OSI model. Understand protocols. Study networking devices." },
      { phase: "Intermediate", title: "Network Design", description: "Design networks. Implement routing. Configure switches. Ensure security." },
      { phase: "Advanced", title: "Enterprise Networks", description: "Design large networks. Implement redundancy. Optimize performance." },
      { phase: "Professional", title: "Network Leadership", description: "Lead network teams. Architect networks. Manage infrastructure." }
    ],
    "solutions-architect": [
      { phase: "Foundation", title: "Architecture Basics", description: "Learn system design. Understand architecture patterns. Study design principles." },
      { phase: "Intermediate", title: "Solution Design", description: "Design customer solutions. Understand requirements. Create architectures." },
      { phase: "Advanced", title: "Enterprise Solutions", description: "Design complex solutions. Integrate systems. Ensure scalability." },
      { phase: "Professional", title: "Architectural Leadership", description: "Lead architecture teams. Mentor architects. Drive technology strategy." }
    ],
    "database-administrator-database-engineer": [
      { phase: "Foundation", title: "Database Basics", description: "Learn SQL. Understand database design. Study normalization." },
      { phase: "Intermediate", title: "Database Administration", description: "Manage databases. Implement backups. Optimize performance." },
      { phase: "Advanced", title: "Enterprise Databases", description: "Design large databases. Implement replication. Ensure high availability." },
      { phase: "Professional", title: "Database Leadership", description: "Lead database teams. Architect data systems. Mentor DBAs." }
    ],
    "game-developer": [
      { phase: "Foundation", title: "Game Dev Basics", description: "Learn game engine. Understand game loops. Build simple games." },
      { phase: "Intermediate", title: "Game Development", description: "Build game mechanics. Implement physics. Create levels." },
      { phase: "Advanced", title: "Advanced Graphics", description: "Master graphics programming. Implement effects. Optimize rendering." },
      { phase: "Professional", title: "Game Production", description: "Lead game teams. Ship games. Build game studios." }
    ],
    "bioinformatics-engineer": [
      { phase: "Foundation", title: "Bio Basics", description: "Learn molecular biology. Understand genetics. Study bioinformatics concepts." },
      { phase: "Intermediate", title: "Genomics", description: "Learn sequence analysis. Work with genomic data. Build pipelines." },
      { phase: "Advanced", title: "Advanced Analysis", description: "Implement proteomics. Advanced genomics analysis. Machine learning for biology." },
      { phase: "Professional", title: "Bioinformatics Leadership", description: "Lead research teams. Drive discoveries. Manage projects." }
    ],
    "prompt-engineer-ai-product-specialist": [
      { phase: "Foundation", title: "LLM Fundamentals", description: "Understand how LLMs work. Learn prompt basics. Experiment with APIs." },
      { phase: "Intermediate", title: "Prompt Optimization", description: "Master prompt design. Implement few-shot learning. Build prompt templates." },
      { phase: "Advanced", title: "Advanced Techniques", description: "Implement chain-of-thought. Build prompt chains. Optimize for specific tasks." },
      { phase: "Professional", title: "Prompt Systems", description: "Build production systems. Optimize costs. Manage LLM applications." }
    ],
    "hardware-engineer": [
      { phase: "Foundation", title: "Electronics Basics", description: "Learn circuit design. Understand components. Build basic circuits." },
      { phase: "Intermediate", title: "PCB Design", description: "Design circuits. Create PCBs. Test designs. Optimize layouts." },
      { phase: "Advanced", title: "Advanced Design", description: "High-speed design. Power management. Signal integrity." },
      { phase: "Professional", title: "Hardware Leadership", description: "Lead hardware teams. Manage projects. Bring products to market." }
    ],
    "autonomous-systems-self-driving-engineer": [
      { phase: "Foundation", title: "Autonomous Basics", description: "Learn perception. Understand planning. Study control systems." },
      { phase: "Intermediate", title: "Autonomous Systems", description: "Build perception pipelines. Implement planning algorithms. Test safety." },
      { phase: "Advanced", title: "Advanced Autonomy", description: "Advanced perception. End-to-end learning. Behavior planning." },
      { phase: "Professional", title: "Autonomous Vehicles", description: "Deploy autonomous vehicles. Manage testing. Handle safety validation." }
    ],
    "ui-ux-designer-technical": [
      { phase: "Foundation", title: "Design Basics", description: "Learn design principles. Study user research. Master design tools." },
      { phase: "Intermediate", title: "UX Design", description: "Design user experiences. Conduct usability testing. Build prototypes." },
      { phase: "Advanced", title: "Advanced Design", description: "Design systems. Accessibility. Performance optimization." },
      { phase: "Professional", title: "Design Leadership", description: "Lead design teams. Drive product vision. Mentor designers." }
    ],
    "technical-writer": [
      { phase: "Foundation", title: "Writing Basics", description: "Master technical writing. Learn documentation tools. Study style guides." },
      { phase: "Intermediate", title: "Documentation", description: "Write API docs. Create user guides. Build tutorials." },
      { phase: "Advanced", title: "Advanced Docs", description: "Build documentation systems. Manage documentation teams. Scale documentation." },
      { phase: "Professional", title: "Documentation Leadership", description: "Lead documentation efforts. Mentor writers. Drive content strategy." }
    ],
    "data-analyst": [
      { phase: "Foundation", title: "Analytics Basics", description: "Learn SQL. Master Excel. Understand basic statistics." },
      { phase: "Intermediate", title: "Data Analysis", description: "Create dashboards. Analyze data. Present findings." },
      { phase: "Advanced", title: "Advanced Analytics", description: "Statistical modeling. Predictive analysis. Machine learning." },
      { phase: "Professional", title: "Analytics Leadership", description: "Lead analytics teams. Drive insights. Mentor analysts." }
    ],
    "it-security-analyst": [
      { phase: "Foundation", title: "Security Basics", description: "Learn security principles. Understand threats. Study compliance." },
      { phase: "Intermediate", title: "Threat Analysis", description: "Analyze threats. Assess vulnerabilities. Manage incidents." },
      { phase: "Advanced", title: "Advanced Security", description: "Threat modeling. Advanced analysis. Security research." },
      { phase: "Professional", title: "Security Leadership", description: "Lead security teams. Drive security strategy. Manage incidents." }
    ],
    "salesforce-developer": [
      { phase: "Foundation", title: "Salesforce Basics", description: "Learn Salesforce platform. Understand Apex. Study Lightning." },
      { phase: "Intermediate", title: "Salesforce Development", description: "Build custom features. Implement integrations. Customize workflows." },
      { phase: "Advanced", title: "Advanced Salesforce", description: "Advanced Apex. Complex integrations. Performance optimization." },
      { phase: "Professional", title: "Salesforce Leadership", description: "Lead Salesforce teams. Architect solutions. Drive adoption." }
    ],
    "computer-vision-engineer": [
      { phase: "Foundation", title: "Vision Basics", description: "Learn image processing. Study computer vision. Understand OpenCV." },
      { phase: "Intermediate", title: "Vision Systems", description: "Build object detection. Implement segmentation. Deploy systems." },
      { phase: "Advanced", title: "Advanced Vision", description: "Deep learning for vision. 3D vision. Advanced algorithms." },
      { phase: "Professional", title: "Vision Leadership", description: "Lead vision teams. Deploy systems. Manage projects." }
    ],
    "natural-language-processing-nlp-engineer": [
      { phase: "Foundation", title: "NLP Basics", description: "Learn text processing. Study NLP concepts. Master libraries." },
      { phase: "Intermediate", title: "NLP Systems", description: "Build NLP models. Implement text analysis. Deploy systems." },
      { phase: "Advanced", title: "Advanced NLP", description: "Transformers. LLMs. Advanced techniques." },
      { phase: "Professional", title: "NLP Leadership", description: "Lead NLP teams. Deploy systems. Drive innovation." }
    ],
    "penetration-tester-ethical-hacker": [
      { phase: "Foundation", title: "Hacking Basics", description: "Learn ethical hacking. Study network attacks. Master tools." },
      { phase: "Intermediate", title: "Penetration Testing", description: "Conduct penetration tests. Find vulnerabilities. Write reports." },
      { phase: "Advanced", title: "Advanced Hacking", description: "Advanced techniques. Red team operations. Custom exploits." },
      { phase: "Professional", title: "Security Leadership", description: "Lead security teams. Manage assessments. Drive improvements." }
    ],
    "technical-program-manager-tpm": [
      { phase: "Foundation", title: "Program Basics", description: "Learn program management. Understand agile. Study planning." },
      { phase: "Intermediate", title: "Program Execution", description: "Manage programs. Coordinate teams. Track progress." },
      { phase: "Advanced", title: "Advanced Programs", description: "Complex program management. Stakeholder management. Risk management." },
      { phase: "Professional", title: "Program Leadership", description: "Lead program teams. Drive strategy. Mentor PMs." }
    ],
    "gis-geospatial-engineer": [
      { phase: "Foundation", title: "GIS Basics", description: "Learn GIS software. Understand spatial data. Study coordinate systems." },
      { phase: "Intermediate", title: "GIS Analysis", description: "Perform spatial analysis. Work with remote sensing. Create maps." },
      { phase: "Advanced", title: "Advanced GIS", description: "Complex analysis. 3D GIS. Advanced modeling." },
      { phase: "Professional", title: "GIS Leadership", description: "Lead GIS teams. Implement systems. Manage projects." }
    ],
    "security-architect": [
      { phase: "Foundation", title: "Security Basics", description: "Learn security principles. Study architecture. Understand threats." },
      { phase: "Intermediate", title: "Security Design", description: "Design security architectures. Implement controls. Ensure compliance." },
      { phase: "Advanced", title: "Advanced Security", description: "Threat modeling. Advanced architecture. Security research." },
      { phase: "Professional", title: "Security Leadership", description: "Lead security initiatives. Drive strategy. Mentor architects." }
    ],
    "infrastructure-engineer": [
      { phase: "Foundation", title: "Infrastructure Basics", description: "Learn infrastructure concepts. Understand servers. Study networking." },
      { phase: "Intermediate", title: "Infrastructure Design", description: "Design infrastructure. Implement systems. Ensure reliability." },
      { phase: "Advanced", title: "Advanced Infrastructure", description: "High availability. Disaster recovery. Performance optimization." },
      { phase: "Professional", title: "Infrastructure Leadership", description: "Lead infrastructure teams. Manage platforms. Drive innovation." }
    ],
    "devops-architect": [
      { phase: "Foundation", title: "DevOps Basics", description: "Learn DevOps concepts. Study CI/CD. Understand automation." },
      { phase: "Intermediate", title: "DevOps Implementation", description: "Build pipelines. Implement IaC. Deploy systems." },
      { phase: "Advanced", title: "Advanced DevOps", description: "Complex architectures. Advanced automation. Observability." },
      { phase: "Professional", title: "DevOps Leadership", description: "Lead DevOps teams. Drive culture. Mentor engineers." }
    ],
    "mlops-engineer": [
      { phase: "Foundation", title: "MLOps Basics", description: "Learn ML fundamentals. Understand MLOps concepts. Study tools." },
      { phase: "Intermediate", title: "ML Pipelines", description: "Build data pipelines. Deploy models. Implement monitoring." },
      { phase: "Advanced", title: "Advanced MLOps", description: "Advanced automation. Model governance. Complex deployments." },
      { phase: "Professional", title: "MLOps Leadership", description: "Lead MLOps teams. Drive ML adoption. Mentor engineers." }
    ],
    "backend-architect": [
      { phase: "Foundation", title: "Backend Basics", description: "Learn backend concepts. Understand databases. Study APIs." },
      { phase: "Intermediate", title: "System Design", description: "Design scalable systems. Implement patterns. Optimize performance." },
      { phase: "Advanced", title: "Advanced Architecture", description: "Microservices. Event-driven. Complex systems." },
      { phase: "Professional", title: "Architectural Leadership", description: "Lead architecture. Mentor architects. Drive innovation." }
    ],
    "enterprise-architect": [
      { phase: "Foundation", title: "Enterprise Basics", description: "Learn enterprise concepts. Understand IT strategy. Study governance." },
      { phase: "Intermediate", title: "Enterprise Design", description: "Design enterprise architectures. Implement governance. Ensure compliance." },
      { phase: "Advanced", title: "Advanced Enterprise", description: "Complex transformations. Multi-cloud. Advanced governance." },
      { phase: "Professional", title: "Enterprise Leadership", description: "Lead enterprise initiatives. Drive strategy. Mentor architects." }
    ],
    "solutions-engineer": [
      { phase: "Foundation", title: "Solutions Basics", description: "Learn solution design. Understand sales. Study products." },
      { phase: "Intermediate", title: "Solution Delivery", description: "Design solutions. Implement deployments. Support customers." },
      { phase: "Advanced", title: "Advanced Solutions", description: "Complex implementations. Custom solutions. Performance tuning." },
      { phase: "Professional", title: "Solutions Leadership", description: "Lead solutions team. Manage key accounts. Drive revenue." }
    ],
    "integration-engineer": [
      { phase: "Foundation", title: "Integration Basics", description: "Learn integration concepts. Understand APIs. Study data formats." },
      { phase: "Intermediate", title: "Integration Development", description: "Build integrations. Implement workflows. Deploy systems." },
      { phase: "Advanced", title: "Advanced Integration", description: "Complex integrations. Event-driven. Real-time systems." },
      { phase: "Professional", title: "Integration Leadership", description: "Lead integration teams. Manage platforms. Drive adoption." }
    ],
    "performance-engineer": [
      { phase: "Foundation", title: "Performance Basics", description: "Learn performance concepts. Understand metrics. Study tools." },
      { phase: "Intermediate", title: "Performance Testing", description: "Conduct performance tests. Optimize systems. Identify bottlenecks." },
      { phase: "Advanced", title: "Advanced Optimization", description: "Advanced tuning. Complex systems. Extreme optimization." },
      { phase: "Professional", title: "Performance Leadership", description: "Lead performance teams. Drive optimizations. Mentor engineers." }
    ],
    "release-engineer": [
      { phase: "Foundation", title: "Release Basics", description: "Learn release management. Understand version control. Study tools." },
      { phase: "Intermediate", title: "Release Management", description: "Manage releases. Automate deployments. Track versions." },
      { phase: "Advanced", title: "Advanced Release", description: "Complex deployments. Multi-environment. Advanced automation." },
      { phase: "Professional", title: "Release Leadership", description: "Lead release teams. Drive standards. Mentor engineers." }
    ],
    "siem-analyst": [
      { phase: "Foundation", title: "SIEM Basics", description: "Learn SIEM concepts. Understand logs. Study tools." },
      { phase: "Intermediate", title: "Log Analysis", description: "Analyze logs. Detect threats. Respond to incidents." },
      { phase: "Advanced", title: "Advanced Analysis", description: "Complex analysis. Threat hunting. Advanced detection." },
      { phase: "Professional", title: "SIEM Leadership", description: "Lead SIEM teams. Drive detection. Mentor analysts." }
    ],
    "systems-administrator": [
      { phase: "Foundation", title: "Admin Basics", description: "Learn system administration. Understand servers. Study OS." },
      { phase: "Intermediate", title: "System Management", description: "Manage systems. Implement security. Ensure availability." },
      { phase: "Advanced", title: "Advanced Administration", description: "Complex management. High availability. Disaster recovery." },
      { phase: "Professional", title: "Admin Leadership", description: "Lead admin teams. Drive standards. Mentor admins." }
    ],
    "cloud-security-engineer": [
      { phase: "Foundation", title: "Cloud Security Basics", description: "Learn cloud concepts. Understand cloud security. Study compliance." },
      { phase: "Intermediate", title: "Cloud Security Implementation", description: "Implement security. Manage identities. Ensure compliance." },
      { phase: "Advanced", title: "Advanced Cloud Security", description: "Complex security. Advanced threats. Compliance automation." },
      { phase: "Professional", title: "Cloud Security Leadership", description: "Lead security initiatives. Drive compliance. Mentor engineers." }
    ],
    "api-developer": [
      { phase: "Foundation", title: "API Basics", description: "Learn API concepts. Understand REST. Study design principles." },
      { phase: "Intermediate", title: "API Development", description: "Build APIs. Implement security. Design scalability." },
      { phase: "Advanced", title: "Advanced APIs", description: "GraphQL. WebSockets. Event-driven APIs." },
      { phase: "Professional", title: "API Leadership", description: "Lead API teams. Drive standards. Mentor developers." }
    ],
    "technical-sales-engineer": [
      { phase: "Foundation", title: "Sales Basics", description: "Learn sales concepts. Understand products. Study customers." },
      { phase: "Intermediate", title: "Sales Execution", description: "Build relationships. Close deals. Deliver solutions." },
      { phase: "Advanced", title: "Advanced Sales", description: "Complex deals. Strategic accounts. Account management." },
      { phase: "Professional", title: "Sales Leadership", description: "Lead sales teams. Drive revenue. Mentor sales engineers." }
    ]
  };

  // Create roadmap records
  let roadmapsCreated = 0;
  for (const [careerSlug, phases] of Object.entries(careerRoadmapsData)) {
    phases.forEach((phase, idx) => {
      const record = new Record(roadmapCollection);
      record.set("careerSlug", careerSlug);
      record.set("phase", idx + 1);
      record.set("phaseTitle", phase.title);
      record.set("phaseDescription", phase.description);
      record.set("phaseNumber", idx + 1);
      try {
        app.save(record);
        roadmapsCreated++;
      } catch(e) {
        if (!e.message.includes("unique")) throw e;
      }
    });
  }
  console.log("Created " + roadmapsCreated + " careerRoadmaps records.");
});
