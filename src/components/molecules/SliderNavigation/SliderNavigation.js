import React from 'react';
import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledNavigationBox = styled.div`
  width: 100%;
  position: absolute;
  bottom: 5px;
  left: 5px;
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
  margin-right: 1rem;
`;

const SliderNavigation = ({ next, children }) => {
  return (
    <StyledNavigationBox>
      <div>
        <StyledNextLabel small='true'>Next</StyledNextLabel>
        <StyledNextCase large='true'>{next}</StyledNextCase>
      </div>
      <ArrowWrapper>{children}</ArrowWrapper>
    </StyledNavigationBox>
  );
};

export default SliderNavigation;
