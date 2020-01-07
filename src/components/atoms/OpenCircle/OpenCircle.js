import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import Paragraph from '../Paragraph/Paragraph';

const StyledCircle = styled(animated.div)`
  display: none;
  width: 200px;
  height: 200px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  border-radius: 50%;
  transition: border 1s ease;

  ${({ theme }) => theme.mq.standard} {
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      border: 1px solid rgba(255, 255, 255, 0.7);
      cursor: pointer;
    }
  }
`;

const StyledCircleText = styled(Paragraph)`
  width: auto;
  text-align: center;
  line-height: 2;
  font-family: ${({ theme }) => theme.font.family.futura};
  font-weight: bold;
  word-spacing: 100vw;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

const OpenCircle = ({ style, text }) => {
  return (
    <StyledCircle style={style}>
      <StyledCircleText small='true' style={style}>
        open {text}
      </StyledCircleText>
    </StyledCircle>
  );
};

OpenCircle.propTypes = {
  text: PropTypes.string
};

export default OpenCircle;
