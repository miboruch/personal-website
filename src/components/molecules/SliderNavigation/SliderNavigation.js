import React from 'react';
import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { animationIn } from '../../../utils/animations';

const StyledNavigationBox = styled.div`
  width: 100%;
  position: absolute;
  bottom: 5px;
  right: 5px;
  display: flex;
  justify-content: space-between;
  padding: 2rem;

  ${({ theme }) => theme.mq.standard} {
    width: 500px;
    background: ${({ theme }) => theme.color.lightThemeBackground};
    padding: 3rem;
  }
`;

const StyledNextLabel = styled(Paragraph)`
  text-transform: uppercase;
  letter-spacing: 5px;

  ${({ theme }) => theme.mq.standard} {
    color: #000;
    position: absolute;
    font-size: 12px;
    left: 10px;
    font-weight: lighter;
  }
`;

const StyledNextCase = styled(Paragraph)`
  font-family: Avanti;
  transition: all 1s ease;
  letter-spacing: 0;

  ${({ theme }) => theme.mq.standard} {
    color: #000;
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
  return (
    <StyledNavigationBox>
      <ArrowWrapper>{children}</ArrowWrapper>
      <StyledFlexWrapper>
        <StyledNextLabel small='true'>Next</StyledNextLabel>
        <StyledNextCase large='true'>{next}</StyledNextCase>
      </StyledFlexWrapper>
    </StyledNavigationBox>
  );
};

export default SliderNavigation;
