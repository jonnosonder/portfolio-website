import { useEffect } from 'react';

const CursorEffect = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      document.body.style.background = `radial-gradient(circle 60px  at ${x}px ${y}px, var(--hover), var(--background  ))`;
    };

    document.body.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null;
};

export default CursorEffect;