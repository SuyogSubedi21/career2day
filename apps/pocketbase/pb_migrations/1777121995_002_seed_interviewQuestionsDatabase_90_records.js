/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("interviewQuestionsDatabase");

  const record0 = new Record(collection);
    record0.set("careerSlug", "software-engineer");
    record0.set("careerName", "Software Engineer");
    record0.set("level", "Beginner");
    record0.set("questionNumber", 1);
    record0.set("question", "What is the difference between a class and an object in object-oriented programming?");
    record0.set("explanation", "A class is a blueprint or template for creating objects. It defines the structure and behavior. An object is an instance of a class - a concrete realization of that blueprint with actual values.");
    record0.set("practicalExample", "Class: Car (defines properties like color, speed). Object: My red Toyota (specific instance with actual values).");
    record0.set("keyPoints", ["Class is abstract", "Object is concrete", "Class defines structure", "Object has state"]);
    record0.set("relatedTopics", ["OOP", "Inheritance", "Polymorphism"]);
    record0.set("difficulty", "Simple");
    record0.set("category", "Object-Oriented Programming");
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
    record1.set("question", "Explain the concept of inheritance in OOP.");
    record1.set("explanation", "Inheritance allows a class to inherit properties and methods from another class. The child class extends the parent class, promoting code reuse and establishing a hierarchical relationship.");
    record1.set("practicalExample", "Animal (parent) -> Dog (child inherits bark, eat methods)");
    record1.set("keyPoints", ["Code reuse", "Hierarchical relationship", "Parent-child relationship", "Method overriding"]);
    record1.set("relatedTopics", ["OOP", "Polymorphism", "Encapsulation"]);
    record1.set("difficulty", "Simple");
    record1.set("category", "Object-Oriented Programming");
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
    record2.set("question", "What is polymorphism?");
    record2.set("explanation", "Polymorphism means 'many forms'. It allows objects to take multiple forms and enables you to write flexible code that can work with objects of different types.");
    record2.set("practicalExample", "Shape class with draw() method - Circle, Square, Triangle all implement draw() differently");
    record2.set("keyPoints", ["Many forms", "Method overriding", "Method overloading", "Flexibility"]);
    record2.set("relatedTopics", ["OOP", "Inheritance", "Interfaces"]);
    record2.set("difficulty", "Simple");
    record2.set("category", "Object-Oriented Programming");
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
    record3.set("level", "Beginner");
    record3.set("questionNumber", 4);
    record3.set("question", "What is encapsulation?");
    record3.set("explanation", "Encapsulation is bundling data (variables) and methods together within a class, and hiding internal details from the outside world using access modifiers (private, public, protected).");
    record3.set("practicalExample", "Bank Account class with private balance variable, public deposit() and withdraw() methods");
    record3.set("keyPoints", ["Data hiding", "Access modifiers", "Bundling", "Security"]);
    record3.set("relatedTopics", ["OOP", "Abstraction", "Information hiding"]);
    record3.set("difficulty", "Simple");
    record3.set("category", "Object-Oriented Programming");
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
    record4.set("level", "Beginner");
    record4.set("questionNumber", 5);
    record4.set("question", "What is the difference between == and equals() in Java?");
    record4.set("explanation", "== compares object references (memory addresses), while equals() compares the actual content/values of objects. For strings and objects, equals() is usually the correct choice.");
    record4.set("practicalExample", "String s1 = new String('hello'); String s2 = new String('hello'); s1 == s2 is false, but s1.equals(s2) is true");
    record4.set("keyPoints", ["Reference comparison", "Value comparison", "String comparison", "Object comparison"]);
    record4.set("relatedTopics", ["Java", "String handling", "Object comparison"]);
    record4.set("difficulty", "Simple");
    record4.set("category", "Java Basics");
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
    record5.set("level", "Beginner");
    record5.set("questionNumber", 6);
    record5.set("question", "What is a constructor?");
    record5.set("explanation", "A constructor is a special method that is called when an object is created. It initializes the object's state and is used to set up initial values for object attributes.");
    record5.set("practicalExample", "public Car(String color) { this.color = color; } - initializes color when Car object is created");
    record5.set("keyPoints", ["Object initialization", "Same name as class", "No return type", "Can be overloaded"]);
    record5.set("relatedTopics", ["OOP", "Object creation", "Initialization"]);
    record5.set("difficulty", "Simple");
    record5.set("category", "Java Basics");
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
    record6.set("careerName", "Software Engineer");
    record6.set("level", "Beginner");
    record6.set("questionNumber", 7);
    record6.set("question", "What is the difference between ArrayList and LinkedList?");
    record6.set("explanation", "ArrayList uses dynamic arrays for storage (fast random access, slow insertion/deletion). LinkedList uses doubly-linked lists (slow random access, fast insertion/deletion at ends).");
    record6.set("practicalExample", "ArrayList: get(index) is O(1), add(element) is O(n). LinkedList: get(index) is O(n), add(element) is O(1)");
    record6.set("keyPoints", ["Array vs Linked", "Access time", "Insertion time", "Memory usage"]);
    record6.set("relatedTopics", ["Data Structures", "Collections", "Performance"]);
    record6.set("difficulty", "Simple");
    record6.set("category", "Data Structures");
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
    record7.set("careerName", "Software Engineer");
    record7.set("level", "Beginner");
    record7.set("questionNumber", 8);
    record7.set("question", "What is a HashMap and how does it work?");
    record7.set("explanation", "HashMap is a hash table based implementation of the Map interface. It stores key-value pairs and uses hashing to quickly locate values based on keys.");
    record7.set("practicalExample", "HashMap<String, Integer> map = new HashMap<>(); map.put('age', 25); int age = map.get('age');");
    record7.set("keyPoints", ["Key-value pairs", "Hashing", "O(1) average lookup", "No ordering"]);
    record7.set("relatedTopics", ["Data Structures", "Hash tables", "Collections"]);
    record7.set("difficulty", "Simple");
    record7.set("category", "Data Structures");
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
    record8.set("careerName", "Software Engineer");
    record8.set("level", "Beginner");
    record8.set("questionNumber", 9);
    record8.set("question", "What is the difference between abstract class and interface?");
    record8.set("explanation", "Abstract class can have concrete methods and state variables, while interface only has abstract methods (until Java 8). A class can implement multiple interfaces but extend only one class.");
    record8.set("practicalExample", "Abstract class Animal with concrete eat() method. Interface Drawable with abstract draw() method.");
    record8.set("keyPoints", ["Multiple inheritance", "Method implementation", "State variables", "Access modifiers"]);
    record8.set("relatedTopics", ["OOP", "Abstraction", "Polymorphism"]);
    record8.set("difficulty", "Simple");
    record8.set("category", "Object-Oriented Programming");
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
    record9.set("careerName", "Software Engineer");
    record9.set("level", "Beginner");
    record9.set("questionNumber", 10);
    record9.set("question", "What is exception handling and why is it important?");
    record9.set("explanation", "Exception handling is a mechanism to handle runtime errors gracefully using try-catch-finally blocks. It prevents program crashes and allows proper error recovery.");
    record9.set("practicalExample", "try { int x = 10/0; } catch (ArithmeticException e) { System.out.println('Cannot divide by zero'); }");
    record9.set("keyPoints", ["Error handling", "Try-catch-finally", "Graceful degradation", "Error recovery"]);
    record9.set("relatedTopics", ["Error handling", "Debugging", "Robustness"]);
    record9.set("difficulty", "Simple");
    record9.set("category", "Java Basics");
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
    record10.set("careerName", "Software Engineer");
    record10.set("level", "Beginner");
    record10.set("questionNumber", 11);
    record10.set("question", "What is the difference between checked and unchecked exceptions?");
    record10.set("explanation", "Checked exceptions must be caught or declared in method signature (IOException, SQLException). Unchecked exceptions don't require explicit handling (NullPointerException, ArithmeticException).");
    record10.set("practicalExample", "Checked: FileNotFoundException. Unchecked: ArrayIndexOutOfBoundsException");
    record10.set("keyPoints", ["Compile-time checking", "Runtime errors", "Declaration requirement", "Handling requirement"]);
    record10.set("relatedTopics", ["Exception handling", "Error types", "Java"]);
    record10.set("difficulty", "Simple");
    record10.set("category", "Java Basics");
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
    record11.set("careerName", "Software Engineer");
    record11.set("level", "Beginner");
    record11.set("questionNumber", 12);
    record11.set("question", "What is the purpose of the 'static' keyword?");
    record11.set("explanation", "Static keyword means the variable or method belongs to the class, not to instances. Static members are shared across all objects of the class.");
    record11.set("practicalExample", "static int count = 0; - shared by all instances. static void printCount() - can be called without creating object");
    record11.set("keyPoints", ["Class-level", "Shared across instances", "No object needed", "Memory efficiency"]);
    record11.set("relatedTopics", ["Java", "OOP", "Memory management"]);
    record11.set("difficulty", "Simple");
    record11.set("category", "Java Basics");
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
    record12.set("careerName", "Software Engineer");
    record12.set("level", "Beginner");
    record12.set("questionNumber", 13);
    record12.set("question", "What is the difference between String, StringBuilder, and StringBuffer?");
    record12.set("explanation", "String is immutable. StringBuilder is mutable and not thread-safe (faster). StringBuffer is mutable and thread-safe (slower). Use StringBuilder for single-threaded, StringBuffer for multi-threaded.");
    record12.set("practicalExample", "String s = 'hello'; s = s + 'world'; creates new object. StringBuilder sb = new StringBuilder('hello'); sb.append('world'); modifies same object");
    record12.set("keyPoints", ["Immutability", "Thread safety", "Performance", "Memory usage"]);
    record12.set("relatedTopics", ["String handling", "Performance", "Concurrency"]);
    record12.set("difficulty", "Simple");
    record12.set("category", "Java Basics");
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
    record13.set("careerName", "Software Engineer");
    record13.set("level", "Beginner");
    record13.set("questionNumber", 14);
    record13.set("question", "What is the difference between 'this' and 'super' keywords?");
    record13.set("explanation", "'this' refers to the current object instance. 'super' refers to the parent class. Both are used to access members of the current and parent classes respectively.");
    record13.set("practicalExample", "this.name = name; - current object. super.display(); - parent class method");
    record13.set("keyPoints", ["Current object", "Parent class", "Method calling", "Variable access"]);
    record13.set("relatedTopics", ["OOP", "Inheritance", "Java"]);
    record13.set("difficulty", "Simple");
    record13.set("category", "Java Basics");
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
    record14.set("careerName", "Software Engineer");
    record14.set("level", "Beginner");
    record14.set("questionNumber", 15);
    record14.set("question", "What is method overloading?");
    record14.set("explanation", "Method overloading allows multiple methods with the same name but different parameters (different type, number, or order). It's resolved at compile time.");
    record14.set("practicalExample", "add(int a, int b) and add(double a, double b) and add(int a, int b, int c)");
    record14.set("keyPoints", ["Same method name", "Different parameters", "Compile-time resolution", "Polymorphism"]);
    record14.set("relatedTopics", ["OOP", "Polymorphism", "Java"]);
    record14.set("difficulty", "Simple");
    record14.set("category", "Java Basics");
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
    record15.set("careerName", "Software Engineer");
    record15.set("level", "Beginner");
    record15.set("questionNumber", 16);
    record15.set("question", "What is method overriding?");
    record15.set("explanation", "Method overriding allows a subclass to provide a specific implementation of a method that is already defined in the parent class. It's resolved at runtime.");
    record15.set("practicalExample", "Parent: void display(). Child: @Override void display() - provides different implementation");
    record15.set("keyPoints", ["Same method signature", "Runtime resolution", "Inheritance", "Polymorphism"]);
    record15.set("relatedTopics", ["OOP", "Inheritance", "Polymorphism"]);
    record15.set("difficulty", "Simple");
    record15.set("category", "Java Basics");
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
    record16.set("careerName", "Software Engineer");
    record16.set("level", "Beginner");
    record16.set("questionNumber", 17);
    record16.set("question", "What is the difference between final, finally, and finalize?");
    record16.set("explanation", "final: keyword to restrict modification. finally: block that always executes in try-catch. finalize: method called by garbage collector before object destruction.");
    record16.set("practicalExample", "final int x = 10; try {} finally {} protected void finalize() {}");
    record16.set("keyPoints", ["Restriction", "Guaranteed execution", "Cleanup", "Garbage collection"]);
    record16.set("relatedTopics", ["Java", "Memory management", "Exception handling"]);
    record16.set("difficulty", "Simple");
    record16.set("category", "Java Basics");
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
    record17.set("careerName", "Software Engineer");
    record17.set("level", "Beginner");
    record17.set("questionNumber", 18);
    record17.set("question", "What is the purpose of the 'volatile' keyword?");
    record17.set("explanation", "volatile keyword ensures that a variable's value is always read from and written to main memory, not cached. It's used for variables accessed by multiple threads.");
    record17.set("practicalExample", "volatile boolean flag = false; - ensures all threads see the latest value");
    record17.set("keyPoints", ["Memory visibility", "Thread safety", "No caching", "Synchronization"]);
    record17.set("relatedTopics", ["Concurrency", "Multi-threading", "Memory model"]);
    record17.set("difficulty", "Simple");
    record17.set("category", "Java Basics");
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
    record18.set("careerName", "Software Engineer");
    record18.set("level", "Beginner");
    record18.set("questionNumber", 19);
    record18.set("question", "What is the difference between pass by value and pass by reference?");
    record18.set("explanation", "Pass by value: a copy of the value is passed. Pass by reference: the reference/address is passed. Java uses pass by value, but for objects, the reference is passed by value.");
    record18.set("practicalExample", "int x = 5; method(x); - x unchanged. List list = new ArrayList(); method(list); - list contents can be modified");
    record18.set("keyPoints", ["Value copy", "Reference copy", "Object modification", "Primitive types"]);
    record18.set("relatedTopics", ["Java", "Memory", "Function calls"]);
    record18.set("difficulty", "Simple");
    record18.set("category", "Java Basics");
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
    record19.set("careerName", "Software Engineer");
    record19.set("level", "Beginner");
    record19.set("questionNumber", 20);
    record19.set("question", "What is the difference between Array and ArrayList?");
    record19.set("explanation", "Array has fixed size, ArrayList has dynamic size. Array can store primitives and objects, ArrayList only objects. ArrayList provides more methods and flexibility.");
    record19.set("practicalExample", "int[] arr = new int[5]; - fixed size. ArrayList<Integer> list = new ArrayList<>(); - dynamic size");
    record19.set("keyPoints", ["Fixed vs dynamic", "Primitives vs objects", "Methods", "Flexibility"]);
    record19.set("relatedTopics", ["Data Structures", "Collections", "Java"]);
    record19.set("difficulty", "Simple");
    record19.set("category", "Data Structures");
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
    record20.set("careerName", "Software Engineer");
    record20.set("level", "Intermediate");
    record20.set("questionNumber", 21);
    record20.set("question", "Explain the concept of design patterns and name a few common ones.");
    record20.set("explanation", "Design patterns are reusable solutions to common programming problems. They provide templates for writing maintainable and scalable code. Common patterns: Singleton, Factory, Observer, Strategy, Decorator.");
    record20.set("practicalExample", "Singleton: Database connection class. Factory: Creating different types of objects. Observer: Event handling systems");
    record20.set("keyPoints", ["Reusable solutions", "Best practices", "Code organization", "Scalability"]);
    record20.set("relatedTopics", ["Software design", "Architecture", "Best practices"]);
    record20.set("difficulty", "Medium");
    record20.set("category", "Design Patterns");
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
    record21.set("careerName", "Software Engineer");
    record21.set("level", "Intermediate");
    record21.set("questionNumber", 22);
    record21.set("question", "What is the Singleton pattern and when should it be used?");
    record21.set("explanation", "Singleton pattern ensures a class has only one instance and provides a global point of access to it. Used for database connections, logging, configuration managers.");
    record21.set("practicalExample", "public class Singleton { private static Singleton instance; private Singleton() {} public static Singleton getInstance() { if(instance == null) instance = new Singleton(); return instance; } }");
    record21.set("keyPoints", ["Single instance", "Global access", "Lazy initialization", "Thread safety"]);
    record21.set("relatedTopics", ["Design patterns", "Creational patterns", "Java"]);
    record21.set("difficulty", "Medium");
    record21.set("category", "Design Patterns");
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
    record22.set("careerName", "Software Engineer");
    record22.set("level", "Intermediate");
    record22.set("questionNumber", 23);
    record22.set("question", "What is the Factory pattern?");
    record22.set("explanation", "Factory pattern creates objects without specifying exact classes. It provides an interface for creating families of related objects, promoting loose coupling.");
    record22.set("practicalExample", "ShapeFactory.createShape('circle') returns Circle object. ShapeFactory.createShape('square') returns Square object");
    record22.set("keyPoints", ["Object creation", "Loose coupling", "Flexibility", "Encapsulation"]);
    record22.set("relatedTopics", ["Design patterns", "Creational patterns", "OOP"]);
    record22.set("difficulty", "Medium");
    record22.set("category", "Design Patterns");
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
    record23.set("careerName", "Software Engineer");
    record23.set("level", "Intermediate");
    record23.set("questionNumber", 24);
    record23.set("question", "What is the Observer pattern?");
    record23.set("explanation", "Observer pattern defines a one-to-many relationship where multiple observers watch a subject. When subject changes, all observers are notified automatically.");
    record23.set("practicalExample", "Subject: Stock price. Observers: Multiple investors. When price changes, all investors are notified");
    record23.set("keyPoints", ["One-to-many", "Loose coupling", "Event handling", "Notification"]);
    record23.set("relatedTopics", ["Design patterns", "Behavioral patterns", "Event-driven"]);
    record23.set("difficulty", "Medium");
    record23.set("category", "Design Patterns");
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
    record24.set("careerName", "Software Engineer");
    record24.set("level", "Intermediate");
    record24.set("questionNumber", 25);
    record24.set("question", "What is the Strategy pattern?");
    record24.set("explanation", "Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. It lets the algorithm vary independently from clients that use it.");
    record24.set("practicalExample", "PaymentStrategy interface with CreditCard, PayPal, Bitcoin implementations. Client uses any strategy without knowing details");
    record24.set("keyPoints", ["Algorithm encapsulation", "Interchangeable", "Flexibility", "Runtime selection"]);
    record24.set("relatedTopics", ["Design patterns", "Behavioral patterns", "Polymorphism"]);
    record24.set("difficulty", "Medium");
    record24.set("category", "Design Patterns");
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
    record25.set("careerSlug", "software-engineer");
    record25.set("careerName", "Software Engineer");
    record25.set("level", "Intermediate");
    record25.set("questionNumber", 26);
    record25.set("question", "What is the Decorator pattern?");
    record25.set("explanation", "Decorator pattern attaches additional responsibilities to an object dynamically. It provides a flexible alternative to subclassing for extending functionality.");
    record25.set("practicalExample", "Coffee class with Milk, Sugar, Caramel decorators. Can combine decorators: Coffee + Milk + Sugar");
    record25.set("keyPoints", ["Dynamic behavior", "Flexible extension", "Composition", "Alternative to inheritance"]);
    record25.set("relatedTopics", ["Design patterns", "Structural patterns", "OOP"]);
    record25.set("difficulty", "Medium");
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
    record26.set("careerSlug", "software-engineer");
    record26.set("careerName", "Software Engineer");
    record26.set("level", "Intermediate");
    record26.set("questionNumber", 27);
    record26.set("question", "What is SOLID principles?");
    record26.set("explanation", "SOLID is an acronym for five design principles: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion. They promote maintainable and scalable code.");
    record26.set("practicalExample", "S: Class has one reason to change. O: Open for extension, closed for modification. L: Subclass can replace parent. I: Specific interfaces. D: Depend on abstractions");
    record26.set("keyPoints", ["Design principles", "Code quality", "Maintainability", "Scalability"]);
    record26.set("relatedTopics", ["Software design", "Best practices", "Architecture"]);
    record26.set("difficulty", "Medium");
    record26.set("category", "Design Principles");
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
    record27.set("careerSlug", "software-engineer");
    record27.set("careerName", "Software Engineer");
    record27.set("level", "Intermediate");
    record27.set("questionNumber", 28);
    record27.set("question", "What is the difference between composition and inheritance?");
    record27.set("explanation", "Inheritance is 'is-a' relationship (Dog is-a Animal). Composition is 'has-a' relationship (Car has-a Engine). Composition is more flexible and avoids fragile base class problem.");
    record27.set("practicalExample", "Inheritance: Dog extends Animal. Composition: Car has Engine (Engine engine = new Engine())");
    record27.set("keyPoints", ["Is-a vs has-a", "Flexibility", "Code reuse", "Coupling"]);
    record27.set("relatedTopics", ["OOP", "Design", "Relationships"]);
    record27.set("difficulty", "Medium");
    record27.set("category", "Object-Oriented Programming");
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
    record28.set("careerSlug", "software-engineer");
    record28.set("careerName", "Software Engineer");
    record28.set("level", "Intermediate");
    record28.set("questionNumber", 29);
    record28.set("question", "What is the difference between shallow copy and deep copy?");
    record28.set("explanation", "Shallow copy copies references to objects. Deep copy copies actual objects. Shallow copy is faster but shares references, deep copy is slower but independent.");
    record28.set("practicalExample", "Shallow: List list2 = list1; - same reference. Deep: List list2 = new ArrayList(list1); - new objects");
    record28.set("keyPoints", ["Reference vs object", "Independence", "Memory", "Performance"]);
    record28.set("relatedTopics", ["Memory management", "Object copying", "Java"]);
    record28.set("difficulty", "Medium");
    record28.set("category", "Java Basics");
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
    record29.set("careerSlug", "software-engineer");
    record29.set("careerName", "Software Engineer");
    record29.set("level", "Intermediate");
    record29.set("questionNumber", 30);
    record29.set("question", "What is the difference between Comparable and Comparator?");
    record29.set("explanation", "Comparable is implemented by the class itself (compareTo method). Comparator is a separate class for comparing objects. Comparable is for natural ordering, Comparator for custom ordering.");
    record29.set("practicalExample", "Comparable: class Student implements Comparable { compareTo() }. Comparator: class StudentComparator implements Comparator { compare() }");
    record29.set("keyPoints", ["Natural vs custom", "Implementation location", "Flexibility", "Multiple comparisons"]);
    record29.set("relatedTopics", ["Sorting", "Collections", "Java"]);
    record29.set("difficulty", "Medium");
    record29.set("category", "Java Basics");
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
    record30.set("careerSlug", "software-engineer");
    record30.set("careerName", "Software Engineer");
    record30.set("level", "Intermediate");
    record30.set("questionNumber", 31);
    record30.set("question", "What is the difference between Iterator and ListIterator?");
    record30.set("explanation", "Iterator traverses forward only. ListIterator traverses both forward and backward, and can add/remove elements during iteration.");
    record30.set("practicalExample", "Iterator: hasNext(), next(). ListIterator: hasPrevious(), previous(), add(), set(), remove()");
    record30.set("keyPoints", ["Direction", "Modification", "Flexibility", "Collections"]);
    record30.set("relatedTopics", ["Collections", "Iteration", "Java"]);
    record30.set("difficulty", "Medium");
    record30.set("category", "Collections");
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
    record31.set("careerSlug", "software-engineer");
    record31.set("careerName", "Software Engineer");
    record31.set("level", "Intermediate");
    record31.set("questionNumber", 32);
    record31.set("question", "What is the difference between Set, List, and Map?");
    record31.set("explanation", "List: ordered, allows duplicates (ArrayList, LinkedList). Set: unordered, no duplicates (HashSet, TreeSet). Map: key-value pairs, no duplicate keys (HashMap, TreeMap).");
    record31.set("practicalExample", "List: [1,2,2,3]. Set: {1,2,3}. Map: {name:John, age:25}");
    record31.set("keyPoints", ["Ordering", "Duplicates", "Key-value", "Use cases"]);
    record31.set("relatedTopics", ["Collections", "Data structures", "Java"]);
    record31.set("difficulty", "Medium");
    record31.set("category", "Collections");
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
    record32.set("careerSlug", "software-engineer");
    record32.set("careerName", "Software Engineer");
    record32.set("level", "Intermediate");
    record32.set("questionNumber", 33);
    record32.set("question", "What is the difference between HashSet and TreeSet?");
    record32.set("explanation", "HashSet uses hash table, unordered, O(1) operations. TreeSet uses red-black tree, ordered, O(log n) operations. TreeSet maintains sorted order.");
    record32.set("practicalExample", "HashSet: {3,1,2}. TreeSet: {1,2,3} - automatically sorted");
    record32.set("keyPoints", ["Ordering", "Performance", "Sorting", "Implementation"]);
    record32.set("relatedTopics", ["Collections", "Data structures", "Java"]);
    record32.set("difficulty", "Medium");
    record32.set("category", "Collections");
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
    record33.set("careerSlug", "software-engineer");
    record33.set("careerName", "Software Engineer");
    record33.set("level", "Intermediate");
    record33.set("questionNumber", 34);
    record33.set("question", "What is the difference between HashMap and TreeMap?");
    record33.set("explanation", "HashMap uses hash table, unordered, O(1) operations. TreeMap uses red-black tree, ordered by keys, O(log n) operations.");
    record33.set("practicalExample", "HashMap: {b:2, a:1, c:3}. TreeMap: {a:1, b:2, c:3} - sorted by key");
    record33.set("keyPoints", ["Ordering", "Performance", "Sorting", "Implementation"]);
    record33.set("relatedTopics", ["Collections", "Data structures", "Java"]);
    record33.set("difficulty", "Medium");
    record33.set("category", "Collections");
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
    record34.set("careerSlug", "software-engineer");
    record34.set("careerName", "Software Engineer");
    record34.set("level", "Intermediate");
    record34.set("questionNumber", 35);
    record34.set("question", "What is the difference between ConcurrentHashMap and HashMap?");
    record34.set("explanation", "HashMap is not thread-safe. ConcurrentHashMap is thread-safe using segment locking. ConcurrentHashMap allows concurrent reads and writes.");
    record34.set("practicalExample", "HashMap: not safe for multi-threading. ConcurrentHashMap: safe for multi-threading without full synchronization");
    record34.set("keyPoints", ["Thread safety", "Performance", "Concurrency", "Locking"]);
    record34.set("relatedTopics", ["Concurrency", "Collections", "Multi-threading"]);
    record34.set("difficulty", "Medium");
    record34.set("category", "Concurrency");
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
    record35.set("careerSlug", "software-engineer");
    record35.set("careerName", "Software Engineer");
    record35.set("level", "Intermediate");
    record35.set("questionNumber", 36);
    record35.set("question", "What is the difference between synchronized and volatile?");
    record35.set("explanation", "synchronized ensures mutual exclusion and memory visibility. volatile only ensures memory visibility. synchronized is for critical sections, volatile for flags.");
    record35.set("practicalExample", "synchronized: synchronized(obj) { critical code }. volatile: volatile boolean flag");
    record35.set("keyPoints", ["Mutual exclusion", "Memory visibility", "Performance", "Use cases"]);
    record35.set("relatedTopics", ["Concurrency", "Multi-threading", "Java"]);
    record35.set("difficulty", "Medium");
    record35.set("category", "Concurrency");
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
    record36.set("careerSlug", "software-engineer");
    record36.set("careerName", "Software Engineer");
    record36.set("level", "Intermediate");
    record36.set("questionNumber", 37);
    record36.set("question", "What is the difference between Thread and Runnable?");
    record36.set("explanation", "Thread is a class, Runnable is an interface. Implementing Runnable is preferred because Java doesn't support multiple inheritance. Runnable allows extending another class.");
    record36.set("practicalExample", "Thread: class MyThread extends Thread { run() }. Runnable: class MyRunnable implements Runnable { run() }");
    record36.set("keyPoints", ["Class vs interface", "Multiple inheritance", "Flexibility", "Best practice"]);
    record36.set("relatedTopics", ["Multi-threading", "Concurrency", "Java"]);
    record36.set("difficulty", "Medium");
    record36.set("category", "Concurrency");
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
    record37.set("careerSlug", "software-engineer");
    record37.set("careerName", "Software Engineer");
    record37.set("level", "Intermediate");
    record37.set("questionNumber", 38);
    record37.set("question", "What is the difference between sleep() and wait()?");
    record37.set("explanation", "sleep() pauses thread for specified time, doesn't release lock. wait() pauses thread until notify() is called, releases lock. wait() is for inter-thread communication.");
    record37.set("practicalExample", "Thread.sleep(1000); - pauses 1 second. obj.wait(); - waits for notify()");
    record37.set("keyPoints", ["Lock release", "Duration", "Notification", "Use cases"]);
    record37.set("relatedTopics", ["Multi-threading", "Concurrency", "Synchronization"]);
    record37.set("difficulty", "Medium");
    record37.set("category", "Concurrency");
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
    record38.set("careerSlug", "software-engineer");
    record38.set("careerName", "Software Engineer");
    record38.set("level", "Intermediate");
    record38.set("questionNumber", 39);
    record38.set("question", "What is the difference between notify() and notifyAll()?");
    record38.set("explanation", "notify() wakes up one waiting thread. notifyAll() wakes up all waiting threads. notifyAll() is safer to avoid missed notifications.");
    record38.set("practicalExample", "obj.notify(); - one thread wakes up. obj.notifyAll(); - all threads wake up");
    record38.set("keyPoints", ["Single vs multiple", "Fairness", "Safety", "Performance"]);
    record38.set("relatedTopics", ["Multi-threading", "Synchronization", "Concurrency"]);
    record38.set("difficulty", "Medium");
    record38.set("category", "Concurrency");
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
    record39.set("careerSlug", "software-engineer");
    record39.set("careerName", "Software Engineer");
    record39.set("level", "Intermediate");
    record39.set("questionNumber", 40);
    record39.set("question", "What is the difference between Executor and ExecutorService?");
    record39.set("explanation", "Executor is an interface with execute() method. ExecutorService extends Executor with submit(), shutdown(), and other methods for managing thread pools.");
    record39.set("practicalExample", "Executor: execute(runnable). ExecutorService: submit(callable), shutdown(), awaitTermination()");
    record39.set("keyPoints", ["Interface hierarchy", "Thread pool management", "Task submission", "Lifecycle"]);
    record39.set("relatedTopics", ["Concurrency", "Thread pools", "Java"]);
    record39.set("difficulty", "Medium");
    record39.set("category", "Concurrency");
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
    record40.set("careerSlug", "software-engineer");
    record40.set("careerName", "Software Engineer");
    record40.set("level", "Advanced");
    record40.set("questionNumber", 41);
    record40.set("question", "Explain the concept of garbage collection in Java.");
    record40.set("explanation", "Garbage collection automatically frees memory by removing unreachable objects. JVM uses algorithms like mark-and-sweep, generational GC. Developers don't need to manually free memory.");
    record40.set("practicalExample", "Object obj = new Object(); obj = null; - object becomes eligible for GC. GC removes it from memory");
    record40.set("keyPoints", ["Automatic memory management", "Unreachable objects", "GC algorithms", "Performance impact"]);
    record40.set("relatedTopics", ["Memory management", "JVM", "Performance"]);
    record40.set("difficulty", "Hard");
    record40.set("category", "JVM");
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
    record41.set("careerSlug", "software-engineer");
    record41.set("careerName", "Software Engineer");
    record41.set("level", "Advanced");
    record41.set("questionNumber", 42);
    record41.set("question", "What are the different types of garbage collectors in Java?");
    record41.set("explanation", "Serial GC: single thread. Parallel GC: multiple threads. CMS GC: concurrent mark-sweep. G1 GC: garbage first. Each has different performance characteristics.");
    record41.set("practicalExample", "-XX:+UseSerialGC, -XX:+UseParallelGC, -XX:+UseConcMarkSweepGC, -XX:+UseG1GC");
    record41.set("keyPoints", ["GC types", "Performance", "Throughput", "Latency"]);
    record41.set("relatedTopics", ["JVM tuning", "Performance", "Memory management"]);
    record41.set("difficulty", "Hard");
    record41.set("category", "JVM");
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
    record42.set("careerSlug", "software-engineer");
    record42.set("careerName", "Software Engineer");
    record42.set("level", "Advanced");
    record42.set("questionNumber", 43);
    record42.set("question", "What is the difference between strong, weak, soft, and phantom references?");
    record42.set("explanation", "Strong: normal reference, object not GC'd. Weak: GC'd when no strong references. Soft: GC'd when memory is low. Phantom: for cleanup actions.");
    record42.set("practicalExample", "Strong: Object obj = new Object(). Weak: WeakReference<Object> ref = new WeakReference<>(obj)");
    record42.set("keyPoints", ["Reference types", "GC eligibility", "Memory management", "Use cases"]);
    record42.set("relatedTopics", ["Memory management", "GC", "Java"]);
    record42.set("difficulty", "Hard");
    record42.set("category", "JVM");
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
    record43.set("careerSlug", "software-engineer");
    record43.set("careerName", "Software Engineer");
    record43.set("level", "Advanced");
    record43.set("questionNumber", 44);
    record43.set("question", "What is the difference between stack and heap memory?");
    record43.set("explanation", "Stack: stores primitives and references, LIFO, thread-local, automatically freed. Heap: stores objects, shared, GC'd, slower access.");
    record43.set("practicalExample", "int x = 5; (stack). Object obj = new Object(); (reference on stack, object on heap)");
    record43.set("keyPoints", ["Memory allocation", "Thread safety", "Performance", "Size"]);
    record43.set("relatedTopics", ["Memory management", "JVM", "Performance"]);
    record43.set("difficulty", "Hard");
    record43.set("category", "JVM");
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
    record44.set("careerSlug", "software-engineer");
    record44.set("careerName", "Software Engineer");
    record44.set("level", "Advanced");
    record44.set("questionNumber", 45);
    record44.set("question", "What is the difference between OutOfMemoryError and StackOverflowError?");
    record44.set("explanation", "OutOfMemoryError: heap is full, GC can't free enough memory. StackOverflowError: stack is full, usually from infinite recursion.");
    record44.set("practicalExample", "OutOfMemoryError: creating too many objects. StackOverflowError: recursive method without base case");
    record44.set("keyPoints", ["Memory exhaustion", "Stack exhaustion", "Debugging", "Prevention"]);
    record44.set("relatedTopics", ["Error handling", "Memory management", "Debugging"]);
    record44.set("difficulty", "Hard");
    record44.set("category", "JVM");
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
    record45.set("careerSlug", "software-engineer");
    record45.set("careerName", "Software Engineer");
    record45.set("level", "Advanced");
    record45.set("questionNumber", 46);
    record45.set("question", "What is the difference between ClassLoader and Class.forName()?");
    record45.set("explanation", "ClassLoader loads classes into memory. Class.forName() loads class and executes static initializers. Both are used for dynamic class loading.");
    record45.set("practicalExample", "ClassLoader cl = ClassLoader.getSystemClassLoader(); Class.forName('java.lang.String')");
    record45.set("keyPoints", ["Dynamic loading", "Static initialization", "Reflection", "Class loading"]);
    record45.set("relatedTopics", ["Reflection", "Class loading", "Java"]);
    record45.set("difficulty", "Hard");
    record45.set("category", "Reflection");
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
    record46.set("careerSlug", "software-engineer");
    record46.set("careerName", "Software Engineer");
    record46.set("level", "Advanced");
    record46.set("questionNumber", 47);
    record46.set("question", "What is reflection in Java and what are its uses?");
    record46.set("explanation", "Reflection allows inspecting and modifying classes, methods, fields at runtime. Uses: frameworks (Spring), serialization, testing, dynamic proxies.");
    record46.set("practicalExample", "Class<?> cls = Class.forName('java.lang.String'); Method[] methods = cls.getMethods();");
    record46.set("keyPoints", ["Runtime inspection", "Dynamic behavior", "Frameworks", "Performance cost"]);
    record46.set("relatedTopics", ["Reflection", "Metaprogramming", "Java"]);
    record46.set("difficulty", "Hard");
    record46.set("category", "Reflection");
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
    record47.set("careerSlug", "software-engineer");
    record47.set("careerName", "Software Engineer");
    record47.set("level", "Advanced");
    record47.set("questionNumber", 48);
    record47.set("question", "What is the difference between annotation and interface?");
    record47.set("explanation", "Annotation is metadata that provides information but doesn't directly affect code. Interface defines contract for classes. Annotations are processed at compile or runtime.");
    record47.set("practicalExample", "@Override annotation. @FunctionalInterface annotation. Interface: Comparable interface");
    record47.set("keyPoints", ["Metadata", "Contract", "Processing", "Use cases"]);
    record47.set("relatedTopics", ["Annotations", "Interfaces", "Java"]);
    record47.set("difficulty", "Hard");
    record47.set("category", "Java Basics");
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
    record48.set("careerSlug", "software-engineer");
    record48.set("careerName", "Software Engineer");
    record48.set("level", "Advanced");
    record48.set("questionNumber", 49);
    record48.set("question", "What is the difference between compile-time and runtime polymorphism?");
    record48.set("explanation", "Compile-time (static): method overloading, resolved by compiler. Runtime (dynamic): method overriding, resolved by JVM at runtime.");
    record48.set("practicalExample", "Compile-time: add(int, int) vs add(double, double). Runtime: Animal.sound() overridden in Dog");
    record48.set("keyPoints", ["Resolution time", "Method selection", "Performance", "Flexibility"]);
    record48.set("relatedTopics", ["Polymorphism", "OOP", "Java"]);
    record48.set("difficulty", "Hard");
    record48.set("category", "Object-Oriented Programming");
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
    record49.set("careerSlug", "software-engineer");
    record49.set("careerName", "Software Engineer");
    record49.set("level", "Advanced");
    record49.set("questionNumber", 50);
    record49.set("question", "What is the difference between fail-fast and fail-safe iterators?");
    record49.set("explanation", "Fail-fast: throws ConcurrentModificationException if collection modified during iteration. Fail-safe: works on copy, doesn't throw exception.");
    record49.set("practicalExample", "Fail-fast: ArrayList iterator. Fail-safe: ConcurrentHashMap iterator");
    record49.set("keyPoints", ["Exception throwing", "Collection modification", "Performance", "Safety"]);
    record49.set("relatedTopics", ["Collections", "Iteration", "Concurrency"]);
    record49.set("difficulty", "Hard");
    record49.set("category", "Collections");
  try {
    app.save(record49);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record50 = new Record(collection);
    record50.set("careerSlug", "data-analyst");
    record50.set("careerName", "Data Analyst");
    record50.set("level", "Beginner");
    record50.set("questionNumber", 1);
    record50.set("question", "What is the difference between data and information?");
    record50.set("explanation", "Data is raw facts and figures. Information is processed data that provides meaning and context. Data becomes information when analyzed and interpreted.");
    record50.set("practicalExample", "Data: 25, 30, 28. Information: Average age is 27.67 years");
    record50.set("keyPoints", ["Raw vs processed", "Context", "Meaning", "Analysis"]);
    record50.set("relatedTopics", ["Data fundamentals", "Analysis", "Business intelligence"]);
    record50.set("difficulty", "Simple");
    record50.set("category", "Data Fundamentals");
  try {
    app.save(record50);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record51 = new Record(collection);
    record51.set("careerSlug", "data-analyst");
    record51.set("careerName", "Data Analyst");
    record51.set("level", "Beginner");
    record51.set("questionNumber", 2);
    record51.set("question", "What is the difference between quantitative and qualitative data?");
    record51.set("explanation", "Quantitative data is numerical and measurable. Qualitative data is descriptive and categorical. Quantitative is analyzed with statistics, qualitative with themes.");
    record51.set("practicalExample", "Quantitative: age, salary, temperature. Qualitative: color, feedback, opinion");
    record51.set("keyPoints", ["Numerical vs descriptive", "Measurement", "Analysis methods", "Use cases"]);
    record51.set("relatedTopics", ["Data types", "Analysis", "Research methods"]);
    record51.set("difficulty", "Simple");
    record51.set("category", "Data Fundamentals");
  try {
    app.save(record51);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record52 = new Record(collection);
    record52.set("careerSlug", "data-analyst");
    record52.set("careerName", "Data Analyst");
    record52.set("level", "Beginner");
    record52.set("questionNumber", 3);
    record52.set("question", "What is the difference between population and sample?");
    record52.set("explanation", "Population is the entire group being studied. Sample is a subset of the population. Samples are used for practical analysis due to cost and time constraints.");
    record52.set("practicalExample", "Population: all voters in a country. Sample: 1000 voters surveyed");
    record52.set("keyPoints", ["Entire group vs subset", "Representation", "Cost", "Accuracy"]);
    record52.set("relatedTopics", ["Statistics", "Sampling", "Research methods"]);
    record52.set("difficulty", "Simple");
    record52.set("category", "Statistics");
  try {
    app.save(record52);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record53 = new Record(collection);
    record53.set("careerSlug", "data-analyst");
    record53.set("careerName", "Data Analyst");
    record53.set("level", "Beginner");
    record53.set("questionNumber", 4);
    record53.set("question", "What is the difference between mean, median, and mode?");
    record53.set("explanation", "Mean is average (sum/count). Median is middle value when sorted. Mode is most frequent value. Each has different use cases and sensitivity to outliers.");
    record53.set("practicalExample", "Data: 1,2,3,4,100. Mean: 22, Median: 3, Mode: none");
    record53.set("keyPoints", ["Central tendency", "Outliers", "Distribution", "Use cases"]);
    record53.set("relatedTopics", ["Statistics", "Descriptive analysis", "Data analysis"]);
    record53.set("difficulty", "Simple");
    record53.set("category", "Statistics");
  try {
    app.save(record53);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record54 = new Record(collection);
    record54.set("careerSlug", "data-analyst");
    record54.set("careerName", "Data Analyst");
    record54.set("level", "Beginner");
    record54.set("questionNumber", 5);
    record54.set("question", "What is standard deviation?");
    record54.set("explanation", "Standard deviation measures how spread out data is from the mean. Low SD means data is close to mean, high SD means data is spread out.");
    record54.set("practicalExample", "Dataset A: 1,2,3,4,5 (SD=1.41). Dataset B: 1,1,3,5,5 (SD=1.87)");
    record54.set("keyPoints", ["Spread", "Variability", "Normal distribution", "Risk measurement"]);
    record54.set("relatedTopics", ["Statistics", "Variance", "Distribution"]);
    record54.set("difficulty", "Simple");
    record54.set("category", "Statistics");
  try {
    app.save(record54);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record55 = new Record(collection);
    record55.set("careerSlug", "data-analyst");
    record55.set("careerName", "Data Analyst");
    record55.set("level", "Beginner");
    record55.set("questionNumber", 6);
    record55.set("question", "What is correlation?");
    record55.set("explanation", "Correlation measures the relationship between two variables. Range: -1 to 1. Positive: both increase together. Negative: one increases, other decreases.");
    record55.set("practicalExample", "Height and weight: positive correlation. Temperature and ice cream sales: positive correlation");
    record55.set("keyPoints", ["Relationship strength", "Direction", "Causation vs correlation", "Coefficient"]);
    record55.set("relatedTopics", ["Statistics", "Relationships", "Analysis"]);
    record55.set("difficulty", "Simple");
    record55.set("category", "Statistics");
  try {
    app.save(record55);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record56 = new Record(collection);
    record56.set("careerSlug", "data-analyst");
    record56.set("careerName", "Data Analyst");
    record56.set("level", "Beginner");
    record56.set("questionNumber", 7);
    record56.set("question", "What is the difference between correlation and causation?");
    record56.set("explanation", "Correlation means two variables move together. Causation means one causes the other. Correlation doesn't imply causation - there may be confounding variables.");
    record56.set("practicalExample", "Ice cream sales and drowning deaths are correlated (both increase in summer) but ice cream doesn't cause drowning");
    record56.set("keyPoints", ["Relationship vs cause", "Confounding variables", "Experimental design", "Logic"]);
    record56.set("relatedTopics", ["Statistics", "Research methods", "Critical thinking"]);
    record56.set("difficulty", "Simple");
    record56.set("category", "Statistics");
  try {
    app.save(record56);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record57 = new Record(collection);
    record57.set("careerSlug", "data-analyst");
    record57.set("careerName", "Data Analyst");
    record57.set("level", "Beginner");
    record57.set("questionNumber", 8);
    record57.set("question", "What is a normal distribution?");
    record57.set("explanation", "Normal distribution is bell-shaped, symmetric around mean. 68% of data within 1 SD, 95% within 2 SD, 99.7% within 3 SD. Many natural phenomena follow this.");
    record57.set("practicalExample", "Height, test scores, measurement errors often follow normal distribution");
    record57.set("keyPoints", ["Bell curve", "Symmetry", "Standard deviations", "Probability"]);
    record57.set("relatedTopics", ["Statistics", "Probability", "Distribution"]);
    record57.set("difficulty", "Simple");
    record57.set("category", "Statistics");
  try {
    app.save(record57);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record58 = new Record(collection);
    record58.set("careerSlug", "data-analyst");
    record58.set("careerName", "Data Analyst");
    record58.set("level", "Beginner");
    record58.set("questionNumber", 9);
    record58.set("question", "What is a hypothesis test?");
    record58.set("explanation", "Hypothesis test determines if sample data supports a claim about population. Null hypothesis (no effect) vs alternative hypothesis (effect exists). Uses p-value to decide.");
    record58.set("practicalExample", "H0: Drug has no effect. H1: Drug has effect. Test with p-value < 0.05 to reject H0");
    record58.set("keyPoints", ["Null hypothesis", "Alternative hypothesis", "P-value", "Significance"]);
    record58.set("relatedTopics", ["Statistics", "Inference", "Testing"]);
    record58.set("difficulty", "Simple");
    record58.set("category", "Statistics");
  try {
    app.save(record58);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record59 = new Record(collection);
    record59.set("careerSlug", "data-analyst");
    record59.set("careerName", "Data Analyst");
    record59.set("level", "Beginner");
    record59.set("questionNumber", 10);
    record59.set("question", "What is the difference between Type I and Type II errors?");
    record59.set("explanation", "Type I error: reject true null hypothesis (false positive). Type II error: fail to reject false null hypothesis (false negative).");
    record59.set("practicalExample", "Type I: conclude drug works when it doesn't. Type II: conclude drug doesn't work when it does");
    record59.set("keyPoints", ["False positive", "False negative", "Significance level", "Power"]);
    record59.set("relatedTopics", ["Statistics", "Hypothesis testing", "Errors"]);
    record59.set("difficulty", "Simple");
    record59.set("category", "Statistics");
  try {
    app.save(record59);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record60 = new Record(collection);
    record60.set("careerSlug", "data-analyst");
    record60.set("careerName", "Data Analyst");
    record60.set("level", "Intermediate");
    record60.set("questionNumber", 21);
    record60.set("question", "What is exploratory data analysis (EDA)?");
    record60.set("explanation", "EDA is initial investigation of data to understand structure, patterns, anomalies. Uses visualizations and summary statistics. Precedes formal analysis.");
    record60.set("practicalExample", "Plotting distributions, checking for missing values, identifying outliers, examining relationships");
    record60.set("keyPoints", ["Initial investigation", "Visualization", "Pattern discovery", "Data quality"]);
    record60.set("relatedTopics", ["Data analysis", "Visualization", "Statistics"]);
    record60.set("difficulty", "Medium");
    record60.set("category", "Data Analysis");
  try {
    app.save(record60);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record61 = new Record(collection);
    record61.set("careerSlug", "data-analyst");
    record61.set("careerName", "Data Analyst");
    record61.set("level", "Intermediate");
    record61.set("questionNumber", 22);
    record61.set("question", "What is data cleaning and why is it important?");
    record61.set("explanation", "Data cleaning removes errors, inconsistencies, duplicates, missing values. Critical because dirty data leads to wrong conclusions. Often takes 80% of analysis time.");
    record61.set("practicalExample", "Removing duplicates, handling missing values, correcting typos, standardizing formats");
    record61.set("keyPoints", ["Data quality", "Accuracy", "Consistency", "Time-consuming"]);
    record61.set("relatedTopics", ["Data preparation", "Quality assurance", "Analysis"]);
    record61.set("difficulty", "Medium");
    record61.set("category", "Data Preparation");
  try {
    app.save(record61);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record62 = new Record(collection);
    record62.set("careerSlug", "data-analyst");
    record62.set("careerName", "Data Analyst");
    record62.set("level", "Intermediate");
    record62.set("questionNumber", 23);
    record62.set("question", "What is the difference between OLTP and OLAP?");
    record62.set("explanation", "OLTP (Online Transaction Processing): handles daily transactions, normalized, fast writes. OLAP (Online Analytical Processing): handles complex queries, denormalized, fast reads.");
    record62.set("practicalExample", "OLTP: bank transactions. OLAP: sales analysis across regions and time periods");
    record62.set("keyPoints", ["Transactions vs analysis", "Normalization", "Performance", "Use cases"]);
    record62.set("relatedTopics", ["Databases", "Data warehousing", "Architecture"]);
    record62.set("difficulty", "Medium");
    record62.set("category", "Databases");
  try {
    app.save(record62);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record63 = new Record(collection);
    record63.set("careerSlug", "data-analyst");
    record63.set("careerName", "Data Analyst");
    record63.set("level", "Intermediate");
    record63.set("questionNumber", 24);
    record63.set("question", "What is a data warehouse?");
    record63.set("explanation", "Data warehouse is centralized repository of integrated data from multiple sources. Optimized for analysis, not transactions. Supports business intelligence and reporting.");
    record63.set("practicalExample", "Combining sales, inventory, customer data from different systems into one warehouse for analysis");
    record63.set("keyPoints", ["Centralized", "Integrated", "Historical", "Analysis-optimized"]);
    record63.set("relatedTopics", ["Data warehousing", "BI", "Architecture"]);
    record63.set("difficulty", "Medium");
    record63.set("category", "Databases");
  try {
    app.save(record63);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record64 = new Record(collection);
    record64.set("careerSlug", "data-analyst");
    record64.set("careerName", "Data Analyst");
    record64.set("level", "Intermediate");
    record64.set("questionNumber", 25);
    record64.set("question", "What is a data mart?");
    record64.set("explanation", "Data mart is subset of data warehouse focused on specific business area. Smaller, faster, easier to manage than full warehouse.");
    record64.set("practicalExample", "Sales data mart for sales team, HR data mart for HR department");
    record64.set("keyPoints", ["Subset", "Focused", "Smaller", "Faster"]);
    record64.set("relatedTopics", ["Data warehousing", "BI", "Architecture"]);
    record64.set("difficulty", "Medium");
    record64.set("category", "Databases");
  try {
    app.save(record64);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record65 = new Record(collection);
    record65.set("careerSlug", "data-analyst");
    record65.set("careerName", "Data Analyst");
    record65.set("level", "Intermediate");
    record65.set("questionNumber", 26);
    record65.set("question", "What is ETL?");
    record65.set("explanation", "ETL: Extract (get data from sources), Transform (clean and process), Load (put into warehouse). Core process for data integration.");
    record65.set("practicalExample", "Extract sales data from CRM, transform to standard format, load into warehouse");
    record65.set("keyPoints", ["Data integration", "Process", "Quality", "Automation"]);
    record65.set("relatedTopics", ["Data warehousing", "Data pipeline", "Integration"]);
    record65.set("difficulty", "Medium");
    record65.set("category", "Data Preparation");
  try {
    app.save(record65);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record66 = new Record(collection);
    record66.set("careerSlug", "data-analyst");
    record66.set("careerName", "Data Analyst");
    record66.set("level", "Intermediate");
    record66.set("questionNumber", 27);
    record66.set("question", "What is the difference between SQL and NoSQL?");
    record66.set("explanation", "SQL: relational, structured, ACID properties, good for complex queries. NoSQL: non-relational, flexible schema, eventual consistency, good for big data.");
    record66.set("practicalExample", "SQL: MySQL, PostgreSQL for structured data. NoSQL: MongoDB, Cassandra for unstructured data");
    record66.set("keyPoints", ["Relational vs non-relational", "Schema", "Scalability", "Use cases"]);
    record66.set("relatedTopics", ["Databases", "Data storage", "Architecture"]);
    record66.set("difficulty", "Medium");
    record66.set("category", "Databases");
  try {
    app.save(record66);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record67 = new Record(collection);
    record67.set("careerSlug", "data-analyst");
    record67.set("careerName", "Data Analyst");
    record67.set("level", "Intermediate");
    record67.set("questionNumber", 28);
    record67.set("question", "What is a JOIN in SQL?");
    record67.set("explanation", "JOIN combines rows from multiple tables based on related columns. Types: INNER (matching rows), LEFT (all left rows), RIGHT (all right rows), FULL (all rows).");
    record67.set("practicalExample", "SELECT * FROM customers INNER JOIN orders ON customers.id = orders.customer_id");
    record67.set("keyPoints", ["Table combination", "Relationships", "Types", "Performance"]);
    record67.set("relatedTopics", ["SQL", "Databases", "Queries"]);
    record67.set("difficulty", "Medium");
    record67.set("category", "SQL");
  try {
    app.save(record67);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record68 = new Record(collection);
    record68.set("careerSlug", "data-analyst");
    record68.set("careerName", "Data Analyst");
    record68.set("level", "Intermediate");
    record68.set("questionNumber", 29);
    record68.set("question", "What is a GROUP BY clause?");
    record68.set("explanation", "GROUP BY aggregates rows with same values in specified columns. Used with aggregate functions (SUM, COUNT, AVG). Enables summary statistics.");
    record68.set("practicalExample", "SELECT department, COUNT(*) FROM employees GROUP BY department");
    record68.set("keyPoints", ["Aggregation", "Grouping", "Summary", "Aggregate functions"]);
    record68.set("relatedTopics", ["SQL", "Aggregation", "Analysis"]);
    record68.set("difficulty", "Medium");
    record68.set("category", "SQL");
  try {
    app.save(record68);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record69 = new Record(collection);
    record69.set("careerSlug", "data-analyst");
    record69.set("careerName", "Data Analyst");
    record69.set("level", "Intermediate");
    record69.set("questionNumber", 30);
    record69.set("question", "What is the difference between WHERE and HAVING?");
    record69.set("explanation", "WHERE filters rows before grouping. HAVING filters groups after aggregation. WHERE works on individual rows, HAVING on aggregated results.");
    record69.set("practicalExample", "WHERE salary > 50000 (before grouping). HAVING COUNT(*) > 5 (after grouping)");
    record69.set("keyPoints", ["Filtering timing", "Individual vs aggregate", "Syntax", "Performance"]);
    record69.set("relatedTopics", ["SQL", "Filtering", "Aggregation"]);
    record69.set("difficulty", "Medium");
    record69.set("category", "SQL");
  try {
    app.save(record69);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record70 = new Record(collection);
    record70.set("careerSlug", "data-analyst");
    record70.set("careerName", "Data Analyst");
    record70.set("level", "Intermediate");
    record70.set("questionNumber", 31);
    record70.set("question", "What is a subquery?");
    record70.set("explanation", "Subquery is query within another query. Can be in SELECT, FROM, WHERE clauses. Useful for complex logic and filtering based on aggregated results.");
    record70.set("practicalExample", "SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees)");
    record70.set("keyPoints", ["Nested query", "Complexity", "Performance", "Readability"]);
    record70.set("relatedTopics", ["SQL", "Queries", "Advanced SQL"]);
    record70.set("difficulty", "Medium");
    record70.set("category", "SQL");
  try {
    app.save(record70);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record71 = new Record(collection);
    record71.set("careerSlug", "data-analyst");
    record71.set("careerName", "Data Analyst");
    record71.set("level", "Intermediate");
    record71.set("questionNumber", 32);
    record71.set("question", "What is a window function?");
    record71.set("explanation", "Window function performs calculation across set of rows related to current row. Includes RANK, ROW_NUMBER, LAG, LEAD, SUM OVER. More efficient than subqueries.");
    record71.set("practicalExample", "SELECT name, salary, RANK() OVER (ORDER BY salary DESC) FROM employees");
    record71.set("keyPoints", ["Calculation across rows", "Ranking", "Efficiency", "Advanced SQL"]);
    record71.set("relatedTopics", ["SQL", "Advanced queries", "Analytics"]);
    record71.set("difficulty", "Medium");
    record71.set("category", "SQL");
  try {
    app.save(record71);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record72 = new Record(collection);
    record72.set("careerSlug", "data-analyst");
    record72.set("careerName", "Data Analyst");
    record72.set("level", "Intermediate");
    record72.set("questionNumber", 33);
    record72.set("question", "What is a CTE (Common Table Expression)?");
    record72.set("explanation", "CTE is temporary result set defined within query using WITH clause. Improves readability and allows recursive queries. Alternative to subqueries.");
    record72.set("practicalExample", "WITH high_earners AS (SELECT * FROM employees WHERE salary > 100000) SELECT * FROM high_earners");
    record72.set("keyPoints", ["Temporary result", "Readability", "Recursion", "Reusability"]);
    record72.set("relatedTopics", ["SQL", "Advanced queries", "Optimization"]);
    record72.set("difficulty", "Medium");
    record72.set("category", "SQL");
  try {
    app.save(record72);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record73 = new Record(collection);
    record73.set("careerSlug", "data-analyst");
    record73.set("careerName", "Data Analyst");
    record73.set("level", "Intermediate");
    record73.set("questionNumber", 34);
    record73.set("question", "What is the difference between UNION and UNION ALL?");
    record73.set("explanation", "UNION combines results and removes duplicates. UNION ALL combines results and keeps duplicates. UNION ALL is faster because it doesn't remove duplicates.");
    record73.set("practicalExample", "UNION: [1,2,3] + [2,3,4] = [1,2,3,4]. UNION ALL: [1,2,3] + [2,3,4] = [1,2,3,2,3,4]");
    record73.set("keyPoints", ["Combination", "Duplicates", "Performance", "Use cases"]);
    record73.set("relatedTopics", ["SQL", "Queries", "Data combination"]);
    record73.set("difficulty", "Medium");
    record73.set("category", "SQL");
  try {
    app.save(record73);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record74 = new Record(collection);
    record74.set("careerSlug", "data-analyst");
    record74.set("careerName", "Data Analyst");
    record74.set("level", "Intermediate");
    record74.set("questionNumber", 35);
    record74.set("question", "What is database normalization?");
    record74.set("explanation", "Normalization organizes data to reduce redundancy and improve integrity. Normal forms: 1NF (atomic values), 2NF (no partial dependencies), 3NF (no transitive dependencies).");
    record74.set("practicalExample", "Separate customer and order tables instead of storing all customer info in each order");
    record74.set("keyPoints", ["Redundancy reduction", "Data integrity", "Normal forms", "Design"]);
    record74.set("relatedTopics", ["Database design", "Normalization", "Schema"]);
    record74.set("difficulty", "Medium");
    record74.set("category", "Databases");
  try {
    app.save(record74);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record75 = new Record(collection);
    record75.set("careerSlug", "data-analyst");
    record75.set("careerName", "Data Analyst");
    record75.set("level", "Intermediate");
    record75.set("questionNumber", 36);
    record75.set("question", "What is an index in database?");
    record75.set("explanation", "Index is data structure that speeds up data retrieval. Trade-off: faster reads, slower writes, more storage. Primary key is automatically indexed.");
    record75.set("practicalExample", "CREATE INDEX idx_email ON users(email) - speeds up searches by email");
    record75.set("keyPoints", ["Performance", "Trade-offs", "Types", "Maintenance"]);
    record75.set("relatedTopics", ["Database optimization", "Performance", "Design"]);
    record75.set("difficulty", "Medium");
    record75.set("category", "Databases");
  try {
    app.save(record75);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record76 = new Record(collection);
    record76.set("careerSlug", "data-analyst");
    record76.set("careerName", "Data Analyst");
    record76.set("level", "Intermediate");
    record76.set("questionNumber", 37);
    record76.set("question", "What is the difference between primary key and unique key?");
    record76.set("explanation", "Primary key uniquely identifies row, cannot be null, only one per table. Unique key ensures uniqueness, can be null, multiple per table.");
    record76.set("practicalExample", "Primary key: employee_id. Unique key: email (can have multiple unique keys)");
    record76.set("keyPoints", ["Uniqueness", "Null values", "Quantity", "Constraints"]);
    record76.set("relatedTopics", ["Database design", "Constraints", "Schema"]);
    record76.set("difficulty", "Medium");
    record76.set("category", "Databases");
  try {
    app.save(record76);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record77 = new Record(collection);
    record77.set("careerSlug", "data-analyst");
    record77.set("careerName", "Data Analyst");
    record77.set("level", "Intermediate");
    record77.set("questionNumber", 38);
    record77.set("question", "What is a foreign key?");
    record77.set("explanation", "Foreign key is column that references primary key in another table. Maintains referential integrity. Prevents orphaned records.");
    record77.set("practicalExample", "orders.customer_id references customers.id");
    record77.set("keyPoints", ["Referential integrity", "Relationships", "Constraints", "Data quality"]);
    record77.set("relatedTopics", ["Database design", "Relationships", "Constraints"]);
    record77.set("difficulty", "Medium");
    record77.set("category", "Databases");
  try {
    app.save(record77);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record78 = new Record(collection);
    record78.set("careerSlug", "data-analyst");
    record78.set("careerName", "Data Analyst");
    record78.set("level", "Intermediate");
    record78.set("questionNumber", 39);
    record78.set("question", "What is the difference between INNER JOIN and LEFT JOIN?");
    record78.set("explanation", "INNER JOIN returns only matching rows. LEFT JOIN returns all rows from left table and matching rows from right table.");
    record78.set("practicalExample", "INNER: only customers with orders. LEFT: all customers, with orders if they have them");
    record78.set("keyPoints", ["Matching rows", "All rows", "Nulls", "Use cases"]);
    record78.set("relatedTopics", ["SQL", "JOINs", "Queries"]);
    record78.set("difficulty", "Medium");
    record78.set("category", "SQL");
  try {
    app.save(record78);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record79 = new Record(collection);
    record79.set("careerSlug", "data-analyst");
    record79.set("careerName", "Data Analyst");
    record79.set("level", "Intermediate");
    record79.set("questionNumber", 40);
    record79.set("question", "What is the difference between DISTINCT and GROUP BY?");
    record79.set("explanation", "DISTINCT removes duplicate rows. GROUP BY groups rows and allows aggregation. DISTINCT is simpler, GROUP BY is more powerful.");
    record79.set("practicalExample", "DISTINCT: SELECT DISTINCT city FROM customers. GROUP BY: SELECT city, COUNT(*) FROM customers GROUP BY city");
    record79.set("keyPoints", ["Duplicates", "Grouping", "Aggregation", "Performance"]);
    record79.set("relatedTopics", ["SQL", "Queries", "Aggregation"]);
    record79.set("difficulty", "Medium");
    record79.set("category", "SQL");
  try {
    app.save(record79);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record80 = new Record(collection);
    record80.set("careerSlug", "data-analyst");
    record80.set("careerName", "Data Analyst");
    record80.set("level", "Advanced");
    record80.set("questionNumber", 41);
    record80.set("question", "What is machine learning and how does it differ from traditional programming?");
    record80.set("explanation", "Traditional programming: explicit rules written by programmer. Machine learning: learns patterns from data. ML is better for complex, non-linear problems.");
    record80.set("practicalExample", "Traditional: if age > 18 then adult. ML: predict age from facial features");
    record80.set("keyPoints", ["Rules vs patterns", "Automation", "Complexity", "Adaptability"]);
    record80.set("relatedTopics", ["Machine learning", "AI", "Data science"]);
    record80.set("difficulty", "Hard");
    record80.set("category", "Machine Learning");
  try {
    app.save(record80);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record81 = new Record(collection);
    record81.set("careerSlug", "data-analyst");
    record81.set("careerName", "Data Analyst");
    record81.set("level", "Advanced");
    record81.set("questionNumber", 42);
    record81.set("question", "What is the difference between supervised and unsupervised learning?");
    record81.set("explanation", "Supervised: labeled data, predict target variable. Unsupervised: unlabeled data, find patterns. Supervised needs labels, unsupervised discovers structure.");
    record81.set("practicalExample", "Supervised: predict house price (labeled data). Unsupervised: group customers by behavior (no labels)");
    record81.set("keyPoints", ["Labels", "Target variable", "Patterns", "Use cases"]);
    record81.set("relatedTopics", ["Machine learning", "Classification", "Clustering"]);
    record81.set("difficulty", "Hard");
    record81.set("category", "Machine Learning");
  try {
    app.save(record81);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record82 = new Record(collection);
    record82.set("careerSlug", "data-analyst");
    record82.set("careerName", "Data Analyst");
    record82.set("level", "Advanced");
    record82.set("questionNumber", 43);
    record82.set("question", "What is the difference between classification and regression?");
    record82.set("explanation", "Classification: predict categorical variable (discrete classes). Regression: predict continuous variable (numeric values).");
    record82.set("practicalExample", "Classification: spam or not spam. Regression: predict house price");
    record82.set("keyPoints", ["Discrete vs continuous", "Output type", "Algorithms", "Evaluation"]);
    record82.set("relatedTopics", ["Machine learning", "Supervised learning", "Prediction"]);
    record82.set("difficulty", "Hard");
    record82.set("category", "Machine Learning");
  try {
    app.save(record82);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record83 = new Record(collection);
    record83.set("careerSlug", "data-analyst");
    record83.set("careerName", "Data Analyst");
    record83.set("level", "Advanced");
    record83.set("questionNumber", 44);
    record83.set("question", "What is overfitting and how to prevent it?");
    record83.set("explanation", "Overfitting: model learns training data too well, poor generalization. Prevention: cross-validation, regularization, more data, simpler model.");
    record83.set("practicalExample", "Model with 100 features for 50 samples likely overfits. Use regularization or feature selection");
    record83.set("keyPoints", ["Generalization", "Training vs test", "Prevention", "Trade-offs"]);
    record83.set("relatedTopics", ["Machine learning", "Model evaluation", "Validation"]);
    record83.set("difficulty", "Hard");
    record83.set("category", "Machine Learning");
  try {
    app.save(record83);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record84 = new Record(collection);
    record84.set("careerSlug", "data-analyst");
    record84.set("careerName", "Data Analyst");
    record84.set("level", "Advanced");
    record84.set("questionNumber", 45);
    record84.set("question", "What is underfitting?");
    record84.set("explanation", "Underfitting: model is too simple, doesn't capture patterns. Poor performance on both training and test data. Solution: more complex model, more features.");
    record84.set("practicalExample", "Linear model for non-linear data. Model with 2 features when 10 are needed");
    record84.set("keyPoints", ["Model complexity", "Pattern capture", "Performance", "Solution"]);
    record84.set("relatedTopics", ["Machine learning", "Model evaluation", "Bias-variance"]);
    record84.set("difficulty", "Hard");
    record84.set("category", "Machine Learning");
  try {
    app.save(record84);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record85 = new Record(collection);
    record85.set("careerSlug", "data-analyst");
    record85.set("careerName", "Data Analyst");
    record85.set("level", "Advanced");
    record85.set("questionNumber", 46);
    record85.set("question", "What is cross-validation?");
    record85.set("explanation", "Cross-validation splits data into k folds, trains on k-1 folds, tests on 1 fold. Repeated k times. Provides robust performance estimate.");
    record85.set("practicalExample", "5-fold CV: split data into 5 parts, train on 4, test on 1, repeat 5 times, average results");
    record85.set("keyPoints", ["Data splitting", "Robust evaluation", "Overfitting detection", "Performance estimate"]);
    record85.set("relatedTopics", ["Model evaluation", "Validation", "Machine learning"]);
    record85.set("difficulty", "Hard");
    record85.set("category", "Machine Learning");
  try {
    app.save(record85);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record86 = new Record(collection);
    record86.set("careerSlug", "data-analyst");
    record86.set("careerName", "Data Analyst");
    record86.set("level", "Advanced");
    record86.set("questionNumber", 47);
    record86.set("question", "What is the difference between accuracy, precision, and recall?");
    record86.set("explanation", "Accuracy: correct predictions / total. Precision: true positives / predicted positives. Recall: true positives / actual positives.");
    record86.set("practicalExample", "Spam detection: accuracy (correct classifications), precision (false positives), recall (false negatives)");
    record86.set("keyPoints", ["Correct predictions", "False positives", "False negatives", "Trade-offs"]);
    record86.set("relatedTopics", ["Model evaluation", "Classification metrics", "Performance"]);
    record86.set("difficulty", "Hard");
    record86.set("category", "Machine Learning");
  try {
    app.save(record86);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record87 = new Record(collection);
    record87.set("careerSlug", "data-analyst");
    record87.set("careerName", "Data Analyst");
    record87.set("level", "Advanced");
    record87.set("questionNumber", 48);
    record87.set("question", "What is the F1 score?");
    record87.set("explanation", "F1 score is harmonic mean of precision and recall. Balances both metrics. Useful when precision and recall are equally important.");
    record87.set("practicalExample", "Precision 0.8, Recall 0.6, F1 = 2 * (0.8 * 0.6) / (0.8 + 0.6) = 0.686");
    record87.set("keyPoints", ["Harmonic mean", "Balance", "Imbalanced data", "Evaluation"]);
    record87.set("relatedTopics", ["Model evaluation", "Classification metrics", "Performance"]);
    record87.set("difficulty", "Hard");
    record87.set("category", "Machine Learning");
  try {
    app.save(record87);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record88 = new Record(collection);
    record88.set("careerSlug", "data-analyst");
    record88.set("careerName", "Data Analyst");
    record88.set("level", "Advanced");
    record88.set("questionNumber", 49);
    record88.set("question", "What is the ROC curve and AUC?");
    record88.set("explanation", "ROC curve plots true positive rate vs false positive rate. AUC (Area Under Curve) measures model performance (0.5 = random, 1.0 = perfect).");
    record88.set("practicalExample", "AUC 0.9 means 90% chance model ranks random positive higher than random negative");
    record88.set("keyPoints", ["Performance visualization", "Threshold trade-off", "Imbalanced data", "Comparison"]);
    record88.set("relatedTopics", ["Model evaluation", "Classification metrics", "Performance"]);
    record88.set("difficulty", "Hard");
    record88.set("category", "Machine Learning");
  try {
    app.save(record88);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record89 = new Record(collection);
    record89.set("careerSlug", "data-analyst");
    record89.set("careerName", "Data Analyst");
    record89.set("level", "Advanced");
    record89.set("questionNumber", 50);
    record89.set("question", "What is feature engineering?");
    record89.set("explanation", "Feature engineering creates new features from raw data to improve model performance. Includes scaling, encoding, transformation, interaction terms.");
    record89.set("practicalExample", "From date: extract day, month, year, day of week. From text: word count, sentiment score");
    record89.set("keyPoints", ["Feature creation", "Domain knowledge", "Performance improvement", "Preprocessing"]);
    record89.set("relatedTopics", ["Machine learning", "Data preparation", "Model improvement"]);
    record89.set("difficulty", "Hard");
    record89.set("category", "Machine Learning");
  try {
    app.save(record89);
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
