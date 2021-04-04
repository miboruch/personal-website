import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

import Menu from '../Menu/Menu';
import MenuButton from 'components/molecules/MenuButton/MenuButton';
import { useScroll } from 'components/hooks/use-scroll.hook';
import Logo from '../../atoms/Logo/Logo';
import { HeaderTheme } from 'types';

import { StyledHeader, StyledLink } from './Header.styles';

interface Props {
  headerTheme: HeaderTheme;
}

const Header: React.FC<Props> = ({ headerTheme }) => {
  const headerRef = useRef<HTMLElement>(null);
  const [isOpen, setOpen] = useState(false);
  const { isOnTop } = useScroll();

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const header = headerRef.current;
    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    if (header) {
      gsap.set([...header.children], { autoAlpha: 0 });

      tl.fromTo(
        header.children,
        { y: '-=15' },
        { y: '0', autoAlpha: 1, duration: 1.2, stagger: 0.3, delay: 0.7 }
      );
    }
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

export default Header;
