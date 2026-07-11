import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';
import './Projects.css';

import prepnovaImg from '../../assets/prepnova.png';
import movieImg from '../../assets/movie_trailer.png';
import learnImg from '../../assets/learn_to_code.png';

export default function Projects() {
  const projectsData = [
    {
      title: "PrepNova – Placement Preparation Portal",
      description: "An interactive, high-performance web platform designed to streamline student placement prep. Features diagnostic assessments, AI-driven feedback loops, structured learning paths, and progress tracking visualizations.",
      image: prepnovaImg,
      techStack: ["React", "Django", "SQL", "CSS Grid", "Chart.js"],
      githubLink: "https://github.com",
      demoLink: "https://example.com"
    },
    {
      title: "Movie Trailer Website",
      description: "A visually immersive film exploration application. Users can search catalog files, view high-definition trailers, browse detailed synopsis profiles, check ratings, and filter movies by custom genres.",
      image: movieImg,
      techStack: ["React", "CSS Flexbox", "TMDB API", "Lucide Icons"],
      githubLink: "https://github.com",
      demoLink: "https://example.com"
    },
    {
      title: "Learn-to-Code",
      description: "Developed a multi-page static educational website using HTML5 and CSS3 to help beginners learn HTML and CSS concepts. The project includes a video-background landing page, structured tutorial content, interactive cards, embedded video lessons, navigation pages, and a department information page with course details.",
      image: learnImg,
      techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      githubLink: "https://github.com/crkoushik25-ctrl/Learn-to-Code---Static-Educational-Website",
      demoLink: "https://github.com/crkoushik25-ctrl/Learn-to-Code---Static-Educational-Website"
    }
  ];

  return (
    <section id="projects" className="projects-section section">
      <div className="projects-container container">
        <h2 className="section-title reveal">Featured Projects</h2>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card glass-panel reveal">
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
                <div className="project-image-overlay">
                  <span className="project-category-badge">
                    <Code size={14} /> Full Stack
                  </span>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech-list">
                  {project.techStack.map((tech, tIndex) => (
                    <span key={tIndex} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-secondary project-btn ripple"
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary project-btn ripple"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
