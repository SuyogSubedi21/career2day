/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
    record0.set("name", "Penetration Tester");
    record0.set("slug", "penetration-tester");
    record0.set("description", "Test systems for security vulnerabilities");
    record0.set("overview", "Penetration testers identify security vulnerabilities by simulating attacks. They help organizations understand and fix security weaknesses.");
    record0.set("averageSalary", 125000);
    record0.set("salaryRange", "{'min': 95000, 'max': 180000}");
    record0.set("jobDemandOutlook", "Very High - Growing 33% through 2032");
    record0.set("topPayingStates", [{"state": "California", "salary": 150000}, {"state": "New York", "salary": 140000}, {"state": "Washington", "salary": 135000}, {"state": "Massachusetts", "salary": 133000}, {"state": "Colorado", "salary": 130000}]);
    record0.set("roadmap", "{'phase1': 'Learn networking and systems', 'phase2': 'Learn penetration testing', 'phase3': 'Get certifications', 'phase4': 'Gain experience', 'phase5': 'Specialize'}");
    record0.set("skillsRequired", ["Networking", "System Administration", "Penetration Testing", "Vulnerability Assessment", "Scripting", "Problem Solving", "Communication"]);
    record0.set("salaryInsights", "{'entry': 100000, 'mid': 125000, 'senior': 170000, 'lead': 220000}");
    record0.set("relatedCareers", ["security-engineer", "cybersecurity-analyst", "network-engineer"]);
    record0.set("entrySalary", 100000);
    record0.set("midSalary", 125000);
    record0.set("seniorSalary", 170000);
    record0.set("jobDemand", "High");
    record0.set("topStates", [{"state": "California", "count": 3500}, {"state": "New York", "count": 2500}, {"state": "Washington", "count": 2000}, {"state": "Texas", "count": 1800}, {"state": "Massachusetts", "count": 1600}]);
    record0.set("technicalSkills", ["Metasploit", "Burp Suite", "Nmap", "Wireshark", "Python", "Bash", "SQL Injection"]);
    record0.set("softSkills", ["Problem Solving", "Attention to Detail", "Communication", "Analytical Thinking", "Ethical Mindset"]);
    record0.set("tools", ["Metasploit", "Burp Suite", "Nmap", "Wireshark", "Kali Linux", "Hashcat", "John the Ripper"]);
    record0.set("faqs", [{"question": "What certifications matter?", "answer": "CEH, OSCP, and GPEN are highly valued."}, {"question": "Is this legal?", "answer": "Yes, if you have written permission from the organization."}]);
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
    record1.set("name", "Compliance Engineer");
    record1.set("slug", "compliance-engineer");
    record1.set("description", "Ensure systems meet regulatory and compliance requirements");
    record1.set("overview", "Compliance engineers ensure systems and processes meet regulatory requirements. They work on HIPAA, GDPR, SOC 2, and other compliance standards.");
    record1.set("averageSalary", 105000);
    record1.set("salaryRange", "{'min': 80000, 'max': 155000}");
    record1.set("jobDemandOutlook", "High - Growing 16% through 2032");
    record1.set("topPayingStates", [{"state": "California", "salary": 130000}, {"state": "New York", "salary": 120000}, {"state": "Washington", "salary": 115000}, {"state": "Massachusetts", "salary": 113000}, {"state": "Colorado", "salary": 110000}]);
    record1.set("roadmap", "{'phase1': 'Learn compliance fundamentals', 'phase2': 'Learn regulations', 'phase3': 'Learn audit processes', 'phase4': 'Gain experience', 'phase5': 'Specialize'}");
    record1.set("skillsRequired", ["Compliance Knowledge", "Audit Processes", "Documentation", "Risk Assessment", "Communication", "Attention to Detail", "Problem Solving"]);
    record1.set("salaryInsights", "{'entry': 85000, 'mid': 105000, 'senior': 145000, 'lead': 190000}");
    record1.set("relatedCareers", ["security-engineer", "risk-manager", "quality-assurance-engineer"]);
    record1.set("entrySalary", 85000);
    record1.set("midSalary", 105000);
    record1.set("seniorSalary", 145000);
    record1.set("jobDemand", "High");
    record1.set("topStates", [{"state": "California", "count": 2500}, {"state": "New York", "count": 1800}, {"state": "Texas", "count": 1500}, {"state": "Washington", "count": 1300}, {"state": "Massachusetts", "count": 1200}]);
    record1.set("technicalSkills", ["Compliance Frameworks", "Audit Tools", "Documentation", "Risk Assessment", "Reporting"]);
    record1.set("softSkills", ["Communication", "Attention to Detail", "Organization", "Problem Solving", "Analytical Thinking"]);
    record1.set("tools", ["Compliance Tools", "Excel", "JIRA", "Confluence", "Audit Software", "Risk Management Tools"]);
    record1.set("faqs", [{"question": "Do I need certifications?", "answer": "CISSP and CISM are valuable but not always required."}, {"question": "Is this a technical role?", "answer": "Not always; it can be more business-focused."}]);
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
    record2.set("name", "Release Manager");
    record2.set("slug", "release-manager");
    record2.set("description", "Manage software releases and deployments");
    record2.set("overview", "Release managers coordinate software releases and deployments. They manage timelines, dependencies, and ensure smooth rollouts.");
    record2.set("averageSalary", 100000);
    record2.set("salaryRange", "{'min': 75000, 'max': 150000}");
    record2.set("jobDemandOutlook", "Moderate - Growing 8% through 2032");
    record2.set("topPayingStates", [{"state": "California", "salary": 125000}, {"state": "New York", "salary": 115000}, {"state": "Washington", "salary": 110000}, {"state": "Massachusetts", "salary": 108000}, {"state": "Colorado", "salary": 105000}]);
    record2.set("roadmap", "{'phase1': 'Learn software development', 'phase2': 'Learn release processes', 'phase3': 'Learn tools', 'phase4': 'Manage releases', 'phase5': 'Advance'}");
    record2.set("skillsRequired", ["Release Management", "Project Management", "Communication", "Problem Solving", "Documentation", "Planning", "Coordination"]);
    record2.set("salaryInsights", "{'entry': 80000, 'mid': 100000, 'senior': 135000, 'lead': 180000}");
    record2.set("relatedCareers", ["project-manager", "devops-engineer", "scrum-master"]);
    record2.set("entrySalary", 80000);
    record2.set("midSalary", 100000);
    record2.set("seniorSalary", 135000);
    record2.set("jobDemand", "Medium");
    record2.set("topStates", [{"state": "California", "count": 2000}, {"state": "New York", "count": 1500}, {"state": "Texas", "count": 1300}, {"state": "Washington", "count": 1200}, {"state": "Massachusetts", "count": 1100}]);
    record2.set("technicalSkills", ["Release Management Tools", "CI/CD", "Version Control", "Documentation", "Planning"]);
    record2.set("softSkills", ["Communication", "Organization", "Problem Solving", "Coordination", "Leadership"]);
    record2.set("tools", ["JIRA", "Git", "Jenkins", "GitLab CI", "Confluence", "Slack", "Excel"]);
    record2.set("faqs", [{"question": "Do I need development experience?", "answer": "Not required, but it helps understand the process."}, {"question": "Is this a good career path?", "answer": "Yes, especially for those who enjoy coordination and planning."}]);
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
    record3.set("name", "Technical Architect");
    record3.set("slug", "technical-architect");
    record3.set("description", "Design technical solutions and system architecture");
    record3.set("overview", "Technical architects design system architecture and technical solutions. They work on scalability, performance, and reliability.");
    record3.set("averageSalary", 145000);
    record3.set("salaryRange", "{'min': 115000, 'max': 200000}");
    record3.set("jobDemandOutlook", "High - Growing 14% through 2032");
    record3.set("topPayingStates", [{"state": "California", "salary": 170000}, {"state": "New York", "salary": 160000}, {"state": "Washington", "salary": 155000}, {"state": "Massachusetts", "salary": 153000}, {"state": "Colorado", "salary": 150000}]);
    record3.set("roadmap", "{'phase1': 'Gain technical expertise', 'phase2': 'Learn system design', 'phase3': 'Lead projects', 'phase4': 'Design architectures', 'phase5': 'Specialize'}");
    record3.set("skillsRequired", ["System Design", "Architecture", "Technical Leadership", "Communication", "Problem Solving", "Cloud Platforms", "Databases"]);
    record3.set("salaryInsights", "{'entry': 125000, 'mid': 145000, 'senior': 190000, 'lead': 250000}");
    record3.set("relatedCareers", ["solutions-architect", "cloud-architect", "technical-lead"]);
    record3.set("entrySalary", 125000);
    record3.set("midSalary", 145000);
    record3.set("seniorSalary", 190000);
    record3.set("jobDemand", "High");
    record3.set("topStates", [{"state": "California", "count": 4000}, {"state": "New York", "count": 2800}, {"state": "Washington", "count": 2500}, {"state": "Texas", "count": 2200}, {"state": "Massachusetts", "count": 2000}]);
    record3.set("technicalSkills", ["System Design", "Cloud Platforms", "Databases", "Networking", "Security", "DevOps"]);
    record3.set("softSkills", ["Leadership", "Communication", "Strategic Thinking", "Problem Solving", "Vision"]);
    record3.set("tools", ["AWS", "Azure", "Terraform", "Kubernetes", "Visio", "Lucidchart", "JIRA"]);
    record3.set("faqs", [{"question": "What's the path to Technical Architect?", "answer": "Usually from senior engineer or solutions architect roles."}, {"question": "Do I need certifications?", "answer": "Cloud certifications are helpful but not always required."}]);
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
    record4.set("name", "Engineering Manager");
    record4.set("slug", "engineering-manager");
    record4.set("description", "Manage engineering teams and projects");
    record4.set("overview", "Engineering managers lead engineering teams, manage projects, and develop talent. They balance technical excellence with business goals.");
    record4.set("averageSalary", 140000);
    record4.set("salaryRange", "{'min': 110000, 'max': 200000}");
    record4.set("jobDemandOutlook", "High - Growing 10% through 2032");
    record4.set("topPayingStates", [{"state": "California", "salary": 170000}, {"state": "New York", "salary": 160000}, {"state": "Washington", "salary": 155000}, {"state": "Massachusetts", "salary": 153000}, {"state": "Colorado", "salary": 150000}]);
    record4.set("roadmap", "{'phase1': 'Gain technical expertise', 'phase2': 'Develop leadership skills', 'phase3': 'Lead small teams', 'phase4': 'Lead large teams', 'phase5': 'Become director'}");
    record4.set("skillsRequired", ["Leadership", "Technical Knowledge", "Communication", "Project Management", "People Management", "Problem Solving", "Vision"]);
    record4.set("salaryInsights", "{'entry': 120000, 'mid': 140000, 'senior': 185000, 'lead': 250000}");
    record4.set("relatedCareers", ["technical-lead", "director-of-engineering", "vp-engineering"]);
    record4.set("entrySalary", 120000);
    record4.set("midSalary", 140000);
    record4.set("seniorSalary", 185000);
    record4.set("jobDemand", "High");
    record4.set("topStates", [{"state": "California", "count": 5000}, {"state": "New York", "count": 3500}, {"state": "Washington", "count": 3000}, {"state": "Texas", "count": 2500}, {"state": "Massachusetts", "count": 2300}]);
    record4.set("technicalSkills", ["Technical Leadership", "Project Management", "Team Management", "Strategic Planning", "Mentoring"]);
    record4.set("softSkills", ["Leadership", "Communication", "Empathy", "Decision Making", "Vision"]);
    record4.set("tools", ["JIRA", "Confluence", "Slack", "Excel", "1:1 Tools", "Performance Management Tools"]);
    record4.set("faqs", [{"question": "Do I need an MBA?", "answer": "Not required, but business education helps."}, {"question": "What's the best path to Engineering Manager?", "answer": "Usually from senior engineer or tech lead roles."}]);
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
    record5.set("name", "Technical Lead");
    record5.set("slug", "technical-lead");
    record5.set("description", "Lead technical teams and mentor engineers");
    record5.set("overview", "Technical leads guide engineering teams, mentor developers, and make technical decisions. They balance coding with leadership responsibilities.");
    record5.set("averageSalary", 130000);
    record5.set("salaryRange", "{'min': 100000, 'max': 185000}");
    record5.set("jobDemandOutlook", "High - Growing 12% through 2032");
    record5.set("topPayingStates", [{"state": "California", "salary": 155000}, {"state": "New York", "salary": 145000}, {"state": "Washington", "salary": 140000}, {"state": "Massachusetts", "salary": 138000}, {"state": "Colorado", "salary": 135000}]);
    record5.set("roadmap", "{'phase1': 'Become senior engineer', 'phase2': 'Mentor others', 'phase3': 'Lead projects', 'phase4': 'Lead teams', 'phase5': 'Become manager'}");
    record5.set("skillsRequired", ["Technical Expertise", "Leadership", "Communication", "Mentoring", "Problem Solving", "Decision Making", "Vision"]);
    record5.set("salaryInsights", "{'entry': 110000, 'mid': 130000, 'senior': 170000, 'lead': 220000}");
    record5.set("relatedCareers", ["senior-engineer", "engineering-manager", "architect"]);
    record5.set("entrySalary", 110000);
    record5.set("midSalary", 130000);
    record5.set("seniorSalary", 170000);
    record5.set("jobDemand", "High");
    record5.set("topStates", [{"state": "California", "count": 6000}, {"state": "New York", "count": 4500}, {"state": "Washington", "count": 3500}, {"state": "Texas", "count": 3000}, {"state": "Massachusetts", "count": 2800}]);
    record5.set("technicalSkills", ["Technical Expertise", "System Design", "Code Review", "Mentoring", "Project Leadership"]);
    record5.set("softSkills", ["Leadership", "Communication", "Mentoring", "Problem Solving", "Vision"]);
    record5.set("tools", ["Git", "JIRA", "Confluence", "Code Review Tools", "Slack", "1:1 Tools"]);
    record5.set("faqs", [{"question": "Do I need to stop coding?", "answer": "No, tech leads balance coding with leadership."}, {"question": "What's the difference between Tech Lead and Engineering Manager?", "answer": "Tech Leads focus on technical decisions; Managers focus on people and projects."}]);
  try {
    app.save(record5);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record6 = new Record(collection);
    record6.set("name", "VP Engineering");
    record6.set("slug", "vp-engineering");
    record6.set("description", "Lead engineering organization and strategy");
    record6.set("overview", "VPs of Engineering lead the entire engineering organization, set strategy, and align engineering with business goals.");
    record6.set("averageSalary", 180000);
    record6.set("salaryRange", "{'min': 150000, 'max': 280000}");
    record6.set("jobDemandOutlook", "High - Growing 8% through 2032");
    record6.set("topPayingStates", [{"state": "California", "salary": 220000}, {"state": "New York", "salary": 210000}, {"state": "Washington", "salary": 205000}, {"state": "Massachusetts", "salary": 203000}, {"state": "Colorado", "salary": 200000}]);
    record6.set("roadmap", "{'phase1': 'Gain technical expertise', 'phase2': 'Become engineering manager', 'phase3': 'Lead large teams', 'phase4': 'Become director', 'phase5': 'Become VP'}");
    record6.set("skillsRequired", ["Engineering Leadership", "Strategic Planning", "Business Acumen", "Communication", "Vision", "People Management", "Decision Making"]);
    record6.set("salaryInsights", "{'entry': 160000, 'mid': 180000, 'senior': 240000, 'lead': 320000}");
    record6.set("relatedCareers", ["engineering-manager", "cto", "ceo"]);
    record6.set("entrySalary", 160000);
    record6.set("midSalary", 180000);
    record6.set("seniorSalary", 240000);
    record6.set("jobDemand", "High");
    record6.set("topStates", [{"state": "California", "count": 1500}, {"state": "New York", "count": 1000}, {"state": "Washington", "count": 800}, {"state": "Texas", "count": 700}, {"state": "Massachusetts", "count": 650}]);
    record6.set("technicalSkills", ["Engineering Leadership", "Strategic Planning", "Team Management", "Budget Planning", "Vendor Management"]);
    record6.set("softSkills", ["Strategic Thinking", "Leadership", "Vision", "Communication", "Decision Making"]);
    record6.set("tools", ["Strategic Planning Tools", "Executive Dashboards", "JIRA", "Confluence", "Slack", "Teams", "Excel"]);
    record6.set("faqs", [{"question": "Do I need an MBA?", "answer": "Helpful but not required; experience matters most."}, {"question": "What's the path to VP Engineering?", "answer": "Usually from Engineering Manager or Director roles."}]);
  try {
    app.save(record6);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record7 = new Record(collection);
    record7.set("name", "Accessibility Engineer");
    record7.set("slug", "accessibility-engineer");
    record7.set("description", "Ensure digital products are accessible to all users");
    record7.set("overview", "Accessibility engineers ensure digital products are usable by people with disabilities. They work on WCAG compliance and inclusive design.");
    record7.set("averageSalary", 105000);
    record7.set("salaryRange", "{'min': 80000, 'max': 155000}");
    record7.set("jobDemandOutlook", "High - Growing 20% through 2032");
    record7.set("topPayingStates", [{"state": "California", "salary": 130000}, {"state": "New York", "salary": 120000}, {"state": "Washington", "salary": 115000}, {"state": "Massachusetts", "salary": 113000}, {"state": "Colorado", "salary": 110000}]);
    record7.set("roadmap", "{'phase1': 'Learn accessibility fundamentals', 'phase2': 'Learn WCAG standards', 'phase3': 'Learn testing tools', 'phase4': 'Build expertise', 'phase5': 'Specialize'}");
    record7.set("skillsRequired", ["Accessibility Standards", "Testing Tools", "HTML/CSS", "JavaScript", "Communication", "Empathy", "Problem Solving"]);
    record7.set("salaryInsights", "{'entry': 85000, 'mid': 105000, 'senior': 145000, 'lead': 190000}");
    record7.set("relatedCareers", ["ux-designer", "frontend-engineer", "qa-engineer"]);
    record7.set("entrySalary", 85000);
    record7.set("midSalary", 105000);
    record7.set("seniorSalary", 145000);
    record7.set("jobDemand", "High");
    record7.set("topStates", [{"state": "California", "count": 2000}, {"state": "New York", "count": 1500}, {"state": "Washington", "count": 1200}, {"state": "Texas", "count": 1000}, {"state": "Massachusetts", "count": 900}]);
    record7.set("technicalSkills", ["WCAG", "Accessibility Testing", "HTML/CSS", "JavaScript", "Screen Readers", "Assistive Technologies"]);
    record7.set("softSkills", ["Empathy", "Communication", "Attention to Detail", "Problem Solving", "Advocacy"]);
    record7.set("tools", ["WAVE", "Axe DevTools", "NVDA", "JAWS", "Lighthouse", "Accessibility Insights", "Git"]);
    record7.set("faqs", [{"question": "Do I need a disability background?", "answer": "No, but empathy and understanding are important."}, {"question": "Is accessibility important?", "answer": "Yes, it's both ethical and legally required in many cases."}]);
  try {
    app.save(record7);
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
