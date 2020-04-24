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
    top: 50%;
    transform: translateY(-50%);
    right: 150px;
    display: none;
  }
`;

const StyledNextLabel = styled(animated(Paragraph))`
  text-transform: uppercase;
  letter-spacing: 5px;
  color: inherit !important;

  ${({ theme }) => theme.mq.standard} {
    font-size: 12px;
    font-weight: lighter;
  }
`;

const StyledNextCase = styled(animated(Paragraph))`
  font-family: Avanti;
  transition: all 1s ease;
  letter-spacing: 0;
  text-transform: capitalize;
  color: inherit !important;
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
  color: ${({ isDarkTheme }) => (isDarkTheme ? '#222' : '#e7e5e1')};

  ${({ theme }) => theme.mq.standard} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    display: none;
  }
`;

const SliderNavigation = ({ next, children, isDarkTheme }) => {
  const bottomSlide = animationIn(true, 1000, 3000, 0);
  return (
    <StyledNavigationBox>
      <ArrowWrapper>{children}</ArrowWrapper>
      <StyledFlexWrapper isDarkTheme={isDarkTheme}>
        <StyledNextLabel small='true'>Next</StyledNextLabel>
        <StyledNextCase
          large='true'
          style={bottomSlide}
          isDarkTheme={isDarkTheme}
        >
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
