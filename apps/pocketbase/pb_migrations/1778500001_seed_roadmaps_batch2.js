/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerRoadmaps");

  const r0 = new Record(collection);
  r0.set("careerSlug", "embedded-systems-firmware-engineer");
  r0.set("phase", 1);
  r0.set("title", "C/C++ Programming");
  r0.set("duration", "8 weeks");
  r0.set("skills", ["C","C++","Pointers","Memory Management","Data Structures"]);
  r0.set("resources", ["CS50x - Harvard","Learn C - Learn-C.org"]);
  r0.set("projects", []);
  try { app.save(r0); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r1 = new Record(collection);
  r1.set("careerSlug", "embedded-systems-firmware-engineer");
  r1.set("phase", 2);
  r1.set("title", "Computer Architecture");
  r1.set("duration", "4 weeks");
  r1.set("skills", ["Computer Architecture","Assembly Basics","Registers","Memory Map"]);
  r1.set("resources", ["Nand to Tetris"]);
  r1.set("projects", []);
  try { app.save(r1); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r2 = new Record(collection);
  r2.set("careerSlug", "embedded-systems-firmware-engineer");
  r2.set("phase", 3);
  r2.set("title", "Microcontrollers & RTOS");
  r2.set("duration", "8 weeks");
  r2.set("skills", ["ARM Cortex-M","STM32","FreeRTOS","GPIO","UART","SPI","I2C"]);
  r2.set("resources", ["STM32 Bare Metal YouTube","FreeRTOS Docs"]);
  r2.set("projects", []);
  try { app.save(r2); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r3 = new Record(collection);
  r3.set("careerSlug", "embedded-systems-firmware-engineer");
  r3.set("phase", 4);
  r3.set("title", "Communication Protocols");
  r3.set("duration", "4 weeks");
  r3.set("skills", ["CAN bus","Modbus","MQTT","BLE","Zigbee"]);
  r3.set("resources", ["MQTT Essentials"]);
  r3.set("projects", []);
  try { app.save(r3); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r4 = new Record(collection);
  r4.set("careerSlug", "embedded-systems-firmware-engineer");
  r4.set("phase", 5);
  r4.set("title", "IoT & Edge Computing");
  r4.set("duration", "4 weeks");
  r4.set("skills", ["Raspberry Pi","ESP32","AWS IoT","OTA Updates"]);
  r4.set("resources", ["Raspberry Pi Foundation","ESP-IDF Docs"]);
  r4.set("projects", []);
  try { app.save(r4); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r5 = new Record(collection);
  r5.set("careerSlug", "data-scientist");
  r5.set("phase", 1);
  r5.set("title", "Statistics & Mathematics");
  r5.set("duration", "6 weeks");
  r5.set("skills", ["Probability","Statistics","Linear Algebra","Calculus"]);
  r5.set("resources", ["Khan Academy Statistics","StatQuest"]);
  r5.set("projects", []);
  try { app.save(r5); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r6 = new Record(collection);
  r6.set("careerSlug", "data-scientist");
  r6.set("phase", 2);
  r6.set("title", "Python & Data Tools");
  r6.set("duration", "6 weeks");
  r6.set("skills", ["Python","Pandas","NumPy","Matplotlib","Seaborn","Plotly"]);
  r6.set("resources", ["Kaggle Python","Kaggle Pandas"]);
  r6.set("projects", []);
  try { app.save(r6); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r7 = new Record(collection);
  r7.set("careerSlug", "data-scientist");
  r7.set("phase", 3);
  r7.set("title", "Machine Learning");
  r7.set("duration", "8 weeks");
  r7.set("skills", ["Scikit-learn","Feature Engineering","Model Selection","Evaluation"]);
  r7.set("resources", ["Andrew Ng ML Course","Kaggle ML Courses"]);
  r7.set("projects", []);
  try { app.save(r7); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r8 = new Record(collection);
  r8.set("careerSlug", "data-scientist");
  r8.set("phase", 4);
  r8.set("title", "SQL & Databases");
  r8.set("duration", "4 weeks");
  r8.set("skills", ["SQL","PostgreSQL","BigQuery"]);
  r8.set("resources", ["Mode SQL Tutorial","SQLZoo"]);
  r8.set("projects", []);
  try { app.save(r8); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r9 = new Record(collection);
  r9.set("careerSlug", "data-scientist");
  r9.set("phase", 5);
  r9.set("title", "Communication & Domain Knowledge");
  r9.set("duration", "4 weeks");
  r9.set("skills", ["Data Storytelling","Tableau/Power BI","A/B Testing","Business Acumen"]);
  r9.set("resources", ["Tableau Public (free)","Google Data Studio"]);
  r9.set("projects", []);
  try { app.save(r9); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r10 = new Record(collection);
  r10.set("careerSlug", "backend-engineer");
  r10.set("phase", 1);
  r10.set("title", "Programming Language");
  r10.set("duration", "6 weeks");
  r10.set("skills", ["Python or Go or Java or Node.js"]);
  r10.set("resources", ["Go Tour","Python Docs"]);
  r10.set("projects", []);
  try { app.save(r10); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r11 = new Record(collection);
  r11.set("careerSlug", "backend-engineer");
  r11.set("phase", 2);
  r11.set("title", "APIs & Web Frameworks");
  r11.set("duration", "6 weeks");
  r11.set("skills", ["REST API","GraphQL","FastAPI/Express/Spring/Gin","Authentication"]);
  r11.set("resources", ["FastAPI Docs","Express Docs"]);
  r11.set("projects", []);
  try { app.save(r11); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r12 = new Record(collection);
  r12.set("careerSlug", "backend-engineer");
  r12.set("phase", 3);
  r12.set("title", "Databases");
  r12.set("duration", "6 weeks");
  r12.set("skills", ["PostgreSQL","MongoDB","Redis","Database Design"]);
  r12.set("resources", ["PostgreSQL Tutorial"]);
  r12.set("projects", []);
  try { app.save(r12); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r13 = new Record(collection);
  r13.set("careerSlug", "backend-engineer");
  r13.set("phase", 4);
  r13.set("title", "System Design & Architecture");
  r13.set("duration", "6 weeks");
  r13.set("skills", ["Microservices","Message Queues","Caching","Scalability"]);
  r13.set("resources", ["System Design Primer"]);
  r13.set("projects", []);
  try { app.save(r13); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r14 = new Record(collection);
  r14.set("careerSlug", "backend-engineer");
  r14.set("phase", 5);
  r14.set("title", "DevOps & Deployment");
  r14.set("duration", "4 weeks");
  r14.set("skills", ["Docker","CI/CD","AWS Basics","Testing"]);
  r14.set("resources", ["Docker Docs"]);
  r14.set("projects", []);
  try { app.save(r14); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r15 = new Record(collection);
  r15.set("careerSlug", "mobile-app-developer-ios-android");
  r15.set("phase", 1);
  r15.set("title", "Choose Platform & Language");
  r15.set("duration", "2 weeks");
  r15.set("skills", ["Swift (iOS) or Kotlin (Android) or React Native or Flutter"]);
  r15.set("resources", ["Swift.org","Android Developers","Flutter Docs"]);
  r15.set("projects", []);
  try { app.save(r15); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r16 = new Record(collection);
  r16.set("careerSlug", "mobile-app-developer-ios-android");
  r16.set("phase", 2);
  r16.set("title", "UI Development");
  r16.set("duration", "6 weeks");
  r16.set("skills", ["SwiftUI/UIKit or Jetpack Compose or Flutter Widgets or React Native"]);
  r16.set("resources", ["SwiftUI Tutorials","Jetpack Compose"]);
  r16.set("projects", []);
  try { app.save(r16); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r17 = new Record(collection);
  r17.set("careerSlug", "mobile-app-developer-ios-android");
  r17.set("phase", 3);
  r17.set("title", "Networking & State Management");
  r17.set("duration", "6 weeks");
  r17.set("skills", ["REST APIs","State Management","Local Storage","Authentication"]);
  r17.set("resources", ["Hacking with Swift (free)","Android Codelabs"]);
  r17.set("projects", []);
  try { app.save(r17); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r18 = new Record(collection);
  r18.set("careerSlug", "mobile-app-developer-ios-android");
  r18.set("phase", 4);
  r18.set("title", "Advanced Features");
  r18.set("duration", "4 weeks");
  r18.set("skills", ["Push Notifications","Camera/GPS","Background Tasks","Animations"]);
  r18.set("resources", ["Firebase Free Tier"]);
  r18.set("projects", []);
  try { app.save(r18); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r19 = new Record(collection);
  r19.set("careerSlug", "mobile-app-developer-ios-android");
  r19.set("phase", 5);
  r19.set("title", "App Store & CI/CD");
  r19.set("duration", "2 weeks");
  r19.set("skills", ["App Store / Play Store Publishing","TestFlight","Fastlane"]);
  r19.set("resources", ["App Store Review Guidelines"]);
  r19.set("projects", []);
  try { app.save(r19); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r20 = new Record(collection);
  r20.set("careerSlug", "product-manager-technical");
  r20.set("phase", 1);
  r20.set("title", "Product Fundamentals");
  r20.set("duration", "4 weeks");
  r20.set("skills", ["Product Thinking","User Research","Market Analysis","Competitive Analysis"]);
  r20.set("resources", ["Lenny's Newsletter (free)","Product School Free Resources"]);
  r20.set("projects", []);
  try { app.save(r20); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r21 = new Record(collection);
  r21.set("careerSlug", "product-manager-technical");
  r21.set("phase", 2);
  r21.set("title", "Analytics & Data");
  r21.set("duration", "4 weeks");
  r21.set("skills", ["SQL","Google Analytics","Amplitude/Mixpanel","A/B Testing"]);
  r21.set("resources", ["Mode SQL Tutorial","Google Analytics Academy"]);
  r21.set("projects", []);
  try { app.save(r21); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r22 = new Record(collection);
  r22.set("careerSlug", "product-manager-technical");
  r22.set("phase", 3);
  r22.set("title", "Technical Skills");
  r22.set("duration", "4 weeks");
  r22.set("skills", ["APIs","System Design Basics","Engineering Concepts","Data Pipelines"]);
  r22.set("resources", ["How the Internet Works - Khan Academy"]);
  r22.set("projects", []);
  try { app.save(r22); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r23 = new Record(collection);
  r23.set("careerSlug", "product-manager-technical");
  r23.set("phase", 4);
  r23.set("title", "Strategy & Execution");
  r23.set("duration", "4 weeks");
  r23.set("skills", ["PRD Writing","OKRs","Roadmapping","Prioritization Frameworks"]);
  r23.set("resources", ["Reforge Free Content"]);
  r23.set("projects", []);
  try { app.save(r23); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r24 = new Record(collection);
  r24.set("careerSlug", "product-manager-technical");
  r24.set("phase", 5);
  r24.set("title", "Leadership & Communication");
  r24.set("duration", "4 weeks");
  r24.set("skills", ["Stakeholder Management","Storytelling","Negotiation","Cross-functional Leadership"]);
  r24.set("resources", ["First Round Review"]);
  r24.set("projects", []);
  try { app.save(r24); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r25 = new Record(collection);
  r25.set("careerSlug", "quantum-computing-engineer");
  r25.set("phase", 1);
  r25.set("title", "Mathematics Foundation");
  r25.set("duration", "12 weeks");
  r25.set("skills", ["Linear Algebra","Complex Numbers","Probability","Differential Equations"]);
  r25.set("resources", ["Khan Academy Linear Algebra","3Blue1Brown Linear Algebra"]);
  r25.set("projects", []);
  try { app.save(r25); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r26 = new Record(collection);
  r26.set("careerSlug", "quantum-computing-engineer");
  r26.set("phase", 2);
  r26.set("title", "Quantum Mechanics Basics");
  r26.set("duration", "8 weeks");
  r26.set("skills", ["Qubits","Superposition","Entanglement","Wave Functions","Dirac Notation"]);
  r26.set("resources", ["MIT Quantum Physics OCW","Quantum Country"]);
  r26.set("projects", []);
  try { app.save(r26); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r27 = new Record(collection);
  r27.set("careerSlug", "quantum-computing-engineer");
  r27.set("phase", 3);
  r27.set("title", "Quantum Computing Theory");
  r27.set("duration", "8 weeks");
  r27.set("skills", ["Quantum Gates","Quantum Circuits","Quantum Algorithms (Shor, Grover)","Quantum Error Correction"]);
  r27.set("resources", ["Qiskit Textbook","Nielsen & Chuang (QCQI)"]);
  r27.set("projects", []);
  try { app.save(r27); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r28 = new Record(collection);
  r28.set("careerSlug", "quantum-computing-engineer");
  r28.set("phase", 4);
  r28.set("title", "Quantum Programming");
  r28.set("duration", "8 weeks");
  r28.set("skills", ["Qiskit","Cirq","PennyLane","Q#","Quantum Simulation"]);
  r28.set("resources", ["Qiskit Tutorials","PennyLane Tutorials"]);
  r28.set("projects", []);
  try { app.save(r28); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r29 = new Record(collection);
  r29.set("careerSlug", "quantum-computing-engineer");
  r29.set("phase", 5);
  r29.set("title", "Quantum Applications");
  r29.set("duration", "6 weeks");
  r29.set("skills", ["Quantum Machine Learning","Quantum Optimization","Quantum Cryptography","NISQ Algorithms"]);
  r29.set("resources", ["IBM Quantum Experience"]);
  r29.set("projects", []);
  try { app.save(r29); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r30 = new Record(collection);
  r30.set("careerSlug", "ar-vr-engineer");
  r30.set("phase", 1);
  r30.set("title", "Programming Foundation");
  r30.set("duration", "6 weeks");
  r30.set("skills", ["C# or C++","Object-Oriented Programming","Linear Algebra for 3D"]);
  r30.set("resources", ["Unity Learn (free)"]);
  r30.set("projects", []);
  try { app.save(r30); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r31 = new Record(collection);
  r31.set("careerSlug", "ar-vr-engineer");
  r31.set("phase", 2);
  r31.set("title", "3D Graphics & Math");
  r31.set("duration", "6 weeks");
  r31.set("skills", ["Vectors","Matrices","Quaternions","Shaders","GLSL/HLSL"]);
  r31.set("resources", ["3Blue1Brown Linear Algebra"]);
  r31.set("projects", []);
  try { app.save(r31); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r32 = new Record(collection);
  r32.set("careerSlug", "ar-vr-engineer");
  r32.set("phase", 3);
  r32.set("title", "Game Engine (Unity or Unreal)");
  r32.set("duration", "8 weeks");
  r32.set("skills", ["Unity3D","Unreal Engine 5","Scene Design","Physics","Animation"]);
  r32.set("resources", ["Unity Learn","Unreal Online Learning"]);
  r32.set("projects", []);
  try { app.save(r32); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r33 = new Record(collection);
  r33.set("careerSlug", "ar-vr-engineer");
  r33.set("phase", 4);
  r33.set("title", "XR Development");
  r33.set("duration", "6 weeks");
  r33.set("skills", ["OpenXR","Meta Quest SDK","ARCore","ARKit","Spatial Computing"]);
  r33.set("resources", ["Meta Quest Developer Hub","ARCore Documentation"]);
  r33.set("projects", []);
  try { app.save(r33); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r34 = new Record(collection);
  r34.set("careerSlug", "ar-vr-engineer");
  r34.set("phase", 5);
  r34.set("title", "Performance & Deployment");
  r34.set("duration", "4 weeks");
  r34.set("skills", ["GPU Optimization","Level of Detail","Occlusion Culling","App Submission"]);
  r34.set("resources", ["Unity Performance Tips"]);
  r34.set("projects", []);
  try { app.save(r34); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r35 = new Record(collection);
  r35.set("careerSlug", "robotics-engineer");
  r35.set("phase", 1);
  r35.set("title", "Programming & Math");
  r35.set("duration", "8 weeks");
  r35.set("skills", ["Python","C++","Linear Algebra","Calculus","Control Theory"]);
  r35.set("resources", ["CS50 - Harvard"]);
  r35.set("projects", []);
  try { app.save(r35); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r36 = new Record(collection);
  r36.set("careerSlug", "robotics-engineer");
  r36.set("phase", 2);
  r36.set("title", "ROS (Robot Operating System)");
  r36.set("duration", "8 weeks");
  r36.set("skills", ["ROS2","Topics","Services","Actions","Navigation Stack"]);
  r36.set("resources", ["ROS2 Tutorials","The Construct ROS"]);
  r36.set("projects", []);
  try { app.save(r36); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r37 = new Record(collection);
  r37.set("careerSlug", "robotics-engineer");
  r37.set("phase", 3);
  r37.set("title", "Sensors & Perception");
  r37.set("duration", "6 weeks");
  r37.set("skills", ["LIDAR","Camera","IMU","Point Clouds","Computer Vision"]);
  r37.set("resources", ["Open3D Tutorials"]);
  r37.set("projects", []);
  try { app.save(r37); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r38 = new Record(collection);
  r38.set("careerSlug", "robotics-engineer");
  r38.set("phase", 4);
  r38.set("title", "Motion Planning & Control");
  r38.set("duration", "6 weeks");
  r38.set("skills", ["PID Control","Path Planning","SLAM","Kinematics","Dynamics"]);
  r38.set("resources", ["Robotics Academy - CMU"]);
  r38.set("projects", []);
  try { app.save(r38); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r39 = new Record(collection);
  r39.set("careerSlug", "robotics-engineer");
  r39.set("phase", 5);
  r39.set("title", "Simulation & Deployment");
  r39.set("duration", "4 weeks");
  r39.set("skills", ["Gazebo","Isaac Sim","MoveIt","Real Robot Deployment"]);
  r39.set("resources", ["Gazebo Tutorials"]);
  r39.set("projects", []);
  try { app.save(r39); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r40 = new Record(collection);
  r40.set("careerSlug", "network-engineer");
  r40.set("phase", 1);
  r40.set("title", "Networking Fundamentals");
  r40.set("duration", "8 weeks");
  r40.set("skills", ["OSI Model","TCP/IP","Subnetting","DNS","DHCP","HTTP"]);
  r40.set("resources", ["Professor Messer CompTIA Network+","Cisco Networking Academy (NetAcad)"]);
  r40.set("projects", []);
  try { app.save(r40); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r41 = new Record(collection);
  r41.set("careerSlug", "network-engineer");
  r41.set("phase", 2);
  r41.set("title", "Routing & Switching");
  r41.set("duration", "8 weeks");
  r41.set("skills", ["OSPF","BGP","EIGRP","VLANs","STP","Cisco IOS"]);
  r41.set("resources", ["Cisco CertificationGuide","Packet Tracer (free)"]);
  r41.set("projects", []);
  try { app.save(r41); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r42 = new Record(collection);
  r42.set("careerSlug", "network-engineer");
  r42.set("phase", 3);
  r42.set("title", "Network Security");
  r42.set("duration", "6 weeks");
  r42.set("skills", ["Firewalls","VPN","IDS/IPS","ACLs","Zero Trust Networking"]);
  r42.set("resources", ["Palo Alto Networks Free Training"]);
  r42.set("projects", []);
  try { app.save(r42); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r43 = new Record(collection);
  r43.set("careerSlug", "network-engineer");
  r43.set("phase", 4);
  r43.set("title", "Cloud Networking");
  r43.set("duration", "6 weeks");
  r43.set("skills", ["AWS VPC","Azure Networking","SD-WAN","Cloud DNS"]);
  r43.set("resources", ["AWS Networking Free Training"]);
  r43.set("projects", []);
  try { app.save(r43); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r44 = new Record(collection);
  r44.set("careerSlug", "network-engineer");
  r44.set("phase", 5);
  r44.set("title", "Automation & SDN");
  r44.set("duration", "4 weeks");
  r44.set("skills", ["Ansible for Network","Python for Network Automation","NETCONF","SDN Concepts"]);
  r44.set("resources", ["Network Programmability with Python"]);
  r44.set("projects", []);
  try { app.save(r44); } catch(err) { if (!err.message.includes("unique")) throw err; }
}, (app) => {});
