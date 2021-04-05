import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { easeExpInOut } from 'd3-ease';

import SocialNavigation from 'components/molecules/SocialNavigation/SocialNavigation';
import SlidePageTransitionProvider from '../../../providers/SlidePageTransitionProvider';
import { Theme } from 'types';
import { menuItems } from 'utils';

import {
  StyledMenuBox,
  NavigationWrapper,
  ParagraphBox,
  StyledMenuItems,
  MenuItems
} from 'components/navigation/Menu/Menu.styles';

interface Props {
  isOpen: boolean;
  headerTheme: Theme;
}

const Menu: React.FC<Props> = ({ isOpen, headerTheme }) => {
  const [tlIn] = useState(gsap.timeline({ defaults: { ease: easeExpInOut } }));
  const paragraphWrapperRef = useRef<HTMLDivElement>(null);
  const socialNavigationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const menuItems = paragraphWrapperRef.current;
    const socialNavigation = socialNavigationRef.current;

    if (menuItems && socialNavigation) {
      gsap.set([menuItems.children, socialNavigation.children], {
        autoAlpha: 0
      });

      tlIn
        .fromTo(
          menuItems.children,
          { x: '-=30' },
          { x: '0', autoAlpha: 1, duration: 1, stagger: 0.3, delay: 1 }
        )
        .to(socialNavigation.children, { autoAlpha: 1, stagger: 0.3 });
    }
  }, []);

  useEffect(() => {
    isOpen ? tlIn.play() : tlIn.reverse();
  }, [isOpen]);

  return (
    <StyledMenuBox headerTheme={headerTheme} isOpen={isOpen}>
      <MenuItems ref={paragraphWrapperRef}>
        {menuItems.map(item => (
          <ParagraphBox headerTheme={headerTheme} key={item.id}>
            <SlidePageTransitionProvider to={item.link} isDark={true}>
              <StyledMenuItems
                title='true'
                headerTheme={headerTheme}
                before={item.before}
              >
                {item.name}
              </StyledMenuItems>
            </SlidePageTransitionProvider>
          </ParagraphBox>
        ))}
      </MenuItems>
      <NavigationWrapper>
        <SocialNavigation headerTheme={headerTheme} ref={socialNavigationRef} />
      </NavigationWrapper>
    </StyledMenuBox>
  );
};

export default Menu;
