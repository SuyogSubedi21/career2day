/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("cvTemplates");

  const record0 = new Record(collection);
    record0.set("name", "Modern");
    record0.set("category", "Free");
    record0.set("description", "Clean and contemporary design with modern typography and spacing");
    record0.set("atsOptimized", true);
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
    record1.set("name", "Minimal");
    record1.set("category", "Free");
    record1.set("description", "Minimalist approach with focus on content and readability");
    record1.set("atsOptimized", true);
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
    record2.set("name", "Student");
    record2.set("category", "Free");
    record2.set("description", "Perfect for students and recent graduates with emphasis on education and projects");
    record2.set("atsOptimized", true);
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
    record3.set("name", "Corporate");
    record3.set("category", "Premium");
    record3.set("description", "Professional corporate template for business executives and managers");
    record3.set("atsOptimized", true);
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
    record4.set("name", "Executive");
    record4.set("category", "Premium");
    record4.set("description", "Premium executive template with sophisticated design elements");
    record4.set("atsOptimized", true);
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
    record5.set("name", "Creative");
    record5.set("category", "Premium");
    record5.set("description", "Bold and creative design for creative professionals and designers");
    record5.set("atsOptimized", false);
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
    record6.set("name", "Tech");
    record6.set("category", "Premium");
    record6.set("description", "Specialized template for software engineers and tech professionals");
    record6.set("atsOptimized", true);
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
    record7.set("name", "Data");
    record7.set("category", "Premium");
    record7.set("description", "Optimized for data scientists and analytics professionals");
    record7.set("atsOptimized", true);
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
    record8.set("name", "Designer");
    record8.set("category", "Premium");
    record8.set("description", "Visually stunning template for graphic and UX designers");
    record8.set("atsOptimized", false);
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
    record9.set("name", "Marketing");
    record9.set("category", "Premium");
    record9.set("description", "Dynamic template for marketing and communications professionals");
    record9.set("atsOptimized", true);
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
    record10.set("name", "Manager");
    record10.set("category", "Premium");
    record10.set("description", "Leadership-focused template for managers and team leads");
    record10.set("atsOptimized", true);
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
    record11.set("name", "Academic");
    record11.set("category", "Premium");
    record11.set("description", "Specialized template for academic and research professionals");
    record11.set("atsOptimized", true);
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
    record12.set("name", "ATS Pro");
    record12.set("category", "Premium");
    record12.set("description", "Optimized for Applicant Tracking Systems with maximum compatibility");
    record12.set("atsOptimized", true);
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
    record13.set("name", "Professional Plus");
    record13.set("category", "Premium");
    record13.set("description", "Enhanced professional template with advanced formatting options");
    record13.set("atsOptimized", true);
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
    record14.set("name", "Premium Elite");
    record14.set("category", "Premium");
    record14.set("description", "Top-tier premium template with exclusive design and features");
    record14.set("atsOptimized", true);
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
