import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
  background-color: ${({ lightTheme, theme }) =>
    lightTheme ? '#fff' : theme.color.menuBox};
  display: flex;
  flex-direction: row;
  z-index: 901;
  cursor: pointer;
  transition: all 1s ease;

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
  color: ${({ lightTheme }) => (lightTheme ? '#000' : '#fff')};
  ${({ theme }) => theme.mq.tablet} {
    width: auto;
  }
`;

const MenuButton = React.forwardRef(
  ({ isOpen, toggleMenu, lightTheme }, ref) => (
    <StyledBox onClick={() => toggleMenu()} ref={ref} lightTheme={lightTheme}>
      <StyledParagraph small='true' lightTheme={lightTheme}>
        web design & code
      </StyledParagraph>
      <Hamburger isOpen={isOpen} lightTheme={lightTheme} />
    </StyledBox>
  )
);

MenuButton.displayName = 'MenuButton';

MenuButton.propTypes = {
  lightTheme: PropTypes.bool
};

export default MenuButton;
