import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import gsap from 'gsap';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { animated } from 'react-spring';
import { useScreenSize } from '../../../utils/customHooks';
import { menuItems } from '../../../utils/items';
import SocialNavigation from '../../molecules/SocialNavigation/SocialNavigation';
import { easeExpInOut } from 'd3-ease';

const StyledMenuBox = styled.div`
  position: fixed;
  top: 5px;
  right: 5px;
  width: 200px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.menuBox};
  z-index: 900;
  opacity: 1;
  transform-origin: top right;

  ${({ theme }) => theme.mq.mobileL} {
    width: 220px;
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 300px;
  }

  ${({ theme }) => theme.mq.standard} {
    flex-direction: row;
  }

  ${({ headerTheme }) =>
    headerTheme === 'light' &&
    css`
      background-color: ${({ theme }) => theme.color.lightThemeBackground};
    `}
`;

const NavigationWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  padding: 0 2rem;
  left: 50%;
  transform: translateX(-50%);

  ${({ theme }) => theme.mq.standard} {
    right: 2rem;
    left: auto;
    transform: translate(0);
  }
`;

const ParagraphBox = styled(animated.div)`
  width: 100%;
  height: 33vh;
  text-align: center;
  font-size: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  background-color: transparent;
  transition: background-color 1s ease;

  &:last-child {
    border: none;
  }

  ${({ headerTheme }) =>
    headerTheme === 'light' &&
    css`
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    `}

  ${({ theme }) => theme.mq.standard} {
    border-right: 1px solid rgba(255, 255, 255, 0.3);
    border-bottom: none;
    height: 100%;

    &:hover {
      background-color: ${({ headerTheme }) =>
        headerTheme === 'light' ? '#e1e1e1' : '#1b1b1b'};
    }

    ${({ headerTheme }) =>
      headerTheme === 'light' &&
      css`
        border-right: 1px solid rgba(0, 0, 0, 0.15);
      `}
  }
`;

const StyledMenuItems = styled(Paragraph)`
  color: rgba(255, 255, 255, 0.8);
  transition: color 1s ease;
  font-family: ${({ theme }) => theme.font.family.avanti};
  position: relative;

  &::before {
    content: '${({ before }) => before}';
    position: absolute;
    display: none;
    font-size: 40px;
    color: rgba(63,63,63,0.5);
    top: 60px;
    z-index: -1;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: transparent;
    transition: all 1s ease;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    text-align: right;
  }

  ${({ headerTheme }) =>
    headerTheme === 'light' &&
    css`
      color: rgba(0, 0, 0, 0.45);

      &:hover {
        color: rgba(0, 0, 0, 1);
      }
    `}

  /* Styles for standard window size */
  ${({ theme }) => theme.mq.standard} {
    color: rgba(255, 255, 255, 0.2);
    transition: color 1s ease;
    
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
   
    &:hover::before{
      -webkit-text-stroke-color: #6f6f6f;
    }
    
    &::before {
      display: block;
    }

    ${({ headerTheme }) =>
      headerTheme === 'light' &&
      css`
        color: rgba(0, 0, 0, 0.5);

        &:hover {
          color: rgba(0, 0, 0, 0.8);
        }

        &:hover::before {
          -webkit-text-stroke-color: rgba(0, 0, 0, 0.2);
        }

        &::before {
          color: rgba(204, 204, 204, 0.5);
        }
      `}
  }
  
  /* Styles for desktop window size */
  ${({ theme }) => theme.mq.desktop}{
    &::before{
      top: -20px;
      writing-mode: horizontal-tb;
      transform: rotate(0);
      text-align: left;
    }
  }
`;

const MenuItems = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mq.standard} {
    flex-direction: row;
  }
`;

const Menu = ({ isOpen, boxSize, headerTheme }) => {
  const [tl] = useState(gsap.timeline({ defaults: { ease: easeExpInOut } }));
  const menuRef = useRef();
  const paragraphWrapperRef = useRef();
  const { screenWidth, screenHeight } = useScreenSize();

  useEffect(() => {
    const menuBox = menuRef.current;
    const menuItems = paragraphWrapperRef.current;

    gsap.set(menuItems.children, { autoAlpha: 0 });

    tl.to(menuBox, {
      width: 'calc(100vw - 10px)',
      height: 'calc(100vh - 10px)',
      duration: 0.8
    })
      .to(menuBox, {
        outline: '5px solid #fff',
        duration: 0.4
      })
      .fromTo(
        menuItems.children,
        { x: '-=30' },
        { x: '0', autoAlpha: 1, duration: 1, stagger: 0.3 }
      );
  }, []);

  useEffect(() => {
    isOpen ? tl.play() : tl.reverse();
  }, [isOpen]);

  return (
    <>
      <StyledMenuBox ref={menuRef} headerTheme={headerTheme} isOpen={isOpen}>
        <MenuItems ref={paragraphWrapperRef}>
          {menuItems.map(item => (
            <ParagraphBox headerTheme={headerTheme} key={item.id}>
              <Link to={item.link}>
                <StyledMenuItems
                  title='true'
                  headerTheme={headerTheme}
                  before={item.before}
                >
                  {item.name}
                </StyledMenuItems>
              </Link>
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
  boxSize: PropTypes.object.isRequired,
  headerTheme: PropTypes.oneOf(['dark', 'light'])
};

export default Menu;
