import React from 'react';
import { StyledTransitionProvider, StyledLogo } from 'components/navigation/Header/components/Logo/Logo.styles';
import { Theme } from 'types';

interface Props {
  colorTheme: Theme;
  isOpen: boolean;
}

const Logo: React.FC<Props> = ({ colorTheme, isOpen }) => (
  <StyledTransitionProvider to='/' dark={true}>
    <StyledLogo headerTheme={colorTheme} isOpen={isOpen} />
  </StyledTransitionProvider>
);

export default Logo;
