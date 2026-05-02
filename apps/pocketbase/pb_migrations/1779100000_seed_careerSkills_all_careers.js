/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerSkills");

  const record0 = new Record(collection);
  record0.set("skillName", "JavaScript");
  record0.set("category", "Languages");
  record0.set("difficulty", "Intermediate");
  record0.set("description", "Core language for frontend development.");
  record0.set("relatedCareers", ["frontend-developer"]);
  try { app.save(record0); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record1 = new Record(collection);
  record1.set("skillName", "React");
  record1.set("category", "Frameworks");
  record1.set("difficulty", "Intermediate");
  record1.set("description", "Component-based UI library.");
  record1.set("relatedCareers", ["frontend-developer"]);
  try { app.save(record1); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record2 = new Record(collection);
  record2.set("skillName", "TypeScript");
  record2.set("category", "Languages");
  record2.set("difficulty", "Intermediate");
  record2.set("description", "Typed superset of JavaScript.");
  record2.set("relatedCareers", ["frontend-developer"]);
  try { app.save(record2); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record3 = new Record(collection);
  record3.set("skillName", "CSS/Tailwind");
  record3.set("category", "Frameworks");
  record3.set("difficulty", "Beginner");
  record3.set("description", "Styling and utility-first CSS.");
  record3.set("relatedCareers", ["frontend-developer"]);
  try { app.save(record3); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record4 = new Record(collection);
  record4.set("skillName", "Webpack/Vite");
  record4.set("category", "Tools");
  record4.set("difficulty", "Intermediate");
  record4.set("description", "Bundling and build tools.");
  record4.set("relatedCareers", ["frontend-developer"]);
  try { app.save(record4); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record5 = new Record(collection);
  record5.set("skillName", "Accessibility (a11y)");
  record5.set("category", "Concepts");
  record5.set("difficulty", "Intermediate");
  record5.set("description", "Building accessible web experiences.");
  record5.set("relatedCareers", ["frontend-developer"]);
  try { app.save(record5); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record6 = new Record(collection);
  record6.set("skillName", "Performance Optimization");
  record6.set("category", "Concepts");
  record6.set("difficulty", "Advanced");
  record6.set("description", "Core Web Vitals, lazy loading, caching.");
  record6.set("relatedCareers", ["frontend-developer"]);
  try { app.save(record6); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record7 = new Record(collection);
  record7.set("skillName", "Node.js");
  record7.set("category", "Frameworks");
  record7.set("difficulty", "Intermediate");
  record7.set("description", "JavaScript runtime for server-side development.");
  record7.set("relatedCareers", ["backend-developer"]);
  try { app.save(record7); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record8 = new Record(collection);
  record8.set("skillName", "Python/Django");
  record8.set("category", "Languages");
  record8.set("difficulty", "Intermediate");
  record8.set("description", "Python ecosystem for backend APIs.");
  record8.set("relatedCareers", ["backend-developer"]);
  try { app.save(record8); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record9 = new Record(collection);
  record9.set("skillName", "REST API Design");
  record9.set("category", "Concepts");
  record9.set("difficulty", "Intermediate");
  record9.set("description", "RESTful API principles and best practices.");
  record9.set("relatedCareers", ["backend-developer"]);
  try { app.save(record9); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record10 = new Record(collection);
  record10.set("skillName", "PostgreSQL");
  record10.set("category", "Databases");
  record10.set("difficulty", "Intermediate");
  record10.set("description", "Relational database management.");
  record10.set("relatedCareers", ["backend-developer"]);
  try { app.save(record10); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record11 = new Record(collection);
  record11.set("skillName", "Redis");
  record11.set("category", "Databases");
  record11.set("difficulty", "Intermediate");
  record11.set("description", "In-memory caching and message broker.");
  record11.set("relatedCareers", ["backend-developer"]);
  try { app.save(record11); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record12 = new Record(collection);
  record12.set("skillName", "Authentication & Authorization");
  record12.set("category", "Security");
  record12.set("difficulty", "Intermediate");
  record12.set("description", "JWT, OAuth2, session management.");
  record12.set("relatedCareers", ["backend-developer"]);
  try { app.save(record12); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record13 = new Record(collection);
  record13.set("skillName", "Microservices");
  record13.set("category", "Concepts");
  record13.set("difficulty", "Advanced");
  record13.set("description", "Designing distributed service architectures.");
  record13.set("relatedCareers", ["backend-developer"]);
  try { app.save(record13); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record14 = new Record(collection);
  record14.set("skillName", "React");
  record14.set("category", "Frameworks");
  record14.set("difficulty", "Intermediate");
  record14.set("description", "Frontend UI library.");
  record14.set("relatedCareers", ["full-stack-developer"]);
  try { app.save(record14); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record15 = new Record(collection);
  record15.set("skillName", "Node.js/Express");
  record15.set("category", "Frameworks");
  record15.set("difficulty", "Intermediate");
  record15.set("description", "Backend API development.");
  record15.set("relatedCareers", ["full-stack-developer"]);
  try { app.save(record15); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record16 = new Record(collection);
  record16.set("skillName", "PostgreSQL");
  record16.set("category", "Databases");
  record16.set("difficulty", "Intermediate");
  record16.set("description", "Relational database.");
  record16.set("relatedCareers", ["full-stack-developer"]);
  try { app.save(record16); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record17 = new Record(collection);
  record17.set("skillName", "TypeScript");
  record17.set("category", "Languages");
  record17.set("difficulty", "Intermediate");
  record17.set("description", "End-to-end typed development.");
  record17.set("relatedCareers", ["full-stack-developer"]);
  try { app.save(record17); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record18 = new Record(collection);
  record18.set("skillName", "Docker");
  record18.set("category", "DevOps");
  record18.set("difficulty", "Intermediate");
  record18.set("description", "Containerization for development and deployment.");
  record18.set("relatedCareers", ["full-stack-developer"]);
  try { app.save(record18); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record19 = new Record(collection);
  record19.set("skillName", "GraphQL");
  record19.set("category", "Concepts");
  record19.set("difficulty", "Advanced");
  record19.set("description", "Flexible query language for APIs.");
  record19.set("relatedCareers", ["full-stack-developer"]);
  try { app.save(record19); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record20 = new Record(collection);
  record20.set("skillName", "Docker");
  record20.set("category", "Tools");
  record20.set("difficulty", "Intermediate");
  record20.set("description", "Containerization platform.");
  record20.set("relatedCareers", ["devops-engineer"]);
  try { app.save(record20); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record21 = new Record(collection);
  record21.set("skillName", "Kubernetes");
  record21.set("category", "Tools");
  record21.set("difficulty", "Advanced");
  record21.set("description", "Container orchestration at scale.");
  record21.set("relatedCareers", ["devops-engineer"]);
  try { app.save(record21); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record22 = new Record(collection);
  record22.set("skillName", "CI/CD Pipelines");
  record22.set("category", "DevOps");
  record22.set("difficulty", "Intermediate");
  record22.set("description", "Jenkins, GitHub Actions, GitLab CI.");
  record22.set("relatedCareers", ["devops-engineer"]);
  try { app.save(record22); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record23 = new Record(collection);
  record23.set("skillName", "Terraform");
  record23.set("category", "Tools");
  record23.set("difficulty", "Intermediate");
  record23.set("description", "Infrastructure as code.");
  record23.set("relatedCareers", ["devops-engineer"]);
  try { app.save(record23); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record24 = new Record(collection);
  record24.set("skillName", "Linux Administration");
  record24.set("category", "Tools");
  record24.set("difficulty", "Intermediate");
  record24.set("description", "Linux system management and scripting.");
  record24.set("relatedCareers", ["devops-engineer"]);
  try { app.save(record24); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record25 = new Record(collection);
  record25.set("skillName", "AWS/GCP/Azure");
  record25.set("category", "Cloud Platforms");
  record25.set("difficulty", "Intermediate");
  record25.set("description", "Major cloud platforms.");
  record25.set("relatedCareers", ["devops-engineer"]);
  try { app.save(record25); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record26 = new Record(collection);
  record26.set("skillName", "Monitoring & Observability");
  record26.set("category", "Tools");
  record26.set("difficulty", "Advanced");
  record26.set("description", "Prometheus, Grafana, ELK Stack.");
  record26.set("relatedCareers", ["devops-engineer"]);
  try { app.save(record26); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record27 = new Record(collection);
  record27.set("skillName", "Python");
  record27.set("category", "Languages");
  record27.set("difficulty", "Intermediate");
  record27.set("description", "Primary language for data science.");
  record27.set("relatedCareers", ["data-scientist"]);
  try { app.save(record27); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record28 = new Record(collection);
  record28.set("skillName", "Machine Learning");
  record28.set("category", "AI-ML");
  record28.set("difficulty", "Advanced");
  record28.set("description", "Supervised, unsupervised, and reinforcement learning.");
  record28.set("relatedCareers", ["data-scientist"]);
  try { app.save(record28); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record29 = new Record(collection);
  record29.set("skillName", "Statistics & Probability");
  record29.set("category", "Concepts");
  record29.set("difficulty", "Advanced");
  record29.set("description", "Hypothesis testing, distributions, Bayesian inference.");
  record29.set("relatedCareers", ["data-scientist"]);
  try { app.save(record29); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record30 = new Record(collection);
  record30.set("skillName", "Pandas/NumPy");
  record30.set("category", "Frameworks");
  record30.set("difficulty", "Intermediate");
  record30.set("description", "Data manipulation libraries.");
  record30.set("relatedCareers", ["data-scientist"]);
  try { app.save(record30); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record31 = new Record(collection);
  record31.set("skillName", "SQL");
  record31.set("category", "Databases");
  record31.set("difficulty", "Intermediate");
  record31.set("description", "Querying and analyzing relational data.");
  record31.set("relatedCareers", ["data-scientist"]);
  try { app.save(record31); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record32 = new Record(collection);
  record32.set("skillName", "Data Visualization");
  record32.set("category", "Tools");
  record32.set("difficulty", "Beginner");
  record32.set("description", "Matplotlib, Seaborn, Tableau.");
  record32.set("relatedCareers", ["data-scientist"]);
  try { app.save(record32); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record33 = new Record(collection);
  record33.set("skillName", "Python");
  record33.set("category", "Languages");
  record33.set("difficulty", "Intermediate");
  record33.set("description", "Primary language for ML.");
  record33.set("relatedCareers", ["machine-learning-engineer"]);
  try { app.save(record33); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record34 = new Record(collection);
  record34.set("skillName", "TensorFlow/PyTorch");
  record34.set("category", "Frameworks");
  record34.set("difficulty", "Advanced");
  record34.set("description", "Deep learning frameworks.");
  record34.set("relatedCareers", ["machine-learning-engineer"]);
  try { app.save(record34); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record35 = new Record(collection);
  record35.set("skillName", "MLOps");
  record35.set("category", "DevOps");
  record35.set("difficulty", "Advanced");
  record35.set("description", "Model deployment and monitoring.");
  record35.set("relatedCareers", ["machine-learning-engineer"]);
  try { app.save(record35); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record36 = new Record(collection);
  record36.set("skillName", "Linear Algebra");
  record36.set("category", "Concepts");
  record36.set("difficulty", "Advanced");
  record36.set("description", "Math foundations for ML.");
  record36.set("relatedCareers", ["machine-learning-engineer"]);
  try { app.save(record36); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record37 = new Record(collection);
  record37.set("skillName", "Feature Engineering");
  record37.set("category", "Concepts");
  record37.set("difficulty", "Intermediate");
  record37.set("description", "Transforming raw data for model training.");
  record37.set("relatedCareers", ["machine-learning-engineer"]);
  try { app.save(record37); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record38 = new Record(collection);
  record38.set("skillName", "Scikit-learn");
  record38.set("category", "Frameworks");
  record38.set("difficulty", "Intermediate");
  record38.set("description", "Classical ML algorithms.");
  record38.set("relatedCareers", ["machine-learning-engineer"]);
  try { app.save(record38); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record39 = new Record(collection);
  record39.set("skillName", "AWS/Azure/GCP");
  record39.set("category", "Cloud Platforms");
  record39.set("difficulty", "Advanced");
  record39.set("description", "Multi-cloud design and governance.");
  record39.set("relatedCareers", ["cloud-architect"]);
  try { app.save(record39); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record40 = new Record(collection);
  record40.set("skillName", "Cloud Security");
  record40.set("category", "Security");
  record40.set("difficulty", "Advanced");
  record40.set("description", "IAM, encryption, compliance.");
  record40.set("relatedCareers", ["cloud-architect"]);
  try { app.save(record40); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record41 = new Record(collection);
  record41.set("skillName", "Terraform");
  record41.set("category", "Tools");
  record41.set("difficulty", "Advanced");
  record41.set("description", "Infrastructure as code for cloud.");
  record41.set("relatedCareers", ["cloud-architect"]);
  try { app.save(record41); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record42 = new Record(collection);
  record42.set("skillName", "Kubernetes");
  record42.set("category", "Tools");
  record42.set("difficulty", "Advanced");
  record42.set("description", "Container orchestration on cloud.");
  record42.set("relatedCareers", ["cloud-architect"]);
  try { app.save(record42); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record43 = new Record(collection);
  record43.set("skillName", "Cost Optimization");
  record43.set("category", "Concepts");
  record43.set("difficulty", "Intermediate");
  record43.set("description", "FinOps and cloud cost management.");
  record43.set("relatedCareers", ["cloud-architect"]);
  try { app.save(record43); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record44 = new Record(collection);
  record44.set("skillName", "High Availability Design");
  record44.set("category", "Concepts");
  record44.set("difficulty", "Advanced");
  record44.set("description", "Multi-region, fault-tolerant architectures.");
  record44.set("relatedCareers", ["cloud-architect"]);
  try { app.save(record44); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record45 = new Record(collection);
  record45.set("skillName", "Network Security");
  record45.set("category", "Security");
  record45.set("difficulty", "Intermediate");
  record45.set("description", "Firewalls, IDS/IPS, VPN.");
  record45.set("relatedCareers", ["cybersecurity-analyst"]);
  try { app.save(record45); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record46 = new Record(collection);
  record46.set("skillName", "SIEM Tools");
  record46.set("category", "Tools");
  record46.set("difficulty", "Intermediate");
  record46.set("description", "Splunk, IBM QRadar, Microsoft Sentinel.");
  record46.set("relatedCareers", ["cybersecurity-analyst"]);
  try { app.save(record46); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record47 = new Record(collection);
  record47.set("skillName", "Incident Response");
  record47.set("category", "Concepts");
  record47.set("difficulty", "Advanced");
  record47.set("description", "Detection, containment, recovery.");
  record47.set("relatedCareers", ["cybersecurity-analyst"]);
  try { app.save(record47); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record48 = new Record(collection);
  record48.set("skillName", "Vulnerability Assessment");
  record48.set("category", "Security");
  record48.set("difficulty", "Intermediate");
  record48.set("description", "Identifying and remediating security weaknesses.");
  record48.set("relatedCareers", ["cybersecurity-analyst"]);
  try { app.save(record48); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record49 = new Record(collection);
  record49.set("skillName", "Threat Intelligence");
  record49.set("category", "Security");
  record49.set("difficulty", "Advanced");
  record49.set("description", "Analyzing and operationalizing threat data.");
  record49.set("relatedCareers", ["cybersecurity-analyst"]);
  try { app.save(record49); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record50 = new Record(collection);
  record50.set("skillName", "Python Scripting");
  record50.set("category", "Languages");
  record50.set("difficulty", "Intermediate");
  record50.set("description", "Automating security tasks.");
  record50.set("relatedCareers", ["cybersecurity-analyst"]);
  try { app.save(record50); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record51 = new Record(collection);
  record51.set("skillName", "Product Roadmapping");
  record51.set("category", "Concepts");
  record51.set("difficulty", "Intermediate");
  record51.set("description", "Defining and communicating product vision.");
  record51.set("relatedCareers", ["product-manager"]);
  try { app.save(record51); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record52 = new Record(collection);
  record52.set("skillName", "Agile/Scrum");
  record52.set("category", "Concepts");
  record52.set("difficulty", "Beginner");
  record52.set("description", "Iterative product development.");
  record52.set("relatedCareers", ["product-manager"]);
  try { app.save(record52); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record53 = new Record(collection);
  record53.set("skillName", "User Research");
  record53.set("category", "Design");
  record53.set("difficulty", "Intermediate");
  record53.set("description", "Interviews, surveys, usability testing.");
  record53.set("relatedCareers", ["product-manager"]);
  try { app.save(record53); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record54 = new Record(collection);
  record54.set("skillName", "Data Analytics");
  record54.set("category", "Concepts");
  record54.set("difficulty", "Intermediate");
  record54.set("description", "Using metrics to drive product decisions.");
  record54.set("relatedCareers", ["product-manager"]);
  try { app.save(record54); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record55 = new Record(collection);
  record55.set("skillName", "Stakeholder Management");
  record55.set("category", "Concepts");
  record55.set("difficulty", "Advanced");
  record55.set("description", "Aligning cross-functional teams.");
  record55.set("relatedCareers", ["product-manager"]);
  try { app.save(record55); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record56 = new Record(collection);
  record56.set("skillName", "SQL");
  record56.set("category", "Databases");
  record56.set("difficulty", "Beginner");
  record56.set("description", "Querying product data.");
  record56.set("relatedCareers", ["product-manager"]);
  try { app.save(record56); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record57 = new Record(collection);
  record57.set("skillName", "Figma");
  record57.set("category", "Design");
  record57.set("difficulty", "Intermediate");
  record57.set("description", "UI/UX design tool.");
  record57.set("relatedCareers", ["ux-designer"]);
  try { app.save(record57); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record58 = new Record(collection);
  record58.set("skillName", "User Research");
  record58.set("category", "Design");
  record58.set("difficulty", "Intermediate");
  record58.set("description", "Qualitative and quantitative research methods.");
  record58.set("relatedCareers", ["ux-designer"]);
  try { app.save(record58); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record59 = new Record(collection);
  record59.set("skillName", "Prototyping");
  record59.set("category", "Design");
  record59.set("difficulty", "Beginner");
  record59.set("description", "Creating interactive mockups.");
  record59.set("relatedCareers", ["ux-designer"]);
  try { app.save(record59); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record60 = new Record(collection);
  record60.set("skillName", "Design Systems");
  record60.set("category", "Design");
  record60.set("difficulty", "Advanced");
  record60.set("description", "Building reusable component libraries.");
  record60.set("relatedCareers", ["ux-designer"]);
  try { app.save(record60); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record61 = new Record(collection);
  record61.set("skillName", "Accessibility Design");
  record61.set("category", "Concepts");
  record61.set("difficulty", "Intermediate");
  record61.set("description", "WCAG compliance and inclusive design.");
  record61.set("relatedCareers", ["ux-designer"]);
  try { app.save(record61); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record62 = new Record(collection);
  record62.set("skillName", "Usability Testing");
  record62.set("category", "Design");
  record62.set("difficulty", "Intermediate");
  record62.set("description", "Conducting and analyzing usability sessions.");
  record62.set("relatedCareers", ["ux-designer"]);
  try { app.save(record62); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record63 = new Record(collection);
  record63.set("skillName", "Python");
  record63.set("category", "Languages");
  record63.set("difficulty", "Intermediate");
  record63.set("description", "ETL scripting and data processing.");
  record63.set("relatedCareers", ["data-engineer"]);
  try { app.save(record63); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record64 = new Record(collection);
  record64.set("skillName", "Apache Spark");
  record64.set("category", "Tools");
  record64.set("difficulty", "Advanced");
  record64.set("description", "Large-scale distributed data processing.");
  record64.set("relatedCareers", ["data-engineer"]);
  try { app.save(record64); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record65 = new Record(collection);
  record65.set("skillName", "SQL/dbt");
  record65.set("category", "Databases");
  record65.set("difficulty", "Intermediate");
  record65.set("description", "Data transformation and modeling.");
  record65.set("relatedCareers", ["data-engineer"]);
  try { app.save(record65); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record66 = new Record(collection);
  record66.set("skillName", "Airflow");
  record66.set("category", "Tools");
  record66.set("difficulty", "Intermediate");
  record66.set("description", "Workflow orchestration.");
  record66.set("relatedCareers", ["data-engineer"]);
  try { app.save(record66); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record67 = new Record(collection);
  record67.set("skillName", "Data Warehousing");
  record67.set("category", "Databases");
  record67.set("difficulty", "Intermediate");
  record67.set("description", "Snowflake, BigQuery, Redshift.");
  record67.set("relatedCareers", ["data-engineer"]);
  try { app.save(record67); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record68 = new Record(collection);
  record68.set("skillName", "Kafka");
  record68.set("category", "Tools");
  record68.set("difficulty", "Advanced");
  record68.set("description", "Real-time data streaming.");
  record68.set("relatedCareers", ["data-engineer"]);
  try { app.save(record68); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record69 = new Record(collection);
  record69.set("skillName", "React Native");
  record69.set("category", "Frameworks");
  record69.set("difficulty", "Intermediate");
  record69.set("description", "Cross-platform mobile development.");
  record69.set("relatedCareers", ["mobile-developer"]);
  try { app.save(record69); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record70 = new Record(collection);
  record70.set("skillName", "Swift");
  record70.set("category", "Languages");
  record70.set("difficulty", "Intermediate");
  record70.set("description", "iOS native development.");
  record70.set("relatedCareers", ["mobile-developer"]);
  try { app.save(record70); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record71 = new Record(collection);
  record71.set("skillName", "Kotlin");
  record71.set("category", "Languages");
  record71.set("difficulty", "Intermediate");
  record71.set("description", "Android native development.");
  record71.set("relatedCareers", ["mobile-developer"]);
  try { app.save(record71); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record72 = new Record(collection);
  record72.set("skillName", "Mobile UX Patterns");
  record72.set("category", "Design");
  record72.set("difficulty", "Intermediate");
  record72.set("description", "Platform-specific design guidelines.");
  record72.set("relatedCareers", ["mobile-developer"]);
  try { app.save(record72); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record73 = new Record(collection);
  record73.set("skillName", "App Store Deployment");
  record73.set("category", "Tools");
  record73.set("difficulty", "Beginner");
  record73.set("description", "Publishing to App Store and Play Store.");
  record73.set("relatedCareers", ["mobile-developer"]);
  try { app.save(record73); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record74 = new Record(collection);
  record74.set("skillName", "PostgreSQL");
  record74.set("category", "Databases");
  record74.set("difficulty", "Advanced");
  record74.set("description", "Advanced PostgreSQL administration.");
  record74.set("relatedCareers", ["database-administrator"]);
  try { app.save(record74); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record75 = new Record(collection);
  record75.set("skillName", "MySQL");
  record75.set("category", "Databases");
  record75.set("difficulty", "Intermediate");
  record75.set("description", "MySQL tuning and administration.");
  record75.set("relatedCareers", ["database-administrator"]);
  try { app.save(record75); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record76 = new Record(collection);
  record76.set("skillName", "Performance Tuning");
  record76.set("category", "Concepts");
  record76.set("difficulty", "Advanced");
  record76.set("description", "Query optimization, indexes, caching.");
  record76.set("relatedCareers", ["database-administrator"]);
  try { app.save(record76); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record77 = new Record(collection);
  record77.set("skillName", "Backup & Recovery");
  record77.set("category", "Concepts");
  record77.set("difficulty", "Advanced");
  record77.set("description", "Disaster recovery and PITR.");
  record77.set("relatedCareers", ["database-administrator"]);
  try { app.save(record77); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record78 = new Record(collection);
  record78.set("skillName", "Replication");
  record78.set("category", "Concepts");
  record78.set("difficulty", "Advanced");
  record78.set("description", "HA replication and failover.");
  record78.set("relatedCareers", ["database-administrator"]);
  try { app.save(record78); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record79 = new Record(collection);
  record79.set("skillName", "NoSQL (MongoDB/Redis)");
  record79.set("category", "Databases");
  record79.set("difficulty", "Intermediate");
  record79.set("description", "Non-relational data stores.");
  record79.set("relatedCareers", ["database-administrator"]);
  try { app.save(record79); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record80 = new Record(collection);
  record80.set("skillName", "TCP/IP Networking");
  record80.set("category", "Concepts");
  record80.set("difficulty", "Intermediate");
  record80.set("description", "Core networking protocols.");
  record80.set("relatedCareers", ["network-engineer"]);
  try { app.save(record80); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record81 = new Record(collection);
  record81.set("skillName", "Cisco/Juniper");
  record81.set("category", "Tools");
  record81.set("difficulty", "Advanced");
  record81.set("description", "Network hardware configuration.");
  record81.set("relatedCareers", ["network-engineer"]);
  try { app.save(record81); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record82 = new Record(collection);
  record82.set("skillName", "Firewalls & Security");
  record82.set("category", "Security");
  record82.set("difficulty", "Intermediate");
  record82.set("description", "Network perimeter security.");
  record82.set("relatedCareers", ["network-engineer"]);
  try { app.save(record82); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record83 = new Record(collection);
  record83.set("skillName", "BGP/OSPF Routing");
  record83.set("category", "Concepts");
  record83.set("difficulty", "Advanced");
  record83.set("description", "Dynamic routing protocols.");
  record83.set("relatedCareers", ["network-engineer"]);
  try { app.save(record83); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record84 = new Record(collection);
  record84.set("skillName", "Network Monitoring");
  record84.set("category", "Tools");
  record84.set("difficulty", "Intermediate");
  record84.set("description", "Wireshark, Nagios, SolarWinds.");
  record84.set("relatedCareers", ["network-engineer"]);
  try { app.save(record84); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record85 = new Record(collection);
  record85.set("skillName", "Test Automation");
  record85.set("category", "Testing");
  record85.set("difficulty", "Intermediate");
  record85.set("description", "Selenium, Cypress, Playwright.");
  record85.set("relatedCareers", ["qa-engineer"]);
  try { app.save(record85); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record86 = new Record(collection);
  record86.set("skillName", "API Testing");
  record86.set("category", "Testing");
  record86.set("difficulty", "Intermediate");
  record86.set("description", "Postman, REST-assured.");
  record86.set("relatedCareers", ["qa-engineer"]);
  try { app.save(record86); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record87 = new Record(collection);
  record87.set("skillName", "Performance Testing");
  record87.set("category", "Testing");
  record87.set("difficulty", "Intermediate");
  record87.set("description", "JMeter, k6 load testing.");
  record87.set("relatedCareers", ["qa-engineer"]);
  try { app.save(record87); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record88 = new Record(collection);
  record88.set("skillName", "Test Planning");
  record88.set("category", "Concepts");
  record88.set("difficulty", "Beginner");
  record88.set("description", "Creating test plans and strategies.");
  record88.set("relatedCareers", ["qa-engineer"]);
  try { app.save(record88); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record89 = new Record(collection);
  record89.set("skillName", "BDD/TDD");
  record89.set("category", "Concepts");
  record89.set("difficulty", "Intermediate");
  record89.set("description", "Behavior-driven and test-driven development.");
  record89.set("relatedCareers", ["qa-engineer"]);
  try { app.save(record89); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record90 = new Record(collection);
  record90.set("skillName", "Penetration Testing");
  record90.set("category", "Security");
  record90.set("difficulty", "Advanced");
  record90.set("description", "Ethical hacking and vuln assessment.");
  record90.set("relatedCareers", ["security-engineer"]);
  try { app.save(record90); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record91 = new Record(collection);
  record91.set("skillName", "OWASP Top 10");
  record91.set("category", "Security");
  record91.set("difficulty", "Intermediate");
  record91.set("description", "Web application security risks.");
  record91.set("relatedCareers", ["security-engineer"]);
  try { app.save(record91); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record92 = new Record(collection);
  record92.set("skillName", "Cryptography");
  record92.set("category", "Security");
  record92.set("difficulty", "Advanced");
  record92.set("description", "Encryption algorithms and protocols.");
  record92.set("relatedCareers", ["security-engineer"]);
  try { app.save(record92); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record93 = new Record(collection);
  record93.set("skillName", "Cloud Security");
  record93.set("category", "Cloud Platforms");
  record93.set("difficulty", "Advanced");
  record93.set("description", "Securing cloud environments.");
  record93.set("relatedCareers", ["security-engineer"]);
  try { app.save(record93); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record94 = new Record(collection);
  record94.set("skillName", "Python/Bash Scripting");
  record94.set("category", "Languages");
  record94.set("difficulty", "Intermediate");
  record94.set("description", "Security automation scripting.");
  record94.set("relatedCareers", ["security-engineer"]);
  try { app.save(record94); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record95 = new Record(collection);
  record95.set("skillName", "AWS Architecture");
  record95.set("category", "Cloud Platforms");
  record95.set("difficulty", "Advanced");
  record95.set("description", "Designing scalable cloud solutions.");
  record95.set("relatedCareers", ["solutions-architect"]);
  try { app.save(record95); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record96 = new Record(collection);
  record96.set("skillName", "System Design");
  record96.set("category", "Concepts");
  record96.set("difficulty", "Advanced");
  record96.set("description", "Distributed systems and microservices.");
  record96.set("relatedCareers", ["solutions-architect"]);
  try { app.save(record96); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record97 = new Record(collection);
  record97.set("skillName", "Enterprise Integration");
  record97.set("category", "Concepts");
  record97.set("difficulty", "Advanced");
  record97.set("description", "Connecting enterprise systems.");
  record97.set("relatedCareers", ["solutions-architect"]);
  try { app.save(record97); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record98 = new Record(collection);
  record98.set("skillName", "Cost Optimization");
  record98.set("category", "Concepts");
  record98.set("difficulty", "Intermediate");
  record98.set("description", "Cloud cost analysis and optimization.");
  record98.set("relatedCareers", ["solutions-architect"]);
  try { app.save(record98); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record99 = new Record(collection);
  record99.set("skillName", "Security Architecture");
  record99.set("category", "Security");
  record99.set("difficulty", "Advanced");
  record99.set("description", "Security by design principles.");
  record99.set("relatedCareers", ["solutions-architect"]);
  try { app.save(record99); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record100 = new Record(collection);
  record100.set("skillName", "LLMs/Transformers");
  record100.set("category", "AI-ML");
  record100.set("difficulty", "Advanced");
  record100.set("description", "Large language model architecture and usage.");
  record100.set("relatedCareers", ["ai-engineer"]);
  try { app.save(record100); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record101 = new Record(collection);
  record101.set("skillName", "Python");
  record101.set("category", "Languages");
  record101.set("difficulty", "Intermediate");
  record101.set("description", "Primary AI/ML development language.");
  record101.set("relatedCareers", ["ai-engineer"]);
  try { app.save(record101); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record102 = new Record(collection);
  record102.set("skillName", "RAG Systems");
  record102.set("category", "AI-ML");
  record102.set("difficulty", "Advanced");
  record102.set("description", "Retrieval-augmented generation.");
  record102.set("relatedCareers", ["ai-engineer"]);
  try { app.save(record102); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record103 = new Record(collection);
  record103.set("skillName", "LangChain/LlamaIndex");
  record103.set("category", "Frameworks");
  record103.set("difficulty", "Advanced");
  record103.set("description", "AI application frameworks.");
  record103.set("relatedCareers", ["ai-engineer"]);
  try { app.save(record103); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record104 = new Record(collection);
  record104.set("skillName", "Vector Databases");
  record104.set("category", "Databases");
  record104.set("difficulty", "Intermediate");
  record104.set("description", "Pinecone, Chroma, Weaviate.");
  record104.set("relatedCareers", ["ai-engineer"]);
  try { app.save(record104); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record105 = new Record(collection);
  record105.set("skillName", "Prompt Engineering");
  record105.set("category", "Concepts");
  record105.set("difficulty", "Intermediate");
  record105.set("description", "Crafting effective prompts for LLMs.");
  record105.set("relatedCareers", ["ai-engineer"]);
  try { app.save(record105); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record106 = new Record(collection);
  record106.set("skillName", "Solidity");
  record106.set("category", "Languages");
  record106.set("difficulty", "Advanced");
  record106.set("description", "Smart contract programming language.");
  record106.set("relatedCareers", ["blockchain-developer"]);
  try { app.save(record106); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record107 = new Record(collection);
  record107.set("skillName", "Ethereum");
  record107.set("category", "Concepts");
  record107.set("difficulty", "Intermediate");
  record107.set("description", "EVM-based blockchain development.");
  record107.set("relatedCareers", ["blockchain-developer"]);
  try { app.save(record107); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record108 = new Record(collection);
  record108.set("skillName", "Web3.js/Ethers.js");
  record108.set("category", "Frameworks");
  record108.set("difficulty", "Intermediate");
  record108.set("description", "Blockchain interaction libraries.");
  record108.set("relatedCareers", ["blockchain-developer"]);
  try { app.save(record108); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record109 = new Record(collection);
  record109.set("skillName", "DeFi Protocols");
  record109.set("category", "Concepts");
  record109.set("difficulty", "Advanced");
  record109.set("description", "Decentralized finance concepts.");
  record109.set("relatedCareers", ["blockchain-developer"]);
  try { app.save(record109); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record110 = new Record(collection);
  record110.set("skillName", "Hardhat/Foundry");
  record110.set("category", "Tools");
  record110.set("difficulty", "Intermediate");
  record110.set("description", "Smart contract development frameworks.");
  record110.set("relatedCareers", ["blockchain-developer"]);
  try { app.save(record110); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record111 = new Record(collection);
  record111.set("skillName", "Unity/Unreal Engine");
  record111.set("category", "Tools");
  record111.set("difficulty", "Intermediate");
  record111.set("description", "Game engines for 2D/3D development.");
  record111.set("relatedCareers", ["game-developer"]);
  try { app.save(record111); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record112 = new Record(collection);
  record112.set("skillName", "C#/C++");
  record112.set("category", "Languages");
  record112.set("difficulty", "Intermediate");
  record112.set("description", "Primary game development languages.");
  record112.set("relatedCareers", ["game-developer"]);
  try { app.save(record112); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record113 = new Record(collection);
  record113.set("skillName", "Game Physics");
  record113.set("category", "Concepts");
  record113.set("difficulty", "Intermediate");
  record113.set("description", "Physics simulation and collision.");
  record113.set("relatedCareers", ["game-developer"]);
  try { app.save(record113); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record114 = new Record(collection);
  record114.set("skillName", "Multiplayer Networking");
  record114.set("category", "Concepts");
  record114.set("difficulty", "Advanced");
  record114.set("description", "Real-time game networking.");
  record114.set("relatedCareers", ["game-developer"]);
  try { app.save(record114); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record115 = new Record(collection);
  record115.set("skillName", "Shader Programming");
  record115.set("category", "Concepts");
  record115.set("difficulty", "Advanced");
  record115.set("description", "GLSL/HLSL graphics shaders.");
  record115.set("relatedCareers", ["game-developer"]);
  try { app.save(record115); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record116 = new Record(collection);
  record116.set("skillName", "C/C++");
  record116.set("category", "Languages");
  record116.set("difficulty", "Advanced");
  record116.set("description", "Low-level systems programming.");
  record116.set("relatedCareers", ["embedded-systems-engineer"]);
  try { app.save(record116); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record117 = new Record(collection);
  record117.set("skillName", "RTOS");
  record117.set("category", "Concepts");
  record117.set("difficulty", "Advanced");
  record117.set("description", "Real-time operating systems.");
  record117.set("relatedCareers", ["embedded-systems-engineer"]);
  try { app.save(record117); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record118 = new Record(collection);
  record118.set("skillName", "Microcontrollers (ARM/AVR)");
  record118.set("category", "Tools");
  record118.set("difficulty", "Intermediate");
  record118.set("description", "MCU programming and peripherals.");
  record118.set("relatedCareers", ["embedded-systems-engineer"]);
  try { app.save(record118); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record119 = new Record(collection);
  record119.set("skillName", "Hardware Debugging");
  record119.set("category", "Tools");
  record119.set("difficulty", "Advanced");
  record119.set("description", "JTAG, oscilloscopes, logic analyzers.");
  record119.set("relatedCareers", ["embedded-systems-engineer"]);
  try { app.save(record119); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record120 = new Record(collection);
  record120.set("skillName", "Communication Protocols");
  record120.set("category", "Concepts");
  record120.set("difficulty", "Intermediate");
  record120.set("description", "SPI, I2C, UART, CAN.");
  record120.set("relatedCareers", ["embedded-systems-engineer"]);
  try { app.save(record120); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record121 = new Record(collection);
  record121.set("skillName", "Technical Documentation");
  record121.set("category", "Concepts");
  record121.set("difficulty", "Intermediate");
  record121.set("description", "API docs, user guides, tutorials.");
  record121.set("relatedCareers", ["technical-writer"]);
  try { app.save(record121); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record122 = new Record(collection);
  record122.set("skillName", "Markdown/DocBook");
  record122.set("category", "Tools");
  record122.set("difficulty", "Beginner");
  record122.set("description", "Documentation markup languages.");
  record122.set("relatedCareers", ["technical-writer"]);
  try { app.save(record122); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record123 = new Record(collection);
  record123.set("skillName", "Docs-as-Code");
  record123.set("category", "Concepts");
  record123.set("difficulty", "Intermediate");
  record123.set("description", "Versioned documentation workflows.");
  record123.set("relatedCareers", ["technical-writer"]);
  try { app.save(record123); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record124 = new Record(collection);
  record124.set("skillName", "Information Architecture");
  record124.set("category", "Design");
  record124.set("difficulty", "Intermediate");
  record124.set("description", "Structuring technical content.");
  record124.set("relatedCareers", ["technical-writer"]);
  try { app.save(record124); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record125 = new Record(collection);
  record125.set("skillName", "Swift");
  record125.set("category", "Languages");
  record125.set("difficulty", "Intermediate");
  record125.set("description", "Primary iOS development language.");
  record125.set("relatedCareers", ["ios-developer"]);
  try { app.save(record125); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record126 = new Record(collection);
  record126.set("skillName", "SwiftUI/UIKit");
  record126.set("category", "Frameworks");
  record126.set("difficulty", "Intermediate");
  record126.set("description", "iOS UI frameworks.");
  record126.set("relatedCareers", ["ios-developer"]);
  try { app.save(record126); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record127 = new Record(collection);
  record127.set("skillName", "Xcode");
  record127.set("category", "Tools");
  record127.set("difficulty", "Beginner");
  record127.set("description", "Apple development environment.");
  record127.set("relatedCareers", ["ios-developer"]);
  try { app.save(record127); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record128 = new Record(collection);
  record128.set("skillName", "Core Data");
  record128.set("category", "Databases");
  record128.set("difficulty", "Intermediate");
  record128.set("description", "iOS persistence framework.");
  record128.set("relatedCareers", ["ios-developer"]);
  try { app.save(record128); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record129 = new Record(collection);
  record129.set("skillName", "App Store Connect");
  record129.set("category", "Tools");
  record129.set("difficulty", "Beginner");
  record129.set("description", "App distribution and management.");
  record129.set("relatedCareers", ["ios-developer"]);
  try { app.save(record129); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record130 = new Record(collection);
  record130.set("skillName", "Kotlin");
  record130.set("category", "Languages");
  record130.set("difficulty", "Intermediate");
  record130.set("description", "Primary Android development language.");
  record130.set("relatedCareers", ["android-developer"]);
  try { app.save(record130); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record131 = new Record(collection);
  record131.set("skillName", "Jetpack Compose");
  record131.set("category", "Frameworks");
  record131.set("difficulty", "Intermediate");
  record131.set("description", "Modern Android UI toolkit.");
  record131.set("relatedCareers", ["android-developer"]);
  try { app.save(record131); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record132 = new Record(collection);
  record132.set("skillName", "Android Studio");
  record132.set("category", "Tools");
  record132.set("difficulty", "Beginner");
  record132.set("description", "Android development environment.");
  record132.set("relatedCareers", ["android-developer"]);
  try { app.save(record132); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record133 = new Record(collection);
  record133.set("skillName", "Room Database");
  record133.set("category", "Databases");
  record133.set("difficulty", "Intermediate");
  record133.set("description", "Android persistence library.");
  record133.set("relatedCareers", ["android-developer"]);
  try { app.save(record133); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record134 = new Record(collection);
  record134.set("skillName", "Google Play Console");
  record134.set("category", "Tools");
  record134.set("difficulty", "Beginner");
  record134.set("description", "App publishing and analytics.");
  record134.set("relatedCareers", ["android-developer"]);
  try { app.save(record134); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record135 = new Record(collection);
  record135.set("skillName", "Kali Linux");
  record135.set("category", "Tools");
  record135.set("difficulty", "Intermediate");
  record135.set("description", "Penetration testing OS and toolkit.");
  record135.set("relatedCareers", ["penetration-tester"]);
  try { app.save(record135); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record136 = new Record(collection);
  record136.set("skillName", "Metasploit");
  record136.set("category", "Tools");
  record136.set("difficulty", "Advanced");
  record136.set("description", "Exploitation framework.");
  record136.set("relatedCareers", ["penetration-tester"]);
  try { app.save(record136); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record137 = new Record(collection);
  record137.set("skillName", "Burp Suite");
  record137.set("category", "Tools");
  record137.set("difficulty", "Intermediate");
  record137.set("description", "Web application security testing.");
  record137.set("relatedCareers", ["penetration-tester"]);
  try { app.save(record137); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record138 = new Record(collection);
  record138.set("skillName", "OWASP Methodology");
  record138.set("category", "Security");
  record138.set("difficulty", "Intermediate");
  record138.set("description", "Web security testing standards.");
  record138.set("relatedCareers", ["penetration-tester"]);
  try { app.save(record138); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record139 = new Record(collection);
  record139.set("skillName", "Python/Bash");
  record139.set("category", "Languages");
  record139.set("difficulty", "Intermediate");
  record139.set("description", "Exploit scripting.");
  record139.set("relatedCareers", ["penetration-tester"]);
  try { app.save(record139); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record140 = new Record(collection);
  record140.set("skillName", "Network Scanning");
  record140.set("category", "Security");
  record140.set("difficulty", "Intermediate");
  record140.set("description", "Nmap, Nessus vulnerability scanning.");
  record140.set("relatedCareers", ["penetration-tester"]);
  try { app.save(record140); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record141 = new Record(collection);
  record141.set("skillName", "Technical Leadership");
  record141.set("category", "Concepts");
  record141.set("difficulty", "Advanced");
  record141.set("description", "Leading engineering teams effectively.");
  record141.set("relatedCareers", ["engineering-manager"]);
  try { app.save(record141); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record142 = new Record(collection);
  record142.set("skillName", "Agile/Scrum");
  record142.set("category", "Concepts");
  record142.set("difficulty", "Intermediate");
  record142.set("description", "Agile delivery methodologies.");
  record142.set("relatedCareers", ["engineering-manager"]);
  try { app.save(record142); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record143 = new Record(collection);
  record143.set("skillName", "Performance Management");
  record143.set("category", "Concepts");
  record143.set("difficulty", "Advanced");
  record143.set("description", "Career development and reviews.");
  record143.set("relatedCareers", ["engineering-manager"]);
  try { app.save(record143); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record144 = new Record(collection);
  record144.set("skillName", "System Design");
  record144.set("category", "Concepts");
  record144.set("difficulty", "Advanced");
  record144.set("description", "Architectural decision-making.");
  record144.set("relatedCareers", ["engineering-manager"]);
  try { app.save(record144); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record145 = new Record(collection);
  record145.set("skillName", "Hiring & Interviewing");
  record145.set("category", "Concepts");
  record145.set("difficulty", "Intermediate");
  record145.set("description", "Building engineering teams.");
  record145.set("relatedCareers", ["engineering-manager"]);
  try { app.save(record145); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record146 = new Record(collection);
  record146.set("skillName", "Zero Trust Architecture");
  record146.set("category", "Security");
  record146.set("difficulty", "Advanced");
  record146.set("description", "Never trust, always verify security model.");
  record146.set("relatedCareers", ["security-architect"]);
  try { app.save(record146); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record147 = new Record(collection);
  record147.set("skillName", "Cryptography");
  record147.set("category", "Security");
  record147.set("difficulty", "Advanced");
  record147.set("description", "Encryption, PKI, key management.");
  record147.set("relatedCareers", ["security-architect"]);
  try { app.save(record147); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record148 = new Record(collection);
  record148.set("skillName", "Cloud Security");
  record148.set("category", "Cloud Platforms");
  record148.set("difficulty", "Advanced");
  record148.set("description", "IAM, CSPM, cloud-native security.");
  record148.set("relatedCareers", ["security-architect"]);
  try { app.save(record148); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record149 = new Record(collection);
  record149.set("skillName", "Threat Modeling");
  record149.set("category", "Security");
  record149.set("difficulty", "Advanced");
  record149.set("description", "STRIDE, PASTA methodologies.");
  record149.set("relatedCareers", ["security-architect"]);
  try { app.save(record149); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record150 = new Record(collection);
  record150.set("skillName", "Security Frameworks");
  record150.set("category", "Concepts");
  record150.set("difficulty", "Intermediate");
  record150.set("description", "NIST, ISO 27001, SOC2.");
  record150.set("relatedCareers", ["security-architect"]);
  try { app.save(record150); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record151 = new Record(collection);
  record151.set("skillName", "Python/Scripting");
  record151.set("category", "Languages");
  record151.set("difficulty", "Intermediate");
  record151.set("description", "Security automation.");
  record151.set("relatedCareers", ["security-architect"]);
  try { app.save(record151); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record152 = new Record(collection);
  record152.set("skillName", "Linux Administration");
  record152.set("category", "Tools");
  record152.set("difficulty", "Intermediate");
  record152.set("description", "Server management and scripting.");
  record152.set("relatedCareers", ["infrastructure-engineer"]);
  try { app.save(record152); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record153 = new Record(collection);
  record153.set("skillName", "Terraform/Ansible");
  record153.set("category", "DevOps");
  record153.set("difficulty", "Intermediate");
  record153.set("description", "Infrastructure as code and configuration management.");
  record153.set("relatedCareers", ["infrastructure-engineer"]);
  try { app.save(record153); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record154 = new Record(collection);
  record154.set("skillName", "Networking");
  record154.set("category", "Concepts");
  record154.set("difficulty", "Intermediate");
  record154.set("description", "TCP/IP, DNS, load balancing.");
  record154.set("relatedCareers", ["infrastructure-engineer"]);
  try { app.save(record154); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record155 = new Record(collection);
  record155.set("skillName", "AWS/Azure/GCP");
  record155.set("category", "Cloud Platforms");
  record155.set("difficulty", "Advanced");
  record155.set("description", "Cloud infrastructure management.");
  record155.set("relatedCareers", ["infrastructure-engineer"]);
  try { app.save(record155); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record156 = new Record(collection);
  record156.set("skillName", "Monitoring");
  record156.set("category", "Tools");
  record156.set("difficulty", "Intermediate");
  record156.set("description", "Prometheus, Grafana, Datadog.");
  record156.set("relatedCareers", ["infrastructure-engineer"]);
  try { app.save(record156); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record157 = new Record(collection);
  record157.set("skillName", "Storage Systems");
  record157.set("category", "Concepts");
  record157.set("difficulty", "Intermediate");
  record157.set("description", "Object, block, and file storage.");
  record157.set("relatedCareers", ["infrastructure-engineer"]);
  try { app.save(record157); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record158 = new Record(collection);
  record158.set("skillName", "CI/CD Design");
  record158.set("category", "DevOps");
  record158.set("difficulty", "Advanced");
  record158.set("description", "Enterprise pipeline architecture.");
  record158.set("relatedCareers", ["devops-architect"]);
  try { app.save(record158); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record159 = new Record(collection);
  record159.set("skillName", "Kubernetes");
  record159.set("category", "Tools");
  record159.set("difficulty", "Advanced");
  record159.set("description", "Container orchestration and GitOps.");
  record159.set("relatedCareers", ["devops-architect"]);
  try { app.save(record159); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record160 = new Record(collection);
  record160.set("skillName", "Terraform");
  record160.set("category", "Tools");
  record160.set("difficulty", "Advanced");
  record160.set("description", "Infrastructure as code at scale.");
  record160.set("relatedCareers", ["devops-architect"]);
  try { app.save(record160); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record161 = new Record(collection);
  record161.set("skillName", "Platform Engineering");
  record161.set("category", "Concepts");
  record161.set("difficulty", "Advanced");
  record161.set("description", "Internal developer platforms (IDP).");
  record161.set("relatedCareers", ["devops-architect"]);
  try { app.save(record161); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record162 = new Record(collection);
  record162.set("skillName", "Observability");
  record162.set("category", "Tools");
  record162.set("difficulty", "Advanced");
  record162.set("description", "Metrics, logs, traces (OTel).");
  record162.set("relatedCareers", ["devops-architect"]);
  try { app.save(record162); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record163 = new Record(collection);
  record163.set("skillName", "Security (DevSecOps)");
  record163.set("category", "Security");
  record163.set("difficulty", "Advanced");
  record163.set("description", "Shifting security left in pipelines.");
  record163.set("relatedCareers", ["devops-architect"]);
  try { app.save(record163); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record164 = new Record(collection);
  record164.set("skillName", "MLflow/Kubeflow");
  record164.set("category", "Tools");
  record164.set("difficulty", "Advanced");
  record164.set("description", "ML lifecycle management platforms.");
  record164.set("relatedCareers", ["mlops-engineer"]);
  try { app.save(record164); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record165 = new Record(collection);
  record165.set("skillName", "Python");
  record165.set("category", "Languages");
  record165.set("difficulty", "Intermediate");
  record165.set("description", "ML and automation scripting.");
  record165.set("relatedCareers", ["mlops-engineer"]);
  try { app.save(record165); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record166 = new Record(collection);
  record166.set("skillName", "Docker/Kubernetes");
  record166.set("category", "DevOps");
  record166.set("difficulty", "Advanced");
  record166.set("description", "Containerized ML serving.");
  record166.set("relatedCareers", ["mlops-engineer"]);
  try { app.save(record166); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record167 = new Record(collection);
  record167.set("skillName", "Feature Stores");
  record167.set("category", "Concepts");
  record167.set("difficulty", "Advanced");
  record167.set("description", "Feast, Tecton feature engineering.");
  record167.set("relatedCareers", ["mlops-engineer"]);
  try { app.save(record167); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record168 = new Record(collection);
  record168.set("skillName", "Model Monitoring");
  record168.set("category", "AI-ML");
  record168.set("difficulty", "Advanced");
  record168.set("description", "Data drift, model degradation tracking.");
  record168.set("relatedCareers", ["mlops-engineer"]);
  try { app.save(record168); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record169 = new Record(collection);
  record169.set("skillName", "Cloud ML Services");
  record169.set("category", "Cloud Platforms");
  record169.set("difficulty", "Advanced");
  record169.set("description", "SageMaker, Vertex AI, AzureML.");
  record169.set("relatedCareers", ["mlops-engineer"]);
  try { app.save(record169); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record170 = new Record(collection);
  record170.set("skillName", "Distributed Systems");
  record170.set("category", "Concepts");
  record170.set("difficulty", "Advanced");
  record170.set("description", "CAP theorem, consensus, event sourcing.");
  record170.set("relatedCareers", ["backend-architect"]);
  try { app.save(record170); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record171 = new Record(collection);
  record171.set("skillName", "API Gateway Design");
  record171.set("category", "Concepts");
  record171.set("difficulty", "Advanced");
  record171.set("description", "Rate limiting, auth, routing.");
  record171.set("relatedCareers", ["backend-architect"]);
  try { app.save(record171); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record172 = new Record(collection);
  record172.set("skillName", "Database Architecture");
  record172.set("category", "Databases");
  record172.set("difficulty", "Advanced");
  record172.set("description", "Sharding, replication, CQRS.");
  record172.set("relatedCareers", ["backend-architect"]);
  try { app.save(record172); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record173 = new Record(collection);
  record173.set("skillName", "Message Queues");
  record173.set("category", "Tools");
  record173.set("difficulty", "Advanced");
  record173.set("description", "Kafka, RabbitMQ, SQS.");
  record173.set("relatedCareers", ["backend-architect"]);
  try { app.save(record173); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record174 = new Record(collection);
  record174.set("skillName", "Service Mesh");
  record174.set("category", "Tools");
  record174.set("difficulty", "Advanced");
  record174.set("description", "Istio, Linkerd for microservices.");
  record174.set("relatedCareers", ["backend-architect"]);
  try { app.save(record174); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record175 = new Record(collection);
  record175.set("skillName", "Performance Optimization");
  record175.set("category", "Concepts");
  record175.set("difficulty", "Advanced");
  record175.set("description", "Caching, connection pooling, profiling.");
  record175.set("relatedCareers", ["backend-architect"]);
  try { app.save(record175); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record176 = new Record(collection);
  record176.set("skillName", "TOGAF/Zachman");
  record176.set("category", "Concepts");
  record176.set("difficulty", "Advanced");
  record176.set("description", "Enterprise architecture frameworks.");
  record176.set("relatedCareers", ["enterprise-architect"]);
  try { app.save(record176); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record177 = new Record(collection);
  record177.set("skillName", "Digital Transformation");
  record177.set("category", "Concepts");
  record177.set("difficulty", "Advanced");
  record177.set("description", "Legacy modernization strategies.");
  record177.set("relatedCareers", ["enterprise-architect"]);
  try { app.save(record177); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record178 = new Record(collection);
  record178.set("skillName", "Cloud Strategy");
  record178.set("category", "Cloud Platforms");
  record178.set("difficulty", "Advanced");
  record178.set("description", "Multi-cloud governance and migration.");
  record178.set("relatedCareers", ["enterprise-architect"]);
  try { app.save(record178); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record179 = new Record(collection);
  record179.set("skillName", "Business/IT Alignment");
  record179.set("category", "Concepts");
  record179.set("difficulty", "Advanced");
  record179.set("description", "Aligning tech with business strategy.");
  record179.set("relatedCareers", ["enterprise-architect"]);
  try { app.save(record179); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record180 = new Record(collection);
  record180.set("skillName", "Security Architecture");
  record180.set("category", "Security");
  record180.set("difficulty", "Advanced");
  record180.set("description", "Zero trust and enterprise security.");
  record180.set("relatedCareers", ["enterprise-architect"]);
  try { app.save(record180); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record181 = new Record(collection);
  record181.set("skillName", "Technical Pre-Sales");
  record181.set("category", "Concepts");
  record181.set("difficulty", "Intermediate");
  record181.set("description", "Demos, POCs, and solution proposals.");
  record181.set("relatedCareers", ["solutions-engineer"]);
  try { app.save(record181); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record182 = new Record(collection);
  record182.set("skillName", "API Integration");
  record182.set("category", "Concepts");
  record182.set("difficulty", "Intermediate");
  record182.set("description", "Connecting enterprise systems via APIs.");
  record182.set("relatedCareers", ["solutions-engineer"]);
  try { app.save(record182); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record183 = new Record(collection);
  record183.set("skillName", "Cloud Platforms");
  record183.set("category", "Cloud Platforms");
  record183.set("difficulty", "Intermediate");
  record183.set("description", "AWS/Azure/GCP solution design.");
  record183.set("relatedCareers", ["solutions-engineer"]);
  try { app.save(record183); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record184 = new Record(collection);
  record184.set("skillName", "Customer Success");
  record184.set("category", "Concepts");
  record184.set("difficulty", "Intermediate");
  record184.set("description", "Technical account management.");
  record184.set("relatedCareers", ["solutions-engineer"]);
  try { app.save(record184); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record185 = new Record(collection);
  record185.set("skillName", "Scripting (Python/Bash)");
  record185.set("category", "Languages");
  record185.set("difficulty", "Intermediate");
  record185.set("description", "Automation and demo scripting.");
  record185.set("relatedCareers", ["solutions-engineer"]);
  try { app.save(record185); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record186 = new Record(collection);
  record186.set("skillName", "REST/GraphQL APIs");
  record186.set("category", "Concepts");
  record186.set("difficulty", "Intermediate");
  record186.set("description", "API design and consumption.");
  record186.set("relatedCareers", ["integration-engineer"]);
  try { app.save(record186); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record187 = new Record(collection);
  record187.set("skillName", "Middleware (MuleSoft/Boomi)");
  record187.set("category", "Tools");
  record187.set("difficulty", "Advanced");
  record187.set("description", "Enterprise integration platforms.");
  record187.set("relatedCareers", ["integration-engineer"]);
  try { app.save(record187); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record188 = new Record(collection);
  record188.set("skillName", "ETL Pipelines");
  record188.set("category", "Concepts");
  record188.set("difficulty", "Intermediate");
  record188.set("description", "Data extraction, transformation, loading.");
  record188.set("relatedCareers", ["integration-engineer"]);
  try { app.save(record188); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record189 = new Record(collection);
  record189.set("skillName", "Message Brokers");
  record189.set("category", "Tools");
  record189.set("difficulty", "Intermediate");
  record189.set("description", "Kafka, RabbitMQ, Azure Service Bus.");
  record189.set("relatedCareers", ["integration-engineer"]);
  try { app.save(record189); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record190 = new Record(collection);
  record190.set("skillName", "WebSockets/Event-Driven");
  record190.set("category", "Concepts");
  record190.set("difficulty", "Advanced");
  record190.set("description", "Real-time system integration.");
  record190.set("relatedCareers", ["integration-engineer"]);
  try { app.save(record190); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record191 = new Record(collection);
  record191.set("skillName", "Load Testing");
  record191.set("category", "Testing");
  record191.set("difficulty", "Intermediate");
  record191.set("description", "JMeter, k6, Locust testing tools.");
  record191.set("relatedCareers", ["performance-engineer"]);
  try { app.save(record191); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record192 = new Record(collection);
  record192.set("skillName", "APM Tools");
  record192.set("category", "Tools");
  record192.set("difficulty", "Intermediate");
  record192.set("description", "New Relic, Datadog, Dynatrace.");
  record192.set("relatedCareers", ["performance-engineer"]);
  try { app.save(record192); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record193 = new Record(collection);
  record193.set("skillName", "Profiling & Tracing");
  record193.set("category", "Tools");
  record193.set("difficulty", "Advanced");
  record193.set("description", "CPU/memory profiling, distributed tracing.");
  record193.set("relatedCareers", ["performance-engineer"]);
  try { app.save(record193); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record194 = new Record(collection);
  record194.set("skillName", "Database Optimization");
  record194.set("category", "Databases");
  record194.set("difficulty", "Advanced");
  record194.set("description", "Query tuning and index design.");
  record194.set("relatedCareers", ["performance-engineer"]);
  try { app.save(record194); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record195 = new Record(collection);
  record195.set("skillName", "Caching Strategies");
  record195.set("category", "Concepts");
  record195.set("difficulty", "Intermediate");
  record195.set("description", "Redis, CDN, in-memory caching.");
  record195.set("relatedCareers", ["performance-engineer"]);
  try { app.save(record195); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record196 = new Record(collection);
  record196.set("skillName", "CI/CD Pipelines");
  record196.set("category", "DevOps");
  record196.set("difficulty", "Intermediate");
  record196.set("description", "Jenkins, GitHub Actions, GitLab CI.");
  record196.set("relatedCareers", ["release-engineer"]);
  try { app.save(record196); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record197 = new Record(collection);
  record197.set("skillName", "Release Management");
  record197.set("category", "Concepts");
  record197.set("difficulty", "Intermediate");
  record197.set("description", "Coordinating cross-team releases.");
  record197.set("relatedCareers", ["release-engineer"]);
  try { app.save(record197); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record198 = new Record(collection);
  record198.set("skillName", "Feature Flags");
  record198.set("category", "Tools");
  record198.set("difficulty", "Intermediate");
  record198.set("description", "LaunchDarkly, Unleash.");
  record198.set("relatedCareers", ["release-engineer"]);
  try { app.save(record198); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record199 = new Record(collection);
  record199.set("skillName", "Deployment Strategies");
  record199.set("category", "Concepts");
  record199.set("difficulty", "Advanced");
  record199.set("description", "Blue-green, canary, rolling deployments.");
  record199.set("relatedCareers", ["release-engineer"]);
  try { app.save(record199); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record200 = new Record(collection);
  record200.set("skillName", "Rollback Procedures");
  record200.set("category", "Concepts");
  record200.set("difficulty", "Intermediate");
  record200.set("description", "Automated rollback mechanisms.");
  record200.set("relatedCareers", ["release-engineer"]);
  try { app.save(record200); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record201 = new Record(collection);
  record201.set("skillName", "SIEM Platforms");
  record201.set("category", "Tools");
  record201.set("difficulty", "Intermediate");
  record201.set("description", "Splunk, Microsoft Sentinel, QRadar.");
  record201.set("relatedCareers", ["siem-analyst"]);
  try { app.save(record201); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record202 = new Record(collection);
  record202.set("skillName", "Log Analysis");
  record202.set("category", "Security");
  record202.set("difficulty", "Intermediate");
  record202.set("description", "Parsing and correlating security events.");
  record202.set("relatedCareers", ["siem-analyst"]);
  try { app.save(record202); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record203 = new Record(collection);
  record203.set("skillName", "Threat Hunting");
  record203.set("category", "Security");
  record203.set("difficulty", "Advanced");
  record203.set("description", "Proactive threat detection techniques.");
  record203.set("relatedCareers", ["siem-analyst"]);
  try { app.save(record203); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record204 = new Record(collection);
  record204.set("skillName", "Incident Response");
  record204.set("category", "Concepts");
  record204.set("difficulty", "Advanced");
  record204.set("description", "NIST incident response lifecycle.");
  record204.set("relatedCareers", ["siem-analyst"]);
  try { app.save(record204); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record205 = new Record(collection);
  record205.set("skillName", "MITRE ATT&CK");
  record205.set("category", "Security");
  record205.set("difficulty", "Advanced");
  record205.set("description", "Adversary tactics and techniques framework.");
  record205.set("relatedCareers", ["siem-analyst"]);
  try { app.save(record205); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record206 = new Record(collection);
  record206.set("skillName", "Linux/Windows Administration");
  record206.set("category", "Tools");
  record206.set("difficulty", "Intermediate");
  record206.set("description", "OS management, patching, hardening.");
  record206.set("relatedCareers", ["systems-administrator"]);
  try { app.save(record206); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record207 = new Record(collection);
  record207.set("skillName", "Active Directory");
  record207.set("category", "Tools");
  record207.set("difficulty", "Intermediate");
  record207.set("description", "User management and group policies.");
  record207.set("relatedCareers", ["systems-administrator"]);
  try { app.save(record207); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record208 = new Record(collection);
  record208.set("skillName", "PowerShell/Bash");
  record208.set("category", "Languages");
  record208.set("difficulty", "Intermediate");
  record208.set("description", "Systems automation scripting.");
  record208.set("relatedCareers", ["systems-administrator"]);
  try { app.save(record208); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record209 = new Record(collection);
  record209.set("skillName", "Virtualization (VMware/Hyper-V)");
  record209.set("category", "Tools");
  record209.set("difficulty", "Intermediate");
  record209.set("description", "VM management and provisioning.");
  record209.set("relatedCareers", ["systems-administrator"]);
  try { app.save(record209); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record210 = new Record(collection);
  record210.set("skillName", "Backup & Recovery");
  record210.set("category", "Concepts");
  record210.set("difficulty", "Intermediate");
  record210.set("description", "Backup strategies and disaster recovery.");
  record210.set("relatedCareers", ["systems-administrator"]);
  try { app.save(record210); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record211 = new Record(collection);
  record211.set("skillName", "AWS Security Hub/GuardDuty");
  record211.set("category", "Security");
  record211.set("difficulty", "Advanced");
  record211.set("description", "Cloud-native security monitoring.");
  record211.set("relatedCareers", ["cloud-security-engineer"]);
  try { app.save(record211); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record212 = new Record(collection);
  record212.set("skillName", "IAM & Least Privilege");
  record212.set("category", "Security");
  record212.set("difficulty", "Advanced");
  record212.set("description", "Identity and access governance.");
  record212.set("relatedCareers", ["cloud-security-engineer"]);
  try { app.save(record212); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record213 = new Record(collection);
  record213.set("skillName", "CSPM Tools");
  record213.set("category", "Tools");
  record213.set("difficulty", "Advanced");
  record213.set("description", "Cloud security posture management.");
  record213.set("relatedCareers", ["cloud-security-engineer"]);
  try { app.save(record213); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record214 = new Record(collection);
  record214.set("skillName", "Container Security");
  record214.set("category", "Security");
  record214.set("difficulty", "Advanced");
  record214.set("description", "Image scanning, runtime protection.");
  record214.set("relatedCareers", ["cloud-security-engineer"]);
  try { app.save(record214); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record215 = new Record(collection);
  record215.set("skillName", "DevSecOps");
  record215.set("category", "DevOps");
  record215.set("difficulty", "Advanced");
  record215.set("description", "Integrating security in CI/CD.");
  record215.set("relatedCareers", ["cloud-security-engineer"]);
  try { app.save(record215); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record216 = new Record(collection);
  record216.set("skillName", "REST API Design");
  record216.set("category", "Concepts");
  record216.set("difficulty", "Intermediate");
  record216.set("description", "RESTful API principles and patterns.");
  record216.set("relatedCareers", ["api-developer"]);
  try { app.save(record216); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record217 = new Record(collection);
  record217.set("skillName", "OpenAPI/Swagger");
  record217.set("category", "Tools");
  record217.set("difficulty", "Intermediate");
  record217.set("description", "API documentation standards.");
  record217.set("relatedCareers", ["api-developer"]);
  try { app.save(record217); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record218 = new Record(collection);
  record218.set("skillName", "GraphQL");
  record218.set("category", "Frameworks");
  record218.set("difficulty", "Intermediate");
  record218.set("description", "Flexible query-based APIs.");
  record218.set("relatedCareers", ["api-developer"]);
  try { app.save(record218); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record219 = new Record(collection);
  record219.set("skillName", "OAuth2/JWT");
  record219.set("category", "Security");
  record219.set("difficulty", "Intermediate");
  record219.set("description", "API authentication and authorization.");
  record219.set("relatedCareers", ["api-developer"]);
  try { app.save(record219); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record220 = new Record(collection);
  record220.set("skillName", "API Gateway");
  record220.set("category", "Tools");
  record220.set("difficulty", "Advanced");
  record220.set("description", "Kong, AWS API Gateway, Apigee.");
  record220.set("relatedCareers", ["api-developer"]);
  try { app.save(record220); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record221 = new Record(collection);
  record221.set("skillName", "Rate Limiting & Throttling");
  record221.set("category", "Concepts");
  record221.set("difficulty", "Intermediate");
  record221.set("description", "Protecting APIs from abuse.");
  record221.set("relatedCareers", ["api-developer"]);
  try { app.save(record221); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record222 = new Record(collection);
  record222.set("skillName", "Technical Pre-Sales");
  record222.set("category", "Concepts");
  record222.set("difficulty", "Intermediate");
  record222.set("description", "POC development and product demos.");
  record222.set("relatedCareers", ["technical-sales-engineer"]);
  try { app.save(record222); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record223 = new Record(collection);
  record223.set("skillName", "CRM Tools");
  record223.set("category", "Tools");
  record223.set("difficulty", "Beginner");
  record223.set("description", "Salesforce, HubSpot for pipeline management.");
  record223.set("relatedCareers", ["technical-sales-engineer"]);
  try { app.save(record223); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record224 = new Record(collection);
  record224.set("skillName", "Cloud Architecture");
  record224.set("category", "Cloud Platforms");
  record224.set("difficulty", "Intermediate");
  record224.set("description", "Explaining cloud solutions to clients.");
  record224.set("relatedCareers", ["technical-sales-engineer"]);
  try { app.save(record224); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record225 = new Record(collection);
  record225.set("skillName", "Presentation Skills");
  record225.set("category", "Concepts");
  record225.set("difficulty", "Intermediate");
  record225.set("description", "Technical storytelling and demos.");
  record225.set("relatedCareers", ["technical-sales-engineer"]);
  try { app.save(record225); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record226 = new Record(collection);
  record226.set("skillName", "Competitive Analysis");
  record226.set("category", "Concepts");
  record226.set("difficulty", "Intermediate");
  record226.set("description", "Positioning against competitor products.");
  record226.set("relatedCareers", ["technical-sales-engineer"]);
  try { app.save(record226); } catch(e) { if (!e.message.includes("unique")) throw e; }

  console.log("Seeded 227 careerSkills records for all 50 careers.");
}, (app) => {});