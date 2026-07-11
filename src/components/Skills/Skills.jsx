import React from 'react';
import { Code2, Server, Wrench, Layers } from 'lucide-react';
import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      title: "Technical Languages & Frameworks",
      icon: <Code2 size={22} />,
      skills: [
        { name: "Python", color: "#3776AB", level: "90%" },
        { name: "Java", color: "#007396", level: "85%" },
        { name: "C / C++", color: "#00599C", level: "80%" },
        { name: "JavaScript & React", color: "#61DAFB", level: "88%" },
        { name: "Django & SQL", color: "#092E20", level: "82%" },
        { name: "HTML & CSS", color: "#E34F26", level: "92%" }
      ]
    },
    {
      title: "Creative Editing & CGI Tools",
      icon: <Layers size={22} />,
      skills: [
        { name: "Premiere Pro & After Effects", color: "#9999FF", level: "90%" },
        { name: "Final Cut & DaVinci Resolve", color: "#4B0082", level: "85%" },
        { name: "Blender 3D Modeling", color: "#E87D0D", level: "78%" },
        { name: "Photoshop & Kdenlive", color: "#31A8FF", level: "80%" }
      ]
    },
    {
      title: "Productivity & Core Office",
      icon: <Wrench size={22} />,
      skills: [
        { name: "MS Excel (Formulas)", color: "#107C41", level: "90%" },
        { name: "Word & PowerPoint", color: "#D24726", level: "95%" },
        { name: "Database Management", color: "#4479A1", level: "85%" },
        { name: "Figma UI/UX", color: "#F24E1E", level: "78%" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section section">
      <div className="skills-container container">
        <h2 className="section-title reveal">My Skills</h2>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="skills-category-card glass-panel reveal">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <div className="skill-name-wrapper">
                        <span 
                          className="skill-color-dot" 
                          style={{ backgroundColor: skill.color, boxShadow: `0 0 10px ${skill.color}` }}
                        />
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}</span>
                    </div>
                    {/* Skill progress bar with gradient glow on hover */}
                    <div className="skill-bar-bg">
                      <div 
                        className="skill-bar-fill" 
                        style={{ 
                          width: skill.level,
                          background: `linear-gradient(90deg, var(--accent-blue) 0%, ${skill.color} 100%)` 
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
