import React from 'react';

import { Theme } from 'types';

import { StyledFooter, StyledParagraph, StyledSpan } from './Footer.styles';

interface Props {
  footerTheme: Theme;
}

const Footer: React.FC<Props> = ({ footerTheme }) => (
  <StyledFooter footerTheme={footerTheme}>
    <StyledParagraph>2020</StyledParagraph>
    <StyledParagraph>
      <StyledSpan footerTheme={footerTheme}>MICHAL</StyledSpan> BORUCH
    </StyledParagraph>
  </StyledFooter>
);

export default Footer;
