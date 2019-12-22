import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Menu from '../Menu/Menu';
import { useElementSize, useScrollPosition } from '../../utils/customHooks';
import MenuButton from '../molecules/MenuButton/MenuButton';
import Paragraph from '../atoms/Paragraph/Paragraph';
import Logo from '../../assets/icons/logo.svg';
import LogoLine from '../../assets/icons/logo-line.svg';

const StyledHeader = styled.header`
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
      background: rgba(255, 255, 255, 0.9);
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

const StyledLogo = styled(Logo)`
  width: 80px;
  height: 50px;
  margin: 2rem;
  fill: #fff;
  transition: fill 1s ease;
  display: block;

  ${({ headerTheme }) =>
    headerTheme === 'dark' &&
    css`
      fill: ${({ isOpen }) => (isOpen ? '#fff' : '#000')};
    `}

  ${({ headerTheme }) =>
    headerTheme === 'light' &&
    css`
      fill: ${({ isOpen }) => (isOpen ? '#000' : '#fff')};
    `}
  
  ${({ theme }) => theme.mq.standard}{
    margin: 3rem;
  }
`;

const StyledTextWrapper = styled.div`
  position: absolute;
  right: 315px;
  display: none;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  ${({ theme }) => theme.mq.standard} {
    display: flex;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin-right: 3rem;
  letter-spacing: 0;
  color: ${({ headerTheme }) => (headerTheme === 'dark' ? '#000' : '#fff')};
`;

const StyledLink = styled.a`
  margin-right: 3rem;
  letter-spacing: 0;
  color: ${({ headerTheme }) => (headerTheme === 'dark' ? '#000' : '#fff')};
`;

const Header = ({ headerTheme }) => {
  const [isOpen, setOpen] = useState(false);
  const [size, menuButton] = useElementSize();
  const pageY = useScrollPosition();

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <StyledHeader isOnTop={pageY} isOpen={isOpen} headerTheme={headerTheme}>
        <StyledLogo headerTheme={headerTheme} isOpen={isOpen} />
        <StyledTextWrapper>
          <StyledParagraph headerTheme={headerTheme}>
            Krakow, Poland
          </StyledParagraph>
          <StyledLink
            href='mailto:miboruch@gmail.com'
            headerTheme={headerTheme}
          >
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
      <Menu isOpen={isOpen} boxSize={size} headerTheme={headerTheme} />
    </>
  );
};

Header.propTypes = {
  headerTheme: PropTypes.oneOf(['dark, light'])
};

export default Header;
