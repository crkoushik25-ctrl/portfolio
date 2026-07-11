import React from 'react';
import { Film, Trophy, Medal } from 'lucide-react';
import './Achievements.css';

export default function Achievements() {
  const achievementsList = [
    {
      title: "Coimbatore Vizha Short Film Screening",
      description: "Collaborated in a creative team to produce a cinematic short film. Managed screenplay coordination, visual editing, CGI details in Blender, and audio sync. The film was officially selected and screened at the Coimbatore Vizha festival.",
      icon: <Film size={24} />,
      category: "Creative Media"
    },
    {
      title: "Football Tournament Champion",
      description: "Participated as a key team player and secured first place in school-level competitive football tournaments, showcasing teamwork, focus, and field communication skills.",
      icon: <Trophy size={24} />,
      category: "Athletics"
    },
    {
      title: "4×100m Athletic Relay Winner",
      description: "Secured first place in the 4×100 meters athletic relay racing event, demonstrating physical conditioning, sprint speed, and baton transition coordination.",
      icon: <Medal size={24} />,
      category: "Athletics"
    }
  ];

  return (
    <section id="achievements" className="achievements-section section">
      <div className="achievements-container container">
        <h2 className="section-title reveal">Achievements</h2>

        <div className="achievements-grid">
          {achievementsList.map((ach, index) => (
            <div key={index} className="achievement-card glass-panel reveal">
              <div className="ach-header">
                <div className="ach-icon-wrapper">
                  {ach.icon}
                </div>
                <span className="ach-badge">{ach.category}</span>
              </div>
              
              <h3 className="ach-title">{ach.title}</h3>
              <p className="ach-description">{ach.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
