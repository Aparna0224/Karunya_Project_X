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
