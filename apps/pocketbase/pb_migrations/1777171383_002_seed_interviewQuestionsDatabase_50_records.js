/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("interviewQuestionsDatabase");

  const record0 = new Record(collection);
    record0.set("careerSlug", "frontend-developer");
    record0.set("careerName", "Frontend Developer");
    record0.set("level", "Beginner");
    record0.set("questionNumber", 1);
    record0.set("question", "What is the difference between var, let, and const in JavaScript?");
    record0.set("explanation", "var is function-scoped and hoisted, let and const are block-scoped. const prevents reassignment but not mutation of objects. Understanding scope is fundamental to writing bug-free JavaScript.");
    record0.set("practicalExample", "var x = 1; if(true) { var x = 2; } console.log(x); // 2. With let: let y = 1; if(true) { let y = 2; } console.log(y); // 1");
    record0.set("keyPoints", ["var is function-scoped", "let and const are block-scoped", "const prevents reassignment", "hoisting behavior differs"]);
    record0.set("relatedTopics", ["hoisting", "scope", "temporal dead zone"]);
    record0.set("difficulty", "Simple");
    record0.set("category", "JavaScript Fundamentals");
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
    record1.set("question", "Explain JavaScript closures with a practical example.");
    record1.set("explanation", "A closure is a function that has access to variables from its outer scope even after the outer function returns. Closures are created every time a function is created and are essential for data privacy and callbacks.");
    record1.set("practicalExample", "function outer() { let count = 0; return function() { count++; return count; }; } const counter = outer(); console.log(counter()); // 1, console.log(counter()); // 2");
    record1.set("keyPoints", ["closures capture outer scope variables", "used for data privacy", "essential for callbacks and event handlers"]);
    record1.set("relatedTopics", ["scope", "function scope", "lexical environment"]);
    record1.set("difficulty", "Simple");
    record1.set("category", "JavaScript Fundamentals");
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
    record2.set("question", "What is hoisting in JavaScript?");
    record2.set("explanation", "Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution. var declarations are hoisted and initialized with undefined, while let/const are hoisted but not initialized (temporal dead zone).");
    record2.set("practicalExample", "console.log(x); // undefined (not error). var x = 5; console.log(y); // ReferenceError. let y = 5;");
    record2.set("keyPoints", ["var declarations hoisted and initialized as undefined", "let/const hoisted but not initialized", "function declarations fully hoisted"]);
    record2.set("relatedTopics", ["temporal dead zone", "scope", "execution context"]);
    record2.set("difficulty", "Simple");
    record2.set("category", "JavaScript Fundamentals");
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
    record3.set("level", "Intermediate");
    record3.set("questionNumber", 4);
    record3.set("question", "Explain the event loop and how asynchronous JavaScript works.");
    record3.set("explanation", "The event loop continuously checks if the call stack is empty, then moves callbacks from the callback queue to the stack. Microtasks (Promises) have higher priority than macrotasks (setTimeout). Understanding this is crucial for debugging async issues.");
    record3.set("practicalExample", "console.log('1'); setTimeout(() => console.log('2'), 0); Promise.resolve().then(() => console.log('3')); console.log('4'); // Output: 1, 4, 3, 2");
    record3.set("keyPoints", ["call stack executes synchronous code", "microtask queue (Promises) executes before macrotask queue", "event loop coordinates execution"]);
    record3.set("relatedTopics", ["promises", "async/await", "callback queue", "microtask queue"]);
    record3.set("difficulty", "Medium");
    record3.set("category", "JavaScript Fundamentals");
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
    record4.set("level", "Intermediate");
    record4.set("questionNumber", 5);
    record4.set("question", "What are Promises and how do they differ from callbacks?");
    record4.set("explanation", "Promises represent a value that may be available now, in the future, or never. They provide better error handling and avoid callback hell. A Promise has three states: pending, fulfilled, or rejected.");
    record4.set("practicalExample", "const promise = new Promise((resolve, reject) => { setTimeout(() => resolve('done'), 1000); }); promise.then(result => console.log(result)).catch(error => console.log(error));");
    record4.set("keyPoints", ["Promises have three states: pending, fulfilled, rejected", "better error handling than callbacks", "chainable with .then() and .catch()"]);
    record4.set("relatedTopics", ["async/await", "callbacks", "error handling"]);
    record4.set("difficulty", "Medium");
    record4.set("category", "JavaScript Fundamentals");
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
    record5.set("level", "Intermediate");
    record5.set("questionNumber", 6);
    record5.set("question", "Explain async/await and how it simplifies asynchronous code.");
    record5.set("explanation", "async/await is syntactic sugar over Promises that makes asynchronous code look synchronous. An async function always returns a Promise. await pauses execution until the Promise settles, making error handling easier with try/catch.");
    record5.set("practicalExample", "async function fetchData() { try { const response = await fetch('/api/data'); const data = await response.json(); return data; } catch(error) { console.log(error); } }");
    record5.set("keyPoints", ["async functions return Promises", "await pauses execution", "try/catch for error handling", "cleaner syntax than .then()"]);
    record5.set("relatedTopics", ["promises", "error handling", "fetch API"]);
    record5.set("difficulty", "Medium");
    record5.set("category", "JavaScript Fundamentals");
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
    record6.set("level", "Intermediate");
    record6.set("questionNumber", 7);
    record6.set("question", "What is the difference between == and === in JavaScript?");
    record6.set("explanation", "== performs type coercion before comparison, while === compares both value and type without coercion. === is preferred as it's more predictable and avoids unexpected type conversions.");
    record6.set("practicalExample", "console.log(5 == '5'); // true (type coercion). console.log(5 === '5'); // false (strict comparison)");
    record6.set("keyPoints", ["== coerces types", "=== strict comparison", "=== is preferred for reliability"]);
    record6.set("relatedTopics", ["type coercion", "comparison operators"]);
    record6.set("difficulty", "Simple");
    record6.set("category", "JavaScript Fundamentals");
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
    record7.set("level", "Intermediate");
    record7.set("questionNumber", 8);
    record7.set("question", "Explain the 'this' keyword in JavaScript and its binding rules.");
    record7.set("explanation", "The value of 'this' depends on how a function is called. In regular functions, it's the object calling the function. In arrow functions, it's inherited from the enclosing scope. Understanding binding is critical for OOP and React class components.");
    record7.set("practicalExample", "const obj = { name: 'John', greet: function() { console.log(this.name); } }; obj.greet(); // 'John'. const greet = obj.greet; greet(); // undefined (this is window/global)");
    record7.set("keyPoints", ["this depends on function call context", "arrow functions inherit this from scope", "call/apply/bind can change this"]);
    record7.set("relatedTopics", ["arrow functions", "call", "apply", "bind"]);
    record7.set("difficulty", "Medium");
    record7.set("category", "JavaScript Fundamentals");
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
    record8.set("level", "Advanced");
    record8.set("questionNumber", 9);
    record8.set("question", "What is prototypal inheritance and how does it work in JavaScript?");
    record8.set("explanation", "JavaScript uses prototypal inheritance where objects inherit directly from other objects via the prototype chain. Every object has a [[Prototype]] property that points to its prototype. This enables code reuse and dynamic property lookup.");
    record8.set("practicalExample", "function Animal(name) { this.name = name; } Animal.prototype.speak = function() { console.log(this.name); }; const dog = new Animal('Dog'); dog.speak(); // 'Dog'");
    record8.set("keyPoints", ["objects inherit from prototypes", "prototype chain for property lookup", "constructor functions and new keyword"]);
    record8.set("relatedTopics", ["prototype chain", "constructor functions", "Object.create"]);
    record8.set("difficulty", "Hard");
    record8.set("category", "JavaScript Fundamentals");
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
    record9.set("level", "Advanced");
    record9.set("questionNumber", 10);
    record9.set("question", "Explain the difference between shallow copy and deep copy in JavaScript.");
    record9.set("explanation", "Shallow copy copies only the first level of properties. Nested objects are still referenced. Deep copy recursively copies all levels. Understanding this prevents bugs when modifying nested data structures.");
    record9.set("practicalExample", "const original = { a: 1, b: { c: 2 } }; const shallow = {...original}; shallow.b.c = 3; console.log(original.b.c); // 3 (affected). const deep = JSON.parse(JSON.stringify(original)); deep.b.c = 4; console.log(original.b.c); // 3 (not affected)");
    record9.set("keyPoints", ["shallow copy only copies first level", "nested objects still referenced", "deep copy recursively copies all levels"]);
    record9.set("relatedTopics", ["object mutation", "immutability", "spread operator"]);
    record9.set("difficulty", "Hard");
    record9.set("category", "JavaScript Fundamentals");
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
    record10.set("question", "What are React Hooks and why were they introduced?");
    record10.set("explanation", "Hooks are functions that let you use state and other React features in functional components. They were introduced to enable state management and side effects in functional components, eliminating the need for class components in most cases.");
    record10.set("practicalExample", "function Counter() { const [count, setCount] = useState(0); return <button onClick={() => setCount(count + 1)}>{count}</button>; }");
    record10.set("keyPoints", ["Hooks enable state in functional components", "useState for state management", "useEffect for side effects"]);
    record10.set("relatedTopics", ["useState", "useEffect", "functional components"]);
    record10.set("difficulty", "Simple");
    record10.set("category", "React Concepts");
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
    record11.set("level", "Intermediate");
    record11.set("questionNumber", 12);
    record11.set("question", "Explain the useEffect hook and its dependency array.");
    record11.set("explanation", "useEffect runs side effects after render. The dependency array controls when the effect runs: empty array runs once, no array runs every render, array with values runs when dependencies change. Proper dependency management prevents bugs and performance issues.");
    record11.set("practicalExample", "useEffect(() => { const subscription = subscribe(); return () => subscription.unsubscribe(); }, [dependency]); // cleanup function prevents memory leaks");
    record11.set("keyPoints", ["useEffect runs after render", "dependency array controls execution", "cleanup function for unsubscribe/cleanup"]);
    record11.set("relatedTopics", ["side effects", "cleanup", "performance optimization"]);
    record11.set("difficulty", "Medium");
    record11.set("category", "React Concepts");
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
    record12.set("level", "Intermediate");
    record12.set("questionNumber", 13);
    record12.set("question", "What is the virtual DOM and how does React use it for performance?");
    record12.set("explanation", "The virtual DOM is an in-memory representation of the real DOM. React compares the new virtual DOM with the previous one (diffing) and only updates changed elements in the real DOM. This minimizes expensive DOM operations and improves performance.");
    record12.set("practicalExample", "When state changes, React creates a new virtual DOM tree, compares it with the old one, identifies differences, and updates only those specific DOM nodes instead of re-rendering the entire page.");
    record12.set("keyPoints", ["virtual DOM is in-memory representation", "diffing algorithm identifies changes", "only changed elements updated in real DOM"]);
    record12.set("relatedTopics", ["reconciliation", "diffing algorithm", "performance optimization"]);
    record12.set("difficulty", "Medium");
    record12.set("category", "React Concepts");
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
    record13.set("level", "Intermediate");
    record13.set("questionNumber", 14);
    record13.set("question", "Explain React's component lifecycle and how hooks replace lifecycle methods.");
    record13.set("explanation", "Class components have lifecycle methods: componentDidMount, componentDidUpdate, componentWillUnmount. Hooks replace these: useEffect with empty dependency array = componentDidMount, useEffect with dependencies = componentDidUpdate, return function = componentWillUnmount.");
    record13.set("practicalExample", "useEffect(() => { // componentDidMount and componentDidUpdate console.log('mounted or updated'); return () => { // componentWillUnmount console.log('unmounting'); }; }, [dependency]);");
    record13.set("keyPoints", ["useEffect replaces multiple lifecycle methods", "dependency array controls when effect runs", "cleanup function replaces componentWillUnmount"]);
    record13.set("relatedTopics", ["useEffect", "component lifecycle", "class components"]);
    record13.set("difficulty", "Medium");
    record13.set("category", "React Concepts");
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
    record14.set("level", "Advanced");
    record14.set("questionNumber", 15);
    record14.set("question", "What is state management and why is it important in React applications?");
    record14.set("explanation", "State management handles how data flows through an application. As apps grow, prop drilling becomes problematic. Solutions like Redux, Context API, or Zustand centralize state, making it easier to debug, test, and maintain complex applications.");
    record14.set("practicalExample", "Instead of passing props through many components, use Context API: const UserContext = createContext(); <UserContext.Provider value={user}><App /></UserContext.Provider>; const user = useContext(UserContext);");
    record14.set("keyPoints", ["state management centralizes data", "prevents prop drilling", "enables easier debugging and testing"]);
    record14.set("relatedTopics", ["Redux", "Context API", "Zustand", "prop drilling"]);
    record14.set("difficulty", "Hard");
    record14.set("category", "React Concepts");
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
    record15.set("level", "Beginner");
    record15.set("questionNumber", 16);
    record15.set("question", "What is CSS Flexbox and how do you use it for layout?");
    record15.set("explanation", "Flexbox is a one-dimensional layout model for arranging items in rows or columns. It provides properties like justify-content, align-items, and flex to control spacing and alignment. It's essential for responsive design.");
    record15.set("practicalExample", ".container { display: flex; justify-content: space-between; align-items: center; } .item { flex: 1; }");
    record15.set("keyPoints", ["Flexbox is one-dimensional layout", "justify-content controls main axis alignment", "align-items controls cross axis alignment"]);
    record15.set("relatedTopics", ["CSS Grid", "responsive design", "alignment"]);
    record15.set("difficulty", "Simple");
    record15.set("category", "CSS");
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
    record16.set("level", "Beginner");
    record16.set("questionNumber", 17);
    record16.set("question", "Explain CSS Grid and when to use it over Flexbox.");
    record16.set("explanation", "CSS Grid is a two-dimensional layout system for creating complex layouts with rows and columns. Use Grid for page layouts and Flexbox for component layouts. Grid provides more control over both axes simultaneously.");
    record16.set("practicalExample", ".grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; } .item { grid-column: span 2; }");
    record16.set("keyPoints", ["Grid is two-dimensional layout", "grid-template-columns/rows define structure", "gap controls spacing between items"]);
    record16.set("relatedTopics", ["Flexbox", "responsive design", "layout"]);
    record16.set("difficulty", "Simple");
    record16.set("category", "CSS");
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
    record17.set("question", "What is responsive design and how do you implement it?");
    record17.set("explanation", "Responsive design makes websites work on all device sizes. Implement using media queries, flexible grids, and flexible images. Mobile-first approach starts with mobile design then adds complexity for larger screens.");
    record17.set("practicalExample", "@media (max-width: 768px) { .container { flex-direction: column; } } img { max-width: 100%; height: auto; }");
    record17.set("keyPoints", ["media queries for different screen sizes", "flexible grids and images", "mobile-first approach"]);
    record17.set("relatedTopics", ["media queries", "mobile-first", "viewport meta tag"]);
    record17.set("difficulty", "Medium");
    record17.set("category", "CSS");
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
    record18.set("question", "Explain CSS animations and transitions.");
    record18.set("explanation", "Transitions smoothly change CSS properties over time. Animations apply keyframes for more complex effects. Transitions are simpler for state changes, animations for continuous or complex effects. Both improve user experience.");
    record18.set("practicalExample", ".box { transition: background-color 0.3s ease; } .box:hover { background-color: blue; } @keyframes slide { from { transform: translateX(0); } to { transform: translateX(100px); } }");
    record18.set("keyPoints", ["transitions smooth property changes", "animations use keyframes", "timing functions control speed"]);
    record18.set("relatedTopics", ["transforms", "timing functions", "performance"]);
    record18.set("difficulty", "Medium");
    record18.set("category", "CSS");
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
    record19.set("level", "Advanced");
    record19.set("questionNumber", 20);
    record19.set("question", "What is CSS specificity and how does it affect styling?");
    record19.set("explanation", "Specificity determines which CSS rule applies when multiple rules target the same element. Inline styles (1000) > IDs (100) > classes/attributes (10) > elements (1). Understanding specificity prevents styling conflicts and reduces !important usage.");
    record19.set("practicalExample", "#header { color: red; } /* specificity 100 */ .header { color: blue; } /* specificity 10 */ /* #header wins */");
    record19.set("keyPoints", ["specificity determines rule priority", "inline styles have highest specificity", "avoid !important by understanding specificity"]);
    record19.set("relatedTopics", ["cascade", "inheritance", "CSS architecture"]);
    record19.set("difficulty", "Hard");
    record19.set("category", "CSS");
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
    record20.set("level", "Beginner");
    record20.set("questionNumber", 21);
    record20.set("question", "What is the DOM and how do you manipulate it with JavaScript?");
    record20.set("explanation", "The DOM (Document Object Model) is a tree representation of HTML. JavaScript can select elements using querySelector/getElementById and modify them. DOM manipulation is fundamental to interactive web applications.");
    record20.set("practicalExample", "const element = document.querySelector('.button'); element.textContent = 'Click me'; element.addEventListener('click', () => console.log('clicked'));");
    record20.set("keyPoints", ["DOM is tree representation of HTML", "querySelector for flexible selection", "addEventListener for event handling"]);
    record20.set("relatedTopics", ["event handling", "DOM traversal", "event delegation"]);
    record20.set("difficulty", "Simple");
    record20.set("category", "DOM Manipulation");
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
    record21.set("question", "Explain event delegation and why it's useful.");
    record21.set("explanation", "Event delegation uses event bubbling to handle events on parent elements instead of individual children. This reduces event listeners, improves performance, and handles dynamically added elements automatically.");
    record21.set("practicalExample", "document.querySelector('ul').addEventListener('click', (e) => { if(e.target.tagName === 'LI') { console.log('clicked:', e.target.textContent); } });");
    record21.set("keyPoints", ["event delegation uses event bubbling", "reduces number of event listeners", "handles dynamic elements automatically"]);
    record21.set("relatedTopics", ["event bubbling", "event capturing", "event.target"]);
    record21.set("difficulty", "Medium");
    record21.set("category", "DOM Manipulation");
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
    record22.set("question", "What is event bubbling and event capturing?");
    record22.set("explanation", "Event bubbling propagates events from child to parent elements. Event capturing goes from parent to child. Most events bubble by default. Understanding this prevents unexpected behavior and enables event delegation.");
    record22.set("practicalExample", "element.addEventListener('click', handler, false); // bubbling (default). element.addEventListener('click', handler, true); // capturing");
    record22.set("keyPoints", ["bubbling propagates child to parent", "capturing propagates parent to child", "stopPropagation() stops propagation"]);
    record22.set("relatedTopics", ["event delegation", "stopPropagation", "preventDefault"]);
    record22.set("difficulty", "Medium");
    record22.set("category", "DOM Manipulation");
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
    record23.set("level", "Advanced");
    record23.set("questionNumber", 24);
    record23.set("question", "What are Web APIs and give examples of commonly used ones.");
    record23.set("explanation", "Web APIs provide functionality beyond JavaScript language features. Common APIs include Fetch API for HTTP requests, LocalStorage for client-side storage, Geolocation for location data, and Canvas for graphics. APIs are essential for modern web applications.");
    record23.set("practicalExample", "fetch('/api/data').then(r => r.json()).then(data => console.log(data)); localStorage.setItem('key', 'value'); navigator.geolocation.getCurrentPosition(pos => console.log(pos));");
    record23.set("keyPoints", ["Fetch API for HTTP requests", "LocalStorage for persistent storage", "Geolocation for location data"]);
    record23.set("relatedTopics", ["Fetch API", "LocalStorage", "IndexedDB", "Service Workers"]);
    record23.set("difficulty", "Hard");
    record23.set("category", "Browser APIs");
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
    record24.set("question", "Explain performance optimization techniques for frontend applications.");
    record24.set("explanation", "Key techniques include code splitting, lazy loading, minification, caching, image optimization, and reducing bundle size. Performance directly impacts user experience and SEO. Tools like Lighthouse help measure and improve performance.");
    record24.set("practicalExample", "const Component = React.lazy(() => import('./Component')); <Suspense fallback={<div>Loading...</div>}><Component /></Suspense>");
    record24.set("keyPoints", ["code splitting reduces initial bundle", "lazy loading defers non-critical code", "image optimization reduces file size"]);
    record24.set("relatedTopics", ["bundle size", "caching", "CDN", "compression"]);
    record24.set("difficulty", "Hard");
    record24.set("category", "Performance Optimization");
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
    record25.set("level", "Advanced");
    record25.set("questionNumber", 26);
    record25.set("question", "What are design patterns in JavaScript and give examples.");
    record25.set("explanation", "Design patterns are reusable solutions to common problems. Common patterns include Singleton (one instance), Factory (create objects), Observer (event system), and Module (encapsulation). Patterns improve code organization and maintainability.");
    record25.set("practicalExample", "// Singleton: const singleton = (() => { let instance; return { getInstance: () => { if(!instance) instance = {}; return instance; } }; })();");
    record25.set("keyPoints", ["Singleton for single instance", "Factory for object creation", "Observer for event systems"]);
    record25.set("relatedTopics", ["Singleton", "Factory", "Observer", "Module pattern"]);
    record25.set("difficulty", "Hard");
    record25.set("category", "Design Patterns");
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
    record26.set("level", "Advanced");
    record26.set("questionNumber", 27);
    record26.set("question", "How do you handle errors and exceptions in JavaScript?");
    record26.set("explanation", "Use try/catch for synchronous errors, .catch() for Promise rejections, and error boundaries in React for component errors. Proper error handling improves user experience and aids debugging. Always provide meaningful error messages.");
    record26.set("practicalExample", "try { riskyOperation(); } catch(error) { console.error('Error:', error.message); } finally { cleanup(); }");
    record26.set("keyPoints", ["try/catch for synchronous errors", ".catch() for Promise rejections", "error boundaries in React"]);
    record26.set("relatedTopics", ["error boundaries", "Promise.catch", "error logging"]);
    record26.set("difficulty", "Hard");
    record26.set("category", "Error Handling");
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
    record27.set("question", "What is the Fetch API and how do you use it?");
    record27.set("explanation", "Fetch API provides a modern way to make HTTP requests. It returns a Promise that resolves to a Response object. Always check response.ok and handle errors properly. Fetch is the standard replacement for XMLHttpRequest.");
    record27.set("practicalExample", "fetch('/api/data', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({data}) }).then(r => r.json()).catch(e => console.error(e));");
    record27.set("keyPoints", ["Fetch returns a Promise", "check response.ok for HTTP errors", "always handle errors"]);
    record27.set("relatedTopics", ["async/await", "error handling", "HTTP methods"]);
    record27.set("difficulty", "Medium");
    record27.set("category", "Browser APIs");
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
    record28.set("level", "Beginner");
    record28.set("questionNumber", 29);
    record28.set("question", "What is localStorage and how do you use it?");
    record28.set("explanation", "localStorage stores key-value pairs persistently on the client. Data persists across browser sessions. Use for user preferences, cache, or temporary data. Limited to ~5-10MB per domain. Not suitable for sensitive data.");
    record28.set("practicalExample", "localStorage.setItem('theme', 'dark'); const theme = localStorage.getItem('theme'); localStorage.removeItem('theme'); localStorage.clear();");
    record28.set("keyPoints", ["localStorage persists across sessions", "limited to ~5-10MB", "synchronous API", "not for sensitive data"]);
    record28.set("relatedTopics", ["sessionStorage", "IndexedDB", "cookies"]);
    record28.set("difficulty", "Simple");
    record28.set("category", "Browser APIs");
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
    record29.set("level", "Advanced");
    record29.set("questionNumber", 30);
    record29.set("question", "Explain the concept of memoization and how it improves performance.");
    record29.set("explanation", "Memoization caches function results based on inputs to avoid redundant calculations. In React, useMemo and React.memo prevent unnecessary re-renders. Memoization trades memory for speed and is useful for expensive computations.");
    record29.set("practicalExample", "const memoizedValue = useMemo(() => expensiveCalculation(a, b), [a, b]); const MemoComponent = React.memo(Component);");
    record29.set("keyPoints", ["memoization caches results", "useMemo for expensive calculations", "React.memo prevents re-renders"]);
    record29.set("relatedTopics", ["useMemo", "useCallback", "React.memo"]);
    record29.set("difficulty", "Hard");
    record29.set("category", "Performance Optimization");
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
    record30.set("level", "Advanced");
    record30.set("questionNumber", 31);
    record30.set("question", "What is a service worker and how does it enable offline functionality?");
    record30.set("explanation", "Service workers are scripts that run in the background, separate from the main thread. They intercept network requests, enable offline functionality, and handle push notifications. Essential for Progressive Web Apps (PWAs).");
    record30.set("practicalExample", "navigator.serviceWorker.register('/sw.js'); // In sw.js: self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))); });");
    record30.set("keyPoints", ["service workers run in background", "intercept network requests", "enable offline functionality"]);
    record30.set("relatedTopics", ["PWA", "caching strategies", "push notifications"]);
    record30.set("difficulty", "Hard");
    record30.set("category", "Browser APIs");
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
    record31.set("question", "How do you optimize images for web performance?");
    record31.set("explanation", "Use modern formats (WebP), compress images, serve responsive images with srcset, use lazy loading, and choose appropriate dimensions. Image optimization significantly reduces page load time and bandwidth usage.");
    record31.set("practicalExample", "<img src='image.jpg' srcset='image-small.jpg 480w, image-large.jpg 1200w' sizes='(max-width: 600px) 480px, 1200px' loading='lazy' />");
    record31.set("keyPoints", ["use modern formats like WebP", "compress images", "responsive images with srcset", "lazy loading"]);
    record31.set("relatedTopics", ["WebP format", "image compression", "CDN"]);
    record31.set("difficulty", "Medium");
    record31.set("category", "Performance Optimization");
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
    record32.set("question", "What is the difference between synchronous and asynchronous code?");
    record32.set("explanation", "Synchronous code executes line by line, blocking until each operation completes. Asynchronous code doesn't block, allowing other code to run while waiting. Asynchronous is essential for I/O operations like network requests.");
    record32.set("practicalExample", "// Synchronous: const data = fetchData(); // blocks. // Asynchronous: fetchData().then(data => console.log(data)); // doesn't block");
    record32.set("keyPoints", ["synchronous blocks execution", "asynchronous doesn't block", "callbacks, Promises, async/await for async"]);
    record32.set("relatedTopics", ["promises", "async/await", "callbacks"]);
    record32.set("difficulty", "Medium");
    record32.set("category", "JavaScript Fundamentals");
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
    record33.set("level", "Advanced");
    record33.set("questionNumber", 34);
    record33.set("question", "Explain the concept of higher-order functions and their use cases.");
    record33.set("explanation", "Higher-order functions take functions as arguments or return functions. They enable functional programming patterns like map, filter, reduce. Useful for composition, abstraction, and creating reusable logic.");
    record33.set("practicalExample", "const map = (fn, arr) => arr.map(fn); const add = (a, b) => a + b; const curry = (fn) => (a) => (b) => fn(a, b);");
    record33.set("keyPoints", ["higher-order functions take/return functions", "enable functional programming", "useful for composition"]);
    record33.set("relatedTopics", ["functional programming", "currying", "composition"]);
    record33.set("difficulty", "Hard");
    record33.set("category", "JavaScript Fundamentals");
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
    record34.set("question", "What is the difference between map, filter, and reduce?");
    record34.set("explanation", "map transforms each element, filter selects elements matching a condition, reduce combines elements into a single value. These are fundamental array methods for functional programming.");
    record34.set("practicalExample", "const nums = [1, 2, 3]; nums.map(n => n * 2); // [2, 4, 6]. nums.filter(n => n > 1); // [2, 3]. nums.reduce((sum, n) => sum + n, 0); // 6");
    record34.set("keyPoints", ["map transforms elements", "filter selects elements", "reduce combines into single value"]);
    record34.set("relatedTopics", ["functional programming", "array methods"]);
    record34.set("difficulty", "Medium");
    record34.set("category", "JavaScript Fundamentals");
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
    record35.set("level", "Advanced");
    record35.set("questionNumber", 36);
    record35.set("question", "How do you implement debouncing and throttling?");
    record35.set("explanation", "Debouncing delays function execution until after a specified time has passed since the last call. Throttling limits function execution to once per specified time interval. Both improve performance for frequent events like scroll or resize.");
    record35.set("practicalExample", "const debounce = (fn, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => fn(...args), delay); }; }");
    record35.set("keyPoints", ["debouncing delays execution", "throttling limits frequency", "useful for scroll/resize events"]);
    record35.set("relatedTopics", ["performance optimization", "event handling"]);
    record35.set("difficulty", "Hard");
    record35.set("category", "Performance Optimization");
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
    record36.set("question", "What is the spread operator and how do you use it?");
    record36.set("explanation", "The spread operator (...) expands iterables into individual elements. Used for copying arrays/objects, merging, and passing arguments. Essential for immutable updates in React.");
    record36.set("practicalExample", "const arr = [1, 2, 3]; const copy = [...arr]; const merged = [...arr, 4, 5]; const obj = {a: 1}; const newObj = {...obj, b: 2};");
    record36.set("keyPoints", ["spread operator expands iterables", "used for copying and merging", "enables immutable updates"]);
    record36.set("relatedTopics", ["destructuring", "immutability"]);
    record36.set("difficulty", "Medium");
    record36.set("category", "JavaScript Fundamentals");
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
    record37.set("question", "Explain destructuring in JavaScript.");
    record37.set("explanation", "Destructuring extracts values from arrays or properties from objects into distinct variables. It simplifies code and improves readability. Works with function parameters for cleaner APIs.");
    record37.set("practicalExample", "const {name, age} = {name: 'John', age: 30}; const [a, b] = [1, 2]; function greet({name, age}) { console.log(name, age); }");
    record37.set("keyPoints", ["destructuring extracts values", "works with objects and arrays", "simplifies code"]);
    record37.set("relatedTopics", ["spread operator", "rest parameters"]);
    record37.set("difficulty", "Medium");
    record37.set("category", "JavaScript Fundamentals");
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
    record38.set("level", "Advanced");
    record38.set("questionNumber", 39);
    record38.set("question", "What is the difference between composition and inheritance?");
    record38.set("explanation", "Composition combines objects/functions to build complex behavior. Inheritance creates hierarchies where child classes inherit from parents. Composition is more flexible and avoids fragile base class problems.");
    record38.set("practicalExample", "// Composition: const canEat = (state) => ({ eat: () => state.energy -= 10 }); const person = {...canEat(state)}; // Inheritance: class Animal {} class Dog extends Animal {}");
    record38.set("keyPoints", ["composition combines objects", "inheritance creates hierarchies", "composition is more flexible"]);
    record38.set("relatedTopics", ["OOP", "design patterns"]);
    record38.set("difficulty", "Hard");
    record38.set("category", "Design Patterns");
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
    record39.set("question", "How do you handle form validation in React?");
    record39.set("explanation", "Validate on change for real-time feedback or on submit for batch validation. Use controlled components to manage form state. Libraries like Formik or React Hook Form simplify complex forms.");
    record39.set("practicalExample", "const [email, setEmail] = useState(''); const [error, setError] = useState(''); const handleChange = (e) => { setEmail(e.target.value); setError(e.target.value.includes('@') ? '' : 'Invalid email'); };");
    record39.set("keyPoints", ["controlled components for form state", "validate on change or submit", "use libraries for complex forms"]);
    record39.set("relatedTopics", ["controlled components", "Formik", "React Hook Form"]);
    record39.set("difficulty", "Medium");
    record39.set("category", "React Concepts");
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
    record40.set("question", "Explain the concept of immutability and why it matters in React.");
    record40.set("explanation", "Immutability means not modifying data directly. React relies on immutability to detect changes efficiently. Immutable updates prevent bugs and enable time-travel debugging. Use spread operator or libraries like Immer.");
    record40.set("practicalExample", "// Wrong: state.user.name = 'John'; // Right: setState({...state, user: {...state.user, name: 'John'}});");
    record40.set("keyPoints", ["immutability prevents bugs", "React detects changes via reference", "use spread operator for updates"]);
    record40.set("relatedTopics", ["state management", "spread operator", "Immer"]);
    record40.set("difficulty", "Hard");
    record40.set("category", "React Concepts");
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
    record41.set("question", "What is code splitting and how do you implement it in React?");
    record41.set("explanation", "Code splitting divides code into chunks loaded on demand. Reduces initial bundle size and improves load time. Implement using React.lazy and Suspense for route-based or component-based splitting.");
    record41.set("practicalExample", "const LazyComponent = React.lazy(() => import('./Component')); <Suspense fallback={<Loading />}><LazyComponent /></Suspense>");
    record41.set("keyPoints", ["code splitting reduces bundle size", "lazy loading defers non-critical code", "Suspense for loading states"]);
    record41.set("relatedTopics", ["bundling", "webpack", "performance"]);
    record41.set("difficulty", "Hard");
    record41.set("category", "Performance Optimization");
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
    record42.set("level", "Intermediate");
    record42.set("questionNumber", 43);
    record42.set("question", "How do you test React components?");
    record42.set("explanation", "Use testing libraries like Jest and React Testing Library. Test behavior, not implementation. Write unit tests for components, integration tests for features, and E2E tests for user flows.");
    record42.set("practicalExample", "test('button increments count', () => { render(<Counter />); const button = screen.getByRole('button'); fireEvent.click(button); expect(screen.getByText('1')).toBeInTheDocument(); });");
    record42.set("keyPoints", ["test behavior, not implementation", "use React Testing Library", "write unit, integration, E2E tests"]);
    record42.set("relatedTopics", ["Jest", "React Testing Library", "E2E testing"]);
    record42.set("difficulty", "Medium");
    record42.set("category", "Testing");
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
    record43.set("question", "Explain the concept of render props and custom hooks.");
    record43.set("explanation", "Render props pass a function as a prop to share state/logic. Custom hooks extract component logic into reusable functions. Both enable code reuse. Custom hooks are generally preferred for cleaner syntax.");
    record43.set("practicalExample", "// Render props: <Mouse render={mouse => <p>{mouse.x}</p>} /> // Custom hook: const mouse = useMouse(); <p>{mouse.x}</p>");
    record43.set("keyPoints", ["render props share logic via functions", "custom hooks extract reusable logic", "custom hooks preferred for syntax"]);
    record43.set("relatedTopics", ["hooks", "code reuse", "composition"]);
    record43.set("difficulty", "Hard");
    record43.set("category", "React Concepts");
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
    record44.set("question", "What is the useCallback hook and when should you use it?");
    record44.set("explanation", "useCallback memoizes a function to prevent unnecessary re-renders of child components that depend on it. Use when passing callbacks to optimized child components or as dependencies in other hooks.");
    record44.set("practicalExample", "const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]); <ChildComponent onClick={memoizedCallback} />");
    record44.set("keyPoints", ["useCallback memoizes functions", "prevents unnecessary re-renders", "use with optimized children"]);
    record44.set("relatedTopics", ["useMemo", "React.memo", "performance"]);
    record44.set("difficulty", "Hard");
    record44.set("category", "React Concepts");
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
    record45.set("level", "Intermediate");
    record45.set("questionNumber", 46);
    record45.set("question", "How do you handle authentication in a frontend application?");
    record45.set("explanation", "Store tokens (JWT) securely, typically in httpOnly cookies or localStorage. Include tokens in request headers. Handle token refresh and expiration. Implement logout by clearing tokens. Protect routes based on authentication state.");
    record45.set("practicalExample", "const token = localStorage.getItem('token'); fetch('/api/data', { headers: { 'Authorization': `Bearer ${token}` } });");
    record45.set("keyPoints", ["store tokens securely", "include in request headers", "handle token refresh", "protect routes"]);
    record45.set("relatedTopics", ["JWT", "OAuth", "session management"]);
    record45.set("difficulty", "Medium");
    record45.set("category", "Security");
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
    record46.set("question", "Explain the concept of tree shaking and how it reduces bundle size.");
    record46.set("explanation", "Tree shaking removes unused code during bundling. Modern bundlers like webpack detect unused exports and exclude them. Use ES6 modules for tree shaking to work. Significantly reduces bundle size.");
    record46.set("practicalExample", "// utils.js: export const used = () => {}; export const unused = () => {}; // main.js: import { used } from './utils'; // unused is tree-shaken");
    record46.set("keyPoints", ["tree shaking removes unused code", "requires ES6 modules", "reduces bundle size"]);
    record46.set("relatedTopics", ["bundling", "webpack", "ES6 modules"]);
    record46.set("difficulty", "Hard");
    record46.set("category", "Performance Optimization");
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
    record47.set("level", "Intermediate");
    record47.set("questionNumber", 48);
    record47.set("question", "What is CORS and how do you handle it?");
    record47.set("explanation", "CORS (Cross-Origin Resource Sharing) controls which origins can access resources. Browsers enforce CORS for security. Handle by configuring server headers or using JSONP/proxies. Understanding CORS is essential for API integration.");
    record47.set("practicalExample", "// Server: res.setHeader('Access-Control-Allow-Origin', '*'); // Client: fetch('/api/data', { mode: 'cors' });");
    record47.set("keyPoints", ["CORS controls cross-origin access", "browser enforces CORS", "configure server headers"]);
    record47.set("relatedTopics", ["same-origin policy", "preflight requests"]);
    record47.set("difficulty", "Medium");
    record47.set("category", "Security");
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
    record48.set("question", "How do you implement infinite scroll or pagination?");
    record48.set("explanation", "Infinite scroll loads more content as user scrolls. Pagination divides content into pages. Use Intersection Observer API for efficient infinite scroll. Both improve performance by loading data on demand.");
    record48.set("practicalExample", "const observer = new IntersectionObserver(entries => { if(entries[0].isIntersecting) loadMore(); }); observer.observe(lastElement);");
    record48.set("keyPoints", ["Intersection Observer for infinite scroll", "pagination divides content", "load on demand"]);
    record48.set("relatedTopics", ["Intersection Observer", "performance"]);
    record48.set("difficulty", "Hard");
    record48.set("category", "Performance Optimization");
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
    record49.set("question", "Explain the concept of micro frontends and when to use them.");
    record49.set("explanation", "Micro frontends divide frontend into independent, deployable modules. Each team owns a module. Enables scalability and independent deployment. Use for large teams or complex applications. Adds complexity, so use judiciously.");
    record49.set("practicalExample", "// Module Federation in webpack: new ModuleFederationPlugin({ name: 'app1', filename: 'remoteEntry.js', exposes: { './Button': './src/Button' } })");
    record49.set("keyPoints", ["micro frontends divide frontend into modules", "independent deployment", "enables team scalability"]);
    record49.set("relatedTopics", ["module federation", "monorepo", "architecture"]);
    record49.set("difficulty", "Hard");
    record49.set("category", "Architecture");
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
