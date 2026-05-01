/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quizzes");

  const record0 = new Record(collection);
    record0.set("careerSlug", "software-engineer");
    record0.set("questionNumber", 1);
    record0.set("question", "What is the primary purpose of object-oriented programming?");
    record0.set("options", "{'A': 'To organize code into reusable objects with properties and methods', 'B': 'To make code run faster', 'C': 'To reduce file size', 'D': 'To eliminate the need for functions'}");
    record0.set("correctAnswer", "A");
    record0.set("explanation", "OOP organizes code into objects that contain both data (properties) and behavior (methods), promoting code reuse, modularity, and maintainability.");
    record0.set("topic", "Object-Oriented Programming");
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
    record1.set("questionNumber", 2);
    record1.set("question", "Which of the following is NOT a SOLID principle?");
    record1.set("options", "{'A': 'Dependency Inversion', 'B': 'Rapid Development', 'C': 'Single Responsibility', 'D': 'Open/Closed'}");
    record1.set("correctAnswer", "B");
    record1.set("explanation", "SOLID stands for Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion. Rapid Development is not a SOLID principle.");
    record1.set("topic", "Design Principles");
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
    record2.set("questionNumber", 3);
    record2.set("question", "What is the time complexity of binary search?");
    record2.set("options", "{'A': 'O(log n)', 'B': 'O(n)', 'C': 'O(n\u00b2)', 'D': 'O(1)'}");
    record2.set("correctAnswer", "A");
    record2.set("explanation", "Binary search has O(log n) time complexity because it divides the search space in half with each iteration, making it very efficient for large sorted datasets.");
    record2.set("topic", "Algorithms");
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
    record3.set("questionNumber", 4);
    record3.set("question", "What is the difference between a stack and a queue?");
    record3.set("options", "{'A': 'Stack is LIFO, queue is FIFO', 'B': 'Stack is FIFO, queue is LIFO', 'C': 'They are the same', 'D': 'Stack is for numbers, queue is for strings'}");
    record3.set("correctAnswer", "A");
    record3.set("explanation", "A stack follows Last-In-First-Out (LIFO) - like a stack of plates. A queue follows First-In-First-Out (FIFO) - like a line at a store.");
    record3.set("topic", "Data Structures");
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
    record4.set("questionNumber", 5);
    record4.set("question", "What is a hash table?");
    record4.set("options", "{'A': 'A data structure that uses a hash function to map keys to values', 'B': 'A type of database', 'C': 'A sorting algorithm', 'D': 'A type of tree'}");
    record4.set("correctAnswer", "A");
    record4.set("explanation", "A hash table uses a hash function to convert keys into array indices, allowing O(1) average-case lookup time. It's fundamental for implementing dictionaries and caches.");
    record4.set("topic", "Data Structures");
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
    record5.set("questionNumber", 6);
    record5.set("question", "What is polymorphism?");
    record5.set("options", "{'A': 'The ability of objects to take multiple forms', 'B': 'A type of variable', 'C': 'A sorting algorithm', 'D': 'A database operation'}");
    record5.set("correctAnswer", "A");
    record5.set("explanation", "Polymorphism allows objects of different types to be treated through the same interface. It enables code flexibility and extensibility through method overriding and overloading.");
    record5.set("topic", "OOP Concepts");
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
    record6.set("careerSlug", "software-engineer");
    record6.set("questionNumber", 7);
    record6.set("question", "What is encapsulation?");
    record6.set("options", "{'A': 'Bundling data and methods together, hiding internal details', 'B': 'Copying code', 'C': 'A type of loop', 'D': 'A database operation'}");
    record6.set("correctAnswer", "A");
    record6.set("explanation", "Encapsulation hides the internal details of an object and exposes only what's necessary through a public interface. This protects data integrity and reduces complexity.");
    record6.set("topic", "OOP Concepts");
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
    record7.set("careerSlug", "software-engineer");
    record7.set("questionNumber", 8);
    record7.set("question", "What is inheritance?");
    record7.set("options", "{'A': 'A mechanism where a class inherits properties and methods from another class', 'B': 'A type of variable', 'C': 'A sorting algorithm', 'D': 'A database operation'}");
    record7.set("correctAnswer", "A");
    record7.set("explanation", "Inheritance allows a class (child) to inherit properties and methods from another class (parent), promoting code reuse and establishing hierarchical relationships.");
    record7.set("topic", "OOP Concepts");
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
    record8.set("careerSlug", "software-engineer");
    record8.set("questionNumber", 9);
    record8.set("question", "What is the difference between composition and inheritance?");
    record8.set("options", "{'A': \"Composition uses 'has-a', inheritance uses 'is-a'\", 'B': 'They are the same', 'C': 'Composition is faster', 'D': 'Inheritance is always better'}");
    record8.set("correctAnswer", "A");
    record8.set("explanation", "Inheritance represents an 'is-a' relationship (a Dog is an Animal), while composition represents a 'has-a' relationship (a Car has an Engine). Composition is often preferred for flexibility.");
    record8.set("topic", "OOP Design");
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
    record9.set("careerSlug", "software-engineer");
    record9.set("questionNumber", 10);
    record9.set("question", "What is a design pattern?");
    record9.set("options", "{'A': 'A reusable solution to a common programming problem', 'B': 'A type of variable', 'C': 'A sorting algorithm', 'D': 'A database operation'}");
    record9.set("correctAnswer", "A");
    record9.set("explanation", "Design patterns are proven solutions to common design problems. Examples include Singleton, Factory, Observer, and Strategy patterns. They promote code reusability and maintainability.");
    record9.set("topic", "Design Patterns");
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
    record10.set("careerSlug", "software-engineer");
    record10.set("questionNumber", 11);
    record10.set("question", "What is the Singleton pattern?");
    record10.set("options", "{'A': 'A pattern that ensures only one instance of a class exists', 'B': 'A pattern for creating multiple instances', 'C': 'A sorting algorithm', 'D': 'A database operation'}");
    record10.set("correctAnswer", "A");
    record10.set("explanation", "The Singleton pattern restricts a class to have only one instance and provides a global point of access to it. It's useful for managing shared resources like database connections.");
    record10.set("topic", "Design Patterns");
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
    record11.set("careerSlug", "software-engineer");
    record11.set("questionNumber", 12);
    record11.set("question", "What is the Factory pattern?");
    record11.set("options", "{'A': 'A pattern for creating objects without specifying their exact classes', 'B': 'A pattern for destroying objects', 'C': 'A sorting algorithm', 'D': 'A database operation'}");
    record11.set("correctAnswer", "A");
    record11.set("explanation", "The Factory pattern provides an interface for creating objects, allowing subclasses to decide which class to instantiate. It decouples object creation from usage.");
    record11.set("topic", "Design Patterns");
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
    record12.set("careerSlug", "software-engineer");
    record12.set("questionNumber", 13);
    record12.set("question", "What is the Observer pattern?");
    record12.set("options", "{'A': 'A pattern where objects notify other objects about state changes', 'B': 'A pattern for sorting data', 'C': 'A pattern for storing data', 'D': 'A pattern for deleting data'}");
    record12.set("correctAnswer", "A");
    record12.set("explanation", "The Observer pattern defines a one-to-many relationship where multiple observers listen for changes in a subject. It's useful for event-driven programming.");
    record12.set("topic", "Design Patterns");
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
    record13.set("careerSlug", "software-engineer");
    record13.set("questionNumber", 14);
    record13.set("question", "What is a memory leak?");
    record13.set("options", "{'A': \"When a program fails to release memory that's no longer needed\", 'B': 'A type of variable', 'C': 'A sorting algorithm', 'D': 'A database operation'}");
    record13.set("correctAnswer", "A");
    record13.set("explanation", "A memory leak occurs when a program allocates memory but fails to deallocate it, causing memory usage to grow over time. This can eventually crash the program.");
    record13.set("topic", "Memory Management");
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
    record14.set("careerSlug", "software-engineer");
    record14.set("questionNumber", 15);
    record14.set("question", "What is garbage collection?");
    record14.set("options", "{'A': 'An automatic process that frees memory no longer in use', 'B': 'A manual process', 'C': 'A sorting algorithm', 'D': 'A database operation'}");
    record14.set("correctAnswer", "A");
    record14.set("explanation", "Garbage collection is an automatic memory management feature that identifies and frees memory occupied by objects that are no longer referenced. Languages like Java and Python use garbage collection.");
    record14.set("topic", "Memory Management");
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
    record15.set("careerSlug", "software-engineer");
    record15.set("questionNumber", 16);
    record15.set("question", "What is a thread?");
    record15.set("options", "{'A': 'A lightweight process that can run concurrently within a program', 'B': 'A type of variable', 'C': 'A sorting algorithm', 'D': 'A database operation'}");
    record15.set("correctAnswer", "A");
    record15.set("explanation", "A thread is a lightweight unit of execution within a process. Multiple threads can run concurrently, sharing the same memory space, enabling parallel execution.");
    record15.set("topic", "Concurrency");
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
    record16.set("careerSlug", "software-engineer");
    record16.set("questionNumber", 17);
    record16.set("question", "What is a deadlock?");
    record16.set("options", "{'A': 'A situation where two or more threads are blocked waiting for each other', 'B': 'A type of variable', 'C': 'A sorting algorithm', 'D': 'A database operation'}");
    record16.set("correctAnswer", "A");
    record16.set("explanation", "A deadlock occurs when two or more threads are blocked indefinitely, each waiting for the other to release a resource. Preventing deadlocks requires careful synchronization.");
    record16.set("topic", "Concurrency");
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
    record17.set("careerSlug", "software-engineer");
    record17.set("questionNumber", 18);
    record17.set("question", "What is a race condition?");
    record17.set("options", "{'A': 'When the outcome depends on the timing of thread execution', 'B': 'A type of variable', 'C': 'A sorting algorithm', 'D': 'A database operation'}");
    record17.set("correctAnswer", "A");
    record17.set("explanation", "A race condition occurs when multiple threads access shared data concurrently, and the final result depends on the order of execution. It can lead to unpredictable behavior.");
    record17.set("topic", "Concurrency");
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
    record18.set("careerSlug", "software-engineer");
    record18.set("questionNumber", 19);
    record18.set("question", "What is the MVC pattern?");
    record18.set("options", "{'A': 'Model-View-Controller, separating data, presentation, and logic', 'B': 'A sorting algorithm', 'C': 'A type of database', 'D': 'A memory management technique'}");
    record18.set("correctAnswer", "A");
    record18.set("explanation", "MVC separates an application into three interconnected components: Model (data), View (presentation), and Controller (logic). This promotes separation of concerns and code organization.");
    record18.set("topic", "Architectural Patterns");
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
    record19.set("careerSlug", "software-engineer");
    record19.set("questionNumber", 20);
    record19.set("question", "What is the difference between synchronous and asynchronous programming?");
    record19.set("options", "{'A': \"Synchronous waits for completion, asynchronous doesn't\", 'B': 'They are the same', 'C': 'Asynchronous is always faster', 'D': 'Synchronous is for web, asynchronous is for desktop'}");
    record19.set("correctAnswer", "A");
    record19.set("explanation", "Synchronous code blocks execution until a task completes. Asynchronous code allows other tasks to run while waiting for a task to complete, improving responsiveness.");
    record19.set("topic", "Programming Paradigms");
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
