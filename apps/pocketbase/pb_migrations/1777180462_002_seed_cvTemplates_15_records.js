/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("cvTemplates");

  const record0 = new Record(collection);
    record0.set("name", "Professional Corporate");
    record0.set("description", "Classic and professional template suitable for corporate roles");
    record0.set("category", "Free");
    record0.set("order", 1);
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
    record1.set("name", "Modern Minimal");
    record1.set("description", "Clean and minimalist design with modern aesthetics");
    record1.set("category", "Free");
    record1.set("order", 2);
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
    record2.set("name", "Creative Design");
    record2.set("description", "Colorful and creative template for design professionals");
    record2.set("category", "Free");
    record2.set("order", 3);
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
    record3.set("name", "Academic");
    record3.set("description", "Formal template designed for academic and research positions");
    record3.set("category", "Premium");
    record3.set("order", 4);
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
    record4.set("description", "Premium template for executive and leadership roles");
    record4.set("category", "Premium");
    record4.set("order", 5);
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
    record5.set("name", "Tech/Developer");
    record5.set("description", "Modern template tailored for tech and developer roles");
    record5.set("category", "Premium");
    record5.set("order", 6);
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
    record6.set("name", "Startup");
    record6.set("description", "Dynamic template perfect for startup environments");
    record6.set("category", "Premium");
    record6.set("order", 7);
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
    record7.set("name", "Elegant");
    record7.set("description", "Sophisticated and elegant design template");
    record7.set("category", "Premium");
    record7.set("order", 8);
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
    record8.set("name", "Bold");
    record8.set("description", "Eye-catching bold design for creative professionals");
    record8.set("category", "Premium");
    record8.set("order", 9);
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
    record9.set("name", "Clean");
    record9.set("description", "Simple and clean template for any profession");
    record9.set("category", "Premium");
    record9.set("order", 10);
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
    record10.set("name", "Colorful");
    record10.set("description", "Vibrant and colorful template for creative roles");
    record10.set("category", "Premium");
    record10.set("order", 11);
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
    record11.set("name", "Minimalist");
    record11.set("description", "Ultra-minimal design focusing on content");
    record11.set("category", "Premium");
    record11.set("order", 12);
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
    record12.set("name", "Traditional");
    record12.set("description", "Classic traditional CV format");
    record12.set("category", "Premium");
    record12.set("order", 13);
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
    record13.set("name", "Contemporary");
    record13.set("description", "Modern contemporary design with unique layout");
    record13.set("category", "Premium");
    record13.set("order", 14);
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
    record14.set("name", "Artistic");
    record14.set("description", "Artistic template for creative and design professionals");
    record14.set("category", "Premium");
    record14.set("order", 15);
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
