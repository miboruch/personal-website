import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { animationIn } from '../../../utils/animations';
import { animated } from 'react-spring';

const StyledNavigationBox = styled.div`
  width: 100%;
  position: absolute;
  bottom: 5px;
  right: 5px;
  display: flex;
  justify-content: space-between;
  padding: 2rem;

  ${({ theme }) => theme.mq.standard} {
    display: none;
  }
`;

const StyledNextLabel = styled(animated(Paragraph))`
  text-transform: uppercase;
  letter-spacing: 5px;

  ${({ theme }) => theme.mq.standard} {
    color: #fff;
    font-size: 12px;
    font-weight: lighter;
  }
`;

const StyledNextCase = styled(animated(Paragraph))`
  font-family: Avanti;
  transition: all 1s ease;
  letter-spacing: 0;

  ${({ theme }) => theme.mq.standard} {
    color: #fff;
  }
`;

const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

const StyledFlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;

  ${({ theme }) => theme.mq.standard} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

const SliderNavigation = ({ next, children }) => {
  const bottomSlide = animationIn(true, 1000, 3000, 0);
  return (
    <StyledNavigationBox>
      <ArrowWrapper>{children}</ArrowWrapper>
      <StyledFlexWrapper>
        <StyledNextLabel small='true'>Next</StyledNextLabel>
        <StyledNextCase large='true' style={bottomSlide}>
          {next}
        </StyledNextCase>
      </StyledFlexWrapper>
    </StyledNavigationBox>
  );
};

SliderNavigation.propTypes = {
  next: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default SliderNavigation;
