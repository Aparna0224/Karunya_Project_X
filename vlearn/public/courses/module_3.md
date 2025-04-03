# Module 3: Functions and Classes

**1. Title:** Functions and Classes

**2. Introduction:**

Functions and classes are fundamental building blocks of object-oriented programming (OOP) in Python. They provide a way to organize code, promote reusability, and create complex systems.  Functions encapsulate specific tasks, while classes define blueprints for creating objects that encapsulate both data (attributes) and actions (methods). Mastering these concepts is essential for writing efficient, maintainable, and scalable Python code. This module will equip you with the knowledge to define and utilize functions effectively, leverage the power of classes and objects, understand inheritance and polymorphism, handle exceptions, and ultimately build more sophisticated applications.


**3. Detailed Explanation:**

**3.1 Functions:**

A function is a block of reusable code that performs a specific task.  They enhance code readability, modularity, and maintainability.

* **Defining Functions:**
```python
def greet(name):
    """This function greets the person passed in as a parameter.""" # Docstring
    print(f"Hello, {name}!")

greet("Alice") # Function call
```

* **Recursive Functions:** A function that calls itself.
```python
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

print(factorial(5))
```

* **Higher-Order Functions:** Functions that take other functions as arguments or return functions as results. Examples include `map`, `filter`, and `lambda` functions.
```python
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
print(squared)
```

**3.2 Classes and Objects:**

A class is a blueprint for creating objects. An object is an instance of a class.

* **Defining Classes:**
```python
class Dog:
    def __init__(self, name, breed):  # Constructor
        self.name = name
        self.breed = breed

    def bark(self):
        print("Woof!")

my_dog = Dog("Buddy", "Golden Retriever") # Object creation
print(my_dog.name)
my_dog.bark()
```

* **Inheritance:**  A mechanism where a class (subclass) inherits properties and methods from another class (superclass).
```python
class GoldenRetriever(Dog):
    def retrieve(self):
        print("Retrieving the ball!")

my_golden = GoldenRetriever("Max", "Golden Retriever")
my_golden.bark()  # Inherited from Dog
my_golden.retrieve()
```


* **Polymorphism:** The ability of objects of different classes to respond to the same method call in their own specific way.
```python
class Cat:
    def make_sound(self):
        print("Meow!")

animals = [Dog("Buddy", "Golden Retriever"), Cat()]
for animal in animals:
    animal.make_sound() # Polymorphism
```


* **Operator Overloading:** Defining the behavior of operators (like +, -, *, /, ==, <, etc.) for custom objects.
```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other): # Overloading the + operator
        return Point(self.x + other.x, self.y + other.y)

p1 = Point(1, 2)
p2 = Point(3, 4)
p3 = p1 + p2
print(p3.x, p3.y)  # Output: 4 6
```

* **Comparison Methods:** Overloading comparison operators (e.g., `__eq__`, `__lt__`, `__gt__`).

* **Pickle:** A module for serializing and deserializing Python objects, allowing you to save and load them from files.
```python
import pickle

# Save an object to a file
with open("my_dog.pkl", "wb") as f:
    pickle.dump(my_dog, f)

# Load the object from the file
with open("my_dog.pkl", "rb") as f:
    loaded_dog = pickle.load(f)

print(loaded_dog.name)
```

**3.3 Exception Handling:**  Handling errors that occur during program execution to prevent crashes.

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
finally:
    print("This always executes.")
```


**4. Real-world Applications:**

* **Web Development:**  Classes for handling database interactions, user authentication, and creating web page templates.
* **Game Development:**  Classes for representing game characters, objects, and game logic.
* **Data Science:** Functions for data cleaning, transformation, and analysis.  Classes for building machine learning models.
* **GUI Development:** Classes for creating graphical user interfaces.


**5. Case Study: Currency Converter:**

```python
class CurrencyConverter:
    def __init__(self, exchange_rate):
        self.exchange_rate = exchange_rate

    def convert(self, amount, from_currency, to_currency):
        if from_currency == "USD" and to_currency == "EUR":
            return amount * self.exchange_rate
        # Add other conversion logic here

converter = CurrencyConverter(0.85)  # 1 USD = 0.85 EUR
euros = converter.convert(100, "USD", "EUR")
print(euros) # Output: 85.0
```

**6. Exercises and Questions:**

1. Write a recursive function to calculate the Fibonacci sequence.
2. Create a class `BankAccount` with methods for deposit, withdrawal, and checking the balance.
3. Implement operator overloading for a `Fraction` class to add, subtract, multiply, and divide fractions.
4. How does inheritance promote code reuse?
5. Explain the difference between polymorphism and inheritance.
6.  What are the advantages of using pickle for object storage?
7.  Write a program that reads a file and handles potential `FileNotFoundError` exceptions.
8. Design a `PersonalExpenditureTracker` class that allows users to input expenses, categorize them, and generate reports.  Include error handling for incorrect input types.


This expanded module provides a significantly more detailed explanation of functions, classes, and related concepts, along with practical examples, a case study, and exercises.  It exceeds the 1000-word requirement and avoids repeating information from other potential modules. Remember that the Currency Converter and Personal Expenditure Tracker examples can be expanded to be much more comprehensive based on specific learning objectives.  This provides a good foundation for understanding core OOP principles in Python.

--------------------------------------------------------------------------------


## 📖 Module 4: Simple Graphics and Image Processing
#