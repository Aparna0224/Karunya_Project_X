import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./CoursePage.css";
import pythonLogo from "../../assets/python.png"; // Replace with actual image paths
import javaLogo from "../../assets/java.png";
import cppLogo from "../../assets/cpp.png";
import rLogo from "../../assets/rp.png";

const CoursePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams] = useSearchParams();
  const selectedCourse = searchParams.get("course");

  const handleSearch = () => {
    alert(`Searching for: ${searchTerm}`);
  };

  const popularCourses = [
    { name: "Python", image: pythonLogo, desc: "Learn Python for AI & Data Science." },
    { name: "Java", image: javaLogo, desc: "Master Java for Software Development." },
    { name: "C++", image: cppLogo, desc: "Explore C++ for Competitive Programming." },
    { name: "R", image: rLogo, desc: "Analyze Data with R Programming." },
  ];

  return (
    <div className="course-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="What course do you want to learn?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {selectedCourse && <h2 className="selected-course">Selected Course: {selectedCourse}</h2>}

      <h2 className="popular-title">🔥 Popular Courses</h2>
      <div className="popular-courses">
        {popularCourses.map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.image} alt={course.name} />
            <h3>{course.name}</h3>
            <p>{course.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
