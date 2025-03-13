import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SurveyForm.css";

const SurveyPage = () => {
    const [course, setCourse] = useState("Python");
    const [level, setLevel] = useState("No Idea");
    const navigate = useNavigate(); 

    const handleStartQuiz = () => {
        if (level === "No Idea") {
            navigate(`/course/${course}/1`); // Redirect to first module of the selected course
        } else {
            navigate(`/assessment?course=${course}&level=${level}`); // Redirect to the quiz
        }
    };

    return (
        <div className="survey-container">
            <h1>Pre-Course Survey</h1>

            <label>Your Course: 
                <select value={course} onChange={(e) => setCourse(e.target.value)}>
                    <option value="Python">Python</option>
                    <option value="Java">Java</option> {/* ✅ Corrected value here */}
                </select>
            </label>

            <label>Your Knowledge Level: 
                <select value={level} onChange={(e) => setLevel(e.target.value)}>
                    <option value="No Idea">No Idea</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option> {/* ✅ Corrected value here */}
                </select>
            </label>

            <button className="start-btn" onClick={handleStartQuiz}>
                {level === "No Idea" ? "Go to Course" : "Start Quiz"}
            </button>
        </div>
    );
};

export default SurveyPage;
