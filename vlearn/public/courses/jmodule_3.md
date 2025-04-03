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
