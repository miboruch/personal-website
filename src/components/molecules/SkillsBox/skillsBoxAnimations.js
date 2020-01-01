import { Keyframes } from 'react-spring/renderprops-universal';
import { easeExp } from 'd3-ease';

export const AnimatedWrapper = Keyframes.Spring({
  in: async next => {
    await next({
      opacity: 1,
      visibility: 'visible',
      config: {
        duration: 500
      },
      delay: 0
    });
  },
  out: async next => {
    await next({
      opacity: 0,
      config: {
        duration: 1500
      },
      delay: 3000
    });
    await next({
      visibility: 'hidden',
      config: {
        duration: 1
      },
      delay: 0
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
        duration: 1500,
        easing: easeExp
      },
      delay: 800
    });
  },
  out: async next => {
    await next({
      transform: 'translateY(10%)',
      opacity: 0,
      config: {
        duration: 700,
        easing: easeExp
      },
      delay: 2000
    });
    await next({
      visibility: 'hidden',
      config: {
        duration: 1,
        easing: easeExp
      },
      delay: 0
    });
  }
});

export const BoxItems = Keyframes.Trail({
  in: async next => {
    await next({
      opacity: 1,
      transform: 'translateX(0px)',
      delay: 50
    });
  },
  out: async next => {
    await next({
      opacity: 0,
      transform: 'translateX(-20px)',
      delay: 0
    });
  }
});
