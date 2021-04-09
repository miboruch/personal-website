import React from 'react';

import { Hamburger } from 'components';
import { Theme } from 'types';

import { StyledBox, StyledParagraph } from './MenuButton.styles';

interface Props {
  isOpen: boolean;
  toggleMenu: () => void;
  colorTheme: Theme;
}

const MenuButton: React.FC<Props> = ({ isOpen, toggleMenu, colorTheme }) => (
  <StyledBox onClick={toggleMenu} colorTheme={colorTheme}>
    <StyledParagraph size={'small'} colorTheme={colorTheme}>
      web design & code
    </StyledParagraph>
    <Hamburger isOpen={isOpen} colorTheme={colorTheme} />
  </StyledBox>
);

export default MenuButton;
