import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import Menu from '../../templates/Menu/Menu';
import { useElementSize, useScrollPosition } from '../../../utils/customHooks';
import MenuButton from '../MenuButton/MenuButton';
import Logo from '../../atoms/Logo/Logo';

const StyledHeader = styled(animated.header)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin-bottom: 10px;
  height: 72px;
  background: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  transition: all 1s ease;
  z-index: 901;

  ${({ isOnTop }) =>
    !isOnTop &&
    css`
      transition: all 1s 1s ease;
      background: ${({ headerTheme }) =>
        headerTheme === 'dark'
          ? 'rgba(241, 241, 241, 0.9)'
          : 'rgba(0,0,0,0.7)'};
    `}

  ${({ isOpen }) =>
    isOpen &&
    css`
      background: transparent;
      transition: all 1s ease;
    `}
`;

const StyledMenuButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledLink = styled.a`
  position: absolute;
  right: 345px;
  display: none;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  color: #fff;
  transition: color 1s ease;

  ${({ headerTheme }) =>
    headerTheme === 'dark' &&
    css`
      color: ${({ isOpen }) => (isOpen ? '#fff' : '#000')};
    `}
  
  ${({ headerTheme }) =>
    headerTheme === 'light' &&
    css`
      color: ${({ isOpen }) => (isOpen ? '#000' : '#fff')};
    `}

  ${({ theme }) => theme.mq.standard} {
    display: flex;
  }
`;

const Header = ({ headerTheme }) => {
  const menuButton = useRef();
  const [isOpen, setOpen] = useState(false);
  const size = useElementSize(menuButton);
  const pageY = useScrollPosition();

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <StyledHeader isOnTop={pageY} isOpen={isOpen} headerTheme={headerTheme}>
        <Logo headerTheme={headerTheme} isOpen={isOpen} />
        <StyledLink
          href='mailto:miboruch@gmail.com'
          headerTheme={headerTheme}
          isOpen={isOpen}
        >
          miboruch@gmail.com
        </StyledLink>
        <StyledMenuButtonWrapper>
          <MenuButton
            isOpen={isOpen}
            toggleMenu={toggleMenu}
            ref={menuButton}
            headerTheme={headerTheme}
          />
        </StyledMenuButtonWrapper>
      </StyledHeader>
      <Menu isOpen={isOpen} boxSize={size} headerTheme={headerTheme} />
    </>
  );
};

Header.propTypes = {
  headerTheme: PropTypes.oneOf(['dark, light'])
};

export default Header;
