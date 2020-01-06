import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { mediaItems } from '../../../utils/items';
import { animated } from 'react-spring';
import { Keyframes } from 'react-spring/renderprops-universal';

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

const SocialNavigation = ({ headerTheme, toggleState, noPadding = false }) => {
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
  headerTheme: PropTypes.oneOf(['dark, light'])
};

export default SocialNavigation;
