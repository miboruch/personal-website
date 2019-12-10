import React from 'react';
import styled from 'styled-components';

const StyledHamburger = styled.button`
  cursor: pointer;
  width: 46px;
  height: 46px;
  background: transparent;
  border: none;
  z-index: 900;
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
  width: 44px;
  height: 1px;
  position: relative;
  background: ${({ light }) => (light ? '#000' : '#fff')};
  transition: background 0.4s ease;

  ::before {
    content: '';
    width: 44px;
    height: 1px;
    background: ${({ light }) => (light ? '#000' : '#fff')};
    position: absolute;
    top: -6px;
    left: 0;
    transition: all 0.5s ease;
  }

  :hover::before {
    top: 0;
    transition: all 0.5s ease;
  }
`;

const Hamburger = () => {
  return (
    <StyledHamburger>
      <InnerHamburger />
    </StyledHamburger>
  );
};

export default Hamburger;
