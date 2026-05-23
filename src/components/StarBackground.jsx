import { useEffect, useRef } from 'react';

const StarBackground = () => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    for (let i = 0; i < 150; i++) {
      const star = document.createElement('div');
      star.classList.add('falling-star');
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 10}s`;
      star.style.animationDuration = `${Math.random() * 5 + 3}s`;
      star.style.width = star.style.height = `${Math.random() * 2 + 1}px`;
      container.appendChild(star);
    }
    return () => container.innerHTML = '';
  }, []);

  return <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0" />;
};

export default StarBackground;