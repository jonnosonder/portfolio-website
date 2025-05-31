import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current; // Copy ref.current to a variable
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) { // Use the variable in cleanup
        observer.unobserve(node);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
};