import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Menu from '../../templates/Menu/Menu';
import { useElementSize, useScrollPosition } from '../../../utils/customHooks';
import MenuButton from '../MenuButton/MenuButton';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Logo from '../../atoms/Logo/Logo';
import { createUpperFadeOut } from '../../../utils/animations';
import { animated } from 'react-spring';
import { TransitionState } from 'gatsby-plugin-transition-link';

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
          : 'rgba(0,0,0,0.4)'};
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

const StyledTextWrapper = styled.div`
  position: absolute;
  right: 315px;
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

const StyledParagraph = styled(Paragraph)`
  margin-right: 3rem;
  letter-spacing: 0;
  color: inherit;
`;

const StyledLink = styled.a`
  margin-right: 3rem;
  letter-spacing: 0;
  color: inherit;
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
        <StyledTextWrapper headerTheme={headerTheme} isOpen={isOpen}>
          <StyledParagraph>Krakow, Poland</StyledParagraph>
          <StyledLink href='mailto:miboruch@gmail.com'>
            miboruch@gmail.com
          </StyledLink>
        </StyledTextWrapper>
        <StyledMenuButtonWrapper>
          <MenuButton
            isOpen={isOpen}
            toggleMenu={toggleMenu}
            ref={menuButton}
            headerTheme={headerTheme}
          />
        </StyledMenuButtonWrapper>
      </StyledHeader>
      <Menu
        isOpen={isOpen}
        boxSize={size}
        headerTheme={headerTheme}
      />
    </>
  );
};

Header.propTypes = {
  headerTheme: PropTypes.oneOf(['dark, light'])
};

export default Header;
