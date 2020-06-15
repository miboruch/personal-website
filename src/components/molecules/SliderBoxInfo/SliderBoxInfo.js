import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import TimeoutBar from '../../atoms/TimeoutBar/TimeoutBar';
import { CurrentSlideContext } from '../../../providers/CurrentSlideContext';
import {
  TimeoutBoxWrapper,
  BarWrapper,
  NextStandardWrapper,
  StyledNextLabel,
  StyledOverflow,
  StyledNextCase,
  StyledNumber
} from './SliderBoxInfo.styles';

const SliderBoxInfo = ({ nextProjectName, allProjectsLength, isDarkTheme }) => {
  const { currentSlide } = useContext(CurrentSlideContext);
  const boxRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;
    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    gsap.set([box, ...box.children], { autoAlpha: 0 });

    tl.fromTo(
      box,
      { y: '+=50' },
      { y: '0', autoAlpha: 1, duration: 1.2, delay: 1 }
    ).fromTo(
      box.children,
      { y: '+=20' },
      { y: '0', autoAlpha: 1, duration: 1.5, stagger: 0.4, delay: 1 }
    );
  }, []);

  return (
    <TimeoutBoxWrapper ref={boxRef} isDarkTheme={isDarkTheme}>
      <BarWrapper isDarkTheme={isDarkTheme}>
        <StyledNumber>0{currentSlide + 1}</StyledNumber>
        <TimeoutBar
          allProjectsLength={allProjectsLength}
          isDarkTheme={isDarkTheme}
        />
        <StyledNumber>0{allProjectsLength}</StyledNumber>
      </BarWrapper>
      <NextStandardWrapper isDarkTheme={isDarkTheme}>
        <StyledNextLabel>NEXT</StyledNextLabel>
        <StyledOverflow>
          <StyledNextCase large='true'>{nextProjectName}</StyledNextCase>
        </StyledOverflow>
      </NextStandardWrapper>
    </TimeoutBoxWrapper>
  );
};

SliderBoxInfo.propTypes = {
  nextProjectName: PropTypes.string.isRequired,
  allProjectsLength: PropTypes.number.isRequired
};

export default SliderBoxInfo;
