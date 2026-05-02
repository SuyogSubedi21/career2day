/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  // The 50 correct career slugs
  const correctSlugs = new Set([
    "machine-learning-engineer","ai-llm-engineer","cloud-architect","devops-platform-engineer",
    "cybersecurity-engineer","data-engineer","full-stack-engineer","blockchain-web3-engineer",
    "site-reliability-engineer-sre","embedded-systems-firmware-engineer","data-scientist",
    "backend-engineer","mobile-app-developer-ios-android","product-manager-technical",
    "quantum-computing-engineer","ar-vr-engineer","robotics-engineer","network-engineer",
    "solutions-architect","database-administrator-database-engineer","game-developer",
    "bioinformatics-engineer","prompt-engineer-ai-product-specialist","hardware-engineer",
    "autonomous-systems-self-driving-engineer","ui-ux-designer-technical","technical-writer",
    "data-analyst","it-security-analyst","salesforce-developer","computer-vision-engineer",
    "natural-language-processing-nlp-engineer","penetration-tester-ethical-hacker",
    "technical-program-manager-tpm","gis-geospatial-engineer","security-architect",
    "infrastructure-engineer","devops-architect","mlops-engineer","backend-architect",
    "enterprise-architect","solutions-engineer","integration-engineer","performance-engineer",
    "release-engineer","siem-analyst","systems-administrator","cloud-security-engineer",
    "api-developer","technical-sales-engineer"
  ]);

  // Delete wrong-slug careers
  const allCareers = app.findRecordsByFilter("careers", "id != null", "", 0, 0);
  let deletedCareers = 0;
  const wrongSlugs = [];
  for (const career of allCareers) {
    const slug = career.getString("slug");
    if (!correctSlugs.has(slug)) {
      wrongSlugs.push(slug);
      app.delete(career);
      deletedCareers++;
    }
  }
  console.log("Deleted " + deletedCareers + " wrong-slug careers.");

  // Delete orphaned roadmaps for wrong slugs
  const allRoadmaps = app.findRecordsByFilter("careerRoadmaps", "id != null", "", 0, 0);
  let deletedRoadmaps = 0;
  for (const r of allRoadmaps) {
    if (!correctSlugs.has(r.getString("careerSlug"))) {
      app.delete(r);
      deletedRoadmaps++;
    }
  }
  console.log("Deleted " + deletedRoadmaps + " orphaned roadmap phases.");

  // Delete orphaned quizzes for wrong slugs
  const allQuizzes = app.findRecordsByFilter("careerQuizzes", "id != null", "", 0, 0);
  let deletedQuizzes = 0;
  for (const r of allQuizzes) {
    if (!correctSlugs.has(r.getString("careerSlug"))) {
      app.delete(r);
      deletedQuizzes++;
    }
  }
  console.log("Deleted " + deletedQuizzes + " orphaned quiz questions.");

  // Delete orphaned interview questions for wrong slugs
  const allIQ = app.findRecordsByFilter("careerInterviewQuestions", "id != null", "", 0, 0);
  let deletedIQ = 0;
  for (const r of allIQ) {
    if (!correctSlugs.has(r.getString("careerSlug"))) {
      app.delete(r);
      deletedIQ++;
    }
  }
  console.log("Deleted " + deletedIQ + " orphaned interview questions.");

}, (app) => {});
