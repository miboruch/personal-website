import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';
import PropTypes from 'prop-types';
import Menu from '../../templates/Menu/Menu';
import { useScrollPosition } from '../../../utils/customHooks';
import MenuButton from '../MenuButton/MenuButton';
import Logo from '../../atoms/Logo/Logo';
import { StyledHeader, StyledLink } from './Header.styles';

const Header = ({ headerTheme }) => {
  const headerRef = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const isOnTop = useScrollPosition();

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
        isOnTop={isOnTop}
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
        <Logo headerTheme={headerTheme} isOpen={isOpen} />
      </StyledHeader>
      <Menu isOpen={isOpen} headerTheme={headerTheme} />
    </>
  );
};

Header.propTypes = {
  headerTheme: PropTypes.oneOf(['dark', 'light'])
};

export default Header;
