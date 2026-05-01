/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("interviewQuestionsDatabase");

  const record0 = new Record(collection);
    record0.set("careerSlug", "frontend-developer");
    record0.set("careerName", "Frontend Developer");
    record0.set("level", "Beginner");
    record0.set("questionNumber", 1);
    record0.set("question", "What are JavaScript closures and how do they work?");
    record0.set("explanation", "A closure is a function that has access to variables from its outer scope even after the outer function has returned. Closures are created every time a function is created.");
    record0.set("practicalExample", "function outer() { let count = 0; return function() { count++; return count; }; } const counter = outer(); console.log(counter()); // 1");
    record0.set("keyPoints", ["Functions have access to outer scope variables", "Closures persist after outer function returns", "Used for data privacy and encapsulation", "Common in callbacks and event handlers"]);
    record0.set("relatedTopics", ["Scope", "Function Declaration", "Variable Hoisting", "Memory Management"]);
    record0.set("difficulty", "Simple");
    record0.set("category", "Technical");
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
    record1.set("careerSlug", "frontend-developer");
    record1.set("careerName", "Frontend Developer");
    record1.set("level", "Beginner");
    record1.set("questionNumber", 2);
    record1.set("question", "Explain the JavaScript event loop and how it works.");
    record1.set("explanation", "The event loop is a mechanism that allows JavaScript to perform non-blocking operations. It continuously checks if there are tasks in the call stack and executes them.");
    record1.set("practicalExample", "console.log('Start'); setTimeout(() => console.log('Timeout'), 0); console.log('End'); // Output: Start, End, Timeout");
    record1.set("keyPoints", ["Call stack executes synchronous code", "Web APIs handle async operations", "Callback queue holds async callbacks", "Event loop moves callbacks to stack when empty"]);
    record1.set("relatedTopics", ["Asynchronous Programming", "Callbacks", "Promises", "setTimeout"]);
    record1.set("difficulty", "Medium");
    record1.set("category", "Technical");
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
    record2.set("careerSlug", "frontend-developer");
    record2.set("careerName", "Frontend Developer");
    record2.set("level", "Beginner");
    record2.set("questionNumber", 3);
    record2.set("question", "What is the difference between var, let, and const?");
    record2.set("explanation", "var is function-scoped and hoisted, let is block-scoped and not hoisted, const is block-scoped, not hoisted, and cannot be reassigned.");
    record2.set("practicalExample", "var x = 1; let y = 2; const z = 3; if (true) { var x = 10; let y = 20; } console.log(x, y); // 10, 2");
    record2.set("keyPoints", ["var is function-scoped", "let and const are block-scoped", "const cannot be reassigned", "Temporal Dead Zone with let/const"]);
    record2.set("relatedTopics", ["Scope", "Hoisting", "Variable Declaration", "Block Scope"]);
    record2.set("difficulty", "Simple");
    record2.set("category", "Technical");
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
    record3.set("careerSlug", "frontend-developer");
    record3.set("careerName", "Frontend Developer");
    record3.set("level", "Beginner");
    record3.set("questionNumber", 4);
    record3.set("question", "What are arrow functions and how do they differ from regular functions?");
    record3.set("explanation", "Arrow functions are a concise syntax for writing functions. They don't have their own 'this' binding and cannot be used as constructors.");
    record3.set("practicalExample", "const add = (a, b) => a + b; const obj = { value: 10, getValue: () => this.value }; // 'this' is not bound to obj");
    record3.set("keyPoints", ["Concise syntax", "No 'this' binding", "Cannot be used as constructors", "No 'arguments' object"]);
    record3.set("relatedTopics", ["Functions", "this Keyword", "Lexical Scope", "Function Syntax"]);
    record3.set("difficulty", "Simple");
    record3.set("category", "Technical");
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
    record4.set("careerSlug", "frontend-developer");
    record4.set("careerName", "Frontend Developer");
    record4.set("level", "Beginner");
    record4.set("questionNumber", 5);
    record4.set("question", "What is destructuring in JavaScript?");
    record4.set("explanation", "Destructuring is a convenient way to extract values from objects and arrays and assign them to variables.");
    record4.set("practicalExample", "const { name, age } = { name: 'John', age: 30 }; const [a, b] = [1, 2]; console.log(name, a); // John, 1");
    record4.set("keyPoints", ["Works with objects and arrays", "Can set default values", "Can rename variables", "Simplifies code readability"]);
    record4.set("relatedTopics", ["Objects", "Arrays", "Variable Assignment", "ES6 Features"]);
    record4.set("difficulty", "Simple");
    record4.set("category", "Technical");
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
    record5.set("careerSlug", "frontend-developer");
    record5.set("careerName", "Frontend Developer");
    record5.set("level", "Beginner");
    record5.set("questionNumber", 6);
    record5.set("question", "What is the spread operator and how is it used?");
    record5.set("explanation", "The spread operator (...) allows an iterable to be expanded in places where zero or more elements are expected.");
    record5.set("practicalExample", "const arr1 = [1, 2]; const arr2 = [...arr1, 3, 4]; const obj1 = { a: 1 }; const obj2 = { ...obj1, b: 2 };");
    record5.set("keyPoints", ["Expands iterables", "Used for copying arrays/objects", "Used in function arguments", "Creates shallow copies"]);
    record5.set("relatedTopics", ["Arrays", "Objects", "Function Arguments", "Immutability"]);
    record5.set("difficulty", "Simple");
    record5.set("category", "Technical");
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
    record6.set("careerSlug", "frontend-developer");
    record6.set("careerName", "Frontend Developer");
    record6.set("level", "Beginner");
    record6.set("questionNumber", 7);
    record6.set("question", "What are template literals and their advantages?");
    record6.set("explanation", "Template literals are strings enclosed in backticks that allow embedded expressions and multi-line strings.");
    record6.set("practicalExample", "const name = 'John'; const greeting = `Hello, ${name}!`; const multiline = `Line 1\\nLine 2`;");
    record6.set("keyPoints", ["Use backticks for syntax", "Support variable interpolation", "Support multi-line strings", "Support expressions"]);
    record6.set("relatedTopics", ["Strings", "String Concatenation", "ES6 Features", "String Methods"]);
    record6.set("difficulty", "Simple");
    record6.set("category", "Technical");
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
    record7.set("careerSlug", "frontend-developer");
    record7.set("careerName", "Frontend Developer");
    record7.set("level", "Beginner");
    record7.set("questionNumber", 8);
    record7.set("question", "What is semantic HTML and why is it important?");
    record7.set("explanation", "Semantic HTML uses meaningful tags that describe the content's meaning to both browsers and developers, improving accessibility and SEO.");
    record7.set("practicalExample", "<header><nav></nav></header><main><article><h1>Title</h1></article></main><footer></footer>");
    record7.set("keyPoints", ["Improves accessibility", "Better SEO", "Clearer code structure", "Helps screen readers"]);
    record7.set("relatedTopics", ["HTML", "Accessibility", "SEO", "Web Standards"]);
    record7.set("difficulty", "Simple");
    record7.set("category", "Technical");
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
    record8.set("careerSlug", "frontend-developer");
    record8.set("careerName", "Frontend Developer");
    record8.set("level", "Beginner");
    record8.set("questionNumber", 9);
    record8.set("question", "What is CSS Flexbox and how does it work?");
    record8.set("explanation", "Flexbox is a one-dimensional layout method for arranging items in rows or columns with flexible sizing and alignment.");
    record8.set("practicalExample", ".container { display: flex; justify-content: center; align-items: center; gap: 10px; }");
    record8.set("keyPoints", ["One-dimensional layout", "Flexible sizing", "Easy alignment", "Responsive design"]);
    record8.set("relatedTopics", ["CSS Grid", "Layout", "Responsive Design", "CSS Properties"]);
    record8.set("difficulty", "Simple");
    record8.set("category", "Technical");
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
    record9.set("careerSlug", "frontend-developer");
    record9.set("careerName", "Frontend Developer");
    record9.set("level", "Beginner");
    record9.set("questionNumber", 10);
    record9.set("question", "What is CSS Grid and how does it differ from Flexbox?");
    record9.set("explanation", "CSS Grid is a two-dimensional layout system for creating complex layouts with rows and columns, while Flexbox is one-dimensional.");
    record9.set("practicalExample", ".grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }");
    record9.set("keyPoints", ["Two-dimensional layout", "Rows and columns", "More complex layouts", "Better for page layouts"]);
    record9.set("relatedTopics", ["Flexbox", "Layout", "Responsive Design", "CSS Properties"]);
    record9.set("difficulty", "Simple");
    record9.set("category", "Technical");
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
    record10.set("careerSlug", "frontend-developer");
    record10.set("careerName", "Frontend Developer");
    record10.set("level", "Beginner");
    record10.set("questionNumber", 11);
    record10.set("question", "What is responsive design and how do you implement it?");
    record10.set("explanation", "Responsive design is an approach to web design that makes web pages render well on all devices and screen sizes.");
    record10.set("practicalExample", "@media (max-width: 768px) { .container { flex-direction: column; } }");
    record10.set("keyPoints", ["Mobile-first approach", "Media queries", "Flexible layouts", "Flexible images"]);
    record10.set("relatedTopics", ["CSS", "Mobile Design", "Media Queries", "Viewport"]);
    record10.set("difficulty", "Simple");
    record10.set("category", "Technical");
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
    record11.set("careerSlug", "frontend-developer");
    record11.set("careerName", "Frontend Developer");
    record11.set("level", "Beginner");
    record11.set("questionNumber", 12);
    record11.set("question", "What is CSS specificity and how does it work?");
    record11.set("explanation", "CSS specificity is a set of rules that determines which CSS rule is applied when multiple rules target the same element.");
    record11.set("practicalExample", "/* Specificity: 0,0,1 */ p { } /* Specificity: 0,1,0 */ .class { } /* Specificity: 1,0,0 */ #id { }");
    record11.set("keyPoints", ["Calculated from selectors", "Inline styles have highest specificity", "!important overrides specificity", "Affects CSS cascade"]);
    record11.set("relatedTopics", ["CSS Selectors", "CSS Cascade", "CSS Rules", "Inheritance"]);
    record11.set("difficulty", "Simple");
    record11.set("category", "Technical");
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
    record12.set("careerSlug", "frontend-developer");
    record12.set("careerName", "Frontend Developer");
    record12.set("level", "Beginner");
    record12.set("questionNumber", 13);
    record12.set("question", "What is BEM methodology in CSS?");
    record12.set("explanation", "BEM (Block Element Modifier) is a naming convention for CSS classes that makes code more maintainable and scalable.");
    record12.set("practicalExample", ".card { } .card__header { } .card__header--active { }");
    record12.set("keyPoints", ["Block: standalone component", "Element: part of block", "Modifier: variation of block/element", "Improves maintainability"]);
    record12.set("relatedTopics", ["CSS Naming", "CSS Architecture", "Scalability", "Code Organization"]);
    record12.set("difficulty", "Simple");
    record12.set("category", "Technical");
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
    record13.set("careerSlug", "frontend-developer");
    record13.set("careerName", "Frontend Developer");
    record13.set("level", "Beginner");
    record13.set("questionNumber", 14);
    record13.set("question", "What is accessibility (a11y) and why is it important?");
    record13.set("explanation", "Accessibility is the practice of making websites usable by everyone, including people with disabilities.");
    record13.set("practicalExample", "<img alt='Description' src='image.jpg'> <button aria-label='Close'>X</button>");
    record13.set("keyPoints", ["Includes people with disabilities", "Improves SEO", "Legal requirement", "Better user experience"]);
    record13.set("relatedTopics", ["ARIA", "Semantic HTML", "Keyboard Navigation", "Screen Readers"]);
    record13.set("difficulty", "Simple");
    record13.set("category", "Technical");
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
    record14.set("careerSlug", "frontend-developer");
    record14.set("careerName", "Frontend Developer");
    record14.set("level", "Beginner");
    record14.set("questionNumber", 15);
    record14.set("question", "What is localStorage and sessionStorage?");
    record14.set("explanation", "localStorage and sessionStorage are web APIs for storing key-value pairs on the client side. localStorage persists, sessionStorage clears on tab close.");
    record14.set("practicalExample", "localStorage.setItem('key', 'value'); const value = localStorage.getItem('key');");
    record14.set("keyPoints", ["Client-side storage", "localStorage persists", "sessionStorage temporary", "Limited storage capacity"]);
    record14.set("relatedTopics", ["Web APIs", "Client Storage", "Cookies", "Data Persistence"]);
    record14.set("difficulty", "Simple");
    record14.set("category", "Technical");
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
    record15.set("careerSlug", "frontend-developer");
    record15.set("careerName", "Frontend Developer");
    record15.set("level", "Intermediate");
    record15.set("questionNumber", 16);
    record15.set("question", "What are Promises and how do they work?");
    record15.set("explanation", "Promises are objects representing the eventual completion or failure of an asynchronous operation and its resulting value.");
    record15.set("practicalExample", "const promise = new Promise((resolve, reject) => { setTimeout(() => resolve('Done'), 1000); }); promise.then(result => console.log(result));");
    record15.set("keyPoints", ["Three states: pending, fulfilled, rejected", "Chainable with .then()", "Error handling with .catch()", "Prevents callback hell"]);
    record15.set("relatedTopics", ["Async/Await", "Callbacks", "Error Handling", "Asynchronous Programming"]);
    record15.set("difficulty", "Medium");
    record15.set("category", "Technical");
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
    record16.set("careerSlug", "frontend-developer");
    record16.set("careerName", "Frontend Developer");
    record16.set("level", "Intermediate");
    record16.set("questionNumber", 17);
    record16.set("question", "What is async/await and how does it compare to Promises?");
    record16.set("explanation", "Async/await is syntactic sugar over Promises that makes asynchronous code look and behave more like synchronous code.");
    record16.set("practicalExample", "async function fetchData() { try { const data = await fetch('/api'); return data; } catch (error) { console.error(error); } }");
    record16.set("keyPoints", ["Cleaner syntax than Promises", "await pauses execution", "Error handling with try/catch", "Returns a Promise"]);
    record16.set("relatedTopics", ["Promises", "Error Handling", "Asynchronous Programming", "Callbacks"]);
    record16.set("difficulty", "Medium");
    record16.set("category", "Technical");
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
    record17.set("careerSlug", "frontend-developer");
    record17.set("careerName", "Frontend Developer");
    record17.set("level", "Intermediate");
    record17.set("questionNumber", 18);
    record17.set("question", "What is prototypal inheritance in JavaScript?");
    record17.set("explanation", "Prototypal inheritance is a mechanism where objects inherit directly from other objects through the prototype chain.");
    record17.set("practicalExample", "const parent = { greet() { return 'Hello'; } }; const child = Object.create(parent); console.log(child.greet());");
    record17.set("keyPoints", ["Objects inherit from other objects", "Prototype chain lookup", "More flexible than class inheritance", "Dynamic property lookup"]);
    record17.set("relatedTopics", ["Prototype", "Constructor Functions", "Classes", "Object Creation"]);
    record17.set("difficulty", "Medium");
    record17.set("category", "Technical");
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
    record18.set("careerSlug", "frontend-developer");
    record18.set("careerName", "Frontend Developer");
    record18.set("level", "Intermediate");
    record18.set("questionNumber", 19);
    record18.set("question", "Explain the 'this' keyword in JavaScript.");
    record18.set("explanation", "'this' refers to the object that is executing the current function. Its value depends on how the function is called.");
    record18.set("practicalExample", "const obj = { value: 10, getValue() { return this.value; } }; console.log(obj.getValue()); // 10");
    record18.set("keyPoints", ["Value depends on call context", "Different in arrow functions", "Can be bound with .bind()", "Global 'this' in strict mode"]);
    record18.set("relatedTopics", ["Arrow Functions", "call/apply/bind", "Object Methods", "Scope"]);
    record18.set("difficulty", "Medium");
    record18.set("category", "Technical");
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
    record19.set("careerSlug", "frontend-developer");
    record19.set("careerName", "Frontend Developer");
    record19.set("level", "Intermediate");
    record19.set("questionNumber", 20);
    record19.set("question", "What are call, apply, and bind methods?");
    record19.set("explanation", "call, apply, and bind are methods to control the 'this' context of a function. call and apply invoke immediately, bind returns a new function.");
    record19.set("practicalExample", "function greet(greeting) { return greeting + ' ' + this.name; } const person = { name: 'John' }; greet.call(person, 'Hello'); // Hello John");
    record19.set("keyPoints", ["Control 'this' context", "call takes arguments individually", "apply takes arguments as array", "bind returns new function"]);
    record19.set("relatedTopics", ["this Keyword", "Function Methods", "Context Binding", "Scope"]);
    record19.set("difficulty", "Medium");
    record19.set("category", "Technical");
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
    record20.set("careerSlug", "frontend-developer");
    record20.set("careerName", "Frontend Developer");
    record20.set("level", "Intermediate");
    record20.set("questionNumber", 21);
    record20.set("question", "What is event delegation and why is it useful?");
    record20.set("explanation", "Event delegation is a technique where you attach a single event listener to a parent element to handle events for multiple child elements.");
    record20.set("practicalExample", "document.getElementById('parent').addEventListener('click', (e) => { if (e.target.matches('.child')) { console.log('Child clicked'); } });");
    record20.set("keyPoints", ["Single listener for multiple elements", "Reduces memory usage", "Handles dynamic elements", "Uses event bubbling"]);
    record20.set("relatedTopics", ["Event Bubbling", "Event Listeners", "DOM Events", "Performance"]);
    record20.set("difficulty", "Medium");
    record20.set("category", "Technical");
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
    record21.set("careerSlug", "frontend-developer");
    record21.set("careerName", "Frontend Developer");
    record21.set("level", "Intermediate");
    record21.set("questionNumber", 22);
    record21.set("question", "What is debouncing and throttling?");
    record21.set("explanation", "Debouncing delays function execution until after a specified time has passed since the last call. Throttling limits function execution to once per specified time interval.");
    record21.set("practicalExample", "const debounce = (fn, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => fn(...args), delay); }; };");
    record21.set("keyPoints", ["Debounce: delays execution", "Throttle: limits frequency", "Improves performance", "Used for search, resize events"]);
    record21.set("relatedTopics", ["Performance Optimization", "Event Handling", "Function Optimization", "Timing"]);
    record21.set("difficulty", "Medium");
    record21.set("category", "Technical");
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
    record22.set("careerSlug", "frontend-developer");
    record22.set("careerName", "Frontend Developer");
    record22.set("level", "Intermediate");
    record22.set("questionNumber", 23);
    record22.set("question", "What is memoization and how does it improve performance?");
    record22.set("explanation", "Memoization is a technique to cache function results based on input parameters to avoid redundant calculations.");
    record22.set("practicalExample", "const memoize = (fn) => { const cache = {}; return (arg) => { if (arg in cache) return cache[arg]; return cache[arg] = fn(arg); }; };");
    record22.set("keyPoints", ["Caches function results", "Improves performance", "Reduces redundant calculations", "Trade-off: memory for speed"]);
    record22.set("relatedTopics", ["Performance Optimization", "Caching", "Functions", "Algorithms"]);
    record22.set("difficulty", "Medium");
    record22.set("category", "Technical");
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
    record23.set("careerSlug", "frontend-developer");
    record23.set("careerName", "Frontend Developer");
    record23.set("level", "Intermediate");
    record23.set("questionNumber", 24);
    record23.set("question", "What is React and what are its core concepts?");
    record23.set("explanation", "React is a JavaScript library for building user interfaces with reusable components. Core concepts include JSX, components, state, and props.");
    record23.set("practicalExample", "function App() { const [count, setCount] = useState(0); return <button onClick={() => setCount(count + 1)}>{count}</button>; }");
    record23.set("keyPoints", ["Component-based architecture", "Declarative UI", "Virtual DOM", "Unidirectional data flow"]);
    record23.set("relatedTopics", ["JSX", "Components", "State", "Props", "Hooks"]);
    record23.set("difficulty", "Medium");
    record23.set("category", "Technical");
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
    record24.set("careerSlug", "frontend-developer");
    record24.set("careerName", "Frontend Developer");
    record24.set("level", "Intermediate");
    record24.set("questionNumber", 25);
    record24.set("question", "What is the Virtual DOM and how does it improve performance?");
    record24.set("explanation", "The Virtual DOM is an in-memory representation of the real DOM. React uses it to determine what changes need to be made to the actual DOM.");
    record24.set("practicalExample", "React compares old and new Virtual DOM trees, calculates differences, and updates only changed elements in the real DOM.");
    record24.set("keyPoints", ["In-memory representation", "Improves performance", "Reduces DOM manipulation", "Enables efficient updates"]);
    record24.set("relatedTopics", ["DOM", "React", "Performance Optimization", "Reconciliation"]);
    record24.set("difficulty", "Medium");
    record24.set("category", "Technical");
  try {
    app.save(record24);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record25 = new Record(collection);
    record25.set("careerSlug", "frontend-developer");
    record25.set("careerName", "Frontend Developer");
    record25.set("level", "Intermediate");
    record25.set("questionNumber", 26);
    record25.set("question", "What are React hooks and what are the most common ones?");
    record25.set("explanation", "Hooks are functions that let you use state and other React features in functional components. Common hooks include useState, useEffect, useContext.");
    record25.set("practicalExample", "const [state, setState] = useState(0); useEffect(() => { console.log('Component mounted'); }, []);");
    record25.set("keyPoints", ["Enable state in functional components", "useState for state management", "useEffect for side effects", "useContext for context"]);
    record25.set("relatedTopics", ["Functional Components", "State Management", "Side Effects", "Custom Hooks"]);
    record25.set("difficulty", "Medium");
    record25.set("category", "Technical");
  try {
    app.save(record25);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record26 = new Record(collection);
    record26.set("careerSlug", "frontend-developer");
    record26.set("careerName", "Frontend Developer");
    record26.set("level", "Intermediate");
    record26.set("questionNumber", 27);
    record26.set("question", "What is useState hook and how does it work?");
    record26.set("explanation", "useState is a hook that lets you add state to functional components. It returns the current state and a function to update it.");
    record26.set("practicalExample", "const [count, setCount] = useState(0); const increment = () => setCount(count + 1);");
    record26.set("keyPoints", ["Returns state and setter", "Setter triggers re-render", "Can have multiple useState calls", "Initial value can be function"]);
    record26.set("relatedTopics", ["Hooks", "State Management", "Functional Components", "Re-rendering"]);
    record26.set("difficulty", "Medium");
    record26.set("category", "Technical");
  try {
    app.save(record26);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record27 = new Record(collection);
    record27.set("careerSlug", "frontend-developer");
    record27.set("careerName", "Frontend Developer");
    record27.set("level", "Intermediate");
    record27.set("questionNumber", 28);
    record27.set("question", "What is useEffect hook and how do you manage side effects?");
    record27.set("explanation", "useEffect is a hook for performing side effects in functional components. It runs after render and can be controlled with dependencies.");
    record27.set("practicalExample", "useEffect(() => { console.log('Mounted'); return () => console.log('Unmounted'); }, []);");
    record27.set("keyPoints", ["Runs after render", "Dependency array controls execution", "Cleanup function for unmount", "Replaces lifecycle methods"]);
    record27.set("relatedTopics", ["Hooks", "Side Effects", "Lifecycle", "Dependencies"]);
    record27.set("difficulty", "Medium");
    record27.set("category", "Technical");
  try {
    app.save(record27);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record28 = new Record(collection);
    record28.set("careerSlug", "frontend-developer");
    record28.set("careerName", "Frontend Developer");
    record28.set("level", "Intermediate");
    record28.set("questionNumber", 29);
    record28.set("question", "What is prop drilling and how can you avoid it?");
    record28.set("explanation", "Prop drilling is passing props through multiple levels of components that don't use them. It can be avoided using Context API or state management.");
    record28.set("practicalExample", "// Avoid: <Parent><Child prop={value}><GrandChild prop={prop} /></Child></Parent> // Use Context: <Provider value={value}><GrandChild /></Provider>");
    record28.set("keyPoints", ["Passing props through intermediate components", "Makes code hard to maintain", "Context API solution", "State management solution"]);
    record28.set("relatedTopics", ["Props", "Context API", "State Management", "Component Structure"]);
    record28.set("difficulty", "Medium");
    record28.set("category", "Technical");
  try {
    app.save(record28);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record29 = new Record(collection);
    record29.set("careerSlug", "frontend-developer");
    record29.set("careerName", "Frontend Developer");
    record29.set("level", "Intermediate");
    record29.set("questionNumber", 30);
    record29.set("question", "What are controlled and uncontrolled components?");
    record29.set("explanation", "Controlled components have their state managed by React. Uncontrolled components manage their own state using the DOM.");
    record29.set("practicalExample", "// Controlled: <input value={state} onChange={e => setState(e.target.value)} /> // Uncontrolled: <input ref={inputRef} />");
    record29.set("keyPoints", ["Controlled: React manages state", "Uncontrolled: DOM manages state", "Controlled more predictable", "Uncontrolled simpler for simple cases"]);
    record29.set("relatedTopics", ["Forms", "State Management", "React", "Input Handling"]);
    record29.set("difficulty", "Medium");
    record29.set("category", "Technical");
  try {
    app.save(record29);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record30 = new Record(collection);
    record30.set("careerSlug", "frontend-developer");
    record30.set("careerName", "Frontend Developer");
    record30.set("level", "Intermediate");
    record30.set("questionNumber", 31);
    record30.set("question", "What is Context API and how do you use it?");
    record30.set("explanation", "Context API is a React feature for passing data through the component tree without prop drilling.");
    record30.set("practicalExample", "const ThemeContext = React.createContext(); <ThemeContext.Provider value='dark'><Component /></ThemeContext.Provider>");
    record30.set("keyPoints", ["Avoids prop drilling", "createContext creates context", "Provider passes value", "useContext consumes value"]);
    record30.set("relatedTopics", ["Props", "State Management", "Hooks", "Component Communication"]);
    record30.set("difficulty", "Medium");
    record30.set("category", "Technical");
  try {
    app.save(record30);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record31 = new Record(collection);
    record31.set("careerSlug", "frontend-developer");
    record31.set("careerName", "Frontend Developer");
    record31.set("level", "Intermediate");
    record31.set("questionNumber", 32);
    record31.set("question", "What is Redux and how does it work?");
    record31.set("explanation", "Redux is a state management library that uses a single store, actions, and reducers to manage application state.");
    record31.set("practicalExample", "const reducer = (state = 0, action) => action.type === 'INCREMENT' ? state + 1 : state; const store = createStore(reducer);");
    record31.set("keyPoints", ["Single source of truth", "Actions describe changes", "Reducers update state", "Predictable state management"]);
    record31.set("relatedTopics", ["State Management", "Actions", "Reducers", "Store"]);
    record31.set("difficulty", "Medium");
    record31.set("category", "Technical");
  try {
    app.save(record31);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record32 = new Record(collection);
    record32.set("careerSlug", "frontend-developer");
    record32.set("careerName", "Frontend Developer");
    record32.set("level", "Intermediate");
    record32.set("questionNumber", 33);
    record32.set("question", "What are Higher-Order Components (HOC)?");
    record32.set("explanation", "A Higher-Order Component is a pattern for reusing component logic by wrapping a component with a function that returns an enhanced component.");
    record32.set("practicalExample", "const withTheme = (Component) => (props) => <Component {...props} theme='dark' />;");
    record32.set("keyPoints", ["Advanced pattern for code reuse", "Wraps component with logic", "Returns new component", "Alternative to hooks"]);
    record32.set("relatedTopics", ["React Patterns", "Component Composition", "Reusability", "Hooks"]);
    record32.set("difficulty", "Medium");
    record32.set("category", "Technical");
  try {
    app.save(record32);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record33 = new Record(collection);
    record33.set("careerSlug", "frontend-developer");
    record33.set("careerName", "Frontend Developer");
    record33.set("level", "Intermediate");
    record33.set("questionNumber", 34);
    record33.set("question", "What are render props?");
    record33.set("explanation", "Render props is a pattern where a component accepts a function as a prop that returns React elements.");
    record33.set("practicalExample", "<DataProvider render={data => <Component data={data} />} />");
    record33.set("keyPoints", ["Function as prop", "Flexible component logic", "Alternative to HOC", "Can be complex"]);
    record33.set("relatedTopics", ["React Patterns", "Component Composition", "Props", "Hooks"]);
    record33.set("difficulty", "Medium");
    record33.set("category", "Technical");
  try {
    app.save(record33);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record34 = new Record(collection);
    record34.set("careerSlug", "frontend-developer");
    record34.set("careerName", "Frontend Developer");
    record34.set("level", "Intermediate");
    record34.set("questionNumber", 35);
    record34.set("question", "What is lazy loading and code splitting in React?");
    record34.set("explanation", "Lazy loading defers loading of resources until they're needed. Code splitting breaks the bundle into smaller chunks loaded on demand.");
    record34.set("practicalExample", "const LazyComponent = React.lazy(() => import('./Component')); <Suspense fallback={<div>Loading...</div>}><LazyComponent /></Suspense>");
    record34.set("keyPoints", ["Improves initial load time", "Loads code on demand", "Suspense for loading state", "Better performance"]);
    record34.set("relatedTopics", ["Performance Optimization", "Bundling", "React", "Suspense"]);
    record34.set("difficulty", "Medium");
    record34.set("category", "Technical");
  try {
    app.save(record34);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record35 = new Record(collection);
    record35.set("careerSlug", "frontend-developer");
    record35.set("careerName", "Frontend Developer");
    record35.set("level", "Intermediate");
    record35.set("questionNumber", 36);
    record35.set("question", "What is error handling in React and how do you implement it?");
    record35.set("explanation", "Error handling in React involves using Error Boundaries to catch errors in component tree and display fallback UI.");
    record35.set("practicalExample", "class ErrorBoundary extends React.Component { componentDidCatch(error, info) { console.log(error); } render() { return this.props.children; } }");
    record35.set("keyPoints", ["Error Boundaries catch errors", "componentDidCatch lifecycle", "Prevents white screen", "Graceful error handling"]);
    record35.set("relatedTopics", ["React", "Error Handling", "Lifecycle Methods", "Debugging"]);
    record35.set("difficulty", "Medium");
    record35.set("category", "Technical");
  try {
    app.save(record35);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record36 = new Record(collection);
    record36.set("careerSlug", "frontend-developer");
    record36.set("careerName", "Frontend Developer");
    record36.set("level", "Intermediate");
    record36.set("questionNumber", 37);
    record36.set("question", "What are API calls and how do you handle them in React?");
    record36.set("explanation", "API calls fetch data from a server. In React, they're typically made in useEffect hook and state is updated with the response.");
    record36.set("practicalExample", "useEffect(() => { fetch('/api/data').then(res => res.json()).then(data => setData(data)); }, []);");
    record36.set("keyPoints", ["Fetch data from server", "Use useEffect for API calls", "Handle loading and error states", "Update state with response"]);
    record36.set("relatedTopics", ["Async/Await", "Fetch API", "State Management", "Side Effects"]);
    record36.set("difficulty", "Medium");
    record36.set("category", "Technical");
  try {
    app.save(record36);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record37 = new Record(collection);
    record37.set("careerSlug", "frontend-developer");
    record37.set("careerName", "Frontend Developer");
    record37.set("level", "Intermediate");
    record37.set("questionNumber", 38);
    record37.set("question", "What is CORS and how does it affect API calls?");
    record37.set("explanation", "CORS (Cross-Origin Resource Sharing) is a mechanism that allows restricted resources on a web page to be requested from another domain.");
    record37.set("practicalExample", "// Server: res.header('Access-Control-Allow-Origin', '*'); // Client: fetch('/api', { method: 'GET' });");
    record37.set("keyPoints", ["Controls cross-origin requests", "Browser enforces CORS", "Server must allow origin", "Preflight requests for complex"]);
    record37.set("relatedTopics", ["API", "HTTP", "Security", "Fetch API"]);
    record37.set("difficulty", "Medium");
    record37.set("category", "Technical");
  try {
    app.save(record37);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record38 = new Record(collection);
    record38.set("careerSlug", "frontend-developer");
    record38.set("careerName", "Frontend Developer");
    record38.set("level", "Intermediate");
    record38.set("questionNumber", 39);
    record38.set("question", "What are loading and error states in UI?");
    record38.set("explanation", "Loading and error states provide feedback to users about the status of asynchronous operations.");
    record38.set("practicalExample", "const [loading, setLoading] = useState(false); const [error, setError] = useState(null); if (loading) return <div>Loading...</div>; if (error) return <div>Error: {error}</div>;");
    record38.set("keyPoints", ["Improve user experience", "Show operation status", "Handle errors gracefully", "Prevent confusion"]);
    record38.set("relatedTopics", ["UX Design", "State Management", "API Calls", "User Feedback"]);
    record38.set("difficulty", "Medium");
    record38.set("category", "Technical");
  try {
    app.save(record38);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record39 = new Record(collection);
    record39.set("careerSlug", "frontend-developer");
    record39.set("careerName", "Frontend Developer");
    record39.set("level", "Intermediate");
    record39.set("questionNumber", 40);
    record39.set("question", "What are skeleton screens and why are they useful?");
    record39.set("explanation", "Skeleton screens are placeholder UI elements that mimic the layout of content while data is loading, improving perceived performance.");
    record39.set("practicalExample", "<div className='skeleton'><div className='skeleton-line'></div><div className='skeleton-line'></div></div>");
    record39.set("keyPoints", ["Improves perceived performance", "Shows content structure", "Better UX than blank screen", "Reduces perceived wait time"]);
    record39.set("relatedTopics", ["UX Design", "Loading States", "Performance", "User Experience"]);
    record39.set("difficulty", "Medium");
    record39.set("category", "Technical");
  try {
    app.save(record39);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record40 = new Record(collection);
    record40.set("careerSlug", "frontend-developer");
    record40.set("careerName", "Frontend Developer");
    record40.set("level", "Advanced");
    record40.set("questionNumber", 41);
    record40.set("question", "What is infinite scroll and pagination?");
    record40.set("explanation", "Infinite scroll loads more content as user scrolls down. Pagination divides content into pages. Both improve performance with large datasets.");
    record40.set("practicalExample", "useEffect(() => { window.addEventListener('scroll', handleScroll); }, []); const handleScroll = () => { if (scrolledToBottom) loadMore(); };");
    record40.set("keyPoints", ["Infinite scroll: continuous loading", "Pagination: discrete pages", "Improves performance", "Better UX for large data"]);
    record40.set("relatedTopics", ["Performance Optimization", "UX Design", "Data Loading", "Scrolling"]);
    record40.set("difficulty", "Medium");
    record40.set("category", "Technical");
  try {
    app.save(record40);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record41 = new Record(collection);
    record41.set("careerSlug", "frontend-developer");
    record41.set("careerName", "Frontend Developer");
    record41.set("level", "Advanced");
    record41.set("questionNumber", 42);
    record41.set("question", "How do you implement search functionality?");
    record41.set("explanation", "Search functionality filters data based on user input. It can be client-side or server-side depending on data size.");
    record41.set("practicalExample", "const [query, setQuery] = useState(''); const results = data.filter(item => item.name.includes(query));");
    record41.set("keyPoints", ["Client-side: filter existing data", "Server-side: query database", "Debounce for performance", "Real-time filtering"]);
    record41.set("relatedTopics", ["Filtering", "Performance Optimization", "User Input", "Data Management"]);
    record41.set("difficulty", "Medium");
    record41.set("category", "Technical");
  try {
    app.save(record41);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record42 = new Record(collection);
    record42.set("careerSlug", "frontend-developer");
    record42.set("careerName", "Frontend Developer");
    record42.set("level", "Advanced");
    record42.set("questionNumber", 43);
    record42.set("question", "How do you implement filtering and sorting?");
    record42.set("explanation", "Filtering narrows data based on criteria. Sorting arranges data in a specific order. Both improve data usability.");
    record42.set("practicalExample", "const filtered = data.filter(item => item.category === selected); const sorted = filtered.sort((a, b) => a.price - b.price);");
    record42.set("keyPoints", ["Filtering: narrow by criteria", "Sorting: arrange by property", "Combine for powerful UX", "Improve data exploration"]);
    record42.set("relatedTopics", ["Data Management", "UX Design", "Arrays", "Performance"]);
    record42.set("difficulty", "Medium");
    record42.set("category", "Technical");
  try {
    app.save(record42);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record43 = new Record(collection);
    record43.set("careerSlug", "frontend-developer");
    record43.set("careerName", "Frontend Developer");
    record43.set("level", "Advanced");
    record43.set("questionNumber", 44);
    record43.set("question", "What is client-side vs server-side rendering?");
    record43.set("explanation", "Client-side rendering renders content in the browser. Server-side rendering renders on the server and sends HTML to browser.");
    record43.set("practicalExample", "// CSR: React renders in browser // SSR: Server renders React and sends HTML");
    record43.set("keyPoints", ["CSR: faster interaction", "SSR: better SEO", "SSR: faster initial load", "Trade-offs in performance"]);
    record43.set("relatedTopics", ["Rendering", "Performance", "SEO", "Next.js"]);
    record43.set("difficulty", "Medium");
    record43.set("category", "Technical");
  try {
    app.save(record43);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record44 = new Record(collection);
    record44.set("careerSlug", "frontend-developer");
    record44.set("careerName", "Frontend Developer");
    record44.set("level", "Advanced");
    record44.set("questionNumber", 45);
    record44.set("question", "What is Next.js and what are its benefits?");
    record44.set("explanation", "Next.js is a React framework that enables server-side rendering, static generation, and other optimizations out of the box.");
    record44.set("practicalExample", "export async function getServerSideProps() { const data = await fetch('/api'); return { props: { data } }; }");
    record44.set("keyPoints", ["Server-side rendering", "Static generation", "API routes", "Automatic code splitting"]);
    record44.set("relatedTopics", ["React", "Server-side Rendering", "Performance", "Framework"]);
    record44.set("difficulty", "Medium");
    record44.set("category", "Technical");
  try {
    app.save(record44);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record45 = new Record(collection);
    record45.set("careerSlug", "frontend-developer");
    record45.set("careerName", "Frontend Developer");
    record45.set("level", "Advanced");
    record45.set("questionNumber", 46);
    record45.set("question", "What are React performance optimization techniques?");
    record45.set("explanation", "Performance optimization techniques include memoization, code splitting, lazy loading, and reducing re-renders.");
    record45.set("practicalExample", "const MemoComponent = React.memo(Component); const LazyComponent = React.lazy(() => import('./Component'));");
    record45.set("keyPoints", ["React.memo prevents re-renders", "useMemo caches values", "useCallback caches functions", "Code splitting reduces bundle"]);
    record45.set("relatedTopics", ["Performance", "React", "Optimization", "Rendering"]);
    record45.set("difficulty", "Hard");
    record45.set("category", "Technical");
  try {
    app.save(record45);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record46 = new Record(collection);
    record46.set("careerSlug", "frontend-developer");
    record46.set("careerName", "Frontend Developer");
    record46.set("level", "Advanced");
    record46.set("questionNumber", 47);
    record46.set("question", "What are web workers and service workers?");
    record46.set("explanation", "Web workers run JavaScript in background threads. Service workers intercept network requests and enable offline functionality.");
    record46.set("practicalExample", "const worker = new Worker('worker.js'); worker.postMessage({data: 'test'}); // Service Worker: self.addEventListener('fetch', event => {});");
    record46.set("keyPoints", ["Web workers: background processing", "Service workers: offline support", "Improve performance", "Enable PWA features"]);
    record46.set("relatedTopics", ["Performance", "PWA", "Background Processing", "Offline"]);
    record46.set("difficulty", "Hard");
    record46.set("category", "Technical");
  try {
    app.save(record46);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record47 = new Record(collection);
    record47.set("careerSlug", "frontend-developer");
    record47.set("careerName", "Frontend Developer");
    record47.set("level", "Advanced");
    record47.set("questionNumber", 48);
    record47.set("question", "What are Progressive Web Apps (PWA)?");
    record47.set("explanation", "PWAs are web applications that use modern web capabilities to provide app-like experiences with offline support and installability.");
    record47.set("practicalExample", "// manifest.json: { 'name': 'App', 'icons': [...], 'start_url': '/' } // Service Worker for offline");
    record47.set("keyPoints", ["Offline functionality", "Installable", "App-like experience", "Service workers required"]);
    record47.set("relatedTopics", ["Service Workers", "Web APIs", "Performance", "User Experience"]);
    record47.set("difficulty", "Hard");
    record47.set("category", "Technical");
  try {
    app.save(record47);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record48 = new Record(collection);
    record48.set("careerSlug", "frontend-developer");
    record48.set("careerName", "Frontend Developer");
    record48.set("level", "Advanced");
    record48.set("questionNumber", 49);
    record48.set("question", "What is authentication and how do you implement it?");
    record48.set("explanation", "Authentication verifies user identity. Common methods include JWT tokens, session-based auth, and OAuth.");
    record48.set("practicalExample", "const token = localStorage.getItem('token'); fetch('/api', { headers: { 'Authorization': `Bearer ${token}` } });");
    record48.set("keyPoints", ["Verifies user identity", "JWT: stateless", "Session: stateful", "OAuth: third-party"]);
    record48.set("relatedTopics", ["Security", "JWT", "OAuth", "Authorization"]);
    record48.set("difficulty", "Hard");
    record48.set("category", "Technical");
  try {
    app.save(record48);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record49 = new Record(collection);
    record49.set("careerSlug", "frontend-developer");
    record49.set("careerName", "Frontend Developer");
    record49.set("level", "Advanced");
    record49.set("questionNumber", 50);
    record49.set("question", "What is authorization and how does it differ from authentication?");
    record49.set("explanation", "Authorization determines what authenticated users can do. Authentication verifies who they are.");
    record49.set("practicalExample", "// Auth: verify user is John // Authz: John can access admin panel");
    record49.set("keyPoints", ["Authorization: permissions", "Authentication: identity", "Role-based access", "Permission checking"]);
    record49.set("relatedTopics", ["Security", "Authentication", "Access Control", "Permissions"]);
    record49.set("difficulty", "Hard");
    record49.set("category", "Technical");
  try {
    app.save(record49);
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
