import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./LessonPage.css";

function LessonPage() {
  const [searchParams] = useSearchParams();
  const course = searchParams.get("course") || "Unknown Course";
  const level = searchParams.get("level") || "Unknown Level";
  const [content, setContent] = useState("Loading content...");

  useEffect(() => {
    let filePath = "";

    const courseLower = course.toLowerCase();
    const levelLower = level.toLowerCase();

    if (courseLower === "java") {
      if (levelLower === "beginner") {
        filePath = "/courses/Basic_java_course.txt";
      } else if (levelLower === "intermediate") {
        filePath = "/courses/intermediate_java_course.txt";
      } else if (levelLower === "advanced") {
        filePath = "/courses/advanced_java_course.txt";
      }
    } else if (courseLower === "python") {
      if (levelLower === "beginner") {
        filePath = "/courses/Basic_python_course.txt";
      } else if (levelLower === "intermediate") {
        filePath = "/courses/intermediate_python_course.txt";
      } else if (levelLower === "advanced") {
        filePath = "/courses/advanced_python_course.txt";
      }
    }

    console.log("Fetching file:", filePath); // Debug log

    if (filePath) {
      fetch(process.env.PUBLIC_URL + filePath) // Ensure proper path
        .then((response) => {
          if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
          return response.text();
        })
        .then((data) => {
          console.log("Fetched content:", data); // Debug log
          setContent(data);
        })
        .catch((error) => {
          console.error("Error loading course content:", error);
          setContent("Error loading content. Please try again later.");
        });
    } else {
      setContent("No content available for this course and level.");
    }
  }, [course, level]);

  return (
    <div className="course-container">
      <h1>Welcome to {course} Course</h1>
      <h2>Level: {level}</h2>
      <p>This is your starting point. Let's get learning! 🚀</p>

      <div className="lesson-card">
        <h3>Lesson 1: Introduction to {course}</h3>
        <p>Start learning the basics of {course} at the {level} level.</p>
        <pre className="lesson-content">{content}</pre>
      </div>
    </div>
  );
}

export default LessonPage;
