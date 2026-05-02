/**
 * Migration: Seed 20 roadmap phases (New careers batch 1)
 */
migrate(async (db) => {
  const collection = await db.collection("careerRoadmaps");
  
  const records = [
  {
    "phase": 1,
    "phaseTitle": "Fundamentals & Prerequisites",
    "duration": "3 months",
    "skills": "[\"Problem Solving\",\"System Thinking\",\"Technical Communication\"]",
    "resources": "[\"Online courses\",\"Documentation\",\"Tutorials\"]",
    "projects": "[\"Setup environment\",\"Hello World project\",\"Basic infrastructure\"]",
    "careerSlug": "security-architect"
  },
  {
    "phase": 2,
    "phaseTitle": "Core Technologies & Tools",
    "duration": "3 months",
    "skills": "[\"Technology Stack\",\"Tool Proficiency\",\"Best Practices\"]",
    "resources": "[\"Advanced courses\",\"Official docs\",\"Community projects\"]",
    "projects": "[\"Building tools\",\"Integration projects\",\"Optimization tasks\"]",
    "careerSlug": "security-architect"
  },
  {
    "phase": 3,
    "phaseTitle": "Advanced Patterns & Architecture",
    "duration": "4 months",
    "skills": "[\"Architectural Design\",\"Performance Optimization\",\"Security\"]",
    "resources": "[\"Case studies\",\"Advanced workshops\",\"Industry papers\"]",
    "projects": "[\"Design systems\",\"Scale projects\",\"Security implementations\"]",
    "careerSlug": "security-architect"
  },
  {
    "phase": 4,
    "phaseTitle": "Leadership & Mentoring",
    "duration": "3 months",
    "skills": "[\"Team Leadership\",\"Communication\",\"Strategic Thinking\"]",
    "resources": "[\"Leadership training\",\"Mentoring programs\",\"Industry events\"]",
    "projects": "[\"Lead initiatives\",\"Mentor juniors\",\"Strategic planning\"]",
    "careerSlug": "security-architect"
  },
  {
    "phase": 5,
    "phaseTitle": "Specialization & Mastery",
    "duration": "Ongoing",
    "skills": "[\"Deep Expertise\",\"Innovation\",\"Executive Communication\"]",
    "resources": "[\"Research papers\",\"Conferences\",\"Expert networks\"]",
    "projects": "[\"Innovation projects\",\"Industry leadership\",\"Thought leadership\"]",
    "careerSlug": "security-architect"
  },
  {
    "phase": 1,
    "phaseTitle": "Fundamentals & Prerequisites",
    "duration": "3 months",
    "skills": "[\"Problem Solving\",\"System Thinking\",\"Technical Communication\"]",
    "resources": "[\"Online courses\",\"Documentation\",\"Tutorials\"]",
    "projects": "[\"Setup environment\",\"Hello World project\",\"Basic infrastructure\"]",
    "careerSlug": "infrastructure-engineer"
  },
  {
    "phase": 2,
    "phaseTitle": "Core Technologies & Tools",
    "duration": "3 months",
    "skills": "[\"Technology Stack\",\"Tool Proficiency\",\"Best Practices\"]",
    "resources": "[\"Advanced courses\",\"Official docs\",\"Community projects\"]",
    "projects": "[\"Building tools\",\"Integration projects\",\"Optimization tasks\"]",
    "careerSlug": "infrastructure-engineer"
  },
  {
    "phase": 3,
    "phaseTitle": "Advanced Patterns & Architecture",
    "duration": "4 months",
    "skills": "[\"Architectural Design\",\"Performance Optimization\",\"Security\"]",
    "resources": "[\"Case studies\",\"Advanced workshops\",\"Industry papers\"]",
    "projects": "[\"Design systems\",\"Scale projects\",\"Security implementations\"]",
    "careerSlug": "infrastructure-engineer"
  },
  {
    "phase": 4,
    "phaseTitle": "Leadership & Mentoring",
    "duration": "3 months",
    "skills": "[\"Team Leadership\",\"Communication\",\"Strategic Thinking\"]",
    "resources": "[\"Leadership training\",\"Mentoring programs\",\"Industry events\"]",
    "projects": "[\"Lead initiatives\",\"Mentor juniors\",\"Strategic planning\"]",
    "careerSlug": "infrastructure-engineer"
  },
  {
    "phase": 5,
    "phaseTitle": "Specialization & Mastery",
    "duration": "Ongoing",
    "skills": "[\"Deep Expertise\",\"Innovation\",\"Executive Communication\"]",
    "resources": "[\"Research papers\",\"Conferences\",\"Expert networks\"]",
    "projects": "[\"Innovation projects\",\"Industry leadership\",\"Thought leadership\"]",
    "careerSlug": "infrastructure-engineer"
  },
  {
    "phase": 1,
    "phaseTitle": "Fundamentals & Prerequisites",
    "duration": "3 months",
    "skills": "[\"Problem Solving\",\"System Thinking\",\"Technical Communication\"]",
    "resources": "[\"Online courses\",\"Documentation\",\"Tutorials\"]",
    "projects": "[\"Setup environment\",\"Hello World project\",\"Basic infrastructure\"]",
    "careerSlug": "devops-architect"
  },
  {
    "phase": 2,
    "phaseTitle": "Core Technologies & Tools",
    "duration": "3 months",
    "skills": "[\"Technology Stack\",\"Tool Proficiency\",\"Best Practices\"]",
    "resources": "[\"Advanced courses\",\"Official docs\",\"Community projects\"]",
    "projects": "[\"Building tools\",\"Integration projects\",\"Optimization tasks\"]",
    "careerSlug": "devops-architect"
  },
  {
    "phase": 3,
    "phaseTitle": "Advanced Patterns & Architecture",
    "duration": "4 months",
    "skills": "[\"Architectural Design\",\"Performance Optimization\",\"Security\"]",
    "resources": "[\"Case studies\",\"Advanced workshops\",\"Industry papers\"]",
    "projects": "[\"Design systems\",\"Scale projects\",\"Security implementations\"]",
    "careerSlug": "devops-architect"
  },
  {
    "phase": 4,
    "phaseTitle": "Leadership & Mentoring",
    "duration": "3 months",
    "skills": "[\"Team Leadership\",\"Communication\",\"Strategic Thinking\"]",
    "resources": "[\"Leadership training\",\"Mentoring programs\",\"Industry events\"]",
    "projects": "[\"Lead initiatives\",\"Mentor juniors\",\"Strategic planning\"]",
    "careerSlug": "devops-architect"
  },
  {
    "phase": 5,
    "phaseTitle": "Specialization & Mastery",
    "duration": "Ongoing",
    "skills": "[\"Deep Expertise\",\"Innovation\",\"Executive Communication\"]",
    "resources": "[\"Research papers\",\"Conferences\",\"Expert networks\"]",
    "projects": "[\"Innovation projects\",\"Industry leadership\",\"Thought leadership\"]",
    "careerSlug": "devops-architect"
  },
  {
    "phase": 1,
    "phaseTitle": "Fundamentals & Prerequisites",
    "duration": "3 months",
    "skills": "[\"Problem Solving\",\"System Thinking\",\"Technical Communication\"]",
    "resources": "[\"Online courses\",\"Documentation\",\"Tutorials\"]",
    "projects": "[\"Setup environment\",\"Hello World project\",\"Basic infrastructure\"]",
    "careerSlug": "mlops-engineer"
  },
  {
    "phase": 2,
    "phaseTitle": "Core Technologies & Tools",
    "duration": "3 months",
    "skills": "[\"Technology Stack\",\"Tool Proficiency\",\"Best Practices\"]",
    "resources": "[\"Advanced courses\",\"Official docs\",\"Community projects\"]",
    "projects": "[\"Building tools\",\"Integration projects\",\"Optimization tasks\"]",
    "careerSlug": "mlops-engineer"
  },
  {
    "phase": 3,
    "phaseTitle": "Advanced Patterns & Architecture",
    "duration": "4 months",
    "skills": "[\"Architectural Design\",\"Performance Optimization\",\"Security\"]",
    "resources": "[\"Case studies\",\"Advanced workshops\",\"Industry papers\"]",
    "projects": "[\"Design systems\",\"Scale projects\",\"Security implementations\"]",
    "careerSlug": "mlops-engineer"
  },
  {
    "phase": 4,
    "phaseTitle": "Leadership & Mentoring",
    "duration": "3 months",
    "skills": "[\"Team Leadership\",\"Communication\",\"Strategic Thinking\"]",
    "resources": "[\"Leadership training\",\"Mentoring programs\",\"Industry events\"]",
    "projects": "[\"Lead initiatives\",\"Mentor juniors\",\"Strategic planning\"]",
    "careerSlug": "mlops-engineer"
  },
  {
    "phase": 5,
    "phaseTitle": "Specialization & Mastery",
    "duration": "Ongoing",
    "skills": "[\"Deep Expertise\",\"Innovation\",\"Executive Communication\"]",
    "resources": "[\"Research papers\",\"Conferences\",\"Expert networks\"]",
    "projects": "[\"Innovation projects\",\"Industry leadership\",\"Thought leadership\"]",
    "careerSlug": "mlops-engineer"
  }
];
  
  for (const record of records) {
    await collection.create(record);
  }
  
  console.log(`Seeded ${records.length} careerRoadmaps records.`);
}, (db) => {
  // This is a one-way migration
});