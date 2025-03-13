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
