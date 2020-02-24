import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const StyledHamburger = styled.button`
  cursor: pointer;
  width: 70px;
  height: 60px;
  background: transparent;
  border: none;
  z-index: 901;
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  margin-left: 1rem;
  
  :focus {
    outline: none;
  }

  &::after {
    content: '${({ isOpen }) => (isOpen ? 'close' : 'open')}';
    font-size: 13px;
    color: ${({ headerTheme }) => (headerTheme === 'light' ? '#000' : '#fff')};
    position: absolute;
    font-family: ${({ theme }) => theme.font.family.futura};
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const InnerHamburger = styled.div`
  position: relative;

  ${({ isOpen }) =>
    isOpen &&
    css`
      background: transparent;
    `}

  &::before,
  &::after {
    content: '';
    width: 32px; /* 44 */
    height: 1px;
    background: ${({ headerTheme }) =>
      headerTheme === 'light' ? '#000' : '#fff'};
    position: absolute;
    left: 0;
    transition: all 0.5s ease;
  }

  ::before {
    top: ${({ isOpen }) => (isOpen ? '0' : '-2px')}; /* -3 */
    transform: rotate(${({ isOpen }) => (isOpen ? '40deg' : '0deg')});
  }
  ::after {
    top: ${({ isOpen }) => (isOpen ? '0' : '2px')}; /* 3 */
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

const Hamburger = ({ isOpen, headerTheme }) => {
  return (
    <StyledHamburger isOpen={isOpen} headerTheme={headerTheme}>
      <InnerHamburger isOpen={isOpen} headerTheme={headerTheme} />
    </StyledHamburger>
  );
};

Hamburger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  headerTheme: PropTypes.oneOf(['dark', 'light'])
};

export default Hamburger;
