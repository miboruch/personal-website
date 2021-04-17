import styled, { css } from 'styled-components';

import PageTransitionProvider from 'providers/PageTransitionProvider';
import { Theme } from 'types';

import {ReactComponent as Logo} from 'assets/icons/logo-line.svg';

const StyledTransitionProvider = styled(PageTransitionProvider)`
  visibility: hidden;
`;

const StyledLogo = styled(Logo)<{ isOpen: boolean; colorTheme: Theme }>`
  width: 110px;
  height: 50px;
  margin: 0 2rem;
  fill: #fff;
  transition: fill 1s ease;
  display: block;

  ${({ colorTheme, isOpen }) =>
    colorTheme === 'dark' &&
    css`
      fill: ${isOpen ? '#fff' : '#000'};
    `}

  ${({ colorTheme, isOpen }) =>
    colorTheme === 'light' &&
    css`
      fill: ${isOpen ? '#000' : '#fff'};
    `}
  
  ${({ theme }) => theme.mq.standard}{
    margin-left: 3rem;
    width: 150px;
  }
`;

export { StyledTransitionProvider, StyledLogo };
