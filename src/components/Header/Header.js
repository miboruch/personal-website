import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Paragraph from '../atoms/Paragraph/Paragraph';
import Menu from '../Menu/Menu';
import Hamburger from '../atoms/Hamburger/Hamburger';
import { Keyframes } from 'react-spring/renderprops-universal';
import { easeExpInOut } from 'd3-ease';
import { animated } from 'react-spring';

const StyledHeader = styled.header`
  position: relative;
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

const StyledBox = styled(animated.div)`
  text-align: right;
  width: 215px;
  height: 62px;
  position: fixed;
  top: 5px;
  right: 5px;
  background-color: ${({ theme }) => theme.color.menuBox};
  display: flex;
  flex-direction: row;
  z-index: 901;
  cursor: pointer;
`;

const StyledParagraph = styled(Paragraph)`
  font-family: ${({ theme }) => theme.font.family.futura};
  width: 105px;
  padding: 0 0.5rem;
  margin: auto 0;
  z-index: 901;
`;

const useBoxSize = ref => {
  const [boxSize, setBoxSize] = useState({ width: 215, height: 62 });

  useEffect(() => {
    const setSize = () => {
      setBoxSize({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight
      });
    };
    window.addEventListener('resize', setSize);

    return () => window.removeEventListener('resize', setSize);
  }, []);

  return boxSize;
};

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

  const boxSize = useBoxSize(menuButton);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <StyledHeader>
        <StyledLogo medium>MICHAL BORUCH</StyledLogo>
        <AnimatedBorder state={isOpen ? 'in' : 'out'}>
          {props => (
            <StyledBox
              onClick={() => toggleMenu()}
              ref={menuButton}
              isOpen={isOpen}
              style={props}
            >
              <StyledParagraph small>web design & code</StyledParagraph>
              <Hamburger isOpen={isOpen} />
            </StyledBox>
          )}
        </AnimatedBorder>
      </StyledHeader>
      <Menu isOpen={isOpen} boxSize={boxSize} />
    </>
  );
};

export default Header;
