import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Paragraph from '../atoms/Paragraph/Paragraph';
import { animated } from 'react-spring';
import { useScreenSize } from '../../utils/customHooks';
import { menuItems } from '../../utils/items';
import { AnimatedMenu, MenuItems } from './menuAnimations';
import SocialNavigation from '../molecules/SocialNavigation/SocialNavigation';

const StyledMenuBox = styled(animated.div)`
  position: absolute;
  top: 5px;
  right: 5px;
  width: calc(100% - 10px);
  height: calc(100vh - 10px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.menuBox};
  z-index: 900;
  opacity: 1;
  transform-origin: top right;
  will-change: transform;

  ${({ headerTheme }) =>
    headerTheme === 'light' &&
    css`
      background-color: ${({ theme }) => theme.color.lightThemeBackground};
    `}
`;

const NavigationWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  padding: 0 2rem;
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

  &:last-child {
    border: none;
  }

  ${({ headerTheme }) =>
    headerTheme === 'light' &&
    css`
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    `}
`;

const StyledMenuItems = styled(Paragraph)`
  color: rgba(255, 255, 255, 0.8);
  transition: color 1s ease;
  font-family: ${({ theme }) => theme.font.family.avanti};

  &::after {
    content: '.0${({ id }) => id}';
    font-size: 25px;
    font-family: ${({ theme }) => theme.font.family.futura};
    font-weight: 500;
    position: absolute;
    letter-spacing: 5px;
    bottom: 0;
    right: 10px;
    color: #fff;
    opacity: 0;
    transition: opacity 1s ease;
  }

  &:hover::after {
    opacity: 0.4;
  }

  ${({ headerTheme }) =>
    headerTheme === 'light' &&
    css`
      color: rgba(0, 0, 0, 0.45);

      &:hover {
        color: rgba(0, 0, 0, 1);
      }
    `}

  ${({ theme }) => theme.mq.standard} {
    color: rgba(255, 255, 255, 0.2);
    transition: color 1s ease;
    &:hover {
      color: rgba(255, 255, 255, 1);
    }

    ${({ headerTheme }) =>
      headerTheme === 'light' &&
      css`
        color: rgba(0, 0, 0, 0.5);

        &:hover {
          color: rgba(0, 0, 0, 0.8);
        }
      `}
  }
`;

const Menu = ({ isOpen, boxSize, headerTheme }) => {
  const { screenWidth, screenHeight } = useScreenSize();
  const { width, height } = boxSize;

  const scaleWidth = width / screenWidth;
  const scaleHeight = height / screenHeight;

  return (
    <>
      {screenWidth === undefined ? (
        <p>Screen width is loading</p>
      ) : (
        <AnimatedMenu
          state={isOpen ? 'in' : 'out'}
          scale={{ scaleWidth, scaleHeight }}
        >
          {props => (
            <StyledMenuBox headerTheme={headerTheme} style={props}>
              <MenuItems
                keys={item => item.id}
                state={isOpen ? 'in' : 'out'}
                reverse={!isOpen}
                items={menuItems}
              >
                {trailItem => trailProps => (
                  <ParagraphBox style={trailProps} headerTheme={headerTheme}>
                    <AniLink to={trailItem.link}>
                      <StyledMenuItems
                        title='true'
                        headerTheme={headerTheme}
                        id={trailItem.id}
                      >
                        {trailItem.name}
                      </StyledMenuItems>
                    </AniLink>
                  </ParagraphBox>
                )}
              </MenuItems>
              <NavigationWrapper>
                <SocialNavigation
                  toggleState={isOpen}
                  headerTheme={headerTheme}
                />
              </NavigationWrapper>
            </StyledMenuBox>
          )}
        </AnimatedMenu>
      )}
    </>
  );
};

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  boxSize: PropTypes.object.isRequired,
  headerTheme: PropTypes.oneOf(['dark, light'])
};

export default Menu;
