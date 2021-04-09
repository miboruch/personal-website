import styled, { css } from 'styled-components';
import { Props } from './Hamburger';

const StyledHamburger = styled.button`
  cursor: pointer;
  width: 70px;
  height: 60px;
  background: transparent;
  border: none;
  z-index: 901;
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);

  :focus {
    outline: none;
  }
`;

const InnerHamburger = styled.div<Props>`
  position: relative;

  ${({ isOpen }) =>
    isOpen &&
    css`
      background: transparent;
    `}

  &::before,
  &::after {
    content: '';
    height: 1px;
    background: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
    position: absolute;
    left: 0;
    transition: all 0.5s ease;
  }

  ::before {
    width: ${({ isOpen }) => (isOpen ? '32px' : '26px')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-2px')};
    transform: rotate(${({ isOpen }) => (isOpen ? '40deg' : '0deg')});
  }
  ::after {
    width: 32px;
    top: ${({ isOpen }) => (isOpen ? '0' : '2px')};
    transform: rotate(${({ isOpen }) => (isOpen ? '-40deg' : '0deg')});
  }

  ${StyledHamburger}:hover & {
    background: transparent;
    &::before {
      top: 0;
    }
    &::after {
      top: 0;
    }
  }
`;

export { StyledHamburger, InnerHamburger };
