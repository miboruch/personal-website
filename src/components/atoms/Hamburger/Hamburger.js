import React from 'react';
import styled from 'styled-components';

const StyledHamburger = styled.button`
  cursor: pointer;
  width: 60px;
  height: 60px;
  background: transparent;
  border: none;
  z-index: 901;
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  margin: 0 0.5rem;

  :focus {
    outline: none;
  }
`;

const InnerHamburger = styled.div`
  position: relative;

  ::before,
  ::after {
    content: '';
    width: 44px;
    height: 1px;
    background: ${({ light }) => (light ? '#000' : '#fff')};
    position: absolute;
    left: 0;
    transition: all 0.5s ease;
  }

  ::before {
    top: ${({ isOpen }) => (isOpen ? '0' : '-3px')};
    transform: rotate(${({ isOpen }) => (isOpen ? '40deg' : '0deg')});
  }
  ::after {
    top: ${({ isOpen }) => (isOpen ? '0' : '3px')};
    transform: rotate(${({ isOpen }) => (isOpen ? '-40deg' : '0deg')});
  }

  ${StyledHamburger}:hover & {
    &::before {
      top: 0;
    }
    &::after {
      top: 0;
    }
  }
`;

const Hamburger = ({ isOpen }) => {
  return (
    <StyledHamburger>
      <InnerHamburger isOpen={isOpen} />
    </StyledHamburger>
  );
};

export default Hamburger;
