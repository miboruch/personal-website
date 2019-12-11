import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Paragraph from '../atoms/Paragraph/Paragraph';
import { easeExpInOut } from 'd3-ease';
import { Keyframes } from 'react-spring/renderprops-universal';
import { useSpring, animated } from 'react-spring';

const StyledMenuBox = styled(animated.div)`
  position: fixed;
  top: 5px;
  right: 5px;
  width: calc(100% - 10px);
  height: calc(100vh - 10px);
  display: flex;
  background-color: ${({ theme }) => theme.color.menuBox};
  z-index: 899;
  opacity: 1;
  box-sizing: content-box !important;
  transform-origin: top right;
  will-change: transform;
`;

const AnimatedParagraph = styled(animated(Paragraph))``;

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight
  });

  useEffect(() => {
    const setSize = () =>
      setScreenSize({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight
      });
    window.addEventListener('resize', setSize);

    return () => window.removeEventListener('resize', setSize);
  }, []);

  return screenSize;
};

let scaleData = {};

const AnimatedMenu = Keyframes.Spring({
  in: async next => {
    await next({
      transform: 'scale(1,1)',
      config: {
        duration: 3000,
        easing: easeExpInOut
      }
    });
    await next({
      border: '5px solid #fff',
      config: {
        duration: 100
      }
    });
  },
  out: async next => {
    await next({
      border: '0px solid #fff',
      config: {
        duration: 300
      }
    });
    await next({
      transform: `scale(${scaleData.scaleWidth}, ${scaleData.scaleHeight})`,
      config: {
        duration: 3000,
        easing: easeExpInOut
      }
    });
  }
});

const Menu = ({ isOpen, boxSize }) => {
  const { width, height } = boxSize;
  const { screenWidth, screenHeight } = useScreenSize();

  scaleData.scaleWidth = width / screenWidth;
  scaleData.scaleHeight = height / screenHeight;

  const setVisible = useSpring({
    to: { opacity: 1 },
    config: {
      duration: 1000
    },
    easing: 'cubic-bezier(.84, 0, .08, .99)'
  });

  return (
    <AnimatedMenu state={isOpen ? 'in' : 'out'}>
      {props => (
        <StyledMenuBox style={props}>
          <AnimatedParagraph props={setVisible}>hello boy</AnimatedParagraph>
        </StyledMenuBox>
      )}
    </AnimatedMenu>
  );
};

export default Menu;
