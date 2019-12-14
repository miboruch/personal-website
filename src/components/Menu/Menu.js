import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from 'react';
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
  width: calc(100% - 10px);
  height: calc(100vh - 10px);
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
    console.log(props);
    const { scaleWidth, scaleHeight } = props[1].scale;
    console.log(`IN: scaleWidth: ${scaleWidth}, scaleHeight: ${scaleHeight}`);
    await next({
      to: {
        transform: `scale(${scaleWidth}, ${scaleHeight})`
      },
      config: {
        duration: 0
      }
    });
    //----
    // await next({
    //   visibility: 'visible',
    //   transform: 'scale(1,1)',
    //   config: {
    //     duration: 500,
    //     easing: easeExpInOut
    //   }
    // });
    //----
    await next({
      to: {
        visibility: 'visible',
        transform: `scale(1, ${scaleHeight})`
      },
      config: {
        duration: 1000,
        easing: easeExpInOut
      }
    });
    await next({
      to: {
        transform: `scale(1, 1)`
      },
      config: {
        duration: 1500,
        easing: easeExpInOut
      }
    });
    await next({
      border: '5px solid #fff',
      config: {
        duration: 300
      }
    });
  },
  out: async (next, ...props) => {
    const { scaleWidth, scaleHeight } = props[1].scale;

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
    await next({
      visibility: 'hidden'
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

  useLayoutEffect(() => {
    const setSize = () => {
      setScreenSize({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight
      });
    };

    setSize();

    window.addEventListener('resize', setSize);

    return () => window.removeEventListener('resize', setSize);
  }, []);

  return screenSize;
};

const Menu = ({ isOpen, boxSize }) => {
  const items = ['Home', 'About', 'Projects'];

  const menuElement = useRef();
  const { screenWidth, screenHeight } = useScreenSize();

  const { width, height } = boxSize;
  console.log(width, height);

  const scaleWidth = width / screenWidth;
  const scaleHeight = height / screenHeight;
  console.log(scaleWidth, scaleHeight);

  return (
    <>
      {screenWidth === undefined ? (
        <h1>is not working</h1>
      ) : (
        <AnimatedMenu
          state={isOpen ? 'in' : 'out'}
          scale={{ scaleWidth, scaleHeight }}
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
                      <Paragraph title='true'>{trailItem}</Paragraph>
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
