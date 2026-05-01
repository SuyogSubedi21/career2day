/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("interviewQuestions");

  const record0 = new Record(collection);
    record0.set("careerSlug", "software-engineer");
    record0.set("level", "Beginner");
    record0.set("questionNumber", 1);
    record0.set("question", "What is the difference between a class and an object?");
    record0.set("category", "Technical");
    record0.set("difficulty", "Beginner");
    record0.set("options", "{'A': 'A class is a blueprint, an object is an instance of that blueprint', 'B': 'They are the same thing', 'C': 'A class is used for data, an object is used for functions', 'D': 'Objects are only used in Python'}");
    record0.set("correctAnswer", "A");
    record0.set("explanation", "A class is a template or blueprint that defines the structure and behavior of objects. An object is a specific instance created from that class with actual values. For example, 'Car' is a class, and 'my red Toyota' is an object of that class.");
    record0.set("tips", "Think of a class as a cookie cutter and objects as the actual cookies made from it.");
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
    record1.set("level", "Beginner");
    record1.set("questionNumber", 2);
    record1.set("question", "What is a variable?");
    record1.set("category", "Technical");
    record1.set("difficulty", "Beginner");
    record1.set("options", "{'A': 'A named container that stores a value', 'B': 'A function that changes', 'C': 'A type of loop', 'D': 'A database table'}");
    record1.set("correctAnswer", "A");
    record1.set("explanation", "A variable is a named storage location in memory that holds a value. Variables can store different types of data like numbers, strings, or objects, and their values can change during program execution.");
    record1.set("tips", "Variables are like labeled boxes that hold information you want to use later in your program.");
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
    record2.set("level", "Beginner");
    record2.set("questionNumber", 3);
    record2.set("question", "What does DRY stand for in programming?");
    record2.set("category", "Technical");
    record2.set("difficulty", "Beginner");
    record2.set("options", "{'A': \"Don't Repeat Yourself\", 'B': 'Data Retrieval Yield', 'C': 'Dynamic Runtime Yield', 'D': 'Database Record Yield'}");
    record2.set("correctAnswer", "A");
    record2.set("explanation", "DRY (Don't Repeat Yourself) is a fundamental principle that encourages developers to avoid duplicating code. Instead, you should write reusable functions and modules to reduce redundancy and improve maintainability.");
    record2.set("tips", "If you find yourself writing the same code multiple times, extract it into a function or module.");
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
    record3.set("level", "Beginner");
    record3.set("questionNumber", 4);
    record3.set("question", "What is a function?");
    record3.set("category", "Technical");
    record3.set("difficulty", "Beginner");
    record3.set("options", "{'A': 'A reusable block of code that performs a specific task', 'B': 'A variable that stores numbers', 'C': 'A type of loop', 'D': 'A database query'}");
    record3.set("correctAnswer", "A");
    record3.set("explanation", "A function is a reusable block of code designed to perform a specific task. Functions help organize code, reduce duplication, and make programs easier to understand and maintain. They can accept parameters and return values.");
    record3.set("tips", "Functions are like recipes - you define them once and can use them many times with different ingredients.");
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
    record4.set("level", "Beginner");
    record4.set("questionNumber", 5);
    record4.set("question", "What is the purpose of comments in code?");
    record4.set("category", "Technical");
    record4.set("difficulty", "Beginner");
    record4.set("options", "{'A': 'To explain what the code does for other developers', 'B': 'To make the code run faster', 'C': 'To store data', 'D': 'To create variables'}");
    record4.set("correctAnswer", "A");
    record4.set("explanation", "Comments are non-executable text in code that explain what the code does, why it's written that way, or how to use it. They're essential for code readability and maintenance, helping other developers (and your future self) understand the code.");
    record4.set("tips", "Write comments that explain the 'why', not the 'what' - the code already shows what it does.");
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
    record5.set("level", "Beginner");
    record5.set("questionNumber", 6);
    record5.set("question", "What is a loop?");
    record5.set("category", "Technical");
    record5.set("difficulty", "Beginner");
    record5.set("options", "{'A': 'A control structure that repeats a block of code', 'B': 'A type of variable', 'C': 'A function that stores data', 'D': 'A database operation'}");
    record5.set("correctAnswer", "A");
    record5.set("explanation", "A loop is a control structure that repeats a block of code multiple times. Common types include for loops (fixed iterations), while loops (condition-based), and foreach loops (iterate over collections). Loops help avoid code repetition.");
    record5.set("tips", "Use loops when you need to perform the same action multiple times, like processing items in a list.");
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
    record6.set("level", "Beginner");
    record6.set("questionNumber", 7);
    record6.set("question", "What is an array?");
    record6.set("category", "Technical");
    record6.set("difficulty", "Beginner");
    record6.set("options", "{'A': 'An ordered collection of elements of the same type', 'B': 'A single variable', 'C': 'A type of function', 'D': 'A database table'}");
    record6.set("correctAnswer", "A");
    record6.set("explanation", "An array is a data structure that stores multiple values of the same type in a single variable. Each element is accessed by an index (usually starting at 0). Arrays are fundamental for storing and managing collections of data.");
    record6.set("tips", "Think of an array like a row of numbered boxes, each containing a value.");
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
    record7.set("level", "Beginner");
    record7.set("questionNumber", 8);
    record7.set("question", "What is the difference between == and === in JavaScript?");
    record7.set("category", "Technical");
    record7.set("difficulty", "Beginner");
    record7.set("options", "{'A': '== compares value, === compares value and type', 'B': 'They are the same', 'C': '=== is faster', 'D': '== is for objects, === is for primitives'}");
    record7.set("correctAnswer", "A");
    record7.set("explanation", "In JavaScript, == performs loose equality (type coercion), while === performs strict equality (no type coercion). For example, '5' == 5 is true, but '5' === 5 is false. It's best practice to use === to avoid unexpected behavior.");
    record7.set("tips", "Always use === in JavaScript to avoid type coercion bugs.");
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
    record8.set("level", "Beginner");
    record8.set("questionNumber", 9);
    record8.set("question", "What is version control?");
    record8.set("category", "Technical");
    record8.set("difficulty", "Beginner");
    record8.set("options", "{'A': 'A system to track changes to code over time', 'B': 'A way to organize files', 'C': 'A programming language', 'D': 'A type of database'}");
    record8.set("correctAnswer", "A");
    record8.set("explanation", "Version control is a system that tracks changes to files over time, allowing developers to collaborate, revert to previous versions, and maintain a history of modifications. Git is the most popular version control system.");
    record8.set("tips", "Version control is essential for team development and protecting your code from accidental loss.");
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
    record9.set("level", "Beginner");
    record9.set("questionNumber", 10);
    record9.set("question", "What is Git?");
    record9.set("category", "Technical");
    record9.set("difficulty", "Beginner");
    record9.set("options", "{'A': 'A distributed version control system', 'B': 'A programming language', 'C': 'A database', 'D': 'A web framework'}");
    record9.set("correctAnswer", "A");
    record9.set("explanation", "Git is a distributed version control system that allows developers to track code changes, collaborate with others, and manage different versions of their projects. It's the industry standard for version control.");
    record9.set("tips", "Learn Git basics: commit, push, pull, and branch - these are essential for any developer.");
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
    record10.set("level", "Beginner");
    record10.set("questionNumber", 11);
    record10.set("question", "What is a bug?");
    record10.set("category", "Technical");
    record10.set("difficulty", "Beginner");
    record10.set("options", "{'A': 'An error or flaw in code that causes unexpected behavior', 'B': 'A type of variable', 'C': 'A programming language', 'D': 'A database operation'}");
    record10.set("correctAnswer", "A");
    record10.set("explanation", "A bug is an error or flaw in code that causes the program to behave unexpectedly or incorrectly. Debugging is the process of finding and fixing bugs. Common bugs include logic errors, syntax errors, and runtime errors.");
    record10.set("tips", "Use debugging tools like breakpoints and logging to identify and fix bugs efficiently.");
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
    record11.set("level", "Beginner");
    record11.set("questionNumber", 12);
    record11.set("question", "What is debugging?");
    record11.set("category", "Technical");
    record11.set("difficulty", "Beginner");
    record11.set("options", "{'A': 'The process of finding and fixing errors in code', 'B': 'Writing code', 'C': 'Testing code', 'D': 'Deploying code'}");
    record11.set("correctAnswer", "A");
    record11.set("explanation", "Debugging is the systematic process of identifying, analyzing, and fixing errors (bugs) in code. Developers use various tools and techniques like breakpoints, logging, and step-through execution to debug programs.");
    record11.set("tips", "Start with simple debugging techniques like print statements, then move to debuggers as you advance.");
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
    record12.set("level", "Beginner");
    record12.set("questionNumber", 13);
    record12.set("question", "What is an API?");
    record12.set("category", "Technical");
    record12.set("difficulty", "Beginner");
    record12.set("options", "{'A': 'A set of rules for software to communicate', 'B': 'A programming language', 'C': 'A type of database', 'D': 'A web server'}");
    record12.set("correctAnswer", "A");
    record12.set("explanation", "An API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate with each other. APIs define the methods and data formats that applications can use to request and exchange information.");
    record12.set("tips", "Think of an API as a contract between two pieces of software - it defines how they can interact.");
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
    record13.set("level", "Beginner");
    record13.set("questionNumber", 14);
    record13.set("question", "What is a REST API?");
    record13.set("category", "Technical");
    record13.set("difficulty", "Beginner");
    record13.set("options", "{'A': 'An API that uses HTTP methods and follows REST principles', 'B': 'A type of database', 'C': 'A programming language', 'D': 'A web server'}");
    record13.set("correctAnswer", "A");
    record13.set("explanation", "A REST API (Representational State Transfer) is an API that uses standard HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources. REST is a popular architectural style for building web APIs.");
    record13.set("tips", "REST APIs use URLs to identify resources and HTTP methods to specify actions.");
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
    record14.set("level", "Beginner");
    record14.set("questionNumber", 15);
    record14.set("question", "What is JSON?");
    record14.set("category", "Technical");
    record14.set("difficulty", "Beginner");
    record14.set("options", "{'A': 'A lightweight data format for exchanging data', 'B': 'A programming language', 'C': 'A type of database', 'D': 'A web framework'}");
    record14.set("correctAnswer", "A");
    record14.set("explanation", "JSON (JavaScript Object Notation) is a lightweight, text-based data format that's easy for humans to read and for machines to parse. It's widely used for APIs, configuration files, and data storage.");
    record14.set("tips", "JSON uses key-value pairs and is language-independent, making it ideal for data exchange.");
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
    record15.set("level", "Beginner");
    record15.set("questionNumber", 16);
    record15.set("question", "What is the difference between null and undefined?");
    record15.set("category", "Technical");
    record15.set("difficulty", "Beginner");
    record15.set("options", "{'A': 'null is intentional absence, undefined is unintentional', 'B': 'They are the same', 'C': 'undefined is for objects, null is for primitives', 'D': 'null is faster'}");
    record15.set("correctAnswer", "A");
    record15.set("explanation", "In JavaScript, null is an intentional assignment representing 'no value', while undefined means a variable has been declared but not assigned a value. null is explicitly set by the programmer, undefined is the default.");
    record15.set("tips", "Use null when you intentionally want to represent 'no value', undefined is usually accidental.");
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
    record16.set("level", "Beginner");
    record16.set("questionNumber", 17);
    record16.set("question", "What is a string?");
    record16.set("category", "Technical");
    record16.set("difficulty", "Beginner");
    record16.set("options", "{'A': 'A sequence of characters', 'B': 'A number', 'C': 'A type of loop', 'D': 'A function'}");
    record16.set("correctAnswer", "A");
    record16.set("explanation", "A string is a data type that represents a sequence of characters, such as text. Strings are enclosed in quotes (single, double, or backticks) and are used to store and manipulate text data.");
    record16.set("tips", "Strings are immutable in most languages, meaning you can't change them directly - you create new strings instead.");
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
    record17.set("level", "Beginner");
    record17.set("questionNumber", 18);
    record17.set("question", "What is a boolean?");
    record17.set("category", "Technical");
    record17.set("difficulty", "Beginner");
    record17.set("options", "{'A': 'A data type with two values: true or false', 'B': 'A type of variable', 'C': 'A function', 'D': 'A loop'}");
    record17.set("correctAnswer", "A");
    record17.set("explanation", "A boolean is a data type that can only have two values: true or false. Booleans are used in conditional statements and logical operations to control program flow.");
    record17.set("tips", "Booleans are the foundation of conditional logic - use them in if statements and loops.");
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
    record18.set("level", "Beginner");
    record18.set("questionNumber", 19);
    record18.set("question", "What is an integer?");
    record18.set("category", "Technical");
    record18.set("difficulty", "Beginner");
    record18.set("options", "{'A': 'A whole number without decimal places', 'B': 'A number with decimal places', 'C': 'A string of numbers', 'D': 'A type of variable'}");
    record18.set("correctAnswer", "A");
    record18.set("explanation", "An integer is a whole number without decimal places, such as 5, -10, or 0. Integers are a fundamental data type used for counting, indexing, and mathematical operations.");
    record18.set("tips", "Integers are different from floats (decimals) - use integers when you don't need decimal precision.");
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
    record19.set("level", "Beginner");
    record19.set("questionNumber", 20);
    record19.set("question", "What is a float?");
    record19.set("category", "Technical");
    record19.set("difficulty", "Beginner");
    record19.set("options", "{'A': 'A number with decimal places', 'B': 'A whole number', 'C': 'A string', 'D': 'A type of loop'}");
    record19.set("correctAnswer", "A");
    record19.set("explanation", "A float (floating-point number) is a number that includes decimal places, such as 3.14 or -2.5. Floats are used when you need precision beyond whole numbers.");
    record19.set("tips", "Be careful with float precision - due to how computers store floats, 0.1 + 0.2 might not equal 0.3 exactly.");
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
    record20.set("careerSlug", "software-engineer");
    record20.set("level", "Beginner");
    record20.set("questionNumber", 21);
    record20.set("question", "What is a constant?");
    record20.set("category", "Technical");
    record20.set("difficulty", "Beginner");
    record20.set("options", "{'A': 'A variable whose value cannot be changed after initialization', 'B': 'A variable that changes frequently', 'C': 'A type of function', 'D': 'A database operation'}");
    record20.set("correctAnswer", "A");
    record20.set("explanation", "A constant is a variable whose value is set once and cannot be changed during program execution. Constants are useful for values that should remain fixed, like mathematical constants or configuration values.");
    record20.set("tips", "Use constants for values that shouldn't change - they make code more readable and prevent accidental modifications.");
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
    record21.set("careerSlug", "software-engineer");
    record21.set("level", "Beginner");
    record21.set("questionNumber", 22);
    record21.set("question", "What is scope in programming?");
    record21.set("category", "Technical");
    record21.set("difficulty", "Beginner");
    record21.set("options", "{'A': 'The region of code where a variable is accessible', 'B': 'A type of function', 'C': 'A loop', 'D': 'A database operation'}");
    record21.set("correctAnswer", "A");
    record21.set("explanation", "Scope refers to the region of code where a variable is accessible. Variables can have local scope (accessible only within a function) or global scope (accessible throughout the program). Understanding scope prevents naming conflicts and bugs.");
    record21.set("tips", "Keep variable scope as narrow as possible - use local variables when you can.");
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
    record22.set("careerSlug", "software-engineer");
    record22.set("level", "Beginner");
    record22.set("questionNumber", 23);
    record22.set("question", "What is a parameter?");
    record22.set("category", "Technical");
    record22.set("difficulty", "Beginner");
    record22.set("options", "{'A': 'A variable in a function definition that receives a value when called', 'B': 'A type of variable', 'C': 'A loop', 'D': 'A database operation'}");
    record22.set("correctAnswer", "A");
    record22.set("explanation", "A parameter is a variable in a function definition that receives a value when the function is called. The actual value passed to the function is called an argument. Parameters allow functions to accept input.");
    record22.set("tips", "Parameters make functions flexible - they allow the same function to work with different data.");
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
    record23.set("careerSlug", "software-engineer");
    record23.set("level", "Beginner");
    record23.set("questionNumber", 24);
    record23.set("question", "What is a return value?");
    record23.set("category", "Technical");
    record23.set("difficulty", "Beginner");
    record23.set("options", "{'A': 'The value a function sends back to the caller', 'B': 'A type of variable', 'C': 'A loop', 'D': 'A database operation'}");
    record23.set("correctAnswer", "A");
    record23.set("explanation", "A return value is the value that a function sends back to the code that called it. Functions use the return statement to send values back. Not all functions need to return a value.");
    record23.set("tips", "Return values allow functions to produce results that can be used by other parts of your program.");
  try {
    app.save(record23);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record24 = new Record(collection);
    record24.set("careerSlug", "software-engineer");
    record24.set("level", "Beginner");
    record24.set("questionNumber", 25);
    record24.set("question", "What is recursion?");
    record24.set("category", "Technical");
    record24.set("difficulty", "Beginner");
    record24.set("options", "{'A': 'A function that calls itself', 'B': 'A type of loop', 'C': 'A variable', 'D': 'A database operation'}");
    record24.set("correctAnswer", "A");
    record24.set("explanation", "Recursion is when a function calls itself to solve a problem by breaking it into smaller subproblems. Every recursive function needs a base case to stop the recursion and prevent infinite loops.");
    record24.set("tips", "Recursion is powerful but can be tricky - always define a clear base case to avoid infinite recursion.");
  try {
    app.save(record24);
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
