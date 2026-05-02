/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerRoadmaps");

  const r0 = new Record(collection);
  r0.set("careerSlug", "data-analyst");
  r0.set("phase", 1);
  r0.set("title", "Excel & Statistics");
  r0.set("duration", "3 weeks");
  r0.set("skills", ["Excel/Google Sheets","Basic Statistics","Data Cleaning"]);
  r0.set("resources", ["Khan Academy Statistics"]);
  r0.set("projects", []);
  try { app.save(r0); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r1 = new Record(collection);
  r1.set("careerSlug", "data-analyst");
  r1.set("phase", 2);
  r1.set("title", "SQL");
  r1.set("duration", "6 weeks");
  r1.set("skills", ["SQL Queries","Joins","Aggregations","Window Functions","CTEs"]);
  r1.set("resources", ["Mode SQL Tutorial","SQLZoo"]);
  r1.set("projects", []);
  try { app.save(r1); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r2 = new Record(collection);
  r2.set("careerSlug", "data-analyst");
  r2.set("phase", 3);
  r2.set("title", "Python for Analysis");
  r2.set("duration", "6 weeks");
  r2.set("skills", ["Python","Pandas","Matplotlib","Seaborn","NumPy"]);
  r2.set("resources", ["Kaggle Python & Pandas"]);
  r2.set("projects", []);
  try { app.save(r2); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r3 = new Record(collection);
  r3.set("careerSlug", "data-analyst");
  r3.set("phase", 4);
  r3.set("title", "Business Intelligence Tools");
  r3.set("duration", "4 weeks");
  r3.set("skills", ["Tableau","Power BI","Looker","Google Data Studio"]);
  r3.set("resources", ["Tableau Public Free Training","Microsoft Power BI Docs"]);
  r3.set("projects", []);
  try { app.save(r3); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r4 = new Record(collection);
  r4.set("careerSlug", "data-analyst");
  r4.set("phase", 5);
  r4.set("title", "Business Acumen & Storytelling");
  r4.set("duration", "3 weeks");
  r4.set("skills", ["Data Storytelling","Business Metrics","Presentation","Dashboard Design"]);
  r4.set("resources", ["Google Data Studio"]);
  r4.set("projects", []);
  try { app.save(r4); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r5 = new Record(collection);
  r5.set("careerSlug", "it-security-analyst");
  r5.set("phase", 1);
  r5.set("title", "IT & Networking Basics");
  r5.set("duration", "6 weeks");
  r5.set("skills", ["TCP/IP","Windows/Linux","Active Directory","Firewalls"]);
  r5.set("resources", ["Professor Messer CompTIA A+"]);
  r5.set("projects", []);
  try { app.save(r5); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r6 = new Record(collection);
  r6.set("careerSlug", "it-security-analyst");
  r6.set("phase", 2);
  r6.set("title", "Security Fundamentals");
  r6.set("duration", "6 weeks");
  r6.set("skills", ["CompTIA Security+","CIA Triad","Cryptography","Network Security"]);
  r6.set("resources", ["Professor Messer Security+"]);
  r6.set("projects", []);
  try { app.save(r6); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r7 = new Record(collection);
  r7.set("careerSlug", "it-security-analyst");
  r7.set("phase", 3);
  r7.set("title", "SOC Operations & SIEM");
  r7.set("duration", "6 weeks");
  r7.set("skills", ["Splunk","QRadar","SIEM","Log Analysis","Threat Detection"]);
  r7.set("resources", ["Splunk Free Training"]);
  r7.set("projects", []);
  try { app.save(r7); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r8 = new Record(collection);
  r8.set("careerSlug", "it-security-analyst");
  r8.set("phase", 4);
  r8.set("title", "Incident Response");
  r8.set("duration", "4 weeks");
  r8.set("skills", ["IR Lifecycle","Digital Forensics","Malware Analysis","IOCs"]);
  r8.set("resources", ["SANS Cyber Aces (free)"]);
  r8.set("projects", []);
  try { app.save(r8); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r9 = new Record(collection);
  r9.set("careerSlug", "it-security-analyst");
  r9.set("phase", 5);
  r9.set("title", "Threat Intelligence & Hunting");
  r9.set("duration", "4 weeks");
  r9.set("skills", ["MITRE ATT&CK","CTI","Threat Hunting","OSINT"]);
  r9.set("resources", ["MITRE ATT&CK"]);
  r9.set("projects", []);
  try { app.save(r9); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r10 = new Record(collection);
  r10.set("careerSlug", "salesforce-developer");
  r10.set("phase", 1);
  r10.set("title", "Salesforce Fundamentals");
  r10.set("duration", "4 weeks");
  r10.set("skills", ["Salesforce Objects","CRM Concepts","Admin Basics","Lightning UI"]);
  r10.set("resources", ["Trailhead - Salesforce (free)"]);
  r10.set("projects", []);
  try { app.save(r10); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r11 = new Record(collection);
  r11.set("careerSlug", "salesforce-developer");
  r11.set("phase", 2);
  r11.set("title", "Apex Development");
  r11.set("duration", "8 weeks");
  r11.set("skills", ["Apex (Java-like)","SOQL","Triggers","Batch Apex","Async Apex"]);
  r11.set("resources", ["Trailhead Apex Modules"]);
  r11.set("projects", []);
  try { app.save(r11); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r12 = new Record(collection);
  r12.set("careerSlug", "salesforce-developer");
  r12.set("phase", 3);
  r12.set("title", "Lightning Web Components (LWC)");
  r12.set("duration", "6 weeks");
  r12.set("skills", ["LWC","JavaScript","HTML","Wire Service","Events"]);
  r12.set("resources", ["LWC Dev Guide"]);
  r12.set("projects", []);
  try { app.save(r12); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r13 = new Record(collection);
  r13.set("careerSlug", "salesforce-developer");
  r13.set("phase", 4);
  r13.set("title", "Integrations & APIs");
  r13.set("duration", "4 weeks");
  r13.set("skills", ["REST API","SOAP","Salesforce Connect","Middleware (MuleSoft basics)"]);
  r13.set("resources", ["Salesforce REST API Docs"]);
  r13.set("projects", []);
  try { app.save(r13); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r14 = new Record(collection);
  r14.set("careerSlug", "salesforce-developer");
  r14.set("phase", 5);
  r14.set("title", "DevOps & Testing");
  r14.set("duration", "4 weeks");
  r14.set("skills", ["Salesforce DX","Scratch Orgs","CI/CD","Apex Tests"]);
  r14.set("resources", ["Salesforce DX Trailhead"]);
  r14.set("projects", []);
  try { app.save(r14); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r15 = new Record(collection);
  r15.set("careerSlug", "computer-vision-engineer");
  r15.set("phase", 1);
  r15.set("title", "Math & Python");
  r15.set("duration", "4 weeks");
  r15.set("skills", ["Linear Algebra","Python","NumPy","Matplotlib"]);
  r15.set("resources", ["3Blue1Brown Linear Algebra"]);
  r15.set("projects", []);
  try { app.save(r15); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r16 = new Record(collection);
  r16.set("careerSlug", "computer-vision-engineer");
  r16.set("phase", 2);
  r16.set("title", "Image Processing");
  r16.set("duration", "4 weeks");
  r16.set("skills", ["OpenCV","Image Filtering","Edge Detection","Morphology","Color Spaces"]);
  r16.set("resources", ["OpenCV Tutorials"]);
  r16.set("projects", []);
  try { app.save(r16); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r17 = new Record(collection);
  r17.set("careerSlug", "computer-vision-engineer");
  r17.set("phase", 3);
  r17.set("title", "Deep Learning for Vision");
  r17.set("duration", "8 weeks");
  r17.set("skills", ["CNNs","PyTorch","ResNet","YOLO","Semantic Segmentation","Object Detection"]);
  r17.set("resources", ["fast.ai","PyTorch Vision Tutorials"]);
  r17.set("projects", []);
  try { app.save(r17); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r18 = new Record(collection);
  r18.set("careerSlug", "computer-vision-engineer");
  r18.set("phase", 4);
  r18.set("title", "Advanced Topics");
  r18.set("duration", "6 weeks");
  r18.set("skills", ["Transformers for Vision (ViT)","3D Vision","Stereo Vision","NeRF","Diffusion Models"]);
  r18.set("resources", ["Papers with Code"]);
  r18.set("projects", []);
  try { app.save(r18); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r19 = new Record(collection);
  r19.set("careerSlug", "computer-vision-engineer");
  r19.set("phase", 5);
  r19.set("title", "Deployment");
  r19.set("duration", "4 weeks");
  r19.set("skills", ["TensorRT","ONNX","Edge AI","NVIDIA Triton"]);
  r19.set("resources", ["ONNX Tutorials"]);
  r19.set("projects", []);
  try { app.save(r19); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r20 = new Record(collection);
  r20.set("careerSlug", "natural-language-processing-nlp-engineer");
  r20.set("phase", 1);
  r20.set("title", "Python & ML Fundamentals");
  r20.set("duration", "4 weeks");
  r20.set("skills", ["Python","Pandas","Scikit-learn","PyTorch"]);
  r20.set("resources", ["fast.ai"]);
  r20.set("projects", []);
  try { app.save(r20); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r21 = new Record(collection);
  r21.set("careerSlug", "natural-language-processing-nlp-engineer");
  r21.set("phase", 2);
  r21.set("title", "Classical NLP");
  r21.set("duration", "4 weeks");
  r21.set("skills", ["Tokenization","POS Tagging","NER","TF-IDF","Word2Vec","spaCy","NLTK"]);
  r21.set("resources", ["spaCy Tutorials","NLTK Book (free)"]);
  r21.set("projects", []);
  try { app.save(r21); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r22 = new Record(collection);
  r22.set("careerSlug", "natural-language-processing-nlp-engineer");
  r22.set("phase", 3);
  r22.set("title", "Transformers & BERT/GPT");
  r22.set("duration", "8 weeks");
  r22.set("skills", ["Transformers","BERT","GPT","HuggingFace","Fine-tuning","Sentence Transformers"]);
  r22.set("resources", ["HuggingFace NLP Course"]);
  r22.set("projects", []);
  try { app.save(r22); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r23 = new Record(collection);
  r23.set("careerSlug", "natural-language-processing-nlp-engineer");
  r23.set("phase", 4);
  r23.set("title", "Advanced NLP");
  r23.set("duration", "6 weeks");
  r23.set("skills", ["LLMs","RAG","Text Generation","Summarization","Translation","Question Answering"]);
  r23.set("resources", ["Papers with Code NLP"]);
  r23.set("projects", []);
  try { app.save(r23); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r24 = new Record(collection);
  r24.set("careerSlug", "natural-language-processing-nlp-engineer");
  r24.set("phase", 5);
  r24.set("title", "Production NLP");
  r24.set("duration", "4 weeks");
  r24.set("skills", ["Model Serving","ONNX","Text Pipelines","Evaluation Metrics"]);
  r24.set("resources", ["HuggingFace Inference"]);
  r24.set("projects", []);
  try { app.save(r24); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r25 = new Record(collection);
  r25.set("careerSlug", "penetration-tester-ethical-hacker");
  r25.set("phase", 1);
  r25.set("title", "Networking & Linux");
  r25.set("duration", "6 weeks");
  r25.set("skills", ["TCP/IP","Linux CLI","Bash","Wireshark"]);
  r25.set("resources", ["TryHackMe Pre-Security"]);
  r25.set("projects", []);
  try { app.save(r25); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r26 = new Record(collection);
  r26.set("careerSlug", "penetration-tester-ethical-hacker");
  r26.set("phase", 2);
  r26.set("title", "Security Fundamentals");
  r26.set("duration", "4 weeks");
  r26.set("skills", ["CIA Triad","Cryptography","Authentication","Web Security Basics"]);
  r26.set("resources", ["PortSwigger Web Security Academy"]);
  r26.set("projects", []);
  try { app.save(r26); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r27 = new Record(collection);
  r27.set("careerSlug", "penetration-tester-ethical-hacker");
  r27.set("phase", 3);
  r27.set("title", "Penetration Testing Tools");
  r27.set("duration", "8 weeks");
  r27.set("skills", ["Kali Linux","Nmap","Metasploit","Burp Suite","Nikto","Gobuster"]);
  r27.set("resources", ["TryHackMe Jr Penetration Tester","HackTheBox"]);
  r27.set("projects", []);
  try { app.save(r27); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r28 = new Record(collection);
  r28.set("careerSlug", "penetration-tester-ethical-hacker");
  r28.set("phase", 4);
  r28.set("title", "Web & Network Exploitation");
  r28.set("duration", "6 weeks");
  r28.set("skills", ["OWASP Top 10","SQL Injection","XSS","SSRF","Buffer Overflow","Active Directory Attacks"]);
  r28.set("resources", ["PortSwigger Labs"]);
  r28.set("projects", []);
  try { app.save(r28); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r29 = new Record(collection);
  r29.set("careerSlug", "penetration-tester-ethical-hacker");
  r29.set("phase", 5);
  r29.set("title", "Reporting & Methodology");
  r29.set("duration", "4 weeks");
  r29.set("skills", ["PTES Methodology","Report Writing","CVSS Scoring","Remediation Advice"]);
  r29.set("resources", ["Penetration Testing Execution Standard"]);
  r29.set("projects", []);
  try { app.save(r29); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r30 = new Record(collection);
  r30.set("careerSlug", "technical-program-manager-tpm");
  r30.set("phase", 1);
  r30.set("title", "Engineering Foundation");
  r30.set("duration", "Existing");
  r30.set("skills", ["Software Engineering","System Design","APIs","Cloud"]);
  r30.set("resources", ["System Design Primer"]);
  r30.set("projects", []);
  try { app.save(r30); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r31 = new Record(collection);
  r31.set("careerSlug", "technical-program-manager-tpm");
  r31.set("phase", 2);
  r31.set("title", "Project Management");
  r31.set("duration", "4 weeks");
  r31.set("skills", ["Agile/Scrum","Waterfall","JIRA","Risk Management","OKRs"]);
  r31.set("resources", ["PMI Free Resources","Scrum Guide"]);
  r31.set("projects", []);
  try { app.save(r31); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r32 = new Record(collection);
  r32.set("careerSlug", "technical-program-manager-tpm");
  r32.set("phase", 3);
  r32.set("title", "Program Management Skills");
  r32.set("duration", "4 weeks");
  r32.set("skills", ["Roadmapping","Dependency Management","Escalation","Metrics","Reporting"]);
  r32.set("resources", ["Google PM Guides"]);
  r32.set("projects", []);
  try { app.save(r32); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r33 = new Record(collection);
  r33.set("careerSlug", "technical-program-manager-tpm");
  r33.set("phase", 4);
  r33.set("title", "Stakeholder & Communication");
  r33.set("duration", "3 weeks");
  r33.set("skills", ["Executive Communication","Writing","Presentations","Conflict Resolution"]);
  r33.set("resources", ["First Round Review"]);
  r33.set("projects", []);
  try { app.save(r33); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r34 = new Record(collection);
  r34.set("careerSlug", "technical-program-manager-tpm");
  r34.set("phase", 5);
  r34.set("title", "TPM Specialization");
  r34.set("duration", "3 weeks");
  r34.set("skills", ["Infrastructure Programs","Platform Programs","ML Programs","Security Programs"]);
  r34.set("resources", ["Lenny's Newsletter"]);
  r34.set("projects", []);
  try { app.save(r34); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r35 = new Record(collection);
  r35.set("careerSlug", "gis-geospatial-engineer");
  r35.set("phase", 1);
  r35.set("title", "GIS Fundamentals");
  r35.set("duration", "4 weeks");
  r35.set("skills", ["Coordinate Systems","Projections","GIS Concepts","QGIS"]);
  r35.set("resources", ["QGIS Tutorials","Esri Free Training"]);
  r35.set("projects", []);
  try { app.save(r35); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r36 = new Record(collection);
  r36.set("careerSlug", "gis-geospatial-engineer");
  r36.set("phase", 2);
  r36.set("title", "Python for GIS");
  r36.set("duration", "6 weeks");
  r36.set("skills", ["GeoPandas","Shapely","Rasterio","Folium","Matplotlib"]);
  r36.set("resources", ["GeoPandas Docs","Automating GIS Processes"]);
  r36.set("projects", []);
  try { app.save(r36); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r37 = new Record(collection);
  r37.set("careerSlug", "gis-geospatial-engineer");
  r37.set("phase", 3);
  r37.set("title", "Spatial Databases");
  r37.set("duration", "4 weeks");
  r37.set("skills", ["PostGIS","Spatial SQL","Spatial Indexing"]);
  r37.set("resources", ["PostGIS Workshop"]);
  r37.set("projects", []);
  try { app.save(r37); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r38 = new Record(collection);
  r38.set("careerSlug", "gis-geospatial-engineer");
  r38.set("phase", 4);
  r38.set("title", "Web GIS & Visualization");
  r38.set("duration", "4 weeks");
  r38.set("skills", ["Leaflet.js","Mapbox GL","Deck.gl","Kepler.gl","ArcGIS JS API"]);
  r38.set("resources", ["Mapbox Documentation","Leaflet.js Tutorials"]);
  r38.set("projects", []);
  try { app.save(r38); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r39 = new Record(collection);
  r39.set("careerSlug", "gis-geospatial-engineer");
  r39.set("phase", 5);
  r39.set("title", "Remote Sensing & ML");
  r39.set("duration", "4 weeks");
  r39.set("skills", ["Satellite Imagery","Google Earth Engine","Change Detection","Object Detection on Raster"]);
  r39.set("resources", ["Google Earth Engine (free for research)"]);
  r39.set("projects", []);
  try { app.save(r39); } catch(err) { if (!err.message.includes("unique")) throw err; }
}, (app) => {});
