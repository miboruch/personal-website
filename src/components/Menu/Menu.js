import React from 'react';
import styled from 'styled-components';
import Paragraph from '../atoms/Paragraph/Paragraph';
import { easeExpOut } from 'd3-ease';
import { useSpring } from 'react-spring';
import { animated } from 'react-spring';

const StyledMenuBox = styled(animated.div)`
  position: fixed;
  top: 5px;
  right: 5px;
  width: ${({ isMenuOpen }) => (isMenuOpen ? 'calc(100% - 10px)' : '215px')};
  height: ${({ isMenuOpen }) => (isMenuOpen ? 'calc(100% - 10px)' : '62px')};
  background-color: ${({ theme }) => theme.color.menuBox};
  display: flex;
  align-items: center;
  z-index: 899;
  transition: 1s all ease;
`;

const StyledParagraph = styled(Paragraph)`
  text-transform: uppercase;
  justify-content: flex-start;
  width: 50%;
  padding: 5px;
  text-align: right;
`;

const AnimatedParagraph = styled(animated(Paragraph))``;

const Menu = ({ isMenuOpen }) => {
  const setVisible = useSpring({
    to: { opacity: isMenuOpen ? 1 : 0 },
    config: {
      duration: 1000
    },
    easing: 'cubic-bezier(.84, 0, .08, .99)'
  });

  return (
    <>
      <StyledMenuBox isMenuOpen={isMenuOpen}>
        <StyledParagraph small>web design & code</StyledParagraph>
        <AnimatedParagraph style={setVisible}>Hello friend</AnimatedParagraph>
      </StyledMenuBox>
    </>
  );
};

export default Menu;
