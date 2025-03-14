import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SurveyForm from "./components/SurveyForm";
import Assessment from "./components/Assessment";
import Course from "./components/Course";
import Quiz from "./components/Quiz";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

        {isAuthenticated ? (
          <>
            <Route path="/survey" element={<SurveyForm />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/course/:courseName/:moduleId" element={<Course />} />
            <Route path="/course/:courseName/:moduleId/quiz" element={<Quiz />} />
            <Route path="*" element={<Navigate to="/survey" />} />
          </>  
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
