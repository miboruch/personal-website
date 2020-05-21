import React from 'react';
import gsap from 'gsap';
import TransitionLink from 'gatsby-plugin-transition-link';
import PropTypes from 'prop-types';

const createBox = isDark => {
  const body = document.body;
  const box = document.createElement('div');
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  box.style.zIndex = 1000;
  box.style.bottom = 0;
  box.style.position = 'fixed';
  box.style.display = 'flex';
  box.style.justifyContent = 'center';
  box.style.alignItems = 'center';
  box.style.backgroundColor = `${isDark ? '#212121' : '#f1f1f1'}`;
  box.style.width = `${vw}px`;
  box.style.height = `${vh}px`;

  body.appendChild(box);
  return { box, body, vw };
};

const SlidePageTransitionProvider = ({ children, to, isDark }) => {
  const exitAnimation = () => {
    const { box, body, vw } = createBox(isDark);
    const tl = gsap.timeline({ defaults: { ease: 'Power3.easeOut' } });

    tl.fromTo(
      box,
      { x: -vw },
      { x: 0, duration: 1, onComplete: () => body.removeChild(box) }
    );
  };

  const enterAnimation = () => {
    const { box, body, vw } = createBox(isDark);
    const tl = gsap.timeline({ defaults: { ease: 'Power3.easeIn' } });

    tl.to(box, {
      duration: 1,
      x: vw,
      onComplete: () => body.removeChild(box)
    });
  };

  return (
    <>
      <TransitionLink
        style={{ textDecoration: 'none', color: 'inherit' }}
        to={to}
        exit={{
          trigger: ({ exit, node }) => exitAnimation(exit, node),
          length: 2
        }}
        entry={{
          delay: 0.5,
          trigger: ({ entry, node }) => enterAnimation(entry, node)
        }}
      >
        {children}
      </TransitionLink>
    </>
  );
};

SlidePageTransitionProvider.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  isDark: PropTypes.bool
};

SlidePageTransitionProvider.defaultProps = {
  isDark: false
};

export default SlidePageTransitionProvider;
