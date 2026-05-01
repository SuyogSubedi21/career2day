/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerRoadmaps");

  const record0 = new Record(collection);
    record0.set("careerSlug", "frontend-developer");
    record0.set("phase", 1);
    record0.set("phaseTitle", "HTML & CSS Fundamentals");
    record0.set("duration", 4);
    record0.set("skills", ["HTML5", "CSS3", "Responsive Design", "Flexbox", "Grid"]);
    record0.set("resources", [{"name": "MDN Web Docs", "type": "documentation", "url": "https://developer.mozilla.org", "isFree": true}, {"name": "FreeCodeCamp HTML/CSS Course", "type": "video", "url": "https://freecodecamp.org", "isFree": true}, {"name": "CSS Tricks", "type": "blog", "url": "https://css-tricks.com", "isFree": true}]);
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
    record1.set("phase", 2);
    record1.set("phaseTitle", "JavaScript Essentials");
    record1.set("duration", 6);
    record1.set("skills", ["JavaScript Basics", "DOM Manipulation", "ES6+", "Async/Await", "Fetch API"]);
    record1.set("resources", [{"name": "JavaScript.info", "type": "tutorial", "url": "https://javascript.info", "isFree": true}, {"name": "Eloquent JavaScript Book", "type": "book", "url": "https://eloquentjavascript.net", "isFree": true}, {"name": "Codecademy JavaScript", "type": "course", "url": "https://codecademy.com", "isFree": false}]);
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
    record2.set("phase", 3);
    record2.set("phaseTitle", "React Fundamentals");
    record2.set("duration", 6);
    record2.set("skills", ["React Basics", "JSX", "Components", "Hooks", "State Management"]);
    record2.set("resources", [{"name": "React Official Docs", "type": "documentation", "url": "https://react.dev", "isFree": true}, {"name": "React Tutorial", "type": "video", "url": "https://scrimba.com/learn/react", "isFree": false}, {"name": "React Patterns", "type": "blog", "url": "https://patterns.dev", "isFree": true}]);
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
    record3.set("phase", 4);
    record3.set("phaseTitle", "State Management & Advanced React");
    record3.set("duration", 5);
    record3.set("skills", ["Redux", "Context API", "React Router", "Performance Optimization", "Testing"]);
    record3.set("resources", [{"name": "Redux Documentation", "type": "documentation", "url": "https://redux.js.org", "isFree": true}, {"name": "Testing Library", "type": "documentation", "url": "https://testing-library.com", "isFree": true}, {"name": "Advanced React Course", "type": "course", "url": "https://epicreact.dev", "isFree": false}]);
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
    record4.set("phase", 5);
    record4.set("phaseTitle", "Build Tools & Deployment");
    record4.set("duration", 4);
    record4.set("skills", ["Webpack", "Vite", "npm/yarn", "Git", "CI/CD", "Deployment"]);
    record4.set("resources", [{"name": "Webpack Documentation", "type": "documentation", "url": "https://webpack.js.org", "isFree": true}, {"name": "Vite Guide", "type": "documentation", "url": "https://vitejs.dev", "isFree": true}, {"name": "Git & GitHub", "type": "course", "url": "https://github.com/skills", "isFree": true}]);
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
    record5.set("phase", 6);
    record5.set("phaseTitle", "Portfolio Projects & Interview Prep");
    record5.set("duration", 8);
    record5.set("skills", ["Project Planning", "Code Quality", "Performance", "Accessibility", "Interview Skills"]);
    record5.set("resources", [{"name": "Frontend Interview Handbook", "type": "guide", "url": "https://frontendinterviewhandbook.com", "isFree": true}, {"name": "LeetCode", "type": "practice", "url": "https://leetcode.com", "isFree": false}, {"name": "System Design Primer", "type": "guide", "url": "https://github.com/donnemartin/system-design-primer", "isFree": true}]);
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
    record6.set("careerSlug", "backend-developer");
    record6.set("phase", 1);
    record6.set("phaseTitle", "Programming Fundamentals");
    record6.set("duration", 5);
    record6.set("skills", ["Variables", "Data Types", "Control Flow", "Functions", "OOP Basics"]);
    record6.set("resources", [{"name": "Python Official Docs", "type": "documentation", "url": "https://python.org", "isFree": true}, {"name": "Codecademy Python", "type": "course", "url": "https://codecademy.com", "isFree": false}, {"name": "Real Python", "type": "tutorial", "url": "https://realpython.com", "isFree": true}]);
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
    record7.set("careerSlug", "backend-developer");
    record7.set("phase", 2);
    record7.set("phaseTitle", "Web Frameworks");
    record7.set("duration", 6);
    record7.set("skills", ["Flask/Django", "Routing", "Middleware", "Request Handling", "Error Handling"]);
    record7.set("resources", [{"name": "Django Documentation", "type": "documentation", "url": "https://djangoproject.com", "isFree": true}, {"name": "Flask Mega-Tutorial", "type": "tutorial", "url": "https://blog.miguelgrinberg.com", "isFree": true}, {"name": "Full Stack Python", "type": "guide", "url": "https://fullstackpython.com", "isFree": true}]);
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
    record8.set("careerSlug", "backend-developer");
    record8.set("phase", 3);
    record8.set("phaseTitle", "Databases & SQL");
    record8.set("duration", 5);
    record8.set("skills", ["SQL", "Database Design", "Normalization", "Indexing", "Query Optimization"]);
    record8.set("resources", [{"name": "SQL Tutorial", "type": "tutorial", "url": "https://sqlzoo.net", "isFree": true}, {"name": "PostgreSQL Docs", "type": "documentation", "url": "https://postgresql.org", "isFree": true}, {"name": "Database Design Course", "type": "course", "url": "https://udemy.com", "isFree": false}]);
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
    record9.set("careerSlug", "backend-developer");
    record9.set("phase", 4);
    record9.set("phaseTitle", "APIs & Authentication");
    record9.set("duration", 5);
    record9.set("skills", ["REST APIs", "GraphQL", "JWT", "OAuth", "API Security"]);
    record9.set("resources", [{"name": "REST API Best Practices", "type": "guide", "url": "https://restfulapi.net", "isFree": true}, {"name": "GraphQL Tutorial", "type": "tutorial", "url": "https://graphql.org/learn", "isFree": true}, {"name": "Auth0 Documentation", "type": "documentation", "url": "https://auth0.com/docs", "isFree": true}]);
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
    record10.set("careerSlug", "backend-developer");
    record10.set("phase", 5);
    record10.set("phaseTitle", "Caching & Performance");
    record10.set("duration", 4);
    record10.set("skills", ["Redis", "Caching Strategies", "Load Balancing", "Monitoring", "Logging"]);
    record10.set("resources", [{"name": "Redis Documentation", "type": "documentation", "url": "https://redis.io", "isFree": true}, {"name": "System Design Interview", "type": "course", "url": "https://educative.io", "isFree": false}, {"name": "Prometheus Monitoring", "type": "documentation", "url": "https://prometheus.io", "isFree": true}]);
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
    record11.set("careerSlug", "backend-developer");
    record11.set("phase", 6);
    record11.set("phaseTitle", "Deployment & DevOps");
    record11.set("duration", 6);
    record11.set("skills", ["Docker", "Kubernetes", "CI/CD", "Cloud Platforms", "Infrastructure as Code"]);
    record11.set("resources", [{"name": "Docker Documentation", "type": "documentation", "url": "https://docker.com", "isFree": true}, {"name": "Kubernetes Tutorial", "type": "tutorial", "url": "https://kubernetes.io/docs", "isFree": true}, {"name": "AWS Free Tier", "type": "platform", "url": "https://aws.amazon.com/free", "isFree": true}]);
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
    record12.set("careerSlug", "react-developer");
    record12.set("phase", 1);
    record12.set("phaseTitle", "JavaScript & ES6+ Mastery");
    record12.set("duration", 5);
    record12.set("skills", ["ES6+ Features", "Arrow Functions", "Destructuring", "Spread Operator", "Promises"]);
    record12.set("resources", [{"name": "JavaScript.info", "type": "tutorial", "url": "https://javascript.info", "isFree": true}, {"name": "You Don't Know JS", "type": "book", "url": "https://github.com/getify/You-Dont-Know-JS", "isFree": true}, {"name": "Scrimba JavaScript", "type": "course", "url": "https://scrimba.com", "isFree": false}]);
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
    record13.set("careerSlug", "react-developer");
    record13.set("phase", 2);
    record13.set("phaseTitle", "React Core Concepts");
    record13.set("duration", 6);
    record13.set("skills", ["Components", "JSX", "Props", "State", "Lifecycle Methods", "Hooks"]);
    record13.set("resources", [{"name": "React Official Tutorial", "type": "tutorial", "url": "https://react.dev/learn", "isFree": true}, {"name": "React Patterns", "type": "guide", "url": "https://patterns.dev/posts/react-patterns", "isFree": true}, {"name": "Epic React", "type": "course", "url": "https://epicreact.dev", "isFree": false}]);
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
    record14.set("careerSlug", "react-developer");
    record14.set("phase", 3);
    record14.set("phaseTitle", "Advanced Hooks & Performance");
    record14.set("duration", 5);
    record14.set("skills", ["useEffect", "useContext", "useReducer", "Custom Hooks", "Memoization", "Code Splitting"]);
    record14.set("resources", [{"name": "React Hooks Documentation", "type": "documentation", "url": "https://react.dev/reference/react/hooks", "isFree": true}, {"name": "Advanced React Patterns", "type": "course", "url": "https://egghead.io", "isFree": false}, {"name": "React Performance", "type": "guide", "url": "https://web.dev/react", "isFree": true}]);
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
    record15.set("careerSlug", "react-developer");
    record15.set("phase", 4);
    record15.set("phaseTitle", "State Management Solutions");
    record15.set("duration", 5);
    record15.set("skills", ["Redux", "Redux Toolkit", "Zustand", "Jotai", "Context API"]);
    record15.set("resources", [{"name": "Redux Documentation", "type": "documentation", "url": "https://redux.js.org", "isFree": true}, {"name": "Redux Toolkit", "type": "documentation", "url": "https://redux-toolkit.js.org", "isFree": true}, {"name": "State Management Comparison", "type": "guide", "url": "https://github.com/pmndrs", "isFree": true}]);
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
    record16.set("careerSlug", "react-developer");
    record16.set("phase", 5);
    record16.set("phaseTitle", "Testing & Quality Assurance");
    record16.set("duration", 4);
    record16.set("skills", ["Jest", "React Testing Library", "E2E Testing", "Cypress", "Test Coverage"]);
    record16.set("resources", [{"name": "Testing Library Docs", "type": "documentation", "url": "https://testing-library.com", "isFree": true}, {"name": "Jest Documentation", "type": "documentation", "url": "https://jestjs.io", "isFree": true}, {"name": "Cypress Tutorial", "type": "tutorial", "url": "https://cypress.io/app/onboarding", "isFree": true}]);
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
    record17.set("careerSlug", "react-developer");
    record17.set("phase", 6);
    record17.set("phaseTitle", "Production & Deployment");
    record17.set("duration", 5);
    record17.set("skills", ["Next.js", "Build Optimization", "SEO", "Analytics", "Monitoring", "Deployment"]);
    record17.set("resources", [{"name": "Next.js Documentation", "type": "documentation", "url": "https://nextjs.org", "isFree": true}, {"name": "Vercel Deployment", "type": "guide", "url": "https://vercel.com/docs", "isFree": true}, {"name": "Web Vitals", "type": "guide", "url": "https://web.dev/vitals", "isFree": true}]);
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
    record18.set("careerSlug", "python-developer");
    record18.set("phase", 1);
    record18.set("phaseTitle", "Python Fundamentals");
    record18.set("duration", 5);
    record18.set("skills", ["Syntax", "Data Types", "Control Flow", "Functions", "Modules"]);
    record18.set("resources", [{"name": "Python.org Tutorial", "type": "tutorial", "url": "https://python.org/tutorial", "isFree": true}, {"name": "Automate the Boring Stuff", "type": "book", "url": "https://automatetheboringstuff.com", "isFree": true}, {"name": "Real Python", "type": "tutorial", "url": "https://realpython.com", "isFree": true}]);
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
    record19.set("careerSlug", "python-developer");
    record19.set("phase", 2);
    record19.set("phaseTitle", "Object-Oriented Programming");
    record19.set("duration", 4);
    record19.set("skills", ["Classes", "Inheritance", "Polymorphism", "Encapsulation", "Design Patterns"]);
    record19.set("resources", [{"name": "OOP in Python", "type": "tutorial", "url": "https://realpython.com/python3-object-oriented-programming", "isFree": true}, {"name": "Design Patterns", "type": "book", "url": "https://refactoring.guru/design-patterns/python", "isFree": true}, {"name": "SOLID Principles", "type": "guide", "url": "https://en.wikipedia.org/wiki/SOLID", "isFree": true}]);
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
    record20.set("careerSlug", "python-developer");
    record20.set("phase", 3);
    record20.set("phaseTitle", "Web Development with Django");
    record20.set("duration", 6);
    record20.set("skills", ["Django Basics", "Models", "Views", "Templates", "ORM", "Admin Panel"]);
    record20.set("resources", [{"name": "Django Documentation", "type": "documentation", "url": "https://djangoproject.com", "isFree": true}, {"name": "Django for Beginners", "type": "book", "url": "https://djangoforbeginners.com", "isFree": false}, {"name": "Real Python Django", "type": "tutorial", "url": "https://realpython.com/django", "isFree": true}]);
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
    record21.set("careerSlug", "python-developer");
    record21.set("phase", 4);
    record21.set("phaseTitle", "Data Science & Libraries");
    record21.set("duration", 6);
    record21.set("skills", ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "Data Analysis"]);
    record21.set("resources", [{"name": "NumPy Documentation", "type": "documentation", "url": "https://numpy.org", "isFree": true}, {"name": "Pandas Tutorial", "type": "tutorial", "url": "https://pandas.pydata.org/docs", "isFree": true}, {"name": "Data Science Handbook", "type": "book", "url": "https://jakevdp.github.io/PythonDataScienceHandbook", "isFree": true}]);
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
    record22.set("careerSlug", "python-developer");
    record22.set("phase", 5);
    record22.set("phaseTitle", "Testing & Code Quality");
    record22.set("duration", 4);
    record22.set("skills", ["Unit Testing", "pytest", "Code Coverage", "Linting", "Type Hints"]);
    record22.set("resources", [{"name": "pytest Documentation", "type": "documentation", "url": "https://pytest.org", "isFree": true}, {"name": "Python Testing", "type": "tutorial", "url": "https://realpython.com/python-testing", "isFree": true}, {"name": "Type Hints", "type": "guide", "url": "https://peps.python.org/pep-0484", "isFree": true}]);
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
    record23.set("careerSlug", "python-developer");
    record23.set("phase", 6);
    record23.set("phaseTitle", "Deployment & Production");
    record23.set("duration", 5);
    record23.set("skills", ["Docker", "Gunicorn", "Nginx", "Cloud Deployment", "Monitoring"]);
    record23.set("resources", [{"name": "Docker for Python", "type": "guide", "url": "https://docker.com/blog/containerized-python", "isFree": true}, {"name": "Heroku Deployment", "type": "guide", "url": "https://heroku.com/python", "isFree": true}, {"name": "AWS for Python", "type": "guide", "url": "https://aws.amazon.com/python", "isFree": true}]);
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
    record24.set("careerSlug", "data-scientist");
    record24.set("phase", 1);
    record24.set("phaseTitle", "Python & Statistics Fundamentals");
    record24.set("duration", 6);
    record24.set("skills", ["Python", "Statistics", "Probability", "Linear Algebra", "Calculus"]);
    record24.set("resources", [{"name": "Statistics Handbook", "type": "book", "url": "https://seeing-theory.brown.edu", "isFree": true}, {"name": "Khan Academy Statistics", "type": "course", "url": "https://khanacademy.org", "isFree": true}, {"name": "3Blue1Brown Linear Algebra", "type": "video", "url": "https://youtube.com/3blue1brown", "isFree": true}]);
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
    record25.set("careerSlug", "data-scientist");
    record25.set("phase", 2);
    record25.set("phaseTitle", "Data Manipulation & Visualization");
    record25.set("duration", 5);
    record25.set("skills", ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"]);
    record25.set("resources", [{"name": "Pandas Documentation", "type": "documentation", "url": "https://pandas.pydata.org", "isFree": true}, {"name": "Data Visualization", "type": "course", "url": "https://coursera.org", "isFree": false}, {"name": "Matplotlib Tutorial", "type": "tutorial", "url": "https://matplotlib.org/stable/tutorials", "isFree": true}]);
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
    record26.set("careerSlug", "data-scientist");
    record26.set("phase", 3);
    record26.set("phaseTitle", "Machine Learning Fundamentals");
    record26.set("duration", 7);
    record26.set("skills", ["Supervised Learning", "Unsupervised Learning", "Scikit-learn", "Model Evaluation", "Feature Engineering"]);
    record26.set("resources", [{"name": "Scikit-learn Documentation", "type": "documentation", "url": "https://scikit-learn.org", "isFree": true}, {"name": "Andrew Ng ML Course", "type": "course", "url": "https://coursera.org/learn/machine-learning", "isFree": false}, {"name": "ML Mastery", "type": "blog", "url": "https://machinelearningmastery.com", "isFree": true}]);
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
    record27.set("careerSlug", "data-scientist");
    record27.set("phase", 4);
    record27.set("phaseTitle", "Deep Learning & Neural Networks");
    record27.set("duration", 7);
    record27.set("skills", ["TensorFlow", "Keras", "PyTorch", "CNNs", "RNNs", "Transformers"]);
    record27.set("resources", [{"name": "TensorFlow Documentation", "type": "documentation", "url": "https://tensorflow.org", "isFree": true}, {"name": "Fast.ai Course", "type": "course", "url": "https://fast.ai", "isFree": true}, {"name": "PyTorch Tutorials", "type": "tutorial", "url": "https://pytorch.org/tutorials", "isFree": true}]);
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
    record28.set("careerSlug", "data-scientist");
    record28.set("phase", 5);
    record28.set("phaseTitle", "NLP & Advanced Topics");
    record28.set("duration", 6);
    record28.set("skills", ["NLP", "BERT", "GPT", "Transformers", "LLMs", "Prompt Engineering"]);
    record28.set("resources", [{"name": "Hugging Face Course", "type": "course", "url": "https://huggingface.co/course", "isFree": true}, {"name": "NLP with Transformers", "type": "book", "url": "https://huggingface.co/course", "isFree": true}, {"name": "OpenAI API", "type": "documentation", "url": "https://openai.com/docs", "isFree": true}]);
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
    record29.set("careerSlug", "data-scientist");
    record29.set("phase", 6);
    record29.set("phaseTitle", "Production & Deployment");
    record29.set("duration", 5);
    record29.set("skills", ["Model Deployment", "MLOps", "Docker", "Cloud Platforms", "Monitoring"]);
    record29.set("resources", [{"name": "MLflow Documentation", "type": "documentation", "url": "https://mlflow.org", "isFree": true}, {"name": "Hugging Face Inference", "type": "guide", "url": "https://huggingface.co/inference-api", "isFree": true}, {"name": "AWS SageMaker", "type": "guide", "url": "https://aws.amazon.com/sagemaker", "isFree": true}]);
  try {
    app.save(record29);
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
