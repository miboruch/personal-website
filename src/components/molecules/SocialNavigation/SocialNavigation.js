import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import PropTypes from 'prop-types';
import { mediaItems } from '../../../utils/items';
import { StyledWrapper, StyledLink } from './SocialNavigation.styles';

const SocialNavigation = ({ headerTheme, noPadding, isDarkTheme }) => {
  const linksRef = useRef(null);
  useEffect(() => {
    const links = linksRef.current;
    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    gsap.set([...links.children], { autoAlpha: 0 });

    tl.fromTo(
      links.children,
      { y: '+=20' },
      { y: '0', autoAlpha: 1, stagger: 0.6, duration: 2, delay: 2.2 }
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
