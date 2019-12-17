import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { mediaItems } from '../../../utils/items';
import { animated } from 'react-spring';
import { Keyframes } from 'react-spring/renderprops-universal';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const StyledLink = styled(animated.a)`
  color: ${({ lightTheme }) => (lightTheme ? '#000' : '#fff')};
  text-decoration: none;
  padding: 2rem 2rem 0.5rem 2rem;
  letter-spacing: 1px;

  ${({ theme }) => theme.mq.tablet} {
    padding: 2rem 3rem 0.5rem 3rem;
  }
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

const SocialNavigation = ({ lightTheme, toggleState }) => {
  // const {
  //   portfolio: { socialMenus }
  // } = useStaticQuery(graphql`
  //   query {
  //     portfolio {
  //       socialMenus {
  //         index
  //         link
  //         name
  //       }
  //     }
  //   }
  // `);
  return (
    <>
      <LinksFade state={toggleState ? 'in' : 'out'}>
        {props => (
          <StyledWrapper>
            {mediaItems.map(item => (
              <StyledLink
                style={props}
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
          </StyledWrapper>
        )}
      </LinksFade>
    </>
  );
};

SocialNavigation.propTypes = {
  lightTheme: PropTypes.bool
};

SocialNavigation.defaultProps = {
  lightTheme: false
};

export default SocialNavigation;
