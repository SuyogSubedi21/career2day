/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careers");

  const record0 = new Record(collection);
  record0.set("slug", "security-architect");
  record0.set("name", "Security Architect");
  record0.set("description", "Design and implement enterprise security solutions, including access controls, encryption, and threat mitigation strategies across distributed systems.");
  record0.set("avg_salary", 165000);
  record0.set("demand", "Very High");
  try { app.save(record0); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record1 = new Record(collection);
  record1.set("slug", "infrastructure-engineer");
  record1.set("name", "Infrastructure Engineer");
  record1.set("description", "Build and maintain scalable cloud and on-premise infrastructure, focusing on servers, networking, storage, and system reliability.");
  record1.set("avg_salary", 145000);
  record1.set("demand", "Very High");
  try { app.save(record1); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record2 = new Record(collection);
  record2.set("slug", "devops-architect");
  record2.set("name", "DevOps Architect");
  record2.set("description", "Design CI/CD pipelines, containerization strategies, and infrastructure automation for large-scale deployments and disaster recovery.");
  record2.set("avg_salary", 155000);
  record2.set("demand", "Very High");
  try { app.save(record2); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record3 = new Record(collection);
  record3.set("slug", "mlops-engineer");
  record3.set("name", "MLOps Engineer");
  record3.set("description", "Operationalize machine learning models, build deployment pipelines, monitor model performance, and manage ML infrastructure at scale.");
  record3.set("avg_salary", 150000);
  record3.set("demand", "Very High");
  try { app.save(record3); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record4 = new Record(collection);
  record4.set("slug", "backend-architect");
  record4.set("name", "Backend Architect");
  record4.set("description", "Architect scalable backend systems, design APIs, optimize databases, and lead technical decisions for large distributed services.");
  record4.set("avg_salary", 160000);
  record4.set("demand", "High");
  try { app.save(record4); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record5 = new Record(collection);
  record5.set("slug", "enterprise-architect");
  record5.set("name", "Enterprise Architect");
  record5.set("description", "Design enterprise IT infrastructure, oversee digital transformation initiatives, and align technology with business strategy.");
  record5.set("avg_salary", 170000);
  record5.set("demand", "High");
  try { app.save(record5); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record6 = new Record(collection);
  record6.set("slug", "solutions-engineer");
  record6.set("name", "Solutions Engineer");
  record6.set("description", "Bridge sales and engineering by designing custom technical solutions for enterprise clients, providing technical pre-sales support.");
  record6.set("avg_salary", 140000);
  record6.set("demand", "High");
  try { app.save(record6); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record7 = new Record(collection);
  record7.set("slug", "integration-engineer");
  record7.set("name", "Integration Engineer");
  record7.set("description", "Design and implement integrations between enterprise systems using APIs, middleware, and ETL tools.");
  record7.set("avg_salary", 135000);
  record7.set("demand", "High");
  try { app.save(record7); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record8 = new Record(collection);
  record8.set("slug", "performance-engineer");
  record8.set("name", "Performance Engineer");
  record8.set("description", "Optimize application and system performance through profiling, benchmarking, load testing, and architectural improvements.");
  record8.set("avg_salary", 145000);
  record8.set("demand", "High");
  try { app.save(record8); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record9 = new Record(collection);
  record9.set("slug", "release-engineer");
  record9.set("name", "Release Engineer");
  record9.set("description", "Manage software releases, build deployment automation, coordinate cross-team releases, and ensure production stability.");
  record9.set("avg_salary", 140000);
  record9.set("demand", "Medium");
  try { app.save(record9); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record10 = new Record(collection);
  record10.set("slug", "siem-analyst");
  record10.set("name", "SIEM Analyst");
  record10.set("description", "Monitor security information and event management systems, detect threats, investigate incidents, and implement security controls.");
  record10.set("avg_salary", 125000);
  record10.set("demand", "Very High");
  try { app.save(record10); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record11 = new Record(collection);
  record11.set("slug", "systems-administrator");
  record11.set("name", "Systems Administrator");
  record11.set("description", "Manage IT infrastructure, handle server administration, user management, network configuration, and system maintenance.");
  record11.set("avg_salary", 90000);
  record11.set("demand", "High");
  try { app.save(record11); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record12 = new Record(collection);
  record12.set("slug", "cloud-security-engineer");
  record12.set("name", "Cloud Security Engineer");
  record12.set("description", "Secure cloud infrastructure and applications, implement cloud security best practices, and manage cloud access controls.");
  record12.set("avg_salary", 155000);
  record12.set("demand", "Very High");
  try { app.save(record12); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record13 = new Record(collection);
  record13.set("slug", "api-developer");
  record13.set("name", "API Developer");
  record13.set("description", "Design and develop RESTful and GraphQL APIs, handle versioning, documentation, and ensure API security and performance.");
  record13.set("avg_salary", 130000);
  record13.set("demand", "High");
  try { app.save(record13); } catch(e) { if (!e.message.includes("unique")) throw e; }

  const record14 = new Record(collection);
  record14.set("slug", "technical-sales-engineer");
  record14.set("name", "Technical Sales Engineer");
  record14.set("description", "Provide technical expertise in the sales process, deliver technical presentations, POCs, and guide customers on product integration.");
  record14.set("avg_salary", 135000);
  record14.set("demand", "Medium");
  try { app.save(record14); } catch(e) { if (!e.message.includes("unique")) throw e; }

  console.log("Seeded 15 new careers.");
}, (app) => {});