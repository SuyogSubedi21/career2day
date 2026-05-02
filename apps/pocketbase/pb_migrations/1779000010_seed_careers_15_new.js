/**
 * Migration: Seed 15 new careers (IDs 36-50)
 */
migrate(async (db) => {
  const collection = await db.collection("careers");
  
  const records = [
  {
    "id": 36,
    "title": "Security Architect",
    "slug": "security-architect",
    "description": "Design and implement enterprise security solutions, including access controls, encryption, and threat mitigation strategies across distributed systems.",
    "avg_salary": 165000,
    "demand": "Very High"
  },
  {
    "id": 37,
    "title": "Infrastructure Engineer",
    "slug": "infrastructure-engineer",
    "description": "Build and maintain scalable cloud and on-premise infrastructure, focusing on servers, networking, storage, and system reliability.",
    "avg_salary": 145000,
    "demand": "Very High"
  },
  {
    "id": 38,
    "title": "DevOps Architect",
    "slug": "devops-architect",
    "description": "Design CI/CD pipelines, containerization strategies, and infrastructure automation for large-scale deployments and disaster recovery.",
    "avg_salary": 155000,
    "demand": "Very High"
  },
  {
    "id": 39,
    "title": "Machine Learning Operations Engineer (MLOps)",
    "slug": "mlops-engineer",
    "description": "Operationalize machine learning models, build deployment pipelines, monitor model performance, and manage ML infrastructure at scale.",
    "avg_salary": 150000,
    "demand": "Very High"
  },
  {
    "id": 40,
    "title": "Backend Architect",
    "slug": "backend-architect",
    "description": "Architect scalable backend systems, design APIs, optimize databases, and lead technical decisions for large distributed services.",
    "avg_salary": 160000,
    "demand": "High"
  },
  {
    "id": 41,
    "title": "Enterprise Architect",
    "slug": "enterprise-architect",
    "description": "Design enterprise IT infrastructure, oversee digital transformation initiatives, and align technology with business strategy.",
    "avg_salary": 170000,
    "demand": "High"
  },
  {
    "id": 42,
    "title": "Solutions Engineer",
    "slug": "solutions-engineer",
    "description": "Bridge sales and engineering by designing custom technical solutions for enterprise clients, providing technical pre-sales support and implementation guidance.",
    "avg_salary": 140000,
    "demand": "High"
  },
  {
    "id": 43,
    "title": "Integration Engineer",
    "slug": "integration-engineer",
    "description": "Design and implement integrations between enterprise systems using APIs, middleware, and ETL tools.",
    "avg_salary": 135000,
    "demand": "High"
  },
  {
    "id": 44,
    "title": "Performance Engineer",
    "slug": "performance-engineer",
    "description": "Optimize application and system performance through profiling, benchmarking, load testing, and architectural improvements.",
    "avg_salary": 145000,
    "demand": "High"
  },
  {
    "id": 45,
    "title": "Release Engineer",
    "slug": "release-engineer",
    "description": "Manage software releases, build deployment automation, coordinate cross-team releases, and ensure production stability.",
    "avg_salary": 140000,
    "demand": "Medium"
  },
  {
    "id": 46,
    "title": "IT Security Analyst (SIEM)",
    "slug": "siem-analyst",
    "description": "Monitor security information and event management systems, detect threats, investigate incidents, and implement security controls.",
    "avg_salary": 125000,
    "demand": "Very High"
  },
  {
    "id": 47,
    "title": "Systems Administrator",
    "slug": "systems-administrator",
    "description": "Manage IT infrastructure, handle server administration, user management, network configuration, and system maintenance.",
    "avg_salary": 90000,
    "demand": "High"
  },
  {
    "id": 48,
    "title": "Cloud Security Engineer",
    "slug": "cloud-security-engineer",
    "description": "Secure cloud infrastructure and applications, implement cloud security best practices, and manage cloud access controls.",
    "avg_salary": 155000,
    "demand": "Very High"
  },
  {
    "id": 49,
    "title": "API Developer",
    "slug": "api-developer",
    "description": "Design and develop RESTful and GraphQL APIs, handle versioning, documentation, and ensure API security and performance.",
    "avg_salary": 130000,
    "demand": "High"
  },
  {
    "id": 50,
    "title": "Technical Sales Engineer",
    "slug": "technical-sales-engineer",
    "description": "Provide technical expertise in the sales process, deliver technical presentations, POCs, and guide customers on product integration.",
    "avg_salary": 135000,
    "demand": "Medium"
  }
];
  
  for (const record of records) {
    await collection.create({
      slug: record.slug,
      name: record.title,
      description: record.description,
      avg_salary: record.avg_salary,
      demand: record.demand
    });
  }
  
  console.log(`Seeded ${records.length} new careers.`);
}, (db) => {
  // This is a one-way migration
});