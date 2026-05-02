/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  // Delete all existing careerSkills (wrong slugs from previous migration)
  const existingSkills = app.findRecordsByFilter("careerSkills", "id != null", "", 0, 0);
  for (const r of existingSkills) { app.delete(r); }
  console.log("Deleted " + existingSkills.length + " old careerSkills records.");

  const collection = app.findCollectionByNameOrId("careerSkills");

  const record0 = new Record(collection);
  record0.set("skillName", "Python");
  record0.set("category", "Languages");
  record0.set("difficulty", "Intermediate");
  record0.set("description", "Primary ML development language.");
  record0.set("relatedCareers", ["machine-learning-engineer"]);
  try { app.save(record0); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record1 = new Record(collection);
  record1.set("skillName", "TensorFlow/PyTorch");
  record1.set("category", "Frameworks");
  record1.set("difficulty", "Advanced");
  record1.set("description", "Deep learning frameworks.");
  record1.set("relatedCareers", ["machine-learning-engineer"]);
  try { app.save(record1); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record2 = new Record(collection);
  record2.set("skillName", "MLOps");
  record2.set("category", "DevOps");
  record2.set("difficulty", "Advanced");
  record2.set("description", "Model deployment, versioning, and monitoring.");
  record2.set("relatedCareers", ["machine-learning-engineer"]);
  try { app.save(record2); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record3 = new Record(collection);
  record3.set("skillName", "Feature Engineering");
  record3.set("category", "Concepts");
  record3.set("difficulty", "Intermediate");
  record3.set("description", "Transforming raw data for model training.");
  record3.set("relatedCareers", ["machine-learning-engineer"]);
  try { app.save(record3); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record4 = new Record(collection);
  record4.set("skillName", "Scikit-learn");
  record4.set("category", "Frameworks");
  record4.set("difficulty", "Intermediate");
  record4.set("description", "Classical ML algorithms.");
  record4.set("relatedCareers", ["machine-learning-engineer"]);
  try { app.save(record4); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record5 = new Record(collection);
  record5.set("skillName", "Statistics & Probability");
  record5.set("category", "Concepts");
  record5.set("difficulty", "Advanced");
  record5.set("description", "Math foundations for ML.");
  record5.set("relatedCareers", ["machine-learning-engineer"]);
  try { app.save(record5); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record6 = new Record(collection);
  record6.set("skillName", "LLMs/Transformers");
  record6.set("category", "AI-ML");
  record6.set("difficulty", "Advanced");
  record6.set("description", "Large language model architecture.");
  record6.set("relatedCareers", ["ai-llm-engineer"]);
  try { app.save(record6); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record7 = new Record(collection);
  record7.set("skillName", "Python");
  record7.set("category", "Languages");
  record7.set("difficulty", "Intermediate");
  record7.set("description", "Primary AI development language.");
  record7.set("relatedCareers", ["ai-llm-engineer"]);
  try { app.save(record7); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record8 = new Record(collection);
  record8.set("skillName", "LangChain/LlamaIndex");
  record8.set("category", "Frameworks");
  record8.set("difficulty", "Advanced");
  record8.set("description", "AI application orchestration frameworks.");
  record8.set("relatedCareers", ["ai-llm-engineer"]);
  try { app.save(record8); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record9 = new Record(collection);
  record9.set("skillName", "RAG Systems");
  record9.set("category", "AI-ML");
  record9.set("difficulty", "Advanced");
  record9.set("description", "Retrieval-augmented generation pipelines.");
  record9.set("relatedCareers", ["ai-llm-engineer"]);
  try { app.save(record9); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record10 = new Record(collection);
  record10.set("skillName", "Vector Databases");
  record10.set("category", "Databases");
  record10.set("difficulty", "Intermediate");
  record10.set("description", "Pinecone, Chroma, Weaviate.");
  record10.set("relatedCareers", ["ai-llm-engineer"]);
  try { app.save(record10); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record11 = new Record(collection);
  record11.set("skillName", "Prompt Engineering");
  record11.set("category", "Concepts");
  record11.set("difficulty", "Intermediate");
  record11.set("description", "Crafting effective prompts for LLMs.");
  record11.set("relatedCareers", ["ai-llm-engineer"]);
  try { app.save(record11); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record12 = new Record(collection);
  record12.set("skillName", "Fine-tuning");
  record12.set("category", "AI-ML");
  record12.set("difficulty", "Advanced");
  record12.set("description", "Adapting pre-trained models to specific tasks.");
  record12.set("relatedCareers", ["ai-llm-engineer"]);
  try { app.save(record12); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record13 = new Record(collection);
  record13.set("skillName", "AWS/Azure/GCP");
  record13.set("category", "Cloud Platforms");
  record13.set("difficulty", "Advanced");
  record13.set("description", "Multi-cloud design and governance.");
  record13.set("relatedCareers", ["cloud-architect"]);
  try { app.save(record13); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record14 = new Record(collection);
  record14.set("skillName", "Terraform");
  record14.set("category", "Tools");
  record14.set("difficulty", "Advanced");
  record14.set("description", "Infrastructure as code for cloud.");
  record14.set("relatedCareers", ["cloud-architect"]);
  try { app.save(record14); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record15 = new Record(collection);
  record15.set("skillName", "Kubernetes");
  record15.set("category", "Tools");
  record15.set("difficulty", "Advanced");
  record15.set("description", "Container orchestration on cloud.");
  record15.set("relatedCareers", ["cloud-architect"]);
  try { app.save(record15); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record16 = new Record(collection);
  record16.set("skillName", "Cloud Security");
  record16.set("category", "Security");
  record16.set("difficulty", "Advanced");
  record16.set("description", "IAM, encryption, compliance.");
  record16.set("relatedCareers", ["cloud-architect"]);
  try { app.save(record16); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record17 = new Record(collection);
  record17.set("skillName", "Cost Optimization");
  record17.set("category", "Concepts");
  record17.set("difficulty", "Intermediate");
  record17.set("description", "FinOps and cloud cost management.");
  record17.set("relatedCareers", ["cloud-architect"]);
  try { app.save(record17); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record18 = new Record(collection);
  record18.set("skillName", "High Availability Design");
  record18.set("category", "Concepts");
  record18.set("difficulty", "Advanced");
  record18.set("description", "Multi-region, fault-tolerant architectures.");
  record18.set("relatedCareers", ["cloud-architect"]);
  try { app.save(record18); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record19 = new Record(collection);
  record19.set("skillName", "Docker");
  record19.set("category", "Tools");
  record19.set("difficulty", "Intermediate");
  record19.set("description", "Containerization platform.");
  record19.set("relatedCareers", ["devops-platform-engineer"]);
  try { app.save(record19); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record20 = new Record(collection);
  record20.set("skillName", "Kubernetes");
  record20.set("category", "Tools");
  record20.set("difficulty", "Advanced");
  record20.set("description", "Container orchestration at scale.");
  record20.set("relatedCareers", ["devops-platform-engineer"]);
  try { app.save(record20); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record21 = new Record(collection);
  record21.set("skillName", "CI/CD Pipelines");
  record21.set("category", "DevOps");
  record21.set("difficulty", "Intermediate");
  record21.set("description", "Jenkins, GitHub Actions, GitLab CI.");
  record21.set("relatedCareers", ["devops-platform-engineer"]);
  try { app.save(record21); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record22 = new Record(collection);
  record22.set("skillName", "Terraform");
  record22.set("category", "Tools");
  record22.set("difficulty", "Intermediate");
  record22.set("description", "Infrastructure as code.");
  record22.set("relatedCareers", ["devops-platform-engineer"]);
  try { app.save(record22); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record23 = new Record(collection);
  record23.set("skillName", "Linux Administration");
  record23.set("category", "Tools");
  record23.set("difficulty", "Intermediate");
  record23.set("description", "Linux system management and scripting.");
  record23.set("relatedCareers", ["devops-platform-engineer"]);
  try { app.save(record23); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record24 = new Record(collection);
  record24.set("skillName", "AWS/GCP/Azure");
  record24.set("category", "Cloud Platforms");
  record24.set("difficulty", "Intermediate");
  record24.set("description", "Major cloud platforms.");
  record24.set("relatedCareers", ["devops-platform-engineer"]);
  try { app.save(record24); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record25 = new Record(collection);
  record25.set("skillName", "Observability (Prometheus/Grafana)");
  record25.set("category", "Tools");
  record25.set("difficulty", "Advanced");
  record25.set("description", "Metrics, logs, and distributed tracing.");
  record25.set("relatedCareers", ["devops-platform-engineer"]);
  try { app.save(record25); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record26 = new Record(collection);
  record26.set("skillName", "Network Security");
  record26.set("category", "Security");
  record26.set("difficulty", "Intermediate");
  record26.set("description", "Firewalls, IDS/IPS, VPN.");
  record26.set("relatedCareers", ["cybersecurity-engineer"]);
  try { app.save(record26); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record27 = new Record(collection);
  record27.set("skillName", "SIEM Tools");
  record27.set("category", "Tools");
  record27.set("difficulty", "Intermediate");
  record27.set("description", "Splunk, IBM QRadar, Microsoft Sentinel.");
  record27.set("relatedCareers", ["cybersecurity-engineer"]);
  try { app.save(record27); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record28 = new Record(collection);
  record28.set("skillName", "Incident Response");
  record28.set("category", "Concepts");
  record28.set("difficulty", "Advanced");
  record28.set("description", "Detection, containment, recovery.");
  record28.set("relatedCareers", ["cybersecurity-engineer"]);
  try { app.save(record28); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record29 = new Record(collection);
  record29.set("skillName", "Vulnerability Assessment");
  record29.set("category", "Security");
  record29.set("difficulty", "Intermediate");
  record29.set("description", "Identifying and remediating security weaknesses.");
  record29.set("relatedCareers", ["cybersecurity-engineer"]);
  try { app.save(record29); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record30 = new Record(collection);
  record30.set("skillName", "Threat Intelligence");
  record30.set("category", "Security");
  record30.set("difficulty", "Advanced");
  record30.set("description", "Analyzing and operationalizing threat data.");
  record30.set("relatedCareers", ["cybersecurity-engineer"]);
  try { app.save(record30); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record31 = new Record(collection);
  record31.set("skillName", "Python Scripting");
  record31.set("category", "Languages");
  record31.set("difficulty", "Intermediate");
  record31.set("description", "Automating security tasks.");
  record31.set("relatedCareers", ["cybersecurity-engineer"]);
  try { app.save(record31); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record32 = new Record(collection);
  record32.set("skillName", "Python");
  record32.set("category", "Languages");
  record32.set("difficulty", "Intermediate");
  record32.set("description", "ETL scripting and data processing.");
  record32.set("relatedCareers", ["data-engineer"]);
  try { app.save(record32); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record33 = new Record(collection);
  record33.set("skillName", "Apache Spark");
  record33.set("category", "Tools");
  record33.set("difficulty", "Advanced");
  record33.set("description", "Large-scale distributed data processing.");
  record33.set("relatedCareers", ["data-engineer"]);
  try { app.save(record33); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record34 = new Record(collection);
  record34.set("skillName", "SQL/dbt");
  record34.set("category", "Databases");
  record34.set("difficulty", "Intermediate");
  record34.set("description", "Data transformation and modeling.");
  record34.set("relatedCareers", ["data-engineer"]);
  try { app.save(record34); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record35 = new Record(collection);
  record35.set("skillName", "Airflow");
  record35.set("category", "Tools");
  record35.set("difficulty", "Intermediate");
  record35.set("description", "Workflow orchestration.");
  record35.set("relatedCareers", ["data-engineer"]);
  try { app.save(record35); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record36 = new Record(collection);
  record36.set("skillName", "Data Warehousing");
  record36.set("category", "Databases");
  record36.set("difficulty", "Intermediate");
  record36.set("description", "Snowflake, BigQuery, Redshift.");
  record36.set("relatedCareers", ["data-engineer"]);
  try { app.save(record36); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record37 = new Record(collection);
  record37.set("skillName", "Kafka");
  record37.set("category", "Tools");
  record37.set("difficulty", "Advanced");
  record37.set("description", "Real-time data streaming.");
  record37.set("relatedCareers", ["data-engineer"]);
  try { app.save(record37); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record38 = new Record(collection);
  record38.set("skillName", "React");
  record38.set("category", "Frameworks");
  record38.set("difficulty", "Intermediate");
  record38.set("description", "Frontend UI library.");
  record38.set("relatedCareers", ["full-stack-engineer"]);
  try { app.save(record38); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record39 = new Record(collection);
  record39.set("skillName", "Node.js/Express");
  record39.set("category", "Frameworks");
  record39.set("difficulty", "Intermediate");
  record39.set("description", "Backend API development.");
  record39.set("relatedCareers", ["full-stack-engineer"]);
  try { app.save(record39); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record40 = new Record(collection);
  record40.set("skillName", "PostgreSQL");
  record40.set("category", "Databases");
  record40.set("difficulty", "Intermediate");
  record40.set("description", "Relational database.");
  record40.set("relatedCareers", ["full-stack-engineer"]);
  try { app.save(record40); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record41 = new Record(collection);
  record41.set("skillName", "TypeScript");
  record41.set("category", "Languages");
  record41.set("difficulty", "Intermediate");
  record41.set("description", "End-to-end typed development.");
  record41.set("relatedCareers", ["full-stack-engineer"]);
  try { app.save(record41); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record42 = new Record(collection);
  record42.set("skillName", "Docker");
  record42.set("category", "DevOps");
  record42.set("difficulty", "Intermediate");
  record42.set("description", "Containerization for dev and deployment.");
  record42.set("relatedCareers", ["full-stack-engineer"]);
  try { app.save(record42); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record43 = new Record(collection);
  record43.set("skillName", "REST/GraphQL APIs");
  record43.set("category", "Concepts");
  record43.set("difficulty", "Intermediate");
  record43.set("description", "API design and consumption.");
  record43.set("relatedCareers", ["full-stack-engineer"]);
  try { app.save(record43); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record44 = new Record(collection);
  record44.set("skillName", "Solidity");
  record44.set("category", "Languages");
  record44.set("difficulty", "Advanced");
  record44.set("description", "Smart contract programming language.");
  record44.set("relatedCareers", ["blockchain-web3-engineer"]);
  try { app.save(record44); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record45 = new Record(collection);
  record45.set("skillName", "Ethereum/EVM");
  record45.set("category", "Concepts");
  record45.set("difficulty", "Intermediate");
  record45.set("description", "EVM-based blockchain development.");
  record45.set("relatedCareers", ["blockchain-web3-engineer"]);
  try { app.save(record45); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record46 = new Record(collection);
  record46.set("skillName", "Web3.js/Ethers.js");
  record46.set("category", "Frameworks");
  record46.set("difficulty", "Intermediate");
  record46.set("description", "Blockchain interaction libraries.");
  record46.set("relatedCareers", ["blockchain-web3-engineer"]);
  try { app.save(record46); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record47 = new Record(collection);
  record47.set("skillName", "DeFi Protocols");
  record47.set("category", "Concepts");
  record47.set("difficulty", "Advanced");
  record47.set("description", "Decentralized finance concepts.");
  record47.set("relatedCareers", ["blockchain-web3-engineer"]);
  try { app.save(record47); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record48 = new Record(collection);
  record48.set("skillName", "Hardhat/Foundry");
  record48.set("category", "Tools");
  record48.set("difficulty", "Intermediate");
  record48.set("description", "Smart contract dev frameworks.");
  record48.set("relatedCareers", ["blockchain-web3-engineer"]);
  try { app.save(record48); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record49 = new Record(collection);
  record49.set("skillName", "IPFS/Decentralized Storage");
  record49.set("category", "Concepts");
  record49.set("difficulty", "Intermediate");
  record49.set("description", "Distributed file storage for Web3.");
  record49.set("relatedCareers", ["blockchain-web3-engineer"]);
  try { app.save(record49); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record50 = new Record(collection);
  record50.set("skillName", "Linux/Unix");
  record50.set("category", "Tools");
  record50.set("difficulty", "Intermediate");
  record50.set("description", "Deep OS-level knowledge.");
  record50.set("relatedCareers", ["site-reliability-engineer-sre"]);
  try { app.save(record50); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record51 = new Record(collection);
  record51.set("skillName", "Kubernetes");
  record51.set("category", "Tools");
  record51.set("difficulty", "Advanced");
  record51.set("description", "Running production workloads at scale.");
  record51.set("relatedCareers", ["site-reliability-engineer-sre"]);
  try { app.save(record51); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record52 = new Record(collection);
  record52.set("skillName", "Observability");
  record52.set("category", "Tools");
  record52.set("difficulty", "Advanced");
  record52.set("description", "Prometheus, Grafana, PagerDuty, Datadog.");
  record52.set("relatedCareers", ["site-reliability-engineer-sre"]);
  try { app.save(record52); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record53 = new Record(collection);
  record53.set("skillName", "SLOs/SLAs/SLIs");
  record53.set("category", "Concepts");
  record53.set("difficulty", "Advanced");
  record53.set("description", "Reliability engineering metrics.");
  record53.set("relatedCareers", ["site-reliability-engineer-sre"]);
  try { app.save(record53); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record54 = new Record(collection);
  record54.set("skillName", "Incident Management");
  record54.set("category", "Concepts");
  record54.set("difficulty", "Advanced");
  record54.set("description", "On-call, post-mortems, blameless culture.");
  record54.set("relatedCareers", ["site-reliability-engineer-sre"]);
  try { app.save(record54); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record55 = new Record(collection);
  record55.set("skillName", "Python/Go");
  record55.set("category", "Languages");
  record55.set("difficulty", "Intermediate");
  record55.set("description", "Automation and tooling scripting.");
  record55.set("relatedCareers", ["site-reliability-engineer-sre"]);
  try { app.save(record55); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record56 = new Record(collection);
  record56.set("skillName", "C/C++");
  record56.set("category", "Languages");
  record56.set("difficulty", "Advanced");
  record56.set("description", "Low-level systems programming.");
  record56.set("relatedCareers", ["embedded-systems-firmware-engineer"]);
  try { app.save(record56); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record57 = new Record(collection);
  record57.set("skillName", "RTOS");
  record57.set("category", "Concepts");
  record57.set("difficulty", "Advanced");
  record57.set("description", "Real-time operating systems (FreeRTOS, Zephyr).");
  record57.set("relatedCareers", ["embedded-systems-firmware-engineer"]);
  try { app.save(record57); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record58 = new Record(collection);
  record58.set("skillName", "Microcontrollers (ARM/AVR)");
  record58.set("category", "Tools");
  record58.set("difficulty", "Intermediate");
  record58.set("description", "MCU programming and peripherals.");
  record58.set("relatedCareers", ["embedded-systems-firmware-engineer"]);
  try { app.save(record58); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record59 = new Record(collection);
  record59.set("skillName", "Hardware Debugging");
  record59.set("category", "Tools");
  record59.set("difficulty", "Advanced");
  record59.set("description", "JTAG, oscilloscopes, logic analyzers.");
  record59.set("relatedCareers", ["embedded-systems-firmware-engineer"]);
  try { app.save(record59); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record60 = new Record(collection);
  record60.set("skillName", "Communication Protocols");
  record60.set("category", "Concepts");
  record60.set("difficulty", "Intermediate");
  record60.set("description", "SPI, I2C, UART, CAN.");
  record60.set("relatedCareers", ["embedded-systems-firmware-engineer"]);
  try { app.save(record60); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record61 = new Record(collection);
  record61.set("skillName", "Bootloaders & Memory Management");
  record61.set("category", "Concepts");
  record61.set("difficulty", "Advanced");
  record61.set("description", "Flash, EEPROM, linker scripts.");
  record61.set("relatedCareers", ["embedded-systems-firmware-engineer"]);
  try { app.save(record61); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record62 = new Record(collection);
  record62.set("skillName", "Python");
  record62.set("category", "Languages");
  record62.set("difficulty", "Intermediate");
  record62.set("description", "Primary language for data science.");
  record62.set("relatedCareers", ["data-scientist"]);
  try { app.save(record62); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record63 = new Record(collection);
  record63.set("skillName", "Machine Learning");
  record63.set("category", "AI-ML");
  record63.set("difficulty", "Advanced");
  record63.set("description", "Supervised, unsupervised, and reinforcement learning.");
  record63.set("relatedCareers", ["data-scientist"]);
  try { app.save(record63); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record64 = new Record(collection);
  record64.set("skillName", "Statistics & Probability");
  record64.set("category", "Concepts");
  record64.set("difficulty", "Advanced");
  record64.set("description", "Hypothesis testing, Bayesian inference.");
  record64.set("relatedCareers", ["data-scientist"]);
  try { app.save(record64); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record65 = new Record(collection);
  record65.set("skillName", "Pandas/NumPy");
  record65.set("category", "Frameworks");
  record65.set("difficulty", "Intermediate");
  record65.set("description", "Data manipulation libraries.");
  record65.set("relatedCareers", ["data-scientist"]);
  try { app.save(record65); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record66 = new Record(collection);
  record66.set("skillName", "SQL");
  record66.set("category", "Databases");
  record66.set("difficulty", "Intermediate");
  record66.set("description", "Querying and analyzing relational data.");
  record66.set("relatedCareers", ["data-scientist"]);
  try { app.save(record66); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record67 = new Record(collection);
  record67.set("skillName", "Data Visualization");
  record67.set("category", "Tools");
  record67.set("difficulty", "Beginner");
  record67.set("description", "Matplotlib, Seaborn, Tableau, Power BI.");
  record67.set("relatedCareers", ["data-scientist"]);
  try { app.save(record67); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record68 = new Record(collection);
  record68.set("skillName", "Node.js / Python / Go");
  record68.set("category", "Languages");
  record68.set("difficulty", "Intermediate");
  record68.set("description", "Backend server-side languages.");
  record68.set("relatedCareers", ["backend-engineer"]);
  try { app.save(record68); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record69 = new Record(collection);
  record69.set("skillName", "REST API Design");
  record69.set("category", "Concepts");
  record69.set("difficulty", "Intermediate");
  record69.set("description", "RESTful API principles and best practices.");
  record69.set("relatedCareers", ["backend-engineer"]);
  try { app.save(record69); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record70 = new Record(collection);
  record70.set("skillName", "PostgreSQL / MySQL");
  record70.set("category", "Databases");
  record70.set("difficulty", "Intermediate");
  record70.set("description", "Relational database management.");
  record70.set("relatedCareers", ["backend-engineer"]);
  try { app.save(record70); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record71 = new Record(collection);
  record71.set("skillName", "Redis");
  record71.set("category", "Databases");
  record71.set("difficulty", "Intermediate");
  record71.set("description", "In-memory caching and pub/sub.");
  record71.set("relatedCareers", ["backend-engineer"]);
  try { app.save(record71); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record72 = new Record(collection);
  record72.set("skillName", "Authentication & Authorization");
  record72.set("category", "Security");
  record72.set("difficulty", "Intermediate");
  record72.set("description", "JWT, OAuth2, session management.");
  record72.set("relatedCareers", ["backend-engineer"]);
  try { app.save(record72); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record73 = new Record(collection);
  record73.set("skillName", "Microservices");
  record73.set("category", "Concepts");
  record73.set("difficulty", "Advanced");
  record73.set("description", "Designing distributed service architectures.");
  record73.set("relatedCareers", ["backend-engineer"]);
  try { app.save(record73); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record74 = new Record(collection);
  record74.set("skillName", "Message Queues");
  record74.set("category", "Tools");
  record74.set("difficulty", "Intermediate");
  record74.set("description", "RabbitMQ, Kafka, SQS.");
  record74.set("relatedCareers", ["backend-engineer"]);
  try { app.save(record74); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record75 = new Record(collection);
  record75.set("skillName", "React Native");
  record75.set("category", "Frameworks");
  record75.set("difficulty", "Intermediate");
  record75.set("description", "Cross-platform mobile development.");
  record75.set("relatedCareers", ["mobile-app-developer-ios-android"]);
  try { app.save(record75); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record76 = new Record(collection);
  record76.set("skillName", "Swift (iOS)");
  record76.set("category", "Languages");
  record76.set("difficulty", "Intermediate");
  record76.set("description", "iOS native development.");
  record76.set("relatedCareers", ["mobile-app-developer-ios-android"]);
  try { app.save(record76); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record77 = new Record(collection);
  record77.set("skillName", "Kotlin (Android)");
  record77.set("category", "Languages");
  record77.set("difficulty", "Intermediate");
  record77.set("description", "Android native development.");
  record77.set("relatedCareers", ["mobile-app-developer-ios-android"]);
  try { app.save(record77); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record78 = new Record(collection);
  record78.set("skillName", "Mobile UX Patterns");
  record78.set("category", "Design");
  record78.set("difficulty", "Intermediate");
  record78.set("description", "Platform-specific HIG and Material Design.");
  record78.set("relatedCareers", ["mobile-app-developer-ios-android"]);
  try { app.save(record78); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record79 = new Record(collection);
  record79.set("skillName", "App Store Deployment");
  record79.set("category", "Tools");
  record79.set("difficulty", "Beginner");
  record79.set("description", "Publishing to App Store and Play Store.");
  record79.set("relatedCareers", ["mobile-app-developer-ios-android"]);
  try { app.save(record79); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record80 = new Record(collection);
  record80.set("skillName", "Push Notifications & Background Tasks");
  record80.set("category", "Concepts");
  record80.set("difficulty", "Intermediate");
  record80.set("description", "Mobile lifecycle and background processing.");
  record80.set("relatedCareers", ["mobile-app-developer-ios-android"]);
  try { app.save(record80); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record81 = new Record(collection);
  record81.set("skillName", "Product Roadmapping");
  record81.set("category", "Concepts");
  record81.set("difficulty", "Intermediate");
  record81.set("description", "Defining and communicating product vision.");
  record81.set("relatedCareers", ["product-manager-technical"]);
  try { app.save(record81); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record82 = new Record(collection);
  record82.set("skillName", "Agile/Scrum");
  record82.set("category", "Concepts");
  record82.set("difficulty", "Beginner");
  record82.set("description", "Iterative product development.");
  record82.set("relatedCareers", ["product-manager-technical"]);
  try { app.save(record82); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record83 = new Record(collection);
  record83.set("skillName", "User Research");
  record83.set("category", "Design");
  record83.set("difficulty", "Intermediate");
  record83.set("description", "Interviews, surveys, usability testing.");
  record83.set("relatedCareers", ["product-manager-technical"]);
  try { app.save(record83); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record84 = new Record(collection);
  record84.set("skillName", "Data Analytics");
  record84.set("category", "Concepts");
  record84.set("difficulty", "Intermediate");
  record84.set("description", "Using metrics to drive product decisions.");
  record84.set("relatedCareers", ["product-manager-technical"]);
  try { app.save(record84); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record85 = new Record(collection);
  record85.set("skillName", "Stakeholder Management");
  record85.set("category", "Concepts");
  record85.set("difficulty", "Advanced");
  record85.set("description", "Aligning cross-functional teams.");
  record85.set("relatedCareers", ["product-manager-technical"]);
  try { app.save(record85); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record86 = new Record(collection);
  record86.set("skillName", "SQL");
  record86.set("category", "Databases");
  record86.set("difficulty", "Beginner");
  record86.set("description", "Querying product metrics data.");
  record86.set("relatedCareers", ["product-manager-technical"]);
  try { app.save(record86); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record87 = new Record(collection);
  record87.set("skillName", "Quantum Algorithms");
  record87.set("category", "Concepts");
  record87.set("difficulty", "Advanced");
  record87.set("description", "Shor, Grover, VQE algorithms.");
  record87.set("relatedCareers", ["quantum-computing-engineer"]);
  try { app.save(record87); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record88 = new Record(collection);
  record88.set("skillName", "Qiskit / Cirq");
  record88.set("category", "Frameworks");
  record88.set("difficulty", "Advanced");
  record88.set("description", "Quantum circuit programming frameworks.");
  record88.set("relatedCareers", ["quantum-computing-engineer"]);
  try { app.save(record88); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record89 = new Record(collection);
  record89.set("skillName", "Linear Algebra");
  record89.set("category", "Concepts");
  record89.set("difficulty", "Advanced");
  record89.set("description", "Qubits, gates, quantum state math.");
  record89.set("relatedCareers", ["quantum-computing-engineer"]);
  try { app.save(record89); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record90 = new Record(collection);
  record90.set("skillName", "Python");
  record90.set("category", "Languages");
  record90.set("difficulty", "Intermediate");
  record90.set("description", "Quantum programming and simulation.");
  record90.set("relatedCareers", ["quantum-computing-engineer"]);
  try { app.save(record90); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record91 = new Record(collection);
  record91.set("skillName", "Quantum Error Correction");
  record91.set("category", "Concepts");
  record91.set("difficulty", "Advanced");
  record91.set("description", "NISQ-era error mitigation techniques.");
  record91.set("relatedCareers", ["quantum-computing-engineer"]);
  try { app.save(record91); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record92 = new Record(collection);
  record92.set("skillName", "Unity / Unreal Engine");
  record92.set("category", "Tools");
  record92.set("difficulty", "Intermediate");
  record92.set("description", "Primary XR development engines.");
  record92.set("relatedCareers", ["ar-vr-engineer"]);
  try { app.save(record92); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record93 = new Record(collection);
  record93.set("skillName", "C# / C++");
  record93.set("category", "Languages");
  record93.set("difficulty", "Intermediate");
  record93.set("description", "XR scripting languages.");
  record93.set("relatedCareers", ["ar-vr-engineer"]);
  try { app.save(record93); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record94 = new Record(collection);
  record94.set("skillName", "3D Math / Spatial Computing");
  record94.set("category", "Concepts");
  record94.set("difficulty", "Advanced");
  record94.set("description", "Quaternions, transforms, raycasting.");
  record94.set("relatedCareers", ["ar-vr-engineer"]);
  try { app.save(record94); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record95 = new Record(collection);
  record95.set("skillName", "OpenXR / WebXR");
  record95.set("category", "Frameworks");
  record95.set("difficulty", "Intermediate");
  record95.set("description", "Cross-platform XR standards.");
  record95.set("relatedCareers", ["ar-vr-engineer"]);
  try { app.save(record95); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record96 = new Record(collection);
  record96.set("skillName", "Shader Programming");
  record96.set("category", "Concepts");
  record96.set("difficulty", "Advanced");
  record96.set("description", "GLSL/HLSL for XR visuals.");
  record96.set("relatedCareers", ["ar-vr-engineer"]);
  try { app.save(record96); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record97 = new Record(collection);
  record97.set("skillName", "Spatial UI Design");
  record97.set("category", "Design");
  record97.set("difficulty", "Intermediate");
  record97.set("description", "Designing for 3D immersive environments.");
  record97.set("relatedCareers", ["ar-vr-engineer"]);
  try { app.save(record97); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record98 = new Record(collection);
  record98.set("skillName", "ROS/ROS2");
  record98.set("category", "Frameworks");
  record98.set("difficulty", "Advanced");
  record98.set("description", "Robot Operating System framework.");
  record98.set("relatedCareers", ["robotics-engineer"]);
  try { app.save(record98); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record99 = new Record(collection);
  record99.set("skillName", "C++ / Python");
  record99.set("category", "Languages");
  record99.set("difficulty", "Intermediate");
  record99.set("description", "Robotics programming languages.");
  record99.set("relatedCareers", ["robotics-engineer"]);
  try { app.save(record99); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record100 = new Record(collection);
  record100.set("skillName", "Control Systems");
  record100.set("category", "Concepts");
  record100.set("difficulty", "Advanced");
  record100.set("description", "PID controllers, state machines.");
  record100.set("relatedCareers", ["robotics-engineer"]);
  try { app.save(record100); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record101 = new Record(collection);
  record101.set("skillName", "Computer Vision");
  record101.set("category", "AI-ML");
  record101.set("difficulty", "Advanced");
  record101.set("description", "Perception for robot navigation.");
  record101.set("relatedCareers", ["robotics-engineer"]);
  try { app.save(record101); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record102 = new Record(collection);
  record102.set("skillName", "Kinematics & Dynamics");
  record102.set("category", "Concepts");
  record102.set("difficulty", "Advanced");
  record102.set("description", "Robot motion planning and simulation.");
  record102.set("relatedCareers", ["robotics-engineer"]);
  try { app.save(record102); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record103 = new Record(collection);
  record103.set("skillName", "Sensor Fusion");
  record103.set("category", "Concepts");
  record103.set("difficulty", "Advanced");
  record103.set("description", "IMU, LiDAR, camera data fusion.");
  record103.set("relatedCareers", ["robotics-engineer"]);
  try { app.save(record103); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record104 = new Record(collection);
  record104.set("skillName", "TCP/IP Networking");
  record104.set("category", "Concepts");
  record104.set("difficulty", "Intermediate");
  record104.set("description", "Core networking protocols.");
  record104.set("relatedCareers", ["network-engineer"]);
  try { app.save(record104); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record105 = new Record(collection);
  record105.set("skillName", "Cisco/Juniper Hardware");
  record105.set("category", "Tools");
  record105.set("difficulty", "Advanced");
  record105.set("description", "Network hardware configuration.");
  record105.set("relatedCareers", ["network-engineer"]);
  try { app.save(record105); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record106 = new Record(collection);
  record106.set("skillName", "Firewalls & Security");
  record106.set("category", "Security");
  record106.set("difficulty", "Intermediate");
  record106.set("description", "Network perimeter security.");
  record106.set("relatedCareers", ["network-engineer"]);
  try { app.save(record106); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record107 = new Record(collection);
  record107.set("skillName", "BGP/OSPF Routing");
  record107.set("category", "Concepts");
  record107.set("difficulty", "Advanced");
  record107.set("description", "Dynamic routing protocols.");
  record107.set("relatedCareers", ["network-engineer"]);
  try { app.save(record107); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record108 = new Record(collection);
  record108.set("skillName", "Network Monitoring");
  record108.set("category", "Tools");
  record108.set("difficulty", "Intermediate");
  record108.set("description", "Wireshark, Nagios, SolarWinds.");
  record108.set("relatedCareers", ["network-engineer"]);
  try { app.save(record108); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record109 = new Record(collection);
  record109.set("skillName", "SD-WAN / Network Automation");
  record109.set("category", "Tools");
  record109.set("difficulty", "Advanced");
  record109.set("description", "Software-defined networking.");
  record109.set("relatedCareers", ["network-engineer"]);
  try { app.save(record109); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record110 = new Record(collection);
  record110.set("skillName", "AWS/Azure/GCP Architecture");
  record110.set("category", "Cloud Platforms");
  record110.set("difficulty", "Advanced");
  record110.set("description", "Designing scalable cloud solutions.");
  record110.set("relatedCareers", ["solutions-architect"]);
  try { app.save(record110); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record111 = new Record(collection);
  record111.set("skillName", "System Design");
  record111.set("category", "Concepts");
  record111.set("difficulty", "Advanced");
  record111.set("description", "Distributed systems and microservices.");
  record111.set("relatedCareers", ["solutions-architect"]);
  try { app.save(record111); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record112 = new Record(collection);
  record112.set("skillName", "Enterprise Integration");
  record112.set("category", "Concepts");
  record112.set("difficulty", "Advanced");
  record112.set("description", "Connecting enterprise systems.");
  record112.set("relatedCareers", ["solutions-architect"]);
  try { app.save(record112); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record113 = new Record(collection);
  record113.set("skillName", "Cost Optimization");
  record113.set("category", "Concepts");
  record113.set("difficulty", "Intermediate");
  record113.set("description", "Cloud cost analysis.");
  record113.set("relatedCareers", ["solutions-architect"]);
  try { app.save(record113); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record114 = new Record(collection);
  record114.set("skillName", "Security Architecture");
  record114.set("category", "Security");
  record114.set("difficulty", "Advanced");
  record114.set("description", "Security by design principles.");
  record114.set("relatedCareers", ["solutions-architect"]);
  try { app.save(record114); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record115 = new Record(collection);
  record115.set("skillName", "Technical Presentations");
  record115.set("category", "Concepts");
  record115.set("difficulty", "Intermediate");
  record115.set("description", "Whiteboarding and stakeholder demos.");
  record115.set("relatedCareers", ["solutions-architect"]);
  try { app.save(record115); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record116 = new Record(collection);
  record116.set("skillName", "PostgreSQL");
  record116.set("category", "Databases");
  record116.set("difficulty", "Advanced");
  record116.set("description", "Advanced PostgreSQL administration.");
  record116.set("relatedCareers", ["database-administrator-database-engineer"]);
  try { app.save(record116); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record117 = new Record(collection);
  record117.set("skillName", "MySQL / Oracle");
  record117.set("category", "Databases");
  record117.set("difficulty", "Intermediate");
  record117.set("description", "RDBMS tuning and administration.");
  record117.set("relatedCareers", ["database-administrator-database-engineer"]);
  try { app.save(record117); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record118 = new Record(collection);
  record118.set("skillName", "Performance Tuning");
  record118.set("category", "Concepts");
  record118.set("difficulty", "Advanced");
  record118.set("description", "Query optimization, indexes, caching.");
  record118.set("relatedCareers", ["database-administrator-database-engineer"]);
  try { app.save(record118); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record119 = new Record(collection);
  record119.set("skillName", "Backup & Recovery");
  record119.set("category", "Concepts");
  record119.set("difficulty", "Advanced");
  record119.set("description", "Disaster recovery and point-in-time restore.");
  record119.set("relatedCareers", ["database-administrator-database-engineer"]);
  try { app.save(record119); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record120 = new Record(collection);
  record120.set("skillName", "Replication & HA");
  record120.set("category", "Concepts");
  record120.set("difficulty", "Advanced");
  record120.set("description", "HA replication and failover clusters.");
  record120.set("relatedCareers", ["database-administrator-database-engineer"]);
  try { app.save(record120); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record121 = new Record(collection);
  record121.set("skillName", "NoSQL (MongoDB/Redis/Cassandra)");
  record121.set("category", "Databases");
  record121.set("difficulty", "Intermediate");
  record121.set("description", "Non-relational data stores.");
  record121.set("relatedCareers", ["database-administrator-database-engineer"]);
  try { app.save(record121); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record122 = new Record(collection);
  record122.set("skillName", "Unity / Unreal Engine");
  record122.set("category", "Tools");
  record122.set("difficulty", "Intermediate");
  record122.set("description", "Game engines for 2D/3D development.");
  record122.set("relatedCareers", ["game-developer"]);
  try { app.save(record122); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record123 = new Record(collection);
  record123.set("skillName", "C# / C++");
  record123.set("category", "Languages");
  record123.set("difficulty", "Intermediate");
  record123.set("description", "Primary game development languages.");
  record123.set("relatedCareers", ["game-developer"]);
  try { app.save(record123); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record124 = new Record(collection);
  record124.set("skillName", "Game Physics");
  record124.set("category", "Concepts");
  record124.set("difficulty", "Intermediate");
  record124.set("description", "Physics simulation and collision.");
  record124.set("relatedCareers", ["game-developer"]);
  try { app.save(record124); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record125 = new Record(collection);
  record125.set("skillName", "Multiplayer Networking");
  record125.set("category", "Concepts");
  record125.set("difficulty", "Advanced");
  record125.set("description", "Real-time game networking.");
  record125.set("relatedCareers", ["game-developer"]);
  try { app.save(record125); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record126 = new Record(collection);
  record126.set("skillName", "Shader Programming");
  record126.set("category", "Concepts");
  record126.set("difficulty", "Advanced");
  record126.set("description", "GLSL/HLSL graphics shaders.");
  record126.set("relatedCareers", ["game-developer"]);
  try { app.save(record126); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record127 = new Record(collection);
  record127.set("skillName", "Game Design Patterns");
  record127.set("category", "Concepts");
  record127.set("difficulty", "Intermediate");
  record127.set("description", "Entity-component systems, state machines.");
  record127.set("relatedCareers", ["game-developer"]);
  try { app.save(record127); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record128 = new Record(collection);
  record128.set("skillName", "Python / R");
  record128.set("category", "Languages");
  record128.set("difficulty", "Intermediate");
  record128.set("description", "Bioinformatics analysis languages.");
  record128.set("relatedCareers", ["bioinformatics-engineer"]);
  try { app.save(record128); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record129 = new Record(collection);
  record129.set("skillName", "Genomics Pipelines");
  record129.set("category", "Concepts");
  record129.set("difficulty", "Advanced");
  record129.set("description", "NGS data analysis, variant calling.");
  record129.set("relatedCareers", ["bioinformatics-engineer"]);
  try { app.save(record129); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record130 = new Record(collection);
  record130.set("skillName", "Bioinformatics Tools (BLAST/BWA)");
  record130.set("category", "Tools");
  record130.set("difficulty", "Advanced");
  record130.set("description", "Sequence alignment and analysis tools.");
  record130.set("relatedCareers", ["bioinformatics-engineer"]);
  try { app.save(record130); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record131 = new Record(collection);
  record131.set("skillName", "Machine Learning for Biology");
  record131.set("category", "AI-ML");
  record131.set("difficulty", "Advanced");
  record131.set("description", "Protein structure prediction, drug discovery.");
  record131.set("relatedCareers", ["bioinformatics-engineer"]);
  try { app.save(record131); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record132 = new Record(collection);
  record132.set("skillName", "HPC / Cloud Computing");
  record132.set("category", "Cloud Platforms");
  record132.set("difficulty", "Intermediate");
  record132.set("description", "Running large-scale genomics workloads.");
  record132.set("relatedCareers", ["bioinformatics-engineer"]);
  try { app.save(record132); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record133 = new Record(collection);
  record133.set("skillName", "SQL / NoSQL");
  record133.set("category", "Databases");
  record133.set("difficulty", "Intermediate");
  record133.set("description", "Biological data storage and querying.");
  record133.set("relatedCareers", ["bioinformatics-engineer"]);
  try { app.save(record133); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record134 = new Record(collection);
  record134.set("skillName", "Prompt Engineering");
  record134.set("category", "AI-ML");
  record134.set("difficulty", "Intermediate");
  record134.set("description", "Crafting and optimizing LLM prompts.");
  record134.set("relatedCareers", ["prompt-engineer-ai-product-specialist"]);
  try { app.save(record134); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record135 = new Record(collection);
  record135.set("skillName", "LLM APIs (OpenAI/Anthropic)");
  record135.set("category", "Tools");
  record135.set("difficulty", "Intermediate");
  record135.set("description", "Integrating LLMs into products.");
  record135.set("relatedCareers", ["prompt-engineer-ai-product-specialist"]);
  try { app.save(record135); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record136 = new Record(collection);
  record136.set("skillName", "RAG & Context Management");
  record136.set("category", "AI-ML");
  record136.set("difficulty", "Advanced");
  record136.set("description", "Retrieval-augmented generation techniques.");
  record136.set("relatedCareers", ["prompt-engineer-ai-product-specialist"]);
  try { app.save(record136); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record137 = new Record(collection);
  record137.set("skillName", "Python");
  record137.set("category", "Languages");
  record137.set("difficulty", "Intermediate");
  record137.set("description", "AI product scripting and automation.");
  record137.set("relatedCareers", ["prompt-engineer-ai-product-specialist"]);
  try { app.save(record137); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record138 = new Record(collection);
  record138.set("skillName", "Evaluation & Red-teaming");
  record138.set("category", "Concepts");
  record138.set("difficulty", "Advanced");
  record138.set("description", "Measuring and improving AI output quality.");
  record138.set("relatedCareers", ["prompt-engineer-ai-product-specialist"]);
  try { app.save(record138); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record139 = new Record(collection);
  record139.set("skillName", "Product Thinking");
  record139.set("category", "Concepts");
  record139.set("difficulty", "Intermediate");
  record139.set("description", "Building AI-powered user products.");
  record139.set("relatedCareers", ["prompt-engineer-ai-product-specialist"]);
  try { app.save(record139); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record140 = new Record(collection);
  record140.set("skillName", "PCB Design (Altium/KiCad)");
  record140.set("category", "Tools");
  record140.set("difficulty", "Advanced");
  record140.set("description", "Circuit board design and layout.");
  record140.set("relatedCareers", ["hardware-engineer"]);
  try { app.save(record140); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record141 = new Record(collection);
  record141.set("skillName", "VHDL / Verilog");
  record141.set("category", "Languages");
  record141.set("difficulty", "Advanced");
  record141.set("description", "FPGA/ASIC hardware description languages.");
  record141.set("relatedCareers", ["hardware-engineer"]);
  try { app.save(record141); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record142 = new Record(collection);
  record142.set("skillName", "Signal Integrity");
  record142.set("category", "Concepts");
  record142.set("difficulty", "Advanced");
  record142.set("description", "High-speed digital signal analysis.");
  record142.set("relatedCareers", ["hardware-engineer"]);
  try { app.save(record142); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record143 = new Record(collection);
  record143.set("skillName", "Embedded C");
  record143.set("category", "Languages");
  record143.set("difficulty", "Intermediate");
  record143.set("description", "Firmware for hardware systems.");
  record143.set("relatedCareers", ["hardware-engineer"]);
  try { app.save(record143); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record144 = new Record(collection);
  record144.set("skillName", "Test & Validation (Oscilloscope/DMM)");
  record144.set("category", "Tools");
  record144.set("difficulty", "Intermediate");
  record144.set("description", "Hardware testing and debugging.");
  record144.set("relatedCareers", ["hardware-engineer"]);
  try { app.save(record144); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record145 = new Record(collection);
  record145.set("skillName", "Power Electronics");
  record145.set("category", "Concepts");
  record145.set("difficulty", "Advanced");
  record145.set("description", "Power supply design, EMC/EMI.");
  record145.set("relatedCareers", ["hardware-engineer"]);
  try { app.save(record145); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record146 = new Record(collection);
  record146.set("skillName", "C++ / Python");
  record146.set("category", "Languages");
  record146.set("difficulty", "Advanced");
  record146.set("description", "Core autonomous systems languages.");
  record146.set("relatedCareers", ["autonomous-systems-self-driving-engineer"]);
  try { app.save(record146); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record147 = new Record(collection);
  record147.set("skillName", "Computer Vision");
  record147.set("category", "AI-ML");
  record147.set("difficulty", "Advanced");
  record147.set("description", "Object detection, segmentation, tracking.");
  record147.set("relatedCareers", ["autonomous-systems-self-driving-engineer"]);
  try { app.save(record147); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record148 = new Record(collection);
  record148.set("skillName", "Path Planning & Control");
  record148.set("category", "Concepts");
  record148.set("difficulty", "Advanced");
  record148.set("description", "Motion planning, PID, MPC controllers.");
  record148.set("relatedCareers", ["autonomous-systems-self-driving-engineer"]);
  try { app.save(record148); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record149 = new Record(collection);
  record149.set("skillName", "ROS2");
  record149.set("category", "Frameworks");
  record149.set("difficulty", "Advanced");
  record149.set("description", "Robot Operating System for AV stacks.");
  record149.set("relatedCareers", ["autonomous-systems-self-driving-engineer"]);
  try { app.save(record149); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record150 = new Record(collection);
  record150.set("skillName", "LiDAR / Radar / Camera Fusion");
  record150.set("category", "Concepts");
  record150.set("difficulty", "Advanced");
  record150.set("description", "Multi-sensor data fusion.");
  record150.set("relatedCareers", ["autonomous-systems-self-driving-engineer"]);
  try { app.save(record150); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record151 = new Record(collection);
  record151.set("skillName", "Simulation (CARLA/SUMO)");
  record151.set("category", "Tools");
  record151.set("difficulty", "Intermediate");
  record151.set("description", "AV testing in simulation environments.");
  record151.set("relatedCareers", ["autonomous-systems-self-driving-engineer"]);
  try { app.save(record151); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record152 = new Record(collection);
  record152.set("skillName", "Figma");
  record152.set("category", "Design");
  record152.set("difficulty", "Intermediate");
  record152.set("description", "UI/UX design and prototyping tool.");
  record152.set("relatedCareers", ["ui-ux-designer-technical"]);
  try { app.save(record152); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record153 = new Record(collection);
  record153.set("skillName", "User Research");
  record153.set("category", "Design");
  record153.set("difficulty", "Intermediate");
  record153.set("description", "Qualitative and quantitative research methods.");
  record153.set("relatedCareers", ["ui-ux-designer-technical"]);
  try { app.save(record153); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record154 = new Record(collection);
  record154.set("skillName", "Design Systems");
  record154.set("category", "Design");
  record154.set("difficulty", "Advanced");
  record154.set("description", "Building reusable component libraries.");
  record154.set("relatedCareers", ["ui-ux-designer-technical"]);
  try { app.save(record154); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record155 = new Record(collection);
  record155.set("skillName", "Accessibility (WCAG)");
  record155.set("category", "Concepts");
  record155.set("difficulty", "Intermediate");
  record155.set("description", "Inclusive and accessible design.");
  record155.set("relatedCareers", ["ui-ux-designer-technical"]);
  try { app.save(record155); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record156 = new Record(collection);
  record156.set("skillName", "Usability Testing");
  record156.set("category", "Design");
  record156.set("difficulty", "Intermediate");
  record156.set("description", "Conducting and analyzing usability sessions.");
  record156.set("relatedCareers", ["ui-ux-designer-technical"]);
  try { app.save(record156); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record157 = new Record(collection);
  record157.set("skillName", "HTML/CSS Basics");
  record157.set("category", "Languages");
  record157.set("difficulty", "Beginner");
  record157.set("description", "Communicating with engineers via code.");
  record157.set("relatedCareers", ["ui-ux-designer-technical"]);
  try { app.save(record157); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record158 = new Record(collection);
  record158.set("skillName", "Technical Documentation");
  record158.set("category", "Concepts");
  record158.set("difficulty", "Intermediate");
  record158.set("description", "API docs, user guides, tutorials.");
  record158.set("relatedCareers", ["technical-writer"]);
  try { app.save(record158); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record159 = new Record(collection);
  record159.set("skillName", "Markdown / AsciiDoc");
  record159.set("category", "Tools");
  record159.set("difficulty", "Beginner");
  record159.set("description", "Documentation markup languages.");
  record159.set("relatedCareers", ["technical-writer"]);
  try { app.save(record159); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record160 = new Record(collection);
  record160.set("skillName", "Docs-as-Code");
  record160.set("category", "Concepts");
  record160.set("difficulty", "Intermediate");
  record160.set("description", "Git-based documentation workflows.");
  record160.set("relatedCareers", ["technical-writer"]);
  try { app.save(record160); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record161 = new Record(collection);
  record161.set("skillName", "Information Architecture");
  record161.set("category", "Design");
  record161.set("difficulty", "Intermediate");
  record161.set("description", "Structuring technical content.");
  record161.set("relatedCareers", ["technical-writer"]);
  try { app.save(record161); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record162 = new Record(collection);
  record162.set("skillName", "API Documentation (OpenAPI/Swagger)");
  record162.set("category", "Tools");
  record162.set("difficulty", "Intermediate");
  record162.set("description", "Developer-facing API reference docs.");
  record162.set("relatedCareers", ["technical-writer"]);
  try { app.save(record162); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record163 = new Record(collection);
  record163.set("skillName", "SQL");
  record163.set("category", "Databases");
  record163.set("difficulty", "Intermediate");
  record163.set("description", "Querying and analyzing relational data.");
  record163.set("relatedCareers", ["data-analyst"]);
  try { app.save(record163); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record164 = new Record(collection);
  record164.set("skillName", "Python / R");
  record164.set("category", "Languages");
  record164.set("difficulty", "Intermediate");
  record164.set("description", "Data analysis scripting.");
  record164.set("relatedCareers", ["data-analyst"]);
  try { app.save(record164); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record165 = new Record(collection);
  record165.set("skillName", "Excel / Google Sheets");
  record165.set("category", "Tools");
  record165.set("difficulty", "Beginner");
  record165.set("description", "Spreadsheet data analysis.");
  record165.set("relatedCareers", ["data-analyst"]);
  try { app.save(record165); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record166 = new Record(collection);
  record166.set("skillName", "Tableau / Power BI");
  record166.set("category", "Tools");
  record166.set("difficulty", "Intermediate");
  record166.set("description", "Business intelligence dashboards.");
  record166.set("relatedCareers", ["data-analyst"]);
  try { app.save(record166); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record167 = new Record(collection);
  record167.set("skillName", "Statistical Analysis");
  record167.set("category", "Concepts");
  record167.set("difficulty", "Intermediate");
  record167.set("description", "Descriptive and inferential statistics.");
  record167.set("relatedCareers", ["data-analyst"]);
  try { app.save(record167); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record168 = new Record(collection);
  record168.set("skillName", "Data Storytelling");
  record168.set("category", "Concepts");
  record168.set("difficulty", "Intermediate");
  record168.set("description", "Presenting insights to non-technical audiences.");
  record168.set("relatedCareers", ["data-analyst"]);
  try { app.save(record168); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record169 = new Record(collection);
  record169.set("skillName", "SIEM Platforms");
  record169.set("category", "Tools");
  record169.set("difficulty", "Intermediate");
  record169.set("description", "Splunk, Microsoft Sentinel, QRadar.");
  record169.set("relatedCareers", ["it-security-analyst"]);
  try { app.save(record169); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record170 = new Record(collection);
  record170.set("skillName", "Log Analysis");
  record170.set("category", "Security");
  record170.set("difficulty", "Intermediate");
  record170.set("description", "Parsing and correlating security events.");
  record170.set("relatedCareers", ["it-security-analyst"]);
  try { app.save(record170); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record171 = new Record(collection);
  record171.set("skillName", "Incident Response");
  record171.set("category", "Concepts");
  record171.set("difficulty", "Advanced");
  record171.set("description", "NIST incident response lifecycle.");
  record171.set("relatedCareers", ["it-security-analyst"]);
  try { app.save(record171); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record172 = new Record(collection);
  record172.set("skillName", "Vulnerability Management");
  record172.set("category", "Security");
  record172.set("difficulty", "Intermediate");
  record172.set("description", "Nessus, Qualys, patch management.");
  record172.set("relatedCareers", ["it-security-analyst"]);
  try { app.save(record172); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record173 = new Record(collection);
  record173.set("skillName", "Threat Intelligence");
  record173.set("category", "Security");
  record173.set("difficulty", "Advanced");
  record173.set("description", "CTI frameworks and IOC analysis.");
  record173.set("relatedCareers", ["it-security-analyst"]);
  try { app.save(record173); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record174 = new Record(collection);
  record174.set("skillName", "Networking Fundamentals");
  record174.set("category", "Concepts");
  record174.set("difficulty", "Intermediate");
  record174.set("description", "TCP/IP, DNS, firewalls for security.");
  record174.set("relatedCareers", ["it-security-analyst"]);
  try { app.save(record174); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record175 = new Record(collection);
  record175.set("skillName", "Apex");
  record175.set("category", "Languages");
  record175.set("difficulty", "Intermediate");
  record175.set("description", "Salesforce proprietary programming language.");
  record175.set("relatedCareers", ["salesforce-developer"]);
  try { app.save(record175); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record176 = new Record(collection);
  record176.set("skillName", "Lightning Web Components (LWC)");
  record176.set("category", "Frameworks");
  record176.set("difficulty", "Intermediate");
  record176.set("description", "Modern Salesforce UI framework.");
  record176.set("relatedCareers", ["salesforce-developer"]);
  try { app.save(record176); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record177 = new Record(collection);
  record177.set("skillName", "Salesforce Admin");
  record177.set("category", "Tools");
  record177.set("difficulty", "Beginner");
  record177.set("description", "Flows, profiles, objects, and permissions.");
  record177.set("relatedCareers", ["salesforce-developer"]);
  try { app.save(record177); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record178 = new Record(collection);
  record178.set("skillName", "SOQL / SOSL");
  record178.set("category", "Databases");
  record178.set("difficulty", "Intermediate");
  record178.set("description", "Salesforce query languages.");
  record178.set("relatedCareers", ["salesforce-developer"]);
  try { app.save(record178); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record179 = new Record(collection);
  record179.set("skillName", "Salesforce Integration (REST/Bulk API)");
  record179.set("category", "Concepts");
  record179.set("difficulty", "Advanced");
  record179.set("description", "Connecting Salesforce to external systems.");
  record179.set("relatedCareers", ["salesforce-developer"]);
  try { app.save(record179); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record180 = new Record(collection);
  record180.set("skillName", "Salesforce DevOps (SFDX)");
  record180.set("category", "DevOps");
  record180.set("difficulty", "Intermediate");
  record180.set("description", "Source-driven Salesforce development.");
  record180.set("relatedCareers", ["salesforce-developer"]);
  try { app.save(record180); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record181 = new Record(collection);
  record181.set("skillName", "Python");
  record181.set("category", "Languages");
  record181.set("difficulty", "Intermediate");
  record181.set("description", "CV programming language.");
  record181.set("relatedCareers", ["computer-vision-engineer"]);
  try { app.save(record181); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record182 = new Record(collection);
  record182.set("skillName", "OpenCV");
  record182.set("category", "Frameworks");
  record182.set("difficulty", "Intermediate");
  record182.set("description", "Open-source computer vision library.");
  record182.set("relatedCareers", ["computer-vision-engineer"]);
  try { app.save(record182); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record183 = new Record(collection);
  record183.set("skillName", "Deep Learning (CNN/ViT)");
  record183.set("category", "AI-ML");
  record183.set("difficulty", "Advanced");
  record183.set("description", "Neural architectures for image tasks.");
  record183.set("relatedCareers", ["computer-vision-engineer"]);
  try { app.save(record183); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record184 = new Record(collection);
  record184.set("skillName", "Object Detection (YOLO/DETR)");
  record184.set("category", "AI-ML");
  record184.set("difficulty", "Advanced");
  record184.set("description", "Real-time object detection models.");
  record184.set("relatedCareers", ["computer-vision-engineer"]);
  try { app.save(record184); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record185 = new Record(collection);
  record185.set("skillName", "Image Segmentation");
  record185.set("category", "AI-ML");
  record185.set("difficulty", "Advanced");
  record185.set("description", "Semantic and instance segmentation.");
  record185.set("relatedCareers", ["computer-vision-engineer"]);
  try { app.save(record185); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record186 = new Record(collection);
  record186.set("skillName", "CUDA / GPU Programming");
  record186.set("category", "Tools");
  record186.set("difficulty", "Advanced");
  record186.set("description", "Accelerating CV workloads on GPU.");
  record186.set("relatedCareers", ["computer-vision-engineer"]);
  try { app.save(record186); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record187 = new Record(collection);
  record187.set("skillName", "Python");
  record187.set("category", "Languages");
  record187.set("difficulty", "Intermediate");
  record187.set("description", "Primary NLP development language.");
  record187.set("relatedCareers", ["natural-language-processing-nlp-engineer"]);
  try { app.save(record187); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record188 = new Record(collection);
  record188.set("skillName", "Transformers / BERT / GPT");
  record188.set("category", "AI-ML");
  record188.set("difficulty", "Advanced");
  record188.set("description", "Transformer-based language models.");
  record188.set("relatedCareers", ["natural-language-processing-nlp-engineer"]);
  try { app.save(record188); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record189 = new Record(collection);
  record189.set("skillName", "spaCy / NLTK");
  record189.set("category", "Frameworks");
  record189.set("difficulty", "Intermediate");
  record189.set("description", "NLP libraries for text processing.");
  record189.set("relatedCareers", ["natural-language-processing-nlp-engineer"]);
  try { app.save(record189); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record190 = new Record(collection);
  record190.set("skillName", "Text Classification & NER");
  record190.set("category", "AI-ML");
  record190.set("difficulty", "Intermediate");
  record190.set("description", "Sequence labeling and classification.");
  record190.set("relatedCareers", ["natural-language-processing-nlp-engineer"]);
  try { app.save(record190); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record191 = new Record(collection);
  record191.set("skillName", "Speech Recognition / TTS");
  record191.set("category", "AI-ML");
  record191.set("difficulty", "Advanced");
  record191.set("description", "Audio-to-text and text-to-speech.");
  record191.set("relatedCareers", ["natural-language-processing-nlp-engineer"]);
  try { app.save(record191); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record192 = new Record(collection);
  record192.set("skillName", "Fine-tuning LLMs");
  record192.set("category", "AI-ML");
  record192.set("difficulty", "Advanced");
  record192.set("description", "Domain adaptation of language models.");
  record192.set("relatedCareers", ["natural-language-processing-nlp-engineer"]);
  try { app.save(record192); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record193 = new Record(collection);
  record193.set("skillName", "Kali Linux");
  record193.set("category", "Tools");
  record193.set("difficulty", "Intermediate");
  record193.set("description", "Penetration testing OS and toolkit.");
  record193.set("relatedCareers", ["penetration-tester-ethical-hacker"]);
  try { app.save(record193); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record194 = new Record(collection);
  record194.set("skillName", "Metasploit");
  record194.set("category", "Tools");
  record194.set("difficulty", "Advanced");
  record194.set("description", "Exploitation framework.");
  record194.set("relatedCareers", ["penetration-tester-ethical-hacker"]);
  try { app.save(record194); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record195 = new Record(collection);
  record195.set("skillName", "Burp Suite");
  record195.set("category", "Tools");
  record195.set("difficulty", "Intermediate");
  record195.set("description", "Web application security testing.");
  record195.set("relatedCareers", ["penetration-tester-ethical-hacker"]);
  try { app.save(record195); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record196 = new Record(collection);
  record196.set("skillName", "OWASP Methodology");
  record196.set("category", "Security");
  record196.set("difficulty", "Intermediate");
  record196.set("description", "Web security testing standards.");
  record196.set("relatedCareers", ["penetration-tester-ethical-hacker"]);
  try { app.save(record196); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record197 = new Record(collection);
  record197.set("skillName", "Python/Bash Scripting");
  record197.set("category", "Languages");
  record197.set("difficulty", "Intermediate");
  record197.set("description", "Exploit and automation scripting.");
  record197.set("relatedCareers", ["penetration-tester-ethical-hacker"]);
  try { app.save(record197); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record198 = new Record(collection);
  record198.set("skillName", "Network Scanning (Nmap/Nessus)");
  record198.set("category", "Security");
  record198.set("difficulty", "Intermediate");
  record198.set("description", "Vulnerability scanning and discovery.");
  record198.set("relatedCareers", ["penetration-tester-ethical-hacker"]);
  try { app.save(record198); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record199 = new Record(collection);
  record199.set("skillName", "Program Management");
  record199.set("category", "Concepts");
  record199.set("difficulty", "Advanced");
  record199.set("description", "Managing complex, cross-team technical programs.");
  record199.set("relatedCareers", ["technical-program-manager-tpm"]);
  try { app.save(record199); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record200 = new Record(collection);
  record200.set("skillName", "Agile / Scrum / SAFe");
  record200.set("category", "Concepts");
  record200.set("difficulty", "Intermediate");
  record200.set("description", "Scaled agile delivery frameworks.");
  record200.set("relatedCareers", ["technical-program-manager-tpm"]);
  try { app.save(record200); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record201 = new Record(collection);
  record201.set("skillName", "Risk Management");
  record201.set("category", "Concepts");
  record201.set("difficulty", "Advanced");
  record201.set("description", "Identifying and mitigating program risks.");
  record201.set("relatedCareers", ["technical-program-manager-tpm"]);
  try { app.save(record201); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record202 = new Record(collection);
  record202.set("skillName", "Technical Acumen");
  record202.set("category", "Concepts");
  record202.set("difficulty", "Intermediate");
  record202.set("description", "Understanding engineering trade-offs.");
  record202.set("relatedCareers", ["technical-program-manager-tpm"]);
  try { app.save(record202); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record203 = new Record(collection);
  record203.set("skillName", "Stakeholder Communication");
  record203.set("category", "Concepts");
  record203.set("difficulty", "Advanced");
  record203.set("description", "Executive reporting and alignment.");
  record203.set("relatedCareers", ["technical-program-manager-tpm"]);
  try { app.save(record203); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record204 = new Record(collection);
  record204.set("skillName", "JIRA / Confluence");
  record204.set("category", "Tools");
  record204.set("difficulty", "Beginner");
  record204.set("description", "Program tracking and documentation.");
  record204.set("relatedCareers", ["technical-program-manager-tpm"]);
  try { app.save(record204); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record205 = new Record(collection);
  record205.set("skillName", "ArcGIS / QGIS");
  record205.set("category", "Tools");
  record205.set("difficulty", "Intermediate");
  record205.set("description", "GIS platforms for spatial analysis.");
  record205.set("relatedCareers", ["gis-geospatial-engineer"]);
  try { app.save(record205); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record206 = new Record(collection);
  record206.set("skillName", "Python (GeoPandas/Shapely)");
  record206.set("category", "Languages");
  record206.set("difficulty", "Intermediate");
  record206.set("description", "Geospatial data processing.");
  record206.set("relatedCareers", ["gis-geospatial-engineer"]);
  try { app.save(record206); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record207 = new Record(collection);
  record207.set("skillName", "PostGIS / Spatial SQL");
  record207.set("category", "Databases");
  record207.set("difficulty", "Intermediate");
  record207.set("description", "Spatial database queries.");
  record207.set("relatedCareers", ["gis-geospatial-engineer"]);
  try { app.save(record207); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record208 = new Record(collection);
  record208.set("skillName", "Remote Sensing");
  record208.set("category", "Concepts");
  record208.set("difficulty", "Advanced");
  record208.set("description", "Satellite imagery and LiDAR analysis.");
  record208.set("relatedCareers", ["gis-geospatial-engineer"]);
  try { app.save(record208); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record209 = new Record(collection);
  record209.set("skillName", "MapboxGL / Leaflet");
  record209.set("category", "Frameworks");
  record209.set("difficulty", "Intermediate");
  record209.set("description", "Web map visualization.");
  record209.set("relatedCareers", ["gis-geospatial-engineer"]);
  try { app.save(record209); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record210 = new Record(collection);
  record210.set("skillName", "Coordinate Systems & Projections");
  record210.set("category", "Concepts");
  record210.set("difficulty", "Intermediate");
  record210.set("description", "CRS, reprojection, spatial transforms.");
  record210.set("relatedCareers", ["gis-geospatial-engineer"]);
  try { app.save(record210); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record211 = new Record(collection);
  record211.set("skillName", "Zero Trust Architecture");
  record211.set("category", "Security");
  record211.set("difficulty", "Advanced");
  record211.set("description", "Never trust, always verify security model.");
  record211.set("relatedCareers", ["security-architect"]);
  try { app.save(record211); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record212 = new Record(collection);
  record212.set("skillName", "Cryptography");
  record212.set("category", "Security");
  record212.set("difficulty", "Advanced");
  record212.set("description", "Encryption, PKI, key management.");
  record212.set("relatedCareers", ["security-architect"]);
  try { app.save(record212); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record213 = new Record(collection);
  record213.set("skillName", "Cloud Security");
  record213.set("category", "Cloud Platforms");
  record213.set("difficulty", "Advanced");
  record213.set("description", "IAM, CSPM, cloud-native security.");
  record213.set("relatedCareers", ["security-architect"]);
  try { app.save(record213); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record214 = new Record(collection);
  record214.set("skillName", "Threat Modeling");
  record214.set("category", "Security");
  record214.set("difficulty", "Advanced");
  record214.set("description", "STRIDE, PASTA methodologies.");
  record214.set("relatedCareers", ["security-architect"]);
  try { app.save(record214); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record215 = new Record(collection);
  record215.set("skillName", "Security Frameworks (NIST/ISO 27001)");
  record215.set("category", "Concepts");
  record215.set("difficulty", "Intermediate");
  record215.set("description", "Compliance and governance standards.");
  record215.set("relatedCareers", ["security-architect"]);
  try { app.save(record215); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record216 = new Record(collection);
  record216.set("skillName", "Python/Scripting");
  record216.set("category", "Languages");
  record216.set("difficulty", "Intermediate");
  record216.set("description", "Security automation.");
  record216.set("relatedCareers", ["security-architect"]);
  try { app.save(record216); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record217 = new Record(collection);
  record217.set("skillName", "Linux Administration");
  record217.set("category", "Tools");
  record217.set("difficulty", "Intermediate");
  record217.set("description", "Server management and scripting.");
  record217.set("relatedCareers", ["infrastructure-engineer"]);
  try { app.save(record217); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record218 = new Record(collection);
  record218.set("skillName", "Terraform / Ansible");
  record218.set("category", "DevOps");
  record218.set("difficulty", "Intermediate");
  record218.set("description", "IaC and configuration management.");
  record218.set("relatedCareers", ["infrastructure-engineer"]);
  try { app.save(record218); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record219 = new Record(collection);
  record219.set("skillName", "Networking");
  record219.set("category", "Concepts");
  record219.set("difficulty", "Intermediate");
  record219.set("description", "TCP/IP, DNS, load balancing.");
  record219.set("relatedCareers", ["infrastructure-engineer"]);
  try { app.save(record219); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record220 = new Record(collection);
  record220.set("skillName", "AWS / Azure / GCP");
  record220.set("category", "Cloud Platforms");
  record220.set("difficulty", "Advanced");
  record220.set("description", "Cloud infrastructure management.");
  record220.set("relatedCareers", ["infrastructure-engineer"]);
  try { app.save(record220); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record221 = new Record(collection);
  record221.set("skillName", "Monitoring (Prometheus/Datadog)");
  record221.set("category", "Tools");
  record221.set("difficulty", "Intermediate");
  record221.set("description", "Infrastructure observability.");
  record221.set("relatedCareers", ["infrastructure-engineer"]);
  try { app.save(record221); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record222 = new Record(collection);
  record222.set("skillName", "Storage Systems");
  record222.set("category", "Concepts");
  record222.set("difficulty", "Intermediate");
  record222.set("description", "Object, block, and file storage.");
  record222.set("relatedCareers", ["infrastructure-engineer"]);
  try { app.save(record222); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record223 = new Record(collection);
  record223.set("skillName", "CI/CD Pipeline Design");
  record223.set("category", "DevOps");
  record223.set("difficulty", "Advanced");
  record223.set("description", "Enterprise pipeline architecture.");
  record223.set("relatedCareers", ["devops-architect"]);
  try { app.save(record223); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record224 = new Record(collection);
  record224.set("skillName", "Kubernetes / GitOps");
  record224.set("category", "Tools");
  record224.set("difficulty", "Advanced");
  record224.set("description", "Container orchestration and GitOps (ArgoCD/Flux).");
  record224.set("relatedCareers", ["devops-architect"]);
  try { app.save(record224); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record225 = new Record(collection);
  record225.set("skillName", "Terraform");
  record225.set("category", "Tools");
  record225.set("difficulty", "Advanced");
  record225.set("description", "Infrastructure as code at scale.");
  record225.set("relatedCareers", ["devops-architect"]);
  try { app.save(record225); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record226 = new Record(collection);
  record226.set("skillName", "Platform Engineering (IDP)");
  record226.set("category", "Concepts");
  record226.set("difficulty", "Advanced");
  record226.set("description", "Internal developer platforms.");
  record226.set("relatedCareers", ["devops-architect"]);
  try { app.save(record226); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record227 = new Record(collection);
  record227.set("skillName", "Observability (OTel)");
  record227.set("category", "Tools");
  record227.set("difficulty", "Advanced");
  record227.set("description", "OpenTelemetry, metrics, logs, traces.");
  record227.set("relatedCareers", ["devops-architect"]);
  try { app.save(record227); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record228 = new Record(collection);
  record228.set("skillName", "DevSecOps");
  record228.set("category", "Security");
  record228.set("difficulty", "Advanced");
  record228.set("description", "Shifting security left in pipelines.");
  record228.set("relatedCareers", ["devops-architect"]);
  try { app.save(record228); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record229 = new Record(collection);
  record229.set("skillName", "MLflow / Kubeflow");
  record229.set("category", "Tools");
  record229.set("difficulty", "Advanced");
  record229.set("description", "ML lifecycle management platforms.");
  record229.set("relatedCareers", ["mlops-engineer"]);
  try { app.save(record229); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record230 = new Record(collection);
  record230.set("skillName", "Python");
  record230.set("category", "Languages");
  record230.set("difficulty", "Intermediate");
  record230.set("description", "ML and automation scripting.");
  record230.set("relatedCareers", ["mlops-engineer"]);
  try { app.save(record230); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record231 = new Record(collection);
  record231.set("skillName", "Docker / Kubernetes");
  record231.set("category", "DevOps");
  record231.set("difficulty", "Advanced");
  record231.set("description", "Containerized ML model serving.");
  record231.set("relatedCareers", ["mlops-engineer"]);
  try { app.save(record231); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record232 = new Record(collection);
  record232.set("skillName", "Feature Stores (Feast/Tecton)");
  record232.set("category", "Concepts");
  record232.set("difficulty", "Advanced");
  record232.set("description", "Feature engineering and management.");
  record232.set("relatedCareers", ["mlops-engineer"]);
  try { app.save(record232); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record233 = new Record(collection);
  record233.set("skillName", "Model Monitoring");
  record233.set("category", "AI-ML");
  record233.set("difficulty", "Advanced");
  record233.set("description", "Data drift, model degradation tracking.");
  record233.set("relatedCareers", ["mlops-engineer"]);
  try { app.save(record233); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record234 = new Record(collection);
  record234.set("skillName", "Cloud ML Services");
  record234.set("category", "Cloud Platforms");
  record234.set("difficulty", "Advanced");
  record234.set("description", "SageMaker, Vertex AI, AzureML.");
  record234.set("relatedCareers", ["mlops-engineer"]);
  try { app.save(record234); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record235 = new Record(collection);
  record235.set("skillName", "Distributed Systems");
  record235.set("category", "Concepts");
  record235.set("difficulty", "Advanced");
  record235.set("description", "CAP theorem, consensus, event sourcing.");
  record235.set("relatedCareers", ["backend-architect"]);
  try { app.save(record235); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record236 = new Record(collection);
  record236.set("skillName", "API Gateway Design");
  record236.set("category", "Concepts");
  record236.set("difficulty", "Advanced");
  record236.set("description", "Rate limiting, auth, routing patterns.");
  record236.set("relatedCareers", ["backend-architect"]);
  try { app.save(record236); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record237 = new Record(collection);
  record237.set("skillName", "Database Architecture");
  record237.set("category", "Databases");
  record237.set("difficulty", "Advanced");
  record237.set("description", "Sharding, replication, CQRS.");
  record237.set("relatedCareers", ["backend-architect"]);
  try { app.save(record237); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record238 = new Record(collection);
  record238.set("skillName", "Message Queues (Kafka/RabbitMQ)");
  record238.set("category", "Tools");
  record238.set("difficulty", "Advanced");
  record238.set("description", "Event-driven architecture.");
  record238.set("relatedCareers", ["backend-architect"]);
  try { app.save(record238); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record239 = new Record(collection);
  record239.set("skillName", "Service Mesh (Istio/Linkerd)");
  record239.set("category", "Tools");
  record239.set("difficulty", "Advanced");
  record239.set("description", "Microservice communication layer.");
  record239.set("relatedCareers", ["backend-architect"]);
  try { app.save(record239); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record240 = new Record(collection);
  record240.set("skillName", "Performance Optimization");
  record240.set("category", "Concepts");
  record240.set("difficulty", "Advanced");
  record240.set("description", "Caching, profiling, connection pooling.");
  record240.set("relatedCareers", ["backend-architect"]);
  try { app.save(record240); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record241 = new Record(collection);
  record241.set("skillName", "TOGAF / Zachman");
  record241.set("category", "Concepts");
  record241.set("difficulty", "Advanced");
  record241.set("description", "Enterprise architecture frameworks.");
  record241.set("relatedCareers", ["enterprise-architect"]);
  try { app.save(record241); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record242 = new Record(collection);
  record242.set("skillName", "Digital Transformation");
  record242.set("category", "Concepts");
  record242.set("difficulty", "Advanced");
  record242.set("description", "Legacy modernization strategies.");
  record242.set("relatedCareers", ["enterprise-architect"]);
  try { app.save(record242); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record243 = new Record(collection);
  record243.set("skillName", "Cloud Strategy");
  record243.set("category", "Cloud Platforms");
  record243.set("difficulty", "Advanced");
  record243.set("description", "Multi-cloud governance and migration.");
  record243.set("relatedCareers", ["enterprise-architect"]);
  try { app.save(record243); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record244 = new Record(collection);
  record244.set("skillName", "Business/IT Alignment");
  record244.set("category", "Concepts");
  record244.set("difficulty", "Advanced");
  record244.set("description", "Aligning tech strategy with business goals.");
  record244.set("relatedCareers", ["enterprise-architect"]);
  try { app.save(record244); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record245 = new Record(collection);
  record245.set("skillName", "Security Architecture");
  record245.set("category", "Security");
  record245.set("difficulty", "Advanced");
  record245.set("description", "Zero trust and enterprise security.");
  record245.set("relatedCareers", ["enterprise-architect"]);
  try { app.save(record245); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record246 = new Record(collection);
  record246.set("skillName", "Architecture Review Boards");
  record246.set("category", "Concepts");
  record246.set("difficulty", "Advanced");
  record246.set("description", "Governing architectural decisions at scale.");
  record246.set("relatedCareers", ["enterprise-architect"]);
  try { app.save(record246); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record247 = new Record(collection);
  record247.set("skillName", "Technical Pre-Sales");
  record247.set("category", "Concepts");
  record247.set("difficulty", "Intermediate");
  record247.set("description", "Demos, POCs, and solution proposals.");
  record247.set("relatedCareers", ["solutions-engineer"]);
  try { app.save(record247); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record248 = new Record(collection);
  record248.set("skillName", "API Integration");
  record248.set("category", "Concepts");
  record248.set("difficulty", "Intermediate");
  record248.set("description", "Connecting enterprise systems via APIs.");
  record248.set("relatedCareers", ["solutions-engineer"]);
  try { app.save(record248); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record249 = new Record(collection);
  record249.set("skillName", "Cloud Platforms");
  record249.set("category", "Cloud Platforms");
  record249.set("difficulty", "Intermediate");
  record249.set("description", "AWS/Azure/GCP solution design.");
  record249.set("relatedCareers", ["solutions-engineer"]);
  try { app.save(record249); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record250 = new Record(collection);
  record250.set("skillName", "Customer Success");
  record250.set("category", "Concepts");
  record250.set("difficulty", "Intermediate");
  record250.set("description", "Technical account management.");
  record250.set("relatedCareers", ["solutions-engineer"]);
  try { app.save(record250); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record251 = new Record(collection);
  record251.set("skillName", "Python / Bash Scripting");
  record251.set("category", "Languages");
  record251.set("difficulty", "Intermediate");
  record251.set("description", "Automation and demo scripting.");
  record251.set("relatedCareers", ["solutions-engineer"]);
  try { app.save(record251); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record252 = new Record(collection);
  record252.set("skillName", "REST / GraphQL APIs");
  record252.set("category", "Concepts");
  record252.set("difficulty", "Intermediate");
  record252.set("description", "API design and consumption patterns.");
  record252.set("relatedCareers", ["integration-engineer"]);
  try { app.save(record252); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record253 = new Record(collection);
  record253.set("skillName", "Middleware (MuleSoft/Boomi)");
  record253.set("category", "Tools");
  record253.set("difficulty", "Advanced");
  record253.set("description", "Enterprise integration platforms.");
  record253.set("relatedCareers", ["integration-engineer"]);
  try { app.save(record253); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record254 = new Record(collection);
  record254.set("skillName", "ETL Pipelines");
  record254.set("category", "Concepts");
  record254.set("difficulty", "Intermediate");
  record254.set("description", "Data extraction, transformation, loading.");
  record254.set("relatedCareers", ["integration-engineer"]);
  try { app.save(record254); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record255 = new Record(collection);
  record255.set("skillName", "Message Brokers (Kafka/RabbitMQ)");
  record255.set("category", "Tools");
  record255.set("difficulty", "Intermediate");
  record255.set("description", "Async messaging between systems.");
  record255.set("relatedCareers", ["integration-engineer"]);
  try { app.save(record255); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record256 = new Record(collection);
  record256.set("skillName", "Event-Driven Architecture");
  record256.set("category", "Concepts");
  record256.set("difficulty", "Advanced");
  record256.set("description", "Webhooks, SSE, pub/sub patterns.");
  record256.set("relatedCareers", ["integration-engineer"]);
  try { app.save(record256); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record257 = new Record(collection);
  record257.set("skillName", "OAuth2 / API Security");
  record257.set("category", "Security");
  record257.set("difficulty", "Intermediate");
  record257.set("description", "Securing integration endpoints.");
  record257.set("relatedCareers", ["integration-engineer"]);
  try { app.save(record257); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record258 = new Record(collection);
  record258.set("skillName", "Load Testing (JMeter/k6/Locust)");
  record258.set("category", "Testing");
  record258.set("difficulty", "Intermediate");
  record258.set("description", "Performance and load testing tools.");
  record258.set("relatedCareers", ["performance-engineer"]);
  try { app.save(record258); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record259 = new Record(collection);
  record259.set("skillName", "APM Tools (Datadog/New Relic)");
  record259.set("category", "Tools");
  record259.set("difficulty", "Intermediate");
  record259.set("description", "Application performance monitoring.");
  record259.set("relatedCareers", ["performance-engineer"]);
  try { app.save(record259); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record260 = new Record(collection);
  record260.set("skillName", "Profiling & Tracing");
  record260.set("category", "Tools");
  record260.set("difficulty", "Advanced");
  record260.set("description", "CPU/memory profiling, distributed tracing.");
  record260.set("relatedCareers", ["performance-engineer"]);
  try { app.save(record260); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record261 = new Record(collection);
  record261.set("skillName", "Database Optimization");
  record261.set("category", "Databases");
  record261.set("difficulty", "Advanced");
  record261.set("description", "Query tuning and index design.");
  record261.set("relatedCareers", ["performance-engineer"]);
  try { app.save(record261); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record262 = new Record(collection);
  record262.set("skillName", "Caching Strategies");
  record262.set("category", "Concepts");
  record262.set("difficulty", "Intermediate");
  record262.set("description", "Redis, CDN, in-memory caching.");
  record262.set("relatedCareers", ["performance-engineer"]);
  try { app.save(record262); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record263 = new Record(collection);
  record263.set("skillName", "Concurrency & Threading");
  record263.set("category", "Concepts");
  record263.set("difficulty", "Advanced");
  record263.set("description", "Thread pools, async, lock contention.");
  record263.set("relatedCareers", ["performance-engineer"]);
  try { app.save(record263); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record264 = new Record(collection);
  record264.set("skillName", "CI/CD Pipelines");
  record264.set("category", "DevOps");
  record264.set("difficulty", "Intermediate");
  record264.set("description", "Jenkins, GitHub Actions, GitLab CI.");
  record264.set("relatedCareers", ["release-engineer"]);
  try { app.save(record264); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record265 = new Record(collection);
  record265.set("skillName", "Release Management");
  record265.set("category", "Concepts");
  record265.set("difficulty", "Intermediate");
  record265.set("description", "Coordinating cross-team releases.");
  record265.set("relatedCareers", ["release-engineer"]);
  try { app.save(record265); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record266 = new Record(collection);
  record266.set("skillName", "Feature Flags (LaunchDarkly)");
  record266.set("category", "Tools");
  record266.set("difficulty", "Intermediate");
  record266.set("description", "Progressive feature rollout.");
  record266.set("relatedCareers", ["release-engineer"]);
  try { app.save(record266); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record267 = new Record(collection);
  record267.set("skillName", "Deployment Strategies");
  record267.set("category", "Concepts");
  record267.set("difficulty", "Advanced");
  record267.set("description", "Blue-green, canary, rolling deployments.");
  record267.set("relatedCareers", ["release-engineer"]);
  try { app.save(record267); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record268 = new Record(collection);
  record268.set("skillName", "Rollback Procedures");
  record268.set("category", "Concepts");
  record268.set("difficulty", "Intermediate");
  record268.set("description", "Automated rollback and hotfix processes.");
  record268.set("relatedCareers", ["release-engineer"]);
  try { app.save(record268); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record269 = new Record(collection);
  record269.set("skillName", "Semantic Versioning");
  record269.set("category", "Concepts");
  record269.set("difficulty", "Beginner");
  record269.set("description", "Version management and changelogs.");
  record269.set("relatedCareers", ["release-engineer"]);
  try { app.save(record269); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record270 = new Record(collection);
  record270.set("skillName", "SIEM Platforms (Splunk/Sentinel)");
  record270.set("category", "Tools");
  record270.set("difficulty", "Intermediate");
  record270.set("description", "Security information and event management.");
  record270.set("relatedCareers", ["siem-analyst"]);
  try { app.save(record270); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record271 = new Record(collection);
  record271.set("skillName", "Log Analysis");
  record271.set("category", "Security");
  record271.set("difficulty", "Intermediate");
  record271.set("description", "Parsing and correlating security events.");
  record271.set("relatedCareers", ["siem-analyst"]);
  try { app.save(record271); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record272 = new Record(collection);
  record272.set("skillName", "Threat Hunting");
  record272.set("category", "Security");
  record272.set("difficulty", "Advanced");
  record272.set("description", "Proactive threat detection techniques.");
  record272.set("relatedCareers", ["siem-analyst"]);
  try { app.save(record272); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record273 = new Record(collection);
  record273.set("skillName", "Incident Response");
  record273.set("category", "Concepts");
  record273.set("difficulty", "Advanced");
  record273.set("description", "NIST incident response lifecycle.");
  record273.set("relatedCareers", ["siem-analyst"]);
  try { app.save(record273); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record274 = new Record(collection);
  record274.set("skillName", "MITRE ATT&CK Framework");
  record274.set("category", "Security");
  record274.set("difficulty", "Advanced");
  record274.set("description", "Adversary tactics and techniques.");
  record274.set("relatedCareers", ["siem-analyst"]);
  try { app.save(record274); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record275 = new Record(collection);
  record275.set("skillName", "KQL / SPL Query Languages");
  record275.set("category", "Tools");
  record275.set("difficulty", "Intermediate");
  record275.set("description", "SIEM-specific query languages.");
  record275.set("relatedCareers", ["siem-analyst"]);
  try { app.save(record275); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record276 = new Record(collection);
  record276.set("skillName", "Linux / Windows Administration");
  record276.set("category", "Tools");
  record276.set("difficulty", "Intermediate");
  record276.set("description", "OS management, patching, hardening.");
  record276.set("relatedCareers", ["systems-administrator"]);
  try { app.save(record276); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record277 = new Record(collection);
  record277.set("skillName", "Active Directory");
  record277.set("category", "Tools");
  record277.set("difficulty", "Intermediate");
  record277.set("description", "User management and group policies.");
  record277.set("relatedCareers", ["systems-administrator"]);
  try { app.save(record277); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record278 = new Record(collection);
  record278.set("skillName", "PowerShell / Bash");
  record278.set("category", "Languages");
  record278.set("difficulty", "Intermediate");
  record278.set("description", "Systems automation scripting.");
  record278.set("relatedCareers", ["systems-administrator"]);
  try { app.save(record278); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record279 = new Record(collection);
  record279.set("skillName", "Virtualization (VMware/Hyper-V)");
  record279.set("category", "Tools");
  record279.set("difficulty", "Intermediate");
  record279.set("description", "VM management and provisioning.");
  record279.set("relatedCareers", ["systems-administrator"]);
  try { app.save(record279); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record280 = new Record(collection);
  record280.set("skillName", "Backup & Disaster Recovery");
  record280.set("category", "Concepts");
  record280.set("difficulty", "Intermediate");
  record280.set("description", "Backup strategies and DR planning.");
  record280.set("relatedCareers", ["systems-administrator"]);
  try { app.save(record280); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record281 = new Record(collection);
  record281.set("skillName", "Networking Fundamentals");
  record281.set("category", "Concepts");
  record281.set("difficulty", "Intermediate");
  record281.set("description", "DNS, DHCP, VPN, firewall rules.");
  record281.set("relatedCareers", ["systems-administrator"]);
  try { app.save(record281); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record282 = new Record(collection);
  record282.set("skillName", "AWS Security Hub / GuardDuty");
  record282.set("category", "Security");
  record282.set("difficulty", "Advanced");
  record282.set("description", "Cloud-native security monitoring.");
  record282.set("relatedCareers", ["cloud-security-engineer"]);
  try { app.save(record282); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record283 = new Record(collection);
  record283.set("skillName", "IAM & Least Privilege");
  record283.set("category", "Security");
  record283.set("difficulty", "Advanced");
  record283.set("description", "Identity and access governance.");
  record283.set("relatedCareers", ["cloud-security-engineer"]);
  try { app.save(record283); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record284 = new Record(collection);
  record284.set("skillName", "CSPM Tools");
  record284.set("category", "Tools");
  record284.set("difficulty", "Advanced");
  record284.set("description", "Cloud security posture management.");
  record284.set("relatedCareers", ["cloud-security-engineer"]);
  try { app.save(record284); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record285 = new Record(collection);
  record285.set("skillName", "Container Security");
  record285.set("category", "Security");
  record285.set("difficulty", "Advanced");
  record285.set("description", "Image scanning, runtime protection.");
  record285.set("relatedCareers", ["cloud-security-engineer"]);
  try { app.save(record285); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record286 = new Record(collection);
  record286.set("skillName", "DevSecOps");
  record286.set("category", "DevOps");
  record286.set("difficulty", "Advanced");
  record286.set("description", "Integrating security into CI/CD.");
  record286.set("relatedCareers", ["cloud-security-engineer"]);
  try { app.save(record286); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record287 = new Record(collection);
  record287.set("skillName", "Terraform / IaC Security");
  record287.set("category", "Tools");
  record287.set("difficulty", "Advanced");
  record287.set("description", "Secure infrastructure as code scanning.");
  record287.set("relatedCareers", ["cloud-security-engineer"]);
  try { app.save(record287); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record288 = new Record(collection);
  record288.set("skillName", "REST API Design");
  record288.set("category", "Concepts");
  record288.set("difficulty", "Intermediate");
  record288.set("description", "RESTful API principles and patterns.");
  record288.set("relatedCareers", ["api-developer"]);
  try { app.save(record288); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record289 = new Record(collection);
  record289.set("skillName", "OpenAPI / Swagger");
  record289.set("category", "Tools");
  record289.set("difficulty", "Intermediate");
  record289.set("description", "API documentation standards.");
  record289.set("relatedCareers", ["api-developer"]);
  try { app.save(record289); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record290 = new Record(collection);
  record290.set("skillName", "GraphQL");
  record290.set("category", "Frameworks");
  record290.set("difficulty", "Intermediate");
  record290.set("description", "Flexible query-based API layer.");
  record290.set("relatedCareers", ["api-developer"]);
  try { app.save(record290); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record291 = new Record(collection);
  record291.set("skillName", "OAuth2 / JWT");
  record291.set("category", "Security");
  record291.set("difficulty", "Intermediate");
  record291.set("description", "API authentication and authorization.");
  record291.set("relatedCareers", ["api-developer"]);
  try { app.save(record291); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record292 = new Record(collection);
  record292.set("skillName", "API Gateway (Kong/AWS)");
  record292.set("category", "Tools");
  record292.set("difficulty", "Advanced");
  record292.set("description", "Rate limiting, routing, and security.");
  record292.set("relatedCareers", ["api-developer"]);
  try { app.save(record292); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record293 = new Record(collection);
  record293.set("skillName", "Versioning & Backward Compatibility");
  record293.set("category", "Concepts");
  record293.set("difficulty", "Intermediate");
  record293.set("description", "API lifecycle management.");
  record293.set("relatedCareers", ["api-developer"]);
  try { app.save(record293); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record294 = new Record(collection);
  record294.set("skillName", "Technical Pre-Sales");
  record294.set("category", "Concepts");
  record294.set("difficulty", "Intermediate");
  record294.set("description", "POC development and product demos.");
  record294.set("relatedCareers", ["technical-sales-engineer"]);
  try { app.save(record294); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record295 = new Record(collection);
  record295.set("skillName", "CRM Tools (Salesforce/HubSpot)");
  record295.set("category", "Tools");
  record295.set("difficulty", "Beginner");
  record295.set("description", "Pipeline management.");
  record295.set("relatedCareers", ["technical-sales-engineer"]);
  try { app.save(record295); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record296 = new Record(collection);
  record296.set("skillName", "Cloud Architecture");
  record296.set("category", "Cloud Platforms");
  record296.set("difficulty", "Intermediate");
  record296.set("description", "Explaining cloud solutions to clients.");
  record296.set("relatedCareers", ["technical-sales-engineer"]);
  try { app.save(record296); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record297 = new Record(collection);
  record297.set("skillName", "Presentation & Storytelling");
  record297.set("category", "Concepts");
  record297.set("difficulty", "Intermediate");
  record297.set("description", "Technical demo and value storytelling.");
  record297.set("relatedCareers", ["technical-sales-engineer"]);
  try { app.save(record297); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record298 = new Record(collection);
  record298.set("skillName", "Competitive Analysis");
  record298.set("category", "Concepts");
  record298.set("difficulty", "Intermediate");
  record298.set("description", "Positioning against competitor products.");
  record298.set("relatedCareers", ["technical-sales-engineer"]);
  try { app.save(record298); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record299 = new Record(collection);
  record299.set("skillName", "RFP / Proposal Writing");
  record299.set("category", "Concepts");
  record299.set("difficulty", "Intermediate");
  record299.set("description", "Technical responses to procurement requests.");
  record299.set("relatedCareers", ["technical-sales-engineer"]);
  try { app.save(record299); } catch(e) { if (!e.message.includes("unique")) throw e; }

  console.log("Seeded 300 careerSkills for 50 careers with correct slugs.");
}, (app) => {});