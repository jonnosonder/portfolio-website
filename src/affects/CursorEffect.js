import { useEffect, useContext } from 'react';
import { GlobalContext } from '../GlobalContext';

const CursorEffect = () => {
  const { isBurgerActive } = useContext(GlobalContext);
  const paused = isBurgerActive;

  useEffect(() => {
    if (paused) {
      document.body.style.background = 'var(--background)'; 
      return;
    }

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      document.body.style.background = `radial-gradient(circle 60px at ${x}px ${y}px, var(--hover), var(--background))`;
    };

    document.body.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
      document.body.style.background = 'var(--background)';
    };
  }, [paused]);

  return null;
};

export default CursorEffect;