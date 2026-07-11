import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import './Education.css';

export default function Education() {
  const educationList = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "PSG College of Arts and Science, Coimbatore",
      duration: "2024 - 2027",
      grade: "Pursuing",
      details: "Gaining a strong foundation in computer systems, algorithms, and networks. Core coursework includes Software Engineering, Object-Oriented Languages (C++, Java, Python), Database Management Systems (SQL), Web Technologies, and Creative Media."
    }
  ];

  return (
    <section id="education" className="education-section section">
      <div className="education-container container">
        <h2 className="section-title reveal">Education</h2>

        <div className="education-grid">
          {educationList.map((edu, index) => (
            <div key={index} className="education-card glass-panel reveal">
              <div className="education-header">
                <div className="education-icon-wrapper">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="education-degree">{edu.degree}</h3>
                  <h4 className="education-institution">{edu.institution}</h4>
                </div>
              </div>

              <div className="education-body">
                <div className="education-meta">
                  <span className="education-meta-item">
                    <Calendar size={14} /> {edu.duration}
                  </span>
                  <span className="education-meta-item">
                    <Award size={14} /> {edu.grade}
                  </span>
                </div>
                <p className="education-details">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
