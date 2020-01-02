import { useEffect, useLayoutEffect, useRef, useState } from 'react';

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

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    screenWidth: undefined,
    screenHeight: undefined
  });

  useLayoutEffect(() => {
    const setSize = () => {
      setScreenSize({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight
      });
    };
    window.addEventListener('resize', setSize);
    setSize();

    return () => window.removeEventListener('resize', setSize);
  }, []);

  return screenSize;
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

export const useMousePosition = () => {
  const [position, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setPosition = e => {
      setMousePosition({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener('mousemove', setPosition);

    return () => window.removeEventListener('mousemove', setPosition);
  }, []);

  return position;
};
