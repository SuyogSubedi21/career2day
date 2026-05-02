/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerRoadmaps");

  const r0 = new Record(collection);
  r0.set("careerSlug", "solutions-architect");
  r0.set("phase", 1);
  r0.set("phaseTitle", "Software Engineering Foundation");
  r0.set("duration", "12 weeks");
  r0.set("skills", ["Programming","Software Design","APIs","Databases"]);
  r0.set("resources", ["System Design Primer"]);
  r0.set("projects", []);
  try { app.save(r0); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r1 = new Record(collection);
  r1.set("careerSlug", "solutions-architect");
  r1.set("phase", 2);
  r1.set("phaseTitle", "Cloud & Infrastructure");
  r1.set("duration", "12 weeks");
  r1.set("skills", ["AWS/Azure/GCP","Networking","Security","IaC"]);
  r1.set("resources", ["AWS Architecture Center"]);
  r1.set("projects", []);
  try { app.save(r1); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r2 = new Record(collection);
  r2.set("careerSlug", "solutions-architect");
  r2.set("phase", 3);
  r2.set("phaseTitle", "Architecture Patterns");
  r2.set("duration", "8 weeks");
  r2.set("skills", ["Microservices","Event-Driven","CQRS","Domain-Driven Design"]);
  r2.set("resources", ["Martin Fowler's Blog"]);
  r2.set("projects", []);
  try { app.save(r2); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r3 = new Record(collection);
  r3.set("careerSlug", "solutions-architect");
  r3.set("phase", 4);
  r3.set("phaseTitle", "Business & Communication");
  r3.set("duration", "4 weeks");
  r3.set("skills", ["Requirements Gathering","Presentation","Cost Analysis","Trade-off Analysis"]);
  r3.set("resources", ["AWS Well-Architected"]);
  r3.set("projects", []);
  try { app.save(r3); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r4 = new Record(collection);
  r4.set("careerSlug", "solutions-architect");
  r4.set("phase", 5);
  r4.set("phaseTitle", "Certifications & Portfolio");
  r4.set("duration", "4 weeks");
  r4.set("skills", ["AWS SA Professional","TOGAF","Case Studies"]);
  r4.set("resources", ["AWS Free Digital Training"]);
  r4.set("projects", []);
  try { app.save(r4); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r5 = new Record(collection);
  r5.set("careerSlug", "database-administrator-database-engineer");
  r5.set("phase", 1);
  r5.set("phaseTitle", "SQL Fundamentals");
  r5.set("duration", "6 weeks");
  r5.set("skills", ["SQL","PostgreSQL","MySQL","Query Optimization","Joins"]);
  r5.set("resources", ["Mode SQL Tutorial","SQLZoo"]);
  r5.set("projects", []);
  try { app.save(r5); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r6 = new Record(collection);
  r6.set("careerSlug", "database-administrator-database-engineer");
  r6.set("phase", 2);
  r6.set("phaseTitle", "Database Design");
  r6.set("duration", "4 weeks");
  r6.set("skills", ["ERD","Normalization","Schema Design","Indexing Strategies"]);
  r6.set("resources", ["PostgreSQL Tutorial"]);
  r6.set("projects", []);
  try { app.save(r6); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r7 = new Record(collection);
  r7.set("careerSlug", "database-administrator-database-engineer");
  r7.set("phase", 3);
  r7.set("phaseTitle", "Advanced Database Concepts");
  r7.set("duration", "6 weeks");
  r7.set("skills", ["ACID","Transactions","Locks","Query Plans","Partitioning"]);
  r7.set("resources", ["Use The Index Luke"]);
  r7.set("projects", []);
  try { app.save(r7); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r8 = new Record(collection);
  r8.set("careerSlug", "database-administrator-database-engineer");
  r8.set("phase", 4);
  r8.set("phaseTitle", "NoSQL & Cloud Databases");
  r8.set("duration", "4 weeks");
  r8.set("skills", ["MongoDB","Cassandra","DynamoDB","Redis","Cloud RDS"]);
  r8.set("resources", ["MongoDB University"]);
  r8.set("projects", []);
  try { app.save(r8); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r9 = new Record(collection);
  r9.set("careerSlug", "database-administrator-database-engineer");
  r9.set("phase", 5);
  r9.set("phaseTitle", "Backup, HA & Security");
  r9.set("duration", "4 weeks");
  r9.set("skills", ["Backup/Restore","Replication","High Availability","Database Security"]);
  r9.set("resources", ["AWS RDS Docs"]);
  r9.set("projects", []);
  try { app.save(r9); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r10 = new Record(collection);
  r10.set("careerSlug", "game-developer");
  r10.set("phase", 1);
  r10.set("phaseTitle", "Programming Foundation");
  r10.set("duration", "6 weeks");
  r10.set("skills", ["C# or C++","OOP","Data Structures","Algorithms"]);
  r10.set("resources", ["CS50 Harvard","Learn C# - Microsoft"]);
  r10.set("projects", []);
  try { app.save(r10); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r11 = new Record(collection);
  r11.set("careerSlug", "game-developer");
  r11.set("phase", 2);
  r11.set("phaseTitle", "Game Engine (Unity or Unreal)");
  r11.set("duration", "8 weeks");
  r11.set("skills", ["Unity3D","Unreal Engine 5","Scene Management","Prefabs","Physics"]);
  r11.set("resources", ["Unity Learn","Unreal Online Learning"]);
  r11.set("projects", []);
  try { app.save(r11); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r12 = new Record(collection);
  r12.set("careerSlug", "game-developer");
  r12.set("phase", 3);
  r12.set("phaseTitle", "Game Design & Math");
  r12.set("duration", "4 weeks");
  r12.set("skills", ["Game Design Principles","Linear Algebra for Games","Collision Detection","Game Loops"]);
  r12.set("resources", ["Game Design Concepts"]);
  r12.set("projects", []);
  try { app.save(r12); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r13 = new Record(collection);
  r13.set("careerSlug", "game-developer");
  r13.set("phase", 4);
  r13.set("phaseTitle", "Graphics & Audio");
  r13.set("duration", "4 weeks");
  r13.set("skills", ["Shaders","Lighting","Particle Systems","Audio Integration"]);
  r13.set("resources", ["The Book of Shaders"]);
  r13.set("projects", []);
  try { app.save(r13); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r14 = new Record(collection);
  r14.set("careerSlug", "game-developer");
  r14.set("phase", 5);
  r14.set("phaseTitle", "Networking & Publishing");
  r14.set("duration", "4 weeks");
  r14.set("skills", ["Multiplayer Networking","Steam SDK","App Store","Performance Optimization"]);
  r14.set("resources", ["Unity Multiplayer Docs"]);
  r14.set("projects", []);
  try { app.save(r14); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r15 = new Record(collection);
  r15.set("careerSlug", "bioinformatics-engineer");
  r15.set("phase", 1);
  r15.set("phaseTitle", "Biology & Chemistry Basics");
  r15.set("duration", "6 weeks");
  r15.set("skills", ["Molecular Biology","Genetics","DNA/RNA","Proteins"]);
  r15.set("resources", ["Khan Academy Biology","MIT OCW Biology"]);
  r15.set("projects", []);
  try { app.save(r15); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r16 = new Record(collection);
  r16.set("careerSlug", "bioinformatics-engineer");
  r16.set("phase", 2);
  r16.set("phaseTitle", "Python & R Programming");
  r16.set("duration", "6 weeks");
  r16.set("skills", ["Python","R","Pandas","BioPython","Bioconductor"]);
  r16.set("resources", ["Rosalind Bioinformatics","BioPython Tutorial"]);
  r16.set("projects", []);
  try { app.save(r16); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r17 = new Record(collection);
  r17.set("careerSlug", "bioinformatics-engineer");
  r17.set("phase", 3);
  r17.set("phaseTitle", "Genomics & Sequence Analysis");
  r17.set("duration", "8 weeks");
  r17.set("skills", ["FASTA/FASTQ","Sequence Alignment","BLAST","BWA","GATK","Variant Calling"]);
  r17.set("resources", ["EMBL-EBI Training","NCBI Tutorials"]);
  r17.set("projects", []);
  try { app.save(r17); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r18 = new Record(collection);
  r18.set("careerSlug", "bioinformatics-engineer");
  r18.set("phase", 4);
  r18.set("phaseTitle", "Machine Learning for Biology");
  r18.set("duration", "6 weeks");
  r18.set("skills", ["scRNA-seq","Protein Structure","AlphaFold","Drug Discovery ML"]);
  r18.set("resources", ["DeepMind AlphaFold"]);
  r18.set("projects", []);
  try { app.save(r18); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r19 = new Record(collection);
  r19.set("careerSlug", "bioinformatics-engineer");
  r19.set("phase", 5);
  r19.set("phaseTitle", "Cloud & Pipelines");
  r19.set("duration", "4 weeks");
  r19.set("skills", ["Nextflow","Snakemake","AWS for Genomics","Galaxy Platform"]);
  r19.set("resources", ["Nextflow Training","Galaxy Training"]);
  r19.set("projects", []);
  try { app.save(r19); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r20 = new Record(collection);
  r20.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r20.set("phase", 1);
  r20.set("phaseTitle", "LLM Fundamentals");
  r20.set("duration", "2 weeks");
  r20.set("skills", ["How LLMs Work","Tokenization","Temperature","Context Windows"]);
  r20.set("resources", ["DeepLearning.AI Short Courses"]);
  r20.set("projects", []);
  try { app.save(r20); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r21 = new Record(collection);
  r21.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r21.set("phase", 2);
  r21.set("phaseTitle", "Prompt Engineering Techniques");
  r21.set("duration", "4 weeks");
  r21.set("skills", ["Zero-shot","Few-shot","CoT","ReAct","Structured Output","System Prompts"]);
  r21.set("resources", ["Anthropic Prompt Engineering Guide","OpenAI Prompt Guide"]);
  r21.set("projects", []);
  try { app.save(r21); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r22 = new Record(collection);
  r22.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r22.set("phase", 3);
  r22.set("phaseTitle", "RAG & Agentic Systems");
  r22.set("duration", "4 weeks");
  r22.set("skills", ["RAG","LangChain","Vector DBs","Tool Use","Multi-agent"]);
  r22.set("resources", ["LangChain Docs"]);
  r22.set("projects", []);
  try { app.save(r22); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r23 = new Record(collection);
  r23.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r23.set("phase", 4);
  r23.set("phaseTitle", "Evaluation & Testing");
  r23.set("duration", "3 weeks");
  r23.set("skills", ["LLM Eval","Red-teaming","RAGAS","LLM-as-judge","Benchmarks"]);
  r23.set("resources", ["RAGAS Docs"]);
  r23.set("projects", []);
  try { app.save(r23); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r24 = new Record(collection);
  r24.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r24.set("phase", 5);
  r24.set("phaseTitle", "Product & Deployment");
  r24.set("duration", "3 weeks");
  r24.set("skills", ["Guardrails","Latency Optimization","Cost Management","API Integration"]);
  r24.set("resources", ["Guardrails AI"]);
  r24.set("projects", []);
  try { app.save(r24); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r25 = new Record(collection);
  r25.set("careerSlug", "hardware-engineer");
  r25.set("phase", 1);
  r25.set("phaseTitle", "Electronics Fundamentals");
  r25.set("duration", "8 weeks");
  r25.set("skills", ["Circuit Analysis","Ohm's Law","RC/RL Circuits","Digital Logic"]);
  r25.set("resources", ["Khan Academy Electrical Engineering","All About Circuits"]);
  r25.set("projects", []);
  try { app.save(r25); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r26 = new Record(collection);
  r26.set("careerSlug", "hardware-engineer");
  r26.set("phase", 2);
  r26.set("phaseTitle", "Digital Design & HDL");
  r26.set("duration", "8 weeks");
  r26.set("skills", ["VHDL or Verilog","Logic Gates","FSM","FPGA Programming"]);
  r26.set("resources", ["Nand to Tetris","FPGA4Fun"]);
  r26.set("projects", []);
  try { app.save(r26); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r27 = new Record(collection);
  r27.set("careerSlug", "hardware-engineer");
  r27.set("phase", 3);
  r27.set("phaseTitle", "Computer Architecture");
  r27.set("duration", "8 weeks");
  r27.set("skills", ["CPU Design","Memory Hierarchy","Cache","Pipelining","ISA"]);
  r27.set("resources", ["MIT 6.004 Computation Structures"]);
  r27.set("projects", []);
  try { app.save(r27); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r28 = new Record(collection);
  r28.set("careerSlug", "hardware-engineer");
  r28.set("phase", 4);
  r28.set("phaseTitle", "PCB Design & CAD");
  r28.set("duration", "6 weeks");
  r28.set("skills", ["KiCad","Altium","Schematic Design","PCB Layout","Signal Integrity"]);
  r28.set("resources", ["KiCad Tutorials"]);
  r28.set("projects", []);
  try { app.save(r28); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r29 = new Record(collection);
  r29.set("careerSlug", "hardware-engineer");
  r29.set("phase", 5);
  r29.set("phaseTitle", "Chip Design (VLSI)");
  r29.set("duration", "8 weeks");
  r29.set("skills", ["CMOS Design","VLSI","Cadence","Timing Analysis","DRC"]);
  r29.set("resources", ["Google Open Source PDK"]);
  r29.set("projects", []);
  try { app.save(r29); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r30 = new Record(collection);
  r30.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r30.set("phase", 1);
  r30.set("phaseTitle", "Math & Programming");
  r30.set("duration", "8 weeks");
  r30.set("skills", ["C++","Python","Linear Algebra","Probability","Control Theory"]);
  r30.set("resources", ["MIT OCW Linear Algebra"]);
  r30.set("projects", []);
  try { app.save(r30); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r31 = new Record(collection);
  r31.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r31.set("phase", 2);
  r31.set("phaseTitle", "Computer Vision & Sensors");
  r31.set("duration", "8 weeks");
  r31.set("skills", ["OpenCV","LIDAR Processing","Radar","Camera","Sensor Fusion"]);
  r31.set("resources", ["OpenCV Tutorials"]);
  r31.set("projects", []);
  try { app.save(r31); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r32 = new Record(collection);
  r32.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r32.set("phase", 3);
  r32.set("phaseTitle", "State Estimation & Localization");
  r32.set("duration", "6 weeks");
  r32.set("skills", ["Kalman Filter","EKF","UKF","Particle Filter","SLAM","HD Maps"]);
  r32.set("resources", ["Probabilistic Robotics Book (free PDF)"]);
  r32.set("projects", []);
  try { app.save(r32); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r33 = new Record(collection);
  r33.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r33.set("phase", 4);
  r33.set("phaseTitle", "Path Planning & Control");
  r33.set("duration", "6 weeks");
  r33.set("skills", ["Behavior Planning","Motion Planning","MPC","Trajectory Generation","PID"]);
  r33.set("resources", ["Udacity Self-Driving Car GitHub"]);
  r33.set("projects", []);
  try { app.save(r33); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r34 = new Record(collection);
  r34.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r34.set("phase", 5);
  r34.set("phaseTitle", "End-to-End Deep Learning & Safety");
  r34.set("duration", "6 weeks");
  r34.set("skills", ["3D Object Detection","BEV Perception","Occupancy Networks","Functional Safety"]);
  r34.set("resources", ["nuScenes Dataset"]);
  r34.set("projects", []);
  try { app.save(r34); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r35 = new Record(collection);
  r35.set("careerSlug", "ui-ux-designer-technical");
  r35.set("phase", 1);
  r35.set("phaseTitle", "Design Fundamentals");
  r35.set("duration", "4 weeks");
  r35.set("skills", ["Color Theory","Typography","Gestalt Principles","Visual Hierarchy"]);
  r35.set("resources", ["Google UX Design Certificate (audit free)","Laws of UX"]);
  r35.set("projects", []);
  try { app.save(r35); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r36 = new Record(collection);
  r36.set("careerSlug", "ui-ux-designer-technical");
  r36.set("phase", 2);
  r36.set("phaseTitle", "UI Design & Figma");
  r36.set("duration", "6 weeks");
  r36.set("skills", ["Figma","Components","Design Systems","Prototyping","Auto Layout"]);
  r36.set("resources", ["Figma Tutorial for Beginners","Figma Community"]);
  r36.set("projects", []);
  try { app.save(r36); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r37 = new Record(collection);
  r37.set("careerSlug", "ui-ux-designer-technical");
  r37.set("phase", 3);
  r37.set("phaseTitle", "UX Research");
  r37.set("duration", "4 weeks");
  r37.set("skills", ["User Interviews","Usability Testing","Card Sorting","Journey Mapping"]);
  r37.set("resources", ["Nielsen Norman Group Articles (free)"]);
  r37.set("projects", []);
  try { app.save(r37); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r38 = new Record(collection);
  r38.set("careerSlug", "ui-ux-designer-technical");
  r38.set("phase", 4);
  r38.set("phaseTitle", "Interaction & Motion");
  r38.set("duration", "4 weeks");
  r38.set("skills", ["Micro-interactions","Animation","Framer","Lottie"]);
  r38.set("resources", ["Principle of Animation"]);
  r38.set("projects", []);
  try { app.save(r38); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r39 = new Record(collection);
  r39.set("careerSlug", "ui-ux-designer-technical");
  r39.set("phase", 5);
  r39.set("phaseTitle", "Technical Implementation");
  r39.set("duration", "4 weeks");
  r39.set("skills", ["CSS/HTML Basics","Handoff with Developers","Design Tokens","Accessibility (WCAG)"]);
  r39.set("resources", ["Web Accessibility Initiative"]);
  r39.set("projects", []);
  try { app.save(r39); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r40 = new Record(collection);
  r40.set("careerSlug", "technical-writer");
  r40.set("phase", 1);
  r40.set("phaseTitle", "Writing Fundamentals");
  r40.set("duration", "3 weeks");
  r40.set("skills", ["Technical Writing Principles","Plain Language","Structured Writing","Style Guides"]);
  r40.set("resources", ["Google Technical Writing Courses (free)"]);
  r40.set("projects", []);
  try { app.save(r40); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r41 = new Record(collection);
  r41.set("careerSlug", "technical-writer");
  r41.set("phase", 2);
  r41.set("phaseTitle", "Tools & Platforms");
  r41.set("duration", "3 weeks");
  r41.set("skills", ["Markdown","Git","Docs-as-Code","MkDocs","Docusaurus","Confluence"]);
  r41.set("resources", ["Markdown Guide"]);
  r41.set("projects", []);
  try { app.save(r41); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r42 = new Record(collection);
  r42.set("careerSlug", "technical-writer");
  r42.set("phase", 3);
  r42.set("phaseTitle", "API Documentation");
  r42.set("duration", "4 weeks");
  r42.set("skills", ["REST API Docs","OpenAPI/Swagger","Postman","Developer Portals"]);
  r42.set("resources", ["idratherbewriting API docs course (free)"]);
  r42.set("projects", []);
  try { app.save(r42); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r43 = new Record(collection);
  r43.set("careerSlug", "technical-writer");
  r43.set("phase", 4);
  r43.set("phaseTitle", "Technical Domain Knowledge");
  r43.set("duration", "4 weeks");
  r43.set("skills", ["Cloud Services","CLI tools","SDK Documentation","Code Samples"]);
  r43.set("resources", ["AWS Docs Style Guide"]);
  r43.set("projects", []);
  try { app.save(r43); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r44 = new Record(collection);
  r44.set("careerSlug", "technical-writer");
  r44.set("phase", 5);
  r44.set("phaseTitle", "Portfolio & Tools");
  r44.set("duration", "2 weeks");
  r44.set("skills", ["Portfolio Building","Diátaxis Framework","Doc Testing","Metrics"]);
  r44.set("resources", ["Diátaxis Framework"]);
  r44.set("projects", []);
  try { app.save(r44); } catch(err) { if (!err.message.includes("unique")) throw err; }
}, (app) => {});
