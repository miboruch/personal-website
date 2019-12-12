import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Paragraph from '../atoms/Paragraph/Paragraph';
import { easeExpInOut } from 'd3-ease';
import { Keyframes } from 'react-spring/renderprops-universal';
import { useSpring, animated } from 'react-spring';

const StyledMenuBox = styled(animated.div)`
  position: fixed;
  top: 5px;
  right: 5px;
  width: calc(100% - 5px);
  height: calc(100vh - 5px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.menuBox};
  z-index: 900;
  opacity: 1;
  transform-origin: top right;
  will-change: transform;
`;

const ParagraphBox = styled(animated.div)`
  width: 100%;
  height: 33vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

let scaleData = {};

const AnimatedMenu = Keyframes.Spring({
  in: async next => {
    await next({
      transform: 'scale(1,1)',
      config: {
        duration: 1500,
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
  out: async (next, ...props) => {
    const { scaleWidth, scaleHeight } = props[1].value;
    console.log('PASSED SCALE: ' + scaleWidth + ' ' + scaleHeight);
    await next({
      border: '0px solid #fff',
      config: {
        duration: 300
      }
    });
    await next({
      transform: `scale(${scaleWidth}, ${scaleHeight})`,
      config: {
        duration: 1500,
        easing: easeExpInOut
      }
    });
  }
});

const MenuItems = Keyframes.Trail({
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
      transform: 'translateX(-40px)'
    });
  }
});

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    screenWidth: 1920,
    screenHeight: 1440
  });

  useEffect(() => {
    const setSize = () =>
      setScreenSize({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight
      });

    window.addEventListener('load', setSize);
    window.addEventListener('resize', setSize);

    return () => {
      window.removeEventListener('load', setSize);
      window.removeEventListener('resize', setSize);
    };
  }, []);

  return screenSize;
};

const Menu = ({ isOpen, boxSize }) => {
  const items = ['Home', 'About', 'Project'];
  const menuElement = useRef(null);
  const { screenWidth, screenHeight } = useScreenSize();
  const { width, height } = boxSize;

  const scaleWidth = width / screenWidth;
  const scaleHeight = height / screenHeight;

  useEffect(() => {
    const scaleBox = () => {
      menuElement.current.style.transform = `scale(${scaleWidth}, ${scaleHeight})`;
    };
    window.addEventListener('resize', scaleBox);
  }, []);
  console.log(`Screen sizes: ${screenWidth} ${screenHeight}`);

  console.log(`Scale sizes: ${scaleWidth} ${scaleHeight}`);

  useEffect(() => {
    scaleData.scaleWidth = scaleWidth;
    scaleData.scaleHeight = scaleHeight;
  }, [scaleWidth, scaleHeight]);

  return (
    <AnimatedMenu
      state={isOpen ? 'in' : 'out'}
      value={{ scaleWidth, scaleHeight }}
    >
      {props => (
        <StyledMenuBox style={props} ref={menuElement}>
          <MenuItems
            state={isOpen ? 'in' : 'out'}
            reverse={!isOpen}
            items={items}
          >
            {trailItem => trailProps => {
              return (
                <ParagraphBox style={trailProps}>
                  <Paragraph title>{trailItem}</Paragraph>
                </ParagraphBox>
              );
            }}
          </MenuItems>
        </StyledMenuBox>
      )}
    </AnimatedMenu>
  );
};

export default Menu;
