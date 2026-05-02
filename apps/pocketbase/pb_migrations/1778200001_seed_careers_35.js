/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const r0 = new Record(collection);
  r0.set("slug", "machine-learning-engineer");
  r0.set("name", "Machine Learning Engineer");
  r0.set("description", "Build and deploy ML models that power AI products at scale.");
  r0.set("avg_salary", "$150,000 - $250,000");
  r0.set("demand", "Very High");
  try { app.save(r0); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r1 = new Record(collection);
  r1.set("slug", "ai-llm-engineer");
  r1.set("name", "AI/LLM Engineer");
  r1.set("description", "Design, fine-tune, and deploy large language models and AI systems.");
  r1.set("avg_salary", "$160,000 - $280,000");
  r1.set("demand", "Extremely High");
  try { app.save(r1); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r2 = new Record(collection);
  r2.set("slug", "cloud-architect");
  r2.set("name", "Cloud Architect");
  r2.set("description", "Design scalable, secure, and cost-optimized cloud infrastructure for enterprises.");
  r2.set("avg_salary", "$140,000 - $220,000");
  r2.set("demand", "Very High");
  try { app.save(r2); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r3 = new Record(collection);
  r3.set("slug", "devops-platform-engineer");
  r3.set("name", "DevOps / Platform Engineer");
  r3.set("description", "Build and maintain CI/CD pipelines, automate infrastructure, and enable developer productivity.");
  r3.set("avg_salary", "$130,000 - $200,000");
  r3.set("demand", "Very High");
  try { app.save(r3); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r4 = new Record(collection);
  r4.set("slug", "cybersecurity-engineer");
  r4.set("name", "Cybersecurity Engineer");
  r4.set("description", "Protect systems and data from cyber threats through security architecture, analysis, and response.");
  r4.set("avg_salary", "$130,000 - $210,000");
  r4.set("demand", "Very High");
  try { app.save(r4); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r5 = new Record(collection);
  r5.set("slug", "data-engineer");
  r5.set("name", "Data Engineer");
  r5.set("description", "Build data pipelines and infrastructure to enable data-driven decision making.");
  r5.set("avg_salary", "$120,000 - $190,000");
  r5.set("demand", "Very High");
  try { app.save(r5); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r6 = new Record(collection);
  r6.set("slug", "full-stack-engineer");
  r6.set("name", "Full Stack Engineer");
  r6.set("description", "Build complete web applications from frontend UI to backend APIs and databases.");
  r6.set("avg_salary", "$110,000 - $180,000");
  r6.set("demand", "High");
  try { app.save(r6); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r7 = new Record(collection);
  r7.set("slug", "blockchain-web3-engineer");
  r7.set("name", "Blockchain / Web3 Engineer");
  r7.set("description", "Build decentralized applications, smart contracts, and blockchain protocols.");
  r7.set("avg_salary", "$120,000 - $200,000");
  r7.set("demand", "Medium-High");
  try { app.save(r7); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r8 = new Record(collection);
  r8.set("slug", "site-reliability-engineer-sre");
  r8.set("name", "Site Reliability Engineer (SRE)");
  r8.set("description", "Ensure reliability, scalability, and performance of production systems at scale.");
  r8.set("avg_salary", "$140,000 - $220,000");
  r8.set("demand", "High");
  try { app.save(r8); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r9 = new Record(collection);
  r9.set("slug", "embedded-systems-firmware-engineer");
  r9.set("name", "Embedded Systems / Firmware Engineer");
  r9.set("description", "Develop software for microcontrollers, IoT devices, and hardware systems.");
  r9.set("avg_salary", "$110,000 - $180,000");
  r9.set("demand", "High");
  try { app.save(r9); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r10 = new Record(collection);
  r10.set("slug", "data-scientist");
  r10.set("name", "Data Scientist");
  r10.set("description", "Extract insights from data using statistics, ML, and visualization to drive business decisions.");
  r10.set("avg_salary", "$120,000 - $190,000");
  r10.set("demand", "Very High");
  try { app.save(r10); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r11 = new Record(collection);
  r11.set("slug", "backend-engineer");
  r11.set("name", "Backend Engineer");
  r11.set("description", "Build scalable APIs, services, and systems that power applications.");
  r11.set("avg_salary", "$110,000 - $180,000");
  r11.set("demand", "Very High");
  try { app.save(r11); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r12 = new Record(collection);
  r12.set("slug", "mobile-app-developer-ios-android");
  r12.set("name", "Mobile App Developer (iOS/Android)");
  r12.set("description", "Build native or cross-platform mobile applications for iOS and Android.");
  r12.set("avg_salary", "$110,000 - $180,000");
  r12.set("demand", "High");
  try { app.save(r12); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r13 = new Record(collection);
  r13.set("slug", "product-manager-technical");
  r13.set("name", "Product Manager (Technical)");
  r13.set("description", "Define product vision, strategy, and roadmap while working with engineering and design teams.");
  r13.set("avg_salary", "$120,000 - $200,000");
  r13.set("demand", "Very High");
  try { app.save(r13); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r14 = new Record(collection);
  r14.set("slug", "quantum-computing-engineer");
  r14.set("name", "Quantum Computing Engineer");
  r14.set("description", "Develop quantum algorithms and programs for quantum computers to solve problems beyond classical computing.");
  r14.set("avg_salary", "$140,000 - $250,000");
  r14.set("demand", "Emerging-High");
  try { app.save(r14); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r15 = new Record(collection);
  r15.set("slug", "ar-vr-engineer");
  r15.set("name", "AR/VR Engineer");
  r15.set("description", "Build augmented and virtual reality experiences for gaming, training, healthcare, and enterprise.");
  r15.set("avg_salary", "$120,000 - $200,000");
  r15.set("demand", "High-Growing");
  try { app.save(r15); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r16 = new Record(collection);
  r16.set("slug", "robotics-engineer");
  r16.set("name", "Robotics Engineer");
  r16.set("description", "Design, build, and program robots for manufacturing, healthcare, logistics, and exploration.");
  r16.set("avg_salary", "$120,000 - $200,000");
  r16.set("demand", "High");
  try { app.save(r16); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r17 = new Record(collection);
  r17.set("slug", "network-engineer");
  r17.set("name", "Network Engineer");
  r17.set("description", "Design, implement, and manage computer networks and telecommunications infrastructure.");
  r17.set("avg_salary", "$100,000 - $170,000");
  r17.set("demand", "High");
  try { app.save(r17); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r18 = new Record(collection);
  r18.set("slug", "solutions-architect");
  r18.set("name", "Solutions Architect");
  r18.set("description", "Design end-to-end technical solutions that align business requirements with technology.");
  r18.set("avg_salary", "$140,000 - $230,000");
  r18.set("demand", "Very High");
  try { app.save(r18); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r19 = new Record(collection);
  r19.set("slug", "database-administrator-database-engineer");
  r19.set("name", "Database Administrator / Database Engineer");
  r19.set("description", "Design, manage, and optimize database systems ensuring performance, reliability, and security.");
  r19.set("avg_salary", "$100,000 - $170,000");
  r19.set("demand", "High");
  try { app.save(r19); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r20 = new Record(collection);
  r20.set("slug", "game-developer");
  r20.set("name", "Game Developer");
  r20.set("description", "Design and build video games for PC, console, and mobile platforms.");
  r20.set("avg_salary", "$100,000 - $175,000");
  r20.set("demand", "High");
  try { app.save(r20); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r21 = new Record(collection);
  r21.set("slug", "bioinformatics-engineer");
  r21.set("name", "Bioinformatics Engineer");
  r21.set("description", "Apply computational methods to analyze biological data including genomics, proteomics, and drug discovery.");
  r21.set("avg_salary", "$110,000 - $180,000");
  r21.set("demand", "High-Growing");
  try { app.save(r21); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r22 = new Record(collection);
  r22.set("slug", "prompt-engineer-ai-product-specialist");
  r22.set("name", "Prompt Engineer / AI Product Specialist");
  r22.set("description", "Design, optimize, and evaluate prompts and AI workflows to build reliable AI-powered products.");
  r22.set("avg_salary", "$100,000 - $175,000");
  r22.set("demand", "High");
  try { app.save(r22); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r23 = new Record(collection);
  r23.set("slug", "hardware-engineer");
  r23.set("name", "Hardware Engineer");
  r23.set("description", "Design and develop computer hardware, chips, PCBs, and electronic systems.");
  r23.set("avg_salary", "$110,000 - $185,000");
  r23.set("demand", "High");
  try { app.save(r23); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r24 = new Record(collection);
  r24.set("slug", "autonomous-systems-self-driving-engineer");
  r24.set("name", "Autonomous Systems / Self-Driving Engineer");
  r24.set("description", "Build perception, planning, and control systems for autonomous vehicles and drones.");
  r24.set("avg_salary", "$140,000 - $240,000");
  r24.set("demand", "High");
  try { app.save(r24); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r25 = new Record(collection);
  r25.set("slug", "ui-ux-designer-technical");
  r25.set("name", "UI/UX Designer (Technical)");
  r25.set("description", "Design intuitive, beautiful, and accessible digital products bridging user needs and engineering.");
  r25.set("avg_salary", "$90,000 - $160,000");
  r25.set("demand", "Very High");
  try { app.save(r25); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r26 = new Record(collection);
  r26.set("slug", "technical-writer");
  r26.set("name", "Technical Writer");
  r26.set("description", "Create clear, accurate documentation for software products, APIs, and developer tools.");
  r26.set("avg_salary", "$80,000 - $140,000");
  r26.set("demand", "High");
  try { app.save(r26); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r27 = new Record(collection);
  r27.set("slug", "data-analyst");
  r27.set("name", "Data Analyst");
  r27.set("description", "Transform raw data into actionable business insights through analysis and visualization.");
  r27.set("avg_salary", "$80,000 - $140,000");
  r27.set("demand", "Very High");
  try { app.save(r27); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r28 = new Record(collection);
  r28.set("slug", "it-security-analyst");
  r28.set("name", "IT Security Analyst");
  r28.set("description", "Monitor, detect, and respond to security threats and incidents in enterprise environments.");
  r28.set("avg_salary", "$90,000 - $160,000");
  r28.set("demand", "Very High");
  try { app.save(r28); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r29 = new Record(collection);
  r29.set("slug", "salesforce-developer");
  r29.set("name", "Salesforce Developer");
  r29.set("description", "Build custom applications and automations on the Salesforce CRM platform.");
  r29.set("avg_salary", "$100,000 - $170,000");
  r29.set("demand", "High");
  try { app.save(r29); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r30 = new Record(collection);
  r30.set("slug", "computer-vision-engineer");
  r30.set("name", "Computer Vision Engineer");
  r30.set("description", "Build systems that enable computers to see and understand images and video.");
  r30.set("avg_salary", "$130,000 - $210,000");
  r30.set("demand", "Very High");
  try { app.save(r30); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r31 = new Record(collection);
  r31.set("slug", "natural-language-processing-nlp-engineer");
  r31.set("name", "Natural Language Processing (NLP) Engineer");
  r31.set("description", "Build systems that process, understand, and generate human language.");
  r31.set("avg_salary", "$130,000 - $210,000");
  r31.set("demand", "Very High");
  try { app.save(r31); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r32 = new Record(collection);
  r32.set("slug", "penetration-tester-ethical-hacker");
  r32.set("name", "Penetration Tester / Ethical Hacker");
  r32.set("description", "Simulate cyberattacks to find and help fix security vulnerabilities before malicious hackers do.");
  r32.set("avg_salary", "$100,000 - $180,000");
  r32.set("demand", "Very High");
  try { app.save(r32); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r33 = new Record(collection);
  r33.set("slug", "technical-program-manager-tpm");
  r33.set("name", "Technical Program Manager (TPM)");
  r33.set("description", "Lead complex, cross-functional technical programs from inception to delivery at scale.");
  r33.set("avg_salary", "$130,000 - $220,000");
  r33.set("demand", "High");
  try { app.save(r33); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r34 = new Record(collection);
  r34.set("slug", "gis-geospatial-engineer");
  r34.set("name", "GIS / Geospatial Engineer");
  r34.set("description", "Build systems for capturing, analyzing, and visualizing geographic and spatial data.");
  r34.set("avg_salary", "$90,000 - $160,000");
  r34.set("demand", "High");
  try { app.save(r34); } catch(err) { if (!err.message.includes("unique")) throw err; }
}, (app) => {});
