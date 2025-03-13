import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./Course.css";

const courses = {
  Python: [
    { id: 1, title: "Introduction to Python Programming", file: "/courses/module_1.md" },
    { id: 2, title: "Strings, Lists, and Tuples", file: "/courses/module_2.md" },
    { id: 3, title: "Functions and Modules", file: "/courses/module_3.md" },
    { id: 4, title: "OOP in Python", file: "/courses/module_4.md" },
    { id: 5, title: "Python Libraries and APIs", file: "/courses/module_5.md" },
    { id: 6, title: "Final Project and Best Practices", file: "/courses/module_6.md" },
  ],
  Java: [
    { id: 1, title: "Introduction to Java", file: "/courses/jmodule_1.md" },
    { id: 2, title: "OOP Concepts", file: "/courses/jmodule_2.md" },
    { id: 3, title: "File Handling and Exceptions", file: "/courses/jmodule_3.md" },
    { id: 4, title: "GUI Development", file: "/courses/jmodule_4.md" },
    { id: 5, title: "Spring Boot Basics", file: "/courses/jmodule_5.md" },
    { id: 6, title: "Final Project in Java", file: "/courses/jmodule_6.md" },
  ],
};

const Course = () => {
  const { courseName, moduleId } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [moduleCompleted, setModuleCompleted] = useState(false);

  const moduleNumber = parseInt(moduleId, 10);
  const modules = courses[courseName] || [];

  useEffect(() => {
    if (!modules.length) {
      console.error("Invalid course:", courseName);
      navigate("/"); // Redirect to home if the course is invalid
      return;
    }

    const currentModule = modules.find((m) => m.id === moduleNumber);
    if (!currentModule) {
      console.error("Invalid module:", moduleId);
      navigate(`/course/${courseName}/1`); // Redirect to first module if invalid
      return;
    }

    fetch(currentModule.file)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load module content.");
        return response.text();
      })
      .then((data) => setContent(data))
      .catch((error) => console.error("Error loading module:", error));
  }, [courseName, moduleId, navigate]);

  const handleCompleteModule = () => {
    setModuleCompleted(true);
  };

  const handleTakeQuiz = () => {
    navigate(`/course/${courseName}/${moduleId}/quiz`);
  };

  return (
    <div className="course-container">
      <h1 className="course-title">{modules[moduleNumber - 1]?.title || "Module Not Found"}</h1>

      <div className="course-content">
        <ReactMarkdown>{content || "Loading..."}</ReactMarkdown>
      </div>

      <div className="action-buttons">
        {!moduleCompleted ? (
          <button onClick={handleCompleteModule} className="complete-button">
            ✅ Mark as Completed
          </button>
        ) : (
          <button onClick={handleTakeQuiz} className="quiz-button">
            🎯 Start Quiz for This Module
          </button>
        )}
      </div>
    </div>
  );
};

export default Course;
