/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("interviewQuestionsDatabase");

  const record0 = new Record(collection);
    record0.set("careerSlug", "software-engineer");
    record0.set("careerName", "Software Engineer");
    record0.set("level", "Beginner");
    record0.set("questionNumber", 1);
    record0.set("question", "What is the difference between a class and an object?");
    record0.set("explanation", "A class is a blueprint or template for creating objects. It defines the structure (attributes) and behavior (methods) that objects will have. An object is an instance of a class - a concrete realization of that blueprint with specific values for its attributes.");
    record0.set("practicalExample", "Think of a class as a cookie cutter (defines the shape) and objects as the actual cookies made from that cutter (each cookie is unique but follows the same shape).");
    record0.set("keyPoints", ["Class is abstract, object is concrete", "Class is defined once, multiple objects can be created", "Objects have state (attributes) and behavior (methods)"]);
    record0.set("relatedTopics", ["Object-Oriented Programming", "Inheritance", "Polymorphism"]);
    record0.set("difficulty", "Simple");
    record0.set("category", "OOP");
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
    record1.set("careerSlug", "software-engineer");
    record1.set("careerName", "Software Engineer");
    record1.set("level", "Beginner");
    record1.set("questionNumber", 2);
    record1.set("question", "What is a variable and why do we use them?");
    record1.set("explanation", "A variable is a named container that stores a value in memory. Variables allow us to store, retrieve, and manipulate data throughout our program. They make code more readable and maintainable by giving meaningful names to data.");
    record1.set("practicalExample", "Instead of writing the number 25 multiple times, we can create a variable 'age = 25' and reference it throughout the program. If we need to change the age, we only change it in one place.");
    record1.set("keyPoints", ["Variables store data in memory", "Variables have names, types, and values", "Variable names should be descriptive"]);
    record1.set("relatedTopics", ["Data Types", "Memory Management", "Scope"]);
    record1.set("difficulty", "Simple");
    record1.set("category", "Fundamentals");
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
    record2.set("careerSlug", "software-engineer");
    record2.set("careerName", "Software Engineer");
    record2.set("level", "Beginner");
    record2.set("questionNumber", 3);
    record2.set("question", "What are the basic data types in programming?");
    record2.set("explanation", "Basic data types are the fundamental types that represent different kinds of values: integers (whole numbers), floats/decimals (numbers with decimal points), strings (text), booleans (true/false), and null/undefined (no value). Different languages may have additional types.");
    record2.set("practicalExample", "int age = 25; float salary = 50000.50; String name = 'John'; boolean isActive = true;");
    record2.set("keyPoints", ["Integer: whole numbers", "Float: decimal numbers", "String: text data", "Boolean: true or false", "Null: absence of value"]);
    record2.set("relatedTopics", ["Type Casting", "Variables", "Memory Allocation"]);
    record2.set("difficulty", "Simple");
    record2.set("category", "Fundamentals");
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
    record3.set("careerSlug", "software-engineer");
    record3.set("careerName", "Software Engineer");
    record3.set("level", "Intermediate");
    record3.set("questionNumber", 31);
    record3.set("question", "What is the difference between an abstract class and an interface?");
    record3.set("explanation", "An abstract class can have both abstract methods (no implementation) and concrete methods (with implementation). An interface only has abstract methods (in most languages). A class can implement multiple interfaces but inherit from only one class. Abstract classes are for 'is-a' relationships, interfaces for 'can-do' relationships.");
    record3.set("practicalExample", "abstract class Animal { abstract void sound(); } interface Drawable { void draw(); }");
    record3.set("keyPoints", ["Abstract class: mixed methods", "Interface: abstract only", "Multiple interfaces, one class", "is-a vs can-do"]);
    record3.set("relatedTopics", ["Inheritance", "Polymorphism", "Design Patterns"]);
    record3.set("difficulty", "Medium");
    record3.set("category", "OOP");
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
    record4.set("careerSlug", "software-engineer");
    record4.set("careerName", "Software Engineer");
    record4.set("level", "Intermediate");
    record4.set("questionNumber", 32);
    record4.set("question", "What is polymorphism and what are its types?");
    record4.set("explanation", "Polymorphism means 'many forms'. It allows objects to take multiple forms. Two main types: compile-time (method overloading, operator overloading) and runtime (method overriding). Polymorphism enables flexible and extensible code.");
    record4.set("practicalExample", "Method overloading: add(int, int) and add(double, double). Method overriding: subclass overrides parent method.");
    record4.set("keyPoints", ["Polymorphism: many forms", "Compile-time: overloading", "Runtime: overriding", "Enables flexibility"]);
    record4.set("relatedTopics", ["Inheritance", "Method Overloading", "Method Overriding"]);
    record4.set("difficulty", "Medium");
    record4.set("category", "OOP");
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
    record5.set("careerSlug", "software-engineer");
    record5.set("careerName", "Software Engineer");
    record5.set("level", "Advanced");
    record5.set("questionNumber", 81);
    record5.set("question", "What is the difference between a microtask and a macrotask?");
    record5.set("explanation", "Microtasks: promises, queueMicrotask, MutationObserver. Macrotasks: setTimeout, setInterval, setImmediate, I/O. Microtasks execute before macrotasks. Event loop processes all microtasks before next macrotask. Important for understanding async behavior.");
    record5.set("practicalExample", "setTimeout (macro) executes after Promise (micro)");
    record5.set("keyPoints", ["Microtasks: promises", "Macrotasks: setTimeout", "Microtasks first", "Event loop order"]);
    record5.set("relatedTopics", ["Event Loop", "Asynchronous", "Promises"]);
    record5.set("difficulty", "Hard");
    record5.set("category", "Advanced");
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
    record6.set("questionNumber", 1);
    record6.set("question", "What is a product roadmap?");
    record6.set("explanation", "A product roadmap is a strategic document that outlines the vision, direction, and planned features of a product over a specific time period. It communicates priorities to stakeholders and guides development efforts. Roadmaps can be feature-based, timeline-based, or goal-based.");
    record6.set("practicalExample", "A roadmap might show: Q1 - User authentication, Q2 - Payment integration, Q3 - Analytics dashboard");
    record6.set("keyPoints", ["Strategic document", "Outlines vision and direction", "Communicates priorities", "Guides development"]);
    record6.set("relatedTopics", ["Strategy", "Planning", "Stakeholder Management"]);
    record6.set("difficulty", "Simple");
    record6.set("category", "Planning");
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
    record7.set("level", "Intermediate");
    record7.set("questionNumber", 21);
    record7.set("question", "What is the difference between product strategy and product roadmap?");
    record7.set("explanation", "Product strategy is the long-term vision and direction (why and where). Product roadmap is the tactical plan (what and when). Strategy guides roadmap. Strategy answers 'where are we going?', roadmap answers 'how do we get there?'");
    record7.set("practicalExample", "Strategy: Become the #1 productivity tool. Roadmap: Q1 collaboration, Q2 mobile, Q3 AI");
    record7.set("keyPoints", ["Strategy: vision", "Roadmap: plan", "Strategy guides roadmap", "Different time horizons"]);
    record7.set("relatedTopics", ["Planning", "Strategy", "Execution"]);
    record7.set("difficulty", "Medium");
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
    record8.set("careerSlug", "data-scientist");
    record8.set("careerName", "Data Scientist");
    record8.set("level", "Beginner");
    record8.set("questionNumber", 1);
    record8.set("question", "What is data science?");
    record8.set("explanation", "Data science is an interdisciplinary field that uses statistics, mathematics, and programming to extract insights from data. It combines domain knowledge, programming, and statistics to solve business problems. Data scientists use data to inform decisions and create value.");
    record8.set("practicalExample", "Using customer data to predict churn and retain customers");
    record8.set("keyPoints", ["Interdisciplinary field", "Statistics and programming", "Extract insights", "Solve problems"]);
    record8.set("relatedTopics", ["Statistics", "Machine Learning", "Analytics"]);
    record8.set("difficulty", "Simple");
    record8.set("category", "Fundamentals");
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
    record9.set("careerSlug", "data-scientist");
    record9.set("careerName", "Data Scientist");
    record9.set("level", "Intermediate");
    record9.set("questionNumber", 21);
    record9.set("question", "What is the difference between a generator and a regular function?");
    record9.set("explanation", "Generator: function that can pause and resume, uses yield keyword, returns iterator. Regular function: executes completely, returns once. Generators are useful for lazy evaluation, infinite sequences, and async patterns.");
    record9.set("practicalExample", "function* gen() { yield 1; yield 2; } let g = gen(); g.next() returns {value: 1, done: false}");
    record9.set("keyPoints", ["Generator: pause/resume", "yield keyword", "Returns iterator", "Lazy evaluation"]);
    record9.set("relatedTopics", ["Functions", "Iterators", "Async Patterns"]);
    record9.set("difficulty", "Medium");
    record9.set("category", "Algorithms");
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
    record10.set("question", "What is user experience (UX)?");
    record10.set("explanation", "User experience is the overall experience a user has when interacting with a product. It includes usability, accessibility, aesthetics, and emotional response. Good UX makes products easy to use and enjoyable.");
    record10.set("practicalExample", "A website with clear navigation, fast loading, and beautiful design has good UX");
    record10.set("keyPoints", ["Overall experience", "Usability and aesthetics", "Emotional response", "Easy to use"]);
    record10.set("relatedTopics", ["Design", "Usability", "User Research"]);
    record10.set("difficulty", "Simple");
    record10.set("category", "Fundamentals");
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
    record11.set("careerSlug", "marketing-manager");
    record11.set("careerName", "Marketing Manager");
    record11.set("level", "Beginner");
    record11.set("questionNumber", 1);
    record11.set("question", "What is marketing?");
    record11.set("explanation", "Marketing is the process of promoting and selling products or services. It includes: identifying customer needs, creating value, communicating benefits, and building relationships. Marketing drives business growth and customer satisfaction.");
    record11.set("practicalExample", "Creating ads, building brand awareness, generating leads, closing sales");
    record11.set("keyPoints", ["Promote and sell", "Customer needs", "Create value", "Build relationships"]);
    record11.set("relatedTopics", ["Sales", "Branding", "Strategy"]);
    record11.set("difficulty", "Simple");
    record11.set("category", "Fundamentals");
  try {
    app.save(record11);
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
