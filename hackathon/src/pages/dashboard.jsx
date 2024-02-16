import React from "react";
import { Header } from "../components/header";

export default Dashboard;
import React from 'react';
import './Dashboard.css'; /
const Dashboard = () => {
  const slideshowData = [
    { image: 'lecture1.jpg', text: 'Current Lecture: Introduction to Hackathon' },
    { image: 'lecture2.jpg', text: 'Next Lecture: State and Props' },
  ];

  const classesMissedData = {
    image: 'missedClasses.jpg',
    text: 'Classes Missed: 3',
  };

  return (
    <div className="dashboard-container">
      <div className="slideshow-container">
        {slideshowData.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            <div className="slide-text">{slide.text}</div>
          </div>
        ))}
      </div>

      <div className="classes-missed-container">
        <div className="classes-missed">
          <img src={classesMissedData.image} alt="Missed Classes" />
          <div className="missed-text">{classesMissedData.text}</div>
        </div>
      </div>

      <div className="timetable-container">
        {/* Big picture of timetable */}
        <img src="timetable.jpg" alt="Timetable" />
      </div>
    </div>
  );
};

export default Dashboard;

