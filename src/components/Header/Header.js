import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Paragraph from '../atoms/Paragraph/Paragraph';
import Menu from '../Menu/Menu';
import { Keyframes } from 'react-spring/renderprops-universal';
import { easeExpInOut } from 'd3-ease';
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

const AnimatedBorder = Keyframes.Spring({
  in: async next => {
    await next({
      borderTop: '5px solid #fff',
      borderRight: '5px solid #fff',
      delay: 1600,
      config: {
        duration: 300,
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

const useElementSize = ref => {
  const [size, setSize] = useState({ width: 220, height: 62 });

  useLayoutEffect(() => {
    const updateSize = () => {
      return setSize({
        width: ref.current.getBoundingClientRect().width,
        height: ref.current.getBoundingClientRect().height
      });
    };

    setSize();
    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const menuButton = useRef();
  const size = useElementSize(menuButton);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <StyledHeader>
        <StyledLogo medium='true'>MICHAL BORUCH</StyledLogo>
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
      <Menu
        isOpen={isOpen}
        boxSize={
          size !== undefined
            ? { width: size.width, height: size.height }
            : { width: 220, height: 62 }
        }
      />
    </>
  );
};

export default Header;
