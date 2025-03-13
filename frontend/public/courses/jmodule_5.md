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
