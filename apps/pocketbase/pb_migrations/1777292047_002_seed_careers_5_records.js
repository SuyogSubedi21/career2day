/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
    record0.set("name", "Quantum Software Engineer");
    record0.set("slug", "quantum-software-engineer");
    record0.set("description", "Quantum Software Engineers develop algorithms and applications for quantum computers, working with quantum programming languages and frameworks to solve complex computational problems.");
    record0.set("overview", "Quantum Software Engineers are at the forefront of computing innovation, developing software for quantum computers that can solve problems exponentially faster than classical computers. They work with quantum programming languages like Qiskit, Cirq, and Q#, collaborating with quantum hardware teams to optimize algorithms for quantum processors.");
    record0.set("averageSalary", 165000);
    record0.set("salaryRange", "{'min': 110000, 'max': 220000}");
    record0.set("jobDemandOutlook", "108% job growth");
    record0.set("topPayingStates", ["California", "Massachusetts", "New York", "Colorado", "Washington"]);
    record0.set("roadmap", "{'phase1': {'title': 'Quantum Computing Fundamentals', 'duration': '3 weeks', 'topics': ['Quantum mechanics basics', 'Qubits and superposition', 'Quantum gates', 'Quantum circuits']}, 'phase2': {'title': 'Quantum Programming Languages', 'duration': '4 weeks', 'topics': ['Qiskit framework', 'Cirq programming', 'Q# language', 'Quantum algorithm design']}, 'phase3': {'title': 'Advanced Quantum Algorithms', 'duration': '3 weeks', 'topics': [\"Shor's algorithm\", \"Grover's algorithm\", 'Variational quantum algorithms', 'QAOA']}, 'phase4': {'title': 'Quantum Hardware Integration', 'duration': '3 weeks', 'topics': ['Quantum processor architecture', 'Error correction', 'Quantum simulation', 'Hardware optimization']}, 'phase5': {'title': 'Real-World Applications', 'duration': '2 weeks', 'topics': ['Drug discovery', 'Financial modeling', 'Optimization problems', 'Machine learning applications']}}");
    record0.set("skillsRequired", ["Quantum mechanics", "Python", "Linear algebra", "Qiskit", "Cirq", "Q#", "Algorithm design", "Problem-solving"]);
    record0.set("salaryInsights", "{'entry': {'years': '0-2', 'salary': 100000}, 'mid': {'years': '2-5', 'salary': 150000}, 'senior': {'years': '5-10', 'salary': 190000}, 'expert': {'years': '10+', 'salary': 220000}}");
    record0.set("relatedCareers", ["Machine Learning Engineer", "Data Scientist", "Software Engineer", "Research Scientist"]);
    record0.set("entrySalary", 100000);
    record0.set("midSalary", 150000);
    record0.set("seniorSalary", 190000);
    record0.set("jobDemand", "Very High");
    record0.set("topStates", ["California", "Massachusetts", "New York", "Colorado", "Washington"]);
    record0.set("technicalSkills", ["Quantum mechanics", "Python", "Qiskit", "Cirq", "Q#", "Linear algebra", "Algorithm design", "Quantum simulation"]);
    record0.set("softSkills", ["Problem-solving", "Collaboration", "Communication", "Analytical thinking", "Creativity"]);
    record0.set("tools", ["Qiskit", "Cirq", "Q#", "IBM Quantum Experience", "Azure Quantum", "Jupyter Notebook"]);
    record0.set("faqs", [{"question": "What is quantum computing?", "answer": "Quantum computing uses quantum bits (qubits) that can exist in multiple states simultaneously, enabling exponentially faster computation for certain problems."}, {"question": "Do I need a physics degree?", "answer": "While helpful, a strong background in mathematics and computer science can be sufficient with dedicated quantum computing study."}, {"question": "What companies hire quantum software engineers?", "answer": "IBM, Google, Microsoft, Amazon, Intel, and startups like Rigetti and IonQ actively hire quantum software engineers."}]);
  try {
    app.save(record0);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record1 = new Record(collection);
    record1.set("name", "Autonomous Systems Engineer");
    record1.set("slug", "autonomous-systems-engineer");
    record1.set("description", "Autonomous Systems Engineers design and develop self-governing systems that can operate independently without human intervention, including robots, drones, and autonomous vehicles.");
    record1.set("overview", "Autonomous Systems Engineers create intelligent systems that can perceive their environment, make decisions, and take actions without human control. They work on robotics, autonomous vehicles, drones, and industrial automation, integrating computer vision, AI, and control systems.");
    record1.set("averageSalary", 150000);
    record1.set("salaryRange", "{'min': 100000, 'max': 200000}");
    record1.set("jobDemandOutlook", "107% job growth");
    record1.set("topPayingStates", ["California", "Texas", "Michigan", "Massachusetts", "Arizona"]);
    record1.set("roadmap", "{'phase1': {'title': 'Robotics Fundamentals', 'duration': '3 weeks', 'topics': ['Robot kinematics', 'Control systems', 'Sensors and actuators', 'ROS basics']}, 'phase2': {'title': 'Perception and Computer Vision', 'duration': '4 weeks', 'topics': ['Image processing', 'Object detection', 'SLAM', '3D vision']}, 'phase3': {'title': 'AI and Decision Making', 'duration': '3 weeks', 'topics': ['Machine learning', 'Path planning', 'Reinforcement learning', 'Decision trees']}, 'phase4': {'title': 'System Integration', 'duration': '3 weeks', 'topics': ['Hardware integration', 'Real-time systems', 'Testing and validation', 'Safety protocols']}, 'phase5': {'title': 'Advanced Applications', 'duration': '2 weeks', 'topics': ['Autonomous vehicles', 'Drone systems', 'Industrial robots', 'Swarm robotics']}}");
    record1.set("skillsRequired", ["Robotics", "Python", "C++", "ROS", "Computer vision", "Control systems", "Machine learning", "System design"]);
    record1.set("salaryInsights", "{'entry': {'years': '0-2', 'salary': 90000}, 'mid': {'years': '2-5', 'salary': 130000}, 'senior': {'years': '5-10', 'salary': 170000}, 'expert': {'years': '10+', 'salary': 200000}}");
    record1.set("relatedCareers", ["Robotics Engineer", "AI Engineer", "Embedded Systems Engineer", "Mechanical Engineer"]);
    record1.set("entrySalary", 90000);
    record1.set("midSalary", 130000);
    record1.set("seniorSalary", 170000);
    record1.set("jobDemand", "Very High");
    record1.set("topStates", ["California", "Texas", "Michigan", "Massachusetts", "Arizona"]);
    record1.set("technicalSkills", ["Robotics", "Python", "C++", "ROS", "Computer vision", "Control systems", "Machine learning", "SLAM"]);
    record1.set("softSkills", ["Problem-solving", "Teamwork", "Communication", "Attention to detail", "Innovation"]);
    record1.set("tools", ["ROS", "Gazebo", "OpenCV", "TensorFlow", "PyTorch", "MATLAB"]);
    record1.set("faqs", [{"question": "What is ROS?", "answer": "Robot Operating System (ROS) is a flexible framework for writing robot software, providing tools and libraries for building robot applications."}, {"question": "What industries hire autonomous systems engineers?", "answer": "Automotive, aerospace, manufacturing, agriculture, healthcare, and logistics industries all employ autonomous systems engineers."}, {"question": "Is a robotics degree required?", "answer": "No, degrees in computer science, electrical engineering, or mechanical engineering with robotics focus are equally valuable."}]);
  try {
    app.save(record1);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record2 = new Record(collection);
    record2.set("name", "Augmented Reality (AR) Developer");
    record2.set("slug", "augmented-reality-developer");
    record2.set("description", "AR Developers create immersive applications that overlay digital content onto the real world, using AR frameworks and technologies to build engaging user experiences.");
    record2.set("overview", "Augmented Reality Developers build applications that blend digital content with the physical world, creating interactive experiences for mobile devices, AR glasses, and spatial computing platforms. They work with AR frameworks like ARKit, ARCore, and Unreal Engine to develop innovative applications.");
    record2.set("averageSalary", 130000);
    record2.set("salaryRange", "{'min': 85000, 'max': 175000}");
    record2.set("jobDemandOutlook", "104% job growth");
    record2.set("topPayingStates", ["California", "Washington", "New York", "Texas", "Massachusetts"]);
    record2.set("roadmap", "{'phase1': {'title': 'AR Fundamentals', 'duration': '3 weeks', 'topics': ['AR concepts', 'Spatial computing', '3D graphics basics', 'AR frameworks overview']}, 'phase2': {'title': 'Mobile AR Development', 'duration': '4 weeks', 'topics': ['ARKit (iOS)', 'ARCore (Android)', 'Mobile optimization', 'User interaction']}, 'phase3': {'title': '3D Modeling and Animation', 'duration': '3 weeks', 'topics': ['3D modeling', 'Animation', 'Particle effects', 'Physics simulation']}, 'phase4': {'title': 'Advanced AR Features', 'duration': '3 weeks', 'topics': ['Object recognition', 'Image tracking', 'Face filters', 'Environmental understanding']}, 'phase5': {'title': 'AR Applications', 'duration': '2 weeks', 'topics': ['E-commerce AR', 'Gaming', 'Education', 'Enterprise solutions']}}");
    record2.set("skillsRequired", ["Unity", "Unreal Engine", "C#", "Swift", "Kotlin", "3D graphics", "Computer vision", "Mobile development"]);
    record2.set("salaryInsights", "{'entry': {'years': '0-2', 'salary': 75000}, 'mid': {'years': '2-5', 'salary': 110000}, 'senior': {'years': '5-10', 'salary': 150000}, 'expert': {'years': '10+', 'salary': 175000}}");
    record2.set("relatedCareers", ["VR Developer", "Game Developer", "3D Graphics Programmer", "Mobile Developer"]);
    record2.set("entrySalary", 75000);
    record2.set("midSalary", 110000);
    record2.set("seniorSalary", 150000);
    record2.set("jobDemand", "Very High");
    record2.set("topStates", ["California", "Washington", "New York", "Texas", "Massachusetts"]);
    record2.set("technicalSkills", ["Unity", "Unreal Engine", "C#", "Swift", "Kotlin", "3D graphics", "Computer vision", "ARKit", "ARCore"]);
    record2.set("softSkills", ["Creativity", "User experience design", "Problem-solving", "Collaboration", "Attention to detail"]);
    record2.set("tools", ["Unity", "Unreal Engine", "ARKit", "ARCore", "Blender", "Maya", "Xcode", "Android Studio"]);
    record2.set("faqs", [{"question": "What's the difference between AR and VR?", "answer": "AR overlays digital content on the real world, while VR creates a completely immersive virtual environment."}, {"question": "Which AR framework should I learn first?", "answer": "Start with ARKit for iOS or ARCore for Android, depending on your target platform."}, {"question": "What companies are hiring AR developers?", "answer": "Apple, Google, Meta, Microsoft, Snapchat, and many gaming and e-commerce companies actively hire AR developers."}]);
  try {
    app.save(record2);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record3 = new Record(collection);
    record3.set("name", "Quantum Machine Learning Engineer");
    record3.set("slug", "quantum-machine-learning-engineer");
    record3.set("description", "Quantum Machine Learning Engineers combine quantum computing with machine learning to develop algorithms that leverage quantum advantages for data analysis and pattern recognition.");
    record3.set("overview", "Quantum Machine Learning Engineers are pioneering the intersection of quantum computing and artificial intelligence, developing hybrid algorithms that use quantum processors to accelerate machine learning tasks. They work on quantum neural networks, quantum feature mapping, and quantum optimization algorithms.");
    record3.set("averageSalary", 172000);
    record3.set("salaryRange", "{'min': 115000, 'max': 230000}");
    record3.set("jobDemandOutlook", "109% job growth");
    record3.set("topPayingStates", ["California", "Massachusetts", "New York", "Colorado", "Washington"]);
    record3.set("roadmap", "{'phase1': {'title': 'Quantum and ML Foundations', 'duration': '3 weeks', 'topics': ['Quantum mechanics', 'Machine learning basics', 'Linear algebra', 'Quantum gates']}, 'phase2': {'title': 'Quantum Machine Learning Theory', 'duration': '4 weeks', 'topics': ['Quantum neural networks', 'Quantum feature maps', 'Variational algorithms', 'Quantum kernels']}, 'phase3': {'title': 'Quantum ML Implementation', 'duration': '3 weeks', 'topics': ['Qiskit ML', 'PennyLane', 'TensorFlow Quantum', 'Hybrid algorithms']}, 'phase4': {'title': 'Optimization and Applications', 'duration': '3 weeks', 'topics': ['QAOA', 'VQE', 'Quantum annealing', 'Real-world problems']}, 'phase5': {'title': 'Advanced Research Topics', 'duration': '2 weeks', 'topics': ['Quantum advantage', 'Error mitigation', 'Scalability', 'Future directions']}}");
    record3.set("skillsRequired", ["Quantum mechanics", "Machine learning", "Python", "Qiskit", "TensorFlow", "Linear algebra", "Algorithm design", "Research skills"]);
    record3.set("salaryInsights", "{'entry': {'years': '0-2', 'salary': 105000}, 'mid': {'years': '2-5', 'salary': 155000}, 'senior': {'years': '5-10', 'salary': 200000}, 'expert': {'years': '10+', 'salary': 230000}}");
    record3.set("relatedCareers", ["Quantum Software Engineer", "Machine Learning Engineer", "Data Scientist", "Research Scientist"]);
    record3.set("entrySalary", 105000);
    record3.set("midSalary", 155000);
    record3.set("seniorSalary", 200000);
    record3.set("jobDemand", "Very High");
    record3.set("topStates", ["California", "Massachusetts", "New York", "Colorado", "Washington"]);
    record3.set("technicalSkills", ["Quantum mechanics", "Machine learning", "Python", "Qiskit", "TensorFlow", "PyTorch", "Linear algebra", "Algorithm design"]);
    record3.set("softSkills", ["Research mindset", "Problem-solving", "Communication", "Collaboration", "Analytical thinking"]);
    record3.set("tools", ["Qiskit", "PennyLane", "TensorFlow Quantum", "PyTorch", "Jupyter Notebook", "IBM Quantum Experience"]);
    record3.set("faqs", [{"question": "What is quantum machine learning?", "answer": "Quantum machine learning combines quantum computing with ML algorithms to potentially solve certain problems faster than classical computers."}, {"question": "Do I need a PhD?", "answer": "While many roles prefer advanced degrees, strong self-study and portfolio projects can demonstrate competency."}, {"question": "What are current applications?", "answer": "Drug discovery, financial modeling, optimization problems, and pattern recognition are active research areas."}]);
  try {
    app.save(record3);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record4 = new Record(collection);
    record4.set("name", "Extended Reality (XR) Architect");
    record4.set("slug", "extended-reality-architect");
    record4.set("description", "XR Architects design comprehensive extended reality solutions that integrate AR, VR, and mixed reality technologies to create immersive digital experiences across multiple platforms.");
    record4.set("overview", "Extended Reality Architects are strategic technologists who design and oversee the development of immersive experiences that blend physical and digital worlds. They architect solutions for enterprise, entertainment, education, and healthcare, managing complex technical requirements and user experience considerations.");
    record4.set("averageSalary", 157000);
    record4.set("salaryRange", "{'min': 105000, 'max': 210000}");
    record4.set("jobDemandOutlook", "106% job growth");
    record4.set("topPayingStates", ["California", "Washington", "New York", "Texas", "Massachusetts"]);
    record4.set("roadmap", "{'phase1': {'title': 'XR Fundamentals and Strategy', 'duration': '3 weeks', 'topics': ['AR/VR/MR concepts', 'XR ecosystem', 'Platform overview', 'User experience design']}, 'phase2': {'title': 'Technical Architecture', 'duration': '4 weeks', 'topics': ['System design', 'Hardware integration', 'Network architecture', 'Performance optimization']}, 'phase3': {'title': 'Development Frameworks', 'duration': '3 weeks', 'topics': ['Unity for XR', 'Unreal Engine', 'WebXR', 'Cross-platform development']}, 'phase4': {'title': 'Enterprise Solutions', 'duration': '3 weeks', 'topics': ['Enterprise XR', 'Training applications', 'Collaboration tools', 'Security and compliance']}, 'phase5': {'title': 'Advanced Implementation', 'duration': '2 weeks', 'topics': ['Spatial computing', 'AI integration', 'Analytics', 'Future technologies']}}");
    record4.set("skillsRequired", ["XR design", "System architecture", "Unity", "Unreal Engine", "C#", "3D graphics", "User experience", "Project management"]);
    record4.set("salaryInsights", "{'entry': {'years': '0-2', 'salary': 85000}, 'mid': {'years': '2-5', 'salary': 125000}, 'senior': {'years': '5-10', 'salary': 165000}, 'expert': {'years': '10+', 'salary': 210000}}");
    record4.set("relatedCareers", ["VR Developer", "AR Developer", "Game Architect", "Technical Lead"]);
    record4.set("entrySalary", 85000);
    record4.set("midSalary", 125000);
    record4.set("seniorSalary", 165000);
    record4.set("jobDemand", "Very High");
    record4.set("topStates", ["California", "Washington", "New York", "Texas", "Massachusetts"]);
    record4.set("technicalSkills", ["XR design", "System architecture", "Unity", "Unreal Engine", "C#", "3D graphics", "User experience design", "Project management"]);
    record4.set("softSkills", ["Leadership", "Strategic thinking", "Communication", "Problem-solving", "Creativity"]);
    record4.set("tools", ["Unity", "Unreal Engine", "Blender", "Maya", "Figma", "Jira", "Git"]);
    record4.set("faqs", [{"question": "What is Extended Reality (XR)?", "answer": "XR is an umbrella term encompassing AR, VR, and MR technologies that create immersive digital experiences."}, {"question": "What's the difference between XR architect and developer?", "answer": "Architects design the overall system and strategy, while developers implement the technical solutions."}, {"question": "What industries need XR architects?", "answer": "Gaming, entertainment, healthcare, education, manufacturing, real estate, and enterprise training all employ XR architects."}]);
  try {
    app.save(record4);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})
