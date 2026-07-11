import React, { useState, useEffect } from 'react';
import './ScrollProgress.css';

export default function ScrollProgress() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const scrolled = (window.scrollY / totalScroll) * 100;
        setScrollWidth(scrolled);
      } else {
        setScrollWidth(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run initially in case page is already scrolled
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress-container">
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollWidth}%` }}
      />
    </div>
  );
}
