/**
 * Migration: Seed 20 roadmap phases (New careers batch 3)
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
    "careerSlug": "performance-engineer"
  },
  {
    "phase": 2,
    "phaseTitle": "Core Technologies & Tools",
    "duration": "3 months",
    "skills": "[\"Technology Stack\",\"Tool Proficiency\",\"Best Practices\"]",
    "resources": "[\"Advanced courses\",\"Official docs\",\"Community projects\"]",
    "projects": "[\"Building tools\",\"Integration projects\",\"Optimization tasks\"]",
    "careerSlug": "performance-engineer"
  },
  {
    "phase": 3,
    "phaseTitle": "Advanced Patterns & Architecture",
    "duration": "4 months",
    "skills": "[\"Architectural Design\",\"Performance Optimization\",\"Security\"]",
    "resources": "[\"Case studies\",\"Advanced workshops\",\"Industry papers\"]",
    "projects": "[\"Design systems\",\"Scale projects\",\"Security implementations\"]",
    "careerSlug": "performance-engineer"
  },
  {
    "phase": 4,
    "phaseTitle": "Leadership & Mentoring",
    "duration": "3 months",
    "skills": "[\"Team Leadership\",\"Communication\",\"Strategic Thinking\"]",
    "resources": "[\"Leadership training\",\"Mentoring programs\",\"Industry events\"]",
    "projects": "[\"Lead initiatives\",\"Mentor juniors\",\"Strategic planning\"]",
    "careerSlug": "performance-engineer"
  },
  {
    "phase": 5,
    "phaseTitle": "Specialization & Mastery",
    "duration": "Ongoing",
    "skills": "[\"Deep Expertise\",\"Innovation\",\"Executive Communication\"]",
    "resources": "[\"Research papers\",\"Conferences\",\"Expert networks\"]",
    "projects": "[\"Innovation projects\",\"Industry leadership\",\"Thought leadership\"]",
    "careerSlug": "performance-engineer"
  },
  {
    "phase": 1,
    "phaseTitle": "Fundamentals & Prerequisites",
    "duration": "3 months",
    "skills": "[\"Problem Solving\",\"System Thinking\",\"Technical Communication\"]",
    "resources": "[\"Online courses\",\"Documentation\",\"Tutorials\"]",
    "projects": "[\"Setup environment\",\"Hello World project\",\"Basic infrastructure\"]",
    "careerSlug": "release-engineer"
  },
  {
    "phase": 2,
    "phaseTitle": "Core Technologies & Tools",
    "duration": "3 months",
    "skills": "[\"Technology Stack\",\"Tool Proficiency\",\"Best Practices\"]",
    "resources": "[\"Advanced courses\",\"Official docs\",\"Community projects\"]",
    "projects": "[\"Building tools\",\"Integration projects\",\"Optimization tasks\"]",
    "careerSlug": "release-engineer"
  },
  {
    "phase": 3,
    "phaseTitle": "Advanced Patterns & Architecture",
    "duration": "4 months",
    "skills": "[\"Architectural Design\",\"Performance Optimization\",\"Security\"]",
    "resources": "[\"Case studies\",\"Advanced workshops\",\"Industry papers\"]",
    "projects": "[\"Design systems\",\"Scale projects\",\"Security implementations\"]",
    "careerSlug": "release-engineer"
  },
  {
    "phase": 4,
    "phaseTitle": "Leadership & Mentoring",
    "duration": "3 months",
    "skills": "[\"Team Leadership\",\"Communication\",\"Strategic Thinking\"]",
    "resources": "[\"Leadership training\",\"Mentoring programs\",\"Industry events\"]",
    "projects": "[\"Lead initiatives\",\"Mentor juniors\",\"Strategic planning\"]",
    "careerSlug": "release-engineer"
  },
  {
    "phase": 5,
    "phaseTitle": "Specialization & Mastery",
    "duration": "Ongoing",
    "skills": "[\"Deep Expertise\",\"Innovation\",\"Executive Communication\"]",
    "resources": "[\"Research papers\",\"Conferences\",\"Expert networks\"]",
    "projects": "[\"Innovation projects\",\"Industry leadership\",\"Thought leadership\"]",
    "careerSlug": "release-engineer"
  },
  {
    "phase": 1,
    "phaseTitle": "Fundamentals & Prerequisites",
    "duration": "3 months",
    "skills": "[\"Problem Solving\",\"System Thinking\",\"Technical Communication\"]",
    "resources": "[\"Online courses\",\"Documentation\",\"Tutorials\"]",
    "projects": "[\"Setup environment\",\"Hello World project\",\"Basic infrastructure\"]",
    "careerSlug": "siem-analyst"
  },
  {
    "phase": 2,
    "phaseTitle": "Core Technologies & Tools",
    "duration": "3 months",
    "skills": "[\"Technology Stack\",\"Tool Proficiency\",\"Best Practices\"]",
    "resources": "[\"Advanced courses\",\"Official docs\",\"Community projects\"]",
    "projects": "[\"Building tools\",\"Integration projects\",\"Optimization tasks\"]",
    "careerSlug": "siem-analyst"
  },
  {
    "phase": 3,
    "phaseTitle": "Advanced Patterns & Architecture",
    "duration": "4 months",
    "skills": "[\"Architectural Design\",\"Performance Optimization\",\"Security\"]",
    "resources": "[\"Case studies\",\"Advanced workshops\",\"Industry papers\"]",
    "projects": "[\"Design systems\",\"Scale projects\",\"Security implementations\"]",
    "careerSlug": "siem-analyst"
  },
  {
    "phase": 4,
    "phaseTitle": "Leadership & Mentoring",
    "duration": "3 months",
    "skills": "[\"Team Leadership\",\"Communication\",\"Strategic Thinking\"]",
    "resources": "[\"Leadership training\",\"Mentoring programs\",\"Industry events\"]",
    "projects": "[\"Lead initiatives\",\"Mentor juniors\",\"Strategic planning\"]",
    "careerSlug": "siem-analyst"
  },
  {
    "phase": 5,
    "phaseTitle": "Specialization & Mastery",
    "duration": "Ongoing",
    "skills": "[\"Deep Expertise\",\"Innovation\",\"Executive Communication\"]",
    "resources": "[\"Research papers\",\"Conferences\",\"Expert networks\"]",
    "projects": "[\"Innovation projects\",\"Industry leadership\",\"Thought leadership\"]",
    "careerSlug": "siem-analyst"
  },
  {
    "phase": 1,
    "phaseTitle": "Fundamentals & Prerequisites",
    "duration": "3 months",
    "skills": "[\"Problem Solving\",\"System Thinking\",\"Technical Communication\"]",
    "resources": "[\"Online courses\",\"Documentation\",\"Tutorials\"]",
    "projects": "[\"Setup environment\",\"Hello World project\",\"Basic infrastructure\"]",
    "careerSlug": "systems-administrator"
  },
  {
    "phase": 2,
    "phaseTitle": "Core Technologies & Tools",
    "duration": "3 months",
    "skills": "[\"Technology Stack\",\"Tool Proficiency\",\"Best Practices\"]",
    "resources": "[\"Advanced courses\",\"Official docs\",\"Community projects\"]",
    "projects": "[\"Building tools\",\"Integration projects\",\"Optimization tasks\"]",
    "careerSlug": "systems-administrator"
  },
  {
    "phase": 3,
    "phaseTitle": "Advanced Patterns & Architecture",
    "duration": "4 months",
    "skills": "[\"Architectural Design\",\"Performance Optimization\",\"Security\"]",
    "resources": "[\"Case studies\",\"Advanced workshops\",\"Industry papers\"]",
    "projects": "[\"Design systems\",\"Scale projects\",\"Security implementations\"]",
    "careerSlug": "systems-administrator"
  },
  {
    "phase": 4,
    "phaseTitle": "Leadership & Mentoring",
    "duration": "3 months",
    "skills": "[\"Team Leadership\",\"Communication\",\"Strategic Thinking\"]",
    "resources": "[\"Leadership training\",\"Mentoring programs\",\"Industry events\"]",
    "projects": "[\"Lead initiatives\",\"Mentor juniors\",\"Strategic planning\"]",
    "careerSlug": "systems-administrator"
  },
  {
    "phase": 5,
    "phaseTitle": "Specialization & Mastery",
    "duration": "Ongoing",
    "skills": "[\"Deep Expertise\",\"Innovation\",\"Executive Communication\"]",
    "resources": "[\"Research papers\",\"Conferences\",\"Expert networks\"]",
    "projects": "[\"Innovation projects\",\"Industry leadership\",\"Thought leadership\"]",
    "careerSlug": "systems-administrator"
  }
];
  
  for (const record of records) {
    await collection.create(record);
  }
  
  console.log(`Seeded ${records.length} careerRoadmaps records.`);
}, (db) => {
  // This is a one-way migration
});