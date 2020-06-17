import React from 'react';
import PropTypes from 'prop-types';
import Hamburger from '../../atoms/Hamburger/Hamburger';
import { StyledBox, StyledParagraph } from './MenuButton.styles';

const MenuButton = ({ isOpen, toggleMenu, headerTheme }) => (
  <StyledBox onClick={() => toggleMenu()} headerTheme={headerTheme}>
    <StyledParagraph small='true' headerTheme={headerTheme}>
      web design & code
    </StyledParagraph>
    <Hamburger isOpen={isOpen} headerTheme={headerTheme} />
  </StyledBox>
);

MenuButton.propTypes = {
  headerTheme: PropTypes.oneOf(['dark', 'light'])
};

export default MenuButton;
