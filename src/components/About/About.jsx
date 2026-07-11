import React from 'react';
import { User, Code, Heart, Award } from 'lucide-react';
import './About.css';

export default function About() {
  const stats = [
    { icon: <Code size={24} />, number: "3+", label: "Years Coding" },
    { icon: <Award size={24} />, number: "10+", label: "Projects Completed" },
    { icon: <Heart size={24} />, number: "99%", label: "Satisfaction Rate" }
  ];

  return (
    <section id="about" className="about-section section">
      <div className="about-container container">
        <h2 className="section-title reveal">About Me</h2>
        
        <div className="about-grid">
          <div className="about-text-column reveal">
            <h3 className="about-subtitle">
              IT Student & Digital Creator dedicated to crafting seamless web systems and creative media.
            </h3>
            
            <p className="about-paragraph">
              Hello! I'm Koushik Prabhu C R, an Information Technology student at PSG College of Arts and Science, Coimbatore. I combine software development with visual storytelling to create highly immersive and visually appealing digital solutions.
            </p>
            
            <p className="about-paragraph">
              Along with programming in languages like Python, C, C++, and Java, I have developed a strong passion for creative content production. I edit high-impact video reels and direct motion graphics using tools like Adobe Premiere Pro, Final Cut Pro, After Effects, and Blender.
            </p>
            
            <p className="about-paragraph">
              Beyond coding and video production, I am an active sports player. I won first place in school-level football tournaments and the 4×100m athletic relay event. Our team also produced a short film that was featured and screened at the Coimbatore Vizha competition.
            </p>
          </div>

          <div className="about-stats-column reveal">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card glass-panel">
                  <div className="stat-icon-wrapper">
                    {stat.icon}
                  </div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="about-quick-facts glass-panel">
              <h4>Quick Details</h4>
              <ul className="facts-list">
                <li><strong>College:</strong> PSG College of Arts & Science, Coimbatore</li>
                <li><strong>Major:</strong> B.Sc. Information Technology</li>
                <li><strong>Athletics:</strong> Football, 4x100m Relay</li>
                <li><strong>Creative Work:</strong> Video Editing & CGI (Blender)</li>
                <li><strong>Interests:</strong> Web Dev, UI/UX Design, Filmmaking</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
