import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Paragraph from '../atoms/Paragraph/Paragraph';
import { easeExpInOut } from 'd3-ease';
import { Keyframes } from 'react-spring/renderprops-universal';
import { useSpring, animated } from 'react-spring';
import { config } from 'react-spring';

const StyledMenuBox = styled(animated.div)`
  position: fixed;
  top: 5px;
  right: 5px;
  width: calc(100% - 5px);
  height: calc(100vh - 5px);
  //width: 215px;
  //height: 62px;
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

const AnimatedMenu = Keyframes.Spring({
  in: async (next, ...props) => {
    const { boxWidth, boxHeight } = props[1].value;
    const { width, height } = props[1].value;
    console.log('PASSED BOX: width: ' + boxWidth + ' height: ' + boxHeight);
    await next({
      opacity: 1,
      transform: 'scale(1,1)',
      // width: `${width - 10}px`,
      // height: `${height - 10}px`,
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
    const { width, height } = props[1].value;
    const { boxWidth, boxHeight } = props[1].value;

    console.log('PASSED SCALE: ' + scaleWidth + ' ' + scaleHeight);
    console.log('PASSED SIZE: ' + width + ' ' + height);
    await next({
      border: '0px solid #fff',
      config: {
        duration: 300
      }
    });
    await next({
      opacity: 0,
      transform: `scale(${scaleWidth}, ${scaleHeight})`,
      // width: `${boxWidth}px`,
      // height: `${boxHeight}px`,
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
    screenWidth: undefined,
    screenHeight: undefined
  });

  useEffect(() => {
    const setSize = () => {
      console.log('EVENT LISTENER RESIZE');
      setScreenSize({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight
      });
    };

    setSize();
    window.addEventListener('resize', setSize);

    return () => {
      window.removeEventListener('resize', setSize);
    };
  }, []);

  return screenSize;
};

const useHookWithRefCallback = () => {
  const ref = useRef(null);
  const setRef = useCallback(node => {
    if (ref.current) {
      // Make sure to cleanup any events/references added to the last instance
    }

    if (node) {
      // Check if a node is actually passed. Otherwise node would be null.
      // You can now do what you need to, addEventListeners, measure, etc.
    }

    // Save a reference to the node
    ref.current = node;
  }, []);

  return [setRef];
};

const Menu = ({ isOpen, boxSize }) => {
  const { screenWidth, screenHeight } = useScreenSize();
  console.log(screenWidth, screenHeight);

  const items = ['Home', 'About', 'Projects'];
  // const menuElement = useRef(null);
  const [menuElement] = useHookWithRefCallback();

  const { width, height } = boxSize;
  console.log('BOX SIZE: width: ' + width + ' height: ' + height);
  const scaleWidth = width / screenWidth;
  const scaleHeight = height / screenHeight;

  useEffect(() => {
    const scaleBox = () => {
      console.log('BOX SCALED');
      console.log('width: ' + scaleWidth);
      console.log('height: ' + scaleHeight);
    };
    // menuElement.current.style.transform = `scale(${scaleWidth}, ${scaleHeight})`;
    // window.addEventListener('resize', scaleBox);
    //
    // return () => window.removeEventListener('resize', scaleBox);
  }, [scaleWidth, scaleHeight]);

  return (
    <>
      {screenWidth === undefined ? (
        <h1>is not working</h1>
      ) : (
        <AnimatedMenu
          state={isOpen ? 'in' : 'out'}
          value={{
            scaleWidth,
            scaleHeight,
            boxWidth: width,
            boxHeight: height
          }}
        >
          {props => (
            <StyledMenuBox
              style={props}
              ref={menuElement}
              boxWidth={width}
              boxHeight={height}
            >
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
      )}
    </>
  );
};

export default Menu;
