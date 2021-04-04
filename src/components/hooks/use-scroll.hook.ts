import { useEffect, useState } from 'react';

interface UseScrollHookReturn{
  isOnTop: boolean;
}

export const useScroll = ():UseScrollHookReturn => {
  const [isOnTop, setIsOnTop] = useState(true);

  useEffect(() => {
    const setPosition = () => {
      setIsOnTop(window.pageYOffset === 0);
    };
    window.addEventListener('scroll', setPosition);
    setPosition();

    return () => window.removeEventListener('scroll', setPosition);
  }, []);

  return { isOnTop };
};
