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