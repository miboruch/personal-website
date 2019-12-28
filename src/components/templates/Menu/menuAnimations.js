import { Keyframes } from 'react-spring/renderprops-universal';
import { easeExpInOut } from 'd3-ease';

export const AnimatedMenu = Keyframes.Spring({
  in: async (next, ...props) => {
    const { scaleWidth, scaleHeight } = props[1].scale;
    console.log(scaleWidth);
    console.log(scaleHeight);
    await next({
      to: {
        transform: `scale(${scaleWidth}, ${scaleHeight})`
      },
      config: {
        duration: 0
      }
    });
    await next({
      visibility: 'visible',
      transform: 'scale(1,1)',
      config: {
        duration: 1000,
        easing: easeExpInOut
      }
    });
    await next({
      outline: '5px solid #fff',
      config: {
        duration: 300
      }
    });
  },
  out: async (next, ...props) => {
    const { scaleWidth, scaleHeight } = props[1].scale;
    await next({
      outline: '0px solid #fff',
      config: {
        duration: 300
      }
    });
    await next({
      transform: `scale(${scaleWidth}, ${scaleHeight})`,
      config: {
        duration: 1000,
        easing: easeExpInOut
      }
    });
    await next({
      visibility: 'hidden'
    });
  }
});

export const MenuItems = Keyframes.Trail({
  in: async next => {
    await next({
      opacity: 1,
      transform: 'translateX(0px)',
      delay: 600
    });
  },
  out: async next => {
    await next({
      opacity: 0,
      transform: 'translateX(-20px)'
    });
  }
});
