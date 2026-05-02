/**
 * Migration: Seed 15 roadmap phases (New careers batch 4)
 */
migrate(async (db) => {
  const collection = await db.collection("careerRoadmaps");
  
  const records = [
  {
    "phase": 1,
    "title": "Fundamentals & Prerequisites",
    "duration": "3 months",
    "skills": "[\"Problem Solving\",\"System Thinking\",\"Technical Communication\"]",
    "resources": "[\"Online courses\",\"Documentation\",\"Tutorials\"]",
    "projects": "[\"Setup environment\",\"Hello World project\",\"Basic infrastructure\"]",
    "careerSlug": "cloud-security-engineer"
  },
  {
    "phase": 2,
    "title": "Core Technologies & Tools",
    "duration": "3 months",
    "skills": "[\"Technology Stack\",\"Tool Proficiency\",\"Best Practices\"]",
    "resources": "[\"Advanced courses\",\"Official docs\",\"Community projects\"]",
    "projects": "[\"Building tools\",\"Integration projects\",\"Optimization tasks\"]",
    "careerSlug": "cloud-security-engineer"
  },
  {
    "phase": 3,
    "title": "Advanced Patterns & Architecture",
    "duration": "4 months",
    "skills": "[\"Architectural Design\",\"Performance Optimization\",\"Security\"]",
    "resources": "[\"Case studies\",\"Advanced workshops\",\"Industry papers\"]",
    "projects": "[\"Design systems\",\"Scale projects\",\"Security implementations\"]",
    "careerSlug": "cloud-security-engineer"
  },
  {
    "phase": 4,
    "title": "Leadership & Mentoring",
    "duration": "3 months",
    "skills": "[\"Team Leadership\",\"Communication\",\"Strategic Thinking\"]",
    "resources": "[\"Leadership training\",\"Mentoring programs\",\"Industry events\"]",
    "projects": "[\"Lead initiatives\",\"Mentor juniors\",\"Strategic planning\"]",
    "careerSlug": "cloud-security-engineer"
  },
  {
    "phase": 5,
    "title": "Specialization & Mastery",
    "duration": "Ongoing",
    "skills": "[\"Deep Expertise\",\"Innovation\",\"Executive Communication\"]",
    "resources": "[\"Research papers\",\"Conferences\",\"Expert networks\"]",
    "projects": "[\"Innovation projects\",\"Industry leadership\",\"Thought leadership\"]",
    "careerSlug": "cloud-security-engineer"
  },
  {
    "phase": 1,
    "title": "Fundamentals & Prerequisites",
    "duration": "3 months",
    "skills": "[\"Problem Solving\",\"System Thinking\",\"Technical Communication\"]",
    "resources": "[\"Online courses\",\"Documentation\",\"Tutorials\"]",
    "projects": "[\"Setup environment\",\"Hello World project\",\"Basic infrastructure\"]",
    "careerSlug": "api-developer"
  },
  {
    "phase": 2,
    "title": "Core Technologies & Tools",
    "duration": "3 months",
    "skills": "[\"Technology Stack\",\"Tool Proficiency\",\"Best Practices\"]",
    "resources": "[\"Advanced courses\",\"Official docs\",\"Community projects\"]",
    "projects": "[\"Building tools\",\"Integration projects\",\"Optimization tasks\"]",
    "careerSlug": "api-developer"
  },
  {
    "phase": 3,
    "title": "Advanced Patterns & Architecture",
    "duration": "4 months",
    "skills": "[\"Architectural Design\",\"Performance Optimization\",\"Security\"]",
    "resources": "[\"Case studies\",\"Advanced workshops\",\"Industry papers\"]",
    "projects": "[\"Design systems\",\"Scale projects\",\"Security implementations\"]",
    "careerSlug": "api-developer"
  },
  {
    "phase": 4,
    "title": "Leadership & Mentoring",
    "duration": "3 months",
    "skills": "[\"Team Leadership\",\"Communication\",\"Strategic Thinking\"]",
    "resources": "[\"Leadership training\",\"Mentoring programs\",\"Industry events\"]",
    "projects": "[\"Lead initiatives\",\"Mentor juniors\",\"Strategic planning\"]",
    "careerSlug": "api-developer"
  },
  {
    "phase": 5,
    "title": "Specialization & Mastery",
    "duration": "Ongoing",
    "skills": "[\"Deep Expertise\",\"Innovation\",\"Executive Communication\"]",
    "resources": "[\"Research papers\",\"Conferences\",\"Expert networks\"]",
    "projects": "[\"Innovation projects\",\"Industry leadership\",\"Thought leadership\"]",
    "careerSlug": "api-developer"
  },
  {
    "phase": 1,
    "title": "Fundamentals & Prerequisites",
    "duration": "3 months",
    "skills": "[\"Problem Solving\",\"System Thinking\",\"Technical Communication\"]",
    "resources": "[\"Online courses\",\"Documentation\",\"Tutorials\"]",
    "projects": "[\"Setup environment\",\"Hello World project\",\"Basic infrastructure\"]",
    "careerSlug": "technical-sales-engineer"
  },
  {
    "phase": 2,
    "title": "Core Technologies & Tools",
    "duration": "3 months",
    "skills": "[\"Technology Stack\",\"Tool Proficiency\",\"Best Practices\"]",
    "resources": "[\"Advanced courses\",\"Official docs\",\"Community projects\"]",
    "projects": "[\"Building tools\",\"Integration projects\",\"Optimization tasks\"]",
    "careerSlug": "technical-sales-engineer"
  },
  {
    "phase": 3,
    "title": "Advanced Patterns & Architecture",
    "duration": "4 months",
    "skills": "[\"Architectural Design\",\"Performance Optimization\",\"Security\"]",
    "resources": "[\"Case studies\",\"Advanced workshops\",\"Industry papers\"]",
    "projects": "[\"Design systems\",\"Scale projects\",\"Security implementations\"]",
    "careerSlug": "technical-sales-engineer"
  },
  {
    "phase": 4,
    "title": "Leadership & Mentoring",
    "duration": "3 months",
    "skills": "[\"Team Leadership\",\"Communication\",\"Strategic Thinking\"]",
    "resources": "[\"Leadership training\",\"Mentoring programs\",\"Industry events\"]",
    "projects": "[\"Lead initiatives\",\"Mentor juniors\",\"Strategic planning\"]",
    "careerSlug": "technical-sales-engineer"
  },
  {
    "phase": 5,
    "title": "Specialization & Mastery",
    "duration": "Ongoing",
    "skills": "[\"Deep Expertise\",\"Innovation\",\"Executive Communication\"]",
    "resources": "[\"Research papers\",\"Conferences\",\"Expert networks\"]",
    "projects": "[\"Innovation projects\",\"Industry leadership\",\"Thought leadership\"]",
    "careerSlug": "technical-sales-engineer"
  }
];
  
  for (const record of records) {
    await collection.create(record);
  }
  
  console.log(`Seeded ${records.length} careerRoadmaps records.`);
}, (db) => {
  // This is a one-way migration
});