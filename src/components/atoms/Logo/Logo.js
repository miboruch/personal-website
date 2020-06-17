import React from 'react';
import { StyledTransitionProvider, StyledLogo } from './Logo.styles';

const Logo = ({ headerTheme, isOpen }) => (
  <StyledTransitionProvider to='/' dark={true}>
    <StyledLogo headerTheme={headerTheme} isOpen={isOpen} />
  </StyledTransitionProvider>
);

export default Logo;
