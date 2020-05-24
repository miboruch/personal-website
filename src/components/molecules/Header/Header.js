import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';
import PropTypes from 'prop-types';
import Menu from '../../templates/Menu/Menu';
import { useElementSize, useScrollPosition } from '../../../utils/customHooks';
import MenuButton from '../MenuButton/MenuButton';
import Logo from '../../atoms/Logo/Logo';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin-bottom: 10px;
  height: 62px;
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

const StyledLink = styled.a`
  position: absolute;
  right: 345px;
  display: none;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  color: #fff;
  transition: color 1s ease;
  visibility: hidden;

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

const StyledLogo = styled(Logo)`
  visibility: hidden;
`;

const Header = ({ headerTheme }) => {
  const headerRef = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const pageY = useScrollPosition();

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const header = headerRef.current;
    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    gsap.set([...header.children], { autoAlpha: 0 });

    tl.fromTo(
      header.children,
      { y: '-=15' },
      { y: '0', autoAlpha: 1, duration: 1.2, stagger: 0.3, delay: 0.7 }
    );
  }, []);

  return (
    <>
      <StyledHeader
        isOnTop={pageY}
        isOpen={isOpen}
        headerTheme={headerTheme}
        ref={headerRef}
      >
        <MenuButton
          isOpen={isOpen}
          toggleMenu={toggleMenu}
          headerTheme={headerTheme}
        />
        <StyledLink
          href='mailto:miboruch@gmail.com'
          headerTheme={headerTheme}
          isOpen={isOpen}
        >
          miboruch@gmail.com
        </StyledLink>
        <StyledLogo headerTheme={headerTheme} isOpen={isOpen} />
      </StyledHeader>
      <Menu isOpen={isOpen} headerTheme={headerTheme} />
    </>
  );
};

Header.propTypes = {
  headerTheme: PropTypes.oneOf(['dark', 'light'])
};

export default Header;
