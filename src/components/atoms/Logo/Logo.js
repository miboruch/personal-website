import React from 'react';
import styled, { css } from 'styled-components';
import Link from '../Link/Link';
import LogoLine from '../../../assets/icons/logo-line.svg';

const StyledLogo = styled(LogoLine)`
  width: 110px;
  height: 50px;
  margin-left: 2rem;
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
    <Link to='/'>
      <StyledLogo headerTheme={headerTheme} isOpen={isOpen} />
    </Link>
  );
};

export default Logo;
