/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("cv_templates");

  const record0 = new Record(collection);
    record0.set("template_id", "modern-clean");
    record0.set("name", "Modern Clean");
    record0.set("category", "Modern");
    record0.set("is_free", true);
    record0.set("color_scheme", "#0066CC");
    record0.set("fonts", "Inter/Roboto");
    record0.set("layout_type", "single-column");
    record0.set("popularity", 95);
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
    record1.set("template_id", "professional-classic");
    record1.set("name", "Professional Classic");
    record1.set("category", "Professional");
    record1.set("is_free", true);
    record1.set("color_scheme", "#333333");
    record1.set("fonts", "Georgia/Times");
    record1.set("layout_type", "single-column");
    record1.set("popularity", 90);
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
    record2.set("template_id", "simple-elegant");
    record2.set("name", "Simple Elegant");
    record2.set("category", "Professional");
    record2.set("is_free", true);
    record2.set("color_scheme", "#1a1a1a");
    record2.set("fonts", "Lato/Open Sans");
    record2.set("layout_type", "single-column");
    record2.set("popularity", 85);
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
    record3.set("template_id", "tech-focus");
    record3.set("name", "Tech Focus");
    record3.set("category", "Tech");
    record3.set("is_free", true);
    record3.set("color_scheme", "#00AA00");
    record3.set("fonts", "Courier/Monospace");
    record3.set("layout_type", "two-column");
    record3.set("popularity", 88);
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
    record4.set("template_id", "creative-minimal");
    record4.set("name", "Creative Minimal");
    record4.set("category", "Creative");
    record4.set("is_free", true);
    record4.set("color_scheme", "#FF6B6B");
    record4.set("fonts", "Poppins/Montserrat");
    record4.set("layout_type", "single-column");
    record4.set("popularity", 82);
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
    record5.set("template_id", "executive-basic");
    record5.set("name", "Executive Basic");
    record5.set("category", "Executive");
    record5.set("is_free", true);
    record5.set("color_scheme", "#2C3E50");
    record5.set("fonts", "Garamond/Serif");
    record5.set("layout_type", "single-column");
    record5.set("popularity", 80);
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
    record6.set("template_id", "startup-style");
    record6.set("name", "Startup Style");
    record6.set("category", "Startup");
    record6.set("is_free", true);
    record6.set("color_scheme", "#FF5733");
    record6.set("fonts", "Quicksand/Raleway");
    record6.set("layout_type", "two-column");
    record6.set("popularity", 87);
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
    record7.set("template_id", "academic");
    record7.set("name", "Academic");
    record7.set("category", "Academic");
    record7.set("is_free", true);
    record7.set("color_scheme", "#003366");
    record7.set("fonts", "Times New Roman/Serif");
    record7.set("layout_type", "single-column");
    record7.set("popularity", 75);
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
    record8.set("template_id", "developer");
    record8.set("name", "Developer");
    record8.set("category", "Developer");
    record8.set("is_free", true);
    record8.set("color_scheme", "#1E90FF");
    record8.set("fonts", "Fira Code/Monospace");
    record8.set("layout_type", "two-column");
    record8.set("popularity", 92);
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
    record9.set("template_id", "consultant");
    record9.set("name", "Consultant");
    record9.set("category", "Consultant");
    record9.set("is_free", true);
    record9.set("color_scheme", "#4A4A4A");
    record9.set("fonts", "Lato/Open Sans");
    record9.set("layout_type", "single-column");
    record9.set("popularity", 78);
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
    record10.set("template_id", "premium-modern");
    record10.set("name", "Premium Modern");
    record10.set("category", "Modern");
    record10.set("is_free", false);
    record10.set("color_scheme", "#6366F1");
    record10.set("fonts", "Inter/Roboto");
    record10.set("layout_type", "two-column");
    record10.set("popularity", 98);
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
    record11.set("template_id", "executive-premium");
    record11.set("name", "Executive Premium");
    record11.set("category", "Executive");
    record11.set("is_free", false);
    record11.set("color_scheme", "#D4AF37");
    record11.set("fonts", "Playfair Display/Serif");
    record11.set("layout_type", "single-column");
    record11.set("popularity", 96);
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
    record12.set("template_id", "creative-pro");
    record12.set("name", "Creative Pro");
    record12.set("category", "Creative");
    record12.set("is_free", false);
    record12.set("color_scheme", "#FF1493");
    record12.set("fonts", "Poppins/Montserrat");
    record12.set("layout_type", "two-column");
    record12.set("popularity", 94);
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
    record13.set("template_id", "tech-advanced");
    record13.set("name", "Tech Advanced");
    record13.set("category", "Tech");
    record13.set("is_free", false);
    record13.set("color_scheme", "#00CED1");
    record13.set("fonts", "JetBrains Mono/Monospace");
    record13.set("layout_type", "two-column");
    record13.set("popularity", 93);
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
    record14.set("template_id", "minimalist-pro");
    record14.set("name", "Minimalist Pro");
    record14.set("category", "Professional");
    record14.set("is_free", false);
    record14.set("color_scheme", "#FFFFFF");
    record14.set("fonts", "Helvetica/Sans-serif");
    record14.set("layout_type", "single-column");
    record14.set("popularity", 91);
  try {
    app.save(record14);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record15 = new Record(collection);
    record15.set("template_id", "corporate-elite");
    record15.set("name", "Corporate Elite");
    record15.set("category", "Executive");
    record15.set("is_free", false);
    record15.set("color_scheme", "#1C3A47");
    record15.set("fonts", "Lora/Serif");
    record15.set("layout_type", "two-column");
    record15.set("popularity", 89);
  try {
    app.save(record15);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record16 = new Record(collection);
    record16.set("template_id", "designer-portfolio");
    record16.set("name", "Designer Portfolio");
    record16.set("category", "Designer");
    record16.set("is_free", false);
    record16.set("color_scheme", "#FF6B9D");
    record16.set("fonts", "Bebas Neue/Display");
    record16.set("layout_type", "two-column");
    record16.set("popularity", 86);
  try {
    app.save(record16);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record17 = new Record(collection);
    record17.set("template_id", "startup-premium");
    record17.set("name", "Startup Premium");
    record17.set("category", "Startup");
    record17.set("is_free", false);
    record17.set("color_scheme", "#FF8C42");
    record17.set("fonts", "Quicksand/Raleway");
    record17.set("layout_type", "two-column");
    record17.set("popularity", 84);
  try {
    app.save(record17);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record18 = new Record(collection);
    record18.set("template_id", "leadership");
    record18.set("name", "Leadership");
    record18.set("category", "Leadership");
    record18.set("is_free", false);
    record18.set("color_scheme", "#2E5090");
    record18.set("fonts", "Merriweather/Serif");
    record18.set("layout_type", "single-column");
    record18.set("popularity", 83);
  try {
    app.save(record18);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record19 = new Record(collection);
    record19.set("template_id", "innovation");
    record19.set("name", "Innovation");
    record19.set("category", "Innovation");
    record19.set("is_free", false);
    record19.set("color_scheme", "#00D9FF");
    record19.set("fonts", "Space Mono/Monospace");
    record19.set("layout_type", "two-column");
    record19.set("popularity", 81);
  try {
    app.save(record19);
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
