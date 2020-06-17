import React from 'react';
import PropTypes from 'prop-types';
import { StyledCircle, StyledCircleText } from './OpenCircle.styles';

const OpenCircle = ({ style, text }) => (
  <StyledCircle style={style}>
    <StyledCircleText small='true' style={style}>
      open {text}
    </StyledCircleText>
  </StyledCircle>
);

OpenCircle.propTypes = {
  text: PropTypes.string
};

export default OpenCircle;
