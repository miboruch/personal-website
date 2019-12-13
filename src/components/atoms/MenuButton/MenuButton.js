import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import Paragraph from '../Paragraph/Paragraph';
import Hamburger from '../Hamburger/Hamburger';
import Menu from '../../Menu/Menu';

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

  ${({ theme }) => theme.mq.tablet} {
    width: 340px;
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-family: ${({ theme }) => theme.font.family.futura};
  padding-left: 3rem;
  width: 105px;
  margin: auto 0;
  z-index: 901;

  ${({ theme }) => theme.mq.tablet} {
    padding-left: 5rem;
    width: auto;
  }
`;

const MenuButton = React.forwardRef(({ isOpen, style, toggleMenu }, ref) => (
  <StyledBox style={style} onClick={() => toggleMenu()} ref={ref}>
    <StyledParagraph small>web design & code</StyledParagraph>
    <Hamburger isOpen={isOpen} />
  </StyledBox>
));

MenuButton.displayName = 'MenuButton';

export default MenuButton;
