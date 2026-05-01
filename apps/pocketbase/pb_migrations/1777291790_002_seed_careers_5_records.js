/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
    record0.set("name", "Embedded Systems Engineer");
    record0.set("slug", "embedded-systems-engineer");
    record0.set("description", "Embedded Systems Engineers design and develop software and hardware for embedded systems used in consumer electronics, automotive, medical devices, and IoT applications.");
    record0.set("overview", "Embedded Systems Engineers create the software and firmware that powers devices from smartphones to industrial equipment. They work with microcontrollers, real-time operating systems, and hardware interfaces to build efficient, reliable systems.");
    record0.set("averageSalary", 130000);
    record0.set("salaryRange", "{'min': 85000, 'max': 175000, 'avg': 130000, 'currency': 'USD'}");
    record0.set("jobDemandOutlook", "Very High - Growing demand across IoT, automotive, and consumer electronics sectors");
    record0.set("topPayingStates", ["California", "Texas", "Massachusetts", "Washington", "New York"]);
    record0.set("roadmap", "{'phase1': {'title': 'Fundamentals', 'duration': '3-6 months', 'focus': 'C/C++, microcontroller basics, digital electronics'}, 'phase2': {'title': 'Core Skills', 'duration': '6-12 months', 'focus': 'RTOS, hardware interfaces, embedded Linux'}, 'phase3': {'title': 'Specialization', 'duration': '6-12 months', 'focus': 'IoT protocols, real-time systems, firmware development'}, 'phase4': {'title': 'Advanced Topics', 'duration': '6-12 months', 'focus': 'System optimization, security, power management'}, 'phase5': {'title': 'Professional Development', 'duration': 'Ongoing', 'focus': 'Industry certifications, project leadership, emerging technologies'}}");
    record0.set("skillsRequired", ["C/C++", "Microcontroller Programming", "RTOS", "Hardware Design", "Embedded Linux", "IoT Protocols", "Real-time Systems", "Firmware Development"]);
    record0.set("salaryInsights", "{'entry': {'level': 'Entry Level (0-2 years)', 'salary': 85000, 'description': 'Recent graduates or career changers starting in embedded systems'}, 'mid': {'level': 'Mid Level (2-5 years)', 'salary': 110000, 'description': 'Experienced engineers with proven project delivery'}, 'senior': {'level': 'Senior Level (5+ years)', 'salary': 150000, 'description': 'Lead engineers, architects, and technical experts'}, 'expert': {'level': 'Expert/Principal (10+ years)', 'salary': 175000, 'description': 'Distinguished engineers and technical leaders'}}");
    record0.set("relatedCareers", ["IoT Developer", "Firmware Engineer", "Hardware Engineer", "Systems Architect"]);
    record0.set("entrySalary", 85000);
    record0.set("midSalary", 110000);
    record0.set("seniorSalary", 150000);
    record0.set("jobDemand", "Very High");
    record0.set("topStates", ["California", "Texas", "Massachusetts", "Washington", "New York"]);
    record0.set("technicalSkills", ["C/C++", "Assembly Language", "RTOS", "Embedded Linux", "Hardware Debugging", "Version Control", "IoT Protocols (MQTT, CoAP)", "Real-time Systems"]);
    record0.set("softSkills", ["Problem Solving", "Communication", "Teamwork", "Attention to Detail", "Time Management", "Documentation", "Critical Thinking"]);
    record0.set("tools", ["KEIL uVision", "IAR Embedded Workbench", "GCC", "JTAG Debuggers", "Oscilloscopes", "Logic Analyzers", "Git", "Jira"]);
    record0.set("faqs", [{"question": "What programming languages are essential for embedded systems?", "answer": "C and C++ are the primary languages. Assembly language is also important for low-level hardware interaction and optimization."}, {"question": "Do I need a degree to become an embedded systems engineer?", "answer": "While a degree in electrical engineering or computer science is common, many successful engineers have bootcamp training or self-taught backgrounds with strong portfolios."}, {"question": "What's the difference between embedded systems and IoT?", "answer": "Embedded systems are specialized computing systems within devices. IoT extends this by connecting embedded systems to networks for data exchange and remote control."}, {"question": "What certifications are valuable in this field?", "answer": "ARM Cortex certifications, RTOS certifications, and vendor-specific certifications (STMicroelectronics, NXP) are highly valued."}]);
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
    record1.set("name", "Bioinformatics Engineer");
    record1.set("slug", "bioinformatics-engineer");
    record1.set("description", "Bioinformatics Engineers develop computational tools and algorithms to analyze biological data, including DNA sequences, protein structures, and genomic information for research and medical applications.");
    record1.set("overview", "Bioinformatics Engineers bridge biology and computer science, creating software solutions for analyzing massive biological datasets. They work in pharmaceutical research, genomics, personalized medicine, and biotechnology companies.");
    record1.set("averageSalary", 125000);
    record1.set("salaryRange", "{'min': 80000, 'max': 170000, 'avg': 125000, 'currency': 'USD'}");
    record1.set("jobDemandOutlook", "Very High - Explosive growth in genomics, personalized medicine, and drug discovery");
    record1.set("topPayingStates", ["California", "Massachusetts", "Maryland", "New York", "Pennsylvania"]);
    record1.set("roadmap", "{'phase1': {'title': 'Biology Foundations', 'duration': '3-6 months', 'focus': 'Molecular biology, genetics, biochemistry basics'}, 'phase2': {'title': 'Programming & Data Science', 'duration': '6-12 months', 'focus': 'Python, R, SQL, data analysis, statistics'}, 'phase3': {'title': 'Bioinformatics Tools', 'duration': '6-12 months', 'focus': 'Sequence alignment, genome assembly, protein analysis'}, 'phase4': {'title': 'Advanced Applications', 'duration': '6-12 months', 'focus': 'Machine learning in genomics, structural biology, systems biology'}, 'phase5': {'title': 'Specialization & Research', 'duration': 'Ongoing', 'focus': 'Research projects, publications, emerging genomic technologies'}}");
    record1.set("skillsRequired", ["Python", "R", "SQL", "Bioinformatics Tools", "Sequence Analysis", "Statistical Analysis", "Machine Learning", "Data Visualization"]);
    record1.set("salaryInsights", "{'entry': {'level': 'Entry Level (0-2 years)', 'salary': 80000, 'description': 'Recent graduates with bioinformatics training'}, 'mid': {'level': 'Mid Level (2-5 years)', 'salary': 105000, 'description': 'Experienced bioinformaticians with project leadership'}, 'senior': {'level': 'Senior Level (5+ years)', 'salary': 140000, 'description': 'Senior scientists and research leads'}, 'expert': {'level': 'Expert/Principal (10+ years)', 'salary': 170000, 'description': 'Principal investigators and technical directors'}}");
    record1.set("relatedCareers", ["Data Scientist", "Computational Biologist", "Genomics Analyst", "Biostatistician"]);
    record1.set("entrySalary", 80000);
    record1.set("midSalary", 105000);
    record1.set("seniorSalary", 140000);
    record1.set("jobDemand", "Very High");
    record1.set("topStates", ["California", "Massachusetts", "Maryland", "New York", "Pennsylvania"]);
    record1.set("technicalSkills", ["Python", "R", "SQL", "BLAST", "Genome Assembly", "Sequence Alignment", "Machine Learning", "Statistical Analysis", "Data Visualization"]);
    record1.set("softSkills", ["Research Skills", "Communication", "Collaboration", "Problem Solving", "Attention to Detail", "Scientific Writing", "Critical Thinking"]);
    record1.set("tools", ["BLAST", "Bowtie2", "SAMtools", "Jupyter Notebook", "RStudio", "Galaxy", "Docker", "Git"]);
    record1.set("faqs", [{"question": "Do I need a biology degree to become a bioinformatics engineer?", "answer": "Not necessarily. Many successful bioinformaticians come from computer science backgrounds and learn biology through specialized programs or on the job."}, {"question": "What's the job market like for bioinformatics?", "answer": "Excellent. The genomics revolution has created massive demand across pharma, biotech, hospitals, and research institutions."}, {"question": "Which programming language should I learn first?", "answer": "Python is recommended for beginners due to its readability and extensive bioinformatics libraries. R is also essential for statistical analysis."}, {"question": "What certifications are available?", "answer": "While formal certifications are less common, completing specialized bioinformatics courses and building a strong portfolio is highly valued."}]);
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
    record2.set("name", "Spatial Computing Developer");
    record2.set("slug", "spatial-computing-developer");
    record2.set("description", "Spatial Computing Developers create applications and experiences for AR/VR/XR platforms, building immersive interfaces that blend digital and physical worlds for gaming, enterprise, and consumer applications.");
    record2.set("overview", "Spatial Computing Developers are at the forefront of the next computing paradigm, creating experiences for AR glasses, VR headsets, and mixed reality platforms. They combine 3D graphics, spatial interaction design, and real-time computing.");
    record2.set("averageSalary", 135000);
    record2.set("salaryRange", "{'min': 90000, 'max': 180000, 'avg': 135000, 'currency': 'USD'}");
    record2.set("jobDemandOutlook", "Very High - Rapid growth in AR/VR/XR with major tech companies investing heavily");
    record2.set("topPayingStates", ["California", "Washington", "New York", "Texas", "Massachusetts"]);
    record2.set("roadmap", "{'phase1': {'title': '3D Graphics Fundamentals', 'duration': '3-6 months', 'focus': '3D math, graphics pipelines, shader programming'}, 'phase2': {'title': 'Game Engine Mastery', 'duration': '6-12 months', 'focus': 'Unity/Unreal, spatial interaction, physics simulation'}, 'phase3': {'title': 'AR/VR Development', 'duration': '6-12 months', 'focus': 'AR frameworks, VR optimization, spatial audio'}, 'phase4': {'title': 'Advanced Techniques', 'duration': '6-12 months', 'focus': 'Hand tracking, eye tracking, advanced rendering, performance optimization'}, 'phase5': {'title': 'Specialization & Innovation', 'duration': 'Ongoing', 'focus': 'Emerging platforms, AI integration, enterprise XR solutions'}}");
    record2.set("skillsRequired", ["C#/C++", "Unity/Unreal Engine", "3D Graphics", "Spatial Interaction Design", "AR/VR Frameworks", "Physics Simulation", "Performance Optimization", "Real-time Rendering"]);
    record2.set("salaryInsights", "{'entry': {'level': 'Entry Level (0-2 years)', 'salary': 90000, 'description': 'Junior developers with game engine experience'}, 'mid': {'level': 'Mid Level (2-5 years)', 'salary': 120000, 'description': 'Experienced XR developers with shipped titles'}, 'senior': {'level': 'Senior Level (5+ years)', 'salary': 155000, 'description': 'Technical leads and senior architects'}, 'expert': {'level': 'Expert/Principal (10+ years)', 'salary': 180000, 'description': 'Principal engineers and innovation leaders'}}");
    record2.set("relatedCareers", ["Game Developer", "3D Graphics Programmer", "VR Designer", "XR Architect"]);
    record2.set("entrySalary", 90000);
    record2.set("midSalary", 120000);
    record2.set("seniorSalary", 155000);
    record2.set("jobDemand", "Very High");
    record2.set("topStates", ["California", "Washington", "New York", "Texas", "Massachusetts"]);
    record2.set("technicalSkills", ["C#", "C++", "Unity", "Unreal Engine", "HLSL/GLSL", "3D Math", "Hand Tracking APIs", "Eye Tracking", "Spatial Audio", "Performance Profiling"]);
    record2.set("softSkills", ["Creativity", "Problem Solving", "Communication", "Collaboration", "User Empathy", "Attention to Detail", "Adaptability"]);
    record2.set("tools", ["Unity", "Unreal Engine", "Visual Studio", "Blender", "Maya", "Git", "Jira", "Meta Quest SDK", "Apple Vision Pro SDK"]);
    record2.set("faqs", [{"question": "What's the difference between AR, VR, and XR?", "answer": "VR is fully immersive virtual worlds. AR overlays digital content on the real world. XR (extended reality) is the umbrella term for all immersive technologies."}, {"question": "Which game engine should I learn?", "answer": "Unity is more beginner-friendly and widely used for mobile VR. Unreal Engine offers superior graphics for high-end VR experiences."}, {"question": "Is game development experience necessary?", "answer": "Yes, game development fundamentals are essential. Most spatial computing developers start with game development experience."}, {"question": "What are the main challenges in spatial computing?", "answer": "Performance optimization, motion sickness prevention, intuitive interaction design, and cross-platform compatibility are key challenges."}]);
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
    record3.set("name", "Renewable Energy Systems Engineer");
    record3.set("slug", "renewable-energy-systems-engineer");
    record3.set("description", "Renewable Energy Systems Engineers design, develop, and optimize systems for solar, wind, hydro, and other renewable energy sources, working on grid integration, energy storage, and sustainable power solutions.");
    record3.set("overview", "Renewable Energy Systems Engineers are critical to the global energy transition, designing systems that harness clean energy sources. They work on solar farms, wind turbines, battery storage, and smart grid technologies.");
    record3.set("averageSalary", 127000);
    record3.set("salaryRange", "{'min': 85000, 'max': 170000, 'avg': 127000, 'currency': 'USD'}");
    record3.set("jobDemandOutlook", "Very High - Global shift to renewable energy creating unprecedented demand");
    record3.set("topPayingStates", ["California", "Texas", "Colorado", "New York", "Massachusetts"]);
    record3.set("roadmap", "{'phase1': {'title': 'Energy Fundamentals', 'duration': '3-6 months', 'focus': 'Thermodynamics, electrical engineering basics, renewable energy principles'}, 'phase2': {'title': 'Renewable Technologies', 'duration': '6-12 months', 'focus': 'Solar systems, wind energy, hydroelectric, geothermal basics'}, 'phase3': {'title': 'System Design & Integration', 'duration': '6-12 months', 'focus': 'Grid integration, energy storage, power electronics, control systems'}, 'phase4': {'title': 'Advanced Applications', 'duration': '6-12 months', 'focus': 'Smart grids, microgrid design, energy management systems, AI optimization'}, 'phase5': {'title': 'Professional Development', 'duration': 'Ongoing', 'focus': 'Project management, sustainability consulting, emerging technologies'}}");
    record3.set("skillsRequired", ["Electrical Engineering", "Power Systems Analysis", "MATLAB/Simulink", "CAD Design", "Energy Storage Systems", "Grid Integration", "Control Systems", "Project Management"]);
    record3.set("salaryInsights", "{'entry': {'level': 'Entry Level (0-2 years)', 'salary': 85000, 'description': 'Recent engineering graduates'}, 'mid': {'level': 'Mid Level (2-5 years)', 'salary': 110000, 'description': 'Experienced engineers with project delivery'}, 'senior': {'level': 'Senior Level (5+ years)', 'salary': 145000, 'description': 'Senior engineers and project leads'}, 'expert': {'level': 'Expert/Principal (10+ years)', 'salary': 170000, 'description': 'Principal engineers and technical directors'}}");
    record3.set("relatedCareers", ["Solar Engineer", "Wind Energy Engineer", "Power Systems Engineer", "Energy Storage Specialist"]);
    record3.set("entrySalary", 85000);
    record3.set("midSalary", 110000);
    record3.set("seniorSalary", 145000);
    record3.set("jobDemand", "Very High");
    record3.set("topStates", ["California", "Texas", "Colorado", "New York", "Massachusetts"]);
    record3.set("technicalSkills", ["Power Systems Analysis", "MATLAB/Simulink", "CAD (AutoCAD, SolidWorks)", "PLC Programming", "SCADA Systems", "Energy Modeling", "Grid Codes", "Battery Management Systems"]);
    record3.set("softSkills", ["Project Management", "Communication", "Problem Solving", "Sustainability Mindset", "Teamwork", "Leadership", "Analytical Thinking"]);
    record3.set("tools", ["MATLAB", "ETAP", "DIgSILENT PowerFactory", "AutoCAD", "SolidWorks", "PLC Software", "Git", "Jira"]);
    record3.set("faqs", [{"question": "Do I need a degree in electrical engineering?", "answer": "A degree in electrical, mechanical, or civil engineering is typical, but some professionals transition from related fields with additional training."}, {"question": "What certifications are important?", "answer": "PE (Professional Engineer) license is valuable. Industry certifications from solar and wind organizations are also beneficial."}, {"question": "What's the job outlook for renewable energy?", "answer": "Excellent. Government incentives and corporate sustainability goals are driving massive growth in renewable energy projects."}, {"question": "What are the main challenges in renewable energy systems?", "answer": "Intermittency management, grid integration, energy storage efficiency, and cost optimization are key technical challenges."}]);
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
    record4.set("name", "Neurotech Engineer");
    record4.set("slug", "neurotech-engineer");
    record4.set("description", "Neurotech Engineers develop brain-computer interfaces, neural implants, and neurotechnology applications that enable direct communication between the brain and external devices for medical and enhancement purposes.");
    record4.set("overview", "Neurotech Engineers are pioneering the intersection of neuroscience and technology, creating devices that can read and interpret brain signals. They work on medical applications like restoring mobility and treating neurological disorders, as well as cognitive enhancement.");
    record4.set("averageSalary", 142000);
    record4.set("salaryRange", "{'min': 95000, 'max': 190000, 'avg': 142000, 'currency': 'USD'}");
    record4.set("jobDemandOutlook", "Very High - Rapidly growing field with major investment from tech companies and medical institutions");
    record4.set("topPayingStates", ["California", "Massachusetts", "New York", "Pennsylvania", "Illinois"]);
    record4.set("roadmap", "{'phase1': {'title': 'Neuroscience Foundations', 'duration': '3-6 months', 'focus': 'Neurobiology, brain anatomy, neural signals, EEG/fMRI basics'}, 'phase2': {'title': 'Signal Processing & Electronics', 'duration': '6-12 months', 'focus': 'Signal processing, biomedical electronics, circuit design, embedded systems'}, 'phase3': {'title': 'BCI Development', 'duration': '6-12 months', 'focus': 'Brain-computer interfaces, neural decoding, machine learning for neural data'}, 'phase4': {'title': 'Advanced Applications', 'duration': '6-12 months', 'focus': 'Neural implants, closed-loop systems, real-time processing, clinical applications'}, 'phase5': {'title': 'Innovation & Specialization', 'duration': 'Ongoing', 'focus': 'Research, emerging technologies, regulatory compliance, clinical trials'}}");
    record4.set("skillsRequired", ["Signal Processing", "Machine Learning", "Embedded Systems", "Biomedical Electronics", "Python/MATLAB", "Neural Decoding", "Neuroscience Knowledge", "Regulatory Compliance"]);
    record4.set("salaryInsights", "{'entry': {'level': 'Entry Level (0-2 years)', 'salary': 95000, 'description': 'Recent graduates with neurotech training'}, 'mid': {'level': 'Mid Level (2-5 years)', 'salary': 125000, 'description': 'Experienced engineers with project contributions'}, 'senior': {'level': 'Senior Level (5+ years)', 'salary': 160000, 'description': 'Senior engineers and research scientists'}, 'expert': {'level': 'Expert/Principal (10+ years)', 'salary': 190000, 'description': 'Principal investigators and technical directors'}}");
    record4.set("relatedCareers", ["Biomedical Engineer", "Neuroscientist", "Signal Processing Engineer", "Medical Device Engineer"]);
    record4.set("entrySalary", 95000);
    record4.set("midSalary", 125000);
    record4.set("seniorSalary", 160000);
    record4.set("jobDemand", "Very High");
    record4.set("topStates", ["California", "Massachusetts", "New York", "Pennsylvania", "Illinois"]);
    record4.set("technicalSkills", ["Signal Processing", "Machine Learning", "Python", "MATLAB", "C/C++", "Neural Decoding Algorithms", "Biomedical Electronics", "Real-time Systems", "Data Analysis"]);
    record4.set("softSkills", ["Research Skills", "Problem Solving", "Communication", "Collaboration", "Ethical Thinking", "Attention to Detail", "Creativity"]);
    record4.set("tools", ["MATLAB", "Python (TensorFlow, PyTorch)", "OpenBCI", "LabVIEW", "Git", "Jupyter Notebook", "Statistical Software", "Medical Device Software"]);
    record4.set("faqs", [{"question": "What background do I need for neurotech?", "answer": "Backgrounds in electrical engineering, biomedical engineering, neuroscience, or computer science are all viable. Cross-disciplinary knowledge is valuable."}, {"question": "What are the main applications of neurotech?", "answer": "Medical applications include treating paralysis, Parkinson's, epilepsy, and depression. Enhancement applications are emerging but more controversial."}, {"question": "What are the ethical considerations?", "answer": "Privacy, consent, equity of access, and long-term safety are critical ethical concerns in neurotech development."}, {"question": "What's the regulatory landscape?", "answer": "Neurotech devices are heavily regulated by the FDA. Understanding medical device regulations and clinical trial processes is essential."}]);
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
