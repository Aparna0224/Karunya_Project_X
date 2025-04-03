# Module 1: Introduction to Java Programming

## 1.1 Overview of Java

### History and Evolution of Java
Java was developed by James Gosling and his team at Sun Microsystems in 1995. Initially, it was designed for interactive television, but it soon became a general-purpose programming language. Over time, Java has undergone several updates, the most significant being the introduction of new libraries, enhanced performance, and security improvements.

The key milestones in Java's evolution include:
- **Java 1.0 (1995):** Initial release with core libraries
- **Java 2 (1998):** Introduction of Swing, Collections Framework
- **Java SE 5 (2004):** Generics, enhanced for-loop, auto-boxing
- **Java SE 8 (2014):** Lambda expressions, Stream API
- **Java SE 17 (2021):** Long-term support (LTS) version with performance improvements

### Features and Benefits of Java
Java is widely used due to its several key features:
1. **Platform Independence:** Java's "Write Once, Run Anywhere" (WORA) principle allows code to run on any system with a Java Virtual Machine (JVM).
2. **Object-Oriented:** Java follows an object-oriented programming (OOP) paradigm, making code modular and reusable.
3. **Robust and Secure:** Java offers automatic memory management, garbage collection, and security features like bytecode verification.
4. **Multithreading Support:** Java enables concurrent execution of multiple tasks for enhanced performance.
5. **Rich API:** Java includes built-in libraries for data structures, networking, and GUI development.

### Java Virtual Machine (JVM), Java Runtime Environment (JRE), and Java Development Kit (JDK)
- **JVM (Java Virtual Machine):** Executes Java bytecode and enables cross-platform compatibility.
- **JRE (Java Runtime Environment):** Includes the JVM and standard libraries required for running Java applications.
- **JDK (Java Development Kit):** Contains the JRE along with development tools like compilers and debuggers.

## 1.2 Setting Up the Development Environment

### Installing the JDK
To start coding in Java, you need to install the JDK:
1. Download the latest JDK from [Oracle’s official website](https://www.oracle.com/java/technologies/javase-downloads.html) or OpenJDK.
2. Install the JDK based on your operating system (Windows, macOS, or Linux).
3. Set the **JAVA_HOME** environment variable for easy access.

### Setting Up an Integrated Development Environment (IDE)
Common Java IDEs include:
- **IntelliJ IDEA** (Preferred for modern Java development)
- **Eclipse** (Popular for enterprise applications)
- **NetBeans** (Provides built-in support for Java development)

### Writing and Running Your First Java Program
Once installed, write a simple program:
```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```
Compile and run the program using the terminal:
```sh
javac HelloWorld.java
java HelloWorld
```

## 1.3 Basic Syntax and Structure

### Understanding the Structure of a Java Program
A typical Java program consists of:
- **Class Definition:** Defines the structure of the program.
- **Main Method:** The entry point where execution begins.
- **Statements:** Individual instructions that perform operations.

### Java Keywords and Naming Conventions
- **Keywords:** Reserved words like `class`, `public`, `static`, `void`, `if`, `else`.
- **Naming Conventions:**
  - Class names should start with uppercase (e.g., `MyClass`).
  - Variable and method names should be in camelCase (e.g., `myVariable`).

### Comments and Documentation
Java supports three types of comments:
- **Single-line:** `// This is a single-line comment`
- **Multi-line:** `/* This is a multi-line comment */`
- **Javadoc:** `/** This is a Javadoc comment for documentation */`

## 1.4 Data Types and Variables

### Primitive Data Types
Java supports 8 primitive data types:
- **Integer types:** `byte`, `short`, `int`, `long`
- **Floating-point types:** `float`, `double`
- **Character type:** `char`
- **Boolean type:** `boolean`

Example:
```java
int age = 25;
double price = 99.99;
char grade = 'A';
boolean isJavaFun = true;
```

### Reference Data Types
- **String:** Represents a sequence of characters.
- **Arrays:** Stores multiple values of the same type.
- **Classes & Objects:** Used in object-oriented programming.

Example:
```java
String message = "Welcome to Java";
int[] numbers = {1, 2, 3, 4, 5};
```

### Variable Declaration and Initialization
- Declare a variable: `int number;`
- Initialize a variable: `number = 10;`
- Declare and initialize together: `int number = 10;`

### Type Casting and Type Conversion
Type casting is converting one data type into another.
- **Implicit Casting (Widening Conversion):**
  ```java
  int num = 100;
  double converted = num; // int to double
  ```
- **Explicit Casting (Narrowing Conversion):**
  ```java
  double decimalNum = 9.78;
  int intNum = (int) decimalNum; // double to int
  ```

## 1.5 Operators and Expressions

### Arithmetic, Relational, Logical, and Bitwise Operators
#### **Arithmetic Operators**
- `+` (Addition)
- `-` (Subtraction)
- `*` (Multiplication)
- `/` (Division)
- `%` (Modulus)

Example:
```java
int sum = 10 + 5;
```

#### **Relational Operators**
- `==` (Equal to)
- `!=` (Not equal to)
- `>` (Greater than)
- `<` (Less than)
- `>=` (Greater than or equal to)
- `<=` (Less than or equal to)

Example:
```java
boolean result = (10 > 5); // true
```

#### **Logical Operators**
- `&&` (AND)
- `||` (OR)
- `!` (NOT)

Example:
```java
boolean condition = (10 > 5) && (5 < 8); // true
```

#### **Bitwise Operators**
- `&` (Bitwise AND)
- `|` (Bitwise OR)
- `^` (Bitwise XOR)
- `<<` (Left shift)
- `>>` (Right shift)

### Operator Precedence and Associativity
Operators have different precedence levels. Multiplication (`*`), division (`/`), and modulus (`%`) have higher precedence than addition (`+`) and subtraction (`-`).

Example:
```java
int result = 10 + 5 * 2; // 10 + (5*2) = 20
```

### Using Expressions in Programs
Expressions combine variables, literals, and operators to produce a value.

Example:
```java
int total = (5 + 3) * 2; // 16
```

This module provides a strong foundation in Java programming, covering essential topics to get started with Java development.

# Module 2: Object-Oriented Programming (OOP) Concepts

## 2.1 Introduction to OOP

Object-Oriented Programming (OOP) is a programming paradigm based on the concept of objects, which contain data and methods. Java is a fully object-oriented language that follows OOP principles to promote modularity, reusability, and scalability.

### Principles of OOP

1. **Encapsulation**: 
   - Encapsulation is the practice of bundling data (variables) and methods (functions) that operate on the data into a single unit, known as a class.
   - It helps protect data from unintended modifications by using access modifiers like `private`, `public`, and `protected`.
   - Encapsulation also enables data hiding, meaning that internal object details can be hidden from the outside world.
   - Example:
     ```java
     class Person {
         private String name;
         
         public void setName(String newName) {
             name = newName;
         }
         
         public String getName() {
             return name;
         }
     }
     ```
   - Here, the `name` variable is private and cannot be accessed directly, ensuring controlled access through getter and setter methods.

2. **Inheritance**: 
   - Inheritance allows a class (child class) to inherit properties and behavior from another class (parent class).
   - It promotes code reusability, making the system more manageable by reducing redundancy.
   - Java supports different types of inheritance:
     - **Single Inheritance**: A child class inherits from one parent class.
     - **Multilevel Inheritance**: A child class inherits from another child class.
     - **Hierarchical Inheritance**: Multiple child classes inherit from a single parent class.
     - **Multiple Inheritance (via Interfaces)**: Java does not support multiple inheritance using classes but allows it through interfaces.
   - Example:
     ```java
     class Animal {
         void makeSound() {
             System.out.println("Animal makes a sound");
         }
     }
     class Dog extends Animal {
         void bark() {
             System.out.println("Dog barks");
         }
     }
     ```
   - Here, the `Dog` class inherits the `makeSound()` method from the `Animal` class.

3. **Polymorphism**:
   - Polymorphism allows methods to perform different tasks based on the object that calls them.
   - It enables method overloading (compile-time polymorphism) and method overriding (runtime polymorphism).
   - **Method Overloading**:
     - Allows multiple methods in the same class with the same name but different parameter lists.
     - Example:
       ```java
       class MathOperations {
           int add(int a, int b) {
               return a + b;
           }
           double add(double a, double b) {
               return a + b;
           }
       }
       ```
   - **Method Overriding**:
     - Allows a subclass to provide a specific implementation of a method from the superclass.
     - Example:
       ```java
       class Shape {
           void draw() {
               System.out.println("Drawing a shape");
           }
       }
       class Circle extends Shape {
           void draw() {
               System.out.println("Drawing a circle");
           }
       }
       ```
   - **The `instanceof` Operator**:
     - Used to check whether an object belongs to a particular class.
     - Example:
       ```java
       Animal myAnimal = new Dog();
       System.out.println(myAnimal instanceof Dog); // true
       ```

4. **Abstraction**:
   - Abstraction allows hiding the implementation details and exposing only the relevant functionalities.
   - It can be achieved using abstract classes and interfaces.
   - Example:
     ```java
     abstract class Vehicle {
         abstract void start();
     }
     class Car extends Vehicle {
         void start() {
             System.out.println("Car is starting");
         }
     }
     ```
   - Abstraction provides a blueprint for derived classes without providing an implementation.

## 2.2 Classes and Objects

### Defining Classes and Creating Objects
- A class is a blueprint for creating objects.
- An object is an instance of a class that holds its own values.
- Example:
  ```java
  class Car {
      String model;
      int year;
      
      void displayInfo() {
          System.out.println("Model: " + model + ", Year: " + year);
      }
  }
  public class Main {
      public static void main(String[] args) {
          Car myCar = new Car();
          myCar.model = "Toyota";
          myCar.year = 2023;
          myCar.displayInfo();
      }
  }
  ```
- The object `myCar` holds unique values for `model` and `year`.

### Instance Variables and Methods
- Instance variables belong to an object and are initialized when the object is created.
- Methods define behavior that an object can perform.

### Constructors and Constructor Overloading
- A constructor initializes an object.
- Constructor overloading allows multiple constructors with different parameters.
- Example:
  ```java
  class Car {
      String model;
      int year;
      
      Car() {
          model = "Unknown";
          year = 0;
      }
      
      Car(String m, int y) {
          model = m;
          year = y;
      }
  }
  ```

### Defining and Implementing Interfaces
- An interface defines a contract for classes to implement.
- Example:
  ```java
  interface Animal {
      void eat();
  }
  class Dog implements Animal {
      public void eat() {
          System.out.println("Dog eats bones");
      }
  }
  ```

### Differences Between Abstract Classes and Interfaces
- Abstract classes can have both abstract and concrete methods, while interfaces only have abstract methods (before Java 8).
- A class can extend only one abstract class but implement multiple interfaces.

---
the module provides a deeper understanding of OOP concepts in Java.

# Module 3: Core Java APIs

## 3.1 Strings and String Manipulation

### The `String` Class and Its Methods
The `String` class in Java is one of the most commonly used classes in the Java API. It represents a sequence of characters and is immutable, meaning that once a `String` object is created, its value cannot be changed. This immutability ensures security and optimizes memory usage by enabling string interning, where Java stores only one instance of each unique string in memory.

#### Common String Methods:
- `length()`: Returns the length of the string, useful for determining the number of characters.
- `charAt(int index)`: Retrieves the character at a specified index, helping in parsing or manipulation tasks.
- `substring(int beginIndex, int endIndex)`: Extracts a portion of the string, often used for string splitting.
- `toUpperCase()` / `toLowerCase()`: Converts a string to upper or lower case, useful for case-insensitive comparisons.
- `trim()`: Removes whitespace from the beginning and end of the string, preventing issues caused by extra spaces.
- `replace(oldChar, newChar)`: Replaces occurrences of a character or substring with another, essential for data cleansing.

Strings are widely used in Java programming, from handling user input to working with file data. Since `String` objects are immutable, modifying a string results in the creation of a new object, which can affect performance when performing frequent modifications. To overcome this, Java provides mutable alternatives like `StringBuilder` and `StringBuffer`.

### String Concatenation and Formatting
Concatenation refers to joining multiple strings together. This can be achieved using the `+` operator or the `concat()` method. While these methods work for simple cases, they are inefficient when dealing with large amounts of string data, as they create multiple string objects in memory.

For performance optimization, Java provides the `StringBuilder` and `StringBuffer` classes. `StringBuilder` is faster but not thread-safe, while `StringBuffer` is thread-safe and should be used in multithreaded environments.

Another approach to string manipulation is formatting, which allows inserting variables into a string dynamically. `String.format()` is commonly used for this purpose, providing better readability and flexibility.
Example:
```java
String str = "Hello World";
System.out.println(str.length()); // Outputs: 11
System.out.println(str.toUpperCase()); // Outputs: HELLO WORLD
```

### String Concatenation and Formatting
Strings can be concatenated using the `+` operator or `concat()` method. For advanced formatting, `String.format()` and `printf()` can be used.

Example:
```java
String firstName = "John";
String lastName = "Doe";
String fullName = firstName + " " + lastName;
System.out.println(fullName); // Outputs: John Doe
```

### `StringBuilder` and `StringBuffer`
For mutable string operations, Java provides `StringBuilder` (not thread-safe) and `StringBuffer` (thread-safe).

Example:
```java
StringBuilder sb = new StringBuilder("Java");
sb.append(" Programming");
System.out.println(sb.toString()); // Outputs: Java Programming
---

## 3.2 Arrays and Collections

### Single-Dimensional and Multi-Dimensional Arrays
Arrays in Java are fixed-size data structures used to store multiple values of the same type. They provide fast access to elements but require a predefined size, limiting their flexibility.

Multi-dimensional arrays, such as two-dimensional arrays, allow storing data in matrix-like structures. They are useful in scenarios like game development, image processing, and database representations.

### Introduction to the Collections Framework
The Java Collections Framework (JCF) provides a more flexible alternative to arrays. It includes dynamic data structures like `ArrayList`, `HashSet`, and `HashMap`, which can grow or shrink as needed. Collections support various operations such as searching, sorting, and filtering, making them powerful tools for data management.

### `List`, `Set`, and `Map` Implementations
- **`List`**: Maintains an ordered collection of elements that allow duplicates. Common implementations include `ArrayList` and `LinkedList`.
- **`Set`**: Ensures uniqueness of elements and does not allow duplicates. Implementations like `HashSet` and `TreeSet` provide different performance trade-offs.
- **`Map`**: Stores key-value pairs, enabling fast lookups. `HashMap` is the most commonly used implementation due to its efficiency.

Java collections are highly optimized and should be used instead of arrays for most real-world applications.

---
Example:
```java
int[] numbers = {1, 2, 3, 4, 5};
System.out.println(numbers[2]); // Outputs: 3
```

Multi-dimensional array example:
```java
int[][] matrix = {{1, 2}, {3, 4}};
System.out.println(matrix[1][1]); // Outputs: 4
```

### Introduction to the Collections Framework
The Collections Framework provides dynamic data structures like `ArrayList`, `HashSet`, and `HashMap`.

### `List`, `Set`, and `Map` Implementations
- `List`: Ordered collection (e.g., `ArrayList`, `LinkedList`).
- `Set`: Unique elements (e.g., `HashSet`, `TreeSet`).
- `Map`: Key-value pairs (e.g., `HashMap`, `TreeMap`).

Example:
```java
List<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
System.out.println(names.get(1)); // Outputs: Bob
```

### Iterators and Enhanced For-Loop
Iterators allow traversing collections efficiently.

Example:
```java
for(String name : names) {
    System.out.println(name);
}
```

---
## 3.3 Exception Handling

### Types of Exceptions: Checked and Unchecked
Exceptions are errors that occur during program execution, causing disruptions. Java provides a structured way to handle exceptions, ensuring that the program can recover from errors gracefully.

Checked exceptions must be handled explicitly using `try-catch` blocks or declared in the method signature using `throws`. Examples include `IOException` and `SQLException`. These exceptions typically arise from external factors such as file access issues or database errors.

Unchecked exceptions, also known as runtime exceptions, do not require explicit handling. Examples include `NullPointerException` and `ArrayIndexOutOfBoundsException`. These usually indicate programming errors that should be fixed in code rather than caught at runtime.

### Try-Catch Blocks and Multiple Catch Clauses
A `try-catch` block is used to catch and handle exceptions. Multiple `catch` clauses allow handling different types of exceptions separately, improving error handling granularity.

### The `finally` Block
The `finally` block is always executed, whether an exception occurs or not. It is typically used for resource cleanup, such as closing file streams or database connections, ensuring that resources do not remain open indefinitely.

### Creating Custom Exceptions
For specific application requirements, custom exceptions can be created by extending the `Exception` class. This improves error reporting and debugging by providing meaningful exception messages.

---
### Types of Exceptions: Checked and Unchecked
- Checked Exceptions: Caught at compile-time (e.g., `IOException`).
- Unchecked Exceptions: Occur at runtime (e.g., `NullPointerException`).

### Try-Catch Blocks and Multiple Catch Clauses
Used for handling exceptions gracefully.

Example:
```java
try {
    int divideByZero = 5 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero");
}
```

### The `finally` Block
Ensures execution of crucial code.

Example:
```java
try {
    File file = new File("data.txt");
} catch (FileNotFoundException e) {
    System.out.println("File not found");
} finally {
    System.out.println("Execution completed");
}
```

### Creating Custom Exceptions
Custom exceptions extend the `Exception` class.

Example:
```java
class CustomException extends Exception {
    public CustomException(String message) {
        super(message);
    }
}
```

---
## 3.4 Input and Output (I/O) Streams

### Byte and Character Streams
Java I/O streams allow reading and writing data in various formats. Byte streams handle binary data, while character streams handle textual data, supporting internationalization.

### Reading from and Writing to Files
Java provides classes like `FileReader`, `BufferedReader`, and `Scanner` for reading files, and `FileWriter` and `BufferedWriter` for writing files. Proper exception handling is crucial to avoid file access errors.

### Buffered Streams
Buffered streams improve performance by reducing the number of I/O operations. They temporarily store data in a buffer, reducing direct interactions with the disk.

### Serialization and Deserialization
Serialization allows converting Java objects into a byte stream, which can be saved to a file or sent over a network. Deserialization restores objects from byte streams, enabling persistent storage and communication between applications.

---
### Byte and Character Streams
Java provides `InputStream` and `OutputStream` for handling byte streams, and `Reader` and `Writer` for character streams.

### Reading from and Writing to Files
Example:
```java
FileWriter writer = new FileWriter("output.txt");
writer.write("Hello, Java!");
writer.close();
```

### Buffered Streams
Improve performance by reducing disk I/O operations.

Example:
```java
BufferedReader br = new BufferedReader(new FileReader("input.txt"));
String line = br.readLine();
br.close();
```

### Serialization and Deserialization
Serialization allows converting objects into byte streams.

Example:
```java
ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("object.dat"));
out.writeObject(new Person("Alice", 25));
out.close();
```

---

## 3.5 Utility Classes

### `java.time` Package for Date and Time Manipulation
Java 8 introduced a robust date and time API under `java.time`, which resolves issues with older date classes. `LocalDate`, `LocalTime`, and `LocalDateTime` provide immutable and thread-safe representations of date and time.

### `Math` Class for Mathematical Operations
The `Math` class provides various mathematical functions, such as logarithms, trigonometry, and exponentiation. These functions are optimized for performance and widely used in scientific and financial applications.

### Formatting with `DecimalFormat` and `NumberFormat`
Formatting numbers is essential for financial applications, ensuring proper currency representation and precision control. The `DecimalFormat` class provides customizable formatting patterns, allowing precise control over number display.

---
### `java.time` Package for Date and Time Manipulation
Java 8 introduced `LocalDate`, `LocalTime`, and `LocalDateTime`.

Example:
```java
LocalDate date = LocalDate.now();
System.out.println(date);
```

### `Math` Class for Mathematical Operations
Provides functions for mathematical calculations.

Example:
```java
System.out.println(Math.sqrt(16)); // Outputs: 4.0
```

### Formatting with `DecimalFormat` and `NumberFormat`
Used for custom number formatting.

Example:
```java
DecimalFormat df = new DecimalFormat("#.##");
System.out.println(df.format(123.4567)); // Outputs: 123.46
```

---
This module provides a comprehensive understanding of Java's core APIs, emphasizing conceptual depth, practical use cases, and performance considerations.

# Module 4: Advanced Java Concepts

## 4.1 Generics
### Introduction to Generics and Type Parameters
Generics in Java are a powerful feature that allows developers to create classes, interfaces, and methods with type parameters. This means that instead of specifying a specific data type, generics enable developers to define a placeholder that can be replaced with a concrete type at runtime. Generics improve code reusability, type safety, and readability by reducing the need for explicit casting and making the type relationships more explicit.

### Generic Classes and Methods
A generic class allows parameters to be assigned dynamically, ensuring that the correct type is used throughout the class without requiring explicit casting. Generic methods work similarly by defining type parameters within the method signature, allowing methods to be applied to different data types while maintaining type safety. This flexibility makes generics particularly useful in data structures such as collections, where elements can belong to different types while preserving type constraints.

### Bounded Type Parameters
In some cases, it is necessary to limit the type parameters to certain types. Java allows this by using bounded type parameters, which specify an upper bound for the generic type. This ensures that the generic type can only be substituted with a subtype of the specified bound, preventing errors and enhancing type safety. For example, specifying `<T extends Number>` ensures that only numeric types can be used as a parameter, enabling mathematical operations within the generic class or method.

### Generics and the Collections Framework
The Java Collections Framework extensively uses generics to enforce type safety and eliminate unchecked type conversions. With generics, collections such as `ArrayList<T>` and `HashMap<K, V>` ensure that only objects of the specified type can be added, reducing runtime errors caused by type mismatches. This feature enhances maintainability, improves readability, and optimizes the use of collections in Java applications.

```java
class Box<T> {
    private T value;
    
    public void setValue(T value) {
        this.value = value;
    }
    
    public T getValue() {
        return value;
    }
}
```
Generic methods allow method parameters and return types to be specified as generic types.
```java
public static <T> void printArray(T[] array) {
    for (T element : array) {
        System.out.println(element);
    }
}
```

### Bounded Type Parameters
Type parameters can be restricted to a specific type or its subclasses using the `extends` keyword.
```java
class NumericBox<T extends Number> {
    private T num;
    
    public NumericBox(T num) {
        this.num = num;
    }
    public double getDoubleValue() {
        return num.doubleValue();
    }
}
```

### Generics and the Collections Framework
Generics are widely used in Java Collections, providing type-safe data structures.
```java
List<String> list = new ArrayList<>();
list.add("Hello");  // Type safety ensured
```

## 4.2 Multithreading and Concurrency
### Creating and Managing Threads
Multithreading is the process of executing multiple tasks concurrently within a single application, enhancing responsiveness and performance. In Java, threads can be created by extending the `Thread` class or implementing the `Runnable` interface. By utilizing multiple threads, applications can perform background tasks without blocking the main execution flow, improving user experience and efficiency.

### Synchronization and Thread Safety
When multiple threads access shared resources, synchronization ensures that only one thread can access the resource at a time, preventing data inconsistencies and race conditions. Java provides mechanisms such as synchronized methods, synchronized blocks, and explicit locks to control thread execution. Proper synchronization is crucial in multi-threaded applications to maintain data integrity and prevent unexpected behavior caused by concurrent modifications.

### Concurrency Utilities
The `java.util.concurrent` package provides advanced concurrency utilities to manage threads efficiently. Features such as thread pools, concurrent collections, and atomic variables help optimize multi-threaded applications by reducing the overhead associated with thread creation and execution. These utilities simplify the implementation of complex concurrent operations, making Java a powerful language for developing scalable and high-performance applications.

```java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running...");
    }
}
```
```java
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Runnable is running...");
    }
}
```

### Synchronization and Thread Safety
Synchronization ensures that only one thread can access a critical section of code at a time, preventing data inconsistencies.
```java
class Counter {
    private int count = 0;
    synchronized void increment() {
        count++;
    }
}
```

### Concurrency Utilities
Java provides the `java.util.concurrent` package for managing threads efficiently.
```java
ExecutorService executor = Executors.newFixedThreadPool(3);
executor.execute(new MyRunnable());
executor.shutdown();
```

## 4.3 Networking
### Introduction to Java Networking APIs
Networking in Java allows applications to communicate over networks using protocols such as HTTP, TCP, and UDP. The `java.net` package provides a comprehensive set of classes for implementing network-based applications, enabling developers to build robust, scalable, and efficient communication systems.

### Working with URLs and URIs
Java enables developers to work with URLs (Uniform Resource Locators) and URIs (Uniform Resource Identifiers) to access and manage online resources. The `URL` and `URI` classes provide methods for retrieving web content, parsing addresses, and handling remote resources efficiently, making them essential for web-based applications.

### Socket Programming: TCP and UDP
Socket programming enables two-way communication between applications over a network. TCP (Transmission Control Protocol) ensures reliable, ordered data transmission, making it suitable for applications requiring accuracy, such as messaging and file transfer systems. UDP (User Datagram Protocol), on the other hand, provides a faster, connectionless communication model ideal for real-time applications like video streaming and online gaming.

### Building Simple Client-Server Applications
Client-server applications form the backbone of distributed systems, where multiple clients interact with a central server to exchange data. Java’s networking APIs facilitate the development of these applications by providing tools for handling requests, managing connections, and processing responses efficiently.

```java
URL url = new URL("https://example.com");
BufferedReader reader = new BufferedReader(new InputStreamReader(url.openStream()));
```

### Socket Programming: TCP and UDP
Sockets enable communication between applications over a network. TCP provides reliable communication, while UDP is used for fast, connectionless communication.
```java
// Server Socket
ServerSocket server = new ServerSocket(5000);
Socket socket = server.accept();
```
```java
// Client Socket
Socket client = new Socket("localhost", 5000);
```

### Building Simple Client-Server Applications
Using sockets, a basic client-server model can be created for chat applications, file transfers, and remote procedure calls.

## 4.4 Lambda Expressions and Functional Interfaces
### Understanding Functional Programming in Java
Functional programming is a programming paradigm that treats functions as first-class citizens, allowing them to be passed as arguments, returned from methods, and assigned to variables. Java introduced functional programming concepts through lambda expressions and functional interfaces, enhancing code conciseness and expressiveness.

### Syntax and Usage of Lambda Expressions
Lambda expressions provide a more compact way to define anonymous functions in Java, reducing boilerplate code associated with traditional method implementations. By using lambda expressions, developers can create more readable and maintainable code, improving overall efficiency.

### Predefined Functional Interfaces
Java provides several built-in functional interfaces in the `java.util.function` package, such as `Predicate`, `Consumer`, `Function`, and `Supplier`. These interfaces standardize common functional patterns, making it easier to implement operations such as filtering, transforming, and consuming data without writing redundant code.

### Method References
Method references allow developers to refer to existing methods by their names, simplifying lambda expressions further. By using method references, Java code becomes more readable and reduces unnecessary syntax, making it easier to understand and maintain.

```java
(int x, int y) -> x + y;
```

### Predefined Functional Interfaces
Java provides common functional interfaces in `java.util.function` package.
```java
Function<Integer, Integer> square = x -> x * x;
System.out.println(square.apply(5));
```

### Method References
Method references allow calling methods using `::` notation.
```java
Consumer<String> printer = System.out::println;
```

## 4.5 Stream API

### Introduction to Streams
### Introduction to Streams
The Stream API in Java provides a powerful way to process sequences of elements in a functional programming style. Streams allow developers to perform operations such as filtering, mapping, and reducing data without modifying the underlying data structure. By enabling declarative data processing, streams enhance code readability and performance.

### Stream Operations: Filtering, Mapping, and Reducing
Streams support various operations for processing data efficiently. Filtering operations enable selecting specific elements based on conditions, mapping transforms elements using a function, and reducing aggregates values into a single result. These operations provide a concise way to manipulate data while ensuring high performance and scalability.

### Parallel Streams
Parallel streams leverage multi-core processors to execute stream operations concurrently, improving performance in data-intensive applications. By distributing computation across multiple threads, parallel streams significantly reduce processing time for large datasets.

### Working with Primitive Streams
Java provides specialized stream types such as `IntStream`, `DoubleStream`, and `LongStream` for handling primitive data types efficiently. These streams eliminate the overhead of autoboxing and unboxing, optimizing performance when working with numerical data.

```java
List<String> names = List.of("Alice", "Bob", "Charlie");
names.stream().filter(name -> name.startsWith("A")).forEach(System.out::println);
```

### Parallel Streams
Parallel streams allow concurrent data processing.
```java
list.parallelStream().forEach(System.out::println);
```

### Working with Primitive Streams
Java provides `IntStream`, `DoubleStream`, and `LongStream` for primitive data types.
```java
IntStream.range(1, 10).forEach(System.out::println);
```

This module covers key advanced concepts in Java programming, equipping developers with essential tools for efficient and high-performance application development.

# Module 5: Graphical User Interface (GUI) Development

## 5.1 Introduction to GUI Programming
Graphical User Interface (GUI) programming in Java allows developers to create visually interactive applications that enhance user experience. Unlike command-line applications that rely on textual input and output, GUI-based applications provide graphical components such as buttons, menus, text fields, and sliders, making software more intuitive and user-friendly.

Java provides multiple frameworks for GUI development, with the two primary ones being the Abstract Window Toolkit (AWT) and Swing. AWT was the first GUI framework in Java, offering basic components but with limited flexibility. Swing, introduced as an improvement over AWT, provides a richer set of components and allows for a more customizable interface. In addition to these, JavaFX is a modern framework that enhances GUI development by incorporating CSS-based styling, FXML for UI definition, and advanced graphical features such as animations and media integration.

Understanding these frameworks and their components is crucial for developing interactive desktop applications. Each GUI framework operates using an event-driven programming model, where user interactions trigger specific responses, allowing for dynamic application behavior.


- **Abstract Window Toolkit (AWT)**: The original Java GUI framework, providing basic window components.
- **Swing**: An advanced, lightweight toolkit that extends AWT and offers more flexible components.
- **JavaFX**: A modern UI toolkit designed for rich internet applications with enhanced graphics and media support.

Among these, Swing and JavaFX are the most commonly used due to their flexibility and extensive features.

## 5.2 Building User Interfaces with Swing
Swing is one of the most widely used GUI frameworks in Java. It provides a robust set of components that allow developers to design sophisticated user interfaces. The primary building block of any Swing application is the JFrame, which serves as the main window. Components such as buttons, text fields, labels, and checkboxes are added to the JFrame to create interactive applications.

To organize these components efficiently, Swing provides layout managers, which control how elements are arranged within a container. Some commonly used layout managers include BorderLayout, FlowLayout, GridLayout, and BoxLayout. Each layout manager offers unique ways of positioning components, ensuring that the application remains visually structured across different screen sizes.

Event handling is another critical aspect of GUI development. Swing uses the event listener model, where specific listeners capture user actions such as clicks, key presses, and mouse movements. These listeners process events and trigger appropriate responses, such as opening a dialog box, submitting a form, or changing the interface dynamically.

### Creating Windows Using JFrame

The `JFrame` class is the foundation for creating main application windows. It provides features such as setting titles, defining dimensions, and adding components.

#### Example:
```java
import javax.swing.*;

public class MainWindow {
    public static void main(String[] args) {
        JFrame frame = new JFrame("My First GUI");
        frame.setSize(400, 300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}
```

### Adding Components

Swing provides a variety of UI components, such as:
- **JButton** (Button for user interaction)
- **JLabel** (Text display)
- **JTextField** (Input field)
- **JTextArea** (Multi-line input field)
- **JCheckBox** and **JRadioButton** (Selection options)
- **JComboBox** (Dropdown menu)

#### Example:
```java
JButton button = new JButton("Click Me");
JLabel label = new JLabel("Hello, Swing!");
JTextField textField = new JTextField(20);
```

### Layout Managers

Layouts in Swing determine how components are arranged within a container. Common layout managers include:
- **FlowLayout** (Components are arranged in a row)
- **BorderLayout** (Divides container into five regions: North, South, East, West, and Center)
- **GridLayout** (Arranges components in a grid format)
- **BoxLayout** (Components arranged in a single row or column)

#### Example:
```java
frame.setLayout(new FlowLayout());
frame.add(button);
frame.add(label);
frame.add(textField);
```

### Event Handling and Listeners

Swing uses the event-driven programming model. Key listener interfaces include:
- `ActionListener` for button clicks
- `KeyListener` for keyboard input
- `MouseListener` for mouse events
- `WindowListener` for window-related events

#### Example:
```java
button.addActionListener(e -> JOptionPane.showMessageDialog(frame, "Button Clicked!"));
```

## 5.3 Advanced Swing Components
Beyond basic components, Swing provides a variety of advanced UI elements that enhance the functionality and aesthetics of an application. Menus and toolbars allow users to navigate through different functionalities seamlessly, improving usability. Dialog boxes enable interaction through message pop-ups, confirmations, and input prompts, making applications more interactive.

Swing also includes sophisticated components such as tables and trees, which facilitate data representation and organization. Tables allow for the structured display of data in rows and columns, commonly used in spreadsheet-like applications. Trees enable hierarchical data representation, useful for file explorers and data visualization. Custom rendering techniques further enhance these components by modifying their appearance and behavior according to user requirements.

Understanding these advanced components enables developers to create professional-grade applications that offer a smooth and efficient user experience.

### Menus and Toolbars

Swing provides `JMenuBar`, `JMenu`, and `JMenuItem` for creating application menus, along with `JToolBar` for quick-access toolbars.

#### Example:
```java
JMenuBar menuBar = new JMenuBar();
JMenu fileMenu = new JMenu("File");
JMenuItem openItem = new JMenuItem("Open");
fileMenu.add(openItem);
menuBar.add(fileMenu);
frame.setJMenuBar(menuBar);
```

### Dialogs and Pop-ups

`JOptionPane` enables the creation of alert dialogs, confirmation dialogs, and input dialogs for user interaction.

#### Example:
```java
JOptionPane.showMessageDialog(frame, "This is an alert message.");
```

### Tables and Trees

Swing includes powerful data display components such as:
- `JTable`: Displays tabular data
- `JTree`: Displays hierarchical data

Both components support custom rendering, sorting, and event handling.

## 5.4 Introduction to JavaFX
JavaFX is a modern framework that significantly improves Java GUI development by integrating advanced graphical capabilities. Unlike Swing, JavaFX provides a more streamlined approach to designing interfaces using FXML, a declarative XML-based language. This separation of UI design from business logic makes JavaFX applications more maintainable and scalable.

JavaFX supports styling using CSS, allowing developers to define the look and feel of applications with minimal effort. This feature enhances UI customization, making applications visually appealing while maintaining consistency across different components. Additionally, JavaFX introduces a variety of built-in effects and animations, enabling smooth transitions, dynamic UI changes, and interactive visual elements.

One of the key advantages of JavaFX is its support for multimedia integration. Applications can incorporate images, audio, and video playback, making them more engaging. JavaFX also provides support for 3D graphics, allowing developers to create complex visualizations and simulations.

Understanding JavaFX equips developers with the tools necessary to build modern, visually compelling applications with improved performance and flexibility.

### Setting Up JavaFX

To use JavaFX, developers must include JavaFX libraries and configure the JavaFX runtime in their development environment.

### Building User Interfaces with FXML

FXML (an XML-based markup language) simplifies JavaFX UI design by separating layout from application logic.

#### Example:
```xml
<Button text="Click Me" onAction="#handleButtonClick" />
```

### Styling with CSS

JavaFX supports CSS for styling UI elements, allowing developers to customize colors, fonts, and spacing in a flexible manner.

### Animations and Effects

JavaFX provides built-in animation support, enabling:
- **Fade transitions**
- **Scaling effects**
- **Rotations and translations**
- **Timeline-based animations**

#### Example:
```java
FadeTransition fade = new FadeTransition(Duration.seconds(2), button);
fade.setFromValue(1.0);
fade.setToValue(0.3);
fade.play();
```

---

This module provides a comprehensive understanding of Java GUI development using Swing and JavaFX. By mastering these concepts, developers can create interactive and visually engaging applications.

# Module 6: Database Connectivity and Final Project

## 6.1 Introduction to Databases

Databases are essential components of modern applications, enabling efficient data storage, retrieval, and management. A relational database organizes data into tables with rows and columns, providing structured access through SQL (Structured Query Language). SQL is used to create, manipulate, and query databases, ensuring data integrity and security. 

Popular relational databases include MySQL, PostgreSQL, and SQLite. Setting up a database requires installing the database management system (DBMS), creating schemas, and defining tables with appropriate data types and constraints. Understanding database normalization helps in reducing redundancy and improving data consistency.

Relational databases store data in structured formats using tables, which consist of rows and columns. Databases such as MySQL, PostgreSQL, and SQLite are widely used for application development. SQL (Structured Query Language) is the standard language for interacting with relational databases. It allows for data retrieval, insertion, updating, and deletion.

### Example:
A simple SQL query to create a table:
```sql
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    age INT
);
```

## 6.2 Java Database Connectivity (JDBC)

JDBC is an API that allows Java applications to interact with databases. It consists of several components, including drivers, connections, statements, and result sets. The JDBC architecture comprises four types of drivers: JDBC-ODBC bridge, native API driver, network protocol driver, and thin driver.

Establishing a connection to a database involves loading the appropriate JDBC driver, specifying the database URL, and managing credentials securely. Executing SQL queries and updates through JDBC enables applications to retrieve and manipulate data dynamically. Transaction management ensures data consistency by grouping multiple operations into a single unit, using commit and rollback mechanisms.
 

### Steps in JDBC:
1. Load the JDBC driver.
2. Establish a connection to the database.
3. Create and execute SQL statements.
4. Process the results.
5. Close the connection.

### Example:
```java
import java.sql.*;

public class DatabaseExample {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/school";
        String user = "root";
        String password = "password";

        try {
            Connection conn = DriverManager.getConnection(url, user, password);
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM students");
            
            while (rs.next()) {
                System.out.println("ID: " + rs.getInt("id") + ", Name: " + rs.getString("name"));
            }
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
```

## 6.3 Object-Relational Mapping (ORM) with Hibernate

Hibernate is a powerful ORM framework that simplifies database interactions by mapping Java objects to database tables. Unlike JDBC, which requires explicit SQL queries, Hibernate abstracts database operations through entity classes and annotations. 

The setup process involves configuring Hibernate with a persistence unit, defining entity relationships, and managing session factories. Hibernate provides capabilities like lazy loading, caching, and automatic schema generation, enhancing performance and maintainability. CRUD (Create, Read, Update, Delete) operations are implemented seamlessly using Hibernate’s session management and query language.

### Example:
A Hibernate entity class for a `Student` table:
```java
import javax.persistence.*;

@Entity
@Table(name = "students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private int age;

    // Getters and Setters
}
```

## 6.4 Building a Complete Application

Developing a Java application with database connectivity involves designing a well-structured architecture that separates concerns. The Model-View-Controller (MVC) pattern is commonly used to organize code efficiently. The backend consists of business logic, database access layers, and data validation mechanisms, while the frontend handles user interactions through graphical interfaces or web services.

Integration of GUI components with the database ensures seamless data flow, enabling users to perform CRUD operations dynamically. Error handling and logging mechanisms improve the application's robustness, ensuring smooth user experiences and maintaining system stability.

### Example Steps:
1. **Design Database Schema**: Plan tables and relationships.
2. **Develop GUI**: Create user-friendly interfaces.
3. **Implement Business Logic**: Process user input and handle data.
4. **Integrate Database**: Connect Java application to database using JDBC or Hibernate.
5. **Testing & Debugging**: Ensure application reliability.

## 6.5 Final Project

A final project consolidates the knowledge acquired throughout the course by implementing a fully functional application. The project planning phase involves defining objectives, selecting appropriate technologies, and designing database schemas. 

The development phase includes coding the application using Java, incorporating GUI elements, and integrating database connectivity. Testing and debugging ensure the application functions correctly, while peer reviews and presentations provide feedback for improvement. Future enhancements may include scalability considerations, security measures, and advanced features to improve user experience and performance.

### Example Project: Student Management System
- **Features**:
  - Add, edit, delete student records.
  - Search students by name.
  - Display student list in a GUI.
- **Technologies**:
  - Java, Swing (GUI), MySQL (Database), JDBC/Hibernate (Database connection)
- **Implementation Steps**:
  - Create a database schema for student records.
  - Develop a GUI using Swing.
  - Implement backend logic to interact with the database.
  - Test and refine the application.

This module covers everything needed to create a fully functional database-driven Java application. With JDBC and Hibernate, Java developers can efficiently manage and persist data for enterprise applications.
