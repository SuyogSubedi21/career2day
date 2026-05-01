/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("interviewQuestionsDatabase");

  const record0 = new Record(collection);
    record0.set("careerSlug", "product-manager");
    record0.set("careerName", "Product Manager");
    record0.set("level", "Beginner");
    record0.set("questionNumber", 1);
    record0.set("question", "What is a product manager and what are their main responsibilities?");
    record0.set("explanation", "Product manager defines product vision, strategy, and roadmap. Bridges business, engineering, and design. Responsible for product success and ROI.");
    record0.set("practicalExample", "PM defines features, prioritizes backlog, works with engineers and designers, measures success metrics");
    record0.set("keyPoints", ["Vision", "Strategy", "Roadmap", "Cross-functional"]);
    record0.set("relatedTopics", ["Product management", "Leadership", "Strategy"]);
    record0.set("difficulty", "Simple");
    record0.set("category", "Product Management");
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
    record1.set("careerSlug", "product-manager");
    record1.set("careerName", "Product Manager");
    record1.set("level", "Beginner");
    record1.set("questionNumber", 2);
    record1.set("question", "What is a product roadmap?");
    record1.set("explanation", "Product roadmap is strategic plan showing features and releases over time. Communicates direction to stakeholders. Flexible and evolves with feedback.");
    record1.set("practicalExample", "Q1: feature A, Q2: feature B, Q3: feature C. Roadmap shows priorities and timeline");
    record1.set("keyPoints", ["Strategic plan", "Timeline", "Priorities", "Communication"]);
    record1.set("relatedTopics", ["Product management", "Planning", "Strategy"]);
    record1.set("difficulty", "Simple");
    record1.set("category", "Product Management");
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
    record2.set("careerSlug", "product-manager");
    record2.set("careerName", "Product Manager");
    record2.set("level", "Beginner");
    record2.set("questionNumber", 3);
    record2.set("question", "What is a user story?");
    record2.set("explanation", "User story describes feature from user perspective. Format: 'As a [user], I want [feature], so that [benefit]'. Helps understand user needs.");
    record2.set("practicalExample", "As a customer, I want to save items to wishlist, so that I can purchase them later");
    record2.set("keyPoints", ["User perspective", "Format", "Benefit", "Requirement"]);
    record2.set("relatedTopics", ["Agile", "Requirements", "User-centric"]);
    record2.set("difficulty", "Simple");
    record2.set("category", "Agile");
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
    record3.set("careerSlug", "product-manager");
    record3.set("careerName", "Product Manager");
    record3.set("level", "Beginner");
    record3.set("questionNumber", 4);
    record3.set("question", "What is a product specification?");
    record3.set("explanation", "Product spec documents detailed requirements for feature. Includes functionality, design, technical details. Guides engineering and design teams.");
    record3.set("practicalExample", "Spec for login feature: fields, validation, error messages, security requirements");
    record3.set("keyPoints", ["Detailed requirements", "Functionality", "Design", "Technical"]);
    record3.set("relatedTopics", ["Requirements", "Documentation", "Product management"]);
    record3.set("difficulty", "Simple");
    record3.set("category", "Product Management");
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
    record4.set("careerSlug", "product-manager");
    record4.set("careerName", "Product Manager");
    record4.set("level", "Beginner");
    record4.set("questionNumber", 5);
    record4.set("question", "What is market research?");
    record4.set("explanation", "Market research studies target market, competitors, customer needs. Informs product strategy. Methods: surveys, interviews, focus groups, data analysis.");
    record4.set("practicalExample", "Survey 1000 users about pain points, analyze competitor features, identify market gaps");
    record4.set("keyPoints", ["Customer needs", "Competitor analysis", "Market gaps", "Data-driven"]);
    record4.set("relatedTopics", ["Market research", "Strategy", "Customer insights"]);
    record4.set("difficulty", "Simple");
    record4.set("category", "Market Research");
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
    record5.set("careerSlug", "product-manager");
    record5.set("careerName", "Product Manager");
    record5.set("level", "Beginner");
    record5.set("questionNumber", 6);
    record5.set("question", "What is customer segmentation?");
    record5.set("explanation", "Customer segmentation divides market into groups with similar characteristics. Enables targeted marketing and product development.");
    record5.set("practicalExample", "Segment by age, income, location, behavior. Tailor product for each segment");
    record5.set("keyPoints", ["Market division", "Targeting", "Personalization", "Strategy"]);
    record5.set("relatedTopics", ["Marketing", "Customer insights", "Strategy"]);
    record5.set("difficulty", "Simple");
    record5.set("category", "Market Research");
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
    record6.set("careerSlug", "product-manager");
    record6.set("careerName", "Product Manager");
    record6.set("level", "Beginner");
    record6.set("questionNumber", 7);
    record6.set("question", "What is a competitive analysis?");
    record6.set("explanation", "Competitive analysis examines competitors' products, strategies, strengths, weaknesses. Identifies opportunities and threats. Informs positioning.");
    record6.set("practicalExample", "Analyze 5 competitors: features, pricing, marketing, customer reviews. Identify gaps");
    record6.set("keyPoints", ["Competitor study", "Strengths/weaknesses", "Opportunities", "Positioning"]);
    record6.set("relatedTopics", ["Strategy", "Market research", "Competitive advantage"]);
    record6.set("difficulty", "Simple");
    record6.set("category", "Market Research");
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
    record7.set("careerSlug", "product-manager");
    record7.set("careerName", "Product Manager");
    record7.set("level", "Beginner");
    record7.set("questionNumber", 8);
    record7.set("question", "What is a value proposition?");
    record7.set("explanation", "Value proposition explains why customers should buy product. Highlights unique benefits and competitive advantages. Clear and compelling.");
    record7.set("practicalExample", "Slack: 'Be more productive and organized with Slack's messaging platform'");
    record7.set("keyPoints", ["Unique benefits", "Competitive advantage", "Customer value", "Clarity"]);
    record7.set("relatedTopics", ["Marketing", "Positioning", "Strategy"]);
    record7.set("difficulty", "Simple");
    record7.set("category", "Strategy");
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
    record8.set("careerSlug", "product-manager");
    record8.set("careerName", "Product Manager");
    record8.set("level", "Beginner");
    record8.set("questionNumber", 9);
    record8.set("question", "What is product-market fit?");
    record8.set("explanation", "Product-market fit means product satisfies strong market demand. Customers love product, high retention, word-of-mouth growth. Key milestone.");
    record8.set("practicalExample", "Users can't imagine life without product. High engagement, low churn, viral growth");
    record8.set("keyPoints", ["Market demand", "Customer satisfaction", "Growth", "Retention"]);
    record8.set("relatedTopics", ["Product strategy", "Growth", "Success metrics"]);
    record8.set("difficulty", "Simple");
    record8.set("category", "Strategy");
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
    record9.set("careerSlug", "product-manager");
    record9.set("careerName", "Product Manager");
    record9.set("level", "Beginner");
    record9.set("questionNumber", 10);
    record9.set("question", "What is a minimum viable product (MVP)?");
    record9.set("explanation", "MVP is simplest version with core features. Launched quickly to test market. Gathers feedback for iteration. Reduces risk and cost.");
    record9.set("practicalExample", "MVP for ride-sharing: basic booking, driver matching, payment. No ratings, no premium features");
    record9.set("keyPoints", ["Core features", "Quick launch", "Feedback", "Iteration"]);
    record9.set("relatedTopics", ["Product development", "Agile", "Lean"]);
    record9.set("difficulty", "Simple");
    record9.set("category", "Product Development");
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
    record10.set("careerSlug", "ux-designer");
    record10.set("careerName", "UX Designer");
    record10.set("level", "Beginner");
    record10.set("questionNumber", 1);
    record10.set("question", "What is UX design and how does it differ from UI design?");
    record10.set("explanation", "UX (User Experience) focuses on overall experience and usability. UI (User Interface) focuses on visual design and interaction. UX is broader.");
    record10.set("practicalExample", "UX: how easy is it to book a flight? UI: button colors, font sizes, layout");
    record10.set("keyPoints", ["Experience vs interface", "Usability", "Visual design", "Interaction"]);
    record10.set("relatedTopics", ["Design", "User-centered", "Interaction"]);
    record10.set("difficulty", "Simple");
    record10.set("category", "UX Fundamentals");
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
    record11.set("careerSlug", "ux-designer");
    record11.set("careerName", "UX Designer");
    record11.set("level", "Beginner");
    record11.set("questionNumber", 2);
    record11.set("question", "What is user research?");
    record11.set("explanation", "User research studies how users interact with products. Methods: interviews, surveys, usability testing, analytics. Informs design decisions.");
    record11.set("practicalExample", "Interview 10 users about pain points, observe how they use app, identify issues");
    record11.set("keyPoints", ["User insights", "Methods", "Behavior", "Data-driven"]);
    record11.set("relatedTopics", ["Research", "User-centered", "Design"]);
    record11.set("difficulty", "Simple");
    record11.set("category", "Research");
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
    record12.set("careerSlug", "ux-designer");
    record12.set("careerName", "UX Designer");
    record12.set("level", "Beginner");
    record12.set("questionNumber", 3);
    record12.set("question", "What is a user persona?");
    record12.set("explanation", "User persona is fictional character representing target user. Includes demographics, goals, pain points, behaviors. Guides design decisions.");
    record12.set("practicalExample", "Persona: Sarah, 28, busy professional, wants quick solutions, tech-savvy");
    record12.set("keyPoints", ["Target user", "Demographics", "Goals", "Design guide"]);
    record12.set("relatedTopics", ["Research", "User-centered", "Design"]);
    record12.set("difficulty", "Simple");
    record12.set("category", "Research");
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
    record13.set("careerSlug", "ux-designer");
    record13.set("careerName", "UX Designer");
    record13.set("level", "Beginner");
    record13.set("questionNumber", 4);
    record13.set("question", "What is a user journey map?");
    record13.set("explanation", "User journey map visualizes user's path through product. Shows touchpoints, emotions, pain points. Identifies opportunities for improvement.");
    record13.set("practicalExample", "Journey: discover app -> sign up -> first use -> regular use. Identify friction points");
    record13.set("keyPoints", ["User path", "Touchpoints", "Emotions", "Opportunities"]);
    record13.set("relatedTopics", ["Research", "Visualization", "Design"]);
    record13.set("difficulty", "Simple");
    record13.set("category", "Research");
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
    record14.set("careerSlug", "ux-designer");
    record14.set("careerName", "UX Designer");
    record14.set("level", "Beginner");
    record14.set("questionNumber", 5);
    record14.set("question", "What is information architecture (IA)?");
    record14.set("explanation", "Information architecture organizes and structures content. Determines navigation, hierarchy, categories. Affects usability and findability.");
    record14.set("practicalExample", "Website IA: Home -> Products -> Category -> Product -> Reviews");
    record14.set("keyPoints", ["Content organization", "Navigation", "Hierarchy", "Findability"]);
    record14.set("relatedTopics", ["Design", "Organization", "Navigation"]);
    record14.set("difficulty", "Simple");
    record14.set("category", "Design");
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
    record15.set("careerSlug", "ux-designer");
    record15.set("careerName", "UX Designer");
    record15.set("level", "Beginner");
    record15.set("questionNumber", 6);
    record15.set("question", "What is a wireframe?");
    record15.set("explanation", "Wireframe is low-fidelity sketch of layout. Shows structure, content, functionality. No colors or detailed design. Quick to create and iterate.");
    record15.set("practicalExample", "Wireframe shows header, sidebar, main content, footer. No colors or images");
    record15.set("keyPoints", ["Low-fidelity", "Layout", "Structure", "Quick iteration"]);
    record15.set("relatedTopics", ["Design", "Prototyping", "Iteration"]);
    record15.set("difficulty", "Simple");
    record15.set("category", "Design");
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
    record16.set("careerSlug", "ux-designer");
    record16.set("careerName", "UX Designer");
    record16.set("level", "Beginner");
    record16.set("questionNumber", 7);
    record16.set("question", "What is a mockup?");
    record16.set("explanation", "Mockup is high-fidelity visual representation. Includes colors, typography, images. Shows final design. More detailed than wireframe.");
    record16.set("practicalExample", "Mockup shows actual colors, fonts, images, spacing. Looks like final product");
    record16.set("keyPoints", ["High-fidelity", "Visual design", "Detailed", "Final look"]);
    record16.set("relatedTopics", ["Design", "Prototyping", "Visual design"]);
    record16.set("difficulty", "Simple");
    record16.set("category", "Design");
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
    record17.set("careerSlug", "ux-designer");
    record17.set("careerName", "UX Designer");
    record17.set("level", "Beginner");
    record17.set("questionNumber", 8);
    record17.set("question", "What is a prototype?");
    record17.set("explanation", "Prototype is interactive representation of design. Users can click and interact. Tests functionality and user flow. Gathers feedback.");
    record17.set("practicalExample", "Clickable prototype: click button -> navigate to next screen. Test user flow");
    record17.set("keyPoints", ["Interactive", "User testing", "Feedback", "Iteration"]);
    record17.set("relatedTopics", ["Design", "Prototyping", "Testing"]);
    record17.set("difficulty", "Simple");
    record17.set("category", "Design");
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
    record18.set("careerSlug", "ux-designer");
    record18.set("careerName", "UX Designer");
    record18.set("level", "Beginner");
    record18.set("questionNumber", 9);
    record18.set("question", "What is usability testing?");
    record18.set("explanation", "Usability testing observes users interacting with product. Identifies issues and pain points. Gathers qualitative feedback. Informs improvements.");
    record18.set("practicalExample", "Watch 5 users complete task: 'Book a flight'. Note where they struggle");
    record18.set("keyPoints", ["User observation", "Issues", "Feedback", "Improvement"]);
    record18.set("relatedTopics", ["Testing", "Research", "Improvement"]);
    record18.set("difficulty", "Simple");
    record18.set("category", "Testing");
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
    record19.set("careerSlug", "ux-designer");
    record19.set("careerName", "UX Designer");
    record19.set("level", "Beginner");
    record19.set("questionNumber", 10);
    record19.set("question", "What is accessibility in UX design?");
    record19.set("explanation", "Accessibility ensures product is usable by everyone, including people with disabilities. Includes color contrast, keyboard navigation, screen readers.");
    record19.set("practicalExample", "Sufficient color contrast for colorblind users, keyboard shortcuts, alt text for images");
    record19.set("keyPoints", ["Inclusive design", "Disabilities", "Standards", "Usability"]);
    record19.set("relatedTopics", ["Design", "Inclusivity", "Standards"]);
    record19.set("difficulty", "Simple");
    record19.set("category", "Design");
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
