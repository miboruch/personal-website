import React, { useEffect, useRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import Paragraph from '../atoms/Paragraph/Paragraph';
import Menu from '../Menu/Menu';
import Hamburger from '../atoms/Hamburger/Hamburger';
import { Keyframes } from 'react-spring/renderprops-universal';
import { easeExpInOut } from 'd3-ease';
import { animated } from 'react-spring';
import MenuButton from '../atoms/MenuButton/MenuButton';

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 66px;
  background: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
`;

const StyledLogo = styled(Paragraph)`
  padding-left: 2rem;
  padding-top: 14px;
  padding-bottom: 14px;
  width: 100px;
  z-index: 1000;
  font-family: Avanti;
`;

const useHookWithRefCallback = () => {
  const ref = useRef(null);
  const [size, setSize] = useState();
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

// const useBoxSize = ref => {
//   const [boxSize, setBoxSize] = useState({ width: 215, height: 62 });
//
//   useEffect(() => {
//     const element = ref.current;
//     const setSize = () => {
//       setBoxSize({
//         width: element.offsetWidth,
//         height: element.offsetHeight
//       });
//     };
//     window.addEventListener('resize', setSize);
//
//     return () => window.removeEventListener('resize', setSize);
//   }, [ref.current]);
//
//   return boxSize;
// };

/* --------- TESTING --------- */

const AnimatedBorder = Keyframes.Spring({
  in: async next => {
    await next({
      borderTop: '5px solid #fff',
      borderRight: '5px solid #fff',
      delay: 1520,
      config: {
        duration: 100,
        easing: easeExpInOut
      }
    });
  },
  out: async next => {
    await next({
      borderTop: '0px solid #fff',
      borderRight: '0px solid #fff',
      delay: 0,
      config: {
        duration: 300
      }
    });
  }
});

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const menuButton = useRef(null);
  const [size, setSize] = useState({});
  // const boxSize = useBoxSize(menuButton);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  console.log(isOpen);
  // const [menuButton] = useHookWithRefCallback();
  // useEffect(() => {
  //   setSize({
  //     width: menuButton.current.clientWidth,
  //     height: menuButton.current.clientHeight
  //   });
  // }, []);
  return (
    <>
      <StyledHeader>
        <StyledLogo medium>MICHAL BORUCH</StyledLogo>
        <AnimatedBorder state={isOpen ? 'in' : 'out'}>
          {props => (
            <MenuButton
              isOpen={isOpen}
              style={props}
              toggleMenu={toggleMenu}
              ref={menuButton}
            />
          )}
        </AnimatedBorder>
      </StyledHeader>
      <Menu isOpen={isOpen} boxSize={{ width: 215, height: 62 }} />
    </>
  );
};

export default Header;
