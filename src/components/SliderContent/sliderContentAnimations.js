import { useSpring, useTrail } from 'react-spring';
import { easeExpOut } from 'd3-ease';

export const textWave = (text, stateToggle) => {
  return useTrail(text.length, {
    config: { duration: stateToggle ? 2000 : 500, easing: easeExpOut },
    opacity: stateToggle ? 1 : 0,
    x: stateToggle ? 0 : 50,
    from: { opacity: 0, x: 50 },
    delay: stateToggle ? 1500 : 0
  });
};

export const slideFade = stateToggle => {
  return useSpring({
    config: { duration: stateToggle ? 2000 : 500, easing: easeExpOut },
    to: {
      opacity: stateToggle ? 1 : 0
    },
    delay: stateToggle ? 1500 : 0
  });
};
