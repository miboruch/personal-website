import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import Paragraph from '../Paragraph/Paragraph';
import Hamburger from '../Hamburger/Hamburger';

const StyledBox = styled(animated.div)`
  text-align: right;
  width: 220px;
  height: 62px;
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: ${({ theme }) => theme.color.menuBox};
  display: flex;
  flex-direction: row;
  z-index: 901;
  cursor: pointer;

  ${({ theme }) => theme.mq.tablet} {
    width: 300px;
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-family: ${({ theme }) => theme.font.family.futura};
  padding-left: 3rem;
  width: 105px;
  margin: auto 0;
  z-index: 901;

  ${({ theme }) => theme.mq.tablet} {
    width: auto;
  }
`;

const MenuButton = React.forwardRef(({ isOpen, toggleMenu }, ref) => (
  <StyledBox onClick={() => toggleMenu()} ref={ref}>
    <StyledParagraph small='true'>web design & code</StyledParagraph>
    <Hamburger isOpen={isOpen} />
  </StyledBox>
));

MenuButton.displayName = 'MenuButton';

export default MenuButton;
