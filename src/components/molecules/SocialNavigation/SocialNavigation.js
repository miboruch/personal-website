import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';
import PropTypes from 'prop-types';
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

const StyledLink = styled.a`
  color: ${({ headerTheme }) => (headerTheme === 'light' ? '#000' : '#fff')};
  text-decoration: none;
  padding: ${({ noPadding }) =>
    noPadding ? '0 4rem 0.5rem 0' : '2rem 2rem 0.5rem 2rem'};
  letter-spacing: 1px;
  transition: color 0.5s ease;

  ${({ isDarkTheme }) =>
    isDarkTheme &&
    css`
      color: ${({ isDarkTheme }) => (isDarkTheme ? '#222' : '#e7e5e1')};
    `}
`;

const SocialNavigation = ({ headerTheme, noPadding, isDarkTheme }) => {
  const linksRef = useRef(null);
  useEffect(() => {
    const links = linksRef.current;
    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    gsap.set([...links.children], { autoAlpha: 0 });

    tl.fromTo(
      links.children,
      { y: '+=20' },
      { y: '0', autoAlpha: 1, stagger: 0.6, delay: 1.2 }
    );
  }, []);

  return (
    <StyledWrapper noPadding={noPadding} ref={linksRef}>
      {mediaItems.map(item => (
        <StyledLink
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
