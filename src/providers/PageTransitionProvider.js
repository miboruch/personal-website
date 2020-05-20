import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';
import PropTypes from 'prop-types';
import gsap from 'gsap';

const PageTransitionProvider = ({ children, to }) => {
  const exitAnimation = () => {
    const body = document.body;
    const wrapper = body.querySelector('.transition-wrapper');

    const tl = gsap.timeline({ defaults: { ease: 'Power3.easeOut' } });

    tl.fromTo(
      wrapper.children,
      { y: '0' },
      {
        y: '+=30',
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.1
      }
    );
  };

  const enterAnimation = () => {
    const body = document.body;
    const wrapper = body.querySelector('.transition-wrapper');

    const tl = gsap.timeline({ defaults: { ease: 'Power3.easeIn' } });
    gsap.set(wrapper, { autoAlpha: 0 });

    tl.to(wrapper, {
      autoAlpha: 1,
      duration: 1
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

PageTransitionProvider.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired
};

export default PageTransitionProvider;
