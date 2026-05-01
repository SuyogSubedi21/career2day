/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerRoadmaps");

  const record0 = new Record(collection);
    record0.set("careerSlug", "cybersecurity-specialist");
    record0.set("phase", 1);
    record0.set("phaseTitle", "Networking & System Fundamentals");
    record0.set("duration", "6-8 weeks");
    record0.set("skills", ["Networking Basics", "TCP/IP", "DNS", "DHCP", "Firewalls", "Network Security", "System Administration"]);
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
    record1.set("careerSlug", "cybersecurity-specialist");
    record1.set("phase", 2);
    record1.set("phaseTitle", "Security Fundamentals");
    record1.set("duration", "6-8 weeks");
    record1.set("skills", ["Cryptography", "Encryption", "Authentication", "Authorization", "Security Protocols", "SSL/TLS", "PKI"]);
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
    record2.set("careerSlug", "cybersecurity-specialist");
    record2.set("phase", 3);
    record2.set("phaseTitle", "Threat Analysis & Vulnerability Management");
    record2.set("duration", "6-8 weeks");
    record2.set("skills", ["Threat Modeling", "Vulnerability Assessment", "Penetration Testing", "Security Scanning", "Risk Analysis"]);
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
    record3.set("careerSlug", "cybersecurity-specialist");
    record3.set("phase", 4);
    record3.set("phaseTitle", "Incident Response & Forensics");
    record3.set("duration", "6-8 weeks");
    record3.set("skills", ["Incident Response", "Digital Forensics", "Log Analysis", "Malware Analysis", "Threat Intelligence"]);
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
    record4.set("careerSlug", "cybersecurity-specialist");
    record4.set("phase", 5);
    record4.set("phaseTitle", "Compliance & Security Architecture");
    record4.set("duration", "6-8 weeks");
    record4.set("skills", ["Security Compliance", "GDPR", "HIPAA", "Security Architecture", "Security Policies", "Governance"]);
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
