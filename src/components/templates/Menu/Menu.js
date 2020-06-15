import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { menuItems } from '../../../utils/items';
import SocialNavigation from '../../molecules/SocialNavigation/SocialNavigation';
import { easeExpInOut } from 'd3-ease';
import SlidePageTransitionProvider from '../../../providers/SlidePageTransitionProvider';
import {
  StyledMenuBox,
  NavigationWrapper,
  ParagraphBox,
  StyledMenuItems,
  MenuItems
} from './Menu.styles';

const Menu = ({ isOpen, headerTheme }) => {
  const [tlIn] = useState(gsap.timeline({ defaults: { ease: easeExpInOut } }));
  const menuRef = useRef();
  const paragraphWrapperRef = useRef();

  useEffect(() => {
    const menuItems = paragraphWrapperRef.current;
    gsap.set(menuItems.children, { autoAlpha: 0 });

    tlIn.fromTo(
      menuItems.children,
      { x: '-=30' },
      { x: '0', autoAlpha: 1, duration: 1, stagger: 0.3, delay: 1 }
    );
  }, []);

  useEffect(() => {
    isOpen ? tlIn.play() : tlIn.reverse();
  }, [isOpen]);

  return (
    <>
      <StyledMenuBox ref={menuRef} headerTheme={headerTheme} isOpen={isOpen}>
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
          <SocialNavigation toggleState={isOpen} headerTheme={headerTheme} />
        </NavigationWrapper>
      </StyledMenuBox>
    </>
  );
};

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  headerTheme: PropTypes.oneOf(['dark', 'light'])
};

export default Menu;
