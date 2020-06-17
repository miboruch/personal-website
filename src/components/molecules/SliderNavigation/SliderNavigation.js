import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import PropTypes from 'prop-types';
import {
  StyledNavigationBox,
  StyledNextLabel,
  StyledNextCase,
  ArrowWrapper,
  StyledFlexWrapper
} from './SliderNavigation.styles';

const SliderNavigation = ({ next, children, isDarkTheme }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    gsap.set(text, {
      transform: 'matrix(0.99, 0.33, 0, 1, 0, 100)'
    });

    tl.to(text, {
      transform: 'matrix(1,0,0,1,0,0)',
      duration: 2
    });
  }, []);

  return (
    <StyledNavigationBox>
      <ArrowWrapper>{children}</ArrowWrapper>
      <StyledFlexWrapper isDarkTheme={isDarkTheme}>
        <StyledNextLabel small='true'>Next</StyledNextLabel>
        <StyledNextCase large='true' ref={textRef} isDarkTheme={isDarkTheme}>
          {next}
        </StyledNextCase>
      </StyledFlexWrapper>
    </StyledNavigationBox>
  );
};

SliderNavigation.propTypes = {
  next: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isDarkTheme: PropTypes.bool
};

export default SliderNavigation;
