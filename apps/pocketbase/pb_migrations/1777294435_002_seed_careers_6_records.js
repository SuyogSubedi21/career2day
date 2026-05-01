/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
    record0.set("name", "Mechanical Engineer");
    record0.set("slug", "mechanical-engineer");
    record0.set("description", "Design and develop mechanical systems, machines, and products using engineering principles.");
    record0.set("overview", "Mechanical engineers design and develop mechanical systems. They work on everything from engines to consumer products, applying physics and materials science.");
    record0.set("averageSalary", 105000);
    record0.set("salaryRange", "{'min': 60000, 'max': 160000}");
    record0.set("jobDemandOutlook", "Medium");
    record0.set("entrySalary", 60000);
    record0.set("midSalary", 105000);
    record0.set("seniorSalary", 160000);
    record0.set("jobDemand", "Medium");
    record0.set("skillsRequired", [{"skill": "CAD", "proficiency": "Advanced"}, {"skill": "Thermodynamics", "proficiency": "Advanced"}, {"skill": "Mechanics", "proficiency": "Advanced"}, {"skill": "Materials Science", "proficiency": "Intermediate"}, {"skill": "Problem Solving", "proficiency": "Advanced"}, {"skill": "Project Management", "proficiency": "Intermediate"}]);
    record0.set("softSkills", ["Problem Solving", "Attention to Detail", "Communication", "Teamwork", "Creativity"]);
    record0.set("tools", ["AutoCAD", "SolidWorks", "MATLAB", "ANSYS", "Fusion 360", "Git", "Project Management Tools"]);
    record0.set("topPayingStates", [{"state": "California", "salary": 125000}, {"state": "Texas", "salary": 118000}, {"state": "Michigan", "salary": 115000}, {"state": "Ohio", "salary": 112000}, {"state": "Massachusetts", "salary": 110000}]);
    record0.set("relatedCareers", ["automation-engineer", "robotics-engineer", "civil-engineer"]);
    record0.set("salaryInsights", "{'trends': 'Stable with 5% growth expected', 'growthProjection': 'Consistent demand in manufacturing and automotive', 'benefits': 'Stable employment, benefits, job security, learning opportunities'}");
    record0.set("roadmap", [{"stage": "Junior Mechanical Engineer", "duration": "0-2 years", "skills": ["CAD basics", "Design fundamentals", "Analysis"], "salary": 60000}, {"stage": "Mechanical Engineer", "duration": "2-5 years", "skills": ["Advanced design", "Project management", "System optimization"], "salary": 105000}, {"stage": "Senior Mechanical Engineer", "duration": "5+ years", "skills": ["Architecture", "Team leadership", "Strategic planning"], "salary": 160000}]);
    record0.set("faqs", [{"question": "Do I need a PE license?", "answer": "Not required to start, but helpful for advancement. Many engineers pursue PE certification."}, {"question": "What industries hire mechanical engineers?", "answer": "Automotive, aerospace, manufacturing, energy, and consumer products all have high demand."}, {"question": "What's the job market like?", "answer": "Stable but slower growth than software engineering. Salaries are competitive."}]);
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
    record1.set("name", "Civil Engineer");
    record1.set("slug", "civil-engineer");
    record1.set("description", "Design and oversee construction of infrastructure projects including buildings, bridges, and roads.");
    record1.set("overview", "Civil engineers design and manage infrastructure projects. They work on buildings, bridges, roads, and water systems.");
    record1.set("averageSalary", 100000);
    record1.set("salaryRange", "{'min': 58000, 'max': 155000}");
    record1.set("jobDemandOutlook", "Medium");
    record1.set("entrySalary", 58000);
    record1.set("midSalary", 100000);
    record1.set("seniorSalary", 155000);
    record1.set("jobDemand", "Medium");
    record1.set("skillsRequired", [{"skill": "CAD", "proficiency": "Advanced"}, {"skill": "Structural Analysis", "proficiency": "Advanced"}, {"skill": "Project Management", "proficiency": "Advanced"}, {"skill": "Building Codes", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}, {"skill": "Communication", "proficiency": "Advanced"}]);
    record1.set("softSkills", ["Problem Solving", "Attention to Detail", "Communication", "Teamwork", "Leadership"]);
    record1.set("tools", ["AutoCAD", "Revit", "SAP2000", "ETABS", "BIM Tools", "Project Management Tools", "GIS"]);
    record1.set("topPayingStates", [{"state": "California", "salary": 120000}, {"state": "Texas", "salary": 112000}, {"state": "New York", "salary": 110000}, {"state": "Florida", "salary": 108000}, {"state": "Colorado", "salary": 105000}]);
    record1.set("relatedCareers", ["mechanical-engineer", "architect", "construction-manager"]);
    record1.set("salaryInsights", "{'trends': 'Stable with 5% growth expected', 'growthProjection': 'Consistent demand for infrastructure projects', 'benefits': 'Stable employment, benefits, job security, learning opportunities'}");
    record1.set("roadmap", [{"stage": "Junior Civil Engineer", "duration": "0-2 years", "skills": ["CAD basics", "Design fundamentals", "Building codes"], "salary": 58000}, {"stage": "Civil Engineer", "duration": "2-5 years", "skills": ["Advanced design", "Project management", "Structural analysis"], "salary": 100000}, {"stage": "Senior Civil Engineer", "duration": "5+ years", "skills": ["Project leadership", "Team management", "Strategic planning"], "salary": 155000}]);
    record1.set("faqs", [{"question": "Do I need a PE license?", "answer": "Yes, PE license is important for career advancement and taking on leadership roles."}, {"question": "What industries hire civil engineers?", "answer": "Construction, government, consulting, and infrastructure all have high demand."}, {"question": "What's the job market like?", "answer": "Stable with consistent demand. Infrastructure investment is driving growth."}]);
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
    record2.set("name", "Electrical Engineer");
    record2.set("slug", "electrical-engineer");
    record2.set("description", "Design and develop electrical systems, power distribution, and electronic devices.");
    record2.set("overview", "Electrical engineers design electrical systems and devices. They work on power systems, electronics, and control systems.");
    record2.set("averageSalary", 108000);
    record2.set("salaryRange", "{'min': 62000, 'max': 165000}");
    record2.set("jobDemandOutlook", "Medium");
    record2.set("entrySalary", 62000);
    record2.set("midSalary", 108000);
    record2.set("seniorSalary", 165000);
    record2.set("jobDemand", "Medium");
    record2.set("skillsRequired", [{"skill": "Circuit Design", "proficiency": "Advanced"}, {"skill": "Power Systems", "proficiency": "Advanced"}, {"skill": "Electronics", "proficiency": "Advanced"}, {"skill": "CAD", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}, {"skill": "Testing", "proficiency": "Intermediate"}]);
    record2.set("softSkills", ["Problem Solving", "Attention to Detail", "Communication", "Teamwork", "Creativity"]);
    record2.set("tools", ["SPICE", "CAD", "Oscilloscope", "Multimeter", "MATLAB", "Simulink", "PCB Design Tools"]);
    record2.set("topPayingStates", [{"state": "California", "salary": 128000}, {"state": "Texas", "salary": 120000}, {"state": "New York", "salary": 118000}, {"state": "Massachusetts", "salary": 115000}, {"state": "Colorado", "salary": 112000}]);
    record2.set("relatedCareers", ["mechanical-engineer", "electronics-engineer", "power-systems-engineer"]);
    record2.set("salaryInsights", "{'trends': 'Stable with 5% growth expected', 'growthProjection': 'Consistent demand in power and electronics', 'benefits': 'Stable employment, benefits, job security, learning opportunities'}");
    record2.set("roadmap", [{"stage": "Junior Electrical Engineer", "duration": "0-2 years", "skills": ["Circuit design basics", "Electronics fundamentals", "Testing"], "salary": 62000}, {"stage": "Electrical Engineer", "duration": "2-5 years", "skills": ["Advanced design", "Power systems", "Project management"], "salary": 108000}, {"stage": "Senior Electrical Engineer", "duration": "5+ years", "skills": ["Architecture", "Team leadership", "Strategic planning"], "salary": 165000}]);
    record2.set("faqs", [{"question": "Do I need a PE license?", "answer": "Not required to start, but helpful for advancement. Many engineers pursue PE certification."}, {"question": "What industries hire electrical engineers?", "answer": "Power, electronics, automotive, aerospace, and manufacturing all have high demand."}, {"question": "What's the job market like?", "answer": "Stable with consistent demand. Renewable energy is driving growth."}]);
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
    record3.set("name", "Architect");
    record3.set("slug", "architect");
    record3.set("description", "Design buildings and structures that are functional, safe, and aesthetically pleasing.");
    record3.set("overview", "Architects design buildings and structures. They balance aesthetics, functionality, and safety while managing budgets and timelines.");
    record3.set("averageSalary", 95000);
    record3.set("salaryRange", "{'min': 55000, 'max': 150000}");
    record3.set("jobDemandOutlook", "Medium");
    record3.set("entrySalary", 55000);
    record3.set("midSalary", 95000);
    record3.set("seniorSalary", 150000);
    record3.set("jobDemand", "Medium");
    record3.set("skillsRequired", [{"skill": "Architectural Design", "proficiency": "Advanced"}, {"skill": "CAD/BIM", "proficiency": "Advanced"}, {"skill": "Building Codes", "proficiency": "Advanced"}, {"skill": "Project Management", "proficiency": "Advanced"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Creativity", "proficiency": "Advanced"}]);
    record3.set("softSkills", ["Creativity", "Communication", "Problem Solving", "Attention to Detail", "Leadership"]);
    record3.set("tools", ["Revit", "AutoCAD", "SketchUp", "Rhino", "Lumion", "BIM Tools", "Project Management Tools"]);
    record3.set("topPayingStates", [{"state": "California", "salary": 115000}, {"state": "New York", "salary": 108000}, {"state": "Massachusetts", "salary": 105000}, {"state": "Washington", "salary": 102000}, {"state": "Colorado", "salary": 98000}]);
    record3.set("relatedCareers", ["civil-engineer", "interior-designer", "construction-manager"]);
    record3.set("salaryInsights", "{'trends': 'Stable with 3% growth expected', 'growthProjection': 'Consistent demand for building design', 'benefits': 'Creative work, flexible hours, portfolio-driven, competitive salary'}");
    record3.set("roadmap", [{"stage": "Junior Architect", "duration": "0-2 years", "skills": ["Design basics", "CAD/BIM", "Building codes"], "salary": 55000}, {"stage": "Architect", "duration": "2-5 years", "skills": ["Advanced design", "Project management", "Client relations"], "salary": 95000}, {"stage": "Senior Architect", "duration": "5+ years", "skills": ["Design leadership", "Firm management", "Strategic planning"], "salary": 150000}]);
    record3.set("faqs", [{"question": "Do I need a license?", "answer": "Yes, you need to be licensed to practice architecture. This requires education, internship, and exams."}, {"question": "How long does it take to become licensed?", "answer": "Typically 7-10 years including education, internship, and exams."}, {"question": "What's the job market like?", "answer": "Stable but slower growth. Portfolio quality and experience matter most."}]);
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
    record4.set("name", "Construction Manager");
    record4.set("slug", "construction-manager");
    record4.set("description", "Oversee construction projects, manage budgets, schedules, and ensure quality and safety.");
    record4.set("overview", "Construction managers oversee building projects from start to finish. They manage budgets, schedules, teams, and ensure quality and safety.");
    record4.set("averageSalary", 110000);
    record4.set("salaryRange", "{'min': 62000, 'max': 170000}");
    record4.set("jobDemandOutlook", "High");
    record4.set("entrySalary", 62000);
    record4.set("midSalary", 110000);
    record4.set("seniorSalary", 170000);
    record4.set("jobDemand", "High");
    record4.set("skillsRequired", [{"skill": "Project Management", "proficiency": "Advanced"}, {"skill": "Budget Management", "proficiency": "Advanced"}, {"skill": "Building Codes", "proficiency": "Advanced"}, {"skill": "Leadership", "proficiency": "Advanced"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}]);
    record4.set("softSkills", ["Leadership", "Communication", "Problem Solving", "Attention to Detail", "Teamwork"]);
    record4.set("tools", ["Primavera", "Microsoft Project", "Procore", "BIM Tools", "Excel", "Slack", "Scheduling Tools"]);
    record4.set("topPayingStates", [{"state": "California", "salary": 130000}, {"state": "Texas", "salary": 122000}, {"state": "New York", "salary": 120000}, {"state": "Florida", "salary": 118000}, {"state": "Colorado", "salary": 115000}]);
    record4.set("relatedCareers", ["civil-engineer", "project-manager", "architect"]);
    record4.set("salaryInsights", "{'trends': 'Growing demand with 10% job growth expected', 'growthProjection': 'Strong market as infrastructure investment increases', 'benefits': 'Competitive salary, benefits, job security, leadership opportunities'}");
    record4.set("roadmap", [{"stage": "Assistant Construction Manager", "duration": "0-2 years", "skills": ["Project basics", "Budget management", "Building codes"], "salary": 62000}, {"stage": "Construction Manager", "duration": "2-5 years", "skills": ["Advanced project management", "Team leadership", "Client relations"], "salary": 110000}, {"stage": "Senior Construction Manager", "duration": "5+ years", "skills": ["Portfolio management", "Strategic planning", "Executive leadership"], "salary": 170000}]);
    record4.set("faqs", [{"question": "Do I need a degree?", "answer": "Helpful but not required. Experience and certifications matter more."}, {"question": "What certifications are important?", "answer": "CMC (Certified Construction Manager) is highly valued."}, {"question": "What's the job market like?", "answer": "Strong demand as infrastructure investment increases. Salaries are competitive."}]);
  try {
    app.save(record4);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record5 = new Record(collection);
    record5.set("name", "Finance Manager");
    record5.set("slug", "finance-manager");
    record5.set("description", "Manage financial operations, budgets, and financial planning for organizations.");
    record5.set("overview", "Finance managers oversee financial operations. They manage budgets, financial planning, and ensure financial health.");
    record5.set("averageSalary", 115000);
    record5.set("salaryRange", "{'min': 65000, 'max': 180000}");
    record5.set("jobDemandOutlook", "High");
    record5.set("entrySalary", 65000);
    record5.set("midSalary", 115000);
    record5.set("seniorSalary", 180000);
    record5.set("jobDemand", "High");
    record5.set("skillsRequired", [{"skill": "Financial Analysis", "proficiency": "Advanced"}, {"skill": "Budgeting", "proficiency": "Advanced"}, {"skill": "Accounting", "proficiency": "Advanced"}, {"skill": "Excel", "proficiency": "Advanced"}, {"skill": "Communication", "proficiency": "Advanced"}, {"skill": "Problem Solving", "proficiency": "Advanced"}]);
    record5.set("softSkills", ["Communication", "Problem Solving", "Attention to Detail", "Leadership", "Strategic Thinking"]);
    record5.set("tools", ["Excel", "SAP", "Oracle", "Tableau", "Power BI", "Accounting Software", "Financial Planning Tools"]);
    record5.set("topPayingStates", [{"state": "New York", "salary": 135000}, {"state": "California", "salary": 132000}, {"state": "Massachusetts", "salary": 130000}, {"state": "Illinois", "salary": 125000}, {"state": "Texas", "salary": 122000}]);
    record5.set("relatedCareers", ["accountant", "financial-analyst", "business-analyst"]);
    record5.set("salaryInsights", "{'trends': 'Growing demand with 10% job growth expected', 'growthProjection': 'Consistent opportunities across industries', 'benefits': 'Competitive salary, benefits, job security, leadership opportunities'}");
    record5.set("roadmap", [{"stage": "Financial Analyst", "duration": "0-2 years", "skills": ["Financial analysis", "Budgeting", "Accounting"], "salary": 65000}, {"stage": "Finance Manager", "duration": "2-5 years", "skills": ["Advanced analysis", "Team leadership", "Strategic planning"], "salary": 115000}, {"stage": "Director of Finance", "duration": "5+ years", "skills": ["Financial strategy", "Executive leadership", "Board presence"], "salary": 180000}]);
    record5.set("faqs", [{"question": "Do I need an MBA?", "answer": "Not required, but helpful. CPA or CFA certifications are valuable."}, {"question": "What industries hire finance managers?", "answer": "All industries need finance managers. Tech, finance, healthcare, and manufacturing have high demand."}, {"question": "What's the job market like?", "answer": "Strong demand with consistent opportunities. Salaries are competitive."}]);
  try {
    app.save(record5);
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
