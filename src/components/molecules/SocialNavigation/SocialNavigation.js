import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import { Keyframes } from 'react-spring/renderprops-universal';
import { mediaItems } from '../../../utils/items';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: ${({ noPadding }) => (noPadding ? 'left' : 'space-between')};
  align-items: center;
  flex-direction: row;

  &:first-child {
    padding-left: 0;
  }
`;

const StyledLink = styled(animated.a)`
  color: ${({ headerTheme }) => (headerTheme === 'light' ? '#000' : '#fff')};
  text-decoration: none;
  padding: ${({ noPadding }) =>
    noPadding ? '0 4rem 0.5rem 0' : '2rem 2rem 0.5rem 2rem'};
  letter-spacing: 1px;

  ${({ isDarkTheme }) =>
    isDarkTheme &&
    css`
      color: ${({ isDarkTheme }) => (isDarkTheme ? '#222' : '#e7e5e1')};
    `}
`;

const LinksFade = Keyframes.Spring({
  in: async next => {
    await next({
      opacity: 1,
      config: {
        duration: 1000
      },
      delay: 3000
    });
  },
  out: async next => {
    await next({
      opacity: 0,
      delay: 0,
      config: {
        duration: 1000
      }
    });
  }
});

const SocialNavigation = ({
  headerTheme,
  toggleState,
  noPadding,
  isDarkTheme
}) => {
  return (
    <>
      <LinksFade state={toggleState ? 'in' : 'out'}>
        {props => (
          <StyledWrapper noPadding={noPadding}>
            {mediaItems.map(item => (
              <StyledLink
                style={props}
                noPadding={noPadding}
                key={item.id}
                medium='true'
                href={item.link}
                target='_blank'
                rel='noreferrer'
                headerTheme={headerTheme}
                isDarkTheme={isDarkTheme}
              >
                {item.name}
              </StyledLink>
            ))}
          </StyledWrapper>
        )}
      </LinksFade>
    </>
  );
};

SocialNavigation.propTypes = {
  headerTheme: PropTypes.oneOf(['dark', 'light']),
  noPadding: PropTypes.bool
};

SocialNavigation.defaultProps = {
  noPadding: false
};

export default SocialNavigation;
