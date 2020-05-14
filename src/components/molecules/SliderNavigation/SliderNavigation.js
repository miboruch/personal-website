import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import PropTypes from 'prop-types';
import Paragraph from '../../atoms/Paragraph/Paragraph';

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

const StyledNextLabel = styled(Paragraph)`
  text-transform: uppercase;
  letter-spacing: 5px;
  color: inherit !important;

  ${({ theme }) => theme.mq.standard} {
    font-size: 12px;
    font-weight: lighter;
  }
`;

const StyledNextCase = styled(Paragraph)`
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
