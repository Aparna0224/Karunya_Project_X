# Module 2: Strings, Text Files, Lists, and Dictionaries

**1. Title:** Strings, Text Files, Lists, and Dictionaries

**2. Introduction:**

This module covers fundamental data structures in Python: strings, lists, tuples, sets, and dictionaries.  Understanding these structures is crucial for any Python programmer.  Strings allow you to work with text, which is a ubiquitous data type. Text files are the standard way to store and retrieve textual data. Lists provide a way to store ordered collections of items, while dictionaries allow you to store data in key-value pairs.  Mastering these data structures unlocks the ability to manipulate and analyze data effectively, forming the basis for more complex programming tasks.  This module will equip you with the knowledge and skills needed to work with these structures effectively.


**3. Detailed Explanation:**

**3.1 Strings:**

Strings are sequences of characters. Python treats single quotes (' ') and double quotes (" ") identically.

* **Accessing characters and substrings:**  String indexing starts at 0.  Use negative indices to access from the end.
* **String Methods:** Python provides numerous built-in string methods like `upper()`, `lower()`, `strip()`, `split()`, `replace()`, `find()`, `startswith()`, `endswith()`.
* **String slicing:** Extract substrings using the slice notation `[start:end:step]`.
* **String operations:** Concatenate strings using `+` and repeat strings using `*`.
* **Searching, comparing, and manipulating Strings:** Use operators like `in`, `not in`, `==`, `!=`, `<`, `>`.  Use methods like `find()` and `index()` for searching.
* **Data Encryption (Basic):** Simple Caesar cipher: shift each character a fixed number of positions down the alphabet.

**3.2 Text Files:**

* **Opening Files:** Use `open(filename, mode)` where mode can be 'r' (read), 'w' (write), 'a' (append), 'x' (create).
* **Reading Files:** Methods like `read()`, `readline()`, `readlines()`.  Iterating through lines with a `for` loop is recommended for large files.
* **Writing Files:** Use `write()` to write strings to files.  Remember to `close()` files after use to save changes.
* **File Handling Best Practices:** Using `with open(...) as file:` ensures automatic file closure, even if errors occur.

**3.3 Lists:**

Lists are mutable, ordered sequences of items.

* **List operations:**  `append()`, `insert()`, `remove()`, `pop()`, `extend()`, `del`, `len()`, `count()`, `index()`.
* **Searching and sorting a list:** `in`, `not in`, `sort()`, `sorted()`, `reverse()`.
* **List comprehensions:**  Concise way to create lists.  `[expression for item in iterable if condition]`

**3.4 Tuples:**

Tuples are immutable, ordered sequences.  Similar to lists, but cannot be changed after creation.  Defined using parentheses `()`.  Useful for representing fixed collections of data.

**3.5 Sets:**

Sets are unordered collections of unique elements.  Useful for removing duplicates and performing set operations (union, intersection, difference).  Defined using curly braces `{}` or `set()`.

**3.6 Dictionaries:**

Dictionaries store data in key-value pairs.  Keys must be immutable (e.g., strings, numbers, tuples). Values can be any data type.

* **Accessing values:** Use `dictionary[key]`.
* **Dictionary methods:** `keys()`, `values()`, `items()`, `get()`, `update()`, `pop()`, `del`.


**4. Real-world Applications:**

* **Strings:** Text processing, natural language processing, data analysis, web development.
* **Text Files:** Storing configuration data, logging, data storage and retrieval.
* **Lists:** Storing collections of items, representing data sequences.
* **Tuples:** Representing fixed collections of data (e.g., coordinates).
* **Sets:** Removing duplicates, membership testing.
* **Dictionaries:** Representing structured data, databases, configuration files.

**5. Code Examples:**

```python
# Strings
my_string = "Hello, World!"
print(my_string[7:])  # Output: World!
print(my_string.upper()) # Output: HELLO, WORLD!

# Text Files
with open("my_file.txt", "w") as f:
    f.write("This is some text.")

# Lists
my_list = [1, 2, 3]
my_list.append(4)
print(my_list) # Output: [1, 2, 3, 4]

# Dictionaries
my_dict = {"name": "Alice", "age": 30}
print(my_dict["name"]) # Output: Alice

# Sets
my_set = {1, 2, 2, 3}
print(my_set) # Output: {1, 2, 3}
```


**6. Case Study: Analyzing a Text File:**

Imagine you have a text file containing a list of words, one word per line. You want to count the frequency of each word.  You can use Python's file handling, string methods, and dictionaries to achieve this.

```python
word_counts = {}
with open("word_list.txt", "r") as f:
    for line in f:
        word = line.strip().lower()
        if word: #ignore empty lines
            word_counts[word] = word_counts.get(word, 0) + 1

for word, count in word_counts.items():
    print(f"{word}: {count}")
```

**7. Exercises and Questions:**

1. Write a Python function that takes a string and returns the reverse of the string.
2. Write a Python program to read a text file and print the number of lines, words, and characters in the file.
3.  Create a dictionary that stores the capitals of different countries. Write a program to allow the user to enter a country and get its capital.
4. Write a Python function to remove duplicates from a list using sets.
5.  Implement a simple Caesar cipher encryption/decryption function.
6.  What are the differences between lists and tuples? When would you use one over the other?
7. How can you efficiently search for an element in a sorted list?
8. What are the advantages of using a `with` statement when working with files?
9.  Explain the concept of mutability and immutability with examples.
10.  How can you use list comprehensions to create a list of squares of even numbers between 1 and 20?



This detailed module provides a solid foundation in string manipulation, file handling, and working with fundamental data structures in Python.  Understanding these concepts is essential for developing more sophisticated programs.

--------------------------------------------------------------------------------


## 📖 Module 3: Functions and Classes
##