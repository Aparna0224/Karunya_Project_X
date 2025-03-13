import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Assessment.css";

const Assessment = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    
    // Get initial course and level from URL params
    const initialCourse = searchParams.get("course") || "Java";
    const initialLevel = searchParams.get("level") || "Beginner";

    // State management
    const [selectedCourse, setSelectedCourse] = useState(initialCourse);
    const [selectedLevel, setSelectedLevel] = useState(initialLevel);
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    // Fetch questions when course or level changes
    useEffect(() => {
        const fetchQuestions = async () => {
            setLoading(true);
            try {
                const response = await axios.post("http://localhost:5001/generate-mcq", {
                    course: selectedCourse,
                    level: selectedLevel
                });
                setQuestions(response.data.questions);
                setError(null);
            } catch (err) {
                setError("Failed to load questions. Please try again.");
                setQuestions([]);
            } finally {
                setLoading(false);
            }
        };
        fetchQuestions();
    }, [selectedCourse, selectedLevel]);

    // Update URL parameters when selection changes
    const updateSelection = () => {
        setSearchParams({ course: selectedCourse, level: selectedLevel });
    };

    // Handle answer selection
    const handleAnswerChange = (questionIndex, answer) => {
        setAnswers(prev => ({ ...prev, [questionIndex]: answer }));
    };

    // Handle submission and check score
    const handleSubmit = () => {
        let correctAnswers = 0;
        questions.forEach((q, index) => {
            if (answers[index] === q.correct) {
                correctAnswers++;
            }
        });

        const totalQuestions = questions.length;
        const percentage = (correctAnswers / totalQuestions) * 100;
        setScore(percentage);
        setShowResult(true);

        // Redirect after 3 seconds
        setTimeout(() => {
            navigate(`/course/${selectedCourse}/1`); // Redirect to the first module of the selected course
        }, 3000);
    };

    return (
        <div className="quiz-container">
            <h2>📚 {selectedCourse} - {selectedLevel} Level Assessment</h2>

            <div className="selection-container">
                <label>Course:</label>
                <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
                    <option value="Java">Java</option>
                    <option value="Python">Python</option>
                </select>

                <label>Level:</label>
                <select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)}>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                </select>

              
            </div>

            {loading && <p>Loading questions...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {!loading && !error && questions.length > 0 && (
                <div className="questions-container">
                    {questions.map((q, index) => (
                        <div key={index} className="question">
                            <p><strong>Q{index + 1}:</strong> {q.text}</p>
                            <ul>
                                {q.options.map((option, idx) => (
                                    <li key={idx}>
                                        <input
                                            type="radio"
                                            name={`question-${index}`}
                                            value={option}
                                            checked={answers[index] === option}
                                            onChange={() => handleAnswerChange(index, option)}
                                        />
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <button className="submit-btn" onClick={handleSubmit}>Submit</button>
                </div>
            )}

            {!loading && showResult && (
                <div className="result">
                    <h3>Result: {score >= 50 ? "🎉 Pass" : "❌ Fail"}</h3>
                    <p>Your Score: {score.toFixed(2)}%</p>
                    {score < 50 && <p>Need to concentrate more. Keep practicing!</p>}
                    {score >= 50 && <p>Great job! You're doing well.</p>}
                    <p>Redirecting to the course page...</p>
                </div>
            )}

            {!loading && questions.length === 0 && <p>No questions available for this selection.</p>}
        </div>
    );
};

export default Assessment;