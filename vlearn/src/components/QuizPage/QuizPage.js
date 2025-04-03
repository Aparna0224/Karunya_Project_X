import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./QuizPage.css";

function QuizPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [selectedCourse, setSelectedCourse] = useState(searchParams.get("course") || "Java");
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(null);
  const [category, setCategory] = useState("");
  const [courseContent, setCourseContent] = useState("");

  // Fetch quiz questions when course changes
  useEffect(() => {
    setLoading(true);
    axios
      .post("http://localhost:5001/generate-mcq", { course: selectedCourse })
      .then((response) => {
        setQuestions(response.data.questions);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
        setLoading(false);
      });
  }, [selectedCourse]);

  // Handle answer selection
  const handleAnswerSelect = (questionIndex, selectedOption) => {
    setSelectedAnswers({ ...selectedAnswers, [questionIndex]: selectedOption });
  };

  // Handle course selection change
  const handleCourseChange = (event) => {
    const newCourse = event.target.value;
    setSelectedCourse(newCourse);
    setSearchParams({ course: newCourse }); // Update URL params
    setQuestions([]); // Reset quiz on course change
    setScore(null);
    setCategory("");
    setCourseContent("");
  };

  // Fetch appropriate course material based on level & course
  const fetchCourseContent = (level) => {
    let filePath = "";

    if (selectedCourse === "Java") {
      if (level === "Beginner") filePath = "/courses/Basic_java_course.txt";
      else if (level === "Intermediate") filePath = "/courses/intermediate_java_course.txt";
      else filePath = "/courses/advanced_java_course.txt";
    } else if (selectedCourse === "Python") {
      if (level === "Beginner") filePath = "/courses/Basic_python_course.txt";
      else if (level === "Intermediate") filePath = "/courses/intermediate_python_course.txt";
      else filePath = "/courses/advanced_python_course.txt";
    }

    axios
      .get(filePath)
      .then((response) => {
        setCourseContent(response.data);
      })
      .catch((error) => {
        console.error("Error loading course content:", error);
      });
  };

  // Calculate score and determine skill level
  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct) correctCount += 1;
    });

    setScore(correctCount);

    let level = correctCount <= 4 ? "Beginner" : correctCount <= 7 ? "Intermediate" : "Advanced";
    setCategory(level);
    fetchCourseContent(level);
  };

  // Scroll to course content when score is available
  useEffect(() => {
    if (score !== null) {
      const courseContentSection = document.getElementById("course-content-section");
      if (courseContentSection) {
        courseContentSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [score]);

  return (
    <div className="quiz-container">
      <h2>Quiz for {selectedCourse}</h2>

      {loading ? (
        <p className="loading-text">Loading questions...</p>
      ) : (
        <div>
          {questions.map((question, index) => (
            <div key={index} className="question-card">
              <p>
                {index + 1}. {question.text}
              </p>
              {question.options.map((option) => (
                <label key={option} className="option-label">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={selectedAnswers[index] === option}
                    onChange={() => handleAnswerSelect(index, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          ))}

          <button onClick={handleSubmit} className="submit-button">
            Submit Quiz
          </button>

          {score !== null && (
            <div id="course-content-section" className="score-section">
              <h3>Your Score: {score} / {questions.length}</h3>
              <p className={`category ${category.toLowerCase()}`}>
                Skill Level: {category}
              </p>
              <h3>Course Material</h3>
              <pre className="course-content">{courseContent || "Loading course content..."}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default QuizPage;
