import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-top">
          <a href="#hero" className="footer-logo" onClick={handleScrollToTop}>
            <span>&lt;</span>Dev<span>/&gt;</span>
          </a>
          
          <ul className="footer-nav">
            <li><a href="#hero" onClick={handleScrollToTop}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>About</a></li>
            <li><a href="#skills" onClick={(e) => handleLinkClick(e, '#skills')}>Skills</a></li>
            <li><a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>Projects</a></li>
            <li><a href="#achievements" onClick={(e) => handleLinkClick(e, '#achievements')}>Achievements</a></li>
            <li><a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Contact</a></li>
          </ul>

          <div className="footer-socials">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a href="mailto:koushik@example.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Koushik. All rights reserved. Crafted with React.
          </p>
          <a href="#hero" className="scroll-top-link" onClick={handleScrollToTop}>
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
