import { Keyframes } from 'react-spring/renderprops-universal';
import { easeExp } from 'd3-ease';

export const AnimatedWrapper = Keyframes.Spring({
  in: async next => {
    await next({
      opacity: 1,
      visibility: 'visible',
      config: {
        duration: 500
      }
    });
  },
  out: async next => {
    await next({
      opacity: 0,
      visibility: 'hidden',
      config: {
        duration: 500
      }
    });
  }
});

export const AnimatedBox = Keyframes.Spring({
  in: async next => {
    await next({
      visibility: 'visible',
      opacity: 1,
      transform: 'translateY(0)',
      config: {
        duration: 500,
        easing: easeExp
      },
      delay: 800
    });
  },
  out: async next => {
    await next({
      transform: 'translateY(20%)',
      opacity: 0,
      visibility: 'hidden',
      config: {
        duration: 500,
        easing: easeExp
      }
    });
  }
});

export const BoxItems = Keyframes.Trail({
  in: async next => {
    await next({
      opacity: 1,
      transform: 'translateX(0px)',
      delay: 200
    });
  },
  out: async next => {
    await next({
      opacity: 0,
      transform: 'translateX(-20px)'
    });
  }
});
