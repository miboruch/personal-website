import { useEffect, useLayoutEffect, useState } from 'react';

export const useElementSize = ref => {
  const [size, setSize] = useState({ width: undefined, height: undefined });
  useLayoutEffect(() => {
    const updateSize = () => {
      return setSize({
        width: ref.current.clientWidth,
        height: ref.current.clientHeight
      });
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

export const useScrollPosition = () => {
  const [isOnTop, setIsOnTop] = useState(true);

  useEffect(() => {
    const setPosition = () => {
      setIsOnTop(window.pageYOffset === 0);
    };
    window.addEventListener('scroll', setPosition);
    setPosition();

    return () => window.removeEventListener('scroll', setPosition);
  }, []);

  return isOnTop;
};
