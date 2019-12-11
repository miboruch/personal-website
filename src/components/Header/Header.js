import React, { useState } from 'react';
import styled from 'styled-components';
import Paragraph from '../atoms/Paragraph/Paragraph';
import Menu from '../Menu/Menu';
import Hamburger from '../atoms/Hamburger/Hamburger';

const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  height: 66px;
  background: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
`;

const StyledLogo = styled(Paragraph)`
  padding-left: 2rem;
  padding-top: 14px;
  padding-bottom: 14px;
  width: 100px;
  z-index: 1000;
`;

const StyledBox = styled.div`
  text-align: right;
  width: 215px;
  height: 62px;
  position: fixed;
  top: 5px;
  right: 5px;
  background-color: ${({ theme }) => theme.color.menuBox};
  border: none;
  display: flex;
  flex-direction: row;
  z-index: 1000;
`;

const StyledParagraph = styled(Paragraph)`
  font-family: ${({ theme }) => theme.font.family.futura};
  width: 105px;
  padding: 0 0.5rem;
  margin: auto 0;
`;

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <StyledHeader>
        <StyledLogo medium>MICHAL BORUCH</StyledLogo>
        <StyledBox onClick={() => toggleMenu()}>
          <StyledParagraph small>web design & code</StyledParagraph>
          <Hamburger isOpen={isOpen} />
        </StyledBox>
      </StyledHeader>
      <Menu isOpen={isOpen} />
    </>
  );
};

export default Header;
