import React, { useState } from 'react';
import styled from 'styled-components';
import Paragraph from '../atoms/Paragraph/Paragraph';
import Menu from '../Menu/Menu';
import { useElementSize } from '../../utils/customHooks';
import MenuButton from '../atoms/MenuButton/MenuButton';

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
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
  font-family: Avanti;
`;

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [size, menuButton] = useElementSize();

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <StyledHeader>
        <StyledLogo medium='true'>MICHAL BORUCH</StyledLogo>
        <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} ref={menuButton} />
      </StyledHeader>
      <Menu isOpen={isOpen} boxSize={size} />
    </>
  );
};

export default Header;
