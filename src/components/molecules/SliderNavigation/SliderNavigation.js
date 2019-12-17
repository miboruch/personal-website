import React from 'react';
import styled from 'styled-components';
import Arrow from '../../../assets/icons/arrow-right.svg';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledNavigationBox = styled.div`
  width: 100%;
  position: absolute;
  bottom: 5px;
  left: 5px;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

const StyledNextLabel = styled(Paragraph)`
  text-transform: uppercase;
  letter-spacing: 5px;
`;

const StyledNextCase = styled(Paragraph)`
  font-family: Avanti;
  transition: all 1s ease;
`;

const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
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
