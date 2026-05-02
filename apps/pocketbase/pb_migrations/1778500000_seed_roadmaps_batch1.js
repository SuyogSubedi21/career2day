/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerRoadmaps");

  const r0 = new Record(collection);
  r0.set("careerSlug", "machine-learning-engineer");
  r0.set("phase", 1);
  r0.set("phaseTitle", "Mathematics & Statistics Foundation");
  r0.set("duration", "6-8 weeks");
  r0.set("skills", ["Linear Algebra","Calculus","Probability","Statistics"]);
  r0.set("resources", ["Khan Academy Linear Algebra","StatQuest with Josh Starmer","3Blue1Brown Essence of Calculus"]);
  r0.set("projects", []);
  try { app.save(r0); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r1 = new Record(collection);
  r1.set("careerSlug", "machine-learning-engineer");
  r1.set("phase", 2);
  r1.set("phaseTitle", "Python Programming");
  r1.set("duration", "4-6 weeks");
  r1.set("skills", ["Python Basics","NumPy","Pandas","Matplotlib","Seaborn"]);
  r1.set("resources", ["Python for Everybody - Coursera (Audit Free)","Kaggle Python Course","Real Python"]);
  r1.set("projects", []);
  try { app.save(r1); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r2 = new Record(collection);
  r2.set("careerSlug", "machine-learning-engineer");
  r2.set("phase", 3);
  r2.set("phaseTitle", "Machine Learning Fundamentals");
  r2.set("duration", "8-10 weeks");
  r2.set("skills", ["Supervised Learning","Unsupervised Learning","Scikit-learn","Feature Engineering","Model Evaluation"]);
  r2.set("resources", ["Andrew Ng ML Course - Coursera (Audit)","Kaggle ML Course","Google ML Crash Course"]);
  r2.set("projects", []);
  try { app.save(r2); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r3 = new Record(collection);
  r3.set("careerSlug", "machine-learning-engineer");
  r3.set("phase", 4);
  r3.set("phaseTitle", "Deep Learning");
  r3.set("duration", "8-10 weeks");
  r3.set("skills", ["Neural Networks","CNNs","RNNs","TensorFlow","PyTorch","Transformers"]);
  r3.set("resources", ["fast.ai Deep Learning","Deep Learning Specialization - Coursera (Audit)","PyTorch Official Tutorials"]);
  r3.set("projects", []);
  try { app.save(r3); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r4 = new Record(collection);
  r4.set("careerSlug", "machine-learning-engineer");
  r4.set("phase", 5);
  r4.set("phaseTitle", "MLOps & Deployment");
  r4.set("duration", "6-8 weeks");
  r4.set("skills", ["Docker","MLflow","AWS SageMaker","CI/CD for ML","Model Monitoring"]);
  r4.set("resources", ["MLOps Zoomcamp","Made With ML","AWS ML Free Tier"]);
  r4.set("projects", []);
  try { app.save(r4); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r5 = new Record(collection);
  r5.set("careerSlug", "ai-llm-engineer");
  r5.set("phase", 1);
  r5.set("phaseTitle", "Python & ML Basics");
  r5.set("duration", "6 weeks");
  r5.set("skills", ["Python","NumPy","Pandas","Scikit-learn"]);
  r5.set("resources", ["Kaggle Python & ML Courses","fast.ai"]);
  r5.set("projects", []);
  try { app.save(r5); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r6 = new Record(collection);
  r6.set("careerSlug", "ai-llm-engineer");
  r6.set("phase", 2);
  r6.set("phaseTitle", "Deep Learning & NLP");
  r6.set("duration", "8 weeks");
  r6.set("skills", ["PyTorch","HuggingFace Transformers","BERT","GPT","Text Classification"]);
  r6.set("resources", ["HuggingFace Course","fast.ai NLP"]);
  r6.set("projects", []);
  try { app.save(r6); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r7 = new Record(collection);
  r7.set("careerSlug", "ai-llm-engineer");
  r7.set("phase", 3);
  r7.set("phaseTitle", "LLM Fundamentals");
  r7.set("duration", "6 weeks");
  r7.set("skills", ["Transformer Architecture","Prompt Engineering","RAG","LangChain","LlamaIndex"]);
  r7.set("resources", ["LangChain Docs","DeepLearning.AI Short Courses"]);
  r7.set("projects", []);
  try { app.save(r7); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r8 = new Record(collection);
  r8.set("careerSlug", "ai-llm-engineer");
  r8.set("phase", 4);
  r8.set("phaseTitle", "Fine-tuning & Alignment");
  r8.set("duration", "6 weeks");
  r8.set("skills", ["LoRA","QLoRA","RLHF","DPO","Instruction Tuning"]);
  r8.set("resources", ["HuggingFace PEFT Docs","Axolotl GitHub"]);
  r8.set("projects", []);
  try { app.save(r8); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r9 = new Record(collection);
  r9.set("careerSlug", "ai-llm-engineer");
  r9.set("phase", 5);
  r9.set("phaseTitle", "Deployment & Serving");
  r9.set("duration", "4 weeks");
  r9.set("skills", ["vLLM","Ollama","FastAPI","Docker","GPU Optimization"]);
  r9.set("resources", ["vLLM Docs","Ollama"]);
  r9.set("projects", []);
  try { app.save(r9); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r10 = new Record(collection);
  r10.set("careerSlug", "cloud-architect");
  r10.set("phase", 1);
  r10.set("phaseTitle", "Linux & Networking Basics");
  r10.set("duration", "6 weeks");
  r10.set("skills", ["Linux CLI","TCP/IP","DNS","HTTP/S","Firewalls"]);
  r10.set("resources", ["Linux Journey","Professor Messer Networking"]);
  r10.set("projects", []);
  try { app.save(r10); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r11 = new Record(collection);
  r11.set("careerSlug", "cloud-architect");
  r11.set("phase", 2);
  r11.set("phaseTitle", "Cloud Fundamentals (AWS/Azure/GCP)");
  r11.set("duration", "8 weeks");
  r11.set("skills", ["EC2","S3","VPC","IAM","RDS","Lambda"]);
  r11.set("resources", ["AWS Free Tier + Training","Google Cloud Free Courses","Microsoft Learn Azure"]);
  r11.set("projects", []);
  try { app.save(r11); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r12 = new Record(collection);
  r12.set("careerSlug", "cloud-architect");
  r12.set("phase", 3);
  r12.set("phaseTitle", "Infrastructure as Code");
  r12.set("duration", "6 weeks");
  r12.set("skills", ["Terraform","CloudFormation","Ansible","Pulumi"]);
  r12.set("resources", ["Terraform Tutorials","Ansible Documentation"]);
  r12.set("projects", []);
  try { app.save(r12); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r13 = new Record(collection);
  r13.set("careerSlug", "cloud-architect");
  r13.set("phase", 4);
  r13.set("phaseTitle", "Containers & Orchestration");
  r13.set("duration", "6 weeks");
  r13.set("skills", ["Docker","Kubernetes","Helm","EKS","GKE"]);
  r13.set("resources", ["Kubernetes Official Tutorials","Play with Docker"]);
  r13.set("projects", []);
  try { app.save(r13); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r14 = new Record(collection);
  r14.set("careerSlug", "cloud-architect");
  r14.set("phase", 5);
  r14.set("phaseTitle", "Security & Cost Optimization");
  r14.set("duration", "4 weeks");
  r14.set("skills", ["Cloud Security","WAF","Cost Management","Well-Architected Framework"]);
  r14.set("resources", ["AWS Well-Architected","CNCF Security Whitepaper"]);
  r14.set("projects", []);
  try { app.save(r14); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r15 = new Record(collection);
  r15.set("careerSlug", "devops-platform-engineer");
  r15.set("phase", 1);
  r15.set("phaseTitle", "Linux & Shell Scripting");
  r15.set("duration", "4 weeks");
  r15.set("skills", ["Linux","Bash","Shell Scripting","Cron Jobs"]);
  r15.set("resources", ["Linux Journey","Bash Scripting Tutorial"]);
  r15.set("projects", []);
  try { app.save(r15); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r16 = new Record(collection);
  r16.set("careerSlug", "devops-platform-engineer");
  r16.set("phase", 2);
  r16.set("phaseTitle", "Version Control & CI/CD");
  r16.set("duration", "4 weeks");
  r16.set("skills", ["Git","GitHub Actions","Jenkins","GitLab CI"]);
  r16.set("resources", ["GitHub Actions Docs","Learn Git Branching"]);
  r16.set("projects", []);
  try { app.save(r16); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r17 = new Record(collection);
  r17.set("careerSlug", "devops-platform-engineer");
  r17.set("phase", 3);
  r17.set("phaseTitle", "Containers & Kubernetes");
  r17.set("duration", "8 weeks");
  r17.set("skills", ["Docker","Kubernetes","Helm","ArgoCD"]);
  r17.set("resources", ["Kubernetes Tutorials","KodeKloud Free Labs"]);
  r17.set("projects", []);
  try { app.save(r17); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r18 = new Record(collection);
  r18.set("careerSlug", "devops-platform-engineer");
  r18.set("phase", 4);
  r18.set("phaseTitle", "IaC & Cloud");
  r18.set("duration", "6 weeks");
  r18.set("skills", ["Terraform","AWS/GCP/Azure Basics","Ansible"]);
  r18.set("resources", ["Terraform Learn","AWS Free Training"]);
  r18.set("projects", []);
  try { app.save(r18); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r19 = new Record(collection);
  r19.set("careerSlug", "devops-platform-engineer");
  r19.set("phase", 5);
  r19.set("phaseTitle", "Monitoring & Observability");
  r19.set("duration", "4 weeks");
  r19.set("skills", ["Prometheus","Grafana","ELK Stack","Alerting"]);
  r19.set("resources", ["Prometheus Docs","Grafana Tutorials"]);
  r19.set("projects", []);
  try { app.save(r19); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r20 = new Record(collection);
  r20.set("careerSlug", "cybersecurity-engineer");
  r20.set("phase", 1);
  r20.set("phaseTitle", "Networking & OS Fundamentals");
  r20.set("duration", "6 weeks");
  r20.set("skills", ["TCP/IP","DNS","HTTP","Linux","Windows"]);
  r20.set("resources", ["Professor Messer CompTIA Network+","TryHackMe - Pre-Security Path"]);
  r20.set("projects", []);
  try { app.save(r20); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r21 = new Record(collection);
  r21.set("careerSlug", "cybersecurity-engineer");
  r21.set("phase", 2);
  r21.set("phaseTitle", "Security Fundamentals");
  r21.set("duration", "6 weeks");
  r21.set("skills", ["CIA Triad","Cryptography","Authentication","PKI","CompTIA Security+"]);
  r21.set("resources", ["Professor Messer Security+","Cybrary Free Courses"]);
  r21.set("projects", []);
  try { app.save(r21); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r22 = new Record(collection);
  r22.set("careerSlug", "cybersecurity-engineer");
  r22.set("phase", 3);
  r22.set("phaseTitle", "Ethical Hacking & Pen Testing");
  r22.set("duration", "8 weeks");
  r22.set("skills", ["Kali Linux","Nmap","Metasploit","Burp Suite","OWASP Top 10"]);
  r22.set("resources", ["TryHackMe","HackTheBox","PortSwigger Web Security Academy"]);
  r22.set("projects", []);
  try { app.save(r22); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r23 = new Record(collection);
  r23.set("careerSlug", "cybersecurity-engineer");
  r23.set("phase", 4);
  r23.set("phaseTitle", "Blue Team / Defense");
  r23.set("duration", "6 weeks");
  r23.set("skills", ["SIEM","Splunk","IDS/IPS","Incident Response","Threat Hunting"]);
  r23.set("resources", ["Splunk Free Training","SANS Reading Room"]);
  r23.set("projects", []);
  try { app.save(r23); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r24 = new Record(collection);
  r24.set("careerSlug", "cybersecurity-engineer");
  r24.set("phase", 5);
  r24.set("phaseTitle", "Cloud Security & Compliance");
  r24.set("duration", "4 weeks");
  r24.set("skills", ["AWS Security","Zero Trust","GDPR","SOC2","ISO 27001"]);
  r24.set("resources", ["AWS Security Training","NIST Cybersecurity Framework"]);
  r24.set("projects", []);
  try { app.save(r24); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r25 = new Record(collection);
  r25.set("careerSlug", "data-engineer");
  r25.set("phase", 1);
  r25.set("phaseTitle", "Programming Fundamentals");
  r25.set("duration", "4 weeks");
  r25.set("skills", ["Python","SQL","Data Structures"]);
  r25.set("resources", ["Mode SQL Tutorial","Kaggle Python"]);
  r25.set("projects", []);
  try { app.save(r25); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r26 = new Record(collection);
  r26.set("careerSlug", "data-engineer");
  r26.set("phase", 2);
  r26.set("phaseTitle", "Databases & Storage");
  r26.set("duration", "6 weeks");
  r26.set("skills", ["PostgreSQL","MySQL","NoSQL","Data Warehousing","Snowflake","BigQuery"]);
  r26.set("resources", ["PostgreSQL Tutorial","Snowflake Free Trial"]);
  r26.set("projects", []);
  try { app.save(r26); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r27 = new Record(collection);
  r27.set("careerSlug", "data-engineer");
  r27.set("phase", 3);
  r27.set("phaseTitle", "Data Pipeline Tools");
  r27.set("duration", "8 weeks");
  r27.set("skills", ["Apache Spark","Kafka","Airflow","dbt","ETL/ELT"]);
  r27.set("resources", ["Apache Spark Official Docs","Airflow Tutorial","dbt Learn"]);
  r27.set("projects", []);
  try { app.save(r27); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r28 = new Record(collection);
  r28.set("careerSlug", "data-engineer");
  r28.set("phase", 4);
  r28.set("phaseTitle", "Cloud Data Platforms");
  r28.set("duration", "6 weeks");
  r28.set("skills", ["AWS Glue","GCP Dataflow","Azure Data Factory","Delta Lake"]);
  r28.set("resources", ["AWS Analytics Free Training","GCP Data Engineering"]);
  r28.set("projects", []);
  try { app.save(r28); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r29 = new Record(collection);
  r29.set("careerSlug", "data-engineer");
  r29.set("phase", 5);
  r29.set("phaseTitle", "Data Quality & Governance");
  r29.set("duration", "4 weeks");
  r29.set("skills", ["Data Quality","Data Catalog","Great Expectations","dbt Tests"]);
  r29.set("resources", ["Great Expectations Docs","dbt Docs"]);
  r29.set("projects", []);
  try { app.save(r29); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r30 = new Record(collection);
  r30.set("careerSlug", "full-stack-engineer");
  r30.set("phase", 1);
  r30.set("phaseTitle", "HTML, CSS, JavaScript");
  r30.set("duration", "6 weeks");
  r30.set("skills", ["HTML5","CSS3","JavaScript ES6+","Responsive Design"]);
  r30.set("resources", ["The Odin Project","freeCodeCamp","MDN Web Docs"]);
  r30.set("projects", []);
  try { app.save(r30); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r31 = new Record(collection);
  r31.set("careerSlug", "full-stack-engineer");
  r31.set("phase", 2);
  r31.set("phaseTitle", "React & Frontend Framework");
  r31.set("duration", "6 weeks");
  r31.set("skills", ["React","TypeScript","Next.js","Tailwind CSS","State Management"]);
  r31.set("resources", ["React Official Docs","Next.js Docs"]);
  r31.set("projects", []);
  try { app.save(r31); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r32 = new Record(collection);
  r32.set("careerSlug", "full-stack-engineer");
  r32.set("phase", 3);
  r32.set("phaseTitle", "Backend Development");
  r32.set("duration", "8 weeks");
  r32.set("skills", ["Node.js","Express","REST APIs","GraphQL","Authentication/JWT"]);
  r32.set("resources", ["Node.js Official Docs","Express.js Guide"]);
  r32.set("projects", []);
  try { app.save(r32); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r33 = new Record(collection);
  r33.set("careerSlug", "full-stack-engineer");
  r33.set("phase", 4);
  r33.set("phaseTitle", "Databases");
  r33.set("duration", "4 weeks");
  r33.set("skills", ["PostgreSQL","MongoDB","Redis","ORM (Prisma/Sequelize)"]);
  r33.set("resources", ["PostgreSQL Tutorial","MongoDB University"]);
  r33.set("projects", []);
  try { app.save(r33); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r34 = new Record(collection);
  r34.set("careerSlug", "full-stack-engineer");
  r34.set("phase", 5);
  r34.set("phaseTitle", "DevOps & Deployment");
  r34.set("duration", "4 weeks");
  r34.set("skills", ["Docker","CI/CD","Vercel/AWS","Testing"]);
  r34.set("resources", ["Vercel Docs","Docker Official Tutorial"]);
  r34.set("projects", []);
  try { app.save(r34); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r35 = new Record(collection);
  r35.set("careerSlug", "blockchain-web3-engineer");
  r35.set("phase", 1);
  r35.set("phaseTitle", "Web Development Basics");
  r35.set("duration", "6 weeks");
  r35.set("skills", ["JavaScript","TypeScript","React","Node.js"]);
  r35.set("resources", ["freeCodeCamp"]);
  r35.set("projects", []);
  try { app.save(r35); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r36 = new Record(collection);
  r36.set("careerSlug", "blockchain-web3-engineer");
  r36.set("phase", 2);
  r36.set("phaseTitle", "Blockchain Fundamentals");
  r36.set("duration", "4 weeks");
  r36.set("skills", ["Blockchain Concepts","Ethereum","Bitcoin","Cryptography","Wallets"]);
  r36.set("resources", ["MIT OpenCourseWare Blockchain","Ethereum.org Learn"]);
  r36.set("projects", []);
  try { app.save(r36); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r37 = new Record(collection);
  r37.set("careerSlug", "blockchain-web3-engineer");
  r37.set("phase", 3);
  r37.set("phaseTitle", "Smart Contract Development");
  r37.set("duration", "8 weeks");
  r37.set("skills", ["Solidity","Hardhat","Foundry","OpenZeppelin","ERC Standards"]);
  r37.set("resources", ["CryptoZombies","Solidity Docs","Patrick Collins Blockchain Course"]);
  r37.set("projects", []);
  try { app.save(r37); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r38 = new Record(collection);
  r38.set("careerSlug", "blockchain-web3-engineer");
  r38.set("phase", 4);
  r38.set("phaseTitle", "Web3 Frontend");
  r38.set("duration", "4 weeks");
  r38.set("skills", ["ethers.js","wagmi","RainbowKit","MetaMask Integration"]);
  r38.set("resources", ["ethers.js Docs","wagmi Docs"]);
  r38.set("projects", []);
  try { app.save(r38); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r39 = new Record(collection);
  r39.set("careerSlug", "blockchain-web3-engineer");
  r39.set("phase", 5);
  r39.set("phaseTitle", "DeFi & Advanced Concepts");
  r39.set("duration", "4 weeks");
  r39.set("skills", ["DeFi Protocols","AMMs","Oracles","Layer 2","Security Auditing"]);
  r39.set("resources", ["DeFi Developer Roadmap"]);
  r39.set("projects", []);
  try { app.save(r39); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r40 = new Record(collection);
  r40.set("careerSlug", "site-reliability-engineer-sre");
  r40.set("phase", 1);
  r40.set("phaseTitle", "Software Engineering Basics");
  r40.set("duration", "8 weeks");
  r40.set("skills", ["Python or Go","Linux","System Design Basics"]);
  r40.set("resources", ["Go Tour","Python Docs"]);
  r40.set("projects", []);
  try { app.save(r40); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r41 = new Record(collection);
  r41.set("careerSlug", "site-reliability-engineer-sre");
  r41.set("phase", 2);
  r41.set("phaseTitle", "Networking & Systems");
  r41.set("duration", "6 weeks");
  r41.set("skills", ["TCP/IP","DNS","HTTP","Load Balancing","Linux Internals"]);
  r41.set("resources", ["Julia Evans Networking Zines","Linux Networking"]);
  r41.set("projects", []);
  try { app.save(r41); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r42 = new Record(collection);
  r42.set("careerSlug", "site-reliability-engineer-sre");
  r42.set("phase", 3);
  r42.set("phaseTitle", "Observability & Monitoring");
  r42.set("duration", "6 weeks");
  r42.set("skills", ["Prometheus","Grafana","Distributed Tracing","Log Management","Alerting"]);
  r42.set("resources", ["Prometheus Docs","OpenTelemetry Docs"]);
  r42.set("projects", []);
  try { app.save(r42); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r43 = new Record(collection);
  r43.set("careerSlug", "site-reliability-engineer-sre");
  r43.set("phase", 4);
  r43.set("phaseTitle", "Kubernetes & Cloud");
  r43.set("duration", "8 weeks");
  r43.set("skills", ["Kubernetes","AWS/GCP","Docker","Service Mesh"]);
  r43.set("resources", ["Kubernetes Docs"]);
  r43.set("projects", []);
  try { app.save(r43); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r44 = new Record(collection);
  r44.set("careerSlug", "site-reliability-engineer-sre");
  r44.set("phase", 5);
  r44.set("phaseTitle", "SRE Practices");
  r44.set("duration", "4 weeks");
  r44.set("skills", ["SLOs/SLIs/SLAs","Incident Management","Chaos Engineering","Capacity Planning"]);
  r44.set("resources", ["Google SRE Book (free)","SRE Workbook (free)"]);
  r44.set("projects", []);
  try { app.save(r44); } catch(err) { if (!err.message.includes("unique")) throw err; }
}, (app) => {});
