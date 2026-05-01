/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerSkills");

  const record0 = new Record(collection);
    record0.set("skillName", "Networking");
    record0.set("category", "Concepts");
    record0.set("difficulty", "Intermediate");
    record0.set("description", "Understanding of network architecture, protocols, and infrastructure for security implementation.");
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
    record1.set("skillName", "Cryptography");
    record1.set("category", "Concepts");
    record1.set("difficulty", "Advanced");
    record1.set("description", "Mathematical and algorithmic techniques for securing data through encryption and decryption.");
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
    record2.set("skillName", "Penetration Testing");
    record2.set("category", "Tools");
    record2.set("difficulty", "Advanced");
    record2.set("description", "Authorized testing of systems to identify vulnerabilities and security weaknesses.");
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
    record3.set("skillName", "Incident Response");
    record3.set("category", "Concepts");
    record3.set("difficulty", "Advanced");
    record3.set("description", "Procedures and techniques for detecting, responding to, and recovering from security incidents.");
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
    record4.set("skillName", "Firewalls");
    record4.set("category", "Tools");
    record4.set("difficulty", "Intermediate");
    record4.set("description", "Network security devices that monitor and control incoming and outgoing network traffic.");
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
    record5.set("skillName", "IDS/IPS");
    record5.set("category", "Tools");
    record5.set("difficulty", "Advanced");
    record5.set("description", "Intrusion Detection and Prevention Systems for monitoring and blocking malicious network activity.");
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
    record6.set("skillName", "SIEM");
    record6.set("category", "Tools");
    record6.set("difficulty", "Advanced");
    record6.set("description", "Security Information and Event Management systems for collecting and analyzing security logs.");
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
    record7.set("skillName", "Malware Analysis");
    record7.set("category", "Concepts");
    record7.set("difficulty", "Advanced");
    record7.set("description", "Techniques for analyzing malicious software to understand threats and develop countermeasures.");
  try {
    app.save(record7);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record8 = new Record(collection);
    record8.set("skillName", "Forensics");
    record8.set("category", "Concepts");
    record8.set("difficulty", "Advanced");
    record8.set("description", "Digital forensics methods for investigating security incidents and collecting evidence.");
  try {
    app.save(record8);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record9 = new Record(collection);
    record9.set("skillName", "Compliance");
    record9.set("category", "Concepts");
    record9.set("difficulty", "Intermediate");
    record9.set("description", "Knowledge of security regulations and standards like GDPR, HIPAA, and ISO 27001.");
  try {
    app.save(record9);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record10 = new Record(collection);
    record10.set("skillName", "Risk Management");
    record10.set("category", "Concepts");
    record10.set("difficulty", "Intermediate");
    record10.set("description", "Identifying, assessing, and mitigating security risks to organizational assets.");
  try {
    app.save(record10);
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
