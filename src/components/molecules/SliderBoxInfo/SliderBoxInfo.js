import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import styled from 'styled-components';
import TimeoutBar from '../../atoms/TimeoutBar/TimeoutBar';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { CurrentSlideContext } from '../../../providers/CurrentSlideContext';

const TimeoutBoxWrapper = styled.div`
  position: absolute;
  display: none;
  width: 300px;
  height: 62px;
  justify-content: flex-end;
  padding: 1rem 3rem;
  align-items: center;
  flex-direction: row;
  bottom: 5px;
  left: 5px;
  background-color: ${({ isDarkTheme }) => (isDarkTheme ? '#222' : '#f1f1f1')};
  box-sizing: content-box;

  ${({ theme }) => theme.mq.standard} {
    display: flex;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 350px;
  }
`;

const BarWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 2rem;
  transform: translateY(-50%);
  color: ${({ isDarkTheme }) => (isDarkTheme ? '#f1f1f1' : '#222')};
`;

const NextStandardWrapper = styled.div`
  display: none;
  flex-direction: row;
  color: ${({ isDarkTheme }) => (isDarkTheme ? '#f1f1f1' : '#222')};

  ${({ theme }) => theme.mq.standard} {
    display: flex;
  }
`;

const StyledNextLabel = styled(Paragraph)`
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 12px;
  font-weight: lighter;
  display: none;
  color: inherit !important;

  ${({ theme }) => theme.mq.standard} {
    display: flex;
  }
`;

const StyledOverflow = styled.div`
  overflow: hidden;
  margin-bottom: 0.25rem;
  padding-right: 1rem;
`;

const StyledNextCase = styled(Paragraph)`
  font-family: 'Avanti';
  transition: all 1s ease;
  text-transform: capitalize;
  letter-spacing: 0;
  text-align: right;
  color: inherit !important;
`;

const StyledNumber = styled(StyledNextCase)`
  font-family: ${({ theme }) => theme.font.family.futura};
  font-weight: 500;
`;

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
      { y: '0', autoAlpha: 1, duration: 1.2, delay: 1.6 }
    ).fromTo(
      box.children,
      { y: '+=20' },
      { y: '0', autoAlpha: 1, duration: 1.5, stagger: 0.6, delay: 2.2 }
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
