import React from 'react';
import styled from 'styled-components';
import { TransitionState } from 'gatsby-plugin-transition-link';
import { Keyframes, Spring } from 'react-spring/renderprops-universal';
import { animated, useSpring } from 'react-spring';
import { easeExpInOut, easeExpOut } from 'd3-ease';

const StyledBox = styled(animated.div)`
  width: 100vw;
  height: 100vh;
  background: #1d1d1d;
  z-index: 1001;
  position: fixed;
  top: 0;
  left: 0;
`;

const AnimatedBox = Keyframes.Spring({
  exitPageAnimation: async next => {
    await next({
      from: {
        transform: `translateX(-100%)`
      },
      to: {
        transform: `translateX(0%)`
      }
    });
    await next({
      to: {
        transform: `translateX(0%)`
      },
      config: {
        duration: 3000,
        easing: easeExpInOut
      }
    });
  },
  enterPageAnimation: async next => {
    await next({
      transform: `translateX(100%)`,
      config: {
        duration: 3000,
        easing: easeExpInOut
      }
    });
  }
});

const TransitionProvider = () => {
  return (
    <TransitionState>
      {({ transitionStatus, mount }) => {
        console.log(mount);
        console.log(transitionStatus);
        const isMount = ['entering', 'exiting'].includes(transitionStatus);
        console.log(`isMount: ${isMount}`);
        return (
          <>
            <AnimatedBox
              state={isMount ? 'exitPageAnimation' : 'enterPageAnimation'}
            >
              {props => <StyledBox style={props}>asd</StyledBox>}
            </AnimatedBox>
          </>
        );
      }}
    </TransitionState>
  );
};

export default TransitionProvider;
