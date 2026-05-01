/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerProjects");

  const record0 = new Record(collection);
    record0.set("careerSlug", "cybersecurity-specialist");
    record0.set("projectTitle", "Network Security Audit");
    record0.set("description", "Conduct a comprehensive security audit of a network infrastructure to identify vulnerabilities and security gaps.");
    record0.set("difficulty", "Intermediate");
    record0.set("estimatedTime", "4-5 weeks");
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
    record1.set("projectTitle", "Vulnerability Assessment Project");
    record1.set("description", "Perform a detailed vulnerability assessment using industry-standard tools and create a remediation plan.");
    record1.set("difficulty", "Intermediate");
    record1.set("estimatedTime", "3-4 weeks");
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
    record2.set("projectTitle", "Incident Response Simulation");
    record2.set("description", "Simulate a security incident and execute a complete incident response plan including detection, containment, and recovery.");
    record2.set("difficulty", "Advanced");
    record2.set("estimatedTime", "4-5 weeks");
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
    record3.set("projectTitle", "Penetration Testing Report");
    record3.set("description", "Execute a penetration test on a target system and document findings with detailed technical and executive reports.");
    record3.set("difficulty", "Advanced");
    record3.set("estimatedTime", "4-6 weeks");
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
    record4.set("projectTitle", "Security Policy Development");
    record4.set("description", "Develop comprehensive security policies and procedures for an organization covering access control, data protection, and incident response.");
    record4.set("difficulty", "Intermediate");
    record4.set("estimatedTime", "3-4 weeks");
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
    record5.set("careerSlug", "cybersecurity-specialist");
    record5.set("projectTitle", "Threat Intelligence Analysis");
    record5.set("description", "Analyze threat intelligence data to identify emerging threats, attack patterns, and provide actionable security recommendations.");
    record5.set("difficulty", "Advanced");
    record5.set("estimatedTime", "3-4 weeks");
  try {
    app.save(record5);
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
