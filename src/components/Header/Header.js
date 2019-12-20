import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Menu from '../Menu/Menu';
import { useElementSize } from '../../utils/customHooks';
import MenuButton from '../molecules/MenuButton/MenuButton';
import { graphql, useStaticQuery } from 'gatsby';
import Paragraph from '../atoms/Paragraph/Paragraph';
import Logo from '../../assets/icons/logo.svg';

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
  justify-content: space-between;
  overflow: hidden;
  transition: all 1s ease;
`;

const StyledMenuButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledParagraph = styled(Paragraph)`
  display: none;
  margin-right: 3rem;
  letter-spacing: 0;
  color: ${({ headerTheme }) => (headerTheme === 'dark' ? '#000' : '#fff')};

  ${({ theme }) => theme.mq.standard} {
    display: block;
  }
`;

const StyledLogo = styled(Logo)`
  width: 100px;
  height: 50px;
  margin-left: 2rem;
  z-index: 1000;
  fill: #fff;
  transition: fill 1s ease;

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
`;

const StyledLink = styled.a`
  color: #fff;
  display: none;
  margin-right: 3rem;
  letter-spacing: 0;
  color: ${({ headerTheme }) => (headerTheme === 'dark' ? '#000' : '#fff')};

  ${({ theme }) => theme.mq.standard} {
    display: block;
  }
`;

const Header = ({ headerTheme }) => {
  const [isOpen, setOpen] = useState(false);
  const [size, menuButton] = useElementSize();

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <StyledHeader>
        <StyledLogo headerTheme={headerTheme} isOpen={isOpen} />
        <StyledMenuButtonWrapper>
          <StyledParagraph headerTheme={headerTheme}>
            Krakow, Poland
          </StyledParagraph>
          <StyledLink
            href='mailto:miboruch@gmail.com'
            headerTheme={headerTheme}
          >
            miboruch@gmail.com
          </StyledLink>
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
