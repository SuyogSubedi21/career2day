/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
    record0.set("name", "Machine Learning Operations (MLOps) Engineer");
    record0.set("slug", "mlops-engineer");
    record0.set("description", "MLOps Engineers bridge the gap between machine learning development and production operations, ensuring ML models are deployed, monitored, and maintained efficiently at scale.");
    record0.set("overview", "MLOps is a rapidly growing field combining machine learning expertise with DevOps practices. MLOps Engineers manage the entire lifecycle of ML models from development through production, handling deployment pipelines, monitoring, versioning, and infrastructure.");
    record0.set("averageSalary", 142000);
    record0.set("salaryRange", "{'min': 95000, 'max': 190000, 'average': 142000}");
    record0.set("jobDemandOutlook", "Very High - Demand is growing rapidly as organizations scale ML initiatives");
    record0.set("topPayingStates", ["California", "New York", "Massachusetts", "Washington", "Texas"]);
    record0.set("roadmap", [{"phase": 1, "title": "Foundation in Python & ML Basics", "duration": "3-4 months", "skills": ["Python", "Machine Learning Fundamentals", "Data Structures"]}, {"phase": 2, "title": "DevOps & Cloud Fundamentals", "duration": "3-4 months", "skills": ["Docker", "Kubernetes", "AWS/GCP/Azure", "CI/CD Pipelines"]}, {"phase": 3, "title": "ML Model Deployment", "duration": "2-3 months", "skills": ["Model Serving", "TensorFlow Serving", "MLflow", "Model Versioning"]}, {"phase": 4, "title": "Monitoring & Maintenance", "duration": "2-3 months", "skills": ["Model Monitoring", "Data Drift Detection", "Performance Optimization"]}, {"phase": 5, "title": "Advanced MLOps Architecture", "duration": "3-4 months", "skills": ["Scalable ML Systems", "Feature Stores", "Advanced Orchestration"]}]);
    record0.set("skillsRequired", ["Python", "Docker", "Kubernetes", "AWS/GCP/Azure", "CI/CD", "Machine Learning", "Data Engineering", "Linux", "Git", "Monitoring Tools"]);
    record0.set("salaryInsights", [{"level": "Entry", "salary": 95000, "experience": "0-2 years"}, {"level": "Mid", "salary": 142000, "experience": "2-5 years"}, {"level": "Senior", "salary": 190000, "experience": "5+ years"}]);
    record0.set("relatedCareers", ["Data Engineer", "ML Engineer", "DevOps Engineer", "Cloud Architect", "Data Scientist"]);
    record0.set("entrySalary", 95000);
    record0.set("midSalary", 142000);
    record0.set("seniorSalary", 190000);
    record0.set("jobDemand", "Very High");
    record0.set("topStates", ["California", "New York", "Massachusetts", "Washington", "Texas"]);
    record0.set("technicalSkills", ["Python", "Docker", "Kubernetes", "AWS", "GCP", "Azure", "TensorFlow", "PyTorch", "MLflow", "Airflow", "Jenkins", "Git", "SQL", "Spark"]);
    record0.set("softSkills", ["Problem Solving", "Communication", "Collaboration", "Project Management", "Critical Thinking", "Attention to Detail"]);
    record0.set("tools", ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "GitHub Actions", "MLflow", "Airflow", "Prometheus", "Grafana", "ELK Stack", "DataDog", "New Relic"]);
    record0.set("faqs", [{"question": "What's the difference between MLOps and DevOps?", "answer": "DevOps focuses on software deployment and infrastructure. MLOps extends this to ML models, adding challenges like model versioning, data drift detection, and retraining pipelines."}, {"question": "Do I need a PhD in ML to become an MLOps Engineer?", "answer": "No. A strong foundation in Python, DevOps, and understanding of ML concepts is sufficient. Many successful MLOps Engineers come from DevOps or Data Engineering backgrounds."}, {"question": "What's the job market like for MLOps?", "answer": "Extremely competitive and growing. Companies across all industries are investing in ML infrastructure, creating high demand for MLOps expertise."}, {"question": "What certifications are valuable?", "answer": "AWS Certified Solutions Architect, Kubernetes certifications (CKA), and cloud provider ML certifications are highly valued."}]);
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
    record1.set("name", "Growth Hacker");
    record1.set("slug", "growth-hacker");
    record1.set("description", "Growth Hackers use creative, low-cost strategies to acquire and retain customers. They combine marketing, product development, and data analysis to drive rapid business growth.");
    record1.set("overview", "Growth Hacking is a mindset focused on rapid experimentation and scalable growth. Growth Hackers wear multiple hats, combining marketing creativity with analytical rigor to find unconventional ways to grow businesses.");
    record1.set("averageSalary", 110000);
    record1.set("salaryRange", "{'min': 70000, 'max': 150000, 'average': 110000}");
    record1.set("jobDemandOutlook", "High - Startups and tech companies actively seek growth hackers");
    record1.set("topPayingStates", ["California", "New York", "Massachusetts", "Illinois", "Washington"]);
    record1.set("roadmap", [{"phase": 1, "title": "Marketing Fundamentals", "duration": "2-3 months", "skills": ["Digital Marketing", "Social Media", "Content Marketing", "Email Marketing"]}, {"phase": 2, "title": "Data Analysis & Analytics", "duration": "2-3 months", "skills": ["Google Analytics", "SQL", "Data Visualization", "A/B Testing"]}, {"phase": 3, "title": "Product & User Psychology", "duration": "2-3 months", "skills": ["Product Management", "User Behavior", "Conversion Optimization", "Retention Strategies"]}, {"phase": 4, "title": "Growth Experimentation", "duration": "2-3 months", "skills": ["Viral Loops", "Referral Programs", "Growth Loops", "Experimentation Framework"]}, {"phase": 5, "title": "Advanced Growth Strategies", "duration": "2-3 months", "skills": ["Scaling Campaigns", "Partnership Growth", "Community Building", "Market Expansion"]}]);
    record1.set("skillsRequired", ["Data Analysis", "Marketing", "Product Thinking", "SQL", "Google Analytics", "A/B Testing", "Content Creation", "Social Media", "Copywriting", "Creativity"]);
    record1.set("salaryInsights", [{"level": "Entry", "salary": 70000, "experience": "0-2 years"}, {"level": "Mid", "salary": 110000, "experience": "2-5 years"}, {"level": "Senior", "salary": 150000, "experience": "5+ years"}]);
    record1.set("relatedCareers", ["Product Manager", "Marketing Manager", "Data Analyst", "UX Designer", "Startup Founder"]);
    record1.set("entrySalary", 70000);
    record1.set("midSalary", 110000);
    record1.set("seniorSalary", 150000);
    record1.set("jobDemand", "High");
    record1.set("topStates", ["California", "New York", "Massachusetts", "Illinois", "Washington"]);
    record1.set("technicalSkills", ["SQL", "Google Analytics", "Python", "Excel", "Tableau", "Mixpanel", "Amplitude", "Segment", "Google Sheets", "API Integration"]);
    record1.set("softSkills", ["Creativity", "Analytical Thinking", "Communication", "Collaboration", "Adaptability", "Entrepreneurial Mindset", "Curiosity"]);
    record1.set("tools", ["Google Analytics", "Mixpanel", "Amplitude", "Segment", "Hotjar", "Optimizely", "Unbounce", "Zapier", "Slack", "Airtable", "Notion"]);
    record1.set("faqs", [{"question": "Is Growth Hacking just marketing?", "answer": "No. Growth Hacking combines marketing, product development, data analysis, and creativity. It's about finding unconventional ways to drive growth."}, {"question": "Do I need technical skills to be a Growth Hacker?", "answer": "Not necessarily, but basic SQL and analytics knowledge are valuable. Many successful growth hackers have marketing backgrounds."}, {"question": "What industries hire Growth Hackers?", "answer": "Primarily startups and tech companies, but increasingly SaaS, e-commerce, fintech, and other fast-growing sectors."}, {"question": "How do I measure success as a Growth Hacker?", "answer": "Through key metrics like CAC (Customer Acquisition Cost), LTV (Lifetime Value), retention rate, and overall revenue growth."}]);
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
    record2.set("name", "Technical Writer");
    record2.set("slug", "technical-writer");
    record2.set("description", "Technical Writers create clear, concise documentation for software products, APIs, and complex systems. They translate technical information into user-friendly guides and manuals.");
    record2.set("overview", "Technical Writing is essential for helping users understand and use software effectively. Technical Writers work with engineers, product managers, and designers to create documentation that ranges from API docs to user guides.");
    record2.set("averageSalary", 100000);
    record2.set("salaryRange", "{'min': 65000, 'max': 135000, 'average': 100000}");
    record2.set("jobDemandOutlook", "High - Every software company needs quality documentation");
    record2.set("topPayingStates", ["California", "Washington", "Massachusetts", "New York", "Colorado"]);
    record2.set("roadmap", [{"phase": 1, "title": "Writing Fundamentals", "duration": "1-2 months", "skills": ["Technical Writing Principles", "Grammar", "Style Guides", "Clarity & Conciseness"]}, {"phase": 2, "title": "Documentation Tools", "duration": "2-3 months", "skills": ["Markdown", "Git", "Static Site Generators", "Documentation Platforms"]}, {"phase": 3, "title": "Technical Understanding", "duration": "3-4 months", "skills": ["APIs", "Software Architecture", "Command Line", "Basic Programming Concepts"]}, {"phase": 4, "title": "Documentation Types", "duration": "2-3 months", "skills": ["API Documentation", "User Guides", "Tutorials", "Troubleshooting Guides"]}, {"phase": 5, "title": "Advanced Technical Writing", "duration": "2-3 months", "skills": ["Information Architecture", "UX Writing", "Localization", "Documentation Strategy"]}]);
    record2.set("skillsRequired", ["Writing", "Technical Understanding", "Markdown", "Git", "API Knowledge", "Research", "Attention to Detail", "Communication", "Organization", "Empathy"]);
    record2.set("salaryInsights", [{"level": "Entry", "salary": 65000, "experience": "0-2 years"}, {"level": "Mid", "salary": 100000, "experience": "2-5 years"}, {"level": "Senior", "salary": 135000, "experience": "5+ years"}]);
    record2.set("relatedCareers", ["UX Writer", "Content Strategist", "Product Manager", "Developer Advocate", "Information Architect"]);
    record2.set("entrySalary", 65000);
    record2.set("midSalary", 100000);
    record2.set("seniorSalary", 135000);
    record2.set("jobDemand", "High");
    record2.set("topStates", ["California", "Washington", "Massachusetts", "New York", "Colorado"]);
    record2.set("technicalSkills", ["Markdown", "Git", "HTML/CSS", "API Documentation", "SQL", "Command Line", "Figma", "Confluence", "JIRA", "Static Site Generators"]);
    record2.set("softSkills", ["Writing", "Communication", "Empathy", "Attention to Detail", "Organization", "Collaboration", "Curiosity", "Patience"]);
    record2.set("tools", ["Markdown", "Git", "Confluence", "Notion", "Figma", "Swagger/OpenAPI", "Postman", "MkDocs", "Sphinx", "ReadTheDocs", "Docusaurus"]);
    record2.set("faqs", [{"question": "Do I need a technical background to be a Technical Writer?", "answer": "Not necessarily. Strong writing skills and the ability to learn technical concepts are more important. Many technical writers come from journalism or English backgrounds."}, {"question": "What's the difference between Technical Writing and UX Writing?", "answer": "Technical Writing focuses on comprehensive documentation and guides. UX Writing focuses on in-product copy and user interface text."}, {"question": "Is Technical Writing a good career path?", "answer": "Yes. It's stable, well-compensated, and in high demand. Technical writers are valued across all tech companies."}, {"question": "What tools should I learn?", "answer": "Start with Markdown and Git. Then learn documentation platforms like Confluence, Notion, or ReadTheDocs. API documentation tools like Swagger are also valuable."}]);
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
    record3.set("name", "Compliance & Privacy Engineer");
    record3.set("slug", "compliance-privacy-engineer");
    record3.set("description", "Compliance & Privacy Engineers design and implement systems to ensure organizations meet regulatory requirements like GDPR, CCPA, and HIPAA. They build privacy-by-design solutions and manage compliance infrastructure.");
    record3.set("overview", "As data privacy regulations become stricter globally, Compliance & Privacy Engineers are in high demand. They combine technical expertise with regulatory knowledge to build systems that protect user data while meeting legal requirements.");
    record3.set("averageSalary", 120000);
    record3.set("salaryRange", "{'min': 80000, 'max': 160000, 'average': 120000}");
    record3.set("jobDemandOutlook", "Very High - Regulatory requirements are increasing globally");
    record3.set("topPayingStates", ["California", "New York", "Massachusetts", "Washington", "Illinois"]);
    record3.set("roadmap", [{"phase": 1, "title": "Regulatory Fundamentals", "duration": "2-3 months", "skills": ["GDPR", "CCPA", "Data Privacy Laws", "Compliance Frameworks"]}, {"phase": 2, "title": "Security & Encryption", "duration": "3-4 months", "skills": ["Cryptography", "Data Encryption", "Access Control", "Security Protocols"]}, {"phase": 3, "title": "Privacy Engineering", "duration": "3-4 months", "skills": ["Privacy by Design", "Data Minimization", "Anonymization", "Differential Privacy"]}, {"phase": 4, "title": "Compliance Systems", "duration": "2-3 months", "skills": ["Audit Trails", "Data Governance", "Consent Management", "Data Retention"]}, {"phase": 5, "title": "Advanced Compliance Architecture", "duration": "3-4 months", "skills": ["Enterprise Privacy Solutions", "Risk Assessment", "Incident Response", "Regulatory Audits"]}]);
    record3.set("skillsRequired", ["Security", "Cryptography", "Data Governance", "Regulatory Knowledge", "Python/Java", "Database Design", "Risk Assessment", "Documentation", "Communication", "Attention to Detail"]);
    record3.set("salaryInsights", [{"level": "Entry", "salary": 80000, "experience": "0-2 years"}, {"level": "Mid", "salary": 120000, "experience": "2-5 years"}, {"level": "Senior", "salary": 160000, "experience": "5+ years"}]);
    record3.set("relatedCareers", ["Security Engineer", "Data Engineer", "Solutions Architect", "Compliance Officer", "Risk Manager"]);
    record3.set("entrySalary", 80000);
    record3.set("midSalary", 120000);
    record3.set("seniorSalary", 160000);
    record3.set("jobDemand", "Very High");
    record3.set("topStates", ["California", "New York", "Massachusetts", "Washington", "Illinois"]);
    record3.set("technicalSkills", ["Python", "Java", "SQL", "Cryptography", "Cloud Security", "AWS/Azure", "Kubernetes", "Docker", "API Security", "Database Design"]);
    record3.set("softSkills", ["Attention to Detail", "Communication", "Collaboration", "Problem Solving", "Regulatory Thinking", "Documentation", "Risk Assessment"]);
    record3.set("tools", ["Vault", "HashiCorp", "Okta", "Auth0", "Datadog", "Splunk", "Kubernetes", "Docker", "Git", "JIRA", "Confluence"]);
    record3.set("faqs", [{"question": "What regulations should I focus on?", "answer": "Start with GDPR and CCPA as they're most common. Then learn HIPAA, SOC 2, and industry-specific regulations relevant to your target companies."}, {"question": "Do I need a law degree?", "answer": "No. A technical background with regulatory knowledge is more valuable. Many compliance engineers have computer science or security backgrounds."}, {"question": "What's the job market like?", "answer": "Excellent. Regulations are becoming stricter globally, and every company handling user data needs compliance expertise."}, {"question": "How do I stay current with regulations?", "answer": "Follow regulatory bodies, join professional organizations like IAPP, read compliance blogs, and take continuing education courses."}]);
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
    record4.set("name", "Prompt Engineer");
    record4.set("slug", "prompt-engineer");
    record4.set("description", "Prompt Engineers specialize in crafting effective prompts for large language models and AI systems. They optimize interactions with AI to achieve desired outputs and develop best practices for AI utilization.");
    record4.set("overview", "Prompt Engineering is an emerging field focused on maximizing the effectiveness of AI models like GPT-4, Claude, and others. Prompt Engineers work at the intersection of linguistics, psychology, and technology to unlock AI potential.");
    record4.set("averageSalary", 117000);
    record4.set("salaryRange", "{'min': 75000, 'max': 160000, 'average': 117000}");
    record4.set("jobDemandOutlook", "Very High - AI adoption is accelerating across all industries");
    record4.set("topPayingStates", ["California", "New York", "Massachusetts", "Washington", "Texas"]);
    record4.set("roadmap", [{"phase": 1, "title": "AI & LLM Fundamentals", "duration": "2-3 months", "skills": ["How LLMs Work", "Transformer Architecture", "Tokenization", "Model Capabilities & Limitations"]}, {"phase": 2, "title": "Prompt Crafting Basics", "duration": "2-3 months", "skills": ["Prompt Structure", "Few-Shot Learning", "Chain of Thought", "Role-Based Prompting"]}, {"phase": 3, "title": "Advanced Prompting Techniques", "duration": "2-3 months", "skills": ["Prompt Optimization", "Retrieval Augmented Generation", "Fine-Tuning Concepts", "Evaluation Metrics"]}, {"phase": 4, "title": "AI Application Development", "duration": "2-3 months", "skills": ["Building AI Applications", "API Integration", "Error Handling", "User Experience"]}, {"phase": 5, "title": "Advanced AI Systems", "duration": "2-3 months", "skills": ["Multi-Agent Systems", "Autonomous Workflows", "Custom Model Training", "Ethical AI"]}]);
    record4.set("skillsRequired", ["Communication", "Creativity", "Analytical Thinking", "Python", "API Knowledge", "Understanding of AI/ML", "Problem Solving", "Attention to Detail", "Experimentation", "Documentation"]);
    record4.set("salaryInsights", [{"level": "Entry", "salary": 75000, "experience": "0-2 years"}, {"level": "Mid", "salary": 117000, "experience": "2-5 years"}, {"level": "Senior", "salary": 160000, "experience": "5+ years"}]);
    record4.set("relatedCareers", ["AI Engineer", "Machine Learning Engineer", "Data Scientist", "Product Manager", "AI Researcher"]);
    record4.set("entrySalary", 75000);
    record4.set("midSalary", 117000);
    record4.set("seniorSalary", 160000);
    record4.set("jobDemand", "Very High");
    record4.set("topStates", ["California", "New York", "Massachusetts", "Washington", "Texas"]);
    record4.set("technicalSkills", ["Python", "API Integration", "LLM APIs", "SQL", "Data Analysis", "Git", "JSON", "REST APIs", "Prompt Testing", "Evaluation Frameworks"]);
    record4.set("softSkills", ["Communication", "Creativity", "Analytical Thinking", "Experimentation", "Attention to Detail", "Collaboration", "Curiosity", "Adaptability"]);
    record4.set("tools", ["ChatGPT", "Claude", "GPT-4", "LangChain", "Hugging Face", "OpenAI API", "Anthropic API", "Prompt Engineering Platforms", "Jupyter Notebooks", "Git"]);
    record4.set("faqs", [{"question": "Is Prompt Engineering a real career?", "answer": "Yes. As AI becomes more prevalent, companies need specialists who can effectively utilize AI models. Prompt Engineering is a growing field with strong demand."}, {"question": "Do I need a technical background?", "answer": "Not necessarily. Strong communication and analytical skills are most important. Technical skills like Python are helpful but can be learned."}, {"question": "Will Prompt Engineering become obsolete?", "answer": "Unlikely. As AI models improve, the need for skilled prompt engineers will evolve but remain important. The field will likely expand rather than disappear."}, {"question": "What's the difference between Prompt Engineering and AI Engineering?", "answer": "Prompt Engineering focuses on optimizing interactions with existing AI models. AI Engineering involves building, training, and deploying AI systems."}]);
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
