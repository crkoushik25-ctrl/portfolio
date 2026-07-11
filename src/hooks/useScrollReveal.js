import { useEffect } from 'react';

/**
 * Custom React hook to reveal elements when scrolled into view.
 * It observes all elements with the '.reveal' class and adds the '.revealed' class.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50px 0px -50px 0px', // Trigger slightly before it fully shows
      threshold: 0.1,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Once revealed, we don't need to observe it anymore
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Find all elements to observe
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    // Cleanup observer on component unmount
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}
