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
    from: {
      opacity: 0
    },
    to: {
      opacity: stateToggle ? 1 : 0
    },
    delay: stateToggle ? 1500 : 0
  });
};

export const slideFadeDelayed = stateToggle => {
  return useSpring({
    config: { duration: stateToggle ? 2000 : 500, easing: easeExpOut },
    from: {
      opacity: 0,
      transform: 'translateX(-20px)'
    },
    to: {
      opacity: stateToggle ? 1 : 0,
      transform: stateToggle ? 'translateX(0px)' : 'translateX(-20px)'
    },
    delay: stateToggle ? 1800 : 0
  });
};

export const lineSlide = stateToggle => {
  return useSpring({
    config: { duration: stateToggle ? 2000 : 500, easing: easeExpOut },
    from: {
      width: '0%'
    },
    to: {
      width: stateToggle ? '100%' : '0%'
    },
    delay: stateToggle ? 1800 : 0
  });
};
