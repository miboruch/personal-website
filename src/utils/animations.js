import { useSpring } from 'react-spring';
import { easeExpOut } from 'd3-ease';

/* More general animation declarations, which can be used in different components */
/* Animations for specific components are placed in components folders */
export const createFade = (stateToggle, duration, delay, offDuration = 500) => {
  return useSpring({
    config: {
      duration: stateToggle ? duration : offDuration,
      easing: easeExpOut
    },
    from: {
      opacity: 0
    },
    to: {
      opacity: stateToggle ? 1 : 0
    },
    delay: stateToggle ? delay : 0
  });
};

export const createUpperFadeOut = (stateToggle, duration, delay = 0) => {
  return useSpring({
    config: {
      duration: duration,
      easing: easeExpOut
    },
    to: {
      transform: `translateY(${stateToggle ? '-100%' : '0'})`
    },
    delay: delay
  });
};
