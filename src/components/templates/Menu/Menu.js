import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Link from '../../atoms/Link/Link';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { animated } from 'react-spring';
import { useScreenSize } from '../../../utils/customHooks';
import { menuItems } from '../../../utils/items';
import { AnimatedMenu, MenuItems } from './menuAnimations';
import SocialNavigation from '../../molecules/SocialNavigation/SocialNavigation';

const StyledMenuBox = styled(animated.div)`
  position: fixed;
  top: 5px;
  right: 5px;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.menuBox};
  z-index: 900;
  opacity: 1;
  transform-origin: top right;
  will-change: transform;

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
    content: '${({ beforeContent }) => beforeContent}';
    position: absolute;
    display: none;
    font-size: 40px;
    color: rgba(63,63,63,0.5);
    top: -20px;
    z-index: -1;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: transparent;
    transition: all 1s ease;
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
          -webkit-text-stroke-color: #3d3d3d;
        }

        &::before {
          color: rgba(204, 204, 204, 0.5);
        }
      `}
  }
`;

const Menu = ({ isOpen, boxSize, headerTheme }) => {
  const { screenWidth, screenHeight } = useScreenSize();
  const { width, height } = boxSize;

  const scaleWidth = width / (screenWidth - 10);
  const scaleHeight = height / (screenHeight - 10);

  return (
    <>
      {screenWidth === undefined ? (
        <p>Screen size is loading</p>
      ) : (
        <AnimatedMenu
          state={isOpen ? 'in' : 'out'}
          scale={{ scaleWidth, scaleHeight }}
        >
          {props => (
            <StyledMenuBox
              headerTheme={headerTheme}
              style={props}
              isOpen={isOpen}
            >
              <MenuItems
                keys={item => item.id}
                state={isOpen ? 'in' : 'out'}
                reverse={!isOpen}
                items={menuItems}
              >
                {trailItem => trailProps => (
                  <ParagraphBox style={trailProps} headerTheme={headerTheme}>
                    <Link to={trailItem.link}>
                      <StyledMenuItems
                        title='true'
                        headerTheme={headerTheme}
                        beforeContent={trailItem.before}
                      >
                        {trailItem.name}
                      </StyledMenuItems>
                    </Link>
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
