/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("cvTemplates");

  const record0 = new Record(collection);
    record0.set("name", "Professional Corporate");
    record0.set("category", "Free");
    record0.set("description", "Classic professional design suitable for corporate environments and traditional industries. Features clean layout with blue and gray color scheme.");
    record0.set("previewHTML", "<div style='font-family: Arial; padding: 20px; background: white;'><h1>John Doe</h1><p>Senior Manager</p></div>");
    record0.set("isPremium", false);
    record0.set("order", 1);
    record0.set("colorScheme", "{'primary': '#003366', 'secondary': '#666666', 'accent': '#0066CC'}");
    record0.set("fontFamily", "Arial, sans-serif");
    record0.set("layoutType", "Traditional");
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
    record1.set("category", "Free");
    record1.set("description", "Minimalist design with plenty of whitespace. Perfect for creative professionals who want a clean, modern look.");
    record1.set("previewHTML", "<div style='font-family: Helvetica; padding: 30px; background: #f5f5f5;'><h1>Jane Smith</h1><p>Designer</p></div>");
    record1.set("isPremium", false);
    record1.set("order", 2);
    record1.set("colorScheme", "{'primary': '#000000', 'secondary': '#FFFFFF', 'accent': '#FF6B6B'}");
    record1.set("fontFamily", "Helvetica, sans-serif");
    record1.set("layoutType", "Minimal");
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
    record2.set("category", "Free");
    record2.set("description", "Bold and creative template with vibrant colors. Ideal for designers, artists, and creative professionals.");
    record2.set("previewHTML", "<div style='font-family: Georgia; padding: 25px; background: #FFF8DC;'><h1>Alex Johnson</h1><p>Creative Director</p></div>");
    record2.set("isPremium", false);
    record2.set("order", 3);
    record2.set("colorScheme", "{'primary': '#FF6B35', 'secondary': '#F7931E', 'accent': '#FDB833'}");
    record2.set("fontFamily", "Georgia, serif");
    record2.set("layoutType", "Creative");
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
    record3.set("category", "Free");
    record3.set("description", "Formal academic style with emphasis on education and research. Suitable for academics and researchers.");
    record3.set("previewHTML", "<div style='font-family: Times New Roman; padding: 20px; background: white;'><h1>Dr. Sarah Williams</h1><p>Professor of Computer Science</p></div>");
    record3.set("isPremium", false);
    record3.set("order", 4);
    record3.set("colorScheme", "{'primary': '#1a1a1a', 'secondary': '#4a4a4a', 'accent': '#8B0000'}");
    record3.set("fontFamily", "Times New Roman, serif");
    record3.set("layoutType", "Academic");
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
    record4.set("description", "Premium executive template with sophisticated design. Perfect for C-level executives and senior leaders.");
    record4.set("previewHTML", "<div style='font-family: Garamond; padding: 30px; background: #F0E6D2;'><h1>Michael Brown</h1><p>Chief Executive Officer</p></div>");
    record4.set("isPremium", true);
    record4.set("order", 5);
    record4.set("colorScheme", "{'primary': '#2C3E50', 'secondary': '#34495E', 'accent': '#E74C3C'}");
    record4.set("fontFamily", "Garamond, serif");
    record4.set("layoutType", "Executive");
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
    record5.set("category", "Premium");
    record5.set("description", "Modern tech-focused template with code-inspired design. Perfect for software engineers and tech professionals.");
    record5.set("previewHTML", "<div style='font-family: Courier New; padding: 20px; background: #1e1e1e; color: #00FF00;'><h1>Dev Engineer</h1><p>Full Stack Developer</p></div>");
    record5.set("isPremium", true);
    record5.set("order", 6);
    record5.set("colorScheme", "{'primary': '#1e1e1e', 'secondary': '#2d2d2d', 'accent': '#00FF00'}");
    record5.set("fontFamily", "Courier New, monospace");
    record5.set("layoutType", "Tech");
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
    record6.set("category", "Free");
    record6.set("description", "Dynamic startup template with modern colors and layout. Great for entrepreneurs and startup founders.");
    record6.set("previewHTML", "<div style='font-family: Verdana; padding: 25px; background: #E8F4F8;'><h1>Emma Davis</h1><p>Startup Founder</p></div>");
    record6.set("isPremium", false);
    record6.set("order", 7);
    record6.set("colorScheme", "{'primary': '#00A8E8', 'secondary': '#00C9FF', 'accent': '#FF006E'}");
    record6.set("fontFamily", "Verdana, sans-serif");
    record6.set("layoutType", "Modern");
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
    record7.set("category", "Free");
    record7.set("description", "Elegant and sophisticated design with gold accents. Suitable for luxury and high-end professionals.");
    record7.set("previewHTML", "<div style='font-family: Palatino; padding: 28px; background: #FFFEF0;'><h1>Victoria Martinez</h1><p>Luxury Brand Manager</p></div>");
    record7.set("isPremium", false);
    record7.set("order", 8);
    record7.set("colorScheme", "{'primary': '#2F4F4F', 'secondary': '#696969', 'accent': '#DAA520'}");
    record7.set("fontFamily", "Palatino, serif");
    record7.set("layoutType", "Elegant");
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
    record8.set("category", "Free");
    record8.set("description", "Bold and eye-catching design with strong typography. Perfect for marketing and sales professionals.");
    record8.set("previewHTML", "<div style='font-family: Impact; padding: 25px; background: #FFE5E5;'><h1>Chris Anderson</h1><p>Marketing Director</p></div>");
    record8.set("isPremium", false);
    record8.set("order", 9);
    record8.set("colorScheme", "{'primary': '#D32F2F', 'secondary': '#F57C00', 'accent': '#FBC02D'}");
    record8.set("fontFamily", "Impact, sans-serif");
    record8.set("layoutType", "Bold");
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
    record9.set("category", "Free");
    record9.set("description", "Clean and straightforward design with excellent readability. Suitable for all professional fields.");
    record9.set("previewHTML", "<div style='font-family: Segoe UI; padding: 22px; background: white;'><h1>Robert Taylor</h1><p>Business Analyst</p></div>");
    record9.set("isPremium", false);
    record9.set("order", 10);
    record9.set("colorScheme", "{'primary': '#1F77B4', 'secondary': '#7F7F7F', 'accent': '#2CA02C'}");
    record9.set("fontFamily", "Segoe UI, sans-serif");
    record9.set("layoutType", "Clean");
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
    record10.set("category", "Free");
    record10.set("description", "Vibrant and colorful design with multiple accent colors. Great for creative and expressive professionals.");
    record10.set("previewHTML", "<div style='font-family: Comic Sans MS; padding: 25px; background: #FFF0F5;'><h1>Lisa Chen</h1><p>Graphic Designer</p></div>");
    record10.set("isPremium", false);
    record10.set("order", 11);
    record10.set("colorScheme", "{'primary': '#FF1493', 'secondary': '#00CED1', 'accent': '#FFD700'}");
    record10.set("fontFamily", "Comic Sans MS, sans-serif");
    record10.set("layoutType", "Colorful");
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
    record11.set("category", "Free");
    record11.set("description", "Ultra-minimalist design with maximum impact. Perfect for professionals who prefer simplicity.");
    record11.set("previewHTML", "<div style='font-family: Trebuchet MS; padding: 30px; background: #FAFAFA;'><h1>David Lee</h1><p>Consultant</p></div>");
    record11.set("isPremium", false);
    record11.set("order", 12);
    record11.set("colorScheme", "{'primary': '#333333', 'secondary': '#CCCCCC', 'accent': '#0099FF'}");
    record11.set("fontFamily", "Trebuchet MS, sans-serif");
    record11.set("layoutType", "Minimalist");
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
    record12.set("category", "Free");
    record12.set("description", "Traditional resume style with classic formatting. Ideal for conservative industries and established professionals.");
    record12.set("previewHTML", "<div style='font-family: Book Antiqua; padding: 20px; background: white;'><h1>Margaret Wilson</h1><p>Senior Accountant</p></div>");
    record12.set("isPremium", false);
    record12.set("order", 13);
    record12.set("colorScheme", "{'primary': '#000000', 'secondary': '#404040', 'accent': '#800000'}");
    record12.set("fontFamily", "Book Antiqua, serif");
    record12.set("layoutType", "Traditional");
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
    record13.set("category", "Free");
    record13.set("description", "Contemporary design with modern aesthetics and balanced layout. Suitable for most professional fields.");
    record13.set("previewHTML", "<div style='font-family: Calibri; padding: 24px; background: #F9F9F9;'><h1>James Robinson</h1><p>Project Manager</p></div>");
    record13.set("isPremium", false);
    record13.set("order", 14);
    record13.set("colorScheme", "{'primary': '#2E75B6', 'secondary': '#5B9BD5', 'accent': '#70AD47'}");
    record13.set("fontFamily", "Calibri, sans-serif");
    record13.set("layoutType", "Contemporary");
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
    record14.set("category", "Premium");
    record14.set("description", "Premium artistic template with unique design elements. Perfect for artists, photographers, and creative visionaries.");
    record14.set("previewHTML", "<div style='font-family: Brush Script MT; padding: 28px; background: #F5E6D3;'><h1>Isabella Garcia</h1><p>Fine Artist</p></div>");
    record14.set("isPremium", true);
    record14.set("order", 15);
    record14.set("colorScheme", "{'primary': '#8B4513', 'secondary': '#D2691E', 'accent': '#FF69B4'}");
    record14.set("fontFamily", "Brush Script MT, cursive");
    record14.set("layoutType", "Artistic");
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
