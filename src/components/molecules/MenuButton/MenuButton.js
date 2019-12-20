import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Hamburger from '../../atoms/Hamburger/Hamburger';

const StyledBox = styled(animated.div)`
  text-align: right;
  width: 220px;
  height: 62px;
  margin-top: 5px;
  margin-right: 5px;
  background-color: ${({ theme }) => theme.color.menuBox};
  display: flex;
  flex-direction: row;
  z-index: 901;
  cursor: pointer;
  transition: all 1s ease;

  ${({ headerTheme }) =>
    headerTheme === 'light' &&
    css`
      background-color: ${({ theme }) => theme.color.lightThemeBackground};
    `}

  ${({ theme }) => theme.mq.tablet} {
    width: 300px;
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-family: ${({ theme }) => theme.font.family.futura};
  padding-left: 2rem;
  width: 120px;
  margin: auto 0;
  z-index: 901;
  text-transform: uppercase;
  color: #fff;

  ${({ headerTheme }) =>
    headerTheme === 'light' &&
    css`
      color: #000;
    `}

  ${({ theme }) => theme.mq.tablet} {
    width: auto;
  }
`;

const MenuButton = React.forwardRef(
  ({ isOpen, toggleMenu, headerTheme }, ref) => (
    <StyledBox onClick={() => toggleMenu()} ref={ref} headerTheme={headerTheme}>
      <StyledParagraph small='true' headerTheme={headerTheme}>
        web design & code
      </StyledParagraph>
      <Hamburger isOpen={isOpen} headerTheme={headerTheme} />
    </StyledBox>
  )
);

MenuButton.displayName = 'MenuButton';

MenuButton.propTypes = {
  headerTheme: PropTypes.oneOf(['dark, light'])
};

export default MenuButton;