/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("cv_templates");

  const record0 = new Record(collection);
    record0.set("template_id", "modern_clean");
    record0.set("name", "Modern Clean");
    record0.set("description", "A sleek and contemporary CV template with minimalist design and clean typography");
    record0.set("category", "Free");
    record0.set("is_free", true);
    record0.set("order", 1);
    record0.set("features", "{'layout': 'single_column', 'color_scheme': 'blue_white', 'hasPhotoPlaceholder': True, 'sections': ['header', 'summary', 'experience', 'education', 'skills', 'certifications']}");
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
    record1.set("template_id", "professional_classic");
    record1.set("name", "Professional Classic");
    record1.set("description", "A timeless professional CV template suitable for corporate environments");
    record1.set("category", "Free");
    record1.set("is_free", true);
    record1.set("order", 2);
    record1.set("features", "{'layout': 'single_column', 'color_scheme': 'black_white', 'hasPhotoPlaceholder': True, 'sections': ['header', 'summary', 'experience', 'education', 'skills']}");
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
    record2.set("template_id", "creative_bold");
    record2.set("name", "Creative Bold");
    record2.set("description", "A vibrant and creative CV template for designers and creative professionals");
    record2.set("category", "Free");
    record2.set("is_free", true);
    record2.set("order", 3);
    record2.set("features", "{'layout': 'two_column', 'color_scheme': 'purple_white', 'hasPhotoPlaceholder': True, 'sections': ['header', 'portfolio', 'experience', 'skills', 'education']}");
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
    record3.set("template_id", "tech_developer");
    record3.set("name", "Tech Developer");
    record3.set("description", "A specialized CV template designed for software developers and tech professionals");
    record3.set("category", "Free");
    record3.set("is_free", true);
    record3.set("order", 4);
    record3.set("features", "{'layout': 'single_column', 'color_scheme': 'dark_green', 'hasPhotoPlaceholder': True, 'sections': ['header', 'summary', 'projects', 'experience', 'skills', 'education']}");
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
    record4.set("template_id", "premium_executive");
    record4.set("name", "Premium Executive");
    record4.set("description", "An elegant executive CV template for senior leadership positions");
    record4.set("category", "Premium");
    record4.set("is_free", false);
    record4.set("order", 5);
    record4.set("features", "{'layout': 'single_column', 'color_scheme': 'gold_navy', 'hasPhotoPlaceholder': True, 'sections': ['header', 'executive_summary', 'experience', 'education', 'skills', 'awards', 'languages']}");
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
    record5.set("template_id", "premium_minimal");
    record5.set("name", "Premium Minimal");
    record5.set("description", "A minimalist premium CV template with focus on content clarity");
    record5.set("category", "Premium");
    record5.set("is_free", false);
    record5.set("order", 6);
    record5.set("features", "{'layout': 'single_column', 'color_scheme': 'gray_white', 'hasPhotoPlaceholder': True, 'sections': ['header', 'summary', 'experience', 'education', 'skills']}");
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
    record6.set("template_id", "premium_modern_blue");
    record6.set("name", "Premium Modern Blue");
    record6.set("description", "A modern premium CV with blue accent colors and contemporary design");
    record6.set("category", "Premium");
    record6.set("is_free", false);
    record6.set("order", 7);
    record6.set("features", "{'layout': 'two_column', 'color_scheme': 'blue_light_gray', 'hasPhotoPlaceholder': True, 'sections': ['header', 'summary', 'experience', 'education', 'skills', 'certifications', 'projects']}");
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
    record7.set("template_id", "premium_creative_red");
    record7.set("name", "Premium Creative Red");
    record7.set("description", "A creative premium CV with red accent colors for standout presentation");
    record7.set("category", "Premium");
    record7.set("is_free", false);
    record7.set("order", 8);
    record7.set("features", "{'layout': 'two_column', 'color_scheme': 'red_white', 'hasPhotoPlaceholder': True, 'sections': ['header', 'portfolio', 'experience', 'skills', 'education', 'awards']}");
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
    record8.set("template_id", "premium_tech_advanced");
    record8.set("name", "Premium Tech Advanced");
    record8.set("description", "An advanced technical CV template for software engineers and architects");
    record8.set("category", "Premium");
    record8.set("is_free", false);
    record8.set("order", 9);
    record8.set("features", "{'layout': 'single_column', 'color_scheme': 'dark_cyan', 'hasPhotoPlaceholder': True, 'sections': ['header', 'summary', 'projects', 'experience', 'technical_skills', 'education', 'certifications']}");
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
    record9.set("template_id", "premium_designer_portfolio");
    record9.set("name", "Premium Designer Portfolio");
    record9.set("description", "A portfolio-focused CV template for designers and creative professionals");
    record9.set("category", "Premium");
    record9.set("is_free", false);
    record9.set("order", 10);
    record9.set("features", "{'layout': 'two_column', 'color_scheme': 'teal_white', 'hasPhotoPlaceholder': True, 'sections': ['header', 'portfolio', 'experience', 'skills', 'education', 'awards']}");
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
    record10.set("template_id", "premium_academic");
    record10.set("name", "Premium Academic");
    record10.set("description", "A specialized CV template for academic and research professionals");
    record10.set("category", "Premium");
    record10.set("is_free", false);
    record10.set("order", 11);
    record10.set("features", "{'layout': 'single_column', 'color_scheme': 'burgundy_white', 'hasPhotoPlaceholder': True, 'sections': ['header', 'summary', 'education', 'research', 'publications', 'experience', 'skills']}");
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
    record11.set("template_id", "premium_startup");
    record11.set("name", "Premium Startup");
    record11.set("description", "A modern CV template for startup founders and entrepreneurs");
    record11.set("category", "Premium");
    record11.set("is_free", false);
    record11.set("order", 12);
    record11.set("features", "{'layout': 'two_column', 'color_scheme': 'orange_white', 'hasPhotoPlaceholder': True, 'sections': ['header', 'summary', 'ventures', 'experience', 'skills', 'education']}");
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
    record12.set("template_id", "premium_consultant");
    record12.set("name", "Premium Consultant");
    record12.set("description", "A professional CV template for management and business consultants");
    record12.set("category", "Premium");
    record12.set("is_free", false);
    record12.set("order", 13);
    record12.set("features", "{'layout': 'single_column', 'color_scheme': 'slate_white', 'hasPhotoPlaceholder': True, 'sections': ['header', 'executive_summary', 'experience', 'expertise', 'education', 'certifications']}");
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
    record13.set("template_id", "premium_healthcare");
    record13.set("name", "Premium Healthcare");
    record13.set("description", "A specialized CV template for healthcare professionals and medical practitioners");
    record13.set("category", "Premium");
    record13.set("is_free", false);
    record13.set("order", 14);
    record13.set("features", "{'layout': 'single_column', 'color_scheme': 'green_white', 'hasPhotoPlaceholder': True, 'sections': ['header', 'summary', 'experience', 'education', 'licenses', 'certifications', 'skills']}");
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
    record14.set("template_id", "premium_finance");
    record14.set("name", "Premium Finance");
    record14.set("description", "A professional CV template for finance and accounting professionals");
    record14.set("category", "Premium");
    record14.set("is_free", false);
    record14.set("order", 15);
    record14.set("features", "{'layout': 'single_column', 'color_scheme': 'dark_blue_white', 'hasPhotoPlaceholder': True, 'sections': ['header', 'summary', 'experience', 'education', 'certifications', 'skills']}");
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
    record15.set("template_id", "premium_marketing");
    record15.set("name", "Premium Marketing");
    record15.set("description", "A creative CV template for marketing and brand professionals");
    record15.set("category", "Premium");
    record15.set("is_free", false);
    record15.set("order", 16);
    record15.set("features", "{'layout': 'two_column', 'color_scheme': 'pink_white', 'hasPhotoPlaceholder': True, 'sections': ['header', 'summary', 'campaigns', 'experience', 'skills', 'education']}");
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
    record16.set("template_id", "premium_sales");
    record16.set("name", "Premium Sales");
    record16.set("description", "A dynamic CV template for sales professionals and business development roles");
    record16.set("category", "Premium");
    record16.set("is_free", false);
    record16.set("order", 17);
    record16.set("features", "{'layout': 'single_column', 'color_scheme': 'red_gray', 'hasPhotoPlaceholder': True, 'sections': ['header', 'summary', 'achievements', 'experience', 'skills', 'education']}");
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
    record17.set("template_id", "premium_hr");
    record17.set("name", "Premium HR");
    record17.set("description", "A professional CV template for human resources and talent management professionals");
    record17.set("category", "Premium");
    record17.set("is_free", false);
    record17.set("order", 18);
    record17.set("features", "{'layout': 'single_column', 'color_scheme': 'purple_white', 'hasPhotoPlaceholder': True, 'sections': ['header', 'summary', 'experience', 'education', 'certifications', 'skills']}");
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
    record18.set("template_id", "premium_education");
    record18.set("name", "Premium Education");
    record18.set("description", "A specialized CV template for educators and academic professionals");
    record18.set("category", "Premium");
    record18.set("is_free", false);
    record18.set("order", 19);
    record18.set("features", "{'layout': 'single_column', 'color_scheme': 'indigo_white', 'hasPhotoPlaceholder': True, 'sections': ['header', 'summary', 'experience', 'education', 'certifications', 'publications']}");
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
    record19.set("template_id", "premium_engineering");
    record19.set("name", "Premium Engineering");
    record19.set("description", "A technical CV template for engineers and technical professionals");
    record19.set("category", "Premium");
    record19.set("is_free", false);
    record19.set("order", 20);
    record19.set("features", "{'layout': 'single_column', 'color_scheme': 'steel_blue', 'hasPhotoPlaceholder': True, 'sections': ['header', 'summary', 'projects', 'experience', 'technical_skills', 'education']}");
  try {
    app.save(record19);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record20 = new Record(collection);
    record20.set("template_id", "premium_creative_agency");
    record20.set("name", "Premium Creative Agency");
    record20.set("description", "A vibrant CV template for creative agency professionals and artists");
    record20.set("category", "Premium");
    record20.set("is_free", false);
    record20.set("order", 21);
    record20.set("features", "{'layout': 'two_column', 'color_scheme': 'vibrant_multi', 'hasPhotoPlaceholder': True, 'sections': ['header', 'portfolio', 'experience', 'skills', 'awards', 'education']}");
  try {
    app.save(record20);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record21 = new Record(collection);
    record21.set("template_id", "premium_legal");
    record21.set("name", "Premium Legal");
    record21.set("description", "A formal CV template for legal professionals and attorneys");
    record21.set("category", "Premium");
    record21.set("is_free", false);
    record21.set("order", 22);
    record21.set("features", "{'layout': 'single_column', 'color_scheme': 'navy_white', 'hasPhotoPlaceholder': True, 'sections': ['header', 'summary', 'experience', 'education', 'bar_admissions', 'certifications']}");
  try {
    app.save(record21);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record22 = new Record(collection);
    record22.set("template_id", "premium_nonprofit");
    record22.set("name", "Premium Nonprofit");
    record22.set("description", "A professional CV template for nonprofit and social impact professionals");
    record22.set("category", "Premium");
    record22.set("is_free", false);
    record22.set("order", 23);
    record22.set("features", "{'layout': 'single_column', 'color_scheme': 'forest_green', 'hasPhotoPlaceholder': True, 'sections': ['header', 'summary', 'experience', 'education', 'volunteer_work', 'skills']}");
  try {
    app.save(record22);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record23 = new Record(collection);
    record23.set("template_id", "premium_luxury");
    record23.set("name", "Premium Luxury");
    record23.set("description", "An ultra-premium CV template with luxury design elements and premium aesthetics");
    record23.set("category", "Premium");
    record23.set("is_free", false);
    record23.set("order", 24);
    record23.set("features", "{'layout': 'single_column', 'color_scheme': 'gold_black', 'hasPhotoPlaceholder': True, 'sections': ['header', 'executive_summary', 'experience', 'education', 'awards', 'languages', 'certifications']}");
  try {
    app.save(record23);
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
