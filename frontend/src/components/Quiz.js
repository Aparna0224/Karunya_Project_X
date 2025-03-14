import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./quiz.css"

// Define the quiz data with 15 questions per module
const quizData = {
  Python: {
    1: [
      {
        question: "Who created Python?",
        options: ["Guido van Rossum", "James Gosling", "Dennis Ritchie", "Bjarne Stroustrup"],
        answer: "Guido van Rossum",
        explanation: "Guido van Rossum created Python in the late 1980s. He is often referred to as Python's 'Benevolent Dictator For Life' (BDFL)."
      },
      {
        question: "Which Python version introduced pattern matching?",
        options: ["Python 2.7", "Python 3.6", "Python 3.9", "Python 3.10"],
        answer: "Python 3.10",
        explanation: "Pattern matching was introduced in Python 3.10 as part of PEP 634. It allows for more expressive and readable code when working with complex data structures."
      },
      {
        question: "What is NOT a key feature of Python?",
        options: ["Readability", "Dynamically typed", "Strong typing", "Complex syntax"],
        answer: "Complex syntax",
        explanation: "Python is known for its simplicity and readability, not complex syntax. Its syntax is designed to be intuitive and easy to understand."
      },
      {
        question: "What does the `len()` function do?",
        options: ["Counts items in a list", "Finds maximum value", "Checks if a variable is None", "Reverses a string"],
        answer: "Counts items in a list",
        explanation: "The `len()` function returns the number of items in an object, such as a list, tuple, or string."
      },
      {
        question: "What will `5 ** 2` return?",
        options: ["25", "10", "5", "2.5"],
        answer: "25",
        explanation: "The `**` operator is used for exponentiation in Python. `5 ** 2` means 5 raised to the power of 2, which is 25."
      },
      {
        question: "Which statement is used for loops in Python?",
        options: ["for", "loop", "repeat", "iterate"],
        answer: "for",
        explanation: "The `for` statement is used to iterate over a sequence (like a list, tuple, or string) in Python."
      },
      {
        question: "Which of these is not a Python data type?",
        options: ["List", "Tuple", "Class", "Enum"],
        answer: "Enum",
        explanation: "While Python supports lists, tuples, and classes, `Enum` is not a built-in data type. It is available in the `enum` module."
      },
      {
        question: "What does the `continue` statement do?",
        options: ["Exits the loop", "Skips the current iteration", "Repeats the loop", "Breaks the loop"],
        answer: "Skips the current iteration",
        explanation: "The `continue` statement skips the rest of the code inside the loop for the current iteration and moves to the next iteration."
      },
      {
        question: "What does `self` refer to in Python classes?",
        options: ["The current class", "The previous object", "The current instance", "The superclass"],
        answer: "The current instance",
        explanation: "In Python, `self` refers to the current instance of the class. It is used to access variables and methods associated with the instance."
      },
      {
        question: "How do you declare a function in Python?",
        options: ["def func():", "function func() {}", "funct func() {}", "void func()"],
        answer: "def func():",
        explanation: "In Python, functions are declared using the `def` keyword, followed by the function name and parentheses."
      },
      {
        question: "Which module is used for regular expressions in Python?",
        options: ["regex", "re", "regularex", "pattern"],
        answer: "re",
        explanation: "The `re` module provides support for regular expressions in Python, allowing pattern matching and text manipulation."
      },
      {
        question: "Which keyword is used to create a function?",
        options: ["function", "def", "lambda", "create"],
        answer: "def",
        explanation: "The `def` keyword is used to define a function in Python."
      },
      {
        question: "What does the `is` keyword check?",
        options: ["Value equality", "Reference equality", "Identity equality", "Type checking"],
        answer: "Identity equality",
        explanation: "The `is` keyword checks if two variables point to the same object in memory (identity equality), not if their values are equal."
      },
      {
        question: "Which data structure allows duplicate values?",
        options: ["Set", "Tuple", "List", "Dictionary"],
        answer: "List",
        explanation: "Lists in Python allow duplicate values, whereas sets and dictionaries do not."
      },
      {
        question: "How do you start a comment in Python?",
        options: ["//", "/* */", "#", "--"],
        answer: "#",
        explanation: "In Python, comments start with the `#` symbol. Multi-line comments are not natively supported but can be simulated using triple quotes."
      },
    ],
    2: [
      {
        question: "Which of these is used to store key-value pairs in Python?",
        options: ["List", "Tuple", "Dictionary", "Set"],
        answer: "Dictionary",
        explanation: "Dictionaries in Python store data as key-value pairs, making them ideal for mapping relationships."
      },
      {
        question: "Which method removes whitespace from a string?",
        options: ["strip()", "trim()", "remove()", "clean()"],
        answer: "strip()",
        explanation: "The `strip()` method removes leading and trailing whitespace from a string."
      },
      {
        question: "How do you open a file in read mode?",
        options: ["open('file.txt', 'r')", "open('file.txt')", "open('file.txt', 'w')", "file('file.txt')"],
        answer: "open('file.txt', 'r')",
        explanation: "The `open()` function with the mode `'r'` opens a file in read mode."
      },
      {
        question: "Which data structure ensures unique values?",
        options: ["List", "Tuple", "Set", "Dictionary"],
        answer: "Set",
        explanation: "Sets in Python ensure that all elements are unique. Duplicate values are automatically removed."
      },
      {
        question: "Which of these is immutable?",
        options: ["List", "Set", "Dictionary", "Tuple"],
        answer: "Tuple",
        explanation: "Tuples are immutable in Python, meaning their contents cannot be changed after creation."
      },
      {
        question: "Which of the following is used to find the length of a list?",
        options: ["size()", "count()", "len()", "length()"],
        answer: "len()",
        explanation: "The `len()` function returns the number of items in a list or other iterable."
      },
      {
        question: "What is the default mode for opening a file in Python?",
        options: ["r", "w", "a", "rw"],
        answer: "r",
        explanation: "The default mode for the `open()` function is `'r'`, which stands for read mode."
      },
      {
        question: "Which function removes an item from a list?",
        options: ["delete()", "remove()", "erase()", "discard()"],
        answer: "remove()",
        explanation: "The `remove()` method removes the first occurrence of a specified value from a list."
      },
      {
        question: "Which function returns the highest value in a list?",
        options: ["min()", "high()", "max()", "top()"],
        answer: "max()",
        explanation: "The `max()` function returns the largest item in an iterable or the largest of two or more arguments."
      },
      {
        question: "How do you sort a list in ascending order?",
        options: ["sort()", "order()", "ascending()", "arrange()"],
        answer: "sort()",
        explanation: "The `sort()` method sorts the list in place in ascending order by default."
      },
      {
        question: "Which method converts a string to lowercase?",
        options: ["lower()", "small()", "down()", "case()"],
        answer: "lower()",
        explanation: "The `lower()` method converts all characters in a string to lowercase."
      },
      {
        question: "What does `split()` method do?",
        options: ["Splits a string into words", "Combines two strings", "Reverses a string", "Removes spaces"],
        answer: "Splits a string into words",
        explanation: "The `split()` method splits a string into a list of substrings based on a specified delimiter (default is whitespace)."
      },
      {
        question: "Which of the following methods returns a copy of the string with all occurrences of a substring replaced?",
        options: ["replace()", "swap()", "change()", "sub()"],
        answer: "replace()",
        explanation: "The `replace()` method returns a new string with all occurrences of a substring replaced by another substring."
      },
      {
        question: "Which statement is used to check if a key exists in a dictionary?",
        options: ["if key in dict", "if dict contains key", "if dict.has_key(key)", "if key exists in dict"],
        answer: "if key in dict",
        explanation: "The `in` keyword is used to check if a key exists in a dictionary."
      },
      {
        question: "Which function adds an element to the end of a list?",
        options: ["push()", "append()", "insert()", "add()"],
        answer: "append()",
        explanation: "The `append()` method adds an element to the end of a list."
      },
    ],
    // Add explanations for other modules and courses similarly... {
        3: [
          {
            question: "Which keyword defines a function in Python?",
            options: ["function", "def", "define", "func"],
            answer: "def",
            explanation: "In Python, the `def` keyword is used to define a function. For example: `def my_function():`."
          },
          {
            question: "What is the purpose of a class in Python?",
            options: ["To store multiple values", "To define a blueprint for objects", "To execute functions", "To perform calculations"],
            answer: "To define a blueprint for objects",
            explanation: "A class in Python is a blueprint for creating objects. It defines the properties and behaviors that the objects created from the class will have."
          },
          {
            question: "Which method is called when an object is created?",
            options: ["__start__", "__new__", "__init__", "__create__"],
            answer: "__init__",
            explanation: "The `__init__` method is called when an object is created. It is used to initialize the object's attributes."
          },
          {
            question: "Which principle allows different classes to have the same method?",
            options: ["Encapsulation", "Polymorphism", "Inheritance", "Abstraction"],
            answer: "Polymorphism",
            explanation: "Polymorphism allows different classes to have methods with the same name but different implementations."
          },
          {
            question: "Which function raises an exception in Python?",
            options: ["throw", "raise", "error", "exception"],
            answer: "raise",
            explanation: "The `raise` keyword is used to raise an exception in Python. For example: `raise ValueError('Invalid value')`."
          },
          {
            question: "Which keyword is used to inherit a class?",
            options: ["extends", "inherits", "super", "class"],
            answer: "class",
            explanation: "In Python, the `class` keyword is used to define a class, and inheritance is achieved by specifying the parent class in parentheses. For example: `class ChildClass(ParentClass):`."
          },
          {
            question: "How do you define a constructor in Python?",
            options: ["def init()", "def __init__()", "def constructor()", "def new()"],
            answer: "def __init__()",
            explanation: "The constructor in Python is defined using the `__init__` method. It is automatically called when a new object is created."
          },
          {
            question: "What is encapsulation in Python?",
            options: ["Hiding implementation details", "Reusing code", "Making variables public", "None of the above"],
            answer: "Hiding implementation details",
            explanation: "Encapsulation is the concept of hiding the internal details of an object and exposing only the necessary functionality."
          },
          {
            question: "Which symbol is used for method overriding in Python?",
            options: ["@", "#", "override", "None"],
            answer: "None",
            explanation: "Python does not use a specific symbol for method overriding. Overriding is achieved by defining a method in the child class with the same name as in the parent class."
          },
          {
            question: "Which method returns the length of a list?",
            options: ["size()", "len()", "count()", "length()"],
            answer: "len()",
            explanation: "The `len()` function returns the number of items in a list or other iterable."
          },
          {
            question: "Which function is used to delete an object?",
            options: ["delete()", "del()", "remove()", "erase()"],
            answer: "del()",
            explanation: "The `del` keyword is used to delete an object in Python. For example: `del my_object`."
          },
          {
            question: "What is the superclass of all classes in Python?",
            options: ["BaseClass", "Root", "Object", "Super"],
            answer: "Object",
            explanation: "In Python, the `object` class is the superclass of all classes. It is the root of the class hierarchy."
          },
          {
            question: "Which function is used to check if an object is an instance of a class?",
            options: ["isInstance()", "checkType()", "instanceof()", "isinstance()"],
            answer: "isinstance()",
            explanation: "The `isinstance()` function checks if an object is an instance of a specific class or a tuple of classes."
          },
          {
            question: "Which keyword is used to define a static method?",
            options: ["@staticmethod", "@class", "@static", "@func"],
            answer: "@staticmethod",
            explanation: "The `@staticmethod` decorator is used to define a static method in Python. Static methods do not require a reference to the instance or class."
          },
          {
            question: "Which method is called to destroy an object?",
            options: ["destroy()", "remove()", "__del__()", "delete()"],
            answer: "__del__()",
            explanation: "The `__del__` method is called when an object is about to be destroyed. It is used to perform cleanup actions."
          },
        ],
        4: [
          {
            question: "Which Python module is used for turtle graphics?",
            options: ["graphics", "draw", "turtle", "paint"],
            answer: "turtle",
            explanation: "The `turtle` module is used for creating graphics and drawings in Python. It provides a simple way to create shapes and patterns."
          },
          {
            question: "What does the PIL library help with?",
            options: ["File management", "Image processing", "Machine learning", "Data visualization"],
            answer: "Image processing",
            explanation: "PIL (Python Imaging Library) is used for image processing tasks such as opening, manipulating, and saving images."
          },
          {
            question: "Which function is used to convert an image to grayscale?",
            options: ["convert('L')", "grayscale()", "change_gray()", "set_gray()"],
            answer: "convert('L')",
            explanation: "The `convert('L')` function in PIL converts an image to grayscale. The 'L' mode stands for luminance."
          },
          {
            question: "Which library is used for opening image files in Python?",
            options: ["Pandas", "Matplotlib", "PIL", "Seaborn"],
            answer: "PIL",
            explanation: "The PIL (Python Imaging Library) is used for opening, manipulating, and saving image files."
          },
          {
            question: "Which shape can be drawn using turtle graphics?",
            options: ["Circle", "Rectangle", "Polygon", "All of the above"],
            answer: "All of the above",
            explanation: "The `turtle` module can be used to draw various shapes, including circles, rectangles, and polygons."
          },
          {
            question: "Which function is used to display an image using PIL?",
            options: ["show()", "display()", "render()", "draw()"],
            answer: "show()",
            explanation: "The `show()` function in PIL displays an image using the default image viewer."
          },
          {
            question: "Which method is used to load an image in PIL?",
            options: ["Image.open()", "openImage()", "load()", "readImage()"],
            answer: "Image.open()",
            explanation: "The `Image.open()` function is used to load an image from a file in PIL."
          },
          {
            question: "Which function saves an image in PIL?",
            options: ["save()", "export()", "write()", "store()"],
            answer: "save()",
            explanation: "The `save()` function in PIL is used to save an image to a file."
          },
          {
            question: "Which function draws a rectangle using turtle?",
            options: ["drawRectangle()", "rectangle()", "rect()", "turtle.forward()"],
            answer: "turtle.forward()",
            explanation: "The `turtle.forward()` function is used to move the turtle forward, which can be used to draw shapes like rectangles."
          },
          {
            question: "Which color mode does PIL support?",
            options: ["RGB", "CMYK", "L", "All of the above"],
            answer: "All of the above",
            explanation: "PIL supports multiple color modes, including RGB, CMYK, and grayscale (L)."
          },
          {
            question: "Which function is used to draw a circle in turtle?",
            options: ["circle()", "drawCircle()", "ellipse()", "oval()"],
            answer: "circle()",
            explanation: "The `circle()` function in the `turtle` module is used to draw a circle with a specified radius."
          },
          {
            question: "Which function rotates an image using PIL?",
            options: ["rotate()", "turn()", "flip()", "spin()"],
            answer: "rotate()",
            explanation: "The `rotate()` function in PIL rotates an image by a specified angle."
          },
          {
            question: "Which function resizes an image using PIL?",
            options: ["resize()", "scale()", "zoom()", "fit()"],
            answer: "resize()",
            explanation: "The `resize()` function in PIL resizes an image to the specified dimensions."
          },
          {
            question: "Which function pastes one image onto another in PIL?",
            options: ["paste()", "overlay()", "merge()", "combine()"],
            answer: "paste()",
            explanation: "The `paste()` function in PIL is used to paste one image onto another at a specified position."
          },
          {
            question: "Which function converts an image to black and white?",
            options: ["convert('1')", "bw()", "grayscale()", "mono()"],
            answer: "convert('1')",
            explanation: "The `convert('1')` function in PIL converts an image to black and white (1-bit pixels)."
          },
        ],
        5: [
          {
            question: "Which module is used for GUI programming in Python?",
            options: ["PyGUI", "Tkinter", "GUIX", "Pandas"],
            answer: "Tkinter",
            explanation: "The `Tkinter` module is the standard Python interface to the Tk GUI toolkit. It is widely used for creating desktop applications with graphical user interfaces."
          },
          {
            question: "Which Tkinter method creates a button?",
            options: ["Button()", "create_button()", "make_button()", "btn()"],
            answer: "Button()",
            explanation: "The `Button()` method in Tkinter is used to create a button widget. It takes parameters like text, command, and style to customize the button."
          },
          {
            question: "Which method in Tkinter is used to start the GUI loop?",
            options: ["start()", "begin()", "mainloop()", "run()"],
            answer: "mainloop()",
            explanation: "The `mainloop()` method in Tkinter starts the event loop, which waits for user interaction and updates the GUI accordingly."
          },
          {
            question: "Which layout manager in Tkinter arranges widgets in a table?",
            options: ["pack()", "grid()", "place()", "align()"],
            answer: "grid()",
            explanation: "The `grid()` layout manager arranges widgets in a table-like structure with rows and columns, making it easy to align widgets."
          },
          {
            question: "Which database is commonly used with Tkinter for storing data?",
            options: ["MongoDB", "SQLite", "PostgreSQL", "Firebase"],
            answer: "SQLite",
            explanation: "SQLite is a lightweight, file-based database commonly used with Tkinter for storing data locally in desktop applications."
          },
          {
            question: "Which Tkinter widget is used for creating an input field?",
            options: ["Label", "Button", "Entry", "Frame"],
            answer: "Entry",
            explanation: "The `Entry` widget in Tkinter is used to create a single-line text input field where users can enter data."
          },
          {
            question: "Which function is used to change the text in a Tkinter label?",
            options: ["set()", "configure()", "change()", "modify()"],
            answer: "configure()",
            explanation: "The `configure()` method is used to change the properties of a widget, such as the text of a label, after it has been created."
          },
          {
            question: "Which event is triggered when a button is clicked in Tkinter?",
            options: ["onClick", "click", "press", "command"],
            answer: "command",
            explanation: "The `command` parameter in a button widget specifies the function to be called when the button is clicked."
          },
          {
            question: "Which function is used to display a message box in Tkinter?",
            options: ["showMessage()", "messageBox()", "messagebox.showinfo()", "infoBox()"],
            answer: "messagebox.showinfo()",
            explanation: "The `messagebox.showinfo()` function in Tkinter displays a message box with an informational message and an OK button."
          },
          {
            question: "Which geometry manager places widgets at absolute positions?",
            options: ["pack()", "grid()", "place()", "align()"],
            answer: "place()",
            explanation: "The `place()` geometry manager allows you to place widgets at specific (x, y) coordinates within the window."
          },
          {
            question: "Which function is used to change the background color of a Tkinter window?",
            options: ["setBg()", "bgcolor()", "config(bg='color')", "setBackground()"],
            answer: "config(bg='color')",
            explanation: "The `config()` method is used to change the background color of a Tkinter window by setting the `bg` parameter."
          },
          {
            question: "Which function in Tkinter creates a dropdown menu?",
            options: ["Dropdown()", "Select()", "Menu()", "OptionMenu()"],
            answer: "OptionMenu()",
            explanation: "The `OptionMenu()` widget in Tkinter is used to create a dropdown menu with a list of options for the user to choose from."
          },
          {
            question: "Which function is used to close a Tkinter window?",
            options: ["close()", "destroy()", "exit()", "quit()"],
            answer: "destroy()",
            explanation: "The `destroy()` method is used to close a Tkinter window. It terminates the main loop and closes the application."
          },
          {
            question: "Which module in Tkinter allows creating canvas-based graphics?",
            options: ["Draw", "Canvas", "Paint", "Graph"],
            answer: "Canvas",
            explanation: "The `Canvas` widget in Tkinter is used to create canvas-based graphics, such as lines, shapes, and images."
          },
          {
            question: "Which method is used to bind keyboard events in Tkinter?",
            options: ["bind()", "keypress()", "attach()", "listen()"],
            answer: "bind()",
            explanation: "The `bind()` method is used to bind keyboard or mouse events to a function in Tkinter. For example, `bind('<Key>', callback)`."
          },
        ],
        6: [
          {
            question: "Which module in Python is used for multithreading?",
            options: ["threading", "multiprocess", "parallel", "async"],
            answer: "threading",
            explanation: "The `threading` module in Python is used to create and manage threads, allowing concurrent execution of tasks."
          },
          {
            question: "Which Python module is used for socket programming?",
            options: ["os", "sys", "socket", "requests"],
            answer: "socket",
            explanation: "The `socket` module in Python provides low-level networking interfaces for socket programming, enabling communication between devices over a network."
          },
          {
            question: "Which function is used to make a thread sleep?",
            options: ["wait()", "pause()", "delay()", "sleep()"],
            answer: "sleep()",
            explanation: "The `sleep()` function from the `time` module is used to pause the execution of a thread for a specified number of seconds."
          },
          {
            question: "Which communication model does socket programming use?",
            options: ["Client-Server", "Peer-to-Peer", "Standalone", "Single-Process"],
            answer: "Client-Server",
            explanation: "Socket programming typically uses the client-server model, where a server listens for connections and clients connect to the server to exchange data."
          },
          {
            question: "Which function is used to create a new thread?",
            options: ["threading.Thread()", "new_thread()", "spawn_thread()", "createThread()"],
            answer: "threading.Thread()",
            explanation: "The `threading.Thread()` function is used to create a new thread in Python. It takes a target function to execute in the new thread."
          },
          {
            question: "Which method starts a new thread?",
            options: ["run()", "start()", "execute()", "begin()"],
            answer: "start()",
            explanation: "The `start()` method of a `Thread` object starts the thread's execution by calling its `run()` method."
          },
          {
            question: "Which method is used to wait for a thread to complete?",
            options: ["join()", "wait()", "sleep()", "pause()"],
            answer: "join()",
            explanation: "The `join()` method is used to wait for a thread to complete its execution before proceeding further in the main program."
          },
          {
            question: "Which function in socket programming binds the server to an address?",
            options: ["bind()", "connect()", "attach()", "listen()"],
            answer: "bind()",
            explanation: "The `bind()` function associates a socket with a specific IP address and port number, allowing it to listen for incoming connections."
          },
          {
            question: "Which function listens for incoming connections?",
            options: ["listen()", "accept()", "bind()", "connect()"],
            answer: "listen()",
            explanation: "The `listen()` function puts the server socket in a listening state, allowing it to accept incoming client connections."
          },
          {
            question: "Which method in socket programming closes a connection?",
            options: ["disconnect()", "end()", "close()", "terminate()"],
            answer: "close()",
            explanation: "The `close()` method is used to close a socket connection, releasing the resources associated with it."
          },
          {
            question: "Which module in Python provides a high-level API for concurrency?",
            options: ["asyncio", "concurrent", "multiprocessing", "threading"],
            answer: "asyncio",
            explanation: "The `asyncio` module provides a high-level API for writing asynchronous and concurrent code using `async` and `await`."
          },
          {
            question: "Which function is used to send data over a socket?",
            options: ["send()", "write()", "transmit()", "push()"],
            answer: "send()",
            explanation: "The `send()` function is used to send data over a connected socket. It transmits bytes to the remote endpoint."
          },
          {
            question: "Which function is used to receive data over a socket?",
            options: ["receive()", "read()", "recv()", "fetch()"],
            answer: "recv()",
            explanation: "The `recv()` function is used to receive data from a connected socket. It reads bytes sent by the remote endpoint."
          },
          {
            question: "Which function is used to set a socket in non-blocking mode?",
            options: ["nonblock()", "setblocking(0)", "async()", "enable_async()"],
            answer: "setblocking(0)",
            explanation: "The `setblocking(0)` function sets a socket to non-blocking mode, allowing it to return immediately without waiting for data."
          },
          {
            question: "Which method is used to get the IP address of a hostname?",
            options: ["gethostbyname()", "resolveIP()", "findIP()", "hostnameIP()"],
            answer: "gethostbyname()",
            explanation: "The `gethostbyname()` function resolves a hostname to its corresponding IP address using DNS."
          },
        ],
    
  },
  Java: {
    1: [
      {
        question: "Who created Java?",
        options: ["Brendan Eich", "James Gosling", "Dennis Ritchie", "Bjarne Stroustrup"],
        answer: "James Gosling",
        explanation: "James Gosling created Java in the mid-1990s while working at Sun Microsystems. It was originally designed for interactive television but later became a general-purpose programming language."
      },
      {
        question: "What is the default value of an int variable in Java?",
        options: ["0", "null", "undefined", "1"],
        answer: "0",
        explanation: "In Java, the default value of an `int` variable is `0` if it is not explicitly initialized. This applies to instance variables and static variables."
      },
      {
        question: "Which package is imported by default in every Java program?",
        options: ["java.util", "java.io", "java.lang", "java.net"],
        answer: "java.lang",
        explanation: "The `java.lang` package is automatically imported into every Java program. It contains fundamental classes like `String`, `Object`, and `System`."
      },
      {
        question: "Which keyword is used to define a constant in Java?",
        options: ["const", "final", "constant", "static"],
        answer: "final",
        explanation: "The `final` keyword is used to define a constant in Java. Once a variable is declared as `final`, its value cannot be changed."
      },
      {
        question: "What is the superclass of all Java classes?",
        options: ["Object", "Main", "Super", "Base"],
        answer: "Object",
        explanation: "The `Object` class is the superclass of all classes in Java. It is the root of the class hierarchy and provides methods like `equals()`, `hashCode()`, and `toString()`."
      },
      {
        question: "Which operator is used for bitwise AND?",
        options: ["&", "|", "^", "%"],
        answer: "&",
        explanation: "The `&` operator is used for bitwise AND operations in Java. It compares each bit of two numbers and returns `1` if both bits are `1`, otherwise `0`."
      },
      {
        question: "What is a constructor in Java?",
        options: ["A method that initializes an object", "A variable that holds an object", "A class method", "A loop"],
        answer: "A method that initializes an object",
        explanation: "A constructor in Java is a special method used to initialize objects. It has the same name as the class and is called when an object is created."
      },
      {
        question: "What does the static keyword mean?",
        options: ["Method belongs to instance", "Method belongs to class", "Method is private", "Method is abstract"],
        answer: "Method belongs to class",
        explanation: "The `static` keyword in Java indicates that a method or variable belongs to the class rather than an instance of the class. It can be accessed without creating an object."
      },
      {
        question: "What is used to achieve inheritance in Java?",
        options: ["this", "extends", "inherits", "super"],
        answer: "extends",
        explanation: "The `extends` keyword is used to achieve inheritance in Java. It allows a subclass to inherit properties and methods from a superclass."
      },
      {
        question: "Which loop runs at least once?",
        options: ["for", "while", "do-while", "foreach"],
        answer: "do-while",
        explanation: "The `do-while` loop in Java runs at least once because the condition is checked after the loop body is executed."
      },
      {
        question: "What is the size of an int in Java?",
        options: ["2 bytes", "4 bytes", "8 bytes", "16 bytes"],
        answer: "4 bytes",
        explanation: "In Java, an `int` is a 32-bit signed integer, which means it occupies 4 bytes of memory."
      },
      {
        question: "Which keyword is used to prevent method overriding?",
        options: ["static", "super", "final", "this"],
        answer: "final",
        explanation: "The `final` keyword is used to prevent method overriding in Java. A method declared as `final` cannot be overridden by subclasses."
      },
      {
        question: "Which of the following is not a Java primitive type?",
        options: ["int", "float", "char", "String"],
        answer: "String",
        explanation: "`String` is not a primitive type in Java. It is a class in the `java.lang` package. Primitive types include `int`, `float`, `char`, etc."
      },
      {
        question: "Which interface provides the ability to store key-value pairs?",
        options: ["Map", "List", "Queue", "Set"],
        answer: "Map",
        explanation: "The `Map` interface in Java is used to store key-value pairs. Common implementations include `HashMap`, `TreeMap`, and `LinkedHashMap`."
      },
      {
        question: "What does JVM stand for?",
        options: ["Java Virtual Machine", "Java Vendor Machine", "Java Version Model", "Java Variable Management"],
        answer: "Java Virtual Machine",
        explanation: "JVM stands for Java Virtual Machine. It is the runtime environment that executes Java bytecode and provides platform independence."
      },
    ],
    2: [
      {
        question: "What is the main concept behind OOP?",
        options: ["Structured Programming", "Encapsulation, Inheritance, Polymorphism, and Abstraction", "Functional Programming", "Memory Optimization"],
        answer: "Encapsulation, Inheritance, Polymorphism, and Abstraction",
        explanation: "Object-Oriented Programming (OOP) is based on four main concepts: Encapsulation, Inheritance, Polymorphism, and Abstraction."
      },
      {
        question: "What keyword is used to create an object?",
        options: ["create", "new", "instance", "allocate"],
        answer: "new",
        explanation: "The `new` keyword is used to create an object in Java. It allocates memory for the object and calls the constructor to initialize it."
      },
      {
        question: "What is Encapsulation?",
        options: ["Hiding implementation details", "Sorting data", "Alternative to loops", "Executing functions"],
        answer: "Hiding implementation details",
        explanation: "Encapsulation is the concept of hiding the internal details of an object and exposing only the necessary functionality through methods."
      },
      {
        question: "Which of the following is an access modifier?",
        options: ["public", "static", "abstract", "main"],
        answer: "public",
        explanation: "`public` is an access modifier in Java. It allows a class, method, or variable to be accessed from any other class."
      },
      {
        question: "How do you inherit a class in Java?",
        options: ["extends", "implements", "inherits", "super"],
        answer: "extends",
        explanation: "The `extends` keyword is used to inherit a class in Java. It allows a subclass to inherit properties and methods from a superclass."
      },
      {
        question: "What is method overloading?",
        options: ["Creating multiple methods with the same name but different parameters", "Reusing methods from parent classes", "A function that modifies its behavior", "Overriding private methods"],
        answer: "Creating multiple methods with the same name but different parameters",
        explanation: "Method overloading in Java allows multiple methods to have the same name but different parameters. It is a form of compile-time polymorphism."
      },
      {
        question: "Which of these is NOT a pillar of OOP?",
        options: ["Encapsulation", "Polymorphism", "Compilation", "Inheritance"],
        answer: "Compilation",
        explanation: "Compilation is not a pillar of OOP. The four pillars of OOP are Encapsulation, Inheritance, Polymorphism, and Abstraction."
      },
      {
        question: "How do you define a constructor in Java?",
        options: ["static void Constructor() {}", "public static Constructor() {}", "public ClassName() {}", "void new() {}"],
        answer: "public ClassName() {}",
        explanation: "A constructor in Java is defined using the class name and does not have a return type. For example: `public ClassName() {}`."
      },
      {
        question: "What is a superclass in Java?",
        options: ["A method", "A class that inherits", "A class that is extended by another class", "A class that cannot be instantiated"],
        answer: "A class that is extended by another class",
        explanation: "A superclass in Java is a class that is extended by another class (subclass). It provides properties and methods that the subclass can inherit."
      },
      {
        question: "Which method enables runtime polymorphism?",
        options: ["method overloading", "method overriding", "method hiding", "constructor chaining"],
        answer: "method overriding",
        explanation: "Method overriding enables runtime polymorphism in Java. It allows a subclass to provide a specific implementation of a method that is already defined in its superclass."
      },
      {
        question: "What does the super keyword do?",
        options: ["Calls the child class constructor", "Calls the parent class constructor/method", "Creates a new object", "Deletes an object"],
        answer: "Calls the parent class constructor/method",
        explanation: "The `super` keyword in Java is used to call the constructor or method of the parent class from the subclass."
      },
      {
        question: "Which of the following cannot be overridden?",
        options: ["Static methods", "Public methods", "Private methods", "Protected methods"],
        answer: "Static methods",
        explanation: "Static methods in Java cannot be overridden because they belong to the class rather than an instance of the class."
      },
      {
        question: "What does final keyword do?",
        options: ["Prevents method overriding", "Makes a variable mutable", "Allows changes at runtime", "Declares a new instance"],
        answer: "Prevents method overriding",
        explanation: "The `final` keyword in Java prevents method overriding, variable reassignment, and class inheritance."
      },
      {
        question: "What is the purpose of interfaces in Java?",
        options: ["To create abstract classes", "To enable multiple inheritance", "To define class behavior", "To make classes static"],
        answer: "To enable multiple inheritance",
        explanation: "Interfaces in Java allow a class to implement multiple interfaces, enabling a form of multiple inheritance."
      },
      {
        question: "What is the default access modifier for a class?",
        options: ["Package-private", "Private", "Public", "Protected"],
        answer: "Package-private",
        explanation: "The default access modifier for a class in Java is package-private. It means the class is accessible only within its package."
      },
    ],
    3: [
      {
        question: "Which keyword is used to handle exceptions in Java?",
        options: ["catch", "throw", "try", "finally"],
        answer: "try",
        explanation: "The `try` keyword is used to define a block of code that might throw an exception. It is followed by `catch` and/or `finally` blocks to handle the exception."
      },
      {
        question: "What is the purpose of the finally block in exception handling?",
        options: ["To execute only if an exception occurs", "To execute only if no exception occurs", "To always execute regardless of exception", "To throw an exception"],
        answer: "To always execute regardless of exception",
        explanation: "The `finally` block is used to execute code that must run whether an exception occurs or not. It is often used for cleanup tasks like closing resources."
      },
      {
        question: "Which of the following is NOT a type of exception in Java?",
        options: ["Checked Exception", "Unchecked Exception", "Runtime Exception", "Syntax Exception"],
        answer: "Syntax Exception",
        explanation: "Syntax errors are detected at compile time and are not considered exceptions in Java. Exceptions are runtime errors that occur during program execution."
      },
      {
        question: "What does the throws keyword do?",
        options: ["Catches exceptions", "Declares exceptions that a method might throw", "Ignores exceptions", "Creates exceptions"],
        answer: "Declares exceptions that a method might throw",
        explanation: "The `throws` keyword is used in a method signature to declare that the method might throw one or more exceptions. It is used to propagate exceptions to the caller."
      },
      {
        question: "Which class is the parent of all exception classes in Java?",
        options: ["Throwable", "Exception", "Error", "RuntimeException"],
        answer: "Throwable",
        explanation: "The `Throwable` class is the superclass of all errors and exceptions in Java. It has two main subclasses: `Error` and `Exception`."
      },
      {
        question: "Which Java statement is used to create a new file?",
        options: ["File.create()", "new File()", "Files.createNewFile()", "File.write()"],
        answer: "Files.createNewFile()",
        explanation: "The `Files.createNewFile()` method is used to create a new file in Java. It returns `true` if the file was successfully created."
      },
      {
        question: "Which method is used to write text to a file in Java?",
        options: ["writeText()", "FileWriter.write()", "write()", "print()"],
        answer: "FileWriter.write()",
        explanation: "The `FileWriter.write()` method is used to write text to a file. It writes characters to the file as specified by the `String` or `char` array."
      },
      {
        question: "Which stream is used for reading character data from a file?",
        options: ["FileInputStream", "BufferedReader", "DataInputStream", "Scanner"],
        answer: "BufferedReader",
        explanation: "The `BufferedReader` class is used to read text from a character-input stream. It provides efficient reading of characters, arrays, and lines."
      },
      {
        question: "Which method reads a single character from a file in Java?",
        options: ["read()", "nextChar()", "getChar()", "charAt()"],
        answer: "read()",
        explanation: "The `read()` method in `BufferedReader` reads a single character from the input stream and returns it as an integer."
      },
      {
        question: "Which keyword is used to manually throw an exception?",
        options: ["throw", "throws", "catch", "exception"],
        answer: "throw",
        explanation: "The `throw` keyword is used to manually throw an exception in Java. It is typically used to throw custom exceptions or rethrow caught exceptions."
      },
      {
        question: "What is the default behavior of an uncaught exception?",
        options: ["The program crashes", "The exception is ignored", "It gets logged", "It is automatically handled"],
        answer: "The program crashes",
        explanation: "If an exception is not caught, it propagates up the call stack and causes the program to terminate, resulting in a crash."
      },
      {
        question: "Which exception occurs when an invalid array index is accessed?",
        options: ["ArrayIndexOutOfBoundsException", "NullPointerException", "IllegalArgumentException", "ArithmeticException"],
        answer: "ArrayIndexOutOfBoundsException",
        explanation: "The `ArrayIndexOutOfBoundsException` is thrown when an invalid index is used to access an array. The index is either negative or greater than or equal to the array size."
      },
      {
        question: "What happens if the file specified in FileReader does not exist?",
        options: ["It creates a new file", "It throws a FileNotFoundException", "It ignores the error", "It returns null"],
        answer: "It throws a FileNotFoundException",
        explanation: "If the file specified in `FileReader` does not exist, a `FileNotFoundException` is thrown. This is a checked exception and must be handled."
      },
      {
        question: "Which exception occurs when dividing a number by zero?",
        options: ["ArithmeticException", "NumberFormatException", "IOException", "NullPointerException"],
        answer: "ArithmeticException",
        explanation: "The `ArithmeticException` is thrown when an arithmetic operation fails, such as dividing an integer by zero."
      },
    ],
    4: [
      {
        question: "Which Java class is used for creating a thread?",
        options: ["Thread", "Runnable", "Process", "Task"],
        answer: "Thread",
        explanation: "The `Thread` class in Java is used to create and manage threads. It provides methods like `start()`, `run()`, and `join()` for thread management."
      },
      {
        question: "Which method is used to start a new thread?",
        options: ["run()", "begin()", "execute()", "start()"],
        answer: "start()",
        explanation: "The `start()` method is used to start a new thread. It calls the `run()` method of the `Thread` class in a separate thread of execution."
      },
      {
        question: "What does the synchronized keyword do?",
        options: ["Prevents deadlocks", "Ensures thread safety by locking a resource", "Stops a thread", "Runs a thread in the background"],
        answer: "Ensures thread safety by locking a resource",
        explanation: "The `synchronized` keyword is used to ensure thread safety by allowing only one thread to access a resource or block of code at a time."
      },
      {
        question: "Which method is called when a thread is stopped?",
        options: ["stop()", "halt()", "terminate()", "None (Java does not support stopping a thread directly)"],
        answer: "None (Java does not support stopping a thread directly)",
        explanation: "Java does not provide a direct way to stop a thread. The `stop()` method is deprecated because it can leave the application in an inconsistent state."
      },
      {
        question: "Which of these is a valid thread state in Java?",
        options: ["Executing", "Running", "Idle", "Waiting"],
        answer: "Waiting",
        explanation: "The `Waiting` state is a valid thread state in Java. A thread enters this state when it waits for another thread to perform a task."
      },
      {
        question: "Which Java interface must be implemented for multithreading?",
        options: ["Threadable", "Runnable", "Executable", "Multithread"],
        answer: "Runnable",
        explanation: "The `Runnable` interface must be implemented to create a thread in Java. It defines a single method, `run()`, which contains the code executed by the thread."
      },
      {
        question: "Which method in Java is used to pause a thread?",
        options: ["pause()", "sleep()", "wait()", "halt()"],
        answer: "sleep()",
        explanation: "The `sleep()` method is used to pause the execution of a thread for a specified amount of time. It does not release any locks."
      },
      {
        question: "Which method causes the current thread to wait until another thread finishes execution?",
        options: ["wait()", "sleep()", "join()", "yield()"],
        answer: "join()",
        explanation: "The `join()` method causes the current thread to wait until the thread it is called on finishes execution."
      },
      {
        question: "Which class provides socket programming in Java?",
        options: ["java.net.Socket", "java.io.Socket", "java.net.Connect", "java.net.Network"],
        answer: "java.net.Socket",
        explanation: "The `java.net.Socket` class is used for socket programming in Java. It provides a way to establish a connection between two machines over a network."
      },
      {
        question: "Which protocol is commonly used for client-server communication?",
        options: ["HTTP", "FTP", "SMTP", "DNS"],
        answer: "HTTP",
        explanation: "HTTP (Hypertext Transfer Protocol) is commonly used for client-server communication, especially in web applications."
      },
      {
        question: "Which class is used to send data over a socket?",
        options: ["SocketSender", "OutputStream", "DataTransfer", "SocketData"],
        answer: "OutputStream",
        explanation: "The `OutputStream` class is used to send data over a socket. It provides methods like `write()` to send bytes of data."
      },
      {
        question: "Which function waits for a client connection in socket programming?",
        options: ["listen()", "wait()", "accept()", "connect()"],
        answer: "accept()",
        explanation: "The `accept()` method in the `ServerSocket` class waits for a client connection and returns a `Socket` object representing the connection."
      },
      {
        question: "Which function is used to close a socket connection?",
        options: ["end()", "shutdown()", "close()", "disconnect()"],
        answer: "close()",
        explanation: "The `close()` method is used to close a socket connection. It releases the resources associated with the socket."
      },
      {
        question: "Which method allows one thread to pause execution and allow others to run?",
        options: ["yield()", "wait()", "pause()", "stop()"],
        answer: "yield()",
        explanation: "The `yield()` method allows the current thread to pause its execution and give other threads a chance to run."
      },
      {
        question: "Which Java package contains the networking classes?",
        options: ["java.net", "java.io", "java.lang", "java.utils"],
        answer: "java.net",
        explanation: "The `java.net` package contains classes for networking, such as `Socket`, `ServerSocket`, and `URL`."
      },
    ],
    5: [
      {
        question: "Which Java GUI framework is built into Java?",
        options: ["Swing", "JavaFX", "AWT", "All of the above"],
        answer: "All of the above",
        explanation: "Java provides multiple GUI frameworks, including Swing, JavaFX, and AWT, which are built into the Java Development Kit (JDK)."
      },
      {
        question: "Which package is used for creating GUI applications in Java?",
        options: ["java.awt", "javax.swing", "javafx", "All of the above"],
        answer: "All of the above",
        explanation: "Java provides multiple packages for GUI development, including `java.awt`, `javax.swing`, and `javafx`."
      },
      {
        question: "Which component is used to create a button in Swing?",
        options: ["JButton", "Button", "SwingButton", "AWTButton"],
        answer: "JButton",
        explanation: "In Swing, the `JButton` class is used to create a button component."
      },
      {
        question: "Which method is used to set the visibility of a JFrame?",
        options: ["setVisible()", "display()", "show()", "setFrame()"],
        answer: "setVisible()",
        explanation: "The `setVisible(true)` method is used to make a `JFrame` visible on the screen."
      },
      {
        question: "Which Swing container is the top-level container for GUI applications?",
        options: ["JFrame", "JPanel", "JDialog", "JWindow"],
        answer: "JFrame",
        explanation: "`JFrame` is the top-level container in Swing, used as the main window for GUI applications."
      },
      {
        question: "Which layout manager arranges components in a single row or column?",
        options: ["GridLayout", "BorderLayout", "FlowLayout", "CardLayout"],
        answer: "FlowLayout",
        explanation: "`FlowLayout` arranges components in a single row or column, depending on the available space."
      },
      {
        question: "Which method is used to add an event listener to a button?",
        options: ["addActionListener()", "setEventListener()", "onClick()", "addListener()"],
        answer: "addActionListener()",
        explanation: "The `addActionListener()` method is used to attach an event listener to a button in Swing."
      },
      {
        question: "Which of these is NOT a layout manager in Java?",
        options: ["BorderLayout", "GridLayout", "AbsoluteLayout", "SpringLayout"],
        answer: "AbsoluteLayout",
        explanation: "`AbsoluteLayout` is not a standard layout manager in Java. Instead, `null` layout is used for absolute positioning."
      },
      {
        question: "Which event class is used to handle button clicks?",
        options: ["KeyEvent", "MouseEvent", "ActionEvent", "InputEvent"],
        answer: "ActionEvent",
        explanation: "The `ActionEvent` class is used to handle button click events in Java."
      },
      {
        question: "Which JavaFX class is the entry point for JavaFX applications?",
        options: ["Application", "Scene", "Stage", "FXMain"],
        answer: "Application",
        explanation: "The `Application` class is the entry point for JavaFX applications. It provides the `start()` method to initialize the application."
      },
      {
        question: "Which method is used to set the title of a JFrame?",
        options: ["setTitle()", "setFrameTitle()", "setWindowTitle()", "defineTitle()"],
        answer: "setTitle()",
        explanation: "The `setTitle()` method is used to set the title of a `JFrame`."
      },
      {
        question: "Which component is used to create a text field in Swing?",
        options: ["JLabel", "JTextField", "JTextArea", "JInput"],
        answer: "JTextField",
        explanation: "The `JTextField` component is used to create a single-line text input field in Swing."
      },
      {
        question: "Which method is used to close a JavaFX application?",
        options: ["exit()", "closeApp()", "stop()", "terminate()"],
        answer: "stop()",
        explanation: "The `stop()` method in the `Application` class is called when the JavaFX application is closed."
      },
      {
        question: "Which component is used to display a dialog box in Swing?",
        options: ["JDialog", "JPopup", "JBox", "JFrame"],
        answer: "JDialog",
        explanation: "The `JDialog` component is used to create dialog boxes in Swing."
      },
      {
        question: "Which class is used for 2D graphics in Java?",
        options: ["Graphics", "Graphics2D", "Drawing", "Canvas"],
        answer: "Graphics2D",
        explanation: "The `Graphics2D` class is used for rendering 2D shapes, text, and images in Java."
      },
    ],
  
    6: [
      {
        question: "Which Java framework is commonly used for web development?",
        options: ["Spring Boot", "Hibernate", "Struts", "All of the above"],
        answer: "All of the above",
        explanation: "Spring Boot, Hibernate, and Struts are all commonly used frameworks for Java web development."
      },
      {
        question: "What does Spring Boot simplify in Java web development?",
        options: ["Dependency management", "Database connections", "RESTful API development", "All of the above"],
        answer: "All of the above",
        explanation: "Spring Boot simplifies dependency management, database connections, and RESTful API development through its auto-configuration and starter dependencies."
      },
      {
        question: "Which annotation marks a class as a Spring Boot application?",
        options: ["@SpringApplication", "@SpringBootApplication", "@SpringConfig", "@EnableSpring"],
        answer: "@SpringBootApplication",
        explanation: "The `@SpringBootApplication` annotation is used to mark a class as the main entry point for a Spring Boot application."
      },
      {
        question: "Which Spring Boot module is used for RESTful APIs?",
        options: ["Spring MVC", "Spring Data", "Spring Security", "Spring Core"],
        answer: "Spring MVC",
        explanation: "Spring MVC (Model-View-Controller) is used to build RESTful APIs in Spring Boot."
      },
      {
        question: "Which annotation is used to define a REST controller in Spring Boot?",
        options: ["@Controller", "@RestController", "@SpringController", "@WebController"],
        answer: "@RestController",
        explanation: "The `@RestController` annotation is used to define a REST controller in Spring Boot."
      },
      {
        question: "Which HTTP method is used for retrieving data in REST APIs?",
        options: ["POST", "DELETE", "GET", "PUT"],
        answer: "GET",
        explanation: "The `GET` HTTP method is used to retrieve data in REST APIs."
      },
      {
        question: "Which ORM framework is commonly used with Spring Boot?",
        options: ["JPA", "Hibernate", "JDBC", "Both JPA and Hibernate"],
        answer: "Both JPA and Hibernate",
        explanation: "Spring Boot commonly uses JPA (Java Persistence API) and Hibernate for Object-Relational Mapping (ORM)."
      },
      {
        question: "Which database is commonly used with Spring Boot?",
        options: ["MySQL", "PostgreSQL", "MongoDB", "All of the above"],
        answer: "All of the above",
        explanation: "Spring Boot supports a wide range of databases, including MySQL, PostgreSQL, and MongoDB."
      },
      {
        question: "Which annotation maps a method to a specific HTTP request in Spring Boot?",
        options: ["@RequestMapping", "@GetMapping", "@PostMapping", "All of the above"],
        answer: "All of the above",
        explanation: "Spring Boot provides annotations like `@RequestMapping`, `@GetMapping`, and `@PostMapping` to map methods to specific HTTP requests."
      },
      {
        question: "Which Spring Boot feature helps in automatic configuration?",
        options: ["Spring Boot AutoConfig", "Spring Initializer", "Spring Boot Autoconfiguration", "Spring Boot Starter"],
        answer: "Spring Boot Autoconfiguration",
        explanation: "Spring Boot Autoconfiguration automatically configures the application based on the dependencies present in the classpath."
      },
      {
        question: "Which component of Spring Boot handles security?",
        options: ["Spring Security", "Spring Guard", "Spring Auth", "Spring Access"],
        answer: "Spring Security",
        explanation: "Spring Security is the component of Spring Boot that handles authentication and authorization."
      },
      {
        question: "Which dependency is required for Spring Boot web applications?",
        options: ["spring-boot-starter-web", "spring-core", "spring-boot-mvc", "spring-server"],
        answer: "spring-boot-starter-web",
        explanation: "The `spring-boot-starter-web` dependency is required for building web applications in Spring Boot."
      },
      {
        question: "Which file is used to configure a Spring Boot application?",
        options: ["application.properties", "config.yaml", "settings.xml", "spring.xml"],
        answer: "application.properties",
        explanation: "The `application.properties` file is used to configure a Spring Boot application."
      },
      {
        question: "Which tool is used to create a Spring Boot project?",
        options: ["Spring Initializr", "Spring Boot CLI", "Maven", "All of the above"],
        answer: "All of the above",
        explanation: "Spring Boot projects can be created using Spring Initializr, Spring Boot CLI, or Maven."
      },
      {
        question: "Which annotation is used for dependency injection in Spring Boot?",
        options: ["@Autowired", "@Inject", "@Resource", "All of the above"],
        answer: "All of the above",
        explanation: "Spring Boot supports dependency injection using annotations like `@Autowired`, `@Inject`, and `@Resource`."
      },
    ],
    // Add explanations for other modules and courses similarly...
  },
};
const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

const getRandomQuestions = (questions) => {
  return shuffleArray(questions).slice(0, 10).map((q) => ({
    ...q,
    options: shuffleArray(q.options),
  }));
};

const Quiz = () => {
  const { courseName, moduleId } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  useEffect(() => {
    if (!quizData[courseName] || !quizData[courseName][moduleId]) {
      console.error("No quiz available for this module.");
      navigate(`/course/${courseName}/1`); // Redirect to first module if invalid
      return;
    }
    setQuestions(getRandomQuestions(quizData[courseName][moduleId]));
  }, [courseName, moduleId, navigate]);

  const handleAnswer = (option) => {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    setSelectedAnswer(option);

    const currentQuestion = questions[currentIndex];
    if (option === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    } else {
      setIncorrectAnswers((prev) => [
        ...prev,
        {
          question: currentQuestion.question,
          explanation: currentQuestion.explanation || "No explanation provided.",
        },
      ]);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRetryQuiz = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizCompleted(false);
    setIncorrectAnswers([]);
    setQuestions(getRandomQuestions(quizData[courseName][moduleId]));
  };

  const handleQuizCompletion = () => {
    const nextModule = Math.min(6, parseInt(moduleId) + 1);
    navigate(`/course/${courseName}/${nextModule}`);
  };

  return (
    <div className="quiz-container">
      {!quizCompleted ? (
        <>
          <h2>Quiz for {courseName} - Module {moduleId}</h2>
          <p>Question {currentIndex + 1} of {questions.length}</p>
          {questions.length > 0 && (
            <>
              <p><strong>{questions[currentIndex].question}</strong></p>
              <ul className="options-list">
                {questions[currentIndex].options.map((option, idx) => (
                  <li
                    key={idx}
                    className={`option-item ${selectedAnswer === option ? "selected" : ""}`}
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </>
          )}
          <button className="next-btn" onClick={handleNext} disabled={selectedAnswer === null}>
            {currentIndex + 1 < questions.length ? "Next Question" : "Finish Quiz"}
          </button>
        </>
      ) : (
        <QuizConclusion
          score={score}
          totalQuestions={questions.length}
          incorrectAnswers={incorrectAnswers}
          onRetry={handleRetryQuiz}
          onNext={handleQuizCompletion}
        />
      )}
    </div>
  );
};

const QuizConclusion = ({ score, totalQuestions, incorrectAnswers, onRetry, onNext }) => {
  return (
    <div className="quiz-conclusion">
      <h2>Quiz Completed!</h2>
      <p>Your Final Score: {score}/{totalQuestions}</p>
      {score >= 7 ? (
        <button className="next-btn" onClick={onNext}>
          🎯 Proceed to Next Module
        </button>
      ) : (
        <>
          <p>You can review your incorrect answers below:</p>
          <div className="review-section">
            {incorrectAnswers.length > 0 ? (
              incorrectAnswers.map((item, index) => (
                <div key={index} className="review-item">
                  <p><strong>Question:</strong> {item.question}</p>
                  <p><strong>Explanation:</strong> {item.explanation}</p>
                </div>
              ))
            ) : (
              <p>Great job! You got all questions correct. 🎉</p>
            )}
            <button className="restart-btn" onClick={onRetry}>
              🔄 Retake Quiz
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
