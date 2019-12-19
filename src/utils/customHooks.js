import { useLayoutEffect, useRef, useState } from 'react';

export const useElementSize = () => {
  const [size, setSize] = useState({ width: 220, height: 62 });
  const ref = useRef();

  useLayoutEffect(() => {
    const updateSize = () => {
      return setSize({
        width: ref.current.getBoundingClientRect().width,
        height: ref.current.getBoundingClientRect().height
      });
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return [size, ref];
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
