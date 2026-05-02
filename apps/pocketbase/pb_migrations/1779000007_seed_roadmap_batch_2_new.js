/**
 * Migration: Seed 20 roadmap phases (New careers batch 2)
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
    "careerSlug": "backend-architect"
  },
  {
    "phase": 2,
    "title": "Core Technologies & Tools",
    "duration": "3 months",
    "skills": "[\"Technology Stack\",\"Tool Proficiency\",\"Best Practices\"]",
    "resources": "[\"Advanced courses\",\"Official docs\",\"Community projects\"]",
    "projects": "[\"Building tools\",\"Integration projects\",\"Optimization tasks\"]",
    "careerSlug": "backend-architect"
  },
  {
    "phase": 3,
    "title": "Advanced Patterns & Architecture",
    "duration": "4 months",
    "skills": "[\"Architectural Design\",\"Performance Optimization\",\"Security\"]",
    "resources": "[\"Case studies\",\"Advanced workshops\",\"Industry papers\"]",
    "projects": "[\"Design systems\",\"Scale projects\",\"Security implementations\"]",
    "careerSlug": "backend-architect"
  },
  {
    "phase": 4,
    "title": "Leadership & Mentoring",
    "duration": "3 months",
    "skills": "[\"Team Leadership\",\"Communication\",\"Strategic Thinking\"]",
    "resources": "[\"Leadership training\",\"Mentoring programs\",\"Industry events\"]",
    "projects": "[\"Lead initiatives\",\"Mentor juniors\",\"Strategic planning\"]",
    "careerSlug": "backend-architect"
  },
  {
    "phase": 5,
    "title": "Specialization & Mastery",
    "duration": "Ongoing",
    "skills": "[\"Deep Expertise\",\"Innovation\",\"Executive Communication\"]",
    "resources": "[\"Research papers\",\"Conferences\",\"Expert networks\"]",
    "projects": "[\"Innovation projects\",\"Industry leadership\",\"Thought leadership\"]",
    "careerSlug": "backend-architect"
  },
  {
    "phase": 1,
    "title": "Fundamentals & Prerequisites",
    "duration": "3 months",
    "skills": "[\"Problem Solving\",\"System Thinking\",\"Technical Communication\"]",
    "resources": "[\"Online courses\",\"Documentation\",\"Tutorials\"]",
    "projects": "[\"Setup environment\",\"Hello World project\",\"Basic infrastructure\"]",
    "careerSlug": "enterprise-architect"
  },
  {
    "phase": 2,
    "title": "Core Technologies & Tools",
    "duration": "3 months",
    "skills": "[\"Technology Stack\",\"Tool Proficiency\",\"Best Practices\"]",
    "resources": "[\"Advanced courses\",\"Official docs\",\"Community projects\"]",
    "projects": "[\"Building tools\",\"Integration projects\",\"Optimization tasks\"]",
    "careerSlug": "enterprise-architect"
  },
  {
    "phase": 3,
    "title": "Advanced Patterns & Architecture",
    "duration": "4 months",
    "skills": "[\"Architectural Design\",\"Performance Optimization\",\"Security\"]",
    "resources": "[\"Case studies\",\"Advanced workshops\",\"Industry papers\"]",
    "projects": "[\"Design systems\",\"Scale projects\",\"Security implementations\"]",
    "careerSlug": "enterprise-architect"
  },
  {
    "phase": 4,
    "title": "Leadership & Mentoring",
    "duration": "3 months",
    "skills": "[\"Team Leadership\",\"Communication\",\"Strategic Thinking\"]",
    "resources": "[\"Leadership training\",\"Mentoring programs\",\"Industry events\"]",
    "projects": "[\"Lead initiatives\",\"Mentor juniors\",\"Strategic planning\"]",
    "careerSlug": "enterprise-architect"
  },
  {
    "phase": 5,
    "title": "Specialization & Mastery",
    "duration": "Ongoing",
    "skills": "[\"Deep Expertise\",\"Innovation\",\"Executive Communication\"]",
    "resources": "[\"Research papers\",\"Conferences\",\"Expert networks\"]",
    "projects": "[\"Innovation projects\",\"Industry leadership\",\"Thought leadership\"]",
    "careerSlug": "enterprise-architect"
  },
  {
    "phase": 1,
    "title": "Fundamentals & Prerequisites",
    "duration": "3 months",
    "skills": "[\"Problem Solving\",\"System Thinking\",\"Technical Communication\"]",
    "resources": "[\"Online courses\",\"Documentation\",\"Tutorials\"]",
    "projects": "[\"Setup environment\",\"Hello World project\",\"Basic infrastructure\"]",
    "careerSlug": "solutions-engineer"
  },
  {
    "phase": 2,
    "title": "Core Technologies & Tools",
    "duration": "3 months",
    "skills": "[\"Technology Stack\",\"Tool Proficiency\",\"Best Practices\"]",
    "resources": "[\"Advanced courses\",\"Official docs\",\"Community projects\"]",
    "projects": "[\"Building tools\",\"Integration projects\",\"Optimization tasks\"]",
    "careerSlug": "solutions-engineer"
  },
  {
    "phase": 3,
    "title": "Advanced Patterns & Architecture",
    "duration": "4 months",
    "skills": "[\"Architectural Design\",\"Performance Optimization\",\"Security\"]",
    "resources": "[\"Case studies\",\"Advanced workshops\",\"Industry papers\"]",
    "projects": "[\"Design systems\",\"Scale projects\",\"Security implementations\"]",
    "careerSlug": "solutions-engineer"
  },
  {
    "phase": 4,
    "title": "Leadership & Mentoring",
    "duration": "3 months",
    "skills": "[\"Team Leadership\",\"Communication\",\"Strategic Thinking\"]",
    "resources": "[\"Leadership training\",\"Mentoring programs\",\"Industry events\"]",
    "projects": "[\"Lead initiatives\",\"Mentor juniors\",\"Strategic planning\"]",
    "careerSlug": "solutions-engineer"
  },
  {
    "phase": 5,
    "title": "Specialization & Mastery",
    "duration": "Ongoing",
    "skills": "[\"Deep Expertise\",\"Innovation\",\"Executive Communication\"]",
    "resources": "[\"Research papers\",\"Conferences\",\"Expert networks\"]",
    "projects": "[\"Innovation projects\",\"Industry leadership\",\"Thought leadership\"]",
    "careerSlug": "solutions-engineer"
  },
  {
    "phase": 1,
    "title": "Fundamentals & Prerequisites",
    "duration": "3 months",
    "skills": "[\"Problem Solving\",\"System Thinking\",\"Technical Communication\"]",
    "resources": "[\"Online courses\",\"Documentation\",\"Tutorials\"]",
    "projects": "[\"Setup environment\",\"Hello World project\",\"Basic infrastructure\"]",
    "careerSlug": "integration-engineer"
  },
  {
    "phase": 2,
    "title": "Core Technologies & Tools",
    "duration": "3 months",
    "skills": "[\"Technology Stack\",\"Tool Proficiency\",\"Best Practices\"]",
    "resources": "[\"Advanced courses\",\"Official docs\",\"Community projects\"]",
    "projects": "[\"Building tools\",\"Integration projects\",\"Optimization tasks\"]",
    "careerSlug": "integration-engineer"
  },
  {
    "phase": 3,
    "title": "Advanced Patterns & Architecture",
    "duration": "4 months",
    "skills": "[\"Architectural Design\",\"Performance Optimization\",\"Security\"]",
    "resources": "[\"Case studies\",\"Advanced workshops\",\"Industry papers\"]",
    "projects": "[\"Design systems\",\"Scale projects\",\"Security implementations\"]",
    "careerSlug": "integration-engineer"
  },
  {
    "phase": 4,
    "title": "Leadership & Mentoring",
    "duration": "3 months",
    "skills": "[\"Team Leadership\",\"Communication\",\"Strategic Thinking\"]",
    "resources": "[\"Leadership training\",\"Mentoring programs\",\"Industry events\"]",
    "projects": "[\"Lead initiatives\",\"Mentor juniors\",\"Strategic planning\"]",
    "careerSlug": "integration-engineer"
  },
  {
    "phase": 5,
    "title": "Specialization & Mastery",
    "duration": "Ongoing",
    "skills": "[\"Deep Expertise\",\"Innovation\",\"Executive Communication\"]",
    "resources": "[\"Research papers\",\"Conferences\",\"Expert networks\"]",
    "projects": "[\"Innovation projects\",\"Industry leadership\",\"Thought leadership\"]",
    "careerSlug": "integration-engineer"
  }
];
  
  for (const record of records) {
    await collection.create(record);
  }
  
  console.log(`Seeded ${records.length} careerRoadmaps records.`);
}, (db) => {
  // This is a one-way migration
});