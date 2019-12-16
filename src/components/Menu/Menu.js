import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Paragraph from '../atoms/Paragraph/Paragraph';
import { animated } from 'react-spring';
import { useScreenSize } from '../../utils/customHooks';
import { menuItems, mediaItems } from '../../utils/items';
import { AnimatedMenu, LinksFade, MenuItems } from './menuAnimations';

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
  background-color: ${({ lightTheme, theme }) =>
    lightTheme ? '#fff' : theme.color.menuBox};
  z-index: 900;
  opacity: 1;
  transform-origin: top right;
  will-change: transform;
`;

const StyledLinksBox = styled(animated.div)`
  width: 90%;
  margin: auto;
  position: absolute;
  bottom: 2rem;
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
`;

const ParagraphBox = styled(animated.div)`
  width: 100%;
  height: 33vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${({ lightTheme }) =>
    lightTheme
      ? '1px solid rgba(0, 0, 0, 0.15)'
      : '1px solid rgba(255, 255, 255, 0.3)'};
`;

const StyledMenuItems = styled(Paragraph)`
  color: ${({ lightTheme }) =>
    lightTheme ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.8)'};
  transition: color 1s ease;

  ${({ theme }) => theme.mq.standard} {
    color: ${({ lightTheme }) =>
      lightTheme ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.2)'}
    transition: color 1s ease;

    &:hover {
      color: ${({ lightTheme }) =>
        lightTheme ? 'rgba(0,0,0,1)' : 'rgba(255,255,255,1)'}
    }
  }
`;

const StyledLink = styled.a`
  color: ${({ lightTheme }) => (lightTheme ? '#000' : '#fff')};
  text-decoration: none;
  padding: 2rem 2rem 0.5rem 2rem;
  letter-spacing: 1px;
`;

const Menu = ({ isOpen, boxSize, lightTheme }) => {
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
            <StyledMenuBox lightTheme={lightTheme} style={props}>
              <MenuItems
                keys={item => item.id}
                state={isOpen ? 'in' : 'out'}
                reverse={!isOpen}
                items={menuItems}
              >
                {trailItem => trailProps => (
                  <ParagraphBox style={trailProps} lightTheme={lightTheme}>
                    <AniLink to={trailItem.link}>
                      <StyledMenuItems title='true' lightTheme={lightTheme}>
                        {trailItem.name}
                      </StyledMenuItems>
                    </AniLink>
                  </ParagraphBox>
                )}
              </MenuItems>
              <LinksFade state={isOpen ? 'in' : 'out'}>
                {props => (
                  <StyledLinksBox style={props}>
                    {mediaItems.map(item => (
                      <StyledLink
                        key={item.id}
                        medium='true'
                        href={item.link}
                        target='_blank'
                        rel='noreferrer'
                        lightTheme={lightTheme}
                      >
                        {item.name}
                      </StyledLink>
                    ))}
                  </StyledLinksBox>
                )}
              </LinksFade>
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
  lightTheme: PropTypes.bool
};

export default Menu;
