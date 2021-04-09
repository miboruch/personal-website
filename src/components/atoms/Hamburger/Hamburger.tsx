import React from 'react';

import { Theme } from 'types';

import { StyledHamburger, InnerHamburger } from 'components/atoms/Hamburger/Hamburger.styles';

export interface Props {
  isOpen: boolean;
  theme: Theme;
}

const Hamburger: React.FC<Props> = ({ isOpen, theme }) => (
  <StyledHamburger>
    <InnerHamburger isOpen={isOpen} theme={theme} />
  </StyledHamburger>
);

export default Hamburger;
