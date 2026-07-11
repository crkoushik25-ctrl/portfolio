import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Django Developer Intern",
      company: "Robomatiic (A Division of CADD Technologies)",
      location: "Coimbatore, India",
      duration: "May 13, 2026 - May 29, 2026",
      description: "Completed an intensive internship training program focused on Full Stack Development with Django. Built server-side web systems, designed database models, integrated REST APIs, and created responsive interfaces.",
      skills: ["Python", "Django", "SQL", "HTML5", "CSS3", "REST APIs"]
    }
  ];

  return (
    <section id="experience" className="experience-section section">
      <div className="experience-container container">
        <h2 className="section-title reveal">My Experience</h2>

        <div className="timeline">
          <div className="timeline-line"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item reveal">
              <div className="timeline-dot">
                <Briefcase size={16} />
              </div>
              
              <div className="timeline-content glass-panel">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <h4 className="timeline-company">{exp.company}</h4>
                  </div>
                  <div className="timeline-meta">
                    <span className="meta-item">
                      <Calendar size={14} /> {exp.duration}
                    </span>
                    <span className="meta-item">
                      <MapPin size={14} /> {exp.location}
                    </span>
                  </div>
                </div>

                <p className="timeline-description">{exp.description}</p>

                <div className="timeline-skills">
                  {exp.skills.map((skill, sIndex) => (
                    <span key={sIndex} className="timeline-skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
