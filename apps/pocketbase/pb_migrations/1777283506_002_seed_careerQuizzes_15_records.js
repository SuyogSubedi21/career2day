/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerQuizzes");

  const record0 = new Record(collection);
    record0.set("careerSlug", "cloud-architect");
    record0.set("difficulty", "Basic");
    record0.set("questionNumber", 1);
    record0.set("question", "What is the primary benefit of cloud computing?");
    record0.set("options", ["Lower upfront infrastructure costs", "Increased physical server maintenance", "Reduced internet bandwidth", "Limited scalability"]);
    record0.set("correctAnswer", "A");
    record0.set("explanation", "Cloud computing reduces upfront infrastructure costs by using pay-as-you-go models.");
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
    record1.set("careerSlug", "cloud-architect");
    record1.set("difficulty", "Basic");
    record1.set("questionNumber", 2);
    record1.set("question", "Which AWS service is used for object storage?");
    record1.set("options", ["EC2", "S3", "RDS", "Lambda"]);
    record1.set("correctAnswer", "B");
    record1.set("explanation", "Amazon S3 (Simple Storage Service) is used for object storage in AWS.");
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
    record2.set("careerSlug", "cloud-architect");
    record2.set("difficulty", "Basic");
    record2.set("questionNumber", 3);
    record2.set("question", "What does VPC stand for?");
    record2.set("options", ["Virtual Private Cloud", "Virtual Public Connection", "Virtual Protocol Configuration", "Virtual Private Connection"]);
    record2.set("correctAnswer", "A");
    record2.set("explanation", "VPC stands for Virtual Private Cloud, which provides isolated network environments.");
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
    record3.set("careerSlug", "cloud-architect");
    record3.set("difficulty", "Basic");
    record3.set("questionNumber", 4);
    record3.set("question", "Which service provides serverless computing in AWS?");
    record3.set("options", ["EC2", "Lambda", "RDS", "S3"]);
    record3.set("correctAnswer", "B");
    record3.set("explanation", "AWS Lambda provides serverless computing capabilities.");
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
    record4.set("careerSlug", "cloud-architect");
    record4.set("difficulty", "Basic");
    record4.set("questionNumber", 5);
    record4.set("question", "What is the main purpose of IAM in AWS?");
    record4.set("options", ["Data storage", "Identity and access management", "Database management", "Network configuration"]);
    record4.set("correctAnswer", "B");
    record4.set("explanation", "IAM (Identity and Access Management) controls user access and permissions in AWS.");
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
    record5.set("careerSlug", "cloud-architect");
    record5.set("difficulty", "Medium");
    record5.set("questionNumber", 6);
    record5.set("question", "What is the difference between availability zones and regions?");
    record5.set("options", ["No difference", "Regions contain multiple availability zones", "Availability zones contain regions", "They are in different clouds"]);
    record5.set("correctAnswer", "B");
    record5.set("explanation", "AWS regions contain multiple availability zones for redundancy and high availability.");
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
    record6.set("careerSlug", "cloud-architect");
    record6.set("difficulty", "Medium");
    record6.set("questionNumber", 7);
    record6.set("question", "What is auto-scaling in cloud architecture?");
    record6.set("options", ["Manual server management", "Automatic adjustment of resources based on demand", "Reducing cloud costs", "Increasing server speed"]);
    record6.set("correctAnswer", "B");
    record6.set("explanation", "Auto-scaling automatically adjusts resources based on application demand.");
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
    record7.set("careerSlug", "cloud-architect");
    record7.set("difficulty", "Medium");
    record7.set("questionNumber", 8);
    record7.set("question", "What is a load balancer used for?");
    record7.set("options", ["Storing data", "Distributing traffic across servers", "Managing databases", "Encrypting data"]);
    record7.set("correctAnswer", "B");
    record7.set("explanation", "Load balancers distribute incoming traffic across multiple servers for better performance.");
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
    record8.set("careerSlug", "cloud-architect");
    record8.set("difficulty", "Medium");
    record8.set("questionNumber", 9);
    record8.set("question", "What is CloudFormation?");
    record8.set("options", ["A database service", "Infrastructure as Code tool for AWS", "A storage service", "A networking service"]);
    record8.set("correctAnswer", "B");
    record8.set("explanation", "CloudFormation is AWS's Infrastructure as Code service for defining cloud resources.");
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
    record9.set("careerSlug", "cloud-architect");
    record9.set("difficulty", "Medium");
    record9.set("questionNumber", 10);
    record9.set("question", "What is the purpose of a CDN?");
    record9.set("options", ["Database management", "Content delivery and caching", "User authentication", "Server monitoring"]);
    record9.set("correctAnswer", "B");
    record9.set("explanation", "CDN (Content Delivery Network) caches and delivers content from servers closer to users.");
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
    record10.set("careerSlug", "cloud-architect");
    record10.set("difficulty", "Hard");
    record10.set("questionNumber", 11);
    record10.set("question", "What is the difference between RTO and RPO?");
    record10.set("options", ["No difference", "RTO is recovery time, RPO is recovery point", "RPO is recovery time, RTO is recovery point", "They are the same metric"]);
    record10.set("correctAnswer", "B");
    record10.set("explanation", "RTO (Recovery Time Objective) is how quickly to recover, RPO (Recovery Point Objective) is how much data loss is acceptable.");
  try {
    app.save(record10);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record11 = new Record(collection);
    record11.set("careerSlug", "cloud-architect");
    record11.set("difficulty", "Hard");
    record11.set("questionNumber", 12);
    record11.set("question", "What is microservices architecture?");
    record11.set("options", ["One large monolithic application", "Breaking applications into small, independent services", "Using multiple databases", "Cloud-only architecture"]);
    record11.set("correctAnswer", "B");
    record11.set("explanation", "Microservices architecture breaks applications into small, independently deployable services.");
  try {
    app.save(record11);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record12 = new Record(collection);
    record12.set("careerSlug", "cloud-architect");
    record12.set("difficulty", "Hard");
    record12.set("questionNumber", 13);
    record12.set("question", "What is the purpose of API Gateway?");
    record12.set("options", ["Store data", "Manage and route API requests", "Monitor servers", "Encrypt databases"]);
    record12.set("correctAnswer", "B");
    record12.set("explanation", "API Gateway manages, routes, and secures API requests to backend services.");
  try {
    app.save(record12);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record13 = new Record(collection);
    record13.set("careerSlug", "cloud-architect");
    record13.set("difficulty", "Hard");
    record13.set("questionNumber", 14);
    record13.set("question", "What is multi-region architecture used for?");
    record13.set("options", ["Reducing costs", "Disaster recovery and global availability", "Faster development", "Simpler management"]);
    record13.set("correctAnswer", "B");
    record13.set("explanation", "Multi-region architecture provides disaster recovery and serves users globally with low latency.");
  try {
    app.save(record13);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record14 = new Record(collection);
    record14.set("careerSlug", "cloud-architect");
    record14.set("difficulty", "Hard");
    record14.set("questionNumber", 15);
    record14.set("question", "What is the shared responsibility model in cloud?");
    record14.set("options", ["Cloud provider manages everything", "Customer manages everything", "Cloud provider and customer share security responsibilities", "No one is responsible"]);
    record14.set("correctAnswer", "C");
    record14.set("explanation", "The shared responsibility model divides security responsibilities between cloud provider and customer.");
  try {
    app.save(record14);
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
