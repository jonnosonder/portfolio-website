import { useRef, useEffect, useState } from 'react';

const AnimatedSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.25 }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        marginTop: isVisible ? '0' : '20px',
        transition: `opacity 0.5s ${delay}s ease-out, margin-top 0.5s ${delay}s ease-out`,
        width: '100%'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;