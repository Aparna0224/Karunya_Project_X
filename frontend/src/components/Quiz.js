import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./quiz.css"

// Define the quiz data with 15 questions per module
const quizData = {
  Python: {
    1: [
      { question: "Who created Python?", options: ["Guido van Rossum", "James Gosling", "Dennis Ritchie", "Bjarne Stroustrup"], answer: "Guido van Rossum" },
      { question: "Which Python version introduced pattern matching?", options: ["Python 2.7", "Python 3.6", "Python 3.9", "Python 3.10"], answer: "Python 3.10" },
      { question: "What is NOT a key feature of Python?", options: ["Readability", "Dynamically typed", "Strong typing", "Complex syntax"], answer: "Complex syntax" },
      { question: "What does the `len()` function do?", options: ["Counts items in a list", "Finds maximum value", "Checks if a variable is None", "Reverses a string"], answer: "Counts items in a list" },
      { question: "What will `5 ** 2` return?", options: ["25", "10", "5", "2.5"], answer: "25" },
      { question: "Which statement is used for loops in Python?", options: ["for", "loop", "repeat", "iterate"], answer: "for" },
      { question: "Which of these is not a Python data type?", options: ["List", "Tuple", "Class", "Enum"], answer: "Enum" },
      { question: "What does the `continue` statement do?", options: ["Exits the loop", "Skips the current iteration", "Repeats the loop", "Breaks the loop"], answer: "Skips the current iteration" },
      { question: "What does `self` refer to in Python classes?", options: ["The current class", "The previous object", "The current instance", "The superclass"], answer: "The current instance" },
      { question: "How do you declare a function in Python?", options: ["def func():", "function func() {}", "funct func() {}", "void func()"], answer: "def func():" },
      { question: "Which module is used for regular expressions in Python?", options: ["regex", "re", "regularex", "pattern"], answer: "re" },
      { question: "Which keyword is used to create a function?", options: ["function", "def", "lambda", "create"], answer: "def" },
      { question: "What does the `is` keyword check?", options: ["Value equality", "Reference equality", "Identity equality", "Type checking"], answer: "Identity equality" },
      { question: "Which data structure allows duplicate values?", options: ["Set", "Tuple", "List", "Dictionary"], answer: "List" },
      { question: "How do you start a comment in Python?", options: ["//", "/* */", "#", "--"], answer: "#" },
    ],
    2: [
      { question: "Which of these is used to store key-value pairs in Python?", options: ["List", "Tuple", "Dictionary", "Set"], answer: "Dictionary" },
      { question: "Which method removes whitespace from a string?", options: ["strip()", "trim()", "remove()", "clean()"], answer: "strip()" },
      { question: "How do you open a file in read mode?", options: ["open('file.txt', 'r')", "open('file.txt')", "open('file.txt', 'w')", "file('file.txt')"], answer: "open('file.txt', 'r')" },
      { question: "Which data structure ensures unique values?", options: ["List", "Tuple", "Set", "Dictionary"], answer: "Set" },
      { question: "Which of these is immutable?", options: ["List", "Set", "Dictionary", "Tuple"], answer: "Tuple" },
      { question: "Which of the following is used to find the length of a list?", options: ["size()", "count()", "len()", "length()"], answer: "len()" },
      { question: "What is the default mode for opening a file in Python?", options: ["r", "w", "a", "rw"], answer: "r" },
      { question: "Which function removes an item from a list?", options: ["delete()", "remove()", "erase()", "discard()"], answer: "remove()" },
      { question: "Which function returns the highest value in a list?", options: ["min()", "high()", "max()", "top()"], answer: "max()" },
      { question: "How do you sort a list in ascending order?", options: ["sort()", "order()", "ascending()", "arrange()"], answer: "sort()" },
      { question: "Which method converts a string to lowercase?", options: ["lower()", "small()", "down()", "case()"], answer: "lower()" },
      { question: "What does `split()` method do?", options: ["Splits a string into words", "Combines two strings", "Reverses a string", "Removes spaces"], answer: "Splits a string into words" },
      { question: "Which of the following methods returns a copy of the string with all occurrences of a substring replaced?", options: ["replace()", "swap()", "change()", "sub()"], answer: "replace()" },
      { question: "Which statement is used to check if a key exists in a dictionary?", options: ["if key in dict", "if dict contains key", "if dict.has_key(key)", "if key exists in dict"], answer: "if key in dict" },
      { question: "Which function adds an element to the end of a list?", options: ["push()", "append()", "insert()", "add()"], answer: "append()" },
    ],
    3: [
      { question: "Which keyword defines a function in Python?", options: ["function", "def", "define", "func"], answer: "def" },
      { question: "What is the purpose of a class in Python?", options: ["To store multiple values", "To define a blueprint for objects", "To execute functions", "To perform calculations"], answer: "To define a blueprint for objects" },
      { question: "Which method is called when an object is created?", options: ["__start__", "__new__", "__init__", "__create__"], answer: "__init__" },
      { question: "Which principle allows different classes to have the same method?", options: ["Encapsulation", "Polymorphism", "Inheritance", "Abstraction"], answer: "Polymorphism" },
      { question: "Which function raises an exception in Python?", options: ["throw", "raise", "error", "exception"], answer: "raise" },
      { question: "Which keyword is used to inherit a class?", options: ["extends", "inherits", "super", "class"], answer: "class" },
      { question: "How do you define a constructor in Python?", options: ["def init()", "def __init__()", "def constructor()", "def new()"], answer: "def __init__()" },
      { question: "What is encapsulation in Python?", options: ["Hiding implementation details", "Reusing code", "Making variables public", "None of the above"], answer: "Hiding implementation details" },
      { question: "Which symbol is used for method overriding in Python?", options: ["@", "#", "override", "None"], answer: "None" },
      { question: "Which method returns the length of a list?", options: ["size()", "len()", "count()", "length()"], answer: "len()" },
      { question: "Which function is used to delete an object?", options: ["delete()", "del()", "remove()", "erase()"], answer: "del()" },
      { question: "What is the superclass of all classes in Python?", options: ["BaseClass", "Root", "Object", "Super"], answer: "Object" },
      { question: "Which function is used to check if an object is an instance of a class?", options: ["isInstance()", "checkType()", "instanceof()", "isinstance()"], answer: "isinstance()" },
      { question: "Which keyword is used to define a static method?", options: ["@staticmethod", "@class", "@static", "@func"], answer: "@staticmethod" },
      { question: "Which method is called to destroy an object?", options: ["destroy()", "remove()", "__del__()", "delete()"], answer: "__del__()" },
    ],

    4: [
      { question: "Which Python module is used for turtle graphics?", options: ["graphics", "draw", "turtle", "paint"], answer: "turtle" },
      { question: "What does the `PIL` library help with?", options: ["File management", "Image processing", "Machine learning", "Data visualization"], answer: "Image processing" },
      { question: "Which function is used to convert an image to grayscale?", options: ["convert('L')", "grayscale()", "change_gray()", "set_gray()"], answer: "convert('L')" },
      { question: "Which library is used for opening image files in Python?", options: ["Pandas", "Matplotlib", "PIL", "Seaborn"], answer: "PIL" },
      { question: "Which shape can be drawn using turtle graphics?", options: ["Circle", "Rectangle", "Polygon", "All of the above"], answer: "All of the above" },
      { question: "Which function is used to display an image using PIL?", options: ["show()", "display()", "render()", "draw()"], answer: "show()" },
      { question: "Which method is used to load an image in PIL?", options: ["Image.open()", "openImage()", "load()", "readImage()"], answer: "Image.open()" },
      { question: "Which function saves an image in PIL?", options: ["save()", "export()", "write()", "store()"], answer: "save()" },
      { question: "Which function draws a rectangle using turtle?", options: ["drawRectangle()", "rectangle()", "rect()", "turtle.forward()"], answer: "turtle.forward()" },
      { question: "Which color mode does PIL support?", options: ["RGB", "CMYK", "L", "All of the above"], answer: "All of the above" },
      { question: "Which function is used to draw a circle in turtle?", options: ["circle()", "drawCircle()", "ellipse()", "oval()"], answer: "circle()" },
      { question: "Which function rotates an image using PIL?", options: ["rotate()", "turn()", "flip()", "spin()"], answer: "rotate()" },
      { question: "Which function resizes an image using PIL?", options: ["resize()", "scale()", "zoom()", "fit()"], answer: "resize()" },
      { question: "Which function pastes one image onto another in PIL?", options: ["paste()", "overlay()", "merge()", "combine()"], answer: "paste()" },
      { question: "Which function converts an image to black and white?", options: ["convert('1')", "bw()", "grayscale()", "mono()"], answer: "convert('1')" },
    ],
    5: [
      { question: "Which module is used for GUI programming in Python?", options: ["PyGUI", "Tkinter", "GUIX", "Pandas"], answer: "Tkinter" },
      { question: "Which Tkinter method creates a button?", options: ["Button()", "create_button()", "make_button()", "btn()"], answer: "Button()" },
      { question: "Which method in Tkinter is used to start the GUI loop?", options: ["start()", "begin()", "mainloop()", "run()"], answer: "mainloop()" },
      { question: "Which layout manager in Tkinter arranges widgets in a table?", options: ["pack()", "grid()", "place()", "align()"], answer: "grid()" },
      { question: "Which database is commonly used with Tkinter for storing data?", options: ["MongoDB", "SQLite", "PostgreSQL", "Firebase"], answer: "SQLite" },
      { question: "Which Tkinter widget is used for creating an input field?", options: ["Label", "Button", "Entry", "Frame"], answer: "Entry" },
      { question: "Which function is used to change the text in a Tkinter label?", options: ["set()", "configure()", "change()", "modify()"], answer: "configure()" },
      { question: "Which event is triggered when a button is clicked in Tkinter?", options: ["onClick", "click", "press", "command"], answer: "command" },
      { question: "Which function is used to display a message box in Tkinter?", options: ["showMessage()", "messageBox()", "messagebox.showinfo()", "infoBox()"], answer: "messagebox.showinfo()" },
      { question: "Which geometry manager places widgets at absolute positions?", options: ["pack()", "grid()", "place()", "align()"], answer: "place()" },
      { question: "Which function is used to change the background color of a Tkinter window?", options: ["setBg()", "bgcolor()", "config(bg='color')", "setBackground()"], answer: "config(bg='color')" },
      { question: "Which function in Tkinter creates a dropdown menu?", options: ["Dropdown()", "Select()", "Menu()", "OptionMenu()"], answer: "OptionMenu()" },
      { question: "Which function is used to close a Tkinter window?", options: ["close()", "destroy()", "exit()", "quit()"], answer: "destroy()" },
      { question: "Which module in Tkinter allows creating canvas-based graphics?", options: ["Draw", "Canvas", "Paint", "Graph"], answer: "Canvas" },
      { question: "Which method is used to bind keyboard events in Tkinter?", options: ["bind()", "keypress()", "attach()", "listen()"], answer: "bind()" },
    ],

    6: [
      { question: "Which module in Python is used for multithreading?", options: ["threading", "multiprocess", "parallel", "async"], answer: "threading" },
      { question: "Which Python module is used for socket programming?", options: ["os", "sys", "socket", "requests"], answer: "socket" },
      { question: "Which function is used to make a thread sleep?", options: ["wait()", "pause()", "delay()", "sleep()"], answer: "sleep()" },
      { question: "Which communication model does socket programming use?", options: ["Client-Server", "Peer-to-Peer", "Standalone", "Single-Process"], answer: "Client-Server" },
      { question: "Which function is used to create a new thread?", options: ["threading.Thread()", "new_thread()", "spawn_thread()", "createThread()"], answer: "threading.Thread()" },
      { question: "Which method starts a new thread?", options: ["run()", "start()", "execute()", "begin()"], answer: "start()" },
      { question: "Which method is used to wait for a thread to complete?", options: ["join()", "wait()", "sleep()", "pause()"], answer: "join()" },
      { question: "Which function in socket programming binds the server to an address?", options: ["bind()", "connect()", "attach()", "listen()"], answer: "bind()" },
      { question: "Which function listens for incoming connections?", options: ["listen()", "accept()", "bind()", "connect()"], answer: "listen()" },
      { question: "Which method in socket programming closes a connection?", options: ["disconnect()", "end()", "close()", "terminate()"], answer: "close()" },
      { question: "Which module in Python provides a high-level API for concurrency?", options: ["asyncio", "concurrent", "multiprocessing", "threading"], answer: "asyncio" },
      { question: "Which function is used to send data over a socket?", options: ["send()", "write()", "transmit()", "push()"], answer: "send()" },
      { question: "Which function is used to receive data over a socket?", options: ["receive()", "read()", "recv()", "fetch()"], answer: "recv()" },
      { question: "Which function is used to set a socket in non-blocking mode?", options: ["nonblock()", "setblocking(0)", "async()", "enable_async()"], answer: "setblocking(0)" },
      { question: "Which method is used to get the IP address of a hostname?", options: ["gethostbyname()", "resolveIP()", "findIP()", "hostnameIP()"], answer: "gethostbyname()" },
    ],
    
  },
  Java: {
    1: [
      { question: "Who created Java?", options: ["Brendan Eich", "James Gosling", "Dennis Ritchie", "Bjarne Stroustrup"], answer: "James Gosling" },
      { question: "What is the default value of an int variable in Java?", options: ["0", "null", "undefined", "1"], answer: "0" },
      { question: "Which package is imported by default in every Java program?", options: ["java.util", "java.io", "java.lang", "java.net"], answer: "java.lang" },
      { question: "Which keyword is used to define a constant in Java?", options: ["const", "final", "constant", "static"], answer: "final" },
      { question: "What is the superclass of all Java classes?", options: ["Object", "Main", "Super", "Base"], answer: "Object" },
      { question: "Which operator is used for bitwise AND?", options: ["&", "|", "^", "%"], answer: "&" },
      { question: "What is a constructor in Java?", options: ["A method that initializes an object", "A variable that holds an object", "A class method", "A loop"], answer: "A method that initializes an object" },
      { question: "What does the `static` keyword mean?", options: ["Method belongs to instance", "Method belongs to class", "Method is private", "Method is abstract"], answer: "Method belongs to class" },
      { question: "What is used to achieve inheritance in Java?", options: ["this", "extends", "inherits", "super"], answer: "extends" },
      { question: "Which loop runs at least once?", options: ["for", "while", "do-while", "foreach"], answer: "do-while" },
      { question: "What is the size of an int in Java?", options: ["2 bytes", "4 bytes", "8 bytes", "16 bytes"], answer: "4 bytes" },
      { question: "Which keyword is used to prevent method overriding?", options: ["static", "super", "final", "this"], answer: "final" },
      { question: "Which of the following is not a Java primitive type?", options: ["int", "float", "char", "String"], answer: "String" },
      { question: "Which interface provides the ability to store key-value pairs?", options: ["Map", "List", "Queue", "Set"], answer: "Map" },
      { question: "What does JVM stand for?", options: ["Java Virtual Machine", "Java Vendor Machine", "Java Version Model", "Java Variable Management"], answer: "Java Virtual Machine" },
    ],
    2: [
      { question: "What is the main concept behind OOP?", options: ["Structured Programming", "Encapsulation, Inheritance, Polymorphism, and Abstraction", "Functional Programming", "Memory Optimization"], answer: "Encapsulation, Inheritance, Polymorphism, and Abstraction" },
      { question: "What keyword is used to create an object?", options: ["create", "new", "instance", "allocate"], answer: "new" },
      { question: "What is Encapsulation?", options: ["Hiding implementation details", "Sorting data", "Alternative to loops", "Executing functions"], answer: "Hiding implementation details" },
      { question: "Which of the following is an access modifier?", options: ["public", "static", "abstract", "main"], answer: "public" },
      { question: "How do you inherit a class in Java?", options: ["extends", "implements", "inherits", "super"], answer: "extends" },
      { question: "What is method overloading?", options: ["Creating multiple methods with the same name but different parameters", "Reusing methods from parent classes", "A function that modifies its behavior", "Overriding private methods"], answer: "Creating multiple methods with the same name but different parameters" },
      { question: "Which of these is NOT a pillar of OOP?", options: ["Encapsulation", "Polymorphism", "Compilation", "Inheritance"], answer: "Compilation" },
      { question: "How do you define a constructor in Java?", options: ["static void Constructor() {}", "public static Constructor() {}", "public ClassName() {}", "void new() {}"], answer: "public ClassName() {}" },
      { question: "What is a superclass in Java?", options: ["A method", "A class that inherits", "A class that is extended by another class", "A class that cannot be instantiated"], answer: "A class that is extended by another class" },
      { question: "Which method enables runtime polymorphism?", options: ["method overloading", "method overriding", "method hiding", "constructor chaining"], answer: "method overriding" },
      { question: "What does the `super` keyword do?", options: ["Calls the child class constructor", "Calls the parent class constructor/method", "Creates a new object", "Deletes an object"], answer: "Calls the parent class constructor/method" },
      { question: "Which of the following cannot be overridden?", options: ["Static methods", "Public methods", "Private methods", "Protected methods"], answer: "Static methods" },
      { question: "What does `final` keyword do?", options: ["Prevents method overriding", "Makes a variable mutable", "Allows changes at runtime", "Declares a new instance"], answer: "Prevents method overriding" },
      { question: "What is the purpose of interfaces in Java?", options: ["To create abstract classes", "To enable multiple inheritance", "To define class behavior", "To make classes static"], answer: "To enable multiple inheritance" },
      { question: "What is the default access modifier for a class?", options: ["Package-private", "Private", "Public", "Protected"], answer: "Package-private" },
    ],
    3: [
      { question: "Which keyword is used to handle exceptions in Java?", options: ["catch", "throw", "try", "finally"], answer: "try" },
      { question: "What is the purpose of the `finally` block in exception handling?", options: ["To execute only if an exception occurs", "To execute only if no exception occurs", "To always execute regardless of exception", "To throw an exception"], answer: "To always execute regardless of exception" },
      { question: "Which of the following is NOT a type of exception in Java?", options: ["Checked Exception", "Unchecked Exception", "Runtime Exception", "Syntax Exception"], answer: "Syntax Exception" },
      { question: "What does the `throws` keyword do?", options: ["Catches exceptions", "Declares exceptions that a method might throw", "Ignores exceptions", "Creates exceptions"], answer: "Declares exceptions that a method might throw" },
      { question: "Which class is the parent of all exception classes in Java?", options: ["Throwable", "Exception", "Error", "RuntimeException"], answer: "Throwable" },
      { question: "Which Java statement is used to create a new file?", options: ["File.create()", "new File()", "Files.createNewFile()", "File.write()"], answer: "Files.createNewFile()" },
      { question: "Which method is used to write text to a file in Java?", options: ["writeText()", "FileWriter.write()", "write()", "print()"], answer: "FileWriter.write()" },
      { question: "Which stream is used for reading character data from a file?", options: ["FileInputStream", "BufferedReader", "DataInputStream", "Scanner"], answer: "BufferedReader" },
      { question: "Which method reads a single character from a file in Java?", options: ["read()", "nextChar()", "getChar()", "charAt()"], answer: "read()" },
      { question: "Which keyword is used to manually throw an exception?", options: ["throw", "throws", "catch", "exception"], answer: "throw" },
      { question: "What is the default behavior of an uncaught exception?", options: ["The program crashes", "The exception is ignored", "It gets logged", "It is automatically handled"], answer: "The program crashes" },
      { question: "Which exception occurs when an invalid array index is accessed?", options: ["ArrayIndexOutOfBoundsException", "NullPointerException", "IllegalArgumentException", "ArithmeticException"], answer: "ArrayIndexOutOfBoundsException" },
      { question: "What happens if the file specified in `FileReader` does not exist?", options: ["It creates a new file", "It throws a FileNotFoundException", "It ignores the error", "It returns null"], answer: "It throws a FileNotFoundException" },
      { question: "Which exception occurs when dividing a number by zero?", options: ["ArithmeticException", "NumberFormatException", "IOException", "NullPointerException"], answer: "ArithmeticException" },
    ],

    4: [
      { question: "Which Java class is used for creating a thread?", options: ["Thread", "Runnable", "Process", "Task"], answer: "Thread" },
      { question: "Which method is used to start a new thread?", options: ["run()", "begin()", "execute()", "start()"], answer: "start()" },
      { question: "What does the `synchronized` keyword do?", options: ["Prevents deadlocks", "Ensures thread safety by locking a resource", "Stops a thread", "Runs a thread in the background"], answer: "Ensures thread safety by locking a resource" },
      { question: "Which method is called when a thread is stopped?", options: ["stop()", "halt()", "terminate()", "None (Java does not support stopping a thread directly)"], answer: "None (Java does not support stopping a thread directly)" },
      { question: "Which of these is a valid thread state in Java?", options: ["Executing", "Running", "Idle", "Waiting"], answer: "Waiting" },
      { question: "Which Java interface must be implemented for multithreading?", options: ["Threadable", "Runnable", "Executable", "Multithread"], answer: "Runnable" },
      { question: "Which method in Java is used to pause a thread?", options: ["pause()", "sleep()", "wait()", "halt()"], answer: "sleep()" },
      { question: "Which method causes the current thread to wait until another thread finishes execution?", options: ["wait()", "sleep()", "join()", "yield()"], answer: "join()" },
      { question: "Which class provides socket programming in Java?", options: ["java.net.Socket", "java.io.Socket", "java.net.Connect", "java.net.Network"], answer: "java.net.Socket" },
      { question: "Which protocol is commonly used for client-server communication?", options: ["HTTP", "FTP", "SMTP", "DNS"], answer: "HTTP" },
      { question: "Which class is used to send data over a socket?", options: ["SocketSender", "OutputStream", "DataTransfer", "SocketData"], answer: "OutputStream" },
      { question: "Which function waits for a client connection in socket programming?", options: ["listen()", "wait()", "accept()", "connect()"], answer: "accept()" },
      { question: "Which function is used to close a socket connection?", options: ["end()", "shutdown()", "close()", "disconnect()"], answer: "close()" },
      { question: "Which method allows one thread to pause execution and allow others to run?", options: ["yield()", "wait()", "pause()", "stop()"], answer: "yield()" },
      { question: "Which Java package contains the networking classes?", options: ["java.net", "java.io", "java.lang", "java.utils"], answer: "java.net" },
    ],
    5: [
      { question: "Which Java GUI framework is built into Java?", options: ["Swing", "JavaFX", "AWT", "All of the above"], answer: "All of the above" },
      { question: "Which package is used for creating GUI applications in Java?", options: ["java.awt", "javax.swing", "javafx", "All of the above"], answer: "All of the above" },
      { question: "Which component is used to create a button in Swing?", options: ["JButton", "Button", "SwingButton", "AWTButton"], answer: "JButton" },
      { question: "Which method is used to set the visibility of a JFrame?", options: ["setVisible()", "display()", "show()", "setFrame()"], answer: "setVisible()" },
      { question: "Which Swing container is the top-level container for GUI applications?", options: ["JFrame", "JPanel", "JDialog", "JWindow"], answer: "JFrame" },
      { question: "Which layout manager arranges components in a single row or column?", options: ["GridLayout", "BorderLayout", "FlowLayout", "CardLayout"], answer: "FlowLayout" },
      { question: "Which method is used to add an event listener to a button?", options: ["addActionListener()", "setEventListener()", "onClick()", "addListener()"], answer: "addActionListener()" },
      { question: "Which of these is NOT a layout manager in Java?", options: ["BorderLayout", "GridLayout", "AbsoluteLayout", "SpringLayout"], answer: "AbsoluteLayout" },
      { question: "Which event class is used to handle button clicks?", options: ["KeyEvent", "MouseEvent", "ActionEvent", "InputEvent"], answer: "ActionEvent" },
      { question: "Which JavaFX class is the entry point for JavaFX applications?", options: ["Application", "Scene", "Stage", "FXMain"], answer: "Application" },
      { question: "Which method is used to set the title of a JFrame?", options: ["setTitle()", "setFrameTitle()", "setWindowTitle()", "defineTitle()"], answer: "setTitle()" },
      { question: "Which component is used to create a text field in Swing?", options: ["JLabel", "JTextField", "JTextArea", "JInput"], answer: "JTextField" },
      { question: "Which method is used to close a JavaFX application?", options: ["exit()", "closeApp()", "stop()", "terminate()"], answer: "stop()" },
      { question: "Which component is used to display a dialog box in Swing?", options: ["JDialog", "JPopup", "JBox", "JFrame"], answer: "JDialog" },
      { question: "Which class is used for 2D graphics in Java?", options: ["Graphics", "Graphics2D", "Drawing", "Canvas"], answer: "Graphics2D" },
    ],

    6: [
      { question: "Which Java framework is commonly used for web development?", options: ["Spring Boot", "Hibernate", "Struts", "All of the above"], answer: "All of the above" },
      { question: "What does Spring Boot simplify in Java web development?", options: ["Dependency management", "Database connections", "RESTful API development", "All of the above"], answer: "All of the above" },
      { question: "Which annotation marks a class as a Spring Boot application?", options: ["@SpringApplication", "@SpringBootApplication", "@SpringConfig", "@EnableSpring"], answer: "@SpringBootApplication" },
      { question: "Which Spring Boot module is used for RESTful APIs?", options: ["Spring MVC", "Spring Data", "Spring Security", "Spring Core"], answer: "Spring MVC" },
      { question: "Which annotation is used to define a REST controller in Spring Boot?", options: ["@Controller", "@RestController", "@SpringController", "@WebController"], answer: "@RestController" },
      { question: "Which HTTP method is used for retrieving data in REST APIs?", options: ["POST", "DELETE", "GET", "PUT"], answer: "GET" },
      { question: "Which ORM framework is commonly used with Spring Boot?", options: ["JPA", "Hibernate", "JDBC", "Both JPA and Hibernate"], answer: "Both JPA and Hibernate" },
      { question: "Which database is commonly used with Spring Boot?", options: ["MySQL", "PostgreSQL", "MongoDB", "All of the above"], answer: "All of the above" },
      { question: "Which annotation maps a method to a specific HTTP request in Spring Boot?", options: ["@RequestMapping", "@GetMapping", "@PostMapping", "All of the above"], answer: "All of the above" },
      { question: "Which Spring Boot feature helps in automatic configuration?", options: ["Spring Boot AutoConfig", "Spring Initializer", "Spring Boot Autoconfiguration", "Spring Boot Starter"], answer: "Spring Boot Autoconfiguration" },
      { question: "Which component of Spring Boot handles security?", options: ["Spring Security", "Spring Guard", "Spring Auth", "Spring Access"], answer: "Spring Security" },
      { question: "Which dependency is required for Spring Boot web applications?", options: ["spring-boot-starter-web", "spring-core", "spring-boot-mvc", "spring-server"], answer: "spring-boot-starter-web" },
      { question: "Which file is used to configure a Spring Boot application?", options: ["application.properties", "config.yaml", "settings.xml", "spring.xml"], answer: "application.properties" },
      { question: "Which tool is used to create a Spring Boot project?", options: ["Spring Initializr", "Spring Boot CLI", "Maven", "All of the above"], answer: "All of the above" },
      { question: "Which annotation is used for dependency injection in Spring Boot?", options: ["@Autowired", "@Inject", "@Resource", "All of the above"], answer: "All of the above" },
    ],
    
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

  useEffect(() => {
    if (!quizData[courseName] || !quizData[courseName][moduleId]) {
      console.error("Quiz data not found!");
      setQuestions([]);
    } else {
      setQuestions(getRandomQuestions(quizData[courseName][moduleId]));
    }
  }, [courseName, moduleId]);

  const handleAnswer = (option) => {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    setSelectedAnswer(option);
    if (option === questions[currentIndex].answer) {
      setScore((prev) => prev + 1);
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

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setQuizCompleted(false);
    setQuestions(getRandomQuestions(quizData[courseName][moduleId])); // Reset quiz
  };

  const handleQuizCompletion = () => {
    const nextModule = Math.min(6, parseInt(moduleId) + 1);
    navigate(`/course/${courseName}/${nextModule}`);
  };

  if (questions.length === 0) {
    return <p>No quiz available.</p>;
  }

  return (
    <div className="quiz-container">
      {!quizCompleted ? (
        <>
          <h2>Quiz for {courseName} - Module {moduleId}</h2>
          <p>Question {currentIndex + 1} of {questions.length}</p>
          <p><strong>{questions[currentIndex].question}</strong></p>
          <ul className="options-list">
            {questions[currentIndex].options.map((option, idx) => (
              <li
                key={idx}
                onClick={() => handleAnswer(option)}
                className={`option ${
                  selectedAnswer
                    ? option === questions[currentIndex].answer
                      ? "correct"
                      : option === selectedAnswer
                      ? "incorrect"
                      : ""
                    : ""
                }`}
              >
                {option}
              </li>
            ))}
          </ul>
          <button
            className="next-btn"
            onClick={handleNext}
            disabled={selectedAnswer === null}
          >
            {currentIndex + 1 < questions.length ? "Next Question" : "Finish Quiz"}
          </button>
        </>
      ) : (
        <>
          <h2>Quiz Completed!</h2>
          <p>Your Final Score: {score}/10</p>
          {score >= 7 ? (
            <button className="submit-btn" onClick={handleQuizCompletion}>
              Go to Next Module
            </button>
          ) : (
            <button className="restart-btn" onClick={handleRestart}>
              Retake Quiz
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Quiz;