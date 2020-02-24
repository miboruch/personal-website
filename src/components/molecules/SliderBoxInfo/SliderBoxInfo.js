import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TimeoutBar from '../../atoms/TimeoutBar/TimeoutBar';
import { animated } from 'react-spring';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { CurrentSlideContext } from '../../../providers/CurrentSlideContext';
import { createFade } from '../../../utils/animations';

const TimeoutBoxWrapper = styled(animated.div)`
  position: absolute;
  display: none;
  width: 350px;
  justify-content: flex-end;
  padding: 0 2rem;
  align-items: center;
  flex-direction: row;
  bottom: 5px;
  left: 5px;
  height: 62px;
  background-color: #f1f1f1;
  transition: all 1s ease;

  ${({ theme }) => theme.mq.standard} {
    display: flex;
  }
`;

const BarWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 2rem;
  transform: translateY(-50%);
`;

const NextStandardWrapper = styled.div`
  display: none;
  flex-direction: row;

  ${({ theme }) => theme.mq.standard} {
    display: flex;
  }
`;

const StyledNextLabel = styled(animated(Paragraph))`
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: #2d2d2d;
  font-size: 12px;
  font-weight: lighter;
  display: none;

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
  color: #2d2d2d;
  text-align: right;
`;

const StyledNumber = styled(StyledNextCase)`
  font-family: ${({ theme }) => theme.font.family.futura};
  font-weight: 500;
`;

const SliderBoxInfo = ({ nextProjectName, allProjectsLength }) => {
  const { currentSlide } = useContext(CurrentSlideContext);
  const fade = createFade(true, 1000, 1000, 0);

  return (
    <TimeoutBoxWrapper style={fade}>
      <BarWrapper>
        <StyledNumber>0{currentSlide + 1}</StyledNumber>
        <TimeoutBar allProjectsLength={allProjectsLength} />
        <StyledNumber>0{allProjectsLength}</StyledNumber>
      </BarWrapper>
      <NextStandardWrapper>
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
