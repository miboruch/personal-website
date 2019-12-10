import React, { useState } from 'react';
import styled from 'styled-components';
import Paragraph from '../atoms/Paragraph/Paragraph';
import Menu from '../Menu/Menu';
import Hamburger from '../atoms/Hamburger/Hamburger';

const StyledHeader = styled.header`
  width: 100%;
  height: 66px;
  background: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
`;

const StyledParagraph = styled(Paragraph)`
  padding: 2rem;
  width: 120px;
`;

const Header = () => {
  const [isMenuOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  return (
    <>
      <StyledHeader>
        <StyledParagraph medium>MICHAL BORUCH</StyledParagraph>
        <Hamburger onClick={toggleMenu} />
      </StyledHeader>
      <Menu isMenuOpen={isMenuOpen} />
    </>
  );
};

export default Header;
