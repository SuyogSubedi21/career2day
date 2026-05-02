/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerQuizzes");

  const r0 = new Record(collection);
  r0.set("careerSlug", "it-security-analyst");
  r0.set("difficulty", "Basic");
  r0.set("questionNumber", 1);
  r0.set("question", "What is a SOC?");
  r0.set("options", ["Security Operations Center - team monitoring for and responding to threats","System Operations Command","Security Output Controller","Software Operations Core"]);
  r0.set("correctAnswer", "Security Operations Center - team monitoring for and responding to threats");
  r0.set("explanation", "Answer: Security Operations Center - team monitoring for and responding to threats");
  try { app.save(r0); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r1 = new Record(collection);
  r1.set("careerSlug", "it-security-analyst");
  r1.set("difficulty", "Basic");
  r1.set("questionNumber", 2);
  r1.set("question", "What is an IOC?");
  r1.set("options", ["Indicator of Compromise - evidence of a security breach","Input/Output Controller","Internet Operating Certificate","Incident Output Code"]);
  r1.set("correctAnswer", "Indicator of Compromise - evidence of a security breach");
  r1.set("explanation", "Answer: Indicator of Compromise - evidence of a security breach");
  try { app.save(r1); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r2 = new Record(collection);
  r2.set("careerSlug", "it-security-analyst");
  r2.set("difficulty", "Basic");
  r2.set("questionNumber", 3);
  r2.set("question", "What is a SIEM?");
  r2.set("options", ["Security Information and Event Management system","Software Integration and Error Monitor","Security Intelligence and Event Module","System Infrastructure Error Management"]);
  r2.set("correctAnswer", "Security Information and Event Management system");
  r2.set("explanation", "Answer: Security Information and Event Management system");
  try { app.save(r2); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r3 = new Record(collection);
  r3.set("careerSlug", "it-security-analyst");
  r3.set("difficulty", "Basic");
  r3.set("questionNumber", 4);
  r3.set("question", "What is MITRE ATT&CK?");
  r3.set("options", ["Knowledge base of adversary tactics and techniques","An antivirus tool","A firewall vendor","A security certification"]);
  r3.set("correctAnswer", "Knowledge base of adversary tactics and techniques");
  r3.set("explanation", "Answer: Knowledge base of adversary tactics and techniques");
  try { app.save(r3); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r4 = new Record(collection);
  r4.set("careerSlug", "it-security-analyst");
  r4.set("difficulty", "Basic");
  r4.set("questionNumber", 5);
  r4.set("question", "What is triage in incident response?");
  r4.set("options", ["Determining severity and priority of an incident","Fixing a security issue","Writing an incident report","Notifying management"]);
  r4.set("correctAnswer", "Determining severity and priority of an incident");
  r4.set("explanation", "Answer: Determining severity and priority of an incident");
  try { app.save(r4); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r5 = new Record(collection);
  r5.set("careerSlug", "it-security-analyst");
  r5.set("difficulty", "Medium");
  r5.set("questionNumber", 1);
  r5.set("question", "What is the difference between EDR and antivirus?");
  r5.set("options", ["EDR provides detection, investigation, and response capabilities; AV focuses on signature-based prevention","AV provides more capabilities than EDR","They are identical","EDR is only for servers; AV is for endpoints"]);
  r5.set("correctAnswer", "EDR provides detection, investigation, and response capabilities; AV focuses on signature-based prevention");
  r5.set("explanation", "Answer: EDR provides detection, investigation, and response capabilities; AV focuses on signature-based prevention");
  try { app.save(r5); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r6 = new Record(collection);
  r6.set("careerSlug", "it-security-analyst");
  r6.set("difficulty", "Medium");
  r6.set("questionNumber", 2);
  r6.set("question", "What is a false positive in security monitoring?");
  r6.set("options", ["Alert triggered for a benign activity incorrectly identified as malicious","A real attack that was caught","A missed attack","An inaccurate vulnerability report"]);
  r6.set("correctAnswer", "Alert triggered for a benign activity incorrectly identified as malicious");
  r6.set("explanation", "Answer: Alert triggered for a benign activity incorrectly identified as malicious");
  try { app.save(r6); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r7 = new Record(collection);
  r7.set("careerSlug", "it-security-analyst");
  r7.set("difficulty", "Medium");
  r7.set("questionNumber", 3);
  r7.set("question", "What is threat hunting?");
  r7.set("options", ["Proactively searching for threats not yet detected by automated tools","Automated threat detection","Responding to incidents","Patching vulnerabilities"]);
  r7.set("correctAnswer", "Proactively searching for threats not yet detected by automated tools");
  r7.set("explanation", "Answer: Proactively searching for threats not yet detected by automated tools");
  try { app.save(r7); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r8 = new Record(collection);
  r8.set("careerSlug", "it-security-analyst");
  r8.set("difficulty", "Medium");
  r8.set("questionNumber", 4);
  r8.set("question", "What is SOAR?");
  r8.set("options", ["Security Orchestration, Automation and Response - automates security workflows","A SIEM product","A threat intelligence platform","A vulnerability scanner"]);
  r8.set("correctAnswer", "Security Orchestration, Automation and Response - automates security workflows");
  r8.set("explanation", "Answer: Security Orchestration, Automation and Response - automates security workflows");
  try { app.save(r8); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r9 = new Record(collection);
  r9.set("careerSlug", "it-security-analyst");
  r9.set("difficulty", "Medium");
  r9.set("questionNumber", 5);
  r9.set("question", "What is Pass-the-Hash attack?");
  r9.set("options", ["Using captured NTLM hash to authenticate without knowing the actual password","Passing data through a hash function","A password cracking technique","A phishing method"]);
  r9.set("correctAnswer", "Using captured NTLM hash to authenticate without knowing the actual password");
  r9.set("explanation", "Answer: Using captured NTLM hash to authenticate without knowing the actual password");
  try { app.save(r9); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r10 = new Record(collection);
  r10.set("careerSlug", "it-security-analyst");
  r10.set("difficulty", "Hard");
  r10.set("questionNumber", 1);
  r10.set("question", "What is the diamond model of intrusion analysis?");
  r10.set("options", ["Framework with 4 features: adversary, capability, infrastructure, victim and their relationships","A threat scoring model","A vulnerability framework","An incident response model"]);
  r10.set("correctAnswer", "Framework with 4 features: adversary, capability, infrastructure, victim and their relationships");
  r10.set("explanation", "Answer: Framework with 4 features: adversary, capability, infrastructure, victim and their relationships");
  try { app.save(r10); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r11 = new Record(collection);
  r11.set("careerSlug", "it-security-analyst");
  r11.set("difficulty", "Hard");
  r11.set("questionNumber", 2);
  r11.set("question", "What is Kerberoasting?");
  r11.set("options", ["Requesting Kerberos tickets for service accounts and cracking them offline to obtain passwords","A phishing technique","A network attack","A firewall bypass technique"]);
  r11.set("correctAnswer", "Requesting Kerberos tickets for service accounts and cracking them offline to obtain passwords");
  r11.set("explanation", "Answer: Requesting Kerberos tickets for service accounts and cracking them offline to obtain passwords");
  try { app.save(r11); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r12 = new Record(collection);
  r12.set("careerSlug", "it-security-analyst");
  r12.set("difficulty", "Hard");
  r12.set("questionNumber", 3);
  r12.set("question", "What is UEBA?");
  r12.set("options", ["User and Entity Behavior Analytics - detecting anomalies in user behavior","Universal Endpoint Behavior Analysis","User Error Baseline Assessment","Unified Event Behavior Algorithm"]);
  r12.set("correctAnswer", "User and Entity Behavior Analytics - detecting anomalies in user behavior");
  r12.set("explanation", "Answer: User and Entity Behavior Analytics - detecting anomalies in user behavior");
  try { app.save(r12); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r13 = new Record(collection);
  r13.set("careerSlug", "it-security-analyst");
  r13.set("difficulty", "Hard");
  r13.set("questionNumber", 4);
  r13.set("question", "What is STIX/TAXII?");
  r13.set("options", ["Structured Threat Information Expression / Trusted Automated Exchange of Intelligence - standards for sharing CTI","A network protocol","A firewall standard","An encryption standard"]);
  r13.set("correctAnswer", "Structured Threat Information Expression / Trusted Automated Exchange of Intelligence - standards for sharing CTI");
  r13.set("explanation", "Answer: Structured Threat Information Expression / Trusted Automated Exchange of Intelligence - standards for sharing CTI");
  try { app.save(r13); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r14 = new Record(collection);
  r14.set("careerSlug", "it-security-analyst");
  r14.set("difficulty", "Hard");
  r14.set("questionNumber", 5);
  r14.set("question", "What is attack surface management?");
  r14.set("options", ["Continuously discovering, inventorying, and monitoring all assets exposed to attack","Patching vulnerabilities","Firewall management","Network segmentation"]);
  r14.set("correctAnswer", "Continuously discovering, inventorying, and monitoring all assets exposed to attack");
  r14.set("explanation", "Answer: Continuously discovering, inventorying, and monitoring all assets exposed to attack");
  try { app.save(r14); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r15 = new Record(collection);
  r15.set("careerSlug", "salesforce-developer");
  r15.set("difficulty", "Basic");
  r15.set("questionNumber", 1);
  r15.set("question", "What is Apex?");
  r15.set("options", ["Proprietary Java-like language for Salesforce backend development","A JavaScript framework","A database language","A CRM tool"]);
  r15.set("correctAnswer", "Proprietary Java-like language for Salesforce backend development");
  r15.set("explanation", "Answer: Proprietary Java-like language for Salesforce backend development");
  try { app.save(r15); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r16 = new Record(collection);
  r16.set("careerSlug", "salesforce-developer");
  r16.set("difficulty", "Basic");
  r16.set("questionNumber", 2);
  r16.set("question", "What is SOQL?");
  r16.set("options", ["Salesforce Object Query Language for querying Salesforce data","Standard Object Query Language","Structured Operations Query Layer","Salesforce Open Query Language"]);
  r16.set("correctAnswer", "Salesforce Object Query Language for querying Salesforce data");
  r16.set("explanation", "Answer: Salesforce Object Query Language for querying Salesforce data");
  try { app.save(r16); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r17 = new Record(collection);
  r17.set("careerSlug", "salesforce-developer");
  r17.set("difficulty", "Basic");
  r17.set("questionNumber", 3);
  r17.set("question", "What is Trailhead?");
  r17.set("options", ["Salesforce's free online learning platform","A Salesforce debugging tool","A deployment tool","A CI/CD platform"]);
  r17.set("correctAnswer", "Salesforce's free online learning platform");
  r17.set("explanation", "Answer: Salesforce's free online learning platform");
  try { app.save(r17); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r18 = new Record(collection);
  r18.set("careerSlug", "salesforce-developer");
  r18.set("difficulty", "Basic");
  r18.set("questionNumber", 4);
  r18.set("question", "What is a Lightning Web Component?");
  r18.set("options", ["Modern component framework for building Salesforce UIs using web standards","A legacy Salesforce UI framework","A Salesforce mobile app","A database component"]);
  r18.set("correctAnswer", "Modern component framework for building Salesforce UIs using web standards");
  r18.set("explanation", "Answer: Modern component framework for building Salesforce UIs using web standards");
  try { app.save(r18); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r19 = new Record(collection);
  r19.set("careerSlug", "salesforce-developer");
  r19.set("difficulty", "Basic");
  r19.set("questionNumber", 5);
  r19.set("question", "What is a governor limit in Salesforce?");
  r19.set("options", ["Resource limits per transaction to ensure fair usage in multitenant environment","An admin permission","A security restriction","A deployment limit"]);
  r19.set("correctAnswer", "Resource limits per transaction to ensure fair usage in multitenant environment");
  r19.set("explanation", "Answer: Resource limits per transaction to ensure fair usage in multitenant environment");
  try { app.save(r19); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r20 = new Record(collection);
  r20.set("careerSlug", "salesforce-developer");
  r20.set("difficulty", "Medium");
  r20.set("questionNumber", 1);
  r20.set("question", "What is bulkification in Apex?");
  r20.set("options", ["Writing code to handle 200 records at once to avoid governor limit violations","Bulk data import","Batch processing only","A deployment technique"]);
  r20.set("correctAnswer", "Writing code to handle 200 records at once to avoid governor limit violations");
  r20.set("explanation", "Answer: Writing code to handle 200 records at once to avoid governor limit violations");
  try { app.save(r20); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r21 = new Record(collection);
  r21.set("careerSlug", "salesforce-developer");
  r21.set("difficulty", "Medium");
  r21.set("questionNumber", 2);
  r21.set("question", "What is the order of execution in Salesforce?");
  r21.set("options", ["Before triggers → validation → after triggers → workflow → process builder → flows","Flows → triggers → validation → workflow","Validation first, then all triggers","Process builder first, then triggers"]);
  r21.set("correctAnswer", "Before triggers → validation → after triggers → workflow → process builder → flows");
  r21.set("explanation", "Answer: Before triggers → validation → after triggers → workflow → process builder → flows");
  try { app.save(r21); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r22 = new Record(collection);
  r22.set("careerSlug", "salesforce-developer");
  r22.set("difficulty", "Medium");
  r22.set("questionNumber", 3);
  r22.set("question", "What is a master-detail relationship?");
  r22.set("options", ["Tightly coupled parent-child relationship where child is deleted with parent","A loose association between records","A many-to-many relationship","An external relationship"]);
  r22.set("correctAnswer", "Tightly coupled parent-child relationship where child is deleted with parent");
  r22.set("explanation", "Answer: Tightly coupled parent-child relationship where child is deleted with parent");
  try { app.save(r22); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r23 = new Record(collection);
  r23.set("careerSlug", "salesforce-developer");
  r23.set("difficulty", "Medium");
  r23.set("questionNumber", 4);
  r23.set("question", "What is a platform event in Salesforce?");
  r23.set("options", ["Event-driven messaging enabling real-time integration inside and outside Salesforce","A Salesforce UI event","A scheduled trigger","A user activity log"]);
  r23.set("correctAnswer", "Event-driven messaging enabling real-time integration inside and outside Salesforce");
  r23.set("explanation", "Answer: Event-driven messaging enabling real-time integration inside and outside Salesforce");
  try { app.save(r23); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r24 = new Record(collection);
  r24.set("careerSlug", "salesforce-developer");
  r24.set("difficulty", "Medium");
  r24.set("questionNumber", 5);
  r24.set("question", "What is Salesforce DX?");
  r24.set("options", ["Developer experience tools using CLI, scratch orgs, and source-driven development","A Salesforce UI framework","A data migration tool","A Salesforce CRM module"]);
  r24.set("correctAnswer", "Developer experience tools using CLI, scratch orgs, and source-driven development");
  r24.set("explanation", "Answer: Developer experience tools using CLI, scratch orgs, and source-driven development");
  try { app.save(r24); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r25 = new Record(collection);
  r25.set("careerSlug", "salesforce-developer");
  r25.set("difficulty", "Hard");
  r25.set("questionNumber", 1);
  r25.set("question", "What is a second-generation managed package?");
  r25.set("options", ["Package built with SFDX offering namespace, versioning, and dependency management via dev hub","An updated version of first-gen package","A package with two components","A package built in sandbox"]);
  r25.set("correctAnswer", "Package built with SFDX offering namespace, versioning, and dependency management via dev hub");
  r25.set("explanation", "Answer: Package built with SFDX offering namespace, versioning, and dependency management via dev hub");
  try { app.save(r25); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r26 = new Record(collection);
  r26.set("careerSlug", "salesforce-developer");
  r26.set("difficulty", "Hard");
  r26.set("questionNumber", 2);
  r26.set("question", "What is the difference between OWD and sharing rules?");
  r26.set("options", ["OWD sets baseline access; sharing rules open access up from OWD restriction for specific groups","Sharing rules restrict further; OWD opens access","They are identical","OWD is for profiles; sharing rules are for roles"]);
  r26.set("correctAnswer", "OWD sets baseline access; sharing rules open access up from OWD restriction for specific groups");
  r26.set("explanation", "Answer: OWD sets baseline access; sharing rules open access up from OWD restriction for specific groups");
  try { app.save(r26); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r27 = new Record(collection);
  r27.set("careerSlug", "salesforce-developer");
  r27.set("difficulty", "Hard");
  r27.set("questionNumber", 3);
  r27.set("question", "What is Change Data Capture in Salesforce?");
  r27.set("options", ["Publishes change events when Salesforce records are created, updated, deleted, or undeleted","A data migration tool","A deployment change tracking","An audit log feature"]);
  r27.set("correctAnswer", "Publishes change events when Salesforce records are created, updated, deleted, or undeleted");
  r27.set("explanation", "Answer: Publishes change events when Salesforce records are created, updated, deleted, or undeleted");
  try { app.save(r27); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r28 = new Record(collection);
  r28.set("careerSlug", "salesforce-developer");
  r28.set("difficulty", "Hard");
  r28.set("questionNumber", 4);
  r28.set("question", "What is Salesforce Shield?");
  r28.set("options", ["Suite with Platform Encryption, Event Monitoring, and Field Audit Trail for compliance","A firewall for Salesforce","A security scanning tool","An antivirus for Salesforce"]);
  r28.set("correctAnswer", "Suite with Platform Encryption, Event Monitoring, and Field Audit Trail for compliance");
  r28.set("explanation", "Answer: Suite with Platform Encryption, Event Monitoring, and Field Audit Trail for compliance");
  try { app.save(r28); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r29 = new Record(collection);
  r29.set("careerSlug", "salesforce-developer");
  r29.set("difficulty", "Hard");
  r29.set("questionNumber", 5);
  r29.set("question", "What is Queueable Apex vs Future method?");
  r29.set("options", ["Queueable supports chaining, accepts non-primitive types, and can be monitored; Future is simpler async method","Future supports chaining; Queueable does not","They are identical","Future is newer than Queueable"]);
  r29.set("correctAnswer", "Queueable supports chaining, accepts non-primitive types, and can be monitored; Future is simpler async method");
  r29.set("explanation", "Answer: Queueable supports chaining, accepts non-primitive types, and can be monitored; Future is simpler async method");
  try { app.save(r29); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r30 = new Record(collection);
  r30.set("careerSlug", "computer-vision-engineer");
  r30.set("difficulty", "Basic");
  r30.set("questionNumber", 1);
  r30.set("question", "What is a CNN?");
  r30.set("options", ["Convolutional Neural Network for processing image data","A clustering algorithm","A data compression method","A text processing model"]);
  r30.set("correctAnswer", "Convolutional Neural Network for processing image data");
  r30.set("explanation", "Answer: Convolutional Neural Network for processing image data");
  try { app.save(r30); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r31 = new Record(collection);
  r31.set("careerSlug", "computer-vision-engineer");
  r31.set("difficulty", "Basic");
  r31.set("questionNumber", 2);
  r31.set("question", "What is YOLO used for?");
  r31.set("options", ["Real-time object detection","Image classification only","Text recognition","Image generation"]);
  r31.set("correctAnswer", "Real-time object detection");
  r31.set("explanation", "Answer: Real-time object detection");
  try { app.save(r31); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r32 = new Record(collection);
  r32.set("careerSlug", "computer-vision-engineer");
  r32.set("difficulty", "Basic");
  r32.set("questionNumber", 3);
  r32.set("question", "What is IoU?");
  r32.set("options", ["Intersection over Union - measures overlap between predicted and ground truth bounding boxes","Input/Output Unit","Index of Uniqueness","Image Object Utility"]);
  r32.set("correctAnswer", "Intersection over Union - measures overlap between predicted and ground truth bounding boxes");
  r32.set("explanation", "Answer: Intersection over Union - measures overlap between predicted and ground truth bounding boxes");
  try { app.save(r32); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r33 = new Record(collection);
  r33.set("careerSlug", "computer-vision-engineer");
  r33.set("difficulty", "Basic");
  r33.set("questionNumber", 4);
  r33.set("question", "What is semantic segmentation?");
  r33.set("options", ["Classifying every pixel in an image into a category","Detecting objects with bounding boxes","Classifying the whole image","Tracking objects in video"]);
  r33.set("correctAnswer", "Classifying every pixel in an image into a category");
  r33.set("explanation", "Answer: Classifying every pixel in an image into a category");
  try { app.save(r33); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r34 = new Record(collection);
  r34.set("careerSlug", "computer-vision-engineer");
  r34.set("difficulty", "Basic");
  r34.set("questionNumber", 5);
  r34.set("question", "What is transfer learning in computer vision?");
  r34.set("options", ["Using a pre-trained model as starting point for a new task","Transferring images between formats","Moving a model to a new server","Converting a model to ONNX"]);
  r34.set("correctAnswer", "Using a pre-trained model as starting point for a new task");
  r34.set("explanation", "Answer: Using a pre-trained model as starting point for a new task");
  try { app.save(r34); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r35 = new Record(collection);
  r35.set("careerSlug", "computer-vision-engineer");
  r35.set("difficulty", "Medium");
  r35.set("questionNumber", 1);
  r35.set("question", "What is the Vision Transformer (ViT)?");
  r35.set("options", ["Applies transformer attention mechanism to image patches for classification","A video processing transformer","A CNN variant","An object detection model"]);
  r35.set("correctAnswer", "Applies transformer attention mechanism to image patches for classification");
  r35.set("explanation", "Answer: Applies transformer attention mechanism to image patches for classification");
  try { app.save(r35); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r36 = new Record(collection);
  r36.set("careerSlug", "computer-vision-engineer");
  r36.set("difficulty", "Medium");
  r36.set("questionNumber", 2);
  r36.set("question", "What is non-maximum suppression (NMS)?");
  r36.set("options", ["Removes overlapping bounding boxes keeping only the one with highest confidence","A normalization technique","A data augmentation method","A model compression technique"]);
  r36.set("correctAnswer", "Removes overlapping bounding boxes keeping only the one with highest confidence");
  r36.set("explanation", "Answer: Removes overlapping bounding boxes keeping only the one with highest confidence");
  try { app.save(r36); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r37 = new Record(collection);
  r37.set("careerSlug", "computer-vision-engineer");
  r37.set("difficulty", "Medium");
  r37.set("questionNumber", 3);
  r37.set("question", "What is data augmentation in computer vision?");
  r37.set("options", ["Applying transformations (flip, crop, rotate) to training images to increase dataset diversity","Adding more labeled data","A model architecture technique","A training speed optimization"]);
  r37.set("correctAnswer", "Applying transformations (flip, crop, rotate) to training images to increase dataset diversity");
  r37.set("explanation", "Answer: Applying transformations (flip, crop, rotate) to training images to increase dataset diversity");
  try { app.save(r37); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r38 = new Record(collection);
  r38.set("careerSlug", "computer-vision-engineer");
  r38.set("difficulty", "Medium");
  r38.set("questionNumber", 4);
  r38.set("question", "What is mAP in object detection?");
  r38.set("options", ["Mean Average Precision - average of AP across all classes and IoU thresholds","Maximum Accuracy Point","Mean Activation Parameter","Model Accuracy Precision"]);
  r38.set("correctAnswer", "Mean Average Precision - average of AP across all classes and IoU thresholds");
  r38.set("explanation", "Answer: Mean Average Precision - average of AP across all classes and IoU thresholds");
  try { app.save(r38); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r39 = new Record(collection);
  r39.set("careerSlug", "computer-vision-engineer");
  r39.set("difficulty", "Medium");
  r39.set("questionNumber", 5);
  r39.set("question", "What is optical flow?");
  r39.set("options", ["Pattern of apparent motion of objects between consecutive frames","Camera lens light flow","Data flow in a vision pipeline","A type of image filter"]);
  r39.set("correctAnswer", "Pattern of apparent motion of objects between consecutive frames");
  r39.set("explanation", "Answer: Pattern of apparent motion of objects between consecutive frames");
  try { app.save(r39); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r40 = new Record(collection);
  r40.set("careerSlug", "computer-vision-engineer");
  r40.set("difficulty", "Hard");
  r40.set("questionNumber", 1);
  r40.set("question", "What is NeRF?");
  r40.set("options", ["Neural Radiance Field - represents 3D scene as neural network for novel view synthesis","Neural Edge Recognition Filter","A fast rendering algorithm","A 3D dataset format"]);
  r40.set("correctAnswer", "Neural Radiance Field - represents 3D scene as neural network for novel view synthesis");
  r40.set("explanation", "Answer: Neural Radiance Field - represents 3D scene as neural network for novel view synthesis");
  try { app.save(r40); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r41 = new Record(collection);
  r41.set("careerSlug", "computer-vision-engineer");
  r41.set("difficulty", "Hard");
  r41.set("questionNumber", 2);
  r41.set("question", "What is contrastive self-supervised learning?");
  r41.set("options", ["Learning representations by bringing similar samples closer and pushing different samples apart without labels","Supervised contrastive training","A fine-tuning technique","A clustering method"]);
  r41.set("correctAnswer", "Learning representations by bringing similar samples closer and pushing different samples apart without labels");
  r41.set("explanation", "Answer: Learning representations by bringing similar samples closer and pushing different samples apart without labels");
  try { app.save(r41); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r42 = new Record(collection);
  r42.set("careerSlug", "computer-vision-engineer");
  r42.set("difficulty", "Hard");
  r42.set("questionNumber", 3);
  r42.set("question", "What is TensorRT used for?");
  r42.set("options", ["NVIDIA's SDK for optimizing and deploying deep learning models for fast inference on GPU","Training deep learning models","A dataset annotation tool","A model evaluation framework"]);
  r42.set("correctAnswer", "NVIDIA's SDK for optimizing and deploying deep learning models for fast inference on GPU");
  r42.set("explanation", "Answer: NVIDIA's SDK for optimizing and deploying deep learning models for fast inference on GPU");
  try { app.save(r42); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r43 = new Record(collection);
  r43.set("careerSlug", "computer-vision-engineer");
  r43.set("difficulty", "Hard");
  r43.set("questionNumber", 4);
  r43.set("question", "What is the SAM (Segment Anything Model)?");
  r43.set("options", ["Meta's foundation model for zero-shot segmentation of any object from prompts","A semantic segmentation model for specific domains","A data annotation tool","A video segmentation model only"]);
  r43.set("correctAnswer", "Meta's foundation model for zero-shot segmentation of any object from prompts");
  r43.set("explanation", "Answer: Meta's foundation model for zero-shot segmentation of any object from prompts");
  try { app.save(r43); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r44 = new Record(collection);
  r44.set("careerSlug", "computer-vision-engineer");
  r44.set("difficulty", "Hard");
  r44.set("questionNumber", 5);
  r44.set("question", "What is 3D Gaussian Splatting?");
  r44.set("options", ["Novel 3D scene representation using Gaussian primitives for real-time rendering and reconstruction","A point cloud visualization","A NeRF improvement","A depth estimation technique"]);
  r44.set("correctAnswer", "Novel 3D scene representation using Gaussian primitives for real-time rendering and reconstruction");
  r44.set("explanation", "Answer: Novel 3D scene representation using Gaussian primitives for real-time rendering and reconstruction");
  try { app.save(r44); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r45 = new Record(collection);
  r45.set("careerSlug", "natural-language-processing-nlp-engineer");
  r45.set("difficulty", "Basic");
  r45.set("questionNumber", 1);
  r45.set("question", "What is NLP?");
  r45.set("options", ["Natural Language Processing - enabling computers to understand human language","Numerical Learning Pipeline","Network Layer Protocol","Natural Logic Programming"]);
  r45.set("correctAnswer", "Natural Language Processing - enabling computers to understand human language");
  r45.set("explanation", "Answer: Natural Language Processing - enabling computers to understand human language");
  try { app.save(r45); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r46 = new Record(collection);
  r46.set("careerSlug", "natural-language-processing-nlp-engineer");
  r46.set("difficulty", "Basic");
  r46.set("questionNumber", 2);
  r46.set("question", "What is tokenization?");
  r46.set("options", ["Breaking text into smaller units (words, subwords, characters)","Encrypting text","Compressing text","Translating text"]);
  r46.set("correctAnswer", "Breaking text into smaller units (words, subwords, characters)");
  r46.set("explanation", "Answer: Breaking text into smaller units (words, subwords, characters)");
  try { app.save(r46); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r47 = new Record(collection);
  r47.set("careerSlug", "natural-language-processing-nlp-engineer");
  r47.set("difficulty", "Basic");
  r47.set("questionNumber", 3);
  r47.set("question", "What is BERT?");
  r47.set("options", ["Bidirectional Encoder Representations from Transformers","Basic Encoder for Recursive Text","Bidirectional Efficient Recurrent Transformer","Binary Encoded Representation Technique"]);
  r47.set("correctAnswer", "Bidirectional Encoder Representations from Transformers");
  r47.set("explanation", "Answer: Bidirectional Encoder Representations from Transformers");
  try { app.save(r47); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r48 = new Record(collection);
  r48.set("careerSlug", "natural-language-processing-nlp-engineer");
  r48.set("difficulty", "Basic");
  r48.set("questionNumber", 4);
  r48.set("question", "What is sentiment analysis?");
  r48.set("options", ["Determining emotional tone (positive/negative/neutral) of text","Analyzing sensory data","Text summarization","Language translation"]);
  r48.set("correctAnswer", "Determining emotional tone (positive/negative/neutral) of text");
  r48.set("explanation", "Answer: Determining emotional tone (positive/negative/neutral) of text");
  try { app.save(r48); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r49 = new Record(collection);
  r49.set("careerSlug", "natural-language-processing-nlp-engineer");
  r49.set("difficulty", "Basic");
  r49.set("questionNumber", 5);
  r49.set("question", "What is TF-IDF?");
  r49.set("options", ["Term Frequency-Inverse Document Frequency - measures word importance in documents","Text Frequency Inversion Decoder","Token Frequency Inverse Distribution","Text Feature Index Detector"]);
  r49.set("correctAnswer", "Term Frequency-Inverse Document Frequency - measures word importance in documents");
  r49.set("explanation", "Answer: Term Frequency-Inverse Document Frequency - measures word importance in documents");
  try { app.save(r49); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r50 = new Record(collection);
  r50.set("careerSlug", "natural-language-processing-nlp-engineer");
  r50.set("difficulty", "Medium");
  r50.set("questionNumber", 1);
  r50.set("question", "What is the difference between stemming and lemmatization?");
  r50.set("options", ["Stemming cuts word to root (may not be real word); lemmatization returns valid base form","Lemmatization cuts to root; stemming returns valid form","They are identical","Stemming is more accurate"]);
  r50.set("correctAnswer", "Stemming cuts word to root (may not be real word); lemmatization returns valid base form");
  r50.set("explanation", "Answer: Stemming cuts word to root (may not be real word); lemmatization returns valid base form");
  try { app.save(r50); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r51 = new Record(collection);
  r51.set("careerSlug", "natural-language-processing-nlp-engineer");
  r51.set("difficulty", "Medium");
  r51.set("questionNumber", 2);
  r51.set("question", "What is a bi-encoder vs cross-encoder?");
  r51.set("options", ["Bi-encoder encodes query and doc separately for fast retrieval; cross-encoder jointly processes for accuracy","Cross-encoder is faster; bi-encoder is more accurate","They are identical","Bi-encoder is only for multilingual tasks"]);
  r51.set("correctAnswer", "Bi-encoder encodes query and doc separately for fast retrieval; cross-encoder jointly processes for accuracy");
  r51.set("explanation", "Answer: Bi-encoder encodes query and doc separately for fast retrieval; cross-encoder jointly processes for accuracy");
  try { app.save(r51); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r52 = new Record(collection);
  r52.set("careerSlug", "natural-language-processing-nlp-engineer");
  r52.set("difficulty", "Medium");
  r52.set("questionNumber", 3);
  r52.set("question", "What is extractive vs abstractive summarization?");
  r52.set("options", ["Extractive selects existing sentences; abstractive generates new text capturing meaning","Abstractive selects existing sentences; extractive generates new text","They are identical","Extractive is always better"]);
  r52.set("correctAnswer", "Extractive selects existing sentences; abstractive generates new text capturing meaning");
  r52.set("explanation", "Answer: Extractive selects existing sentences; abstractive generates new text capturing meaning");
  try { app.save(r52); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r53 = new Record(collection);
  r53.set("careerSlug", "natural-language-processing-nlp-engineer");
  r53.set("difficulty", "Medium");
  r53.set("questionNumber", 4);
  r53.set("question", "What is masked language modeling in BERT?");
  r53.set("options", ["Predicting randomly masked tokens to learn bidirectional context","Masking sensitive information","A data privacy technique","A text compression method"]);
  r53.set("correctAnswer", "Predicting randomly masked tokens to learn bidirectional context");
  r53.set("explanation", "Answer: Predicting randomly masked tokens to learn bidirectional context");
  try { app.save(r53); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r54 = new Record(collection);
  r54.set("careerSlug", "natural-language-processing-nlp-engineer");
  r54.set("difficulty", "Medium");
  r54.set("questionNumber", 5);
  r54.set("question", "What is perplexity in language models?");
  r54.set("options", ["Measure of how well a language model predicts a sample - lower is better","Model confusion during training","Number of vocabulary tokens","Training loss metric"]);
  r54.set("correctAnswer", "Measure of how well a language model predicts a sample - lower is better");
  r54.set("explanation", "Answer: Measure of how well a language model predicts a sample - lower is better");
  try { app.save(r54); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r55 = new Record(collection);
  r55.set("careerSlug", "natural-language-processing-nlp-engineer");
  r55.set("difficulty", "Hard");
  r55.set("questionNumber", 1);
  r55.set("question", "What is the difference between GPT (decoder-only) and BERT (encoder-only) architectures?");
  r55.set("options", ["GPT uses causal attention for generation; BERT uses bidirectional attention for understanding","BERT is for generation; GPT is for understanding","They use the same attention","GPT is bidirectional; BERT is causal"]);
  r55.set("correctAnswer", "GPT uses causal attention for generation; BERT uses bidirectional attention for understanding");
  r55.set("explanation", "Answer: GPT uses causal attention for generation; BERT uses bidirectional attention for understanding");
  try { app.save(r55); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r56 = new Record(collection);
  r56.set("careerSlug", "natural-language-processing-nlp-engineer");
  r56.set("difficulty", "Hard");
  r56.set("questionNumber", 2);
  r56.set("question", "What is prefix tuning?");
  r56.set("options", ["Adding trainable prefix tokens to input while keeping model frozen for efficient fine-tuning","Fine-tuning only the first layers","A prompt engineering technique","Adding a classification head"]);
  r56.set("correctAnswer", "Adding trainable prefix tokens to input while keeping model frozen for efficient fine-tuning");
  r56.set("explanation", "Answer: Adding trainable prefix tokens to input while keeping model frozen for efficient fine-tuning");
  try { app.save(r56); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r57 = new Record(collection);
  r57.set("careerSlug", "natural-language-processing-nlp-engineer");
  r57.set("difficulty", "Hard");
  r57.set("questionNumber", 3);
  r57.set("question", "What is back translation for data augmentation?");
  r57.set("options", ["Translating text to another language then back to generate paraphrases","Reversing translation pipeline","A translation evaluation technique","Training on multilingual data"]);
  r57.set("correctAnswer", "Translating text to another language then back to generate paraphrases");
  r57.set("explanation", "Answer: Translating text to another language then back to generate paraphrases");
  try { app.save(r57); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r58 = new Record(collection);
  r58.set("careerSlug", "natural-language-processing-nlp-engineer");
  r58.set("difficulty", "Hard");
  r58.set("questionNumber", 4);
  r58.set("question", "What is a CRF (Conditional Random Field) used for in NLP?");
  r58.set("options", ["Sequence labeling considering dependencies between output labels (e.g., NER)","Text classification","Language modeling","Machine translation"]);
  r58.set("correctAnswer", "Sequence labeling considering dependencies between output labels (e.g., NER)");
  r58.set("explanation", "Answer: Sequence labeling considering dependencies between output labels (e.g., NER)");
  try { app.save(r58); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r59 = new Record(collection);
  r59.set("careerSlug", "natural-language-processing-nlp-engineer");
  r59.set("difficulty", "Hard");
  r59.set("questionNumber", 5);
  r59.set("question", "What is in-context learning?");
  r59.set("options", ["LLM adapts to task from examples in the prompt without gradient updates","Training within the context window","A fine-tuning technique","A RAG strategy"]);
  r59.set("correctAnswer", "LLM adapts to task from examples in the prompt without gradient updates");
  r59.set("explanation", "Answer: LLM adapts to task from examples in the prompt without gradient updates");
  try { app.save(r59); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r60 = new Record(collection);
  r60.set("careerSlug", "penetration-tester-ethical-hacker");
  r60.set("difficulty", "Basic");
  r60.set("questionNumber", 1);
  r60.set("question", "What is penetration testing?");
  r60.set("options", ["Authorized simulated attack to find and report security vulnerabilities","Unauthorized hacking","Vulnerability scanning only","Security training"]);
  r60.set("correctAnswer", "Authorized simulated attack to find and report security vulnerabilities");
  r60.set("explanation", "Answer: Authorized simulated attack to find and report security vulnerabilities");
  try { app.save(r60); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r61 = new Record(collection);
  r61.set("careerSlug", "penetration-tester-ethical-hacker");
  r61.set("difficulty", "Basic");
  r61.set("questionNumber", 2);
  r61.set("question", "What is Nmap used for?");
  r61.set("options", ["Network scanning and port discovery","Password cracking","Web application testing","Malware analysis"]);
  r61.set("correctAnswer", "Network scanning and port discovery");
  r61.set("explanation", "Answer: Network scanning and port discovery");
  try { app.save(r61); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r62 = new Record(collection);
  r62.set("careerSlug", "penetration-tester-ethical-hacker");
  r62.set("difficulty", "Basic");
  r62.set("questionNumber", 3);
  r62.set("question", "What is a reverse shell?");
  r62.set("options", ["Target machine connects back to attacker's machine giving remote access","Attacker connecting to target","A shell running in reverse order","A firewall rule"]);
  r62.set("correctAnswer", "Target machine connects back to attacker's machine giving remote access");
  r62.set("explanation", "Answer: Target machine connects back to attacker's machine giving remote access");
  try { app.save(r62); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r63 = new Record(collection);
  r63.set("careerSlug", "penetration-tester-ethical-hacker");
  r63.set("difficulty", "Basic");
  r63.set("questionNumber", 4);
  r63.set("question", "What is Kali Linux?");
  r63.set("options", ["Linux distribution pre-loaded with security and penetration testing tools","A hacking operating system for illegal use","A type of firewall","A malware analysis tool"]);
  r63.set("correctAnswer", "Linux distribution pre-loaded with security and penetration testing tools");
  r63.set("explanation", "Answer: Linux distribution pre-loaded with security and penetration testing tools");
  try { app.save(r63); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r64 = new Record(collection);
  r64.set("careerSlug", "penetration-tester-ethical-hacker");
  r64.set("difficulty", "Basic");
  r64.set("questionNumber", 5);
  r64.set("question", "What is Burp Suite?");
  r64.set("options", ["Web application security testing proxy and toolkit","A network scanner","A password manager","A SIEM tool"]);
  r64.set("correctAnswer", "Web application security testing proxy and toolkit");
  r64.set("explanation", "Answer: Web application security testing proxy and toolkit");
  try { app.save(r64); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r65 = new Record(collection);
  r65.set("careerSlug", "penetration-tester-ethical-hacker");
  r65.set("difficulty", "Medium");
  r65.set("questionNumber", 1);
  r65.set("question", "What is Kerberoasting?");
  r65.set("options", ["Requesting service tickets and cracking them offline to get service account passwords","Exploiting Kerberos servers directly","A network attack on authentication","A password spraying technique"]);
  r65.set("correctAnswer", "Requesting service tickets and cracking them offline to get service account passwords");
  r65.set("explanation", "Answer: Requesting service tickets and cracking them offline to get service account passwords");
  try { app.save(r65); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r66 = new Record(collection);
  r66.set("careerSlug", "penetration-tester-ethical-hacker");
  r66.set("difficulty", "Medium");
  r66.set("questionNumber", 2);
  r66.set("question", "What is SSRF?");
  r66.set("options", ["Server-Side Request Forgery - making server issue requests to internal resources","Same-Site Request Forgery","Secure Socket Request Framework","Server Security Response Filter"]);
  r66.set("correctAnswer", "Server-Side Request Forgery - making server issue requests to internal resources");
  r66.set("explanation", "Answer: Server-Side Request Forgery - making server issue requests to internal resources");
  try { app.save(r66); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r67 = new Record(collection);
  r67.set("careerSlug", "penetration-tester-ethical-hacker");
  r67.set("difficulty", "Medium");
  r67.set("questionNumber", 3);
  r67.set("question", "What is BloodHound?");
  r67.set("options", ["Active Directory attack path analysis tool that maps privilege escalation paths","A network monitoring tool","A malware analysis sandbox","A password cracker"]);
  r67.set("correctAnswer", "Active Directory attack path analysis tool that maps privilege escalation paths");
  r67.set("explanation", "Answer: Active Directory attack path analysis tool that maps privilege escalation paths");
  try { app.save(r67); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r68 = new Record(collection);
  r68.set("careerSlug", "penetration-tester-ethical-hacker");
  r68.set("difficulty", "Medium");
  r68.set("questionNumber", 4);
  r68.set("question", "What is IDOR?");
  r68.set("options", ["Insecure Direct Object Reference - accessing other users' objects by changing identifier","Internal Database Object Reference","Input Data Override Response","Indirect Data Object Routing"]);
  r68.set("correctAnswer", "Insecure Direct Object Reference - accessing other users' objects by changing identifier");
  r68.set("explanation", "Answer: Insecure Direct Object Reference - accessing other users' objects by changing identifier");
  try { app.save(r68); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r69 = new Record(collection);
  r69.set("careerSlug", "penetration-tester-ethical-hacker");
  r69.set("difficulty", "Medium");
  r69.set("questionNumber", 5);
  r69.set("question", "What is the difference between black box and white box pen testing?");
  r69.set("options", ["Black box: no prior knowledge; white box: full access to code, architecture, credentials","White box: no prior knowledge; black box: full access","They are identical","Black box is always better"]);
  r69.set("correctAnswer", "Black box: no prior knowledge; white box: full access to code, architecture, credentials");
  r69.set("explanation", "Answer: Black box: no prior knowledge; white box: full access to code, architecture, credentials");
  try { app.save(r69); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r70 = new Record(collection);
  r70.set("careerSlug", "penetration-tester-ethical-hacker");
  r70.set("difficulty", "Hard");
  r70.set("questionNumber", 1);
  r70.set("question", "What is DCSync attack?");
  r70.set("options", ["Mimicking a domain controller to request password hashes using replication protocols","Syncing domain controllers","A network scanning technique","A lateral movement method"]);
  r70.set("correctAnswer", "Mimicking a domain controller to request password hashes using replication protocols");
  r70.set("explanation", "Answer: Mimicking a domain controller to request password hashes using replication protocols");
  try { app.save(r70); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r71 = new Record(collection);
  r71.set("careerSlug", "penetration-tester-ethical-hacker");
  r71.set("difficulty", "Hard");
  r71.set("questionNumber", 2);
  r71.set("question", "What is an NTLM relay attack?");
  r71.set("options", ["Intercepting NTLM authentication and relaying it to authenticate to another service","Cracking NTLM hashes offline","Brute-forcing NTLM passwords","Exploiting NTLM encryption weakness"]);
  r71.set("correctAnswer", "Intercepting NTLM authentication and relaying it to authenticate to another service");
  r71.set("explanation", "Answer: Intercepting NTLM authentication and relaying it to authenticate to another service");
  try { app.save(r71); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r72 = new Record(collection);
  r72.set("careerSlug", "penetration-tester-ethical-hacker");
  r72.set("difficulty", "Hard");
  r72.set("questionNumber", 3);
  r72.set("question", "What is AS-REP Roasting?");
  r72.set("options", ["Targeting accounts without Kerberos pre-authentication required, stealing and cracking their AS-REP hashes","A variant of Kerberoasting targeting service tickets","An LDAP injection attack","A Domain Controller exploit"]);
  r72.set("correctAnswer", "Targeting accounts without Kerberos pre-authentication required, stealing and cracking their AS-REP hashes");
  r72.set("explanation", "Answer: Targeting accounts without Kerberos pre-authentication required, stealing and cracking their AS-REP hashes");
  try { app.save(r72); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r73 = new Record(collection);
  r73.set("careerSlug", "penetration-tester-ethical-hacker");
  r73.set("difficulty", "Hard");
  r73.set("questionNumber", 4);
  r73.set("question", "What is a blind SQL injection?");
  r73.set("options", ["SQL injection where no direct output shown; inferred from boolean conditions or time delays","SQL injection with no impact","SQL injection that only reads data","A less dangerous SQL injection"]);
  r73.set("correctAnswer", "SQL injection where no direct output shown; inferred from boolean conditions or time delays");
  r73.set("explanation", "Answer: SQL injection where no direct output shown; inferred from boolean conditions or time delays");
  try { app.save(r73); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r74 = new Record(collection);
  r74.set("careerSlug", "penetration-tester-ethical-hacker");
  r74.set("difficulty", "Hard");
  r74.set("questionNumber", 5);
  r74.set("question", "What is pivoting in penetration testing?");
  r74.set("options", ["Using a compromised host as relay to reach otherwise inaccessible network segments","Changing attack vector","Switching between user accounts","A social engineering technique"]);
  r74.set("correctAnswer", "Using a compromised host as relay to reach otherwise inaccessible network segments");
  r74.set("explanation", "Answer: Using a compromised host as relay to reach otherwise inaccessible network segments");
  try { app.save(r74); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r75 = new Record(collection);
  r75.set("careerSlug", "technical-program-manager-tpm");
  r75.set("difficulty", "Basic");
  r75.set("questionNumber", 1);
  r75.set("question", "What is a Technical Program Manager?");
  r75.set("options", ["Drives complex technical programs across multiple teams to deliver results","A software engineer who manages projects","A product manager for technical tools","An engineering manager"]);
  r75.set("correctAnswer", "Drives complex technical programs across multiple teams to deliver results");
  r75.set("explanation", "Answer: Drives complex technical programs across multiple teams to deliver results");
  try { app.save(r75); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r76 = new Record(collection);
  r76.set("careerSlug", "technical-program-manager-tpm");
  r76.set("difficulty", "Basic");
  r76.set("questionNumber", 2);
  r76.set("question", "What is a critical path in project management?");
  r76.set("options", ["Longest sequence of dependent tasks determining minimum project duration","Most important feature","Fastest path to delivery","A dependency diagram"]);
  r76.set("correctAnswer", "Longest sequence of dependent tasks determining minimum project duration");
  r76.set("explanation", "Answer: Longest sequence of dependent tasks determining minimum project duration");
  try { app.save(r76); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r77 = new Record(collection);
  r77.set("careerSlug", "technical-program-manager-tpm");
  r77.set("difficulty", "Basic");
  r77.set("questionNumber", 3);
  r77.set("question", "What is a RACI matrix?");
  r77.set("options", ["Responsible, Accountable, Consulted, Informed - clarifies roles in a project","A risk assessment tool","A roadmap template","A cost analysis model"]);
  r77.set("correctAnswer", "Responsible, Accountable, Consulted, Informed - clarifies roles in a project");
  r77.set("explanation", "Answer: Responsible, Accountable, Consulted, Informed - clarifies roles in a project");
  try { app.save(r77); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r78 = new Record(collection);
  r78.set("careerSlug", "technical-program-manager-tpm");
  r78.set("difficulty", "Basic");
  r78.set("questionNumber", 4);
  r78.set("question", "What is scope creep?");
  r78.set("options", ["Uncontrolled expansion of project scope beyond original agreement","Slow project progress","Budget overrun","Team attrition"]);
  r78.set("correctAnswer", "Uncontrolled expansion of project scope beyond original agreement");
  r78.set("explanation", "Answer: Uncontrolled expansion of project scope beyond original agreement");
  try { app.save(r78); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r79 = new Record(collection);
  r79.set("careerSlug", "technical-program-manager-tpm");
  r79.set("difficulty", "Basic");
  r79.set("questionNumber", 5);
  r79.set("question", "What is a risk register?");
  r79.set("options", ["Document tracking identified risks, likelihood, impact, and mitigation plans","A log of incidents","A bug tracker","A change log"]);
  r79.set("correctAnswer", "Document tracking identified risks, likelihood, impact, and mitigation plans");
  r79.set("explanation", "Answer: Document tracking identified risks, likelihood, impact, and mitigation plans");
  try { app.save(r79); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r80 = new Record(collection);
  r80.set("careerSlug", "technical-program-manager-tpm");
  r80.set("difficulty", "Medium");
  r80.set("questionNumber", 1);
  r80.set("question", "How does a TPM differ from a PM?");
  r80.set("options", ["TPM focuses on technical execution and cross-team delivery; PM focuses on product vision and strategy","PM focuses on execution; TPM focuses on strategy","They are identical","TPM manages engineers; PM manages designers"]);
  r80.set("correctAnswer", "TPM focuses on technical execution and cross-team delivery; PM focuses on product vision and strategy");
  r80.set("explanation", "Answer: TPM focuses on technical execution and cross-team delivery; PM focuses on product vision and strategy");
  try { app.save(r80); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r81 = new Record(collection);
  r81.set("careerSlug", "technical-program-manager-tpm");
  r81.set("difficulty", "Medium");
  r81.set("questionNumber", 2);
  r81.set("question", "What is influencing without authority?");
  r81.set("options", ["Driving alignment and action through relationships, data, and communication without direct reporting authority","A leadership technique for managers","A conflict avoidance strategy","Remote management"]);
  r81.set("correctAnswer", "Driving alignment and action through relationships, data, and communication without direct reporting authority");
  r81.set("explanation", "Answer: Driving alignment and action through relationships, data, and communication without direct reporting authority");
  try { app.save(r81); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r82 = new Record(collection);
  r82.set("careerSlug", "technical-program-manager-tpm");
  r82.set("difficulty", "Medium");
  r82.set("questionNumber", 3);
  r82.set("question", "What is SAFe?");
  r82.set("options", ["Scaled Agile Framework for coordinating agile across large organizations","A project management tool","A security framework","A software architecture pattern"]);
  r82.set("correctAnswer", "Scaled Agile Framework for coordinating agile across large organizations");
  r82.set("explanation", "Answer: Scaled Agile Framework for coordinating agile across large organizations");
  try { app.save(r82); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r83 = new Record(collection);
  r83.set("careerSlug", "technical-program-manager-tpm");
  r83.set("difficulty", "Medium");
  r83.set("questionNumber", 4);
  r83.set("question", "What is a launch readiness review?");
  r83.set("options", ["Structured assessment ensuring all requirements met before releasing to production","A product design review","A code review","A security audit"]);
  r83.set("correctAnswer", "Structured assessment ensuring all requirements met before releasing to production");
  r83.set("explanation", "Answer: Structured assessment ensuring all requirements met before releasing to production");
  try { app.save(r83); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r84 = new Record(collection);
  r84.set("careerSlug", "technical-program-manager-tpm");
  r84.set("difficulty", "Medium");
  r84.set("questionNumber", 5);
  r84.set("question", "What is PI Planning in SAFe?");
  r84.set("options", ["Program Increment Planning - quarterly event where teams align on objectives and dependencies","Product Integration Planning","Project Iteration Planning","Priority Index Planning"]);
  r84.set("correctAnswer", "Program Increment Planning - quarterly event where teams align on objectives and dependencies");
  r84.set("explanation", "Answer: Program Increment Planning - quarterly event where teams align on objectives and dependencies");
  try { app.save(r84); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r85 = new Record(collection);
  r85.set("careerSlug", "technical-program-manager-tpm");
  r85.set("difficulty", "Hard");
  r85.set("questionNumber", 1);
  r85.set("question", "How do you manage a program with unclear requirements?");
  r85.set("options", ["Use discovery sprints, time-box ambiguity, drive stakeholder alignment on MVP, iterate with checkpoints","Wait for complete requirements before starting","Start coding and adjust later","Escalate immediately to leadership"]);
  r85.set("correctAnswer", "Use discovery sprints, time-box ambiguity, drive stakeholder alignment on MVP, iterate with checkpoints");
  r85.set("explanation", "Answer: Use discovery sprints, time-box ambiguity, drive stakeholder alignment on MVP, iterate with checkpoints");
  try { app.save(r85); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r86 = new Record(collection);
  r86.set("careerSlug", "technical-program-manager-tpm");
  r86.set("difficulty", "Hard");
  r86.set("questionNumber", 2);
  r86.set("question", "What is the difference between program and project management?");
  r86.set("options", ["Program manages related projects for strategic business outcome; project is temporary with specific deliverable","Project manages programs; program is one project","They are identical","Program is longer; project is shorter"]);
  r86.set("correctAnswer", "Program manages related projects for strategic business outcome; project is temporary with specific deliverable");
  r86.set("explanation", "Answer: Program manages related projects for strategic business outcome; project is temporary with specific deliverable");
  try { app.save(r86); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r87 = new Record(collection);
  r87.set("careerSlug", "technical-program-manager-tpm");
  r87.set("difficulty", "Hard");
  r87.set("questionNumber", 3);
  r87.set("question", "How do you handle conflicting priorities across teams in a program?");
  r87.set("options", ["Align on shared OKRs, use data to prioritize, escalate with options and recommendation, get executive alignment","Force teams to comply","Delay lower priority teams","Ignore conflicts and hope they resolve"]);
  r87.set("correctAnswer", "Align on shared OKRs, use data to prioritize, escalate with options and recommendation, get executive alignment");
  r87.set("explanation", "Answer: Align on shared OKRs, use data to prioritize, escalate with options and recommendation, get executive alignment");
  try { app.save(r87); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r88 = new Record(collection);
  r88.set("careerSlug", "technical-program-manager-tpm");
  r88.set("difficulty", "Hard");
  r88.set("questionNumber", 4);
  r88.set("question", "What is a program health metric?");
  r88.set("options", ["Quantitative measure tracking program delivery, risk, quality, and team health","A server health metric","A product usage metric","An employee satisfaction score"]);
  r88.set("correctAnswer", "Quantitative measure tracking program delivery, risk, quality, and team health");
  r88.set("explanation", "Answer: Quantitative measure tracking program delivery, risk, quality, and team health");
  try { app.save(r88); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r89 = new Record(collection);
  r89.set("careerSlug", "technical-program-manager-tpm");
  r89.set("difficulty", "Hard");
  r89.set("questionNumber", 5);
  r89.set("question", "What is a technical debt program?");
  r89.set("options", ["Structured initiative to quantify, prioritize, and systematically reduce accumulated technical debt","Paying off vendor invoices","A security remediation program","A performance optimization effort"]);
  r89.set("correctAnswer", "Structured initiative to quantify, prioritize, and systematically reduce accumulated technical debt");
  r89.set("explanation", "Answer: Structured initiative to quantify, prioritize, and systematically reduce accumulated technical debt");
  try { app.save(r89); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r90 = new Record(collection);
  r90.set("careerSlug", "gis-geospatial-engineer");
  r90.set("difficulty", "Basic");
  r90.set("questionNumber", 1);
  r90.set("question", "What is GIS?");
  r90.set("options", ["Geographic Information System for capturing, storing, and analyzing spatial data","A GPS navigation system","A satellite communications system","A mapping programming language"]);
  r90.set("correctAnswer", "Geographic Information System for capturing, storing, and analyzing spatial data");
  r90.set("explanation", "Answer: Geographic Information System for capturing, storing, and analyzing spatial data");
  try { app.save(r90); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r91 = new Record(collection);
  r91.set("careerSlug", "gis-geospatial-engineer");
  r91.set("difficulty", "Basic");
  r91.set("questionNumber", 2);
  r91.set("question", "What is the difference between vector and raster data?");
  r91.set("options", ["Vector uses points/lines/polygons; raster uses grid of pixels/cells","Raster uses points/lines; vector uses pixels","They are the same","Vector is for images; raster is for roads"]);
  r91.set("correctAnswer", "Vector uses points/lines/polygons; raster uses grid of pixels/cells");
  r91.set("explanation", "Answer: Vector uses points/lines/polygons; raster uses grid of pixels/cells");
  try { app.save(r91); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r92 = new Record(collection);
  r92.set("careerSlug", "gis-geospatial-engineer");
  r92.set("difficulty", "Basic");
  r92.set("questionNumber", 3);
  r92.set("question", "What is GeoJSON?");
  r92.set("options", ["JSON format for encoding geographic data structures","A GIS database format","A satellite data format","A coordinate system"]);
  r92.set("correctAnswer", "JSON format for encoding geographic data structures");
  r92.set("explanation", "Answer: JSON format for encoding geographic data structures");
  try { app.save(r92); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r93 = new Record(collection);
  r93.set("careerSlug", "gis-geospatial-engineer");
  r93.set("difficulty", "Basic");
  r93.set("questionNumber", 4);
  r93.set("question", "What is PostGIS?");
  r93.set("options", ["Spatial extension for PostgreSQL enabling geographic queries","A GIS desktop application","A satellite imaging tool","A mapping API"]);
  r93.set("correctAnswer", "Spatial extension for PostgreSQL enabling geographic queries");
  r93.set("explanation", "Answer: Spatial extension for PostgreSQL enabling geographic queries");
  try { app.save(r93); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r94 = new Record(collection);
  r94.set("careerSlug", "gis-geospatial-engineer");
  r94.set("difficulty", "Basic");
  r94.set("questionNumber", 5);
  r94.set("question", "What is NDVI?");
  r94.set("options", ["Normalized Difference Vegetation Index - measures vegetation density from satellite imagery","A network protocol","A data visualization index","A data compression format"]);
  r94.set("correctAnswer", "Normalized Difference Vegetation Index - measures vegetation density from satellite imagery");
  r94.set("explanation", "Answer: Normalized Difference Vegetation Index - measures vegetation density from satellite imagery");
  try { app.save(r94); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r95 = new Record(collection);
  r95.set("careerSlug", "gis-geospatial-engineer");
  r95.set("difficulty", "Medium");
  r95.set("questionNumber", 1);
  r95.set("question", "What is a spatial join?");
  r95.set("options", ["Joining datasets based on their spatial relationship (contains, intersects, within)","Joining databases geographically","A network join operation","A SQL join with coordinates"]);
  r95.set("correctAnswer", "Joining datasets based on their spatial relationship (contains, intersects, within)");
  r95.set("explanation", "Answer: Joining datasets based on their spatial relationship (contains, intersects, within)");
  try { app.save(r95); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r96 = new Record(collection);
  r96.set("careerSlug", "gis-geospatial-engineer");
  r96.set("difficulty", "Medium");
  r96.set("questionNumber", 2);
  r96.set("question", "What is geocoding?");
  r96.set("options", ["Converting an address to geographic coordinates (latitude/longitude)","Encoding geographic data","Converting coordinates to address","A GPS accuracy technique"]);
  r96.set("correctAnswer", "Converting an address to geographic coordinates (latitude/longitude)");
  r96.set("explanation", "Answer: Converting an address to geographic coordinates (latitude/longitude)");
  try { app.save(r96); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r97 = new Record(collection);
  r97.set("careerSlug", "gis-geospatial-engineer");
  r97.set("difficulty", "Medium");
  r97.set("questionNumber", 3);
  r97.set("question", "What is a tile map service?");
  r97.set("options", ["Web service providing pre-rendered map tiles for specific zoom levels and coordinates","A transportation routing service","A satellite data service","A coordinate conversion service"]);
  r97.set("correctAnswer", "Web service providing pre-rendered map tiles for specific zoom levels and coordinates");
  r97.set("explanation", "Answer: Web service providing pre-rendered map tiles for specific zoom levels and coordinates");
  try { app.save(r97); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r98 = new Record(collection);
  r98.set("careerSlug", "gis-geospatial-engineer");
  r98.set("difficulty", "Medium");
  r98.set("questionNumber", 4);
  r98.set("question", "What is spatial autocorrelation?");
  r98.set("options", ["Degree to which nearby locations have similar values (Tobler's first law of geography)","Random spatial distribution","A data compression technique","A routing algorithm"]);
  r98.set("correctAnswer", "Degree to which nearby locations have similar values (Tobler's first law of geography)");
  r98.set("explanation", "Answer: Degree to which nearby locations have similar values (Tobler's first law of geography)");
  try { app.save(r98); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r99 = new Record(collection);
  r99.set("careerSlug", "gis-geospatial-engineer");
  r99.set("difficulty", "Medium");
  r99.set("questionNumber", 5);
  r99.set("question", "What is an isochrone?");
  r99.set("options", ["Area reachable from a point within a given travel time","A contour line","A satellite orbit","A time zone boundary"]);
  r99.set("correctAnswer", "Area reachable from a point within a given travel time");
  r99.set("explanation", "Answer: Area reachable from a point within a given travel time");
  try { app.save(r99); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r100 = new Record(collection);
  r100.set("careerSlug", "gis-geospatial-engineer");
  r100.set("difficulty", "Hard");
  r100.set("questionNumber", 1);
  r100.set("question", "What is a Cloud Optimized GeoTIFF (COG)?");
  r100.set("options", ["GeoTIFF with internal organization allowing efficient HTTP range requests for cloud streaming","A compressed GeoTIFF","A satellite data format","A GIS database format"]);
  r100.set("correctAnswer", "GeoTIFF with internal organization allowing efficient HTTP range requests for cloud streaming");
  r100.set("explanation", "Answer: GeoTIFF with internal organization allowing efficient HTTP range requests for cloud streaming");
  try { app.save(r100); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r101 = new Record(collection);
  r101.set("careerSlug", "gis-geospatial-engineer");
  r101.set("difficulty", "Hard");
  r101.set("questionNumber", 2);
  r101.set("question", "What is kriging in geospatial analysis?");
  r101.set("options", ["Geostatistical interpolation using weighted surrounding measured values with spatial correlation","A satellite positioning technique","A routing algorithm","A coordinate transformation method"]);
  r101.set("correctAnswer", "Geostatistical interpolation using weighted surrounding measured values with spatial correlation");
  r101.set("explanation", "Answer: Geostatistical interpolation using weighted surrounding measured values with spatial correlation");
  try { app.save(r101); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r102 = new Record(collection);
  r102.set("careerSlug", "gis-geospatial-engineer");
  r102.set("difficulty", "Hard");
  r102.set("questionNumber", 3);
  r102.set("question", "What is Moran's I?");
  r102.set("options", ["Spatial autocorrelation statistic measuring clustering vs random vs dispersed spatial patterns","A satellite index","A GIS data format","A coordinate system"]);
  r102.set("correctAnswer", "Spatial autocorrelation statistic measuring clustering vs random vs dispersed spatial patterns");
  r102.set("explanation", "Answer: Spatial autocorrelation statistic measuring clustering vs random vs dispersed spatial patterns");
  try { app.save(r102); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r103 = new Record(collection);
  r103.set("careerSlug", "gis-geospatial-engineer");
  r103.set("difficulty", "Hard");
  r103.set("questionNumber", 4);
  r103.set("question", "What is STAC?");
  r103.set("options", ["SpatioTemporal Asset Catalog - standard for describing geospatial assets for discovery","A satellite tracking system","A geospatial database","A map tile format"]);
  r103.set("correctAnswer", "SpatioTemporal Asset Catalog - standard for describing geospatial assets for discovery");
  r103.set("explanation", "Answer: SpatioTemporal Asset Catalog - standard for describing geospatial assets for discovery");
  try { app.save(r103); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r104 = new Record(collection);
  r104.set("careerSlug", "gis-geospatial-engineer");
  r104.set("difficulty", "Hard");
  r104.set("questionNumber", 5);
  r104.set("question", "What is SAR imagery?");
  r104.set("options", ["Synthetic Aperture Radar - microwave-based imaging that works through clouds and at night","Satellite Aerial Reconnaissance","Spectral Analysis Raster","Spatial Accuracy Rating"]);
  r104.set("correctAnswer", "Synthetic Aperture Radar - microwave-based imaging that works through clouds and at night");
  r104.set("explanation", "Answer: Synthetic Aperture Radar - microwave-based imaging that works through clouds and at night");
  try { app.save(r104); } catch(err) { if (!err.message.includes("unique")) throw err; }
}, (app) => {});
