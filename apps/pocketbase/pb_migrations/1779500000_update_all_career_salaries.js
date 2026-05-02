/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const careerSalaries = {
    "machine-learning-engineer": 145000,
    "ai-llm-engineer": 155000,
    "cloud-architect": 165000,
    "devops-platform-engineer": 155000,
    "cybersecurity-engineer": 160000,
    "data-engineer": 140000,
    "full-stack-engineer": 135000,
    "blockchain-web3-engineer": 170000,
    "site-reliability-engineer-sre": 160000,
    "embedded-systems-firmware-engineer": 130000,
    "data-scientist": 135000,
    "backend-engineer": 130000,
    "mobile-app-developer-ios-android": 125000,
    "product-manager-technical": 145000,
    "quantum-computing-engineer": 180000,
    "ar-vr-engineer": 125000,
    "robotics-engineer": 140000,
    "network-engineer": 125000,
    "solutions-architect": 155000,
    "database-administrator-database-engineer": 120000,
    "game-developer": 115000,
    "bioinformatics-engineer": 135000,
    "prompt-engineer-ai-product-specialist": 130000,
    "hardware-engineer": 140000,
    "autonomous-systems-self-driving-engineer": 165000,
    "ui-ux-designer-technical": 110000,
    "technical-writer": 95000,
    "data-analyst": 105000,
    "it-security-analyst": 115000,
    "salesforce-developer": 130000,
    "computer-vision-engineer": 145000,
    "natural-language-processing-nlp-engineer": 150000,
    "penetration-tester-ethical-hacker": 135000,
    "technical-program-manager-tpm": 150000,
    "gis-geospatial-engineer": 110000,
    "security-architect": 175000,
    "infrastructure-engineer": 130000,
    "devops-architect": 160000,
    "mlops-engineer": 155000,
    "backend-architect": 165000,
    "enterprise-architect": 175000,
    "solutions-engineer": 150000,
    "integration-engineer": 125000,
    "performance-engineer": 140000,
    "release-engineer": 125000,
    "siem-analyst": 120000,
    "systems-administrator": 105000,
    "cloud-security-engineer": 155000,
    "api-developer": 130000,
    "technical-sales-engineer": 145000
  };

  const collection = app.findCollectionByNameOrId("careers");
  
  let updated = 0;
  for (const [slug, salary] of Object.entries(careerSalaries)) {
    try {
      const records = app.findRecordsByFilter("careers", `slug="${slug}"`, "", 0, 1);
      if (records.length > 0) {
        const record = records[0];
        record.set("averageSalary", salary);
        app.save(record);
        updated++;
      }
    } catch (e) {
      console.log(`Could not update salary for ${slug}: ${e.message}`);
    }
  }
  
  console.log(`Updated ${updated} career salaries`);
});
