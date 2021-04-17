import React from 'react';

import { StyledCircle, StyledCircleText } from './OpenCircle.styles';

interface Props {
  text?: string;
}

const OpenCircle: React.FC<Props> = ({ text }) => (
  <StyledCircle>
    <StyledCircleText size={'small'}>open {text}</StyledCircleText>
  </StyledCircle>
);

export default OpenCircle;
