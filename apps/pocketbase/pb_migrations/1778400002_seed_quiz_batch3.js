/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quizQuestions");

  const r0 = new Record(collection);
  r0.set("careerSlug", "quantum-computing-engineer");
  r0.set("question", "What is a qubit?");
  r0.set("options", ["Quantum bit that can be 0, 1, or both simultaneously","A binary bit","A quantum processor","A unit of quantum memory"]);
  r0.set("correctAnswer", "Quantum bit that can be 0, 1, or both simultaneously");
  r0.set("difficulty", "Beginner");
  try { app.save(r0); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r1 = new Record(collection);
  r1.set("careerSlug", "quantum-computing-engineer");
  r1.set("question", "What is superposition?");
  r1.set("options", ["Qubit existing in multiple states simultaneously","Two qubits combining","A quantum error","A type of quantum gate"]);
  r1.set("correctAnswer", "Qubit existing in multiple states simultaneously");
  r1.set("difficulty", "Beginner");
  try { app.save(r1); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r2 = new Record(collection);
  r2.set("careerSlug", "quantum-computing-engineer");
  r2.set("question", "What is quantum entanglement?");
  r2.set("options", ["Qubits being correlated regardless of distance","Two quantum computers connected","A quantum encryption method","A type of quantum memory"]);
  r2.set("correctAnswer", "Qubits being correlated regardless of distance");
  r2.set("difficulty", "Beginner");
  try { app.save(r2); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r3 = new Record(collection);
  r3.set("careerSlug", "quantum-computing-engineer");
  r3.set("question", "Which algorithm shows quantum advantage for searching?");
  r3.set("options", ["Grover's Algorithm","Bubble Sort","Binary Search","Dijkstra's Algorithm"]);
  r3.set("correctAnswer", "Grover's Algorithm");
  r3.set("difficulty", "Beginner");
  try { app.save(r3); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r4 = new Record(collection);
  r4.set("careerSlug", "quantum-computing-engineer");
  r4.set("question", "What is Qiskit?");
  r4.set("options", ["IBM's open-source quantum computing SDK","A quantum computer hardware","A quantum programming language","A quantum database"]);
  r4.set("correctAnswer", "IBM's open-source quantum computing SDK");
  r4.set("difficulty", "Beginner");
  try { app.save(r4); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r5 = new Record(collection);
  r5.set("careerSlug", "quantum-computing-engineer");
  r5.set("question", "What does the Hadamard gate do?");
  r5.set("options", ["Creates superposition from basis states","Entangles two qubits","Measures a qubit","Resets a qubit to 0"]);
  r5.set("correctAnswer", "Creates superposition from basis states");
  r5.set("difficulty", "Intermediate");
  try { app.save(r5); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r6 = new Record(collection);
  r6.set("careerSlug", "quantum-computing-engineer");
  r6.set("question", "What is quantum decoherence?");
  r6.set("options", ["Loss of quantum properties due to environment interaction","A quantum error correction method","A quantum gate failure","A programming bug"]);
  r6.set("correctAnswer", "Loss of quantum properties due to environment interaction");
  r6.set("difficulty", "Intermediate");
  try { app.save(r6); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r7 = new Record(collection);
  r7.set("careerSlug", "quantum-computing-engineer");
  r7.set("question", "What is NISQ?");
  r7.set("options", ["Noisy Intermediate-Scale Quantum - current era of imperfect quantum computers","Non-Integrated Simulation Quantum","New Instruction Set Quantum","Neutral-Ion System Quantum"]);
  r7.set("correctAnswer", "Noisy Intermediate-Scale Quantum - current era of imperfect quantum computers");
  r7.set("difficulty", "Intermediate");
  try { app.save(r7); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r8 = new Record(collection);
  r8.set("careerSlug", "quantum-computing-engineer");
  r8.set("question", "What is the no-cloning theorem?");
  r8.set("options", ["It is impossible to create an identical copy of an unknown quantum state","Quantum programs cannot be copied","Quantum gates cannot be duplicated","Qubits cannot be reset"]);
  r8.set("correctAnswer", "It is impossible to create an identical copy of an unknown quantum state");
  r8.set("difficulty", "Intermediate");
  try { app.save(r8); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r9 = new Record(collection);
  r9.set("careerSlug", "quantum-computing-engineer");
  r9.set("question", "What is Shor's algorithm famous for?");
  r9.set("options", ["Factoring large integers exponentially faster than classical computers","Searching unsorted databases","Quantum machine learning","Quantum cryptography"]);
  r9.set("correctAnswer", "Factoring large integers exponentially faster than classical computers");
  r9.set("difficulty", "Intermediate");
  try { app.save(r9); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r10 = new Record(collection);
  r10.set("careerSlug", "quantum-computing-engineer");
  r10.set("question", "What is quantum error correction and why is it needed?");
  r10.set("options", ["Encoding logical qubits into multiple physical qubits to detect and correct errors from decoherence","A software debugging method","A noise filter for quantum hardware","A testing framework"]);
  r10.set("correctAnswer", "Encoding logical qubits into multiple physical qubits to detect and correct errors from decoherence");
  r10.set("difficulty", "Advanced");
  try { app.save(r10); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r11 = new Record(collection);
  r11.set("careerSlug", "quantum-computing-engineer");
  r11.set("question", "What is the VQE algorithm?");
  r11.set("options", ["Hybrid quantum-classical algorithm using parameterized circuit to find ground state energy","A quantum search algorithm","A quantum encryption protocol","A quantum sorting algorithm"]);
  r11.set("correctAnswer", "Hybrid quantum-classical algorithm using parameterized circuit to find ground state energy");
  r11.set("difficulty", "Advanced");
  try { app.save(r11); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r12 = new Record(collection);
  r12.set("careerSlug", "quantum-computing-engineer");
  r12.set("question", "What is BQP complexity class?");
  r12.set("options", ["Problems solvable by quantum computers in polynomial time with bounded error","Binary Quantum Processing","Best Quantum Performance","Boolean Quantum Programming"]);
  r12.set("correctAnswer", "Problems solvable by quantum computers in polynomial time with bounded error");
  r12.set("difficulty", "Advanced");
  try { app.save(r12); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r13 = new Record(collection);
  r13.set("careerSlug", "quantum-computing-engineer");
  r13.set("question", "What is quantum teleportation?");
  r13.set("options", ["Transferring quantum state (not matter) from one qubit to another using entanglement and classical communication","Physically moving quantum computers","Transmitting data wirelessly using quantum signals","A quantum error correction method"]);
  r13.set("correctAnswer", "Transferring quantum state (not matter) from one qubit to another using entanglement and classical communication");
  r13.set("difficulty", "Advanced");
  try { app.save(r13); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r14 = new Record(collection);
  r14.set("careerSlug", "quantum-computing-engineer");
  r14.set("question", "What is the surface code?");
  r14.set("options", ["Leading quantum error correction code using 2D lattice of physical qubits","A quantum chip design","A type of qubit","A quantum programming framework"]);
  r14.set("correctAnswer", "Leading quantum error correction code using 2D lattice of physical qubits");
  r14.set("difficulty", "Advanced");
  try { app.save(r14); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r15 = new Record(collection);
  r15.set("careerSlug", "ar-vr-engineer");
  r15.set("question", "What is the difference between AR and VR?");
  r15.set("options", ["AR overlays digital on real world; VR creates fully virtual environment","VR overlays digital on real world; AR is fully virtual","They are the same","AR is only for gaming; VR is for enterprise"]);
  r15.set("correctAnswer", "AR overlays digital on real world; VR creates fully virtual environment");
  r15.set("difficulty", "Beginner");
  try { app.save(r15); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r16 = new Record(collection);
  r16.set("careerSlug", "ar-vr-engineer");
  r16.set("question", "What is the most popular game engine for XR development?");
  r16.set("options", ["Unity","Blender","Photoshop","Maya"]);
  r16.set("correctAnswer", "Unity");
  r16.set("difficulty", "Beginner");
  try { app.save(r16); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r17 = new Record(collection);
  r17.set("careerSlug", "ar-vr-engineer");
  r17.set("question", "What is a quaternion used for?");
  r17.set("options", ["Representing 3D rotations without gimbal lock","3D position tracking","Rendering textures","Physics simulation"]);
  r17.set("correctAnswer", "Representing 3D rotations without gimbal lock");
  r17.set("difficulty", "Beginner");
  try { app.save(r17); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r18 = new Record(collection);
  r18.set("careerSlug", "ar-vr-engineer");
  r18.set("question", "What is 6DoF?");
  r18.set("options", ["Six degrees of freedom - full movement tracking in 3D space","6 degrees Fahrenheit","A rendering technique","A VR resolution standard"]);
  r18.set("correctAnswer", "Six degrees of freedom - full movement tracking in 3D space");
  r18.set("difficulty", "Beginner");
  try { app.save(r18); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r19 = new Record(collection);
  r19.set("careerSlug", "ar-vr-engineer");
  r19.set("question", "What causes motion sickness in VR?");
  r19.set("options", ["Mismatch between visual motion and vestibular system","Low resolution screens","Bright colors","Poor audio quality"]);
  r19.set("correctAnswer", "Mismatch between visual motion and vestibular system");
  r19.set("difficulty", "Beginner");
  try { app.save(r19); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r20 = new Record(collection);
  r20.set("careerSlug", "ar-vr-engineer");
  r20.set("question", "What is foveated rendering?");
  r20.set("options", ["Rendering at full quality only where user is looking to save GPU","Rendering at full quality everywhere","A type of anti-aliasing","A post-processing effect"]);
  r20.set("correctAnswer", "Rendering at full quality only where user is looking to save GPU");
  r20.set("difficulty", "Intermediate");
  try { app.save(r20); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r21 = new Record(collection);
  r21.set("careerSlug", "ar-vr-engineer");
  r21.set("question", "What is Asynchronous TimeWarp (ATW)?");
  r21.set("options", ["Technique to reduce perceived latency by warping last rendered frame while new frame renders","A shader optimization","A texture streaming method","A physics optimization"]);
  r21.set("correctAnswer", "Technique to reduce perceived latency by warping last rendered frame while new frame renders");
  r21.set("difficulty", "Intermediate");
  try { app.save(r21); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r22 = new Record(collection);
  r22.set("careerSlug", "ar-vr-engineer");
  r22.set("question", "What is a draw call?");
  r22.set("options", ["CPU instruction to GPU to render an object","A networking call","A UI interaction","A physics calculation"]);
  r22.set("correctAnswer", "CPU instruction to GPU to render an object");
  r22.set("difficulty", "Intermediate");
  try { app.save(r22); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r23 = new Record(collection);
  r23.set("careerSlug", "ar-vr-engineer");
  r23.set("question", "What is inside-out tracking?");
  r23.set("options", ["Tracking using cameras mounted on the headset","External sensors tracking the headset","Eye tracking","Controller tracking only"]);
  r23.set("correctAnswer", "Tracking using cameras mounted on the headset");
  r23.set("difficulty", "Intermediate");
  try { app.save(r23); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r24 = new Record(collection);
  r24.set("careerSlug", "ar-vr-engineer");
  r24.set("question", "What is spatial audio?");
  r24.set("options", ["3D positional sound that changes based on listener position and environment","Loud audio","Stereo audio","Noise cancellation"]);
  r24.set("correctAnswer", "3D positional sound that changes based on listener position and environment");
  r24.set("difficulty", "Intermediate");
  try { app.save(r24); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r25 = new Record(collection);
  r25.set("careerSlug", "ar-vr-engineer");
  r25.set("question", "What is the difference between URP and HDRP in Unity?");
  r25.set("options", ["URP is for mobile/XR with lower GPU cost; HDRP is for high-end visuals on PC/console","HDRP is for mobile; URP is for PC","They are identical","URP is deprecated"]);
  r25.set("correctAnswer", "URP is mobile/XR with lower GPU cost; HDRP is for high-end visuals on PC/console");
  r25.set("difficulty", "Advanced");
  try { app.save(r25); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r26 = new Record(collection);
  r26.set("careerSlug", "ar-vr-engineer");
  r26.set("question", "What is SLAM in AR?");
  r26.set("options", ["Simultaneous Localization and Mapping - tracking device position while building environment map","Spatial Layer Animation Method","A rendering technique","A physics algorithm"]);
  r26.set("correctAnswer", "Simultaneous Localization and Mapping - tracking device position while building environment map");
  r26.set("difficulty", "Advanced");
  try { app.save(r26); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r27 = new Record(collection);
  r27.set("careerSlug", "ar-vr-engineer");
  r27.set("question", "What is inverse kinematics (IK)?");
  r27.set("options", ["Computing joint positions from end-effector position to drive realistic body movement","A rendering algorithm","A physics simulation","A networking protocol"]);
  r27.set("correctAnswer", "Computing joint positions from end-effector position to drive realistic body movement");
  r27.set("difficulty", "Advanced");
  try { app.save(r27); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r28 = new Record(collection);
  r28.set("careerSlug", "ar-vr-engineer");
  r28.set("question", "What is the uncanny valley in XR?");
  r28.set("options", ["Near-human avatars that are almost but not quite realistic enough, causing discomfort","A graphical artifact","A depth perception issue","A motion tracking error"]);
  r28.set("correctAnswer", "Near-human avatars that are almost but not quite realistic enough, causing discomfort");
  r28.set("difficulty", "Advanced");
  try { app.save(r28); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r29 = new Record(collection);
  r29.set("careerSlug", "ar-vr-engineer");
  r29.set("question", "What is photogrammetry?");
  r29.set("options", ["Creating 3D models from photographs of real-world objects","Rendering photo-realistic images","A camera tracking method","A VR rendering technique"]);
  r29.set("correctAnswer", "Creating 3D models from photographs of real-world objects");
  r29.set("difficulty", "Advanced");
  try { app.save(r29); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r30 = new Record(collection);
  r30.set("careerSlug", "robotics-engineer");
  r30.set("question", "What is ROS?");
  r30.set("options", ["Robot Operating System - middleware for robot software","A programming language","A robot hardware standard","A simulation engine"]);
  r30.set("correctAnswer", "Robot Operating System - middleware for robot software");
  r30.set("difficulty", "Beginner");
  try { app.save(r30); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r31 = new Record(collection);
  r31.set("careerSlug", "robotics-engineer");
  r31.set("question", "What is SLAM?");
  r31.set("options", ["Simultaneous Localization and Mapping","Sensor Lidar And Mapping","Systematic Location And Movement","Spatial Localization And Maneuvering"]);
  r31.set("correctAnswer", "Simultaneous Localization and Mapping");
  r31.set("difficulty", "Beginner");
  try { app.save(r31); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r32 = new Record(collection);
  r32.set("careerSlug", "robotics-engineer");
  r32.set("question", "What is a PID controller?");
  r32.set("options", ["Proportional-Integral-Derivative control algorithm","Path Integration Dynamics","Position Input Device","Parallel Information Distributor"]);
  r32.set("correctAnswer", "Proportional-Integral-Derivative control algorithm");
  r32.set("difficulty", "Beginner");
  try { app.save(r32); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r33 = new Record(collection);
  r33.set("careerSlug", "robotics-engineer");
  r33.set("question", "What is forward kinematics?");
  r33.set("options", ["Computing end-effector position from joint angles","Computing joint angles from end-effector position","Planning forward path","Controlling robot speed"]);
  r33.set("correctAnswer", "Computing end-effector position from joint angles");
  r33.set("difficulty", "Beginner");
  try { app.save(r33); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r34 = new Record(collection);
  r34.set("careerSlug", "robotics-engineer");
  r34.set("question", "What is a LIDAR?");
  r34.set("options", ["Laser sensor that measures distances to create 3D maps","Camera sensor","GPS module","IMU sensor"]);
  r34.set("correctAnswer", "Laser sensor that measures distances to create 3D maps");
  r34.set("difficulty", "Beginner");
  try { app.save(r34); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r35 = new Record(collection);
  r35.set("careerSlug", "robotics-engineer");
  r35.set("question", "What is the Kalman Filter used for in robotics?");
  r35.set("options", ["Optimal state estimation by combining predictions and noisy sensor measurements","Path planning","Motor control","Computer vision"]);
  r35.set("correctAnswer", "Optimal state estimation by combining predictions and noisy sensor measurements");
  r35.set("difficulty", "Intermediate");
  try { app.save(r35); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r36 = new Record(collection);
  r36.set("careerSlug", "robotics-engineer");
  r36.set("question", "What is inverse kinematics?");
  r36.set("options", ["Computing joint angles needed to reach a desired end-effector position","Computing end-effector position from joint angles","Reversing robot movement","Planning return path"]);
  r36.set("correctAnswer", "Computing joint angles needed to reach a desired end-effector position");
  r36.set("difficulty", "Intermediate");
  try { app.save(r36); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r37 = new Record(collection);
  r37.set("careerSlug", "robotics-engineer");
  r37.set("question", "What is a behavior tree in robotics?");
  r37.set("options", ["Hierarchical structure for organizing robot decision-making behaviors","A software debugging tool","A neural network architecture","A sensor fusion method"]);
  r37.set("correctAnswer", "Hierarchical structure for organizing robot decision-making behaviors");
  r37.set("difficulty", "Intermediate");
  try { app.save(r37); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r38 = new Record(collection);
  r38.set("careerSlug", "robotics-engineer");
  r38.set("question", "What is sensor fusion?");
  r38.set("options", ["Combining data from multiple sensors to improve accuracy","Connecting multiple sensors","Calibrating sensors","A type of sensor"]);
  r38.set("correctAnswer", "Combining data from multiple sensors to improve accuracy");
  r38.set("difficulty", "Intermediate");
  try { app.save(r38); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r39 = new Record(collection);
  r39.set("careerSlug", "robotics-engineer");
  r39.set("question", "What is sim-to-real transfer?");
  r39.set("options", ["Applying policies trained in simulation to real robots","Simulating real-world data","Testing in simulation before real world","A data transfer protocol"]);
  r39.set("correctAnswer", "Applying policies trained in simulation to real robots");
  r39.set("difficulty", "Intermediate");
  try { app.save(r39); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r40 = new Record(collection);
  r40.set("careerSlug", "robotics-engineer");
  r40.set("question", "What is impedance control in robotics?");
  r40.set("options", ["Controlling the robot's mechanical impedance (force-position relationship) for safe interaction","Electrical impedance measurement","A path planning method","A sensor calibration method"]);
  r40.set("correctAnswer", "Controlling the robot's mechanical impedance (force-position relationship) for safe interaction");
  r40.set("difficulty", "Advanced");
  try { app.save(r40); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r41 = new Record(collection);
  r41.set("careerSlug", "robotics-engineer");
  r41.set("question", "What is Model Predictive Control (MPC)?");
  r41.set("options", ["Optimization-based control using a model to predict future states and minimize cost over horizon","A type of PID controller","A path planning algorithm","A machine learning control method"]);
  r41.set("correctAnswer", "Optimization-based control using a model to predict future states and minimize cost over horizon");
  r41.set("difficulty", "Advanced");
  try { app.save(r41); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r42 = new Record(collection);
  r42.set("careerSlug", "robotics-engineer");
  r42.set("question", "What is domain randomization in sim-to-real?");
  r42.set("options", ["Randomizing simulation parameters so policy transfers to real world despite differences","Generating random test cases","Randomizing sensor data","A data augmentation technique"]);
  r42.set("correctAnswer", "Randomizing simulation parameters so policy transfers to real world despite differences");
  r42.set("difficulty", "Advanced");
  try { app.save(r42); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r43 = new Record(collection);
  r43.set("careerSlug", "robotics-engineer");
  r43.set("question", "What is the Jacobian in robotics?");
  r43.set("options", ["Matrix relating joint velocities to end-effector velocities","A path planning algorithm","A type of controller","A sensor fusion matrix"]);
  r43.set("correctAnswer", "Matrix relating joint velocities to end-effector velocities");
  r43.set("difficulty", "Advanced");
  try { app.save(r43); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r44 = new Record(collection);
  r44.set("careerSlug", "robotics-engineer");
  r44.set("question", "What is EtherCAT used for in robotics?");
  r44.set("options", ["Real-time industrial Ethernet protocol for deterministic communication with actuators","Robot simulation","Wireless robot communication","A robot programming language"]);
  r44.set("correctAnswer", "Real-time industrial Ethernet protocol for deterministic communication with actuators");
  r44.set("difficulty", "Advanced");
  try { app.save(r44); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r45 = new Record(collection);
  r45.set("careerSlug", "network-engineer");
  r45.set("question", "How many layers does the OSI model have?");
  r45.set("options", ["7","4","5","8"]);
  r45.set("correctAnswer", "7");
  r45.set("difficulty", "Beginner");
  try { app.save(r45); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r46 = new Record(collection);
  r46.set("careerSlug", "network-engineer");
  r46.set("question", "What is a VLAN?");
  r46.set("options", ["Virtual LAN - logical network segmentation on physical network","Very Large Area Network","Virtual Link Access Network","Variable LAN"]);
  r46.set("correctAnswer", "Virtual LAN - logical network segmentation on physical network");
  r46.set("difficulty", "Beginner");
  try { app.save(r46); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r47 = new Record(collection);
  r47.set("careerSlug", "network-engineer");
  r47.set("question", "What does TCP stand for?");
  r47.set("options", ["Transmission Control Protocol","Transfer Communication Protocol","Terminal Control Process","Timed Connection Protocol"]);
  r47.set("correctAnswer", "Transmission Control Protocol");
  r47.set("difficulty", "Beginner");
  try { app.save(r47); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r48 = new Record(collection);
  r48.set("careerSlug", "network-engineer");
  r48.set("question", "What is OSPF?");
  r48.set("options", ["Open Shortest Path First - link-state routing protocol","Optional Secure Path Finder","Open System Protocol Framework","Optimized Shortest Path Forwarding"]);
  r48.set("correctAnswer", "Open Shortest Path First - link-state routing protocol");
  r48.set("difficulty", "Beginner");
  try { app.save(r48); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r49 = new Record(collection);
  r49.set("careerSlug", "network-engineer");
  r49.set("question", "What is a subnet mask?");
  r49.set("options", ["Defines which portion of IP address is network vs host","A type of firewall","A network device","An encryption key"]);
  r49.set("correctAnswer", "Defines which portion of IP address is network vs host");
  r49.set("difficulty", "Beginner");
  try { app.save(r49); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r50 = new Record(collection);
  r50.set("careerSlug", "network-engineer");
  r50.set("question", "What is BGP used for?");
  r50.set("options", ["Routing between autonomous systems on the internet","Internal routing within a network","Dynamic host configuration","Network address translation"]);
  r50.set("correctAnswer", "Routing between autonomous systems on the internet");
  r50.set("difficulty", "Intermediate");
  try { app.save(r50); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r51 = new Record(collection);
  r51.set("careerSlug", "network-engineer");
  r51.set("question", "What is STP (Spanning Tree Protocol)?");
  r51.set("options", ["Prevents network loops in Ethernet networks by blocking redundant paths","A secure tunneling protocol","A traffic shaping protocol","A wireless protocol"]);
  r51.set("correctAnswer", "Prevents network loops in Ethernet networks by blocking redundant paths");
  r51.set("difficulty", "Intermediate");
  try { app.save(r51); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r52 = new Record(collection);
  r52.set("careerSlug", "network-engineer");
  r52.set("question", "What is QoS?");
  r52.set("options", ["Quality of Service - prioritizing network traffic types","Quick Open Service","Queue Output System","Query Optimization Standard"]);
  r52.set("correctAnswer", "Quality of Service - prioritizing network traffic types");
  r52.set("difficulty", "Intermediate");
  try { app.save(r52); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r53 = new Record(collection);
  r53.set("careerSlug", "network-engineer");
  r53.set("question", "What is MPLS?");
  r53.set("options", ["Multi-Protocol Label Switching - fast packet forwarding using labels","Multi-Point Link Security","Maximum Packet Length Standard","Modified Protocol Layer System"]);
  r53.set("correctAnswer", "Multi-Protocol Label Switching - fast packet forwarding using labels");
  r53.set("difficulty", "Intermediate");
  try { app.save(r53); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r54 = new Record(collection);
  r54.set("careerSlug", "network-engineer");
  r54.set("question", "What is the difference between a hub and a switch?");
  r54.set("options", ["Hub broadcasts to all ports; switch forwards to specific MAC address","Switch broadcasts to all; hub is targeted","They are the same","Hub is more secure than switch"]);
  r54.set("correctAnswer", "Hub broadcasts to all ports; switch forwards to specific MAC address");
  r54.set("difficulty", "Intermediate");
  try { app.save(r54); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r55 = new Record(collection);
  r55.set("careerSlug", "network-engineer");
  r55.set("question", "What is ECMP?");
  r55.set("options", ["Equal-Cost Multi-Path - load balancing across multiple equal-cost routes","Extended CIDR Masking Protocol","Encrypted Communication Multi-Protocol","A wireless protocol"]);
  r55.set("correctAnswer", "Equal-Cost Multi-Path - load balancing across multiple equal-cost routes");
  r55.set("difficulty", "Advanced");
  try { app.save(r55); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r56 = new Record(collection);
  r56.set("careerSlug", "network-engineer");
  r56.set("question", "What is VXLAN?");
  r56.set("options", ["Virtual Extensible LAN - encapsulates L2 frames in UDP for overlay networks","Variable XLAN routing","A VLAN extension standard","A wireless encryption protocol"]);
  r56.set("correctAnswer", "Virtual Extensible LAN - encapsulates L2 frames in UDP for overlay networks");
  r56.set("difficulty", "Advanced");
  try { app.save(r56); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r57 = new Record(collection);
  r57.set("careerSlug", "network-engineer");
  r57.set("question", "What is BFD used for?");
  r57.set("options", ["Bidirectional Forwarding Detection - fast failure detection between neighbors","BGP Failure Detection","Bandwidth Forwarding Diagnostic","Binary Format Data"]);
  r57.set("correctAnswer", "Bidirectional Forwarding Detection - fast failure detection between neighbors");
  r57.set("difficulty", "Advanced");
  try { app.save(r57); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r58 = new Record(collection);
  r58.set("careerSlug", "network-engineer");
  r58.set("question", "What is the difference between HSRP and VRRP?");
  r58.set("options", ["HSRP is Cisco proprietary; VRRP is open standard; both provide gateway redundancy","VRRP is Cisco proprietary; HSRP is open","They are identical","HSRP is for routers only; VRRP is for switches"]);
  r58.set("correctAnswer", "HSRP is Cisco proprietary; VRRP is open standard; both provide gateway redundancy");
  r58.set("difficulty", "Advanced");
  try { app.save(r58); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r59 = new Record(collection);
  r59.set("careerSlug", "network-engineer");
  r59.set("question", "What is YANG model?");
  r59.set("options", ["Data modeling language for network configuration used with NETCONF/RESTCONF","A routing protocol","A network monitoring tool","A wireless standard"]);
  r59.set("correctAnswer", "Data modeling language for network configuration used with NETCONF/RESTCONF");
  r59.set("difficulty", "Advanced");
  try { app.save(r59); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r60 = new Record(collection);
  r60.set("careerSlug", "solutions-architect");
  r60.set("question", "What is a Solutions Architect?");
  r60.set("options", ["Designs technical solutions aligned with business requirements","A software developer","A project manager","A database administrator"]);
  r60.set("correctAnswer", "Designs technical solutions aligned with business requirements");
  r60.set("difficulty", "Beginner");
  try { app.save(r60); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r61 = new Record(collection);
  r61.set("careerSlug", "solutions-architect");
  r61.set("question", "What is the AWS Well-Architected Framework?");
  r61.set("options", ["Best practices for cloud architecture across reliability, security, performance, cost, operations","AWS certification program","A cloud cost calculator","An AWS deployment guide"]);
  r61.set("correctAnswer", "Best practices for cloud architecture across reliability, security, performance, cost, operations");
  r61.set("difficulty", "Beginner");
  try { app.save(r61); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r62 = new Record(collection);
  r62.set("careerSlug", "solutions-architect");
  r62.set("question", "What is scalability?");
  r62.set("options", ["Ability to handle growing workloads by adding resources","System uptime percentage","Data backup frequency","Network bandwidth"]);
  r62.set("correctAnswer", "Ability to handle growing workloads by adding resources");
  r62.set("difficulty", "Beginner");
  try { app.save(r62); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r63 = new Record(collection);
  r63.set("careerSlug", "solutions-architect");
  r63.set("question", "What is TCO?");
  r63.set("options", ["Total Cost of Ownership","Technical Configuration Overview","Transfer Cost Operations","Total Cloud Output"]);
  r63.set("correctAnswer", "Total Cost of Ownership");
  r63.set("difficulty", "Beginner");
  try { app.save(r63); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r64 = new Record(collection);
  r64.set("careerSlug", "solutions-architect");
  r64.set("question", "What is microservices architecture?");
  r64.set("options", ["Application composed of small independent deployable services","A monolithic application","A database design pattern","A networking architecture"]);
  r64.set("correctAnswer", "Application composed of small independent deployable services");
  r64.set("difficulty", "Beginner");
  try { app.save(r64); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r65 = new Record(collection);
  r65.set("careerSlug", "solutions-architect");
  r65.set("question", "What is the strangler fig pattern?");
  r65.set("options", ["Gradually replacing a legacy system by wrapping it with new services","A security pattern","A database migration pattern","A CI/CD pattern"]);
  r65.set("correctAnswer", "Gradually replacing a legacy system by wrapping it with new services");
  r65.set("difficulty", "Intermediate");
  try { app.save(r65); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r66 = new Record(collection);
  r66.set("careerSlug", "solutions-architect");
  r66.set("question", "What is an ADR?");
  r66.set("options", ["Architecture Decision Record - documents a significant design choice with context","Automated Deployment Routine","API Design Review","Application Data Repository"]);
  r66.set("correctAnswer", "Architecture Decision Record - documents a significant design choice with context");
  r66.set("difficulty", "Intermediate");
  try { app.save(r66); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r67 = new Record(collection);
  r67.set("careerSlug", "solutions-architect");
  r67.set("question", "What is event-driven architecture?");
  r67.set("options", ["Components communicate through producing and consuming events asynchronously","An architecture driven by user events","A UI-driven architecture","A monitoring-driven approach"]);
  r67.set("correctAnswer", "Components communicate through producing and consuming events asynchronously");
  r67.set("difficulty", "Intermediate");
  try { app.save(r67); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r68 = new Record(collection);
  r68.set("careerSlug", "solutions-architect");
  r68.set("question", "What is the C4 model?");
  r68.set("options", ["Context, Containers, Components, Code - levels of abstraction for architecture diagrams","4 cloud providers","A security framework","A cost optimization model"]);
  r68.set("correctAnswer", "Context, Containers, Components, Code - levels of abstraction for architecture diagrams");
  r68.set("difficulty", "Intermediate");
  try { app.save(r68); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r69 = new Record(collection);
  r69.set("careerSlug", "solutions-architect");
  r69.set("question", "What is the 12-factor app methodology?");
  r69.set("options", ["Set of principles for building scalable, maintainable cloud-native apps","12 cloud services to use","A deployment checklist","A security framework"]);
  r69.set("correctAnswer", "Set of principles for building scalable, maintainable cloud-native apps");
  r69.set("difficulty", "Intermediate");
  try { app.save(r69); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r70 = new Record(collection);
  r70.set("careerSlug", "solutions-architect");
  r70.set("question", "What is bounded context in DDD?");
  r70.set("options", ["Explicit boundary within which a domain model applies and is consistent","A security boundary","A cloud region boundary","A database schema boundary"]);
  r70.set("correctAnswer", "Explicit boundary within which a domain model applies and is consistent");
  r70.set("difficulty", "Advanced");
  try { app.save(r70); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r71 = new Record(collection);
  r71.set("careerSlug", "solutions-architect");
  r71.set("question", "What is the difference between CapEx and OpEx in cloud?");
  r71.set("options", ["CapEx is upfront capital investment; OpEx is ongoing operational expense. Cloud shifts CapEx to OpEx.","OpEx is upfront; CapEx is ongoing","They are the same in cloud","CapEx is cheaper in cloud"]);
  r71.set("correctAnswer", "CapEx is upfront capital investment; OpEx is ongoing operational expense. Cloud shifts CapEx to OpEx.");
  r71.set("difficulty", "Advanced");
  try { app.save(r71); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r72 = new Record(collection);
  r72.set("careerSlug", "solutions-architect");
  r72.set("question", "What is the shared responsibility model in cloud security?");
  r72.set("options", ["Cloud provider secures infrastructure; customer secures data, applications, and configuration","Customer is responsible for everything","Cloud provider is responsible for everything","Responsibility is equally shared at all layers"]);
  r72.set("correctAnswer", "Cloud provider secures infrastructure; customer secures data, applications, and configuration");
  r72.set("difficulty", "Advanced");
  try { app.save(r72); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r73 = new Record(collection);
  r73.set("careerSlug", "solutions-architect");
  r73.set("question", "What is a multi-region active-active architecture?");
  r73.set("options", ["Serving live traffic from multiple regions simultaneously for resilience and low latency","Having backup servers in multiple regions","Deploying to multiple regions sequentially","A database replication strategy"]);
  r73.set("correctAnswer", "Serving live traffic from multiple regions simultaneously for resilience and low latency");
  r73.set("difficulty", "Advanced");
  try { app.save(r73); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r74 = new Record(collection);
  r74.set("careerSlug", "solutions-architect");
  r74.set("question", "What is the difference between synchronous and asynchronous communication in architecture?");
  r74.set("options", ["Sync waits for response before proceeding; async sends request and continues, response handled later","Async waits; sync continues immediately","They are identical in performance","Sync is always better for reliability"]);
  r74.set("correctAnswer", "Sync waits for response before proceeding; async sends request and continues, response handled later");
  r74.set("difficulty", "Advanced");
  try { app.save(r74); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r75 = new Record(collection);
  r75.set("careerSlug", "database-administrator-database-engineer");
  r75.set("question", "What does ACID stand for?");
  r75.set("options", ["Atomicity, Consistency, Isolation, Durability","Availability, Consistency, Isolation, Durability","Atomicity, Correctness, Integration, Durability","Availability, Correctness, Isolation, Dependability"]);
  r75.set("correctAnswer", "Atomicity, Consistency, Isolation, Durability");
  r75.set("difficulty", "Beginner");
  try { app.save(r75); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r76 = new Record(collection);
  r76.set("careerSlug", "database-administrator-database-engineer");
  r76.set("question", "What is a database index?");
  r76.set("options", ["Data structure that speeds up queries","A backup of the database","A user of the database","A type of database table"]);
  r76.set("correctAnswer", "Data structure that speeds up queries");
  r76.set("difficulty", "Beginner");
  try { app.save(r76); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r77 = new Record(collection);
  r77.set("careerSlug", "database-administrator-database-engineer");
  r77.set("question", "What is normalization?");
  r77.set("options", ["Organizing database to reduce redundancy","Encrypting database data","Backing up database","Compressing database tables"]);
  r77.set("correctAnswer", "Organizing database to reduce redundancy");
  r77.set("difficulty", "Beginner");
  try { app.save(r77); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r78 = new Record(collection);
  r78.set("careerSlug", "database-administrator-database-engineer");
  r78.set("question", "What is a foreign key?");
  r78.set("options", ["Column that references primary key of another table","A hidden primary key","An index key","A backup key"]);
  r78.set("correctAnswer", "Column that references primary key of another table");
  r78.set("difficulty", "Beginner");
  try { app.save(r78); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r79 = new Record(collection);
  r79.set("careerSlug", "database-administrator-database-engineer");
  r79.set("question", "What is a view in SQL?");
  r79.set("options", ["Virtual table based on a SELECT query","A physical table copy","A database backup","A stored procedure"]);
  r79.set("correctAnswer", "Virtual table based on a SELECT query");
  r79.set("difficulty", "Beginner");
  try { app.save(r79); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r80 = new Record(collection);
  r80.set("careerSlug", "database-administrator-database-engineer");
  r80.set("question", "What is MVCC?");
  r80.set("options", ["Multi-Version Concurrency Control - allows concurrent reads without locking by keeping row versions","Multi-Value Cache Control","Maximum Version Consistency Check","Multiple Variable Concurrency"]);
  r80.set("correctAnswer", "Multi-Version Concurrency Control - allows concurrent reads without locking by keeping row versions");
  r80.set("difficulty", "Intermediate");
  try { app.save(r80); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r81 = new Record(collection);
  r81.set("careerSlug", "database-administrator-database-engineer");
  r81.set("question", "What is a covering index?");
  r81.set("options", ["Index that contains all columns needed by a query, avoiding table lookup","An index covering all tables","A partial index","An index on all columns"]);
  r81.set("correctAnswer", "Index that contains all columns needed by a query, avoiding table lookup");
  r81.set("difficulty", "Intermediate");
  try { app.save(r81); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r82 = new Record(collection);
  r82.set("careerSlug", "database-administrator-database-engineer");
  r82.set("question", "What isolation level prevents dirty reads but allows non-repeatable reads?");
  r82.set("options", ["Read Committed","Read Uncommitted","Repeatable Read","Serializable"]);
  r82.set("correctAnswer", "Read Committed");
  r82.set("difficulty", "Intermediate");
  try { app.save(r82); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r83 = new Record(collection);
  r83.set("careerSlug", "database-administrator-database-engineer");
  r83.set("question", "What is a materialized view?");
  r83.set("options", ["Pre-computed view stored physically that is refreshed periodically","A regular view","A table copy","An indexed table"]);
  r83.set("correctAnswer", "Pre-computed view stored physically that is refreshed periodically");
  r83.set("difficulty", "Intermediate");
  try { app.save(r83); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r84 = new Record(collection);
  r84.set("careerSlug", "database-administrator-database-engineer");
  r84.set("question", "What is WAL in PostgreSQL?");
  r84.set("options", ["Write-Ahead Log - changes logged before applied to ensure durability and recovery","Web Access Layer","Write And Load","Wide Area Log"]);
  r84.set("correctAnswer", "Write-Ahead Log - changes logged before applied to ensure durability and recovery");
  r84.set("difficulty", "Intermediate");
  try { app.save(r84); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r85 = new Record(collection);
  r85.set("careerSlug", "database-administrator-database-engineer");
  r85.set("question", "What is the difference between physical and logical replication in PostgreSQL?");
  r85.set("options", ["Physical replicates byte-level changes to the whole cluster; logical replicates table-level changes selectively","Logical is byte-level; physical is table-level","They are identical","Physical replication is for backups only"]);
  r85.set("correctAnswer", "Physical replicates byte-level changes to the whole cluster; logical replicates table-level changes selectively");
  r85.set("difficulty", "Advanced");
  try { app.save(r85); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r86 = new Record(collection);
  r86.set("careerSlug", "database-administrator-database-engineer");
  r86.set("question", "What is autovacuum in PostgreSQL and why is it important?");
  r86.set("options", ["Automatically reclaims dead tuple space from MVCC to prevent table bloat and maintain statistics","Auto backup process","Auto index creation","Auto connection management"]);
  r86.set("correctAnswer", "Automatically reclaims dead tuple space from MVCC to prevent table bloat and maintain statistics");
  r86.set("difficulty", "Advanced");
  try { app.save(r86); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r87 = new Record(collection);
  r87.set("careerSlug", "database-administrator-database-engineer");
  r87.set("question", "What is the difference between a hash join and a nested loop join?");
  r87.set("options", ["Hash join builds hash table for one relation; nested loop iterates over every row pair. Hash is better for large tables.","Nested loop is always faster","Hash join is for indexed columns only","They are the same"]);
  r87.set("correctAnswer", "Hash join builds hash table for one relation; nested loop iterates over every row pair. Hash is better for large tables.");
  r87.set("difficulty", "Advanced");
  try { app.save(r87); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r88 = new Record(collection);
  r88.set("careerSlug", "database-administrator-database-engineer");
  r88.set("question", "What is Patroni?");
  r88.set("options", ["High-availability solution for PostgreSQL using etcd/Consul for leader election and failover","A backup tool","A query optimizer","A connection pooler"]);
  r88.set("correctAnswer", "High-availability solution for PostgreSQL using etcd/Consul for leader election and failover");
  r88.set("difficulty", "Advanced");
  try { app.save(r88); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r89 = new Record(collection);
  r89.set("careerSlug", "database-administrator-database-engineer");
  r89.set("question", "What is the CAP theorem and how does it affect database choice?");
  r89.set("options", ["Can only guarantee 2 of Consistency/Availability/Partition-tolerance; guides choice between SQL (CP) and NoSQL (AP)","All three can always be achieved","Applies only to NoSQL databases","A security principle"]);
  r89.set("correctAnswer", "Can only guarantee 2 of Consistency/Availability/Partition-tolerance; guides choice between SQL (CP) and NoSQL (AP)");
  r89.set("difficulty", "Advanced");
  try { app.save(r89); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r90 = new Record(collection);
  r90.set("careerSlug", "game-developer");
  r90.set("question", "What is a game loop?");
  r90.set("options", ["Core cycle that processes input, updates game state, and renders every frame","A loop in game code","An infinite loop bug","A save file cycle"]);
  r90.set("correctAnswer", "Core cycle that processes input, updates game state, and renders every frame");
  r90.set("difficulty", "Beginner");
  try { app.save(r90); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r91 = new Record(collection);
  r91.set("careerSlug", "game-developer");
  r91.set("question", "What is delta time?");
  r91.set("options", ["Time elapsed since last frame used for frame-rate independent movement","Delay between frames","Total game time","Time between player actions"]);
  r91.set("correctAnswer", "Time elapsed since last frame used for frame-rate independent movement");
  r91.set("difficulty", "Beginner");
  try { app.save(r91); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r92 = new Record(collection);
  r92.set("careerSlug", "game-developer");
  r92.set("question", "What is object pooling?");
  r92.set("options", ["Reusing objects instead of creating/destroying them to save performance","Storing objects in a database","A networking technique","A save system"]);
  r92.set("correctAnswer", "Reusing objects instead of creating/destroying them to save performance");
  r92.set("difficulty", "Beginner");
  try { app.save(r92); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r93 = new Record(collection);
  r93.set("careerSlug", "game-developer");
  r93.set("question", "What is a prefab in Unity?");
  r93.set("options", ["Reusable template of a GameObject with all components","A pre-built game","A texture file","A scene template"]);
  r93.set("correctAnswer", "Reusable template of a GameObject with all components");
  r93.set("difficulty", "Beginner");
  try { app.save(r93); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r94 = new Record(collection);
  r94.set("careerSlug", "game-developer");
  r94.set("question", "What is a navmesh?");
  r94.set("options", ["Data structure representing walkable surfaces for AI pathfinding","A 3D mesh","A networking mesh","A UI element"]);
  r94.set("correctAnswer", "Data structure representing walkable surfaces for AI pathfinding");
  r94.set("difficulty", "Beginner");
  try { app.save(r94); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r95 = new Record(collection);
  r95.set("careerSlug", "game-developer");
  r95.set("question", "What is the Entity Component System (ECS)?");
  r95.set("options", ["Data-oriented design pattern separating data (components) from logic (systems) for performance","A game design pattern","A UI framework","A networking pattern"]);
  r95.set("correctAnswer", "Data-oriented design pattern separating data (components) from logic (systems) for performance");
  r95.set("difficulty", "Intermediate");
  try { app.save(r95); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r96 = new Record(collection);
  r96.set("careerSlug", "game-developer");
  r96.set("question", "What is rollback netcode?");
  r96.set("options", ["Rewinding and resimulating game state when server correction arrives for smooth multiplayer","Rolling back a game save","Undoing a player action","A lag prevention technique using prediction only"]);
  r96.set("correctAnswer", "Rewinding and resimulating game state when server correction arrives for smooth multiplayer");
  r96.set("difficulty", "Intermediate");
  try { app.save(r96); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r97 = new Record(collection);
  r97.set("careerSlug", "game-developer");
  r97.set("question", "What is a ScriptableObject?");
  r97.set("options", ["Data container asset that persists outside scenes for shared game data","A game script","A UI script","A physics object"]);
  r97.set("correctAnswer", "Data container asset that persists outside scenes for shared game data");
  r97.set("difficulty", "Intermediate");
  try { app.save(r97); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r98 = new Record(collection);
  r98.set("careerSlug", "game-developer");
  r98.set("question", "What is procedural generation?");
  r98.set("options", ["Algorithmically generating content like levels or worlds at runtime","A coding procedure","A build pipeline","A testing method"]);
  r98.set("correctAnswer", "Algorithmically generating content like levels or worlds at runtime");
  r98.set("difficulty", "Intermediate");
  try { app.save(r98); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r99 = new Record(collection);
  r99.set("careerSlug", "game-developer");
  r99.set("question", "What is client-side prediction?");
  r99.set("options", ["Client simulates actions immediately without waiting for server confirmation","Server predicting client actions","A cheat detection method","An animation technique"]);
  r99.set("correctAnswer", "Client simulates actions immediately without waiting for server confirmation");
  r99.set("difficulty", "Intermediate");
  try { app.save(r99); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r100 = new Record(collection);
  r100.set("careerSlug", "game-developer");
  r100.set("question", "What is the Unity Job System?");
  r100.set("options", ["Multithreaded code execution system that safely runs jobs in parallel without race conditions","A task scheduler","A coroutine system","A build pipeline"]);
  r100.set("correctAnswer", "Multithreaded code execution system that safely runs jobs in parallel without race conditions");
  r100.set("difficulty", "Advanced");
  try { app.save(r100); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r101 = new Record(collection);
  r101.set("careerSlug", "game-developer");
  r101.set("question", "What is lag compensation in multiplayer games?");
  r101.set("options", ["Server rewinds world state to when client fired to validate hits fairly","Client delaying actions","Reducing server ping","A packet loss technique"]);
  r101.set("correctAnswer", "Server rewinds world state to when client fired to validate hits fairly");
  r101.set("difficulty", "Advanced");
  try { app.save(r101); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r102 = new Record(collection);
  r102.set("careerSlug", "game-developer");
  r102.set("question", "What is a GPU-bound vs CPU-bound game?");
  r102.set("options", ["GPU-bound: rendering is bottleneck; CPU-bound: logic/physics is bottleneck","GPU-bound: faster performance; CPU-bound: slower","They are the same","GPU-bound uses more RAM"]);
  r102.set("correctAnswer", "GPU-bound: rendering is bottleneck; CPU-bound: logic/physics is bottleneck");
  r102.set("difficulty", "Advanced");
  try { app.save(r102); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r103 = new Record(collection);
  r103.set("careerSlug", "game-developer");
  r103.set("question", "What is Burst Compiler in Unity?");
  r103.set("options", ["LLVM-based compiler that compiles C# Job System code to highly optimized native code","A faster C# compiler","A graphics shader compiler","An audio compiler"]);
  r103.set("correctAnswer", "LLVM-based compiler that compiles C# Job System code to highly optimized native code");
  r103.set("difficulty", "Advanced");
  try { app.save(r103); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r104 = new Record(collection);
  r104.set("careerSlug", "game-developer");
  r104.set("question", "What is a draw call and why minimize it?");
  r104.set("options", ["CPU instruction to GPU to render; minimizing reduces CPU-GPU communication overhead","A UI draw event","A player action","A network call"]);
  r104.set("correctAnswer", "CPU instruction to GPU to render; minimizing reduces CPU-GPU communication overhead");
  r104.set("difficulty", "Advanced");
  try { app.save(r104); } catch(err) { if (!err.message.includes("unique")) throw err; }
}, (app) => {});
