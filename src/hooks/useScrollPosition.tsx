import { useEffect } from 'react';

export const useScrollPosition = () => {
  useEffect(() => {
    const position = localStorage.getItem('position');

    if (position) {
      window.scrollTo({
        top: +position,
      });
    }
  }, []);

  useEffect(() => {
    const handleScrollPosition = () => {
      const position = window.pageYOffset;
      localStorage.setItem('position', JSON.stringify(position));
    };

    window.addEventListener('scroll', handleScrollPosition, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollPosition);
  }, []);

  return null;
};
