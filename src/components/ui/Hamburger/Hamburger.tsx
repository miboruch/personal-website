import React from 'react';

import { Theme } from 'types';

import { StyledHamburger, InnerHamburger } from './Hamburger.styles';

export interface Props {
  isOpen: boolean;
  colorTheme: Theme;
}

const Hamburger: React.FC<Props> = ({ isOpen, colorTheme }) => (
  <StyledHamburger>
    <InnerHamburger isOpen={isOpen} colorTheme={colorTheme} />
  </StyledHamburger>
);

export default Hamburger;
