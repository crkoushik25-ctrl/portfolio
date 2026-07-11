import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, FileText, ArrowRight } from 'lucide-react';
import './Hero.css';
import profileImg from '../../assets/profile.png';

export default function Hero() {
  const roles = ["Full Stack Web Developer", "Creative Video Editor", "UI/UX Designer", "IT Student"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const fullText = roles[roleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(120);

        if (currentText === fullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(60);

        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const targetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Custom button ripple effect trigger
  const handleRipple = (e) => {
    const btn = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ripple.className = 'ripple-effect';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    btn.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <section id="hero" className="hero-section section">
      <div className="hero-container container">
        <div className="hero-content reveal">
          <span className="hero-welcome">Welcome to my space</span>
          <h1 className="hero-name">Hi, I'm <span className="gradient-text">Koushik Prabhu C R</span></h1>
          
          <h2 className="hero-title">
            I am a <span className="typing-text">{currentText}</span>
            <span className="typing-cursor">|</span>
          </h2>
          
          <p className="hero-description">
            Pursuing Information Technology at PSG College of Arts and Science. Crafting premium, high-performance web applications and creative digital designs while editing high-impact visual media.
          </p>

          <div className="hero-actions">
            <a 
              href="#contact" 
              className="btn btn-primary ripple" 
              onClick={(e) => {
                handleContactClick(e);
                handleRipple(e);
              }}
            >
              Get In Touch <ArrowRight size={18} />
            </a>
            <a 
              href="/resume.pdf" 
              download 
              className="btn btn-secondary ripple" 
              onClick={handleRipple}
            >
              Download CV <FileText size={18} />
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
           
            <a href="mailto:koushik@example.com" className="social-icon-wrapper" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="profile-image-container">
            <div className="profile-image-glow"></div>
            <div className="profile-image-wrapper">
              <img 
                src={profileImg} 
                alt="Koushik Profile" 
                className="profile-image" 
              />
            </div>
            {/* Holographic accent badges */}
            <div className="hologram-badge badge-1">
              <span>🎬 Video Editor</span>
            </div>
            <div className="hologram-badge badge-2">
              <span>💻 IT Developer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
