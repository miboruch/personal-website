import { useSpring } from 'react-spring';
import { easeExpOut } from 'd3-ease';

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
