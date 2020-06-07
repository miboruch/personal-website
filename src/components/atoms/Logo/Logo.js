import React from 'react';
import styled, { css } from 'styled-components';
import LogoLine from '../../../assets/icons/logo-line.svg';
import PageTransitionProvider from '../../../providers/PageTransitionProvider';

const StyledTransitionProvider = styled(PageTransitionProvider)`
  visibility: hidden;
`;

const StyledLogo = styled(LogoLine)`
  width: 110px;
  height: 50px;
  margin: 0 2rem;
  fill: #fff;
  transition: fill 1s ease;
  display: block;

  ${({ headerTheme }) =>
    headerTheme === 'dark' &&
    css`
      fill: ${({ isOpen }) => (isOpen ? '#fff' : '#000')};
    `}

  ${({ headerTheme }) =>
    headerTheme === 'light' &&
    css`
      fill: ${({ isOpen }) => (isOpen ? '#000' : '#fff')};
    `}
  
  ${({ theme }) => theme.mq.standard}{
    margin-left: 3rem;
    width: 150px;
  }
`;

const Logo = ({ headerTheme, isOpen }) => {
  return (
    <StyledTransitionProvider to='/' dark={true}>
      <StyledLogo headerTheme={headerTheme} isOpen={isOpen} />
    </StyledTransitionProvider>
  );
};

export default Logo;
