import { useSpring } from 'react-spring';
import { easeExpOut } from 'd3-ease';

export const lineSlide = stateToggle => {
  return useSpring({
    config: { duration: stateToggle ? 1200 : 500, easing: easeExpOut },
    from: {
      width: '0%'
    },
    to: {
      width: stateToggle ? '100%' : '0%'
    },
    delay: stateToggle ? 200 : 0
  });
};
