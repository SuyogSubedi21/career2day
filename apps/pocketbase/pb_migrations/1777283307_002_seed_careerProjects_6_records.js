/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerProjects");

  const record0 = new Record(collection);
    record0.set("careerSlug", "full-stack-developer");
    record0.set("projectTitle", "E-commerce Platform");
    record0.set("description", "Build a complete e-commerce platform with product catalog, shopping cart, payment integration, and order management system.");
    record0.set("difficulty", "Advanced");
    record0.set("estimatedTime", "8-10 weeks");
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
    record1.set("careerSlug", "full-stack-developer");
    record1.set("projectTitle", "Social Media Application");
    record1.set("description", "Create a social media app with user profiles, posts, comments, likes, real-time notifications, and messaging features.");
    record1.set("difficulty", "Advanced");
    record1.set("estimatedTime", "10-12 weeks");
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
    record2.set("careerSlug", "full-stack-developer");
    record2.set("projectTitle", "Project Management Tool");
    record2.set("description", "Develop a project management application with task creation, team collaboration, progress tracking, and deadline management.");
    record2.set("difficulty", "Intermediate");
    record2.set("estimatedTime", "6-8 weeks");
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
    record3.set("careerSlug", "full-stack-developer");
    record3.set("projectTitle", "Real-time Chat Application");
    record3.set("description", "Build a real-time chat application with WebSocket support, user authentication, message history, and typing indicators.");
    record3.set("difficulty", "Advanced");
    record3.set("estimatedTime", "7-9 weeks");
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
    record4.set("careerSlug", "full-stack-developer");
    record4.set("projectTitle", "Blog Platform with CMS");
    record4.set("description", "Create a blog platform with content management system, user authentication, comments, categories, and search functionality.");
    record4.set("difficulty", "Intermediate");
    record4.set("estimatedTime", "5-7 weeks");
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
    record5.set("careerSlug", "full-stack-developer");
    record5.set("projectTitle", "Task Management Dashboard");
    record5.set("description", "Build a task management dashboard with drag-and-drop functionality, task filtering, progress visualization, and team collaboration.");
    record5.set("difficulty", "Intermediate");
    record5.set("estimatedTime", "4-6 weeks");
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
