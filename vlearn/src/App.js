import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import CoursePage from "./components/CoursePage/CoursePage";
import StartPage from "./components/StartPage/StartPage";
import QuizPage from "./components/QuizPage/QuizPage"; 
import AboutPage from "./components/AboutPage/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage";
import LessonPage from "./components/LessonPage/LessonPage"; // Import LessonPage
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/courses" element={<Layout><CoursePage /></Layout>} />
          <Route path="/start" element={<Layout><StartPage /></Layout>} />
          <Route path="/quiz" element={<NoLayout><QuizPage /></NoLayout>} />
          <Route path="/about" element={<Layout><AboutPage /></Layout>} />
          <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
          <Route path="/lesson" element={<Layout><LessonPage /></Layout>} /> {/* New Lesson Page Route */}
        </Routes>
      </div>
    </Router>
  );
}

// Layout Component (Includes Navbar & Sidebar)
function Layout({ children }) {
  return (
    <div className="main-layout">
      <Navbar />
      <Sidebar />
      <div className="page-content">{children}</div>
    </div>
  );
}

// NoLayout Component (For Pages Without Navbar & Sidebar)
function NoLayout({ children }) {
  return <div className="no-layout">{children}</div>;
}

export default App;
